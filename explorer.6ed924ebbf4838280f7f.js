"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[12],{

/***/ 2749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2110);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1939);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2094);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2750);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(437);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);












const {
  operations
} = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__.ChainTypes;
let ops = Object.keys(operations); // Define groups and their corresponding operation ids

let fee_grouping = {
  general: [0, 25, 26, 27, 28, 32, 33, 37, 39, 41, 49, 50, 52],
  asset: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 43, 44, 47, 48],
  market: [1, 2, 3, 4, 45, 46],
  account: [5, 6, 7, 8, 9],
  business: [20, 21, 22, 23, 24, 29, 30, 31, 34, 35, 36]
}; // Operations that require LTM

let ltm_required = [5, 7, 20, 21, 34];

class FeeGroup extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainObject.isRequired
  };
  static defaultProps = {
    globalObject: "2.0.0"
  };

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return !immutable__WEBPACK_IMPORTED_MODULE_1___default().is(nextProps.globalObject, this.props.globalObject);
  }

  render() {
    let {
      globalObject,
      settings,
      opIds,
      title
    } = this.props;
    globalObject = globalObject.toJS();
    const core_asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__.ChainStore.getAsset("1.3.0");
    let current_fees = globalObject.parameters.current_fees;
    let network_fee = globalObject.parameters.network_percent_of_fee / 1e4;
    let scale = current_fees.scale;
    let feesRaw = current_fees.parameters;
    let preferredUnit = settings.get("fee_asset") || core_asset.get("symbol");
    let trxTypes = counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("transaction.trxTypes");
    let fees = opIds.map(opID => {
      let feeIdx = feesRaw.findIndex(f => f[0] === opID);

      if (feeIdx === -1) {
        console.warn("Asking for non-existing fee id %d! Check group settings in Fees.jsx", opID);
        return; // FIXME, if I ask for a fee that does not exist?
      }

      let feeStruct = feesRaw[feeIdx];
      let opId = feeStruct[0];
      let fee = feeStruct[1];
      let operation_name = ops[opId];
      let feename = trxTypes[operation_name]; //let feename = trxTypes[operation_name] + ` (${opId})`;

      let feeRateForLTM = network_fee;

      if (opId === 10) {
        // See https://github.com/bitshares/bitshares-ui/issues/996
        feeRateForLTM = 0.5 + 0.5 * network_fee;
      }

      let rows = [];
      let headIncluded = false;
      let labelClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()("label", "info");

      for (let key in fee) {
        let amount = fee[key] * scale / 1e4;
        let amountForLTM = amount * feeRateForLTM;
        let feeTypes = counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("transaction.feeTypes");
        let assetAmount = amount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
          amount: amount,
          asset: "1.3.0"
        }) : feeTypes["_none"];
        let equivalentAmount = amount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__.EquivalentValueComponent, {
          fromAsset: "1.3.0",
          fullPrecision: true,
          amount: amount,
          toAsset: preferredUnit,
          fullDecimals: true
        }) : feeTypes["_none"];
        let assetAmountLTM = amountForLTM ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
          amount: amountForLTM,
          asset: "1.3.0"
        }) : feeTypes["_none"];
        let equivalentAmountLTM = amountForLTM ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__.EquivalentValueComponent, {
          fromAsset: "1.3.0",
          fullPrecision: true,
          amount: amountForLTM,
          toAsset: preferredUnit,
          fullDecimals: true
        }) : feeTypes["_none"];
        let title = null;

        if (!headIncluded) {
          headIncluded = true;
          title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            rowSpan: "6",
            style: {
              width: "15em"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: labelClass
          }, feename));
        }

        if (ltm_required.indexOf(opId) < 0) {
          if (feeTypes[key] != "Annual Membership222") {
            rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
              key: opId.toString() + key
            }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, feeTypes[key]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
              style: {
                textAlign: "right"
              }
            }, assetAmount, amount !== 0 && preferredUnit !== "GPH" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\xA0/\xA0", equivalentAmount) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
              style: {
                textAlign: "right"
              }
            }, feeIdx !== 8 ? assetAmountLTM : null, feeIdx !== 8 && amount !== 0 && preferredUnit !== "GPH" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\xA0/\xA0", equivalentAmountLTM) : null)));
          }
        } else {
          rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
            key: opId.toString() + key
          }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, feeTypes[key]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            style: {
              textAlign: "right"
            }
          }, "- ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            style: {
              textAlign: "right"
            }
          }, assetAmountLTM, amount !== 0 && preferredUnit !== "GPH" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\xA0/\xA0", equivalentAmountLTM) : null)));
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", {
        key: feeIdx
      }, rows);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "asset-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__.Card, null, this.props.title.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "explorer.block.op"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "explorer.fees.type"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "explorer.fees.fee"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "explorer.fees.feeltm"
    })))), fees));
  }

}

FeeGroup = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(FeeGroup);

class Fees extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let FeeGroupsTitle = counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("transaction.feeGroups");
    let feeGroups = [];

    for (let groupName in fee_grouping) {
      let groupNameText = FeeGroupsTitle[groupName];
      let feeIds = fee_grouping[groupName];
      feeGroups.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FeeGroup, {
        key: groupName,
        settings: this.props.settings,
        opIds: feeIds,
        title: groupNameText
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical",
      style: {
        overflow: "visible"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-12 shrink",
      style: {
        overflow: "visible"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      path: "components/Fees"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-12 ",
      style: {
        overflow: "visible"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content"
    }, feeGroups)));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fees);

/***/ }),

/***/ 2748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(656);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1920);
/* harmony import */ var _Fees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2749);





class FeesContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(alt_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
      inject: {
        settings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Fees__WEBPACK_IMPORTED_MODULE_3__["default"], this.props));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeesContainer);

/***/ }),

/***/ 2762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2706);



class Markets extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      height: null
    };
    this._setDimensions = this._setDimensions.bind(this);
  }

  UNSAFE_componentWillMount() {
    window.addEventListener("resize", this._setDimensions, {
      capture: false,
      passive: true
    });
  }

  componentDidMount() {
    this._setDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._setDimensions);
  }

  _setDimensions() {
    let height = this.refs.wrapper.offsetHeight;

    if (height !== this.state.height) {
      this.setState({
        height
      });
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: "wrapper",
      className: "grid-block no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MyMarkets__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: {
        width: "100%",
        padding: 20
      },
      listHeight: this.state.height ? this.state.height : null,
      className: "no-overflow",
      headerStyle: {
        paddingTop: 0,
        borderTop: "none"
      },
      tabHeader: true,
      columns: [{
        name: "star",
        index: 1
      }, {
        name: "market",
        index: 2
      }, {
        name: "quoteSupply",
        index: 3
      }, {
        name: "vol",
        index: 4
      }, {
        name: "price",
        index: 5
      }, {
        name: "change",
        index: 6
      }]
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Markets);

/***/ }),

/***/ 2761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2314);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2323);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(656);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1920);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2762);







class MarketsContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(alt_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
      stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"], stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
      inject: {
        starredMarkets: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().starredMarkets;
        },
        viewSettings: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings;
        },
        lookupResults: () => {
          return stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().lookupResults;
        },
        marketBase: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketBase;
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Markets__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketsContainer);

/***/ }),

/***/ 2760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2713);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2073);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(605);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1825);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2093);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(589);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1917);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2712);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(437);















class Accounts extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: props.searchTerm,
      isLoading: false,
      rowsOnPage: "25"
    };
    this._searchAccounts = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_11__["default"])(this._searchAccounts, 200);
    this.handleRowsChange = this.handleRowsChange.bind(this);
    this.balanceObjects = [];
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !immutable__WEBPACK_IMPORTED_MODULE_1___default().is(nextProps.searchAccounts, this.props.searchAccounts) || nextState.searchTerm !== this.state.searchTerm || nextState.isLoading !== this.state.isLoading;
  }

  _onSearchChange(e) {
    this.setState({
      searchTerm: e.target.value.toLowerCase(),
      isLoading: true
    });

    this._searchAccounts(e.target.value);
  }

  _searchAccounts(searchTerm) {
    actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__["default"].accountSearch(searchTerm);
    this.setState({
      isLoading: false
    });
  }

  _onAddContact(account, e) {
    e.preventDefault();
    actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__["default"].addAccountContact(account);
    this.forceUpdate();
  }

  _onRemoveContact(account, e) {
    e.preventDefault();
    actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__["default"].removeAccountContact(account);
    this.forceUpdate();
  }

  handleRowsChange(rows) {
    this.setState({
      rowsOnPage: rows
    });
    this.forceUpdate();
  }

  _ensureBalanceObject(object_id) {
    if (object_id && typeof object_id === "string") {
      if (!this.balanceObjects[object_id]) {
        this.balanceObjects[object_id] = parseFloat(bitsharesjs__WEBPACK_IMPORTED_MODULE_10__.ChainStore.getObject(object_id).get("balance"));
      }
    }

    if (!this.balanceObjects[object_id]) {
      this.balanceObjects[object_id] = 0;
    }
  }

  render() {
    let {
      searchAccounts
    } = this.props;
    let {
      searchTerm
    } = this.state;
    let dataSource = [];
    let columns = [];
    columns = [{
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "span",
        content: "explorer.assets.id"
      }),
      dataIndex: "accountId",
      key: "accountId",
      defaultSortOrder: "ascend",
      sorter: (a, b) => {
        return a.accountId > b.accountId ? 1 : a.accountId < b.accountId ? -1 : 0;
      },
      render: id => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, id);
      }
    }, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "user",
        title: "icons.user.account"
      }),
      dataIndex: "accountContacts",
      key: "accountContacts",
      render: (contacts, record) => {
        return contacts.has(record.accountName) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          onClick: this._onRemoveContact.bind(this, record.accountName)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "minus-circle",
          title: "icons.minus_circle.remove_contact"
        })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          onClick: this._onAddContact.bind(this, record.accountName)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "plus-circle",
          title: "icons.plus_circle.add_contact"
        }));
      }
    }, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "span",
        content: "account.name"
      }),
      dataIndex: "accountName",
      key: "accountName",
      sorter: (a, b) => {
        return a.accountName > b.accountName ? 1 : a.accountName < b.accountName ? -1 : 0;
      },
      render: name => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
          to: `/account/${name}/overview`
        }, name));
      }
    }, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "span",
        content: "gateway.balance"
      }),
      dataIndex: "accountBalance",
      key: "accountBalance",
      sorter: (a, b) => {
        this._ensureBalanceObject(a.accountBalance);

        this._ensureBalanceObject(b.accountBalance);

        return this.balanceObjects[a.accountBalance] > this.balanceObjects[b.accountBalance] ? 1 : this.balanceObjects[a.accountBalance] < this.balanceObjects[b.accountBalance] ? -1 : 0;
      },
      render: balance => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !balance ? "n/a" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
          balance: balance
        }));
      }
    }, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "span",
        content: "account.percent"
      }),
      dataIndex: "accountBalance",
      key: "accountBalancePercentage",
      sorter: (a, b) => {
        this._ensureBalanceObject(a.accountBalance);

        this._ensureBalanceObject(b.accountBalance);

        return this.balanceObjects[a.accountBalance] > this.balanceObjects[b.accountBalance] ? 1 : this.balanceObjects[a.accountBalance] < this.balanceObjects[b.accountBalance] ? -1 : 0;
      },
      render: balance => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !balance ? "n/a" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
          balance: balance,
          asPercentage: true
        }));
      }
    }];

    if (searchAccounts.size > 0 && searchTerm && searchTerm.length > 0) {
      searchAccounts.filter(a => {
        /*
         * This appears to return false negatives, perhaps from
         * changed account name rules when moving to graphene?. Either
         * way, trying to resolve invalid names fails in the ChainStore,
         * which in turn breaks the BindToChainState wrapper
         */
        // if (!ChainValidation.is_account_name(a, true)) {
        //     return false;
        // }
        return a.indexOf(searchTerm) !== -1;
      }).sort((a, b) => {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0;
        }
      }).map((name, id) => {
        let currentAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__.ChainStore.getAccount(id.toLowerCase());
        let balance = currentAccount ? currentAccount.getIn(["balances", "1.3.0"]) || null : null;
        dataSource.push({
          accountId: id,
          accountContacts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().accountContacts,
          accountName: name,
          accountBalance: balance
        });
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "generic-bordered-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: "left",
        marginBottom: "24px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
      placeholder: "Search",
      value: this.state.searchTerm,
      style: {
        width: "200px"
      },
      onChange: this._onSearchChange.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Select, {
      style: {
        width: "150px",
        marginLeft: "24px"
      },
      value: this.state.rowsOnPage,
      onChange: this.handleRowsChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Select.Option, {
      key: "10"
    }, "10 rows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Select.Option, {
      key: "25"
    }, "25 rows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Select.Option, {
      key: "50"
    }, "50 rows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Select.Option, {
      key: "100"
    }, "100 rows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Select.Option, {
      key: "200"
    }, "200 rows")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: "inline-block",
        marginLeft: "24px"
      }
    }, this.state.searchTerm && this.state.searchTerm.length == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.start_typing_to_search"
    }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Table, {
      style: {
        width: "100%",
        marginTop: "16px"
      },
      rowKey: "accountId",
      columns: columns,
      dataSource: dataSource,
      pagination: {
        position: "bottom",
        pageSize: Number(this.state.rowsOnPage)
      }
    }), this.state.isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: "center",
        padding: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "three-bounce"
    })) : null))));
  }

}

Accounts.defaultProps = {
  searchAccounts: {}
};
Accounts.propTypes = {
  searchAccounts: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accounts);

/***/ }),

/***/ 2759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(589);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1920);
/* harmony import */ var _Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2760);





class AccountsContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(alt_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
      inject: {
        searchAccounts: () => {
          return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().searchAccounts;
        },
        searchTerm: () => {
          return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().searchTerm;
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Accounts__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountsContainer);

/***/ }),

/***/ 2758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2324);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(657);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2073);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2386);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(618);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2094);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2064);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(437);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(607);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(661);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(521);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1202);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2712);



















let accountStorage = (0,common_localStorage__WEBPACK_IMPORTED_MODULE_12__["default"])("__graphene__");

class Assets extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();
    let chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_13__.Apis.instance().chain_id;
    if (chainID) chainID = chainID.substr(0, 8);else chainID = "7fcf452d";
    this.state = {
      chainID,
      foundLast: false,
      lastAsset: "",
      isLoading: false,
      totalAssets: typeof accountStorage.get(`totalAssets_${chainID}`) != "object" ? accountStorage.get(`totalAssets_${chainID}`) : chainID && chainID === "7fcf452d" ? 3000 : 50,
      // mainnet has 3000+ assets, other chains may not have that many
      assetsFetched: 0,
      activeFilter: "market",
      filterSearch: props.filterSearch || "",
      rowsOnPage: "25"
    };
    this._toggleFilter = this._toggleFilter.bind(this);
    this.handleRowsChange = this.handleRowsChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !immutable__WEBPACK_IMPORTED_MODULE_3___default().is(nextProps.assets, this.props.assets) || !common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].are_equal_shallow(nextState, this.state);
  }

  UNSAFE_componentWillMount() {
    this._checkAssets(this.props.assets, true);
  }

  handleFilterChange(e) {
    this.setState({
      filterSearch: (e.target.value || "").toUpperCase()
    });
  }

  handleRowsChange(rows) {
    this.setState({
      rowsOnPage: rows
    });
  }

  _checkAssets(assets, force) {
    this.setState({
      isLoading: true
    });
    let lastAsset = assets.sort((a, b) => {
      if (a.symbol > b.symbol) {
        return 1;
      } else if (a.symbol < b.symbol) {
        return -1;
      } else {
        return 0;
      }
    }).last();

    if (assets.size === 0 || force) {
      actions_AssetActions__WEBPACK_IMPORTED_MODULE_1__["default"].getAssetList.defer("A", 100);
      this.setState({
        assetsFetched: 100
      });
    } else if (assets.size >= this.state.assetsFetched) {
      actions_AssetActions__WEBPACK_IMPORTED_MODULE_1__["default"].getAssetList.defer(lastAsset.symbol, 100);
      this.setState({
        assetsFetched: this.state.assetsFetched + 99
      });
    }

    if (assets.size > this.state.totalAssets) {
      accountStorage.set(`totalAssets_${this.state.chainID}`, assets.size);
    }

    if (this.state.assetsFetched >= this.state.totalAssets - 100) {
      this.setState({
        isLoading: false
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.assets !== this.props.assets) {
      this._checkAssets(nextProps.assets);
    }
  }

  linkToAccount(name_or_id) {
    if (!name_or_id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "-");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_5__["default"], {
      account: name_or_id
    });
  }

  _toggleFilter(e) {
    this.setState({
      activeFilter: e.target.value
    });
  }

  _onFilter(type, e) {
    this.setState({
      [type]: e.target.value.toUpperCase()
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__["default"].changeViewSetting({
      [type]: e.target.value.toUpperCase()
    });
  }

  render() {
    let {
      assets
    } = this.props;
    let {
      activeFilter
    } = this.state;
    let placeholder = counterpart__WEBPACK_IMPORTED_MODULE_7___default().translate("markets.filter").toUpperCase();
    let coreAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__.ChainStore.getAsset("1.3.0");
    let pm;
    let dataSource = [];
    let columns = []; // Default sorting of the ant table is defined through defaultSortOrder prop

    if (activeFilter == "user") {
      columns = [{
        key: "symbol",
        title: "symbol",
        dataIndex: "symbol",
        defaultSortOrder: "ascend",
        sorter: (a, b) => {
          return a.symbol > b.symbol ? 1 : a.symbol < b.symbol ? -1 : 0;
        },
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
            to: `/asset/${item}`
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
            name: item
          }));
        }
      }, {
        key: "issuer",
        title: "issuer",
        dataIndex: "issuer",
        sorter: (a, b) => {
          let issuerA = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__.ChainStore.getAccount(a.issuer, false);
          let issuerB = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__.ChainStore.getAccount(b.issuer, false);
          if (issuerA) issuerA = issuerA.get("name");
          if (issuerB) issuerB = issuerB.get("name");
          if (issuerA > issuerB) return 1;
          if (issuerA < issuerB) return -1;
          return 0;
        },
        render: item => {
          return this.linkToAccount(item);
        }
      }, {
        key: "currentSupply",
        title: "Supply",
        dataIndex: "currentSupply",
        sorter: (a, b) => {
          a.currentSupply = parseFloat(a.currentSupply);
          b.currentSupply = parseFloat(b.currentSupply);
          return a.currentSupply > b.currentSupply ? 1 : a.currentSupply < b.currentSupply ? -1 : 0;
        },
        render: (item, record) => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
            amount: record.currentSupply,
            asset: record.assetId,
            hide_asset: true
          });
        }
      }, {
        key: "marketId",
        title: "",
        dataIndex: "marketId",
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
            to: `/market/${item}`
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
            type: "line-chart"
          }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
            content: "header.exchange"
          }));
        }
      }];
      assets.filter(a => {
        return !a.market_asset && a.symbol.indexOf(this.state.filterSearch) !== -1;
      }).map(asset => {
        let description = common_asset_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseDescription(asset.options.description);
        let marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "GPH");
        dataSource.push({
          symbol: asset.symbol,
          issuer: asset.issuer,
          currentSupply: asset.dynamic.current_supply,
          assetId: asset.id,
          marketId: marketID
        });
      });
    }

    if (activeFilter == "market") {
      columns = [{
        key: "symbol",
        title: "symbol",
        dataIndex: "symbol",
        defaultSortOrder: "ascend",
        sorter: (a, b) => {
          return a.symbol > b.symbol ? 1 : a.symbol < b.symbol ? -1 : 0;
        },
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
            to: `/asset/${item}`
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
            name: item
          }));
        }
      }, {
        key: "issuer",
        title: "issuer",
        dataIndex: "issuer",
        sorter: (a, b) => {
          let issuerA = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__.ChainStore.getAccount(a.issuer, false);
          let issuerB = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__.ChainStore.getAccount(b.issuer, false);
          if (issuerA) issuerA = issuerA.get("name");
          if (issuerB) issuerB = issuerB.get("name");
          if (issuerA > issuerB) return 1;
          if (issuerA < issuerB) return -1;
          return 0;
        },
        render: item => {
          return this.linkToAccount(item);
        }
      }, {
        key: "currentSupply",
        title: "Supply",
        dataIndex: "currentSupply",
        sorter: (a, b) => {
          a.currentSupply = parseFloat(a.currentSupply);
          b.currentSupply = parseFloat(b.currentSupply);
          return a.currentSupply > b.currentSupply ? 1 : a.currentSupply < b.currentSupply ? -1 : 0;
        },
        render: (item, record) => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
            amount: record.currentSupply,
            asset: record.assetId,
            hide_asset: true
          });
        }
      }, {
        key: "marketId",
        title: "",
        dataIndex: "marketId",
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
            to: `/market/${item}`
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
            type: "line-chart"
          }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
            content: "header.exchange"
          }));
        }
      }];
      assets.filter(a => {
        return a.bitasset_data && !a.bitasset_data.is_prediction_market && a.symbol.indexOf(this.state.filterSearch) !== -1;
      }).map(asset => {
        let description = common_asset_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseDescription(asset.options.description);
        let marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "GPH");
        dataSource.push({
          symbol: asset.symbol,
          issuer: asset.issuer,
          currentSupply: asset.dynamic.current_supply,
          assetId: asset.id,
          marketId: marketID
        });
      });
    }

    if (activeFilter == "prediction") {
      pm = assets.filter(a => {
        let description = common_asset_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseDescription(a.options.description);
        return a.bitasset_data && a.bitasset_data.is_prediction_market && (a.symbol.toLowerCase().indexOf(this.state.filterSearch.toLowerCase()) !== -1 || description.main.toLowerCase().indexOf(this.state.filterSearch.toLowerCase()) !== -1);
      }).sort((a, b) => {
        if (a.symbol < b.symbol) {
          return -1;
        } else if (a.symbol > b.symbol) {
          return 1;
        } else {
          return 0;
        }
      }).map(asset => {
        let description = common_asset_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseDescription(asset.options.description);
        let marketID = asset.symbol + "_" + (description.market ? description.market : coreAsset ? coreAsset.get("symbol") : "GPH");
        return {
          asset,
          description,
          marketID
        };
      }).toArray();
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block main-content small-12 medium-10 medium-offset-1 main-content vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "generic-bordered-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: "left",
        marginBottom: "24px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        display: "inline-block",
        width: "0px",
        marginTop: "2px",
        float: "left",
        fontSize: "18px"
      }
    }, this.state.isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
      type: "loading"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: this.state.filterSearch,
      style: {
        width: "200px"
      },
      onChange: this.handleFilterChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio.Group, {
      value: this.state.activeFilter,
      onChange: this._toggleFilter,
      style: {
        marginBottom: "7px",
        marginLeft: "24px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio, {
      value: "market"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "explorer.assets.market"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio, {
      value: "user"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "explorer.assets.user"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio, {
      value: "prediction"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "explorer.assets.prediction"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Select, {
      style: {
        width: "150px",
        marginLeft: "24px"
      },
      value: this.state.rowsOnPage,
      onChange: this.handleRowsChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Select.Option, {
      key: "10"
    }, "10 rows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Select.Option, {
      key: "25"
    }, "25 rows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Select.Option, {
      key: "50"
    }, "50 rows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Select.Option, {
      key: "100"
    }, "100 rows"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Select.Option, {
      key: "200"
    }, "200 rows"))), activeFilter == "prediction" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["default"], {
      style: {
        paddingBottom: 20
      },
      size: "large",
      itemLayout: "horizontal",
      dataSource: pm,
      renderItem: item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["default"].Item, {
        key: item.asset.id.split(".")[2],
        actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
          className: "button outline",
          to: `/market/${item.marketID}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
          content: "header.exchange"
        }))]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_17__["default"].Item.Meta, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            paddingTop: 10,
            fontWeight: "bold"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
          to: `/asset/${item.asset.symbol}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          name: item.asset.symbol
        }))), item.description.condition ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " ", "(", item.description.condition, ")") : null),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            padding: "10px 20px 5px 0",
            lineHeight: "18px"
          }
        }, item.description.main) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            padding: "0 20px 5px 0",
            lineHeight: "18px"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_5__["default"], {
          account: item.asset.issuer
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
          amount: item.asset.dynamic.current_supply,
          asset: item.asset.id
        })), item.description.expiry ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " ", "-", " ", item.description.expiry) : null))
      })),
      pagination: {
        position: "bottom",
        pageSize: 6
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Table, {
      style: {
        width: "100%",
        marginTop: "16px"
      },
      rowKey: "symbol",
      columns: columns,
      dataSource: dataSource
    })))));
  }

}

