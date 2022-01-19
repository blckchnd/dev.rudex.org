"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[16],{

/***/ 2790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddOpinionModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2048);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(626);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2303);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(426);
/* harmony import */ var components_Exchange_ExchangeInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2310);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1926);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(596);













class AddOpinionModal extends bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Modal {
  constructor(props) {
    super(props);
    this.state = {
      newOpinionParameters: {
        opinionator: null,
        opinion: this.props.preselectedOpinion,
        amount: this.props.preselectedAmount / Math.pow(10, this.props.baseAsset.get("precision")) || " ",
        probability: this.props.preselectedProbability || null,
        fee: null
      },
      showWarning: false,
      inProgress: false,
      selectedOpinion: this.props.preselectedOpinion,
      selectedAsset: null,
      wrongPropability: false
    };
    this.handleOpinionChange = this.handleOpinionChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleProbabilityChange = this.handleProbabilityChange.bind(this);
  }

  _createOrder() {
    this.setState({
      inProgress: true
    });
    const type = this.state.newOpinionParameters.opinion === "yes" ? "buy" : "shortAndSell";
    const feeID = this.props.baseAsset.get("id");
    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    let bid = {
      for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Asset({
        asset_id: this.props.baseAsset.get("id"),
        precision: this.props.baseAsset.get("precision"),
        amount: this.state.newOpinionParameters.amount * Math.pow(10, this.props.quoteAsset.get("precision")) * this.state.newOpinionParameters.probability
      }),
      to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Asset({
        asset_id: this.props.quoteAsset.get("id"),
        precision: this.props.quoteAsset.get("precision"),
        amount: this.state.newOpinionParameters.amount * Math.pow(10, this.props.quoteAsset.get("precision"))
      })
    };
    bid.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Price({
      base: bid.for_sale,
      quote: bid.to_receive
    });
    let ask = {
      for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Asset({
        asset_id: this.props.quoteAsset.get("id"),
        precision: this.props.quoteAsset.get("precision"),
        amount: this.state.newOpinionParameters.amount * Math.pow(10, this.props.quoteAsset.get("precision"))
      }),
      to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Asset({
        asset_id: this.props.baseAsset.get("id"),
        precision: this.props.baseAsset.get("precision"),
        amount: this.state.newOpinionParameters.amount * Math.pow(10, this.props.quoteAsset.get("precision")) * this.state.newOpinionParameters.probability
      })
    };
    ask.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Price({
      base: ask.for_sale,
      quote: ask.to_receive
    });
    let current = type === "buy" ? ask : bid;

    if (type === "buy") {
      const buy = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.LimitOrderCreate({
        for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Asset({
          asset_id: this.props.baseAsset.get("id"),
          precision: this.props.baseAsset.get("precision"),
          amount: common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].convert_typed_to_satoshi(this.state.newOpinionParameters.amount, this.props.baseAsset)
        }),
        expiration: null,
        to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Asset({
          asset_id: this.props.quoteAsset.get("id"),
          precision: this.props.quoteAsset.get("precision"),
          amount: common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].convert_typed_to_satoshi(this.state.newOpinionParameters.amount, this.props.quoteAsset) / parseFloat(this.state.newOpinionParameters.probability)
        }),
        seller: this.props.currentAccount.get("id"),
        fee: {
          asset_id: feeID,
          amount: 0
        }
      });
      return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_6__["default"].createLimitOrder2(buy).then(result => {
        this.setState({
          inProgress: false
        });

        if (result.error) {
          if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Notification.error({
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

    if (type === "shortAndSell") {
      const sell = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.LimitOrderCreate({
        for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Asset({
          asset_id: this.props.quoteAsset.get("id"),
          precision: this.props.quoteAsset.get("precision"),
          amount: common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].convert_typed_to_satoshi(this.state.newOpinionParameters.amount, this.props.quoteAsset)
        }),
        expiration: null,
        to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Asset({
          asset_id: this.props.baseAsset.get("id"),
          precision: this.props.baseAsset.get("precision"),
          amount: common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].convert_typed_to_satoshi(this.state.newOpinionParameters.amount, this.props.baseAsset) * parseFloat(this.state.newOpinionParameters.probability)
        }),
        seller: this.props.currentAccount.get("id"),
        fee: {
          asset_id: feeID,
          amount: 0
        }
      });
      let collateral = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_5__.Asset({
        amount: sell.amount_for_sale.getAmount(),
        asset_id: this.props.baseAsset.get("id"),
        precision: this.props.baseAsset.get("precision")
      });
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_6__["default"].createPredictionShort(sell, collateral).then(result => {
        this.setState({
          inProgress: false
        });

        if (result.error) {
          if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Notification.error({
            message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.exchange_unknown_error_place_order", {
              amount: buyAssetAmount,
              symbol: buyAsset.symbol
            })
          });
        }
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.preselectedOpinion !== prevProps.preselectedOpinion || this.props.preselectedAmount !== prevProps.preselectedAmount || this.props.preselectedProbability !== prevProps.preselectedProbability) {
      this._updateStateFromProps();
    }
  }

  componentDidMount() {
    this._updateStateFromProps();
  }

  _updateStateFromProps() {
    let newOpinionParameters = this.state.newOpinionParameters;
    newOpinionParameters = Object.assign({}, newOpinionParameters);
    newOpinionParameters.opinion = this.props.preselectedOpinion;
    newOpinionParameters.amount = this.props.preselectedAmount / Math.pow(10, this.props.baseAsset.get("precision")) || " ";
    newOpinionParameters.probability = this.props.preselectedProbability || null;
    this.setState({
      newOpinionParameters,
      selectedOpinion: this.props.preselectedOpinion
    });
  }

  handleOpinionChange() {
    let newOpinion = this.state.newOpinionParameters;
    newOpinion.opinion = newOpinion.opinion === "no" ? "yes" : "no";
    newOpinion.opinionator = this.props.currentAccount.get("id");
    this.setState({
      newOpinionParameters: newOpinion,
      selectedOpinion: newOpinion.opinion
    });
  }

  handleAmountChange({
    amount,
    asset
  }) {
    let newOpinion = this.state.newOpinionParameters;
    newOpinion.amount = amount;
    newOpinion.opinionator = this.props.currentAccount.get("id");
    this.setState({
      newOpinionParameter: newOpinion
    });

    if (typeof asset === "string") {
      this.setState({
        selectedAsset: asset
      });
    }
  }

  handleProbabilityChange(e) {
    let newOpinion = this.state.newOpinionParameters;
    newOpinion.probability = e.target.value;
    this.setState({
      newOpinionParameter: newOpinion,
      wrongProbability: !this._isProbabilityValid(newOpinion)
    });
  }

  _isProbabilityValid(newOpinion = null) {
    if (newOpinion == null) {
      newOpinion = this.state.newOpinionParameters;
    }

    if (!newOpinion.probability || newOpinion.probability <= 0.01 || newOpinion.probability >= 0.99) {
      return false;
    } else {
      return true;
    }
  }

  _isFormValid() {
    return this._isProbabilityValid() && parseFloat(this.state.newOpinionParameters.amount) > 0;
  }

  _getPotentialWinnings() {
    if (this.state.newOpinionParameters.probability && this.state.newOpinionParameters.amount) {
      if (this.state.newOpinionParameters.opinion === "yes") {
        return common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].format_number(this.state.newOpinionParameters.amount / parseFloat(this.state.newOpinionParameters.probability), this.props.baseAsset.get("precision"), false);
      } else {
        return common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].format_number(this.state.newOpinionParameters.amount * (1 + (this.state.newOpinionParameters.probability ? parseFloat(this.state.newOpinionParameters.probability) : 0)), this.props.baseAsset.get("precision"), false);
      }
    } else {
      return 0;
    }
  }

  onSubmit() {
    if (this._isFormValid()) {
      this._createOrder.call(this);
    } else {
      this.setState({
        showWarning: true
      });
    }
  }

  render() {
    const {
      showWarning,
      newOpinionParameters,
      wrongProbability
    } = this.state;
    const footer = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
      type: "primary",
      key: "submit",
      onClick: this.onSubmit,
      disabled: this.state.inProgress
    }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("global.confirm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: "cancel",
      onClick: this.props.onClose,
      disabled: this.state.inProgress
    }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("global.cancel"))];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "prediction.add_opinion_modal.title"
      }),
      visible: this.props.visible,
      onCancel: this.props.onClose,
      overlay: true,
      closable: !this.state.inProgress,
      footer: footer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "prediction-markets--add-prediction-offer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form, {
      className: "full-width",
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.add_opinion_modal.symbol"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, {
      type: "text",
      disabled: true,
      tabIndex: 1,
      value: this.props.predictionMarket.symbol
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.details.prediction"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, {
      type: "text",
      disabled: true,
      tabIndex: 2,
      value: this.props.predictionMarket.condition
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: !newOpinionParameters.probability && showWarning || wrongProbability ? "has-error" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.details.predicated_likelihood"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Exchange_ExchangeInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      placeholder: "0.0",
      onChange: this.handleProbabilityChange,
      value: this.state.newOpinionParameters.probability
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      style: {
        marginBottom: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.details.i_think_that"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Radio.Group, {
      value: this.state.selectedOpinion,
      onChange: this.handleOpinionChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Radio, {
      value: "yes"
    }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("prediction.details.proves_true")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Radio, {
      value: "no"
    }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("prediction.details.incorrect")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.details.premium"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onChange: this.handleAmountChange,
      placeholder: "0.0",
      tabIndex: 6,
      amount: this.state.newOpinionParameters.amount,
      asset: this.props.baseAsset.get("id")
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.details.commission"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      disabled: true,
      amount: Math.min(this.props.predictionMarket.max_market_fee, this.state.newOpinionParameters.amount * this.props.predictionMarket.market_fee / 10000),
      asset: this.props.baseAsset.get("id")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.details.potential_profit"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      disabled: true,
      amount: this._getPotentialWinnings(),
      asset: this.props.baseAsset.get("id")
    }))), this.state.inProgress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "footer.loading"
    }) : null)));
  }

}
AddOpinionModal.propTypes = {
  visible: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  predictionMarket: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().any.isRequired),
  opinion: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().any),
  currentAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAccount.isRequired,
  preselectedOpinion: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  preselectedAmount: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number),
  preselectedProbability: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().number),
  baseAsset: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  quoteAsset: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)
};
AddOpinionModal.defaultProps = {
  visible: false,
  predictionMarket: null,
  opinion: {}
};

/***/ }),

/***/ 2791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateMarketModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2051);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2312);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(607);
/* harmony import */ var chain_asset_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(608);
/* harmony import */ var chain_asset_constants__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chain_asset_constants__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(426);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(912);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);











const IS_BITASSET = true;
class CreateMarketModal extends bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Modal {
  constructor(props) {
    super(props);
    this.state = {
      marketOptions: {
        precision: "5",
        max_supply: 100000,
        max_market_fee: 0,
        market_fee_percent: 0,
        description: {
          main: ""
        },
        reward_percent: 0,
        symbol: ""
      },
      showWarning: false,
      wrongSymbol: false,
      wrongDate: false,
      core_exchange_rate: {
        quote: {
          asset_id: null,
          amount: 1
        },
        base: {
          asset_id: "1.3.0",
          amount: 1
        }
      },
      bitasset_opts: {
        feed_lifetime_sec: 60 * 60 * 24,
        minimum_feeds: 7,
        force_settlement_delay_sec: 60 * 60 * 24,
        force_settlement_offset_percent: 1 * (chain_asset_constants__WEBPACK_IMPORTED_MODULE_7___default().GRAPHENE_1_PERCENT),
        maximum_force_settlement_volume: 20 * (chain_asset_constants__WEBPACK_IMPORTED_MODULE_7___default().GRAPHENE_1_PERCENT),
        short_backing_asset: "1.3.0"
      },
      inProgress: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAssetChange = this.handleAssetChange.bind(this);
    this.handleFeeChange = this.handleFeeChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  _getPermissionsAndFlags() {
    let flagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getFlagBooleans(0, IS_BITASSET);
    let permissionBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getFlagBooleans("all", IS_BITASSET);
    flagBooleans["charge_market_fee"] = true;
    let flags = common_asset_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getFlags(flagBooleans, IS_BITASSET);
    return {
      flags,
      permissions: common_asset_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getPermissions(permissionBooleans, IS_BITASSET)
    };
  }

  _createAsset() {
    let {
      marketOptions,
      core_exchange_rate,
      bitasset_opts
    } = this.state;

    const {
      permissions,
      flags
    } = this._getPermissionsAndFlags();

    const description = JSON.stringify(this.state.marketOptions.description);
    this.setState({
      inProgress: true
    });
    const accountId = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainStore.getAccount(this.props.currentAccount).get("id");
    actions_AssetActions__WEBPACK_IMPORTED_MODULE_5__["default"].createAsset(accountId, marketOptions, flags, permissions, core_exchange_rate, IS_BITASSET, true, bitasset_opts, description).then(result => {
      this.setState({
        inProgress: false
      });
      console.log("... AssetActions.createAsset(account_id, update)", accountId, marketOptions, flags, permissions);
      this.props.onMarketCreated(marketOptions.symbol);
    }).catch(error => {
      console.error(error);
      this.setState({
        inProgress: false
      });
    });
  }

  handleChange(event) {
    let marketOptions = this.state.marketOptions;

    if (event instanceof (moment__WEBPACK_IMPORTED_MODULE_9___default())) {
      event.set("milliseconds", 0);
      event = {
        target: {
          name: "expiry",
          value: event.toISOString()
        }
      };
    }

    switch (event.target.name) {
      case "symbol":
        marketOptions[event.target.name] = event.target.value.toUpperCase();
        break;

      case "main":
      case "condition":
      case "expiry":
        marketOptions.description[event.target.name] = event.target.value;
        break;

      default:
        marketOptions[event.target.name] = event.target.value;
        break;
    }

    this.setState({
      marketOptions
    });
  }

  handleAssetChange(asset) {
    if (asset) {
      let newBitassetOpts = this.state.bitasset_opts;
      let newMarketOptions = this.state.marketOptions;
      let newCoreExchangeRate = this.state.core_exchange_rate;
      newBitassetOpts.short_backing_asset = asset;
      newMarketOptions.precision = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainStore.getAsset(asset).get("precision");
      newCoreExchangeRate.base.asset_id = asset;
      this.setState({
        bitasset_opts: newBitassetOpts,
        core_exchange_rate: newCoreExchangeRate,
        marketOptions: newMarketOptions
      });
    }
  }

  _forcePositive(number) {
    return parseFloat(number) < 0 ? "0" : number;
  }

  handleFeeChange(event) {
    console.log(event);
    let newMarketOptions = this.state.marketOptions;
    newMarketOptions.market_fee_percent = this._forcePositive(event.target.value);
    this.setState({
      marketOptions: newMarketOptions
    });
  }

  _isFormValid() {
    if (this.props.symbols.includes(this.state.marketOptions.symbol)) {
      this.setState({
        wrongSymbol: true
      });
      return false;
    } else {
      this.setState({
        wrongSymbol: false
      });
    }

    let now = new Date();
    let expiry = new Date(this.state.marketOptions.description.expiry);

    if (now > expiry) {
      this.setState({
        wrongDate: true
      });
      return false;
    } else {
      this.setState({
        wrongDate: false
      });
    }

    return this.state.marketOptions.symbol && this.state.marketOptions.description.main && this.state.marketOptions.description.condition && this.state.marketOptions.description.expiry;
  }

  onSubmit(e) {
    if (this._isFormValid()) {
      if (e) {
        e.preventDefault();
      }

      this._createAsset().call(this);
    } else {
      this.setState({
        showWarning: true
      });
    }
  }

  render() {
    const {
      showWarning,
      marketOptions,
      wrongSymbol,
      wrongDate
    } = this.state;
    const footer = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
      type: "primary",
      key: "submit",
      onClick: this.onSubmit,
      disabled: this.state.inProgress
    }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("global.confirm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: "cancel",
      onClick: this.props.onClose,
      disabled: this.state.inProgress
    }, counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("global.cancel"))];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "prediction.create_market_modal.title"
      }),
      visible: this.props.visible,
      onCancel: this.props.onClose,
      overlay: true,
      closable: !this.state.inProgress,
      footer: footer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "prediction-markets--create-prediction-market"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form, {
      className: "full-width",
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: !marketOptions.symbol && showWarning || wrongSymbol ? "has-error" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("prediction.create_market_modal.tooltip_symbol"),
      placement: "topLeft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.create_market_modal.symbol"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      style: {
        marginLeft: "0.5rem"
      },
      theme: "filled",
      type: "question-circle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, {
      name: "symbol",
      type: "text",
      onChange: this.handleChange,
      tabIndex: 1,
      value: this.state.marketOptions.symbol
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: !marketOptions.description.condition && showWarning ? "has-error" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("prediction.create_market_modal.tooltip_condition"),
      placement: "topLeft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.create_market_modal.condition"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      style: {
        marginLeft: "0.5rem"
      },
      theme: "filled",
      type: "question-circle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, {
      name: "condition",
      type: "text",
      onChange: this.handleChange,
      tabIndex: 2
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: !marketOptions.description.main && showWarning ? "has-error" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("prediction.create_market_modal.tooltip_description"),
      placement: "topLeft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.create_market_modal.description"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      style: {
        marginLeft: "0.5rem"
      },
      theme: "filled",
      type: "question-circle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input.TextArea, {
      name: "main",
      onChange: this.handleChange,
      tabIndex: 3
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: !marketOptions.description.expiry && showWarning || wrongDate ? "has-error" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("prediction.create_market_modal.tooltip_resolution_date"),
      placement: "topLeft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.create_market_modal.resolution_date"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      style: {
        marginLeft: "0.5rem"
      },
      theme: "filled",
      type: "question-circle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.DatePicker, {
      style: {
        width: "100%"
      },
      name: "expiry",
      showTime: true,
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("prediction.create_market_modal.select_date_and_time"),
      onChange: this.handleChange,
      onOk: this.handleChange,
      tabIndex: 4
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("prediction.create_market_modal.tooltip_backing_asset"),
      placement: "topLeft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.create_market_modal.backing_asset"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      style: {
        marginLeft: "0.5rem"
      },
      theme: "filled",
      type: "question-circle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
      assets: ["1.3.0", "1.3.27" //gpUSD
      //"1.3.113",
      //"1.3.120",
      //"1.3.121"
      ],
      value: this.state.bitasset_opts.short_backing_asset,
      onChange: this.handleAssetChange,
      tabIndex: 5
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("prediction.create_market_modal.tooltip_commission"),
      placement: "topLeft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.create_market_modal.commission"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      style: {
        marginLeft: "0.5rem"
      },
      theme: "filled",
      type: "question-circle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, {
      tabIndex: 6,
      type: "number",
      value: this.state.marketOptions.market_fee_percent,
      onChange: this.handleFeeChange
    }))), this.state.inProgress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "footer.loading"
    }) : null)));
  }

}
CreateMarketModal.propTypes = {
  visible: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func),
  currentAccount: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
  symbols: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().array),
  onMarketCreated: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func)
};
CreateMarketModal.defaultProps = {
  visible: false
};

/***/ }),

/***/ 2783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2615);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2312);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2311);
/* harmony import */ var _PredictionMarkets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2784);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2302);
/* harmony import */ var _lib_chain_onChainConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2057);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(426);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(607);











