"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[0],{

/***/ 3052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2702);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2615);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1804);
/* harmony import */ var _stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2311);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2302);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_QuickTrade_SellReceive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3053);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2303);
/* harmony import */ var _QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3056);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(426);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2312);
/* harmony import */ var _Exchange_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2705);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2374);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(626);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2376);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2052);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_17__);






















class QuickTrade extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    const accountAssets = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getAssetsToSell)(props.currentAccount);
    this.state = {
      mounted: false,
      sub: "",
      sellAssetInput: "",
      sellAsset: null,
      sellAssets: accountAssets,
      sellAmount: "",
      sellImgName: "unknown",
      receiveAssetInput: "",
      receiveAsset: null,
      receiveAssets: accountAssets,
      receiveAmount: "",
      receiveImgName: "unknown",
      activeInput: "",
      activeAmountInput: "",
      lookupQuote: "",
      orders: [],
      orderView: "amount",
      fees: null,
      prices: null,
      isSubscribedToMarket: true
    };
    this.onSellAssetInputChange = this.onSellAssetInputChange.bind(this);
    this.onReceiveAssetInputChange = this.onReceiveAssetInputChange.bind(this);
    this.onSellAmountChange = this.onSellAmountChange.bind(this);
    this.onReceiveAmountChange = this.onReceiveAmountChange.bind(this);
    this.onSellImageError = this.onSellImageError.bind(this);
    this.onReceiveImageError = this.onReceiveImageError.bind(this);
    this.onReceiveAssetSearch = this.onReceiveAssetSearch.bind(this);
    this.onSwap = this.onSwap.bind(this);
    this.handleSubscriptionToggleChange = this.handleSubscriptionToggleChange.bind(this);
    this.hendleOrderView = this.hendleOrderView.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this._subToMarket = this._subToMarket.bind(this);
    this._checkAndUpdateMarketList = this._checkAndUpdateMarketList.bind(this);
    this.getAssetList = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_18__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_10__["default"].getAssetList.defer, 150);
  }

  static getDerivedStateFromProps(props, state) {
    let newState = {};

    if (props.assetToSell) {
      newState = {
        sellAssetInput: props.assetToSell.get("id"),
        sellAsset: props.assetToSell,
        sellImgName: props.assetToSell.get("symbol")
      };
    }

    if (props.assetToReceive) {
      newState = { ...newState,
        ...{
          receiveAssetInput: props.assetToReceive.get("id"),
          receiveAsset: props.assetToReceive,
          receiveImgName: props.assetToReceive.get("symbol")
        }
      };
    }

    return newState;
  }

  _routeTo(assetToSell, assetToReceive) {
    let sellRoute = assetToSell;
    let receiveRoute = assetToReceive;

    if (!assetToSell) {
      sellRoute = "";
    }

    if (!assetToReceive) {
      receiveRoute = "";
    }

    let pathName = "/instant-trade/" + sellRoute + "_" + receiveRoute;

    if (false) {}

    if (this.props.location.pathname !== pathName) {
      this.props.history.push(pathName);
    }
  }

  _areEqualAssets(asset1, asset2) {
    return this._isLoadedAsset(asset1) && this._isLoadedAsset(asset2) && asset1.get("id") === asset2.get("id");
  }

  _isLoadedAsset(asset) {
    return !!asset && !!asset.toJS;
  }

  _areAssetsGiven() {
    return this._isLoadedAsset(this.props.assetToSell) && this._isLoadedAsset(this.props.assetToReceive);
  }

  _haveAssetsChanged(prevProps) {
    if (this._isLoadedAsset(this.props.assetToSell) !== this._isLoadedAsset(prevProps.assetToSell)) {
      return true;
    }

    if (this._isLoadedAsset(this.props.assetToReceive) !== this._isLoadedAsset(prevProps.assetToReceive)) {
      return true;
    }

    if (!this._areEqualAssets(this.props.assetToSell, prevProps.assetToSell) || !this._areEqualAssets(this.props.assetToReceive, prevProps.assetToReceive)) {
      return true;
    }

    return false;
  }

  _hasMarketChanged(prevProps) {
    return JSON.stringify(prevProps.marketData) !== JSON.stringify(this.props.marketData);
  }

  componentDidUpdate(prevProps) {
    if (this._haveAssetsChanged(prevProps)) {
      this._assetsHaveChanged();
    } else {
      if (this._hasMarketChanged(prevProps)) {
        this._getOrders();
      }
    }

    if (this.props.searchAssets !== prevProps.searchAssets) {
      this.setState({
        activeSearch: true
      });
      let filteredAssets = this.props.searchAssets.toArray().filter(a => a.symbol.indexOf(this.state.lookupQuote) !== -1);

      this._checkAndUpdateMarketList(filteredAssets);
    }

    if (this.props.currentAccount !== prevProps.currentAccount) {
      const assets = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getAssetsToSell)(this.props.currentAccount);
      this.setState({
        sellAssets: assets,
        receiveAssets: assets
      });
    }
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });

    if (this._areAssetsGiven()) {
      this._assetsHaveChanged();
    }
  }

  componentWillUnmount() {
    const {
      sub
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId
    } = this.getAssetsDetails();

    if (sub) {
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].unSubscribeMarket(sellAssetId, receiveAssetId);
    }
  }

  async _subToMarket() {
    const {
      receiveAsset: baseAsset,
      sellAsset: quoteAsset,
      sub
    } = this.state;

    if (baseAsset && quoteAsset) {
      const {
        receiveAssetId: baseAssetId,
        sellAssetId: quoteAssetId
      } = this.getAssetsDetails();
      const {
        bucketSize,
        currentGroupOrderLimit
      } = this.props;

      if (sub) {
        let [qa, ba] = sub.split("_");

        if (qa === quoteAssetId && ba === baseAssetId) {
          return;
        }

        await actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].unSubscribeMarket(qa, ba);
      }

      await actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].subscribeMarket(baseAsset, quoteAsset, 3600, 0);
      this.setState({
        sub: `${quoteAssetId}_${baseAssetId}`
      }, () => {
        this.getAllPrices();
        this.getAllFees();
      });
    }
  }

  async getAllFees() {
    const {
      currentAccount
    } = this.props;
    const {
      sellAsset,
      receiveAsset
    } = this.state;

    if (sellAsset && receiveAsset) {
      const fees = await (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getFees)(receiveAsset, sellAsset, currentAccount);
      this.setState({
        fees
      });
    }
  }

  getAssetsDetails() {
    const {
      sellAsset,
      receiveAsset
    } = this.state;
    return {
      sellAssetId: sellAsset ? sellAsset.get("id") : null,
      receiveAssetId: receiveAsset ? receiveAsset.get("id") : null,
      sellAssetPrecision: sellAsset ? sellAsset.get("precision") : null,
      receiveAssetPrecision: receiveAsset ? receiveAsset.get("precision") : null,
      sellAssetSymbol: sellAsset ? sellAsset.get("symbol") : null,
      receiveAssetSymbol: receiveAsset ? receiveAsset.get("symbol") : null
    };
  }

  getAllPrices() {
    const {
      activeMarketHistory,
      feedPrice
    } = this.props;
    const prices = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getPrices)(activeMarketHistory, feedPrice);
    this.setState({
      prices
    });
  }

  _getOrders() {
    if (!this.state.isSubscribedToMarket) {
      console.log(this.props.marketData); // if the user wants to inspect current orders, pause updating

      return;
    }

    const {
      combinedBids
    } = this.props.marketData;
    const {
      sellAsset,
      receiveAsset,
      sellAmount,
      receiveAmount,
      activeInput
    } = this.state;
    const {
      sellAssetPrecision,
      receiveAssetPrecision
    } = this.getAssetsDetails();

    if (false) {}

    if (combinedBids && combinedBids.length) {
      if (sellAsset && receiveAsset) {
        switch (activeInput) {
          case "receiveAsset":
            if (sellAmount) {
              const orders = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getOrders)(sellAmount * 10 ** sellAssetPrecision, combinedBids, "sell");
              this.setState({
                orders,
                ordersUpdated: new Date()
              }, () => this.updateReceiveAmount());
            }

            break;

          case "sellAsset":
            if (receiveAmount) {
              const orders = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getOrders)(receiveAmount * 10 ** receiveAssetPrecision, combinedBids, "receive");
              this.setState({
                orders,
                ordersUpdated: new Date()
              }, () => this.updateSellAmount());
            }

            break;

          case "sell":
            if (sellAmount) {
              const orders = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getOrders)(sellAmount * 10 ** sellAssetPrecision, combinedBids, "sell");
              this.setState({
                orders,
                ordersUpdated: new Date()
              }, () => this.updateReceiveAmount());
            } else {
              this.setState({
                orders: [],
                receiveAmount: ""
              });
            }

            break;

          case "receive":
            if (receiveAmount) {
              const orders = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getOrders)(receiveAmount * 10 ** receiveAssetPrecision, combinedBids, "receive");
              this.setState({
                orders,
                ordersUpdated: new Date()
              }, () => this.updateSellAmount());
            } else {
              this.setState({
                orders: [],
                sellAmount: ""
              });
            }

            break;
        }
      }
    }
  }

  _assetsHaveChanged() {
    this._subToMarket();
  }

  async _setSellAsset(assetObjectIdOrSymbol, activeInput = "sellAsset", fireChanged = true) {
    let asset = null;

    if (typeof assetObjectIdOrSymbol === "string") {
      asset = await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.FetchChain)("getAsset", assetObjectIdOrSymbol);
    } else {
      asset = assetObjectIdOrSymbol;
    }

    if (false) {}

    this.setState({
      activeInput: activeInput
    }, () => {
      this._routeTo(asset.get("symbol"), !!this.props.assetToReceive ? this.props.assetToReceive.get("symbol") : "");
    });
  }

  async _setReceiveAsset(assetObjectIdOrSymbol, activeInput = "receiveAsset", fireChanged = true) {
    let asset = null;

    if (typeof assetObjectIdOrSymbol === "string") {
      asset = await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.FetchChain)("getAsset", assetObjectIdOrSymbol);
    } else {
      asset = assetObjectIdOrSymbol;
    }

    if (false) {}

    this.setState({
      activeInput: activeInput
    }, () => {
      this._routeTo(!!this.props.assetToSell ? this.props.assetToSell.get("symbol") : "", asset.get("symbol"));
    });
  }

  async _swapAssets(activeInput, fireChanged = true) {
    this.setState({
      sellAmount: activeInput === "sellAsset" ? "" : this.state.receiveAmount,
      receiveAmount: activeInput === "receiveAsset" ? "" : this.state.sellAmount,
      activeInput: activeInput
    }, () => {
      this._routeTo(this.state.receiveAsset.get("symbol"), this.state.sellAsset.get("symbol"));
    });
  }

  async onSellAssetInputChange(assetIdOrSymbol) {
    const {
      receiveAssetId
    } = this.getAssetsDetails();

    if (assetIdOrSymbol === receiveAssetId) {
      this._swapAssets("sellAsset");
    } else {
      this._setSellAsset(assetIdOrSymbol);
    }
  }

  async onReceiveAssetInputChange(assetIdOrSymbol) {
    const {
      sellAssetId
    } = this.getAssetsDetails();

    if (assetIdOrSymbol === sellAssetId) {
      this._swapAssets("receiveAsset");
    } else {
      this._setReceiveAsset(assetIdOrSymbol);
    }
  }

  onReceiveAssetSearch(e) {
    if (!this.state.mounted) return;
    let isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainValidation.is_valid_symbol_error(e, true);

    if (!isValidName) {
      /* Don't lookup invalid asset names */
      this.setState({
        receiveAsset: null,
        receiveAssetInput: e,
        activeSearch: false
      });
      return;
    }

    if (this.state.receiveAssetInput !== e) {
      this.timer && clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      (0,_Exchange_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_11__.lookupAssets)(e, true, this.getAssetList, this.setState);
    }, 100);
  }

  _checkAndUpdateMarketList(marketsList) {
    let receiveAssets = marketsList.map(asset => asset.id);
    clearInterval(this.intervalId);
    const {
      receiveAssetInput
    } = this.state;
    let asset = "";

    if (bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getAsset(receiveAssetInput)) {
      const assetId = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getAsset(receiveAssetInput).get("id");

      if (receiveAssets.includes(assetId)) {
        asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getAsset(receiveAssetInput).get("id");
      }
    }

    if (receiveAssets.length === 1) {
      asset = receiveAssets[0];
      const {
        currentAccount
      } = this.props;
      receiveAssets = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getAssetsToSell)(currentAccount);
      receiveAssets.push(asset);
    }

    if (receiveAssets.length === 0) {
      const {
        currentAccount
      } = this.props;
      receiveAssets = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getAssetsToSell)(currentAccount);
    }

    this.intervalId = setInterval(() => {
      clearInterval(this.intervalId);
      this.setState({
        receiveAssets,
        activeSearch: false
      }, () => {
        this._subToMarket();
      });
    }, 100);
  }

  onSellAmountChange(e) {
    if (!this.state.mounted) return;

    if (e.asset !== this.state.sellAssetInput) {
      this.onSellAssetInputChange(e.asset);
    }

    this.setState({
      sellAmount: e.amount,
      activeInput: "sell",
      activeAmountInput: "sell"
    }, () => {
      this._getOrders();
    });
  }

  onReceiveAmountChange(e) {
    if (!this.state.mounted) return;

    if (e.asset !== this.state.receiveAssetInput) {
      this.onReceiveAssetInputChange(e.asset);
    }

    this.setState({
      receiveAmount: e.amount,
      activeInput: "receive",
      activeAmountInput: "receive"
    }, () => {
      this._getOrders();
    });
  }

  onSellImageError() {
    this.setState({
      sellImgName: "unknown"
    });
  }

  onReceiveImageError() {
    this.setState({
      receiveImgName: "unknown"
    });
  }

  onSwap() {
    if (this.isSwappable()) {
      this._swapAssets("neither");
    }
  }

  handleSubscriptionToggleChange() {
    this.setState(state => {
      return {
        isSubscribedToMarket: !state.isSubscribedToMarket
      };
    });
  }

  hendleOrderView() {
    this.setState(state => {
      const orderView = state.orderView === "amount" ? "total" : "amount";
      return {
        orderView
      };
    });
  }

  handleSell() {
    const {
      currentAccount
    } = this.props;
    const {
      sellAmount,
      receiveAmount
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId,
      sellAssetPrecision,
      receiveAssetPrecision
    } = this.getAssetsDetails();
    const forSale = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.Asset({
      asset_id: sellAssetId,
      precision: sellAssetPrecision,
      amount: sellAmount * 10 ** sellAssetPrecision
    });
    const toReceive = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.Asset({
      asset_id: receiveAssetId,
      precision: receiveAssetPrecision,
      amount: receiveAmount * 10 ** receiveAssetPrecision
    });
    const expirationTime = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    const order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.LimitOrderCreate({
      for_sale: forSale,
      expiration: expirationTime,
      to_receive: toReceive,
      seller: currentAccount.get("id"),
      fee: {
        asset_id: "1.3.0",
        amount: 0
      },
      fill_or_kill: true
    });
    return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].createLimitOrder2(order).then(result => {
      if (result.error) {
        if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Notification.error({
          message: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("notifications.exchange_unknown_error_place_order", {
            amount: receiveAmount,
            symbol: receiveAssetId
          })
        });
      }
    }).catch(e => {
      console.error("order failed:", e);
    });
  }

  updateSellAmount() {
    const {
      orders,
      receiveAmount
    } = this.state;
    const {
      sellAssetPrecision,
      receiveAssetPrecision
    } = this.getAssetsDetails();

    if (orders.length === 1) {
      const sellAmount = (receiveAmount / orders[0].order.getPrice()).toFixed(sellAssetPrecision);
      this.setState({
        sellAmount
      });
      return;
    }

    if (orders.length > 1) {
      const lastOrder = orders.slice(-1)[0];
      const penultimateOrder = orders.slice(orders.length - 2, orders.length - 1)[0];
      const lastOrderToReceive = receiveAmount * 10 ** receiveAssetPrecision - penultimateOrder.order.total_for_sale.getAmount();
      const lastOrderForSale = lastOrderToReceive / lastOrder.order.getPrice() * 10 ** sellAssetPrecision / 10 ** receiveAssetPrecision;
      const sellAmount = ((penultimateOrder.order.total_to_receive.getAmount() + lastOrderForSale) / 10 ** sellAssetPrecision).toFixed(sellAssetPrecision);
      this.setState({
        sellAmount
      });
      return;
    }
  }

  updateReceiveAmount() {
    const {
      orders,
      sellAmount
    } = this.state;
    const {
      sellAssetPrecision,
      receiveAssetPrecision
    } = this.getAssetsDetails();

    if (orders.length === 1) {
      const receiveAmount = (orders[0].order.getPrice() * sellAmount).toFixed(receiveAssetPrecision);
      this.setState({
        receiveAmount
      });
      return;
    }

    if (orders.length > 1) {
      const lastOrder = orders.slice(-1)[0];
      const penultimateOrder = orders.slice(orders.length - 2, orders.length - 1)[0];
      const lastOrderForSale = sellAmount * 10 ** sellAssetPrecision - penultimateOrder.order.total_to_receive.getAmount();
      const lastOrderToReceive = lastOrderForSale * lastOrder.order.getPrice() * 10 ** receiveAssetPrecision / 10 ** sellAssetPrecision;
      const receiveAmount = ((penultimateOrder.order.total_for_sale.getAmount() + lastOrderToReceive) / 10 ** receiveAssetPrecision).toFixed(receiveAssetPrecision);
      this.setState({
        receiveAmount
      });
      return;
    }
  }

  isSwappable() {
    return this._areAssetsGiven();
  }

  _getTransactionFee(denominationAssetId) {
    const {
      fees,
      prices
    } = this.state;
    const {
      sellAssetId
    } = this.getAssetsDetails();

    if (fees) {
      if (fees.transactionFee[sellAssetId]) {
        if (!denominationAssetId || denominationAssetId === sellAssetId) {
          return fees.transactionFee[sellAssetId].fee.amount / 10 ** fees.transactionFee[sellAssetId].fee.precision;
        } else {
          return fees.transactionFee[sellAssetId].fee.amount / 10 ** fees.transactionFee[sellAssetId].fee.precision * prices.latestPrice;
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  _getMarketFee(denomindatedAssetId) {
    const {
      fees,
      prices,
      receiveAmount
    } = this.state;
    const {
      receiveAssetId
    } = this.getAssetsDetails();

    if (fees) {
      if (!denomindatedAssetId || denomindatedAssetId === receiveAssetId) {
        return fees.marketFee.baseMarketFee * receiveAmount / 10000;
      } else {
        return fees.marketFee.baseMarketFee * receiveAmount / prices.latestPrice / 10000;
      }
    } else {
      return 0;
    }
  }

  _getFeePercent(feeAmount, totalAmount) {
    return +totalAmount ? (+totalAmount + +feeAmount) / totalAmount - 1 : 0;
  }

  getDetails() {
    const {
      sub
    } = this.state;

    if (!sub) {
      return;
    }

    const {
      sellAmount,
      receiveAmount
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId,
      sellAssetPrecision,
      receiveAssetPrecision,
      receiveAssetSymbol
    } = this.getAssetsDetails();
    const priceSection = this.getPriceSection();
    const priceExtra = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.effective"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
      base_asset: sellAssetId,
      quote_asset: receiveAssetId,
      base_amount: sellAmount * 10 ** sellAssetPrecision,
      quote_amount: receiveAmount * 10 ** receiveAssetPrecision,
      noPopOver: true,
      force_direction: receiveAssetSymbol,
      noInvertTip: true
    }));
    const feeSection = this.getFeeSection();
    const ordersSection = this.getOrdersSection();
    const totalPercentFee = counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.effective") + " " + (this.getTotalPercentFee() * 100).toFixed(2);
    const amountOfOrders = this.state.orders.length;
    const ordersCaption = amountOfOrders < 2 ? counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.order") : counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.orders");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Collapse, {
      className: "asset-collapse",
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Collapse.Panel, {
      header: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.price"),
      extra: priceExtra
    }, priceSection), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Collapse.Panel, {
      header: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.fee"),
      extra: `${totalPercentFee}%`
    }, feeSection), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Collapse.Panel, {
      header: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.orders"),
      extra: amountOfOrders ? `${amountOfOrders} ${ordersCaption}` : "no orders"
    }, ordersSection));
  }

  showDetails() {
    const {
      sellAsset,
      receiveAsset,
      sellAmount,
      receiveAmount
    } = this.state;
    return sellAsset && receiveAsset && +sellAmount && +receiveAmount;
  }

  showFeedPrice() {
    const {
      sellAsset,
      receiveAsset
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId
    } = this.getAssetsDetails();
    const receiveCollateralAsset = receiveAsset.getIn(["bitasset", "options", "short_backing_asset"]);
    const sellCollateralAsset = sellAsset.getIn(["bitasset", "options", "short_backing_asset"]);
    return receiveCollateralAsset === sellAssetId || sellCollateralAsset === receiveAssetId;
  }

  getPriceSection() {
    const {
      prices,
      sellAmount,
      receiveAmount
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId,
      sellAssetPrecision,
      receiveAssetPrecision,
      receiveAssetSymbol
    } = this.getAssetsDetails();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Col, {
      span: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.your_price")), this.showFeedPrice() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.feed_price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.last_price"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Col, {
      span: 12,
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
      base_asset: sellAssetId,
      quote_asset: receiveAssetId,
      base_amount: sellAmount * 10 ** sellAssetPrecision,
      quote_amount: receiveAmount * 10 ** receiveAssetPrecision,
      noPopOver: true,
      force_direction: receiveAssetSymbol,
      noInvertTip: true
    })), this.showFeedPrice() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
      base_asset: sellAssetId,
      quote_asset: receiveAssetId,
      base_amount: 1 * 10 ** sellAssetPrecision,
      quote_amount: prices.feedPrice * 10 ** receiveAssetPrecision,
      noPopOver: true,
      force_direction: receiveAssetSymbol,
      noInvertTip: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
      base_asset: sellAssetId,
      quote_asset: receiveAssetId,
      base_amount: 1 * 10 ** sellAssetPrecision,
      quote_amount: prices.latestPrice * 10 ** receiveAssetPrecision,
      noPopOver: true,
      force_direction: receiveAssetSymbol,
      noInvertTip: true
    }))));
  }

  getFeeSection() {
    const {
      sellAmount,
      receiveAmount
    } = this.state;
    const {
      sellAssetPrecision,
      receiveAssetPrecision,
      sellAssetSymbol,
      receiveAssetSymbol
    } = this.getAssetsDetails();

    const transactionFee = this._getTransactionFee().toFixed(sellAssetPrecision);

    const transactionFeePercent = (this._getFeePercent(this._getTransactionFee(), sellAmount) * 100).toFixed(2);

    const marketFee = this._getMarketFee().toFixed(receiveAssetPrecision);

    const marketFeePercent = (this._getFeePercent(this._getMarketFee(), receiveAmount) * 100).toFixed(2);
    let [liqidityPenaltyMarket, liqidityPenaltyFeed] = this.getLiquidityPenalty();

    if (liqidityPenaltyMarket || liqidityPenaltyMarket === 0) {
      liqidityPenaltyMarket = (liqidityPenaltyMarket * 100).toFixed(2) + "%";
    } else {
      liqidityPenaltyMarket = "-";
    }

    if (liqidityPenaltyFeed || liqidityPenaltyFeed === 0) {
      liqidityPenaltyFeed = (liqidityPenaltyFeed * 100).toFixed(2) + "%";
    } else {
      liqidityPenaltyFeed = "-";
    }

    const liqidityPenalty = this.showFeedPrice() ? `${liqidityPenaltyMarket} / ${liqidityPenaltyFeed}` : liqidityPenaltyMarket;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Col, {
      span: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.liquidity_penalty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.market_fee"), ` ${marketFeePercent}%`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.transaction_fee"), ` ${transactionFeePercent}%`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Col, {
      span: 12,
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, liqidityPenalty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, marketFee, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_16__["default"], {
      name: receiveAssetSymbol,
      noTip: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, transactionFee, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_16__["default"], {
      name: sellAssetSymbol,
      noTip: true
    }))));
  }

  getOrdersSection() {
    const {
      orders,
      orderView
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId,
      sellAssetPrecision,
      sellAssetSymbol,
      receiveAssetSymbol
    } = this.getAssetsDetails();
    const dataSource = orders.map(item => {
      return {
        key: item.order.id,
        id: item.order.id,
        seller: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_13__["default"], {
          account: item.order.seller
        }),
        amount: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          onClick: this.hendleOrderView
        }, orderView === "amount" ? item.amount / 10 ** sellAssetPrecision : item.total_amount / 10 ** sellAssetPrecision),
        price: item.price
      };
    });
    const amount = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, orderView === "amount" ? counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.amount") : counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.total"), "\xA0(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_16__["default"], {
      name: sellAssetSymbol,
      noTip: true
    }), ")");
    const price = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.price"), "\xA0(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
      base_asset: sellAssetId,
      quote_asset: receiveAssetId,
      noPopOver: true,
      force_direction: receiveAssetSymbol,
      noInvertTip: true,
      hide_value: true
    }), ")");
    const columns = [{
      title: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.id"),
      dataIndex: "id",
      key: "id",
      width: "20%"
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.seller"),
      dataIndex: "seller",
      key: "seller",
      width: "20%"
    }, {
      title: amount,
      dataIndex: "amount",
      key: "amount",
      width: "30%"
    }, {
      title: price,
      dataIndex: "price",
      key: "price"
    }];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Switch, {
      style: {
        marginLeft: "0px"
      },
      onChange: this.handleSubscriptionToggleChange,
      checked: this.state.isSubscribedToMarket
    }), this.state.ordersUpdated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        float: "right"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_12___default().localize(this.state.ordersUpdated)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_17___default()), {
      onClick: this.handleSubscriptionToggleChange,
      content: "exchange.quick_trade_details.subscribe_to_market",
      style: {
        marginLeft: "10px",
        cursor: "pointer"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Table, {
      columns: columns,
      dataSource: dataSource,
      style: {
        width: "100%",
        marginTop: "10px"
      },
      pagination: dataSource.length > 5 ? {
        pageSize: 5
      } : false
    }));
  }

  getLiquidityPenalty() {
    const {
      prices,
      sellAmount,
      receiveAmount
    } = this.state;
    const price = receiveAmount / sellAmount;
    const marketPrice = prices.latestPrice;
    const feedPrice = prices.feedPrice;
    let liquidityFee1, liquidityFee2;

    if (price && marketPrice) {
      liquidityFee1 = Math.max(1 - price / marketPrice, 1 - marketPrice / price);
    }

    if (price && feedPrice) {
      liquidityFee2 = Math.max(1 - price / feedPrice, 1 - feedPrice / price);
    }

    return [liquidityFee1, liquidityFee2];
  }

  getTotalPercentFee() {
    const {
      sellAmount,
      receiveAmount
    } = this.state;

    const transactionFeePercent = this._getFeePercent(this._getTransactionFee(), sellAmount);

    const marketFeePercent = this._getFeePercent(this._getMarketFee(), receiveAmount);

    const liquidityFee = this.getLiquidityPenalty()[0];
    return transactionFeePercent + marketFeePercent + liquidityFee;
  }

  hasBalance() {
    const {
      sellAmount
    } = this.state;
    const {
      currentAccount
    } = this.props;
    const accountBalances = currentAccount.get("balances").toJS();
    const {
      sellAssetId,
      sellAssetPrecision
    } = this.getAssetsDetails();

    if (!accountBalances[sellAssetId]) {
      return false;
    }

    const balance = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getObject(accountBalances[sellAssetId]).get("balance");

    const transactionFee = this._getTransactionFee();

    return sellAmount * 10 ** sellAssetPrecision + transactionFee * 10 ** sellAssetPrecision < +balance;
  }

  render() {
    const {
      sellAssetInput,
      sellAssets,
      sellAmount,
      sellImgName,
      receiveAssetInput,
      receiveAssets,
      receiveAmount,
      receiveImgName,
      sub
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId
    } = this.getAssetsDetails();
    const Details = this.showDetails() ? this.getDetails() : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Card, {
      className: "quick-trade",
      style: {
        align: "center",
        display: "flex",
        justifyContent: "center",
        minWidth: "300px",
        marginTop: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_QuickTrade_SellReceive__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sellAssetInput: sellAssetInput,
      sellAsset: sellAssetId,
      sellAssets: sellAssets,
      sellAmount: sellAmount,
      sellImgName: sellImgName,
      onSellAssetInputChange: this.onSellAssetInputChange,
      onSellAmountChange: this.onSellAmountChange,
      receiveAssetInput: receiveAssetInput,
      receiveAsset: receiveAssetId,
      receiveAssets: receiveAssets,
      receiveAmount: receiveAmount,
      receiveImgName: receiveImgName,
      onReceiveAssetInputChange: this.onReceiveAssetInputChange,
      onReceiveAmountChange: this.onReceiveAmountChange,
      onReceiveAssetSearch: this.onReceiveAssetSearch,
      onSwap: this.onSwap,
      isSwappable: this.isSwappable()
    }), Details, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginTop: "1rem",
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
      title: !this.hasBalance() ? counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.no_balance") : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Button, {
      key: "sell",
      type: "primary",
      disabled: !this.showDetails() || !sub || !this.hasBalance(),
      onClick: this.handleSell
    }, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.sell")))));
  }

}

