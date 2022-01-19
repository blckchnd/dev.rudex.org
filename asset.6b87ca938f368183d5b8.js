"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[3],{

/***/ 3024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(626);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2075);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2796);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2082);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2312);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2049);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(426);











const stateSetter = (that, key, transform = value => value) => value => that.setState({
  [key]: transform(value)
});

const keyGetter = key => object => object[key];

class FeePoolOperation extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static defaultProps = {
    type: "fund"
  };

  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  onAccountNameChanged = stateSetter(this, "funderAccountName");
  onAccountChanged = stateSetter(this, "newFunderAccount");
  onPoolInput = stateSetter(this, "fundPoolAmount", keyGetter("amount"));

  onClaimInput(key, {
    amount
  }) {
    this.state[key + "Asset"].setAmount({
      real: amount
    });
    this.setState({
      [key]: amount
    });
  }

  onFundPool = () => actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__["default"].fundPool(this.state.newFunderAccount ? this.state.newFunderAccount.get("id") : null, this.props.core, this.props.asset, this.state.fundPoolAmount);
  reset = () => {
    this.setState(this.initialState());
  };
  initialState = () => ({
    funderAccountName: this.props.funderAccountName,
    fundPoolAmount: 0,
    fundPoolAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Asset({
      amount: 0,
      precision: this.props.core.get("precision"),
      asset_id: this.props.core.get("id")
    }),
    claimPoolAmount: 0,
    claimPoolAmountAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Asset({
      amount: 0,
      precision: this.props.core.get("precision"),
      asset_id: this.props.core.get("id")
    }),
    claimFeesAmount: 0,
    claimFeesAmountAsset: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Asset({
      amount: 0,
      precision: this.props.asset.get("precision"),
      asset_id: this.props.asset.get("id")
    })
  });

  onClaimFees() {
    let account = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getAccount(this.props.funderAccountName);
    if (!account) return;
    actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__["default"].claimPoolFees(account.get("id"), this.props.asset, this.state.claimFeesAmountAsset);
  }

  onClaimPool = () => actions_AssetActions__WEBPACK_IMPORTED_MODULE_7__["default"].claimPool(this.props.asset, this.state.claimPoolAmountAsset);

  renderFundPool() {
    const {
      props,
      state,
      onPoolInput,
      onFundPool,
      reset,
      onAccountNameChanged,
      onAccountChanged
    } = this;
    const {
      asset,
      core,
      hideBalance,
      getDynamicObject
    } = props;
    const {
      funderAccountName,
      fundPoolAmount,
      newFunderAccount
    } = state;
    let dynamicObject = null;
    if (!hideBalance) dynamicObject = getDynamicObject(asset.get("dynamic_asset_data_id"));
    const coreID = core.get("id") || "1.3.0";
    let balance = 0;

    if (newFunderAccount) {
      const coreBalanceID = newFunderAccount.getIn(["balances", coreID]);

      if (coreBalanceID) {
        let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getObject(coreBalanceID);

        if (balanceObject) {
          balance = balanceObject.get("balance");
        }
      }
    }

    const balanceText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onClick: () => {
        this.state.fundPoolAsset.setAmount({
          sats: balance
        });
        this.setState({
          fundPoolAmount: this.state.fundPoolAsset.getAmount({
            real: true
          })
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "transfer.available"
    }), ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      amount: balance,
      asset: coreID
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, hideBalance || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingBottom: "1.5rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "explorer.asset.fee_pool.pool_balance"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, ": "), dynamicObject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      amount: dynamicObject.get("fee_pool"),
      asset: coreID
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "transaction.funding_account",
      accountName: funderAccountName,
      onChange: onAccountNameChanged,
      onAccountChanged: onAccountChanged,
      account: funderAccountName,
      error: null,
      tabIndex: 1,
      typeahead: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: "transfer.amount",
      display_balance: balanceText,
      amount: fundPoolAmount,
      onChange: onPoolInput,
      asset: coreID,
      assets: [coreID],
      placeholder: "0.0",
      tabIndex: 2,
      style: {
        width: "100%",
        paddingTop: 16
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "1rem"
      },
      className: "button-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
        disabled: fundPoolAmount <= 0
      }),
      onClick: onFundPool
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "transaction.trxTypes.asset_fund_fee_pool"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button outline",
      onClick: reset
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.perm.reset"
    }))));
  }

  renderClaimPool() {
    const {
      props,
      onClaimPool,
      reset
    } = this;
    const {
      claimPoolAmount
    } = this.state;
    const {
      asset,
      core,
      getDynamicObject
    } = props;
    let dynamicObject = getDynamicObject(asset.get("dynamic_asset_data_id"));
    const coreID = core.get("id") || "1.3.0";
    const balanceText = !!dynamicObject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onClick: () => {
        this.state.claimPoolAmountAsset.setAmount({
          sats: dynamicObject.get("fee_pool")
        });
        this.setState({
          claimPoolAmount: this.state.claimPoolAmountAsset.getAmount({
            real: true
          })
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "transfer.available"
    }), ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      amount: dynamicObject.get("fee_pool"),
      asset: coreID
    })) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "p",
      content: "explorer.asset.fee_pool.claim_pool_text"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: "transfer.amount",
      display_balance: balanceText,
      amount: claimPoolAmount,
      onChange: this.onClaimInput.bind(this, "claimPoolAmount"),
      asset: coreID,
      assets: [coreID],
      placeholder: "0.0",
      tabIndex: 2,
      style: {
        width: "100%",
        paddingTop: 16
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "1rem"
      },
      className: "button-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
        disabled: claimPoolAmount <= 0
      }),
      onClick: onClaimPool
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "transaction.trxTypes.asset_claim_fee_pool"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button outline",
      onClick: reset
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.perm.reset"
    }))));
  }

  renderClaimFees() {
    const {
      props
    } = this;
    const {
      claimFeesAmount
    } = this.state;
    const {
      asset,
      getDynamicObject
    } = props;
    let dynamicObject = getDynamicObject(asset.get("dynamic_asset_data_id"));
    let unclaimedBalance = dynamicObject ? dynamicObject.get("accumulated_fees") : 0;
    let validClaim = claimFeesAmount > 0 && this.state.claimFeesAmountAsset.getAmount() <= unclaimedBalance;
    let unclaimedBalanceText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onClick: () => {
        this.state.claimFeesAmountAsset.setAmount({
          sats: dynamicObject.get("accumulated_fees")
        });
        this.setState({
          claimFeesAmount: this.state.claimFeesAmountAsset.getAmount({
            real: true
          })
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "transfer.available"
    }), ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      amount: unclaimedBalance,
      asset: asset.get("id")
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "p",
      content: "explorer.asset.fee_pool.claim_text",
      asset: asset.get("symbol")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingBottom: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "explorer.asset.fee_pool.unclaimed_issuer_income"
    }), ":\xA0", dynamicObject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_6__["default"], {
      amount: dynamicObject.get("accumulated_fees"),
      asset: asset.get("id")
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: "transfer.amount",
      display_balance: unclaimedBalanceText,
      amount: claimFeesAmount,
      onChange: this.onClaimInput.bind(this, "claimFeesAmount"),
      asset: asset.get("id"),
      assets: [asset.get("id")],
      placeholder: "0.0",
      tabIndex: 1,
      style: {
        width: "100%",
        paddingTop: 16
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "1rem"
      },
      className: "button-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button", {
        disabled: !validClaim
      }),
      onClick: this.onClaimFees.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "explorer.asset.fee_pool.claim_fees"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button outline",
      onClick: this.reset.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.perm.reset"
    }))));
  }

  render() {
    if (this.props.type === "fund") {
      return this.renderFundPool();
    } else if (this.props.type === "claim") {
      return this.renderClaimPool();
    } else if (this.props.type === "claim_fees") {
      return this.renderClaimFees();
    }
  }

}

FeePoolOperation = (0,_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_8__["default"])(FeePoolOperation, {
  propNames: ["asset", "core"],
  defaultProps: {
    core: "1.3.0"
  },
  withDynamic: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeePoolOperation);

/***/ }),

/***/ 3022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetSymbolSplitter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2061);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2374);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2375);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2049);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2082);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2376);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2662);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2052);
/* harmony import */ var _Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2481);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2098);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(607);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(596);
/* harmony import */ var _Utility_FormattedTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3023);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(426);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(510);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(626);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2514);
/* harmony import */ var _Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3024);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(578);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1804);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3025);
/* harmony import */ var _AssetPublishFeed__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3026);
/* harmony import */ var _AssetResolvePrediction__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3028);
/* harmony import */ var _BidCollateralOperation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(3029);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





























const {
  Panel
} = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Collapse;

class AssetFlag extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      isSet,
      name
    } = this.props;

    if (!isSet) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "asset-flag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "label info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "account.user_issued_assets." + name
    })));
  }

} //-------------------------------------------------------------


class AssetPermission extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      isSet,
      name
    } = this.props;

    if (!isSet) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "asset-flag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "label info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "account.user_issued_assets." + name
    })));
  }

}