Assets.defaultProps = {
  assets: {}
};
Assets.propTypes = {
  assets: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Assets);

/***/ }),

/***/ 2757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2323);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(656);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1920);
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2758);






class AssetsContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(alt_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      stores: [stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"]],
      inject: {
        assets: () => {
          return stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().assets;
        },
        filterMPA: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().viewSettings.get("filterMPA");
        },
        filterUIA: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().viewSettings.get("filterUIA");
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Assets__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetsContainer);

/***/ }),

/***/ 2752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2073);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1821);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2095);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2491);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2753);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1939);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2061);
/* harmony import */ var _TransactionChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2754);
/* harmony import */ var _BlocktimeChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2755);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(607);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2493);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2094);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2646);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2684);




















__webpack_require__(2489);

class BlockTimeAgo extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.blockTime !== this.props.blockTime;
  }

  render() {
    let {
      blockTime
    } = this.props; // let timePassed = Date.now() - blockTime;

    let timePassed = new Date().getTime() - new Date(blockTime).getTime();
    let textClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()("txtlabel", {
      success: timePassed <= 6000
    }, {
      info: timePassed > 6000 && timePassed <= 15000
    }, {
      warning: timePassed > 15000 && timePassed <= 25000
    }, {
      error: timePassed > 25000
    });
    return blockTime ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: textClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_14__["default"], {
      time: blockTime
    })) : null;
  }

}

class Blocks extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainObject.isRequired,
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainObject.isRequired
  };
  static defaultProps = {
    globalObject: "2.0.0",
    dynGlobalObject: "2.1.0",
    latestBlocks: {},
    assets: {},
    accounts: {},
    height: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      animateEnter: false,
      operationsHeight: null,
      blocksHeight: null
    };
    this._updateHeight = this._updateHeight.bind(this);
  }

  _getBlock(height, maxBlock) {
    if (height) {
      height = parseInt(height, 10);
      actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_1__["default"].getLatest(height, maxBlock);
    }
  }

  UNSAFE_componentWillMount() {
    window.addEventListener("resize", this._updateHeight, {
      capture: false,
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._updateHeight);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.latestBlocks.size === 0) {
      return this._getInitialBlocks();
    } else if (!this.state.animateEnter) {
      this.setState({
        animateEnter: true
      });
    }

    let maxBlock = nextProps.dynGlobalObject.get("head_block_number");

    if (nextProps.latestBlocks.size >= 20 && nextProps.dynGlobalObject.get("head_block_number") !== nextProps.latestBlocks.get(0).id) {
      return this._getBlock(maxBlock, maxBlock);
    }
  }

  componentDidMount() {
    this._getInitialBlocks();

    let oc = this.refs.operations;
    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16___default().initialize(oc);
    let blocks = this.refs.blocks;
    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16___default().initialize(blocks);

    this._updateHeight();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !immutable__WEBPACK_IMPORTED_MODULE_13___default().is(nextProps.latestBlocks, this.props.latestBlocks) || !common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].are_equal_shallow(nextState, this.state);
  }

  componentDidUpdate() {
    this._updateHeight();
  }

  _getInitialBlocks() {
    let maxBlock = parseInt(this.props.dynGlobalObject.get("head_block_number"), 10);

    if (maxBlock) {
      for (let i = 19; i >= 0; i--) {
        let exists = false;

        if (this.props.latestBlocks.size > 0) {
          for (let j = 0; j < this.props.latestBlocks.size; j++) {
            if (this.props.latestBlocks.get(j).id === maxBlock - i) {
              exists = true;
              break;
            }
          }
        }

        if (!exists) {
          this._getBlock(maxBlock - i, maxBlock);
        }
      }
    }
  }

  _updateHeight() {
    let containerHeight = this.refs.outerWrapper.offsetHeight;
    let operationsTextHeight = this.refs.operationsText.offsetHeight;
    let blocksTextHeight = this.refs.blocksText.offsetHeight;
    this.setState({
      operationsHeight: containerHeight - operationsTextHeight,
      blocksHeight: containerHeight - blocksTextHeight
    }, this.psUpdate);
  }

  psUpdate() {
    let oc = this.refs.operations;
    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16___default().update(oc);
    let blocks = this.refs.blocks;
    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16___default().update(blocks);
  }

  render() {
    let {
      latestBlocks,
      latestTransactions,
      globalObject,
      dynGlobalObject,
      coreAsset
    } = this.props;
    let {
      blocksHeight,
      operationsHeight
    } = this.state;
    const dynamicObject = this.props.getDynamicObject(coreAsset.get("dynamic_asset_data_id"));
    let blocks = null,
        transactions = null;
    let headBlock = null;
    let trxCount = 0,
        blockCount = latestBlocks.size,
        trxPerSec = 0,
        blockTimes = [],
        avgTime = 0;

    if (latestBlocks && latestBlocks.size >= 20) {
      let previousTime;
      let lastBlock, firstBlock; // Map out the block times for the latest blocks and count the number of transactions

      latestBlocks.filter((a, index) => {
        // Only use consecutive blocks counting back from head block
        return a.id === dynGlobalObject.get("head_block_number") - index;
      }).sort((a, b) => {
        return a.id - b.id;
      }).forEach((block, index) => {
        trxCount += block.transactions.length;

        if (index > 0) {
          blockTimes.push([block.id, (block.timestamp - previousTime) / 1000]);
          lastBlock = block.timestamp;
        } else {
          firstBlock = block.timestamp;
        }

        previousTime = block.timestamp;
      }); // Output block rows for the last 20 blocks

      blocks = latestBlocks.sort((a, b) => {
        return b.id - a.id;
      }).take(20).map(block => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          key: block.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
          to: `/block/${block.id}`
        }, "#", common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(block.id, 0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedDate, {
          value: block.timestamp,
          format: "time"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_5__["default"], {
          witness: block.witness
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(block.transactions.length, 0)));
      }).toArray();
      let trxIndex = 0;
      transactions = latestTransactions.sort((a, b) => {
        return b.block_num - a.block_num;
      }).take(20).map(trx => {
        let opIndex = 0;
        return trx.operations.map(op => {
          if (trxIndex > 15) return null;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: trxIndex++,
            op: op,
            result: trx.operation_results[opIndex++],
            block: trx.block_num,
            hideFee: true,
            hideOpLabel: false,
            current: "1.2.0",
            hideDate: true,
            hidePending: true
          });
        }).filter(a => !!a);
      }).toArray();
      headBlock = latestBlocks.first().timestamp;
      avgTime = blockTimes.reduce((previous, current, idx, array) => {
        return previous + current[1] / array.length;
      }, 0);
      trxPerSec = trxCount / ((lastBlock - firstBlock) / 1000);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: "outerWrapper",
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "align-center grid-block shrink small-horizontal blocks-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-6 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.current_block"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "#", common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(dynGlobalObject.get("head_block_number"), 0)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-6 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.last_block"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlockTimeAgo, {
      blockTime: headBlock
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-6 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.trx_per_sec"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(trxPerSec, 2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-6 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.avg_conf_time"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(avgTime / 2, 2), "s")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "align-center grid-block shrink small-horizontal  blocks-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-6 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow clear-fix"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.active_witnesses"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "txtlabel success"
    }, globalObject.get("active_witnesses").size))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-6 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow clear-fix"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.active_committee_members"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "txtlabel success"
    }, globalObject.get("active_committee_members").size))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-6 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow clear-fix"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.trx_per_block"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].format_number(trxCount / blockCount || 0, 2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-6 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow clear-fix"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.recently_missed_blocks"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "txtlabel warning",
      style: {
        fontWeight: "100"
      }
    }, dynGlobalObject.get("recently_missed_count"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "align-center grid-block shrink small-vertical medium-horizontal blocks-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-12 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow clear-fix"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.asset.summary.current_supply"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "txtlabel"
    }, dynamicObject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_15__["default"], {
      amount: dynamicObject.get("current_supply"),
      asset: coreAsset.get("id"),
      decimalOffset: 5
    }) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-12 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.block_times"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BlocktimeChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
      blockTimes: blockTimes,
      head_block_number: dynGlobalObject.get("head_block_number")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-12 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.trx_per_block"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TransactionChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
      blocks: latestBlocks,
      head_block: dynGlobalObject.get("head_block_number")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block text-center small-12 medium-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow clear-fix"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "txtlabel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.asset.summary.stealth_supply"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "txtlabel"
    }, dynamicObject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_15__["default"], {
      amount: dynamicObject.get("confidential_supply"),
      asset: coreAsset.get("id"),
      decimalOffset: 5
    }) : null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: "transactionsBlock",
      className: "grid-block no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-12 medium-6 vertical no-overflow",
      style: {
        paddingBottom: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical no-overflow generic-bordered-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: "operationsText"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "block-content-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.recent"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table fixed-height-1rem"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.votes.info"
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block",
      style: {
        maxHeight: operationsHeight || "400px",
        overflow: "hidden"
      },
      ref: "operations"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table fixed-height-1rem"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, transactions))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block medium-6 show-for-medium vertical no-overflow",
      style: {
        paddingBottom: 0,
        paddingLeft: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical no-overflow generic-bordered-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: "blocksText"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "block-content-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.blocks.recent"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical",
      style: {
        maxHeight: blocksHeight || "438px",
        overflow: "hidden"
      },
      ref: "blocks"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table fixed-height-1rem"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.block.id"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.block.date"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.block.witness"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "explorer.block.count"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_17__["default"], {
      component: "tbody",
      transitionName: "newrow"
    }, blocks)))))));
  }

}

Blocks = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(Blocks, {
  show_loader: true
});
Blocks = (0,_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__["default"])(Blocks, {
  propNames: ["coreAsset"],
  withDynamic: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blocks);

/***/ }),

/***/ 2751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1820);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1920);
/* harmony import */ var _Blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2752);





class BlocksContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(alt_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      stores: [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
      inject: {
        latestBlocks: () => {
          return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().latestBlocks;
        },
        latestTransactions: () => {
          return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().latestTransactions;
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Blocks__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlocksContainer);

/***/ }),

/***/ 2755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2727);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);





class BlocktimeChart extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.blockTimes.length < 19) {
      return false;
    } else if (this.props.blockTimes.length === 0) {
      return true;
    }

    let chart = this.refs.chart ? this.refs.chart.chart : null;

    if (chart) {
      let {
        blockTimes,
        colors
      } = this._getData(nextProps);

      let series = chart.series[0];
      let finalValue = series.xData[series.xData.length - 1];

      if (series.xData.length) {
        // console.log(chart, "series:", series.data, "finalValue:", finalValue);
        blockTimes.forEach(point => {
          if (point[0] > finalValue) {
            series.addPoint(point, false, series.xData.length >= 30);
          }
        });
        chart.options.plotOptions.column.colors = colors;
        chart.redraw();
        return false;
      }
    }

    return nextProps.blockTimes[nextProps.blockTimes.length - 1][0] !== this.props.blockTimes[this.props.blockTimes.length - 1][0] || nextProps.blockTimes.length !== this.props.blockTimes.length;
  }

  _getData() {
    let {
      blockTimes,
      head_block
    } = this.props;
    blockTimes.filter(a => {
      return a[0] >= head_block - 30;
    });

    if (blockTimes && blockTimes.length) {
      blockTimes = (0,lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_3__["default"])(blockTimes, 30);
    }

    let colors = blockTimes.map(entry => {
      if (entry[1] <= 5) {
        return "#50D2C2";
      } else if (entry[1] <= 10) {
        return "#A0D3E8";
      } else if (entry[1] <= 20) {
        return "#FCAB53";
      } else {
        return "#deb869";
      }
    });
    return {
      blockTimes,
      colors
    };
  }

  render() {
    let {
      blockTimes,
      colors
    } = this._getData(this.props);

    let tooltipLabel = counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("explorer.blocks.block_time");
    let config = {
      chart: {
        type: "column",
        backgroundColor: "rgba(255, 0, 0, 0)",
        spacing: [0, 0, 5, 0],
        height: 100
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      rangeSelector: {
        enabled: false
      },
      navigator: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      },
      tooltip: {
        shared: false,
        formatter: function () {
          return tooltipLabel + ": " + this.y + "s";
        }
      },
      series: [{
        name: "Block time",
        data: blockTimes,
        color: "#50D2C2"
      }],
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: null
        },
        labels: {
          enabled: false
        },
        gridLineWidth: 0,
        currentPriceIndicator: {
          enabled: false
        }
      },
      plotOptions: {
        column: {
          animation: true,
          minPointLength: 3,
          colorByPoint: true,
          colors: colors,
          borderWidth: 0
        }
      }
    };
    return blockTimes.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_highcharts__WEBPACK_IMPORTED_MODULE_1___default()), {
      ref: "chart",
      config: config
    }) : null;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlocktimeChart);

/***/ }),

/***/ 2747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1939);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(437);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1816);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(657);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2094);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(656);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2712);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(607);














class CommitteeMemberList extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static propTypes = {
    committee_members: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObjectsList.isRequired
  };

  constructor() {
    super();
  }

  render() {
    let {
      committee_members,
      membersList
    } = this.props;
    let dataSource = null;
    let ranks = {};
    committee_members.filter(a => {
      if (!a) {
        return false;
      }

      return membersList.indexOf(a.get("id")) !== -1;
    }).forEach((c, index) => {
      if (c) {
        ranks[c.get("id")] = index + 1;
      }
    });

    if (committee_members.length > 0 && committee_members[1]) {
      dataSource = committee_members.filter(a => {
        if (!a) {
          return false;
        }

        let account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getObject(a.get("committee_member_account"));

        if (!account) {
          return false;
        }

        let account_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getCommitteeMemberById(account.get("id"));
        if (!account_data) return false;
        return account.get("name").indexOf(this.props.filter || "") !== -1;
      }).map(a => {
        let account = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getObject(a.get("committee_member_account"));
        let account_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getCommitteeMemberById(account.get("id"));
        return {
          key: a.get("id"),
          rank: ranks[a.get("id")],
          name: account.get("name"),
          votes: account_data.get("total_votes"),
          url: common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].sanitize(account_data.get("url"))
        };
      });
    }

    const columns = [{
      key: "#",
      title: "#",
      dataIndex: "rank",
      sorter: (a, b) => {
        return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
      }
    }, {
      key: "name",
      title: "NAME",
      dataIndex: "name",
      sorter: (a, b) => {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      }
    }, {
      key: "votes",
      title: "VOTES",
      dataIndex: "votes",
      render: item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__["default"], {
        amount: item,
        asset: "1.3.0",
        decimalOffset: 5
      }),
      sorter: (a, b) => {
        return a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0;
      }
    }, {
      key: "url",
      title: "WEBPAGE",
      dataIndex: "url",
      render: item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
        href: item,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item)
    }];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Table, {
      columns: columns,
      dataSource: dataSource,
      pagination: false
    });
  }

}

CommitteeMemberList = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitteeMemberList, {
  show_loader: true
});

