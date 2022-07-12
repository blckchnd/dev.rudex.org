"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[0],{

/***/ 2702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1964);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1962);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1963);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(559);
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

/***/ 3418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MarketCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3419);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(521);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1941);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(656);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1816);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2338);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(621);
/* harmony import */ var _DashboardRuDEX_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3420);













class Dashboard extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      marketStats: this.props.marketStats,
      featuredMarkets: [],
      volume24_usdt: 0,
      markets: [],
      updating: true,
      timeOutID: undefined
    };
    this._setDimensions = this._setDimensions.bind(this);
    this.pingMarkets = this.pingMarkets.bind(this);
  }

  componentDidMount() {
    this._setDimensions();

    window.addEventListener("resize", this._setDimensions, {
      capture: false,
      passive: true
    });
  }

  UNSAFE_componentWillMount() {
    let data = this.calcVolumeSort();
    this.setState({
      featuredMarkets: data
    });
    let timeOutID = setTimeout(this.pingMarkets, 5000);
    this.setState({
      timeOutID: timeOutID
    });
  }

  pingMarkets() {
    let timeOutID;
    let allMarketStats = _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().allMarketStats;

    if (allMarketStats.size !== 0) {
      if (allMarketStats.toJSON().hasOwnProperty("GPH_RUDEX.USDT")) {//console.log("allMarketStats: " + JSON.stringify((allMarketStats.toJSON())["GPH_RUDEX.USDT"]));
        //console.log("----------------------------------------------------------------");
      }

      if (allMarketStats.toJSON().hasOwnProperty("RUDEX.USDT_GPH")) {//console.log("allMarketStats: " + JSON.stringify((allMarketStats.toJSON())["RUDEX.USDT_GPH"]));
        //console.log("----------------------------------------------------------------");
      }

      let data = this.calcVolumeSort();
      this.setState({
        featuredMarkets: data,
        marketStats: allMarketStats,
        updating: false
      });
      timeOutID = setTimeout(this.pingMarkets, 20000);
    } else {
      timeOutID = setTimeout(this.pingMarkets, 5000);
    }

    this.setState({
      timeOutID: timeOutID
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextState.featuredMarkets, this.state.featuredMarkets) || nextProps.marketStats !== this.props.marketStats || nextState.marketStats !== this.state.marketStats || nextState.volume24_usdt !== this.state.volume24_usdt || nextState.width !== this.state.width;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._setDimensions);
  }

  _setDimensions() {
    let width = window.innerWidth;

    if (width !== this.state.width) {
      this.setState({
        width
      });
    }
  }

  getVolumeUSDT(quote, base, allMarketStats) {
    let marketStats1 = allMarketStats.get(`${quote}_${base}`);
    let volume_usdt = 0;

    if (marketStats1 && quote == "RUDEX.USDT") {
      volume_usdt = marketStats1.volumeQuote * 1;
    } else {
      try {
        let marketStats_to_USDT = allMarketStats.get(`RUDEX.USDT_${quote}`);
        let price;

        if (marketStats_to_USDT && marketStats_to_USDT.price && marketStats_to_USDT.price.quote.amount != 0) {
          price = marketStats_to_USDT.price.quote.amount / marketStats_to_USDT.price.base.amount * Math.pow(10, marketStats_to_USDT.price.base.precision) / Math.pow(10, marketStats_to_USDT.price.quote.precision);
          volume_usdt = marketStats1.volumeQuote * price * 1;
        }
      } catch (e) {//console.log(`log error ${quote} / ${base} : volume_usdt: ${volume_usdt}`);
      }
    }

    return volume_usdt;
  }

  _SortFilterPairs(pairs) {
    let sortPairs = pairs.map(pair => {
      let res = (0,branding__WEBPACK_IMPORTED_MODULE_10__.getFeaturedMarkets)().find(el => {
        if (el[0] == pair[1] && el[1] == pair[0]) {
          return true;
        } else return false;
      });

      if (res) {
        //Not in 2nd place
        if (pair[0] === "RUDEX.USDT") {
          return [pair[0], pair[1], 0];
        }

        return [pair[1], pair[0], 0];
      } else {
        //Not in 2nd place
        if (pair[0] === "RUDEX.USDT") {
          return [pair[0], pair[1], 0];
        }

        return [pair[0], pair[1], 0];
      } //Not in 2nd place


      if (pair[1] === "RUDEX.USDT" || pair[1] === "RUDEX.BUSD" || pair[1] === "GPH" || pair[1] === "USD" || pair[1] === "EUR" || pair[1] === "RUB" || pair[1] === "CNY" || pair[1] === "GOLD" || pair[1] === "SILVER" || pair[1] === "RUDEX.BTS" || pair[1] === "RUDEX.EOS" //||
      ) {
        return [pair[1], pair[0], 0];
      } //Not in 1nd place


      if (pair[0] === "RUDEX.XMR" || pair[0] === "RUDEX.BTC" || pair[0] === "RUDEX.BTCB" //||
      ) {
        return [pair[1], pair[0], 0];
      }

      return [pair[0], pair[1], 0];
    });
    return sortPairs;
  }

  calcVolumeSort() {
    let pairs = [];
    let pairsNew = [];
    let volume24_usdt = 0;
    let all_coins = (0,branding__WEBPACK_IMPORTED_MODULE_10__.getMyMarketsQuotes)();

    for (let i = 0; i < all_coins.length - 1; i++) {
      for (let k = i + 1; k < all_coins.length; k++) {
        //pairs.push([all_coins[i], all_coins[k], 0]);
        pairs.push([all_coins[i], all_coins[k], 0, 0, 0, 0]);
      }
    }

    pairs = this._SortFilterPairs(pairs);
    let allMarketStats = _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().allMarketStats;
    if (allMarketStats.size == 0) return pairs; //console.log("allMarketStats.size: " + allMarketStats.size);
    //console.log("allMarketStats: " + JSON.stringify(allMarketStats));

    for (let i = 0; i < pairs.length - 1; i++) {
      let volume_usdt = 0;
      volume_usdt = this.getVolumeUSDT(pairs[i][0], pairs[i][1], allMarketStats); //pairsNew.push([pairs[i][0], pairs[i][1], volume_usdt]);

      let pairStat = allMarketStats.get(`${pairs[i][1]}_${pairs[i][0]}`);
      let price = pairStat !== undefined ? pairStat.price : 0;
      let volume = pairStat !== undefined ? pairStat.volumeQuote : 0;
      let change = pairStat !== undefined ? pairStat.change : 0;
      pairsNew.push([pairs[i][0], pairs[i][1], volume_usdt, price, volume, change]);
      volume24_usdt = volume24_usdt + volume_usdt;
    }

    this.setState({
      volume24_usdt: volume24_usdt
    });
    return pairsNew;
  }

  render() {
    let {
      featuredMarkets,
      marketStats
    } = this.state;
    let validMarkets = 0;
    let markets = featuredMarkets.sort(function (a, b) {
      return b[2] * 1 - a[2] * 1;
    }).map(pair => {
      validMarkets++;
      let className = "";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MarketCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: validMarkets,
        marketId: pair[1] + "_" + pair[0],
        className: className,
        quote: pair[0],
        base: pair[1],
        volumeUSDT: pair[2],
        history: this.props.history,
        hide: validMarkets > 400,
        price: pair[3],
        volume: pair[4],
        change: pair[5]
      });
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical dashboardRuDEX"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: "container",
      className: "grid-container"
    }, this.state.updating === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-frame vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], {
      loadingText: counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("footer.loading")
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-frame vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "block-content-header",
      style: {
        padding: 0,
        margin: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingBottom: "24px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "exchange.volume_24",
      component: "h1",
      style: {
        margin: "10px 0px 5px 0rem"
      }
    }), " $", common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(this.state.volume24_usdt, 2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-up-1 medium-up-3 large-up-4  no-overflow fm-outer-container"
    }, this.state.volume24_usdt === 0 ? null : markets)), marketStats === undefined || marketStats.size === 0 ? markets : null));
  }

}

let DashboardWrapper = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Dashboard, props);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardWrapper = (0,alt_react__WEBPACK_IMPORTED_MODULE_7__.connect)(DashboardWrapper, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__["default"], _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_8__["default"]];
  },

  getProps() {
    return {
      viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().viewSettings,
      marketStats: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().allMarketStats
    };
  }

}));

/***/ }),

/***/ 3419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1962);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1963);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2088);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2339);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2338);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1816);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(607);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(621);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1825);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(657);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(656);


















class MarketCard extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    quote: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired,
    base: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired //invert: PropTypes.bool

  };
  static defaultProps = {//invert: true
  };

  constructor(props) {
    super(props);
    this.statsInterval = null;
    this.state = {
      imgError: false,
      base: this.props.base,
      quote: this.props.quote,
      marketStats: this.props.marketStats,
      starredMarkets: this.props.starredMarkets,
      history: this.props.history,
      volumeUSDT: this.props.volumeUSDT,
      price: this.props.price,
      volume: this.props.volume,
      change: this.props.change
    };
  }

  _toggleMarket(e, quote, base) {
    if (e) {
      e.preventDefault();
    }

    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.defer(base, quote);
    let marketStats = stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().allMarketStats.get(`${quote.get("symbol")}_${base.get("symbol")}`);
    this.statsInterval = setInterval(actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.bind(this, base, quote), 30 * 1000);
    this.setState({
      base: quote,
      quote: base,
      marketStats: marketStats,
      price: marketStats ? marketStats.price : 0,
      volume: marketStats ? marketStats.volumeQuote : 0,
      change: marketStats ? marketStats.change : 0
    });
  }

  _checkStats(newStats = {
    close: {},
    price: {}
  }, oldStats = {
    close: {},
    price: {}
  }) {
    return false;
    /*        return (
                newStats.volumeQuote !== oldStats.volumeQuote ||
                !utils.are_equal_shallow(
                    newStats.close && newStats.close.base,
                    oldStats.close && oldStats.close.base
                ) ||
                !utils.are_equal_shallow(
                    newStats.close && newStats.close.quote,
                    oldStats.close && oldStats.close.quote
                ) ||
                  // HERE !!!
                newStats.change !== oldStats.change ||
                 newStats.volumeBase !== oldStats.volumeBase ||
                 !utils.are_equal_shallow(
                    newStats.price && newStats.price.quote,
                    oldStats.price && oldStats.price.quote
                ) ||
                !utils.are_equal_shallow(
                    newStats.price && newStats.price.base,
                    oldStats.price && oldStats.price.base
                )
            );*/
  }

  shouldComponentUpdate(np, ns) {
    if (this._checkStats(ns.marketStats, this.state.marketStats) == true) console.log("checkStats " + this._checkStats(ns.marketStats, this.state.marketStats));
    return this._checkStats(ns.marketStats, this.state.marketStats) || ns.imgError !== this.state.imgError || ns.starredMarkets !== this.state.starredMarkets || ns.base.get("id") !== this.state.base.get("id") || ns.quote.get("id") !== this.state.quote.get("id") || np.volumeUSDT !== this.props.volumeUSDT || np.price !== this.props.price || np.volume !== this.props.volume || np.change !== this.props.change;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (nextProps.quote.get("symbol") !== this.state.quote.get("symbol") || nextProps.base.get("symbol") !== this.state.base.get("symbol")) {
      this.setState({
        quote: nextProps.quote,
        base: nextProps.base
      });
    }

    if (nextProps.volumeUSDT !== this.state.volumeUSDT) {
      //console.log("Will be update VOLUME: " + nextProps.volumeUSDT);
      this.setState({
        volumeUSDT: nextProps.volumeUSDT
      });
    }

    if (nextProps.price !== this.state.price || nextProps.volume !== this.state.volume || nextProps.change !== this.state.change) {
      //console.log("Will be update price/volume/change: ");
      this.setState({
        price: nextProps.price,
        volume: nextProps.volume,
        change: nextProps.change
      });
    }
  }

  UNSAFE_componentWillMount() {
    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.defer(this.state.quote, this.state.base);
    let marketStats = stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().allMarketStats.get(`${this.state.base.get("symbol")}_${this.state.quote.get("symbol")}`);
    this.statsInterval = setInterval(actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.bind(this, this.state.quote, this.state.base), 30 * 1000);
    this.setState({
      marketStats: marketStats,
      price: marketStats ? marketStats.price : 0,
      volume: marketStats ? marketStats.volumeQuote : 0,
      change: marketStats ? marketStats.change : 0
    });
  }

  componentWillUnmount() {
    clearInterval(this.statsInterval);
  }

  goToMarket(e) {
    //e.preventDefault();
    let history = this.state.history;
    history.push(`/market/${this.state.base.get("symbol")}_${this.state.quote.get("symbol")}`);
  }

  _addMarket(quote, base) {
    let marketID = `${quote}_${base}`;

    if (!this.state.starredMarkets.has(marketID)) {
      _actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].addStarMarket(quote, base);
    } else {
      _actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__["default"].removeStarMarket(quote, base);
    }

    this.setState({
      starredMarkets: _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().starredMarkets
    });
  }

  _onError(imgName) {
    if (!this.state.imgError) {
      this.refs[imgName.toLowerCase()].src = "asset-symbols/unknown.png";
      this.setState({
        imgError: true
      });
    }
  }

  render() {
    let {
      hide,
      isLowVolume //volumeUSDT

    } = this.props;
    let {
      base,
      quote,
      marketStats,
      volumeUSDT,
      price,
      volume,
      change
    } = this.state;
    if (isLowVolume || hide) return null;
    if (!marketStats || volumeUSDT < 1) return null;
    price = price && price ? common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].price_text(price.toReal(), base, quote) : null;
    volume = !volume ? null : common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].format_volume(volume, quote.get("precision"));
    change = !change ? null : change;

    function getImageName(asset) {
      if (asset === null) return null;
      let symbol = asset.get("symbol");
      if (symbol.startsWith("RUDEX.")) return symbol;
      if ((0,_branding__WEBPACK_IMPORTED_MODULE_10__.get_allTokens)().nativeTokens.indexOf(symbol) !== -1 || symbol == "DONATE" || symbol == "DEXBOT") return symbol;
      return "unknown";
    }

    let imgName = getImageName(base);
    let changeClass = !change ? "" : parseFloat(change) > 0 ? "change-up" : parseFloat(change) < 0 ? "change-down" : "";
    let marketID = `${base.get("symbol")}_${quote.get("symbol")}`;
    const starClass = this.state.starredMarkets.has(marketID) ? "gold-star" : "grey-star";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("grid-block no-overflow fm-container", this.props.className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical shrink",
      style: {
        cursor: "pointer"
      },
      onClick: e => {
        this.goToMarket(e);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "v-align"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "align-center",
      ref: imgName.toLowerCase(),
      onError: this._onError.bind(this, imgName),
      style: {
        maxWidth: 70
      },
      src: `${""}asset-symbols/${imgName.toLowerCase()}.png`
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fm-name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dataPlace: "top",
      name: base.get("symbol")
    }), " ", ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dataPlace: "top",
      name: quote.get("symbol")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "label-actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      component: "span",
      className: "stat-text",
      content: "exchange.trading_pair"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      onClick: e => {
        this._toggleMarket(e, quote, base);
      },
      "data-intro": counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("walkthrough.switch_button"),
      style: {
        padding: "0px 5px 0px 5px",
        display: "inline",
        cursor: "pointer"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "shuffle",
      name: "shuffle",
      title: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("icons.shuffle")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        this._addMarket(base.get("symbol"), quote.get("symbol"));
      },
      "data-intro": counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("walkthrough.favourite_button")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: starClass,
      name: "fi-star",
      title: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("icons.fi_star.market")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical no-overflow",
      style: {
        marginTop: "10px",
        cursor: "pointer"
      },
      onClick: e => {
        this.goToMarket(e);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fm-volume"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "exchange.price"
    }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "float-right"
    }, price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fm-volume"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "exchange.volume"
    }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "float-right"
    }, volume)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fm-volume"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "exchange.volume_24_usdt"
    }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "float-right"
    }, common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].format_volume(volumeUSDT, 2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fm-change"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "exchange.change"
    }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("float-right", changeClass)
    }, change, "%")))));
  }

}

MarketCard = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(MarketCard);

class MarketCardWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MarketCard, this.props);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_7__.connect)(MarketCardWrapper, {
  listenTo() {
    return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
  },

  getProps(props) {
    return {
      marketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().allMarketStats.get(props.marketId),
      starredMarkets: _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_14__["default"].getState().starredMarkets
    };
  }

}));

/***/ }),

/***/ 3417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(607);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1816);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2112);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(589);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(605);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(437);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1962);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1963);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1825);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(606);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2111);

















const MAX_LOOKUP_ATTEMPTS = 5;
/*
 * @brief Allows the user to enter an account by name or #ID
 *
 * This component is designed to be stateless as possible.  It's primary responsbility is to
 * manage the layout of data and to filter the user input.
 *
 */

class AccountSelectorListing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    label: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    // a translation key for the label
    error: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().element),
    // the error message override
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    // the placeholder text to be displayed when there is no user_input
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),
    // a method to be called any time user input changes
    onAccountChanged: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),
    // a method to be called when existing account is selected
    onAction: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),
    // a method called when Add button is clicked
    accountName: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    // the current value of the account selector, the string the user enters
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAccount,
    // account object retrieved via BindToChainState decorator (not input)
    tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number),
    // tabindex property to be passed to input tag
    disableActionButton: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    // use it if you need to disable action button,
    allowUppercase: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    // use it if you need to allow uppercase letters
    typeahead: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    excludeAccounts: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().array),
    // array of accounts to exclude from the typeahead
    focus: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    editable: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    locked: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    requireActiveSelect: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    noForm: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool)
  };
  static defaultProps = {
    autosubscribe: false,
    excludeAccounts: [],
    disabled: null,
    editable: null,
    locked: false,
    requireActiveSelect: true,
    // Should not be set to false, required for fallback
    noForm: false
  };

  constructor(props) {
    super(props);
    this.state = {
      accountIndex: [],
      locked: null
    };
    this.timer = null;
  }

  componentDidMount() {
    let {
      account,
      accountName
    } = this.props; // Populate account search array, fetch only once

    if (accountName) {
      this._addThisToIndex(accountName);
    }

    this.props.myActiveAccounts.map(a => {
      this._addThisToIndex(a);
    });
    this.props.contacts.map(a => {
      this._addThisToIndex(a);
    });

    this._fetchAccounts();

    if (this.props.onAccountChanged && account) this.props.onAccountChanged(account);
    if (!this.props.typeahead && accountName) this.onInputChanged(accountName);
  }

  componentDidUpdate(prevProps) {
    if (this.props.focus && !!this.props.editable && !this.props.disabled) {
      this.refs.user_input.focus();
    }

    if (prevProps.account && prevProps.account !== this.props.account) {
      if (this.props.onAccountChanged) {
        this.props.onAccountChanged(this.props.account);
      }
    }
  }

  _addToIndex(accountName, noDelay = false) {
    if (noDelay) {
      this._addThisToIndex(accountName);

      this._fetchAccounts();
    } else {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this._addToIndex(accountName, true);
      }, 500);
    }
  }

  _addThisToIndex(accountName) {
    let {
      accountIndex
    } = this.state;
    if (!accountName) return;
    let inAccountList = accountIndex.find(a => a.name === accountName);

    if (accountName && !inAccountList) {
      accountIndex.push({
        name: accountName,
        data: null,
        attempts: 0
      });
    }
  }

  _getIndex(name, index) {
    return index.findIndex(a => a.name === name);
  }

  _getSearchArray() {
    let {
      accountIndex
    } = this.state; // For all objects in search_array, query with FetchChainObjects
    // Update results for each object with returned data and remove from search_array
    // Update search_array for all remaining objects with increased attempts count
    // which is when account does not exists, but can also be if node failed to send results
    // back in time, so we query at least `MAX_LOOKUP_ATTEMPTS` times before we stop
    // Filter out what objects we still require data for

    let search_array = accountIndex.filter(search => {
      return !search.data && search.attempts < MAX_LOOKUP_ATTEMPTS ? search.name : null;
    }).map(search => {
      return search.name;
    });
    return search_array;
  }

  _fetchAccounts() {
    let {
      accountIndex
    } = this.state;

    let search_array = this._getSearchArray();

    if (search_array.length > 0) {
      if (false) {}
      (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.FetchChainObjects)(bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getAccount, search_array, 3000, {}).then(accounts => {
        accounts.forEach(account => {
          if (account) {
            let objectIndex = this._getIndex(account.get("name"), accountIndex);

            let result = this._populateAccountIndex(account);

            if (result) {
              accountIndex[objectIndex] = result;
              search_array.splice(account.get("name"));
            }
          }
        });
        search_array.forEach(account_to_find => {
          let objectIndex = this._getIndex(account_to_find, accountIndex);

          accountIndex[objectIndex].attempts++;
        });
        this.setState({
          accountIndex: accountIndex
        }); // Run another fetch of accounts if data is still missing

        let isDataMissing = this.state.accountIndex.find(a => !a.data && a.attempts < MAX_LOOKUP_ATTEMPTS);

        if (isDataMissing) {
          setTimeout(() => {
            this._fetchAccounts();
          }, 500);
        }
      });
    }
  }

  _populateAccountIndex(accountResult) {
    let {
      myActiveAccounts,
      contacts
    } = this.props; // Should not happen, just failsafe

    if (!accountResult) return null;
    let accountName = accountResult.get("name");
    let accountStatus = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getAccountMemberStatus(accountResult);
    let accountType = this.getInputType(accountName);
    let statusLabel = !common_account_utils__WEBPACK_IMPORTED_MODULE_12__["default"].isKnownScammer(accountName) ? counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.member." + accountStatus) : counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.member.suspected_scammer");
    let rightLabel = accountType === "name" ? "#" + accountResult.get("id").substring(4) : accountType === "id" ? accountResult.get("name") : accountType == "pubkey" && this.props.allowPubKey ? "Public Key" : null;
    return {
      name: accountName,
      attempts: 0,
      data: {
        id: accountResult.get("id"),
        name: accountName,
        type: accountType,
        status: accountStatus,
        isOwnAccount: myActiveAccounts.has(accountName),
        isContact: contacts.has(accountName),
        isKnownScammer: common_account_utils__WEBPACK_IMPORTED_MODULE_12__["default"].isKnownScammer(accountName),
        statusLabel: statusLabel,
        rightLabel: rightLabel,
        className: common_account_utils__WEBPACK_IMPORTED_MODULE_12__["default"].isKnownScammer(accountName) || !accountResult ? "negative" : null
      }
    };
  } // can be used in parent component: this.refs.account_selector.getAccount()


  getAccount() {
    return this.props.account;
  }

  getError() {
    let {
      account,
      accountName,
      error,
      typeahead
    } = this.props;
    let inputType = accountName ? this.getInputType(accountName) : null;

    if (!typeahead) {
      if (!account && accountName && inputType !== "pubkey") {
        error = counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.errors.unknown");
      }
    } else {// Typeahead can't select an unknown account!
      // if (
      //     !(allowPubKey && inputType === "pubkey") &&
      //     !error &&
      //     accountName &&
      //     !account
      // )
      //     error = counterpart.translate("account.errors.unknown");
    }

    if (!error && account && !inputType) error = counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.errors.invalid");
    return error;
  }

  getInputType(value) {
    // OK
    if (!value) return null;
    if (value[0] === "#" && common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].is_object_id("1.2." + value.substring(1))) return "id";
    if (bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainValidation.is_account_name(value, true)) return "name";
    if (this.props.allowPubKey && bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.PublicKey.fromPublicKeyString(value)) return "pubkey";
    return null;
  }

  getVerifiedAccountName(e) {
    let {
      allowUppercase
    } = this.props;
    let value = null;

    if (typeof e === "string") {
      value = e;
    } else if (e && e.target) {
      value = e.target.value.trim();
    } else {
      value = "";
    }

    if (!allowUppercase) value = value.toLowerCase(); // If regex matches ^.*#/account/account-name/.*$, parse out account-name

    let _value = value.replace("#", "").match(/(?:\/account\/)(.*)/);

    if (_value) value = _value[1];
    return value;
  }

  _notifyOnChange(selectedAccountName, inputType) {
    let {
      props
    } = this; // Clear selected account when we have new input data if we require an active select

    if (inputType == "input" && this.props.typeahead && this.props.requireActiveSelect) {
      if (!!props.onAccountChanged) {
        props.onAccountChanged(null);
      }

      if (!!props.onChange) {
        props.onChange(null);
      }
    }

    let accountName = this.getVerifiedAccountName(selectedAccountName); // Synchronous onChange for input change

    if (!!props.onChange && (!!accountName || accountName === "")) {
      props.onChange(accountName);
    } // asynchronous onAccountChanged for checking on chain


    if (!!props.onAccountChanged) {
      (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.FetchChain)("getAccount", accountName, undefined, {
        [accountName]: false
      }).then(account => {
        if (!!account && (this.props.requireActiveSelect && inputType == "select" || !this.props.requireActiveSelect)) {
          props.onAccountChanged(account);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }

  onSelect(selectedAccountName) {
    this._notifyOnChange(selectedAccountName, "select");
  }

  onInputChanged(e) {
    this._addToIndex(this.getVerifiedAccountName(e));

    this._notifyOnChange(e, "input");
  }

  onKeyDown(e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      this.onAction(e);
    }
  }

  _onAddContact() {
    actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__["default"].addAccountContact(this.props.accountName);
  }

  _onRemoveContact() {
    actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__["default"].removeAccountContact(this.props.accountName);
  }

  onAction(e) {
    let {
      onAction,
      disableActionButton,
      account,
      accountName
    } = this.props;
    e.preventDefault();

    if (!this.getError() && onAction && !disableActionButton) {
      if (account) onAction(account);else if (this.getInputType(accountName) === "pubkey") onAction(accountName);
    }
  }

  render() {
    let {
      accountIndex
    } = this.state;
    let {
      account,
      accountName,
      disableActionButton
    } = this.props;
    let searchInProgress = this.state.accountIndex.find(a => !a.data && a.attempts < MAX_LOOKUP_ATTEMPTS);
    const lockedState = this.state.locked !== null ? this.state.locked : this.props.locked;
    let error = this.getError(),
        formContainer,
        selectedAccount,
        disabledAction,
        disabledInput,
        editableInput,
        linked_status;
    editableInput = !!lockedState ? false : this.props.editable != null ? this.props.editable : undefined;
    disabledInput = !!lockedState ? true : this.props.disabled != null ? this.props.disabled : undefined; // Selected Account

    if (account) {
      let objectIndex = this._getIndex(account.get("name"), accountIndex);

      selectedAccount = accountIndex && accountIndex[objectIndex] ? accountIndex[objectIndex].data : null;
    }

    disabledAction = !(account || selectedAccount && selectedAccount.type === "pubkey") || error || disableActionButton;

    if (selectedAccount && selectedAccount.isOwnAccount) {
      linked_status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
        placement: "top",
        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("tooltip.own_account")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "tooltip green"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
        type: "user"
      })));
    } else if (selectedAccount && selectedAccount.isKnownScammer) {
      linked_status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
        placement: "top",
        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("tooltip.scam_account")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "tooltip red"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
        type: "warning",
        theme: "filled"
      })));
    } else if (selectedAccount && selectedAccount.isContact) {
      linked_status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
        placement: "top",
        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("tooltip.follow_user"),
        onClick: this._onRemoveContact.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "tooltip green"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
        type: "star",
        theme: "filled"
      })));
    } else if (selectedAccount) {
      linked_status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
        placement: "top",
        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("tooltip.follow_user_add"),
        onClick: this._onAddContact.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "tooltip"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
        type: "star"
      })));
    }

    if (this.props.typeahead) {
      let optionsContainer = accountIndex.filter(account => {
        // Filter accounts based on
        // - Exclude without results (missing chain data at the moment)
        // - Excluded accounts (by props)
        // - Include users own accounts (isOwnAccount)
        // - Include users contacts (isContact) unless it's a previously locked input
        // - Include current input
        if (!account.data) {
          return null;
        }

        if (this.props.excludeAccounts.indexOf(account.id) !== -1) {
          return null;
        }

        if (account.data.isOwnAccount || !this.props.locked && account.data.isContact || accountName && account.data.name === accountName) {
          return account;
        }
      }).sort((a, b) => {
        if (a.data.isOwnAccount < b.data.isOwnAccount) {
          if (a.data.name > b.data.name) {
            return 1;
          } else {
            return -1;
          }
        } else {
          return -1;
        }
      }).map(account => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Select.Option, {
          key: account.data.id,
          value: account.data.name,
          disabled: account.data.disabled ? true : undefined
        }, account.data.isOwnAccount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
          type: "user"
        }) : null, account.data.isContact ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
          type: "star"
        }) : null, account.data.isKnownScammer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
          type: "warning"
        }) : null, "\xA0", account.data.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            float: "right"
          }
        }, account.data.statusLabel));
      });
      formContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Select, {
        showSearch: true,
        optionLabelProp: "value",
        onSelect: this.onSelect.bind(this),
        onSearch: this.onInputChanged.bind(this),
        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.search"),
        notFoundContent: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("global.not_found"),
        value: selectedAccount ? selectedAccount.name : null,
        disabled: disabledInput ? true : undefined
      }, optionsContainer);
    } else {
      formContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Input, {
        style: {
          textTransform: selectedAccount && selectedAccount.type === "pubkey" ? null : "lowercase",
          fontVariant: "initial"
        },
        name: "username",
        id: "username",
        autoComplete: !!this.props.editable ? "username" : undefined,
        type: "text",
        value: this.props.accountName || "",
        placeholder: this.props.placeholder || counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.name"),
        disabled: this.props.disabled ? true : undefined,
        ref: "user_input",
        onChange: this.onInputChanged.bind(this),
        onKeyDown: this.onKeyDown.bind(this),
        tabIndex: !this.props.editable || !!this.props.disabled ? -1 : this.props.tabIndex,
        editable: !!editableInput ? editableInput.toString() : undefined,
        readOnly: !!editableInput ? (!editableInput).toString() : undefined
      });
    }

    let accountImageContainer = this.props.hideImage ? null : selectedAccount && selectedAccount.accountType === "pubkey" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "account-image"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "key",
      title: "icons.key",
      size: "4x"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: {
        height: this.props.size || 33,
        width: this.props.size || 33
      },
      account: selectedAccount ? selectedAccount.name : null,
      custom_image: null
    });
    let lockedStateContainer = !lockedState ? null : "";
    let rightLabelContainer = !this.props.label || !selectedAccount ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-area" + (this.props.hideImage ? " no-margin" : "")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("right-label", selectedAccount.isContact || selectedAccount.isOwnAccount ? "positive" : null, selectedAccount.isKnownScammer ? "negative" : null),
      style: {
        marginTop: -30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        paddingRight: "0.5rem"
      }
    }, selectedAccount.rightLabel, "\xA0", selectedAccount.displayText), linked_status));
    const FormWrapper = this.props.noForm ? react__WEBPACK_IMPORTED_MODULE_0__.Fragment : bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Form;
    const formWrapperProps = this.props.noForm ? {} : {
      className: "full-width",
      layout: "vertical",
      style: this.props.style
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
      className: "input-area",
      title: this.props.tooltip,
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormWrapper, formWrapperProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Form.Item, {
      label: this.props.label ? counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate(this.props.label) : "",
      validateStatus: error ? "error" : null,
      help: error ? error : null
    }, rightLabelContainer, this.props.useHR && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label input-wrapper"
    }, accountImageContainer, formContainer, searchInProgress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
      type: "loading",
      style: {
        padding: 10
      }
    }) : null, lockedStateContainer, this.props.children, this.props.onAction ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("tooltip.required_input", {
        type: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("global.field_type.account")
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Button, {
      type: "primary",
      disabled: disabledAction,
      onClick: this.onAction.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_6___default()), {
      content: this.props.action_label
    }))) : null))));
  }

}

