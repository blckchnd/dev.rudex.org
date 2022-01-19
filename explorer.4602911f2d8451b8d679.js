"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[12],{

/***/ 2738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2098);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1927);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2082);
/* harmony import */ var _Utility_EquivalentValueComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2739);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(426);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(655);
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
      let feename = trxTypes[operation_name];
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
          if (feeTypes[key] != "Annual Membership") {
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

/***/ 2737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var _Fees__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2738);





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

/***/ 2751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2695);



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

/***/ 2750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2302);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2311);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(645);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2751);







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

/***/ 2749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2702);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2061);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(594);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1813);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2081);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(578);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1905);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2701);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(426);















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

/***/ 2748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var _Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2749);





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

/***/ 2747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2312);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(646);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2061);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2374);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2082);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2052);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(426);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(596);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(649);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(510);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1190);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2701);



















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

/***/ 2746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2311);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(645);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1908);
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2747);






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

/***/ 2741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2061);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1809);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2083);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2479);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2742);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1927);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2049);
/* harmony import */ var _TransactionChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2743);
/* harmony import */ var _BlocktimeChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2744);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(596);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2481);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2082);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2631);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2669);




















__webpack_require__(2477);

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
      className: "table fixed-height-2rem"
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
      className: "table fixed-height-2rem"
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
      className: "table fixed-height-2rem"
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

/***/ 2740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1808);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var _Blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2741);





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

/***/ 2744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_takeRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2745);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2716);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(612);
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

/***/ 2736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(426);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1804);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(646);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2082);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(645);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2701);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(596);














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

/***/ 2733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Witnesses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2734);
/* harmony import */ var _CommitteeMembers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2736);
/* harmony import */ var _Blockchain_FeesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2737);
/* harmony import */ var _BlocksContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2740);
/* harmony import */ var _AssetsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2746);
/* harmony import */ var _AccountsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2748);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Exchange_MarketsContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2750);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(655);
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

/***/ 2743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2716);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(612);
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

/***/ 2734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(426);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2082);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2481);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1804);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(646);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(645);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2062);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2701);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(596);


















__webpack_require__(2735);

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

/***/ 2739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquivalentValueComponent": () => (/* binding */ EquivalentValueComponent),
/* harmony export */   "BalanceValueComponent": () => (/* binding */ BalanceValueComponent),
/* harmony export */   "balanceToAsset": () => (/* binding */ balanceToAsset),
/* harmony export */   "getEquivalentValue": () => (/* binding */ getEquivalentValue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2082);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1926);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1927);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2049);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1804);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2302);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MarketStatsCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2304);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2301);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(426);
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

/***/ 2742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1927);
/* harmony import */ var _LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2374);





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

