"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[16],{

/***/ 3403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2308);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(437);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2084);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2110);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2111);
/* harmony import */ var _Utility_LimitToWithdraw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3404);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(642);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2095);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2436);
/* provided dependency */ var Buffer = __webpack_require__(443)["Buffer"];
















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

/***/ 3401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2308);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(437);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2832);
/* harmony import */ var _Utility_PeriodSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3402);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2095);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(589);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2111);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2116);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(637);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(636);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2117);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1816);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(656);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1043);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(642);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(924);
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

/***/ 3397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2308);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(437);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2084);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2111);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(589);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2116);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(637);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(636);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2117);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2312);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1816);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(656);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(924);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var actions_HtlcActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3398);
/* harmony import */ var _assets_stylesheets_components_htlc_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3399);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1962);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2654);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2095);


























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

/***/ 3349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2097);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(589);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(605);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1816);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(607);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1822);
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

/***/ 3373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2526);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1816);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(656);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(667);
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

/***/ 3372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackupSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2559);
/* harmony import */ var _Wallet_BackupBrainkey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3367);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BackupFavorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3373);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(667);
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

/***/ 3348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1816);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(656);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(437);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2088);
/* harmony import */ var _Modal_SetDefaultFeeAssetModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2096);










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

/***/ 3368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3365);


class PasswordSettings extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wallet_WalletChangePassword__WEBPACK_IMPORTED_MODULE_1__["default"], null);
  }

}

/***/ }),

/***/ 3371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(657);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routerTransition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1934);






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

/***/ 3370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(657);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(667);
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

/***/ 3369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RestoreSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Wallet_Backup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2559);
/* harmony import */ var _Wallet_ImportKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3361);
/* harmony import */ var _Wallet_WalletCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2579);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(657);
/* harmony import */ var _RestoreFavorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3370);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(667);
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

/***/ 3346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_set__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3374);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_IntlActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(658);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(657);
/* harmony import */ var _WebsocketAddModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1932);
/* harmony import */ var _SettingsEntry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3347);
/* harmony import */ var _AccountsSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3349);
/* harmony import */ var _WalletSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3350);
/* harmony import */ var _PasswordSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3368);
/* harmony import */ var _RestoreSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3369);
/* harmony import */ var _ResetSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3371);
/* harmony import */ var _BackupSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3372);
/* harmony import */ var _AccessSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1933);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(621);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(667);
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

/***/ 3345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(656);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2622);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1944);
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3346);






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

/***/ 3347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsEntry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2088);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2081);
/* harmony import */ var notifyjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(notifyjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FeeAssetSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3348);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Gateways_GatewaySelectorModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2620);








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

/***/ 3350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WalletSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Wallet_WalletManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3351);
/* harmony import */ var _Wallet_BalanceClaimActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3353);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(644);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(667);
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

/***/ 3392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Barter)
/* harmony export */ });
/* harmony import */ var lodash_es_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3393);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2111);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2095);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(589);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(437);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2832);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(637);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(607);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(636);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2117);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(642);
/* provided dependency */ var Buffer = __webpack_require__(443)["Buffer"];
















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

/***/ 3395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2110);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2085);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1816);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(437);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(643);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2753);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(589);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1825);
/* harmony import */ var _Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2087);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(431);















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
        assets: [//gpAssets
        "1.3.27", // gpUSD
        "1.3.36", // gpEUR
        "1.3.37", // gpRUB
        "1.3.38", // gpCNY
        "1.3.35", // gpGOLD
        "1.3.34" // gpSILVER

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

/***/ 3400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(521);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(437);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(607);
/* harmony import */ var _Modal_DirectDebitModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3401);
/* harmony import */ var _Modal_DirectDebitClaimModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3403);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2411);
/* harmony import */ var _api_ApplicationApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(642);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2654);












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

/***/ 3396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(437);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(607);
/* harmony import */ var _Modal_HtlcModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3397);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2411);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2654);









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

/***/ 2654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasLoaded": () => (/* binding */ hasLoaded),
/* harmony export */   "bindToCurrentAccount": () => (/* binding */ bindToCurrentAccount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1962);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2110);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1963);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1816);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1941);







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

/***/ 3404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2118);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(731);
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

/***/ 3402:
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(731);
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

/***/ 3398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alt_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(591);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(521);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(641);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(644);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(437);
/* provided dependency */ var Buffer = __webpack_require__(443)["Buffer"];






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

/***/ 3399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 3394:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2022);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1749);



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

/***/ 3393:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2019);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2028);
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3394);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1706);





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