class CommitteeMembers extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
  };
  static defaultProps = {
    globalObject: "2.0.0"
  };

  constructor(props) {
    super(props);
    this.state = {
      filterCommitteeMember: props.filterCommitteeMember || ""
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !immutable__WEBPACK_IMPORTED_MODULE_2___default().is(nextProps.globalObject, this.props.globalObject) || nextState.filterCommitteeMember !== this.state.filterCommitteeMember || nextState.cardView !== this.state.cardView;
  }

  _onFilter(e) {
    this.setState({
      filterCommitteeMember: e.target.value.toLowerCase()
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeViewSetting({
      filterCommitteeMember: e.target.value.toLowerCase()
    });
  }

  render() {
    let {
      globalObject
    } = this.props;
    globalObject = globalObject.toJS();
    let activeCommitteeMembers = [];

    for (let key in globalObject.active_committee_members) {
      if (globalObject.active_committee_members.hasOwnProperty(key)) {
        activeCommitteeMembers.push(globalObject.active_committee_members[key]);
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block vertical medium-horizontal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate("explorer.witnesses.filter_by_name"),
      value: this.state.filterCommitteeMember,
      onChange: this._onFilter.bind(this),
      style: {
        width: "200px",
        marginBottom: "12px",
        marginTop: "4px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(CommitteeMemberList, {
      filter: this.state.filterCommitteeMember,
      committee_members: immutable__WEBPACK_IMPORTED_MODULE_2___default().List(globalObject.active_committee_members),
      membersList: globalObject.active_committee_members
    })))));
  }

}

CommitteeMembers = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(CommitteeMembers);

class CommitteeMembersStoreWrapper extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(CommitteeMembers, this.props);
  }

}

CommitteeMembersStoreWrapper = (0,alt_react__WEBPACK_IMPORTED_MODULE_6__.connect)(CommitteeMembersStoreWrapper, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"]];
  },

  getProps() {
    return {
      cardView: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings.get("cardViewCommittee"),
      filterCommitteeMember: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().viewSettings.get("filterCommitteeMember")
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommitteeMembersStoreWrapper);

/***/ }),

/***/ 2744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Witnesses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2745);
/* harmony import */ var _CommitteeMembers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2747);
/* harmony import */ var _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2748);
/* harmony import */ var _BlocksContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2751);
/* harmony import */ var _AssetsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2757);
/* harmony import */ var _AccountsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2759);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2761);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__);











class Explorer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [{
        name: "blocks",
        link: "/explorer/blocks",
        translate: "explorer.blocks.title",
        content: _BlocksContainer__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, {
        name: "assets",
        link: "/explorer/assets",
        translate: "explorer.assets.title",
        content: _AssetsContainer__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, {
        name: "accounts",
        link: "/explorer/accounts",
        translate: "explorer.accounts.title",
        content: _AccountsContainer__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, {
        name: "witnesses",
        link: "/explorer/witnesses",
        translate: "explorer.witnesses.title",
        content: _Witnesses__WEBPACK_IMPORTED_MODULE_1__["default"]
      }, {
        name: "committee_members",
        link: "/explorer/committee-members",
        translate: "explorer.committee_members.title",
        content: _CommitteeMembers__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, {
        name: "markets",
        link: "/explorer/markets",
        translate: "markets.title",
        content: _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__["default"]
      }, {
        name: "fees",
        link: "/explorer/fees",
        translate: "fees.title",
        content: _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_3__["default"]
      }]
    };
  }

  render() {
    const onChange = value => {
      this.props.history.push(value);
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__.Tabs, {
      activeKey: this.props.location.pathname,
      animated: false,
      style: {
        display: "table",
        height: "100%",
        width: "100%"
      },
      onChange: onChange
    }, this.state.tabs.map(tab => {
      const TabContent = tab.content;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__.Tabs.TabPane, {
        key: tab.link,
        tab: counterpart__WEBPACK_IMPORTED_MODULE_7___default().translate(tab.translate)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "padding"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabContent, null)));
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explorer);

/***/ }),

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2727);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);




class TransactionChart extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.blocks.size < 20) {
      return false;
    }

    let chart = this.refs.trx_chart ? this.refs.trx_chart.chart : null;

    if (chart && nextProps.blocks !== this.props.blocks) {
      let {
        trxData,
        colors
      } = this._getData(nextProps);

      let series = chart.series[0];
      let finalValue = series.xData[series.xData.length - 1]; // console.log("chart:", chart, "series:", series.data, "finalValue:", finalValue);

      if (series.xData.length) {
        trxData.forEach(point => {
          if (point[0] > finalValue) {
            series.addPoint(point, false, series.xData.length >= 30);
          }
        });
        chart.options.plotOptions.column.colors = colors;
        chart.redraw();
        return false;
      }
    }

    return nextProps.blocks !== this.props.blocks || nextProps.head_block !== this.props.head_block;
  }

  _getData(props) {
    let {
      blocks,
      head_block
    } = props;
    let trxData = [];
    let max = 0;
    trxData = blocks.filter(a => {
      return a.id >= head_block - 30;
    }).sort((a, b) => {
      return a.id - b.id;
    }).takeLast(30).map(block => {
      max = Math.max(block.transactions.length, max);
      return [block.id, block.transactions.length];
    }).toArray();
    let colors = trxData.map(entry => {
      // console.log("entry:", entry);
      if (entry[1] <= 5) {
        return "#50D2C2";
      } else if (entry[1] <= 10) {
        return "#A0D3E8";
      } else if (entry[1] <= 20) {
        return "#FCAB53";
      } else {
        return "#deb869";
      }
    });
    return {
      colors,
      trxData,
      max
    };
  }

  render() {
    let {
      trxData,
      colors,
      max
    } = this._getData(this.props);

    let tooltipLabel = counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("explorer.blocks.transactions");
    let config = {
      chart: {
        type: "column",
        backgroundColor: "rgba(255, 0, 0, 0)",
        spacing: [0, 0, 5, 0],
        height: 100
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      rangeSelector: {
        enabled: false
      },
      navigator: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      },
      tooltip: {
        shared: false,
        formatter: function () {
          return tooltipLabel + ": " + this.y;
        }
      },
      series: [{
        name: "Transactions",
        data: trxData,
        color: "#50D2C2"
      }],
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        max: Math.max(1.5, max + 0.5),
        title: {
          text: null
        },
        labels: {
          enabled: false
        },
        gridLineWidth: 0,
        currentPriceIndicator: {
          enabled: false
        }
      },
      plotOptions: {
        column: {
          animation: true,
          minPointLength: 5,
          colorByPoint: true,
          colors: colors,
          borderWidth: 0
        }
      }
    };
    return trxData.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_highcharts__WEBPACK_IMPORTED_MODULE_1___default()), {
      ref: "trx_chart",
      config: config
    }) : null;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionChart);

/***/ }),

/***/ 2745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1939);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(437);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2094);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2493);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1816);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(657);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(656);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2074);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2712);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(607);


















__webpack_require__(2746);

class WitnessRow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
  };

  _onRowClick(e) {
    e.preventDefault();
    this.props.history.push(`/account/${this.props.witness.get("name")}`);
  } // componentWillUnmount() {
  //     ChainStore.unSubFrom("witnesses", ChainStore.getWitnessById( this.props.witness.get("id") ).get("id"));
  // }


  render() {
    let {
      witness,
      isCurrent,
      rank
    } = this.props;
    let witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getWitnessById(this.props.witness.get("id"));
    if (!witness_data) return null;
    let total_votes = witness_data.get("total_votes");
    let witness_aslot = witness_data.get("last_aslot");
    let color = {};

    if (this.props.most_recent - witness_aslot > 100) {
      color = {
        borderLeft: "1px solid #FCAB53"
      };
    } else {
      color = {
        borderLeft: "1px solid #50D2C2"
      };
    }

    let last_aslot_time = new Date(Date.now() - (this.props.most_recent - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);
    let currentClass = isCurrent ? "active-witness" : "";
    let missed = witness_data.get("total_missed");
    let missedClass = classnames__WEBPACK_IMPORTED_MODULE_12___default()("txtlabel", {
      success: missed <= 500
    }, {
      info: missed > 500 && missed <= 1250
    }, {
      warning: missed > 1250 && missed <= 2000
    }, {
      error: missed >= 200
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", {
      className: currentClass,
      onClick: this._onRowClick.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, rank), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
      style: color
    }, witness.get("name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      time: new Date(last_aslot_time)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, witness_data.get("last_confirmed_block_num")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", {
      className: missedClass
    }, missed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      amount: witness_data.get("total_votes"),
      asset: "1.3.0",
      decimalOffset: 5
    })));
  }

}

WitnessRow = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WitnessRow);
WitnessRow = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.withRouter)(WitnessRow);

class WitnessList extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static propTypes = {
    witnesses: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObjectsList.isRequired
  };

  constructor() {
    super();
    this.state = {
      sortBy: "rank",
      inverseSort: true
    };
    this.handleBlockIdClick = this.handleBlockIdClick.bind(this);
  }

  _setSort(field) {
    this.setState({
      sortBy: field,
      inverseSort: field === this.state.sortBy ? !this.state.inverseSort : this.state.inverseSort
    });
  }

  handleBlockIdClick(blockId) {
    return () => {
      this.props.history.push(`/block/${blockId}`);
    };
  }

  render() {
    let {
      witnesses,
      current,
      cardView,
      witnessList
    } = this.props;
    let {
      sortBy,
      inverseSort
    } = this.state;
    let most_recent_aslot = 0;
    let ranks = {};
    witnesses.filter(a => {
      if (!a) {
        return false;
      }

      return witnessList.indexOf(a.get("id")) !== -1;
    }).sort((a, b) => {
      if (a && b) {
        return parseInt(b.get("total_votes"), 10) - parseInt(a.get("total_votes"), 10);
      }
    }).forEach((w, index) => {
      if (w) {
        let s = w.get("last_aslot");

        if (most_recent_aslot < s) {
          most_recent_aslot = s;
        }

        ranks[w.get("id")] = index + 1;
      }
    });
    let dataSource = [];

    if (witnesses.length > 0 && witnesses[1]) {
      dataSource = witnesses.filter(a => {
        if (!a) {
          return false;
        }

        let witness = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getObject(a.get("witness_account"));
        if (!witness) return false;
        let witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getWitnessById(witness.get("id"));
        if (!witness_data) return false;
        let name = witness.get("name");
        if (!name) return false;
        return name.indexOf(this.props.filter) !== -1;
      }).map(a => {
        const witness = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getObject(a.get("witness_account"));
        const witness_data = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getWitnessById(witness.get("id"));
        let witness_aslot = witness_data.get("last_aslot");
        let last_aslot_time = new Date(Date.now() - (this.props.current_aslot - witness_aslot) * bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getObject("2.0.0").getIn(["parameters", "block_interval"]) * 1000);
        return {
          id: a.get("id"),
          key: witness.get("name"),
          rank: ranks[a.get("id")],
          name: witness.get("name"),
          signing_key: witness_data.get("signing_key"),
          url: common_utils__WEBPACK_IMPORTED_MODULE_15__["default"].sanitize(witness_data.get("url")),
          lastConfirmedBlock: {
            id: witness_data.get("last_confirmed_block_num"),
            timestamp: last_aslot_time.getTime()
          },
          blocksMissed: witness_data.get("total_missed"),
          votes: witness_data.get("total_votes")
        };
      });
    }

    const urlValid = item => {
      const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      return regex.test(item);
    };

    const urlRender = item => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Popover, {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
          href: item,
          target: "_blank",
          rel: "noopener noreferrer"
        }, item),
        trigger: "hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Icon, {
        type: "link"
      }));
    };

    const keyRender = item => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Popover, {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, item),
        trigger: "hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Icon, {
        type: "key"
      }));
    };

    const columns = [{
      key: "#",
      title: "#",
      dataIndex: "rank",
      sorter: (a, b) => {
        return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
      }
    }, {
      key: "name",
      title: "NAME",
      dataIndex: "name",
      sorter: (a, b) => {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      }
    }, {
      key: "url",
      title: "URL",
      dataIndex: "url",
      align: "center",
      render: item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        style: {
          width: "100%",
          textAlign: "center"
        }
      }, item && urlValid(item) && urlRender(item) || null)
    }, {
      key: "lastConfirmedBlock",
      title: "LAST CONFIRMED BLOCK",
      dataIndex: "lastConfirmedBlock",
      render: item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
        style: {
          display: "inline-block",
          minWidth: "100px"
        },
        href: "javascript:void(0)",
        onClick: this.handleBlockIdClick(item.id)
      }, "#", Number(item.id).toLocaleString()), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], {
        time: new Date(item.timestamp)
      })),
      sorter: (a, b) => {
        return a.lastConfirmedBlock.timestamp > b.lastConfirmedBlock.timestamp ? -1 : a.lastConfirmedBlock.timestamp < b.lastConfirmedBlock.timestamp ? 1 : 0;
      }
    }, {
      key: "blocksMissed",
      title: "BLOCKS MISSED",
      dataIndex: "blocksMissed",
      render: item => {
        const blocksMissedClassName = classnames__WEBPACK_IMPORTED_MODULE_12___default()("txtlabel", {
          success: item <= 500
        }, {
          info: item > 500 && item <= 1250
        }, {
          warning: item > 1250 && item <= 2000
        }, {
          error: item >= 200
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
          className: blocksMissedClassName
        }, item);
      },
      sorter: (a, b) => {
        return a.blocksMissed > b.blocksMissed ? 1 : a.blocksMissed < b.blocksMissed ? -1 : 0;
      }
    }, {
      key: "votes",
      title: "VOTES",
      dataIndex: "votes",
      render: item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
        amount: item,
        asset: "1.3.0",
        decimalOffset: 5
      }),
      sorter: (a, b) => {
        return a.votes > b.votes ? 1 : a.votes < b.votes ? -1 : 0;
      }
    }, {
      key: "key",
      title: "KEY",
      dataIndex: "signing_key",
      align: "center",
      render: item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        style: {
          textAlign: "center",
          width: "100%"
        }
      }, keyRender(item))
    }];

    const getRowClassName = record => {
      if (record.id === current) return "active-witness";
      return "";
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Table, {
      rowClassName: getRowClassName,
      columns: columns,
      dataSource: dataSource,
      pagination: false
    });
  }

}

WitnessList = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(WitnessList, {
  show_loader: true
});
WitnessList = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.withRouter)(WitnessList);

class Witnesses extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static propTypes = {
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired,
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
  };
  static defaultProps = {
    globalObject: "2.0.0",
    dynGlobalObject: "2.1.0"
  };

  constructor(props) {
    super(props);
    this.state = {
      filterWitness: props.filterWitness || "",
      cardView: props.cardView
    };
  }

  _onFilter(e) {
    this.setState({
      filterWitness: e.target.value.toLowerCase()
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
      filterWitness: e.target.value.toLowerCase()
    });
  }

  _toggleView() {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeViewSetting({
      cardView: !this.state.cardView
    });
    this.setState({
      cardView: !this.state.cardView
    });
  }

  render() {
    let {
      dynGlobalObject,
      globalObject
    } = this.props;
    dynGlobalObject = dynGlobalObject.toJS();
    globalObject = globalObject.toJS();
    let current = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getObject(dynGlobalObject.current_witness),
        currentAccount = null;

    if (current) {
      currentAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getObject(current.get("witness_account"));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-content "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "explore-witness--info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "explorer.witnesses.current"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "explorer.blocks.active_witnesses"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "explorer.witnesses.participation"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "explorer.witnesses.pay"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "explorer.witnesses.budget"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "explorer.witnesses.next_vote"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, currentAccount ? currentAccount.get("name") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, Object.keys(globalObject.active_witnesses).length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, dynGlobalObject.participation, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      amount: globalObject.parameters.witness_pay_per_block,
      asset: "1.3.0"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      amount: dynGlobalObject.witness_budget,
      asset: "1.3.0"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      time: new Date(dynGlobalObject.next_maintenance_time + "Z")
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate("explorer.witnesses.filter_by_name"),
      value: this.state.filterWitness,
      onChange: this._onFilter.bind(this),
      style: {
        width: "200px",
        marginBottom: "12px",
        marginTop: "4px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(WitnessList, {
      current_aslot: dynGlobalObject.current_aslot,
      current: current ? current.get("id") : null,
      witnesses: immutable__WEBPACK_IMPORTED_MODULE_2___default().List(globalObject.active_witnesses),
      witnessList: globalObject.active_witnesses,
      filter: this.state.filterWitness,
      cardView: this.state.cardView
    })))));
  }

}

Witnesses = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(Witnesses);

class WitnessStoreWrapper extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Witnesses, this.props);
  }

}

WitnessStoreWrapper = (0,alt_react__WEBPACK_IMPORTED_MODULE_9__.connect)(WitnessStoreWrapper, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
  },

  getProps() {
    return {
      cardView: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().viewSettings.get("cardView"),
      filterWitness: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().viewSettings.get("filterWitness")
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WitnessStoreWrapper);

/***/ }),

/***/ 2750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquivalentValueComponent": () => (/* binding */ EquivalentValueComponent),
/* harmony export */   "BalanceValueComponent": () => (/* binding */ BalanceValueComponent),
/* harmony export */   "balanceToAsset": () => (/* binding */ balanceToAsset),
/* harmony export */   "getEquivalentValue": () => (/* binding */ getEquivalentValue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2094);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1938);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1939);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2061);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(607);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1816);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2314);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MarketStatsCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2316);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2313);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(437);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















const getEquivalentValue = function (amount, toAsset, fromAsset, fullPrecision = null, coreAsset = null, allMarketStats = null) {
  try {
    return common_market_utils__WEBPACK_IMPORTED_MODULE_11__["default"].convertValue(amount, toAsset, fromAsset, allMarketStats ? allMarketStats : stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().allMarketStats, coreAsset ? coreAsset : bitsharesjs__WEBPACK_IMPORTED_MODULE_13__.ChainStore.getAsset("1.3.0"), fullPrecision ? fullPrecision : true);
  } catch (err) {
    console.log(err);
  }
};
/**
 *  Given an asset amount, displays the equivalent value in baseAsset if possible
 *
 *  Expects three properties
 *  -'toAsset' which should be a asset id
 *  -'fromAsset' which is the asset id of the original asset amount
 *  -'amount' which is the amount to convert
 *  -'fullPrecision' boolean to tell if the amount uses the full precision of the asset
 */


class ValueComponent extends _MarketStatsCheck__WEBPACK_IMPORTED_MODULE_10__["default"] {
  static defaultProps = {
    fullPrecision: true,
    noDecimals: false,
    fullDecimals: false,
    hide_asset: false
  };

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(np) {
    return super.shouldComponentUpdate(np) || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(np.pulsate, this.props.pulsate) || np.toAsset !== this.props.toAsset || np.fromAsset !== this.props.fromAsset || np.amount !== this.props.amount;
  }

  render() {
    let {
      amount,
      toAsset,
      fromAsset,
      fullPrecision,
      coreAsset,
      ...others
    } = this.props;
    let toID = toAsset.get("id");
    let toSymbol = toAsset.get("symbol");
    let eqValue = getEquivalentValue(amount, toAsset, fromAsset, fullPrecision, coreAsset);

    if (!eqValue && eqValue !== 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Tooltip, {
        placement: "bottom",
        title: counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("tooltip.no_price")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "tooltip inline-block",
        style: {
          fontSize: "0.9rem"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
        content: "account.no_price"
      })));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      noPrefix: true,
      amount: eqValue,
      asset: toID,
      decimalOffset: toSymbol.indexOf("BTC") !== -1 ? 4 : this.props.fullDecimals ? 0 : this.props.noDecimals ? toAsset.get("precision") : toAsset.get("precision") - 2
    }, others));
  }

}

ValueComponent = (0,_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(ValueComponent, {
  propNames: ["toAsset", "fromAsset", "coreAsset"],
  defaultProps: {
    toAsset: "1.3.0",
    coreAsset: "1.3.0"
  }
});

class EquivalentValueComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      refCallback,
      ...others
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ValueComponent, _extends({}, others, {
      ref: refCallback
    }));
  }

}

EquivalentValueComponent = (0,alt_react__WEBPACK_IMPORTED_MODULE_6__.connect)(EquivalentValueComponent, {
  listenTo() {
    return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__["default"]];
  },

  getProps() {
    return {
      allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().allMarketStats
    };
  }

});

const balanceToAsset = function (balance) {
  const isBalanceObject = balance.getIn(["balance", "amount"]);

  if (isBalanceObject || isBalanceObject === 0) {
    return {
      asset_id: balance.getIn(["balance", "asset_id"]),
      amount: Number(balance.getIn(["balance", "amount"]))
    };
  } else {
    return {
      asset_id: balance.get("asset_type"),
      amount: Number(balance.get("balance"))
    };
  }
};

class BalanceValueComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    balance: _ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject.isRequired,
    satoshis: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().number)
  };
  static defaultProps = {
    satoshis: null
  };

  render() {
    const {
      balance,
      ...others
    } = this.props;
    const balanceAsset = balanceToAsset(balance);
    let amount = balanceAsset.amount; // override amount if desired

    if (!!this.props.satoshis) {
      amount = this.props.satoshis;
    }

    let fromAsset = balanceAsset.asset_id;
    if (isNaN(amount)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "--");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EquivalentValueComponent, _extends({
      amount: amount,
      fromAsset: fromAsset,
      noDecimals: true,
      fullPrecision: !!this.props.satoshis ? false : this.props.fullPrecision
    }, others));
  }

}

BalanceValueComponent = (0,_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(BalanceValueComponent, {
  keep_updating: true
});


/***/ }),

/***/ 2710:
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

/***/ 2753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1939);
/* harmony import */ var _LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2386);





class LinkToWitnessById extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainObject.isRequired
  };

  render() {
    let witness_account = this.props.witness.get("witness_account");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], {
      account: witness_account
    });
  }

}

LinkToWitnessById = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(LinkToWitnessById);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkToWitnessById);

/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2756:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2055);
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1943);



/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.takeRight([1, 2, 3]);
 * // => [3]
 *
 * _.takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.takeRight([1, 2, 3], 0);
 * // => []
 */
function takeRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : (0,_toInteger_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n);
  n = length - n;
  return (0,_baseSlice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, n < 0 ? 0 : n, length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (takeRight);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXIuNmVkOTI0ZWJiZjQ4MzgyODBmN2YuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQVFBOztBQTFMQTs7QUE0TEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUlBOztBQWxDQTs7QUFxQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBU0E7O0FBWkE7O0FBZUE7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFaQTtBQWlCQTs7QUFyREE7O0FBd0RBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBRkE7QUFvQkE7O0FBdkJBOztBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBUUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBT0E7QUFDQTtBQUZBO0FBT0E7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQU1BO0FBOUJBO0FBaUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFqQkE7QUFvQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFJQTtBQTFCQTtBQTZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBT0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUZBO0FBT0E7QUE3QkE7O0FBaUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTEE7QUFPQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBUUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBUUE7O0FBblVBOztBQXNVQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDN1ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBY0E7O0FBakJBOztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFsQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBckJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQVhBO0FBZUE7QUFFQTtBQUlBO0FBRUE7QUFJQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQWxCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFyQkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBWEE7QUFlQTtBQUVBO0FBS0E7QUFFQTtBQUlBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBVUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFQQTtBQVlBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVFBO0FBREE7QUFJQTtBQURBO0FBd0JBO0FBSUE7QUFDQTtBQUVBO0FBSEE7QUFEQTtBQWdCQTtBQUNBO0FBRUE7QUFIQTtBQURBO0FBU0E7QUFEQTtBQVVBO0FBTUE7QUFQQTtBQXhFQTtBQXdHQTtBQUNBO0FBQ0E7QUFGQTtBQXpIQTtBQWdJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBWUE7O0FBaG1CQTs7QUFtbUJBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FDam9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFiQTtBQUZBO0FBcUJBOztBQXhCQTs7QUEyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBR0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7O0FBeEJBOztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUNBO0FBRUE7O0FBR0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFVQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBY0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQVdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUxBO0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUxBO0FBY0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQVNBO0FBQ0E7QUFGQTtBQWFBOztBQTNpQkE7O0FBOGlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUNwbUJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBY0E7O0FBakJBOztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBS0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQTNEQTtBQXNFQTtBQUNBO0FBQUE7QUFBQTtBQUVBOztBQW5KQTs7QUFzSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFJQTtBQUVBO0FBSUE7QUFFQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7O0FBM0hBOztBQTZIQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFNQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQWFBO0FBQ0E7QUFHQTtBQUxBO0FBY0E7O0FBN0VBOztBQStFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQTs7QUFNQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBUUE7O0FBYkE7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBdENBO0FBOENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFLQTtBQUdBOztBQWhGQTs7QUFtRkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBVkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUE1REE7QUF1RUE7QUFDQTtBQUFBO0FBQUE7QUFFQTs7QUEzSkE7O0FBOEpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBVUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFRQTs7QUFwRUE7O0FBc0VBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFHQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFJQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQVZBO0FBWUE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUFBO0FBR0E7QUFDQTtBQU9BO0FBeEJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUF0QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7O0FBYUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7O0FBbFJBOztBQW9SQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFFQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQXVCQTtBQUlBO0FBTEE7QUFXQTtBQUdBO0FBSkE7QUFVQTtBQURBO0FBZUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BO0FBY0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBUkE7QUFlQTs7QUEvSkE7O0FBaUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUhBOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTs7QUFYQTtBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBUUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFFQTs7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFJQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFnQkE7O0FBNUVBOztBQThFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTs7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFMQTs7QUFRQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBOztBQVlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFVQTs7QUEvQkE7O0FBaUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFhQTtBQUNBOztBQTVKQTs7QUErSkE7Ozs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBUkE7O0FBVUE7QUFFQTs7Ozs7Ozs7QUNqQkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQmxvY2tjaGFpbi9GZWVzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0ZlZXNDb250YWluZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldHMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldHNDb250YWluZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0FjY291bnRzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9BY2NvdW50c0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQXNzZXRzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9Bc3NldHNDb250YWluZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0Jsb2Nrcy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQmxvY2tzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9CbG9ja3RpbWVDaGFydC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQ29tbWl0dGVlTWVtYmVycy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvRXhwbG9yZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL1RyYW5zYWN0aW9uQ2hhcnQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL1dpdG5lc3Nlcy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9FcXVpdmFsZW50VmFsdWVDb21wb25lbnQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvRmxvYXRpbmdEcm9wZG93bi5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9MaW5rVG9XaXRuZXNzQnlJZC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvd2l0bmVzc2VzLnNjc3M/ZDQzMSIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3Rha2VSaWdodC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgSGVscENvbnRlbnQgZnJvbSBcIi4uL1V0aWxpdHkvSGVscENvbnRlbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IHtFcXVpdmFsZW50VmFsdWVDb21wb25lbnR9IGZyb20gXCIuLi9VdGlsaXR5L0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlLCBDaGFpblR5cGVzIGFzIGdyYXBoZW5lQ2hhaW5UeXBlc30gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge0NhcmR9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmNvbnN0IHtvcGVyYXRpb25zfSA9IGdyYXBoZW5lQ2hhaW5UeXBlcztcbmxldCBvcHMgPSBPYmplY3Qua2V5cyhvcGVyYXRpb25zKTtcblxuLy8gRGVmaW5lIGdyb3VwcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvcGVyYXRpb24gaWRzXG5sZXQgZmVlX2dyb3VwaW5nID0ge1xuICAgIGdlbmVyYWw6IFswLCAyNSwgMjYsIDI3LCAyOCwgMzIsIDMzLCAzNywgMzksIDQxLCA0OSwgNTAsIDUyXSxcbiAgICBhc3NldDogWzEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAzOCwgNDMsIDQ0LCA0NywgNDhdLFxuICAgIG1hcmtldDogWzEsIDIsIDMsIDQsIDQ1LCA0Nl0sXG4gICAgYWNjb3VudDogWzUsIDYsIDcsIDgsIDldLFxuICAgIGJ1c2luZXNzOiBbMjAsIDIxLCAyMiwgMjMsIDI0LCAyOSwgMzAsIDMxLCAzNCwgMzUsIDM2XVxufTtcblxuLy8gT3BlcmF0aW9ucyB0aGF0IHJlcXVpcmUgTFRNXG5sZXQgbHRtX3JlcXVpcmVkID0gWzUsIDcsIDIwLCAyMSwgMzRdO1xuXG5jbGFzcyBGZWVHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuICFJbW11dGFibGUuaXMobmV4dFByb3BzLmdsb2JhbE9iamVjdCwgdGhpcy5wcm9wcy5nbG9iYWxPYmplY3QpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtnbG9iYWxPYmplY3QsIHNldHRpbmdzLCBvcElkcywgdGl0bGV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZ2xvYmFsT2JqZWN0ID0gZ2xvYmFsT2JqZWN0LnRvSlMoKTtcbiAgICAgICAgY29uc3QgY29yZV9hc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXCIxLjMuMFwiKTtcblxuICAgICAgICBsZXQgY3VycmVudF9mZWVzID0gZ2xvYmFsT2JqZWN0LnBhcmFtZXRlcnMuY3VycmVudF9mZWVzO1xuICAgICAgICBsZXQgbmV0d29ya19mZWUgPSBnbG9iYWxPYmplY3QucGFyYW1ldGVycy5uZXR3b3JrX3BlcmNlbnRfb2ZfZmVlIC8gMWU0O1xuICAgICAgICBsZXQgc2NhbGUgPSBjdXJyZW50X2ZlZXMuc2NhbGU7XG4gICAgICAgIGxldCBmZWVzUmF3ID0gY3VycmVudF9mZWVzLnBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBwcmVmZXJyZWRVbml0ID1cbiAgICAgICAgICAgIHNldHRpbmdzLmdldChcImZlZV9hc3NldFwiKSB8fCBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICBsZXQgdHJ4VHlwZXMgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2FjdGlvbi50cnhUeXBlc1wiKTtcblxuICAgICAgICBsZXQgZmVlcyA9IG9wSWRzLm1hcChvcElEID0+IHtcbiAgICAgICAgICAgIGxldCBmZWVJZHggPSBmZWVzUmF3LmZpbmRJbmRleChmID0+IGZbMF0gPT09IG9wSUQpO1xuICAgICAgICAgICAgaWYgKGZlZUlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIFwiQXNraW5nIGZvciBub24tZXhpc3RpbmcgZmVlIGlkICVkISBDaGVjayBncm91cCBzZXR0aW5ncyBpbiBGZWVzLmpzeFwiLFxuICAgICAgICAgICAgICAgICAgICBvcElEXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIEZJWE1FLCBpZiBJIGFzayBmb3IgYSBmZWUgdGhhdCBkb2VzIG5vdCBleGlzdD9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGZlZVN0cnVjdCA9IGZlZXNSYXdbZmVlSWR4XTtcblxuICAgICAgICAgICAgbGV0IG9wSWQgPSBmZWVTdHJ1Y3RbMF07XG4gICAgICAgICAgICBsZXQgZmVlID0gZmVlU3RydWN0WzFdO1xuICAgICAgICAgICAgbGV0IG9wZXJhdGlvbl9uYW1lID0gb3BzW29wSWRdO1xuICAgICAgICAgICAgbGV0IGZlZW5hbWUgPSB0cnhUeXBlc1tvcGVyYXRpb25fbmFtZV07XG4gICAgICAgICAgICAvL2xldCBmZWVuYW1lID0gdHJ4VHlwZXNbb3BlcmF0aW9uX25hbWVdICsgYCAoJHtvcElkfSlgO1xuXG4gICAgICAgICAgICBsZXQgZmVlUmF0ZUZvckxUTSA9IG5ldHdvcmtfZmVlO1xuICAgICAgICAgICAgaWYgKG9wSWQgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iaXRzaGFyZXMvYml0c2hhcmVzLXVpL2lzc3Vlcy85OTZcbiAgICAgICAgICAgICAgICBmZWVSYXRlRm9yTFRNID0gMC41ICsgMC41ICogbmV0d29ya19mZWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByb3dzID0gW107XG4gICAgICAgICAgICBsZXQgaGVhZEluY2x1ZGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbGFiZWxDbGFzcyA9IGNsYXNzTmFtZXMoXCJsYWJlbFwiLCBcImluZm9cIik7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBmZWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gKGZlZVtrZXldICogc2NhbGUpIC8gMWU0O1xuICAgICAgICAgICAgICAgIGxldCBhbW91bnRGb3JMVE0gPSBhbW91bnQgKiBmZWVSYXRlRm9yTFRNO1xuICAgICAgICAgICAgICAgIGxldCBmZWVUeXBlcyA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zYWN0aW9uLmZlZVR5cGVzXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhc3NldEFtb3VudCA9IGFtb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YW1vdW50fSBhc3NldD1cIjEuMy4wXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBmZWVUeXBlc1tcIl9ub25lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgZXF1aXZhbGVudEFtb3VudCA9IGFtb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFByZWNpc2lvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Bc3NldD17cHJlZmVycmVkVW5pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxEZWNpbWFscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBmZWVUeXBlc1tcIl9ub25lXCJdXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzZXRBbW91bnRMVE0gPSBhbW91bnRGb3JMVE0gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldCBhbW91bnQ9e2Ftb3VudEZvckxUTX0gYXNzZXQ9XCIxLjMuMFwiIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgZmVlVHlwZXNbXCJfbm9uZVwiXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IGVxdWl2YWxlbnRBbW91bnRMVE0gPSBhbW91bnRGb3JMVE0gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxFcXVpdmFsZW50VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Bc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxQcmVjaXNpb249e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudEZvckxUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQXNzZXQ9e3ByZWZlcnJlZFVuaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsRGVjaW1hbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgZmVlVHlwZXNbXCJfbm9uZVwiXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICghaGVhZEluY2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRJbmNsdWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd1NwYW49XCI2XCIgc3R5bGU9e3t3aWR0aDogXCIxNWVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xhYmVsQ2xhc3N9PntmZWVuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGx0bV9yZXF1aXJlZC5pbmRleE9mKG9wSWQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmVlVHlwZXNba2V5XSAhPSBcIkFubnVhbCBNZW1iZXJzaGlwMjIyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtvcElkLnRvU3RyaW5nKCkgKyBrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZmVlVHlwZXNba2V5XX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ftb3VudCAhPT0gMCAmJiBwcmVmZXJyZWRVbml0ICE9PSBcIkdQSFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsvJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcXVpdmFsZW50QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZUlkeCAhPT0gOCA/IGFzc2V0QW1vdW50TFRNIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWVJZHggIT09IDggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCAhPT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkVW5pdCAhPT0gXCJHUEhcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7LyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXF1aXZhbGVudEFtb3VudExUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e29wSWQudG9TdHJpbmcoKSArIGtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZmVlVHlwZXNba2V5XX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gPHN1cD4qPC9zdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXRBbW91bnRMVE19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbW91bnQgIT09IDAgJiYgcHJlZmVycmVkVW5pdCAhPT0gXCJHUEhcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOy8mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXF1aXZhbGVudEFtb3VudExUTX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDx0Ym9keSBrZXk9e2ZlZUlkeH0+e3Jvd3N9PC90Ym9keT47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZD57dGhpcy5wcm9wcy50aXRsZS50b1VwcGVyQ2FzZSgpfTwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImV4cGxvcmVyLmJsb2NrLm9wXCJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImV4cGxvcmVyLmZlZXMudHlwZVwifS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiZXhwbG9yZXIuZmVlcy5mZWVcIn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImV4cGxvcmVyLmZlZXMuZmVlbHRtXCJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIHtmZWVzfVxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5GZWVHcm91cCA9IEJpbmRUb0NoYWluU3RhdGUoRmVlR3JvdXApO1xuXG5jbGFzcyBGZWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBGZWVHcm91cHNUaXRsZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zYWN0aW9uLmZlZUdyb3Vwc1wiKTtcbiAgICAgICAgbGV0IGZlZUdyb3VwcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGdyb3VwTmFtZSBpbiBmZWVfZ3JvdXBpbmcpIHtcbiAgICAgICAgICAgIGxldCBncm91cE5hbWVUZXh0ID0gRmVlR3JvdXBzVGl0bGVbZ3JvdXBOYW1lXTtcbiAgICAgICAgICAgIGxldCBmZWVJZHMgPSBmZWVfZ3JvdXBpbmdbZ3JvdXBOYW1lXTtcbiAgICAgICAgICAgIGZlZUdyb3Vwcy5wdXNoKFxuICAgICAgICAgICAgICAgIDxGZWVHcm91cFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2dyb3VwTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3RoaXMucHJvcHMuc2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgIG9wSWRzPXtmZWVJZHN9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtncm91cE5hbWVUZXh0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiIHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTEyIHNocmlua1wiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudCBwYXRoPXtcImNvbXBvbmVudHMvRmVlc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0xMiBcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93OiBcInZpc2libGVcIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPntmZWVHcm91cHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcbmltcG9ydCBGZWVzIGZyb20gXCIuL0ZlZXNcIjtcblxuY2xhc3MgRmVlc0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W1NldHRpbmdzU3RvcmVdfVxuICAgICAgICAgICAgICAgIGluamVjdD17e1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmVlcyB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVlc0NvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNeU1hcmtldHMgZnJvbSBcIi4vTXlNYXJrZXRzXCI7XG5cbmNsYXNzIE1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaGVpZ2h0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgX3NldERpbWVuc2lvbnMoKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnJlZnMud3JhcHBlci5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGhlaWdodCAhPT0gdGhpcy5zdGF0ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hlaWdodH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9XCJ3cmFwcGVyXCIgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgIDxNeU1hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IDIwfX1cbiAgICAgICAgICAgICAgICAgICAgbGlzdEhlaWdodD17dGhpcy5zdGF0ZS5oZWlnaHQgPyB0aGlzLnN0YXRlLmhlaWdodCA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyU3R5bGU9e3twYWRkaW5nVG9wOiAwLCBib3JkZXJUb3A6IFwibm9uZVwifX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSGVhZGVyPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJzdGFyXCIsIGluZGV4OiAxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcIm1hcmtldFwiLCBpbmRleDogMn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJxdW90ZVN1cHBseVwiLCBpbmRleDogM30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJ2b2xcIiwgaW5kZXg6IDR9LFxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwicHJpY2VcIiwgaW5kZXg6IDV9LFxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwiY2hhbmdlXCIsIGluZGV4OiA2fVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtldHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcclxuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBNYXJrZXRzIGZyb20gXCIuL01hcmtldHNcIjtcclxuXHJcbmNsYXNzIE1hcmtldHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W1NldHRpbmdzU3RvcmUsIEFzc2V0U3RvcmUsIE1hcmtldHNTdG9yZV19XHJcbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbG9va3VwUmVzdWx0czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmxvb2t1cFJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRCYXNlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXRCYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNYXJrZXRzIC8+XHJcbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtldHNDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xyXG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7VGFibGUsIFNlbGVjdCwgSWNvbiBhcyBJY29uU3R5bGVHdWlkZX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL1V0aWxpdHkvU2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuXHJcbmNsYXNzIEFjY291bnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBwcm9wcy5zZWFyY2hUZXJtLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICByb3dzT25QYWdlOiBcIjI1XCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9zZWFyY2hBY2NvdW50cyA9IGRlYm91bmNlKHRoaXMuX3NlYXJjaEFjY291bnRzLCAyMDApO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm93c0NoYW5nZSA9IHRoaXMuaGFuZGxlUm93c0NoYW5nZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJhbGFuY2VPYmplY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhcclxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5zZWFyY2hBY2NvdW50cyxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoQWNjb3VudHNcclxuICAgICAgICAgICAgKSB8fFxyXG4gICAgICAgICAgICBuZXh0U3RhdGUuc2VhcmNoVGVybSAhPT0gdGhpcy5zdGF0ZS5zZWFyY2hUZXJtIHx8XHJcbiAgICAgICAgICAgIG5leHRTdGF0ZS5pc0xvYWRpbmcgIT09IHRoaXMuc3RhdGUuaXNMb2FkaW5nXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25TZWFyY2hDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9zZWFyY2hBY2NvdW50cyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NlYXJjaEFjY291bnRzKHNlYXJjaFRlcm0pIHtcclxuICAgICAgICBBY2NvdW50QWN0aW9ucy5hY2NvdW50U2VhcmNoKHNlYXJjaFRlcm0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2V9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25BZGRDb250YWN0KGFjY291bnQsIGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgQWNjb3VudEFjdGlvbnMuYWRkQWNjb3VudENvbnRhY3QoYWNjb3VudCk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblJlbW92ZUNvbnRhY3QoYWNjb3VudCwgZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBBY2NvdW50QWN0aW9ucy5yZW1vdmVBY2NvdW50Q29udGFjdChhY2NvdW50KTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUm93c0NoYW5nZShyb3dzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJvd3NPblBhZ2U6IHJvd3NcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2Vuc3VyZUJhbGFuY2VPYmplY3Qob2JqZWN0X2lkKSB7XHJcbiAgICAgICAgaWYgKG9iamVjdF9pZCAmJiB0eXBlb2Ygb2JqZWN0X2lkID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5iYWxhbmNlT2JqZWN0c1tvYmplY3RfaWRdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbGFuY2VPYmplY3RzW29iamVjdF9pZF0gPSBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0T2JqZWN0KG9iamVjdF9pZCkuZ2V0KFwiYmFsYW5jZVwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuYmFsYW5jZU9iamVjdHNbb2JqZWN0X2lkXSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhbGFuY2VPYmplY3RzW29iamVjdF9pZF0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtzZWFyY2hBY2NvdW50c30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB7c2VhcmNoVGVybX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2x1bW5zID0gW107XHJcblxyXG4gICAgICAgIGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5pZFwiIC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFjY291bnRJZFwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImFjY291bnRJZFwiLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNvcnRPcmRlcjogXCJhc2NlbmRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5hY2NvdW50SWQgPiBiLmFjY291bnRJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmFjY291bnRJZCA8IGIuYWNjb3VudElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+e2lkfTwvZGl2PjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxJY29uIG5hbWU9XCJ1c2VyXCIgdGl0bGU9XCJpY29ucy51c2VyLmFjY291bnRcIiAvPixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhY2NvdW50Q29udGFjdHNcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJhY2NvdW50Q29udGFjdHNcIixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKGNvbnRhY3RzLCByZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFjdHMuaGFzKHJlY29yZC5hY2NvdW50TmFtZSkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uUmVtb3ZlQ29udGFjdC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmFjY291bnROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW51cy1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMubWludXNfY2lyY2xlLnJlbW92ZV9jb250YWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQWRkQ29udGFjdC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmFjY291bnROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbHVzLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5wbHVzX2NpcmNsZS5hZGRfY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cImFjY291bnQubmFtZVwiIC8+LFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFjY291bnROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWNjb3VudE5hbWVcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5hY2NvdW50TmFtZSA+IGIuYWNjb3VudE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5hY2NvdW50TmFtZSA8IGIuYWNjb3VudE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IG5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9hY2NvdW50LyR7bmFtZX0vb3ZlcnZpZXdgfT57bmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwiZ2F0ZXdheS5iYWxhbmNlXCIgLz4sXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYWNjb3VudEJhbGFuY2VcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJhY2NvdW50QmFsYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vuc3VyZUJhbGFuY2VPYmplY3QoYS5hY2NvdW50QmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5zdXJlQmFsYW5jZU9iamVjdChiLmFjY291bnRCYWxhbmNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFsYW5jZU9iamVjdHNbYS5hY2NvdW50QmFsYW5jZV0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGFuY2VPYmplY3RzW2IuYWNjb3VudEJhbGFuY2VdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuYmFsYW5jZU9iamVjdHNbYS5hY2NvdW50QmFsYW5jZV0gPFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZU9iamVjdHNbYi5hY2NvdW50QmFsYW5jZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGJhbGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWJhbGFuY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuL2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXtiYWxhbmNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJhY2NvdW50LnBlcmNlbnRcIiAvPixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhY2NvdW50QmFsYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImFjY291bnRCYWxhbmNlUGVyY2VudGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vuc3VyZUJhbGFuY2VPYmplY3QoYS5hY2NvdW50QmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5zdXJlQmFsYW5jZU9iamVjdChiLmFjY291bnRCYWxhbmNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmFsYW5jZU9iamVjdHNbYS5hY2NvdW50QmFsYW5jZV0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGFuY2VPYmplY3RzW2IuYWNjb3VudEJhbGFuY2VdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuYmFsYW5jZU9iamVjdHNbYS5hY2NvdW50QmFsYW5jZV0gPFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZU9iamVjdHNbYi5hY2NvdW50QmFsYW5jZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGJhbGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWJhbGFuY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuL2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXtiYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc1BlcmNlbnRhZ2U9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoQWNjb3VudHMuc2l6ZSA+IDAgJiYgc2VhcmNoVGVybSAmJiBzZWFyY2hUZXJtLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2VhcmNoQWNjb3VudHNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgKiBUaGlzIGFwcGVhcnMgdG8gcmV0dXJuIGZhbHNlIG5lZ2F0aXZlcywgcGVyaGFwcyBmcm9tXHJcbiAgICAgICAgICAgICAgICAgICAgICogY2hhbmdlZCBhY2NvdW50IG5hbWUgcnVsZXMgd2hlbiBtb3ZpbmcgdG8gZ3JhcGhlbmU/LiBFaXRoZXJcclxuICAgICAgICAgICAgICAgICAgICAgKiB3YXksIHRyeWluZyB0byByZXNvbHZlIGludmFsaWQgbmFtZXMgZmFpbHMgaW4gdGhlIENoYWluU3RvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICogd2hpY2ggaW4gdHVybiBicmVha3MgdGhlIEJpbmRUb0NoYWluU3RhdGUgd3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICghQ2hhaW5WYWxpZGF0aW9uLmlzX2FjY291bnRfbmFtZShhLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4T2Yoc2VhcmNoVGVybSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgPiBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYSA8IGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKChuYW1lLCBpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2UgPSBjdXJyZW50QWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRBY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIFwiMS4zLjBcIl0pIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50Q29udGFjdHM6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWNjb3VudENvbnRhY3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEJhbGFuY2U6IGJhbGFuY2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWFpbi1jb250ZW50IHNtYWxsLTEyIG1lZGl1bS0xMCBtZWRpdW0tb2Zmc2V0LTEgbWFpbi1jb250ZW50IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiU2VhcmNoXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFRlcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMjAwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vblNlYXJjaENoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxNTBweFwiLCBtYXJnaW5MZWZ0OiBcIjI0cHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJvd3NPblBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJvd3NDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMTBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCByb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjI1XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjUgcm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCI1MFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwIHJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMTAwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwIHJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMjAwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwIHJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIyNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFRlcm0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hUZXJtLmxlbmd0aCA9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5zdGFydF90eXBpbmdfdG9fc2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjE2cHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93S2V5PVwiYWNjb3VudElkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IE51bWJlcih0aGlzLnN0YXRlLnJvd3NPblBhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogMTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgdHlwZT1cInRocmVlLWJvdW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQWNjb3VudHMuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc2VhcmNoQWNjb3VudHM6IHt9XHJcbn07XHJcblxyXG5BY2NvdW50cy5wcm9wVHlwZXMgPSB7XHJcbiAgICBzZWFyY2hBY2NvdW50czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50cztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcclxuaW1wb3J0IEFjY291bnRzIGZyb20gXCIuL0FjY291bnRzXCI7XHJcblxyXG5jbGFzcyBBY2NvdW50c0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbQWNjb3VudFN0b3JlXX1cclxuICAgICAgICAgICAgICAgIGluamVjdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEFjY291bnRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5zZWFyY2hBY2NvdW50cztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnNlYXJjaFRlcm07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFjY291bnRzIC8+XHJcbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRzQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiY29tbW9uL2Fzc2V0X3V0aWxzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBscyBmcm9tIFwiY29tbW9uL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7UmFkaW8sIFRhYmxlLCBTZWxlY3QsIEljb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCB7TGlzdH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9TZWFyY2hJbnB1dFwiO1xuXG5sZXQgYWNjb3VudFN0b3JhZ2UgPSBscyhcIl9fZ3JhcGhlbmVfX1wiKTtcblxuY2xhc3MgQXNzZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGxldCBjaGFpbklEID0gQXBpcy5pbnN0YW5jZSgpLmNoYWluX2lkO1xuICAgICAgICBpZiAoY2hhaW5JRCkgY2hhaW5JRCA9IGNoYWluSUQuc3Vic3RyKDAsIDgpO1xuICAgICAgICBlbHNlIGNoYWluSUQgPSBcIjdmY2Y0NTJkXCI7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYWluSUQsXG4gICAgICAgICAgICBmb3VuZExhc3Q6IGZhbHNlLFxuICAgICAgICAgICAgbGFzdEFzc2V0OiBcIlwiLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHRvdGFsQXNzZXRzOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBhY2NvdW50U3RvcmFnZS5nZXQoYHRvdGFsQXNzZXRzXyR7Y2hhaW5JRH1gKSAhPSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudFN0b3JhZ2UuZ2V0KGB0b3RhbEFzc2V0c18ke2NoYWluSUR9YClcbiAgICAgICAgICAgICAgICAgICAgOiBjaGFpbklEICYmIGNoYWluSUQgPT09IFwiN2ZjZjQ1MmRcIlxuICAgICAgICAgICAgICAgICAgICA/IDMwMDBcbiAgICAgICAgICAgICAgICAgICAgOiA1MCwgLy8gbWFpbm5ldCBoYXMgMzAwMCsgYXNzZXRzLCBvdGhlciBjaGFpbnMgbWF5IG5vdCBoYXZlIHRoYXQgbWFueVxuICAgICAgICAgICAgYXNzZXRzRmV0Y2hlZDogMCxcbiAgICAgICAgICAgIGFjdGl2ZUZpbHRlcjogXCJtYXJrZXRcIixcbiAgICAgICAgICAgIGZpbHRlclNlYXJjaDogcHJvcHMuZmlsdGVyU2VhcmNoIHx8IFwiXCIsXG4gICAgICAgICAgICByb3dzT25QYWdlOiBcIjI1XCJcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl90b2dnbGVGaWx0ZXIgPSB0aGlzLl90b2dnbGVGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSb3dzQ2hhbmdlID0gdGhpcy5oYW5kbGVSb3dzQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLmFzc2V0cywgdGhpcy5wcm9wcy5hc3NldHMpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrQXNzZXRzKHRoaXMucHJvcHMuYXNzZXRzLCB0cnVlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlclNlYXJjaDogKGUudGFyZ2V0LnZhbHVlIHx8IFwiXCIpLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUm93c0NoYW5nZShyb3dzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93c09uUGFnZTogcm93c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tBc3NldHMoYXNzZXRzLCBmb3JjZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IHRydWV9KTtcbiAgICAgICAgbGV0IGxhc3RBc3NldCA9IGFzc2V0c1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEuc3ltYm9sIDwgYi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubGFzdCgpO1xuXG4gICAgICAgIGlmIChhc3NldHMuc2l6ZSA9PT0gMCB8fCBmb3JjZSkge1xuICAgICAgICAgICAgQXNzZXRBY3Rpb25zLmdldEFzc2V0TGlzdC5kZWZlcihcIkFcIiwgMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Fzc2V0c0ZldGNoZWQ6IDEwMH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGFzc2V0cy5zaXplID49IHRoaXMuc3RhdGUuYXNzZXRzRmV0Y2hlZCkge1xuICAgICAgICAgICAgQXNzZXRBY3Rpb25zLmdldEFzc2V0TGlzdC5kZWZlcihsYXN0QXNzZXQuc3ltYm9sLCAxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXNzZXRzRmV0Y2hlZDogdGhpcy5zdGF0ZS5hc3NldHNGZXRjaGVkICsgOTl9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhc3NldHMuc2l6ZSA+IHRoaXMuc3RhdGUudG90YWxBc3NldHMpIHtcbiAgICAgICAgICAgIGFjY291bnRTdG9yYWdlLnNldChcbiAgICAgICAgICAgICAgICBgdG90YWxBc3NldHNfJHt0aGlzLnN0YXRlLmNoYWluSUR9YCxcbiAgICAgICAgICAgICAgICBhc3NldHMuc2l6ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFzc2V0c0ZldGNoZWQgPj0gdGhpcy5zdGF0ZS50b3RhbEFzc2V0cyAtIDEwMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuYXNzZXRzICE9PSB0aGlzLnByb3BzLmFzc2V0cykge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tBc3NldHMobmV4dFByb3BzLmFzc2V0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rVG9BY2NvdW50KG5hbWVfb3JfaWQpIHtcbiAgICAgICAgaWYgKCFuYW1lX29yX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+LTwvc3Bhbj47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e25hbWVfb3JfaWR9IC8+O1xuICAgIH1cblxuICAgIF90b2dnbGVGaWx0ZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUZpbHRlcjogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uRmlsdGVyKHR5cGUsIGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W3R5cGVdOiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpfSk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBbdHlwZV06IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0c30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZUZpbHRlcn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1hcmtldHMuZmlsdGVyXCIpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxldCBjb3JlQXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFwiMS4zLjBcIik7XG5cbiAgICAgICAgbGV0IHBtO1xuXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gW107XG4gICAgICAgIGxldCBjb2x1bW5zID0gW107XG5cbiAgICAgICAgLy8gRGVmYXVsdCBzb3J0aW5nIG9mIHRoZSBhbnQgdGFibGUgaXMgZGVmaW5lZCB0aHJvdWdoIGRlZmF1bHRTb3J0T3JkZXIgcHJvcFxuXG4gICAgICAgIGlmIChhY3RpdmVGaWx0ZXIgPT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgICAgIGNvbHVtbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTb3J0T3JkZXI6IFwiYXNjZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbCA+IGIuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhLnN5bWJvbCA8IGIuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYXNzZXQvJHtpdGVtfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc3N1ZXJBID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGEuaXNzdWVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNzdWVyQiA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChiLmlzc3VlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlckEpIGlzc3VlckEgPSBpc3N1ZXJBLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQikgaXNzdWVyQiA9IGlzc3VlckIuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZXJBID4gaXNzdWVyQikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQSA8IGlzc3VlckIpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua1RvQWNjb3VudChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY3VycmVudFN1cHBseVwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImN1cnJlbnRTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5jdXJyZW50U3VwcGx5ID0gcGFyc2VGbG9hdChhLmN1cnJlbnRTdXBwbHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYi5jdXJyZW50U3VwcGx5ID0gcGFyc2VGbG9hdChiLmN1cnJlbnRTdXBwbHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuY3VycmVudFN1cHBseSA+IGIuY3VycmVudFN1cHBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYS5jdXJyZW50U3VwcGx5IDwgYi5jdXJyZW50U3VwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoaXRlbSwgcmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3JlY29yZC5jdXJyZW50U3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17cmVjb3JkLmFzc2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1hcmtldElkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibWFya2V0SWRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvbWFya2V0LyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT17XCJsaW5lLWNoYXJ0XCJ9IC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJoZWFkZXIuZXhjaGFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBhc3NldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgIWEubWFya2V0X2Fzc2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhLnN5bWJvbC5pbmRleE9mKHRoaXMuc3RhdGUuZmlsdGVyU2VhcmNoKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoYXNzZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5vcHRpb25zLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvcmVBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29yZUFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJHUEhcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogYXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyOiBhc3NldC5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3VwcGx5OiBhc3NldC5keW5hbWljLmN1cnJlbnRfc3VwcGx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJZDogYXNzZXQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJZDogbWFya2V0SURcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyID09IFwibWFya2V0XCIpIHtcbiAgICAgICAgICAgIGNvbHVtbnMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwic3ltYm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTb3J0T3JkZXI6IFwiYXNjZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbCA+IGIuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhLnN5bWJvbCA8IGIuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYXNzZXQvJHtpdGVtfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaXNzdWVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc3N1ZXJBID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGEuaXNzdWVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNzdWVyQiA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChiLmlzc3VlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlckEpIGlzc3VlckEgPSBpc3N1ZXJBLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQikgaXNzdWVyQiA9IGlzc3VlckIuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZXJBID4gaXNzdWVyQikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQSA8IGlzc3VlckIpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua1RvQWNjb3VudChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY3VycmVudFN1cHBseVwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImN1cnJlbnRTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5jdXJyZW50U3VwcGx5ID0gcGFyc2VGbG9hdChhLmN1cnJlbnRTdXBwbHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYi5jdXJyZW50U3VwcGx5ID0gcGFyc2VGbG9hdChiLmN1cnJlbnRTdXBwbHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuY3VycmVudFN1cHBseSA+IGIuY3VycmVudFN1cHBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYS5jdXJyZW50U3VwcGx5IDwgYi5jdXJyZW50U3VwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoaXRlbSwgcmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3JlY29yZC5jdXJyZW50U3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17cmVjb3JkLmFzc2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1hcmtldElkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibWFya2V0SWRcIixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvbWFya2V0LyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT17XCJsaW5lLWNoYXJ0XCJ9IC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJoZWFkZXIuZXhjaGFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBhc3NldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5iaXRhc3NldF9kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhYS5iaXRhc3NldF9kYXRhLmlzX3ByZWRpY3Rpb25fbWFya2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhLnN5bWJvbC5pbmRleE9mKHRoaXMuc3RhdGUuZmlsdGVyU2VhcmNoKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoYXNzZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5vcHRpb25zLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvcmVBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29yZUFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJHUEhcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogYXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyOiBhc3NldC5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3VwcGx5OiBhc3NldC5keW5hbWljLmN1cnJlbnRfc3VwcGx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJZDogYXNzZXQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJZDogbWFya2V0SURcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyID09IFwicHJlZGljdGlvblwiKSB7XG4gICAgICAgICAgICBwbSA9IGFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGEub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJpdGFzc2V0X2RhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYml0YXNzZXRfZGF0YS5pc19wcmVkaWN0aW9uX21hcmtldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKGEuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZih0aGlzLnN0YXRlLmZpbHRlclNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLm1haW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlclNlYXJjaC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sIDwgYi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhLnN5bWJvbCA+IGIuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29yZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3JlQXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkdQSFwiKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldElEXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWFpbi1jb250ZW50IHNtYWxsLTEyIG1lZGl1bS0xMCBtZWRpdW0tb2Zmc2V0LTEgbWFpbi1jb250ZW50IHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyaWMtYm9yZGVyZWQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwibG9hZGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlclNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMjAwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWN0aXZlRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX3RvZ2dsZUZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wibWFya2V0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJ1c2VyXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy51c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wicHJlZGljdGlvblwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMucHJlZGljdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTUwcHhcIiwgbWFyZ2luTGVmdDogXCIyNHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucm93c09uUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJvd3NDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIxMFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMjVcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjUgcm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjUwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwIHJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIxMDBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwIHJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIyMDBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwIHJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlRmlsdGVyID09IFwicHJlZGljdGlvblwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5hc3NldC5pZC5zcGxpdChcIi5cIilbMl19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hcmtldC8ke2l0ZW0ubWFya2V0SUR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJoZWFkZXIuZXhjaGFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvYXNzZXQvJHtpdGVtLmFzc2V0LnN5bWJvbH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmRpdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25kaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTBweCAyMHB4IDVweCAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjE4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjAgMjBweCA1cHggMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMThweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlzc3VlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZHluYW1pY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJyZW50X3N1cHBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHBpcnkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHBpcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0tleT1cInN5bWJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Bc3NldHMuZGVmYXVsdFByb3BzID0ge1xuICAgIGFzc2V0czoge31cbn07XG5cbkFzc2V0cy5wcm9wVHlwZXMgPSB7XG4gICAgYXNzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBBc3NldHMgZnJvbSBcIi4vQXNzZXRzXCI7XHJcblxyXG5jbGFzcyBBc3NldHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0Fzc2V0U3RvcmUsIFNldHRpbmdzU3RvcmVdfVxyXG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTVBBOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyTVBBXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclVJQTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbHRlclVJQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFzc2V0cyAvPlxyXG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc3NldHNDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBCbG9ja2NoYWluQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CbG9ja2NoYWluQWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3JtYXR0ZWREYXRlfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuaW1wb3J0IE9wZXJhdGlvbiBmcm9tIFwiLi4vQmxvY2tjaGFpbi9PcGVyYXRpb25cIjtcbmltcG9ydCBMaW5rVG9XaXRuZXNzQnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9XaXRuZXNzQnlJZFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBUcmFuc2FjdGlvbkNoYXJ0IGZyb20gXCIuL1RyYW5zYWN0aW9uQ2hhcnRcIjtcbmltcG9ydCBCbG9ja3RpbWVDaGFydCBmcm9tIFwiLi9CbG9ja3RpbWVDaGFydFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBUaW1lQWdvIGZyb20gXCIuLi9VdGlsaXR5L1RpbWVBZ29cIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IFRyYW5zaXRpb25XcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zaXRpb25XcmFwcGVyXCI7XG5cbnJlcXVpcmUoXCIuLi9CbG9ja2NoYWluL2pzb24taW5zcGVjdG9yLnNjc3NcIik7XG5cbmNsYXNzIEJsb2NrVGltZUFnbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gbmV4dFByb3BzLmJsb2NrVGltZSAhPT0gdGhpcy5wcm9wcy5ibG9ja1RpbWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Jsb2NrVGltZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIGxldCB0aW1lUGFzc2VkID0gRGF0ZS5ub3coKSAtIGJsb2NrVGltZTtcbiAgICAgICAgbGV0IHRpbWVQYXNzZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGJsb2NrVGltZSkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGxldCB0ZXh0Q2xhc3MgPSBjbGFzc05hbWVzKFxuICAgICAgICAgICAgXCJ0eHRsYWJlbFwiLFxuICAgICAgICAgICAge3N1Y2Nlc3M6IHRpbWVQYXNzZWQgPD0gNjAwMH0sXG4gICAgICAgICAgICB7aW5mbzogdGltZVBhc3NlZCA+IDYwMDAgJiYgdGltZVBhc3NlZCA8PSAxNTAwMH0sXG4gICAgICAgICAgICB7d2FybmluZzogdGltZVBhc3NlZCA+IDE1MDAwICYmIHRpbWVQYXNzZWQgPD0gMjUwMDB9LFxuICAgICAgICAgICAge2Vycm9yOiB0aW1lUGFzc2VkID4gMjUwMDB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGJsb2NrVGltZSA/IChcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3RleHRDbGFzc30+XG4gICAgICAgICAgICAgICAgPFRpbWVBZ28gdGltZT17YmxvY2tUaW1lfSAvPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgKSA6IG51bGw7XG4gICAgfVxufVxuXG5jbGFzcyBCbG9ja3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IFwiMi4wLjBcIixcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBcIjIuMS4wXCIsXG4gICAgICAgIGxhdGVzdEJsb2Nrczoge30sXG4gICAgICAgIGFzc2V0czoge30sXG4gICAgICAgIGFjY291bnRzOiB7fSxcbiAgICAgICAgaGVpZ2h0OiAxXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZXJhdGlvbnNIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICBibG9ja3NIZWlnaHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHQgPSB0aGlzLl91cGRhdGVIZWlnaHQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfZ2V0QmxvY2soaGVpZ2h0LCBtYXhCbG9jaykge1xuICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBwYXJzZUludChoZWlnaHQsIDEwKTtcbiAgICAgICAgICAgIEJsb2NrY2hhaW5BY3Rpb25zLmdldExhdGVzdChoZWlnaHQsIG1heEJsb2NrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3VwZGF0ZUhlaWdodCwge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl91cGRhdGVIZWlnaHQpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmxhdGVzdEJsb2Nrcy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SW5pdGlhbEJsb2NrcygpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmFuaW1hdGVFbnRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXhCbG9jayA9IG5leHRQcm9wcy5keW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5sYXRlc3RCbG9ja3Muc2l6ZSA+PSAyMCAmJlxuICAgICAgICAgICAgbmV4dFByb3BzLmR5bkdsb2JhbE9iamVjdC5nZXQoXCJoZWFkX2Jsb2NrX251bWJlclwiKSAhPT1cbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMubGF0ZXN0QmxvY2tzLmdldCgwKS5pZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRCbG9jayhtYXhCbG9jaywgbWF4QmxvY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2dldEluaXRpYWxCbG9ja3MoKTtcbiAgICAgICAgbGV0IG9jID0gdGhpcy5yZWZzLm9wZXJhdGlvbnM7XG4gICAgICAgIFBzLmluaXRpYWxpemUob2MpO1xuICAgICAgICBsZXQgYmxvY2tzID0gdGhpcy5yZWZzLmJsb2NrcztcbiAgICAgICAgUHMuaW5pdGlhbGl6ZShibG9ja3MpO1xuICAgICAgICB0aGlzLl91cGRhdGVIZWlnaHQoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLmxhdGVzdEJsb2NrcywgdGhpcy5wcm9wcy5sYXRlc3RCbG9ja3MpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgX2dldEluaXRpYWxCbG9ja3MoKSB7XG4gICAgICAgIGxldCBtYXhCbG9jayA9IHBhcnNlSW50KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5keW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIiksXG4gICAgICAgICAgICAxMFxuICAgICAgICApO1xuICAgICAgICBpZiAobWF4QmxvY2spIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMubGF0ZXN0QmxvY2tzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wcm9wcy5sYXRlc3RCbG9ja3Muc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYXRlc3RCbG9ja3MuZ2V0KGopLmlkID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEJsb2NrIC0gaVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRCbG9jayhtYXhCbG9jayAtIGksIG1heEJsb2NrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5yZWZzLm91dGVyV3JhcHBlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGxldCBvcGVyYXRpb25zVGV4dEhlaWdodCA9IHRoaXMucmVmcy5vcGVyYXRpb25zVGV4dC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGxldCBibG9ja3NUZXh0SGVpZ2h0ID0gdGhpcy5yZWZzLmJsb2Nrc1RleHQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uc0hlaWdodDogY29udGFpbmVySGVpZ2h0IC0gb3BlcmF0aW9uc1RleHRIZWlnaHQsXG4gICAgICAgICAgICAgICAgYmxvY2tzSGVpZ2h0OiBjb250YWluZXJIZWlnaHQgLSBibG9ja3NUZXh0SGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5wc1VwZGF0ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBzVXBkYXRlKCkge1xuICAgICAgICBsZXQgb2MgPSB0aGlzLnJlZnMub3BlcmF0aW9ucztcbiAgICAgICAgUHMudXBkYXRlKG9jKTtcbiAgICAgICAgbGV0IGJsb2NrcyA9IHRoaXMucmVmcy5ibG9ja3M7XG4gICAgICAgIFBzLnVwZGF0ZShibG9ja3MpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGxhdGVzdEJsb2NrcyxcbiAgICAgICAgICAgIGxhdGVzdFRyYW5zYWN0aW9ucyxcbiAgICAgICAgICAgIGdsb2JhbE9iamVjdCxcbiAgICAgICAgICAgIGR5bkdsb2JhbE9iamVjdCxcbiAgICAgICAgICAgIGNvcmVBc3NldFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtibG9ja3NIZWlnaHQsIG9wZXJhdGlvbnNIZWlnaHR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgZHluYW1pY09iamVjdCA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChcbiAgICAgICAgICAgIGNvcmVBc3NldC5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJsb2NrcyA9IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbnMgPSBudWxsO1xuICAgICAgICBsZXQgaGVhZEJsb2NrID0gbnVsbDtcbiAgICAgICAgbGV0IHRyeENvdW50ID0gMCxcbiAgICAgICAgICAgIGJsb2NrQ291bnQgPSBsYXRlc3RCbG9ja3Muc2l6ZSxcbiAgICAgICAgICAgIHRyeFBlclNlYyA9IDAsXG4gICAgICAgICAgICBibG9ja1RpbWVzID0gW10sXG4gICAgICAgICAgICBhdmdUaW1lID0gMDtcblxuICAgICAgICBpZiAobGF0ZXN0QmxvY2tzICYmIGxhdGVzdEJsb2Nrcy5zaXplID49IDIwKSB7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNUaW1lO1xuXG4gICAgICAgICAgICBsZXQgbGFzdEJsb2NrLCBmaXJzdEJsb2NrO1xuXG4gICAgICAgICAgICAvLyBNYXAgb3V0IHRoZSBibG9jayB0aW1lcyBmb3IgdGhlIGxhdGVzdCBibG9ja3MgYW5kIGNvdW50IHRoZSBudW1iZXIgb2YgdHJhbnNhY3Rpb25zXG4gICAgICAgICAgICBsYXRlc3RCbG9ja3NcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHVzZSBjb25zZWN1dGl2ZSBibG9ja3MgY291bnRpbmcgYmFjayBmcm9tIGhlYWQgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuaWQgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIikgLSBpbmRleFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgLSBiLmlkO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnhDb3VudCArPSBibG9jay50cmFuc2FjdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWVzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibG9jay50aW1lc3RhbXAgLSBwcmV2aW91c1RpbWUpIC8gMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0QmxvY2sgPSBibG9jay50aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEJsb2NrID0gYmxvY2sudGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzVGltZSA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3V0cHV0IGJsb2NrIHJvd3MgZm9yIHRoZSBsYXN0IDIwIGJsb2Nrc1xuICAgICAgICAgICAgYmxvY2tzID0gbGF0ZXN0QmxvY2tzXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuaWQgLSBhLmlkO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRha2UoMjApXG4gICAgICAgICAgICAgICAgLm1hcChibG9jayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtibG9jay5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9ibG9jay8ke2Jsb2NrLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3t1dGlscy5mb3JtYXRfbnVtYmVyKGJsb2NrLmlkLCAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLnRpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cInRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvV2l0bmVzc0J5SWQgd2l0bmVzcz17YmxvY2sud2l0bmVzc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jay50cmFuc2FjdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcblxuICAgICAgICAgICAgbGV0IHRyeEluZGV4ID0gMDtcblxuICAgICAgICAgICAgdHJhbnNhY3Rpb25zID0gbGF0ZXN0VHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuYmxvY2tfbnVtIC0gYS5ibG9ja19udW07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGFrZSgyMClcbiAgICAgICAgICAgICAgICAubWFwKHRyeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeC5vcGVyYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKG9wID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ4SW5kZXggPiAxNSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0cnhJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A9e29wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0cngub3BlcmF0aW9uX3Jlc3VsdHNbb3BJbmRleCsrXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrPXt0cnguYmxvY2tfbnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZlZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcExhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e1wiMS4yLjBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlUGVuZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xuXG4gICAgICAgICAgICBoZWFkQmxvY2sgPSBsYXRlc3RCbG9ja3MuZmlyc3QoKS50aW1lc3RhbXA7XG4gICAgICAgICAgICBhdmdUaW1lID0gYmxvY2tUaW1lcy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50LCBpZHgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzICsgY3VycmVudFsxXSAvIGFycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgICAgICB0cnhQZXJTZWMgPSB0cnhDb3VudCAvICgobGFzdEJsb2NrIC0gZmlyc3RCbG9jaykgLyAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj1cIm91dGVyV3JhcHBlclwiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICB7LyogRmlyc3Qgcm93IG9mIHN0YXRzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyIGdyaWQtYmxvY2sgc2hyaW5rIHNtYWxsLWhvcml6b250YWwgYmxvY2tzLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuY3VycmVudF9ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR5bkdsb2JhbE9iamVjdC5nZXQoXCJoZWFkX2Jsb2NrX251bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MubGFzdF9ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja1RpbWVBZ28gYmxvY2tUaW1lPXtoZWFkQmxvY2t9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy50cnhfcGVyX3NlY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXRpbHMuZm9ybWF0X251bWJlcih0cnhQZXJTZWMsIDIpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5hdmdfY29uZl90aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1dGlscy5mb3JtYXRfbnVtYmVyKGF2Z1RpbWUgLyAyLCAyKX1zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBTZWNvbmQgcm93IG9mIHN0YXRzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyIGdyaWQtYmxvY2sgc2hyaW5rIHNtYWxsLWhvcml6b250YWwgIGJsb2Nrcy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5hY3RpdmVfd2l0bmVzc2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInR4dGxhYmVsIHN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dsb2JhbE9iamVjdC5nZXQoXCJhY3RpdmVfd2l0bmVzc2VzXCIpLnNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0eHRsYWJlbCBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5nZXQoXCJhY3RpdmVfY29tbWl0dGVlX21lbWJlcnNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLnRyeF9wZXJfYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4Q291bnQgLyBibG9ja0NvdW50IHx8IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5yZWNlbnRseV9taXNzZWRfYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dGxhYmVsIHdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiMTAwXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bkdsb2JhbE9iamVjdC5nZXQoXCJyZWNlbnRseV9taXNzZWRfY291bnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBUaGlyZCByb3c6IGdyYXBocyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWNlbnRlciBncmlkLWJsb2NrIHNocmluayBzbWFsbC12ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbCBibG9ja3Mtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC0xMiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgY2xlYXItZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5jdXJyZW50X3N1cHBseVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pY09iamVjdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pY09iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9zdXBwbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmVBc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTEyIG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmJsb2NrX3RpbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2t0aW1lQ2hhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lcz17YmxvY2tUaW1lc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZF9ibG9ja19udW1iZXI9e2R5bkdsb2JhbE9iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRfYmxvY2tfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtMTIgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MudHJ4X3Blcl9ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uQ2hhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzPXtsYXRlc3RCbG9ja3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRfYmxvY2s9e2R5bkdsb2JhbE9iamVjdC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRfYmxvY2tfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtMTIgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuc3RlYWx0aF9zdXBwbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNPYmplY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWNPYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmZpZGVudGlhbF9zdXBwbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmVBc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBGb3VydGggcm93OiB0cmFuc2FjdGlvbnMgYW5kIGJsb2NrcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cInRyYW5zYWN0aW9uc0Jsb2NrXCIgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTEyIG1lZGl1bS02IHZlcnRpY2FsIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvdyBnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwib3BlcmF0aW9uc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5yZWNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGZpeGVkLWhlaWdodC0xcmVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnZvdGVzLmluZm9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG9wZXJhdGlvbnNIZWlnaHQgfHwgXCI0MDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwib3BlcmF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgZml4ZWQtaGVpZ2h0LTFyZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57dHJhbnNhY3Rpb25zfTwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWVkaXVtLTYgc2hvdy1mb3ItbWVkaXVtIHZlcnRpY2FsIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMCwgcGFkZGluZ0xlZnQ6IDV9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3cgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cImJsb2Nrc1RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MucmVjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IGJsb2Nrc0hlaWdodCB8fCBcIjQzOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJibG9ja3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGZpeGVkLWhlaWdodC0xcmVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLndpdG5lc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5jb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0Ym9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJuZXdyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9ja3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5CbG9ja3MgPSBCaW5kVG9DaGFpblN0YXRlKEJsb2Nrcywge3Nob3dfbG9hZGVyOiB0cnVlfSk7XG5CbG9ja3MgPSBBc3NldFdyYXBwZXIoQmxvY2tzLCB7XG4gICAgcHJvcE5hbWVzOiBbXCJjb3JlQXNzZXRcIl0sXG4gICAgd2l0aER5bmFtaWM6IHRydWVcbn0pO1xuZXhwb3J0IGRlZmF1bHQgQmxvY2tzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQmxvY2tjaGFpblN0b3JlIGZyb20gXCJzdG9yZXMvQmxvY2tjaGFpblN0b3JlXCI7XHJcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcclxuaW1wb3J0IEJsb2NrcyBmcm9tIFwiLi9CbG9ja3NcIjtcclxuXHJcbmNsYXNzIEJsb2Nrc0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgc3RvcmVzPXtbQmxvY2tjaGFpblN0b3JlXX1cclxuICAgICAgICAgICAgICAgIGluamVjdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdGVzdEJsb2NrczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblN0b3JlLmdldFN0YXRlKCkubGF0ZXN0QmxvY2tzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXN0VHJhbnNhY3Rpb25zOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU3RvcmUuZ2V0U3RhdGUoKS5sYXRlc3RUcmFuc2FjdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJsb2NrcyAvPlxyXG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja3NDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0SGlnaGNoYXJ0IGZyb20gXCJyZWFjdC1oaWdoY2hhcnRzXCI7XHJcbmltcG9ydCB7dGFrZVJpZ2h0fSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuXHJcbmNsYXNzIEJsb2NrdGltZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgICBpZiAobmV4dFByb3BzLmJsb2NrVGltZXMubGVuZ3RoIDwgMTkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5ibG9ja1RpbWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjaGFydCA9IHRoaXMucmVmcy5jaGFydCA/IHRoaXMucmVmcy5jaGFydC5jaGFydCA6IG51bGw7XHJcbiAgICAgICAgaWYgKGNoYXJ0KSB7XHJcbiAgICAgICAgICAgIGxldCB7YmxvY2tUaW1lcywgY29sb3JzfSA9IHRoaXMuX2dldERhdGEobmV4dFByb3BzKTtcclxuICAgICAgICAgICAgbGV0IHNlcmllcyA9IGNoYXJ0LnNlcmllc1swXTtcclxuICAgICAgICAgICAgbGV0IGZpbmFsVmFsdWUgPSBzZXJpZXMueERhdGFbc2VyaWVzLnhEYXRhLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlcmllcy54RGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYXJ0LCBcInNlcmllczpcIiwgc2VyaWVzLmRhdGEsIFwiZmluYWxWYWx1ZTpcIiwgZmluYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBibG9ja1RpbWVzLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludFswXSA+IGZpbmFsVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzLmFkZFBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy54RGF0YS5sZW5ndGggPj0gMzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFydC5vcHRpb25zLnBsb3RPcHRpb25zLmNvbHVtbi5jb2xvcnMgPSBjb2xvcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnQucmVkcmF3KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5ibG9ja1RpbWVzW25leHRQcm9wcy5ibG9ja1RpbWVzLmxlbmd0aCAtIDFdWzBdICE9PVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5ibG9ja1RpbWVzW3RoaXMucHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggLSAxXVswXSB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggIT09IHRoaXMucHJvcHMuYmxvY2tUaW1lcy5sZW5ndGhcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXREYXRhKCkge1xyXG4gICAgICAgIGxldCB7YmxvY2tUaW1lcywgaGVhZF9ibG9ja30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBibG9ja1RpbWVzLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFbMF0gPj0gaGVhZF9ibG9jayAtIDMwO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYmxvY2tUaW1lcyAmJiBibG9ja1RpbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBibG9ja1RpbWVzID0gdGFrZVJpZ2h0KGJsb2NrVGltZXMsIDMwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb2xvcnMgPSBibG9ja1RpbWVzLm1hcChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeVsxXSA8PSA1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjNTBEMkMyXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnlbMV0gPD0gMTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiNBMEQzRThcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeVsxXSA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI0ZDQUI1M1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI2RlYjg2OVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJsb2NrVGltZXMsXHJcbiAgICAgICAgICAgIGNvbG9yc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7YmxvY2tUaW1lcywgY29sb3JzfSA9IHRoaXMuX2dldERhdGEodGhpcy5wcm9wcyk7XHJcblxyXG4gICAgICAgIGxldCB0b29sdGlwTGFiZWwgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleHBsb3Jlci5ibG9ja3MuYmxvY2tfdGltZVwiKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDAsIDAsIDApXCIsXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nOiBbMCwgMCwgNSwgMF0sXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVkaXRzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhbmdlU2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5hdmlnYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzaGFyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9vbHRpcExhYmVsICsgXCI6IFwiICsgdGhpcy55ICsgXCJzXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQmxvY2sgdGltZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGJsb2NrVGltZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzUwRDJDMlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHhBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5QXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmlkTGluZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlSW5kaWNhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5Qb2ludExlbmd0aDogMyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckJ5UG9pbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBibG9ja1RpbWVzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgPFJlYWN0SGlnaGNoYXJ0IHJlZj1cImNoYXJ0XCIgY29uZmlnPXtjb25maWd9IC8+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrdGltZUNoYXJ0O1xyXG4iLCJpbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9TZWFyY2hJbnB1dFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5cclxuY2xhc3MgQ29tbWl0dGVlTWVtYmVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGNvbW1pdHRlZV9tZW1iZXJzOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0c0xpc3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2NvbW1pdHRlZV9tZW1iZXJzLCBtZW1iZXJzTGlzdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGxldCByYW5rcyA9IHt9O1xyXG5cclxuICAgICAgICBjb21taXR0ZWVfbWVtYmVyc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbWJlcnNMaXN0LmluZGV4T2YoYS5nZXQoXCJpZFwiKSkgIT09IC0xO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoYywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua3NbYy5nZXQoXCJpZFwiKV0gPSBpbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY29tbWl0dGVlX21lbWJlcnMubGVuZ3RoID4gMCAmJiBjb21taXR0ZWVfbWVtYmVyc1sxXSkge1xyXG4gICAgICAgICAgICBkYXRhU291cmNlID0gY29tbWl0dGVlX21lbWJlcnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXQoXCJjb21taXR0ZWVfbWVtYmVyX2FjY291bnRcIilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudF9kYXRhID0gQ2hhaW5TdG9yZS5nZXRDb21taXR0ZWVNZW1iZXJCeUlkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmdldChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50X2RhdGEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJuYW1lXCIpLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXIgfHwgXCJcIikgIT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAubWFwKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwiY29tbWl0dGVlX21lbWJlcl9hY2NvdW50XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfZGF0YSA9IENoYWluU3RvcmUuZ2V0Q29tbWl0dGVlTWVtYmVyQnlJZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogYS5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuazogcmFua3NbYS5nZXQoXCJpZFwiKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFjY291bnQuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm90ZXM6IGFjY291bnRfZGF0YS5nZXQoXCJ0b3RhbF92b3Rlc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1dGlscy5zYW5pdGl6ZShhY2NvdW50X2RhdGEuZ2V0KFwidXJsXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicmFua1wiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnJhbmsgPiBiLnJhbmsgPyAxIDogYS5yYW5rIDwgYi5yYW5rID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTkFNRVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5uYW1lID4gYi5uYW1lID8gMSA6IGEubmFtZSA8IGIubmFtZSA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcInZvdGVzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJWT1RFU1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInZvdGVzXCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnZvdGVzID4gYi52b3RlcyA/IDEgOiBhLnZvdGVzIDwgYi52b3RlcyA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV0VCUEFHRVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInVybFwiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkNvbW1pdHRlZU1lbWJlckxpc3QgPSBCaW5kVG9DaGFpblN0YXRlKENvbW1pdHRlZU1lbWJlckxpc3QsIHtcclxuICAgIHNob3dfbG9hZGVyOiB0cnVlXHJcbn0pO1xyXG5cclxuY2xhc3MgQ29tbWl0dGVlTWVtYmVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmlsdGVyQ29tbWl0dGVlTWVtYmVyOiBwcm9wcy5maWx0ZXJDb21taXR0ZWVNZW1iZXIgfHwgXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuZ2xvYmFsT2JqZWN0LCB0aGlzLnByb3BzLmdsb2JhbE9iamVjdCkgfHxcclxuICAgICAgICAgICAgbmV4dFN0YXRlLmZpbHRlckNvbW1pdHRlZU1lbWJlciAhPT1cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlsdGVyQ29tbWl0dGVlTWVtYmVyIHx8XHJcbiAgICAgICAgICAgIG5leHRTdGF0ZS5jYXJkVmlldyAhPT0gdGhpcy5zdGF0ZS5jYXJkVmlld1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uRmlsdGVyKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJDb21taXR0ZWVNZW1iZXI6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCl9KTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcclxuICAgICAgICAgICAgZmlsdGVyQ29tbWl0dGVlTWVtYmVyOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7Z2xvYmFsT2JqZWN0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgZ2xvYmFsT2JqZWN0ID0gZ2xvYmFsT2JqZWN0LnRvSlMoKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZUNvbW1pdHRlZU1lbWJlcnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVycykge1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDb21taXR0ZWVNZW1iZXJzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1trZXldXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci53aXRuZXNzZXMuZmlsdGVyX2J5X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyQ29tbWl0dGVlTWVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkZpbHRlci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1pdHRlZU1lbWJlckxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9e3RoaXMuc3RhdGUuZmlsdGVyQ29tbWl0dGVlTWVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdHRlZV9tZW1iZXJzPXtJbW11dGFibGUuTGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyc0xpc3Q9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5Db21taXR0ZWVNZW1iZXJzID0gQmluZFRvQ2hhaW5TdGF0ZShDb21taXR0ZWVNZW1iZXJzKTtcclxuXHJcbmNsYXNzIENvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8Q29tbWl0dGVlTWVtYmVycyB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXIgPSBjb25uZWN0KFxyXG4gICAgQ29tbWl0dGVlTWVtYmVyc1N0b3JlV3JhcHBlcixcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZFZpZXc6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZFZpZXdDb21taXR0ZWVcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGZpbHRlckNvbW1pdHRlZU1lbWJlcjogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJDb21taXR0ZWVNZW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXaXRuZXNzZXMgZnJvbSBcIi4vV2l0bmVzc2VzXCI7XG5pbXBvcnQgQ29tbWl0dGVlTWVtYmVycyBmcm9tIFwiLi9Db21taXR0ZWVNZW1iZXJzXCI7XG5pbXBvcnQgRmVlc0NvbnRhaW5lciBmcm9tIFwiLi4vQmxvY2tjaGFpbi9GZWVzQ29udGFpbmVyXCI7XG5pbXBvcnQgQmxvY2tzQ29udGFpbmVyIGZyb20gXCIuL0Jsb2Nrc0NvbnRhaW5lclwiO1xuaW1wb3J0IEFzc2V0c0NvbnRhaW5lciBmcm9tIFwiLi9Bc3NldHNDb250YWluZXJcIjtcbmltcG9ydCBBY2NvdW50c0NvbnRhaW5lciBmcm9tIFwiLi9BY2NvdW50c0NvbnRhaW5lclwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IE1hcmtldHNDb250YWluZXIgZnJvbSBcIi4uL0V4Y2hhbmdlL01hcmtldHNDb250YWluZXJcIjtcbmltcG9ydCB7VGFic30gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jbGFzcyBFeHBsb3JlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0YWJzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJsb2Nrc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9ibG9ja3NcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBcImV4cGxvcmVyLmJsb2Nrcy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBCbG9ja3NDb250YWluZXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhc3NldHNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvYXNzZXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5hc3NldHMudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogQXNzZXRzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYWNjb3VudHNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvYWNjb3VudHNcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBcImV4cGxvcmVyLmFjY291bnRzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEFjY291bnRzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwid2l0bmVzc2VzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL3dpdG5lc3Nlc1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwiZXhwbG9yZXIud2l0bmVzc2VzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFdpdG5lc3Nlc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNvbW1pdHRlZV9tZW1iZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2NvbW1pdHRlZS1tZW1iZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5jb21taXR0ZWVfbWVtYmVycy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBDb21taXR0ZWVNZW1iZXJzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWFya2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9tYXJrZXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJtYXJrZXRzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IE1hcmtldHNDb250YWluZXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmZWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2ZlZXNcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBcImZlZXMudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogRmVlc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlID0gdmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2godmFsdWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17dGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZX1cbiAgICAgICAgICAgICAgICBhbmltYXRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcInRhYmxlXCIsIGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhYnMubWFwKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFRhYkNvbnRlbnQgPSB0YWIuY29udGVudDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFiLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiPXtjb3VudGVycGFydC50cmFuc2xhdGUodGFiLnRyYW5zbGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RIaWdoY2hhcnQgZnJvbSBcInJlYWN0LWhpZ2hjaGFydHNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5cclxuY2xhc3MgVHJhbnNhY3Rpb25DaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5ibG9ja3Muc2l6ZSA8IDIwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoYXJ0ID0gdGhpcy5yZWZzLnRyeF9jaGFydCA/IHRoaXMucmVmcy50cnhfY2hhcnQuY2hhcnQgOiBudWxsO1xyXG4gICAgICAgIGlmIChjaGFydCAmJiBuZXh0UHJvcHMuYmxvY2tzICE9PSB0aGlzLnByb3BzLmJsb2Nrcykge1xyXG4gICAgICAgICAgICBsZXQge3RyeERhdGEsIGNvbG9yc30gPSB0aGlzLl9nZXREYXRhKG5leHRQcm9wcyk7XHJcbiAgICAgICAgICAgIGxldCBzZXJpZXMgPSBjaGFydC5zZXJpZXNbMF07XHJcbiAgICAgICAgICAgIGxldCBmaW5hbFZhbHVlID0gc2VyaWVzLnhEYXRhW3Nlcmllcy54RGF0YS5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnQ6XCIsIGNoYXJ0LCBcInNlcmllczpcIiwgc2VyaWVzLmRhdGEsIFwiZmluYWxWYWx1ZTpcIiwgZmluYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChzZXJpZXMueERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0cnhEYXRhLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludFswXSA+IGZpbmFsVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzLmFkZFBvaW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy54RGF0YS5sZW5ndGggPj0gMzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFydC5vcHRpb25zLnBsb3RPcHRpb25zLmNvbHVtbi5jb2xvcnMgPSBjb2xvcnM7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnQucmVkcmF3KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbmV4dFByb3BzLmJsb2NrcyAhPT0gdGhpcy5wcm9wcy5ibG9ja3MgfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmhlYWRfYmxvY2sgIT09IHRoaXMucHJvcHMuaGVhZF9ibG9ja1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldERhdGEocHJvcHMpIHtcclxuICAgICAgICBsZXQge2Jsb2NrcywgaGVhZF9ibG9ja30gPSBwcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHRyeERhdGEgPSBbXTtcclxuICAgICAgICBsZXQgbWF4ID0gMDtcclxuICAgICAgICB0cnhEYXRhID0gYmxvY2tzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA+PSBoZWFkX2Jsb2NrIC0gMzA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCAtIGIuaWQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50YWtlTGFzdCgzMClcclxuICAgICAgICAgICAgLm1hcChibG9jayA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXggPSBNYXRoLm1heChibG9jay50cmFuc2FjdGlvbnMubGVuZ3RoLCBtYXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtibG9jay5pZCwgYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aF07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgIGxldCBjb2xvcnMgPSB0cnhEYXRhLm1hcChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW50cnk6XCIsIGVudHJ5KTtcclxuICAgICAgICAgICAgaWYgKGVudHJ5WzFdIDw9IDUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiM1MEQyQzJcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeVsxXSA8PSAxMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI0EwRDNFOFwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5WzFdIDw9IDIwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjRkNBQjUzXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjZGViODY5XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29sb3JzLFxyXG4gICAgICAgICAgICB0cnhEYXRhLFxyXG4gICAgICAgICAgICBtYXhcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3RyeERhdGEsIGNvbG9ycywgbWF4fSA9IHRoaXMuX2dldERhdGEodGhpcy5wcm9wcyk7XHJcblxyXG4gICAgICAgIGxldCB0b29sdGlwTGFiZWwgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgIFwiZXhwbG9yZXIuYmxvY2tzLnRyYW5zYWN0aW9uc1wiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDAsIDAsIDApXCIsXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nOiBbMCwgMCwgNSwgMF0sXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVkaXRzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhbmdlU2VsZWN0b3I6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5hdmlnYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzaGFyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9vbHRpcExhYmVsICsgXCI6IFwiICsgdGhpcy55O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRyYW5zYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRyeERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzUwRDJDMlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHhBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5QXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiBNYXRoLm1heCgxLjUsIG1heCArIDAuNSksXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyaWRMaW5lV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJpY2VJbmRpY2F0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pblBvaW50TGVuZ3RoOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yQnlQb2ludDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IGNvbG9ycyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRyeERhdGEubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICA8UmVhY3RIaWdoY2hhcnQgcmVmPVwidHJ4X2NoYXJ0XCIgY29uZmlnPXtjb25maWd9IC8+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uQ2hhcnQ7XHJcbiIsImltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSBcIi4uL1V0aWxpdHkvVGltZUFnb1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtUYWJsZSwgSWNvbiwgSW5wdXQsIFBvcG92ZXJ9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9TZWFyY2hJbnB1dFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcblxucmVxdWlyZShcIi4vd2l0bmVzc2VzLnNjc3NcIik7XG5cbmNsYXNzIFdpdG5lc3NSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHdpdG5lc3M6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgX29uUm93Q2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYWNjb3VudC8ke3RoaXMucHJvcHMud2l0bmVzcy5nZXQoXCJuYW1lXCIpfWApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vICAgICBDaGFpblN0b3JlLnVuU3ViRnJvbShcIndpdG5lc3Nlc1wiLCBDaGFpblN0b3JlLmdldFdpdG5lc3NCeUlkKCB0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwiaWRcIikgKS5nZXQoXCJpZFwiKSk7XG4gICAgLy8gfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3dpdG5lc3MsIGlzQ3VycmVudCwgcmFua30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgd2l0bmVzc19kYXRhID0gQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZChcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2l0bmVzcy5nZXQoXCJpZFwiKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIXdpdG5lc3NfZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCB0b3RhbF92b3RlcyA9IHdpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF92b3Rlc1wiKTtcblxuICAgICAgICBsZXQgd2l0bmVzc19hc2xvdCA9IHdpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2FzbG90XCIpO1xuICAgICAgICBsZXQgY29sb3IgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubW9zdF9yZWNlbnQgLSB3aXRuZXNzX2FzbG90ID4gMTAwKSB7XG4gICAgICAgICAgICBjb2xvciA9IHtib3JkZXJMZWZ0OiBcIjFweCBzb2xpZCAjRkNBQjUzXCJ9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sb3IgPSB7Ym9yZGVyTGVmdDogXCIxcHggc29saWQgIzUwRDJDMlwifTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdF9hc2xvdF90aW1lID0gbmV3IERhdGUoXG4gICAgICAgICAgICBEYXRlLm5vdygpIC1cbiAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5tb3N0X3JlY2VudCAtIHdpdG5lc3NfYXNsb3QpICpcbiAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRPYmplY3QoXCIyLjAuMFwiKS5nZXRJbihbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtZXRlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmxvY2tfaW50ZXJ2YWxcIlxuICAgICAgICAgICAgICAgICAgICBdKSAqXG4gICAgICAgICAgICAgICAgICAgIDEwMDBcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY3VycmVudENsYXNzID0gaXNDdXJyZW50ID8gXCJhY3RpdmUtd2l0bmVzc1wiIDogXCJcIjtcblxuICAgICAgICBsZXQgbWlzc2VkID0gd2l0bmVzc19kYXRhLmdldChcInRvdGFsX21pc3NlZFwiKTtcbiAgICAgICAgbGV0IG1pc3NlZENsYXNzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgIFwidHh0bGFiZWxcIixcbiAgICAgICAgICAgIHtzdWNjZXNzOiBtaXNzZWQgPD0gNTAwfSxcbiAgICAgICAgICAgIHtpbmZvOiBtaXNzZWQgPiA1MDAgJiYgbWlzc2VkIDw9IDEyNTB9LFxuICAgICAgICAgICAge3dhcm5pbmc6IG1pc3NlZCA+IDEyNTAgJiYgbWlzc2VkIDw9IDIwMDB9LFxuICAgICAgICAgICAge2Vycm9yOiBtaXNzZWQgPj0gMjAwfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtjdXJyZW50Q2xhc3N9IG9uQ2xpY2s9e3RoaXMuX29uUm93Q2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPHRkPntyYW5rfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtjb2xvcn0+e3dpdG5lc3MuZ2V0KFwibmFtZVwiKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRpbWVBZ28gdGltZT17bmV3IERhdGUobGFzdF9hc2xvdF90aW1lKX0gLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57d2l0bmVzc19kYXRhLmdldChcImxhc3RfY29uZmlybWVkX2Jsb2NrX251bVwiKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e21pc3NlZENsYXNzfT57bWlzc2VkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17d2l0bmVzc19kYXRhLmdldChcInRvdGFsX3ZvdGVzXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXs1fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cbldpdG5lc3NSb3cgPSBCaW5kVG9DaGFpblN0YXRlKFdpdG5lc3NSb3cpO1xuV2l0bmVzc1JvdyA9IHdpdGhSb3V0ZXIoV2l0bmVzc1Jvdyk7XG5cbmNsYXNzIFdpdG5lc3NMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB3aXRuZXNzZXM6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc29ydEJ5OiBcInJhbmtcIixcbiAgICAgICAgICAgIGludmVyc2VTb3J0OiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVCbG9ja0lkQ2xpY2sgPSB0aGlzLmhhbmRsZUJsb2NrSWRDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9zZXRTb3J0KGZpZWxkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc29ydEJ5OiBmaWVsZCxcbiAgICAgICAgICAgIGludmVyc2VTb3J0OlxuICAgICAgICAgICAgICAgIGZpZWxkID09PSB0aGlzLnN0YXRlLnNvcnRCeVxuICAgICAgICAgICAgICAgICAgICA/ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5pbnZlcnNlU29ydFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVCbG9ja0lkQ2xpY2soYmxvY2tJZCkge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9ibG9jay8ke2Jsb2NrSWR9YCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3dpdG5lc3NlcywgY3VycmVudCwgY2FyZFZpZXcsIHdpdG5lc3NMaXN0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7c29ydEJ5LCBpbnZlcnNlU29ydH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgbW9zdF9yZWNlbnRfYXNsb3QgPSAwO1xuICAgICAgICBsZXQgcmFua3MgPSB7fTtcblxuICAgICAgICB3aXRuZXNzZXNcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpdG5lc3NMaXN0LmluZGV4T2YoYS5nZXQoXCJpZFwiKSkgIT09IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEgJiYgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYi5nZXQoXCJ0b3RhbF92b3Rlc1wiKSwgMTApIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGEuZ2V0KFwidG90YWxfdm90ZXNcIiksIDEwKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZm9yRWFjaCgodywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IHcuZ2V0KFwibGFzdF9hc2xvdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vc3RfcmVjZW50X2FzbG90IDwgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9zdF9yZWNlbnRfYXNsb3QgPSBzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmFua3Nbdy5nZXQoXCJpZFwiKV0gPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBbXTtcbiAgICAgICAgaWYgKHdpdG5lc3Nlcy5sZW5ndGggPiAwICYmIHdpdG5lc3Nlc1sxXSkge1xuICAgICAgICAgICAgZGF0YVNvdXJjZSA9IHdpdG5lc3Nlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aXRuZXNzID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcIndpdG5lc3NfYWNjb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXdpdG5lc3MpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0bmVzc19kYXRhID0gQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3MuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3aXRuZXNzX2RhdGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHdpdG5lc3MuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYW1lKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXIpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpdG5lc3MgPSBDaGFpblN0b3JlLmdldE9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwid2l0bmVzc19hY2NvdW50XCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2l0bmVzc19kYXRhID0gQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3MuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0bmVzc19hc2xvdCA9IHdpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2FzbG90XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0X2FzbG90X3RpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGUubm93KCkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmN1cnJlbnRfYXNsb3QgLSB3aXRuZXNzX2FzbG90KSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4wLjBcIikuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJsb2NrX2ludGVydmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB3aXRuZXNzLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5rOiByYW5rc1thLmdldChcImlkXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHdpdG5lc3MuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25pbmdfa2V5OiB3aXRuZXNzX2RhdGEuZ2V0KFwic2lnbmluZ19rZXlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHV0aWxzLnNhbml0aXplKHdpdG5lc3NfZGF0YS5nZXQoXCJ1cmxcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdENvbmZpcm1lZEJsb2NrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHdpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2NvbmZpcm1lZF9ibG9ja19udW1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBsYXN0X2FzbG90X3RpbWUuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tzTWlzc2VkOiB3aXRuZXNzX2RhdGEuZ2V0KFwidG90YWxfbWlzc2VkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdm90ZXM6IHdpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF92b3Rlc1wiKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsVmFsaWQgPSBpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gLyhodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdyopPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlIVxcLVxcL10pKT8vO1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoaXRlbSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXJsUmVuZGVyID0gaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XCJob3ZlclwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImxpbmtcIiAvPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qga2V5UmVuZGVyID0gaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIGNvbnRlbnQ9ezxzcGFuPntpdGVtfTwvc3Bhbj59IHRyaWdnZXI9e1wiaG92ZXJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJrZXlcIiAvPlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiI1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIiNcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicmFua1wiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucmFuayA+IGIucmFuayA/IDEgOiBhLnJhbmsgPCBiLnJhbmsgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5BTUVcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IDEgOiBhLm5hbWUgPCBiLm5hbWUgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwidXJsXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVVJMXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInVybFwiLFxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhpdGVtICYmIHVybFZhbGlkKGl0ZW0pICYmIHVybFJlbmRlcihpdGVtKSkgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibGFzdENvbmZpcm1lZEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTEFTVCBDT05GSVJNRUQgQkxPQ0tcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibGFzdENvbmZpcm1lZEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWluV2lkdGg6IFwiMTAwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCbG9ja0lkQ2xpY2soaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3tOdW1iZXIoaXRlbS5pZCkudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGltZUFnbyB0aW1lPXtuZXcgRGF0ZShpdGVtLnRpbWVzdGFtcCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubGFzdENvbmZpcm1lZEJsb2NrLnRpbWVzdGFtcCA+XG4gICAgICAgICAgICAgICAgICAgICAgICBiLmxhc3RDb25maXJtZWRCbG9jay50aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5sYXN0Q29uZmlybWVkQmxvY2sudGltZXN0YW1wIDxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYi5sYXN0Q29uZmlybWVkQmxvY2sudGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJibG9ja3NNaXNzZWRcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJCTE9DS1MgTUlTU0VEXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImJsb2Nrc01pc3NlZFwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2Nrc01pc3NlZENsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR4dGxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VjY2VzczogaXRlbSA8PSA1MDB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2luZm86IGl0ZW0gPiA1MDAgJiYgaXRlbSA8PSAxMjUwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3YXJuaW5nOiBpdGVtID4gMTI1MCAmJiBpdGVtIDw9IDIwMDB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yOiBpdGVtID49IDIwMH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YmxvY2tzTWlzc2VkQ2xhc3NOYW1lfT57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmJsb2Nrc01pc3NlZCA+IGIuYmxvY2tzTWlzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5ibG9ja3NNaXNzZWQgPCBiLmJsb2Nrc01pc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInZvdGVzXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVk9URVNcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidm90ZXNcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudm90ZXMgPiBiLnZvdGVzID8gMSA6IGEudm90ZXMgPCBiLnZvdGVzID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImtleVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIktFWVwiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJzaWduaW5nX2tleVwiLFxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHdpZHRoOiBcIjEwMCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2tleVJlbmRlcihpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGdldFJvd0NsYXNzTmFtZSA9IHJlY29yZCA9PiB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLmlkID09PSBjdXJyZW50KSByZXR1cm4gXCJhY3RpdmUtd2l0bmVzc1wiO1xuXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgcm93Q2xhc3NOYW1lPXtnZXRSb3dDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5XaXRuZXNzTGlzdCA9IEJpbmRUb0NoYWluU3RhdGUoV2l0bmVzc0xpc3QsIHtcbiAgICBzaG93X2xvYWRlcjogdHJ1ZVxufSk7XG5XaXRuZXNzTGlzdCA9IHdpdGhSb3V0ZXIoV2l0bmVzc0xpc3QpO1xuXG5jbGFzcyBXaXRuZXNzZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IFwiMi4wLjBcIixcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBcIjIuMS4wXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXJXaXRuZXNzOiBwcm9wcy5maWx0ZXJXaXRuZXNzIHx8IFwiXCIsXG4gICAgICAgICAgICBjYXJkVmlldzogcHJvcHMuY2FyZFZpZXdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfb25GaWx0ZXIoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJXaXRuZXNzOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGZpbHRlcldpdG5lc3M6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZVZpZXcoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBjYXJkVmlldzogIXRoaXMuc3RhdGUuY2FyZFZpZXdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjYXJkVmlldzogIXRoaXMuc3RhdGUuY2FyZFZpZXdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2R5bkdsb2JhbE9iamVjdCwgZ2xvYmFsT2JqZWN0fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGR5bkdsb2JhbE9iamVjdCA9IGR5bkdsb2JhbE9iamVjdC50b0pTKCk7XG4gICAgICAgIGdsb2JhbE9iamVjdCA9IGdsb2JhbE9iamVjdC50b0pTKCk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnQgPSBDaGFpblN0b3JlLmdldE9iamVjdChkeW5HbG9iYWxPYmplY3QuY3VycmVudF93aXRuZXNzKSxcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50ID0gbnVsbDtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXG4gICAgICAgICAgICAgICAgY3VycmVudC5nZXQoXCJ3aXRuZXNzX2FjY291bnRcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsb3JlLXdpdG5lc3MtLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLmN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYWN0aXZlX3dpdG5lc3Nlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5wYXJ0aWNpcGF0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLnBheVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5idWRnZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci53aXRuZXNzZXMubmV4dF92b3RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50QWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY3VycmVudEFjY291bnQuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuYWN0aXZlX3dpdG5lc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5HbG9iYWxPYmplY3QucGFydGljaXBhdGlvbn0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5wYXJhbWV0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2l0bmVzc19wYXlfcGVyX2Jsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0LndpdG5lc3NfYnVkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVBZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QubmV4dF9tYWludGVuYW5jZV90aW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci53aXRuZXNzZXMuZmlsdGVyX2J5X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJXaXRuZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXIuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaXRuZXNzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2FzbG90PXtkeW5HbG9iYWxPYmplY3QuY3VycmVudF9hc2xvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudCA/IGN1cnJlbnQuZ2V0KFwiaWRcIikgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRuZXNzZXM9e0ltbXV0YWJsZS5MaXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV93aXRuZXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0bmVzc0xpc3Q9e2dsb2JhbE9iamVjdC5hY3RpdmVfd2l0bmVzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9e3RoaXMuc3RhdGUuZmlsdGVyV2l0bmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFZpZXc9e3RoaXMuc3RhdGUuY2FyZFZpZXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbldpdG5lc3NlcyA9IEJpbmRUb0NoYWluU3RhdGUoV2l0bmVzc2VzKTtcblxuY2xhc3MgV2l0bmVzc1N0b3JlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFdpdG5lc3NlcyB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5XaXRuZXNzU3RvcmVXcmFwcGVyID0gY29ubmVjdChXaXRuZXNzU3RvcmVXcmFwcGVyLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcmRWaWV3OiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcImNhcmRWaWV3XCIpLFxuICAgICAgICAgICAgZmlsdGVyV2l0bmVzczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgXCJmaWx0ZXJXaXRuZXNzXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgV2l0bmVzc1N0b3JlV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4vQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBNYXJrZXRTdGF0c0NoZWNrIGZyb20gXCIuL01hcmtldFN0YXRzQ2hlY2tcIjtcbmltcG9ydCBNYXJrZXRVdGlscyBmcm9tIFwiY29tbW9uL21hcmtldF91dGlsc1wiO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuXG5jb25zdCBnZXRFcXVpdmFsZW50VmFsdWUgPSBmdW5jdGlvbihcbiAgICBhbW91bnQsXG4gICAgdG9Bc3NldCxcbiAgICBmcm9tQXNzZXQsXG4gICAgZnVsbFByZWNpc2lvbiA9IG51bGwsXG4gICAgY29yZUFzc2V0ID0gbnVsbCxcbiAgICBhbGxNYXJrZXRTdGF0cyA9IG51bGxcbikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBNYXJrZXRVdGlscy5jb252ZXJ0VmFsdWUoXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICB0b0Fzc2V0LFxuICAgICAgICAgICAgZnJvbUFzc2V0LFxuICAgICAgICAgICAgYWxsTWFya2V0U3RhdHNcbiAgICAgICAgICAgICAgICA/IGFsbE1hcmtldFN0YXRzXG4gICAgICAgICAgICAgICAgOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIGNvcmVBc3NldCA/IGNvcmVBc3NldCA6IENoYWluU3RvcmUuZ2V0QXNzZXQoXCIxLjMuMFwiKSxcbiAgICAgICAgICAgIGZ1bGxQcmVjaXNpb24gPyBmdWxsUHJlY2lzaW9uIDogdHJ1ZVxuICAgICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogIEdpdmVuIGFuIGFzc2V0IGFtb3VudCwgZGlzcGxheXMgdGhlIGVxdWl2YWxlbnQgdmFsdWUgaW4gYmFzZUFzc2V0IGlmIHBvc3NpYmxlXG4gKlxuICogIEV4cGVjdHMgdGhyZWUgcHJvcGVydGllc1xuICogIC0ndG9Bc3NldCcgd2hpY2ggc2hvdWxkIGJlIGEgYXNzZXQgaWRcbiAqICAtJ2Zyb21Bc3NldCcgd2hpY2ggaXMgdGhlIGFzc2V0IGlkIG9mIHRoZSBvcmlnaW5hbCBhc3NldCBhbW91bnRcbiAqICAtJ2Ftb3VudCcgd2hpY2ggaXMgdGhlIGFtb3VudCB0byBjb252ZXJ0XG4gKiAgLSdmdWxsUHJlY2lzaW9uJyBib29sZWFuIHRvIHRlbGwgaWYgdGhlIGFtb3VudCB1c2VzIHRoZSBmdWxsIHByZWNpc2lvbiBvZiB0aGUgYXNzZXRcbiAqL1xuY2xhc3MgVmFsdWVDb21wb25lbnQgZXh0ZW5kcyBNYXJrZXRTdGF0c0NoZWNrIHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBmdWxsUHJlY2lzaW9uOiB0cnVlLFxuICAgICAgICBub0RlY2ltYWxzOiBmYWxzZSxcbiAgICAgICAgZnVsbERlY2ltYWxzOiBmYWxzZSxcbiAgICAgICAgaGlkZV9hc3NldDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgc3VwZXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5wLnB1bHNhdGUsIHRoaXMucHJvcHMucHVsc2F0ZSkgfHxcbiAgICAgICAgICAgIG5wLnRvQXNzZXQgIT09IHRoaXMucHJvcHMudG9Bc3NldCB8fFxuICAgICAgICAgICAgbnAuZnJvbUFzc2V0ICE9PSB0aGlzLnByb3BzLmZyb21Bc3NldCB8fFxuICAgICAgICAgICAgbnAuYW1vdW50ICE9PSB0aGlzLnByb3BzLmFtb3VudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIHRvQXNzZXQsXG4gICAgICAgICAgICBmcm9tQXNzZXQsXG4gICAgICAgICAgICBmdWxsUHJlY2lzaW9uLFxuICAgICAgICAgICAgY29yZUFzc2V0LFxuICAgICAgICAgICAgLi4ub3RoZXJzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB0b0lEID0gdG9Bc3NldC5nZXQoXCJpZFwiKTtcbiAgICAgICAgbGV0IHRvU3ltYm9sID0gdG9Bc3NldC5nZXQoXCJzeW1ib2xcIik7XG5cbiAgICAgICAgbGV0IGVxVmFsdWUgPSBnZXRFcXVpdmFsZW50VmFsdWUoXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICB0b0Fzc2V0LFxuICAgICAgICAgICAgZnJvbUFzc2V0LFxuICAgICAgICAgICAgZnVsbFByZWNpc2lvbixcbiAgICAgICAgICAgIGNvcmVBc3NldFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghZXFWYWx1ZSAmJiBlcVZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLm5vX3ByaWNlXCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9vbHRpcCBpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIwLjlyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQubm9fcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgIG5vUHJlZml4XG4gICAgICAgICAgICAgICAgYW1vdW50PXtlcVZhbHVlfVxuICAgICAgICAgICAgICAgIGFzc2V0PXt0b0lEfVxuICAgICAgICAgICAgICAgIGRlY2ltYWxPZmZzZXQ9e1xuICAgICAgICAgICAgICAgICAgICB0b1N5bWJvbC5pbmRleE9mKFwiQlRDXCIpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyA0XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuZnVsbERlY2ltYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLm5vRGVjaW1hbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0b0Fzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRvQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpIC0gMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5WYWx1ZUNvbXBvbmVudCA9IEFzc2V0V3JhcHBlcihWYWx1ZUNvbXBvbmVudCwge1xuICAgIHByb3BOYW1lczogW1widG9Bc3NldFwiLCBcImZyb21Bc3NldFwiLCBcImNvcmVBc3NldFwiXSxcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdG9Bc3NldDogXCIxLjMuMFwiLFxuICAgICAgICBjb3JlQXNzZXQ6IFwiMS4zLjBcIlxuICAgIH1cbn0pO1xuXG5jbGFzcyBFcXVpdmFsZW50VmFsdWVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtyZWZDYWxsYmFjaywgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIDxWYWx1ZUNvbXBvbmVudCB7Li4ub3RoZXJzfSByZWY9e3JlZkNhbGxiYWNrfSAvPjtcbiAgICB9XG59XG5cbkVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudCA9IGNvbm5lY3QoXG4gICAgRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50LFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW01hcmtldHNTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhbGxNYXJrZXRTdGF0czogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5jb25zdCBiYWxhbmNlVG9Bc3NldCA9IGZ1bmN0aW9uKGJhbGFuY2UpIHtcbiAgICBjb25zdCBpc0JhbGFuY2VPYmplY3QgPSBiYWxhbmNlLmdldEluKFtcImJhbGFuY2VcIiwgXCJhbW91bnRcIl0pO1xuICAgIGlmIChpc0JhbGFuY2VPYmplY3QgfHwgaXNCYWxhbmNlT2JqZWN0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhc3NldF9pZDogYmFsYW5jZS5nZXRJbihbXCJiYWxhbmNlXCIsIFwiYXNzZXRfaWRcIl0pLFxuICAgICAgICAgICAgYW1vdW50OiBOdW1iZXIoYmFsYW5jZS5nZXRJbihbXCJiYWxhbmNlXCIsIFwiYW1vdW50XCJdKSlcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXNzZXRfaWQ6IGJhbGFuY2UuZ2V0KFwiYXNzZXRfdHlwZVwiKSxcbiAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKGJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSlcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5jbGFzcyBCYWxhbmNlVmFsdWVDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGJhbGFuY2U6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgc2F0b3NoaXM6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgc2F0b3NoaXM6IG51bGxcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YmFsYW5jZSwgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGJhbGFuY2VBc3NldCA9IGJhbGFuY2VUb0Fzc2V0KGJhbGFuY2UpO1xuICAgICAgICBsZXQgYW1vdW50ID0gYmFsYW5jZUFzc2V0LmFtb3VudDtcbiAgICAgICAgLy8gb3ZlcnJpZGUgYW1vdW50IGlmIGRlc2lyZWRcbiAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5zYXRvc2hpcykge1xuICAgICAgICAgICAgYW1vdW50ID0gdGhpcy5wcm9wcy5zYXRvc2hpcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnJvbUFzc2V0ID0gYmFsYW5jZUFzc2V0LmFzc2V0X2lkO1xuICAgICAgICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIDxzcGFuPi0tPC9zcGFuPjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxFcXVpdmFsZW50VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICBmcm9tQXNzZXQ9e2Zyb21Bc3NldH1cbiAgICAgICAgICAgICAgICBub0RlY2ltYWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgIGZ1bGxQcmVjaXNpb249e1xuICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuc2F0b3NoaXMgPyBmYWxzZSA6IHRoaXMucHJvcHMuZnVsbFByZWNpc2lvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5CYWxhbmNlVmFsdWVDb21wb25lbnQgPSBCaW5kVG9DaGFpblN0YXRlKEJhbGFuY2VWYWx1ZUNvbXBvbmVudCwge1xuICAgIGtlZXBfdXBkYXRpbmc6IHRydWVcbn0pO1xuXG5leHBvcnQge1xuICAgIEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudCxcbiAgICBCYWxhbmNlVmFsdWVDb21wb25lbnQsXG4gICAgYmFsYW5jZVRvQXNzZXQsXG4gICAgZ2V0RXF1aXZhbGVudFZhbHVlXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgc2Nyb2xsX2xlbmd0aDogOVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBjb25zdCBzY3JvbGxfbGVuZ3RoID0gcHJvcHMuc2Nyb2xsX2xlbmd0aDtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkJvZHlDbGljayA9IHRoaXMub25Cb2R5Q2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnAuZW50cmllcywgdGhpcy5wcm9wcy5lbnRyaWVzKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5zLCB0aGlzLnN0YXRlKSB8fFxuICAgICAgICAgICAgbnAudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfc2V0TGlzdGVuZXIocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5lbnRyaWVzLmxlbmd0aCA+IDEgJiYgIXRoaXMubGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkJvZHlDbGljaywge1xuICAgICAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3JlbW92ZUxpc3RlbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQm9keUNsaWNrKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZhbHNlO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChucC5lbnRyaWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChucC5lbnRyaWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldExpc3RlbmVyKG5wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIG9uQm9keUNsaWNrKGUpIHtcbiAgICAgICAgbGV0IGVsID0gZS50YXJnZXQ7XG4gICAgICAgIGxldCBpbnNpZGVBY3Rpb25TaGVldCA9IGZhbHNlO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QgJiZcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93blwiKSAmJlxuICAgICAgICAgICAgICAgIGVsLmlkID09PSB0aGlzLnByb3BzLmlkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpbnNpZGVBY3Rpb25TaGVldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKChlbCA9IGVsLnBhcmVudE5vZGUpKTtcblxuICAgICAgICBpZiAoIWluc2lkZUFjdGlvblNoZWV0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6IGZhbHNlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF90b2dnbGVEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtlbnRyaWVzLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoZW50cmllcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy51cHBlckNhc2UgPyBcIiB1cHBlci1jYXNlXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2luZ2xlRW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuc2luZ2xlRW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVudHJpZXNbMF19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gZW50cmllcy5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwidXBwZXItY2FzZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZURyb3Bkb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImRyb3Bkb3duLXdyYXBwZXJcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy51cHBlckNhc2UgPyBcIiB1cHBlci1jYXNlXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxNX19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlID8gdmFsdWUgOiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5BPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcy5sZW5ndGggPiB0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiLi9MaW5rVG9BY2NvdW50QnlJZFwiO1xyXG5cclxuY2xhc3MgTGlua1RvV2l0bmVzc0J5SWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICB3aXRuZXNzOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB3aXRuZXNzX2FjY291bnQgPSB0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwid2l0bmVzc19hY2NvdW50XCIpO1xyXG4gICAgICAgIHJldHVybiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17d2l0bmVzc19hY2NvdW50fSAvPjtcclxuICAgIH1cclxufVxyXG5MaW5rVG9XaXRuZXNzQnlJZCA9IEJpbmRUb0NoYWluU3RhdGUoTGlua1RvV2l0bmVzc0J5SWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua1RvV2l0bmVzc0J5SWQ7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBiYXNlU2xpY2UgZnJvbSAnLi9fYmFzZVNsaWNlLmpzJztcbmltcG9ydCB0b0ludGVnZXIgZnJvbSAnLi90b0ludGVnZXIuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzbGljZSBvZiBgYXJyYXlgIHdpdGggYG5gIGVsZW1lbnRzIHRha2VuIGZyb20gdGhlIGVuZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj0xXSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHRha2UuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRha2VSaWdodChbMSwgMiwgM10pO1xuICogLy8gPT4gWzNdXG4gKlxuICogXy50YWtlUmlnaHQoWzEsIDIsIDNdLCAyKTtcbiAqIC8vID0+IFsyLCAzXVxuICpcbiAqIF8udGFrZVJpZ2h0KFsxLCAyLCAzXSwgNSk7XG4gKiAvLyA9PiBbMSwgMiwgM11cbiAqXG4gKiBfLnRha2VSaWdodChbMSwgMiwgM10sIDApO1xuICogLy8gPT4gW11cbiAqL1xuZnVuY3Rpb24gdGFrZVJpZ2h0KGFycmF5LCBuLCBndWFyZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG4gPSAoZ3VhcmQgfHwgbiA9PT0gdW5kZWZpbmVkKSA/IDEgOiB0b0ludGVnZXIobik7XG4gIG4gPSBsZW5ndGggLSBuO1xuICByZXR1cm4gYmFzZVNsaWNlKGFycmF5LCBuIDwgMCA/IDAgOiBuLCBsZW5ndGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0YWtlUmlnaHQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=