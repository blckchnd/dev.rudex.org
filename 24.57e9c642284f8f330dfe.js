"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[24],{

/***/ 2693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2088);
/* harmony import */ var _Utility_MarketLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2694);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2117);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(641);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(644);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(437);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2084);
/* harmony import */ var _Utility_withWorthLessSettlementFlag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2695);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2436);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(607);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2085);

















const WorthLessSettlementWarning = (0,_Utility_withWorthLessSettlementFlag__WEBPACK_IMPORTED_MODULE_11__["default"])(({
  worthLessSettlement,
  asset,
  shortBackingAsset,
  marketPrice,
  settlementPrice
}) => {
  marketPrice = common_utils__WEBPACK_IMPORTED_MODULE_14__["default"].format_number(marketPrice, asset.get("precision"));
  settlementPrice = common_utils__WEBPACK_IMPORTED_MODULE_14__["default"].format_number(settlementPrice, asset.get("precision"));

  switch (worthLessSettlement) {
    case true:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "h2",
        content: "exchange.settle_better_marketprice"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_12__["default"], {
        string: "exchange.worth_less_settlement_warning",
        keys: [{
          value: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_MarketLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
            base: asset.get("id"),
            quote: shortBackingAsset.get("id")
          }),
          arg: "market_link"
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "exchange.price_market"
      }), ":\xA0\xA0", marketPrice, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "exchange.settle"
      }), ":\xA0\xA0", settlementPrice));

    case undefined:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "exchange.checking_for_worth_less_settlement"
      });

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "h2",
        content: "exchange.settle_better_settleprice"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_12__["default"], {
        string: "exchange.settlement_hint",
        keys: [{
          value: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_MarketLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
            base: asset.get("id"),
            quote: shortBackingAsset.get("id")
          }),
          arg: "market_link"
        }, {
          value: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
            name: asset.get("symbol")
          }),
          arg: "long"
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "exchange.price_market"
      }), ":\xA0\xA0", marketPrice, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "exchange.settle"
      }), ":\xA0\xA0", settlementPrice));
  }
});

