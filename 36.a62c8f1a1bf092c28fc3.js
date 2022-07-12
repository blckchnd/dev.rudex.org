"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[36],{

/***/ 3360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2117);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2112);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1962);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1963);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(437);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2098);








/**
 *  @brief displays the summary of a given account in a condenced view (for the dashboard)
 *
 *  This card has the following properties:
 *
 *  { account: ${name_or_id} }
 */

class AccountCard extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
  };

  onCardClick(e) {
    e.preventDefault();
    let name = this.props.account.get("name");
    this.props.history.push(`/account/${name}`);
  }

  render() {
    let name = null;
    let balances = null;
    let isMyAccount = false;

    if (this.props.account) {
      name = this.props.account.get("name");
      let abal = this.props.account.get("balances");

      if (abal) {
        balances = abal.map(x => {
          let balanceAmount = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__.ChainStore.getObject(x);

          if (!balanceAmount.get("balance")) {
            return null;
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            key: x
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
            balance: x
          }));
        }).toArray();
      }

      isMyAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].isMyAccount(this.props.account);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content account-card",
      onClick: this.onCardClick.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card" + (isMyAccount ? " my-account" : "")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
      className: "text-center"
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card-content clearfix"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "float-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      account: name,
      size: {
        height: 64,
        width: 64
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "balances"
    }, balances))));
  }

}

AccountCard = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AccountCard);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.withRouter)(AccountCard));

/***/ }),

/***/ 3355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(589);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1962);
/* harmony import */ var components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2514);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1963);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







class MyAccounts extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    accounts: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccountsList.isRequired,
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
  };

  render() {
    var account_names = this.props.accounts.filter(account => !!account).filter(account => stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].isMyAccount(account)).map(account => account.get("name")).sort();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onChange: this.onAccountSelect.bind(this),
      account_names: account_names,
      center: true
    }));
  }

  onAccountSelect(account_name) {
    this.props.onChange(account_name);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(MyAccounts));

/***/ }),

/***/ 3353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1816);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1941);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(649);
/* harmony import */ var stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1812);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1937);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1938);
/* harmony import */ var components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3354);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1811);
/* harmony import */ var components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3355);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
















class BalanceClaimActive extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  UNSAFE_componentWillMount() {
    let keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
    let keySeq = keys.keySeq();
    actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].setPubkeys(keySeq);
    this.existing_keys = keySeq;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
    let keySeq = keys.keySeq();

    if (!keySeq.equals(this.existing_keys)) {
      this.existing_keys = keySeq;
      actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].setPubkeys(keySeq);
    }
  }

  render() {
    if (!this.props.account_refs.size) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_13___default()), {
        content: "wallet.no_balance"
      })));
    }

    if (this.props.loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_13___default()), {
        content: "wallet.loading_balances"
      }), "\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: "three-bounce"
      }));
    }

    if (!this.props.balances || !this.props.balances.size) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_13___default()), {
        content: "wallet.no_balance"
      })));
    }

    let import_ready = this.props.selected_balances.size && this.props.claim_account_name;
    let claim_balance_label = import_ready ? ` (${this.props.claim_account_name})` : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block center-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "no-border-bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_13___default()), {
      content: "wallet.claim_balances"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content",
      style: {
        overflowY: "hidden !important"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "full-width-content center-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: this.props.balances,
      accounts: immutable__WEBPACK_IMPORTED_MODULE_2___default().List(this.props.account_refs),
      onChange: this.onClaimAccountChange.bind(this)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("button success", {
        disabled: !import_ready
      }),
      onClick: this.onClaimBalance.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_13___default()), {
      content: "wallet.claim_balance"
    }), claim_balance_label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button cancel",
      onClick: this.onBack.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_13___default()), {
      content: "wallet.cancel"
    })));
  }

  onBack(e) {
    e.preventDefault();
    window.history.back();
  }

  onClaimAccountChange(claim_account_name) {
    actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__["default"].claimAccountChange(claim_account_name);
  }

  onClaimBalance() {
    actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__["default"].importBalance(this.props.claim_account_name, this.props.selected_balances, true //broadcast
    ).catch(error => {
      console.error("claimBalance", error);
      let message = error;

      try {
        message = error.data.message;
      } catch (e) {}

      bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Notification.error({
        message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.balance_claim_error", {
          error_msg: message
        })
      });
      throw error;
    });
  }

}

BalanceClaimActive = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(BalanceClaimActive, {
  listenTo() {
    return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__["default"], stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__["default"], stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
  },

  getProps() {
    let props = stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState();
    props.account_refs = stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAccountRefs();
    return props;
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BalanceClaimActive);

/***/ }),

/***/ 3362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1816);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1937);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2118);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);






class BalanceClaimAssetTotals extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    if (this.props.balances === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "wallet.loading_balances"
    }), "\u2026");
    var total_by_asset = this.props.balances.groupBy(v => v.balance.asset_id).map(l => l.reduce((r, v) => r + Number(v.balance.amount), 0));
    if (!total_by_asset.size) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "None");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, total_by_asset.map((total, asset_id) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: asset_id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "info",
      amount: total,
      asset: asset_id
    }))).toArray());
  }

}

BalanceClaimAssetTotals = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(BalanceClaimAssetTotals, {
  listenTo() {
    return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
  },

  getProps() {
    return stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState();
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BalanceClaimAssetTotals);

/***/ }),

/***/ 3354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1816);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(649);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1937);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1938);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2118);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);









class BalanceClaimSelector extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.claim_account_name) this.onClaimAccount(nextProps.claim_account_name, nextProps.checked);
  }

  render() {
    if (this.props.balances === undefined || !this.props.total_by_account_asset.size) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    let index = -1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "wallet.unclaimed"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "wallet.unclaimed_vesting"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "account.name"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, this.props.total_by_account_asset.map((r, name_asset) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: ++index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "checkbox",
      checked: !!this.props.checked.get(index),
      onChange: this.onCheckbox.bind(this, index, r.balances)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: "right"
      }
    }, r.unclaimed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "info",
      amount: r.unclaimed,
      asset: name_asset.get(1)
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: "right"
      }
    }, r.vesting.unclaimed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "info",
      amount: r.vesting.unclaimed,
      hide_asset: true,
      asset: name_asset.get(1)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " of "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "info",
      amount: r.vesting.total,
      asset: name_asset.get(1)
    })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, " ", name_asset.get(0), " "))).toArray())));
  }

  onCheckbox(index, balances) {
    let checked = this.props.checked;

    if (checked.get(index)) {
      checked = checked.delete(index);
    } else {
      checked = checked.set(index, balances);
    }

    actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__["default"].setSelectedBalanceClaims(checked);
  }

  onClaimAccount(claim_account_name, checked) {
    // A U T O  S E L E C T  A C C O U N T S
    // only if nothing is selected (play it safe)
    if (checked.size) return;
    let index = -1;
    this.props.total_by_account_asset.forEach((v, k) => {
      index++;
      let name = k.get(0);

      if (name === claim_account_name) {
        if (v.unclaimed || v.vesting.unclaimed) checked = checked.set(index, v.balances);
      }
    });
    if (checked.size) actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__["default"].setSelectedBalanceClaims(checked);
  }

}

BalanceClaimSelector = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(BalanceClaimSelector, {
  listenTo() {
    return [stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    let props = stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState();
    let {
      balances,
      address_to_pubkey
    } = props;
    let private_keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().keys;
    let groupCountMap = immutable__WEBPACK_IMPORTED_MODULE_2___default().Map().asMutable();

    let groupCount = (group, distinct) => {
      let set = groupCountMap.get(group);

      if (!set) {
        set = immutable__WEBPACK_IMPORTED_MODULE_2___default().Set().asMutable();
        groupCountMap.set(group, set);
      }

      set.add(distinct);
      return set.size;
    };

    if (balances) props.total_by_account_asset = balances.groupBy(v => {
      // K E Y S
      let names = "";
      let pubkey = address_to_pubkey.get(v.owner);
      let private_key_object = private_keys.get(pubkey); // Imported Account Names (just a visual aid, helps to auto select a real account)

      if (private_key_object && private_key_object.import_account_names) names = private_key_object.import_account_names.join(", "); // Signing is very slow, further divide the groups based on the number of signatures required

      let batch_number = Math.ceil(groupCount(immutable__WEBPACK_IMPORTED_MODULE_2___default().List([names, v.balance.asset_id]), v.owner) / 60);
      let name_asset_key = immutable__WEBPACK_IMPORTED_MODULE_2___default().List([names, v.balance.asset_id, batch_number]);
      return name_asset_key;
    }).map(l => l.reduce((r, v) => {
      // V A L U E S
      v.public_key_string = address_to_pubkey.get(v.owner);
      r.balances = r.balances.add(v);

      if (v.vested_balance != undefined) {
        r.vesting.unclaimed += Number(v.vested_balance.amount);
        r.vesting.total += Number(v.balance.amount);
      } else {
        r.unclaimed += Number(v.balance.amount);
      }

      return r;
    }, {
      unclaimed: 0,
      vesting: {
        unclaimed: 0,
        total: 0
      },
      balances: immutable__WEBPACK_IMPORTED_MODULE_2___default().Set()
    })).sortBy(k => k);
    return props;
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BalanceClaimSelector);

/***/ }),

/***/ 3356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "BrainkeyInputAccept": () => (/* binding */ BrainkeyInputAccept)
/* harmony export */ });
/* harmony import */ var lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2014);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1816);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3357);
/* harmony import */ var stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3358);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1963);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1962);
/* harmony import */ var components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3359);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3360);












const connectObject = {
  listenTo() {
    return [stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance("wmc")];
  },

  getProps() {
    return stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance("wmc").getState();
  }

};

class Brainkey extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  componentWillUnmount() {
    stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_5__["default"].closeInstance("wmc");
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "wallet.brainkey"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BrainkeyInputAccept, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewBrainkey, null)));
  }

}

Brainkey = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(Brainkey, connectObject);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brainkey);

class ViewBrainkey extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let short_brnkey = this.props.brnkey.substring(0, 10); // console.log("this.props.account_ids.toArray()", this.props.account_ids.toArray())

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: ""
    }, short_brnkey), "\u2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null), this.props.account_ids.size ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BrainkeyAccounts, {
      accounts: immutable__WEBPACK_IMPORTED_MODULE_2___default().List(this.props.account_ids.toArray())
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "wallet.no_accounts"
    })));
  }

}

ViewBrainkey = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(ViewBrainkey, connectObject);

class BrainkeyAccounts extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    accounts: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccountsList.isRequired
  };

  render() {
    let rows = (0,lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_11__["default"])(this.props.accounts).filter(account => !!account[1]).map(account => account[1].get("name")).sort().map(name => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: name,
      account: name
    }));

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, rows);
  }

}

BrainkeyAccounts = (0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"])(BrainkeyAccounts);
class BrainkeyInputAccept extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      brnkey: "",
      accept: false
    };
  }

  render() {
    if (this.state.accept) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.props.children);
    let ready = this.state.brnkey && this.state.brnkey !== "";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "grid-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onChange: this.onBrainkeyChange.bind(this)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("button success", {
        disabled: !ready
      }),
      onClick: this.onAccept.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "wallet.accept"
    })));
  }

  onBrainkeyChange(brnkey) {
    this.setState({
      brnkey
    });
  }

  onAccept() {
    this.setState({
      accept: true
    });
    actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__["default"].setBrainkey(this.state.brnkey);
  }

} // <div onClick={this.onLookupAccounts.bind(this)} className="button success">Lookup Accounts</div>
// onLookupAccounts() {
//
// }

/***/ }),

/***/ 3359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrainkeyInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(437);




var dictionary_set;

if (false) {}

class BrainkeyInput extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired)
  };

  constructor() {
    super();
    this.state = {
      brnkey: "",
      loading: true
    };
  }

  UNSAFE_componentWillMount() {
    if (true) {
      fetch(`${""}dictionary.json`).then(reply => {
        return reply.json().then(result => {
          dictionary_set = new Set(result.en.split(","));
          this.setState({
            loading: false
          });
        });
      }).catch(err => {
        console.log("fetch dictionary error:", err);
      });
    } else {}
  }

  _checkBrainKey() {
    let spellcheck_words = this.state.brnkey.split(" ");
    let checked_words = [];
    spellcheck_words.forEach((word, i) => {
      if (word === "") return;
      let spellcheckword = word.toLowerCase();
      spellcheckword = spellcheckword.match(/[a-z]+/); //just spellcheck letters

      if (spellcheckword === null || dictionary_set.has(spellcheckword[0])) checked_words.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: i,
        style: {
          padding: "1px",
          margin: "1px"
        }
      }, word));else checked_words.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MisspelledWord, {
        key: i
      }, word));
    }); // this.ready = checked_words.length > 0

    let word_count_label;
    let warn = true;
    let valid = true;

    if (checked_words.length > 0) {
      if (this.state.brnkey.length < 50) {
        word_count_label = this.state.brnkey.length + " characters (50 minimum)";
        valid = false;
      } else {
        if (checked_words.length < 16) word_count_label = checked_words.length + " words (16 recommended)";else {
          word_count_label = checked_words.length + " words";
          warn = false;
        }
      }
    }

    return {
      warn,
      valid,
      word_count_label,
      checked_words
    };
  }

  render() {
    if (this.state.loading || !dictionary_set) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          padding: 20
        }
      }, "Fetching dictionary....");
    }

    let {
      warn,
      word_count_label,
      checked_words
    } = this._checkBrainKey();

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
      tabIndex: this.props.tabIndex || 1,
      onChange: this.formChange.bind(this),
      value: this.state.brnkey,
      id: "brnkey",
      style: {
        height: 100,
        minWidth: 450
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: "left"
      },
      className: "grid-content no-padding no-overflow"
    }, checked_words), this.state.check_digits && !this.props.hideCheckDigits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
      className: "no-overflow"
    }, this.state.check_digits, " * Check Digits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        error: warn
      })
    }, word_count_label))));
  }

  formChange(event) {
    var {
      id,
      value
    } = event.target;

    let {
      valid
    } = this._checkBrainKey();

    var state = {};
    state[id] = value;

    if (id === "brnkey") {
      var brnkey = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.key.normalize_brainKey(value);
      this.props.onChange(brnkey.length < 50 ? null : brnkey);
      state.check_digits = brnkey.length < 50 ? null : bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.hash.sha1(brnkey).toString("hex").substring(0, 4);
    }

    this.setState(state);

    if (this.props.errorCallback) {
      this.props.errorCallback(valid);
    }
  }

}

class MisspelledWord extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        borderBottom: "1px dotted #ff0000",
        padding: "1px",
        margin: "1px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        borderBottom: "1px dotted #ff0000"
      }
    }, this.props.children));
  }

}

/***/ }),

/***/ 3352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ExistingAccountOptions": () => (/* binding */ ExistingAccountOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2097);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1816);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1936);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3353);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2098);
/* harmony import */ var _Brainkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3356);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3361);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2559);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(621);











const connectObject = {
  listenTo() {
    return [stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
  },

  getProps() {
    const wallet = stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState();
    return {
      wallet
    };
  }

};

class ExistingAccount extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const has_wallet = this.props.wallet.wallet_names.count() != 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block center-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "page-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "account.welcome",
      wallet_name: (0,branding__WEBPACK_IMPORTED_MODULE_8__.getWalletName)()
    })), !has_wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "wallet.create_wallet_backup"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "wallet.setup_wallet"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      exact: true,
      path: "/existing-account",
      component: _Backup__WEBPACK_IMPORTED_MODULE_7__.BackupRestore
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      exact: true,
      path: "/existing-account/import-backup",
      component: ExistingAccountOptions
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      exact: true,
      path: "/existing-account/import-keys",
      component: _ImportKeys__WEBPACK_IMPORTED_MODULE_6__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      exact: true,
      path: "/existing-account/brainkey",
      component: _Brainkey__WEBPACK_IMPORTED_MODULE_5__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      exact: true,
      path: "/existing-account/balance-claim",
      component: _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_3__["default"]
    })), this.props.children))));
  }

}