QuickTrade = (0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(QuickTrade, {
  listenTo() {
    return [_stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__["default"], _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    return {
      searchAssets: _stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().assets,
      assetsLoading: _stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().assetsLoading,
      marketData: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().marketData,
      activeMarketHistory: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().activeMarketHistory,
      bucketSize: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().bucketSize,
      currentGroupOrderLimit: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().currentGroupOrderLimit,
      feedPrice: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().feedPrice,
      marketLimitOrders: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().marketLimitOrders
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickTrade = (0,_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_1__.bindToCurrentAccount)(QuickTrade));

/***/ }),

/***/ 3051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2514);
/* harmony import */ var _QuickTrade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3052);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







class QuickTradeSubscriber extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    assetToSell: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    assetToReceive: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset
  };
  static defaultProps = {
    assetToSell: "USD",
    assetToReceive: "GPH"
  };

  render() {
    if (!!this.props.assetToReceive.get && !!this.props.assetToSell.get) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QuickTrade__WEBPACK_IMPORTED_MODULE_2__["default"], this.props);
    } else {
      return null;
    }
  }

}

const QuickTradeAssetResolver = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(QuickTradeSubscriber, {
  show_loader: true
});

class QuickTradeRouter extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let symbols = !!this.props.match.params.marketID ? this.props.match.params.marketID.toUpperCase().split("_") : ["", ""];

    if (symbols.length == 2 && !!symbols[0] && symbols[0] === symbols[1]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_1__["default"], {
        subtitle: "market_not_found_subtitle"
      });
    }

    if (false) {}

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuickTradeAssetResolver, _extends({}, this.props, {
      assetToSell: symbols[0] || "",
      assetToReceive: symbols.length == 2 ? symbols[1] : ""
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickTradeRouter);

/***/ }),