class ModalContent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    asset: prop_types__WEBPACK_IMPORTED_MODULE_16___default().instanceOf((immutable__WEBPACK_IMPORTED_MODULE_1___default().Map)),
    core: prop_types__WEBPACK_IMPORTED_MODULE_16___default().instanceOf((immutable__WEBPACK_IMPORTED_MODULE_1___default().Map)),
    account: prop_types__WEBPACK_IMPORTED_MODULE_16___default().instanceOf((immutable__WEBPACK_IMPORTED_MODULE_1___default().Map))
  };
  static defaultProps = {
    asset: immutable__WEBPACK_IMPORTED_MODULE_1___default().Map(),
    core: immutable__WEBPACK_IMPORTED_MODULE_1___default().Map(),
    account: immutable__WEBPACK_IMPORTED_MODULE_1___default().Map()
  };

  constructor() {
    super();
    this.state = {
      amount: 0
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (!!np.asset && !!this.props.asset && np.asset.get("id") !== this.props.asset.get("id")) {
      this.setState({
        amount: 0
      });
    }
  }

  getSettlementInfo() {
    const {
      getDynamicObject,
      asset,
      core
    } = this.props;
    const dynamic = getDynamicObject(asset.get("dynamic_asset_data_id"));
    const currentSupply = dynamic && dynamic.size ? dynamic.get("current_supply") : 0;
    const maintenanceInterval = core && core.size ? core.getIn(["parameters", "maintenance_interval"]) : 0;
    const bitAsset = asset.get("bitasset").toJS();
    const currentSettled = bitAsset.force_settled_volume;
    const maxSettlementVolume = currentSupply * (bitAsset.options.maximum_force_settlement_volume / 10000);
    const remainingVolume = !currentSettled ? maxSettlementVolume : maxSettlementVolume - currentSettled;
    const settlementDelay = bitAsset.options.force_settlement_delay_sec;
    return {
      maxSettlementVolume,
      remainingVolume,
      maintenanceInterval,
      settlementDelay
    };
  }

  onAmountChanged({
    amount,
    asset
  }) {
    this.setState({
      amount: amount
    });
  }

  onSubmit(e) {
    let {
      amount
    } = this.state;
    e.preventDefault();
    this.props.hideModal();
    amount = parseInt(amount * Math.pow(10, this.props.asset.get("precision")));
    var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_6__["default"].new_transaction();
    tr.add_type_operation("asset_settle", {
      fee: {
        amount: 0,
        asset_id: 0
      },
      account: this.props.account.get("id"),
      amount: {
        amount: amount,
        asset_id: this.props.asset.get("id")
      }
    });
    return stores_WalletDb__WEBPACK_IMPORTED_MODULE_7__["default"].process_transaction(tr, null, true).then(result => {
      // console.log("asset settle result:", result);
      // this.dispatch(account_id);
      return true;
    }).catch(error => {
      console.error("asset settle error: ", error);
      return false;
    });
  }

  _useMaxValue(amount) {
    this.setState({
      amount: amount / Math.pow(10, this.props.asset.get("precision"))
    });
  }

  render() {
    let {
      asset,
      account
    } = this.props;
    let {
      amount
    } = this.state;

    if (!asset) {
      return null;
    }

    let options = asset && asset.getIn(["bitasset", "options"]) ? asset.getIn(["bitasset", "options"]).toJS() : null;
    let isGlobalSettled = asset.get("bitasset").get("settlement_fund") > 0 ? true : false;
    let offset = 0;

    if (!isGlobalSettled) {
      offset = asset.get("bitasset").get("options").get("force_settlement_offset_percent") / 100;
    } // TODO
    // Check if force_settled_volume exceeds maximum_force_settlement_volume
    // Requires Dynamic Object for Total Supply
    // var maxSettlementVolume = asset.get("bitasset").get("options").get("maximum_force_settlement_volume");
    // var currentSettled = asset.get("bitasset").get("force_settled_volume");


    let assetID = asset.get("id");
    let account_balances = account.get("balances");
    const {
      name: assetName,
      prefix
    } = common_utils__WEBPACK_IMPORTED_MODULE_14__["default"].replaceName(asset);
    const assetFullName = (prefix ? prefix : "") + assetName;
    let currentBalance = null,
        balanceAmount = 0;
    account_balances && account_balances.forEach(balance => {
      let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getObject(balance);

      if (!balanceObject.get("balance")) {
        return null;
      }

      if (balanceObject.get("asset_type") === assetID) {
        currentBalance = balance;
        balanceAmount = balanceObject.get("balance");
      }
    });
    let balanceText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "exchange.balance"
    }), ":\xA0", currentBalance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "underline",
      onClick: this._useMaxValue.bind(this, balanceAmount)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      balance: currentBalance
    })) : "0 " + asset.get("symbol"));
    let isFundsToLow = false;

    if (amount > balanceAmount / Math.pow(10, this.props.asset.get("precision"))) {
      isFundsToLow = true;
    }

    const footer = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Tooltip, {
      title: isFundsToLow ? counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("tooltip.lack_funds") : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Button, {
      key: "submit",
      type: "primary",
      onClick: this.onSubmit,
      disabled: isFundsToLow
    }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("modal.settle.submit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Button, {
      key: "close",
      onClick: this.props.hideModal
    }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("modal.close"))];
    const {
      maxSettlementVolume,
      remainingVolume,
      settlementDelay,
      maintenanceInterval
    } = this.getSettlementInfo();
    const estimatedDelay = !isGlobalSettled ? (settlementDelay + Math.floor(amount / maxSettlementVolume) * maintenanceInterval) / 3600 : 0;
    const isPredictionMarket = asset.getIn(["bitasset", "is_prediction_market"]);
    let modalContent = isPredictionMarket ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Alert, {
      message: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("tooltip.settle_market_prediction"),
      type: "info",
      showIcon: true
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isGlobalSettled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Alert, {
      message: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("exchange.settle_delay_globally_settled"),
      type: "warning",
      showIcon: true
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Alert, {
      message: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("exchange.settle_delay", {
        hours: options.force_settlement_delay_sec / 3600
      }),
      description: estimatedDelay ? counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("modal.settle.delay", {
        amount: estimatedDelay
      }) : null,
      type: "info",
      showIcon: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WorthLessSettlementWarning, {
      asset: assetID
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), !isGlobalSettled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      component: "div",
      content: "exchange.settle_offset",
      offset: offset
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Form, {
      className: "full-width",
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: "modal.settle.amount",
      amount: amount,
      onChange: this.onAmountChanged.bind(this),
      display_balance: balanceText,
      asset: assetID,
      assets: [assetID],
      tabIndex: 1,
      style: amount > remainingVolume ? {
        "margin-bottom": "0"
      } : {}
    }), amount > remainingVolume ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "facolor-info",
      content: "modal.settle.max_volume",
      amount: maxSettlementVolume,
      asset: assetFullName
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "facolor-info",
      content: "modal.settle.remaining_volume",
      amount: remainingVolume,
      asset: assetFullName
    })) : null));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Modal, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("modal.settle.title", {
        asset: assetFullName
      }),
      visible: this.props.visible,
      id: this.props.modalId,
      footer: !isPredictionMarket ? footer : null,
      onCancel: this.props.hideModal,
      overlay: true,
      ref: "settlement_modal"
    }, modalContent);
  }

}

ModalContent = (0,_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_15__["default"])(ModalContent, {
  propNames: ["asset", "core"],
  withDynamic: true,
  defaultProps: {
    core: "2.0.0"
  }
});

class SettleModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalContent, this.props);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettleModal);

/***/ }),

/***/ 2694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2097);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1962);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2085);
/* harmony import */ var _AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2088);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2339);






/**
 *  Given a base and quote asset, render a link to that market
 *
 *  Expected Properties:
 *     base:  asset id, which will be fetched from the ChainStore
 *     quote: either an asset id or a balance id
 *
 */

