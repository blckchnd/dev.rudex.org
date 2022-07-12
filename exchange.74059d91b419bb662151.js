(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[10],{

/***/ 2765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleDepositWithdrawModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(665);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(637);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(607);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1963);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1962);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(605);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2341);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2091);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2312);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1825);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1941);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(636);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1816);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(656);
/* harmony import */ var _Utility_DecimalChecker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2086);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(663);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(621);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(437);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2095);
/* provided dependency */ var Buffer = __webpack_require__(443)["Buffer"];
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

























class DepositWithdrawContent extends _Utility_DecimalChecker__WEBPACK_IMPORTED_MODULE_17__.DecimalChecker {
  static propTypes = {
    balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainObject,
    sender: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAsset.isRequired,
    coreAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAsset.isRequired,
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAsset.isRequired
  };
  static defaultProps = {
    coreAsset: "1.3.0",
    globalObject: "2.0.0"
  };

  constructor(props) {
    super();
    this.state = {
      toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__.WithdrawAddresses.getLast(props.walletType),
      withdrawValue: "",
      amountError: null,
      symbol: props.asset.get("symbol"),
      to_withdraw: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Asset({
        asset_id: props.asset.get("id"),
        precision: props.asset.get("precision")
      }),
      feeAsset: {
        asset_id: bitsharesjs__WEBPACK_IMPORTED_MODULE_21__.ChainStore.assets_by_symbol.get(props.fee_asset_symbol) || "1.3.0",
        amount: 0
      },
      loading: false,
      emptyAddressDeposit: false
    };

    this._validateAddress(this.state.toAddress, props);

    this.addDepositAddress = this.addDepositAddress.bind(this);
    this._checkBalance = this._checkBalance.bind(this);
    this._getCurrentBalance = this._getCurrentBalance.bind(this);
  }

  UNSAFE_componentWillMount() {
    this._getDepositAddress();
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (np.asset && this.props.asset && np.asset.get("id") !== this.props.asset.get("id")) {
      this.setState({
        to_withdraw: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Asset({
          asset_id: np.asset.get("id"),
          precision: np.asset.get("precision")
        }),
        gateFee: np.asset.get("gateFee"),
        intermediateAccount: np.asset.get("intermediateAccount"),
        symbol: np.asset.get("symbol"),
        memo: "",
        withdrawValue: "",
        receive_address: null,
        toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__.WithdrawAddresses.getLast(np.walletType)
      }, this._getDepositAddress);
    }
  }

  _getDepositAddress() {
    if (!this.props.backingCoinType) return;
    let receive_address = (0,common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__.getDepositAddress)({
      coin: `open.${this.props.backingCoinType.toLowerCase()}`,
      account: this.props.account,
      stateCallback: this.addDepositAddress
    });

    if (!receive_address) {
      (0,common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__.requestDepositAddress)(this._getDepositObject());
    } else {
      this.setState({
        receive_address
      });
    }
  }

  _getDepositObject() {
    return {
      inputCoinType: this.props.backingCoinType.toLowerCase(),
      outputCoinType: this.props.symbol.toLowerCase(),
      outputAddress: this.props.sender.get("name"),
      stateCallback: this.addDepositAddress
    };
  }

  requestDepositAddressLoad() {
    this.setState({
      loading: true,
      emptyAddressDeposit: false
    });
    (0,common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__.requestDepositAddress)(this._getDepositObject());
  }

  addDepositAddress(receive_address) {
    if (receive_address.error) {
      receive_address.error.message === "no_address" ? this.setState({
        emptyAddressDeposit: true
      }) : this.setState({
        emptyAddressDeposit: false
      });
    }

    this.setState({
      receive_address,
      loading: false
    });
  }

  componentDidUpdate() {
    react_tooltip__WEBPACK_IMPORTED_MODULE_8__["default"].rebuild();
  }

  getMemo() {
    return this.props.backingCoinType.toLowerCase() + ":" + this.state.toAddress + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : "");
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.to_withdraw.getAmount() === 0) {
      return this.setState({
        amountError: "transfer.errors.pos"
      });
    }

    if (!this.props.intermediateAccount) return;
    const fee = this.state.feeAsset;

    const gateFee = this._getGateFee();

    let sendAmount = this.state.to_withdraw.clone();
    let balanceAmount = sendAmount.clone(this._getCurrentBalance().get("balance"));
    sendAmount.plus(gateFee);
    /* Insufficient balance */

    if (balanceAmount.lt(sendAmount)) {
      // Send the originally entered amount
      sendAmount = this.state.to_withdraw.clone();
    }

    actions_AccountActions__WEBPACK_IMPORTED_MODULE_7__["default"].transfer(this.props.sender.get("id"), this.props.intermediateAccount, this.state.to_withdraw.getAmount(), this.state.to_withdraw.asset_id, this.getMemo(), null, fee.asset_id);
  }

  _updateAmount() {
    const {
      feeAsset
    } = this.state;

    const currentBalance = this._getCurrentBalance();

    let total = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Asset({
      amount: currentBalance ? currentBalance.get("balance") : 0,
      asset_id: this.props.asset.get("id"),
      precision: this.props.asset.get("precision")
    }); // Subtract the fee if it is using the same asset

    if (total.asset_id === feeAsset.asset_id) {
      total.minus(feeAsset);
    }

    this.state.to_withdraw.setAmount({
      sats: total.getAmount()
    });
    this.setState({
      withdrawValue: total.getAmount({
        real: true
      }),
      amountError: null
    }, this._checkBalance);
  }

  _getCurrentBalance() {
    let balances = this.props.balance ? [bitsharesjs__WEBPACK_IMPORTED_MODULE_21__.ChainStore.getObject(this.props.balance)] : this.props.balances;
    return !!balances ? balances.find(b => {
      return b && b.get("asset_type") === this.props.asset.get("id");
    }) : null;
  }

  _checkBalance() {
    const {
      feeAsset,
      to_withdraw
    } = this.state;
    const {
      asset
    } = this.props;

    const balance = this._getCurrentBalance();

    if (!balance || !feeAsset) return;
    const hasBalance = (0,common_trxHelper__WEBPACK_IMPORTED_MODULE_14__.checkBalance)(to_withdraw.getAmount({
      real: true
    }), asset, feeAsset, balance, this._getGateFee());
    if (hasBalance === null) return;
    if (this.state.balanceError !== !hasBalance) this.setState({
      balanceError: !hasBalance
    });
    return hasBalance;
  }

  _onInputAmount(e) {
    try {
      this.state.to_withdraw.setAmount({
        real: parseFloat(e.target.value || 0)
      });
      this.setState({
        withdrawValue: e.target.value,
        amountError: null
      }, this._checkBalance);
    } catch (err) {
      console.error("err:", err);
    }
  }

  _onInputTo(e) {
    let toAddress = e.target.value.trim();
    this.setState({
      withdraw_address_check_in_progress: true,
      withdraw_address_selected: toAddress,
      validAddress: null,
      toAddress: toAddress
    });

    this._validateAddress(toAddress);
  }

  _onMemoChanged(e) {
    this.setState({
      memo: e.target.value
    });
  }

  _validateAddress(address, props = this.props) {
    (0,common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__.validateAddress)({
      url: api_apiConfig__WEBPACK_IMPORTED_MODULE_18__.rudexAPIs.BASE,
      walletType: props.walletType,
      newAddress: address
    }).then(isValid => {
      if (this.state.toAddress === address) {
        this.setState({
          withdraw_address_check_in_progress: false,
          validAddress: !!isValid
        });
      }
    }).catch(err => {
      console.error("Error when validating address:", err);
    });
  }

  _openRegistrarSite(e) {
    e.preventDefault();
    let newWnd = window.open(stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].site_registr, "_blank");
    newWnd.opener = null;
  }

  _getGateFee() {
    const {
      gateFee,
      asset
    } = this.props;
    return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Asset({
      real: parseFloat(gateFee ? gateFee.replace(",", "") : 0),
      asset_id: asset.get("id"),
      precision: asset.get("precision")
    });
  }

  onFeeChanged(asset) {
    this.setState({
      feeAsset: asset
    });
  }

  _renderWithdraw() {
    const {
      amountError,
      toAddress,
      memo,
      feeAsset,
      balanceError,
      withdrawValue,
      validAddress
    } = this.state;
    const {
      supportsMemos,
      asset,
      account
    } = this.props;
    const {
      name: assetName
    } = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(asset);
    let tabIndex = 1; // if(this.props.fiatModal){
    //     if(~this.props.fiatModal.indexOf('canFiatWith')){
    //         return (<WithdrawFiatOpenLedger
    //             account={this.props.account}
    //             issuer_account="openledger-fiat"
    //             deposit_asset={this.props.asset.get("symbol").split('OPEN.').join('')}
    //             receive_asset={this.props.asset.get("symbol")}
    //             rpc_url={SettingsStore.rpc_url}
    //         />);
    //     }else{
    //         return (<p>Click <a href='#' onClick={this._openRegistrarSite} >here</a> to register for deposits </p>);
    //     }
    // }

    const currentFee = feeAsset;
    const trxInfoContent = this.getMemo();
    const disableSubmit = !currentFee || balanceError || !toAddress || !withdrawValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.withdraw_funds",
      asset: assetName,
      wallet_name: (0,branding__WEBPACK_IMPORTED_MODULE_19__.getWalletName)()
    })), this._renderCurrentBalance(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "SimpleTrade__withdraw-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("modal.withdraw.amount")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label input-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      tabIndex: tabIndex++,
      type: "number",
      min: "0",
      onKeyPress: this.onKeyPress.bind(this),
      value: withdrawValue,
      onChange: this._onInputAmount.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-label select floating-dropdown"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dropdown-wrapper inactive"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, assetName)))), amountError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "has-error no-margin",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: amountError
    })) : null, this.state.balanceError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "has-error no-margin",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "transfer.errors.insufficient"
    })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "SimpleTrade__withdraw-row withdraw-fee-selector"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_22__["default"], {
      label: "showcases.barter.fee_when_proposal_executes",
      account: account,
      transaction: {
        type: "transfer",
        options: ["price_per_kbyte"],
        data: {
          type: "memo",
          content: trxInfoContent
        }
      },
      onChange: this.onFeeChanged.bind(this)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "SimpleTrade__withdraw-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("modal.withdraw.address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label input-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("gateway.withdraw_placeholder", {
        asset: assetName
      }),
      tabIndex: tabIndex++,
      type: "text",
      value: toAddress,
      onChange: this._onInputTo.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "form-label select floating-dropdown"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dropdown-wrapper inactive"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__.Tooltip, {
      placement: "right",
      title: counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("tooltip.withdraw_address", {
        asset: assetName
      })
    }, "?")))), !validAddress && toAddress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "has-error",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.valid_address",
      coin_type: assetName
    })) : null), supportsMemos ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "SimpleTrade__withdraw-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("transfer.memo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label input-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
      rows: "3",
      value: memo,
      tabIndex: tabIndex++,
      onChange: this._onMemoChanged.bind(this)
    })), !validAddress && toAddress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "has-error",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.valid_address",
      coin_type: assetName
    })) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button-group SimpleTrade__withdraw-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      tabIndex: tabIndex++,
      className: "button" + (disableSubmit ? " disabled" : ""),
      onClick: this.onSubmit.bind(this),
      type: "submit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.withdraw_now"
    }))));
  }

  _renderDeposit() {
    const {
      receive_address,
      loading,
      emptyAddressDeposit
    } = this.state;
    const {
      name: assetName
    } = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(this.props.asset);
    const hasMemo = receive_address && "memo" in receive_address && receive_address.memo;
    const addressValue = receive_address && receive_address.address || "";
    let tabIndex = 1; // if(this.props.fiatModal){
    //     if(~this.props.fiatModal.indexOf('canFiatDep')){
    //         return (<DepositFiatOpenLedger
    //             account={this.props.account}
    //             issuer_account="openledger-fiat"
    //             deposit_asset={this.props.asset.get("symbol").split('OPEN.').join('')}
    //             receive_asset={this.props.asset.get("symbol")}
    //             rpc_url={SettingsStore.rpc_url}
    //         />);
    //     }else{
    //         return (<p>Click <a href='#' onClick={this._openRegistrarSite} >here</a> to register for deposits </p>);
    //     }
    // }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: !addressValue ? "no-overflow" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      unsafe: true,
      content: "gateway.add_funds",
      account: this.props.sender.get("name"),
      wallet_name: (0,branding__WEBPACK_IMPORTED_MODULE_19__.getWalletName)()
    })), this._renderCurrentBalance(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "SimpleTrade__withdraw-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__.Tooltip, {
      placement: "right",
      title: counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("tooltip.deposit_tip", {
        asset: assetName
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "help-tooltip",
      content: "gateway.deposit_to",
      asset: assetName
    }), ":", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "fz_12 left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.deposit_notice_delay"
    })))), !addressValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], {
      type: "three-bounce"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, emptyAddressDeposit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.please_generate_address"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "inline-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      readOnly: true,
      type: "text",
      value: addressValue
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
      text: addressValue
    }), " ")), hasMemo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "inline-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      readOnly: true,
      type: "text",
      value: counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("transfer.memo") + ": " + receive_address.memo
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
      text: receive_address.memo
    }))) : null, receive_address && receive_address.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "has-error",
      style: {
        paddingTop: 10
      }
    }, receive_address.error.message) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button-group SimpleTrade__withdraw-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      tabIndex: tabIndex++,
      className: "button spinner-button-circle",
      onClick: this.requestDepositAddressLoad.bind(this),
      type: "submit"
    }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], {
      type: "circle"
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "gateway.generate_new"
    }))));
  }

  _renderCurrentBalance() {
    const {
      name: assetName
    } = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(this.props.asset);
    const isDeposit = this.props.action === "deposit";

    let currentBalance = this._getCurrentBalance();

    let asset = currentBalance ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Asset({
      asset_id: currentBalance.get("asset_type"),
      precision: this.props.asset.get("precision"),
      amount: currentBalance.get("balance")
    }) : null; // TEMP //
    // asset = new Asset({
    //     asset_id: this.props.asset.get("id"),
    //     precision: this.props.asset.get("precision"),
    //     amount: 65654645
    // });

    const applyBalanceButton = isDeposit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        border: "2px solid black",
        borderLeft: "none"
      },
      className: "form-label"
    }, assetName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__.Tooltip, {
      placement: "right",
      title: counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("tooltip.withdraw_full")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button",
      style: {
        border: "2px solid black",
        borderLeft: "none"
      },
      onClick: this._updateAmount.bind(this, !currentBalance ? 0 : parseInt(currentBalance.get("balance"), 10))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
      name: "clippy",
      title: "icons.clippy.withdraw_full"
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "SimpleTrade__withdraw-row",
      style: {
        fontSize: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        fontSize: "1rem"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("gateway.balance_asset", {
      asset: assetName
    }), ":", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "inline-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      disabled: true,
      style: {
        color: "black",
        border: "2px solid black",
        padding: 10,
        width: "100%"
      },
      value: !asset ? 0 : asset.getAmount({
        real: true
      })
    }), applyBalanceButton)));
  }

  render() {
    let {
      asset,
      action
    } = this.props;
    let isDeposit = action === "deposit";

    if (!asset) {
      return null;
    }

    const {
      name: assetName
    } = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(asset);
    let content = this.props.isDown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "txtlabel cancel",
      content: "gateway.unavailable_OPEN",
      component: "p"
    })) : !this.props.isAvailable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "txtlabel cancel",
      content: "gateway.unavailable",
      component: "p"
    })) : isDeposit ? this._renderDeposit() : this._renderWithdraw();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "SimpleTrade__modal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical no-overflow",
      style: {
        zIndex: 1002,
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingTop: "1rem"
      }
    }, content));
  }

}

DepositWithdrawContent = (0,alt_react__WEBPACK_IMPORTED_MODULE_15__.connect)(DepositWithdrawContent, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"]];
  },

  getProps(props) {
    return {
      fee_asset_symbol: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().settings.get("fee_asset")
    };
  }

});
DepositWithdrawContent = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(DepositWithdrawContent);
class SimpleDepositWithdrawModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  show() {
    this.setState({
      open: true
    }, () => {
      react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default().publish(this.props.modalId, "open");
    });
  }

  onClose() {
    this.setState({
      open: false
    });
  }

  render() {
    const isDeposit = this.props.action === "deposit";
    const title = isDeposit ? counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("gateway.deposit") : counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("modal.withdraw.submit");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__.Modal, {
      title: title,
      footer: [],
      visible: this.props.visible,
      onCancel: this.props.hideModal,
      className: "test",
      onClose: this.onClose.bind(this),
      overlay: true,
      id: this.props.modalId
    }, this.props.visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DepositWithdrawContent, _extends({}, this.props, {
      open: this.props.visible
    })) : null);
  }

}

/***/ }),

/***/ 2691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(607);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2436);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1962);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1963);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2692);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2088);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(637);
/* harmony import */ var _ExchangeInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2346);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(618);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1043);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(924);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1825);
/* harmony import */ var _Modal_SettleModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2693);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2341);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(589);
/* harmony import */ var _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2089);
























class BuySell extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static propTypes = {
    balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainObject,
    type: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().string),
    amountChange: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func.isRequired),
    priceChange: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func.isRequired),
    onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func.isRequired),
    onExpirationTypeChange: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func.isRequired),
    onExpirationCustomChange: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().func.isRequired)
  };
  static defaultProps = {
    type: "bid"
  };

  constructor() {
    super();
    this.state = {
      forceReRender: false,
      isSettleModalVisible: false
    };
    this.showSettleModal = this.showSettleModal.bind(this);
    this.hideSettleModal = this.hideSettleModal.bind(this);
  }
  /*
   * Force re-rendering component when state changes.
   * This is required for an updated value of component width
   *
   * It will trigger a re-render twice
   * - Once when state is changed
   * - Once when forceReRender is set to false
   */


  _forceRender(np) {
    if (this.state.forceReRender) {
      this.setState({
        forceReRender: false
      });
    }

    if (this.props.parentWidth !== np.parentWidth) {
      this.setState({
        forceReRender: true
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    this._forceRender(nextProps, nextState);

    return nextState.isSettleModalVisible !== this.state.isSettleModalVisible || nextProps.amount !== this.props.amount || nextProps.onBorrow !== this.props.onBorrow || nextProps.total !== this.props.total || nextProps.currentPrice !== this.props.currentPrice || nextProps.price !== this.props.price || nextProps.balance !== this.props.balance || nextProps.account !== this.props.account || nextProps.className !== this.props.className || (nextProps.fee && this.props.fee ? nextProps.fee.ne(this.props.fee) : false) || nextProps.isPredictionMarket !== this.props.isPredictionMarket || nextProps.feeAsset !== this.props.feeAsset || nextProps.isOpen !== this.props.isOpen || nextProps.hasFeeBalance !== this.props.hasFeeBalance || nextProps.expirationType !== this.props.expirationType || nextProps.expirationCustomTime !== this.props.expirationCustomTime || nextProps.parentWidth !== this.props.parentWidth || nextState.forceReRender !== this.state.forceReRender || nextProps.singleColumnOrderForm !== this.props.singleColumnOrderForm || nextProps.hideFunctionButtons !== this.props.hideFunctionButtons || nextState.isQuickDepositVisible !== this.state.isQuickDepositVisible;
  }

  getDatePickerRef = node => {
    this.datePricker = node;
  };

  showSettleModal() {
    this.setState({
      isSettleModalVisible: true
    });
  }

  hideSettleModal() {
    this.setState({
      isSettleModalVisible: false
    });
  }

  _addBalance(balance) {
    if (this.props.type === "bid") {
      this.props.totalChange({
        target: {
          value: balance.getAmount({
            real: true
          }).toString()
        }
      });
    } else {
      this.props.amountChange({
        target: {
          value: balance.getAmount({
            real: true
          }).toString()
        }
      });
    }
  }

  _setPrice(price) {
    this.props.priceChange({
      target: {
        value: price.toString()
      }
    });
  }

  handleQuickDepositVisibleChange = visible => {
    this.setState({
      isQuickDepositVisible: visible
    });

    if (visible) {
      setTimeout(() => {
        react_tooltip__WEBPACK_IMPORTED_MODULE_17__["default"].rebuild();
      }, 20);
    }
  };

  onDeposit() {
    this.setState({
      isQuickDepositVisible: false
    });
    this.props.onDeposit();
  }

  onBuy() {
    this.setState({
      isQuickDepositVisible: false
    });
    this.props.onBuy();
  }

  onExpirationSelectChange = e => {
    if (e.target.value === "SPECIFIC") {
      this.datePricker.picker.handleOpenChange(true);
    } else {
      this.datePricker.picker.handleOpenChange(false);
    }

    this.props.onExpirationTypeChange(e);
  };
  onExpirationSelectClick = e => {
    if (e.target.value === "SPECIFIC") {
      if (this.firstClick) {
        this.secondClick = true;
      }

      this.firstClick = true;

      if (this.secondClick) {
        this.datePricker.picker.handleOpenChange(true);
        this.firstClick = false;
        this.secondClick = false;
      }
    }
  };
  onExpirationSelectBlur = () => {
    this.firstClick = false;
    this.secondClick = false;
  };

  render() {
    let {
      type,
      quote,
      base,
      amountChange,
      fee,
      isPredictionMarket,
      priceChange,
      onSubmit,
      balance,
      totalChange,
      balancePrecision,
      currentPrice,
      currentPriceObject,
      feeAsset,
      feeAssets,
      hasFeeBalance,
      hideHeader,
      verticalOrderForm
    } = this.props;
    const {
      expirationCustomTime
    } = this.props;
    let clientWidth = this.refs.order_form ? this.refs.order_form.clientWidth : 0;
    let singleColumnForm = clientWidth < 450 || this.props.singleColumnOrderForm ? true : false;
    let amount, price, total;
    if (this.props.amount) amount = this.props.amount;
    if (this.props.price) price = this.props.price;
    if (this.props.total) total = this.props.total;
    let balanceAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__.Asset({
      amount: balance ? balance.get("balance") : 0,
      precision: balancePrecision,
      asset_id: this.props.balanceId
    });
    const maxBaseMarketFee = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__.Asset({
      amount: base.getIn(["options", "max_market_fee"]),
      asset_id: base.get("asset_id"),
      precision: base.get("precision")
    });
    const maxQuoteMarketFee = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_10__.Asset({
      amount: quote.getIn(["options", "max_market_fee"]),
      asset_id: quote.get("asset_id"),
      precision: quote.get("precision")
    });
    const baseMarketFeePercent = base.getIn(["options", "market_fee_percent"]) / 100 + "%";
    const quoteMarketFeePercent = quote.getIn(["options", "market_fee_percent"]) / 100 + "%";
    const quoteFee = !amount ? 0 : Math.min(maxQuoteMarketFee.getAmount({
      real: true
    }), amount * quote.getIn(["options", "market_fee_percent"]) / 10000).toFixed(maxQuoteMarketFee.precision);
    const baseFee = !amount ? 0 : Math.min(maxBaseMarketFee.getAmount({
      real: true
    }), total * base.getIn(["options", "market_fee_percent"]) / 10000).toFixed(maxBaseMarketFee.precision);
    const baseFlagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].getFlagBooleans(base.getIn(["options", "flags"]), base.has("bitasset_data_id"));
    const quoteFlagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].getFlagBooleans(quote.getIn(["options", "flags"]), quote.has("bitasset_data_id"));
    const {
      name: baseName,
      prefix: basePrefix
    } = common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].replaceName(this.props.base);
    var baseMarketFee = baseFlagBooleans["charge_market_fee"] ? verticalOrderForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.market_fee", {
        percent: baseMarketFeePercent,
        asset: (basePrefix || "") + baseName
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-12 buy-sell-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "explorer.asset.summary.market_fee"
    }), ", ", baseMarketFeePercent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "inputAddon small-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      placeholder: "0.0",
      id: "baseMarketFee",
      defaultValue: baseFee,
      value: baseFee,
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
        noTip: true,
        name: base.get("symbol")
      }))
    })))) : singleColumnForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.market_fee", {
        percent: baseMarketFeePercent,
        asset: (basePrefix || "") + baseName
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-3 buy-sell-label fixmarket-fee"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "explorer.asset.summary.market_fee"
    }), ", ", baseMarketFeePercent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "inputAddon small-9"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      placeholder: "0.0",
      id: "baseMarketFee",
      defaultValue: baseFee,
      value: baseFee,
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
        noTip: true,
        name: base.get("symbol")
      }))
    })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.market_fee", {
        percent: baseMarketFeePercent,
        asset: (basePrefix || "") + baseName
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-12 buy-sell-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "explorer.asset.summary.market_fee"
    }), ", ", baseMarketFeePercent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "inputAddon small-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      placeholder: "0.0",
      id: "baseMarketFee",
      defaultValue: baseFee,
      value: baseFee,
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
        noTip: true,
        name: base.get("symbol")
      }))
    })))) : null;
    const {
      name: quoteName,
      prefix: quotePrefix
    } = common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].replaceName(this.props.quote);
    var quoteMarketFee = quoteFlagBooleans["charge_market_fee"] ? verticalOrderForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.market_fee", {
        percent: quoteMarketFeePercent,
        asset: (quotePrefix || "") + quoteName
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-12 buy-sell-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "explorer.asset.summary.market_fee"
    }), ", ", quoteMarketFeePercent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "inputAddon small-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      placeholder: "0.0",
      id: "quoteMarketFee",
      defaultValue: quoteFee,
      value: quoteFee,
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          width: 100
        },
        noTip: true,
        name: quote.get("symbol")
      }))
    })))) : singleColumnForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.market_fee", {
        percent: quoteMarketFeePercent,
        asset: (quotePrefix || "") + quoteName
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-3 buy-sell-label fixmarket-fee"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "explorer.asset.summary.market_fee"
    }), ", ", quoteMarketFeePercent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "inputAddon small-9"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      placeholder: "0.0",
      id: "quoteMarketFee",
      defaultValue: quoteFee,
      value: quoteFee,
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          width: 100
        },
        noTip: true,
        name: quote.get("symbol")
      }))
    })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.market_fee", {
        percent: quoteMarketFeePercent,
        asset: (quotePrefix || "") + quoteName
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-12 buy-sell-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "explorer.asset.summary.market_fee"
    }), ", ", quoteMarketFeePercent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "inputAddon small-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      placeholder: "0.0",
      id: "quoteMarketFee",
      defaultValue: quoteFee,
      value: quoteFee,
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          width: 100
        },
        noTip: true,
        name: quote.get("symbol")
      }))
    })))) : null;
    var emptyCell = !verticalOrderForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      style: {
        visibility: "hidden"
      },
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-3 buy-sell-label fixmarket-fee"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "explorer.asset.summary.market_fee"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "inputAddon small-9"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
      placeholder: "0.0",
      id: "emptyPlaceholder",
      defaultValue: "0",
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          width: 100
        },
        noTip: true,
        name: quote.get("symbol")
      }))
    }))) : null;
    const isBid = type === "bid";
    let marketFee = isBid && quoteMarketFee ? quoteMarketFee : !isBid && baseMarketFee ? baseMarketFee : quoteMarketFee || baseMarketFee ? emptyCell : null;
    let hasBalance = isBid ? balanceAmount.getAmount({
      real: true
    }) >= parseFloat(total) : balanceAmount.getAmount({
      real: true
    }) >= parseFloat(amount);
    let forceSellText = isBid ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.buy") : counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.sell");
    let noBalance = isPredictionMarket ? false : !(balanceAmount.getAmount() > 0 && hasBalance);
    let invalidPrice = !(price > 0);
    let invalidAmount = !(amount > 0);
    let disabled = noBalance || invalidPrice || invalidAmount;
    let buttonClass = classnames__WEBPACK_IMPORTED_MODULE_0___default()("button buySellButton", type, {
      disabled: disabled
    });
    let balanceSymbol = isBid ? base.get("symbol") : quote.get("symbol");
    let disabledText = invalidPrice ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.invalid_price") : invalidAmount ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.invalid_amount") : noBalance ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.no_balance") : null; // Fee asset selection

    if (feeAssets[1] && feeAssets[1].getIn(["options", "core_exchange_rate", "quote", "asset_id"]) === "1.3.0" && feeAssets[1].getIn(["options", "core_exchange_rate", "base", "asset_id"]) === "1.3.0") {
      feeAsset = feeAssets[0];
      feeAssets.splice(1, 1);
    }

    let index = 0;
    let options = feeAssets.map(asset => {
      let {
        name,
        prefix
      } = common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].replaceName(asset);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Select.Option, {
        key: asset.get("id"),
        value: index++
      }, prefix, name);
    }); // Subtract fee from amount to sell

    let balanceToAdd;

    if (feeAsset.get("symbol") === balanceSymbol) {
      balanceToAdd = balanceAmount.clone(balanceAmount.getAmount() - fee.getAmount());
    } else {
      balanceToAdd = balanceAmount;
    }

    let dataIntro = isBid ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("walkthrough.buy_form") : counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("walkthrough.sell_form");
    let expirationTip;

    if (this.props.expirationType !== "SPECIFIC") {
      expirationTip = this.props.expirations[this.props.expirationType].get();
    }

    const expirationsOptionsList = Object.keys(this.props.expirations).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
      value: key,
      key: key
    }, key === "SPECIFIC" && expirationCustomTime !== "Specific" ? moment__WEBPACK_IMPORTED_MODULE_13___default()(expirationCustomTime).format("Do MMM YYYY hh:mm A") : this.props.expirations[key].title));
    const containerClass = "small-12";
    let formContent; // OrderForm is in panel

    if (verticalOrderForm) {
      formContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: containerClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-12 buy-sell-label",
        content: "exchange.price"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Price`,
        value: price,
        onChange: priceChange,
        autoComplete: "off",
        placeholder: "0.0",
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: base.get("symbol")
        }), "\xA0/\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: quote.get("symbol")
        }))
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-12 buy-sell-label",
        content: "transfer.amount"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Amount`,
        value: amount,
        onChange: amountChange,
        autoComplete: "off",
        placeholder: "0.0",
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: quote.get("symbol")
        }))
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-12 buy-sell-label",
        content: "exchange.total"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Total`,
        value: total,
        onChange: totalChange,
        autoComplete: "off",
        placeholder: "0.0",
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: base.get("symbol")
        }))
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-12 buy-sell-label",
        content: "transfer.fee"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Fee`,
        placeholder: "0.0",
        defaultValue: !hasFeeBalance ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("transfer.errors.insufficient") : fee.getAmount({
          real: true
        }),
        disabled: true,
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Select, {
          style: {
            width: 100
          },
          disabled: feeAssets.length === 1,
          defaultValue: feeAssets.indexOf(this.props.feeAsset),
          onChange: this.props.onChangeFeeAsset
        }, options)
      }))), marketFee);
    } else {
      formContent = singleColumnForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: containerClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-3 buy-sell-label",
        content: "exchange.price"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Price`,
        value: price,
        onChange: priceChange,
        autoComplete: "off",
        placeholder: "0.0",
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: base.get("symbol")
        }), "\xA0/\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: quote.get("symbol")
        }))
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-3 buy-sell-label",
        content: "transfer.amount"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Amount`,
        value: amount,
        onChange: amountChange,
        autoComplete: "off",
        placeholder: "0.0",
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: quote.get("symbol")
        }))
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-3 buy-sell-label",
        content: "exchange.total"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Total`,
        value: total,
        onChange: totalChange,
        autoComplete: "off",
        placeholder: "0.0",
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: base.get("symbol")
        }))
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-3 buy-sell-label",
        content: "transfer.fee"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Fee`,
        placeholder: "0.0",
        value: !hasFeeBalance ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("transfer.errors.insufficient") : fee.getAmount({
          real: true
        }),
        disabled: true,
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Select, {
          style: {
            width: 100
          },
          disabled: feeAssets.length === 1,
          defaultValue: feeAssets.indexOf(this.props.feeAsset),
          onChange: this.props.onChangeFeeAsset
        }, options)
      }))), marketFee) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: containerClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "small-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "small-11 grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-3 buy-sell-label",
        content: "exchange.price"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "small-9 buy-sell-label",
        style: {
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
        style: {
          borderBottom: "#A09F9F 1px dotted",
          cursor: "pointer"
        },
        onClick: this.props.setPrice.bind(this, type, currentPriceObject.sellPrice())
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        price: currentPrice,
        quote: quote,
        base: base
      }), " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-11"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Price`,
        value: price,
        onChange: priceChange,
        autoComplete: "off",
        placeholder: "0.0",
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: base.get("symbol")
        }), "\xA0/\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: quote.get("symbol")
        }))
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "small-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "small-12 grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-3 buy-sell-label",
        content: "exchange.total"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "small-9 buy-sell-label",
        style: {
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-3 buy-sell-label",
        content: "exchange.balance"
      }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
        style: {
          borderBottom: "#A09F9F 1px dotted",
          cursor: "pointer"
        },
        onClick: this._addBalance.bind(this, balanceToAdd)
      }, common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(balanceAmount.getAmount({
        real: true
      }), balancePrecision), " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Total`,
        value: total,
        onChange: totalChange,
        autoComplete: "off",
        placeholder: "0.0",
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: base.get("symbol")
        }))
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "grid-block no-overflow wrap shrink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "small-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-3 buy-sell-label",
        content: "transfer.amount"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-11"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Amount`,
        value: amount,
        onChange: amountChange,
        autoComplete: "off",
        placeholder: "0.0",
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
          dataPlace: "right",
          name: quote.get("symbol")
        }))
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "small-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "small-3 buy-sell-label",
        content: "transfer.fee"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "inputAddon small-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: `${type}Fee`,
        placeholder: "0.0",
        defaultValue: !hasFeeBalance ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("transfer.errors.insufficient") : fee.getAmount({
          real: true
        }),
        disabled: true,
        addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Select, {
          style: {
            width: 100
          },
          disabled: feeAssets.length === 1,
          defaultValue: feeAssets.indexOf(this.props.feeAsset),
          onChange: this.props.onChangeFeeAsset
        }, options)
      })))));
    }

    const otherAsset = isBid ? base : quote;
    const isBitAsset = !!otherAsset.get("bitasset"); // check if globally settled

    const isGloballySettled = isBitAsset && otherAsset.get("bitasset").get("settlement_fund") > 0;
    const currentAccount = _stores_AccountStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().currentAccount;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(this.props.className),
      style: this.props.styles
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "buy-sell-container",
      style: {
        paddingRight: 5
      } //data-intro={dataIntro}

    }, !hideHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "exchange-content-header exchange-content-header--buy-sell-form " + type
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
      string: "exchange.buysell_formatter",
      noLink: true,
      noTip: true,
      keys: [{
        type: "asset",
        value: quote.get("symbol"),
        arg: "asset"
      }, {
        type: "translate",
        value: isPredictionMarket ? "exchange.short" : isBid ? "exchange.buy" : "exchange.sell",
        arg: "direction"
      }]
    })), this.props.onFlip && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      onClick: this.props.onFlip,
      style: {
        cursor: "pointer",
        fontSize: "1rem"
      },
      className: "flip-arrow"
    }, " ", "\u21C6") : null, this.props.onTogglePosition && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      onClick: this.props.onTogglePosition,
      style: {
        cursor: "pointer",
        fontSize: "1rem"
      },
      className: "flip-arrow"
    }, " ", "\u21C5") : null, this.props.moveOrderForm && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
      onClick: this.props.moveOrderForm,
      name: "thumb-tack",
      className: "icon-14px icon-fill order-book-button-v",
      style: {
        marginLeft: 5
      }
    }) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
      ref: "order_form",
      className: (!this.props.isOpen ? "hide-container " : "") + "order-form",
      style: {
        fontSize: "14px"
      },
      noValidate: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, this.props.moveOrderForm && verticalOrderForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      style: {
        width: "100%",
        textAlign: "right"
      },
      onClick: this.props.moveOrderForm
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
      name: "thumb-tack",
      className: "icon-18px icon-fill order-book-button-v"
    })) : null, formContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-12 medium-12 xlarge-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "small-4 buy-sell-label",
      content: "exchange.balance"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-8 buy-sell-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      style: {
        borderBottom: "#A09F9F 1px dotted",
        cursor: "pointer"
      },
      onClick: this._addBalance.bind(this, balanceToAdd)
    }, common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(balanceAmount.getAmount({
      real: true
    }), balancePrecision), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: balanceSymbol,
      noTip: true
    }))))), !singleColumnForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-6"
    }, marketFee) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-12 medium-12 xlarge-12"
    }, singleColumnForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "small-4 buy-sell-label fixmarket-fee",
      content: isBid ? "exchange.lowest_ask" : "exchange.highest_bid"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-8 buy-sell-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      style: {
        borderBottom: "#A09F9F 1px dotted",
        cursor: "pointer"
      },
      onClick: this.props.setPrice.bind(this, type, currentPriceObject.sellPrice())
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      price: currentPrice,
      quote: quote,
      base: base
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: base.get("symbol"),
      noTip: true
    }), "/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: quote.get("symbol"),
      noTip: true
    })))) : null, singleColumnForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: singleColumnForm ? "small-12 grid-block" : "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "small-4 buy-sell-label",
      content: "transaction.expiration"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "small-8 expiration-datetime-picker"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(antd__WEBPACK_IMPORTED_MODULE_21__["default"], {
      ref: this.getDatePickerRef,
      className: "expiration-datetime-picker--hidden",
      showTime: true,
      showToday: false,
      disabledDate: current => current < moment__WEBPACK_IMPORTED_MODULE_13___default()().add(59, "minutes"),
      value: expirationCustomTime !== "Specific" ? expirationCustomTime : moment__WEBPACK_IMPORTED_MODULE_13___default()().add(1, "hour"),
      onChange: this.props.onExpirationCustomChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", {
      className: "cursor-pointer",
      onChange: this.onExpirationSelectChange,
      onClick: this.onExpirationSelectClick,
      onBlur: this.onExpirationSelectBlur,
      "data-tip": expirationTip && moment__WEBPACK_IMPORTED_MODULE_13___default()(expirationTip).format("Do MMM YYYY hh:mm A"),
      value: this.props.expirationType
    }, expirationsOptionsList))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      placement: "top",
      title: disabledText ? disabledText : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "float-right" //data-tip={disabledText}
      ,
      "data-place": "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
      className: disabled ? isBid ? "bid" : "ask" : buttonClass,
      disabled: disabled,
      onClick: onSubmit.bind(this, true),
      type: "primary"
    }, isBid ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.buy") : counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.sell")))), this.props.currentBridges && !this.props.backedCoin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_19__["default"].isDown("TRADE") ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("external_service_provider.is_down") : counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.quick_deposit_bridge", {
        target: isBid ? baseName : quoteName
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
      style: {
        margin: 5
      },
      onClick: this.props.onBuy.bind(this),
      disabled: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_19__["default"].isDown("TRADE") || !this.props.currentAccount || this.props.currentAccount.get("id") === "1.2.3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.quick_deposit",
      asset: isBid ? baseName : quoteName
    }))) : null, this.props.backedCoin && !this.props.currentBridges ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_19__["default"].isDown("OPEN") ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("external_service_provider.is_down") : counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.gateway")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
      style: {
        margin: 5
      },
      onClick: this.props.onDeposit.bind(this),
      disabled: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_19__["default"].isDown("OPEN") || !this.props.currentAccount || this.props.currentAccount.get("id") === "1.2.3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.quick_deposit",
      asset: isBid ? baseName : quoteName
    }))) : null, this.props.currentBridges && this.props.backedCoin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Popover, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: "exchange.quick_deposit",
        asset: isBid ? baseName : quoteName
      }),
      trigger: "click",
      visible: this.state.isQuickDepositVisible,
      onVisibleChange: this.handleQuickDepositVisibleChange,
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
        title: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_19__["default"].isDown("OPEN") ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("external_service_provider.is_down") : counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.quick_deposit_gateway", {
          asset: isBid ? baseName : quoteName
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
        style: {
          marginRight: 5
        },
        onClick: this.onDeposit.bind(this),
        disabled: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_19__["default"].isDown("OPEN")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: "exchange.quick_deposit_gateway_button"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
        title: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_19__["default"].isDown("TRADE") ? counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("external_service_provider.is_down") : counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.quick_deposit_bridge", {
          target: isBid ? baseName : quoteName
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
        onClick: this.onBuy.bind(this),
        disabled: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_19__["default"].isDown("TRADE")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: "exchange.quick_deposit_bridge_button"
      }))))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.quick_deposit_tooltip", {
        asset: isBid ? baseName : quoteName
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
      style: {
        margin: 5
      },
      disabled: !this.props.currentAccount || this.props.currentAccount.get("id") === "1.2.3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.quick_deposit",
      asset: isBid ? baseName : quoteName
    })))) : null, this.props.onBorrow && !isGloballySettled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button //style={{margin: 5}}
    , {
      disabled: !this.props.currentAccount || this.props.currentAccount.get("id") === "1.2.3",
      onClick: this.props.onBorrow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.borrow"
    })) : null, isGloballySettled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Button, {
      style: {
        margin: 5
      },
      disabled: !this.props.currentAccount || this.props.currentAccount.get("id") === "1.2.3",
      onClick: this.showSettleModal,
      "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.settle_globally_settled_tooltip")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settle_globally_settled"
    })) : null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "grid-content clear-fix no-padding"
    }, disabledText && isPredictionMarket ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: disabledText,
      placement: "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      style: {
        paddingRight: 10
      },
      className: "float-right",
      "data-place": "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      style: {
        margin: 0
      },
      className: buttonClass,
      type: "submit",
      onClick: onSubmit.bind(this, false),
      value: forceSellText
    }))) : isPredictionMarket ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__.Tooltip, {
      title: "",
      placement: "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      style: {
        paddingRight: 10
      },
      className: "float-right",
      "data-place": "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      style: {
        margin: 0
      },
      className: buttonClass,
      type: "submit",
      onClick: onSubmit.bind(this, false),
      value: forceSellText
    }))) : null)))), isGloballySettled && !!this.props.currentAccount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Modal_SettleModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
      visible: this.state.isSettleModalVisible,
      hideModal: this.hideSettleModal,
      showModal: this.showSettleModal,
      asset: otherAsset.get("id"),
      account: this.props.currentAccount
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(BuySell));

/***/ }),

/***/ 2741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(607);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);





class ConfirmModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  _onForce(value, e) {
    e.preventDefault();
    this.props.hideModal();
    if (value) this.props.onForce();
  }

  submit(e) {
    this._onForce(true, e);
  }

  cancel(e) {
    this._onForce(false, e);
  }

  render() {
    let {
      type,
      diff,
      hasOrders
    } = this.props;
    const footer = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
      key: "submit",
      onClick: this.submit
    }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("settings.yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
      key: "cancel",
      type: "primary",
      onClick: this.cancel
    }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("settings.no"))];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      footer: footer,
      visible: this.props.visible,
      onCancel: this.cancel,
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("transaction.confirm")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, !hasOrders ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "exchange.confirm_no_orders_" + type
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "exchange.confirm_" + type,
      diff: common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].format_number(diff, 2)
    })));
  }

}

/***/ }),

/***/ 2750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1703);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2751);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2745);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2088);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(637);











class DepthHighChart extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  shouldComponentUpdate(nextProps) {
    let settleCheck = isNaN(nextProps.feedPrice) ? false : nextProps.feedPrice !== this.props.feedPrice;
    return (0,common_MarketClasses__WEBPACK_IMPORTED_MODULE_7__.didOrdersChange)(nextProps.orders, this.props.orders) || (0,common_MarketClasses__WEBPACK_IMPORTED_MODULE_7__.didOrdersChange)(nextProps.call_orders, this.props.call_orders) || settleCheck || nextProps.feedPrice !== this.props.feedPrice || nextProps.height !== this.props.height || nextProps.isPanelActive !== this.props.isPanelActive || nextProps.activePanels !== this.props.activePanels || nextProps.LCP !== this.props.LCP || nextProps.showCallLimit !== this.props.showCallLimit || nextProps.hasPrediction !== this.props.hasPrediction || nextProps.feedPrice !== this.props.feedPrice || nextProps.marketReady !== this.props.marketReady;
  }

  componentDidMount() {
    this.reflowChart(500);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.refs.depthChart && nextProps.activePanels !== this.props.activePanels) {
      this.reflowChart(100);
    }
  }

  UNSAFE_componentWillUpdate() {
    if (this.props.centerRef) {
      this.tempScroll = this.props.centerRef.scrollTop;
    }
  }

  componentDidUpdate() {
    if (this.props.centerRef) {
      this.props.centerRef.scrollTop = this.tempScroll;
    }
  }

  reflowChart(timeout) {
    setTimeout(() => {
      if (this.refs.depthChart) {
        this.refs.depthChart.chart.reflow();
      }
    }, timeout);
  }

  _getThemeColors(props = this.props) {
    return (assets_colors__WEBPACK_IMPORTED_MODULE_5___default())[props.theme];
  }

  render() {
    let {
      flat_bids,
      flat_asks,
      flat_calls,
      flat_settles,
      totalBids,
      totalAsks,
      base,
      quote,
      feedPrice
    } = this.props;

    const {
      primaryText,
      callColor,
      settleColor,
      settleFillColor,
      bidColor,
      bidFillColor,
      askColor,
      askFillColor,
      axisLineColor
    } = this._getThemeColors();

    let {
      name: baseSymbol,
      prefix: basePrefix
    } = common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].replaceName(base);
    let {
      name: quoteSymbol,
      prefix: quotePrefix
    } = common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].replaceName(quote);
    baseSymbol = (basePrefix || "") + baseSymbol;
    quoteSymbol = (quotePrefix || "") + quoteSymbol;

    let flatBids = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_8__["default"])(flat_bids),
        flatAsks = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_8__["default"])(flat_asks),
        flatCalls = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_8__["default"])(flat_calls),
        flatSettles = (0,lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_8__["default"])(flat_settles);

    let config = {
      chart: {
        type: "area",
        backgroundColor: "rgba(255, 0, 0, 0)",
        spacing: [10, 0, 5, 0]
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
      dataGrouping: {
        enabled: false
      },
      tooltip: {
        shared: false,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        useHTML: true,
        formatter: function () {
          return `
					<table>
						<tr>
							<td>${counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("exchange.price")}:</td>
							<td style="text-align: right">${common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(this.x, base.get("precision"))} ${baseSymbol}/${quoteSymbol}</td>
						</tr>
						<tr>
							<td>${counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("exchange.quantity")}:</td>
							<td style="text-align: right">${common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(this.y, quote.get("precision"))} ${quoteSymbol}</td>
						</tr>
					</table>
					`;
        },
        style: {
          color: "#FFFFFF"
        }
      },
      series: [],
      yAxis: {
        labels: {
          enabled: true,
          style: {
            color: primaryText
          },
          formatter: function () {
            return common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(this.value, quote.get("precision"));
          }
        },
        opposite: false,
        title: {
          text: null,
          style: {
            color: "#FFFFFF"
          }
        },
        gridLineWidth: 1,
        gridLineColor: "rgba(196, 196, 196, 0.30)",
        gridZIndex: 1,
        crosshair: {
          snap: false
        },
        currentPriceIndicator: {
          enabled: false
        }
      },
      xAxis: {
        labels: {
          style: {
            color: primaryText
          } // formatter: function() {
          //     return this.value / power;
          // }

        },
        ordinal: false,
        lineColor: "#000000",
        title: {
          text: null
        },
        plotLines: []
      },
      plotOptions: {
        area: {
          animation: false,
          marker: {
            enabled: false
          },
          series: {
            enableMouseTracking: false
          }
        }
      }
    }; // Center the charts between bids and asks

    if (flatBids.length > 0 && flatAsks.length > 0) {
      let middleValue = (flatAsks[0][0] + flatBids[flatBids.length - 1][0]) / 2;
      config.xAxis.min = middleValue * 0.4;
      config.xAxis.max = middleValue * 1.6;

      if (config.xAxis.max < flatAsks[0][0]) {
        config.xAxis.max = flatAsks[0][0] * 1.5;
      }

      if (config.xAxis.min > flatBids[flatBids.length - 1][0]) {
        config.xAxis.min = flatBids[flatBids.length - 1][0] * 0.5;
      }

      let yMax = 0;
      flatBids.forEach(b => {
        if (b[0] >= config.xAxis.min) {
          yMax = Math.max(b[1], yMax);
        }
      });
      flatAsks.forEach(a => {
        if (a[0] <= config.xAxis.max) {
          yMax = Math.max(a[1], yMax);
        }
      });
      config.yAxis.max = yMax * 1.15; // Adjust y axis label decimals

      let yLabelDecimals = yMax > 10 ? 0 : yMax > 1 ? 2 : 5;

      config.yAxis.labels.formatter = function () {
        return common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(this.value, yLabelDecimals);
      };
    } else if (flatBids.length && !flatAsks.length) {
      config.xAxis.min = flatBids[flatBids.length - 1][0] * 0.4;
      config.xAxis.max = flatBids[flatBids.length - 1][0] * 1.6;
    } else if (flatAsks.length && !flatBids.length) {
      config.xAxis.min = 0;
      config.xAxis.max = flatAsks[0][0] * 2;
    }

    if (this.props.hasPrediction) {
      config.xAxis.min = -0.05;
      config.xAxis.max = 1.05;
    } // Add plotlines if defined
    // if (falsethis.props.plotLine) {
    //	 config.xAxis.plotLines.push({
    //		 color: "red",
    //		 id: "plot_line",
    //		 dashStyle: "longdashdot",
    //		 value: this.props.plotLine * power,
    //		 width: 1,
    //		 zIndex: 5
    //	 });
    // }
    // Market asset


    if (this.props.LCP) {
      let bitAsset = base.get("bitasset_data_id") ? base : quote;
      let mcr = bitAsset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;
      let sqr = bitAsset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]) / 1000;
      let settlement_support_price = this.props.invertedCalls ? this.props.LCP / mcr * sqr : this.props.LCP * mcr / sqr;
      config.xAxis.plotLines.push({
        color: axisLineColor,
        id: "plot_line",
        dashStyle: "longdash",
        value: this.props.LCP,
        label: {
          text: counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("explorer.block.call_limit", {
            price: this.props.LCP.toFixed(4)
          }),
          style: {
            color: primaryText,
            fontWeight: "bold"
          },
          x: !this.props.invertedCalls ? -10 : 5
        },
        width: 2,
        zIndex: 5
      });
      config.xAxis.plotLines.push({
        color: axisLineColor,
        id: "plot_line",
        dashStyle: "longdash",
        value: settlement_support_price,
        label: {
          text: counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("explorer.block.gs_support", {
            price: settlement_support_price.toFixed(4)
          }),
          style: {
            color: primaryText,
            fontWeight: "bold"
          },
          x: this.props.invertedCalls ? -10 : 5
        },
        width: 2,
        zIndex: 5
      });
    } // if (this.props.SQP) {
    // 	 config.xAxis.plotLines.push({
    // 		 color: "#B6B6B6",
    // 		 id: "plot_line",
    // 		 dashStyle: "longdash",
    // 		 value: this.props.SQP * power,
    // 		 label: {
    // 			 text: counterpart.translate("exchange.squeeze"),
    // 			 style: {
    // 				 color: "#DADADA",
    // 				 fontWeight: "bold"
    // 			 }
    // 		 },
    // 		 width: 2,
    // 		 zIndex: 5
    // 	 });
    // }


    if (feedPrice) {
      const settlementColor = base.has("bitasset") ? askColor : bidColor;
      config.xAxis.plotLines.push({
        color: settlementColor,
        id: "plot_line",
        dashStyle: "solid",
        value: feedPrice,
        label: {
          text: counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("explorer.block.feed_price", {
            price: feedPrice.toFixed(4)
          }),
          style: {
            color: primaryText,
            fontWeight: "bold"
          },
          x: !this.props.invertedCalls ? -10 : 5
        },
        width: 2,
        zIndex: 5
      }); // Add calls if present

      if (flatCalls && flatCalls.length) {
        config.series.push({
          name: `Call ${quoteSymbol}`,
          data: flatCalls,
          color: callColor
        });
      }
    } // Add settle orders


    if (feedPrice && flatSettles && flatSettles.length) {
      config.series.push({
        name: `Settle ${quoteSymbol}`,
        data: flatSettles,
        color: settleColor,
        fillColor: settleFillColor
      });
    } // Push asks and bids


    if (flatBids.length) {
      config.series.push({
        step: "right",
        name: `Bid ${quoteSymbol}`,
        data: flatBids,
        color: bidColor,
        fillColor: bidFillColor
      });
    }

    if (flatAsks.length) {
      config.series.push({
        step: "left",
        name: `Ask ${quoteSymbol}`,
        data: flatAsks,
        color: askColor,
        fillColor: askFillColor
      });
    } // Fix the height if defined, else use 400px;


    if (this.props.height) {
      config.chart.height = this.props.height;
    } else {
      config.chart.height = "400px";
    } // Add onClick event listener if defined


    if (this.props.onClick) {
      config.chart.events = {
        click: this.props.onClick.bind(this)
      };
    }

    if (this.props.noFrame) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "grid-content no-overflow no-padding"
      }, !flatBids.length && !flatAsks.length && !flatCalls.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "no-data"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "exchange.no_data"
      })) : null, this.props.noText ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "bid-total"
      }, common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(totalBids, base.get("precision")), " ", baseSymbol), this.props.noText ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "ask-total"
      }, common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(totalAsks, quote.get("precision")), " ", quoteSymbol), flatBids || flatAsks || flatCalls ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_highcharts__WEBPACK_IMPORTED_MODULE_1___default()), {
        config: config
      }) : null);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "grid-content no-overflow no-padding middle-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "exchange-bordered",
        id: "depth_chart"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "exchange-content-header"
      }, this.props.noText ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "bid-total"
      }, common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(totalBids, base.get("precision")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: base.get("symbol")
      })), this.props.noText ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ask-total float-right"
      }, common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(totalAsks, quote.get("precision")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: quote.get("symbol")
      }))), !flatBids.length && !flatAsks.length && !flatCalls.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "no-data"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "exchange.no_data"
      })) : null, flatBids || flatAsks || flatCalls ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_highcharts__WEBPACK_IMPORTED_MODULE_1___default()), {
        ref: "depthChart",
        config: config
      }) : null));
    }
  }

}

DepthHighChart.defaultProps = {
  flat_bids: [],
  flat_asks: [],
  orders: {},
  noText: false,
  noFrame: true
};
DepthHighChart.propTypes = {
  flat_bids: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array.isRequired),
  flat_asks: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array.isRequired),
  orders: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DepthHighChart);

/***/ }),

/***/ 2669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(2737);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(521);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2535);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(intro_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(924);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2670);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(657);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2339);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(618);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2337);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(637);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(636);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(607);
/* harmony import */ var _BuySell__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2691);
/* harmony import */ var _ScaledOrderTab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2696);
/* harmony import */ var _ExchangeHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2700);
/* harmony import */ var _MyOpenOrders__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2705);
/* harmony import */ var _OrderBook__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2720);
/* harmony import */ var _MarketHistory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2727);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2730);
/* harmony import */ var _MarketPicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2739);
/* harmony import */ var _ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2741);
/* harmony import */ var _Personalize__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2742);
/* harmony import */ var _TradingViewPriceChart__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2743);
/* harmony import */ var _DepthHighChart__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2750);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1941);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(2753);
/* harmony import */ var _Notifier_NotifierContainer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(2755);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2436);
/* harmony import */ var _Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(2765);
/* harmony import */ var _PriceAlert__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(2766);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _Chat_ChatBro__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(2767);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


































 //import SimpleDepositBlocktradesBridge from "../Dashboard/SimpleDepositBlocktradesBridge";







class Exchange extends react__WEBPACK_IMPORTED_MODULE_8__.Component {
  static propTypes = {
    marketCallOrders: (prop_types__WEBPACK_IMPORTED_MODULE_36___default().object.isRequired),
    activeMarketHistory: (prop_types__WEBPACK_IMPORTED_MODULE_36___default().object.isRequired),
    viewSettings: (prop_types__WEBPACK_IMPORTED_MODULE_36___default().object.isRequired)
  };
  static defaultProps = {
    marketCallOrders: [],
    activeMarketHistory: {},
    viewSettings: {}
  };

  constructor(props) {
    super();
    this.state = { ...this._initialState(props),
      expirationType: {
        bid: props.exchange.getIn(["lastExpiration", "bid"]) || "YEAR",
        ask: props.exchange.getIn(["lastExpiration", "ask"]) || "YEAR"
      },
      expirationCustomTime: {
        bid: "Specific",
        ask: "Specific"
      },
      feeStatus: {}
    };
    this._getWindowSize = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_37__["default"])(this._getWindowSize.bind(this), 150);
    this._checkFeeStatus = this._checkFeeStatus.bind(this);
    this._handleExpirationChange = this._handleExpirationChange.bind(this);
    this._handleCustomExpirationChange = this._handleCustomExpirationChange.bind(this);
    this.showPersonalizeModal = this.showPersonalizeModal.bind(this);
    this.hidePersonalizeModal = this.hidePersonalizeModal.bind(this);
    this.showConfirmSellOrderModal = this.showConfirmSellOrderModal.bind(this);
    this.hideConfirmSellOrderModal = this.hideConfirmSellOrderModal.bind(this);
    this.showConfirmBuyOrderModal = this.showConfirmBuyOrderModal.bind(this);
    this.hideConfirmBuyOrderModal = this.hideConfirmBuyOrderModal.bind(this);
    this.showMarketPickerModal = this.showMarketPickerModal.bind(this);
    this.hideMarketPickerModal = this.hideMarketPickerModal.bind(this);
    this.showDepositBridgeModal = this.showDepositBridgeModal.bind(this);
    this.hideDepositBridgeModal = this.hideDepositBridgeModal.bind(this);
    this.showDepositModal = this.showDepositModal.bind(this);
    this.hideDepositModal = this.hideDepositModal.bind(this);
    this.showBorrowQuoteModal = this.showBorrowQuoteModal.bind(this);
    this.hideBorrowQuoteModal = this.hideBorrowQuoteModal.bind(this);
    this.showBorrowBaseModal = this.showBorrowBaseModal.bind(this);
    this.hideBorrowBaseModal = this.hideBorrowBaseModal.bind(this);
    this.showPriceAlertModal = this.showPriceAlertModal.bind(this);
    this.hidePriceAlertModal = this.hidePriceAlertModal.bind(this);
    this.showScaledOrderModal = this.showScaledOrderModal.bind(this);
    this.hideScaledOrderModal = this.hideScaledOrderModal.bind(this);
    this.handlePriceAlertSave = this.handlePriceAlertSave.bind(this);
    this._createScaledOrder = this._createScaledOrder.bind(this);
    this.psInit = true;
  }

  handleOrderTypeTabChange(type, value) {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      [`order-form-${type}`]: value
    });
  }

  handlePriceAlertSave(savedRules = []) {
    // add info about market asset pair
    savedRules = savedRules.map(rule => ({
      type: rule.type,
      price: rule.price,
      baseAssetSymbol: this.props.baseAsset.get("symbol"),
      quoteAssetSymbol: this.props.quoteAsset.get("symbol")
    })); // drop old rules for current market pair

    let rules = this.props.priceAlert.filter(rule => {
      return rule && this.props.baseAsset && this.props.quoteAsset && (rule.get("baseAssetSymbol") !== this.props.baseAsset.get("symbol") || rule.get("quoteAssetSymbol") !== this.props.quoteAsset.get("symbol"));
    }); // pushing new rules

    rules = [...rules, ...savedRules]; // saving rules

    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].setPriceAlert(rules);
    this.hidePriceAlertModal();
  }

  getPriceAlertRules() {
    //getting rules based on market pairs
    let rules = this.props.priceAlert.filter(rule => {
      return rule && this.props.baseAsset && this.props.quoteAsset && rule.get("baseAssetSymbol") === this.props.baseAsset.get("symbol") && rule.get("quoteAssetSymbol") === this.props.quoteAsset.get("symbol");
    });
    return rules.toJS();
  }

  _handleExpirationChange(type, e) {
    let expirationType = { ...this.state.expirationType,
      [type]: e.target.value
    };

    if (e.target.value !== "SPECIFIC") {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].setExchangeLastExpiration({ ...(this.props.exchange.has("lastExpiration") && this.props.exchange.get("lastExpiration").toJS() || {}),
        [type]: e.target.value
      });
    }

    this.setState({
      expirationType: expirationType
    });
  }

  _handleCustomExpirationChange(type, time) {
    let expirationCustomTime = { ...this.state.expirationCustomTime,
      [type]: time
    };
    this.setState({
      expirationCustomTime: expirationCustomTime
    });
  }

  EXPIRATIONS = {
    HOUR: {
      title: "1 hour",
      get: () => moment__WEBPACK_IMPORTED_MODULE_6___default()().add(1, "hour").valueOf()
    },
    "12HOURS": {
      title: "12 hours",
      get: () => moment__WEBPACK_IMPORTED_MODULE_6___default()().add(12, "hour").valueOf()
    },
    "24HOURS": {
      title: "24 hours",
      get: () => moment__WEBPACK_IMPORTED_MODULE_6___default()().add(1, "day").valueOf()
    },
    "7DAYS": {
      title: "7 days",
      get: () => moment__WEBPACK_IMPORTED_MODULE_6___default()().add(7, "day").valueOf()
    },
    MONTH: {
      title: "30 days",
      get: () => moment__WEBPACK_IMPORTED_MODULE_6___default()().add(30, "day").valueOf()
    },
    YEAR: {
      title: "1 year",
      get: () => moment__WEBPACK_IMPORTED_MODULE_6___default()().add(1, "year").valueOf()
    },
    SPECIFIC: {
      title: "Specific",
      get: type => {
        return this.state.expirationCustomTime[type].valueOf();
      }
    }
  };

  _initialOrderState(props) {
    let bid = {
      forSaleText: "",
      toReceiveText: "",
      priceText: "",
      for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Asset({
        asset_id: props.baseAsset.get("id"),
        precision: props.baseAsset.get("precision")
      }),
      to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Asset({
        asset_id: props.quoteAsset.get("id"),
        precision: props.quoteAsset.get("precision")
      })
    };
    bid.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Price({
      base: bid.for_sale,
      quote: bid.to_receive
    });
    let ask = {
      forSaleText: "",
      toReceiveText: "",
      priceText: "",
      for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Asset({
        asset_id: props.quoteAsset.get("id"),
        precision: props.quoteAsset.get("precision")
      }),
      to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Asset({
        asset_id: props.baseAsset.get("id"),
        precision: props.baseAsset.get("precision")
      })
    };
    ask.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Price({
      base: ask.for_sale,
      quote: ask.to_receive
    });
    return {
      ask,
      bid
    };
  }

  _initialState(props) {
    let ws = props.viewSettings;

    let {
      ask,
      bid
    } = this._initialOrderState(props);

    let chart_height = ws.get("chartHeight", 500);

    if (chart_height == 500 && window.innerWidth < 640) {
      // assume user is on default setting, use smaller for mobile
      chart_height = 400;
    }

    return {
      isDepositBridgeModelLoaded: false,
      isDepositModalLoaded: false,
      isPersonalizeModalLoaded: false,
      isMarketPickerModalLoaded: false,
      isBorrowQuoteModalLoaded: false,
      isBorrowBaseModalLoaded: false,
      isDepositBridgeModalVisible: false,
      isDepositModalVisible: false,
      isPersonalizeModalVisible: false,
      isMarketPickerModalVisible: false,
      isBorrowQuoteModalVisible: false,
      isBorrowBaseModalVisible: false,
      history: [],
      isConfirmBuyOrderModalVisible: false,
      isConfirmBuyOrderModalLoaded: false,
      isConfirmSellOrderModalVisible: false,
      isPriceAlertModalVisible: false,
      isScaledOrderModalVisible: false,
      isConfirmSellOrderModalLoaded: false,
      tabVerticalPanel: ws.get("tabVerticalPanel", "my-market"),
      tabBuySell: ws.get("tabBuySell", "buy"),
      buySellOpen: ws.get("buySellOpen", true),
      bid,
      ask,
      height: window.innerHeight,
      width: window.innerWidth,
      favorite: false,
      buyDiff: false,
      sellDiff: false,
      autoScroll: ws.get("global_AutoScroll", true),
      buySellTop: ws.get("buySellTop", true),
      buyFeeAssetIdx: ws.get("buyFeeAssetIdx", 0),
      sellFeeAssetIdx: ws.get("sellFeeAssetIdx", 0),
      verticalOrderBook: ws.get("verticalOrderBook", false),
      verticalOrderForm: ws.get("verticalOrderForm", false),
      hidePanel: ws.get("hidePanel", false),
      hideScrollbars: ws.get("hideScrollbars", false),
      singleColumnOrderForm: ws.get("singleColumnOrderForm", true),
      flipOrderBook: ws.get("flipOrderBook", false),
      flipBuySell: ws.get("flipBuySell", false),
      orderBookReversed: ws.get("orderBookReversed", false),
      chartType: ws.get("chartType", "price_chart"),
      chartHeight: chart_height,
      chartZoom: ws.get("chartZoom", true),
      chartTools: ws.get("chartTools", false),
      hideFunctionButtons: ws.get("hideFunctionButtons", true),
      currentPeriod: ws.get("currentPeriod", 3600 * 24 * 30 * 3),
      // 3 months
      showMarketPicker: false,
      activePanels: ws.get("activePanels", ["left", "right"]),
      mobileKey: [""],
      forceReRender: 0,
      panelWidth: 0,
      mirrorPanels: ws.get("mirrorPanels", false),
      panelTabs: ws.get("panelTabs", {
        my_history: 1,
        history: 1,
        my_orders: 2,
        open_settlement: 2
      }),
      panelTabsActive: ws.get("panelTabsActive", {
        1: "history",
        2: "my_orders"
      })
    };
  }

  showMarketPickerModal() {
    this.setState({
      isMarketPickerModalVisible: true,
      isMarketPickerModalLoaded: true
    });
  }

  hideMarketPickerModal() {
    this.setState({
      isMarketPickerModalVisible: false
    });
  }

  showPersonalizeModal() {
    this.setState({
      isPersonalizeModalVisible: true,
      isPersonalizeModalLoaded: true
    });
  }

  hidePersonalizeModal() {
    this.setState({
      isPersonalizeModalVisible: false
    });
  }

  showPriceAlertModal() {
    this.setState({
      isPriceAlertModalVisible: true
    });
  }

  hidePriceAlertModal() {
    this.setState({
      isPriceAlertModalVisible: false
    });
  }

  showScaledOrderModal() {
    this.setState({
      isScaledOrderModalVisible: true
    });
  }

  hideScaledOrderModal() {
    this.setState({
      isScaledOrderModalVisible: false
    });
  }

  showBorrowQuoteModal() {
    this.setState({
      isBorrowQuoteModalVisible: true,
      isBorrowQuoteModalLoaded: true
    });
  }

  hideBorrowQuoteModal() {
    this.setState({
      isBorrowQuoteModalVisible: false
    });
  }

  showBorrowBaseModal() {
    this.setState({
      isBorrowBaseModalVisible: true,
      isBorrowBaseModalLoaded: true
    });
  }

  hideBorrowBaseModal() {
    this.setState({
      isBorrowBaseModalVisible: false
    });
  }

  showDepositBridgeModal() {
    this.setState({
      isDepositBridgeModalVisible: true,
      isDepositBridgeModalLoaded: true
    });
  }

  hideDepositBridgeModal() {
    this.setState({
      isDepositBridgeModalVisible: false
    });
  }

  showDepositModal() {
    this.setState({
      isDepositModalVisible: true,
      isDepositModalLoaded: true
    });
  }

  hideDepositModal() {
    this.setState({
      isDepositModalVisible: false
    });
  }

  _getLastMarketKey() {
    const chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__.Apis.instance().chain_id;
    return `lastMarket${chainID ? "_" + chainID.substr(0, 8) : ""}`;
  }

  showConfirmBuyOrderModal() {
    this.setState({
      isConfirmBuyOrderModalVisible: true,
      isConfirmBuyOrderModalLoaded: true
    });
  }

  hideConfirmBuyOrderModal() {
    this.setState({
      isConfirmBuyOrderModalVisible: false
    });
  }

  showConfirmSellOrderModal() {
    this.setState({
      isConfirmSellOrderModalVisible: true,
      isConfirmSellOrderModalLoaded: true
    });
  }

  hideConfirmSellOrderModal() {
    this.setState({
      isConfirmSellOrderModalVisible: false
    });
  }

  UNSAFE_componentWillMount() {
    window.addEventListener("resize", this._setDimensions, {
      capture: false,
      passive: true
    }); // updateGatewayBackers();

    this._checkFeeStatus();
  }

  componentDidMount() {
    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_10__["default"].getTrackedGroupsConfig();
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting.defer({
      [this._getLastMarketKey()]: this.props.quoteAsset.get("symbol") + "_" + this.props.baseAsset.get("symbol")
    });
    window.addEventListener("resize", this._getWindowSize, {
      capture: false,
      passive: true
    });
  }
  /*
   * Force re-rendering component when state changes.
   * This is required for an updated value of component width
   *
   * It will trigger a re-render twice
   * - Once when state is changed
   * - Once when forceReRender is set to false
   */


  _forceRender(np, ns) {
    if (this.state.forceReRender) {
      this.setState({
        forceReRender: false
      });
    }

    if (!common_utils__WEBPACK_IMPORTED_MODULE_15__["default"].are_equal_shallow(this.state.activePanels, ns.activePanels) || !common_utils__WEBPACK_IMPORTED_MODULE_15__["default"].are_equal_shallow(this.state.verticalOrderBook, ns.verticalOrderBook) || np.quoteAsset !== this.props.quoteAsset || np.baseAsset !== this.props.baseAsset) {
      this.setState({
        forceReRender: true
      });
    }
  }

  shouldComponentUpdate(np, ns) {
    let {
      expirationType
    } = this.state;

    this._forceRender(np, ns);

    if (!np.marketReady && !this.props.marketReady) {
      return false;
    }

    let propsChanged = false;
    let stateChanged = false;

    if (np.quoteAsset !== this.props.quoteAsset || np.baseAsset !== this.props.baseAsset) {
      this.setState({
        expirationType: {
          bid: expirationType["bid"] == "SPECIFIC" ? expirationType["bid"] : "YEAR",
          ask: expirationType["ask"] == "SPECIFIC" ? expirationType["ask"] : "YEAR"
        }
      });
    }

    for (let key in np) {
      if (np.hasOwnProperty(key)) {
        propsChanged = propsChanged || !common_utils__WEBPACK_IMPORTED_MODULE_15__["default"].are_equal_shallow(np[key], this.props[key]);
        if (propsChanged) break;
      }
    }

    for (let key in ns.panelTabsActive) {
      stateChanged = !common_utils__WEBPACK_IMPORTED_MODULE_15__["default"].are_equal_shallow(ns.panelTabsActive[key], this.state.panelTabsActive[key]);
    }

    return propsChanged || stateChanged || !common_utils__WEBPACK_IMPORTED_MODULE_15__["default"].are_equal_shallow(ns, this.state);
  }

  _checkFeeStatus(assets = [this.props.coreAsset, this.props.baseAsset, this.props.quoteAsset], account = this.props.currentAccount) {
    let feeStatus = {};
    let p = [];
    assets.forEach(a => {
      p.push((0,common_trxHelper__WEBPACK_IMPORTED_MODULE_14__.checkFeeStatusAsync)({
        accountID: account.get("id"),
        feeID: a.get("id"),
        type: "limit_order_create"
      }));
    });
    Promise.all(p).then(status => {
      assets.forEach((a, idx) => {
        feeStatus[a.get("id")] = status[idx];
      });

      if (!common_utils__WEBPACK_IMPORTED_MODULE_15__["default"].are_equal_shallow(this.state.feeStatus, feeStatus)) {
        this.setState({
          feeStatus
        });
      }
    }).catch(err => {
      console.error("checkFeeStatusAsync error", err);
      this.setState({
        feeStatus: {}
      });
    });
  }

  _getWindowSize() {
    let {
      innerHeight,
      innerWidth
    } = window;

    if (innerHeight !== this.state.height || innerWidth !== this.state.width) {
      this.setState({
        height: innerHeight,
        width: innerWidth
      });
      let centerContainer = this.refs.center;

      if (centerContainer) {
        perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7___default().update(centerContainer);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this._initPsContainer();

    if (!this.props.exchange.get("tutorialShown") && prevProps.coreAsset && prevState.feeStatus) {
      if (!this.tutorialShown) {
        this.tutorialShown = true;
        const theme = this.props.settings.get("themes");
        intro_js__WEBPACK_IMPORTED_MODULE_5___default().introJs().setOptions({
          tooltipClass: theme,
          highlightClass: theme,
          showBullets: false,
          hideNext: true,
          hidePrev: true,
          nextLabel: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("walkthrough.next_label"),
          prevLabel: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("walkthrough.prev_label"),
          skipLabel: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("walkthrough.skip_label"),
          doneLabel: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("walkthrough.done_label")
        }).start();
        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].setExchangeTutorialShown.defer(true);
      }
    }
  }

  _initPsContainer() {
    if (this.refs.center && this.psInit) {
      let centerContainer = this.refs.center;

      if (centerContainer) {
        perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7___default().initialize(centerContainer);
        this.psInit = false;
      }
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this._initPsContainer();

    if (nextProps.quoteAsset !== this.props.quoteAsset || nextProps.baseAsset !== this.props.baseAsset || nextProps.currentAccount !== this.props.currentAccount) {
      this._checkFeeStatus([nextProps.coreAsset, nextProps.baseAsset, nextProps.quoteAsset], nextProps.currentAccount);
    }

    if (nextProps.quoteAsset.get("symbol") !== this.props.quoteAsset.get("symbol") || nextProps.baseAsset.get("symbol") !== this.props.baseAsset.get("symbol")) {
      this.setState(this._initialState(nextProps));
      return actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
        [this._getLastMarketKey()]: nextProps.quoteAsset.get("symbol") + "_" + nextProps.baseAsset.get("symbol")
      });
    } // if (this.props.sub && nextProps.bucketSize !== this.props.bucketSize) {
    //     return this._changeBucketSize(nextProps.bucketSize);
    // }

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._getWindowSize);
  }

  _getFeeAssets(quote, base, coreAsset) {
    let {
      currentAccount
    } = this.props;
    const {
      feeStatus
    } = this.state;

    function addMissingAsset(target, asset) {
      if (target.indexOf(asset) === -1) {
        target.push(asset);
      }
    }

    function hasFeePoolBalance(id) {
      return feeStatus[id] && feeStatus[id].hasPoolBalance;
    }

    function hasBalance(id) {
      return feeStatus[id] && feeStatus[id].hasBalance;
    }

    let sellAssets = [coreAsset, quote === coreAsset ? base : quote];
    addMissingAsset(sellAssets, quote);
    addMissingAsset(sellAssets, base); // let sellFeeAsset;

    let buyAssets = [coreAsset, base === coreAsset ? quote : base];
    addMissingAsset(buyAssets, quote);
    addMissingAsset(buyAssets, base); // let buyFeeAsset;

    let balances = {};
    currentAccount.get("balances", []).filter((balance, id) => {
      return ["1.3.0", quote.get("id"), base.get("id")].indexOf(id) >= 0;
    }).forEach((balance, id) => {
      let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(balance);
      balances[id] = {
        balance: balanceObject ? parseInt(balanceObject.get("balance"), 10) : 0,
        fee: this._getFee(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getAsset(id))
      };
    });

    function filterAndDefault(assets, balances, idx) {
      let asset;
      /* Only keep assets for which the user has a balance larger than the fee, and for which the fee pool is valid */

      assets = assets.filter(a => {
        if (!balances[a.get("id")]) {
          return false;
        }

        return hasFeePoolBalance(a.get("id")) && hasBalance(a.get("id"));
      });
      /* If the user has no valid balances, default to core fee */

      if (!assets.length) {
        asset = coreAsset;
        assets.push(coreAsset);
        /* If the user has balances, use the stored idx value unless that asset is no longer available*/
      } else {
        asset = assets[Math.min(assets.length - 1, idx)];
      }

      return {
        assets,
        asset
      };
    }

    let {
      assets: sellFeeAssets,
      asset: sellFeeAsset
    } = filterAndDefault(sellAssets, balances, this.state.sellFeeAssetIdx);
    let {
      assets: buyFeeAssets,
      asset: buyFeeAsset
    } = filterAndDefault(buyAssets, balances, this.state.buyFeeAssetIdx);

    let sellFee = this._getFee(sellFeeAsset);

    let buyFee = this._getFee(buyFeeAsset);

    return {
      sellFeeAsset,
      sellFeeAssets,
      sellFee,
      buyFeeAsset,
      buyFeeAssets,
      buyFee
    };
  }

  _getFee(asset = this.props.coreAsset) {
    return this.state.feeStatus[asset.get("id")] && this.state.feeStatus[asset.get("id")].fee;
  }

  _verifyFee(fee, sell, sellBalance, coreBalance) {
    let coreFee = this._getFee();

    if (fee.asset_id === "1.3.0") {
      if (coreFee.getAmount() <= coreBalance) {
        return "1.3.0";
      } else {
        return null;
      }
    } else {
      let sellSum = sell.asset_id === fee.asset_id ? fee.getAmount() + sell.getAmount() : sell.getAmount();

      if (sellSum <= sellBalance) {
        // Sufficient balance in asset to pay fee
        return fee.asset_id;
      } else if (coreFee.getAmount() <= coreBalance && fee.asset_id !== "1.3.0") {
        // Sufficient balance in core asset to pay fee
        return "1.3.0";
      } else {
        return null; // Unable to pay fee
      }
    }
  }

  _createLimitOrderConfirm(buyAsset, sellAsset, sellBalance, coreBalance, feeAsset, type, short = true, e) {
    e.preventDefault();
    let {
      highestBid,
      lowestAsk
    } = this.props.marketData;
    let current = this.state[type === "sell" ? "ask" : "bid"];
    sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(sellBalance).toJS().balance, 10) : 0);
    coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Asset({
      amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(coreBalance).toJS().balance, 10) : 0
    });

    let fee = this._getFee(feeAsset);

    let feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());

    if (!feeID) {
      return bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Notification.error({
        message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.exchange_insufficient_funds_for_fees")
      });
    }

    if (type === "buy" && lowestAsk) {
      let diff = this.state.bid.price.toReal() / lowestAsk.getPrice();

      if (diff > 1.2) {
        this.showConfirmBuyOrderModal();
        return this.setState({
          buyDiff: diff
        });
      }
    } else if (type === "sell" && highestBid) {
      let diff = 1 / (this.state.ask.price.toReal() / highestBid.getPrice());

      if (diff > 1.2) {
        this.showConfirmSellOrderModal();
        return this.setState({
          sellDiff: diff
        });
      }
    }

    let isPredictionMarket = sellAsset.getIn(["bitasset", "is_prediction_market"]);

    if (current.for_sale.gt(sellBalance) && !isPredictionMarket) {
      return bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Notification.error({
        message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.exchange_insufficient_funds_to_place_order", {
          amount: current.for_sale.getAmount({
            real: true
          }),
          symbol: sellAsset.get("symbol")
        })
      });
    } //


    if (!(current.for_sale.getAmount() > 0 && current.to_receive.getAmount() > 0)) {
      return bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Notification.warning({
        message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.exchange_enter_valid_values")
      });
    } //


    if (type === "sell" && isPredictionMarket && short) {
      return this._createPredictionShort(feeID);
    }

    this._createLimitOrder(type, feeID);
  }

  _createScaledOrder(orders, feeID) {
    const limitOrders = orders.map(order => new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.LimitOrderCreate({
      for_sale: order.for_sale,
      expiration: new Date(order.expirationTime || false),
      to_receive: order.to_receive,
      seller: this.props.currentAccount.get("id"),
      fee: {
        asset_id: feeID,
        amount: 0
      }
    }));
    return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_10__["default"].createLimitOrder2(limitOrders).then(result => {
      if (result.error) {
        if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Notification.error({
          message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.exchange_unknown_error_place_scaled_order")
        });
      }

      console.log("order success");
    }).catch(e => {
      console.log("order failed:", e);
    });
  }

  _createLimitOrder(type, feeID) {
    let actionType = type === "sell" ? "ask" : "bid";
    let current = this.state[actionType];
    let expirationTime = null;

    if (this.state.expirationType[actionType] === "SPECIFIC") {
      expirationTime = this.EXPIRATIONS[this.state.expirationType[actionType]].get(actionType);
    } else {
      expirationTime = this.EXPIRATIONS[this.state.expirationType[actionType]].get();
    }

    const order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.LimitOrderCreate({
      for_sale: current.for_sale,
      expiration: new Date(expirationTime || false),
      to_receive: current.to_receive,
      seller: this.props.currentAccount.get("id"),
      fee: {
        asset_id: feeID,
        amount: 0
      }
    });
    const {
      marketName,
      first
    } = common_market_utils__WEBPACK_IMPORTED_MODULE_12__["default"].getMarketName(this.props.baseAsset, this.props.quoteAsset);
    const inverted = this.props.marketDirections.get(marketName);
    const shouldFlip = inverted && first.get("id") !== this.props.baseAsset.get("id") || !inverted && first.get("id") === this.props.baseAsset.get("id");

    if (shouldFlip) {
      let setting = {};
      setting[marketName] = !inverted;
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeMarketDirection(setting);
    }

    if (false) {}
    return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_10__["default"].createLimitOrder2(order).then(result => {
      if (result.error) {
        if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Notification.error({
          message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.exchange_unknown_error_place_order", {
            amount: current.to_receive.getAmount({
              real: true
            }),
            symbol: current.to_receive.asset_id
          })
        });
      }
    }).catch(e => {
      console.error("order failed:", e);
    });
  }
  /***
   * Clear forms
   * @string: type
   */


  _clearForms(type) {
    let {
      ask,
      bid
    } = this._initialOrderState(this.props);

    if (!type) {
      this.setState({
        bid,
        ask
      });
    } else if (type == "ask") {
      this.setState({
        ask
      });
    } else if (type == "bid") {
      this.setState({
        bid
      });
    }
  }

  _createPredictionShort(feeID) {
    let current = this.state.ask;
    const order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.LimitOrderCreate({
      for_sale: current.for_sale,
      to_receive: current.to_receive,
      seller: this.props.currentAccount.get("id"),
      fee: {
        asset_id: feeID,
        amount: 0
      }
    });
    Promise.all([(0,bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.FetchChain)("getAsset", this.props.quoteAsset.getIn(["bitasset", "options", "short_backing_asset"]))]).then(assets => {
      let [backingAsset] = assets;
      let collateral = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Asset({
        amount: order.amount_for_sale.getAmount(),
        asset_id: backingAsset.get("id"),
        precision: backingAsset.get("precision")
      });
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_10__["default"].createPredictionShort(order, collateral).then(result => {
        if (result.error) {
          if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Notification.error({
            message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.exchange_unknown_error_place_order", {
              amount: buyAssetAmount,
              symbol: buyAsset.symbol
            })
          });
        }
      });
    });
  }

  _forceBuy(type, feeAsset, sellBalance, coreBalance) {
    let current = this.state[type === "sell" ? "ask" : "bid"]; // Convert fee to relevant asset fee and check if user has sufficient balance

    sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(sellBalance).get("balance"), 10) : 0);
    coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Asset({
      amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(coreBalance).toJS().balance, 10) : 0
    });

    let fee = this._getFee(feeAsset);

    let feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());

    if (feeID) {
      this._createLimitOrder(type, feeID);
    } else {
      console.error("Unable to pay fees, aborting limit order creation");
    }
  }

  _forceSell(type, feeAsset, sellBalance, coreBalance) {
    let current = this.state[type === "sell" ? "ask" : "bid"]; // Convert fee to relevant asset fee and check if user has sufficient balance

    sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(sellBalance).get("balance"), 10) : 0);
    coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Asset({
      amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(coreBalance).toJS().balance, 10) : 0
    });

    let fee = this._getFee(feeAsset);

    let feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());

    if (feeID) {
      this._createLimitOrder(type, feeID);
    } else {
      console.error("Unable to pay fees, aborting limit order creation");
    }
  }

  _cancelLimitOrder(orderID, e) {
    e.preventDefault();
    let {
      currentAccount
    } = this.props;
    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_10__["default"].cancelLimitOrder(currentAccount.get("id"), orderID // order id to cancel
    );
  }

  _changeZoomPeriod(size, e) {
    e.preventDefault();

    if (size !== this.state.currentPeriod) {
      this.setState({
        currentPeriod: size
      });
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
        currentPeriod: size
      });
    }
  }

  _onGroupOrderLimitChange(e) {
    let groupLimit;

    if (typeof e == "object") {
      e.preventDefault();
      groupLimit = parseInt(e.target.value);
    }

    if (typeof e == "number") groupLimit = parseInt(e);
    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeCurrentGroupLimit(groupLimit);

    if (groupLimit !== this.props.currentGroupOrderLimit) {
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_10__["default"].changeCurrentGroupLimit(groupLimit);
      let currentSub = this.props.sub.split("_");
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_10__["default"].unSubscribeMarket(currentSub[0], currentSub[1]).then(() => {
        this.props.subToMarket(this.props, this.props.bucketSize, groupLimit);
      });
    }
  }

  _depthChartClick(base, quote, e) {
    e.preventDefault();
    let {
      bid,
      ask
    } = this.state;
    bid.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Price({
      base: this.state.bid.for_sale,
      quote: this.state.bid.to_receive,
      real: e.xAxis[0].value
    });
    bid.priceText = bid.price.toReal();
    ask.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Price({
      base: this.state.ask.to_receive,
      quote: this.state.ask.for_sale,
      real: e.xAxis[0].value
    });
    ask.priceText = ask.price.toReal();
    let newState = {
      bid,
      ask,
      depthLine: bid.price.toReal()
    };
    this._setForSale(bid, true) || this._setReceive(bid, true);
    this._setReceive(ask) || this._setForSale(ask);

    this._setPriceText(bid, true);

    this._setPriceText(ask, false); // if (bid.for_sale.)


    this.setState(newState);
  }

  _setAutoscroll(value) {
    this.setState({
      autoScroll: value
    });
  }
  /**
   *
   * @param {string} panel - Panel to toggle
   */


  _togglePanel(panel) {
    if (!panel) return;
    let newState = [];
    this.state.activePanels.forEach(a => {
      if (a !== panel) {
        newState.push(a);
      }
    });

    if (!this.state.activePanels.includes(panel)) {
      newState.push(panel);
    }

    this.setState({
      activePanels: newState
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      activePanels: newState
    });
  }

  _toggleChart(value) {
    this.setState({
      chartType: value
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      chartType: value
    });
  }

  _chartZoom = () => {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      chartZoom: !this.state.chartZoom
    });
    let chartType = this.state.chartType;
    this.setState({
      chartZoom: !this.state.chartZoom,
      chartType: "hidden_chart"
    }); // force reload

    setTimeout(() => {
      this.setState({
        chartType: chartType
      });
    }, 100);
  };
  _chartTools = () => {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      chartTools: !this.state.chartTools
    });
    let chartType = this.state.chartType;
    this.setState({
      chartTools: !this.state.chartTools,
      chartType: "hidden_chart"
    }); // force reload

    setTimeout(() => {
      this.setState({
        chartType: chartType
      });
    }, 100);
  };

  _flipBuySell() {
    this.setState({
      flipBuySell: !this.state.flipBuySell
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      flipBuySell: !this.state.flipBuySell
    });
  }
  /***
   * Toggle Buy/Sell order UX
   * Horizontal order book only
   */


  _flipOrderBook = () => {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      flipOrderBook: !this.state.flipOrderBook
    });
    this.setState({
      flipOrderBook: !this.state.flipOrderBook
    });
  };
  /***
   * Toggle order book to switch place of buy and sell orders
   * Vertical order book only
   */

  _orderBookReversed = () => {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      orderBookReversed: !this.state.orderBookReversed
    });
    this.setState({
      orderBookReversed: !this.state.orderBookReversed
    });
  };
  _hideFunctionButtons = () => {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      hideFunctionButtons: !this.state.hideFunctionButtons
    });
    this.setState({
      hideFunctionButtons: !this.state.hideFunctionButtons
    });
  };

  _toggleOpenBuySell() {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      buySellOpen: !this.state.buySellOpen
    });
    this.setState({
      buySellOpen: !this.state.buySellOpen
    });
  }

  _toggleMarketPicker(asset) {
    let showMarketPicker = !!asset ? true : false;

    if (showMarketPicker) {
      this.showMarketPickerModal();
    }

    this.setState({
      showMarketPicker,
      marketPickerAsset: asset
    });
  }

  _moveOrderBook() {
    // Unpin OrderForm
    if (this.state.verticalOrderForm) {
      this._moveOrderForm();
    }

    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      verticalOrderBook: !this.state.verticalOrderBook
    });
    this.setState({
      verticalOrderBook: !this.state.verticalOrderBook
    });
  }

  _moveOrderForm() {
    // Unpin OrderBook
    if (this.state.verticalOrderBook) {
      this._moveOrderBook();
    }

    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      verticalOrderForm: !this.state.verticalOrderForm
    });
    this.setState({
      verticalOrderForm: !this.state.verticalOrderForm
    });
  }

  _togglePersonalize() {
    if (!this.state.isPersonalizeModalVisible) {
      this.setState({
        isPersonalizeModalVisible: !this.state.isPersonalizeModalVisible,
        isPersonalizeModalLoaded: true
      });
    } else {
      this.setState({
        isPersonalizeModalVisible: !this.state.isPersonalizeModalVisible
      });
    }
  }

  _toggleScrollbars() {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      hideScrollbars: !this.state.hideScrollbars
    });
    this.setState({
      hideScrollbars: !this.state.hideScrollbars
    });
  }

  _toggleSingleColumnOrderForm() {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      singleColumnOrderForm: !this.state.singleColumnOrderForm
    });
    this.setState({
      singleColumnOrderForm: !this.state.singleColumnOrderForm
    });
  }

  _mirrorPanels() {
    this.setState({
      mirrorPanels: !this.state.mirrorPanels
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      mirrorPanels: !this.state.mirrorPanels
    });
  }

  _currentPriceClick(type, price) {
    const isBid = type === "bid";
    let current = this.state[type];
    current.price = price[isBid ? "invert" : "clone"]();
    current.priceText = current.price.toReal();

    if (isBid) {
      this._setForSale(current, isBid) || this._setReceive(current, isBid);
    } else {
      this._setReceive(current, isBid) || this._setForSale(current, isBid);
    }

    this.forceUpdate();
  }

  _orderbookClick(order) {
    const isBid = order.isBid();
    /*
     * Because we are using a bid order to construct an ask and vice versa,
     * totalToReceive becomes forSale, and totalForSale becomes toReceive
     */

    let forSale = order.totalToReceive({
      noCache: true
    }); // let toReceive = order.totalForSale({noCache: true});

    let toReceive = forSale.times(order.sellPrice());
    let newPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Price({
      base: isBid ? toReceive : forSale,
      quote: isBid ? forSale : toReceive
    });
    let current = this.state[isBid ? "bid" : "ask"];
    current.price = newPrice;
    current.priceText = newPrice.toReal();
    let newState = {
      // If isBid is true, newState defines a new ask order and vice versa
      [isBid ? "ask" : "bid"]: {
        for_sale: forSale,
        forSaleText: forSale.getAmount({
          real: true
        }),
        to_receive: toReceive,
        toReceiveText: toReceive.getAmount({
          real: true
        }),
        price: newPrice,
        priceText: newPrice.toReal()
      }
    };

    if (isBid) {
      this._setForSale(current, isBid) || this._setReceive(current, isBid);
    } else {
      this._setReceive(current, isBid) || this._setForSale(current, isBid);
    }

    this.setState(newState);
  }

  _borrowQuote() {
    this.showBorrowQuoteModal();
  }

  _borrowBase() {
    this.showBorrowBaseModal();
  }

  _onDeposit(type) {
    this.setState({
      depositModalType: type
    });
    this.showDepositModal();
  }

  _onBuy(type) {
    this.setState({
      buyModalType: type
    });
    this.showDepositBridgeModal();
  }

  _getSettlementInfo() {
    let {
      lowestCallPrice,
      feedPrice,
      quoteAsset
    } = this.props;
    let showCallLimit = false;

    if (feedPrice) {
      if (feedPrice.inverted) {
        showCallLimit = lowestCallPrice <= feedPrice.toReal();
      } else {
        showCallLimit = lowestCallPrice >= feedPrice.toReal();
      }
    }

    return !!(showCallLimit && lowestCallPrice && !quoteAsset.getIn(["bitasset", "is_prediction_market"]));
  }

  _setTabVerticalPanel(tab) {
    this.setState({
      tabVerticalPanel: tab
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      tabVerticalPanel: tab
    });
  }

  _setTabBuySell(tab) {
    this.setState({
      tabBuySell: tab
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      tabBuySell: tab
    });
  }

  _setPanelTabInGroup(group, activetab) {
    let {
      panelTabsActive
    } = this.state;
    Object.keys(panelTabsActive).map(a => {
      if (a == group) {
        panelTabsActive[a] = activetab;
      }
    });
    this.setState({
      panelTabsActive: panelTabsActive,
      forceReRender: true // Requires to forcefully re-render for tab to stick

    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      panelTabsActive: panelTabsActive
    });
  }

  _setPanelTabs(panelName, newTabsId) {
    let {
      panelTabs,
      panelTabsActive
    } = this.state;
    let newState = {
      panelTabs: panelTabs,
      panelTabsActive: panelTabsActive
    }; // Set new Tabs ID for Panel

    Object.keys(panelTabs).map(thisPanelName => {
      newState.panelTabs[thisPanelName] = thisPanelName == panelName ? newTabsId : panelTabs[thisPanelName];
    }); // Reset all Active Panel Tabs

    Object.keys(panelTabsActive).map(thisTabId => {
      newState.panelTabsActive[thisTabId] = "";
    });
    this.setState({
      newState
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({ ...newState
    });
  }

  onChangeFeeAsset(type, value) {
    if (type === "buy") {
      this.setState({
        buyFeeAssetIdx: value
      });
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
        buyFeeAssetIdx: value
      });
    } else {
      this.setState({
        sellFeeAssetIdx: value
      });
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
        sellFeeAssetIdx: value
      });
    }
  }

  onChangeChartHeight({
    value,
    increase
  }) {
    let newHeight = value ? value : this.state.chartHeight + (increase ? 20 : -20);

    if (newHeight < 400) {
      newHeight = 400;
    }

    if (newHeight > 1000) {
      newHeight = 1000;
    }

    this.setState({
      chartHeight: newHeight
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      chartHeight: newHeight
    });
  }

  _toggleBuySellPosition() {
    this.setState({
      buySellTop: !this.state.buySellTop
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      buySellTop: !this.state.buySellTop
    });
  }

  _setReceive(state, isBid) {
    if (state.price.isValid() && state.for_sale.hasAmount()) {
      state.to_receive = state.for_sale.times(state.price);
      state.toReceiveText = state.to_receive.getAmount({
        real: true
      }).toString();
      return true;
    }

    return false;
  }

  _setForSale(state, isBid) {
    if (state.price.isValid() && state.to_receive.hasAmount()) {
      state.for_sale = state.to_receive.times(state.price, true);
      state.forSaleText = state.for_sale.getAmount({
        real: true
      }).toString();
      return true;
    }

    return false;
  }

  _setPrice(state) {
    if (state.for_sale.hasAmount() && state.to_receive.hasAmount()) {
      state.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Price({
        base: state.for_sale,
        quote: state.to_receive
      });
      state.priceText = state.price.toReal().toString();
      return true;
    }

    return false;
  }

  _setPriceText(state, isBid) {
    const currentBase = state[isBid ? "for_sale" : "to_receive"];
    const currentQuote = state[isBid ? "to_receive" : "for_sale"];

    if (currentBase.hasAmount() && currentQuote.hasAmount()) {
      state.priceText = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Price({
        base: currentBase,
        quote: currentQuote
      }).toReal().toString();
    }
  }

  _onInputPrice(type, e) {
    let current = this.state[type];
    const isBid = type === "bid";
    current.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__.Price({
      base: current[isBid ? "for_sale" : "to_receive"],
      quote: current[isBid ? "to_receive" : "for_sale"],
      real: parseFloat(e.target.value) || 0
    });

    if (isBid) {
      this._setForSale(current, isBid) || this._setReceive(current, isBid);
    } else {
      this._setReceive(current, isBid) || this._setForSale(current, isBid);
    }

    current.priceText = e.target.value;
    this.forceUpdate();
  }

  _onInputSell(type, isBid, e) {
    let current = this.state[type]; // const isBid = type === "bid";

    current.for_sale.setAmount({
      real: parseFloat(e.target.value) || 0
    });

    if (current.price.isValid()) {
      this._setReceive(current, isBid);
    } else {
      this._setPrice(current);
    }

    current.forSaleText = e.target.value;

    this._setPriceText(current, type === "bid");

    this.forceUpdate();
  }

  _onInputReceive(type, isBid, e) {
    let current = this.state[type]; // const isBid = type === "bid";

    current.to_receive.setAmount({
      real: parseFloat(e.target.value) || 0
    });

    if (current.price.isValid()) {
      this._setForSale(current, isBid);
    } else {
      this._setPrice(current);
    }

    current.toReceiveText = e.target.value;

    this._setPriceText(current, type === "bid");

    this.forceUpdate();
  }

  isMarketFrozen() {
    let {
      baseAsset,
      quoteAsset
    } = this.props;
    let baseWhiteList = baseAsset.getIn(["options", "whitelist_markets"]).toJS();
    let quoteWhiteList = quoteAsset.getIn(["options", "whitelist_markets"]).toJS();
    let baseBlackList = baseAsset.getIn(["options", "blacklist_markets"]).toJS();
    let quoteBlackList = quoteAsset.getIn(["options", "blacklist_markets"]).toJS();

    if (quoteWhiteList.length && quoteWhiteList.indexOf(baseAsset.get("id")) === -1) {
      return {
        isFrozen: true,
        frozenAsset: quoteAsset.get("symbol")
      };
    }

    if (baseWhiteList.length && baseWhiteList.indexOf(quoteAsset.get("id")) === -1) {
      return {
        isFrozen: true,
        frozenAsset: baseAsset.get("symbol")
      };
    }

    if (quoteBlackList.length && quoteBlackList.indexOf(baseAsset.get("id")) !== -1) {
      return {
        isFrozen: true,
        frozenAsset: quoteAsset.get("symbol")
      };
    }

    if (baseBlackList.length && baseBlackList.indexOf(quoteAsset.get("id")) !== -1) {
      return {
        isFrozen: true,
        frozenAsset: baseAsset.get("symbol")
      };
    }

    return {
      isFrozen: false
    };
  }

  _toggleChat() {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      viewChat: !this.props.viewChat
    });
  }

  _toggleMiniChart() {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_9__["default"].changeViewSetting({
      miniDepthChart: !this.props.miniDepthChart
    });
  }

  _onChangeMobilePanel(val) {
    this.setState({
      mobileKey: val
    });
  }

  render() {
    let {
      currentAccount,
      marketLimitOrders,
      marketCallOrders,
      marketData,
      activeMarketHistory,
      invertedCalls,
      starredMarkets,
      quoteAsset,
      baseAsset,
      lowestCallPrice,
      marketStats,
      marketReady,
      marketSettleOrders,
      bucketSize,
      totals,
      feedPrice,
      buckets,
      coreAsset,
      trackedGroupsConfig,
      currentGroupOrderLimit
    } = this.props;
    const {
      combinedBids,
      combinedAsks,
      lowestAsk,
      highestBid,
      flatBids,
      flatAsks,
      flatCalls,
      flatSettles,
      groupedBids,
      groupedAsks
    } = marketData;
    let {
      bid,
      ask,
      verticalOrderBook,
      verticalOrderForm,
      chartHeight,
      chartType,
      flipBuySell,
      buyDiff,
      sellDiff,
      width,
      buySellTop,
      tabBuySell,
      tabVerticalPanel,
      hidePanel,
      hideScrollbars,
      buyModalType,
      depositModalType,
      autoScroll,
      activePanels,
      panelWidth,
      mirrorPanels,
      panelTabsActive,
      panelTabs,
      singleColumnOrderForm,
      flipOrderBook,
      orderBookReversed,
      chartZoom,
      chartTools,
      hideFunctionButtons
    } = this.state;
    const {
      isFrozen,
      frozenAsset
    } = this.isMarketFrozen();
    let centerContainerWidth = width;

    if (this.refs.center) {
      centerContainerWidth = this.refs.center.clientWidth;
    }

    let base = null,
        quote = null,
        accountBalance = null,
        quoteBalance = null,
        baseBalance = null,
        coreBalance = null,
        quoteSymbol,
        baseSymbol,
        showCallLimit = false,
        latest,
        changeClass;
    const showVolumeChart = this.props.viewSettings.get("showVolumeChart", true);
    let smallScreen = width < 850 ? true : false;
    let tinyScreen = width < 640 ? true : false;
    hideScrollbars = tinyScreen ? true : hideScrollbars;

    if (quoteAsset.size && baseAsset.size && currentAccount.size) {
      base = baseAsset;
      quote = quoteAsset;
      baseSymbol = base.get("symbol");
      quoteSymbol = quote.get("symbol");
      accountBalance = currentAccount.get("balances").toJS();

      if (accountBalance) {
        for (let id in accountBalance) {
          if (id === quote.get("id")) {
            quoteBalance = accountBalance[id];
          }

          if (id === base.get("id")) {
            baseBalance = accountBalance[id];
          }

          if (id === "1.3.0") {
            coreBalance = accountBalance[id];
          }
        }
      }

      showCallLimit = this._getSettlementInfo();
    }

    let quoteIsBitAsset = quoteAsset.get("bitasset_data_id") ? true : false;
    let baseIsBitAsset = baseAsset.get("bitasset_data_id") ? true : false;
    let spread = lowestAsk && highestBid ? lowestAsk.getPrice() - highestBid.getPrice() : 0; // Latest price

    if (activeMarketHistory.size) {
      let latest_two = activeMarketHistory.take(2);
      latest = latest_two.first();
      let second_latest = latest_two.last();
      changeClass = latest.getPrice() === second_latest.getPrice() ? "" : latest.getPrice() - second_latest.getPrice() > 0 ? "change-up" : "change-down";
    } // Fees


    if (!coreAsset || !Object.keys(this.state.feeStatus).length) {
      return null;
    }

    let {
      sellFeeAsset,
      sellFeeAssets,
      sellFee,
      buyFeeAsset,
      buyFeeAssets,
      buyFee
    } = this._getFeeAssets(quote, base, coreAsset); // Decimals


    let hasPrediction = base.getIn(["bitasset", "is_prediction_market"]) || quote.getIn(["bitasset", "is_prediction_market"]);
    let description = null;

    if (hasPrediction) {
      description = quoteAsset.getIn(["options", "description"]);
      description = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].parseDescription(description).main;
    }

    const minChartHeight = 300;
    const thisChartHeight = Math.max(this.state.height > 1100 ? chartHeight : chartHeight - 125, minChartHeight);
    let expirationType = this.state.expirationType;
    let expirationCustomTime = this.state.expirationCustomTime;
    let isPanelActive = activePanels.length >= 1 ? true : false;
    let isPredictionMarket = base.getIn(["bitasset", "is_prediction_market"]);
    /***
     * Generate layout cards
     */

    let actionCardIndex = 0;

    const buySellTitle = isBid => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "exchange-content-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_31__["default"], {
        string: "exchange.buysell_formatter",
        noLink: true,
        noTip: true,
        keys: [{
          type: "asset",
          value: this.props.quoteAsset.get("symbol"),
          arg: "asset"
        }, {
          type: "translate",
          value: isBid ? "exchange.buy" : "exchange.sell",
          arg: "direction"
        }]
      }));
    };

    let buyForm = isFrozen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "error small-12 no-overflow",
      style: {
        margin: "30px 10px 0",
        lineHeight: "1.2rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_34___default()), {
      content: "exchange.market_frozen",
      asset: frozenAsset,
      component: "p"
    })) : tinyScreen && !this.state.mobileKey.includes("buySellTab") ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
      animated: false,
      activeKey: this.props.viewSettings.get("order-form-bid") || "limit",
      onChange: this.handleOrderTypeTabChange.bind(this, "bid"),
      tabBarExtraContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, buySellTitle(true)),
      defaultActiveKey: "limit",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("exchange--buy-sell-form", verticalOrderForm && !smallScreen ? "" : centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "", "small-12 exchange-padded middle-content", flipBuySell ? `order-${buySellTop ? 2 : 3} large-order-${buySellTop ? 2 : 5} sell-form` : `order-${buySellTop ? 1 : 2} large-order-${buySellTop ? 1 : 4} buy-form`)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
      tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.limit"),
      key: "limit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_BuySell__WEBPACK_IMPORTED_MODULE_16__["default"], {
      showScaledOrderModal: this.showScaledOrderModal,
      key: `actionCard_${actionCardIndex++}`,
      onBorrow: baseIsBitAsset ? this._borrowBase.bind(this) : null,
      onBuy: this._onBuy.bind(this, "bid"),
      onDeposit: this._onDeposit.bind(this, "bid"),
      currentAccount: currentAccount,
      backedCoin: this.props.backedCoins.find(a => a.symbol === base.get("symbol")),
      currentBridges: this.props.bridgeCoins.get(base.get("symbol")) || null,
      isOpen: this.state.buySellOpen,
      onToggleOpen: this._toggleOpenBuySell.bind(this),
      parentWidth: centerContainerWidth,
      styles: {
        padding: 5,
        paddingRight: mirrorPanels ? 15 : 5
      },
      type: "bid",
      hideHeader: true,
      expirationType: expirationType["bid"],
      expirations: this.EXPIRATIONS,
      expirationCustomTime: expirationCustomTime["bid"],
      onExpirationTypeChange: this._handleExpirationChange.bind(this, "bid"),
      onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "bid"),
      amount: bid.toReceiveText,
      price: bid.priceText,
      total: bid.forSaleText,
      quote: quote,
      base: base,
      amountChange: this._onInputReceive.bind(this, "bid", true),
      priceChange: this._onInputPrice.bind(this, "bid"),
      setPrice: this._currentPriceClick.bind(this),
      totalChange: this._onInputSell.bind(this, "bid", false),
      clearForm: this._clearForms.bind(this, "bid"),
      balance: baseBalance,
      balanceId: base.get("id"),
      onSubmit: this._createLimitOrderConfirm.bind(this, quote, base, baseBalance, coreBalance, buyFeeAsset, "buy"),
      balancePrecision: base.get("precision"),
      quotePrecision: quote.get("precision"),
      totalPrecision: base.get("precision"),
      currentPrice: lowestAsk.getPrice(),
      currentPriceObject: lowestAsk,
      account: currentAccount.get("name"),
      fee: buyFee,
      hasFeeBalance: this.state.feeStatus[buyFee.asset_id].hasBalance,
      feeAssets: buyFeeAssets,
      feeAsset: buyFeeAsset,
      onChangeFeeAsset: this.onChangeFeeAsset.bind(this, "buy"),
      isPredictionMarket: base.getIn(["bitasset", "is_prediction_market"]),
      onFlip: !flipBuySell ? this._flipBuySell.bind(this) : null,
      onTogglePosition: this.state.buySellTop && !verticalOrderBook ? this._toggleBuySellPosition.bind(this) : null,
      moveOrderForm: !smallScreen && (!flipBuySell || verticalOrderForm) ? this._moveOrderForm.bind(this) : null,
      verticalOrderForm: !smallScreen ? verticalOrderForm : false,
      isPanelActive: isPanelActive,
      activePanels: activePanels,
      singleColumnOrderForm: singleColumnOrderForm,
      hideFunctionButtons: hideFunctionButtons
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
      tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.scaled"),
      key: "scaled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_ScaledOrderTab__WEBPACK_IMPORTED_MODULE_17__["default"], {
      expirationType: expirationType["bid"],
      expirations: this.EXPIRATIONS,
      expirationCustomTime: expirationCustomTime["bid"],
      onExpirationTypeChange: this._handleExpirationChange.bind(this, "bid"),
      onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "bid"),
      currentPrice: lowestAsk.getPrice(),
      lastClickedPrice: this.state.ask && this.state.ask.priceText,
      currentAccount: currentAccount,
      createScaledOrder: this._createScaledOrder,
      type: "bid",
      quoteAsset: quote,
      baseAsset: base
    })));
    let sellForm = isFrozen ? null : tinyScreen && !this.state.mobileKey.includes("buySellTab") ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
      activeKey: this.props.viewSettings.get("order-form-ask") || "limit",
      onChange: this.handleOrderTypeTabChange.bind(this, "ask"),
      animated: false,
      tabBarExtraContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, buySellTitle(false)),
      defaultActiveKey: "limit",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("exchange--buy-sell-form", verticalOrderForm && !smallScreen ? "" : centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "", "small-12 exchange-padded middle-content", flipBuySell ? `order-${buySellTop ? 1 : 2} large-order-${buySellTop ? 1 : 4} buy-form` : `order-${buySellTop ? 2 : 3} large-order-${buySellTop ? 2 : 5} sell-form`)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
      tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.limit"),
      key: "limit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_BuySell__WEBPACK_IMPORTED_MODULE_16__["default"], {
      showScaledOrderModal: this.showScaledOrderModal,
      key: `actionCard_${actionCardIndex++}`,
      onBorrow: quoteIsBitAsset ? this._borrowQuote.bind(this) : null,
      onBuy: this._onBuy.bind(this, "ask"),
      onDeposit: this._onDeposit.bind(this, "ask"),
      currentAccount: currentAccount,
      backedCoin: this.props.backedCoins.find(a => a.symbol === quote.get("symbol")),
      currentBridges: this.props.bridgeCoins.get(quote.get("symbol")) || null,
      isOpen: this.state.buySellOpen,
      onToggleOpen: this._toggleOpenBuySell.bind(this),
      parentWidth: centerContainerWidth,
      styles: {
        padding: 5,
        paddingRight: mirrorPanels ? 15 : 5
      },
      type: "ask",
      hideHeader: true,
      amount: ask.forSaleText,
      price: ask.priceText,
      total: ask.toReceiveText,
      quote: quote,
      base: base,
      expirationType: expirationType["ask"],
      expirations: this.EXPIRATIONS,
      expirationCustomTime: expirationCustomTime["ask"],
      onExpirationTypeChange: this._handleExpirationChange.bind(this, "ask"),
      onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "ask"),
      amountChange: this._onInputSell.bind(this, "ask", false),
      priceChange: this._onInputPrice.bind(this, "ask"),
      setPrice: this._currentPriceClick.bind(this),
      totalChange: this._onInputReceive.bind(this, "ask", true),
      clearForm: this._clearForms.bind(this, "ask"),
      balance: quoteBalance,
      balanceId: quote.get("id"),
      onSubmit: this._createLimitOrderConfirm.bind(this, base, quote, quoteBalance, coreBalance, sellFeeAsset, "sell"),
      balancePrecision: quote.get("precision"),
      quotePrecision: quote.get("precision"),
      totalPrecision: base.get("precision"),
      currentPrice: highestBid.getPrice(),
      currentPriceObject: highestBid,
      account: currentAccount.get("name"),
      fee: sellFee,
      hasFeeBalance: this.state.feeStatus[sellFee.asset_id].hasBalance,
      feeAssets: sellFeeAssets,
      feeAsset: sellFeeAsset,
      onChangeFeeAsset: this.onChangeFeeAsset.bind(this, "sell"),
      isPredictionMarket: quote.getIn(["bitasset", "is_prediction_market"]),
      onFlip: flipBuySell ? this._flipBuySell.bind(this) : null,
      onTogglePosition: this.state.buySellTop && !verticalOrderBook ? this._toggleBuySellPosition.bind(this) : null,
      moveOrderForm: !smallScreen && (flipBuySell || verticalOrderForm) ? this._moveOrderForm.bind(this) : null,
      verticalOrderForm: !smallScreen ? verticalOrderForm : false,
      isPanelActive: isPanelActive,
      activePanels: activePanels,
      singleColumnOrderForm: singleColumnOrderForm,
      hideFunctionButtons: hideFunctionButtons
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
      tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.scaled"),
      key: "scaled"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_ScaledOrderTab__WEBPACK_IMPORTED_MODULE_17__["default"], {
      expirationType: expirationType["ask"],
      expirations: this.EXPIRATIONS,
      expirationCustomTime: expirationCustomTime["ask"],
      onExpirationTypeChange: this._handleExpirationChange.bind(this, "ask"),
      onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "ask"),
      currentPrice: highestBid.getPrice(),
      lastClickedPrice: this.state.ask && this.state.ask.priceText,
      currentAccount: currentAccount,
      createScaledOrder: this._createScaledOrder,
      type: "ask",
      baseAsset: base,
      quoteAsset: quote
    })));
    let myMarkets = tinyScreen && !this.state.mobileKey.includes("myMarkets") ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_MyMarkets__WEBPACK_IMPORTED_MODULE_22__["default"], {
      key: `actionCard_${actionCardIndex++}`,
      className: "grid-block left-order-book no-padding no-margin vertical",
      style: {
        minWidth: 350,
        height: smallScreen ? 680 : "calc(100vh - 215px)",
        padding: smallScreen ? 10 : 0
      },
      headerStyle: {
        width: "100%",
        display: !smallScreen ? "display: none" : ""
      },
      noHeader: true,
      listHeight: this.state.height - 450,
      columns: [{
        name: "star",
        index: 1
      }, {
        name: "market",
        index: 2
      }, {
        name: "vol",
        index: 3
      }, {
        name: "price",
        index: 4
      }, {
        name: "change",
        index: 5
      }],
      findColumns: [{
        name: "market",
        index: 1
      }, {
        name: "issuer",
        index: 2
      }, {
        name: "vol",
        index: 3
      }, {
        name: "add",
        index: 4
      }],
      current: `${quoteSymbol}_${baseSymbol}`,
      location: this.props.location,
      history: this.props.history,
      activeTab: tabVerticalPanel ? tabVerticalPanel : "my-market"
    });
    let Trollbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        padding: !this.props.viewChat ? 0 : "0 0 0 0"
      },
      className: "grid-block no-margin vertical shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      onClick: this._toggleChat.bind(this),
      className: "exchange-content-header clickable",
      style: {
        textAlign: "left",
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 6,
        paddingBottom: 6
      }
    }, this.props.viewChat ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", null, "\u25BC") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", null, "\u25B2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_34___default()), {
      content: "exchange.trollbox"
    })), this.props.viewChat ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_Chat_ChatBro__WEBPACK_IMPORTED_MODULE_35__["default"], {
      height: "400px"
    }) : null);
    let orderBook = tinyScreen && !this.state.mobileKey.includes("orderBook") ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_OrderBook__WEBPACK_IMPORTED_MODULE_20__.OrderBook, {
      ref: "order_book",
      key: `actionCard_${actionCardIndex++}`,
      latest: latest && latest.getPrice(),
      changeClass: changeClass,
      orders: marketLimitOrders,
      calls: marketCallOrders,
      invertedCalls: invertedCalls,
      combinedBids: combinedBids,
      combinedAsks: combinedAsks,
      highestBid: highestBid,
      lowestAsk: lowestAsk,
      totalBids: totals.bid,
      totalAsks: totals.ask,
      base: base,
      quote: quote,
      baseSymbol: baseSymbol,
      quoteSymbol: quoteSymbol,
      onClick: this._orderbookClick.bind(this),
      horizontal: !verticalOrderBook || smallScreen ? true : false,
      flipOrderBook: flipOrderBook,
      orderBookReversed: orderBookReversed,
      marketReady: marketReady,
      wrapperClass: classnames__WEBPACK_IMPORTED_MODULE_3___default()(centerContainerWidth > 1200 ? "xlarge-8" : centerContainerWidth > 800 ? "" : "", "medium-12 large-12", "small-12 grid-block orderbook no-padding align-spaced no-overflow wrap shrink", `order-${buySellTop ? 3 : 1} xlarge-order-${buySellTop ? 4 : 1}`),
      innerClass: classnames__WEBPACK_IMPORTED_MODULE_3___default()(centerContainerWidth > 1200 ? "medium-6" : centerContainerWidth > 800 ? "medium-6 large-6" : "", "small-12 middle-content", !tinyScreen ? "exchange-padded" : ""),
      currentAccount: this.props.currentAccount.get("id"),
      handleGroupOrderLimitChange: this._onGroupOrderLimitChange.bind(this),
      trackedGroupsConfig: trackedGroupsConfig,
      currentGroupOrderLimit: currentGroupOrderLimit,
      groupedBids: groupedBids,
      groupedAsks: groupedAsks,
      isPanelActive: activePanels.length >= 1,
      onTogglePosition: !this.state.buySellTop ? this._toggleBuySellPosition.bind(this) : null,
      moveOrderBook: !smallScreen ? this._moveOrderBook.bind(this) : null,
      smallScreen: smallScreen,
      hideScrollbars: hideScrollbars,
      autoScroll: autoScroll,
      onFlipOrderBook: this._flipOrderBook.bind(this),
      hideFunctionButtons: hideFunctionButtons
    });
    panelWidth = 350;

    if (this.refs.order_book && this.refs.order_book.verticalStickyTable && this.refs.order_book.verticalStickyTable.current && this.refs.order_book.verticalStickyTable.current.scrollData) {
      panelWidth = this.refs.order_book.verticalStickyTable.current.scrollData.scrollWidth;
    }

    let marketHistory = tinyScreen && !this.state.mobileKey.includes("marketHistory") ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_MarketHistory__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: `actionCard_${actionCardIndex++}`,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(panelTabs["history"] == 0 ? centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "" : "medium-12", "no-padding no-overflow middle-content small-12 order-6"),
      innerClass: !tinyScreen ? "exchange-padded" : "",
      innerStyle: {
        paddingBottom: !tinyScreen ? "1.2rem" : "0"
      },
      noHeader: panelTabs["history"] == 0 ? false : true,
      history: activeMarketHistory,
      currentAccount: currentAccount,
      myHistory: currentAccount.get("history"),
      base: base,
      quote: quote,
      baseSymbol: baseSymbol,
      quoteSymbol: quoteSymbol,
      activeTab: "history",
      tinyScreen: tinyScreen,
      isPanelActive: isPanelActive,
      hideScrollbars: hideScrollbars
    });
    let myMarketHistory = tinyScreen && !this.state.mobileKey.includes("myMarketHistory") ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_MarketHistory__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: `actionCard_${actionCardIndex++}`,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(panelTabs["my_history"] == 0 ? centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "" : "medium-12", "no-padding no-overflow middle-content small-12", verticalOrderBook || verticalOrderForm ? "order-4" : "order-3"),
      innerClass: !tinyScreen ? "exchange-padded" : "",
      innerStyle: {
        paddingBottom: !tinyScreen ? "1.2rem" : "0"
      },
      noHeader: panelTabs["my_history"] == 0 ? false : true,
      history: activeMarketHistory,
      currentAccount: currentAccount,
      myHistory: currentAccount.get("history"),
      base: base,
      quote: quote,
      baseSymbol: baseSymbol,
      quoteSymbol: quoteSymbol,
      activeTab: "my_history",
      tinyScreen: tinyScreen,
      isPanelActive: isPanelActive,
      hideScrollbars: hideScrollbars
    });
    let myOpenOrders = tinyScreen && !this.state.mobileKey.includes("myOpenOrders") ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_MyOpenOrders__WEBPACK_IMPORTED_MODULE_19__.MarketOrders, {
      key: `actionCard_${actionCardIndex++}`,
      style: {
        marginBottom: !tinyScreen ? 15 : 0
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(panelTabs["my_orders"] == 0 ? centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "" : "medium-12", "no-padding no-overflow middle-content small-12 order-7"),
      innerClass: !tinyScreen ? "exchange-padded" : "",
      innerStyle: {
        paddingBottom: !tinyScreen ? "1.2rem" : "0"
      },
      noHeader: panelTabs["my_orders"] == 0 ? false : true,
      orders: marketLimitOrders,
      settleOrders: marketSettleOrders,
      currentAccount: currentAccount,
      base: base,
      quote: quote,
      baseSymbol: baseSymbol,
      quoteSymbol: quoteSymbol,
      activeTab: "my_orders",
      onCancel: this._cancelLimitOrder.bind(this),
      flipMyOrders: this.props.viewSettings.get("flipMyOrders"),
      feedPrice: this.props.feedPrice,
      smallScreen: smallScreen,
      tinyScreen: tinyScreen,
      hidePanel: hidePanel,
      isPanelActive: isPanelActive,
      hideScrollbars: hideScrollbars
    });
    let settlementOrders = marketSettleOrders.size === 0 || tinyScreen && !this.state.mobileKey.includes("settlementOrders") ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_MyOpenOrders__WEBPACK_IMPORTED_MODULE_19__.MarketOrders, {
      key: `actionCard_${actionCardIndex++}`,
      style: {
        marginBottom: !tinyScreen ? 15 : 0
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(panelTabs["open_settlement"] == 0 ? centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "" : "medium-12", "no-padding no-overflow middle-content small-12 order-8"),
      innerClass: !tinyScreen ? "exchange-padded" : "",
      innerStyle: {
        paddingBottom: !tinyScreen ? "1.2rem" : "0"
      },
      noHeader: panelTabs["open_settlement"] == 0 ? false : true,
      orders: marketLimitOrders,
      settleOrders: marketSettleOrders,
      currentAccount: currentAccount,
      base: base,
      quote: quote,
      baseSymbol: baseSymbol,
      quoteSymbol: quoteSymbol,
      activeTab: "open_settlement",
      onCancel: this._cancelLimitOrder.bind(this),
      flipMyOrders: this.props.viewSettings.get("flipMyOrders"),
      feedPrice: this.props.feedPrice,
      smallScreen: smallScreen,
      tinyScreen: tinyScreen,
      hidePanel: hidePanel,
      isPanelActive: isPanelActive,
      hideScrollbars: hideScrollbars
    });
    let tradingViewChart = !tinyScreen && !(chartType == "price_chart") || tinyScreen && !this.state.mobileKey.includes("tradingViewChart") ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_TradingViewPriceChart__WEBPACK_IMPORTED_MODULE_26__["default"], {
      locale: this.props.locale,
      dataFeed: this.props.dataFeed,
      baseSymbol: baseSymbol,
      quoteSymbol: quoteSymbol,
      marketReady: marketReady,
      theme: this.props.settings.get("themes"),
      buckets: buckets,
      bucketSize: bucketSize,
      currentPeriod: this.state.currentPeriod,
      chartHeight: thisChartHeight,
      chartZoom: tinyScreen ? false : chartZoom,
      chartTools: tinyScreen ? false : chartTools,
      mobile: tinyScreen
    });
    let deptHighChart = !tinyScreen && !(chartType == "market_depth") || tinyScreen && !this.state.mobileKey.includes("deptHighChart") ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_DepthHighChart__WEBPACK_IMPORTED_MODULE_27__["default"], {
      marketReady: marketReady,
      orders: marketLimitOrders,
      showCallLimit: showCallLimit,
      call_orders: marketCallOrders,
      flat_asks: flatAsks,
      flat_bids: flatBids,
      flat_calls: showCallLimit ? flatCalls : [],
      flat_settles: this.props.settings.get("showSettles") && flatSettles,
      settles: marketSettleOrders,
      invertedCalls: invertedCalls,
      totalBids: totals.bid,
      totalAsks: totals.ask,
      base: base,
      quote: quote,
      height: thisChartHeight,
      isPanelActive: isPanelActive,
      onClick: this._depthChartClick.bind(this, base, quote),
      feedPrice: !hasPrediction && feedPrice && feedPrice.toReal(),
      spread: spread,
      LCP: showCallLimit ? lowestCallPrice : null,
      hasPrediction: hasPrediction,
      noFrame: false,
      theme: this.props.settings.get("themes"),
      centerRef: this.refs.center,
      activePanels: activePanels
    });
    let tradingChartHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "exchange--chart-control",
      style: {
        height: 33,
        right: chartType == "price_chart" ? "6rem" : "15rem",
        top: "1px",
        position: "absolute",
        zIndex: 1,
        padding: "0.2rem"
      }
    }, chartType == "price_chart" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.settings.tooltip.chart_tools")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      style: {
        cursor: "pointer",
        fontSize: "1.4rem",
        marginRight: "0.6rem"
      },
      onClick: this._chartTools.bind(this),
      type: "tool"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.settings.tooltip.increase_chart_height")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      style: {
        cursor: "pointer",
        fontSize: "1.4rem",
        marginRight: "0.6rem"
      },
      onClick: () => {
        this.onChangeChartHeight({
          increase: true
        });
      },
      type: "up"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.settings.tooltip.decrease_chart_height")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      style: {
        cursor: "pointer",
        fontSize: "1.4rem",
        marginRight: "0.6rem"
      },
      onClick: () => {
        this.onChangeChartHeight({
          increase: false
        });
      },
      type: "down"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      title: chartType == "market_depth" ? counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.settings.tooltip.show_price_chart") : counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.settings.tooltip.show_market_depth")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      style: {
        cursor: "pointer",
        fontSize: "1.4rem"
      },
      onClick: () => {
        if (chartType == "market_depth") {
          this._toggleChart("price_chart");
        } else {
          this._toggleChart("market_depth");
        }
      },
      type: chartType == "market_depth" ? "bar-chart" : "area-chart"
    })));
    /***
     * Generate tabs based on Layout
     *
     */

    let buySellTab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      key: `actionCard_${actionCardIndex++}`,
      className: "left-order-book small-12",
      style: {
        paddingLeft: 5,
        width: !smallScreen ? 300 : "auto"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
      defaultActiveKey: "buy",
      activeKey: tabBuySell,
      onChange: this._setTabBuySell.bind(this),
      style: {
        padding: "0px !important",
        margin: "0px !important"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
      tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_31__["default"], {
        string: "exchange.buysell_formatter",
        noLink: true,
        noTip: false,
        keys: [{
          type: "asset",
          value: quote.get("symbol"),
          arg: "asset"
        }, {
          type: "translate",
          value: isPredictionMarket ? "exchange.short" : "exchange.buy",
          arg: "direction"
        }]
      }),
      key: "buy"
    }, buyForm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
      tab: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_31__["default"], {
        string: "exchange.buysell_formatter",
        noLink: true,
        noTip: false,
        keys: [{
          type: "asset",
          value: quote.get("symbol"),
          arg: "asset"
        }, {
          type: "translate",
          value: isPredictionMarket ? "exchange.short" : "exchange.sell",
          arg: "direction"
        }]
      }),
      key: "sell"
    }, sellForm))); // Generate Tabbed Groups

    let groupTabs = {
      1: [],
      2: []
    };
    let groupStandalone = [];
    Object.keys(panelTabs).sort().map(a => {
      if (panelTabs[a] == 0) {
        // Handle Standalone Settings
        if (a == "my_history") {
          groupStandalone.push(myMarketHistory);
        }

        if (a == "history") {
          groupStandalone.push(marketHistory);
        }

        if (a == "my_orders") {
          groupStandalone.push(myOpenOrders);
        }

        if (a == "open_settlement" && settlementOrders !== null) {
          groupStandalone.push(settlementOrders);
        }
      } else {
        if (a == "my_history") {
          groupTabs[panelTabs[a]].push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
            tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.my_history"),
            key: "my_history"
          }, myMarketHistory));
        }

        if (a == "history") {
          groupTabs[panelTabs[a]].push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
            tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.history"),
            key: "history"
          }, marketHistory));
        }

        if (a == "my_orders") {
          groupTabs[panelTabs[a]].push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
            tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.my_orders"),
            key: "my_orders"
          }, myOpenOrders));
        }

        if (a == "open_settlement" && settlementOrders !== null) {
          groupTabs[panelTabs[a]].push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
            tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.settle_orders"),
            key: "open_settlement"
          }, settlementOrders));
        }
      }
    });
    Object.keys(panelTabsActive).map(thisTabsId => {
      Object.keys(panelTabs).map(thisPanelName => {
        let stop = false;

        if (!stop && thisTabsId == panelTabs[thisPanelName]) {
          panelTabsActive[thisTabsId] = !panelTabsActive[thisTabsId] ? thisPanelName : panelTabsActive[thisTabsId];
          stop = true;
        }
      });
    });
    let groupTabsCount = groupStandalone.length;
    Object.keys(groupTabs).map(tab => {
      if (groupTabs[tab].length) {
        groupTabsCount++;
      }
    });
    let groupTabbed1 = groupTabs[1].length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      key: `actionCard_${actionCardIndex++}`,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(centerContainerWidth > 1200 ? groupTabsCount == 1 ? "medium-12 xlarge-4" : "medium-6 xlarge-4 " : centerContainerWidth > 800 ? groupTabsCount == 1 ? "medium-12" : "medium-6" : "", "small-12 order-5", verticalOrderBook ? "xlarge-order-5" : "", !verticalOrderBook && !verticalOrderForm ? centerContainerWidth < 1200 ? "xlarge-order-5" : "xlarge-order-2" : ""),
      style: {
        paddingRight: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
      activeKey: panelTabsActive[1],
      onChange: this._setPanelTabInGroup.bind(this, 1)
    }, groupTabs[1])) : null;
    let groupTabbed2 = groupTabs[2].length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      key: `actionCard_${actionCardIndex++}`,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(centerContainerWidth > 1200 ? groupTabsCount == 1 ? "medium-12 xlarge-4" : "medium-6 xlarge-4 " : centerContainerWidth > 800 ? groupTabsCount == 1 ? "medium-12" : "medium-6" : "", "small-12 order-6"),
      style: {
        paddingRight: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
      activeKey: panelTabsActive[2],
      onChange: this._setPanelTabInGroup.bind(this, 2)
    }, groupTabs[2])) : null;
    let emptyDiv = groupTabsCount > 2 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(centerContainerWidth > 1200 && (verticalOrderBook || verticalOrderBook) ? "xlarge-order-6 xlarge-8 order-9" : "", "small-12 grid-block orderbook no-padding align-spaced no-overflow wrap"),
      key: `actionCard_${actionCardIndex++}`
    }, "\xA0");
    /**
     * Generate layout grid based on Screen Size
     */

    let actionCards = [];

    if (!smallScreen) {
      if (!verticalOrderForm) {
        actionCards.push(buyForm);
        actionCards.push(sellForm);
      }

      if (!verticalOrderBook) {
        actionCards.push(orderBook);
      }

      if (verticalOrderBook || verticalOrderForm) {
        actionCards.push(emptyDiv);
      }

      actionCards.push(groupStandalone);
      actionCards.push(groupTabbed1);
      actionCards.push(groupTabbed2);
    } else if (!tinyScreen) {
      actionCards.push(buyForm);
      actionCards.push(sellForm);
      actionCards.push(orderBook);
      actionCards.push(groupStandalone);
      actionCards.push(groupTabbed1);
      actionCards.push(groupTabbed2);
      actionCards.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "order-10 small-12",
        key: `actionCard_${actionCardIndex++}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        defaultActiveKey: "my-market",
        activeKey: tabVerticalPanel,
        onChange: this._setTabVerticalPanel.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
        tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.market_name"),
        key: "my-market"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
        tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.more"),
        key: "find-market"
      })), myMarkets));
    } else {
      actionCards = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
        activeKey: this.state.mobileKey,
        onChange: this._onChangeMobilePanel.bind(this),
        style: {
          paddingRight: 8
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Collapse.Panel, {
        header: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.price_history"),
        key: "tradingViewChart"
      }, tradingViewChart), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Collapse.Panel, {
        header: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.order_depth"),
        key: "deptHighChart"
      }, deptHighChart), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Collapse.Panel, {
        header: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.buy_sell"),
        key: "buySellTab"
      }, buySellTab), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Collapse.Panel, {
        header: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.order_book"),
        key: "orderBook"
      }, orderBook), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Collapse.Panel, {
        header: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.history"),
        key: "marketHistory"
      }, marketHistory), settlementOrders !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Collapse.Panel, {
        header: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.settle_orders"),
        key: "settlementOrders"
      }, settlementOrders) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Collapse.Panel, {
        header: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.my_history"),
        key: "myMarketHistory"
      }, myMarketHistory), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Collapse.Panel, {
        header: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.my_orders"),
        key: "myOpenOrders"
      }, myOpenOrders), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Collapse.Panel, {
        header: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.market_name"),
        key: "myMarkets"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        defaultActiveKey: "my-market",
        activeKey: tabVerticalPanel,
        onChange: this._setTabVerticalPanel.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
        tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.market_name"),
        key: "my-market"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
        tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.more"),
        key: "find-market"
      })), myMarkets));
    }
    /***
     * Generate Panels
     */


    let leftPanel = null;
    let rightPanel = null;
    let leftPanelContainer = null;
    let rightPanelContainer = null;
    let enableToggleLeft = false;
    let enableToggleRight = false;

    if (!smallScreen) {
      if (verticalOrderBook) {
        leftPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
          className: "left-order-book no-padding no-overflow",
          style: {
            display: "block",
            height: "calc(100vh - 170px)",
            width: panelWidth
          }
        }, orderBook);
      }

      if (verticalOrderForm) {
        leftPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
          className: "left-order-book no-padding no-overflow",
          style: {
            display: "block",
            height: "calc(100vh - 170px)",
            width: 300
          }
        }, buySellTab);
      }

      rightPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "grid-block shrink right-column no-overflow",
        style: {
          maxWidth: 450
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "grid-block no-padding no-margin vertical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "left-order-book no-padding no-overflow shrink",
        style: {
          display: "block"
        },
        key: `actionCard_${actionCardIndex++}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "v-align no-padding align-center grid-block footer vertical shrink",
        "data-intro": counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("walkthrough.my_markets")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        defaultActiveKey: "my-market",
        activeKey: tabVerticalPanel,
        onChange: this._setTabVerticalPanel.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
        tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.market_name"),
        key: "my-market"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tabs.TabPane, {
        tab: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.more"),
        key: "find-market"
      }))), myMarkets), Trollbox));

      if (!mirrorPanels && leftPanel || mirrorPanels && rightPanel) {
        enableToggleLeft = true;
      }

      if (!mirrorPanels && rightPanel || mirrorPanels && leftPanel) {
        enableToggleRight = true;
      }

      leftPanelContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "grid-block left-column shrink no-overflow"
      }, activePanels.includes("left") ? mirrorPanels ? rightPanel : leftPanel : null, enableToggleLeft ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        style: {
          width: "auto",
          paddingTop: "calc(50vh - 80px)"
        },
        onClick: this._togglePanel.bind(this, "left")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        "data-intro": counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("walkthrough.panel_hide"),
        type: activePanels.includes("left") ? "caret-left" : "caret-right"
      })) : null);
      rightPanelContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "grid-block left-column shrink no-overflow"
      }, enableToggleRight ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        style: {
          width: "auto",
          paddingTop: "calc(50vh - 80px)"
        },
        onClick: this._togglePanel.bind(this, "right")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        "data-intro": counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("walkthrough.panel_hide"),
        type: activePanels.includes("right") ? "caret-right" : "caret-left"
      })) : null, activePanels.includes("right") ? !mirrorPanels ? rightPanel : leftPanel : null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "grid-block vertical"
    }, !this.props.marketReady ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_28__["default"], null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_ExchangeHeader__WEBPACK_IMPORTED_MODULE_18__["default"], {
      hasAnyPriceAlert: this.props.hasAnyPriceAlert,
      showPriceAlertModal: this.showPriceAlertModal,
      account: this.props.currentAccount,
      quoteAsset: quoteAsset,
      baseAsset: baseAsset,
      hasPrediction: hasPrediction,
      starredMarkets: starredMarkets,
      lowestAsk: lowestAsk,
      highestBid: highestBid,
      lowestCallPrice: lowestCallPrice,
      showCallLimit: showCallLimit,
      feedPrice: feedPrice,
      marketReady: marketReady,
      latestPrice: latest && latest.getPrice(),
      marketStats: marketStats,
      selectedMarketPickerAsset: this.state.marketPickerAsset,
      onToggleMarketPicker: this._toggleMarketPicker.bind(this),
      onTogglePersonalize: this._togglePersonalize.bind(this),
      showVolumeChart: showVolumeChart
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "grid-block page-layout market-layout"
    }, this.state.isMarketPickerModalVisible || this.state.isMarketPickerModalLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_MarketPicker__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({
      visible: this.state.isMarketPickerModalVisible,
      showModal: this.showMarketPickerModal,
      hideModal: this.hideMarketPickerModal,
      marketPickerAsset: this.state.marketPickerAsset,
      onToggleMarketPicker: this._toggleMarketPicker.bind(this)
    }, this.props)) : null, this.state.isPersonalizeModalVisible || this.state.isPersonalizeModalLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_Personalize__WEBPACK_IMPORTED_MODULE_25__["default"], {
      visible: this.state.isPersonalizeModalVisible,
      showModal: this.showPersonalizeModal,
      hideModal: this.hidePersonalizeModal,
      viewSettings: this.props.viewSettings,
      chartType: chartType,
      chartHeight: chartHeight,
      onTogglePersonalize: this._togglePersonalize.bind(this),
      onChangeChartHeight: this.onChangeChartHeight.bind(this),
      handleGroupOrderLimitChange: this._onGroupOrderLimitChange.bind(this),
      trackedGroupsConfig: trackedGroupsConfig,
      currentGroupOrderLimit: currentGroupOrderLimit,
      verticalOrderBook: verticalOrderBook,
      hideScrollbars: hideScrollbars,
      mirrorPanels: mirrorPanels,
      panelTabs: panelTabs,
      singleColumnOrderForm: singleColumnOrderForm,
      buySellTop: buySellTop,
      flipBuySell: flipBuySell,
      flipOrderBook: flipOrderBook,
      tinyScreen: tinyScreen,
      smallScreen: smallScreen,
      orderBookReversed: orderBookReversed,
      chartZoom: chartZoom,
      chartTools: chartTools,
      hideFunctionButtons: hideFunctionButtons,
      onMoveOrderBook: this._moveOrderBook.bind(this),
      onMirrorPanels: this._mirrorPanels.bind(this),
      onToggleScrollbars: this._toggleScrollbars.bind(this),
      onSetAutoscroll: this._setAutoscroll.bind(this),
      onToggleChart: this._toggleChart.bind(this),
      onSetPanelTabs: this._setPanelTabs.bind(this),
      onToggleSingleColumnOrderForm: this._toggleSingleColumnOrderForm.bind(this),
      onToggleBuySellPosition: this._toggleBuySellPosition.bind(this),
      onFlipBuySell: this._flipBuySell.bind(this),
      onFlipOrderBook: this._flipOrderBook.bind(this),
      onOrderBookReversed: this._orderBookReversed.bind(this),
      onChartZoom: this._chartZoom.bind(this),
      onChartTools: this._chartTools.bind(this),
      onHideFunctionButtons: this._hideFunctionButtons.bind(this)
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_Notifier_NotifierContainer__WEBPACK_IMPORTED_MODULE_30__["default"], null), leftPanelContainer, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        paddingTop: 0
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("grid-block main-content vertical no-overflow")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "grid-block vertical no-padding ps-container",
      id: "CenterContent",
      ref: "center",
      "data-intro": tinyScreen ? counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("walkthrough.collapsed_items") : null
    }, !tinyScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, tradingChartHeader, chartType && chartType == "price_chart" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "grid-block shrink no-overflow",
      id: "market-charts"
    }, tradingViewChart) : null, chartType && chartType == "market_depth" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "grid-block vertical no-padding shrink"
    }, deptHighChart) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, actionCards))), rightPanelContainer), quoteIsBitAsset && (this.state.isBorrowQuoteModalVisible || this.state.isBorrowQuoteModalLoaded) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_29__["default"], {
      visible: this.state.isBorrowQuoteModalVisible,
      hideModal: this.hideBorrowQuoteModal,
      quoteAssetObj: quoteAsset.get("id"),
      backingAssetObj: quoteAsset.getIn(["bitasset", "options", "short_backing_asset"]),
      accountObj: currentAccount
    }) : null, baseIsBitAsset && (this.state.isBorrowBaseModalVisible || this.state.isBorrowBaseModalLoaded) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_29__["default"], {
      visible: this.state.isBorrowBaseModalVisible,
      hideModal: this.hideBorrowBaseModal,
      quoteAssetObj: baseAsset.get("id"),
      backingAssetObj: baseAsset.getIn(["bitasset", "options", "short_backing_asset"]),
      accountObj: currentAccount
    }) : null, this.state.isDepositModalVisible || this.state.isDepositModalLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_32__["default"], _extends({
      visible: this.state.isDepositModalVisible,
      hideModal: this.hideDepositModal,
      ref: "deposit_modal",
      action: "deposit",
      fiatModal: false,
      account: currentAccount,
      sender: currentAccount,
      asset: depositModalType === "bid" ? base : quote,
      modalId: "simple_deposit_modal" + (depositModalType === "bid" ? "" : "_ask"),
      balance: depositModalType === "bid" ? baseBalance : quoteBalance
    }, this.props.backedCoins.find(a => a.symbol === (depositModalType === "bid" ? base.get("symbol") : quote.get("symbol"))))) : null, this.state.isConfirmBuyOrderModalVisible || this.state.isConfirmBuyOrderModalLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_24__["default"], {
      visible: this.state.isConfirmBuyOrderModalVisible,
      hideModal: this.hideConfirmBuyOrderModal,
      type: "buy",
      onForce: this._forceBuy.bind(this, "buy", buyFeeAsset, baseBalance, coreBalance),
      diff: buyDiff,
      hasOrders: combinedAsks.length > 0
    }) : null, this.state.isConfirmSellOrderModalVisible || this.state.isConfirmSellOrderModalLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_24__["default"], {
      visible: this.state.isConfirmSellOrderModalVisible,
      hideModal: this.hideConfirmSellOrderModal,
      type: "sell",
      onForce: this._forceSell.bind(this, "sell", sellFeeAsset, quoteBalance, coreBalance),
      diff: sellDiff,
      hasOrders: combinedBids.length > 0
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_PriceAlert__WEBPACK_IMPORTED_MODULE_33__["default"], {
      onSave: this.handlePriceAlertSave,
      rules: this.getPriceAlertRules(),
      latestPrice: latest && latest.getPrice(),
      quoteAsset: this.props.quoteAsset.get("id"),
      baseAsset: this.props.baseAsset.get("id"),
      visible: this.state.isPriceAlertModalVisible,
      showModal: this.showPriceAlertModal,
      hideModal: this.hidePriceAlertModal
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Exchange);

/***/ }),

/***/ 2668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2338);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(589);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(656);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2089);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2622);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2335);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1944);
/* harmony import */ var _Exchange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2669);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1962);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(437);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1963);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2339);
/* harmony import */ var components_Exchange_tradingViewClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2746);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2550);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















class ExchangeContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let symbols = this.props.match.params.marketID.toUpperCase().split("_");

    if (symbols[0] === symbols[1]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_14__["default"], {
        subtitle: "market_not_found_subtitle"
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(alt_container__WEBPACK_IMPORTED_MODULE_7__["default"], {
      stores: [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"], stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"], stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"], stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__["default"]],
      inject: {
        hasAnyPriceAlert: () => stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].hasAnyPriceAlert(symbols[0], symbols[1]),
        priceAlert: () => stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().priceAlert,
        locale: () => stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().currentLocale,
        lockedWalletState: () => {
          return stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().locked;
        },
        marketLimitOrders: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketLimitOrders;
        },
        marketCallOrders: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketCallOrders;
        },
        invertedCalls: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().invertedCalls;
        },
        marketSettleOrders: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketSettleOrders;
        },
        marketData: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketData;
        },
        totals: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().totals;
        },
        activeMarketHistory: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().activeMarketHistory;
        },
        bucketSize: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().bucketSize;
        },
        buckets: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().buckets;
        },
        lowestCallPrice: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().lowestCallPrice;
        },
        feedPrice: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().feedPrice;
        },
        currentAccount: () => {
          return stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().currentAccount;
        },
        myActiveAccounts: () => {
          return stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().myActiveAccounts;
        },
        viewSettings: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings;
        },
        settings: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().settings;
        },
        exchange: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().exchange;
        },
        starredMarkets: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().starredMarkets;
        },
        marketDirections: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().marketDirections;
        },
        marketStats: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketStats;
        },
        marketReady: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketReady;
        },
        backedCoins: () => {
          return stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().backedCoins.get("OPEN", []);
        },
        bridgeCoins: () => {
          return stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().bridgeCoins;
        },
        miniDepthChart: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings.get("miniDepthChart", true);
        },
        viewChat: () => {
          return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings.get("viewChat", true);
        },
        dataFeed: () => new components_Exchange_tradingViewClasses__WEBPACK_IMPORTED_MODULE_13__.DataFeed(),
        trackedGroupsConfig: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().trackedGroupsConfig;
        },
        currentGroupOrderLimit: () => {
          return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().currentGroupLimit;
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExchangeSubscriber, {
      history: this.props.history,
      location: this.props.location,
      quoteAsset: symbols[0],
      baseAsset: symbols[1]
    }));
  }

}

let emitter = (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_10__.EmitterInstance)();
let callListener, limitListener, newCallListener, feedUpdateListener, settleOrderListener;

class ExchangeSubscriber extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    currentAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAccount.isRequired,
    quoteAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired,
    baseAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired,
    coreAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired
  };
  static defaultProps = {
    currentAccount: "1.2.3",
    coreAsset: "1.3.0"
  };

  constructor(props) {
    super();
    this.state = {
      sub: null
    };
    this._subToMarket = this._subToMarket.bind(this);
  }

  UNSAFE_componentWillMount() {
    if (this.props.quoteAsset === null || this.props.baseAsset === null) {
      return;
    }

    if (this.props.quoteAsset.toJS && this.props.baseAsset.toJS) {
      this._subToMarket(this.props); // this._addMarket(this.props.quoteAsset.get("symbol"), this.props.baseAsset.get("symbol"));

    }

    emitter.on("cancel-order", limitListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].cancelLimitOrderSuccess);
    emitter.on("close-call", callListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].closeCallOrderSuccess);
    emitter.on("call-order-update", newCallListener = call_order => {
      let {
        asset_id: coBase
      } = call_order.call_price.base;
      let {
        asset_id: coQuote
      } = call_order.call_price.quote;
      let baseId = this.props.baseAsset.get("id"),
          quoteId = this.props.quoteAsset.get("id");

      if ((coBase === baseId || coBase === quoteId) && (coQuote === baseId || coQuote === quoteId)) {
        actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].callOrderUpdate(call_order);
      }
    });
    emitter.on("bitasset-update", feedUpdateListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].feedUpdate);
    emitter.on("settle-order-update", settleOrderListener = object => {
      let {
        isMarketAsset,
        marketAsset
      } = market_utils.isMarketAsset(this.props.quoteAsset, this.props.baseAsset);

      if (isMarketAsset && marketAsset.id === object.balance.asset_id) {
        actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].settleOrderUpdate(marketAsset.id);
      }
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.quoteAsset === null || nextProps.baseAsset === null) {
      return;
    }
    /* Prediction markets should only be shown in one direction, if the link goes to the wrong one we flip it */


    if (nextProps.baseAsset && nextProps.baseAsset.getIn(["bitasset", "is_prediction_market"])) {
      this.props.history.push(`/market/${nextProps.baseAsset.get("symbol")}_${nextProps.quoteAsset.get("symbol")}`);
    }

    if (nextProps.quoteAsset && nextProps.baseAsset) {
      if (!this.state.sub) {
        return this._subToMarket(nextProps);
      }
    }

    if (nextProps.quoteAsset.get("symbol") !== this.props.quoteAsset.get("symbol") || nextProps.baseAsset.get("symbol") !== this.props.baseAsset.get("symbol")) {
      let currentSub = this.state.sub.split("_");
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].unSubscribeMarket(currentSub[0], currentSub[1]).then(() => {
        this._subToMarket(nextProps);
      });
    }
  }

  componentWillUnmount() {
    let {
      quoteAsset,
      baseAsset
    } = this.props;

    if (quoteAsset === null || baseAsset === null) {
      return;
    }

    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].unSubscribeMarket(quoteAsset.get("id"), baseAsset.get("id"));

    if (emitter) {
      emitter.off("cancel-order", limitListener);
      emitter.off("close-call", callListener);
      emitter.off("call-order-update", newCallListener);
      emitter.off("bitasset-update", feedUpdateListener);
      emitter.off("settle-order-update", settleOrderListener);
    }
  }

  _subToMarket(props, newBucketSize, newGroupLimit) {
    let {
      quoteAsset,
      baseAsset,
      bucketSize,
      currentGroupOrderLimit
    } = props;

    if (newBucketSize) {
      bucketSize = newBucketSize;
    }

    if (newGroupLimit) {
      currentGroupOrderLimit = newGroupLimit;
    }

    if (quoteAsset.get("id") && baseAsset.get("id")) {
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].subscribeMarket.defer(baseAsset, quoteAsset, bucketSize, currentGroupOrderLimit);
      this.setState({
        sub: `${quoteAsset.get("id")}_${baseAsset.get("id")}`
      });
    }
  }

  render() {
    if (this.props.quoteAsset === null || this.props.baseAsset === null) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_14__["default"], {
      subtitle: "market_not_found_subtitle"
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Exchange__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, this.props, {
      sub: this.state.sub,
      subToMarket: this._subToMarket
    }));
  }

}

ExchangeSubscriber = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__["default"])(ExchangeSubscriber, {
  show_loader: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExchangeContainer);

/***/ }),

/***/ 2700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExchangeHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2097);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1825);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2088);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2701);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2339);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(657);
/* harmony import */ var _PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2703);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(437);
/* harmony import */ var _ExchangeHeaderCollateral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2704);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(637);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(621);
















class ExchangeHeader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();
    this.state = {
      isModalVisible: false,
      volumeShowQuote: true,
      selectedMarketPickerAsset: props.selectedMarketPickerAsset
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      selectedMarketPickerAsset: nextProps.selectedMarketPickerAsset
    });
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.marketReady) return false;
    return true;
  }

  _addMarket(quote, base) {
    let marketID = `${quote}_${base}`;

    if (!this.props.starredMarkets.has(marketID)) {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].addStarMarket(quote, base);
    } else {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].removeStarMarket(quote, base);
    }
  }

  changeVolumeBase() {
    this.setState({
      volumeShowQuote: !this.state.volumeShowQuote
    });
  }

  marketPicker(asset) {
    let {
      selectedMarketPickerAsset
    } = this.state;
    selectedMarketPickerAsset = !!selectedMarketPickerAsset && selectedMarketPickerAsset == asset ? null : asset;
    this.setState({
      selectedMarketPickerAsset
    });
    this.props.onToggleMarketPicker(selectedMarketPickerAsset);
  }

  _checkPotencialScamMarket(quote, base) {
    let coins = ["DONATE", "DEXBOT"];
    let nativeTokens = (0,_branding__WEBPACK_IMPORTED_MODULE_13__.get_allTokens)().nativeTokens;
    coins = coins.concat(nativeTokens); //1. RUDEX.X <=> RUDEX.X

    if (quote.indexOf("RUDEX.") !== -1 && base.indexOf("RUDEX.") !== -1) return false; //2. coins <=> coins

    if (coins.indexOf(quote) !== -1 && coins.indexOf(base) !== -1) return false; //3. RUDEX.X <=> coins

    if (quote.indexOf("RUDEX.") !== -1 && coins.indexOf(base) !== -1 || base.indexOf("RUDEX.") !== -1 && coins.indexOf(quote) !== -1) return false;
    return true;
  }

  render() {
    const {
      quoteAsset,
      baseAsset,
      starredMarkets,
      hasPrediction,
      feedPrice,
      showCallLimit,
      lowestCallPrice,
      marketReady,
      latestPrice,
      marketStats,
      account
    } = this.props;
    const baseSymbol = baseAsset.get("symbol");
    const quoteSymbol = quoteAsset.get("symbol"); // Favorite star

    const marketID = `${quoteSymbol}_${baseSymbol}`;
    const starClass = starredMarkets.has(marketID) ? "gold-star" : "grey-star"; // Market stats

    const dayChange = marketStats.get("change");
    const dayChangeClass = parseFloat(dayChange) === 0 || isNaN(dayChange) ? "" : parseFloat(dayChange) < 0 ? "negative" : "positive";
    const volumeBase = marketStats.get("volumeBase");
    const volumeQuote = marketStats.get("volumeQuote");
    const dayChangeWithSign = isNaN(dayChange) ? undefined : dayChange > 0 ? "+" + dayChange : dayChange;
    const volume24h = this.state.volumeShowQuote ? volumeQuote : volumeBase;
    const volume24hAsset = this.state.volumeShowQuote ? quoteAsset : baseAsset;
    let showCollateralRatio = false;
    const quoteId = quoteAsset.get("id");
    const baseId = baseAsset.get("id");
    let lookForBitAsset = quoteId === "1.3.0" ? baseId : baseId === "1.3.0" ? quoteId : null;

    if ((0,_branding__WEBPACK_IMPORTED_MODULE_13__.getGroupedMPAsRuDEX)().rudex.indexOf(quoteAsset.get("id"))) {
      lookForBitAsset = quoteAsset.get("id");
    }

    const possibleBitAsset = lookForBitAsset ? bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getAsset(lookForBitAsset) : null;
    const isBitAsset = possibleBitAsset ? !!possibleBitAsset.get("bitasset") : false;
    let collOrderObject = "";
    let settlePrice = null;
    let settlePriceTitle = "exchange.settle";
    let settlePriceTooltip = "tooltip.settle_price";

    if (isBitAsset) {
      if (account.toJS && account.has("call_orders")) {
        const call_orders = account.get("call_orders").toJS();

        for (let i = 0; i < call_orders.length; i++) {
          let callID = call_orders[i];
          let position = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getObject(callID);
          let debtAsset = position.getIn(["call_price", "quote", "asset_id"]);

          if (debtAsset === lookForBitAsset) {
            collOrderObject = callID;
            showCollateralRatio = true;
            break;
          }
        }
      }
      /* Settlment Offset */


      let settleAsset = baseId == "1.3.0" ? quoteAsset : quoteId == "1.3.0" ? baseAsset : quoteAsset; // globally settled

      if (possibleBitAsset.get("bitasset").get("settlement_fund") > 0) {
        settlePriceTitle = "exchange.global_settle";
        settlePriceTooltip = "tooltip.global_settle_price"; // if globally settled feed_price == settlement_price

        settlePrice = possibleBitAsset.get("bitasset").get("settlement_price").toJS(); // add precision

        if (settlePrice.base.asset_id == baseAsset.get("id")) {
          settlePrice.base.precision = baseAsset.get("precision");
          settlePrice.quote.precision = quoteAsset.get("precision");
        } else {
          settlePrice.quote.precision = baseAsset.get("precision");
          settlePrice.base.precision = quoteAsset.get("precision");
        }

        settlePrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_12__.Price({
          quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_12__.Asset({
            asset_id: settlePrice.quote.asset_id,
            precision: settlePrice.quote.precision,
            amount: settlePrice.quote.amount
          }),
          base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_12__.Asset({
            asset_id: settlePrice.base.asset_id,
            precision: settlePrice.base.precision,
            amount: settlePrice.base.amount
          })
        }).toReal();
        settlePrice = baseId == "1.3.0" ? 1 / settlePrice : settlePrice;
      } else if (settleAsset && feedPrice) {
        let offset_percent = settleAsset.getIn(["bitasset", "options"]).toJS().force_settlement_offset_percent;
        settlePrice = baseId == "1.3.0" ? feedPrice.toReal() / (1 + offset_percent / 10000) : feedPrice.toReal() * (1 + offset_percent / 10000);
      }
    }

    const translator = __webpack_require__(623);

    let isQuoteSelected = !!this.state.selectedMarketPickerAsset && this.state.selectedMarketPickerAsset == quoteSymbol;
    let isBaseSelected = !!this.state.selectedMarketPickerAsset && this.state.selectedMarketPickerAsset == baseSymbol;
    let PriceAlertBellClassName = this.props.hasAnyPriceAlert ? "exchange--price-alert--show-modal--active" : "";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block shrink no-padding overflow-visible top-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block overflow-visible"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        padding: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      replaceNoneToBts: false,
      maxWidth: 50,
      name: quoteAsset.get("symbol")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        padding: "10px"
      }
    }, !hasPrediction ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        padding: "0 5px",
        fontSize: this.props.tinyScreen ? "13px" : "18px",
        marginTop: "1px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      onClick: this.props.showPriceAlertModal,
      type: "bell",
      className: `exchange--price-alert--show-modal ${PriceAlertBellClassName}`,
      style: {
        paddingRight: "10px"
      },
      "data-intro": translator.translate("walkthrough.price_alerts")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onClick: this.marketPicker.bind(this, quoteSymbol),
      className: "underline",
      style: {
        cursor: "pointer",
        color: isQuoteSelected ? "#2196f3" : ""
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: quoteSymbol,
      replace: true,
      noTip: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        padding: "0 5px"
      }
    }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onClick: this.marketPicker.bind(this, baseSymbol),
      className: "underline",
      style: {
        cursor: "pointer",
        color: isBaseSelected ? "#2196f3" : ""
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: baseSymbol,
      replace: true,
      noTip: true
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "market-symbol"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, `${quoteSymbol} : ${baseSymbol}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "label-actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      component: "span",
      style: {
        padding: "5px 0 0 5px"
      },
      className: "stat-text",
      content: "exchange.trading_pair"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
      onClick: () => {
        actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].switchMarket();
      },
      to: `/market/${baseSymbol}_${quoteSymbol}`,
      "data-intro": translator.translate("walkthrough.switch_button")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "shuffle",
      name: "shuffle",
      title: "icons.shuffle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: () => {
        this._addMarket(this.props.quoteAsset.get("symbol"), this.props.baseAsset.get("symbol"));
      },
      "data-intro": translator.translate("walkthrough.favourite_button")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: starClass,
      name: "fi-star",
      title: "icons.fi_star.market"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical",
      style: {
        overflow: "visible"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block wrap market-stats-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "market-stats stats top-stats"
    }, latestPrice ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ignoreColorChange: true,
      ready: marketReady,
      price: latestPrice,
      quote: quoteAsset,
      base: baseAsset,
      market: marketID,
      content: "exchange.latest"
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "hide-order-1 stressed-stat daily_change " + dayChangeClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", {
      className: "value"
    }, dayChangeWithSign ? marketReady ? dayChangeWithSign : 0 : "-"), dayChangeWithSign && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " %")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      component: "div",
      className: "stat-text",
      content: "account.hour_24"
    })), volumeBase >= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ignoreColorChange: true,
      onClick: this.changeVolumeBase.bind(this),
      ready: marketReady,
      decimals: 0,
      volume: true,
      price: volume24h,
      className: "hide-order-2 clickable",
      base: volume24hAsset,
      market: marketID,
      content: "exchange.volume_24"
    }) : null, !hasPrediction && feedPrice ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ignoreColorChange: true,
      toolTip: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("tooltip.feed_price"),
      ready: marketReady,
      className: "hide-order-3",
      price: feedPrice.toReal(),
      quote: quoteAsset,
      base: baseAsset,
      market: marketID,
      content: "exchange.feed_price"
    }) : null, !hasPrediction && settlePrice ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ignoreColorChange: true,
      toolTip: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate(settlePriceTooltip),
      ready: marketReady,
      className: "hide-order-4",
      price: settlePrice,
      quote: quoteAsset,
      base: baseAsset,
      market: marketID,
      content: settlePriceTitle
    }) : null, showCollateralRatio ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExchangeHeaderCollateral__WEBPACK_IMPORTED_MODULE_10__["default"], {
      object: collOrderObject,
      account: account,
      className: "hide-order-1"
    }) : null, lowestCallPrice && showCallLimit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      toolTip: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("tooltip.call_limit"),
      ready: marketReady,
      className: "hide-order-5 is-call",
      price: lowestCallPrice,
      quote: quoteAsset,
      base: baseAsset,
      market: marketID,
      content: "explorer.block.call_limit"
    }) : null, feedPrice && showCallLimit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      toolTip: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("tooltip.margin_price"),
      ready: marketReady,
      className: "hide-order-6 is-call",
      price: feedPrice.getSqueezePrice({
        real: true
      }),
      quote: quoteAsset,
      base: baseAsset,
      market: marketID,
      content: "exchange.squeeze"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "market-stats stats top-stats",
      "data-position": "left",
      "data-step": "1",
      "data-intro": translator.translate("walkthrough.personalize")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "stressed-stat input clickable",
      style: {
        padding: "16px 16px 16px 0px"
      },
      onClick: this.props.onTogglePersonalize.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      type: "setting",
      style: {
        paddingRight: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      className: "hide-order-2",
      content: "exchange.settings.header.title"
    })))), this._checkPotencialScamMarket(quoteSymbol, baseSymbol) === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "potencial_scam_markets"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: "red"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("exchange.scam_alert.text1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("exchange.scam_alert.text2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: "red"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("exchange.scam_alert.text3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("exchange.scam_alert.text4"))) : null)));
  }

}

/***/ }),

/***/ 2704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(607);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1962);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1963);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(618);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











class MarginPosition extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    debtAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    collateralAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired
  };

  _getFeedPrice() {
    if (!this.props) {
      return 1;
    }

    return 1 / common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_price(_lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].extractRawFeedPrice(this.props.debtAsset).getIn(["quote", "amount"]), this.props.collateralAsset, _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].extractRawFeedPrice(this.props.debtAsset).getIn(["base", "amount"]), this.props.debtAsset);
  }

  _getCollateralRatio() {
    const co = this.props.object.toJS();
    const c = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.collateral, this.props.collateralAsset);
    const d = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.debt, this.props.debtAsset);
    return c / (d / this._getFeedPrice());
  }

  _getMR() {
    return this.props.debtAsset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;
  }

  _getStatusClass() {
    let cr = this._getCollateralRatio();

    const mr = this._getMR();

    if (isNaN(cr)) return null;

    if (cr < mr) {
      return "danger";
    } else if (cr < mr + 0.5) {
      return "warning";
    } else {
      return "";
    }
  }

  _getCRTip() {
    const statusClass = this._getStatusClass();

    const mr = this._getMR();

    if (!statusClass || statusClass === "") return null;

    if (statusClass === "danger") {
      return counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.cr_danger", {
        mr
      });
    } else if (statusClass === "warning") {
      return counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("tooltip.cr_warning", {
        mr
      });
    } else {
      return null;
    }
  }

  render() {
    let {
      object
    } = this.props;
    const co = object.toJS();

    const cr = this._getCollateralRatio();

    const d = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.debt, this.props.debtAsset);

    const statusClass = this._getStatusClass();

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
      placement: "bottom",
      title: this._getCRTip()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("stressed-stat", this.props.className),
      onClick: this.props.onClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("value stat-primary", statusClass)
    }, common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].format_number(cr, 2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "stat-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_6___default()), {
      content: "header.collateral_ratio"
    }))));
  }

}

MarginPosition = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(MarginPosition);

class ExchangeHeaderCollateral extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    object: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject.isRequired
  };

  render() {
    let {
      object,
      account
    } = this.props;
    let debtAsset = object.getIn(["call_price", "quote", "asset_id"]);
    let collateralAsset = object.getIn(["call_price", "base", "asset_id"]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MarginPosition, _extends({
      debtAsset: debtAsset,
      collateralAsset: collateralAsset,
      account: account
    }, this.props));
  }

}

ExchangeHeaderCollateral = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(ExchangeHeaderCollateral);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExchangeHeaderCollateral);

/***/ }),

/***/ 2727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2670);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(657);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(656);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1816);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(437);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2341);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(637);
/* harmony import */ var _View_MarketHistoryView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2728);








const {
  operations
} = bitsharesjs__WEBPACK_IMPORTED_MODULE_6__.ChainTypes;




class MarketHistory extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();
    this.state = {
      activeTab: props.viewSettings.get("historyTab", "history"),
      rowCount: 20,
      showAll: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !immutable__WEBPACK_IMPORTED_MODULE_1___default().is(nextProps.history, this.props.history) || nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol || nextProps.className !== this.props.className || nextProps.activeTab !== this.props.activeTab || nextState.activeTab !== this.state.activeTab || nextState.showAll !== this.state.showAll || nextProps.currentAccount !== this.props.currentAccount || nextProps.isPanelActive !== this.props.isPanelActive || nextProps.hideScrollbars !== this.props.hideScrollbars;
  }

  componentDidMount() {
    if (!this.props.hideScrollbars) {
      this.updateContainer(1);
    }
  }

  componentDidUpdate(prevState) {
    let {
      hideScrollbars
    } = this.props;
    let {
      showAll
    } = this.state;

    if (prevState.showAll != showAll) {
      if (showAll && !hideScrollbars) {
        this.updateContainer(2);
      } else if (!showAll && !hideScrollbars) {
        this.updateContainer(3);
      } else if (showAll && hideScrollbars) {
        this.updateContainer(1);
      } else {
        this.updateContainer(0);
      }
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.activeTab !== this.props.activeTab) {
      this.changeTab(nextProps.activeTab);
    } // Reset on Market Switch


    if (nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol) {
      this.setState({
        showAll: false
      });
      this.updateContainer(0);

      if (!this.props.hideScrollbars) {
        this.updateContainer(1);
      }
    } // Reset on hideScrollbars switch


    if (nextProps.hideScrollbars !== this.props.hideScrollbars) {
      this.updateContainer(0);

      if (!nextProps.hideScrollbars) {
        this.updateContainer(1);
      }
    }
  }
  /***
   * Update PS Container
   * type:int [0:destroy, 1:init, 2:update, 3:update w/ scrollTop] (default: 2)
   */


  updateContainer(type = 2) {
    let containerNode = this.refs.view.refs.history;
    let containerTransition = this.refs.view.refs.historyTransition;
    if (!containerNode) return;

    if (type == 0) {
      containerNode.scrollTop = 0;
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default().destroy(containerNode);
    } else if (type == 1) {
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default().initialize(containerNode);
      this.updateContainer(3);
    } else if (type == 2) {
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default().update(containerNode);
    } else if (type == 3) {
      containerNode.scrollTop = 0;
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default().update(containerNode);
    }

    if (containerTransition) {
      containerTransition.resetAnimation();
    }
  }

  onSetShowAll() {
    this.setState({
      showAll: !this.state.showAll
    });
  }

  changeTab(tab) {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeViewSetting({
      historyTab: tab
    });
    this.setState({
      activeTab: tab
    }); // Ensure that focus goes back to top of scrollable container when tab is changed

    this.updateContainer(3);
    setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"].rebuild, 1000);
  }

  render() {
    let {
      history,
      myHistory,
      base,
      quote,
      baseSymbol,
      quoteSymbol,
      isNullAccount,
      activeTab
    } = this.props;
    let {
      rowCount,
      showAll
    } = this.state;
    let historyRows = null;

    if (isNullAccount) {
      activeTab = "history";
    }

    if (activeTab === "my_history" && myHistory && myHistory.size) {
      // User History
      const assets = {
        [quote.get("id")]: {
          precision: quote.get("precision")
        },
        [base.get("id")]: {
          precision: base.get("precision")
        }
      };
      historyRows = myHistory.filter(a => {
        let opType = a.getIn(["op", 0]);
        return opType === operations.fill_order;
      }).filter(a => {
        let quoteID = quote.get("id");
        let baseID = base.get("id");
        let pays = a.getIn(["op", 1, "pays", "asset_id"]);
        let receives = a.getIn(["op", 1, "receives", "asset_id"]);
        let hasQuote = quoteID === pays || quoteID === receives;
        let hasBase = baseID === pays || baseID === receives;
        return hasQuote && hasBase;
      }).sort((a, b) => {
        return b.get("block_num") - a.get("block_num");
      }).map(trx => {
        let fill = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__.FillOrder(trx.toJS(), assets, quote.get("id"));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View_MarketHistoryView__WEBPACK_IMPORTED_MODULE_9__.MarketHistoryViewRow, {
          key: fill.id,
          fill: fill,
          base: base,
          quote: quote
        });
      }).toArray();
    } else if (history && history.size) {
      // Market History
      historyRows = this.props.history.take(100).map(fill => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View_MarketHistoryView__WEBPACK_IMPORTED_MODULE_9__.MarketHistoryViewRow, {
          key: fill.id,
          fill: fill,
          base: base,
          quote: quote
        });
      }).toArray();
    }

    let totalRows = historyRows ? historyRows.length : null;

    if (!showAll && historyRows) {
      historyRows.splice(rowCount, historyRows.length);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View_MarketHistoryView__WEBPACK_IMPORTED_MODULE_9__.MarketHistoryView, {
      ref: "view",
      className: this.props.className,
      innerClass: this.props.innerClass,
      innerStyle: this.props.innerStyle,
      noHeader: this.props.noHeader,
      headerStyle: this.props.headerStyle,
      activeTab: activeTab,
      quoteSymbol: quoteSymbol,
      baseSymbol: baseSymbol,
      tinyScreen: this.props.tinyScreen,
      historyRows: historyRows,
      totalRows: totalRows,
      showAll: showAll,
      onSetShowAll: this.onSetShowAll.bind(this)
    });
  }

}

MarketHistory.defaultProps = {
  history: []
};
MarketHistory.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_5__.connect)(MarketHistory, {
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

/***/ 2739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2737);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1816);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2097);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2348);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(607);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2347);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2088);
/* harmony import */ var _MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2740);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















class MarketListItem extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  static propTypes = {
    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
    quoteSymbol: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
    baseSymbol: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
    market: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().array),
    marketPickerAsset: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)
  };

  onKeyPress(linkTo, e) {
    if (e.key == "Enter") {
      this.props.history.push(linkTo);
    }
  }

  render() {
    const {
      quoteSymbol,
      baseSymbol,
      market,
      marketPickerAsset
    } = this.props;
    const {
      onClose
    } = this.props;
    const marketSymbol = market[1]["quote"];
    const linkTo = quoteSymbol == marketPickerAsset ? `/market/${marketSymbol}_${baseSymbol}` : `/market/${quoteSymbol}_${marketSymbol}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("li", {
      key: market[0],
      style: {
        height: 40
      },
      onKeyPress: this.onKeyPress.bind(this, linkTo),
      tabIndex: this.props.tabIndex
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
      style: {
        display: "flex"
      },
      onClick: onClose,
      to: linkTo
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        flex: 2
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: market[1]["quote"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        flex: 3
      }
    }, market[1].issuer)));
  }

}

class MarketPickerWrapper extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super();
    this.state = this.initialState();
    this.getAssetList = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_13__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_5__["default"].getAssetList.defer, 150);
    this.setState = this.setState.bind(this);
    this._checkAndUpdateMarketList = this._checkAndUpdateMarketList.bind(this);
  }

  initialState() {
    return {
      marketsList: [],
      lookupQuote: null,
      inputValue: ""
    };
  }

  componentDidMount() {
    this.refs.marketPicker_input.focus();
  }

  componentDidUpdate() {
    this.refs.marketPicker_input.focus();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.marketPickerAsset !== this.props.marketPickerAsset) this.setState(this.initialState());
    if (nextProps.searchAssets !== this.props.searchAssets) (0,_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_10__.assetFilter)({
      searchAssets: this.props.searchAssets,
      marketPickerAsset: this.props.marketPickerAsset,
      baseAsset: this.props.baseAsset,
      quoteAsset: this.props.quoteAsset
    }, {
      inputValue: this.state.inputValue,
      lookupQuote: this.state.lookupQuote
    }, this.setState, this._checkAndUpdateMarketList);
  }

  shouldComponentUpdate(np, ns) {
    return np.visible !== this.props.visible || np.marketPickerAsset !== this.props.marketPickerAsset || np.searchAssets !== this.props.searchAssets || ns.marketsList !== this.state.marketsList || !common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(ns, this.state);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  _onInputName(getBackedAssets, e) {
    let toFind = e.target.value.trim().toUpperCase();
    let isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainValidation.is_valid_symbol_error(toFind, true);

    if (!isValidName) {
      /* Don't lookup invalid asset names */
      this.setState({
        inputValue: toFind,
        activeSearch: false,
        marketsList: []
      });
      return;
    } else {
      this.setState({
        inputValue: toFind,
        activeSearch: true,
        marketsList: []
      });
    }

    if (this.state.inputValue !== toFind) {
      this.timer && clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      (0,_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_10__.lookupAssets)(toFind, getBackedAssets, this.getAssetList, this.setState);
    }, 1500);
  }

  _checkAndUpdateMarketList(marketsList) {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      let needFetchIssuer = 0;

      for (let [, market] of marketsList) {
        if (!market.issuer) {
          market.issuer = (0,_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_10__.fetchIssuerName)(market.issuerId);
          if (!market.issuer) needFetchIssuer++;
        }
      }

      if (needFetchIssuer) return;
      clearInterval(this.intervalId);
      this.setState({
        marketsList,
        activeSearch: false
      });
    }, 300);
  }

  renderSearchBar() {
    const {
      inputValue
    } = this.state;
    const labelKey = "exchange.market_picker.find_by_asset";
    const label = counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate(labelKey).toUpperCase();
    const placeHolderKey = "exchange.market_picker.search";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      id: "filter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Form.Item, {
      label: label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Input, {
      type: "text",
      ref: "marketPicker_input",
      value: inputValue,
      onChange: this._onInputName.bind(this, true),
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate(placeHolderKey),
      maxLength: 16,
      tabIndex: 2
    })));
  }

  renderResults() {
    const {
      marketsList
    } = this.state;
    const {
      activeSearch,
      inputValue
    } = this.state;
    const loading = activeSearch && inputValue.length != 0;
    let {
      marketPickerAsset
    } = this.props;
    let baseSymbol = this.props.baseAsset.get("symbol");
    let quoteSymbol = this.props.quoteAsset.get("symbol");
    if (!loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "results"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("ul", {
      style: {
        marginLeft: 0,
        minHeight: "20px"
      }
    }, marketsList.map((market, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(MarketListItem, {
        key: index,
        tabIndex: index + 100,
        baseSymbol: baseSymbol,
        quoteSymbol: quoteSymbol,
        market: market,
        marketPickerAsset: marketPickerAsset,
        history: this.props.history,
        onClose: this.props.onClose.bind(this)
      });
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Icon, {
      style: {
        marginLeft: "8px"
      },
      type: "loading",
      theme: "outlined"
    });
  }

  render() {
    const {
      marketPickerAsset
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "marketPicker"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "marketPicker__subHeader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.market_picker.sub_title"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
      to: `/asset/${marketPickerAsset}`,
      style: {
        cursor: "pointer",
        color: "lightblue !important"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: marketPickerAsset
    }))), this.renderSearchBar(), this.renderResults());
  }

}

class MarketPicker extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      smallScreen: false
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({
      smallScreen: window.innerWidth <= 800
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.quoteAsset.get("id") !== nextProps.quoteAsset.get("id") || this.props.baseAsset.get("id") !== nextProps.baseAsset.get("id")) {
      this.onClose();
    }
  }

  show() {
    this.props.showModal();
  }

  onClose() {
    this.props.onToggleMarketPicker(null);
    this.props.hideModal();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Modal, _extends({
      title: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("exchange.market_picker.title"),
      closable: false,
      visible: this.props.visible,
      id: this.props.modalId,
      overlay: true,
      onCancel: this.onClose.bind(this),
      noHeaderContainer: true,
      footer: null,
      ref: this.props.modalId
    }, this.props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(MarketPickerWrapper, _extends({
      onClose: this.onClose.bind(this)
    }, this.props)));
  }

}

MarketPicker = (0,alt_react__WEBPACK_IMPORTED_MODULE_0__.connect)(MarketPicker, {
  listenTo() {
    return [stores_AssetStore__WEBPACK_IMPORTED_MODULE_7__["default"]];
  },

  getProps() {
    return {
      searchAssets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().assets,
      assetsLoading: stores_AssetStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().assetsLoading
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketPicker);

/***/ }),

/***/ 2705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarketOrders": () => (/* binding */ MarketOrders)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OpenSettleOrders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2706);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2339);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2708);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(657);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(437);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(637);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2341);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _View_MarketOrdersView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2719);














class MarketOrdersRow extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.order.for_sale !== this.props.order.for_sale || nextProps.order.id !== this.props.order.id || nextProps.quote !== this.props.quote || nextProps.base !== this.props.base || nextProps.order.market_base !== this.props.order.market_base || nextProps.selected !== this.props.selected;
  }

  render() {
    let {
      base,
      quote,
      order,
      selected
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View_MarketOrdersView__WEBPACK_IMPORTED_MODULE_11__.MarketOrdersRowView, {
      key: order.id,
      order: order,
      selected: selected,
      base: base,
      quote: quote,
      onCheckCancel: this.props.onCheckCancel.bind(this)
    });
  }

}

class MarketOrders extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();
    this.state = {
      activeTab: props.activeTab,
      rowCount: 20,
      showAll: false,
      selectedOrders: []
    };
    this._getOrders = this._getOrders.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol || nextProps.className !== this.props.className || nextProps.activeTab !== this.props.activeTab || nextState.activeTab !== this.state.activeTab || nextState.showAll !== this.state.showAll || nextProps.currentAccount !== this.props.currentAccount || nextState.selectedOrders !== this.state.selectedOrders || nextProps.settleOrders !== this.props.settleOrders;
  }

  componentDidMount() {
    if (!this.props.hideScrollbars) {
      this.updateContainer(1);
    }
  }

  componentDidUpdate(prevState) {
    let {
      hideScrollbars
    } = this.props;
    let {
      showAll
    } = this.state;

    if (prevState.showAll != showAll) {
      if (showAll && !hideScrollbars) {
        this.updateContainer(2);
      } else if (!showAll && !hideScrollbars) {
        this.updateContainer(3);
      } else if (showAll && hideScrollbars) {
        this.updateContainer(1);
      } else {
        this.updateContainer(0);
      }
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.activeTab !== this.state.activeTab) {
      this.changeTab(nextProps.activeTab);
    } // Reset on Market Switch


    if (nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol) {
      this.setState({
        showAll: false
      });
      this.updateContainer(0);

      if (!this.props.hideScrollbars) {
        this.updateContainer(1);
      }
    } // Reset on hideScrollbars switch


    if (nextProps.hideScrollbars !== this.props.hideScrollbars) {
      this.updateContainer(0);

      if (!nextProps.hideScrollbars) {
        this.updateContainer(1);
      }
    }
  }
  /***
   * Update PS Container
   * type:int [0:destroy, 1:init, 2:update, 3:update w/ scrollTop] (default: 2)
   */


  updateContainer(type = 2) {
    let containerNode = this.refs.view.refs.container;
    let containerTransition = this.refs.contentTransition;
    if (!containerNode) return;

    if (type == 0) {
      containerNode.scrollTop = 0;
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default().destroy(containerNode);
    } else if (type == 1) {
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default().initialize(containerNode);
      this.updateContainer(3);
    } else if (type == 2) {
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default().update(containerNode);
    } else if (type == 3) {
      containerNode.scrollTop = 0;
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default().update(containerNode);
    }

    if (containerTransition) {
      containerTransition.resetAnimation();
    }
  }

  _onSetShowAll() {
    this.setState({
      showAll: !this.state.showAll
    });
  }

  changeTab(tab) {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeViewSetting({
      ordersTab: tab
    });
    this.setState({
      activeTab: tab
    }); // Ensure that focus goes back to top of scrollable container when tab is changed

    this.updateContainer(3);
    setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_9__["default"].rebuild, 1000);
  }

  onCheckCancel(orderId, evt) {
    let {
      selectedOrders
    } = this.state;
    let checked = evt.target.checked;

    if (checked) {
      this.setState({
        selectedOrders: selectedOrders.concat([orderId])
      });
    } else {
      let index = selectedOrders.indexOf(orderId);

      if (index > -1) {
        this.setState({
          selectedOrders: selectedOrders.slice(0, index).concat(selectedOrders.slice(index + 1))
        });
      }
    }
  }

  cancelSelected() {
    this._cancelLimitOrders.call(this);
  }

  resetSelected() {
    this.setState({
      selectedOrders: []
    });
  }

  onCancelToggle(evt) {
    const orders = this._getOrders();

    let selectedOrders = [];
    orders.forEach(order => {
      selectedOrders.push(order.id);
    });

    if (evt.target.checked) {
      this.setState({
        selectedOrders: selectedOrders
      });
    } else {
      this.resetSelected();
    }
  }

  _getSelectedOrders(keys) {
    let orders = this.props.currentAccount.get("orders").toArray().filter(item => keys.indexOf(item) != -1);
    return (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.FetchChain)("getObject", orders);
  }

  _cancelLimitOrders() {
    this._getSelectedOrders(this.state.selectedOrders).then(orders => {
      let fallbackFeeAssets = orders.toJS().map(item => item.sell_price.base.asset_id);
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].cancelLimitOrders(this.props.currentAccount.get("id"), this.state.selectedOrders, fallbackFeeAssets).then(() => {
        this.resetSelected();
      }).catch(err => {
        console.log("cancel orders error:", err);
      });
    });
  }

  _getOrders() {
    const {
      currentAccount,
      base,
      quote,
      feedPrice
    } = this.props;
    const orders = currentAccount.get("orders"),
          call_orders = currentAccount.get("call_orders");
    const baseID = base.get("id"),
          quoteID = quote.get("id");
    const assets = {
      [base.get("id")]: {
        precision: base.get("precision")
      },
      [quote.get("id")]: {
        precision: quote.get("precision")
      }
    };
    let limitOrders = orders.toArray().map(order => {
      let o = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getObject(order);
      if (!o) return null;
      let sellBase = o.getIn(["sell_price", "base", "asset_id"]),
          sellQuote = o.getIn(["sell_price", "quote", "asset_id"]);

      if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
        return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__.LimitOrder(o.toJS(), assets, quote.get("id"));
      }
    }).filter(a => !!a);
    let callOrders = call_orders.toArray().map(order => {
      try {
        let o = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getObject(order);
        if (!o) return null;
        let sellBase = o.getIn(["call_price", "base", "asset_id"]),
            sellQuote = o.getIn(["call_price", "quote", "asset_id"]);

        if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
          return feedPrice ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__.CallOrder(o.toJS(), assets, quote.get("id"), feedPrice) : null;
        }
      } catch (e) {
        return null;
      }
    }).filter(a => !!a).filter(a => {
      try {
        return a.isMarginCalled();
      } catch (err) {
        return false;
      }
    });
    return limitOrders.concat(callOrders);
  }

  render() {
    let {
      base,
      quote,
      quoteSymbol,
      baseSymbol,
      settleOrders
    } = this.props;
    let {
      activeTab,
      showAll,
      rowCount,
      selectedOrders
    } = this.state;
    if (!base || !quote) return null;
    let contentContainer;
    let footerContainer;
    /* Users Open Orders Tab (default) */

    let totalRows = 0; // User Orders

    if (!activeTab || activeTab == "my_orders") {
      const orders = this._getOrders();

      let bids = orders.filter(a => {
        return a.isBid();
      }).sort((a, b) => {
        return b.getPrice() - a.getPrice();
      }).map(order => {
        let price = order.getPrice();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MarketOrdersRow, {
          price: price,
          key: order.id,
          order: order,
          base: base,
          quote: quote,
          selected: this.state.selectedOrders.length > 0 && this.state.selectedOrders.includes(order.id),
          onCancel: this.props.onCancel.bind(this, order.id),
          onCheckCancel: this.onCheckCancel.bind(this, order.id)
        });
      });
      let asks = orders.filter(a => {
        return !a.isBid();
      }).sort((a, b) => {
        return a.getPrice() - b.getPrice();
      }).map(order => {
        let price = order.getPrice();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MarketOrdersRow, {
          price: price,
          key: order.id,
          order: order,
          base: base,
          quote: quote,
          selected: this.state.selectedOrders.length > 0 && this.state.selectedOrders.includes(order.id),
          onCancel: this.props.onCancel.bind(this, order.id),
          onCheckCancel: this.onCheckCancel.bind(this, order.id)
        });
      });
      let rows = [];

      if (asks.length) {
        rows = rows.concat(asks);
      }

      if (bids.length) {
        rows = rows.concat(bids);
      }

      rows.sort((a, b) => {
        return a.props.price - b.props.price;
      });
      totalRows = rows.length;

      if (totalRows > 0 && !showAll) {
        rows.splice(rowCount, rows.length);
      }

      let emptyRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        style: {
          textAlign: "center",
          lineHeight: 4,
          fontStyle: "italic"
        },
        colSpan: "5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "account.no_orders"
      })));
      let cancelOrderButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          display: "grid"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
        onClick: this.cancelSelected.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "exchange.cancel_selected_orders"
      })));
      contentContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
        ref: "contentTransition",
        component: "tbody",
        transitionName: "newrow"
      }, rows.length ? rows : emptyRow);
      footerContainer = totalRows > 11 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "orderbook-showall"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        onClick: this._onSetShowAll.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: showAll ? "exchange.hide" : "exchange.show_all_orders",
        rowcount: totalRows
      }))), selectedOrders.length > 0 ? cancelOrderButton : null) : selectedOrders.length > 0 ? cancelOrderButton : null;
    } // Open Settle Orders


    if (activeTab && activeTab == "open_settlement") {
      totalRows = settleOrders.length;

      if (totalRows > 0 && !showAll) {
        settleOrders.splice(rowCount, settleOrders.length);
      }

      contentContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OpenSettleOrders__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: "settle_orders",
        orders: settleOrders,
        base: base,
        quote: quote,
        baseSymbol: baseSymbol,
        quoteSymbol: quoteSymbol
      });
      footerContainer = totalRows > 11 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "orderbook-showall"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        onClick: this._onSetShowAll.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: showAll ? "exchange.hide" : "exchange.show_all_orders",
        rowcount: totalRows
      })));
    }

    let isSelected = this.state.selectedOrders.length > 0 && this.state.selectedOrders.length == totalRows;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View_MarketOrdersView__WEBPACK_IMPORTED_MODULE_11__.MarketsOrderView, {
      ref: "view" // Styles and Classes
      ,
      style: this.props.style,
      className: this.props.className,
      innerClass: this.props.innerClass,
      innerStyle: this.props.innerStyle,
      headerStyle: this.props.headerStyle // Bools
      ,
      noHeader: this.props.noHeader,
      isSelected: isSelected,
      tinyScreen: this.props.tinyScreen // Strings
      ,
      activeTab: activeTab,
      baseSymbol: baseSymbol,
      quoteSymbol: quoteSymbol // Containers
      ,
      contentContainer: contentContainer,
      footerContainer: footerContainer // Functions
      ,
      onCancelToggle: this.onCancelToggle.bind(this)
    });
  }

}

MarketOrders.defaultProps = {
  base: {},
  quote: {},
  orders: {},
  quoteSymbol: "",
  baseSymbol: ""
};
MarketOrders.propTypes = {
  base: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object.isRequired),
  quote: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object.isRequired),
  orders: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object.isRequired),
  quoteSymbol: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string.isRequired),
  baseSymbol: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string.isRequired)
};


/***/ }),

/***/ 2706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(607);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2088);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2707);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2708);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__);










class TableHeader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      baseSymbol,
      quoteSymbol
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "exchange.price"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), baseSymbol ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "header-sub-title"
    }, "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: baseSymbol
    }), "/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: quoteSymbol
    }), ")") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "transfer.amount"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), quoteSymbol ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "header-sub-title"
    }, "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: quoteSymbol
    }), ")") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "transaction.settlement_date"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        visibility: "hidden"
      },
      className: "header-sub-title"
    }, "d"))));
  }

}

TableHeader.defaultProps = {
  quoteSymbol: null,
  baseSymbol: null
};

class SettleOrderRow extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      base,
      quote,
      order,
      showSymbols
    } = this.props;
    let price = base.get("id") == "1.3.0" ? order.getPrice() / (1 + order.offset_percent / 10000) : order.getPrice() * (1 + order.offset_percent / 10000);
    let amountSymbol = showSymbols ? " " + quote.get("symbol") : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: "text-center",
      style: {
        width: "6%"
      }
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].format_number(price, quote.get("precision")), " ", amountSymbol), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].format_number(order[!order.isBid() ? "amountForSale" : "amountToReceive"]().getAmount({
      real: true
    }), quote.get("precision"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].format_number(order[!order.isBid() ? "amountToReceive" : "amountForSale"]().getAmount({
      real: true
    }), base.get("precision"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
      title: new Date(order.settlement_date).toString()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: "right",
        whiteSpace: "nowrap"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().localize(new Date(order.settlement_date), {
      type: "date",
      format: browser_locale__WEBPACK_IMPORTED_MODULE_5___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history"
    })))));
  }

}

SettleOrderRow.defaultProps = {
  showSymbols: false,
  invert: false
};

class OpenSettleOrders extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.currentAccount !== this.props.currentAccount || nextProps.orders !== this.props.orders;
  }

  render() {
    let {
      orders,
      base,
      quote
    } = this.props;
    let activeOrders = null;
    const emptyRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: "center",
        lineHeight: 4,
        fontStyle: "italic"
      },
      colSpan: "5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.no_orders"
    }))));

    if (orders.size > 0 && base && quote) {
      activeOrders = orders.sort((a, b) => {
        return a.isBefore(b) ? -1 : 1;
      }).map(order => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SettleOrderRow, {
          key: order.id,
          order: order,
          base: base,
          quote: quote
        });
      }).toArray();
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ref: "contentTransition",
      component: "tbody",
      transitionName: "newrow"
    }, activeOrders ? activeOrders : emptyRow);
  }

}

OpenSettleOrders.defaultProps = {
  base: {},
  quote: {},
  orders: {},
  quoteSymbol: "",
  baseSymbol: ""
};
OpenSettleOrders.propTypes = {
  base: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object.isRequired),
  quote: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object.isRequired),
  orders: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object.isRequired),
  quoteSymbol: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string.isRequired),
  baseSymbol: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenSettleOrders);

/***/ }),

/***/ 2720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderBook": () => (/* binding */ OrderBook),
/* harmony export */   "GroupOrderLimitSelector": () => (/* binding */ GroupOrderLimitSelector)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2721);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2670);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(607);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(657);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2692);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2708);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2088);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1825);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(431);















/**
 * @array: orderRows
 * @bool: noOrders
 * @bool: isBid
 */

class OrderRows extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  static propTypes = {
    orderRows: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().array.isRequired),
    noOrders: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool.isRequired),
    isBid: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool.isRequired)
  };

  render() {
    let {
      orderRows,
      noOrders,
      isBid,
      id
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: id,
      ref: isBid ? "bidTransition" : "askTransaction",
      component: null,
      transitionName: "newrow"
    }, orderRows.length > 0 ? orderRows : noOrders || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "sticky-table-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      className: "cell no-orders",
      colSpan: "3"
    }, isBid ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.no_bids"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.no_asks"
    }))));
  }

}

class OrderBookRowVertical extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  shouldComponentUpdate(np) {
    if (np.order.market_base !== this.props.order.market_base) return false;
    return np.order.ne(this.props.order) || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount || np.isPanelActive !== this.props.isPanelActive || np.horizontal !== this.props.horizontal;
  }

  render() {
    let {
      order,
      quote,
      base,
      final
    } = this.props;
    const isBid = order.isBid();
    const isCall = order.isCall();
    let integerClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";
    let price = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      price: order.getPrice(),
      quote: quote,
      base: base
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Row, {
      onClick: this.props.onClick,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("sticky-table-row order-row", {
        "final-row": final
      }, {
        "my-order": order.isMine(this.props.currentAccount)
      }, "clickable")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
      className: "cell left"
    }, common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({
      real: true
    }), base.get("precision"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
      className: "cell"
    }, common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({
      real: true
    }), quote.get("precision"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
      className: `cell ${integerClass} right`
    }, price));
  }

}

const elemHeight = elem => elem ? elem.getBoundingClientRect().height : 0;

class OrderBookRowHorizontal extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  shouldComponentUpdate(np) {
    return np.order.ne(this.props.order) || np.position !== this.props.position || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount || np.quoteTotal !== this.props.quoteTotal;
  }

  render() {
    let {
      order,
      quote,
      base,
      position,
      quoteTotal
    } = this.props;
    const isBid = order.isBid();
    const isCall = order.isCall();
    let integerClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";
    let price = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      price: order.getPrice(),
      quote: quote,
      base: base
    });
    let amount = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order.amountToReceive().getAmount({
      real: true
    }), quote.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order.amountForSale().getAmount({
      real: true
    }), quote.get("precision"));
    let value = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order.amountForSale().getAmount({
      real: true
    }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order.amountToReceive().getAmount({
      real: true
    }), base.get("precision"));
    const totalValueBids = quoteTotal ? order.totalToReceive() : order.totalForSale();
    const totalValueAsks = quoteTotal ? order.totalForSale() : order.totalToReceive();
    const totalAsset = quoteTotal ? quote : base;
    const total = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(totalValueBids.getAmount({
      real: true
    }), totalAsset.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(totalValueAsks.getAmount({
      real: true
    }), totalAsset.get("precision"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", {
      onClick: this.props.onClick,
      className: order.isMine(this.props.currentAccount) ? "my-order" : ""
    }, position === "left" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      className: "column-hide-xs"
    }, total) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        width: "25%"
      },
      className: integerClass
    }, price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", null, position === "left" ? value : amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", null, position === "left" ? amount : value), position === "right" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      className: "column-hide-xs"
    }, total) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        width: "25%"
      },
      className: integerClass
    }, price));
  }

}

class GroupedOrderBookRowVertical extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  shouldComponentUpdate(np) {
    if (np.order.market_base !== this.props.order.market_base) return false;
    return np.order.ne(this.props.order) || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount;
  }

  render() {
    let {
      order,
      quote,
      base,
      final
    } = this.props;
    const isBid = order.isBid();
    let integerClass = isBid ? "orderHistoryBid" : "orderHistoryAsk";
    let price = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      price: order.getPrice(),
      quote: quote,
      base: base
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Row, {
      onClick: this.props.onClick,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("sticky-table-row order-row", {
        "final-row": final
      }, "clickable")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
      className: "cell left"
    }, common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({
      real: true
    }), base.get("precision"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
      className: "cell"
    }, common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({
      real: true
    }), quote.get("precision"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
      className: `cell ${integerClass} right`
    }, price));
  }

}

class GroupedOrderBookRowHorizontal extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  shouldComponentUpdate(np) {
    return np.order.ne(this.props.order) || np.position !== this.props.position || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount || np.quoteTotal !== this.props.quoteTotal;
  }

  render() {
    let {
      order,
      quote,
      base,
      position,
      quoteTotal
    } = this.props;
    const isBid = order.isBid();
    let integerClass = isBid ? "orderHistoryBid" : "orderHistoryAsk";
    let price = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      price: order.getPrice(),
      quote: quote,
      base: base
    });
    let amount = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order.amountToReceive().getAmount({
      real: true
    }), quote.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order.amountForSale().getAmount({
      real: true
    }), quote.get("precision"));
    let value = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order.amountForSale().getAmount({
      real: true
    }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(order.amountToReceive().getAmount({
      real: true
    }), base.get("precision"));
    const totalValueBids = quoteTotal ? order.totalToReceive() : order.totalForSale();
    const totalValueAsks = quoteTotal ? order.totalForSale() : order.totalToReceive();
    const totalAsset = quoteTotal ? quote : base;
    const total = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(totalValueBids.getAmount({
      real: true
    }), totalAsset.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(totalValueAsks.getAmount({
      real: true
    }), totalAsset.get("precision"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", {
      onClick: this.props.onClick
    }, position === "left" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      className: "column-hide-xs"
    }, total) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        width: "25%"
      },
      className: integerClass
    }, price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", null, position === "left" ? value : amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", null, position === "left" ? amount : value), position === "right" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      className: "column-hide-xs"
    }, total) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("td", {
      style: {
        width: "25%"
      },
      className: integerClass
    }, price));
  }

}

class GroupOrderLimitSelector extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor() {
    super();
    this.state = {
      groupLimit: ""
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      groupLimit: props.currentGroupOrderLimit
    };
  }

  render() {
    const noGroupsAvailable = this.props.trackedGroupsConfig.length === 0;
    const trackedGroupsOptionsList = this.props.trackedGroupsConfig.map(key => this.props.globalSettingsSelector ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Select.Option, {
      value: key,
      key: key
    }, `${key / 100}%`) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("option", {
      value: key,
      key: key
    }, `${key / 100}%`));

    if (this.props.globalSettingsSelector) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Select, {
        placeholder: "Select option",
        style: {
          width: "100%"
        },
        value: this.props.currentGroupOrderLimit,
        disabled: noGroupsAvailable,
        onChange: this.props.handleGroupOrderLimitChange.bind(this)
      }, noGroupsAvailable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Select.Option, {
        value: 0
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "tooltip.no_groups_available"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Select.Option, {
        value: 0
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "settings.disabled"
      })), trackedGroupsOptionsList);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Tooltip, {
        placement: "bottom",
        title: noGroupsAvailable ? counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("tooltip.no_groups_available") : null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("select", {
        value: this.state.groupLimit,
        onChange: this.props.handleGroupOrderLimitChange,
        className: "settings-select",
        style: noGroupsAvailable ? {
          cursor: "not-allowed"
        } : null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "exchange.group_order_limit",
        component: "option",
        value: "0"
      }), trackedGroupsOptionsList));
    }
  }

}

class OrderBook extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super();
    this.state = {
      flip: props.flipOrderBook,
      showAllBids: false,
      showAllAsks: false,
      rowCount: 20,
      autoScroll: props.autoScroll,
      quoteTotalBids: false,
      quoteTotalAsks: false
    };
    this.verticalStickyTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createRef();
    this.centerText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createRef();
    this.hor_bids = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createRef();
    this.hor_asks = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createRef();
    this.askTransition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createRef();
    this.bidTransition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.horizontal && this.props.hideScrollbars && nextState.showAllAsks != this.state.showAllAsks) {
      let asksContainer = this.hor_asks.current;

      if (!nextState.showAllAsks) {
        perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().destroy(asksContainer);
      } else {
        perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().initialize(asksContainer);
        this.psUpdate();
      }

      this.askTransition.current.resetAnimation();
      if (this.hor_asks.current) this.hor_asks.current.scrollTop = 0;
    }

    if (this.props.horizontal && this.props.hideScrollbars && nextState.showAllBids != this.state.showAllBids) {
      let bidsContainer = this.hor_bids.current;

      if (!nextState.showAllBids) {
        perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().destroy(bidsContainer);
      } else {
        perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().initialize(bidsContainer);
        this.psUpdate();
      }

      this.bidTransition.current.resetAnimation();
      if (this.hor_bids.current) this.hor_bids.current.scrollTop = 0;
    } // if (!nextProps.marketReady) return false;


    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const nextProps = this.props; // Change of market or direction

    if (nextProps.base.get("id") !== prevProps.base.get("id") || nextProps.quote.get("id") !== prevProps.quote.get("id")) {
      if (this.askTransition.current) {
        this.askTransition.current.resetAnimation();
        if (this.hor_asks.current) this.hor_asks.current.scrollTop = 0;
        if (this.hor_bids.current) this.hor_bids.current.scrollTop = 0;
      }

      if (this.bidTransition.current) {
        this.bidTransition.current.resetAnimation();
      }

      if (this.refs.vert_bids) this.refs.vert_bids.scrollTop = 0;

      if (!this.props.horizontal) {
        this.setState({
          autoScroll: this.state.autoScroll
        });
      }
    }

    let bidsContainer = this.hor_bids.current;
    let asksContainer = this.hor_asks.current;

    if (this.props.horizontal && nextProps.hideScrollbars !== this.props.hideScrollbars && nextProps.hideScrollbars) {
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().destroy(bidsContainer);
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().destroy(asksContainer);
    }

    if (this.props.horizontal && nextProps.hideScrollbars !== this.props.hideScrollbars && !nextProps.hideScrollbars) {
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().initialize(bidsContainer);
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().initialize(asksContainer);
      this.askTransition.current.resetAnimation();
      this.bidTransition.current.resetAnimation();
      if (asksContainer) asksContainer.scrollTop = 0;
      if (bidsContainer) bidsContainer.scrollTop = 0;
      this.psUpdate();
    }

    this.centerVerticalScrollBar();
  }

  queryStickyTable = (query = null) => {
    const node = react_dom__WEBPACK_IMPORTED_MODULE_13__.findDOMNode(this.verticalStickyTable.current);
    if (query == null) return node;
    return node.querySelector(query);
  };
  verticalScrollBar = () => this.queryStickyTable();

  componentDidMount() {
    if (!this.props.horizontal) {
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().initialize(this.verticalScrollBar());
    } else {
      if (!this.props.hideScrollbars) {
        let bidsContainer = this.hor_bids.current;
        perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().initialize(bidsContainer);
        let asksContainer = this.hor_asks.current;
        perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().initialize(asksContainer);
      }
    }
  }

  centerVerticalScrollBar() {
    if (!this.props.horizontal && this.state.autoScroll) {
      // Center vertical scroll bar
      const scrollableContainer = this.queryStickyTable();
      const header = this.queryStickyTable(".top-header");
      const centerTextContainer = this.centerText.current;
      const singleRowHeight = elemHeight(this.queryStickyTable(".order-row"));
      let rows = this.props.currentGroupOrderLimit !== 0 ? !this.props.orderBookReversed ? this.props.groupedAsks : this.props.groupedBids : !this.props.orderBookReversed ? this.props.combinedAsks : this.props.combinedBids;
      const rowsHeight = rows.length * singleRowHeight;
      const scrollableContainerHeight = elemHeight(scrollableContainer) - elemHeight(header);
      const scrollTo = rowsHeight + elemHeight(centerTextContainer) / 2 - scrollableContainerHeight / 2;
      scrollableContainer.scrollTop = scrollTo;
    }
  }

  psUpdate() {
    if (!this.props.horizontal) {
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().update(this.verticalScrollBar());
    } else {
      let bidsContainer = this.hor_bids.current;
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().update(bidsContainer);
      let asksContainer = this.hor_asks.current;
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default().update(asksContainer);
    }
  }
  /***
   * Sets status to show full order book by asks or bids
   * @string: type
   */


  _onSetShowAll(type) {
    if (type === "asks") {
      this.setState({
        showAllAsks: !this.state.showAllAsks
      });

      if (this.state.showAllAsks) {
        this.hor_asks.current.scrollTop = 0;
      }
    } else {
      this.setState({
        showAllBids: !this.state.showAllBids
      });

      if (this.state.showAllBids) {
        this.hor_bids.current.scrollTop = 0;
      }
    }
  }
  /***
   * Toggle spread value to view real value or percentage in spread
   * Vertical order book only
   */


  toggleSpreadValue = () => {
    this.setState({
      displaySpreadAsPercentage: !this.state.displaySpreadAsPercentage
    });
  };
  /***
   * Toggle auto scroll to lock/unlock auto centering
   * Vertical order book only
   */

  toggleAutoScroll = () => {
    this.setState({
      autoScroll: !this.state.autoScroll
    });
  };

  toggleTotalAsset(isBid) {
    const quoteTotal = isBid ? "quoteTotalBids" : "quoteTotalAsks";
    this.setState({
      [quoteTotal]: !this.state[quoteTotal]
    });
  }

  render() {
    let {
      combinedBids,
      combinedAsks,
      highestBid,
      lowestAsk,
      quote,
      base,
      totalAsks,
      totalBids,
      quoteSymbol,
      baseSymbol,
      horizontal,
      trackedGroupsConfig,
      currentGroupOrderLimit,
      handleGroupOrderLimitChange,
      orderBookReversed,
      groupedBids,
      groupedAsks,
      flipOrderBook
    } = this.props;
    let {
      showAllAsks,
      showAllBids,
      rowCount,
      displaySpreadAsPercentage
    } = this.state;
    const noOrders = !lowestAsk.sell_price && !highestBid.sell_price;
    const hasAskAndBids = !!(lowestAsk.sell_price && highestBid.sell_price);
    const spread = hasAskAndBids && (displaySpreadAsPercentage ? `${(100 * (lowestAsk._real_price / highestBid._real_price - 1)).toFixed(2)}%` : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__["default"], {
      price: lowestAsk._real_price - highestBid._real_price,
      base: base,
      quote: quote
    }));
    let bidRows = null,
        askRows = null;
    /* Sort */

    let tempAsks = this.props.currentGroupOrderLimit !== 0 ? groupedAsks : combinedAsks; // RED

    let tempBids = this.props.currentGroupOrderLimit !== 0 ? groupedBids : combinedBids; // GREEN

    if (!horizontal && !orderBookReversed) {
      tempBids.sort((a, b) => {
        return b.getPrice() - a.getPrice();
      });
      tempAsks.sort((a, b) => {
        return b.getPrice() - a.getPrice();
      });
    } else if (!horizontal && orderBookReversed) {
      tempBids.sort((a, b) => {
        return a.getPrice() - b.getPrice();
      });
      tempAsks.sort((a, b) => {
        return a.getPrice() - b.getPrice();
      });
    }

    if (base && quote) {
      // limit orders or grouped orders
      if (this.props.currentGroupOrderLimit !== 0) {
        bidRows = tempBids.map((order, index) => {
          return horizontal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GroupedOrderBookRowHorizontal, {
            index: index,
            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
            order: order,
            onClick: this.props.onClick.bind(this, order),
            base: base,
            quote: quote,
            position: !flipOrderBook ? "left" : "right",
            currentAccount: this.props.currentAccount,
            quoteTotal: this.state.quoteTotalBids
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GroupedOrderBookRowVertical, {
            index: index,
            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
            order: order,
            onClick: this.props.onClick.bind(this, order),
            base: base,
            quote: quote,
            final: index === 0,
            currentAccount: this.props.currentAccount
          });
        });
        askRows = tempAsks.map((order, index) => {
          return horizontal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GroupedOrderBookRowHorizontal, {
            index: index,
            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
            order: order,
            onClick: this.props.onClick.bind(this, order),
            base: base,
            quote: quote,
            type: order.type,
            position: !flipOrderBook ? "right" : "left",
            currentAccount: this.props.currentAccount,
            quoteTotal: this.state.quoteTotalAsks
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GroupedOrderBookRowVertical, {
            index: index,
            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
            order: order,
            onClick: this.props.onClick.bind(this, order),
            base: base,
            quote: quote,
            type: order.type,
            final: 0 === index,
            currentAccount: this.props.currentAccount
          });
        });
      } else {
        bidRows = tempBids.map((order, index) => {
          return horizontal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(OrderBookRowHorizontal, {
            index: index,
            key: order.getPrice() + (order.isCall() ? "_call" : ""),
            order: order,
            onClick: this.props.onClick.bind(this, order),
            base: base,
            quote: quote,
            position: !flipOrderBook ? "left" : "right",
            currentAccount: this.props.currentAccount,
            quoteTotal: this.state.quoteTotalBids
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(OrderBookRowVertical, {
            index: index,
            key: order.getPrice() + (order.isCall() ? "_call" : ""),
            order: order,
            onClick: this.props.onClick.bind(this, order),
            base: base,
            quote: quote,
            final: index === 0,
            currentAccount: this.props.currentAccount
          });
        });
        askRows = tempAsks.map((order, index) => {
          return horizontal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(OrderBookRowHorizontal, {
            index: index,
            key: order.getPrice() + (order.isCall() ? "_call" : ""),
            order: order,
            onClick: this.props.onClick.bind(this, order),
            base: base,
            quote: quote,
            type: order.type,
            position: !flipOrderBook ? "right" : "left",
            currentAccount: this.props.currentAccount,
            quoteTotal: this.state.quoteTotalAsks
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(OrderBookRowVertical, {
            index: index,
            key: order.getPrice() + (order.isCall() ? "_call" : ""),
            order: order,
            onClick: this.props.onClick.bind(this, order),
            base: base,
            quote: quote,
            type: order.type,
            final: 0 === index,
            currentAccount: this.props.currentAccount
          });
        });
      }
    }

    if (this.props.horizontal) {
      let totalBidsLength = bidRows.length;
      let totalAsksLength = askRows.length;

      if (!showAllBids) {
        bidRows.splice(rowCount, bidRows.length);
      }

      if (!showAllAsks) {
        askRows.splice(rowCount, askRows.length);
      }

      let leftHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", {
        key: "top-header",
        className: "top-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
        className: "column-hide-xs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: "header-sub-title",
        content: "exchange.total"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
        onClick: () => this.toggleTotalAsset(true),
        className: "header-sub-title underline-title"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        dataPlace: "top",
        name: !this.state.quoteTotalBids ? baseSymbol : quoteSymbol,
        noTip: true
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "header-sub-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        dataPlace: "top",
        name: baseSymbol
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "header-sub-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        dataPlace: "top",
        name: quoteSymbol
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: (flipOrderBook ? "ask-total" : "bid-total") + " header-sub-title",
        content: "exchange.price"
      }))));
      let rightHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("tr", {
        key: "top-header",
        className: "top-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: (!flipOrderBook ? "ask-total" : "bid-total") + " header-sub-title",
        content: "exchange.price"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "header-sub-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        dataPlace: "top",
        name: quoteSymbol
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "header-sub-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        dataPlace: "top",
        name: baseSymbol
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("th", {
        className: "column-hide-xs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: "header-sub-title",
        content: "exchange.total"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
        onClick: () => this.toggleTotalAsset(),
        className: "header-sub-title underline-title"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        dataPlace: "top",
        name: !this.state.quoteTotalAsks ? baseSymbol : quoteSymbol,
        noTip: true
      })))));
      let wrapperClass = this.props.wrapperClass;
      let innerClass = this.props.innerClass;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        ref: "order_book",
        style: {
          marginRight: this.props.smallScreen ? 10 : 0
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(wrapperClass)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(innerClass, flipOrderBook ? "order-1" : "order-2")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "exchange-content-header ask" //data-intro={translator.translate(
        //    "walkthrough.sell_orders"
        //)}

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "exchange.asks"
      }), flipOrderBook && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        onClick: this.props.onFlipOrderBook.bind(this),
        style: {
          cursor: "pointer",
          fontSize: "1rem",
          marginLeft: "4px",
          position: "relative",
          top: "-2px"
        },
        className: "flip-arrow"
      }, " ", "\u21C6")) : null, flipOrderBook && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "float-right header-sub-title grouped_order"
      }, trackedGroupsConfig ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GroupOrderLimitSelector, {
        trackedGroupsConfig: trackedGroupsConfig,
        handleGroupOrderLimitChange: handleGroupOrderLimitChange,
        currentGroupOrderLimit: currentGroupOrderLimit
      }) : null) : null, this.props.onTogglePosition && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        onClick: this.props.onTogglePosition,
        style: {
          cursor: "pointer",
          fontSize: "1rem"
        },
        className: "flip-arrow"
      }, " ", "\u21C5") : null, flipOrderBook && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "order-book-button-v",
        onClick: this.props.moveOrderBook
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "thumb-tack",
        className: "icon-14px icon-fill"
      })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        style: {
          lineHeight: "16px"
        },
        className: "header-sub-title float-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "exchange.market_depth"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, ": "), common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(totalAsks, quote.get("precision")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, " ", "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: quoteSymbol
      }), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "market-right-padding-only"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
        className: "table order-table table-hover fixed-table text-right"
      }, !flipOrderBook ? rightHeader : leftHeader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "grid-block",
        ref: this.hor_asks,
        style: {
          paddingRight: "0.6rem",
          overflow: "hidden",
          maxHeight: 260,
          lineHeight: "13px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
        style: {
          paddingBottom: 5
        },
        className: "table order-table no-stripes table-hover fixed-table text-right no-overflow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        ref: this.askTransition,
        className: "orderbook clickable",
        component: "tbody",
        transitionName: "newrow",
        id: "top-order-rows"
      }, askRows))), totalAsksLength > 11 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "orderbook-showall"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
        onClick: this._onSetShowAll.bind(this, "asks")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: showAllAsks ? "exchange.hide" : "exchange.show_asks",
        ordercount: totalAsksLength
      }))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(innerClass, flipOrderBook ? "order-2" : "order-1")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "exchange-content-header bid" //data-intro={translator.translate(
        //    "walkthrough.buy_orders"
        //)}

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "exchange.bids"
      }), !flipOrderBook && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        onClick: this.props.onFlipOrderBook.bind(this),
        style: {
          cursor: "pointer",
          fontSize: "1rem",
          marginLeft: "4px",
          position: "relative",
          top: "-2px"
        },
        className: "flip-arrow"
      }, " ", "\u21C6")) : null, !flipOrderBook && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "float-right header-sub-title grouped_order"
      }, trackedGroupsConfig ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(GroupOrderLimitSelector, {
        trackedGroupsConfig: trackedGroupsConfig,
        handleGroupOrderLimitChange: handleGroupOrderLimitChange,
        currentGroupOrderLimit: currentGroupOrderLimit
      }) : null) : null, currentGroupOrderLimit !== 0 && this.props.hideFunctionButtons && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "grouping",
        className: "float-right icon-14px",
        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("icons.order_grouping"),
        style: {
          marginLeft: "0.5rem"
        }
      }), this.props.onTogglePosition && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        onClick: this.props.onTogglePosition,
        style: {
          cursor: "pointer",
          fontSize: "1rem"
        },
        className: "flip-arrow"
      }, " ", "\u21C5") : null, !flipOrderBook && !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "order-book-button-v",
        onClick: this.props.moveOrderBook
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "thumb-tack",
        className: "icon-14px"
      })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        style: {
          lineHeight: "16px"
        },
        className: "float-right header-sub-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "exchange.market_depth"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, ": "), common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].format_number(totalBids, base.get("precision")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, " ", "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: baseSymbol
      }), ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "market-right-padding-only"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
        className: "table order-table table-hover fixed-table text-right"
      }, flipOrderBook ? rightHeader : leftHeader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "grid-block",
        ref: this.hor_bids,
        style: {
          paddingRight: "0.6rem",
          overflow: "hidden",
          maxHeight: 260,
          lineHeight: "13px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", {
        style: {
          paddingBottom: 5
        },
        className: "table order-table no-stripes table-hover fixed-table text-right no-overflow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        ref: this.bidTransition,
        className: "orderbook clickable",
        component: "tbody",
        transitionName: "newrow"
      }, bidRows))), totalBidsLength > rowCount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "orderbook-showall"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", {
        onClick: this._onSetShowAll.bind(this, "bids")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: showAllBids ? "exchange.hide" : "exchange.show_bids",
        ordercount: totalBidsLength
      }))) : null)));
    } else {
      // Vertical orderbook
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "order-table-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.StickyTable, {
        borderWidth: "0px",
        borderColor: "grey",
        leftStickyColumnCount: 0,
        className: "order-table table",
        ref: this.verticalStickyTable
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Row, {
        className: "top-header sticky-table-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
        className: "cell header-cell left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "header-sub-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: baseSymbol
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
        className: "cell header-cell"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "header-sub-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: quoteSymbol
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
        className: "cell header-cell right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: "header-sub-title",
        content: "exchange.price"
      }))), orderBookReversed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(OrderRows, {
        id: "top-order-rows",
        noOrders: noOrders,
        orderRows: bidRows,
        isBid: true
      }) :
      /*#__PURE__*/
      // bidRows
      react__WEBPACK_IMPORTED_MODULE_3__.createElement(OrderRows, {
        id: "top-order-rows",
        noOrders: noOrders,
        orderRows: askRows,
        isBid: false
      }) // askRows
      , noOrders ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Row, {
        className: "sticky-table-row",
        ref: this.centerText
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
        className: "cell"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
        className: "cell no-orders padtop"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        content: "exchange.no_orders"
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Row, {
        className: "sticky-table-row orderbook-latest-price",
        ref: this.centerText,
        style: {
          padding: 0
        } //data-intro={translator.translate(
        //    "walkthrough.vertical_order"
        //)}

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
        className: "cell right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "clickable left",
        onClick: this.toggleSpreadValue
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: "orderbook-center-title",
        content: "exchange.spread"
      }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "spread-value"
      }, !!spread ? spread : "0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
        className: "cell cell-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        style: {
          width: 75
        }
      }, !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"] //data-intro={translator.translate(
      //    "walkthrough.vertical_lock"
      //)}
      , {
        className: "lock-unlock clickable icon-fill",
        onClick: this.toggleAutoScroll,
        name: this.state.autoScroll ? "locked" : "unlocked",
        title: this.state.autoScroll ? "icons.unlocked.disable_auto_scroll" : "icons.locked.enable_auto_scroll"
      }) : null, "\xA0", !this.props.hideFunctionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClick: this.props.moveOrderBook,
        name: "thumb-tack",
        className: "icon-14px icon-fill order-book-button-v clickable",
        title: this.props.horizontal ? "icons.thumb_tack" : "icons.thumb_untack",
        style: {
          marginLeft: 0
        }
      }) : null, "\xA0", currentGroupOrderLimit == 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "grouping",
        className: "icon-14px",
        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("icons.order_grouping"),
        style: {
          marginLeft: 0
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__.Cell, {
        className: "cell",
        style: {
          textAlign: "center"
        }
      }, !!this.props.latest && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
        className: !this.props.changeClass ? "spread-value" : this.props.changeClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        price: this.props.latest,
        base: this.props.base,
        quote: this.props.quote
      }))))), orderBookReversed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(OrderRows, {
        noOrders: noOrders,
        orderRows: askRows,
        isBid: false
      }) :
      /*#__PURE__*/
      // askRows
      react__WEBPACK_IMPORTED_MODULE_3__.createElement(OrderRows, {
        noOrders: noOrders,
        orderRows: bidRows,
        isBid: true
      }) // bidRows
      ));
    }
  }

}

OrderBook.defaultProps = {
  bids: [],
  asks: [],
  orders: {}
};
OrderBook.propTypes = {
  bids: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().array.isRequired),
  asks: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().array.isRequired),
  orders: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().object.isRequired)
};


/***/ }),

/***/ 2742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _OrderBook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2720);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(657);







class Personalize extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super();
    this.state = {
      open: false,
      smallScreen: false,
      autoScroll: props.viewSettings.get("global_AutoScroll", true)
    };
    this.setChartHeight = this.setChartHeight.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.setState({
      smallScreen: window.innerWidth <= 800
    });
  }

  onClose() {
    this.props.hideModal();
  }

  setChartHeight(value) {
    this.props.onChangeChartHeight({
      value: value
    });
  }

  setAutoscroll(target) {
    let newState = target == 1 ? true : false;
    this.setState({
      autoScroll: newState
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting({
      global_AutoScroll: newState
    });
    this.props.onSetAutoscroll(newState);
  }

  _getGroupingOptions(selectKey) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select, {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.placeholder_select"),
      style: {
        width: "100%"
      },
      onChange: this.props.onSetPanelTabs.bind(this, selectKey),
      value: this.props.panelTabs[selectKey]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.grouping_standalone"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.grouping_1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.grouping_2"
    })));
  }

  render() {
    let {
      chartType,
      chartHeight
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Modal, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.header.title"),
      visible: this.props.visible,
      id: this.props.modalId,
      overlay: true,
      footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Button, {
        key: "close",
        onClick: this.onClose.bind(this)
      }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("modal.close"))],
      onCancel: this.onClose.bind(this),
      noHeaderContainer: true,
      ref: this.props.modalId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.header.chart_options"
    })), !this.props.tinyScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.chart_type"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.chart_type")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.chart_reload")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "info-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select, {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.placeholder_select"),
      style: {
        width: "100%"
      },
      value: chartType,
      onChange: this.props.onToggleChart.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "market_depth"
    }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.order_depth")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "price_chart"
    }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.price_history")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "hidden_chart"
    }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.options.hidden_chart"))))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.chart_height"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.chart_height")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.InputNumber, {
      value: typeof chartHeight === "number" && chartHeight,
      onChange: this.setChartHeight.bind(this)
    }))), !this.props.tinyScreen && chartType == "price_chart" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.chart_tools"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.chart_tools")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.chart_reload")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "info-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Switch, {
      style: {
        margin: 6
      },
      checked: this.props.chartTools,
      onChange: this.props.onChartTools.bind(this)
    }))), !this.props.tinyScreen && chartType == "price_chart" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.chart_zoom"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.chart_zoom")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.chart_reload")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "info-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Switch, {
      style: {
        margin: 6
      },
      checked: this.props.chartZoom,
      onChange: this.props.onChartZoom.bind(this)
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.header.order_options"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.order_book_grouping"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.order_book_grouping")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, this.props.trackedGroupsConfig ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_OrderBook__WEBPACK_IMPORTED_MODULE_4__.GroupOrderLimitSelector, {
      globalSettingsSelector: true,
      trackedGroupsConfig: this.props.trackedGroupsConfig,
      handleGroupOrderLimitChange: this.props.handleGroupOrderLimitChange.bind(this),
      currentGroupOrderLimit: this.props.currentGroupOrderLimit
    }) : null)), !this.props.tinyScreen && !this.props.smallScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.order_style"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.order_style")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select, {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.placeholder_select"),
      style: {
        width: "100%"
      },
      value: this.props.verticalOrderBook.toString(),
      onSelect: this.props.onMoveOrderBook.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.vertical"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "false"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.horizontal"
    }))))), !this.props.tinyScreen && !this.props.verticalOrderBook || this.props.smallScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink",
      style: {
        paddingTop: "0.5em"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.position_order_form"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.position_order_form")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select, {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.placeholder_select"),
      style: {
        width: "100%"
      },
      value: this.props.flipBuySell.toString(),
      onSelect: this.props.onFlipBuySell.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "false"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.position_order_form_opt1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.position_order_form_opt2"
    }))))) : null, !this.props.tinyScreen && !this.props.verticalOrderBook || this.props.smallScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink",
      style: {
        paddingTop: "0.5em"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.position_order_orders"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.position_order_orders")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select, {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.placeholder_select"),
      style: {
        width: "100%"
      },
      value: this.props.flipOrderBook.toString(),
      onSelect: this.props.onFlipOrderBook.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "false"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.position_order_orders_opt1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.position_order_orders_opt2"
    }))))) : null, !this.props.tinyScreen && !this.props.verticalOrderBook || this.props.smallScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink",
      style: {
        paddingTop: "0.5em"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.position_order_asset"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.position_order_asset")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select, {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.placeholder_select"),
      style: {
        width: "100%"
      },
      value: this.props.buySellTop.toString(),
      onSelect: this.props.onToggleBuySellPosition.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "false"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.position_order_asset_opt1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.options.position_order_asset_opt2"
    }))))) : null, !this.props.tinyScreen && this.props.verticalOrderBook ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink",
      style: {
        paddingTop: "0.5em"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.orderbook_auto_scroll"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.orderbook_auto_scroll")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Switch, {
      style: {
        margin: 6
      },
      checked: this.state.autoScroll,
      onChange: this.setAutoscroll.bind(this)
    }))) : null, !this.props.tinyScreen && this.props.verticalOrderBook ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.reverse_order_book"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.reverse_order_book")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Switch, {
      style: {
        margin: 6
      },
      checked: this.props.orderBookReversed,
      onChange: this.props.onOrderBookReversed.bind(this)
    }))) : null, !this.props.tinyScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6",
      style: {
        paddingRight: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.single_colum_order_form"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.single_colum_order_form")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Switch, {
      style: {
        margin: 6
      },
      checked: this.props.singleColumnOrderForm,
      onChange: this.props.onToggleSingleColumnOrderForm.bind(this)
    }))), !this.props.tinyScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.header.panel_grouping"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.panel_grouping")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    }))), !this.props.tinyScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink",
      style: {
        paddingBottom: "0.5em"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.my_trades"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, this._getGroupingOptions("my_history"))), !this.props.tinyScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink",
      style: {
        paddingBottom: "0.5em"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.market_trades"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, this._getGroupingOptions("history"))), !this.props.tinyScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink",
      style: {
        paddingBottom: "0.5em"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.open_orders"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, this._getGroupingOptions("my_orders"))), !this.props.tinyScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink",
      style: {
        paddingBottom: "0.5em"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.settlements"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, this._getGroupingOptions("open_settlement"))), !this.props.tinyScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.header.general"
    })), !this.props.tinyScreen && !this.props.smallScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink",
      style: {
        paddingBottom: "0.5em"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6",
      style: {
        paddingRight: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.market_location"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.market_location")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select, {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("settings.placeholder_select"),
      style: {
        width: "100%"
      },
      value: this.props.mirrorPanels.toString(),
      onSelect: this.props.onMirrorPanels.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "false"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "settings.left"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Select.Option, {
      value: "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "settings.right"
    }))))), !this.props.tinyScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6",
      style: {
        paddingRight: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.reduce_scrollbars"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.reduce_scrollbars")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.reload")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "info-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Switch, {
      style: {
        margin: 6
      },
      checked: this.props.hideScrollbars,
      onChange: this.props.onToggleScrollbars.bind(this)
    }))), !this.props.tinyScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "grid-block no-overflow wrap shrink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6",
      style: {
        paddingRight: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h6", {
      style: {
        margin: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settings.title.hide_function_buttons"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.settings.tooltip.hide_function_buttons")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Icon, {
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "small-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__.Switch, {
      style: {
        margin: 6
      },
      checked: this.props.hideFunctionButtons,
      onChange: this.props.onHideFunctionButtons.bind(this)
    })))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Personalize);

/***/ }),

/***/ 2766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2097);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2088);
/* harmony import */ var _services_Exchange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2619);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2085);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);








class PriceAlert extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    const testRules = [];
    this.state = {
      rules: [...testRules]
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleAddRule = this.handleAddRule.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleDeleteRule = this.handleDeleteRule.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handlePriceFieldBlur = this.handlePriceFieldBlur.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.visible && this.props.visible) {
      let example = {
        type: _services_Exchange__WEBPACK_IMPORTED_MODULE_3__.PRICE_ALERT_TYPES.HIGHER_THAN,
        price: this.props.latestPrice ? Number(this.props.latestPrice) : null
      };
      let rules = [];

      if (!this.props.rules.length) {
        rules = !this.state.openedPreviously ? [example] : [];
      } else {
        rules = this.props.rules;
      }

      this.setState({
        rules: rules,
        openedPreviously: true
      });
    }
  }

  handleTypeChange(key) {
    return value => {
      let rules = this.state.rules.map((rule, ruleKey) => {
        if (Number(key) !== Number(ruleKey)) return rule;
        let validate = this.validatePrice(value, Number(rule.price), Number(this.props.latestPrice));
        return { ...rule,
          ...validate,
          type: String(value)
        };
      });
      this.setState({
        rules: rules
      });
    };
  }

  validatePrice(type, price, latest) {
    if (type === _services_Exchange__WEBPACK_IMPORTED_MODULE_3__.PRICE_ALERT_TYPES.HIGHER_THAN && price < latest) {
      return {
        validateStatus: "error",
        help: "Price of Alert should be higher than current price"
      };
    }

    if (type === _services_Exchange__WEBPACK_IMPORTED_MODULE_3__.PRICE_ALERT_TYPES.LOWER_THAN && price > latest) {
      return {
        validateStatus: "error",
        help: "Price of Alert  should be lower than current price"
      };
    }

    return {
      validateStatus: "success",
      help: ""
    };
  }

  validatePriceFieldByKey(key) {
    let rules = this.state.rules.map((rule, ruleKey) => {
      if (Number(key) !== Number(ruleKey)) return rule;
      const validate = this.validatePrice(rule.type, Number(rule.price), Number(this.props.latestPrice));
      return { ...rule,
        validateStatus: validate.validateStatus,
        help: validate.help
      };
    });
    this.setState({
      rules: rules
    });
  }

  handlePriceFieldBlur(key) {
    return () => {
      this.validatePriceFieldByKey(key);
    };
  }

  handlePriceChange(key) {
    return event => {
      let rules = this.state.rules.map((rule, ruleKey) => {
        if (Number(key) !== Number(ruleKey)) return rule;
        let validate = {}; // validate on a fly if field was touched previously

        if (rule.validateStatus) {
          validate = this.validatePrice(rule.type, Number(event.target.value), Number(this.props.latestPrice));
        }

        return { ...rule,
          ...validate,
          price: event.target.value
        };
      });
      this.setState({
        rules: rules
      });
    };
  }

  handleAddRule() {
    let rules = [...this.state.rules];
    rules.push({
      type: _services_Exchange__WEBPACK_IMPORTED_MODULE_3__.PRICE_ALERT_TYPES.HIGHER_THAN,
      price: this.props.latestPrice ? Number(this.props.latestPrice) : null
    });
    this.setState({
      rules
    });
  }

  handleDeleteRule(key) {
    return () => {
      let rules = this.state.rules.filter((item, ruleKey) => Number(ruleKey) !== Number(key));
      this.setState({
        rules: rules
      });
    };
  }

  handleSave() {
    this.props.onSave(this.state.rules);
  }

  render() {
    if (!this.props.quoteAsset || !this.props.quoteAsset.get || !this.props.baseAsset || !this.props.baseAsset.get) return null;
    const footer = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: "submit",
      type: "primary",
      onClick: this.handleSave
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("modal.save")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: "cancel",
      onClick: this.props.hideModal
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("modal.cancel"))];
    const baseAssetSymbol = this.props.baseAsset.get("symbol");
    const quoteAssetSymbol = this.props.quoteAsset.get("symbol");
    const linkToExchange = `${quoteAssetSymbol}_${baseAssetSymbol}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      visible: this.props.visible,
      onCancel: this.props.hideModal,
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.price_alert.title"),
      footer: footer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "exchange--price-alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "exchange--price-alert--description"
    }, this.state.rules.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.price_alert.alert_when"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
      to: linkToExchange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: quoteAssetSymbol
    }), "/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: baseAssetSymbol
    })), " ", "price:") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.price_alert.use_button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
      to: linkToExchange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: quoteAssetSymbol
    }), "/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: baseAssetSymbol
    })), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form, {
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "exchange--price-alert--items"
    }, this.state.rules.map((rule, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      key: key,
      validateStatus: rule.validateStatus || null,
      help: rule.help || null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input.Group, {
      className: "exchange--price-alert--item",
      compact: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Select, {
      value: rule.type,
      style: {
        width: "200px"
      },
      onChange: this.handleTypeChange(key)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Select.Option, {
      value: _services_Exchange__WEBPACK_IMPORTED_MODULE_3__.PRICE_ALERT_TYPES.HIGHER_THAN,
      key: "1"
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.price_alert.higher_than")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Select.Option, {
      value: _services_Exchange__WEBPACK_IMPORTED_MODULE_3__.PRICE_ALERT_TYPES.LOWER_THAN,
      key: "2"
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.price_alert.lower_than"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, {
      onBlur: this.handlePriceFieldBlur(key),
      style: {
        width: "calc(100% - 200px - 32px)",
        marginTop: "1px"
      },
      onChange: this.handlePriceChange(key),
      value: rule.price,
      className: "exchange--price-alert--item--price",
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.price_alert.price"),
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: baseAssetSymbol
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
      style: {
        width: "32px"
      },
      onClick: this.handleDeleteRule(key),
      className: "exchange--price-alert--item--control",
      type: "icon",
      icon: "delete"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "exchange--price-alert--items--add"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "javascript:void(0)",
      onClick: this.handleAddRule
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      type: "plus"
    }), " ", counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.price_alert.add_rule")))))));
  }

}

PriceAlert = (0,_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(PriceAlert, {
  propNames: ["quoteAsset", "baseAsset"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceAlert);

/***/ }),

/***/ 2703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PriceStatWithLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2088);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2341);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);







class PriceStatWithLabel extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      change: null,
      curMarket: null,
      marketChange: false
    };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.volume2 && nextProps.volume2 !== this.props.volume2) {
      return true;
    }

    return nextProps.price !== this.props.price || nextProps.ready !== this.props.ready;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let state = {
      change: 0
    };
    let {
      market
    } = nextProps;
    let checkMarketChange = this.state.curMarket !== market;
    let marketChange = this.state.curMarket == null ? false : checkMarketChange;
    state["marketChange"] = marketChange;
    state["curMarket"] = market;
    state["prevAsset"] = this.state.marketAsset;

    if (nextProps.ready && this.props.ready) {
      state["change"] = parseFloat(nextProps.price) - parseFloat(this.props.price);
    }

    this.setState(state);
  }

  componentDidUpdate() {
    react_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"].rebuild();
  }

  render() {
    let {
      base,
      quote,
      price,
      content,
      ready,
      volume,
      toolTip,
      ignoreColorChange
    } = this.props;
    let {
      change,
      marketChange
    } = this.state;
    let changeClasses = null;

    if (!marketChange && change && change !== null && ignoreColorChange !== true) {
      changeClasses = change > 0 ? "pulsate green" : "pulsate red";
    }

    let value = !volume ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].price_text(price, quote, base) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_volume(price);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("stressed-stat", this.props.className, changeClasses),
      onClick: this.props.onClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
      placement: "bottom",
      title: toolTip
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "value stat-primary"
    }, !ready ? 0 : value, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "symbol-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: base.get("symbol")
    }))), content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "stat-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: content
    })) : null));
  }

}

/***/ }),

/***/ 2696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(924);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2436);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2088);
/* harmony import */ var _services_Exchange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2619);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(637);
/* harmony import */ var bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(558);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2697);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(618);
/* harmony import */ var _lib_common_trxHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(636);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2692);
/* harmony import */ var _services_Math__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2699);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1043);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















class ScaledOrderForm extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCount: 1,
      feeAssets: []
    };
    this.handleClickBalance = this.handleClickBalance.bind(this);
    this.handleCurrentPriceClick = this.handleCurrentPriceClick.bind(this);
  }

  componentDidMount() {
    this._checkFeeAssets();
  }

  componentDidUpdate() {
    const orderCount = Number(this._getFormValues().orderCount || 1);
    const stateOrderCount = Number(this.state.orderCount);

    if (!isNaN(stateOrderCount) && !isNaN(orderCount) && Number(this.state.orderCount) !== orderCount) {
      this.setState({
        orderCount: orderCount
      }, () => {
        this._checkFeeAssets();
      });
    }
  }

  isFormValid() {
    const formValues = this._getFormValues();

    if (!formValues) return false;
    if (!formValues.priceLower || isNaN(Number(formValues.priceLower)) || Number(formValues.priceLower) <= 0) return false;
    if (!formValues.amount || isNaN(Number(formValues.amount)) || Number(formValues.amount) <= 0) return false;
    if (!formValues.priceUpper || isNaN(Number(formValues.priceUpper)) || Number(formValues.priceUpper) <= 0 || Number(formValues.priceUpper) <= Number(formValues.priceLower)) return false;
    if (!formValues.orderCount || isNaN(Number(formValues.orderCount)) || Number(formValues.orderCount) <= 1) return false;
    return true;
  }

  _getBaseAssetFlags() {
    return _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__["default"].getFlagBooleans(this.props.baseAsset.getIn(["options", "flags"]), this.props.baseAsset.has("bitasset_data_id"));
  }

  _getQuoteAssetFlags() {
    return _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__["default"].getFlagBooleans(this.props.quoteAsset.getIn(["options", "flags"]), this.props.quoteAsset.has("bitasset_data_id"));
  }

  _isMarketFeeVisible() {
    const baseAssetFlagBooleans = this._getBaseAssetFlags();

    const quoteAssetFlagBooleans = this._getQuoteAssetFlags();

    if (this._getFormValues().action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.SELL && baseAssetFlagBooleans.charge_market_fee) {
      return true;
    }

    if (this._getFormValues().action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.BUY && quoteAssetFlagBooleans.charge_market_fee) {
      return true;
    }

    return false;
  }

  _getFormValues() {
    return this.props.form.getFieldsValue();
  }

  _filterFeeStatuses(feeStatuses) {
    return feeStatuses.filter(feeStatus => {
      return feeStatus && feeStatus.hasPoolBalance && feeStatus.hasBalance;
    }).map(feeStatus => {
      return {
        fee: feeStatus,
        amount: feeStatus.fee.getAmount() / Math.pow(10, feeStatus.fee.precision),
        asset: bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAsset(feeStatus.fee.asset_id)
      };
    });
  }

  _checkFeeAssets() {
    // get account balances, check is each balance available to pay fee
    // for limit_order, filter only available assets and put it to local state
    this._getAccountAssetsFeeStatus().then(feeStatuses => {
      let assets = this._filterFeeStatuses(feeStatuses);

      this.setState({
        feeAssets: assets
      });
    });
  }

  _getAccountAssetsFeeStatus() {
    const {
      currentAccount
    } = this.props;

    const {
      orderCount
    } = this._getFormValues();

    if (!currentAccount || !currentAccount.get || !currentAccount.get("balances")) {
      return false;
    }

    return new Promise(resolve => {
      let promises = [];
      currentAccount.get("balances").forEach(balance => {
        let balanceObj = bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getObject(balance);
        let promise = (0,_lib_common_trxHelper__WEBPACK_IMPORTED_MODULE_11__.checkFeeStatusAsync)({
          accountID: currentAccount.get("id"),
          feeID: balanceObj.get("asset_type"),
          type: "limit_order_create",
          operationsCount: orderCount
        });
        promises.push(promise);
      });
      Promise.all(promises).then(feesStatuses => {
        resolve(feesStatuses);
      });
    });
  }

  _getFee() {
    const formValues = this._getFormValues();

    let amount = 0;

    if (formValues && formValues.feeCurrency) {
      this.state.feeAssets.forEach(feeAsset => {
        if (feeAsset && feeAsset.asset && feeAsset.asset.get("symbol") === formValues.feeCurrency) {
          amount = feeAsset.amount;
        }
      });
    }

    return amount;
  }

  _getMarketFee() {
    const formValues = this._getFormValues();

    const base = this.props.baseAsset;
    const quote = this.props.quoteAsset;
    const quantity = Number(this._getTotal());
    const action = formValues.action;
    const amount = Number(formValues.amount);
    if (isNaN(quantity)) return null;
    let asset = null;
    if (action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.SELL) asset = base;
    if (action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.BUY) asset = quote;
    if (!asset || !asset.get || !asset.getIn) return null;
    const maxMarketFee = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__.Asset({
      amount: asset.getIn(["options", "max_market_fee"]),
      asset_id: asset.get("asset_id"),
      precision: asset.get("precision")
    });

    const marketFeePercent = this._getMarketFeePercentage();

    if (action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.BUY) return Math.min(maxMarketFee.getAmount({
      real: true
    }), amount / 100 * marketFeePercent).toFixed(maxMarketFee.precision);
    return !quantity ? 0 : Math.min(maxMarketFee.getAmount({
      real: true
    }), quantity / 100 * marketFeePercent).toFixed(maxMarketFee.precision);
  }

  _getMarketFeePercentage() {
    const {
      action
    } = this._getFormValues();

    const base = this.props.baseAsset;
    const quote = this.props.quoteAsset;
    let asset = null;
    if (action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.SELL) asset = base;
    if (action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.BUY) asset = quote;
    return Number(asset.getIn(["options", "market_fee_percent"]) / 100);
  }

  _getTotal() {
    const formValues = this._getFormValues();

    const amount = Number(formValues.amount);
    const priceLower = Number(formValues.priceLower);
    const priceUpper = Number(formValues.priceUpper);
    const orderCount = Number(formValues.orderCount);

    const isCorrect = value => !isNaN(value);

    if (!isCorrect(priceLower) || !isCorrect(priceUpper) || !isCorrect(amount) || !isCorrect(orderCount) || orderCount <= 1 || orderCount <= 0 || priceLower >= priceUpper) return 0;
    const step = (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseDivide)((0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseMinus)(priceUpper, priceLower), (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseMinus)(orderCount, 1));
    const amountPerOrder = (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseDivide)(amount, orderCount);
    let total = 0;

    for (let i = 0; i < orderCount; i += 1) {
      // total += amountPerOrder * (priceLower + step * i);
      total = (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseAdd)(total, (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseMultiply)(amountPerOrder, (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseAdd)(priceLower, (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseMultiply)(step, i))));
    }

    return total;
  }

  _getQuantityFromTotal(total) {
    const formValues = this._getFormValues();

    const priceLower = Number(formValues.priceLower);
    const priceUpper = Number(formValues.priceUpper);
    const orderCount = Number(formValues.orderCount);

    const isCorrect = value => !isNaN(value);

    if (!isCorrect(priceLower) || !isCorrect(priceUpper) || !isCorrect(total) || !isCorrect(orderCount) || orderCount <= 0 || priceLower >= priceUpper) return 0;
    const step = (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseDivide)((0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseMinus)(priceUpper, priceLower), (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseMinus)(orderCount, 1));
    let sum = 0;

    for (let i = 0; i < orderCount; i += 1) {
      // sum + ((priceLower + step * i) / orderCount)
      sum = (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseAdd)(sum, Number((0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseDivide)((0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseAdd)(priceLower, (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseMultiply)(step, i)), orderCount)));
    }

    return (0,_services_Math__WEBPACK_IMPORTED_MODULE_13__.preciseDivide)(total, sum);
  }

  _getPreviewDataSource() {
    const formValues = this._getFormValues();

    const dataSource = [];
    const action = formValues.action;
    const amount = Number(formValues.amount);
    const priceLower = Number(formValues.priceLower);
    const priceUpper = Number(formValues.priceUpper);
    const orderCount = Number(formValues.orderCount);

    const isCorrect = value => !isNaN(value);

    if (!isCorrect(priceLower) || !isCorrect(priceUpper) || !isCorrect(amount) || !isCorrect(orderCount) || orderCount <= 0 || priceLower >= priceUpper) return [];
    const step = ((priceUpper - priceLower) / (orderCount - 1)).toFixed(6);
    const amountPerOrder = amount / orderCount;

    for (let i = 0; i < orderCount; i += 1) {
      dataSource.push({
        quote: amountPerOrder.toFixed(6),
        base: (amountPerOrder * (priceLower + step * i)).toFixed(6),
        price: (priceLower + step * i).toFixed(6)
      });
    }

    return action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.BUY ? dataSource.reverse() : dataSource;
  }

  getDatePickerRef = node => {
    this.datePricker = node;
  };

  handleClickBalance() {
    if (this.props.type === "bid") {
      this.props.form.setFieldsValue({
        amount: this._getQuantityFromTotal(this.props.baseAssetBalance)
      });
    } else {
      this.props.form.setFieldsValue({
        amount: this.props.quoteAssetBalance
      });
    }
  }

  handleCurrentPriceClick() {
    this.props.form.setFieldsValue({
      priceLower: this.props.currentPrice
    });
  }

  onExpirationSelectChange = e => {
    if (e.target.value === "SPECIFIC") {
      this.datePricker.picker.handleOpenChange(true);
    } else {
      this.datePricker.picker.handleOpenChange(false);
    }

    this.props.onExpirationTypeChange(e);
  };
  onExpirationSelectClick = e => {
    if (e.target.value === "SPECIFIC") {
      if (this.firstClick) {
        this.secondClick = true;
      }

      this.firstClick = true;

      if (this.secondClick) {
        this.datePricker.picker.handleOpenChange(true);
        this.firstClick = false;
        this.secondClick = false;
      }
    }
  };
  onExpirationSelectBlur = () => {
    this.firstClick = false;
    this.secondClick = false;
  };

  render() {
    const {
      type,
      quoteAsset,
      baseAsset,
      expirationCustomTime
    } = this.props;
    const isBid = type === "bid";
    const quote = quoteAsset;
    const base = baseAsset;
    const {
      getFieldDecorator
    } = this.props.form;
    const marketFeeSymbol = isBid ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: this.props.quoteAsset.get("symbol")
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: this.props.baseAsset.get("symbol")
    });
    const quantitySymbol = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: this.props.quoteAsset.get("symbol")
    });
    const totalSymbol = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: this.props.baseAsset.get("symbol")
    });
    const priceSymbol = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dataPlace: "right",
      name: baseAsset.get("symbol")
    }), "\xA0/\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dataPlace: "right",
      name: quoteAsset.get("symbol")
    }));
    const formItemProps = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 16,
        offset: 2
      }
    };
    const actionRadio = getFieldDecorator("action", {
      initialValue: isBid ? _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.BUY : _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.SELL
    })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Radio.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Radio, {
      value: _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.BUY
    }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("scaled_orders.action.buy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Radio, {
      value: _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.SELL
    }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("scaled_orders.action.sell"))));
    const priceLowerInput = getFieldDecorator("priceLower", {
      validateFirst: true,
      validateTrigger: "onBlur",
      rules: [_services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.required(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.number(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.min({
        min: 0,
        name: "Price",
        higherThan: true
      })]
    })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Input, {
      placeholder: "0.0",
      style: {
        width: "100%"
      },
      autoComplete: "off",
      addonAfter: priceSymbol
    }));

    const formValues = this._getFormValues();

    const priceLower = Number(formValues && formValues.priceLower || 0);
    const priceUpperInput = getFieldDecorator("priceUpper", {
      validateFirst: true,
      validateTrigger: "onBlur",
      rules: [_services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.required(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.number(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.min({
        min: priceLower,
        name: "Price",
        higherThan: true
      })]
    })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Input, {
      placeholder: "0.0",
      style: {
        width: "100%"
      },
      autoComplete: "off",
      addonAfter: priceSymbol
    }));
    const feeCurrencySelect = getFieldDecorator("feeCurrency", {
      initialValue: bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAsset("1.3.0") && bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAsset("1.3.0").get && bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAsset("1.3.0").get("symbol")
    })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Select, {
      showSearch: true,
      dropdownMatchSelectWidth: false,
      style: {
        minWidth: "80px",
        maxWidth: "120px"
      }
    }, this.state.feeAssets && this.state.feeAssets.map && this.state.feeAssets.map(feeAsset => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Select.Option, {
        key: feeAsset.asset.get("symbol"),
        value: `${feeAsset.asset.get("symbol")}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: feeAsset.asset.get("symbol"),
        noTip: true
      }));
    })));
    const feeInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Input, {
      disabled: true,
      placeholder: "0.0",
      style: {
        width: "100%"
      },
      autoComplete: "off",
      addonAfter: feeCurrencySelect,
      value: this._getFee()
    });
    const marketFeeInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Input, {
      disabled: true,
      style: {
        width: "100%"
      },
      autoComplete: "off",
      addonAfter: marketFeeSymbol,
      value: this._getMarketFee()
    });
    const totalInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Input, {
      disabled: true,
      style: {
        width: "100%"
      },
      autoComplete: "off",
      addonAfter: totalSymbol,
      value: this._getTotal()
    });
    const totalInputValidation = _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.balance({
      balance: this.props.baseAssetBalance,
      symbol: this.props.baseAsset.get("symbol")
    });
    const totalInputValidator = totalInputValidation.validator(null, this._getTotal(), a => a === undefined);
    const totalInputHelp = isBid && !totalInputValidator ? totalInputValidation.message : null;
    const totalInputStatus = isBid && !totalInputValidator ? "error" : "";
    const quantityRules = [_services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.required(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.number(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.min({
      min: 0,
      higherThan: true,
      name: "Quantity"
    })];

    if (!isBid) {
      quantityRules.push(_services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.balance({
        balance: this.props.quoteAssetBalance,
        symbol: this.props.quoteAsset.get("symbol")
      }));
    }

    const quantityInput = getFieldDecorator("amount", {
      validateFirst: true,
      validateTrigger: "onBlur",
      rules: quantityRules
    })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Input, {
      placeholder: "0.0",
      style: {
        width: "100%"
      },
      autoComplete: "off",
      addonAfter: quantitySymbol
    }));
    const orderCountInput = getFieldDecorator("orderCount", {
      validateFirst: true,
      rules: [_services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.required(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.number(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__.Validation.Rules.min({
        min: 1,
        name: "Orders Count",
        higherThan: true
      })]
    })( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Input, {
      style: {
        width: "100%"
      },
      placeholder: "0",
      autoComplete: "off",
      addonAfter: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("scaled_orders.order_s")
    }));
    const lastPriceLabel = counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate(isBid ? "exchange.lowest_ask" : "exchange.highest_bid");
    let expirationTip;

    if (this.props.expirationType !== "SPECIFIC") {
      expirationTip = this.props.expirations[this.props.expirationType].get();
    }

    const expirationsOptionsList = Object.keys(this.props.expirations).map(key => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: key,
      key: key
    }, key === "SPECIFIC" && expirationCustomTime !== "Specific" ? moment__WEBPACK_IMPORTED_MODULE_1___default()(expirationCustomTime).format("Do MMM YYYY hh:mm A") : this.props.expirations[key].title));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "buy-sell-container",
      style: {
        padding: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form, {
      className: "order-form",
      layout: "horizontal",
      hideRequiredMark: true,
      style: {
        padding: "8px 15px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.Item, _extends({}, formItemProps, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("scaled_orders.price_lower")
    }), priceLowerInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.Item, _extends({}, formItemProps, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("scaled_orders.price_upper")
    }), priceUpperInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.Item, _extends({}, formItemProps, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("scaled_orders.quantity")
    }), quantityInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.Item, _extends({
      className: "fixmarket-fee"
    }, formItemProps, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("scaled_orders.order_count")
    }), orderCountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.Item, _extends({}, formItemProps, {
      help: totalInputHelp,
      validateStatus: totalInputStatus,
      label: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("scaled_orders.total")
    }), totalInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.Item, _extends({}, formItemProps, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("scaled_orders.fee")
    }), feeInput), this._isMarketFeeVisible() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.Item, _extends({
      className: "fixmarket-fee"
    }, formItemProps, {
      label: `${counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("scaled_orders.market_fee")} ${this._getMarketFeePercentage()}%`
    }), marketFeeInput) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.Item, _extends({
      label: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("exchange.balance")
    }, formItemProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        borderBottom: "#A09F9F 1px dotted",
        cursor: "pointer"
      },
      onClick: this.handleClickBalance
    }, !isBid ? this.props.quoteAssetBalance : this.props.baseAssetBalance, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: !isBid ? quote.get("symbol") : base.get("symbol"),
      noTip: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.Item, _extends({
      className: "fixmarket-fee",
      label: lastPriceLabel
    }, formItemProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        borderBottom: "#A09F9F 1px dotted",
        cursor: "pointer"
      },
      onClick: this.handleCurrentPriceClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_12__["default"], {
      price: this.props.currentPrice,
      quote: quote,
      base: base
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: base.get("symbol"),
      noTip: true
    }), "/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: quote.get("symbol"),
      noTip: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.Item, _extends({
      label: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("transaction.expiration")
    }, formItemProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "expiration-datetime-picker scaled-orders",
      style: {
        marginTop: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_14__["default"], {
      ref: this.getDatePickerRef,
      className: "expiration-datetime-picker--hidden",
      showTime: true,
      showToday: false,
      disabledDate: current => current < moment__WEBPACK_IMPORTED_MODULE_1___default()().add(59, "minutes"),
      value: expirationCustomTime !== "Specific" ? expirationCustomTime : moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, "hour"),
      onChange: this.props.onExpirationCustomChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "cursor-pointer",
      style: {
        marginTop: "5px"
      },
      onChange: this.onExpirationSelectChange,
      onClick: this.onExpirationSelectClick,
      onBlur: this.onExpirationSelectBlur,
      "data-tip": expirationTip && moment__WEBPACK_IMPORTED_MODULE_1___default()(expirationTip).format("Do MMM YYYY hh:mm A"),
      value: this.props.expirationType
    }, expirationsOptionsList))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: isBid ? "bid" : "ask",
      style: {
        float: "right"
      },
      onClick: this.props.handleSubmit,
      type: "primary",
      disabled: !this.isFormValid()
    }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate(isBid ? "scaled_orders.action.buy" : "scaled_orders.action.sell"))));
  }

}

ScaledOrderForm = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Form.create({})(ScaledOrderForm);

class ScaledOrderTab extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.saveFormRef = this.saveFormRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.baseAsset && prevProps.baseAsset && this.props.baseAsset.get && prevProps.baseAsset.get && this.props.baseAsset.get("id") !== prevProps.baseAsset.get("id") && this.formRef && this.formRef.props && this.formRef.props.form) {
      this.formRef.props.form.resetFields();
    }

    if (this.props.lastClickedPrice && this.props.lastClickedPrice !== prevProps.lastClickedPrice) {
      if (this.formRef && this.formRef.props && this.formRef.props.form && this.formRef.props.form.setFieldsValue) {
        this.formRef.props.form.setFieldsValue({
          priceLower: Number(this.props.lastClickedPrice)
        });
      }
    }
  }

  prepareOrders(values) {
    const orders = [];
    const amount = Number(values.amount);
    const priceLower = Number(values.priceLower);
    const priceUpper = Number(values.priceUpper);
    const orderCount = Number(values.orderCount);
    let expirationTime = null;

    if (this.props.expirationType === "SPECIFIC") {
      expirationTime = this.props.expirations[this.props.expirationType].get(this.props.type);
    } else {
      expirationTime = this.props.expirations[this.props.expirationType].get(this.props.type);
    }

    const isCorrect = value => !isNaN(value);

    if (!isCorrect(priceLower) || !isCorrect(priceUpper) || !isCorrect(amount) || !isCorrect(orderCount) || orderCount <= 0 || priceLower >= priceUpper) return [];
    const step = ((priceUpper - priceLower) / (orderCount - 1)).toPrecision(5);
    const amountPerOrder = amount / orderCount;
    const sellAsset = values.action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.SELL ? this.props.quoteAsset : this.props.baseAsset;
    const buyAsset = values.action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.BUY ? this.props.quoteAsset : this.props.baseAsset;

    const sellAmount = i => {
      let scaledAmount = amountPerOrder * (priceLower + step * i);
      return values.action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.BUY ? Number(scaledAmount.toPrecision(5)) * Math.pow(10, sellAsset.get("precision")) : Number(amountPerOrder.toPrecision(5)) * Math.pow(10, sellAsset.get("precision"));
    };

    const buyAmount = i => {
      let scaledAmount = amountPerOrder * (priceLower + step * i);
      return values.action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__.SCALED_ORDER_ACTION_TYPES.SELL ? Number(scaledAmount.toPrecision(5)) * Math.pow(10, buyAsset.get("precision")) : Number(amountPerOrder.toPrecision(5)) * Math.pow(10, buyAsset.get("precision"));
    };

    for (let i = 0; i < orderCount; i += 1) {
      orders.push({
        for_sale: new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__.Asset({
          asset_id: sellAsset.get("id"),
          precision: sellAsset.get("precision"),
          amount: sellAmount(i)
        }),
        to_receive: new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__.Asset({
          asset_id: buyAsset.get("id"),
          precision: buyAsset.get("precision"),
          amount: buyAmount(i)
        }),
        expirationTime: expirationTime
      });
    }

    this.props.createScaledOrder(orders, bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAsset(values.feeCurrency).get("id"));
  }

  handleSubmit() {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) return;
      this.prepareOrders(values);
    });
  }

  handleCancel() {
    this.props.hideModal();
  }

  saveFormRef(ref) {
    this.formRef = ref;
  }

  _getBalanceByAssetId(assetId, precision) {
    let balance = 0;
    let balances = this.props.currentAccount.get("balances");

    if (balances.get(assetId) !== undefined) {
      let balanceObj = bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getObject(balances.get(assetId));
      balance = balanceObj.get("balance") / Math.pow(10, precision);
    }

    return balance;
  }

  render() {
    let baseAssetBalance = this._getBalanceByAssetId(this.props.baseAsset.get("id"), this.props.baseAsset.get("precision"));

    let quoteAssetBalance = this._getBalanceByAssetId(this.props.quoteAsset.get("id"), this.props.quoteAsset.get("precision"));

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScaledOrderForm, _extends({}, this.props, {
      wrappedComponentRef: this.saveFormRef,
      baseAssetBalance: baseAssetBalance,
      quoteAssetBalance: quoteAssetBalance,
      handleSubmit: this.handleSubmit
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScaledOrderTab);

/***/ }),

/***/ 2743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2745);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2746);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(656);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(657);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1816);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);


const TradingView = __webpack_require__(2744);








 // import MarketsStore from "stores/MarketsStore";

class TradingViewPriceChart extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();
    this.state = {
      showSaveModal: false,
      showLoadModal: false,
      error: false
    };
    this.layoutName = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    this.hideModal = this.hideModal.bind(this);
    this.resetError = this.resetError.bind(this);
    this.loadLastChart = this.loadLastChart.bind(this);
  }

  loadTradingView(props) {
    const {
      dataFeed
    } = props;
    let themeColors = (assets_colors__WEBPACK_IMPORTED_MODULE_1___default())[props.theme];
    const that = this;
    if (!dataFeed) return;
    if (!!this.tvWidget) return;
    if (false) {}
    dataFeed.update({
      resolutions: props.buckets,
      ticker: props.quoteSymbol + "_" + props.baseSymbol,
      interval: (0,_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__.getResolutionsFromBuckets)([props.bucketSize])[0]
    });
    let disabled_features = ["symbol_info", "symbol_search_hot_key", "border_around_the_chart", "header_symbol_search", "header_compare", "header_saveload", "header_settings"];
    let enabled_features = [];

    if (this.props.mobile || !this.props.chartZoom) {
      disabled_features.push("chart_scroll");
      disabled_features.push("chart_zoom");
    }

    if (this.props.mobile || !this.props.chartTools) {
      disabled_features.push("left_toolbar");
      disabled_features.push("chart_crosshair_menu");
      disabled_features.push("chart_events");
      disabled_features.push("footer_share_buttons");
      disabled_features.push("footer_screenshot");
      disabled_features.push("timeframes_toolbar");
      disabled_features.push("footer_publish_idea_button");
      disabled_features.push("caption_buttons_text_if_possible");
      disabled_features.push("line_tool_templates");
      disabled_features.push("widgetbar_tabs");
      disabled_features.push("support_manage_drawings");
      disabled_features.push("support_multicharts");
      disabled_features.push("right_bar_stays_on_scroll");
      disabled_features.push("charts_auto_save");
      disabled_features.push("edit_buttons_in_legend");
      disabled_features.push("context_menus");
      disabled_features.push("control_bar");
      disabled_features.push("header_fullscreen_button");
      disabled_features.push("header_widget");
      disabled_features.push("symbollist_context_menu");
      disabled_features.push("show_pro_features");
    } else {
      enabled_features.push("study_templates");
      enabled_features.push("keep_left_toolbar_visible_on_small_screens");
    }

    if (false) {}
    if (false) {} // resolution / interval: length of one bar
    // frame: total timeframe shown on the chart
    // (in below list, text is frame)

    const allTimes = props.buckets.map(bucket => {
      return {
        text: (0,_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__.getResolutionsFromBuckets)([bucket * 250], true)[0],
        resolution: (0,_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__.getResolutionsFromBuckets)([bucket])[0]
      };
    });
    this.tvWidget = new TradingView.widget({
      fullscreen: false,
      symbol: props.quoteSymbol + "_" + props.baseSymbol,
      interval: (0,_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__.getResolutionsFromBuckets)([props.bucketSize])[0],
      timeframe: (0,_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__.getResolutionsFromBuckets)([props.bucketSize * 250], true)[0],
      time_frames: allTimes,
      library_path: `${ false ? 0 : ""}/charting_library/`,
      datafeed: dataFeed,
      container_id: "tv_chart",
      charts_storage_url: "https://saveload.tradingview.com",
      charts_storage_api_version: "1.1",
      client_id: "tradingview.com",
      user_id: "public_user_id",
      autosize: true,
      locale: props.locale,
      timezone: (0,_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__.getTVTimezone)(),
      // toolbar_bg: themeColors.bgColor,
      // theme: (props.theme == "darkTheme") ? "dark" : "light",
      overrides: {
        "paneProperties.background": themeColors.bgColor,
        "paneProperties.horzGridProperties.color": themeColors.axisLineColor,
        "paneProperties.vertGridProperties.color": themeColors.axisLineColor // "scalesProperties.lineColor": themeColors.axisLineColor,
        // "scalesProperties.textColor": themeColors.textColor,
        // "scalesProperties.backgroundColor": themeColors.bgColor,
        // "mainSeriesProperties.candleStyle.upColor": "#",
        // "mainSeriesProperties.candleStyle.downColor": "#",
        // "mainSeriesProperties.hollowCandleStyle.upColor": "#",
        // "mainSeriesProperties.hollowCandleStyle.downColor": "#",
        // "mainSeriesProperties.haStyle.upColor": "#",
        // "mainSeriesProperties.haStyle.downColor": "#"

      },
      custom_css_url: props.theme + ".css",
      enabled_features: enabled_features,
      disabled_features: disabled_features,
      debug: false,
      preset: this.props.mobile ? "mobile" : ""
    });
    this.tvWidget.onChartReady(() => {
      let widget = this.tvWidget;
      if (false) {}
      if (false) {}

      if (!this.props.mobile && this.props.chartTools) {
        widget.headerReady().then(() => {
          if (false) {}
          const loadButton = this.tvWidget.createButton();
          loadButton.setAttribute("title", counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.load_custom_charts"));
          loadButton.classList.add("apply-common-tooltip");
          loadButton.addEventListener("click", () => {
            that.setState({
              showLoadModal: true
            });
          });
          loadButton.innerHTML = `<span>${counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.chart_load")}</span>`;
          const saveButton = this.tvWidget.createButton();
          saveButton.setAttribute("title", counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.save_custom_charts"));
          saveButton.classList.add("apply-common-tooltip");
          saveButton.addEventListener("click", () => {
            that.setState({
              showSaveModal: true
            });
          });
          saveButton.innerHTML = `<span>${counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.chart_save")}</span>`;
        });
      }

      dataFeed.update({
        onMarketChange: this._setSymbol.bind(this)
      });
      this.loadLastChart();
    });
    this._onWheel = this._onWheel.bind(this);
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (!np.marketReady) return;

    if (!this.props.dataFeed && np.dataFeed) {
      this.loadTradingView(np);
    }
  }

  _setSymbol(ticker) {
    if (this.tvWidget) {
      this.tvWidget.chart().removeAllShapes();
      this.loadLastChart();
      this.tvWidget.setSymbol(ticker, (0,_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__.getResolutionsFromBuckets)([this.props.bucketSize])[0]);
    }
  }

  componentDidMount() {
    this.loadTradingView(this.props); // continue investigating how to disable mouse wheel, here are the containted docs
    // document.getElementById("tv_chart").children[0].contentWindow
    // document.getElementById("tv_chart").children[0].contentDocument
  }

  componentWillUnmount() {
    this.props.dataFeed.clearSubs();
  }

  shouldComponentUpdate(np, state) {
    return state.showLoadModal !== this.state.showLoadModal || state.showSaveModal !== this.state.showSaveModal || np.chartHeight !== this.props.chartHeight || this.props.charts.size !== np.charts.size || !this.tvWidget || np.marketReady;
  }

  _onWheel(e) {
    console.log("Test wheel interception");
  }

  onSubmitConfirmation(e) {
    const {
      layoutName
    } = this;
    const error = this.props.charts.some(chart => chart.key === layoutName.current.state.value && chart.symbol === this.props.quoteSymbol + "_" + this.props.baseSymbol);
    const that = this;

    if (!error) {
      this.resetError();
      this.tvWidget.save(function (object) {
        let chart = {};
        chart.key = layoutName.current.state.value || "";
        chart.object = object;
        chart.name = layoutName.current.state.value || "";
        chart.symbol = that.props.quoteSymbol + "_" + that.props.baseSymbol;
        chart.modified = new Date().toLocaleDateString("en-US");
        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].addChartLayout(chart);
        that.setState({
          showSaveModal: false
        }, () => {
          if (that.layoutName.current.state) {
            that.layoutName.current.state.value = null;
          }
        });
      });
    } else {
      this.setState({
        error
      });
    }
  }

  hideModal() {
    this.resetError();
    this.setState({
      showSaveModal: false,
      showLoadModal: false
    });
  }

  handleDelete(name) {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].deleteChartLayout(name);
  }

  resetError() {
    this.setState({
      error: false
    });
  }

  loadLastChart() {
    const {
      charts,
      quoteSymbol,
      baseSymbol
    } = this.props;
    const chart = charts.toArray().filter(chart => chart.symbol === quoteSymbol + "_" + baseSymbol && chart.enabled);
    chart[0] && this.tvWidget.load(chart[0].object);
  }

  render() {
    const {
      charts,
      quoteSymbol,
      baseSymbol
    } = this.props;
    const {
      error
    } = this.state;

    let _error = error ? "has-error" : "";

    let dataSource = charts.toArray().filter(chart => chart.symbol === quoteSymbol + "_" + baseSymbol);
    const columns = [{
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.layout_name"),
      dataIndex: "name",
      key: "name"
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.modified"),
      dataIndex: "modified",
      key: "modified"
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.actions"),
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          style: {
            width: "32px"
          },
          onClick: this.handleDelete.bind(this, record.name),
          type: "delete"
        });
      }
    }];

    const onRow = record => {
      return {
        onClick: event => {
          if (event.target.localName === "td") {
            this.hideModal();
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].addChartLayout(record);
            this.tvWidget.load(record.object);
          } else if (event.currentTarget.parentElement.childElementCount === 1) this.hideModal();
        }
      };
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "small-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "exchange-bordered",
      style: {
        height: this.props.chartHeight + "px"
      },
      id: "tv_chart"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.load_chart_layout"),
      closable: false,
      visible: this.state.showLoadModal,
      footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: "cancel",
        onClick: this.hideModal
      }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("modal.close"))]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Table, {
      dataSource: dataSource || [],
      columns: columns,
      onRow: onRow
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.save_new_chart_layout"),
      closable: false,
      visible: this.state.showSaveModal,
      footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: "submit",
        type: "primary",
        onClick: this.onSubmitConfirmation.bind(this)
      }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("modal.save")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
        key: "cancel",
        onClick: this.hideModal
      }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("modal.close"))]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: _error
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "exchange.chart_error"
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: _error,
      style: {
        borderBottom: "#A09F9F 1px dotted"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Input, {
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("exchange.enter_chart_layout_name"),
      ref: this.layoutName,
      onChange: this.resetError,
      onPressEnter: this.onSubmitConfirmation.bind(this)
    })))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_7__.connect)(TradingViewPriceChart, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
  },

  getProps() {
    return {
      charts: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().chartLayouts
    };
  }

}));

/***/ }),

/***/ 2728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarketHistoryView": () => (/* binding */ MarketHistoryView),
/* harmony export */   "MarketHistoryViewRow": () => (/* binding */ MarketHistoryViewRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2708);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2088);
/* harmony import */ var _Utility_BlockDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2729);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2692);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2707);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_9__);











function MarketHistoryViewRow({
  fill,
  base,
  quote
}) {
  const isMarket = fill.id.indexOf("5.0") !== -1 ? true : false;
  const timestamp = isMarket ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
    title: fill.time.toString(),
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tooltip",
    style: {
      whiteSpace: "nowrap"
    }
  }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().localize(fill.time, {
    type: "date",
    format: browser_locale__WEBPACK_IMPORTED_MODULE_9___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history"
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BlockDate__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "td",
    block_number: fill.block,
    tooltip: true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: fill.className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    price: fill.getPrice(),
    base: base,
    quote: quote
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, fill.amountToReceive()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, fill.amountToPay()), timestamp);
}

class MarketHistoryView extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      className,
      innerClass,
      innerStyle,
      noHeader,
      headerStyle,
      activeTab,
      quoteSymbol,
      baseSymbol,
      tinyScreen,
      totalRows,
      historyRows,
      showAll
    } = this.props;
    const emptyRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: {
        textAlign: "center",
        lineHeight: 4,
        fontStyle: "italic"
      },
      colSpan: "5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.no_trades"
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: innerClass,
      style: innerStyle
    }, noHeader ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: headerStyle,
      className: "exchange-content-header"
    }, activeTab === "my_history" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "exchange.my_history"
    }) : null, activeTab === "history" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "exchange.history"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block shrink left-orderbook-header market-right-padding-only"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table table-no-padding order-table text-left fixed-table market-right-padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "header-sub-title",
      content: "exchange.price"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "header-sub-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__["default"], {
      dataPlace: "top",
      name: quoteSymbol
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "header-sub-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__["default"], {
      dataPlace: "top",
      name: baseSymbol
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "header-sub-title",
      content: "explorer.block.date"
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "table-container grid-block market-right-padding-only no-overflow",
      ref: "history",
      style: {
        //minHeight: !tinyScreen ? 260 : 0,
        maxHeight: 260,
        overflow: "hidden",
        lineHeight: "13px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table order-table no-stripes table-hover fixed-table text-right no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: "historyTransition",
      component: "tbody",
      transitionName: "newrow",
      className: "orderbook"
    }, !!historyRows && historyRows.length > 0 ? historyRows : emptyRow))), historyRows && totalRows > 11 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "orderbook-showall"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: e => this.props.onSetShowAll(e)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: showAll ? "exchange.hide" : "exchange.show_all_trades",
      rowcount: totalRows
    }))) : null));
  }

}



/***/ }),

/***/ 2719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarketsOrderView": () => (/* binding */ MarketsOrderView),
/* harmony export */   "MarketOrdersRowView": () => (/* binding */ MarketOrdersRowView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(607);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2692);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2088);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);






const rightAlign = {
  textAlign: "right"
};


function MarketOrdersViewTableHeader({
  baseSymbol,
  quoteSymbol,
  selected,
  onCancelToggle
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      width: "6%",
      textAlign: "center"
    }
  }, onCancelToggle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
    title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.cancel_order_select_all"),
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
    className: "order-cancel-toggle",
    checked: selected,
    onChange: onCancelToggle
  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: rightAlign
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "header-sub-title",
    content: "exchange.price"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: rightAlign
  }, baseSymbol ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "header-sub-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dataPlace: "top",
    name: quoteSymbol
  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: rightAlign
  }, baseSymbol ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "header-sub-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dataPlace: "top",
    name: baseSymbol
  })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: rightAlign
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "header-sub-title",
    content: "transaction.expiration"
  }))));
}

MarketOrdersViewTableHeader.defaultProps = {
  quoteSymbol: null,
  baseSymbol: null
};

function MarketOrdersRowView({
  order,
  selected,
  base,
  quote,
  onCheckCancel
}) {
  const isBid = order.isBid();
  const isCall = order.isCall();
  const tdClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    key: order.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "text-center",
    style: {
      width: "6%"
    }
  }, isCall ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
    className: "orderCancel",
    checked: selected,
    onChange: onCheckCancel
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: tdClass,
    style: {
      paddingLeft: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    price: order.getPrice(),
    base: base,
    quote: quote
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!isBid ? "amountForSale" : "amountToReceive"]().getAmount({
    real: true
  }), quote.get("precision")), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!isBid ? "amountToReceive" : "amountForSale"]().getAmount({
    real: true
  }), base.get("precision")), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
    title: order.expiration.toLocaleString()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      textAlign: "right",
      whiteSpace: "nowrap"
    }
  }, isCall ? null : counterpart__WEBPACK_IMPORTED_MODULE_1___default().localize(new Date(order.expiration), {
    type: "date",
    format: "short_custom"
  })))));
}

class MarketsOrderView extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      // Styles and Classes
      style,
      className,
      innerClass,
      innerStyle,
      headerStyle,
      // Bools
      noHeader,
      isSelected,
      tinyScreen,
      // Strings
      activeTab,
      baseSymbol,
      quoteSymbol,
      // Containers
      contentContainer,
      footerContainer,
      // Functions
      onCancelToggle
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: style,
      key: "open_orders",
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: innerClass,
      style: innerStyle
    }, noHeader ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: headerStyle,
      className: "exchange-content-header"
    }, activeTab == "my_orders" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.my_orders"
    }) : null, activeTab == "open_settlement" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.settle_orders"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block shrink left-orderbook-header market-right-padding-only"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table order-table text-right fixed-table market-right-padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MarketOrdersViewTableHeader, {
      baseSymbol: baseSymbol,
      quoteSymbol: quoteSymbol,
      selected: isSelected,
      onCancelToggle: activeTab == "my_orders" ? onCancelToggle : null
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "table-container grid-block market-right-padding-only no-overflow",
      ref: "container",
      style: {
        overflow: "hidden",
        //minHeight: tinyScreen ? 260 : 0,
        maxHeight: 260,
        lineHeight: "13px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table order-table table-highlight-hover table-hover no-stripes text-right fixed-table market-right-padding"
    }, contentContainer)), footerContainer));
  }

}



/***/ }),

/***/ 2756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2757);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(665);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2515);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1962);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1963);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(437);








let {
  operations
} = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainTypes;
let ops = Object.keys(operations);

class Notifier extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainAccount.isRequired
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.account && nextProps.account.size && this.props.account && this.props.account.get("history")) {
      let ch = this.props.account.get("history") && this.props.account.get("history").first() ? this.props.account.get("history").first().toJS() : null;
      let nh = nextProps.account.get("history") && nextProps.account.get("history").first() ? nextProps.account.get("history").first().toJS() : null;

      if (nh && ch) {
        // Only trigger notifications for order fills
        if (ops[nh.op[0]] === "fill_order" && (!ch && nh.id || nh.id !== ch.id)) {
          react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default().publish("account-notify", "open");
          setTimeout(function () {
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default().publish("account-notify", "close");
          }, 5000);
        }
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.account || !this.props.account) return false;
    return !immutable__WEBPACK_IMPORTED_MODULE_4___default().is(nextProps.account.get("history"), this.props.account.get("history")) || !immutable__WEBPACK_IMPORTED_MODULE_4___default().is(nextProps.account, this.props.account);
  }

  render() {
    let {
      account
    } = this.props;

    if (!account) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    }

    let trx, info;

    if (this.props.account.get("history") && this.props.account.get("history").size) {
      trx = this.props.account.get("history").first().toJS();

      if (trx) {
        info = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: trx.id,
          op: trx.op,
          result: trx.result,
          block: trx.block_num,
          current: account.get("id"),
          hideDate: true,
          hideFee: true
        });
      }
    }

    if (!trx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1___default().Static), {
      id: "account-notify",
      title: null,
      image: "",
      wrapperElement: "div"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, info)));
  }

}

Notifier = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"])(Notifier);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notifier);

/***/ }),

/***/ 2755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(589);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1944);
/* harmony import */ var _Notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2756);





class NotifierContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(alt_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
      inject: {
        account: () => {
          return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().currentAccount;
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Notifier__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotifierContainer);

/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InvoiceRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2649);
/* harmony import */ var _InvoicePay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2651);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2654);
/* harmony import */ var jsonschema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2656);
/* harmony import */ var _assets_stylesheets_components_merchant_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2667);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










class Invoice extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [{
        name: "Request",
        link: "/invoice/request",
        translate: "invoice.request.title",
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InvoiceRequest__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
          validateFormat: this._validateFormat.bind(this)
        }))
      }, {
        name: "Pay",
        link: "/invoice/pay",
        translate: "invoice.pay.title",
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InvoicePay__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
          validateFormat: this._validateFormat.bind(this)
        }))
      }]
    };
  }

  _validateFormat(invoice) {
    const schema = {
      type: "object",
      properties: {
        to: {
          type: "string"
        },
        to_label: {
          type: "string"
        },
        currency: {
          type: "string"
        },
        memo: {
          type: "string"
        },
        line_items: {
          type: "array",
          items: {
            type: "object",
            properties: {
              label: {
                type: "string"
              },
              quantity: {
                type: "float",
                minimum: 1
              },
              price: {
                type: "float"
              }
            }
          }
        },
        note: {
          type: "string"
        },
        required: ["to", "currency", "line_items"]
      }
    };
    const errors = (0,jsonschema__WEBPACK_IMPORTED_MODULE_6__.validate)(invoice, schema).errors;
    return !errors.length;
  }

  componentDidMount() {
    const isTab = this.state.tabs.some(tab => tab.link === this.props.match.url);
    if (!isTab) this.props.history.push("/invoice/pay");
  }

  onTabChange(value) {
    this.props.history.push(value);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "merchant-protocol center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
      activeKey: this.props.location.pathname,
      animated: false,
      onChange: this.onTabChange.bind(this)
    }, this.state.tabs.map(tab => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Tabs.TabPane, {
        key: tab.link,
        tab: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate(tab.translate)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "padding"
      }, tab.content));
    }))));
  }

}

Invoice = (0,_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_5__.bindToCurrentAccount)(Invoice);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Invoice);

/***/ }),

/***/ 2651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2118);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(605);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2111);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2117);
/* harmony import */ var bitsharesjs_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(437);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1814);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2116);
/* harmony import */ var lzma__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2521);
/* harmony import */ var common_base58__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2650);
/* harmony import */ var common_base58__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(common_base58__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _PrintReceiptButton_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2652);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2654);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2515);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2325);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ScanOrEnterText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2655);
/* provided dependency */ var Buffer = __webpack_require__(443)["Buffer"];


















 // invoice example:
//{
//    "to" : "merchant_account_name",
//    "to_label" : "Merchant Name",
//    "currency": "TEST",
//    "memo" : "Invoice #1234",
//    "line_items" : [
//        { "label" : "Something to Buy", "quantity": 1, "price" : "1000.00" },
//        { "label" : "10 things to Buy", "quantity": 10, "price" : "1000.00" }
//    ],
//    "note" : "Something the merchant wants to say to the user",
//    "callback" : "https://merchant.org/complete"
//}
// http://localhost:8080/#/invoice/8Cv8ZjMa8XCazX37XgNhj4jNc4Z5WgZFM5jueMEs2eEvL3pEmELjAVCWZEJhj9tEG5RuinPCjY1Fi34ozb8Cg3H5YBemy9JoTRt89X1QaE76xnxWPZzLcUjvUd4QZPjCyqZNxvrpCN2mm1xVRY8FNSVsoxsrZwREMyygahYz8S23ErWPRVsfZXTwJNCCbqjWDTReL5yytTKzxyKhg4YrnntYG3jdyrBimDGBRLU7yRS9pQQLcAH4T7j8LXkTocS7w1Zj4amckBmpg5EJCMATTRhtH8RSycfiXWZConzqqzxitWCxZK846YHNh

class InvoicePay extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoice: null,
      pay_from_name: null,
      pay_from_account: null,
      pay_to_account: null,
      error: null,
      blockNum: null,
      invoiceQr: false,
      rawDataInputValue: "",
      isRawDataInputVisible: false
    };
    this.onBroadcastAndConfirm = this.onBroadcastAndConfirm.bind(this);
    this.getTotal = this.getTotal.bind(this); // this._printExampleInvoice();
  }

  _printExampleInvoice() {
    let invoice = {
      to: "sschiessl",
      to_label: "Stefan S.",
      currency: "GPH",
      memo: "Invoice #1234",
      line_items: [{
        label: "Something to Buy",
        quantity: 1,
        price: "0.1"
      }, {
        label: "10 things to Buy",
        quantity: 10,
        price: "0.02"
      }],
      note: "Something the merchant wants to say to the user"
    };
    (0,lzma__WEBPACK_IMPORTED_MODULE_8__.compress)(JSON.stringify(invoice), 9, (result, error) => {
      let a = (common_base58__WEBPACK_IMPORTED_MODULE_9___default());
      console.log(common_base58__WEBPACK_IMPORTED_MODULE_9___default().encode(Buffer.from(result)));
    });
  }

  async componentDidMount() {
    let compressed_data = common_base58__WEBPACK_IMPORTED_MODULE_9___default().decode(this.props.match.params.data);
    stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].unlisten(this.onBroadcastAndConfirm);
    stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].listen(this.onBroadcastAndConfirm);

    try {
      const data = await this.decompressRawData(compressed_data);
      await this.parseInvoiceData(data);
    } catch (e) {
      this.setState({
        isRawDataInputVisible: true
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    if (this.state.pay_from_name == null && this.props.currentAccount) {
      // check if current account has already paid
      let paymentOperation = this._findPayment();

      this.setState({
        pay_from_name: this.props.currentAccount.get("name"),
        paymentOperation
      });
    }
  }

  decompressRawData = data => {
    return new Promise((resolve, reject) => {
      (0,lzma__WEBPACK_IMPORTED_MODULE_8__.decompress)(data, (result, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };

  async parseInvoiceData(data) {
    try {
      data = common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].sanitize(data, {
        whiteList: [],
        // empty, means filter out all tags
        stripIgnoreTag: true // filter out all HTML not in the whilelist

      });
      let invoice = JSON.parse(data);

      if (this.props.validateFormat(invoice)) {
        let assetsArray = await (0,bitsharesjs_es__WEBPACK_IMPORTED_MODULE_5__.FetchChainObjects)(bitsharesjs_es__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getAsset, [invoice.currency]);
        let pay_to_account = await (0,bitsharesjs_es__WEBPACK_IMPORTED_MODULE_5__.FetchChain)("getAccount", invoice.to, undefined, {
          [invoice.to]: false
        });
        this.setState({
          invoice,
          asset: assetsArray[0],
          pay_to_account,
          pay_from_name: this.props.currentAccount.get("name"),
          error: null,
          isRawDataInputVisible: false
        }, this.getTotal);
      } else {
        this.setState({
          error: counterpart__WEBPACK_IMPORTED_MODULE_14___default().translate("invoice.invalid_format")
        });
      }
    } catch (error) {
      this.setState({
        error: error.message
      });
    }
  }

  handleRawInvoiceDataChange = e => {
    const value = e.target.value.replace(/\s/g, "");
    this.setState({
      rawDataInputValue: value
    }, async () => {
      try {
        const compressedData = common_base58__WEBPACK_IMPORTED_MODULE_9___default().decode(value);
        const decompressedData = await this.decompressRawData(compressedData);
        this.parseInvoiceData(decompressedData);
      } catch (e) {
        console.log(e);
        this.setState({
          error: e.message
        });
      }
    });
  };
  handleQrScanSuccess = async ({
    address
  }) => {
    try {
      const compressedData = common_base58__WEBPACK_IMPORTED_MODULE_9___default().decode(address);
      const decompressedData = await this.decompressRawData(compressedData);
      this.parseInvoiceData(decompressedData);
    } catch (e) {
      console.log(e);
      this.setState({
        error: e.message
      });
    }
  };

  parsePrice(price) {
    let m = price.match(/([\d\,\.\s]+)/);
    if (!m || m.length < 2) 0.0;
    return parseFloat(m[1].replace(/[\,\s]/g, ""));
  }

  _findPayment() {
    if ((0,_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_15__.hasLoaded)(this.props.currentAccount) && this.state.total_amount && this.state.pay_to_account) {
      const find_to = this.state.pay_to_account.get("id");
      const find_asset_id = this.state.asset.get("id");
      const find_amount = this.state.total_amount * Math.pow(10, this.state.asset.get("precision"));
      let transaction = null;
      this.props.currentAccount.get("history").toJS().forEach(_op => {
        const op = _op.op;

        if (op[0] == 0) {
          const from = op[1].from;
          const to = op[1].to;
          const amount = op[1].amount.amount;
          const asset_id = op[1].amount.asset_id;
          const invoice = this.state.invoice;
          console.log(find_to, to, find_asset_id, asset_id, find_amount, amount);

          if (find_to == to && find_asset_id == asset_id && find_amount == amount) {
            transaction = _op;
          }
        }
      });
      return transaction;
    }
  }

  getTotal() {
    const items = this.state.invoice.line_items;
    if (!items || items.length === 0) return 0.0;
    let total_amount = items.reduce((total, item) => {
      let price = this.parsePrice(item.price);
      if (!price) return total;
      return total + item.quantity * price;
    }, 0.0); // check if current account has already paid

    let paymentOperation = this._findPayment();

    this.setState({
      total_amount: parseFloat(total_amount.toFixed(this.state.asset.get("precision"))),
      paymentOperation
    });
  }

  onBroadcastAndConfirm(confirm_store_state) {
    if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].unlisten(this.onBroadcastAndConfirm);
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].reset();
      this.setState({
        blockNum: confirm_store_state.trx_block_num
      });
      /*  if (this.state.invoice.callback) {
          let trx = confirm_store_state.broadcasted_transaction;
          let url = `${this.state.invoice.callback}?block=${
              trx.ref_block_num
          }&trx=${trx.id()}`;
          window.location.href = url;
      }  */
    }
  }

  onPayClick(e) {
    e.preventDefault();
    let {
      asset,
      total_amount
    } = this.state;
    let precision = common_utils__WEBPACK_IMPORTED_MODULE_13__["default"].get_asset_precision(asset.get("precision"));
    let to_account = bitsharesjs_es__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getAccount(this.state.invoice.to);

    if (!to_account) {
      actions_NotificationActions__WEBPACK_IMPORTED_MODULE_6__["default"].error(`Account ${this.state.invoice.to} not found`);
      return;
    }

    actions_AccountActions__WEBPACK_IMPORTED_MODULE_2__["default"].transfer(this.state.pay_from_account.get("id"), to_account.get("id"), parseInt(total_amount * precision, 10), asset.get("id"), this.state.invoice.memo).then(() => {
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].unlisten(this.onBroadcastAndConfirm);
      stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].listen(this.onBroadcastAndConfirm);
    }).catch(e => {
      console.log("error: ", e);
    });
  }

  fromChanged(pay_from_name) {
    this.setState({
      pay_from_name,
      pay_from_account: null
    });
  }

  onFromAccountChanged(pay_from_account) {
    this.setState({
      pay_from_account
    });
  }

  onToAccountChanged(pay_to_account) {
    this.setState({
      pay_to_account: pay_to_account
    });
  }

  render() {
    const {
      data
    } = this.props.match.params;

    if (this.state.isRawDataInputVisible) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ScanOrEnterText__WEBPACK_IMPORTED_MODULE_18__["default"], {
        labelContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
          component: "span",
          content: "invoice.raw_invoice_data"
        }),
        submitBtnText: counterpart__WEBPACK_IMPORTED_MODULE_14___default().translate("invoice.use_invoice_data"),
        dataFoundText: counterpart__WEBPACK_IMPORTED_MODULE_14___default().translate("invoice.invoice_data_found") + ":",
        onInputChange: this.handleRawInvoiceDataChange,
        inputValue: this.state.rawDataInputValue,
        handleQrScanSuccess: this.handleQrScanSuccess
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
        className: "has-error text-center"
      }, this.state.error));
    }

    if (this.state.error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
      className: "has-error text-center"
    }, this.state.error));
    if (!this.state.invoice) return null;
    if (!this.state.asset) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      className: "has-error text-center",
      component: "h4",
      content: "transfer.errors.asset_unsupported",
      currency: this.state.invoice.currency
    }));
    let {
      invoice,
      total_amount
    } = this.state;
    const asset = invoice.currency;
    let balance = null;

    if (invoice.to_label) {
      invoice.to_name = invoice.to_label;
    }

    const receiptData = { ...invoice,
      total_amount: total_amount ? total_amount.toString() : 0,
      asset,
      from: this.state.pay_from_account,
      blockNum: this.state.blockNum
    };

    if (this.state.pay_from_account) {
      let balances = this.state.pay_from_account.get("balances");
      const balanceValue = balances.get(this.state.asset.get("id"));
      balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
        component: "span",
        content: "transfer.available"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          borderBottom: "#A09F9F 1px dotted",
          cursor: "pointer"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        balance: balanceValue
      })));
    }

    let items = invoice.line_items.map((i, index) => {
      let price = this.parsePrice(i.price);
      let amount = i.quantity * price;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Row, {
        key: "invoice_item_" + index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
        span: 10
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item-name"
      }, i.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "item-description"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
        span: 3
      }, i.quantity, " x"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
        span: 5
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
        amount: i.price,
        asset: asset,
        exact_amount: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
        span: 5
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
        amount: amount,
        asset: asset,
        exact_amount: true
      })));
    });
    const invoiceData = data !== "pay" ? data : this.state.rawDataInputValue;
    let qrcode = null;

    if (this.state.invoiceQr) {
      qrcode = invoiceData;
    } else {
      if (this.state.pay_from_name && invoice.to !== this.state.pay_from_name) {
        qrcode = `bitshares:operation/transfer?to=${invoice.to}&from=${this.state.pay_from_name}&asset=${asset}&amount=${total_amount}` + (invoice.memo ? `&memo=${invoice.memo}` : "");
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "merchant-protocol--pay"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        float: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PrintReceiptButton_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], {
      data: receiptData,
      parsePrice: this.parsePrice
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      component: "h3",
      content: "invoice.payment_request"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
      span: 10,
      style: {
        width: "30rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, invoice.memo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "invoice.paid_by",
      accountName: this.state.pay_from_name,
      onChange: this.fromChanged.bind(this),
      onAccountChanged: this.onFromAccountChanged.bind(this),
      account: this.state.pay_from_name,
      typeahead: true,
      size: 32
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "invoice.pay_to",
      accountName: invoice.to,
      disabled: true,
      onAccountChanged: this.onToAccountChanged.bind(this),
      account: this.state.pay_to_account,
      size: 32
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
      span: 6,
      offset: 4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      component: "h4",
      content: "invoice.pay.barcode"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Button, {
      type: "secondary",
      style: {
        width: "180px",
        marginBottom: "20px"
      },
      onClick: () => {
        this.setState({
          invoiceQr: !this.state.invoiceQr
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      component: "span",
      content: this.state.invoiceQr ? "invoice.pay.invoice_qr_code" : "invoice.pay.payment_qr_code"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((qrcode_react__WEBPACK_IMPORTED_MODULE_17___default()), {
      size: 180,
      value: qrcode ? qrcode : "",
      bgColor: qrcode ? undefined : "#000000"
    }))), invoice.to_name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      content: "invoice.request.recipient_name"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, invoice.to_name)), invoice.note && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      content: "invoice.note"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, invoice.note)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
      span: 10
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      component: "span",
      content: "invoice.items"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
      span: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      component: "span",
      content: "invoice.amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
      span: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      component: "span",
      content: "invoice.unit"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
      span: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      component: "span",
      content: "invoice.total"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "divider"
    }), items, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "divider"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
      span: 18
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      component: "span",
      content: "invoice.total"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Col, {
      span: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
      amount: total_amount,
      asset: asset,
      exact_amount: true
    }))), this.state.paymentOperation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, counterpart__WEBPACK_IMPORTED_MODULE_14___default().translate("invoice.payment_proof"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_14___default().translate("invoice.tooltip_payment_proof"),
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Icon, {
      type: "question-circle"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_16__["default"], {
      includeOperationId: true,
      key: this.state.paymentOperation.id,
      operationId: this.state.paymentOperation.id,
      op: this.state.paymentOperation.op,
      result: this.state.paymentOperation.result,
      block: this.state.paymentOperation.block_num,
      current: this.props.currentAccount.get("id")
    })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__.Button, {
      type: "primary",
      style: {
        marginTop: "30px"
      },
      disabled: !this.state.pay_from_account,
      onClick: this.onPayClick.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_11___default()), {
      content: "invoice.pay_button",
      asset: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
        amount: total_amount,
        asset: asset,
        exact_amount: true
      }),
      name: invoice.to
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoicePay);

/***/ }),

/***/ 2649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2111);
/* harmony import */ var _Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2087);
/* harmony import */ var lzma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2521);
/* harmony import */ var common_base58__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2650);
/* harmony import */ var common_base58__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(common_base58__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2312);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(621);
/* provided dependency */ var Buffer = __webpack_require__(443)["Buffer"];











let id = 1;

class InvoiceRequest extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      invoice: null,
      invoiceData: null,
      recipient_name: null,
      recipient_name_account: null,
      currency: "GPH",
      defaultAssets: (0,branding__WEBPACK_IMPORTED_MODULE_10__.get_allTokens)().nativeTokens
    };
  }

  componentDidMount() {
    this.setState({
      recipient_name: this.props.currentAccount.get("name")
    });
  }

  _printInvoice(invoice) {
    if (this.props.validateFormat(invoice)) {
      (0,lzma__WEBPACK_IMPORTED_MODULE_4__.compress)(JSON.stringify(invoice), 9, (result, error) => {
        const invoiceData = common_base58__WEBPACK_IMPORTED_MODULE_5___default().encode(Buffer.from(result));
        this.setState({
          invoiceData: invoiceData
        });
        console.log("Invoice data", invoice, invoiceData);
      });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    if (this.state.recipient_name == null && this.props.currentAccount) {
      this.setState({
        recipient_name: this.props.currentAccount.get("name")
      });
    }
  }

  fromChanged(recipient_name) {
    this.setState({
      recipient_name,
      recipient_name_account: null
    });
  }

  onFromAccountChanged(recipient_name_account) {
    this.setState({
      recipient_name_account
    });
  }

  hasErrors = () => {
    let formError = false;
    const values = this.props.form.getFieldsValue(["line_items", "memo", "keys"]);
    formError = Object.keys(values).some(field => {
      if (field !== "line_items") {
        return !values[field];
      } else {
        if (values.keys) return values.keys.some(item => {
          return !values[field][item].label || !values[field][item].price || !values[field][item].quantity;
        });
      }
    });
    return formError || !this.state.recipient_name;
  };
  remove = k => {
    const {
      form
    } = this.props;
    const keys = form.getFieldValue("keys");

    if (keys.length === 1) {
      return;
    }

    const nextKeys = keys.filter(key => key !== k);
    form.setFieldsValue({
      keys: nextKeys
    });
  };
  add = () => {
    const {
      form
    } = this.props;
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(id++);
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  handleSubmit(e) {
    const {
      currency
    } = this.state;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let {
          line_items,
          memo,
          note,
          to_label
        } = values; // remove empty lines

        line_items = line_items.filter(item => !!item);

        this._printInvoice({
          currency,
          line_items,
          memo,
          note,
          to: this.state.recipient_name,
          to_label
        });
      }
    });
  }

  onChangeCurrency(e) {
    const asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getAsset(e);
    this.setState({
      currency: asset.get("symbol")
    });
  }

  render() {
    const {
      getFieldValue,
      getFieldDecorator
    } = this.props.form;
    const {
      currency,
      defaultAssets
    } = this.state;
    getFieldDecorator("keys", {
      initialValue: [0]
    });
    let keys = getFieldValue("keys");
    const formItems = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Row, {
      style: {
        marginTop: "0.5rem",
        marginBottom: "0.5rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Col, {
      span: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_6___default()), {
      component: "span",
      content: "invoice.request.items"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Col, {
      span: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_6___default()), {
      component: "span",
      content: "invoice.request.quantity"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Col, {
      span: 5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_6___default()), {
      component: "span",
      content: "invoice.request.price"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Col, {
      span: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_6___default()), {
      component: "span",
      content: "invoice.request.action"
    }))), keys.map((k, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Form.Item, {
      key: k,
      style: {
        marginBottom: "0px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Input.Group, {
      compact: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Col, {
      span: 12
    }, getFieldDecorator(`line_items[${k}]label`)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Input, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Col, {
      span: 5
    }, getFieldDecorator(`line_items[${k}]quantity`)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Input, {
      type: "number"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Col, {
      span: 5
    }, getFieldDecorator(`line_items[${k}]price`)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Input, {
      type: "number"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Col, {
      span: 2
    }, k == keys[keys.length - 1] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Button, {
      type: "primary",
      icon: "plus-circle-o",
      onClick: () => this.add(k)
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Button, {
      type: "primary",
      icon: "minus-circle-o",
      onClick: () => this.remove(k)
    })))))));
    const error = this.hasErrors();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "merchant-protocol--request"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "invoice-request-input",
      label: "invoice.request.recipient_account",
      accountName: this.state.recipient_name,
      onChange: this.fromChanged.bind(this),
      onAccountChanged: this.onFromAccountChanged.bind(this),
      account: this.state.recipient_name,
      typeahead: true,
      size: 32
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Form, {
      onSubmit: this.handleSubmit.bind(this),
      required: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Form.Item, {
      className: "invoice-request-input",
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("invoice.request.identifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
        placement: "topLeft",
        title: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("invoice.request.identifier_tooltip")
      }, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Icon, {
        type: "question-circle",
        theme: "filled"
      })))
    }, getFieldDecorator("memo")( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Input, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Form.Item, {
      className: "invoice-request-input",
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("invoice.request.payment_asset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
        placement: "topLeft",
        title: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("invoice.request.payment_asset_tooltip")
      }, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Icon, {
        type: "question-circle",
        theme: "filled"
      })))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: currency,
      assets: defaultAssets,
      onChange: this.onChangeCurrency.bind(this)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Form.Item, {
      className: "invoice-request-input",
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("invoice.request.recipient_name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
        placement: "topLeft",
        title: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("invoice.request.recipient_name_tooltip")
      }, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Icon, {
        type: "question-circle",
        theme: "filled"
      })))
    }, getFieldDecorator("to_label")( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Input, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Form.Item, {
      className: "invoice-request-input",
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("invoice.request.note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
        placement: "topLeft",
        title: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("invoice.request.note_tooltip")
      }, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Icon, {
        type: "question-circle",
        theme: "filled"
      })))
    }, getFieldDecorator("note")( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Input.TextArea, {
      rows: 3
    }))), formItems, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Button, {
      type: "primary",
      htmlType: "submit",
      disabled: error
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_6___default()), {
      content: "invoice.request.create_invoice_string"
    })))), this.state.invoiceData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginTop: "2rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Input.TextArea, {
      disabled: true,
      rows: 4,
      value: this.state.invoiceData
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        float: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      useDiv: false,
      text: this.state.invoiceData
    }))));
  }

}

InvoiceRequest = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Form.create({
  name: "invoice_request"
})(InvoiceRequest);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoiceRequest);

/***/ }),

/***/ 2652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2653);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1820);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1821);








const printReceipt = ({
  data,
  parsePrice
}) => {
  const {
    line_items,
    to,
    asset,
    from,
    total_amount,
    memo,
    currency,
    blockNum,
    to_name,
    note
  } = data;
  const marginUp = 25,
        lineMargin = 5,
        marginLeft = 15,
        transactionDataright = 150,
        width = 210,
        rowHeight = 10,
        fontSize = 16,
        totalFontSize = 20;
  let height = 0;
  let body = [];
  let transactionId = "";
  let fromName = "";

  if (from) {
    from.get("history").forEach(op => {
      if (op.get("block_num") === blockNum) {
        transactionId = op.get("id");
        return;
      }
    });
    fromName = from.get("name");
  }

  const date = stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().blockHeaders.get(blockNum);
  const timestamp = date ? date.timestamp.toLocaleDateString("en-US").replace(/\//g, ".") : new Date().toLocaleDateString("en-US").replace(/\//g, ".");
  const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__["default"]({
    orientation: "portrait",
    compressPdf: true
  });
  pdf.setFontStyle("bold");
  pdf.setFontSize(fontSize);
  pdf.text(counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("invoice.pay_to", {
    locale: "en"
  }).toUpperCase(), marginLeft, height += marginUp);
  pdf.setFontStyle("normal");
  pdf.text(to_name, marginLeft, height += rowHeight);
  pdf.text(to, marginLeft, height += rowHeight);
  pdf.autoTable({
    body: [["", counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("invoice.memo", {
      locale: "en"
    }), memo], [{
      content: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("invoice.paid_by", {
        locale: "en"
      }).toUpperCase(),
      styles: {
        fontStyle: "bold"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("invoice.date", {
      locale: "en"
    }), timestamp], [fromName, counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("invoice.transaction", {
      locale: "en"
    }), transactionId], [{
      content: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("invoice.note", {
        locale: "en"
      }).toUpperCase(),
      styles: {
        fontStyle: "bold"
      }
    }, "", ""], [note, "", ""]],
    bodyStyles: {
      valign: "top"
    },
    styles: {
      cellWidth: "wrap",
      rowPageBreak: "auto",
      halign: "justify"
    },
    columnStyles: {
      0: {
        halign: "left",
        cellWidth: 90
      },
      1: {
        fontStyle: "bold"
      },
      2: {
        cellWidth: 40
      }
    },
    startY: height += rowHeight,
    theme: "plain"
  });
  pdf.line(lineMargin, height = pdf.autoTable.previous.finalY + rowHeight, width - lineMargin, height);
  pdf.setFontSize(totalFontSize);
  pdf.text(counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("invoice.receipt_total", {
    locale: "en"
  }).toUpperCase(), marginLeft, height += rowHeight);
  pdf.text(`${total_amount} ${currency}`, transactionDataright, height);
  pdf.line(lineMargin, height += 5, width - lineMargin, height);
  pdf.setFontStyle("normal");
  pdf.setFontSize(fontSize);

  for (let item of line_items) {
    const price = parsePrice(item.price);
    const unit = `${price} ${asset}`;
    const total = `${item.quantity * price} ${asset}`;
    body = [...body, {
      descrption: item.label,
      unit,
      amount: item.quantity,
      total
    }];
  }

  pdf.autoTable({
    columns: [{
      header: {
        content: "DESCRIPTION",
        styles: {
          halign: "left"
        }
      },
      dataKey: "descrption"
    }, {
      header: "AMOUNT",
      dataKey: "amount"
    }, {
      header: "UNIT",
      dataKey: "unit"
    }, {
      header: "TOTAL",
      dataKey: "total"
    }],
    body: body,
    startY: height + rowHeight,
    bodyStyles: {
      valign: "top"
    },
    styles: {
      cellWidth: "auto",
      rowPageBreak: "auto",
      halign: "right"
    },
    columnStyles: {
      descrption: {
        halign: "left"
      }
    },
    theme: "plain"
  });
  pdf.save("bitshares-receipt-" + to + ".pdf");
};

const PrintReceiptButton = ({
  data,
  parsePrice
}) => {
  const tip = "tooltip.print_receipt",
        dataPlace = "left",
        buttonText = counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("invoice.print_receipt");
  if (data.blockNum) actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_6__["default"].getHeader.defer(data.blockNum);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    placement: dataPlace,
    title: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate(tip)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "primary",
    icon: "download",
    onClick: () => printReceipt({
      data,
      parsePrice
    })
  }, buttonText));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrintReceiptButton);

/***/ }),

/***/ 2655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScanOrEnterText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QRAddressScanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2350);




function ScanOrEnterText({
  labelContent,
  handleQrScanSuccess,
  onInputChange,
  inputValue,
  submitBtnText,
  dataFoundText
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginBottom: "1em"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "left-label"
  }, labelContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "inline-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input.TextArea, {
    style: {
      marginBottom: 0
    },
    rows: 3,
    onChange: onInputChange,
    value: inputValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QRAddressScanner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Scan",
    onSuccess: handleQrScanSuccess,
    submitBtnText: submitBtnText,
    dataFoundText: dataFoundText
  })))));
}
ScanOrEnterText.propTypes = {
  labelContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element)]),
  handleQrScanSuccess: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  onInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  inputValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  submitBtnText: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element)]),
  dataFoundText: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element)])
};

/***/ }),

/***/ 2654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 2729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1816);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1820);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1821);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2341);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2707);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__);








/**
 * @brief displays block's date and time based on block number
 *
 * properties: block - number
 * Note, it doesn't fetch block, just calculates time based on number alone.
 **/

class BlockDate extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static defaultProps = {
    format: browser_locale__WEBPACK_IMPORTED_MODULE_6___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history",
    tooltip: false,
    component: "span"
  };

  UNSAFE_componentWillMount() {
    if (!this.props.blockHeader) actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__["default"].getHeader.defer(this.props.block_number);
  }

  shouldComponentUpdate(np) {
    if (np.blockHeader && !this.props.blockHeader) setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"].rebuild, 1000);
    return np.blockHeader !== this.props.blockHeader;
  }

  render() {
    const {
      blockHeader,
      tooltip,
      component,
      format
    } = this.props;
    if (!blockHeader) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(component);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, {
      className: tooltip ? "tooltip" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
      title: tooltip ? blockHeader.timestamp.toString() : "",
      placement: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_1___default().localize(blockHeader.timestamp, {
      type: "date",
      format
    }))));
  }

}

BlockDate = (0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(BlockDate, {
  listenTo() {
    return [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
  },

  getProps(props) {
    return {
      blockHeader: stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().blockHeaders.get(props.block_number)
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockDate);

/***/ }),

/***/ 2692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(607);



class PriceText extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      price,
      preFormattedPrice,
      quote,
      base
    } = this.props;
    if (!price && !preFormattedPrice) return null;
    let formattedPrice = !!preFormattedPrice ? preFormattedPrice : common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].price_to_text(price, quote, base);

    if (formattedPrice.full >= 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "price-integer"
      }, formattedPrice.int, "."), formattedPrice.dec ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "price-integer"
      }, formattedPrice.dec) : null, formattedPrice.trailing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "price-decimal"
      }, formattedPrice.trailing) : null);
    } else if (formattedPrice.full >= 0.1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "price-decimal"
      }, formattedPrice.int, "."), formattedPrice.dec ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "price-integer"
      }, formattedPrice.dec) : null, formattedPrice.trailing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "price-decimal"
      }, formattedPrice.trailing) : null);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "price-decimal"
      }, formattedPrice.int, "."), formattedPrice.dec ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "price-decimal"
      }, formattedPrice.dec) : null, formattedPrice.trailing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "price-integer"
      }, formattedPrice.trailing) : null);
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceText);

/***/ }),

/***/ 2745:
/***/ ((module) => {

module.exports = {
  midnightTheme: {
    bidColor: "#50D2C2",
    bidFillColor: "rgba(80, 210, 194, 0.5)",
    askColor: "#E3745B",
    askFillColor: "rgba(227, 116, 91, 0.5)",
    callColor: "#BBBF2B",
    settleColor: "rgba(125, 134, 214, 1)",
    settleFillColor: "rgba(125, 134, 214, 0.5)",
    positiveColor: "#6BA583",
    negativeColor: "#DB0000",
    strokeColor: "#FFFF00",
    primaryText: "#e0e0e0",
    volumeColor: "#848484",
    //tooltip
    tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
    tooltipColor: "#fff",
    tooltipFillColor: "#fff",
    //axis
    axisLabelsColor: "#fff",
    axisLineColor: "rgba(200, 200, 200, 0.3)",
    indicatorLineColor: "#FFFFFF",
    bgColor: "#191a1f",
    textColor: "#e0e0e0"
  },
  darkTheme: {
    bidColor: "#6BA583",
    bidFillColor: "rgba(80, 210, 194, 0.5)",
    askColor: "#E3745B",
    askFillColor: "rgba(227, 116, 91, 0.5)",
    callColor: "#BBBF2B",
    settleColor: "rgba(125, 134, 214, 1)",
    settleFillColor: "rgba(125, 134, 214, 0.5)",
    positiveColor: "#258A14",
    negativeColor: "#DB0000",
    strokeColor: "#FFFF00",
    primaryText: "#e0e0e0",
    volumeColor: "#848484",
    //tooltip
    tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
    tooltipColor: "#fff",
    tooltipFillColor: "#fff",
    //axis
    axisLabelsColor: "#fff",
    axisLineColor: "rgba(200, 200, 200, 0.3)",
    indicatorLineColor: "#FFFFFF",
    bgColor: "#2a2a2a",
    textColor: "#ffffff"
  },
  lightTheme: {
    bidColor: "#258A14",
    bidFillColor: "rgba(80, 210, 194, 0.5)",
    askColor: "#EA340B",
    askFillColor: "rgba(227, 116, 91, 0.5)",
    callColor: "#BBBF2B",
    settleColor: "rgba(125, 134, 214, 1)",
    settleFillColor: "rgba(125, 134, 214, 0.5)",
    positiveColor: "#528c0a",
    negativeColor: "rgba(225, 66, 74, 1)",
    strokeColor: "#000000",
    primaryText: "#242424",
    volumeColor: "#848484",
    //tooltip
    tooltipBackgroundColor: "rgba(255,255,255, 0.9)",
    tooltipColor: "#000",
    tooltipFillColor: "#000",
    //axis
    axisLabelsColor: "#000",
    axisLineColor: "rgba(200, 200, 200, 0.3)",
    indicatorLineColor: "#848484",
    bgColor: "#fff",
    textColor: "#3d3d3d"
  }
};

/***/ }),

/***/ 2767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(656);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



/**
 *  Wrapper component for chatbro iframe
 *
 */

class ChatBro extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let frameHeight = this.props.height || "30%"; //let currentLocale = SettingsStore.getState().settings.get("locale");

    let currentLocale = "ru";
    let chatUrl = null;

    switch (currentLocale) {
      default:
        chatUrl = `https://chat.rudex.org/${currentLocale}/`;
        break;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {
      style: {
        height: frameHeight,
        width: "100%"
      },
      src: chatUrl,
      sandbox: "allow-same-origin allow-forms allow-scripts allow-popups"
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", {
      style: {
        height: frameHeight,
        width: "100%"
      },
      src: chatUrl,
      sandbox: "allow-same-origin allow-forms allow-scripts allow-popups"
    });
  }

}

ChatBro.propTypes = {
  height: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBro);

/***/ }),

/***/ 2740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lookupAssets": () => (/* binding */ lookupAssets),
/* harmony export */   "assetFilter": () => (/* binding */ assetFilter),
/* harmony export */   "fetchIssuerName": () => (/* binding */ fetchIssuerName)
/* harmony export */ });
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2094);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);



function lookupAssets(value, gatewayAssets = false, getAssetList, setState) {
  if (!value && value !== "") return;
  let quote = value.toUpperCase();

  if (quote.startsWith("GP") && quote.length >= 6) {
    quote = value.substr(3, quote.length - 1);
  }

  getAssetList(quote, 10, gatewayAssets);
  setState({
    lookupQuote: quote
  });
}

function assetFilter({
  searchAssets,
  marketPickerAsset,
  baseAsset,
  quoteAsset
}, {
  inputValue,
  lookupQuote
}, setState, checkAndUpdateMarketList) {
  setState({
    activeSearch: true
  });
  let assetCount = 0;
  let allMarkets = [];
  let baseSymbol = baseAsset.get("symbol");
  let quoteSymbol = quoteAsset.get("symbol");

  if (searchAssets.size && !!inputValue && inputValue.length > 2) {
    searchAssets.filter(a => {
      try {
        if (a.options.description) {
          let description = JSON.parse(a.options.description);

          if ("visible" in description) {
            if (!description.visible) return false;
          }
        }
      } catch (e) {}

      return a.symbol.indexOf(lookupQuote) !== -1;
    }).forEach(asset => {
      if (assetCount > 100) return;
      assetCount++;
      let issuerName = fetchIssuerName(asset.issuer);
      let base = baseAsset.get("symbol");
      let marketID = asset.symbol + "_" + base;
      let isQuoteAsset = quoteSymbol == marketPickerAsset;
      let includeAsset = isQuoteAsset && asset.symbol != baseSymbol || !isQuoteAsset && asset.symbol != quoteSymbol;

      if (includeAsset) {
        allMarkets.push([marketID, {
          quote: asset.symbol,
          base: base,
          issuerId: asset.issuer,
          issuer: issuerName
        }]);
      }
    });
  }

  const marketsList = sortMarketsList(allMarkets, inputValue);
  checkAndUpdateMarketList(marketsList);
}

function getMarketSortComponents(market) {
  const weight = {};
  const quote = market.quote;

  if (quote.indexOf(".") !== -1) {
    const [gateway, asset] = quote.split(".");
    weight.gateway = gateway;
    weight.asset = asset;
  } else {
    weight.asset = quote;
  }

  if (market.issuerId === "1.2.0") weight.isCommittee = true;
  return weight;
}

function sortMarketsList(allMarkets, inputValue) {
  if (inputValue.startsWith("GP") && inputValue.length >= 6) {
    inputValue = inputValue.substr(3, inputValue.length - 1);
  }

  return allMarkets.sort(([, marketA], [, marketB]) => {
    const weightA = getMarketSortComponents(marketA);
    const weightB = getMarketSortComponents(marketB);

    if (weightA.asset !== weightB.asset) {
      if (weightA.asset === inputValue) return -1;
      if (weightB.asset === inputValue) return 1;
      if (weightA.asset > weightB.asset) return -1;
      if (weightA.asset < weightB.asset) return 1;
    }

    if (weightA.isCommittee ^ weightB.isCommittee) {
      if (weightA.isCommittee) return -1;
      if (weightB.isCommittee) return 1;
    }

    const aIsKnownGateway = (0,common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__.hasGatewayPrefix)(marketA.quote);
    const bIsKnownGateway = (0,common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__.hasGatewayPrefix)(marketB.quote);
    if (aIsKnownGateway && !bIsKnownGateway) return -1;
    if (bIsKnownGateway && !aIsKnownGateway) return 1;
    if (weightA.gateway > weightB.gateway) return 1;
    if (weightA.gateway < weightB.gateway) return -1;
    return 0;
  });
}

function fetchIssuerName(issuerId) {
  let issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(issuerId, false, false);

  if (!issuer) {
    return;
  } else {
    return issuer.get("name");
  }
}



/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataFeed": () => (/* binding */ DataFeed),
/* harmony export */   "SymbolInfo": () => (/* binding */ SymbolInfo),
/* harmony export */   "getResolutionsFromBuckets": () => (/* binding */ getResolutionsFromBuckets),
/* harmony export */   "getTVTimezone": () => (/* binding */ getTVTimezone)
/* harmony export */ });
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2338);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2747);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2339);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2094);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(607);







class SymbolInfo {
  constructor(options) {
    this.name = options.ticker;
    this.ticker = options.ticker;
    const quoteGateway = (0,common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__.getGatewayName)(options.quoteAsset);
    const baseGateway = (0,common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__.getGatewayName)(options.baseAsset);
    let currentExchange = quoteGateway === baseGateway ? quoteGateway : quoteGateway && !baseGateway ? quoteGateway : !quoteGateway && baseGateway ? baseGateway : `${quoteGateway} / ${baseGateway}`;
    let {
      name: baseSymbol,
      prefix: basePrefix
    } = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(options.baseAsset);
    let {
      name: quoteSymbol,
      prefix: quotePrefix
    } = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(options.quoteAsset);
    this.description = `${quotePrefix || ""}${quoteSymbol} / ${basePrefix || ""}${baseSymbol} ${!!currentExchange ? `(${currentExchange})` : ""}`;
    this.type = "bitcoin";
    this.session = "24x7";
    this.timezone = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default().tz.guess();
    this.data_status = "streaming";
    this.supported_resolutions = options.resolutions;
    this.has_empty_bars = true;
    this.pricescale = Math.pow(10, options.baseAsset.get("precision"));
    this.quoteAsset = options.quoteAsset;
    this.baseAsset = options.baseAsset;
    this.minmov = 1;
    this.has_intraday = this.supported_resolutions.reduce((supported, r) => {
      return supported || !isNaN(parseInt(r, 10));
    }, false);
    this.intraday_multipliers = this.supported_resolutions.filter(r => {
      return !isNaN(parseInt(r, 10));
    });
    this.has_seconds = this.supported_resolutions.reduce((supported, r) => {
      return supported || r.indexOf("S") !== -1;
    }, false);
    this.seconds_multipliers = this.supported_resolutions.filter(r => {
      return r.indexOf("S") !== -1;
    });
    this.has_daily = this.supported_resolutions.reduce((supported, r) => {
      return supported || r.indexOf("D") !== -1;
    }, false);
    this.has_daily = this.supported_resolutions.reduce((supported, r) => {
      return supported || r.indexOf("D") !== -1;
    }, false);
  }

}

function getResolutionsFromBuckets(buckets, convertToFrame = false) {
  let resolutions = buckets.map(r => {
    let minute = r / 60;
    let day = minute / 60 / 24;
    let week = day / 7;

    if (minute < 1 && !convertToFrame) {
      // below 1 minute we return Seconds
      return r + "S";
    } else if (day < 1 && parseInt(minute, 10) === minute && !convertToFrame) {
      // below 1 day we return Minutes
      return minute.toString();
    } else {
      // below 1 week we return Days
      day = parseInt(day, 10);
      if (day === 1 && !convertToFrame) return "D";
      if (day === 0) return "1D";
      return day + "D";
    }

    return null;
  }).filter(a => !!a);
  return resolutions;
}

function getBucketFromResolution(r) {
  if (r === "D") return 24 * 60 * 60;

  if (r.indexOf("W") !== -1) {
    return parseInt(r.replace("D", ""), 10) * 7 * 24 * 60 * 60;
  } else if (r.indexOf("D") !== -1) {
    return parseInt(r.replace("D", ""), 10) * 24 * 60 * 60;
  } else if (r.indexOf("S") !== -1) {
    return parseInt(r.replace("S", ""), 10);
  } else {
    return parseInt(r, 10) * 60;
  }
}

class DataFeed {
  update(options) {
    for (let key in options) {
      switch (key) {
        case "resolutions":
          this.supported_resolutions = getResolutionsFromBuckets(options.resolutions);
          break;

        case "onMarketChange":
          stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe("market_change");
          stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("market_change", options[key]);
          break;

        default:
          this[key] = options[key];
      }
    }
  }

  clearSubs() {
    stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].clearSubs();
  }

  onReady(callback) {
    setTimeout(() => {
      callback({
        exchanges: [{
          value: "RUDEX.",
          name: "RuDEX",
          desc: "RuDEX Gateway"
        }],
        symbols_types: [],
        supported_resolutions: this.supported_resolutions,
        supports_marks: false,
        supports_search: false,
        supports_time: true
      });
    }, 10);
  }

  searchSymbols(userInput, exchange, symbolType, onResultReadyCallback) {
    console.log("searchSymbols", userInput, exchange, symbolType);
    onResultReadyCallback([]);
    /*
    [
        {
            "symbol": "<short symbol name>",
            "full_name": "<full symbol name>", // e.g. BTCE:BTCUSD
            "description": "<symbol description>",
            "exchange": "<symbol exchange name>",
            "ticker": "<symbol ticker name, optional>",
            "type": "stock" // or "futures" or "bitcoin" or "forex" or "index"
        },
        {
            //    .....
        }
    ]
    */
  }

  resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    let [quote, base] = symbolName.split("_");
    Promise.all([(0,bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.FetchChain)("getAsset", quote), (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.FetchChain)("getAsset", base)]).then(assets => {
      let [quoteAsset, baseAsset] = assets;
      onSymbolResolvedCallback(new SymbolInfo({
        ticker: symbolName,
        quoteAsset,
        baseAsset,
        resolutions: this.supported_resolutions
      }));
    }).catch(onResolveErrorCallback);
  }

  getBars(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
    from *= 1000;
    to *= 1000;

    let bars = this._getHistory();

    this.latestBar = bars[bars.length - 1];
    bars = bars.filter(a => {
      return a.time >= from && a.time <= to;
    });

    if (this.interval !== resolution) {
      if (!firstDataRequest) return;
      let newBucketSize = getBucketFromResolution(resolution);
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeBucketSize(newBucketSize);
      return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].unSubscribeMarket(symbolInfo.quoteAsset.get("id"), symbolInfo.baseAsset.get("id")).then(() => {
        actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].subscribeMarket(symbolInfo.baseAsset, symbolInfo.quoteAsset, newBucketSize).then(() => {
          let bars = this._getHistory();

          this.latestBar = bars[bars.length - 1];
          bars = bars.filter(a => {
            return a.time >= from && a.time <= to;
          });
          this.interval = resolution;
          if (!bars.length) return onHistoryCallback(bars, {
            noData: true
          });
          onHistoryCallback(bars);
        });
      });
    } // console.log(
    //     "getBars",
    //     symbolInfo.ticker,
    //     resolution,
    //     "firstDataRequest",
    //     firstDataRequest,
    //     "bars",
    //     bars
    // );


    this.interval = resolution;
    if (!bars.length) return onHistoryCallback(bars, {
      noData: true
    });
    onHistoryCallback(bars);
  }

  _getHistory() {
    return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].getState().priceData;
  }

  subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
    stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe("subscribeBars");
    onResetCacheNeededCallback();
    stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("subscribeBars", () => {
      let bars = this._getHistory();

      let newBars = bars.filter(a => {
        if (!this.latestBar) return true;
        return a.time > this.latestBar.time;
      }); // console.log("subscribeBars", MarketsStore.getState().activeMarket, "found new bars:", newBars);

      if (newBars.length) {
        newBars.forEach(bar => {
          onRealtimeCallback(bar);
        });
        this.latestBar = newBars[newBars.length - 1];
      } else {
        // Check if latest bar is different
        let didChange = false;

        for (let key in this.latestBar) {
          if (this.latestBar[key] !== bars[bars.length - 1][key]) {
            didChange = true;
          }
        }

        if (didChange) {
          onRealtimeCallback(bars[bars.length - 1]);
        }
      }
    });
  }

  unsubscribeBars() {
    /*
    * This is ALWAYS called after subscribeBars for some reason, but
    * sometimes it executes BEFORE the subscribe call in subscribeBars and
    * sometimes AFTER. This causes the callback to be cleared and we stop
    * receiving updates from the MarketStore. Unless we find it causes bugs,
    * it's best to just not use this.
    */
    // MarketsStore.unsubscribe("subscribeBars");
    // this.latestBar = null;
  }

  calculateHistoryDepth(resolution, resolutionBack, intervalBack) {
    return undefined;
  }

  getServerTime(callback) {
    callback(new Date().getTime() / 1000);
  }

}

const supportedTimeZones = ["America/Argentina/Buenos_Aires", "America/Bogota", "America/Caracas", "America/Chicago", "America/El_Salvador", "America/Los_Angeles", "America/Mexico_City", "America/New_York", "America/Phoenix", "America/Sao_Paulo", "America/Toronto", "America/Vancouver", "Asia/Almaty", "Asia/Ashkhabad", "Asia/Bangkok", "Asia/Dubai", "Asia/Hong_Kong", "Asia/Kathmandu", "Asia/Kolkata", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Taipei", "Asia/Tehran", "Asia/Tokyo", "Australia/ACT", "Australia/Adelaide", "Australia/Brisbane", "Australia/Sydney", "Europe/Athens", "Europe/Berlin", "Europe/Istanbul", "Europe/London", "Europe/Madrid", "Europe/Moscow", "Europe/Paris", "Europe/Warsaw", "Europe/Zurich", "Pacific/Auckland", "Pacific/Chatham", "Pacific/Fakaofo", "Pacific/Honolulu", "US/Mountain"];

function getTVTimezone() {
  const current = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default().tz.guess();
  const defaultZone = "Europe/London";
  let isSupported = supportedTimeZones.indexOf(current) !== -1;
  if (isSupported) return current;else {
    /* Try to find a matching timezone from the limited list supported by TradingView */
    const time = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()().toISOString();
    const actual = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default().tz(time, current).format();

    for (var i = 0; i < supportedTimeZones.length; i++) {
      let zoneTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default().tz(time, supportedTimeZones[i]);

      if (zoneTime.format() === actual) {
        if (false) {} // Found a match, return that zone

        return supportedTimeZones[i];
      }
    }
  }
  console.log(`No matching timezone found for ${current}, setting to default value of Europe/London`);
  return defaultZone;
}



/***/ }),

/***/ 2699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preciseAdd": () => (/* binding */ preciseAdd),
/* harmony export */   "preciseMinus": () => (/* binding */ preciseMinus),
/* harmony export */   "preciseMultiply": () => (/* binding */ preciseMultiply),
/* harmony export */   "preciseDivide": () => (/* binding */ preciseDivide)
/* harmony export */ });
const preciseOperation = f => (a, b, decimalDigits = 6) => +f(a, b).toFixed(decimalDigits);

const add = (a, b) => a + b;

const minus = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const preciseAdd = (a, b, decimalDigits) => preciseOperation(add)(a, b, decimalDigits);
const preciseMinus = (a, b, decimalDigits) => preciseOperation(minus)(a, b, decimalDigits);
const preciseMultiply = (a, b, decimalDigits) => preciseOperation(multiply)(a, b, decimalDigits);
const preciseDivide = (a, b, decimalDigits) => preciseOperation(divide)(a, b, decimalDigits);

/***/ }),

/***/ 2697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Messages": () => (/* binding */ Messages),
/* harmony export */   "Rules": () => (/* binding */ Rules),
/* harmony export */   "Validation": () => (/* binding */ Validation)
/* harmony export */ });
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2698);


/** * * * *
 *
 * MESSAGES
 *
 * * * * * */

const Messages = {
  Required: (name = "") => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate("validation.messages.requiredNamed", {
      name: name
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate("validation.messages.required");
  },
  Type: (type = "", name = "") => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.types.${type}Named`, {
      name: name,
      type: type
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.types.${type}`, {
      type: type
    });
  },
  Range: (min, max, name) => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.rangeNamed`, {
      name: name,
      min: min,
      max: max
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.range`, {
      min: min,
      max: max
    });
  },
  Min: (min, name) => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.minNamed`, {
      name: name,
      min: min
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.min`, {
      min: min
    });
  },
  Max: (max, name) => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.maxNamed`, {
      name: name,
      max: max
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.max`, {
      max: max
    });
  },
  Number: name => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.numberNamed`, {
      name: name
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.number`);
  },
  Integer: name => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.integerNamed`, {
      name: name
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.integer`);
  },
  Float: name => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.floatNamed`, {
      name: name
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.float`);
  },
  Email: name => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.emailNamed`, {
      name: name
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.email`);
  },
  Url: name => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.urlNamed`, {
      name: name
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.url`);
  },
  OneOf: (name, list) => {
    if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.oneOfNamed`, {
      name: name,
      list: list
    });
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.oneOf`, {
      list: list
    });
  },
  Balance: (balance, symbol) => {
    return counterpart__WEBPACK_IMPORTED_MODULE_0___default().translate(`validation.messages.balance`, {
      balance: balance,
      symbol: symbol
    });
  }
};
/** * * * *
 *
 * RULES
 *
 * * * * * */

const Rules = {
  /**
   * Validation to check required Field
   * @param {string} props - name of field to use in translation
   * @param {Object} props
   * @param props.name - name of field to use in translation
   * @returns {{required: boolean, message: *}}
   */
  required: function (props = {}) {
    let name = "";

    if (typeof props === "string") {
      name = props;
    } else {
      name = props && props.name;
    }

    return {
      required: true,
      message: Messages.Required(name)
    };
  },

  /**
   * Validation to check field to match specific type
   * @param {string} props - type of field
   * @param {Object} props
   * @param {string} props.type - type of field
   * @param {string} [props.name] - name of field to use in translation
   * @returns {{validator: validator, message: *}}
   */
  type: function (props) {
    let type = "";
    let name = "";
    if (typeof props === "string") type = props;
    if (props && props.type) type = props.type;
    if (props && props.name) name = props.name;
    if (type === "") throw new Error("[Validation] Rules.Type the property type is missed");
    if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"][type]) throw new Error(`[Validation] Rules.Type the property type '${props && props.type}' is not listed in supported types`);
    return {
      validator: (rule, value, callback) => {
        if (_types__WEBPACK_IMPORTED_MODULE_1__["default"][type](value)) return callback();
        return callback(false);
      },
      message: Messages.Type(type, name)
    };
  },

  /**
   * Validation to check
   * @param {Object} props
   * @param {number} props.min - min value
   * @param {number} props.max - max value
   * @param {string} [props.name] - name of field to use in translation
   * @returns {{validator: validator, message: *}}
   */
  range: function (props = {}) {
    let max = Number(props.max);
    let min = Number(props.min);
    if (max === undefined || isNaN(max)) throw new Error(`[Validation] Rules.Range the property max '${props && props.max}' is incorrect. Should be a number`);
    if (min === undefined || isNaN(min)) throw new Error(`[Validation] Rules.Range the property min '${props && props.min}' is incorrect. Should be a number`);
    if (max < min) throw new Error(`[Validation] Rules.Range the property min '${props && props.min}' cannot be higher than max '${props && props.max}'`);
    return {
      validator: (rule, value, callback) => {
        value = Number(value);
        if (isNaN(value) || value < min || value > max) return callback(false);
        return callback();
      },
      message: Messages.Range(min, max, props.name || "")
    };
  },

  /**
   * Validation for min value
   * @param {number} props - min value
   * @param {Object} props
   * @param {number} props.min
   * @param {string} [props.name]
   * @param {boolean} props.higherThan - if (true) then check will be "value > min" instead of "value >= min"
   * @returns {{validator: validator, message: *}}
   */
  min: function (props) {
    let min;

    if (typeof props === "object") {
      min = Number(props && props.min);
    } else {
      min = Number(props);
    }

    if (min === undefined || isNaN(min)) throw new Error(`[Validation] Rules.Min the property min '${props && props.min}' is incorrect. Should be a number`);
    return {
      validator: (rule, value, callback) => {
        value = Number(value);

        if (props && props.higherThan) {
          if (isNaN(value) || value <= min) return callback(false);
        } else {
          if (isNaN(value) || value < min) return callback(false);
        }

        return callback();
      },
      message: Messages.Min(min, props.name || "")
    };
  },

  /**
   * Validation for max value
   * @param {number} props - max value
   * @param {Object} props
   * @param {number} props.max
   * @param {string} [props.name]
   * @returns {{validator: validator, message: *}}
   */
  max: function (props) {
    let max;

    if (typeof props === "object") {
      max = Number(props && props.max);
    } else {
      max = Number(props);
    }

    if (max === undefined || isNaN(max)) throw new Error(`[Validation] Rules.Min the property max '${props && props.max}' is incorrect. Should be a number`);
    return {
      validator: (rule, value, callback) => {
        value = Number(value);
        if (isNaN(value) || value > max) return callback(false);
        return callback();
      },
      message: Messages.Max(max, props.name || "")
    };
  },

  /**
   * Validate field to be number
   * @param {string} [name]
   * @returns {{validator: validator, message: *}}
   */
  number: function (name) {
    return {
      validator: (rule, value, callback) => {
        if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"].number(value)) return callback(false);
        return callback();
      },
      message: Messages.Number(name || "")
    };
  },

  /**
   * Validate field to be integer
   * @param {string} [name]
   * @returns {{validator: validator, message: *}}
   */
  integer: function (name) {
    return {
      validator: (rule, value, callback) => {
        if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"].integer(value)) return callback(false);
        return callback();
      },
      message: Messages.Integer(name || "")
    };
  },

  /**
   * Validate field to be float
   * @param {string} [name]
   * @returns {{validator: validator, message: *}}
   */
  float: function (name) {
    return {
      validator: (rule, value, callback) => {
        if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"].float(value)) return callback(false);
        return callback();
      },
      message: Messages.Float(name || "")
    };
  },

  /**
   * Validate field to be email
   * @param {string} [name]
   * @returns {{validator: validator, message: *}}
   */
  email: function (name) {
    return {
      validator: (rule, value, callback) => {
        if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"].email(value)) return callback(false);
        return callback();
      },
      message: Messages.Email(name || "")
    };
  },

  /**
   * Validate field to be url
   * @param {string} [name]
   * @returns {{validator: validator, message: *}}
   */
  url: function (name) {
    return {
      validator: (rule, value, callback) => {
        if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"].url(value)) return callback(false);
        return callback();
      },
      message: Messages.Url(name || "")
    };
  },

  /**
   * Validate field to be oneOf
   * @param {Object} props
   * @param {Array} props.list
   * @param {string} [props.name]
   * @returns {{validator: validator, message: *}}
   */
  oneOf: function (props = {}) {
    let list;

    if (!Array.isArray(props && props.list)) {
      throw new Error(`[Validation] Rules.oneOf the property list is missed or incorrect`);
    }

    list = props.list;
    return {
      validator: (rule, value, callback) => {
        if (list.indexOf(value) === -1) return callback(false);
        return callback();
      },
      message: Messages.OneOf(props && props.name || "", list.toString().replace(/,([a-z])/g, ", $1"))
    };
  },

  /**
   * Validate field to be in range from 0 to UserBalance
   * @param props
   */
  balance: function (props = {}) {
    let validation = Rules.range({
      min: 0,
      max: props.balance
    });
    return {
      validator: validation.validator,
      message: Messages.Balance(props.balance, props.symbol)
    };
  }
};
/** * * * *
 *
 * VALIDATION
 *
 * * * * * */

const Validation = {
  Rules: Rules
};

/***/ }),

/***/ 2698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "types": () => (/* binding */ types),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
const types = {
  integer(value) {
    return types.number(value) && parseInt(value, 10) === Number(value);
  },

  float(value) {
    return types.number(value) && !types.integer(value);
  },

  array(value) {
    return Array.isArray(value);
  },

  regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },

  date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function";
  },

  number(value) {
    if (isNaN(value) || isNaN(Number(value))) {
      return false;
    }

    return typeof Number(value) === "number";
  },

  object(value) {
    return typeof value === "object" && !types.array(value);
  },

  method(value) {
    return typeof value === "function";
  },

  email(value) {
    return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
  },

  url(value) {
    return typeof value === "string" && !!value.match(pattern.url);
  },

  hex(value) {
    return typeof value === "string" && !!value.match(pattern.hex);
  },

  string(value) {
    return typeof value === "string";
  },

  boolean(value) {
    return typeof value === "boolean";
  },

  enum(value, list) {
    return Array.isArray(list) && list.indexOf(value) >= -1;
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (types);

/***/ }),

/***/ 2650:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(462);


/***/ }),

/***/ 2667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2744:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": () => (/* binding */ i),
/* harmony export */   "widget": () => (/* binding */ r)
/* harmony export */ });
var t=function(){return(t=Object.assign||function(t){for(var e,o=arguments,n=1,i=arguments.length;n<i;n++)for(var r in e=o[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function e(o,n){var i=t({},o);for(var r in n)"object"!=typeof o[r]||null===o[r]||Array.isArray(o[r])?void 0!==n[r]&&(i[r]=n[r]):i[r]=e(o[r],n[r]);return i}var o={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},n={width:800,height:500,interval:"1D",timezone:"Etc/UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},trading_customization:{position:{},order:{}},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"1W"},{text:"1y",resolution:"1W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}};function i(){return"CL v17.025 (internal id 2f0c4150 @ 2020-11-19T09:50:09.264Z)"}var r=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=e(n,t),t.preset){var i=o[t.preset];i?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(i.disabled_features):this._options.disabled_features=i.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(i.enabled_features):this._options.enabled_features=i.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}"Dark"===this._options.theme&&void 0===this._options.loading_screen&&(this._options.loading_screen={backgroundColor:"#131722"}),this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.headerReady=function(){var t=this;return this._innerWindowLoaded.then((function(){return t._innerWindow().headerReady()}))},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.getLanguage=function(){return this._options.locale},t.prototype.setSymbol=function(t,e,o){this._innerAPI().changeSymbol(t,e,o)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id],this._iFrame.parentNode&&this._iFrame.parentNode.removeChild(this._iFrame)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,o){this._innerAPI().saveChartToServer(t,e,o)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=e(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype.layoutName=function(){return this._innerAPI().layoutName()},t.prototype.changeTheme=function(t,e){this._innerWindow().changeTheme(t,e)},t.prototype.getTheme=function(){return this._innerWindow().getTheme()},t.prototype.takeScreenshot=function(){this._innerAPI().takeScreenshot()},t.prototype.lockAllDrawingTools=function(){return this._innerAPI().lockAllDrawingTools()},t.prototype.hideAllDrawingTools=function(){return this._innerAPI().hideAllDrawingTools()},t.prototype.drawOnAllCharts=function(t){this._innerAPI().drawOnAllCharts(t)},t.prototype.magnetEnabled=function(){return this._innerAPI().magnetEnabled()},t.prototype.magnetMode=function(){return this._innerAPI().magnetMode()},t.prototype.undoRedoState=function(){return this._innerAPI().undoRedoState()},t.prototype.setIntervalLinkingEnabled=function(t){this._innerAPI().setIntervalLinkingEnabled(t)},t.prototype.setTimeFrame=function(t){this._innerAPI().setTimeFrame(t)},t.prototype.symbolSync=function(){return this._innerAPI().symbolSync()},t.prototype.intervalSync=function(){return this._innerAPI().intervalSync()},t.prototype.crosshairSync=function(){return this._innerAPI().crosshairSync()},t.prototype.timeSync=function(){return this._innerAPI().timeSync()},t.prototype.getAllFeatures=function(){return this._innerWindow().getAllFeatures()},t.prototype.takeClientScreenshot=function(){return this._innerAPI().takeClientScreenshot()},t.prototype._innerAPI=function(){return this._innerWindow().tradingViewApi},t.prototype._innerWindow=function(){return this._iFrame.contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._iFrame.style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render(),o=document.getElementById(this._options.container_id);if(null===o)throw new Error("There is no such element - #"+this._options.container_id);o.innerHTML=e,this._iFrame=o.querySelector("#"+this._id);var n=this._iFrame;(this._options.autosize||this._options.fullscreen)&&(n.style.width="100%",this._options.fullscreen||(n.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize(),this._innerWindowLoaded=new Promise((function(t){var e=function(){n.removeEventListener("load",e,!1),t()};n.addEventListener("load",e,!1)})),this._innerWindowLoaded.then((function(){t._innerWindow().widgetReady((function(){t._ready=!0;for(var e=0,o=t._readyHandlers;e<o.length;e++){var n=o[e];try{n.call(t)}catch(i){console.error(i)}}t._innerWindow().initializationFinished()}))}))},t.prototype._render=function(){var t=window;if(t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.custom_formatters||this._options.customFormatters,brokerFactory:this._options.broker_factory||this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,tradingCustomization:this._options.trading_customization,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.broker_config||this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter,getCustomIndicators:this._options.custom_indicators_getter},this._options.saved_data)t[this._id].chartContent={json:this._options.saved_data};else if(!this._options.load_last_chart&&!this._options.symbol)throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");var e=(this._options.library_path||"")+(encodeURIComponent(this._options.locale)+"-tv-chart.2f0c4150.html#symbol=")+encodeURIComponent(this._options.symbol||"")+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+encodeURIComponent(this._options.toolbar_bg.replace("#","")):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+encodeURIComponent(String(this._options.debug))+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"")+(this._options.compare_symbols?"&compareSymbols="+encodeURIComponent(JSON.stringify(this._options.compare_symbols)):"")+(this._options.theme?"&theme="+encodeURIComponent(String(this._options.theme)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}();window.TradingView=window.TradingView||{},window.TradingView.version=i;


/***/ })

}]);