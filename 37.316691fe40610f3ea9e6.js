"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[37],{

/***/ 3004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2081);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2076);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(578);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(426);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2062);








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

/***/ 2999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1926);
/* harmony import */ var components_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2478);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(719);
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

/***/ 2997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1905);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(638);
/* harmony import */ var stores_AccountRefsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1800);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1901);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1902);
/* harmony import */ var components_Wallet_BalanceClaimSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2998);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1799);
/* harmony import */ var components_Forms_MyAccounts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2999);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(655);
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

/***/ 3006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1901);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2082);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
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

/***/ 2998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(638);
/* harmony import */ var stores_BalanceClaimActiveStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1901);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1902);
/* harmony import */ var components_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2082);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1810);
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

/***/ 3000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "BrainkeyInputAccept": () => (/* binding */ BrainkeyInputAccept)
/* harmony export */ });
/* harmony import */ var lodash_es_toPairs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1978);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3001);
/* harmony import */ var stores_BrainkeyStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3002);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1927);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1926);
/* harmony import */ var components_Wallet_BrainkeyInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3003);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_Dashboard_AccountCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3004);












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

/***/ 3003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrainkeyInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);




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

/***/ 2996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ExistingAccountOptions": () => (/* binding */ ExistingAccountOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2061);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1900);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2997);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2062);
/* harmony import */ var _Brainkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3000);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3005);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2523);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(610);











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

/***/ 3005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(426);
/* harmony import */ var api_accountApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(629);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(510);
/* harmony import */ var stores_PrivateKeyStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(638);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(632);
/* harmony import */ var components_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2543);
/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1905);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2997);
/* harmony import */ var actions_BalanceClaimActiveActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1902);
/* harmony import */ var components_Wallet_BalanceClaimAssetTotal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3006);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(633);
/* harmony import */ var stores_ImportKeysStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3007);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3008);





















__webpack_require__(3010);

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


    let genesis_filter = new chain_GenesisFilter__WEBPACK_IMPORTED_MODULE_18__["default"]();

    if (!genesis_filter.isAvailable()) {
      update_state({
        password_checksum,
        account_keys: unfiltered_account_keys,
        genesis_filter_finished: true,
        genesis_filtering: false
      });
      return;
    }

    this.setState({
      genesis_filter_initalizing: true
    }, () => // setTimeout(()=>
    genesis_filter.init(() => {
      let filter_status = this.state.genesis_filter_status; // FF < version 41 does not support worker threads internals (like blob urls)
      // let GenesisFilterWorker = require("worker-loader!workers/GenesisFilterWorker")
      // let worker = new GenesisFilterWorker
      // worker.postMessage({
      //     account_keys: unfiltered_account_keys,
      //     bloom_filter: genesis_filter.bloom_filter
      // })
      // worker.onmessage = event => { try {
      //     let { status, account_keys } = event.data
      //     // ...
      // } catch( e ) { console.error('GenesisFilterWorker', e) }}

      let account_keys = unfiltered_account_keys;
      genesis_filter.filter(account_keys, status => {
        //console.log("import filter", status)
        if (status.error === "missing_public_keys") {
          console.error("un-released format, just for testing");
          update_state({
            password_checksum,
            account_keys: unfiltered_account_keys,
            genesis_filter_finished: true,
            genesis_filtering: false
          });
          return;
        }

        if (status.success) {
          // let { account_keys } = event.data // if using worker thread
          update_state({
            password_checksum,
            account_keys,
            genesis_filter_finished: true,
            genesis_filtering: false
          });
          return;
        }

        if (status.initalizing !== undefined) {
          update_state({
            genesis_filter_initalizing: status.initalizing,
            genesis_filtering: true
          });
          return;
        }

        if (status.importing === undefined) {
          // programmer error
          console.error("unknown status", status);
          return;
        }

        if (!filter_status.length) // first account
          filter_status.push(status);else {
          let last_account_name = filter_status[filter_status.length - 1].account_name;
          if (last_account_name === status.account_name) // update same account
            filter_status[filter_status.length - 1] = status; // new account
          else filter_status.push(status);
        }
        update_state({
          genesis_filter_status: filter_status
        });
      });
    }) //, 100)
    );
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
    })), cancelButton))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null))) : null, this.state.genesis_filter_initalizing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "center-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "circle"
    }))) : null, import_ready ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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

/***/ 3001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);


class BrainkeyActions {
  setBrainkey(brnkey) {
    return brnkey;
  }

}

var BrainkeyActionsWrapped = alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createActions(BrainkeyActions);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrainkeyActionsWrapped);

/***/ }),

/***/ 3008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenesisFilter)
/* harmony export */ });
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(426);
/* provided dependency */ var Buffer = __webpack_require__(432)["Buffer"];

var bts_genesiskeys_bloom_url = undefined;

try {
  var url = __webpack_require__(3009);

  if (url.indexOf("3cee441") === -1) throw new Error("Incorrect hash: bts_genesiskeys_bloom.dat");
  bts_genesiskeys_bloom_url = url;
} catch (e) {
  // webpack deployment exception (not run time)
  console.log("WARN: Will be unable to filter BTS 1.0 wallet imports, did not find assets/bts_genesiskeys_bloom.dat", e);
}
/**
    This should only be applied to a BTS 1.0 export file taken on the
    discontinued chain. Any public key string or address (all 5 formats) carried
    over to the BTS 2.0 genesis block will be in this filter.

    Their may be some false positives but no false negatives.
*/


class GenesisFilter {
  /** or call this.init */
  constructor(bloom_buffer) {
    if (!bloom_buffer) return;
    this.bloom_buffer = bloom_buffer;
    this.bits_in_filter = bloom_buffer.length * 8; // 8388608 (test data)
  }
  /** Was a bloom file deployed?  This does not try to load it from the server. */


  isAvailable() {
    return bts_genesiskeys_bloom_url !== undefined;
  }

  init(done) {
    if (this.bloom_buffer) {
      done();
      return;
    }

    if (!this.isAvailable()) throw new Error("Genesis bloom file was not deployed");
    var xhr = new XMLHttpRequest(); // firefox 40 did not allow the blob url but ff 41.0.2 did

    xhr.responseType = "blob";

    xhr.onload = () => {
      if (xhr.status === 404) return;
      var reader = new FileReader();

      reader.onload = evt => {
        var contents = new Buffer(evt.target.result, "binary");
        if (contents.length !== 1048576) throw new Error("Wrong length");
        this.bits_in_filter = contents.length * 8; // 8388608 (test data)

        this.bloom_buffer = contents;
        done();
      };

      reader.readAsBinaryString(xhr.response);
    };

    xhr.onerror = () => {
      console.error("xhr.onerror", e);
    };

    xhr.open("GET", bts_genesiskeys_bloom_url);
    xhr.send();
  }

  inGenesis(pubkey_or_address) {
    if (!this.bloom_buffer) throw new Error("Call init() first");

    for (var hashes = 0; hashes < 3; hashes++) {
      var hex = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__.hash.sha256(hashes + ":" + pubkey_or_address);
      var bit_address = parseInt(hex.slice(-3).toString("hex"), 16) % this.bits_in_filter; // 3090564
      // console.error("bit_address", bit_address.toString(16))

      var byte_address = bit_address >> 3; // 386320
      // console.error("byte_address", byte_address.toString(16))

      var mask = 1 << (bit_address & 7); // 16
      // console.error("mask", mask.toString(16))

      var byte = this.bloom_buffer[byte_address]; // console.error("byte", byte.toString(16))
      // console.error("byte & mask", byte & mask, (byte & mask) === 0, '\n')

      if ((byte & mask) === 0) return false;
    }

    return true;
  }

  filter(account_keys, status) {
    if (!this.isAvailable()) {
      console.log("WARN: Missing bloom filter for BTS 0.9.x wallets");
      status({
        error: "missing_bloom"
      });
      return;
    }

    var initalizing = true;
    status({
      initalizing
    });
    this.init(() => {
      try {
        initalizing = false;
        status({
          initalizing
        });
        var running_count_progress = 1;

        for (var a = 0; a < account_keys.length; a++) {
          var removed_count = 0,
              count = 0;
          var keys = account_keys[a];
          var total = keys.encrypted_private_keys.length;
          status({
            importing: true,
            account_name: keys.account_name,
            count,
            total
          });

          for (var k = keys.encrypted_private_keys.length - 1; k >= 0; k--) {
            count++;

            if (count % running_count_progress === 0) {
              running_count_progress = 47;
              status({
                importing: true,
                account_name: keys.account_name,
                count,
                total
              });
            }

            if (!keys.public_keys) {
              // un-released format, just for testing
              status({
                error: "missing_public_keys"
              });
              return;
            }

            var currentKey = keys.public_keys[k];
            if (/^GPH/.test(currentKey)) currentKey = "GPH" + currentKey.substring(3);
            if (this.inGenesis(currentKey)) continue;
            var addresses = bitsharesjs__WEBPACK_IMPORTED_MODULE_0__.key.addresses(currentKey, "GPH");
            var addy_found = false;

            for (var i = 0; i < addresses.length; i++) {
              if (this.inGenesis(addresses[i])) {
                addy_found = true;
                break;
              }
            }

            if (addy_found) continue;
            delete keys.encrypted_private_keys[k];
            delete keys.public_keys[k];
            removed_count++;
          }

          var encrypted_private_keys = [],
              public_keys = [];

          for (var k = keys.encrypted_private_keys.length - 1; k >= 0; k--) {
            if (!keys.encrypted_private_keys[k]) continue;
            encrypted_private_keys.push(keys.encrypted_private_keys[k]);
            public_keys.push(keys.public_keys[k]);
          }

          keys.encrypted_private_keys = encrypted_private_keys;
          status({
            importing: false,
            account_name: keys.account_name,
            count: count - removed_count,
            total
          });
          keys.public_keys = public_keys;
        }

        status({
          success: true
        });
      } finally {
        if (initalizing) {
          initalizing = false;
          status({
            initalizing
          });
        }
      }
    });
  }

}

/***/ }),

/***/ 3002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BrainkeyStoreFactory)
/* harmony export */ });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(579);
/* harmony import */ var actions_BrainkeyActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3001);





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

/***/ 3007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportKeysStoreWrapped": () => (/* binding */ ImportKeysStoreWrapped),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var stores_BaseStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(579);



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

/***/ 3009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "bts_genesiskeys_bloom_3cee441.dat");

/***/ }),