ExistingAccount = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(ExistingAccount, connectObject);

class ExistingAccountOptions extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const has_wallet = this.props.wallet.wallet_names.count() != 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, !has_wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
      to: "existing-account/import-backup"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "wallet.import_backup",
      wallet_name: (0,branding__WEBPACK_IMPORTED_MODULE_8__.getWalletName)()
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
      to: "existing-account/import-keys"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "wallet.import_bts1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
      to: "existing-account/import-keys"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "wallet.create_wallet"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null)) : null, !has_wallet ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_3__["default"], null), has_wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
      to: "dashboard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      component: "span",
      content: "header.dashboard"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
      to: "wallet"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "settings.wallets"
    })))) : null);
  }

}

ExistingAccountOptions = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(ExistingAccountOptions, connectObject);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExistingAccount);


/***/ }),

/***/ 3361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1816);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(437);
/* harmony import */ var api_accountApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(640);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(521);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(649);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(643);
/* harmony import */ var components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2579);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1941);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3353);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1938);
/* harmony import */ var components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3362);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(644);
/* harmony import */ var stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3363);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__);




















__webpack_require__(3364);

let import_keys_assert_checking = false;

const KeyCount = ({
  key_count
}) => {
  if (!key_count) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Found ", key_count, " private keys");
};

const WIF_KEY_LENGTH = 51;

class ImportKeys extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = this._getInitialState();
    this._renderBalanceClaims = this._renderBalanceClaims.bind(this);
  }

  static defaultProps = {
    privateKey: true
  };

  _getInitialState(keep_file_name = false) {
    return {
      keys_to_account: {},
      no_file: true,
      account_keys: [],
      //brainkey: null,
      //encrypted_brainkey: null,
      reset_file_name: keep_file_name ? this.state.reset_file_name : Date.now(),
      reset_password: Date.now(),
      password_checksum: null,
      import_file_message: null,
      import_password_message: null,
      imported_keys_public: {},
      key_text_message: null,
      associatedAccount: null,
      errorTextMessage: null,
      genesis_filtering: false,
      genesis_filter_status: [],
      genesis_filter_finished: undefined,
      importSuccess: false
    };
  }

  reset(e, keep_file_name) {
    if (e) e.preventDefault();

    let state = this._getInitialState(keep_file_name);

    this.setState(state, () => this.updateOnChange());
  }

  onWif(event) {
    event.preventDefault();
    const value = this.refs.wifInput.state.value;
    this.addByPattern(value);
  }

  onCancel(e) {
    if (e) e.preventDefault();
    this.setState(this._getInitialState());
  }

  updateOnChange() {
    actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_13__["default"].setPubkeys(Object.keys(this.state.imported_keys_public));
  }

  getImportAccountKeyCount(keys_to_account) {
    let account_keycount = {};
    let found = false;

    for (let key in keys_to_account) for (let account_name of keys_to_account[key].account_names) {
      account_keycount[account_name] = (account_keycount[account_name] || 0) + 1;
      found = true;
    }

    return found ? account_keycount : null;
  }

  upload(evt) {
    this.reset(null, true);
    let file = evt.target.files[0];
    let reader = new FileReader();

    reader.onload = evt => {
      let contents = evt.target.result;

      try {
        let json_contents;

        try {
          json_contents = JSON.parse(contents); // This is the only chance to encounter a large file,
          // try this format first.

          this._parseImportKeyUpload(json_contents, file.name, update_state => {
            // console.log("update_state", update_state)
            this.setState(update_state, () => {
              if (update_state.genesis_filter_finished) {
                // try empty password, also display "Enter import file password"
                this._passwordCheck();
              }
            });
          });
        } catch (e) {
          //DEBUG console.log("... _parseImportKeyUpload",e)
          try {
            if (!json_contents) file.name + " is an unrecognized format";

            this._parseWalletJson(json_contents);
          } catch (ee) {
            if (!this.addByPattern(contents)) throw ee;
          } // try empty password, also display "Enter import file password"


          this._passwordCheck();
        }
      } catch (message) {
        console.error("... ImportKeys upload error", message);
        this.setState({
          import_file_message: message
        });
      }
    };

    reader.readAsText(file);
  }
  /** BTS 1.0 client wallet_export_keys format. */


  _parseImportKeyUpload(json_contents, file_name, update_state) {
    let password_checksum, unfiltered_account_keys;

    try {
      password_checksum = json_contents.password_checksum;
      if (!password_checksum) throw file_name + " is an unrecognized format";
      if (!Array.isArray(json_contents.account_keys)) throw file_name + " is an unrecognized format";
      unfiltered_account_keys = json_contents.account_keys;
    } catch (e) {
      throw e.message || e;
    } // BTS 1.0 wallets may have a lot of generated but unused keys or spent TITAN addresses making
    // wallets so large it is was not possible to use the JavaScript wallets with them.

  }
  /**
   BTS 1.0 hosted wallet backup (wallet.bitshares.org) is supported.
    BTS 1.0 native wallets should use wallet_export_keys instead of a wallet backup.
    Note,  Native wallet backups will be rejected.  The logic below does not
   capture assigned account names (for unregisted accounts) and does not capture
   signing keys.  The hosted wallet has only registered accounts and no signing
   keys.
    */


  _parseWalletJson(json_contents) {
    let password_checksum;
    let encrypted_brainkey;
    let address_to_enckeys = {};
    let account_addresses = {};

    let savePubkeyAccount = function (pubkey, account_name) {
      //replace BTS with GPH
      pubkey = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__.ChainConfig.address_prefix + pubkey.substring(3);
      let address = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.PublicKey.fromPublicKeyString(pubkey).toAddressString();
      let addresses = account_addresses[account_name] || [];
      address = "GPH" + address.substring(3); //DEBUG console.log("... address",address,account_name)

      addresses.push(address);
      account_addresses[account_name] = addresses;
    };

    try {
      if (!Array.isArray(json_contents)) {
        //DEBUG console.log('... json_contents',json_contents)
        throw new Error("Invalid wallet format");
      }

      for (let element of json_contents) {
        if ("key_record_type" == element.type && element.data.account_address && element.data.encrypted_private_key) {
          let address = element.data.account_address;
          let enckeys = address_to_enckeys[address] || [];
          enckeys.push(element.data.encrypted_private_key); //DEBUG console.log("... address",address,enckeys)

          address_to_enckeys[address] = enckeys;
          continue;
        }

        if ("account_record_type" == element.type) {
          let account_name = element.data.name;
          savePubkeyAccount(element.data.owner_key, account_name);

          for (let history of element.data.active_key_history) {
            savePubkeyAccount(history[1], account_name);
          }

          continue;
        }

        if ("property_record_type" == element.type && "encrypted_brainkey" == element.data.key) {
          encrypted_brainkey = element.data.value;
          continue;
        }

        if ("master_key_record_type" == element.type) {
          if (!element.data) throw file.name + " invalid master_key_record record";
          if (!element.data.checksum) throw file.name + " is missing master_key_record checksum";
          password_checksum = element.data.checksum;
        }
      }

      if (!encrypted_brainkey) throw "Please use a BTS 1.0 wallet_export_keys file instead";
      if (!password_checksum) throw file.name + " is missing password_checksum";
      if (!enckeys.length) throw file.name + " does not contain any private keys";
    } catch (e) {
      throw e.message || e;
    }

    let account_keys = [];

    for (let account_name in account_addresses) {
      let encrypted_private_keys = [];

      for (let address of account_addresses[account_name]) {
        let enckeys = address_to_enckeys[address];
        if (!enckeys) continue;

        for (let enckey of enckeys) encrypted_private_keys.push(enckey);
      }

      account_keys.push({
        account_name,
        encrypted_private_keys
      });
    } // We could prompt for this brain key instead on first use.  The user
    // may already have a brainkey at this point so with a single brainkey
    // wallet we can't use it now.


    this.setState({
      password_checksum,
      account_keys //encrypted_brainkey

    });
  }

  _passwordCheck(evt) {
    if (evt && "preventDefault" in evt) {
      evt.preventDefault();
    }

    let pwNode = this.refs.password; // if(pwNode) pwNode.focus()

    let password = pwNode ? pwNode.value : "";
    let checksum = this.state.password_checksum;
    let new_checksum = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.hash.sha512(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.hash.sha512(password)).toString("hex");

    if (checksum != new_checksum) {
      return this.setState({
        no_file: false,
        import_password_message: password.length ? "Incorrect password" : null
      });
    }

    this.setState({
      no_file: false,
      reset_password: Date.now(),
      import_password_message: counterpart__WEBPACK_IMPORTED_MODULE_11___default().translate("wallet.import_pass_match")
    }, () => this._decryptPrivateKeys(password)); // setTimeout(, 250)
  }

  _decryptPrivateKeys(password) {
    let password_aes = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.Aes.fromSeed(password);
    let format_error1_once = true;

    for (let account of this.state.account_keys) {
      if (!account.encrypted_private_keys) {
        let error = `Account ${account.account_name} missing encrypted_private_keys`;
        console.error(error);

        if (format_error1_once) {
          bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Notification.error({
            message: error
          });
          format_error1_once = false;
        }

        continue;
      }

      let account_name = account.account_name.trim();
      let same_prefix_regex = new RegExp("^" + bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__.ChainConfig.address_prefix);

      for (let i = 0; i < account.encrypted_private_keys.length; i++) {
        let encrypted_private = account.encrypted_private_keys[i];
        let public_key_string = account.public_keys ? account.public_keys[i] : null; // performance gain

        try {
          let private_plainhex = password_aes.decryptHex(encrypted_private);

          if (import_keys_assert_checking && public_key_string) {
            let private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.PrivateKey.fromHex(private_plainhex);
            let pub = private_key.toPublicKey(); // S L O W

            let addy = pub.toAddressString();
            let pubby = pub.toPublicKeyString();
            let error = "";
            let address_string = account.addresses ? account.addresses[i] : null; // assert checking

            if (address_string && addy.substring(3) != address_string.substring(3)) error = "address imported " + address_string + " but calculated " + addy + ". ";
            if (pubby.substring(3) != public_key_string.substring(3)) error += "public key imported " + public_key_string + " but calculated " + pubby;
            if (error != "") console.log("ERROR Miss-match key", error);
          }

          if (!public_key_string) {
            let private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.PrivateKey.fromHex(private_plainhex);
            let public_key = private_key.toPublicKey(); // S L O W

            public_key_string = public_key.toPublicKeyString();
          } else {
            if (!same_prefix_regex.test(public_key_string)) // This was creating a unresponsive chrome browser
              // but after the results were shown.  It was probably
              // caused by garbage collection.
              public_key_string = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__.ChainConfig.address_prefix + public_key_string.substring(3);
          }

          this.state.imported_keys_public[public_key_string] = true;
          let {
            account_names
          } = this.state.keys_to_account[private_plainhex] || {
            account_names: []
          };
          let dup = false;

          for (let _name of account_names) if (_name == account_name) dup = true;

          if (dup) continue;
          account_names.push(account_name);
          this.state.keys_to_account[private_plainhex] = {
            account_names,
            public_key_string
          };
        } catch (e) {
          console.log(e, e.stack);
          let message = e.message || e;
          bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Notification.error({
            message: counterpart__WEBPACK_IMPORTED_MODULE_11___default().translate("notifications.import_keys_error", {
              account_name: account_name,
              error_msg: message
            })
          });
        }
      }
    } //let enc_brainkey = this.state.encrypted_brainkey
    //if(enc_brainkey){
    //    this.setState({
    //        brainkey: password_aes.decryptHexToText(enc_brainkey)
    //    })
    //}


    this.setState({
      import_file_message: null,
      import_password_message: null,
      password_checksum: null
    }, () => this.updateOnChange());
  }

  _saveImport(e) {
    e.preventDefault();
    let keys = stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().keys;
    let dups = {};

    for (let public_key_string in this.state.imported_keys_public) {
      if (!keys.has(public_key_string)) continue;
      delete this.state.imported_keys_public[public_key_string];
      dups[public_key_string] = true;
    }

    if (Object.keys(this.state.imported_keys_public).length === 0) {
      bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Notification.error({
        message: counterpart__WEBPACK_IMPORTED_MODULE_11___default().translate("notifications.import_keys_already_imported")
      });
      return;
    }

    let keys_to_account = this.state.keys_to_account;

    for (let private_plainhex of Object.keys(keys_to_account)) {
      let {
        account_names,
        public_key_string
      } = keys_to_account[private_plainhex];
      if (dups[public_key_string]) delete keys_to_account[private_plainhex];
    }

    actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_7__["default"].unlock().then(() => {
      stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(true); // show the loading indicator

      setTimeout(() => this.saveImport(), 200);
    }).catch(() => {});
  }

  saveImport() {
    let keys_to_account = this.state.keys_to_account;
    let private_key_objs = [];

    for (let private_plainhex of Object.keys(keys_to_account)) {
      let {
        account_names,
        public_key_string
      } = keys_to_account[private_plainhex];
      private_key_objs.push({
        private_plainhex,
        import_account_names: account_names,
        public_key_string
      });
    }

    this.reset();
    stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__["default"].importKeysWorker(private_key_objs).then(result => {
      stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(false);
      let import_count = private_key_objs.length;
      bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Notification.success({
        message: counterpart__WEBPACK_IMPORTED_MODULE_11___default().translate("wallet.import_key_success", {
          count: import_count
        })
      });
      this.setState({
        importSuccess: true
      }); // this.onCancel() // back to claim balances
    }).catch(error => {
      console.log("error:", error);
      stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].importing(false);
      let message = error;

      try {
        message = error.target.error.message;
      } catch (e) {}

      bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Notification.error({
        message: counterpart__WEBPACK_IMPORTED_MODULE_11___default().translate("notifications.import_keys_error_unknown", {
          error_msg: message
        })
      });
    });
  }

  addByPattern(contents) {
    if (!contents) {
      this.setState({
        errorTextMessage: counterpart__WEBPACK_IMPORTED_MODULE_11___default().translate("wallet.wif_import_error")
      });
      return false;
    }

    if (contents.length !== WIF_KEY_LENGTH) {
      this.setState({
        errorTextMessage: counterpart__WEBPACK_IMPORTED_MODULE_11___default().translate("wallet.wif_length_error")
      });
      return false;
    }

    let count = 0,
        invalid_count = 0;
    let wif_regex = /5[HJK][1-9A-Za-z]{49}/g;

    for (let wif of contents.match(wif_regex) || []) {
      try {
        let private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.PrivateKey.fromWif(wif); //could throw and error

        let private_plainhex = private_key.toBuffer().toString("hex");
        let public_key = private_key.toPublicKey(); // S L O W

        let public_key_string = public_key.toPublicKeyString();
        this.state.imported_keys_public[public_key_string] = true;
        this.state.keys_to_account[private_plainhex] = {
          account_names: [],
          public_key_string
        };
        let accountName = [];
        api_accountApi__WEBPACK_IMPORTED_MODULE_4__["default"].lookupAccountByPublicKey(public_key_string).then(async result => {
          let batch;
          batch = result[0].map(value => {
            return (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.FetchChain)("getAccount", value);
          });
          let accountNames = await Promise.all(batch);
          accountNames.map(value => {
            let name = value.get("name");

            if (accountName.indexOf(name) === -1) {
              accountName.push(name);
            }
          });
          this.setState({
            associatedAccount: accountName
          });
        });
        count++;
      } catch (e) {
        invalid_count++;
      }
    }

    this.setState({
      key_text_message: "Found " + (!count ? "" : count + " valid") + (!invalid_count ? "" : " and " + invalid_count + " invalid") + " key" + (count > 1 || invalid_count > 1 ? "s" : "") + "."
    }, () => this.updateOnChange()); // removes the message on the next render

    this.setState({
      key_text_message: null,
      errorTextMessage: null
    });
    return count;
  } // toggleImportType(type) {
  //     if (!type) {
  //         return;
  //     }
  //     console.log("toggleImportType", type);
  //     this.setState({
  //         privateKey: type === "privateKey"
  //     });
  // }


  _renderBalanceClaims() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Button, {
      type: "primary",
      onClick: this.onCancel.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "wallet.done"
    }))));
  }

  render() {
    let {
      privateKey
    } = this.props;
    let {
      keys_to_account
    } = this.state;
    let key_count = Object.keys(keys_to_account).length;
    let account_keycount = this.getImportAccountKeyCount(keys_to_account); // Create wallet prior to the import keys (keeps layout clean)

    if (!stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__["default"].getWallet()) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_8__.WalletCreate, {
      importKeys: true,
      hideTitle: true
    });

    if (this.props.importing) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "center-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "circle"
      })));
    }

    let filtering = this.state.genesis_filtering;
    let was_filtered = !!this.state.genesis_filter_status.length && this.state.genesis_filter_finished;
    let account_rows = null;

    if (this.state.genesis_filter_status.length) {
      account_rows = [];

      for (let status of this.state.genesis_filter_status) {
        if (status.count && status.total) {
          account_rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
            key: status.account_name
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, status.account_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, filtering ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Filtering", " ", Math.round(status.count / status.total * 100), " ", "%", " ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, status.count))));
        }
      }
    }

    let import_ready = key_count !== 0;
    let password_placeholder = counterpart__WEBPACK_IMPORTED_MODULE_11___default().translate("wallet.import_password");
    if (import_ready) password_placeholder = "";

    if (!account_rows && account_keycount) {
      account_rows = [];

      for (let account_name in account_keycount) {
        account_rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          key: account_name
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, account_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, account_keycount[account_name])));
      }
    }

    let cancelButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Button, {
      onClick: this.onCancel.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "wallet.cancel"
    }));
    let tabIndex = 1;

    if (this.state.importSuccess) {
      return this._renderBalanceClaims();
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        padding: "10px 0"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.state.key_text_message ? this.state.key_text_message : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KeyCount, {
      key_count: key_count
    })), !import_ready ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " ", "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: this.reset.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "wallet.reset"
    })), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), this.state.associatedAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "wallet.wif_associated_accounts"
    }), this.state.associatedAccount.map((value, key) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        key: key
      }, value);
    })))), account_rows ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !account_rows.length ? counterpart__WEBPACK_IMPORTED_MODULE_11___default().translate("wallet.no_accounts") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "explorer.account.title"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "settings.restore_key_count"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, account_rows)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), !import_ready && !this.state.genesis_filter_initalizing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, privateKey ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      onSubmit: this.onWif.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      component: "label",
      content: "wallet.paste_private"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Input, {
      ref: "wifInput",
      type: "password",
      id: "wif",
      tabIndex: tabIndex++,
      style: {
        marginBottom: "16px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "importError"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "red"
    }, this.state.errorTextMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Button, {
      type: "primary",
      htmlType: "submit",
      style: {
        marginRight: "16px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "wallet.submit"
    })), cancelButton) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      onSubmit: this._passwordCheck.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "wallet.bts_09_export"
    }), this.state.no_file ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\xA0 (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: this.reset.bind(this)
    }, "Reset"), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "file",
      id: "file_input",
      accept: ".json",
      style: {
        border: "solid",
        marginBottom: 15
      },
      key: this.state.reset_file_name,
      onChange: this.upload.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.state.import_file_message), !this.state.no_file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Input, {
      type: "password",
      ref: "password",
      key: this.state.reset_password,
      placeholder: password_placeholder,
      onChange: () => {
        if (this.state.import_password_message && this.state.import_password_message.length) {
          this.setState({
            import_password_message: null
          });
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "facolor-error"
    }, this.state.import_password_message)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__.Button, {
      type: "primary",
      disabled: !!this.state.no_file,
      htmlType: "submit",
      style: {
        marginRight: "16px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "wallet.submit"
    })), cancelButton))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null))) : null, import_ready ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button success", {
        disabled: !import_ready
      }),
      onClick: this._saveImport.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "wallet.import_keys"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button secondary",
      onClick: this.reset.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "wallet.cancel"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      content: "wallet.unclaimed"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      component: "p",
      content: "wallet.claim_later"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_10___default()), {
      component: "label",
      content: "wallet.totals"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_14__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)) : null);
  }

}