class Asset extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      callOrders: [],
      collateralBids: [],
      marginTableSort: "ratio",
      collateralTableSort: "price",
      sortDirection: true,
      showCollateralBidInInfo: false,
      cumulativeGrouping: false,
      activeFeedTab: "margin",
      activeAssetTab: "info"
    };
  }

  UNSAFE_componentWillMount() {
    this._getMarginCollateral();
  }

  updateOnCollateralBid() {
    this._getMarginCollateral();
  }

  _getMarginCollateral() {
    if (this.props.asset.has("bitasset")) {
      const assets = {
        [this.props.asset.get("id")]: this.props.asset.toJS(),
        [this.props.backingAsset.get("id")]: this.props.backingAsset.toJS()
      };
      const isPredictionMarket = this.props.asset.getIn(["bitasset", "is_prediction_market"], false);

      let feedPrice = this._getFeedPrice();

      if (!!feedPrice) {
        try {
          let mcr = this.props.asset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]);
          bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_15__.Apis.instance().db_api().exec("get_call_orders", [this.props.asset.get("id"), 300]).then(call_orders => {
            let callOrders = call_orders.map(c => {
              return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__.CallOrder(c, assets, this.props.asset.get("id"), feedPrice, mcr, isPredictionMarket);
            });
            this.setState({
              callOrders
            });
          });
        } catch (e) {// console.log(err);
        }

        try {
          bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_15__.Apis.instance().db_api().exec("get_collateral_bids", [this.props.asset.get("id"), 100, 0]).then(coll_orders => {
            let collateralBids = coll_orders.map(c => {
              return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__.CollateralBid(c, assets, this.props.asset.get("id"), feedPrice);
            });
            this.setState({
              collateralBids
            });
          });
        } catch (e) {
          console.log("get_collateral_bids Error: ", e);
        }
      }
    }
  }

  _getFeedPrice() {
    const assets = {
      [this.props.asset.get("id")]: this.props.asset.toJS(),
      [this.props.backingAsset.get("id")]: this.props.backingAsset.toJS()
    };
    const isPredictionMarket = this.props.asset.getIn(["bitasset", "is_prediction_market"], false);
    let sqr = this.props.asset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]);
    let feedPriceRaw = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].extractRawFeedPrice(this.props.asset); // if there has been no feed price, settlePrice has 0 amount

    if (feedPriceRaw.getIn(["base", "amount"]) == 0 && feedPriceRaw.getIn(["quote", "amount"]) == 0) {
      return null;
    }

    let feedPrice;
    /* Prediction markets don't need feeds for shorting, so the settlement price can be set to 1:1 */

    if (isPredictionMarket && feedPriceRaw.getIn(["base", "asset_id"]) === feedPriceRaw.getIn(["quote", "asset_id"])) {
      if (!assets[this.props.backingAsset.get("id")]) {
        assets[this.props.backingAsset.get("id")] = {
          precision: this.props.asset.get("precision")
        };
      }

      feedPriceRaw = feedPriceRaw.setIn(["base", "amount"], 1);
      feedPriceRaw = feedPriceRaw.setIn(["base", "asset_id"], this.props.backingAsset.get("id"));
      feedPriceRaw = feedPriceRaw.setIn(["quote", "amount"], 1);
      feedPriceRaw = feedPriceRaw.setIn(["quote", "asset_id"], this.props.asset.get("id"));
      sqr = 1000;
    } // Catch Invalid SettlePrice object


    if (feedPriceRaw.toJS) {
      let settleObject = feedPriceRaw.toJS();
      if (!assets[settleObject.base.asset_id]) return;
    }

    feedPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_16__.FeedPrice({
      priceObject: feedPriceRaw,
      market_base: this.props.asset.get("id"),
      sqr,
      assets
    });
    return feedPrice;
  }

  _toggleCumulativeGrouping() {
    this.setState({
      cumulativeGrouping: !this.state.cumulativeGrouping
    });
  }

  _assetType(asset) {
    return "bitasset" in asset ? asset.bitasset.is_prediction_market ? "Prediction" : "Smart" : "Simple";
  }

  formattedPrice(price, hide_symbols = false, hide_value = false, factor = 0, negative_invert = false) {
    if (typeof price == "number" && isNaN(price)) {
      return "-";
    }

    var base = price.base;
    var quote = price.quote;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
      base_amount: base.amount,
      base_asset: base.asset_id,
      quote_amount: quote.amount,
      quote_asset: quote.asset_id,
      hide_value: hide_value,
      hide_symbols: hide_symbols,
      factor: factor,
      negative_invert: negative_invert
    });
  }

  renderFlagIndicators(flags, names) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, names.map(name => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetFlag, {
        key: `flag_${name}`,
        name: name,
        isSet: flags[name]
      });
    }));
  }

  renderPermissionIndicators(permissions, names) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, names.map(name => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetPermission, {
        key: `perm_${name}`,
        name: name,
        isSet: permissions[name]
      });
    }));
  }

  renderAuthorityList(authorities) {
    return authorities.map(function (authority) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: authority
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_2__["default"], {
        account: authority
      }), "\xA0");
    });
  }

  renderMarketList(asset, markets) {
    var symbol = asset.symbol;
    return markets.map(function (market) {
      if (market == symbol) return null;
      var marketID = market + "_" + symbol;
      var marketName = market + "/" + symbol;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        key: marketID
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
        to: `/market/${marketID}`
      }, marketName), "\xA0");
    }.bind(this));
  }

  renderAboutBox(asset, originalAsset) {
    var issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__.ChainStore.getObject(asset.issuer, false, false);
    var issuerName = issuer ? issuer.get("name") : ""; // Add <a to any links included in the description

    let description = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].parseDescription(asset.options.description);
    let desc = description.main;
    let short_name = description.short_name ? description.short_name : null;
    let urlTest = /(http?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g; // Regexp needs a whitespace after a url, so add one to make sure

    desc = desc && desc.length > 0 ? desc + " " : desc;
    let urls = desc.match(urlTest); // Add market link

    const core_asset = this.props.coreAsset;
    const core_asset_symbol = core_asset.get("symbol");
    let preferredMarket = description.market ? description.market : core_asset_symbol;

    if (asset.bitasset) {
      preferredMarket = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__.ChainStore.getAsset(asset.bitasset.options.short_backing_asset);

      if (!!preferredMarket && preferredMarket.get) {
        preferredMarket = preferredMarket.get("symbol");
      } else {
        preferredMarket = core_asset_symbol;
      }
    }

    if (asset.symbol === core_asset_symbol) preferredMarket = "USD";

    if (urls && urls.length) {
      urls.forEach(url => {
        let markdownUrl = `<a target="_blank" class="external-link" rel="noopener noreferrer" href="${url}">${url}</a>`;
        desc = desc.replace(url, markdownUrl);
      });
    }

    let {
      name,
      prefix
    } = common_utils__WEBPACK_IMPORTED_MODULE_12__["default"].replaceName(originalAsset);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        overflow: "visible"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      maxWidth: 50,
      replaceNoneToBts: false,
      name: asset.symbol
    }), short_name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        marginRight: 15
      }
    }, short_name) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_27__.Link, {
      className: "button market-button",
      to: `/market/${asset.symbol}_${preferredMarket}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "exchange.market"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
      path: "assets/" + asset.symbol,
      alt_path: "assets/Asset",
      section: "summary",
      symbol: (prefix || "") + name,
      description: desc,
      issuer: issuerName,
      hide_issuer: "true"
    }));
  }

  renderSummary(asset) {
    // TODO: confidential_supply: 0 USD   [IF NOT ZERO OR NOT DISABLE CONFIDENTIAL]
    let dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
    if (dynamic) dynamic = dynamic.toJS();
    var options = asset.options;
    let flagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].getFlagBooleans(asset.options.flags, this.props.asset.has("bitasset_data_id"));
    let bitNames = Object.keys(flagBooleans);
    let isPrediction = "bitasset" in asset && asset.bitasset.is_prediction_market;
    let predictionRows = null;

    if (isPrediction) {
      let description = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].parseDescription(asset.options.description);
      predictionRows = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("explorer.asset.prediction_market_asset.tooltip_prediction")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.prediction_market_asset.prediction"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("explorer.asset.prediction_market_asset.tooltip_prediction")
      }, description.condition))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("explorer.asset.prediction_market_asset.tooltip_resolution_date")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.prediction_market_asset.resolution_date"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tooltip, {
        title: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("explorer.asset.prediction_market_asset.tooltip_resolution_date")
      }, description.expiry))));
    }

    var currentSupply = dynamic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.summary.current_supply"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
      amount: dynamic.current_supply,
      asset: asset.id
    }))) : null;
    var stealthSupply = dynamic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.summary.stealth_supply"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
      amount: dynamic.confidential_supply,
      asset: asset.id
    }))) : null;
    var marketFee = flagBooleans["charge_market_fee"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.summary.market_fee"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, " ", options.market_fee_percent / 100.0, " % ")) : null; // options.max_market_fee initially a string

    var marketFeeReferralReward = flagBooleans["charge_market_fee"] && options.extensions && options.extensions.reward_percent >= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("account.user_issued_assets.reward_percent_tooltip")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.summary.market_fee_referral_reward_percent"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Icon, {
      type: "question-circle",
      theme: "filled"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, " ", options.extensions.reward_percent / 100.0, " % ")) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "asset-card no-padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card-divider"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: asset.symbol
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table key-value-table table-hover"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.summary.asset_type"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, " ", this._assetType(asset), " ")), isPrediction && predictionRows, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.summary.issuer"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_2__["default"], {
      account: asset.issuer
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.assets.precision"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, " ", asset.precision, " ")), asset.bitasset ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.assets.backing_asset"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_3__["default"], {
      asset: asset.bitasset.options.short_backing_asset
    }))) : null, currentSupply, stealthSupply, marketFee, marketFeeReferralReward)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), this.renderFlagIndicators(flagBooleans, bitNames));
  }

  renderPriceFeed(asset) {
    var bitAsset = asset.bitasset;
    if (!("current_feed" in bitAsset)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      header: title
    });
    var currentFeed = bitAsset.current_feed;
    var feedPrice = this.formattedPrice(common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].extractRawFeedPrice(asset));
    var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.price_feed.title"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "float-right"
    }, feedPrice));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table key-value-table table-hover",
      style: {
        padding: "1.2rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.price_feed.external_feed_price"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, feedPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.price_feed.feed_lifetime"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, bitAsset.options.feed_lifetime_sec / 60 / 60)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.price_feed.min_feeds"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, bitAsset.options.minimum_feeds)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.price_feed.maintenance_collateral_ratio"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, currentFeed.maintenance_collateral_ratio / 1000)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.price_feed.maximum_short_squeeze_ratio"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, currentFeed.maximum_short_squeeze_ratio / 1000)))));
  }

  _analyzeBids(settlement_fund_debt) {
    // Convert supply to calculable values
    let current_supply_value = settlement_fund_debt;
    let bids_collateral_value = 0;
    let bids_debt_value = 0;
    let sorted_bids = this.state.collateralBids.sort((a, b) => {
      return b.bid.toReal() - a.bid.toReal();
    });
    sorted_bids.forEach(bid => {
      let collateral = bid.collateral;
      let debt = bid.debt;

      if (bids_debt_value < current_supply_value) {
        if (bids_debt_value + debt >= current_supply_value) {
          debt = current_supply_value - bids_debt_value;
          collateral = debt / bid.debt * collateral;
          bid.consideredIfRevived = 2;
        } else {
          bid.consideredIfRevived = 1;
        }

        bids_collateral_value = bids_collateral_value + collateral;
        bids_debt_value = bids_debt_value + debt;
      } else {
        bid.consideredIfRevived = 0;
      }
    });
    return {
      collateral: bids_collateral_value,
      debt: bids_debt_value
    };
  }

  renderSettlement(asset) {
    var bitAsset = asset.bitasset;
    if (!("current_feed" in bitAsset)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      header: title
    });
    let dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
    if (dynamic) dynamic = dynamic.toJS();
    var currentSupply = dynamic ? dynamic.current_supply : 0;
    var currentFeed = bitAsset.current_feed;
    var isGlobalSettle = asset.bitasset.settlement_fund > 0 ? true : false;
    let settlement_fund_collateral_ratio = null;
    let total_collateral_ratio = null;
    let revive_price_with_bids = null;

    if (isGlobalSettle) {
      /***
       * Global Settled Assets
       */
      var settlementFund = bitAsset.settlement_fund;
      /**
       * In globally settled assets the force settlement offset is 0
       *
       */

      var settlementPrice = this.formattedPrice(bitAsset.settlement_price);
      var revivePrice = this.formattedPrice(bitAsset.settlement_price, false, false, currentFeed.maintenance_collateral_ratio / 1000, true);
      const assets = {
        [this.props.asset.get("id")]: this.props.asset.toJS(),
        [this.props.backingAsset.get("id")]: this.props.backingAsset.toJS()
      }; // Convert supply to calculable values

      let current_supply_value = currentSupply;
      let current_collateral_value = bitAsset.settlement_fund;

      let bids = this._analyzeBids(current_supply_value);

      revive_price_with_bids = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
        base_amount: bitAsset.settlement_fund / 1 + bids.collateral // /1 is implicit type conversion
        ,
        base_asset: assets[bitAsset.options.short_backing_asset].id,
        quote_amount: bids.debt,
        quote_asset: asset.id,
        hide_value: false,
        hide_symbols: false,
        factor: currentFeed.maintenance_collateral_ratio / 1000,
        negative_invert: true
      });
      current_supply_value = current_supply_value / Math.pow(10, asset.precision);
      current_collateral_value = current_collateral_value / Math.pow(10, assets[bitAsset.options.short_backing_asset].precision);
      let bids_collateral = bids.collateral / Math.pow(10, assets[bitAsset.options.short_backing_asset].precision);

      let feedPrice = this._getFeedPrice();

      if (feedPrice) {
        settlement_fund_collateral_ratio = current_collateral_value / feedPrice.toReal() / current_supply_value;
        total_collateral_ratio = (current_collateral_value + bids_collateral) / feedPrice.toReal() / current_supply_value;
      }
    } else {
      /***
       * Non Global Settlement Assets
       */
      var globalSettlementPrice = this.getGlobalSettlementPrice();
      var globalSettlementTriggerPrice = this.getGlobalSettlementPrice(currentFeed.maximum_short_squeeze_ratio / 1000);
      var currentSettled = bitAsset.force_settled_volume;
      var settlementOffset = bitAsset.options.force_settlement_offset_percent;
      var settlementDelay = bitAsset.options.force_settlement_delay_sec;
      var maxSettlementVolume = bitAsset.options.maximum_force_settlement_volume;
      var msspPrice = this.formattedPrice(common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].extractRawFeedPrice(asset), false, false, currentFeed.maximum_short_squeeze_ratio / 1000);
      var settlePrice = this.formattedPrice(common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].extractRawFeedPrice(asset), false, false, 1 - settlementOffset / 10000);
    }

    var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.title"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "float-right"
    }, isGlobalSettle ? settlementPrice : settlePrice));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: title
    }, isGlobalSettle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "p",
      content: "explorer.asset.settlement.gs_description"
    }), isGlobalSettle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.gs_revive"
    }), "\xA0(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.gs_see_actions"
    }), ", \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.gs_or"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: () => {
        this.setState({
          showCollateralBidInInfo: !this.state.showCollateralBidInInfo
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.gs_place_bid"
    })), ")."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table key-value-table table-hover",
      style: {
        padding: "1.2rem"
      }
    }, isGlobalSettle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.settlement_price"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, settlementPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.settlement_funds"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
      asset: bitAsset.options.short_backing_asset,
      amount: settlementFund
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.settlement_funds_collateral_ratio"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, settlement_fund_collateral_ratio ? settlement_fund_collateral_ratio.toFixed(6) : "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      style: {
        fontWeight: "bold"
      },
      content: "explorer.asset.settlement.gs_revert"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.gs_auto_revive_price"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, revivePrice, " / ", revive_price_with_bids)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.gs_collateral_valuation",
      mcr: currentFeed.maintenance_collateral_ratio / 1000
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, total_collateral_ratio ? total_collateral_ratio.toFixed(6) : "-"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.price_feed.maximum_short_squeeze_price"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, msspPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.price_feed.global_settlement_trigger"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, globalSettlementTriggerPrice ? globalSettlementTriggerPrice : "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.price_feed.global_settlement_price"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, globalSettlementPrice ? globalSettlementPrice : "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      style: {
        fontWeight: "bold"
      },
      content: "explorer.asset.settlement.force_settlement"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "\xA0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.price"
    }), "\xA0 (", settlementOffset / 100, "%", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.offset"
    }), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, settlePrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.delay"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedTime__WEBPACK_IMPORTED_MODULE_13__["default"], {
      time: settlementDelay
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.max_settle_volume"
    }), "\xA0(", maxSettlementVolume / 100, "%)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
      asset: asset.id,
      amount: currentSupply * (maxSettlementVolume / 10000)
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.current_settled"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
      asset: asset.id,
      amount: currentSettled
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.settlement.settle_remaining_volume"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, currentSettled == 0 ? 100 : Math.round(100 - currentSettled / (currentSupply * (maxSettlementVolume / 10000)) * 100, 2), "%")))));
  }

  renderFeePool(asset) {
    let dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
    if (dynamic) dynamic = dynamic.toJS();
    var options = asset.options;
    const core = this.props.coreAsset;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.fee_pool.title"
      }), dynamic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "float-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
        asset: "1.3.0",
        amount: dynamic.fee_pool
      })) : null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "p",
      content: "explorer.asset.fee_pool.pool_text",
      unsafe: true,
      asset: asset.symbol,
      core: core.get("symbol")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table key-value-table",
      style: {
        padding: "1.2rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.fee_pool.core_exchange_rate"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, this.formattedPrice(options.core_exchange_rate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.fee_pool.pool_balance"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, dynamic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
      asset: "1.3.0",
      amount: dynamic.fee_pool
    }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.fee_pool.unclaimed_issuer_income"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, dynamic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
      asset: asset.id,
      amount: dynamic.accumulated_fees
    }) : null))))));
  }

  renderAssetOwnerUpdate(asset) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "account.user_issued_assets.update_owner"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "p",
      content: "account.user_issued_assets.update_owner_text",
      asset: asset.symbol
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AssetOwnerUpdate__WEBPACK_IMPORTED_MODULE_22__["default"], {
      asset: asset,
      account: this.props.currentAccount,
      currentOwner: asset.issuer
    }));
  }

  renderFeedPublish(asset) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "transaction.trxTypes.asset_publish_feed"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "p",
      content: "explorer.asset.feed_producer_text"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AssetPublishFeed__WEBPACK_IMPORTED_MODULE_23__["default"], {
      asset: asset.id,
      account: this.props.currentAccount,
      currentOwner: asset.issuer
    }));
  }

  renderCollateralBid(asset) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.collateral.bid"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "p",
      content: "explorer.asset.collateral.bid_text",
      asset: asset.symbol
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "p",
      content: "explorer.asset.settlement.gs_included_on_revival"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "p",
      content: "explorer.asset.collateral.remove_bid"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BidCollateralOperation__WEBPACK_IMPORTED_MODULE_25__["default"], {
      asset: asset.symbol,
      core: asset.bitasset.options.short_backing_asset,
      funderAccountName: this.props.currentAccount,
      onUpdate: this.updateOnCollateralBid.bind(this),
      hideBalance: true
    }));
  }

  renderFeePoolFunding(asset) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.fee_pool.fund"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "p",
      content: "explorer.asset.fee_pool.fund_text",
      asset: asset.symbol
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_18__["default"], {
      asset: asset.symbol,
      funderAccountName: this.props.currentAccount,
      hideBalance: true
    }));
  }

  renderFeePoolClaiming(asset) {
    let dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
    if (dynamic) dynamic = dynamic.toJS();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.fee_pool.claim_balance"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_18__["default"], {
      asset: asset.symbol,
      funderAccountName: this.props.currentAccount,
      dynamic: dynamic,
      hideBalance: true,
      type: "claim"
    }));
  }

  renderFeesClaiming(asset) {
    let dynamic = this.props.getDynamicObject(asset.dynamic_asset_data_id);
    if (dynamic) dynamic = dynamic.toJS();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "transaction.trxTypes.asset_claim_fees"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_FeePoolOperation__WEBPACK_IMPORTED_MODULE_18__["default"], {
      asset: asset.symbol,
      dynamic: dynamic,
      funderAccountName: this.props.currentAccount,
      hideBalance: true,
      type: "claim_fees"
    }));
  } // TODO: Blacklist Authorities: <Account list like Voting>
  // TODO: Blacklist Market: Base/Market, Base/Market


  renderPermissions(asset) {
    //var dynamic = asset.dynamic;
    var options = asset.options;
    let permissionBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].getFlagBooleans(asset.options.issuer_permissions, this.props.asset.has("bitasset_data_id"));
    let bitNames = Object.keys(permissionBooleans); // options.blacklist_authorities = ["1.2.3", "1.2.4"];
    // options.whitelist_authorities = ["1.2.1", "1.2.2"];
    // options.blacklist_markets = ["JPY", "RUB"];
    // options.whitelist_markets = ["USD", "EUR", "GOLD"];
    // options.max_market_fee initially a string

    var maxMarketFee = permissionBooleans["charge_market_fee"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.permissions.max_market_fee"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
      amount: +options.max_market_fee,
      asset: asset.id
    }))) : null; // options.max_supply initially a string

    var maxSupply = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.permissions.max_supply"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
      amount: +options.max_supply,
      asset: asset.id
    })));
    var whiteLists = permissionBooleans["white_list"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), !!options.blacklist_authorities && !!options.blacklist_authorities.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.permissions.blacklist_authorities"
    }), ": \xA0", this.renderAuthorityList(options.blacklist_authorities)), !!options.blacklist_markets && !!options.blacklist_markets.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.permissions.blacklist_markets"
    }), ": \xA0", this.renderMarketList(asset, options.blacklist_markets)), !!options.whitelist_authorities && !!options.whitelist_authorities.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.permissions.whitelist_authorities"
    }), ": \xA0", this.renderAuthorityList(options.whitelist_authorities)), !!options.whitelist_markets && !!options.whitelist_markets.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.permissions.whitelist_markets"
    }), ": \xA0", this.renderMarketList(asset, options.whitelist_markets))) : null;
    let whitelist_market_fee_sharing = asset.options.extensions.whitelist_market_fee_sharing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.permissions.accounts_in_whitelist_market_fee_sharing"
    }), ": \xA0", this.renderAuthorityList(asset.options.extensions.whitelist_market_fee_sharing));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.permissions.title"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table key-value-table table-hover",
      style: {
        padding: "1.2rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, maxMarketFee, maxSupply)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), this.renderPermissionIndicators(permissionBooleans, bitNames), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), whiteLists, whitelist_market_fee_sharing));
  } // the global settlement price is defined as the
  // the price at which the least collateralize short's
  // collateral no longer enough to back the debt
  // he/she owes.


  getGlobalSettlementPrice(mssr = 1) {
    if (!this.state.callOrders) {
      return null;
    } // first get the least collateralized short position


    var leastColShort = null;
    var leastColShortRatio = null;
    var len = this.state.callOrders.length;

    for (var i = 0; i < len; i++) {
      let call_order = this.state.callOrders[i];

      if (leastColShort == null) {
        leastColShort = call_order;
        leastColShortRatio = call_order.getRatio();
      } else if (call_order.getRatio() < leastColShortRatio) {
        leastColShortRatio = call_order.getRatio();
        leastColShort = call_order;
      }
    }

    if (leastColShort == null) {
      // couldn't find the least colshort?
      return null;
    } // this price will happen when the CR is 1.
    // The CR is 1 if collateral / (debt x feed_ price) == 1
    // Rearranging, this means that the CR is 1 if
    // feed_price == collateral / debt
    //
    // Default is to return the global settlement price
    // Use mssr to calculate in when an event happens
    // based on an assets MSSR


    let debt = leastColShort.debt * mssr;
    let collateral = leastColShort.collateral;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
      base_amount: collateral,
      base_asset: leastColShort.call_price.base.asset_id,
      quote_amount: debt,
      quote_asset: leastColShort.call_price.quote.asset_id
    });
  }

  _renderFeedTable(asset) {
    var bitAsset = asset.bitasset;

    if (!("feeds" in bitAsset) || bitAsset.feeds.length == 0 || bitAsset.is_prediction_market || !bitAsset.feeds.length) {
      return null;
    }

    var feeds = bitAsset.feeds;
    var feed_price_header = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].extractRawFeedPrice(feeds[0][1][1]);
    var core_exchange_rate_header = feeds[0][1][1].core_exchange_rate; // Filter by valid feed lifetime, Sort by published date

    let now = new Date().getTime();
    let oldestValidDate = new Date(now - asset.bitasset.options.feed_lifetime_sec * 1000);
    feeds = feeds.filter(a => {
      return new Date(a[1][0]) > oldestValidDate;
    }).sort(function (feed1, feed2) {
      return new Date(feed2[1][0]) - new Date(feed1[1][0]);
    });
    let currentFeed = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].extractRawFeedPrice(asset);
    let currentFeedPrice = currentFeed.base.amount / currentFeed.quote.amount;
    let dataSource = [];
    let columns = [];
    columns = [{
      key: "publisher",
      fixed: "left",
      width: 150,
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.price_feed_data.publisher"
      }),
      dataIndex: "publisher",
      sorter: (a, b) => {
        let nameA = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__.ChainStore.getAccount(a.publisher, false);
        if (nameA) nameA = nameA.get("name");
        let nameB = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__.ChainStore.getAccount(b.publisher, false);
        if (nameB) nameB = nameB.get("name");
        if (nameA > nameB) return 1;
        if (nameA < nameB) return -1;
        return 0;
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_2__["default"], {
          account: item
        });
      }
    }, {
      key: "feed_price",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.price_feed_data.feed_price"
      }), " ", "(", this.formattedPrice(feed_price_header, false, true), ")"),
      dataIndex: "feed_price",
      sorter: (a, b) => {
        let a_price = parseFloat(a.feed_price.base.amount / a.feed_price.quote.amount);
        let b_price = parseFloat(b.feed_price.base.amount / b.feed_price.quote.amount);
        if (a_price > b_price) return 1;
        if (a_price < b_price) return -1;
        return 0;
      },
      render: item => {
        let price = parseFloat(item.base.amount / item.quote.amount);
        let median_offset = (price / currentFeedPrice * 100 - 100).toFixed(2);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.formattedPrice(item, true), "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: median_offset > 0 ? "txtlabel success" : median_offset < 0 ? "txtlabel warning" : "txtlabel"
        }, median_offset, "%"), ")");
      }
    }, {
      key: "core_exchange_rate",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.price_feed_data.core_exchange_rate"
      }), " ", "(", this.formattedPrice(core_exchange_rate_header, false, true), ")"),
      dataIndex: "core_exchange_rate",
      render: item => {
        return this.formattedPrice(item, true);
      }
    }, {
      key: "maintenance_collateral_ratio",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.price_feed_data.maintenance_collateral_ratio"
      }),
      dataIndex: "maintenance_collateral_ratio",
      render: item => {
        return item;
      }
    }, {
      key: "maximum_short_squeeze_ratio",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.price_feed_data.maximum_short_squeeze_ratio"
      }),
      dataIndex: "maximum_short_squeeze_ratio",
      render: item => {
        return item;
      }
    }, {
      key: "publishDate",
      fixed: "right",
      width: 150,
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.price_feed_data.published"
      }),
      dataIndex: "publishDate",
      sorter: (a, b) => {
        if (a.publishDate.getTime() > b.publishDate.getTime()) return 1;
        if (a.publishDate.getTime() < b.publishDate.getTime()) return -1;
        return 0;
      },
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TimeAgo__WEBPACK_IMPORTED_MODULE_9__["default"], {
          time: item
        });
      }
    }];

    for (var i = 0; i < feeds.length; i++) {
      var feed = feeds[i];
      var publisher = feed[0];
      var publishDate = new Date(feed[1][0] + "Z");
      var feed_price = common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].extractRawFeedPrice(feed[1][1]);
      var core_exchange_rate = feed[1][1].core_exchange_rate;
      var maintenance_collateral_ratio = "" + feed[1][1].maintenance_collateral_ratio / 1000;
      var maximum_short_squeeze_ratio = "" + feed[1][1].maximum_short_squeeze_ratio / 1000;
      dataSource.push({
        publisher: publisher,
        feed_price: feed_price,
        core_exchange_rate: core_exchange_rate,
        maintenance_collateral_ratio: maintenance_collateral_ratio,
        maximum_short_squeeze_ratio: maximum_short_squeeze_ratio,
        publishDate: publishDate
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Table, {
      style: {
        width: "100%"
      },
      rowKey: "feedPublisher",
      columns: columns,
      dataSource: dataSource,
      pagination: false,
      locale: {
        emptyText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "explorer.asset.price_feed_data.empty"
        })
      }
    });
  }

  _renderMarginTable() {
    let {
      cumulativeGrouping
    } = this.state;
    let columns = [];
    let dataSource = [];

    if (this.state.callOrders && this.state.callOrders.length > 0) {
      const cummulativeSuffix = cumulativeGrouping ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\xA0(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.cumulative"
      }), ")") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\xA0\xA0\xA0\xA0\xA0\xA0");
      let debt_cum = 0;
      let coll_cum = 0;
      this.state.callOrders.map(c => {
        debt_cum += c.debt;
        coll_cum += c.collateral;
        dataSource.push({
          borrower: c.borrower,
          collateral: {
            amount: cumulativeGrouping ? coll_cum : c.collateral,
            asset: c.getCollateral().asset_id
          },
          debt: {
            amount: cumulativeGrouping ? debt_cum : c.debt,
            asset: c.amountToReceive().asset_id
          },
          call: c.call_price,
          tcr: c.order.target_collateral_ratio,
          cr: {
            ratio: c.getRatio(),
            status: c.getStatus()
          }
        });
      });

      const unitInfo = key => {
        let item = dataSource[0][key];
        return dataSource.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), item.base ? this.formattedPrice(item, false, true) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
          asset: item.asset,
          amount: item.amount,
          hide_amount: true
        })) : null;
      };

      columns = [{
        key: "borrower",
        fixed: "left",
        width: 200,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "transaction.borrower"
        }),
        dataIndex: "borrower",
        sorter: (a, b) => {
          let nameA = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__.ChainStore.getAccount(a.borrower, false);
          if (nameA) nameA = nameA.get("name");
          let nameB = bitsharesjs__WEBPACK_IMPORTED_MODULE_14__.ChainStore.getAccount(b.borrower, false);
          if (nameB) nameB = nameB.get("name");
          if (nameA > nameB) return 1;
          if (nameA < nameB) return -1;
          return 0;
        },
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_2__["default"], {
            account: item
          });
        }
      }, {
        key: "collateral",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "transaction.collateral"
        }), cummulativeSuffix, unitInfo("collateral")),
        dataIndex: "collateral",
        sorter: (a, b) => {
          if (a.collateral.amount > b.collateral.amount) return 1;
          if (a.collateral.amount < b.collateral.amount) return -1;
          return 0;
        },
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tooltip, {
            title: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("explorer.asset.margin_positions.click_to_switch_to_cumulative"),
            mouseEnterDelay: 0.5
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            onClick: this._toggleCumulativeGrouping.bind(this),
            style: {
              cursor: "pointer"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
            amount: item.amount,
            asset: item.asset,
            hide_asset: true
          })));
        }
      }, {
        key: "debt",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "transaction.borrow_amount"
        }), cummulativeSuffix, unitInfo("debt")),
        dataIndex: "debt",
        sorter: (a, b) => {
          if (a.debt.amount > b.debt.amount) return 1;
          if (a.debt.amount < b.debt.amount) return -1;
          return 0;
        },
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            onClick: this._toggleCumulativeGrouping.bind(this),
            style: {
              cursor: "pointer"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tooltip, {
            title: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("explorer.asset.margin_positions.click_to_switch_to_cumulative"),
            mouseEnterDelay: 0.5
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
            amount: item.amount,
            asset: item.asset,
            hide_asset: true
          })));
        }
      }, {
        key: "call",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "exchange.call"
        }), unitInfo("call")),
        dataIndex: "call",
        render: item => {
          return this.formattedPrice(item, true, false);
        }
      }, {
        key: "tcr",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tooltip, {
          title: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("borrow.target_collateral_ratio_explanation")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "borrow.target_collateral_ratio_short"
        })),
        dataIndex: "tcr",
        render: item => {
          return !!item ? (item / 1000).toFixed(3) : "-";
        }
      }, {
        key: "cr",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "borrow.coll_ratio"
        }),
        dataIndex: "cr",
        fixed: "right",
        width: 100,
        sorter: (a, b) => {
          if (a.cr.ratio > b.cr.ratio) return 1;
          if (a.cr.ratio < b.cr.ratio) return -1;
          return 0;
        },
        render: item => {
          let classNames = "margin-ratio " + item.status;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: classNames
          }, item.ratio.toFixed(3)));
        }
      }];
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Table, {
      style: {
        width: "100%"
      },
      rowKey: "feedMargins",
      columns: columns,
      dataSource: dataSource,
      rowClassName: "margin-row",
      pagination: {
        pageSize: Number(25)
      },
      locale: {
        emptyText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "explorer.asset.margin_positions.empty"
        })
      }
    });
  }

  _renderCollBidTable() {
    let columns = [];
    let dataSource = [];
    columns = [{
      key: "bidder",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "transaction.bidder"
      }),
      dataIndex: "bidder",
      fixed: "left",
      width: 200,
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_2__["default"], {
          account: item
        });
      }
    }, {
      key: "collateral",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "transaction.collateral"
      }),
      dataIndex: "collateral",
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
          amount: item.amount,
          asset: item.asset_id,
          hide_asset: true
        });
      }
    }, {
      key: "debt",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "transaction.borrow_amount"
      }),
      dataIndex: "debt",
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
          amount: item.amount,
          asset: item.asset_id,
          hide_asset: true
        });
      }
    }, {
      key: "debt_cum",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "transaction.cumulative_borrow_amount"
      }),
      dataIndex: "debt_cum",
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
          amount: item.amount,
          asset: item.asset_id,
          hide_asset: true
        });
      }
    }, {
      key: "price",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "explorer.asset.collateral_bid.bid"
      }),
      dataIndex: "price",
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_6__["default"], {
          base_amount: item.base.amount,
          base_asset: item.base.asset_id,
          quote_amount: item.quote.amount,
          quote_asset: item.quote.asset_id,
          hide_symbols: true
        });
      }
    }, {
      key: "cr",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "borrow.coll_ratio"
      }),
      dataIndex: "cr",
      render: item => {
        return item.toFixed(3);
      }
    }, {
      key: "included",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "borrow.considered_on_revival"
      }),
      dataIndex: "included",
      render: item => {
        if (item == 2) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "explorer.asset.collateral_bid.included.partial"
        });else if (item == 1) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "explorer.asset.collateral_bid.included.yes"
        });else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "explorer.asset.collateral_bid.included.no"
        });
      }
    }];
    let debt_cum = 0;
    this.state.collateralBids.map(c => {
      debt_cum += c.debt;
      dataSource.push({
        bidder: c.bidder,
        collateral: {
          amount: c.bid.base.amount,
          asset: c.bid.base.asset_id
        },
        debt: {
          amount: c.bid.quote.amount,
          asset: c.bid.quote.asset_id
        },
        debt_cum: {
          amount: debt_cum,
          asset: c.bid.quote.asset_id
        },
        price: c.bid,
        cr: c.getRatio(),
        included: c.consideredIfRevived
      });
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Table, {
      style: {
        width: "100%"
      },
      rowKey: "feedCollBid",
      columns: columns,
      dataSource: dataSource,
      pagination: {
        pageSize: Number(25)
      },
      locale: {
        emptyText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "explorer.asset.collateral_bid.empty"
        })
      }
    });
  }

  _setFeedTab(tab) {
    this.setState({
      activeFeedTab: tab
    });
  }

  _setAssetTab(tab) {
    this.setState({
      activeAssetTab: tab
    });
  }

  renderFeedTables(asset) {
    var bitAsset = asset.bitasset;

    if (!("feeds" in bitAsset) || bitAsset.feeds.length == 0 || bitAsset.is_prediction_market || !bitAsset.feeds.length) {
      return null;
    }

    let isGlobalSettlement = bitAsset.settlement_fund > 0 ? true : false;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tabs, {
      onChange: this._setFeedTab.bind(this),
      activeKey: this.state.activeFeedTab
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tabs.TabPane, {
      tab: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate(isGlobalSettlement ? "explorer.asset.collateral_bid.title" : "explorer.asset.margin_positions.title"),
      key: "margin"
    }, this.state.activeFeedTab == "margin" ? isGlobalSettlement ? this._renderCollBidTable() : this._renderMarginTable() : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tabs.TabPane, {
      tab: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("explorer.asset.price_feed_data.title"),
      key: "feed"
    }, this.state.activeFeedTab == "feed" ? this._renderFeedTable(asset) : null));
  }

  renderAssetResolvePrediction(asset) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Panel, {
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "account.user_issued_assets.resolve_prediction"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      component: "p",
      content: "account.user_issued_assets.resolve_prediction_text"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AssetResolvePrediction__WEBPACK_IMPORTED_MODULE_24__["default"], {
      asset: asset,
      account: this.props.currentAccount
    }));
  }

  render() {
    if (this.props.backingAsset === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_17__["default"], {
        subtitle: "asset_not_found_subtitle"
      });
    }

    if (!this.props.backingAsset.get || !this.props.coreAsset.get) {
      return null;
    }

    var asset = this.props.asset.toJS();
    var priceFeed = "bitasset" in asset ? this.renderPriceFeed(asset) : null;
    var priceFeedData = "bitasset" in asset ? this.renderFeedTables(asset) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container asset-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block page-layout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block main-content wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block medium-up-1",
      style: {
        width: "100%"
      }
    }, this.renderAboutBox(asset, this.props.asset)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tabs, {
      onChange: this._setAssetTab.bind(this),
      activeKey: this.state.activeAssetTab,
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tabs.TabPane, {
      tab: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("explorer.asset.info"),
      key: "info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical large-horizontal medium-up-1 large-up-2",
      style: {
        paddingTop: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content small-no-padding"
    }, this.renderSummary(asset)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Collapse, {
      className: "asset-collapse"
    }, this.renderPermissions(asset), this.renderFeePool(asset), priceFeed ? this.renderPriceFeed(asset) : null, priceFeed ? this.renderSettlement(asset) : null, this.state.showCollateralBidInInfo ? this.renderCollateralBid(asset) : null))), priceFeedData ? priceFeedData : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Tabs.TabPane, {
      tab: counterpart__WEBPACK_IMPORTED_MODULE_21___default().translate("explorer.asset.actions"),
      key: "actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_26__.Collapse, {
      className: "asset-collapse"
    }, this.renderFeePoolFunding(asset), this.renderFeePoolClaiming(asset), this.renderFeesClaiming(asset), this.renderAssetOwnerUpdate(asset), "bitasset" in asset && !asset.bitasset.is_prediction_market && this.renderFeedPublish(asset), this.state.collateralBids.length > 0 && this.renderCollateralBid(asset), "bitasset" in asset && asset.bitasset.is_prediction_market && this.renderAssetResolvePrediction(asset)))))));
  }

}

Asset = (0,alt_react__WEBPACK_IMPORTED_MODULE_20__.connect)(Asset, {
  listenTo() {
    return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_19__["default"]];
  },

  getProps() {
    return {
      currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_19__["default"].getState().currentAccount || stores_AccountStore__WEBPACK_IMPORTED_MODULE_19__["default"].getState().passwordAccount
    };
  }

});
Asset = (0,_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(Asset, {
  propNames: ["backingAsset", "coreAsset"]
});

class AssetContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    if (this.props.asset === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_17__["default"], {
        subtitle: "asset_not_found_subtitle"
      });
    }

    if (!this.props.asset.get) {
      return null;
    }

    let backingAsset = this.props.asset.has("bitasset") ? this.props.asset.getIn(["bitasset", "options", "short_backing_asset"]) : "1.3.0";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Asset, _extends({}, this.props, {
      backingAsset: backingAsset,
      coreAsset: "1.3.0"
    }));
  }

}

AssetContainer = (0,_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetContainer, {
  withDynamic: true
});
class AssetSymbolSplitter extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let symbol = this.props.match.params.symbol.toUpperCase();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetContainer, _extends({}, this.props, {
      asset: symbol
    }));
  }

}

/***/ }),

/***/ 3025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2075);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2312);








class AssetOwnerUpdate extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired,
    currentOwner: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
  };

  constructor() {
    super();
    this.state = {
      new_issuer_account_id: null,
      issuer_account_name: null
    };
  }

  onAccountNameChanged(key, name) {
    this.setState({
      [key]: name
    });
  }

  onAccountChanged(key, account) {
    this.setState({
      [key]: account ? account.get("id") : null
    });
  }

  onSubmit() {
    actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].updateOwner(this.props.asset, this.state.new_issuer_account_id).then(() => {
      this.onReset();
    });
  }

  onReset() {
    this.setState({
      new_issuer_account_id: null,
      issuer_account_name: null
    });
  }

  render() {
    const {
      currentOwner
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingBottom: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "account.user_issued_assets.current_issuer",
      accountName: currentOwner.get("name"),
      account: currentOwner.get("name"),
      error: null,
      tabIndex: 1,
      disabled: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "account.user_issued_assets.new_issuer",
      accountName: this.state.issuer_account_name,
      onChange: this.onAccountNameChanged.bind(this, "issuer_account_name"),
      onAccountChanged: this.onAccountChanged.bind(this, "new_issuer_account_id"),
      account: this.state.issuer_account_name,
      error: null,
      tabIndex: 1,
      typeahead: true,
      excludeAccounts: [currentOwner.get("name")]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "1rem"
      },
      className: "button-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("button", {
        disabled: !this.state.new_issuer_account_id
      }),
      onClick: this.onSubmit.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.user_issued_assets.update_owner"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button outline",
      onClick: this.onReset.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.perm.reset"
    }))));
  }

}

AssetOwnerUpdate = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetOwnerUpdate);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetOwnerUpdate);

/***/ }),

/***/ 3026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2075);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2312);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2049);
/* harmony import */ var _Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3027);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2796);











class AssetPublishFeed extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
  };

  constructor(props) {
    super();
    this.state = this.resetState(props);
  }

  resetState(props = this.props) {
    let publisher_id = props.account.get("id");
    const currentFeed = props.asset.getIn(["bitasset", "current_feed"]);
    /* Might need to check these default values */

    let mcr = currentFeed.get("maintenance_collateral_ratio", 1750);
    let mssr = currentFeed.get("maximum_short_squeeze_ratio", 1100);
    return {
      publisher: props.account.get("name"),
      publisher_id,
      mcr,
      mcrValue: mcr / 1000,
      mssr,
      mssrValue: mssr / 1000
    };
  }

  onAccountNameChanged(key, name) {
    this.setState({
      [key]: name
    });
  }

  onAccountChanged(key, account) {
    this.setState({
      [key]: account ? account.get("id") : null
    });
  }

  onSubmit() {
    actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].publishFeed({
      publisher: this.state.publisher_id,
      asset_id: this.props.asset.get("id"),
      mcr: this.state.mcr,
      mssr: this.state.mssr,
      feedPrice: this.state.feedPrice,
      cer: this.state.cer
    }); // .then(() => {
    //     this.setState(this.resetState());
    // });
  }

  onPriceChanged(key, value) {
    this.setState({
      [key]: value
    });
  }

  onSetRatio(key, {
    amount
  }) {
    /* Enforce one decimal point maximum */
    if (!!amount && typeof amount === "string" && amount.indexOf(".") !== -1 && amount.indexOf(".") + 4 !== amount.length) {
      amount = amount.substr(0, amount.indexOf(".") + 4);
    }

    this.setState({
      [key + "Value"]: amount,
      [key]: Math.floor(parseFloat(amount) * 1000)
    });
  }

  render() {
    const {
      asset
    } = this.props;
    const {
      mcrValue,
      mssrValue,
      publisher
    } = this.state;
    const base = asset.get("id");
    const quote = asset.getIn(["bitasset", "options", "short_backing_asset"]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "explorer.asset.feed_producer",
      accountName: publisher,
      onChange: this.onAccountNameChanged.bind(this, "publisher"),
      onAccountChanged: this.onAccountChanged.bind(this, "publisher_id"),
      account: publisher,
      error: null,
      tabIndex: 1,
      typeahead: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onPriceChanged: this.onPriceChanged.bind(this, "cer"),
      label: "explorer.asset.fee_pool.core_exchange_rate",
      quote: "1.3.0",
      base: base
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_PriceInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onPriceChanged: this.onPriceChanged.bind(this, "feedPrice"),
      label: "explorer.asset.price_feed.feed_price",
      quote: quote,
      base: base
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: "explorer.asset.price_feed.maintenance_collateral_ratio",
      amount: mcrValue,
      onChange: this.onSetRatio.bind(this, "mcr"),
      placeholder: "0.0",
      style: {
        width: "100%",
        paddingRight: "10px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: "explorer.asset.price_feed.maximum_short_squeeze_ratio",
      amount: mssrValue,
      onChange: this.onSetRatio.bind(this, "mssr"),
      placeholder: "0.0",
      style: {
        width: "100%",
        paddingRight: "10px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "1rem"
      },
      className: "button-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("button", {
        disabled: false
      }),
      onClick: this.onSubmit.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "transaction.trxTypes.asset_publish_feed"
    }))));
  }

}

AssetPublishFeed = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(AssetPublishFeed);
AssetPublishFeed = (0,_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__["default"])(AssetPublishFeed);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetPublishFeed);

/***/ }),

/***/ 3028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1927);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1926);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2312);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2048);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(426);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(626);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(607);












class AssetResolvePrediction extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAccount.isRequired
  };

  constructor() {
    super();
    this.state = {
      globalSettlementPrice: null,
      customPrice: false
    };
  }

  shouldComponentUpdate(np, ns) {
    return np.asset.id !== this.props.asset.id || ns.globalSettlementPrice !== this.state.globalSettlementPrice || ns.customPrice !== this.state.customPrice;
  }

  onPriceChanged(value) {
    if (value == 2 && !this.state.customPrice) {
      this.setState({
        globalSettlementPrice: 1,
        customPrice: true
      });
    } else {
      this.setState({
        globalSettlementPrice: value
      });
    }
  }

  onPriceChangedObject(value) {
    this.onPriceChanged(value.toReal());
  }

  onSubmit() {
    const {
      asset,
      account
    } = this.props;
    let base = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
      real: 1,
      asset_id: this.props.asset.id,
      precision: this.props.asset.precision
    });
    let quoteAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainStore.getAsset(asset.bitasset.options.short_backing_asset);
    let quote = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Asset({
      real: this.state.globalSettlementPrice,
      asset_id: this.props.asset.bitasset.options.short_backing_asset,
      precision: quoteAsset.get("precision")
    });
    let price = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__.Price({
      quote,
      base
    });
    actions_AssetActions__WEBPACK_IMPORTED_MODULE_4__["default"].assetGlobalSettle(asset, account.get("id"), price).then(() => {
      this.onReset();
    });
  }

  onReset() {
    this.setState({
      globalSettlementPrice: null,
      customPrice: false
    });
  }

  onChange({
    amount
  }) {
    this.onPriceChanged(amount);
  }

  onChangeRadio(e) {
    this.onPriceChanged(e.target.value);
  }

  render() {
    const {
      asset
    } = this.props;
    const base = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainStore.getAsset(asset.bitasset.options.short_backing_asset);
    let description = _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__["default"].parseDescription(asset.options.description);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Form, {
      style: {
        paddingBottom: "1rem"
      },
      className: "full-width",
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("explorer.asset.prediction_market_asset.tooltip_prediction"),
      placement: "topLeft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.prediction_market_asset.prediction"
    }), ": ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, description.condition))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("explorer.asset.prediction_market_asset.tooltip_resolution_date"),
      placement: "topLeft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "explorer.asset.prediction_market_asset.resolution_date"
    }), ": ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, description.expiry))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Radio.Group, {
      onChange: this.onChangeRadio.bind(this),
      value: this.state.globalSettlementPrice
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Radio, {
      value: 1,
      disabled: this.state.customPrice ? true : undefined
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "boolean.true"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Radio, {
      value: 0,
      disabled: this.state.customPrice ? true : undefined
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "boolean.false"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Radio, {
      value: !this.state.customPrice ? 2 : this.state.globalSettlementPrice
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "settings.custom"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_7__["default"], {
      disabled: this.state.customPrice ? undefined : true,
      label: "explorer.asset.price_feed.global_settlement_price",
      amount: this.state.globalSettlementPrice,
      onChange: this.onChange.bind(this),
      asset: base.get("id"),
      base: asset.symbol,
      isPrice: true,
      assets: [base.get("id")],
      placeholder: "0.0",
      style: {
        width: "100%"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "1rem"
      },
      className: "button-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
      type: "primary",
      disabled: this.state.globalSettlementPrice == null ? true : undefined,
      onClick: this.onSubmit.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "account.perm.publish_prediction"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
      style: {
        marginLeft: "8px"
      },
      onClick: this.onReset.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "account.perm.reset"
    })))));
  }

}

AssetResolvePrediction = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(AssetResolvePrediction);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetResolvePrediction);

/***/ }),

/***/ 3029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2796);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2082);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2312);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2049);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(426);










class BidCollateralOperation extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState = () => ({
    account: bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainStore.getAccount(this.props.funderAccountName),
    collateralAmount: "0",
    debtAmount: "0"
  });

  reset() {
    this.setState(this.initialState());
  }

  _collateralBidInput(value) {
    this.setState({
      collateralAmount: value.amount
    });
  }

  _debtBidInput(value) {
    this.setState({
      debtAmount: value.amount
    });
  }

  _onBidCollateral() {
    let {
      collateralAmount,
      debtAmount
    } = this.state;
    collateralAmount = collateralAmount == 0 ? collateralAmount : collateralAmount.replace(/,/g, "");
    debtAmount = debtAmount == 0 ? debtAmount : debtAmount.replace(/,/g, "");
    actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].bidCollateral(this.state.account ? this.state.account.get("id") : null, this.props.core, this.props.asset, collateralAmount, debtAmount);
    setTimeout(() => {
      this.props.onUpdate();
    }, 6000);
  }

  removeBid() {
    actions_AssetActions__WEBPACK_IMPORTED_MODULE_6__["default"].bidCollateral(this.state.account ? this.state.account.get("id") : null, this.props.core, this.props.asset, 0, 0);
    setTimeout(() => {
      this.props.onUpdate();
    }, 6000);
  }

  renderCollateralBid() {
    const {
      asset,
      core
    } = this.props;
    const {
      account,
      collateralAmount,
      debtAmount
    } = this.state;
    let tabIndex = 1;
    let balance = 0;
    const backingBalanceID = account ? account.getIn(["balances", core.get("id")]) : null;

    if (backingBalanceID) {
      let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainStore.getObject(backingBalanceID);

      if (balanceObject) {
        balance = balanceObject.get("balance");
      }
    }

    const balanceText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "span",
      content: "transfer.available"
    }), ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_5__["default"], {
      amount: balance,
      asset: core.get("id")
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "transaction.collateral",
      display_balance: balanceText,
      amount: collateralAmount,
      onChange: this._collateralBidInput.bind(this),
      asset: core.get("id"),
      assets: [core.get("id")],
      placeholder: "0.0",
      tabIndex: tabIndex++,
      style: {
        width: "100%",
        paddingTop: 16
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "transaction.borrow_amount",
      amount: debtAmount,
      onChange: this._debtBidInput.bind(this),
      asset: asset.get("id"),
      assets: [asset.get("id")],
      placeholder: "0.0",
      tabIndex: tabIndex++,
      style: {
        width: "100%",
        paddingTop: 16
      }
    }), this.state.collateralAmount !== "0" && this.state.debtAmount !== "0" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "explorer.asset.collateral.bid_price"
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_3__["default"], {
      base_amount: this.state.collateralAmount / 1,
      base_asset: core.get("id"),
      quote_amount: this.state.debtAmount / 1,
      quote_asset: asset.get("id"),
      noPopOver: true,
      ignorePriceFeed: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "1rem"
      },
      className: "button-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button"),
      onClick: this._onBidCollateral.bind(this),
      tabIndex: tabIndex++
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "transaction.trxTypes.bid_collateral"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button outline",
      onClick: this.reset.bind(this),
      tabIndex: tabIndex++
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "account.perm.reset"
    }))));
  }

  render() {
    return this.renderCollateralBid();
  }

}

BidCollateralOperation = (0,_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_7__["default"])(BidCollateralOperation, {
  propNames: ["asset", "core"],
  withDynamic: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BidCollateralOperation);

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

/***/ 3023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
 // a class to display time nicely when given seconds
// for example, display
// expects the number of seconds as a property

class FormattedTime extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time
    };
  } // given an integer seconds as an argument,
  // return the number of hours


  getHours(secs) {
    //console.log("get hours called with: " + secs);
    return secs / 3600;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.getHours(this.state.time), "h");
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattedTime);

/***/ }),

/***/ 3027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _AmountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2796);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(626);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2049);





class PriceInput extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super();
    let quote = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__.Asset({
      amount: 0,
      asset_id: props.quote.get("id"),
      precision: props.quote.get("precision")
    });
    let base = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__.Asset({
      amount: 0,
      asset_id: props.base.get("id"),
      precision: props.base.get("precision")
    });
    let price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_2__.Price({
      quote,
      base
    });
    this.state = {
      price,
      realPriceValue: price.toReal()
    };
  }

  onPriceChanged({
    amount
  }) {
    this.state.price.setPriceFromReal(parseFloat(amount));
    this.setState({
      realPriceValue: amount
    });
    if (this.props.onPriceChanged) this.props.onPriceChanged(this.state.price.clone());
  }

  render() {
    const {
      realPriceValue,
      price
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AmountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: this.props.label,
      amount: realPriceValue,
      onChange: this.onPriceChanged.bind(this),
      asset: price.base.asset_id,
      base: this.props.quote.get("symbol"),
      isPrice: true,
      assets: [price.quote.asset_id],
      placeholder: "0.0",
      tabIndex: 1,
      style: {
        width: "100%",
        paddingRight: "10px"
      }
    });
  }

}

PriceInput = (0,_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(PriceInput, {
  propNames: ["quote", "base"],
  defaultProps: {
    base: "1.3.0"
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceInput);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQuNmI4N2NhOTM4ZjM2ODE4M2Q1YjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBZkE7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQVZBO0FBWUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFEQTtBQUZBO0FBT0E7QUFaQTtBQWNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQU9BO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBS0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFEQTtBQUZBO0FBT0E7QUFaQTtBQWNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcFZBOztBQXVWQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9XQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7O0FBZEE7OztBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7O0FBZkE7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BOztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBT0E7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFJQTtBQU1BOztBQUdBO0FBSUE7QUFDQTs7QUFFQTtBQUVBOztBQUNBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBS0E7O0FBRUE7QUFPQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7O0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUdBOztBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUdBO0FBR0E7QUFDQTtBQUVBOztBQUdBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUVBO0FBRUE7O0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFEQTtBQUtBO0FBQUE7QUFLQTtBQURBO0FBWUE7QUFEQTtBQUtBO0FBQUE7QUFLQTtBQURBO0FBV0E7O0FBRUE7QUFHQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBUUE7QUFHQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBUUE7QUFHQTtBQUFBOztBQU9BO0FBT0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUFBO0FBT0E7QUFBQTtBQUdBO0FBQUE7QUFLQTtBQUFBO0FBT0E7QUFBQTtBQUlBO0FBREE7QUFtQkE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQUE7QUFNQTtBQUFBO0FBUUE7QUFBQTtBQU1BO0FBQUE7QUFVQTtBQUFBO0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFRQTtBQUNBO0FBQ0E7QUFGQTs7QUFRQTtBQUNBOztBQUVBOztBQUVBO0FBRUE7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUVBO0FBT0E7O0FBT0E7O0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTUE7QUFNQTs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBT0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQU5BO0FBUUE7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFRQTtBQUFBO0FBTUE7QUFBQTtBQUlBO0FBR0E7QUFKQTtBQVVBO0FBQUE7QUFpQkE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQVdBO0FBQUE7QUFTQTtBQUNBO0FBRkE7QUFtQkE7QUFBQTtBQU1BO0FBQUE7QUFVQTtBQUFBO0FBZUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQVdBO0FBQUE7QUFFQTtBQUFBO0FBT0E7QUFBQTtBQUdBO0FBQUE7QUFLQTtBQUFBO0FBT0E7QUFDQTtBQUZBO0FBV0E7QUFBQTtBQUlBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFzQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU5BO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFPQTtBQUFBO0FBVUE7QUFBQTtBQUtBO0FBQ0E7QUFGQTtBQVNBO0FBQUE7QUFLQTtBQUNBO0FBRkE7QUFZQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFPQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBR0E7OztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUdBO0FBQUE7QUFJQTtBQUNBO0FBRkE7O0FBU0E7QUFHQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBUUE7QUFNQTtBQUFBO0FBV0E7QUFBQTtBQVlBO0FBQUE7QUFXQTtBQUFBO0FBV0E7QUFJQTtBQUFBO0FBUUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFzQkE7QUFHQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTs7QUFFQTtBQUNBOztBQUNBO0FBTUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBbkJBO0FBc0JBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBSUE7QUFEQTtBQWNBO0FBOUNBO0FBaURBO0FBQ0E7QUFFQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFvQkE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWpCQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQU5BO0FBYUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBWkE7QUFpQkE7O0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFRQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWpCQTtBQW9CQTtBQUNBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBSkE7QUFPQTtBQUdBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQXRDQTtBQXlDQTtBQUNBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFHQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQXJDQTtBQXlDQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFjQTtBQUNBO0FBRUE7QUFEQTtBQUtBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBaUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFLQTtBQXJCQTtBQXdCQTs7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQVRBO0FBZ0JBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFaQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVpBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBZEE7QUFpQkE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQWhCQTtBQW1CQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFBQTtBQUVBO0FBakJBO0FBcUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRkE7QUFSQTtBQWVBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBOztBQUNBO0FBTUE7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQU5BO0FBZUE7QUFHQTtBQUpBO0FBWUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBR0E7QUFKQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBSUE7QUFBQTtBQXdCQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBc0JBOztBQTdrRUE7O0FBZ2xFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUtBOztBQVZBO0FBYUE7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQU9BO0FBR0E7QUFDQTtBQUhBO0FBTUE7O0FBdEJBOztBQXdCQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUtBOztBQTdGQTs7QUFnR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFjQTs7QUExS0E7O0FBNktBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBSUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBT0E7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQU1BO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBR0E7QUFEQTtBQU9BO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFWQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFQQTtBQVNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQU1BOztBQTdMQTs7QUFnTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFHQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQWNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUEzSkE7O0FBOEpBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBOztBQXpCQTs7QUEyQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFHQTtBQUVBO0FBQUE7QUFLQTs7QUEvQ0E7O0FBaURBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTs7QUFQQTs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7O0FBTUE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBbkJBO0FBc0JBOztBQXpDQTs7QUE0Q0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQUE7QUFFQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBWUE7O0FBL0ZBOztBQWlHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFUQTtBQVlBOztBQWhFQTs7QUFtRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBSEE7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFhQTtBQUNBOztBQTVKQTs7QUErSkE7Ozs7Ozs7Ozs7OztBQ25LQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQWhCQTs7QUFtQkE7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQWdCQTs7QUF4REE7O0FBMkRBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQWNjb3VudC9GZWVQb29sT3BlcmF0aW9uLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0Fzc2V0LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0Fzc2V0T3duZXJVcGRhdGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQXNzZXRQdWJsaXNoRmVlZC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQmxvY2tjaGFpbi9Bc3NldFJlc29sdmVQcmVkaWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0JpZENvbGxhdGVyYWxPcGVyYXRpb24uanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvbGlicy9Bc3NldFdyYXBwZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3IuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9GbG9hdGluZ0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Zvcm1hdHRlZFRpbWUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUHJpY2VJbnB1dC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7QXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmNvbnN0IHN0YXRlU2V0dGVyID0gKHRoYXQsIGtleSwgdHJhbnNmb3JtID0gdmFsdWUgPT4gdmFsdWUpID0+IHZhbHVlID0+XG4gICAgdGhhdC5zZXRTdGF0ZSh7W2tleV06IHRyYW5zZm9ybSh2YWx1ZSl9KTtcblxuY29uc3Qga2V5R2V0dGVyID0ga2V5ID0+IG9iamVjdCA9PiBvYmplY3Rba2V5XTtcblxuY2xhc3MgRmVlUG9vbE9wZXJhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdHlwZTogXCJmdW5kXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBvbkFjY291bnROYW1lQ2hhbmdlZCA9IHN0YXRlU2V0dGVyKHRoaXMsIFwiZnVuZGVyQWNjb3VudE5hbWVcIik7XG4gICAgb25BY2NvdW50Q2hhbmdlZCA9IHN0YXRlU2V0dGVyKHRoaXMsIFwibmV3RnVuZGVyQWNjb3VudFwiKTtcbiAgICBvblBvb2xJbnB1dCA9IHN0YXRlU2V0dGVyKHRoaXMsIFwiZnVuZFBvb2xBbW91bnRcIiwga2V5R2V0dGVyKFwiYW1vdW50XCIpKTtcblxuICAgIG9uQ2xhaW1JbnB1dChrZXksIHthbW91bnR9KSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5ICsgXCJBc3NldFwiXS5zZXRBbW91bnQoe3JlYWw6IGFtb3VudH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtrZXldOiBhbW91bnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25GdW5kUG9vbCA9ICgpID0+XG4gICAgICAgIEFzc2V0QWN0aW9ucy5mdW5kUG9vbChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubmV3RnVuZGVyQWNjb3VudFxuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5uZXdGdW5kZXJBY2NvdW50LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb3JlLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZnVuZFBvb2xBbW91bnRcbiAgICAgICAgKTtcblxuICAgIHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKCkpO1xuICAgIH07XG5cbiAgICBpbml0aWFsU3RhdGUgPSAoKSA9PiAoe1xuICAgICAgICBmdW5kZXJBY2NvdW50TmFtZTogdGhpcy5wcm9wcy5mdW5kZXJBY2NvdW50TmFtZSxcbiAgICAgICAgZnVuZFBvb2xBbW91bnQ6IDAsXG4gICAgICAgIGZ1bmRQb29sQXNzZXQ6IG5ldyBBc3NldCh7XG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuY29yZS5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5jb3JlLmdldChcImlkXCIpXG4gICAgICAgIH0pLFxuICAgICAgICBjbGFpbVBvb2xBbW91bnQ6IDAsXG4gICAgICAgIGNsYWltUG9vbEFtb3VudEFzc2V0OiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0aGlzLnByb3BzLmNvcmUuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuY29yZS5nZXQoXCJpZFwiKVxuICAgICAgICB9KSxcbiAgICAgICAgY2xhaW1GZWVzQW1vdW50OiAwLFxuICAgICAgICBjbGFpbUZlZXNBbW91bnRBc3NldDogbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgb25DbGFpbUZlZXMoKSB7XG4gICAgICAgIGxldCBhY2NvdW50ID0gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHRoaXMucHJvcHMuZnVuZGVyQWNjb3VudE5hbWUpO1xuICAgICAgICBpZiAoIWFjY291bnQpIHJldHVybjtcbiAgICAgICAgQXNzZXRBY3Rpb25zLmNsYWltUG9vbEZlZXMoXG4gICAgICAgICAgICBhY2NvdW50LmdldChcImlkXCIpLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xhaW1GZWVzQW1vdW50QXNzZXRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkNsYWltUG9vbCA9ICgpID0+XG4gICAgICAgIEFzc2V0QWN0aW9ucy5jbGFpbVBvb2woXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbGFpbVBvb2xBbW91bnRBc3NldFxuICAgICAgICApO1xuXG4gICAgcmVuZGVyRnVuZFBvb2woKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICBvblBvb2xJbnB1dCxcbiAgICAgICAgICAgIG9uRnVuZFBvb2wsXG4gICAgICAgICAgICByZXNldCxcbiAgICAgICAgICAgIG9uQWNjb3VudE5hbWVDaGFuZ2VkLFxuICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZFxuICAgICAgICB9ID0gdGhpcztcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBjb3JlLCBoaWRlQmFsYW5jZSwgZ2V0RHluYW1pY09iamVjdH0gPSBwcm9wcztcbiAgICAgICAgY29uc3Qge2Z1bmRlckFjY291bnROYW1lLCBmdW5kUG9vbEFtb3VudCwgbmV3RnVuZGVyQWNjb3VudH0gPSBzdGF0ZTtcbiAgICAgICAgbGV0IGR5bmFtaWNPYmplY3QgPSBudWxsO1xuICAgICAgICBpZiAoIWhpZGVCYWxhbmNlKVxuICAgICAgICAgICAgZHluYW1pY09iamVjdCA9IGdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICAgICAgYXNzZXQuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICBjb25zdCBjb3JlSUQgPSBjb3JlLmdldChcImlkXCIpIHx8IFwiMS4zLjBcIjtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSAwO1xuICAgICAgICBpZiAobmV3RnVuZGVyQWNjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgY29yZUJhbGFuY2VJRCA9IG5ld0Z1bmRlckFjY291bnQuZ2V0SW4oW1wiYmFsYW5jZXNcIiwgY29yZUlEXSk7XG4gICAgICAgICAgICBpZiAoY29yZUJhbGFuY2VJRCkge1xuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoY29yZUJhbGFuY2VJRCk7XG4gICAgICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZSA9IGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFsYW5jZVRleHQgPSAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mdW5kUG9vbEFzc2V0LnNldEFtb3VudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXRzOiBiYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmRQb29sQW1vdW50OiB0aGlzLnN0YXRlLmZ1bmRQb29sQXNzZXQuZ2V0QW1vdW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPlxuICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXQgYW1vdW50PXtiYWxhbmNlfSBhc3NldD17Y29yZUlEfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtoaWRlQmFsYW5jZSB8fCAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjEuNXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5wb29sX2JhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+OiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pY09iamVjdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljT2JqZWN0LmdldChcImZlZV9wb29sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17Y29yZUlEfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5mdW5kaW5nX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnVuZGVyQWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkFjY291bnROYW1lQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17b25BY2NvdW50Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnVuZGVyQWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2VUZXh0fVxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Z1bmRQb29sQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Qb29sSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlSUR9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2NvcmVJRF19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmdW5kUG9vbEFtb3VudCA8PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRnVuZFBvb2x9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X2Z1bmRfZmVlX3Bvb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiIG9uQ2xpY2s9e3Jlc2V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2xhaW1Qb29sKCkge1xuICAgICAgICBjb25zdCB7cHJvcHMsIG9uQ2xhaW1Qb29sLCByZXNldH0gPSB0aGlzO1xuICAgICAgICBjb25zdCB7Y2xhaW1Qb29sQW1vdW50fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHthc3NldCwgY29yZSwgZ2V0RHluYW1pY09iamVjdH0gPSBwcm9wcztcbiAgICAgICAgbGV0IGR5bmFtaWNPYmplY3QgPSBnZXREeW5hbWljT2JqZWN0KFxuICAgICAgICAgICAgYXNzZXQuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNvcmVJRCA9IGNvcmUuZ2V0KFwiaWRcIikgfHwgXCIxLjMuMFwiO1xuXG4gICAgICAgIGNvbnN0IGJhbGFuY2VUZXh0ID0gISFkeW5hbWljT2JqZWN0ID8gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xhaW1Qb29sQW1vdW50QXNzZXQuc2V0QW1vdW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdHM6IGR5bmFtaWNPYmplY3QuZ2V0KFwiZmVlX3Bvb2xcIilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhaW1Qb29sQW1vdW50OiB0aGlzLnN0YXRlLmNsYWltUG9vbEFtb3VudEFzc2V0LmdldEFtb3VudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWw6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+XG4gICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWNPYmplY3QuZ2V0KFwiZmVlX3Bvb2xcIil9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlSUR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNsYWltX3Bvb2xfdGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2VUZXh0fVxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2NsYWltUG9vbEFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DbGFpbUlucHV0LmJpbmQodGhpcywgXCJjbGFpbVBvb2xBbW91bnRcIil9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXtjb3JlSUR9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2NvcmVJRF19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBjbGFpbVBvb2xBbW91bnQgPD0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsYWltUG9vbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24udHJ4VHlwZXMuYXNzZXRfY2xhaW1fZmVlX3Bvb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZVwiIG9uQ2xpY2s9e3Jlc2V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2xhaW1GZWVzKCkge1xuICAgICAgICBjb25zdCB7cHJvcHN9ID0gdGhpcztcbiAgICAgICAgY29uc3Qge2NsYWltRmVlc0Ftb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7YXNzZXQsIGdldER5bmFtaWNPYmplY3R9ID0gcHJvcHM7XG4gICAgICAgIGxldCBkeW5hbWljT2JqZWN0ID0gZ2V0RHluYW1pY09iamVjdChcbiAgICAgICAgICAgIGFzc2V0LmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCB1bmNsYWltZWRCYWxhbmNlID0gZHluYW1pY09iamVjdFxuICAgICAgICAgICAgPyBkeW5hbWljT2JqZWN0LmdldChcImFjY3VtdWxhdGVkX2ZlZXNcIilcbiAgICAgICAgICAgIDogMDtcbiAgICAgICAgbGV0IHZhbGlkQ2xhaW0gPVxuICAgICAgICAgICAgY2xhaW1GZWVzQW1vdW50ID4gMCAmJlxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbGFpbUZlZXNBbW91bnRBc3NldC5nZXRBbW91bnQoKSA8PSB1bmNsYWltZWRCYWxhbmNlO1xuXG4gICAgICAgIGxldCB1bmNsYWltZWRCYWxhbmNlVGV4dCA9IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNsYWltRmVlc0Ftb3VudEFzc2V0LnNldEFtb3VudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXRzOiBkeW5hbWljT2JqZWN0LmdldChcImFjY3VtdWxhdGVkX2ZlZXNcIilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhaW1GZWVzQW1vdW50OiB0aGlzLnN0YXRlLmNsYWltRmVlc0Ftb3VudEFzc2V0LmdldEFtb3VudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWw6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+XG4gICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3VuY2xhaW1lZEJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5jbGFpbV90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC51bmNsYWltZWRfaXNzdWVyX2luY29tZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNPYmplY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWNPYmplY3QuZ2V0KFwiYWNjdW11bGF0ZWRfZmVlc1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLmFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17dW5jbGFpbWVkQmFsYW5jZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17Y2xhaW1GZWVzQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNsYWltSW5wdXQuYmluZCh0aGlzLCBcImNsYWltRmVlc0Ftb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1thc3NldC5nZXQoXCJpZFwiKV19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjFyZW1cIn19IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhdmFsaWRDbGFpbVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xhaW1GZWVzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNsYWltX2ZlZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJmdW5kXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckZ1bmRQb29sKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcImNsYWltXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNsYWltUG9vbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJjbGFpbV9mZWVzXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNsYWltRmVlcygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5GZWVQb29sT3BlcmF0aW9uID0gQXNzZXRXcmFwcGVyKEZlZVBvb2xPcGVyYXRpb24sIHtcbiAgICBwcm9wTmFtZXM6IFtcImFzc2V0XCIsIFwiY29yZVwiXSxcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29yZTogXCIxLjMuMFwiXG4gICAgfSxcbiAgICB3aXRoRHluYW1pYzogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZlZVBvb2xPcGVyYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcbmltcG9ydCBMaW5rVG9Bc3NldEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQXNzZXRCeUlkXCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgRm9ybWF0dGVkUHJpY2UgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkUHJpY2VcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgVGltZUFnbyBmcm9tIFwiLi4vVXRpbGl0eS9UaW1lQWdvXCI7XG5pbXBvcnQgSGVscENvbnRlbnQgZnJvbSBcIi4uL1V0aWxpdHkvSGVscENvbnRlbnRcIjtcbmltcG9ydCBhc3NldFV0aWxzIGZyb20gXCJjb21tb24vYXNzZXRfdXRpbHNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgRm9ybWF0dGVkVGltZSBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRUaW1lXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7Q2FsbE9yZGVyLCBDb2xsYXRlcmFsQmlkLCBGZWVkUHJpY2V9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IFBhZ2U0MDQgZnJvbSBcIi4uL1BhZ2U0MDQvUGFnZTQwNFwiO1xuaW1wb3J0IEZlZVBvb2xPcGVyYXRpb24gZnJvbSBcIi4uL0FjY291bnQvRmVlUG9vbE9wZXJhdGlvblwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgQXNzZXRPd25lclVwZGF0ZSBmcm9tIFwiLi9Bc3NldE93bmVyVXBkYXRlXCI7XG5pbXBvcnQgQXNzZXRQdWJsaXNoRmVlZCBmcm9tIFwiLi9Bc3NldFB1Ymxpc2hGZWVkXCI7XG5pbXBvcnQgQXNzZXRSZXNvbHZlUHJlZGljdGlvbiBmcm9tIFwiLi9Bc3NldFJlc29sdmVQcmVkaWN0aW9uXCI7XG5pbXBvcnQgQmlkQ29sbGF0ZXJhbE9wZXJhdGlvbiBmcm9tIFwiLi9CaWRDb2xsYXRlcmFsT3BlcmF0aW9uXCI7XG5pbXBvcnQge1Rvb2x0aXAsIEljb24sIFRhYmxlLCBUYWJzLCBDb2xsYXBzZX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuY29uc3Qge1BhbmVsfSA9IENvbGxhcHNlO1xuXG5jbGFzcyBBc3NldEZsYWcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpc1NldCwgbmFtZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWlzU2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gLz47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXNzZXQtZmxhZ1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PXtcImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLlwiICsgbmFtZX0gLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNsYXNzIEFzc2V0UGVybWlzc2lvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2lzU2V0LCBuYW1lfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCFpc1NldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFzc2V0LWZsYWdcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD17XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5cIiArIG5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgQXNzZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNhbGxPcmRlcnM6IFtdLFxuICAgICAgICAgICAgY29sbGF0ZXJhbEJpZHM6IFtdLFxuICAgICAgICAgICAgbWFyZ2luVGFibGVTb3J0OiBcInJhdGlvXCIsXG4gICAgICAgICAgICBjb2xsYXRlcmFsVGFibGVTb3J0OiBcInByaWNlXCIsXG4gICAgICAgICAgICBzb3J0RGlyZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0NvbGxhdGVyYWxCaWRJbkluZm86IGZhbHNlLFxuICAgICAgICAgICAgY3VtdWxhdGl2ZUdyb3VwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2ZUZlZWRUYWI6IFwibWFyZ2luXCIsXG4gICAgICAgICAgICBhY3RpdmVBc3NldFRhYjogXCJpbmZvXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLl9nZXRNYXJnaW5Db2xsYXRlcmFsKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlT25Db2xsYXRlcmFsQmlkKCkge1xuICAgICAgICB0aGlzLl9nZXRNYXJnaW5Db2xsYXRlcmFsKCk7XG4gICAgfVxuXG4gICAgX2dldE1hcmdpbkNvbGxhdGVyYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0LmhhcyhcImJpdGFzc2V0XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSB7XG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmFzc2V0LnRvSlMoKSxcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICApXTogdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQudG9KUygpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFxuICAgICAgICAgICAgICAgIFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0sXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBmZWVkUHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcblxuICAgICAgICAgICAgaWYgKCEhZmVlZFByaWNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1jciA9IHRoaXMucHJvcHMuYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50X2ZlZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9jYWxsX29yZGVyc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjYWxsX29yZGVycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbGxPcmRlcnMgPSBjYWxsX29yZGVycy5tYXAoYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2FsbE9yZGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtY3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjYWxsT3JkZXJzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9jb2xsYXRlcmFsX2JpZHNcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihjb2xsX29yZGVycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWxCaWRzID0gY29sbF9vcmRlcnMubWFwKGMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbGxhdGVyYWxCaWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbGxhdGVyYWxCaWRzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0X2NvbGxhdGVyYWxfYmlkcyBFcnJvcjogXCIsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHtcbiAgICAgICAgICAgIFt0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXTogdGhpcy5wcm9wcy5hc3NldC50b0pTKCksXG4gICAgICAgICAgICBbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC50b0pTKClcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFxuICAgICAgICAgICAgW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGxldCBzcXIgPSB0aGlzLnByb3BzLmFzc2V0LmdldEluKFtcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICBcIm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGxldCBmZWVkUHJpY2VSYXcgPSBhc3NldFV0aWxzLmV4dHJhY3RSYXdGZWVkUHJpY2UodGhpcy5wcm9wcy5hc3NldCk7XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaGFzIGJlZW4gbm8gZmVlZCBwcmljZSwgc2V0dGxlUHJpY2UgaGFzIDAgYW1vdW50XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGZlZWRQcmljZVJhdy5nZXRJbihbXCJiYXNlXCIsIFwiYW1vdW50XCJdKSA9PSAwICYmXG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcuZ2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0pID09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmZWVkUHJpY2U7XG5cbiAgICAgICAgLyogUHJlZGljdGlvbiBtYXJrZXRzIGRvbid0IG5lZWQgZmVlZHMgZm9yIHNob3J0aW5nLCBzbyB0aGUgc2V0dGxlbWVudCBwcmljZSBjYW4gYmUgc2V0IHRvIDE6MSAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc1ByZWRpY3Rpb25NYXJrZXQgJiZcbiAgICAgICAgICAgIGZlZWRQcmljZVJhdy5nZXRJbihbXCJiYXNlXCIsIFwiYXNzZXRfaWRcIl0pID09PVxuICAgICAgICAgICAgICAgIGZlZWRQcmljZVJhdy5nZXRJbihbXCJxdW90ZVwiLCBcImFzc2V0X2lkXCJdKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICghYXNzZXRzW3RoaXMucHJvcHMuYmFja2luZ0Fzc2V0LmdldChcImlkXCIpXSkge1xuICAgICAgICAgICAgICAgIGFzc2V0c1t0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogdGhpcy5wcm9wcy5hc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmVlZFByaWNlUmF3ID0gZmVlZFByaWNlUmF3LnNldEluKFtcImJhc2VcIiwgXCJhbW91bnRcIl0sIDEpO1xuICAgICAgICAgICAgZmVlZFByaWNlUmF3ID0gZmVlZFByaWNlUmF3LnNldEluKFxuICAgICAgICAgICAgICAgIFtcImJhc2VcIiwgXCJhc3NldF9pZFwiXSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZlZWRQcmljZVJhdyA9IGZlZWRQcmljZVJhdy5zZXRJbihbXCJxdW90ZVwiLCBcImFtb3VudFwiXSwgMSk7XG4gICAgICAgICAgICBmZWVkUHJpY2VSYXcgPSBmZWVkUHJpY2VSYXcuc2V0SW4oXG4gICAgICAgICAgICAgICAgW1wicXVvdGVcIiwgXCJhc3NldF9pZFwiXSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3FyID0gMTAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhdGNoIEludmFsaWQgU2V0dGxlUHJpY2Ugb2JqZWN0XG4gICAgICAgIGlmIChmZWVkUHJpY2VSYXcudG9KUykge1xuICAgICAgICAgICAgbGV0IHNldHRsZU9iamVjdCA9IGZlZWRQcmljZVJhdy50b0pTKCk7XG4gICAgICAgICAgICBpZiAoIWFzc2V0c1tzZXR0bGVPYmplY3QuYmFzZS5hc3NldF9pZF0pIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZlZWRQcmljZSA9IG5ldyBGZWVkUHJpY2Uoe1xuICAgICAgICAgICAgcHJpY2VPYmplY3Q6IGZlZWRQcmljZVJhdyxcbiAgICAgICAgICAgIG1hcmtldF9iYXNlOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgc3FyLFxuICAgICAgICAgICAgYXNzZXRzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmZWVkUHJpY2U7XG4gICAgfVxuXG4gICAgX3RvZ2dsZUN1bXVsYXRpdmVHcm91cGluZygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdW11bGF0aXZlR3JvdXBpbmc6ICF0aGlzLnN0YXRlLmN1bXVsYXRpdmVHcm91cGluZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfYXNzZXRUeXBlKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBcImJpdGFzc2V0XCIgaW4gYXNzZXRcbiAgICAgICAgICAgID8gYXNzZXQuYml0YXNzZXQuaXNfcHJlZGljdGlvbl9tYXJrZXRcbiAgICAgICAgICAgICAgICA/IFwiUHJlZGljdGlvblwiXG4gICAgICAgICAgICAgICAgOiBcIlNtYXJ0XCJcbiAgICAgICAgICAgIDogXCJTaW1wbGVcIjtcbiAgICB9XG5cbiAgICBmb3JtYXR0ZWRQcmljZShcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGhpZGVfc3ltYm9scyA9IGZhbHNlLFxuICAgICAgICBoaWRlX3ZhbHVlID0gZmFsc2UsXG4gICAgICAgIGZhY3RvciA9IDAsXG4gICAgICAgIG5lZ2F0aXZlX2ludmVydCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJpY2UgPT0gXCJudW1iZXJcIiAmJiBpc05hTihwcmljZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmFzZSA9IHByaWNlLmJhc2U7XG4gICAgICAgIHZhciBxdW90ZSA9IHByaWNlLnF1b3RlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2Jhc2UuYW1vdW50fVxuICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2Jhc2UuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtxdW90ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgIGhpZGVfdmFsdWU9e2hpZGVfdmFsdWV9XG4gICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzPXtoaWRlX3N5bWJvbHN9XG4gICAgICAgICAgICAgICAgZmFjdG9yPXtmYWN0b3J9XG4gICAgICAgICAgICAgICAgbmVnYXRpdmVfaW52ZXJ0PXtuZWdhdGl2ZV9pbnZlcnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckZsYWdJbmRpY2F0b3JzKGZsYWdzLCBuYW1lcykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bmFtZXMubWFwKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0RmxhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGZsYWdfJHtuYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NldD17ZmxhZ3NbbmFtZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyUGVybWlzc2lvbkluZGljYXRvcnMocGVybWlzc2lvbnMsIG5hbWVzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtuYW1lcy5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRQZXJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcGVybV8ke25hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2V0PXtwZXJtaXNzaW9uc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJBdXRob3JpdHlMaXN0KGF1dGhvcml0aWVzKSB7XG4gICAgICAgIHJldHVybiBhdXRob3JpdGllcy5tYXAoZnVuY3Rpb24oYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YXV0aG9yaXR5fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2F1dGhvcml0eX0gLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWFya2V0TGlzdChhc3NldCwgbWFya2V0cykge1xuICAgICAgICB2YXIgc3ltYm9sID0gYXNzZXQuc3ltYm9sO1xuICAgICAgICByZXR1cm4gbWFya2V0cy5tYXAoXG4gICAgICAgICAgICBmdW5jdGlvbihtYXJrZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFya2V0ID09IHN5bWJvbCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldElEID0gbWFya2V0ICsgXCJfXCIgKyBzeW1ib2w7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtldE5hbWUgPSBtYXJrZXQgKyBcIi9cIiArIHN5bWJvbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e21hcmtldElEfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke21hcmtldElEfWB9PnttYXJrZXROYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckFib3V0Qm94KGFzc2V0LCBvcmlnaW5hbEFzc2V0KSB7XG4gICAgICAgIHZhciBpc3N1ZXIgPSBDaGFpblN0b3JlLmdldE9iamVjdChhc3NldC5pc3N1ZXIsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHZhciBpc3N1ZXJOYW1lID0gaXNzdWVyID8gaXNzdWVyLmdldChcIm5hbWVcIikgOiBcIlwiO1xuXG4gICAgICAgIC8vIEFkZCA8YSB0byBhbnkgbGlua3MgaW5jbHVkZWQgaW4gdGhlIGRlc2NyaXB0aW9uXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGFzc2V0VXRpbHMucGFyc2VEZXNjcmlwdGlvbihcbiAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRlc2MgPSBkZXNjcmlwdGlvbi5tYWluO1xuICAgICAgICBsZXQgc2hvcnRfbmFtZSA9IGRlc2NyaXB0aW9uLnNob3J0X25hbWUgPyBkZXNjcmlwdGlvbi5zaG9ydF9uYW1lIDogbnVsbDtcblxuICAgICAgICBsZXQgdXJsVGVzdCA9IC8oaHR0cD8pOlxcL1xcLyh3d3dcXC4pP1thLXowLTlcXC46XS4qPyg/PVxccykvZztcblxuICAgICAgICAvLyBSZWdleHAgbmVlZHMgYSB3aGl0ZXNwYWNlIGFmdGVyIGEgdXJsLCBzbyBhZGQgb25lIHRvIG1ha2Ugc3VyZVxuICAgICAgICBkZXNjID0gZGVzYyAmJiBkZXNjLmxlbmd0aCA+IDAgPyBkZXNjICsgXCIgXCIgOiBkZXNjO1xuICAgICAgICBsZXQgdXJscyA9IGRlc2MubWF0Y2godXJsVGVzdCk7XG5cbiAgICAgICAgLy8gQWRkIG1hcmtldCBsaW5rXG4gICAgICAgIGNvbnN0IGNvcmVfYXNzZXQgPSB0aGlzLnByb3BzLmNvcmVBc3NldDtcbiAgICAgICAgY29uc3QgY29yZV9hc3NldF9zeW1ib2wgPSBjb3JlX2Fzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgbGV0IHByZWZlcnJlZE1hcmtldCA9IGRlc2NyaXB0aW9uLm1hcmtldFxuICAgICAgICAgICAgPyBkZXNjcmlwdGlvbi5tYXJrZXRcbiAgICAgICAgICAgIDogY29yZV9hc3NldF9zeW1ib2w7XG4gICAgICAgIGlmIChhc3NldC5iaXRhc3NldCkge1xuICAgICAgICAgICAgcHJlZmVycmVkTWFya2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcbiAgICAgICAgICAgICAgICBhc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoISFwcmVmZXJyZWRNYXJrZXQgJiYgcHJlZmVycmVkTWFya2V0LmdldCkge1xuICAgICAgICAgICAgICAgIHByZWZlcnJlZE1hcmtldCA9IHByZWZlcnJlZE1hcmtldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZWZlcnJlZE1hcmtldCA9IGNvcmVfYXNzZXRfc3ltYm9sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhc3NldC5zeW1ib2wgPT09IGNvcmVfYXNzZXRfc3ltYm9sKSBwcmVmZXJyZWRNYXJrZXQgPSBcIlVTRFwiO1xuICAgICAgICBpZiAodXJscyAmJiB1cmxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdXJscy5mb3JFYWNoKHVybCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1hcmtkb3duVXJsID0gYDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZXh0ZXJuYWwtbGlua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPVwiJHt1cmx9XCI+JHt1cmx9PC9hPmA7XG4gICAgICAgICAgICAgICAgZGVzYyA9IGRlc2MucmVwbGFjZSh1cmwsIG1hcmtkb3duVXJsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHtuYW1lLCBwcmVmaXh9ID0gdXRpbHMucmVwbGFjZU5hbWUob3JpZ2luYWxBc3NldCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7b3ZlcmZsb3c6IFwidmlzaWJsZVwifX0+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtzaG9ydF9uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5SaWdodDogMTV9fT57c2hvcnRfbmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG1hcmtldC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7YXNzZXQuc3ltYm9sfV8ke3ByZWZlcnJlZE1hcmtldH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8SGVscENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgcGF0aD17XCJhc3NldHMvXCIgKyBhc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgICAgIGFsdF9wYXRoPVwiYXNzZXRzL0Fzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbj1cInN1bW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w9eyhwcmVmaXggfHwgXCJcIikgKyBuYW1lfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY31cbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyPXtpc3N1ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICBoaWRlX2lzc3Vlcj1cInRydWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJTdW1tYXJ5KGFzc2V0KSB7XG4gICAgICAgIC8vIFRPRE86IGNvbmZpZGVudGlhbF9zdXBwbHk6IDAgVVNEICAgW0lGIE5PVCBaRVJPIE9SIE5PVCBESVNBQkxFIENPTkZJREVOVElBTF1cbiAgICAgICAgbGV0IGR5bmFtaWMgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoYXNzZXQuZHluYW1pY19hc3NldF9kYXRhX2lkKTtcbiAgICAgICAgaWYgKGR5bmFtaWMpIGR5bmFtaWMgPSBkeW5hbWljLnRvSlMoKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhc3NldC5vcHRpb25zO1xuXG4gICAgICAgIGxldCBmbGFnQm9vbGVhbnMgPSBhc3NldFV0aWxzLmdldEZsYWdCb29sZWFucyhcbiAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuZmxhZ3MsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LmhhcyhcImJpdGFzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgYml0TmFtZXMgPSBPYmplY3Qua2V5cyhmbGFnQm9vbGVhbnMpO1xuXG4gICAgICAgIGxldCBpc1ByZWRpY3Rpb24gPVxuICAgICAgICAgICAgXCJiaXRhc3NldFwiIGluIGFzc2V0ICYmIGFzc2V0LmJpdGFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0O1xuICAgICAgICBsZXQgcHJlZGljdGlvblJvd3MgPSBudWxsO1xuICAgICAgICBpZiAoaXNQcmVkaWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBhc3NldFV0aWxzLnBhcnNlRGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByZWRpY3Rpb25Sb3dzID0gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnRvb2x0aXBfcHJlZGljdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC5wcmVkaWN0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnRvb2x0aXBfcHJlZGljdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24uY29uZGl0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC50b29sdGlwX3Jlc29sdXRpb25fZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC5yZXNvbHV0aW9uX2RhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9yZXNvbHV0aW9uX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uLmV4cGlyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRTdXBwbHkgPSBkeW5hbWljID8gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5jdXJyZW50X3N1cHBseVwiIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljLmN1cnJlbnRfc3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICB2YXIgc3RlYWx0aFN1cHBseSA9IGR5bmFtaWMgPyAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zdW1tYXJ5LnN0ZWFsdGhfc3VwcGx5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWMuY29uZmlkZW50aWFsX3N1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgdmFyIG1hcmtldEZlZSA9IGZsYWdCb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdID8gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5tYXJrZXRfZmVlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge29wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50IC8gMTAwLjB9ICUgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIC8vIG9wdGlvbnMubWF4X21hcmtldF9mZWUgaW5pdGlhbGx5IGEgc3RyaW5nXG4gICAgICAgIHZhciBtYXJrZXRGZWVSZWZlcnJhbFJld2FyZCA9XG4gICAgICAgICAgICBmbGFnQm9vbGVhbnNbXCJjaGFyZ2VfbWFya2V0X2ZlZVwiXSAmJlxuICAgICAgICAgICAgb3B0aW9ucy5leHRlbnNpb25zICYmXG4gICAgICAgICAgICBvcHRpb25zLmV4dGVuc2lvbnMucmV3YXJkX3BlcmNlbnQgPj0gMCA/IChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5yZXdhcmRfcGVyY2VudF90b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkubWFya2V0X2ZlZV9yZWZlcnJhbF9yZXdhcmRfcGVyY2VudFwiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIiB0aGVtZT1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ge29wdGlvbnMuZXh0ZW5zaW9ucy5yZXdhcmRfcGVyY2VudCAvIDEwMC4wfSAlIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0LWNhcmQgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17YXNzZXQuc3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBrZXktdmFsdWUtdGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc3VtbWFyeS5hc3NldF90eXBlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ge3RoaXMuX2Fzc2V0VHlwZShhc3NldCl9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzUHJlZGljdGlvbiAmJiBwcmVkaWN0aW9uUm93c31cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnN1bW1hcnkuaXNzdWVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2Fzc2V0Lmlzc3Vlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5wcmVjaXNpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7YXNzZXQucHJlY2lzaW9ufSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthc3NldC5iaXRhc3NldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5iYWNraW5nX2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb0Fzc2V0QnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuYml0YXNzZXQub3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNob3J0X2JhY2tpbmdfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50U3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAge3N0ZWFsdGhTdXBwbHl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0RmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldEZlZVJlZmVycmFsUmV3YXJkfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRmxhZ0luZGljYXRvcnMoZmxhZ0Jvb2xlYW5zLCBiaXROYW1lcyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJQcmljZUZlZWQoYXNzZXQpIHtcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XG4gICAgICAgIGlmICghKFwiY3VycmVudF9mZWVkXCIgaW4gYml0QXNzZXQpKSByZXR1cm4gPGRpdiBoZWFkZXI9e3RpdGxlfSAvPjtcbiAgICAgICAgdmFyIGN1cnJlbnRGZWVkID0gYml0QXNzZXQuY3VycmVudF9mZWVkO1xuXG4gICAgICAgIHZhciBmZWVkUHJpY2UgPSB0aGlzLmZvcm1hdHRlZFByaWNlKFxuICAgICAgICAgICAgYXNzZXRVdGlscy5leHRyYWN0UmF3RmVlZFByaWNlKGFzc2V0KVxuICAgICAgICApO1xuXG4gICAgICAgIHZhciB0aXRsZSA9IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC50aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj57ZmVlZFByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWwgaGVhZGVyPXt0aXRsZX0+XG4gICAgICAgICAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLmV4dGVybmFsX2ZlZWRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmZWVkUHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLmZlZWRfbGlmZXRpbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Yml0QXNzZXQub3B0aW9ucy5mZWVkX2xpZmV0aW1lX3NlYyAvIDYwIC8gNjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1pbl9mZWVkc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2JpdEFzc2V0Lm9wdGlvbnMubWluaW11bV9mZWVkc308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50RmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRGZWVkLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbyAvIDEwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2FuYWx5emVCaWRzKHNldHRsZW1lbnRfZnVuZF9kZWJ0KSB7XG4gICAgICAgIC8vIENvbnZlcnQgc3VwcGx5IHRvIGNhbGN1bGFibGUgdmFsdWVzXG4gICAgICAgIGxldCBjdXJyZW50X3N1cHBseV92YWx1ZSA9IHNldHRsZW1lbnRfZnVuZF9kZWJ0O1xuXG4gICAgICAgIGxldCBiaWRzX2NvbGxhdGVyYWxfdmFsdWUgPSAwO1xuICAgICAgICBsZXQgYmlkc19kZWJ0X3ZhbHVlID0gMDtcblxuICAgICAgICBsZXQgc29ydGVkX2JpZHMgPSB0aGlzLnN0YXRlLmNvbGxhdGVyYWxCaWRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiLmJpZC50b1JlYWwoKSAtIGEuYmlkLnRvUmVhbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb3J0ZWRfYmlkcy5mb3JFYWNoKGJpZCA9PiB7XG4gICAgICAgICAgICBsZXQgY29sbGF0ZXJhbCA9IGJpZC5jb2xsYXRlcmFsO1xuICAgICAgICAgICAgbGV0IGRlYnQgPSBiaWQuZGVidDtcbiAgICAgICAgICAgIGlmIChiaWRzX2RlYnRfdmFsdWUgPCBjdXJyZW50X3N1cHBseV92YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChiaWRzX2RlYnRfdmFsdWUgKyBkZWJ0ID49IGN1cnJlbnRfc3VwcGx5X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnQgPSBjdXJyZW50X3N1cHBseV92YWx1ZSAtIGJpZHNfZGVidF92YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbCA9IChkZWJ0IC8gYmlkLmRlYnQpICogY29sbGF0ZXJhbDtcbiAgICAgICAgICAgICAgICAgICAgYmlkLmNvbnNpZGVyZWRJZlJldml2ZWQgPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJpZC5jb25zaWRlcmVkSWZSZXZpdmVkID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmlkc19jb2xsYXRlcmFsX3ZhbHVlID0gYmlkc19jb2xsYXRlcmFsX3ZhbHVlICsgY29sbGF0ZXJhbDtcbiAgICAgICAgICAgICAgICBiaWRzX2RlYnRfdmFsdWUgPSBiaWRzX2RlYnRfdmFsdWUgKyBkZWJ0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaWQuY29uc2lkZXJlZElmUmV2aXZlZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xsYXRlcmFsOiBiaWRzX2NvbGxhdGVyYWxfdmFsdWUsXG4gICAgICAgICAgICBkZWJ0OiBiaWRzX2RlYnRfdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXJTZXR0bGVtZW50KGFzc2V0KSB7XG4gICAgICAgIHZhciBiaXRBc3NldCA9IGFzc2V0LmJpdGFzc2V0O1xuICAgICAgICBpZiAoIShcImN1cnJlbnRfZmVlZFwiIGluIGJpdEFzc2V0KSkgcmV0dXJuIDxkaXYgaGVhZGVyPXt0aXRsZX0gLz47XG5cbiAgICAgICAgbGV0IGR5bmFtaWMgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoYXNzZXQuZHluYW1pY19hc3NldF9kYXRhX2lkKTtcbiAgICAgICAgaWYgKGR5bmFtaWMpIGR5bmFtaWMgPSBkeW5hbWljLnRvSlMoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRTdXBwbHkgPSBkeW5hbWljID8gZHluYW1pYy5jdXJyZW50X3N1cHBseSA6IDA7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRGZWVkID0gYml0QXNzZXQuY3VycmVudF9mZWVkO1xuICAgICAgICB2YXIgaXNHbG9iYWxTZXR0bGUgPSBhc3NldC5iaXRhc3NldC5zZXR0bGVtZW50X2Z1bmQgPiAwID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGxldCBzZXR0bGVtZW50X2Z1bmRfY29sbGF0ZXJhbF9yYXRpbyA9IG51bGw7XG4gICAgICAgIGxldCB0b3RhbF9jb2xsYXRlcmFsX3JhdGlvID0gbnVsbDtcbiAgICAgICAgbGV0IHJldml2ZV9wcmljZV93aXRoX2JpZHMgPSBudWxsO1xuXG4gICAgICAgIGlmIChpc0dsb2JhbFNldHRsZSkge1xuICAgICAgICAgICAgLyoqKlxuICAgICAgICAgICAgICogR2xvYmFsIFNldHRsZWQgQXNzZXRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBzZXR0bGVtZW50RnVuZCA9IGJpdEFzc2V0LnNldHRsZW1lbnRfZnVuZDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbiBnbG9iYWxseSBzZXR0bGVkIGFzc2V0cyB0aGUgZm9yY2Ugc2V0dGxlbWVudCBvZmZzZXQgaXMgMFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnRQcmljZSA9IHRoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICAgICAgYml0QXNzZXQuc2V0dGxlbWVudF9wcmljZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhciByZXZpdmVQcmljZSA9IHRoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICAgICAgYml0QXNzZXQuc2V0dGxlbWVudF9wcmljZSxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMCxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSB7XG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIildOiB0aGlzLnByb3BzLmFzc2V0LnRvSlMoKSxcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQuZ2V0KFxuICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICApXTogdGhpcy5wcm9wcy5iYWNraW5nQXNzZXQudG9KUygpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHN1cHBseSB0byBjYWxjdWxhYmxlIHZhbHVlc1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRfc3VwcGx5X3ZhbHVlID0gY3VycmVudFN1cHBseTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50X2NvbGxhdGVyYWxfdmFsdWUgPSBiaXRBc3NldC5zZXR0bGVtZW50X2Z1bmQ7XG5cbiAgICAgICAgICAgIGxldCBiaWRzID0gdGhpcy5fYW5hbHl6ZUJpZHMoY3VycmVudF9zdXBwbHlfdmFsdWUpO1xuXG4gICAgICAgICAgICByZXZpdmVfcHJpY2Vfd2l0aF9iaWRzID0gKFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17Yml0QXNzZXQuc2V0dGxlbWVudF9mdW5kIC8gMSArIGJpZHMuY29sbGF0ZXJhbH0gLy8gLzEgaXMgaW1wbGljaXQgdHlwZSBjb252ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2Fzc2V0c1tiaXRBc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRdLmlkfVxuICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e2JpZHMuZGVidH1cbiAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICBoaWRlX3ZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgZmFjdG9yPXtjdXJyZW50RmVlZC5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMH1cbiAgICAgICAgICAgICAgICAgICAgbmVnYXRpdmVfaW52ZXJ0PXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXJyZW50X3N1cHBseV92YWx1ZSA9XG4gICAgICAgICAgICAgICAgY3VycmVudF9zdXBwbHlfdmFsdWUgLyBNYXRoLnBvdygxMCwgYXNzZXQucHJlY2lzaW9uKTtcbiAgICAgICAgICAgIGN1cnJlbnRfY29sbGF0ZXJhbF92YWx1ZSA9XG4gICAgICAgICAgICAgICAgY3VycmVudF9jb2xsYXRlcmFsX3ZhbHVlIC9cbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhcbiAgICAgICAgICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0c1tiaXRBc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRdLnByZWNpc2lvblxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBiaWRzX2NvbGxhdGVyYWwgPVxuICAgICAgICAgICAgICAgIGJpZHMuY29sbGF0ZXJhbCAvXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coXG4gICAgICAgICAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgICAgICAgICBhc3NldHNbYml0QXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0XS5wcmVjaXNpb25cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgZmVlZFByaWNlID0gdGhpcy5fZ2V0RmVlZFByaWNlKCk7XG4gICAgICAgICAgICBpZiAoZmVlZFByaWNlKSB7XG4gICAgICAgICAgICAgICAgc2V0dGxlbWVudF9mdW5kX2NvbGxhdGVyYWxfcmF0aW8gPVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2NvbGxhdGVyYWxfdmFsdWUgL1xuICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UudG9SZWFsKCkgL1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3N1cHBseV92YWx1ZTtcblxuICAgICAgICAgICAgICAgIHRvdGFsX2NvbGxhdGVyYWxfcmF0aW8gPVxuICAgICAgICAgICAgICAgICAgICAoY3VycmVudF9jb2xsYXRlcmFsX3ZhbHVlICsgYmlkc19jb2xsYXRlcmFsKSAvXG4gICAgICAgICAgICAgICAgICAgIGZlZWRQcmljZS50b1JlYWwoKSAvXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfc3VwcGx5X3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLyoqKlxuICAgICAgICAgICAgICogTm9uIEdsb2JhbCBTZXR0bGVtZW50IEFzc2V0c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgZ2xvYmFsU2V0dGxlbWVudFByaWNlID0gdGhpcy5nZXRHbG9iYWxTZXR0bGVtZW50UHJpY2UoKTtcbiAgICAgICAgICAgIHZhciBnbG9iYWxTZXR0bGVtZW50VHJpZ2dlclByaWNlID0gdGhpcy5nZXRHbG9iYWxTZXR0bGVtZW50UHJpY2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvIC8gMTAwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2V0dGxlZCA9IGJpdEFzc2V0LmZvcmNlX3NldHRsZWRfdm9sdW1lO1xuICAgICAgICAgICAgdmFyIHNldHRsZW1lbnRPZmZzZXQgPVxuICAgICAgICAgICAgICAgIGJpdEFzc2V0Lm9wdGlvbnMuZm9yY2Vfc2V0dGxlbWVudF9vZmZzZXRfcGVyY2VudDtcbiAgICAgICAgICAgIHZhciBzZXR0bGVtZW50RGVsYXkgPSBiaXRBc3NldC5vcHRpb25zLmZvcmNlX3NldHRsZW1lbnRfZGVsYXlfc2VjO1xuICAgICAgICAgICAgdmFyIG1heFNldHRsZW1lbnRWb2x1bWUgPVxuICAgICAgICAgICAgICAgIGJpdEFzc2V0Lm9wdGlvbnMubWF4aW11bV9mb3JjZV9zZXR0bGVtZW50X3ZvbHVtZTtcblxuICAgICAgICAgICAgdmFyIG1zc3BQcmljZSA9IHRoaXMuZm9ybWF0dGVkUHJpY2UoXG4gICAgICAgICAgICAgICAgYXNzZXRVdGlscy5leHRyYWN0UmF3RmVlZFByaWNlKGFzc2V0KSxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50RmVlZC5tYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8gLyAxMDAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIHNldHRsZVByaWNlID0gdGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICBhc3NldFV0aWxzLmV4dHJhY3RSYXdGZWVkUHJpY2UoYXNzZXQpLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIDEgLSBzZXR0bGVtZW50T2Zmc2V0IC8gMTAwMDBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGl0bGUgPSAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQudGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtpc0dsb2JhbFNldHRsZSA/IHNldHRsZW1lbnRQcmljZSA6IHNldHRsZVByaWNlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWwgaGVhZGVyPXt0aXRsZX0+XG4gICAgICAgICAgICAgICAge2lzR2xvYmFsU2V0dGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5nc19kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aXNHbG9iYWxTZXR0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfcmV2aXZlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyhcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3Nfc2VlX2FjdGlvbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgLCAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3Nfb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29sbGF0ZXJhbEJpZEluSW5mbzogIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvd0NvbGxhdGVyYWxCaWRJbkluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX3BsYWNlX2JpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSBrZXktdmFsdWUtdGFibGUgdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMS4ycmVtXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2lzR2xvYmFsU2V0dGxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5zZXR0bGVtZW50X3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzZXR0bGVtZW50UHJpY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5zZXR0bGVtZW50X2Z1bmRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXRBc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtzZXR0bGVtZW50RnVuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuc2V0dGxlbWVudF9mdW5kc19jb2xsYXRlcmFsX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRsZW1lbnRfZnVuZF9jb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXR0bGVtZW50X2Z1bmRfY29sbGF0ZXJhbF9yYXRpby50b0ZpeGVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfcmV2ZXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX2F1dG9fcmV2aXZlX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jldml2ZVByaWNlfSAvIHtyZXZpdmVfcHJpY2Vfd2l0aF9iaWRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuZ3NfY29sbGF0ZXJhbF92YWx1YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1jcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGZWVkLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsX2NvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRvdGFsX2NvbGxhdGVyYWxfcmF0aW8udG9GaXhlZCg2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bXNzcFByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQuZ2xvYmFsX3NldHRsZW1lbnRfdHJpZ2dlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxTZXR0bGVtZW50VHJpZ2dlclByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBnbG9iYWxTZXR0bGVtZW50VHJpZ2dlclByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5nbG9iYWxfc2V0dGxlbWVudF9wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxTZXR0bGVtZW50UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGdsb2JhbFNldHRsZW1lbnRQcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuc2V0dGxlbWVudC5mb3JjZV9zZXR0bGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyAoe3NldHRsZW1lbnRPZmZzZXQgLyAxMDB9JXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQub2Zmc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntzZXR0bGVQcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmRlbGF5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFRpbWUgdGltZT17c2V0dGxlbWVudERlbGF5fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50Lm1heF9zZXR0bGVfdm9sdW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXhTZXR0bGVtZW50Vm9sdW1lIC8gMTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdXBwbHkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF4U2V0dGxlbWVudFZvbHVtZSAvIDEwMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnNldHRsZW1lbnQuY3VycmVudF9zZXR0bGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17Y3VycmVudFNldHRsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LnNldHRsZV9yZW1haW5pbmdfdm9sdW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTZXR0bGVkID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3VycmVudFNldHRsZWQgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRTdXBwbHkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXhTZXR0bGVtZW50Vm9sdW1lIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDApKSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlUG9vbChhc3NldCkge1xuICAgICAgICBsZXQgZHluYW1pYyA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChhc3NldC5keW5hbWljX2Fzc2V0X2RhdGFfaWQpO1xuICAgICAgICBpZiAoZHluYW1pYykgZHluYW1pYyA9IGR5bmFtaWMudG9KUygpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFzc2V0Lm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGNvcmUgPSB0aGlzLnByb3BzLmNvcmVBc3NldDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLnRpdGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2R5bmFtaWMuZmVlX3Bvb2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5wb29sX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdW5zYWZlXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29yZT17Y29yZS5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUga2V5LXZhbHVlLXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIxLjJyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLmNvcmVfZXhjaGFuZ2VfcmF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmZvcm1hdHRlZFByaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5wb29sX2JhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHluYW1pYyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9XCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZHluYW1pYy5mZWVfcG9vbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZV9wb29sLnVuY2xhaW1lZF9pc3N1ZXJfaW5jb21lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkeW5hbWljLmFjY3VtdWxhdGVkX2ZlZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJBc3NldE93bmVyVXBkYXRlKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWxcbiAgICAgICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy51cGRhdGVfb3duZXJcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMudXBkYXRlX293bmVyX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEFzc2V0T3duZXJVcGRhdGVcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3duZXI9e2Fzc2V0Lmlzc3Vlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJGZWVkUHVibGlzaChhc3NldCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24udHJ4VHlwZXMuYXNzZXRfcHVibGlzaF9mZWVkXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmZlZWRfcHJvZHVjZXJfdGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QXNzZXRQdWJsaXNoRmVlZFxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPd25lcj17YXNzZXQuaXNzdWVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckNvbGxhdGVyYWxCaWQoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbFxuICAgICAgICAgICAgICAgIGhlYWRlcj17PFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbC5iaWRcIiAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbC5iaWRfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5zeW1ib2x9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5zZXR0bGVtZW50LmdzX2luY2x1ZGVkX29uX3Jldml2YWxcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbC5yZW1vdmVfYmlkXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPEJpZENvbGxhdGVyYWxPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgY29yZT17YXNzZXQuYml0YXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICBmdW5kZXJBY2NvdW50TmFtZT17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e3RoaXMudXBkYXRlT25Db2xsYXRlcmFsQmlkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVCYWxhbmNlXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlUG9vbEZ1bmRpbmcoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbFxuICAgICAgICAgICAgICAgIGhlYWRlcj17PFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuZnVuZFwiIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5mdW5kX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuc3ltYm9sfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZlZVBvb2xPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVCYWxhbmNlXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlUG9vbENsYWltaW5nKGFzc2V0KSB7XG4gICAgICAgIGxldCBkeW5hbWljID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KGFzc2V0LmR5bmFtaWNfYXNzZXRfZGF0YV9pZCk7XG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWxcbiAgICAgICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5mZWVfcG9vbC5jbGFpbV9iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZlZVBvb2xPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWM9e2R5bmFtaWN9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjbGFpbVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyRmVlc0NsYWltaW5nKGFzc2V0KSB7XG4gICAgICAgIGxldCBkeW5hbWljID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KGFzc2V0LmR5bmFtaWNfYXNzZXRfZGF0YV9pZCk7XG4gICAgICAgIGlmIChkeW5hbWljKSBkeW5hbWljID0gZHluYW1pYy50b0pTKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWxcbiAgICAgICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5hc3NldF9jbGFpbV9mZWVzXCIgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZlZVBvb2xPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0LnN5bWJvbH1cbiAgICAgICAgICAgICAgICAgICAgZHluYW1pYz17ZHluYW1pY31cbiAgICAgICAgICAgICAgICAgICAgZnVuZGVyQWNjb3VudE5hbWU9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjbGFpbV9mZWVzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBCbGFja2xpc3QgQXV0aG9yaXRpZXM6IDxBY2NvdW50IGxpc3QgbGlrZSBWb3Rpbmc+XG4gICAgLy8gVE9ETzogQmxhY2tsaXN0IE1hcmtldDogQmFzZS9NYXJrZXQsIEJhc2UvTWFya2V0XG4gICAgcmVuZGVyUGVybWlzc2lvbnMoYXNzZXQpIHtcbiAgICAgICAgLy92YXIgZHluYW1pYyA9IGFzc2V0LmR5bmFtaWM7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhc3NldC5vcHRpb25zO1xuXG4gICAgICAgIGxldCBwZXJtaXNzaW9uQm9vbGVhbnMgPSBhc3NldFV0aWxzLmdldEZsYWdCb29sZWFucyhcbiAgICAgICAgICAgIGFzc2V0Lm9wdGlvbnMuaXNzdWVyX3Blcm1pc3Npb25zLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldC5oYXMoXCJiaXRhc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGJpdE5hbWVzID0gT2JqZWN0LmtleXMocGVybWlzc2lvbkJvb2xlYW5zKTtcblxuICAgICAgICAvLyBvcHRpb25zLmJsYWNrbGlzdF9hdXRob3JpdGllcyA9IFtcIjEuMi4zXCIsIFwiMS4yLjRcIl07XG4gICAgICAgIC8vIG9wdGlvbnMud2hpdGVsaXN0X2F1dGhvcml0aWVzID0gW1wiMS4yLjFcIiwgXCIxLjIuMlwiXTtcbiAgICAgICAgLy8gb3B0aW9ucy5ibGFja2xpc3RfbWFya2V0cyA9IFtcIkpQWVwiLCBcIlJVQlwiXTtcbiAgICAgICAgLy8gb3B0aW9ucy53aGl0ZWxpc3RfbWFya2V0cyA9IFtcIlVTRFwiLCBcIkVVUlwiLCBcIkdPTERcIl07XG5cbiAgICAgICAgLy8gb3B0aW9ucy5tYXhfbWFya2V0X2ZlZSBpbml0aWFsbHkgYSBzdHJpbmdcbiAgICAgICAgdmFyIG1heE1hcmtldEZlZSA9IHBlcm1pc3Npb25Cb29sZWFuc1tcImNoYXJnZV9tYXJrZXRfZmVlXCJdID8gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMubWF4X21hcmtldF9mZWVcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17K29wdGlvbnMubWF4X21hcmtldF9mZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIC8vIG9wdGlvbnMubWF4X3N1cHBseSBpbml0aWFsbHkgYSBzdHJpbmdcbiAgICAgICAgdmFyIG1heFN1cHBseSA9IChcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLm1heF9zdXBwbHlcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17K29wdGlvbnMubWF4X3N1cHBseX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcblxuICAgICAgICB2YXIgd2hpdGVMaXN0cyA9IHBlcm1pc3Npb25Cb29sZWFuc1tcIndoaXRlX2xpc3RcIl0gPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIHshIW9wdGlvbnMuYmxhY2tsaXN0X2F1dGhvcml0aWVzICYmXG4gICAgICAgICAgICAgICAgICAgICEhb3B0aW9ucy5ibGFja2xpc3RfYXV0aG9yaXRpZXMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wZXJtaXNzaW9ucy5ibGFja2xpc3RfYXV0aG9yaXRpZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXV0aG9yaXR5TGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ibGFja2xpc3RfYXV0aG9yaXRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ISFvcHRpb25zLmJsYWNrbGlzdF9tYXJrZXRzICYmXG4gICAgICAgICAgICAgICAgICAgICEhb3B0aW9ucy5ibGFja2xpc3RfbWFya2V0cy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLmJsYWNrbGlzdF9tYXJrZXRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1hcmtldExpc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmJsYWNrbGlzdF9tYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyEhb3B0aW9ucy53aGl0ZWxpc3RfYXV0aG9yaXRpZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgISFvcHRpb25zLndoaXRlbGlzdF9hdXRob3JpdGllcy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLndoaXRlbGlzdF9hdXRob3JpdGllc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBdXRob3JpdHlMaXN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLndoaXRlbGlzdF9hdXRob3JpdGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshIW9wdGlvbnMud2hpdGVsaXN0X21hcmtldHMgJiZcbiAgICAgICAgICAgICAgICAgICAgISFvcHRpb25zLndoaXRlbGlzdF9tYXJrZXRzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMud2hpdGVsaXN0X21hcmtldHNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTWFya2V0TGlzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2hpdGVsaXN0X21hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICBsZXQgd2hpdGVsaXN0X21hcmtldF9mZWVfc2hhcmluZyA9IGFzc2V0Lm9wdGlvbnMuZXh0ZW5zaW9uc1xuICAgICAgICAgICAgLndoaXRlbGlzdF9tYXJrZXRfZmVlX3NoYXJpbmcgJiYgKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnBlcm1pc3Npb25zLmFjY291bnRzX2luX3doaXRlbGlzdF9tYXJrZXRfZmVlX3NoYXJpbmdcIiAvPlxuICAgICAgICAgICAgICAgIDogJm5ic3A7XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXV0aG9yaXR5TGlzdChcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQub3B0aW9ucy5leHRlbnNpb25zLndoaXRlbGlzdF9tYXJrZXRfZmVlX3NoYXJpbmdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucGVybWlzc2lvbnMudGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGtleS12YWx1ZS10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMS4ycmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21heE1hcmtldEZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWF4U3VwcGx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUGVybWlzc2lvbkluZGljYXRvcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uQm9vbGVhbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXROYW1lc1xuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgICAgICB7d2hpdGVMaXN0c31cbiAgICAgICAgICAgICAgICAgICAge3doaXRlbGlzdF9tYXJrZXRfZmVlX3NoYXJpbmd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIHRoZSBnbG9iYWwgc2V0dGxlbWVudCBwcmljZSBpcyBkZWZpbmVkIGFzIHRoZVxuICAgIC8vIHRoZSBwcmljZSBhdCB3aGljaCB0aGUgbGVhc3QgY29sbGF0ZXJhbGl6ZSBzaG9ydCdzXG4gICAgLy8gY29sbGF0ZXJhbCBubyBsb25nZXIgZW5vdWdoIHRvIGJhY2sgdGhlIGRlYnRcbiAgICAvLyBoZS9zaGUgb3dlcy5cbiAgICBnZXRHbG9iYWxTZXR0bGVtZW50UHJpY2UobXNzciA9IDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNhbGxPcmRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgZ2V0IHRoZSBsZWFzdCBjb2xsYXRlcmFsaXplZCBzaG9ydCBwb3NpdGlvblxuICAgICAgICB2YXIgbGVhc3RDb2xTaG9ydCA9IG51bGw7XG4gICAgICAgIHZhciBsZWFzdENvbFNob3J0UmF0aW8gPSBudWxsO1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5zdGF0ZS5jYWxsT3JkZXJzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGNhbGxfb3JkZXIgPSB0aGlzLnN0YXRlLmNhbGxPcmRlcnNbaV07XG5cbiAgICAgICAgICAgIGlmIChsZWFzdENvbFNob3J0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZWFzdENvbFNob3J0ID0gY2FsbF9vcmRlcjtcbiAgICAgICAgICAgICAgICBsZWFzdENvbFNob3J0UmF0aW8gPSBjYWxsX29yZGVyLmdldFJhdGlvKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhbGxfb3JkZXIuZ2V0UmF0aW8oKSA8IGxlYXN0Q29sU2hvcnRSYXRpbykge1xuICAgICAgICAgICAgICAgIGxlYXN0Q29sU2hvcnRSYXRpbyA9IGNhbGxfb3JkZXIuZ2V0UmF0aW8oKTtcbiAgICAgICAgICAgICAgICBsZWFzdENvbFNob3J0ID0gY2FsbF9vcmRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWFzdENvbFNob3J0ID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvdWxkbid0IGZpbmQgdGhlIGxlYXN0IGNvbHNob3J0P1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzIHByaWNlIHdpbGwgaGFwcGVuIHdoZW4gdGhlIENSIGlzIDEuXG4gICAgICAgIC8vIFRoZSBDUiBpcyAxIGlmIGNvbGxhdGVyYWwgLyAoZGVidCB4IGZlZWRfIHByaWNlKSA9PSAxXG4gICAgICAgIC8vIFJlYXJyYW5naW5nLCB0aGlzIG1lYW5zIHRoYXQgdGhlIENSIGlzIDEgaWZcbiAgICAgICAgLy8gZmVlZF9wcmljZSA9PSBjb2xsYXRlcmFsIC8gZGVidFxuICAgICAgICAvL1xuICAgICAgICAvLyBEZWZhdWx0IGlzIHRvIHJldHVybiB0aGUgZ2xvYmFsIHNldHRsZW1lbnQgcHJpY2VcbiAgICAgICAgLy8gVXNlIG1zc3IgdG8gY2FsY3VsYXRlIGluIHdoZW4gYW4gZXZlbnQgaGFwcGVuc1xuICAgICAgICAvLyBiYXNlZCBvbiBhbiBhc3NldHMgTVNTUlxuXG4gICAgICAgIGxldCBkZWJ0ID0gbGVhc3RDb2xTaG9ydC5kZWJ0ICogbXNzcjtcbiAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSBsZWFzdENvbFNob3J0LmNvbGxhdGVyYWw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxuICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtjb2xsYXRlcmFsfVxuICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2xlYXN0Q29sU2hvcnQuY2FsbF9wcmljZS5iYXNlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17ZGVidH1cbiAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17bGVhc3RDb2xTaG9ydC5jYWxsX3ByaWNlLnF1b3RlLmFzc2V0X2lkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyRmVlZFRhYmxlKGFzc2V0KSB7XG4gICAgICAgIHZhciBiaXRBc3NldCA9IGFzc2V0LmJpdGFzc2V0O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKFwiZmVlZHNcIiBpbiBiaXRBc3NldCkgfHxcbiAgICAgICAgICAgIGJpdEFzc2V0LmZlZWRzLmxlbmd0aCA9PSAwIHx8XG4gICAgICAgICAgICBiaXRBc3NldC5pc19wcmVkaWN0aW9uX21hcmtldCB8fFxuICAgICAgICAgICAgIWJpdEFzc2V0LmZlZWRzLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZlZWRzID0gYml0QXNzZXQuZmVlZHM7XG4gICAgICAgIHZhciBmZWVkX3ByaWNlX2hlYWRlciA9IGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZShmZWVkc1swXVsxXVsxXSk7XG4gICAgICAgIHZhciBjb3JlX2V4Y2hhbmdlX3JhdGVfaGVhZGVyID0gZmVlZHNbMF1bMV1bMV0uY29yZV9leGNoYW5nZV9yYXRlO1xuXG4gICAgICAgIC8vIEZpbHRlciBieSB2YWxpZCBmZWVkIGxpZmV0aW1lLCBTb3J0IGJ5IHB1Ymxpc2hlZCBkYXRlXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IG9sZGVzdFZhbGlkRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgbm93IC0gYXNzZXQuYml0YXNzZXQub3B0aW9ucy5mZWVkX2xpZmV0aW1lX3NlYyAqIDEwMDBcbiAgICAgICAgKTtcbiAgICAgICAgZmVlZHMgPSBmZWVkc1xuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYVsxXVswXSkgPiBvbGRlc3RWYWxpZERhdGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24oZmVlZDEsIGZlZWQyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGZlZWQyWzFdWzBdKSAtIG5ldyBEYXRlKGZlZWQxWzFdWzBdKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjdXJyZW50RmVlZCA9IGFzc2V0VXRpbHMuZXh0cmFjdFJhd0ZlZWRQcmljZShhc3NldCk7XG4gICAgICAgIGxldCBjdXJyZW50RmVlZFByaWNlID1cbiAgICAgICAgICAgIGN1cnJlbnRGZWVkLmJhc2UuYW1vdW50IC8gY3VycmVudEZlZWQucXVvdGUuYW1vdW50O1xuXG4gICAgICAgIGxldCBkYXRhU291cmNlID0gW107XG4gICAgICAgIGxldCBjb2x1bW5zID0gW107XG5cbiAgICAgICAgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicHVibGlzaGVyXCIsXG4gICAgICAgICAgICAgICAgZml4ZWQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLnB1Ymxpc2hlclwiIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicHVibGlzaGVyXCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUEgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYS5wdWJsaXNoZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBKSBuYW1lQSA9IG5hbWVBLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lQiA9IENoYWluU3RvcmUuZ2V0QWNjb3VudChiLnB1Ymxpc2hlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUIpIG5hbWVCID0gbmFtZUIuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17aXRlbX0gLz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZmVlZF9wcmljZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS5mZWVkX3ByaWNlXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAoe3RoaXMuZm9ybWF0dGVkUHJpY2UoZmVlZF9wcmljZV9oZWFkZXIsIGZhbHNlLCB0cnVlKX0pXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZmVlZF9wcmljZVwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFfcHJpY2UgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5mZWVkX3ByaWNlLmJhc2UuYW1vdW50IC8gYS5mZWVkX3ByaWNlLnF1b3RlLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYl9wcmljZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBiLmZlZWRfcHJpY2UuYmFzZS5hbW91bnQgLyBiLmZlZWRfcHJpY2UucXVvdGUuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFfcHJpY2UgPiBiX3ByaWNlKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFfcHJpY2UgPCBiX3ByaWNlKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYmFzZS5hbW91bnQgLyBpdGVtLnF1b3RlLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVkaWFuX29mZnNldCA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcmljZSAvIGN1cnJlbnRGZWVkUHJpY2UpICogMTAwIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0dGVkUHJpY2UoaXRlbSwgdHJ1ZSl9KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYW5fb2Zmc2V0ID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0eHRsYWJlbCBzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1lZGlhbl9vZmZzZXQgPCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInR4dGxhYmVsIHdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0eHRsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZWRpYW5fb2Zmc2V0fSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJjb3JlX2V4Y2hhbmdlX3JhdGVcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkX2RhdGEuY29yZV9leGNoYW5nZV9yYXRlXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXR0ZWRQcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JlX2V4Y2hhbmdlX3JhdGVfaGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY29yZV9leGNoYW5nZV9yYXRlXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVkUHJpY2UoaXRlbSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS5tYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLm1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpb1wiIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwibWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwicHVibGlzaERhdGVcIixcbiAgICAgICAgICAgICAgICBmaXhlZDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLnB1Ymxpc2hlZFwiIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicHVibGlzaERhdGVcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLnB1Ymxpc2hEYXRlLmdldFRpbWUoKSA+IGIucHVibGlzaERhdGUuZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLnB1Ymxpc2hEYXRlLmdldFRpbWUoKSA8IGIucHVibGlzaERhdGUuZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VGltZUFnbyB0aW1lPXtpdGVtfSAvPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmZWVkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZlZWQgPSBmZWVkc1tpXTtcbiAgICAgICAgICAgIHZhciBwdWJsaXNoZXIgPSBmZWVkWzBdO1xuICAgICAgICAgICAgdmFyIHB1Ymxpc2hEYXRlID0gbmV3IERhdGUoZmVlZFsxXVswXSArIFwiWlwiKTtcbiAgICAgICAgICAgIHZhciBmZWVkX3ByaWNlID0gYXNzZXRVdGlscy5leHRyYWN0UmF3RmVlZFByaWNlKGZlZWRbMV1bMV0pO1xuICAgICAgICAgICAgdmFyIGNvcmVfZXhjaGFuZ2VfcmF0ZSA9IGZlZWRbMV1bMV0uY29yZV9leGNoYW5nZV9yYXRlO1xuICAgICAgICAgICAgdmFyIG1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gPVxuICAgICAgICAgICAgICAgIFwiXCIgKyBmZWVkWzFdWzFdLm1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8gLyAxMDAwO1xuICAgICAgICAgICAgdmFyIG1heGltdW1fc2hvcnRfc3F1ZWV6ZV9yYXRpbyA9XG4gICAgICAgICAgICAgICAgXCJcIiArIGZlZWRbMV1bMV0ubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvIC8gMTAwMDtcblxuICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXI6IHB1Ymxpc2hlcixcbiAgICAgICAgICAgICAgICBmZWVkX3ByaWNlOiBmZWVkX3ByaWNlLFxuICAgICAgICAgICAgICAgIGNvcmVfZXhjaGFuZ2VfcmF0ZTogY29yZV9leGNoYW5nZV9yYXRlLFxuICAgICAgICAgICAgICAgIG1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW86IG1haW50ZW5hbmNlX2NvbGxhdGVyYWxfcmF0aW8sXG4gICAgICAgICAgICAgICAgbWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvOiBtYXhpbXVtX3Nob3J0X3NxdWVlemVfcmF0aW8sXG4gICAgICAgICAgICAgICAgcHVibGlzaERhdGU6IHB1Ymxpc2hEYXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgcm93S2V5PVwiZmVlZFB1Ymxpc2hlclwiXG4gICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGxvY2FsZT17e1xuICAgICAgICAgICAgICAgICAgICBlbXB0eVRleHQ6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWRfZGF0YS5lbXB0eVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyTWFyZ2luVGFibGUoKSB7XG4gICAgICAgIGxldCB7Y3VtdWxhdGl2ZUdyb3VwaW5nfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBjb2x1bW5zID0gW107XG4gICAgICAgIGxldCBkYXRhU291cmNlID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2FsbE9yZGVycyAmJiB0aGlzLnN0YXRlLmNhbGxPcmRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY3VtbXVsYXRpdmVTdWZmaXggPSBjdW11bGF0aXZlR3JvdXBpbmcgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyhcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY3VtdWxhdGl2ZVwiIC8+KVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGRlYnRfY3VtID0gMDtcbiAgICAgICAgICAgIGxldCBjb2xsX2N1bSA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FsbE9yZGVycy5tYXAoYyA9PiB7XG4gICAgICAgICAgICAgICAgZGVidF9jdW0gKz0gYy5kZWJ0O1xuICAgICAgICAgICAgICAgIGNvbGxfY3VtICs9IGMuY29sbGF0ZXJhbDtcblxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGJvcnJvd2VyOiBjLmJvcnJvd2VyLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGN1bXVsYXRpdmVHcm91cGluZyA/IGNvbGxfY3VtIDogYy5jb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGMuZ2V0Q29sbGF0ZXJhbCgpLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlYnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogY3VtdWxhdGl2ZUdyb3VwaW5nID8gZGVidF9jdW0gOiBjLmRlYnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldDogYy5hbW91bnRUb1JlY2VpdmUoKS5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYWxsOiBjLmNhbGxfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIHRjcjogYy5vcmRlci50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyxcbiAgICAgICAgICAgICAgICAgICAgY3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGlvOiBjLmdldFJhdGlvKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGMuZ2V0U3RhdHVzKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB1bml0SW5mbyA9IGtleSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBkYXRhU291cmNlWzBdW2tleV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uYmFzZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdHRlZFByaWNlKGl0ZW0sIGZhbHNlLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0uYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYW1vdW50PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb2x1bW5zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImJvcnJvd2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmJvcnJvd2VyXCIgLz4sXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJib3Jyb3dlclwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUEgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYS5ib3Jyb3dlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBKSBuYW1lQSA9IG5hbWVBLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUIgPSBDaGFpblN0b3JlLmdldEFjY291bnQoYi5ib3Jyb3dlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVCKSBuYW1lQiA9IG5hbWVCLmdldChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2l0ZW19IC8+O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJjb2xsYXRlcmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uY29sbGF0ZXJhbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1bW11bGF0aXZlU3VmZml4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1bml0SW5mbyhcImNvbGxhdGVyYWxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiY29sbGF0ZXJhbFwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5jb2xsYXRlcmFsLmFtb3VudCA+IGIuY29sbGF0ZXJhbC5hbW91bnQpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuY29sbGF0ZXJhbC5hbW91bnQgPCBiLmNvbGxhdGVyYWwuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldC5tYXJnaW5fcG9zaXRpb25zLmNsaWNrX3RvX3N3aXRjaF90b19jdW11bGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlQ3VtdWxhdGl2ZUdyb3VwaW5nLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0uYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uYm9ycm93X2Ftb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1bW11bGF0aXZlU3VmZml4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1bml0SW5mbyhcImRlYnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZGVidFwiLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5kZWJ0LmFtb3VudCA+IGIuZGVidC5hbW91bnQpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZGVidC5hbW91bnQgPCBiLmRlYnQuYW1vdW50KSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVDdW11bGF0aXZlR3JvdXBpbmcuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQubWFyZ2luX3Bvc2l0aW9ucy5jbGlja190b19zd2l0Y2hfdG9fY3VtdWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0uYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2FsbFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuY2FsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VuaXRJbmZvKFwiY2FsbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlZFByaWNlKGl0ZW0sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGNyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9ycm93LnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvX2V4cGxhbmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy50YXJnZXRfY29sbGF0ZXJhbF9yYXRpb19zaG9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ0Y3JcIixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWl0ZW0gPyAoaXRlbSAvIDEwMDApLnRvRml4ZWQoMykgOiBcIi1cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY3JcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy5jb2xsX3JhdGlvXCIgLz4sXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjclwiLFxuICAgICAgICAgICAgICAgICAgICBmaXhlZDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBzb3J0ZXI6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5jci5yYXRpbyA+IGIuY3IucmF0aW8pIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuY3IucmF0aW8gPCBiLmNyLnJhdGlvKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGFzc05hbWVzID0gXCJtYXJnaW4tcmF0aW8gXCIgKyBpdGVtLnN0YXR1cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnJhdGlvLnRvRml4ZWQoMyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19XG4gICAgICAgICAgICAgICAgcm93S2V5PVwiZmVlZE1hcmdpbnNcIlxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICByb3dDbGFzc05hbWU9XCJtYXJnaW4tcm93XCJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiBOdW1iZXIoMjUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBsb2NhbGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlUZXh0OiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5tYXJnaW5fcG9zaXRpb25zLmVtcHR5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJDb2xsQmlkVGFibGUoKSB7XG4gICAgICAgIGxldCBjb2x1bW5zID0gW107XG4gICAgICAgIGxldCBkYXRhU291cmNlID0gW107XG5cbiAgICAgICAgY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYmlkZGVyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmJpZGRlclwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJiaWRkZXJcIixcbiAgICAgICAgICAgICAgICBmaXhlZDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2l0ZW19IC8+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNvbGxhdGVyYWxcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uY29sbGF0ZXJhbFwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJjb2xsYXRlcmFsXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0uYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkZWJ0XCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLmJvcnJvd19hbW91bnRcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZGVidFwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2l0ZW0uYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtpdGVtLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVfYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZGVidF9jdW1cIixcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5jdW11bGF0aXZlX2JvcnJvd19hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImRlYnRfY3VtXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17aXRlbS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2l0ZW0uYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJwcmljZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWxfYmlkLmJpZFwiIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicHJpY2VcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2l0ZW0uYmFzZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17aXRlbS5iYXNlLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17aXRlbS5xdW90ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e2l0ZW0ucXVvdGUuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9zeW1ib2xzXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNyXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImJvcnJvdy5jb2xsX3JhdGlvXCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImNyXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udG9GaXhlZCgzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJpbmNsdWRlZFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuY29uc2lkZXJlZF9vbl9yZXZpdmFsXCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImluY2x1ZGVkXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT0gMilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbF9iaWQuaW5jbHVkZWQucGFydGlhbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpdGVtID09IDEpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWxfYmlkLmluY2x1ZGVkLnllc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LmNvbGxhdGVyYWxfYmlkLmluY2x1ZGVkLm5vXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGxldCBkZWJ0X2N1bSA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbEJpZHMubWFwKGMgPT4ge1xuICAgICAgICAgICAgZGVidF9jdW0gKz0gYy5kZWJ0O1xuXG4gICAgICAgICAgICBkYXRhU291cmNlLnB1c2goe1xuICAgICAgICAgICAgICAgIGJpZGRlcjogYy5iaWRkZXIsXG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbDoge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGMuYmlkLmJhc2UuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBhc3NldDogYy5iaWQuYmFzZS5hc3NldF9pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVidDoge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGMuYmlkLnF1b3RlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGMuYmlkLnF1b3RlLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWJ0X2N1bToge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRlYnRfY3VtLFxuICAgICAgICAgICAgICAgICAgICBhc3NldDogYy5iaWQucXVvdGUuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByaWNlOiBjLmJpZCxcbiAgICAgICAgICAgICAgICBjcjogYy5nZXRSYXRpbygpLFxuICAgICAgICAgICAgICAgIGluY2x1ZGVkOiBjLmNvbnNpZGVyZWRJZlJldml2ZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgIHJvd0tleT1cImZlZWRDb2xsQmlkXCJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogTnVtYmVyKDI1KVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbG9jYWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5VGV4dDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbF9iaWQuZW1wdHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3NldEZlZWRUYWIodGFiKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlRmVlZFRhYjogdGFiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRBc3NldFRhYih0YWIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVBc3NldFRhYjogdGFiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlckZlZWRUYWJsZXMoYXNzZXQpIHtcbiAgICAgICAgdmFyIGJpdEFzc2V0ID0gYXNzZXQuYml0YXNzZXQ7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEoXCJmZWVkc1wiIGluIGJpdEFzc2V0KSB8fFxuICAgICAgICAgICAgYml0QXNzZXQuZmVlZHMubGVuZ3RoID09IDAgfHxcbiAgICAgICAgICAgIGJpdEFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0IHx8XG4gICAgICAgICAgICAhYml0QXNzZXQuZmVlZHMubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNHbG9iYWxTZXR0bGVtZW50ID0gYml0QXNzZXQuc2V0dGxlbWVudF9mdW5kID4gMCA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fc2V0RmVlZFRhYi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17dGhpcy5zdGF0ZS5hY3RpdmVGZWVkVGFifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUYWJzLlRhYlBhbmVcbiAgICAgICAgICAgICAgICAgICAgdGFiPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0dsb2JhbFNldHRsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZXhwbG9yZXIuYXNzZXQuY29sbGF0ZXJhbF9iaWQudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJleHBsb3Jlci5hc3NldC5tYXJnaW5fcG9zaXRpb25zLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAga2V5PVwibWFyZ2luXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFjdGl2ZUZlZWRUYWIgPT0gXCJtYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpc0dsb2JhbFNldHRsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3JlbmRlckNvbGxCaWRUYWJsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl9yZW5kZXJNYXJnaW5UYWJsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XG4gICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZVxuICAgICAgICAgICAgICAgICAgICB0YWI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZF9kYXRhLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAga2V5PVwiZmVlZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVGZWVkVGFiID09IFwiZmVlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3JlbmRlckZlZWRUYWJsZShhc3NldClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJBc3NldFJlc29sdmVQcmVkaWN0aW9uKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFuZWxcbiAgICAgICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5yZXNvbHZlX3ByZWRpY3Rpb25cIiAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMucmVzb2x2ZV9wcmVkaWN0aW9uX3RleHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEFzc2V0UmVzb2x2ZVByZWRpY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0fVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gPFBhZ2U0MDQgc3VidGl0bGU9XCJhc3NldF9ub3RfZm91bmRfc3VidGl0bGVcIiAvPjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYmFja2luZ0Fzc2V0LmdldCB8fCAhdGhpcy5wcm9wcy5jb3JlQXNzZXQuZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhc3NldCA9IHRoaXMucHJvcHMuYXNzZXQudG9KUygpO1xuICAgICAgICB2YXIgcHJpY2VGZWVkID1cbiAgICAgICAgICAgIFwiYml0YXNzZXRcIiBpbiBhc3NldCA/IHRoaXMucmVuZGVyUHJpY2VGZWVkKGFzc2V0KSA6IG51bGw7XG4gICAgICAgIHZhciBwcmljZUZlZWREYXRhID1cbiAgICAgICAgICAgIFwiYml0YXNzZXRcIiBpbiBhc3NldCA/IHRoaXMucmVuZGVyRmVlZFRhYmxlcyhhc3NldCkgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGFzc2V0LXBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1haW4tY29udGVudCB3cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBtZWRpdW0tdXAtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFib3V0Qm94KGFzc2V0LCB0aGlzLnByb3BzLmFzc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zZXRBc3NldFRhYi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17dGhpcy5zdGF0ZS5hY3RpdmVBc3NldFRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldC5pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIGxhcmdlLWhvcml6b250YWwgbWVkaXVtLXVwLTEgbGFyZ2UtdXAtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN1bW1hcnkoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBjbGFzc05hbWU9XCJhc3NldC1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQZXJtaXNzaW9ucyhhc3NldCl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRmVlUG9vbChhc3NldCl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaWNlRmVlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlclByaWNlRmVlZChhc3NldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2VGZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucmVuZGVyU2V0dGxlbWVudChhc3NldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Q29sbGF0ZXJhbEJpZEluSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbmRlckNvbGxhdGVyYWxCaWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaWNlRmVlZERhdGEgPyBwcmljZUZlZWREYXRhIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFicy5UYWJQYW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHBsb3Jlci5hc3NldC5hY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgY2xhc3NOYW1lPVwiYXNzZXQtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckZlZVBvb2xGdW5kaW5nKGFzc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckZlZVBvb2xDbGFpbWluZyhhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGZWVzQ2xhaW1pbmcoYXNzZXQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQXNzZXRPd25lclVwZGF0ZShhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJiaXRhc3NldFwiIGluIGFzc2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFzc2V0LmJpdGFzc2V0LmlzX3ByZWRpY3Rpb25fbWFya2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGZWVkUHVibGlzaChhc3NldCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQmlkcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDb2xsYXRlcmFsQmlkKGFzc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcImJpdGFzc2V0XCIgaW4gYXNzZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5iaXRhc3NldC5pc19wcmVkaWN0aW9uX21hcmtldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQXNzZXRSZXNvbHZlUHJlZGljdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicy5UYWJQYW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXQgPSBjb25uZWN0KEFzc2V0LCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnRcbiAgICAgICAgfTtcbiAgICB9XG59KTtcblxuQXNzZXQgPSBBc3NldFdyYXBwZXIoQXNzZXQsIHtcbiAgICBwcm9wTmFtZXM6IFtcImJhY2tpbmdBc3NldFwiLCBcImNvcmVBc3NldFwiXVxufSk7XG5cbmNsYXNzIEFzc2V0Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFzc2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gPFBhZ2U0MDQgc3VidGl0bGU9XCJhc3NldF9ub3RfZm91bmRfc3VidGl0bGVcIiAvPjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuYXNzZXQuZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYmFja2luZ0Fzc2V0ID0gdGhpcy5wcm9wcy5hc3NldC5oYXMoXCJiaXRhc3NldFwiKVxuICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFzc2V0LmdldEluKFtcbiAgICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogXCIxLjMuMFwiO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFzc2V0XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgYmFja2luZ0Fzc2V0PXtiYWNraW5nQXNzZXR9XG4gICAgICAgICAgICAgICAgY29yZUFzc2V0PXtcIjEuMy4wXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cbkFzc2V0Q29udGFpbmVyID0gQXNzZXRXcmFwcGVyKEFzc2V0Q29udGFpbmVyLCB7XG4gICAgd2l0aER5bmFtaWM6IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldFN5bWJvbFNwbGl0dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzeW1ib2wgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5zeW1ib2wudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIDxBc3NldENvbnRhaW5lciB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3N5bWJvbH0gLz47XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFjY291bnRTZWxlY3RvciBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50U2VsZWN0b3JcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuXG5jbGFzcyBBc3NldE93bmVyVXBkYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxuICAgICAgICBjdXJyZW50T3duZXI6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5ld19pc3N1ZXJfYWNjb3VudF9pZDogbnVsbCxcbiAgICAgICAgICAgIGlzc3Vlcl9hY2NvdW50X25hbWU6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkFjY291bnROYW1lQ2hhbmdlZChrZXksIG5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBba2V5XTogbmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkFjY291bnRDaGFuZ2VkKGtleSwgYWNjb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtrZXldOiBhY2NvdW50ID8gYWNjb3VudC5nZXQoXCJpZFwiKSA6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIEFzc2V0QWN0aW9ucy51cGRhdGVPd25lcihcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm5ld19pc3N1ZXJfYWNjb3VudF9pZFxuICAgICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmV3X2lzc3Vlcl9hY2NvdW50X2lkOiBudWxsLFxuICAgICAgICAgICAgaXNzdWVyX2FjY291bnRfbmFtZTogbnVsbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjdXJyZW50T3duZXJ9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5jdXJyZW50X2lzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17Y3VycmVudE93bmVyLmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtjdXJyZW50T3duZXIuZ2V0KFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMubmV3X2lzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXt0aGlzLnN0YXRlLmlzc3Vlcl9hY2NvdW50X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWNjb3VudE5hbWVDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpc3N1ZXJfYWNjb3VudF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vbkFjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuZXdfaXNzdWVyX2FjY291bnRfaWRcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmlzc3Vlcl9hY2NvdW50X25hbWV9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlQWNjb3VudHM9e1tjdXJyZW50T3duZXIuZ2V0KFwibmFtZVwiKV19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIXRoaXMuc3RhdGUubmV3X2lzc3Vlcl9hY2NvdW50X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMudXBkYXRlX293bmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25SZXNldC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucmVzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXRPd25lclVwZGF0ZSA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRPd25lclVwZGF0ZSk7XG5leHBvcnQgZGVmYXVsdCBBc3NldE93bmVyVXBkYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgUHJpY2VJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9QcmljZUlucHV0XCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xyXG5cclxuY2xhc3MgQXNzZXRQdWJsaXNoRmVlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5yZXNldFN0YXRlKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFN0YXRlKHByb3BzID0gdGhpcy5wcm9wcykge1xyXG4gICAgICAgIGxldCBwdWJsaXNoZXJfaWQgPSBwcm9wcy5hY2NvdW50LmdldChcImlkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50RmVlZCA9IHByb3BzLmFzc2V0LmdldEluKFtcImJpdGFzc2V0XCIsIFwiY3VycmVudF9mZWVkXCJdKTtcclxuXHJcbiAgICAgICAgLyogTWlnaHQgbmVlZCB0byBjaGVjayB0aGVzZSBkZWZhdWx0IHZhbHVlcyAqL1xyXG4gICAgICAgIGxldCBtY3IgPSBjdXJyZW50RmVlZC5nZXQoXCJtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCIsIDE3NTApO1xyXG4gICAgICAgIGxldCBtc3NyID0gY3VycmVudEZlZWQuZ2V0KFwibWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCIsIDExMDApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwdWJsaXNoZXI6IHByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICAgICAgcHVibGlzaGVyX2lkLFxyXG4gICAgICAgICAgICBtY3IsXHJcbiAgICAgICAgICAgIG1jclZhbHVlOiBtY3IgLyAxMDAwLFxyXG4gICAgICAgICAgICBtc3NyLFxyXG4gICAgICAgICAgICBtc3NyVmFsdWU6IG1zc3IgLyAxMDAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnROYW1lQ2hhbmdlZChrZXksIG5hbWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2tleV06IG5hbWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY291bnRDaGFuZ2VkKGtleSwgYWNjb3VudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogYWNjb3VudCA/IGFjY291bnQuZ2V0KFwiaWRcIikgOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLnB1Ymxpc2hGZWVkKHtcclxuICAgICAgICAgICAgcHVibGlzaGVyOiB0aGlzLnN0YXRlLnB1Ymxpc2hlcl9pZCxcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIG1jcjogdGhpcy5zdGF0ZS5tY3IsXHJcbiAgICAgICAgICAgIG1zc3I6IHRoaXMuc3RhdGUubXNzcixcclxuICAgICAgICAgICAgZmVlZFByaWNlOiB0aGlzLnN0YXRlLmZlZWRQcmljZSxcclxuICAgICAgICAgICAgY2VyOiB0aGlzLnN0YXRlLmNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnJlc2V0U3RhdGUoKSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmljZUNoYW5nZWQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5XTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNldFJhdGlvKGtleSwge2Ftb3VudH0pIHtcclxuICAgICAgICAvKiBFbmZvcmNlIG9uZSBkZWNpbWFsIHBvaW50IG1heGltdW0gKi9cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEhYW1vdW50ICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiBhbW91bnQgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICAgICAgYW1vdW50LmluZGV4T2YoXCIuXCIpICE9PSAtMSAmJlxyXG4gICAgICAgICAgICBhbW91bnQuaW5kZXhPZihcIi5cIikgKyA0ICE9PSBhbW91bnQubGVuZ3RoXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGFtb3VudCA9IGFtb3VudC5zdWJzdHIoMCwgYW1vdW50LmluZGV4T2YoXCIuXCIpICsgNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBba2V5ICsgXCJWYWx1ZVwiXTogYW1vdW50LFxyXG4gICAgICAgICAgICBba2V5XTogTWF0aC5mbG9vcihwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7bWNyVmFsdWUsIG1zc3JWYWx1ZSwgcHVibGlzaGVyfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IGJhc2UgPSBhc3NldC5nZXQoXCJpZFwiKTtcclxuICAgICAgICBjb25zdCBxdW90ZSA9IGFzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxyXG4gICAgICAgICAgICBcIm9wdGlvbnNcIixcclxuICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LmZlZWRfcHJvZHVjZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXtwdWJsaXNoZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BY2NvdW50TmFtZUNoYW5nZWQuYmluZCh0aGlzLCBcInB1Ymxpc2hlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uQWNjb3VudENoYW5nZWQuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaXNoZXJfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17cHVibGlzaGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENvcmUgRXhjaGFuZ2UgUmF0ZSAqL31cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPFByaWNlSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvblByaWNlQ2hhbmdlZD17dGhpcy5vblByaWNlQ2hhbmdlZC5iaW5kKHRoaXMsIFwiY2VyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhwbG9yZXIuYXNzZXQuZmVlX3Bvb2wuY29yZV9leGNoYW5nZV9yYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZT17XCIxLjMuMFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U9e2Jhc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTZXR0bGVtZW50IFByaWNlICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2VJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uUHJpY2VDaGFuZ2VkPXt0aGlzLm9uUHJpY2VDaGFuZ2VkLmJpbmQodGhpcywgXCJmZWVkUHJpY2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJleHBsb3Jlci5hc3NldC5wcmljZV9mZWVkLmZlZWRfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlPXtxdW90ZX1cclxuICAgICAgICAgICAgICAgICAgICBiYXNlPXtiYXNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTUNSICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWFpbnRlbmFuY2VfY29sbGF0ZXJhbF9yYXRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXttY3JWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNldFJhdGlvLmJpbmQodGhpcywgXCJtY3JcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNU1NSICovfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4cGxvcmVyLmFzc2V0LnByaWNlX2ZlZWQubWF4aW11bV9zaG9ydF9zcXVlZXplX3JhdGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e21zc3JWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNldFJhdGlvLmJpbmQodGhpcywgXCJtc3NyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIxcmVtXCJ9fSBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImJ1dHRvblwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmFzc2V0X3B1Ymxpc2hfZmVlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFN0YXRlKHRoaXMucHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXRQdWJsaXNoRmVlZCA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRQdWJsaXNoRmVlZCk7XHJcbkFzc2V0UHVibGlzaEZlZWQgPSBBc3NldFdyYXBwZXIoQXNzZXRQdWJsaXNoRmVlZCk7XHJcbmV4cG9ydCBkZWZhdWx0IEFzc2V0UHVibGlzaEZlZWQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge1JhZGlvLCBUb29sdGlwLCBCdXR0b24sIEZvcm19IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge0Fzc2V0LCBQcmljZX0gZnJvbSBcIi4uLy4uL2xpYi9jb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQgYXNzZXRVdGlscyBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9hc3NldF91dGlsc1wiO1xyXG5cclxuY2xhc3MgQXNzZXRSZXNvbHZlUHJlZGljdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWRcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZ2xvYmFsU2V0dGxlbWVudFByaWNlOiBudWxsLFxyXG4gICAgICAgICAgICBjdXN0b21QcmljZTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBucC5hc3NldC5pZCAhPT0gdGhpcy5wcm9wcy5hc3NldC5pZCB8fFxyXG4gICAgICAgICAgICBucy5nbG9iYWxTZXR0bGVtZW50UHJpY2UgIT09IHRoaXMuc3RhdGUuZ2xvYmFsU2V0dGxlbWVudFByaWNlIHx8XHJcbiAgICAgICAgICAgIG5zLmN1c3RvbVByaWNlICE9PSB0aGlzLnN0YXRlLmN1c3RvbVByaWNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblByaWNlQ2hhbmdlZCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAyICYmICF0aGlzLnN0YXRlLmN1c3RvbVByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsU2V0dGxlbWVudFByaWNlOiAxLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUHJpY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxTZXR0bGVtZW50UHJpY2U6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblByaWNlQ2hhbmdlZE9iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMub25QcmljZUNoYW5nZWQodmFsdWUudG9SZWFsKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHthc3NldCwgYWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgYmFzZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIHJlYWw6IDEsXHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmlkLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHRoaXMucHJvcHMuYXNzZXQucHJlY2lzaW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHF1b3RlQXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KFxyXG4gICAgICAgICAgICBhc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBxdW90ZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIHJlYWw6IHRoaXMuc3RhdGUuZ2xvYmFsU2V0dGxlbWVudFByaWNlLFxyXG4gICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5hc3NldC5iaXRhc3NldC5vcHRpb25zLnNob3J0X2JhY2tpbmdfYXNzZXQsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogcXVvdGVBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHByaWNlID0gbmV3IFByaWNlKHtcclxuICAgICAgICAgICAgcXVvdGUsXHJcbiAgICAgICAgICAgIGJhc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQXNzZXRBY3Rpb25zLmFzc2V0R2xvYmFsU2V0dGxlKGFzc2V0LCBhY2NvdW50LmdldChcImlkXCIpLCBwcmljZSkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGdsb2JhbFNldHRsZW1lbnRQcmljZTogbnVsbCxcclxuICAgICAgICAgICAgY3VzdG9tUHJpY2U6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2Uoe2Ftb3VudH0pIHtcclxuICAgICAgICB0aGlzLm9uUHJpY2VDaGFuZ2VkKGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VSYWRpbyhlKSB7XHJcbiAgICAgICAgdGhpcy5vblByaWNlQ2hhbmdlZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHthc3NldH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBiYXNlID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcclxuICAgICAgICAgICAgYXNzZXQuYml0YXNzZXQub3B0aW9ucy5zaG9ydF9iYWNraW5nX2Fzc2V0XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gYXNzZXRVdGlscy5wYXJzZURlc2NyaXB0aW9uKFxyXG4gICAgICAgICAgICBhc3NldC5vcHRpb25zLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiBcIjFyZW1cIn19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9wcmVkaWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9e1widG9wTGVmdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5wcmVkaWN0aW9uX21hcmtldF9hc3NldC5wcmVkaWN0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIjogXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb24uY29uZGl0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhwbG9yZXIuYXNzZXQucHJlZGljdGlvbl9tYXJrZXRfYXNzZXQudG9vbHRpcF9yZXNvbHV0aW9uX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17XCJ0b3BMZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0LnByZWRpY3Rpb25fbWFya2V0X2Fzc2V0LnJlc29sdXRpb25fZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCI6IFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9uLmV4cGlyeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VSYWRpby5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nbG9iYWxTZXR0bGVtZW50UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuY3VzdG9tUHJpY2UgPyB0cnVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib29sZWFuLnRydWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuY3VzdG9tUHJpY2UgPyB0cnVlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib29sZWFuLmZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuY3VzdG9tUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5nbG9iYWxTZXR0bGVtZW50UHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwic2V0dGluZ3MuY3VzdG9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5jdXN0b21QcmljZSA/IHVuZGVmaW5lZCA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhwbG9yZXIuYXNzZXQucHJpY2VfZmVlZC5nbG9iYWxfc2V0dGxlbWVudF9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dGhpcy5zdGF0ZS5nbG9iYWxTZXR0bGVtZW50UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYXNlLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXthc3NldC5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbYmFzZS5nZXQoXCJpZFwiKV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdsb2JhbFNldHRsZW1lbnRQcmljZSA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0ucHVibGlzaF9wcmVkaWN0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCI4cHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUmVzZXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLnJlc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFzc2V0UmVzb2x2ZVByZWRpY3Rpb24gPSBCaW5kVG9DaGFpblN0YXRlKEFzc2V0UmVzb2x2ZVByZWRpY3Rpb24pO1xyXG5leHBvcnQgZGVmYXVsdCBBc3NldFJlc29sdmVQcmVkaWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZFByaWNlXCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuXHJcbmNsYXNzIEJpZENvbGxhdGVyYWxPcGVyYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxTdGF0ZSA9ICgpID0+ICh7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHRoaXMucHJvcHMuZnVuZGVyQWNjb3VudE5hbWUpLFxyXG4gICAgICAgIGNvbGxhdGVyYWxBbW91bnQ6IFwiMFwiLFxyXG4gICAgICAgIGRlYnRBbW91bnQ6IFwiMFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jb2xsYXRlcmFsQmlkSW5wdXQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sbGF0ZXJhbEFtb3VudDogdmFsdWUuYW1vdW50XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2RlYnRCaWRJbnB1dCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWJ0QW1vdW50OiB2YWx1ZS5hbW91bnRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfb25CaWRDb2xsYXRlcmFsKCkge1xyXG4gICAgICAgIGxldCB7Y29sbGF0ZXJhbEFtb3VudCwgZGVidEFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb2xsYXRlcmFsQW1vdW50ID1cclxuICAgICAgICAgICAgY29sbGF0ZXJhbEFtb3VudCA9PSAwXHJcbiAgICAgICAgICAgICAgICA/IGNvbGxhdGVyYWxBbW91bnRcclxuICAgICAgICAgICAgICAgIDogY29sbGF0ZXJhbEFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG4gICAgICAgIGRlYnRBbW91bnQgPVxyXG4gICAgICAgICAgICBkZWJ0QW1vdW50ID09IDAgPyBkZWJ0QW1vdW50IDogZGVidEFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG5cclxuICAgICAgICBBc3NldEFjdGlvbnMuYmlkQ29sbGF0ZXJhbChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY2NvdW50ID8gdGhpcy5zdGF0ZS5hY2NvdW50LmdldChcImlkXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb3JlLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsQW1vdW50LFxyXG4gICAgICAgICAgICBkZWJ0QW1vdW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSgpO1xyXG4gICAgICAgIH0sIDYwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJpZCgpIHtcclxuICAgICAgICBBc3NldEFjdGlvbnMuYmlkQ29sbGF0ZXJhbChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY2NvdW50ID8gdGhpcy5zdGF0ZS5hY2NvdW50LmdldChcImlkXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb3JlLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSgpO1xyXG4gICAgICAgIH0sIDYwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbGxhdGVyYWxCaWQoKSB7XHJcbiAgICAgICAgY29uc3Qge2Fzc2V0LCBjb3JlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2FjY291bnQsIGNvbGxhdGVyYWxBbW91bnQsIGRlYnRBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcclxuICAgICAgICBsZXQgYmFsYW5jZSA9IDA7XHJcbiAgICAgICAgY29uc3QgYmFja2luZ0JhbGFuY2VJRCA9IGFjY291bnRcclxuICAgICAgICAgICAgPyBhY2NvdW50LmdldEluKFtcImJhbGFuY2VzXCIsIGNvcmUuZ2V0KFwiaWRcIildKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgaWYgKGJhY2tpbmdCYWxhbmNlSUQpIHtcclxuICAgICAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWNraW5nQmFsYW5jZUlEKTtcclxuICAgICAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VUZXh0ID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0IGFtb3VudD17YmFsYW5jZX0gYXNzZXQ9e2NvcmUuZ2V0KFwiaWRcIil9IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5jb2xsYXRlcmFsXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudD17Y29sbGF0ZXJhbEFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fY29sbGF0ZXJhbEJpZElucHV0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2NvcmUuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbY29yZS5nZXQoXCJpZFwiKV19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAxNn19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNhY3Rpb24uYm9ycm93X2Ftb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkZWJ0QW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9kZWJ0QmlkSW5wdXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXQuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbYXNzZXQuZ2V0KFwiaWRcIildfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMTZ9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2xsYXRlcmFsQW1vdW50ICE9PSBcIjBcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGVidEFtb3VudCAhPT0gXCIwXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5hc3NldC5jb2xsYXRlcmFsLmJpZF9wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXt0aGlzLnN0YXRlLmNvbGxhdGVyYWxBbW91bnQgLyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2NvcmUuZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXt0aGlzLnN0YXRlLmRlYnRBbW91bnQgLyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXthc3NldC5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVQcmljZUZlZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX0gY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJidXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQmlkQ29sbGF0ZXJhbC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zYWN0aW9uLnRyeFR5cGVzLmJpZF9jb2xsYXRlcmFsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXNldC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucGVybS5yZXNldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29sbGF0ZXJhbEJpZCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5CaWRDb2xsYXRlcmFsT3BlcmF0aW9uID0gQXNzZXRXcmFwcGVyKEJpZENvbGxhdGVyYWxPcGVyYXRpb24sIHtcclxuICAgIHByb3BOYW1lczogW1wiYXNzZXRcIiwgXCJjb3JlXCJdLFxyXG4gICAgd2l0aER5bmFtaWM6IHRydWVcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCaWRDb2xsYXRlcmFsT3BlcmF0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldERpc3BsYXlOYW1lfSBmcm9tIFwiY29tbW9uL3JlYWN0VXRpbHNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCJpbW11dGFibGVcIjtcblxuY2xhc3MgRHluYW1pY09iamVjdFJlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkb3M6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdFxuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZG9zOiBMaXN0KClcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5nZXREeW5hbWljT2JqZWN0ID0gdGhpcy5nZXREeW5hbWljT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0RHluYW1pY09iamVjdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kb3MuZmluZChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICYmIGEuZ2V0KFwiaWRcIikgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldER5bmFtaWNPYmplY3Q6IHRoaXMuZ2V0RHluYW1pY09iamVjdFxuICAgICAgICB9KTtcbiAgICB9XG59XG5EeW5hbWljT2JqZWN0UmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKER5bmFtaWNPYmplY3RSZXNvbHZlcik7XG5cbi8qKlxuICogSE9DIHRoYXQgcmVzb2x2ZXMgZWl0aGVyIGEgbnVtYmVyIG9mIGFzc2V0cyBkaXJlY3RseSB3aXRoIENoYWluQXNzZXQsXG4gKiBvciBhIGxpc3Qgb2YgYXNzZXRzIHdpdGggQ2hhaW5Bc3NldHNcbiAqXG4gKiAgT3B0aW9uc1xuICogIC0ncHJvcE5hbWVzJyBhbiBhcnJheSBvZiBwcm9wIG5hbWVzIHRvIGJlIHJlc29sdmVkIGFzIGFzc2V0cy4gKGRlZmF1bHRzIHRvIFwiYXNzZXRcIiBvciBcImFzc2V0c1wiKVxuICogIC0nZGVmYXVsdFByb3BzJyBkZWZhdWx0IHZhbHVlcyB0byB1c2UgZm9yIG9iamVjdHMgKG9wdGlvbmFsKVxuICogIC0nYXNMaXN0JyBkZWZpbmVzIHdoZXRoZXIgdG8gdXNlIENoYWluQXNzZXRzTGlzdCBvciBub3QgKHVzZWZ1bCBmb3IgcmVzb2x2aW5nIGxhcmdlIHF1YW50aXRpZXMgb2YgYXNzZXRzKVxuICogIC0nd2l0aER5bmFtaWMnIGRlZmluZXMgd2hldGhlciB0byBhbHNvIHJlc29sdmUgZHluYW1pYyBvYmplY3RzIG9yIG5vdFxuICovXG5cbmZ1bmN0aW9uIEFzc2V0V3JhcHBlcihDb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMucHJvcE5hbWVzID0gb3B0aW9ucy5wcm9wTmFtZXMgfHwgW1xuICAgICAgICAhIW9wdGlvbnMuYXNMaXN0ID8gXCJhc3NldHNcIiA6IFwiYXNzZXRcIlxuICAgIF07XG4gICAgY29uc3QgZmluYWxQcm9wVHlwZXMgPSBvcHRpb25zLnByb3BOYW1lcy5yZWR1Y2UoKHJlcywgdHlwZSkgPT4ge1xuICAgICAgICByZXNbdHlwZV0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgPyBDaGFpblR5cGVzLkNoYWluQXNzZXRzTGlzdFxuICAgICAgICAgICAgOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBsZXQgZGVmYXVsdFByb3BzID0gT2JqZWN0LmtleXMoZmluYWxQcm9wVHlwZXMpLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiBvcHRpb25zLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICByZXNba2V5XSA9ICEhb3B0aW9ucy5hc0xpc3QgPyBMaXN0KGN1cnJlbnQgfHwgW10pIDogY3VycmVudCB8fCBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVmYXVsdFByb3BzICYmICEhb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCkge1xuICAgICAgICBkZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY2xhc3MgQXNzZXRzUmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0gZmluYWxQcm9wVHlwZXM7XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGZpbmFsQXNzZXRzID0ge307XG4gICAgICAgICAgICBsZXQgcGFzc1Ryb3VnaFByb3BzID0ge307XG4gICAgICAgICAgICBsZXQgZG9zID0gTGlzdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0gJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9wTmFtZXMuaW5kZXhPZihwcm9wKSAhPT0gLTFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5hc0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFzc2V0c1twcm9wXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHNbcHJvcF0uZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NUcm91Z2hQcm9wc1twcm9wXSA9IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB3cmFwcGVkID0gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgey4uLnBhc3NUcm91Z2hQcm9wcywgLi4uZmluYWxBc3NldHN9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYylcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RHluYW1pY09iamVjdFJlc29sdmVyIGRvcz17ZG9zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3cmFwcGVkfVxuICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNPYmplY3RSZXNvbHZlcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gd3JhcHBlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBc3NldHNSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRzUmVzb2x2ZXIpO1xuXG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFzc2V0c1Jlc29sdmVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCByZWY9XCJib3VuZF9jb21wb25lbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQXNzZXRzUmVzb2x2ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdyYXBwZXIuZGlzcGxheU5hbWUgPSBgV3JhcHBlcigke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG4gICAgcmV0dXJuIFdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4vRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IEZsb2F0aW5nRHJvcGRvd24gZnJvbSBcIi4vRmxvYXRpbmdEcm9wZG93blwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7RGVjaW1hbENoZWNrZXJ9IGZyb20gXCIuL0RlY2ltYWxDaGVja2VyXCI7XHJcblxyXG5jbGFzcyBBc3NldFNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGFzc2V0IGlkXHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH07XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5wLmFzc2V0cywgdGhpcy5wcm9wcy5hc3NldHMpIHx8XHJcbiAgICAgICAgICAgIG5wLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlIHx8XHJcbiAgICAgICAgICAgIG5wLnNjcm9sbF9sZW5ndGggIT09IHRoaXMucHJvcHMuc2Nyb2xsX2xlbmd0aFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hc3NldHMubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZsb2F0aW5nRHJvcGRvd25cclxuICAgICAgICAgICAgICAgIGVudHJpZXM9e3RoaXMucHJvcHMuYXNzZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChhID0+IGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM9e3RoaXMucHJvcHMuYXNzZXRzLnJlZHVjZSgobWFwLCBhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgYS5nZXQoXCJzeW1ib2xcIikpIG1hcFthLmdldChcInN5bWJvbFwiKV0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XHJcbiAgICAgICAgICAgICAgICB9LCB7fSl9XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVFbnRyeT17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldHNbMF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3RoaXMucHJvcHMuYXNzZXRzWzBdLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZV9hbW91bnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxfbGVuZ3RoPXt0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuQXNzZXRTZWxlY3RvciA9IEFzc2V0V3JhcHBlcihBc3NldFNlbGVjdG9yLCB7YXNMaXN0OiB0cnVlfSk7XHJcblxyXG5jbGFzcyBBbW91bnRTZWxlY3RvciBleHRlbmRzIERlY2ltYWxDaGVja2VyIHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGEgdHJhbnNsYXRpb24ga2V5IGZvciB0aGUgbGFiZWxcclxuICAgICAgICBhc3NldHM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBhbW91bnQ6IFByb3BUeXBlcy5hbnksXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgdGFiSW5kZXg6IDBcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkFzc2V0Q2hhbmdlKHRoaXMucHJvcHMuYXNzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdEFtb3VudCh2KSB7XHJcbiAgICAgICAgLyovLyBUT0RPOiB1c2UgYXNzZXQncyBwcmVjaXNpb24gdG8gZm9ybWF0IHRoZSBudW1iZXIqL1xyXG4gICAgICAgIGlmICghdikgdiA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB2ID0gdi50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHYudHJpbSgpLnJlcGxhY2UoLywvZywgXCJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBfb25DaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5nZXROdW1lcmljRXZlbnRWYWx1ZShlKSxcclxuICAgICAgICAgICAgICAgIGFzc2V0OiB0aGlzLnByb3BzLmFzc2V0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQXNzZXRDaGFuZ2Uoc2VsZWN0ZWRfYXNzZXQpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMucHJvcHMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYXNzZXQ6IHNlbGVjdGVkX2Fzc2V0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ2FsbGluZyBBbW91bnRTZWxlY3RvcjogXCIgKyB0aGlzLnByb3BzLmxhYmVsICsgdGhpcy5wcm9wcy5hc3NldCArIHRoaXMucHJvcHMuYXNzZXRzICsgdGhpcy5wcm9wcy5hbW91bnQgKyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyICsgdGhpcy5wcm9wcy5lcnJvcik7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy5lcnJvclxyXG4gICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmVycm9yKVxyXG4gICAgICAgICAgICA6IHRoaXMuZm9ybWF0QW1vdW50KHRoaXMucHJvcHMuYW1vdW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbW91bnQtc2VsZWN0b3JcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmlnaHQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNwbGF5X2JhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnByb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFzdGU9e3RoaXMucHJvcHMub25QYXN0ZSB8fCB0aGlzLm9uUGFzdGUuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIHNlbGVjdCBmbG9hdGluZy1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc1ByaWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi13cmFwcGVyIGluYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfS9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYmFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvcHMucmVmQ2FsbGJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYXNzZXQuZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17SW1tdXRhYmxlLkxpc3QodGhpcy5wcm9wcy5hc3NldHMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQXNzZXRDaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxfbGVuZ3RoPXt0aGlzLnByb3BzLnNjcm9sbF9sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQW1vdW50U2VsZWN0b3IgPSBBc3NldFdyYXBwZXIoQW1vdW50U2VsZWN0b3IpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW1vdW50U2VsZWN0b3I7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL0JvdHMvbGlicy9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgQXNzZXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IHRydWUsXG4gICAgICAgIG1heFdpZHRoOiAyMFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGltZ0Vycm9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQgIT09IG5wLmFzc2V0IHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFdpZHRoICE9PSBucC5tYXhXaWR0aCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy53aGl0ZUxpc3QgIT09IG5wLndoaXRlTGlzdCB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbWdFcnJvciAhPT0gbnMuaW1nRXJyb3JcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbWdFcnJvcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZU5vbmVUb0J0cylcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5zcmMgPVxuICAgICAgICAgICAgICAgICAgICBcImFzc2V0LXN5bWJvbHMvdW5rbm93bi5wbmdcIjtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbWdFcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YXNzZXR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBmdW5jdGlvbiBnZXRJbWFnZU5hbWUoYXNzZXQpIHtcbiAgICAgICAgICAgIGlmIChhc3NldCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGltZ05hbWUgPSBnZXRJbWFnZU5hbWUoYXNzZXQpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgcmVmPXtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX29uRXJyb3IuYmluZCh0aGlzLCBpbWdOYW1lKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5wcm9wcy5tYXhXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCItM3B4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvJHtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXNzZXRJbWFnZSA9IEFzc2V0V3JhcHBlcihBc3NldEltYWdlKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXRJbWFnZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxBc3NldEltYWdlIHsuLi50aGlzLnByb3BzfSBhc3NldD17dGhpcy5wcm9wcy5uYW1lfSAvPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2Nyb2xsX2xlbmd0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBzY3JvbGxfbGVuZ3RoOiA5XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbF9sZW5ndGggPSBwcm9wcy5zY3JvbGxfbGVuZ3RoO1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQm9keUNsaWNrID0gdGhpcy5vbkJvZHlDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucC5lbnRyaWVzLCB0aGlzLnByb3BzLmVudHJpZXMpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnMsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICBucC52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9zZXRMaXN0ZW5lcihwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmVudHJpZXMubGVuZ3RoID4gMSAmJiAhdGhpcy5saXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQm9keUNsaWNrLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVtb3ZlTGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Cb2R5Q2xpY2spO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKG5wLmVudHJpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICB9IGVsc2UgaWYgKG5wLmVudHJpZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0TGlzdGVuZXIobnApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgb25Cb2R5Q2xpY2soZSkge1xuICAgICAgICBsZXQgZWwgPSBlLnRhcmdldDtcbiAgICAgICAgbGV0IGluc2lkZUFjdGlvblNoZWV0ID0gZmFsc2U7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdCAmJlxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duXCIpICYmXG4gICAgICAgICAgICAgICAgZWwuaWQgPT09IHRoaXMucHJvcHMuaWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGluc2lkZUFjdGlvblNoZWV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuXG4gICAgICAgIGlmICghaW5zaWRlQWN0aW9uU2hlZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTogZmFsc2V9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RvZ2dsZURyb3Bkb3duKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZTogIXRoaXMuc3RhdGUuYWN0aXZlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2VudHJpZXMsIHZhbHVlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YWN0aXZlfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24td3JhcHBlciBpbmFjdGl2ZVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwiIHVwcGVyLWNhc2VcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaW5nbGVFbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5zaW5nbGVFbnRyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZW50cmllc1swXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBlbnRyaWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMudXBwZXJDYXNlID8gXCJ1cHBlci1jYXNlXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWVzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlRHJvcGRvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcGRvd24td3JhcHBlclwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnVwcGVyQ2FzZSA/IFwiIHVwcGVyLWNhc2VcIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IDE1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUgPyB2YWx1ZSA6IDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlblwiPkE8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLmxlbmd0aCA+IHRoaXMucHJvcHMuc2Nyb2xsX2xlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gYSBjbGFzcyB0byBkaXNwbGF5IHRpbWUgbmljZWx5IHdoZW4gZ2l2ZW4gc2Vjb25kc1xyXG4vLyBmb3IgZXhhbXBsZSwgZGlzcGxheVxyXG5cclxuLy8gZXhwZWN0cyB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYXMgYSBwcm9wZXJ0eVxyXG5cclxuY2xhc3MgRm9ybWF0dGVkVGltZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt0aW1lOiBwcm9wcy50aW1lfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnaXZlbiBhbiBpbnRlZ2VyIHNlY29uZHMgYXMgYW4gYXJndW1lbnQsXHJcbiAgICAvLyByZXR1cm4gdGhlIG51bWJlciBvZiBob3Vyc1xyXG4gICAgZ2V0SG91cnMoc2Vjcykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXQgaG91cnMgY2FsbGVkIHdpdGg6IFwiICsgc2Vjcyk7XHJcbiAgICAgICAgcmV0dXJuIHNlY3MgLyAzNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj57dGhpcy5nZXRIb3Vycyh0aGlzLnN0YXRlLnRpbWUpfWg8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZFRpbWU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IHtQcmljZSwgQXNzZXR9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcblxuY2xhc3MgUHJpY2VJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgcXVvdGUgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IHByb3BzLnF1b3RlLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5xdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBiYXNlID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBwcm9wcy5iYXNlLmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiBwcm9wcy5iYXNlLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJpY2UgPSBuZXcgUHJpY2Uoe1xuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBiYXNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgIHJlYWxQcmljZVZhbHVlOiBwcmljZS50b1JlYWwoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uUHJpY2VDaGFuZ2VkKHthbW91bnR9KSB7XG4gICAgICAgIHRoaXMuc3RhdGUucHJpY2Uuc2V0UHJpY2VGcm9tUmVhbChwYXJzZUZsb2F0KGFtb3VudCkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlYWxQcmljZVZhbHVlOiBhbW91bnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25QcmljZUNoYW5nZWQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUHJpY2VDaGFuZ2VkKHRoaXMuc3RhdGUucHJpY2UuY2xvbmUoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7cmVhbFByaWNlVmFsdWUsIHByaWNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgIGFtb3VudD17cmVhbFByaWNlVmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QcmljZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBhc3NldD17cHJpY2UuYmFzZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICBiYXNlPXt0aGlzLnByb3BzLnF1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICBpc1ByaWNlXG4gICAgICAgICAgICAgICAgYXNzZXRzPXtbcHJpY2UucXVvdGUuYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMHB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblByaWNlSW5wdXQgPSBBc3NldFdyYXBwZXIoUHJpY2VJbnB1dCwge1xuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBiYXNlOiBcIjEuMy4wXCJcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VJbnB1dDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==