const _convertPredictionMarketForUI = asset => {
  let market_fee = 0;
  let max_market_fee = 0;

  if (asset.forPredictions.flagBooleans["charge_market_fee"]) {
    market_fee = asset.options.market_fee_percent;
    max_market_fee = asset.options.max_market_fee;
  }

  const bitassetData = asset.bitasset_data || asset.bitasset || {};
  let uiMarketData = {
    asset: asset,
    short_backing_asset: bitassetData.options.short_backing_asset || "1.3.0",
    asset_id: asset.id,
    issuer: asset.issuer,
    description: asset.forPredictions.description.main,
    symbol: asset.symbol,
    condition: asset.forPredictions.description.condition,
    expiry: asset.forPredictions.description.expiry,
    options: asset.options,
    marketConfidence: 0,
    marketLikelihood: 0,
    market_fee,
    max_market_fee
  };
  return uiMarketData;
};

class PMAssetsContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastAssetSymbol: "",
      predictionMarkets: [],
      fetching: true,
      whitelistedIssuers: [],
      fetchAllAssets: false
    };
  }

  _getPredictionMarketList(assets) {
    return [...assets].map(asset => asset[1]).filter(this._isPredictionMarket).map(this._normalizePredictionMarketAsset);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.assets !== this.props.assets && this.state.fetchAllAssets) {
      const lastAsset = this.props.assets.sort((a, b) => {
        if (a.symbol > b.symbol) {
          return 1;
        } else if (a.symbol < b.symbol) {
          return -1;
        } else {
          return 0;
        }
      }).last();

      const predictionMarkets = this._getPredictionMarketList(this.props.assets);

      actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__["default"].getAssetList.defer(lastAsset.symbol, 100);
      const fetchingFinished = this.state.lastAssetSymbol === lastAsset.symbol;
      setTimeout(() => {
        this.setState({
          predictionMarkets: predictionMarkets,
          lastAssetSymbol: lastAsset.symbol,
          fetchAllAssets: !fetchingFinished,
          fetching: !fetchingFinished
        });
      }, 0);
    }
  }

  UNSAFE_componentWillMount() {
    (0,_lib_chain_onChainConfig__WEBPACK_IMPORTED_MODULE_7__.getPredictionMarketIssuers)().then(whitelistedIssuers => {
      this._getWhitelistedAssets(whitelistedIssuers).then(assets => {
        const predictionMarkets = assets.filter(this._isPredictionMarket).map(this._normalizePredictionMarketAsset);
        this.setState({
          whitelistedIssuers: whitelistedIssuers,
          predictionMarkets,
          fetching: false
        });
      });
    });
  }

  _normalizePredictionMarketAsset(asset) {
    if (!asset.forPredictions) {
      asset.forPredictions = {
        description: common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].parseDescription(asset.options.description),
        flagBooleans: common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].getFlagBooleans(asset.options.flags, true)
      };
    }

    return _convertPredictionMarketForUI(asset);
  }

  _isPredictionMarket(asset) {
    if (!asset) {
      return false;
    }

    const bitassetData = asset.bitasset_data || asset.bitasset || {};
    return bitassetData.is_prediction_market;
  }

  async _getWhitelistedAssets(whitelistedIssuers) {
    let assets = [];
    let accountObjects = await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.FetchChainObjects)(bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainStore.getAccount, whitelistedIssuers, undefined, {});
    accountObjects.forEach(item => {
      if (item) {
        item = item.toJS();
        assets = [...assets, ...item.assets];
      }
    });
    let assetsObjects = await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.FetchChainObjects)(bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainStore.getAsset, assets, undefined, {});
    return assetsObjects.map(item => item.toJS());
  }

  fetchAllAssets() {
    this.setState({
      fetching: true,
      fetchAllAssets: true
    }, () => {
      // wait for 150ms to make sure loading is displayed
      // (BindToCurrentAccount and PredictioMarketsOverviewTable are both debounced)
      setTimeout(() => actions_AssetActions__WEBPACK_IMPORTED_MODULE_3__["default"].getAssetList("", 100), 300);
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PredictionMarkets__WEBPACK_IMPORTED_MODULE_5__["default"], {
      assets: this.props.assets,
      whitelistedIssuers: this.state.whitelistedIssuers,
      predictionMarkets: this.state.predictionMarkets,
      loading: this.state.fetching,
      fetchAllAssets: () => {
        this.fetchAllAssets();
      }
    });
  }

}

PMAssetsContainer = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(PMAssetsContainer, {
  listenTo() {
    return [stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__["default"], _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
  },

  getProps() {
    return {
      assets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().assets,
      bucketSize: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().bucketSize,
      currentGroupOrderLimit: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().currentGroupLimit,
      marketLimitOrders: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().marketLimitOrders
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PMAssetsContainer = (0,_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_2__.bindToCurrentAccount)(PMAssetsContainer));

/***/ }),

/***/ 2789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PredictionMarketDetailsTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2374);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(426);
/* harmony import */ var components_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2786);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1926);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2082);









class PredictionMarketDetailsTable extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  getHeader() {
    const currentAccountId = this.props.currentAccount.get("id");
    return [{
      title: "#",
      dataIndex: "order_id",
      align: "left",
      sorter_inactive: (a, b) => {
        return a.order_id > b.order_id ? 1 : a.order_id < b.order_id ? -1 : 0;
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "nowrap"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.details.predictor"),
      dataIndex: "opinionator",
      align: "left",
      sorter_inactive: (a, b) => {
        let a_name = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.getAccount(a.opinionator).get("name");
        let b_name = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.getAccount(b.opinionator).get("name");
        return a_name > b_name ? 1 : a_name < b_name ? -1 : 0;
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "nowrap"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_2__["default"], {
          account: item
        }));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.details.prediction"),
      dataIndex: "opinion",
      align: "left",
      sorter_inactive: (a, b) => {
        return a.opinion > b.opinion ? 1 : a.opinion < b.opinion ? -1 : 0;
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "nowrap"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.details." + (item == "yes" ? "proves_true" : "incorrect"))));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.details.predicated_likelihood"),
      dataIndex: "likelihood",
      align: "left",
      sortOrder: this.props.opinionFilter == "yes" ? "descend" : "ascend",
      sorter: (a, b) => {
        return a.likelihood > b.likelihood ? 1 : a.likelihood < b.likelihood ? -1 : 0;
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "nowrap"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, (item * 100).toPrecision(3), "%"));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.details.premium"),
      dataIndex: "premium",
      align: "left",
      sorter_inactive: (a, b) => {
        return a.amount > b.amount ? 1 : a.amount < b.amount ? -1 : 0;
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "nowrap"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
          amount: item.amount,
          asset: item.asset_id
        }));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.details.commission"),
      dataIndex: "commission",
      align: "left",
      sorter_inactive: (a, b) => {
        return a.fee > b.fee ? 1 : a.fee < b.fee ? -1 : 0;
      },
      render: (item, row) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "nowrap"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
          amount: item.amount,
          asset: item.asset_id
        }), "\xA0(", (row.commission.amount / row.premium.amount * 100).toPrecision(3), "%)");
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.details.potential_profit"),
      dataIndex: "potentialProfit",
      align: "left",
      sorter_inactive: (a, b) => {
        return a.amount > b.amount ? 1 : a.amount < b.amount ? -1 : 0;
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "nowrap"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_7__["default"], {
          amount: item.amount,
          asset: item.asset_id
        }));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.overview.action"),
      align: "left",
      render: dataItem => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "right"
          }
        }, currentAccountId && dataItem.opinionator === currentAccountId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: () => {
            this.props.onCancel(dataItem);
          }
        }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.details.cancel")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(dataItem.opinion == "yes" ? "prediction.tooltips.oppose_proves_true" : "prediction.tooltips.oppose_is_incorrect")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          style: {
            fontSize: "1.3rem",
            marginRight: "0.5rem"
          },
          type: "question-circle",
          theme: "filled"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: () => {
            this.props.onOppose(dataItem);
          }
        }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.details.oppose")))));
      }
    }];
  }

  render() {
    const header = this.getHeader();
    let filteredOpinions = this.props.predictionMarketData.opinions.filter(item => {
      let accountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.getAccount(item.opinionator) ? bitsharesjs__WEBPACK_IMPORTED_MODULE_4__.ChainStore.getAccount(item.opinionator).get("name") : null;

      if (this.props.detailsSearchTerm) {
        if ((accountName + "\0" + item.opinion).toUpperCase().indexOf(this.props.detailsSearchTerm) === -1) {
          return false;
        }
      }

      if (this.props.opinionFilter) {
        if (this.props.opinionFilter == "all") {
          return true;
        } else {
          if (!(this.props.opinionFilter == item.opinion)) {
            return false;
          }
        }
      }

      return true;
    });
    let i = 0;
    filteredOpinions = filteredOpinions.map(item => ({ ...item,
      key: `${item.order_id}${i++}`
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      rows: filteredOpinions,
      header: header,
      pageSize: 10
    });
  }

}
PredictionMarketDetailsTable.propTypes = {
  predictionMarketData: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().any.isRequired),
  onOppose: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func.isRequired),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func.isRequired),
  currentAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAccount.isRequired,
  detailsSearchTerm: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  opinionFilter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)
};
PredictionMarketDetailsTable.defaultProps = {
  predictionMarketData: {}
};

/***/ }),

/***/ 2784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(607);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2312);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2311);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2303);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PredictionMarketsOverviewTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2785);
/* harmony import */ var _PredictionMarketDetailsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2789);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2701);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2098);
/* harmony import */ var _AddOpinionModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2790);
/* harmony import */ var _CreateMarketModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2791);
/* harmony import */ var _ResolveModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2792);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(426);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(626);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2615);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2302);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1804);





















class PredictionMarkets extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      searchTerm: "",
      detailsSearchTerm: "",
      selectedPredictionMarket: null,
      opinions: [],
      preselectedOpinion: "yes",
      preselectedAmount: 0,
      preselectedProbability: 0,
      isCreateMarketModalOpen: false,
      isAddOpinionModalOpen: false,
      isResolveModalOpen: false,
      isHideUnknownHousesChecked: true,
      isHideInvalidAssetsChecked: true,
      opinionFilter: "yes",
      predictionMarketAssetFilter: "open"
    };
    this.onCreatePredictionMarketModalOpen = this.onCreatePredictionMarketModalOpen.bind(this);
    this.onCreatePredictionMarketModalClose = this.onCreatePredictionMarketModalClose.bind(this);
    this.onAddOpinionModalOpen = this.onAddOpinionModalOpen.bind(this);
    this.onAddOpinionModalClose = this.onAddOpinionModalClose.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSearchDetails = this.onSearchDetails.bind(this);
    this.onMarketAction = this.onMarketAction.bind(this);
    this.onResolveModalOpen = this.onResolveModalOpen.bind(this);
    this.onResolveModalClose = this.onResolveModalClose.bind(this);
    this.updateAsset = this.updateAsset.bind(this);
    this.handleUnknownHousesToggleChange = this.handleUnknownHousesToggleChange.bind(this);
    this.handleInvalidAssetsChecked = this.handleInvalidAssetsChecked.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.marketLimitOrders !== this.props.marketLimitOrders) {
      this._updateOpinionsList(this.props.marketLimitOrders);
    }
  }

  _isKnownIssuer(asset) {
    return this.props.whitelistedIssuers.includes(asset.issuer);
  }

  _isValidPredictionMarketAsset(asset) {
    // must have valid date
    const resolutionDate = new Date(asset.forPredictions.description.expiry);

    if (resolutionDate instanceof Date && isNaN(resolutionDate.getTime())) {
      return false;
    } // must have description and prediction filled


    if (!asset.forPredictions.description.condition) {
      return false;
    }

    if (!asset.forPredictions.description.main) {
      return false;
    } // must have meaningfull description and prediction


    if (asset.forPredictions.description.condition.length < 10) {
      return false;
    }

    if (asset.forPredictions.description.main.length < 20) {
      return false;
    } // market fee may not be crazy


    if (asset.options.market_fee_percent / 100 >= 10) {
      return false;
    }

    return true;
  }

  _updateOpinionsList(fetchedOpinions) {
    let orders = [];
    const selectedMarket = this.state.selectedPredictionMarket;
    fetchedOpinions.forEach((order, order_id) => {
      const opinion = order.market_base === order.sell_price.base.asset_id ? "no" : "yes";
      const refPrice = order.market_base === order.sell_price.base.asset_id ? order.sell_price.invert().toReal() : order.sell_price.toReal();
      const amount = order.market_base === order.sell_price.base.asset_id ? order.amountForSale() : order.amountToReceive();
      const premium = order.market_base === order.sell_price.base.asset_id ? order.amountToReceive() : order.amountForSale();
      const flagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getFlagBooleans(selectedMarket.options.flags, true);
      let fee = 0;

      if (flagBooleans["charge_market_fee"]) {
        fee = Math.min(selectedMarket.options.max_market_fee, amount.amount * selectedMarket.options.market_fee_percent / 10000);
      }

      if (refPrice < 1) {
        orders.push({
          order_id,
          opinionator: order.seller,
          opinion,
          amount,
          likelihood: refPrice,
          potentialProfit: new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__.Asset({
            amount: amount.amount,
            asset_id: premium.asset_id,
            precision: premium.precision
          }),
          premium: premium,
          commission: new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__.Asset({
            amount: fee * refPrice,
            asset_id: premium.asset_id,
            precision: premium.precision
          })
        });
      }
    });
    this.setState({
      opinions: [...orders]
    });
  }

  async getMarketOpinions(market) {
    if (this.state.subscribedMarket) {
      await actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].unSubscribeMarket(this.state.subscribedMarket.quote.get("id"), this.state.subscribedMarket.base.get("id"));
    }

    const base = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__.ChainStore.getObject(market.options.core_exchange_rate.base.asset_id);
    const quote = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__.ChainStore.getAsset(market.options.core_exchange_rate.quote.asset_id);
    await actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].subscribeMarket(base, quote, this.props.bucketSize, this.props.currentGroupOrderLimit);
    this.setState({
      subscribedMarket: {
        base,
        quote
      }
    });
  }

  onMarketAction({
    market,
    action
  }) {
    if (typeof action === "string") {
      //on buttons action
      if (!this.state.selectedPredictionMarket) {
        this.setState({
          selectedPredictionMarket: market
        });
      }

      switch (action) {
        case "resolve":
          {
            this.setState({
              preselectedAmount: 0,
              preselectedProbability: 0
            });
            this.onResolveModalOpen();
            break;
          }

        case "yes":
          {
            if (this.state.subscribedMarket) {
              this.setState({
                preselectedAmount: 0,
                preselectedProbability: 0,
                preselectedOpinion: "yes"
              });
              this.onAddOpinionModalOpen();
            }

            break;
          }

        case "no":
          {
            if (this.state.subscribedMarket) {
              this.setState({
                preselectedAmount: 0,
                preselectedProbability: 0,
                preselectedOpinion: "no"
              });
              this.onAddOpinionModalOpen();
            }

            break;
          }

        default:
          {
            this.setState({
              preselectedAmount: 0,
              preselectedProbability: 0
            });
          }
      }
    } else {
      //on row action
      if (this.state.selectedPredictionMarket) {
        this.setState({
          selectedPredictionMarket: null
        });
      } else {
        this.setState({
          selectedPredictionMarket: market
        }, () => this.getMarketOpinions(market));
      }
    }
  }

  onSearch(event) {
    this.setState({
      searchTerm: event.target.value || ""
    });
  }

  onSearchDetails(event) {
    this.setState({
      detailsSearchTerm: event.target.value || ""
    });
  }

  onCreatePredictionMarketModalOpen() {
    this.setState({
      isCreateMarketModalOpen: true
    });
  }

  onCreatePredictionMarketModalClose() {
    this.setState({
      isCreateMarketModalOpen: false
    });
  }

  onAddOpinionModalOpen() {
    this.setState({
      isAddOpinionModalOpen: true
    });
  }

  onAddOpinionModalClose() {
    this.setState({
      isAddOpinionModalOpen: false,
      preselectedOpinion: "no",
      preselectedAmount: 0,
      preselectedProbability: 0
    });
  }

  onResolveModalOpen() {
    this.setState({
      isResolveModalOpen: true
    });
  }

  onResolveModalClose() {
    this.setState({
      isResolveModalOpen: false
    });
  }

  handleUnknownHousesToggleChange() {
    const isHideUnknownHousesChecked = !this.state.isHideUnknownHousesChecked;
    this.setState({
      isHideUnknownHousesChecked,
      selectedPredictionMarket: null
    }, () => this.props.fetchAllAssets());
  }

  handleInvalidAssetsChecked() {
    this.setState({
      isHideInvalidAssetsChecked: !this.state.isHideInvalidAssetsChecked,
      selectedPredictionMarket: null
    });
  }

  onOppose = opinion => {
    this.setState({
      preselectedOpinion: opinion.opinion === "no" ? "yes" : "no",
      preselectedAmount: opinion.amount,
      preselectedProbability: opinion.probability
    });
    this.onAddOpinionModalOpen();
  };
  onCancelOpinion = opinion => {
    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].cancelLimitOrders(this.props.currentAccount.get("id"), [opinion.order_id]).catch(err => {
      console.log("cancel orders error:", err);
    });
  };
  onResolveMarket = market => {
    const account = this.props.currentAccount.get("id");
    const globalSettlementPrice = market.result === "yes" ? 1 : 0;
    const asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__.ChainStore.getAsset(market.asset_id).toJS();
    let base = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__.Asset({
      real: 1,
      asset_id: asset.id,
      precision: asset.precision
    });
    let quoteAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__.ChainStore.getAsset(asset.bitasset.options.short_backing_asset);
    let quote = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__.Asset({
      real: globalSettlementPrice,
      asset_id: asset.bitasset.options.short_backing_asset,
      precision: quoteAsset.get("precision")
    });
    let price = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__.Price({
      quote,
      base
    });
    actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__["default"].assetGlobalSettle(asset, account, price).then(() => {
      let pause = new Promise(resolve => setTimeout(resolve, 1000));
      pause.then(() => {
        this.updateAsset(asset.symbol);
      });
    });
    this.setState({
      isResolveModalOpen: false
    });
  };

  updateAsset(symbol) {
    actions_AssetActions__WEBPACK_IMPORTED_MODULE_2__["default"].getAssetList.defer(symbol, 1);
  }

  _filterMarkets() {
    const filter = this.state.predictionMarketAssetFilter;
    const markets = this.props.predictionMarkets.filter(assetInfo => {
      const asset = assetInfo.asset;

      if (!asset) {
        return false;
      }

      const bitassetData = asset.bitasset_data || asset.bitasset || {};

      if (this.state.isHideUnknownHousesChecked && !this._isKnownIssuer(asset)) {
        return false;
      } else if (this.state.isHideInvalidAssetsChecked && !this._isValidPredictionMarketAsset(asset)) {
        return false;
      } else {
        let accountName = bitsharesjs__WEBPACK_IMPORTED_MODULE_13__.ChainStore.getAccount(asset.issuer) ? bitsharesjs__WEBPACK_IMPORTED_MODULE_13__.ChainStore.getAccount(asset.issuer).get("name") : null;

        if (accountName && this.state.searchTerm) {
          let noMatch = (accountName + "\0" + asset.condition + "\0" + asset.description).toUpperCase().indexOf(this.state.searchTerm) !== -1;

          if (noMatch) {
            return false;
          }
        }

        if (filter && filter !== "all") {
          const resolutionDate = new Date(asset.forPredictions.description.expiry);
          const settlementFund = bitassetData.settlement_fund || 0;
          const isExpiredOrResolved = settlementFund > 0 || resolutionDate < new Date();

          if (filter === "open") {
            return !isExpiredOrResolved;
          } else if (filter === "past_resolution_date") {
            return isExpiredOrResolved;
          } else {
            return false;
          }
        } else {
          return true;
        }
      }
    });
    return markets;
  }

  getOverviewSection() {
    const setPredictionMarketAssetFilter = e => {
      this.setState({
        predictionMarketAssetFilter: e.target.value
      });
    };

    const predictionMarketsToShow = this._filterMarkets();

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-selector",
      style: {
        display: "inline-block",
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onChange: this.onSearch,
      value: this.state.searchTerm
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio.Group, {
      style: {
        marginLeft: "20px"
      },
      value: this.state.predictionMarketAssetFilter,
      onChange: setPredictionMarketAssetFilter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio, {
      value: "all"
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.overview.all")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio, {
      value: "open"
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.overview.open")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio, {
      value: "past_resolution_date"
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.overview.past_resolution_date"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Switch, {
      style: {
        marginLeft: "20px",
        cursor: "pointer"
      },
      onChange: this.handleUnknownHousesToggleChange,
      checked: this.state.isHideUnknownHousesChecked
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_16___default()), {
      onClick: this.handleUnknownHousesToggleChange,
      content: "prediction.overview.hide_unknown_houses",
      style: {
        marginLeft: "10px",
        cursor: "pointer"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.tooltips.hide_unknown_houses")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
      style: {
        marginLeft: "0.5rem"
      },
      type: "question-circle",
      theme: "filled"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Switch, {
      style: {
        marginLeft: "20px",
        cursor: "pointer"
      },
      onChange: this.handleInvalidAssetsChecked,
      checked: this.state.isHideInvalidAssetsChecked
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_16___default()), {
      onClick: this.handleInvalidAssetsChecked,
      content: "prediction.overview.hide_invalid_asset",
      style: {
        marginLeft: "10px",
        cursor: "pointer"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.tooltips.hide_invalid_asset")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
      style: {
        marginLeft: "0.5rem"
      },
      type: "question-circle",
      theme: "filled"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter-status"
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("utility.x_assets_hidden", {
      count: this.props.predictionMarkets.length - predictionMarketsToShow.length,
      total: this.props.predictionMarkets.length
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-selector",
      style: {
        display: "inline-block",
        width: "100%",
        paddingTop: "0rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "action-buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.tooltips.create_prediction_market_asset")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
      style: {
        fontSize: "1.3rem",
        marginRight: "0.5rem"
      },
      type: "question-circle",
      theme: "filled"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Button, {
      onClick: this.onCreatePredictionMarketModalOpen
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.overview.create_market")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PredictionMarketsOverviewTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      predictionMarkets: predictionMarketsToShow,
      currentAccount: this.props.currentAccount,
      onMarketAction: this.onMarketAction,
      selectedPredictionMarket: this.state.selectedPredictionMarket,
      loading: this.props.loading
    }));
  }

  getDetailsSection() {
    const setOpinionFilter = e => {
      this.setState({
        opinionFilter: e.target.value
      });
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.details.list_of_current_prediction_offers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.tooltips.what_is_a_prediction_offer")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
      style: {
        marginLeft: "0.5rem"
      },
      type: "question-circle",
      theme: "filled"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-selector",
      style: {
        display: "inline-block",
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onChange: this.onSearchDetails,
      value: this.state.detailsSearchTerm,
      autoComplete: "off"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio.Group, {
      style: {
        marginLeft: "20px"
      },
      value: this.state.opinionFilter,
      onChange: setOpinionFilter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio, {
      value: "all"
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.details.all")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio, {
      value: "yes"
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.details.proves_true")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Radio, {
      value: "no"
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.details.incorrect")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "action-buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.tooltips.add_prediction")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
      style: {
        fontSize: "1.3rem",
        marginRight: "0.5rem"
      },
      type: "question-circle",
      theme: "filled"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Button, {
      onClick: this.onAddOpinionModalOpen
    }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("prediction.details.add_prediction")))), this.state.opinions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PredictionMarketDetailsTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
      predictionMarketData: {
        predictionMarket: this.state.selectedPredictionMarket,
        opinions: this.state.opinions
      },
      currentAccount: this.props.currentAccount,
      onOppose: this.onOppose,
      onCancel: this.onCancelOpinion,
      detailsSearchTerm: this.state.detailsSearchTerm.toUpperCase(),
      opinionFilter: this.state.opinionFilter
    }) : null);
  }

  render() {
    const symbols = [...this.props.assets].map(item => item[1].symbol);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "prediction-markets grid-block vertical",
      style: {
        overflow: "visible",
        margin: "15px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-12 shrink",
      style: {
        overflow: "visible"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      path: "components/PredictionMarkets"
    })), this.getOverviewSection(), this.state.selectedPredictionMarket ? this.getDetailsSection() : null, this.state.isCreateMarketModalOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CreateMarketModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
      visible: this.state.isCreateMarketModalOpen,
      onClose: this.onCreatePredictionMarketModalClose,
      currentAccount: this.props.currentAccount.get("id"),
      symbols: symbols,
      onMarketCreated: this.updateAsset
    }) : null, this.state.isAddOpinionModalOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddOpinionModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      visible: this.state.isAddOpinionModalOpen,
      onClose: this.onAddOpinionModalClose,
      predictionMarket: this.state.selectedPredictionMarket,
      opinion: this.state.initialOpinion,
      currentAccount: this.props.currentAccount,
      preselectedOpinion: this.state.preselectedOpinion,
      preselectedAmount: this.state.preselectedAmount,
      preselectedProbability: this.state.preselectedProbability,
      baseAsset: this.state.subscribedMarket.base,
      quoteAsset: this.state.subscribedMarket.quote
    }) : null, this.state.isResolveModalOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ResolveModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      visible: this.state.isResolveModalOpen,
      onClose: this.onResolveModalClose,
      predictionMarket: this.state.selectedPredictionMarket,
      onResolveMarket: this.onResolveMarket
    }) : null);
  }

}