ImportKeys = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(ImportKeys, {
  listenTo() {
    return [stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"]];
  },

  getProps() {
    return {
      importing: stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().importing
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportKeys);

/***/ }),

/***/ 3357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(591);


class BrainkeyActions {
  setBrainkey(brnkey) {
    return brnkey;
  }

}

var BrainkeyActionsWrapped = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createActions(BrainkeyActions);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrainkeyActionsWrapped);

/***/ }),

/***/ 3358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrainkeyStoreFactory)
/* harmony export */ });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(591);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(437);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(590);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3357);





/** Each instance supports a single brainkey. */

class BrainkeyStoreFactory {
  static instances = new Map();
  /** This may be called multiple times for the same <b>name</b>.  When done,
      (componentWillUnmount) make sure to call this.closeInstance()
  */

  static getInstance(name) {
    var instance = BrainkeyStoreFactory.instances.get(name);

    if (!instance) {
      instance = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(BrainkeyStoreImpl, "BrainkeyStore");
      BrainkeyStoreFactory.instances.set(name, instance);
    }

    var subscribed_instance_key = name + " subscribed_instance";

    if (!BrainkeyStoreFactory.instances.get(subscribed_instance_key)) {
      var subscribed_instance = instance.chainStoreUpdate.bind(instance);
      bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.subscribe(subscribed_instance);
      BrainkeyStoreFactory.instances.set(subscribed_instance_key, subscribed_instance);
    }

    return instance;
  }

  static closeInstance(name) {
    var instance = BrainkeyStoreFactory.instances.get(name);
    if (!instance) throw new Error("unknown instance " + name);
    var subscribed_instance_key = name + " subscribed_instance";
    var subscribed_instance = BrainkeyStoreFactory.instances.get(subscribed_instance_key);
    BrainkeyStoreFactory.instances.delete(subscribed_instance_key);
    bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.unsubscribe(subscribed_instance);
    instance.clearCache();
  }

}
/** Derived keys may be unassigned from accounts therefore we must define a
    fixed block of derivied keys then monitor the entire block.
*/

var DERIVIED_BRAINKEY_POOL_SIZE = 10;

class BrainkeyStoreImpl extends stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super();
    this.clearCache();
    this.bindListeners({
      onSetBrainkey: actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__["default"].setBrainkey
    });

    this._export("inSync", "chainStoreUpdate", "clearCache");
  } // chainStoreUnsubscribe() {
  //     try{
  //         ChainStore.unsubscribe(this.chainStoreUpdate)
  //     }catch(e1) {console.log("unsub 1 fail");
  //         try{
  //             ChainStore.unsubscribe(this.chainStoreUpdate.bind(this))
  //         }catch(e2) {console.log("unsub 1 fail")}
  //     }
  // }


  clearCache() {
    this.state = {
      brnkey: "",
      account_ids: immutable__WEBPACK_IMPORTED_MODULE_1___default().Set()
    };
    this.derived_keys = new Array(); // Compared with ChainStore.account_ids_by_key

    this.account_ids_by_key = null;
  }
  /** Saves the brainkey and begins the lookup for derived account referneces */


  onSetBrainkey(brnkey) {
    this.clearCache();
    this.setState({
      brnkey
    });
    this.deriveKeys(brnkey);
    this.chainStoreUpdate();
  }
  /** @return <b>true</b> when all derivied account references are either
      found or known not to exist.
  */


  inSync() {
    this.derived_keys.forEach(derived_key => {
      if (isPendingFromChain(derived_key)) return false;
    });
    return true;
  }

  chainStoreUpdate() {
    if (!this.derived_keys.length) return;
    if (this.account_ids_by_key === bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.account_ids_by_key) return;
    this.account_ids_by_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.account_ids_by_key;
    this.updateAccountIds();
  }

  deriveKeys(brnkey = this.state.brnkey) {
    var sequence = this.derived_keys.length; // next sequence (starting with 0)

    var private_key = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.key.get_brainPrivateKey(brnkey, sequence);
    var derived_key = derivedKeyStruct(private_key);
    this.derived_keys.push(derived_key);
    if (this.derived_keys.length < DERIVIED_BRAINKEY_POOL_SIZE) this.deriveKeys(brnkey);
  }

  updateAccountIds() {
    var new_account_ids = immutable__WEBPACK_IMPORTED_MODULE_1___default().Set().withMutations(new_ids => {
      var updatePubkey = public_string => {
        var chain_account_ids = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAccountRefsOfKey(public_string);
        if (chain_account_ids) chain_account_ids.forEach(chain_account_id => {
          new_ids.add(chain_account_id);
        });
      };

      this.derived_keys.forEach(derived_key => updatePubkey(derived_key.public_string));
    });

    if (!new_account_ids.equals(this.state.account_ids)) {
      this.state.account_ids = new_account_ids;
      this.setState({
        account_ids: new_account_ids
      });
    }
  }

}

function derivedKeyStruct(private_key) {
  var public_string = private_key.toPublicKey().toPublicKeyString();
  var derived_key = {
    private_key,
    public_string
  };
  return derived_key;
}

var isPendingFromChain = derived_key => bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAccountRefsOfKey(derived_key.public_string) === undefined;

/***/ }),

/***/ 3363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportKeysStoreWrapped": () => (/* binding */ ImportKeysStoreWrapped),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(591);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(590);



class ImportKeysStore extends stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super();
    this.state = this._getInitialState();

    this._export("importing");
  }

  _getInitialState() {
    return {
      importing: false
    };
  }

  importing(importing) {
    this.setState({
      importing
    });
  }

}

var ImportKeysStoreWrapped = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(ImportKeysStore, "ImportKeysStore");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportKeysStoreWrapped);

/***/ }),