class MarketLink extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      base,
      quote
    } = this.props;

    if (base.get("id") === quote.get("id")) {
      return null;
    }

    let marketID = quote.get("symbol") + "_" + base.get("symbol");
    let marketName = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: quote.get("symbol")
    }), " /", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: base.get("symbol")
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
      to: `/market/${marketID}`,
      onClick: () => actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].switchMarket()
    }, marketName);
  }

}

MarketLink = (0,_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(MarketLink, {
  propNames: ["quote", "base"],
  defaultProps: {
    base: "1.3.0"
  }
});
/*
This hangs the page on MarketLink import with firefox 62.0

class ObjectWrapper extends React.Component {
    static propTypes = {
        object: ChainTypes.ChainObject.isRequired
    };

    render() {
        let {object} = this.props;
        let quoteAsset = object.has("asset_type")
            ? object.get("asset_type")
            : object.get("id");

        return <MarketLink quote={quoteAsset} />;
    }
}
ObjectWrapper = BindToChainState(ObjectWrapper);

MarketLink.ObjectWrapper = ObjectWrapper;
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketLink);

/***/ }),

/***/ 2695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(521);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2085);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(637);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(618);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const withShortBackingAsset = WrappedComponent => {
  const WrappedComponentWithShortBackingAsset = (0,_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(WrappedComponent, {
    propNames: ["shortBackingAsset"]
  });
  return (0,_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponentWithShortBackingAsset, _extends({}, props, {
    shortBackingAsset: props.asset.getIn(["bitasset", "options", "short_backing_asset"])
  })));
};