/***/ 3374:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2073);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuZWFiZmQ4MjdmYzE0N2ZiZmRmZTAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQVVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFLQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUtBOztBQUNBO0FBQ0E7QUFJQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFJQTs7QUFJQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFTQTtBQUNBO0FBRkE7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFIQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFTQTs7QUFFQTtBQUdBO0FBQ0E7O0FBV0E7O0FBSUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBdkJBO0FBMkJBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFEQTtBQU1BO0FBQ0E7QUFPQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBbEJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBWEE7QUFjQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBRkE7QUFGQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFWQTtBQWdCQTs7QUE3WUE7O0FBZ1pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdmFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQUE7QUFBQTtBQURBOztBQUlBO0FBQ0E7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7OztBQUdBO0FBS0E7O0FBSUE7QUFDQTtBQUdBO0FBR0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBbEJBO0FBc0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTs7QUFFQTs7QUFHQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBZUE7QUFEQTs7QUFPQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBOztBQUVBO0FBR0E7QUFDQTs7QUFXQTs7QUFJQTtBQUVBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQTlCQTtBQWtDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFWQTtBQWdCQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFiQTtBQWtCQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQWpCQTtBQXNCQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBVEE7QUFnQkE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFZQTtBQWRBO0FBc0JBOztBQTdtQkE7O0FBZ25CQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTs7QUFaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBREE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7O0FBUUE7QUFPQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFLQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQXRCQTtBQStCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQU1BO0FBR0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFZQTtBQUFBO0FBRUE7QUFHQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFWQTtBQWNBO0FBR0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFWQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBYUE7O0FBOVJBOztBQWdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQXlCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFRQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFRQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQVRBOztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBOztBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSUE7QUFBQTtBQVZBO0FBZUE7QUFEQTtBQU1BO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7O0FBRUE7QUFHQTtBQUVBO0FBU0E7QUFNQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBV0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQVdBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWhCQTtBQW9CQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBakJBO0FBd0JBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFvQkE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBWkE7QUFlQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBVkE7QUFzQkE7O0FBdnJCQTs7QUEwckJBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7O0FBVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFLQTtBQUNBO0FBRUE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQURBO0FBZ0JBO0FBREE7QUFTQTtBQUNBO0FBQUE7QUFJQTtBQURBO0FBR0E7QUFBQTtBQU1BO0FBSUE7O0FBOUVBOztBQWlGQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBVEE7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSUE7O0FBdEJBOztBQXlCQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFkQTs7QUFpQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVlBOztBQTFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVpBO0FBaUJBOztBQTNEQTs7QUE4REE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFSQTs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBUEE7QUFUQTtBQXdCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBa0JBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVFBOztBQTNFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFSQTtBQWFBO0FBQUE7QUFPQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBTUE7O0FBekZBOztBQTRGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUlBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBOUJBOztBQWlDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBV0E7O0FBdkdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUtBOztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQTNFQTs7QUE4RUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQURBO0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBY0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUdBO0FBZkE7QUFtQkE7QUFDQTtBQWpGQTs7QUFvRkE7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQU9BO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBRUE7QUFLQTtBQUlBO0FBVkE7QUFhQTtBQURBO0FBS0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFlQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWxCQTtBQXVCQTs7QUF0ZUE7O0FBeWVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBRkE7QUF1QkE7O0FBMUJBOztBQTZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVlBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFPQTtBQUdBO0FBSkE7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7O0FBQ0E7QUFyTEE7O0FBdUxBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQURBO0FBUUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQWVBO0FBQUE7QUFPQTtBQUFBO0FBR0E7O0FBalRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBTUE7O0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFEQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBV0E7O0FBckZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBL0NBO0FBaURBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFIQTtBQWFBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBSEE7QUFhQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7O0FBVUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFFQTtBQUNBO0FBRkE7QUFLQTs7QUFVQTtBQUNBO0FBRUE7O0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQVhBO0FBYUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVEE7QUFXQTtBQUVBO0FBSUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFEQTtBQUtBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFTQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBT0E7QUFDQTtBQWJBO0FBb0JBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBVkE7QUFpQkE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7O0FBV0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUlBOztBQUNBOztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQURBO0FBTUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFKQTtBQU9BO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFJQTtBQU9BO0FBQ0E7QUFNQTtBQXhCQTtBQStCQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUpBO0FBT0E7QUFJQTtBQUNBO0FBQ0E7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQU1BO0FBckJBO0FBNEJBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUZBO0FBaUJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBRkE7QUFpQkE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVdBO0FBREE7QUFXQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQVVBO0FBR0E7QUFKQTtBQU9BO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQWtCQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBY0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBT0E7QUFBQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFHQTtBQWxCQTtBQXVCQTtBQURBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFYQTtBQWtCQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFjQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUdBO0FBZEE7QUFxQkE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBWkE7QUFrQkE7O0FBRUE7QUFFQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQWZBO0FBa0JBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFHQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFLQTtBQWZBO0FBdUJBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUVBO0FBR0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBaUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBdmhEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQXRCQTtBQXlCQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBT0E7QUFaQTtBQWNBO0FBQUE7QUFPQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQVdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFTQTtBQU1BO0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBUUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFVQTtBQUNBO0FBRkE7QUFZQTtBQUNBO0FBQUE7QUFPQTtBQU1BO0FBQUE7QUFHQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFEQTtBQVNBO0FBREE7QUFRQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQURBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQVRBO0FBY0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF2WUE7O0FBMFlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7O0FBVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVaQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQURBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBVUE7QUFEQTtBQUtBO0FBQUE7QUFsREE7QUFzREE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFhQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBaERBO0FBb0RBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFMQTtBQWNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBV0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVNBOztBQTFaQTs7QUE2WkE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBOztBQUVBO0FBQ0E7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBTEE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQU1BO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBR0E7QUFFQTtBQURBO0FBZUE7QUFDQTtBQUFBO0FBaENBO0FBb0NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBbkJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFjQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFyQ0E7QUF5Q0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUxBO0FBY0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFVQTs7QUF2VUE7O0FBMFVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7O0FBTUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBbkJBO0FBc0JBOztBQXpDQTs7QUE0Q0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFFQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBWUE7O0FBL0ZBOztBQWlHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBCQTtBQXVCQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTs7QUFaQTtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBOztBQXBCQTs7QUF1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBOztBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFXQTs7QUFqR0E7O0FBb0dBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFHQTs7QUFDQTtBQUNBO0FBYkE7O0FBZUE7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQWJBOztBQWVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBN0hBOztBQWdJQTs7Ozs7Ozs7QUM1S0E7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTW9kYWwvRGlyZWN0RGViaXRDbGFpbU1vZGFsLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Nb2RhbC9EaXJlY3REZWJpdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Nb2RhbC9IdGxjTW9kYWwuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL0FjY291bnRzU2V0dGluZ3MuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL0JhY2t1cEZhdm9yaXRlcy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvQmFja3VwU2V0dGluZ3MuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL0ZlZUFzc2V0U2V0dGluZ3MuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1Bhc3N3b3JkU2V0dGluZ3MuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1Jlc2V0U2V0dGluZ3MuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1Jlc3RvcmVGYXZvcml0ZXMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1Jlc3RvcmVTZXR0aW5ncy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1NldHRpbmdzL1NldHRpbmdzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9TZXR0aW5nc0VudHJ5LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TZXR0aW5ncy9XYWxsZXRTZXR0aW5ncy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvU2hvd2Nhc2VzL0JhcnRlci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvU2hvd2Nhc2VzL0JvcnJvdy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvU2hvd2Nhc2VzL0RpcmVjdERlYml0LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9TaG93Y2FzZXMvSHRsYy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9BbW91bnRTZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DdXJyZW50QWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9MaW1pdFRvV2l0aGRyYXcuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUGVyaW9kU2VsZWN0b3IuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9hY3Rpb25zL0h0bGNBY3Rpb25zLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9hc3NldHMvc3R5bGVzaGVldHMvY29tcG9uZW50cy9faHRsYy5zY3NzPzIyYzUiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZU1hcC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL21hcC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3NldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0NoYWluU3RvcmUsIEZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQge2lzTmFOfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgTGltaXRUb1dpdGhkcmF3IGZyb20gXCIuLi9VdGlsaXR5L0xpbWl0VG9XaXRoZHJhd1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7XG4gICAgTW9kYWwsXG4gICAgQnV0dG9uLFxuICAgIFRvb2x0aXAsXG4gICAgSWNvbixcbiAgICBGb3JtLFxuICAgIElucHV0XG59IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBBcHBsaWNhdGlvbkFwaSBmcm9tIFwiLi4vLi4vYXBpL0FwcGxpY2F0aW9uQXBpXCI7XG5pbXBvcnQgRmVlQXNzZXRTZWxlY3RvciBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0ZlZUFzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5cbmNsYXNzIERpcmVjdERlYml0Q2xhaW1Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUocHJvcHMpO1xuICAgIH1cblxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvX25hbWU6IFwiXCIsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQ6IG51bGwsXG4gICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZTogbnVsbCxcbiAgICAgICAgICAgIHRvX2FjY291bnQ6IG51bGwsXG4gICAgICAgICAgICBhbW91bnQ6IFwiXCIsXG4gICAgICAgICAgICBhc3NldF9pZDogbnVsbCxcbiAgICAgICAgICAgIGFzc2V0OiBudWxsLFxuICAgICAgICAgICAgbWVtbzogXCJcIixcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgZmVlQXNzZXQ6IG51bGwsIC8vIHdpbGwgYmUgZmlsbGVkIGJ5IEZlZUFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgIG1heEFtb3VudDogZmFsc2UsXG4gICAgICAgICAgICBwZXJtaXNzaW9uSWQ6IFwiXCIsXG4gICAgICAgICAgICBmaXJzdFBlcmlvZEVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHBheWVyQmFsYW5jZVdhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdDogdGhpcy5wcm9wcy5vcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX2xpbWl0LFxuICAgICAgICAgICAgY3VycmVudF9wZXJpb2RfZXhwaXJlczogXCJcIixcbiAgICAgICAgICAgIGNsYWltZWRBbW91bnQ6IFwiXCIsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcbiAgICAgICAgICAgIHRvX2FjY291bnQsXG4gICAgICAgICAgICBmZWVBc3NldCxcbiAgICAgICAgICAgIHBlcm1pc3Npb25JZCxcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgYXNzZXRfaWQsXG4gICAgICAgICAgICBtZW1vXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIEFwcGxpY2F0aW9uQXBpLmNsYWltV2l0aGRyYXdQZXJtaXNzaW9uKFxuICAgICAgICAgICAgcGVybWlzc2lvbklkLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIGFzc2V0X2lkLFxuICAgICAgICAgICAgdXRpbHMuY29udmVydF90eXBlZF90b19zYXRvc2hpKGFtb3VudCwgYXNzZXQpLFxuICAgICAgICAgICAgbWVtbyA/IG5ldyBCdWZmZXIobWVtbywgXCJ1dGYtOFwiKSA6IG1lbW8sXG4gICAgICAgICAgICBmZWVBc3NldC5hc3NldF9pZFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiBlcnJ9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgY29uc3Qge29wZXJhdGlvbiwgaXNNb2RhbFZpc2libGV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZSAmJlxuICAgICAgICAgICAgb3BlcmF0aW9uICYmXG4gICAgICAgICAgICBwcmV2U3RhdGUucGVybWlzc2lvbklkICE9PSBvcGVyYXRpb24ucGF5bG9hZC5pZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdGFydCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLnBlcmlvZF9zdGFydF90aW1lICsgXCJaXCJcbiAgICAgICAgICAgICkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICBjb25zdCB0aW1lUGFzc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aW1lU3RhcnQ7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50UGVyaW9kTnVtO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRQZXJpb2RFeHBpcmVzID0gXCJcIjtcblxuICAgICAgICAgICAgY29uc3QgcGVyaW9kTXMgPSBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX3BlcmlvZF9zZWMgKiAxMDAwO1xuICAgICAgICAgICAgaWYgKHRpbWVQYXNzZWQgPCAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdCBwZXJpb2QgaXMgbm90IHN0YXJ0ZWRcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQZXJpb2ROdW0gPSBNYXRoLmNlaWwodGltZVBhc3NlZCAvIHBlcmlvZE1zKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGVyaW9kRXhwaXJlcyA9IHRpbWVTdGFydCArIHBlcmlvZE1zICogY3VycmVudFBlcmlvZE51bTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdG8gPSBhd2FpdCBGZXRjaENoYWluKFxuICAgICAgICAgICAgICAgIFwiZ2V0QWNjb3VudFwiLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmF1dGhvcml6ZWRfYWNjb3VudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGZyb20gPSBhd2FpdCBGZXRjaENoYWluKFxuICAgICAgICAgICAgICAgIFwiZ2V0QWNjb3VudFwiLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3X2Zyb21fYWNjb3VudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgRmV0Y2hDaGFpbihcbiAgICAgICAgICAgICAgICBcImdldEFzc2V0XCIsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGZyb21fYWNjb3VudF9iYWxhbmNlID0gYXdhaXQgdGhpcy5fY2hlY2tCYWxhbmNlKFxuICAgICAgICAgICAgICAgIGZyb20sXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9saW1pdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IHRvLFxuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogZnJvbSxcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uSWQ6IG9wZXJhdGlvbi5wYXlsb2FkLmlkLFxuICAgICAgICAgICAgICAgIHdpdGhkcmF3YWxfbGltaXQ6IG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3YWxfbGltaXQsXG4gICAgICAgICAgICAgICAgY2xhaW1lZEFtb3VudDogb3BlcmF0aW9uLnBheWxvYWQuY2xhaW1lZF90aGlzX3BlcmlvZCxcbiAgICAgICAgICAgICAgICBjdXJyZW50X3BlcmlvZF9leHBpcmVzX2RhdGU6IGN1cnJlbnRQZXJpb2RFeHBpcmVzLFxuICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldCxcbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUb3RhbExpbWl0ID0gbGltaXQgPT4gKCkgPT4ge1xuICAgICAgICBjb25zdCB7YXNzZXQsIGNsYWltZWRBbW91bnR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGFtb3VudCA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQobGltaXQgLSBjbGFpbWVkQW1vdW50LCBhc3NldCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21heEFtb3VudDogdHJ1ZSwgYW1vdW50fSk7XG4gICAgfTtcblxuICAgIG9uQW1vdW50Q2hhbmdlZCA9ICh7YW1vdW50LCBhc3NldH0pID0+IHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgbWF4QW1vdW50OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25GZWVDaGFuZ2VkKGFzc2V0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZUFzc2V0OiBhc3NldH0pO1xuICAgIH1cblxuICAgIG9uTWVtb0NoYW5nZWQoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vOiBlLnRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIGFzeW5jIF9jaGVja0JhbGFuY2UoZnJvbV9hY2NvdW50ID0gbnVsbCwgd2l0aGRyYXdhbF9saW1pdCA9IG51bGwpIHtcbiAgICAgICAgbGV0IHNldFN0YXRlID0gZmFsc2U7XG4gICAgICAgIGlmIChmcm9tX2FjY291bnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgZnJvbV9hY2NvdW50ID0gdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQ7XG4gICAgICAgICAgICBzZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpdGhkcmF3YWxfbGltaXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdCA9IHRoaXMuc3RhdGUud2l0aGRyYXdhbF9saW1pdDtcbiAgICAgICAgICAgIHNldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYWxhbmNlSUQgPSBmcm9tX2FjY291bnQuZ2V0SW4oW1xuICAgICAgICAgICAgXCJiYWxhbmNlc1wiLFxuICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZFxuICAgICAgICBdKTtcblxuICAgICAgICBsZXQgZnJvbV9hY2NvdW50X2JhbGFuY2UgPSAwO1xuICAgICAgICBpZiAoISFiYWxhbmNlSUQpIHtcbiAgICAgICAgICAgIGZyb21fYWNjb3VudF9iYWxhbmNlID0gKGF3YWl0IEZldGNoQ2hhaW4oXG4gICAgICAgICAgICAgICAgXCJnZXRPYmplY3RcIixcbiAgICAgICAgICAgICAgICBiYWxhbmNlSURcbiAgICAgICAgICAgICkpLmdldChcImJhbGFuY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tX2FjY291bnRfYmFsYW5jZX0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tX2FjY291bnRfYmFsYW5jZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXG4gICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZSxcbiAgICAgICAgICAgIHRvX2FjY291bnQsXG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIG1lbW8sXG4gICAgICAgICAgICBwYXllckJhbGFuY2VXYXJuaW5nLFxuICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdCxcbiAgICAgICAgICAgIGN1cnJlbnRfcGVyaW9kX2V4cGlyZXNfZGF0ZVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgZW50ZXJlZE1vcmVUaGFuQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgIGxldCBiYWxhbmNlRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgbGV0IG1heGltdW1Ub0NsYWltID0gMDtcbiAgICAgICAgaWYgKHdpdGhkcmF3YWxfbGltaXQpIHtcbiAgICAgICAgICAgIG1heGltdW1Ub0NsYWltID1cbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IE1hdGgubWluKGZyb21fYWNjb3VudF9iYWxhbmNlLCB3aXRoZHJhd2FsX2xpbWl0LmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgOiB3aXRoZHJhd2FsX2xpbWl0LmFtb3VudDtcbiAgICAgICAgICAgIGlmIChhc3NldCAmJiBhbW91bnQpXG4gICAgICAgICAgICAgICAgZW50ZXJlZE1vcmVUaGFuQXZhaWxhYmxlID1cbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuY29udmVydF90eXBlZF90b19zYXRvc2hpKGFtb3VudCwgYXNzZXQpID5cbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bVRvQ2xhaW07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50X2JhbGFuY2UgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnRfYmFsYW5jZSA8IHdpdGhkcmF3YWxfbGltaXQuYW1vdW50XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xuXG4gICAgICAgIC8vIGJhbGFuY2VcbiAgICAgICAgaWYgKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikpIHtcbiAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInNob3djYXNlcy5kaXJlY3RfZGViaXQubGltaXRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlbnRlcmVkTW9yZVRoYW5BdmFpbGFibGUgPyBcImhhcy1lcnJvclwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNldFRvdGFsTGltaXQobWF4aW11bVRvQ2xhaW0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGltaXRUb1dpdGhkcmF3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXttYXhpbXVtVG9DbGFpbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldElkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdCAmJiB3aXRoZHJhd2FsX2xpbWl0LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAge2JhbGFuY2VFcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cInNob3djYXNlcy5kaXJlY3RfZGViaXQucGF5ZXJfYmFsYW5jZV9ub3Rfc3VmZmljaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogd2l0aGRyYXdhbF9saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImxpbWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZXhjbGFtYXRpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiBcIiNmZThjMDBcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW1vdW50VmFsdWUgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoYW1vdW50LCAvLC9nLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBpc0Ftb3VudFZhbGlkID0gYW1vdW50VmFsdWUgJiYgIWlzTmFOKGFtb3VudFZhbHVlKTtcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XG4gICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdG9fYWNjb3VudCB8fFxuICAgICAgICAgICAgIWlzQW1vdW50VmFsaWQgfHxcbiAgICAgICAgICAgICFhc3NldCB8fFxuICAgICAgICAgICAgYmFsYW5jZUVycm9yIHx8XG4gICAgICAgICAgICBlbnRlcmVkTW9yZVRoYW5BdmFpbGFibGUgfHxcbiAgICAgICAgICAgIHBheWVyQmFsYW5jZVdhcm5pbmcgfHxcbiAgICAgICAgICAgICFjdXJyZW50X3BlcmlvZF9leHBpcmVzX2RhdGUgfHxcbiAgICAgICAgICAgIGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0b19hY2NvdW50LmdldChcImlkXCIpO1xuXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpcmVjdERlYml0Q2xhaW1Nb2RhbC5yZW5kZXJcIiwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmNsYWltX2Z1bmRzXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMuaXNNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJyZWRcIn0gc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXROb3RWYWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkID8gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jbGFpbVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cIkNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCIgbGF5b3V0PVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5kaXJlY3RfZGViaXQuYXV0aG9yaXppbmdfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIXRvX2FjY291bnQgPyB0b19hY2NvdW50LmdldChcIm5hbWVcIikgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RvX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmN1cnJlbnRfcGVyaW9kX2V4cGlyZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wZXJpb2RfZXhwaXJlc19kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wZXJpb2RfZXhwaXJlc19kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5maXJzdF9wZXJpb2Rfbm90X3N0YXJ0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3BlcmlvZF9leHBpcmVzX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZXJyb3ItYXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5kaXJlY3RfZGViaXQuYW1vdW50X3RvX3dpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFtb3VudENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd2FsX2xpbWl0ICYmIHdpdGhkcmF3YWxfbGltaXQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdhbF9saW1pdCAmJiBbd2l0aGRyYXdhbF9saW1pdC5hc3NldF9pZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1vICYmIG1lbW8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyaWdodC1sYWJlbFwiPnttZW1vLmxlbmd0aH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLm1lbW9fdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2Zlci5tZW1vXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWVtb0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RvX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3aXRoZHJhd19wZXJtaXNzaW9uX2NsYWltXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBtZW1vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmVlQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdERlYml0Q2xhaW1Nb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IFBlcmlvZFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L1BlcmlvZFNlbGVjdG9yXCI7XHJcbmltcG9ydCBGZWVBc3NldFNlbGVjdG9yIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xyXG5cclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUgZnJvbSBcInN0b3Jlcy9UcmFuc2FjdGlvbkNvbmZpcm1TdG9yZVwiO1xyXG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IHtpc05hTn0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQge2NoZWNrQmFsYW5jZX0gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcclxuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcclxuaW1wb3J0IHtNb2RhbCwgQnV0dG9uLCBUb29sdGlwLCBGb3JtfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEFwcGxpY2F0aW9uQXBpIGZyb20gXCIuLi8uLi9hcGkvQXBwbGljYXRpb25BcGlcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5jbGFzcyBEaXJlY3REZWJpdE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZShwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5vblRyeEluY2x1ZGVkID0gdGhpcy5vblRyeEluY2x1ZGVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvX25hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGZyb21fYWNjb3VudDogbnVsbCxcclxuICAgICAgICAgICAgdG9fYWNjb3VudDogbnVsbCxcclxuICAgICAgICAgICAgYW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogbnVsbCxcclxuICAgICAgICAgICAgYXNzZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQ6XHJcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmFzc2V0c19ieV9zeW1ib2wuZ2V0KHRoaXMucHJvcHMuZmVlX2Fzc2V0X3N5bWJvbCkgfHxcclxuICAgICAgICAgICAgICAgIFwiMS4zLjBcIixcclxuICAgICAgICAgICAgZmVlQW1vdW50OiBuZXcgQXNzZXQoe2Ftb3VudDogMH0pLFxyXG4gICAgICAgICAgICBmZWVTdGF0dXM6IHt9LFxyXG4gICAgICAgICAgICBtYXhBbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBudW1fb2ZfcGVyaW9kczogXCJcIixcclxuICAgICAgICAgICAgcGVyaW9kOiB7YW1vdW50OiBcIlwiLCB0eXBlOiB7c2Vjb25kczogNjA0ODAwLCBuYW1lOiBcIldlZWtcIn19LFxyXG4gICAgICAgICAgICBwZXJpb2Rfc3RhcnRfdGltZTogbW9tZW50KCkuYWRkKFwic2Vjb25kc1wiLCAxMjApLFxyXG4gICAgICAgICAgICBwZXJtaXNzaW9uSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvcjogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcclxuICAgICAgICAgICAgdG9fYWNjb3VudCxcclxuICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgYXNzZXRfaWQsXHJcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZCxcclxuICAgICAgICAgICAgcGVyaW9kLFxyXG4gICAgICAgICAgICBudW1fb2ZfcGVyaW9kcyxcclxuICAgICAgICAgICAgcGVyaW9kX3N0YXJ0X3RpbWUsXHJcbiAgICAgICAgICAgIHBlcm1pc3Npb25JZFxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgb3BlcmF0aW9uOiB7dHlwZTogb3BlcmF0aW9uVHlwZX1cclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKG9wZXJhdGlvblR5cGUgPT09IFwiY3JlYXRlXCIpIHtcclxuICAgICAgICAgICAgQXBwbGljYXRpb25BcGkuY3JlYXRlV2l0aGRyYXdQZXJtaXNzaW9uKFxyXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgdG9fYWNjb3VudCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgdXRpbHMuY29udmVydF90eXBlZF90b19zYXRvc2hpKGFtb3VudCwgYXNzZXQpLFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kLnR5cGUuc2Vjb25kcyAqIE51bWJlcihwZXJpb2QuYW1vdW50KSxcclxuICAgICAgICAgICAgICAgIG51bV9vZl9wZXJpb2RzLFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kX3N0YXJ0X3RpbWUudmFsdWVPZigpLFxyXG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X2lkXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiB2aXN1YWxpemUgZXJyb3Igc29tZXdoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb25UeXBlID09PSBcInVwZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uQXBpLnVwZGF0ZVdpdGhkcmF3UGVybWlzc2lvbihcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25JZCxcclxuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudCxcclxuICAgICAgICAgICAgICAgIHRvX2FjY291bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZCxcclxuICAgICAgICAgICAgICAgIHV0aWxzLmNvbnZlcnRfdHlwZWRfdG9fc2F0b3NoaShhbW91bnQsIGFzc2V0KSxcclxuICAgICAgICAgICAgICAgIHBlcmlvZC50eXBlLnNlY29uZHMgKiBOdW1iZXIocGVyaW9kLmFtb3VudCksXHJcbiAgICAgICAgICAgICAgICBudW1fb2ZfcGVyaW9kcyxcclxuICAgICAgICAgICAgICAgIHBlcmlvZF9zdGFydF90aW1lLnZhbHVlT2YoKSxcclxuICAgICAgICAgICAgICAgIGZlZV9hc3NldF9pZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogdmlzdWFsaXplIGVycm9yIHNvbWV3aGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBjb25zdCB7b3BlcmF0aW9uLCBjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY3VycmVudEFjY291bnQgIT09IHByZXZQcm9wcy5jdXJyZW50QWNjb3VudCB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZyb21fYWNjb3VudCA9PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBDaGFpblN0b3JlLmdldEFjY291bnQoY3VycmVudEFjY291bnQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIG9wZXJhdGlvblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgb3BlcmF0aW9uICYmXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbi50eXBlID09PSBcInVwZGF0ZVwiICYmXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmlkICE9PSBwcmV2U3RhdGUucGVybWlzc2lvbklkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvQWNjb3VudCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLmF1dGhvcml6ZWRfYWNjb3VudFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRvQWNjb3VudCAmJiB0b0FjY291bnQuZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lU3RhcnQgPSBtb21lbnRcclxuICAgICAgICAgICAgICAgICAgICAudXRjKG9wZXJhdGlvbi5wYXlsb2FkLnBlcmlvZF9zdGFydF90aW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZU9mKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lRW5kID0gbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLnV0YyhvcGVyYXRpb24ucGF5bG9hZC5leHBpcmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZU9mKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJPZlBlcmlvZHMgPVxyXG4gICAgICAgICAgICAgICAgICAgICh0aW1lRW5kIC0gdGltZVN0YXJ0KSAvXHJcbiAgICAgICAgICAgICAgICAgICAgKG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3YWxfcGVyaW9kX3NlYyAqIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmlvZFR5cGVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHtzZWNvbmRzOiA2MDQ4MDAsIG5hbWU6IFwiV2Vla1wifSxcclxuICAgICAgICAgICAgICAgICAgICB7c2Vjb25kczogODY0MDAsIG5hbWU6IFwiRGF5XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWNvbmRzOiAzNjAwLCBuYW1lOiBcIkhvdXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge3NlY29uZHM6IDYwLCBuYW1lOiBcIk1pbnV0ZVwifVxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGVyaW9kU2VjcywgcGVyaW9kTmFtZSwgcGVyaW9kQW1vdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyaW9kVHlwZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbi5wYXlsb2FkLndpdGhkcmF3YWxfcGVyaW9kX3NlYyA+PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RUeXBlc1tpXS5zZWNvbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGVyaW9kID0gcGVyaW9kVHlwZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2ROYW1lID0gY3VycmVudFBlcmlvZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RTZWNzID0gY3VycmVudFBlcmlvZC5zZWNvbmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RBbW91bnQgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQud2l0aGRyYXdhbF9wZXJpb2Rfc2VjIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGVyaW9kLnNlY29uZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX2xpbWl0LmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9fYWNjb3VudDogdG9BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvX25hbWU6IHRvQWNjb3VudC5nZXQoXCJuYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uSWQ6IG9wZXJhdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXRpbHMuY29udmVydF9zYXRvc2hpX3RvX3R5cGVkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX2xpbWl0LmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBvcGVyYXRpb24ucGF5bG9hZC53aXRoZHJhd2FsX2xpbWl0LmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bV9vZl9wZXJpb2RzOiBudW1iZXJPZlBlcmlvZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyaW9kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogcGVyaW9kQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBwZXJpb2RTZWNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcGVyaW9kTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwZXJpb2Rfc3RhcnRfdGltZTogbW9tZW50LnV0YyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQucGVyaW9kX3N0YXJ0X3RpbWVcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tCYWxhbmNlKCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnQsIGFtb3VudCwgZnJvbV9hY2NvdW50LCBhc3NldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmICghYXNzZXQgfHwgIWZyb21fYWNjb3VudCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VJRCA9IGZyb21fYWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBhc3NldC5nZXQoXCJpZFwiKV0pO1xyXG4gICAgICAgIGNvbnN0IGZlZUJhbGFuY2VJRCA9IGZyb21fYWNjb3VudC5nZXRJbihbXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZXNcIixcclxuICAgICAgICAgICAgZmVlQW1vdW50LmFzc2V0X2lkXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgaWYgKCFhc3NldCB8fCAhZnJvbV9hY2NvdW50KSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFiYWxhbmNlSUQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6IHRydWV9KTtcclxuICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2VJRCk7XHJcbiAgICAgICAgbGV0IGZlZUJhbGFuY2VPYmplY3QgPSBmZWVCYWxhbmNlSURcclxuICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldE9iamVjdChmZWVCYWxhbmNlSUQpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBpZiAoIWZlZUJhbGFuY2VPYmplY3QgfHwgZmVlQmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZV9hc3NldF9pZDogdGhpcy5zdGF0ZS5mZWVfYXNzZXRfaWR9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFiYWxhbmNlT2JqZWN0IHx8ICFmZWVBbW91bnQpIHJldHVybjtcclxuICAgICAgICBpZiAoIWFtb3VudCkgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogZmFsc2V9KTtcclxuICAgICAgICBjb25zdCBoYXNCYWxhbmNlID0gY2hlY2tCYWxhbmNlKFxyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIGFzc2V0LFxyXG4gICAgICAgICAgICBmZWVBbW91bnQsXHJcbiAgICAgICAgICAgIGJhbGFuY2VPYmplY3RcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChoYXNCYWxhbmNlID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiAhaGFzQmFsYW5jZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRUb3RhbChhc3NldF9pZCwgYmFsYW5jZV9pZCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2VfaWQpO1xyXG4gICAgICAgIGxldCB0cmFuc2ZlckFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYXNzZXRfaWQpO1xyXG5cclxuICAgICAgICBsZXQgYmFsYW5jZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFtb3VudDogYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdHJhbnNmZXJBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0cmFuc2ZlckFzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoZmVlQW1vdW50LmFzc2V0X2lkID09PSBiYWxhbmNlLmFzc2V0X2lkKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlLm1pbnVzKGZlZUFtb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHttYXhBbW91bnQ6IHRydWUsIGFtb3VudDogYmFsYW5jZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KX0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcclxuICAgICAgICBjb25zdCB7ZnJvbV9hY2NvdW50fSA9IHN0YXRlO1xyXG4gICAgICAgIGxldCBhc3NldF90eXBlcyA9IFtdLFxyXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBbXTtcclxuICAgICAgICBpZiAoIShmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge2Fzc2V0X3R5cGVzLCBmZWVfYXNzZXRfdHlwZXN9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XHJcbiAgICAgICAgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XHJcbiAgICAgICAgZmVlX2Fzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYWNjb3VudF9iYWxhbmNlc1trZXldKTtcclxuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5zcGxpY2UoYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5zcGxpY2UoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHthc3NldF90eXBlcywgZmVlX2Fzc2V0X3R5cGVzfTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvQWNjb3VudENoYW5nZWQgPSB0b19hY2NvdW50ID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19hY2NvdW50LCBlcnJvcjogbnVsbH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkFtb3VudENoYW5nZWQgPSAoe2Ftb3VudCwgYXNzZXR9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFhc3NldCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWF4QW1vdW50OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICB0b0NoYW5nZWQgPSB0b19uYW1lID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19uYW1lLCBlcnJvcjogbnVsbH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkZlZUNoYW5nZWQoYXNzZXQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmZWVfYXNzZXRfaWQ6IGFzc2V0LmFzc2V0X2lkLCBlcnJvcjogbnVsbH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVHJ4SW5jbHVkZWQoY29uZmlybV9zdG9yZV9zdGF0ZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5pbmNsdWRlZCAmJlxyXG4gICAgICAgICAgICBjb25maXJtX3N0b3JlX3N0YXRlLmJyb2FkY2FzdGVkX3RyYW5zYWN0aW9uXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnVubGlzdGVuKHRoaXMub25UcnhJbmNsdWRlZCk7XHJcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnJlc2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb25maXJtX3N0b3JlX3N0YXRlLmNsb3NlZCkge1xyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS51bmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk51bU9mUGVyaW9kc0NoYW5nZWQgPSBlID0+IHtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgIGlmICghaXNOYU4obmV3VmFsdWUpICYmIHR5cGVvZiBuZXdWYWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBuZXdWYWx1ZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe251bV9vZl9wZXJpb2RzOiBuZXdWYWx1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgb25QZXJpb2RDaGFuZ2VkID0gKHthbW91bnQsIHR5cGV9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGVyaW9kOiB7YW1vdW50LCB0eXBlfX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkRhdGVwaWNrZXJSZWYoZWwpIHtcclxuICAgICAgICBpZiAoZWwgJiYgZWwucGlja2VyLmlucHV0KSB7XHJcbiAgICAgICAgICAgIGVsLnBpY2tlci5pbnB1dC5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN0YXJ0RGF0ZUNoYW5nZWQgPSB1dGNWYWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHV0Y1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BlcmlvZF9zdGFydF90aW1lOiB1dGNWYWx1ZX0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BlcmlvZF9zdGFydF90aW1lOiBudWxsfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxyXG4gICAgICAgICAgICB0b19hY2NvdW50LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgYXNzZXRfaWQsXHJcbiAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgdG9fbmFtZSxcclxuICAgICAgICAgICAgZmVlX2Fzc2V0X2lkLFxyXG4gICAgICAgICAgICBiYWxhbmNlRXJyb3IsXHJcbiAgICAgICAgICAgIG51bV9vZl9wZXJpb2RzLFxyXG4gICAgICAgICAgICBwZXJpb2QsXHJcbiAgICAgICAgICAgIHBlcmlvZF9zdGFydF90aW1lXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHtvcGVyYXRpb259ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHthc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcclxuXHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBFc3RpbWF0ZSBmZWVcclxuICAgICAgICBsZXQgZmVlID0gdGhpcy5zdGF0ZS5mZWVBbW91bnQuZ2V0QW1vdW50KHtyZWFsOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIGlmIChmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcclxuICAgICAgICAgICAgbGV0IF9lcnJvciA9IHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yID8gXCJoYXMtZXJyb3JcIiA6IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYXNzZXRfdHlwZXNbMF0pO1xyXG4gICAgICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSBhc3NldCA/IGFzc2V0LmdldChcImlkXCIpIDogYXNzZXRfdHlwZXNbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZmVlSUQgPSBmZWVfYXNzZXRfaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFRvdGFsLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2Fzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUlEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmVlSUQgPT0gY3VycmVudF9hc3NldF9pZCAmJiB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2VfZmVlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17X2Vycm9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e19lcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GdW5kc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZV9mZWUgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17X2Vycm9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0Z1bmRzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChcclxuICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoYW1vdW50LCAvLC9nLCBcIlwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgaXNBbW91bnRWYWxpZCA9IGFtb3VudFZhbHVlICYmICFpc05hTihhbW91bnRWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XHJcbiAgICAgICAgICAgICFmcm9tX2FjY291bnQgfHxcclxuICAgICAgICAgICAgIXRvX2FjY291bnQgfHxcclxuICAgICAgICAgICAgIWlzQW1vdW50VmFsaWQgfHxcclxuICAgICAgICAgICAgIWFzc2V0IHx8XHJcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvciB8fFxyXG4gICAgICAgICAgICBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIikgPT0gdG9fYWNjb3VudC5nZXQoXCJpZFwiKSB8fFxyXG4gICAgICAgICAgICAhcGVyaW9kLmFtb3VudCB8fFxyXG4gICAgICAgICAgICAhbnVtX29mX3BlcmlvZHMgfHxcclxuICAgICAgICAgICAgIXBlcmlvZF9zdGFydF90aW1lO1xyXG5cclxuICAgICAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpcmVjdERlYml0TW9kYWwucmVuZGVyXCIsIGZyb21fYWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGUgPT09IFwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jcmVhdGVfbmV3X21hbmRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC51cGRhdGVfbWFuZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy5pc01vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkID8gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3BlcmF0aW9uICYmIG9wZXJhdGlvbi50eXBlID09PSBcImNyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC51cGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT1cIkNhbmNlbFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmNhbmNlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCIgbGF5b3V0PVwidmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBVVRIT1JJWkVEIEFDQ09VTlQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC50b29sdGlwLmF1dGhvcml6ZWRfYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmF1dGhvcml6ZWRfYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RvX2FjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b0NoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Ub0FjY291bnRDaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LnRvb2x0aXAubGltaXRfcGVyX3BlcmlvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayB0cmFuc2Zlci1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgTElNSVQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5saW1pdF9wZXJfcGVyaW9kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQW1vdW50Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXQuZ2V0KFwiaWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF90eXBlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17YXNzZXRfdHlwZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOYU49e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC50b29sdGlwLnBlcmlvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayB0cmFuc2Zlci1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgUEVSSU9EICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyaW9kU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LnBlcmlvZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e3BlcmlvZC5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXM9e1tcIk1pbnV0ZVwiLCBcIkhvdXJcIiwgXCJEYXlcIiwgXCJXZWVrXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pbnV0ZToge3NlY29uZHM6IDYwLCBuYW1lOiBcIk1pbnV0ZVwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvdXI6IHtzZWNvbmRzOiA2MCAqIDYwLCBuYW1lOiBcIkhvdXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiA2MCAqIDYwICogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlZWs6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiA2MCAqIDYwICogMjQgKiA3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiV2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmlvZFR5cGU9e3BlcmlvZC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblBlcmlvZENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC50b29sdGlwLm51bV9vZl9wZXJpb2RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICBOVU1CRUVSIE9GIFBFUklPRFMgICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQubnVtX29mX3BlcmlvZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtX29mX3BlcmlvZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTnVtT2ZQZXJpb2RzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIFNUQVJUIERBVEUgICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5kaXJlY3RfZGViaXQuc3RhcnRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC50b29sdGlwLnN0YXJ0X3RpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlcmlvZF9zdGFydF90aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9kYXk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU3RhcnREYXRlQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItd2lkdGgxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4gdGhpcy5vbkRhdGVwaWNrZXJSZWYoZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZERhdGU9e2N1cnJlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPCBtb21lbnQoKS5hZGQoMiwgXCJtaW51dGVzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLW1hcmdpbiBuby1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICBGIEUgRSAgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnR5cGUgPT09IFwidXBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIndpdGhkcmF3X3Blcm1pc3Npb25fdXBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIndpdGhkcmF3X3Blcm1pc3Npb25fY3JlYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBEaXJlY3REZWJpdE1vZGFsLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZSwgU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3N5bWJvbDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcclxuICAgICAgICAgICAgICAgICAgICBcImZlZV9hc3NldFwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlLCBrZXl9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JTdHlsZUd1aWRlXCI7XHJcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUgZnJvbSBcInN0b3Jlcy9UcmFuc2FjdGlvbkNvbmZpcm1TdG9yZVwiO1xyXG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IHtpc05hTn0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQge2NoZWNrQmFsYW5jZX0gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcclxuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBDb3B5QnV0dG9uIGZyb20gXCIuLi9VdGlsaXR5L0NvcHlCdXR0b25cIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgRm9ybSxcclxuICAgIE1vZGFsLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgU2VsZWN0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBEYXRlUGlja2VyLFxyXG4gICAgVG9vbHRpcCxcclxuICAgIFJhZGlvXHJcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IEh0bGNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0h0bGNBY3Rpb25zXCI7XHJcbmltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy9jb21wb25lbnRzL19odGxjLnNjc3NcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7aGFzTG9hZGVkfSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DdXJyZW50QWNjb3VudFwiO1xyXG5pbXBvcnQgRmVlQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9GZWVBc3NldFNlbGVjdG9yXCI7XHJcblxyXG5jb25zdCBnZXRVbmluaXRpYWxpemVkRmVlQW1vdW50ID0gKCkgPT5cclxuICAgIG5ldyBBc3NldCh7YW1vdW50OiAwLCBhc3NldF9pZDogXCIxLjMuMFwifSk7XHJcblxyXG5jbGFzcyBQcmVpbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHByZWltYWdlX2hhc2g6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcHJlaW1hZ2Vfc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBwcmVpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBwcmVpbWFnZV9jaXBoZXI6IFByb3BUeXBlcy5zdHJpbmdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5oYXNSYW5kb21IYXNoID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YWdlOiAxLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGNpcGhlcnM6IFtcInNoYTI1NlwiLCBcInJpcGVtZDE2MFwiXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnByZWltYWdlX2hhc2ggJiYgIXRoaXMuaGFzUmFuZG9tSGFzaCkge1xyXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlcmUgaXMgYWx3YXlzIGEgaGFzaCBpZiBubyBoYXNoIGdpdmVuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVSYW5kb20oe3RhcmdldDoge319KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBwcmV2UHJvcHMucHJlaW1hZ2VfaGFzaCAhPT0gdGhpcy5wcm9wcy5wcmVpbWFnZV9oYXNoICYmXHJcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnByZWltYWdlX2hhc2hcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNSYW5kb21IYXNoID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5wcmVpbWFnZV9oYXNoICYmICF0aGlzLmhhc1JhbmRvbUhhc2gpIHtcclxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlIGlzIGFsd2F5cyBhIGhhc2ggaWYgbm8gaGFzaCBnaXZlblxyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlUmFuZG9tKHt0YXJnZXQ6IHt9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZSkge1xyXG4gICAgICAgIGxldCByZWRvID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3RhZ2UgIT09IGUudGFyZ2V0LnZhbHVlICYmIGUudGFyZ2V0LnZhbHVlID09IDEpIHtcclxuICAgICAgICAgICAgcmVkbyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0YWdlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiAocmVkbyA/IHRoaXMuZ2VuZXJhdGVSYW5kb20oKSA6IG51bGwpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNpemVDaGFuZ2VkKGUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQWN0aW9uKHtcclxuICAgICAgICAgICAgcHJlaW1hZ2Vfc2l6ZTogIWUudGFyZ2V0LnZhbHVlID8gbnVsbCA6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGFzaENoYW5nZWQoZSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24oe1xyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXRDaGFuZ2VkKGUpIHtcclxuICAgICAgICBsZXQge3ByZWltYWdlLCBwcmVpbWFnZV9jaXBoZXJ9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoIXByZWltYWdlX2NpcGhlcikge1xyXG4gICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXIgPSBcInNoYTI1NlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgICAgICAgcHJlaW1hZ2UgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5oYXNoaW5nSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByZWltYWdlX2NpcGhlciA9IGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnN0YWdlID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXI6IHByZWltYWdlX2NpcGhlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB7aGFzaH0gPSBIdGxjQWN0aW9ucy5jYWxjdWxhdGVIYXNoKHByZWltYWdlLCBwcmVpbWFnZV9jaXBoZXIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlICE9PSBcImNyZWF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB1c2VyIHRyaWVzIHRvIG1hdGNoIGhhc2hcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25BY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlX2NpcGhlcjogcHJlaW1hZ2VfY2lwaGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWltYWdlX3NpemU6IHByZWltYWdlLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQ6IGhhc2hcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2VfY2lwaGVyOiBwcmVpbWFnZV9jaXBoZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaDogaGFzaCxcclxuICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplOiBwcmVpbWFnZS5sZW5ndGhcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlUmFuZG9tKGUgPSB7dGFyZ2V0OiB7fX0pIHtcclxuICAgICAgICB0aGlzLmhhc1JhbmRvbUhhc2ggPSB0cnVlO1xyXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0ga2V5XHJcbiAgICAgICAgICAgIC5nZXRfcmFuZG9tX2tleSgpXHJcbiAgICAgICAgICAgIC50b1dpZigpXHJcbiAgICAgICAgICAgIC5zdWJzdHIoMTAsIDMwKTtcclxuICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2VkKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgbGFiZWwgPSAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5sYWJlbCl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50eXBlID09IFwiY3JlYXRlXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DbGljay5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjdweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIyNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzaG93Y2FzZXMuaHRsYy5maXJzdF9zdGFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzaG93Y2FzZXMuaHRsYy5zZWNvbmRfc3RhZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2hvd2Nhc2VzLmh0bGMuY3VzdG9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIHJlZGVlbXMsIGluZGljYXRlIGlmIGl0IG1hdGNoZXNcclxuICAgICAgICBsZXQgaGFzaE1hdGNoID1cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy50eXBlICE9PSBcImNyZWF0ZVwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUucHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkID09XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlaW1hZ2VfaGFzaFxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPXtsYWJlbH0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLnByZWltYWdlX2hhc19iZWVuX2NyZWF0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuR3JvdXAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayB0cmFuc2Zlci1pbnB1dCBwcmVpbWFnZS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50eXBlICE9PSBcImNyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNob3djYXNlcy5odGxjLnRvb2x0aXAuZW50ZXJfcHJlaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaG93Y2FzZXMuaHRsYy50b29sdGlwLnByZWltYWdlX3JhbmRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjYwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoTWF0Y2ggPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaGFzaE1hdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJlaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmVpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhZ2UgPT0gMiA/IFwiXCIgOiB0aGlzLnByb3BzLnByZWltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGFzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2hvd2Nhc2VzLmh0bGMuZW50ZXJfc2VjcmV0X3ByZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNob3djYXNlcy5odGxjLnByZWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50eXBlICE9PSBcImNyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnN0YWdlID09IDEgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0YWdlID09IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25MYWJlbFByb3A9e1widmFsdWVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxOS41JVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMucHJlaW1hZ2VfY2lwaGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2lwaGVycy5tYXAoY2lwaGVyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17Y2lwaGVyfSB2YWx1ZT17Y2lwaGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2lwaGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuaHRsYy50b29sdGlwLm5ld19yYW5kb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJkZXBsb3ltZW50LXVuaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiBcInRvcFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVSYW5kb20uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWltYWdlOiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVpbWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgaGFzaCB0eXBlOiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVpbWFnZV9jaXBoZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXQuR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0Lkdyb3VwIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXQgcHJlaW1hZ2Utcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMudG9vbHRpcC5wcmVpbWFnZV9oYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiNzglXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJoYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSGFzaENoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnByZWltYWdlX2hhc2ggfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuaHRsYy5oYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5zdGFnZSA9PSAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuaHRsYy50b29sdGlwLnByZWltYWdlX3NpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCI1M3B4XCIsIG1hcmdpblJpZ2h0OiBcIjAuMnJlbVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNpemVDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5wcmVpbWFnZV9zaXplIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuc2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3RhZ2UgPT0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQbGFjZT1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhc2g6IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByZWltYWdlX2hhc2ggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHByZWltYWdlIHNpemU6IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByZWltYWdlX3NpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXQuR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgSHRsY01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgaXNNb2RhbFZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaGlkZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGZyb21BY2NvdW50OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb3BlcmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0IC8vIG9wdGlvbmFsLCBvbmx5IHdoZW4gZWRpdGluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUocHJvcHMpO1xyXG4gICAgICAgIHRoaXMub25UcnhJbmNsdWRlZCA9IHRoaXMub25UcnhJbmNsdWRlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZSA9IHRoaXMuX2NoZWNrQmFsYW5jZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBub3cgPSBtb21lbnQoKS5hZGQoXCJzZWNvbmRzXCIsIDEyMCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZnJvbV9uYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICB0b19uYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBmcm9tX2FjY291bnQ6IG51bGwsXHJcbiAgICAgICAgICAgIHRvX2FjY291bnQ6IG51bGwsXHJcbiAgICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGFzc2V0OiBudWxsLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgZmVlQW1vdW50OiBnZXRVbmluaXRpYWxpemVkRmVlQW1vdW50KCksXHJcbiAgICAgICAgICAgIG1heEFtb3VudDogZmFsc2UsXHJcbiAgICAgICAgICAgIG51bV9vZl9wZXJpb2RzOiBcIlwiLFxyXG4gICAgICAgICAgICBwZXJpb2Rfc3RhcnRfdGltZTogbm93LFxyXG4gICAgICAgICAgICBodGxjSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHByZWltYWdlOiBudWxsLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXI6IG51bGwsXHJcbiAgICAgICAgICAgIHByZWltYWdlX2hhc2g6IG51bGwsXHJcbiAgICAgICAgICAgIHByZWltYWdlX3NpemU6IG51bGwsXHJcbiAgICAgICAgICAgIGNsYWltX3BlcmlvZDogODY0MDAsXHJcbiAgICAgICAgICAgIHBlcmlvZDogXCJvbmVfZGF5XCIsXHJcbiAgICAgICAgICAgIGV4cGlyYXRpb25EYXRlOiBtb21lbnQoKVxyXG4gICAgICAgICAgICAgICAgLmFkZChcInNlY29uZHNcIiwgMTgwKVxyXG4gICAgICAgICAgICAgICAgLmFkZCgxLCBcImRheVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxyXG4gICAgICAgICAgICB0b19hY2NvdW50LFxyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIGFzc2V0LFxyXG4gICAgICAgICAgICBhc3NldF9pZCxcclxuICAgICAgICAgICAgcHJlaW1hZ2UsXHJcbiAgICAgICAgICAgIHByZWltYWdlX3NpemUsXHJcbiAgICAgICAgICAgIHByZWltYWdlX2hhc2gsXHJcbiAgICAgICAgICAgIHByZWltYWdlX2NpcGhlcixcclxuICAgICAgICAgICAgY2xhaW1fcGVyaW9kLFxyXG4gICAgICAgICAgICBmZWVBbW91bnRcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbjoge3R5cGU6IG9wZXJhdGlvblR5cGV9XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmIChvcGVyYXRpb25UeXBlID09PSBcImNyZWF0ZVwiKSB7XHJcbiAgICAgICAgICAgIEh0bGNBY3Rpb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnRfaWQ6IGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHRvX2FjY291bnRfaWQ6IHRvX2FjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdXRpbHMuY29udmVydF90eXBlZF90b19zYXRvc2hpKGFtb3VudCwgYXNzZXQpLFxyXG4gICAgICAgICAgICAgICAgbG9ja190aW1lOiBjbGFpbV9wZXJpb2QsXHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZSxcclxuICAgICAgICAgICAgICAgIHByZWltYWdlX3NpemUsXHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZV9oYXNoLFxyXG4gICAgICAgICAgICAgICAgcHJlaW1hZ2VfY2lwaGVyLFxyXG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0OiBmZWVBbW91bnQuYXNzZXRfaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiB2aXN1YWxpemUgZXJyb3Igc29tZXdoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb25UeXBlID09PSBcInJlZGVlbVwiKSB7XHJcbiAgICAgICAgICAgIEh0bGNBY3Rpb25zLnJlZGVlbSh7XHJcbiAgICAgICAgICAgICAgICBodGxjX2lkOiB0aGlzLnByb3BzLm9wZXJhdGlvbi5wYXlsb2FkLmlkLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdG9fYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHByZWltYWdlOiBwcmVpbWFnZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IHZpc3VhbGl6ZSBlcnJvciBzb21ld2hlcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvblR5cGUgPT09IFwiZXh0ZW5kXCIpIHtcclxuICAgICAgICAgICAgSHRsY0FjdGlvbnMuZXh0ZW5kKHtcclxuICAgICAgICAgICAgICAgIGh0bGNfaWQ6IHRoaXMucHJvcHMub3BlcmF0aW9uLnBheWxvYWQuaWQsXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRzX3RvX2FkZDogY2xhaW1fcGVyaW9kXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogdmlzdWFsaXplIGVycm9yIHNvbWV3aGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5mcm9tQWNjb3VudCAmJiAhaGFzTG9hZGVkKG5leHRQcm9wcy5mcm9tQWNjb3VudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfc3luY09wZXJhdGlvbihvcGVyYXRpb24pIHtcclxuICAgICAgICBpZiAob3BlcmF0aW9uICYmIG9wZXJhdGlvbi5wYXlsb2FkICYmIG9wZXJhdGlvbi50eXBlICE9PSBcImNyZWF0ZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvID0gb3BlcmF0aW9uLnBheWxvYWQudHJhbnNmZXIudG87XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb20gPSBvcGVyYXRpb24ucGF5bG9hZC50cmFuc2Zlci5mcm9tO1xyXG4gICAgICAgICAgICBjb25zdCBhbW91bnQgPSB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IG9wZXJhdGlvbi5wYXlsb2FkLnRyYW5zZmVyLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBvcGVyYXRpb24ucGF5bG9hZC50cmFuc2Zlci5hc3NldF9pZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBleHBpcmF0aW9uID0gbmV3IERhdGUoXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC5jb25kaXRpb25zLnRpbWVfbG9jay5leHBpcmF0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvQWNjb3VudCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudCh0byk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb21BY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGZyb20pO1xyXG4gICAgICAgICAgICBpZiAodG9BY2NvdW50ICYmIGZyb21BY2NvdW50ICYmIHRvQWNjb3VudC5nZXQgJiYgZnJvbUFjY291bnQuZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYW1vdW50LmFzc2V0X2lkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0b19hY2NvdW50OiB0b0FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9fbmFtZTogdG9BY2NvdW50LmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBmcm9tQWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tX25hbWU6IGZyb21BY2NvdW50LmdldChcIm5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHV0aWxzLmNvbnZlcnRfc2F0b3NoaV90b190eXBlZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50LmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhbW91bnQuYXNzZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyaW9kX3N0YXJ0X3RpbWU6IGV4cGlyYXRpb24sIC8vIG5vIHNlbGVjdGlvbiBmb3IgdGhhdFxyXG4gICAgICAgICAgICAgICAgICAgIGh0bGNJZDogb3BlcmF0aW9uLnBheWxvYWQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQuY29uZGl0aW9ucy5oYXNoX2xvY2sucHJlaW1hZ2VfaGFzaFsxXSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC5jb25kaXRpb25zLmhhc2hfbG9jay5wcmVpbWFnZV9oYXNoWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyYXRpb25EYXRlOiBtb21lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubWFrZUlTT0RhdGVTdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQuY29uZGl0aW9ucy50aW1lX2xvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4cGlyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyaW9kOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bGNJZDogb3BlcmF0aW9uLnBheWxvYWQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQuY29uZGl0aW9ucy5oYXNoX2xvY2sucHJlaW1hZ2VfaGFzaFsxXSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24ucGF5bG9hZC5jb25kaXRpb25zLmhhc2hfbG9jay5wcmVpbWFnZV9oYXNoWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyYXRpb25EYXRlOiBtb21lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMubWFrZUlTT0RhdGVTdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQuY29uZGl0aW9ucy50aW1lX2xvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4cGlyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyaW9kOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGVuc3VyZSBpdCdzIGFsd2F5cyBpbi1zeW5jXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaHRsY0lkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByZWltYWdlX3NpemU6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX3N5bmNPcGVyYXRpb24odGhpcy5wcm9wcy5vcGVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHtvcGVyYXRpb259ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZnJvbUFjY291bnQgIT09IHByZXZQcm9wcy5mcm9tQWNjb3VudCB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZyb21fYWNjb3VudCA9PSBudWxsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIHJlZmVzaCBiYWxhbmNlcyBhbmQgZmVlXHJcbiAgICAgICAgICAgIC8vIHdyaXRlIHByb3BzIHRvIHN0YXRlXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiB0aGlzLnByb3BzLmZyb21BY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgZnJvbV9uYW1lOiB0aGlzLnByb3BzLmZyb21BY2NvdW50LmdldChcIm5hbWVcIilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmV2UHJvcHMub3BlcmF0aW9uICE9PSB0aGlzLnByb3BzLm9wZXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9zeW5jT3BlcmF0aW9uKG9wZXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0JhbGFuY2UoKSB7XHJcbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudCwgYW1vdW50LCBmcm9tX2FjY291bnQsIGFzc2V0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKCFhc3NldCB8fCAhZnJvbV9hY2NvdW50KSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgYmFsYW5jZUlEID0gZnJvbV9hY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGFzc2V0LmdldChcImlkXCIpXSk7XHJcbiAgICAgICAgY29uc3QgZmVlQmFsYW5jZUlEID0gZnJvbV9hY2NvdW50LmdldEluKFtcclxuICAgICAgICAgICAgXCJiYWxhbmNlc1wiLFxyXG4gICAgICAgICAgICBmZWVBbW91bnQuYXNzZXRfaWRcclxuICAgICAgICBdKTtcclxuICAgICAgICBpZiAoIWFzc2V0IHx8ICFmcm9tX2FjY291bnQpIHJldHVybjtcclxuICAgICAgICBpZiAoIWJhbGFuY2VJRCkgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogdHJ1ZX0pO1xyXG4gICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYmFsYW5jZUlEKTtcclxuICAgICAgICBsZXQgZmVlQmFsYW5jZU9iamVjdCA9IGZlZUJhbGFuY2VJRFxyXG4gICAgICAgICAgICA/IENoYWluU3RvcmUuZ2V0T2JqZWN0KGZlZUJhbGFuY2VJRClcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGlmICghZmVlQmFsYW5jZU9iamVjdCB8fCBmZWVCYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmVlQW1vdW50OiBnZXRVbmluaXRpYWxpemVkRmVlQW1vdW50KCl9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFiYWxhbmNlT2JqZWN0IHx8ICFmZWVBbW91bnQpIHJldHVybjtcclxuICAgICAgICBpZiAoIWFtb3VudCkgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogZmFsc2V9KTtcclxuICAgICAgICBjb25zdCBoYXNCYWxhbmNlID0gY2hlY2tCYWxhbmNlKFxyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIGFzc2V0LFxyXG4gICAgICAgICAgICBmZWVBbW91bnQsXHJcbiAgICAgICAgICAgIGJhbGFuY2VPYmplY3RcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChoYXNCYWxhbmNlID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFsYW5jZUVycm9yOiAhaGFzQmFsYW5jZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRUb3RhbChhc3NldF9pZCwgYmFsYW5jZV9pZCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2VfaWQpO1xyXG4gICAgICAgIGxldCB0cmFuc2ZlckFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYXNzZXRfaWQpO1xyXG5cclxuICAgICAgICBsZXQgYmFsYW5jZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFtb3VudDogYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdHJhbnNmZXJBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0cmFuc2ZlckFzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoZmVlQW1vdW50LmFzc2V0X2lkID09PSBiYWxhbmNlLmFzc2V0X2lkKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlLm1pbnVzKGZlZUFtb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHttYXhBbW91bnQ6IHRydWUsIGFtb3VudDogYmFsYW5jZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KX0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcclxuICAgICAgICBjb25zdCB7ZnJvbV9hY2NvdW50LCBmcm9tX2Vycm9yfSA9IHN0YXRlO1xyXG4gICAgICAgIGxldCBhc3NldF90eXBlcyA9IFtdO1xyXG4gICAgICAgIGlmICghKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikgJiYgIWZyb21fZXJyb3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7YXNzZXRfdHlwZXN9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XHJcbiAgICAgICAgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFjY291bnRfYmFsYW5jZXMpIHtcclxuICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChhY2NvdW50X2JhbGFuY2VzW2tleV0pO1xyXG4gICAgICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCAmJiBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X3R5cGVzLnNwbGljZShhc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7YXNzZXRfdHlwZXN9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9BY2NvdW50Q2hhbmdlZCA9IHRvX2FjY291bnQgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2FjY291bnQsIGVycm9yOiBudWxsfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uQW1vdW50Q2hhbmdlZCA9ICh7YW1vdW50LCBhc3NldH0pID0+IHtcclxuICAgICAgICBpZiAoIWFzc2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgYXNzZXQgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFzc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFzc2V0LFxyXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtYXhBbW91bnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQmFsYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRvQ2hhbmdlZCA9IHRvX25hbWUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX25hbWUsIGVycm9yOiBudWxsfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uRmVlQ2hhbmdlZChmZWUpIHtcclxuICAgICAgICBpZiAoIWZlZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZlZUFtb3VudDogZmVlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRyeEluY2x1ZGVkKGNvbmZpcm1fc3RvcmVfc3RhdGUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGNvbmZpcm1fc3RvcmVfc3RhdGUuaW5jbHVkZWQgJiZcclxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5icm9hZGNhc3RlZF90cmFuc2FjdGlvblxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS51bmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xyXG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS5yZXNldCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlybV9zdG9yZV9zdGF0ZS5jbG9zZWQpIHtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUudW5saXN0ZW4odGhpcy5vblRyeEluY2x1ZGVkKTtcclxuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlcGlja2VyUmVmKGVsKSB7XHJcbiAgICAgICAgaWYgKGVsICYmIGVsLnBpY2tlci5pbnB1dCkge1xyXG4gICAgICAgICAgICBlbC5waWNrZXIuaW5wdXQucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FeHBpcmF0aW9uRGF0ZUNoYW5nZWQgPSB1dGNWYWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHV0Y1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtwZXJpb2Rfc3RhcnRfdGltZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgICBjb25zdCBleHAgPSB1dGNWYWx1ZS52YWx1ZU9mKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcGVyaW9kX3N0YXJ0X3RpbWUudmFsdWVPZigpO1xyXG4gICAgICAgICAgICBjb25zdCBjbGFpbV9wZXJpb2QgPSBNYXRoLmZsb29yKChleHAgLSBzdGFydCkgLyAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjbGFpbV9wZXJpb2QsXHJcbiAgICAgICAgICAgICAgICBwZXJpb2Q6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogdXRjVmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBjbGFpbV9wZXJpb2Q6IDAsXHJcbiAgICAgICAgICAgICAgICBwZXJpb2Q6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uRGF0ZTogbnVsbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uUHJlaW1hZ2VDaGFuZ2VkKHtcclxuICAgICAgICBwcmVpbWFnZSxcclxuICAgICAgICBwcmVpbWFnZV9jaXBoZXIsXHJcbiAgICAgICAgcHJlaW1hZ2VfaGFzaCxcclxuICAgICAgICBwcmVpbWFnZV9zaXplXHJcbiAgICB9KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlQ2hhbmdlID0ge307XHJcbiAgICAgICAgaWYgKHByZWltYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3RhdGVDaGFuZ2UucHJlaW1hZ2UgPSBwcmVpbWFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByZWltYWdlX2NpcGhlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN0YXRlQ2hhbmdlLnByZWltYWdlX2NpcGhlciA9IHByZWltYWdlX2NpcGhlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByZWltYWdlX2hhc2ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzdGF0ZUNoYW5nZS5wcmVpbWFnZV9oYXNoID0gcHJlaW1hZ2VfaGFzaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByZWltYWdlX3NpemUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzdGF0ZUNoYW5nZS5wcmVpbWFnZV9zaXplID0gcHJlaW1hZ2Vfc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGVyaW9kID0gZGF5cyA9PiB7XHJcbiAgICAgICAgbGV0IGVzdGltYXRlZEV4cGlyeSA9IG1vbWVudCgpLmFkZChkYXlzLCBcImRheVwiKTtcclxuICAgICAgICBsZXQgcGVyaW9kID0gXCJvbmVfZGF5XCI7XHJcbiAgICAgICAgY29uc3QgY2xhaW1fcGVyaW9kID0gZGF5cyAqIDYwICogNjAgKiAyNDsgLy8gY29udmVydCBkYXkgdG8gc2Vjb25kc1xyXG4gICAgICAgIHN3aXRjaCAoZGF5cykge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBwZXJpb2QgPSBcIm9uZV9kYXlcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBwZXJpb2QgPSBcInR3b19kYXlzXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgcGVyaW9kID0gXCJvbmVfd2Vla1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2xhaW1fcGVyaW9kLFxyXG4gICAgICAgICAgICBwZXJpb2QsXHJcbiAgICAgICAgICAgIGV4cGlyYXRpb25EYXRlOiBlc3RpbWF0ZWRFeHBpcnlcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGZyb21fYWNjb3VudCxcclxuICAgICAgICAgICAgdG9fYWNjb3VudCxcclxuICAgICAgICAgICAgYXNzZXQsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkLFxyXG4gICAgICAgICAgICBmZWVBbW91bnQsXHJcbiAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgZnJvbV9uYW1lLFxyXG4gICAgICAgICAgICB0b19uYW1lLFxyXG4gICAgICAgICAgICBiYWxhbmNlRXJyb3IsXHJcbiAgICAgICAgICAgIHByZWltYWdlLFxyXG4gICAgICAgICAgICBwcmVpbWFnZV9jaXBoZXIsXHJcbiAgICAgICAgICAgIGNsYWltX3BlcmlvZCxcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaCxcclxuICAgICAgICAgICAgcHJlaW1hZ2Vfc2l6ZSxcclxuICAgICAgICAgICAgcGVyaW9kX3N0YXJ0X3RpbWUsXHJcbiAgICAgICAgICAgIGV4cGlyYXRpb25EYXRlXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGZyb21fbXlfYWNjb3VudCA9XHJcbiAgICAgICAgICAgIEFjY291bnRTdG9yZS5pc015QWNjb3VudChmcm9tX2FjY291bnQpIHx8XHJcbiAgICAgICAgICAgIGZyb21fbmFtZSA9PT0gdGhpcy5wcm9wcy5wYXNzd29yZEFjY291bnQ7XHJcbiAgICAgICAgbGV0IGZyb21fZXJyb3IgPSBmcm9tX2FjY291bnQgJiYgIWZyb21fbXlfYWNjb3VudCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3Qge29wZXJhdGlvbn0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBpc0V4dGVuZCA9IG9wZXJhdGlvbiAmJiBvcGVyYXRpb24udHlwZSA9PT0gXCJleHRlbmRcIjtcclxuICAgICAgICBjb25zdCBpc1JlZGVlbSA9IG9wZXJhdGlvbiAmJiBvcGVyYXRpb24udHlwZSA9PT0gXCJyZWRlZW1cIjtcclxuXHJcbiAgICAgICAgbGV0IHthc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcclxuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpICYmICFmcm9tX2Vycm9yKSB7XHJcbiAgICAgICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcclxuICAgICAgICAgICAgbGV0IF9lcnJvciA9IHRoaXMuc3RhdGUuYmFsYW5jZUVycm9yID8gXCJoYXMtZXJyb3JcIiA6IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYXNzZXRfdHlwZXNbMF0pO1xyXG4gICAgICAgICAgICBpZiAoYXNzZXRfdHlwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSBhc3NldCA/IGFzc2V0LmdldChcImlkXCIpIDogYXNzZXRfdHlwZXNbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFRvdGFsLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2Fzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudC5hc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e19lcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GdW5kc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKGFtb3VudCwgLywvZywgXCJcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGlzQW1vdW50VmFsaWQgPSBhbW91bnRWYWx1ZSAmJiAhaXNOYU4oYW1vdW50VmFsdWUpO1xyXG5cclxuICAgICAgICBjb25zdCBpc1N1Ym1pdE5vdFZhbGlkID1cclxuICAgICAgICAgICAgIWZyb21fYWNjb3VudCB8fFxyXG4gICAgICAgICAgICAhdG9fYWNjb3VudCB8fFxyXG4gICAgICAgICAgICAhaXNBbW91bnRWYWxpZCB8fFxyXG4gICAgICAgICAgICAhYXNzZXQgfHxcclxuICAgICAgICAgICAgYmFsYW5jZUVycm9yIHx8XHJcbiAgICAgICAgICAgIGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0b19hY2NvdW50LmdldChcImlkXCIpIHx8XHJcbiAgICAgICAgICAgICEoKHByZWltYWdlX2NpcGhlciAmJiBwcmVpbWFnZSkgfHwgcHJlaW1hZ2VfaGFzaCkgfHxcclxuICAgICAgICAgICAgIWNsYWltX3BlcmlvZDtcclxuICAgICAgICBsZXQgbW9kYWxUaXRsZSA9XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbiAmJiBvcGVyYXRpb24udHlwZSA9PT0gXCJjcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuaHRsYy5jcmVhdGVfaHRsY1wiKVxyXG4gICAgICAgICAgICAgICAgOiBpc0V4dGVuZFxyXG4gICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmh0bGMuZXh0ZW5kX2h0bGNcIilcclxuICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLnJlZGVlbV9odGxjXCIpO1xyXG4gICAgICAgIGxldCBzZW5kQnV0dG9uVGV4dCA9XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbiAmJiBvcGVyYXRpb24udHlwZSA9PT0gXCJjcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmNyZWF0ZVwiKVxyXG4gICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LnVwZGF0ZVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYW1vdW50SGVhZGVyID0gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXQtaGVhZGVyLS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmV4cGlyYXRpb25fZGF0ZVwiKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1oZWFkZXItLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJwZXJpb2Qtcm93XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtYWN0aXZlXCI6IHRoaXMuc3RhdGUucGVyaW9kID09PSBcIm9uZV9kYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRQZXJpb2QoMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuaHRsYy5leHBpcmF0aW9uX3BlcmlvZC5vbmVfZGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJwZXJpb2Qtcm93XCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtYWN0aXZlXCI6IHRoaXMuc3RhdGUucGVyaW9kID09PSBcInR3b19kYXlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0UGVyaW9kKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuZXhwaXJhdGlvbl9wZXJpb2QudHdvX2RheXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcInBlcmlvZC1yb3dcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1hY3RpdmVcIjogdGhpcy5zdGF0ZS5wZXJpb2QgPT09IFwib25lX3dlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRQZXJpb2QoNyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuaHRsYy5leHBpcmF0aW9uX3BlcmlvZC5vbmVfd2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e21vZGFsVGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLmlzTW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcInNlbmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0Tm90VmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzU3VibWl0Tm90VmFsaWQgPyB0aGlzLm9uU3VibWl0LmJpbmQodGhpcykgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZW5kQnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJDYW5jZWxcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5jYW5jZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTZW5kZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmh0bGMuc2VuZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXtmcm9tX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5odGxjLnJlY2lwaWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RvX2FjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b0NoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Ub0FjY291bnRDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0V4dGVuZCB8fCBpc1JlZGVlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXNSZWRlZW0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5odGxjLmFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbW91bnRDaGFuZ2VkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5sZW5ndGggPiAwICYmIGFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0LmdldChcImlkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfdHlwZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXthc3NldF90eXBlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0V4dGVuZCB8fCBpc1JlZGVlbSA/IHVuZGVmaW5lZCA6IGJhbGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOYU49e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRXh0ZW5kIHx8IGlzUmVkZWVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdERpc2FibGVkPXtpc0V4dGVuZCB8fCBpc1JlZGVlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICBQcmVpbWFnZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzRXh0ZW5kID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMucHJlaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByZWltYWdlX2hhc2ggfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmh0bGMuaGFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJlaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RtcCA9PiAodGhpcy5wcmVpbWFnZSA9IHRtcCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuaHRsYy5wcmVpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb249e3RoaXMub25QcmVpbWFnZUNoYW5nZWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVpbWFnZV9oYXNoPXtwcmVpbWFnZV9oYXNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWltYWdlX3NpemU9e3ByZWltYWdlX3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlaW1hZ2U9e3ByZWltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWltYWdlX2NpcGhlcj17cHJlaW1hZ2VfY2lwaGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb24gJiYgb3BlcmF0aW9uLnR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb3BlcmF0aW9uLnR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJjcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzUmVkZWVtID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogIEV4cGlyYXRpb24gICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2Ftb3VudEhlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXQtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VG9kYXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25FeHBpcmF0aW9uRGF0ZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci13aWR0aDEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHRoaXMub25EYXRlcGlja2VyUmVmKGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZT17Y3VycmVudCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50IDwgcGVyaW9kX3N0YXJ0X3RpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtleHBpcmF0aW9uRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1tYXJnaW4gbm8tcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZUFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJodGxjX2NyZWF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgSHRsY01vZGFsLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMocHJvcHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZlZV9hc3NldF9zeW1ib2w6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncy5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmZWVfYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IEFjY291bnRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0FjY291bnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBBY2NvdW50c1NldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMubXlBY2NvdW50cyxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubXlBY2NvdW50c1xyXG4gICAgICAgICAgICApIHx8IG5leHRQcm9wcy5oaWRkZW5BY2NvdW50cyAhPT0gdGhpcy5wcm9wcy5oaWRkZW5BY2NvdW50c1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGVIaWRlKGFjY291bnQsIGhpZGUsIGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgQWNjb3VudEFjdGlvbnMudG9nZ2xlSGlkZUFjY291bnQoYWNjb3VudCwgaGlkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7bXlBY2NvdW50cywgaGlkZGVuQWNjb3VudHN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IGFjY291bnRzID0gaGlkZGVuQWNjb3VudHNcclxuICAgICAgICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAgICAgICAuY29uY2F0KG15QWNjb3VudHMpXHJcbiAgICAgICAgICAgIC5zb3J0KCk7XHJcblxyXG4gICAgICAgIGlmICghYWNjb3VudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLm5vX2FjY291bnRzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjY291bnRzLm1hcChhY2NvdW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzSWdub3JlZCA9IGhpZGRlbkFjY291bnRzLmhhcyhhY2NvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpZGVMaW5rID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJZ25vcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub25Ub2dnbGVIaWRlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5vblRvZ2dsZUhpZGUuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjY291bnQuXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzSWdub3JlZCA/IFwidW5pZ25vcmVcIiA6IFwiaWdub3JlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2FjY291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YWNjb3VudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL2FjY291bnQvJHthY2NvdW50fS9wZXJtaXNzaW9uc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLnZpZXdfa2V5c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aGlkZUxpbmt9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFjY291bnRzU2V0dGluZ3MgPSBjb25uZWN0KEFjY291bnRzU2V0dGluZ3MsIHtcclxuICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcclxuICAgIH0sXHJcbiAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBteUFjY291bnRzOiBBY2NvdW50U3RvcmUuZ2V0TXlBY2NvdW50cygpLFxyXG4gICAgICAgICAgICBoaWRkZW5BY2NvdW50czogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkubXlIaWRkZW5BY2NvdW50c1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudHNTZXR0aW5ncztcclxuIiwiaW1wb3J0IHtzYXZlQXN9IGZyb20gXCJmaWxlLXNhdmVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcblxyXG5jbGFzcyBCYWNrdXBGYXZvcml0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgbWFrZUJhY2t1cCgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMudG9KUygpO1xyXG5cclxuICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShkYXRhKV0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXVzLWFzY2lpXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2F2ZUFzKGJsb2IsIFwiZmF2b3JpdGVzLmpzb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5iYWNrdXBfZmF2b3JpdGVzdGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5tYWtlQmFja3VwLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmJhY2t1cF9mYXZvcml0ZXNidG5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBCYWNrdXBGYXZvcml0ZXMsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc3RhcnJlZE1hcmtldHNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtCYWNrdXBDcmVhdGV9IGZyb20gXCIuLi9XYWxsZXQvQmFja3VwXCI7XHJcbmltcG9ydCBCYWNrdXBCcmFpbmtleSBmcm9tIFwiLi4vV2FsbGV0L0JhY2t1cEJyYWlua2V5XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IEJhY2t1cEZhdm9yaXRlcyBmcm9tIFwiLi9CYWNrdXBGYXZvcml0ZXNcIjtcclxuaW1wb3J0IHtTZWxlY3R9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuXHJcbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrdXBTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlc3RvcmVUeXBlOiAwLFxyXG4gICAgICAgICAgICB0eXBlczogW1wiYmFja3VwXCIsIFwiYnJhaW5rZXlcIiwgXCJmYXZvcml0ZXNcIl1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGFuZ2VUeXBlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlc3RvcmVUeXBlOiB0aGlzLnN0YXRlLnR5cGVzLmluZGV4T2YodmFsdWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7dHlwZXMsIHJlc3RvcmVUeXBlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0eXBlcy5tYXAodHlwZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17dHlwZX0gdmFsdWU9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoYHNldHRpbmdzLmJhY2t1cGNyZWF0ZV8ke3R5cGV9YCl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGVzW3Jlc3RvcmVUeXBlXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFja3VwXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPEJhY2t1cENyZWF0ZSAvPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImJyYWlua2V5XCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPEJhY2t1cEJyYWlua2V5IC8+O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZmF2b3JpdGVzXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gPEJhY2t1cEZhdm9yaXRlcyAvPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fY2hhbmdlVHlwZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0cy1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0eXBlc1tyZXN0b3JlVHlwZV19XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMTZweFwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuXHJcbmltcG9ydCBTZXREZWZhdWx0RmVlQXNzZXRNb2RhbCBmcm9tIFwiLi4vTW9kYWwvU2V0RGVmYXVsdEZlZUFzc2V0TW9kYWxcIjtcclxuXHJcbmNsYXNzIEZlZUFzc2V0U2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgY3VycmVudF9hc3NldDpcclxuICAgICAgICAgICAgICAgIENoYWluU3RvcmUuYXNzZXRzX2J5X3N5bWJvbC5nZXQocHJvcHMuZmVlX2Fzc2V0KSB8fCBcIjEuMy4wXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KHRoaXMuc3RhdGUuY3VycmVudF9hc3NldCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwic2V0dGluZ3MuY3VycmVudF9mZWVfYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7YXNzZXQgPyA8QXNzZXROYW1lIG5hbWU9e2Fzc2V0LmdldChcInN5bWJvbFwiKX0gLz4gOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogXCIxNXB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT1cIm9wZW5fY2hhbmdlX2ZlZV9hc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzZXR0aW5ncy5jaGFuZ2VfZGVmYXVsdF9mZWVfYXNzZXRcIil9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNldERlZmF1bHRGZWVBc3NldE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImNoYW5nZV9mZWVfYXNzZXRfbW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2Fzc2V0PXt0aGlzLnN0YXRlLmN1cnJlbnRfYXNzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlGZWVzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VEZWZhdWx0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudF9hc3NldDogdmFsdWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIEZlZUFzc2V0U2V0dGluZ3MsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcyhwcm9wcykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZmVlX2Fzc2V0OiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MuZ2V0KFwiZmVlX2Fzc2V0XCIpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXYWxsZXRDaGFuZ2VQYXNzd29yZCBmcm9tIFwiLi4vV2FsbGV0L1dhbGxldENoYW5nZVBhc3N3b3JkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPFdhbGxldENoYW5nZVBhc3N3b3JkIC8+O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCB3aWxsVHJhbnNpdGlvblRvIGZyb20gXCIuLi8uLi9yb3V0ZXJUcmFuc2l0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldFNldHRpbmdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRNZXNzYWdlKGtleSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoa2V5KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IG51bGx9KTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5vLWJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIlJvYm90by1NZWRpdW0sIGFyaWFsLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJzZXR0aW5ncy5yZXNldF90ZXh0X2Rlc2NyaXB0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWxOYW1lPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzZXR0aW5ncy5nZW5lcmFsXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsTmFtZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MuZ2VuZXJhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzTmFtZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0dGluZ3MuYWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXVjZXROYW1lOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5ncy5mYXVjZXRfYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IDYwLCB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIzMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNsZWFyU2V0dGluZ3MoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldE1lc3NhZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5ncy5yZXN0b3JlX2RlZmF1bHRfc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbFRyYW5zaXRpb25UbyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNldHRpbmdzLnJlc2V0XCIpfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhY29sb3Itc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMThweFwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7QnV0dG9uLCBOb3RpZmljYXRpb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuXHJcbmNsYXNzIFJlc3RvcmVGYXZvcml0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGpzb246IG51bGwsXHJcbiAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWQoZXZ0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IGZhbHNlLCBqc29uOiBudWxsfSk7XHJcblxyXG4gICAgICAgIGxldCBmaWxlID0gZXZ0LnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gZXZ0ID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnRzID0gZXZ0LnRhcmdldC5yZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGNvbnRlbnRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXQgPSBqc29uW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtxdW90ZSwgYmFzZX0gPSBtYXJrZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcXVvdGUgfHwgIWJhc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwYXJzZSBqc29uIGRhdGEuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2pzb259KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZmluaXNoKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaCgpIHtcclxuICAgICAgICBjb25zdCB7anNvbn0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2xlYXJTdGFycmVkTWFya2V0cygpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xyXG4gICAgICAgICAgICBsZXQgbWFya2V0ID0ganNvbltrZXldO1xyXG4gICAgICAgICAgICBsZXQge3F1b3RlLCBiYXNlfSA9IG1hcmtldDtcclxuXHJcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5hZGRTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5zdWNjZXNzKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQoXCJzZXR0aW5ncy5iYWNrdXBfZmF2b3JpdGVzX3N1Y2Nlc3NcIilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3N0YXRlfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcInNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTVcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwbG9hZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7c3RhdGUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuYmFja3VwX2Zhdm9yaXRlc19lcnJvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmpzb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInByaW1hcnlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZmluaXNoLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmJhY2t1cF9mYXZvcml0ZXNfZmluaXNoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdG9yZUZhdm9yaXRlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0JhY2t1cFJlc3RvcmV9IGZyb20gXCIuLi9XYWxsZXQvQmFja3VwXCI7XHJcbmltcG9ydCBJbXBvcnRLZXlzIGZyb20gXCIuLi9XYWxsZXQvSW1wb3J0S2V5c1wiO1xyXG5pbXBvcnQge0NyZWF0ZVdhbGxldEZyb21CcmFpbmtleX0gZnJvbSBcIi4uL1dhbGxldC9XYWxsZXRDcmVhdGVcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBSZXN0b3JlRmF2b3JpdGVzIGZyb20gXCIuL1Jlc3RvcmVGYXZvcml0ZXNcIjtcclxuaW1wb3J0IHtCdXR0b24sIFNlbGVjdH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RvcmVTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlc3RvcmVUeXBlOiAwLFxyXG4gICAgICAgICAgICB0eXBlczogW1wiYmFja3VwXCIsIFwia2V5XCIsIFwibGVnYWN5XCIsIFwiYnJhaW5rZXlcIiwgXCJmYXZvcml0ZXNcIl1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRXYWxsZXRNb2RlKCkge1xyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcclxuICAgICAgICAgICAgc2V0dGluZzogXCJwYXNzd29yZExvZ2luXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGFuZ2VUeXBlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlc3RvcmVUeXBlOiB0aGlzLnN0YXRlLnR5cGVzLmluZGV4T2YodmFsdWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7cGFzc3dvcmRMb2dpbn0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAocGFzc3dvcmRMb2dpbikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJzZXR0aW5ncy53YWxsZXRfcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXJrLXRleHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3Mud2FsbGV0X3JlcXVpcmVkX3RleHRcIiAvPjpcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9zZXRXYWxsZXRNb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuZW5hYmxlX3dhbGxldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHt0eXBlcywgcmVzdG9yZVR5cGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHR5cGVzLm1hcCh0eXBlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXt0eXBlfSB2YWx1ZT17dHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShgc2V0dGluZ3MuYmFja3VwXyR7dHlwZX1gKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRlbnQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZXNbcmVzdG9yZVR5cGVdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYWNrdXBcIjpcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2t1cFJlc3RvcmUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJicmFpbmtleVwiOlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21heFdpZHRoOiBcIjQwcmVtXCIsIHBhZGRpbmdCb3R0b206IDEwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzZXR0aW5ncy5yZXN0b3JlX2JyYWlua2V5X3RleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVXYWxsZXRGcm9tQnJhaW5rZXkgbmVzdGVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZmF2b3JpdGVzXCI6XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXN0b3JlRmF2b3JpdGVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IDxJbXBvcnRLZXlzIHByaXZhdGVLZXk9e3Jlc3RvcmVUeXBlID09PSAxfSAvPjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fY2hhbmdlVHlwZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0cy1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0eXBlc1tyZXN0b3JlVHlwZV19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgSW50bEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvSW50bEFjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgV2Vic29ja2V0QWRkTW9kYWwgZnJvbSBcIi4vV2Vic29ja2V0QWRkTW9kYWxcIjtcbmltcG9ydCBTZXR0aW5nc0VudHJ5IGZyb20gXCIuL1NldHRpbmdzRW50cnlcIjtcbmltcG9ydCBBY2NvdW50c1NldHRpbmdzIGZyb20gXCIuL0FjY291bnRzU2V0dGluZ3NcIjtcbmltcG9ydCBXYWxsZXRTZXR0aW5ncyBmcm9tIFwiLi9XYWxsZXRTZXR0aW5nc1wiO1xuaW1wb3J0IFBhc3N3b3JkU2V0dGluZ3MgZnJvbSBcIi4vUGFzc3dvcmRTZXR0aW5nc1wiO1xuaW1wb3J0IFJlc3RvcmVTZXR0aW5ncyBmcm9tIFwiLi9SZXN0b3JlU2V0dGluZ3NcIjtcbmltcG9ydCBSZXNldFNldHRpbmdzIGZyb20gXCIuL1Jlc2V0U2V0dGluZ3NcIjtcbmltcG9ydCBCYWNrdXBTZXR0aW5ncyBmcm9tIFwiLi9CYWNrdXBTZXR0aW5nc1wiO1xuaW1wb3J0IEFjY2Vzc1NldHRpbmdzIGZyb20gXCIuL0FjY2Vzc1NldHRpbmdzXCI7XG5pbXBvcnQge3NldH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtnZXRBbGxvd2VkTG9naW5zLCBnZXRGYXVjZXR9IGZyb20gXCIuLi8uLi9icmFuZGluZ1wiO1xuaW1wb3J0IHtJbnB1dCwgRm9ybX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IG1lbnVFbnRyaWVzID0gdGhpcy5fZ2V0TWVudUVudHJpZXMocHJvcHMpO1xuICAgICAgICBsZXQgYWN0aXZlU2V0dGluZyA9IDA7XG5cbiAgICAgICAgbGV0IHRhYkluZGV4ID0gISFwcm9wcy5tYXRjaC5wYXJhbXMudGFiXG4gICAgICAgICAgICA/IG1lbnVFbnRyaWVzLmluZGV4T2YocHJvcHMubWF0Y2gucGFyYW1zLnRhYilcbiAgICAgICAgICAgIDogcHJvcHMudmlld1NldHRpbmdzLmdldChcImFjdGl2ZVNldHRpbmdcIiwgMCk7XG4gICAgICAgIGlmICh0YWJJbmRleCA+PSAwKSBhY3RpdmVTZXR0aW5nID0gdGFiSW5kZXg7XG5cbiAgICAgICAgbGV0IGdlbmVyYWwgPSBbXG4gICAgICAgICAgICBcImxvY2FsZVwiLFxuICAgICAgICAgICAgXCJ1bml0XCIsXG4gICAgICAgICAgICBcImZlZV9hc3NldFwiLFxuICAgICAgICAgICAgLy9cImZpbHRlcmVkU2VydmljZVByb3ZpZGVyc1wiLFxuICAgICAgICAgICAgXCJicm93c2VyX25vdGlmaWNhdGlvbnNcIixcbiAgICAgICAgICAgIFwic2hvd1NldHRsZXNcIixcbiAgICAgICAgICAgIFwid2FsbGV0TG9ja1RpbWVvdXRcIixcbiAgICAgICAgICAgIFwidGhlbWVzXCIsXG4gICAgICAgICAgICBcInNob3dBc3NldFBlcmNlbnRcIixcbiAgICAgICAgICAgIFwidmlld09ubHlNb2RlXCIsXG4gICAgICAgICAgICBcInNob3dQcm9wb3NlZFR4XCJcbiAgICAgICAgXTtcbiAgICAgICAgLy8gZGlzYWJsZSB0aGF0IHRoZSB1c2VyIGNhbiBjaGFuZ2UgbG9naW4gbWV0aG9kIGlmIG9ubHkgb25lIGlzIGFsbG93ZWRcbiAgICAgICAgaWYgKGdldEFsbG93ZWRMb2dpbnMoKS5sZW5ndGggPiAxKSBnZW5lcmFsLnB1c2goXCJwYXNzd29yZExvZ2luXCIpO1xuICAgICAgICBnZW5lcmFsLnB1c2goXCJyZXNldFwiKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNBZGROb2RlTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGlzUmVtb3ZlTm9kZU1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZW1vdmVOb2RlOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICB1cmw6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcGlTZXJ2ZXI6IHByb3BzLnNldHRpbmdzLmdldChcImFwaVNlcnZlclwiKSxcbiAgICAgICAgICAgIGFjdGl2ZVNldHRpbmcsXG4gICAgICAgICAgICBtZW51RW50cmllcyxcbiAgICAgICAgICAgIHNldHRpbmdFbnRyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhbDogZ2VuZXJhbCxcbiAgICAgICAgICAgICAgICBhY2Nlc3M6IFtcImFwaVNlcnZlclwiLCBcImZhdWNldF9hZGRyZXNzXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zaG93QWRkTm9kZU1vZGFsID0gdGhpcy5zaG93QWRkTm9kZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZUFkZE5vZGVNb2RhbCA9IHRoaXMuaGlkZUFkZE5vZGVNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dSZW1vdmVOb2RlTW9kYWwgPSB0aGlzLnNob3dSZW1vdmVOb2RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUmVtb3ZlTm9kZU1vZGFsID0gdGhpcy5oaWRlUmVtb3ZlTm9kZU1vZGFsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlID0gdGhpcy5faGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcmV2UHJvcHMubWF0Y2gucGFyYW1zLnRhYiAhPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudGFiICYmXG4gICAgICAgICAgICAhIXRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnRhYlxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlTWVudSh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy50YWIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnAuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKSAhPT1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFbnRyaWVzID0gdGhpcy5fZ2V0TWVudUVudHJpZXModGhpcy5wcm9wcyk7XG4gICAgICAgICAgICBjb25zdCBtZW51RW50cmllcyA9IHRoaXMuX2dldE1lbnVFbnRyaWVzKG5wKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmUgPSBjdXJyZW50RW50cmllc1t0aGlzLnN0YXRlLmFjdGl2ZVNldHRpbmddO1xuICAgICAgICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSBtZW51RW50cmllcy5pbmRleE9mKGN1cnJlbnRBY3RpdmUpO1xuICAgICAgICAgICAgY29uc3QgbmV3QWN0aXZlID0gbWVudUVudHJpZXNbbmV3QWN0aXZlSW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbWVudUVudHJpZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG5ld0FjdGl2ZUluZGV4ICYmIG5ld0FjdGl2ZUluZGV4ICE9PSB0aGlzLnN0YXRlLmFjdGl2ZVNldHRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2V0dGluZzogbWVudUVudHJpZXMuaW5kZXhPZihjdXJyZW50QWN0aXZlKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAhbmV3QWN0aXZlIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVTZXR0aW5nID4gbWVudUVudHJpZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNldHRpbmc6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dBZGROb2RlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNBZGROb2RlTW9kYWxWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVBZGROb2RlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNBZGROb2RlTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UmVtb3ZlTm9kZU1vZGFsKHVybCwgbmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUmVtb3ZlTm9kZU1vZGFsVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlbW92ZU5vZGU6IHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlUmVtb3ZlTm9kZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUmVtb3ZlTm9kZU1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICByZW1vdmVOb2RlOiB7XG4gICAgICAgICAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICAgICAgICAgIG5hbWU6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldE1lbnVFbnRyaWVzKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5kZXByZWNhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gW1wid2FsbGV0XCIsIFwiYmFja3VwXCJdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtZW51RW50cmllcyA9IFtdO1xuXG4gICAgICAgIG1lbnVFbnRyaWVzLnB1c2goXCJnZW5lcmFsXCIpO1xuICAgICAgICBpZiAoIXByb3BzLnNldHRpbmdzLmdldChcInBhc3N3b3JkTG9naW5cIikpIG1lbnVFbnRyaWVzLnB1c2goXCJ3YWxsZXRcIik7XG4gICAgICAgIG1lbnVFbnRyaWVzLnB1c2goXCJhY2NvdW50c1wiKTtcbiAgICAgICAgaWYgKCFwcm9wcy5zZXR0aW5ncy5nZXQoXCJwYXNzd29yZExvZ2luXCIpKSBtZW51RW50cmllcy5wdXNoKFwicGFzc3dvcmRcIik7XG4gICAgICAgIGlmICghcHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKSkgbWVudUVudHJpZXMucHVzaChcImJhY2t1cFwiKTtcbiAgICAgICAgaWYgKCFwcm9wcy5zZXR0aW5ncy5nZXQoXCJwYXNzd29yZExvZ2luXCIpKSBtZW51RW50cmllcy5wdXNoKFwicmVzdG9yZVwiKTtcbiAgICAgICAgbWVudUVudHJpZXMucHVzaChcImFjY2Vzc1wiKTtcblxuICAgICAgICBpZiAoZ2V0RmF1Y2V0KCkuc2hvdykgbWVudUVudHJpZXMucHVzaChcImZhdWNldF9hZGRyZXNzXCIpO1xuXG4gICAgICAgIG1lbnVFbnRyaWVzLnB1c2goXCJyZXNldFwiKTtcblxuICAgICAgICByZXR1cm4gbWVudUVudHJpZXM7XG4gICAgfVxuXG4gICAgdHJpZ2dlck1vZGFsKGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5yZWZzLndzX21vZGFsLnNob3coZSwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgX2hhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZShwYXRoLCB2YWx1ZSkge1xuICAgICAgICAvLyB1c2UgZGlmZmVyZW50IGNoYW5nZSBoYW5kbGVyIGJlY2F1c2UgY2hlY2tib3ggZG9lc24ndCB3b3JrXG4gICAgICAgIC8vIG5vcm1hbCB3aXRoIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGxldCB1cGRhdGVkVmFsdWUgPSBzZXQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldHRpbmdzLmdldChcImJyb3dzZXJfbm90aWZpY2F0aW9uc1wiKSxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICApO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgIHNldHRpbmc6IFwiYnJvd3Nlcl9ub3RpZmljYXRpb25zXCIsXG4gICAgICAgICAgICB2YWx1ZTogdXBkYXRlZFZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9oYW5kbGVTZXR0aW5nc0VudHJ5Q2hhbmdlKHNldHRpbmcsIGlucHV0KSB7XG4gICAgICAgIGlmICghaW5wdXQudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZVNldHRpbmcoc2V0dGluZywge3RhcmdldDoge3ZhbHVlOiBpbnB1dH19KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlU2V0dGluZyhzZXR0aW5nLCBpbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25DaGFuZ2VTZXR0aW5nKHNldHRpbmcsIGUpIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQge2RlZmF1bHRzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZEVudHJ5KHRhcmdldFZhbHVlLCB0YXJnZXREZWZhdWx0cykge1xuICAgICAgICAgICAgaWYgKCF0YXJnZXREZWZhdWx0cykgcmV0dXJuIHRhcmdldFZhbHVlO1xuICAgICAgICAgICAgaWYgKHRhcmdldERlZmF1bHRzWzBdLnRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0RGVmYXVsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzZXR0aW5ncy4ke3RhcmdldERlZmF1bHRzW2ldLnRyYW5zbGF0ZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICApID09PSB0YXJnZXRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0RGVmYXVsdHMuaW5kZXhPZih0YXJnZXRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHNldHRpbmcpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsb2NhbGVcIjpcbiAgICAgICAgICAgICAgICBsZXQgbXlMb2NhbGUgPSBjb3VudGVycGFydC5nZXRMb2NhbGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09IG15TG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIEludGxBY3Rpb25zLnN3aXRjaExvY2FsZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc6IFwibG9jYWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidGhlbWVzXCI6XG4gICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nOiBcInRoZW1lc1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRNYXJrZXRzXCI6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsZXRMb2NrVGltZW91dFwiOlxuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKG5ld1ZhbHVlKSkgbmV3VmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4obmV3VmFsdWUpICYmIHR5cGVvZiBuZXdWYWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nOiBcIndhbGxldExvY2tUaW1lb3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiaW52ZXJzZU1hcmtldFwiOlxuICAgICAgICAgICAgY2FzZSBcImNvbmZpcm1NYXJrZXRPcmRlclwiOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gZmluZEVudHJ5KGUudGFyZ2V0LnZhbHVlLCBkZWZhdWx0c1tzZXR0aW5nXSkgPT09IDA7IC8vIFVTRC9CVFMgaXMgdHJ1ZSwgQlRTL1VTRCBpcyBmYWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXBpU2VydmVyXCI6XG4gICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nOiBcImFwaVNlcnZlclwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYXBpU2VydmVyOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwic2hvd1Byb3Bvc2VkVHhcIjpcbiAgICAgICAgICAgIGNhc2UgXCJzaG93U2V0dGxlc1wiOlxuICAgICAgICAgICAgY2FzZSBcInNob3dBc3NldFBlcmNlbnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwYXNzd29yZExvZ2luXCI6XG4gICAgICAgICAgICBjYXNlIFwidmlld09ubHlNb2RlXCI6XG4gICAgICAgICAgICAgICAgbGV0IHJlZmVyZW5jZSA9IGRlZmF1bHRzW3NldHRpbmddWzBdO1xuICAgICAgICAgICAgICAgIGlmIChyZWZlcmVuY2UudHJhbnNsYXRlKSByZWZlcmVuY2UgPSByZWZlcmVuY2UudHJhbnNsYXRlO1xuICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlID09PSByZWZlcmVuY2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImZpbHRlcmVkU2VydmljZVByb3ZpZGVyc1wiOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImZlZV9hc3NldFwiOlxuICAgICAgICAgICAgY2FzZSBcInVuaXRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBkZWZhdWx0c1tcInVuaXRcIl07XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZmluZEVudHJ5KGUudGFyZ2V0LnZhbHVlLCBkZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZzogc2V0dGluZyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlZmF1bHRTZXR0aW5nc1tpbmRleF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGZpbmRFbnRyeShlLnRhcmdldC52YWx1ZSwgZGVmYXVsdHNbc2V0dGluZ10pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7c2V0dGluZzogc2V0dGluZywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlc2V0KCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2xlYXJTZXR0aW5ncygpO1xuICAgIH1cblxuICAgIF9yZWRpcmVjdFRvRW50cnkoZW50cnkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvc2V0dGluZ3MvXCIgKyBlbnRyeSk7XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlTWVudShlbnRyeSkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLm1lbnVFbnRyaWVzLmluZGV4T2YoZW50cnkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVNldHRpbmc6IGluZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7YWN0aXZlU2V0dGluZzogaW5kZXh9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7c2V0dGluZ3MsIGRlZmF1bHRzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHttZW51RW50cmllcywgYWN0aXZlU2V0dGluZywgc2V0dGluZ0VudHJpZXN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGVudHJpZXM7XG4gICAgICAgIGxldCBhY3RpdmVFbnRyeSA9IG1lbnVFbnRyaWVzW2FjdGl2ZVNldHRpbmddIHx8IG1lbnVFbnRyaWVzWzBdO1xuXG4gICAgICAgIHN3aXRjaCAoYWN0aXZlRW50cnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50c1wiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSA8QWNjb3VudHNTZXR0aW5ncyAvPjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndhbGxldFwiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSA8V2FsbGV0U2V0dGluZ3Mgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gPFBhc3N3b3JkU2V0dGluZ3MgLz47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJiYWNrdXBcIjpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gPEJhY2t1cFNldHRpbmdzIC8+O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicmVzdG9yZVwiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxSZXN0b3JlU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkTG9naW49e3RoaXMucHJvcHMuc2V0dGluZ3MuZ2V0KFwicGFzc3dvcmRMb2dpblwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYWNjZXNzXCI6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IChcbiAgICAgICAgICAgICAgICAgICAgPEFjY2Vzc1NldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXVjZXQ9e3NldHRpbmdzLmdldChcImZhdWNldF9hZGRyZXNzXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM9e2RlZmF1bHRzLmFwaVNlcnZlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZVNldHRpbmcuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBZGROb2RlTW9kYWw9e3RoaXMuc2hvd0FkZE5vZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dSZW1vdmVOb2RlTW9kYWw9e3RoaXMuc2hvd1JlbW92ZU5vZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImZhdWNldF9hZGRyZXNzXCI6XG4gICAgICAgICAgICAgICAgZW50cmllcyA9IChcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWdldEZhdWNldCgpLmVkaXRhYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXR0aW5ncy5nZXQoXCJmYXVjZXRfYWRkcmVzc1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRGYXVjZXQoKS5lZGl0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX29uQ2hhbmdlU2V0dGluZy5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhdWNldF9hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgICAgICAgICAgIGVudHJpZXMgPSA8UmVzZXRTZXR0aW5ncyAvPjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBlbnRyaWVzID0gc2V0dGluZ0VudHJpZXNbYWN0aXZlRW50cnldLm1hcChzZXR0aW5nID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nc0VudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzZXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9e3NldHRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M9e3NldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nID09PSBcImZlZV9hc3NldFwiID8gXCJ1bml0XCIgOiBzZXR0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZVNldHRpbmdzRW50cnlDaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ob3RpZmljYXRpb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlcz17dGhpcy5wcm9wcy5sb2NhbGVzT2JqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybSBsYXlvdXQ9e1widmVydGljYWxcIn0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZXByZWNhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImdyaWQtYmxvY2sgc2V0dGluZ3MtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1haW4tY29udGVudCBtYXJnaW4tYmxvY2sgd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzaHJpbmsgc2V0dGluZ3MtbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IFwiMnJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTAsIHBhZGRpbmdMZWZ0OiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImhlYWRlci5zZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJwYW5lbC1iZy1jb2xvclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51RW50cmllcy5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBhY3RpdmVTZXR0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fcmVkaXJlY3RUb0VudHJ5LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbnRyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2V0dGluZ3MuXCIgKyBlbnRyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtMTIgbm8tbWFyZ2luIHZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAxMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLlwiICsgbWVudUVudHJpZXNbYWN0aXZlU2V0dGluZ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUVudHJ5ICE9IFwiYWNjZXNzXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2FmZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2BzZXR0aW5ncy4ke21lbnVFbnRyaWVzW2FjdGl2ZVNldHRpbmddfV90ZXh0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYW5lbC1iZy1jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW50cmllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFdlYnNvY2tldEFkZE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlPXt0aGlzLnN0YXRlLnJlbW92ZU5vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FkZE5vZGVNb2RhbFZpc2libGU9e3RoaXMuc3RhdGUuaXNBZGROb2RlTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZW1vdmVOb2RlTW9kYWxWaXNpYmxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzUmVtb3ZlTm9kZU1vZGFsVmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25BZGROb2RlQ2xvc2U9e3RoaXMuaGlkZUFkZE5vZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlTm9kZUNsb3NlPXt0aGlzLmhpZGVSZW1vdmVOb2RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlzPXtkZWZhdWx0c1tcImFwaVNlcnZlclwiXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaT17ZGVmYXVsdHNbXCJhcGlTZXJ2ZXJcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS51cmwgPT09IHRoaXMuc3RhdGUuYXBpU2VydmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYiAmJiBiLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNvbm5lY3Rpb249e2FwaVNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXBpU2VydmVyfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBJbnRsU3RvcmUgZnJvbSBcInN0b3Jlcy9JbnRsU3RvcmVcIjtcbmltcG9ydCBBbHRDb250YWluZXIgZnJvbSBcImFsdC1jb250YWluZXJcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xuXG5jbGFzcyBTZXR0aW5nc0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W1NldHRpbmdzU3RvcmVdfVxuICAgICAgICAgICAgICAgIGluamVjdD17e1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmlld1NldHRpbmdzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZGVmYXVsdHM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXNPYmplY3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJbnRsU3RvcmUuZ2V0U3RhdGUoKS5sb2NhbGVzT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhcGlMYXRlbmNpZXM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuYXBpTGF0ZW5jaWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U2V0dGluZ3Mgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICA8L0FsdENvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IE5vdGlmeSBmcm9tIFwibm90aWZ5anNcIjtcclxuaW1wb3J0IEZlZUFzc2V0U2V0dGluZ3MgZnJvbSBcIi4vRmVlQXNzZXRTZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IHtDaGVja2JveCwgU2VsZWN0LCBJbnB1dCwgRm9ybSwgQnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBHYXRld2F5U2VsZWN0b3JNb2RhbCBmcm9tIFwiLi4vR2F0ZXdheXMvR2F0ZXdheVNlbGVjdG9yTW9kYWxcIjtcclxuXHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3NFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBudWxsLFxyXG4gICAgICAgICAgICBpc0dhdGV3YXlTZWxlY3Rvck1vZGFsVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzR2F0ZXdheVNlbGVjdG9yTW9kYWxSZW5kZXJlZDogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZSA9IHRoaXMuaGFuZGxlTm90aWZpY2F0aW9uQ2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVHYXRld2F5U2VsZWN0b3JNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNHYXRld2F5U2VsZWN0b3JNb2RhbFZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0dhdGV3YXlTZWxlY3Rvck1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0dhdGV3YXlTZWxlY3Rvck1vZGFsUmVuZGVyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGlzR2F0ZXdheVNlbGVjdG9yTW9kYWxWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldE1lc3NhZ2Uoa2V5KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShrZXkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogbnVsbH0pO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UocGF0aCkge1xyXG4gICAgICAgIHJldHVybiBldnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTm90aWZpY2F0aW9uQ2hhbmdlKHBhdGgsICEhZXZ0LnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcclxuICAgICAgICBpZiAobmV4dFByb3BzLnNldHRpbmcgPT09IFwiZmlsdGVyZWRTZXJ2aWNlUHJvdmlkZXJzXCIpIHtcclxuICAgICAgICAgICAgLy8gb25seSByZXJlbmRlciBmb3IgdGhlIG1vZGFsLCBub3Qgd2hlbiBzZXR0aW5ncyBjaGFuZ2VkICh2aXN1YWxpemVkIGluIHRoZSBtb2RhbCEpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUuaXNHYXRld2F5U2VsZWN0b3JNb2RhbFZpc2libGUgIT09XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzR2F0ZXdheVNlbGVjdG9yTW9kYWxWaXNpYmxlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2RlZmF1bHRzLCBzZXR0aW5nLCBzZXR0aW5nc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBvcHRpb25zLFxyXG4gICAgICAgICAgICBvcHRpb25hbCxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbixcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICBzZWxlY3RlZCA9IHNldHRpbmdzLmdldChzZXR0aW5nKTtcclxuICAgICAgICBsZXQgbm9IZWFkZXIgPSBmYWxzZTtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChzZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2NhbGVcIjpcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gZGVmYXVsdHMubWFwKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25LZXkgPSBcImxhbmd1YWdlcy5cIiArIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0cmFuc2xhdGlvbktleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtlbnRyeX0gdmFsdWU9e2VudHJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInRoZW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0cy5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFuc2xhdGlvbktleSA9IFwic2V0dGluZ3MuXCIgKyBlbnRyeTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjb3VudGVycGFydC50cmFuc2xhdGUodHJhbnNsYXRpb25LZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17ZW50cnl9IHZhbHVlPXtlbnRyeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJicm93c2VyX25vdGlmaWNhdGlvbnNcIjpcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy0tbm90aWZpY2F0aW9ucy0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtLW5vdGlmaWNhdGlvbnMtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJicm93c2VyX25vdGlmaWNhdGlvbnMuYWxsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXshIXZhbHVlLmFsbG93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVOb3RpZmljYXRpb25DaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldHRpbmdzLmJyb3dzZXJfbm90aWZpY2F0aW9uc19hbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy0tbm90aWZpY2F0aW9ucy0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLS1ub3RpZmljYXRpb25zLS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJicm93c2VyX25vdGlmaWNhdGlvbnMuYWRkaXRpb25hbC50cmFuc2ZlclRvTWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF2YWx1ZS5hbGxvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhdmFsdWUuYWRkaXRpb25hbC50cmFuc2ZlclRvTWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5vdGlmaWNhdGlvbkNoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZGl0aW9uYWwudHJhbnNmZXJUb01lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXR0aW5ncy5icm93c2VyX25vdGlmaWNhdGlvbnNfYWRkaXRpb25hbF90cmFuc2Zlcl90b19tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ISF2YWx1ZS5hbGxvdyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aWZ5Lm5lZWRzUGVybWlzc2lvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ29vLmdsL3paN05IWVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy0tbm90aWZpY2F0aW9ucy0tbm8tYnJvd3Nlci1zdXBwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJzZXR0aW5ncy5icm93c2VyX25vdGlmaWNhdGlvbnNfZGlzYWJsZWRfYnlfYnJvd3Nlcl9ub3RpZnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZlZV9hc3NldFwiOlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSA8RmVlQXNzZXRTZXR0aW5ncyBrZXk9XCJmZWVfYXNzZXRfY29tcG9uZW50XCIgLz47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJmaWx0ZXJlZFNlcnZpY2VQcm92aWRlcnNcIjpcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93R2F0ZXdheVNlbGVjdG9yTW9kYWwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIGV4dGVybmFsIFNlcnZpY2UgUHJvdmlkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0dhdGV3YXlTZWxlY3Rvck1vZGFsUmVuZGVyZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdhdGV3YXlTZWxlY3Rvck1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNHYXRld2F5U2VsZWN0b3JNb2RhbFZpc2libGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLmhpZGVHYXRld2F5U2VsZWN0b3JNb2RhbC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWZhdWx0TWFya2V0c1wiOlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsZXRMb2NrVGltZW91dFwiOlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIGlucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2UuYmluZCh0aGlzLCBzZXR0aW5nKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0ZWQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGRlZmF1bHRzW3NlbGVjdGVkXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdGVkID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGRlZmF1bHRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGVmYXVsdHNbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0ZWQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0cy5tYXAoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZW50cnkudHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzZXR0aW5ncy4ke2VudHJ5LnRyYW5zbGF0ZX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nID09PSBcInVuaXRcIiB8fCBzZXR0aW5nID09PSBcImZlZV9hc3NldFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24gPSA8QXNzZXROYW1lIG5hbWU9e2VudHJ5fSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gZW50cnkudHJhbnNsYXRlID8gZW50cnkudHJhbnNsYXRlIDogZW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50cmFuc2xhdGUgPyBlbnRyeS50cmFuc2xhdGUgOiBlbnRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMucHJvcHMub25DaGFuZ2UuYmluZCh0aGlzLCBzZXR0aW5nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIgJiYgIXZhbHVlICYmICFvcHRpb25zKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLnRyYW5zbGF0ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyYW5zbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IEVudHJ5TGF5b3V0ID0gKHtub0hlYWRlciwgc2V0dGluZywgY2hpbGRyZW59KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhub0hlYWRlciAmJiBjaGlsZHJlbikgfHwgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoYHNldHRpbmdzLiR7c2V0dGluZ31gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5vLWJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxFbnRyeUxheW91dCBub0hlYWRlcj17bm9IZWFkZXJ9IHNldHRpbmc9e3NldHRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcInVuc3R5bGVkLWxpc3RcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2l0aC1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2V0dGluZ3MtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1CdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHtpbnB1dCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJ1bnN0eWxlZC1saXN0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntpbnB1dH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcG9uZW50ID8gY29tcG9uZW50IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvRW50cnlMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY29sb3Itc3VjY2Vzc1wiPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q2hhbmdlQWN0aXZlV2FsbGV0LCBXYWxsZXREZWxldGV9IGZyb20gXCIuLi9XYWxsZXQvV2FsbGV0TWFuYWdlclwiO1xuaW1wb3J0IEJhbGFuY2VDbGFpbUFjdGl2ZSBmcm9tIFwiLi4vV2FsbGV0L0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcbmltcG9ydCB7Rm9ybSwgQnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsZXRTZXR0aW5ncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxvb2t1cEFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICByZXNldE1lc3NhZ2U6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkxvb2t1cCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb29rdXBBY3RpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SZXNldEJyYWlua2V5U2VxdWVuY2UoKSB7XG4gICAgICAgIFdhbGxldERiLnJlc2V0QnJhaW5LZXlTZXF1ZW5jZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlc2V0TWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmJyYWlua2V5X3Jlc2V0X3N1Y2Nlc3NcIilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2xvb2t1cEFjdGl2ZX0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQge2RlcHJlY2F0ZWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoZGVwcmVjYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q2hhbmdlQWN0aXZlV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgIDxXYWxsZXREZWxldGUgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q2hhbmdlQWN0aXZlV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgPFdhbGxldERlbGV0ZSAvPlxuXG4gICAgICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ3YWxsZXQuYmFsYW5jZV9jbGFpbXNcIil9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW9mZnNldFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxNXB4IDBcIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInNldHRpbmdzLmxvb2t1cF90ZXh0XCIgLz46XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25Mb29rdXAuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYmFsYW5jZV9jbGFpbV9sb29rdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgICAgICAgICAge2xvb2t1cEFjdGl2ZSA/IDxCYWxhbmNlQ2xhaW1BY3RpdmUgLz4gOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ3YWxsZXQuYnJhaW5rZXlfc2VxX3Jlc2V0XCIpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1vZmZzZXRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMTVweFwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNhZmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5icmFpbmtleV9zZXFfcmVzZXRfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVzZXRCcmFpbmtleVNlcXVlbmNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5X3NlcV9yZXNldF9idXR0b25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXNldE1lc3NhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhY29sb3Itc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXNldE1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtcbiAgICBJbnB1dCxcbiAgICBDYXJkLFxuICAgIENvbCxcbiAgICBSb3csXG4gICAgQnV0dG9uLFxuICAgIFN3aXRjaCxcbiAgICBUb29sdGlwLFxuICAgIEljb24sXG4gICAgUG9wb3ZlcixcbiAgICBBbGVydFxufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuaW1wb3J0IEZlZUFzc2V0U2VsZWN0b3IgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9GZWVBc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQge2NoZWNrQmFsYW5jZX0gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcbmltcG9ydCBBcHBsaWNhdGlvbkFwaSBmcm9tIFwiLi4vLi4vYXBpL0FwcGxpY2F0aW9uQXBpXCI7XG5pbXBvcnQge21hcH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuXG5mdW5jdGlvbiBtb3ZlRGVjaW1hbChudW0sIGRlY2ltYWxzKSB7XG4gICAgaWYgKCFudW0pIHJldHVybjtcbiAgICByZXR1cm4gbnVtIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhcnRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmcm9tX25hbWU6IFwiXCIsXG4gICAgICAgICAgICB0b19uYW1lOiBcIlwiLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBudWxsLFxuICAgICAgICAgICAgdG9fYWNjb3VudDogbnVsbCxcbiAgICAgICAgICAgIGZyb21fYmFydGVyOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbV9hbW91bnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYXNzZXRfaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYXNzZXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGZyb21fZmVlQXNzZXQ6IG5ldyBBc3NldCh7YW1vdW50OiAwLCBhc3NldF9pZDogXCIxLjMuMFwifSksXG4gICAgICAgICAgICAgICAgICAgIGZyb21faGFzUG9vbEJhbGFuY2U6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYmFsYW5jZUVycm9yOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0b19iYXJ0ZXI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b19hbW91bnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvX2Fzc2V0X2lkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0b19hc3NldDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9fZmVlQXNzZXQ6IG5ldyBBc3NldCh7YW1vdW50OiAwLCBhc3NldF9pZDogXCIxLjMuMFwifSksXG4gICAgICAgICAgICAgICAgICAgIHRvX2hhc1Bvb2xCYWxhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0b19iYWxhbmNlRXJyb3I6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFtb3VudF9jb3VudGVyOiBbXSxcbiAgICAgICAgICAgIGFtb3VudF9pbmRleDogMCxcbiAgICAgICAgICAgIGZyb21fZXJyb3I6IG51bGwsXG4gICAgICAgICAgICB0b19lcnJvcjogbnVsbCxcbiAgICAgICAgICAgIG1lbW86IHtcbiAgICAgICAgICAgICAgICBmcm9tX2JhcnRlcjogW3ttZXNzYWdlOiBcIlwiLCBzaG93bjogZmFsc2V9XSxcbiAgICAgICAgICAgICAgICB0b19iYXJ0ZXI6IFt7bWVzc2FnZTogXCJcIiwgc2hvd246IGZhbHNlfV0sXG4gICAgICAgICAgICAgICAgZXNjcm93OiBbe21lc3NhZ2U6IFwiXCIsIHNob3duOiBmYWxzZX1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcG9zYWxfZmVlOiB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBcIjEuMy4wXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93RXNjcm93OiBmYWxzZSxcbiAgICAgICAgICAgIGVzY3Jvd19hY2NvdW50X25hbWU6IFwiXCIsXG4gICAgICAgICAgICBlc2Nyb3dfYWNjb3VudDogbnVsbCxcbiAgICAgICAgICAgIHNlbmRfdG9fZXNjcm93OiBmYWxzZSxcbiAgICAgICAgICAgIGVzY3Jvd19wYXltZW50OiAwLFxuICAgICAgICAgICAgZXNjcm93X3BheW1lbnRfY2hhbmdlZDogZmFsc2UsXG4gICAgICAgICAgICBlc2Nyb3dGZWVBc3NldElkOiBcIjEuMy4wXCIsXG4gICAgICAgICAgICBiYWxhbmNlV2FybmluZzoge3BlZXIxOiBbXSwgcGVlcjI6IFtdfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UgPSB0aGlzLl9jaGVja0JhbGFuY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblRyeEluY2x1ZGVkID0gdGhpcy5vblRyeEluY2x1ZGVkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID0gQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQ7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5mcm9tX25hbWUpIHRoaXMuc2V0U3RhdGUoe2Zyb21fbmFtZTogY3VycmVudEFjY291bnR9KTtcbiAgICB9XG5cbiAgICBmcm9tQ2hhbmdlZChmcm9tX25hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9uYW1lfSk7XG4gICAgfVxuXG4gICAgZXNjcm93QWNjb3VudENoYW5nZWQoZXNjcm93X2FjY291bnRfbmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlc2Nyb3dfYWNjb3VudF9uYW1lfSk7XG4gICAgfVxuXG4gICAgb25Gcm9tQWNjb3VudENoYW5nZWQoZnJvbV9hY2NvdW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgZnJvbV9iYXJ0ZXI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21fYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2Fzc2V0X2lkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2Fzc2V0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2ZlZUFzc2V0OiBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2hhc1Bvb2xCYWxhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2JhbGFuY2VFcnJvcjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRXNjcm93QWNjb3VudENoYW5nZWQoZXNjcm93X2FjY291bnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlc2Nyb3dfYWNjb3VudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b0NoYW5nZWQodG9fbmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19uYW1lfSk7XG4gICAgfVxuXG4gICAgb25Ub0FjY291bnRDaGFuZ2VkKHRvX2FjY291bnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgdG9fYmFydGVyOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b19hbW91bnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvX2Fzc2V0X2lkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0b19hc3NldDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdG9fZmVlQXNzZXQ6IG5ldyBBc3NldCh7YW1vdW50OiAwLCBhc3NldF9pZDogXCIxLjMuMFwifSksXG4gICAgICAgICAgICAgICAgICAgIHRvX2hhc1Bvb2xCYWxhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0b19iYWxhbmNlRXJyb3I6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkZyb21BbW91bnRDaGFuZ2VkKGluZGV4LCBlKSB7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gZS5hc3NldDtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gZS5hbW91bnQ7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnJvbV9iYXJ0ZXIgPSBbLi4udGhpcy5zdGF0ZS5mcm9tX2JhcnRlcl07XG5cbiAgICAgICAgZnJvbV9iYXJ0ZXJbaW5kZXhdID0ge1xuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBmcm9tX2Ftb3VudDogYW1vdW50LFxuICAgICAgICAgICAgZnJvbV9hc3NldDogYXNzZXQsXG4gICAgICAgICAgICBmcm9tX2Fzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIGZyb21fYmFsYW5jZUVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGZyb21fZmVlQXNzZXQ6IGZyb21fYmFydGVyW2luZGV4XS5mcm9tX2ZlZUFzc2V0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcm9tX2JhcnRlcjogZnJvbV9iYXJ0ZXIsXG4gICAgICAgICAgICAgICAgZnJvbV9lcnJvcjogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UoXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYmFydGVyW2luZGV4XS5mcm9tX2ZlZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBhc3NldCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZyb21fYmFydGVyW2luZGV4XS5mcm9tX2ZlZUFzc2V0LmFzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2JhcnRlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0Ftb3VudHNUb3RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uVG9BbW91bnRDaGFuZ2VkKGluZGV4LCBlKSB7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gZS5hc3NldDtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gZS5hbW91bnQ7XG4gICAgICAgIGlmICghYXNzZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9fYmFydGVyID0gWy4uLnRoaXMuc3RhdGUudG9fYmFydGVyXTtcblxuICAgICAgICB0b19iYXJ0ZXJbaW5kZXhdID0ge1xuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICB0b19hbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgIHRvX2Fzc2V0OiBhc3NldCxcbiAgICAgICAgICAgIHRvX2Fzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHRvX2ZlZUFzc2V0OiB0b19iYXJ0ZXJbaW5kZXhdLnRvX2ZlZUFzc2V0LFxuICAgICAgICAgICAgdG9fYmFsYW5jZUVycm9yOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9fYmFydGVyOiB0b19iYXJ0ZXIsXG4gICAgICAgICAgICAgICAgdG9fZXJyb3I6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlKFxuICAgICAgICAgICAgICAgICAgICB0b19iYXJ0ZXJbaW5kZXhdLnRvX2ZlZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudG9fYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdG9fYmFydGVyW2luZGV4XS50b19mZWVBc3NldC5hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgdG9fYmFydGVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQW1vdW50c1RvdGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2NoZWNrQmFsYW5jZShcbiAgICAgICAgZmVlQW1vdW50LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIGFzc2V0LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgZmVlX2Fzc2V0X2lkLFxuICAgICAgICBiYXJ0ZXJcbiAgICApIHtcbiAgICAgICAgaWYgKCFhc3NldCB8fCAhYWNjb3VudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBiYWxhbmNlSUQgPSBhY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGFzc2V0LmdldChcImlkXCIpXSk7XG4gICAgICAgIGNvbnN0IGZlZUJhbGFuY2VJRCA9IGFjY291bnQuZ2V0SW4oW1wiYmFsYW5jZXNcIiwgZmVlQW1vdW50LmFzc2V0X2lkXSk7XG4gICAgICAgIGlmICghYXNzZXQgfHwgIWFjY291bnQpIHJldHVybjtcbiAgICAgICAgaWYgKCFiYWxhbmNlSUQpXG4gICAgICAgICAgICBpZiAoZnJvbSkge1xuICAgICAgICAgICAgICAgIGJhcnRlcltpbmRleF0uZnJvbV9iYWxhbmNlRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtmcm9tX2JhcnRlcjogYmFydGVyfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhcnRlcltpbmRleF0udG9fYmFsYW5jZUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7dG9fYmFydGVyOiBiYXJ0ZXJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlSUQpO1xuICAgICAgICBsZXQgZmVlQmFsYW5jZU9iamVjdCA9IGZlZUJhbGFuY2VJRFxuICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldE9iamVjdChmZWVCYWxhbmNlSUQpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmICghZmVlQmFsYW5jZU9iamVjdCB8fCBmZWVCYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9iYXJ0ZXI6IGJhcnRlcn0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19iYXJ0ZXI6IGJhcnRlcn0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYmFsYW5jZU9iamVjdCB8fCAhZmVlQW1vdW50KSByZXR1cm47XG4gICAgICAgIGlmICghYW1vdW50KVxuICAgICAgICAgICAgaWYgKGZyb20pIHtcbiAgICAgICAgICAgICAgICBiYXJ0ZXJbaW5kZXhdLmZyb21fYmFsYW5jZUVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2Zyb21fYmFydGVyOiBiYXJ0ZXJ9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmFydGVyW2luZGV4XS50b19iYWxhbmNlRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7dG9fYmFydGVyOiBiYXJ0ZXJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFzQmFsYW5jZSA9IGNoZWNrQmFsYW5jZShcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgZmVlQW1vdW50LFxuICAgICAgICAgICAgYmFsYW5jZU9iamVjdFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChoYXNCYWxhbmNlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICBiYXJ0ZXJbaW5kZXhdLmZyb21fYmFsYW5jZUVycm9yID0gIWhhc0JhbGFuY2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7ZnJvbV9iYXJ0ZXI6IGJhcnRlcn0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFydGVyW2luZGV4XS50b19iYWxhbmNlRXJyb3IgPSAhaGFzQmFsYW5jZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHt0b19iYXJ0ZXI6IGJhcnRlcn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY29uc3Qge2Zyb21fYWNjb3VudCwgZnJvbV9lcnJvciwgdG9fYWNjb3VudCwgdG9fZXJyb3J9ID0gc3RhdGU7XG5cbiAgICAgICAgbGV0IGdldEFzc2V0VHlwZXMgPSAoYWNjb3VudCwgZXJyKSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBbXSxcbiAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBbXTtcbiAgICAgICAgICAgIGlmICghKGFjY291bnQgJiYgYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSAmJiAhZXJyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7YXNzZXRfdHlwZXMsIGZlZV9hc3NldF90eXBlc307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICAgICAgYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChhY2NvdW50X2JhbGFuY2VzW2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlT2JqZWN0ICYmIGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5zcGxpY2UoYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMuc3BsaWNlKGZlZV9hc3NldF90eXBlcy5pbmRleE9mKGtleSksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge2Fzc2V0X3R5cGVzLCBmZWVfYXNzZXRfdHlwZXN9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBmcm9tID0gZ2V0QXNzZXRUeXBlcyhmcm9tX2FjY291bnQsIGZyb21fZXJyb3IpO1xuICAgICAgICBsZXQgdG8gPSBnZXRBc3NldFR5cGVzKHRvX2FjY291bnQsIHRvX2Vycm9yKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnJvbV9hc3NldF90eXBlczogZnJvbS5hc3NldF90eXBlcyB8fCBbXSxcbiAgICAgICAgICAgIHRvX2Fzc2V0X3R5cGVzOiB0by5hc3NldF90eXBlcyB8fCBbXSxcbiAgICAgICAgICAgIGZyb21fZmVlX2Fzc2V0X3R5cGVzOiBmcm9tLmZlZV9hc3NldF90eXBlcyB8fCBbXSxcbiAgICAgICAgICAgIHRvX2ZlZV9hc3NldF90eXBlczogdG8uZmVlX2Fzc2V0X3R5cGVzIHx8IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkRnJvbUFtb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5mcm9tX2JhcnRlci5wdXNoKHtcbiAgICAgICAgICAgIGZyb21fYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgZnJvbV9hc3NldF9pZDogbnVsbCxcbiAgICAgICAgICAgIGZyb21fYXNzZXQ6IG51bGwsXG4gICAgICAgICAgICBmcm9tX2ZlZUFzc2V0OiBuZXcgQXNzZXQoe2Ftb3VudDogMCwgYXNzZXRfaWQ6IFwiMS4zLjBcIn0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tX2JhcnRlcjogdGhpcy5zdGF0ZS5mcm9tX2JhcnRlcn0pO1xuICAgIH1cblxuICAgIGFkZFRvQW1vdW50KCkge1xuICAgICAgICB0aGlzLnN0YXRlLnRvX2JhcnRlci5wdXNoKHtcbiAgICAgICAgICAgIHRvX2Ftb3VudDogXCJcIixcbiAgICAgICAgICAgIHRvX2Fzc2V0X2lkOiBudWxsLFxuICAgICAgICAgICAgdG9fYXNzZXQ6IG51bGwsXG4gICAgICAgICAgICB0b19mZWVBc3NldDogbmV3IEFzc2V0KHthbW91bnQ6IDAsIGFzc2V0X2lkOiBcIjEuMy4wXCJ9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9fYmFydGVyOiB0aGlzLnN0YXRlLnRvX2JhcnRlcn0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tX2Vycm9yOiBudWxsLCB0b19lcnJvcjogbnVsbH0pO1xuICAgICAgICBsZXQgc2VuZEFtb3VudDtcbiAgICAgICAgbGV0IHRyYW5zZmVyX2xpc3QgPSBbXTtcblxuICAgICAgICBsZXQgcHJvcG9zZXIgPSBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudDtcblxuICAgICAgICBsZXQgbGVmdF9hY2NvdW50ID0gdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQ7XG4gICAgICAgIGxldCBlc2Nyb3dNZW1vID1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcImVzY3Jvd1wiXVswXSAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZXNjcm93XCJdWzBdLm1lc3NhZ2U7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0VzY3JvdyAmJiB0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93KSB7XG4gICAgICAgICAgICBsZWZ0X2FjY291bnQgPSB0aGlzLnN0YXRlLmVzY3Jvd19hY2NvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0VzY3Jvdykge1xuICAgICAgICAgICAgbGV0IGVzY3Jvd19wYXltZW50ID0gdGhpcy5zdGF0ZS5lc2Nyb3dfcGF5bWVudF9jaGFuZ2VkXG4gICAgICAgICAgICAgICAgPyBuZXcgQXNzZXQoe3JlYWw6IHRoaXMuc3RhdGUuZXNjcm93X3BheW1lbnR9KS5nZXRBbW91bnQoKVxuICAgICAgICAgICAgICAgIDogZmVlKHRydWUpO1xuICAgICAgICAgICAgaWYgKGVzY3Jvd19wYXltZW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHRyYW5zZmVyX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZXNjcm93X3BheW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBcIjEuMy4wXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lbW86IGVzY3Jvd01lbW8gPyBuZXcgQnVmZmVyKGVzY3Jvd01lbW8sIFwidXRmLThcIikgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmZWVBc3NldDogdGhpcy5zdGF0ZS5lc2Nyb3dGZWVBc3NldElkLFxuICAgICAgICAgICAgICAgICAgICBwcm9wb3NlX2FjY291bnQ6IHByb3Bvc2VyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlLmZyb21fYmFydGVyLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc3NldCA9IGl0ZW0uZnJvbV9hc3NldDtcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSBpdGVtLmZyb21fYW1vdW50O1xuICAgICAgICAgICAgc2VuZEFtb3VudCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgcmVhbDogYW1vdW50LFxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IGFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBmcm9tQmFydGVyTWVtbyA9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZnJvbV9iYXJ0ZXJcIl1baW5kZXhdICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZnJvbV9iYXJ0ZXJcIl1baW5kZXhdLm1lc3NhZ2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dFc2Nyb3cgJiYgdGhpcy5zdGF0ZS5zZW5kX3RvX2VzY3Jvdykge1xuICAgICAgICAgICAgICAgIHRyYW5zZmVyX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogc2VuZEFtb3VudC5nZXRBbW91bnQoKSxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICBtZW1vOiBlc2Nyb3dNZW1vID8gbmV3IEJ1ZmZlcihlc2Nyb3dNZW1vLCBcInV0Zi04XCIpIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZmVlQXNzZXQ6IGl0ZW0uZnJvbV9mZWVBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmZyb21fZmVlQXNzZXQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyYW5zZmVyX2xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgZnJvbV9hY2NvdW50OiBsZWZ0X2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgdG9fYWNjb3VudDogdGhpcy5zdGF0ZS50b19hY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIGFtb3VudDogc2VuZEFtb3VudC5nZXRBbW91bnQoKSxcbiAgICAgICAgICAgICAgICBhc3NldDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgbWVtbzogZnJvbUJhcnRlck1lbW9cbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgQnVmZmVyKGZyb21CYXJ0ZXJNZW1vLCBcInV0Zi04XCIpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICBmZWVBc3NldDogaXRlbS5mcm9tX2ZlZUFzc2V0XG4gICAgICAgICAgICAgICAgICAgID8gaXRlbS5mcm9tX2ZlZUFzc2V0LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIDogXCIxLjMuMFwiLFxuICAgICAgICAgICAgICAgIHByb3Bvc2VfYWNjb3VudDogcHJvcG9zZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93RXNjcm93ICYmICF0aGlzLnN0YXRlLnNlbmRfdG9fZXNjcm93KSB7XG4gICAgICAgICAgICB0cmFuc2Zlcl9saXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudDogdGhpcy5zdGF0ZS5lc2Nyb3dfYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50OiB0aGlzLnN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgICAgICAgICAgYXNzZXQ6IFwiMS4zLjBcIixcbiAgICAgICAgICAgICAgICBtZW1vOiBudWxsLFxuICAgICAgICAgICAgICAgIGZlZUFzc2V0OiB0aGlzLnN0YXRlLmVzY3Jvd0ZlZUFzc2V0SWQsXG4gICAgICAgICAgICAgICAgcHJvcG9zZV9hY2NvdW50OiBwcm9wb3NlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXRlLnRvX2JhcnRlci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBpdGVtLnRvX2Fzc2V0O1xuICAgICAgICAgICAgbGV0IGFtb3VudCA9IGl0ZW0udG9fYW1vdW50O1xuICAgICAgICAgICAgbGV0IHRvQmFydGVyTWVtbyA9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1widG9fYmFydGVyXCJdW2luZGV4XSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcInRvX2JhcnRlclwiXVtpbmRleF0ubWVzc2FnZTtcbiAgICAgICAgICAgIHNlbmRBbW91bnQgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIHJlYWw6IGFtb3VudCxcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJhbnNmZXJfbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQ6IHRoaXMuc3RhdGUudG9fYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50OiB0aGlzLnN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHNlbmRBbW91bnQuZ2V0QW1vdW50KCksXG4gICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIG1lbW86IHRvQmFydGVyTWVtbyA/IG5ldyBCdWZmZXIodG9CYXJ0ZXJNZW1vLCBcInV0Zi04XCIpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBmZWVBc3NldDogaXRlbS50b19mZWVBc3NldFxuICAgICAgICAgICAgICAgICAgICA/IGl0ZW0udG9fZmVlQXNzZXQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgOiBcIjEuMy4wXCIsXG4gICAgICAgICAgICAgICAgcHJvcG9zZV9hY2NvdW50OiBwcm9wb3NlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEFwcGxpY2F0aW9uQXBpLnRyYW5zZmVyX2xpc3QoXG4gICAgICAgICAgICB0cmFuc2Zlcl9saXN0LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9wb3NhbF9mZWUuYXNzZXRfaWRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblRyeEluY2x1ZGVkKGNvbmZpcm1fc3RvcmVfc3RhdGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5pbmNsdWRlZCAmJlxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5icm9hZGNhc3RlZF90cmFuc2FjdGlvblxuICAgICAgICApIHtcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnVubGlzdGVuKHRoaXMub25UcnhJbmNsdWRlZCk7XG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS5yZXNldCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpcm1fc3RvcmVfc3RhdGUuY2xvc2VkKSB7XG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS51bmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTWVtb0NoYW5nZWQgPSAodHlwZSwgaW5kZXgpID0+IGUgPT4ge1xuICAgICAgICBjb25zdCBtZW1vcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUubWVtbyk7XG4gICAgICAgIG1lbW9zW3R5cGVdW2luZGV4XSA9IHttZXNzYWdlOiBlLnRhcmdldC52YWx1ZSwgc2hvd246IHRydWV9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vOiBtZW1vc30pO1xuICAgIH07XG5cbiAgICByZW5kZXJNZW1vRmllbGQodHlwZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3Qge21lbW99ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgbWVtb1ZhbHVlID1cbiAgICAgICAgICAgIG1lbW9bdHlwZV1baW5kZXhdICYmIG1lbW9bdHlwZV1baW5kZXhdLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA/IG1lbW9bdHlwZV1baW5kZXhdLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5tZW1vXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbW9WYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NZW1vQ2hhbmdlZCh0eXBlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZU1lbW9PcGVuID0gKHR5cGUsIGluZGV4KSA9PiBlID0+IHtcbiAgICAgICAgY29uc3QgbWVtb3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLm1lbW8pO1xuICAgICAgICBtZW1vc1t0eXBlXVtpbmRleF0gPSB7bWVzc2FnZTogXCJcIiwgc2hvd246IHRydWV9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttZW1vOiBtZW1vc30pO1xuICAgIH07XG5cbiAgICBnZXRCYWxhbmNlKGFjY291bnQsIGFzc2V0VHlwZSkge1xuICAgICAgICByZXR1cm4gQ2hhaW5TdG9yZS5nZXRBY2NvdW50QmFsYW5jZShhY2NvdW50LCBhc3NldFR5cGUpO1xuICAgIH1cblxuICAgIGNoZWNrQW1vdW50c1RvdGFsKCkge1xuICAgICAgICBjb25zdCB7ZnJvbV9iYXJ0ZXIsIHRvX2JhcnRlciwgZnJvbV9hY2NvdW50LCB0b19hY2NvdW50fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBwZWVyMUFtb3VudHMgPSB7fTtcbiAgICAgICAgbGV0IHBlZXIyQW1vdW50cyA9IHt9O1xuXG4gICAgICAgIC8vIGZvciBwZWVyMVxuICAgICAgICBmcm9tX2JhcnRlci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmZyb21fYW1vdW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBlZXIxQW1vdW50cy5oYXNPd25Qcm9wZXJ0eShpdGVtLmZyb21fYXNzZXRfaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlZXIxQW1vdW50c1tpdGVtLmZyb21fYXNzZXRfaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihwZWVyMUFtb3VudHNbaXRlbS5mcm9tX2Fzc2V0X2lkXS5hbW91bnQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaXRlbS5mcm9tX2Ftb3VudCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IGl0ZW0uZnJvbV9hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGl0ZW0uZnJvbV9hc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwZWVyMUFtb3VudHNbaXRlbS5mcm9tX2Fzc2V0X2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKGl0ZW0uZnJvbV9hbW91bnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBpdGVtLmZyb21fYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBpdGVtLmZyb21fYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcGVlcjFBbW91bnRzRm9ybWF0ZWQgPSBtYXAocGVlcjFBbW91bnRzLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9mQ3VycmVudEFzc2V0ID0gdGhpcy5nZXRCYWxhbmNlKGZyb21fYWNjb3VudCwga2V5KTtcbiAgICAgICAgICAgIGxldCBkZWNpbWFscyA9IE1hdGgubWF4KDAsIGl0ZW0ucHJlY2lzaW9uKTtcbiAgICAgICAgICAgIGxldCBmb3JtYXRlZEJhbGFuY2UgPSBiYWxhbmNlT2ZDdXJyZW50QXNzZXRcbiAgICAgICAgICAgICAgICA/IG1vdmVEZWNpbWFsKGJhbGFuY2VPZkN1cnJlbnRBc3NldCwgZGVjaW1hbHMpXG4gICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgaXRlbS5hc3NldElkID0ga2V5O1xuICAgICAgICAgICAgaWYgKGl0ZW0uYW1vdW50ID4gZm9ybWF0ZWRCYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgaXRlbS53YXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtLmJhbGFuY2UgPSBmb3JtYXRlZEJhbGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZm9yIHBlZXIyXG4gICAgICAgIHRvX2JhcnRlci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnRvX2Ftb3VudCkge1xuICAgICAgICAgICAgICAgIGlmIChwZWVyMkFtb3VudHMuaGFzT3duUHJvcGVydHkoaXRlbS50b19hc3NldF9pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVlcjJBbW91bnRzW2l0ZW0udG9fYXNzZXRfaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihwZWVyMkFtb3VudHNbaXRlbS50b19hc3NldF9pZF0uYW1vdW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGl0ZW0udG9fYW1vdW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogaXRlbS50b19hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGl0ZW0udG9fYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGVlcjJBbW91bnRzW2l0ZW0udG9fYXNzZXRfaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBOdW1iZXIoaXRlbS50b19hbW91bnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBpdGVtLnRvX2Fzc2V0LmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogaXRlbS50b19hc3NldC5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwZWVyMkFtb3VudHNGb3JtYXRlZCA9IG1hcChwZWVyMkFtb3VudHMsIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBiYWxhbmNlT2ZDdXJyZW50QXNzZXQgPSB0aGlzLmdldEJhbGFuY2UodG9fYWNjb3VudCwga2V5KTtcbiAgICAgICAgICAgIGxldCBkZWNpbWFscyA9IE1hdGgubWF4KDAsIGl0ZW0ucHJlY2lzaW9uKTtcbiAgICAgICAgICAgIGxldCBmb3JtYXRlZEJhbGFuY2UgPSBiYWxhbmNlT2ZDdXJyZW50QXNzZXRcbiAgICAgICAgICAgICAgICA/IG1vdmVEZWNpbWFsKGJhbGFuY2VPZkN1cnJlbnRBc3NldCwgZGVjaW1hbHMpXG4gICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgaXRlbS5hc3NldElkID0ga2V5O1xuICAgICAgICAgICAgaWYgKGl0ZW0uYW1vdW50ID4gZm9ybWF0ZWRCYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgaXRlbS53YXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpdGVtLmJhbGFuY2UgPSBmb3JtYXRlZEJhbGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBiYWxhbmNlV2FybmluZzoge1xuICAgICAgICAgICAgICAgIHBlZXIxOiBwZWVyMUFtb3VudHNGb3JtYXRlZCxcbiAgICAgICAgICAgICAgICBwZWVyMjogcGVlcjJBbW91bnRzRm9ybWF0ZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyQmFsYW5jZVdhcm5pbmdzKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiYWxhbmNlV2FybmluZzoge3BlZXIxLCBwZWVyMn1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBpc1BlZXIxV2FybmluZyA9IHBlZXIxLnNvbWUoaXRlbSA9PiAhIWl0ZW0ud2FybmluZyk7XG4gICAgICAgIGxldCBpc1BlZXIyV2FybmluZyA9IHBlZXIyLnNvbWUoaXRlbSA9PiAhIWl0ZW0ud2FybmluZyk7XG5cbiAgICAgICAgbGV0IHBlZXIxVGV4dCA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5iYXJ0ZXIucGVlcl9sZWZ0XCIpO1xuICAgICAgICBsZXQgcGVlcjJUZXh0ID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwic2hvd2Nhc2VzLmJhcnRlci5wZWVyX3JpZ2h0XCIpO1xuICAgICAgICBsZXQgcGVlcjFDb21wb25lbnQgPSBpc1BlZXIxV2FybmluZyA/IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXhXaWR0aDogXCIyNXJlbVwifX0+XG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ190b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZXI6IHBlZXIxVGV4dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7cGVlcjEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS53YXJuaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjEwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uYXNzZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ19saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3N5bWJvbDogaXRlbS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9iYWxhbmNlOiBpdGVtLmJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9hbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcbiAgICAgICAgbGV0IHBlZXIyQ29tcG9uZW50ID0gaXNQZWVyMldhcm5pbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWF4V2lkdGg6IFwiMjVyZW1cIn19PlxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5iYWxhbmNlX3dhcm5pbmdfdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZWVyOiBwZWVyMlRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3BlZXIyLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ud2FybmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjEwcHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5hc3NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ19saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfc3ltYm9sOiBpdGVtLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9iYWxhbmNlOiBpdGVtLmJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJ0ZXItYmFsYW5jZS13YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAge2lzUGVlcjFXYXJuaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3BlZXIxQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuYmFsYW5jZV93YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y3Vyc29yOiBcImhlbHBcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXIxVGV4dCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpc1BlZXIyV2FybmluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwZWVyMkNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmJhbGFuY2Vfd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2N1cnNvcjogXCJoZWxwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZWVyMlRleHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5iYWxhbmNlX3dhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkZlZUNoYW5nZWRQZWVyMUNyZWF0ZVByb3Bvc2FsKGFzc2V0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb3Bvc2FsX2ZlZTogYXNzZXR9KTtcbiAgICB9XG5cbiAgICBvbkZlZUNoYW5nZWRQZWVyMUluUHJvcG9zYWwoYXNzZXQpIHtcbiAgICAgICAgbGV0IF9iYXJ0ZXIgPSB0aGlzLnN0YXRlLmZyb21fYmFydGVyLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0udG9fZmVlQXNzZXQgPSBhc3NldDtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9iYXJ0ZXI6IF9iYXJ0ZXJ9KTtcbiAgICB9XG5cbiAgICBvbkZlZUNoYW5nZWRQZWVyMkluUHJvcG9zYWwoYXNzZXQpIHtcbiAgICAgICAgbGV0IF9iYXJ0ZXIgPSB0aGlzLnN0YXRlLnRvX2JhcnRlci5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnRvX2ZlZUFzc2V0ID0gYXNzZXQ7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvX2JhcnRlcjogX2JhcnRlcn0pO1xuICAgIH1cblxuICAgIG9uRXNjcm93RmVlQ2hhbmdlZChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlc2Nyb3dGZWVBc3NldElkOiBhc3NldC5hc3NldF9pZH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGZyb21fbmFtZSxcbiAgICAgICAgICAgIHRvX25hbWUsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXG4gICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgZnJvbV9iYXJ0ZXIsXG4gICAgICAgICAgICB0b19iYXJ0ZXIsXG4gICAgICAgICAgICBhbW91bnRfaW5kZXgsXG4gICAgICAgICAgICBmcm9tX2Vycm9yLFxuICAgICAgICAgICAgdG9fZXJyb3JcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7ZnJvbV9hc3NldF90eXBlcywgdG9fYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XG4gICAgICAgIGxldCBzbWFsbFNjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoIDwgODUwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBsZXQgYXNzZXRGcm9tTGlzdCA9IFtdO1xuICAgICAgICBsZXQgYXNzZXRUb0xpc3QgPSBbXTtcbiAgICAgICAgbGV0IGFzc2V0RnJvbVN5bWJvbCA9IFwiXCI7XG4gICAgICAgIGxldCBhc3NldFRvU3ltYm9sID0gXCJcIjtcblxuICAgICAgICBjb25zdCBjaGVja0Ftb3VudFZhbGlkID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBmcm9tX2JhcnRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoaXRlbS5mcm9tX2Ftb3VudCwgLywvZywgXCJcIilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTihhbW91bnRWYWx1ZSkgfHwgYW1vdW50VmFsdWUgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0b19iYXJ0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKGl0ZW0udG9fYW1vdW50LCAvLC9nLCBcIlwiKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKGFtb3VudFZhbHVlKSB8fCBhbW91bnRWYWx1ZSA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGV4cGxpY3RQcmljZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGNoZWNrQW1vdW50VmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21BbW91bnQgPSBwYXJzZUZsb2F0KGZyb21fYmFydGVyWzBdLmZyb21fYW1vdW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b0Ftb3VudCA9IHBhcnNlRmxvYXQodG9fYmFydGVyWzBdLnRvX2Ftb3VudCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZnJvbUFtb3VudCAvIHRvQW1vdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmZWUgPSBmcm9tID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZyb21fYmFydGVyKTtcbiAgICAgICAgICAgIGxldCBmZWUgPSAwO1xuICAgICAgICAgICAgaWYgKGZyb20pIHtcbiAgICAgICAgICAgICAgICBmZWUgPSBmZWU7XG4gICAgICAgICAgICAgICAgZnJvbV9iYXJ0ZXIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmVlICs9IGl0ZW0uZnJvbV9mZWVBc3NldC5fcmVhbF9hbW91bnQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvX2JhcnRlci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBmZWUgKz0gaXRlbS50b19mZWVBc3NldC5fcmVhbF9hbW91bnQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmZWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJhbGFuY2VFcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZnJvbV9iYXJ0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5mcm9tX2JhbGFuY2VFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRvX2JhcnRlcikge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmZyb21fYmFsYW5jZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaXNFc2Nyb3dOb3RWYWxpZCA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dFc2Nyb3cgJiYgIXRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQ7XG5cbiAgICAgICAgLy8gc2hvdWxkIHRoZSB1c2VyIGJlIG9ubHkgYWxsb3dlZCB0byByZXF1ZXN0IGZvciBleGlzdGluZyBmdW5kcz9cbiAgICAgICAgLy8gYmFsYW5jZUVycm9yKCkgfHxcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XG4gICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdG9fYWNjb3VudCB8fFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LmdldChcImlkXCIpID09IHRvX2FjY291bnQuZ2V0KFwiaWRcIikgfHxcbiAgICAgICAgICAgIHRvX2Vycm9yIHx8XG4gICAgICAgICAgICAhY2hlY2tBbW91bnRWYWxpZCgpIHx8XG4gICAgICAgICAgICBmcm9tX2Vycm9yIHx8XG4gICAgICAgICAgICBpc0VzY3Jvd05vdFZhbGlkO1xuXG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSAoYWNjb3VudCwgYmFsYW5jZUVycm9yLCBhc3NldF90eXBlcywgYXNzZXQpID0+IHtcbiAgICAgICAgICAgIGlmIChhY2NvdW50ICYmIGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuXG4gICAgICAgICAgICAgICAgbGV0IF9lcnJvciA9IGJhbGFuY2VFcnJvciA/IFwiaGFzLWVycm9yXCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChhc3NldF90eXBlc1swXSk7XG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF90eXBlc1swXTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIiNBMDlGOUYgMXB4IGRvdHRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e19lcnJvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0Z1bmRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBmcm9tQW1vdW50U2VsZWN0b3IgPSBmcm9tX2JhcnRlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNzZXRTeW1ib2wgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGl0ZW0uZnJvbV9hc3NldCkge1xuICAgICAgICAgICAgICAgIGFzc2V0U3ltYm9sID0gaXRlbS5mcm9tX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgICAgICBhc3NldEZyb21MaXN0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIFtpdGVtLmZyb21fYW1vdW50IHx8IDAsIGFzc2V0U3ltYm9sXS5qb2luKFwiIFwiKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpc01lbW9TaG93biA9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZnJvbV9iYXJ0ZXJcIl1baW5kZXhdICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1wiZnJvbV9iYXJ0ZXJcIl1baW5kZXhdLnNob3duO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YW1vdW50X2luZGV4Kyt9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc01lbW9TaG93biAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5hZGRfbWVtb19maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcExlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVNZW1vT3BlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb21fYmFydGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLW1lbW8tYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLmJhcnRlcmluZ19hc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmZyb21fYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRnJvbUFtb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbV9hc3NldF90eXBlcy5sZW5ndGggPiAwICYmIGl0ZW0uZnJvbV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmZyb21fYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5mcm9tX2Fzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uZnJvbV9hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmcm9tX2Fzc2V0X3R5cGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17ZnJvbV9hc3NldF90eXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21fYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5mcm9tX2JhbGFuY2VFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbV9hc3NldF90eXBlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5mcm9tX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05hTj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7aXNNZW1vU2hvd24gJiYgdGhpcy5yZW5kZXJNZW1vRmllbGQoXCJmcm9tX2JhcnRlclwiLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBhc3NldEZyb21TeW1ib2wgPSBhc3NldFN5bWJvbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHRvQW1vdW50U2VsZWN0b3IgPSB0b19iYXJ0ZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFzc2V0U3ltYm9sID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChpdGVtLnRvX2Fzc2V0KSB7XG4gICAgICAgICAgICAgICAgYXNzZXRTeW1ib2wgPSBpdGVtLnRvX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgICAgICBhc3NldFRvTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBbaXRlbS50b19hbW91bnQgfHwgMCwgaXRlbS50b19hc3NldC5nZXQoXCJzeW1ib2xcIildLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpc01lbW9TaG93biA9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZW1vW1widG9fYmFydGVyXCJdW2luZGV4XSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWVtb1tcInRvX2JhcnRlclwiXVtpbmRleF0uc2hvd247XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ftb3VudF9pbmRleCsrfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXNNZW1vU2hvd24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAuYWRkX21lbW9fZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWVtb09wZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b19iYXJ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtbWVtby1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5iYXJ0ZXIuYmFydGVyaW5nX2Fzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0udG9fYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVG9BbW91bnRDaGFuZ2VkLmJpbmQodGhpcywgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9fYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBpdGVtLnRvX2Fzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0udG9fYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS50b19hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLnRvX2Fzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRvX2Fzc2V0X3R5cGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17dG9fYXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRvX2JhbGFuY2VFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9fYXNzZXRfdHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udG9fYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtpc01lbW9TaG93biAmJiB0aGlzLnJlbmRlck1lbW9GaWVsZChcInRvX2JhcnRlclwiLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBhc3NldFRvU3ltYm9sID0gYXNzZXRTeW1ib2w7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhY2NvdW50X2Zyb20gPSAoXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJhcnRlci5wZWVyX2xlZnRcIn0gLz5cbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic2hvd2Nhc2VzLmJhcnRlci5hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGFsbG93UHViS2V5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBhbGxvd1VwcGVyY2FzZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnJvbV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mcm9tQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uRnJvbUFjY291bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVJbWFnZVxuICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZnJvbV9hY2NvdW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmcm9tQW1vdW50U2VsZWN0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjEwcHhcIiwgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRGcm9tQW1vdW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFmcm9tX2FjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmZyb21fYmFydGVyW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZnJvbV9iYXJ0ZXIubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5mcm9tX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIEFkZCBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGFjY291bnRfdG8gPSAoXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJhcnRlci5wZWVyX3JpZ2h0XCJ9IC8+XG4gICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5iYXJ0ZXIuYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBhbGxvd1B1YktleT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dVcHBlcmNhc2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RvX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXt0b19uYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vblRvQWNjb3VudENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgaGlkZUltYWdlXG4gICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt0b19hY2NvdW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b0Ftb3VudFNlbGVjdG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxMHB4XCIsIHBhZGRpbmdCb3R0b206IFwiMTBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkVG9BbW91bnQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRvX2FjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnRvX2JhcnRlcltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRvX2JhcnRlci5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnRvX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIEFkZCBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGFjdGlvbl9lcnJvcl9rZXkgPSBcInNob3djYXNlcy5iYXJ0ZXIubm90X2NvbXBsZXRlXCI7XG4gICAgICAgIGlmIChpc1N1Ym1pdE5vdFZhbGlkKSB7XG4gICAgICAgICAgICBpZiAoIWZyb21fYWNjb3VudCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbl9lcnJvcl9rZXkgPVxuICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuZXJyb3JfZmlsbF9pbl9wZWVyX2xlZnRfbmFtZVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdG9fYWNjb3VudCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbl9lcnJvcl9rZXkgPVxuICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuZXJyb3JfZmlsbF9pbl9wZWVyX3JpZ2h0X25hbWVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbV9hY2NvdW50LmdldChcImlkXCIpID09IHRvX2FjY291bnQuZ2V0KFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25fZXJyb3Jfa2V5ID0gXCJzaG93Y2FzZXMuYmFydGVyLmVycm9yX3NhbWVfbmFtZVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tBbW91bnRWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uX2Vycm9yX2tleSA9XG4gICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5lcnJvcl9maWxsX2luX3ZhbGlkX2Fzc2V0X2Ftb3VudFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0VzY3Jvd05vdFZhbGlkKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uX2Vycm9yX2tleSA9IFwic2hvd2Nhc2VzLmJhcnRlci5lcnJvcl9maWxsX2luX2VzY3Jvd19uYW1lXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0VzY3JvdyAmJlxuICAgICAgICAgICAgICAgIChmcm9tX2FjY291bnQuZ2V0KFwiaWRcIikgPT1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lc2Nyb3dfYWNjb3VudC5nZXQoXCJpZFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICB0b19hY2NvdW50LmdldChcImlkXCIpID09IHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFwiaWRcIikpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25fZXJyb3Jfa2V5ID0gXCJzaG93Y2FzZXMuYmFydGVyLmVycm9yX3NhbWVfbmFtZV9lc2Nyb3dcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvZmZlcnMgPSAoXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICB7IWlzU3VibWl0Tm90VmFsaWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIiBzdHlsZT17e2ZvbnRTaXplOiBcIjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5iYXJ0ZXIuYWN0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZWVyX2xlZnQ6IGZyb21fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHNfbGVmdDogYXNzZXRGcm9tTGlzdC5qb2luKFwiLCBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlcl9yaWdodDogdG9fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHNfcmlnaHQ6IGFzc2V0VG9MaXN0LmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RXNjcm93ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuc2VuZF90b19lc2Nyb3cgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5lc2Nyb3dfYXNfd2l0bmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc2Nyb3c6IHRoaXMuc3RhdGUuZXNjcm93X2FjY291bnQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0VzY3JvdyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VuZF90b19lc2Nyb3cgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5lc2Nyb3dfYXNfY3VzdG9kaWFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzY3JvdzogdGhpcy5zdGF0ZS5lc2Nyb3dfYWNjb3VudC5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2lzU3VibWl0Tm90VmFsaWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKGFjdGlvbl9lcnJvcl9rZXkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuYWRkX2VzY3Jvd190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wUmlnaHRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dFc2Nyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlbW92ZV9lc2Nyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYWRkX2VzY3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVzY3Jvdy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0VzY3Jvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2hvd2Nhc2VzLmJhcnRlci5yZW1vdmVfZXNjcm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNob3djYXNlcy5iYXJ0ZXIuYWRkX2VzY3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAge2Zyb21fYmFydGVyLmxlbmd0aCA9PT0gNTAwICYmIHRvX2JhcnRlci5sZW5ndGggPT09IDUwMCA/ICggLy8gZGVhY3RpdmF0ZSBmb3Igbm93XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW1vdW50LXNlbGVjdG9yXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuZXhwbGljdF9wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWwgaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2V4cGxpY3RQcmljZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwgc2VsZWN0IGZsb2F0aW5nLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7YXNzZXRGcm9tU3ltYm9sfS8ke2Fzc2V0VG9TeW1ib2x9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgdG90YWxGZWVGcm9tID0gKFxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3tib3JkZXJSYWRpdXM6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcInNob3djYXNlcy5iYXJ0ZXIucGVlcl9sZWZ0XCJ9IC8+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VuZF90b19lc2Nyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwic2hvd2Nhc2VzLmJhcnRlci5mZWVfZHVlX25vd190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwic2hvd2Nhc2VzLmJhcnRlci5mZWVfd2hlbl9wcm9wb3NhbF9leGVjdXRlc190b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFydGVyLWZlZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qbmVlZGVkIHRvIHJlbmRlciB0b29sdGlwIHByb3Blcmx5Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZW5kX3RvX2VzY3Jvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNob3djYXNlcy5iYXJ0ZXIuZmVlX2R1ZV9ub3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNob3djYXNlcy5iYXJ0ZXIuZmVlX3doZW5fcHJvcG9zYWxfZXhlY3V0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0cmFuc2ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWRQZWVyMUluUHJvcG9zYWwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllcj17ZnJvbV9iYXJ0ZXIubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIucHJvcG9zYWxfZmVlX3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJ0ZXItZmVlLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypuZWVkZWQgdG8gcmVuZGVyIHRvb2x0aXAgcHJvcGVybHkqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLnByb3Bvc2FsX2ZlZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJvcG9zYWxfY3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmVlQ2hhbmdlZFBlZXIxQ3JlYXRlUHJvcG9zYWwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci50b3RhbF9mZWVzX3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJzaG93Y2FzZXMuYmFydGVyLnRvdGFsX2ZlZXNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlKHRydWUpICsgdGhpcy5zdGF0ZS5wcm9wb3NhbF9mZWUuX3JlYWxfYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcIkdQSFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgdG90YWxGZWVUbyA9IChcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJzaG93Y2FzZXMuYmFydGVyLnBlZXJfcmlnaHRcIn0gLz5cbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmZlZV93aGVuX3Byb3Bvc2FsX2V4ZWN1dGVzX3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJ0ZXItZmVlLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypuZWVkZWQgdG8gcmVuZGVyIHRvb2x0aXAgcHJvcGVybHkqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLmZlZV93aGVuX3Byb3Bvc2FsX2V4ZWN1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNmZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkUGVlcjJJblByb3Bvc2FsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXI9e3RvX2JhcnRlci5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGZlZUZvckVzY3JvdyA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dFc2Nyb3cpIHtcbiAgICAgICAgICAgIGZlZUZvckVzY3JvdyA9IChcbiAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcInNob3djYXNlcy5iYXJ0ZXIuZXNjcm93X2FjY291bnRcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLmZlZV93aGVuX3Byb3Bvc2FsX2V4ZWN1dGVzX3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJ0ZXItZmVlLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qbmVlZGVkIHRvIHJlbmRlciB0b29sdGlwIHByb3Blcmx5Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlZUFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLmZlZV93aGVuX3Byb3Bvc2FsX2V4ZWN1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5lc2Nyb3dfYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNmZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRXNjcm93RmVlQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyPXtmcm9tX2JhcnRlci5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbnRybyA9IChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJhcnRlci5uZXdfYmFydGVyX3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJhcnRlci5uZXdfYmFydGVyXCJ9IC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiIHRoZW1lPVwiZmlsbGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGVzY3JvdyA9IG51bGw7XG4gICAgICAgIGxldCBpc0VzY3Jvd01lbW9TaG93biA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1lbW9bXCJlc2Nyb3dcIl1bMF0gJiYgdGhpcy5zdGF0ZS5tZW1vW1wiZXNjcm93XCJdWzBdLnNob3duO1xuICAgICAgICBsZXQgZXNjcm93X3BheW1lbnQgPSB0aGlzLnN0YXRlLmVzY3Jvd19wYXltZW50X2NoYW5nZWRcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5lc2Nyb3dfcGF5bWVudFxuICAgICAgICAgICAgOiBmZWUodHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dFc2Nyb3cpIHtcbiAgICAgICAgICAgIGVzY3JvdyA9IChcbiAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17e2JvcmRlclJhZGl1czogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzaG93Y2FzZXMuYmFydGVyLmVzY3Jvd19hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dQdWJLZXk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1VwcGVyY2FzZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuZXNjcm93X2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dGhpcy5zdGF0ZS5lc2Nyb3dfYWNjb3VudF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZXNjcm93QWNjb3VudENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Fc2Nyb3dBY2NvdW50Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYmFydGVyLnNlbmRfdG9fZXNjcm93X3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogNn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2VuZF90b19lc2Nyb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVG9nZ2xlU2VuZFRvRXNjcm93LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJzaG93Y2FzZXMuYmFydGVyLnNlbmRfdG9fZXNjcm93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzRXNjcm93TWVtb1Nob3duICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLmFkZF9tZW1vX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wTGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1lbW9PcGVuKFwiZXNjcm93XCIsIDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1tZW1vLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIuZXNjcm93X3BheW1lbnRfdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypuZWVkZWQgdG8gcmVuZGVyIHRvb2x0aXAgcHJvcGVybHkqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInNob3djYXNlcy5iYXJ0ZXIuZXNjcm93X3BheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtlc2Nyb3dfcGF5bWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl91cGRhdGVFc2Nyb3dGZWUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjFyZW0gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1wiMS4zLjBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W1wiMS4zLjBcIl19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oYXNQb29sQmFsYW5jZSA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRyYW5zZmVyLmVycm9ycy5pbnN1ZmZpY2llbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbF9sZW5ndGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNFc2Nyb3dNZW1vU2hvd24gJiYgdGhpcy5yZW5kZXJNZW1vRmllbGQoXCJlc2Nyb3dcIiwgMCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjgwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAge3NtYWxsU2NyZWVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT57aW50cm99PC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudF9mcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50X3RvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT57b2ZmZXJzfTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc2Nyb3cgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VzY3Jvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsRmVlRnJvbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxGZWVUb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZUZvckVzY3JvdyAhPSBudWxsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWVGb3JFc2Nyb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT57aW50cm99PC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnRfZnJvbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50X3RvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT57b2ZmZXJzfTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc2Nyb3cgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VzY3Jvd31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IHN0eWxlPXt7cGFkZGluZzogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbEZlZUZyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxGZWVUb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWVGb3JFc2Nyb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFydGVyLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5iYXJ0ZXIucHJvcG9zZV90b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcExlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcInByb3Bvc2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0Tm90VmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzU3VibWl0Tm90VmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJvcG9zZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXNTdWJtaXROb3RWYWxpZCAmJiB0aGlzLnJlbmRlckJhbGFuY2VXYXJuaW5ncygpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlRXNjcm93RmVlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlc2Nyb3dfcGF5bWVudF9jaGFuZ2VkOiB0cnVlLFxuICAgICAgICAgICAgZXNjcm93X3BheW1lbnQ6IGUuYW1vdW50XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlU2VuZFRvRXNjcm93KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbmRfdG9fZXNjcm93OiAhdGhpcy5zdGF0ZS5zZW5kX3RvX2VzY3Jvd1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVFc2Nyb3coKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dFc2Nyb3c6ICF0aGlzLnN0YXRlLnNob3dFc2Nyb3d9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtCdXR0b24sIENhcmQsIFN0ZXBzLCBUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgZGVib3VuY2VSZW5kZXIgZnJvbSBcInJlYWN0LWRlYm91bmNlLXJlbmRlclwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcblxuaW1wb3J0IEJvcnJvd01vZGFsIGZyb20gXCIuLi9Nb2RhbC9Cb3Jyb3dNb2RhbFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IEFzc2V0U2VsZWN0IGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0U2VsZWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNsYXNzIEJvcnJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0JvcnJvd0Jhc2VNb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRBc3NldDogXCIxLjMuMjdcIixcbiAgICAgICAgICAgIHN0ZXA6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGVwcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiaW50cm9kdWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJib3Jyb3dcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29uY2VwdFwiLFxuICAgICAgICAgICAgICAgIGhhc19sZWdlbmQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNldHVwXCIsXG4gICAgICAgICAgICAgICAgaGFzX2xlZ2VuZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYmVuZWZpdHNcIixcbiAgICAgICAgICAgICAgICBoYXNfbGVnZW5kOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJyaXNrc1wiLFxuICAgICAgICAgICAgICAgIGhhc19sZWdlbmQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zaG93Qm9ycm93TW9kYWwgPSB0aGlzLnNob3dCb3Jyb3dNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVCb3Jyb3dNb2RhbCA9IHRoaXMuaGlkZUJvcnJvd01vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvd0JvcnJvd01vZGFsKCkge1xuICAgICAgICAvLyBuZWVkcyBhIGtub3duIGFjY291bnRcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KSB7XG4gICAgICAgICAgICBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQm9ycm93QmFzZU1vZGFsVmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0JvcnJvd0Jhc2VNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUJvcnJvd01vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQm9ycm93QmFzZU1vZGFsVmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLnN0YXRlLnN0ZXAgKyAxO1xuICAgICAgICBpZiAoc3RlcCA+PSB0aGlzLnN0ZXBzLmxlbmd0aCkgc3RlcCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVwfSk7XG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLnN0YXRlLnN0ZXAgLSAxO1xuICAgICAgICBpZiAoc3RlcCA8IDApIHN0ZXAgPSAwO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGVwfSk7XG4gICAgfVxuXG4gICAgb25Bc3NldENoYW5nZShzZWxlY3RlZF9hc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkQXNzZXQ6IHNlbGVjdGVkX2Fzc2V0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpO1xuICAgICAgICBsZXQgYWNjb3VudExvYWRlZCA9ICEoXG4gICAgICAgICAgICAhY3VycmVudEFjY291bnQgfHwgdHlwZW9mIGN1cnJlbnRBY2NvdW50ID09PSBcInN0cmluZ1wiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLnN0ZXA7XG4gICAgICAgIGNvbnN0IHRpbnlTY3JlZW4gPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSA4MDA7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZWQgPSB0aGlzLnN0YXRlLnN0ZXAgPiAwO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQXNzZXRPYmplY3QgPSBDaGFpblN0b3JlLmdldEFzc2V0KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEFzc2V0XG4gICAgICAgICk7XG4gICAgICAgIGxldCBzdGVwcyA9IHRoaXMuc3RlcHM7XG4gICAgICAgIGxldCBsZWdlbmQgPSBudWxsO1xuICAgICAgICBpZiAoY3VycmVudCA8IHN0ZXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RlcHNbY3VycmVudF0uaGFzX2xlZ2VuZCkge1xuICAgICAgICAgICAgICAgICAgICBsZWdlbmQgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5ib3Jyb3cuc3RlcHNfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBzW2N1cnJlbnRdLmtleSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIudGV4dF9sZWdlbmRcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZWdlbmQgPSBsZWdlbmQuc3BsaXQoXCJcXG5cIikubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsZWdlbmQgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJvcnJvdy5zdGVwc19cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwc1tjdXJyZW50XS5rZXkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIudGV4dF9sZWdlbmRcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmluaXNoZWRDYXJkID0gbnVsbDtcbiAgICAgICAgaWYgKGN1cnJlbnQgPj0gc3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaW5pc2hlZENhcmQgPSAoXG4gICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNlbnRlci1jb250ZW50XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wic2hvd2Nhc2VzLmJvcnJvdy5jaG9vc2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1wiaDRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTJyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2dwQXNzZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4yN1wiLCAvLyBncFVTRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMzZcIiwgLy8gZ3BFVVJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjM3XCIsIC8vIGdwUlVCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4zOFwiLCAvLyBncENOWVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMzVcIiwgLy8gZ3BHT0xEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4zNFwiIC8vIGdwU0lMVkVSXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXCIxLjMuMTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4xMjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjEzMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjEwNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMTA2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4xMDNcIiovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQXNzZXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5ib3Jyb3cuYm9ycm93X3Rvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMnJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRBc3NldCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRMb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMi4zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dCb3Jyb3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuYm9ycm93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjcwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZENhcmQgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNob3djYXNlcy5ib3Jyb3cubm93X3JlYWR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzaG93Y2FzZXMuYm9ycm93LnRpdGxlX2xvbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7c3RhcnRlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCF0aW55U2NyZWVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwcyBwcm9ncmVzc0RvdCBjdXJyZW50PXtjdXJyZW50IC0gMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwcy5TdGVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5ib3Jyb3cuc3RlcHNfXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ua2V5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcHM+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogY3VycmVudCA8IHRoaXMuc3RlcHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQgKyBcIi4gXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJvcnJvdy5zdGVwc19cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHNbY3VycmVudF0ua2V5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjFyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmlzaGVkQ2FyZCAhPSBudWxsICYmIGZpbmlzaGVkQ2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaW5pc2hlZENhcmQgPT0gbnVsbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhc3RlcHNbY3VycmVudF0uaWNvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic3RlcHNbY3VycmVudF0uaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJvcnJvdy5zdGVwc19cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHNbY3VycmVudF0ua2V5ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi50aXRsZV93aXRoaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93LnN0ZXBzX1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwc1tjdXJyZW50XS5rZXkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLnRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIXN0ZXBzW2N1cnJlbnRdLmhhc19sZWdlbmQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWdlbmQubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtcImJvcnJvd19zdWJwX1wiICsgaW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50WzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge2NvbnRlbnRbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBzLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPCBzdGVwcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJvcnJvdy5uYXZpZ2F0ZV93aXRoX2tleXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm5leHQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJuZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmJvcnJvdy5nZXRfc3RhcnRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPCBzdGVwcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuYm9ycm93Lm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gc3RlcHMubGVuZ3RoIC0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcInNob3djYXNlcy5ib3Jyb3cuZG9faXRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByZXYoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwicHJldmlvdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcInNob3djYXNlcy5ib3Jyb3cucHJldmlvdXNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICB7YWNjb3VudExvYWRlZCAmJiAhIXNlbGVjdGVkQXNzZXRPYmplY3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Qm9ycm93TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNCb3Jyb3dCYXNlTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLmhpZGVCb3Jyb3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRPYmo9e3NlbGVjdGVkQXNzZXRPYmplY3QuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNraW5nQXNzZXRPYmo9e3NlbGVjdGVkQXNzZXRPYmplY3QuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50T2JqPXtjdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNEaXYoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZm9jdXNEaXYoKTtcbiAgICB9XG5cbiAgICBmb2N1c0RpdigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLnN0YXRlLnN0ZXA7XG4gICAgICAgIGxldCBzdGVwcyA9IHRoaXMuc3RlcHM7XG4gICAgICAgIGlmIChjdXJyZW50IDwgc3RlcHMubGVuZ3RoICYmICEhdGhpcy5yZWZzLm5leHQpIHtcbiAgICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5uZXh0KS5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT0gc3RlcHMubGVuZ3RoICYmICEhdGhpcy5yZWZzLnByZXZpb3VzKSB7XG4gICAgICAgICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMucHJldmlvdXMpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleURvd24oZSkge1xuICAgICAgICAvLyBhcnJvdyB1cC9kb3duIGJ1dHRvbiBzaG91bGQgc2VsZWN0IG5leHQvcHJldmlvdXMgbGlzdCBlbGVtZW50XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkJvcnJvdyA9IGRlYm91bmNlUmVuZGVyKEJvcnJvdywgNTAsIHtsZWFkaW5nOiBmYWxzZX0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEJvcnJvdywge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OlxuICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50XG4gICAgICAgIH07XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7XG4gICAgSW5wdXQsXG4gICAgQ2FyZCxcbiAgICBDb2wsXG4gICAgUm93LFxuICAgIEJ1dHRvbixcbiAgICBTd2l0Y2gsXG4gICAgVG9vbHRpcCxcbiAgICBJY29uLFxuICAgIFRhYmxlXG59IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IERpcmVjdERlYml0TW9kYWwgZnJvbSBcIi4uL01vZGFsL0RpcmVjdERlYml0TW9kYWxcIjtcbmltcG9ydCBEaXJlY3REZWJpdENsYWltTW9kYWwgZnJvbSBcIi4uL01vZGFsL0RpcmVjdERlYml0Q2xhaW1Nb2RhbFwiO1xuaW1wb3J0IExpbmtUb0Fzc2V0QnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9Bc3NldEJ5SWRcIjtcbmltcG9ydCBBcHBsaWNhdGlvbkFwaSBmcm9tIFwiLi4vLi4vYXBpL0FwcGxpY2F0aW9uQXBpXCI7XG5pbXBvcnQge2JpbmRUb0N1cnJlbnRBY2NvdW50LCBoYXNMb2FkZWR9IGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0N1cnJlbnRBY2NvdW50XCI7XG5cbmNsYXNzIERpcmVjdERlYml0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBpc0NsYWltTW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlclN0cmluZzogXCJcIixcbiAgICAgICAgICAgIG9wZXJhdGlvbkRhdGE6IFwiXCIsXG4gICAgICAgICAgICBvcGVyYXRpb25DbGFpbURhdGE6IFwiXCIsXG4gICAgICAgICAgICB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3Q6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX3VwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudDtcblxuICAgICAgICBpZiAoaGFzTG9hZGVkKGN1cnJlbnRBY2NvdW50KSkge1xuICAgICAgICAgICAgLy8gZm9yIG5vdywgZmV0Y2ggbWFudWFsbHlcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBBcGlzLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKFwiZ2V0X3dpdGhkcmF3X3Blcm1pc3Npb25zX2J5X2dpdmVyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjEyLjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBBcGlzLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKFwiZ2V0X3dpdGhkcmF3X3Blcm1pc3Npb25zX2J5X3JlY2lwaWVudFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4xMi4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdCA9IHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdC5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNbMF1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdCA9IHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdC5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNbMV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gdHJpZ2dlciBjYWNoaW5nIGZvciBtb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGl0ZW0uYXV0aG9yaXplZF9hY2NvdW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS53aXRoZHJhd19mcm9tX2FjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXdfcGVybWlzc2lvbl9saXN0OiB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3RcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgICAvLyBhbHdheXMgdXBkYXRlLCByZWxpZXMgb24gcHVzaCBmcm9tIGJhY2tlbmQgd2hlbiBhY2NvdW50IHBlcm1pc3Npb24gY2hhbmdlXG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgIH1cblxuICAgIHNob3dNb2RhbCA9IG9wZXJhdGlvbiA9PiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBvcGVyYXRpb25EYXRhOiBvcGVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhpZGVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBvcGVyYXRpb246IG51bGxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNob3dDbGFpbU1vZGFsID0gb3BlcmF0aW9uID0+ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0NsYWltTW9kYWxWaXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BlcmF0aW9uQ2xhaW1EYXRhOiBvcGVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhpZGVDbGFpbU1vZGFsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzQ2xhaW1Nb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfb25GaWx0ZXIgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJTdHJpbmc6IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCl9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRGVsZXRlUHJvcG9zYWwgPSBwZXJtaXNzaW9uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgcGVybWlzc2luXCIpO1xuICAgICAgICBBcHBsaWNhdGlvbkFwaS5kZWxldGVXaXRoZHJhd1Blcm1pc3Npb24oXG4gICAgICAgICAgICBwZXJtaXNzaW9uLmlkLFxuICAgICAgICAgICAgcGVybWlzc2lvbi53aXRoZHJhd19mcm9tX2FjY291bnQsXG4gICAgICAgICAgICBwZXJtaXNzaW9uLmF1dGhvcml6ZWRfYWNjb3VudFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gbm90aGluZyB0byBkbywgdXNlciB3aWxsIHNlZSBwb3B1cFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogZXJyLnRvU3RyaW5nKCl9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZSxcbiAgICAgICAgICAgIGlzQ2xhaW1Nb2RhbFZpc2libGUsXG4gICAgICAgICAgICB3aXRoZHJhd19wZXJtaXNzaW9uX2xpc3QsXG4gICAgICAgICAgICBvcGVyYXRpb25EYXRhLFxuICAgICAgICAgICAgb3BlcmF0aW9uQ2xhaW1EYXRhLFxuICAgICAgICAgICAgZmlsdGVyU3RyaW5nXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgY3VycmVudEFjY291bnQgPSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50O1xuXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gbnVsbDtcblxuICAgICAgICBpZiAod2l0aGRyYXdfcGVybWlzc2lvbl9saXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YVNvdXJjZSA9IHdpdGhkcmF3X3Blcm1pc3Npb25fbGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBDaGFpblN0b3JlLmdldE9iamVjdChcbiAgICAgICAgICAgICAgICAgICAgaXRlbS53aXRoZHJhd2FsX2xpbWl0LmFzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aG9yaXplZEFjY291bnROYW1lID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50TmFtZShcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hdXRob3JpemVkX2FjY291bnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhkcmF3RnJvbUFjY291bnROYW1lID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50TmFtZShcbiAgICAgICAgICAgICAgICAgICAgaXRlbS53aXRoZHJhd19mcm9tX2FjY291bnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmlvZF9zdGFydCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICBpdGVtLnBlcmlvZF9zdGFydF90aW1lICsgXCJaXCJcbiAgICAgICAgICAgICAgICApLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lUGFzc2VkID0gbm93IC0gcGVyaW9kX3N0YXJ0O1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UGVyaW9kRXhwaXJlcyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyaW9kTXMgPSBpdGVtLndpdGhkcmF3YWxfcGVyaW9kX3NlYyAqIDEwMDA7XG5cbiAgICAgICAgICAgICAgICBpZiAodGltZVBhc3NlZCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJzdCBwZXJpb2QgaXMgbm90IHN0YXJ0ZWRcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBlcmlvZE51bSA9IE1hdGguY2VpbCh0aW1lUGFzc2VkIC8gcGVyaW9kTXMpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGVyaW9kRXhwaXJlcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2Rfc3RhcnQgKyBwZXJpb2RNcyAqIGN1cnJlbnRQZXJpb2ROdW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYXV0aG9yaXplZF9hY2NvdW50ID09IGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInBheWVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicGF5ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXplZDogYXV0aG9yaXplZEFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiB3aXRoZHJhd0Zyb21BY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdG86IGF1dGhvcml6ZWRBY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLndpdGhkcmF3YWxfbGltaXQuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQXNzZXRCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLndpdGhkcmF3YWxfbGltaXQuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgdW50aWw6IGN1cnJlbnRQZXJpb2RFeHBpcmVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LmxvY2FsaXplKG5ldyBEYXRlKGN1cnJlbnRQZXJpb2RFeHBpcmVzKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5maXJzdF9wZXJpb2Rfbm90X3N0YXJ0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmVzOiBjb3VudGVycGFydC5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGl0ZW0uZXhwaXJhdGlvbiArIFwiWlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNsYWltZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYWltZWRfdGhpc19wZXJpb2QgPT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmdldF9hc3NldF9hbW91bnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYWltZWRfdGhpc19wZXJpb2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgXCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9Bc3NldEJ5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLndpdGhkcmF3YWxfbGltaXQuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGF0YVNvdXJjZS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgZmlsdGVyIGlzIGNoYWluZWQgdG8gbWFwLCBwb3NzaWJsZSBidWdzIHdpdGggaW5pdGlhbCByZW5kZXIgb2YgdGFibGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYXV0aG9yaXplZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hdXRob3JpemVkLmluZGV4T2YoZmlsdGVyU3RyaW5nKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiI1wiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpZFwiLFxuICAgICAgICAgICAgICAgIGtleTogXCJpZFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPiBiLmlkID8gMSA6IGEuaWQgPCBiLmlkID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRnJvbVwiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJmcm9tXCIsXG4gICAgICAgICAgICAgICAga2V5OiBcImZyb21cIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmZyb20gPiBiLmZyb20gPyAxIDogYS5mcm9tIDwgYi5mcm9tID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVG9cIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidG9cIixcbiAgICAgICAgICAgICAgICBrZXk6IFwidG9cIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnRvID4gYi50byA/IDEgOiBhLnRvIDwgYi50byA/IC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC5jdXJyZW50X3BlcmlvZF9leHBpcmVzXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ1bnRpbFwiLFxuICAgICAgICAgICAgICAgIGtleTogXCJ1bnRpbFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudW50aWwgPiBiLnVudGlsID8gMSA6IGEudW50aWwgPCBiLnVudGlsID8gLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTGltaXRcIixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibGltaXRcIixcbiAgICAgICAgICAgICAgICBrZXk6IFwibGltaXRcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbWl0MSA9IGEucmF3RGF0YS53aXRoZHJhd2FsX2xpbWl0LmFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGltaXQyID0gYi5yYXdEYXRhLndpdGhkcmF3YWxfbGltaXQuYW1vdW50O1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW1pdDEgLSBsaW1pdDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDbGFpbWVkXCIsXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNsYWltZWRcIixcbiAgICAgICAgICAgICAgICBrZXk6IFwiY2xhaW1lZFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlMSA9IGEucmF3RGF0YS5jbGFpbWVkX3RoaXNfcGVyaW9kO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdmFpbGFibGUyID0gYS5yYXdEYXRhLmNsYWltZWRfdGhpc19wZXJpb2Q7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdmFpbGFibGUyIC0gYXZhaWxhYmxlMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmV4cGlyZXNcIiksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImV4cGlyZXNcIixcbiAgICAgICAgICAgICAgICBrZXk6IFwiZXhwaXJlc1wiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuZXhwaXJlcyA+IGIuZXhwaXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEuZXhwaXJlcyA8IGIuZXhwaXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhY3Rpb25cIixcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID09PSBcInBheWVyXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVEZWxldGVQcm9wb3NhbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLnJhd0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcmVjb3JkLnJhd0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd2Nhc2VzLmRpcmVjdF9kZWJpdC51cGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dDbGFpbU1vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2xhaW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlY29yZC5yYXdEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmNsYWltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXJlY3QtZGViaXQtdmlld1wiPlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImRpcmVjdC1kZWJpdC10YWJsZS1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fSBzdHlsZT17e3BhZGRpbmc6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRBQkxFIEhFQURFUiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpcmVjdC1kZWJpdC10YWJsZV9fZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci53aXRuZXNzZXMuZmlsdGVyX2J5X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkFmdGVyPXs8SWNvbiB0eXBlPVwic2VhcmNoXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNyZWF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuZGlyZWN0X2RlYml0LmNyZWF0ZV9uZXdfbWFuZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXJlY3QtZGViaXQtdGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAge2lzTW9kYWxWaXNpYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPERpcmVjdERlYml0TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e29wZXJhdGlvbkRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge2lzQ2xhaW1Nb2RhbFZpc2libGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlyZWN0RGViaXRDbGFpbU1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNb2RhbFZpc2libGU9e2lzQ2xhaW1Nb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLmhpZGVDbGFpbU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbj17b3BlcmF0aW9uQ2xhaW1EYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5EaXJlY3REZWJpdCA9IGJpbmRUb0N1cnJlbnRBY2NvdW50KERpcmVjdERlYml0KTtcblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0RGViaXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgSW5wdXQsXHJcbiAgICBDYXJkLFxyXG4gICAgQ29sLFxyXG4gICAgUm93LFxyXG4gICAgQnV0dG9uLFxyXG4gICAgSWNvbixcclxuICAgIFRhYmxlLFxyXG4gICAgVG9vbHRpcFxyXG59IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmUsIEZldGNoQ2hhaW5PYmplY3RzfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IEh0bGNNb2RhbCBmcm9tIFwiLi4vTW9kYWwvSHRsY01vZGFsXCI7XHJcbmltcG9ydCBMaW5rVG9Bc3NldEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQXNzZXRCeUlkXCI7XHJcbmltcG9ydCB7YmluZFRvQ3VycmVudEFjY291bnR9IGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0N1cnJlbnRBY2NvdW50XCI7XHJcblxyXG5jbGFzcyBIdGxjIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTW9kYWxWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgZmlsdGVyU3RyaW5nOiBcIlwiLFxyXG4gICAgICAgICAgICBvcGVyYXRpb25EYXRhOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGh0bGNfbGlzdDogW10sXHJcbiAgICAgICAgICAgIHRhYmxlSXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5oYXNMb2FkZWRPbmNlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCAhPT0gbnAuY3VycmVudEFjY291bnQgfHxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5odGxjX2xpc3QpICE9PVxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobnMuaHRsY19saXN0KSB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlzTW9kYWxWaXNpYmxlICE9PSBucy5pc01vZGFsVmlzaWJsZSB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRhYmxlSXNMb2FkaW5nICE9PSBucy50YWJsZUlzTG9hZGluZyB8fFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZpbHRlclN0cmluZyAhPT0gbnMuZmlsdGVyU3RyaW5nXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfdXBkYXRlKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQ7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudElkID0gY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIik7XHJcblxyXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBIVExDIHRhYmxlIGZvclwiLCBhY2NvdW50SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc0xvYWRlZE9uY2UgPSBjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGFibGVJc0xvYWRpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBodGxjX2Zyb20gPVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImh0bGNzX2Zyb21cIikudG9KUygpIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IGh0bGNfdG8gPSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImh0bGNzX3RvXCIpLnRvSlMoKSB8fCBbXTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaHRsY19saXN0OiBodGxjX2Zyb21cclxuICAgICAgICAgICAgICAgIC5jb25jYXQoaHRsY190bylcclxuICAgICAgICAgICAgICAgIC5tYXAoX2l0ZW0gPT4gQ2hhaW5TdG9yZS5nZXRPYmplY3QoX2l0ZW0pKVxyXG4gICAgICAgICAgICAgICAgLm1hcChfaXRlbSA9PiAoISFfaXRlbS50b0pTID8gX2l0ZW0udG9KUygpIDogdW5kZWZpbmVkKSksXHJcbiAgICAgICAgICAgIHRhYmxlSXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICAvLyBhbHdheXMgdXBkYXRlLCByZWxpZXMgb24gcHVzaCBmcm9tIGJhY2tlbmQgd2hlbiBhY2NvdW50IHBlcm1pc3Npb24gY2hhbmdlXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01vZGFsID0gb3BlcmF0aW9uID0+IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAob3BlcmF0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgLy8gY2FjaGUgZm9yIG1vZGFsXHJcbiAgICAgICAgICAgIGF3YWl0IEZldGNoQ2hhaW5PYmplY3RzKFxyXG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgW29wZXJhdGlvbi5wYXlsb2FkLnRyYW5zZmVyLnRvXSxcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHt9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGF3YWl0IEZldGNoQ2hhaW5PYmplY3RzKFxyXG4gICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgW29wZXJhdGlvbi5wYXlsb2FkLnRyYW5zZmVyLmZyb21dLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAge31cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYXdhaXQgRmV0Y2hDaGFpbk9iamVjdHMoQ2hhaW5TdG9yZS5nZXRBc3NldCwgW1xyXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uLnBheWxvYWQudHJhbnNmZXIuYXNzZXRfaWRcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgb3BlcmF0aW9uRGF0YTogb3BlcmF0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNNb2RhbFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBvcGVyYXRpb246IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgX29uRmlsdGVyID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclN0cmluZzogZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpc01vZGFsVmlzaWJsZSxcclxuICAgICAgICAgICAgaHRsY19saXN0LFxyXG4gICAgICAgICAgICBvcGVyYXRpb25EYXRhLFxyXG4gICAgICAgICAgICBmaWx0ZXJTdHJpbmdcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgY3VycmVudEFjY291bnQgPSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50O1xyXG5cclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChodGxjX2xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2UgPSBodGxjX2xpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG8gPSBpdGVtLnRyYW5zZmVyLnRvO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbSA9IGl0ZW0udHJhbnNmZXIuZnJvbTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0udHJhbnNmZXIuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBpdGVtLnRyYW5zZmVyLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwaXJhdGlvbiA9IGl0ZW0uY29uZGl0aW9ucy50aW1lX2xvY2suZXhwaXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChhbW91bnQuYXNzZXRfaWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvQWNjb3VudE5hbWUgPSBDaGFpblN0b3JlLmdldEFjY291bnROYW1lKHRvKSB8fCB0bztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb21BY2NvdW50TmFtZSA9IENoYWluU3RvcmUuZ2V0QWNjb3VudE5hbWUoZnJvbSkgfHwgZnJvbTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRvID09IGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpID8gXCJwYXllZVwiIDogXCJwYXllclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGZyb21BY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogdG9BY2NvdW50TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLmdldF9hc3NldF9hbW91bnQoYW1vdW50LmFtb3VudCwgYXNzZXQpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0Fzc2V0QnlJZCBhc3NldD17YW1vdW50LmFzc2V0X2lkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBoYXNoOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRsYy5wcmVpbWFnZV9oYXNoX2V4cGxhbmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIihcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29uZGl0aW9ucy5oYXNoX2xvY2sucHJlaW1hZ2Vfc2l6ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb25kaXRpb25zLmhhc2hfbG9jay5wcmVpbWFnZV9oYXNoWzBdICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpOiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29uZGl0aW9ucy5oYXNoX2xvY2sucHJlaW1hZ2VfaGFzaFsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlczogZXhwaXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICByYXdEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZS5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGZpbHRlciBpcyBjaGFpbmVkIHRvIG1hcCwgcG9zc2libGUgYnVncyB3aXRoIGluaXRpYWwgcmVuZGVyIG9mIHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udG8gJiYgaXRlbS50by5pbmRleE9mKGZpbHRlclN0cmluZykgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkID4gYi5pZCA/IDEgOiBhLmlkIDwgYi5pZCA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmZyb21cIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZnJvbVwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImZyb21cIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5mcm9tID4gYi5mcm9tID8gMSA6IGEuZnJvbSA8IGIuZnJvbSA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLnRvXCIpLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInRvXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwidG9cIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS50byA+IGIudG8gPyAxIDogYS50byA8IGIudG8gPyAtMSA6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuaHRsYy5hbW91bnRcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGltaXQxID0gYS5yYXdEYXRhLm9wWzFdLmFtb3VudC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGltaXQyID0gYi5yYXdEYXRhLm9wWzFdLmFtb3VudC5hbW91bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW1pdDEgLSBsaW1pdDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuaHRsYy5oYXNoXCIpLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImhhc2hcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJoYXNoXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInNob3djYXNlcy5odGxjLmV4cGlyZXNcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZXhwaXJlc1wiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImV4cGlyZXNcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5leHBpcmVzID4gYi5leHBpcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEuZXhwaXJlcyA8IGIuZXhwaXJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC5sb2NhbGl6ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUodXRpbHMubWFrZUlTT0RhdGVTdHJpbmcodGV4dCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJmdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJzaG93Y2FzZXMuaHRsYy5hY3Rpb25zXCIpLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImFjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9PT0gXCJwYXllclwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXh0ZW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZWNvcmQucmF3RGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLmV4dGVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZWRlZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcmVjb3JkLnJhd0RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93Y2FzZXMuaHRsYy5yZWRlZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlyZWN0LWRlYml0LXZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImRpcmVjdC1kZWJpdC10YWJsZS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0gc3R5bGU9e3twYWRkaW5nOiBcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRBQkxFIEhFQURFUiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlyZWN0LWRlYml0LXRhYmxlX19maWx0ZXItaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci53aXRuZXNzZXMuZmlsdGVyX2J5X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25GaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjcmVhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIzMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3djYXNlcy5odGxjLmNyZWF0ZV9odGxjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXJlY3QtZGViaXQtdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUudGFibGVJc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2lzTW9kYWxWaXNpYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SHRsY01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNNb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuaGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uPXtvcGVyYXRpb25EYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkh0bGMgPSBiaW5kVG9DdXJyZW50QWNjb3VudChIdGxjKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEh0bGM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4vRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IEZsb2F0aW5nRHJvcGRvd24gZnJvbSBcIi4vRmxvYXRpbmdEcm9wZG93blwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7RGVjaW1hbENoZWNrZXJ9IGZyb20gXCIuL0RlY2ltYWxDaGVja2VyXCI7XHJcblxyXG5jbGFzcyBBc3NldFNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGFzc2V0IGlkXHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH07XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5wLmFzc2V0cywgdGhpcy5wcm9wcy5hc3NldHMpIHx8XHJcbiAgICAgICAgICAgIG5wLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlIHx8XHJcbiAgICAgICAgICAgIG5wLnNjcm9sbF9sZW5ndGggIT09IHRoaXMucHJvcHMuc2Nyb2xsX2xlbmd0aFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hc3NldHMubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZsb2F0aW5nRHJvcGRvd25cclxuICAgICAgICAgICAgICAgIGVudHJpZXM9e3RoaXMucHJvcHMuYXNzZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChhID0+IGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9e3RoaXMucHJvcHMuYXNzZXRzLnJlZHVjZSgobWFwLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpIG1hcFthLmdldChcInN5bWJvbFwiKV0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgICAgICAgICB9LCB7fSl9XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVFbnRyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldHNbMF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXRzWzBdLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hbW91bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxfbGVuZ3RoPXt0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXRTZWxlY3RvciA9IEFzc2V0V3JhcHBlcihBc3NldFNlbGVjdG9yLCB7YXNMaXN0OiB0cnVlfSk7XHJcblxyXG5jbGFzcyBBbW91bnRTZWxlY3RvciBleHRlbmRzIERlY2ltYWxDaGVja2VyIHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGEgdHJhbnNsYXRpb24ga2V5IGZvciB0aGUgbGFiZWxcclxuICAgICAgICBhc3NldHM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBhbW91bnQ6IFByb3BUeXBlcy5hbnksXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgdGFiSW5kZXg6IDBcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkFzc2V0Q2hhbmdlKHRoaXMucHJvcHMuYXNzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdEFtb3VudCh2KSB7XHJcbiAgICAgICAgLyovLyBUT0RPOiB1c2UgYXNzZXQncyBwcmVjaXNpb24gdG8gZm9ybWF0IHRoZSBudW1iZXIqL1xyXG4gICAgICAgIGlmICghdikgdiA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB2ID0gdi50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHYudHJpbSgpLnJlcGxhY2UoLywvZywgXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfb25DaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5nZXROdW1lcmljRXZlbnRWYWx1ZShlKSxcclxuICAgICAgICAgICAgICAgIGFzc2V0OiB0aGlzLnByb3BzLmFzc2V0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQXNzZXRDaGFuZ2Uoc2VsZWN0ZWRfYXNzZXQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMucHJvcHMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYXNzZXQ6IHNlbGVjdGVkX2Fzc2V0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ2FsbGluZyBBbW91bnRTZWxlY3RvcjogXCIgKyB0aGlzLnByb3BzLmxhYmVsICsgdGhpcy5wcm9wcy5hc3NldCArIHRoaXMucHJvcHMuYXNzZXRzICsgdGhpcy5wcm9wcy5hbW91bnQgKyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyICsgdGhpcy5wcm9wcy5lcnJvcik7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy5lcnJvclxyXG4gICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmVycm9yKVxyXG4gICAgICAgICAgICA6IHRoaXMuZm9ybWF0QW1vdW50KHRoaXMucHJvcHMuYW1vdW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbW91bnQtc2VsZWN0b3JcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmlnaHQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5X2JhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnByb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFzdGU9e3RoaXMucHJvcHMub25QYXN0ZSB8fCB0aGlzLm9uUGFzdGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc1ByaWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi13cmFwcGVyIGluYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfS9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvcHMucmVmQ2FsbGJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17SW1tdXRhYmxlLkxpc3QodGhpcy5wcm9wcy5hc3NldHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQXNzZXRDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxfbGVuZ3RoPXt0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQW1vdW50U2VsZWN0b3IgPSBBc3NldFdyYXBwZXIoQW1vdW50U2VsZWN0b3IpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW1vdW50U2VsZWN0b3I7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuL0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4vQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0xvYWRlZCA9IGZ1bmN0aW9uIGhhc0xvYWRlZChjdXJyZW50QWNjb3VudCkge1xyXG4gICAgcmV0dXJuICEhY3VycmVudEFjY291bnQgJiYgISFjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBiaW5kVG9DdXJyZW50QWNjb3VudCA9IGZ1bmN0aW9uIGJpbmRUb0N1cnJlbnRBY2NvdW50KFxyXG4gICAgV3JhcHBlZENvbXBvbmVudFxyXG4pIHtcclxuICAgIC8vIC4uLmFuZCByZXR1cm5zIGFub3RoZXIgY29tcG9uZW50Li4uXHJcbiAgICBsZXQgQmluZFRvQ3VycmVudEFjY291bnQgPSBjbGFzcyBCaW5kVG9DdXJyZW50QWNjb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY3VycmVudEFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICAgICAgLy8gc2V0IHN1YnNjcmlwdGlvblxyXG4gICAgICAgICAgICBhdXRvc3Vic2NyaWJlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFzTG9hZGVkKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nSW5kaWNhdG9yIC8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBCaW5kVG9DdXJyZW50QWNjb3VudCA9IEJpbmRUb0NoYWluU3RhdGUoQmluZFRvQ3VycmVudEFjY291bnQpO1xyXG5cclxuICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50ID0gZGVib3VuY2VSZW5kZXIoQmluZFRvQ3VycmVudEFjY291bnQsIDEwMCwge1xyXG4gICAgICAgIGxlYWRpbmc6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29ubmVjdChcclxuICAgICAgICBCaW5kVG9DdXJyZW50QWNjb3VudCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBcInBsZWFzZS1sb2dpblwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDogbmV3IE1hcChbW1wibmFtZVwiLCBjdXJyZW50QWNjb3VudF1dKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuL0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIExpbWl0VG9XaXRoZHJhdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGhpZGVfYXNzZXQ6IFByb3BUeXBlcy5ib29sXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgaGlkZV9hc3NldDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgYW1vdW50PXt0aGlzLnByb3BzLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICBhc1BlcmNlbnRhZ2U9e3RoaXMucHJvcHMuYXNQZXJjZW50YWdlfVxyXG4gICAgICAgICAgICAgICAgYXNzZXRJbmZvPXt0aGlzLnByb3BzLmFzc2V0SW5mb31cclxuICAgICAgICAgICAgICAgIHJlcGxhY2U9e3RoaXMucHJvcHMucmVwbGFjZX1cclxuICAgICAgICAgICAgICAgIGhpZGVfYXNzZXQ9e3RoaXMucHJvcHMuaGlkZV9hc3NldH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW1pdFRvV2l0aGRyYXc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4vRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IEZsb2F0aW5nRHJvcGRvd24gZnJvbSBcIi4vRmxvYXRpbmdEcm9wZG93blwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5jbGFzcyBQZXJpb2RTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhIHRyYW5zbGF0aW9uIGtleSBmb3IgdGhlIGxhYmVsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgdGFiSW5kZXg6IDBcclxuICAgIH07XHJcblxyXG4gICAgZ2V0TnVtZXJpY0V2ZW50VmFsdWUoZSkge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IG51bGw7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9PSBcIlwiIHx8XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID09IG51bGwgfHxcclxuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSA9PSBlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgICAgICBpbnB1dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dCA9XHJcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlLnRyaW0oKS5yZXBsYWNlKC9bXlxcZC4tXS9nLCBcIlwiKSkgfHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5wdXRDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7b25DaGFuZ2UsIHBlcmlvZFR5cGV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLmdldE51bWVyaWNFdmVudFZhbHVlKGUpLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGVyaW9kVHlwZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uVHlwZUNoYW5nZSA9IHR5cGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtvbkNoYW5nZSwgaW5wdXRWYWx1ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGlucHV0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaW5wdXRWYWx1ZSxcclxuICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICBlbnRyaWVzLFxyXG4gICAgICAgICAgICBwZXJpb2RUeXBlLFxyXG4gICAgICAgICAgICB0YWJJbmRleCxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIGRpc2FibGVkLFxyXG4gICAgICAgICAgICBzY3JvbGxfbGVuZ3RoXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW1vdW50LXNlbGVjdG9yXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnByb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1hZGRvbi1iZWZvcmVcIj5FYWNoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nTGVmdDogXCI3MHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbCBzZWxlY3QgZmxvYXRpbmctZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsb2F0aW5nRHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXM9e2VudHJpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwZXJpb2RUeXBlICYmIHBlcmlvZFR5cGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVHlwZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbF9sZW5ndGg9e3Njcm9sbF9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyaW9kU2VsZWN0b3I7XHJcbiIsImltcG9ydCBhbHQgZnJvbSBcImFsdC1pbnN0YW5jZVwiO1xyXG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xyXG5pbXBvcnQgV2FsbGV0QXBpIGZyb20gXCJhcGkvV2FsbGV0QXBpXCI7XHJcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZSwgaGFzaCwgRmV0Y2hDaGFpbk9iamVjdHN9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5cclxuY29uc3QgY2FsY3VsYXRlSGFzaCA9IChjaXBoZXIsIHByZWltYWdlKSA9PiB7XHJcbiAgICBsZXQgcHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkID0gbnVsbDtcclxuICAgIHN3aXRjaCAoY2lwaGVyKSB7XHJcbiAgICAgICAgY2FzZSBcInNoYTI1NlwiOlxyXG4gICAgICAgICAgICBwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQgPSBoYXNoLnNoYTI1NihwcmVpbWFnZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJyaXBlbWQxNjBcIjpcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaF9jYWxjdWxhdGVkID0gaGFzaC5yaXBlbWQxNjAocHJlaW1hZ2UpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic2hhMVwiOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcInNoYTEgaXMgbm90IGNvbnNpZGVyZWQgYSBzZWN1cmUgaGFzaGluZyBhbGdvcml0aG0sIHBsYWFzZSB1c2Ugc2hhMjU2XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgY2lwaGVyIG5hbWUgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBodGxjIG9wXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByZWltYWdlX2hhc2hfY2FsY3VsYXRlZDtcclxufTtcclxuY29uc3QgZ2V0Q2lwaGVySW50ID0gY2lwaGVyID0+IHtcclxuICAgIGxldCBwcmVpbWFnZV9oYXNoX2NpcGhlciA9IG51bGw7XHJcbiAgICBzd2l0Y2ggKGNpcGhlcikge1xyXG4gICAgICAgIGNhc2UgXCJzaGEyNTZcIjpcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaF9jaXBoZXIgPSAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicmlwZW1kMTYwXCI6XHJcbiAgICAgICAgICAgIHByZWltYWdlX2hhc2hfY2lwaGVyID0gMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInNoYTFcIjpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgXCJzaGExIGlzIG5vdCBjb25zaWRlcmVkIGEgc2VjdXJlIGhhc2hpbmcgYWxnb3JpdGhtLCBwbGFhc2UgdXNlIHNoYTI1NlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nIGNpcGhlciBuYW1lIHByb3ZpZGVkIHdoZW4gY3JlYXRpbmcgaHRsYyBvcFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcmVpbWFnZV9oYXNoX2NpcGhlcjtcclxufTtcclxuY2xhc3MgSHRsY0FjdGlvbnMge1xyXG4gICAgY3JlYXRlKHtcclxuICAgICAgICBmcm9tX2FjY291bnRfaWQsXHJcbiAgICAgICAgdG9fYWNjb3VudF9pZCxcclxuICAgICAgICBhc3NldF9pZCxcclxuICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgbG9ja190aW1lLFxyXG4gICAgICAgIHByZWltYWdlX2NpcGhlcixcclxuICAgICAgICBwcmVpbWFnZSA9IG51bGwsXHJcbiAgICAgICAgcHJlaW1hZ2VfaGFzaCA9IG51bGwsXHJcbiAgICAgICAgcHJlaW1hZ2Vfc2l6ZSA9IG51bGwsXHJcbiAgICAgICAgZmVlX2Fzc2V0ID0gbnVsbFxyXG4gICAgfSkge1xyXG4gICAgICAgIGlmICghZmVlX2Fzc2V0KSB7XHJcbiAgICAgICAgICAgIGZlZV9hc3NldCA9IFwiMS4zLjBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmZWVfYXNzZXQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZmVlX2Fzc2V0ID0gZmVlX2Fzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ciA9IFdhbGxldEFwaS5uZXdfdHJhbnNhY3Rpb24oKTtcclxuXHJcbiAgICAgICAgbGV0IHByZWltYWdlX2hhc2hfY2lwaGVyID0gZ2V0Q2lwaGVySW50KHByZWltYWdlX2NpcGhlcik7XHJcbiAgICAgICAgaWYgKHByZWltYWdlICYmICFwcmVpbWFnZV9oYXNoKSB7XHJcbiAgICAgICAgICAgIHByZWltYWdlX2hhc2ggPSBjYWxjdWxhdGVIYXNoKHByZWltYWdlX2NpcGhlciwgcHJlaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXByZWltYWdlX3NpemUpIHtcclxuICAgICAgICAgICAgaWYgKHByZWltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVpbWFnZV9zaXplID0gcHJlaW1hZ2UubGVuZ3RoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJQcmVpbWFnZSBtdXN0IGJlIGdpdmVuIGlmIHNpemUgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbihcImh0bGNfY3JlYXRlXCIsIHtcclxuICAgICAgICAgICAgZnJvbTogZnJvbV9hY2NvdW50X2lkLFxyXG4gICAgICAgICAgICB0bzogdG9fYWNjb3VudF9pZCxcclxuICAgICAgICAgICAgZmVlOiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogZmVlX2Fzc2V0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFtb3VudDoge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogYXNzZXRfaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJlaW1hZ2VfaGFzaDogW3ByZWltYWdlX2hhc2hfY2lwaGVyLCBwcmVpbWFnZV9oYXNoXSxcclxuICAgICAgICAgICAgcHJlaW1hZ2Vfc2l6ZTogcHJlaW1hZ2Vfc2l6ZSxcclxuICAgICAgICAgICAgY2xhaW1fcGVyaW9kX3NlY29uZHM6IGxvY2tfdGltZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbGV0RGIucHJvY2Vzc190cmFuc2FjdGlvbih0ciwgbnVsbCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIltIdGxjQWN0aW9ucy5qczo2OV0gLS0tLS0gaHRsYyBjcmVhdGUgZXJyb3IgLS0tLS0+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlZGVlbSh7aHRsY19pZCwgdXNlcl9pZCwgcHJlaW1hZ2V9KSB7XHJcbiAgICAgICAgbGV0IHRyID0gV2FsbGV0QXBpLm5ld190cmFuc2FjdGlvbigpO1xyXG5cclxuICAgICAgICB0ci5hZGRfdHlwZV9vcGVyYXRpb24oXCJodGxjX3JlZGVlbVwiLCB7XHJcbiAgICAgICAgICAgIHByZWltYWdlOiBuZXcgQnVmZmVyKHByZWltYWdlKS50b1N0cmluZyhcImhleFwiKSxcclxuICAgICAgICAgICAgZmVlOiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGh0bGNfaWQ6IGh0bGNfaWQsXHJcbiAgICAgICAgICAgIHJlZGVlbWVyOiB1c2VyX2lkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsZXREYi5wcm9jZXNzX3RyYW5zYWN0aW9uKHRyLCBudWxsLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiW0h0bGNBY3Rpb25zLmpzOjk4XSAtLS0tLSBodGxjIHJlZGVlbSBlcnJvciAtLS0tLT5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZXh0ZW5kKHtodGxjX2lkLCB1c2VyX2lkLCBzZWNvbmRzX3RvX2FkZH0pIHtcclxuICAgICAgICBsZXQgdHIgPSBXYWxsZXRBcGkubmV3X3RyYW5zYWN0aW9uKCk7XHJcblxyXG4gICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbihcImh0bGNfZXh0ZW5kXCIsIHtcclxuICAgICAgICAgICAgZmVlOiB7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGh0bGNfaWQ6IGh0bGNfaWQsXHJcbiAgICAgICAgICAgIHVwZGF0ZV9pc3N1ZXI6IHVzZXJfaWQsXHJcbiAgICAgICAgICAgIHNlY29uZHNfdG9fYWRkOiBzZWNvbmRzX3RvX2FkZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbGV0RGIucHJvY2Vzc190cmFuc2FjdGlvbih0ciwgbnVsbCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIltIdGxjQWN0aW9ucy5qczoxMjddIC0tLS0tIGh0bGMgZXh0ZW5kIGVycm9yIC0tLS0tPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVIYXNoKHByZWltYWdlLCBjaXBoZXIpIHtcclxuICAgICAgICBjb25zdCBwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQgPSBjYWxjdWxhdGVIYXNoKGNpcGhlciwgcHJlaW1hZ2UpO1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSBwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQubGVuZ3RoO1xyXG4gICAgICAgIGxldCBoYXNoID0gbmV3IEJ1ZmZlcihwcmVpbWFnZV9oYXNoX2NhbGN1bGF0ZWQpLnRvU3RyaW5nKFwiaGV4XCIpO1xyXG4gICAgICAgIHJldHVybiB7aGFzaCwgc2l6ZX07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEh0bGNBY3Rpb25zKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGJhc2VFYWNoIGZyb20gJy4vX2Jhc2VFYWNoLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL2lzQXJyYXlMaWtlLmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXBgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pID8gQXJyYXkoY29sbGVjdGlvbi5sZW5ndGgpIDogW107XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1hcDtcbiIsImltcG9ydCBhcnJheU1hcCBmcm9tICcuL19hcnJheU1hcC5qcyc7XG5pbXBvcnQgYmFzZUl0ZXJhdGVlIGZyb20gJy4vX2Jhc2VJdGVyYXRlZS5qcyc7XG5pbXBvcnQgYmFzZU1hcCBmcm9tICcuL19iYXNlTWFwLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB2YWx1ZXMgYnkgcnVubmluZyBlYWNoIGVsZW1lbnQgaW4gYGNvbGxlY3Rpb25gIHRocnVcbiAqIGBpdGVyYXRlZWAuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYF8uZXZlcnlgLCBgXy5maWx0ZXJgLCBgXy5tYXBgLCBgXy5tYXBWYWx1ZXNgLCBgXy5yZWplY3RgLCBhbmQgYF8uc29tZWAuXG4gKlxuICogVGhlIGd1YXJkZWQgbWV0aG9kcyBhcmU6XG4gKiBgYXJ5YCwgYGNodW5rYCwgYGN1cnJ5YCwgYGN1cnJ5UmlnaHRgLCBgZHJvcGAsIGBkcm9wUmlnaHRgLCBgZXZlcnlgLFxuICogYGZpbGxgLCBgaW52ZXJ0YCwgYHBhcnNlSW50YCwgYHJhbmRvbWAsIGByYW5nZWAsIGByYW5nZVJpZ2h0YCwgYHJlcGVhdGAsXG4gKiBgc2FtcGxlU2l6ZWAsIGBzbGljZWAsIGBzb21lYCwgYHNvcnRCeWAsIGBzcGxpdGAsIGB0YWtlYCwgYHRha2VSaWdodGAsXG4gKiBgdGVtcGxhdGVgLCBgdHJpbWAsIGB0cmltRW5kYCwgYHRyaW1TdGFydGAsIGFuZCBgd29yZHNgXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBzcXVhcmUobikge1xuICogICByZXR1cm4gbiAqIG47XG4gKiB9XG4gKlxuICogXy5tYXAoWzQsIDhdLCBzcXVhcmUpO1xuICogLy8gPT4gWzE2LCA2NF1cbiAqXG4gKiBfLm1hcCh7ICdhJzogNCwgJ2InOiA4IH0sIHNxdWFyZSk7XG4gKiAvLyA9PiBbMTYsIDY0XSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcgfVxuICogXTtcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8ubWFwKHVzZXJzLCAndXNlcicpO1xuICogLy8gPT4gWydiYXJuZXknLCAnZnJlZCddXG4gKi9cbmZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheU1hcCA6IGJhc2VNYXA7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXA7XG4iLCJpbXBvcnQgYmFzZVNldCBmcm9tICcuL19iYXNlU2V0LmpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIGEgcG9ydGlvbiBvZiBgcGF0aGAgZG9lc24ndCBleGlzdCxcbiAqIGl0J3MgY3JlYXRlZC4gQXJyYXlzIGFyZSBjcmVhdGVkIGZvciBtaXNzaW5nIGluZGV4IHByb3BlcnRpZXMgd2hpbGUgb2JqZWN0c1xuICogYXJlIGNyZWF0ZWQgZm9yIGFsbCBvdGhlciBtaXNzaW5nIHByb3BlcnRpZXMuIFVzZSBgXy5zZXRXaXRoYCB0byBjdXN0b21pemVcbiAqIGBwYXRoYCBjcmVhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5zZXQob2JqZWN0LCAnYVswXS5iLmMnLCA0KTtcbiAqIGNvbnNvbGUubG9nKG9iamVjdC5hWzBdLmIuYyk7XG4gKiAvLyA9PiA0XG4gKlxuICogXy5zZXQob2JqZWN0LCBbJ3gnLCAnMCcsICd5JywgJ3onXSwgNSk7XG4gKiBjb25zb2xlLmxvZyhvYmplY3QueFswXS55LnopO1xuICogLy8gPT4gNVxuICovXG5mdW5jdGlvbiBzZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBvYmplY3QgOiBiYXNlU2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=