/***/ 3053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3054);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1813);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);







class SellReceive extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    sellAssetInput: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    sellAsset: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    sellAssets: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
    sellAmount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    sellImgName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    receiveAssetInput: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    receiveAsset: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    receiveAssets: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
    receiveAmount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    receiveImgName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    onSellAssetInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    onSellAmountChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    onReceiveAssetInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    onReceiveAmountChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    onSwap: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    isSwappable: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
  };

  render() {
    const smallScreen = window.innerWidth < 850 ? true : false;
    const {
      sellAssetInput,
      sellAsset,
      sellAssets,
      sellAmount,
      sellImgName,
      receiveAssetInput,
      receiveAsset,
      receiveAssets,
      receiveAmount,
      receiveImgName,
      onSellAssetInputChange,
      onSellAmountChange,
      onReceiveAssetInputChange,
      onReceiveAmountChange,
      onReceiveAssetSearch,
      onSwap,
      isSwappable
    } = this.props;
    const sellSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "exchange.sell",
      assetInput: sellAssetInput,
      asset: sellAsset,
      assets: sellAssets,
      amount: sellAmount,
      onAssetInputChange: onSellAssetInputChange,
      onAmountChange: onSellAmountChange,
      imgName: sellImgName,
      placeholder: "exchange.quick_trade_details.placeholder_sell"
    });
    const receiveSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "exchange.receive",
      assetInput: receiveAssetInput,
      asset: receiveAsset,
      assets: receiveAssets,
      amount: receiveAmount,
      onAssetInputChange: onReceiveAssetInputChange,
      onSearch: onReceiveAssetSearch,
      onAmountChange: onReceiveAmountChange,
      imgName: receiveImgName,
      placeholder: "exchange.quick_trade_details.placeholder_receive"
    });
    const btnStyle = {
      align: "center",
      display: "flex",
      justifyContent: "center"
    };

    if (!isSwappable) {
      btnStyle.opacity = 0.1;
    }

    const swapButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: btnStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "swap",
      size: "2x",
      style: !smallScreen ? {
        marginTop: "3rem"
      } : null,
      onClick: onSwap
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, smallScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Row, null, sellSelector), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Row, null, swapButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Row, null, receiveSelector)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Col, {
      span: 10
    }, sellSelector), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Col, {
      span: 4
    }, swapButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Col, {
      span: 10
    }, receiveSelector)));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellReceive);

/***/ }),

/***/ 3054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2048);
/* harmony import */ var _ChainSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3055);







class AmountSelector3 extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    label: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    assetInput: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    asset: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    assets: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
    amount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
    onAssetInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    onAmountChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    onImageError: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    onSearch: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    imgName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    placeholderAmount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
  };
  static defaultProps = {
    disabled: false,
    imgName: "unknown",
    placeholderAmount: "0.0",
    placeholder: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      imageError: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!!this.props.imgName && this.props.imgName !== prevProps.imgName && this.props.imgName !== "unknown") {
      this.setState({
        imageError: false
      });
    }
  }

  onImageError() {
    this.setState({
      imageError: true
    });
  }

  render() {
    let {
      label,
      assetInput,
      asset,
      assets,
      amount,
      onAssetInputChange,
      onSearch,
      onAmountChange,
      imgName,
      placeholder,
      placeholderAmount,
      tooltipText
    } = this.props;

    if (this.state.imageError) {
      imgName = "unknown";
    }

    const labelText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "left-label",
      component: "label",
      content: label,
      style: {
        fontSize: "1.2rem",
        margin: "0",
        padding: "0"
      }
    });
    const chainSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChainSelect__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    const image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      style: {
        width: "3.5rem",
        height: "3.5rem",
        marginTop: "0.5rem"
      },
      onError: this.onImageError.bind(this),
      src: `${""}asset-symbols/${imgName.toLowerCase()}.png`
    });
    const amountSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onChange: onAmountChange,
      amount: amount,
      asset: asset,
      assets: assets,
      placeholder: placeholderAmount,
      onSearch: onSearch
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "amount-selector-2",
      style: {
        minWidth: "3.5rem",
        width: "100%"
      }
    }, labelText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, {
      style: {
        minWidth: "18rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        minWidth: "3.5rem"
      },
      span: 5
    }, image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      span: 19
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      placement: "top",
      title: tooltipText
    }, chainSelector), amountSelector)));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmountSelector3);

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

/***/ 3055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








class ChainSelectView extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    chains: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
    selectStyle: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object) // all other props are passed to the Select component

  };
  static defaultProps = {
    chains: ["Graphene Blockchain"],
    placeholder: null,
    style: {},
    selectStyle: {}
  };

  render() {
    let {
      chains,
      selectStyle,
      style,
      placeholder,
      value,
      onDropdownVisibleChange,
      ...remProps
    } = this.props;
    const disableSelect = chains.filter(immutable__WEBPACK_IMPORTED_MODULE_4__.Map.isMap).length <= 1 && !onDropdownVisibleChange;

    if (!value) {
      value = chains[0];
    } // if onDropdownVisibleChange given we assume that lazy loading takes place


    const select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Select, _extends({
      onDropdownVisibleChange: onDropdownVisibleChange,
      showArrow: disableSelect ? false : undefined,
      style: selectStyle,
      placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: placeholder || "utility.asset_select_placeholder"
      }),
      value: value
    }, remProps, {
      optionFilterProp: "children",
      filterOption: (input, option) => option.key.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      disabled: disableSelect,
      notFoundContent: counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("global.not_found")
    }), chains.filter(immutable__WEBPACK_IMPORTED_MODULE_4__.Map.isMap).map(chain => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
        key: chain,
        value: chain
      }, chain);
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "chain-select",
      style: style
    }, select);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChainSelectView);

/***/ }),

/***/ 2705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lookupAssets": () => (/* binding */ lookupAssets),
/* harmony export */   "assetFilter": () => (/* binding */ assetFilter),
/* harmony export */   "fetchIssuerName": () => (/* binding */ fetchIssuerName)
/* harmony export */ });
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2058);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(426);



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

/***/ 3056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrders": () => (/* binding */ getOrders),
/* harmony export */   "getPrices": () => (/* binding */ getPrices),
/* harmony export */   "getFees": () => (/* binding */ getFees),
/* harmony export */   "getAssetsToSell": () => (/* binding */ getAssetsToSell)
/* harmony export */ });
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(596);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(426);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(625);


 // Returns a list of dicts with keys id, seller amount and price and respective values

function getOrders(amount, orders, whatAmount) {
  const matchedOrders = [];
  let totalAmount;
  orders.sort((a, b) => {
    return b.getPrice() - a.getPrice(); // getPrice === _real_price
  });

  for (let i = 0; i < orders.length; i++) {
    if (matchedOrders.length) {
      matchedOrders.forEach(({
        order
      }) => {
        totalAmount = whatAmount === "receive" ? order.total_for_sale.getAmount() : order.total_to_receive.getAmount();
      });

      if (totalAmount >= amount) {
        break;
      } else {
        matchedOrders.push({
          order: orders[i],
          amount: orders[i].amountToReceive().amount,
          total_amount: orders[i].total_to_receive.amount,
          price: orders[i].getPrice()
        });
      }
    } else {
      matchedOrders.push({
        order: orders[i],
        amount: orders[i].amountToReceive().amount,
        total_amount: orders[i].total_to_receive.amount,
        price: orders[i].getPrice()
      });
    }
  }

  return matchedOrders;
} // Returns a dict with keys feedPrice and lastPrice


function getPrices(activeMarketHistory, feedPrice) {
  let latestPrice;

  if (activeMarketHistory.size) {
    const latest_two = activeMarketHistory.take(2);
    const latest = latest_two.first();
    latestPrice = latest.getPrice();
  } // feed price === null if not a bitasset market


  return {
    latestPrice: latestPrice ? latestPrice : null,
    feedPrice: feedPrice ? feedPrice.toReal() : feedPrice
  };
} // Returns a list of asset ids that the user can sell


function getAssetsToSell(account) {
  let assetTypes = [];

  if (!(account && account.get("balances"))) {
    return assetTypes;
  }

  let accountBalances = account.get("balances").toJS();
  assetTypes = Object.keys(accountBalances).sort(common_utils__WEBPACK_IMPORTED_MODULE_0__["default"].sortID);

  for (let key in accountBalances) {
    let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(accountBalances[key]);

    if (balanceObject && balanceObject.get("balance") === 0) {
      assetTypes.splice(assetTypes.indexOf(key), 1);
    }
  }

  return assetTypes;
} // Returns a dict with keys liquidityPenalty, marketFee and transactionFee, input is selected assets and amounts


async function getFees(baseAsset, quoteAsset, currentAccount) {
  const baseMarketFeePercent = baseAsset.getIn(["options", "market_fee_percent"]) / 100 + "%";
  const quoteMarketFeePercent = quoteAsset.getIn(["options", "market_fee_percent"]) / 100 + "%";
  const baseMarketFee = baseAsset.getIn(["options", "market_fee_percent"]);
  const quoteMarketFee = quoteAsset.getIn(["options", "market_fee_percent"]);
  const trxFee = await checkFeeStatus([baseAsset, quoteAsset], currentAccount);
  return {
    marketFee: {
      baseMarketFeePercent,
      quoteMarketFeePercent,
      baseMarketFee,
      quoteMarketFee
    },
    transactionFee: trxFee
  };
}

async function checkFeeStatus(assets = [], account) {
  let feeStatus = {};
  let p = [];
  assets.forEach(a => {
    p.push((0,common_trxHelper__WEBPACK_IMPORTED_MODULE_2__.checkFeeStatusAsync)({
      accountID: account.get("id"),
      feeID: a.get("id"),
      type: "limit_order_create"
    }));
  });
  return Promise.all(p).then(status => {
    assets.forEach((a, idx) => {
      feeStatus[a.get("id")] = status[idx];
    });
    return feeStatus;
  }).catch(err => {
    console.error("checkFeeStatusAsync error", err);
    return feeStatus;
  });
}



/***/ }),

/***/ 2702:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1693);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2703);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1933);




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wait) || 0;
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }

  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);


/***/ }),