const withWorthLessSettlementFlag = WrappedComponent => withShortBackingAsset(class extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  state = {
    worthLessSettlement: undefined
  };

  updateFlag() {
    const {
      asset,
      shortBackingAsset
    } = this.props;
    const assetId = asset.get("id");
    const shortBackingAssetId = shortBackingAsset.get("id"); // TODO: maybe properly subscribe to market instead of calling api directly?

    const realMarketPricePromise = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__.Apis.instance().db_api().exec("get_order_book", [shortBackingAssetId, assetId, 1]).then(orderBook => orderBook.bids.length === 0 ? 0 : Number(orderBook.bids[0].price));
    let feedPrice = null;
    let factor = 1;
    let offset = 0;

    if (!!asset.get("bitasset") && asset.get("bitasset").get("settlement_fund") > 0) {
      // if globally settled, feed price == settlement price
      feedPrice = asset.get("bitasset").get("settlement_price");
    } else {
      feedPrice = _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_4__["default"].extractRawFeedPrice(asset);
      offset = asset.get("bitasset").get("options").get("force_settlement_offset_percent");
      factor = 1 - offset / 10000;
    }

    const realSettlementPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Price({
      base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Asset({
        asset_id: shortBackingAssetId,
        amount: feedPrice.getIn(["quote", "amount"]),
        preicision: shortBackingAsset.get("precision")
      }),
      quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__.Asset({
        asset_id: assetId,
        amount: feedPrice.getIn(["base", "amount"]),
        precision: asset.get("precision")
      })
    }).toReal() * factor; // TODO: compare fractional price instead of real price

    realMarketPricePromise.then(realMarketPrice => this.setState({
      worthLessSettlement: realMarketPrice > realSettlementPrice,
      marketPrice: realMarketPrice,
      settlementPrice: realSettlementPrice
    }));
  }

  UNSAFE_componentWillMount() {
    this.updateFlag();
  }

  componentDidUpdate() {
    this.updateFlag();
  }

  render() {
    const {
      props,
      state: {
        worthLessSettlement,
        marketPrice,
        settlementPrice
      }
    } = this;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, _extends({}, props, {
      worthLessSettlement: worthLessSettlement,
      marketPrice: marketPrice,
      settlementPrice: settlementPrice
    }));
  }

});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withWorthLessSettlementFlag);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuNTdlOWM2NDIyODRmOGYzMzBkZmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBVEE7QUFIQTtBQWtCQTtBQUFBO0FBS0E7QUFBQTs7QUFNQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFUQTtBQVlBO0FBRUE7QUFEQTtBQUlBO0FBTkE7QUFkQTtBQTBCQTtBQUFBO0FBS0E7QUFBQTtBQWpGQTtBQXdGQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFLQTtBQUdBOztBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQVFBOztBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUVBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFPQTtBQUtBO0FBRUE7QUFHQTtBQUNBO0FBTEE7QUFXQTtBQUdBO0FBQ0E7QUFMQTtBQVNBO0FBR0E7QUFEQTtBQUlBO0FBR0E7QUFEQTtBQUtBO0FBQ0E7QUFmQTtBQWtCQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQVZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBWUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWNBOztBQWpVQTs7QUFvVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBSEE7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFGQTtBQU9BOztBQXJCQTs7QUF3QkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBR0E7QUFGQTtBQVNBOztBQUVBO0FBR0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUdBO0FBU0E7QUFDQTtBQUNBOztBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU5BOztBQWNBO0FBRUE7QUFFQTtBQUNBO0FBSkE7QUFPQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBSkE7QUFPQTs7QUE5RUE7O0FBa0ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTW9kYWwvU2V0dGxlTW9kYWwuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvTWFya2V0TGluay5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS93aXRoV29ydGhMZXNzU2V0dGxlbWVudEZsYWcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBNYXJrZXRMaW5rIGZyb20gXCIuLi9VdGlsaXR5L01hcmtldExpbmtcIjtcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcbmltcG9ydCBXYWxsZXRBcGkgZnJvbSBcImFwaS9XYWxsZXRBcGlcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xuaW1wb3J0IHdpdGhXb3J0aExlc3NTZXR0bGVtZW50RmxhZyBmcm9tIFwiLi4vVXRpbGl0eS93aXRoV29ydGhMZXNzU2V0dGxlbWVudEZsYWdcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5pbXBvcnQge0FsZXJ0LCBGb3JtLCBNb2RhbCwgQnV0dG9uLCBUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcblxuY29uc3QgV29ydGhMZXNzU2V0dGxlbWVudFdhcm5pbmcgPSB3aXRoV29ydGhMZXNzU2V0dGxlbWVudEZsYWcoXG4gICAgKHtcbiAgICAgICAgd29ydGhMZXNzU2V0dGxlbWVudCxcbiAgICAgICAgYXNzZXQsXG4gICAgICAgIHNob3J0QmFja2luZ0Fzc2V0LFxuICAgICAgICBtYXJrZXRQcmljZSxcbiAgICAgICAgc2V0dGxlbWVudFByaWNlXG4gICAgfSkgPT4ge1xuICAgICAgICBtYXJrZXRQcmljZSA9IHV0aWxzLmZvcm1hdF9udW1iZXIobWFya2V0UHJpY2UsIGFzc2V0LmdldChcInByZWNpc2lvblwiKSk7XG4gICAgICAgIHNldHRsZW1lbnRQcmljZSA9IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICBzZXR0bGVtZW50UHJpY2UsXG4gICAgICAgICAgICBhc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgKTtcbiAgICAgICAgc3dpdGNoICh3b3J0aExlc3NTZXR0bGVtZW50KSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnNldHRsZV9iZXR0ZXJfbWFya2V0cHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwiZXhjaGFuZ2Uud29ydGhfbGVzc19zZXR0bGVtZW50X3dhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3Nob3J0QmFja2luZ0Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibWFya2V0X2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VfbWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNldHRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXR0bGVtZW50UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5jaGVja2luZ19mb3Jfd29ydGhfbGVzc19zZXR0bGVtZW50XCIgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2Uuc2V0dGxlX2JldHRlcl9zZXR0bGVwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5zZXR0bGVtZW50X2hpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e2Fzc2V0LmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3Nob3J0QmFja2luZ0Fzc2V0LmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibWFya2V0X2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthc3NldC5nZXQoXCJzeW1ib2xcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibG9uZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZV9tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc2V0dGxlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRsZW1lbnRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmNsYXNzIE1vZGFsQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYXNzZXQ6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEltbXV0YWJsZS5NYXApLFxuICAgICAgICBjb3JlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihJbW11dGFibGUuTWFwKSxcbiAgICAgICAgYWNjb3VudDogUHJvcFR5cGVzLmluc3RhbmNlT2YoSW1tdXRhYmxlLk1hcClcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYXNzZXQ6IEltbXV0YWJsZS5NYXAoKSxcbiAgICAgICAgY29yZTogSW1tdXRhYmxlLk1hcCgpLFxuICAgICAgICBhY2NvdW50OiBJbW11dGFibGUuTWFwKClcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbW91bnQ6IDBcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICEhbnAuYXNzZXQgJiZcbiAgICAgICAgICAgICEhdGhpcy5wcm9wcy5hc3NldCAmJlxuICAgICAgICAgICAgbnAuYXNzZXQuZ2V0KFwiaWRcIikgIT09IHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2V0dGxlbWVudEluZm8oKSB7XG4gICAgICAgIGNvbnN0IHtnZXREeW5hbWljT2JqZWN0LCBhc3NldCwgY29yZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBkeW5hbWljID0gZ2V0RHluYW1pY09iamVjdChhc3NldC5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIikpO1xuICAgICAgICBjb25zdCBjdXJyZW50U3VwcGx5ID1cbiAgICAgICAgICAgIGR5bmFtaWMgJiYgZHluYW1pYy5zaXplID8gZHluYW1pYy5nZXQoXCJjdXJyZW50X3N1cHBseVwiKSA6IDA7XG4gICAgICAgIGNvbnN0IG1haW50ZW5hbmNlSW50ZXJ2YWwgPVxuICAgICAgICAgICAgY29yZSAmJiBjb3JlLnNpemVcbiAgICAgICAgICAgICAgICA/IGNvcmUuZ2V0SW4oW1wicGFyYW1ldGVyc1wiLCBcIm1haW50ZW5hbmNlX2ludGVydmFsXCJdKVxuICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgY29uc3QgYml0QXNzZXQgPSBhc3NldC5nZXQoXCJiaXRhc3NldFwiKS50b0pTKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXR0bGVkID0gYml0QXNzZXQuZm9yY2Vfc2V0dGxlZF92b2x1bWU7XG4gICAgICAgIGNvbnN0IG1heFNldHRsZW1lbnRWb2x1bWUgPVxuICAgICAgICAgICAgY3VycmVudFN1cHBseSAqXG4gICAgICAgICAgICAoYml0QXNzZXQub3B0aW9ucy5tYXhpbXVtX2ZvcmNlX3NldHRsZW1lbnRfdm9sdW1lIC8gMTAwMDApO1xuICAgICAgICBjb25zdCByZW1haW5pbmdWb2x1bWUgPSAhY3VycmVudFNldHRsZWRcbiAgICAgICAgICAgID8gbWF4U2V0dGxlbWVudFZvbHVtZVxuICAgICAgICAgICAgOiBtYXhTZXR0bGVtZW50Vm9sdW1lIC0gY3VycmVudFNldHRsZWQ7XG4gICAgICAgIGNvbnN0IHNldHRsZW1lbnREZWxheSA9IGJpdEFzc2V0Lm9wdGlvbnMuZm9yY2Vfc2V0dGxlbWVudF9kZWxheV9zZWM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXhTZXR0bGVtZW50Vm9sdW1lLFxuICAgICAgICAgICAgcmVtYWluaW5nVm9sdW1lLFxuICAgICAgICAgICAgbWFpbnRlbmFuY2VJbnRlcnZhbCxcbiAgICAgICAgICAgIHNldHRsZW1lbnREZWxheVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uQW1vdW50Q2hhbmdlZCh7YW1vdW50LCBhc3NldH0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YW1vdW50OiBhbW91bnR9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChlKSB7XG4gICAgICAgIGxldCB7YW1vdW50fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuXG4gICAgICAgIGFtb3VudCA9IHBhcnNlSW50KFxuICAgICAgICAgICAgYW1vdW50ICogTWF0aC5wb3coMTAsIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKVxuICAgICAgICApO1xuXG4gICAgICAgIHZhciB0ciA9IFdhbGxldEFwaS5uZXdfdHJhbnNhY3Rpb24oKTtcbiAgICAgICAgdHIuYWRkX3R5cGVfb3BlcmF0aW9uKFwiYXNzZXRfc2V0dGxlXCIsIHtcbiAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gV2FsbGV0RGIucHJvY2Vzc190cmFuc2FjdGlvbih0ciwgbnVsbCwgdHJ1ZSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhc3NldCBzZXR0bGUgcmVzdWx0OlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGlzcGF0Y2goYWNjb3VudF9pZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiYXNzZXQgc2V0dGxlIGVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIF91c2VNYXhWYWx1ZShhbW91bnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCAvIE1hdGgucG93KDEwLCB0aGlzLnByb3BzLmFzc2V0LmdldChcInByZWNpc2lvblwiKSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0LCBhY2NvdW50fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7YW1vdW50fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3B0aW9ucyA9XG4gICAgICAgICAgICBhc3NldCAmJiBhc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcIm9wdGlvbnNcIl0pXG4gICAgICAgICAgICAgICAgPyBhc3NldC5nZXRJbihbXCJiaXRhc3NldFwiLCBcIm9wdGlvbnNcIl0pLnRvSlMoKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICBsZXQgaXNHbG9iYWxTZXR0bGVkID1cbiAgICAgICAgICAgIGFzc2V0LmdldChcImJpdGFzc2V0XCIpLmdldChcInNldHRsZW1lbnRfZnVuZFwiKSA+IDAgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgIGlmICghaXNHbG9iYWxTZXR0bGVkKSB7XG4gICAgICAgICAgICBvZmZzZXQgPVxuICAgICAgICAgICAgICAgIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgIC5nZXQoXCJiaXRhc3NldFwiKVxuICAgICAgICAgICAgICAgICAgICAuZ2V0KFwib3B0aW9uc1wiKVxuICAgICAgICAgICAgICAgICAgICAuZ2V0KFwiZm9yY2Vfc2V0dGxlbWVudF9vZmZzZXRfcGVyY2VudFwiKSAvIDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgLy8gQ2hlY2sgaWYgZm9yY2Vfc2V0dGxlZF92b2x1bWUgZXhjZWVkcyBtYXhpbXVtX2ZvcmNlX3NldHRsZW1lbnRfdm9sdW1lXG4gICAgICAgIC8vIFJlcXVpcmVzIER5bmFtaWMgT2JqZWN0IGZvciBUb3RhbCBTdXBwbHlcbiAgICAgICAgLy8gdmFyIG1heFNldHRsZW1lbnRWb2x1bWUgPSBhc3NldC5nZXQoXCJiaXRhc3NldFwiKS5nZXQoXCJvcHRpb25zXCIpLmdldChcIm1heGltdW1fZm9yY2Vfc2V0dGxlbWVudF92b2x1bWVcIik7XG4gICAgICAgIC8vIHZhciBjdXJyZW50U2V0dGxlZCA9IGFzc2V0LmdldChcImJpdGFzc2V0XCIpLmdldChcImZvcmNlX3NldHRsZWRfdm9sdW1lXCIpO1xuXG4gICAgICAgIGxldCBhc3NldElEID0gYXNzZXQuZ2V0KFwiaWRcIik7XG5cbiAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpO1xuXG4gICAgICAgIGNvbnN0IHtuYW1lOiBhc3NldE5hbWUsIHByZWZpeH0gPSB1dGlscy5yZXBsYWNlTmFtZShhc3NldCk7XG4gICAgICAgIGNvbnN0IGFzc2V0RnVsbE5hbWUgPSAocHJlZml4ID8gcHJlZml4IDogXCJcIikgKyBhc3NldE5hbWU7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRCYWxhbmNlID0gbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VBbW91bnQgPSAwO1xuXG4gICAgICAgIGFjY291bnRfYmFsYW5jZXMgJiZcbiAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXMuZm9yRWFjaChiYWxhbmNlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2UpO1xuICAgICAgICAgICAgICAgIGlmICghYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmFsYW5jZU9iamVjdC5nZXQoXCJhc3NldF90eXBlXCIpID09PSBhc3NldElEKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCYWxhbmNlID0gYmFsYW5jZTtcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZUFtb3VudCA9IGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYmFsYW5jZVRleHQgPSAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAge2N1cnJlbnRCYWxhbmNlID8gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3VzZU1heFZhbHVlLmJpbmQodGhpcywgYmFsYW5jZUFtb3VudCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50IGJhbGFuY2U9e2N1cnJlbnRCYWxhbmNlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgXCIwIFwiICsgYXNzZXQuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgaXNGdW5kc1RvTG93ID0gZmFsc2U7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGFtb3VudCA+XG4gICAgICAgICAgICBiYWxhbmNlQW1vdW50IC8gTWF0aC5wb3coMTAsIHRoaXMucHJvcHMuYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlzRnVuZHNUb0xvdyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb290ZXIgPSBbXG4gICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgaXNGdW5kc1RvTG93XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAubGFja19mdW5kc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtcInN1Ym1pdFwifVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Z1bmRzVG9Mb3d9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuc2V0dGxlLnN1Ym1pdFwiKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD4sXG4gICAgICAgICAgICA8QnV0dG9uIGtleT17XCJjbG9zZVwifSBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLmNsb3NlXCIpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbWF4U2V0dGxlbWVudFZvbHVtZSxcbiAgICAgICAgICAgIHJlbWFpbmluZ1ZvbHVtZSxcbiAgICAgICAgICAgIHNldHRsZW1lbnREZWxheSxcbiAgICAgICAgICAgIG1haW50ZW5hbmNlSW50ZXJ2YWxcbiAgICAgICAgfSA9IHRoaXMuZ2V0U2V0dGxlbWVudEluZm8oKTtcblxuICAgICAgICBjb25zdCBlc3RpbWF0ZWREZWxheSA9ICFpc0dsb2JhbFNldHRsZWRcbiAgICAgICAgICAgID8gKHNldHRsZW1lbnREZWxheSArXG4gICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGFtb3VudCAvIG1heFNldHRsZW1lbnRWb2x1bWUpICpcbiAgICAgICAgICAgICAgICAgICAgICBtYWludGVuYW5jZUludGVydmFsKSAvXG4gICAgICAgICAgICAgIDM2MDBcbiAgICAgICAgICAgIDogMDtcblxuICAgICAgICBjb25zdCBpc1ByZWRpY3Rpb25NYXJrZXQgPSBhc3NldC5nZXRJbihbXG4gICAgICAgICAgICBcImJpdGFzc2V0XCIsXG4gICAgICAgICAgICBcImlzX3ByZWRpY3Rpb25fbWFya2V0XCJcbiAgICAgICAgXSk7XG5cbiAgICAgICAgbGV0IG1vZGFsQ29udGVudCA9IGlzUHJlZGljdGlvbk1hcmtldCA/IChcbiAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLnNldHRsZV9tYXJrZXRfcHJlZGljdGlvblwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgc2hvd0ljb25cbiAgICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge2lzR2xvYmFsU2V0dGxlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5zZXR0bGVfZGVsYXlfZ2xvYmFsbHlfc2V0dGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ljb25cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnNldHRsZV9kZWxheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91cnM6IG9wdGlvbnMuZm9yY2Vfc2V0dGxlbWVudF9kZWxheV9zZWMgLyAzNjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc3RpbWF0ZWREZWxheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLnNldHRsZS5kZWxheVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZXN0aW1hdGVkRGVsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJY29uXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8V29ydGhMZXNzU2V0dGxlbWVudFdhcm5pbmcgYXNzZXQ9e2Fzc2V0SUR9IC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgeyFpc0dsb2JhbFNldHRsZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2Uuc2V0dGxlX29mZnNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9e29mZnNldH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCIgbGF5b3V0PVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIm1vZGFsLnNldHRsZS5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFtb3VudENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXRJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17W2Fzc2V0SURdfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50ID4gcmVtYWluaW5nVm9sdW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1wibWFyZ2luLWJvdHRvbVwiOiBcIjBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7YW1vdW50ID4gcmVtYWluaW5nVm9sdW1lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjb2xvci1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIm1vZGFsLnNldHRsZS5tYXhfdm9sdW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXttYXhTZXR0bGVtZW50Vm9sdW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YXNzZXRGdWxsTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjb2xvci1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIm1vZGFsLnNldHRsZS5yZW1haW5pbmdfdm9sdW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZW1haW5pbmdWb2x1bWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldEZ1bGxOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwibW9kYWwuc2V0dGxlLnRpdGxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0RnVsbE5hbWVcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLnZpc2libGV9XG4gICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMubW9kYWxJZH1cbiAgICAgICAgICAgICAgICBmb290ZXI9eyFpc1ByZWRpY3Rpb25NYXJrZXQgPyBmb290ZXIgOiBudWxsfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLnByb3BzLmhpZGVNb2RhbH1cbiAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHJlZj1cInNldHRsZW1lbnRfbW9kYWxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttb2RhbENvbnRlbnR9XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTW9kYWxDb250ZW50ID0gQXNzZXRXcmFwcGVyKE1vZGFsQ29udGVudCwge1xuICAgIHByb3BOYW1lczogW1wiYXNzZXRcIiwgXCJjb3JlXCJdLFxuICAgIHdpdGhEeW5hbWljOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczoge2NvcmU6IFwiMi4wLjBcIn1cbn0pO1xuXG5jbGFzcyBTZXR0bGVNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPE1vZGFsQ29udGVudCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0bGVNb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4vQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4vQXNzZXROYW1lXCI7XHJcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqICBHaXZlbiBhIGJhc2UgYW5kIHF1b3RlIGFzc2V0LCByZW5kZXIgYSBsaW5rIHRvIHRoYXQgbWFya2V0XHJcbiAqXHJcbiAqICBFeHBlY3RlZCBQcm9wZXJ0aWVzOlxyXG4gKiAgICAgYmFzZTogIGFzc2V0IGlkLCB3aGljaCB3aWxsIGJlIGZldGNoZWQgZnJvbSB0aGUgQ2hhaW5TdG9yZVxyXG4gKiAgICAgcXVvdGU6IGVpdGhlciBhbiBhc3NldCBpZCBvciBhIGJhbGFuY2UgaWRcclxuICpcclxuICovXHJcblxyXG5jbGFzcyBNYXJrZXRMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2Jhc2UsIHF1b3RlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKGJhc2UuZ2V0KFwiaWRcIikgPT09IHF1b3RlLmdldChcImlkXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWFya2V0SUQgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIikgKyBcIl9cIiArIGJhc2UuZ2V0KFwic3ltYm9sXCIpO1xyXG4gICAgICAgIGxldCBtYXJrZXROYW1lID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfSAvPiAve1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtiYXNlLmdldChcInN5bWJvbFwiKX0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIHRvPXtgL21hcmtldC8ke21hcmtldElEfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBNYXJrZXRzQWN0aW9ucy5zd2l0Y2hNYXJrZXQoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21hcmtldE5hbWV9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5NYXJrZXRMaW5rID0gQXNzZXRXcmFwcGVyKE1hcmtldExpbmssIHtcclxuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxyXG4gICAgZGVmYXVsdFByb3BzOiB7YmFzZTogXCIxLjMuMFwifVxyXG59KTtcclxuXHJcbi8qXHJcblRoaXMgaGFuZ3MgdGhlIHBhZ2Ugb24gTWFya2V0TGluayBpbXBvcnQgd2l0aCBmaXJlZm94IDYyLjBcclxuXHJcbmNsYXNzIE9iamVjdFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBvYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtvYmplY3R9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgcXVvdGVBc3NldCA9IG9iamVjdC5oYXMoXCJhc3NldF90eXBlXCIpXHJcbiAgICAgICAgICAgID8gb2JqZWN0LmdldChcImFzc2V0X3R5cGVcIilcclxuICAgICAgICAgICAgOiBvYmplY3QuZ2V0KFwiaWRcIik7XHJcblxyXG4gICAgICAgIHJldHVybiA8TWFya2V0TGluayBxdW90ZT17cXVvdGVBc3NldH0gLz47XHJcbiAgICB9XHJcbn1cclxuT2JqZWN0V3JhcHBlciA9IEJpbmRUb0NoYWluU3RhdGUoT2JqZWN0V3JhcHBlcik7XHJcblxyXG5NYXJrZXRMaW5rLk9iamVjdFdyYXBwZXIgPSBPYmplY3RXcmFwcGVyO1xyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFya2V0TGluaztcclxuIiwiaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IHtBc3NldCwgUHJpY2V9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xuaW1wb3J0IGFzc2V0X3V0aWxzIGZyb20gXCIuLi8uLi9saWIvY29tbW9uL2Fzc2V0X3V0aWxzXCI7XG5cbmNvbnN0IHdpdGhTaG9ydEJhY2tpbmdBc3NldCA9IFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICAgIGNvbnN0IFdyYXBwZWRDb21wb25lbnRXaXRoU2hvcnRCYWNraW5nQXNzZXQgPSBBc3NldFdyYXBwZXIoXG4gICAgICAgIFdyYXBwZWRDb21wb25lbnQsXG4gICAgICAgIHtwcm9wTmFtZXM6IFtcInNob3J0QmFja2luZ0Fzc2V0XCJdfVxuICAgICk7XG4gICAgcmV0dXJuIEFzc2V0V3JhcHBlcihwcm9wcyA9PiAoXG4gICAgICAgIDxXcmFwcGVkQ29tcG9uZW50V2l0aFNob3J0QmFja2luZ0Fzc2V0XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBzaG9ydEJhY2tpbmdBc3NldD17cHJvcHMuYXNzZXQuZ2V0SW4oW1xuICAgICAgICAgICAgICAgIFwiYml0YXNzZXRcIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxuICAgICAgICAgICAgXSl9XG4gICAgICAgIC8+XG4gICAgKSk7XG59O1xuXG5jb25zdCB3aXRoV29ydGhMZXNzU2V0dGxlbWVudEZsYWcgPSBXcmFwcGVkQ29tcG9uZW50ID0+XG4gICAgd2l0aFNob3J0QmFja2luZ0Fzc2V0KFxuICAgICAgICBjbGFzcyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgICAgICAgICAgc3RhdGUgPSB7d29ydGhMZXNzU2V0dGxlbWVudDogdW5kZWZpbmVkfTtcbiAgICAgICAgICAgIHVwZGF0ZUZsYWcoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge2Fzc2V0LCBzaG9ydEJhY2tpbmdBc3NldH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0SWQgPSBhc3NldC5nZXQoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG9ydEJhY2tpbmdBc3NldElkID0gc2hvcnRCYWNraW5nQXNzZXQuZ2V0KFwiaWRcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBtYXliZSBwcm9wZXJseSBzdWJzY3JpYmUgdG8gbWFya2V0IGluc3RlYWQgb2YgY2FsbGluZyBhcGkgZGlyZWN0bHk/XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbE1hcmtldFByaWNlUHJvbWlzZSA9IEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAuZGJfYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMoXCJnZXRfb3JkZXJfYm9va1wiLCBbc2hvcnRCYWNraW5nQXNzZXRJZCwgYXNzZXRJZCwgMV0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG9yZGVyQm9vayA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJCb29rLmJpZHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBOdW1iZXIob3JkZXJCb29rLmJpZHNbMF0ucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZmVlZFByaWNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgZmFjdG9yID0gMTtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEhYXNzZXQuZ2V0KFwiYml0YXNzZXRcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQuZ2V0KFwiYml0YXNzZXRcIikuZ2V0KFwic2V0dGxlbWVudF9mdW5kXCIpID4gMFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBnbG9iYWxseSBzZXR0bGVkLCBmZWVkIHByaWNlID09IHNldHRsZW1lbnQgcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgZmVlZFByaWNlID0gYXNzZXQuZ2V0KFwiYml0YXNzZXRcIikuZ2V0KFwic2V0dGxlbWVudF9wcmljZVwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmZWVkUHJpY2UgPSBhc3NldF91dGlscy5leHRyYWN0UmF3RmVlZFByaWNlKGFzc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCJiaXRhc3NldFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcIm9wdGlvbnNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCJmb3JjZV9zZXR0bGVtZW50X29mZnNldF9wZXJjZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBmYWN0b3IgPSAxIC0gb2Zmc2V0IC8gMTAwMDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbFNldHRsZW1lbnRQcmljZSA9XG4gICAgICAgICAgICAgICAgICAgIG5ldyBQcmljZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBzaG9ydEJhY2tpbmdBc3NldElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZmVlZFByaWNlLmdldEluKFtcInF1b3RlXCIsIFwiYW1vdW50XCJdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVpY2lzaW9uOiBzaG9ydEJhY2tpbmdBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IGFzc2V0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBmZWVkUHJpY2UuZ2V0SW4oW1wiYmFzZVwiLCBcImFtb3VudFwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pLnRvUmVhbCgpICogZmFjdG9yO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogY29tcGFyZSBmcmFjdGlvbmFsIHByaWNlIGluc3RlYWQgb2YgcmVhbCBwcmljZVxuICAgICAgICAgICAgICAgIHJlYWxNYXJrZXRQcmljZVByb21pc2UudGhlbihyZWFsTWFya2V0UHJpY2UgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3J0aExlc3NTZXR0bGVtZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWxNYXJrZXRQcmljZSA+IHJlYWxTZXR0bGVtZW50UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRQcmljZTogcmVhbE1hcmtldFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlbWVudFByaWNlOiByZWFsU2V0dGxlbWVudFByaWNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGbGFnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGbGFnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHt3b3J0aExlc3NTZXR0bGVtZW50LCBtYXJrZXRQcmljZSwgc2V0dGxlbWVudFByaWNlfVxuICAgICAgICAgICAgICAgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3J0aExlc3NTZXR0bGVtZW50PXt3b3J0aExlc3NTZXR0bGVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0UHJpY2U9e21hcmtldFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGxlbWVudFByaWNlPXtzZXR0bGVtZW50UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhXb3J0aExlc3NTZXR0bGVtZW50RmxhZztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==