/***/ 3364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYuYTYyYzhmMWExYmYwOTJjMjhmYzMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUFBO0FBS0E7O0FBdkRBOztBQXlEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7O0FBMUJBOztBQTZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUlBOztBQUVBO0FBQ0E7QUFJQTtBQUFBO0FBSUE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFJQTtBQUFBO0FBSUE7O0FBRUE7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFnQkE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7O0FBdElBOztBQXlJQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUlBO0FBSUE7QUFFQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVVBOztBQTlCQTs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQU5BO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBR0E7QUFMQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQWdCQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFsSEE7O0FBcUhBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFTQTtBQU1BO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBUUE7QUFDQTs7QUEzRUE7QUE4RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFOQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQU9BOztBQWZBOztBQWlCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQUE7QUFLQTtBQURBO0FBT0E7QUFBQTtBQUtBOztBQXZCQTs7QUF5QkE7O0FBRUE7QUFDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUlBO0FBQUE7QUFBQTs7QUFDQTtBQUNBOztBQVpBOztBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFsQ0E7QUFzQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBOztBQU1BO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFTQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFPQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBN0lBOztBQWdKQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUtBOztBQWZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFQQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBSUE7QUFBQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBWUE7O0FBMURBOztBQTREQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTs7QUFqREE7O0FBbURBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXNCQTs7QUFFQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBSUE7QUFXQTtBQVNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTs7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFTQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBREE7QUFIQTtBQVFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBOztBQUNBO0FBQUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQURBOztBQWNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7O0FBRUE7QUFDQTtBQUdBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQWFBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFBQTtBQWtCQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQU1BO0FBREE7QUFNQTtBQUFBO0FBS0E7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVRBO0FBaUJBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUF0QkE7QUF3QkE7QUFBQTtBQVFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFpQkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQU1BO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQVlBOztBQS8zQkE7O0FBazRCQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBO0FBWUE7Ozs7Ozs7Ozs7OztBQ2w3QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEE7O0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBaENBO0FBbUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQW5GQTs7QUFzRkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFiQTs7QUFnQkE7QUFJQTs7Ozs7Ozs7QUN2QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvQWNjb3VudENhcmQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0Zvcm1zL015QWNjb3VudHMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1BY3RpdmUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1Bc3NldFRvdGFsLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9XYWxsZXQvQmFsYW5jZUNsYWltU2VsZWN0b3IuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1dhbGxldC9CcmFpbmtleS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JyYWlua2V5SW5wdXQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1dhbGxldC9FeGlzdGluZ0FjY291bnQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1dhbGxldC9JbXBvcnRLZXlzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvYWN0aW9ucy9CcmFpbmtleUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL3N0b3Jlcy9CcmFpbmtleVN0b3JlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9zdG9yZXMvSW1wb3J0S2V5c1N0b3JlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1dhbGxldC9JbXBvcnRLZXlzLnNjc3M/MjEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcclxuaW1wb3J0IEFjY291bnRJbWFnZSBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50SW1hZ2VcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuLyoqXHJcbiAqICBAYnJpZWYgZGlzcGxheXMgdGhlIHN1bW1hcnkgb2YgYSBnaXZlbiBhY2NvdW50IGluIGEgY29uZGVuY2VkIHZpZXcgKGZvciB0aGUgZGFzaGJvYXJkKVxyXG4gKlxyXG4gKiAgVGhpcyBjYXJkIGhhcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XHJcbiAqXHJcbiAqICB7IGFjY291bnQ6ICR7bmFtZV9vcl9pZH0gfVxyXG4gKi9cclxuXHJcbmNsYXNzIEFjY291bnRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBvbkNhcmRDbGljayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9hY2NvdW50LyR7bmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBudWxsO1xyXG4gICAgICAgIGxldCBiYWxhbmNlcyA9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzTXlBY2NvdW50ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWNjb3VudCkge1xyXG4gICAgICAgICAgICBuYW1lID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgICAgIGxldCBhYmFsID0gdGhpcy5wcm9wcy5hY2NvdW50LmdldChcImJhbGFuY2VzXCIpO1xyXG4gICAgICAgICAgICBpZiAoYWJhbCkge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZXMgPSBhYmFsXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VBbW91bnQgPSBDaGFpblN0b3JlLmdldE9iamVjdCh4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYWxhbmNlQW1vdW50LmdldChcImJhbGFuY2VcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudCBiYWxhbmNlPXt4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNNeUFjY291bnQgPSBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQodGhpcy5wcm9wcy5hY2NvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBhY2NvdW50LWNhcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNhcmRDbGljay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYXJkXCIgKyAoaXNNeUFjY291bnQgPyBcIiBteS1hY2NvdW50XCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e25hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3toZWlnaHQ6IDY0LCB3aWR0aDogNjR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiYWxhbmNlc1wiPntiYWxhbmNlc308L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQWNjb3VudENhcmQgPSBCaW5kVG9DaGFpblN0YXRlKEFjY291bnRDYXJkKTtcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY2NvdW50Q2FyZCk7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBBY2NvdW50U2VsZWN0IGZyb20gXCJjb21wb25lbnRzL0Zvcm1zL0FjY291bnRTZWxlY3RcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIE15QWNjb3VudHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50czogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnRzTGlzdC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgYWNjb3VudF9uYW1lcyA9IHRoaXMucHJvcHMuYWNjb3VudHNcclxuICAgICAgICAgICAgLmZpbHRlcihhY2NvdW50ID0+ICEhYWNjb3VudClcclxuICAgICAgICAgICAgLmZpbHRlcihhY2NvdW50ID0+IEFjY291bnRTdG9yZS5pc015QWNjb3VudChhY2NvdW50KSlcclxuICAgICAgICAgICAgLm1hcChhY2NvdW50ID0+IGFjY291bnQuZ2V0KFwibmFtZVwiKSlcclxuICAgICAgICAgICAgLnNvcnQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWNjb3VudFNlbGVjdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXM9e2FjY291bnRfbmFtZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvdW50U2VsZWN0KGFjY291bnRfbmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoYWNjb3VudF9uYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShNeUFjY291bnRzKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcImNvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IFByaXZhdGVLZXlTdG9yZSBmcm9tIFwic3RvcmVzL1ByaXZhdGVLZXlTdG9yZVwiO1xuaW1wb3J0IEFjY291bnRSZWZzU3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50UmVmc1N0b3JlXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUgZnJvbSBcInN0b3Jlcy9CYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZVwiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9uc1wiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbVNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1TZWxlY3RvclwiO1xuaW1wb3J0IFdhbGxldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0QWN0aW9uc1wiO1xuaW1wb3J0IE15QWNjb3VudHMgZnJvbSBcImNvbXBvbmVudHMvRm9ybXMvTXlBY2NvdW50c1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgQmFsYW5jZUNsYWltQWN0aXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBsZXQga2V5cyA9IFByaXZhdGVLZXlTdG9yZS5nZXRTdGF0ZSgpLmtleXM7XG4gICAgICAgIGxldCBrZXlTZXEgPSBrZXlzLmtleVNlcSgpO1xuICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLnNldFB1YmtleXMoa2V5U2VxKTtcbiAgICAgICAgdGhpcy5leGlzdGluZ19rZXlzID0ga2V5U2VxO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQga2V5cyA9IFByaXZhdGVLZXlTdG9yZS5nZXRTdGF0ZSgpLmtleXM7XG4gICAgICAgIGxldCBrZXlTZXEgPSBrZXlzLmtleVNlcSgpO1xuICAgICAgICBpZiAoIWtleVNlcS5lcXVhbHModGhpcy5leGlzdGluZ19rZXlzKSkge1xuICAgICAgICAgICAgdGhpcy5leGlzdGluZ19rZXlzID0ga2V5U2VxO1xuICAgICAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRQdWJrZXlzKGtleVNlcSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hY2NvdW50X3JlZnMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubm9fYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmxvYWRpbmdfYmFsYW5jZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJmhlbGxpcDtcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5iYWxhbmNlcyB8fCAhdGhpcy5wcm9wcy5iYWxhbmNlcy5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubm9fYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGltcG9ydF9yZWFkeSA9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkX2JhbGFuY2VzLnNpemUgJiYgdGhpcy5wcm9wcy5jbGFpbV9hY2NvdW50X25hbWU7XG4gICAgICAgIGxldCBjbGFpbV9iYWxhbmNlX2xhYmVsID0gaW1wb3J0X3JlYWR5XG4gICAgICAgICAgICA/IGAgKCR7dGhpcy5wcm9wcy5jbGFpbV9hY2NvdW50X25hbWV9KWBcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgY2VudGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5vLWJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jbGFpbV9iYWxhbmNlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e292ZXJmbG93WTogXCJoaWRkZW4gIWltcG9ydGFudFwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLXdpZHRoLWNvbnRlbnQgY2VudGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXlBY2NvdW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMucHJvcHMuYmFsYW5jZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzPXtJbW11dGFibGUuTGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudF9yZWZzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xhaW1BY2NvdW50Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDbGFpbVNlbGVjdG9yIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lKFwiYnV0dG9uIHN1Y2Nlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFpbXBvcnRfcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGFpbUJhbGFuY2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jbGFpbV9iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge2NsYWltX2JhbGFuY2VfbGFiZWx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gY2FuY2VsXCIgb25DbGljaz17dGhpcy5vbkJhY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25CYWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuXG4gICAgb25DbGFpbUFjY291bnRDaGFuZ2UoY2xhaW1fYWNjb3VudF9uYW1lKSB7XG4gICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuY2xhaW1BY2NvdW50Q2hhbmdlKGNsYWltX2FjY291bnRfbmFtZSk7XG4gICAgfVxuXG4gICAgb25DbGFpbUJhbGFuY2UoKSB7XG4gICAgICAgIFdhbGxldEFjdGlvbnMuaW1wb3J0QmFsYW5jZShcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF9iYWxhbmNlcyxcbiAgICAgICAgICAgIHRydWUgLy9icm9hZGNhc3RcbiAgICAgICAgKS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiY2xhaW1CYWxhbmNlXCIsIGVycm9yKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZXJyb3I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5kYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5iYWxhbmNlX2NsYWltX2Vycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX21zZzogbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkJhbGFuY2VDbGFpbUFjdGl2ZSA9IGNvbm5lY3QoQmFsYW5jZUNsYWltQWN0aXZlLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUsIEFjY291bnRSZWZzU3RvcmUsIFByaXZhdGVLZXlTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgbGV0IHByb3BzID0gQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgcHJvcHMuYWNjb3VudF9yZWZzID0gQWNjb3VudFJlZnNTdG9yZS5nZXRBY2NvdW50UmVmcygpO1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VDbGFpbUFjdGl2ZTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUgZnJvbSBcInN0b3Jlcy9CYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZVwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBCYWxhbmNlQ2xhaW1Bc3NldFRvdGFscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmFsYW5jZXMgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmxvYWRpbmdfYmFsYW5jZXNcIiAvPiZoZWxsaXA7XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsX2J5X2Fzc2V0ID0gdGhpcy5wcm9wcy5iYWxhbmNlc1xyXG4gICAgICAgICAgICAuZ3JvdXBCeSh2ID0+IHYuYmFsYW5jZS5hc3NldF9pZClcclxuICAgICAgICAgICAgLm1hcChsID0+IGwucmVkdWNlKChyLCB2KSA9PiByICsgTnVtYmVyKHYuYmFsYW5jZS5hbW91bnQpLCAwKSk7XHJcblxyXG4gICAgICAgIGlmICghdG90YWxfYnlfYXNzZXQuc2l6ZSkgcmV0dXJuIDxkaXY+Tm9uZTwvZGl2PjtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0b3RhbF9ieV9hc3NldFxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHRvdGFsLCBhc3NldF9pZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXNzZXRfaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvQXJyYXkoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQmFsYW5jZUNsYWltQXNzZXRUb3RhbHMgPSBjb25uZWN0KEJhbGFuY2VDbGFpbUFzc2V0VG90YWxzLCB7XHJcbiAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICByZXR1cm4gW0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXTtcclxuICAgIH0sXHJcbiAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4gQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlQ2xhaW1Bc3NldFRvdGFscztcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5cbmltcG9ydCBQcml2YXRlS2V5U3RvcmUgZnJvbSBcInN0b3Jlcy9Qcml2YXRlS2V5U3RvcmVcIjtcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZSBmcm9tIFwic3RvcmVzL0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBCYWxhbmNlQ2xhaW1TZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lKVxuICAgICAgICAgICAgdGhpcy5vbkNsYWltQWNjb3VudChcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jaGVja2VkXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWxhbmNlcyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAhdGhpcy5wcm9wcy50b3RhbF9ieV9hY2NvdW50X2Fzc2V0LnNpemVcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz47XG5cbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnsvKiBDIEggRSBDIEsgQiBPIFggKi99PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnVuY2xhaW1lZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnVuY2xhaW1lZF92ZXN0aW5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50Lm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50b3RhbF9ieV9hY2NvdW50X2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgociwgbmFtZV9hc3NldCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXsrK2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuY2hlY2tlZC5nZXQoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGVja2JveC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5iYWxhbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ci51bmNsYWltZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ci51bmNsYWltZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17bmFtZV9hc3NldC5nZXQoMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ci52ZXN0aW5nLnVuY2xhaW1lZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyLnZlc3RpbmcudW5jbGFpbWVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e25hbWVfYXNzZXQuZ2V0KDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBvZiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ci52ZXN0aW5nLnRvdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtuYW1lX2Fzc2V0LmdldCgxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ge25hbWVfYXNzZXQuZ2V0KDApfSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvQXJyYXkoKX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25DaGVja2JveChpbmRleCwgYmFsYW5jZXMpIHtcbiAgICAgICAgbGV0IGNoZWNrZWQgPSB0aGlzLnByb3BzLmNoZWNrZWQ7XG4gICAgICAgIGlmIChjaGVja2VkLmdldChpbmRleCkpIHtcbiAgICAgICAgICAgIGNoZWNrZWQgPSBjaGVja2VkLmRlbGV0ZShpbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2VkID0gY2hlY2tlZC5zZXQoaW5kZXgsIGJhbGFuY2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuc2V0U2VsZWN0ZWRCYWxhbmNlQ2xhaW1zKGNoZWNrZWQpO1xuICAgIH1cblxuICAgIG9uQ2xhaW1BY2NvdW50KGNsYWltX2FjY291bnRfbmFtZSwgY2hlY2tlZCkge1xuICAgICAgICAvLyBBIFUgVCBPICBTIEUgTCBFIEMgVCAgQSBDIEMgTyBVIE4gVCBTXG4gICAgICAgIC8vIG9ubHkgaWYgbm90aGluZyBpcyBzZWxlY3RlZCAocGxheSBpdCBzYWZlKVxuICAgICAgICBpZiAoY2hlY2tlZC5zaXplKSByZXR1cm47XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICB0aGlzLnByb3BzLnRvdGFsX2J5X2FjY291bnRfYXNzZXQuZm9yRWFjaCgodiwgaykgPT4ge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIGxldCBuYW1lID0gay5nZXQoMCk7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gY2xhaW1fYWNjb3VudF9uYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHYudW5jbGFpbWVkIHx8IHYudmVzdGluZy51bmNsYWltZWQpXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSBjaGVja2VkLnNldChpbmRleCwgdi5iYWxhbmNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2hlY2tlZC5zaXplKVxuICAgICAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRTZWxlY3RlZEJhbGFuY2VDbGFpbXMoY2hlY2tlZCk7XG4gICAgfVxufVxuXG5CYWxhbmNlQ2xhaW1TZWxlY3RvciA9IGNvbm5lY3QoQmFsYW5jZUNsYWltU2VsZWN0b3IsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgbGV0IHByb3BzID0gQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgbGV0IHtiYWxhbmNlcywgYWRkcmVzc190b19wdWJrZXl9ID0gcHJvcHM7XG4gICAgICAgIGxldCBwcml2YXRlX2tleXMgPSBQcml2YXRlS2V5U3RvcmUuZ2V0U3RhdGUoKS5rZXlzO1xuICAgICAgICBsZXQgZ3JvdXBDb3VudE1hcCA9IEltbXV0YWJsZS5NYXAoKS5hc011dGFibGUoKTtcbiAgICAgICAgbGV0IGdyb3VwQ291bnQgPSAoZ3JvdXAsIGRpc3RpbmN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgc2V0ID0gZ3JvdXBDb3VudE1hcC5nZXQoZ3JvdXApO1xuICAgICAgICAgICAgaWYgKCFzZXQpIHtcbiAgICAgICAgICAgICAgICBzZXQgPSBJbW11dGFibGUuU2V0KCkuYXNNdXRhYmxlKCk7XG4gICAgICAgICAgICAgICAgZ3JvdXBDb3VudE1hcC5zZXQoZ3JvdXAsIHNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXQuYWRkKGRpc3RpbmN0KTtcbiAgICAgICAgICAgIHJldHVybiBzZXQuc2l6ZTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGJhbGFuY2VzKVxuICAgICAgICAgICAgcHJvcHMudG90YWxfYnlfYWNjb3VudF9hc3NldCA9IGJhbGFuY2VzXG4gICAgICAgICAgICAgICAgLmdyb3VwQnkodiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEsgRSBZIFNcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVzID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHB1YmtleSA9IGFkZHJlc3NfdG9fcHVia2V5LmdldCh2Lm93bmVyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfa2V5X29iamVjdCA9IHByaXZhdGVfa2V5cy5nZXQocHVia2V5KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW1wb3J0ZWQgQWNjb3VudCBOYW1lcyAoanVzdCBhIHZpc3VhbCBhaWQsIGhlbHBzIHRvIGF1dG8gc2VsZWN0IGEgcmVhbCBhY2NvdW50KVxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlX2tleV9vYmplY3QgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfa2V5X29iamVjdC5pbXBvcnRfYWNjb3VudF9uYW1lc1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lcyA9IHByaXZhdGVfa2V5X29iamVjdC5pbXBvcnRfYWNjb3VudF9uYW1lcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTaWduaW5nIGlzIHZlcnkgc2xvdywgZnVydGhlciBkaXZpZGUgdGhlIGdyb3VwcyBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHNpZ25hdHVyZXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhdGNoX251bWJlciA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwQ291bnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1tdXRhYmxlLkxpc3QoW25hbWVzLCB2LmJhbGFuY2UuYXNzZXRfaWRdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Lm93bmVyXG4gICAgICAgICAgICAgICAgICAgICAgICApIC8gNjBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVfYXNzZXRfa2V5ID0gSW1tdXRhYmxlLkxpc3QoW1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB2LmJhbGFuY2UuYXNzZXRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaF9udW1iZXJcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lX2Fzc2V0X2tleTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAobCA9PlxuICAgICAgICAgICAgICAgICAgICBsLnJlZHVjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIChyLCB2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gViBBIEwgVSBFIFNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnB1YmxpY19rZXlfc3RyaW5nID0gYWRkcmVzc190b19wdWJrZXkuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Lm93bmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmJhbGFuY2VzID0gci5iYWxhbmNlcy5hZGQodik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYudmVzdGVkX2JhbGFuY2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudmVzdGluZy51bmNsYWltZWQgKz0gTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52ZXN0ZWRfYmFsYW5jZS5hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci52ZXN0aW5nLnRvdGFsICs9IE51bWJlcih2LmJhbGFuY2UuYW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnVuY2xhaW1lZCArPSBOdW1iZXIodi5iYWxhbmNlLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmNsYWltZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVzdGluZzoge3VuY2xhaW1lZDogMCwgdG90YWw6IDB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2VzOiBJbW11dGFibGUuU2V0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuc29ydEJ5KGsgPT4gayk7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZUNsYWltU2VsZWN0b3I7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgQnJhaW5rZXlBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JyYWlua2V5QWN0aW9uc1wiO1xyXG5pbXBvcnQgQnJhaW5rZXlTdG9yZUZhY3RvcnkgZnJvbSBcInN0b3Jlcy9CcmFpbmtleVN0b3JlXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJyYWlua2V5SW5wdXQgZnJvbSBcImNvbXBvbmVudHMvV2FsbGV0L0JyYWlua2V5SW5wdXRcIjtcclxuaW1wb3J0IHt0b1BhaXJzfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEFjY291bnRDYXJkIGZyb20gXCJjb21wb25lbnRzL0Rhc2hib2FyZC9BY2NvdW50Q2FyZFwiO1xyXG5cclxuY29uc3QgY29ubmVjdE9iamVjdCA9IHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbQnJhaW5rZXlTdG9yZUZhY3RvcnkuZ2V0SW5zdGFuY2UoXCJ3bWNcIildO1xyXG4gICAgfSxcclxuICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiBCcmFpbmtleVN0b3JlRmFjdG9yeS5nZXRJbnN0YW5jZShcIndtY1wiKS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY2xhc3MgQnJhaW5rZXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgQnJhaW5rZXlTdG9yZUZhY3RvcnkuY2xvc2VJbnN0YW5jZShcIndtY1wiKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxCcmFpbmtleUlucHV0QWNjZXB0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnJhaW5rZXkgLz5cclxuICAgICAgICAgICAgICAgIDwvQnJhaW5rZXlJbnB1dEFjY2VwdD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQnJhaW5rZXkgPSBjb25uZWN0KEJyYWlua2V5LCBjb25uZWN0T2JqZWN0KTtcclxuZXhwb3J0IGRlZmF1bHQgQnJhaW5rZXk7XHJcblxyXG5jbGFzcyBWaWV3QnJhaW5rZXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBzaG9ydF9icm5rZXkgPSB0aGlzLnByb3BzLmJybmtleS5zdWJzdHJpbmcoMCwgMTApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5wcm9wcy5hY2NvdW50X2lkcy50b0FycmF5KClcIiwgdGhpcy5wcm9wcy5hY2NvdW50X2lkcy50b0FycmF5KCkpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPntzaG9ydF9icm5rZXl9PC9zcGFuPiZoZWxsaXA7XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY2NvdW50X2lkcy5zaXplID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCcmFpbmtleUFjY291bnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzPXtJbW11dGFibGUuTGlzdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudF9pZHMudG9BcnJheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubm9fYWNjb3VudHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5WaWV3QnJhaW5rZXkgPSBjb25uZWN0KFZpZXdCcmFpbmtleSwgY29ubmVjdE9iamVjdCk7XHJcblxyXG5jbGFzcyBCcmFpbmtleUFjY291bnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudHM6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50c0xpc3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHJvd3MgPSB0b1BhaXJzKHRoaXMucHJvcHMuYWNjb3VudHMpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiAhIWFjY291bnRbMV0pXHJcbiAgICAgICAgICAgIC5tYXAoYWNjb3VudCA9PiBhY2NvdW50WzFdLmdldChcIm5hbWVcIikpXHJcbiAgICAgICAgICAgIC5zb3J0KClcclxuICAgICAgICAgICAgLm1hcChuYW1lID0+IDxBY2NvdW50Q2FyZCBrZXk9e25hbWV9IGFjY291bnQ9e25hbWV9IC8+KTtcclxuICAgICAgICByZXR1cm4gPHNwYW4+e3Jvd3N9PC9zcGFuPjtcclxuICAgIH1cclxufVxyXG5CcmFpbmtleUFjY291bnRzID0gQmluZFRvQ2hhaW5TdGF0ZShCcmFpbmtleUFjY291bnRzKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmFpbmtleUlucHV0QWNjZXB0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHticm5rZXk6IFwiXCIsIGFjY2VwdDogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY2NlcHQpIHJldHVybiA8c3Bhbj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xyXG5cclxuICAgICAgICBsZXQgcmVhZHkgPSB0aGlzLnN0YXRlLmJybmtleSAmJiB0aGlzLnN0YXRlLmJybmtleSAhPT0gXCJcIjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnJhaW5rZXlJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkJyYWlua2V5Q2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWUoXCJidXR0b24gc3VjY2Vzc1wiLCB7ZGlzYWJsZWQ6ICFyZWFkeX0pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY2NlcHQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWNjZXB0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJyYWlua2V5Q2hhbmdlKGJybmtleSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JybmtleX0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWNjZXB0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY2VwdDogdHJ1ZX0pO1xyXG4gICAgICAgIEJyYWlua2V5QWN0aW9ucy5zZXRCcmFpbmtleSh0aGlzLnN0YXRlLmJybmtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIDxkaXYgb25DbGljaz17dGhpcy5vbkxvb2t1cEFjY291bnRzLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzXCI+TG9va3VwIEFjY291bnRzPC9kaXY+XHJcbi8vIG9uTG9va3VwQWNjb3VudHMoKSB7XHJcbi8vXHJcbi8vIH1cclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHtoYXNoLCBrZXl9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuXG52YXIgZGljdGlvbmFyeV9zZXQ7XG5cbmlmIChfX0VMRUNUUk9OX18pIHtcbiAgICBkaWN0aW9uYXJ5X3NldCA9IG5ldyBTZXQoXG4gICAgICAgIHJlcXVpcmUoXCJjb21tb24vZGljdGlvbmFyeV9lbi5qc29uXCIpLmVuLnNwbGl0KFwiLFwiKVxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYWlua2V5SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYnJua2V5OiBcIlwiLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICghX19FTEVDVFJPTl9fKSB7XG4gICAgICAgICAgICBmZXRjaChgJHtfX0JBU0VfVVJMX199ZGljdGlvbmFyeS5qc29uYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXBseSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBseS5qc29uKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeV9zZXQgPSBuZXcgU2V0KHJlc3VsdC5lbi5zcGxpdChcIixcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoIGRpY3Rpb25hcnkgZXJyb3I6XCIsIGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2hlY2tCcmFpbktleSgpIHtcbiAgICAgICAgbGV0IHNwZWxsY2hlY2tfd29yZHMgPSB0aGlzLnN0YXRlLmJybmtleS5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBjaGVja2VkX3dvcmRzID0gW107XG4gICAgICAgIHNwZWxsY2hlY2tfd29yZHMuZm9yRWFjaCgod29yZCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHdvcmQgPT09IFwiXCIpIHJldHVybjtcbiAgICAgICAgICAgIGxldCBzcGVsbGNoZWNrd29yZCA9IHdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHNwZWxsY2hlY2t3b3JkID0gc3BlbGxjaGVja3dvcmQubWF0Y2goL1thLXpdKy8pOyAvL2p1c3Qgc3BlbGxjaGVjayBsZXR0ZXJzXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3BlbGxjaGVja3dvcmQgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5X3NldC5oYXMoc3BlbGxjaGVja3dvcmRbMF0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgY2hlY2tlZF93b3Jkcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l9IHN0eWxlPXt7cGFkZGluZzogXCIxcHhcIiwgbWFyZ2luOiBcIjFweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY2hlY2tlZF93b3Jkcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8TWlzc3BlbGxlZFdvcmQga2V5PXtpfT57d29yZH08L01pc3NwZWxsZWRXb3JkPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLnJlYWR5ID0gY2hlY2tlZF93b3Jkcy5sZW5ndGggPiAwXG4gICAgICAgIGxldCB3b3JkX2NvdW50X2xhYmVsO1xuICAgICAgICBsZXQgd2FybiA9IHRydWU7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgIGlmIChjaGVja2VkX3dvcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmJybmtleS5sZW5ndGggPCA1MCkge1xuICAgICAgICAgICAgICAgIHdvcmRfY291bnRfbGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJybmtleS5sZW5ndGggKyBcIiBjaGFyYWN0ZXJzICg1MCBtaW5pbXVtKVwiO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkX3dvcmRzLmxlbmd0aCA8IDE2KVxuICAgICAgICAgICAgICAgICAgICB3b3JkX2NvdW50X2xhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRfd29yZHMubGVuZ3RoICsgXCIgd29yZHMgKDE2IHJlY29tbWVuZGVkKVwiO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3b3JkX2NvdW50X2xhYmVsID0gY2hlY2tlZF93b3Jkcy5sZW5ndGggKyBcIiB3b3Jkc1wiO1xuICAgICAgICAgICAgICAgICAgICB3YXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt3YXJuLCB2YWxpZCwgd29yZF9jb3VudF9sYWJlbCwgY2hlY2tlZF93b3Jkc307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nIHx8ICFkaWN0aW9uYXJ5X3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAyMH19PkZldGNoaW5nIGRpY3Rpb25hcnkuLi4uPC9kaXY+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHt3YXJuLCB3b3JkX2NvdW50X2xhYmVsLCBjaGVja2VkX3dvcmRzfSA9IHRoaXMuX2NoZWNrQnJhaW5LZXkoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGhpcy5wcm9wcy50YWJJbmRleCB8fCAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZm9ybUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYnJua2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJicm5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IDEwMCwgbWluV2lkdGg6IDQ1MH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImxlZnRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tcGFkZGluZyBuby1vdmVyZmxvd1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVja2VkX3dvcmRzfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hlY2tfZGlnaXRzICYmICF0aGlzLnByb3BzLmhpZGVDaGVja0RpZ2l0cyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja19kaWdpdHN9ICogQ2hlY2sgRGlnaXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtjbmFtZSh7ZXJyb3I6IHdhcm59KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmRfY291bnRfbGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmb3JtQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHZhciB7aWQsIHZhbHVlfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IHt2YWxpZH0gPSB0aGlzLl9jaGVja0JyYWluS2V5KCk7XG4gICAgICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgICAgICBzdGF0ZVtpZF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGlkID09PSBcImJybmtleVwiKSB7XG4gICAgICAgICAgICB2YXIgYnJua2V5ID0ga2V5Lm5vcm1hbGl6ZV9icmFpbktleSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGJybmtleS5sZW5ndGggPCA1MCA/IG51bGwgOiBicm5rZXkpO1xuICAgICAgICAgICAgc3RhdGUuY2hlY2tfZGlnaXRzID1cbiAgICAgICAgICAgICAgICBicm5rZXkubGVuZ3RoIDwgNTBcbiAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogaGFzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hhMShicm5rZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZyhcImhleFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDAsIDQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZXJyb3JDYWxsYmFjayh2YWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIE1pc3NwZWxsZWRXb3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggZG90dGVkICNmZjAwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxcHhcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjFweFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2JvcmRlckJvdHRvbTogXCIxcHggZG90dGVkICNmZjAwMDBcIn19PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFdhbGxldE1hbmFnZXJTdG9yZSBmcm9tIFwic3RvcmVzL1dhbGxldE1hbmFnZXJTdG9yZVwiO1xyXG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlIGZyb20gXCIuL0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEJyYWlua2V5IGZyb20gXCIuL0JyYWlua2V5XCI7XHJcbmltcG9ydCBJbXBvcnRLZXlzIGZyb20gXCIuL0ltcG9ydEtleXNcIjtcclxuaW1wb3J0IHtCYWNrdXBSZXN0b3JlfSBmcm9tIFwiLi9CYWNrdXBcIjtcclxuaW1wb3J0IHtnZXRXYWxsZXROYW1lfSBmcm9tIFwiYnJhbmRpbmdcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3RPYmplY3QgPSB7XHJcbiAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICByZXR1cm4gW1dhbGxldE1hbmFnZXJTdG9yZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgY29uc3Qgd2FsbGV0ID0gV2FsbGV0TWFuYWdlclN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHt3YWxsZXR9O1xyXG4gICAgfVxyXG59O1xyXG5cclxuY2xhc3MgRXhpc3RpbmdBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBoYXNfd2FsbGV0ID0gdGhpcy5wcm9wcy53YWxsZXQud2FsbGV0X25hbWVzLmNvdW50KCkgIT0gMDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBjZW50ZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYWNjb3VudC53ZWxjb21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0X25hbWU9e2dldFdhbGxldE5hbWUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaGFzX3dhbGxldCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jcmVhdGVfd2FsbGV0X2JhY2t1cFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc2V0dXBfd2FsbGV0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi9leGlzdGluZy1hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCYWNrdXBSZXN0b3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvZXhpc3RpbmctYWNjb3VudC9pbXBvcnQtYmFja3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtFeGlzdGluZ0FjY291bnRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvZXhpc3RpbmctYWNjb3VudC9pbXBvcnQta2V5c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SW1wb3J0S2V5c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnQvYnJhaW5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0JyYWlua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvZXhpc3RpbmctYWNjb3VudC9iYWxhbmNlLWNsYWltXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCYWxhbmNlQ2xhaW1BY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuRXhpc3RpbmdBY2NvdW50ID0gY29ubmVjdChFeGlzdGluZ0FjY291bnQsIGNvbm5lY3RPYmplY3QpO1xyXG5cclxuY2xhc3MgRXhpc3RpbmdBY2NvdW50T3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGFzX3dhbGxldCA9IHRoaXMucHJvcHMud2FsbGV0LndhbGxldF9uYW1lcy5jb3VudCgpICE9IDA7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7IWhhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJleGlzdGluZy1hY2NvdW50L2ltcG9ydC1iYWNrdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmltcG9ydF9iYWNrdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldF9uYW1lPXtnZXRXYWxsZXROYW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJleGlzdGluZy1hY2NvdW50L2ltcG9ydC1rZXlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuaW1wb3J0X2J0czFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJleGlzdGluZy1hY2NvdW50L2ltcG9ydC1rZXlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX3dhbGxldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgeyFoYXNfd2FsbGV0ID8gbnVsbCA6IDxCYWxhbmNlQ2xhaW1BY3RpdmUgLz59XHJcblxyXG4gICAgICAgICAgICAgICAge2hhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImhlYWRlci5kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIndhbGxldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLndhbGxldHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuRXhpc3RpbmdBY2NvdW50T3B0aW9ucyA9IGNvbm5lY3QoRXhpc3RpbmdBY2NvdW50T3B0aW9ucywgY29ubmVjdE9iamVjdCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGlzdGluZ0FjY291bnQ7XHJcbmV4cG9ydCB7RXhpc3RpbmdBY2NvdW50T3B0aW9uc307XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHtQcml2YXRlS2V5LCBBZXMsIFB1YmxpY0tleSwgRmV0Y2hDaGFpbiwgaGFzaH0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQWNjb3VudEFwaSBmcm9tIFwiYXBpL2FjY291bnRBcGlcIjtcbmltcG9ydCB7Q2hhaW5Db25maWd9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IFByaXZhdGVLZXlTdG9yZSBmcm9tIFwic3RvcmVzL1ByaXZhdGVLZXlTdG9yZVwiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuaW1wb3J0IHtXYWxsZXRDcmVhdGV9IGZyb20gXCJjb21wb25lbnRzL1dhbGxldC9XYWxsZXRDcmVhdGVcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCJjb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZSBmcm9tIFwiLi4vV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9uc1wiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbUFzc2V0VG90YWwgZnJvbSBcImNvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbUFzc2V0VG90YWxcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQgSW1wb3J0S2V5c1N0b3JlIGZyb20gXCJzdG9yZXMvSW1wb3J0S2V5c1N0b3JlXCI7XG5cbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmltcG9ydCB7QnV0dG9uLCBJbnB1dH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5yZXF1aXJlKFwiLi9JbXBvcnRLZXlzLnNjc3NcIik7XG5cbmxldCBpbXBvcnRfa2V5c19hc3NlcnRfY2hlY2tpbmcgPSBmYWxzZTtcblxuY29uc3QgS2V5Q291bnQgPSAoe2tleV9jb3VudH0pID0+IHtcbiAgICBpZiAoIWtleV9jb3VudCkgcmV0dXJuIDxzcGFuLz47XG4gICAgcmV0dXJuIDxzcGFuPkZvdW5kIHtrZXlfY291bnR9IHByaXZhdGUga2V5czwvc3Bhbj47XG59O1xuXG5jb25zdCBXSUZfS0VZX0xFTkdUSCA9IDUxO1xuXG5jbGFzcyBJbXBvcnRLZXlzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlckJhbGFuY2VDbGFpbXMgPSB0aGlzLl9yZW5kZXJCYWxhbmNlQ2xhaW1zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcHJpdmF0ZUtleTogdHJ1ZVxuICAgIH07XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKGtlZXBfZmlsZV9uYW1lID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleXNfdG9fYWNjb3VudDoge30sXG4gICAgICAgICAgICBub19maWxlOiB0cnVlLFxuICAgICAgICAgICAgYWNjb3VudF9rZXlzOiBbXSxcbiAgICAgICAgICAgIC8vYnJhaW5rZXk6IG51bGwsXG4gICAgICAgICAgICAvL2VuY3J5cHRlZF9icmFpbmtleTogbnVsbCxcbiAgICAgICAgICAgIHJlc2V0X2ZpbGVfbmFtZToga2VlcF9maWxlX25hbWVcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUucmVzZXRfZmlsZV9uYW1lXG4gICAgICAgICAgICAgICAgOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgcmVzZXRfcGFzc3dvcmQ6IERhdGUubm93KCksXG4gICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bTogbnVsbCxcbiAgICAgICAgICAgIGltcG9ydF9maWxlX21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIGltcG9ydGVkX2tleXNfcHVibGljOiB7fSxcbiAgICAgICAgICAgIGtleV90ZXh0X21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICBhc3NvY2lhdGVkQWNjb3VudDogbnVsbCxcbiAgICAgICAgICAgIGVycm9yVGV4dE1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcmluZzogZmFsc2UsXG4gICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9zdGF0dXM6IFtdLFxuICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGltcG9ydFN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVzZXQoZSwga2VlcF9maWxlX25hbWUpIHtcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKGtlZXBfZmlsZV9uYW1lKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSwgKCkgPT4gdGhpcy51cGRhdGVPbkNoYW5nZSgpKTtcbiAgICB9XG5cbiAgICBvbldpZihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmVmcy53aWZJbnB1dC5zdGF0ZS52YWx1ZTtcbiAgICAgICAgdGhpcy5hZGRCeVBhdHRlcm4odmFsdWUpO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsKGUpIHtcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRJbml0aWFsU3RhdGUoKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlT25DaGFuZ2UoKSB7XG4gICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuc2V0UHVia2V5cyhcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWMpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0SW1wb3J0QWNjb3VudEtleUNvdW50KGtleXNfdG9fYWNjb3VudCkge1xuICAgICAgICBsZXQgYWNjb3VudF9rZXljb3VudCA9IHt9O1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGtleXNfdG9fYWNjb3VudClcbiAgICAgICAgICAgIGZvciAobGV0IGFjY291bnRfbmFtZSBvZiBrZXlzX3RvX2FjY291bnRba2V5XS5hY2NvdW50X25hbWVzKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudF9rZXljb3VudFthY2NvdW50X25hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgKGFjY291bnRfa2V5Y291bnRbYWNjb3VudF9uYW1lXSB8fCAwKSArIDE7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmQgPyBhY2NvdW50X2tleWNvdW50IDogbnVsbDtcbiAgICB9XG5cbiAgICB1cGxvYWQoZXZ0KSB7XG4gICAgICAgIHRoaXMucmVzZXQobnVsbCwgdHJ1ZSk7XG4gICAgICAgIGxldCBmaWxlID0gZXZ0LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBldnQgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZ0LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBqc29uX2NvbnRlbnRzO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGpzb25fY29udGVudHMgPSBKU09OLnBhcnNlKGNvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgb25seSBjaGFuY2UgdG8gZW5jb3VudGVyIGEgbGFyZ2UgZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IHRoaXMgZm9ybWF0IGZpcnN0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUltcG9ydEtleVVwbG9hZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb25fY29udGVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfc3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlX3N0YXRlXCIsIHVwZGF0ZV9zdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHVwZGF0ZV9zdGF0ZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlX3N0YXRlLmdlbmVzaXNfZmlsdGVyX2ZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnkgZW1wdHkgcGFzc3dvcmQsIGFsc28gZGlzcGxheSBcIkVudGVyIGltcG9ydCBmaWxlIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkQ2hlY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9ERUJVRyBjb25zb2xlLmxvZyhcIi4uLiBfcGFyc2VJbXBvcnRLZXlVcGxvYWRcIixlKVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFqc29uX2NvbnRlbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUubmFtZSArIFwiIGlzIGFuIHVucmVjb2duaXplZCBmb3JtYXRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlV2FsbGV0SnNvbihqc29uX2NvbnRlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hZGRCeVBhdHRlcm4oY29udGVudHMpKSB0aHJvdyBlZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB0cnkgZW1wdHkgcGFzc3dvcmQsIGFsc28gZGlzcGxheSBcIkVudGVyIGltcG9ydCBmaWxlIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFzc3dvcmRDaGVjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiLi4uIEltcG9ydEtleXMgdXBsb2FkIGVycm9yXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ltcG9ydF9maWxlX21lc3NhZ2U6IG1lc3NhZ2V9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgfVxuXG4gICAgLyoqIEJUUyAxLjAgY2xpZW50IHdhbGxldF9leHBvcnRfa2V5cyBmb3JtYXQuICovXG4gICAgX3BhcnNlSW1wb3J0S2V5VXBsb2FkKGpzb25fY29udGVudHMsIGZpbGVfbmFtZSwgdXBkYXRlX3N0YXRlKSB7XG4gICAgICAgIGxldCBwYXNzd29yZF9jaGVja3N1bSwgdW5maWx0ZXJlZF9hY2NvdW50X2tleXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bSA9IGpzb25fY29udGVudHMucGFzc3dvcmRfY2hlY2tzdW07XG4gICAgICAgICAgICBpZiAoIXBhc3N3b3JkX2NoZWNrc3VtKVxuICAgICAgICAgICAgICAgIHRocm93IGZpbGVfbmFtZSArIFwiIGlzIGFuIHVucmVjb2duaXplZCBmb3JtYXRcIjtcblxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGpzb25fY29udGVudHMuYWNjb3VudF9rZXlzKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBmaWxlX25hbWUgKyBcIiBpcyBhbiB1bnJlY29nbml6ZWQgZm9ybWF0XCI7XG5cbiAgICAgICAgICAgIHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzID0ganNvbl9jb250ZW50cy5hY2NvdW50X2tleXM7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IGUubWVzc2FnZSB8fCBlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQlRTIDEuMCB3YWxsZXRzIG1heSBoYXZlIGEgbG90IG9mIGdlbmVyYXRlZCBidXQgdW51c2VkIGtleXMgb3Igc3BlbnQgVElUQU4gYWRkcmVzc2VzIG1ha2luZ1xuICAgICAgICAvLyB3YWxsZXRzIHNvIGxhcmdlIGl0IGlzIHdhcyBub3QgcG9zc2libGUgdG8gdXNlIHRoZSBKYXZhU2NyaXB0IHdhbGxldHMgd2l0aCB0aGVtLlxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgIEJUUyAxLjAgaG9zdGVkIHdhbGxldCBiYWNrdXAgKHdhbGxldC5iaXRzaGFyZXMub3JnKSBpcyBzdXBwb3J0ZWQuXG5cbiAgICAgQlRTIDEuMCBuYXRpdmUgd2FsbGV0cyBzaG91bGQgdXNlIHdhbGxldF9leHBvcnRfa2V5cyBpbnN0ZWFkIG9mIGEgd2FsbGV0IGJhY2t1cC5cblxuICAgICBOb3RlLCAgTmF0aXZlIHdhbGxldCBiYWNrdXBzIHdpbGwgYmUgcmVqZWN0ZWQuICBUaGUgbG9naWMgYmVsb3cgZG9lcyBub3RcbiAgICAgY2FwdHVyZSBhc3NpZ25lZCBhY2NvdW50IG5hbWVzIChmb3IgdW5yZWdpc3RlZCBhY2NvdW50cykgYW5kIGRvZXMgbm90IGNhcHR1cmVcbiAgICAgc2lnbmluZyBrZXlzLiAgVGhlIGhvc3RlZCB3YWxsZXQgaGFzIG9ubHkgcmVnaXN0ZXJlZCBhY2NvdW50cyBhbmQgbm8gc2lnbmluZ1xuICAgICBrZXlzLlxuXG4gICAgICovXG4gICAgX3BhcnNlV2FsbGV0SnNvbihqc29uX2NvbnRlbnRzKSB7XG4gICAgICAgIGxldCBwYXNzd29yZF9jaGVja3N1bTtcbiAgICAgICAgbGV0IGVuY3J5cHRlZF9icmFpbmtleTtcbiAgICAgICAgbGV0IGFkZHJlc3NfdG9fZW5ja2V5cyA9IHt9O1xuICAgICAgICBsZXQgYWNjb3VudF9hZGRyZXNzZXMgPSB7fTtcblxuICAgICAgICBsZXQgc2F2ZVB1YmtleUFjY291bnQgPSBmdW5jdGlvbiAocHVia2V5LCBhY2NvdW50X25hbWUpIHtcbiAgICAgICAgICAgIC8vcmVwbGFjZSBCVFMgd2l0aCBHUEhcbiAgICAgICAgICAgIHB1YmtleSA9IENoYWluQ29uZmlnLmFkZHJlc3NfcHJlZml4ICsgcHVia2V5LnN1YnN0cmluZygzKTtcbiAgICAgICAgICAgIGxldCBhZGRyZXNzID0gUHVibGljS2V5LmZyb21QdWJsaWNLZXlTdHJpbmcoXG4gICAgICAgICAgICAgICAgcHVia2V5XG4gICAgICAgICAgICApLnRvQWRkcmVzc1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IGFkZHJlc3NlcyA9IGFjY291bnRfYWRkcmVzc2VzW2FjY291bnRfbmFtZV0gfHwgW107XG4gICAgICAgICAgICBhZGRyZXNzID0gXCJHUEhcIiArIGFkZHJlc3Muc3Vic3RyaW5nKDMpO1xuICAgICAgICAgICAgLy9ERUJVRyBjb25zb2xlLmxvZyhcIi4uLiBhZGRyZXNzXCIsYWRkcmVzcyxhY2NvdW50X25hbWUpXG4gICAgICAgICAgICBhZGRyZXNzZXMucHVzaChhZGRyZXNzKTtcbiAgICAgICAgICAgIGFjY291bnRfYWRkcmVzc2VzW2FjY291bnRfbmFtZV0gPSBhZGRyZXNzZXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShqc29uX2NvbnRlbnRzKSkge1xuICAgICAgICAgICAgICAgIC8vREVCVUcgY29uc29sZS5sb2coJy4uLiBqc29uX2NvbnRlbnRzJyxqc29uX2NvbnRlbnRzKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgd2FsbGV0IGZvcm1hdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YganNvbl9jb250ZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlfcmVjb3JkX3R5cGVcIiA9PSBlbGVtZW50LnR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhLmFjY291bnRfYWRkcmVzcyAmJlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEuZW5jcnlwdGVkX3ByaXZhdGVfa2V5XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzID0gZWxlbWVudC5kYXRhLmFjY291bnRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuY2tleXMgPSBhZGRyZXNzX3RvX2VuY2tleXNbYWRkcmVzc10gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGVuY2tleXMucHVzaChlbGVtZW50LmRhdGEuZW5jcnlwdGVkX3ByaXZhdGVfa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgLy9ERUJVRyBjb25zb2xlLmxvZyhcIi4uLiBhZGRyZXNzXCIsYWRkcmVzcyxlbmNrZXlzKVxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3RvX2VuY2tleXNbYWRkcmVzc10gPSBlbmNrZXlzO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXCJhY2NvdW50X3JlY29yZF90eXBlXCIgPT0gZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50X25hbWUgPSBlbGVtZW50LmRhdGEubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVB1YmtleUFjY291bnQoZWxlbWVudC5kYXRhLm93bmVyX2tleSwgYWNjb3VudF9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaGlzdG9yeSBvZiBlbGVtZW50LmRhdGEuYWN0aXZlX2tleV9oaXN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlUHVia2V5QWNjb3VudChoaXN0b3J5WzFdLCBhY2NvdW50X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9yZWNvcmRfdHlwZVwiID09IGVsZW1lbnQudHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICBcImVuY3J5cHRlZF9icmFpbmtleVwiID09IGVsZW1lbnQuZGF0YS5rZXlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkX2JyYWlua2V5ID0gZWxlbWVudC5kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXCJtYXN0ZXJfa2V5X3JlY29yZF90eXBlXCIgPT0gZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZmlsZS5uYW1lICsgXCIgaW52YWxpZCBtYXN0ZXJfa2V5X3JlY29yZCByZWNvcmRcIjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuZGF0YS5jaGVja3N1bSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGZpbGUubmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBpcyBtaXNzaW5nIG1hc3Rlcl9rZXlfcmVjb3JkIGNoZWNrc3VtXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0gPSBlbGVtZW50LmRhdGEuY2hlY2tzdW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbmNyeXB0ZWRfYnJhaW5rZXkpXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJQbGVhc2UgdXNlIGEgQlRTIDEuMCB3YWxsZXRfZXhwb3J0X2tleXMgZmlsZSBpbnN0ZWFkXCI7XG5cbiAgICAgICAgICAgIGlmICghcGFzc3dvcmRfY2hlY2tzdW0pXG4gICAgICAgICAgICAgICAgdGhyb3cgZmlsZS5uYW1lICsgXCIgaXMgbWlzc2luZyBwYXNzd29yZF9jaGVja3N1bVwiO1xuXG4gICAgICAgICAgICBpZiAoIWVuY2tleXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IGZpbGUubmFtZSArIFwiIGRvZXMgbm90IGNvbnRhaW4gYW55IHByaXZhdGUga2V5c1wiO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBlLm1lc3NhZ2UgfHwgZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY2NvdW50X2tleXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgYWNjb3VudF9uYW1lIGluIGFjY291bnRfYWRkcmVzc2VzKSB7XG4gICAgICAgICAgICBsZXQgZW5jcnlwdGVkX3ByaXZhdGVfa2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYWRkcmVzcyBvZiBhY2NvdW50X2FkZHJlc3Nlc1thY2NvdW50X25hbWVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY2tleXMgPSBhZGRyZXNzX3RvX2VuY2tleXNbYWRkcmVzc107XG4gICAgICAgICAgICAgICAgaWYgKCFlbmNrZXlzKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbmNrZXkgb2YgZW5ja2V5cykgZW5jcnlwdGVkX3ByaXZhdGVfa2V5cy5wdXNoKGVuY2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2NvdW50X2tleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9wcml2YXRlX2tleXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGNvdWxkIHByb21wdCBmb3IgdGhpcyBicmFpbiBrZXkgaW5zdGVhZCBvbiBmaXJzdCB1c2UuICBUaGUgdXNlclxuICAgICAgICAvLyBtYXkgYWxyZWFkeSBoYXZlIGEgYnJhaW5rZXkgYXQgdGhpcyBwb2ludCBzbyB3aXRoIGEgc2luZ2xlIGJyYWlua2V5XG4gICAgICAgIC8vIHdhbGxldCB3ZSBjYW4ndCB1c2UgaXQgbm93LlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtLFxuICAgICAgICAgICAgYWNjb3VudF9rZXlzXG4gICAgICAgICAgICAvL2VuY3J5cHRlZF9icmFpbmtleVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcGFzc3dvcmRDaGVjayhldnQpIHtcbiAgICAgICAgaWYgKGV2dCAmJiBcInByZXZlbnREZWZhdWx0XCIgaW4gZXZ0KSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHdOb2RlID0gdGhpcy5yZWZzLnBhc3N3b3JkO1xuICAgICAgICAvLyBpZihwd05vZGUpIHB3Tm9kZS5mb2N1cygpXG4gICAgICAgIGxldCBwYXNzd29yZCA9IHB3Tm9kZSA/IHB3Tm9kZS52YWx1ZSA6IFwiXCI7XG4gICAgICAgIGxldCBjaGVja3N1bSA9IHRoaXMuc3RhdGUucGFzc3dvcmRfY2hlY2tzdW07XG4gICAgICAgIGxldCBuZXdfY2hlY2tzdW0gPSBoYXNoLnNoYTUxMihoYXNoLnNoYTUxMihwYXNzd29yZCkpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICBpZiAoY2hlY2tzdW0gIT0gbmV3X2NoZWNrc3VtKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbm9fZmlsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2U6IHBhc3N3b3JkLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICA/IFwiSW5jb3JyZWN0IHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5vX2ZpbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc2V0X3Bhc3N3b3JkOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgIGltcG9ydF9wYXNzd29yZF9tZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0LmltcG9ydF9wYXNzX21hdGNoXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5fZGVjcnlwdFByaXZhdGVLZXlzKHBhc3N3b3JkKVxuICAgICAgICApO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCwgMjUwKVxuICAgIH1cblxuICAgIF9kZWNyeXB0UHJpdmF0ZUtleXMocGFzc3dvcmQpIHtcbiAgICAgICAgbGV0IHBhc3N3b3JkX2FlcyA9IEFlcy5mcm9tU2VlZChwYXNzd29yZCk7XG4gICAgICAgIGxldCBmb3JtYXRfZXJyb3IxX29uY2UgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBhY2NvdW50IG9mIHRoaXMuc3RhdGUuYWNjb3VudF9rZXlzKSB7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cykge1xuICAgICAgICAgICAgICAgIGxldCBlcnJvciA9IGBBY2NvdW50ICR7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQuYWNjb3VudF9uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0gbWlzc2luZyBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzYDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0X2Vycm9yMV9vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0X2Vycm9yMV9vbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IGFjY291bnQuYWNjb3VudF9uYW1lLnRyaW0oKTtcbiAgICAgICAgICAgIGxldCBzYW1lX3ByZWZpeF9yZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgXCJeXCIgKyBDaGFpbkNvbmZpZy5hZGRyZXNzX3ByZWZpeFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjb3VudC5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY3J5cHRlZF9wcml2YXRlID0gYWNjb3VudC5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwdWJsaWNfa2V5X3N0cmluZyA9IGFjY291bnQucHVibGljX2tleXNcbiAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50LnB1YmxpY19rZXlzW2ldXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDsgLy8gcGVyZm9ybWFuY2UgZ2FpblxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfcGxhaW5oZXggPSBwYXNzd29yZF9hZXMuZGVjcnlwdEhleChcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9wcml2YXRlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbXBvcnRfa2V5c19hc3NlcnRfY2hlY2tpbmcgJiYgcHVibGljX2tleV9zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX2tleSA9IFByaXZhdGVLZXkuZnJvbUhleChwcml2YXRlX3BsYWluaGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWIgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpOyAvLyBTIEwgTyBXXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkeSA9IHB1Yi50b0FkZHJlc3NTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWJieSA9IHB1Yi50b1B1YmxpY0tleVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yID0gXCJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3Nfc3RyaW5nID0gYWNjb3VudC5hZGRyZXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFjY291bnQuYWRkcmVzc2VzW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsOyAvLyBhc3NlcnQgY2hlY2tpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nfc3RyaW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkeS5zdWJzdHJpbmcoMykgIT0gYWRkcmVzc19zdHJpbmcuc3Vic3RyaW5nKDMpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZHJlc3MgaW1wb3J0ZWQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzX3N0cmluZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGJ1dCBjYWxjdWxhdGVkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkeSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLiBcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmJ5LnN1YnN0cmluZygzKSAhPSBwdWJsaWNfa2V5X3N0cmluZy5zdWJzdHJpbmcoMylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciArPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB1YmxpYyBrZXkgaW1wb3J0ZWQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGJ1dCBjYWxjdWxhdGVkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHViYnk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciAhPSBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgTWlzcy1tYXRjaCBrZXlcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwdWJsaWNfa2V5X3N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfa2V5ID0gUHJpdmF0ZUtleS5mcm9tSGV4KHByaXZhdGVfcGxhaW5oZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB1YmxpY19rZXkgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpOyAvLyBTIEwgTyBXXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZyA9IHB1YmxpY19rZXkudG9QdWJsaWNLZXlTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2FtZV9wcmVmaXhfcmVnZXgudGVzdChwdWJsaWNfa2V5X3N0cmluZykpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdhcyBjcmVhdGluZyBhIHVucmVzcG9uc2l2ZSBjaHJvbWUgYnJvd3NlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGFmdGVyIHRoZSByZXN1bHRzIHdlcmUgc2hvd24uICBJdCB3YXMgcHJvYmFibHlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhdXNlZCBieSBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmcgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFpbkNvbmZpZy5hZGRyZXNzX3ByZWZpeCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nLnN1YnN0cmluZygzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljW3B1YmxpY19rZXlfc3RyaW5nXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7YWNjb3VudF9uYW1lc30gPSB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfcGxhaW5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gfHwge2FjY291bnRfbmFtZXM6IFtdfTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBfbmFtZSBvZiBhY2NvdW50X25hbWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9uYW1lID09IGFjY291bnRfbmFtZSkgZHVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR1cCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXMucHVzaChhY2NvdW50X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudFtwcml2YXRlX3BsYWluaGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSwgZS5zdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZS5tZXNzYWdlIHx8IGU7XG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmltcG9ydF9rZXlzX2Vycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWU6IGFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfbXNnOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9sZXQgZW5jX2JyYWlua2V5ID0gdGhpcy5zdGF0ZS5lbmNyeXB0ZWRfYnJhaW5rZXlcbiAgICAgICAgLy9pZihlbmNfYnJhaW5rZXkpe1xuICAgICAgICAvLyAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLy8gICAgICAgIGJyYWlua2V5OiBwYXNzd29yZF9hZXMuZGVjcnlwdEhleFRvVGV4dChlbmNfYnJhaW5rZXkpXG4gICAgICAgIC8vICAgIH0pXG4gICAgICAgIC8vfVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltcG9ydF9maWxlX21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW06IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZU9uQ2hhbmdlKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfc2F2ZUltcG9ydChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGtleXMgPSBQcml2YXRlS2V5U3RvcmUuZ2V0U3RhdGUoKS5rZXlzO1xuICAgICAgICBsZXQgZHVwcyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBwdWJsaWNfa2V5X3N0cmluZyBpbiB0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljKSB7XG4gICAgICAgICAgICBpZiAoIWtleXMuaGFzKHB1YmxpY19rZXlfc3RyaW5nKSkgY29udGludWU7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zdGF0ZS5pbXBvcnRlZF9rZXlzX3B1YmxpY1twdWJsaWNfa2V5X3N0cmluZ107XG4gICAgICAgICAgICBkdXBzW3B1YmxpY19rZXlfc3RyaW5nXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5pbXBvcnRfa2V5c19hbHJlYWR5X2ltcG9ydGVkXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5c190b19hY2NvdW50ID0gdGhpcy5zdGF0ZS5rZXlzX3RvX2FjY291bnQ7XG4gICAgICAgIGZvciAobGV0IHByaXZhdGVfcGxhaW5oZXggb2YgT2JqZWN0LmtleXMoa2V5c190b19hY2NvdW50KSkge1xuICAgICAgICAgICAgbGV0IHthY2NvdW50X25hbWVzLCBwdWJsaWNfa2V5X3N0cmluZ30gPSBrZXlzX3RvX2FjY291bnRbXG4gICAgICAgICAgICAgICAgcHJpdmF0ZV9wbGFpbmhleFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGlmIChkdXBzW3B1YmxpY19rZXlfc3RyaW5nXSlcbiAgICAgICAgICAgICAgICBkZWxldGUga2V5c190b19hY2NvdW50W3ByaXZhdGVfcGxhaW5oZXhdO1xuICAgICAgICB9XG4gICAgICAgIFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBJbXBvcnRLZXlzU3RvcmUuaW1wb3J0aW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIHNob3cgdGhlIGxvYWRpbmcgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNhdmVJbXBvcnQoKSwgMjAwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge30pO1xuICAgIH1cblxuICAgIHNhdmVJbXBvcnQoKSB7XG4gICAgICAgIGxldCBrZXlzX3RvX2FjY291bnQgPSB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudDtcbiAgICAgICAgbGV0IHByaXZhdGVfa2V5X29ianMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcHJpdmF0ZV9wbGFpbmhleCBvZiBPYmplY3Qua2V5cyhrZXlzX3RvX2FjY291bnQpKSB7XG4gICAgICAgICAgICBsZXQge2FjY291bnRfbmFtZXMsIHB1YmxpY19rZXlfc3RyaW5nfSA9IGtleXNfdG9fYWNjb3VudFtcbiAgICAgICAgICAgICAgICBwcml2YXRlX3BsYWluaGV4XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcHJpdmF0ZV9rZXlfb2Jqcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBwcml2YXRlX3BsYWluaGV4LFxuICAgICAgICAgICAgICAgIGltcG9ydF9hY2NvdW50X25hbWVzOiBhY2NvdW50X25hbWVzLFxuICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIFdhbGxldERiLmltcG9ydEtleXNXb3JrZXIocHJpdmF0ZV9rZXlfb2JqcylcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgSW1wb3J0S2V5c1N0b3JlLmltcG9ydGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgbGV0IGltcG9ydF9jb3VudCA9IHByaXZhdGVfa2V5X29ianMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndhbGxldC5pbXBvcnRfa2V5X3N1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogaW1wb3J0X2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnRTdWNjZXNzOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5vbkNhbmNlbCgpIC8vIGJhY2sgdG8gY2xhaW0gYmFsYW5jZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBJbXBvcnRLZXlzU3RvcmUuaW1wb3J0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci50YXJnZXQuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmltcG9ydF9rZXlzX2Vycm9yX3Vua25vd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl9tc2c6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkQnlQYXR0ZXJuKGNvbnRlbnRzKSB7XG4gICAgICAgIGlmICghY29udGVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yVGV4dE1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXQud2lmX2ltcG9ydF9lcnJvclwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRlbnRzLmxlbmd0aCAhPT0gV0lGX0tFWV9MRU5HVEgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVycm9yVGV4dE1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXQud2lmX2xlbmd0aF9lcnJvclwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50ID0gMCxcbiAgICAgICAgICAgIGludmFsaWRfY291bnQgPSAwO1xuICAgICAgICBsZXQgd2lmX3JlZ2V4ID0gLzVbSEpLXVsxLTlBLVphLXpdezQ5fS9nO1xuICAgICAgICBmb3IgKGxldCB3aWYgb2YgY29udGVudHMubWF0Y2god2lmX3JlZ2V4KSB8fCBbXSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9rZXkgPSBQcml2YXRlS2V5LmZyb21XaWYod2lmKTsgLy9jb3VsZCB0aHJvdyBhbmQgZXJyb3JcbiAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9wbGFpbmhleCA9IHByaXZhdGVfa2V5LnRvQnVmZmVyKCkudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgbGV0IHB1YmxpY19rZXkgPSBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpOyAvLyBTIEwgTyBXXG4gICAgICAgICAgICAgICAgbGV0IHB1YmxpY19rZXlfc3RyaW5nID0gcHVibGljX2tleS50b1B1YmxpY0tleVN0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWNbcHVibGljX2tleV9zdHJpbmddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmtleXNfdG9fYWNjb3VudFtwcml2YXRlX3BsYWluaGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lczogW10sXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGxldCBhY2NvdW50TmFtZSA9IFtdO1xuICAgICAgICAgICAgICAgIEFjY291bnRBcGkubG9va3VwQWNjb3VudEJ5UHVibGljS2V5KHB1YmxpY19rZXlfc3RyaW5nKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBhc3luYyByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJhdGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2ggPSByZXN1bHRbMF0ubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRmV0Y2hDaGFpbihcImdldEFjY291bnRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWNjb3VudE5hbWVzID0gYXdhaXQgUHJvbWlzZS5hbGwoYmF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB2YWx1ZS5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50TmFtZS5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXNzb2NpYXRlZEFjY291bnQ6IGFjY291bnROYW1lfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkX2NvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXlfdGV4dF9tZXNzYWdlOlxuICAgICAgICAgICAgICAgICAgICBcIkZvdW5kIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKCFjb3VudCA/IFwiXCIgOiBjb3VudCArIFwiIHZhbGlkXCIpICtcbiAgICAgICAgICAgICAgICAgICAgKCFpbnZhbGlkX2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIgYW5kIFwiICsgaW52YWxpZF9jb3VudCArIFwiIGludmFsaWRcIikgK1xuICAgICAgICAgICAgICAgICAgICBcIiBrZXlcIiArXG4gICAgICAgICAgICAgICAgICAgIChjb3VudCA+IDEgfHwgaW52YWxpZF9jb3VudCA+IDEgPyBcInNcIiA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgXCIuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZU9uQ2hhbmdlKClcbiAgICAgICAgKTtcbiAgICAgICAgLy8gcmVtb3ZlcyB0aGUgbWVzc2FnZSBvbiB0aGUgbmV4dCByZW5kZXJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBrZXlfdGV4dF9tZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JUZXh0TWVzc2FnZTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cblxuICAgIC8vIHRvZ2dsZUltcG9ydFR5cGUodHlwZSkge1xuICAgIC8vICAgICBpZiAoIXR5cGUpIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInRvZ2dsZUltcG9ydFR5cGVcIiwgdHlwZSk7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgcHJpdmF0ZUtleTogdHlwZSA9PT0gXCJwcml2YXRlS2V5XCJcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgX3JlbmRlckJhbGFuY2VDbGFpbXMoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCYWxhbmNlQ2xhaW1BY3RpdmUvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmRvbmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ByaXZhdGVLZXl9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtrZXlzX3RvX2FjY291bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGtleV9jb3VudCA9IE9iamVjdC5rZXlzKGtleXNfdG9fYWNjb3VudCkubGVuZ3RoO1xuICAgICAgICBsZXQgYWNjb3VudF9rZXljb3VudCA9IHRoaXMuZ2V0SW1wb3J0QWNjb3VudEtleUNvdW50KGtleXNfdG9fYWNjb3VudCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHdhbGxldCBwcmlvciB0byB0aGUgaW1wb3J0IGtleXMgKGtlZXBzIGxheW91dCBjbGVhbilcbiAgICAgICAgaWYgKCFXYWxsZXREYi5nZXRXYWxsZXQoKSlcbiAgICAgICAgICAgIHJldHVybiA8V2FsbGV0Q3JlYXRlIGltcG9ydEtleXM9e3RydWV9IGhpZGVUaXRsZT17dHJ1ZX0gLz47XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmltcG9ydGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbHRlcmluZyA9IHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJpbmc7XG4gICAgICAgIGxldCB3YXNfZmlsdGVyZWQgPVxuICAgICAgICAgICAgISF0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX3N0YXR1cy5sZW5ndGggJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ7XG4gICAgICAgIGxldCBhY2NvdW50X3Jvd3MgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX3N0YXR1cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFjY291bnRfcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgc3RhdHVzIG9mIHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5jb3VudCAmJiBzdGF0dXMudG90YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9yb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtzdGF0dXMuYWNjb3VudF9uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YXR1cy5hY2NvdW50X25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXJpbmd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0dXMuY291bnQgLyBzdGF0dXMudG90YWwpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0dXMuY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbXBvcnRfcmVhZHkgPSBrZXlfY291bnQgIT09IDA7XG4gICAgICAgIGxldCBwYXNzd29yZF9wbGFjZWhvbGRlciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgIFwid2FsbGV0LmltcG9ydF9wYXNzd29yZFwiXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGltcG9ydF9yZWFkeSkgcGFzc3dvcmRfcGxhY2Vob2xkZXIgPSBcIlwiO1xuXG4gICAgICAgIGlmICghYWNjb3VudF9yb3dzICYmIGFjY291bnRfa2V5Y291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnRfcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYWNjb3VudF9uYW1lIGluIGFjY291bnRfa2V5Y291bnQpIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50X3Jvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YWNjb3VudF9uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YWNjb3VudF9uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FjY291bnRfa2V5Y291bnRbYWNjb3VudF9uYW1lXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gKFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbXBvcnRTdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyQmFsYW5jZUNsYWltcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgey8qIEtleSBmaWxlIHVwbG9hZCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4IDBcIn19PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmtleV90ZXh0X21lc3NhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5rZXlfdGV4dF9tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxLZXlDb3VudCBrZXlfY291bnQ9e2tleV9jb3VudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgeyFpbXBvcnRfcmVhZHkgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQucmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hc3NvY2lhdGVkQWNjb3VudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LndpZl9hc3NvY2lhdGVkX2FjY291bnRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXNzb2NpYXRlZEFjY291bnQubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtrZXl9Pnt2YWx1ZX08L3A+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2FjY291bnRfcm93cyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshYWNjb3VudF9yb3dzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ3YWxsZXQubm9fYWNjb3VudHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hY2NvdW50LnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MucmVzdG9yZV9rZXlfY291bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PnthY2NvdW50X3Jvd3N9PC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIHshaW1wb3J0X3JlYWR5ICYmICF0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX2luaXRhbGl6aW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpdmF0ZUtleSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uV2lmLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LnBhc3RlX3ByaXZhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIndpZklucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aWZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMTZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1wb3J0RXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvclRleHRNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxNnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbmNlbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuX3Bhc3N3b3JkQ2hlY2suYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnRzXzA5X2V4cG9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm5vX2ZpbGUgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVfaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwic29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnN0YXRlLnJlc2V0X2ZpbGVfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBsb2FkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbXBvcnRfZmlsZV9tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5ub19maWxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc2V0X3Bhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbXBvcnRfcGFzc3dvcmRfbWVzc2FnZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbXBvcnRfcGFzc3dvcmRfbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZhY29sb3ItZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbXBvcnRfcGFzc3dvcmRfbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEhdGhpcy5zdGF0ZS5ub19maWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxNnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5jZWxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHtpbXBvcnRfcmVhZHkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWUoXCJidXR0b24gc3VjY2Vzc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFpbXBvcnRfcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2F2ZUltcG9ydC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuaW1wb3J0X2tleXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIHNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnVuY2xhaW1lZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJwXCIgY29udGVudD1cIndhbGxldC5jbGFpbV9sYXRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LnRvdGFsc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ2xhaW1Bc3NldFRvdGFsIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuSW1wb3J0S2V5cyA9IGNvbm5lY3QoXG4gICAgSW1wb3J0S2V5cyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtJbXBvcnRLZXlzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW1wb3J0aW5nOiBJbXBvcnRLZXlzU3RvcmUuZ2V0U3RhdGUoKS5pbXBvcnRpbmdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRLZXlzO1xuIiwiaW1wb3J0IGFsdCBmcm9tIFwiYWx0LWluc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBCcmFpbmtleUFjdGlvbnMge1xyXG4gICAgc2V0QnJhaW5rZXkoYnJua2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIGJybmtleTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIEJyYWlua2V5QWN0aW9uc1dyYXBwZWQgPSBhbHQuY3JlYXRlQWN0aW9ucyhCcmFpbmtleUFjdGlvbnMpO1xyXG5leHBvcnQgZGVmYXVsdCBCcmFpbmtleUFjdGlvbnNXcmFwcGVkO1xyXG4iLCJpbXBvcnQgYWx0IGZyb20gXCJhbHQtaW5zdGFuY2VcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlLCBrZXl9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEJhc2VTdG9yZSBmcm9tIFwic3RvcmVzL0Jhc2VTdG9yZVwiO1xuaW1wb3J0IEJyYWlua2V5QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CcmFpbmtleUFjdGlvbnNcIjtcblxuLyoqIEVhY2ggaW5zdGFuY2Ugc3VwcG9ydHMgYSBzaW5nbGUgYnJhaW5rZXkuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFpbmtleVN0b3JlRmFjdG9yeSB7XG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICAvKiogVGhpcyBtYXkgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGZvciB0aGUgc2FtZSA8Yj5uYW1lPC9iPi4gIFdoZW4gZG9uZSxcbiAgICAgICAgKGNvbXBvbmVudFdpbGxVbm1vdW50KSBtYWtlIHN1cmUgdG8gY2FsbCB0aGlzLmNsb3NlSW5zdGFuY2UoKVxuICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKG5hbWUpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmdldChuYW1lKTtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBhbHQuY3JlYXRlU3RvcmUoQnJhaW5rZXlTdG9yZUltcGwsIFwiQnJhaW5rZXlTdG9yZVwiKTtcbiAgICAgICAgICAgIEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5zZXQobmFtZSwgaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWJzY3JpYmVkX2luc3RhbmNlX2tleSA9IG5hbWUgKyBcIiBzdWJzY3JpYmVkX2luc3RhbmNlXCI7XG4gICAgICAgIGlmICghQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmdldChzdWJzY3JpYmVkX2luc3RhbmNlX2tleSkpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpYmVkX2luc3RhbmNlID0gaW5zdGFuY2UuY2hhaW5TdG9yZVVwZGF0ZS5iaW5kKGluc3RhbmNlKTtcbiAgICAgICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHN1YnNjcmliZWRfaW5zdGFuY2UpO1xuICAgICAgICAgICAgQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLnNldChcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVkX2luc3RhbmNlX2tleSxcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVkX2luc3RhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgc3RhdGljIGNsb3NlSW5zdGFuY2UobmFtZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoIWluc3RhbmNlKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIGluc3RhbmNlIFwiICsgbmFtZSk7XG4gICAgICAgIHZhciBzdWJzY3JpYmVkX2luc3RhbmNlX2tleSA9IG5hbWUgKyBcIiBzdWJzY3JpYmVkX2luc3RhbmNlXCI7XG4gICAgICAgIHZhciBzdWJzY3JpYmVkX2luc3RhbmNlID0gQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmdldChcbiAgICAgICAgICAgIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5XG4gICAgICAgICk7XG4gICAgICAgIEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5kZWxldGUoc3Vic2NyaWJlZF9pbnN0YW5jZV9rZXkpO1xuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHN1YnNjcmliZWRfaW5zdGFuY2UpO1xuICAgICAgICBpbnN0YW5jZS5jbGVhckNhY2hlKCk7XG4gICAgfVxufVxuXG4vKiogRGVyaXZlZCBrZXlzIG1heSBiZSB1bmFzc2lnbmVkIGZyb20gYWNjb3VudHMgdGhlcmVmb3JlIHdlIG11c3QgZGVmaW5lIGFcbiAgICBmaXhlZCBibG9jayBvZiBkZXJpdmllZCBrZXlzIHRoZW4gbW9uaXRvciB0aGUgZW50aXJlIGJsb2NrLlxuKi9cbnZhciBERVJJVklFRF9CUkFJTktFWV9QT09MX1NJWkUgPSAxMDtcblxuY2xhc3MgQnJhaW5rZXlTdG9yZUltcGwgZXh0ZW5kcyBCYXNlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKHtcbiAgICAgICAgICAgIG9uU2V0QnJhaW5rZXk6IEJyYWlua2V5QWN0aW9ucy5zZXRCcmFpbmtleVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZXhwb3J0KFwiaW5TeW5jXCIsIFwiY2hhaW5TdG9yZVVwZGF0ZVwiLCBcImNsZWFyQ2FjaGVcIik7XG4gICAgfVxuXG4gICAgLy8gY2hhaW5TdG9yZVVuc3Vic2NyaWJlKCkge1xuICAgIC8vICAgICB0cnl7XG4gICAgLy8gICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMuY2hhaW5TdG9yZVVwZGF0ZSlcbiAgICAvLyAgICAgfWNhdGNoKGUxKSB7Y29uc29sZS5sb2coXCJ1bnN1YiAxIGZhaWxcIik7XG4gICAgLy8gICAgICAgICB0cnl7XG4gICAgLy8gICAgICAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLmNoYWluU3RvcmVVcGRhdGUuYmluZCh0aGlzKSlcbiAgICAvLyAgICAgICAgIH1jYXRjaChlMikge2NvbnNvbGUubG9nKFwidW5zdWIgMSBmYWlsXCIpfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgY2xlYXJDYWNoZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJybmtleTogXCJcIixcbiAgICAgICAgICAgIGFjY291bnRfaWRzOiBJbW11dGFibGUuU2V0KClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZXJpdmVkX2tleXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgLy8gQ29tcGFyZWQgd2l0aCBDaGFpblN0b3JlLmFjY291bnRfaWRzX2J5X2tleVxuICAgICAgICB0aGlzLmFjY291bnRfaWRzX2J5X2tleSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqIFNhdmVzIHRoZSBicmFpbmtleSBhbmQgYmVnaW5zIHRoZSBsb29rdXAgZm9yIGRlcml2ZWQgYWNjb3VudCByZWZlcm5lY2VzICovXG4gICAgb25TZXRCcmFpbmtleShicm5rZXkpIHtcbiAgICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JybmtleX0pO1xuICAgICAgICB0aGlzLmRlcml2ZUtleXMoYnJua2V5KTtcbiAgICAgICAgdGhpcy5jaGFpblN0b3JlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqIEByZXR1cm4gPGI+dHJ1ZTwvYj4gd2hlbiBhbGwgZGVyaXZpZWQgYWNjb3VudCByZWZlcmVuY2VzIGFyZSBlaXRoZXJcbiAgICAgICAgZm91bmQgb3Iga25vd24gbm90IHRvIGV4aXN0LlxuICAgICovXG4gICAgaW5TeW5jKCkge1xuICAgICAgICB0aGlzLmRlcml2ZWRfa2V5cy5mb3JFYWNoKGRlcml2ZWRfa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChpc1BlbmRpbmdGcm9tQ2hhaW4oZGVyaXZlZF9rZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjaGFpblN0b3JlVXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZGVyaXZlZF9rZXlzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5hY2NvdW50X2lkc19ieV9rZXkgPT09IENoYWluU3RvcmUuYWNjb3VudF9pZHNfYnlfa2V5KSByZXR1cm47XG4gICAgICAgIHRoaXMuYWNjb3VudF9pZHNfYnlfa2V5ID0gQ2hhaW5TdG9yZS5hY2NvdW50X2lkc19ieV9rZXk7XG4gICAgICAgIHRoaXMudXBkYXRlQWNjb3VudElkcygpO1xuICAgIH1cblxuICAgIGRlcml2ZUtleXMoYnJua2V5ID0gdGhpcy5zdGF0ZS5icm5rZXkpIHtcbiAgICAgICAgdmFyIHNlcXVlbmNlID0gdGhpcy5kZXJpdmVkX2tleXMubGVuZ3RoOyAvLyBuZXh0IHNlcXVlbmNlIChzdGFydGluZyB3aXRoIDApXG4gICAgICAgIHZhciBwcml2YXRlX2tleSA9IGtleS5nZXRfYnJhaW5Qcml2YXRlS2V5KGJybmtleSwgc2VxdWVuY2UpO1xuICAgICAgICB2YXIgZGVyaXZlZF9rZXkgPSBkZXJpdmVkS2V5U3RydWN0KHByaXZhdGVfa2V5KTtcbiAgICAgICAgdGhpcy5kZXJpdmVkX2tleXMucHVzaChkZXJpdmVkX2tleSk7XG4gICAgICAgIGlmICh0aGlzLmRlcml2ZWRfa2V5cy5sZW5ndGggPCBERVJJVklFRF9CUkFJTktFWV9QT09MX1NJWkUpXG4gICAgICAgICAgICB0aGlzLmRlcml2ZUtleXMoYnJua2V5KTtcbiAgICB9XG5cbiAgICB1cGRhdGVBY2NvdW50SWRzKCkge1xuICAgICAgICB2YXIgbmV3X2FjY291bnRfaWRzID0gSW1tdXRhYmxlLlNldCgpLndpdGhNdXRhdGlvbnMobmV3X2lkcyA9PiB7XG4gICAgICAgICAgICB2YXIgdXBkYXRlUHVia2V5ID0gcHVibGljX3N0cmluZyA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYWluX2FjY291bnRfaWRzID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50UmVmc09mS2V5KFxuICAgICAgICAgICAgICAgICAgICBwdWJsaWNfc3RyaW5nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhaW5fYWNjb3VudF9pZHMpXG4gICAgICAgICAgICAgICAgICAgIGNoYWluX2FjY291bnRfaWRzLmZvckVhY2goY2hhaW5fYWNjb3VudF9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdfaWRzLmFkZChjaGFpbl9hY2NvdW50X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5kZXJpdmVkX2tleXMuZm9yRWFjaChkZXJpdmVkX2tleSA9PlxuICAgICAgICAgICAgICAgIHVwZGF0ZVB1YmtleShkZXJpdmVkX2tleS5wdWJsaWNfc3RyaW5nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghbmV3X2FjY291bnRfaWRzLmVxdWFscyh0aGlzLnN0YXRlLmFjY291bnRfaWRzKSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY2NvdW50X2lkcyA9IG5ld19hY2NvdW50X2lkcztcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY291bnRfaWRzOiBuZXdfYWNjb3VudF9pZHN9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVyaXZlZEtleVN0cnVjdChwcml2YXRlX2tleSkge1xuICAgIHZhciBwdWJsaWNfc3RyaW5nID0gcHJpdmF0ZV9rZXkudG9QdWJsaWNLZXkoKS50b1B1YmxpY0tleVN0cmluZygpO1xuICAgIHZhciBkZXJpdmVkX2tleSA9IHtwcml2YXRlX2tleSwgcHVibGljX3N0cmluZ307XG4gICAgcmV0dXJuIGRlcml2ZWRfa2V5O1xufVxuXG52YXIgaXNQZW5kaW5nRnJvbUNoYWluID0gZGVyaXZlZF9rZXkgPT5cbiAgICBDaGFpblN0b3JlLmdldEFjY291bnRSZWZzT2ZLZXkoZGVyaXZlZF9rZXkucHVibGljX3N0cmluZykgPT09IHVuZGVmaW5lZDtcbiIsImltcG9ydCBhbHQgZnJvbSBcImFsdC1pbnN0YW5jZVwiO1xyXG5pbXBvcnQgQmFzZVN0b3JlIGZyb20gXCJzdG9yZXMvQmFzZVN0b3JlXCI7XHJcblxyXG5jbGFzcyBJbXBvcnRLZXlzU3RvcmUgZXh0ZW5kcyBCYXNlU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0KFwiaW1wb3J0aW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpbXBvcnRpbmc6IGZhbHNlfTtcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRpbmcoaW1wb3J0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1wb3J0aW5nfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgSW1wb3J0S2V5c1N0b3JlV3JhcHBlZCA9IGFsdC5jcmVhdGVTdG9yZShcclxuICAgIEltcG9ydEtleXNTdG9yZSxcclxuICAgIFwiSW1wb3J0S2V5c1N0b3JlXCJcclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0S2V5c1N0b3JlV3JhcHBlZDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9