AccountSelectorListing = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(AccountSelectorListing);
AccountSelectorListing = (0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(AccountSelectorListing, {
  listenTo() {
    return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    return {
      myActiveAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().myActiveAccounts,
      contacts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().accountContacts
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountSelectorListing);

/***/ }),

/***/ 3413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3414);
/* harmony import */ var _DonateSendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3416);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(656);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1816);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(589);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1825);











class CoinCardListing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.props.coin.votes = 0;
  }

  triggerSend(asset) {
    this.setState({
      send_asset: asset
    }, () => {
      if (this.send_modal) this.send_modal.show();
    });
  }

  render() {
    let from_name = "";

    try {
      this.props.account.get("name");
    } catch (e) {}

    let {
      coin
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DonateSendModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "send_modal_listing",
      refCallback: e => {
        if (e) this.send_modal = e;
      },
      from_name: this.props.currentAccount ? this.props.currentAccount : this.props.account,
      to_name: coin.account ? coin.account : from_name,
      asset_id: "1.3.2",
      ticker: coin.ticker
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAsset"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableRank align-center"
    }, this.props.rank), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableLogo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "align-center",
      style: {
        maxWidth: 40
      },
      src: `${""}coins-logo/${coin.ticker.toLowerCase()}.png`,
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableAssetName align-left nowrap"
    }, coin.name, " (", coin.ticker, ")", coin.soon === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.table.coming_soon",
      style: {
        float: "right",
        color: "gold"
      }
    }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableLogo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      href: coin.page,
      content: "listing.goto",
      component: "a",
      target: "_blank"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoData"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableGoal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoBlock"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.table.goal"
    }), ":\xA0", " "), coin.goal), coin.listed ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableVotes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoBlock"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.table.donates"
    }), ":\xA0"), coin.votes, coin.soon === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "coin-soon",
      onClick: this.triggerSend.bind(this, "1.3.2", coin),
      disabled: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.donate"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("listing.modal.header2"),
      onClick: this.triggerSend.bind(this, "1.3.2", coin)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
      style: {
        margin: "-3px 0 0px 0px"
      },
      name: "donate",
      title: "listing.modal.header2",
      className: "icon-14x",
      onClick: this.triggerSend.bind(this, "1.3.2", coin)
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableStatus"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoBlock"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.table.status"
    }), ":\xA0", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.table." + coin.status
    }))), coin.listed ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableProgress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DonutChart__WEBPACK_IMPORTED_MODULE_1__.DonutChart, {
      votes: coin.votes_for_percent,
      goal: coin.goal
    })))));
  }

}

CoinCardListing = (0,alt_react__WEBPACK_IMPORTED_MODULE_5__.connect)(CoinCardListing, {
  listenTo() {
    return [_stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"], _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
  },

  getProps() {
    return {
      settings: _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().settings,
      currentAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().passwordAccount
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinCardListing);

/***/ }),

/***/ 3416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2308);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Modal_SendModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2083);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(589);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1816);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(437);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2084);
/* harmony import */ var _AccountSelectorListing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3417);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2095);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2117);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(621);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(637);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















class DonateSendModal extends _Modal_SendModal__WEBPACK_IMPORTED_MODULE_1__.SendModal {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (np.to_name !== this.state.to_name) {
      this.setState({
        to_name: np.to_name ? np.to_name : "",
        to_account: np.to_name ? bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getAccount(np.to_name) : null
      });
    }
  }

  render() {
    let {
      propose,
      from_account,
      to_account,
      asset,
      asset_id,
      propose_account,
      feeAmount,
      amount,
      to_name,
      from_name,
      memo,
      balanceError,
      hidden
    } = this.state;
    let from_my_account = _stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"].isMyAccount(from_account) || from_name === this.props.passwordAccount;
    let from_error = from_account && !from_my_account && !propose ? true : false;

    let {
      asset_types
    } = this._getAvailableAssets();

    let balance = null;

    if (from_account && from_account.get("balances") && !from_error) {
      let account_balances = from_account.get("balances").toJS();

      let _error = this.state.balanceError ? "has-error" : "";

      if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getAsset(asset_types[0]);

      if (asset_types.length > 0) {
        let current_asset_id = asset ? asset.get("id") : asset_types[0];
        balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
          balance: account_balances[current_asset_id]
        })));
      } else {
        balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: _error
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          content: "transfer.errors.noFunds"
        })));
      }
    }

    let propose_incomplete = propose && !propose_account;
    const amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
    const isAmountValid = amountValue && !(0,lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_14__["default"])(amountValue);
    const isSubmitNotValid = !from_account || !to_account || !isAmountValid || !asset || from_error || propose_incomplete || balanceError || from_account.get("id") == to_account.get("id");
    let tabIndex = this.props.tabIndex; // Continue tabIndex on props count

    return !this.state.open ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "send_modal_wrapper",
      className: hidden || !this.state.open ? "hide" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Modal, {
      visible: this.state.isModalVisible,
      id: this.props.id,
      overlay: true,
      onCancel: this.hideModal,
      footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
        key: "send",
        disabled: isSubmitNotValid,
        onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
      }, propose ? counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("propose") : counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("transfer.send")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
        key: "Cancel",
        tabIndex: tabIndex++,
        onClick: this.onClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "span",
        content: "transfer.cancel"
      }))]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        textAlign: "center",
        fontSize: "18px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default())
    /*                                content={
        !!isSubmitNotValid
            ? "listing.modal_header"
            : "listing.modal.need_buy_donate"
    }*/
    , {
      content: "listing.modal.header2",
      wallet_name: (0,_branding__WEBPACK_IMPORTED_MODULE_12__.getWalletName)()
    }), this.props.ticker), this.state.open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Form, {
      className: "full-width-wrapper",
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccountSelectorListing__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: "transfer.from",
      accountName: from_name,
      account: from_account,
      onChange: this.fromChanged.bind(this),
      onAccountChanged: this.onFromAccountChanged.bind(this),
      typeahead: true,
      tabIndex: tabIndex++,
      locked: true,
      noForm: true //onAction={false}

    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccountSelectorListing__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: "transfer.to",
      accountName: to_name,
      account: to_account,
      onChange: this.toChanged.bind(this),
      onAccountChanged: this.onToAccountChanged.bind(this),
      typeahead: true,
      tabIndex: tabIndex++,
      locked: true,
      noForm: true //editable={false}

    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: "transfer.amount",
      amount: amount,
      onChange: this.onAmountChanged.bind(this),
      asset: asset_types.length > 0 && asset ? asset.get("id") : asset_id ? asset_id : asset_types[0] //assets={asset_types}
      ,
      display_balance: balance,
      tabIndex: tabIndex++,
      allowNaN: true,
      locked: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
      account: from_account,
      transaction: {
        type: "transfer",
        options: ["price_per_kbyte"],
        data: {
          type: "memo",
          content: memo
        }
      },
      onChange: this.onFeeChanged.bind(this),
      tabIndex: tabIndex++
    })) : null)));
  }

}

class DonateSendModalConnectWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DonateSendModal, _extends({}, this.props, {
      ref: this.props.refCallback
    }));
  }

}

DonateSendModalConnectWrapper = (0,alt_react__WEBPACK_IMPORTED_MODULE_4__.connect)(DonateSendModalConnectWrapper, {
  listenTo() {
    return [_stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
  },

  getProps(props) {
    return {
      currentAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().currentAccount,
      passwordAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().passwordAccount,
      tabIndex: props.tabIndex || 0
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonateSendModalConnectWrapper);

/***/ }),

/***/ 3414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonutChart": () => (/* binding */ DonutChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _DonutChart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3415);


const DonutChart = props => {
  const percent = Math.round(props.votes / props.goal * 100);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 32 32",
    className: "chart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    className: "donut-hole",
    r: "16",
    cx: "16",
    cy: "16",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    className: "donut-ring",
    r: "16",
    cx: "16",
    cy: "16",
    fill: "none",
    stroke: "lightgray",
    strokeWidth: "8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    className: "donut-segment",
    r: "16",
    cx: "16",
    cy: "16",
    fill: "none",
    stroke: "green",
    strokeWidth: "8",
    style: {
      strokeDasharray: `${percent} 100`
    },
    strokeDashoffset: "0"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "inside"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "percent"
  }, percent + "%")));
};

/***/ }),

/***/ 3411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3412);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(521);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(437);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CoinCardListing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3413);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(621);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2833);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2701);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2097);
/* harmony import */ var _stores_IntlStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2622);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1941);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1816);
















class ListingPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListingNotice1Informed: false,
      coins: [],
      updating: true,
      currentLocale: this.props.currentLocale
    };
    this.data = {
      "links": {
        "agreement_ru": "https://rudex.freshdesk.com/support/solutions/articles/35000138247-cоглашение-об-оказании-услуг-шлюза",
        "agreement_en": "https://rudex.freshdesk.com/support/solutions/articles/35000138245-gateway-service-agreement"
      },
      "donateTokenName": "DONATE",
      "donateMarket": "DONATE_RUDEX.USDT"
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentLocale !== this.state.currentLocale) {
      this.setState({
        currentLocale: nextProps.currentLocale
      });
    }
  }

  onSubmitRequest(e) {
    e.preventDefault();
    this.setState({
      error: null
    });
    let link_ru = "https://docs.google.com/forms/d/1lJnvufc95CDh2z1Ntq7iCSEs3oD7tPG4nljKTYYezQw";
    let link_en = "https://docs.google.com/forms/d/1X2PguAaRzxlXZGLAarGcmNd-LbJCy8lcoMBcQjFSQ5k";
    window.open(this.state.currentLocale == "ru" ? link_ru : link_en, "_blank");
  }

  onListingNotice1Informed() {
    this.setState({
      ListingNotice1Informed: !this.state.ListingNotice1Informed
    });
  }

  componentDidMount() {
    setInterval(() => this._getBalances(), 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.updating == false) return true;
    return false;
  }

  _getBalances() {
    let coins = (0,_branding__WEBPACK_IMPORTED_MODULE_6__.getListingCoins)();
    if (this.state.coins.length !== 0) coins = this.state.coins;
    this.setState({
      coins: coins,
      updating: true
    });
    coins.forEach(coin => {
      (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.FetchChain)("getAsset", this.data.donateTokenName).then(assetInfo => {
        bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__.Apis.instance().db_api().exec("get_named_account_balances", [coin.account, [assetInfo.get("id")]]).then(res => {
          let coins = this.state.coins;
          let x = coins.find(i => i.account === coin.account);
          x.votes = res[0]["amount"] / Math.pow(10, assetInfo.get("precision"));
          this.setState({
            coins: coins
          });
        }).then(() => {
          this.setState({
            updating: false
          });
        });
      });
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, this.state.updating === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__["default"], {
      loadingText: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("footer.loading")
    }) : this.getTableTabs());
  }

  getContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem"
      },
      to: `/market/${this.data.donateMarket}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.get_donate_tokens"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        margin: 2,
        fontSize: "1.0rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      maxWidth: 25,
      replaceNoneToBts: false,
      name: this.data.donateTokenName
    }), this.data.donateTokenName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.token"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableRank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.rank"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableLogo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableAssetName align-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.asset_name"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoData"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableVotes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.goal"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableGoal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.donates"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableStatus"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.status"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableProgress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.progress"
    })))), this.getCoinsList());
  }

  getContent_listed = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableRank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.rank"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableLogo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableAssetName align-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.asset_name"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoData"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableVotes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.goal"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableStatus"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.status"
    }))))), this.getCoinsList_listed());
  };
  getCoinsList = () => {
    let {
      coins
    } = this.state;
    let sortedCoins = coins.sort((a, b) => {
      return b.votes - a.votes;
    });
    return sortedCoins.map((coin, i) => {
      coin.votes_for_percent = coin.votes < coin.goal ? coin.votes : coin.goal;
      coin.status = coin.votes < coin.goal ? "collecting" : "done";
      coin.soon == true ? coin.status = "waiting" : coin.soon;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CoinCardListing__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: i,
        rank: i + 1,
        coin: coin
      });
    });
  };
  getCoinsList_listed = () => {
    let coins = (0,_branding__WEBPACK_IMPORTED_MODULE_6__.getListedCoins)();
    let sortedCoins = coins.sort((a, b) => {
      return b.votes - a.votes;
    });
    return sortedCoins.map((coin, i) => {
      coin.votes_for_percent = coin.votes < coin.goal ? coin.votes : coin.goal;
      coin.status = "done";
      coin.listed = true;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CoinCardListing__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: i,
        rank: i + 1,
        coin: coin
      });
    });
  };
  getTableTabs = () => {
    let RuDEX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontWeight: "bold"
      }
    }, "RuDEX");

    let DonateLink = (style = {
      margin: 2,
      fontSize: "1.0rem",
      paddingRight: 5
    }) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
        style: style,
        to: `/asset/${this.data.donateTokenName}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        maxWidth: 25,
        replaceNoneToBts: false,
        name: this.data.donateTokenName
      }), this.data.donateTokenName);
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block small-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tabs-container generic-bordered-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tabs, {
      defaultActiveTab: 0,
      segmented: false,
      setting: "permissionsTab",
      className: "account-tabs",
      tabsClass: "account-overview bordered-header content-block",
      contentClass: "padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, {
      title: "listing.donate_progress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "horizontal",
      tabIndex: 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container",
      style: {
        padding: "2rem 8px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: 20
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-up-1 medium-up-1 large-up-1 no-overflow"
    }, this.getContent()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, {
      title: "listing.listed"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "horizontal",
      tabIndex: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container",
      style: {
        padding: "2rem 8px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: 20
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-up-1 medium-up-1 large-up-1 no-overflow"
    }, this.getContent_listed()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, {
      title: "listing.add_coin"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "horizontal",
      tabIndex: 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container help-content-layout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "main-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.header"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontSize: "20px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text3.t1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text3.t2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem"
      },
      to: `/market/${this.data.donateMarket}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text3.get"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text4.t1"
    }), DonateLink(), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text4.t2"
    }), DonateLink(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text4.t3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        border: "1px solid #00a9e0",
        padding: "4px 3px 3px 4px",
        borderRadius: "3px",
        cursor: "pointer"
      }
    }, this.data.donateTokenName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text4.t4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text5.t1"
    }), DonateLink(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text5.t2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text5.t3"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.header"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      href: this.state.currentLocale == "ru" ? this.data.links.agreement_ru : this.data.links.agreement_en,
      content: "listing.texts.rules.rule_10",
      component: "a",
      target: "_blank"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_11"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_3"
    }), DonateLink(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_5"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "checkbox",
      defaultChecked: this.state.ListingNotice1Informed,
      onChange: this.onListingNotice1Informed.bind(this)
    }), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.notice_informed"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listing_button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
      key: "send",
      disabled: !this.state.ListingNotice1Informed,
      onClick: this.state.ListingNotice1Informed ? this.onSubmitRequest.bind(this) : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.submit_request"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.end"
    }), " ", RuDEX, "!")))))));
  };
}

ListingPage = (0,alt_react__WEBPACK_IMPORTED_MODULE_13__.connect)(ListingPage, {
  listenTo() {
    return [_stores_IntlStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
  },

  getProps() {
    return {
      currentLocale: _stores_IntlStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().currentLocale
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingPage);

/***/ }),

/***/ 3406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2737);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2654);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1816);
/* harmony import */ var _stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2347);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2338);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_QuickTrade_SellReceive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3407);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2339);
/* harmony import */ var _QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3410);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(437);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2348);
/* harmony import */ var _Exchange_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2740);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2410);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(637);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2412);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2088);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1822);
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

/***/ 3405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2550);
/* harmony import */ var _QuickTrade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3406);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1962);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1963);
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

/***/ 3407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3408);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1825);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
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

/***/ 3408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2084);
/* harmony import */ var _ChainSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3409);







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

/***/ 2701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetImageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2702);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(621);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class AssetImage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    replaceNoneToBts: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
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

    function getImageWrapper(asset) {
      if (asset === null) return "unknown";
      let symbol = asset.get("symbol");
      return (0,branding__WEBPACK_IMPORTED_MODULE_2__.getImageName)(symbol);
    }

    const imgName = getImageWrapper(asset);
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

/***/ 3409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(559);
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

/***/ 2833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => (/* binding */ Tabs),
/* harmony export */   "Tab": () => (/* binding */ Tab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1816);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(657);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(656);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2098);








/**
 *  Renders a tab layout, handling switching and optionally persists the currently open tab using the SettingsStore
 *
 *  props:
 *     setting: unique name to be used to remember the active tab of this tabs layout,
 *     tabsClass: optional classes for the tabs container div
 *     contentClass: optional classes for the content container div
 *
 *  Usage:
 *
 *  <Tabs setting="mySetting">
 *      <Tab title="locale.string.title1">Tab 1 content</Tab>
 *      <Tab title="locale.string.title2">Tab 2 content</Tab>
 *  </Tabs>
 *
 */

class Tab extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    changeTab: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    isActive: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool.isRequired),
    index: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    isLinkTo: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    subText: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)])
  };
  static defaultProps = {
    isActive: false,
    index: 0,
    className: "",
    isLinkTo: "",
    subText: null
  };

  render() {
    let {
      isActive,
      index,
      changeTab,
      title,
      className,
      updatedTab,
      disabled,
      subText
    } = this.props;
    let c = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      "is-active": isActive
    }, className);

    if (typeof title === "string" && title.indexOf(".") > 0) {
      title = counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate(title);
    } // dont string concetenate subText directly within the rendering, subText can be an object without toString
    // implementation, but valid DOM (meaning, don't do subText + "someString"


    if (this.props.collapsed) {
      // if subText is empty, dont render it, we dont want empty brackets added
      if (typeof subText === "string") {
        subText = subText.trim();
      }

      if (title.type === "span") {
        title = title.props.children[2];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: index,
        "data-is-link-to": this.props.isLinkTo
      }, title, updatedTab ? "*" : "", subText && " (", subText && subText, subText && ")");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: c,
      onClick: !disabled ? changeTab.bind(this, index, this.props.isLinkTo) : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "tab-title"
    }, title, updatedTab ? "*" : ""), subText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tab-subtext"
    }, subText)));
  }

}

class Tabs extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    setting: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    defaultActiveTab: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
    segmented: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
  };
  static defaultProps = {
    active: 0,
    defaultActiveTab: 0,
    segmented: true,
    contentClass: "",
    style: {}
  };

  constructor(props) {
    super();
    this.state = {
      activeTab: props.setting ? props.viewSettings.get(props.setting, props.defaultActiveTab) : props.defaultActiveTab,
      width: window.innerWidth
    };
    this._setDimensions = this._setDimensions.bind(this);
  }

  componentDidMount() {
    this._setDimensions();

    window.addEventListener("resize", this._setDimensions, {
      capture: false,
      passive: true
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let nextSetting = nextProps.viewSettings.get(nextProps.setting);

    if (nextSetting !== this.props.viewSettings.get(this.props.setting)) {
      this.setState({
        activeTab: nextSetting
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._setDimensions);
  }

  _setDimensions() {
    let width = window.innerWidth;

    if (width !== this.state.width) {
      this.setState({
        width
      });
    }
  }

  _changeTab(value, isLinkTo) {
    if (value === this.state.activeTab) return; // Persist current tab if desired

    if (isLinkTo !== "") {
      this.props.history.push(isLinkTo);
    }

    if (this.props.setting) {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeViewSetting({
        [this.props.setting]: value
      });
    }

    this.setState({
      activeTab: value
    });
    if (this.props.onChangeTab) this.props.onChangeTab(value);
  }

  render() {
    let {
      children,
      contentClass,
      tabsClass,
      style,
      segmented
    } = this.props;
    const collapseTabs = this.state.width < 900 && react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 2;
    let activeContent = null;
    let tabs = react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, (child, index) => {
      if (!child) {
        return null;
      }

      if (collapseTabs && child.props.disabled) return null;
      let isActive = index === this.state.activeTab;

      if (isActive) {
        activeContent = child.props.children;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
        collapsed: collapseTabs,
        isActive,
        changeTab: this._changeTab.bind(this),
        index: index
      });
    }).filter(a => a !== null);

    if (!activeContent) {
      activeContent = tabs[0].props.children;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(!!this.props.actionButtons ? "with-buttons" : "", this.props.className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "service-selector"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      style: style,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button-group no-margin", tabsClass, {
        segmented
      })
    }, collapseTabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      style: {
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: "15rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      value: this.state.activeTab,
      style: {
        marginTop: 10,
        marginBottom: 10
      },
      className: "bts-select",
      onChange: e => {
        let ind = parseInt(e.target.value, 10);

        this._changeTab(ind, e.target[ind].attributes["data-is-link-to"].value);
      }
    }, tabs)) : tabs, this.props.actionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "tabs-action-buttons"
    }, this.props.actionButtons) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("tab-content", contentClass)
    }, activeContent));
  }

}

Tabs = (0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(Tabs, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    return {
      viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().viewSettings
    };
  }

});
Tabs = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.withRouter)(Tabs);


/***/ }),

/***/ 2740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 3410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrders": () => (/* binding */ getOrders),
/* harmony export */   "getPrices": () => (/* binding */ getPrices),
/* harmony export */   "getFees": () => (/* binding */ getFees),
/* harmony export */   "getAssetsToSell": () => (/* binding */ getAssetsToSell)
/* harmony export */ });
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(636);


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

/***/ 2737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1705);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2738);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1969);




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

/***/ 2738:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1717);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tUcmFkZS4xOTc0MDE5Nzg0MjlhYTQ5YWNiYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7O0FBekJBOztBQTJCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUtBOztBQS9DQTs7QUFpREE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBOztBQVBBOztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQVpBO0FBZUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBREE7QUFJQTs7QUFFQTtBQUVBO0FBRUE7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBRUE7QUFjQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBOztBQUVBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBOztBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFpQkE7QUFDQTs7O0FBR0E7QUFBQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBR0E7O0FBRUE7QUFDQTtBQUVBOztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQVFBO0FBREE7QUFVQTs7QUF0VkE7O0FBeVZBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBVEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFNQTtBQUFBOztBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBSUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFFQTtBQUlBO0FBaUJBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBR0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBSUE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFLQTs7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBRUE7QUFHQTtBQVFBO0FBT0E7O0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQU9BO0FBQ0E7O0FBRUE7QUFFQTtBQVNBO0FBRUE7QUFJQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBY0E7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQVZBO0FBZUE7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFVQTs7QUExYUE7O0FBNmFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUhBOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFNQTs7QUFYQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFQQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBOztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7QUFLQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBSEE7QUFtQkE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7O0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBS0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFNQTs7QUFPQTtBQUNBOztBQUVBO0FBSUE7O0FBRUE7O0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBL0JBO0FBc0NBOztBQUVBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFVQTtBQUVBO0FBR0E7QUFEQTtBQU9BO0FBUUE7QUFBQTtBQUFBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUtBO0FBQ0E7QUFQQTtBQVdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFHQTtBQURBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBREE7QUFXQTs7QUF2ckJBOztBQTByQkE7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBVEE7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcHZCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFRQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUtBO0FBUEE7QUFTQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQW1CQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQURBO0FBU0E7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQVdBOztBQTlKQTs7QUFpS0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BOztBQVhBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUdBOztBQUdBO0FBQUE7QUFBQTs7QUFDQTs7QUFFQTtBQUNBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUlBO0FBQUE7QUFWQTtBQWVBO0FBREE7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBVUE7O0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQXhCQTtBQStCQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQVBBO0FBYUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQVhBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFYQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBWEE7QUFtQkE7O0FBck9BOztBQXdPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBSEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBVkE7QUFhQTs7Ozs7Ozs7Ozs7OztBQzNRQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBVEE7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQVFBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQURBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBUUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQVFBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQVNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBTkE7QUFEQTtBQVlBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQU9BO0FBQ0E7QUFJQTtBQU5BO0FBV0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBSUE7QUFOQTtBQWVBO0FBQUE7QUFLQTtBQUFBO0FBV0E7QUExYkE7O0FBNmJBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBUkE7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFJQTtBQUNBOztBQUNBO0FBSUE7QUFDQTs7QUFDQTtBQVVBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQU1BO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVVBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBRkE7O0FBSUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFNQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQU1BOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUNBO0FBMUVBO0FBNEVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFLQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUlBO0FBRUE7QUFEQTtBQUlBO0FBTUE7QUFFQTs7QUFFQTtBQUtBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBR0E7QUFFQTtBQURBO0FBSUE7QUFNQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFMQTtBQVFBO0FBSUE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBO0FBWUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFJQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUtBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQVlBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBS0E7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBRUE7QUFBQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBVkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQWVBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7O0FBT0E7O0FBR0E7O0FBR0E7O0FBQ0E7QUFJQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFYQTtBQWFBO0FBRUE7QUFVQTtBQUFBO0FBQUE7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFEQTtBQU5BO0FBY0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBQ0E7QUFJQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBSUE7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBRkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBcUJBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBS0E7QUFSQTtBQWdCQTs7QUFwd0NBOztBQXV3Q0E7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFWQTtBQVlBOztBQWpCQTtBQXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbDBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFqQkE7O0FBb0JBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTs7QUFHQTtBQUdBO0FBQ0E7QUFIQTtBQU1BOztBQWxCQTs7QUFxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFvQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFLQTtBQVZBO0FBZUE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTs7QUFuSEE7O0FBc0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTs7QUFlQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFZQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFRQTs7QUExSUE7O0FBNklBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFUQTtBQVlBOztBQWhFQTs7QUFtRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcEJBO0FBdUJBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBOztBQVpBO0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU1BO0FBWEE7QUFhQTtBQUNBO0FBR0E7QUFDQTtBQWxCQTtBQXFCQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFJQTs7QUF2RUE7O0FBMEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFRQTs7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVNBO0FBQUE7QUFJQTtBQUFBO0FBSUE7O0FBMUVBOztBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFPQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQU1BO0FBWkE7QUFxQkE7QUFBQTtBQU1BO0FBQUE7QUFLQTs7QUE3SkE7O0FBZ0tBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBTkE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hSQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaklBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVBBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL2xpYnMvQXNzZXRXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmRSdURFWC9EYXNoYm9hcmQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZFJ1REVYL01hcmtldENhcmQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvQWNjb3VudFNlbGVjdG9yTGlzdGluZy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Db2luQ2FyZExpc3RpbmcuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvRG9uYXRlU2VuZE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbnV0Q2hhcnQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvTGlzdGluZ1BhZ2UuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1F1aWNrVHJhZGUvUXVpY2tUcmFkZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvUXVpY2tUcmFkZS9RdWlja1RyYWRlUm91dGVyLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1NlbGxSZWNlaXZlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yMy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9Bc3NldEltYWdlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0N1cnJlbnRBY2NvdW50LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0NoYWluU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1RhYnMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldFBpY2tlckhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvUXVpY2tUcmFkZS9RdWlja1RyYWRlSGVscGVyLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9ub3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXREaXNwbGF5TmFtZX0gZnJvbSBcImNvbW1vbi9yZWFjdFV0aWxzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHtMaXN0fSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5cbmNsYXNzIER5bmFtaWNPYmplY3RSZXNvbHZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZG9zOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0c0xpc3RcbiAgICB9O1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRvczogTGlzdCgpXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZ2V0RHluYW1pY09iamVjdCA9IHRoaXMuZ2V0RHluYW1pY09iamVjdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldER5bmFtaWNPYmplY3QoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZG9zLmZpbmQoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSAmJiBhLmdldChcImlkXCIpID09PSBpZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAgICAgICBnZXREeW5hbWljT2JqZWN0OiB0aGlzLmdldER5bmFtaWNPYmplY3RcbiAgICAgICAgfSk7XG4gICAgfVxufVxuRHluYW1pY09iamVjdFJlc29sdmVyID0gQmluZFRvQ2hhaW5TdGF0ZShEeW5hbWljT2JqZWN0UmVzb2x2ZXIpO1xuXG4vKipcbiAqIEhPQyB0aGF0IHJlc29sdmVzIGVpdGhlciBhIG51bWJlciBvZiBhc3NldHMgZGlyZWN0bHkgd2l0aCBDaGFpbkFzc2V0LFxuICogb3IgYSBsaXN0IG9mIGFzc2V0cyB3aXRoIENoYWluQXNzZXRzXG4gKlxuICogIE9wdGlvbnNcbiAqICAtJ3Byb3BOYW1lcycgYW4gYXJyYXkgb2YgcHJvcCBuYW1lcyB0byBiZSByZXNvbHZlZCBhcyBhc3NldHMuIChkZWZhdWx0cyB0byBcImFzc2V0XCIgb3IgXCJhc3NldHNcIilcbiAqICAtJ2RlZmF1bHRQcm9wcycgZGVmYXVsdCB2YWx1ZXMgdG8gdXNlIGZvciBvYmplY3RzIChvcHRpb25hbClcbiAqICAtJ2FzTGlzdCcgZGVmaW5lcyB3aGV0aGVyIHRvIHVzZSBDaGFpbkFzc2V0c0xpc3Qgb3Igbm90ICh1c2VmdWwgZm9yIHJlc29sdmluZyBsYXJnZSBxdWFudGl0aWVzIG9mIGFzc2V0cylcbiAqICAtJ3dpdGhEeW5hbWljJyBkZWZpbmVzIHdoZXRoZXIgdG8gYWxzbyByZXNvbHZlIGR5bmFtaWMgb2JqZWN0cyBvciBub3RcbiAqL1xuXG5mdW5jdGlvbiBBc3NldFdyYXBwZXIoQ29tcG9uZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnByb3BOYW1lcyA9IG9wdGlvbnMucHJvcE5hbWVzIHx8IFtcbiAgICAgICAgISFvcHRpb25zLmFzTGlzdCA/IFwiYXNzZXRzXCIgOiBcImFzc2V0XCJcbiAgICBdO1xuICAgIGNvbnN0IGZpbmFsUHJvcFR5cGVzID0gb3B0aW9ucy5wcm9wTmFtZXMucmVkdWNlKChyZXMsIHR5cGUpID0+IHtcbiAgICAgICAgcmVzW3R5cGVdID0gb3B0aW9ucy5hc0xpc3RcbiAgICAgICAgICAgID8gQ2hhaW5UeXBlcy5DaGFpbkFzc2V0c0xpc3RcbiAgICAgICAgICAgIDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQ7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgbGV0IGRlZmF1bHRQcm9wcyA9IE9iamVjdC5rZXlzKGZpbmFsUHJvcFR5cGVzKS5yZWR1Y2UoKHJlcywga2V5KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gb3B0aW9ucy5kZWZhdWx0UHJvcHMgJiYgb3B0aW9ucy5kZWZhdWx0UHJvcHNba2V5XTtcbiAgICAgICAgcmVzW2tleV0gPSAhIW9wdGlvbnMuYXNMaXN0ID8gTGlzdChjdXJyZW50IHx8IFtdKSA6IGN1cnJlbnQgfHwgXCIxLjMuMFwiO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0sIHt9KTtcblxuICAgIGlmIChvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiAhIW9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQpIHtcbiAgICAgICAgZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcy50ZW1wQ29tcG9uZW50O1xuICAgIH1cblxuICAgIGNsYXNzIEFzc2V0c1Jlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgc3RhdGljIHByb3BUeXBlcyA9IGZpbmFsUHJvcFR5cGVzO1xuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGxldCBmaW5hbEFzc2V0cyA9IHt9O1xuICAgICAgICAgICAgbGV0IHBhc3NUcm91Z2hQcm9wcyA9IHt9O1xuICAgICAgICAgICAgbGV0IGRvcyA9IExpc3QoKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdICYmXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHJvcE5hbWVzLmluZGV4T2YocHJvcCkgIT09IC0xXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLndpdGhEeW5hbWljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuYXNMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9zID0gZG9zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0uZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5mb3JFYWNoKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9zID0gZG9zLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxBc3NldHNbcHJvcF0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzW3Byb3BdLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXNzVHJvdWdoUHJvcHNbcHJvcF0gPSB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgd3JhcHBlZCA9IFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgIHsuLi5wYXNzVHJvdWdoUHJvcHMsIC4uLmZpbmFsQXNzZXRzfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNPYmplY3RSZXNvbHZlciBkb3M9e2Rvc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7d3JhcHBlZH1cbiAgICAgICAgICAgICAgICAgICAgPC9EeW5hbWljT2JqZWN0UmVzb2x2ZXI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHdyYXBwZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQXNzZXRzUmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKEFzc2V0c1Jlc29sdmVyKTtcblxuICAgIGNsYXNzIFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxBc3NldHNSZXNvbHZlciB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgcmVmPVwiYm91bmRfY29tcG9uZW50XCIgLz5cbiAgICAgICAgICAgICAgICA8L0Fzc2V0c1Jlc29sdmVyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBXcmFwcGVyLmRpc3BsYXlOYW1lID0gYFdyYXBwZXIoJHtnZXREaXNwbGF5TmFtZShDb21wb25lbnQpfSlgO1xuICAgIHJldHVybiBXcmFwcGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBc3NldFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgTWFya2V0Q2FyZCBmcm9tIFwiLi9NYXJrZXRDYXJkXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL01hcmtldHNTdG9yZVwiO1xuXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmltcG9ydCB7Z2V0TXlNYXJrZXRzUXVvdGVzLCBnZXRGZWF0dXJlZE1hcmtldHN9IGZyb20gXCJicmFuZGluZ1wiO1xuXG5pbXBvcnQgXCIuL0Rhc2hib2FyZFJ1REVYLmNzc1wiO1xuXG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBudWxsLFxuXG4gICAgICAgICAgICBtYXJrZXRTdGF0czogdGhpcy5wcm9wcy5tYXJrZXRTdGF0cyxcblxuICAgICAgICAgICAgZmVhdHVyZWRNYXJrZXRzOiBbXSxcblxuICAgICAgICAgICAgdm9sdW1lMjRfdXNkdDogMCxcblxuICAgICAgICAgICAgbWFya2V0czogW10sXG4gICAgICAgICAgICB1cGRhdGluZzogdHJ1ZSxcblxuICAgICAgICAgICAgdGltZU91dElEOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5waW5nTWFya2V0cyA9IHRoaXMucGluZ01hcmtldHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMsIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNhbGNWb2x1bWVTb3J0KCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmZWF0dXJlZE1hcmtldHM6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHRpbWVPdXRJRCA9IHNldFRpbWVvdXQodGhpcy5waW5nTWFya2V0cywgNTAwMCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aW1lT3V0SUQ6IHRpbWVPdXRJRFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHBpbmdNYXJrZXRzKCkge1xuXG4gICAgICAgIGxldCB0aW1lT3V0SUQ7XG5cbiAgICAgICAgbGV0IGFsbE1hcmtldFN0YXRzID0gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHM7XG5cbiAgICAgICAgaWYgKGFsbE1hcmtldFN0YXRzLnNpemUgIT09IDApIHtcblxuICAgICAgICAgICAgaWYgKGFsbE1hcmtldFN0YXRzLnRvSlNPTigpLmhhc093blByb3BlcnR5KFwiR1BIX1JVREVYLlVTRFRcIikpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWxsTWFya2V0U3RhdHM6IFwiICsgSlNPTi5zdHJpbmdpZnkoKGFsbE1hcmtldFN0YXRzLnRvSlNPTigpKVtcIkdQSF9SVURFWC5VU0RUXCJdKSk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxNYXJrZXRTdGF0cy50b0pTT04oKS5oYXNPd25Qcm9wZXJ0eShcIlJVREVYLlVTRFRfR1BIXCIpKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImFsbE1hcmtldFN0YXRzOiBcIiArIEpTT04uc3RyaW5naWZ5KChhbGxNYXJrZXRTdGF0cy50b0pTT04oKSlbXCJSVURFWC5VU0RUX0dQSFwiXSkpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuY2FsY1ZvbHVtZVNvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZlYXR1cmVkTWFya2V0czogZGF0YSxcbiAgICAgICAgICAgICAgICBtYXJrZXRTdGF0czogYWxsTWFya2V0U3RhdHMsXG4gICAgICAgICAgICAgICAgdXBkYXRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGltZU91dElEID0gc2V0VGltZW91dCh0aGlzLnBpbmdNYXJrZXRzLCAyMDAwMCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVPdXRJRCA9IHNldFRpbWVvdXQodGhpcy5waW5nTWFya2V0cywgNTAwMCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGltZU91dElEOiB0aW1lT3V0SURcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5mZWF0dXJlZE1hcmtldHMsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlZE1hcmtldHNcbiAgICAgICAgICAgICkgfHxcblxuICAgICAgICAgICAgbmV4dFByb3BzLm1hcmtldFN0YXRzICE9PSB0aGlzLnByb3BzLm1hcmtldFN0YXRzIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUubWFya2V0U3RhdHMgIT09IHRoaXMuc3RhdGUubWFya2V0U3RhdHMgfHxcblxuICAgICAgICAgICAgbmV4dFN0YXRlLnZvbHVtZTI0X3VzZHQgIT09IHRoaXMuc3RhdGUudm9sdW1lMjRfdXNkdCB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLndpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgX3NldERpbWVuc2lvbnMoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGh9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFZvbHVtZVVTRFQocXVvdGUsIGJhc2UsIGFsbE1hcmtldFN0YXRzKSB7XG5cbiAgICAgICAgbGV0IG1hcmtldFN0YXRzMSA9IGFsbE1hcmtldFN0YXRzLmdldChgJHtxdW90ZX1fJHtiYXNlfWApO1xuICAgICAgICBsZXQgdm9sdW1lX3VzZHQgPSAwO1xuXG4gICAgICAgIGlmIChtYXJrZXRTdGF0czEgJiYgcXVvdGUgPT0gXCJSVURFWC5VU0RUXCIpIHtcbiAgICAgICAgICAgIHZvbHVtZV91c2R0ID0gbWFya2V0U3RhdHMxLnZvbHVtZVF1b3RlICogMTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbWFya2V0U3RhdHNfdG9fVVNEVCA9IGFsbE1hcmtldFN0YXRzLmdldChgUlVERVguVVNEVF8ke3F1b3RlfWApO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByaWNlO1xuICAgICAgICAgICAgICAgIGlmIChtYXJrZXRTdGF0c190b19VU0RUICYmIG1hcmtldFN0YXRzX3RvX1VTRFQucHJpY2UgJiYgbWFya2V0U3RhdHNfdG9fVVNEVC5wcmljZS5xdW90ZS5hbW91bnQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBwcmljZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAoKG1hcmtldFN0YXRzX3RvX1VTRFQucHJpY2UucXVvdGUuYW1vdW50IC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0c190b19VU0RULnByaWNlLmJhc2UuYW1vdW50KSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coMTAsIG1hcmtldFN0YXRzX3RvX1VTRFQucHJpY2UuYmFzZS5wcmVjaXNpb24pKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgbWFya2V0U3RhdHNfdG9fVVNEVC5wcmljZS5xdW90ZS5wcmVjaXNpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZV91c2R0ID0gbWFya2V0U3RhdHMxLnZvbHVtZVF1b3RlICogcHJpY2UgKiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBsb2cgZXJyb3IgJHtxdW90ZX0gLyAke2Jhc2V9IDogdm9sdW1lX3VzZHQ6ICR7dm9sdW1lX3VzZHR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdm9sdW1lX3VzZHQ7XG4gICAgfVxuXG5cbiAgICBfU29ydEZpbHRlclBhaXJzKHBhaXJzKSB7XG4gICAgICAgIGxldCBzb3J0UGFpcnMgPSBwYWlycy5tYXAocGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzID0gZ2V0RmVhdHVyZWRNYXJrZXRzKCkuZmluZChlbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoZWxbMF0gPT0gcGFpclsxXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKGVsWzFdID09IHBhaXJbMF0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzKSB7XG5cbiAgICAgICAgICAgICAgICAvL05vdCBpbiAybmQgcGxhY2VcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHBhaXJbMF0gPT09IFwiUlVERVguVVNEVFwiXG5cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtwYWlyWzBdLCBwYWlyWzFdLCAwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwYWlyWzFdLCBwYWlyWzBdLCAwXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9Ob3QgaW4gMm5kIHBsYWNlXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBwYWlyWzBdID09PSBcIlJVREVYLlVTRFRcIlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3BhaXJbMF0sIHBhaXJbMV0sIDBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW3BhaXJbMF0sIHBhaXJbMV0sIDBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL05vdCBpbiAybmQgcGxhY2VcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwYWlyWzFdID09PSBcIlJVREVYLlVTRFRcIiB8fFxuICAgICAgICAgICAgICAgIHBhaXJbMV0gPT09IFwiUlVERVguQlVTRFwiIHx8XG5cbiAgICAgICAgICAgICAgICBwYWlyWzFdID09PSBcIkdQSFwiIHx8XG5cbiAgICAgICAgICAgICAgICBwYWlyWzFdID09PSBcIlVTRFwiIHx8XG4gICAgICAgICAgICAgICAgcGFpclsxXSA9PT0gXCJFVVJcIiB8fFxuICAgICAgICAgICAgICAgIHBhaXJbMV0gPT09IFwiUlVCXCIgfHxcbiAgICAgICAgICAgICAgICBwYWlyWzFdID09PSBcIkNOWVwiIHx8XG4gICAgICAgICAgICAgICAgcGFpclsxXSA9PT0gXCJHT0xEXCIgfHxcbiAgICAgICAgICAgICAgICBwYWlyWzFdID09PSBcIlNJTFZFUlwiIHx8XG5cbiAgICAgICAgICAgICAgICBwYWlyWzFdID09PSBcIlJVREVYLkJUU1wiIHx8XG4gICAgICAgICAgICAgICAgcGFpclsxXSA9PT0gXCJSVURFWC5FT1NcIiAvL3x8XG5cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbcGFpclsxXSwgcGFpclswXSwgMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTm90IGluIDFuZCBwbGFjZVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBhaXJbMF0gPT09IFwiUlVERVguWE1SXCIgfHxcbiAgICAgICAgICAgICAgICBwYWlyWzBdID09PSBcIlJVREVYLkJUQ1wiIHx8XG4gICAgICAgICAgICAgICAgcGFpclswXSA9PT0gXCJSVURFWC5CVENCXCIgLy98fFxuXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3BhaXJbMV0sIHBhaXJbMF0sIDBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW3BhaXJbMF0sIHBhaXJbMV0sIDBdO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc29ydFBhaXJzO1xuICAgIH1cblxuICAgIGNhbGNWb2x1bWVTb3J0KCkge1xuICAgICAgICBsZXQgcGFpcnMgPSBbXTtcbiAgICAgICAgbGV0IHBhaXJzTmV3ID0gW107XG4gICAgICAgIGxldCB2b2x1bWUyNF91c2R0ID0gMDtcblxuICAgICAgICBsZXQgYWxsX2NvaW5zID0gZ2V0TXlNYXJrZXRzUXVvdGVzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxfY29pbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gaSArIDE7IGsgPCBhbGxfY29pbnMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAvL3BhaXJzLnB1c2goW2FsbF9jb2luc1tpXSwgYWxsX2NvaW5zW2tdLCAwXSk7XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaChbYWxsX2NvaW5zW2ldLCBhbGxfY29pbnNba10sIDAsIDAsIDAsIDBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhaXJzID0gdGhpcy5fU29ydEZpbHRlclBhaXJzKHBhaXJzKTtcblxuICAgICAgICBsZXQgYWxsTWFya2V0U3RhdHMgPSBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cztcblxuICAgICAgICBpZiAoYWxsTWFya2V0U3RhdHMuc2l6ZSA9PSAwKSByZXR1cm4gcGFpcnM7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImFsbE1hcmtldFN0YXRzLnNpemU6IFwiICsgYWxsTWFya2V0U3RhdHMuc2l6ZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJhbGxNYXJrZXRTdGF0czogXCIgKyBKU09OLnN0cmluZ2lmeShhbGxNYXJrZXRTdGF0cykpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdm9sdW1lX3VzZHQgPSAwO1xuXG4gICAgICAgICAgICB2b2x1bWVfdXNkdCA9IHRoaXMuZ2V0Vm9sdW1lVVNEVChwYWlyc1tpXVswXSwgcGFpcnNbaV1bMV0sIGFsbE1hcmtldFN0YXRzKTtcbiAgICAgICAgICAgIC8vcGFpcnNOZXcucHVzaChbcGFpcnNbaV1bMF0sIHBhaXJzW2ldWzFdLCB2b2x1bWVfdXNkdF0pO1xuXG4gICAgICAgICAgICBsZXQgcGFpclN0YXQgPSBhbGxNYXJrZXRTdGF0cy5nZXQoYCR7cGFpcnNbaV1bMV19XyR7cGFpcnNbaV1bMF19YCk7XG5cbiAgICAgICAgICAgIGxldCBwcmljZSA9IHBhaXJTdGF0ICE9PSB1bmRlZmluZWQgPyBwYWlyU3RhdC5wcmljZSA6IDA7XG4gICAgICAgICAgICBsZXQgdm9sdW1lID0gcGFpclN0YXQgIT09IHVuZGVmaW5lZCA/IHBhaXJTdGF0LnZvbHVtZVF1b3RlIDogMDtcbiAgICAgICAgICAgIGxldCBjaGFuZ2UgPSBwYWlyU3RhdCAhPT0gdW5kZWZpbmVkID8gcGFpclN0YXQuY2hhbmdlIDogMDtcblxuICAgICAgICAgICAgcGFpcnNOZXcucHVzaChbcGFpcnNbaV1bMF0sIHBhaXJzW2ldWzFdLCB2b2x1bWVfdXNkdCwgcHJpY2UsIHZvbHVtZSwgY2hhbmdlXSk7XG5cbiAgICAgICAgICAgIHZvbHVtZTI0X3VzZHQgPSB2b2x1bWUyNF91c2R0ICsgdm9sdW1lX3VzZHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZvbHVtZTI0X3VzZHQ6IHZvbHVtZTI0X3VzZHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhaXJzTmV3O1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZmVhdHVyZWRNYXJrZXRzLFxuICAgICAgICAgICAgbWFya2V0U3RhdHNcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHZhbGlkTWFya2V0cyA9IDA7XG5cbiAgICAgICAgbGV0IG1hcmtldHMgPSBmZWF0dXJlZE1hcmtldHNcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJbMl0gKiAxIC0gYVsyXSAqIDE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChwYWlyID0+IHtcbiAgICAgICAgICAgICAgICB2YWxpZE1hcmtldHMrKztcbiAgICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TWFya2V0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt2YWxpZE1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJZD17cGFpclsxXSArIFwiX1wiICsgcGFpclswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e3BhaXJbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtwYWlyWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lVVNEVD17cGFpclsyXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGU9e3ZhbGlkTWFya2V0cyA+IDQwMH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3BhaXJbM119XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWU9e3BhaXJbNF19XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e3BhaXJbNV19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgZGFzaGJvYXJkUnVERVhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVwZGF0aW5nID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWZyYW1lIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImZvb3Rlci5sb2FkaW5nXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1mcmFtZSB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudC1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIyNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS52b2x1bWVfMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiBcIjEwcHggMHB4IDVweCAwcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gJFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIodGhpcy5zdGF0ZS52b2x1bWUyNF91c2R0LCAyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLXVwLTEgbWVkaXVtLXVwLTMgbGFyZ2UtdXAtNCAgbm8tb3ZlcmZsb3cgZm0tb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnZvbHVtZTI0X3VzZHQgPT09IDAgPyBudWxsIDogbWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7bWFya2V0U3RhdHMgPT09IHVuZGVmaW5lZCB8fCBtYXJrZXRTdGF0cy5zaXplID09PSAwID8gbWFya2V0cyA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmxldFxuICAgIERhc2hib2FyZFdyYXBwZXIgPSBwcm9wcyA9PiB7XG4gICAgICAgIHJldHVybiA8RGFzaGJvYXJkIHsuLi5wcm9wc30gLz47XG4gICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkV3JhcHBlciA9IGNvbm5lY3QoRGFzaGJvYXJkV3JhcHBlciwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmUsIE1hcmtldHNTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncyxcbiAgICAgICAgICAgIG1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0c1xuICAgICAgICB9O1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtnZXRfYWxsVG9rZW5zfSBmcm9tIFwiLi4vLi4vYnJhbmRpbmdcIjtcblxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCIuLi8uLi9hY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5cbmNsYXNzIE1hcmtldENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHF1b3RlOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgYmFzZTogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIC8vaW52ZXJ0OiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICAvL2ludmVydDogdHJ1ZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW1nRXJyb3I6IGZhbHNlLFxuXG4gICAgICAgICAgICBiYXNlOiB0aGlzLnByb3BzLmJhc2UsXG4gICAgICAgICAgICBxdW90ZTogdGhpcy5wcm9wcy5xdW90ZSxcblxuICAgICAgICAgICAgbWFya2V0U3RhdHM6IHRoaXMucHJvcHMubWFya2V0U3RhdHMsXG4gICAgICAgICAgICBzdGFycmVkTWFya2V0czogdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cyxcblxuICAgICAgICAgICAgaGlzdG9yeTogdGhpcy5wcm9wcy5oaXN0b3J5LFxuXG4gICAgICAgICAgICB2b2x1bWVVU0RUOiB0aGlzLnByb3BzLnZvbHVtZVVTRFQsXG5cbiAgICAgICAgICAgIHByaWNlOiB0aGlzLnByb3BzLnByaWNlLFxuICAgICAgICAgICAgdm9sdW1lOiB0aGlzLnByb3BzLnZvbHVtZSxcbiAgICAgICAgICAgIGNoYW5nZTogdGhpcy5wcm9wcy5jaGFuZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX3RvZ2dsZU1hcmtldChlLCBxdW90ZSwgYmFzZSkge1xuXG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBNYXJrZXRzQWN0aW9ucy5nZXRNYXJrZXRTdGF0cy5kZWZlcihiYXNlLCBxdW90ZSk7XG5cbiAgICAgICAgbGV0IG1hcmtldFN0YXRzID0gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMuZ2V0KFxuICAgICAgICAgICAgYCR7cXVvdGUuZ2V0KFwic3ltYm9sXCIpfV8ke2Jhc2UuZ2V0KFwic3ltYm9sXCIpfWBcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmdldE1hcmtldFN0YXRzLmJpbmQoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgIHF1b3RlXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgMzAgKiAxMDAwXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBiYXNlOiBxdW90ZSxcbiAgICAgICAgICAgIHF1b3RlOiBiYXNlLFxuICAgICAgICAgICAgbWFya2V0U3RhdHM6IG1hcmtldFN0YXRzLFxuXG4gICAgICAgICAgICBwcmljZTogbWFya2V0U3RhdHMgPyBtYXJrZXRTdGF0cy5wcmljZSA6IDAsXG4gICAgICAgICAgICB2b2x1bWU6IG1hcmtldFN0YXRzID8gbWFya2V0U3RhdHMudm9sdW1lUXVvdGUgOiAwLFxuICAgICAgICAgICAgY2hhbmdlOiBtYXJrZXRTdGF0cyA/IG1hcmtldFN0YXRzLmNoYW5nZSA6IDAsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGVja1N0YXRzKG5ld1N0YXRzID0ge2Nsb3NlOiB7fSwgcHJpY2U6IHt9fSwgb2xkU3RhdHMgPSB7Y2xvc2U6IHt9LCBwcmljZToge319KSB7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8qICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBuZXdTdGF0cy52b2x1bWVRdW90ZSAhPT0gb2xkU3RhdHMudm9sdW1lUXVvdGUgfHxcbiAgICAgICAgICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3RhdHMuY2xvc2UgJiYgbmV3U3RhdHMuY2xvc2UuYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFN0YXRzLmNsb3NlICYmIG9sZFN0YXRzLmNsb3NlLmJhc2VcbiAgICAgICAgICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0cy5jbG9zZSAmJiBuZXdTdGF0cy5jbG9zZS5xdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFN0YXRzLmNsb3NlICYmIG9sZFN0YXRzLmNsb3NlLnF1b3RlXG4gICAgICAgICAgICAgICAgICAgICkgfHxcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhFUkUgISEhXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRzLmNoYW5nZSAhPT0gb2xkU3RhdHMuY2hhbmdlIHx8XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhdHMudm9sdW1lQmFzZSAhPT0gb2xkU3RhdHMudm9sdW1lQmFzZSB8fFxuXG4gICAgICAgICAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRzLnByaWNlICYmIG5ld1N0YXRzLnByaWNlLnF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkU3RhdHMucHJpY2UgJiYgb2xkU3RhdHMucHJpY2UucXVvdGVcbiAgICAgICAgICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0cy5wcmljZSAmJiBuZXdTdGF0cy5wcmljZS5iYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkU3RhdHMucHJpY2UgJiYgb2xkU3RhdHMucHJpY2UuYmFzZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTsqL1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcblxuICAgICAgICBpZiAodGhpcy5fY2hlY2tTdGF0cyhucy5tYXJrZXRTdGF0cywgdGhpcy5zdGF0ZS5tYXJrZXRTdGF0cykgPT0gdHJ1ZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tTdGF0cyBcIiArIHRoaXMuX2NoZWNrU3RhdHMobnMubWFya2V0U3RhdHMsIHRoaXMuc3RhdGUubWFya2V0U3RhdHMpKTtcblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLl9jaGVja1N0YXRzKG5zLm1hcmtldFN0YXRzLCB0aGlzLnN0YXRlLm1hcmtldFN0YXRzKSB8fFxuXG4gICAgICAgICAgICBucy5pbWdFcnJvciAhPT0gdGhpcy5zdGF0ZS5pbWdFcnJvciB8fFxuICAgICAgICAgICAgbnMuc3RhcnJlZE1hcmtldHMgIT09IHRoaXMuc3RhdGUuc3RhcnJlZE1hcmtldHMgfHxcblxuICAgICAgICAgICAgbnMuYmFzZS5nZXQoXCJpZFwiKSAhPT0gdGhpcy5zdGF0ZS5iYXNlLmdldChcImlkXCIpIHx8XG4gICAgICAgICAgICBucy5xdW90ZS5nZXQoXCJpZFwiKSAhPT0gdGhpcy5zdGF0ZS5xdW90ZS5nZXQoXCJpZFwiKSB8fFxuXG4gICAgICAgICAgICBucC52b2x1bWVVU0RUICE9PSB0aGlzLnByb3BzLnZvbHVtZVVTRFQgfHxcblxuICAgICAgICAgICAgbnAucHJpY2UgIT09IHRoaXMucHJvcHMucHJpY2UgfHxcbiAgICAgICAgICAgIG5wLnZvbHVtZSAhPT0gdGhpcy5wcm9wcy52b2x1bWUgfHxcbiAgICAgICAgICAgIG5wLmNoYW5nZSAhPT0gdGhpcy5wcm9wcy5jaGFuZ2VcblxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLnF1b3RlLmdldChcInN5bWJvbFwiKSAhPT0gdGhpcy5zdGF0ZS5xdW90ZS5nZXQoXCJzeW1ib2xcIikgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5iYXNlLmdldChcInN5bWJvbFwiKSAhPT0gdGhpcy5zdGF0ZS5iYXNlLmdldChcInN5bWJvbFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHF1b3RlOiBuZXh0UHJvcHMucXVvdGUsXG4gICAgICAgICAgICAgICAgYmFzZTogbmV4dFByb3BzLmJhc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLnZvbHVtZVVTRFQgIT09IHRoaXMuc3RhdGUudm9sdW1lVVNEVFxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJXaWxsIGJlIHVwZGF0ZSBWT0xVTUU6IFwiICsgbmV4dFByb3BzLnZvbHVtZVVTRFQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2b2x1bWVVU0RUOiBuZXh0UHJvcHMudm9sdW1lVVNEVFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMucHJpY2UgIT09IHRoaXMuc3RhdGUucHJpY2UgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy52b2x1bWUgIT09IHRoaXMuc3RhdGUudm9sdW1lIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY2hhbmdlICE9PSB0aGlzLnN0YXRlLmNoYW5nZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJXaWxsIGJlIHVwZGF0ZSBwcmljZS92b2x1bWUvY2hhbmdlOiBcIik7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHByaWNlOiBuZXh0UHJvcHMucHJpY2UsXG4gICAgICAgICAgICAgICAgdm9sdW1lOiBuZXh0UHJvcHMudm9sdW1lLFxuICAgICAgICAgICAgICAgIGNoYW5nZTogbmV4dFByb3BzLmNoYW5nZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgICAgIE1hcmtldHNBY3Rpb25zLmdldE1hcmtldFN0YXRzLmRlZmVyKHRoaXMuc3RhdGUucXVvdGUsIHRoaXMuc3RhdGUuYmFzZSk7XG5cbiAgICAgICAgbGV0IG1hcmtldFN0YXRzID0gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMuZ2V0KFxuICAgICAgICAgICAgYCR7dGhpcy5zdGF0ZS5iYXNlLmdldChcInN5bWJvbFwiKX1fJHt0aGlzLnN0YXRlLnF1b3RlLmdldChcInN5bWJvbFwiKX1gXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5nZXRNYXJrZXRTdGF0cy5iaW5kKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5xdW90ZSxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJhc2VcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAzMCAqIDEwMDBcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1hcmtldFN0YXRzOiBtYXJrZXRTdGF0cyxcblxuICAgICAgICAgICAgcHJpY2U6IG1hcmtldFN0YXRzID8gbWFya2V0U3RhdHMucHJpY2UgOiAwLFxuICAgICAgICAgICAgdm9sdW1lOiBtYXJrZXRTdGF0cyA/IG1hcmtldFN0YXRzLnZvbHVtZVF1b3RlIDogMCxcbiAgICAgICAgICAgIGNoYW5nZTogbWFya2V0U3RhdHMgPyBtYXJrZXRTdGF0cy5jaGFuZ2UgOiAwLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRzSW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGdvVG9NYXJrZXQoZSkge1xuICAgICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgaGlzdG9yeSA9IHRoaXMuc3RhdGUuaGlzdG9yeTtcbiAgICAgICAgaGlzdG9yeS5wdXNoKFxuICAgICAgICAgICAgYC9tYXJrZXQvJHt0aGlzLnN0YXRlLmJhc2UuZ2V0KFwic3ltYm9sXCIpfV8ke3RoaXMuc3RhdGUucXVvdGUuZ2V0KFxuICAgICAgICAgICAgICAgIFwic3ltYm9sXCJcbiAgICAgICAgICAgICl9YFxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9hZGRNYXJrZXQocXVvdGUsIGJhc2UpIHtcblxuICAgICAgICBsZXQgbWFya2V0SUQgPSBgJHtxdW90ZX1fJHtiYXNlfWA7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnN0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXRJRCkpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5hZGRTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5yZW1vdmVTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbWdFcnJvcikge1xuICAgICAgICAgICAgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0uc3JjID0gXCJhc3NldC1zeW1ib2xzL3Vua25vd24ucG5nXCI7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbWdFcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBoaWRlLFxuICAgICAgICAgICAgaXNMb3dWb2x1bWUsXG4gICAgICAgICAgICAvL3ZvbHVtZVVTRFRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICBtYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIHZvbHVtZVVTRFQsXG5cbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgdm9sdW1lLFxuICAgICAgICAgICAgY2hhbmdlXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChpc0xvd1ZvbHVtZSB8fCBoaWRlKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBpZiAoIW1hcmtldFN0YXRzIHx8IHZvbHVtZVVTRFQgPCAxKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcHJpY2UgPSBwcmljZSAmJiBwcmljZVxuICAgICAgICAgICAgPyB1dGlscy5wcmljZV90ZXh0KFxuICAgICAgICAgICAgICAgIHByaWNlLnRvUmVhbCgpLFxuICAgICAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICAgICAgcXVvdGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICB2b2x1bWUgPSAhdm9sdW1lXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X3ZvbHVtZShcbiAgICAgICAgICAgICAgICB2b2x1bWUsXG4gICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGNoYW5nZSA9ICFjaGFuZ2UgPyBudWxsIDogY2hhbmdlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEltYWdlTmFtZShhc3NldCkge1xuICAgICAgICAgICAgaWYgKGFzc2V0ID09PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgbGV0IHN5bWJvbCA9IGFzc2V0LmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICAgICAgaWYgKHN5bWJvbC5zdGFydHNXaXRoKFwiUlVERVguXCIpKSByZXR1cm4gc3ltYm9sO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZ2V0X2FsbFRva2VucygpLm5hdGl2ZVRva2Vucy5pbmRleE9mKHN5bWJvbCkgIT09IC0xIHx8XG4gICAgICAgICAgICAgICAgc3ltYm9sID09IFwiRE9OQVRFXCIgfHxcbiAgICAgICAgICAgICAgICBzeW1ib2wgPT0gXCJERVhCT1RcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybiBzeW1ib2w7XG5cbiAgICAgICAgICAgIHJldHVybiBcInVua25vd25cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbWdOYW1lID0gZ2V0SW1hZ2VOYW1lKGJhc2UpO1xuXG4gICAgICAgIGxldCBjaGFuZ2VDbGFzcyA9ICFjaGFuZ2VcbiAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgOiBwYXJzZUZsb2F0KGNoYW5nZSkgPiAwXG4gICAgICAgICAgICAgICAgPyBcImNoYW5nZS11cFwiXG4gICAgICAgICAgICAgICAgOiBwYXJzZUZsb2F0KGNoYW5nZSkgPCAwXG4gICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtZG93blwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcblxuXG4gICAgICAgIGxldCBtYXJrZXRJRCA9IGAke2Jhc2UuZ2V0KFwic3ltYm9sXCIpfV8ke3F1b3RlLmdldChcInN5bWJvbFwiKX1gO1xuXG4gICAgICAgIGNvbnN0IHN0YXJDbGFzcyA9IHRoaXMuc3RhdGUuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKVxuICAgICAgICAgICAgPyBcImdvbGQtc3RhclwiXG4gICAgICAgICAgICA6IFwiZ3JleS1zdGFyXCI7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgXCJncmlkLWJsb2NrIG5vLW92ZXJmbG93IGZtLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIHNocmlua1wiXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub01hcmtldChlKVxuICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidi1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDcwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfS8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnRyYWRpbmdfcGFpclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZU1hcmtldChlLCBxdW90ZSwgYmFzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5zd2l0Y2hfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMHB4IDVweCAwcHggNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNodWZmbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2h1ZmZsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25zLnNodWZmbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZE1hcmtldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guZmF2b3VyaXRlX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXJDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29ucy5maV9zdGFyLm1hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9NYXJrZXQoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm0tdm9sdW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIi8+OntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZtLXZvbHVtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZvbHVtZVwiLz46e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZvbHVtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZtLXZvbHVtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZvbHVtZV8yNF91c2R0XCIvPjp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X3ZvbHVtZSh2b2x1bWVVU0RULCAyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZtLWNoYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmNoYW5nZVwiLz46e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbmFtZXMoXCJmbG9hdC1yaWdodFwiLCBjaGFuZ2VDbGFzcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhbmdlfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1hcmtldENhcmQgPSBCaW5kVG9DaGFpblN0YXRlKE1hcmtldENhcmQpO1xuXG5jbGFzcyBNYXJrZXRDYXJkV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPE1hcmtldENhcmQgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNYXJrZXRDYXJkV3JhcHBlciwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW01hcmtldHNTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcyhwcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWFya2V0U3RhdHM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzLmdldChcbiAgICAgICAgICAgICAgICBwcm9wcy5tYXJrZXRJZFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc3RhcnJlZE1hcmtldHMsXG4gICAgICAgIH07XG4gICAgfVxufSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IEFjY291bnRJbWFnZSBmcm9tIFwiLi4vQWNjb3VudC9BY2NvdW50SW1hZ2VcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBBY2NvdW50QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9BY2NvdW50QWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtcbiAgICBDaGFpblN0b3JlLFxuICAgIFB1YmxpY0tleSxcbiAgICBDaGFpblZhbGlkYXRpb24sXG4gICAgRmV0Y2hDaGFpbixcbiAgICBGZXRjaENoYWluT2JqZWN0c1xufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBhY2NvdW50VXRpbHMgZnJvbSBcImNvbW1vbi9hY2NvdW50X3V0aWxzXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge1xuICAgIFRvb2x0aXAsXG4gICAgQnV0dG9uLFxuICAgIElucHV0LFxuICAgIEljb24gYXMgQW50SWNvbixcbiAgICBTZWxlY3QsXG4gICAgRm9ybVxufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmltcG9ydCBBY2NvdW50U2VsZWN0b3IgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudFNlbGVjdG9yXCI7XG5cbmNvbnN0IE1BWF9MT09LVVBfQVRURU1QVFMgPSA1O1xuLypcbiAqIEBicmllZiBBbGxvd3MgdGhlIHVzZXIgdG8gZW50ZXIgYW4gYWNjb3VudCBieSBuYW1lIG9yICNJRFxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGRlc2lnbmVkIHRvIGJlIHN0YXRlbGVzcyBhcyBwb3NzaWJsZS4gIEl0J3MgcHJpbWFyeSByZXNwb25zYmlsaXR5IGlzIHRvXG4gKiBtYW5hZ2UgdGhlIGxheW91dCBvZiBkYXRhIGFuZCB0byBmaWx0ZXIgdGhlIHVzZXIgaW5wdXQuXG4gKlxuICovXG5cbmNsYXNzIEFjY291bnRTZWxlY3Rvckxpc3RpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBhIHRyYW5zbGF0aW9uIGtleSBmb3IgdGhlIGxhYmVsXG4gICAgICAgIGVycm9yOiBQcm9wVHlwZXMuZWxlbWVudCwgLy8gdGhlIGVycm9yIG1lc3NhZ2Ugb3ZlcnJpZGVcbiAgICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHRoZSBwbGFjZWhvbGRlciB0ZXh0IHRvIGJlIGRpc3BsYXllZCB3aGVuIHRoZXJlIGlzIG5vIHVzZXJfaW5wdXRcbiAgICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLCAvLyBhIG1ldGhvZCB0byBiZSBjYWxsZWQgYW55IHRpbWUgdXNlciBpbnB1dCBjaGFuZ2VzXG4gICAgICAgIG9uQWNjb3VudENoYW5nZWQ6IFByb3BUeXBlcy5mdW5jLCAvLyBhIG1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBleGlzdGluZyBhY2NvdW50IGlzIHNlbGVjdGVkXG4gICAgICAgIG9uQWN0aW9uOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgY2FsbGVkIHdoZW4gQWRkIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICAgIGFjY291bnROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgYWNjb3VudCBzZWxlY3RvciwgdGhlIHN0cmluZyB0aGUgdXNlciBlbnRlcnNcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnQsIC8vIGFjY291bnQgb2JqZWN0IHJldHJpZXZlZCB2aWEgQmluZFRvQ2hhaW5TdGF0ZSBkZWNvcmF0b3IgKG5vdCBpbnB1dClcbiAgICAgICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsIC8vIHRhYmluZGV4IHByb3BlcnR5IHRvIGJlIHBhc3NlZCB0byBpbnB1dCB0YWdcbiAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSBpdCBpZiB5b3UgbmVlZCB0byBkaXNhYmxlIGFjdGlvbiBidXR0b24sXG4gICAgICAgIGFsbG93VXBwZXJjYXNlOiBQcm9wVHlwZXMuYm9vbCwgLy8gdXNlIGl0IGlmIHlvdSBuZWVkIHRvIGFsbG93IHVwcGVyY2FzZSBsZXR0ZXJzXG4gICAgICAgIHR5cGVhaGVhZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGV4Y2x1ZGVBY2NvdW50czogUHJvcFR5cGVzLmFycmF5LCAvLyBhcnJheSBvZiBhY2NvdW50cyB0byBleGNsdWRlIGZyb20gdGhlIHR5cGVhaGVhZFxuICAgICAgICBmb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZWRpdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBsb2NrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICByZXF1aXJlQWN0aXZlU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbm9Gb3JtOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBhdXRvc3Vic2NyaWJlOiBmYWxzZSxcbiAgICAgICAgZXhjbHVkZUFjY291bnRzOiBbXSxcbiAgICAgICAgZGlzYWJsZWQ6IG51bGwsXG4gICAgICAgIGVkaXRhYmxlOiBudWxsLFxuICAgICAgICBsb2NrZWQ6IGZhbHNlLFxuICAgICAgICByZXF1aXJlQWN0aXZlU2VsZWN0OiB0cnVlLCAvLyBTaG91bGQgbm90IGJlIHNldCB0byBmYWxzZSwgcmVxdWlyZWQgZm9yIGZhbGxiYWNrXG4gICAgICAgIG5vRm9ybTogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWNjb3VudEluZGV4OiBbXSxcbiAgICAgICAgICAgIGxvY2tlZDogbnVsbFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHthY2NvdW50LCBhY2NvdW50TmFtZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIFBvcHVsYXRlIGFjY291bnQgc2VhcmNoIGFycmF5LCBmZXRjaCBvbmx5IG9uY2VcbiAgICAgICAgaWYgKGFjY291bnROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhY2NvdW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5teUFjdGl2ZUFjY291bnRzLm1hcChhID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFRoaXNUb0luZGV4KGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5jb250YWN0cy5tYXAoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2ZldGNoQWNjb3VudHMoKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkICYmIGFjY291bnQpXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQWNjb3VudENoYW5nZWQoYWNjb3VudCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnR5cGVhaGVhZCAmJiBhY2NvdW50TmFtZSlcbiAgICAgICAgICAgIHRoaXMub25JbnB1dENoYW5nZWQoYWNjb3VudE5hbWUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZm9jdXMgJiYgISF0aGlzLnByb3BzLmVkaXRhYmxlICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMudXNlcl9pbnB1dC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZXZQcm9wcy5hY2NvdW50ICYmIHByZXZQcm9wcy5hY2NvdW50ICE9PSB0aGlzLnByb3BzLmFjY291bnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQWNjb3VudENoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQWNjb3VudENoYW5nZWQodGhpcy5wcm9wcy5hY2NvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9hZGRUb0luZGV4KGFjY291bnROYW1lLCBub0RlbGF5ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKG5vRGVsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFRoaXNUb0luZGV4KGFjY291bnROYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2ZldGNoQWNjb3VudHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRUb0luZGV4KGFjY291bnROYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYWRkVGhpc1RvSW5kZXgoYWNjb3VudE5hbWUpIHtcbiAgICAgICAgbGV0IHthY2NvdW50SW5kZXh9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWFjY291bnROYW1lKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGluQWNjb3VudExpc3QgPSBhY2NvdW50SW5kZXguZmluZChhID0+IGEubmFtZSA9PT0gYWNjb3VudE5hbWUpO1xuXG4gICAgICAgIGlmIChhY2NvdW50TmFtZSAmJiAhaW5BY2NvdW50TGlzdCkge1xuICAgICAgICAgICAgYWNjb3VudEluZGV4LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICAgICAgYXR0ZW1wdHM6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldEluZGV4KG5hbWUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBpbmRleC5maW5kSW5kZXgoYSA9PiBhLm5hbWUgPT09IG5hbWUpO1xuICAgIH1cblxuICAgIF9nZXRTZWFyY2hBcnJheSgpIHtcbiAgICAgICAgbGV0IHthY2NvdW50SW5kZXh9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAvLyBGb3IgYWxsIG9iamVjdHMgaW4gc2VhcmNoX2FycmF5LCBxdWVyeSB3aXRoIEZldGNoQ2hhaW5PYmplY3RzXG4gICAgICAgIC8vIFVwZGF0ZSByZXN1bHRzIGZvciBlYWNoIG9iamVjdCB3aXRoIHJldHVybmVkIGRhdGEgYW5kIHJlbW92ZSBmcm9tIHNlYXJjaF9hcnJheVxuICAgICAgICAvLyBVcGRhdGUgc2VhcmNoX2FycmF5IGZvciBhbGwgcmVtYWluaW5nIG9iamVjdHMgd2l0aCBpbmNyZWFzZWQgYXR0ZW1wdHMgY291bnRcbiAgICAgICAgLy8gd2hpY2ggaXMgd2hlbiBhY2NvdW50IGRvZXMgbm90IGV4aXN0cywgYnV0IGNhbiBhbHNvIGJlIGlmIG5vZGUgZmFpbGVkIHRvIHNlbmQgcmVzdWx0c1xuICAgICAgICAvLyBiYWNrIGluIHRpbWUsIHNvIHdlIHF1ZXJ5IGF0IGxlYXN0IGBNQVhfTE9PS1VQX0FUVEVNUFRTYCB0aW1lcyBiZWZvcmUgd2Ugc3RvcFxuXG4gICAgICAgIC8vIEZpbHRlciBvdXQgd2hhdCBvYmplY3RzIHdlIHN0aWxsIHJlcXVpcmUgZGF0YSBmb3JcbiAgICAgICAgbGV0IHNlYXJjaF9hcnJheSA9IGFjY291bnRJbmRleFxuICAgICAgICAgICAgLmZpbHRlcihzZWFyY2ggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhc2VhcmNoLmRhdGEgJiYgc2VhcmNoLmF0dGVtcHRzIDwgTUFYX0xPT0tVUF9BVFRFTVBUU1xuICAgICAgICAgICAgICAgICAgICA/IHNlYXJjaC5uYW1lXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKHNlYXJjaCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlYXJjaC5uYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaF9hcnJheTtcbiAgICB9XG5cbiAgICBfZmV0Y2hBY2NvdW50cygpIHtcbiAgICAgICAgbGV0IHthY2NvdW50SW5kZXh9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgc2VhcmNoX2FycmF5ID0gdGhpcy5fZ2V0U2VhcmNoQXJyYXkoKTtcblxuICAgICAgICBpZiAoc2VhcmNoX2FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChfX0RFVl9fKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9va2VkIGZvciBcIiArIHNlYXJjaF9hcnJheS5sZW5ndGggKyBcIiBhY2NvdW50c1wiKTtcbiAgICAgICAgICAgIEZldGNoQ2hhaW5PYmplY3RzKFxuICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0QWNjb3VudCxcbiAgICAgICAgICAgICAgICBzZWFyY2hfYXJyYXksXG4gICAgICAgICAgICAgICAgMzAwMCxcbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKS50aGVuKGFjY291bnRzID0+IHtcbiAgICAgICAgICAgICAgICBhY2NvdW50cy5mb3JFYWNoKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iamVjdEluZGV4ID0gdGhpcy5fZ2V0SW5kZXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudC5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX3BvcHVsYXRlQWNjb3VudEluZGV4KGFjY291bnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZGV4W29iamVjdEluZGV4XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hfYXJyYXkuc3BsaWNlKGFjY291bnQuZ2V0KFwibmFtZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNlYXJjaF9hcnJheS5mb3JFYWNoKGFjY291bnRfdG9fZmluZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmplY3RJbmRleCA9IHRoaXMuX2dldEluZGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF90b19maW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZGV4XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFtvYmplY3RJbmRleF0uYXR0ZW1wdHMrKztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZGV4OiBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFJ1biBhbm90aGVyIGZldGNoIG9mIGFjY291bnRzIGlmIGRhdGEgaXMgc3RpbGwgbWlzc2luZ1xuICAgICAgICAgICAgICAgIGxldCBpc0RhdGFNaXNzaW5nID0gdGhpcy5zdGF0ZS5hY2NvdW50SW5kZXguZmluZChcbiAgICAgICAgICAgICAgICAgICAgYSA9PiAhYS5kYXRhICYmIGEuYXR0ZW1wdHMgPCBNQVhfTE9PS1VQX0FUVEVNUFRTXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0RhdGFNaXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmV0Y2hBY2NvdW50cygpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3BvcHVsYXRlQWNjb3VudEluZGV4KGFjY291bnRSZXN1bHQpIHtcbiAgICAgICAgbGV0IHtteUFjdGl2ZUFjY291bnRzLCBjb250YWN0c30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIC8vIFNob3VsZCBub3QgaGFwcGVuLCBqdXN0IGZhaWxzYWZlXG4gICAgICAgIGlmICghYWNjb3VudFJlc3VsdCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gYWNjb3VudFJlc3VsdC5nZXQoXCJuYW1lXCIpO1xuICAgICAgICBsZXQgYWNjb3VudFN0YXR1cyA9IENoYWluU3RvcmUuZ2V0QWNjb3VudE1lbWJlclN0YXR1cyhhY2NvdW50UmVzdWx0KTtcbiAgICAgICAgbGV0IGFjY291bnRUeXBlID0gdGhpcy5nZXRJbnB1dFR5cGUoYWNjb3VudE5hbWUpO1xuXG4gICAgICAgIGxldCBzdGF0dXNMYWJlbCA9ICFhY2NvdW50VXRpbHMuaXNLbm93blNjYW1tZXIoYWNjb3VudE5hbWUpXG4gICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubWVtYmVyLlwiICsgYWNjb3VudFN0YXR1cylcbiAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5tZW1iZXIuc3VzcGVjdGVkX3NjYW1tZXJcIik7XG5cbiAgICAgICAgbGV0IHJpZ2h0TGFiZWwgPVxuICAgICAgICAgICAgYWNjb3VudFR5cGUgPT09IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgPyBcIiNcIiArIGFjY291bnRSZXN1bHQuZ2V0KFwiaWRcIikuc3Vic3RyaW5nKDQpXG4gICAgICAgICAgICAgICAgOiBhY2NvdW50VHlwZSA9PT0gXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudFJlc3VsdC5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIDogYWNjb3VudFR5cGUgPT0gXCJwdWJrZXlcIiAmJiB0aGlzLnByb3BzLmFsbG93UHViS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiUHVibGljIEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICAgICAgYXR0ZW1wdHM6IDAsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGFjY291bnRSZXN1bHQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgbmFtZTogYWNjb3VudE5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZTogYWNjb3VudFR5cGUsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBhY2NvdW50U3RhdHVzLFxuICAgICAgICAgICAgICAgIGlzT3duQWNjb3VudDogbXlBY3RpdmVBY2NvdW50cy5oYXMoYWNjb3VudE5hbWUpLFxuICAgICAgICAgICAgICAgIGlzQ29udGFjdDogY29udGFjdHMuaGFzKGFjY291bnROYW1lKSxcbiAgICAgICAgICAgICAgICBpc0tub3duU2NhbW1lcjogYWNjb3VudFV0aWxzLmlzS25vd25TY2FtbWVyKGFjY291bnROYW1lKSxcbiAgICAgICAgICAgICAgICBzdGF0dXNMYWJlbDogc3RhdHVzTGFiZWwsXG4gICAgICAgICAgICAgICAgcmlnaHRMYWJlbDogcmlnaHRMYWJlbCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRVdGlscy5pc0tub3duU2NhbW1lcihhY2NvdW50TmFtZSkgfHwgIWFjY291bnRSZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuZWdhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjYW4gYmUgdXNlZCBpbiBwYXJlbnQgY29tcG9uZW50OiB0aGlzLnJlZnMuYWNjb3VudF9zZWxlY3Rvci5nZXRBY2NvdW50KClcbiAgICBnZXRBY2NvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5hY2NvdW50O1xuICAgIH1cblxuICAgIGdldEVycm9yKCkge1xuICAgICAgICBsZXQge2FjY291bnQsIGFjY291bnROYW1lLCBlcnJvciwgdHlwZWFoZWFkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IGlucHV0VHlwZSA9IGFjY291bnROYW1lID8gdGhpcy5nZXRJbnB1dFR5cGUoYWNjb3VudE5hbWUpIDogbnVsbDtcblxuICAgICAgICBpZiAoIXR5cGVhaGVhZCkge1xuICAgICAgICAgICAgaWYgKCFhY2NvdW50ICYmIGFjY291bnROYW1lICYmIGlucHV0VHlwZSAhPT0gXCJwdWJrZXlcIikge1xuICAgICAgICAgICAgICAgIGVycm9yID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5lcnJvcnMudW5rbm93blwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFR5cGVhaGVhZCBjYW4ndCBzZWxlY3QgYW4gdW5rbm93biBhY2NvdW50IVxuICAgICAgICAgICAgLy8gaWYgKFxuICAgICAgICAgICAgLy8gICAgICEoYWxsb3dQdWJLZXkgJiYgaW5wdXRUeXBlID09PSBcInB1YmtleVwiKSAmJlxuICAgICAgICAgICAgLy8gICAgICFlcnJvciAmJlxuICAgICAgICAgICAgLy8gICAgIGFjY291bnROYW1lICYmXG4gICAgICAgICAgICAvLyAgICAgIWFjY291bnRcbiAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgIC8vICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuZXJyb3JzLnVua25vd25cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yICYmIGFjY291bnQgJiYgIWlucHV0VHlwZSlcbiAgICAgICAgICAgIGVycm9yID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5lcnJvcnMuaW52YWxpZFwiKTtcblxuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0SW5wdXRUeXBlKHZhbHVlKSB7XG4gICAgICAgIC8vIE9LXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodmFsdWVbMF0gPT09IFwiI1wiICYmIHV0aWxzLmlzX29iamVjdF9pZChcIjEuMi5cIiArIHZhbHVlLnN1YnN0cmluZygxKSkpXG4gICAgICAgICAgICByZXR1cm4gXCJpZFwiO1xuICAgICAgICBpZiAoQ2hhaW5WYWxpZGF0aW9uLmlzX2FjY291bnRfbmFtZSh2YWx1ZSwgdHJ1ZSkpIHJldHVybiBcIm5hbWVcIjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWxsb3dQdWJLZXkgJiYgUHVibGljS2V5LmZyb21QdWJsaWNLZXlTdHJpbmcodmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuIFwicHVia2V5XCI7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldFZlcmlmaWVkQWNjb3VudE5hbWUoZSkge1xuICAgICAgICBsZXQge2FsbG93VXBwZXJjYXNlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGU7XG4gICAgICAgIH0gZWxzZSBpZiAoZSAmJiBlLnRhcmdldCkge1xuICAgICAgICAgICAgdmFsdWUgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFsbG93VXBwZXJjYXNlKSB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gSWYgcmVnZXggbWF0Y2hlcyBeLiojL2FjY291bnQvYWNjb3VudC1uYW1lLy4qJCwgcGFyc2Ugb3V0IGFjY291bnQtbmFtZVxuICAgICAgICBsZXQgX3ZhbHVlID0gdmFsdWUucmVwbGFjZShcIiNcIiwgXCJcIikubWF0Y2goLyg/OlxcL2FjY291bnRcXC8pKC4qKS8pO1xuICAgICAgICBpZiAoX3ZhbHVlKSB2YWx1ZSA9IF92YWx1ZVsxXTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgX25vdGlmeU9uQ2hhbmdlKHNlbGVjdGVkQWNjb3VudE5hbWUsIGlucHV0VHlwZSkge1xuICAgICAgICBsZXQge3Byb3BzfSA9IHRoaXM7XG5cbiAgICAgICAgLy8gQ2xlYXIgc2VsZWN0ZWQgYWNjb3VudCB3aGVuIHdlIGhhdmUgbmV3IGlucHV0IGRhdGEgaWYgd2UgcmVxdWlyZSBhbiBhY3RpdmUgc2VsZWN0XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGlucHV0VHlwZSA9PSBcImlucHV0XCIgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMudHlwZWFoZWFkICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlcXVpcmVBY3RpdmVTZWxlY3RcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoISFwcm9wcy5vbkFjY291bnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25BY2NvdW50Q2hhbmdlZChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghIXByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSB0aGlzLmdldFZlcmlmaWVkQWNjb3VudE5hbWUoc2VsZWN0ZWRBY2NvdW50TmFtZSk7XG5cbiAgICAgICAgLy8gU3luY2hyb25vdXMgb25DaGFuZ2UgZm9yIGlucHV0IGNoYW5nZVxuICAgICAgICBpZiAoISFwcm9wcy5vbkNoYW5nZSAmJiAoISFhY2NvdW50TmFtZSB8fCBhY2NvdW50TmFtZSA9PT0gXCJcIikpIHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGFjY291bnROYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzeW5jaHJvbm91cyBvbkFjY291bnRDaGFuZ2VkIGZvciBjaGVja2luZyBvbiBjaGFpblxuICAgICAgICBpZiAoISFwcm9wcy5vbkFjY291bnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICBGZXRjaENoYWluKFwiZ2V0QWNjb3VudFwiLCBhY2NvdW50TmFtZSwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgICAgW2FjY291bnROYW1lXTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICEhYWNjb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLnByb3BzLnJlcXVpcmVBY3RpdmVTZWxlY3QgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGUgPT0gXCJzZWxlY3RcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5yZXF1aXJlQWN0aXZlU2VsZWN0KVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQWNjb3VudENoYW5nZWQoYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TZWxlY3Qoc2VsZWN0ZWRBY2NvdW50TmFtZSkge1xuICAgICAgICB0aGlzLl9ub3RpZnlPbkNoYW5nZShzZWxlY3RlZEFjY291bnROYW1lLCBcInNlbGVjdFwiKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuX2FkZFRvSW5kZXgodGhpcy5nZXRWZXJpZmllZEFjY291bnROYW1lKGUpKTtcbiAgICAgICAgdGhpcy5fbm90aWZ5T25DaGFuZ2UoZSwgXCJpbnB1dFwiKTtcbiAgICB9XG5cbiAgICBvbktleURvd24oZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgICAgICAgIHRoaXMub25BY3Rpb24oZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25BZGRDb250YWN0KCkge1xuICAgICAgICBBY2NvdW50QWN0aW9ucy5hZGRBY2NvdW50Q29udGFjdCh0aGlzLnByb3BzLmFjY291bnROYW1lKTtcbiAgICB9XG5cbiAgICBfb25SZW1vdmVDb250YWN0KCkge1xuICAgICAgICBBY2NvdW50QWN0aW9ucy5yZW1vdmVBY2NvdW50Q29udGFjdCh0aGlzLnByb3BzLmFjY291bnROYW1lKTtcbiAgICB9XG5cbiAgICBvbkFjdGlvbihlKSB7XG4gICAgICAgIGxldCB7b25BY3Rpb24sIGRpc2FibGVBY3Rpb25CdXR0b24sIGFjY291bnQsIGFjY291bnROYW1lfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCF0aGlzLmdldEVycm9yKCkgJiYgb25BY3Rpb24gJiYgIWRpc2FibGVBY3Rpb25CdXR0b24pIHtcbiAgICAgICAgICAgIGlmIChhY2NvdW50KSBvbkFjdGlvbihhY2NvdW50KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0SW5wdXRUeXBlKGFjY291bnROYW1lKSA9PT0gXCJwdWJrZXlcIilcbiAgICAgICAgICAgICAgICBvbkFjdGlvbihhY2NvdW50TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHthY2NvdW50LCBhY2NvdW50TmFtZSwgZGlzYWJsZUFjdGlvbkJ1dHRvbn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBzZWFyY2hJblByb2dyZXNzID0gdGhpcy5zdGF0ZS5hY2NvdW50SW5kZXguZmluZChcbiAgICAgICAgICAgIGEgPT4gIWEuZGF0YSAmJiBhLmF0dGVtcHRzIDwgTUFYX0xPT0tVUF9BVFRFTVBUU1xuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxvY2tlZFN0YXRlID1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUubG9ja2VkICE9PSBudWxsID8gdGhpcy5zdGF0ZS5sb2NrZWQgOiB0aGlzLnByb3BzLmxvY2tlZDtcblxuICAgICAgICBsZXQgZXJyb3IgPSB0aGlzLmdldEVycm9yKCksXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLFxuICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50LFxuICAgICAgICAgICAgZGlzYWJsZWRBY3Rpb24sXG4gICAgICAgICAgICBkaXNhYmxlZElucHV0LFxuICAgICAgICAgICAgZWRpdGFibGVJbnB1dCxcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXM7XG5cbiAgICAgICAgZWRpdGFibGVJbnB1dCA9ICEhbG9ja2VkU3RhdGVcbiAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5lZGl0YWJsZSAhPSBudWxsXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmVkaXRhYmxlXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgZGlzYWJsZWRJbnB1dCA9ICEhbG9ja2VkU3RhdGVcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiB0aGlzLnByb3BzLmRpc2FibGVkICE9IG51bGxcbiAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBTZWxlY3RlZCBBY2NvdW50XG4gICAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgICAgICBsZXQgb2JqZWN0SW5kZXggPSB0aGlzLl9nZXRJbmRleChhY2NvdW50LmdldChcIm5hbWVcIiksIGFjY291bnRJbmRleCk7XG5cbiAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudCA9XG4gICAgICAgICAgICAgICAgYWNjb3VudEluZGV4ICYmIGFjY291bnRJbmRleFtvYmplY3RJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzYWJsZWRBY3Rpb24gPVxuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICBhY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQudHlwZSA9PT0gXCJwdWJrZXlcIilcbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgIGVycm9yIHx8XG4gICAgICAgICAgICBkaXNhYmxlQWN0aW9uQnV0dG9uO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LmlzT3duQWNjb3VudCkge1xuICAgICAgICAgICAgbGlua2VkX3N0YXR1cyA9IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5vd25fYWNjb3VudFwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAgZ3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJ1c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC5pc0tub3duU2NhbW1lcikge1xuICAgICAgICAgICAgbGlua2VkX3N0YXR1cyA9IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5zY2FtX2FjY291bnRcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwIHJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cIndhcm5pbmdcIiB0aGVtZT1cImZpbGxlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQuaXNDb250YWN0KSB7XG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLmZvbGxvd191c2VyXCIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblJlbW92ZUNvbnRhY3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAgZ3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJzdGFyXCIgdGhlbWU9XCJmaWxsZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY291bnQpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuZm9sbG93X3VzZXJfYWRkXCIpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkFkZENvbnRhY3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJzdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlYWhlYWQpIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25zQ29udGFpbmVyID0gYWNjb3VudEluZGV4XG4gICAgICAgICAgICAgICAgLmZpbHRlcihhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlsdGVyIGFjY291bnRzIGJhc2VkIG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gRXhjbHVkZSB3aXRob3V0IHJlc3VsdHMgKG1pc3NpbmcgY2hhaW4gZGF0YSBhdCB0aGUgbW9tZW50KVxuICAgICAgICAgICAgICAgICAgICAvLyAtIEV4Y2x1ZGVkIGFjY291bnRzIChieSBwcm9wcylcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBJbmNsdWRlIHVzZXJzIG93biBhY2NvdW50cyAoaXNPd25BY2NvdW50KVxuICAgICAgICAgICAgICAgICAgICAvLyAtIEluY2x1ZGUgdXNlcnMgY29udGFjdHMgKGlzQ29udGFjdCkgdW5sZXNzIGl0J3MgYSBwcmV2aW91c2x5IGxvY2tlZCBpbnB1dFxuICAgICAgICAgICAgICAgICAgICAvLyAtIEluY2x1ZGUgY3VycmVudCBpbnB1dFxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5leGNsdWRlQWNjb3VudHMuaW5kZXhPZihhY2NvdW50LmlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZGF0YS5pc093bkFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy5sb2NrZWQgJiYgYWNjb3VudC5kYXRhLmlzQ29udGFjdCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY2NvdW50TmFtZSAmJiBhY2NvdW50LmRhdGEubmFtZSA9PT0gYWNjb3VudE5hbWUpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmRhdGEuaXNPd25BY2NvdW50IDwgYi5kYXRhLmlzT3duQWNjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZGF0YS5uYW1lID4gYi5kYXRhLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2FjY291bnQuZGF0YS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudC5kYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjY291bnQuZGF0YS5kaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5pc093bkFjY291bnQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJ1c2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLmlzQ29udGFjdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cInN0YXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEuaXNLbm93blNjYW1tZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJ3YXJuaW5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEuc3RhdHVzTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyID0gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25MYWJlbFByb3A9e1widmFsdWVcIn1cbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25TZWxlY3QuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMub25JbnB1dENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuc2VhcmNoXCIpfVxuICAgICAgICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdsb2JhbC5ub3RfZm91bmRcIil9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEFjY291bnQgPyBzZWxlY3RlZEFjY291bnQubmFtZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZElucHV0ID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIgPSAoXG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQudHlwZSA9PT0gXCJwdWJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImxvd2VyY2FzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhbnQ6IFwiaW5pdGlhbFwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmVkaXRhYmxlID8gXCJ1c2VybmFtZVwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5hY2NvdW50TmFtZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50Lm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cInVzZXJfaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmVkaXRhYmxlIHx8ICEhdGhpcy5wcm9wcy5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMudGFiSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAhIWVkaXRhYmxlSW5wdXQgPyBlZGl0YWJsZUlucHV0LnRvU3RyaW5nKCkgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWFkT25seT17XG4gICAgICAgICAgICAgICAgICAgICAgICAhIWVkaXRhYmxlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICghZWRpdGFibGVJbnB1dCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY2NvdW50SW1hZ2VDb250YWluZXIgPSB0aGlzLnByb3BzXG4gICAgICAgICAgICAuaGlkZUltYWdlID8gbnVsbCA6IHNlbGVjdGVkQWNjb3VudCAmJlxuICAgICAgICBzZWxlY3RlZEFjY291bnQuYWNjb3VudFR5cGUgPT09IFwicHVia2V5XCIgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwia2V5XCIgdGl0bGU9XCJpY29ucy5rZXlcIiBzaXplPVwiNHhcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QWNjb3VudEltYWdlXG4gICAgICAgICAgICAgICAgc2l6ZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuc2l6ZSB8fCAzMyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMuc2l6ZSB8fCAzM1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgYWNjb3VudD17c2VsZWN0ZWRBY2NvdW50ID8gc2VsZWN0ZWRBY2NvdW50Lm5hbWUgOiBudWxsfVxuICAgICAgICAgICAgICAgIGN1c3RvbV9pbWFnZT17bnVsbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGxvY2tlZFN0YXRlQ29udGFpbmVyID0gIWxvY2tlZFN0YXRlID8gbnVsbCA6IFwiXCI7XG5cbiAgICAgICAgbGV0IHJpZ2h0TGFiZWxDb250YWluZXIgPVxuICAgICAgICAgICAgIXRoaXMucHJvcHMubGFiZWwgfHwgIXNlbGVjdGVkQWNjb3VudCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItYXJlYVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmhpZGVJbWFnZSA/IFwiIG5vLW1hcmdpblwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0LWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmlzQ29udGFjdCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudC5pc093bkFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInBvc2l0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudC5pc0tub3duU2NhbW1lciA/IFwibmVnYXRpdmVcIiA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogLTMwfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nUmlnaHQ6IFwiMC41cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRBY2NvdW50LnJpZ2h0TGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQWNjb3VudC5kaXNwbGF5VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rZWRfc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBGb3JtV3JhcHBlciA9IHRoaXMucHJvcHMubm9Gb3JtID8gUmVhY3QuRnJhZ21lbnQgOiBGb3JtO1xuICAgICAgICBjb25zdCBmb3JtV3JhcHBlclByb3BzID0gdGhpcy5wcm9wcy5ub0Zvcm1cbiAgICAgICAgICAgID8ge31cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZ1bGwtd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgIGxheW91dDogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGVcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy50b29sdGlwfVxuICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC41fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGb3JtV3JhcHBlciB7Li4uZm9ybVdyYXBwZXJQcm9wc30+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e2Vycm9yID8gXCJlcnJvclwiIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9e2Vycm9yID8gZXJyb3IgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmlnaHRMYWJlbENvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZUhSICYmIDxociAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWxhYmVsIGlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudEltYWdlQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hJblByb2dyZXNzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwibG9hZGluZ1wiIHN0eWxlPXt7cGFkZGluZzogMTB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NrZWRTdGF0ZUNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vbkFjdGlvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwLnJlcXVpcmVkX2lucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdsb2JhbC5maWVsZF90eXBlLmFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWRBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkFjdGlvbi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy5hY3Rpb25fbGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9Gb3JtV3JhcHBlcj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFjY291bnRTZWxlY3Rvckxpc3RpbmcgPSBCaW5kVG9DaGFpblN0YXRlKEFjY291bnRTZWxlY3Rvckxpc3RpbmcpO1xuXG5BY2NvdW50U2VsZWN0b3JMaXN0aW5nID0gY29ubmVjdChcbiAgICBBY2NvdW50U2VsZWN0b3JMaXN0aW5nLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzOiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5teUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzOiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50Q29udGFjdHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50U2VsZWN0b3JMaXN0aW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge0RvbnV0Q2hhcnR9IGZyb20gXCIuL0RvbnV0Q2hhcnRcIjtcbmltcG9ydCBTZW5kTW9kYWwgZnJvbSBcIi4vRG9uYXRlU2VuZE1vZGFsXCI7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5cbmNsYXNzIENvaW5DYXJkTGlzdGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuY29pbi52b3RlcyA9IDA7XG4gICAgfVxuXG4gICAgdHJpZ2dlclNlbmQoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZF9hc3NldDogYXNzZXR9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZW5kX21vZGFsKSB0aGlzLnNlbmRfbW9kYWwuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmcm9tX25hbWUgPSBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7Y29pbn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fcm93XCI+XG4gICAgICAgICAgICAgICAgPFNlbmRNb2RhbFxuICAgICAgICAgICAgICAgICAgICBpZD1cInNlbmRfbW9kYWxfbGlzdGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHJlZkNhbGxiYWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB0aGlzLnNlbmRfbW9kYWwgPSBlO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBmcm9tX25hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5hY2NvdW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdG9fbmFtZT17Y29pbi5hY2NvdW50ID8gY29pbi5hY2NvdW50IDogZnJvbV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZD17XCIxLjMuMlwifVxuICAgICAgICAgICAgICAgICAgICB0aWNrZXI9e2NvaW4udGlja2VyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVSYW5rIGFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJhbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDQwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199Y29pbnMtbG9nby8ke2NvaW4udGlja2VyLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlQXNzZXROYW1lIGFsaWduLWxlZnQgbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4ubmFtZX0gKHtjb2luLnRpY2tlcn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4uc29vbiA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImxpc3RpbmcudGFibGUuY29taW5nX3Nvb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLCBjb2xvcjogXCJnb2xkXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVMb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtjb2luLnBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJsaXN0aW5nLmdvdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvRGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUdvYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuZ29hbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDt7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5nb2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4ubGlzdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlVm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5kb25hdGVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4udm90ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5zb29uID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNvaW4tc29vblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRyaWdnZXJTZW5kLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxLjMuMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5kb25hdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImxpc3RpbmcubW9kYWwuaGVhZGVyMlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50cmlnZ2VyU2VuZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMS4zLjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCItM3B4IDAgMHB4IDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRvbmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImxpc3RpbmcubW9kYWwuaGVhZGVyMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLTE0eFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRyaWdnZXJTZW5kLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5kb25hdGVcIi8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLnN0YXR1c1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDt7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImxpc3RpbmcudGFibGUuXCIgKyBjb2luLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5saXN0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9udXRDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGVzPXtjb2luLnZvdGVzX2Zvcl9wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWw9e2NvaW4uZ29hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Db2luQ2FyZExpc3RpbmcgPSBjb25uZWN0KENvaW5DYXJkTGlzdGluZywge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmUsIEFjY291bnRTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc2V0dGluZ3MsXG4gICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnRcbiAgICAgICAgfTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29pbkNhcmRMaXN0aW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtTZW5kTW9kYWx9IGZyb20gXCIuLi9Nb2RhbC9TZW5kTW9kYWxcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclN0eWxlR3VpZGVcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0b3JMaXN0aW5nIGZyb20gXCIuL0FjY291bnRTZWxlY3Rvckxpc3RpbmdcIjtcbmltcG9ydCBGZWVBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0ZlZUFzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7aXNOYU59IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7Rm9ybSwgTW9kYWwsIEJ1dHRvbiwgVG9vbHRpcCwgSW5wdXR9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcbmltcG9ydCB7Z2V0V2FsbGV0TmFtZX0gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5cbmNsYXNzIERvbmF0ZVNlbmRNb2RhbCBleHRlbmRzIFNlbmRNb2RhbCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChucC50b19uYW1lICE9PSB0aGlzLnN0YXRlLnRvX25hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvX25hbWU6IG5wLnRvX25hbWUgPyBucC50b19uYW1lIDogXCJcIixcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50OiBucC50b19uYW1lXG4gICAgICAgICAgICAgICAgICAgID8gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KG5wLnRvX25hbWUpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBwcm9wb3NlLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgYXNzZXRfaWQsXG4gICAgICAgICAgICBwcm9wb3NlX2FjY291bnQsXG4gICAgICAgICAgICBmZWVBbW91bnQsXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICB0b19uYW1lLFxuICAgICAgICAgICAgZnJvbV9uYW1lLFxuICAgICAgICAgICAgbWVtbyxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvcixcbiAgICAgICAgICAgIGhpZGRlblxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGZyb21fbXlfYWNjb3VudCA9XG4gICAgICAgICAgICBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoZnJvbV9hY2NvdW50KSB8fFxuICAgICAgICAgICAgZnJvbV9uYW1lID09PSB0aGlzLnByb3BzLnBhc3N3b3JkQWNjb3VudDtcbiAgICAgICAgbGV0IGZyb21fZXJyb3IgPVxuICAgICAgICAgICAgZnJvbV9hY2NvdW50ICYmICFmcm9tX215X2FjY291bnQgJiYgIXByb3Bvc2UgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgbGV0IHthc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xuXG4gICAgICAgIGlmIChmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpICYmICFmcm9tX2Vycm9yKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgICAgICBsZXQgX2Vycm9yID0gdGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgPyBcImhhcy1lcnJvclwiIDogXCJcIjtcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFzc2V0X3R5cGVzWzBdKTtcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSBhc3NldCA/IGFzc2V0LmdldChcImlkXCIpIDogYXNzZXRfdHlwZXNbMF07XG5cbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFRvdGFsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfYXNzZXRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17X2Vycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GdW5kc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb3Bvc2VfaW5jb21wbGV0ZSA9IHByb3Bvc2UgJiYgIXByb3Bvc2VfYWNjb3VudDtcbiAgICAgICAgY29uc3QgYW1vdW50VmFsdWUgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoYW1vdW50LCAvLC9nLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBpc0Ftb3VudFZhbGlkID0gYW1vdW50VmFsdWUgJiYgIWlzTmFOKGFtb3VudFZhbHVlKTtcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XG4gICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdG9fYWNjb3VudCB8fFxuICAgICAgICAgICAgIWlzQW1vdW50VmFsaWQgfHxcbiAgICAgICAgICAgICFhc3NldCB8fFxuICAgICAgICAgICAgZnJvbV9lcnJvciB8fFxuICAgICAgICAgICAgcHJvcG9zZV9pbmNvbXBsZXRlIHx8XG4gICAgICAgICAgICBiYWxhbmNlRXJyb3IgfHxcbiAgICAgICAgICAgIGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0b19hY2NvdW50LmdldChcImlkXCIpO1xuXG4gICAgICAgIGxldCB0YWJJbmRleCA9IHRoaXMucHJvcHMudGFiSW5kZXg7IC8vIENvbnRpbnVlIHRhYkluZGV4IG9uIHByb3BzIGNvdW50XG5cbiAgICAgICAgcmV0dXJuICF0aGlzLnN0YXRlLm9wZW4gPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tb2RhbF93cmFwcGVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2hpZGRlbiB8fCAhdGhpcy5zdGF0ZS5vcGVuID8gXCJoaWRlXCIgOiBcIlwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTdWJtaXROb3RWYWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByb3Bvc2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2Zlci5zZW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogXCIxOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxpc3RpbmcubW9kYWxfaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibGlzdGluZy5tb2RhbC5uZWVkX2J1eV9kb25hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJsaXN0aW5nLm1vZGFsLmhlYWRlcjJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0X25hbWU9e2dldFdhbGxldE5hbWUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpY2tlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmdWxsLXdpZHRoLXdyYXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yTGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2Zyb21fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZnJvbUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uRnJvbUFjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbkFjdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JMaXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci50b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RvX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dG9fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uVG9BY2NvdW50Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWRpdGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbW91bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X3R5cGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Fzc2V0cz17YXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxEb25hdGVTZW5kTW9kYWwgey4uLnRoaXMucHJvcHN9IHJlZj17dGhpcy5wcm9wcy5yZWZDYWxsYmFja30gLz47XG4gICAgfVxufVxuXG5Eb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlciA9IGNvbm5lY3QoRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50LFxuICAgICAgICAgICAgdGFiSW5kZXg6IHByb3BzLnRhYkluZGV4IHx8IDBcbiAgICAgICAgfTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL0RvbnV0Q2hhcnQuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBEb251dENoYXJ0ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKChwcm9wcy52b3RlcyAvIHByb3BzLmdvYWwpICogMTAwKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbnV0LWhvbGVcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9udXQtcmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJsaWdodGdyYXlcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjhcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb251dC1zZWdtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2VEYXNoYXJyYXk6IGAke3BlcmNlbnR9IDEwMGB9fVxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0PVwiMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmNlbnRcIj57cGVyY2VudCArIFwiJVwifTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9MaXN0aW5nUGFnZS5jc3NcIjtcblxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7RmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmltcG9ydCBDb2luQ2FyZExpc3RpbmcgZnJvbSBcIi4vQ29pbkNhcmRMaXN0aW5nXCI7XG5pbXBvcnQge2dldExpc3RpbmdDb2lucywgZ2V0TGlzdGVkQ29pbnN9IGZyb20gXCIuLi8uLi9icmFuZGluZ1wiO1xuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSW50bFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvSW50bFN0b3JlXCI7XG5cbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcblxuY2xhc3MgTGlzdGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgTGlzdGluZ05vdGljZTFJbmZvcm1lZDogZmFsc2UsXG4gICAgICAgICAgICBjb2luczogW10sXG4gICAgICAgICAgICB1cGRhdGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhbGU6IHRoaXMucHJvcHMuY3VycmVudExvY2FsZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kYXRhID0ge1xuICAgICAgICAgICAgXCJsaW5rc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhZ3JlZW1lbnRfcnVcIjogXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb20vc3VwcG9ydC9zb2x1dGlvbnMvYXJ0aWNsZXMvMzUwMDAxMzgyNDctY9C+0LPQu9Cw0YjQtdC90LjQtS3QvtCxLdC+0LrQsNC30LDQvdC40Lgt0YPRgdC70YPQsy3RiNC70Y7Qt9CwXCIsXG4gICAgICAgICAgICAgICAgXCJhZ3JlZW1lbnRfZW5cIjogXCJodHRwczovL3J1ZGV4LmZyZXNoZGVzay5jb20vc3VwcG9ydC9zb2x1dGlvbnMvYXJ0aWNsZXMvMzUwMDAxMzgyNDUtZ2F0ZXdheS1zZXJ2aWNlLWFncmVlbWVudFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkb25hdGVUb2tlbk5hbWVcIjogXCJET05BVEVcIixcbiAgICAgICAgICAgIFwiZG9uYXRlTWFya2V0XCI6IFwiRE9OQVRFX1JVREVYLlVTRFRcIixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRMb2NhbGUgIT09IHRoaXMuc3RhdGUuY3VycmVudExvY2FsZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMb2NhbGU6IG5leHRQcm9wcy5jdXJyZW50TG9jYWxlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN1Ym1pdFJlcXVlc3QoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBudWxsfSk7XG5cbiAgICAgICAgbGV0IGxpbmtfcnUgPVxuICAgICAgICAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kLzFsSm52dWZjOTVDRGgyejFOdHE3aUNTRXMzb0Q3dFBHNG5saktUWVllelF3XCI7XG4gICAgICAgIGxldCBsaW5rX2VuID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC8xWDJQZ3VBYVJ6eGxYWkdMQWFyR2NtTmQtTGJKQ3k4bGNvTUJjUWpGU1E1a1wiO1xuXG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuc3RhdGUuY3VycmVudExvY2FsZSA9PSBcInJ1XCIgPyBsaW5rX3J1IDogbGlua19lbiwgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgb25MaXN0aW5nTm90aWNlMUluZm9ybWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIExpc3RpbmdOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHRoaXMuX2dldEJhbGFuY2VzKCksIDEwMDApO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAobmV4dFN0YXRlLnVwZGF0aW5nID09IGZhbHNlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9nZXRCYWxhbmNlcygpIHtcbiAgICAgICAgbGV0IGNvaW5zID0gZ2V0TGlzdGluZ0NvaW5zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29pbnMubGVuZ3RoICE9PSAwKSBjb2lucyA9IHRoaXMuc3RhdGUuY29pbnM7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2luczogY29pbnMsXG4gICAgICAgICAgICB1cGRhdGluZzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb2lucy5mb3JFYWNoKGNvaW4gPT4ge1xuICAgICAgICAgICAgRmV0Y2hDaGFpbihcImdldEFzc2V0XCIsIHRoaXMuZGF0YS5kb25hdGVUb2tlbk5hbWUpLnRoZW4oYXNzZXRJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBBcGlzLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKFwiZ2V0X25hbWVkX2FjY291bnRfYmFsYW5jZXNcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgY29pbi5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgW2Fzc2V0SW5mby5nZXQoXCJpZFwiKV1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2lucyA9IHRoaXMuc3RhdGUuY29pbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGNvaW5zLmZpbmQoaSA9PiBpLmFjY291bnQgPT09IGNvaW4uYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB4LnZvdGVzID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNbMF1bXCJhbW91bnRcIl0gL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucG93KDEwLCBhc3NldEluZm8uZ2V0KFwicHJlY2lzaW9uXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW5zOiBjb2luc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0aW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVwZGF0aW5nID09PVxuICAgICAgICAgICAgICAgIHRydWUgP1xuICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0luZGljYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJmb290ZXIubG9hZGluZ1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiB0aGlzLmdldFRhYmxlVGFicygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Q29udGVudCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogMiwgZm9udFNpemU6IFwiMS4wcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFya2V0LyR7dGhpcy5kYXRhLmRvbmF0ZU1hcmtldH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLmdldF9kb25hdGVfdG9rZW5zXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbjogMiwgZm9udFNpemU6IFwiMS4wcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLmRhdGEuZG9uYXRlVG9rZW5OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZGF0YS5kb25hdGVUb2tlbk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRva2VuXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVSYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5yYW5rXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVMb2dvXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlQXNzZXROYW1lIGFsaWduLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmFzc2V0X25hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvRGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVZvdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuZ29hbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVHb2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuZG9uYXRlc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5zdGF0dXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5wcm9ncmVzc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRDb2luc0xpc3QoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBnZXRDb250ZW50X2xpc3RlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVJhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLnJhbmtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUxvZ29cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVBc3NldE5hbWUgYWxpZ24tbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuYXNzZXRfbmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlVm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5nb2FsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuc3RhdHVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLmdldENvaW5zTGlzdF9saXN0ZWQoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBnZXRDb2luc0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCB7Y29pbnN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHNvcnRlZENvaW5zID0gY29pbnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGIudm90ZXMgLSBhLnZvdGVzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNvcnRlZENvaW5zLm1hcCgoY29pbiwgaSkgPT4ge1xuICAgICAgICAgICAgY29pbi52b3Rlc19mb3JfcGVyY2VudCA9XG4gICAgICAgICAgICAgICAgY29pbi52b3RlcyA8IGNvaW4uZ29hbCA/IGNvaW4udm90ZXMgOiBjb2luLmdvYWw7XG4gICAgICAgICAgICBjb2luLnN0YXR1cyA9IGNvaW4udm90ZXMgPCBjb2luLmdvYWwgPyBcImNvbGxlY3RpbmdcIiA6IFwiZG9uZVwiO1xuICAgICAgICAgICAgY29pbi5zb29uID09IHRydWUgPyAoY29pbi5zdGF0dXMgPSBcIndhaXRpbmdcIikgOiBjb2luLnNvb247XG5cbiAgICAgICAgICAgIHJldHVybiA8Q29pbkNhcmRMaXN0aW5nIGtleT17aX0gcmFuaz17aSArIDF9IGNvaW49e2NvaW59Lz47XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBnZXRDb2luc0xpc3RfbGlzdGVkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29pbnMgPSBnZXRMaXN0ZWRDb2lucygpO1xuICAgICAgICBsZXQgc29ydGVkQ29pbnMgPSBjb2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYi52b3RlcyAtIGEudm90ZXM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkQ29pbnMubWFwKChjb2luLCBpKSA9PiB7XG4gICAgICAgICAgICBjb2luLnZvdGVzX2Zvcl9wZXJjZW50ID1cbiAgICAgICAgICAgICAgICBjb2luLnZvdGVzIDwgY29pbi5nb2FsID8gY29pbi52b3RlcyA6IGNvaW4uZ29hbDtcbiAgICAgICAgICAgIGNvaW4uc3RhdHVzID0gXCJkb25lXCI7XG4gICAgICAgICAgICBjb2luLmxpc3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiA8Q29pbkNhcmRMaXN0aW5nIGtleT17aX0gcmFuaz17aSArIDF9IGNvaW49e2NvaW59Lz47XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBnZXRUYWJsZVRhYnMgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IFJ1REVYID0gPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRcIn19PlJ1REVYPC9zcGFuPjtcblxuICAgICAgICBsZXQgRG9uYXRlTGluayA9IChzdHlsZSA9IHtcbiAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMHJlbVwiLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICB0bz17YC9hc3NldC8ke3RoaXMuZGF0YS5kb25hdGVUb2tlbk5hbWV9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuZGF0YS5kb25hdGVUb2tlbk5hbWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmRhdGEuZG9uYXRlVG9rZW5OYW1lfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHNtYWxsLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmc9XCJwZXJtaXNzaW9uc1RhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3VudC10YWJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzQ2xhc3M9XCJhY2NvdW50LW92ZXJ2aWV3IGJvcmRlcmVkLWhlYWRlciBjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Q2xhc3M9XCJwYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRE9OQVRFIFBST0dSRVNTKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImxpc3RpbmcuZG9uYXRlX3Byb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJob3Jpem9udGFsXCIgdGFiSW5kZXg9ezB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMnJlbSA4cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLXVwLTEgbWVkaXVtLXVwLTEgbGFyZ2UtdXAtMSBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRDb250ZW50KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMSVNURUQqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwibGlzdGluZy5saXN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhvcml6b250YWxcIiB0YWJJbmRleD17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIycmVtIDhweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtdXAtMSBtZWRpdW0tdXAtMSBsYXJnZS11cC0xIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldENvbnRlbnRfbGlzdGVkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgQ29pbiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJsaXN0aW5nLmFkZF9jb2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIGhlbHAtY29udGVudC1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMuaGVhZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQxXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0MlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0My50MVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0My50MlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMHJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvbWFya2V0LyR7dGhpcy5kYXRhLmRvbmF0ZU1hcmtldH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDMuZ2V0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDQudDFcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0RvbmF0ZUxpbmsoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQyXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtEb25hdGVMaW5rKCl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NC50M1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjFweCBzb2xpZCAjMDBhOWUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI0cHggM3B4IDNweCA0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmRhdGEuZG9uYXRlVG9rZW5OYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQ0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ1LnQxXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtEb25hdGVMaW5rKCl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NS50MlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NS50M1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMuaGVhZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8xXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRMb2NhbGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJydVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZGF0YS5saW5rcy5hZ3JlZW1lbnRfcnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5kYXRhLmxpbmtzLmFncmVlbWVudF9lblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8xMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8zXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0RvbmF0ZUxpbmsoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV80XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfNVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5MaXN0aW5nTm90aWNlMUluZm9ybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MaXN0aW5nTm90aWNlMUluZm9ybWVkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLm5vdGljZV9pbmZvcm1lZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImxpc3RpbmdfYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcInNlbmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuTGlzdGluZ05vdGljZTFJbmZvcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5MaXN0aW5nTm90aWNlMUluZm9ybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0UmVxdWVzdC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3Rpbmcuc3VibWl0X3JlcXVlc3RcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMuZW5kXCIvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UnVERVh9IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkxpc3RpbmdQYWdlID0gY29ubmVjdChcbiAgICBMaXN0aW5nUGFnZSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtJbnRsU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudExvY2FsZTogSW50bFN0b3JlLmdldFN0YXRlKCkuY3VycmVudExvY2FsZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nUGFnZTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7YmluZFRvQ3VycmVudEFjY291bnR9IGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0N1cnJlbnRBY2NvdW50XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgQXNzZXRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0Fzc2V0U3RvcmVcIjtcclxuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL01hcmtldHNTdG9yZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENvbGxhcHNlLFxyXG4gICAgUm93LFxyXG4gICAgQ29sLFxyXG4gICAgVGFibGUsXHJcbiAgICBCdXR0b24sXHJcbiAgICBTd2l0Y2gsXHJcbiAgICBUb29sdGlwXHJcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgU2VsbFJlY2VpdmUgZnJvbSBcImNvbXBvbmVudHMvUXVpY2tUcmFkZS9TZWxsUmVjZWl2ZVwiO1xyXG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldEFzc2V0c1RvU2VsbCxcclxuICAgIGdldFByaWNlcyxcclxuICAgIGdldE9yZGVycyxcclxuICAgIGdldEZlZXNcclxufSBmcm9tIFwiLi9RdWlja1RyYWRlSGVscGVyXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZSwgRmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IHtDaGFpblZhbGlkYXRpb259IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge2xvb2t1cEFzc2V0c30gZnJvbSBcIi4uL0V4Y2hhbmdlL01hcmtldFBpY2tlckhlbHBlcnNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcclxuaW1wb3J0IHtBc3NldCwgTGltaXRPcmRlckNyZWF0ZX0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRQcmljZSBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRQcmljZVwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBRdWlja1RyYWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRBc3NldHMgPSBnZXRBc3NldHNUb1NlbGwocHJvcHMuY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1vdW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWI6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldElucHV0OiBcIlwiLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldHM6IGFjY291bnRBc3NldHMsXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGxJbWdOYW1lOiBcInVua25vd25cIixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldDogbnVsbCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0czogYWNjb3VudEFzc2V0cyxcclxuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICAgICAgICBhY3RpdmVJbnB1dDogXCJcIixcclxuICAgICAgICAgICAgYWN0aXZlQW1vdW50SW5wdXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvb2t1cFF1b3RlOiBcIlwiLFxyXG4gICAgICAgICAgICBvcmRlcnM6IFtdLFxyXG4gICAgICAgICAgICBvcmRlclZpZXc6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgIGZlZXM6IG51bGwsXHJcbiAgICAgICAgICAgIHByaWNlczogbnVsbCxcclxuICAgICAgICAgICAgaXNTdWJzY3JpYmVkVG9NYXJrZXQ6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25TZWxsQXNzZXRJbnB1dENoYW5nZSA9IHRoaXMub25TZWxsQXNzZXRJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZSA9IHRoaXMub25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLm9uU2VsbEFtb3VudENoYW5nZSA9IHRoaXMub25TZWxsQW1vdW50Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlY2VpdmVBbW91bnRDaGFuZ2UgPSB0aGlzLm9uUmVjZWl2ZUFtb3VudENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25TZWxsSW1hZ2VFcnJvciA9IHRoaXMub25TZWxsSW1hZ2VFcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZWNlaXZlSW1hZ2VFcnJvciA9IHRoaXMub25SZWNlaXZlSW1hZ2VFcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZWNlaXZlQXNzZXRTZWFyY2ggPSB0aGlzLm9uUmVjZWl2ZUFzc2V0U2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblN3YXAgPSB0aGlzLm9uU3dhcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3Vic2NyaXB0aW9uVG9nZ2xlQ2hhbmdlID0gdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25Ub2dnbGVDaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5oZW5kbGVPcmRlclZpZXcgPSB0aGlzLmhlbmRsZU9yZGVyVmlldy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsbCA9IHRoaXMuaGFuZGxlU2VsbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3N1YlRvTWFya2V0ID0gdGhpcy5fc3ViVG9NYXJrZXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9jaGVja0FuZFVwZGF0ZU1hcmtldExpc3QgPSB0aGlzLl9jaGVja0FuZFVwZGF0ZU1hcmtldExpc3QuYmluZChcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nZXRBc3NldExpc3QgPSBkZWJvdW5jZShBc3NldEFjdGlvbnMuZ2V0QXNzZXRMaXN0LmRlZmVyLCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0ge307XHJcbiAgICAgICAgaWYgKHByb3BzLmFzc2V0VG9TZWxsKSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0SW5wdXQ6IHByb3BzLmFzc2V0VG9TZWxsLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0OiBwcm9wcy5hc3NldFRvU2VsbCxcclxuICAgICAgICAgICAgICAgIHNlbGxJbWdOYW1lOiBwcm9wcy5hc3NldFRvU2VsbC5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLmFzc2V0VG9SZWNlaXZlKSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ubmV3U3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQ6IHByb3BzLmFzc2V0VG9SZWNlaXZlLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldDogcHJvcHMuYXNzZXRUb1JlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWU6IHByb3BzLmFzc2V0VG9SZWNlaXZlLmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgX3JvdXRlVG8oYXNzZXRUb1NlbGwsIGFzc2V0VG9SZWNlaXZlKSB7XHJcbiAgICAgICAgbGV0IHNlbGxSb3V0ZSA9IGFzc2V0VG9TZWxsO1xyXG4gICAgICAgIGxldCByZWNlaXZlUm91dGUgPSBhc3NldFRvUmVjZWl2ZTtcclxuICAgICAgICBpZiAoIWFzc2V0VG9TZWxsKSB7XHJcbiAgICAgICAgICAgIHNlbGxSb3V0ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXNzZXRUb1JlY2VpdmUpIHtcclxuICAgICAgICAgICAgcmVjZWl2ZVJvdXRlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhdGhOYW1lID0gXCIvaW5zdGFudC10cmFkZS9cIiArIHNlbGxSb3V0ZSArIFwiX1wiICsgcmVjZWl2ZVJvdXRlO1xyXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgXCJfcm91dGVUbzogXCIsXHJcbiAgICAgICAgICAgICAgICBwYXRoTmFtZSxcclxuICAgICAgICAgICAgICAgIFwiIG9sZDogXCIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICE9PSBwYXRoTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChwYXRoTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9hcmVFcXVhbEFzc2V0cyhhc3NldDEsIGFzc2V0Mikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQoYXNzZXQxKSAmJlxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KGFzc2V0MikgJiZcclxuICAgICAgICAgICAgYXNzZXQxLmdldChcImlkXCIpID09PSBhc3NldDIuZ2V0KFwiaWRcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9pc0xvYWRlZEFzc2V0KGFzc2V0KSB7XHJcbiAgICAgICAgcmV0dXJuICEhYXNzZXQgJiYgISFhc3NldC50b0pTO1xyXG4gICAgfVxyXG5cclxuICAgIF9hcmVBc3NldHNHaXZlbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KHRoaXMucHJvcHMuYXNzZXRUb1NlbGwpICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQodGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYXZlQXNzZXRzQ2hhbmdlZChwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQodGhpcy5wcm9wcy5hc3NldFRvU2VsbCkgIT09XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQocHJldlByb3BzLmFzc2V0VG9TZWxsKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KHRoaXMucHJvcHMuYXNzZXRUb1JlY2VpdmUpICE9PVxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KHByZXZQcm9wcy5hc3NldFRvUmVjZWl2ZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMuX2FyZUVxdWFsQXNzZXRzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldFRvU2VsbCxcclxuICAgICAgICAgICAgICAgIHByZXZQcm9wcy5hc3NldFRvU2VsbFxyXG4gICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICF0aGlzLl9hcmVFcXVhbEFzc2V0cyhcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRUb1JlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBwcmV2UHJvcHMuYXNzZXRUb1JlY2VpdmVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYXNNYXJrZXRDaGFuZ2VkKHByZXZQcm9wcykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5tYXJrZXREYXRhKSAhPT1cclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5tYXJrZXREYXRhKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmICh0aGlzLl9oYXZlQXNzZXRzQ2hhbmdlZChwcmV2UHJvcHMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0c0hhdmVDaGFuZ2VkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hhc01hcmtldENoYW5nZWQocHJldlByb3BzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0T3JkZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoQXNzZXRzICE9PSBwcmV2UHJvcHMuc2VhcmNoQXNzZXRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVNlYXJjaDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRBc3NldHMgPSB0aGlzLnByb3BzLnNlYXJjaEFzc2V0c1xyXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IGEuc3ltYm9sLmluZGV4T2YodGhpcy5zdGF0ZS5sb29rdXBRdW90ZSkgIT09IC0xKTtcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tBbmRVcGRhdGVNYXJrZXRMaXN0KGZpbHRlcmVkQXNzZXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQgIT09IHByZXZQcm9wcy5jdXJyZW50QWNjb3VudCkge1xyXG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSBnZXRBc3NldHNUb1NlbGwodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0czogYXNzZXRzLFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0czogYXNzZXRzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbW91bnRlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9hcmVBc3NldHNHaXZlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0c0hhdmVDaGFuZ2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtzdWJ9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWQsIHJlY2VpdmVBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQoc2VsbEFzc2V0SWQsIHJlY2VpdmVBc3NldElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgX3N1YlRvTWFya2V0KCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0OiBiYXNlQXNzZXQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldDogcXVvdGVBc3NldCxcclxuICAgICAgICAgICAgc3ViXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKGJhc2VBc3NldCAmJiBxdW90ZUFzc2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldElkOiBiYXNlQXNzZXRJZCxcclxuICAgICAgICAgICAgICAgIHNlbGxBc3NldElkOiBxdW90ZUFzc2V0SWRcclxuICAgICAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgICAgICBjb25zdCB7YnVja2V0U2l6ZSwgY3VycmVudEdyb3VwT3JkZXJMaW1pdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW3FhLCBiYV0gPSBzdWIuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHFhID09PSBxdW90ZUFzc2V0SWQgJiYgYmEgPT09IGJhc2VBc3NldElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQocWEsIGJhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCBNYXJrZXRzQWN0aW9ucy5zdWJzY3JpYmVNYXJrZXQoXHJcbiAgICAgICAgICAgICAgICBiYXNlQXNzZXQsXHJcbiAgICAgICAgICAgICAgICBxdW90ZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgMzYwMCxcclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWI6IGAke3F1b3RlQXNzZXRJZH1fJHtiYXNlQXNzZXRJZH1gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsUHJpY2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxGZWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFsbEZlZXMoKSB7XHJcbiAgICAgICAgY29uc3Qge2N1cnJlbnRBY2NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldCwgcmVjZWl2ZUFzc2V0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKHNlbGxBc3NldCAmJiByZWNlaXZlQXNzZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmVlcyA9IGF3YWl0IGdldEZlZXMocmVjZWl2ZUFzc2V0LCBzZWxsQXNzZXQsIGN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmZWVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3NldHNEZXRhaWxzKCkge1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXQsIHJlY2VpdmVBc3NldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElkOiBzZWxsQXNzZXQgPyBzZWxsQXNzZXQuZ2V0KFwiaWRcIikgOiBudWxsLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJZDogcmVjZWl2ZUFzc2V0ID8gcmVjZWl2ZUFzc2V0LmdldChcImlkXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uOiBzZWxsQXNzZXQgPyBzZWxsQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uOiByZWNlaXZlQXNzZXRcclxuICAgICAgICAgICAgICAgID8gcmVjZWl2ZUFzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRTeW1ib2w6IHNlbGxBc3NldCA/IHNlbGxBc3NldC5nZXQoXCJzeW1ib2xcIikgOiBudWxsLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRTeW1ib2w6IHJlY2VpdmVBc3NldCA/IHJlY2VpdmVBc3NldC5nZXQoXCJzeW1ib2xcIikgOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxQcmljZXMoKSB7XHJcbiAgICAgICAgY29uc3Qge2FjdGl2ZU1hcmtldEhpc3RvcnksIGZlZWRQcmljZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHByaWNlcyA9IGdldFByaWNlcyhhY3RpdmVNYXJrZXRIaXN0b3J5LCBmZWVkUHJpY2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwcmljZXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0T3JkZXJzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1N1YnNjcmliZWRUb01hcmtldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLm1hcmtldERhdGEpO1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgdXNlciB3YW50cyB0byBpbnNwZWN0IGN1cnJlbnQgb3JkZXJzLCBwYXVzZSB1cGRhdGluZ1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHtjb21iaW5lZEJpZHN9ID0gdGhpcy5wcm9wcy5tYXJrZXREYXRhO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0LFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXQsXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBbW91bnQsXHJcbiAgICAgICAgICAgIGFjdGl2ZUlucHV0XHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIl9nZXRPcmRlcnNcIiwgdGhpcy5wcm9wcy5tYXJrZXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbWJpbmVkQmlkcyAmJiBjb21iaW5lZEJpZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxsQXNzZXQgJiYgcmVjZWl2ZUFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGl2ZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlY2VpdmVBc3NldFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsbEFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gZ2V0T3JkZXJzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRCaWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzVXBkYXRlZDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVSZWNlaXZlQW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbGxBc3NldFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjZWl2ZUFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gZ2V0T3JkZXJzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRCaWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzVXBkYXRlZDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVTZWxsQW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbGxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGxBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVycyA9IGdldE9yZGVycyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQmlkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyc1VwZGF0ZWQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlUmVjZWl2ZUFtb3VudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50OiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVjZWl2ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjZWl2ZUFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gZ2V0T3JkZXJzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRCaWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzVXBkYXRlZDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVTZWxsQW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxBbW91bnQ6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9hc3NldHNIYXZlQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLl9zdWJUb01hcmtldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIF9zZXRTZWxsQXNzZXQoXHJcbiAgICAgICAgYXNzZXRPYmplY3RJZE9yU3ltYm9sLFxyXG4gICAgICAgIGFjdGl2ZUlucHV0ID0gXCJzZWxsQXNzZXRcIixcclxuICAgICAgICBmaXJlQ2hhbmdlZCA9IHRydWVcclxuICAgICkge1xyXG4gICAgICAgIGxldCBhc3NldCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhc3NldE9iamVjdElkT3JTeW1ib2wgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgYXNzZXQgPSBhd2FpdCBGZXRjaENoYWluKFwiZ2V0QXNzZXRcIiwgYXNzZXRPYmplY3RJZE9yU3ltYm9sKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhc3NldCA9IGFzc2V0T2JqZWN0SWRPclN5bWJvbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJfc2V0U2VsbEFzc2V0XCIsIGFzc2V0T2JqZWN0SWRPclN5bWJvbCwgYXNzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQ6IGFjdGl2ZUlucHV0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQuZ2V0KFwic3ltYm9sXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuYXNzZXRUb1JlY2VpdmUuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgX3NldFJlY2VpdmVBc3NldChcclxuICAgICAgICBhc3NldE9iamVjdElkT3JTeW1ib2wsXHJcbiAgICAgICAgYWN0aXZlSW5wdXQgPSBcInJlY2VpdmVBc3NldFwiLFxyXG4gICAgICAgIGZpcmVDaGFuZ2VkID0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGFzc2V0ID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mIGFzc2V0T2JqZWN0SWRPclN5bWJvbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBhc3NldCA9IGF3YWl0IEZldGNoQ2hhaW4oXCJnZXRBc3NldFwiLCBhc3NldE9iamVjdElkT3JTeW1ib2wpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gYXNzZXRPYmplY3RJZE9yU3ltYm9sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIl9zZXRSZWNlaXZlQXNzZXRcIiwgYXNzZXRPYmplY3RJZE9yU3ltYm9sLCBhc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0OiBhY3RpdmVJbnB1dFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5hc3NldFRvU2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuYXNzZXRUb1NlbGwuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIF9zd2FwQXNzZXRzKGFjdGl2ZUlucHV0LCBmaXJlQ2hhbmdlZCA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxsQW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0ID09PSBcInNlbGxBc3NldFwiID8gXCJcIiA6IHRoaXMuc3RhdGUucmVjZWl2ZUFtb3VudCxcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQgPT09IFwicmVjZWl2ZUFzc2V0XCIgPyBcIlwiIDogdGhpcy5zdGF0ZS5zZWxsQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQ6IGFjdGl2ZUlucHV0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWNlaXZlQXNzZXQuZ2V0KFwic3ltYm9sXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsbEFzc2V0LmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25TZWxsQXNzZXRJbnB1dENoYW5nZShhc3NldElkT3JTeW1ib2wpIHtcclxuICAgICAgICBjb25zdCB7cmVjZWl2ZUFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcblxyXG4gICAgICAgIGlmIChhc3NldElkT3JTeW1ib2wgPT09IHJlY2VpdmVBc3NldElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N3YXBBc3NldHMoXCJzZWxsQXNzZXRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0U2VsbEFzc2V0KGFzc2V0SWRPclN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2UoYXNzZXRJZE9yU3ltYm9sKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG5cclxuICAgICAgICBpZiAoYXNzZXRJZE9yU3ltYm9sID09PSBzZWxsQXNzZXRJZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zd2FwQXNzZXRzKFwicmVjZWl2ZUFzc2V0XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldFJlY2VpdmVBc3NldChhc3NldElkT3JTeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlY2VpdmVBc3NldFNlYXJjaChlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm1vdW50ZWQpIHJldHVybjtcclxuICAgICAgICBsZXQgaXNWYWxpZE5hbWUgPSAhQ2hhaW5WYWxpZGF0aW9uLmlzX3ZhbGlkX3N5bWJvbF9lcnJvcihlLCB0cnVlKTtcclxuICAgICAgICBpZiAoIWlzVmFsaWROYW1lKSB7XHJcbiAgICAgICAgICAgIC8qIERvbid0IGxvb2t1cCBpbnZhbGlkIGFzc2V0IG5hbWVzICovXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQ6IGUsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTZWFyY2g6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWNlaXZlQXNzZXRJbnB1dCAhPT0gZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbG9va3VwQXNzZXRzKGUsIHRydWUsIHRoaXMuZ2V0QXNzZXRMaXN0LCB0aGlzLnNldFN0YXRlKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0FuZFVwZGF0ZU1hcmtldExpc3QobWFya2V0c0xpc3QpIHtcclxuICAgICAgICBsZXQgcmVjZWl2ZUFzc2V0cyA9IG1hcmtldHNMaXN0Lm1hcChhc3NldCA9PiBhc3NldC5pZCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgICAgIGNvbnN0IHtyZWNlaXZlQXNzZXRJbnB1dH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBhc3NldCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKENoYWluU3RvcmUuZ2V0QXNzZXQocmVjZWl2ZUFzc2V0SW5wdXQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0SWQgPSBDaGFpblN0b3JlLmdldEFzc2V0KHJlY2VpdmVBc3NldElucHV0KS5nZXQoXCJpZFwiKTtcclxuICAgICAgICAgICAgaWYgKHJlY2VpdmVBc3NldHMuaW5jbHVkZXMoYXNzZXRJZCkpIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChyZWNlaXZlQXNzZXRJbnB1dCkuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlY2VpdmVBc3NldHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gcmVjZWl2ZUFzc2V0c1swXTtcclxuICAgICAgICAgICAgY29uc3Qge2N1cnJlbnRBY2NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHMgPSBnZXRBc3NldHNUb1NlbGwoY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRzLnB1c2goYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVjZWl2ZUFzc2V0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3Qge2N1cnJlbnRBY2NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHMgPSBnZXRBc3NldHNUb1NlbGwoY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cyxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTZWFyY2g6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1YlRvTWFya2V0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGxBbW91bnRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5tb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGUuYXNzZXQgIT09IHRoaXMuc3RhdGUuc2VsbEFzc2V0SW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNlbGxBc3NldElucHV0Q2hhbmdlKGUuYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxsQW1vdW50OiBlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0OiBcInNlbGxcIixcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUFtb3VudElucHV0OiBcInNlbGxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRPcmRlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWNlaXZlQW1vdW50Q2hhbmdlKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChlLmFzc2V0ICE9PSB0aGlzLnN0YXRlLnJlY2VpdmVBc3NldElucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZShlLmFzc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDogZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dDogXCJyZWNlaXZlXCIsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVBbW91bnRJbnB1dDogXCJyZWNlaXZlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0T3JkZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsbEltYWdlRXJyb3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGxJbWdOYW1lOiBcInVua25vd25cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVjZWl2ZUltYWdlRXJyb3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlY2VpdmVJbWdOYW1lOiBcInVua25vd25cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3dhcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N3YXBwYWJsZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N3YXBBc3NldHMoXCJuZWl0aGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJzY3JpcHRpb25Ub2dnbGVDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWRUb01hcmtldDogIXN0YXRlLmlzU3Vic2NyaWJlZFRvTWFya2V0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVuZGxlT3JkZXJWaWV3KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlclZpZXcgPSBzdGF0ZS5vcmRlclZpZXcgPT09IFwiYW1vdW50XCIgPyBcInRvdGFsXCIgOiBcImFtb3VudFwiO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb3JkZXJWaWV3XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsbCgpIHtcclxuICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SWQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElkLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBjb25zdCBmb3JTYWxlID0gbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHNlbGxBc3NldElkLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgYW1vdW50OiBzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdG9SZWNlaXZlID0gbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHJlY2VpdmVBc3NldElkLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgYW1vdW50OiByZWNlaXZlQW1vdW50ICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gbmV3IExpbWl0T3JkZXJDcmVhdGUoe1xyXG4gICAgICAgICAgICBmb3Jfc2FsZTogZm9yU2FsZSxcclxuICAgICAgICAgICAgZXhwaXJhdGlvbjogZXhwaXJhdGlvblRpbWUsXHJcbiAgICAgICAgICAgIHRvX3JlY2VpdmU6IHRvUmVjZWl2ZSxcclxuICAgICAgICAgICAgc2VsbGVyOiBjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgZmVlOiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGxfb3Jfa2lsbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gTWFya2V0c0FjdGlvbnMuY3JlYXRlTGltaXRPcmRlcjIob3JkZXIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvci5tZXNzYWdlICE9PSBcIndhbGxldCBsb2NrZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMuZXhjaGFuZ2VfdW5rbm93bl9lcnJvcl9wbGFjZV9vcmRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiByZWNlaXZlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHJlY2VpdmVBc3NldElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm9yZGVyIGZhaWxlZDpcIiwgZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNlbGxBbW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge29yZGVycywgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKG9yZGVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsbEFtb3VudCA9IChcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQgLyBvcmRlcnNbMF0ub3JkZXIuZ2V0UHJpY2UoKVxyXG4gICAgICAgICAgICApLnRvRml4ZWQoc2VsbEFzc2V0UHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxsQW1vdW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcmRlcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXIgPSBvcmRlcnMuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBwZW51bHRpbWF0ZU9yZGVyID0gb3JkZXJzLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzLmxlbmd0aCAtIDIsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICApWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXJUb1JlY2VpdmUgPVxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbiAtXHJcbiAgICAgICAgICAgICAgICBwZW51bHRpbWF0ZU9yZGVyLm9yZGVyLnRvdGFsX2Zvcl9zYWxlLmdldEFtb3VudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXJGb3JTYWxlID1cclxuICAgICAgICAgICAgICAgICgobGFzdE9yZGVyVG9SZWNlaXZlIC8gbGFzdE9yZGVyLm9yZGVyLmdldFByaWNlKCkpICpcclxuICAgICAgICAgICAgICAgICAgICAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24pIC9cclxuICAgICAgICAgICAgICAgIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbjtcclxuICAgICAgICAgICAgY29uc3Qgc2VsbEFtb3VudCA9IChcclxuICAgICAgICAgICAgICAgIChwZW51bHRpbWF0ZU9yZGVyLm9yZGVyLnRvdGFsX3RvX3JlY2VpdmUuZ2V0QW1vdW50KCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RPcmRlckZvclNhbGUpIC9cclxuICAgICAgICAgICAgICAgIDEwICoqIHNlbGxBc3NldFByZWNpc2lvblxyXG4gICAgICAgICAgICApLnRvRml4ZWQoc2VsbEFzc2V0UHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxsQW1vdW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJlY2VpdmVBbW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge29yZGVycywgc2VsbEFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKG9yZGVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZUFtb3VudCA9IChcclxuICAgICAgICAgICAgICAgIG9yZGVyc1swXS5vcmRlci5nZXRQcmljZSgpICogc2VsbEFtb3VudFxyXG4gICAgICAgICAgICApLnRvRml4ZWQocmVjZWl2ZUFzc2V0UHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3JkZXJzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVyID0gb3JkZXJzLnNsaWNlKC0xKVswXTtcclxuICAgICAgICAgICAgY29uc3QgcGVudWx0aW1hdGVPcmRlciA9IG9yZGVycy5zbGljZShcclxuICAgICAgICAgICAgICAgIG9yZGVycy5sZW5ndGggLSAyLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgKVswXTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVyRm9yU2FsZSA9XHJcbiAgICAgICAgICAgICAgICBzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uIC1cclxuICAgICAgICAgICAgICAgIHBlbnVsdGltYXRlT3JkZXIub3JkZXIudG90YWxfdG9fcmVjZWl2ZS5nZXRBbW91bnQoKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVyVG9SZWNlaXZlID1cclxuICAgICAgICAgICAgICAgIChsYXN0T3JkZXJGb3JTYWxlICpcclxuICAgICAgICAgICAgICAgICAgICBsYXN0T3JkZXIub3JkZXIuZ2V0UHJpY2UoKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uKSAvXHJcbiAgICAgICAgICAgICAgICAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb247XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVBbW91bnQgPSAoXHJcbiAgICAgICAgICAgICAgICAocGVudWx0aW1hdGVPcmRlci5vcmRlci50b3RhbF9mb3Jfc2FsZS5nZXRBbW91bnQoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE9yZGVyVG9SZWNlaXZlKSAvXHJcbiAgICAgICAgICAgICAgICAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICAgICAgKS50b0ZpeGVkKHJlY2VpdmVBc3NldFByZWNpc2lvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1N3YXBwYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJlQXNzZXRzR2l2ZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VHJhbnNhY3Rpb25GZWUoZGVub21pbmF0aW9uQXNzZXRJZCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVzLCBwcmljZXN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKGZlZXMpIHtcclxuICAgICAgICAgICAgaWYgKGZlZXMudHJhbnNhY3Rpb25GZWVbc2VsbEFzc2V0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIWRlbm9taW5hdGlvbkFzc2V0SWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBkZW5vbWluYXRpb25Bc3NldElkID09PSBzZWxsQXNzZXRJZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlcy50cmFuc2FjdGlvbkZlZVtzZWxsQXNzZXRJZF0uZmVlLmFtb3VudCAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwICoqIGZlZXMudHJhbnNhY3Rpb25GZWVbc2VsbEFzc2V0SWRdLmZlZS5wcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmVlcy50cmFuc2FjdGlvbkZlZVtzZWxsQXNzZXRJZF0uZmVlLmFtb3VudCAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCAqKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZXMudHJhbnNhY3Rpb25GZWVbc2VsbEFzc2V0SWRdLmZlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlY2lzaW9uKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcy5sYXRlc3RQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ2V0TWFya2V0RmVlKGRlbm9taW5kYXRlZEFzc2V0SWQpIHtcclxuICAgICAgICBjb25zdCB7ZmVlcywgcHJpY2VzLCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge3JlY2VpdmVBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGlmIChmZWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICFkZW5vbWluZGF0ZWRBc3NldElkIHx8XHJcbiAgICAgICAgICAgICAgICBkZW5vbWluZGF0ZWRBc3NldElkID09PSByZWNlaXZlQXNzZXRJZFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoZmVlcy5tYXJrZXRGZWUuYmFzZU1hcmtldEZlZSAqIHJlY2VpdmVBbW91bnQpIC8gMTAwMDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIChmZWVzLm1hcmtldEZlZS5iYXNlTWFya2V0RmVlICogcmVjZWl2ZUFtb3VudCkgL1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlcy5sYXRlc3RQcmljZSAvXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwMDBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEZlZVBlcmNlbnQoZmVlQW1vdW50LCB0b3RhbEFtb3VudCkge1xyXG4gICAgICAgIHJldHVybiArdG90YWxBbW91bnQgPyAoK3RvdGFsQW1vdW50ICsgK2ZlZUFtb3VudCkgLyB0b3RhbEFtb3VudCAtIDEgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc3Qge3N1Yn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmICghc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qge3NlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElkLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJZCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFN5bWJvbFxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBjb25zdCBwcmljZVNlY3Rpb24gPSB0aGlzLmdldFByaWNlU2VjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlRXh0cmEgPSAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmVmZmVjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3NlbGxBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17c2VsbEFtb3VudCAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e3JlY2VpdmVBbW91bnQgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtyZWNlaXZlQXNzZXRTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9JbnZlcnRUaXBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBmZWVTZWN0aW9uID0gdGhpcy5nZXRGZWVTZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJzU2VjdGlvbiA9IHRoaXMuZ2V0T3JkZXJzU2VjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUGVyY2VudEZlZSA9XHJcbiAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuZWZmZWN0aXZlXCIpICtcclxuICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAodGhpcy5nZXRUb3RhbFBlcmNlbnRGZWUoKSAqIDEwMCkudG9GaXhlZCgyKTtcclxuICAgICAgICBjb25zdCBhbW91bnRPZk9yZGVycyA9IHRoaXMuc3RhdGUub3JkZXJzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBvcmRlcnNDYXB0aW9uID1cclxuICAgICAgICAgICAgYW1vdW50T2ZPcmRlcnMgPCAyXHJcbiAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMub3JkZXJcIilcclxuICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5vcmRlcnNcIik7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbGxhcHNlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhc3NldC1jb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZS5QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucHJpY2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e3ByaWNlRXh0cmF9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ByaWNlU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UuUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLmZlZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17YCR7dG90YWxQZXJjZW50RmVlfSVgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmZWVTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZS5QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uub3JkZXJzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50T2ZPcmRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7YW1vdW50T2ZPcmRlcnN9ICR7b3JkZXJzQ2FwdGlvbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm8gb3JkZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29yZGVyc1NlY3Rpb259XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldCwgcmVjZWl2ZUFzc2V0LCBzZWxsQW1vdW50LCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIHNlbGxBc3NldCAmJiByZWNlaXZlQXNzZXQgJiYgK3NlbGxBbW91bnQgJiYgK3JlY2VpdmVBbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0ZlZWRQcmljZSgpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0LCByZWNlaXZlQXNzZXR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWQsIHJlY2VpdmVBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGNvbnN0IHJlY2VpdmVDb2xsYXRlcmFsQXNzZXQgPSByZWNlaXZlQXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgIFwib3B0aW9uc1wiLFxyXG4gICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGNvbnN0IHNlbGxDb2xsYXRlcmFsQXNzZXQgPSBzZWxsQXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgIFwib3B0aW9uc1wiLFxyXG4gICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHJlY2VpdmVDb2xsYXRlcmFsQXNzZXQgPT09IHNlbGxBc3NldElkIHx8XHJcbiAgICAgICAgICAgIHNlbGxDb2xsYXRlcmFsQXNzZXQgPT09IHJlY2VpdmVBc3NldElkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmljZVNlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qge3ByaWNlcywgc2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SWQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElkLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0U3ltYm9sXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnlvdXJfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnNob3dGZWVkUHJpY2UoKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5mZWVkX3ByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5sYXN0X3ByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cmVjZWl2ZUFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17c2VsbEFtb3VudCAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e3JlY2VpdmVBc3NldFN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vSW52ZXJ0VGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc2hvd0ZlZWRQcmljZSgpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3NlbGxBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17MSAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXMuZmVlZFByaWNlICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlX2RpcmVjdGlvbj17cmVjZWl2ZUFzc2V0U3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vSW52ZXJ0VGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cmVjZWl2ZUFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17MSAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzLmxhdGVzdFByaWNlICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlX2RpcmVjdGlvbj17cmVjZWl2ZUFzc2V0U3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9JbnZlcnRUaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZlZVNlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRTeW1ib2wsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFN5bWJvbFxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25GZWUgPSB0aGlzLl9nZXRUcmFuc2FjdGlvbkZlZSgpLnRvRml4ZWQoXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvblxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25GZWVQZXJjZW50ID0gKFxyXG4gICAgICAgICAgICB0aGlzLl9nZXRGZWVQZXJjZW50KHRoaXMuX2dldFRyYW5zYWN0aW9uRmVlKCksIHNlbGxBbW91bnQpICogMTAwXHJcbiAgICAgICAgKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGNvbnN0IG1hcmtldEZlZSA9IHRoaXMuX2dldE1hcmtldEZlZSgpLnRvRml4ZWQocmVjZWl2ZUFzc2V0UHJlY2lzaW9uKTtcclxuICAgICAgICBjb25zdCBtYXJrZXRGZWVQZXJjZW50ID0gKFxyXG4gICAgICAgICAgICB0aGlzLl9nZXRGZWVQZXJjZW50KHRoaXMuX2dldE1hcmtldEZlZSgpLCByZWNlaXZlQW1vdW50KSAqIDEwMFxyXG4gICAgICAgICkudG9GaXhlZCgyKTtcclxuXHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5TWFya2V0LFxyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlGZWVkXHJcbiAgICAgICAgXSA9IHRoaXMuZ2V0TGlxdWlkaXR5UGVuYWx0eSgpO1xyXG4gICAgICAgIGlmIChsaXFpZGl0eVBlbmFsdHlNYXJrZXQgfHwgbGlxaWRpdHlQZW5hbHR5TWFya2V0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxpcWlkaXR5UGVuYWx0eU1hcmtldCA9XHJcbiAgICAgICAgICAgICAgICAobGlxaWRpdHlQZW5hbHR5TWFya2V0ICogMTAwKS50b0ZpeGVkKDIpICsgXCIlXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5TWFya2V0ID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsaXFpZGl0eVBlbmFsdHlGZWVkIHx8IGxpcWlkaXR5UGVuYWx0eUZlZWQgPT09IDApIHtcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5RmVlZCA9IChsaXFpZGl0eVBlbmFsdHlGZWVkICogMTAwKS50b0ZpeGVkKDIpICsgXCIlXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5RmVlZCA9IFwiLVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsaXFpZGl0eVBlbmFsdHkgPSB0aGlzLnNob3dGZWVkUHJpY2UoKVxyXG4gICAgICAgICAgICA/IGAke2xpcWlkaXR5UGVuYWx0eU1hcmtldH0gLyAke2xpcWlkaXR5UGVuYWx0eUZlZWR9YFxyXG4gICAgICAgICAgICA6IGxpcWlkaXR5UGVuYWx0eU1hcmtldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMubGlxdWlkaXR5X3BlbmFsdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMubWFya2V0X2ZlZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7bWFya2V0RmVlUGVyY2VudH0lYH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnRyYW5zYWN0aW9uX2ZlZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7dHJhbnNhY3Rpb25GZWVQZXJjZW50fSVgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57bGlxaWRpdHlQZW5hbHR5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRGZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3JlY2VpdmVBc3NldFN5bWJvbH0gbm9UaXAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25GZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3NlbGxBc3NldFN5bWJvbH0gbm9UaXAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9yZGVyc1NlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qge29yZGVycywgb3JkZXJWaWV3fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJZCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SWQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgc2VsbEFzc2V0U3ltYm9sLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRTeW1ib2xcclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IG9yZGVycy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGl0ZW0ub3JkZXIuaWQsXHJcbiAgICAgICAgICAgICAgICBpZDogaXRlbS5vcmRlci5pZCxcclxuICAgICAgICAgICAgICAgIHNlbGxlcjogPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2l0ZW0ub3JkZXIuc2VsbGVyfSAvPixcclxuICAgICAgICAgICAgICAgIGFtb3VudDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oZW5kbGVPcmRlclZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXJWaWV3ID09PSBcImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uYW1vdW50IC8gMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0udG90YWxfYW1vdW50IC8gMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFtb3VudCA9IChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7b3JkZXJWaWV3ID09PSBcImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnRvdGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAmbmJzcDsoXHJcbiAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3NlbGxBc3NldFN5bWJvbH0gbm9UaXAgLz4pXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBwcmljZSA9IChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5wcmljZVwiKX1cclxuICAgICAgICAgICAgICAgICZuYnNwOyhcclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3NlbGxBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e3JlY2VpdmVBc3NldFN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICBub0ludmVydFRpcFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVfdmFsdWVcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5pZFwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMCVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5zZWxsZXJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJzZWxsZXJcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJzZWxsZXJcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwJVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMCVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicHJpY2VcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJwcmljZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdWJzY3JpcHRpb25Ub2dnbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5pc1N1YnNjcmliZWRUb01hcmtldH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcmRlcnNVcGRhdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQubG9jYWxpemUodGhpcy5zdGF0ZS5vcmRlcnNVcGRhdGVkKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJzY3JpcHRpb25Ub2dnbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuc3Vic2NyaWJlX3RvX21hcmtldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UubGVuZ3RoID4gNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXF1aWRpdHlQZW5hbHR5KCkge1xyXG4gICAgICAgIGNvbnN0IHtwcmljZXMsIHNlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBwcmljZSA9IHJlY2VpdmVBbW91bnQgLyBzZWxsQW1vdW50O1xyXG4gICAgICAgIGNvbnN0IG1hcmtldFByaWNlID0gcHJpY2VzLmxhdGVzdFByaWNlO1xyXG4gICAgICAgIGNvbnN0IGZlZWRQcmljZSA9IHByaWNlcy5mZWVkUHJpY2U7XHJcbiAgICAgICAgbGV0IGxpcXVpZGl0eUZlZTEsIGxpcXVpZGl0eUZlZTI7XHJcbiAgICAgICAgaWYgKHByaWNlICYmIG1hcmtldFByaWNlKSB7XHJcbiAgICAgICAgICAgIGxpcXVpZGl0eUZlZTEgPSBNYXRoLm1heChcclxuICAgICAgICAgICAgICAgIDEgLSBwcmljZSAvIG1hcmtldFByaWNlLFxyXG4gICAgICAgICAgICAgICAgMSAtIG1hcmtldFByaWNlIC8gcHJpY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByaWNlICYmIGZlZWRQcmljZSkge1xyXG4gICAgICAgICAgICBsaXF1aWRpdHlGZWUyID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICAxIC0gcHJpY2UgLyBmZWVkUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAxIC0gZmVlZFByaWNlIC8gcHJpY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtsaXF1aWRpdHlGZWUxLCBsaXF1aWRpdHlGZWUyXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb3RhbFBlcmNlbnRGZWUoKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkZlZVBlcmNlbnQgPSB0aGlzLl9nZXRGZWVQZXJjZW50KFxyXG4gICAgICAgICAgICB0aGlzLl9nZXRUcmFuc2FjdGlvbkZlZSgpLFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBtYXJrZXRGZWVQZXJjZW50ID0gdGhpcy5fZ2V0RmVlUGVyY2VudChcclxuICAgICAgICAgICAgdGhpcy5fZ2V0TWFya2V0RmVlKCksXHJcbiAgICAgICAgICAgIHJlY2VpdmVBbW91bnRcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGxpcXVpZGl0eUZlZSA9IHRoaXMuZ2V0TGlxdWlkaXR5UGVuYWx0eSgpWzBdO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkZlZVBlcmNlbnQgKyBtYXJrZXRGZWVQZXJjZW50ICsgbGlxdWlkaXR5RmVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0JhbGFuY2UoKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBhY2NvdW50QmFsYW5jZXMgPSBjdXJyZW50QWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldElkLCBzZWxsQXNzZXRQcmVjaXNpb259ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKCFhY2NvdW50QmFsYW5jZXNbc2VsbEFzc2V0SWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFsYW5jZSA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRCYWxhbmNlc1tzZWxsQXNzZXRJZF0pLmdldChcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uRmVlID0gdGhpcy5fZ2V0VHJhbnNhY3Rpb25GZWUoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uICtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uRmVlICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uIDxcclxuICAgICAgICAgICAgK2JhbGFuY2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElucHV0LFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRzLFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50LFxyXG4gICAgICAgICAgICBzZWxsSW1nTmFtZSxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHMsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBbW91bnQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVJbWdOYW1lLFxyXG4gICAgICAgICAgICBzdWJcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWQsIHJlY2VpdmVBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG5cclxuICAgICAgICBjb25zdCBEZXRhaWxzID0gdGhpcy5zaG93RGV0YWlscygpID8gdGhpcy5nZXREZXRhaWxzKCkgOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVpY2stdHJhZGVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxsUmVjZWl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxBc3NldElucHV0PXtzZWxsQXNzZXRJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxsQXNzZXQ9e3NlbGxBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxBc3NldHM9e3NlbGxBc3NldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbEFtb3VudD17c2VsbEFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxsSW1nTmFtZT17c2VsbEltZ05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxsQXNzZXRJbnB1dENoYW5nZT17dGhpcy5vblNlbGxBc3NldElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsbEFtb3VudENoYW5nZT17dGhpcy5vblNlbGxBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQ9e3JlY2VpdmVBc3NldElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldD17cmVjZWl2ZUFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cz17cmVjZWl2ZUFzc2V0c31cclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50PXtyZWNlaXZlQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVJbWdOYW1lPXtyZWNlaXZlSW1nTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvblJlY2VpdmVBc3NldElucHV0Q2hhbmdlPXt0aGlzLm9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWNlaXZlQW1vdW50Q2hhbmdlPXt0aGlzLm9uUmVjZWl2ZUFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvblJlY2VpdmVBc3NldFNlYXJjaD17dGhpcy5vblJlY2VpdmVBc3NldFNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICBvblN3YXA9e3RoaXMub25Td2FwfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzU3dhcHBhYmxlPXt0aGlzLmlzU3dhcHBhYmxlKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge0RldGFpbHN9XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5oYXNCYWxhbmNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLm5vX2JhbGFuY2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwic2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc2hvd0RldGFpbHMoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzdWIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5oYXNCYWxhbmNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnNlbGxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUXVpY2tUcmFkZSA9IGNvbm5lY3QoXHJcbiAgICBRdWlja1RyYWRlLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0Fzc2V0U3RvcmUsIE1hcmtldHNTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEFzc2V0czogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0cyxcclxuICAgICAgICAgICAgICAgIGFzc2V0c0xvYWRpbmc6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHNMb2FkaW5nLFxyXG4gICAgICAgICAgICAgICAgbWFya2V0RGF0YTogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0RGF0YSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZU1hcmtldEhpc3Rvcnk6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZU1hcmtldEhpc3RvcnksXHJcbiAgICAgICAgICAgICAgICBidWNrZXRTaXplOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5idWNrZXRTaXplLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdDogTWFya2V0c1N0b3JlLmdldFN0YXRlKClcclxuICAgICAgICAgICAgICAgICAgICAuY3VycmVudEdyb3VwT3JkZXJMaW1pdCxcclxuICAgICAgICAgICAgICAgIGZlZWRQcmljZTogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuZmVlZFByaWNlLFxyXG4gICAgICAgICAgICAgICAgbWFya2V0TGltaXRPcmRlcnM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldExpbWl0T3JkZXJzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFF1aWNrVHJhZGUgPSBiaW5kVG9DdXJyZW50QWNjb3VudChRdWlja1RyYWRlKSk7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnZTQwNCBmcm9tIFwiLi4vUGFnZTQwNC9QYWdlNDA0XCI7XG5pbXBvcnQgUXVpY2tUcmFkZSBmcm9tIFwiLi9RdWlja1RyYWRlXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5cbmNsYXNzIFF1aWNrVHJhZGVTdWJzY3JpYmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhc3NldFRvU2VsbDogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LFxuICAgICAgICBhc3NldFRvUmVjZWl2ZTogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0XG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFzc2V0VG9TZWxsOiBcIlVTRFwiLFxuICAgICAgICBhc3NldFRvUmVjZWl2ZTogXCJHUEhcIlxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghIXRoaXMucHJvcHMuYXNzZXRUb1JlY2VpdmUuZ2V0ICYmICEhdGhpcy5wcm9wcy5hc3NldFRvU2VsbC5nZXQpIHtcbiAgICAgICAgICAgIHJldHVybiA8UXVpY2tUcmFkZSB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgUXVpY2tUcmFkZUFzc2V0UmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKFF1aWNrVHJhZGVTdWJzY3JpYmVyLCB7XG4gICAgc2hvd19sb2FkZXI6IHRydWVcbn0pO1xuXG5jbGFzcyBRdWlja1RyYWRlUm91dGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzeW1ib2xzID0gISF0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5tYXJrZXRJRFxuICAgICAgICAgICAgPyB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5tYXJrZXRJRC50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiX1wiKVxuICAgICAgICAgICAgOiBbXCJcIiwgXCJcIl07XG4gICAgICAgIGlmIChzeW1ib2xzLmxlbmd0aCA9PSAyICYmICEhc3ltYm9sc1swXSAmJiBzeW1ib2xzWzBdID09PSBzeW1ib2xzWzFdKSB7XG4gICAgICAgICAgICByZXR1cm4gPFBhZ2U0MDQgc3VidGl0bGU9XCJtYXJrZXRfbm90X2ZvdW5kX3N1YnRpdGxlXCIgLz47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVpY2tUcmFkZVJvdXRlclwiLCBzeW1ib2xzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFF1aWNrVHJhZGVBc3NldFJlc29sdmVyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgYXNzZXRUb1NlbGw9e3N5bWJvbHNbMF0gfHwgXCJcIn1cbiAgICAgICAgICAgICAgICBhc3NldFRvUmVjZWl2ZT17c3ltYm9scy5sZW5ndGggPT0gMiA/IHN5bWJvbHNbMV0gOiBcIlwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1aWNrVHJhZGVSb3V0ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IzIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yM1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHtSb3csIENvbH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcblxyXG5jbGFzcyBTZWxsUmVjZWl2ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHNlbGxBc3NldElucHV0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNlbGxBc3NldDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBzZWxsQXNzZXRzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgICAgc2VsbEFtb3VudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBzZWxsSW1nTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICByZWNlaXZlQXNzZXRJbnB1dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICByZWNlaXZlQXNzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcmVjZWl2ZUFzc2V0czogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIHJlY2VpdmVBbW91bnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcmVjZWl2ZUltZ05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgb25TZWxsQXNzZXRJbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBvblNlbGxBbW91bnRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBvblJlY2VpdmVBbW91bnRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb25Td2FwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGlzU3dhcHBhYmxlOiBQcm9wVHlwZXMuYm9vbFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc21hbGxTY3JlZW4gPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDg1MCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElucHV0LFxyXG4gICAgICAgICAgICBzZWxsQXNzZXQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldHMsXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnQsXHJcbiAgICAgICAgICAgIHNlbGxJbWdOYW1lLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0LFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRzLFxyXG4gICAgICAgICAgICByZWNlaXZlQW1vdW50LFxyXG4gICAgICAgICAgICByZWNlaXZlSW1nTmFtZSxcclxuICAgICAgICAgICAgb25TZWxsQXNzZXRJbnB1dENoYW5nZSxcclxuICAgICAgICAgICAgb25TZWxsQW1vdW50Q2hhbmdlLFxyXG4gICAgICAgICAgICBvblJlY2VpdmVBc3NldElucHV0Q2hhbmdlLFxyXG4gICAgICAgICAgICBvblJlY2VpdmVBbW91bnRDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uUmVjZWl2ZUFzc2V0U2VhcmNoLFxyXG4gICAgICAgICAgICBvblN3YXAsXHJcbiAgICAgICAgICAgIGlzU3dhcHBhYmxlXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGxTZWxlY3RvciA9IChcclxuICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yM1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9e1wiZXhjaGFuZ2Uuc2VsbFwifVxyXG4gICAgICAgICAgICAgICAgYXNzZXRJbnB1dD17c2VsbEFzc2V0SW5wdXR9XHJcbiAgICAgICAgICAgICAgICBhc3NldD17c2VsbEFzc2V0fVxyXG4gICAgICAgICAgICAgICAgYXNzZXRzPXtzZWxsQXNzZXRzfVxyXG4gICAgICAgICAgICAgICAgYW1vdW50PXtzZWxsQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgb25Bc3NldElucHV0Q2hhbmdlPXtvblNlbGxBc3NldElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25BbW91bnRDaGFuZ2U9e29uU2VsbEFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgIGltZ05hbWU9e3NlbGxJbWdOYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5wbGFjZWhvbGRlcl9zZWxsXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVjZWl2ZVNlbGVjdG9yID0gKFxyXG4gICAgICAgICAgICA8QW1vdW50U2VsZWN0b3IzXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17XCJleGNoYW5nZS5yZWNlaXZlXCJ9XHJcbiAgICAgICAgICAgICAgICBhc3NldElucHV0PXtyZWNlaXZlQXNzZXRJbnB1dH1cclxuICAgICAgICAgICAgICAgIGFzc2V0PXtyZWNlaXZlQXNzZXR9XHJcbiAgICAgICAgICAgICAgICBhc3NldHM9e3JlY2VpdmVBc3NldHN9XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e3JlY2VpdmVBbW91bnR9XHJcbiAgICAgICAgICAgICAgICBvbkFzc2V0SW5wdXRDaGFuZ2U9e29uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17b25SZWNlaXZlQXNzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgICAgICBvbkFtb3VudENoYW5nZT17b25SZWNlaXZlQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgaW1nTmFtZT17cmVjZWl2ZUltZ05hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnBsYWNlaG9sZGVyX3JlY2VpdmVcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBidG5TdHlsZSA9IHtcclxuICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghaXNTd2FwcGFibGUpIHtcclxuICAgICAgICAgICAgYnRuU3R5bGUub3BhY2l0eSA9IDAuMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN3YXBCdXR0b24gPSAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2J0blN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN3YXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIyeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhc21hbGxTY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjNyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Td2FwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtzbWFsbFNjcmVlbiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PntzZWxsU2VsZWN0b3J9PC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+e3N3YXBCdXR0b259PC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+e3JlY2VpdmVTZWxlY3Rvcn08L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMH0+e3NlbGxTZWxlY3Rvcn08L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs0fT57c3dhcEJ1dHRvbn08L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMH0+e3JlY2VpdmVTZWxlY3Rvcn08L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGxSZWNlaXZlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge1JvdywgQ29sLCBUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclN0eWxlR3VpZGVcIjtcclxuXHJcbmltcG9ydCBDaGFpblNlbGVjdCBmcm9tIFwiLi9DaGFpblNlbGVjdFwiO1xyXG5cclxuY2xhc3MgQW1vdW50U2VsZWN0b3IzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYXNzZXRJbnB1dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBhc3NldDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBhc3NldHM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBhbW91bnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIG9uQXNzZXRJbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgb25BbW91bnRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIG9uSW1hZ2VFcnJvcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIGltZ05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXJBbW91bnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmdcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgaW1nTmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXJBbW91bnQ6IFwiMC4wXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW1hZ2VFcnJvcjogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgISF0aGlzLnByb3BzLmltZ05hbWUgJiZcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pbWdOYW1lICE9PSBwcmV2UHJvcHMuaW1nTmFtZSAmJlxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmltZ05hbWUgIT09IFwidW5rbm93blwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VFcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW1hZ2VFcnJvcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW1hZ2VFcnJvcjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgYXNzZXRJbnB1dCxcclxuICAgICAgICAgICAgYXNzZXQsXHJcbiAgICAgICAgICAgIGFzc2V0cyxcclxuICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICBvbkFzc2V0SW5wdXRDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uU2VhcmNoLFxyXG4gICAgICAgICAgICBvbkFtb3VudENoYW5nZSxcclxuICAgICAgICAgICAgaW1nTmFtZSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyQW1vdW50LFxyXG4gICAgICAgICAgICB0b29sdGlwVGV4dFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbWFnZUVycm9yKSB7XHJcbiAgICAgICAgICAgIGltZ05hbWUgPSBcInVua25vd25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGxhYmVsVGV4dCA9IChcclxuICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtsYWJlbH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBjaGFpblNlbGVjdG9yID0gPENoYWluU2VsZWN0IC8+O1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMy41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5vbkltYWdlRXJyb3IuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvJHtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgYW1vdW50U2VsZWN0b3IgPSAoXHJcbiAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XHJcbiAgICAgICAgICAgICAgICBhc3NldD17YXNzZXR9XHJcbiAgICAgICAgICAgICAgICBhc3NldHM9e2Fzc2V0c31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlckFtb3VudH1cclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbW91bnQtc2VsZWN0b3ItMlwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjMuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsVGV4dH1cclxuICAgICAgICAgICAgICAgIDxSb3dcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIxOHJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIzLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT17dG9vbHRpcFRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluU2VsZWN0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Ftb3VudFNlbGVjdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFtb3VudFNlbGVjdG9yMztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vQm90cy9saWJzL0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtnZXRJbWFnZU5hbWV9IGZyb20gXCJicmFuZGluZ1wiO1xuXG5jbGFzcyBBc3NldEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogdHJ1ZSxcbiAgICAgICAgbWF4V2lkdGg6IDIwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW1nRXJyb3I6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCAhPT0gbnAuYXNzZXQgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4V2lkdGggIT09IG5wLm1heFdpZHRoIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLndoaXRlTGlzdCAhPT0gbnAud2hpdGVMaXN0IHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmltZ0Vycm9yICE9PSBucy5pbWdFcnJvclxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXBsYWNlTm9uZVRvQnRzKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnNyYyA9XG4gICAgICAgICAgICAgICAgICAgIFwiYXNzZXQtc3ltYm9scy91bmtub3duLnBuZ1wiO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGltZ0Vycm9yOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthc3NldH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEltYWdlV3JhcHBlcihhc3NldCkge1xuICAgICAgICAgICAgaWYgKGFzc2V0ID09PSBudWxsKSByZXR1cm4gXCJ1bmtub3duXCI7XG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGdldEltYWdlTmFtZShzeW1ib2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1nTmFtZSA9IGdldEltYWdlV3JhcHBlcihhc3NldCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0zcHhcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Bc3NldEltYWdlID0gQXNzZXRXcmFwcGVyKEFzc2V0SW1hZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldEltYWdlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPEFzc2V0SW1hZ2Ugey4uLnRoaXMucHJvcHN9IGFzc2V0PXt0aGlzLnByb3BzLm5hbWV9Lz47XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgZGVib3VuY2VSZW5kZXIgZnJvbSBcInJlYWN0LWRlYm91bmNlLXJlbmRlclwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudFN0b3JlXCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFzTG9hZGVkID0gZnVuY3Rpb24gaGFzTG9hZGVkKGN1cnJlbnRBY2NvdW50KSB7XHJcbiAgICByZXR1cm4gISFjdXJyZW50QWNjb3VudCAmJiAhIWN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJpbmRUb0N1cnJlbnRBY2NvdW50ID0gZnVuY3Rpb24gYmluZFRvQ3VycmVudEFjY291bnQoXHJcbiAgICBXcmFwcGVkQ29tcG9uZW50XHJcbikge1xyXG4gICAgLy8gLi4uYW5kIHJldHVybnMgYW5vdGhlciBjb21wb25lbnQuLi5cclxuICAgIGxldCBCaW5kVG9DdXJyZW50QWNjb3VudCA9IGNsYXNzIEJpbmRUb0N1cnJlbnRBY2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50QWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbkFjY291bnRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgICAgICAvLyBzZXQgc3Vic2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGF1dG9zdWJzY3JpYmU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNMb2FkZWQodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50ID0gQmluZFRvQ2hhaW5TdGF0ZShCaW5kVG9DdXJyZW50QWNjb3VudCk7XHJcblxyXG4gICAgQmluZFRvQ3VycmVudEFjY291bnQgPSBkZWJvdW5jZVJlbmRlcihCaW5kVG9DdXJyZW50QWNjb3VudCwgMTAwLCB7XHJcbiAgICAgICAgbGVhZGluZzogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb25uZWN0KFxyXG4gICAgICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2NvdW50ID1cclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGxlYXNlLWxvZ2luXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBuZXcgTWFwKFtbXCJuYW1lXCIsIGN1cnJlbnRBY2NvdW50XV0pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtTZWxlY3R9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7TWFwfSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5cbmNsYXNzIENoYWluU2VsZWN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hhaW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgICAgc2VsZWN0U3R5bGU6IFByb3BUeXBlcy5vYmplY3RcblxuICAgICAgICAvLyBhbGwgb3RoZXIgcHJvcHMgYXJlIHBhc3NlZCB0byB0aGUgU2VsZWN0IGNvbXBvbmVudFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjaGFpbnM6IFtcIkdyYXBoZW5lIEJsb2NrY2hhaW5cIl0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiBudWxsLFxuICAgICAgICBzdHlsZToge30sXG4gICAgICAgIHNlbGVjdFN0eWxlOiB7fVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjaGFpbnMsXG4gICAgICAgICAgICBzZWxlY3RTdHlsZSxcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLFxuICAgICAgICAgICAgLi4ucmVtUHJvcHNcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgZGlzYWJsZVNlbGVjdCA9XG4gICAgICAgICAgICBjaGFpbnMuZmlsdGVyKE1hcC5pc01hcCkubGVuZ3RoIDw9IDEgJiYgIW9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gY2hhaW5zWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgb25Ecm9wZG93blZpc2libGVDaGFuZ2UgZ2l2ZW4gd2UgYXNzdW1lIHRoYXQgbGF6eSBsb2FkaW5nIHRha2VzIHBsYWNlXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IChcbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17b25Ecm9wZG93blZpc2libGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgc2hvd0Fycm93PXtkaXNhYmxlU2VsZWN0ID8gZmFsc2UgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3NlbGVjdFN0eWxlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgfHwgXCJ1dGlsaXR5LmFzc2V0X3NlbGVjdF9wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICB7Li4ucmVtUHJvcHN9XG4gICAgICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD1cImNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb249eyhpbnB1dCwgb3B0aW9uKSA9PlxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ua2V5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+PSAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlU2VsZWN0fVxuICAgICAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2xvYmFsLm5vdF9mb3VuZFwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hhaW5zLmZpbHRlcihNYXAuaXNNYXApLm1hcChjaGFpbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e2NoYWlufSB2YWx1ZT17Y2hhaW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2hhaW4tc2VsZWN0XCJ9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAge3NlbGVjdH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhaW5TZWxlY3RWaWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbi8qKlxuICogIFJlbmRlcnMgYSB0YWIgbGF5b3V0LCBoYW5kbGluZyBzd2l0Y2hpbmcgYW5kIG9wdGlvbmFsbHkgcGVyc2lzdHMgdGhlIGN1cnJlbnRseSBvcGVuIHRhYiB1c2luZyB0aGUgU2V0dGluZ3NTdG9yZVxuICpcbiAqICBwcm9wczpcbiAqICAgICBzZXR0aW5nOiB1bmlxdWUgbmFtZSB0byBiZSB1c2VkIHRvIHJlbWVtYmVyIHRoZSBhY3RpdmUgdGFiIG9mIHRoaXMgdGFicyBsYXlvdXQsXG4gKiAgICAgdGFic0NsYXNzOiBvcHRpb25hbCBjbGFzc2VzIGZvciB0aGUgdGFicyBjb250YWluZXIgZGl2XG4gKiAgICAgY29udGVudENsYXNzOiBvcHRpb25hbCBjbGFzc2VzIGZvciB0aGUgY29udGVudCBjb250YWluZXIgZGl2XG4gKlxuICogIFVzYWdlOlxuICpcbiAqICA8VGFicyBzZXR0aW5nPVwibXlTZXR0aW5nXCI+XG4gKiAgICAgIDxUYWIgdGl0bGU9XCJsb2NhbGUuc3RyaW5nLnRpdGxlMVwiPlRhYiAxIGNvbnRlbnQ8L1RhYj5cbiAqICAgICAgPFRhYiB0aXRsZT1cImxvY2FsZS5zdHJpbmcudGl0bGUyXCI+VGFiIDIgY29udGVudDwvVGFiPlxuICogIDwvVGFicz5cbiAqXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjaGFuZ2VUYWI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpc0xpbmtUbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3ViVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICAgICAgaXNMaW5rVG86IFwiXCIsXG4gICAgICAgIHN1YlRleHQ6IG51bGxcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGNoYW5nZVRhYixcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgdXBkYXRlZFRhYixcbiAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgc3ViVGV4dFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGMgPSBjbmFtZXMoe1wiaXMtYWN0aXZlXCI6IGlzQWN0aXZlfSwgY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiICYmIHRpdGxlLmluZGV4T2YoXCIuXCIpID4gMCkge1xuICAgICAgICAgICAgdGl0bGUgPSBjb3VudGVycGFydC50cmFuc2xhdGUodGl0bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZG9udCBzdHJpbmcgY29uY2V0ZW5hdGUgc3ViVGV4dCBkaXJlY3RseSB3aXRoaW4gdGhlIHJlbmRlcmluZywgc3ViVGV4dCBjYW4gYmUgYW4gb2JqZWN0IHdpdGhvdXQgdG9TdHJpbmdcbiAgICAgICAgLy8gaW1wbGVtZW50YXRpb24sIGJ1dCB2YWxpZCBET00gKG1lYW5pbmcsIGRvbid0IGRvIHN1YlRleHQgKyBcInNvbWVTdHJpbmdcIlxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgLy8gaWYgc3ViVGV4dCBpcyBlbXB0eSwgZG9udCByZW5kZXIgaXQsIHdlIGRvbnQgd2FudCBlbXB0eSBicmFja2V0cyBhZGRlZFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdWJUZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgc3ViVGV4dCA9IHN1YlRleHQudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpdGxlLnR5cGUgPT09IFwic3BhblwiKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSB0aXRsZS5wcm9wcy5jaGlsZHJlblsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXh9IGRhdGEtaXMtbGluay10bz17dGhpcy5wcm9wcy5pc0xpbmtUb30+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAge3VwZGF0ZWRUYWIgPyBcIipcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIFwiIChcIn1cbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgc3ViVGV4dH1cbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgXCIpXCJ9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N9XG4gICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICFkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGFuZ2VUYWIuYmluZCh0aGlzLCBpbmRleCwgdGhpcy5wcm9wcy5pc0xpbmtUbylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFiLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXBkYXRlZFRhYiA/IFwiKlwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRhYi1zdWJ0ZXh0XCI+e3N1YlRleHR9PC9kaXY+fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzZXR0aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZWZhdWx0QWN0aXZlVGFiOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBzZWdtZW50ZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFjdGl2ZTogMCxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYjogMCxcbiAgICAgICAgc2VnbWVudGVkOiB0cnVlLFxuICAgICAgICBjb250ZW50Q2xhc3M6IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7fVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlVGFiOiBwcm9wcy5zZXR0aW5nXG4gICAgICAgICAgICAgICAgPyBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KHByb3BzLnNldHRpbmcsIHByb3BzLmRlZmF1bHRBY3RpdmVUYWIpXG4gICAgICAgICAgICAgICAgOiBwcm9wcy5kZWZhdWx0QWN0aXZlVGFiLFxuICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBuZXh0U2V0dGluZyA9IG5leHRQcm9wcy52aWV3U2V0dGluZ3MuZ2V0KG5leHRQcm9wcy5zZXR0aW5nKTtcbiAgICAgICAgaWYgKG5leHRTZXR0aW5nICE9PSB0aGlzLnByb3BzLnZpZXdTZXR0aW5ncy5nZXQodGhpcy5wcm9wcy5zZXR0aW5nKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiOiBuZXh0U2V0dGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgX3NldERpbWVuc2lvbnMoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGh9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jaGFuZ2VUYWIodmFsdWUsIGlzTGlua1RvKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVUYWIpIHJldHVybjtcbiAgICAgICAgLy8gUGVyc2lzdCBjdXJyZW50IHRhYiBpZiBkZXNpcmVkXG5cbiAgICAgICAgaWYgKGlzTGlua1RvICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChpc0xpbmtUbyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXR0aW5nKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLnNldHRpbmddOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiB2YWx1ZX0pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlVGFiKSB0aGlzLnByb3BzLm9uQ2hhbmdlVGFiKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2hpbGRyZW4sIGNvbnRlbnRDbGFzcywgdGFic0NsYXNzLCBzdHlsZSwgc2VnbWVudGVkfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlVGFicyA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpZHRoIDwgOTAwICYmIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDI7XG5cbiAgICAgICAgbGV0IGFjdGl2ZUNvbnRlbnQgPSBudWxsO1xuXG4gICAgICAgIGxldCB0YWJzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sbGFwc2VUYWJzICYmIGNoaWxkLnByb3BzLmRpc2FibGVkKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9IGluZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYjtcbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbnRlbnQgPSBjaGlsZC5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogY29sbGFwc2VUYWJzLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgICAgICAgIGNoYW5nZVRhYjogdGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuZmlsdGVyKGEgPT4gYSAhPT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKCFhY3RpdmVDb250ZW50KSB7XG4gICAgICAgICAgICBhY3RpdmVDb250ZW50ID0gdGFic1swXS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zID8gXCJ3aXRoLWJ1dHRvbnNcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2Utc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImJ1dHRvbi1ncm91cCBuby1tYXJnaW5cIiwgdGFic0NsYXNzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbGxhcHNlVGFicyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIxNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hY3RpdmVUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogMTAsIG1hcmdpbkJvdHRvbTogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0W2luZF0uYXR0cmlidXRlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1pcy1saW5rLXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFic31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYnMtYWN0aW9uLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWN0aW9uQnV0dG9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuYW1lcyhcInRhYi1jb250ZW50XCIsIGNvbnRlbnRDbGFzcyl9PlxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlQ29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVGFicyA9IGNvbm5lY3QoVGFicywge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7dmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzfTtcbiAgICB9XG59KTtcblxuVGFicyA9IHdpdGhSb3V0ZXIoVGFicyk7XG5cbmV4cG9ydCB7VGFicywgVGFifTtcbiIsImltcG9ydCB7aGFzR2F0ZXdheVByZWZpeH0gZnJvbSBcImNvbW1vbi9nYXRld2F5VXRpbHNcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmZ1bmN0aW9uIGxvb2t1cEFzc2V0cyh2YWx1ZSwgZ2F0ZXdheUFzc2V0cyA9IGZhbHNlLCBnZXRBc3NldExpc3QsIHNldFN0YXRlKSB7XG4gICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gXCJcIikgcmV0dXJuO1xuXG4gICAgbGV0IHF1b3RlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgIGlmIChxdW90ZS5zdGFydHNXaXRoKFwiR1BcIikgJiYgcXVvdGUubGVuZ3RoID49IDYpIHtcbiAgICAgICAgcXVvdGUgPSB2YWx1ZS5zdWJzdHIoMywgcXVvdGUubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgZ2V0QXNzZXRMaXN0KHF1b3RlLCAxMCwgZ2F0ZXdheUFzc2V0cyk7XG5cbiAgICBzZXRTdGF0ZSh7bG9va3VwUXVvdGU6IHF1b3RlfSk7XG59XG5cbmZ1bmN0aW9uIGFzc2V0RmlsdGVyKFxuICAgIHtzZWFyY2hBc3NldHMsIG1hcmtldFBpY2tlckFzc2V0LCBiYXNlQXNzZXQsIHF1b3RlQXNzZXR9LFxuICAgIHtpbnB1dFZhbHVlLCBsb29rdXBRdW90ZX0sXG4gICAgc2V0U3RhdGUsXG4gICAgY2hlY2tBbmRVcGRhdGVNYXJrZXRMaXN0XG4pIHtcbiAgICBzZXRTdGF0ZSh7YWN0aXZlU2VhcmNoOiB0cnVlfSk7XG5cbiAgICBsZXQgYXNzZXRDb3VudCA9IDA7XG4gICAgbGV0IGFsbE1hcmtldHMgPSBbXTtcblxuICAgIGxldCBiYXNlU3ltYm9sID0gYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICBsZXQgcXVvdGVTeW1ib2wgPSBxdW90ZUFzc2V0LmdldChcInN5bWJvbFwiKTtcblxuICAgIGlmIChzZWFyY2hBc3NldHMuc2l6ZSAmJiAhIWlucHV0VmFsdWUgJiYgaW5wdXRWYWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHNlYXJjaEFzc2V0c1xuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5vcHRpb25zLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGEub3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ2aXNpYmxlXCIgaW4gZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uLnZpc2libGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXRDb3VudCA+IDEwMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGFzc2V0Q291bnQrKztcblxuICAgICAgICAgICAgICAgIGxldCBpc3N1ZXJOYW1lID0gZmV0Y2hJc3N1ZXJOYW1lKGFzc2V0Lmlzc3Vlcik7XG5cbiAgICAgICAgICAgICAgICBsZXQgYmFzZSA9IGJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gYXNzZXQuc3ltYm9sICsgXCJfXCIgKyBiYXNlO1xuXG4gICAgICAgICAgICAgICAgbGV0IGlzUXVvdGVBc3NldCA9IHF1b3RlU3ltYm9sID09IG1hcmtldFBpY2tlckFzc2V0O1xuICAgICAgICAgICAgICAgIGxldCBpbmNsdWRlQXNzZXQgPVxuICAgICAgICAgICAgICAgICAgICAoaXNRdW90ZUFzc2V0ICYmIGFzc2V0LnN5bWJvbCAhPSBiYXNlU3ltYm9sKSB8fFxuICAgICAgICAgICAgICAgICAgICAoIWlzUXVvdGVBc3NldCAmJiBhc3NldC5zeW1ib2wgIT0gcXVvdGVTeW1ib2wpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVBc3NldCkge1xuICAgICAgICAgICAgICAgICAgICBhbGxNYXJrZXRzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IGFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlcklkOiBhc3NldC5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyOiBpc3N1ZXJOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtldHNMaXN0ID0gc29ydE1hcmtldHNMaXN0KGFsbE1hcmtldHMsIGlucHV0VmFsdWUpO1xuICAgIGNoZWNrQW5kVXBkYXRlTWFya2V0TGlzdChtYXJrZXRzTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGdldE1hcmtldFNvcnRDb21wb25lbnRzKG1hcmtldCkge1xuICAgIGNvbnN0IHdlaWdodCA9IHt9O1xuICAgIGNvbnN0IHF1b3RlID0gbWFya2V0LnF1b3RlO1xuICAgIGlmIChxdW90ZS5pbmRleE9mKFwiLlwiKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgW2dhdGV3YXksIGFzc2V0XSA9IHF1b3RlLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgd2VpZ2h0LmdhdGV3YXkgPSBnYXRld2F5O1xuICAgICAgICB3ZWlnaHQuYXNzZXQgPSBhc3NldDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3ZWlnaHQuYXNzZXQgPSBxdW90ZTtcbiAgICB9XG4gICAgaWYgKG1hcmtldC5pc3N1ZXJJZCA9PT0gXCIxLjIuMFwiKSB3ZWlnaHQuaXNDb21taXR0ZWUgPSB0cnVlO1xuICAgIHJldHVybiB3ZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIHNvcnRNYXJrZXRzTGlzdChhbGxNYXJrZXRzLCBpbnB1dFZhbHVlKSB7XG4gICAgaWYgKGlucHV0VmFsdWUuc3RhcnRzV2l0aChcIkdQXCIpICYmIGlucHV0VmFsdWUubGVuZ3RoID49IDYpIHtcbiAgICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUuc3Vic3RyKDMsIGlucHV0VmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxNYXJrZXRzLnNvcnQoKFssIG1hcmtldEFdLCBbLCBtYXJrZXRCXSkgPT4ge1xuICAgICAgICBjb25zdCB3ZWlnaHRBID0gZ2V0TWFya2V0U29ydENvbXBvbmVudHMobWFya2V0QSk7XG4gICAgICAgIGNvbnN0IHdlaWdodEIgPSBnZXRNYXJrZXRTb3J0Q29tcG9uZW50cyhtYXJrZXRCKTtcblxuICAgICAgICBpZiAod2VpZ2h0QS5hc3NldCAhPT0gd2VpZ2h0Qi5hc3NldCkge1xuICAgICAgICAgICAgaWYgKHdlaWdodEEuYXNzZXQgPT09IGlucHV0VmFsdWUpIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICh3ZWlnaHRCLmFzc2V0ID09PSBpbnB1dFZhbHVlKSByZXR1cm4gMTtcbiAgICAgICAgICAgIGlmICh3ZWlnaHRBLmFzc2V0ID4gd2VpZ2h0Qi5hc3NldCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKHdlaWdodEEuYXNzZXQgPCB3ZWlnaHRCLmFzc2V0KSByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3ZWlnaHRBLmlzQ29tbWl0dGVlIF4gd2VpZ2h0Qi5pc0NvbW1pdHRlZSkge1xuICAgICAgICAgICAgaWYgKHdlaWdodEEuaXNDb21taXR0ZWUpIHJldHVybiAtMTtcbiAgICAgICAgICAgIGlmICh3ZWlnaHRCLmlzQ29tbWl0dGVlKSByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFJc0tub3duR2F0ZXdheSA9IGhhc0dhdGV3YXlQcmVmaXgobWFya2V0QS5xdW90ZSk7XG4gICAgICAgIGNvbnN0IGJJc0tub3duR2F0ZXdheSA9IGhhc0dhdGV3YXlQcmVmaXgobWFya2V0Qi5xdW90ZSk7XG4gICAgICAgIGlmIChhSXNLbm93bkdhdGV3YXkgJiYgIWJJc0tub3duR2F0ZXdheSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoYklzS25vd25HYXRld2F5ICYmICFhSXNLbm93bkdhdGV3YXkpIHJldHVybiAxO1xuXG4gICAgICAgIGlmICh3ZWlnaHRBLmdhdGV3YXkgPiB3ZWlnaHRCLmdhdGV3YXkpIHJldHVybiAxO1xuICAgICAgICBpZiAod2VpZ2h0QS5nYXRld2F5IDwgd2VpZ2h0Qi5nYXRld2F5KSByZXR1cm4gLTE7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmZXRjaElzc3Vlck5hbWUoaXNzdWVySWQpIHtcbiAgICBsZXQgaXNzdWVyID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoaXNzdWVySWQsIGZhbHNlLCBmYWxzZSk7XG4gICAgaWYgKCFpc3N1ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpc3N1ZXIuZ2V0KFwibmFtZVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7bG9va3VwQXNzZXRzLCBhc3NldEZpbHRlciwgZmV0Y2hJc3N1ZXJOYW1lfTtcbiIsImltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7Y2hlY2tGZWVTdGF0dXNBc3luY30gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcclxuXHJcbi8vIFJldHVybnMgYSBsaXN0IG9mIGRpY3RzIHdpdGgga2V5cyBpZCwgc2VsbGVyIGFtb3VudCBhbmQgcHJpY2UgYW5kIHJlc3BlY3RpdmUgdmFsdWVzXHJcbmZ1bmN0aW9uIGdldE9yZGVycyhhbW91bnQsIG9yZGVycywgd2hhdEFtb3VudCkge1xyXG4gICAgY29uc3QgbWF0Y2hlZE9yZGVycyA9IFtdO1xyXG4gICAgbGV0IHRvdGFsQW1vdW50O1xyXG4gICAgb3JkZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gYi5nZXRQcmljZSgpIC0gYS5nZXRQcmljZSgpOyAvLyBnZXRQcmljZSA9PT0gX3JlYWxfcHJpY2VcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1hdGNoZWRPcmRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZWRPcmRlcnMuZm9yRWFjaCgoe29yZGVyfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG90YWxBbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgIHdoYXRBbW91bnQgPT09IFwicmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gb3JkZXIudG90YWxfZm9yX3NhbGUuZ2V0QW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBvcmRlci50b3RhbF90b19yZWNlaXZlLmdldEFtb3VudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b3RhbEFtb3VudCA+PSBhbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZE9yZGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogb3JkZXJzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogb3JkZXJzW2ldLmFtb3VudFRvUmVjZWl2ZSgpLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnQ6IG9yZGVyc1tpXS50b3RhbF90b19yZWNlaXZlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogb3JkZXJzW2ldLmdldFByaWNlKClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlZE9yZGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBvcmRlcnNbaV0sXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IG9yZGVyc1tpXS5hbW91bnRUb1JlY2VpdmUoKS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnQ6IG9yZGVyc1tpXS50b3RhbF90b19yZWNlaXZlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBvcmRlcnNbaV0uZ2V0UHJpY2UoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoZWRPcmRlcnM7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBkaWN0IHdpdGgga2V5cyBmZWVkUHJpY2UgYW5kIGxhc3RQcmljZVxyXG5mdW5jdGlvbiBnZXRQcmljZXMoYWN0aXZlTWFya2V0SGlzdG9yeSwgZmVlZFByaWNlKSB7XHJcbiAgICBsZXQgbGF0ZXN0UHJpY2U7XHJcbiAgICBpZiAoYWN0aXZlTWFya2V0SGlzdG9yeS5zaXplKSB7XHJcbiAgICAgICAgY29uc3QgbGF0ZXN0X3R3byA9IGFjdGl2ZU1hcmtldEhpc3RvcnkudGFrZSgyKTtcclxuICAgICAgICBjb25zdCBsYXRlc3QgPSBsYXRlc3RfdHdvLmZpcnN0KCk7XHJcbiAgICAgICAgbGF0ZXN0UHJpY2UgPSBsYXRlc3QuZ2V0UHJpY2UoKTtcclxuICAgIH1cclxuICAgIC8vIGZlZWQgcHJpY2UgPT09IG51bGwgaWYgbm90IGEgYml0YXNzZXQgbWFya2V0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhdGVzdFByaWNlOiBsYXRlc3RQcmljZSA/IGxhdGVzdFByaWNlIDogbnVsbCxcclxuICAgICAgICBmZWVkUHJpY2U6IGZlZWRQcmljZSA/IGZlZWRQcmljZS50b1JlYWwoKSA6IGZlZWRQcmljZVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGxpc3Qgb2YgYXNzZXQgaWRzIHRoYXQgdGhlIHVzZXIgY2FuIHNlbGxcclxuZnVuY3Rpb24gZ2V0QXNzZXRzVG9TZWxsKGFjY291bnQpIHtcclxuICAgIGxldCBhc3NldFR5cGVzID0gW107XHJcblxyXG4gICAgaWYgKCEoYWNjb3VudCAmJiBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBhc3NldFR5cGVzO1xyXG4gICAgfVxyXG4gICAgbGV0IGFjY291bnRCYWxhbmNlcyA9IGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xyXG5cclxuICAgIGFzc2V0VHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50QmFsYW5jZXMpLnNvcnQodXRpbHMuc29ydElEKTtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gYWNjb3VudEJhbGFuY2VzKSB7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChhY2NvdW50QmFsYW5jZXNba2V5XSk7XHJcbiAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGFzc2V0VHlwZXMuc3BsaWNlKGFzc2V0VHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFzc2V0VHlwZXM7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBkaWN0IHdpdGgga2V5cyBsaXF1aWRpdHlQZW5hbHR5LCBtYXJrZXRGZWUgYW5kIHRyYW5zYWN0aW9uRmVlLCBpbnB1dCBpcyBzZWxlY3RlZCBhc3NldHMgYW5kIGFtb3VudHNcclxuYXN5bmMgZnVuY3Rpb24gZ2V0RmVlcyhiYXNlQXNzZXQsIHF1b3RlQXNzZXQsIGN1cnJlbnRBY2NvdW50KSB7XHJcbiAgICBjb25zdCBiYXNlTWFya2V0RmVlUGVyY2VudCA9XHJcbiAgICAgICAgYmFzZUFzc2V0LmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pIC8gMTAwICsgXCIlXCI7XHJcbiAgICBjb25zdCBxdW90ZU1hcmtldEZlZVBlcmNlbnQgPVxyXG4gICAgICAgIHF1b3RlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSkgLyAxMDAgKyBcIiVcIjtcclxuICAgIGNvbnN0IGJhc2VNYXJrZXRGZWUgPSBiYXNlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSk7XHJcbiAgICBjb25zdCBxdW90ZU1hcmtldEZlZSA9IHF1b3RlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSk7XHJcblxyXG4gICAgY29uc3QgdHJ4RmVlID0gYXdhaXQgY2hlY2tGZWVTdGF0dXMoXHJcbiAgICAgICAgW2Jhc2VBc3NldCwgcXVvdGVBc3NldF0sXHJcbiAgICAgICAgY3VycmVudEFjY291bnRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYXJrZXRGZWU6IHtcclxuICAgICAgICAgICAgYmFzZU1hcmtldEZlZVBlcmNlbnQsXHJcbiAgICAgICAgICAgIHF1b3RlTWFya2V0RmVlUGVyY2VudCxcclxuICAgICAgICAgICAgYmFzZU1hcmtldEZlZSxcclxuICAgICAgICAgICAgcXVvdGVNYXJrZXRGZWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRyYW5zYWN0aW9uRmVlOiB0cnhGZWVcclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRmVlU3RhdHVzKGFzc2V0cyA9IFtdLCBhY2NvdW50KSB7XHJcbiAgICBsZXQgZmVlU3RhdHVzID0ge307XHJcbiAgICBsZXQgcCA9IFtdO1xyXG4gICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgcC5wdXNoKFxyXG4gICAgICAgICAgICBjaGVja0ZlZVN0YXR1c0FzeW5jKHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIGZlZUlEOiBhLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJsaW1pdF9vcmRlcl9jcmVhdGVcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwKVxyXG4gICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XHJcbiAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZlZVN0YXR1c1thLmdldChcImlkXCIpXSA9IHN0YXR1c1tpZHhdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZlZVN0YXR1cztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiY2hlY2tGZWVTdGF0dXNBc3luYyBlcnJvclwiLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge2dldE9yZGVycywgZ2V0UHJpY2VzLCBnZXRGZWVzLCBnZXRBc3NldHNUb1NlbGx9O1xyXG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgbm93IGZyb20gJy4vbm93LmpzJztcbmltcG9ydCB0b051bWJlciBmcm9tICcuL3RvTnVtYmVyLmpzJztcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==