PredictionMarkets = (0,alt_react__WEBPACK_IMPORTED_MODULE_19__.connect)(PredictionMarkets, {
  listenTo() {
    return [stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__["default"], _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__["default"]];
  },

  getProps() {
    return {
      assets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().assets,
      bucketSize: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().bucketSize,
      currentGroupOrderLimit: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().currentGroupLimit,
      marketLimitOrders: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().marketLimitOrders
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PredictionMarkets = (0,_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_17__.bindToCurrentAccount)(PredictionMarkets));

/***/ }),

/***/ 2785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2375);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2374);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(426);
/* harmony import */ var components_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2786);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1926);
/* harmony import */ var _actions_MarketsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2303);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2074);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2082);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(596);














__webpack_require__(2788);

class PredictionMarketsOverviewTable extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: {}
    };
    this.tickersLoaded = {};
  }

  onMarketAction(dataItem, option = "yes") {
    this.props.onMarketAction({
      market: dataItem,
      action: option
    });
  }

  onRowAction = dataItem => {
    return {
      onClick: this.onMarketAction.bind(this, dataItem)
    };
  };

  getHeader() {
    const isOwnedByCurrent = id => this.props.currentAccount.get("id") === id;

    return [{
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("account.asset"),
      dataIndex: "asset_id",
      align: "left",
      defaultSortOrder: "ascend",
      sorter: (a, b) => {
        return a.symbol > b.symbol ? 1 : a.symbol < b.symbol ? -1 : 0;
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "nowrap"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_2__["default"], {
          asset: item
        }));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.overview.issuer"),
      dataIndex: "issuer",
      align: "left",
      sorter: (a, b) => {
        let a_issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getAccount(a.issuer);
        let b_issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getAccount(b.issuer);
        let a_name = null,
            b_name = null;

        if (a_issuer && b_issuer) {
          a_name = a_issuer.get("name");
          b_name = b_issuer.get("name");
        }

        return a_name > b_name ? 1 : a_name < b_name ? -1 : 0;
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "nowrap"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], {
          account: item
        }));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.overview.prediction"),
      dataIndex: "condition",
      align: "left",
      sorter: (a, b) => {
        if (!a.condition || a.condition === "") return -1;
        if (!b.condition || b.condition === "") return 1;
        return a.condition.localeCompare(b.condition);
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "normal"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.overview.market_confidence"),
      dataIndex: "marketConfidence",
      align: "left",
      sorter: (a, b) => {
        return a.marketConfidence > b.marketConfidence ? 1 : a.marketConfidence < b.marketConfidence ? -1 : 0;
      },
      render: (item, row) => {
        const ticker = Object.assign({}, this.state.ticker[row.asset_id]);

        if (this.state.ticker[row.asset_id]) {
          if (!ticker.quote_volume || ticker.quote_volume === "0" || ticker.quote_volume === "1" || ticker.quote_volume === "NaN" || ticker.quote_volume === "-NaN") {
            ticker.quote_volume = 0;
          } else {
            ticker.quote_volume = common_utils__WEBPACK_IMPORTED_MODULE_11__["default"].convert_typed_to_satoshi(parseFloat(ticker.quote_volume), bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getAsset(row.short_backing_asset));
          }

          if (!ticker.percent_change || ticker.percent_change === "NaN" || ticker.percent_change === "-NaN") {
            ticker.percent_change = "-";
          } else {
            if (ticker.percent_change == "0") {
              ticker.percent_change = "0%";
            } else {
              ticker.percent_change = (parseFloat(ticker.latest) > 0 ? "+" : "-") + ticker.percent_change + "%";
            }
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("exchange.vol_short"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_10__["default"], {
            amount: ticker.quote_volume,
            asset: row.short_backing_asset
          }), "\xA0");
        } else {
          return null;
        }
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.overview.market_predicated_likelihood"),
      dataIndex: "marketLikelihood",
      align: "left",
      sorter: (a, b) => {
        return a.marketLikelihood > b.marketLikelihood ? 1 : a.marketLikelihood < b.marketLikelihood ? -1 : 0;
      },
      render: (item, row) => {
        const ticker = Object.assign({}, this.state.ticker[row.asset_id]);

        if (this.state.ticker[row.asset_id]) {
          if (!ticker.latest || ticker.latest === "0" || ticker.latest === "1" || ticker.latest === "NaN" || ticker.latest === "-NaN") {
            ticker.latest = "-";
          } else {
            ticker.latest = (parseFloat(ticker.latest) * 100).toPrecision(3) + "%";
          }

          if (!ticker.highest_bid || ticker.highest_bid === "0" || ticker.highest_bid === "1" || ticker.highest_bid === "NaN" || ticker.highest_bid === "-NaN") {
            ticker.highest_bid = "-";
          } else {
            ticker.highest_bid = (parseFloat(ticker.highest_bid) * 100).toPrecision(3) + "%";
          }

          if (!ticker.lowest_ask || ticker.lowest_ask === "0" || ticker.lowest_ask === "1" || ticker.lowest_ask === "NaN" || ticker.lowest_ask === "-NaN") {
            ticker.lowest_ask = "-";
          } else {
            ticker.lowest_ask = (parseFloat(ticker.lowest_ask) * 100).toPrecision(3) + "%";
          }

          return ticker.latest !== "-" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, ticker.latest, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "supsub"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", {
            className: "superscript"
          }, ticker.highest_bid), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sub", {
            className: "subscript"
          }, ticker.lowest_ask)), "\xA0\xA0\xA0") : "-";
        } else {
          return null;
        }
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.overview.description"),
      dataIndex: "description",
      align: "left",
      sorter: (a, b) => {
        if (!a.description || a.description === "") return -1;
        if (!b.description || b.description === "") return 1;
        return a.description.localeCompare(b.description);
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "normal"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.overview.expiry"),
      dataIndex: "expiry",
      align: "left",
      sorter: (a, b) => {
        if (!a.expiry || a.expiry === "") return -1;
        if (!b.expiry || b.expiry === "") return 1;
        return a.expiry.localeCompare(b.expiry);
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            whiteSpace: "normal"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item));
      }
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.overview.action"),
      align: "center",
      render: dataItem => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }
        }, isOwnedByCurrent(dataItem.issuer) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__.Button, {
          style: {
            width: "170px"
          },
          className: "align-middle",
          onClick: () => this.onMarketAction(dataItem, "resolve")
        }, counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("prediction.overview.resolve")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__.Button, {
          style: {
            marginRight: "5px"
          },
          className: "align-middle",
          onClick: () => this.onMarketAction(dataItem, "yes")
        }, "Details")));
      }
    }];
  }

  _decideRowClassName(row, index) {
    return this.props.selectedPredictionMarket ? "selected-row" : "";
  }

  componentDidUpdate(prevProps) {
    if (prevProps.predictionMarkets.length !== this.props.predictionMarkets.length) {
      this.props.predictionMarkets.forEach(market => {
        if (!(market.asset.id in Object.keys(this.tickersLoaded))) {
          this.tickersLoaded[market.asset.id] = {};
          _actions_MarketsActions__WEBPACK_IMPORTED_MODULE_8__["default"].getTicker(market.short_backing_asset, market.asset.id).then(result => {
            let ticker = Object.assign(this.tickersLoaded, this.state.ticker);
            ticker[market.asset.id] = result;
            this.tickersLoaded[market.asset.id] = result;
            this.setState({
              ticker
            });
          }).catch(err => console.error(err));
        }
      });
    }
  }

  render() {
    const header = this.getHeader();
    let filteredMarkets = [];

    if (this.props.selectedPredictionMarket) {
      filteredMarkets = [this.props.selectedPredictionMarket];
    } else {
      if (this.props.predictionMarkets) {
        filteredMarkets = this.props.predictionMarkets;
        let i = 0;
        filteredMarkets = filteredMarkets.map(item => ({ ...item,
          key: `${item.asset_id}${i++}`
        }));
      }
    }

    const rowSelection = {
      type: this.props.selectedPredictionMarket ? undefined : "radio",
      hideDefaultSelections: true,
      // Uncomment the following line to show translated text as a cancellable column header instead of checkbox
      //columnTitle: counterpart.translate("wallet.cancel")
      onChange: (selectedRowKeys, selectedRows) => {
        if (selectedRows.length > 0) {
          this.onMarketAction(selectedRows[0], null);
        } else {
          this.onMarketAction(null, null);
        }
      },
      // Required in order resetSelected to work
      selectedRowKeys: this.props.selectedPredictionMarket ? [this.props.selectedPredictionMarket.key] : []
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      rowSelection: rowSelection,
      rows: filteredMarkets,
      header: header,
      pageSize: 10,
      rowClassName: this._decideRowClassName.bind(this),
      loading: this.props.loading,
      totalLabel: "utility.total_x_assets"
    });
  }

}

PredictionMarketsOverviewTable.propTypes = {
  predictionMarkets: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().array.isRequired),
  onMarketAction: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func.isRequired),
  currentAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainAccount.isRequired,
  selectedPredictionMarket: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)
};
PredictionMarketsOverviewTable.defaultProps = {
  predictionMarkets: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PredictionMarketsOverviewTable = (0,react_debounce_render__WEBPACK_IMPORTED_MODULE_9__["default"])(PredictionMarketsOverviewTable, 150, {
  leading: false
}));

/***/ }),

/***/ 2792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResolveModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);





class ResolveModal extends bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Modal {
  constructor(props) {
    super(props);
    this.state = {
      resolveParameters: {
        asset_id: this.props.predictionMarket.asset_id,
        result: "yes"
      },
      result: "yes"
    };
    this.handleResultChange = this.handleResultChange.bind(this);
  }

  handleResultChange(event) {
    const result = event.target.value;
    this.setState({
      resolveParameters: { ...this.state.resolveParameters,
        result
      },
      result
    });
  }

  render() {
    const footer = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
      type: "primary",
      key: "submit",
      onClick: () => this.props.onResolveMarket(this.state.resolveParameters),
      disabled: this.state.inProgress
    }, counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("global.confirm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: "cancel",
      onClick: this.props.onClose,
      disabled: this.state.inProgress
    }, counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("global.cancel"))];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "prediction.resolve_modal.title"
      }),
      visible: this.props.visible,
      onCancel: this.props.onClose,
      overlay: true,
      closable: !this.state.inProgress,
      footer: footer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "prediction-markets--resolve-prediction-market-asset"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form, {
      className: "full-width",
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.resolve_modal.symbol"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, {
      type: "text",
      disabled: true,
      tabIndex: 1,
      value: this.props.predictionMarket.symbol
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.resolve_modal.prediction"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, {
      type: "text",
      disabled: true,
      tabIndex: 2,
      value: this.props.predictionMarket.condition
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Form.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "prediction.resolve_modal.the_prediction_has"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Radio.Group, {
      value: this.state.result,
      onChange: this.handleResultChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Radio, {
      value: "yes"
    }, counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("prediction.resolve_modal.proven_true")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Radio, {
      value: "no"
    }, counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("prediction.resolve_modal.was_incorrect")))))));
  }

}
ResolveModal.propTypes = {
  predictionMarket: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any.isRequired),
  onResolveMarket: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  visible: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
ResolveModal.defaultProps = {
  visible: false,
  predictionMarket: null
};

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

/***/ 2786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaginatedList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2787);




class PaginatedList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static defaultProps = {
    rows: [],
    pageSize: 20,
    className: "table",
    extraRow: null,
    style: {
      paddingBottom: "1rem"
    },
    loading: false,
    // can be a string (assumes the translation has one argument, total count),
    // or an object, which allows a custom label
    totalLabel: "utility.total_x_items",
    // @deprecated, use totalLabel
    label: null
  };

  constructor(props) {
    super(props);
    this.state = {
      pageSize: props.pageSize
    };
  }

  render() {
    const {
      pageSize
    } = this.state;
    const {
      header,
      rows,
      extraRow,
      loading
    } = this.props;
    const pageSizeOptions = [10, 20, 30, 40, 50, 100].filter(item => item < Math.max(this.props.pageSize, rows.length));
    pageSizeOptions.push(Math.max(this.props.pageSize, rows.length));
    let totalColumnsLabel = null;

    if (this.props.label !== null) {
      totalColumnsLabel = total => {
        return counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(this.props.label, {
          count: total
        });
      };
    } else if (typeof this.props.totalLabel === "string") {
      totalColumnsLabel = total => {
        return counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(this.props.totalLabel, {
          count: total
        });
      };
    } else if (typeof this.props.totalLabel === "object") {
      totalColumnsLabel = total => {
        return counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate(this.props.totalLabel.key, {
          count: total,
          ...this.props.totalLabel.args
        });
      };
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "paginated-list",
      style: this.props.style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Table, {
      loading: loading,
      dataSource: rows,
      uns: true,
      columns: Array.isArray(header) ? header : [],
      footer: () => extraRow ? extraRow : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\xA0"),
      onChange: this.props.toggleSortOrder,
      pagination: {
        showSizeChanger: true,
        hideOnSinglePage: false,
        defaultPageSize: pageSize,
        pageSizeOptions: pageSizeOptions.map(o => o.toString()),
        showTotal: (total, range) => totalColumnsLabel(total)
      },
      rowClassName: this.props.rowClassName == null ? undefined : (record, index) => this.props.rowClassName(record, index),
      rowSelection: this.props.rowSelection
    }), this.props.children);
  }

}

/***/ }),

/***/ 2701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const searchInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
function SearchInput({
  onChange,
  value,
  placeholder,
  maxLength,
  style,
  className,
  name,
  autoComplete,
  onClear,
  type,
  ...other
}) {
  if (onClear == undefined) {
    // if onClear=null, then it won't be rendered
    onClear = () => {
      onChange({
        target: {
          value: ""
        }
      });
      searchInput.current.focus();
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Input, _extends({
    ref: searchInput,
    autoComplete: autoComplete,
    style: style,
    type: type,
    className: className + " search-input",
    placeholder: placeholder,
    maxLength: maxLength,
    name: name,
    value: value,
    onChange: onChange,
    addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      type: "search"
    }),
    suffix: onClear ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      onClick: onClear,
      type: "close" // always include DOM the icon, otherwise user looses focus when it appears and input resizes
      ,
      className: value ? "cursor-pointer" : "hide"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null)
  }, other));
}
SearchInput.propTypes = {
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  // can be undefined when no user input is present
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  onClear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
SearchInput.defaultProps = {
  placeholder: counterpart__WEBPACK_IMPORTED_MODULE_2___default().translate("exchange.filter"),
  style: {
    width: "200px"
  },
  className: "",
  type: "text",
  name: "focus",
  autoComplete: "off",
  maxLength: 16,
  onClear: undefined
};

/***/ }),

