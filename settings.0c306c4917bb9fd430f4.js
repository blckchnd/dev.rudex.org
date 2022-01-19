"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[17],{

/***/ 3049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2272);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2048);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2074);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(578);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2075);
/* harmony import */ var _Utility_LimitToWithdraw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3050);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(631);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2059);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2400);
/* provided dependency */ var Buffer = __webpack_require__(432)["Buffer"];
















class DirectDebitClaimModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState(props);
  }

  getInitialState() {
    return {
      to_name: "",
      from_account: null,
      from_account_balance: null,
      to_account: null,
      amount: "",
      asset_id: null,
      asset: null,
      memo: "",
      error: null,
      feeAsset: null,
      // will be filled by FeeAssetSelector
      maxAmount: false,
      permissionId: "",
      firstPeriodError: false,
      payerBalanceWarning: false,
      withdrawal_limit: this.props.operation.payload.withdrawal_limit,
      current_period_expires: "",
      claimedAmount: "",
      errorMessage: null
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const {
      from_account,
      to_account,
      feeAsset,
      permissionId,
      amount,
      asset,
      asset_id,
      memo
    } = this.state;
    _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_11__["default"].claimWithdrawPermission(permissionId, from_account, to_account, asset_id, common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].convert_typed_to_satoshi(amount, asset), memo ? new Buffer(memo, "utf-8") : memo, feeAsset.asset_id).then(result => {
      this.props.hideModal();
    }).catch(err => {
      this.setState({
        errorMessage: err
      });
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const {
      operation,
      isModalVisible
    } = this.props;

    if (isModalVisible && operation && prevState.permissionId !== operation.payload.id) {
      const timeStart = new Date(operation.payload.period_start_time + "Z").getTime();
      const timePassed = new Date().getTime() - timeStart;
      let currentPeriodNum;
      let currentPeriodExpires = "";
      const periodMs = operation.payload.withdrawal_period_sec * 1000;

      if (timePassed < 0) {
        console.log("first period is not started");
      } else {
        currentPeriodNum = Math.ceil(timePassed / periodMs);
        currentPeriodExpires = timeStart + periodMs * currentPeriodNum;
      }

      const to = await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.FetchChain)("getAccount", operation.payload.authorized_account);
      const from = await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.FetchChain)("getAccount", operation.payload.withdraw_from_account);
      const asset = await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.FetchChain)("getAsset", operation.payload.withdrawal_limit.asset_id);
      const from_account_balance = await this._checkBalance(from, operation.payload.withdrawal_limit);
      this.setState({
        to_account: to,
        from_account: from,
        permissionId: operation.payload.id,
        withdrawal_limit: operation.payload.withdrawal_limit,
        claimedAmount: operation.payload.claimed_this_period,
        current_period_expires_date: currentPeriodExpires,
        asset: asset,
        from_account_balance
      });
    }
  }

  setTotalLimit = limit => () => {
    const {
      asset,
      claimedAmount
    } = this.state;
    let amount = common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].get_asset_amount(limit - claimedAmount, asset);
    this.setState({
      maxAmount: true,
      amount
    });
  };
  onAmountChanged = ({
    amount,
    asset
  }) => {
    if (!asset) {
      return;
    }

    this.setState({
      amount,
      asset,
      asset_id: asset.get("id"),
      error: null,
      maxAmount: false
    });
  };

  onFeeChanged(asset) {
    this.setState({
      feeAsset: asset
    });
  }

  onMemoChanged(e) {
    this.setState({
      memo: e.target.value
    });
  }

  async _checkBalance(from_account = null, withdrawal_limit = null) {
    let setState = false;

    if (from_account == null) {
      from_account = this.state.from_account;
      setState = true;
    }

    if (withdrawal_limit == null) {
      withdrawal_limit = this.state.withdrawal_limit;
      setState = true;
    }

    const balanceID = from_account.getIn(["balances", withdrawal_limit.asset_id]);
    let from_account_balance = 0;

    if (!!balanceID) {
      from_account_balance = (await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.FetchChain)("getObject", balanceID)).get("balance");
    }

    if (setState) {
      this.setState({
        from_account_balance
      });
    }

    return from_account_balance;
  }

  render() {
    let {
      from_account,
      from_account_balance,
      to_account,
      asset,
      amount,
      memo,
      payerBalanceWarning,
      withdrawal_limit,
      current_period_expires_date
    } = this.state;
    let enteredMoreThanAvailable = false;
    let balanceError = false;
    let maximumToClaim = 0;

    if (withdrawal_limit) {
      maximumToClaim = from_account_balance !== null ? Math.min(from_account_balance, withdrawal_limit.amount) : withdrawal_limit.amount;
      if (asset && amount) enteredMoreThanAvailable = common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].convert_typed_to_satoshi(amount, asset) > maximumToClaim;

      if (from_account_balance !== null && from_account_balance < withdrawal_limit.amount) {
        balanceError = true;
      }
    }

    let balance = null; // balance

    if (from_account && from_account.get("balances")) {
      balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "span",
        content: "showcases.direct_debit.limit"
      }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: enteredMoreThanAvailable ? "has-error" : "",
        style: {
          borderBottom: "#A09F9F 1px dotted",
          cursor: "pointer"
        },
        onClick: this.setTotalLimit(maximumToClaim)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LimitToWithdraw__WEBPACK_IMPORTED_MODULE_7__["default"], {
        amount: maximumToClaim,
        assetId: withdrawal_limit && withdrawal_limit.asset_id
      })), "\xA0", balanceError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Tooltip, {
        placement: "topRight",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__["default"], {
          string: "showcases.direct_debit.payer_balance_not_sufficient",
          keys: [{
            type: "amount",
            value: withdrawal_limit,
            arg: "limit"
          }]
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Icon, {
        type: "exclamation-circle",
        theme: "filled",
        style: {
          color: "#fe8c00"
        }
      })));
    }

    const amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
    const isAmountValid = amountValue && !(0,lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_14__["default"])(amountValue);
    const isSubmitNotValid = !from_account || !to_account || !isAmountValid || !asset || balanceError || enteredMoreThanAvailable || payerBalanceWarning || !current_period_expires_date || from_account.get("id") == to_account.get("id");

    if (false) {}

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Modal, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("showcases.direct_debit.claim_funds"),
      visible: this.props.isModalVisible,
      overlay: true,
      onCancel: this.props.hideModal,
      footer: [this.state.errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "red",
        style: {
          marginRight: "10px"
        }
      }, this.state.errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
        key: "send",
        disabled: isSubmitNotValid,
        onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
      }, counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("showcases.direct_debit.claim")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
        key: "Cancel",
        onClick: this.props.hideModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "span",
        content: "transfer.cancel"
      }))]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Form, {
      className: "full-width",
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: "showcases.direct_debit.authorizing_account",
      accountName: !!to_account ? to_account.get("name") : "",
      account: to_account,
      size: 60,
      hideImage: true,
      disabled: true,
      noForm: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Form.Item, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("showcases.direct_debit.current_period_expires")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Input, {
      type: "text",
      value: current_period_expires_date ? counterpart__WEBPACK_IMPORTED_MODULE_9___default().localize(new Date(current_period_expires_date), {
        type: "date",
        format: "full"
      }) : counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("showcases.direct_debit.first_period_not_started"),
      disabled: true,
      className: current_period_expires_date ? "" : "error-area"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "showcases.direct_debit.amount_to_withdraw",
      amount: amount,
      onChange: this.onAmountChanged,
      asset: withdrawal_limit && withdrawal_limit.asset_id,
      assets: withdrawal_limit && [withdrawal_limit.asset_id],
      display_balance: balance,
      allowNaN: true
    }), memo && memo.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "right-label"
    }, memo.length) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Form.Item, {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Tooltip, {
        placement: "top",
        title: counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("tooltip.memo_tip")
      }, counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("transfer.memo"))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Input.TextArea, {
      style: {
        marginBottom: 0
      },
      rows: "3",
      value: memo,
      onChange: this.onMemoChanged.bind(this)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_12__["default"], {
      account: to_account,
      transaction: {
        type: "withdraw_permission_claim",
        options: ["price_per_kbyte"],
        data: {
          type: "memo",
          content: memo
        }
      },
      onChange: this.onFeeChanged.bind(this)
    }))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectDebitClaimModal);

/***/ }),

/***/ 3047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2272);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2796);
/* harmony import */ var _Utility_PeriodSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3048);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2059);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(578);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2075);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2080);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(626);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(625);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2081);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1804);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(645);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1031);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(631);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(912);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);






















class DirectDebitModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState(props);
    this.onTrxIncluded = this.onTrxIncluded.bind(this);
    this._checkBalance = this._checkBalance.bind(this);
    this._isMounted = false;
  }

  getInitialState() {
    return {
      to_name: "",
      from_account: null,
      to_account: null,
      amount: "",
      asset_id: null,
      asset: null,
      error: null,
      fee_asset_id: bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.assets_by_symbol.get(this.props.fee_asset_symbol) || "1.3.0",
      feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
        amount: 0
      }),
      feeStatus: {},
      maxAmount: false,
      num_of_periods: "",
      period: {
        amount: "",
        type: {
          seconds: 604800,
          name: "Week"
        }
      },
      period_start_time: moment__WEBPACK_IMPORTED_MODULE_18___default()().add("seconds", 120),
      permissionId: "",
      balanceError: false
    };
  }

  onSubmit = e => {
    e.preventDefault();
    let {
      from_account,
      to_account,
      amount,
      asset,
      asset_id,
      fee_asset_id,
      period,
      num_of_periods,
      period_start_time,
      permissionId
    } = this.state;
    const {
      operation: {
        type: operationType
      }
    } = this.props;

    if (operationType === "create") {
      _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_17__["default"].createWithdrawPermission(from_account, to_account, asset_id, common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].convert_typed_to_satoshi(amount, asset), period.type.seconds * Number(period.amount), num_of_periods, period_start_time.valueOf(), fee_asset_id).then(result => {
        this.props.hideModal();
      }).catch(err => {
        // todo: visualize error somewhere
        console.error(err);
      });
    } else if (operationType === "update") {
      _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_17__["default"].updateWithdrawPermission(permissionId, from_account, to_account, asset_id, common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].convert_typed_to_satoshi(amount, asset), period.type.seconds * Number(period.amount), num_of_periods, period_start_time.valueOf(), fee_asset_id).then(result => {
        this.props.hideModal();
      }).catch(err => {
        // todo: visualize error somewhere
        console.error(err);
      });
    }
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      operation,
      currentAccount
    } = this.props;

    if (currentAccount !== prevProps.currentAccount || this.state.from_account == null) {
      this.setState({
        from_account: bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAccount(currentAccount)
      });
    } // Update operation


    if (operation && operation.type === "update" && operation.payload.id !== prevState.permissionId) {
      const toAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAccount(operation.payload.authorized_account);

      if (toAccount && toAccount.get) {
        const timeStart = moment__WEBPACK_IMPORTED_MODULE_18___default().utc(operation.payload.period_start_time).valueOf();
        const timeEnd = moment__WEBPACK_IMPORTED_MODULE_18___default().utc(operation.payload.expiration).valueOf();
        const numberOfPeriods = (timeEnd - timeStart) / (operation.payload.withdrawal_period_sec * 1000);
        const periodTypes = [{
          seconds: 604800,
          name: "Week"
        }, {
          seconds: 86400,
          name: "Day"
        }, {
          seconds: 3600,
          name: "Hour"
        }, {
          seconds: 60,
          name: "Minute"
        }];
        let periodSecs, periodName, periodAmount;

        for (let i = 0; i < periodTypes.length; i++) {
          if (operation.payload.withdrawal_period_sec >= periodTypes[i].seconds) {
            let currentPeriod = periodTypes[i];
            periodName = currentPeriod.name;
            periodSecs = currentPeriod.seconds;
            periodAmount = Math.round(operation.payload.withdrawal_period_sec / currentPeriod.seconds);
            break;
          }
        }

        let asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(operation.payload.withdrawal_limit.asset_id);
        this.setState({
          to_account: toAccount,
          to_name: toAccount.get("name"),
          asset: asset,
          permissionId: operation.payload.id,
          amount: common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].convert_satoshi_to_typed(operation.payload.withdrawal_limit.amount, asset),
          asset_id: operation.payload.withdrawal_limit.asset_id,
          num_of_periods: numberOfPeriods,
          period: {
            amount: periodAmount,
            type: {
              seconds: periodSecs,
              name: periodName
            }
          },
          period_start_time: moment__WEBPACK_IMPORTED_MODULE_18___default().utc(operation.payload.period_start_time)
        });
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _checkBalance() {
    const {
      feeAmount,
      amount,
      from_account,
      asset
    } = this.state;
    if (!asset || !from_account) return;
    const balanceID = from_account.getIn(["balances", asset.get("id")]);
    const feeBalanceID = from_account.getIn(["balances", feeAmount.asset_id]);
    if (!asset || !from_account) return;
    if (!balanceID) return this.setState({
      balanceError: true
    });
    let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(balanceID);
    let feeBalanceObject = feeBalanceID ? bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(feeBalanceID) : null;

    if (!feeBalanceObject || feeBalanceObject.get("balance") === 0) {
      this.setState({
        fee_asset_id: this.state.fee_asset_id
      });
    }

    if (!balanceObject || !feeAmount) return;
    if (!amount) return this.setState({
      balanceError: false
    });
    const hasBalance = (0,common_trxHelper__WEBPACK_IMPORTED_MODULE_10__.checkBalance)(amount, asset, feeAmount, balanceObject);
    if (hasBalance === null) return;
    this.setState({
      balanceError: !hasBalance
    });
  }

  _setTotal(asset_id, balance_id) {
    const {
      feeAmount
    } = this.state;
    let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(balance_id);
    let transferAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(asset_id);
    let balance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
      amount: balanceObject.get("balance"),
      asset_id: transferAsset.get("id"),
      precision: transferAsset.get("precision")
    });

    if (balanceObject) {
      if (feeAmount.asset_id === balance.asset_id) {
        balance.minus(feeAmount);
      }

      this.setState({
        maxAmount: true,
        amount: balance.getAmount({
          real: true
        })
      }, this._checkBalance);
    }
  }

  _getAvailableAssets(state = this.state) {
    const {
      from_account
    } = state;
    let asset_types = [],
        fee_asset_types = [];

    if (!(from_account && from_account.get("balances"))) {
      return {
        asset_types,
        fee_asset_types
      };
    }

    let account_balances = state.from_account.get("balances").toJS();
    asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].sortID);
    fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].sortID);

    for (let key in account_balances) {
      let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(account_balances[key]);

      if (balanceObject && balanceObject.get("balance") === 0) {
        asset_types.splice(asset_types.indexOf(key), 1);

        if (fee_asset_types.indexOf(key) !== -1) {
          fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
        }
      }
    }

    return {
      asset_types,
      fee_asset_types
    };
  }

  onToAccountChanged = to_account => {
    this.setState({
      to_account,
      error: null
    });
  };
  onAmountChanged = ({
    amount,
    asset
  }) => {
    if (!asset) {
      return;
    }

    this.setState({
      amount,
      asset,
      asset_id: asset.get("id"),
      error: null,
      maxAmount: false
    }, this._checkBalance);
  };
  toChanged = to_name => {
    this.setState({
      to_name,
      error: null
    });
  };

  onFeeChanged(asset) {
    this.setState({
      fee_asset_id: asset.asset_id,
      error: null
    });
  }

  onTrxIncluded(confirm_store_state) {
    if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__["default"].unlisten(this.onTrxIncluded);
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__["default"].reset();
    } else if (confirm_store_state.closed) {
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__["default"].unlisten(this.onTrxIncluded);
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__["default"].reset();
    }
  }

  onNumOfPeriodsChanged = e => {
    let newValue = parseInt(e.target.value, 10);

    if (!(0,lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_19__["default"])(newValue) && typeof newValue === "number" && newValue >= 0) {
      this.setState({
        num_of_periods: newValue
      });
    }
  };
  onPeriodChanged = ({
    amount,
    type
  }) => {
    this.setState({
      period: {
        amount,
        type
      }
    });
  };

  onDatepickerRef(el) {
    if (el && el.picker.input) {
      el.picker.input.readOnly = false;
    }
  }

  onStartDateChanged = utcValue => {
    if (utcValue) {
      this.setState({
        period_start_time: utcValue
      });
    } else {
      this.setState({
        period_start_time: null
      });
    }
  };

  render() {
    let {
      from_account,
      to_account,
      asset,
      asset_id,
      amount,
      to_name,
      fee_asset_id,
      balanceError,
      num_of_periods,
      period,
      period_start_time
    } = this.state;
    const {
      operation
    } = this.props;

    let {
      asset_types
    } = this._getAvailableAssets();

    let balance = null; // Estimate fee

    let fee = this.state.feeAmount.getAmount({
      real: true
    });

    if (from_account && from_account.get("balances")) {
      let account_balances = from_account.get("balances").toJS();

      let _error = this.state.balanceError ? "has-error" : "";

      if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(asset_types[0]);

      if (asset_types.length > 0) {
        let current_asset_id = asset ? asset.get("id") : asset_types[0];
        let feeID = fee_asset_id;
        balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          component: "span",
          content: "transfer.available"
        }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: _error,
          style: {
            borderBottom: "#A09F9F 1px dotted",
            cursor: "pointer"
          },
          onClick: this._setTotal.bind(this, current_asset_id, account_balances[current_asset_id], fee, feeID)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
          balance: account_balances[current_asset_id]
        })));

        if (feeID == current_asset_id && this.state.balanceError) {
          balance_fee = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: _error
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
            content: "transfer.errors.insufficient"
          })));
        }
      } else {
        balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: _error
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "transfer.errors.noFunds"
        })));
        balance_fee = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: _error
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "transfer.errors.noFunds"
        })));
      }
    }

    const amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
    const isAmountValid = amountValue && !(0,lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_19__["default"])(amountValue);
    const isSubmitNotValid = !from_account || !to_account || !isAmountValid || !asset || balanceError || from_account.get("id") == to_account.get("id") || !period.amount || !num_of_periods || !period_start_time;

    if (false) {}

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Modal, {
      title: operation && operation.type === "create" ? counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.create_new_mandate") : counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.update_mandate"),
      visible: this.props.isModalVisible,
      overlay: true,
      onCancel: this.props.hideModal,
      footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
        key: "send",
        disabled: isSubmitNotValid,
        onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
      }, operation && operation.type === "create" ? counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.create") : counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.update")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
        key: "Cancel",
        onClick: this.props.hideModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "span",
        content: "transfer.cancel"
      }))]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Form, {
      className: "full-width",
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.tooltip.authorized_account"),
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: "showcases.direct_debit.authorized_account",
      accountName: to_name,
      account: to_account,
      onChange: this.toChanged.bind(this),
      onAccountChanged: this.onToAccountChanged,
      size: 60,
      typeahead: true,
      hideImage: true
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.tooltip.limit_per_period"),
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block transfer-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "showcases.direct_debit.limit_per_period",
      amount: amount,
      onChange: this.onAmountChanged,
      asset: asset_types.length > 0 && asset ? asset.get("id") : asset_id ? asset_id : asset_types[0],
      assets: asset_types,
      display_balance: balance,
      allowNaN: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.tooltip.period"),
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block transfer-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_PeriodSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "showcases.direct_debit.period",
      inputValue: period.amount,
      entries: ["Minute", "Hour", "Day", "Week"],
      values: {
        Minute: {
          seconds: 60,
          name: "Minute"
        },
        Hour: {
          seconds: 60 * 60,
          name: "Hour"
        },
        Day: {
          seconds: 60 * 60 * 24,
          name: "Day"
        },
        Week: {
          seconds: 60 * 60 * 24 * 7,
          name: "Week"
        }
      },
      periodType: period.type,
      onChange: this.onPeriodChanged
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.tooltip.num_of_periods"),
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block transfer-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.num_of_periods")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "number",
      value: num_of_periods,
      onChange: this.onNumOfPeriodsChanged
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block transfer-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.start_date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_13___default().translate("showcases.direct_debit.tooltip.start_time"),
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_20__["default"], {
      value: period_start_time,
      showToday: false,
      showTime: true,
      placeholder: "",
      onChange: this.onStartDateChanged,
      className: "date-picker-width100",
      style: {
        width: "100%"
      },
      ref: el => this.onDatepickerRef(el),
      disabledDate: current => current && current < moment__WEBPACK_IMPORTED_MODULE_18___default()().add(2, "minutes")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block transfer-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "no-margin no-padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
      account: from_account,
      transaction: {
        type: operation && operation.type === "update" ? "withdraw_permission_update" : "withdraw_permission_create",
        options: ["price_per_kbyte"],
        data: {
          type: "memo",
          content: null
        }
      },
      onChange: this.onFeeChanged.bind(this)
    }))))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_14__.connect)(DirectDebitModal, {
  listenTo() {
    return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_15__["default"]];
  },

  getProps() {
    return {
      currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().currentAccount,
      passwordAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().passwordAccount,
      fee_asset_symbol: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_15__["default"].getState().settings.get("fee_asset")
    };
  }

}));

/***/ }),

/***/ 3043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2272);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2048);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2075);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(578);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2080);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(626);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(625);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2081);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2276);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1804);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(645);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(912);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var actions_HtlcActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3044);
/* harmony import */ var _assets_stylesheets_components_htlc_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3045);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1926);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2615);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2059);


























const getUninitializedFeeAmount = () => new common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__.Asset({
  amount: 0,
  asset_id: "1.3.0"
});

class Preimage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    preimage_hash: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().string),
    preimage_size: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().number),
    preimage: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().string),
    preimage_cipher: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().string)
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.hasRandomHash = false;
  }

  getInitialState() {
    return {
      stage: 1,
      preimage_hash_calculated: null,
      ciphers: ["sha256", "ripemd160"]
    };
  }

  componentDidMount() {
    if (!this.props.preimage_hash && !this.hasRandomHash) {
      // make sure there is always a hash if no hash given
      this.generateRandom({
        target: {}
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.preimage_hash !== this.props.preimage_hash && !this.props.preimage_hash) {
      this.hasRandomHash = false;
    }

    if (!this.props.preimage_hash && !this.hasRandomHash) {
      // make sure there is always a hash if no hash given
      this.generateRandom({
        target: {}
      });
    }
  }

  onClick(e) {
    let redo = false;

    if (this.state.stage !== e.target.value && e.target.value == 1) {
      redo = true;
    }

    this.setState({
      stage: e.target.value
    }, () => redo ? this.generateRandom() : null);
  }

  onSizeChanged(e) {
    this.props.onAction({
      preimage_size: !e.target.value ? null : parseInt(e.target.value)
    });
  }

  onHashChanged(e) {
    this.props.onAction({
      preimage_hash: e.target.value
    });
  }

  onInputChanged(e) {
    let {
      preimage,
      preimage_cipher
    } = this.props;

    if (!preimage_cipher) {
      preimage_cipher = "sha256";
    }

    if (e.target) {
      preimage = e.target.value;
      this.hashingInProgress = false;
    } else {
      preimage_cipher = e;
    }

    if (this.state.stage == 2) {
      this.props.onAction({
        preimage_cipher: preimage_cipher
      });
    } else {
      const {
        hash
      } = actions_HtlcActions__WEBPACK_IMPORTED_MODULE_18__["default"].calculateHash(preimage, preimage_cipher);

      if (this.props.type !== "create") {
        // user tries to match hash
        this.props.onAction({
          preimage,
          preimage_cipher: preimage_cipher,
          preimage_size: preimage.length
        });
        this.setState({
          preimage_hash_calculated: hash
        });
      } else {
        this.props.onAction({
          preimage,
          preimage_cipher: preimage_cipher,
          preimage_hash: hash,
          preimage_size: preimage.length
        });
      }
    }
  }

  generateRandom(e = {
    target: {}
  }) {
    this.hasRandomHash = true;
    e.target.value = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.key.get_random_key().toWif().substr(10, 30);
    this.onInputChanged(e);
  }

  render() {
    let label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate(this.props.label), this.props.type == "create" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Radio.Group, {
      value: this.state.stage,
      onChange: this.onClick.bind(this),
      style: {
        marginBottom: "7px",
        marginLeft: "24px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Radio, {
      value: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "showcases.htlc.first_stage"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Radio, {
      value: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "showcases.htlc.second_stage"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Radio, {
      value: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "showcases.htlc.custom"
    })))); // if user redeems, indicate if it matches

    let hashMatch = this.props.type !== "create" && this.state.preimage_hash_calculated !== null ? this.state.preimage_hash_calculated == this.props.preimage_hash : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Form.Item, {
      label: label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.preimage_has_been_created")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Input.Group, {
      className: "content-block transfer-input preimage-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate(this.props.type !== "create" ? "showcases.htlc.tooltip.enter_preimage" : "showcases.htlc.tooltip.preimage_random"),
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Input, {
      style: {
        width: "60%",
        color: hashMatch == null ? undefined : hashMatch ? "green" : "red"
      },
      name: "preimage",
      id: "preimage",
      type: "text",
      onChange: this.onInputChanged.bind(this),
      value: this.state.stage == 2 ? "" : this.props.preimage,
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate(this.props.hash ? "showcases.htlc.enter_secret_preimage" : "showcases.htlc.preimage"),
      disabled: this.props.type !== "create" ? false : this.state.stage == 1 || this.state.stage == 2
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Select, {
      optionLabelProp: "value",
      style: {
        width: "19.5%"
      },
      onChange: this.onInputChanged.bind(this),
      value: this.props.preimage_cipher
    }, this.state.ciphers.map(cipher => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Select.Option, {
      key: cipher,
      value: cipher
    }, cipher))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.tooltip.new_random"),
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
      type: "primary",
      icon: "deployment-unit",
      style: {
        verticalAlign: "top"
      },
      onClick: this.generateRandom.bind(this)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        float: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
      dataPlace: "top",
      text: "preimage: " + this.props.preimage + " hash type: " + this.props.preimage_cipher
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Input.Group, {
      className: "content-block transfer-input preimage-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.tooltip.preimage_hash"),
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Input, {
      style: {
        width: "78%"
      },
      name: "hash",
      id: "hash",
      type: "text",
      onChange: this.onHashChanged.bind(this),
      value: this.props.preimage_hash || "",
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.hash"),
      disabled: this.state.stage == 1
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.tooltip.preimage_size"),
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Input, {
      style: {
        width: "53px",
        marginRight: "0.2rem"
      },
      name: "size",
      id: "size",
      type: "text",
      onChange: this.onSizeChanged.bind(this),
      value: this.props.preimage_size || "",
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.size"),
      disabled: this.state.stage == 1
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        float: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
      dataPlace: "top",
      text: "hash: " + this.props.preimage_hash + " preimage size: " + this.props.preimage_size
    }))));
  }

}

class HtlcModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    isModalVisible: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().bool.isRequired),
    hideModal: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().func.isRequired),
    fromAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_20__["default"].ChainObject.isRequired,
    operation: (prop_types__WEBPACK_IMPORTED_MODULE_23___default().object) // optional, only when editing

  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState(props);
    this.onTrxIncluded = this.onTrxIncluded.bind(this);
    this._checkBalance = this._checkBalance.bind(this);
  }

  getInitialState() {
    const now = moment__WEBPACK_IMPORTED_MODULE_17___default()().add("seconds", 120);
    return {
      from_name: "",
      to_name: "",
      from_account: null,
      to_account: null,
      amount: "",
      asset_id: null,
      asset: null,
      error: null,
      feeAmount: getUninitializedFeeAmount(),
      maxAmount: false,
      num_of_periods: "",
      period_start_time: now,
      htlcId: "",
      balanceError: false,
      preimage: null,
      preimage_cipher: null,
      preimage_hash: null,
      preimage_size: null,
      claim_period: 86400,
      period: "one_day",
      expirationDate: moment__WEBPACK_IMPORTED_MODULE_17___default()().add("seconds", 180).add(1, "day")
    };
  }

  onSubmit = e => {
    e.preventDefault();
    let {
      from_account,
      to_account,
      amount,
      asset,
      asset_id,
      preimage,
      preimage_size,
      preimage_hash,
      preimage_cipher,
      claim_period,
      feeAmount
    } = this.state;
    const {
      operation: {
        type: operationType
      }
    } = this.props;

    if (operationType === "create") {
      actions_HtlcActions__WEBPACK_IMPORTED_MODULE_18__["default"].create({
        from_account_id: from_account.get("id"),
        to_account_id: to_account.get("id"),
        asset_id,
        amount: common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].convert_typed_to_satoshi(amount, asset),
        lock_time: claim_period,
        preimage,
        preimage_size,
        preimage_hash,
        preimage_cipher,
        fee_asset: feeAmount.asset_id
      }).then(result => {
        this.props.hideModal();
      }).catch(err => {
        // todo: visualize error somewhere
        console.error(err);
      });
    } else if (operationType === "redeem") {
      actions_HtlcActions__WEBPACK_IMPORTED_MODULE_18__["default"].redeem({
        htlc_id: this.props.operation.payload.id,
        user_id: to_account.get("id"),
        preimage: preimage
      }).then(result => {
        this.props.hideModal();
      }).catch(err => {
        // todo: visualize error somewhere
        console.error(err);
      });
    } else if (operationType === "extend") {
      actions_HtlcActions__WEBPACK_IMPORTED_MODULE_18__["default"].extend({
        htlc_id: this.props.operation.payload.id,
        user_id: from_account.get("id"),
        seconds_to_add: claim_period
      }).then(result => {
        this.props.hideModal();
      }).catch(err => {
        // todo: visualize error somewhere
        console.error(err);
      });
    }

    this.props.hideModal();
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.fromAccount && !(0,_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_21__.hasLoaded)(nextProps.fromAccount)) {
      return false;
    }

    return true;
  }

  _syncOperation(operation) {
    if (operation && operation.payload && operation.type !== "create") {
      const to = operation.payload.transfer.to;
      const from = operation.payload.transfer.from;
      const amount = {
        amount: operation.payload.transfer.amount,
        asset_id: operation.payload.transfer.asset_id
      };
      const expiration = new Date(operation.payload.conditions.time_lock.expiration);
      const toAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAccount(to);
      const fromAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAccount(from);

      if (toAccount && fromAccount && toAccount.get && fromAccount.get) {
        const asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(amount.asset_id, false);
        this.setState({
          to_account: toAccount,
          to_name: toAccount.get("name"),
          from_account: fromAccount,
          from_name: fromAccount.get("name"),
          asset: asset,
          amount: common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].convert_satoshi_to_typed(amount.amount, asset),
          asset_id: amount.asset_id,
          period_start_time: expiration,
          // no selection for that
          htlcId: operation.payload.id,
          preimage_hash: operation.payload.conditions.hash_lock.preimage_hash[1],
          preimage_size: operation.payload.conditions.hash_lock.preimage_hash[0],
          expirationDate: moment__WEBPACK_IMPORTED_MODULE_17___default()(new Date(common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].makeISODateString(operation.payload.conditions.time_lock.expiration))),
          period: null
        });
      } else {
        this.setState({
          htlcId: operation.payload.id,
          preimage_hash: operation.payload.conditions.hash_lock.preimage_hash[1],
          preimage_size: operation.payload.conditions.hash_lock.preimage_hash[0],
          expirationDate: moment__WEBPACK_IMPORTED_MODULE_17___default()(new Date(common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].makeISODateString(operation.payload.conditions.time_lock.expiration))),
          period: null
        });
      }
    } else {
      // ensure it's always in-sync
      this.setState({
        htlcId: null,
        preimage_hash: null,
        preimage_size: null
      });
    }
  }

  componentDidMount() {
    this._syncOperation(this.props.operation);
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      operation
    } = this.props;

    if (this.props.fromAccount !== prevProps.fromAccount || this.state.from_account == null) {
      // refesh balances and fee
      // write props to state
      this.setState({
        from_account: this.props.fromAccount,
        from_name: this.props.fromAccount.get("name")
      });
    }

    if (prevProps.operation !== this.props.operation) {
      this._syncOperation(operation);
    }
  }

  _checkBalance() {
    const {
      feeAmount,
      amount,
      from_account,
      asset
    } = this.state;
    if (!asset || !from_account) return;
    const balanceID = from_account.getIn(["balances", asset.get("id")]);
    const feeBalanceID = from_account.getIn(["balances", feeAmount.asset_id]);
    if (!asset || !from_account) return;
    if (!balanceID) return this.setState({
      balanceError: true
    });
    let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(balanceID);
    let feeBalanceObject = feeBalanceID ? bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(feeBalanceID) : null;

    if (!feeBalanceObject || feeBalanceObject.get("balance") === 0) {
      this.setState({
        feeAmount: getUninitializedFeeAmount()
      });
    }

    if (!balanceObject || !feeAmount) return;
    if (!amount) return this.setState({
      balanceError: false
    });
    const hasBalance = (0,common_trxHelper__WEBPACK_IMPORTED_MODULE_9__.checkBalance)(amount, asset, feeAmount, balanceObject);
    if (hasBalance === null) return;
    this.setState({
      balanceError: !hasBalance
    });
  }

  _setTotal(asset_id, balance_id) {
    const {
      feeAmount
    } = this.state;
    let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(balance_id);
    let transferAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(asset_id);
    let balance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__.Asset({
      amount: balanceObject.get("balance"),
      asset_id: transferAsset.get("id"),
      precision: transferAsset.get("precision")
    });

    if (balanceObject) {
      if (feeAmount.asset_id === balance.asset_id) {
        balance.minus(feeAmount);
      }

      this.setState({
        maxAmount: true,
        amount: balance.getAmount({
          real: true
        })
      }, this._checkBalance);
    }
  }

  _getAvailableAssets(state = this.state) {
    const {
      from_account,
      from_error
    } = state;
    let asset_types = [];

    if (!(from_account && from_account.get("balances") && !from_error)) {
      return {
        asset_types
      };
    }

    let account_balances = state.from_account.get("balances").toJS();
    asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].sortID);

    for (let key in account_balances) {
      let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getObject(account_balances[key]);

      if (balanceObject && balanceObject.get("balance") === 0) {
        asset_types.splice(asset_types.indexOf(key), 1);
      }
    }

    return {
      asset_types
    };
  }

  onToAccountChanged = to_account => {
    this.setState({
      to_account,
      error: null
    });
  };
  onAmountChanged = ({
    amount,
    asset
  }) => {
    if (!asset) {
      return;
    }

    if (typeof asset !== "object") {
      asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(asset);
    }

    this.setState({
      amount,
      asset,
      asset_id: asset.get("id"),
      error: null,
      maxAmount: false
    }, this._checkBalance);
  };
  toChanged = to_name => {
    this.setState({
      to_name,
      error: null
    });
  };

  onFeeChanged(fee) {
    if (!fee) return;
    this.setState({
      feeAmount: fee,
      error: null
    }, this._checkBalance);
  }

  onTrxIncluded(confirm_store_state) {
    if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].unlisten(this.onTrxIncluded);
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].reset();
    } else if (confirm_store_state.closed) {
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].unlisten(this.onTrxIncluded);
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].reset();
    }
  }

  onDatepickerRef(el) {
    if (el && el.picker.input) {
      el.picker.input.readOnly = false;
    }
  }

  onExpirationDateChanged = utcValue => {
    if (utcValue) {
      const {
        period_start_time
      } = this.state;
      const exp = utcValue.valueOf();
      const start = period_start_time.valueOf();
      const claim_period = Math.floor((exp - start) / 1000);
      this.setState({
        claim_period,
        period: null,
        expirationDate: utcValue
      });
    } else {
      this.setState({
        claim_period: 0,
        period: null,
        expirationDate: null
      });
    }
  };

  onPreimageChanged({
    preimage,
    preimage_cipher,
    preimage_hash,
    preimage_size
  }) {
    let stateChange = {};

    if (preimage !== undefined) {
      stateChange.preimage = preimage;
    }

    if (preimage_cipher !== undefined) {
      stateChange.preimage_cipher = preimage_cipher;
    }

    if (preimage_hash !== undefined) {
      stateChange.preimage_hash = preimage_hash;
    }

    if (preimage_size !== undefined) {
      stateChange.preimage_size = preimage_size;
    }

    this.setState(stateChange);
  }

  setPeriod = days => {
    let estimatedExpiry = moment__WEBPACK_IMPORTED_MODULE_17___default()().add(days, "day");
    let period = "one_day";
    const claim_period = days * 60 * 60 * 24; // convert day to seconds

    switch (days) {
      case 1:
        period = "one_day";
        break;

      case 2:
        period = "two_days";
        break;

      case 7:
        period = "one_week";
        break;
    }

    this.setState({
      claim_period,
      period,
      expirationDate: estimatedExpiry
    });
  };

  render() {
    let {
      from_account,
      to_account,
      asset,
      asset_id,
      feeAmount,
      amount,
      from_name,
      to_name,
      balanceError,
      preimage,
      preimage_cipher,
      claim_period,
      preimage_hash,
      preimage_size,
      period_start_time,
      expirationDate
    } = this.state;
    let from_my_account = stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].isMyAccount(from_account) || from_name === this.props.passwordAccount;
    let from_error = from_account && !from_my_account ? true : false;
    const {
      operation
    } = this.props;
    const isExtend = operation && operation.type === "extend";
    const isRedeem = operation && operation.type === "redeem";

    let {
      asset_types
    } = this._getAvailableAssets();

    let balance = null;

    if (from_account && from_account.get("balances") && !from_error) {
      let account_balances = from_account.get("balances").toJS();

      let _error = this.state.balanceError ? "has-error" : "";

      if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(asset_types[0]);

      if (asset_types.length > 0) {
        let current_asset_id = asset ? asset.get("id") : asset_types[0];
        balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          component: "span",
          content: "transfer.available"
        }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: _error,
          style: {
            borderBottom: "#A09F9F 1px dotted",
            cursor: "pointer"
          },
          onClick: this._setTotal.bind(this, current_asset_id, account_balances[current_asset_id], feeAmount.getAmount({
            real: true
          }), feeAmount.asset_id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
          balance: account_balances[current_asset_id]
        })));
      } else {
        balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: _error
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "transfer.errors.noFunds"
        })));
      }
    }

    const amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
    const isAmountValid = amountValue && !(0,lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_24__["default"])(amountValue);
    const isSubmitNotValid = !from_account || !to_account || !isAmountValid || !asset || balanceError || from_account.get("id") == to_account.get("id") || !(preimage_cipher && preimage || preimage_hash) || !claim_period;
    let modalTitle = operation && operation.type === "create" ? counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.create_htlc") : isExtend ? counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.extend_htlc") : counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.redeem_htlc");
    let sendButtonText = operation && operation.type === "create" ? counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.direct_debit.create") : counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.direct_debit.update");
    const amountHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-input-header--label"
    }, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.expiration_date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-input-header--right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("period-row", {
        "is-active": this.state.period === "one_day"
      }),
      onClick: () => this.setPeriod(1)
    }, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.expiration_period.one_day")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("period-row", {
        "is-active": this.state.period === "two_days"
      }),
      onClick: () => this.setPeriod(2)
    }, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.expiration_period.two_days")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("period-row", {
        "is-active": this.state.period === "one_week"
      }),
      onClick: () => this.setPeriod(7)
    }, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.expiration_period.one_week"))));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Modal, {
      title: modalTitle,
      visible: this.props.isModalVisible,
      overlay: true,
      onCancel: this.props.hideModal,
      footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
        key: "send",
        disabled: isSubmitNotValid,
        onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
      }, sendButtonText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
        key: "Cancel",
        onClick: this.props.hideModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "span",
        content: "transfer.cancel"
      }))]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Form, {
      className: "full-width",
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: "showcases.htlc.sender",
      accountName: from_name,
      account: from_account,
      size: 60,
      typeahead: true,
      hideImage: true,
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: "showcases.htlc.recipient",
      accountName: to_name,
      account: to_account,
      onChange: this.toChanged.bind(this),
      onAccountChanged: this.onToAccountChanged,
      size: 60,
      typeahead: true,
      hideImage: true,
      disabled: isExtend || isRedeem
    }), !isRedeem ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "showcases.htlc.amount",
      amount: amount,
      onChange: this.onAmountChanged.bind(this),
      asset: asset_types.length > 0 && asset ? asset.get("id") : asset_id ? asset_id : asset_types[0],
      assets: asset_types,
      display_balance: isExtend || isRedeem ? undefined : balance,
      allowNaN: true,
      disabled: isExtend || isRedeem,
      selectDisabled: isExtend || isRedeem
    }) : null, isExtend ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Form.Item, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.preimage")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Input, {
      type: "text",
      value: preimage_hash || "",
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("showcases.htlc.hash"),
      readOnly: true,
      disabled: true
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Preimage, {
      ref: tmp => this.preimage = tmp,
      label: "showcases.htlc.preimage",
      onAction: this.onPreimageChanged.bind(this),
      preimage_hash: preimage_hash,
      preimage_size: preimage_size,
      preimage: preimage,
      preimage_cipher: preimage_cipher,
      type: operation && operation.type ? operation.type : "create"
    }), !isRedeem ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Form.Item, {
      label: amountHeader,
      validateStatus: "",
      className: "form-input-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.DatePicker, {
      showToday: true,
      showTime: true,
      placeholder: "",
      onChange: this.onExpirationDateChanged,
      className: "date-picker-width100",
      style: {
        width: "100%"
      },
      ref: el => this.onDatepickerRef(el),
      disabledDate: current => current && current < period_start_time,
      value: expirationDate
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block transfer-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "no-margin no-padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_22__["default"], {
      account: from_account,
      transaction: {
        type: "htlc_create",
        options: ["price_per_kbyte"],
        data: {
          type: "memo",
          content: null
        }
      },
      onChange: this.onFeeChanged.bind(this)
    })))) : null)));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_14__.connect)(HtlcModal, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_15__["default"]];
  },

  getProps(props) {
    return {
      fee_asset_symbol: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_15__["default"].getState().settings.get("fee_asset")
    };
  }

}));

/***/ }),

/***/ 2993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2061);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(594);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1804);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(596);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);








class AccountsSettings extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  shouldComponentUpdate(nextProps) {
    return !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(nextProps.myAccounts, this.props.myAccounts) || nextProps.hiddenAccounts !== this.props.hiddenAccounts;
  }

  onToggleHide(account, hide, e) {
    e.preventDefault();
    actions_AccountActions__WEBPACK_IMPORTED_MODULE_2__["default"].toggleHideAccount(account, hide);
  }

  render() {
    let {
      myAccounts,
      hiddenAccounts
    } = this.props;
    let accounts = hiddenAccounts.toArray().concat(myAccounts).sort();

    if (!accounts.length) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "settings.no_accounts"
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, accounts.map(account => {
      let isIgnored = hiddenAccounts.has(account);
      let hideLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        onClick: isIgnored ? this.onToggleHide.bind(this, account, false) : this.onToggleHide.bind(this, account, true)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "account." + (isIgnored ? "unignore" : "ignore")
      }));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        key: account
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, account), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
        to: `/account/${account}/permissions`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "settings.view_keys"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, hideLink));
    })));
  }

}

AccountsSettings = (0,alt_react__WEBPACK_IMPORTED_MODULE_3__.connect)(AccountsSettings, {
  listenTo() {
    return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"]];
  },

  getProps() {
    return {
      myAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getMyAccounts(),
      hiddenAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().myHiddenAccounts
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountsSettings);

/***/ }),

/***/ 3019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2490);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1804);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(645);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);







class BackupFavorites extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  makeBackup() {
    let data = this.props.starredMarkets.toJS();
    let blob = new Blob([JSON.stringify(data)], {
      type: "application/json; charset=us-ascii"
    });
    (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "favorites.json");
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "settings.backup_favoritestext"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Button, {
      type: "primary",
      onClick: this.makeBackup.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "settings.backup_favoritesbtn"
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_3__.connect)(BackupFavorites, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    return {
      starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().starredMarkets
    };
  }

}));

/***/ }),

/***/ 3018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackupSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2523);
/* harmony import */ var _Wallet_BackupBrainkey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3013);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BackupFavorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3019);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);






const Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Select.Option;
class BackupSettings extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      restoreType: 0,
      types: ["backup", "brainkey", "favorites"]
    };
  }

  _changeType(value) {
    this.setState({
      restoreType: this.state.types.indexOf(value)
    });
  }

  render() {
    let {
      types,
      restoreType
    } = this.state;
    let options = types.map(type => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
        key: type,
        value: type
      }, counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate(`settings.backupcreate_${type}`), " ");
    });
    let content;

    switch (types[restoreType]) {
      case "backup":
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__.BackupCreate, null);
        break;

      case "brainkey":
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_BackupBrainkey__WEBPACK_IMPORTED_MODULE_2__["default"], null);
        break;

      case "favorites":
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BackupFavorites__WEBPACK_IMPORTED_MODULE_4__["default"], null);
        break;

      default:
        break;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Select, {
      onChange: this._changeType.bind(this),
      className: "bts-select",
      value: types[restoreType],
      style: {
        marginBottom: "16px"
      }
    }, options), content);
  }

}

/***/ }),

/***/ 2992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1804);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(645);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(426);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2052);
/* harmony import */ var _Modal_SetDefaultFeeAssetModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2060);










class FeeAssetSettings extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      current_asset: bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.assets_by_symbol.get(props.fee_asset) || "1.3.0"
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.getAsset(this.state.current_asset);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_6___default()), {
      component: "span",
      content: "settings.current_fee_asset",
      style: {
        marginRight: "10px"
      }
    }), asset ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: asset.get("symbol")
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Button, {
      style: {
        margin: "15px"
      },
      key: "open_change_fee_asset",
      type: "secondary",
      onClick: () => {
        this.setState({
          showModal: true
        });
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.change_default_fee_asset")), this.state.showModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal_SetDefaultFeeAssetModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: "change_fee_asset_modal",
      className: "modal",
      show: this.state.showModal,
      current_asset: this.state.current_asset,
      displayFees: false,
      forceDefault: true,
      onChange: value => {
        this.setState({
          current_asset: value
        });
      },
      close: () => {
        this.setState({
          showModal: false
        });
      }
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(FeeAssetSettings, {
  listenTo() {
    return [_stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
  },

  getProps(props) {
    return {
      fee_asset: _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().settings.get("fee_asset")
    };
  }

}));

/***/ }),

/***/ 3014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3011);


class PasswordSettings extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__["default"], null);
  }

}

/***/ }),

/***/ 3017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(646);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routerTransition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1898);






class ResetSettings extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      message: null
    };
  }

  _setMessage(key) {
    this.setState({
      message: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(key)
    });
    this.timer = setTimeout(() => {
      this.setState({
        message: null
      });
    }, 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "no-border-bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      style: {
        fontWeight: "normal",
        fontFamily: "Roboto-Medium, arial, sans-serif",
        fontStyle: "normal"
      },
      content: "settings.reset_text_description",
      generalName: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.general"),
      with: {
        generalName: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.general"),
        accessName: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.access"),
        faucetName: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.faucet_address")
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__.Button, {
      type: "primary",
      style: {
        height: 60,
        width: "100%",
        marginTop: "30px"
      },
      onClick: () => {
        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].clearSettings().then(() => {
          this._setMessage("settings.restore_default_success");

          setTimeout(() => {
            (0,_routerTransition__WEBPACK_IMPORTED_MODULE_5__["default"])(false);
          }, 50);
        });
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.reset")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "facolor-success",
      style: {
        marginTop: "20px",
        height: "18px"
      }
    }, this.state.message));
  }

}

/***/ }),

/***/ 3016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(646);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__);






class RestoreFavorites extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: null,
      error: null
    };
  }

  upload(evt) {
    this.setState({
      error: false,
      json: null
    });
    let file = evt.target.files[0];
    let reader = new FileReader();

    reader.onload = evt => {
      let contents = evt.target.result;

      try {
        let json = JSON.parse(contents);

        for (var key in json) {
          let market = json[key];
          let {
            quote,
            base
          } = market;
          if (!quote || !base) throw new Error("Cannot parse json data.");
        }

        this.setState({
          json
        }); // this.finish();
      } catch (message) {
        this.setState({
          error: true
        });
      }
    };

    reader.readAsText(file);
  }

  finish() {
    const {
      json
    } = this.state;
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__["default"].clearStarredMarkets();

    for (var key in json) {
      let market = json[key];
      let {
        quote,
        base
      } = market;
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__["default"].addStarMarket(quote, base);
    }

    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__.Notification.success({
      message: counterpart__WEBPACK_IMPORTED_MODULE_3___default()("settings.backup_favorites_success")
    });
  }

  render() {
    const {
      state
    } = this;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "file",
      id: "file_input",
      accept: ".json",
      style: {
        border: "solid",
        marginBottom: 15
      },
      onChange: this.upload.bind(this)
    }), state.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "settings.backup_favorites_error"
    })), state.json && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__.Button, {
      type: "primary",
      onClick: this.finish.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "settings.backup_favorites_finish"
    }))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestoreFavorites);

/***/ }),

/***/ 3015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RestoreSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2523);
/* harmony import */ var _Wallet_ImportKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3005);
/* harmony import */ var _Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2543);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(646);
/* harmony import */ var _RestoreFavorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3016);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);









const Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Select.Option;
class RestoreSettings extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      restoreType: 0,
      types: ["backup", "key", "legacy", "brainkey", "favorites"]
    };
  }

  _setWalletMode() {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeSetting({
      setting: "passwordLogin",
      value: false
    });
  }

  _changeType(value) {
    this.setState({
      restoreType: this.state.types.indexOf(value)
    });
  }

  render() {
    let {
      passwordLogin
    } = this.props;

    if (passwordLogin) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "settings.wallet_required",
        component: "h4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "dark-text-color"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "settings.wallet_required_text"
      }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Button, {
        type: "primary",
        className: "button",
        onClick: this._setWalletMode
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "settings.enable_wallet"
      })));
    }

    let {
      types,
      restoreType
    } = this.state;
    let options = types.map(type => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
        key: type,
        value: type
      }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate(`settings.backup_${type}`), " ");
    });
    let content;

    switch (types[restoreType]) {
      case "backup":
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__.BackupRestore, null));
        break;

      case "brainkey":
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
          style: {
            maxWidth: "40rem",
            paddingBottom: 10
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
          content: "settings.restore_brainkey_text"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_3__.CreateWalletFromBrainkey, {
          nested: true
        }));
        break;

      case "favorites":
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RestoreFavorites__WEBPACK_IMPORTED_MODULE_7__["default"], null));
        break;

      default:
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_ImportKeys__WEBPACK_IMPORTED_MODULE_2__["default"], {
          privateKey: restoreType === 1
        });
        break;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Select, {
      onChange: this._changeType.bind(this),
      className: "bts-select",
      value: types[restoreType]
    }, options), content);
  }

}

/***/ }),

/***/ 2990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_set__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3020);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_IntlActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(647);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(646);
/* harmony import */ var _WebsocketAddModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1896);
/* harmony import */ var _SettingsEntry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2991);
/* harmony import */ var _AccountsSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2993);
/* harmony import */ var _WalletSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2994);
/* harmony import */ var _PasswordSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3014);
/* harmony import */ var _RestoreSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3015);
/* harmony import */ var _ResetSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3017);
/* harmony import */ var _BackupSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3018);
/* harmony import */ var _AccessSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1897);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(610);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















class Settings extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();

    let menuEntries = this._getMenuEntries(props);

    let activeSetting = 0;
    let tabIndex = !!props.match.params.tab ? menuEntries.indexOf(props.match.params.tab) : props.viewSettings.get("activeSetting", 0);
    if (tabIndex >= 0) activeSetting = tabIndex;
    let general = ["locale", "unit", "fee_asset", //"filteredServiceProviders",
    "browser_notifications", "showSettles", "walletLockTimeout", "themes", "showAssetPercent", "viewOnlyMode", "showProposedTx"]; // disable that the user can change login method if only one is allowed

    if ((0,_branding__WEBPACK_IMPORTED_MODULE_14__.getAllowedLogins)().length > 1) general.push("passwordLogin");
    general.push("reset");
    this.state = {
      isAddNodeModalVisible: false,
      isRemoveNodeModalVisible: false,
      removeNode: {
        name: null,
        url: null
      },
      apiServer: props.settings.get("apiServer"),
      activeSetting,
      menuEntries,
      settingEntries: {
        general: general,
        access: ["apiServer", "faucet_address"]
      }
    };
    this.showAddNodeModal = this.showAddNodeModal.bind(this);
    this.hideAddNodeModal = this.hideAddNodeModal.bind(this);
    this.showRemoveNodeModal = this.showRemoveNodeModal.bind(this);
    this.hideRemoveNodeModal = this.hideRemoveNodeModal.bind(this);
    this._handleNotificationChange = this._handleNotificationChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.tab !== this.props.match.params.tab && !!this.props.match.params.tab) {
      this._onChangeMenu(this.props.match.params.tab);
    }
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (np.settings.get("passwordLogin") !== this.props.settings.get("passwordLogin")) {
      const currentEntries = this._getMenuEntries(this.props);

      const menuEntries = this._getMenuEntries(np);

      const currentActive = currentEntries[this.state.activeSetting];
      const newActiveIndex = menuEntries.indexOf(currentActive);
      const newActive = menuEntries[newActiveIndex];
      this.setState({
        menuEntries
      });

      if (newActiveIndex && newActiveIndex !== this.state.activeSetting) {
        this.setState({
          activeSetting: menuEntries.indexOf(currentActive)
        });
      } else if (!newActive || this.state.activeSetting > menuEntries.length - 1) {
        this.setState({
          activeSetting: 0
        });
      }
    }
  }

  showAddNodeModal() {
    this.setState({
      isAddNodeModalVisible: true
    });
  }

  hideAddNodeModal() {
    this.setState({
      isAddNodeModalVisible: false
    });
  }

  showRemoveNodeModal(url, name) {
    this.setState({
      isRemoveNodeModalVisible: true,
      removeNode: {
        url,
        name
      }
    });
  }

  hideRemoveNodeModal() {
    this.setState({
      isRemoveNodeModalVisible: false,
      removeNode: {
        url: null,
        name: null
      }
    });
  }

  _getMenuEntries(props) {
    if (props.deprecated) {
      return ["wallet", "backup"];
    }

    let menuEntries = [];
    menuEntries.push("general");
    if (!props.settings.get("passwordLogin")) menuEntries.push("wallet");
    menuEntries.push("accounts");
    if (!props.settings.get("passwordLogin")) menuEntries.push("password");
    if (!props.settings.get("passwordLogin")) menuEntries.push("backup");
    if (!props.settings.get("passwordLogin")) menuEntries.push("restore");
    menuEntries.push("access");
    if ((0,_branding__WEBPACK_IMPORTED_MODULE_14__.getFaucet)().show) menuEntries.push("faucet_address");
    menuEntries.push("reset");
    return menuEntries;
  }

  triggerModal(e, ...args) {
    this.refs.ws_modal.show(e, ...args);
  }

  _handleNotificationChange(path, value) {
    // use different change handler because checkbox doesn't work
    // normal with e.preventDefault()
    let updatedValue = (0,lodash_es_set__WEBPACK_IMPORTED_MODULE_16__["default"])(this.props.settings.get("browser_notifications"), path, value);

    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeSetting({
      setting: "browser_notifications",
      value: updatedValue
    });
  }

  _handleSettingsEntryChange(setting, input) {
    if (!input.target) {
      this._onChangeSetting(setting, {
        target: {
          value: input
        }
      });
    } else {
      this._onChangeSetting(setting, input);
    }
  }

  _onChangeSetting(setting, e) {
    if (e.preventDefault) e.preventDefault();
    let {
      defaults
    } = this.props;
    let value = null;

    function findEntry(targetValue, targetDefaults) {
      if (!targetDefaults) return targetValue;

      if (targetDefaults[0].translate) {
        for (var i = 0; i < targetDefaults.length; i++) {
          if (counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(`settings.${targetDefaults[i].translate}`) === targetValue) {
            return i;
          }
        }
      } else {
        return targetDefaults.indexOf(targetValue);
      }
    }

    switch (setting) {
      case "locale":
        let myLocale = counterpart__WEBPACK_IMPORTED_MODULE_1___default().getLocale();

        if (e.target.value !== myLocale) {
          actions_IntlActions__WEBPACK_IMPORTED_MODULE_2__["default"].switchLocale(e.target.value);
          actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeSetting({
            setting: "locale",
            value: e.target.value
          });
        }

        break;

      case "themes":
        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeSetting({
          setting: "themes",
          value: e.target.value
        });
        break;

      case "defaultMarkets":
        break;

      case "walletLockTimeout":
        let newValue = parseInt(e.target.value, 10);
        if (isNaN(newValue)) newValue = 0;

        if (!isNaN(newValue) && typeof newValue === "number") {
          actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeSetting({
            setting: "walletLockTimeout",
            value: newValue
          });
        }

        break;

      case "inverseMarket":
      case "confirmMarketOrder":
        value = findEntry(e.target.value, defaults[setting]) === 0; // USD/BTS is true, BTS/USD is false

        break;

      case "apiServer":
        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeSetting({
          setting: "apiServer",
          value: e.target.value
        });
        this.setState({
          apiServer: e.target.value
        });
        break;

      case "showProposedTx":
      case "showSettles":
      case "showAssetPercent":
      case "passwordLogin":
      case "viewOnlyMode":
        let reference = defaults[setting][0];
        if (reference.translate) reference = reference.translate;
        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeSetting({
          setting,
          value: e.target.value === reference
        });
        break;

      case "filteredServiceProviders":
        break;

      case "fee_asset":
      case "unit":
        const defaultSettings = defaults["unit"];
        let index = findEntry(e.target.value, defaultSettings);
        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeSetting({
          setting: setting,
          value: defaultSettings[index]
        });
        break;

      default:
        value = findEntry(e.target.value, defaults[setting]);
        break;
    }

    if (value !== null) {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeSetting({
        setting: setting,
        value: value
      });
    }
  }

  onReset() {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].clearSettings();
  }

  _redirectToEntry(entry) {
    this.props.history.push("/settings/" + entry);
  }

  _onChangeMenu(entry) {
    let index = this.state.menuEntries.indexOf(entry);
    this.setState({
      activeSetting: index
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeViewSetting({
      activeSetting: index
    });
  }

  render() {
    let {
      settings,
      defaults
    } = this.props;
    const {
      menuEntries,
      activeSetting,
      settingEntries
    } = this.state;
    let entries;
    let activeEntry = menuEntries[activeSetting] || menuEntries[0];

    switch (activeEntry) {
      case "accounts":
        entries = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccountsSettings__WEBPACK_IMPORTED_MODULE_7__["default"], null);
        break;

      case "wallet":
        entries = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WalletSettings__WEBPACK_IMPORTED_MODULE_8__["default"], this.props);
        break;

      case "password":
        entries = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PasswordSettings__WEBPACK_IMPORTED_MODULE_9__["default"], null);
        break;

      case "backup":
        entries = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BackupSettings__WEBPACK_IMPORTED_MODULE_12__["default"], null);
        break;

      case "restore":
        entries = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RestoreSettings__WEBPACK_IMPORTED_MODULE_10__["default"], {
          passwordLogin: this.props.settings.get("passwordLogin")
        });
        break;

      case "access":
        entries = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccessSettings__WEBPACK_IMPORTED_MODULE_13__["default"], {
          faucet: settings.get("faucet_address"),
          nodes: defaults.apiServer,
          onChange: this._onChangeSetting.bind(this),
          showAddNodeModal: this.showAddNodeModal,
          showRemoveNodeModal: this.showRemoveNodeModal
        });
        break;

      case "faucet_address":
        entries = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Input, {
          disabled: !(0,_branding__WEBPACK_IMPORTED_MODULE_14__.getFaucet)().editable,
          type: "text",
          defaultValue: settings.get("faucet_address"),
          onChange: (0,_branding__WEBPACK_IMPORTED_MODULE_14__.getFaucet)().editable ? this._onChangeSetting.bind(this, "faucet_address") : null
        });
        break;

      case "reset":
        entries = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ResetSettings__WEBPACK_IMPORTED_MODULE_11__["default"], null);
        break;

      default:
        entries = settingEntries[activeEntry].map(setting => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SettingsEntry__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
            key: setting,
            setting: setting,
            settings: settings,
            defaults: defaults[setting === "fee_asset" ? "unit" : setting],
            onChange: this._handleSettingsEntryChange.bind(this),
            onNotificationChange: this._handleNotificationChange,
            locales: this.props.localesObject
          }, this.state));
        });
        break;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Form, {
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: this.props.deprecated ? "" : "grid-block settings-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block main-content margin-block wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content shrink settings-menu",
      style: {
        paddingRight: "2rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      style: {
        paddingBottom: 10,
        paddingLeft: 10
      },
      component: "h3",
      content: "header.settings",
      className: "panel-bg-color"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, menuEntries.map((entry, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: index === activeSetting ? "active" : "",
        onClick: this._redirectToEntry.bind(this, entry),
        key: entry
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: "settings." + entry
      }));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content",
      style: {
        height: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-12 no-margin vertical",
      style: {
        maxWidth: 1000
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      component: "h3",
      content: "settings." + menuEntries[activeSetting]
    }), activeEntry != "access" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      unsafe: true,
      style: {
        paddingTop: 5,
        marginBottom: 30
      },
      content: `settings.${menuEntries[activeSetting]}_text`,
      className: "panel-bg-color"
    }), entries))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WebsocketAddModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      removeNode: this.state.removeNode,
      isAddNodeModalVisible: this.state.isAddNodeModalVisible,
      isRemoveNodeModalVisible: this.state.isRemoveNodeModalVisible,
      onAddNodeClose: this.hideAddNodeModal,
      onRemoveNodeClose: this.hideRemoveNodeModal,
      apis: defaults["apiServer"],
      api: defaults["apiServer"].filter(a => {
        return a.url === this.state.apiServer;
      }).reduce((a, b) => {
        return b && b.url;
      }, null),
      changeConnection: apiServer => {
        this.setState({
          apiServer
        });
      }
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ 2989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2586);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1908);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2990);






class SettingsContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(alt_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      stores: [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
      inject: {
        settings: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings;
        },
        viewSettings: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().viewSettings;
        },
        defaults: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().defaults;
        },
        localesObject: () => {
          return stores_IntlStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().localesObject;
        },
        apiLatencies: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().apiLatencies;
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Settings__WEBPACK_IMPORTED_MODULE_4__["default"], this.props));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsContainer);

/***/ }),

/***/ 2991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsEntry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2052);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2045);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(notifyjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FeeAssetSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2992);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Gateways_GatewaySelectorModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2584);








const FormItem = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Form.Item;
const Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Select.Option;
class SettingsEntry extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      message: null,
      isGatewaySelectorModalVisible: false,
      isGatewaySelectorModalRendered: false
    };
    this.handleNotificationChange = this.handleNotificationChange.bind(this);
  }

  hideGatewaySelectorModal() {
    this.setState({
      isGatewaySelectorModalVisible: false
    });
  }

  showGatewaySelectorModal() {
    this.setState({
      isGatewaySelectorModalRendered: true,
      isGatewaySelectorModalVisible: true
    });
  }

  _setMessage(key) {
    this.setState({
      message: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(key)
    });
    this.timer = setTimeout(() => {
      this.setState({
        message: null
      });
    }, 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleNotificationChange(path) {
    return evt => {
      this.props.onNotificationChange(path, !!evt.target.checked);
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.setting === "filteredServiceProviders") {
      // only rerender for the modal, not when settings changed (visualized in the modal!)
      return nextState.isGatewaySelectorModalVisible !== this.state.isGatewaySelectorModalVisible;
    }

    return true;
  }

  render() {
    let {
      defaults,
      setting,
      settings
    } = this.props;
    let options,
        optional,
        confirmButton,
        value,
        input,
        selected = settings.get(setting);
    let noHeader = false;
    let component = null;

    switch (setting) {
      case "locale":
        value = selected;
        options = defaults.map(entry => {
          let translationKey = "languages." + entry;
          let value = counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(translationKey);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
            key: entry,
            value: entry
          }, value);
        });
        break;

      case "themes":
        value = selected;
        options = defaults.map(entry => {
          let translationKey = "settings." + entry;
          let value = counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(translationKey);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
            key: entry,
            value: entry
          }, value);
        });
        break;

      case "browser_notifications":
        value = selected;
        component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "settings--notifications"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "settings--notifications--group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "settings--notifications--item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
          id: "browser_notifications.allow",
          checked: !!value.allow,
          onChange: this.handleNotificationChange("allow")
        }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.browser_notifications_allow"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "settings--notifications--group"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "settings--notifications--item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
          id: "browser_notifications.additional.transferToMe",
          disabled: !value.allow,
          checked: !!value.additional.transferToMe,
          onChange: this.handleNotificationChange("additional.transferToMe")
        }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.browser_notifications_additional_transfer_to_me"))))), !!value.allow && (notifyjs__WEBPACK_IMPORTED_MODULE_4___default().needsPermission) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
          href: "https://goo.gl/zZ7NHY",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "external-link"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "div",
          className: "settings--notifications--no-browser-support",
          content: "settings.browser_notifications_disabled_by_browser_notify"
        })));
        break;

      case "fee_asset":
        options = null;
        value = true;
        component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FeeAssetSettings__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: "fee_asset_component"
        });
        break;

      case "filteredServiceProviders":
        options = null;
        value = true;
        component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
          onClick: this.showGatewaySelectorModal.bind(this)
        }, "Choose external Service Providers"), this.state.isGatewaySelectorModalRendered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Gateways_GatewaySelectorModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
          visible: this.state.isGatewaySelectorModalVisible,
          hideModal: this.hideGatewaySelectorModal.bind(this)
        }));
        break;

      case "defaultMarkets":
        options = null;
        value = null;
        break;

      case "walletLockTimeout":
        value = selected;
        input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Input, {
          type: "text",
          className: "settings--input",
          value: selected,
          onChange: this.props.onChange.bind(this, setting)
        });
        break;

      default:
        if (typeof selected === "number") {
          value = defaults[selected];
        } else if (typeof selected === "boolean") {
          if (selected) {
            value = defaults[0];
          } else {
            value = defaults[1];
          }
        } else if (typeof selected === "string") {
          value = selected;
        }

        if (defaults) {
          options = defaults.map(entry => {
            let option = entry.translate ? counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(`settings.${entry.translate}`) : entry;

            if (setting === "unit" || setting === "fee_asset") {
              option = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                name: entry
              });
            }

            let key = entry.translate ? entry.translate : entry;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
              value: entry.translate ? entry.translate : entry,
              key: key
            }, option);
          });
        } else {
          input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
            className: "settings-input",
            type: "text",
            defaultValue: value,
            onBlur: this.props.onChange.bind(this, setting)
          });
        }

        break;
    }

    if (typeof value !== "number" && !value && !options) return null;

    if (value && value.translate) {
      value = value.translate;
    }

    const EntryLayout = ({
      noHeader,
      setting,
      children
    }) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, noHeader && children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormItem, {
        label: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(`settings.${setting}`)
      }, children));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "no-border-bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EntryLayout, {
      noHeader: noHeader,
      setting: setting
    }, options ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "unstyled-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "with-dropdown"
    }, optional, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Select, {
      value: value,
      className: "settings--select",
      onChange: this.props.onChange.bind(this, setting)
    }, options), confirmButton)) : null, input ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "unstyled-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, input)) : null, component ? component : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "facolor-success"
    }, this.state.message));
  }

}

/***/ }),

/***/ 2994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WalletSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2995);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2997);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(633);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);







const FormItem = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Form.Item;
class WalletSettings extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      lookupActive: false,
      resetMessage: null
    };
  }

  onLookup() {
    this.setState({
      lookupActive: true
    });
  }

  onResetBrainkeySequence() {
    stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__["default"].resetBrainKeySequence();
    this.setState({
      resetMessage: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("wallet.brainkey_reset_success")
    });
  }

  render() {
    let {
      lookupActive
    } = this.state;
    let {
      deprecated
    } = this.props;

    if (deprecated) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__.ChangeActiveWallet, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__.WalletDelete, null));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__.ChangeActiveWallet, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__.WalletDelete, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormItem, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("wallet.balance_claims"),
      className: "no-offset",
      style: {
        padding: "15px 0"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingBottom: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "settings.lookup_text"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: this.onLookup.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "wallet.balance_claim_lookup"
    }))), lookupActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_2__["default"], null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormItem, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("wallet.brainkey_seq_reset"),
      className: "no-offset",
      style: {
        paddingBottom: "15px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingBottom: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      unsafe: true,
      content: "wallet.brainkey_seq_reset_text"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: this.onResetBrainkeySequence.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "wallet.brainkey_seq_reset_button"
    })), this.state.resetMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        paddingTop: 10
      },
      className: "facolor-success"
    }, this.state.resetMessage) : null)));
  }

}

/***/ }),

/***/ 3038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Barter)
/* harmony export */ });
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3039);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2075);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2059);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(578);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(426);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2796);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(626);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(596);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(625);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2081);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(631);
/* provided dependency */ var Buffer = __webpack_require__(432)["Buffer"];
















function moveDecimal(num, decimals) {
  if (!num) return;
  return num / Math.pow(10, decimals);
}

class Barter extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      from_name: "",
      to_name: "",
      from_account: null,
      to_account: null,
      from_barter: [{
        index: 0,
        from_amount: "",
        from_asset_id: null,
        from_asset: null,
        from_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
          amount: 0,
          asset_id: "1.3.0"
        }),
        from_hasPoolBalance: null,
        from_balanceError: false
      }],
      to_barter: [{
        index: 0,
        to_amount: "",
        to_asset_id: null,
        to_asset: null,
        to_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
          amount: 0,
          asset_id: "1.3.0"
        }),
        to_hasPoolBalance: null,
        to_balanceError: false
      }],
      amount_counter: [],
      amount_index: 0,
      from_error: null,
      to_error: null,
      memo: {
        from_barter: [{
          message: "",
          shown: false
        }],
        to_barter: [{
          message: "",
          shown: false
        }],
        escrow: [{
          message: "",
          shown: false
        }]
      },
      proposal_fee: {
        amount: 0,
        asset_id: "1.3.0"
      },
      showEscrow: false,
      escrow_account_name: "",
      escrow_account: null,
      send_to_escrow: false,
      escrow_payment: 0,
      escrow_payment_changed: false,
      escrowFeeAssetId: "1.3.0",
      balanceWarning: {
        peer1: [],
        peer2: []
      }
    };
    this._checkBalance = this._checkBalance.bind(this);
    this.onTrxIncluded = this.onTrxIncluded.bind(this);
  }

  UNSAFE_componentWillMount() {
    let currentAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().currentAccount;
    if (!this.state.from_name) this.setState({
      from_name: currentAccount
    });
  }

  fromChanged(from_name) {
    this.setState({
      from_name
    });
  }

  escrowAccountChanged(escrow_account_name) {
    this.setState({
      escrow_account_name
    });
  }

  onFromAccountChanged(from_account) {
    this.setState({
      from_account,
      from_barter: [{
        from_amount: "",
        from_asset_id: null,
        from_asset: null,
        from_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
          amount: 0,
          asset_id: "1.3.0"
        }),
        from_hasPoolBalance: null,
        from_balanceError: false
      }]
    });
  }

  onEscrowAccountChanged(escrow_account) {
    this.setState({
      escrow_account
    });
  }

  toChanged(to_name) {
    this.setState({
      to_name
    });
  }

  onToAccountChanged(to_account) {
    this.setState({
      to_account,
      to_barter: [{
        to_amount: "",
        to_asset_id: null,
        to_asset: null,
        to_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
          amount: 0,
          asset_id: "1.3.0"
        }),
        to_hasPoolBalance: null,
        to_balanceError: false
      }]
    });
  }

  onFromAmountChanged(index, e) {
    const asset = e.asset;
    const amount = e.amount;

    if (!asset) {
      return;
    }

    let from_barter = [...this.state.from_barter];
    from_barter[index] = {
      index,
      from_amount: amount,
      from_asset: asset,
      from_asset_id: asset.get("id"),
      from_balanceError: false,
      from_feeAsset: from_barter[index].from_feeAsset
    };
    this.setState({
      from_barter: from_barter,
      from_error: null
    }, () => {
      this._checkBalance(from_barter[index].from_feeAsset, amount, this.state.from_account, asset, index, true, from_barter[index].from_feeAsset.asset_id, from_barter);

      this.checkAmountsTotal();
    });
  }

  onToAmountChanged(index, e) {
    const asset = e.asset;
    const amount = e.amount;

    if (!asset) {
      return;
    }

    let to_barter = [...this.state.to_barter];
    to_barter[index] = {
      index,
      to_amount: amount,
      to_asset: asset,
      to_asset_id: asset.get("id"),
      to_feeAsset: to_barter[index].to_feeAsset,
      to_balanceError: false
    };
    this.setState({
      to_barter: to_barter,
      to_error: null
    }, () => {
      this._checkBalance(to_barter[index].to_feeAsset, amount, this.state.to_account, asset, index, false, to_barter[index].to_feeAsset.asset_id, to_barter);

      this.checkAmountsTotal();
    });
  }

  _checkBalance(feeAmount, amount, account, asset, index, from, fee_asset_id, barter) {
    if (!asset || !account) return;
    const balanceID = account.getIn(["balances", asset.get("id")]);
    const feeBalanceID = account.getIn(["balances", feeAmount.asset_id]);
    if (!asset || !account) return;
    if (!balanceID) if (from) {
      barter[index].from_balanceError = true;
      return this.setState({
        from_barter: barter
      });
    } else {
      barter[index].to_balanceError = true;
      return this.setState({
        to_barter: barter
      });
    }
    let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getObject(balanceID);
    let feeBalanceObject = feeBalanceID ? bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getObject(feeBalanceID) : null;

    if (!feeBalanceObject || feeBalanceObject.get("balance") === 0) {
      if (from) {
        this.setState({
          from_barter: barter
        });
      } else {
        this.setState({
          to_barter: barter
        });
      }
    }

    if (!balanceObject || !feeAmount) return;
    if (!amount) if (from) {
      barter[index].from_balanceError = false;
      return this.setState({
        from_barter: barter
      });
    } else {
      barter[index].to_balanceError = false;
      return this.setState({
        to_barter: barter
      });
    }
    const hasBalance = (0,common_trxHelper__WEBPACK_IMPORTED_MODULE_11__.checkBalance)(amount, asset, feeAmount, balanceObject);
    if (hasBalance === null) return;

    if (from) {
      barter[index].from_balanceError = !hasBalance;
      return this.setState({
        from_barter: barter
      });
    } else {
      barter[index].to_balanceError = !hasBalance;
      return this.setState({
        to_barter: barter
      });
    }
  }

  _getAvailableAssets(state = this.state) {
    const {
      from_account,
      from_error,
      to_account,
      to_error
    } = state;

    let getAssetTypes = (account, err) => {
      let asset_types = [],
          fee_asset_types = [];

      if (!(account && account.get("balances") && !err)) {
        return {
          asset_types,
          fee_asset_types
        };
      }

      let account_balances = account.get("balances").toJS();
      asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].sortID);
      fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].sortID);

      for (let key in account_balances) {
        let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getObject(account_balances[key]);

        if (balanceObject && balanceObject.get("balance") === 0) {
          asset_types.splice(asset_types.indexOf(key), 1);

          if (fee_asset_types.indexOf(key) !== -1) {
            fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
          }
        }
      }

      return {
        asset_types,
        fee_asset_types
      };
    };

    let from = getAssetTypes(from_account, from_error);
    let to = getAssetTypes(to_account, to_error);
    return {
      from_asset_types: from.asset_types || [],
      to_asset_types: to.asset_types || [],
      from_fee_asset_types: from.fee_asset_types || [],
      to_fee_asset_types: to.fee_asset_types || []
    };
  }

  addFromAmount() {
    this.state.from_barter.push({
      from_amount: "",
      from_asset_id: null,
      from_asset: null,
      from_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
        amount: 0,
        asset_id: "1.3.0"
      })
    });
    this.setState({
      from_barter: this.state.from_barter
    });
  }

  addToAmount() {
    this.state.to_barter.push({
      to_amount: "",
      to_asset_id: null,
      to_asset: null,
      to_feeAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
        amount: 0,
        asset_id: "1.3.0"
      })
    });
    this.setState({
      to_barter: this.state.to_barter
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      from_error: null,
      to_error: null
    });
    let sendAmount;
    let transfer_list = [];
    let proposer = stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().currentAccount;
    let left_account = this.state.from_account;
    let escrowMemo = this.state.memo["escrow"][0] && this.state.memo["escrow"][0].message;

    if (this.state.showEscrow && this.state.send_to_escrow) {
      left_account = this.state.escrow_account;
    }

    if (this.state.showEscrow) {
      let escrow_payment = this.state.escrow_payment_changed ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
        real: this.state.escrow_payment
      }).getAmount() : fee(true);

      if (escrow_payment > 0) {
        transfer_list.push({
          from_account: this.state.from_account.get("id"),
          to_account: this.state.escrow_account.get("id"),
          amount: escrow_payment,
          asset: "1.3.0",
          memo: escrowMemo ? new Buffer(escrowMemo, "utf-8") : null,
          feeAsset: this.state.escrowFeeAssetId,
          propose_account: proposer
        });
      }
    }

    this.state.from_barter.forEach((item, index) => {
      const asset = item.from_asset;
      let amount = item.from_amount;
      sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
        real: amount,
        asset_id: asset.get("id"),
        precision: asset.get("precision")
      });
      let fromBarterMemo = this.state.memo["from_barter"][index] && this.state.memo["from_barter"][index].message;

      if (this.state.showEscrow && this.state.send_to_escrow) {
        transfer_list.push({
          from_account: this.state.from_account.get("id"),
          to_account: this.state.escrow_account.get("id"),
          amount: sendAmount.getAmount(),
          asset: asset.get("id"),
          memo: escrowMemo ? new Buffer(escrowMemo, "utf-8") : null,
          feeAsset: item.from_feeAsset ? item.from_feeAsset.asset_id : "1.3.0"
        });
      }

      transfer_list.push({
        from_account: left_account.get("id"),
        to_account: this.state.to_account.get("id"),
        amount: sendAmount.getAmount(),
        asset: asset.get("id"),
        memo: fromBarterMemo ? new Buffer(fromBarterMemo, "utf-8") : null,
        feeAsset: item.from_feeAsset ? item.from_feeAsset.asset_id : "1.3.0",
        propose_account: proposer
      });
    });

    if (this.state.showEscrow && !this.state.send_to_escrow) {
      transfer_list.push({
        from_account: this.state.escrow_account.get("id"),
        to_account: this.state.from_account.get("id"),
        amount: 1,
        asset: "1.3.0",
        memo: null,
        feeAsset: this.state.escrowFeeAssetId,
        propose_account: proposer
      });
    }

    this.state.to_barter.forEach((item, index) => {
      const asset = item.to_asset;
      let amount = item.to_amount;
      let toBarterMemo = this.state.memo["to_barter"][index] && this.state.memo["to_barter"][index].message;
      sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
        real: amount,
        asset_id: asset.get("id"),
        precision: asset.get("precision")
      });
      transfer_list.push({
        from_account: this.state.to_account.get("id"),
        to_account: this.state.from_account.get("id"),
        amount: sendAmount.getAmount(),
        asset: asset.get("id"),
        memo: toBarterMemo ? new Buffer(toBarterMemo, "utf-8") : null,
        feeAsset: item.to_feeAsset ? item.to_feeAsset.asset_id : "1.3.0",
        propose_account: proposer
      });
    });
    _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_13__["default"].transfer_list(transfer_list, this.state.proposal_fee.asset_id);
  }

  onTrxIncluded(confirm_store_state) {
    if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
      TransactionConfirmStore.unlisten(this.onTrxIncluded);
      TransactionConfirmStore.reset();
    } else if (confirm_store_state.closed) {
      TransactionConfirmStore.unlisten(this.onTrxIncluded);
      TransactionConfirmStore.reset();
    }
  }

  onMemoChanged = (type, index) => e => {
    const memos = Object.assign({}, this.state.memo);
    memos[type][index] = {
      message: e.target.value,
      shown: true
    };
    this.setState({
      memo: memos
    });
  };

  renderMemoField(type, index) {
    const {
      memo
    } = this.state;
    const memoValue = memo[type][index] && memo[type][index].message ? memo[type][index].message : "";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block transfer-input"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "left-label",
      component: "label",
      content: "transfer.memo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
      style: {
        marginBottom: 0
      },
      rows: "1",
      value: memoValue,
      onChange: this.onMemoChanged(type, index)
    }));
  }

  handleMemoOpen = (type, index) => e => {
    const memos = Object.assign({}, this.state.memo);
    memos[type][index] = {
      message: "",
      shown: true
    };
    this.setState({
      memo: memos
    });
  };

  getBalance(account, assetType) {
    return bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getAccountBalance(account, assetType);
  }

  checkAmountsTotal() {
    const {
      from_barter,
      to_barter,
      from_account,
      to_account
    } = this.state;
    let peer1Amounts = {};
    let peer2Amounts = {}; // for peer1

    from_barter.forEach(function (item) {
      if (item.from_amount) {
        if (peer1Amounts.hasOwnProperty(item.from_asset_id)) {
          peer1Amounts[item.from_asset_id] = {
            amount: Number(peer1Amounts[item.from_asset_id].amount) + Number(item.from_amount),
            precision: item.from_asset.get("precision"),
            symbol: item.from_asset.get("symbol")
          };
        } else {
          peer1Amounts[item.from_asset_id] = {
            amount: Number(item.from_amount),
            precision: item.from_asset.get("precision"),
            symbol: item.from_asset.get("symbol")
          };
        }
      }
    });

    let peer1AmountsFormated = (0,lodash_es_map__WEBPACK_IMPORTED_MODULE_14__["default"])(peer1Amounts, (item, key) => {
      let balanceOfCurrentAsset = this.getBalance(from_account, key);
      let decimals = Math.max(0, item.precision);
      let formatedBalance = balanceOfCurrentAsset ? moveDecimal(balanceOfCurrentAsset, decimals) : 0;
      item.assetId = key;

      if (item.amount > formatedBalance) {
        item.warning = true;
        item.balance = formatedBalance;
      }

      return item;
    }); // for peer2


    to_barter.forEach(function (item) {
      if (item.to_amount) {
        if (peer2Amounts.hasOwnProperty(item.to_asset_id)) {
          peer2Amounts[item.to_asset_id] = {
            amount: Number(peer2Amounts[item.to_asset_id].amount) + Number(item.to_amount),
            precision: item.to_asset.get("precision"),
            symbol: item.to_asset.get("symbol")
          };
        } else {
          peer2Amounts[item.to_asset_id] = {
            amount: Number(item.to_amount),
            precision: item.to_asset.get("precision"),
            symbol: item.to_asset.get("symbol")
          };
        }
      }
    });

    let peer2AmountsFormated = (0,lodash_es_map__WEBPACK_IMPORTED_MODULE_14__["default"])(peer2Amounts, (item, key) => {
      let balanceOfCurrentAsset = this.getBalance(to_account, key);
      let decimals = Math.max(0, item.precision);
      let formatedBalance = balanceOfCurrentAsset ? moveDecimal(balanceOfCurrentAsset, decimals) : 0;
      item.assetId = key;

      if (item.amount > formatedBalance) {
        item.warning = true;
        item.balance = formatedBalance;
      }

      return item;
    });

    this.setState({
      balanceWarning: {
        peer1: peer1AmountsFormated,
        peer2: peer2AmountsFormated
      }
    });
  }

  renderBalanceWarnings() {
    const {
      balanceWarning: {
        peer1,
        peer2
      }
    } = this.state;
    let isPeer1Warning = peer1.some(item => !!item.warning);
    let isPeer2Warning = peer2.some(item => !!item.warning);
    let peer1Text = counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.peer_left");
    let peer2Text = counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.peer_right");
    let peer1Component = isPeer1Warning ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        maxWidth: "25rem"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.balance_warning_tooltip", {
      peer: peer1Text
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), peer1.map(item => {
      if (item.warning) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            marginRight: "10px"
          },
          key: item.assetId
        }, " - " + counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.balance_warning_line", {
          asset_symbol: item.symbol,
          asset_balance: item.balance,
          asset_amount: item.amount
        })));
      }
    })) : null;
    let peer2Component = isPeer2Warning ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        maxWidth: "25rem"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.balance_warning_tooltip", {
      peer: peer2Text
    }), peer2.map(item => {
      if (item.warning) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            marginRight: "10px"
          },
          key: item.assetId
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.balance_warning_line", {
          asset_symbol: item.symbol,
          asset_balance: item.balance,
          asset_amount: item.amount
        }), ";");
      }
    })) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "barter-balance-warning"
    }, isPeer1Warning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      content: peer1Component,
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.balance_warning")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        cursor: "help"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      style: {
        display: "inline",
        marginRight: "1rem"
      },
      message: peer1Text + " " + counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.balance_warning"),
      type: "warning",
      showIcon: true
    }))), isPeer2Warning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      content: peer2Component,
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.balance_warning")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        cursor: "help"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      style: {
        display: "inline"
      },
      message: peer2Text + " " + counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.balance_warning"),
      type: "warning",
      showIcon: true
    }))));
  }

  onFeeChangedPeer1CreateProposal(asset) {
    this.setState({
      proposal_fee: asset
    });
  }

  onFeeChangedPeer1InProposal(asset) {
    let _barter = this.state.from_barter.map(item => {
      item.to_feeAsset = asset;
      return item;
    });

    this.setState({
      from_barter: _barter
    });
  }

  onFeeChangedPeer2InProposal(asset) {
    let _barter = this.state.to_barter.map(item => {
      item.to_feeAsset = asset;
      return item;
    });

    this.setState({
      to_barter: _barter
    });
  }

  onEscrowFeeChanged(asset) {
    this.setState({
      escrowFeeAssetId: asset.asset_id
    });
  }

  render() {
    let {
      from_name,
      to_name,
      from_account,
      to_account,
      from_barter,
      to_barter,
      amount_index,
      from_error,
      to_error
    } = this.state;

    let {
      from_asset_types,
      to_asset_types
    } = this._getAvailableAssets();

    let smallScreen = window.innerWidth < 850 ? true : false;
    let assetFromList = [];
    let assetToList = [];
    let assetFromSymbol = "";
    let assetToSymbol = "";

    const checkAmountValid = () => {
      for (let item of from_barter) {
        const amountValue = parseFloat(String.prototype.replace.call(item.from_amount, /,/g, ""));
        if (isNaN(amountValue) || amountValue === 0) return false;
      }

      for (let item of to_barter) {
        const amountValue = parseFloat(String.prototype.replace.call(item.to_amount, /,/g, ""));
        if (isNaN(amountValue) || amountValue === 0) return false;
      }

      return true;
    };

    const explictPrice = () => {
      let result = "";

      if (checkAmountValid()) {
        const fromAmount = parseFloat(from_barter[0].from_amount);
        const toAmount = parseFloat(to_barter[0].to_amount);
        result = fromAmount / toAmount;
      }

      return result;
    };

    const fee = from => {
      console.log(from_barter);
      let fee = 0;

      if (from) {
        fee = fee;
        from_barter.forEach(item => {
          fee += item.from_feeAsset._real_amount;
        });
      } else {
        to_barter.forEach(item => {
          fee += item.to_feeAsset._real_amount;
        });
      }

      return fee;
    };

    const balanceError = () => {
      for (let item of from_barter) {
        if (item.from_balanceError) {
          return true;
        }
      }

      for (let item of to_barter) {
        if (item.from_balanceError) {
          return true;
        }
      }

      return false;
    };

    let isEscrowNotValid = this.state.showEscrow && !this.state.escrow_account; // should the user be only allowed to request for existing funds?
    // balanceError() ||

    const isSubmitNotValid = !from_account || !to_account || from_account.get("id") == to_account.get("id") || to_error || !checkAmountValid() || from_error || isEscrowNotValid;

    const balance = (account, balanceError, asset_types, asset) => {
      if (account && account.get("balances")) {
        let account_balances = account.get("balances").toJS();

        let _error = balanceError ? "has-error" : "";

        if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getAsset(asset_types[0]);

        if (asset_types.length > 0) {
          let current_asset_id = asset ? asset.get("id") : asset_types[0];
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
            component: "span",
            content: "transfer.available"
          }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: _error,
            style: {
              borderBottom: "#A09F9F 1px dotted",
              cursor: "pointer"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
            balance: account_balances[current_asset_id]
          })));
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: _error
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
            content: "transfer.errors.noFunds"
          })));
        }
      }
    };

    let fromAmountSelector = from_barter.map((item, index) => {
      let assetSymbol = "";

      if (item.from_asset) {
        assetSymbol = item.from_asset.get("symbol");
        assetFromList.push([item.from_amount || 0, assetSymbol].join(" "));
      }

      let isMemoShown = this.state.memo["from_barter"][index] && this.state.memo["from_barter"][index].shown;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: amount_index++
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          position: "relative"
        }
      }, !isMemoShown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.add_memo_field"),
        placement: "topLeft"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: this.handleMemoOpen("from_barter", index),
        size: "small",
        icon: "message",
        className: "add-memo-btn"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "showcases.barter.bartering_asset",
        style: {
          marginBottom: "1rem"
        },
        amount: item.from_amount,
        onChange: this.onFromAmountChanged.bind(this, index),
        asset: from_asset_types.length > 0 && item.from_asset ? item.from_asset.get("id") : item.from_asset_id ? item.from_asset_id : from_asset_types[0],
        assets: from_asset_types,
        display_balance: balance(from_account, item.from_balanceError, from_asset_types, item.from_asset),
        allowNaN: true
      })), isMemoShown && this.renderMemoField("from_barter", index));
      assetFromSymbol = assetSymbol;
    });
    let toAmountSelector = to_barter.map((item, index) => {
      let assetSymbol = "";

      if (item.to_asset) {
        assetSymbol = item.to_asset.get("symbol");
        assetToList.push([item.to_amount || 0, item.to_asset.get("symbol")].join(" "));
      }

      let isMemoShown = this.state.memo["to_barter"][index] && this.state.memo["to_barter"][index].shown;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: amount_index++
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          position: "relative"
        }
      }, !isMemoShown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.add_memo_field"),
        placement: "topLeft"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: this.handleMemoOpen("to_barter", index),
        size: "small",
        icon: "message",
        className: "add-memo-btn"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "showcases.barter.bartering_asset",
        style: {
          marginBottom: "1rem"
        },
        amount: item.to_amount,
        onChange: this.onToAmountChanged.bind(this, index),
        asset: to_asset_types.length > 0 && item.to_asset ? item.to_asset.get("id") : item.to_asset_id ? item.to_asset_id : to_asset_types[0],
        assets: to_asset_types,
        display_balance: balance(to_account, item.to_balanceError, to_asset_types, item.to_asset),
        allowNaN: true
      })), isMemoShown && this.renderMemoField("to_barter", index));
      assetToSymbol = assetSymbol;
    });
    let account_from = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Card, {
      style: {
        borderRadius: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "showcases.barter.peer_left"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "showcases.barter.account",
      placeholder: "placeholder",
      style: {
        marginTop: "0.5rem",
        marginBottom: "1rem"
      },
      allowPubKey: true,
      allowUppercase: true,
      account: from_account,
      accountName: from_name,
      onChange: this.fromChanged.bind(this),
      onAccountChanged: this.onFromAccountChanged.bind(this),
      hideImage: true,
      typeahead: true
    }), from_account && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, fromAmountSelector, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "10px",
        paddingBottom: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: this.addFromAmount.bind(this),
      disabled: !from_account || !this.state.from_barter[this.state.from_barter.length - 1].from_amount
    }, "+ Add asset"))));
    let account_to = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Card, {
      style: {
        borderRadius: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "showcases.barter.peer_right"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "showcases.barter.account",
      placeholder: "placeholder",
      style: {
        marginTop: "0.5rem",
        marginBottom: "1rem"
      },
      allowPubKey: true,
      allowUppercase: true,
      account: to_account,
      accountName: to_name,
      onChange: this.toChanged.bind(this),
      onAccountChanged: this.onToAccountChanged.bind(this),
      hideImage: true,
      typeahead: true
    }), to_account && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, toAmountSelector, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "10px",
        paddingBottom: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: this.addToAmount.bind(this),
      disabled: !to_account || !this.state.to_barter[this.state.to_barter.length - 1].to_amount
    }, "+ Add asset"))));
    let action_error_key = "showcases.barter.not_complete";

    if (isSubmitNotValid) {
      if (!from_account) {
        action_error_key = "showcases.barter.error_fill_in_peer_left_name";
      } else if (!to_account) {
        action_error_key = "showcases.barter.error_fill_in_peer_right_name";
      } else if (from_account.get("id") == to_account.get("id")) {
        action_error_key = "showcases.barter.error_same_name";
      } else if (!checkAmountValid()) {
        action_error_key = "showcases.barter.error_fill_in_valid_asset_amount";
      } else if (isEscrowNotValid) {
        action_error_key = "showcases.barter.error_fill_in_escrow_name";
      } else if (this.state.showEscrow && (from_account.get("id") == this.state.escrow_account.get("id") || to_account.get("id") == this.state.escrow_account.get("id"))) {
        action_error_key = "showcases.barter.error_same_name_escrow";
      }
    }

    let offers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Card, {
      style: {
        borderRadius: "10px"
      }
    }, !isSubmitNotValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "left-label",
      style: {
        fontSize: "1rem"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.action", {
      peer_left: from_name,
      assets_left: assetFromList.join(", "),
      peer_right: to_name,
      assets_right: assetToList.join(", ")
    }), this.state.showEscrow && !this.state.send_to_escrow && counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.escrow_as_witness", {
      escrow: this.state.escrow_account.get("name")
    }), this.state.showEscrow && this.state.send_to_escrow && counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.escrow_as_custodian", {
      escrow: this.state.escrow_account.get("name")
    })), isSubmitNotValid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "left-label",
      style: {
        fontSize: "1rem"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate(action_error_key)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.add_escrow_tooltip"),
      placement: "topRight"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: this.state.showEscrow ? "remove_escrow" : "add_escrow",
      onClick: this.toggleEscrow.bind(this),
      style: {
        float: "right"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate(this.state.showEscrow ? "showcases.barter.remove_escrow" : "showcases.barter.add_escrow"))), from_barter.length === 500 && to_barter.length === 500 ?
    /*#__PURE__*/
    // deactivate for now
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "amount-selector",
      style: this.props.style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "left-label",
      component: "label",
      content: "transfer.explict_price"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label input-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Input, {
      disabled: false,
      type: "text",
      value: explictPrice()
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-label select floating-dropdown"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dropdown-wrapper inactive"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, `${assetFromSymbol}/${assetToSymbol}`))))) : "");
    let totalFeeFrom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Card, {
      style: {
        borderRadius: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "showcases.barter.peer_left"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate(this.state.send_to_escrow ? "showcases.barter.fee_due_now_tooltip" : "showcases.barter.fee_when_proposal_executes_tooltip")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barter-fee-selector"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: this.state.send_to_escrow ? "showcases.barter.fee_due_now" : "showcases.barter.fee_when_proposal_executes",
      account: from_account,
      transaction: {
        type: "transfer",
        options: ["price_per_kbyte"],
        data: {
          type: "memo",
          content: null
        }
      },
      onChange: this.onFeeChangedPeer1InProposal.bind(this),
      multiplier: from_barter.length
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.proposal_fee_tooltip")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barter-fee-selector"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "showcases.barter.proposal_fee",
      account: from_account,
      transaction: {
        type: "proposal_create",
        options: ["price_per_kbyte"],
        data: {
          type: "memo",
          content: null
        }
      },
      onChange: this.onFeeChangedPeer1CreateProposal.bind(this)
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.total_fees_tooltip")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "showcases.barter.total_fees",
      className: "left-label",
      component: "label",
      fee: fee(true) + this.state.proposal_fee._real_amount,
      asset: "GPH"
    }))));
    let totalFeeTo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Card, {
      style: {
        borderRadius: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "showcases.barter.peer_right"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.fee_when_proposal_executes_tooltip")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barter-fee-selector"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "showcases.barter.fee_when_proposal_executes",
      account: to_account,
      transaction: {
        type: "transfer",
        options: ["price_per_kbyte"],
        data: {
          type: "memo",
          content: null
        }
      },
      onChange: this.onFeeChangedPeer2InProposal.bind(this),
      multiplier: to_barter.length
    }))));
    let feeForEscrow = null;

    if (this.state.showEscrow) {
      feeForEscrow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Card, {
        style: {
          borderRadius: "10px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "showcases.barter.escrow_account"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.fee_when_proposal_executes_tooltip")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "barter-fee-selector"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "showcases.barter.fee_when_proposal_executes",
        account: this.state.escrow_account,
        transaction: {
          type: "transfer",
          options: ["price_per_kbyte"],
          data: {
            type: "memo",
            content: null
          }
        },
        onChange: this.onEscrowFeeChanged.bind(this),
        multiplier: from_barter.length
      }))));
    }

    let intro = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Card, {
      style: {
        borderRadius: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.new_barter_tooltip"),
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "showcases.barter.new_barter"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      type: "question-circle",
      theme: "filled"
    }))));
    let escrow = null;
    let isEscrowMemoShown = this.state.memo["escrow"][0] && this.state.memo["escrow"][0].shown;
    let escrow_payment = this.state.escrow_payment_changed ? this.state.escrow_payment : fee(true);

    if (this.state.showEscrow) {
      escrow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Card, {
        style: {
          borderRadius: "10px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "showcases.barter.escrow_account",
        placeholder: "placeholder",
        style: {
          marginBottom: "1rem"
        },
        allowPubKey: true,
        allowUppercase: true,
        account: this.state.escrow_account,
        accountName: this.state.escrow_account_name,
        onChange: this.escrowAccountChanged.bind(this),
        onAccountChanged: this.onEscrowAccountChanged.bind(this),
        hideImage: true,
        typeahead: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.send_to_escrow_tooltip")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Switch, {
        style: {
          margin: 6
        },
        checked: this.state.send_to_escrow,
        onChange: this.onToggleSendToEscrow.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "showcases.barter.send_to_escrow"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          position: "relative"
        }
      }, !isEscrowMemoShown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.add_memo_field"),
        placement: "topLeft"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: this.handleMemoOpen("escrow", 0),
        size: "small",
        icon: "message",
        className: "add-memo-btn"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.escrow_payment_tooltip"),
        placement: "topLeft"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "showcases.barter.escrow_payment",
        disabled: false,
        amount: escrow_payment,
        onChange: this._updateEscrowFee.bind(this),
        style: {
          margin: "1rem 0"
        },
        asset: "1.3.0",
        assets: ["1.3.0"],
        error: this.state.hasPoolBalance === false ? "transfer.errors.insufficient" : null,
        scroll_length: 2
      }))), isEscrowMemoShown && this.renderMemoField("escrow", 0)));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "center",
      style: {
        padding: "10px",
        maxWidth: "80rem",
        width: "100%",
        margin: "0 auto"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Card, null, smallScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, intro)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, account_from)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, account_to)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, offers)), escrow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, escrow)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, totalFeeFrom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, totalFeeTo)), feeForEscrow != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, feeForEscrow))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, intro)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      span: 12,
      style: {
        padding: "10px"
      }
    }, account_from), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      span: 12,
      style: {
        padding: "10px"
      }
    }, account_to)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, offers)), escrow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        padding: "10px"
      }
    }, escrow)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      span: 12,
      style: {
        padding: "10px"
      }
    }, totalFeeFrom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      span: 12,
      style: {
        padding: "10px"
      }
    }, totalFeeTo, feeForEscrow))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "barter-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("showcases.barter.propose_tooltip"),
      placement: "topLeft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: "propose",
      disabled: isSubmitNotValid,
      onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("propose"))), !isSubmitNotValid && this.renderBalanceWarnings())));
  }

  _updateEscrowFee(e) {
    this.setState({
      escrow_payment_changed: true,
      escrow_payment: e.amount
    });
  }

  onToggleSendToEscrow() {
    this.setState({
      send_to_escrow: !this.state.send_to_escrow
    });
  }

  toggleEscrow() {
    this.setState({
      showEscrow: !this.state.showEscrow
    });
  }

}

/***/ }),

/***/ 3041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2074);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2049);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1804);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(426);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(632);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2718);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(578);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1813);
/* harmony import */ var _Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2051);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(420);















class Borrow extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      isBorrowBaseModalVisible: false,
      selectedAsset: "1.3.27",
      step: 0
    };
    this.steps = [{
      key: "introduction",
      icon: "borrow"
    }, {
      key: "concept",
      has_legend: true
    }, {
      key: "setup",
      has_legend: true
    }, {
      key: "benefits",
      has_legend: true
    }, {
      key: "risks",
      has_legend: true
    }];
    this.showBorrowModal = this.showBorrowModal.bind(this);
    this.hideBorrowModal = this.hideBorrowModal.bind(this);
  }

  showBorrowModal() {
    // needs a known account
    if (!this.props.currentAccount) {
      actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock().then(() => {
        this.setState({
          isBorrowBaseModalVisible: true
        });
      }).catch(() => {});
    } else {
      this.setState({
        isBorrowBaseModalVisible: true
      });
    }
  }

  hideBorrowModal() {
    this.setState({
      isBorrowBaseModalVisible: false
    });
  }

  next() {
    let step = this.state.step + 1;
    if (step >= this.steps.length) step = this.steps.length;
    this.setState({
      step
    });
  }

  prev() {
    let step = this.state.step - 1;
    if (step < 0) step = 0;
    this.setState({
      step
    });
  }

  onAssetChange(selected_asset) {
    this.setState({
      selectedAsset: selected_asset
    });
  }

  render() {
    let currentAccount = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getAccount(this.props.currentAccount);
    let accountLoaded = !(!currentAccount || typeof currentAccount === "string");
    const current = this.state.step;
    const tinyScreen = window.innerWidth <= 800;
    const started = this.state.step > 0;
    const selectedAssetObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getAsset(this.state.selectedAsset);
    let steps = this.steps;
    let legend = null;

    if (current < steps.length) {
      try {
        if (steps[current].has_legend) {
          legend = counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("showcases.borrow.steps_" + steps[current].key + ".text_legend");
          legend = legend.split("\n").map(item => {
            return item.split(":");
          });
        }
      } catch (err) {
        legend = counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("showcases.borrow.steps_" + steps[current].key + ".text_legend");
      }
    }

    let finishedCard = null;

    if (current >= steps.length) {
      finishedCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "center-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "showcases.borrow.choose",
        component: "h4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          width: "12rem",
          marginBottom: "1rem"
        },
        assets: ["1.3.27" // gpUSD

        /*"1.3.120",
        "1.3.121",
        "1.3.1325",
        "1.3.105",
        "1.3.106",
        "1.3.103"*/
        ],
        value: this.state.selectedAsset,
        onChange: this.onAssetChange.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("showcases.borrow.borrow_tooltip"),
        placement: "bottom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "primary",
        style: {
          width: "12rem"
        },
        disabled: this.state.selectedAsset !== null && accountLoaded ? currentAccount.get("id") === "1.2.3" : true,
        onClick: this.showBorrowModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "exchange.borrow"
      }))))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        align: "center",
        display: "flex",
        paddingTop: "1rem",
        justifyContent: "center"
      },
      onKeyDown: this.onKeyDown.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Card, {
      style: {
        borderRadius: "50px",
        width: "70%",
        maxWidth: "70rem",
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "h1",
      content: finishedCard != null ? "showcases.borrow.now_ready" : "showcases.borrow.title_long"
    })), started && (!tinyScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Steps, {
      progressDot: true,
      current: current - 1
    }, steps.map((item, index) => {
      if (index == 0) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Steps.Step, {
        key: item.key,
        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("showcases.borrow.steps_" + item.key + ".title")
      });
    })) : current < this.steps.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, current + ". ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "showcases.borrow.steps_" + steps[current].key + ".title"
    })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }
    }, finishedCard != null && finishedCard, finishedCard == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Card, {
      onKeyDown: this.onKeyDown.bind(this)
    }, !!steps[current].icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "steps[current].icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "h2",
      content: "showcases.borrow.steps_" + steps[current].key + ".title_within"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "p",
      content: "showcases.borrow.steps_" + steps[current].key + ".text"
    }), !!steps[current].has_legend && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, legend.map((content, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        key: "borrow_subp_" + index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, content[0]), ": ", content[1]);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "steps-action"
    }, current < steps.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      title: current == 0 ? counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("showcases.borrow.navigate_with_keys") : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
      type: "primary",
      onClick: () => this.next(),
      tabIndex: "0",
      ref: "next",
      onKeyDown: this.onKeyDown.bind(this)
    }, current == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "showcases.borrow.get_started"
    }), current > 0 && current < steps.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "showcases.borrow.next"
    }), current === steps.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "showcases.borrow.do_it"
    }))), current > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
      style: {
        marginLeft: 8
      },
      onClick: () => this.prev(),
      ref: "previous",
      onKeyDown: this.onKeyDown.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "showcases.borrow.previous"
    })))), accountLoaded && !!selectedAssetObject && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      visible: this.state.isBorrowBaseModalVisible,
      hideModal: this.hideBorrowModal,
      quoteAssetObj: selectedAssetObject.get("id"),
      backingAssetObj: selectedAssetObject.getIn(["bitasset", "options", "short_backing_asset"]),
      accountObj: currentAccount
    }));
  }

  componentDidMount() {
    this.focusDiv();
  }

  componentDidUpdate() {
    this.focusDiv();
  }

  focusDiv() {
    let current = this.state.step;
    let steps = this.steps;

    if (current < steps.length && !!this.refs.next) {
      react_dom__WEBPACK_IMPORTED_MODULE_13__.findDOMNode(this.refs.next).focus();
    } else if (current == steps.length && !!this.refs.previous) {
      react_dom__WEBPACK_IMPORTED_MODULE_13__.findDOMNode(this.refs.previous).focus();
    }
  }

  onKeyDown(e) {
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 39 || e.key == "ArrowRight") {
      e.preventDefault();
      e.stopPropagation();
      this.next();
    } else if (e.keyCode === 37 || e.key == "ArrowLeft") {
      e.preventDefault();
      e.stopPropagation();
      this.prev();
    }
  }

}

Borrow = (0,react_debounce_render__WEBPACK_IMPORTED_MODULE_4__["default"])(Borrow, 50, {
  leading: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_6__.connect)(Borrow, {
  listenTo() {
    return [_stores_AccountStore__WEBPACK_IMPORTED_MODULE_10__["default"]];
  },

  getProps() {
    return {
      currentAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().passwordAccount
    };
  }

}));

/***/ }),

/***/ 3046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(510);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(426);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
/* harmony import */ var _Modal_DirectDebitModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3047);
/* harmony import */ var _Modal_DirectDebitClaimModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3049);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2375);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(631);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2615);












class DirectDebit extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isClaimModalVisible: false,
      filterString: "",
      operationData: "",
      operationClaimData: "",
      withdraw_permission_list: []
    };
  }

  _update() {
    let currentAccount = this.props.currentAccount;

    if ((0,_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_10__.hasLoaded)(currentAccount)) {
      // for now, fetch manually
      Promise.all([bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__.Apis.instance().db_api().exec("get_withdraw_permissions_by_giver", [currentAccount.get("id"), "1.12.0", 100]), bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__.Apis.instance().db_api().exec("get_withdraw_permissions_by_recipient", [currentAccount.get("id"), "1.12.0", 100])]).then(results => {
        let withdraw_permission_list = [];
        withdraw_permission_list = withdraw_permission_list.concat(results[0]);
        withdraw_permission_list = withdraw_permission_list.concat(results[1]);
        withdraw_permission_list.forEach(item => {
          try {
            // to trigger caching for modal
            bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.getAccount(item.authorized_account, false);
            bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.getAccount(item.withdraw_from_account, false);
          } catch (err) {}
        });
        this.setState({
          withdraw_permission_list: withdraw_permission_list
        });
      });
    }
  }

  componentDidMount() {
    this._update();
  }

  UNSAFE_componentWillReceiveProps() {
    // always update, relies on push from backend when account permission change
    this._update();
  }

  showModal = operation => () => {
    this.setState({
      isModalVisible: true,
      operationData: operation
    });
  };
  hideModal = () => {
    this.setState({
      isModalVisible: false,
      operation: null
    });
  };
  showClaimModal = operation => () => {
    this.setState({
      isClaimModalVisible: true,
      operationClaimData: operation
    });
  };
  hideClaimModal = () => {
    this.setState({
      isClaimModalVisible: false
    });
  };
  _onFilter = e => {
    e.preventDefault();
    this.setState({
      filterString: e.target.value.toLowerCase()
    });
  };
  handleDeleteProposal = permission => {
    console.log("delete permissin");
    _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_9__["default"].deleteWithdrawPermission(permission.id, permission.withdraw_from_account, permission.authorized_account).then(() => {// nothing to do, user will see popup
    }).catch(err => {
      this.setState({
        errorMessage: err.toString()
      });
      console.error(err);
    });
  };

  render() {
    const {
      isModalVisible,
      isClaimModalVisible,
      withdraw_permission_list,
      operationData,
      operationClaimData,
      filterString
    } = this.state;
    let currentAccount = this.props.currentAccount;
    let dataSource = null;

    if (withdraw_permission_list.length) {
      dataSource = withdraw_permission_list.map(item => {
        const asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.getObject(item.withdrawal_limit.asset_id, false);
        const authorizedAccountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.getAccountName(item.authorized_account);
        const withdrawFromAccountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.getAccountName(item.withdraw_from_account);
        const period_start = new Date(item.period_start_time + "Z").getTime();
        const now = new Date().getTime();
        const timePassed = now - period_start;
        let currentPeriodExpires = "";
        const periodMs = item.withdrawal_period_sec * 1000;

        if (timePassed < 0) {
          console.log("first period is not started");
        } else {
          const currentPeriodNum = Math.ceil(timePassed / periodMs);
          currentPeriodExpires = period_start + periodMs * currentPeriodNum;
        }

        return {
          key: item.id,
          id: item.id,
          type: item.authorized_account == currentAccount.get("id") ? "payee" : "payer",
          authorized: authorizedAccountName,
          from: withdrawFromAccountName,
          to: authorizedAccountName,
          limit: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(item.withdrawal_limit.amount, asset) + " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_8__["default"], {
            asset: item.withdrawal_limit.asset_id
          })),
          until: currentPeriodExpires ? counterpart__WEBPACK_IMPORTED_MODULE_3___default().localize(new Date(currentPeriodExpires), {
            type: "date",
            format: "full"
          }) : counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("showcases.direct_debit.first_period_not_started"),
          expires: counterpart__WEBPACK_IMPORTED_MODULE_3___default().localize(new Date(item.expiration + "Z"), {
            type: "date",
            format: "full"
          }),
          claimed: item.claimed_this_period == 0 ? "-" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(item.claimed_this_period, asset) + " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_8__["default"], {
            asset: item.withdrawal_limit.asset_id
          })),
          rawData: { ...item
          }
        };
      });
      dataSource.length && dataSource.filter(item => {
        // if filter is chained to map, possible bugs with initial render of table
        return item.authorized && item.authorized.indexOf(filterString) !== -1;
      });
    }

    const columns = [{
      title: "#",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => {
        return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
      }
    }, {
      title: "From",
      dataIndex: "from",
      key: "from",
      sorter: (a, b) => {
        return a.from > b.from ? 1 : a.from < b.from ? -1 : 0;
      }
    }, {
      title: "To",
      dataIndex: "to",
      key: "to",
      sorter: (a, b) => {
        return a.to > b.to ? 1 : a.to < b.to ? -1 : 0;
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("showcases.direct_debit.current_period_expires"),
      dataIndex: "until",
      key: "until",
      sorter: (a, b) => {
        return a.until > b.until ? 1 : a.until < b.until ? -1 : 0;
      }
    }, {
      title: "Limit",
      dataIndex: "limit",
      key: "limit",
      sorter: (a, b) => {
        const limit1 = a.rawData.withdrawal_limit.amount;
        const limit2 = b.rawData.withdrawal_limit.amount;
        return limit1 - limit2;
      }
    }, {
      title: "Claimed",
      dataIndex: "claimed",
      key: "claimed",
      sorter: (a, b) => {
        const available1 = a.rawData.claimed_this_period;
        const available2 = a.rawData.claimed_this_period;
        return available2 - available1;
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("showcases.direct_debit.expires"),
      dataIndex: "expires",
      key: "expires",
      sorter: (a, b) => {
        return a.expires > b.expires ? 1 : a.expires < b.expires ? -1 : 0;
      }
    }, {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        if (record.type) {
          return record.type === "payer" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, {
            style: {
              marginRight: "10px"
            },
            onClick: () => this.handleDeleteProposal(record.rawData)
          }, counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("showcases.direct_debit.delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: this.showModal({
              type: "update",
              payload: record.rawData
            })
          }, counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("showcases.direct_debit.update"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            onClick: this.showClaimModal({
              type: "claim",
              payload: record.rawData
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, null, counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("showcases.direct_debit.claim")));
        } else {
          return null;
        }
      }
    }];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "direct-debit-view"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Card, {
      className: "direct-debit-table-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      span: 24,
      style: {
        padding: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: "30px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Input, {
      className: "direct-debit-table__filter-input",
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("explorer.witnesses.filter_by_name"),
      onChange: this._onFilter,
      style: {
        width: "200px",
        marginRight: "30px"
      },
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        type: "search"
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: this.showModal({
        type: "create",
        payload: null
      }),
      style: {
        marginRight: "30px"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("showcases.direct_debit.create_new_mandate")), !!this.state.errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "red"
    }, this.state.errorMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Table, {
      columns: columns,
      dataSource: dataSource,
      pagination: false,
      className: "direct-debit-table"
    }))), isModalVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal_DirectDebitModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isModalVisible: isModalVisible,
      hideModal: this.hideModal,
      operation: operationData
    }) : null, isClaimModalVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal_DirectDebitClaimModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isModalVisible: isClaimModalVisible,
      hideModal: this.hideClaimModal,
      operation: operationClaimData
    }) : null));
  }

}

DirectDebit = (0,_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_10__.bindToCurrentAccount)(DirectDebit);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectDebit);

/***/ }),

/***/ 3042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(426);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(596);
/* harmony import */ var _Modal_HtlcModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3043);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2375);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2615);









class Htlc extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      filterString: "",
      operationData: undefined,
      htlc_list: [],
      tableIsLoading: false
    };
    this.hasLoadedOnce = null;
  }

  shouldComponentUpdate(np, ns) {
    return this.props.currentAccount !== np.currentAccount || JSON.stringify(this.state.htlc_list) !== JSON.stringify(ns.htlc_list) || this.state.isModalVisible !== ns.isModalVisible || this.state.tableIsLoading !== ns.tableIsLoading || this.state.filterString !== ns.filterString;
  }

  async _update() {
    let currentAccount = this.props.currentAccount;
    const accountId = currentAccount.get("id");

    if (false) {}

    this.hasLoadedOnce = currentAccount.get("id");
    this.setState({
      tableIsLoading: true
    });
    const htlc_from = this.props.currentAccount.get("htlcs_from").toJS() || [];
    const htlc_to = this.props.currentAccount.get("htlcs_to").toJS() || [];
    this.setState({
      htlc_list: htlc_from.concat(htlc_to).map(_item => bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.ChainStore.getObject(_item)).map(_item => !!_item.toJS ? _item.toJS() : undefined),
      tableIsLoading: false
    });
  }

  componentDidMount() {
    this._update();
  }

  componentDidUpdate(prevProps) {
    // always update, relies on push from backend when account permission change
    this._update();
  }

  showModal = operation => async () => {
    if (operation.payload) {
      // cache for modal
      await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.FetchChainObjects)(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.ChainStore.getAccount, [operation.payload.transfer.to], undefined, {});
      await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.FetchChainObjects)(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.ChainStore.getAccount, [operation.payload.transfer.from], undefined, {});
      await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.FetchChainObjects)(bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.ChainStore.getAsset, [operation.payload.transfer.asset_id]);
    }

    this.setState({
      isModalVisible: true,
      operationData: operation
    });
  };
  hideModal = () => {
    this.setState({
      isModalVisible: false,
      operation: null
    });
  };
  _onFilter = e => {
    e.preventDefault();
    this.setState({
      filterString: e.target.value.toLowerCase()
    });
  };

  render() {
    const {
      isModalVisible,
      htlc_list,
      operationData,
      filterString
    } = this.state;
    let currentAccount = this.props.currentAccount;
    let dataSource = null;

    if (htlc_list.length) {
      dataSource = htlc_list.map(item => {
        const to = item.transfer.to;
        const from = item.transfer.from;
        const amount = {
          amount: item.transfer.amount,
          asset_id: item.transfer.asset_id
        };
        const expiration = item.conditions.time_lock.expiration;
        const asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.ChainStore.getAsset(amount.asset_id, false);
        const toAccountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.ChainStore.getAccountName(to) || to;
        const fromAccountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.ChainStore.getAccountName(from) || from;
        return {
          key: item.id,
          id: item.id,
          type: to == currentAccount.get("id") ? "payee" : "payer",
          from: fromAccountName,
          to: toAccountName,
          amount: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, asset ? common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].get_asset_amount(amount.amount, asset) + " " : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_6__["default"], {
            asset: amount.asset_id
          })),
          hash: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
            title: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("htlc.preimage_hash_explanation")
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "(" + item.conditions.hash_lock.preimage_size + "," + item.conditions.hash_lock.preimage_hash[0] + "): " + item.conditions.hash_lock.preimage_hash[1])),
          expires: expiration,
          rawData: { ...item
          }
        };
      });
      dataSource.length && dataSource.filter(item => {
        // if filter is chained to map, possible bugs with initial render of table
        return item.to && item.to.indexOf(filterString) !== -1;
      });
    }

    const columns = [{
      title: "#",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => {
        return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("showcases.htlc.from"),
      dataIndex: "from",
      key: "from",
      sorter: (a, b) => {
        return a.from > b.from ? 1 : a.from < b.from ? -1 : 0;
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("showcases.htlc.to"),
      dataIndex: "to",
      key: "to",
      sorter: (a, b) => {
        return a.to > b.to ? 1 : a.to < b.to ? -1 : 0;
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("showcases.htlc.amount"),
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) => {
        const limit1 = a.rawData.op[1].amount.amount;
        const limit2 = b.rawData.op[1].amount.amount;
        return limit1 - limit2;
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("showcases.htlc.hash"),
      dataIndex: "hash",
      key: "hash"
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("showcases.htlc.expires"),
      dataIndex: "expires",
      key: "expires",
      sorter: (a, b) => {
        return a.expires > b.expires ? 1 : a.expires < b.expires ? -1 : 0;
      },
      render: (text, record) => {
        return counterpart__WEBPACK_IMPORTED_MODULE_2___default().localize(new Date(common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].makeISODateString(text)), {
          type: "date",
          format: "full"
        });
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("showcases.htlc.actions"),
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        if (record.type) {
          return record.type === "payer" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
            style: {
              marginRight: "10px"
            },
            onClick: this.showModal({
              type: "extend",
              payload: record.rawData
            })
          }, counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("showcases.htlc.extend"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            onClick: this.showModal({
              type: "redeem",
              payload: record.rawData
            })
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, null, counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("showcases.htlc.redeem")));
        } else {
          return null;
        }
      }
    }];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "direct-debit-view"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Card, {
      className: "direct-debit-table-card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Col, {
      span: 24,
      style: {
        padding: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: "30px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, {
      className: "direct-debit-table__filter-input",
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("explorer.witnesses.filter_by_name"),
      onChange: this._onFilter,
      style: {
        width: "200px",
        marginRight: "30px"
      },
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        type: "search"
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: this.showModal({
        type: "create",
        payload: null
      }),
      style: {
        marginRight: "30px"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("showcases.htlc.create_htlc")), !!this.state.errorMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "red"
    }, this.state.errorMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Table, {
      columns: columns,
      dataSource: dataSource,
      pagination: false,
      className: "direct-debit-table",
      loading: this.state.tableIsLoading
    }))), isModalVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal_HtlcModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isModalVisible: isModalVisible,
      hideModal: this.hideModal,
      operation: operationData,
      fromAccount: this.props.currentAccount
    }) : null));
  }

}

Htlc = (0,_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_7__.bindToCurrentAccount)(Htlc);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Htlc);

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

/***/ 2615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasLoaded": () => (/* binding */ hasLoaded),
/* harmony export */   "bindToCurrentAccount": () => (/* binding */ bindToCurrentAccount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1926);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2074);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1927);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1804);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(578);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1905);







const hasLoaded = function hasLoaded(currentAccount) {
  return !!currentAccount && !!currentAccount.get("id");
};
const bindToCurrentAccount = function bindToCurrentAccount(WrappedComponent) {
  // ...and returns another component...
  let BindToCurrentAccount = class BindToCurrentAccount extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static propTypes = {
      currentAccount: _ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount
    };
    static defaultProps = {
      // set subscription
      autosubscribe: true
    };

    constructor(props) {
      super(props);
    }

    render() {
      if (hasLoaded(this.props.currentAccount)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, this.props);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__["default"], null);
      }
    }

  };
  BindToCurrentAccount = (0,_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(BindToCurrentAccount);
  BindToCurrentAccount = (0,react_debounce_render__WEBPACK_IMPORTED_MODULE_2__["default"])(BindToCurrentAccount, 100, {
    leading: false
  });
  return (0,alt_react__WEBPACK_IMPORTED_MODULE_4__.connect)(BindToCurrentAccount, {
    listenTo() {
      return [_stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },

    getProps() {
      let currentAccount = _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().passwordAccount || "please-login";
      return {
        currentAccount: new Map([["name", currentAccount]])
      };
    }

  });
};

/***/ }),

/***/ 3050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2082);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




class LimitToWithdraw extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    hide_asset: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
  };
  static defaultProps = {
    hide_asset: false
  };

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
      amount: this.props.amount,
      asset: this.props.assetId,
      asPercentage: this.props.asPercentage,
      assetInfo: this.props.assetInfo,
      replace: this.props.replace,
      hide_asset: this.props.hide_asset
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LimitToWithdraw);

/***/ }),

/***/ 3048:
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);










class PeriodSelector extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    label: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    // a translation key for the label
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
    tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
    error: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    scroll_length: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number)
  };
  static defaultProps = {
    disabled: false,
    tabIndex: 0
  };

  getNumericEventValue(e) {
    var input = null;

    if (e.target.value == "" || e.target.value == null || e.target.value < 0) {
      return "";
    } else if (e.target.value === 0) {
      return 0;
    } else if (parseFloat(e.target.value) == e.target.value) {
      input = e.target.value.trim();
    } else {
      input = parseFloat(e.target.value.trim().replace(/[^\d.-]/g, "")) || 0;
    }

    return input;
  }

  onInputChange = e => {
    const {
      onChange,
      periodType
    } = this.props;

    if (onChange) {
      onChange({
        amount: this.getNumericEventValue(e),
        type: periodType
      });
    }
  };
  onTypeChange = type => {
    const {
      onChange,
      inputValue
    } = this.props;

    if (onChange) {
      onChange({
        amount: inputValue,
        type: type
      });
    }
  };

  render() {
    const {
      inputValue,
      values,
      entries,
      periodType,
      tabIndex,
      placeholder,
      disabled,
      scroll_length
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "amount-selector",
      style: this.props.style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "left-label",
      component: "label",
      content: this.props.label
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label input-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "input-addon-before"
    }, "Each"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      disabled: disabled,
      type: "number",
      value: inputValue || "",
      placeholder: placeholder,
      onChange: this.onInputChange,
      tabIndex: tabIndex,
      style: {
        paddingLeft: "70px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-label select floating-dropdown"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FloatingDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      entries: entries,
      values: values,
      value: periodType && periodType.name,
      onChange: this.onTypeChange,
      scroll_length: scroll_length
    }))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeriodSelector);

/***/ }),

/***/ 3044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(510);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(630);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(633);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(426);
/* provided dependency */ var Buffer = __webpack_require__(432)["Buffer"];






const calculateHash = (cipher, preimage) => {
  let preimage_hash_calculated = null;

  switch (cipher) {
    case "sha256":
      preimage_hash_calculated = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.hash.sha256(preimage);
      break;

    case "ripemd160":
      preimage_hash_calculated = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.hash.ripemd160(preimage);
      break;

    case "sha1":
      throw new Error("sha1 is not considered a secure hashing algorithm, plaase use sha256");
      break;

    default:
      throw new Error("Wrong cipher name provided when creating htlc op");
  }

  return preimage_hash_calculated;
};

const getCipherInt = cipher => {
  let preimage_hash_cipher = null;

  switch (cipher) {
    case "sha256":
      preimage_hash_cipher = 2;
      break;

    case "ripemd160":
      preimage_hash_cipher = 0;
      break;

    case "sha1":
      throw new Error("sha1 is not considered a secure hashing algorithm, plaase use sha256");
      break;

    default:
      throw new Error("Wrong cipher name provided when creating htlc op");
  }

  return preimage_hash_cipher;
};

class HtlcActions {
  create({
    from_account_id,
    to_account_id,
    asset_id,
    amount,
    lock_time,
    preimage_cipher,
    preimage = null,
    preimage_hash = null,
    preimage_size = null,
    fee_asset = null
  }) {
    if (!fee_asset) {
      fee_asset = "1.3.0";
    }

    if (typeof fee_asset !== "string") {
      fee_asset = fee_asset.get("id");
    }

    const tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_2__["default"].new_transaction();
    let preimage_hash_cipher = getCipherInt(preimage_cipher);

    if (preimage && !preimage_hash) {
      preimage_hash = calculateHash(preimage_cipher, preimage);
    }

    if (!preimage_size) {
      if (preimage) {
        preimage_size = preimage.length;
      } else {
        throw Error("Preimage must be given if size is empty");
      }
    }

    tr.add_type_operation("htlc_create", {
      from: from_account_id,
      to: to_account_id,
      fee: {
        amount: 0,
        asset_id: fee_asset
      },
      amount: {
        amount: amount,
        asset_id: asset_id
      },
      preimage_hash: [preimage_hash_cipher, preimage_hash],
      preimage_size: preimage_size,
      claim_period_seconds: lock_time
    });
    return dispatch => {
      return stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].process_transaction(tr, null, true).then(() => {
        dispatch(true);
      }).catch(error => {
        console.log("[HtlcActions.js:69] ----- htlc create error ----->", error);
        dispatch(false);
      });
    };
  }

  redeem({
    htlc_id,
    user_id,
    preimage
  }) {
    let tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_2__["default"].new_transaction();
    tr.add_type_operation("htlc_redeem", {
      preimage: new Buffer(preimage).toString("hex"),
      fee: {
        amount: 0,
        asset_id: "1.3.0"
      },
      htlc_id: htlc_id,
      redeemer: user_id
    });
    return dispatch => {
      return stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].process_transaction(tr, null, true).then(() => {
        dispatch(true);
      }).catch(error => {
        console.log("[HtlcActions.js:98] ----- htlc redeem error ----->", error);
        dispatch(false);
      });
    };
  }

  extend({
    htlc_id,
    user_id,
    seconds_to_add
  }) {
    let tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_2__["default"].new_transaction();
    tr.add_type_operation("htlc_extend", {
      fee: {
        amount: 0,
        asset_id: "1.3.0"
      },
      htlc_id: htlc_id,
      update_issuer: user_id,
      seconds_to_add: seconds_to_add
    });
    return dispatch => {
      return stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].process_transaction(tr, null, true).then(() => {
        dispatch(true);
      }).catch(error => {
        console.log("[HtlcActions.js:127] ----- htlc extend error ----->", error);
        dispatch(false);
      });
    };
  }

  calculateHash(preimage, cipher) {
    const preimage_hash_calculated = calculateHash(cipher, preimage);
    const size = preimage_hash_calculated.length;
    let hash = new Buffer(preimage_hash_calculated).toString("hex");
    return {
      hash,
      size
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alt_instance__WEBPACK_IMPORTED_MODULE_0__["default"].createActions(HtlcActions));

/***/ }),

/***/ 3045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 3040:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1986);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1737);



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? Array(collection.length) : [];

  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMap);


/***/ }),

/***/ 3039:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1983);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1992);
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3040);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1694);





/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, 3));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);


/***/ }),

/***/ 3020:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2037);


/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : (0,_baseSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path, value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (set);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuMGMzMDZjNDkxN2JiOWZkNDMwZjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQVVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFLQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUtBOztBQUNBO0FBQ0E7QUFJQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFJQTs7QUFJQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFTQTtBQUNBO0FBRkE7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFIQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFTQTs7QUFFQTtBQUdBO0FBQ0E7O0FBV0E7O0FBSUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBdkJBO0FBMkJBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFEQTtBQU1BO0FBQ0E7QUFPQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBbEJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBWEE7QUFjQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBRkE7QUFGQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFWQTtBQWdCQTs7QUE3WUE7O0FBZ1pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdmFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQUE7QUFBQTtBQURBOztBQUlBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7OztBQUdBO0FBS0E7O0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBbEJBO0FBc0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTs7QUFFQTs7QUFHQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBZUE7QUFEQTs7QUFPQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBOztBQUVBO0FBR0E7QUFDQTs7QUFXQTs7QUFJQTtBQUVBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQTlCQTtBQWtDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFWQTtBQWdCQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFiQTtBQWtCQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQWpCQTtBQXNCQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBVEE7QUFnQkE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTtBQWRBO0FBc0JBOztBQTdtQkE7O0FBZ25CQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTs7QUFaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBREE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7O0FBUUE7QUFPQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFLQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQXRCQTtBQStCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQU1BO0FBR0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFZQTtBQUFBO0FBRUE7QUFHQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFWQTtBQWNBO0FBR0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFWQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBYUE7O0FBOVJBOztBQWdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQXlCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFRQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFRQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQVRBOztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOztBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSUE7QUFBQTtBQVZBO0FBZUE7QUFEQTtBQU1BO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7O0FBRUE7QUFHQTtBQUVBO0FBU0E7QUFNQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBV0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQVdBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWhCQTtBQW9CQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBakJBO0FBd0JBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFvQkE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBWkE7QUFlQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBVkE7QUFzQkE7O0FBdnJCQTs7QUEwckJBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7O0FBVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFLQTtBQUNBO0FBRUE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQURBO0FBZ0JBO0FBREE7QUFTQTtBQUNBO0FBQUE7QUFJQTtBQURBO0FBR0E7QUFBQTtBQU1BO0FBSUE7O0FBOUVBOztBQWlGQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBVEE7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7O0FBdEJBOztBQXlCQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFkQTs7QUFpQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVlBOztBQTFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVpBO0FBaUJBOztBQTNEQTs7QUE4REE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFSQTs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFUQTtBQXdCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBa0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVFBOztBQTNFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFSQTtBQWFBO0FBQUE7QUFPQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBTUE7O0FBekZBOztBQTRGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUlBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBOUJBOztBQWlDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBV0E7O0FBdkdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUtBOztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQTNFQTs7QUE4RUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQURBO0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBY0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUdBO0FBZkE7QUFtQkE7QUFDQTtBQWpGQTs7QUFvRkE7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQU9BO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBRUE7QUFLQTtBQUlBO0FBVkE7QUFhQTtBQURBO0FBS0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFlQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWxCQTtBQXVCQTs7QUF0ZUE7O0FBeWVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBRkE7QUF1QkE7O0FBMUJBOztBQTZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVlBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFPQTtBQUdBO0FBSkE7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7O0FBQ0E7QUFyTEE7O0FBdUxBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQURBO0FBUUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQWVBO0FBQUE7QUFPQTtBQUFBO0FBR0E7O0FBalRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBTUE7O0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFEQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBV0E7O0FBckZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBL0NBO0FBaURBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFIQTtBQWFBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBSEE7QUFhQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7O0FBVUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFFQTtBQUNBO0FBRkE7QUFLQTs7QUFVQTtBQUNBO0FBRUE7O0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQVhBO0FBYUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVEE7QUFXQTtBQUVBO0FBSUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFEQTtBQUtBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFTQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBT0E7QUFDQTtBQWJBO0FBb0JBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBVkE7QUFpQkE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7O0FBV0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUlBOztBQUNBOztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQURBO0FBTUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFKQTtBQU9BO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFJQTtBQU9BO0FBQ0E7QUFNQTtBQXhCQTtBQStCQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUpBO0FBT0E7QUFJQTtBQUNBO0FBQ0E7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQU1BO0FBckJBO0FBNEJBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUZBO0FBaUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFpQkE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVdBO0FBREE7QUFXQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQVVBO0FBR0E7QUFKQTtBQU9BO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQWtCQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBY0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBT0E7QUFBQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFHQTtBQWxCQTtBQXVCQTtBQURBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFYQTtBQWtCQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUdBO0FBZEE7QUFxQkE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBWkE7QUFrQkE7O0FBRUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQWZBO0FBa0JBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFHQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFLQTtBQWZBO0FBdUJBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUVBO0FBR0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBaUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBdmhEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBZkE7QUFrQkE7QUFHQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU9BO0FBWkE7QUFjQTtBQUFBO0FBT0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVVBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRkE7QUFXQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBU0E7QUFNQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVFBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBVUE7QUFDQTtBQUZBO0FBWUE7QUFDQTtBQUFBO0FBT0E7QUFNQTtBQUFBO0FBR0E7QUFEQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBREE7QUFTQTtBQURBO0FBUUE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFEQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFUQTtBQWNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBallBOztBQW9ZQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBOztBQVZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4WkE7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFEQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQVVBO0FBREE7QUFLQTtBQUFBO0FBbERBO0FBc0RBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBYUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQWhEQTtBQW9EQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBTEE7QUFjQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFTQTs7QUExWkE7O0FBNlpBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JiQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTs7QUFFQTtBQUNBO0FBUUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUxBO0FBT0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFNQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUdBO0FBRUE7QUFEQTtBQWVBO0FBQ0E7QUFBQTtBQWhDQTtBQW9DQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQW5CQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBY0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBckNBO0FBeUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFMQTtBQWNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7O0FBdlVBOztBQTBVQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQW5CQTtBQXNCQTs7QUF6Q0E7O0FBNENBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUFBO0FBRUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVlBOztBQS9GQTs7QUFpR0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVKQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwQkE7QUF1QkE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7O0FBWkE7QUFlQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTs7QUFwQkE7O0FBdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBV0E7O0FBakdBOztBQW9HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQWJBOztBQWVBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFiQTs7QUFlQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBYkE7QUFnQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQTdIQTs7QUFnSUE7Ozs7Ozs7O0FDNUtBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL01vZGFsL0RpcmVjdERlYml0Q2xhaW1Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTW9kYWwvRGlyZWN0RGViaXRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTW9kYWwvSHRsY01vZGFsLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9BY2NvdW50c1NldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9CYWNrdXBGYXZvcml0ZXMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL0JhY2t1cFNldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9GZWVBc3NldFNldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9QYXNzd29yZFNldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9SZXNldFNldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9SZXN0b3JlRmF2b3JpdGVzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9SZXN0b3JlU2V0dGluZ3MuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1NldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3NFbnRyeS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvV2FsbGV0U2V0dGluZ3MuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1Nob3djYXNlcy9CYXJ0ZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1Nob3djYXNlcy9Cb3Jyb3cuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1Nob3djYXNlcy9EaXJlY3REZWJpdC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvU2hvd2Nhc2VzL0h0bGMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3IuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvTGltaXRUb1dpdGhkcmF3LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1BlcmlvZFNlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvYWN0aW9ucy9IdGxjQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvYXNzZXRzL3N0eWxlc2hlZXRzL2NvbXBvbmVudHMvX2h0bGMuc2Nzcz8yMmM1Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VNYXAuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9tYXAuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9zZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlLCBGZXRjaENoYWlufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclN0eWxlR3VpZGVcIjtcbmltcG9ydCBkZWJvdW5jZVJlbmRlciBmcm9tIFwicmVhY3QtZGVib3VuY2UtcmVuZGVyXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuaW1wb3J0IHtpc05hTn0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IExpbWl0VG9XaXRoZHJhdyBmcm9tIFwiLi4vVXRpbGl0eS9MaW1pdFRvV2l0aGRyYXdcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQge1xuICAgIE1vZGFsLFxuICAgIEJ1dHRvbixcbiAgICBUb29sdGlwLFxuICAgIEljb24sXG4gICAgRm9ybSxcbiAgICBJbnB1dFxufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgQXBwbGljYXRpb25BcGkgZnJvbSBcIi4uLy4uL2FwaS9BcHBsaWNhdGlvbkFwaVwiO1xuaW1wb3J0IEZlZUFzc2V0U2VsZWN0b3IgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9GZWVBc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgVHJhbnNsYXRlV2l0aExpbmtzIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zbGF0ZVdpdGhMaW5rc1wiO1xuXG5jbGFzcyBEaXJlY3REZWJpdENsYWltTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKHByb3BzKTtcbiAgICB9XG5cbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b19uYW1lOiBcIlwiLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBudWxsLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50X2JhbGFuY2U6IG51bGwsXG4gICAgICAgICAgICB0b19hY2NvdW50OiBudWxsLFxuICAgICAgICAgICAgYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IG51bGwsXG4gICAgICAgICAgICBhc3NldDogbnVsbCxcbiAgICAgICAgICAgIG1lbW86IFwiXCIsXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGZlZUFzc2V0OiBudWxsLCAvLyB3aWxsIGJlIGZpbGxlZCBieSBGZWVBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICBtYXhBbW91bnQ6IGZhbHNlLFxuICAgICAgICAgICAgcGVybWlzc2lvbklkOiBcIlwiLFxuICAgICAgICAgICAgZmlyc3RQZXJpb2RFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBwYXllckJhbGFuY2VXYXJuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHdpdGhkcmF3YWxfbGltaXQ6IHRoaXMucHJvcHMub3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9saW1pdCxcbiAgICAgICAgICAgIGN1cnJlbnRfcGVyaW9kX2V4cGlyZXM6IFwiXCIsXG4gICAgICAgICAgICBjbGFpbWVkQW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25TdWJtaXQgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXG4gICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgZmVlQXNzZXQsXG4gICAgICAgICAgICBwZXJtaXNzaW9uSWQsXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGFzc2V0X2lkLFxuICAgICAgICAgICAgbWVtb1xuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBBcHBsaWNhdGlvbkFwaS5jbGFpbVdpdGhkcmF3UGVybWlzc2lvbihcbiAgICAgICAgICAgIHBlcm1pc3Npb25JZCxcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcbiAgICAgICAgICAgIHRvX2FjY291bnQsXG4gICAgICAgICAgICBhc3NldF9pZCxcbiAgICAgICAgICAgIHV0aWxzLmNvbnZlcnRfdHlwZWRfdG9fc2F0b3NoaShhbW91bnQsIGFzc2V0KSxcbiAgICAgICAgICAgIG1lbW8gPyBuZXcgQnVmZmVyKG1lbW8sIFwidXRmLThcIikgOiBtZW1vLFxuICAgICAgICAgICAgZmVlQXNzZXQuYXNzZXRfaWRcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogZXJyfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHtvcGVyYXRpb24sIGlzTW9kYWxWaXNpYmxlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNNb2RhbFZpc2libGUgJiZcbiAgICAgICAgICAgIG9wZXJhdGlvbiAmJlxuICAgICAgICAgICAgcHJldlN0YXRlLnBlcm1pc3Npb25JZCAhPT0gb3BlcmF0aW9uLnBheWxvYWQuaWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lU3RhcnQgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC5wZXJpb2Rfc3RhcnRfdGltZSArIFwiWlwiXG4gICAgICAgICAgICApLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgY29uc3QgdGltZVBhc3NlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGltZVN0YXJ0O1xuXG4gICAgICAgICAgICBsZXQgY3VycmVudFBlcmlvZE51bTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGVyaW9kRXhwaXJlcyA9IFwiXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IHBlcmlvZE1zID0gb3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9wZXJpb2Rfc2VjICogMTAwMDtcbiAgICAgICAgICAgIGlmICh0aW1lUGFzc2VkIDwgMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3QgcGVyaW9kIGlzIG5vdCBzdGFydGVkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGVyaW9kTnVtID0gTWF0aC5jZWlsKHRpbWVQYXNzZWQgLyBwZXJpb2RNcyk7XG4gICAgICAgICAgICAgICAgY3VycmVudFBlcmlvZEV4cGlyZXMgPSB0aW1lU3RhcnQgKyBwZXJpb2RNcyAqIGN1cnJlbnRQZXJpb2ROdW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvID0gYXdhaXQgRmV0Y2hDaGFpbihcbiAgICAgICAgICAgICAgICBcImdldEFjY291bnRcIixcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC5hdXRob3JpemVkX2FjY291bnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBmcm9tID0gYXdhaXQgRmV0Y2hDaGFpbihcbiAgICAgICAgICAgICAgICBcImdldEFjY291bnRcIixcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd19mcm9tX2FjY291bnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBhc3NldCA9IGF3YWl0IEZldGNoQ2hhaW4oXG4gICAgICAgICAgICAgICAgXCJnZXRBc3NldFwiLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3YWxfbGltaXQuYXNzZXRfaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBmcm9tX2FjY291bnRfYmFsYW5jZSA9IGF3YWl0IHRoaXMuX2NoZWNrQmFsYW5jZShcbiAgICAgICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3YWxfbGltaXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50OiB0byxcbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQ6IGZyb20sXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbklkOiBvcGVyYXRpb24ucGF5bG9hZC5pZCxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd2FsX2xpbWl0OiBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX2xpbWl0LFxuICAgICAgICAgICAgICAgIGNsYWltZWRBbW91bnQ6IG9wZXJhdGlvbi5wYXlsb2FkLmNsYWltZWRfdGhpc19wZXJpb2QsXG4gICAgICAgICAgICAgICAgY3VycmVudF9wZXJpb2RfZXhwaXJlc19kYXRlOiBjdXJyZW50UGVyaW9kRXhwaXJlcyxcbiAgICAgICAgICAgICAgICBhc3NldDogYXNzZXQsXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50X2JhbGFuY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VG90YWxMaW1pdCA9IGxpbWl0ID0+ICgpID0+IHtcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBjbGFpbWVkQW1vdW50fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBhbW91bnQgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KGxpbWl0IC0gY2xhaW1lZEFtb3VudCwgYXNzZXQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttYXhBbW91bnQ6IHRydWUsIGFtb3VudH0pO1xuICAgIH07XG5cbiAgICBvbkFtb3VudENoYW5nZWQgPSAoe2Ftb3VudCwgYXNzZXR9KSA9PiB7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIG1heEFtb3VudDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uRmVlQ2hhbmdlZChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmZWVBc3NldDogYXNzZXR9KTtcbiAgICB9XG5cbiAgICBvbk1lbW9DaGFuZ2VkKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVtbzogZS50YXJnZXQudmFsdWV9KTtcbiAgICB9XG5cbiAgICBhc3luYyBfY2hlY2tCYWxhbmNlKGZyb21fYWNjb3VudCA9IG51bGwsIHdpdGhkcmF3YWxfbGltaXQgPSBudWxsKSB7XG4gICAgICAgIGxldCBzZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZnJvbV9hY2NvdW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCA9IHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50O1xuICAgICAgICAgICAgc2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aXRoZHJhd2FsX2xpbWl0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHdpdGhkcmF3YWxfbGltaXQgPSB0aGlzLnN0YXRlLndpdGhkcmF3YWxfbGltaXQ7XG4gICAgICAgICAgICBzZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFsYW5jZUlEID0gZnJvbV9hY2NvdW50LmdldEluKFtcbiAgICAgICAgICAgIFwiYmFsYW5jZXNcIixcbiAgICAgICAgICAgIHdpdGhkcmF3YWxfbGltaXQuYXNzZXRfaWRcbiAgICAgICAgXSk7XG5cbiAgICAgICAgbGV0IGZyb21fYWNjb3VudF9iYWxhbmNlID0gMDtcbiAgICAgICAgaWYgKCEhYmFsYW5jZUlEKSB7XG4gICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZSA9IChhd2FpdCBGZXRjaENoYWluKFxuICAgICAgICAgICAgICAgIFwiZ2V0T2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUlEXG4gICAgICAgICAgICApKS5nZXQoXCJiYWxhbmNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXRTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9hY2NvdW50X2JhbGFuY2V9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvbV9hY2NvdW50X2JhbGFuY2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50X2JhbGFuY2UsXG4gICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICBtZW1vLFxuICAgICAgICAgICAgcGF5ZXJCYWxhbmNlV2FybmluZyxcbiAgICAgICAgICAgIHdpdGhkcmF3YWxfbGltaXQsXG4gICAgICAgICAgICBjdXJyZW50X3BlcmlvZF9leHBpcmVzX2RhdGVcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGVudGVyZWRNb3JlVGhhbkF2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgICBsZXQgYmFsYW5jZUVycm9yID0gZmFsc2U7XG4gICAgICAgIGxldCBtYXhpbXVtVG9DbGFpbSA9IDA7XG4gICAgICAgIGlmICh3aXRoZHJhd2FsX2xpbWl0KSB7XG4gICAgICAgICAgICBtYXhpbXVtVG9DbGFpbSA9XG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50X2JhbGFuY2UgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1pbihmcm9tX2FjY291bnRfYmFsYW5jZSwgd2l0aGRyYXdhbF9saW1pdC5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgIDogd2l0aGRyYXdhbF9saW1pdC5hbW91bnQ7XG4gICAgICAgICAgICBpZiAoYXNzZXQgJiYgYW1vdW50KVxuICAgICAgICAgICAgICAgIGVudGVyZWRNb3JlVGhhbkF2YWlsYWJsZSA9XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmNvbnZlcnRfdHlwZWRfdG9fc2F0b3NoaShhbW91bnQsIGFzc2V0KSA+XG4gICAgICAgICAgICAgICAgICAgIG1heGltdW1Ub0NsYWltO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudF9iYWxhbmNlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50X2JhbGFuY2UgPCB3aXRoZHJhd2FsX2xpbWl0LmFtb3VudFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiYWxhbmNlID0gbnVsbDtcblxuICAgICAgICAvLyBiYWxhbmNlXG4gICAgICAgIGlmIChmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSB7XG4gICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmxpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZW50ZXJlZE1vcmVUaGFuQXZhaWxhYmxlID8gXCJoYXMtZXJyb3JcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZXRUb3RhbExpbWl0KG1heGltdW1Ub0NsYWltKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbWl0VG9XaXRoZHJhd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17bWF4aW11bVRvQ2xhaW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxfbGltaXQgJiYgd2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIHtiYWxhbmNlRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BSaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LnBheWVyX2JhbGFuY2Vfbm90X3N1ZmZpY2llbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHdpdGhkcmF3YWxfbGltaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJsaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogXCIjZmU4YzAwXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKGFtb3VudCwgLywvZywgXCJcIilcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaXNBbW91bnRWYWxpZCA9IGFtb3VudFZhbHVlICYmICFpc05hTihhbW91bnRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGlzU3VibWl0Tm90VmFsaWQgPVxuICAgICAgICAgICAgIWZyb21fYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRvX2FjY291bnQgfHxcbiAgICAgICAgICAgICFpc0Ftb3VudFZhbGlkIHx8XG4gICAgICAgICAgICAhYXNzZXQgfHxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvciB8fFxuICAgICAgICAgICAgZW50ZXJlZE1vcmVUaGFuQXZhaWxhYmxlIHx8XG4gICAgICAgICAgICBwYXllckJhbGFuY2VXYXJuaW5nIHx8XG4gICAgICAgICAgICAhY3VycmVudF9wZXJpb2RfZXhwaXJlc19kYXRlIHx8XG4gICAgICAgICAgICBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIikgPT0gdG9fYWNjb3VudC5nZXQoXCJpZFwiKTtcblxuICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXJlY3REZWJpdENsYWltTW9kYWwucmVuZGVyXCIsIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jbGFpbV9mdW5kc1wiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLmlzTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wicmVkXCJ9IHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0Tm90VmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTdWJtaXROb3RWYWxpZCA/IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5kaXJlY3RfZGViaXQuY2xhaW1cIil9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJDYW5jZWxcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuY2FuY2VsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmF1dGhvcml6aW5nX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF0b19hY2NvdW50ID8gdG9fYWNjb3VudC5nZXQoXCJuYW1lXCIpIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jdXJyZW50X3BlcmlvZF9leHBpcmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcGVyaW9kX2V4cGlyZXNfZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcGVyaW9kX2V4cGlyZXNfZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQuZmlyc3RfcGVyaW9kX25vdF9zdGFydGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wZXJpb2RfZXhwaXJlc19kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImVycm9yLWFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmFtb3VudF90b193aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbW91bnRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdCAmJiB3aXRoZHJhd2FsX2xpbWl0LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxfbGltaXQgJiYgW3dpdGhkcmF3YWxfbGltaXQuYXNzZXRfaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05hTj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVtbyAmJiBtZW1vLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmlnaHQtbGFiZWxcIj57bWVtby5sZW5ndGh9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5tZW1vX3RpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNmZXIubWVtb1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1vfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1lbW9DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZlZUFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2l0aGRyYXdfcGVybWlzc2lvbl9jbGFpbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3REZWJpdENsYWltTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XHJcbmltcG9ydCBQZXJpb2RTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9QZXJpb2RTZWxlY3RvclwiO1xyXG5pbXBvcnQgRmVlQXNzZXRTZWxlY3RvciBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0ZlZUFzc2V0U2VsZWN0b3JcIjtcclxuXHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlIGZyb20gXCJzdG9yZXMvVHJhbnNhY3Rpb25Db25maXJtU3RvcmVcIjtcclxuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XHJcbmltcG9ydCB7aXNOYU59IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IHtjaGVja0JhbGFuY2V9IGZyb20gXCJjb21tb24vdHJ4SGVscGVyXCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbiwgVG9vbHRpcCwgRm9ybX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBBcHBsaWNhdGlvbkFwaSBmcm9tIFwiLi4vLi4vYXBpL0FwcGxpY2F0aW9uQXBpXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuY2xhc3MgRGlyZWN0RGViaXRNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub25UcnhJbmNsdWRlZCA9IHRoaXMub25UcnhJbmNsdWRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZSA9IHRoaXMuX2NoZWNrQmFsYW5jZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b19uYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBmcm9tX2FjY291bnQ6IG51bGwsXHJcbiAgICAgICAgICAgIHRvX2FjY291bnQ6IG51bGwsXHJcbiAgICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGFzc2V0OiBudWxsLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkOlxyXG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5hc3NldHNfYnlfc3ltYm9sLmdldCh0aGlzLnByb3BzLmZlZV9hc3NldF9zeW1ib2wpIHx8XHJcbiAgICAgICAgICAgICAgICBcIjEuMy4wXCIsXHJcbiAgICAgICAgICAgIGZlZUFtb3VudDogbmV3IEFzc2V0KHthbW91bnQ6IDB9KSxcclxuICAgICAgICAgICAgZmVlU3RhdHVzOiB7fSxcclxuICAgICAgICAgICAgbWF4QW1vdW50OiBmYWxzZSxcclxuICAgICAgICAgICAgbnVtX29mX3BlcmlvZHM6IFwiXCIsXHJcbiAgICAgICAgICAgIHBlcmlvZDoge2Ftb3VudDogXCJcIiwgdHlwZToge3NlY29uZHM6IDYwNDgwMCwgbmFtZTogXCJXZWVrXCJ9fSxcclxuICAgICAgICAgICAgcGVyaW9kX3N0YXJ0X3RpbWU6IG1vbWVudCgpLmFkZChcInNlY29uZHNcIiwgMTIwKSxcclxuICAgICAgICAgICAgcGVybWlzc2lvbklkOiBcIlwiLFxyXG4gICAgICAgICAgICBiYWxhbmNlRXJyb3I6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXHJcbiAgICAgICAgICAgIHRvX2FjY291bnQsXHJcbiAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgYXNzZXQsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkLFxyXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQsXHJcbiAgICAgICAgICAgIHBlcmlvZCxcclxuICAgICAgICAgICAgbnVtX29mX3BlcmlvZHMsXHJcbiAgICAgICAgICAgIHBlcmlvZF9zdGFydF90aW1lLFxyXG4gICAgICAgICAgICBwZXJtaXNzaW9uSWRcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbjoge3R5cGU6IG9wZXJhdGlvblR5cGV9XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChvcGVyYXRpb25UeXBlID09PSBcImNyZWF0ZVwiKSB7XHJcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uQXBpLmNyZWF0ZVdpdGhkcmF3UGVybWlzc2lvbihcclxuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudCxcclxuICAgICAgICAgICAgICAgIHRvX2FjY291bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZCxcclxuICAgICAgICAgICAgICAgIHV0aWxzLmNvbnZlcnRfdHlwZWRfdG9fc2F0b3NoaShhbW91bnQsIGFzc2V0KSxcclxuICAgICAgICAgICAgICAgIHBlcmlvZC50eXBlLnNlY29uZHMgKiBOdW1iZXIocGVyaW9kLmFtb3VudCksXHJcbiAgICAgICAgICAgICAgICBudW1fb2ZfcGVyaW9kcyxcclxuICAgICAgICAgICAgICAgIHBlcmlvZF9zdGFydF90aW1lLnZhbHVlT2YoKSxcclxuICAgICAgICAgICAgICAgIGZlZV9hc3NldF9pZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogdmlzdWFsaXplIGVycm9yIHNvbWV3aGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uVHlwZSA9PT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICAgICAgICBBcHBsaWNhdGlvbkFwaS51cGRhdGVXaXRoZHJhd1Blcm1pc3Npb24oXHJcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uSWQsXHJcbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQsXHJcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQsXHJcbiAgICAgICAgICAgICAgICB1dGlscy5jb252ZXJ0X3R5cGVkX3RvX3NhdG9zaGkoYW1vdW50LCBhc3NldCksXHJcbiAgICAgICAgICAgICAgICBwZXJpb2QudHlwZS5zZWNvbmRzICogTnVtYmVyKHBlcmlvZC5hbW91bnQpLFxyXG4gICAgICAgICAgICAgICAgbnVtX29mX3BlcmlvZHMsXHJcbiAgICAgICAgICAgICAgICBwZXJpb2Rfc3RhcnRfdGltZS52YWx1ZU9mKCksXHJcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfaWRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IHZpc3VhbGl6ZSBlcnJvciBzb21ld2hlcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgICAgY29uc3Qge29wZXJhdGlvbiwgY3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50ICE9PSBwcmV2UHJvcHMuY3VycmVudEFjY291bnQgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQgPT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGN1cnJlbnRBY2NvdW50KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBvcGVyYXRpb25cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbiAmJlxyXG4gICAgICAgICAgICBvcGVyYXRpb24udHlwZSA9PT0gXCJ1cGRhdGVcIiAmJlxyXG4gICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC5pZCAhPT0gcHJldlN0YXRlLnBlcm1pc3Npb25JZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCB0b0FjY291bnQgPSBDaGFpblN0b3JlLmdldEFjY291bnQoXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC5hdXRob3JpemVkX2FjY291bnRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b0FjY291bnQgJiYgdG9BY2NvdW50LmdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZVN0YXJ0ID0gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLnV0YyhvcGVyYXRpb24ucGF5bG9hZC5wZXJpb2Rfc3RhcnRfdGltZSlcclxuICAgICAgICAgICAgICAgICAgICAudmFsdWVPZigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZUVuZCA9IG1vbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC51dGMob3BlcmF0aW9uLnBheWxvYWQuZXhwaXJhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAudmFsdWVPZigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZQZXJpb2RzID1cclxuICAgICAgICAgICAgICAgICAgICAodGltZUVuZCAtIHRpbWVTdGFydCkgL1xyXG4gICAgICAgICAgICAgICAgICAgIChvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX3BlcmlvZF9zZWMgKiAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJpb2RUeXBlcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7c2Vjb25kczogNjA0ODAwLCBuYW1lOiBcIldlZWtcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge3NlY29uZHM6IDg2NDAwLCBuYW1lOiBcIkRheVwifSxcclxuICAgICAgICAgICAgICAgICAgICB7c2Vjb25kczogMzYwMCwgbmFtZTogXCJIb3VyXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWNvbmRzOiA2MCwgbmFtZTogXCJNaW51dGVcIn1cclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBlcmlvZFNlY3MsIHBlcmlvZE5hbWUsIHBlcmlvZEFtb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlcmlvZFR5cGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX3BlcmlvZF9zZWMgPj1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyaW9kVHlwZXNbaV0uc2Vjb25kc1xyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBlcmlvZCA9IHBlcmlvZFR5cGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyaW9kTmFtZSA9IGN1cnJlbnRQZXJpb2QubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyaW9kU2VjcyA9IGN1cnJlbnRQZXJpb2Quc2Vjb25kcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyaW9kQW1vdW50ID0gTWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3YWxfcGVyaW9kX3NlYyAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBlcmlvZC5zZWNvbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IHRvQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICB0b19uYW1lOiB0b0FjY291bnQuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbklkOiBvcGVyYXRpb24ucGF5bG9hZC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHV0aWxzLmNvbnZlcnRfc2F0b3NoaV90b190eXBlZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9saW1pdC5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogb3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICBudW1fb2ZfcGVyaW9kczogbnVtYmVyT2ZQZXJpb2RzLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHBlcmlvZEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogcGVyaW9kU2VjcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHBlcmlvZE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyaW9kX3N0YXJ0X3RpbWU6IG1vbWVudC51dGMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLnBlcmlvZF9zdGFydF90aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrQmFsYW5jZSgpIHtcclxuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBhbW91bnQsIGZyb21fYWNjb3VudCwgYXNzZXR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoIWFzc2V0IHx8ICFmcm9tX2FjY291bnQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBiYWxhbmNlSUQgPSBmcm9tX2FjY291bnQuZ2V0SW4oW1wiYmFsYW5jZXNcIiwgYXNzZXQuZ2V0KFwiaWRcIildKTtcclxuICAgICAgICBjb25zdCBmZWVCYWxhbmNlSUQgPSBmcm9tX2FjY291bnQuZ2V0SW4oW1xyXG4gICAgICAgICAgICBcImJhbGFuY2VzXCIsXHJcbiAgICAgICAgICAgIGZlZUFtb3VudC5hc3NldF9pZFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGlmICghYXNzZXQgfHwgIWZyb21fYWNjb3VudCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghYmFsYW5jZUlEKSByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiB0cnVlfSk7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlSUQpO1xyXG4gICAgICAgIGxldCBmZWVCYWxhbmNlT2JqZWN0ID0gZmVlQmFsYW5jZUlEXHJcbiAgICAgICAgICAgID8gQ2hhaW5TdG9yZS5nZXRPYmplY3QoZmVlQmFsYW5jZUlEKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgaWYgKCFmZWVCYWxhbmNlT2JqZWN0IHx8IGZlZUJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmZWVfYXNzZXRfaWQ6IHRoaXMuc3RhdGUuZmVlX2Fzc2V0X2lkfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYmFsYW5jZU9iamVjdCB8fCAhZmVlQW1vdW50KSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFhbW91bnQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6IGZhbHNlfSk7XHJcbiAgICAgICAgY29uc3QgaGFzQmFsYW5jZSA9IGNoZWNrQmFsYW5jZShcclxuICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgZmVlQW1vdW50LFxyXG4gICAgICAgICAgICBiYWxhbmNlT2JqZWN0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaGFzQmFsYW5jZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogIWhhc0JhbGFuY2V9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0VG90YWwoYXNzZXRfaWQsIGJhbGFuY2VfaWQpIHtcclxuICAgICAgICBjb25zdCB7ZmVlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlX2lkKTtcclxuICAgICAgICBsZXQgdHJhbnNmZXJBc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFzc2V0X2lkKTtcclxuXHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRyYW5zZmVyQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHJhbnNmZXJBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGZlZUFtb3VudC5hc3NldF9pZCA9PT0gYmFsYW5jZS5hc3NldF9pZCkge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZS5taW51cyhmZWVBbW91bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7bWF4QW1vdW50OiB0cnVlLCBhbW91bnQ6IGJhbGFuY2UuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSl9LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgY29uc3Qge2Zyb21fYWNjb3VudH0gPSBzdGF0ZTtcclxuICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBbXSxcclxuICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzID0gW107XHJcbiAgICAgICAgaWYgKCEoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHthc3NldF90eXBlcywgZmVlX2Fzc2V0X3R5cGVzfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBzdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xyXG4gICAgICAgIGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xyXG4gICAgICAgIGZlZV9hc3NldF90eXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRfYmFsYW5jZXMpLnNvcnQodXRpbHMuc29ydElEKTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWNjb3VudF9iYWxhbmNlcykge1xyXG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRfYmFsYW5jZXNba2V5XSk7XHJcbiAgICAgICAgICAgIGlmIChiYWxhbmNlT2JqZWN0ICYmIGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMuc3BsaWNlKGFzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSwgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMuc3BsaWNlKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7YXNzZXRfdHlwZXMsIGZlZV9hc3NldF90eXBlc307XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub0FjY291bnRDaGFuZ2VkID0gdG9fYWNjb3VudCA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYWNjb3VudCwgZXJyb3I6IG51bGx9KTtcclxuICAgIH07XHJcblxyXG4gICAgb25BbW91bnRDaGFuZ2VkID0gKHthbW91bnQsIGFzc2V0fSkgPT4ge1xyXG4gICAgICAgIGlmICghYXNzZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYXNzZXQsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1heEFtb3VudDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgdG9DaGFuZ2VkID0gdG9fbmFtZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fbmFtZSwgZXJyb3I6IG51bGx9KTtcclxuICAgIH07XHJcblxyXG4gICAgb25GZWVDaGFuZ2VkKGFzc2V0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmVlX2Fzc2V0X2lkOiBhc3NldC5hc3NldF9pZCwgZXJyb3I6IG51bGx9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRyeEluY2x1ZGVkKGNvbmZpcm1fc3RvcmVfc3RhdGUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGNvbmZpcm1fc3RvcmVfc3RhdGUuaW5jbHVkZWQgJiZcclxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5icm9hZGNhc3RlZF90cmFuc2FjdGlvblxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS51bmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS5yZXNldCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlybV9zdG9yZV9zdGF0ZS5jbG9zZWQpIHtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUudW5saXN0ZW4odGhpcy5vblRyeEluY2x1ZGVkKTtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25OdW1PZlBlcmlvZHNDaGFuZ2VkID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcclxuICAgICAgICBpZiAoIWlzTmFOKG5ld1ZhbHVlKSAmJiB0eXBlb2YgbmV3VmFsdWUgPT09IFwibnVtYmVyXCIgJiYgbmV3VmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtudW1fb2ZfcGVyaW9kczogbmV3VmFsdWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uUGVyaW9kQ2hhbmdlZCA9ICh7YW1vdW50LCB0eXBlfSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BlcmlvZDoge2Ftb3VudCwgdHlwZX19KTtcclxuICAgIH07XHJcblxyXG4gICAgb25EYXRlcGlja2VyUmVmKGVsKSB7XHJcbiAgICAgICAgaWYgKGVsICYmIGVsLnBpY2tlci5pbnB1dCkge1xyXG4gICAgICAgICAgICBlbC5waWNrZXIuaW5wdXQucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydERhdGVDaGFuZ2VkID0gdXRjVmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh1dGNWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwZXJpb2Rfc3RhcnRfdGltZTogdXRjVmFsdWV9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwZXJpb2Rfc3RhcnRfdGltZTogbnVsbH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcclxuICAgICAgICAgICAgdG9fYWNjb3VudCxcclxuICAgICAgICAgICAgYXNzZXQsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkLFxyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIHRvX25hbWUsXHJcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZCxcclxuICAgICAgICAgICAgYmFsYW5jZUVycm9yLFxyXG4gICAgICAgICAgICBudW1fb2ZfcGVyaW9kcyxcclxuICAgICAgICAgICAgcGVyaW9kLFxyXG4gICAgICAgICAgICBwZXJpb2Rfc3RhcnRfdGltZVxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCB7b3BlcmF0aW9ufSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCB7YXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gRXN0aW1hdGUgZmVlXHJcbiAgICAgICAgbGV0IGZlZSA9IHRoaXMuc3RhdGUuZmVlQW1vdW50LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pO1xyXG5cclxuICAgICAgICBpZiAoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkge1xyXG4gICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XHJcbiAgICAgICAgICAgIGxldCBfZXJyb3IgPSB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IFwiaGFzLWVycm9yXCIgOiBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFzc2V0X3R5cGVzWzBdKTtcclxuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gYXNzZXQgPyBhc3NldC5nZXQoXCJpZFwiKSA6IGFzc2V0X3R5cGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZlZUlEID0gZmVlX2Fzc2V0X2lkO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zZXRUb3RhbC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc3NldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVJRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZlZUlEID09IGN1cnJlbnRfYXNzZXRfaWQgJiYgdGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlX2ZlZSA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e19lcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtfZXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vRnVuZHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJhbGFuY2VfZmVlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e19lcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GdW5kc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKGFtb3VudCwgLywvZywgXCJcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGlzQW1vdW50VmFsaWQgPSBhbW91bnRWYWx1ZSAmJiAhaXNOYU4oYW1vdW50VmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGlzU3VibWl0Tm90VmFsaWQgPVxyXG4gICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XHJcbiAgICAgICAgICAgICF0b19hY2NvdW50IHx8XHJcbiAgICAgICAgICAgICFpc0Ftb3VudFZhbGlkIHx8XHJcbiAgICAgICAgICAgICFhc3NldCB8fFxyXG4gICAgICAgICAgICBiYWxhbmNlRXJyb3IgfHxcclxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LmdldChcImlkXCIpID09IHRvX2FjY291bnQuZ2V0KFwiaWRcIikgfHxcclxuICAgICAgICAgICAgIXBlcmlvZC5hbW91bnQgfHxcclxuICAgICAgICAgICAgIW51bV9vZl9wZXJpb2RzIHx8XHJcbiAgICAgICAgICAgICFwZXJpb2Rfc3RhcnRfdGltZTtcclxuXHJcbiAgICAgICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXJlY3REZWJpdE1vZGFsLnJlbmRlclwiLCBmcm9tX2FjY291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uICYmIG9wZXJhdGlvbi50eXBlID09PSBcImNyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQuY3JlYXRlX25ld19tYW5kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQudXBkYXRlX21hbmRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMuaXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXROb3RWYWxpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTdWJtaXROb3RWYWxpZCA/IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29wZXJhdGlvbiAmJiBvcGVyYXRpb24udHlwZSA9PT0gXCJjcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQuY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQudXBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJDYW5jZWxcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5jYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQVVUSE9SSVpFRCBBQ0NPVU5UICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQudG9vbHRpcC5hdXRob3JpemVkX2FjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5hdXRob3JpemVkX2FjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RvX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9DaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVG9BY2NvdW50Q2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC50b29sdGlwLmxpbWl0X3Blcl9wZXJpb2RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIExJTUlUICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5kaXJlY3RfZGViaXQubGltaXRfcGVyX3BlcmlvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFtb3VudENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3R5cGVzLmxlbmd0aCA+IDAgJiYgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0LmdldChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfdHlwZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e2Fzc2V0X3R5cGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQudG9vbHRpcC5wZXJpb2RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIFBFUklPRCAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcmlvZFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5wZXJpb2RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtwZXJpb2QuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzPXtbXCJNaW51dGVcIiwgXCJIb3VyXCIsIFwiRGF5XCIsIFwiV2Vla1wiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW51dGU6IHtzZWNvbmRzOiA2MCwgbmFtZTogXCJNaW51dGVcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb3VyOiB7c2Vjb25kczogNjAgKiA2MCwgbmFtZTogXCJIb3VyXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogNjAgKiA2MCAqIDI0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWVrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogNjAgKiA2MCAqIDI0ICogNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIldlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RUeXBlPXtwZXJpb2QudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QZXJpb2RDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQudG9vbHRpcC5udW1fb2ZfcGVyaW9kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayB0cmFuc2Zlci1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgTlVNQkVFUiBPRiBQRVJJT0RTICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0Lm51bV9vZl9wZXJpb2RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bV9vZl9wZXJpb2RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk51bU9mUGVyaW9kc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayB0cmFuc2Zlci1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICBTVEFSVCBEQVRFICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LnN0YXJ0X2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQudG9vbHRpcC5zdGFydF90aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJpb2Rfc3RhcnRfdGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN0YXJ0RGF0ZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhdGUtcGlja2VyLXdpZHRoMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHRoaXMub25EYXRlcGlja2VyUmVmKGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWREYXRlPXtjdXJyZW50ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50IDwgbW9tZW50KCkuYWRkKDIsIFwibWludXRlc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayB0cmFuc2Zlci1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgRiBFIEUgICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi50eXBlID09PSBcInVwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ3aXRoZHJhd19wZXJtaXNzaW9uX3VwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ3aXRoZHJhd19wZXJtaXNzaW9uX2NyZWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgRGlyZWN0RGViaXRNb2RhbCxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmUsIFNldHRpbmdzU3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCxcclxuICAgICAgICAgICAgICAgIGZlZV9hc3NldF9zeW1ib2w6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWVfYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZSwga2V5fSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xyXG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlIGZyb20gXCJzdG9yZXMvVHJhbnNhY3Rpb25Db25maXJtU3RvcmVcIjtcclxuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XHJcbmltcG9ydCB7aXNOYU59IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IHtjaGVja0JhbGFuY2V9IGZyb20gXCJjb21tb24vdHJ4SGVscGVyXCI7XHJcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgQ29weUJ1dHRvbiBmcm9tIFwiLi4vVXRpbGl0eS9Db3B5QnV0dG9uXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICAgIEZvcm0sXHJcbiAgICBNb2RhbCxcclxuICAgIEJ1dHRvbixcclxuICAgIFNlbGVjdCxcclxuICAgIElucHV0LFxyXG4gICAgRGF0ZVBpY2tlcixcclxuICAgIFRvb2x0aXAsXHJcbiAgICBSYWRpb1xyXG59IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBIdGxjQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9IdGxjQWN0aW9uc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9faHRsYy5zY3NzXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge2hhc0xvYWRlZH0gZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnRcIjtcclxuaW1wb3J0IEZlZUFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xyXG5cclxuY29uc3QgZ2V0VW5pbml0aWFsaXplZEZlZUFtb3VudCA9ICgpID0+XHJcbiAgICBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pO1xyXG5cclxuY2xhc3MgUHJlaW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBwcmVpbWFnZV9oYXNoOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHByZWltYWdlX3NpemU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgcHJlaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcHJlaW1hZ2VfY2lwaGVyOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuaGFzUmFuZG9tSGFzaCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGFnZTogMSxcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkOiBudWxsLFxyXG4gICAgICAgICAgICBjaXBoZXJzOiBbXCJzaGEyNTZcIiwgXCJyaXBlbWQxNjBcIl1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5wcmVpbWFnZV9oYXNoICYmICF0aGlzLmhhc1JhbmRvbUhhc2gpIHtcclxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlIGlzIGFsd2F5cyBhIGhhc2ggaWYgbm8gaGFzaCBnaXZlblxyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tKHt0YXJnZXQ6IHt9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgcHJldlByb3BzLnByZWltYWdlX2hhc2ggIT09IHRoaXMucHJvcHMucHJlaW1hZ2VfaGFzaCAmJlxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5wcmVpbWFnZV9oYXNoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzUmFuZG9tSGFzaCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMucHJlaW1hZ2VfaGFzaCAmJiAhdGhpcy5oYXNSYW5kb21IYXNoKSB7XHJcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSBpcyBhbHdheXMgYSBoYXNoIGlmIG5vIGhhc2ggZ2l2ZW5cclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJhbmRvbSh7dGFyZ2V0OiB7fX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBsZXQgcmVkbyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnN0YWdlICE9PSBlLnRhcmdldC52YWx1ZSAmJiBlLnRhcmdldC52YWx1ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJlZG8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGFnZTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4gKHJlZG8gPyB0aGlzLmdlbmVyYXRlUmFuZG9tKCkgOiBudWxsKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaXplQ2hhbmdlZChlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGlvbih7XHJcbiAgICAgICAgICAgIHByZWltYWdlX3NpemU6ICFlLnRhcmdldC52YWx1ZSA/IG51bGwgOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhhc2hDaGFuZ2VkKGUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKHtcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbklucHV0Q2hhbmdlZChlKSB7XHJcbiAgICAgICAgbGV0IHtwcmVpbWFnZSwgcHJlaW1hZ2VfY2lwaGVyfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKCFwcmVpbWFnZV9jaXBoZXIpIHtcclxuICAgICAgICAgICAgcHJlaW1hZ2VfY2lwaGVyID0gXCJzaGEyNTZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHByZWltYWdlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzaGluZ0luUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXIgPSBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdGFnZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgcHJlaW1hZ2VfY2lwaGVyOiBwcmVpbWFnZV9jaXBoZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qge2hhc2h9ID0gSHRsY0FjdGlvbnMuY2FsY3VsYXRlSGFzaChwcmVpbWFnZSwgcHJlaW1hZ2VfY2lwaGVyKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSAhPT0gXCJjcmVhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gdXNlciB0cmllcyB0byBtYXRjaCBoYXNoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXI6IHByZWltYWdlX2NpcGhlcixcclxuICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplOiBwcmVpbWFnZS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkOiBoYXNoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlX2NpcGhlcjogcHJlaW1hZ2VfY2lwaGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlX2hhc2g6IGhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2Vfc2l6ZTogcHJlaW1hZ2UubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJhbmRvbShlID0ge3RhcmdldDoge319KSB7XHJcbiAgICAgICAgdGhpcy5oYXNSYW5kb21IYXNoID0gdHJ1ZTtcclxuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IGtleVxyXG4gICAgICAgICAgICAuZ2V0X3JhbmRvbV9rZXkoKVxyXG4gICAgICAgICAgICAudG9XaWYoKVxyXG4gICAgICAgICAgICAuc3Vic3RyKDEwLCAzMCk7XHJcbiAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlZChlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGxhYmVsID0gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudHlwZSA9PSBcImNyZWF0ZVwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2xpY2suYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI3cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2hvd2Nhc2VzLmh0bGMuZmlyc3Rfc3RhZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2hvd2Nhc2VzLmh0bGMuc2Vjb25kX3N0YWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNob3djYXNlcy5odGxjLmN1c3RvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciByZWRlZW1zLCBpbmRpY2F0ZSBpZiBpdCBtYXRjaGVzXHJcbiAgICAgICAgbGV0IGhhc2hNYXRjaCA9XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZSAhPT0gXCJjcmVhdGVcIiAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByZWltYWdlX2hhc2hfY2FsY3VsYXRlZCAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnByZWltYWdlX2hhc2hfY2FsY3VsYXRlZCA9PVxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByZWltYWdlX2hhc2hcclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD17bGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuaHRsYy5wcmVpbWFnZV9oYXNfYmVlbl9jcmVhdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPElucHV0Lkdyb3VwIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXQgcHJlaW1hZ2Utcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZSAhPT0gXCJjcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzaG93Y2FzZXMuaHRsYy50b29sdGlwLmVudGVyX3ByZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic2hvd2Nhc2VzLmh0bGMudG9vbHRpcC5wcmVpbWFnZV9yYW5kb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI2MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaE1hdGNoID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGhhc2hNYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJlaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0YWdlID09IDIgPyBcIlwiIDogdGhpcy5wcm9wcy5wcmVpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhhc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNob3djYXNlcy5odGxjLmVudGVyX3NlY3JldF9wcmVpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaG93Y2FzZXMuaHRsYy5wcmVpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZSAhPT0gXCJjcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5zdGFnZSA9PSAxIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zdGFnZSA9PSAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWxQcm9wPXtcInZhbHVlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTkuNSVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnByZWltYWdlX2NpcGhlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNpcGhlcnMubWFwKGNpcGhlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e2NpcGhlcn0gdmFsdWU9e2NpcGhlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NpcGhlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMudG9vbHRpcC5uZXdfcmFuZG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZGVwbG95bWVudC11bml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmVydGljYWxBbGlnbjogXCJ0b3BcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlUmFuZG9tLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVpbWFnZTogXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlaW1hZ2UgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGhhc2ggdHlwZTogXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlaW1hZ2VfY2lwaGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0Lkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5Hcm91cCBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0IHByZWltYWdlLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLnRvb2x0aXAucHJlaW1hZ2VfaGFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjc4JVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJoYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaGFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkhhc2hDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5wcmVpbWFnZV9oYXNoIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuaGFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhZ2UgPT0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMudG9vbHRpcC5wcmVpbWFnZV9zaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiNTNweFwiLCBtYXJnaW5SaWdodDogXCIwLjJyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TaXplQ2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMucHJlaW1hZ2Vfc2l6ZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLnNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN0YWdlID09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXNoOiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVpbWFnZV9oYXNoICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBwcmVpbWFnZSBzaXplOiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVpbWFnZV9zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0Lkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEh0bGNNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGlzTW9kYWxWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGhpZGVNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBmcm9tQWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9wZXJhdGlvbjogUHJvcFR5cGVzLm9iamVjdCAvLyBvcHRpb25hbCwgb25seSB3aGVuIGVkaXRpbmdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uVHJ4SW5jbHVkZWQgPSB0aGlzLm9uVHJ4SW5jbHVkZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UgPSB0aGlzLl9jaGVja0JhbGFuY2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50KCkuYWRkKFwic2Vjb25kc1wiLCAxMjApO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZyb21fbmFtZTogXCJcIixcclxuICAgICAgICAgICAgdG9fbmFtZTogXCJcIixcclxuICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBudWxsLFxyXG4gICAgICAgICAgICB0b19hY2NvdW50OiBudWxsLFxyXG4gICAgICAgICAgICBhbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiBudWxsLFxyXG4gICAgICAgICAgICBhc3NldDogbnVsbCxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIGZlZUFtb3VudDogZ2V0VW5pbml0aWFsaXplZEZlZUFtb3VudCgpLFxyXG4gICAgICAgICAgICBtYXhBbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBudW1fb2ZfcGVyaW9kczogXCJcIixcclxuICAgICAgICAgICAgcGVyaW9kX3N0YXJ0X3RpbWU6IG5vdyxcclxuICAgICAgICAgICAgaHRsY0lkOiBcIlwiLFxyXG4gICAgICAgICAgICBiYWxhbmNlRXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcmVpbWFnZTogbnVsbCxcclxuICAgICAgICAgICAgcHJlaW1hZ2VfY2lwaGVyOiBudWxsLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoOiBudWxsLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9zaXplOiBudWxsLFxyXG4gICAgICAgICAgICBjbGFpbV9wZXJpb2Q6IDg2NDAwLFxyXG4gICAgICAgICAgICBwZXJpb2Q6IFwib25lX2RheVwiLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogbW9tZW50KClcclxuICAgICAgICAgICAgICAgIC5hZGQoXCJzZWNvbmRzXCIsIDE4MClcclxuICAgICAgICAgICAgICAgIC5hZGQoMSwgXCJkYXlcIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcclxuICAgICAgICAgICAgdG9fYWNjb3VudCxcclxuICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgYXNzZXRfaWQsXHJcbiAgICAgICAgICAgIHByZWltYWdlLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9zaXplLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXIsXHJcbiAgICAgICAgICAgIGNsYWltX3BlcmlvZCxcclxuICAgICAgICAgICAgZmVlQW1vdW50XHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBvcGVyYXRpb246IHt0eXBlOiBvcGVyYXRpb25UeXBlfVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAob3BlcmF0aW9uVHlwZSA9PT0gXCJjcmVhdGVcIikge1xyXG4gICAgICAgICAgICBIdGxjQWN0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50X2lkOiBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50X2lkOiB0b19hY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHV0aWxzLmNvbnZlcnRfdHlwZWRfdG9fc2F0b3NoaShhbW91bnQsIGFzc2V0KSxcclxuICAgICAgICAgICAgICAgIGxvY2tfdGltZTogY2xhaW1fcGVyaW9kLFxyXG4gICAgICAgICAgICAgICAgcHJlaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplLFxyXG4gICAgICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaCxcclxuICAgICAgICAgICAgICAgIHByZWltYWdlX2NpcGhlcixcclxuICAgICAgICAgICAgICAgIGZlZV9hc3NldDogZmVlQW1vdW50LmFzc2V0X2lkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogdmlzdWFsaXplIGVycm9yIHNvbWV3aGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uVHlwZSA9PT0gXCJyZWRlZW1cIikge1xyXG4gICAgICAgICAgICBIdGxjQWN0aW9ucy5yZWRlZW0oe1xyXG4gICAgICAgICAgICAgICAgaHRsY19pZDogdGhpcy5wcm9wcy5vcGVyYXRpb24ucGF5bG9hZC5pZCxcclxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHRvX2FjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZTogcHJlaW1hZ2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiB2aXN1YWxpemUgZXJyb3Igc29tZXdoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb25UeXBlID09PSBcImV4dGVuZFwiKSB7XHJcbiAgICAgICAgICAgIEh0bGNBY3Rpb25zLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICBodGxjX2lkOiB0aGlzLnByb3BzLm9wZXJhdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogZnJvbV9hY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kc190b19hZGQ6IGNsYWltX3BlcmlvZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IHZpc3VhbGl6ZSBlcnJvciBzb21ld2hlcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuZnJvbUFjY291bnQgJiYgIWhhc0xvYWRlZChuZXh0UHJvcHMuZnJvbUFjY291bnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgX3N5bmNPcGVyYXRpb24ob3BlcmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKG9wZXJhdGlvbiAmJiBvcGVyYXRpb24ucGF5bG9hZCAmJiBvcGVyYXRpb24udHlwZSAhPT0gXCJjcmVhdGVcIikge1xyXG4gICAgICAgICAgICBjb25zdCB0byA9IG9wZXJhdGlvbi5wYXlsb2FkLnRyYW5zZmVyLnRvO1xyXG4gICAgICAgICAgICBjb25zdCBmcm9tID0gb3BlcmF0aW9uLnBheWxvYWQudHJhbnNmZXIuZnJvbTtcclxuICAgICAgICAgICAgY29uc3QgYW1vdW50ID0ge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBvcGVyYXRpb24ucGF5bG9hZC50cmFuc2Zlci5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogb3BlcmF0aW9uLnBheWxvYWQudHJhbnNmZXIuYXNzZXRfaWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZXhwaXJhdGlvbiA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQuY29uZGl0aW9ucy50aW1lX2xvY2suZXhwaXJhdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCB0b0FjY291bnQgPSBDaGFpblN0b3JlLmdldEFjY291bnQodG8pO1xyXG4gICAgICAgICAgICBjb25zdCBmcm9tQWNjb3VudCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChmcm9tKTtcclxuICAgICAgICAgICAgaWYgKHRvQWNjb3VudCAmJiBmcm9tQWNjb3VudCAmJiB0b0FjY291bnQuZ2V0ICYmIGZyb21BY2NvdW50LmdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFtb3VudC5hc3NldF9pZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9fYWNjb3VudDogdG9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvX25hbWU6IHRvQWNjb3VudC5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogZnJvbUFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9uYW1lOiBmcm9tQWNjb3VudC5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1dGlscy5jb252ZXJ0X3NhdG9zaGlfdG9fdHlwZWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudC5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYW1vdW50LmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZF9zdGFydF90aW1lOiBleHBpcmF0aW9uLCAvLyBubyBzZWxlY3Rpb24gZm9yIHRoYXRcclxuICAgICAgICAgICAgICAgICAgICBodGxjSWQ6IG9wZXJhdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlX2hhc2g6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmNvbmRpdGlvbnMuaGFzaF9sb2NrLnByZWltYWdlX2hhc2hbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2Vfc2l6ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQuY29uZGl0aW9ucy5oYXNoX2xvY2sucHJlaW1hZ2VfaGFzaFswXSxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogbW9tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLm1ha2VJU09EYXRlU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmNvbmRpdGlvbnMudGltZV9sb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHBpcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBodGxjSWQ6IG9wZXJhdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlX2hhc2g6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmNvbmRpdGlvbnMuaGFzaF9sb2NrLnByZWltYWdlX2hhc2hbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2Vfc2l6ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQuY29uZGl0aW9ucy5oYXNoX2xvY2sucHJlaW1hZ2VfaGFzaFswXSxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogbW9tZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLm1ha2VJU09EYXRlU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmNvbmRpdGlvbnMudGltZV9sb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHBpcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBlbnN1cmUgaXQncyBhbHdheXMgaW4tc3luY1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGh0bGNJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByZWltYWdlX2hhc2g6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplOiBudWxsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9zeW5jT3BlcmF0aW9uKHRoaXMucHJvcHMub3BlcmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBjb25zdCB7b3BlcmF0aW9ufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmZyb21BY2NvdW50ICE9PSBwcmV2UHJvcHMuZnJvbUFjY291bnQgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQgPT0gbnVsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyByZWZlc2ggYmFsYW5jZXMgYW5kIGZlZVxyXG4gICAgICAgICAgICAvLyB3cml0ZSBwcm9wcyB0byBzdGF0ZVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogdGhpcy5wcm9wcy5mcm9tQWNjb3VudCxcclxuICAgICAgICAgICAgICAgIGZyb21fbmFtZTogdGhpcy5wcm9wcy5mcm9tQWNjb3VudC5nZXQoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJldlByb3BzLm9wZXJhdGlvbiAhPT0gdGhpcy5wcm9wcy5vcGVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fc3luY09wZXJhdGlvbihvcGVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tCYWxhbmNlKCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIGFtb3VudCwgZnJvbV9hY2NvdW50LCBhc3NldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmICghYXNzZXQgfHwgIWZyb21fYWNjb3VudCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VJRCA9IGZyb21fYWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBhc3NldC5nZXQoXCJpZFwiKV0pO1xyXG4gICAgICAgIGNvbnN0IGZlZUJhbGFuY2VJRCA9IGZyb21fYWNjb3VudC5nZXRJbihbXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZXNcIixcclxuICAgICAgICAgICAgZmVlQW1vdW50LmFzc2V0X2lkXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgaWYgKCFhc3NldCB8fCAhZnJvbV9hY2NvdW50KSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFiYWxhbmNlSUQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6IHRydWV9KTtcclxuICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2VJRCk7XHJcbiAgICAgICAgbGV0IGZlZUJhbGFuY2VPYmplY3QgPSBmZWVCYWxhbmNlSURcclxuICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldE9iamVjdChmZWVCYWxhbmNlSUQpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBpZiAoIWZlZUJhbGFuY2VPYmplY3QgfHwgZmVlQmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZUFtb3VudDogZ2V0VW5pbml0aWFsaXplZEZlZUFtb3VudCgpfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYmFsYW5jZU9iamVjdCB8fCAhZmVlQW1vdW50KSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFhbW91bnQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6IGZhbHNlfSk7XHJcbiAgICAgICAgY29uc3QgaGFzQmFsYW5jZSA9IGNoZWNrQmFsYW5jZShcclxuICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgZmVlQW1vdW50LFxyXG4gICAgICAgICAgICBiYWxhbmNlT2JqZWN0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaGFzQmFsYW5jZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogIWhhc0JhbGFuY2V9KTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0VG90YWwoYXNzZXRfaWQsIGJhbGFuY2VfaWQpIHtcclxuICAgICAgICBjb25zdCB7ZmVlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlX2lkKTtcclxuICAgICAgICBsZXQgdHJhbnNmZXJBc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFzc2V0X2lkKTtcclxuXHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRyYW5zZmVyQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogdHJhbnNmZXJBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGZlZUFtb3VudC5hc3NldF9pZCA9PT0gYmFsYW5jZS5hc3NldF9pZCkge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZS5taW51cyhmZWVBbW91bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7bWF4QW1vdW50OiB0cnVlLCBhbW91bnQ6IGJhbGFuY2UuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSl9LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgY29uc3Qge2Zyb21fYWNjb3VudCwgZnJvbV9lcnJvcn0gPSBzdGF0ZTtcclxuICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBbXTtcclxuICAgICAgICBpZiAoIShmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpICYmICFmcm9tX2Vycm9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge2Fzc2V0X3R5cGVzfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBzdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xyXG4gICAgICAgIGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYWNjb3VudF9iYWxhbmNlc1trZXldKTtcclxuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5zcGxpY2UoYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2Fzc2V0X3R5cGVzfTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvQWNjb3VudENoYW5nZWQgPSB0b19hY2NvdW50ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19hY2NvdW50LCBlcnJvcjogbnVsbH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkFtb3VudENoYW5nZWQgPSAoe2Ftb3VudCwgYXNzZXR9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFhc3NldCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGFzc2V0ICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChhc3NldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWF4QW1vdW50OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICB0b0NoYW5nZWQgPSB0b19uYW1lID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19uYW1lLCBlcnJvcjogbnVsbH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkZlZUNoYW5nZWQoZmVlKSB7XHJcbiAgICAgICAgaWYgKCFmZWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IGZlZSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UcnhJbmNsdWRlZChjb25maXJtX3N0b3JlX3N0YXRlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjb25maXJtX3N0b3JlX3N0YXRlLmluY2x1ZGVkICYmXHJcbiAgICAgICAgICAgIGNvbmZpcm1fc3RvcmVfc3RhdGUuYnJvYWRjYXN0ZWRfdHJhbnNhY3Rpb25cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUudW5saXN0ZW4odGhpcy5vblRyeEluY2x1ZGVkKTtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUucmVzZXQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpcm1fc3RvcmVfc3RhdGUuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnVubGlzdGVuKHRoaXMub25UcnhJbmNsdWRlZCk7XHJcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZXBpY2tlclJlZihlbCkge1xyXG4gICAgICAgIGlmIChlbCAmJiBlbC5waWNrZXIuaW5wdXQpIHtcclxuICAgICAgICAgICAgZWwucGlja2VyLmlucHV0LnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXhwaXJhdGlvbkRhdGVDaGFuZ2VkID0gdXRjVmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh1dGNWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7cGVyaW9kX3N0YXJ0X3RpbWV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAgY29uc3QgZXhwID0gdXRjVmFsdWUudmFsdWVPZigpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHBlcmlvZF9zdGFydF90aW1lLnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgY29uc3QgY2xhaW1fcGVyaW9kID0gTWF0aC5mbG9vcigoZXhwIC0gc3RhcnQpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2xhaW1fcGVyaW9kLFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbkRhdGU6IHV0Y1ZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgY2xhaW1fcGVyaW9kOiAwLFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbkRhdGU6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvblByZWltYWdlQ2hhbmdlZCh7XHJcbiAgICAgICAgcHJlaW1hZ2UsXHJcbiAgICAgICAgcHJlaW1hZ2VfY2lwaGVyLFxyXG4gICAgICAgIHByZWltYWdlX2hhc2gsXHJcbiAgICAgICAgcHJlaW1hZ2Vfc2l6ZVxyXG4gICAgfSkge1xyXG4gICAgICAgIGxldCBzdGF0ZUNoYW5nZSA9IHt9O1xyXG4gICAgICAgIGlmIChwcmVpbWFnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN0YXRlQ2hhbmdlLnByZWltYWdlID0gcHJlaW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVpbWFnZV9jaXBoZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzdGF0ZUNoYW5nZS5wcmVpbWFnZV9jaXBoZXIgPSBwcmVpbWFnZV9jaXBoZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVpbWFnZV9oYXNoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3RhdGVDaGFuZ2UucHJlaW1hZ2VfaGFzaCA9IHByZWltYWdlX2hhc2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVpbWFnZV9zaXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3RhdGVDaGFuZ2UucHJlaW1hZ2Vfc2l6ZSA9IHByZWltYWdlX3NpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBlcmlvZCA9IGRheXMgPT4ge1xyXG4gICAgICAgIGxldCBlc3RpbWF0ZWRFeHBpcnkgPSBtb21lbnQoKS5hZGQoZGF5cywgXCJkYXlcIik7XHJcbiAgICAgICAgbGV0IHBlcmlvZCA9IFwib25lX2RheVwiO1xyXG4gICAgICAgIGNvbnN0IGNsYWltX3BlcmlvZCA9IGRheXMgKiA2MCAqIDYwICogMjQ7IC8vIGNvbnZlcnQgZGF5IHRvIHNlY29uZHNcclxuICAgICAgICBzd2l0Y2ggKGRheXMpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcGVyaW9kID0gXCJvbmVfZGF5XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcGVyaW9kID0gXCJ0d29fZGF5c1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIHBlcmlvZCA9IFwib25lX3dlZWtcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNsYWltX3BlcmlvZCxcclxuICAgICAgICAgICAgcGVyaW9kLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogZXN0aW1hdGVkRXhwaXJ5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXHJcbiAgICAgICAgICAgIHRvX2FjY291bnQsXHJcbiAgICAgICAgICAgIGFzc2V0LFxyXG4gICAgICAgICAgICBhc3NldF9pZCxcclxuICAgICAgICAgICAgZmVlQW1vdW50LFxyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIGZyb21fbmFtZSxcclxuICAgICAgICAgICAgdG9fbmFtZSxcclxuICAgICAgICAgICAgYmFsYW5jZUVycm9yLFxyXG4gICAgICAgICAgICBwcmVpbWFnZSxcclxuICAgICAgICAgICAgcHJlaW1hZ2VfY2lwaGVyLFxyXG4gICAgICAgICAgICBjbGFpbV9wZXJpb2QsXHJcbiAgICAgICAgICAgIHByZWltYWdlX2hhc2gsXHJcbiAgICAgICAgICAgIHByZWltYWdlX3NpemUsXHJcbiAgICAgICAgICAgIHBlcmlvZF9zdGFydF90aW1lLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uRGF0ZVxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBmcm9tX215X2FjY291bnQgPVxyXG4gICAgICAgICAgICBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoZnJvbV9hY2NvdW50KSB8fFxyXG4gICAgICAgICAgICBmcm9tX25hbWUgPT09IHRoaXMucHJvcHMucGFzc3dvcmRBY2NvdW50O1xyXG4gICAgICAgIGxldCBmcm9tX2Vycm9yID0gZnJvbV9hY2NvdW50ICYmICFmcm9tX215X2FjY291bnQgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHtvcGVyYXRpb259ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaXNFeHRlbmQgPSBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGUgPT09IFwiZXh0ZW5kXCI7XHJcbiAgICAgICAgY29uc3QgaXNSZWRlZW0gPSBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGUgPT09IFwicmVkZWVtXCI7XHJcblxyXG4gICAgICAgIGxldCB7YXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSAmJiAhZnJvbV9lcnJvcikge1xyXG4gICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XHJcbiAgICAgICAgICAgIGxldCBfZXJyb3IgPSB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IFwiaGFzLWVycm9yXCIgOiBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFzc2V0X3R5cGVzWzBdKTtcclxuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gYXNzZXQgPyBhc3NldC5nZXQoXCJpZFwiKSA6IGFzc2V0X3R5cGVzWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zZXRUb3RhbC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc3NldF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17YWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtfZXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLm5vRnVuZHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYW1vdW50VmFsdWUgPSBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChhbW91bnQsIC8sL2csIFwiXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBpc0Ftb3VudFZhbGlkID0gYW1vdW50VmFsdWUgJiYgIWlzTmFOKGFtb3VudFZhbHVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XHJcbiAgICAgICAgICAgICFmcm9tX2FjY291bnQgfHxcclxuICAgICAgICAgICAgIXRvX2FjY291bnQgfHxcclxuICAgICAgICAgICAgIWlzQW1vdW50VmFsaWQgfHxcclxuICAgICAgICAgICAgIWFzc2V0IHx8XHJcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvciB8fFxyXG4gICAgICAgICAgICBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIikgPT0gdG9fYWNjb3VudC5nZXQoXCJpZFwiKSB8fFxyXG4gICAgICAgICAgICAhKChwcmVpbWFnZV9jaXBoZXIgJiYgcHJlaW1hZ2UpIHx8IHByZWltYWdlX2hhc2gpIHx8XHJcbiAgICAgICAgICAgICFjbGFpbV9wZXJpb2Q7XHJcbiAgICAgICAgbGV0IG1vZGFsVGl0bGUgPVxyXG4gICAgICAgICAgICBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGUgPT09IFwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmh0bGMuY3JlYXRlX2h0bGNcIilcclxuICAgICAgICAgICAgICAgIDogaXNFeHRlbmRcclxuICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmV4dGVuZF9odGxjXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuaHRsYy5yZWRlZW1faHRsY1wiKTtcclxuICAgICAgICBsZXQgc2VuZEJ1dHRvblRleHQgPVxyXG4gICAgICAgICAgICBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGUgPT09IFwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jcmVhdGVcIilcclxuICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC51cGRhdGVcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFtb3VudEhlYWRlciA9IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0LWhlYWRlci0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuaHRsYy5leHBpcmF0aW9uX2RhdGVcIil9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXQtaGVhZGVyLS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwicGVyaW9kLXJvd1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWFjdGl2ZVwiOiB0aGlzLnN0YXRlLnBlcmlvZCA9PT0gXCJvbmVfZGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0UGVyaW9kKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuZXhwaXJhdGlvbl9wZXJpb2Qub25lX2RheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwicGVyaW9kLXJvd1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWFjdGl2ZVwiOiB0aGlzLnN0YXRlLnBlcmlvZCA9PT0gXCJ0d29fZGF5c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFBlcmlvZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLmV4cGlyYXRpb25fcGVyaW9kLnR3b19kYXlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJwZXJpb2Qtcm93XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtYWN0aXZlXCI6IHRoaXMuc3RhdGUucGVyaW9kID09PSBcIm9uZV93ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0UGVyaW9kKDcpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuZXhwaXJhdGlvbl9wZXJpb2Qub25lX3dlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXttb2RhbFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy5pc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkID8gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VuZEJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PVwiQ2FuY2VsXCIgb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNmZXIuY2FuY2VsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogU2VuZGVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5odGxjLnNlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnJvbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuaHRsYy5yZWNpcGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RvX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9DaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uVG9BY2NvdW50Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNFeHRlbmQgfHwgaXNSZWRlZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzUmVkZWVtID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuaHRsYy5hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQW1vdW50Q2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X3R5cGVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17YXNzZXRfdHlwZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFeHRlbmQgfHwgaXNSZWRlZW0gPyB1bmRlZmluZWQgOiBiYWxhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0V4dGVuZCB8fCBpc1JlZGVlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3REaXNhYmxlZD17aXNFeHRlbmQgfHwgaXNSZWRlZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgUHJlaW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0V4dGVuZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLnByZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmVpbWFnZV9oYXNoIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLmhhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZWltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0bXAgPT4gKHRoaXMucHJlaW1hZ2UgPSB0bXApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmh0bGMucHJlaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uPXt0aGlzLm9uUHJlaW1hZ2VDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaD17cHJlaW1hZ2VfaGFzaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplPXtwcmVpbWFnZV9zaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWltYWdlPXtwcmVpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXI9e3ByZWltYWdlX2NpcGhlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uICYmIG9wZXJhdGlvbi50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9wZXJhdGlvbi50eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1JlZGVlbSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICBFeHBpcmF0aW9uICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXthbW91bnRIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0LWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvZGF5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRXhwaXJhdGlvbkRhdGVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItd2lkdGgxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB0aGlzLm9uRGF0ZXBpY2tlclJlZihlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGU9e2N1cnJlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA8IHBlcmlvZF9zdGFydF90aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZXhwaXJhdGlvbkRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tbWFyZ2luIG5vLXBhZGRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaHRsY19jcmVhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIEh0bGNNb2RhbCxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfc3ltYm9sOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZmVlX2Fzc2V0XCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQWNjb3VudHNTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxyXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLm15QWNjb3VudHMsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm15QWNjb3VudHNcclxuICAgICAgICAgICAgKSB8fCBuZXh0UHJvcHMuaGlkZGVuQWNjb3VudHMgIT09IHRoaXMucHJvcHMuaGlkZGVuQWNjb3VudHNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlSGlkZShhY2NvdW50LCBoaWRlLCBlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIEFjY291bnRBY3Rpb25zLnRvZ2dsZUhpZGVBY2NvdW50KGFjY291bnQsIGhpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge215QWNjb3VudHMsIGhpZGRlbkFjY291bnRzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBhY2NvdW50cyA9IGhpZGRlbkFjY291bnRzXHJcbiAgICAgICAgICAgIC50b0FycmF5KClcclxuICAgICAgICAgICAgLmNvbmNhdChteUFjY291bnRzKVxyXG4gICAgICAgICAgICAuc29ydCgpO1xyXG5cclxuICAgICAgICBpZiAoIWFjY291bnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5ub19hY2NvdW50c1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHthY2NvdW50cy5tYXAoYWNjb3VudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0lnbm9yZWQgPSBoaWRkZW5BY2NvdW50cy5oYXMoYWNjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaWRlTGluayA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSWdub3JlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uVG9nZ2xlSGlkZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMub25Ub2dnbGVIaWRlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50LlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc0lnbm9yZWQgPyBcInVuaWdub3JlXCIgOiBcImlnbm9yZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXthY2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2FjY291bnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9hY2NvdW50LyR7YWNjb3VudH0vcGVybWlzc2lvbnNgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy52aWV3X2tleXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2hpZGVMaW5rfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5BY2NvdW50c1NldHRpbmdzID0gY29ubmVjdChBY2NvdW50c1NldHRpbmdzLCB7XHJcbiAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbXlBY2NvdW50czogQWNjb3VudFN0b3JlLmdldE15QWNjb3VudHMoKSxcclxuICAgICAgICAgICAgaGlkZGVuQWNjb3VudHM6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLm15SGlkZGVuQWNjb3VudHNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRzU2V0dGluZ3M7XHJcbiIsImltcG9ydCB7c2F2ZUFzfSBmcm9tIFwiZmlsZS1zYXZlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5cclxuY2xhc3MgQmFja3VwRmF2b3JpdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIG1ha2VCYWNrdXAoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzLnRvSlMoKTtcclxuXHJcbiAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoZGF0YSldLCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11cy1hc2NpaVwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNhdmVBcyhibG9iLCBcImZhdm9yaXRlcy5qc29uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuYmFja3VwX2Zhdm9yaXRlc3RleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMubWFrZUJhY2t1cC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5iYWNrdXBfZmF2b3JpdGVzYnRuXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgQmFja3VwRmF2b3JpdGVzLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFycmVkTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QmFja3VwQ3JlYXRlfSBmcm9tIFwiLi4vV2FsbGV0L0JhY2t1cFwiO1xyXG5pbXBvcnQgQmFja3VwQnJhaW5rZXkgZnJvbSBcIi4uL1dhbGxldC9CYWNrdXBCcmFpbmtleVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBCYWNrdXBGYXZvcml0ZXMgZnJvbSBcIi4vQmFja3VwRmF2b3JpdGVzXCI7XHJcbmltcG9ydCB7U2VsZWN0fSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcblxyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3VwU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogMCxcclxuICAgICAgICAgICAgdHlwZXM6IFtcImJhY2t1cFwiLCBcImJyYWlua2V5XCIsIFwiZmF2b3JpdGVzXCJdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hhbmdlVHlwZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogdGhpcy5zdGF0ZS50eXBlcy5pbmRleE9mKHZhbHVlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3R5cGVzLCByZXN0b3JlVHlwZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gdHlwZXMubWFwKHR5cGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3R5cGV9IHZhbHVlPXt0eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKGBzZXR0aW5ncy5iYWNrdXBjcmVhdGVfJHt0eXBlfWApfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29udGVudDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlc1tyZXN0b3JlVHlwZV0pIHtcclxuICAgICAgICAgICAgY2FzZSBcImJhY2t1cFwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxCYWNrdXBDcmVhdGUgLz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJicmFpbmtleVwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxCYWNrdXBCcmFpbmtleSAvPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZhdm9yaXRlc1wiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxCYWNrdXBGYXZvcml0ZXMgLz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2NoYW5nZVR5cGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZXNbcmVzdG9yZVR5cGVdfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjE2cHhcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcblxyXG5pbXBvcnQgU2V0RGVmYXVsdEZlZUFzc2V0TW9kYWwgZnJvbSBcIi4uL01vZGFsL1NldERlZmF1bHRGZWVBc3NldE1vZGFsXCI7XHJcblxyXG5jbGFzcyBGZWVBc3NldFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJlbnRfYXNzZXQ6XHJcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmFzc2V0c19ieV9zeW1ib2wuZ2V0KHByb3BzLmZlZV9hc3NldCkgfHwgXCIxLjMuMFwiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldCh0aGlzLnN0YXRlLmN1cnJlbnRfYXNzZXQpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInNldHRpbmdzLmN1cnJlbnRfZmVlX2Fzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2Fzc2V0ID8gPEFzc2V0TmFtZSBuYW1lPXthc3NldC5nZXQoXCJzeW1ib2xcIil9IC8+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiMTVweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJvcGVuX2NoYW5nZV9mZWVfYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwic2V0dGluZ3MuY2hhbmdlX2RlZmF1bHRfZmVlX2Fzc2V0XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93TW9kYWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZXREZWZhdWx0RmVlQXNzZXRNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjaGFuZ2VfZmVlX2Fzc2V0X21vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc3NldD17dGhpcy5zdGF0ZS5jdXJyZW50X2Fzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RmVlcz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlRGVmYXVsdD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRfYXNzZXQ6IHZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBGZWVBc3NldFNldHRpbmdzLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZlZV9hc3NldDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImZlZV9hc3NldFwiKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2FsbGV0Q2hhbmdlUGFzc3dvcmQgZnJvbSBcIi4uL1dhbGxldC9XYWxsZXRDaGFuZ2VQYXNzd29yZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxXYWxsZXRDaGFuZ2VQYXNzd29yZCAvPjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgd2lsbFRyYW5zaXRpb25UbyBmcm9tIFwiLi4vLi4vcm91dGVyVHJhbnNpdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzZXRTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0TWVzc2FnZShrZXkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKGtleSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBudWxsfSk7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJuby1ib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJSb2JvdG8tTWVkaXVtLCBhcmlhbCwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2V0dGluZ3MucmVzZXRfdGV4dF9kZXNjcmlwdGlvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsTmFtZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwic2V0dGluZ3MuZ2VuZXJhbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhbE5hbWU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLmdlbmVyYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc05hbWU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLmFjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmF1Y2V0TmFtZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MuZmF1Y2V0X2FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiA2MCwgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMzBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jbGVhclNldHRpbmdzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRNZXNzYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MucmVzdG9yZV9kZWZhdWx0X3N1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbGxUcmFuc2l0aW9uVG8oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzZXR0aW5ncy5yZXNldFwiKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWNvbG9yLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjE4cHhcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge0J1dHRvbiwgTm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcblxyXG5jbGFzcyBSZXN0b3JlRmF2b3JpdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBqc29uOiBudWxsLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkKGV2dCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBmYWxzZSwganNvbjogbnVsbH0pO1xyXG5cclxuICAgICAgICBsZXQgZmlsZSA9IGV2dC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGV2dCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50cyA9IGV2dC50YXJnZXQucmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShjb250ZW50cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0ID0ganNvbltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB7cXVvdGUsIGJhc2V9ID0gbWFya2V0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXF1b3RlIHx8ICFiYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcGFyc2UganNvbiBkYXRhLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtqc29ufSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZpbmlzaCgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goKSB7XHJcbiAgICAgICAgY29uc3Qge2pzb259ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNsZWFyU3RhcnJlZE1hcmtldHMoKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcclxuICAgICAgICAgICAgbGV0IG1hcmtldCA9IGpzb25ba2V5XTtcclxuICAgICAgICAgICAgbGV0IHtxdW90ZSwgYmFzZX0gPSBtYXJrZXQ7XHJcblxyXG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuYWRkU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBOb3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0KFwic2V0dGluZ3MuYmFja3VwX2Zhdm9yaXRlc19zdWNjZXNzXCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtzdGF0ZX0gPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZV9pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLmpzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJzb2xpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDE1XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGxvYWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmJhY2t1cF9mYXZvcml0ZXNfZXJyb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5qc29uICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJwcmltYXJ5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmZpbmlzaC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5iYWNrdXBfZmF2b3JpdGVzX2ZpbmlzaFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RvcmVGYXZvcml0ZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCYWNrdXBSZXN0b3JlfSBmcm9tIFwiLi4vV2FsbGV0L0JhY2t1cFwiO1xyXG5pbXBvcnQgSW1wb3J0S2V5cyBmcm9tIFwiLi4vV2FsbGV0L0ltcG9ydEtleXNcIjtcclxuaW1wb3J0IHtDcmVhdGVXYWxsZXRGcm9tQnJhaW5rZXl9IGZyb20gXCIuLi9XYWxsZXQvV2FsbGV0Q3JlYXRlXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgUmVzdG9yZUZhdm9yaXRlcyBmcm9tIFwiLi9SZXN0b3JlRmF2b3JpdGVzXCI7XHJcbmltcG9ydCB7QnV0dG9uLCBTZWxlY3R9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuXHJcbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0b3JlU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogMCxcclxuICAgICAgICAgICAgdHlwZXM6IFtcImJhY2t1cFwiLCBcImtleVwiLCBcImxlZ2FjeVwiLCBcImJyYWlua2V5XCIsIFwiZmF2b3JpdGVzXCJdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0V2FsbGV0TW9kZSgpIHtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XHJcbiAgICAgICAgICAgIHNldHRpbmc6IFwicGFzc3dvcmRMb2dpblwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hhbmdlVHlwZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByZXN0b3JlVHlwZTogdGhpcy5zdGF0ZS50eXBlcy5pbmRleE9mKHZhbHVlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3Bhc3N3b3JkTG9naW59ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkTG9naW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwic2V0dGluZ3Mud2FsbGV0X3JlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGFyay10ZXh0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLndhbGxldF9yZXF1aXJlZF90ZXh0XCIgLz46XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0V2FsbGV0TW9kZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmVuYWJsZV93YWxsZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB7dHlwZXMsIHJlc3RvcmVUeXBlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0eXBlcy5tYXAodHlwZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17dHlwZX0gdmFsdWU9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoYHNldHRpbmdzLmJhY2t1cF8ke3R5cGV9YCl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGVzW3Jlc3RvcmVUeXBlXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFja3VwXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrdXBSZXN0b3JlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYnJhaW5rZXlcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXhXaWR0aDogXCI0MHJlbVwiLCBwYWRkaW5nQm90dG9tOiAxMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MucmVzdG9yZV9icmFpbmtleV90ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlV2FsbGV0RnJvbUJyYWlua2V5IG5lc3RlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZhdm9yaXRlc1wiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzdG9yZUZhdm9yaXRlcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSA8SW1wb3J0S2V5cyBwcml2YXRlS2V5PXtyZXN0b3JlVHlwZSA9PT0gMX0gLz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2NoYW5nZVR5cGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZXNbcmVzdG9yZVR5cGVdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEludGxBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0ludGxBY3Rpb25zXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFdlYnNvY2tldEFkZE1vZGFsIGZyb20gXCIuL1dlYnNvY2tldEFkZE1vZGFsXCI7XG5pbXBvcnQgU2V0dGluZ3NFbnRyeSBmcm9tIFwiLi9TZXR0aW5nc0VudHJ5XCI7XG5pbXBvcnQgQWNjb3VudHNTZXR0aW5ncyBmcm9tIFwiLi9BY2NvdW50c1NldHRpbmdzXCI7XG5pbXBvcnQgV2FsbGV0U2V0dGluZ3MgZnJvbSBcIi4vV2FsbGV0U2V0dGluZ3NcIjtcbmltcG9ydCBQYXNzd29yZFNldHRpbmdzIGZyb20gXCIuL1Bhc3N3b3JkU2V0dGluZ3NcIjtcbmltcG9ydCBSZXN0b3JlU2V0dGluZ3MgZnJvbSBcIi4vUmVzdG9yZVNldHRpbmdzXCI7XG5pbXBvcnQgUmVzZXRTZXR0aW5ncyBmcm9tIFwiLi9SZXNldFNldHRpbmdzXCI7XG5pbXBvcnQgQmFja3VwU2V0dGluZ3MgZnJvbSBcIi4vQmFja3VwU2V0dGluZ3NcIjtcbmltcG9ydCBBY2Nlc3NTZXR0aW5ncyBmcm9tIFwiLi9BY2Nlc3NTZXR0aW5nc1wiO1xuaW1wb3J0IHtzZXR9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7Z2V0QWxsb3dlZExvZ2lucywgZ2V0RmF1Y2V0fSBmcm9tIFwiLi4vLi4vYnJhbmRpbmdcIjtcbmltcG9ydCB7SW5wdXQsIEZvcm19IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldCBtZW51RW50cmllcyA9IHRoaXMuX2dldE1lbnVFbnRyaWVzKHByb3BzKTtcbiAgICAgICAgbGV0IGFjdGl2ZVNldHRpbmcgPSAwO1xuXG4gICAgICAgIGxldCB0YWJJbmRleCA9ICEhcHJvcHMubWF0Y2gucGFyYW1zLnRhYlxuICAgICAgICAgICAgPyBtZW51RW50cmllcy5pbmRleE9mKHByb3BzLm1hdGNoLnBhcmFtcy50YWIpXG4gICAgICAgICAgICA6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJhY3RpdmVTZXR0aW5nXCIsIDApO1xuICAgICAgICBpZiAodGFiSW5kZXggPj0gMCkgYWN0aXZlU2V0dGluZyA9IHRhYkluZGV4O1xuXG4gICAgICAgIGxldCBnZW5lcmFsID0gW1xuICAgICAgICAgICAgXCJsb2NhbGVcIixcbiAgICAgICAgICAgIFwidW5pdFwiLFxuICAgICAgICAgICAgXCJmZWVfYXNzZXRcIixcbiAgICAgICAgICAgIC8vXCJmaWx0ZXJlZFNlcnZpY2VQcm92aWRlcnNcIixcbiAgICAgICAgICAgIFwiYnJvd3Nlcl9ub3RpZmljYXRpb25zXCIsXG4gICAgICAgICAgICBcInNob3dTZXR0bGVzXCIsXG4gICAgICAgICAgICBcIndhbGxldExvY2tUaW1lb3V0XCIsXG4gICAgICAgICAgICBcInRoZW1lc1wiLFxuICAgICAgICAgICAgXCJzaG93QXNzZXRQZXJjZW50XCIsXG4gICAgICAgICAgICBcInZpZXdPbmx5TW9kZVwiLFxuICAgICAgICAgICAgXCJzaG93UHJvcG9zZWRUeFwiXG4gICAgICAgIF07XG4gICAgICAgIC8vIGRpc2FibGUgdGhhdCB0aGUgdXNlciBjYW4gY2hhbmdlIGxvZ2luIG1ldGhvZCBpZiBvbmx5IG9uZSBpcyBhbGxvd2VkXG4gICAgICAgIGlmIChnZXRBbGxvd2VkTG9naW5zKCkubGVuZ3RoID4gMSkgZ2VuZXJhbC5wdXNoKFwicGFzc3dvcmRMb2dpblwiKTtcbiAgICAgICAgZ2VuZXJhbC5wdXNoKFwicmVzZXRcIik7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzQWRkTm9kZU1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBpc1JlbW92ZU5vZGVNb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVtb3ZlTm9kZToge1xuICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgdXJsOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXBpU2VydmVyOiBwcm9wcy5zZXR0aW5ncy5nZXQoXCJhcGlTZXJ2ZXJcIiksXG4gICAgICAgICAgICBhY3RpdmVTZXR0aW5nLFxuICAgICAgICAgICAgbWVudUVudHJpZXMsXG4gICAgICAgICAgICBzZXR0aW5nRW50cmllczoge1xuICAgICAgICAgICAgICAgIGdlbmVyYWw6IGdlbmVyYWwsXG4gICAgICAgICAgICAgICAgYWNjZXNzOiBbXCJhcGlTZXJ2ZXJcIiwgXCJmYXVjZXRfYWRkcmVzc1wiXVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2hvd0FkZE5vZGVNb2RhbCA9IHRoaXMuc2hvd0FkZE5vZGVNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVBZGROb2RlTW9kYWwgPSB0aGlzLmhpZGVBZGROb2RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93UmVtb3ZlTm9kZU1vZGFsID0gdGhpcy5zaG93UmVtb3ZlTm9kZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZVJlbW92ZU5vZGVNb2RhbCA9IHRoaXMuaGlkZVJlbW92ZU5vZGVNb2RhbC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZSA9IHRoaXMuX2hhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJldlByb3BzLm1hdGNoLnBhcmFtcy50YWIgIT09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnRhYiAmJlxuICAgICAgICAgICAgISF0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy50YWJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZU1lbnUodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudGFiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5wLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIikgIT09XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RW50cmllcyA9IHRoaXMuX2dldE1lbnVFbnRyaWVzKHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgY29uc3QgbWVudUVudHJpZXMgPSB0aGlzLl9nZXRNZW51RW50cmllcyhucCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QWN0aXZlID0gY3VycmVudEVudHJpZXNbdGhpcy5zdGF0ZS5hY3RpdmVTZXR0aW5nXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FjdGl2ZUluZGV4ID0gbWVudUVudHJpZXMuaW5kZXhPZihjdXJyZW50QWN0aXZlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FjdGl2ZSA9IG1lbnVFbnRyaWVzW25ld0FjdGl2ZUluZGV4XTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG1lbnVFbnRyaWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChuZXdBY3RpdmVJbmRleCAmJiBuZXdBY3RpdmVJbmRleCAhPT0gdGhpcy5zdGF0ZS5hY3RpdmVTZXR0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNldHRpbmc6IG1lbnVFbnRyaWVzLmluZGV4T2YoY3VycmVudEFjdGl2ZSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgIW5ld0FjdGl2ZSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlU2V0dGluZyA+IG1lbnVFbnRyaWVzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTZXR0aW5nOiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93QWRkTm9kZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQWRkTm9kZU1vZGFsVmlzaWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlQWRkTm9kZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQWRkTm9kZU1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1JlbW92ZU5vZGVNb2RhbCh1cmwsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1JlbW92ZU5vZGVNb2RhbFZpc2libGU6IHRydWUsXG4gICAgICAgICAgICByZW1vdmVOb2RlOiB7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZVJlbW92ZU5vZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1JlbW92ZU5vZGVNb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgcmVtb3ZlTm9kZToge1xuICAgICAgICAgICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRNZW51RW50cmllcyhwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuZGVwcmVjYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcIndhbGxldFwiLCBcImJhY2t1cFwiXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWVudUVudHJpZXMgPSBbXTtcblxuICAgICAgICBtZW51RW50cmllcy5wdXNoKFwiZ2VuZXJhbFwiKTtcbiAgICAgICAgaWYgKCFwcm9wcy5zZXR0aW5ncy5nZXQoXCJwYXNzd29yZExvZ2luXCIpKSBtZW51RW50cmllcy5wdXNoKFwid2FsbGV0XCIpO1xuICAgICAgICBtZW51RW50cmllcy5wdXNoKFwiYWNjb3VudHNcIik7XG4gICAgICAgIGlmICghcHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKSkgbWVudUVudHJpZXMucHVzaChcInBhc3N3b3JkXCIpO1xuICAgICAgICBpZiAoIXByb3BzLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIikpIG1lbnVFbnRyaWVzLnB1c2goXCJiYWNrdXBcIik7XG4gICAgICAgIGlmICghcHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKSkgbWVudUVudHJpZXMucHVzaChcInJlc3RvcmVcIik7XG4gICAgICAgIG1lbnVFbnRyaWVzLnB1c2goXCJhY2Nlc3NcIik7XG5cbiAgICAgICAgaWYgKGdldEZhdWNldCgpLnNob3cpIG1lbnVFbnRyaWVzLnB1c2goXCJmYXVjZXRfYWRkcmVzc1wiKTtcblxuICAgICAgICBtZW51RW50cmllcy5wdXNoKFwicmVzZXRcIik7XG5cbiAgICAgICAgcmV0dXJuIG1lbnVFbnRyaWVzO1xuICAgIH1cblxuICAgIHRyaWdnZXJNb2RhbChlLCAuLi5hcmdzKSB7XG4gICAgICAgIHRoaXMucmVmcy53c19tb2RhbC5zaG93KGUsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIF9oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UocGF0aCwgdmFsdWUpIHtcbiAgICAgICAgLy8gdXNlIGRpZmZlcmVudCBjaGFuZ2UgaGFuZGxlciBiZWNhdXNlIGNoZWNrYm94IGRvZXNuJ3Qgd29ya1xuICAgICAgICAvLyBub3JtYWwgd2l0aCBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBsZXQgdXBkYXRlZFZhbHVlID0gc2V0KFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy5nZXQoXCJicm93c2VyX25vdGlmaWNhdGlvbnNcIiksXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgKTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICBzZXR0aW5nOiBcImJyb3dzZXJfbm90aWZpY2F0aW9uc1wiLFxuICAgICAgICAgICAgdmFsdWU6IHVwZGF0ZWRWYWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfaGFuZGxlU2V0dGluZ3NFbnRyeUNoYW5nZShzZXR0aW5nLCBpbnB1dCkge1xuICAgICAgICBpZiAoIWlucHV0LnRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VTZXR0aW5nKHNldHRpbmcsIHt0YXJnZXQ6IHt2YWx1ZTogaW5wdXR9fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZVNldHRpbmcoc2V0dGluZywgaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlU2V0dGluZyhzZXR0aW5nLCBlKSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IHtkZWZhdWx0c30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRFbnRyeSh0YXJnZXRWYWx1ZSwgdGFyZ2V0RGVmYXVsdHMpIHtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0RGVmYXVsdHMpIHJldHVybiB0YXJnZXRWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0YXJnZXREZWZhdWx0c1swXS50cmFuc2xhdGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldERlZmF1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc2V0dGluZ3MuJHt0YXJnZXREZWZhdWx0c1tpXS50cmFuc2xhdGV9YFxuICAgICAgICAgICAgICAgICAgICAgICAgKSA9PT0gdGFyZ2V0VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldERlZmF1bHRzLmluZGV4T2YodGFyZ2V0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChzZXR0aW5nKSB7XG4gICAgICAgICAgICBjYXNlIFwibG9jYWxlXCI6XG4gICAgICAgICAgICAgICAgbGV0IG15TG9jYWxlID0gY291bnRlcnBhcnQuZ2V0TG9jYWxlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBteUxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBJbnRsQWN0aW9ucy5zd2l0Y2hMb2NhbGUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nOiBcImxvY2FsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRoZW1lc1wiOlxuICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZzogXCJ0aGVtZXNcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJkZWZhdWx0TWFya2V0c1wiOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwid2FsbGV0TG9ja1RpbWVvdXRcIjpcbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTihuZXdWYWx1ZSkpIG5ld1ZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG5ld1ZhbHVlKSAmJiB0eXBlb2YgbmV3VmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZzogXCJ3YWxsZXRMb2NrVGltZW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImludmVyc2VNYXJrZXRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJjb25maXJtTWFya2V0T3JkZXJcIjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGZpbmRFbnRyeShlLnRhcmdldC52YWx1ZSwgZGVmYXVsdHNbc2V0dGluZ10pID09PSAwOyAvLyBVU0QvQlRTIGlzIHRydWUsIEJUUy9VU0QgaXMgZmFsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFwaVNlcnZlclwiOlxuICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZzogXCJhcGlTZXJ2ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFwaVNlcnZlcjogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInNob3dQcm9wb3NlZFR4XCI6XG4gICAgICAgICAgICBjYXNlIFwic2hvd1NldHRsZXNcIjpcbiAgICAgICAgICAgIGNhc2UgXCJzaG93QXNzZXRQZXJjZW50XCI6XG4gICAgICAgICAgICBjYXNlIFwicGFzc3dvcmRMb2dpblwiOlxuICAgICAgICAgICAgY2FzZSBcInZpZXdPbmx5TW9kZVwiOlxuICAgICAgICAgICAgICAgIGxldCByZWZlcmVuY2UgPSBkZWZhdWx0c1tzZXR0aW5nXVswXTtcbiAgICAgICAgICAgICAgICBpZiAocmVmZXJlbmNlLnRyYW5zbGF0ZSkgcmVmZXJlbmNlID0gcmVmZXJlbmNlLnRyYW5zbGF0ZTtcbiAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZSA9PT0gcmVmZXJlbmNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJmaWx0ZXJlZFNlcnZpY2VQcm92aWRlcnNcIjpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmZWVfYXNzZXRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJ1bml0XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gZGVmYXVsdHNbXCJ1bml0XCJdO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGZpbmRFbnRyeShlLnRhcmdldC52YWx1ZSwgZGVmYXVsdFNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmc6IHNldHRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZWZhdWx0U2V0dGluZ3NbaW5kZXhdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmaW5kRW50cnkoZS50YXJnZXQudmFsdWUsIGRlZmF1bHRzW3NldHRpbmddKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe3NldHRpbmc6IHNldHRpbmcsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZXNldCgpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNsZWFyU2V0dGluZ3MoKTtcbiAgICB9XG5cbiAgICBfcmVkaXJlY3RUb0VudHJ5KGVudHJ5KSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3NldHRpbmdzL1wiICsgZW50cnkpO1xuICAgIH1cblxuICAgIF9vbkNoYW5nZU1lbnUoZW50cnkpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5tZW51RW50cmllcy5pbmRleE9mKGVudHJ5KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVTZXR0aW5nOiBpbmRleFxuICAgICAgICB9KTtcblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe2FjdGl2ZVNldHRpbmc6IGluZGV4fSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3NldHRpbmdzLCBkZWZhdWx0c30gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7bWVudUVudHJpZXMsIGFjdGl2ZVNldHRpbmcsIHNldHRpbmdFbnRyaWVzfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBlbnRyaWVzO1xuICAgICAgICBsZXQgYWN0aXZlRW50cnkgPSBtZW51RW50cmllc1thY3RpdmVTZXR0aW5nXSB8fCBtZW51RW50cmllc1swXTtcblxuICAgICAgICBzd2l0Y2ggKGFjdGl2ZUVudHJ5KSB7XG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudHNcIjpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gPEFjY291bnRzU2V0dGluZ3MgLz47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsZXRcIjpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gPFdhbGxldFNldHRpbmdzIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IDxQYXNzd29yZFNldHRpbmdzIC8+O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYmFja3VwXCI6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IDxCYWNrdXBTZXR0aW5ncyAvPjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInJlc3RvcmVcIjpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gKFxuICAgICAgICAgICAgICAgICAgICA8UmVzdG9yZVNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZExvZ2luPXt0aGlzLnByb3BzLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIil9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFjY2Vzc1wiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxBY2Nlc3NTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgZmF1Y2V0PXtzZXR0aW5ncy5nZXQoXCJmYXVjZXRfYWRkcmVzc1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzPXtkZWZhdWx0cy5hcGlTZXJ2ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2VTZXR0aW5nLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93QWRkTm9kZU1vZGFsPXt0aGlzLnNob3dBZGROb2RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93UmVtb3ZlTm9kZU1vZGFsPXt0aGlzLnNob3dSZW1vdmVOb2RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmYXVjZXRfYWRkcmVzc1wiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFnZXRGYXVjZXQoKS5lZGl0YWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2V0dGluZ3MuZ2V0KFwiZmF1Y2V0X2FkZHJlc3NcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RmF1Y2V0KCkuZWRpdGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9vbkNoYW5nZVNldHRpbmcuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYXVjZXRfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicmVzZXRcIjpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gPFJlc2V0U2V0dGluZ3MgLz47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IHNldHRpbmdFbnRyaWVzW2FjdGl2ZUVudHJ5XS5tYXAoc2V0dGluZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ3NFbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2V0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nPXtzZXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZyA9PT0gXCJmZWVfYXNzZXRcIiA/IFwidW5pdFwiIDogc2V0dGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVTZXR0aW5nc0VudHJ5Q2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTm90aWZpY2F0aW9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZXM9e3RoaXMucHJvcHMubG9jYWxlc09iamVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5zdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm0gbGF5b3V0PXtcInZlcnRpY2FsXCJ9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVwcmVjYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJncmlkLWJsb2NrIHNldHRpbmdzLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBtYWluLWNvbnRlbnQgbWFyZ2luLWJsb2NrIHdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc2hyaW5rIHNldHRpbmdzLW1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDEwLCBwYWRkaW5nTGVmdDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJoZWFkZXIuc2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wicGFuZWwtYmctY29sb3JcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudUVudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gYWN0aXZlU2V0dGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3JlZGlyZWN0VG9FbnRyeS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZW50cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcInNldHRpbmdzLlwiICsgZW50cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLTEyIG5vLW1hcmdpbiB2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMTAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5ncy5cIiArIG1lbnVFbnRyaWVzW2FjdGl2ZVNldHRpbmddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVFbnRyeSAhPSBcImFjY2Vzc1wiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNhZmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgc2V0dGluZ3MuJHttZW51RW50cmllc1thY3RpdmVTZXR0aW5nXX1fdGV4dGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFuZWwtYmctY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VudHJpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxXZWJzb2NrZXRBZGRNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTm9kZT17dGhpcy5zdGF0ZS5yZW1vdmVOb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBZGROb2RlTW9kYWxWaXNpYmxlPXt0aGlzLnN0YXRlLmlzQWRkTm9kZU1vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVtb3ZlTm9kZU1vZGFsVmlzaWJsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc1JlbW92ZU5vZGVNb2RhbFZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkTm9kZUNsb3NlPXt0aGlzLmhpZGVBZGROb2RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZU5vZGVDbG9zZT17dGhpcy5oaWRlUmVtb3ZlTm9kZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpcz17ZGVmYXVsdHNbXCJhcGlTZXJ2ZXJcIl19XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk9e2RlZmF1bHRzW1wiYXBpU2VydmVyXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudXJsID09PSB0aGlzLnN0YXRlLmFwaVNlcnZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIgJiYgYi51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb25uZWN0aW9uPXthcGlTZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FwaVNlcnZlcn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IEludGxTdG9yZSBmcm9tIFwic3RvcmVzL0ludGxTdG9yZVwiO1xyXG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxBbHRDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W1NldHRpbmdzU3RvcmVdfVxyXG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5nczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZGVmYXVsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzT2JqZWN0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJbnRsU3RvcmUuZ2V0U3RhdGUoKS5sb2NhbGVzT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTGF0ZW5jaWVzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuYXBpTGF0ZW5jaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZXR0aW5ncyB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBOb3RpZnkgZnJvbSBcIm5vdGlmeWpzXCI7XHJcbmltcG9ydCBGZWVBc3NldFNldHRpbmdzIGZyb20gXCIuL0ZlZUFzc2V0U2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7Q2hlY2tib3gsIFNlbGVjdCwgSW5wdXQsIEZvcm0sIEJ1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgR2F0ZXdheVNlbGVjdG9yTW9kYWwgZnJvbSBcIi4uL0dhdGV3YXlzL0dhdGV3YXlTZWxlY3Rvck1vZGFsXCI7XHJcblxyXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbTtcclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgaXNHYXRld2F5U2VsZWN0b3JNb2RhbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0dhdGV3YXlTZWxlY3Rvck1vZGFsUmVuZGVyZWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UgPSB0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlR2F0ZXdheVNlbGVjdG9yTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzR2F0ZXdheVNlbGVjdG9yTW9kYWxWaXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dHYXRld2F5U2VsZWN0b3JNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNHYXRld2F5U2VsZWN0b3JNb2RhbFJlbmRlcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBpc0dhdGV3YXlTZWxlY3Rvck1vZGFsVmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRNZXNzYWdlKGtleSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoa2V5KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IG51bGx9KTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlKHBhdGgpIHtcclxuICAgICAgICByZXR1cm4gZXZ0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk5vdGlmaWNhdGlvbkNoYW5nZShwYXRoLCAhIWV2dC50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5zZXR0aW5nID09PSBcImZpbHRlcmVkU2VydmljZVByb3ZpZGVyc1wiKSB7XHJcbiAgICAgICAgICAgIC8vIG9ubHkgcmVyZW5kZXIgZm9yIHRoZSBtb2RhbCwgbm90IHdoZW4gc2V0dGluZ3MgY2hhbmdlZCAodmlzdWFsaXplZCBpbiB0aGUgbW9kYWwhKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlLmlzR2F0ZXdheVNlbGVjdG9yTW9kYWxWaXNpYmxlICE9PVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0dhdGV3YXlTZWxlY3Rvck1vZGFsVmlzaWJsZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtkZWZhdWx0cywgc2V0dGluZywgc2V0dGluZ3N9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgb3B0aW9ucyxcclxuICAgICAgICAgICAgb3B0aW9uYWwsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b24sXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgc2VsZWN0ZWQgPSBzZXR0aW5ncy5nZXQoc2V0dGluZyk7XHJcbiAgICAgICAgbGV0IG5vSGVhZGVyID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoc2V0dGluZykge1xyXG4gICAgICAgICAgICBjYXNlIFwibG9jYWxlXCI6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGRlZmF1bHRzLm1hcChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9uS2V5ID0gXCJsYW5ndWFnZXMuXCIgKyBlbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjb3VudGVycGFydC50cmFuc2xhdGUodHJhbnNsYXRpb25LZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17ZW50cnl9IHZhbHVlPXtlbnRyeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ0aGVtZXNcIjpcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gZGVmYXVsdHMubWFwKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25LZXkgPSBcInNldHRpbmdzLlwiICsgZW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKHRyYW5zbGF0aW9uS2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2VudHJ5fSB2YWx1ZT17ZW50cnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYnJvd3Nlcl9ub3RpZmljYXRpb25zXCI6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLS1ub3RpZmljYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnMtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLS1ub3RpZmljYXRpb25zLS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYnJvd3Nlcl9ub3RpZmljYXRpb25zLmFsbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ISF2YWx1ZS5hbGxvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5ncy5icm93c2VyX25vdGlmaWNhdGlvbnNfYWxsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnMtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy0tbm90aWZpY2F0aW9ucy0taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYnJvd3Nlcl9ub3RpZmljYXRpb25zLmFkZGl0aW9uYWwudHJhbnNmZXJUb01lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdmFsdWUuYWxsb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXZhbHVlLmFkZGl0aW9uYWwudHJhbnNmZXJUb01lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRpdGlvbmFsLnRyYW5zZmVyVG9NZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MuYnJvd3Nlcl9ub3RpZmljYXRpb25zX2FkZGl0aW9uYWxfdHJhbnNmZXJfdG9fbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyEhdmFsdWUuYWxsb3cgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGlmeS5uZWVkc1Blcm1pc3Npb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dvby5nbC96WjdOSFlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnMtLW5vLWJyb3dzZXItc3VwcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwic2V0dGluZ3MuYnJvd3Nlcl9ub3RpZmljYXRpb25zX2Rpc2FibGVkX2J5X2Jyb3dzZXJfbm90aWZ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJmZWVfYXNzZXRcIjpcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gPEZlZUFzc2V0U2V0dGluZ3Mga2V5PVwiZmVlX2Fzc2V0X2NvbXBvbmVudFwiIC8+O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZmlsdGVyZWRTZXJ2aWNlUHJvdmlkZXJzXCI6XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0dhdGV3YXlTZWxlY3Rvck1vZGFsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENob29zZSBleHRlcm5hbCBTZXJ2aWNlIFByb3ZpZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNHYXRld2F5U2VsZWN0b3JNb2RhbFJlbmRlcmVkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHYXRld2F5U2VsZWN0b3JNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzR2F0ZXdheVNlbGVjdG9yTW9kYWxWaXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlR2F0ZXdheVNlbGVjdG9yTW9kYWwuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZGVmYXVsdE1hcmtldHNcIjpcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwid2FsbGV0TG9ja1RpbWVvdXRcIjpcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy0taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlLmJpbmQodGhpcywgc2V0dGluZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdGVkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBkZWZhdWx0c1tzZWxlY3RlZF07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RlZCA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBkZWZhdWx0c1swXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGRlZmF1bHRzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdGVkID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gZGVmYXVsdHMubWFwKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGVudHJ5LnRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc2V0dGluZ3MuJHtlbnRyeS50cmFuc2xhdGV9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZyA9PT0gXCJ1bml0XCIgfHwgc2V0dGluZyA9PT0gXCJmZWVfYXNzZXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gPEFzc2V0TmFtZSBuYW1lPXtlbnRyeX0gLz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IGVudHJ5LnRyYW5zbGF0ZSA/IGVudHJ5LnRyYW5zbGF0ZSA6IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudHJhbnNsYXRlID8gZW50cnkudHJhbnNsYXRlIDogZW50cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnByb3BzLm9uQ2hhbmdlLmJpbmQodGhpcywgc2V0dGluZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiICYmICF2YWx1ZSAmJiAhb3B0aW9ucykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50cmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50cmFuc2xhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBFbnRyeUxheW91dCA9ICh7bm9IZWFkZXIsIHNldHRpbmcsIGNoaWxkcmVufSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIHsobm9IZWFkZXIgJiYgY2hpbGRyZW4pIHx8IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKGBzZXR0aW5ncy4ke3NldHRpbmd9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJuby1ib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8RW50cnlMYXlvdXQgbm9IZWFkZXI9e25vSGVhZGVyfSBzZXR0aW5nPXtzZXR0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJ1bnN0eWxlZC1saXN0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIndpdGgtZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25maXJtQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7aW5wdXQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1widW5zdHlsZWQtbGlzdFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57aW5wdXR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2NvbXBvbmVudCA/IGNvbXBvbmVudCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0VudHJ5TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNvbG9yLXN1Y2Nlc3NcIj57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NoYW5nZUFjdGl2ZVdhbGxldCwgV2FsbGV0RGVsZXRlfSBmcm9tIFwiLi4vV2FsbGV0L1dhbGxldE1hbmFnZXJcIjtcbmltcG9ydCBCYWxhbmNlQ2xhaW1BY3RpdmUgZnJvbSBcIi4uL1dhbGxldC9CYWxhbmNlQ2xhaW1BY3RpdmVcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQge0Zvcm0sIEJ1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbGV0U2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb29rdXBBY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgcmVzZXRNZXNzYWdlOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25Mb29rdXAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9va3VwQWN0aXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVzZXRCcmFpbmtleVNlcXVlbmNlKCkge1xuICAgICAgICBXYWxsZXREYi5yZXNldEJyYWluS2V5U2VxdWVuY2UoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZXNldE1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIndhbGxldC5icmFpbmtleV9yZXNldF9zdWNjZXNzXCIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtsb29rdXBBY3RpdmV9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHtkZXByZWNhdGVkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGRlcHJlY2F0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPENoYW5nZUFjdGl2ZVdhbGxldCAvPlxuICAgICAgICAgICAgICAgICAgICA8V2FsbGV0RGVsZXRlIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPENoYW5nZUFjdGl2ZVdhbGxldCAvPlxuICAgICAgICAgICAgICAgIDxXYWxsZXREZWxldGUgLz5cblxuICAgICAgICAgICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmJhbGFuY2VfY2xhaW1zXCIpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1vZmZzZXRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMTVweCAwXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5sb29rdXBfdGV4dFwiIC8+OlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uTG9va3VwLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhbGFuY2VfY2xhaW1fbG9va3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICAgICAgICAgIHtsb29rdXBBY3RpdmUgPyA8QmFsYW5jZUNsYWltQWN0aXZlIC8+IDogbnVsbH1cblxuICAgICAgICAgICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmJyYWlua2V5X3NlcV9yZXNldFwiKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tb2Zmc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjE1cHhcIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zYWZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfc2VxX3Jlc2V0X3RleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlc2V0QnJhaW5rZXlTZXF1ZW5jZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleV9zZXFfcmVzZXRfYnV0dG9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVzZXRNZXNzYWdlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWNvbG9yLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVzZXRNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gICAgSW5wdXQsXG4gICAgQ2FyZCxcbiAgICBDb2wsXG4gICAgUm93LFxuICAgIEJ1dHRvbixcbiAgICBTd2l0Y2gsXG4gICAgVG9vbHRpcCxcbiAgICBJY29uLFxuICAgIFBvcG92ZXIsXG4gICAgQWxlcnRcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcbmltcG9ydCBGZWVBc3NldFNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtjaGVja0JhbGFuY2V9IGZyb20gXCJjb21tb24vdHJ4SGVscGVyXCI7XG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XG5pbXBvcnQgQXBwbGljYXRpb25BcGkgZnJvbSBcIi4uLy4uL2FwaS9BcHBsaWNhdGlvbkFwaVwiO1xuaW1wb3J0IHttYXB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcblxuZnVuY3Rpb24gbW92ZURlY2ltYWwobnVtLCBkZWNpbWFscykge1xuICAgIGlmICghbnVtKSByZXR1cm47XG4gICAgcmV0dXJuIG51bSAvIE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJ0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZnJvbV9uYW1lOiBcIlwiLFxuICAgICAgICAgICAgdG9fbmFtZTogXCJcIixcbiAgICAgICAgICAgIGZyb21fYWNjb3VudDogbnVsbCxcbiAgICAgICAgICAgIHRvX2FjY291bnQ6IG51bGwsXG4gICAgICAgICAgICBmcm9tX2JhcnRlcjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2Fzc2V0X2lkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2Fzc2V0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2ZlZUFzc2V0OiBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2hhc1Bvb2xCYWxhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2JhbGFuY2VFcnJvcjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdG9fYmFydGVyOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG9fYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB0b19hc3NldF9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9fYXNzZXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRvX2ZlZUFzc2V0OiBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pLFxuICAgICAgICAgICAgICAgICAgICB0b19oYXNQb29sQmFsYW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9fYmFsYW5jZUVycm9yOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhbW91bnRfY291bnRlcjogW10sXG4gICAgICAgICAgICBhbW91bnRfaW5kZXg6IDAsXG4gICAgICAgICAgICBmcm9tX2Vycm9yOiBudWxsLFxuICAgICAgICAgICAgdG9fZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBtZW1vOiB7XG4gICAgICAgICAgICAgICAgZnJvbV9iYXJ0ZXI6IFt7bWVzc2FnZTogXCJcIiwgc2hvd246IGZhbHNlfV0sXG4gICAgICAgICAgICAgICAgdG9fYmFydGVyOiBbe21lc3NhZ2U6IFwiXCIsIHNob3duOiBmYWxzZX1dLFxuICAgICAgICAgICAgICAgIGVzY3JvdzogW3ttZXNzYWdlOiBcIlwiLCBzaG93bjogZmFsc2V9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3Bvc2FsX2ZlZToge1xuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0VzY3JvdzogZmFsc2UsXG4gICAgICAgICAgICBlc2Nyb3dfYWNjb3VudF9uYW1lOiBcIlwiLFxuICAgICAgICAgICAgZXNjcm93X2FjY291bnQ6IG51bGwsXG4gICAgICAgICAgICBzZW5kX3RvX2VzY3JvdzogZmFsc2UsXG4gICAgICAgICAgICBlc2Nyb3dfcGF5bWVudDogMCxcbiAgICAgICAgICAgIGVzY3Jvd19wYXltZW50X2NoYW5nZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZXNjcm93RmVlQXNzZXRJZDogXCIxLjMuMFwiLFxuICAgICAgICAgICAgYmFsYW5jZVdhcm5pbmc6IHtwZWVyMTogW10sIHBlZXIyOiBbXX1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25UcnhJbmNsdWRlZCA9IHRoaXMub25UcnhJbmNsdWRlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50O1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZnJvbV9uYW1lKSB0aGlzLnNldFN0YXRlKHtmcm9tX25hbWU6IGN1cnJlbnRBY2NvdW50fSk7XG4gICAgfVxuXG4gICAgZnJvbUNoYW5nZWQoZnJvbV9uYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zyb21fbmFtZX0pO1xuICAgIH1cblxuICAgIGVzY3Jvd0FjY291bnRDaGFuZ2VkKGVzY3Jvd19hY2NvdW50X25hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXNjcm93X2FjY291bnRfbmFtZX0pO1xuICAgIH1cblxuICAgIG9uRnJvbUFjY291bnRDaGFuZ2VkKGZyb21fYWNjb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcbiAgICAgICAgICAgIGZyb21fYmFydGVyOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmcm9tX2Ftb3VudDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9hc3NldF9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9hc3NldDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9mZWVBc3NldDogbmV3IEFzc2V0KHthbW91bnQ6IDAsIGFzc2V0X2lkOiBcIjEuMy4wXCJ9KSxcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9oYXNQb29sQmFsYW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9iYWxhbmNlRXJyb3I6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkVzY3Jvd0FjY291bnRDaGFuZ2VkKGVzY3Jvd19hY2NvdW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXNjcm93X2FjY291bnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9DaGFuZ2VkKHRvX25hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fbmFtZX0pO1xuICAgIH1cblxuICAgIG9uVG9BY2NvdW50Q2hhbmdlZCh0b19hY2NvdW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIHRvX2JhcnRlcjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9fYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB0b19hc3NldF9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9fYXNzZXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRvX2ZlZUFzc2V0OiBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pLFxuICAgICAgICAgICAgICAgICAgICB0b19oYXNQb29sQmFsYW5jZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9fYmFsYW5jZUVycm9yOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Gcm9tQW1vdW50Q2hhbmdlZChpbmRleCwgZSkge1xuICAgICAgICBjb25zdCBhc3NldCA9IGUuYXNzZXQ7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IGUuYW1vdW50O1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZyb21fYmFydGVyID0gWy4uLnRoaXMuc3RhdGUuZnJvbV9iYXJ0ZXJdO1xuXG4gICAgICAgIGZyb21fYmFydGVyW2luZGV4XSA9IHtcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgZnJvbV9hbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgIGZyb21fYXNzZXQ6IGFzc2V0LFxuICAgICAgICAgICAgZnJvbV9hc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBmcm9tX2JhbGFuY2VFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBmcm9tX2ZlZUFzc2V0OiBmcm9tX2JhcnRlcltpbmRleF0uZnJvbV9mZWVBc3NldFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJvbV9iYXJ0ZXI6IGZyb21fYmFydGVyLFxuICAgICAgICAgICAgICAgIGZyb21fZXJyb3I6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2JhcnRlcltpbmRleF0uZnJvbV9mZWVBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZyb21fYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2JhcnRlcltpbmRleF0uZnJvbV9mZWVBc3NldC5hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9iYXJ0ZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbW91bnRzVG90YWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblRvQW1vdW50Q2hhbmdlZChpbmRleCwgZSkge1xuICAgICAgICBjb25zdCBhc3NldCA9IGUuYXNzZXQ7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IGUuYW1vdW50O1xuICAgICAgICBpZiAoIWFzc2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvX2JhcnRlciA9IFsuLi50aGlzLnN0YXRlLnRvX2JhcnRlcl07XG5cbiAgICAgICAgdG9fYmFydGVyW2luZGV4XSA9IHtcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgdG9fYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICB0b19hc3NldDogYXNzZXQsXG4gICAgICAgICAgICB0b19hc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICB0b19mZWVBc3NldDogdG9fYmFydGVyW2luZGV4XS50b19mZWVBc3NldCxcbiAgICAgICAgICAgIHRvX2JhbGFuY2VFcnJvcjogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvX2JhcnRlcjogdG9fYmFydGVyLFxuICAgICAgICAgICAgICAgIHRvX2Vycm9yOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZShcbiAgICAgICAgICAgICAgICAgICAgdG9fYmFydGVyW2luZGV4XS50b19mZWVBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvX2FjY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRvX2JhcnRlcltpbmRleF0udG9fZmVlQXNzZXQuYXNzZXRfaWQsXG4gICAgICAgICAgICAgICAgICAgIHRvX2JhcnRlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0Ftb3VudHNUb3RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9jaGVja0JhbGFuY2UoXG4gICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBhY2NvdW50LFxuICAgICAgICBhc3NldCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGZyb20sXG4gICAgICAgIGZlZV9hc3NldF9pZCxcbiAgICAgICAgYmFydGVyXG4gICAgKSB7XG4gICAgICAgIGlmICghYXNzZXQgfHwgIWFjY291bnQpIHJldHVybjtcbiAgICAgICAgY29uc3QgYmFsYW5jZUlEID0gYWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBhc3NldC5nZXQoXCJpZFwiKV0pO1xuICAgICAgICBjb25zdCBmZWVCYWxhbmNlSUQgPSBhY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGZlZUFtb3VudC5hc3NldF9pZF0pO1xuICAgICAgICBpZiAoIWFzc2V0IHx8ICFhY2NvdW50KSByZXR1cm47XG4gICAgICAgIGlmICghYmFsYW5jZUlEKVxuICAgICAgICAgICAgaWYgKGZyb20pIHtcbiAgICAgICAgICAgICAgICBiYXJ0ZXJbaW5kZXhdLmZyb21fYmFsYW5jZUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7ZnJvbV9iYXJ0ZXI6IGJhcnRlcn0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYXJ0ZXJbaW5kZXhdLnRvX2JhbGFuY2VFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe3RvX2JhcnRlcjogYmFydGVyfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZUlEKTtcbiAgICAgICAgbGV0IGZlZUJhbGFuY2VPYmplY3QgPSBmZWVCYWxhbmNlSURcbiAgICAgICAgICAgID8gQ2hhaW5TdG9yZS5nZXRPYmplY3QoZmVlQmFsYW5jZUlEKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBpZiAoIWZlZUJhbGFuY2VPYmplY3QgfHwgZmVlQmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoZnJvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zyb21fYmFydGVyOiBiYXJ0ZXJ9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYmFydGVyOiBiYXJ0ZXJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJhbGFuY2VPYmplY3QgfHwgIWZlZUFtb3VudCkgcmV0dXJuO1xuICAgICAgICBpZiAoIWFtb3VudClcbiAgICAgICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICAgICAgYmFydGVyW2luZGV4XS5mcm9tX2JhbGFuY2VFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtmcm9tX2JhcnRlcjogYmFydGVyfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhcnRlcltpbmRleF0udG9fYmFsYW5jZUVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe3RvX2JhcnRlcjogYmFydGVyfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhc0JhbGFuY2UgPSBjaGVja0JhbGFuY2UoXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgICAgIGJhbGFuY2VPYmplY3RcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoaGFzQmFsYW5jZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAoZnJvbSkge1xuICAgICAgICAgICAgYmFydGVyW2luZGV4XS5mcm9tX2JhbGFuY2VFcnJvciA9ICFoYXNCYWxhbmNlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2Zyb21fYmFydGVyOiBiYXJ0ZXJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhcnRlcltpbmRleF0udG9fYmFsYW5jZUVycm9yID0gIWhhc0JhbGFuY2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7dG9fYmFydGVyOiBiYXJ0ZXJ9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHtmcm9tX2FjY291bnQsIGZyb21fZXJyb3IsIHRvX2FjY291bnQsIHRvX2Vycm9yfSA9IHN0YXRlO1xuXG4gICAgICAgIGxldCBnZXRBc3NldFR5cGVzID0gKGFjY291bnQsIGVycikgPT4ge1xuICAgICAgICAgICAgbGV0IGFzc2V0X3R5cGVzID0gW10sXG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzID0gW107XG4gICAgICAgICAgICBpZiAoIShhY2NvdW50ICYmIGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikgJiYgIWVycikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2Fzc2V0X3R5cGVzLCBmZWVfYXNzZXRfdHlwZXN9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgICAgIGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xuICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWNjb3VudF9iYWxhbmNlcykge1xuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYWNjb3VudF9iYWxhbmNlc1trZXldKTtcbiAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCAmJiBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMuc3BsaWNlKGFzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHthc3NldF90eXBlcywgZmVlX2Fzc2V0X3R5cGVzfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZnJvbSA9IGdldEFzc2V0VHlwZXMoZnJvbV9hY2NvdW50LCBmcm9tX2Vycm9yKTtcbiAgICAgICAgbGV0IHRvID0gZ2V0QXNzZXRUeXBlcyh0b19hY2NvdW50LCB0b19lcnJvcik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZyb21fYXNzZXRfdHlwZXM6IGZyb20uYXNzZXRfdHlwZXMgfHwgW10sXG4gICAgICAgICAgICB0b19hc3NldF90eXBlczogdG8uYXNzZXRfdHlwZXMgfHwgW10sXG4gICAgICAgICAgICBmcm9tX2ZlZV9hc3NldF90eXBlczogZnJvbS5mZWVfYXNzZXRfdHlwZXMgfHwgW10sXG4gICAgICAgICAgICB0b19mZWVfYXNzZXRfdHlwZXM6IHRvLmZlZV9hc3NldF90eXBlcyB8fCBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFkZEZyb21BbW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZnJvbV9iYXJ0ZXIucHVzaCh7XG4gICAgICAgICAgICBmcm9tX2Ftb3VudDogXCJcIixcbiAgICAgICAgICAgIGZyb21fYXNzZXRfaWQ6IG51bGwsXG4gICAgICAgICAgICBmcm9tX2Fzc2V0OiBudWxsLFxuICAgICAgICAgICAgZnJvbV9mZWVBc3NldDogbmV3IEFzc2V0KHthbW91bnQ6IDAsIGFzc2V0X2lkOiBcIjEuMy4wXCJ9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9iYXJ0ZXI6IHRoaXMuc3RhdGUuZnJvbV9iYXJ0ZXJ9KTtcbiAgICB9XG5cbiAgICBhZGRUb0Ftb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS50b19iYXJ0ZXIucHVzaCh7XG4gICAgICAgICAgICB0b19hbW91bnQ6IFwiXCIsXG4gICAgICAgICAgICB0b19hc3NldF9pZDogbnVsbCxcbiAgICAgICAgICAgIHRvX2Fzc2V0OiBudWxsLFxuICAgICAgICAgICAgdG9fZmVlQXNzZXQ6IG5ldyBBc3NldCh7YW1vdW50OiAwLCBhc3NldF9pZDogXCIxLjMuMFwifSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2JhcnRlcjogdGhpcy5zdGF0ZS50b19iYXJ0ZXJ9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9lcnJvcjogbnVsbCwgdG9fZXJyb3I6IG51bGx9KTtcbiAgICAgICAgbGV0IHNlbmRBbW91bnQ7XG4gICAgICAgIGxldCB0cmFuc2Zlcl9saXN0ID0gW107XG5cbiAgICAgICAgbGV0IHByb3Bvc2VyID0gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQ7XG5cbiAgICAgICAgbGV0IGxlZnRfYWNjb3VudCA9IHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50O1xuICAgICAgICBsZXQgZXNjcm93TWVtbyA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1lbW9bXCJlc2Nyb3dcIl1bMF0gJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcImVzY3Jvd1wiXVswXS5tZXNzYWdlO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dFc2Nyb3cgJiYgdGhpcy5zdGF0ZS5zZW5kX3RvX2VzY3Jvdykge1xuICAgICAgICAgICAgbGVmdF9hY2NvdW50ID0gdGhpcy5zdGF0ZS5lc2Nyb3dfYWNjb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dFc2Nyb3cpIHtcbiAgICAgICAgICAgIGxldCBlc2Nyb3dfcGF5bWVudCA9IHRoaXMuc3RhdGUuZXNjcm93X3BheW1lbnRfY2hhbmdlZFxuICAgICAgICAgICAgICAgID8gbmV3IEFzc2V0KHtyZWFsOiB0aGlzLnN0YXRlLmVzY3Jvd19wYXltZW50fSkuZ2V0QW1vdW50KClcbiAgICAgICAgICAgICAgICA6IGZlZSh0cnVlKTtcbiAgICAgICAgICAgIGlmIChlc2Nyb3dfcGF5bWVudCA+IDApIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zlcl9saXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQ6IHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICB0b19hY2NvdW50OiB0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGVzY3Jvd19wYXltZW50LFxuICAgICAgICAgICAgICAgICAgICBhc3NldDogXCIxLjMuMFwiLFxuICAgICAgICAgICAgICAgICAgICBtZW1vOiBlc2Nyb3dNZW1vID8gbmV3IEJ1ZmZlcihlc2Nyb3dNZW1vLCBcInV0Zi04XCIpIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZmVlQXNzZXQ6IHRoaXMuc3RhdGUuZXNjcm93RmVlQXNzZXRJZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvcG9zZV9hY2NvdW50OiBwcm9wb3NlclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5mcm9tX2JhcnRlci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBpdGVtLmZyb21fYXNzZXQ7XG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gaXRlbS5mcm9tX2Ftb3VudDtcbiAgICAgICAgICAgIHNlbmRBbW91bnQgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIHJlYWw6IGFtb3VudCxcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgZnJvbUJhcnRlck1lbW8gPVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcImZyb21fYmFydGVyXCJdW2luZGV4XSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcImZyb21fYmFydGVyXCJdW2luZGV4XS5tZXNzYWdlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93RXNjcm93ICYmIHRoaXMuc3RhdGUuc2VuZF90b19lc2Nyb3cpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zlcl9saXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQ6IHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICB0b19hY2NvdW50OiB0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHNlbmRBbW91bnQuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgbWVtbzogZXNjcm93TWVtbyA/IG5ldyBCdWZmZXIoZXNjcm93TWVtbywgXCJ1dGYtOFwiKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGZlZUFzc2V0OiBpdGVtLmZyb21fZmVlQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5mcm9tX2ZlZUFzc2V0LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiMS4zLjBcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cmFuc2Zlcl9saXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogbGVmdF9hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IHRoaXMuc3RhdGUudG9fYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHNlbmRBbW91bnQuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIG1lbW86IGZyb21CYXJ0ZXJNZW1vXG4gICAgICAgICAgICAgICAgICAgID8gbmV3IEJ1ZmZlcihmcm9tQmFydGVyTWVtbywgXCJ1dGYtOFwiKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgZmVlQXNzZXQ6IGl0ZW0uZnJvbV9mZWVBc3NldFxuICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uZnJvbV9mZWVBc3NldC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA6IFwiMS4zLjBcIixcbiAgICAgICAgICAgICAgICBwcm9wb3NlX2FjY291bnQ6IHByb3Bvc2VyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0VzY3JvdyAmJiAhdGhpcy5zdGF0ZS5zZW5kX3RvX2VzY3Jvdykge1xuICAgICAgICAgICAgdHJhbnNmZXJfbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQ6IHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgdG9fYWNjb3VudDogdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxLFxuICAgICAgICAgICAgICAgIGFzc2V0OiBcIjEuMy4wXCIsXG4gICAgICAgICAgICAgICAgbWVtbzogbnVsbCxcbiAgICAgICAgICAgICAgICBmZWVBc3NldDogdGhpcy5zdGF0ZS5lc2Nyb3dGZWVBc3NldElkLFxuICAgICAgICAgICAgICAgIHByb3Bvc2VfYWNjb3VudDogcHJvcG9zZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZS50b19iYXJ0ZXIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gaXRlbS50b19hc3NldDtcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSBpdGVtLnRvX2Ftb3VudDtcbiAgICAgICAgICAgIGxldCB0b0JhcnRlck1lbW8gPVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcInRvX2JhcnRlclwiXVtpbmRleF0gJiZcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1lbW9bXCJ0b19iYXJ0ZXJcIl1baW5kZXhdLm1lc3NhZ2U7XG4gICAgICAgICAgICBzZW5kQW1vdW50ID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICByZWFsOiBhbW91bnQsXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRyYW5zZmVyX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiB0aGlzLnN0YXRlLnRvX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgdG9fYWNjb3VudDogdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgYW1vdW50OiBzZW5kQW1vdW50LmdldEFtb3VudCgpLFxuICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBtZW1vOiB0b0JhcnRlck1lbW8gPyBuZXcgQnVmZmVyKHRvQmFydGVyTWVtbywgXCJ1dGYtOFwiKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgZmVlQXNzZXQ6IGl0ZW0udG9fZmVlQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgPyBpdGVtLnRvX2ZlZUFzc2V0LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIDogXCIxLjMuMFwiLFxuICAgICAgICAgICAgICAgIHByb3Bvc2VfYWNjb3VudDogcHJvcG9zZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBBcHBsaWNhdGlvbkFwaS50cmFuc2Zlcl9saXN0KFxuICAgICAgICAgICAgdHJhbnNmZXJfbGlzdCxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJvcG9zYWxfZmVlLmFzc2V0X2lkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25UcnhJbmNsdWRlZChjb25maXJtX3N0b3JlX3N0YXRlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbmZpcm1fc3RvcmVfc3RhdGUuaW5jbHVkZWQgJiZcbiAgICAgICAgICAgIGNvbmZpcm1fc3RvcmVfc3RhdGUuYnJvYWRjYXN0ZWRfdHJhbnNhY3Rpb25cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS51bmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUucmVzZXQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25maXJtX3N0b3JlX3N0YXRlLmNsb3NlZCkge1xuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUudW5saXN0ZW4odGhpcy5vblRyeEluY2x1ZGVkKTtcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1lbW9DaGFuZ2VkID0gKHR5cGUsIGluZGV4KSA9PiBlID0+IHtcbiAgICAgICAgY29uc3QgbWVtb3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm1lbW8pO1xuICAgICAgICBtZW1vc1t0eXBlXVtpbmRleF0gPSB7bWVzc2FnZTogZS50YXJnZXQudmFsdWUsIHNob3duOiB0cnVlfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVtbzogbWVtb3N9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyTWVtb0ZpZWxkKHR5cGUsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHttZW1vfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IG1lbW9WYWx1ZSA9XG4gICAgICAgICAgICBtZW1vW3R5cGVdW2luZGV4XSAmJiBtZW1vW3R5cGVdW2luZGV4XS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgPyBtZW1vW3R5cGVdW2luZGV4XS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIubWVtb1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDB9fVxuICAgICAgICAgICAgICAgICAgICByb3dzPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1vVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWVtb0NoYW5nZWQodHlwZSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNZW1vT3BlbiA9ICh0eXBlLCBpbmRleCkgPT4gZSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbW9zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5tZW1vKTtcbiAgICAgICAgbWVtb3NbdHlwZV1baW5kZXhdID0ge21lc3NhZ2U6IFwiXCIsIHNob3duOiB0cnVlfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVtbzogbWVtb3N9KTtcbiAgICB9O1xuXG4gICAgZ2V0QmFsYW5jZShhY2NvdW50LCBhc3NldFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIENoYWluU3RvcmUuZ2V0QWNjb3VudEJhbGFuY2UoYWNjb3VudCwgYXNzZXRUeXBlKTtcbiAgICB9XG5cbiAgICBjaGVja0Ftb3VudHNUb3RhbCgpIHtcbiAgICAgICAgY29uc3Qge2Zyb21fYmFydGVyLCB0b19iYXJ0ZXIsIGZyb21fYWNjb3VudCwgdG9fYWNjb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgcGVlcjFBbW91bnRzID0ge307XG4gICAgICAgIGxldCBwZWVyMkFtb3VudHMgPSB7fTtcblxuICAgICAgICAvLyBmb3IgcGVlcjFcbiAgICAgICAgZnJvbV9iYXJ0ZXIuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5mcm9tX2Ftb3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChwZWVyMUFtb3VudHMuaGFzT3duUHJvcGVydHkoaXRlbS5mcm9tX2Fzc2V0X2lkKSkge1xuICAgICAgICAgICAgICAgICAgICBwZWVyMUFtb3VudHNbaXRlbS5mcm9tX2Fzc2V0X2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIocGVlcjFBbW91bnRzW2l0ZW0uZnJvbV9hc3NldF9pZF0uYW1vdW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGl0ZW0uZnJvbV9hbW91bnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBpdGVtLmZyb21fYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBpdGVtLmZyb21fYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVlcjFBbW91bnRzW2l0ZW0uZnJvbV9hc3NldF9pZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IE51bWJlcihpdGVtLmZyb21fYW1vdW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogaXRlbS5mcm9tX2Fzc2V0LmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogaXRlbS5mcm9tX2Fzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBlZXIxQW1vdW50c0Zvcm1hdGVkID0gbWFwKHBlZXIxQW1vdW50cywgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IGJhbGFuY2VPZkN1cnJlbnRBc3NldCA9IHRoaXMuZ2V0QmFsYW5jZShmcm9tX2FjY291bnQsIGtleSk7XG4gICAgICAgICAgICBsZXQgZGVjaW1hbHMgPSBNYXRoLm1heCgwLCBpdGVtLnByZWNpc2lvbik7XG4gICAgICAgICAgICBsZXQgZm9ybWF0ZWRCYWxhbmNlID0gYmFsYW5jZU9mQ3VycmVudEFzc2V0XG4gICAgICAgICAgICAgICAgPyBtb3ZlRGVjaW1hbChiYWxhbmNlT2ZDdXJyZW50QXNzZXQsIGRlY2ltYWxzKVxuICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgIGl0ZW0uYXNzZXRJZCA9IGtleTtcbiAgICAgICAgICAgIGlmIChpdGVtLmFtb3VudCA+IGZvcm1hdGVkQmFsYW5jZSkge1xuICAgICAgICAgICAgICAgIGl0ZW0ud2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXRlbS5iYWxhbmNlID0gZm9ybWF0ZWRCYWxhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZvciBwZWVyMlxuICAgICAgICB0b19iYXJ0ZXIuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS50b19hbW91bnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGVlcjJBbW91bnRzLmhhc093blByb3BlcnR5KGl0ZW0udG9fYXNzZXRfaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlZXIyQW1vdW50c1tpdGVtLnRvX2Fzc2V0X2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIocGVlcjJBbW91bnRzW2l0ZW0udG9fYXNzZXRfaWRdLmFtb3VudCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihpdGVtLnRvX2Ftb3VudCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IGl0ZW0udG9fYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBpdGVtLnRvX2Fzc2V0LmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBlZXIyQW1vdW50c1tpdGVtLnRvX2Fzc2V0X2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKGl0ZW0udG9fYW1vdW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogaXRlbS50b19hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGl0ZW0udG9fYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcGVlcjJBbW91bnRzRm9ybWF0ZWQgPSBtYXAocGVlcjJBbW91bnRzLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9mQ3VycmVudEFzc2V0ID0gdGhpcy5nZXRCYWxhbmNlKHRvX2FjY291bnQsIGtleSk7XG4gICAgICAgICAgICBsZXQgZGVjaW1hbHMgPSBNYXRoLm1heCgwLCBpdGVtLnByZWNpc2lvbik7XG4gICAgICAgICAgICBsZXQgZm9ybWF0ZWRCYWxhbmNlID0gYmFsYW5jZU9mQ3VycmVudEFzc2V0XG4gICAgICAgICAgICAgICAgPyBtb3ZlRGVjaW1hbChiYWxhbmNlT2ZDdXJyZW50QXNzZXQsIGRlY2ltYWxzKVxuICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgIGl0ZW0uYXNzZXRJZCA9IGtleTtcbiAgICAgICAgICAgIGlmIChpdGVtLmFtb3VudCA+IGZvcm1hdGVkQmFsYW5jZSkge1xuICAgICAgICAgICAgICAgIGl0ZW0ud2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXRlbS5iYWxhbmNlID0gZm9ybWF0ZWRCYWxhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYmFsYW5jZVdhcm5pbmc6IHtcbiAgICAgICAgICAgICAgICBwZWVyMTogcGVlcjFBbW91bnRzRm9ybWF0ZWQsXG4gICAgICAgICAgICAgICAgcGVlcjI6IHBlZXIyQW1vdW50c0Zvcm1hdGVkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlckJhbGFuY2VXYXJuaW5ncygpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYmFsYW5jZVdhcm5pbmc6IHtwZWVyMSwgcGVlcjJ9XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgaXNQZWVyMVdhcm5pbmcgPSBwZWVyMS5zb21lKGl0ZW0gPT4gISFpdGVtLndhcm5pbmcpO1xuICAgICAgICBsZXQgaXNQZWVyMldhcm5pbmcgPSBwZWVyMi5zb21lKGl0ZW0gPT4gISFpdGVtLndhcm5pbmcpO1xuXG4gICAgICAgIGxldCBwZWVyMVRleHQgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuYmFydGVyLnBlZXJfbGVmdFwiKTtcbiAgICAgICAgbGV0IHBlZXIyVGV4dCA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5iYXJ0ZXIucGVlcl9yaWdodFwiKTtcbiAgICAgICAgbGV0IHBlZXIxQ29tcG9uZW50ID0gaXNQZWVyMVdhcm5pbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWF4V2lkdGg6IFwiMjVyZW1cIn19PlxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5iYWxhbmNlX3dhcm5pbmdfdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZWVyOiBwZWVyMVRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAge3BlZXIxLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ud2FybmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmFzc2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5iYWxhbmNlX3dhcm5pbmdfbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9zeW1ib2w6IGl0ZW0uc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfYmFsYW5jZTogaXRlbS5iYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG4gICAgICAgIGxldCBwZWVyMkNvbXBvbmVudCA9IGlzUGVlcjJXYXJuaW5nID8gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21heFdpZHRoOiBcIjI1cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuYmFsYW5jZV93YXJuaW5nX3Rvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVlcjogcGVlcjJUZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtwZWVyMi5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLndhcm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uYXNzZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5iYWxhbmNlX3dhcm5pbmdfbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3N5bWJvbDogaXRlbS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfYmFsYW5jZTogaXRlbS5iYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2Ftb3VudDogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFydGVyLWJhbGFuY2Utd2FybmluZ1wiPlxuICAgICAgICAgICAgICAgIHtpc1BlZXIxV2FybmluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwZWVyMUNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2N1cnNvcjogXCJoZWxwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZWVyMVRleHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5iYWxhbmNlX3dhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aXNQZWVyMldhcm5pbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cGVlcjJDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5iYWxhbmNlX3dhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjdXJzb3I6IFwiaGVscFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlcjJUZXh0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuYmFsYW5jZV93YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25GZWVDaGFuZ2VkUGVlcjFDcmVhdGVQcm9wb3NhbChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9wb3NhbF9mZWU6IGFzc2V0fSk7XG4gICAgfVxuXG4gICAgb25GZWVDaGFuZ2VkUGVlcjFJblByb3Bvc2FsKGFzc2V0KSB7XG4gICAgICAgIGxldCBfYmFydGVyID0gdGhpcy5zdGF0ZS5mcm9tX2JhcnRlci5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnRvX2ZlZUFzc2V0ID0gYXNzZXQ7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zyb21fYmFydGVyOiBfYmFydGVyfSk7XG4gICAgfVxuXG4gICAgb25GZWVDaGFuZ2VkUGVlcjJJblByb3Bvc2FsKGFzc2V0KSB7XG4gICAgICAgIGxldCBfYmFydGVyID0gdGhpcy5zdGF0ZS50b19iYXJ0ZXIubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS50b19mZWVBc3NldCA9IGFzc2V0O1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iYXJ0ZXI6IF9iYXJ0ZXJ9KTtcbiAgICB9XG5cbiAgICBvbkVzY3Jvd0ZlZUNoYW5nZWQoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXNjcm93RmVlQXNzZXRJZDogYXNzZXQuYXNzZXRfaWR9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBmcm9tX25hbWUsXG4gICAgICAgICAgICB0b19uYW1lLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIGZyb21fYmFydGVyLFxuICAgICAgICAgICAgdG9fYmFydGVyLFxuICAgICAgICAgICAgYW1vdW50X2luZGV4LFxuICAgICAgICAgICAgZnJvbV9lcnJvcixcbiAgICAgICAgICAgIHRvX2Vycm9yXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQge2Zyb21fYXNzZXRfdHlwZXMsIHRvX2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuICAgICAgICBsZXQgc21hbGxTY3JlZW4gPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDg1MCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgbGV0IGFzc2V0RnJvbUxpc3QgPSBbXTtcbiAgICAgICAgbGV0IGFzc2V0VG9MaXN0ID0gW107XG4gICAgICAgIGxldCBhc3NldEZyb21TeW1ib2wgPSBcIlwiO1xuICAgICAgICBsZXQgYXNzZXRUb1N5bWJvbCA9IFwiXCI7XG5cbiAgICAgICAgY29uc3QgY2hlY2tBbW91bnRWYWxpZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZnJvbV9iYXJ0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKGl0ZW0uZnJvbV9hbW91bnQsIC8sL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oYW1vdW50VmFsdWUpIHx8IGFtb3VudFZhbHVlID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdG9fYmFydGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW1vdW50VmFsdWUgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChpdGVtLnRvX2Ftb3VudCwgLywvZywgXCJcIilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTihhbW91bnRWYWx1ZSkgfHwgYW1vdW50VmFsdWUgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBleHBsaWN0UHJpY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChjaGVja0Ftb3VudFZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tQW1vdW50ID0gcGFyc2VGbG9hdChmcm9tX2JhcnRlclswXS5mcm9tX2Ftb3VudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9BbW91bnQgPSBwYXJzZUZsb2F0KHRvX2JhcnRlclswXS50b19hbW91bnQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZyb21BbW91bnQgLyB0b0Ftb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZmVlID0gZnJvbSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmcm9tX2JhcnRlcik7XG4gICAgICAgICAgICBsZXQgZmVlID0gMDtcbiAgICAgICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICAgICAgZmVlID0gZmVlO1xuICAgICAgICAgICAgICAgIGZyb21fYmFydGVyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZlZSArPSBpdGVtLmZyb21fZmVlQXNzZXQuX3JlYWxfYW1vdW50O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b19iYXJ0ZXIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmVlICs9IGl0ZW0udG9fZmVlQXNzZXQuX3JlYWxfYW1vdW50O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBiYWxhbmNlRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGZyb21fYmFydGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZnJvbV9iYWxhbmNlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0b19iYXJ0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5mcm9tX2JhbGFuY2VFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGlzRXNjcm93Tm90VmFsaWQgPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93RXNjcm93ICYmICF0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50O1xuXG4gICAgICAgIC8vIHNob3VsZCB0aGUgdXNlciBiZSBvbmx5IGFsbG93ZWQgdG8gcmVxdWVzdCBmb3IgZXhpc3RpbmcgZnVuZHM/XG4gICAgICAgIC8vIGJhbGFuY2VFcnJvcigpIHx8XG4gICAgICAgIGNvbnN0IGlzU3VibWl0Tm90VmFsaWQgPVxuICAgICAgICAgICAgIWZyb21fYWNjb3VudCB8fFxuICAgICAgICAgICAgIXRvX2FjY291bnQgfHxcbiAgICAgICAgICAgIGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0b19hY2NvdW50LmdldChcImlkXCIpIHx8XG4gICAgICAgICAgICB0b19lcnJvciB8fFxuICAgICAgICAgICAgIWNoZWNrQW1vdW50VmFsaWQoKSB8fFxuICAgICAgICAgICAgZnJvbV9lcnJvciB8fFxuICAgICAgICAgICAgaXNFc2Nyb3dOb3RWYWxpZDtcblxuICAgICAgICBjb25zdCBiYWxhbmNlID0gKGFjY291bnQsIGJhbGFuY2VFcnJvciwgYXNzZXRfdHlwZXMsIGFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudCAmJiBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcblxuICAgICAgICAgICAgICAgIGxldCBfZXJyb3IgPSBiYWxhbmNlRXJyb3IgPyBcImhhcy1lcnJvclwiIDogXCJcIjtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYXNzZXRfdHlwZXNbMF0pO1xuICAgICAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2Fzc2V0X2lkID0gYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfdHlwZXNbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtfZXJyb3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GdW5kc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZnJvbUFtb3VudFNlbGVjdG9yID0gZnJvbV9iYXJ0ZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFzc2V0U3ltYm9sID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChpdGVtLmZyb21fYXNzZXQpIHtcbiAgICAgICAgICAgICAgICBhc3NldFN5bWJvbCA9IGl0ZW0uZnJvbV9hc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICAgICAgYXNzZXRGcm9tTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBbaXRlbS5mcm9tX2Ftb3VudCB8fCAwLCBhc3NldFN5bWJvbF0uam9pbihcIiBcIilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaXNNZW1vU2hvd24gPVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcImZyb21fYmFydGVyXCJdW2luZGV4XSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcImZyb21fYmFydGVyXCJdW2luZGV4XS5zaG93bjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ftb3VudF9pbmRleCsrfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXNNZW1vU2hvd24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAuYWRkX21lbW9fZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWVtb09wZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tX2JhcnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1tZW1vLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5iYXJ0ZXJpbmdfYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5mcm9tX2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZyb21BbW91bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBpdGVtLmZyb21fYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5mcm9tX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uZnJvbV9hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmZyb21fYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZnJvbV9hc3NldF90eXBlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e2Zyb21fYXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZnJvbV9iYWxhbmNlRXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fYXNzZXRfdHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZnJvbV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOYU49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2lzTWVtb1Nob3duICYmIHRoaXMucmVuZGVyTWVtb0ZpZWxkKFwiZnJvbV9iYXJ0ZXJcIiwgaW5kZXgpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgYXNzZXRGcm9tU3ltYm9sID0gYXNzZXRTeW1ib2w7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0b0Ftb3VudFNlbGVjdG9yID0gdG9fYmFydGVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBhc3NldFN5bWJvbCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoaXRlbS50b19hc3NldCkge1xuICAgICAgICAgICAgICAgIGFzc2V0U3ltYm9sID0gaXRlbS50b19hc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICAgICAgYXNzZXRUb0xpc3QucHVzaChcbiAgICAgICAgICAgICAgICAgICAgW2l0ZW0udG9fYW1vdW50IHx8IDAsIGl0ZW0udG9fYXNzZXQuZ2V0KFwic3ltYm9sXCIpXS5qb2luKFwiIFwiKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaXNNZW1vU2hvd24gPVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcInRvX2JhcnRlclwiXVtpbmRleF0gJiZcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1lbW9bXCJ0b19iYXJ0ZXJcIl1baW5kZXhdLnNob3duO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbW91bnRfaW5kZXgrK30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzTWVtb1Nob3duICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLmFkZF9tZW1vX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wTGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1lbW9PcGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9fYmFydGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLW1lbW8tYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLmJhcnRlcmluZ19hc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLnRvX2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRvQW1vdW50Q2hhbmdlZC5iaW5kKHRoaXMsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvX2Fzc2V0X3R5cGVzLmxlbmd0aCA+IDAgJiYgaXRlbS50b19hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLnRvX2Fzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0udG9fYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS50b19hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b19hc3NldF90eXBlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e3RvX2Fzc2V0X3R5cGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50b19iYWxhbmNlRXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvX2Fzc2V0X3R5cGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRvX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05hTj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7aXNNZW1vU2hvd24gJiYgdGhpcy5yZW5kZXJNZW1vRmllbGQoXCJ0b19iYXJ0ZXJcIiwgaW5kZXgpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgYXNzZXRUb1N5bWJvbCA9IGFzc2V0U3ltYm9sO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWNjb3VudF9mcm9tID0gKFxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcInNob3djYXNlcy5iYXJ0ZXIucGVlcl9sZWZ0XCJ9IC8+XG4gICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5iYXJ0ZXIuYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBhbGxvd1B1YktleT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dVcHBlcmNhc2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2Zyb21fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZnJvbUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vbkZyb21BY2NvdW50Q2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBoaWRlSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zyb21fYWNjb3VudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnJvbUFtb3VudFNlbGVjdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxMHB4XCIsIHBhZGRpbmdCb3R0b206IFwiMTBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkRnJvbUFtb3VudC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5mcm9tX2JhcnRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZyb21fYmFydGVyLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZnJvbV9hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBBZGQgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBhY2NvdW50X3RvID0gKFxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcInNob3djYXNlcy5iYXJ0ZXIucGVlcl9yaWdodFwifSAvPlxuICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLmFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dQdWJLZXk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGFsbG93VXBwZXJjYXNlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dG9fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Ub0FjY291bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVJbWFnZVxuICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dG9fYWNjb3VudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9BbW91bnRTZWxlY3Rvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMTBweFwiLCBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZFRvQW1vdW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0b19hY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS50b19iYXJ0ZXJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50b19iYXJ0ZXIubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS50b19hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBBZGQgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBhY3Rpb25fZXJyb3Jfa2V5ID0gXCJzaG93Y2FzZXMuYmFydGVyLm5vdF9jb21wbGV0ZVwiO1xuICAgICAgICBpZiAoaXNTdWJtaXROb3RWYWxpZCkge1xuICAgICAgICAgICAgaWYgKCFmcm9tX2FjY291bnQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25fZXJyb3Jfa2V5ID1cbiAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmVycm9yX2ZpbGxfaW5fcGVlcl9sZWZ0X25hbWVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRvX2FjY291bnQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25fZXJyb3Jfa2V5ID1cbiAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmVycm9yX2ZpbGxfaW5fcGVlcl9yaWdodF9uYW1lXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0b19hY2NvdW50LmdldChcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uX2Vycm9yX2tleSA9IFwic2hvd2Nhc2VzLmJhcnRlci5lcnJvcl9zYW1lX25hbWVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrQW1vdW50VmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbl9lcnJvcl9rZXkgPVxuICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuZXJyb3JfZmlsbF9pbl92YWxpZF9hc3NldF9hbW91bnRcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNFc2Nyb3dOb3RWYWxpZCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbl9lcnJvcl9rZXkgPSBcInNob3djYXNlcy5iYXJ0ZXIuZXJyb3JfZmlsbF9pbl9lc2Nyb3dfbmFtZVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dFc2Nyb3cgJiZcbiAgICAgICAgICAgICAgICAoZnJvbV9hY2NvdW50LmdldChcImlkXCIpID09XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFwiaWRcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgdG9fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50LmdldChcImlkXCIpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uX2Vycm9yX2tleSA9IFwic2hvd2Nhc2VzLmJhcnRlci5lcnJvcl9zYW1lX25hbWVfZXNjcm93XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2ZmZXJzID0gKFxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgeyFpc1N1Ym1pdE5vdFZhbGlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCIgc3R5bGU9e3tmb250U2l6ZTogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuYmFydGVyLmFjdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlcl9sZWZ0OiBmcm9tX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzX2xlZnQ6IGFzc2V0RnJvbUxpc3Quam9pbihcIiwgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJfcmlnaHQ6IHRvX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzX3JpZ2h0OiBhc3NldFRvTGlzdC5qb2luKFwiLCBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0VzY3JvdyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuZXNjcm93X2FzX3dpdG5lc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNjcm93OiB0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dFc2Nyb3cgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuZXNjcm93X2FzX2N1c3RvZGlhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2Nyb3c6IHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpc1N1Ym1pdE5vdFZhbGlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShhY3Rpb25fZXJyb3Jfa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmFkZF9lc2Nyb3dfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFJpZ2h0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93RXNjcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZW1vdmVfZXNjcm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImFkZF9lc2Nyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVFc2Nyb3cuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dFc2Nyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNob3djYXNlcy5iYXJ0ZXIucmVtb3ZlX2VzY3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaG93Y2FzZXMuYmFydGVyLmFkZF9lc2Nyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIHtmcm9tX2JhcnRlci5sZW5ndGggPT09IDUwMCAmJiB0b19iYXJ0ZXIubGVuZ3RoID09PSA1MDAgPyAoIC8vIGRlYWN0aXZhdGUgZm9yIG5vd1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFtb3VudC1zZWxlY3RvclwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmV4cGxpY3RfcHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtleHBsaWN0UHJpY2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2Fzc2V0RnJvbVN5bWJvbH0vJHthc3NldFRvU3ltYm9sfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHRvdGFsRmVlRnJvbSA9IChcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJzaG93Y2FzZXMuYmFydGVyLnBlZXJfbGVmdFwifSAvPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNob3djYXNlcy5iYXJ0ZXIuZmVlX2R1ZV9ub3dfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNob3djYXNlcy5iYXJ0ZXIuZmVlX3doZW5fcHJvcG9zYWxfZXhlY3V0ZXNfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcnRlci1mZWUtc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKm5lZWRlZCB0byByZW5kZXIgdG9vbHRpcCBwcm9wZXJseSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEZlZUFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VuZF90b19lc2Nyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzaG93Y2FzZXMuYmFydGVyLmZlZV9kdWVfbm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaG93Y2FzZXMuYmFydGVyLmZlZV93aGVuX3Byb3Bvc2FsX2V4ZWN1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNmZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkUGVlcjFJblByb3Bvc2FsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXI9e2Zyb21fYmFydGVyLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLnByb3Bvc2FsX2ZlZV90b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFydGVyLWZlZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qbmVlZGVkIHRvIHJlbmRlciB0b29sdGlwIHByb3Blcmx5Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5wcm9wb3NhbF9mZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByb3Bvc2FsX2NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWRQZWVyMUNyZWF0ZVByb3Bvc2FsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIudG90YWxfZmVlc190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJhcnRlci50b3RhbF9mZWVzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZSh0cnVlKSArIHRoaXMuc3RhdGUucHJvcG9zYWxfZmVlLl9yZWFsX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XCJHUEhcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHRvdGFsRmVlVG8gPSAoXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJhcnRlci5wZWVyX3JpZ2h0XCJ9IC8+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5mZWVfd2hlbl9wcm9wb3NhbF9leGVjdXRlc190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFydGVyLWZlZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qbmVlZGVkIHRvIHJlbmRlciB0b29sdGlwIHByb3Blcmx5Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5mZWVfd2hlbl9wcm9wb3NhbF9leGVjdXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dG9fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmVlQ2hhbmdlZFBlZXIySW5Qcm9wb3NhbC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyPXt0b19iYXJ0ZXIubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBmZWVGb3JFc2Nyb3cgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93RXNjcm93KSB7XG4gICAgICAgICAgICBmZWVGb3JFc2Nyb3cgPSAoXG4gICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJzaG93Y2FzZXMuYmFydGVyLmVzY3Jvd19hY2NvdW50XCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5mZWVfd2hlbl9wcm9wb3NhbF9leGVjdXRlc190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFydGVyLWZlZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKm5lZWRlZCB0byByZW5kZXIgdG9vbHRpcCBwcm9wZXJseSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5mZWVfd2hlbl9wcm9wb3NhbF9leGVjdXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuZXNjcm93X2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkVzY3Jvd0ZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllcj17ZnJvbV9iYXJ0ZXIubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW50cm8gPSAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIubmV3X2JhcnRlcl90b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcInNob3djYXNlcy5iYXJ0ZXIubmV3X2JhcnRlclwifSAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIiB0aGVtZT1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBlc2Nyb3cgPSBudWxsO1xuICAgICAgICBsZXQgaXNFc2Nyb3dNZW1vU2hvd24gPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZXNjcm93XCJdWzBdICYmIHRoaXMuc3RhdGUubWVtb1tcImVzY3Jvd1wiXVswXS5zaG93bjtcbiAgICAgICAgbGV0IGVzY3Jvd19wYXltZW50ID0gdGhpcy5zdGF0ZS5lc2Nyb3dfcGF5bWVudF9jaGFuZ2VkXG4gICAgICAgICAgICA/IHRoaXMuc3RhdGUuZXNjcm93X3BheW1lbnRcbiAgICAgICAgICAgIDogZmVlKHRydWUpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93RXNjcm93KSB7XG4gICAgICAgICAgICBlc2Nyb3cgPSAoXG4gICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5lc2Nyb3dfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93UHViS2V5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dVcHBlcmNhc2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RoaXMuc3RhdGUuZXNjcm93X2FjY291bnRfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVzY3Jvd0FjY291bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uRXNjcm93QWNjb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5zZW5kX3RvX2VzY3Jvd190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IDZ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZVNlbmRUb0VzY3Jvdy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2hvd2Nhc2VzLmJhcnRlci5zZW5kX3RvX2VzY3Jvd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc0VzY3Jvd01lbW9TaG93biAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5hZGRfbWVtb19maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcExlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNZW1vT3BlbihcImVzY3Jvd1wiLCAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtbWVtby1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmVzY3Jvd19wYXltZW50X3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wTGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qbmVlZGVkIHRvIHJlbmRlciB0b29sdGlwIHByb3Blcmx5Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLmVzY3Jvd19wYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZXNjcm93X3BheW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fdXBkYXRlRXNjcm93RmVlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxcmVtIDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcIjEuMy4wXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1tcIjEuMy4wXCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGFzUG9vbEJhbGFuY2UgPT09IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxfbGVuZ3RoPXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzRXNjcm93TWVtb1Nob3duICYmIHRoaXMucmVuZGVyTWVtb0ZpZWxkKFwiZXNjcm93XCIsIDApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI4MHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgIHtzbWFsbFNjcmVlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+e2ludHJvfTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnRfZnJvbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudF90b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+e29mZmVyc308L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXNjcm93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc2Nyb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbEZlZUZyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsRmVlVG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWVGb3JFc2Nyb3cgIT0gbnVsbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVlRm9yRXNjcm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+e2ludHJvfTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50X2Zyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudF90b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+e29mZmVyc308L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXNjcm93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc2Nyb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxGZWVGcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsRmVlVG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVlRm9yRXNjcm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcnRlci1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLnByb3Bvc2VfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJwcm9wb3NlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByb3Bvc2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzU3VibWl0Tm90VmFsaWQgJiYgdGhpcy5yZW5kZXJCYWxhbmNlV2FybmluZ3MoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUVzY3Jvd0ZlZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXNjcm93X3BheW1lbnRfY2hhbmdlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVzY3Jvd19wYXltZW50OiBlLmFtb3VudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZVNlbmRUb0VzY3JvdygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZW5kX3RvX2VzY3JvdzogIXRoaXMuc3RhdGUuc2VuZF90b19lc2Nyb3dcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRXNjcm93KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RXNjcm93OiAhdGhpcy5zdGF0ZS5zaG93RXNjcm93fSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7QnV0dG9uLCBDYXJkLCBTdGVwcywgVG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgV2FsbGV0VW5sb2NrQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRVbmxvY2tBY3Rpb25zXCI7XG5cbmltcG9ydCBCb3Jyb3dNb2RhbCBmcm9tIFwiLi4vTW9kYWwvQm9ycm93TW9kYWxcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBBc3NldFNlbGVjdCBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFNlbGVjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5jbGFzcyBCb3Jyb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNCb3Jyb3dCYXNlTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkQXNzZXQ6IFwiMS4zLjI3XCIsXG4gICAgICAgICAgICBzdGVwOiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RlcHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImludHJvZHVjdGlvblwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiYm9ycm93XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNvbmNlcHRcIixcbiAgICAgICAgICAgICAgICBoYXNfbGVnZW5kOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJzZXR1cFwiLFxuICAgICAgICAgICAgICAgIGhhc19sZWdlbmQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImJlbmVmaXRzXCIsXG4gICAgICAgICAgICAgICAgaGFzX2xlZ2VuZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicmlza3NcIixcbiAgICAgICAgICAgICAgICBoYXNfbGVnZW5kOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc2hvd0JvcnJvd01vZGFsID0gdGhpcy5zaG93Qm9ycm93TW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlQm9ycm93TW9kYWwgPSB0aGlzLmhpZGVCb3Jyb3dNb2RhbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNob3dCb3Jyb3dNb2RhbCgpIHtcbiAgICAgICAgLy8gbmVlZHMgYSBrbm93biBhY2NvdW50XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCkge1xuICAgICAgICAgICAgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0JvcnJvd0Jhc2VNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNCb3Jyb3dCYXNlTW9kYWxWaXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVCb3Jyb3dNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0JvcnJvd0Jhc2VNb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGxldCBzdGVwID0gdGhpcy5zdGF0ZS5zdGVwICsgMTtcbiAgICAgICAgaWYgKHN0ZXAgPj0gdGhpcy5zdGVwcy5sZW5ndGgpIHN0ZXAgPSB0aGlzLnN0ZXBzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlcH0pO1xuICAgIH1cblxuICAgIHByZXYoKSB7XG4gICAgICAgIGxldCBzdGVwID0gdGhpcy5zdGF0ZS5zdGVwIC0gMTtcbiAgICAgICAgaWYgKHN0ZXAgPCAwKSBzdGVwID0gMDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlcH0pO1xuICAgIH1cblxuICAgIG9uQXNzZXRDaGFuZ2Uoc2VsZWN0ZWRfYXNzZXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZEFzc2V0OiBzZWxlY3RlZF9hc3NldFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudCh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KTtcbiAgICAgICAgbGV0IGFjY291bnRMb2FkZWQgPSAhKFxuICAgICAgICAgICAgIWN1cnJlbnRBY2NvdW50IHx8IHR5cGVvZiBjdXJyZW50QWNjb3VudCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5zdGF0ZS5zdGVwO1xuICAgICAgICBjb25zdCB0aW55U2NyZWVuID0gd2luZG93LmlubmVyV2lkdGggPD0gODAwO1xuICAgICAgICBjb25zdCBzdGFydGVkID0gdGhpcy5zdGF0ZS5zdGVwID4gMDtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZEFzc2V0T2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRBc3NldFxuICAgICAgICApO1xuICAgICAgICBsZXQgc3RlcHMgPSB0aGlzLnN0ZXBzO1xuICAgICAgICBsZXQgbGVnZW5kID0gbnVsbDtcbiAgICAgICAgaWYgKGN1cnJlbnQgPCBzdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0ZXBzW2N1cnJlbnRdLmhhc19sZWdlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93LnN0ZXBzX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwc1tjdXJyZW50XS5rZXkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRleHRfbGVnZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kID0gbGVnZW5kLnNwbGl0KFwiXFxuXCIpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgbGVnZW5kID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5ib3Jyb3cuc3RlcHNfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHNbY3VycmVudF0ua2V5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRleHRfbGVnZW5kXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbmlzaGVkQ2FyZCA9IG51bGw7XG4gICAgICAgIGlmIChjdXJyZW50ID49IHN0ZXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgZmluaXNoZWRDYXJkID0gKFxuICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjZW50ZXItY29udGVudFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcInNob3djYXNlcy5ib3Jyb3cuY2hvb3NlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtcImg0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEycmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMjdcIiAvLyBncFVTRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcIjEuMy4xMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjEyMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMTMyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMTA1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4xMDZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjEwM1wiKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Bc3NldENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJvcnJvdy5ib3Jyb3dfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEFzc2V0ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudExvYWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4yLjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0JvcnJvd01vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5ib3Jyb3dcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjcwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNzByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkQ2FyZCAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2hvd2Nhc2VzLmJvcnJvdy5ub3dfcmVhZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNob3djYXNlcy5ib3Jyb3cudGl0bGVfbG9uZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtzdGFydGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoIXRpbnlTY3JlZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBzIHByb2dyZXNzRG90IGN1cnJlbnQ9e2N1cnJlbnQgLSAxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXBzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBzLlN0ZXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJvcnJvdy5zdGVwc19cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5rZXkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjdXJyZW50IDwgdGhpcy5zdGVwcy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCArIFwiLiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93LnN0ZXBzX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwc1tjdXJyZW50XS5rZXkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGwpfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmluaXNoZWRDYXJkICE9IG51bGwgJiYgZmluaXNoZWRDYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmlzaGVkQ2FyZCA9PSBudWxsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBvbktleURvd249e3RoaXMub25LZXlEb3duLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISFzdGVwc1tjdXJyZW50XS5pY29uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzdGVwc1tjdXJyZW50XS5pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93LnN0ZXBzX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwc1tjdXJyZW50XS5rZXkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRpdGxlX3dpdGhpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5ib3Jyb3cuc3RlcHNfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBzW2N1cnJlbnRdLmtleSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIudGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhc3RlcHNbY3VycmVudF0uaGFzX2xlZ2VuZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlZ2VuZC5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e1wiYm9ycm93X3N1YnBfXCIgKyBpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnRbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7Y29udGVudFsxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcHMtYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA8IHN0ZXBzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93Lm5hdmlnYXRlX3dpdGhfa2V5c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMubmV4dCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93LmdldF9zdGFydGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA8IHN0ZXBzLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5ib3Jyb3cubmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSBzdGVwcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJvcnJvdy5kb19pdFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogOH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJldigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJwcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJvcnJvdy5wcmV2aW91c1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIHthY2NvdW50TG9hZGVkICYmXG4gICAgICAgICAgICAgICAgICAgICEhc2VsZWN0ZWRBc3NldE9iamVjdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9ycm93TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzQm9ycm93QmFzZU1vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZUJvcnJvd01vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRPYmo9e3NlbGVjdGVkQXNzZXRPYmplY3QuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2luZ0Fzc2V0T2JqPXtzZWxlY3RlZEFzc2V0T2JqZWN0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50T2JqPXtjdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5mb2N1c0RpdigpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5mb2N1c0RpdigpO1xuICAgIH1cblxuICAgIGZvY3VzRGl2KCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuc3RhdGUuc3RlcDtcbiAgICAgICAgbGV0IHN0ZXBzID0gdGhpcy5zdGVwcztcbiAgICAgICAgaWYgKGN1cnJlbnQgPCBzdGVwcy5sZW5ndGggJiYgISF0aGlzLnJlZnMubmV4dCkge1xuICAgICAgICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLm5leHQpLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PSBzdGVwcy5sZW5ndGggJiYgISF0aGlzLnJlZnMucHJldmlvdXMpIHtcbiAgICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5wcmV2aW91cykuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIC8vIGFycm93IHVwL2Rvd24gYnV0dG9uIHNob3VsZCBzZWxlY3QgbmV4dC9wcmV2aW91cyBsaXN0IGVsZW1lbnRcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQm9ycm93ID0gZGVib3VuY2VSZW5kZXIoQm9ycm93LCA1MCwge2xlYWRpbmc6IGZhbHNlfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgQm9ycm93LFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IHtcbiAgICBJbnB1dCxcbiAgICBDYXJkLFxuICAgIENvbCxcbiAgICBSb3csXG4gICAgQnV0dG9uLFxuICAgIFN3aXRjaCxcbiAgICBUb29sdGlwLFxuICAgIEljb24sXG4gICAgVGFibGVcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgRGlyZWN0RGViaXRNb2RhbCBmcm9tIFwiLi4vTW9kYWwvRGlyZWN0RGViaXRNb2RhbFwiO1xuaW1wb3J0IERpcmVjdERlYml0Q2xhaW1Nb2RhbCBmcm9tIFwiLi4vTW9kYWwvRGlyZWN0RGViaXRDbGFpbU1vZGFsXCI7XG5pbXBvcnQgTGlua1RvQXNzZXRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0Fzc2V0QnlJZFwiO1xuaW1wb3J0IEFwcGxpY2F0aW9uQXBpIGZyb20gXCIuLi8uLi9hcGkvQXBwbGljYXRpb25BcGlcIjtcbmltcG9ydCB7YmluZFRvQ3VycmVudEFjY291bnQsIGhhc0xvYWRlZH0gZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnRcIjtcblxuY2xhc3MgRGlyZWN0RGViaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGlzQ2xhaW1Nb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgZmlsdGVyU3RyaW5nOiBcIlwiLFxuICAgICAgICAgICAgb3BlcmF0aW9uRGF0YTogXCJcIixcbiAgICAgICAgICAgIG9wZXJhdGlvbkNsYWltRGF0YTogXCJcIixcbiAgICAgICAgICAgIHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdDogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfdXBkYXRlKCkge1xuICAgICAgICBsZXQgY3VycmVudEFjY291bnQgPSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50O1xuXG4gICAgICAgIGlmIChoYXNMb2FkZWQoY3VycmVudEFjY291bnQpKSB7XG4gICAgICAgICAgICAvLyBmb3Igbm93LCBmZXRjaCBtYW51YWxseVxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAuZGJfYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMoXCJnZXRfd2l0aGRyYXdfcGVybWlzc2lvbnNfYnlfZ2l2ZXJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEuMTIuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAuZGJfYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMoXCJnZXRfd2l0aGRyYXdfcGVybWlzc2lvbnNfYnlfcmVjaXBpZW50XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjEyLjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgd2l0aGRyYXdfcGVybWlzc2lvbl9saXN0ID0gW107XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfcGVybWlzc2lvbl9saXN0ID0gd2l0aGRyYXdfcGVybWlzc2lvbl9saXN0LmNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1swXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfcGVybWlzc2lvbl9saXN0ID0gd2l0aGRyYXdfcGVybWlzc2lvbl9saXN0LmNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1sxXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgd2l0aGRyYXdfcGVybWlzc2lvbl9saXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byB0cmlnZ2VyIGNhY2hpbmcgZm9yIG1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQoaXRlbS5hdXRob3JpemVkX2FjY291bnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0QWNjb3VudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLndpdGhkcmF3X2Zyb21fYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3Q6IHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICAgIC8vIGFsd2F5cyB1cGRhdGUsIHJlbGllcyBvbiBwdXNoIGZyb20gYmFja2VuZCB3aGVuIGFjY291bnQgcGVybWlzc2lvbiBjaGFuZ2VcbiAgICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2hvd01vZGFsID0gb3BlcmF0aW9uID0+ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG9wZXJhdGlvbkRhdGE6IG9wZXJhdGlvblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIG9wZXJhdGlvbjogbnVsbFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2hvd0NsYWltTW9kYWwgPSBvcGVyYXRpb24gPT4gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQ2xhaW1Nb2RhbFZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGVyYXRpb25DbGFpbURhdGE6IG9wZXJhdGlvblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaGlkZUNsYWltTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNDbGFpbU1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9vbkZpbHRlciA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclN0cmluZzogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVEZWxldGVQcm9wb3NhbCA9IHBlcm1pc3Npb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSBwZXJtaXNzaW5cIik7XG4gICAgICAgIEFwcGxpY2F0aW9uQXBpLmRlbGV0ZVdpdGhkcmF3UGVybWlzc2lvbihcbiAgICAgICAgICAgIHBlcm1pc3Npb24uaWQsXG4gICAgICAgICAgICBwZXJtaXNzaW9uLndpdGhkcmF3X2Zyb21fYWNjb3VudCxcbiAgICAgICAgICAgIHBlcm1pc3Npb24uYXV0aG9yaXplZF9hY2NvdW50XG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBub3RoaW5nIHRvIGRvLCB1c2VyIHdpbGwgc2VlIHBvcHVwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiBlcnIudG9TdHJpbmcoKX0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlLFxuICAgICAgICAgICAgaXNDbGFpbU1vZGFsVmlzaWJsZSxcbiAgICAgICAgICAgIHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdCxcbiAgICAgICAgICAgIG9wZXJhdGlvbkRhdGEsXG4gICAgICAgICAgICBvcGVyYXRpb25DbGFpbURhdGEsXG4gICAgICAgICAgICBmaWx0ZXJTdHJpbmdcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQ7XG5cbiAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBudWxsO1xuXG4gICAgICAgIGlmICh3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhU291cmNlID0gd2l0aGRyYXdfcGVybWlzc2lvbl9saXN0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICBpdGVtLndpdGhkcmF3YWxfbGltaXQuYXNzZXRfaWQsXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRob3JpemVkQWNjb3VudE5hbWUgPSBDaGFpblN0b3JlLmdldEFjY291bnROYW1lKFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmF1dGhvcml6ZWRfYWNjb3VudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2l0aGRyYXdGcm9tQWNjb3VudE5hbWUgPSBDaGFpblN0b3JlLmdldEFjY291bnROYW1lKFxuICAgICAgICAgICAgICAgICAgICBpdGVtLndpdGhkcmF3X2Zyb21fYWNjb3VudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyaW9kX3N0YXJ0ID0gbmV3IERhdGUoXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGVyaW9kX3N0YXJ0X3RpbWUgKyBcIlpcIlxuICAgICAgICAgICAgICAgICkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBub3cgLSBwZXJpb2Rfc3RhcnQ7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQZXJpb2RFeHBpcmVzID0gXCJcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJpb2RNcyA9IGl0ZW0ud2l0aGRyYXdhbF9wZXJpb2Rfc2VjICogMTAwMDtcblxuICAgICAgICAgICAgICAgIGlmICh0aW1lUGFzc2VkIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0IHBlcmlvZCBpcyBub3Qgc3RhcnRlZFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UGVyaW9kTnVtID0gTWF0aC5jZWlsKHRpbWVQYXNzZWQgLyBwZXJpb2RNcyk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQZXJpb2RFeHBpcmVzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmlvZF9zdGFydCArIHBlcmlvZE1zICogY3VycmVudFBlcmlvZE51bTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hdXRob3JpemVkX2FjY291bnQgPT0gY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicGF5ZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJwYXllclwiLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3JpemVkOiBhdXRob3JpemVkQWNjb3VudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZyb206IHdpdGhkcmF3RnJvbUFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgICAgICB0bzogYXV0aG9yaXplZEFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmdldF9hc3NldF9hbW91bnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ud2l0aGRyYXdhbF9saW1pdC5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9Bc3NldEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0ud2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB1bnRpbDogY3VycmVudFBlcmlvZEV4cGlyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQubG9jYWxpemUobmV3IERhdGUoY3VycmVudFBlcmlvZEV4cGlyZXMpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJmdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmZpcnN0X3BlcmlvZF9ub3Rfc3RhcnRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXM6IGNvdW50ZXJwYXJ0LmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5leHBpcmF0aW9uICsgXCJaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJmdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY2xhaW1lZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhaW1lZF90aGlzX3BlcmlvZCA9PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhaW1lZF90aGlzX3BlcmlvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0Fzc2V0QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0ud2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICByYXdEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkYXRhU291cmNlLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBmaWx0ZXIgaXMgY2hhaW5lZCB0byBtYXAsIHBvc3NpYmxlIGJ1Z3Mgd2l0aCBpbml0aWFsIHJlbmRlciBvZiB0YWJsZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hdXRob3JpemVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmF1dGhvcml6ZWQuaW5kZXhPZihmaWx0ZXJTdHJpbmcpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImlkXCIsXG4gICAgICAgICAgICAgICAga2V5OiBcImlkXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA+IGIuaWQgPyAxIDogYS5pZCA8IGIuaWQgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJGcm9tXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImZyb21cIixcbiAgICAgICAgICAgICAgICBrZXk6IFwiZnJvbVwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuZnJvbSA+IGIuZnJvbSA/IDEgOiBhLmZyb20gPCBiLmZyb20gPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUb1wiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ0b1wiLFxuICAgICAgICAgICAgICAgIGtleTogXCJ0b1wiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudG8gPiBiLnRvID8gMSA6IGEudG8gPCBiLnRvID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmN1cnJlbnRfcGVyaW9kX2V4cGlyZXNcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInVudGlsXCIsXG4gICAgICAgICAgICAgICAga2V5OiBcInVudGlsXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS51bnRpbCA+IGIudW50aWwgPyAxIDogYS51bnRpbCA8IGIudW50aWwgPyAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJMaW1pdFwiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJsaW1pdFwiLFxuICAgICAgICAgICAgICAgIGtleTogXCJsaW1pdFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGltaXQxID0gYS5yYXdEYXRhLndpdGhkcmF3YWxfbGltaXQuYW1vdW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW1pdDIgPSBiLnJhd0RhdGEud2l0aGRyYXdhbF9saW1pdC5hbW91bnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpbWl0MSAtIGxpbWl0MjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNsYWltZWRcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY2xhaW1lZFwiLFxuICAgICAgICAgICAgICAgIGtleTogXCJjbGFpbWVkXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdmFpbGFibGUxID0gYS5yYXdEYXRhLmNsYWltZWRfdGhpc19wZXJpb2Q7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZTIgPSBhLnJhd0RhdGEuY2xhaW1lZF90aGlzX3BlcmlvZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF2YWlsYWJsZTIgLSBhdmFpbGFibGUxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5kaXJlY3RfZGViaXQuZXhwaXJlc1wiKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZXhwaXJlc1wiLFxuICAgICAgICAgICAgICAgIGtleTogXCJleHBpcmVzXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5leHBpcmVzID4gYi5leHBpcmVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5leHBpcmVzIDwgYi5leHBpcmVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGtleTogXCJhY3Rpb25cIixcbiAgICAgICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPT09IFwicGF5ZXJcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURlbGV0ZVByb3Bvc2FsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQucmF3RGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQuZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZWNvcmQucmF3RGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LnVwZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0NsYWltTW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjbGFpbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcmVjb3JkLnJhd0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQuY2xhaW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpcmVjdC1kZWJpdC12aWV3XCI+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZGlyZWN0LWRlYml0LXRhYmxlLWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogVEFCTEUgSEVBREVSICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlyZWN0LWRlYml0LXRhYmxlX19maWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLndpdG5lc3Nlcy5maWx0ZXJfYnlfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uRmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjMwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQuY3JlYXRlX25ld19tYW5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpcmVjdC1kZWJpdC10YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgICAgICAgICB7aXNNb2RhbFZpc2libGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlyZWN0RGViaXRNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbj17b3BlcmF0aW9uRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7aXNDbGFpbU1vZGFsVmlzaWJsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXJlY3REZWJpdENsYWltTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNDbGFpbU1vZGFsVmlzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZUNsYWltTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uPXtvcGVyYXRpb25DbGFpbURhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRpcmVjdERlYml0ID0gYmluZFRvQ3VycmVudEFjY291bnQoRGlyZWN0RGViaXQpO1xuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3REZWJpdDtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBJbnB1dCxcclxuICAgIENhcmQsXHJcbiAgICBDb2wsXHJcbiAgICBSb3csXHJcbiAgICBCdXR0b24sXHJcbiAgICBJY29uLFxyXG4gICAgVGFibGUsXHJcbiAgICBUb29sdGlwXHJcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZSwgRmV0Y2hDaGFpbk9iamVjdHN9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgSHRsY01vZGFsIGZyb20gXCIuLi9Nb2RhbC9IdGxjTW9kYWxcIjtcclxuaW1wb3J0IExpbmtUb0Fzc2V0QnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9Bc3NldEJ5SWRcIjtcclxuaW1wb3J0IHtiaW5kVG9DdXJyZW50QWNjb3VudH0gZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnRcIjtcclxuXHJcbmNsYXNzIEh0bGMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmaWx0ZXJTdHJpbmc6IFwiXCIsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkRhdGE6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgaHRsY19saXN0OiBbXSxcclxuICAgICAgICAgICAgdGFibGVJc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhc0xvYWRlZE9uY2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50ICE9PSBucC5jdXJyZW50QWNjb3VudCB8fFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmh0bGNfbGlzdCkgIT09XHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShucy5odGxjX2xpc3QpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNNb2RhbFZpc2libGUgIT09IG5zLmlzTW9kYWxWaXNpYmxlIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFibGVJc0xvYWRpbmcgIT09IG5zLnRhYmxlSXNMb2FkaW5nIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlsdGVyU3RyaW5nICE9PSBucy5maWx0ZXJTdHJpbmdcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIF91cGRhdGUoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudDtcclxuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIEhUTEMgdGFibGUgZm9yXCIsIGFjY291bnRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzTG9hZGVkT25jZSA9IGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB0YWJsZUlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGh0bGNfZnJvbSA9XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaHRsY3NfZnJvbVwiKS50b0pTKCkgfHwgW107XHJcbiAgICAgICAgY29uc3QgaHRsY190byA9IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaHRsY3NfdG9cIikudG9KUygpIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBodGxjX2xpc3Q6IGh0bGNfZnJvbVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdChodGxjX3RvKVxyXG4gICAgICAgICAgICAgICAgLm1hcChfaXRlbSA9PiBDaGFpblN0b3JlLmdldE9iamVjdChfaXRlbSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKF9pdGVtID0+ICghIV9pdGVtLnRvSlMgPyBfaXRlbS50b0pTKCkgOiB1bmRlZmluZWQpKSxcclxuICAgICAgICAgICAgdGFibGVJc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8vIGFsd2F5cyB1cGRhdGUsIHJlbGllcyBvbiBwdXNoIGZyb20gYmFja2VuZCB3aGVuIGFjY291bnQgcGVybWlzc2lvbiBjaGFuZ2VcclxuICAgICAgICB0aGlzLl91cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TW9kYWwgPSBvcGVyYXRpb24gPT4gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChvcGVyYXRpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAvLyBjYWNoZSBmb3IgbW9kYWxcclxuICAgICAgICAgICAgYXdhaXQgRmV0Y2hDaGFpbk9iamVjdHMoXHJcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQsXHJcbiAgICAgICAgICAgICAgICBbb3BlcmF0aW9uLnBheWxvYWQudHJhbnNmZXIudG9dLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAge31cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYXdhaXQgRmV0Y2hDaGFpbk9iamVjdHMoXHJcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQsXHJcbiAgICAgICAgICAgICAgICBbb3BlcmF0aW9uLnBheWxvYWQudHJhbnNmZXIuZnJvbV0sXHJcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB7fVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBhd2FpdCBGZXRjaENoYWluT2JqZWN0cyhDaGFpblN0b3JlLmdldEFzc2V0LCBbXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC50cmFuc2Zlci5hc3NldF9pZFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBvcGVyYXRpb25EYXRhOiBvcGVyYXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGlkZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbjogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25GaWx0ZXIgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyU3RyaW5nOiBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlLFxyXG4gICAgICAgICAgICBodGxjX2xpc3QsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkRhdGEsXHJcbiAgICAgICAgICAgIGZpbHRlclN0cmluZ1xyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQ7XHJcblxyXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGh0bGNfbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZSA9IGh0bGNfbGlzdC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0byA9IGl0ZW0udHJhbnNmZXIudG87XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9tID0gaXRlbS50cmFuc2Zlci5mcm9tO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbS50cmFuc2Zlci5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGl0ZW0udHJhbnNmZXIuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHBpcmF0aW9uID0gaXRlbS5jb25kaXRpb25zLnRpbWVfbG9jay5leHBpcmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFtb3VudC5hc3NldF9pZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9BY2NvdW50TmFtZSA9IENoYWluU3RvcmUuZ2V0QWNjb3VudE5hbWUodG8pIHx8IHRvO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbUFjY291bnROYW1lID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50TmFtZShmcm9tKSB8fCBmcm9tO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdG8gPT0gY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIikgPyBcInBheWVlXCIgOiBcInBheWVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZnJvbUFjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiB0b0FjY291bnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChhbW91bnQuYW1vdW50LCBhc3NldCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQXNzZXRCeUlkIGFzc2V0PXthbW91bnQuYXNzZXRfaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodGxjLnByZWltYWdlX2hhc2hfZXhwbGFuYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiKFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb25kaXRpb25zLmhhc2hfbG9jay5wcmVpbWFnZV9zaXplICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbmRpdGlvbnMuaGFzaF9sb2NrLnByZWltYWdlX2hhc2hbMF0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIik6IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb25kaXRpb25zLmhhc2hfbG9jay5wcmVpbWFnZV9oYXNoWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBleHBpcmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhU291cmNlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgZmlsdGVyIGlzIGNoYWluZWQgdG8gbWFwLCBwb3NzaWJsZSBidWdzIHdpdGggaW5pdGlhbCByZW5kZXIgb2YgdGFibGVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50byAmJiBpdGVtLnRvLmluZGV4T2YoZmlsdGVyU3RyaW5nKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIiNcIixcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPiBiLmlkID8gMSA6IGEuaWQgPCBiLmlkID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmh0bGMuZnJvbVwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJmcm9tXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiZnJvbVwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmZyb20gPiBiLmZyb20gPyAxIDogYS5mcm9tIDwgYi5mcm9tID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmh0bGMudG9cIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidG9cIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJ0b1wiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnRvID4gYi50byA/IDEgOiBhLnRvIDwgYi50byA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmFtb3VudFwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW1pdDEgPSBhLnJhd0RhdGEub3BbMV0uYW1vdW50LmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW1pdDIgPSBiLnJhd0RhdGEub3BbMV0uYW1vdW50LmFtb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpbWl0MSAtIGxpbWl0MjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmhhc2hcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaGFzaFwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImhhc2hcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmh0bGMuZXhwaXJlc1wiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJleHBpcmVzXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiZXhwaXJlc1wiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmV4cGlyZXMgPiBiLmV4cGlyZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5leHBpcmVzIDwgYi5leHBpcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LmxvY2FsaXplKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZSh1dGlscy5tYWtlSVNPRGF0ZVN0cmluZyh0ZXh0KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmFjdGlvbnNcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID09PSBcInBheWVyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJleHRlbmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlY29yZC5yYXdEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuZXh0ZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlZGVlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZWNvcmQucmF3RGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLnJlZGVlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXJlY3QtZGViaXQtdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZGlyZWN0LWRlYml0LXRhYmxlLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogVEFCTEUgSEVBREVSICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXJlY3QtZGViaXQtdGFibGVfX2ZpbHRlci1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLndpdG5lc3Nlcy5maWx0ZXJfYnlfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIzMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEljb24gdHlwZT1cInNlYXJjaFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNyZWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjMwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuY3JlYXRlX2h0bGNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpcmVjdC1kZWJpdC10YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS50YWJsZUlzTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aXNNb2RhbFZpc2libGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIdGxjTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlPXtpc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e29wZXJhdGlvbkRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuSHRsYyA9IGJpbmRUb0N1cnJlbnRBY2NvdW50KEh0bGMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHRsYztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgRmxvYXRpbmdEcm9wZG93biBmcm9tIFwiLi9GbG9hdGluZ0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4vQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtEZWNpbWFsQ2hlY2tlcn0gZnJvbSBcIi4vRGVjaW1hbENoZWNrZXJcIjtcclxuXHJcbmNsYXNzIEFzc2V0U2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZywgLy8gYXNzZXQgaWRcclxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgc2Nyb2xsX2xlbmd0aDogUHJvcFR5cGVzLm51bWJlclxyXG4gICAgfTtcclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnAuYXNzZXRzLCB0aGlzLnByb3BzLmFzc2V0cykgfHxcclxuICAgICAgICAgICAgbnAudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHxcclxuICAgICAgICAgICAgbnAuc2Nyb2xsX2xlbmd0aCAhPT0gdGhpcy5wcm9wcy5zY3JvbGxfbGVuZ3RoXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmFzc2V0cy5sZW5ndGgpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RmxvYXRpbmdEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgZW50cmllcz17dGhpcy5wcm9wcy5hc3NldHNcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGEgPT4gYSAmJiBhLmdldChcInN5bWJvbFwiKSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlcz17dGhpcy5wcm9wcy5hc3NldHMucmVkdWNlKChtYXAsIGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYSAmJiBhLmdldChcInN5bWJvbFwiKSkgbWFwW2EuZ2V0KFwic3ltYm9sXCIpXSA9IGE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcDtcclxuICAgICAgICAgICAgICAgIH0sIHt9KX1cclxuICAgICAgICAgICAgICAgIHNpbmdsZUVudHJ5PXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0c1swXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5hc3NldHNbMF0uZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlX2Ftb3VudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHNjcm9sbF9sZW5ndGg9e3RoaXMucHJvcHMuc2Nyb2xsX2xlbmd0aH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Bc3NldFNlbGVjdG9yID0gQXNzZXRXcmFwcGVyKEFzc2V0U2VsZWN0b3IsIHthc0xpc3Q6IHRydWV9KTtcclxuXHJcbmNsYXNzIEFtb3VudFNlbGVjdG9yIGV4dGVuZHMgRGVjaW1hbENoZWNrZXIge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZywgLy8gYSB0cmFuc2xhdGlvbiBrZXkgZm9yIHRoZSBsYWJlbFxyXG4gICAgICAgIGFzc2V0czogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIGFtb3VudDogUHJvcFR5cGVzLmFueSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc2Nyb2xsX2xlbmd0aDogUHJvcFR5cGVzLm51bWJlclxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICB0YWJJbmRleDogMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLm9uQXNzZXRDaGFuZ2UodGhpcy5wcm9wcy5hc3NldCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0QW1vdW50KHYpIHtcclxuICAgICAgICAvKi8vIFRPRE86IHVzZSBhc3NldCdzIHByZWNpc2lvbiB0byBmb3JtYXQgdGhlIG51bWJlciovXHJcbiAgICAgICAgaWYgKCF2KSB2ID0gXCJcIjtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwibnVtYmVyXCIpIHYgPSB2LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdi50cmltKCkucmVwbGFjZSgvLC9nLCBcIlwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkNoYW5nZShlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLmdldE51bWVyaWNFdmVudFZhbHVlKGUpLFxyXG4gICAgICAgICAgICAgICAgYXNzZXQ6IHRoaXMucHJvcHMuYXNzZXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Bc3NldENoYW5nZShzZWxlY3RlZF9hc3NldCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5wcm9wcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldDogc2VsZWN0ZWRfYXNzZXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJDYWxsaW5nIEFtb3VudFNlbGVjdG9yOiBcIiArIHRoaXMucHJvcHMubGFiZWwgKyB0aGlzLnByb3BzLmFzc2V0ICsgdGhpcy5wcm9wcy5hc3NldHMgKyB0aGlzLnByb3BzLmFtb3VudCArIHRoaXMucHJvcHMucGxhY2Vob2xkZXIgKyB0aGlzLnByb3BzLmVycm9yKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnByb3BzLmVycm9yXHJcbiAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMuZXJyb3IpXHJcbiAgICAgICAgICAgIDogdGhpcy5mb3JtYXRBbW91bnQodGhpcy5wcm9wcy5hbW91bnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFtb3VudC1zZWxlY3RvclwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyaWdodC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRpc3BsYXlfYmFsYW5jZX1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGhpcy5wcm9wcy50YWJJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QYXN0ZT17dGhpcy5wcm9wcy5vblBhc3RlIHx8IHRoaXMub25QYXN0ZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3MuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlzUHJpY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXdyYXBwZXIgaW5hY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9L1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5iYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9wcy5yZWZDYWxsYmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5hc3NldC5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtJbW11dGFibGUuTGlzdCh0aGlzLnByb3BzLmFzc2V0cyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Bc3NldENoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbF9sZW5ndGg9e3RoaXMucHJvcHMuc2Nyb2xsX2xlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5BbW91bnRTZWxlY3RvciA9IEFzc2V0V3JhcHBlcihBbW91bnRTZWxlY3Rvcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbW91bnRTZWxlY3RvcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgZGVib3VuY2VSZW5kZXIgZnJvbSBcInJlYWN0LWRlYm91bmNlLXJlbmRlclwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFzTG9hZGVkID0gZnVuY3Rpb24gaGFzTG9hZGVkKGN1cnJlbnRBY2NvdW50KSB7XHJcbiAgICByZXR1cm4gISFjdXJyZW50QWNjb3VudCAmJiAhIWN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJpbmRUb0N1cnJlbnRBY2NvdW50ID0gZnVuY3Rpb24gYmluZFRvQ3VycmVudEFjY291bnQoXHJcbiAgICBXcmFwcGVkQ29tcG9uZW50XHJcbikge1xyXG4gICAgLy8gLi4uYW5kIHJldHVybnMgYW5vdGhlciBjb21wb25lbnQuLi5cclxuICAgIGxldCBCaW5kVG9DdXJyZW50QWNjb3VudCA9IGNsYXNzIEJpbmRUb0N1cnJlbnRBY2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50QWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgICAgICAvLyBzZXQgc3Vic2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGF1dG9zdWJzY3JpYmU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNMb2FkZWQodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50ID0gQmluZFRvQ2hhaW5TdGF0ZShCaW5kVG9DdXJyZW50QWNjb3VudCk7XHJcblxyXG4gICAgQmluZFRvQ3VycmVudEFjY291bnQgPSBkZWJvdW5jZVJlbmRlcihCaW5kVG9DdXJyZW50QWNjb3VudCwgMTAwLCB7XHJcbiAgICAgICAgbGVhZGluZzogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb25uZWN0KFxyXG4gICAgICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID1cclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxlYXNlLWxvZ2luXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBuZXcgTWFwKFtbXCJuYW1lXCIsIGN1cnJlbnRBY2NvdW50XV0pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4vRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY2xhc3MgTGltaXRUb1dpdGhkcmF3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgaGlkZV9hc3NldDogUHJvcFR5cGVzLmJvb2xcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBoaWRlX2Fzc2V0OiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMucHJvcHMuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXRJZH1cclxuICAgICAgICAgICAgICAgIGFzUGVyY2VudGFnZT17dGhpcy5wcm9wcy5hc1BlcmNlbnRhZ2V9XHJcbiAgICAgICAgICAgICAgICBhc3NldEluZm89e3RoaXMucHJvcHMuYXNzZXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgcmVwbGFjZT17dGhpcy5wcm9wcy5yZXBsYWNlfVxyXG4gICAgICAgICAgICAgICAgaGlkZV9hc3NldD17dGhpcy5wcm9wcy5oaWRlX2Fzc2V0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbWl0VG9XaXRoZHJhdztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQgRmxvYXRpbmdEcm9wZG93biBmcm9tIFwiLi9GbG9hdGluZ0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4vQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIFBlcmlvZFNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGEgdHJhbnNsYXRpb24ga2V5IGZvciB0aGUgbGFiZWxcclxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc2Nyb2xsX2xlbmd0aDogUHJvcFR5cGVzLm51bWJlclxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICB0YWJJbmRleDogMFxyXG4gICAgfTtcclxuXHJcbiAgICBnZXROdW1lcmljRXZlbnRWYWx1ZShlKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gbnVsbDtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID09IFwiXCIgfHxcclxuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPT0gbnVsbCB8fFxyXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA8IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpID09IGUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlucHV0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0ID1cclxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUudHJpbSgpLnJlcGxhY2UoL1teXFxkLi1dL2csIFwiXCIpKSB8fCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dENoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtvbkNoYW5nZSwgcGVyaW9kVHlwZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuZ2V0TnVtZXJpY0V2ZW50VmFsdWUoZSksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBwZXJpb2RUeXBlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgb25UeXBlQ2hhbmdlID0gdHlwZSA9PiB7XHJcbiAgICAgICAgY29uc3Qge29uQ2hhbmdlLCBpbnB1dFZhbHVlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogaW5wdXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpbnB1dFZhbHVlLFxyXG4gICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgIGVudHJpZXMsXHJcbiAgICAgICAgICAgIHBlcmlvZFR5cGUsXHJcbiAgICAgICAgICAgIHRhYkluZGV4LFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIHNjcm9sbF9sZW5ndGhcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbW91bnQtc2VsZWN0b3JcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWFkZG9uLWJlZm9yZVwiPkVhY2g8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjcwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcz17ZW50cmllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17dmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlcmlvZFR5cGUgJiYgcGVyaW9kVHlwZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UeXBlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsX2xlbmd0aD17c2Nyb2xsX2xlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJpb2RTZWxlY3RvcjtcclxuIiwiaW1wb3J0IGFsdCBmcm9tIFwiYWx0LWluc3RhbmNlXCI7XHJcbmltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XHJcbmltcG9ydCBXYWxsZXRBcGkgZnJvbSBcImFwaS9XYWxsZXRBcGlcIjtcclxuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlLCBoYXNoLCBGZXRjaENoYWluT2JqZWN0c30gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcblxyXG5jb25zdCBjYWxjdWxhdGVIYXNoID0gKGNpcGhlciwgcHJlaW1hZ2UpID0+IHtcclxuICAgIGxldCBwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQgPSBudWxsO1xyXG4gICAgc3dpdGNoIChjaXBoZXIpIHtcclxuICAgICAgICBjYXNlIFwic2hhMjU2XCI6XHJcbiAgICAgICAgICAgIHByZWltYWdlX2hhc2hfY2FsY3VsYXRlZCA9IGhhc2guc2hhMjU2KHByZWltYWdlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInJpcGVtZDE2MFwiOlxyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQgPSBoYXNoLnJpcGVtZDE2MChwcmVpbWFnZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzaGExXCI6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgIFwic2hhMSBpcyBub3QgY29uc2lkZXJlZCBhIHNlY3VyZSBoYXNoaW5nIGFsZ29yaXRobSwgcGxhYXNlIHVzZSBzaGEyNTZcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBjaXBoZXIgbmFtZSBwcm92aWRlZCB3aGVuIGNyZWF0aW5nIGh0bGMgb3BcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkO1xyXG59O1xyXG5jb25zdCBnZXRDaXBoZXJJbnQgPSBjaXBoZXIgPT4ge1xyXG4gICAgbGV0IHByZWltYWdlX2hhc2hfY2lwaGVyID0gbnVsbDtcclxuICAgIHN3aXRjaCAoY2lwaGVyKSB7XHJcbiAgICAgICAgY2FzZSBcInNoYTI1NlwiOlxyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoX2NpcGhlciA9IDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJyaXBlbWQxNjBcIjpcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaF9jaXBoZXIgPSAwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic2hhMVwiOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcInNoYTEgaXMgbm90IGNvbnNpZGVyZWQgYSBzZWN1cmUgaGFzaGluZyBhbGdvcml0aG0sIHBsYWFzZSB1c2Ugc2hhMjU2XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgY2lwaGVyIG5hbWUgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBodGxjIG9wXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZWltYWdlX2hhc2hfY2lwaGVyO1xyXG59O1xyXG5jbGFzcyBIdGxjQWN0aW9ucyB7XHJcbiAgICBjcmVhdGUoe1xyXG4gICAgICAgIGZyb21fYWNjb3VudF9pZCxcclxuICAgICAgICB0b19hY2NvdW50X2lkLFxyXG4gICAgICAgIGFzc2V0X2lkLFxyXG4gICAgICAgIGFtb3VudCxcclxuICAgICAgICBsb2NrX3RpbWUsXHJcbiAgICAgICAgcHJlaW1hZ2VfY2lwaGVyLFxyXG4gICAgICAgIHByZWltYWdlID0gbnVsbCxcclxuICAgICAgICBwcmVpbWFnZV9oYXNoID0gbnVsbCxcclxuICAgICAgICBwcmVpbWFnZV9zaXplID0gbnVsbCxcclxuICAgICAgICBmZWVfYXNzZXQgPSBudWxsXHJcbiAgICB9KSB7XHJcbiAgICAgICAgaWYgKCFmZWVfYXNzZXQpIHtcclxuICAgICAgICAgICAgZmVlX2Fzc2V0ID0gXCIxLjMuMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGZlZV9hc3NldCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBmZWVfYXNzZXQgPSBmZWVfYXNzZXQuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyID0gV2FsbGV0QXBpLm5ld190cmFuc2FjdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgcHJlaW1hZ2VfaGFzaF9jaXBoZXIgPSBnZXRDaXBoZXJJbnQocHJlaW1hZ2VfY2lwaGVyKTtcclxuICAgICAgICBpZiAocHJlaW1hZ2UgJiYgIXByZWltYWdlX2hhc2gpIHtcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaCA9IGNhbGN1bGF0ZUhhc2gocHJlaW1hZ2VfY2lwaGVyLCBwcmVpbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcHJlaW1hZ2Vfc2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAocHJlaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIHByZWltYWdlX3NpemUgPSBwcmVpbWFnZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlByZWltYWdlIG11c3QgYmUgZ2l2ZW4gaWYgc2l6ZSBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHIuYWRkX3R5cGVfb3BlcmF0aW9uKFwiaHRsY19jcmVhdGVcIiwge1xyXG4gICAgICAgICAgICBmcm9tOiBmcm9tX2FjY291bnRfaWQsXHJcbiAgICAgICAgICAgIHRvOiB0b19hY2NvdW50X2lkLFxyXG4gICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBmZWVfYXNzZXRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldF9pZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoOiBbcHJlaW1hZ2VfaGFzaF9jaXBoZXIsIHByZWltYWdlX2hhc2hdLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9zaXplOiBwcmVpbWFnZV9zaXplLFxyXG4gICAgICAgICAgICBjbGFpbV9wZXJpb2Rfc2Vjb25kczogbG9ja190aW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsZXREYi5wcm9jZXNzX3RyYW5zYWN0aW9uKHRyLCBudWxsLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiW0h0bGNBY3Rpb25zLmpzOjY5XSAtLS0tLSBodGxjIGNyZWF0ZSBlcnJvciAtLS0tLT5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVkZWVtKHtodGxjX2lkLCB1c2VyX2lkLCBwcmVpbWFnZX0pIHtcclxuICAgICAgICBsZXQgdHIgPSBXYWxsZXRBcGkubmV3X3RyYW5zYWN0aW9uKCk7XHJcblxyXG4gICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbihcImh0bGNfcmVkZWVtXCIsIHtcclxuICAgICAgICAgICAgcHJlaW1hZ2U6IG5ldyBCdWZmZXIocHJlaW1hZ2UpLnRvU3RyaW5nKFwiaGV4XCIpLFxyXG4gICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBcIjEuMy4wXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaHRsY19pZDogaHRsY19pZCxcclxuICAgICAgICAgICAgcmVkZWVtZXI6IHVzZXJfaWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxldERiLnByb2Nlc3NfdHJhbnNhY3Rpb24odHIsIG51bGwsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJbSHRsY0FjdGlvbnMuanM6OThdIC0tLS0tIGh0bGMgcmVkZWVtIGVycm9yIC0tLS0tPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBleHRlbmQoe2h0bGNfaWQsIHVzZXJfaWQsIHNlY29uZHNfdG9fYWRkfSkge1xyXG4gICAgICAgIGxldCB0ciA9IFdhbGxldEFwaS5uZXdfdHJhbnNhY3Rpb24oKTtcclxuXHJcbiAgICAgICAgdHIuYWRkX3R5cGVfb3BlcmF0aW9uKFwiaHRsY19leHRlbmRcIiwge1xyXG4gICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBcIjEuMy4wXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaHRsY19pZDogaHRsY19pZCxcclxuICAgICAgICAgICAgdXBkYXRlX2lzc3VlcjogdXNlcl9pZCxcclxuICAgICAgICAgICAgc2Vjb25kc190b19hZGQ6IHNlY29uZHNfdG9fYWRkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsZXREYi5wcm9jZXNzX3RyYW5zYWN0aW9uKHRyLCBudWxsLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiW0h0bGNBY3Rpb25zLmpzOjEyN10gLS0tLS0gaHRsYyBleHRlbmQgZXJyb3IgLS0tLS0+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUhhc2gocHJlaW1hZ2UsIGNpcGhlcikge1xyXG4gICAgICAgIGNvbnN0IHByZWltYWdlX2hhc2hfY2FsY3VsYXRlZCA9IGNhbGN1bGF0ZUhhc2goY2lwaGVyLCBwcmVpbWFnZSk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHByZWltYWdlX2hhc2hfY2FsY3VsYXRlZC5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGhhc2ggPSBuZXcgQnVmZmVyKHByZWltYWdlX2hhc2hfY2FsY3VsYXRlZCkudG9TdHJpbmcoXCJoZXhcIik7XHJcbiAgICAgICAgcmV0dXJuIHtoYXNoLCBzaXplfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoSHRsY0FjdGlvbnMpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgYmFzZUVhY2ggZnJvbSAnLi9fYmFzZUVhY2guanMnO1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vaXNBcnJheUxpa2UuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hcGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlTWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gaXNBcnJheUxpa2UoY29sbGVjdGlvbikgPyBBcnJheShjb2xsZWN0aW9uLmxlbmd0aCkgOiBbXTtcblxuICBiYXNlRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gaXRlcmF0ZWUodmFsdWUsIGtleSwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlTWFwO1xuIiwiaW1wb3J0IGFycmF5TWFwIGZyb20gJy4vX2FycmF5TWFwLmpzJztcbmltcG9ydCBiYXNlSXRlcmF0ZWUgZnJvbSAnLi9fYmFzZUl0ZXJhdGVlLmpzJztcbmltcG9ydCBiYXNlTWFwIGZyb20gJy4vX2Jhc2VNYXAuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyBieSBydW5uaW5nIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgdGhydVxuICogYGl0ZXJhdGVlYC4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gKiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogTWFueSBsb2Rhc2ggbWV0aG9kcyBhcmUgZ3VhcmRlZCB0byB3b3JrIGFzIGl0ZXJhdGVlcyBmb3IgbWV0aG9kcyBsaWtlXG4gKiBgXy5ldmVyeWAsIGBfLmZpbHRlcmAsIGBfLm1hcGAsIGBfLm1hcFZhbHVlc2AsIGBfLnJlamVjdGAsIGFuZCBgXy5zb21lYC5cbiAqXG4gKiBUaGUgZ3VhcmRlZCBtZXRob2RzIGFyZTpcbiAqIGBhcnlgLCBgY2h1bmtgLCBgY3VycnlgLCBgY3VycnlSaWdodGAsIGBkcm9wYCwgYGRyb3BSaWdodGAsIGBldmVyeWAsXG4gKiBgZmlsbGAsIGBpbnZlcnRgLCBgcGFyc2VJbnRgLCBgcmFuZG9tYCwgYHJhbmdlYCwgYHJhbmdlUmlnaHRgLCBgcmVwZWF0YCxcbiAqIGBzYW1wbGVTaXplYCwgYHNsaWNlYCwgYHNvbWVgLCBgc29ydEJ5YCwgYHNwbGl0YCwgYHRha2VgLCBgdGFrZVJpZ2h0YCxcbiAqIGB0ZW1wbGF0ZWAsIGB0cmltYCwgYHRyaW1FbmRgLCBgdHJpbVN0YXJ0YCwgYW5kIGB3b3Jkc2BcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIHNxdWFyZShuKSB7XG4gKiAgIHJldHVybiBuICogbjtcbiAqIH1cbiAqXG4gKiBfLm1hcChbNCwgOF0sIHNxdWFyZSk7XG4gKiAvLyA9PiBbMTYsIDY0XVxuICpcbiAqIF8ubWFwKHsgJ2EnOiA0LCAnYic6IDggfSwgc3F1YXJlKTtcbiAqIC8vID0+IFsxNiwgNjRdIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJyB9XG4gKiBdO1xuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5tYXAodXNlcnMsICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leScsICdmcmVkJ11cbiAqL1xuZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5TWFwIDogYmFzZU1hcDtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAzKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcDtcbiIsImltcG9ydCBiYXNlU2V0IGZyb20gJy4vX2Jhc2VTZXQuanMnO1xuXG4vKipcbiAqIFNldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgYSBwb3J0aW9uIG9mIGBwYXRoYCBkb2Vzbid0IGV4aXN0LFxuICogaXQncyBjcmVhdGVkLiBBcnJheXMgYXJlIGNyZWF0ZWQgZm9yIG1pc3NpbmcgaW5kZXggcHJvcGVydGllcyB3aGlsZSBvYmplY3RzXG4gKiBhcmUgY3JlYXRlZCBmb3IgYWxsIG90aGVyIG1pc3NpbmcgcHJvcGVydGllcy4gVXNlIGBfLnNldFdpdGhgIHRvIGN1c3RvbWl6ZVxuICogYHBhdGhgIGNyZWF0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLnNldChvYmplY3QsICdhWzBdLmIuYycsIDQpO1xuICogY29uc29sZS5sb2cob2JqZWN0LmFbMF0uYi5jKTtcbiAqIC8vID0+IDRcbiAqXG4gKiBfLnNldChvYmplY3QsIFsneCcsICcwJywgJ3knLCAneiddLCA1KTtcbiAqIGNvbnNvbGUubG9nKG9iamVjdC54WzBdLnkueik7XG4gKiAvLyA9PiA1XG4gKi9cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IG9iamVjdCA6IGJhc2VTZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==