/***/ 2703:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1705);


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tUcmFkZS4xMGU0MmE2ZGU4Njk4NDE3YjBmZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFJQTtBQUNBOztBQUNBO0FBSUE7QUFDQTs7QUFDQTtBQVVBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQU1BO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVVBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBRkE7O0FBSUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFNQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQU1BOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUNBO0FBMUVBO0FBNEVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFLQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUlBO0FBRUE7QUFEQTtBQUlBO0FBTUE7QUFFQTs7QUFFQTtBQUtBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBR0E7QUFFQTtBQURBO0FBSUE7QUFNQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFMQTtBQVFBO0FBSUE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBO0FBWUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFJQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUtBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQVlBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBS0E7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBRUE7QUFBQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBVkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQWVBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7O0FBT0E7O0FBR0E7O0FBR0E7O0FBQ0E7QUFJQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFYQTtBQWFBO0FBRUE7QUFVQTtBQUFBO0FBQUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFEQTtBQU5BO0FBY0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBQ0E7QUFJQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBSUE7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBRkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBcUJBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBS0E7QUFSQTtBQWdCQTs7QUFwd0NBOztBQXV3Q0E7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFWQTtBQVlBOztBQWpCQTtBQXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbDBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFqQkE7O0FBb0JBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTs7QUFHQTtBQUdBO0FBQ0E7QUFIQTtBQU1BOztBQWxCQTs7QUFxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFvQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFLQTtBQVZBO0FBZUE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTs7QUFuSEE7O0FBc0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTs7QUFlQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFZQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFRQTs7QUExSUE7O0FBNklBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBCQTtBQXVCQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTs7QUFaQTtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBOztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQVhBO0FBYUE7QUFDQTtBQUdBO0FBQ0E7QUFsQkE7QUFxQkE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7O0FBdkVBOztBQTBFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBUEE7QUFTQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1F1aWNrVHJhZGUvUXVpY2tUcmFkZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvUXVpY2tUcmFkZS9RdWlja1RyYWRlUm91dGVyLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1NlbGxSZWNlaXZlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yMy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DdXJyZW50QWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9DaGFpblNlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvTWFya2V0UGlja2VySGVscGVycy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1F1aWNrVHJhZGVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL25vdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2JpbmRUb0N1cnJlbnRBY2NvdW50fSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DdXJyZW50QWNjb3VudFwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9Bc3NldFN0b3JlXCI7XHJcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICAgIENhcmQsXHJcbiAgICBDb2xsYXBzZSxcclxuICAgIFJvdyxcclxuICAgIENvbCxcclxuICAgIFRhYmxlLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgU3dpdGNoLFxyXG4gICAgVG9vbHRpcFxyXG59IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IFNlbGxSZWNlaXZlIGZyb20gXCJjb21wb25lbnRzL1F1aWNrVHJhZGUvU2VsbFJlY2VpdmVcIjtcclxuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBnZXRBc3NldHNUb1NlbGwsXHJcbiAgICBnZXRQcmljZXMsXHJcbiAgICBnZXRPcmRlcnMsXHJcbiAgICBnZXRGZWVzXHJcbn0gZnJvbSBcIi4vUXVpY2tUcmFkZUhlbHBlclwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmUsIEZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XHJcbmltcG9ydCB7Q2hhaW5WYWxpZGF0aW9ufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHtsb29rdXBBc3NldHN9IGZyb20gXCIuLi9FeGNoYW5nZS9NYXJrZXRQaWNrZXJIZWxwZXJzXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XHJcbmltcG9ydCB7QXNzZXQsIExpbWl0T3JkZXJDcmVhdGV9IGZyb20gXCJjb21tb24vTWFya2V0Q2xhc3Nlc1wiO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkUHJpY2UgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkUHJpY2VcIjtcclxuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgUXVpY2tUcmFkZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50QXNzZXRzID0gZ2V0QXNzZXRzVG9TZWxsKHByb3BzLmN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtb3VudGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc3ViOiBcIlwiLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRJbnB1dDogXCJcIixcclxuICAgICAgICAgICAgc2VsbEFzc2V0OiBudWxsLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRzOiBhY2NvdW50QXNzZXRzLFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICBzZWxsSW1nTmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElucHV0OiBcIlwiLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHM6IGFjY291bnRBc3NldHMsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVJbWdOYW1lOiBcInVua25vd25cIixcclxuICAgICAgICAgICAgYWN0aXZlSW5wdXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGFjdGl2ZUFtb3VudElucHV0OiBcIlwiLFxyXG4gICAgICAgICAgICBsb29rdXBRdW90ZTogXCJcIixcclxuICAgICAgICAgICAgb3JkZXJzOiBbXSxcclxuICAgICAgICAgICAgb3JkZXJWaWV3OiBcImFtb3VudFwiLFxyXG4gICAgICAgICAgICBmZWVzOiBudWxsLFxyXG4gICAgICAgICAgICBwcmljZXM6IG51bGwsXHJcbiAgICAgICAgICAgIGlzU3Vic2NyaWJlZFRvTWFya2V0OiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uU2VsbEFzc2V0SW5wdXRDaGFuZ2UgPSB0aGlzLm9uU2VsbEFzc2V0SW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2UgPSB0aGlzLm9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5vblNlbGxBbW91bnRDaGFuZ2UgPSB0aGlzLm9uU2VsbEFtb3VudENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZWNlaXZlQW1vdW50Q2hhbmdlID0gdGhpcy5vblJlY2VpdmVBbW91bnRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU2VsbEltYWdlRXJyb3IgPSB0aGlzLm9uU2VsbEltYWdlRXJyb3IuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVjZWl2ZUltYWdlRXJyb3IgPSB0aGlzLm9uUmVjZWl2ZUltYWdlRXJyb3IuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVjZWl2ZUFzc2V0U2VhcmNoID0gdGhpcy5vblJlY2VpdmVBc3NldFNlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Td2FwID0gdGhpcy5vblN3YXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1YnNjcmlwdGlvblRvZ2dsZUNoYW5nZSA9IHRoaXMuaGFuZGxlU3Vic2NyaXB0aW9uVG9nZ2xlQ2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuaGVuZGxlT3JkZXJWaWV3ID0gdGhpcy5oZW5kbGVPcmRlclZpZXcuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGwgPSB0aGlzLmhhbmRsZVNlbGwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9zdWJUb01hcmtldCA9IHRoaXMuX3N1YlRvTWFya2V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tBbmRVcGRhdGVNYXJrZXRMaXN0ID0gdGhpcy5fY2hlY2tBbmRVcGRhdGVNYXJrZXRMaXN0LmJpbmQoXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ2V0QXNzZXRMaXN0ID0gZGVib3VuY2UoQXNzZXRBY3Rpb25zLmdldEFzc2V0TGlzdC5kZWZlciwgMTUwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHt9O1xyXG4gICAgICAgIGlmIChwcm9wcy5hc3NldFRvU2VsbCkge1xyXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHNlbGxBc3NldElucHV0OiBwcm9wcy5hc3NldFRvU2VsbC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHNlbGxBc3NldDogcHJvcHMuYXNzZXRUb1NlbGwsXHJcbiAgICAgICAgICAgICAgICBzZWxsSW1nTmFtZTogcHJvcHMuYXNzZXRUb1NlbGwuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wcy5hc3NldFRvUmVjZWl2ZSkge1xyXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLm5ld1N0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldElucHV0OiBwcm9wcy5hc3NldFRvUmVjZWl2ZS5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXQ6IHByb3BzLmFzc2V0VG9SZWNlaXZlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVJbWdOYW1lOiBwcm9wcy5hc3NldFRvUmVjZWl2ZS5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIF9yb3V0ZVRvKGFzc2V0VG9TZWxsLCBhc3NldFRvUmVjZWl2ZSkge1xyXG4gICAgICAgIGxldCBzZWxsUm91dGUgPSBhc3NldFRvU2VsbDtcclxuICAgICAgICBsZXQgcmVjZWl2ZVJvdXRlID0gYXNzZXRUb1JlY2VpdmU7XHJcbiAgICAgICAgaWYgKCFhc3NldFRvU2VsbCkge1xyXG4gICAgICAgICAgICBzZWxsUm91dGUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFzc2V0VG9SZWNlaXZlKSB7XHJcbiAgICAgICAgICAgIHJlY2VpdmVSb3V0ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXRoTmFtZSA9IFwiL2luc3RhbnQtdHJhZGUvXCIgKyBzZWxsUm91dGUgKyBcIl9cIiArIHJlY2VpdmVSb3V0ZTtcclxuICAgICAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIFwiX3JvdXRlVG86IFwiLFxyXG4gICAgICAgICAgICAgICAgcGF0aE5hbWUsXHJcbiAgICAgICAgICAgICAgICBcIiBvbGQ6IFwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gcGF0aE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2gocGF0aE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfYXJlRXF1YWxBc3NldHMoYXNzZXQxLCBhc3NldDIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KGFzc2V0MSkgJiZcclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldChhc3NldDIpICYmXHJcbiAgICAgICAgICAgIGFzc2V0MS5nZXQoXCJpZFwiKSA9PT0gYXNzZXQyLmdldChcImlkXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfaXNMb2FkZWRBc3NldChhc3NldCkge1xyXG4gICAgICAgIHJldHVybiAhIWFzc2V0ICYmICEhYXNzZXQudG9KUztcclxuICAgIH1cclxuXHJcbiAgICBfYXJlQXNzZXRzR2l2ZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldCh0aGlzLnByb3BzLmFzc2V0VG9TZWxsKSAmJlxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KHRoaXMucHJvcHMuYXNzZXRUb1JlY2VpdmUpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGF2ZUFzc2V0c0NoYW5nZWQocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KHRoaXMucHJvcHMuYXNzZXRUb1NlbGwpICE9PVxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KHByZXZQcm9wcy5hc3NldFRvU2VsbClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldCh0aGlzLnByb3BzLmFzc2V0VG9SZWNlaXZlKSAhPT1cclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldChwcmV2UHJvcHMuYXNzZXRUb1JlY2VpdmUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICF0aGlzLl9hcmVFcXVhbEFzc2V0cyhcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRUb1NlbGwsXHJcbiAgICAgICAgICAgICAgICBwcmV2UHJvcHMuYXNzZXRUb1NlbGxcclxuICAgICAgICAgICAgKSB8fFxyXG4gICAgICAgICAgICAhdGhpcy5fYXJlRXF1YWxBc3NldHMoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0VG9SZWNlaXZlLFxyXG4gICAgICAgICAgICAgICAgcHJldlByb3BzLmFzc2V0VG9SZWNlaXZlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFzTWFya2V0Q2hhbmdlZChwcmV2UHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMubWFya2V0RGF0YSkgIT09XHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMubWFya2V0RGF0YSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAodGhpcy5faGF2ZUFzc2V0c0NoYW5nZWQocHJldlByb3BzKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hc3NldHNIYXZlQ2hhbmdlZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNNYXJrZXRDaGFuZ2VkKHByZXZQcm9wcykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldE9yZGVycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaEFzc2V0cyAhPT0gcHJldlByb3BzLnNlYXJjaEFzc2V0cykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVTZWFyY2g6IHRydWV9KTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkQXNzZXRzID0gdGhpcy5wcm9wcy5zZWFyY2hBc3NldHNcclxuICAgICAgICAgICAgICAgIC50b0FycmF5KClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiBhLnN5bWJvbC5pbmRleE9mKHRoaXMuc3RhdGUubG9va3VwUXVvdGUpICE9PSAtMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQW5kVXBkYXRlTWFya2V0TGlzdChmaWx0ZXJlZEFzc2V0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50ICE9PSBwcmV2UHJvcHMuY3VycmVudEFjY291bnQpIHtcclxuICAgICAgICAgICAgY29uc3QgYXNzZXRzID0gZ2V0QXNzZXRzVG9TZWxsKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGxBc3NldHM6IGFzc2V0cyxcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldHM6IGFzc2V0c1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1vdW50ZWQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5fYXJlQXNzZXRzR2l2ZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hc3NldHNIYXZlQ2hhbmdlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7c3VifSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldElkLCByZWNlaXZlQXNzZXRJZH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnVuU3Vic2NyaWJlTWFya2V0KHNlbGxBc3NldElkLCByZWNlaXZlQXNzZXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIF9zdWJUb01hcmtldCgpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldDogYmFzZUFzc2V0LFxyXG4gICAgICAgICAgICBzZWxsQXNzZXQ6IHF1b3RlQXNzZXQsXHJcbiAgICAgICAgICAgIHN1YlxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmIChiYXNlQXNzZXQgJiYgcXVvdGVBc3NldCkge1xyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRJZDogYmFzZUFzc2V0SWQsXHJcbiAgICAgICAgICAgICAgICBzZWxsQXNzZXRJZDogcXVvdGVBc3NldElkXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICAgICAgY29uc3Qge2J1Y2tldFNpemUsIGN1cnJlbnRHcm91cE9yZGVyTGltaXR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtxYSwgYmFdID0gc3ViLnNwbGl0KFwiX1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChxYSA9PT0gcXVvdGVBc3NldElkICYmIGJhID09PSBiYXNlQXNzZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF3YWl0IE1hcmtldHNBY3Rpb25zLnVuU3Vic2NyaWJlTWFya2V0KHFhLCBiYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgTWFya2V0c0FjdGlvbnMuc3Vic2NyaWJlTWFya2V0KFxyXG4gICAgICAgICAgICAgICAgYmFzZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgcXVvdGVBc3NldCxcclxuICAgICAgICAgICAgICAgIDM2MDAsXHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViOiBgJHtxdW90ZUFzc2V0SWR9XyR7YmFzZUFzc2V0SWR9YFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFByaWNlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsRmVlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRBbGxGZWVzKCkge1xyXG4gICAgICAgIGNvbnN0IHtjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXQsIHJlY2VpdmVBc3NldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmIChzZWxsQXNzZXQgJiYgcmVjZWl2ZUFzc2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZlZXMgPSBhd2FpdCBnZXRGZWVzKHJlY2VpdmVBc3NldCwgc2VsbEFzc2V0LCBjdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZmVlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXNzZXRzRGV0YWlscygpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0LCByZWNlaXZlQXNzZXR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJZDogc2VsbEFzc2V0ID8gc2VsbEFzc2V0LmdldChcImlkXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SWQ6IHJlY2VpdmVBc3NldCA/IHJlY2VpdmVBc3NldC5nZXQoXCJpZFwiKSA6IG51bGwsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbjogc2VsbEFzc2V0ID8gc2VsbEFzc2V0LmdldChcInByZWNpc2lvblwiKSA6IG51bGwsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvbjogcmVjZWl2ZUFzc2V0XHJcbiAgICAgICAgICAgICAgICA/IHJlY2VpdmVBc3NldC5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICAgICAgICAgICAgIDogbnVsbCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0U3ltYm9sOiBzZWxsQXNzZXQgPyBzZWxsQXNzZXQuZ2V0KFwic3ltYm9sXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0U3ltYm9sOiByZWNlaXZlQXNzZXQgPyByZWNlaXZlQXNzZXQuZ2V0KFwic3ltYm9sXCIpIDogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsUHJpY2VzKCkge1xyXG4gICAgICAgIGNvbnN0IHthY3RpdmVNYXJrZXRIaXN0b3J5LCBmZWVkUHJpY2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBwcmljZXMgPSBnZXRQcmljZXMoYWN0aXZlTWFya2V0SGlzdG9yeSwgZmVlZFByaWNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcHJpY2VzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldE9yZGVycygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNTdWJzY3JpYmVkVG9NYXJrZXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5tYXJrZXREYXRhKTtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIHVzZXIgd2FudHMgdG8gaW5zcGVjdCBjdXJyZW50IG9yZGVycywgcGF1c2UgdXBkYXRpbmdcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7Y29tYmluZWRCaWRzfSA9IHRoaXMucHJvcHMubWFya2V0RGF0YTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0LFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50LFxyXG4gICAgICAgICAgICByZWNlaXZlQW1vdW50LFxyXG4gICAgICAgICAgICBhY3RpdmVJbnB1dFxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJfZ2V0T3JkZXJzXCIsIHRoaXMucHJvcHMubWFya2V0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb21iaW5lZEJpZHMgJiYgY29tYmluZWRCaWRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsbEFzc2V0ICYmIHJlY2VpdmVBc3NldCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhY3RpdmVJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZWNlaXZlQXNzZXRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGxBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVycyA9IGdldE9yZGVycyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQmlkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyc1VwZGF0ZWQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlUmVjZWl2ZUFtb3VudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZWxsQXNzZXRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY2VpdmVBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVycyA9IGdldE9yZGVycyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50ICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQmlkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY2VpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyc1VwZGF0ZWQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlU2VsbEFtb3VudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzZWxsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxsQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlcnMgPSBnZXRPcmRlcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsbEFtb3VudCAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEJpZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnNVcGRhdGVkOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZVJlY2VpdmVBbW91bnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlY2VpdmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY2VpdmVBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVycyA9IGdldE9yZGVycyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50ICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQmlkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY2VpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyc1VwZGF0ZWQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlU2VsbEFtb3VudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxsQW1vdW50OiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfYXNzZXRzSGF2ZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfc2V0U2VsbEFzc2V0KFxyXG4gICAgICAgIGFzc2V0T2JqZWN0SWRPclN5bWJvbCxcclxuICAgICAgICBhY3RpdmVJbnB1dCA9IFwic2VsbEFzc2V0XCIsXHJcbiAgICAgICAgZmlyZUNoYW5nZWQgPSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgYXNzZXQgPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXNzZXRPYmplY3RJZE9yU3ltYm9sID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gYXdhaXQgRmV0Y2hDaGFpbihcImdldEFzc2V0XCIsIGFzc2V0T2JqZWN0SWRPclN5bWJvbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXNzZXQgPSBhc3NldE9iamVjdElkT3JTeW1ib2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiX3NldFNlbGxBc3NldFwiLCBhc3NldE9iamVjdElkT3JTeW1ib2wsIGFzc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0OiBhY3RpdmVJbnB1dFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LmdldChcInN5bWJvbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuYXNzZXRUb1JlY2VpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFzc2V0VG9SZWNlaXZlLmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIF9zZXRSZWNlaXZlQXNzZXQoXHJcbiAgICAgICAgYXNzZXRPYmplY3RJZE9yU3ltYm9sLFxyXG4gICAgICAgIGFjdGl2ZUlucHV0ID0gXCJyZWNlaXZlQXNzZXRcIixcclxuICAgICAgICBmaXJlQ2hhbmdlZCA9IHRydWVcclxuICAgICkge1xyXG4gICAgICAgIGxldCBhc3NldCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhc3NldE9iamVjdElkT3JTeW1ib2wgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgYXNzZXQgPSBhd2FpdCBGZXRjaENoYWluKFwiZ2V0QXNzZXRcIiwgYXNzZXRPYmplY3RJZE9yU3ltYm9sKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhc3NldCA9IGFzc2V0T2JqZWN0SWRPclN5bWJvbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJfc2V0UmVjZWl2ZUFzc2V0XCIsIGFzc2V0T2JqZWN0SWRPclN5bWJvbCwgYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dDogYWN0aXZlSW5wdXRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVUbyhcclxuICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuYXNzZXRUb1NlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmFzc2V0VG9TZWxsLmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfc3dhcEFzc2V0cyhhY3RpdmVJbnB1dCwgZmlyZUNoYW5nZWQgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsbEFtb3VudDpcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dCA9PT0gXCJzZWxsQXNzZXRcIiA/IFwiXCIgOiB0aGlzLnN0YXRlLnJlY2VpdmVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0ID09PSBcInJlY2VpdmVBc3NldFwiID8gXCJcIiA6IHRoaXMuc3RhdGUuc2VsbEFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0OiBhY3RpdmVJbnB1dFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmVjZWl2ZUFzc2V0LmdldChcInN5bWJvbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGxBc3NldC5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uU2VsbEFzc2V0SW5wdXRDaGFuZ2UoYXNzZXRJZE9yU3ltYm9sKSB7XHJcbiAgICAgICAgY29uc3Qge3JlY2VpdmVBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG5cclxuICAgICAgICBpZiAoYXNzZXRJZE9yU3ltYm9sID09PSByZWNlaXZlQXNzZXRJZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zd2FwQXNzZXRzKFwic2VsbEFzc2V0XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldFNlbGxBc3NldChhc3NldElkT3JTeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvblJlY2VpdmVBc3NldElucHV0Q2hhbmdlKGFzc2V0SWRPclN5bWJvbCkge1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXRJZH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuXHJcbiAgICAgICAgaWYgKGFzc2V0SWRPclN5bWJvbCA9PT0gc2VsbEFzc2V0SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3dhcEFzc2V0cyhcInJlY2VpdmVBc3NldFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRSZWNlaXZlQXNzZXQoYXNzZXRJZE9yU3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWNlaXZlQXNzZXRTZWFyY2goZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5tb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGlzVmFsaWROYW1lID0gIUNoYWluVmFsaWRhdGlvbi5pc192YWxpZF9zeW1ib2xfZXJyb3IoZSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkTmFtZSkge1xyXG4gICAgICAgICAgICAvKiBEb24ndCBsb29rdXAgaW52YWxpZCBhc3NldCBuYW1lcyAqL1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldElucHV0OiBlLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2VhcmNoOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVjZWl2ZUFzc2V0SW5wdXQgIT09IGUpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvb2t1cEFzc2V0cyhlLCB0cnVlLCB0aGlzLmdldEFzc2V0TGlzdCwgdGhpcy5zZXRTdGF0ZSk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBfY2hlY2tBbmRVcGRhdGVNYXJrZXRMaXN0KG1hcmtldHNMaXN0KSB7XHJcbiAgICAgICAgbGV0IHJlY2VpdmVBc3NldHMgPSBtYXJrZXRzTGlzdC5tYXAoYXNzZXQgPT4gYXNzZXQuaWQpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgICAgICBjb25zdCB7cmVjZWl2ZUFzc2V0SW5wdXR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgYXNzZXQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChDaGFpblN0b3JlLmdldEFzc2V0KHJlY2VpdmVBc3NldElucHV0KSkge1xyXG4gICAgICAgICAgICBjb25zdCBhc3NldElkID0gQ2hhaW5TdG9yZS5nZXRBc3NldChyZWNlaXZlQXNzZXRJbnB1dCkuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgICAgIGlmIChyZWNlaXZlQXNzZXRzLmluY2x1ZGVzKGFzc2V0SWQpKSB7XHJcbiAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQocmVjZWl2ZUFzc2V0SW5wdXQpLmdldChcImlkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWNlaXZlQXNzZXRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBhc3NldCA9IHJlY2VpdmVBc3NldHNbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHtjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRzID0gZ2V0QXNzZXRzVG9TZWxsKGN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cy5wdXNoKGFzc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlY2VpdmVBc3NldHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRzID0gZ2V0QXNzZXRzVG9TZWxsKGN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldHMsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2VhcmNoOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdWJUb01hcmtldCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxsQW1vdW50Q2hhbmdlKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChlLmFzc2V0ICE9PSB0aGlzLnN0YXRlLnNlbGxBc3NldElucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TZWxsQXNzZXRJbnB1dENoYW5nZShlLmFzc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsbEFtb3VudDogZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dDogXCJzZWxsXCIsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVBbW91bnRJbnB1dDogXCJzZWxsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0T3JkZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVjZWl2ZUFtb3VudENoYW5nZShlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm1vdW50ZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoZS5hc3NldCAhPT0gdGhpcy5zdGF0ZS5yZWNlaXZlQXNzZXRJbnB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2UoZS5hc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQ6IGUuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQ6IFwicmVjZWl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQW1vdW50SW5wdXQ6IFwicmVjZWl2ZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldE9yZGVycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGxJbWFnZUVycm9yKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxsSW1nTmFtZTogXCJ1bmtub3duXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlY2VpdmVJbWFnZUVycm9yKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByZWNlaXZlSW1nTmFtZTogXCJ1bmtub3duXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN3YXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTd2FwcGFibGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zd2FwQXNzZXRzKFwibmVpdGhlclwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3Vic2NyaXB0aW9uVG9nZ2xlQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNTdWJzY3JpYmVkVG9NYXJrZXQ6ICFzdGF0ZS5pc1N1YnNjcmliZWRUb01hcmtldFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhlbmRsZU9yZGVyVmlldygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3JkZXJWaWV3ID0gc3RhdGUub3JkZXJWaWV3ID09PSBcImFtb3VudFwiID8gXCJ0b3RhbFwiIDogXCJhbW91bnRcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9yZGVyVmlld1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbGwoKSB7XHJcbiAgICAgICAgY29uc3Qge2N1cnJlbnRBY2NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElkLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJZCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgY29uc3QgZm9yU2FsZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiBzZWxsQXNzZXRJZCxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIGFtb3VudDogc2VsbEFtb3VudCAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHRvUmVjZWl2ZSA9IG5ldyBBc3NldCh7XHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiByZWNlaXZlQXNzZXRJZCxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiByZWNlaXZlQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIGFtb3VudDogcmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25UaW1lID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG5cclxuICAgICAgICBjb25zdCBvcmRlciA9IG5ldyBMaW1pdE9yZGVyQ3JlYXRlKHtcclxuICAgICAgICAgICAgZm9yX3NhbGU6IGZvclNhbGUsXHJcbiAgICAgICAgICAgIGV4cGlyYXRpb246IGV4cGlyYXRpb25UaW1lLFxyXG4gICAgICAgICAgICB0b19yZWNlaXZlOiB0b1JlY2VpdmUsXHJcbiAgICAgICAgICAgIHNlbGxlcjogY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgIGZlZToge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRfaWQ6IFwiMS4zLjBcIixcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsX29yX2tpbGw6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hcmtldHNBY3Rpb25zLmNyZWF0ZUxpbWl0T3JkZXIyKG9yZGVyKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IubWVzc2FnZSAhPT0gXCJ3YWxsZXQgbG9ja2VkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RpZmljYXRpb25zLmV4Y2hhbmdlX3Vua25vd25fZXJyb3JfcGxhY2Vfb3JkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogcmVjZWl2ZUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiByZWNlaXZlQXNzZXRJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvcmRlciBmYWlsZWQ6XCIsIGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTZWxsQW1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtvcmRlcnMsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGlmIChvcmRlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGxBbW91bnQgPSAoXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50IC8gb3JkZXJzWzBdLm9yZGVyLmdldFByaWNlKClcclxuICAgICAgICAgICAgKS50b0ZpeGVkKHNlbGxBc3NldFByZWNpc2lvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsbEFtb3VudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3JkZXJzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVyID0gb3JkZXJzLnNsaWNlKC0xKVswXTtcclxuICAgICAgICAgICAgY29uc3QgcGVudWx0aW1hdGVPcmRlciA9IG9yZGVycy5zbGljZShcclxuICAgICAgICAgICAgICAgIG9yZGVycy5sZW5ndGggLSAyLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgKVswXTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVyVG9SZWNlaXZlID1cclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb24gLVxyXG4gICAgICAgICAgICAgICAgcGVudWx0aW1hdGVPcmRlci5vcmRlci50b3RhbF9mb3Jfc2FsZS5nZXRBbW91bnQoKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVyRm9yU2FsZSA9XHJcbiAgICAgICAgICAgICAgICAoKGxhc3RPcmRlclRvUmVjZWl2ZSAvIGxhc3RPcmRlci5vcmRlci5nZXRQcmljZSgpKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uKSAvXHJcbiAgICAgICAgICAgICAgICAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb247XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGxBbW91bnQgPSAoXHJcbiAgICAgICAgICAgICAgICAocGVudWx0aW1hdGVPcmRlci5vcmRlci50b3RhbF90b19yZWNlaXZlLmdldEFtb3VudCgpICtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0T3JkZXJGb3JTYWxlKSAvXHJcbiAgICAgICAgICAgICAgICAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb25cclxuICAgICAgICAgICAgKS50b0ZpeGVkKHNlbGxBc3NldFByZWNpc2lvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsbEFtb3VudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSZWNlaXZlQW1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtvcmRlcnMsIHNlbGxBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGlmIChvcmRlcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVBbW91bnQgPSAoXHJcbiAgICAgICAgICAgICAgICBvcmRlcnNbMF0ub3JkZXIuZ2V0UHJpY2UoKSAqIHNlbGxBbW91bnRcclxuICAgICAgICAgICAgKS50b0ZpeGVkKHJlY2VpdmVBc3NldFByZWNpc2lvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9yZGVycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlciA9IG9yZGVycy5zbGljZSgtMSlbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHBlbnVsdGltYXRlT3JkZXIgPSBvcmRlcnMuc2xpY2UoXHJcbiAgICAgICAgICAgICAgICBvcmRlcnMubGVuZ3RoIC0gMixcclxuICAgICAgICAgICAgICAgIG9yZGVycy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIClbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlckZvclNhbGUgPVxyXG4gICAgICAgICAgICAgICAgc2VsbEFtb3VudCAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbiAtXHJcbiAgICAgICAgICAgICAgICBwZW51bHRpbWF0ZU9yZGVyLm9yZGVyLnRvdGFsX3RvX3JlY2VpdmUuZ2V0QW1vdW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlclRvUmVjZWl2ZSA9XHJcbiAgICAgICAgICAgICAgICAobGFzdE9yZGVyRm9yU2FsZSAqXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE9yZGVyLm9yZGVyLmdldFByaWNlKCkgKlxyXG4gICAgICAgICAgICAgICAgICAgIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbikgL1xyXG4gICAgICAgICAgICAgICAgMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uO1xyXG4gICAgICAgICAgICBjb25zdCByZWNlaXZlQW1vdW50ID0gKFxyXG4gICAgICAgICAgICAgICAgKHBlbnVsdGltYXRlT3JkZXIub3JkZXIudG90YWxfZm9yX3NhbGUuZ2V0QW1vdW50KCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RPcmRlclRvUmVjZWl2ZSkgL1xyXG4gICAgICAgICAgICAgICAgMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICkudG9GaXhlZChyZWNlaXZlQXNzZXRQcmVjaXNpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNTd2FwcGFibGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FyZUFzc2V0c0dpdmVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFRyYW5zYWN0aW9uRmVlKGRlbm9taW5hdGlvbkFzc2V0SWQpIHtcclxuICAgICAgICBjb25zdCB7ZmVlcywgcHJpY2VzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGlmIChmZWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChmZWVzLnRyYW5zYWN0aW9uRmVlW3NlbGxBc3NldElkXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICFkZW5vbWluYXRpb25Bc3NldElkIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZGVub21pbmF0aW9uQXNzZXRJZCA9PT0gc2VsbEFzc2V0SWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZXMudHJhbnNhY3Rpb25GZWVbc2VsbEFzc2V0SWRdLmZlZS5hbW91bnQgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMCAqKiBmZWVzLnRyYW5zYWN0aW9uRmVlW3NlbGxBc3NldElkXS5mZWUucHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZlZXMudHJhbnNhY3Rpb25GZWVbc2VsbEFzc2V0SWRdLmZlZS5hbW91bnQgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVzLnRyYW5zYWN0aW9uRmVlW3NlbGxBc3NldElkXS5mZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByZWNpc2lvbikgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZXMubGF0ZXN0UHJpY2VcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldE1hcmtldEZlZShkZW5vbWluZGF0ZWRBc3NldElkKSB7XHJcbiAgICAgICAgY29uc3Qge2ZlZXMsIHByaWNlcywgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtyZWNlaXZlQXNzZXRJZH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAoZmVlcykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhZGVub21pbmRhdGVkQXNzZXRJZCB8fFxyXG4gICAgICAgICAgICAgICAgZGVub21pbmRhdGVkQXNzZXRJZCA9PT0gcmVjZWl2ZUFzc2V0SWRcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGZlZXMubWFya2V0RmVlLmJhc2VNYXJrZXRGZWUgKiByZWNlaXZlQW1vdW50KSAvIDEwMDAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAoZmVlcy5tYXJrZXRGZWUuYmFzZU1hcmtldEZlZSAqIHJlY2VpdmVBbW91bnQpIC9cclxuICAgICAgICAgICAgICAgICAgICBwcmljZXMubGF0ZXN0UHJpY2UgL1xyXG4gICAgICAgICAgICAgICAgICAgIDEwMDAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRGZWVQZXJjZW50KGZlZUFtb3VudCwgdG90YWxBbW91bnQpIHtcclxuICAgICAgICByZXR1cm4gK3RvdGFsQW1vdW50ID8gKCt0b3RhbEFtb3VudCArICtmZWVBbW91bnQpIC8gdG90YWxBbW91bnQgLSAxIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXRhaWxzKCkge1xyXG4gICAgICAgIGNvbnN0IHtzdWJ9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoIXN1Yikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHtzZWxsQW1vdW50LCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJZCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SWQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRTeW1ib2xcclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VTZWN0aW9uID0gdGhpcy5nZXRQcmljZVNlY3Rpb24oKTtcclxuICAgICAgICBjb25zdCBwcmljZUV4dHJhID0gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5lZmZlY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtzZWxsQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cmVjZWl2ZUFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e3NlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtyZWNlaXZlQW1vdW50ICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlX2RpcmVjdGlvbj17cmVjZWl2ZUFzc2V0U3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vSW52ZXJ0VGlwXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZmVlU2VjdGlvbiA9IHRoaXMuZ2V0RmVlU2VjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG9yZGVyc1NlY3Rpb24gPSB0aGlzLmdldE9yZGVyc1NlY3Rpb24oKTtcclxuICAgICAgICBjb25zdCB0b3RhbFBlcmNlbnRGZWUgPVxyXG4gICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmVmZmVjdGl2ZVwiKSArXHJcbiAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgKHRoaXMuZ2V0VG90YWxQZXJjZW50RmVlKCkgKiAxMDApLnRvRml4ZWQoMik7XHJcbiAgICAgICAgY29uc3QgYW1vdW50T2ZPcmRlcnMgPSB0aGlzLnN0YXRlLm9yZGVycy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJzQ2FwdGlvbiA9XHJcbiAgICAgICAgICAgIGFtb3VudE9mT3JkZXJzIDwgMlxyXG4gICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLm9yZGVyXCIpXHJcbiAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMub3JkZXJzXCIpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb2xsYXBzZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNzZXQtY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UuUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnByaWNlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtwcmljZUV4dHJhfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmljZVNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlLlBhbmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5mZWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e2Ake3RvdGFsUGVyY2VudEZlZX0lYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7ZmVlU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UuUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLm9yZGVyc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudE9mT3JkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke2Ftb3VudE9mT3JkZXJzfSAke29yZGVyc0NhcHRpb259YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vIG9yZGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcmRlcnNTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEZXRhaWxzKCkge1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXQsIHJlY2VpdmVBc3NldCwgc2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiBzZWxsQXNzZXQgJiYgcmVjZWl2ZUFzc2V0ICYmICtzZWxsQW1vdW50ICYmICtyZWNlaXZlQW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dGZWVkUHJpY2UoKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldCwgcmVjZWl2ZUFzc2V0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldElkLCByZWNlaXZlQXNzZXRJZH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBjb25zdCByZWNlaXZlQ29sbGF0ZXJhbEFzc2V0ID0gcmVjZWl2ZUFzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxyXG4gICAgICAgICAgICBcIm9wdGlvbnNcIixcclxuICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcclxuICAgICAgICBdKTtcclxuICAgICAgICBjb25zdCBzZWxsQ29sbGF0ZXJhbEFzc2V0ID0gc2VsbEFzc2V0LmdldEluKFtcclxuICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxyXG4gICAgICAgICAgICBcIm9wdGlvbnNcIixcclxuICAgICAgICAgICAgXCJzaG9ydF9iYWNraW5nX2Fzc2V0XCJcclxuICAgICAgICBdKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICByZWNlaXZlQ29sbGF0ZXJhbEFzc2V0ID09PSBzZWxsQXNzZXRJZCB8fFxyXG4gICAgICAgICAgICBzZWxsQ29sbGF0ZXJhbEFzc2V0ID09PSByZWNlaXZlQXNzZXRJZFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJpY2VTZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHtwcmljZXMsIHNlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElkLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJZCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFN5bWJvbFxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy55b3VyX3ByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zaG93RmVlZFByaWNlKCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuZmVlZF9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMubGFzdF9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3NlbGxBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3JlY2VpdmVBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e3NlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtyZWNlaXZlQXNzZXRTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0ludmVydFRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnNob3dGZWVkUHJpY2UoKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtzZWxsQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cmVjZWl2ZUFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9ezEgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzLmZlZWRQcmljZSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e3JlY2VpdmVBc3NldFN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0ludmVydFRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3NlbGxBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3JlY2VpdmVBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9ezEgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcy5sYXRlc3RQcmljZSAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e3JlY2VpdmVBc3NldFN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vSW52ZXJ0VGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGZWVTZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQW1vdW50LCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgc2VsbEFzc2V0U3ltYm9sLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRTeW1ib2xcclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uRmVlID0gdGhpcy5fZ2V0VHJhbnNhY3Rpb25GZWUoKS50b0ZpeGVkKFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb25cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uRmVlUGVyY2VudCA9IChcclxuICAgICAgICAgICAgdGhpcy5fZ2V0RmVlUGVyY2VudCh0aGlzLl9nZXRUcmFuc2FjdGlvbkZlZSgpLCBzZWxsQW1vdW50KSAqIDEwMFxyXG4gICAgICAgICkudG9GaXhlZCgyKTtcclxuICAgICAgICBjb25zdCBtYXJrZXRGZWUgPSB0aGlzLl9nZXRNYXJrZXRGZWUoKS50b0ZpeGVkKHJlY2VpdmVBc3NldFByZWNpc2lvbik7XHJcbiAgICAgICAgY29uc3QgbWFya2V0RmVlUGVyY2VudCA9IChcclxuICAgICAgICAgICAgdGhpcy5fZ2V0RmVlUGVyY2VudCh0aGlzLl9nZXRNYXJrZXRGZWUoKSwgcmVjZWl2ZUFtb3VudCkgKiAxMDBcclxuICAgICAgICApLnRvRml4ZWQoMik7XHJcblxyXG4gICAgICAgIGxldCBbXHJcbiAgICAgICAgICAgIGxpcWlkaXR5UGVuYWx0eU1hcmtldCxcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5RmVlZFxyXG4gICAgICAgIF0gPSB0aGlzLmdldExpcXVpZGl0eVBlbmFsdHkoKTtcclxuICAgICAgICBpZiAobGlxaWRpdHlQZW5hbHR5TWFya2V0IHx8IGxpcWlkaXR5UGVuYWx0eU1hcmtldCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlNYXJrZXQgPVxyXG4gICAgICAgICAgICAgICAgKGxpcWlkaXR5UGVuYWx0eU1hcmtldCAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpcWlkaXR5UGVuYWx0eU1hcmtldCA9IFwiLVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGlxaWRpdHlQZW5hbHR5RmVlZCB8fCBsaXFpZGl0eVBlbmFsdHlGZWVkID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxpcWlkaXR5UGVuYWx0eUZlZWQgPSAobGlxaWRpdHlQZW5hbHR5RmVlZCAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpcWlkaXR5UGVuYWx0eUZlZWQgPSBcIi1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGlxaWRpdHlQZW5hbHR5ID0gdGhpcy5zaG93RmVlZFByaWNlKClcclxuICAgICAgICAgICAgPyBgJHtsaXFpZGl0eVBlbmFsdHlNYXJrZXR9IC8gJHtsaXFpZGl0eVBlbmFsdHlGZWVkfWBcclxuICAgICAgICAgICAgOiBsaXFpZGl0eVBlbmFsdHlNYXJrZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmxpcXVpZGl0eV9wZW5hbHR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLm1hcmtldF9mZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCAke21hcmtldEZlZVBlcmNlbnR9JWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy50cmFuc2FjdGlvbl9mZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YCAke3RyYW5zYWN0aW9uRmVlUGVyY2VudH0lYH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e2xpcWlkaXR5UGVuYWx0eX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0RmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtyZWNlaXZlQXNzZXRTeW1ib2x9IG5vVGlwIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uRmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtzZWxsQXNzZXRTeW1ib2x9IG5vVGlwIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmRlcnNTZWN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHtvcmRlcnMsIG9yZGVyVmlld30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SWQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElkLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFN5bWJvbCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0U3ltYm9sXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBvcmRlcnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAga2V5OiBpdGVtLm9yZGVyLmlkLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0ub3JkZXIuaWQsXHJcbiAgICAgICAgICAgICAgICBzZWxsZXI6IDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtpdGVtLm9yZGVyLnNlbGxlcn0gLz4sXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGVuZGxlT3JkZXJWaWV3fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29yZGVyVmlldyA9PT0gXCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmFtb3VudCAvIDEwICoqIHNlbGxBc3NldFByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLnRvdGFsX2Ftb3VudCAvIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhbW91bnQgPSAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge29yZGVyVmlldyA9PT0gXCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy50b3RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgJm5ic3A7KFxyXG4gICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBuYW1lPXtzZWxsQXNzZXRTeW1ib2x9IG5vVGlwIC8+KVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMucHJpY2VcIil9XHJcbiAgICAgICAgICAgICAgICAmbmJzcDsoXHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtzZWxsQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cmVjZWl2ZUFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtyZWNlaXZlQXNzZXRTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9JbnZlcnRUaXBcclxuICAgICAgICAgICAgICAgICAgICBoaWRlX3ZhbHVlXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuaWRcIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuc2VsbGVyXCJcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwic2VsbGVyXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwic2VsbGVyXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMCVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFtb3VudFwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImFtb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzAlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwicHJpY2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogXCIwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3Vic2NyaXB0aW9uVG9nZ2xlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaXNTdWJzY3JpYmVkVG9NYXJrZXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3JkZXJzVXBkYXRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LmxvY2FsaXplKHRoaXMuc3RhdGUub3JkZXJzVXBkYXRlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3Vic2NyaXB0aW9uVG9nZ2xlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnN1YnNjcmliZV90b19tYXJrZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIxMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLmxlbmd0aCA+IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlxdWlkaXR5UGVuYWx0eSgpIHtcclxuICAgICAgICBjb25zdCB7cHJpY2VzLCBzZWxsQW1vdW50LCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSByZWNlaXZlQW1vdW50IC8gc2VsbEFtb3VudDtcclxuICAgICAgICBjb25zdCBtYXJrZXRQcmljZSA9IHByaWNlcy5sYXRlc3RQcmljZTtcclxuICAgICAgICBjb25zdCBmZWVkUHJpY2UgPSBwcmljZXMuZmVlZFByaWNlO1xyXG4gICAgICAgIGxldCBsaXF1aWRpdHlGZWUxLCBsaXF1aWRpdHlGZWUyO1xyXG4gICAgICAgIGlmIChwcmljZSAmJiBtYXJrZXRQcmljZSkge1xyXG4gICAgICAgICAgICBsaXF1aWRpdHlGZWUxID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICAxIC0gcHJpY2UgLyBtYXJrZXRQcmljZSxcclxuICAgICAgICAgICAgICAgIDEgLSBtYXJrZXRQcmljZSAvIHByaWNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmljZSAmJiBmZWVkUHJpY2UpIHtcclxuICAgICAgICAgICAgbGlxdWlkaXR5RmVlMiA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICAgICAgMSAtIHByaWNlIC8gZmVlZFByaWNlLFxyXG4gICAgICAgICAgICAgICAgMSAtIGZlZWRQcmljZSAvIHByaWNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbbGlxdWlkaXR5RmVlMSwgbGlxdWlkaXR5RmVlMl07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG90YWxQZXJjZW50RmVlKCkge1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQW1vdW50LCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25GZWVQZXJjZW50ID0gdGhpcy5fZ2V0RmVlUGVyY2VudChcclxuICAgICAgICAgICAgdGhpcy5fZ2V0VHJhbnNhY3Rpb25GZWUoKSxcclxuICAgICAgICAgICAgc2VsbEFtb3VudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbWFya2V0RmVlUGVyY2VudCA9IHRoaXMuX2dldEZlZVBlcmNlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuX2dldE1hcmtldEZlZSgpLFxyXG4gICAgICAgICAgICByZWNlaXZlQW1vdW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBsaXF1aWRpdHlGZWUgPSB0aGlzLmdldExpcXVpZGl0eVBlbmFsdHkoKVswXTtcclxuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25GZWVQZXJjZW50ICsgbWFya2V0RmVlUGVyY2VudCArIGxpcXVpZGl0eUZlZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNCYWxhbmNlKCkge1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2N1cnJlbnRBY2NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudEJhbGFuY2VzID0gY3VycmVudEFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXRJZCwgc2VsbEFzc2V0UHJlY2lzaW9ufSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGlmICghYWNjb3VudEJhbGFuY2VzW3NlbGxBc3NldElkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSBDaGFpblN0b3JlLmdldE9iamVjdChhY2NvdW50QmFsYW5jZXNbc2VsbEFzc2V0SWRdKS5nZXQoXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkZlZSA9IHRoaXMuX2dldFRyYW5zYWN0aW9uRmVlKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgc2VsbEFtb3VudCAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbiArXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbkZlZSAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbiA8XHJcbiAgICAgICAgICAgICtiYWxhbmNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJbnB1dCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0cyxcclxuICAgICAgICAgICAgc2VsbEFtb3VudCxcclxuICAgICAgICAgICAgc2VsbEltZ05hbWUsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElucHV0LFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRzLFxyXG4gICAgICAgICAgICByZWNlaXZlQW1vdW50LFxyXG4gICAgICAgICAgICByZWNlaXZlSW1nTmFtZSxcclxuICAgICAgICAgICAgc3ViXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldElkLCByZWNlaXZlQXNzZXRJZH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgRGV0YWlscyA9IHRoaXMuc2hvd0RldGFpbHMoKSA/IHRoaXMuZ2V0RGV0YWlscygpIDogbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInF1aWNrLXRyYWRlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMzAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsbFJlY2VpdmVcclxuICAgICAgICAgICAgICAgICAgICBzZWxsQXNzZXRJbnB1dD17c2VsbEFzc2V0SW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbEFzc2V0PXtzZWxsQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxsQXNzZXRzPXtzZWxsQXNzZXRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxBbW91bnQ9e3NlbGxBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbEltZ05hbWU9e3NlbGxJbWdOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsbEFzc2V0SW5wdXRDaGFuZ2U9e3RoaXMub25TZWxsQXNzZXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGxBbW91bnRDaGFuZ2U9e3RoaXMub25TZWxsQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldElucHV0PXtyZWNlaXZlQXNzZXRJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXQ9e3JlY2VpdmVBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldHM9e3JlY2VpdmVBc3NldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudD17cmVjZWl2ZUFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlSW1nTmFtZT17cmVjZWl2ZUltZ05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZT17dGhpcy5vblJlY2VpdmVBc3NldElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVjZWl2ZUFtb3VudENoYW5nZT17dGhpcy5vblJlY2VpdmVBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWNlaXZlQXNzZXRTZWFyY2g9e3RoaXMub25SZWNlaXZlQXNzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Td2FwPXt0aGlzLm9uU3dhcH1cclxuICAgICAgICAgICAgICAgICAgICBpc1N3YXBwYWJsZT17dGhpcy5pc1N3YXBwYWJsZSgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuaGFzQmFsYW5jZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5ub19iYWxhbmNlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnNob3dEZXRhaWxzKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc3ViIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuaGFzQmFsYW5jZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5zZWxsXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblF1aWNrVHJhZGUgPSBjb25uZWN0KFxyXG4gICAgUXVpY2tUcmFkZSxcclxuICAgIHtcclxuICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtBc3NldFN0b3JlLCBNYXJrZXRzU3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hBc3NldHM6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHMsXHJcbiAgICAgICAgICAgICAgICBhc3NldHNMb2FkaW5nOiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzTG9hZGluZyxcclxuICAgICAgICAgICAgICAgIG1hcmtldERhdGE6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldERhdGEsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVNYXJrZXRIaXN0b3J5OiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hY3RpdmVNYXJrZXRIaXN0b3J5LFxyXG4gICAgICAgICAgICAgICAgYnVja2V0U2l6ZTogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYnVja2V0U2l6ZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9yZGVyTGltaXQ6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmN1cnJlbnRHcm91cE9yZGVyTGltaXQsXHJcbiAgICAgICAgICAgICAgICBmZWVkUHJpY2U6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmZlZWRQcmljZSxcclxuICAgICAgICAgICAgICAgIG1hcmtldExpbWl0T3JkZXJzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXRMaW1pdE9yZGVyc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChRdWlja1RyYWRlID0gYmluZFRvQ3VycmVudEFjY291bnQoUXVpY2tUcmFkZSkpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhZ2U0MDQgZnJvbSBcIi4uL1BhZ2U0MDQvUGFnZTQwNFwiO1xuaW1wb3J0IFF1aWNrVHJhZGUgZnJvbSBcIi4vUXVpY2tUcmFkZVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuXG5jbGFzcyBRdWlja1RyYWRlU3Vic2NyaWJlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYXNzZXRUb1NlbGw6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCxcbiAgICAgICAgYXNzZXRUb1JlY2VpdmU6IENoYWluVHlwZXMuQ2hhaW5Bc3NldFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBhc3NldFRvU2VsbDogXCJVU0RcIixcbiAgICAgICAgYXNzZXRUb1JlY2VpdmU6IFwiR1BIXCJcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoISF0aGlzLnByb3BzLmFzc2V0VG9SZWNlaXZlLmdldCAmJiAhIXRoaXMucHJvcHMuYXNzZXRUb1NlbGwuZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gPFF1aWNrVHJhZGUgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IFF1aWNrVHJhZGVBc3NldFJlc29sdmVyID0gQmluZFRvQ2hhaW5TdGF0ZShRdWlja1RyYWRlU3Vic2NyaWJlciwge1xuICAgIHNob3dfbG9hZGVyOiB0cnVlXG59KTtcblxuY2xhc3MgUXVpY2tUcmFkZVJvdXRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc3ltYm9scyA9ICEhdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubWFya2V0SURcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubWFya2V0SUQudG9VcHBlckNhc2UoKS5zcGxpdChcIl9cIilcbiAgICAgICAgICAgIDogW1wiXCIsIFwiXCJdO1xuICAgICAgICBpZiAoc3ltYm9scy5sZW5ndGggPT0gMiAmJiAhIXN5bWJvbHNbMF0gJiYgc3ltYm9sc1swXSA9PT0gc3ltYm9sc1sxXSkge1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwibWFya2V0X25vdF9mb3VuZF9zdWJ0aXRsZVwiIC8+O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1aWNrVHJhZGVSb3V0ZXJcIiwgc3ltYm9scyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxRdWlja1RyYWRlQXNzZXRSZXNvbHZlclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGFzc2V0VG9TZWxsPXtzeW1ib2xzWzBdIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgYXNzZXRUb1JlY2VpdmU9e3N5bWJvbHMubGVuZ3RoID09IDIgPyBzeW1ib2xzWzFdIDogXCJcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWlja1RyYWRlUm91dGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yMyBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvcjNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCB7Um93LCBDb2x9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5cclxuY2xhc3MgU2VsbFJlY2VpdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBzZWxsQXNzZXRJbnB1dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBzZWxsQXNzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc2VsbEFzc2V0czogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIHNlbGxBbW91bnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc2VsbEltZ05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcmVjZWl2ZUFzc2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHJlY2VpdmVBc3NldHM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICByZWNlaXZlQW1vdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHJlY2VpdmVJbWdOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIG9uU2VsbEFzc2V0SW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb25TZWxsQW1vdW50Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb25SZWNlaXZlQW1vdW50Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uU3dhcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBpc1N3YXBwYWJsZTogUHJvcFR5cGVzLmJvb2xcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNtYWxsU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGggPCA4NTAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJbnB1dCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0LFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRzLFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50LFxyXG4gICAgICAgICAgICBzZWxsSW1nTmFtZSxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cyxcclxuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCxcclxuICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWUsXHJcbiAgICAgICAgICAgIG9uU2VsbEFzc2V0SW5wdXRDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uU2VsbEFtb3VudENoYW5nZSxcclxuICAgICAgICAgICAgb25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZSxcclxuICAgICAgICAgICAgb25SZWNlaXZlQW1vdW50Q2hhbmdlLFxyXG4gICAgICAgICAgICBvblJlY2VpdmVBc3NldFNlYXJjaCxcclxuICAgICAgICAgICAgb25Td2FwLFxyXG4gICAgICAgICAgICBpc1N3YXBwYWJsZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxsU2VsZWN0b3IgPSAoXHJcbiAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvcjNcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtcImV4Y2hhbmdlLnNlbGxcIn1cclxuICAgICAgICAgICAgICAgIGFzc2V0SW5wdXQ9e3NlbGxBc3NldElucHV0fVxyXG4gICAgICAgICAgICAgICAgYXNzZXQ9e3NlbGxBc3NldH1cclxuICAgICAgICAgICAgICAgIGFzc2V0cz17c2VsbEFzc2V0c31cclxuICAgICAgICAgICAgICAgIGFtb3VudD17c2VsbEFtb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQXNzZXRJbnB1dENoYW5nZT17b25TZWxsQXNzZXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQW1vdW50Q2hhbmdlPXtvblNlbGxBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpbWdOYW1lPXtzZWxsSW1nTmFtZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMucGxhY2Vob2xkZXJfc2VsbFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY2VpdmVTZWxlY3RvciA9IChcclxuICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yM1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9e1wiZXhjaGFuZ2UucmVjZWl2ZVwifVxyXG4gICAgICAgICAgICAgICAgYXNzZXRJbnB1dD17cmVjZWl2ZUFzc2V0SW5wdXR9XHJcbiAgICAgICAgICAgICAgICBhc3NldD17cmVjZWl2ZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgYXNzZXRzPXtyZWNlaXZlQXNzZXRzfVxyXG4gICAgICAgICAgICAgICAgYW1vdW50PXtyZWNlaXZlQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgb25Bc3NldElucHV0Q2hhbmdlPXtvblJlY2VpdmVBc3NldElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9e29uUmVjZWl2ZUFzc2V0U2VhcmNofVxyXG4gICAgICAgICAgICAgICAgb25BbW91bnRDaGFuZ2U9e29uUmVjZWl2ZUFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgIGltZ05hbWU9e3JlY2VpdmVJbWdOYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5wbGFjZWhvbGRlcl9yZWNlaXZlXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIWlzU3dhcHBhYmxlKSB7XHJcbiAgICAgICAgICAgIGJ0blN0eWxlLm9wYWNpdHkgPSAwLjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzd2FwQnV0dG9uID0gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtidG5TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMnhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXNtYWxsU2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIzcmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3dhcH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7c21hbGxTY3JlZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz57c2VsbFNlbGVjdG9yfTwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93Pntzd2FwQnV0dG9ufTwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PntyZWNlaXZlU2VsZWN0b3J9PC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTB9PntzZWxsU2VsZWN0b3J9PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0+e3N3YXBCdXR0b259PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTB9PntyZWNlaXZlU2VsZWN0b3J9PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxsUmVjZWl2ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtSb3csIENvbCwgVG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JTdHlsZUd1aWRlXCI7XHJcblxyXG5pbXBvcnQgQ2hhaW5TZWxlY3QgZnJvbSBcIi4vQ2hhaW5TZWxlY3RcIjtcclxuXHJcbmNsYXNzIEFtb3VudFNlbGVjdG9yMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGFzc2V0SW5wdXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYXNzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYXNzZXRzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgICAgYW1vdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBvbkFzc2V0SW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIG9uQW1vdW50Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBvbkltYWdlRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBpbWdOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyQW1vdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIGltZ05hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyQW1vdW50OiBcIjAuMFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGltYWdlRXJyb3I6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEhdGhpcy5wcm9wcy5pbWdOYW1lICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW1nTmFtZSAhPT0gcHJldlByb3BzLmltZ05hbWUgJiZcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pbWdOYW1lICE9PSBcInVua25vd25cIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGltYWdlRXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkltYWdlRXJyb3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGltYWdlRXJyb3I6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIGFzc2V0SW5wdXQsXHJcbiAgICAgICAgICAgIGFzc2V0LFxyXG4gICAgICAgICAgICBhc3NldHMsXHJcbiAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgb25Bc3NldElucHV0Q2hhbmdlLFxyXG4gICAgICAgICAgICBvblNlYXJjaCxcclxuICAgICAgICAgICAgb25BbW91bnRDaGFuZ2UsXHJcbiAgICAgICAgICAgIGltZ05hbWUsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlckFtb3VudCxcclxuICAgICAgICAgICAgdG9vbHRpcFRleHRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW1hZ2VFcnJvcikge1xyXG4gICAgICAgICAgICBpbWdOYW1lID0gXCJ1bmtub3duXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsYWJlbFRleHQgPSAoXHJcbiAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhaW5TZWxlY3RvciA9IDxDaGFpblNlbGVjdCAvPjtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSAoXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMy41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMub25JbWFnZUVycm9yLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFtb3VudFNlbGVjdG9yID0gKFxyXG4gICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0fVxyXG4gICAgICAgICAgICAgICAgYXNzZXRzPXthc3NldHN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJBbW91bnR9XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW1vdW50LXNlbGVjdG9yLTJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIzLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbFRleHR9XHJcbiAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMThyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMy41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbj17NX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezE5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9e3Rvb2x0aXBUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpblNlbGVjdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthbW91bnRTZWxlY3Rvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbW91bnRTZWxlY3RvcjM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuL0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4vQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0xvYWRlZCA9IGZ1bmN0aW9uIGhhc0xvYWRlZChjdXJyZW50QWNjb3VudCkge1xyXG4gICAgcmV0dXJuICEhY3VycmVudEFjY291bnQgJiYgISFjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBiaW5kVG9DdXJyZW50QWNjb3VudCA9IGZ1bmN0aW9uIGJpbmRUb0N1cnJlbnRBY2NvdW50KFxyXG4gICAgV3JhcHBlZENvbXBvbmVudFxyXG4pIHtcclxuICAgIC8vIC4uLmFuZCByZXR1cm5zIGFub3RoZXIgY29tcG9uZW50Li4uXHJcbiAgICBsZXQgQmluZFRvQ3VycmVudEFjY291bnQgPSBjbGFzcyBCaW5kVG9DdXJyZW50QWNjb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY3VycmVudEFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICAgICAgLy8gc2V0IHN1YnNjcmlwdGlvblxyXG4gICAgICAgICAgICBhdXRvc3Vic2NyaWJlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFzTG9hZGVkKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nSW5kaWNhdG9yIC8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBCaW5kVG9DdXJyZW50QWNjb3VudCA9IEJpbmRUb0NoYWluU3RhdGUoQmluZFRvQ3VycmVudEFjY291bnQpO1xyXG5cclxuICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50ID0gZGVib3VuY2VSZW5kZXIoQmluZFRvQ3VycmVudEFjY291bnQsIDEwMCwge1xyXG4gICAgICAgIGxlYWRpbmc6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29ubmVjdChcclxuICAgICAgICBCaW5kVG9DdXJyZW50QWNjb3VudCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBcInBsZWFzZS1sb2dpblwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDogbmV3IE1hcChbW1wibmFtZVwiLCBjdXJyZW50QWNjb3VudF1dKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7U2VsZWN0fSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQge01hcH0gZnJvbSBcImltbXV0YWJsZVwiO1xuXG5jbGFzcyBDaGFpblNlbGVjdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNoYWluczogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICAgIHNlbGVjdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG5cbiAgICAgICAgLy8gYWxsIG90aGVyIHByb3BzIGFyZSBwYXNzZWQgdG8gdGhlIFNlbGVjdCBjb21wb25lbnRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY2hhaW5zOiBbXCJHcmFwaGVuZSBCbG9ja2NoYWluXCJdLFxuICAgICAgICBwbGFjZWhvbGRlcjogbnVsbCxcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICBzZWxlY3RTdHlsZToge31cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgY2hhaW5zLFxuICAgICAgICAgICAgc2VsZWN0U3R5bGUsXG4gICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgICAgIC4uLnJlbVByb3BzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGRpc2FibGVTZWxlY3QgPVxuICAgICAgICAgICAgY2hhaW5zLmZpbHRlcihNYXAuaXNNYXApLmxlbmd0aCA8PSAxICYmICFvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGNoYWluc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIGdpdmVuIHdlIGFzc3VtZSB0aGF0IGxhenkgbG9hZGluZyB0YWtlcyBwbGFjZVxuICAgICAgICBjb25zdCBzZWxlY3QgPSAoXG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U9e29uRHJvcGRvd25WaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHNob3dBcnJvdz17ZGlzYWJsZVNlbGVjdCA/IGZhbHNlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzZWxlY3RTdHlsZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyIHx8IFwidXRpbGl0eS5hc3NldF9zZWxlY3RfcGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgey4uLnJlbVByb3BzfVxuICAgICAgICAgICAgICAgIG9wdGlvbkZpbHRlclByb3A9XCJjaGlsZHJlblwiXG4gICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXQsIG9wdGlvbikgPT5cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmtleS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZVNlbGVjdH1cbiAgICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdsb2JhbC5ub3RfZm91bmRcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoYWlucy5maWx0ZXIoTWFwLmlzTWFwKS5tYXAoY2hhaW4gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtjaGFpbn0gdmFsdWU9e2NoYWlufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNoYWluLXNlbGVjdFwifSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgIHtzZWxlY3R9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYWluU2VsZWN0VmlldztcbiIsImltcG9ydCB7aGFzR2F0ZXdheVByZWZpeH0gZnJvbSBcImNvbW1vbi9nYXRld2F5VXRpbHNcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmZ1bmN0aW9uIGxvb2t1cEFzc2V0cyh2YWx1ZSwgZ2F0ZXdheUFzc2V0cyA9IGZhbHNlLCBnZXRBc3NldExpc3QsIHNldFN0YXRlKSB7XG4gICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gXCJcIikgcmV0dXJuO1xuXG4gICAgbGV0IHF1b3RlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgIGlmIChxdW90ZS5zdGFydHNXaXRoKFwiR1BcIikgJiYgcXVvdGUubGVuZ3RoID49IDYpIHtcbiAgICAgICAgcXVvdGUgPSB2YWx1ZS5zdWJzdHIoMywgcXVvdGUubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgZ2V0QXNzZXRMaXN0KHF1b3RlLCAxMCwgZ2F0ZXdheUFzc2V0cyk7XG5cbiAgICBzZXRTdGF0ZSh7bG9va3VwUXVvdGU6IHF1b3RlfSk7XG59XG5cbmZ1bmN0aW9uIGFzc2V0RmlsdGVyKFxuICAgIHtzZWFyY2hBc3NldHMsIG1hcmtldFBpY2tlckFzc2V0LCBiYXNlQXNzZXQsIHF1b3RlQXNzZXR9LFxuICAgIHtpbnB1dFZhbHVlLCBsb29rdXBRdW90ZX0sXG4gICAgc2V0U3RhdGUsXG4gICAgY2hlY2tBbmRVcGRhdGVNYXJrZXRMaXN0XG4pIHtcbiAgICBzZXRTdGF0ZSh7YWN0aXZlU2VhcmNoOiB0cnVlfSk7XG5cbiAgICBsZXQgYXNzZXRDb3VudCA9IDA7XG4gICAgbGV0IGFsbE1hcmtldHMgPSBbXTtcblxuICAgIGxldCBiYXNlU3ltYm9sID0gYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICBsZXQgcXVvdGVTeW1ib2wgPSBxdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKTtcblxuICAgIGlmIChzZWFyY2hBc3NldHMuc2l6ZSAmJiAhIWlucHV0VmFsdWUgJiYgaW5wdXRWYWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHNlYXJjaEFzc2V0c1xuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5vcHRpb25zLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGEub3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ2aXNpYmxlXCIgaW4gZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uLnZpc2libGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXRDb3VudCA+IDEwMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGFzc2V0Q291bnQrKztcblxuICAgICAgICAgICAgICAgIGxldCBpc3N1ZXJOYW1lID0gZmV0Y2hJc3N1ZXJOYW1lKGFzc2V0Lmlzc3Vlcik7XG5cbiAgICAgICAgICAgICAgICBsZXQgYmFzZSA9IGJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gYXNzZXQuc3ltYm9sICsgXCJfXCIgKyBiYXNlO1xuXG4gICAgICAgICAgICAgICAgbGV0IGlzUXVvdGVBc3NldCA9IHF1b3RlU3ltYm9sID09IG1hcmtldFBpY2tlckFzc2V0O1xuICAgICAgICAgICAgICAgIGxldCBpbmNsdWRlQXNzZXQgPVxuICAgICAgICAgICAgICAgICAgICAoaXNRdW90ZUFzc2V0ICYmIGFzc2V0LnN5bWJvbCAhPSBiYXNlU3ltYm9sKSB8fFxuICAgICAgICAgICAgICAgICAgICAoIWlzUXVvdGVBc3NldCAmJiBhc3NldC5zeW1ib2wgIT0gcXVvdGVTeW1ib2wpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVBc3NldCkge1xuICAgICAgICAgICAgICAgICAgICBhbGxNYXJrZXRzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IGFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlcklkOiBhc3NldC5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyOiBpc3N1ZXJOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtldHNMaXN0ID0gc29ydE1hcmtldHNMaXN0KGFsbE1hcmtldHMsIGlucHV0VmFsdWUpO1xuICAgIGNoZWNrQW5kVXBkYXRlTWFya2V0TGlzdChtYXJrZXRzTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGdldE1hcmtldFNvcnRDb21wb25lbnRzKG1hcmtldCkge1xuICAgIGNvbnN0IHdlaWdodCA9IHt9O1xuICAgIGNvbnN0IHF1b3RlID0gbWFya2V0LnF1b3RlO1xuICAgIGlmIChxdW90ZS5pbmRleE9mKFwiLlwiKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgW2dhdGV3YXksIGFzc2V0XSA9IHF1b3RlLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgd2VpZ2h0LmdhdGV3YXkgPSBnYXRld2F5O1xuICAgICAgICB3ZWlnaHQuYXNzZXQgPSBhc3NldDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3ZWlnaHQuYXNzZXQgPSBxdW90ZTtcbiAgICB9XG4gICAgaWYgKG1hcmtldC5pc3N1ZXJJZCA9PT0gXCIxLjIuMFwiKSB3ZWlnaHQuaXNDb21taXR0ZWUgPSB0cnVlO1xuICAgIHJldHVybiB3ZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIHNvcnRNYXJrZXRzTGlzdChhbGxNYXJrZXRzLCBpbnB1dFZhbHVlKSB7XG4gICAgaWYgKGlucHV0VmFsdWUuc3RhcnRzV2l0aChcIkdQXCIpICYmIGlucHV0VmFsdWUubGVuZ3RoID49IDYpIHtcbiAgICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUuc3Vic3RyKDMsIGlucHV0VmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxNYXJrZXRzLnNvcnQoKFssIG1hcmtldEFdLCBbLCBtYXJrZXRCXSkgPT4ge1xuICAgICAgICBjb25zdCB3ZWlnaHRBID0gZ2V0TWFya2V0U29ydENvbXBvbmVudHMobWFya2V0QSk7XG4gICAgICAgIGNvbnN0IHdlaWdodEIgPSBnZXRNYXJrZXRTb3J0Q29tcG9uZW50cyhtYXJrZXRCKTtcblxuICAgICAgICBpZiAod2VpZ2h0QS5hc3NldCAhPT0gd2VpZ2h0Qi5hc3NldCkge1xuICAgICAgICAgICAgaWYgKHdlaWdodEEuYXNzZXQgPT09IGlucHV0VmFsdWUpIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICh3ZWlnaHRCLmFzc2V0ID09PSBpbnB1dFZhbHVlKSByZXR1cm4gMTtcbiAgICAgICAgICAgIGlmICh3ZWlnaHRBLmFzc2V0ID4gd2VpZ2h0Qi5hc3NldCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKHdlaWdodEEuYXNzZXQgPCB3ZWlnaHRCLmFzc2V0KSByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3ZWlnaHRBLmlzQ29tbWl0dGVlIF4gd2VpZ2h0Qi5pc0NvbW1pdHRlZSkge1xuICAgICAgICAgICAgaWYgKHdlaWdodEEuaXNDb21taXR0ZWUpIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICh3ZWlnaHRCLmlzQ29tbWl0dGVlKSByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFJc0tub3duR2F0ZXdheSA9IGhhc0dhdGV3YXlQcmVmaXgobWFya2V0QS5xdW90ZSk7XG4gICAgICAgIGNvbnN0IGJJc0tub3duR2F0ZXdheSA9IGhhc0dhdGV3YXlQcmVmaXgobWFya2V0Qi5xdW90ZSk7XG4gICAgICAgIGlmIChhSXNLbm93bkdhdGV3YXkgJiYgIWJJc0tub3duR2F0ZXdheSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoYklzS25vd25HYXRld2F5ICYmICFhSXNLbm93bkdhdGV3YXkpIHJldHVybiAxO1xuXG4gICAgICAgIGlmICh3ZWlnaHRBLmdhdGV3YXkgPiB3ZWlnaHRCLmdhdGV3YXkpIHJldHVybiAxO1xuICAgICAgICBpZiAod2VpZ2h0QS5nYXRld2F5IDwgd2VpZ2h0Qi5nYXRld2F5KSByZXR1cm4gLTE7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmZXRjaElzc3Vlck5hbWUoaXNzdWVySWQpIHtcbiAgICBsZXQgaXNzdWVyID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoaXNzdWVySWQsIGZhbHNlLCBmYWxzZSk7XG4gICAgaWYgKCFpc3N1ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpc3N1ZXIuZ2V0KFwibmFtZVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7bG9va3VwQXNzZXRzLCBhc3NldEZpbHRlciwgZmV0Y2hJc3N1ZXJOYW1lfTtcbiIsImltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7Y2hlY2tGZWVTdGF0dXNBc3luY30gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcclxuXHJcbi8vIFJldHVybnMgYSBsaXN0IG9mIGRpY3RzIHdpdGgga2V5cyBpZCwgc2VsbGVyIGFtb3VudCBhbmQgcHJpY2UgYW5kIHJlc3BlY3RpdmUgdmFsdWVzXHJcbmZ1bmN0aW9uIGdldE9yZGVycyhhbW91bnQsIG9yZGVycywgd2hhdEFtb3VudCkge1xyXG4gICAgY29uc3QgbWF0Y2hlZE9yZGVycyA9IFtdO1xyXG4gICAgbGV0IHRvdGFsQW1vdW50O1xyXG4gICAgb3JkZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gYi5nZXRQcmljZSgpIC0gYS5nZXRQcmljZSgpOyAvLyBnZXRQcmljZSA9PT0gX3JlYWxfcHJpY2VcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1hdGNoZWRPcmRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZWRPcmRlcnMuZm9yRWFjaCgoe29yZGVyfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG90YWxBbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgIHdoYXRBbW91bnQgPT09IFwicmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gb3JkZXIudG90YWxfZm9yX3NhbGUuZ2V0QW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBvcmRlci50b3RhbF90b19yZWNlaXZlLmdldEFtb3VudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b3RhbEFtb3VudCA+PSBhbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZE9yZGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogb3JkZXJzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogb3JkZXJzW2ldLmFtb3VudFRvUmVjZWl2ZSgpLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnQ6IG9yZGVyc1tpXS50b3RhbF90b19yZWNlaXZlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogb3JkZXJzW2ldLmdldFByaWNlKClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlZE9yZGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBvcmRlcnNbaV0sXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IG9yZGVyc1tpXS5hbW91bnRUb1JlY2VpdmUoKS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnQ6IG9yZGVyc1tpXS50b3RhbF90b19yZWNlaXZlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBvcmRlcnNbaV0uZ2V0UHJpY2UoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoZWRPcmRlcnM7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBkaWN0IHdpdGgga2V5cyBmZWVkUHJpY2UgYW5kIGxhc3RQcmljZVxyXG5mdW5jdGlvbiBnZXRQcmljZXMoYWN0aXZlTWFya2V0SGlzdG9yeSwgZmVlZFByaWNlKSB7XHJcbiAgICBsZXQgbGF0ZXN0UHJpY2U7XHJcbiAgICBpZiAoYWN0aXZlTWFya2V0SGlzdG9yeS5zaXplKSB7XHJcbiAgICAgICAgY29uc3QgbGF0ZXN0X3R3byA9IGFjdGl2ZU1hcmtldEhpc3RvcnkudGFrZSgyKTtcclxuICAgICAgICBjb25zdCBsYXRlc3QgPSBsYXRlc3RfdHdvLmZpcnN0KCk7XHJcbiAgICAgICAgbGF0ZXN0UHJpY2UgPSBsYXRlc3QuZ2V0UHJpY2UoKTtcclxuICAgIH1cclxuICAgIC8vIGZlZWQgcHJpY2UgPT09IG51bGwgaWYgbm90IGEgYml0YXNzZXQgbWFya2V0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhdGVzdFByaWNlOiBsYXRlc3RQcmljZSA/IGxhdGVzdFByaWNlIDogbnVsbCxcclxuICAgICAgICBmZWVkUHJpY2U6IGZlZWRQcmljZSA/IGZlZWRQcmljZS50b1JlYWwoKSA6IGZlZWRQcmljZVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGxpc3Qgb2YgYXNzZXQgaWRzIHRoYXQgdGhlIHVzZXIgY2FuIHNlbGxcclxuZnVuY3Rpb24gZ2V0QXNzZXRzVG9TZWxsKGFjY291bnQpIHtcclxuICAgIGxldCBhc3NldFR5cGVzID0gW107XHJcblxyXG4gICAgaWYgKCEoYWNjb3VudCAmJiBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBhc3NldFR5cGVzO1xyXG4gICAgfVxyXG4gICAgbGV0IGFjY291bnRCYWxhbmNlcyA9IGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xyXG5cclxuICAgIGFzc2V0VHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50QmFsYW5jZXMpLnNvcnQodXRpbHMuc29ydElEKTtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gYWNjb3VudEJhbGFuY2VzKSB7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChhY2NvdW50QmFsYW5jZXNba2V5XSk7XHJcbiAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGFzc2V0VHlwZXMuc3BsaWNlKGFzc2V0VHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFzc2V0VHlwZXM7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBkaWN0IHdpdGgga2V5cyBsaXF1aWRpdHlQZW5hbHR5LCBtYXJrZXRGZWUgYW5kIHRyYW5zYWN0aW9uRmVlLCBpbnB1dCBpcyBzZWxlY3RlZCBhc3NldHMgYW5kIGFtb3VudHNcclxuYXN5bmMgZnVuY3Rpb24gZ2V0RmVlcyhiYXNlQXNzZXQsIHF1b3RlQXNzZXQsIGN1cnJlbnRBY2NvdW50KSB7XHJcbiAgICBjb25zdCBiYXNlTWFya2V0RmVlUGVyY2VudCA9XHJcbiAgICAgICAgYmFzZUFzc2V0LmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pIC8gMTAwICsgXCIlXCI7XHJcbiAgICBjb25zdCBxdW90ZU1hcmtldEZlZVBlcmNlbnQgPVxyXG4gICAgICAgIHF1b3RlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSkgLyAxMDAgKyBcIiVcIjtcclxuICAgIGNvbnN0IGJhc2VNYXJrZXRGZWUgPSBiYXNlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSk7XHJcbiAgICBjb25zdCBxdW90ZU1hcmtldEZlZSA9IHF1b3RlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSk7XHJcblxyXG4gICAgY29uc3QgdHJ4RmVlID0gYXdhaXQgY2hlY2tGZWVTdGF0dXMoXHJcbiAgICAgICAgW2Jhc2VBc3NldCwgcXVvdGVBc3NldF0sXHJcbiAgICAgICAgY3VycmVudEFjY291bnRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYXJrZXRGZWU6IHtcclxuICAgICAgICAgICAgYmFzZU1hcmtldEZlZVBlcmNlbnQsXHJcbiAgICAgICAgICAgIHF1b3RlTWFya2V0RmVlUGVyY2VudCxcclxuICAgICAgICAgICAgYmFzZU1hcmtldEZlZSxcclxuICAgICAgICAgICAgcXVvdGVNYXJrZXRGZWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRyYW5zYWN0aW9uRmVlOiB0cnhGZWVcclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRmVlU3RhdHVzKGFzc2V0cyA9IFtdLCBhY2NvdW50KSB7XHJcbiAgICBsZXQgZmVlU3RhdHVzID0ge307XHJcbiAgICBsZXQgcCA9IFtdO1xyXG4gICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgcC5wdXNoKFxyXG4gICAgICAgICAgICBjaGVja0ZlZVN0YXR1c0FzeW5jKHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIGZlZUlEOiBhLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJsaW1pdF9vcmRlcl9jcmVhdGVcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwKVxyXG4gICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XHJcbiAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZlZVN0YXR1c1thLmdldChcImlkXCIpXSA9IHN0YXR1c1tpZHhdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZlZVN0YXR1cztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiY2hlY2tGZWVTdGF0dXNBc3luYyBlcnJvclwiLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge2dldE9yZGVycywgZ2V0UHJpY2VzLCBnZXRGZWVzLCBnZXRBc3NldHNUb1NlbGx9O1xyXG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgbm93IGZyb20gJy4vbm93LmpzJztcbmltcG9ydCB0b051bWJlciBmcm9tICcuL3RvTnVtYmVyLmpzJztcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==