/***/ 2735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2745:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2043);
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1931);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZXIuNDYwMjkxMWYyZDg0NTFiOGQ2NzkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBUUE7O0FBekxBOztBQTJMQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBSUE7O0FBbENBOztBQXFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN1BBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFTQTs7QUFaQTs7QUFlQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVpBO0FBaUJBOztBQXJEQTs7QUF3REE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFGQTtBQW9CQTs7QUF2QkE7O0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFPQTtBQUNBO0FBRkE7QUFPQTtBQURBO0FBT0E7QUFDQTtBQUZBO0FBTUE7QUE5QkE7QUFpQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQWpCQTtBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBT0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUlBO0FBMUJBO0FBNkJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRkE7QUFPQTtBQTdCQTs7QUFpQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFRQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFRQTs7QUFuVUE7O0FBc1VBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUM3VkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFjQTs7QUFqQkE7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQWxCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFyQkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBWEE7QUFlQTtBQUVBO0FBSUE7QUFFQTtBQUlBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBbEJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQXJCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFYQTtBQWVBO0FBRUE7QUFLQTtBQUVBO0FBSUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFVQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQVBBO0FBWUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBUUE7QUFEQTtBQUlBO0FBREE7QUF3QkE7QUFJQTtBQUNBO0FBRUE7QUFIQTtBQURBO0FBZ0JBO0FBQ0E7QUFFQTtBQUhBO0FBREE7QUFTQTtBQURBO0FBVUE7QUFNQTtBQVBBO0FBeEVBO0FBd0dBO0FBQ0E7QUFDQTtBQUZBO0FBekhBO0FBZ0lBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFZQTs7QUFobUJBOztBQW1tQkE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQWJBO0FBRkE7QUFxQkE7O0FBeEJBOztBQTJCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFHQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTs7QUF4QkE7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBOztBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BO0FBQ0E7QUFFQTs7QUFHQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQVVBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFjQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBYUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQVdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBR0E7QUFHQTtBQUNBO0FBTEE7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBR0E7QUFHQTtBQUNBO0FBTEE7QUFjQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFRQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUZBO0FBU0E7QUFDQTtBQUZBO0FBYUE7O0FBM2lCQTs7QUE4aUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BtQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBRkE7QUFjQTs7QUFqQkE7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBM0RBO0FBc0VBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBbkpBOztBQXNKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUlBO0FBRUE7QUFJQTtBQUVBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7QUEzSEE7O0FBNkhBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQU1BOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BO0FBYUE7QUFDQTtBQUdBO0FBTEE7QUFjQTs7QUE3RUE7O0FBK0VBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUhBOztBQU1BO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFRQTs7QUFiQTtBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUF0Q0E7QUE4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUtBO0FBR0E7O0FBaEZBOztBQW1GQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFWQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQTVEQTtBQXVFQTtBQUNBO0FBQUE7QUFBQTtBQUVBOztBQTNKQTs7QUE4SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFVQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQVFBOztBQXBFQTs7QUFzRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUlBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVpBO0FBY0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBVkE7QUFZQTtBQUFBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBT0E7QUF4QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQXRCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTs7QUFhQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTs7QUFsUkE7O0FBb1JBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUVBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBdUJBO0FBSUE7QUFMQTtBQVdBO0FBR0E7QUFKQTtBQVVBO0FBREE7QUFlQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFjQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFSQTtBQWVBOztBQS9KQTs7QUFpS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BOztBQVhBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN2lCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFRQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUVBOztBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUlBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWdCQTs7QUE1RUE7O0FBOEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBOztBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQUxBOztBQVFBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBUkE7O0FBWUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBOztBQS9CQTs7QUFpQ0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN01BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQWFBO0FBQ0E7O0FBNUpBOztBQStKQTs7Ozs7Ozs7Ozs7Ozs7O0FDbktBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFSQTs7QUFVQTtBQUVBOzs7Ozs7OztBQ2pCQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0ZlZXMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vRmVlc0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvTWFya2V0cy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvTWFya2V0c0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQWNjb3VudHMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0FjY291bnRzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9Bc3NldHMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0Fzc2V0c0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvQmxvY2tzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9CbG9ja3NDb250YWluZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4cGxvcmVyL0Jsb2NrdGltZUNoYXJ0LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9Db21taXR0ZWVNZW1iZXJzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci9FeHBsb3Jlci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvVHJhbnNhY3Rpb25DaGFydC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhwbG9yZXIvV2l0bmVzc2VzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9GbG9hdGluZ0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0xpbmtUb1dpdG5lc3NCeUlkLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9FeHBsb3Jlci93aXRuZXNzZXMuc2Nzcz9kNDMxIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdGFrZVJpZ2h0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBIZWxwQ29udGVudCBmcm9tIFwiLi4vVXRpbGl0eS9IZWxwQ29udGVudFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQge0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudH0gZnJvbSBcIi4uL1V0aWxpdHkvRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluU3RvcmUsIENoYWluVHlwZXMgYXMgZ3JhcGhlbmVDaGFpblR5cGVzfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7Q2FyZH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuY29uc3Qge29wZXJhdGlvbnN9ID0gZ3JhcGhlbmVDaGFpblR5cGVzO1xubGV0IG9wcyA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbnMpO1xuXG4vLyBEZWZpbmUgZ3JvdXBzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9wZXJhdGlvbiBpZHNcbmxldCBmZWVfZ3JvdXBpbmcgPSB7XG4gICAgZ2VuZXJhbDogWzAsIDI1LCAyNiwgMjcsIDI4LCAzMiwgMzMsIDM3LCAzOSwgNDEsIDQ5LCA1MCwgNTJdLFxuICAgIGFzc2V0OiBbMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDM4LCA0MywgNDQsIDQ3LCA0OF0sXG4gICAgbWFya2V0OiBbMSwgMiwgMywgNCwgNDUsIDQ2XSxcbiAgICBhY2NvdW50OiBbNSwgNiwgNywgOCwgOV0sXG4gICAgYnVzaW5lc3M6IFsyMCwgMjEsIDIyLCAyMywgMjQsIDI5LCAzMCwgMzEsIDM0LCAzNSwgMzZdXG59O1xuXG4vLyBPcGVyYXRpb25zIHRoYXQgcmVxdWlyZSBMVE1cbmxldCBsdG1fcmVxdWlyZWQgPSBbNSwgNywgMjAsIDIxLCAzNF07XG5cbmNsYXNzIEZlZUdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IFwiMi4wLjBcIlxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuZ2xvYmFsT2JqZWN0LCB0aGlzLnByb3BzLmdsb2JhbE9iamVjdCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2dsb2JhbE9iamVjdCwgc2V0dGluZ3MsIG9wSWRzLCB0aXRsZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBnbG9iYWxPYmplY3QgPSBnbG9iYWxPYmplY3QudG9KUygpO1xuICAgICAgICBjb25zdCBjb3JlX2Fzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcIjEuMy4wXCIpO1xuXG4gICAgICAgIGxldCBjdXJyZW50X2ZlZXMgPSBnbG9iYWxPYmplY3QucGFyYW1ldGVycy5jdXJyZW50X2ZlZXM7XG4gICAgICAgIGxldCBuZXR3b3JrX2ZlZSA9IGdsb2JhbE9iamVjdC5wYXJhbWV0ZXJzLm5ldHdvcmtfcGVyY2VudF9vZl9mZWUgLyAxZTQ7XG4gICAgICAgIGxldCBzY2FsZSA9IGN1cnJlbnRfZmVlcy5zY2FsZTtcbiAgICAgICAgbGV0IGZlZXNSYXcgPSBjdXJyZW50X2ZlZXMucGFyYW1ldGVycztcbiAgICAgICAgbGV0IHByZWZlcnJlZFVuaXQgPVxuICAgICAgICAgICAgc2V0dGluZ3MuZ2V0KFwiZmVlX2Fzc2V0XCIpIHx8IGNvcmVfYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuXG4gICAgICAgIGxldCB0cnhUeXBlcyA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zYWN0aW9uLnRyeFR5cGVzXCIpO1xuXG4gICAgICAgIGxldCBmZWVzID0gb3BJZHMubWFwKG9wSUQgPT4ge1xuICAgICAgICAgICAgbGV0IGZlZUlkeCA9IGZlZXNSYXcuZmluZEluZGV4KGYgPT4gZlswXSA9PT0gb3BJRCk7XG4gICAgICAgICAgICBpZiAoZmVlSWR4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgICAgXCJBc2tpbmcgZm9yIG5vbi1leGlzdGluZyBmZWUgaWQgJWQhIENoZWNrIGdyb3VwIHNldHRpbmdzIGluIEZlZXMuanN4XCIsXG4gICAgICAgICAgICAgICAgICAgIG9wSURcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gRklYTUUsIGlmIEkgYXNrIGZvciBhIGZlZSB0aGF0IGRvZXMgbm90IGV4aXN0P1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZmVlU3RydWN0ID0gZmVlc1Jhd1tmZWVJZHhdO1xuXG4gICAgICAgICAgICBsZXQgb3BJZCA9IGZlZVN0cnVjdFswXTtcbiAgICAgICAgICAgIGxldCBmZWUgPSBmZWVTdHJ1Y3RbMV07XG4gICAgICAgICAgICBsZXQgb3BlcmF0aW9uX25hbWUgPSBvcHNbb3BJZF07XG4gICAgICAgICAgICBsZXQgZmVlbmFtZSA9IHRyeFR5cGVzW29wZXJhdGlvbl9uYW1lXTtcblxuICAgICAgICAgICAgbGV0IGZlZVJhdGVGb3JMVE0gPSBuZXR3b3JrX2ZlZTtcbiAgICAgICAgICAgIGlmIChvcElkID09PSAxMCkge1xuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYml0c2hhcmVzL2JpdHNoYXJlcy11aS9pc3N1ZXMvOTk2XG4gICAgICAgICAgICAgICAgZmVlUmF0ZUZvckxUTSA9IDAuNSArIDAuNSAqIG5ldHdvcmtfZmVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGhlYWRJbmNsdWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGxhYmVsQ2xhc3MgPSBjbGFzc05hbWVzKFwibGFiZWxcIiwgXCJpbmZvXCIpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZmVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IChmZWVba2V5XSAqIHNjYWxlKSAvIDFlNDtcbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50Rm9yTFRNID0gYW1vdW50ICogZmVlUmF0ZUZvckxUTTtcbiAgICAgICAgICAgICAgICBsZXQgZmVlVHlwZXMgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2FjdGlvbi5mZWVUeXBlc1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgYXNzZXRBbW91bnQgPSBhbW91bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldCBhbW91bnQ9e2Ftb3VudH0gYXNzZXQ9XCIxLjMuMFwiIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgZmVlVHlwZXNbXCJfbm9uZVwiXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IGVxdWl2YWxlbnRBbW91bnQgPSBhbW91bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxFcXVpdmFsZW50VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Bc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxQcmVjaXNpb249e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQXNzZXQ9e3ByZWZlcnJlZFVuaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsRGVjaW1hbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgZmVlVHlwZXNbXCJfbm9uZVwiXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0QW1vdW50TFRNID0gYW1vdW50Rm9yTFRNID8gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXQgYW1vdW50PXthbW91bnRGb3JMVE19IGFzc2V0PVwiMS4zLjBcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGZlZVR5cGVzW1wiX25vbmVcIl1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBlcXVpdmFsZW50QW1vdW50TFRNID0gYW1vdW50Rm9yTFRNID8gKFxuICAgICAgICAgICAgICAgICAgICA8RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsUHJlY2lzaW9uPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnRGb3JMVE19XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Fzc2V0PXtwcmVmZXJyZWRVbml0fVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbERlY2ltYWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIGZlZVR5cGVzW1wiX25vbmVcIl1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhlYWRJbmNsdWRlZCkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkSW5jbHVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dTcGFuPVwiNlwiIHN0eWxlPXt7d2lkdGg6IFwiMTVlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtsYWJlbENsYXNzfT57ZmVlbmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChsdG1fcmVxdWlyZWQuaW5kZXhPZihvcElkKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlZVR5cGVzW2tleV0gIT0gXCJBbm51YWwgTWVtYmVyc2hpcFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17b3BJZC50b1N0cmluZygpICsga2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZlZVR5cGVzW2tleV19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc3NldEFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthbW91bnQgIT09IDAgJiYgcHJlZmVycmVkVW5pdCAhPT0gXCJHUEhcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7LyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXF1aXZhbGVudEFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWVJZHggIT09IDggPyBhc3NldEFtb3VudExUTSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVlSWR4ICE9PSA4ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQgIT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZFVuaXQgIT09IFwiR1BIXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOy8mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VxdWl2YWxlbnRBbW91bnRMVE19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtvcElkLnRvU3RyaW5nKCkgKyBrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZlZVR5cGVzW2tleV19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIDxzdXA+Kjwvc3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fzc2V0QW1vdW50TFRNfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YW1vdW50ICE9PSAwICYmIHByZWZlcnJlZFVuaXQgIT09IFwiR1BIXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsvJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VxdWl2YWxlbnRBbW91bnRMVE19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiA8dGJvZHkga2V5PXtmZWVJZHh9Pntyb3dzfTwvdGJvZHk+O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1jYXJkXCI+XG4gICAgICAgICAgICAgICAgPENhcmQ+e3RoaXMucHJvcHMudGl0bGUudG9VcHBlckNhc2UoKX08L0NhcmQ+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJleHBsb3Jlci5ibG9jay5vcFwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiZXhwbG9yZXIuZmVlcy50eXBlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wiZXhwbG9yZXIuZmVlcy5mZWVcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJleHBsb3Jlci5mZWVzLmZlZWx0bVwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICB7ZmVlc31cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuRmVlR3JvdXAgPSBCaW5kVG9DaGFpblN0YXRlKEZlZUdyb3VwKTtcblxuY2xhc3MgRmVlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgRmVlR3JvdXBzVGl0bGUgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2FjdGlvbi5mZWVHcm91cHNcIik7XG4gICAgICAgIGxldCBmZWVHcm91cHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBncm91cE5hbWUgaW4gZmVlX2dyb3VwaW5nKSB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBOYW1lVGV4dCA9IEZlZUdyb3Vwc1RpdGxlW2dyb3VwTmFtZV07XG4gICAgICAgICAgICBsZXQgZmVlSWRzID0gZmVlX2dyb3VwaW5nW2dyb3VwTmFtZV07XG4gICAgICAgICAgICBmZWVHcm91cHMucHVzaChcbiAgICAgICAgICAgICAgICA8RmVlR3JvdXBcbiAgICAgICAgICAgICAgICAgICAga2V5PXtncm91cE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXt0aGlzLnByb3BzLnNldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICBvcElkcz17ZmVlSWRzfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Z3JvdXBOYW1lVGV4dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIiBzdHlsZT17e292ZXJmbG93OiBcInZpc2libGVcIn19PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0xMiBzaHJpbmtcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93OiBcInZpc2libGVcIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SGVscENvbnRlbnQgcGF0aD17XCJjb21wb25lbnRzL0ZlZXNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMTIgXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj57ZmVlR3JvdXBzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XG5pbXBvcnQgRmVlcyBmcm9tIFwiLi9GZWVzXCI7XG5cbmNsYXNzIEZlZXNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tTZXR0aW5nc1N0b3JlXX1cbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5nc1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZlZXMgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlZXNDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTXlNYXJrZXRzIGZyb20gXCIuL015TWFya2V0c1wiO1xuXG5jbGFzcyBNYXJrZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGhlaWdodDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMgPSB0aGlzLl9zZXREaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMpO1xuICAgIH1cblxuICAgIF9zZXREaW1lbnNpb25zKCkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5yZWZzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGlmIChoZWlnaHQgIT09IHRoaXMuc3RhdGUuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWlnaHR9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwid3JhcHBlclwiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICA8TXlNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiAyMH19XG4gICAgICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ9e3RoaXMuc3RhdGUuaGVpZ2h0ID8gdGhpcy5zdGF0ZS5oZWlnaHQgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclN0eWxlPXt7cGFkZGluZ1RvcDogMCwgYm9yZGVyVG9wOiBcIm5vbmVcIn19XG4gICAgICAgICAgICAgICAgICAgIHRhYkhlYWRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwic3RhclwiLCBpbmRleDogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogXCJtYXJrZXRcIiwgaW5kZXg6IDJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwicXVvdGVTdXBwbHlcIiwgaW5kZXg6IDN9LFxuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IFwidm9sXCIsIGluZGV4OiA0fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcInByaWNlXCIsIGluZGV4OiA1fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiBcImNoYW5nZVwiLCBpbmRleDogNn1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XHJcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgTWFya2V0cyBmcm9tIFwiLi9NYXJrZXRzXCI7XHJcblxyXG5jbGFzcyBNYXJrZXRzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tTZXR0aW5nc1N0b3JlLCBBc3NldFN0b3JlLCBNYXJrZXRzU3RvcmVdfVxyXG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0cztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvb2t1cFJlc3VsdHM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5sb29rdXBSZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0QmFzZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0QmFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWFya2V0cyAvPlxyXG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJrZXRzQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcclxuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xyXG5pbXBvcnQge1RhYmxlLCBTZWxlY3QsIEljb24gYXMgSWNvblN0eWxlR3VpZGV9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi9VdGlsaXR5L1NlYXJjaElucHV0XCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcblxyXG5jbGFzcyBBY2NvdW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoVGVybTogcHJvcHMuc2VhcmNoVGVybSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgcm93c09uUGFnZTogXCIyNVwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2VhcmNoQWNjb3VudHMgPSBkZWJvdW5jZSh0aGlzLl9zZWFyY2hBY2NvdW50cywgMjAwKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvd3NDaGFuZ2UgPSB0aGlzLmhhbmRsZVJvd3NDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxhbmNlT2JqZWN0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMoXHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuc2VhcmNoQWNjb3VudHMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlYXJjaEFjY291bnRzXHJcbiAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgbmV4dFN0YXRlLnNlYXJjaFRlcm0gIT09IHRoaXMuc3RhdGUuc2VhcmNoVGVybSB8fFxyXG4gICAgICAgICAgICBuZXh0U3RhdGUuaXNMb2FkaW5nICE9PSB0aGlzLnN0YXRlLmlzTG9hZGluZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uU2VhcmNoQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VhcmNoVGVybTogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoQWNjb3VudHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZWFyY2hBY2NvdW50cyhzZWFyY2hUZXJtKSB7XHJcbiAgICAgICAgQWNjb3VudEFjdGlvbnMuYWNjb3VudFNlYXJjaChzZWFyY2hUZXJtKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uQWRkQ29udGFjdChhY2NvdW50LCBlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIEFjY291bnRBY3Rpb25zLmFkZEFjY291bnRDb250YWN0KGFjY291bnQpO1xyXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25SZW1vdmVDb250YWN0KGFjY291bnQsIGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgQWNjb3VudEFjdGlvbnMucmVtb3ZlQWNjb3VudENvbnRhY3QoYWNjb3VudCk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJvd3NDaGFuZ2Uocm93cykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByb3dzT25QYWdlOiByb3dzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9lbnN1cmVCYWxhbmNlT2JqZWN0KG9iamVjdF9pZCkge1xyXG4gICAgICAgIGlmIChvYmplY3RfaWQgJiYgdHlwZW9mIG9iamVjdF9pZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYmFsYW5jZU9iamVjdHNbb2JqZWN0X2lkXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlT2JqZWN0c1tvYmplY3RfaWRdID0gcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldE9iamVjdChvYmplY3RfaWQpLmdldChcImJhbGFuY2VcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmJhbGFuY2VPYmplY3RzW29iamVjdF9pZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxhbmNlT2JqZWN0c1tvYmplY3RfaWRdID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7c2VhcmNoQWNjb3VudHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQge3NlYXJjaFRlcm19ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBbXTtcclxuICAgICAgICBsZXQgY29sdW1ucyA9IFtdO1xyXG5cclxuICAgICAgICBjb2x1bW5zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMuaWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhY2NvdW50SWRcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJhY2NvdW50SWRcIixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTb3J0T3JkZXI6IFwiYXNjZW5kXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuYWNjb3VudElkID4gYi5hY2NvdW50SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5hY2NvdW50SWQgPCBiLmFjY291bnRJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2PntpZH08L2Rpdj47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiA8SWNvbiBuYW1lPVwidXNlclwiIHRpdGxlPVwiaWNvbnMudXNlci5hY2NvdW50XCIgLz4sXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYWNjb3VudENvbnRhY3RzXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWNjb3VudENvbnRhY3RzXCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IChjb250YWN0cywgcmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhY3RzLmhhcyhyZWNvcmQuYWNjb3VudE5hbWUpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblJlbW92ZUNvbnRhY3QuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC5hY2NvdW50TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWludXMtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLm1pbnVzX2NpcmNsZS5yZW1vdmVfY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkFkZENvbnRhY3QuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC5hY2NvdW50TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGx1cy1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucGx1c19jaXJjbGUuYWRkX2NvbnRhY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJhY2NvdW50Lm5hbWVcIiAvPixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhY2NvdW50TmFtZVwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImFjY291bnROYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuYWNjb3VudE5hbWUgPiBiLmFjY291bnROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEuYWNjb3VudE5hbWUgPCBiLmFjY291bnROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBuYW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYWNjb3VudC8ke25hbWV9L292ZXJ2aWV3YH0+e25hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cImdhdGV3YXkuYmFsYW5jZVwiIC8+LFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFjY291bnRCYWxhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWNjb3VudEJhbGFuY2VcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbnN1cmVCYWxhbmNlT2JqZWN0KGEuYWNjb3VudEJhbGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vuc3VyZUJhbGFuY2VPYmplY3QoYi5hY2NvdW50QmFsYW5jZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJhbGFuY2VPYmplY3RzW2EuYWNjb3VudEJhbGFuY2VdID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlT2JqZWN0c1tiLmFjY291bnRCYWxhbmNlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmJhbGFuY2VPYmplY3RzW2EuYWNjb3VudEJhbGFuY2VdIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGFuY2VPYmplY3RzW2IuYWNjb3VudEJhbGFuY2VdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBiYWxhbmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFiYWxhbmNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibi9hXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnQgYmFsYW5jZT17YmFsYW5jZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwiYWNjb3VudC5wZXJjZW50XCIgLz4sXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYWNjb3VudEJhbGFuY2VcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJhY2NvdW50QmFsYW5jZVBlcmNlbnRhZ2VcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbnN1cmVCYWxhbmNlT2JqZWN0KGEuYWNjb3VudEJhbGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vuc3VyZUJhbGFuY2VPYmplY3QoYi5hY2NvdW50QmFsYW5jZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJhbGFuY2VPYmplY3RzW2EuYWNjb3VudEJhbGFuY2VdID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlT2JqZWN0c1tiLmFjY291bnRCYWxhbmNlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmJhbGFuY2VPYmplY3RzW2EuYWNjb3VudEJhbGFuY2VdIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGFuY2VPYmplY3RzW2IuYWNjb3VudEJhbGFuY2VdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBiYWxhbmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFiYWxhbmNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibi9hXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17YmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNQZXJjZW50YWdlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaEFjY291bnRzLnNpemUgPiAwICYmIHNlYXJjaFRlcm0gJiYgc2VhcmNoVGVybS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEFjY291bnRzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICogVGhpcyBhcHBlYXJzIHRvIHJldHVybiBmYWxzZSBuZWdhdGl2ZXMsIHBlcmhhcHMgZnJvbVxyXG4gICAgICAgICAgICAgICAgICAgICAqIGNoYW5nZWQgYWNjb3VudCBuYW1lIHJ1bGVzIHdoZW4gbW92aW5nIHRvIGdyYXBoZW5lPy4gRWl0aGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICogd2F5LCB0cnlpbmcgdG8gcmVzb2x2ZSBpbnZhbGlkIG5hbWVzIGZhaWxzIGluIHRoZSBDaGFpblN0b3JlLFxyXG4gICAgICAgICAgICAgICAgICAgICAqIHdoaWNoIGluIHR1cm4gYnJlYWtzIHRoZSBCaW5kVG9DaGFpblN0YXRlIHdyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIUNoYWluVmFsaWRhdGlvbi5pc19hY2NvdW50X25hbWUoYSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleE9mKHNlYXJjaFRlcm0pICE9PSAtMTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhID4gYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEgPCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcCgobmFtZSwgaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFjY291bnQgPSBDaGFpblN0b3JlLmdldEFjY291bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlID0gY3VycmVudEFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50QWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBcIjEuMy4wXCJdKSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudENvbnRhY3RzOiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjY291bnRDb250YWN0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRCYWxhbmNlOiBiYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1haW4tY29udGVudCBzbWFsbC0xMiBtZWRpdW0tMTAgbWVkaXVtLW9mZnNldC0xIG1haW4tY29udGVudCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyaWMtYm9yZGVyZWQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjIwMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25TZWFyY2hDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTUwcHhcIiwgbWFyZ2luTGVmdDogXCIyNHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yb3dzT25QYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVSb3dzQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjEwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgcm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCIyNVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1IHJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiNTBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MCByb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjEwMFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCByb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjIwMFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMCByb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hUZXJtICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoVGVybS5sZW5ndGggPT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuc3RhcnRfdHlwaW5nX3RvX3NlYXJjaFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIxNnB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0tleT1cImFjY291bnRJZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiBOdW1iZXIodGhpcy5zdGF0ZS5yb3dzT25QYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmc6IDEwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFjY291bnRzLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHNlYXJjaEFjY291bnRzOiB7fVxyXG59O1xyXG5cclxuQWNjb3VudHMucHJvcFR5cGVzID0ge1xyXG4gICAgc2VhcmNoQWNjb3VudHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBBY2NvdW50cyBmcm9tIFwiLi9BY2NvdW50c1wiO1xyXG5cclxuY2xhc3MgQWNjb3VudHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0FjY291bnRTdG9yZV19XHJcbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hBY2NvdW50czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuc2VhcmNoQWNjb3VudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5zZWFyY2hUZXJtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50cyAvPlxyXG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50c0NvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xuaW1wb3J0IGFzc2V0VXRpbHMgZnJvbSBcImNvbW1vbi9hc3NldF91dGlsc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgbHMgZnJvbSBcImNvbW1vbi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5pbXBvcnQge1JhZGlvLCBUYWJsZSwgU2VsZWN0LCBJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL1V0aWxpdHkvU2VhcmNoSW5wdXRcIjtcblxubGV0IGFjY291bnRTdG9yYWdlID0gbHMoXCJfX2dyYXBoZW5lX19cIik7XG5cbmNsYXNzIEFzc2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgY2hhaW5JRCA9IEFwaXMuaW5zdGFuY2UoKS5jaGFpbl9pZDtcbiAgICAgICAgaWYgKGNoYWluSUQpIGNoYWluSUQgPSBjaGFpbklELnN1YnN0cigwLCA4KTtcbiAgICAgICAgZWxzZSBjaGFpbklEID0gXCI3ZmNmNDUyZFwiO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFpbklELFxuICAgICAgICAgICAgZm91bmRMYXN0OiBmYWxzZSxcbiAgICAgICAgICAgIGxhc3RBc3NldDogXCJcIixcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB0b3RhbEFzc2V0czpcbiAgICAgICAgICAgICAgICB0eXBlb2YgYWNjb3VudFN0b3JhZ2UuZ2V0KGB0b3RhbEFzc2V0c18ke2NoYWluSUR9YCkgIT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRTdG9yYWdlLmdldChgdG90YWxBc3NldHNfJHtjaGFpbklEfWApXG4gICAgICAgICAgICAgICAgICAgIDogY2hhaW5JRCAmJiBjaGFpbklEID09PSBcIjdmY2Y0NTJkXCJcbiAgICAgICAgICAgICAgICAgICAgPyAzMDAwXG4gICAgICAgICAgICAgICAgICAgIDogNTAsIC8vIG1haW5uZXQgaGFzIDMwMDArIGFzc2V0cywgb3RoZXIgY2hhaW5zIG1heSBub3QgaGF2ZSB0aGF0IG1hbnlcbiAgICAgICAgICAgIGFzc2V0c0ZldGNoZWQ6IDAsXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXI6IFwibWFya2V0XCIsXG4gICAgICAgICAgICBmaWx0ZXJTZWFyY2g6IHByb3BzLmZpbHRlclNlYXJjaCB8fCBcIlwiLFxuICAgICAgICAgICAgcm93c09uUGFnZTogXCIyNVwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdG9nZ2xlRmlsdGVyID0gdGhpcy5fdG9nZ2xlRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUm93c0NoYW5nZSA9IHRoaXMuaGFuZGxlUm93c0NoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSA9IHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5hc3NldHMsIHRoaXMucHJvcHMuYXNzZXRzKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9jaGVja0Fzc2V0cyh0aGlzLnByb3BzLmFzc2V0cywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRmlsdGVyQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJTZWFyY2g6IChlLnRhcmdldC52YWx1ZSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVJvd3NDaGFuZ2Uocm93cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3NPblBhZ2U6IHJvd3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoZWNrQXNzZXRzKGFzc2V0cywgZm9yY2UpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiB0cnVlfSk7XG4gICAgICAgIGxldCBsYXN0QXNzZXQgPSBhc3NldHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sID4gYi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhLnN5bWJvbCA8IGIuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmxhc3QoKTtcblxuICAgICAgICBpZiAoYXNzZXRzLnNpemUgPT09IDAgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIoXCJBXCIsIDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthc3NldHNGZXRjaGVkOiAxMDB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhc3NldHMuc2l6ZSA+PSB0aGlzLnN0YXRlLmFzc2V0c0ZldGNoZWQpIHtcbiAgICAgICAgICAgIEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIobGFzdEFzc2V0LnN5bWJvbCwgMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Fzc2V0c0ZldGNoZWQ6IHRoaXMuc3RhdGUuYXNzZXRzRmV0Y2hlZCArIDk5fSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXNzZXRzLnNpemUgPiB0aGlzLnN0YXRlLnRvdGFsQXNzZXRzKSB7XG4gICAgICAgICAgICBhY2NvdW50U3RvcmFnZS5zZXQoXG4gICAgICAgICAgICAgICAgYHRvdGFsQXNzZXRzXyR7dGhpcy5zdGF0ZS5jaGFpbklEfWAsXG4gICAgICAgICAgICAgICAgYXNzZXRzLnNpemVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hc3NldHNGZXRjaGVkID49IHRoaXMuc3RhdGUudG90YWxBc3NldHMgLSAxMDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmFzc2V0cyAhPT0gdGhpcy5wcm9wcy5hc3NldHMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQXNzZXRzKG5leHRQcm9wcy5hc3NldHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlua1RvQWNjb3VudChuYW1lX29yX2lkKSB7XG4gICAgICAgIGlmICghbmFtZV9vcl9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPi08L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtuYW1lX29yX2lkfSAvPjtcbiAgICB9XG5cbiAgICBfdG9nZ2xlRmlsdGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkZpbHRlcih0eXBlLCBlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1t0eXBlXTogZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKX0pO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgW3R5cGVdOiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthc3NldHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVGaWx0ZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJtYXJrZXRzLmZpbHRlclwiKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBsZXQgY29yZUFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcIjEuMy4wXCIpO1xuXG4gICAgICAgIGxldCBwbTtcblxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IFtdO1xuICAgICAgICBsZXQgY29sdW1ucyA9IFtdO1xuXG4gICAgICAgIC8vIERlZmF1bHQgc29ydGluZyBvZiB0aGUgYW50IHRhYmxlIGlzIGRlZmluZWQgdGhyb3VnaCBkZWZhdWx0U29ydE9yZGVyIHByb3BcblxuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyID09IFwidXNlclwiKSB7XG4gICAgICAgICAgICBjb2x1bW5zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJzeW1ib2xcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U29ydE9yZGVyOiBcImFzY2VuZFwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wgPiBiLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYS5zeW1ib2wgPCBiLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2Fzc2V0LyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJpc3N1ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNzdWVyQSA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChhLmlzc3VlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzc3VlckIgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYi5pc3N1ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZXJBKSBpc3N1ZXJBID0gaXNzdWVyQS5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlckIpIGlzc3VlckIgPSBpc3N1ZXJCLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQSA+IGlzc3VlckIpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlckEgPCBpc3N1ZXJCKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUb0FjY291bnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImN1cnJlbnRTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU3VwcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjdXJyZW50U3VwcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuY3VycmVudFN1cHBseSA9IHBhcnNlRmxvYXQoYS5jdXJyZW50U3VwcGx5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuY3VycmVudFN1cHBseSA9IHBhcnNlRmxvYXQoYi5jdXJyZW50U3VwcGx5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmN1cnJlbnRTdXBwbHkgPiBiLmN1cnJlbnRTdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGEuY3VycmVudFN1cHBseSA8IGIuY3VycmVudFN1cHBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGl0ZW0sIHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZWNvcmQuY3VycmVudFN1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3JlY29yZC5hc3NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJtYXJrZXRJZFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm1hcmtldElkXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke2l0ZW19YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9e1wibGluZS1jaGFydFwifSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaGVhZGVyLmV4Y2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgYXNzZXRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICFhLm1hcmtldF9hc3NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zeW1ib2wuaW5kZXhPZih0aGlzLnN0YXRlLmZpbHRlclNlYXJjaCkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRJRCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3JlQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvcmVBc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiR1BIXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlcjogYXNzZXQuaXNzdWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN1cHBseTogYXNzZXQuZHluYW1pYy5jdXJyZW50X3N1cHBseSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0SWQ6IGFzc2V0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SWQ6IG1hcmtldElEXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUZpbHRlciA9PSBcIm1hcmtldFwiKSB7XG4gICAgICAgICAgICBjb2x1bW5zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJzeW1ib2xcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U29ydE9yZGVyOiBcImFzY2VuZFwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wgPiBiLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYS5zeW1ib2wgPCBiLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2Fzc2V0LyR7aXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJpc3N1ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImlzc3VlclwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNzdWVyQSA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChhLmlzc3VlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzc3VlckIgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYi5pc3N1ZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc3N1ZXJBKSBpc3N1ZXJBID0gaXNzdWVyQS5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlckIpIGlzc3VlckIgPSBpc3N1ZXJCLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNzdWVyQSA+IGlzc3VlckIpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzc3VlckEgPCBpc3N1ZXJCKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUb0FjY291bnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImN1cnJlbnRTdXBwbHlcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU3VwcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjdXJyZW50U3VwcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuY3VycmVudFN1cHBseSA9IHBhcnNlRmxvYXQoYS5jdXJyZW50U3VwcGx5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuY3VycmVudFN1cHBseSA9IHBhcnNlRmxvYXQoYi5jdXJyZW50U3VwcGx5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmN1cnJlbnRTdXBwbHkgPiBiLmN1cnJlbnRTdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGEuY3VycmVudFN1cHBseSA8IGIuY3VycmVudFN1cHBseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGl0ZW0sIHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZWNvcmQuY3VycmVudFN1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3JlY29yZC5hc3NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJtYXJrZXRJZFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm1hcmtldElkXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke2l0ZW19YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9e1wibGluZS1jaGFydFwifSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaGVhZGVyLmV4Y2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgYXNzZXRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYml0YXNzZXRfZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIWEuYml0YXNzZXRfZGF0YS5pc19wcmVkaWN0aW9uX21hcmtldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zeW1ib2wuaW5kZXhPZih0aGlzLnN0YXRlLmZpbHRlclNlYXJjaCkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRJRCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3JlQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvcmVBc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiR1BIXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlcjogYXNzZXQuaXNzdWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFN1cHBseTogYXNzZXQuZHluYW1pYy5jdXJyZW50X3N1cHBseSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0SWQ6IGFzc2V0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SWQ6IG1hcmtldElEXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUZpbHRlciA9PSBcInByZWRpY3Rpb25cIikge1xuICAgICAgICAgICAgcG0gPSBhc3NldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBhLm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5iaXRhc3NldF9kYXRhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmJpdGFzc2V0X2RhdGEuaXNfcHJlZGljdGlvbl9tYXJrZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChhLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YodGhpcy5zdGF0ZS5maWx0ZXJTZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5tYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5maWx0ZXJTZWFyY2gudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLnN5bWJvbCA8IGIuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYS5zeW1ib2wgPiBiLnN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhc3NldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIl9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGVzY3JpcHRpb24ubWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvcmVBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY29yZUFzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJHUEhcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1haW4tY29udGVudCBzbWFsbC0xMiBtZWRpdW0tMTAgbWVkaXVtLW9mZnNldC0xIG1haW4tY29udGVudCB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImxvYWRpbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjIwMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjdGl2ZUZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl90b2dnbGVGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjI0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXtcIm1hcmtldFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMubWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1widXNlclwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldHMudXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXtcInByZWRpY3Rpb25cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLnByZWRpY3Rpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjE1MHB4XCIsIG1hcmdpbkxlZnQ6IFwiMjRweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJvd3NPblBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVSb3dzQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMTBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgcm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtcIjI1XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI1IHJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17XCI1MFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMTAwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e1wiMjAwXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMCByb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUZpbHRlciA9PSBcInByZWRpY3Rpb25cIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3BtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uYXNzZXQuaWQuc3BsaXQoXCIuXCIpWzJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9tYXJrZXQvJHtpdGVtLm1hcmtldElEfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaGVhZGVyLmV4Y2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2Fzc2V0LyR7aXRlbS5hc3NldC5zeW1ib2x9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25kaXRpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwcHggMjBweCA1cHggMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxOHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwIDIwcHggNXB4IDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjE4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pc3N1ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmR5bmFtaWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3VycmVudF9zdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXhwaXJ5ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXhwaXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjE2cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dLZXk9XCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXRzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhc3NldHM6IHt9XG59O1xuXG5Bc3NldHMucHJvcFR5cGVzID0ge1xuICAgIGFzc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgQXNzZXRzIGZyb20gXCIuL0Fzc2V0c1wiO1xyXG5cclxuY2xhc3MgQXNzZXRzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tBc3NldFN0b3JlLCBTZXR0aW5nc1N0b3JlXX1cclxuICAgICAgICAgICAgICAgIGluamVjdD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0cztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlck1QQTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbHRlck1QQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJVSUE6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWx0ZXJVSUFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBc3NldHMgLz5cclxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNzZXRzQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQmxvY2tjaGFpbkFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQmxvY2tjaGFpbkFjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9ybWF0dGVkRGF0ZX0gZnJvbSBcInJlYWN0LWludGxcIjtcbmltcG9ydCBPcGVyYXRpb24gZnJvbSBcIi4uL0Jsb2NrY2hhaW4vT3BlcmF0aW9uXCI7XG5pbXBvcnQgTGlua1RvV2l0bmVzc0J5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvV2l0bmVzc0J5SWRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25DaGFydCBmcm9tIFwiLi9UcmFuc2FjdGlvbkNoYXJ0XCI7XG5pbXBvcnQgQmxvY2t0aW1lQ2hhcnQgZnJvbSBcIi4vQmxvY2t0aW1lQ2hhcnRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgVGltZUFnbyBmcm9tIFwiLi4vVXRpbGl0eS9UaW1lQWdvXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBQcyBmcm9tIFwicGVyZmVjdC1zY3JvbGxiYXJcIjtcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xuXG5yZXF1aXJlKFwiLi4vQmxvY2tjaGFpbi9qc29uLWluc3BlY3Rvci5zY3NzXCIpO1xuXG5jbGFzcyBCbG9ja1RpbWVBZ28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5ibG9ja1RpbWUgIT09IHRoaXMucHJvcHMuYmxvY2tUaW1lO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtibG9ja1RpbWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBsZXQgdGltZVBhc3NlZCA9IERhdGUubm93KCkgLSBibG9ja1RpbWU7XG4gICAgICAgIGxldCB0aW1lUGFzc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShibG9ja1RpbWUpLmdldFRpbWUoKTtcblxuICAgICAgICBsZXQgdGV4dENsYXNzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgICAgIFwidHh0bGFiZWxcIixcbiAgICAgICAgICAgIHtzdWNjZXNzOiB0aW1lUGFzc2VkIDw9IDYwMDB9LFxuICAgICAgICAgICAge2luZm86IHRpbWVQYXNzZWQgPiA2MDAwICYmIHRpbWVQYXNzZWQgPD0gMTUwMDB9LFxuICAgICAgICAgICAge3dhcm5pbmc6IHRpbWVQYXNzZWQgPiAxNTAwMCAmJiB0aW1lUGFzc2VkIDw9IDI1MDAwfSxcbiAgICAgICAgICAgIHtlcnJvcjogdGltZVBhc3NlZCA+IDI1MDAwfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBibG9ja1RpbWUgPyAoXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXt0ZXh0Q2xhc3N9PlxuICAgICAgICAgICAgICAgIDxUaW1lQWdvIHRpbWU9e2Jsb2NrVGltZX0gLz5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICkgOiBudWxsO1xuICAgIH1cbn1cblxuY2xhc3MgQmxvY2tzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCIsXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogXCIyLjEuMFwiLFxuICAgICAgICBsYXRlc3RCbG9ja3M6IHt9LFxuICAgICAgICBhc3NldHM6IHt9LFxuICAgICAgICBhY2NvdW50czoge30sXG4gICAgICAgIGhlaWdodDogMVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogZmFsc2UsXG4gICAgICAgICAgICBvcGVyYXRpb25zSGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgYmxvY2tzSGVpZ2h0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0ID0gdGhpcy5fdXBkYXRlSGVpZ2h0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2dldEJsb2NrKGhlaWdodCwgbWF4QmxvY2spIHtcbiAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0LCAxMCk7XG4gICAgICAgICAgICBCbG9ja2NoYWluQWN0aW9ucy5nZXRMYXRlc3QoaGVpZ2h0LCBtYXhCbG9jayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl91cGRhdGVIZWlnaHQsIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fdXBkYXRlSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5sYXRlc3RCbG9ja3Muc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldEluaXRpYWxCbG9ja3MoKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5hbmltYXRlRW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF4QmxvY2sgPSBuZXh0UHJvcHMuZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMubGF0ZXN0QmxvY2tzLnNpemUgPj0gMjAgJiZcbiAgICAgICAgICAgIG5leHRQcm9wcy5keW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIikgIT09XG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmxhdGVzdEJsb2Nrcy5nZXQoMCkuaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0QmxvY2sobWF4QmxvY2ssIG1heEJsb2NrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9nZXRJbml0aWFsQmxvY2tzKCk7XG4gICAgICAgIGxldCBvYyA9IHRoaXMucmVmcy5vcGVyYXRpb25zO1xuICAgICAgICBQcy5pbml0aWFsaXplKG9jKTtcbiAgICAgICAgbGV0IGJsb2NrcyA9IHRoaXMucmVmcy5ibG9ja3M7XG4gICAgICAgIFBzLmluaXRpYWxpemUoYmxvY2tzKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5sYXRlc3RCbG9ja3MsIHRoaXMucHJvcHMubGF0ZXN0QmxvY2tzKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUhlaWdodCgpO1xuICAgIH1cblxuICAgIF9nZXRJbml0aWFsQmxvY2tzKCkge1xuICAgICAgICBsZXQgbWF4QmxvY2sgPSBwYXJzZUludChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpLFxuICAgICAgICAgICAgMTBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG1heEJsb2NrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTk7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxhdGVzdEJsb2Nrcy5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucHJvcHMubGF0ZXN0QmxvY2tzLnNpemU7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubGF0ZXN0QmxvY2tzLmdldChqKS5pZCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhCbG9jayAtIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0QmxvY2sobWF4QmxvY2sgLSBpLCBtYXhCbG9jayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3VwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckhlaWdodCA9IHRoaXMucmVmcy5vdXRlcldyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgb3BlcmF0aW9uc1RleHRIZWlnaHQgPSB0aGlzLnJlZnMub3BlcmF0aW9uc1RleHQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgYmxvY2tzVGV4dEhlaWdodCA9IHRoaXMucmVmcy5ibG9ja3NUZXh0Lm9mZnNldEhlaWdodDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbnNIZWlnaHQ6IGNvbnRhaW5lckhlaWdodCAtIG9wZXJhdGlvbnNUZXh0SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGJsb2Nrc0hlaWdodDogY29udGFpbmVySGVpZ2h0IC0gYmxvY2tzVGV4dEhlaWdodFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMucHNVcGRhdGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwc1VwZGF0ZSgpIHtcbiAgICAgICAgbGV0IG9jID0gdGhpcy5yZWZzLm9wZXJhdGlvbnM7XG4gICAgICAgIFBzLnVwZGF0ZShvYyk7XG4gICAgICAgIGxldCBibG9ja3MgPSB0aGlzLnJlZnMuYmxvY2tzO1xuICAgICAgICBQcy51cGRhdGUoYmxvY2tzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBsYXRlc3RCbG9ja3MsXG4gICAgICAgICAgICBsYXRlc3RUcmFuc2FjdGlvbnMsXG4gICAgICAgICAgICBnbG9iYWxPYmplY3QsXG4gICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QsXG4gICAgICAgICAgICBjb3JlQXNzZXRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YmxvY2tzSGVpZ2h0LCBvcGVyYXRpb25zSGVpZ2h0fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGR5bmFtaWNPYmplY3QgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICBjb3JlQXNzZXQuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICk7XG4gICAgICAgIGxldCBibG9ja3MgPSBudWxsLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25zID0gbnVsbDtcbiAgICAgICAgbGV0IGhlYWRCbG9jayA9IG51bGw7XG4gICAgICAgIGxldCB0cnhDb3VudCA9IDAsXG4gICAgICAgICAgICBibG9ja0NvdW50ID0gbGF0ZXN0QmxvY2tzLnNpemUsXG4gICAgICAgICAgICB0cnhQZXJTZWMgPSAwLFxuICAgICAgICAgICAgYmxvY2tUaW1lcyA9IFtdLFxuICAgICAgICAgICAgYXZnVGltZSA9IDA7XG5cbiAgICAgICAgaWYgKGxhdGVzdEJsb2NrcyAmJiBsYXRlc3RCbG9ja3Muc2l6ZSA+PSAyMCkge1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzVGltZTtcblxuICAgICAgICAgICAgbGV0IGxhc3RCbG9jaywgZmlyc3RCbG9jaztcblxuICAgICAgICAgICAgLy8gTWFwIG91dCB0aGUgYmxvY2sgdGltZXMgZm9yIHRoZSBsYXRlc3QgYmxvY2tzIGFuZCBjb3VudCB0aGUgbnVtYmVyIG9mIHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgbGF0ZXN0QmxvY2tzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoYSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSB1c2UgY29uc2VjdXRpdmUgYmxvY2tzIGNvdW50aW5nIGJhY2sgZnJvbSBoZWFkIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmlkID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpIC0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIC0gYi5pZDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChibG9jaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ4Q291bnQgKz0gYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lcy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jay5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmxvY2sudGltZXN0YW1wIC0gcHJldmlvdXNUaW1lKSAvIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJsb2NrID0gYmxvY2sudGltZXN0YW1wO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RCbG9jayA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1RpbWUgPSBibG9jay50aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE91dHB1dCBibG9jayByb3dzIGZvciB0aGUgbGFzdCAyMCBibG9ja3NcbiAgICAgICAgICAgIGJsb2NrcyA9IGxhdGVzdEJsb2Nrc1xuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmlkIC0gYS5pZDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50YWtlKDIwKVxuICAgICAgICAgICAgICAgIC5tYXAoYmxvY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YmxvY2suaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2AvYmxvY2svJHtibG9jay5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7dXRpbHMuZm9ybWF0X251bWJlcihibG9jay5pZCwgMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtibG9jay50aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJ0aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb1dpdG5lc3NCeUlkIHdpdG5lc3M9e2Jsb2NrLndpdG5lc3N9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG5cbiAgICAgICAgICAgIGxldCB0cnhJbmRleCA9IDA7XG5cbiAgICAgICAgICAgIHRyYW5zYWN0aW9ucyA9IGxhdGVzdFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmJsb2NrX251bSAtIGEuYmxvY2tfbnVtO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRha2UoMjApXG4gICAgICAgICAgICAgICAgLm1hcCh0cnggPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3BJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cngub3BlcmF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChvcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyeEluZGV4ID4gMTUpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHJ4SW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wPXtvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dHJ4Lm9wZXJhdGlvbl9yZXN1bHRzW29wSW5kZXgrK119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jaz17dHJ4LmJsb2NrX251bX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGZWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3BMYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtcIjEuMi4wXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVBlbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcblxuICAgICAgICAgICAgaGVhZEJsb2NrID0gbGF0ZXN0QmxvY2tzLmZpcnN0KCkudGltZXN0YW1wO1xuICAgICAgICAgICAgYXZnVGltZSA9IGJsb2NrVGltZXMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCwgaWR4LCBhcnJheSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGN1cnJlbnRbMV0gLyBhcnJheS5sZW5ndGg7XG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICAgICAgdHJ4UGVyU2VjID0gdHJ4Q291bnQgLyAoKGxhc3RCbG9jayAtIGZpcnN0QmxvY2spIC8gMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9XCJvdXRlcldyYXBwZXJcIiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgey8qIEZpcnN0IHJvdyBvZiBzdGF0cyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWNlbnRlciBncmlkLWJsb2NrIHNocmluayBzbWFsbC1ob3Jpem9udGFsIGJsb2Nrcy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmN1cnJlbnRfYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmxhc3RfYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxvY2tUaW1lQWdvIGJsb2NrVGltZT17aGVhZEJsb2NrfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MudHJ4X3Blcl9zZWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3V0aWxzLmZvcm1hdF9udW1iZXIodHJ4UGVyU2VjLCAyKX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtNiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYXZnX2NvbmZfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXRpbHMuZm9ybWF0X251bWJlcihhdmdUaW1lIC8gMiwgMil9czwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogU2Vjb25kIHJvdyBvZiBzdGF0cyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWNlbnRlciBncmlkLWJsb2NrIHNocmluayBzbWFsbC1ob3Jpem9udGFsICBibG9ja3Mtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBjbGVhci1maXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MuYWN0aXZlX3dpdG5lc3Nlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0eHRsYWJlbCBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxPYmplY3QuZ2V0KFwiYWN0aXZlX3dpdG5lc3Nlc1wiKS5zaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHh0bGFiZWwgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QuZ2V0KFwiYWN0aXZlX2NvbW1pdHRlZV9tZW1iZXJzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTYgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy50cnhfcGVyX2Jsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeENvdW50IC8gYmxvY2tDb3VudCB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC02IG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBjbGVhci1maXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9ja3MucmVjZW50bHlfbWlzc2VkX2Jsb2Nrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRsYWJlbCB3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIjEwMFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5HbG9iYWxPYmplY3QuZ2V0KFwicmVjZW50bHlfbWlzc2VkX2NvdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogVGhpcmQgcm93OiBncmFwaHMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1jZW50ZXIgZ3JpZC1ibG9jayBzaHJpbmsgc21hbGwtdmVydGljYWwgbWVkaXVtLWhvcml6b250YWwgYmxvY2tzLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdGV4dC1jZW50ZXIgc21hbGwtMTIgbWVkaXVtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IGNsZWFyLWZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuY3VycmVudF9zdXBwbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNPYmplY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWNPYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfc3VwcGx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlQXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB0ZXh0LWNlbnRlciBzbWFsbC0xMiBtZWRpdW0tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2Nrcy5ibG9ja190aW1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsb2NrdGltZUNoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZXM9e2Jsb2NrVGltZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRfYmxvY2tfbnVtYmVyPXtkeW5HbG9iYWxPYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkX2Jsb2NrX251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTEyIG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHh0bGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLnRyeF9wZXJfYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvbkNoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17bGF0ZXN0QmxvY2tzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkX2Jsb2NrPXtkeW5HbG9iYWxPYmplY3QuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkX2Jsb2NrX251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHRleHQtY2VudGVyIHNtYWxsLTEyIG1lZGl1bS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvdyBjbGVhci1maXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eHRsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LnN0ZWFsdGhfc3VwcGx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInR4dGxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljT2JqZWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25maWRlbnRpYWxfc3VwcGx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlQXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogRm91cnRoIHJvdzogdHJhbnNhY3Rpb25zIGFuZCBibG9ja3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiByZWY9XCJ0cmFuc2FjdGlvbnNCbG9ja1wiIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0xMiBtZWRpdW0tNiB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3cgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cIm9wZXJhdGlvbnNUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucmVjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBmaXhlZC1oZWlnaHQtMnJlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC52b3Rlcy5pbmZvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBvcGVyYXRpb25zSGVpZ2h0IHx8IFwiNDAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIm9wZXJhdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGZpeGVkLWhlaWdodC0ycmVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+e3RyYW5zYWN0aW9uc308L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1lZGl1bS02IHNob3ctZm9yLW1lZGl1bSB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDAsIHBhZGRpbmdMZWZ0OiA1fX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93IGdlbmVyaWMtYm9yZGVyZWQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9XCJibG9ja3NUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLnJlY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBibG9ja3NIZWlnaHQgfHwgXCI0MzhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBmaXhlZC1oZWlnaHQtMnJlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay53aXRuZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwibmV3cm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2tzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQmxvY2tzID0gQmluZFRvQ2hhaW5TdGF0ZShCbG9ja3MsIHtzaG93X2xvYWRlcjogdHJ1ZX0pO1xuQmxvY2tzID0gQXNzZXRXcmFwcGVyKEJsb2Nrcywge1xuICAgIHByb3BOYW1lczogW1wiY29yZUFzc2V0XCJdLFxuICAgIHdpdGhEeW5hbWljOiB0cnVlXG59KTtcbmV4cG9ydCBkZWZhdWx0IEJsb2NrcztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJsb2NrY2hhaW5TdG9yZSBmcm9tIFwic3RvcmVzL0Jsb2NrY2hhaW5TdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBCbG9ja3MgZnJvbSBcIi4vQmxvY2tzXCI7XHJcblxyXG5jbGFzcyBCbG9ja3NDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0Jsb2NrY2hhaW5TdG9yZV19XHJcbiAgICAgICAgICAgICAgICBpbmplY3Q9e3tcclxuICAgICAgICAgICAgICAgICAgICBsYXRlc3RCbG9ja3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TdG9yZS5nZXRTdGF0ZSgpLmxhdGVzdEJsb2NrcztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxhdGVzdFRyYW5zYWN0aW9uczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmxvY2tjaGFpblN0b3JlLmdldFN0YXRlKCkubGF0ZXN0VHJhbnNhY3Rpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCbG9ja3MgLz5cclxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvY2tzQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdEhpZ2hjaGFydCBmcm9tIFwicmVhY3QtaGlnaGNoYXJ0c1wiO1xyXG5pbXBvcnQge3Rha2VSaWdodH0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcblxyXG5jbGFzcyBCbG9ja3RpbWVDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5ibG9ja1RpbWVzLmxlbmd0aCA8IDE5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2hhcnQgPSB0aGlzLnJlZnMuY2hhcnQgPyB0aGlzLnJlZnMuY2hhcnQuY2hhcnQgOiBudWxsO1xyXG4gICAgICAgIGlmIChjaGFydCkge1xyXG4gICAgICAgICAgICBsZXQge2Jsb2NrVGltZXMsIGNvbG9yc30gPSB0aGlzLl9nZXREYXRhKG5leHRQcm9wcyk7XHJcbiAgICAgICAgICAgIGxldCBzZXJpZXMgPSBjaGFydC5zZXJpZXNbMF07XHJcbiAgICAgICAgICAgIGxldCBmaW5hbFZhbHVlID0gc2VyaWVzLnhEYXRhW3Nlcmllcy54RGF0YS5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZXJpZXMueERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGFydCwgXCJzZXJpZXM6XCIsIHNlcmllcy5kYXRhLCBcImZpbmFsVmFsdWU6XCIsIGZpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYmxvY2tUaW1lcy5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRbMF0gPiBmaW5hbFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5hZGRQb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXMueERhdGEubGVuZ3RoID49IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnQub3B0aW9ucy5wbG90T3B0aW9ucy5jb2x1bW4uY29sb3JzID0gY29sb3JzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYXJ0LnJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuYmxvY2tUaW1lc1tuZXh0UHJvcHMuYmxvY2tUaW1lcy5sZW5ndGggLSAxXVswXSAhPT1cclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmxvY2tUaW1lc1t0aGlzLnByb3BzLmJsb2NrVGltZXMubGVuZ3RoIC0gMV1bMF0gfHxcclxuICAgICAgICAgICAgbmV4dFByb3BzLmJsb2NrVGltZXMubGVuZ3RoICE9PSB0aGlzLnByb3BzLmJsb2NrVGltZXMubGVuZ3RoXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQge2Jsb2NrVGltZXMsIGhlYWRfYmxvY2t9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgYmxvY2tUaW1lcy5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhWzBdID49IGhlYWRfYmxvY2sgLSAzMDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGJsb2NrVGltZXMgJiYgYmxvY2tUaW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYmxvY2tUaW1lcyA9IHRha2VSaWdodChibG9ja1RpbWVzLCAzMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29sb3JzID0gYmxvY2tUaW1lcy5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnlbMV0gPD0gNSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiIzUwRDJDMlwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5WzFdIDw9IDEwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjQTBEM0U4XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnlbMV0gPD0gMjApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiNGQ0FCNTNcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiNkZWI4NjlcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBibG9ja1RpbWVzLFxyXG4gICAgICAgICAgICBjb2xvcnNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Jsb2NrVGltZXMsIGNvbG9yc30gPSB0aGlzLl9nZXREYXRhKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgICBsZXQgdG9vbHRpcExhYmVsID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhwbG9yZXIuYmxvY2tzLmJsb2NrX3RpbWVcIik7XHJcblxyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAwLCAwLCAwKVwiLFxyXG4gICAgICAgICAgICAgICAgc3BhY2luZzogWzAsIDAsIDUsIDBdLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYW5nZVNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuYXZpZ2F0b3I6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc2hhcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXBMYWJlbCArIFwiOiBcIiArIHRoaXMueSArIFwic1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJsb2NrIHRpbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBibG9ja1RpbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MEQyQzJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JpZExpbmVXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcmljZUluZGljYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluUG9pbnRMZW5ndGg6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JCeVBvaW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYmxvY2tUaW1lcy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgIDxSZWFjdEhpZ2hjaGFydCByZWY9XCJjaGFydFwiIGNvbmZpZz17Y29uZmlnfSAvPlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja3RpbWVDaGFydDtcclxuIiwiaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IHtUYWJsZX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL1V0aWxpdHkvU2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuXHJcbmNsYXNzIENvbW1pdHRlZU1lbWJlckxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBjb21taXR0ZWVfbWVtYmVyczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdHNMaXN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtjb21taXR0ZWVfbWVtYmVycywgbWVtYmVyc0xpc3R9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBudWxsO1xyXG5cclxuICAgICAgICBsZXQgcmFua3MgPSB7fTtcclxuXHJcbiAgICAgICAgY29tbWl0dGVlX21lbWJlcnNcclxuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZW1iZXJzTGlzdC5pbmRleE9mKGEuZ2V0KFwiaWRcIikpICE9PSAtMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZvckVhY2goKGMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtzW2MuZ2V0KFwiaWRcIildID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNvbW1pdHRlZV9tZW1iZXJzLmxlbmd0aCA+IDAgJiYgY29tbWl0dGVlX21lbWJlcnNbMV0pIHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZSA9IGNvbW1pdHRlZV9tZW1iZXJzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwiY29tbWl0dGVlX21lbWJlcl9hY2NvdW50XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfZGF0YSA9IENoYWluU3RvcmUuZ2V0Q29tbWl0dGVlTWVtYmVyQnlJZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudF9kYXRhKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwibmFtZVwiKS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyIHx8IFwiXCIpICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm1hcChhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImNvbW1pdHRlZV9tZW1iZXJfYWNjb3VudFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50X2RhdGEgPSBDaGFpblN0b3JlLmdldENvbW1pdHRlZU1lbWJlckJ5SWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwiaWRcIilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGEuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbms6IHJhbmtzW2EuZ2V0KFwiaWRcIildLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhY2NvdW50LmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvdGVzOiBhY2NvdW50X2RhdGEuZ2V0KFwidG90YWxfdm90ZXNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXRpbHMuc2FuaXRpemUoYWNjb3VudF9kYXRhLmdldChcInVybFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiI1wiLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInJhbmtcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5yYW5rID4gYi5yYW5rID8gMSA6IGEucmFuayA8IGIucmFuayA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk5BTUVcIixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IDEgOiBhLm5hbWUgPCBiLm5hbWUgPyAtMSA6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJ2b3Rlc1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVk9URVNcIixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ2b3Rlc1wiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS52b3RlcyA+IGIudm90ZXMgPyAxIDogYS52b3RlcyA8IGIudm90ZXMgPyAtMSA6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJ1cmxcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIldFQlBBR0VcIixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ1cmxcIixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5Db21taXR0ZWVNZW1iZXJMaXN0ID0gQmluZFRvQ2hhaW5TdGF0ZShDb21taXR0ZWVNZW1iZXJMaXN0LCB7XHJcbiAgICBzaG93X2xvYWRlcjogdHJ1ZVxyXG59KTtcclxuXHJcbmNsYXNzIENvbW1pdHRlZU1lbWJlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBnbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGdsb2JhbE9iamVjdDogXCIyLjAuMFwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZpbHRlckNvbW1pdHRlZU1lbWJlcjogcHJvcHMuZmlsdGVyQ29tbWl0dGVlTWVtYmVyIHx8IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLmdsb2JhbE9iamVjdCwgdGhpcy5wcm9wcy5nbG9iYWxPYmplY3QpIHx8XHJcbiAgICAgICAgICAgIG5leHRTdGF0ZS5maWx0ZXJDb21taXR0ZWVNZW1iZXIgIT09XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlckNvbW1pdHRlZU1lbWJlciB8fFxyXG4gICAgICAgICAgICBuZXh0U3RhdGUuY2FyZFZpZXcgIT09IHRoaXMuc3RhdGUuY2FyZFZpZXdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkZpbHRlcihlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyQ29tbWl0dGVlTWVtYmVyOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpfSk7XHJcblxyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGZpbHRlckNvbW1pdHRlZU1lbWJlcjogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2dsb2JhbE9iamVjdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGdsb2JhbE9iamVjdCA9IGdsb2JhbE9iamVjdC50b0pTKCk7XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVDb21taXR0ZWVNZW1iZXJzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGdsb2JhbE9iamVjdC5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnMpIHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbE9iamVjdC5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29tbWl0dGVlTWVtYmVycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnNba2V5XVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIud2l0bmVzc2VzLmZpbHRlcl9ieV9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlckNvbW1pdHRlZU1lbWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21taXR0ZWVNZW1iZXJMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlckNvbW1pdHRlZU1lbWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21taXR0ZWVfbWVtYmVycz17SW1tdXRhYmxlLkxpc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5hY3RpdmVfY29tbWl0dGVlX21lbWJlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnNMaXN0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV9jb21taXR0ZWVfbWVtYmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQ29tbWl0dGVlTWVtYmVycyA9IEJpbmRUb0NoYWluU3RhdGUoQ29tbWl0dGVlTWVtYmVycyk7XHJcblxyXG5jbGFzcyBDb21taXR0ZWVNZW1iZXJzU3RvcmVXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPENvbW1pdHRlZU1lbWJlcnMgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5Db21taXR0ZWVNZW1iZXJzU3RvcmVXcmFwcGVyID0gY29ubmVjdChcclxuICAgIENvbW1pdHRlZU1lbWJlcnNTdG9yZVdyYXBwZXIsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRWaWV3OiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgICAgICBcImNhcmRWaWV3Q29tbWl0dGVlXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJDb21taXR0ZWVNZW1iZXI6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmlsdGVyQ29tbWl0dGVlTWVtYmVyXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21taXR0ZWVNZW1iZXJzU3RvcmVXcmFwcGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2l0bmVzc2VzIGZyb20gXCIuL1dpdG5lc3Nlc1wiO1xuaW1wb3J0IENvbW1pdHRlZU1lbWJlcnMgZnJvbSBcIi4vQ29tbWl0dGVlTWVtYmVyc1wiO1xuaW1wb3J0IEZlZXNDb250YWluZXIgZnJvbSBcIi4uL0Jsb2NrY2hhaW4vRmVlc0NvbnRhaW5lclwiO1xuaW1wb3J0IEJsb2Nrc0NvbnRhaW5lciBmcm9tIFwiLi9CbG9ja3NDb250YWluZXJcIjtcbmltcG9ydCBBc3NldHNDb250YWluZXIgZnJvbSBcIi4vQXNzZXRzQ29udGFpbmVyXCI7XG5pbXBvcnQgQWNjb3VudHNDb250YWluZXIgZnJvbSBcIi4vQWNjb3VudHNDb250YWluZXJcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBNYXJrZXRzQ29udGFpbmVyIGZyb20gXCIuLi9FeGNoYW5nZS9NYXJrZXRzQ29udGFpbmVyXCI7XG5pbXBvcnQge1RhYnN9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgRXhwbG9yZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGFiczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJibG9ja3NcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvYmxvY2tzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5ibG9ja3MudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogQmxvY2tzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXNzZXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2Fzc2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwiZXhwbG9yZXIuYXNzZXRzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEFzc2V0c0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2V4cGxvcmVyL2FjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJleHBsb3Jlci5hY2NvdW50cy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBBY2NvdW50c0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIndpdG5lc3Nlc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci93aXRuZXNzZXNcIixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBcImV4cGxvcmVyLndpdG5lc3Nlcy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBXaXRuZXNzZXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjb21taXR0ZWVfbWVtYmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9jb21taXR0ZWUtbWVtYmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwiZXhwbG9yZXIuY29tbWl0dGVlX21lbWJlcnMudGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogQ29tbWl0dGVlTWVtYmVyc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hcmtldHNcIixcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZXhwbG9yZXIvbWFya2V0c1wiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IFwibWFya2V0cy50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBNYXJrZXRzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmVlc1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9leHBsb3Jlci9mZWVzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogXCJmZWVzLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEZlZXNDb250YWluZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBvbkNoYW5nZSA9IHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICBhY3RpdmVLZXk9e3RoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWV9XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJ0YWJsZVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogXCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBUYWJDb250ZW50ID0gdGFiLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKHRhYi50cmFuc2xhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0SGlnaGNoYXJ0IGZyb20gXCJyZWFjdC1oaWdoY2hhcnRzXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuXHJcbmNsYXNzIFRyYW5zYWN0aW9uQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuYmxvY2tzLnNpemUgPCAyMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGFydCA9IHRoaXMucmVmcy50cnhfY2hhcnQgPyB0aGlzLnJlZnMudHJ4X2NoYXJ0LmNoYXJ0IDogbnVsbDtcclxuICAgICAgICBpZiAoY2hhcnQgJiYgbmV4dFByb3BzLmJsb2NrcyAhPT0gdGhpcy5wcm9wcy5ibG9ja3MpIHtcclxuICAgICAgICAgICAgbGV0IHt0cnhEYXRhLCBjb2xvcnN9ID0gdGhpcy5fZ2V0RGF0YShuZXh0UHJvcHMpO1xyXG4gICAgICAgICAgICBsZXQgc2VyaWVzID0gY2hhcnQuc2VyaWVzWzBdO1xyXG4gICAgICAgICAgICBsZXQgZmluYWxWYWx1ZSA9IHNlcmllcy54RGF0YVtzZXJpZXMueERhdGEubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0OlwiLCBjaGFydCwgXCJzZXJpZXM6XCIsIHNlcmllcy5kYXRhLCBcImZpbmFsVmFsdWU6XCIsIGZpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoc2VyaWVzLnhEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdHJ4RGF0YS5mb3JFYWNoKHBvaW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRbMF0gPiBmaW5hbFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcy5hZGRQb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXMueERhdGEubGVuZ3RoID49IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhcnQub3B0aW9ucy5wbG90T3B0aW9ucy5jb2x1bW4uY29sb3JzID0gY29sb3JzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYXJ0LnJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5ibG9ja3MgIT09IHRoaXMucHJvcHMuYmxvY2tzIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5oZWFkX2Jsb2NrICE9PSB0aGlzLnByb3BzLmhlYWRfYmxvY2tcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXREYXRhKHByb3BzKSB7XHJcbiAgICAgICAgbGV0IHtibG9ja3MsIGhlYWRfYmxvY2t9ID0gcHJvcHM7XHJcblxyXG4gICAgICAgIGxldCB0cnhEYXRhID0gW107XHJcbiAgICAgICAgbGV0IG1heCA9IDA7XHJcbiAgICAgICAgdHJ4RGF0YSA9IGJsb2Nrc1xyXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPj0gaGVhZF9ibG9jayAtIDMwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgLSBiLmlkO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGFrZUxhc3QoMzApXHJcbiAgICAgICAgICAgIC5tYXAoYmxvY2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgoYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aCwgbWF4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbYmxvY2suaWQsIGJsb2NrLnRyYW5zYWN0aW9ucy5sZW5ndGhdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudG9BcnJheSgpO1xyXG5cclxuICAgICAgICBsZXQgY29sb3JzID0gdHJ4RGF0YS5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVudHJ5OlwiLCBlbnRyeSk7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeVsxXSA8PSA1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIjNTBEMkMyXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnlbMV0gPD0gMTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIiNBMEQzRThcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeVsxXSA8PSAyMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI0ZDQUI1M1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiI2RlYjg2OVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbG9ycyxcclxuICAgICAgICAgICAgdHJ4RGF0YSxcclxuICAgICAgICAgICAgbWF4XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHt0cnhEYXRhLCBjb2xvcnMsIG1heH0gPSB0aGlzLl9nZXREYXRhKHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgICBsZXQgdG9vbHRpcExhYmVsID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICBcImV4cGxvcmVyLmJsb2Nrcy50cmFuc2FjdGlvbnNcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAwLCAwLCAwKVwiLFxyXG4gICAgICAgICAgICAgICAgc3BhY2luZzogWzAsIDAsIDUsIDBdLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlZGl0czoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYW5nZVNlbGVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuYXZpZ2F0b3I6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc2hhcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXBMYWJlbCArIFwiOiBcIiArIHRoaXMueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUcmFuc2FjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnhEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MEQyQzJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIG1heDogTWF0aC5tYXgoMS41LCBtYXggKyAwLjUpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmlkTGluZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByaWNlSW5kaWNhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5Qb2ludExlbmd0aDogNSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckJ5UG9pbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0cnhEYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgPFJlYWN0SGlnaGNoYXJ0IHJlZj1cInRyeF9jaGFydFwiIGNvbmZpZz17Y29uZmlnfSAvPlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkNoYXJ0O1xyXG4iLCJpbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBUaW1lQWdvIGZyb20gXCIuLi9VdGlsaXR5L1RpbWVBZ29cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7VGFibGUsIEljb24sIElucHV0LCBQb3BvdmVyfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL1V0aWxpdHkvU2VhcmNoSW5wdXRcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5cbnJlcXVpcmUoXCIuL3dpdG5lc3Nlcy5zY3NzXCIpO1xuXG5jbGFzcyBXaXRuZXNzUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB3aXRuZXNzOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIF9vblJvd0NsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2FjY291bnQvJHt0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwibmFtZVwiKX1gKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyAgICAgQ2hhaW5TdG9yZS51blN1YkZyb20oXCJ3aXRuZXNzZXNcIiwgQ2hhaW5TdG9yZS5nZXRXaXRuZXNzQnlJZCggdGhpcy5wcm9wcy53aXRuZXNzLmdldChcImlkXCIpICkuZ2V0KFwiaWRcIikpO1xuICAgIC8vIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt3aXRuZXNzLCBpc0N1cnJlbnQsIHJhbmt9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHdpdG5lc3NfZGF0YSA9IENoYWluU3RvcmUuZ2V0V2l0bmVzc0J5SWQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwiaWRcIilcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCF3aXRuZXNzX2RhdGEpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgdG90YWxfdm90ZXMgPSB3aXRuZXNzX2RhdGEuZ2V0KFwidG90YWxfdm90ZXNcIik7XG5cbiAgICAgICAgbGV0IHdpdG5lc3NfYXNsb3QgPSB3aXRuZXNzX2RhdGEuZ2V0KFwibGFzdF9hc2xvdFwiKTtcbiAgICAgICAgbGV0IGNvbG9yID0ge307XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vc3RfcmVjZW50IC0gd2l0bmVzc19hc2xvdCA+IDEwMCkge1xuICAgICAgICAgICAgY29sb3IgPSB7Ym9yZGVyTGVmdDogXCIxcHggc29saWQgI0ZDQUI1M1wifTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yID0ge2JvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICM1MEQyQzJcIn07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhc3RfYXNsb3RfdGltZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgRGF0ZS5ub3coKSAtXG4gICAgICAgICAgICAgICAgKHRoaXMucHJvcHMubW9zdF9yZWNlbnQgLSB3aXRuZXNzX2FzbG90KSAqXG4gICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4wLjBcIikuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJsb2NrX2ludGVydmFsXCJcbiAgICAgICAgICAgICAgICAgICAgXSkgKlxuICAgICAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRDbGFzcyA9IGlzQ3VycmVudCA/IFwiYWN0aXZlLXdpdG5lc3NcIiA6IFwiXCI7XG5cbiAgICAgICAgbGV0IG1pc3NlZCA9IHdpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF9taXNzZWRcIik7XG4gICAgICAgIGxldCBtaXNzZWRDbGFzcyA9IGNsYXNzTmFtZXMoXG4gICAgICAgICAgICBcInR4dGxhYmVsXCIsXG4gICAgICAgICAgICB7c3VjY2VzczogbWlzc2VkIDw9IDUwMH0sXG4gICAgICAgICAgICB7aW5mbzogbWlzc2VkID4gNTAwICYmIG1pc3NlZCA8PSAxMjUwfSxcbiAgICAgICAgICAgIHt3YXJuaW5nOiBtaXNzZWQgPiAxMjUwICYmIG1pc3NlZCA8PSAyMDAwfSxcbiAgICAgICAgICAgIHtlcnJvcjogbWlzc2VkID49IDIwMH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17Y3VycmVudENsYXNzfSBvbkNsaWNrPXt0aGlzLl9vblJvd0NsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDx0ZD57cmFua308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17Y29sb3J9Pnt3aXRuZXNzLmdldChcIm5hbWVcIil9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxUaW1lQWdvIHRpbWU9e25ldyBEYXRlKGxhc3RfYXNsb3RfdGltZSl9IC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3dpdG5lc3NfZGF0YS5nZXQoXCJsYXN0X2NvbmZpcm1lZF9ibG9ja19udW1cIil9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXttaXNzZWRDbGFzc30+e21pc3NlZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3dpdG5lc3NfZGF0YS5nZXQoXCJ0b3RhbF92b3Rlc1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PVwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldD17NX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5XaXRuZXNzUm93ID0gQmluZFRvQ2hhaW5TdGF0ZShXaXRuZXNzUm93KTtcbldpdG5lc3NSb3cgPSB3aXRoUm91dGVyKFdpdG5lc3NSb3cpO1xuXG5jbGFzcyBXaXRuZXNzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgd2l0bmVzc2VzOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0c0xpc3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNvcnRCeTogXCJyYW5rXCIsXG4gICAgICAgICAgICBpbnZlcnNlU29ydDogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQmxvY2tJZENsaWNrID0gdGhpcy5oYW5kbGVCbG9ja0lkQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfc2V0U29ydChmaWVsZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNvcnRCeTogZmllbGQsXG4gICAgICAgICAgICBpbnZlcnNlU29ydDpcbiAgICAgICAgICAgICAgICBmaWVsZCA9PT0gdGhpcy5zdGF0ZS5zb3J0QnlcbiAgICAgICAgICAgICAgICAgICAgPyAhdGhpcy5zdGF0ZS5pbnZlcnNlU29ydFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuc3RhdGUuaW52ZXJzZVNvcnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQmxvY2tJZENsaWNrKGJsb2NrSWQpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYmxvY2svJHtibG9ja0lkfWApO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt3aXRuZXNzZXMsIGN1cnJlbnQsIGNhcmRWaWV3LCB3aXRuZXNzTGlzdH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge3NvcnRCeSwgaW52ZXJzZVNvcnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IG1vc3RfcmVjZW50X2FzbG90ID0gMDtcbiAgICAgICAgbGV0IHJhbmtzID0ge307XG5cbiAgICAgICAgd2l0bmVzc2VzXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB3aXRuZXNzTGlzdC5pbmRleE9mKGEuZ2V0KFwiaWRcIikpICE9PSAtMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhICYmIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGIuZ2V0KFwidG90YWxfdm90ZXNcIiksIDEwKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChhLmdldChcInRvdGFsX3ZvdGVzXCIpLCAxMClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goKHcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSB3LmdldChcImxhc3RfYXNsb3RcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3N0X3JlY2VudF9hc2xvdCA8IHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vc3RfcmVjZW50X2FzbG90ID0gcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJhbmtzW3cuZ2V0KFwiaWRcIildID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gW107XG4gICAgICAgIGlmICh3aXRuZXNzZXMubGVuZ3RoID4gMCAmJiB3aXRuZXNzZXNbMV0pIHtcbiAgICAgICAgICAgIGRhdGFTb3VyY2UgPSB3aXRuZXNzZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgd2l0bmVzcyA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXQoXCJ3aXRuZXNzX2FjY291bnRcIilcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3aXRuZXNzKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpdG5lc3NfZGF0YSA9IENoYWluU3RvcmUuZ2V0V2l0bmVzc0J5SWQoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRuZXNzLmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghd2l0bmVzc19kYXRhKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB3aXRuZXNzLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmFtZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3aXRuZXNzID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcIndpdG5lc3NfYWNjb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpdG5lc3NfZGF0YSA9IENoYWluU3RvcmUuZ2V0V2l0bmVzc0J5SWQoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRuZXNzLmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpdG5lc3NfYXNsb3QgPSB3aXRuZXNzX2RhdGEuZ2V0KFwibGFzdF9hc2xvdFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdF9hc2xvdF90aW1lID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlLm5vdygpIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5jdXJyZW50X2FzbG90IC0gd2l0bmVzc19hc2xvdCkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldE9iamVjdChcIjIuMC4wXCIpLmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1ldGVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJibG9ja19pbnRlcnZhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYS5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogd2l0bmVzcy5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuazogcmFua3NbYS5nZXQoXCJpZFwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB3aXRuZXNzLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduaW5nX2tleTogd2l0bmVzc19kYXRhLmdldChcInNpZ25pbmdfa2V5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1dGlscy5zYW5pdGl6ZSh3aXRuZXNzX2RhdGEuZ2V0KFwidXJsXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RDb25maXJtZWRCbG9jazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB3aXRuZXNzX2RhdGEuZ2V0KFwibGFzdF9jb25maXJtZWRfYmxvY2tfbnVtXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbGFzdF9hc2xvdF90aW1lLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrc01pc3NlZDogd2l0bmVzc19kYXRhLmdldChcInRvdGFsX21pc3NlZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvdGVzOiB3aXRuZXNzX2RhdGEuZ2V0KFwidG90YWxfdm90ZXNcIilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybFZhbGlkID0gaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWdleCA9IC8oaHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqKT8oXFxTKykoOlswLTldKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJSFcXC1cXC9dKSk/LztcbiAgICAgICAgICAgIHJldHVybiByZWdleC50ZXN0KGl0ZW0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHVybFJlbmRlciA9IGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1wiaG92ZXJcIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJsaW5rXCIgLz5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGtleVJlbmRlciA9IGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBjb250ZW50PXs8c3Bhbj57aXRlbX08L3NwYW4+fSB0cmlnZ2VyPXtcImhvdmVyXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwia2V5XCIgLz5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIiNcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInJhbmtcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnJhbmsgPiBiLnJhbmsgPyAxIDogYS5yYW5rIDwgYi5yYW5rID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJOQU1FXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWUgPyAxIDogYS5uYW1lIDwgYi5uYW1lID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInVybFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVSTFwiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ1cmxcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaXRlbSAmJiB1cmxWYWxpZChpdGVtKSAmJiB1cmxSZW5kZXIoaXRlbSkpIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImxhc3RDb25maXJtZWRCbG9ja1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxBU1QgQ09ORklSTUVEIEJMT0NLXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImxhc3RDb25maXJtZWRCbG9ja1wiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1pbldpZHRoOiBcIjEwMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmxvY2tJZENsaWNrKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7TnVtYmVyKGl0ZW0uaWQpLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVBZ28gdGltZT17bmV3IERhdGUoaXRlbS50aW1lc3RhbXApfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmxhc3RDb25maXJtZWRCbG9jay50aW1lc3RhbXAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgYi5sYXN0Q29uZmlybWVkQmxvY2sudGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEubGFzdENvbmZpcm1lZEJsb2NrLnRpbWVzdGFtcCA8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGIubGFzdENvbmZpcm1lZEJsb2NrLnRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYmxvY2tzTWlzc2VkXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQkxPQ0tTIE1JU1NFRFwiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJibG9ja3NNaXNzZWRcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja3NNaXNzZWRDbGFzc05hbWUgPSBjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eHRsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge3N1Y2Nlc3M6IGl0ZW0gPD0gNTAwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmZvOiBpdGVtID4gNTAwICYmIGl0ZW0gPD0gMTI1MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7d2FybmluZzogaXRlbSA+IDEyNTAgJiYgaXRlbSA8PSAyMDAwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcjogaXRlbSA+PSAyMDB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Jsb2Nrc01pc3NlZENsYXNzTmFtZX0+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5ibG9ja3NNaXNzZWQgPiBiLmJsb2Nrc01pc3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEuYmxvY2tzTWlzc2VkIDwgYi5ibG9ja3NNaXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJ2b3Rlc1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlZPVEVTXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInZvdGVzXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxPZmZzZXQ9ezV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnZvdGVzID4gYi52b3RlcyA/IDEgOiBhLnZvdGVzIDwgYi52b3RlcyA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJrZXlcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJLRVlcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwic2lnbmluZ19rZXlcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCB3aWR0aDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtrZXlSZW5kZXIoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBnZXRSb3dDbGFzc05hbWUgPSByZWNvcmQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5pZCA9PT0gY3VycmVudCkgcmV0dXJuIFwiYWN0aXZlLXdpdG5lc3NcIjtcblxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT17Z2V0Um93Q2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuV2l0bmVzc0xpc3QgPSBCaW5kVG9DaGFpblN0YXRlKFdpdG5lc3NMaXN0LCB7XG4gICAgc2hvd19sb2FkZXI6IHRydWVcbn0pO1xuV2l0bmVzc0xpc3QgPSB3aXRoUm91dGVyKFdpdG5lc3NMaXN0KTtcblxuY2xhc3MgV2l0bmVzc2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBnbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZ2xvYmFsT2JqZWN0OiBcIjIuMC4wXCIsXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogXCIyLjEuMFwiXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZmlsdGVyV2l0bmVzczogcHJvcHMuZmlsdGVyV2l0bmVzcyB8fCBcIlwiLFxuICAgICAgICAgICAgY2FyZFZpZXc6IHByb3BzLmNhcmRWaWV3XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX29uRmlsdGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyV2l0bmVzczogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBmaWx0ZXJXaXRuZXNzOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF90b2dnbGVWaWV3KCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgY2FyZFZpZXc6ICF0aGlzLnN0YXRlLmNhcmRWaWV3XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY2FyZFZpZXc6ICF0aGlzLnN0YXRlLmNhcmRWaWV3XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtkeW5HbG9iYWxPYmplY3QsIGdsb2JhbE9iamVjdH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBkeW5HbG9iYWxPYmplY3QgPSBkeW5HbG9iYWxPYmplY3QudG9KUygpO1xuICAgICAgICBnbG9iYWxPYmplY3QgPSBnbG9iYWxPYmplY3QudG9KUygpO1xuXG4gICAgICAgIGxldCBjdXJyZW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoZHluR2xvYmFsT2JqZWN0LmN1cnJlbnRfd2l0bmVzcyksXG4gICAgICAgICAgICBjdXJyZW50QWNjb3VudCA9IG51bGw7XG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICBjdXJyZW50QWNjb3VudCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFxuICAgICAgICAgICAgICAgIGN1cnJlbnQuZ2V0KFwid2l0bmVzc19hY2NvdW50XCIpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbG9yZS13aXRuZXNzLS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5jdXJyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2tzLmFjdGl2ZV93aXRuZXNzZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci53aXRuZXNzZXMucGFydGljaXBhdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndpdG5lc3Nlcy5wYXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci53aXRuZXNzZXMuYnVkZ2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIud2l0bmVzc2VzLm5leHRfdm90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRBY2NvdW50LmdldChcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsT2JqZWN0LmFjdGl2ZV93aXRuZXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluR2xvYmFsT2JqZWN0LnBhcnRpY2lwYXRpb259JVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QucGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdG5lc3NfcGF5X3Blcl9ibG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR5bkdsb2JhbE9iamVjdC53aXRuZXNzX2J1ZGdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD1cIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lQWdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0Lm5leHRfbWFpbnRlbmFuY2VfdGltZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIud2l0bmVzc2VzLmZpbHRlcl9ieV9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyV2l0bmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uRmlsdGVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2l0bmVzc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc2xvdD17ZHluR2xvYmFsT2JqZWN0LmN1cnJlbnRfYXNsb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnQgPyBjdXJyZW50LmdldChcImlkXCIpIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0bmVzc2VzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdC5hY3RpdmVfd2l0bmVzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3NMaXN0PXtnbG9iYWxPYmplY3QuYWN0aXZlX3dpdG5lc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlcldpdG5lc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRWaWV3PXt0aGlzLnN0YXRlLmNhcmRWaWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5XaXRuZXNzZXMgPSBCaW5kVG9DaGFpblN0YXRlKFdpdG5lc3Nlcyk7XG5cbmNsYXNzIFdpdG5lc3NTdG9yZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxXaXRuZXNzZXMgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuV2l0bmVzc1N0b3JlV3JhcHBlciA9IGNvbm5lY3QoV2l0bmVzc1N0b3JlV3JhcHBlciwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXJkVmlldzogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXCJjYXJkVmlld1wiKSxcbiAgICAgICAgICAgIGZpbHRlcldpdG5lc3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgIFwiZmlsdGVyV2l0bmVzc1wiXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFdpdG5lc3NTdG9yZVdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4vRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuL0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuL0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4vQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgTWFya2V0U3RhdHNDaGVjayBmcm9tIFwiLi9NYXJrZXRTdGF0c0NoZWNrXCI7XG5pbXBvcnQgTWFya2V0VXRpbHMgZnJvbSBcImNvbW1vbi9tYXJrZXRfdXRpbHNcIjtcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxuY29uc3QgZ2V0RXF1aXZhbGVudFZhbHVlID0gZnVuY3Rpb24oXG4gICAgYW1vdW50LFxuICAgIHRvQXNzZXQsXG4gICAgZnJvbUFzc2V0LFxuICAgIGZ1bGxQcmVjaXNpb24gPSBudWxsLFxuICAgIGNvcmVBc3NldCA9IG51bGwsXG4gICAgYWxsTWFya2V0U3RhdHMgPSBudWxsXG4pIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gTWFya2V0VXRpbHMuY29udmVydFZhbHVlKFxuICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgdG9Bc3NldCxcbiAgICAgICAgICAgIGZyb21Bc3NldCxcbiAgICAgICAgICAgIGFsbE1hcmtldFN0YXRzXG4gICAgICAgICAgICAgICAgPyBhbGxNYXJrZXRTdGF0c1xuICAgICAgICAgICAgICAgIDogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMsXG4gICAgICAgICAgICBjb3JlQXNzZXQgPyBjb3JlQXNzZXQgOiBDaGFpblN0b3JlLmdldEFzc2V0KFwiMS4zLjBcIiksXG4gICAgICAgICAgICBmdWxsUHJlY2lzaW9uID8gZnVsbFByZWNpc2lvbiA6IHRydWVcbiAgICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59O1xuXG4vKipcbiAqICBHaXZlbiBhbiBhc3NldCBhbW91bnQsIGRpc3BsYXlzIHRoZSBlcXVpdmFsZW50IHZhbHVlIGluIGJhc2VBc3NldCBpZiBwb3NzaWJsZVxuICpcbiAqICBFeHBlY3RzIHRocmVlIHByb3BlcnRpZXNcbiAqICAtJ3RvQXNzZXQnIHdoaWNoIHNob3VsZCBiZSBhIGFzc2V0IGlkXG4gKiAgLSdmcm9tQXNzZXQnIHdoaWNoIGlzIHRoZSBhc3NldCBpZCBvZiB0aGUgb3JpZ2luYWwgYXNzZXQgYW1vdW50XG4gKiAgLSdhbW91bnQnIHdoaWNoIGlzIHRoZSBhbW91bnQgdG8gY29udmVydFxuICogIC0nZnVsbFByZWNpc2lvbicgYm9vbGVhbiB0byB0ZWxsIGlmIHRoZSBhbW91bnQgdXNlcyB0aGUgZnVsbCBwcmVjaXNpb24gb2YgdGhlIGFzc2V0XG4gKi9cbmNsYXNzIFZhbHVlQ29tcG9uZW50IGV4dGVuZHMgTWFya2V0U3RhdHNDaGVjayB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZnVsbFByZWNpc2lvbjogdHJ1ZSxcbiAgICAgICAgbm9EZWNpbWFsczogZmFsc2UsXG4gICAgICAgIGZ1bGxEZWNpbWFsczogZmFsc2UsXG4gICAgICAgIGhpZGVfYXNzZXQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHN1cGVyLnNob3VsZENvbXBvbmVudFVwZGF0ZShucCkgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucC5wdWxzYXRlLCB0aGlzLnByb3BzLnB1bHNhdGUpIHx8XG4gICAgICAgICAgICBucC50b0Fzc2V0ICE9PSB0aGlzLnByb3BzLnRvQXNzZXQgfHxcbiAgICAgICAgICAgIG5wLmZyb21Bc3NldCAhPT0gdGhpcy5wcm9wcy5mcm9tQXNzZXQgfHxcbiAgICAgICAgICAgIG5wLmFtb3VudCAhPT0gdGhpcy5wcm9wcy5hbW91bnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICB0b0Fzc2V0LFxuICAgICAgICAgICAgZnJvbUFzc2V0LFxuICAgICAgICAgICAgZnVsbFByZWNpc2lvbixcbiAgICAgICAgICAgIGNvcmVBc3NldCxcbiAgICAgICAgICAgIC4uLm90aGVyc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgdG9JRCA9IHRvQXNzZXQuZ2V0KFwiaWRcIik7XG4gICAgICAgIGxldCB0b1N5bWJvbCA9IHRvQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuXG4gICAgICAgIGxldCBlcVZhbHVlID0gZ2V0RXF1aXZhbGVudFZhbHVlKFxuICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgdG9Bc3NldCxcbiAgICAgICAgICAgIGZyb21Bc3NldCxcbiAgICAgICAgICAgIGZ1bGxQcmVjaXNpb24sXG4gICAgICAgICAgICBjb3JlQXNzZXRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWVxVmFsdWUgJiYgZXFWYWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5ub19wcmljZVwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAgaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMC45cmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50Lm5vX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICBub1ByZWZpeFxuICAgICAgICAgICAgICAgIGFtb3VudD17ZXFWYWx1ZX1cbiAgICAgICAgICAgICAgICBhc3NldD17dG9JRH1cbiAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgdG9TeW1ib2wuaW5kZXhPZihcIkJUQ1wiKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gNFxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmZ1bGxEZWNpbWFsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5ub0RlY2ltYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdG9Bc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b0Fzc2V0LmdldChcInByZWNpc2lvblwiKSAtIDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuVmFsdWVDb21wb25lbnQgPSBBc3NldFdyYXBwZXIoVmFsdWVDb21wb25lbnQsIHtcbiAgICBwcm9wTmFtZXM6IFtcInRvQXNzZXRcIiwgXCJmcm9tQXNzZXRcIiwgXCJjb3JlQXNzZXRcIl0sXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHRvQXNzZXQ6IFwiMS4zLjBcIixcbiAgICAgICAgY29yZUFzc2V0OiBcIjEuMy4wXCJcbiAgICB9XG59KTtcblxuY2xhc3MgRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cmVmQ2FsbGJhY2ssIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiA8VmFsdWVDb21wb25lbnQgey4uLm90aGVyc30gcmVmPXtyZWZDYWxsYmFja30gLz47XG4gICAgfVxufVxuXG5FcXVpdmFsZW50VmFsdWVDb21wb25lbnQgPSBjb25uZWN0KFxuICAgIEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudCxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtNYXJrZXRzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWxsTWFya2V0U3RhdHM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuY29uc3QgYmFsYW5jZVRvQXNzZXQgPSBmdW5jdGlvbihiYWxhbmNlKSB7XG4gICAgY29uc3QgaXNCYWxhbmNlT2JqZWN0ID0gYmFsYW5jZS5nZXRJbihbXCJiYWxhbmNlXCIsIFwiYW1vdW50XCJdKTtcbiAgICBpZiAoaXNCYWxhbmNlT2JqZWN0IHx8IGlzQmFsYW5jZU9iamVjdCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXNzZXRfaWQ6IGJhbGFuY2UuZ2V0SW4oW1wiYmFsYW5jZVwiLCBcImFzc2V0X2lkXCJdKSxcbiAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKGJhbGFuY2UuZ2V0SW4oW1wiYmFsYW5jZVwiLCBcImFtb3VudFwiXSkpXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFzc2V0X2lkOiBiYWxhbmNlLmdldChcImFzc2V0X3R5cGVcIiksXG4gICAgICAgICAgICBhbW91bnQ6IE51bWJlcihiYWxhbmNlLmdldChcImJhbGFuY2VcIikpXG4gICAgICAgIH07XG4gICAgfVxufTtcblxuY2xhc3MgQmFsYW5jZVZhbHVlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBiYWxhbmNlOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIHNhdG9zaGlzOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHNhdG9zaGlzOiBudWxsXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2JhbGFuY2UsIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBiYWxhbmNlQXNzZXQgPSBiYWxhbmNlVG9Bc3NldChiYWxhbmNlKTtcbiAgICAgICAgbGV0IGFtb3VudCA9IGJhbGFuY2VBc3NldC5hbW91bnQ7XG4gICAgICAgIC8vIG92ZXJyaWRlIGFtb3VudCBpZiBkZXNpcmVkXG4gICAgICAgIGlmICghIXRoaXMucHJvcHMuc2F0b3NoaXMpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IHRoaXMucHJvcHMuc2F0b3NoaXM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZyb21Bc3NldCA9IGJhbGFuY2VBc3NldC5hc3NldF9pZDtcbiAgICAgICAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiA8c3Bhbj4tLTwvc3Bhbj47XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgZnJvbUFzc2V0PXtmcm9tQXNzZXR9XG4gICAgICAgICAgICAgICAgbm9EZWNpbWFscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBmdWxsUHJlY2lzaW9uPXtcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLnNhdG9zaGlzID8gZmFsc2UgOiB0aGlzLnByb3BzLmZ1bGxQcmVjaXNpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuQmFsYW5jZVZhbHVlQ29tcG9uZW50ID0gQmluZFRvQ2hhaW5TdGF0ZShCYWxhbmNlVmFsdWVDb21wb25lbnQsIHtcbiAgICBrZWVwX3VwZGF0aW5nOiB0cnVlXG59KTtcblxuZXhwb3J0IHtcbiAgICBFcXVpdmFsZW50VmFsdWVDb21wb25lbnQsXG4gICAgQmFsYW5jZVZhbHVlQ29tcG9uZW50LFxuICAgIGJhbGFuY2VUb0Fzc2V0LFxuICAgIGdldEVxdWl2YWxlbnRWYWx1ZVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IDlcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsX2xlbmd0aCA9IHByb3BzLnNjcm9sbF9sZW5ndGg7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Cb2R5Q2xpY2sgPSB0aGlzLm9uQm9keUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5wLmVudHJpZXMsIHRoaXMucHJvcHMuZW50cmllcykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucywgdGhpcy5zdGF0ZSkgfHxcbiAgICAgICAgICAgIG5wLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3NldExpc3RlbmVyKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuZW50cmllcy5sZW5ndGggPiAxICYmICF0aGlzLmxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Cb2R5Q2xpY2ssIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkJvZHlDbGljayk7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAobnAuZW50cmllcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobnAuZW50cmllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRMaXN0ZW5lcihucCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBvbkJvZHlDbGljayhlKSB7XG4gICAgICAgIGxldCBlbCA9IGUudGFyZ2V0O1xuICAgICAgICBsZXQgaW5zaWRlQWN0aW9uU2hlZXQgPSBmYWxzZTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0ICYmXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd25cIikgJiZcbiAgICAgICAgICAgICAgICBlbC5pZCA9PT0gdGhpcy5wcm9wcy5pZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaW5zaWRlQWN0aW9uU2hlZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgoZWwgPSBlbC5wYXJlbnROb2RlKSk7XG5cbiAgICAgICAgaWYgKCFpbnNpZGVBY3Rpb25TaGVldCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOiBmYWxzZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlOiAhdGhpcy5zdGF0ZS5hY3RpdmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7ZW50cmllcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmV9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkcm9wZG93bi13cmFwcGVyIGluYWN0aXZlXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMudXBwZXJDYXNlID8gXCIgdXBwZXItY2FzZVwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpbmdsZUVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLnNpbmdsZUVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlbnRyaWVzWzBdfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGVudHJpZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy51cHBlckNhc2UgPyBcInVwcGVyLWNhc2VcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZXNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVEcm9wZG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkcm9wZG93bi13cmFwcGVyXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMudXBwZXJDYXNlID8gXCIgdXBwZXItY2FzZVwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZSA/IHZhbHVlIDogPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+QTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMubGVuZ3RoID4gdGhpcy5wcm9wcy5zY3JvbGxfbGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4vTGlua1RvQWNjb3VudEJ5SWRcIjtcclxuXHJcbmNsYXNzIExpbmtUb1dpdG5lc3NCeUlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgd2l0bmVzczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgd2l0bmVzc19hY2NvdW50ID0gdGhpcy5wcm9wcy53aXRuZXNzLmdldChcIndpdG5lc3NfYWNjb3VudFwiKTtcclxuICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e3dpdG5lc3NfYWNjb3VudH0gLz47XHJcbiAgICB9XHJcbn1cclxuTGlua1RvV2l0bmVzc0J5SWQgPSBCaW5kVG9DaGFpblN0YXRlKExpbmtUb1dpdG5lc3NCeUlkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtUb1dpdG5lc3NCeUlkO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgYmFzZVNsaWNlIGZyb20gJy4vX2Jhc2VTbGljZS5qcyc7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gJy4vdG9JbnRlZ2VyLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2xpY2Ugb2YgYGFycmF5YCB3aXRoIGBuYCBlbGVtZW50cyB0YWtlbiBmcm9tIHRoZSBlbmQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge251bWJlcn0gW249MV0gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byB0YWtlLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50YWtlUmlnaHQoWzEsIDIsIDNdKTtcbiAqIC8vID0+IFszXVxuICpcbiAqIF8udGFrZVJpZ2h0KFsxLCAyLCAzXSwgMik7XG4gKiAvLyA9PiBbMiwgM11cbiAqXG4gKiBfLnRha2VSaWdodChbMSwgMiwgM10sIDUpO1xuICogLy8gPT4gWzEsIDIsIDNdXG4gKlxuICogXy50YWtlUmlnaHQoWzEsIDIsIDNdLCAwKTtcbiAqIC8vID0+IFtdXG4gKi9cbmZ1bmN0aW9uIHRha2VSaWdodChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBuID0gKGd1YXJkIHx8IG4gPT09IHVuZGVmaW5lZCkgPyAxIDogdG9JbnRlZ2VyKG4pO1xuICBuID0gbGVuZ3RoIC0gbjtcbiAgcmV0dXJuIGJhc2VTbGljZShhcnJheSwgbiA8IDAgPyAwIDogbiwgbGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFrZVJpZ2h0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9