/***/ 3010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcuMzE2NjkxZmU0MDYxMGYzZWE5ZTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUFBO0FBS0E7O0FBdkRBOztBQXlEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7O0FBMUJBOztBQTZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUlBOztBQUVBO0FBQ0E7QUFJQTtBQUFBO0FBSUE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFJQTtBQUFBO0FBSUE7O0FBRUE7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFnQkE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7O0FBdElBOztBQXlJQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUlBO0FBSUE7QUFFQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVVBOztBQTlCQTs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQU5BO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBR0E7QUFMQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQWdCQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFsSEE7O0FBcUhBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFTQTtBQU1BO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBUUE7QUFDQTs7QUEzRUE7QUE4RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFOQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQU9BOztBQWZBOztBQWlCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQUE7QUFLQTtBQURBO0FBT0E7QUFBQTtBQUtBOztBQXZCQTs7QUF5QkE7O0FBRUE7QUFDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUlBO0FBQUE7QUFBQTs7QUFDQTtBQUNBOztBQVpBOztBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFsQ0E7QUFzQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBOztBQU1BO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFTQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFPQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBN0lBOztBQWdKQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUtBOztBQWZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFQQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBSUE7QUFBQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBWUE7O0FBMURBOztBQTREQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTs7QUFqREE7O0FBbURBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXNCQTs7QUFFQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBRkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUF6RUE7QUE0RUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBSUE7QUFXQTtBQVNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTs7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQURBO0FBSEE7QUFTQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBREE7QUFIQTtBQVFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQUNBOztBQUNBO0FBQUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQURBOztBQWNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7O0FBRUE7QUFDQTtBQUdBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQWFBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFBQTtBQWtCQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQU1BO0FBREE7QUFNQTtBQUFBO0FBS0E7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVRBO0FBaUJBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUF0QkE7QUF3QkE7QUFBQTtBQVFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFnQkE7QUFBQTtBQUNBO0FBQUE7QUFRQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBWUE7O0FBNzlCQTs7QUFnK0JBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBUkE7QUFZQTs7Ozs7Ozs7Ozs7O0FDbGhDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQTs7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTs7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUdBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU1BO0FBS0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTs7QUFFQTtBQUtBO0FBQ0E7QUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUEzSkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFoQ0E7QUFtQ0E7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUVBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBbkZBOztBQXNGQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQWJBOztBQWdCQTtBQUlBOzs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9BY2NvdW50Q2FyZC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRm9ybXMvTXlBY2NvdW50cy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JhbGFuY2VDbGFpbUFzc2V0VG90YWwuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JyYWlua2V5LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9XYWxsZXQvQnJhaW5rZXlJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0V4aXN0aW5nQWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0ltcG9ydEtleXMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9hY3Rpb25zL0JyYWlua2V5QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvbGliL2NoYWluL0dlbmVzaXNGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL3N0b3Jlcy9CcmFpbmtleVN0b3JlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9zdG9yZXMvSW1wb3J0S2V5c1N0b3JlLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9hc3NldHMvYnRzX2dlbmVzaXNrZXlzX2Jsb29tLmRhdCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9XYWxsZXQvSW1wb3J0S2V5cy5zY3NzPzIxMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBY2NvdW50SW1hZ2UgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudEltYWdlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8qKlxyXG4gKiAgQGJyaWVmIGRpc3BsYXlzIHRoZSBzdW1tYXJ5IG9mIGEgZ2l2ZW4gYWNjb3VudCBpbiBhIGNvbmRlbmNlZCB2aWV3IChmb3IgdGhlIGRhc2hib2FyZClcclxuICpcclxuICogIFRoaXMgY2FyZCBoYXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxyXG4gKlxyXG4gKiAgeyBhY2NvdW50OiAke25hbWVfb3JfaWR9IH1cclxuICovXHJcblxyXG5jbGFzcyBBY2NvdW50Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgb25DYXJkQ2xpY2soZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYWNjb3VudC8ke25hbWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gbnVsbDtcclxuICAgICAgICBsZXQgYmFsYW5jZXMgPSBudWxsO1xyXG4gICAgICAgIGxldCBpc015QWNjb3VudCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFjY291bnQpIHtcclxuICAgICAgICAgICAgbmFtZSA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICBsZXQgYWJhbCA9IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKTtcclxuICAgICAgICAgICAgaWYgKGFiYWwpIHtcclxuICAgICAgICAgICAgICAgIGJhbGFuY2VzID0gYWJhbFxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlQW1vdW50ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFsYW5jZUFtb3VudC5nZXQoXCJiYWxhbmNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17eH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnQgYmFsYW5jZT17eH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG9BcnJheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzTXlBY2NvdW50ID0gQWNjb3VudFN0b3JlLmlzTXlBY2NvdW50KHRoaXMucHJvcHMuYWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgYWNjb3VudC1jYXJkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DYXJkQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FyZFwiICsgKGlzTXlBY2NvdW50ID8gXCIgbXktYWNjb3VudFwiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntuYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXt7aGVpZ2h0OiA2NCwgd2lkdGg6IDY0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmFsYW5jZXNcIj57YmFsYW5jZXN9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkFjY291bnRDYXJkID0gQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50Q2FyZCk7XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWNjb3VudENhcmQpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQWNjb3VudFNlbGVjdCBmcm9tIFwiY29tcG9uZW50cy9Gb3Jtcy9BY2NvdW50U2VsZWN0XCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBNeUFjY291bnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudHM6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50c0xpc3QuaXNSZXF1aXJlZCxcclxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIGFjY291bnRfbmFtZXMgPSB0aGlzLnByb3BzLmFjY291bnRzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiAhIWFjY291bnQpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoYWNjb3VudCkpXHJcbiAgICAgICAgICAgIC5tYXAoYWNjb3VudCA9PiBhY2NvdW50LmdldChcIm5hbWVcIikpXHJcbiAgICAgICAgICAgIC5zb3J0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFjY291bnRTZWxlY3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWVzPXthY2NvdW50X25hbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWNjb3VudFNlbGVjdChhY2NvdW50X25hbWUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGFjY291bnRfbmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoTXlBY2NvdW50cyk7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IGNuYW1lIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCJjb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBQcml2YXRlS2V5U3RvcmUgZnJvbSBcInN0b3Jlcy9Qcml2YXRlS2V5U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50UmVmc1N0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFJlZnNTdG9yZVwiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlIGZyb20gXCJzdG9yZXMvQmFsYW5jZUNsYWltQWN0aXZlU3RvcmVcIjtcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnNcIjtcbmltcG9ydCBCYWxhbmNlQ2xhaW1TZWxlY3RvciBmcm9tIFwiY29tcG9uZW50cy9XYWxsZXQvQmFsYW5jZUNsYWltU2VsZWN0b3JcIjtcbmltcG9ydCBXYWxsZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldEFjdGlvbnNcIjtcbmltcG9ydCBNeUFjY291bnRzIGZyb20gXCJjb21wb25lbnRzL0Zvcm1zL015QWNjb3VudHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIEJhbGFuY2VDbGFpbUFjdGl2ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IGtleXMgPSBQcml2YXRlS2V5U3RvcmUuZ2V0U3RhdGUoKS5rZXlzO1xuICAgICAgICBsZXQga2V5U2VxID0ga2V5cy5rZXlTZXEoKTtcbiAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRQdWJrZXlzKGtleVNlcSk7XG4gICAgICAgIHRoaXMuZXhpc3Rpbmdfa2V5cyA9IGtleVNlcTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IGtleXMgPSBQcml2YXRlS2V5U3RvcmUuZ2V0U3RhdGUoKS5rZXlzO1xuICAgICAgICBsZXQga2V5U2VxID0ga2V5cy5rZXlTZXEoKTtcbiAgICAgICAgaWYgKCFrZXlTZXEuZXF1YWxzKHRoaXMuZXhpc3Rpbmdfa2V5cykpIHtcbiAgICAgICAgICAgIHRoaXMuZXhpc3Rpbmdfa2V5cyA9IGtleVNlcTtcbiAgICAgICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuc2V0UHVia2V5cyhrZXlTZXEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYWNjb3VudF9yZWZzLnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5vX2JhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5sb2FkaW5nX2JhbGFuY2VzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZoZWxsaXA7XG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwidGhyZWUtYm91bmNlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYmFsYW5jZXMgfHwgIXRoaXMucHJvcHMuYmFsYW5jZXMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5vX2JhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbXBvcnRfcmVhZHkgPVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZF9iYWxhbmNlcy5zaXplICYmIHRoaXMucHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lO1xuICAgICAgICBsZXQgY2xhaW1fYmFsYW5jZV9sYWJlbCA9IGltcG9ydF9yZWFkeVxuICAgICAgICAgICAgPyBgICgke3RoaXMucHJvcHMuY2xhaW1fYWNjb3VudF9uYW1lfSlgXG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIGNlbnRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuby1ib3JkZXItYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2xhaW1fYmFsYW5jZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvd1k6IFwiaGlkZGVuICFpbXBvcnRhbnRcIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbC13aWR0aC1jb250ZW50IGNlbnRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE15QWNjb3VudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmJhbGFuY2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cz17SW1tdXRhYmxlLkxpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnRfcmVmc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNsYWltQWNjb3VudENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ2xhaW1TZWxlY3RvciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvbiBzdWNjZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhaW1wb3J0X3JlYWR5XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xhaW1CYWxhbmNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2xhaW1fYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtjbGFpbV9iYWxhbmNlX2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMub25CYWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQmFjayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxuICAgIG9uQ2xhaW1BY2NvdW50Q2hhbmdlKGNsYWltX2FjY291bnRfbmFtZSkge1xuICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLmNsYWltQWNjb3VudENoYW5nZShjbGFpbV9hY2NvdW50X25hbWUpO1xuICAgIH1cblxuICAgIG9uQ2xhaW1CYWxhbmNlKCkge1xuICAgICAgICBXYWxsZXRBY3Rpb25zLmltcG9ydEJhbGFuY2UoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsYWltX2FjY291bnRfbmFtZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRfYmFsYW5jZXMsXG4gICAgICAgICAgICB0cnVlIC8vYnJvYWRjYXN0XG4gICAgICAgICkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNsYWltQmFsYW5jZVwiLCBlcnJvcik7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IuZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMuYmFsYW5jZV9jbGFpbV9lcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl9tc2c6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5CYWxhbmNlQ2xhaW1BY3RpdmUgPSBjb25uZWN0KEJhbGFuY2VDbGFpbUFjdGl2ZSwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW0JhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlLCBBY2NvdW50UmVmc1N0b3JlLCBQcml2YXRlS2V5U3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIGxldCBwcm9wcyA9IEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHByb3BzLmFjY291bnRfcmVmcyA9IEFjY291bnRSZWZzU3RvcmUuZ2V0QWNjb3VudFJlZnMoKTtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCYWxhbmNlQ2xhaW1BY3RpdmU7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlIGZyb20gXCJzdG9yZXMvQmFsYW5jZUNsYWltQWN0aXZlU3RvcmVcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQmFsYW5jZUNsYWltQXNzZXRUb3RhbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmJhbGFuY2VzID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5sb2FkaW5nX2JhbGFuY2VzXCIgLz4maGVsbGlwO1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhciB0b3RhbF9ieV9hc3NldCA9IHRoaXMucHJvcHMuYmFsYW5jZXNcclxuICAgICAgICAgICAgLmdyb3VwQnkodiA9PiB2LmJhbGFuY2UuYXNzZXRfaWQpXHJcbiAgICAgICAgICAgIC5tYXAobCA9PiBsLnJlZHVjZSgociwgdikgPT4gciArIE51bWJlcih2LmJhbGFuY2UuYW1vdW50KSwgMCkpO1xyXG5cclxuICAgICAgICBpZiAoIXRvdGFsX2J5X2Fzc2V0LnNpemUpIHJldHVybiA8ZGl2Pk5vbmU8L2Rpdj47XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dG90YWxfYnlfYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAubWFwKCh0b3RhbCwgYXNzZXRfaWQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Fzc2V0X2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXt0b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b0FycmF5KCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJhbGFuY2VDbGFpbUFzc2V0VG90YWxzID0gY29ubmVjdChCYWxhbmNlQ2xhaW1Bc3NldFRvdGFscywge1xyXG4gICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIFtCYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFsYW5jZUNsYWltQXNzZXRUb3RhbHM7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuXG5pbXBvcnQgUHJpdmF0ZUtleVN0b3JlIGZyb20gXCJzdG9yZXMvUHJpdmF0ZUtleVN0b3JlXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlU3RvcmUgZnJvbSBcInN0b3Jlcy9CYWxhbmNlQ2xhaW1BY3RpdmVTdG9yZVwiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9uc1wiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgQmFsYW5jZUNsYWltU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmNsYWltX2FjY291bnRfbmFtZSlcbiAgICAgICAgICAgIHRoaXMub25DbGFpbUFjY291bnQoXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmNsYWltX2FjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuY2hlY2tlZFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFsYW5jZXMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgIXRoaXMucHJvcHMudG90YWxfYnlfYWNjb3VudF9hc3NldC5zaXplXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IC8+O1xuXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57LyogQyBIIEUgQyBLIEIgTyBYICovfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC51bmNsYWltZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC51bmNsYWltZWRfdmVzdGluZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudG90YWxfYnlfYWNjb3VudF9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHIsIG5hbWVfYXNzZXQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17KytpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmNoZWNrZWQuZ2V0KGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hlY2tib3guYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuYmFsYW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3IudW5jbGFpbWVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3IudW5jbGFpbWVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e25hbWVfYXNzZXQuZ2V0KDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3IudmVzdGluZy51bmNsYWltZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ci52ZXN0aW5nLnVuY2xhaW1lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Fzc2V0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtuYW1lX2Fzc2V0LmdldCgxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gb2YgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3IudmVzdGluZy50b3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17bmFtZV9hc3NldC5nZXQoMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHtuYW1lX2Fzc2V0LmdldCgwKX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0FycmF5KCl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQ2hlY2tib3goaW5kZXgsIGJhbGFuY2VzKSB7XG4gICAgICAgIGxldCBjaGVja2VkID0gdGhpcy5wcm9wcy5jaGVja2VkO1xuICAgICAgICBpZiAoY2hlY2tlZC5nZXQoaW5kZXgpKSB7XG4gICAgICAgICAgICBjaGVja2VkID0gY2hlY2tlZC5kZWxldGUoaW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tlZCA9IGNoZWNrZWQuc2V0KGluZGV4LCBiYWxhbmNlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zLnNldFNlbGVjdGVkQmFsYW5jZUNsYWltcyhjaGVja2VkKTtcbiAgICB9XG5cbiAgICBvbkNsYWltQWNjb3VudChjbGFpbV9hY2NvdW50X25hbWUsIGNoZWNrZWQpIHtcbiAgICAgICAgLy8gQSBVIFQgTyAgUyBFIEwgRSBDIFQgIEEgQyBDIE8gVSBOIFQgU1xuICAgICAgICAvLyBvbmx5IGlmIG5vdGhpbmcgaXMgc2VsZWN0ZWQgKHBsYXkgaXQgc2FmZSlcbiAgICAgICAgaWYgKGNoZWNrZWQuc2l6ZSkgcmV0dXJuO1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5wcm9wcy50b3RhbF9ieV9hY2NvdW50X2Fzc2V0LmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGsuZ2V0KDApO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IGNsYWltX2FjY291bnRfbmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICh2LnVuY2xhaW1lZCB8fCB2LnZlc3RpbmcudW5jbGFpbWVkKVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gY2hlY2tlZC5zZXQoaW5kZXgsIHYuYmFsYW5jZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNoZWNrZWQuc2l6ZSlcbiAgICAgICAgICAgIEJhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnMuc2V0U2VsZWN0ZWRCYWxhbmNlQ2xhaW1zKGNoZWNrZWQpO1xuICAgIH1cbn1cblxuQmFsYW5jZUNsYWltU2VsZWN0b3IgPSBjb25uZWN0KEJhbGFuY2VDbGFpbVNlbGVjdG9yLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbQmFsYW5jZUNsYWltQWN0aXZlU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIGxldCBwcm9wcyA9IEJhbGFuY2VDbGFpbUFjdGl2ZVN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIGxldCB7YmFsYW5jZXMsIGFkZHJlc3NfdG9fcHVia2V5fSA9IHByb3BzO1xuICAgICAgICBsZXQgcHJpdmF0ZV9rZXlzID0gUHJpdmF0ZUtleVN0b3JlLmdldFN0YXRlKCkua2V5cztcbiAgICAgICAgbGV0IGdyb3VwQ291bnRNYXAgPSBJbW11dGFibGUuTWFwKCkuYXNNdXRhYmxlKCk7XG4gICAgICAgIGxldCBncm91cENvdW50ID0gKGdyb3VwLCBkaXN0aW5jdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNldCA9IGdyb3VwQ291bnRNYXAuZ2V0KGdyb3VwKTtcbiAgICAgICAgICAgIGlmICghc2V0KSB7XG4gICAgICAgICAgICAgICAgc2V0ID0gSW1tdXRhYmxlLlNldCgpLmFzTXV0YWJsZSgpO1xuICAgICAgICAgICAgICAgIGdyb3VwQ291bnRNYXAuc2V0KGdyb3VwLCBzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0LmFkZChkaXN0aW5jdCk7XG4gICAgICAgICAgICByZXR1cm4gc2V0LnNpemU7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChiYWxhbmNlcylcbiAgICAgICAgICAgIHByb3BzLnRvdGFsX2J5X2FjY291bnRfYXNzZXQgPSBiYWxhbmNlc1xuICAgICAgICAgICAgICAgIC5ncm91cEJ5KHYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBLIEUgWSBTXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lcyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwdWJrZXkgPSBhZGRyZXNzX3RvX3B1YmtleS5nZXQodi5vd25lcik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcml2YXRlX2tleV9vYmplY3QgPSBwcml2YXRlX2tleXMuZ2V0KHB1YmtleSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEltcG9ydGVkIEFjY291bnQgTmFtZXMgKGp1c3QgYSB2aXN1YWwgYWlkLCBoZWxwcyB0byBhdXRvIHNlbGVjdCBhIHJlYWwgYWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZV9rZXlfb2JqZWN0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlX2tleV9vYmplY3QuaW1wb3J0X2FjY291bnRfbmFtZXNcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXMgPSBwcml2YXRlX2tleV9vYmplY3QuaW1wb3J0X2FjY291bnRfbmFtZXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiwgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2lnbmluZyBpcyB2ZXJ5IHNsb3csIGZ1cnRoZXIgZGl2aWRlIHRoZSBncm91cHMgYmFzZWQgb24gdGhlIG51bWJlciBvZiBzaWduYXR1cmVzIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXRjaF9udW1iZXIgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cENvdW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltbXV0YWJsZS5MaXN0KFtuYW1lcywgdi5iYWxhbmNlLmFzc2V0X2lkXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5vd25lclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAvIDYwXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lX2Fzc2V0X2tleSA9IEltbXV0YWJsZS5MaXN0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdi5iYWxhbmNlLmFzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hfbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZV9hc3NldF9rZXk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGwgPT5cbiAgICAgICAgICAgICAgICAgICAgbC5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAociwgdikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFYgQSBMIFUgRSBTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5wdWJsaWNfa2V5X3N0cmluZyA9IGFkZHJlc3NfdG9fcHVia2V5LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5vd25lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5iYWxhbmNlcyA9IHIuYmFsYW5jZXMuYWRkKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2LnZlc3RlZF9iYWxhbmNlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnZlc3RpbmcudW5jbGFpbWVkICs9IE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmVzdGVkX2JhbGFuY2UuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudmVzdGluZy50b3RhbCArPSBOdW1iZXIodi5iYWxhbmNlLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci51bmNsYWltZWQgKz0gTnVtYmVyKHYuYmFsYW5jZS5hbW91bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5jbGFpbWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlc3Rpbmc6IHt1bmNsYWltZWQ6IDAsIHRvdGFsOiAwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlczogSW1tdXRhYmxlLlNldCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnNvcnRCeShrID0+IGspO1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VDbGFpbVNlbGVjdG9yO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IEJyYWlua2V5QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CcmFpbmtleUFjdGlvbnNcIjtcclxuaW1wb3J0IEJyYWlua2V5U3RvcmVGYWN0b3J5IGZyb20gXCJzdG9yZXMvQnJhaW5rZXlTdG9yZVwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCcmFpbmtleUlucHV0IGZyb20gXCJjb21wb25lbnRzL1dhbGxldC9CcmFpbmtleUlucHV0XCI7XHJcbmltcG9ydCB7dG9QYWlyc30gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBBY2NvdW50Q2FyZCBmcm9tIFwiY29tcG9uZW50cy9EYXNoYm9hcmQvQWNjb3VudENhcmRcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3RPYmplY3QgPSB7XHJcbiAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICByZXR1cm4gW0JyYWlua2V5U3RvcmVGYWN0b3J5LmdldEluc3RhbmNlKFwid21jXCIpXTtcclxuICAgIH0sXHJcbiAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4gQnJhaW5rZXlTdG9yZUZhY3RvcnkuZ2V0SW5zdGFuY2UoXCJ3bWNcIikuZ2V0U3RhdGUoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNsYXNzIEJyYWlua2V5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIEJyYWlua2V5U3RvcmVGYWN0b3J5LmNsb3NlSW5zdGFuY2UoXCJ3bWNcIik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8QnJhaW5rZXlJbnB1dEFjY2VwdD5cclxuICAgICAgICAgICAgICAgICAgICA8Vmlld0JyYWlua2V5IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JyYWlua2V5SW5wdXRBY2NlcHQ+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkJyYWlua2V5ID0gY29ubmVjdChCcmFpbmtleSwgY29ubmVjdE9iamVjdCk7XHJcbmV4cG9ydCBkZWZhdWx0IEJyYWlua2V5O1xyXG5cclxuY2xhc3MgVmlld0JyYWlua2V5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgc2hvcnRfYnJua2V5ID0gdGhpcy5wcm9wcy5icm5rZXkuc3Vic3RyaW5nKDAsIDEwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMucHJvcHMuYWNjb3VudF9pZHMudG9BcnJheSgpXCIsIHRoaXMucHJvcHMuYWNjb3VudF9pZHMudG9BcnJheSgpKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57c2hvcnRfYnJua2V5fTwvc3Bhbj4maGVsbGlwO1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWNjb3VudF9pZHMuc2l6ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QnJhaW5rZXlBY2NvdW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cz17SW1tdXRhYmxlLkxpc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnRfaWRzLnRvQXJyYXkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5vX2FjY291bnRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuVmlld0JyYWlua2V5ID0gY29ubmVjdChWaWV3QnJhaW5rZXksIGNvbm5lY3RPYmplY3QpO1xyXG5cclxuY2xhc3MgQnJhaW5rZXlBY2NvdW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnRzOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudHNMaXN0LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCByb3dzID0gdG9QYWlycyh0aGlzLnByb3BzLmFjY291bnRzKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGFjY291bnQgPT4gISFhY2NvdW50WzFdKVxyXG4gICAgICAgICAgICAubWFwKGFjY291bnQgPT4gYWNjb3VudFsxXS5nZXQoXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICAuc29ydCgpXHJcbiAgICAgICAgICAgIC5tYXAobmFtZSA9PiA8QWNjb3VudENhcmQga2V5PXtuYW1lfSBhY2NvdW50PXtuYW1lfSAvPik7XHJcbiAgICAgICAgcmV0dXJuIDxzcGFuPntyb3dzfTwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuQnJhaW5rZXlBY2NvdW50cyA9IEJpbmRUb0NoYWluU3RhdGUoQnJhaW5rZXlBY2NvdW50cyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQnJhaW5rZXlJbnB1dEFjY2VwdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7YnJua2V5OiBcIlwiLCBhY2NlcHQ6IGZhbHNlfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWNjZXB0KSByZXR1cm4gPHNwYW4+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9zcGFuPjtcclxuXHJcbiAgICAgICAgbGV0IHJlYWR5ID0gdGhpcy5zdGF0ZS5icm5rZXkgJiYgdGhpcy5zdGF0ZS5icm5rZXkgIT09IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJyYWlua2V5SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25CcmFpbmtleUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lKFwiYnV0dG9uIHN1Y2Nlc3NcIiwge2Rpc2FibGVkOiAhcmVhZHl9KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWNjZXB0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmFjY2VwdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CcmFpbmtleUNoYW5nZShicm5rZXkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHticm5rZXl9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY2VwdCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY2NlcHQ6IHRydWV9KTtcclxuICAgICAgICBCcmFpbmtleUFjdGlvbnMuc2V0QnJhaW5rZXkodGhpcy5zdGF0ZS5icm5rZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA8ZGl2IG9uQ2xpY2s9e3RoaXMub25Mb29rdXBBY2NvdW50cy5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidXR0b24gc3VjY2Vzc1wiPkxvb2t1cCBBY2NvdW50czwvZGl2PlxyXG4vLyBvbkxvb2t1cEFjY291bnRzKCkge1xyXG4vL1xyXG4vLyB9XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7aGFzaCwga2V5fSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxudmFyIGRpY3Rpb25hcnlfc2V0O1xuXG5pZiAoX19FTEVDVFJPTl9fKSB7XG4gICAgZGljdGlvbmFyeV9zZXQgPSBuZXcgU2V0KFxuICAgICAgICByZXF1aXJlKFwiY29tbW9uL2RpY3Rpb25hcnlfZW4uanNvblwiKS5lbi5zcGxpdChcIixcIilcbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFpbmtleUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJybmtleTogXCJcIixcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAoIV9fRUxFQ1RST05fXykge1xuICAgICAgICAgICAgZmV0Y2goYCR7X19CQVNFX1VSTF9ffWRpY3Rpb25hcnkuanNvbmApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVwbHkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbHkuanNvbigpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlfc2V0ID0gbmV3IFNldChyZXN1bHQuZW4uc3BsaXQoXCIsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaCBkaWN0aW9uYXJ5IGVycm9yOlwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NoZWNrQnJhaW5LZXkoKSB7XG4gICAgICAgIGxldCBzcGVsbGNoZWNrX3dvcmRzID0gdGhpcy5zdGF0ZS5icm5rZXkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgY2hlY2tlZF93b3JkcyA9IFtdO1xuICAgICAgICBzcGVsbGNoZWNrX3dvcmRzLmZvckVhY2goKHdvcmQsIGkpID0+IHtcbiAgICAgICAgICAgIGlmICh3b3JkID09PSBcIlwiKSByZXR1cm47XG4gICAgICAgICAgICBsZXQgc3BlbGxjaGVja3dvcmQgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBzcGVsbGNoZWNrd29yZCA9IHNwZWxsY2hlY2t3b3JkLm1hdGNoKC9bYS16XSsvKTsgLy9qdXN0IHNwZWxsY2hlY2sgbGV0dGVyc1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHNwZWxsY2hlY2t3b3JkID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgZGljdGlvbmFyeV9zZXQuaGFzKHNwZWxsY2hlY2t3b3JkWzBdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNoZWNrZWRfd29yZHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfSBzdHlsZT17e3BhZGRpbmc6IFwiMXB4XCIsIG1hcmdpbjogXCIxcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNoZWNrZWRfd29yZHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPE1pc3NwZWxsZWRXb3JkIGtleT17aX0+e3dvcmR9PC9NaXNzcGVsbGVkV29yZD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5yZWFkeSA9IGNoZWNrZWRfd29yZHMubGVuZ3RoID4gMFxuICAgICAgICBsZXQgd29yZF9jb3VudF9sYWJlbDtcbiAgICAgICAgbGV0IHdhcm4gPSB0cnVlO1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBpZiAoY2hlY2tlZF93b3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5icm5rZXkubGVuZ3RoIDwgNTApIHtcbiAgICAgICAgICAgICAgICB3b3JkX2NvdW50X2xhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5icm5rZXkubGVuZ3RoICsgXCIgY2hhcmFjdGVycyAoNTAgbWluaW11bSlcIjtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZF93b3Jkcy5sZW5ndGggPCAxNilcbiAgICAgICAgICAgICAgICAgICAgd29yZF9jb3VudF9sYWJlbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkX3dvcmRzLmxlbmd0aCArIFwiIHdvcmRzICgxNiByZWNvbW1lbmRlZClcIjtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd29yZF9jb3VudF9sYWJlbCA9IGNoZWNrZWRfd29yZHMubGVuZ3RoICsgXCIgd29yZHNcIjtcbiAgICAgICAgICAgICAgICAgICAgd2FybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7d2FybiwgdmFsaWQsIHdvcmRfY291bnRfbGFiZWwsIGNoZWNrZWRfd29yZHN9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZyB8fCAhZGljdGlvbmFyeV9zZXQpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMjB9fT5GZXRjaGluZyBkaWN0aW9uYXJ5Li4uLjwvZGl2PjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7d2Fybiwgd29yZF9jb3VudF9sYWJlbCwgY2hlY2tlZF93b3Jkc30gPSB0aGlzLl9jaGVja0JyYWluS2V5KCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXggfHwgMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZvcm1DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJybmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYnJua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAxMDAsIG1pbldpZHRoOiA0NTB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLXBhZGRpbmcgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hlY2tlZF93b3Jkc31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrX2RpZ2l0cyAmJiAhdGhpcy5wcm9wcy5oaWRlQ2hlY2tEaWdpdHMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hlY2tfZGlnaXRzfSAqIENoZWNrIERpZ2l0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Y25hbWUoe2Vycm9yOiB3YXJufSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JkX2NvdW50X2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZm9ybUNoYW5nZShldmVudCkge1xuICAgICAgICB2YXIge2lkLCB2YWx1ZX0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCB7dmFsaWR9ID0gdGhpcy5fY2hlY2tCcmFpbktleSgpO1xuICAgICAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICAgICAgc3RhdGVbaWRdID0gdmFsdWU7XG4gICAgICAgIGlmIChpZCA9PT0gXCJicm5rZXlcIikge1xuICAgICAgICAgICAgdmFyIGJybmtleSA9IGtleS5ub3JtYWxpemVfYnJhaW5LZXkodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShicm5rZXkubGVuZ3RoIDwgNTAgPyBudWxsIDogYnJua2V5KTtcbiAgICAgICAgICAgIHN0YXRlLmNoZWNrX2RpZ2l0cyA9XG4gICAgICAgICAgICAgICAgYnJua2V5Lmxlbmd0aCA8IDUwXG4gICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IGhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNoYTEoYnJua2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoXCJoZXhcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnN0cmluZygwLCA0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5lcnJvckNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmVycm9yQ2FsbGJhY2sodmFsaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBNaXNzcGVsbGVkV29yZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IGRvdHRlZCAjZmYwMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxcHhcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tib3JkZXJCb3R0b206IFwiMXB4IGRvdHRlZCAjZmYwMDAwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBXYWxsZXRNYW5hZ2VyU3RvcmUgZnJvbSBcInN0b3Jlcy9XYWxsZXRNYW5hZ2VyU3RvcmVcIjtcclxuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZSBmcm9tIFwiLi9CYWxhbmNlQ2xhaW1BY3RpdmVcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBCcmFpbmtleSBmcm9tIFwiLi9CcmFpbmtleVwiO1xyXG5pbXBvcnQgSW1wb3J0S2V5cyBmcm9tIFwiLi9JbXBvcnRLZXlzXCI7XHJcbmltcG9ydCB7QmFja3VwUmVzdG9yZX0gZnJvbSBcIi4vQmFja3VwXCI7XHJcbmltcG9ydCB7Z2V0V2FsbGV0TmFtZX0gZnJvbSBcImJyYW5kaW5nXCI7XHJcblxyXG5jb25zdCBjb25uZWN0T2JqZWN0ID0ge1xyXG4gICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIFtXYWxsZXRNYW5hZ2VyU3RvcmVdO1xyXG4gICAgfSxcclxuICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgIGNvbnN0IHdhbGxldCA9IFdhbGxldE1hbmFnZXJTdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB7d2FsbGV0fTtcclxuICAgIH1cclxufTtcclxuXHJcbmNsYXNzIEV4aXN0aW5nQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGFzX3dhbGxldCA9IHRoaXMucHJvcHMud2FsbGV0LndhbGxldF9uYW1lcy5jb3VudCgpICE9IDA7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgY2VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQud2VsY29tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldF9uYW1lPXtnZXRXYWxsZXROYW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWhhc193YWxsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY3JlYXRlX3dhbGxldF9iYWNrdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnNldHVwX3dhbGxldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvZXhpc3RpbmctYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFja3VwUmVzdG9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnQvaW1wb3J0LWJhY2t1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RXhpc3RpbmdBY2NvdW50T3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnQvaW1wb3J0LWtleXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0ltcG9ydEtleXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi9leGlzdGluZy1hY2NvdW50L2JyYWlua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCcmFpbmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL2V4aXN0aW5nLWFjY291bnQvYmFsYW5jZS1jbGFpbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFsYW5jZUNsYWltQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkV4aXN0aW5nQWNjb3VudCA9IGNvbm5lY3QoRXhpc3RpbmdBY2NvdW50LCBjb25uZWN0T2JqZWN0KTtcclxuXHJcbmNsYXNzIEV4aXN0aW5nQWNjb3VudE9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhhc193YWxsZXQgPSB0aGlzLnByb3BzLndhbGxldC53YWxsZXRfbmFtZXMuY291bnQoKSAhPSAwO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgeyFoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZXhpc3RpbmctYWNjb3VudC9pbXBvcnQtYmFja3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5pbXBvcnRfYmFja3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZXhpc3RpbmctYWNjb3VudC9pbXBvcnQta2V5c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9idHMxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiZXhpc3RpbmctYWNjb3VudC9pbXBvcnQta2V5c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNyZWF0ZV93YWxsZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIHshaGFzX3dhbGxldCA/IG51bGwgOiA8QmFsYW5jZUNsYWltQWN0aXZlIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJoZWFkZXIuZGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCJ3YWxsZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy53YWxsZXRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbkV4aXN0aW5nQWNjb3VudE9wdGlvbnMgPSBjb25uZWN0KEV4aXN0aW5nQWNjb3VudE9wdGlvbnMsIGNvbm5lY3RPYmplY3QpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhpc3RpbmdBY2NvdW50O1xyXG5leHBvcnQge0V4aXN0aW5nQWNjb3VudE9wdGlvbnN9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7UHJpdmF0ZUtleSwgQWVzLCBQdWJsaWNLZXksIEZldGNoQ2hhaW4sIGhhc2h9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFjY291bnRBcGkgZnJvbSBcImFwaS9hY2NvdW50QXBpXCI7XG5pbXBvcnQge0NoYWluQ29uZmlnfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCBQcml2YXRlS2V5U3RvcmUgZnJvbSBcInN0b3Jlcy9Qcml2YXRlS2V5U3RvcmVcIjtcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcbmltcG9ydCB7V2FsbGV0Q3JlYXRlfSBmcm9tIFwiY29tcG9uZW50cy9XYWxsZXQvV2FsbGV0Q3JlYXRlXCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmUgZnJvbSBcIi4uL1dhbGxldC9CYWxhbmNlQ2xhaW1BY3RpdmVcIjtcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmVBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0JhbGFuY2VDbGFpbUFjdGl2ZUFjdGlvbnNcIjtcbmltcG9ydCBCYWxhbmNlQ2xhaW1Bc3NldFRvdGFsIGZyb20gXCJjb21wb25lbnRzL1dhbGxldC9CYWxhbmNlQ2xhaW1Bc3NldFRvdGFsXCI7XG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuaW1wb3J0IEltcG9ydEtleXNTdG9yZSBmcm9tIFwic3RvcmVzL0ltcG9ydEtleXNTdG9yZVwiO1xuXG5pbXBvcnQge05vdGlmaWNhdGlvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5pbXBvcnQgR2VuZXNpc0ZpbHRlciBmcm9tIFwiY2hhaW4vR2VuZXNpc0ZpbHRlclwiO1xuXG5pbXBvcnQge0J1dHRvbiwgSW5wdXR9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxucmVxdWlyZShcIi4vSW1wb3J0S2V5cy5zY3NzXCIpO1xuXG5sZXQgaW1wb3J0X2tleXNfYXNzZXJ0X2NoZWNraW5nID0gZmFsc2U7XG5cbmNvbnN0IEtleUNvdW50ID0gKHtrZXlfY291bnR9KSA9PiB7XG4gICAgaWYgKCFrZXlfY291bnQpIHJldHVybiA8c3BhbiAvPjtcbiAgICByZXR1cm4gPHNwYW4+Rm91bmQge2tleV9jb3VudH0gcHJpdmF0ZSBrZXlzPC9zcGFuPjtcbn07XG5cbmNvbnN0IFdJRl9LRVlfTEVOR1RIID0gNTE7XG5cbmNsYXNzIEltcG9ydEtleXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyQmFsYW5jZUNsYWltcyA9IHRoaXMuX3JlbmRlckJhbGFuY2VDbGFpbXMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBwcml2YXRlS2V5OiB0cnVlXG4gICAgfTtcblxuICAgIF9nZXRJbml0aWFsU3RhdGUoa2VlcF9maWxlX25hbWUgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5c190b19hY2NvdW50OiB7fSxcbiAgICAgICAgICAgIG5vX2ZpbGU6IHRydWUsXG4gICAgICAgICAgICBhY2NvdW50X2tleXM6IFtdLFxuICAgICAgICAgICAgLy9icmFpbmtleTogbnVsbCxcbiAgICAgICAgICAgIC8vZW5jcnlwdGVkX2JyYWlua2V5OiBudWxsLFxuICAgICAgICAgICAgcmVzZXRfZmlsZV9uYW1lOiBrZWVwX2ZpbGVfbmFtZVxuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5yZXNldF9maWxlX25hbWVcbiAgICAgICAgICAgICAgICA6IERhdGUubm93KCksXG4gICAgICAgICAgICByZXNldF9wYXNzd29yZDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtOiBudWxsLFxuICAgICAgICAgICAgaW1wb3J0X2ZpbGVfbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIGltcG9ydF9wYXNzd29yZF9tZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgaW1wb3J0ZWRfa2V5c19wdWJsaWM6IHt9LFxuICAgICAgICAgICAga2V5X3RleHRfbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIGFzc29jaWF0ZWRBY2NvdW50OiBudWxsLFxuICAgICAgICAgICAgZXJyb3JUZXh0TWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyX3N0YXR1czogW10sXG4gICAgICAgICAgICBnZW5lc2lzX2ZpbHRlcl9maW5pc2hlZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaW1wb3J0U3VjY2VzczogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXNldChlLCBrZWVwX2ZpbGVfbmFtZSkge1xuICAgICAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUoa2VlcF9maWxlX25hbWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlLCAoKSA9PiB0aGlzLnVwZGF0ZU9uQ2hhbmdlKCkpO1xuICAgIH1cblxuICAgIG9uV2lmKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZWZzLndpZklucHV0LnN0YXRlLnZhbHVlO1xuICAgICAgICB0aGlzLmFkZEJ5UGF0dGVybih2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25DYW5jZWwoZSkge1xuICAgICAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldEluaXRpYWxTdGF0ZSgpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVPbkNoYW5nZSgpIHtcbiAgICAgICAgQmFsYW5jZUNsYWltQWN0aXZlQWN0aW9ucy5zZXRQdWJrZXlzKFxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5pbXBvcnRlZF9rZXlzX3B1YmxpYylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRJbXBvcnRBY2NvdW50S2V5Q291bnQoa2V5c190b19hY2NvdW50KSB7XG4gICAgICAgIGxldCBhY2NvdW50X2tleWNvdW50ID0ge307XG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4ga2V5c190b19hY2NvdW50KVxuICAgICAgICAgICAgZm9yIChsZXQgYWNjb3VudF9uYW1lIG9mIGtleXNfdG9fYWNjb3VudFtrZXldLmFjY291bnRfbmFtZXMpIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50X2tleWNvdW50W2FjY291bnRfbmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAoYWNjb3VudF9rZXljb3VudFthY2NvdW50X25hbWVdIHx8IDApICsgMTtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZCA/IGFjY291bnRfa2V5Y291bnQgOiBudWxsO1xuICAgIH1cblxuICAgIHVwbG9hZChldnQpIHtcbiAgICAgICAgdGhpcy5yZXNldChudWxsLCB0cnVlKTtcbiAgICAgICAgbGV0IGZpbGUgPSBldnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGV2dCA9PiB7XG4gICAgICAgICAgICBsZXQgY29udGVudHMgPSBldnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGpzb25fY29udGVudHM7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAganNvbl9jb250ZW50cyA9IEpTT04ucGFyc2UoY29udGVudHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IGNoYW5jZSB0byBlbmNvdW50ZXIgYSBsYXJnZSBmaWxlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0cnkgdGhpcyBmb3JtYXQgZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlSW1wb3J0S2V5VXBsb2FkKFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbl9jb250ZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9zdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVfc3RhdGVcIiwgdXBkYXRlX3N0YXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodXBkYXRlX3N0YXRlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVfc3RhdGUuZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyeSBlbXB0eSBwYXNzd29yZCwgYWxzbyBkaXNwbGF5IFwiRW50ZXIgaW1wb3J0IGZpbGUgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFzc3dvcmRDaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvL0RFQlVHIGNvbnNvbGUubG9nKFwiLi4uIF9wYXJzZUltcG9ydEtleVVwbG9hZFwiLGUpXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWpzb25fY29udGVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5uYW1lICsgXCIgaXMgYW4gdW5yZWNvZ25pemVkIGZvcm1hdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyc2VXYWxsZXRKc29uKGpzb25fY29udGVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFkZEJ5UGF0dGVybihjb250ZW50cykpIHRocm93IGVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSBlbXB0eSBwYXNzd29yZCwgYWxzbyBkaXNwbGF5IFwiRW50ZXIgaW1wb3J0IGZpbGUgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXNzd29yZENoZWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCIuLi4gSW1wb3J0S2V5cyB1cGxvYWQgZXJyb3JcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1wb3J0X2ZpbGVfbWVzc2FnZTogbWVzc2FnZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICB9XG5cbiAgICAvKiogQlRTIDEuMCBjbGllbnQgd2FsbGV0X2V4cG9ydF9rZXlzIGZvcm1hdC4gKi9cbiAgICBfcGFyc2VJbXBvcnRLZXlVcGxvYWQoanNvbl9jb250ZW50cywgZmlsZV9uYW1lLCB1cGRhdGVfc3RhdGUpIHtcbiAgICAgICAgbGV0IHBhc3N3b3JkX2NoZWNrc3VtLCB1bmZpbHRlcmVkX2FjY291bnRfa2V5cztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtID0ganNvbl9jb250ZW50cy5wYXNzd29yZF9jaGVja3N1bTtcbiAgICAgICAgICAgIGlmICghcGFzc3dvcmRfY2hlY2tzdW0pXG4gICAgICAgICAgICAgICAgdGhyb3cgZmlsZV9uYW1lICsgXCIgaXMgYW4gdW5yZWNvZ25pemVkIGZvcm1hdFwiO1xuXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoanNvbl9jb250ZW50cy5hY2NvdW50X2tleXMpKVxuICAgICAgICAgICAgICAgIHRocm93IGZpbGVfbmFtZSArIFwiIGlzIGFuIHVucmVjb2duaXplZCBmb3JtYXRcIjtcblxuICAgICAgICAgICAgdW5maWx0ZXJlZF9hY2NvdW50X2tleXMgPSBqc29uX2NvbnRlbnRzLmFjY291bnRfa2V5cztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgZS5tZXNzYWdlIHx8IGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCVFMgMS4wIHdhbGxldHMgbWF5IGhhdmUgYSBsb3Qgb2YgZ2VuZXJhdGVkIGJ1dCB1bnVzZWQga2V5cyBvciBzcGVudCBUSVRBTiBhZGRyZXNzZXMgbWFraW5nXG4gICAgICAgIC8vIHdhbGxldHMgc28gbGFyZ2UgaXQgaXMgd2FzIG5vdCBwb3NzaWJsZSB0byB1c2UgdGhlIEphdmFTY3JpcHQgd2FsbGV0cyB3aXRoIHRoZW0uXG5cbiAgICAgICAgbGV0IGdlbmVzaXNfZmlsdGVyID0gbmV3IEdlbmVzaXNGaWx0ZXIoKTtcbiAgICAgICAgaWYgKCFnZW5lc2lzX2ZpbHRlci5pc0F2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICB1cGRhdGVfc3RhdGUoe1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtLFxuICAgICAgICAgICAgICAgIGFjY291bnRfa2V5czogdW5maWx0ZXJlZF9hY2NvdW50X2tleXMsXG4gICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge2dlbmVzaXNfZmlsdGVyX2luaXRhbGl6aW5nOiB0cnVlfSxcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+XG4gICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXIuaW5pdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJfc3RhdHVzID0gdGhpcy5zdGF0ZS5nZW5lc2lzX2ZpbHRlcl9zdGF0dXM7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRkYgPCB2ZXJzaW9uIDQxIGRvZXMgbm90IHN1cHBvcnQgd29ya2VyIHRocmVhZHMgaW50ZXJuYWxzIChsaWtlIGJsb2IgdXJscylcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IEdlbmVzaXNGaWx0ZXJXb3JrZXIgPSByZXF1aXJlKFwid29ya2VyLWxvYWRlciF3b3JrZXJzL0dlbmVzaXNGaWx0ZXJXb3JrZXJcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHdvcmtlciA9IG5ldyBHZW5lc2lzRmlsdGVyV29ya2VyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhY2NvdW50X2tleXM6IHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYmxvb21fZmlsdGVyOiBnZW5lc2lzX2ZpbHRlci5ibG9vbV9maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gd29ya2VyLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHsgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCB7IHN0YXR1cywgYWNjb3VudF9rZXlzIH0gPSBldmVudC5kYXRhXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyAuLi5cbiAgICAgICAgICAgICAgICAgICAgLy8gfSBjYXRjaCggZSApIHsgY29uc29sZS5lcnJvcignR2VuZXNpc0ZpbHRlcldvcmtlcicsIGUpIH19XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfa2V5cyA9IHVuZmlsdGVyZWRfYWNjb3VudF9rZXlzO1xuICAgICAgICAgICAgICAgICAgICBnZW5lc2lzX2ZpbHRlci5maWx0ZXIoYWNjb3VudF9rZXlzLCBzdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImltcG9ydCBmaWx0ZXJcIiwgc3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5lcnJvciA9PT0gXCJtaXNzaW5nX3B1YmxpY19rZXlzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVuLXJlbGVhc2VkIGZvcm1hdCwganVzdCBmb3IgdGVzdGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVfc3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jaGVja3N1bSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9rZXlzOiB1bmZpbHRlcmVkX2FjY291bnRfa2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCB7IGFjY291bnRfa2V5cyB9ID0gZXZlbnQuZGF0YSAvLyBpZiB1c2luZyB3b3JrZXIgdGhyZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlX3N0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfa2V5cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuaW5pdGFsaXppbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9zdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyX2luaXRhbGl6aW5nOiBzdGF0dXMuaW5pdGFsaXppbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVzaXNfZmlsdGVyaW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5pbXBvcnRpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2dyYW1tZXIgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidW5rbm93biBzdGF0dXNcIiwgc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlcl9zdGF0dXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IGFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJfc3RhdHVzLnB1c2goc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0X2FjY291bnRfbmFtZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zdGF0dXNbZmlsdGVyX3N0YXR1cy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjY291bnRfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdF9hY2NvdW50X25hbWUgPT09IHN0YXR1cy5hY2NvdW50X25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBzYW1lIGFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyX3N0YXR1c1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcl9zdGF0dXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdID0gc3RhdHVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ldyBhY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBmaWx0ZXJfc3RhdHVzLnB1c2goc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZV9zdGF0ZSh7Z2VuZXNpc19maWx0ZXJfc3RhdHVzOiBmaWx0ZXJfc3RhdHVzfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLywgMTAwKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgIEJUUyAxLjAgaG9zdGVkIHdhbGxldCBiYWNrdXAgKHdhbGxldC5iaXRzaGFyZXMub3JnKSBpcyBzdXBwb3J0ZWQuXG5cbiAgICBCVFMgMS4wIG5hdGl2ZSB3YWxsZXRzIHNob3VsZCB1c2Ugd2FsbGV0X2V4cG9ydF9rZXlzIGluc3RlYWQgb2YgYSB3YWxsZXQgYmFja3VwLlxuXG4gICAgTm90ZSwgIE5hdGl2ZSB3YWxsZXQgYmFja3VwcyB3aWxsIGJlIHJlamVjdGVkLiAgVGhlIGxvZ2ljIGJlbG93IGRvZXMgbm90XG4gICAgY2FwdHVyZSBhc3NpZ25lZCBhY2NvdW50IG5hbWVzIChmb3IgdW5yZWdpc3RlZCBhY2NvdW50cykgYW5kIGRvZXMgbm90IGNhcHR1cmVcbiAgICBzaWduaW5nIGtleXMuICBUaGUgaG9zdGVkIHdhbGxldCBoYXMgb25seSByZWdpc3RlcmVkIGFjY291bnRzIGFuZCBubyBzaWduaW5nXG4gICAga2V5cy5cblxuICAgICovXG4gICAgX3BhcnNlV2FsbGV0SnNvbihqc29uX2NvbnRlbnRzKSB7XG4gICAgICAgIGxldCBwYXNzd29yZF9jaGVja3N1bTtcbiAgICAgICAgbGV0IGVuY3J5cHRlZF9icmFpbmtleTtcbiAgICAgICAgbGV0IGFkZHJlc3NfdG9fZW5ja2V5cyA9IHt9O1xuICAgICAgICBsZXQgYWNjb3VudF9hZGRyZXNzZXMgPSB7fTtcblxuICAgICAgICBsZXQgc2F2ZVB1YmtleUFjY291bnQgPSBmdW5jdGlvbihwdWJrZXksIGFjY291bnRfbmFtZSkge1xuICAgICAgICAgICAgLy9yZXBsYWNlIEJUUyB3aXRoIEdQSFxuICAgICAgICAgICAgcHVia2V5ID0gQ2hhaW5Db25maWcuYWRkcmVzc19wcmVmaXggKyBwdWJrZXkuc3Vic3RyaW5nKDMpO1xuICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSBQdWJsaWNLZXkuZnJvbVB1YmxpY0tleVN0cmluZyhcbiAgICAgICAgICAgICAgICBwdWJrZXlcbiAgICAgICAgICAgICkudG9BZGRyZXNzU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgYWRkcmVzc2VzID0gYWNjb3VudF9hZGRyZXNzZXNbYWNjb3VudF9uYW1lXSB8fCBbXTtcbiAgICAgICAgICAgIGFkZHJlc3MgPSBcIkdQSFwiICsgYWRkcmVzcy5zdWJzdHJpbmcoMyk7XG4gICAgICAgICAgICAvL0RFQlVHIGNvbnNvbGUubG9nKFwiLi4uIGFkZHJlc3NcIixhZGRyZXNzLGFjY291bnRfbmFtZSlcbiAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKGFkZHJlc3MpO1xuICAgICAgICAgICAgYWNjb3VudF9hZGRyZXNzZXNbYWNjb3VudF9uYW1lXSA9IGFkZHJlc3NlcztcbiAgICAgICAgfTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGpzb25fY29udGVudHMpKSB7XG4gICAgICAgICAgICAgICAgLy9ERUJVRyBjb25zb2xlLmxvZygnLi4uIGpzb25fY29udGVudHMnLGpzb25fY29udGVudHMpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB3YWxsZXQgZm9ybWF0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBqc29uX2NvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBcImtleV9yZWNvcmRfdHlwZVwiID09IGVsZW1lbnQudHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEuYWNjb3VudF9hZGRyZXNzICYmXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YS5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSBlbGVtZW50LmRhdGEuYWNjb3VudF9hZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW5ja2V5cyA9IGFkZHJlc3NfdG9fZW5ja2V5c1thZGRyZXNzXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgZW5ja2V5cy5wdXNoKGVsZW1lbnQuZGF0YS5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXkpO1xuICAgICAgICAgICAgICAgICAgICAvL0RFQlVHIGNvbnNvbGUubG9nKFwiLi4uIGFkZHJlc3NcIixhZGRyZXNzLGVuY2tleXMpXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NfdG9fZW5ja2V5c1thZGRyZXNzXSA9IGVuY2tleXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcImFjY291bnRfcmVjb3JkX3R5cGVcIiA9PSBlbGVtZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRfbmFtZSA9IGVsZW1lbnQuZGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBzYXZlUHVia2V5QWNjb3VudChlbGVtZW50LmRhdGEub3duZXJfa2V5LCBhY2NvdW50X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBoaXN0b3J5IG9mIGVsZW1lbnQuZGF0YS5hY3RpdmVfa2V5X2hpc3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVQdWJrZXlBY2NvdW50KGhpc3RvcnlbMV0sIGFjY291bnRfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnR5X3JlY29yZF90eXBlXCIgPT0gZWxlbWVudC50eXBlICYmXG4gICAgICAgICAgICAgICAgICAgIFwiZW5jcnlwdGVkX2JyYWlua2V5XCIgPT0gZWxlbWVudC5kYXRhLmtleVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBlbmNyeXB0ZWRfYnJhaW5rZXkgPSBlbGVtZW50LmRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcIm1hc3Rlcl9rZXlfcmVjb3JkX3R5cGVcIiA9PSBlbGVtZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBmaWxlLm5hbWUgKyBcIiBpbnZhbGlkIG1hc3Rlcl9rZXlfcmVjb3JkIHJlY29yZFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5kYXRhLmNoZWNrc3VtKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZmlsZS5uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBpcyBtaXNzaW5nIG1hc3Rlcl9rZXlfcmVjb3JkIGNoZWNrc3VtXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY2hlY2tzdW0gPSBlbGVtZW50LmRhdGEuY2hlY2tzdW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlbmNyeXB0ZWRfYnJhaW5rZXkpXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJQbGVhc2UgdXNlIGEgQlRTIDEuMCB3YWxsZXRfZXhwb3J0X2tleXMgZmlsZSBpbnN0ZWFkXCI7XG5cbiAgICAgICAgICAgIGlmICghcGFzc3dvcmRfY2hlY2tzdW0pXG4gICAgICAgICAgICAgICAgdGhyb3cgZmlsZS5uYW1lICsgXCIgaXMgbWlzc2luZyBwYXNzd29yZF9jaGVja3N1bVwiO1xuXG4gICAgICAgICAgICBpZiAoIWVuY2tleXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHRocm93IGZpbGUubmFtZSArIFwiIGRvZXMgbm90IGNvbnRhaW4gYW55IHByaXZhdGUga2V5c1wiO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBlLm1lc3NhZ2UgfHwgZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY2NvdW50X2tleXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgYWNjb3VudF9uYW1lIGluIGFjY291bnRfYWRkcmVzc2VzKSB7XG4gICAgICAgICAgICBsZXQgZW5jcnlwdGVkX3ByaXZhdGVfa2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYWRkcmVzcyBvZiBhY2NvdW50X2FkZHJlc3Nlc1thY2NvdW50X25hbWVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuY2tleXMgPSBhZGRyZXNzX3RvX2VuY2tleXNbYWRkcmVzc107XG4gICAgICAgICAgICAgICAgaWYgKCFlbmNrZXlzKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbmNrZXkgb2YgZW5ja2V5cykgZW5jcnlwdGVkX3ByaXZhdGVfa2V5cy5wdXNoKGVuY2tleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2NvdW50X2tleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9wcml2YXRlX2tleXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGNvdWxkIHByb21wdCBmb3IgdGhpcyBicmFpbiBrZXkgaW5zdGVhZCBvbiBmaXJzdCB1c2UuICBUaGUgdXNlclxuICAgICAgICAvLyBtYXkgYWxyZWFkeSBoYXZlIGEgYnJhaW5rZXkgYXQgdGhpcyBwb2ludCBzbyB3aXRoIGEgc2luZ2xlIGJyYWlua2V5XG4gICAgICAgIC8vIHdhbGxldCB3ZSBjYW4ndCB1c2UgaXQgbm93LlxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtLFxuICAgICAgICAgICAgYWNjb3VudF9rZXlzXG4gICAgICAgICAgICAvL2VuY3J5cHRlZF9icmFpbmtleVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcGFzc3dvcmRDaGVjayhldnQpIHtcbiAgICAgICAgaWYgKGV2dCAmJiBcInByZXZlbnREZWZhdWx0XCIgaW4gZXZ0KSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHdOb2RlID0gdGhpcy5yZWZzLnBhc3N3b3JkO1xuICAgICAgICAvLyBpZihwd05vZGUpIHB3Tm9kZS5mb2N1cygpXG4gICAgICAgIGxldCBwYXNzd29yZCA9IHB3Tm9kZSA/IHB3Tm9kZS52YWx1ZSA6IFwiXCI7XG4gICAgICAgIGxldCBjaGVja3N1bSA9IHRoaXMuc3RhdGUucGFzc3dvcmRfY2hlY2tzdW07XG4gICAgICAgIGxldCBuZXdfY2hlY2tzdW0gPSBoYXNoLnNoYTUxMihoYXNoLnNoYTUxMihwYXNzd29yZCkpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICBpZiAoY2hlY2tzdW0gIT0gbmV3X2NoZWNrc3VtKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbm9fZmlsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW1wb3J0X3Bhc3N3b3JkX21lc3NhZ2U6IHBhc3N3b3JkLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICA/IFwiSW5jb3JyZWN0IHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5vX2ZpbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc2V0X3Bhc3N3b3JkOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgIGltcG9ydF9wYXNzd29yZF9tZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0LmltcG9ydF9wYXNzX21hdGNoXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5fZGVjcnlwdFByaXZhdGVLZXlzKHBhc3N3b3JkKVxuICAgICAgICApO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCwgMjUwKVxuICAgIH1cblxuICAgIF9kZWNyeXB0UHJpdmF0ZUtleXMocGFzc3dvcmQpIHtcbiAgICAgICAgbGV0IHBhc3N3b3JkX2FlcyA9IEFlcy5mcm9tU2VlZChwYXNzd29yZCk7XG4gICAgICAgIGxldCBmb3JtYXRfZXJyb3IxX29uY2UgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBhY2NvdW50IG9mIHRoaXMuc3RhdGUuYWNjb3VudF9rZXlzKSB7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cykge1xuICAgICAgICAgICAgICAgIGxldCBlcnJvciA9IGBBY2NvdW50ICR7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQuYWNjb3VudF9uYW1lXG4gICAgICAgICAgICAgICAgfSBtaXNzaW5nIGVuY3J5cHRlZF9wcml2YXRlX2tleXNgO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChmb3JtYXRfZXJyb3IxX29uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXRfZXJyb3IxX29uY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9uYW1lID0gYWNjb3VudC5hY2NvdW50X25hbWUudHJpbSgpO1xuICAgICAgICAgICAgbGV0IHNhbWVfcHJlZml4X3JlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICBcIl5cIiArIENoYWluQ29uZmlnLmFkZHJlc3NfcHJlZml4XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2NvdW50LmVuY3J5cHRlZF9wcml2YXRlX2tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5jcnlwdGVkX3ByaXZhdGUgPSBhY2NvdW50LmVuY3J5cHRlZF9wcml2YXRlX2tleXNbaV07XG4gICAgICAgICAgICAgICAgbGV0IHB1YmxpY19rZXlfc3RyaW5nID0gYWNjb3VudC5wdWJsaWNfa2V5c1xuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnQucHVibGljX2tleXNbaV1cbiAgICAgICAgICAgICAgICAgICAgOiBudWxsOyAvLyBwZXJmb3JtYW5jZSBnYWluXG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9wbGFpbmhleCA9IHBhc3N3b3JkX2Flcy5kZWNyeXB0SGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5jcnlwdGVkX3ByaXZhdGVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltcG9ydF9rZXlzX2Fzc2VydF9jaGVja2luZyAmJiBwdWJsaWNfa2V5X3N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfa2V5ID0gUHJpdmF0ZUtleS5mcm9tSGV4KHByaXZhdGVfcGxhaW5oZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB1YiA9IHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCk7IC8vIFMgTCBPIFdcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGR5ID0gcHViLnRvQWRkcmVzc1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB1YmJ5ID0gcHViLnRvUHVibGljS2V5U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc19zdHJpbmcgPSBhY2NvdW50LmFkZHJlc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWNjb3VudC5hZGRyZXNzZXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7IC8vIGFzc2VydCBjaGVja2luZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc19zdHJpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGR5LnN1YnN0cmluZygzKSAhPSBhZGRyZXNzX3N0cmluZy5zdWJzdHJpbmcoMylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkcmVzcyBpbXBvcnRlZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nfc3RyaW5nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYnV0IGNhbGN1bGF0ZWQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGR5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIuIFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHViYnkuc3Vic3RyaW5nKDMpICE9IHB1YmxpY19rZXlfc3RyaW5nLnN1YnN0cmluZygzKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yICs9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljIGtleSBpbXBvcnRlZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgYnV0IGNhbGN1bGF0ZWQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJieTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yICE9IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBNaXNzLW1hdGNoIGtleVwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXB1YmxpY19rZXlfc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpdmF0ZV9rZXkgPSBQcml2YXRlS2V5LmZyb21IZXgocHJpdmF0ZV9wbGFpbmhleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHVibGljX2tleSA9IHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCk7IC8vIFMgTCBPIFdcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19rZXlfc3RyaW5nID0gcHVibGljX2tleS50b1B1YmxpY0tleVN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzYW1lX3ByZWZpeF9yZWdleC50ZXN0KHB1YmxpY19rZXlfc3RyaW5nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdhcyBjcmVhdGluZyBhIHVucmVzcG9uc2l2ZSBjaHJvbWUgYnJvd3NlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBhZnRlciB0aGUgcmVzdWx0cyB3ZXJlIHNob3duLiAgSXQgd2FzIHByb2JhYmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2F1c2VkIGJ5IGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWluQ29uZmlnLmFkZHJlc3NfcHJlZml4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmcuc3Vic3RyaW5nKDMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWNbcHVibGljX2tleV9zdHJpbmddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHthY2NvdW50X25hbWVzfSA9IHRoaXMuc3RhdGUua2V5c190b19hY2NvdW50W1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZV9wbGFpbmhleFxuICAgICAgICAgICAgICAgICAgICBdIHx8IHthY2NvdW50X25hbWVzOiBbXX07XG4gICAgICAgICAgICAgICAgICAgIGxldCBkdXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgX25hbWUgb2YgYWNjb3VudF9uYW1lcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfbmFtZSA9PSBhY2NvdW50X25hbWUpIGR1cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkdXApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWVzLnB1c2goYWNjb3VudF9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5rZXlzX3RvX2FjY291bnRbcHJpdmF0ZV9wbGFpbmhleF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljX2tleV9zdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUsIGUuc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGUubWVzc2FnZSB8fCBlO1xuICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5pbXBvcnRfa2V5c19lcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBhY2NvdW50X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX21zZzogbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vbGV0IGVuY19icmFpbmtleSA9IHRoaXMuc3RhdGUuZW5jcnlwdGVkX2JyYWlua2V5XG4gICAgICAgIC8vaWYoZW5jX2JyYWlua2V5KXtcbiAgICAgICAgLy8gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vICAgICAgICBicmFpbmtleTogcGFzc3dvcmRfYWVzLmRlY3J5cHRIZXhUb1RleHQoZW5jX2JyYWlua2V5KVxuICAgICAgICAvLyAgICB9KVxuICAgICAgICAvL31cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRfZmlsZV9tZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgICAgIGltcG9ydF9wYXNzd29yZF9tZXNzYWdlOiBudWxsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NoZWNrc3VtOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVPbkNoYW5nZSgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3NhdmVJbXBvcnQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBrZXlzID0gUHJpdmF0ZUtleVN0b3JlLmdldFN0YXRlKCkua2V5cztcbiAgICAgICAgbGV0IGR1cHMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgcHVibGljX2tleV9zdHJpbmcgaW4gdGhpcy5zdGF0ZS5pbXBvcnRlZF9rZXlzX3B1YmxpYykge1xuICAgICAgICAgICAgaWYgKCFrZXlzLmhhcyhwdWJsaWNfa2V5X3N0cmluZykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGUuaW1wb3J0ZWRfa2V5c19wdWJsaWNbcHVibGljX2tleV9zdHJpbmddO1xuICAgICAgICAgICAgZHVwc1twdWJsaWNfa2V5X3N0cmluZ10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMuaW1wb3J0X2tleXNfYWxyZWFkeV9pbXBvcnRlZFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtleXNfdG9fYWNjb3VudCA9IHRoaXMuc3RhdGUua2V5c190b19hY2NvdW50O1xuICAgICAgICBmb3IgKGxldCBwcml2YXRlX3BsYWluaGV4IG9mIE9iamVjdC5rZXlzKGtleXNfdG9fYWNjb3VudCkpIHtcbiAgICAgICAgICAgIGxldCB7YWNjb3VudF9uYW1lcywgcHVibGljX2tleV9zdHJpbmd9ID0ga2V5c190b19hY2NvdW50W1xuICAgICAgICAgICAgICAgIHByaXZhdGVfcGxhaW5oZXhcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBpZiAoZHVwc1twdWJsaWNfa2V5X3N0cmluZ10pXG4gICAgICAgICAgICAgICAgZGVsZXRlIGtleXNfdG9fYWNjb3VudFtwcml2YXRlX3BsYWluaGV4XTtcbiAgICAgICAgfVxuICAgICAgICBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgSW1wb3J0S2V5c1N0b3JlLmltcG9ydGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBzaG93IHRoZSBsb2FkaW5nIGluZGljYXRvclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zYXZlSW1wb3J0KCksIDIwMCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHt9KTtcbiAgICB9XG5cbiAgICBzYXZlSW1wb3J0KCkge1xuICAgICAgICBsZXQga2V5c190b19hY2NvdW50ID0gdGhpcy5zdGF0ZS5rZXlzX3RvX2FjY291bnQ7XG4gICAgICAgIGxldCBwcml2YXRlX2tleV9vYmpzID0gW107XG4gICAgICAgIGZvciAobGV0IHByaXZhdGVfcGxhaW5oZXggb2YgT2JqZWN0LmtleXMoa2V5c190b19hY2NvdW50KSkge1xuICAgICAgICAgICAgbGV0IHthY2NvdW50X25hbWVzLCBwdWJsaWNfa2V5X3N0cmluZ30gPSBrZXlzX3RvX2FjY291bnRbXG4gICAgICAgICAgICAgICAgcHJpdmF0ZV9wbGFpbmhleFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHByaXZhdGVfa2V5X29ianMucHVzaCh7XG4gICAgICAgICAgICAgICAgcHJpdmF0ZV9wbGFpbmhleCxcbiAgICAgICAgICAgICAgICBpbXBvcnRfYWNjb3VudF9uYW1lczogYWNjb3VudF9uYW1lcyxcbiAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICBXYWxsZXREYi5pbXBvcnRLZXlzV29ya2VyKHByaXZhdGVfa2V5X29ianMpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIEltcG9ydEtleXNTdG9yZS5pbXBvcnRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGxldCBpbXBvcnRfY291bnQgPSBwcml2YXRlX2tleV9vYmpzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXQuaW1wb3J0X2tleV9zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGltcG9ydF9jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0U3VjY2VzczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMub25DYW5jZWwoKSAvLyBiYWNrIHRvIGNsYWltIGJhbGFuY2VzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgSW1wb3J0S2V5c1N0b3JlLmltcG9ydGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IudGFyZ2V0LmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5pbXBvcnRfa2V5c19lcnJvcl91bmtub3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfbXNnOiBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEJ5UGF0dGVybihjb250ZW50cykge1xuICAgICAgICBpZiAoIWNvbnRlbnRzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvclRleHRNZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0LndpZl9pbXBvcnRfZXJyb3JcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250ZW50cy5sZW5ndGggIT09IFdJRl9LRVlfTEVOR1RIKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBlcnJvclRleHRNZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0LndpZl9sZW5ndGhfZXJyb3JcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb3VudCA9IDAsXG4gICAgICAgICAgICBpbnZhbGlkX2NvdW50ID0gMDtcbiAgICAgICAgbGV0IHdpZl9yZWdleCA9IC81W0hKS11bMS05QS1aYS16XXs0OX0vZztcbiAgICAgICAgZm9yIChsZXQgd2lmIG9mIGNvbnRlbnRzLm1hdGNoKHdpZl9yZWdleCkgfHwgW10pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfa2V5ID0gUHJpdmF0ZUtleS5mcm9tV2lmKHdpZik7IC8vY291bGQgdGhyb3cgYW5kIGVycm9yXG4gICAgICAgICAgICAgICAgbGV0IHByaXZhdGVfcGxhaW5oZXggPSBwcml2YXRlX2tleS50b0J1ZmZlcigpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICAgICAgICAgIGxldCBwdWJsaWNfa2V5ID0gcHJpdmF0ZV9rZXkudG9QdWJsaWNLZXkoKTsgLy8gUyBMIE8gV1xuICAgICAgICAgICAgICAgIGxldCBwdWJsaWNfa2V5X3N0cmluZyA9IHB1YmxpY19rZXkudG9QdWJsaWNLZXlTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmltcG9ydGVkX2tleXNfcHVibGljW3B1YmxpY19rZXlfc3RyaW5nXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5rZXlzX3RvX2FjY291bnRbcHJpdmF0ZV9wbGFpbmhleF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5X3N0cmluZ1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSBbXTtcbiAgICAgICAgICAgICAgICBBY2NvdW50QXBpLmxvb2t1cEFjY291bnRCeVB1YmxpY0tleShwdWJsaWNfa2V5X3N0cmluZykudGhlbihcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoID0gcmVzdWx0WzBdLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEZldGNoQ2hhaW4oXCJnZXRBY2NvdW50XCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnROYW1lcyA9IGF3YWl0IFByb21pc2UuYWxsKGJhdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lcy5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gdmFsdWUuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudE5hbWUuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Fzc29jaWF0ZWRBY2NvdW50OiBhY2NvdW50TmFtZX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaW52YWxpZF9jb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5X3RleHRfbWVzc2FnZTpcbiAgICAgICAgICAgICAgICAgICAgXCJGb3VuZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICghY291bnQgPyBcIlwiIDogY291bnQgKyBcIiB2YWxpZFwiKSArXG4gICAgICAgICAgICAgICAgICAgICghaW52YWxpZF9jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiIGFuZCBcIiArIGludmFsaWRfY291bnQgKyBcIiBpbnZhbGlkXCIpICtcbiAgICAgICAgICAgICAgICAgICAgXCIga2V5XCIgK1xuICAgICAgICAgICAgICAgICAgICAoY291bnQgPiAxIHx8IGludmFsaWRfY291bnQgPiAxID8gXCJzXCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiLlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVPbkNoYW5nZSgpXG4gICAgICAgICk7XG4gICAgICAgIC8vIHJlbW92ZXMgdGhlIG1lc3NhZ2Ugb24gdGhlIG5leHQgcmVuZGVyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAga2V5X3RleHRfbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIGVycm9yVGV4dE1lc3NhZ2U6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICAvLyB0b2dnbGVJbXBvcnRUeXBlKHR5cGUpIHtcbiAgICAvLyAgICAgaWYgKCF0eXBlKSB7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0b2dnbGVJbXBvcnRUeXBlXCIsIHR5cGUpO1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIHByaXZhdGVLZXk6IHR5cGUgPT09IFwicHJpdmF0ZUtleVwiXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIF9yZW5kZXJCYWxhbmNlQ2xhaW1zKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QmFsYW5jZUNsYWltQWN0aXZlIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub25DYW5jZWwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuZG9uZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ByaXZhdGVLZXl9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtrZXlzX3RvX2FjY291bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGtleV9jb3VudCA9IE9iamVjdC5rZXlzKGtleXNfdG9fYWNjb3VudCkubGVuZ3RoO1xuICAgICAgICBsZXQgYWNjb3VudF9rZXljb3VudCA9IHRoaXMuZ2V0SW1wb3J0QWNjb3VudEtleUNvdW50KGtleXNfdG9fYWNjb3VudCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHdhbGxldCBwcmlvciB0byB0aGUgaW1wb3J0IGtleXMgKGtlZXBzIGxheW91dCBjbGVhbilcbiAgICAgICAgaWYgKCFXYWxsZXREYi5nZXRXYWxsZXQoKSlcbiAgICAgICAgICAgIHJldHVybiA8V2FsbGV0Q3JlYXRlIGltcG9ydEtleXM9e3RydWV9IGhpZGVUaXRsZT17dHJ1ZX0gLz47XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmltcG9ydGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvciB0eXBlPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbHRlcmluZyA9IHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJpbmc7XG4gICAgICAgIGxldCB3YXNfZmlsdGVyZWQgPVxuICAgICAgICAgICAgISF0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX3N0YXR1cy5sZW5ndGggJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfZmluaXNoZWQ7XG4gICAgICAgIGxldCBhY2NvdW50X3Jvd3MgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX3N0YXR1cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFjY291bnRfcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgc3RhdHVzIG9mIHRoaXMuc3RhdGUuZ2VuZXNpc19maWx0ZXJfc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5jb3VudCAmJiBzdGF0dXMudG90YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9yb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtzdGF0dXMuYWNjb3VudF9uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YXR1cy5hY2NvdW50X25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXJpbmd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0dXMuY291bnQgLyBzdGF0dXMudG90YWwpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0dXMuY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbXBvcnRfcmVhZHkgPSBrZXlfY291bnQgIT09IDA7XG4gICAgICAgIGxldCBwYXNzd29yZF9wbGFjZWhvbGRlciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgIFwid2FsbGV0LmltcG9ydF9wYXNzd29yZFwiXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGltcG9ydF9yZWFkeSkgcGFzc3dvcmRfcGxhY2Vob2xkZXIgPSBcIlwiO1xuXG4gICAgICAgIGlmICghYWNjb3VudF9yb3dzICYmIGFjY291bnRfa2V5Y291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnRfcm93cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYWNjb3VudF9uYW1lIGluIGFjY291bnRfa2V5Y291bnQpIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50X3Jvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YWNjb3VudF9uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YWNjb3VudF9uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FjY291bnRfa2V5Y291bnRbYWNjb3VudF9uYW1lXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gKFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbXBvcnRTdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyQmFsYW5jZUNsYWltcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgey8qIEtleSBmaWxlIHVwbG9hZCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4IDBcIn19PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmtleV90ZXh0X21lc3NhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5rZXlfdGV4dF9tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxLZXlDb3VudCBrZXlfY291bnQ9e2tleV9jb3VudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgeyFpbXBvcnRfcmVhZHkgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQucmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hc3NvY2lhdGVkQWNjb3VudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LndpZl9hc3NvY2lhdGVkX2FjY291bnRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXNzb2NpYXRlZEFjY291bnQubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtrZXl9Pnt2YWx1ZX08L3A+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2FjY291bnRfcm93cyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshYWNjb3VudF9yb3dzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ3YWxsZXQubm9fYWNjb3VudHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hY2NvdW50LnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MucmVzdG9yZV9rZXlfY291bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PnthY2NvdW50X3Jvd3N9PC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIHshaW1wb3J0X3JlYWR5ICYmICF0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX2luaXRhbGl6aW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpdmF0ZUtleSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uV2lmLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LnBhc3RlX3ByaXZhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIndpZklucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aWZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMTZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1wb3J0RXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvclRleHRNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxNnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbmNlbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuX3Bhc3N3b3JkQ2hlY2suYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnRzXzA5X2V4cG9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm5vX2ZpbGUgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlc2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVfaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwic29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnN0YXRlLnJlc2V0X2ZpbGVfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBsb2FkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbXBvcnRfZmlsZV9tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5ub19maWxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc2V0X3Bhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbXBvcnRfcGFzc3dvcmRfbWVzc2FnZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbXBvcnRfcGFzc3dvcmRfbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRfcGFzc3dvcmRfbWVzc2FnZTogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZhY29sb3ItZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbXBvcnRfcGFzc3dvcmRfbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEhdGhpcy5zdGF0ZS5ub19maWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxNnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYW5jZWxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmdlbmVzaXNfZmlsdGVyX2luaXRhbGl6aW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJjaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAge2ltcG9ydF9yZWFkeSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZShcImJ1dHRvbiBzdWNjZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWltcG9ydF9yZWFkeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zYXZlSW1wb3J0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5pbXBvcnRfa2V5c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNhbmNlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQudW5jbGFpbWVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInBcIiBjb250ZW50PVwid2FsbGV0LmNsYWltX2xhdGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQudG90YWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDbGFpbUFzc2V0VG90YWwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5JbXBvcnRLZXlzID0gY29ubmVjdChcbiAgICBJbXBvcnRLZXlzLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0ltcG9ydEtleXNTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRpbmc6IEltcG9ydEtleXNTdG9yZS5nZXRTdGF0ZSgpLmltcG9ydGluZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltcG9ydEtleXM7XG4iLCJpbXBvcnQgYWx0IGZyb20gXCJhbHQtaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIEJyYWlua2V5QWN0aW9ucyB7XHJcbiAgICBzZXRCcmFpbmtleShicm5rZXkpIHtcclxuICAgICAgICByZXR1cm4gYnJua2V5O1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgQnJhaW5rZXlBY3Rpb25zV3JhcHBlZCA9IGFsdC5jcmVhdGVBY3Rpb25zKEJyYWlua2V5QWN0aW9ucyk7XHJcbmV4cG9ydCBkZWZhdWx0IEJyYWlua2V5QWN0aW9uc1dyYXBwZWQ7XHJcbiIsImltcG9ydCB7aGFzaCwga2V5fSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxudmFyIGJ0c19nZW5lc2lza2V5c19ibG9vbV91cmwgPSB1bmRlZmluZWQ7XG50cnkge1xuICAgIHZhciB1cmwgPSByZXF1aXJlKFwiZmlsZS1sb2FkZXI/bmFtZT1idHNfZ2VuZXNpc2tleXNfYmxvb21fW3NoYTE6aGFzaDpoZXg6N10uZGF0IWFzc2V0cy9idHNfZ2VuZXNpc2tleXNfYmxvb20uZGF0XCIpO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIjNjZWU0NDFcIikgPT09IC0xKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgaGFzaDogYnRzX2dlbmVzaXNrZXlzX2Jsb29tLmRhdFwiKTtcbiAgICBidHNfZ2VuZXNpc2tleXNfYmxvb21fdXJsID0gdXJsO1xufSBjYXRjaCAoZSkge1xuICAgIC8vIHdlYnBhY2sgZGVwbG95bWVudCBleGNlcHRpb24gKG5vdCBydW4gdGltZSlcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJXQVJOOiBXaWxsIGJlIHVuYWJsZSB0byBmaWx0ZXIgQlRTIDEuMCB3YWxsZXQgaW1wb3J0cywgZGlkIG5vdCBmaW5kIGFzc2V0cy9idHNfZ2VuZXNpc2tleXNfYmxvb20uZGF0XCIsXG4gICAgICAgIGVcbiAgICApO1xufVxuXG4vKipcbiAgICBUaGlzIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gYSBCVFMgMS4wIGV4cG9ydCBmaWxlIHRha2VuIG9uIHRoZVxuICAgIGRpc2NvbnRpbnVlZCBjaGFpbi4gQW55IHB1YmxpYyBrZXkgc3RyaW5nIG9yIGFkZHJlc3MgKGFsbCA1IGZvcm1hdHMpIGNhcnJpZWRcbiAgICBvdmVyIHRvIHRoZSBCVFMgMi4wIGdlbmVzaXMgYmxvY2sgd2lsbCBiZSBpbiB0aGlzIGZpbHRlci5cblxuICAgIFRoZWlyIG1heSBiZSBzb21lIGZhbHNlIHBvc2l0aXZlcyBidXQgbm8gZmFsc2UgbmVnYXRpdmVzLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVzaXNGaWx0ZXIge1xuICAgIC8qKiBvciBjYWxsIHRoaXMuaW5pdCAqL1xuICAgIGNvbnN0cnVjdG9yKGJsb29tX2J1ZmZlcikge1xuICAgICAgICBpZiAoIWJsb29tX2J1ZmZlcikgcmV0dXJuO1xuICAgICAgICB0aGlzLmJsb29tX2J1ZmZlciA9IGJsb29tX2J1ZmZlcjtcbiAgICAgICAgdGhpcy5iaXRzX2luX2ZpbHRlciA9IGJsb29tX2J1ZmZlci5sZW5ndGggKiA4OyAvLyA4Mzg4NjA4ICh0ZXN0IGRhdGEpXG4gICAgfVxuXG4gICAgLyoqIFdhcyBhIGJsb29tIGZpbGUgZGVwbG95ZWQ/ICBUaGlzIGRvZXMgbm90IHRyeSB0byBsb2FkIGl0IGZyb20gdGhlIHNlcnZlci4gKi9cbiAgICBpc0F2YWlsYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIGJ0c19nZW5lc2lza2V5c19ibG9vbV91cmwgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpbml0KGRvbmUpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxvb21fYnVmZmVyKSB7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzQXZhaWxhYmxlKCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lc2lzIGJsb29tIGZpbGUgd2FzIG5vdCBkZXBsb3llZFwiKTtcblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIC8vIGZpcmVmb3ggNDAgZGlkIG5vdCBhbGxvdyB0aGUgYmxvYiB1cmwgYnV0IGZmIDQxLjAuMiBkaWRcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDQwNCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudHMgPSBuZXcgQnVmZmVyKGV2dC50YXJnZXQucmVzdWx0LCBcImJpbmFyeVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudHMubGVuZ3RoICE9PSAxMDQ4NTc2KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBsZW5ndGhcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5iaXRzX2luX2ZpbHRlciA9IGNvbnRlbnRzLmxlbmd0aCAqIDg7IC8vIDgzODg2MDggKHRlc3QgZGF0YSlcbiAgICAgICAgICAgICAgICB0aGlzLmJsb29tX2J1ZmZlciA9IGNvbnRlbnRzO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInhoci5vbmVycm9yXCIsIGUpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBidHNfZ2VuZXNpc2tleXNfYmxvb21fdXJsKTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG5cbiAgICBpbkdlbmVzaXMocHVia2V5X29yX2FkZHJlc3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJsb29tX2J1ZmZlcikgdGhyb3cgbmV3IEVycm9yKFwiQ2FsbCBpbml0KCkgZmlyc3RcIik7XG4gICAgICAgIGZvciAodmFyIGhhc2hlcyA9IDA7IGhhc2hlcyA8IDM7IGhhc2hlcysrKSB7XG4gICAgICAgICAgICB2YXIgaGV4ID0gaGFzaC5zaGEyNTYoaGFzaGVzICsgXCI6XCIgKyBwdWJrZXlfb3JfYWRkcmVzcyk7XG4gICAgICAgICAgICB2YXIgYml0X2FkZHJlc3MgPVxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGhleC5zbGljZSgtMykudG9TdHJpbmcoXCJoZXhcIiksIDE2KSAlXG4gICAgICAgICAgICAgICAgdGhpcy5iaXRzX2luX2ZpbHRlcjsgLy8gMzA5MDU2NFxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcImJpdF9hZGRyZXNzXCIsIGJpdF9hZGRyZXNzLnRvU3RyaW5nKDE2KSlcbiAgICAgICAgICAgIHZhciBieXRlX2FkZHJlc3MgPSBiaXRfYWRkcmVzcyA+PiAzOyAvLyAzODYzMjBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJieXRlX2FkZHJlc3NcIiwgYnl0ZV9hZGRyZXNzLnRvU3RyaW5nKDE2KSlcbiAgICAgICAgICAgIHZhciBtYXNrID0gMSA8PCAoYml0X2FkZHJlc3MgJiA3KTsgLy8gMTZcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJtYXNrXCIsIG1hc2sudG9TdHJpbmcoMTYpKVxuICAgICAgICAgICAgdmFyIGJ5dGUgPSB0aGlzLmJsb29tX2J1ZmZlcltieXRlX2FkZHJlc3NdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcImJ5dGVcIiwgYnl0ZS50b1N0cmluZygxNikpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiYnl0ZSAmIG1hc2tcIiwgYnl0ZSAmIG1hc2ssIChieXRlICYgbWFzaykgPT09IDAsICdcXG4nKVxuICAgICAgICAgICAgaWYgKChieXRlICYgbWFzaykgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmaWx0ZXIoYWNjb3VudF9rZXlzLCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0FSTjogTWlzc2luZyBibG9vbSBmaWx0ZXIgZm9yIEJUUyAwLjkueCB3YWxsZXRzXCIpO1xuICAgICAgICAgICAgc3RhdHVzKHtlcnJvcjogXCJtaXNzaW5nX2Jsb29tXCJ9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5pdGFsaXppbmcgPSB0cnVlO1xuICAgICAgICBzdGF0dXMoe2luaXRhbGl6aW5nfSk7XG4gICAgICAgIHRoaXMuaW5pdCgoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGluaXRhbGl6aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdHVzKHtpbml0YWxpemluZ30pO1xuICAgICAgICAgICAgICAgIHZhciBydW5uaW5nX2NvdW50X3Byb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGFjY291bnRfa2V5cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlZF9jb3VudCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gYWNjb3VudF9rZXlzW2FdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWwgPSBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBrZXlzLmFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgayA+PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgay0tXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCAlIHJ1bm5pbmdfY291bnRfcHJvZ3Jlc3MgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX2NvdW50X3Byb2dyZXNzID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWU6IGtleXMuYWNjb3VudF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5cy5wdWJsaWNfa2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVuLXJlbGVhc2VkIGZvcm1hdCwganVzdCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7ZXJyb3I6IFwibWlzc2luZ19wdWJsaWNfa2V5c1wifSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRLZXkgPSBrZXlzLnB1YmxpY19rZXlzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC9eR1BILy50ZXN0KGN1cnJlbnRLZXkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRLZXkgPSBcIkdQSFwiICsgY3VycmVudEtleS5zdWJzdHJpbmcoMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkdlbmVzaXMoY3VycmVudEtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IGtleS5hZGRyZXNzZXMoY3VycmVudEtleSwgXCJHUEhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkeV9mb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhZGRyZXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbkdlbmVzaXMoYWRkcmVzc2VzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGR5X2ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHlfZm91bmQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5c1trXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBrZXlzLnB1YmxpY19rZXlzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZF9jb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPj0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGstLVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5cy5lbmNyeXB0ZWRfcHJpdmF0ZV9rZXlzW2tdKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZF9wcml2YXRlX2tleXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzLmVuY3J5cHRlZF9wcml2YXRlX2tleXNba11cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNfa2V5cy5wdXNoKGtleXMucHVibGljX2tleXNba10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGtleXMuZW5jcnlwdGVkX3ByaXZhdGVfa2V5cyA9IGVuY3J5cHRlZF9wcml2YXRlX2tleXM7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9uYW1lOiBrZXlzLmFjY291bnRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBjb3VudCAtIHJlbW92ZWRfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdWJsaWNfa2V5cyA9IHB1YmxpY19rZXlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGF0dXMoe3N1Y2Nlc3M6IHRydWV9KTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRhbGl6aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRhbGl6aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyh7aW5pdGFsaXppbmd9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBhbHQgZnJvbSBcImFsdC1pbnN0YW5jZVwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlLCBrZXl9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgQmFzZVN0b3JlIGZyb20gXCJzdG9yZXMvQmFzZVN0b3JlXCI7XHJcbmltcG9ydCBCcmFpbmtleUFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQnJhaW5rZXlBY3Rpb25zXCI7XHJcblxyXG4vKiogRWFjaCBpbnN0YW5jZSBzdXBwb3J0cyBhIHNpbmdsZSBicmFpbmtleS4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhaW5rZXlTdG9yZUZhY3Rvcnkge1xyXG4gICAgc3RhdGljIGluc3RhbmNlcyA9IG5ldyBNYXAoKTtcclxuICAgIC8qKiBUaGlzIG1heSBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMgZm9yIHRoZSBzYW1lIDxiPm5hbWU8L2I+LiAgV2hlbiBkb25lLFxyXG4gICAgICAgIChjb21wb25lbnRXaWxsVW5tb3VudCkgbWFrZSBzdXJlIHRvIGNhbGwgdGhpcy5jbG9zZUluc3RhbmNlKClcclxuICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UobmFtZSkge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5nZXQobmFtZSk7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IGFsdC5jcmVhdGVTdG9yZShCcmFpbmtleVN0b3JlSW1wbCwgXCJCcmFpbmtleVN0b3JlXCIpO1xyXG4gICAgICAgICAgICBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuc2V0KG5hbWUsIGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN1YnNjcmliZWRfaW5zdGFuY2Vfa2V5ID0gbmFtZSArIFwiIHN1YnNjcmliZWRfaW5zdGFuY2VcIjtcclxuICAgICAgICBpZiAoIUJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5nZXQoc3Vic2NyaWJlZF9pbnN0YW5jZV9rZXkpKSB7XHJcbiAgICAgICAgICAgIHZhciBzdWJzY3JpYmVkX2luc3RhbmNlID0gaW5zdGFuY2UuY2hhaW5TdG9yZVVwZGF0ZS5iaW5kKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUoc3Vic2NyaWJlZF9pbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5zZXQoXHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVkX2luc3RhbmNlX2tleSxcclxuICAgICAgICAgICAgICAgIHN1YnNjcmliZWRfaW5zdGFuY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNsb3NlSW5zdGFuY2UobmFtZSkge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IEJyYWlua2V5U3RvcmVGYWN0b3J5Lmluc3RhbmNlcy5nZXQobmFtZSk7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBpbnN0YW5jZSBcIiArIG5hbWUpO1xyXG4gICAgICAgIHZhciBzdWJzY3JpYmVkX2luc3RhbmNlX2tleSA9IG5hbWUgKyBcIiBzdWJzY3JpYmVkX2luc3RhbmNlXCI7XHJcbiAgICAgICAgdmFyIHN1YnNjcmliZWRfaW5zdGFuY2UgPSBCcmFpbmtleVN0b3JlRmFjdG9yeS5pbnN0YW5jZXMuZ2V0KFxyXG4gICAgICAgICAgICBzdWJzY3JpYmVkX2luc3RhbmNlX2tleVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgQnJhaW5rZXlTdG9yZUZhY3RvcnkuaW5zdGFuY2VzLmRlbGV0ZShzdWJzY3JpYmVkX2luc3RhbmNlX2tleSk7XHJcbiAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZShzdWJzY3JpYmVkX2luc3RhbmNlKTtcclxuICAgICAgICBpbnN0YW5jZS5jbGVhckNhY2hlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBEZXJpdmVkIGtleXMgbWF5IGJlIHVuYXNzaWduZWQgZnJvbSBhY2NvdW50cyB0aGVyZWZvcmUgd2UgbXVzdCBkZWZpbmUgYVxyXG4gICAgZml4ZWQgYmxvY2sgb2YgZGVyaXZpZWQga2V5cyB0aGVuIG1vbml0b3IgdGhlIGVudGlyZSBibG9jay5cclxuKi9cclxudmFyIERFUklWSUVEX0JSQUlOS0VZX1BPT0xfU0laRSA9IDEwO1xyXG5cclxuY2xhc3MgQnJhaW5rZXlTdG9yZUltcGwgZXh0ZW5kcyBCYXNlU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcclxuICAgICAgICB0aGlzLmJpbmRMaXN0ZW5lcnMoe1xyXG4gICAgICAgICAgICBvblNldEJyYWlua2V5OiBCcmFpbmtleUFjdGlvbnMuc2V0QnJhaW5rZXlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9leHBvcnQoXCJpblN5bmNcIiwgXCJjaGFpblN0b3JlVXBkYXRlXCIsIFwiY2xlYXJDYWNoZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGFpblN0b3JlVW5zdWJzY3JpYmUoKSB7XHJcbiAgICAvLyAgICAgdHJ5e1xyXG4gICAgLy8gICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMuY2hhaW5TdG9yZVVwZGF0ZSlcclxuICAgIC8vICAgICB9Y2F0Y2goZTEpIHtjb25zb2xlLmxvZyhcInVuc3ViIDEgZmFpbFwiKTtcclxuICAgIC8vICAgICAgICAgdHJ5e1xyXG4gICAgLy8gICAgICAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLmNoYWluU3RvcmVVcGRhdGUuYmluZCh0aGlzKSlcclxuICAgIC8vICAgICAgICAgfWNhdGNoKGUyKSB7Y29uc29sZS5sb2coXCJ1bnN1YiAxIGZhaWxcIil9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNsZWFyQ2FjaGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYnJua2V5OiBcIlwiLFxyXG4gICAgICAgICAgICBhY2NvdW50X2lkczogSW1tdXRhYmxlLlNldCgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlcml2ZWRfa2V5cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIC8vIENvbXBhcmVkIHdpdGggQ2hhaW5TdG9yZS5hY2NvdW50X2lkc19ieV9rZXlcclxuICAgICAgICB0aGlzLmFjY291bnRfaWRzX2J5X2tleSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFNhdmVzIHRoZSBicmFpbmtleSBhbmQgYmVnaW5zIHRoZSBsb29rdXAgZm9yIGRlcml2ZWQgYWNjb3VudCByZWZlcm5lY2VzICovXHJcbiAgICBvblNldEJyYWlua2V5KGJybmtleSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JybmtleX0pO1xyXG4gICAgICAgIHRoaXMuZGVyaXZlS2V5cyhicm5rZXkpO1xyXG4gICAgICAgIHRoaXMuY2hhaW5TdG9yZVVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAcmV0dXJuIDxiPnRydWU8L2I+IHdoZW4gYWxsIGRlcml2aWVkIGFjY291bnQgcmVmZXJlbmNlcyBhcmUgZWl0aGVyXHJcbiAgICAgICAgZm91bmQgb3Iga25vd24gbm90IHRvIGV4aXN0LlxyXG4gICAgKi9cclxuICAgIGluU3luYygpIHtcclxuICAgICAgICB0aGlzLmRlcml2ZWRfa2V5cy5mb3JFYWNoKGRlcml2ZWRfa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzUGVuZGluZ0Zyb21DaGFpbihkZXJpdmVkX2tleSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFpblN0b3JlVXBkYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5kZXJpdmVkX2tleXMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjb3VudF9pZHNfYnlfa2V5ID09PSBDaGFpblN0b3JlLmFjY291bnRfaWRzX2J5X2tleSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYWNjb3VudF9pZHNfYnlfa2V5ID0gQ2hhaW5TdG9yZS5hY2NvdW50X2lkc19ieV9rZXk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY2NvdW50SWRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVyaXZlS2V5cyhicm5rZXkgPSB0aGlzLnN0YXRlLmJybmtleSkge1xyXG4gICAgICAgIHZhciBzZXF1ZW5jZSA9IHRoaXMuZGVyaXZlZF9rZXlzLmxlbmd0aDsgLy8gbmV4dCBzZXF1ZW5jZSAoc3RhcnRpbmcgd2l0aCAwKVxyXG4gICAgICAgIHZhciBwcml2YXRlX2tleSA9IGtleS5nZXRfYnJhaW5Qcml2YXRlS2V5KGJybmtleSwgc2VxdWVuY2UpO1xyXG4gICAgICAgIHZhciBkZXJpdmVkX2tleSA9IGRlcml2ZWRLZXlTdHJ1Y3QocHJpdmF0ZV9rZXkpO1xyXG4gICAgICAgIHRoaXMuZGVyaXZlZF9rZXlzLnB1c2goZGVyaXZlZF9rZXkpO1xyXG4gICAgICAgIGlmICh0aGlzLmRlcml2ZWRfa2V5cy5sZW5ndGggPCBERVJJVklFRF9CUkFJTktFWV9QT09MX1NJWkUpXHJcbiAgICAgICAgICAgIHRoaXMuZGVyaXZlS2V5cyhicm5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFjY291bnRJZHMoKSB7XHJcbiAgICAgICAgdmFyIG5ld19hY2NvdW50X2lkcyA9IEltbXV0YWJsZS5TZXQoKS53aXRoTXV0YXRpb25zKG5ld19pZHMgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdXBkYXRlUHVia2V5ID0gcHVibGljX3N0cmluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hhaW5fYWNjb3VudF9pZHMgPSBDaGFpblN0b3JlLmdldEFjY291bnRSZWZzT2ZLZXkoXHJcbiAgICAgICAgICAgICAgICAgICAgcHVibGljX3N0cmluZ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFpbl9hY2NvdW50X2lkcylcclxuICAgICAgICAgICAgICAgICAgICBjaGFpbl9hY2NvdW50X2lkcy5mb3JFYWNoKGNoYWluX2FjY291bnRfaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdfaWRzLmFkZChjaGFpbl9hY2NvdW50X2lkKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5kZXJpdmVkX2tleXMuZm9yRWFjaChkZXJpdmVkX2tleSA9PlxyXG4gICAgICAgICAgICAgICAgdXBkYXRlUHVia2V5KGRlcml2ZWRfa2V5LnB1YmxpY19zdHJpbmcpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFuZXdfYWNjb3VudF9pZHMuZXF1YWxzKHRoaXMuc3RhdGUuYWNjb3VudF9pZHMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWNjb3VudF9pZHMgPSBuZXdfYWNjb3VudF9pZHM7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjY291bnRfaWRzOiBuZXdfYWNjb3VudF9pZHN9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlcml2ZWRLZXlTdHJ1Y3QocHJpdmF0ZV9rZXkpIHtcclxuICAgIHZhciBwdWJsaWNfc3RyaW5nID0gcHJpdmF0ZV9rZXkudG9QdWJsaWNLZXkoKS50b1B1YmxpY0tleVN0cmluZygpO1xyXG4gICAgdmFyIGRlcml2ZWRfa2V5ID0ge3ByaXZhdGVfa2V5LCBwdWJsaWNfc3RyaW5nfTtcclxuICAgIHJldHVybiBkZXJpdmVkX2tleTtcclxufVxyXG5cclxudmFyIGlzUGVuZGluZ0Zyb21DaGFpbiA9IGRlcml2ZWRfa2V5ID0+XHJcbiAgICBDaGFpblN0b3JlLmdldEFjY291bnRSZWZzT2ZLZXkoZGVyaXZlZF9rZXkucHVibGljX3N0cmluZykgPT09IHVuZGVmaW5lZDtcclxuIiwiaW1wb3J0IGFsdCBmcm9tIFwiYWx0LWluc3RhbmNlXCI7XHJcbmltcG9ydCBCYXNlU3RvcmUgZnJvbSBcInN0b3Jlcy9CYXNlU3RvcmVcIjtcclxuXHJcbmNsYXNzIEltcG9ydEtleXNTdG9yZSBleHRlbmRzIEJhc2VTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUoKTtcclxuICAgICAgICB0aGlzLl9leHBvcnQoXCJpbXBvcnRpbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4ge2ltcG9ydGluZzogZmFsc2V9O1xyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydGluZyhpbXBvcnRpbmcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbXBvcnRpbmd9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBJbXBvcnRLZXlzU3RvcmVXcmFwcGVkID0gYWx0LmNyZWF0ZVN0b3JlKFxyXG4gICAgSW1wb3J0S2V5c1N0b3JlLFxyXG4gICAgXCJJbXBvcnRLZXlzU3RvcmVcIlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRLZXlzU3RvcmVXcmFwcGVkO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYnRzX2dlbmVzaXNrZXlzX2Jsb29tXzNjZWU0NDEuZGF0XCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9