/***/ 2788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG0uNjEzMmYxYzY5NWFkNDQzMzAxODQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBckJBO0FBMkJBO0FBRUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFIQTtBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBckJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFNQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFTQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFZQTtBQURBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBS0E7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVJBO0FBY0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBU0E7QUFYQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFBQTtBQU1BOztBQTVjQTtBQStjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFSQTtBQVVBO0FBakNBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQWRBOztBQWdCQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQVFBO0FBQUE7QUFFQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBWUE7QUFEQTtBQVFBO0FBQUE7QUFFQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVdBO0FBREE7QUFRQTtBQUFBO0FBRUE7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBVUE7QUFEQTtBQVNBO0FBQUE7QUFFQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBVUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBWEE7QUFrQkE7QUFBQTtBQUVBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFJQTtBQUNBO0FBYkE7QUFrQkE7QUFBQTtBQUVBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQVBBO0FBWUE7QUFBQTtBQU1BOztBQWxjQTtBQXFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbmVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7O0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFTQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTs7QUEzSUE7O0FBOElBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBWEE7QUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBREE7QUFRQTtBQXJCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUdBO0FBdkJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQWVBO0FBNUJBO0FBK0JBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBUUE7QUF6QkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUF4QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUZBO0FBWUE7QUExQkE7QUE2QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUExQkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQWFBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUhBO0FBY0E7QUF4REE7QUEyREE7O0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOztBQXZTQTtBQTBTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWtCQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUlBO0FBSUE7QUFJQTs7QUFDQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBWkE7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBR0E7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBcENBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7O0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBREE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQVVBO0FBQUE7QUFFQTtBQUdBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBQUE7QUFFQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFVQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBV0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBT0E7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQU9BO0FBQUE7QUFFQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBU0E7QUFDQTtBQUVBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFlQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBWkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBOztBQXpzQkE7O0FBNHNCQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQU9BOztBQVpBO0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNudkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUdBO0FBdEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFHQTtBQXpCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBUUE7QUFuQkE7QUFzQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBSUE7O0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBOztBQUNBO0FBS0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFuRUE7QUFzRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBSUE7O0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFJQTs7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFwRkE7QUF1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQVFBO0FBbkJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBREE7QUFRQTtBQW5CQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQXdCQTtBQXhEQTtBQTJEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFpQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7O0FBamJBOztBQW9iQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBREE7QUFJQTtBQUdBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQVFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFMQTtBQU9BOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFLQTtBQUFBO0FBV0E7O0FBeEdBO0FBMkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBCQTtBQXVCQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTs7QUFaQTtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWRBOztBQWlCQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFNQTtBQXBCQTtBQXlCQTs7QUFwRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBZEE7QUEyQkE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTs7Ozs7Ozs7QUN4RUE7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvUHJlZGljdGlvbk1hcmtldHMvQWRkT3Bpbmlvbk1vZGFsLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uTWFya2V0cy9DcmVhdGVNYXJrZXRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvUHJlZGljdGlvbk1hcmtldHMvUE1Bc3NldHNDb250YWluZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1ByZWRpY3Rpb25NYXJrZXRzL1ByZWRpY3Rpb25NYXJrZXREZXRhaWxzVGFibGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1ByZWRpY3Rpb25NYXJrZXRzL1ByZWRpY3Rpb25NYXJrZXRzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uTWFya2V0cy9QcmVkaWN0aW9uTWFya2V0c092ZXJ2aWV3VGFibGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1ByZWRpY3Rpb25NYXJrZXRzL1Jlc29sdmVNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DdXJyZW50QWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9QYWdpbmF0ZWRMaXN0LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1NlYXJjaElucHV0LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9QcmVkaWN0aW9uTWFya2V0cy9wcmVkaWN0aW9uLnNjc3M/ZGY4OCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L3BhZ2luYXRlZC1saXN0LnNjc3M/MzYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TW9kYWwsIElucHV0LCBGb3JtLCBTd2l0Y2gsIEJ1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7QXNzZXQsIFByaWNlLCBMaW1pdE9yZGVyQ3JlYXRlfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uLCBSYWRpb30gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmUsIEZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgRXhjaGFuZ2VJbnB1dCBmcm9tIFwiY29tcG9uZW50cy9FeGNoYW5nZS9FeGNoYW5nZUlucHV0XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZE9waW5pb25Nb2RhbCBleHRlbmRzIE1vZGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBuZXdPcGluaW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICAgICAgb3BpbmlvbmF0b3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGluaW9uOiB0aGlzLnByb3BzLnByZXNlbGVjdGVkT3BpbmlvbixcclxuICAgICAgICAgICAgICAgIGFtb3VudDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByZXNlbGVjdGVkQW1vdW50IC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coMTAsIHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcInByZWNpc2lvblwiKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBcIiBcIixcclxuICAgICAgICAgICAgICAgIHByb2JhYmlsaXR5OiB0aGlzLnByb3BzLnByZXNlbGVjdGVkUHJvYmFiaWxpdHkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGZlZTogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93V2FybmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGluUHJvZ3Jlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZE9waW5pb246IHRoaXMucHJvcHMucHJlc2VsZWN0ZWRPcGluaW9uLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEFzc2V0OiBudWxsLFxyXG4gICAgICAgICAgICB3cm9uZ1Byb3BhYmlsaXR5OiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlT3BpbmlvbkNoYW5nZSA9IHRoaXMuaGFuZGxlT3BpbmlvbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQW1vdW50Q2hhbmdlID0gdGhpcy5oYW5kbGVBbW91bnRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUHJvYmFiaWxpdHlDaGFuZ2UgPSB0aGlzLmhhbmRsZVByb2JhYmlsaXR5Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZU9yZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2luUHJvZ3Jlc3M6IHRydWV9KTtcclxuICAgICAgICBjb25zdCB0eXBlID1cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdPcGluaW9uUGFyYW1ldGVycy5vcGluaW9uID09PSBcInllc1wiXHJcbiAgICAgICAgICAgICAgICA/IFwiYnV5XCJcclxuICAgICAgICAgICAgICAgIDogXCJzaG9ydEFuZFNlbGxcIjtcclxuICAgICAgICBjb25zdCBmZWVJRCA9IHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcImlkXCIpO1xyXG5cclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgICAgICBsZXQgYmlkID0ge1xyXG4gICAgICAgICAgICBmb3Jfc2FsZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50ICpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInByZWNpc2lvblwiKSkgKlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMucHJvYmFiaWxpdHlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHRvX3JlY2VpdmU6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50ICpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInByZWNpc2lvblwiKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJpZC5wcmljZSA9IG5ldyBQcmljZSh7YmFzZTogYmlkLmZvcl9zYWxlLCBxdW90ZTogYmlkLnRvX3JlY2VpdmV9KTtcclxuICAgICAgICBsZXQgYXNrID0ge1xyXG4gICAgICAgICAgICBmb3Jfc2FsZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdPcGluaW9uUGFyYW1ldGVycy5hbW91bnQgKlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucG93KDEwLCB0aGlzLnByb3BzLnF1b3RlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdG9fcmVjZWl2ZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50ICpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgdGhpcy5wcm9wcy5xdW90ZUFzc2V0LmdldChcInByZWNpc2lvblwiKSkgKlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMucHJvYmFiaWxpdHlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFzay5wcmljZSA9IG5ldyBQcmljZSh7YmFzZTogYXNrLmZvcl9zYWxlLCBxdW90ZTogYXNrLnRvX3JlY2VpdmV9KTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0eXBlID09PSBcImJ1eVwiID8gYXNrIDogYmlkO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJidXlcIikge1xyXG4gICAgICAgICAgICBjb25zdCBidXkgPSBuZXcgTGltaXRPcmRlckNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmb3Jfc2FsZTogbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1dGlscy5jb252ZXJ0X3R5cGVkX3RvX3NhdG9zaGkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRvX3JlY2VpdmU6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5jb252ZXJ0X3R5cGVkX3RvX3NhdG9zaGkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5KVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBzZWxsZXI6IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogZmVlSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIE1hcmtldHNBY3Rpb25zLmNyZWF0ZUxpbWl0T3JkZXIyKGJ1eSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5Qcm9ncmVzczogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IubWVzc2FnZSAhPT0gXCJ3YWxsZXQgbG9ja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmV4Y2hhbmdlX3Vua25vd25fZXJyb3JfcGxhY2Vfb3JkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBjdXJyZW50LnRvX3JlY2VpdmUuZ2V0QW1vdW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogY3VycmVudC50b19yZWNlaXZlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvcmRlciBmYWlsZWQ6XCIsIGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJzaG9ydEFuZFNlbGxcIikge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxsID0gbmV3IExpbWl0T3JkZXJDcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZm9yX3NhbGU6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMucXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1dGlscy5jb252ZXJ0X3R5cGVkX3RvX3NhdG9zaGkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGV4cGlyYXRpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b19yZWNlaXZlOiBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcInByZWNpc2lvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmNvbnZlcnRfdHlwZWRfdG9fc2F0b3NoaShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5uZXdPcGluaW9uUGFyYW1ldGVycy5wcm9iYWJpbGl0eSlcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgc2VsbGVyOiB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgZmVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGZlZUlELFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBzZWxsLmFtb3VudF9mb3Jfc2FsZS5nZXRBbW91bnQoKSxcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5jcmVhdGVQcmVkaWN0aW9uU2hvcnQoc2VsbCwgY29sbGF0ZXJhbCkudGhlbihcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5Qcm9ncmVzczogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IubWVzc2FnZSAhPT0gXCJ3YWxsZXQgbG9ja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmV4Y2hhbmdlX3Vua25vd25fZXJyb3JfcGxhY2Vfb3JkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBidXlBc3NldEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogYnV5QXNzZXQuc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHJlc2VsZWN0ZWRPcGluaW9uICE9PSBwcmV2UHJvcHMucHJlc2VsZWN0ZWRPcGluaW9uIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHJlc2VsZWN0ZWRBbW91bnQgIT09IHByZXZQcm9wcy5wcmVzZWxlY3RlZEFtb3VudCB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnByZXNlbGVjdGVkUHJvYmFiaWxpdHkgIT09XHJcbiAgICAgICAgICAgICAgICBwcmV2UHJvcHMucHJlc2VsZWN0ZWRQcm9iYWJpbGl0eVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZUZyb21Qcm9wcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZUZyb21Qcm9wcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVTdGF0ZUZyb21Qcm9wcygpIHtcclxuICAgICAgICBsZXQgbmV3T3BpbmlvblBhcmFtZXRlcnMgPSB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzO1xyXG4gICAgICAgIG5ld09waW5pb25QYXJhbWV0ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgbmV3T3BpbmlvblBhcmFtZXRlcnMpO1xyXG4gICAgICAgIG5ld09waW5pb25QYXJhbWV0ZXJzLm9waW5pb24gPSB0aGlzLnByb3BzLnByZXNlbGVjdGVkT3BpbmlvbjtcclxuICAgICAgICBuZXdPcGluaW9uUGFyYW1ldGVycy5hbW91bnQgPVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnByZXNlbGVjdGVkQW1vdW50IC9cclxuICAgICAgICAgICAgICAgIE1hdGgucG93KDEwLCB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJwcmVjaXNpb25cIikpIHx8IFwiIFwiO1xyXG4gICAgICAgIG5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5ID1cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVzZWxlY3RlZFByb2JhYmlsaXR5IHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG5ld09waW5pb25QYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBzZWxlY3RlZE9waW5pb246IHRoaXMucHJvcHMucHJlc2VsZWN0ZWRPcGluaW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT3BpbmlvbkNoYW5nZSgpIHtcclxuICAgICAgICBsZXQgbmV3T3BpbmlvbiA9IHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnM7XHJcbiAgICAgICAgbmV3T3Bpbmlvbi5vcGluaW9uID0gbmV3T3Bpbmlvbi5vcGluaW9uID09PSBcIm5vXCIgPyBcInllc1wiIDogXCJub1wiO1xyXG4gICAgICAgIG5ld09waW5pb24ub3BpbmlvbmF0b3IgPSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBuZXdPcGluaW9uUGFyYW1ldGVyczogbmV3T3BpbmlvbixcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcGluaW9uOiBuZXdPcGluaW9uLm9waW5pb25cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBbW91bnRDaGFuZ2Uoe2Ftb3VudCwgYXNzZXR9KSB7XHJcbiAgICAgICAgbGV0IG5ld09waW5pb24gPSB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzO1xyXG4gICAgICAgIG5ld09waW5pb24uYW1vdW50ID0gYW1vdW50O1xyXG4gICAgICAgIG5ld09waW5pb24ub3BpbmlvbmF0b3IgPSB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25ld09waW5pb25QYXJhbWV0ZXI6IG5ld09waW5pb259KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBhc3NldCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEFzc2V0OiBhc3NldH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcm9iYWJpbGl0eUNoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IG5ld09waW5pb24gPSB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzO1xyXG4gICAgICAgIG5ld09waW5pb24ucHJvYmFiaWxpdHkgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbmV3T3BpbmlvblBhcmFtZXRlcjogbmV3T3BpbmlvbixcclxuICAgICAgICAgICAgd3JvbmdQcm9iYWJpbGl0eTogIXRoaXMuX2lzUHJvYmFiaWxpdHlWYWxpZChuZXdPcGluaW9uKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9pc1Byb2JhYmlsaXR5VmFsaWQobmV3T3BpbmlvbiA9IG51bGwpIHtcclxuICAgICAgICBpZiAobmV3T3BpbmlvbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld09waW5pb24gPSB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFuZXdPcGluaW9uLnByb2JhYmlsaXR5IHx8XHJcbiAgICAgICAgICAgIG5ld09waW5pb24ucHJvYmFiaWxpdHkgPD0gMC4wMSB8fFxyXG4gICAgICAgICAgICBuZXdPcGluaW9uLnByb2JhYmlsaXR5ID49IDAuOTlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaXNGb3JtVmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5faXNQcm9iYWJpbGl0eVZhbGlkKCkgJiZcclxuICAgICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLmFtb3VudCkgPiAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0UG90ZW50aWFsV2lubmluZ3MoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5ICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLm9waW5pb24gPT09IFwieWVzXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXRfbnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnMuYW1vdW50IC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5KSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0X251bWJlcihcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLmFtb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgxICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3T3BpbmlvblBhcmFtZXRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2JhYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0Zvcm1WYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yZGVyLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1dhcm5pbmc6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2hvd1dhcm5pbmcsXHJcbiAgICAgICAgICAgIG5ld09waW5pb25QYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICB3cm9uZ1Byb2JhYmlsaXR5XHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IFtcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAga2V5PVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pblByb2dyZXNzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2xvYmFsLmNvbmZpcm1cIil9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PVwiY2FuY2VsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmluUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwuY2FuY2VsXCIpfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJwcmVkaWN0aW9uLmFkZF9vcGluaW9uX21vZGFsLnRpdGxlXCIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLm9uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgY2xvc2FibGU9eyF0aGlzLnN0YXRlLmluUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e2Zvb3Rlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVkaWN0aW9uLW1hcmtldHMtLWFkZC1wcmVkaWN0aW9uLW9mZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uYWRkX29waW5pb25fbW9kYWwuc3ltYm9sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXQuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5kZXRhaWxzLnByZWRpY3Rpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVkaWN0aW9uTWFya2V0LmNvbmRpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIW5ld09waW5pb25QYXJhbWV0ZXJzLnByb2JhYmlsaXR5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2FybmluZykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JvbmdQcm9iYWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImhhcy1lcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5kZXRhaWxzLnByZWRpY2F0ZWRfbGlrZWxpaG9vZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeGNoYW5nZUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9iYWJpbGl0eUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9iYWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5kZXRhaWxzLmlfdGhpbmtfdGhhdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkT3Bpbmlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPcGluaW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJ5ZXNcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uZGV0YWlscy5wcm92ZXNfdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wibm9cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uZGV0YWlscy5pbmNvcnJlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uZGV0YWlscy5wcmVtaXVtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXdPcGluaW9uUGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5wcm9wcy5iYXNlQXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uZGV0YWlscy5jb21taXNzaW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlZGljdGlvbk1hcmtldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXhfbWFya2V0X2ZlZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm5ld09waW5pb25QYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFtb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVkaWN0aW9uTWFya2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXJrZXRfZmVlKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYmFzZUFzc2V0LmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5kZXRhaWxzLnBvdGVudGlhbF9wcm9maXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RoaXMuX2dldFBvdGVudGlhbFdpbm5pbmdzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXt0aGlzLnByb3BzLmJhc2VBc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmluUHJvZ3Jlc3MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJmb290ZXIubG9hZGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFkZE9waW5pb25Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgcHJlZGljdGlvbk1hcmtldDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gICAgb3BpbmlvbjogUHJvcFR5cGVzLmFueSxcclxuICAgIGN1cnJlbnRBY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgcHJlc2VsZWN0ZWRPcGluaW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcHJlc2VsZWN0ZWRBbW91bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBwcmVzZWxlY3RlZFByb2JhYmlsaXR5OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgYmFzZUFzc2V0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgcXVvdGVBc3NldDogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuQWRkT3Bpbmlvbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgcHJlZGljdGlvbk1hcmtldDogbnVsbCxcclxuICAgIG9waW5pb246IHt9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gICAgTW9kYWwsXG4gICAgSW5wdXQsXG4gICAgRm9ybSxcbiAgICBCdXR0b24sXG4gICAgVG9vbHRpcCxcbiAgICBJY29uLFxuICAgIERhdGVQaWNrZXJcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEFzc2V0U2VsZWN0IGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0U2VsZWN0XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IGFzc2V0VXRpbHMgZnJvbSBcImNvbW1vbi9hc3NldF91dGlsc1wiO1xuaW1wb3J0IGFzc2V0Q29uc3RhbnRzIGZyb20gXCJjaGFpbi9hc3NldF9jb25zdGFudHNcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuY29uc3QgSVNfQklUQVNTRVQgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVNYXJrZXRNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtYXJrZXRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBcIjVcIixcbiAgICAgICAgICAgICAgICBtYXhfc3VwcGx5OiAxMDAwMDAsXG4gICAgICAgICAgICAgICAgbWF4X21hcmtldF9mZWU6IDAsXG4gICAgICAgICAgICAgICAgbWFya2V0X2ZlZV9wZXJjZW50OiAwLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7bWFpbjogXCJcIn0sXG4gICAgICAgICAgICAgICAgcmV3YXJkX3BlcmNlbnQ6IDAsXG4gICAgICAgICAgICAgICAgc3ltYm9sOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1dhcm5pbmc6IGZhbHNlLFxuICAgICAgICAgICAgd3JvbmdTeW1ib2w6IGZhbHNlLFxuICAgICAgICAgICAgd3JvbmdEYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvcmVfZXhjaGFuZ2VfcmF0ZToge1xuICAgICAgICAgICAgICAgIHF1b3RlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJhc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IFwiMS4zLjBcIixcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpdGFzc2V0X29wdHM6IHtcbiAgICAgICAgICAgICAgICBmZWVkX2xpZmV0aW1lX3NlYzogNjAgKiA2MCAqIDI0LFxuICAgICAgICAgICAgICAgIG1pbmltdW1fZmVlZHM6IDcsXG4gICAgICAgICAgICAgICAgZm9yY2Vfc2V0dGxlbWVudF9kZWxheV9zZWM6IDYwICogNjAgKiAyNCxcbiAgICAgICAgICAgICAgICBmb3JjZV9zZXR0bGVtZW50X29mZnNldF9wZXJjZW50OlxuICAgICAgICAgICAgICAgICAgICAxICogYXNzZXRDb25zdGFudHMuR1JBUEhFTkVfMV9QRVJDRU5ULFxuICAgICAgICAgICAgICAgIG1heGltdW1fZm9yY2Vfc2V0dGxlbWVudF92b2x1bWU6XG4gICAgICAgICAgICAgICAgICAgIDIwICogYXNzZXRDb25zdGFudHMuR1JBUEhFTkVfMV9QRVJDRU5ULFxuICAgICAgICAgICAgICAgIHNob3J0X2JhY2tpbmdfYXNzZXQ6IFwiMS4zLjBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluUHJvZ3Jlc3M6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUFzc2V0Q2hhbmdlID0gdGhpcy5oYW5kbGVBc3NldENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUZlZUNoYW5nZSA9IHRoaXMuaGFuZGxlRmVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2dldFBlcm1pc3Npb25zQW5kRmxhZ3MoKSB7XG4gICAgICAgIGxldCBmbGFnQm9vbGVhbnMgPSBhc3NldFV0aWxzLmdldEZsYWdCb29sZWFucygwLCBJU19CSVRBU1NFVCk7XG4gICAgICAgIGxldCBwZXJtaXNzaW9uQm9vbGVhbnMgPSBhc3NldFV0aWxzLmdldEZsYWdCb29sZWFucyhcImFsbFwiLCBJU19CSVRBU1NFVCk7XG5cbiAgICAgICAgZmxhZ0Jvb2xlYW5zW1wiY2hhcmdlX21hcmtldF9mZWVcIl0gPSB0cnVlO1xuICAgICAgICBsZXQgZmxhZ3MgPSBhc3NldFV0aWxzLmdldEZsYWdzKGZsYWdCb29sZWFucywgSVNfQklUQVNTRVQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmxhZ3MsXG4gICAgICAgICAgICBwZXJtaXNzaW9uczogYXNzZXRVdGlscy5nZXRQZXJtaXNzaW9ucyhcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uQm9vbGVhbnMsXG4gICAgICAgICAgICAgICAgSVNfQklUQVNTRVRcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQXNzZXQoKSB7XG4gICAgICAgIGxldCB7bWFya2V0T3B0aW9ucywgY29yZV9leGNoYW5nZV9yYXRlLCBiaXRhc3NldF9vcHRzfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3Qge3Blcm1pc3Npb25zLCBmbGFnc30gPSB0aGlzLl9nZXRQZXJtaXNzaW9uc0FuZEZsYWdzKCk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpblByb2dyZXNzOiB0cnVlfSk7XG4gICAgICAgIGNvbnN0IGFjY291bnRJZCA9IENoYWluU3RvcmUuZ2V0QWNjb3VudCh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KS5nZXQoXG4gICAgICAgICAgICBcImlkXCJcbiAgICAgICAgKTtcbiAgICAgICAgQXNzZXRBY3Rpb25zLmNyZWF0ZUFzc2V0KFxuICAgICAgICAgICAgYWNjb3VudElkLFxuICAgICAgICAgICAgbWFya2V0T3B0aW9ucyxcbiAgICAgICAgICAgIGZsYWdzLFxuICAgICAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgICAgICBjb3JlX2V4Y2hhbmdlX3JhdGUsXG4gICAgICAgICAgICBJU19CSVRBU1NFVCxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBiaXRhc3NldF9vcHRzLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpblByb2dyZXNzOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBcIi4uLiBBc3NldEFjdGlvbnMuY3JlYXRlQXNzZXQoYWNjb3VudF9pZCwgdXBkYXRlKVwiLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLFxuICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1hcmtldENyZWF0ZWQobWFya2V0T3B0aW9ucy5zeW1ib2wpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5Qcm9ncmVzczogZmFsc2V9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBsZXQgbWFya2V0T3B0aW9ucyA9IHRoaXMuc3RhdGUubWFya2V0T3B0aW9ucztcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgbW9tZW50KSB7XG4gICAgICAgICAgICBldmVudC5zZXQoXCJtaWxsaXNlY29uZHNcIiwgMCk7XG4gICAgICAgICAgICBldmVudCA9IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJleHBpcnlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV2ZW50LnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0Lm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzeW1ib2xcIjpcbiAgICAgICAgICAgICAgICBtYXJrZXRPcHRpb25zW1xuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQubmFtZVxuICAgICAgICAgICAgICAgIF0gPSBldmVudC50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtYWluXCI6XG4gICAgICAgICAgICBjYXNlIFwiY29uZGl0aW9uXCI6XG4gICAgICAgICAgICBjYXNlIFwiZXhwaXJ5XCI6XG4gICAgICAgICAgICAgICAgbWFya2V0T3B0aW9ucy5kZXNjcmlwdGlvbltldmVudC50YXJnZXQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG1hcmtldE9wdGlvbnNbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21hcmtldE9wdGlvbnN9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVBc3NldENoYW5nZShhc3NldCkge1xuICAgICAgICBpZiAoYXNzZXQpIHtcbiAgICAgICAgICAgIGxldCBuZXdCaXRhc3NldE9wdHMgPSB0aGlzLnN0YXRlLmJpdGFzc2V0X29wdHM7XG4gICAgICAgICAgICBsZXQgbmV3TWFya2V0T3B0aW9ucyA9IHRoaXMuc3RhdGUubWFya2V0T3B0aW9ucztcbiAgICAgICAgICAgIGxldCBuZXdDb3JlRXhjaGFuZ2VSYXRlID0gdGhpcy5zdGF0ZS5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgICAgICBuZXdCaXRhc3NldE9wdHMuc2hvcnRfYmFja2luZ19hc3NldCA9IGFzc2V0O1xuICAgICAgICAgICAgbmV3TWFya2V0T3B0aW9ucy5wcmVjaXNpb24gPSBDaGFpblN0b3JlLmdldEFzc2V0KGFzc2V0KS5nZXQoXG4gICAgICAgICAgICAgICAgXCJwcmVjaXNpb25cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5ld0NvcmVFeGNoYW5nZVJhdGUuYmFzZS5hc3NldF9pZCA9IGFzc2V0O1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYml0YXNzZXRfb3B0czogbmV3Qml0YXNzZXRPcHRzLFxuICAgICAgICAgICAgICAgIGNvcmVfZXhjaGFuZ2VfcmF0ZTogbmV3Q29yZUV4Y2hhbmdlUmF0ZSxcbiAgICAgICAgICAgICAgICBtYXJrZXRPcHRpb25zOiBuZXdNYXJrZXRPcHRpb25zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9mb3JjZVBvc2l0aXZlKG51bWJlcikge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChudW1iZXIpIDwgMCA/IFwiMFwiIDogbnVtYmVyO1xuICAgIH1cblxuICAgIGhhbmRsZUZlZUNoYW5nZShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG5cbiAgICAgICAgbGV0IG5ld01hcmtldE9wdGlvbnMgPSB0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnM7XG4gICAgICAgIG5ld01hcmtldE9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50ID0gdGhpcy5fZm9yY2VQb3NpdGl2ZShcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWFya2V0T3B0aW9uczogbmV3TWFya2V0T3B0aW9uc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfaXNGb3JtVmFsaWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN5bWJvbHMuaW5jbHVkZXModGhpcy5zdGF0ZS5tYXJrZXRPcHRpb25zLnN5bWJvbCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dyb25nU3ltYm9sOiB0cnVlfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3cm9uZ1N5bWJvbDogZmFsc2V9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgZXhwaXJ5ID0gbmV3IERhdGUodGhpcy5zdGF0ZS5tYXJrZXRPcHRpb25zLmRlc2NyaXB0aW9uLmV4cGlyeSk7XG4gICAgICAgIGlmIChub3cgPiBleHBpcnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dyb25nRGF0ZTogdHJ1ZX0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d3JvbmdEYXRlOiBmYWxzZX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWFya2V0T3B0aW9ucy5zeW1ib2wgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubWFya2V0T3B0aW9ucy5kZXNjcmlwdGlvbi5tYWluICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnMuZGVzY3JpcHRpb24uY29uZGl0aW9uICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1hcmtldE9wdGlvbnMuZGVzY3JpcHRpb24uZXhwaXJ5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoZSkge1xuICAgICAgICBpZiAodGhpcy5faXNGb3JtVmFsaWQoKSkge1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVBc3NldCgpLmNhbGwodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93V2FybmluZzogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7c2hvd1dhcm5pbmcsIG1hcmtldE9wdGlvbnMsIHdyb25nU3ltYm9sLCB3cm9uZ0RhdGV9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBmb290ZXIgPSBbXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pblByb2dyZXNzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwuY29uZmlybVwiKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBrZXk9XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pblByb2dyZXNzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwuY2FuY2VsXCIpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjbG9zYWJsZT17IXRoaXMuc3RhdGUuaW5Qcm9ncmVzc31cbiAgICAgICAgICAgICAgICBmb290ZXI9e2Zvb3Rlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWRpY3Rpb24tbWFya2V0cy0tY3JlYXRlLXByZWRpY3Rpb24tbWFya2V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFtYXJrZXRPcHRpb25zLnN5bWJvbCAmJiBzaG93V2FybmluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyb25nU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImhhcy1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLnRvb2x0aXBfc3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcExlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC5zeW1ib2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWFya2V0T3B0aW9ucy5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1hcmtldE9wdGlvbnMuZGVzY3JpcHRpb24uY29uZGl0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2FybmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoYXMtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC50b29sdGlwX2NvbmRpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJwcmVkaWN0aW9uLmNyZWF0ZV9tYXJrZXRfbW9kYWwuY29uZGl0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZGl0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtYXJrZXRPcHRpb25zLmRlc2NyaXB0aW9uLm1haW4gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dXYXJuaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImhhcy1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLnRvb2x0aXBfZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wTGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLmRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICghbWFya2V0T3B0aW9ucy5kZXNjcmlwdGlvbi5leHBpcnkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93V2FybmluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyb25nRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoYXMtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC50b29sdGlwX3Jlc29sdXRpb25fZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJwcmVkaWN0aW9uLmNyZWF0ZV9tYXJrZXRfbW9kYWwucmVzb2x1dGlvbl9kYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV4cGlyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC5zZWxlY3RfZGF0ZV9hbmRfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Paz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLmNyZWF0ZV9tYXJrZXRfbW9kYWwudG9vbHRpcF9iYWNraW5nX2Fzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLmJhY2tpbmdfYXNzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjI3XCIgLy9ncFVTRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXCIxLjMuMTEzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cIjEuMy4xMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1wiMS4zLjEyMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYml0YXNzZXRfb3B0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvcnRfYmFja2luZ19hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQXNzZXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5jcmVhdGVfbWFya2V0X21vZGFsLnRvb2x0aXBfY29tbWlzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wTGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24uY3JlYXRlX21hcmtldF9tb2RhbC5jb21taXNzaW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXs2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tYXJrZXRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXJrZXRfZmVlX3BlcmNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZlZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pblByb2dyZXNzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImZvb3Rlci5sb2FkaW5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ3JlYXRlTWFya2V0TW9kYWwucHJvcFR5cGVzID0ge1xuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGN1cnJlbnRBY2NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN5bWJvbHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBvbk1hcmtldENyZWF0ZWQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5DcmVhdGVNYXJrZXRNb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmlzaWJsZTogZmFsc2Vcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCB7YmluZFRvQ3VycmVudEFjY291bnR9IGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0N1cnJlbnRBY2NvdW50XCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XG5pbXBvcnQgUHJlZGljdGlvbk1hcmtldHMgZnJvbSBcIi4vUHJlZGljdGlvbk1hcmtldHNcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCB7Z2V0UHJlZGljdGlvbk1hcmtldElzc3VlcnN9IGZyb20gXCIuLi8uLi9saWIvY2hhaW4vb25DaGFpbkNvbmZpZ1wiO1xuaW1wb3J0IHtDaGFpblN0b3JlLCBGZXRjaENoYWluT2JqZWN0c30gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiY29tbW9uL2Fzc2V0X3V0aWxzXCI7XG5cbmNvbnN0IF9jb252ZXJ0UHJlZGljdGlvbk1hcmtldEZvclVJID0gYXNzZXQgPT4ge1xuICAgIGxldCBtYXJrZXRfZmVlID0gMDtcbiAgICBsZXQgbWF4X21hcmtldF9mZWUgPSAwO1xuICAgIGlmIChhc3NldC5mb3JQcmVkaWN0aW9ucy5mbGFnQm9vbGVhbnNbXCJjaGFyZ2VfbWFya2V0X2ZlZVwiXSkge1xuICAgICAgICBtYXJrZXRfZmVlID0gYXNzZXQub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQ7XG4gICAgICAgIG1heF9tYXJrZXRfZmVlID0gYXNzZXQub3B0aW9ucy5tYXhfbWFya2V0X2ZlZTtcbiAgICB9XG4gICAgY29uc3QgYml0YXNzZXREYXRhID0gYXNzZXQuYml0YXNzZXRfZGF0YSB8fCBhc3NldC5iaXRhc3NldCB8fCB7fTtcbiAgICBsZXQgdWlNYXJrZXREYXRhID0ge1xuICAgICAgICBhc3NldDogYXNzZXQsXG4gICAgICAgIHNob3J0X2JhY2tpbmdfYXNzZXQ6XG4gICAgICAgICAgICBiaXRhc3NldERhdGEub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0IHx8IFwiMS4zLjBcIixcbiAgICAgICAgYXNzZXRfaWQ6IGFzc2V0LmlkLFxuICAgICAgICBpc3N1ZXI6IGFzc2V0Lmlzc3VlcixcbiAgICAgICAgZGVzY3JpcHRpb246IGFzc2V0LmZvclByZWRpY3Rpb25zLmRlc2NyaXB0aW9uLm1haW4sXG4gICAgICAgIHN5bWJvbDogYXNzZXQuc3ltYm9sLFxuICAgICAgICBjb25kaXRpb246IGFzc2V0LmZvclByZWRpY3Rpb25zLmRlc2NyaXB0aW9uLmNvbmRpdGlvbixcbiAgICAgICAgZXhwaXJ5OiBhc3NldC5mb3JQcmVkaWN0aW9ucy5kZXNjcmlwdGlvbi5leHBpcnksXG4gICAgICAgIG9wdGlvbnM6IGFzc2V0Lm9wdGlvbnMsXG4gICAgICAgIG1hcmtldENvbmZpZGVuY2U6IDAsXG4gICAgICAgIG1hcmtldExpa2VsaWhvb2Q6IDAsXG4gICAgICAgIG1hcmtldF9mZWUsXG4gICAgICAgIG1heF9tYXJrZXRfZmVlXG4gICAgfTtcbiAgICByZXR1cm4gdWlNYXJrZXREYXRhO1xufTtcblxuY2xhc3MgUE1Bc3NldHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxhc3RBc3NldFN5bWJvbDogXCJcIixcbiAgICAgICAgICAgIHByZWRpY3Rpb25NYXJrZXRzOiBbXSxcbiAgICAgICAgICAgIGZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgICAgd2hpdGVsaXN0ZWRJc3N1ZXJzOiBbXSxcbiAgICAgICAgICAgIGZldGNoQWxsQXNzZXRzOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9nZXRQcmVkaWN0aW9uTWFya2V0TGlzdChhc3NldHMpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5hc3NldHNdXG4gICAgICAgICAgICAubWFwKGFzc2V0ID0+IGFzc2V0WzFdKVxuICAgICAgICAgICAgLmZpbHRlcih0aGlzLl9pc1ByZWRpY3Rpb25NYXJrZXQpXG4gICAgICAgICAgICAubWFwKHRoaXMuX25vcm1hbGl6ZVByZWRpY3Rpb25NYXJrZXRBc3NldCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcmV2UHJvcHMuYXNzZXRzICE9PSB0aGlzLnByb3BzLmFzc2V0cyAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaEFsbEFzc2V0c1xuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RBc3NldCA9IHRoaXMucHJvcHMuYXNzZXRzXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuc3ltYm9sID4gYi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEuc3ltYm9sIDwgYi5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubGFzdCgpO1xuICAgICAgICAgICAgY29uc3QgcHJlZGljdGlvbk1hcmtldHMgPSB0aGlzLl9nZXRQcmVkaWN0aW9uTWFya2V0TGlzdChcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0c1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIobGFzdEFzc2V0LnN5bWJvbCwgMTAwKTtcbiAgICAgICAgICAgIGNvbnN0IGZldGNoaW5nRmluaXNoZWQgPVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGFzdEFzc2V0U3ltYm9sID09PSBsYXN0QXNzZXQuc3ltYm9sO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25NYXJrZXRzOiBwcmVkaWN0aW9uTWFya2V0cyxcbiAgICAgICAgICAgICAgICAgICAgbGFzdEFzc2V0U3ltYm9sOiBsYXN0QXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICBmZXRjaEFsbEFzc2V0czogIWZldGNoaW5nRmluaXNoZWQsXG4gICAgICAgICAgICAgICAgICAgIGZldGNoaW5nOiAhZmV0Y2hpbmdGaW5pc2hlZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBnZXRQcmVkaWN0aW9uTWFya2V0SXNzdWVycygpLnRoZW4od2hpdGVsaXN0ZWRJc3N1ZXJzID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2dldFdoaXRlbGlzdGVkQXNzZXRzKHdoaXRlbGlzdGVkSXNzdWVycykudGhlbihhc3NldHMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZWRpY3Rpb25NYXJrZXRzID0gYXNzZXRzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KVxuICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuX25vcm1hbGl6ZVByZWRpY3Rpb25NYXJrZXRBc3NldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlbGlzdGVkSXNzdWVyczogd2hpdGVsaXN0ZWRJc3N1ZXJzLFxuICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uTWFya2V0cyxcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX25vcm1hbGl6ZVByZWRpY3Rpb25NYXJrZXRBc3NldChhc3NldCkge1xuICAgICAgICBpZiAoIWFzc2V0LmZvclByZWRpY3Rpb25zKSB7XG4gICAgICAgICAgICBhc3NldC5mb3JQcmVkaWN0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICBhc3NldC5vcHRpb25zLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBmbGFnQm9vbGVhbnM6IGFzc2V0VXRpbHMuZ2V0RmxhZ0Jvb2xlYW5zKFxuICAgICAgICAgICAgICAgICAgICBhc3NldC5vcHRpb25zLmZsYWdzLFxuICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2NvbnZlcnRQcmVkaWN0aW9uTWFya2V0Rm9yVUkoYXNzZXQpO1xuICAgIH1cblxuICAgIF9pc1ByZWRpY3Rpb25NYXJrZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJpdGFzc2V0RGF0YSA9IGFzc2V0LmJpdGFzc2V0X2RhdGEgfHwgYXNzZXQuYml0YXNzZXQgfHwge307XG4gICAgICAgIHJldHVybiBiaXRhc3NldERhdGEuaXNfcHJlZGljdGlvbl9tYXJrZXQ7XG4gICAgfVxuXG4gICAgYXN5bmMgX2dldFdoaXRlbGlzdGVkQXNzZXRzKHdoaXRlbGlzdGVkSXNzdWVycykge1xuICAgICAgICBsZXQgYXNzZXRzID0gW107XG4gICAgICAgIGxldCBhY2NvdW50T2JqZWN0cyA9IGF3YWl0IEZldGNoQ2hhaW5PYmplY3RzKFxuICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50LFxuICAgICAgICAgICAgd2hpdGVsaXN0ZWRJc3N1ZXJzLFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAge31cbiAgICAgICAgKTtcbiAgICAgICAgYWNjb3VudE9iamVjdHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0udG9KUygpO1xuICAgICAgICAgICAgICAgIGFzc2V0cyA9IFsuLi5hc3NldHMsIC4uLml0ZW0uYXNzZXRzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBhc3NldHNPYmplY3RzID0gYXdhaXQgRmV0Y2hDaGFpbk9iamVjdHMoXG4gICAgICAgICAgICBDaGFpblN0b3JlLmdldEFzc2V0LFxuICAgICAgICAgICAgYXNzZXRzLFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAge31cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGFzc2V0c09iamVjdHMubWFwKGl0ZW0gPT4gaXRlbS50b0pTKCkpO1xuICAgIH1cblxuICAgIGZldGNoQWxsQXNzZXRzKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZldGNoQWxsQXNzZXRzOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIDE1MG1zIHRvIG1ha2Ugc3VyZSBsb2FkaW5nIGlzIGRpc3BsYXllZFxuICAgICAgICAgICAgICAgIC8vIChCaW5kVG9DdXJyZW50QWNjb3VudCBhbmQgUHJlZGljdGlvTWFya2V0c092ZXJ2aWV3VGFibGUgYXJlIGJvdGggZGVib3VuY2VkKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gQXNzZXRBY3Rpb25zLmdldEFzc2V0TGlzdChcIlwiLCAxMDApLCAzMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQcmVkaWN0aW9uTWFya2V0c1xuICAgICAgICAgICAgICAgIGFzc2V0cz17dGhpcy5wcm9wcy5hc3NldHN9XG4gICAgICAgICAgICAgICAgd2hpdGVsaXN0ZWRJc3N1ZXJzPXt0aGlzLnN0YXRlLndoaXRlbGlzdGVkSXNzdWVyc31cbiAgICAgICAgICAgICAgICBwcmVkaWN0aW9uTWFya2V0cz17dGhpcy5zdGF0ZS5wcmVkaWN0aW9uTWFya2V0c31cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmZldGNoaW5nfVxuICAgICAgICAgICAgICAgIGZldGNoQWxsQXNzZXRzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hBbGxBc3NldHMoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBNQXNzZXRzQ29udGFpbmVyID0gY29ubmVjdChQTUFzc2V0c0NvbnRhaW5lciwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW0Fzc2V0U3RvcmUsIE1hcmtldHNTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFzc2V0czogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0cyxcbiAgICAgICAgICAgIGJ1Y2tldFNpemU6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmJ1Y2tldFNpemUsXG4gICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0OiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50R3JvdXBMaW1pdCxcbiAgICAgICAgICAgIG1hcmtldExpbWl0T3JkZXJzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXRMaW1pdE9yZGVyc1xuICAgICAgICB9O1xuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQTUFzc2V0c0NvbnRhaW5lciA9IGJpbmRUb0N1cnJlbnRBY2NvdW50KFBNQXNzZXRzQ29udGFpbmVyKTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcclxuaW1wb3J0IHtCdXR0b24sIEljb24sIFRvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9QYWdpbmF0ZWRMaXN0XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVkaWN0aW9uTWFya2V0RGV0YWlsc1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGdldEhlYWRlcigpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50QWNjb3VudElkID0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCIjXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwib3JkZXJfaWRcIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcl9pbmFjdGl2ZTogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5vcmRlcl9pZCA+IGIub3JkZXJfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5vcmRlcl9pZCA8IGIub3JkZXJfaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJlZGljdGlvbi5kZXRhaWxzLnByZWRpY3RvclwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJvcGluaW9uYXRvclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyX2luYWN0aXZlOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhX25hbWUgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYS5vcGluaW9uYXRvcikuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJfbmFtZSA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChiLm9waW5pb25hdG9yKS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYV9uYW1lID4gYl9uYW1lID8gMSA6IGFfbmFtZSA8IGJfbmFtZSA/IC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJwcmVkaWN0aW9uLmRldGFpbHMucHJlZGljdGlvblwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJvcGluaW9uXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXJfaW5hY3RpdmU6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEub3BpbmlvbiA+IGIub3BpbmlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLm9waW5pb24gPCBiLm9waW5pb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLmRldGFpbHMuXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0gPT0gXCJ5ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJwcm92ZXNfdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImluY29ycmVjdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLmRldGFpbHMucHJlZGljYXRlZF9saWtlbGlob29kXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibGlrZWxpaG9vZFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub3BpbmlvbkZpbHRlciA9PSBcInllc1wiID8gXCJkZXNjZW5kXCIgOiBcImFzY2VuZFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmxpa2VsaWhvb2QgPiBiLmxpa2VsaWhvb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5saWtlbGlob29kIDwgYi5saWtlbGlob29kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsoaXRlbSAqIDEwMCkudG9QcmVjaXNpb24oMyl9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByZWRpY3Rpb24uZGV0YWlscy5wcmVtaXVtXCIpLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInByZW1pdW1cIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcl9pbmFjdGl2ZTogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5hbW91bnQgPiBiLmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLmFtb3VudCA8IGIuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0uYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJlZGljdGlvbi5kZXRhaWxzLmNvbW1pc3Npb25cIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY29tbWlzc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyX2luYWN0aXZlOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmZlZSA+IGIuZmVlID8gMSA6IGEuZmVlIDwgYi5mZWUgPyAtMSA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAoaXRlbSwgcm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0uYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJvdy5jb21taXNzaW9uLmFtb3VudCAvIHJvdy5wcmVtaXVtLmFtb3VudCkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b1ByZWNpc2lvbigzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLmRldGFpbHMucG90ZW50aWFsX3Byb2ZpdFwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInBvdGVudGlhbFByb2ZpdFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyX2luYWN0aXZlOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmFtb3VudCA+IGIuYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGEuYW1vdW50IDwgYi5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtpdGVtLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17aXRlbS5hc3NldF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJwcmVkaWN0aW9uLm92ZXJ2aWV3LmFjdGlvblwiKSxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZGF0YUl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50QWNjb3VudElkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSXRlbS5vcGluaW9uYXRvciA9PT0gY3VycmVudEFjY291bnRJZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWwoZGF0YUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5kZXRhaWxzLmNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJdGVtLm9waW5pb24gPT0gXCJ5ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInByZWRpY3Rpb24udG9vbHRpcHMub3Bwb3NlX3Byb3Zlc190cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJwcmVkaWN0aW9uLnRvb2x0aXBzLm9wcG9zZV9pc19pbmNvcnJlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuM3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wcG9zZShkYXRhSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uZGV0YWlscy5vcHBvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRIZWFkZXIoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpbHRlcmVkT3BpbmlvbnMgPSB0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXREYXRhLm9waW5pb25zLmZpbHRlcihcclxuICAgICAgICAgICAgaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSBDaGFpblN0b3JlLmdldEFjY291bnQoaXRlbS5vcGluaW9uYXRvcilcclxuICAgICAgICAgICAgICAgICAgICA/IENoYWluU3RvcmUuZ2V0QWNjb3VudChpdGVtLm9waW5pb25hdG9yKS5nZXQoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGV0YWlsc1NlYXJjaFRlcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY2NvdW50TmFtZSArIFwiXFwwXCIgKyBpdGVtLm9waW5pb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YodGhpcy5wcm9wcy5kZXRhaWxzU2VhcmNoVGVybSkgPT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcGluaW9uRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3BpbmlvbkZpbHRlciA9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMucHJvcHMub3BpbmlvbkZpbHRlciA9PSBpdGVtLm9waW5pb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBmaWx0ZXJlZE9waW5pb25zID0gZmlsdGVyZWRPcGluaW9ucy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgICBrZXk6IGAke2l0ZW0ub3JkZXJfaWR9JHtpKyt9YFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBhZ2luYXRlZExpc3RcclxuICAgICAgICAgICAgICAgIHJvd3M9e2ZpbHRlcmVkT3BpbmlvbnN9XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRlcn1cclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplPXsxMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5QcmVkaWN0aW9uTWFya2V0RGV0YWlsc1RhYmxlLnByb3BUeXBlcyA9IHtcclxuICAgIHByZWRpY3Rpb25NYXJrZXREYXRhOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgICBvbk9wcG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY3VycmVudEFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXHJcbiAgICBkZXRhaWxzU2VhcmNoVGVybTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9waW5pb25GaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcblByZWRpY3Rpb25NYXJrZXREZXRhaWxzVGFibGUuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgcHJlZGljdGlvbk1hcmtldERhdGE6IHt9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhc3NldFV0aWxzIGZyb20gXCJjb21tb24vYXNzZXRfdXRpbHNcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XHJcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBQcmVkaWN0aW9uTWFya2V0c092ZXJ2aWV3VGFibGUgZnJvbSBcIi4vUHJlZGljdGlvbk1hcmtldHNPdmVydmlld1RhYmxlXCI7XHJcbmltcG9ydCBQcmVkaWN0aW9uTWFya2V0RGV0YWlsc1RhYmxlIGZyb20gXCIuL1ByZWRpY3Rpb25NYXJrZXREZXRhaWxzVGFibGVcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi9VdGlsaXR5L1NlYXJjaElucHV0XCI7XHJcbmltcG9ydCBIZWxwQ29udGVudCBmcm9tIFwiLi4vVXRpbGl0eS9IZWxwQ29udGVudFwiO1xyXG5pbXBvcnQgQWRkT3Bpbmlvbk1vZGFsIGZyb20gXCIuL0FkZE9waW5pb25Nb2RhbFwiO1xyXG5pbXBvcnQgQ3JlYXRlTWFya2V0TW9kYWwgZnJvbSBcIi4vQ3JlYXRlTWFya2V0TW9kYWxcIjtcclxuaW1wb3J0IFJlc29sdmVNb2RhbCBmcm9tIFwiLi9SZXNvbHZlTW9kYWxcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlLCBGZXRjaENoYWluT2JqZWN0c30gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7U3dpdGNoLCBCdXR0b24sIFJhZGlvLCBJY29uLCBUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCB7QXNzZXQsIFByaWNlfSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtiaW5kVG9DdXJyZW50QWNjb3VudH0gZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnRcIjtcclxuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL01hcmtldHNTdG9yZVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuXHJcbmNsYXNzIFByZWRpY3Rpb25NYXJrZXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBcIlwiLFxyXG4gICAgICAgICAgICBkZXRhaWxzU2VhcmNoVGVybTogXCJcIixcclxuICAgICAgICAgICAgc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0OiBudWxsLFxyXG4gICAgICAgICAgICBvcGluaW9uczogW10sXHJcbiAgICAgICAgICAgIHByZXNlbGVjdGVkT3BpbmlvbjogXCJ5ZXNcIixcclxuICAgICAgICAgICAgcHJlc2VsZWN0ZWRBbW91bnQ6IDAsXHJcbiAgICAgICAgICAgIHByZXNlbGVjdGVkUHJvYmFiaWxpdHk6IDAsXHJcbiAgICAgICAgICAgIGlzQ3JlYXRlTWFya2V0TW9kYWxPcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNBZGRPcGluaW9uTW9kYWxPcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNSZXNvbHZlTW9kYWxPcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNIaWRlVW5rbm93bkhvdXNlc0NoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGlzSGlkZUludmFsaWRBc3NldHNDaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBvcGluaW9uRmlsdGVyOiBcInllc1wiLFxyXG4gICAgICAgICAgICBwcmVkaWN0aW9uTWFya2V0QXNzZXRGaWx0ZXI6IFwib3BlblwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZVByZWRpY3Rpb25NYXJrZXRNb2RhbE9wZW4gPSB0aGlzLm9uQ3JlYXRlUHJlZGljdGlvbk1hcmtldE1vZGFsT3Blbi5iaW5kKFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLm9uQ3JlYXRlUHJlZGljdGlvbk1hcmtldE1vZGFsQ2xvc2UgPSB0aGlzLm9uQ3JlYXRlUHJlZGljdGlvbk1hcmtldE1vZGFsQ2xvc2UuYmluZChcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5vbkFkZE9waW5pb25Nb2RhbE9wZW4gPSB0aGlzLm9uQWRkT3Bpbmlvbk1vZGFsT3Blbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25BZGRPcGluaW9uTW9kYWxDbG9zZSA9IHRoaXMub25BZGRPcGluaW9uTW9kYWxDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25TZWFyY2ggPSB0aGlzLm9uU2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaERldGFpbHMgPSB0aGlzLm9uU2VhcmNoRGV0YWlscy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25NYXJrZXRBY3Rpb24gPSB0aGlzLm9uTWFya2V0QWN0aW9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlc29sdmVNb2RhbE9wZW4gPSB0aGlzLm9uUmVzb2x2ZU1vZGFsT3Blbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZXNvbHZlTW9kYWxDbG9zZSA9IHRoaXMub25SZXNvbHZlTW9kYWxDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQXNzZXQgPSB0aGlzLnVwZGF0ZUFzc2V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVVbmtub3duSG91c2VzVG9nZ2xlQ2hhbmdlID0gdGhpcy5oYW5kbGVVbmtub3duSG91c2VzVG9nZ2xlQ2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW52YWxpZEFzc2V0c0NoZWNrZWQgPSB0aGlzLmhhbmRsZUludmFsaWRBc3NldHNDaGVja2VkLmJpbmQoXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAocHJldlByb3BzLm1hcmtldExpbWl0T3JkZXJzICE9PSB0aGlzLnByb3BzLm1hcmtldExpbWl0T3JkZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZU9waW5pb25zTGlzdCh0aGlzLnByb3BzLm1hcmtldExpbWl0T3JkZXJzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2lzS25vd25Jc3N1ZXIoYXNzZXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aGl0ZWxpc3RlZElzc3VlcnMuaW5jbHVkZXMoYXNzZXQuaXNzdWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBfaXNWYWxpZFByZWRpY3Rpb25NYXJrZXRBc3NldChhc3NldCkge1xyXG4gICAgICAgIC8vIG11c3QgaGF2ZSB2YWxpZCBkYXRlXHJcbiAgICAgICAgY29uc3QgcmVzb2x1dGlvbkRhdGUgPSBuZXcgRGF0ZShcclxuICAgICAgICAgICAgYXNzZXQuZm9yUHJlZGljdGlvbnMuZGVzY3JpcHRpb24uZXhwaXJ5XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAocmVzb2x1dGlvbkRhdGUgaW5zdGFuY2VvZiBEYXRlICYmIGlzTmFOKHJlc29sdXRpb25EYXRlLmdldFRpbWUoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtdXN0IGhhdmUgZGVzY3JpcHRpb24gYW5kIHByZWRpY3Rpb24gZmlsbGVkXHJcbiAgICAgICAgaWYgKCFhc3NldC5mb3JQcmVkaWN0aW9ucy5kZXNjcmlwdGlvbi5jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFzc2V0LmZvclByZWRpY3Rpb25zLmRlc2NyaXB0aW9uLm1haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtdXN0IGhhdmUgbWVhbmluZ2Z1bGwgZGVzY3JpcHRpb24gYW5kIHByZWRpY3Rpb25cclxuICAgICAgICBpZiAoYXNzZXQuZm9yUHJlZGljdGlvbnMuZGVzY3JpcHRpb24uY29uZGl0aW9uLmxlbmd0aCA8IDEwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzc2V0LmZvclByZWRpY3Rpb25zLmRlc2NyaXB0aW9uLm1haW4ubGVuZ3RoIDwgMjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtYXJrZXQgZmVlIG1heSBub3QgYmUgY3JhenlcclxuICAgICAgICBpZiAoYXNzZXQub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgLyAxMDAgPj0gMTApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlT3BpbmlvbnNMaXN0KGZldGNoZWRPcGluaW9ucykge1xyXG4gICAgICAgIGxldCBvcmRlcnMgPSBbXTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE1hcmtldCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0O1xyXG4gICAgICAgIGZldGNoZWRPcGluaW9ucy5mb3JFYWNoKChvcmRlciwgb3JkZXJfaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3BpbmlvbiA9XHJcbiAgICAgICAgICAgICAgICBvcmRlci5tYXJrZXRfYmFzZSA9PT0gb3JkZXIuc2VsbF9wcmljZS5iYXNlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIm5vXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwieWVzXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZlByaWNlID1cclxuICAgICAgICAgICAgICAgIG9yZGVyLm1hcmtldF9iYXNlID09PSBvcmRlci5zZWxsX3ByaWNlLmJhc2UuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICA/IG9yZGVyLnNlbGxfcHJpY2UuaW52ZXJ0KCkudG9SZWFsKClcclxuICAgICAgICAgICAgICAgICAgICA6IG9yZGVyLnNlbGxfcHJpY2UudG9SZWFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9XHJcbiAgICAgICAgICAgICAgICBvcmRlci5tYXJrZXRfYmFzZSA9PT0gb3JkZXIuc2VsbF9wcmljZS5iYXNlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvcmRlci5hbW91bnRGb3JTYWxlKClcclxuICAgICAgICAgICAgICAgICAgICA6IG9yZGVyLmFtb3VudFRvUmVjZWl2ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmVtaXVtID1cclxuICAgICAgICAgICAgICAgIG9yZGVyLm1hcmtldF9iYXNlID09PSBvcmRlci5zZWxsX3ByaWNlLmJhc2UuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICA/IG9yZGVyLmFtb3VudFRvUmVjZWl2ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBvcmRlci5hbW91bnRGb3JTYWxlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZsYWdCb29sZWFucyA9IGFzc2V0VXRpbHMuZ2V0RmxhZ0Jvb2xlYW5zKFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRNYXJrZXQub3B0aW9ucy5mbGFncyxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IGZlZSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChmbGFnQm9vbGVhbnNbXCJjaGFyZ2VfbWFya2V0X2ZlZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgZmVlID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRNYXJrZXQub3B0aW9ucy5tYXhfbWFya2V0X2ZlZSxcclxuICAgICAgICAgICAgICAgICAgICAoYW1vdW50LmFtb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTWFya2V0Lm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50KSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVmUHJpY2UgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BpbmlvbmF0b3I6IG9yZGVyLnNlbGxlcixcclxuICAgICAgICAgICAgICAgICAgICBvcGluaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBsaWtlbGlob29kOiByZWZQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3RlbnRpYWxQcm9maXQ6IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHByZW1pdW0uYXNzZXRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogcHJlbWl1bS5wcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVtaXVtOiBwcmVtaXVtLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1pc3Npb246IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZmVlICogcmVmUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBwcmVtaXVtLmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IHByZW1pdW0ucHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BpbmlvbnM6IFsuLi5vcmRlcnNdfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0TWFya2V0T3BpbmlvbnMobWFya2V0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3Vic2NyaWJlZE1hcmtldCkge1xyXG4gICAgICAgICAgICBhd2FpdCBNYXJrZXRzQWN0aW9ucy51blN1YnNjcmliZU1hcmtldChcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3Vic2NyaWJlZE1hcmtldC5xdW90ZS5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3Vic2NyaWJlZE1hcmtldC5iYXNlLmdldChcImlkXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhc2UgPSBDaGFpblN0b3JlLmdldE9iamVjdChcclxuICAgICAgICAgICAgbWFya2V0Lm9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlLmJhc2UuYXNzZXRfaWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHF1b3RlID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcclxuICAgICAgICAgICAgbWFya2V0Lm9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlLnF1b3RlLmFzc2V0X2lkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYXdhaXQgTWFya2V0c0FjdGlvbnMuc3Vic2NyaWJlTWFya2V0KFxyXG4gICAgICAgICAgICBiYXNlLFxyXG4gICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5idWNrZXRTaXplLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRHcm91cE9yZGVyTGltaXRcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdWJzY3JpYmVkTWFya2V0OiB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLFxyXG4gICAgICAgICAgICAgICAgcXVvdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWFya2V0QWN0aW9uKHttYXJrZXQsIGFjdGlvbn0pIHtcclxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAvL29uIGJ1dHRvbnMgYWN0aW9uXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJlZGljdGlvbk1hcmtldDogbWFya2V0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZXNvbHZlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRBbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkUHJvYmFiaWxpdHk6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUmVzb2x2ZU1vZGFsT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3Vic2NyaWJlZE1hcmtldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkQW1vdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRQcm9iYWJpbGl0eTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkT3BpbmlvbjogXCJ5ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFkZE9waW5pb25Nb2RhbE9wZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibm9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnN1YnNjcmliZWRNYXJrZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZEFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkUHJvYmFiaWxpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZE9waW5pb246IFwibm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFkZE9waW5pb25Nb2RhbE9wZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkQW1vdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZFByb2JhYmlsaXR5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL29uIHJvdyBhY3Rpb25cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQ6IG51bGxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJlZGljdGlvbk1hcmtldDogbWFya2V0XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldE1hcmtldE9waW5pb25zKG1hcmtldClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2goZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VhcmNoVGVybTogZXZlbnQudGFyZ2V0LnZhbHVlIHx8IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaERldGFpbHMoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGV0YWlsc1NlYXJjaFRlcm06IGV2ZW50LnRhcmdldC52YWx1ZSB8fCBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DcmVhdGVQcmVkaWN0aW9uTWFya2V0TW9kYWxPcGVuKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0NyZWF0ZU1hcmtldE1vZGFsT3BlbjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ3JlYXRlUHJlZGljdGlvbk1hcmtldE1vZGFsQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQ3JlYXRlTWFya2V0TW9kYWxPcGVuOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkT3Bpbmlvbk1vZGFsT3BlbigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBZGRPcGluaW9uTW9kYWxPcGVuOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BZGRPcGluaW9uTW9kYWxDbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBZGRPcGluaW9uTW9kYWxPcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJlc2VsZWN0ZWRPcGluaW9uOiBcIm5vXCIsXHJcbiAgICAgICAgICAgIHByZXNlbGVjdGVkQW1vdW50OiAwLFxyXG4gICAgICAgICAgICBwcmVzZWxlY3RlZFByb2JhYmlsaXR5OiAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNvbHZlTW9kYWxPcGVuKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1Jlc29sdmVNb2RhbE9wZW46IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc29sdmVNb2RhbENsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1Jlc29sdmVNb2RhbE9wZW46IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVW5rbm93bkhvdXNlc1RvZ2dsZUNoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBpc0hpZGVVbmtub3duSG91c2VzQ2hlY2tlZCA9ICF0aGlzLnN0YXRlXHJcbiAgICAgICAgICAgIC5pc0hpZGVVbmtub3duSG91c2VzQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpc0hpZGVVbmtub3duSG91c2VzQ2hlY2tlZCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJlZGljdGlvbk1hcmtldDogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnByb3BzLmZldGNoQWxsQXNzZXRzKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUludmFsaWRBc3NldHNDaGVja2VkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0hpZGVJbnZhbGlkQXNzZXRzQ2hlY2tlZDogIXRoaXMuc3RhdGUuaXNIaWRlSW52YWxpZEFzc2V0c0NoZWNrZWQsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJlZGljdGlvbk1hcmtldDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3Bwb3NlID0gb3BpbmlvbiA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHByZXNlbGVjdGVkT3Bpbmlvbjogb3Bpbmlvbi5vcGluaW9uID09PSBcIm5vXCIgPyBcInllc1wiIDogXCJub1wiLFxyXG4gICAgICAgICAgICBwcmVzZWxlY3RlZEFtb3VudDogb3Bpbmlvbi5hbW91bnQsXHJcbiAgICAgICAgICAgIHByZXNlbGVjdGVkUHJvYmFiaWxpdHk6IG9waW5pb24ucHJvYmFiaWxpdHlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uQWRkT3Bpbmlvbk1vZGFsT3BlbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkNhbmNlbE9waW5pb24gPSBvcGluaW9uID0+IHtcclxuICAgICAgICBNYXJrZXRzQWN0aW9ucy5jYW5jZWxMaW1pdE9yZGVycyh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpLCBbXHJcbiAgICAgICAgICAgIG9waW5pb24ub3JkZXJfaWRcclxuICAgICAgICBdKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbmNlbCBvcmRlcnMgZXJyb3I6XCIsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uUmVzb2x2ZU1hcmtldCA9IG1hcmtldCA9PiB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHRoaXMucHJvcHMuY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgY29uc3QgZ2xvYmFsU2V0dGxlbWVudFByaWNlID0gbWFya2V0LnJlc3VsdCA9PT0gXCJ5ZXNcIiA/IDEgOiAwO1xyXG4gICAgICAgIGNvbnN0IGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChtYXJrZXQuYXNzZXRfaWQpLnRvSlMoKTtcclxuICAgICAgICBsZXQgYmFzZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIHJlYWw6IDEsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5pZCxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5wcmVjaXNpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcXVvdGVBc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXHJcbiAgICAgICAgICAgIGFzc2V0LmJpdGFzc2V0Lm9wdGlvbnMuc2hvcnRfYmFja2luZ19hc3NldFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHF1b3RlID0gbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgcmVhbDogZ2xvYmFsU2V0dGxlbWVudFByaWNlLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogYXNzZXQuYml0YXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0LFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHF1b3RlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHByaWNlID0gbmV3IFByaWNlKHtcclxuICAgICAgICAgICAgcXVvdGUsXHJcbiAgICAgICAgICAgIGJhc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLmFzc2V0R2xvYmFsU2V0dGxlKGFzc2V0LCBhY2NvdW50LCBwcmljZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXVzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XHJcbiAgICAgICAgICAgIHBhdXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBc3NldChhc3NldC5zeW1ib2wpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZXNvbHZlTW9kYWxPcGVuOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVBc3NldChzeW1ib2wpIHtcclxuICAgICAgICBBc3NldEFjdGlvbnMuZ2V0QXNzZXRMaXN0LmRlZmVyKHN5bWJvbCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2ZpbHRlck1hcmtldHMoKSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5zdGF0ZS5wcmVkaWN0aW9uTWFya2V0QXNzZXRGaWx0ZXI7XHJcbiAgICAgICAgY29uc3QgbWFya2V0cyA9IHRoaXMucHJvcHMucHJlZGljdGlvbk1hcmtldHMuZmlsdGVyKGFzc2V0SW5mbyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXNzZXRJbmZvLmFzc2V0O1xyXG4gICAgICAgICAgICBpZiAoIWFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYml0YXNzZXREYXRhID0gYXNzZXQuYml0YXNzZXRfZGF0YSB8fCBhc3NldC5iaXRhc3NldCB8fCB7fTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0hpZGVVbmtub3duSG91c2VzQ2hlY2tlZCAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMuX2lzS25vd25Jc3N1ZXIoYXNzZXQpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0hpZGVJbnZhbGlkQXNzZXRzQ2hlY2tlZCAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMuX2lzVmFsaWRQcmVkaWN0aW9uTWFya2V0QXNzZXQoYXNzZXQpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY291bnROYW1lID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KGFzc2V0Lmlzc3VlcilcclxuICAgICAgICAgICAgICAgICAgICA/IENoYWluU3RvcmUuZ2V0QWNjb3VudChhc3NldC5pc3N1ZXIpLmdldChcIm5hbWVcIilcclxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudE5hbWUgJiYgdGhpcy5zdGF0ZS5zZWFyY2hUZXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vTWF0Y2ggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcMFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LmNvbmRpdGlvbiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcMFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZih0aGlzLnN0YXRlLnNlYXJjaFRlcm0pICE9PSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9NYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlciAmJiBmaWx0ZXIgIT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNvbHV0aW9uRGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5mb3JQcmVkaWN0aW9ucy5kZXNjcmlwdGlvbi5leHBpcnlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRsZW1lbnRGdW5kID0gYml0YXNzZXREYXRhLnNldHRsZW1lbnRfZnVuZCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRXhwaXJlZE9yUmVzb2x2ZWQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0bGVtZW50RnVuZCA+IDAgfHwgcmVzb2x1dGlvbkRhdGUgPCBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgPT09IFwib3BlblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNFeHBpcmVkT3JSZXNvbHZlZDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gXCJwYXN0X3Jlc29sdXRpb25fZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0V4cGlyZWRPclJlc29sdmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG1hcmtldHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3ZlcnZpZXdTZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNldFByZWRpY3Rpb25NYXJrZXRBc3NldEZpbHRlciA9IGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHByZWRpY3Rpb25NYXJrZXRBc3NldEZpbHRlcjogZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBwcmVkaWN0aW9uTWFya2V0c1RvU2hvdyA9IHRoaXMuX2ZpbHRlck1hcmtldHMoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zZWxlY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB3aWR0aDogXCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hUZXJtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIyMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJlZGljdGlvbk1hcmtldEFzc2V0RmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFByZWRpY3Rpb25NYXJrZXRBc3NldEZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXtcImFsbFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24ub3ZlcnZpZXcuYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJvcGVuXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5vdmVydmlldy5vcGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJwYXN0X3Jlc29sdXRpb25fZGF0ZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24ub3ZlcnZpZXcucGFzdF9yZXNvbHV0aW9uX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMjBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVbmtub3duSG91c2VzVG9nZ2xlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaXNIaWRlVW5rbm93bkhvdXNlc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVW5rbm93bkhvdXNlc1RvZ2dsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwicHJlZGljdGlvbi5vdmVydmlldy5oaWRlX3Vua25vd25faG91c2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24udG9vbHRpcHMuaGlkZV91bmtub3duX2hvdXNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIwLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicXVlc3Rpb24tY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjIwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW52YWxpZEFzc2V0c0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5pc0hpZGVJbnZhbGlkQXNzZXRzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJbnZhbGlkQXNzZXRzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwicHJlZGljdGlvbi5vdmVydmlldy5oaWRlX2ludmFsaWRfYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi50b29sdGlwcy5oaWRlX2ludmFsaWRfYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMC41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ1dGlsaXR5LnhfYXNzZXRzX2hpZGRlblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXRzLmxlbmd0aCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbk1hcmtldHNUb1Nob3cubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHRoaXMucHJvcHMucHJlZGljdGlvbk1hcmtldHMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXNlbGVjdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMHJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24udG9vbHRpcHMuY3JlYXRlX3ByZWRpY3Rpb25fbWFya2V0X2Fzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4zcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicXVlc3Rpb24tY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DcmVhdGVQcmVkaWN0aW9uTWFya2V0TW9kYWxPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5vdmVydmlldy5jcmVhdGVfbWFya2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFByZWRpY3Rpb25NYXJrZXRzT3ZlcnZpZXdUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25NYXJrZXRzPXtwcmVkaWN0aW9uTWFya2V0c1RvU2hvd31cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbk1hcmtldEFjdGlvbj17dGhpcy5vbk1hcmtldEFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnByb3BzLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERldGFpbHNTZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHNldE9waW5pb25GaWx0ZXIgPSBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGluaW9uRmlsdGVyOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLmRldGFpbHMubGlzdF9vZl9jdXJyZW50X3ByZWRpY3Rpb25fb2ZmZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24udG9vbHRpcHMud2hhdF9pc19hX3ByZWRpY3Rpb25fb2ZmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIwLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXNlbGVjdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHdpZHRoOiBcIjEwMCVcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlYXJjaERldGFpbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXRhaWxzU2VhcmNoVGVybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjIwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vcGluaW9uRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldE9waW5pb25GaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJhbGxcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLmRldGFpbHMuYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJ5ZXNcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLmRldGFpbHMucHJvdmVzX3RydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXtcIm5vXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlZGljdGlvbi5kZXRhaWxzLmluY29ycmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLnRvb2x0aXBzLmFkZF9wcmVkaWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4zcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicXVlc3Rpb24tY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkFkZE9waW5pb25Nb2RhbE9wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24uZGV0YWlscy5hZGRfcHJlZGljdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9waW5pb25zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmVkaWN0aW9uTWFya2V0RGV0YWlsc1RhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25NYXJrZXREYXRhPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9uTWFya2V0OiB0aGlzLnN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9waW5pb25zOiB0aGlzLnN0YXRlLm9waW5pb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk9wcG9zZT17dGhpcy5vbk9wcG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMub25DYW5jZWxPcGluaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzU2VhcmNoVGVybT17dGhpcy5zdGF0ZS5kZXRhaWxzU2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGluaW9uRmlsdGVyPXt0aGlzLnN0YXRlLm9waW5pb25GaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzeW1ib2xzID0gWy4uLnRoaXMucHJvcHMuYXNzZXRzXS5tYXAoaXRlbSA9PiBpdGVtWzFdLnN5bWJvbCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJlZGljdGlvbi1tYXJrZXRzIGdyaWQtYmxvY2sgdmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tvdmVyZmxvdzogXCJ2aXNpYmxlXCIsIG1hcmdpbjogXCIxNXB4XCJ9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC0xMiBzaHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SGVscENvbnRlbnQgcGF0aD17XCJjb21wb25lbnRzL1ByZWRpY3Rpb25NYXJrZXRzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmdldE92ZXJ2aWV3U2VjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0XHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmdldERldGFpbHNTZWN0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0NyZWF0ZU1hcmtldE1vZGFsT3BlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlTWFya2V0TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc0NyZWF0ZU1hcmtldE1vZGFsT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5vbkNyZWF0ZVByZWRpY3Rpb25NYXJrZXRNb2RhbENsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scz17c3ltYm9sc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25NYXJrZXRDcmVhdGVkPXt0aGlzLnVwZGF0ZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzQWRkT3Bpbmlvbk1vZGFsT3BlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QWRkT3Bpbmlvbk1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNBZGRPcGluaW9uTW9kYWxPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uQWRkT3Bpbmlvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25NYXJrZXQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGluaW9uPXt0aGlzLnN0YXRlLmluaXRpYWxPcGluaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRPcGluaW9uPXt0aGlzLnN0YXRlLnByZXNlbGVjdGVkT3Bpbmlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRBbW91bnQ9e3RoaXMuc3RhdGUucHJlc2VsZWN0ZWRBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkUHJvYmFiaWxpdHk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFByb2JhYmlsaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0PXt0aGlzLnN0YXRlLnN1YnNjcmliZWRNYXJrZXQuYmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldD17dGhpcy5zdGF0ZS5zdWJzY3JpYmVkTWFya2V0LnF1b3RlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzUmVzb2x2ZU1vZGFsT3BlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8UmVzb2x2ZU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNSZXNvbHZlTW9kYWxPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uUmVzb2x2ZU1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb25NYXJrZXQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlc29sdmVNYXJrZXQ9e3RoaXMub25SZXNvbHZlTWFya2V0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUHJlZGljdGlvbk1hcmtldHMgPSBjb25uZWN0KFxyXG4gICAgUHJlZGljdGlvbk1hcmtldHMsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbQXNzZXRTdG9yZSwgTWFya2V0c1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRzOiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzLFxyXG4gICAgICAgICAgICAgICAgYnVja2V0U2l6ZTogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYnVja2V0U2l6ZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmN1cnJlbnRHcm91cExpbWl0LFxyXG4gICAgICAgICAgICAgICAgbWFya2V0TGltaXRPcmRlcnM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldExpbWl0T3JkZXJzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFByZWRpY3Rpb25NYXJrZXRzID0gYmluZFRvQ3VycmVudEFjY291bnQoUHJlZGljdGlvbk1hcmtldHMpKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBMaW5rVG9Bc3NldEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQXNzZXRCeUlkXCI7XHJcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgUGFnaW5hdGVkTGlzdCBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L1BhZ2luYXRlZExpc3RcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcIi4uLy4uL2FjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcclxuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcblxyXG5yZXF1aXJlKFwiLi9wcmVkaWN0aW9uLnNjc3NcIik7XHJcblxyXG5jbGFzcyBQcmVkaWN0aW9uTWFya2V0c092ZXJ2aWV3VGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGlja2VyOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50aWNrZXJzTG9hZGVkID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgb25NYXJrZXRBY3Rpb24oZGF0YUl0ZW0sIG9wdGlvbiA9IFwieWVzXCIpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uTWFya2V0QWN0aW9uKHtcclxuICAgICAgICAgICAgbWFya2V0OiBkYXRhSXRlbSxcclxuICAgICAgICAgICAgYWN0aW9uOiBvcHRpb25cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJvd0FjdGlvbiA9IGRhdGFJdGVtID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9uTWFya2V0QWN0aW9uLmJpbmQodGhpcywgZGF0YUl0ZW0pXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0SGVhZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGlzT3duZWRCeUN1cnJlbnQgPSBpZCA9PlxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpID09PSBpZDtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5hc3NldFwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhc3NldF9pZFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNvcnRPcmRlcjogXCJhc2NlbmRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wgPiBiLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLnN5bWJvbCA8IGIuc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9Bc3NldEJ5SWQgYXNzZXQ9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJwcmVkaWN0aW9uLm92ZXJ2aWV3Lmlzc3VlclwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpc3N1ZXJcIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYV9pc3N1ZXIgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYS5pc3N1ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiX2lzc3VlciA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChiLmlzc3Vlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFfbmFtZSA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJfbmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFfaXNzdWVyICYmIGJfaXNzdWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFfbmFtZSA9IGFfaXNzdWVyLmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJfbmFtZSA9IGJfaXNzdWVyLmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhX25hbWUgPiBiX25hbWUgPyAxIDogYV9uYW1lIDwgYl9uYW1lID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17aXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByZWRpY3Rpb24ub3ZlcnZpZXcucHJlZGljdGlvblwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjb25kaXRpb25cIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWEuY29uZGl0aW9uIHx8IGEuY29uZGl0aW9uID09PSBcIlwiKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiLmNvbmRpdGlvbiB8fCBiLmNvbmRpdGlvbiA9PT0gXCJcIikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuY29uZGl0aW9uLmxvY2FsZUNvbXBhcmUoYi5jb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLm92ZXJ2aWV3Lm1hcmtldF9jb25maWRlbmNlXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibWFya2V0Q29uZmlkZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLm1hcmtldENvbmZpZGVuY2UgPiBiLm1hcmtldENvbmZpZGVuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYS5tYXJrZXRDb25maWRlbmNlIDwgYi5tYXJrZXRDb25maWRlbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAoaXRlbSwgcm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlja2VyID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgICAgICAgICAgICAge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGlja2VyW3Jvdy5hc3NldF9pZF1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50aWNrZXJbcm93LmFzc2V0X2lkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGlja2VyLnF1b3RlX3ZvbHVtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLnF1b3RlX3ZvbHVtZSA9PT0gXCIwXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5xdW90ZV92b2x1bWUgPT09IFwiMVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIucXVvdGVfdm9sdW1lID09PSBcIk5hTlwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIucXVvdGVfdm9sdW1lID09PSBcIi1OYU5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5xdW90ZV92b2x1bWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLnF1b3RlX3ZvbHVtZSA9IHV0aWxzLmNvbnZlcnRfdHlwZWRfdG9fc2F0b3NoaShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHRpY2tlci5xdW90ZV92b2x1bWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0QXNzZXQocm93LnNob3J0X2JhY2tpbmdfYXNzZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aWNrZXIucGVyY2VudF9jaGFuZ2UgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5wZXJjZW50X2NoYW5nZSA9PT0gXCJOYU5cIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLnBlcmNlbnRfY2hhbmdlID09PSBcIi1OYU5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5wZXJjZW50X2NoYW5nZSA9IFwiLVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpY2tlci5wZXJjZW50X2NoYW5nZSA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5wZXJjZW50X2NoYW5nZSA9IFwiMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLnBlcmNlbnRfY2hhbmdlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhcnNlRmxvYXQodGlja2VyLmxhdGVzdCkgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiK1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5wZXJjZW50X2NoYW5nZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uudm9sX3Nob3J0XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RpY2tlci5xdW90ZV92b2x1bWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtyb3cuc2hvcnRfYmFja2luZ19hc3NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKih7dGlja2VyLnBlcmNlbnRfY2hhbmdlfSkmbmJzcDsqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcmVkaWN0aW9uLm92ZXJ2aWV3Lm1hcmtldF9wcmVkaWNhdGVkX2xpa2VsaWhvb2RcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJtYXJrZXRMaWtlbGlob29kXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubWFya2V0TGlrZWxpaG9vZCA+IGIubWFya2V0TGlrZWxpaG9vZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhLm1hcmtldExpa2VsaWhvb2QgPCBiLm1hcmtldExpa2VsaWhvb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXI6IChpdGVtLCByb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXIgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50aWNrZXJbcm93LmFzc2V0X2lkXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRpY2tlcltyb3cuYXNzZXRfaWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aWNrZXIubGF0ZXN0IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIubGF0ZXN0ID09PSBcIjBcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLmxhdGVzdCA9PT0gXCIxXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5sYXRlc3QgPT09IFwiTmFOXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5sYXRlc3QgPT09IFwiLU5hTlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLmxhdGVzdCA9IFwiLVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLmxhdGVzdCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhcnNlRmxvYXQodGlja2VyLmxhdGVzdCkgKiAxMDApLnRvUHJlY2lzaW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aWNrZXIuaGlnaGVzdF9iaWQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA9PT0gXCIwXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA9PT0gXCIxXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA9PT0gXCJOYU5cIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLmhpZ2hlc3RfYmlkID09PSBcIi1OYU5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA9IFwiLVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLmhpZ2hlc3RfYmlkID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQodGlja2VyLmhpZ2hlc3RfYmlkKSAqIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9QcmVjaXNpb24oMykgKyBcIiVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGlja2VyLmxvd2VzdF9hc2sgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5sb3dlc3RfYXNrID09PSBcIjBcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLmxvd2VzdF9hc2sgPT09IFwiMVwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXIubG93ZXN0X2FzayA9PT0gXCJOYU5cIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLmxvd2VzdF9hc2sgPT09IFwiLU5hTlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2VyLmxvd2VzdF9hc2sgPSBcIi1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlci5sb3dlc3RfYXNrID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQodGlja2VyLmxvd2VzdF9hc2spICogMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b1ByZWNpc2lvbigzKSArIFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aWNrZXIubGF0ZXN0ICE9PSBcIi1cIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpY2tlci5sYXRlc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdXBzdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cCBjbGFzc05hbWU9XCJzdXBlcnNjcmlwdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpY2tlci5oaWdoZXN0X2JpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWIgY2xhc3NOYW1lPVwic3Vic2NyaXB0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGlja2VyLmxvd2VzdF9hc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByZWRpY3Rpb24ub3ZlcnZpZXcuZGVzY3JpcHRpb25cIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWEuZGVzY3JpcHRpb24gfHwgYS5kZXNjcmlwdGlvbiA9PT0gXCJcIikgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYi5kZXNjcmlwdGlvbiB8fCBiLmRlc2NyaXB0aW9uID09PSBcIlwiKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5kZXNjcmlwdGlvbi5sb2NhbGVDb21wYXJlKGIuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJwcmVkaWN0aW9uLm92ZXJ2aWV3LmV4cGlyeVwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJleHBpcnlcIixcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWEuZXhwaXJ5IHx8IGEuZXhwaXJ5ID09PSBcIlwiKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiLmV4cGlyeSB8fCBiLmV4cGlyeSA9PT0gXCJcIikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuZXhwaXJ5LmxvY2FsZUNvbXBhcmUoYi5leHBpcnkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJwcmVkaWN0aW9uLm92ZXJ2aWV3LmFjdGlvblwiKSxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBkYXRhSXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc093bmVkQnlDdXJyZW50KGRhdGFJdGVtLmlzc3VlcikgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjE3MHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1hcmtldEFjdGlvbihkYXRhSXRlbSwgXCJyZXNvbHZlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24ub3ZlcnZpZXcucmVzb2x2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiNXB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1hcmtldEFjdGlvbihkYXRhSXRlbSwgXCJ5ZXNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPEJ1dHRvbiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypzdHlsZT17e21hcmdpbkxlZnQ6IFwiNXB4XCJ9fSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypvbkNsaWNrPXsoKSA9PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp0aGlzLm9uTWFya2V0QWN0aW9uKGRhdGFJdGVtLCBcIm5vXCIpKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKn0qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyp7Y291bnRlcnBhcnQudHJhbnNsYXRlKCovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcInByZWRpY3Rpb24ub3ZlcnZpZXcubm9cIiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyopfSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L0J1dHRvbj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIF9kZWNpZGVSb3dDbGFzc05hbWUocm93LCBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldCA/IFwic2VsZWN0ZWQtcm93XCIgOiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHByZXZQcm9wcy5wcmVkaWN0aW9uTWFya2V0cy5sZW5ndGggIT09XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHJlZGljdGlvbk1hcmtldHMubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHJlZGljdGlvbk1hcmtldHMuZm9yRWFjaChtYXJrZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEobWFya2V0LmFzc2V0LmlkIGluIE9iamVjdC5rZXlzKHRoaXMudGlja2Vyc0xvYWRlZCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWNrZXJzTG9hZGVkW21hcmtldC5hc3NldC5pZF0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5nZXRUaWNrZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldC5zaG9ydF9iYWNraW5nX2Fzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXQuYXNzZXQuaWRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGlja2VyID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpY2tlcnNMb2FkZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50aWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXJbbWFya2V0LmFzc2V0LmlkXSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlja2Vyc0xvYWRlZFttYXJrZXQuYXNzZXQuaWRdID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGlja2VyfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmdldEhlYWRlcigpO1xyXG5cclxuICAgICAgICBsZXQgZmlsdGVyZWRNYXJrZXRzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZE1hcmtldHMgPSBbdGhpcy5wcm9wcy5zZWxlY3RlZFByZWRpY3Rpb25NYXJrZXRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXRzKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZE1hcmtldHMgPSB0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXRzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRNYXJrZXRzID0gZmlsdGVyZWRNYXJrZXRzLm1hcChpdGVtID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGAke2l0ZW0uYXNzZXRfaWR9JHtpKyt9YFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByb3dTZWxlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMucHJvcHMuc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0ID8gdW5kZWZpbmVkIDogXCJyYWRpb1wiLFxyXG4gICAgICAgICAgICBoaWRlRGVmYXVsdFNlbGVjdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIFVuY29tbWVudCB0aGUgZm9sbG93aW5nIGxpbmUgdG8gc2hvdyB0cmFuc2xhdGVkIHRleHQgYXMgYSBjYW5jZWxsYWJsZSBjb2x1bW4gaGVhZGVyIGluc3RlYWQgb2YgY2hlY2tib3hcclxuICAgICAgICAgICAgLy9jb2x1bW5UaXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmNhbmNlbFwiKVxyXG4gICAgICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTWFya2V0QWN0aW9uKHNlbGVjdGVkUm93c1swXSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25NYXJrZXRBY3Rpb24obnVsbCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIFJlcXVpcmVkIGluIG9yZGVyIHJlc2V0U2VsZWN0ZWQgdG8gd29ya1xyXG4gICAgICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHRoaXMucHJvcHMuc2VsZWN0ZWRQcmVkaWN0aW9uTWFya2V0XHJcbiAgICAgICAgICAgICAgICA/IFt0aGlzLnByb3BzLnNlbGVjdGVkUHJlZGljdGlvbk1hcmtldC5rZXldXHJcbiAgICAgICAgICAgICAgICA6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFnaW5hdGVkTGlzdFxyXG4gICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPXtyb3dTZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICByb3dzPXtmaWx0ZXJlZE1hcmtldHN9XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRlcn1cclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplPXsxMH1cclxuICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT17dGhpcy5fZGVjaWRlUm93Q2xhc3NOYW1lLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnByb3BzLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICB0b3RhbExhYmVsPVwidXRpbGl0eS50b3RhbF94X2Fzc2V0c1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUHJlZGljdGlvbk1hcmtldHNPdmVydmlld1RhYmxlLnByb3BUeXBlcyA9IHtcclxuICAgIHByZWRpY3Rpb25NYXJrZXRzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIG9uTWFya2V0QWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY3VycmVudEFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXHJcbiAgICBzZWxlY3RlZFByZWRpY3Rpb25NYXJrZXQ6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcblByZWRpY3Rpb25NYXJrZXRzT3ZlcnZpZXdUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBwcmVkaWN0aW9uTWFya2V0czogW11cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChQcmVkaWN0aW9uTWFya2V0c092ZXJ2aWV3VGFibGUgPSBkZWJvdW5jZVJlbmRlcihcclxuICAgIFByZWRpY3Rpb25NYXJrZXRzT3ZlcnZpZXdUYWJsZSxcclxuICAgIDE1MCxcclxuICAgIHtsZWFkaW5nOiBmYWxzZX1cclxuKSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNb2RhbCwgSW5wdXQsIEZvcm0sIEJ1dHRvbiwgUmFkaW99IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc29sdmVNb2RhbCBleHRlbmRzIE1vZGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlc29sdmVQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5wcmVkaWN0aW9uTWFya2V0LmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBcInllc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3VsdDogXCJ5ZXNcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0Q2hhbmdlID0gdGhpcy5oYW5kbGVSZXN1bHRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXN1bHRDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlc29sdmVQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJlc29sdmVQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3VsdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBmb290ZXIgPSBbXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXNvbHZlTWFya2V0KHRoaXMuc3RhdGUucmVzb2x2ZVBhcmFtZXRlcnMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pblByb2dyZXNzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2xvYmFsLmNvbmZpcm1cIil9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PVwiY2FuY2VsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmluUHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwuY2FuY2VsXCIpfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9ezxUcmFuc2xhdGUgY29udGVudD1cInByZWRpY3Rpb24ucmVzb2x2ZV9tb2RhbC50aXRsZVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5wcm9wcy52aXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMucHJvcHMub25DbG9zZX1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBjbG9zYWJsZT17IXRoaXMuc3RhdGUuaW5Qcm9ncmVzc31cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17Zm9vdGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZWRpY3Rpb24tbWFya2V0cy0tcmVzb2x2ZS1wcmVkaWN0aW9uLW1hcmtldC1hc3NldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJwcmVkaWN0aW9uLnJlc29sdmVfbW9kYWwuc3ltYm9sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnByZWRpY3Rpb25NYXJrZXQuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwicHJlZGljdGlvbi5yZXNvbHZlX21vZGFsLnByZWRpY3Rpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVkaWN0aW9uTWFya2V0LmNvbmRpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJwcmVkaWN0aW9uLnJlc29sdmVfbW9kYWwudGhlX3ByZWRpY3Rpb25faGFzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXN1bHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmVzdWx0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17XCJ5ZXNcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24ucmVzb2x2ZV9tb2RhbC5wcm92ZW5fdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9e1wibm9cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZWRpY3Rpb24ucmVzb2x2ZV9tb2RhbC53YXNfaW5jb3JyZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVzb2x2ZU1vZGFsLnByb3BUeXBlcyA9IHtcclxuICAgIHByZWRpY3Rpb25NYXJrZXQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxuICAgIG9uUmVzb2x2ZU1hcmtldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcblJlc29sdmVNb2RhbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIHByZWRpY3Rpb25NYXJrZXQ6IG51bGxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgZGVib3VuY2VSZW5kZXIgZnJvbSBcInJlYWN0LWRlYm91bmNlLXJlbmRlclwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFzTG9hZGVkID0gZnVuY3Rpb24gaGFzTG9hZGVkKGN1cnJlbnRBY2NvdW50KSB7XHJcbiAgICByZXR1cm4gISFjdXJyZW50QWNjb3VudCAmJiAhIWN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJpbmRUb0N1cnJlbnRBY2NvdW50ID0gZnVuY3Rpb24gYmluZFRvQ3VycmVudEFjY291bnQoXHJcbiAgICBXcmFwcGVkQ29tcG9uZW50XHJcbikge1xyXG4gICAgLy8gLi4uYW5kIHJldHVybnMgYW5vdGhlciBjb21wb25lbnQuLi5cclxuICAgIGxldCBCaW5kVG9DdXJyZW50QWNjb3VudCA9IGNsYXNzIEJpbmRUb0N1cnJlbnRBY2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50QWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgICAgICAvLyBzZXQgc3Vic2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGF1dG9zdWJzY3JpYmU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNMb2FkZWQodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50ID0gQmluZFRvQ2hhaW5TdGF0ZShCaW5kVG9DdXJyZW50QWNjb3VudCk7XHJcblxyXG4gICAgQmluZFRvQ3VycmVudEFjY291bnQgPSBkZWJvdW5jZVJlbmRlcihCaW5kVG9DdXJyZW50QWNjb3VudCwgMTAwLCB7XHJcbiAgICAgICAgbGVhZGluZzogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb25uZWN0KFxyXG4gICAgICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID1cclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxlYXNlLWxvZ2luXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBuZXcgTWFwKFtbXCJuYW1lXCIsIGN1cnJlbnRBY2NvdW50XV0pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7VGFibGV9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IFwiLi9wYWdpbmF0ZWQtbGlzdC5zY3NzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRlZExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICByb3dzOiBbXSxcclxuICAgICAgICBwYWdlU2l6ZTogMjAsXHJcblxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJ0YWJsZVwiLFxyXG4gICAgICAgIGV4dHJhUm93OiBudWxsLFxyXG4gICAgICAgIHN0eWxlOiB7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9LFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG5cclxuICAgICAgICAvLyBjYW4gYmUgYSBzdHJpbmcgKGFzc3VtZXMgdGhlIHRyYW5zbGF0aW9uIGhhcyBvbmUgYXJndW1lbnQsIHRvdGFsIGNvdW50KSxcclxuICAgICAgICAvLyBvciBhbiBvYmplY3QsIHdoaWNoIGFsbG93cyBhIGN1c3RvbSBsYWJlbFxyXG4gICAgICAgIHRvdGFsTGFiZWw6IFwidXRpbGl0eS50b3RhbF94X2l0ZW1zXCIsXHJcblxyXG4gICAgICAgIC8vIEBkZXByZWNhdGVkLCB1c2UgdG90YWxMYWJlbFxyXG4gICAgICAgIGxhYmVsOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcHJvcHMucGFnZVNpemVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7cGFnZVNpemV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7aGVhZGVyLCByb3dzLCBleHRyYVJvdywgbG9hZGluZ30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwLCAxMDBdLmZpbHRlcihcclxuICAgICAgICAgICAgaXRlbSA9PiBpdGVtIDwgTWF0aC5tYXgodGhpcy5wcm9wcy5wYWdlU2l6ZSwgcm93cy5sZW5ndGgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBwYWdlU2l6ZU9wdGlvbnMucHVzaChNYXRoLm1heCh0aGlzLnByb3BzLnBhZ2VTaXplLCByb3dzLmxlbmd0aCkpO1xyXG5cclxuICAgICAgICBsZXQgdG90YWxDb2x1bW5zTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhYmVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29sdW1uc0xhYmVsID0gdG90YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRvdGFsTGFiZWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMudG90YWxMYWJlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50b3RhbExhYmVsID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29sdW1uc0xhYmVsID0gdG90YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLnRvdGFsTGFiZWwua2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMudG90YWxMYWJlbC5hcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGVkLWxpc3RcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Jvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17QXJyYXkuaXNBcnJheShoZWFkZXIpID8gaGVhZGVyIDogW119XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXsoKSA9PiAoZXh0cmFSb3cgPyBleHRyYVJvdyA6IDxzcGFuPiZuYnNwOzwvc3Bhbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLnRvZ2dsZVNvcnRPcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaXplQ2hhbmdlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9uU2luZ2xlUGFnZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQYWdlU2l6ZTogcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplT3B0aW9uczogcGFnZVNpemVPcHRpb25zLm1hcChvID0+IG8udG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb3RhbDogKHRvdGFsLCByYW5nZSkgPT4gdG90YWxDb2x1bW5zTGFiZWwodG90YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByb3dDbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJvd0NsYXNzTmFtZSA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAocmVjb3JkLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucm93Q2xhc3NOYW1lKHJlY29yZCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17dGhpcy5wcm9wcy5yb3dTZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7SW5wdXQsIEljb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5cclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoSW5wdXQoe1xyXG4gICAgb25DaGFuZ2UsXHJcbiAgICB2YWx1ZSxcclxuICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgbWF4TGVuZ3RoLFxyXG4gICAgc3R5bGUsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBuYW1lLFxyXG4gICAgYXV0b0NvbXBsZXRlLFxyXG4gICAgb25DbGVhcixcclxuICAgIHR5cGUsXHJcbiAgICAuLi5vdGhlclxyXG59KSB7XHJcbiAgICBpZiAob25DbGVhciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyBpZiBvbkNsZWFyPW51bGwsIHRoZW4gaXQgd29uJ3QgYmUgcmVuZGVyZWRcclxuICAgICAgICBvbkNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHt2YWx1ZTogXCJcIn1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHJlZj17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lICsgXCIgc2VhcmNoLWlucHV0XCJ9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XHJcbiAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBhZGRvbkFmdGVyPXs8SWNvbiB0eXBlPVwic2VhcmNoXCIgLz59XHJcbiAgICAgICAgICAgIHN1ZmZpeD17XHJcbiAgICAgICAgICAgICAgICBvbkNsZWFyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBpbmNsdWRlIERPTSB0aGUgaWNvbiwgb3RoZXJ3aXNlIHVzZXIgbG9vc2VzIGZvY3VzIHdoZW4gaXQgYXBwZWFycyBhbmQgaW5wdXQgcmVzaXplc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3ZhbHVlID8gXCJjdXJzb3ItcG9pbnRlclwiIDogXCJoaWRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn1cclxuXHJcblNlYXJjaElucHV0LnByb3BUeXBlcyA9IHtcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGNhbiBiZSB1bmRlZmluZWQgd2hlbiBubyB1c2VyIGlucHV0IGlzIHByZXNlbnRcclxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1heExlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIG9uQ2xlYXI6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcblxyXG5TZWFyY2hJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBwbGFjZWhvbGRlcjogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UuZmlsdGVyXCIpLFxyXG4gICAgc3R5bGU6IHt3aWR0aDogXCIyMDBweFwifSxcclxuICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgbmFtZTogXCJmb2N1c1wiLFxyXG4gICAgYXV0b0NvbXBsZXRlOiBcIm9mZlwiLFxyXG4gICAgbWF4TGVuZ3RoOiAxNixcclxuICAgIG9uQ2xlYXI6IHVuZGVmaW5lZFxyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=