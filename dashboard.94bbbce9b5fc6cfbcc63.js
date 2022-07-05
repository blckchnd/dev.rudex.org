"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[7],{

/***/ 3367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MarketCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3368);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(521);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1917);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(656);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1816);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2314);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(621);
/* harmony import */ var _DashboardRuDEX_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3369);













class Dashboard extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props); //let marketsByChain = {
    //"7fcf452d": getFeaturedMarkets()
    ////    "7fcf452d": this.getAllPairs()
    //"7fcf452d": []
    //};
    //let chainID = Apis.instance().chain_id;
    //if (chainID) chainID = chainID.substr(0, 8);

    this.state = {
      width: null,
      //featuredMarkets:
      //marketsByChain[chainID] || marketsByChain["7fcf452d"],
      marketStats: this.props.marketStats,
      featuredMarkets: [],
      volume24_usdt: 0,
      updatedCount: 0,
      //arrVolume24: {},
      arrVolume24: [],
      markets: [],
      updating: true,
      timeOutID: undefined,
      count: 0
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
    //let data = this.getAllPairs();
    let data = this.calcVolumeSort();
    this.setState({
      featuredMarkets: data
    });
    /*        this.setState({
                updating: false
            });*/

    let timeOutID = setTimeout(this.pingMarkets, 5000);
    this.setState({
      timeOutID: timeOutID
    });
  }

  pingMarkets() {
    //console.log("market Ping...");
    let allMarketStats = _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().allMarketStats; //console.log("pingMarkets allMarketStats.size: " + allMarketStats.size);
    //if (allMarketStats.size == 650) {

    if (allMarketStats.size !== 0) {
      let data = this.calcVolumeSort(); //console.log("calcVolumeSort from Ping !!!");

      this.setState({
        featuredMarkets: data,
        marketStats: allMarketStats,
        updating: false
      }); //console.log("featuredMarkets from Ping: " + JSON.stringify(allMarketStats));
      //clearTimeout(this.state.timeOutID);
      //return;
      //console.log("============================================================");
    }

    let timeOutID = setTimeout(this.pingMarkets, 5000);
    let count = this.state.count + 1;
    this.setState({
      timeOutID: timeOutID,
      count: count
    });
    return;
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*if (nextState.updating == false)
        return true;*/
    //return false;
    return !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextState.featuredMarkets, this.state.featuredMarkets) || nextProps.marketStats !== this.props.marketStats || nextState.marketStats !== this.state.marketStats || nextState.volume24_usdt !== this.state.volume24_usdt || nextState.width !== this.state.width //||
    //nextState.updating !== this.state.updating ||
    //nextState.timeOutID !== this.state.timeOutID ||
    //nextState.count !== this.state.count
    ;
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

  getVolumeUSDT(quote, base) {
    let allMarketStats = _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().allMarketStats;
    let marketStats1 = allMarketStats.get(`${quote}_${base}`);
    let volume_usdt = 0;

    if (marketStats1 && quote == "RUDEX.USDT") {
      volume_usdt = marketStats1.volumeQuote * 1;
    } else {
      try {
        let marketStats2 = allMarketStats.get(`RUDEX.USDT_${quote}`);
        let price;

        if (marketStats2 && marketStats2.price && marketStats2.price.quote.amount != 0) {
          price = marketStats2.price.quote.amount / marketStats2.price.base.amount * Math.pow(10, marketStats2.price.base.precision) / Math.pow(10, marketStats2.price.quote.precision);
          volume_usdt = marketStats1.volumeQuote * price * 1;
        }
      } catch (e) {//console.log(`log error ${quote} / ${base} : volume_usdt: ${volume_usdt}`);
      }
    }

    return volume_usdt;
  }

  _SortFilterPairs(pairs) {
    let sortPairs = pairs.map(pair => {
      let checkPairs = (0,branding__WEBPACK_IMPORTED_MODULE_10__.getFeaturedMarkets)();
      let preferredPais = [["RUDEX.USDT", "RUDEX.BTS"], ["RUDEX.USDT", "RUDEX.NBS"]];
      let res = checkPairs.find(el => {
        if (el[0] == pair[1] && el[1] == pair[0]) {
          /*if (
              (el[0] == pair[0]) &&
              (el[1] == pair[1])
          ){
               console.log("pair: " + " - " + pair[0] + " - " + pair[1] + " - " + pair[2]);
               return false
          }*/
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


      if (pair[1] === "RUDEX.USDT" || pair[1] === "RUDEX.BUSD" || pair[1] === "GPH" || pair[1] === "USD" || pair[1] === "EUR" || pair[1] === "RUB" || pair[1] === "CNY" || pair[1] === "GOLD" || pair[1] === "SILVER" || pair[1] === "RUDEX.BTS" || //pair[1] === "RUDEX.NBS" ||
      pair[1] === "RUDEX.EOS" //||
      ) {
        return [pair[1], pair[0], 0];
      } //Not in 1nd place


      if ( //pair[1] === "GPH" ||
      pair[0] === "RUDEX.XMR" || pair[0] === "RUDEX.BTC" || pair[0] === "RUDEX.BTCB" //||
      ) {
        return [pair[1], pair[0], 0];
      } //Not in 1nd place

      /* if (
           //pair[0] === "RUDEX.BTS" || //2
           //pair[0] === "RUDEX.NBS"
       ) {
           return [pair[1], pair[0], 0];
       }
      */


      return [pair[0], pair[1], 0]; //return pair;
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
        pairs.push([all_coins[i], all_coins[k], 0]);
      }
    }

    pairs = this._SortFilterPairs(pairs);
    let allMarketStats = _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().allMarketStats;
    if (allMarketStats.size == 0) return pairs;

    for (let i = 0; i < pairs.length - 1; i++) {
      let volume_usdt = 0;
      volume_usdt = this.getVolumeUSDT(pairs[i][0], pairs[i][1]);
      pairsNew.push([pairs[i][0], pairs[i][1], volume_usdt]);
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
    } = this.state; //return <LoadingIndicator/>;

    let validMarkets = 0;
    let markets = [];
    let markets2 = [];

    if (marketStats !== undefined && marketStats.size !== 0) {
      markets = featuredMarkets.sort(function (a, b) {
        return b[2] * 1 - a[2] * 1;
      }).map(pair => {
        // HACK: Show all defined markets
        validMarkets++;
        let className = "";
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MarketCard__WEBPACK_IMPORTED_MODULE_2__["default"] //key={pair[0] + "_" + pair[1]}
        , {
          marketId: pair[1] + "_" + pair[0],
          className: className,
          quote: pair[0],
          base: pair[1],
          volumeUSDT: pair[2],
          invert: pair[3],
          history: this.props.history //hide={validMarkets > 40}

        });
      });
    } else {
      markets2 = featuredMarkets.sort(function (a, b) {
        return b[2] * 1 - a[2] * 1;
      }).map(pair => {
        // HACK: Show all defined markets
        validMarkets++;
        let className = "";
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MarketCard__WEBPACK_IMPORTED_MODULE_2__["default"] //key={pair[0] + "_" + pair[1]}
        , {
          marketId: pair[1] + "_" + pair[0],
          className: className,
          quote: pair[0],
          base: pair[1],
          volumeUSDT: pair[2],
          invert: pair[3],
          history: this.props.history //hide={validMarkets > 40}

        });
      });
    }

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
      className: "block-content-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        padding: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "exchange.volume_24",
      component: "h1"
    }), " $", common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(this.state.volume24_usdt, 2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-up-1 medium-up-3 large-up-4  no-overflow fm-outer-container"
    }, this.state.volume24_usdt === 0 ? null : markets)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-up-1 medium-up-3 large-up-4  no-overflow fm-outer-container",
      style: {
        display: "none"
      }
    }, markets2)));
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

/***/ 3368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1939);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2064);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2315);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2314);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1816);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(607);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(621);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1825);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_SettingsActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(657);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(656);


















class MarketCard extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    quote: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired,
    base: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAsset.isRequired,
    invert: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool)
  };
  static defaultProps = {
    invert: true
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
      volumeUSDT: this.props.volumeUSDT
    };
  }

  _toggleMarket(e, quote, base) {
    if (e) {
      e.preventDefault();
    }

    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.defer(base, quote); //let marketStats = MarketsStore.getState().allMarketStats;

    let marketStats = stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().allMarketStats.get(`${quote.get("symbol")}_${base.get("symbol")}`);
    this.statsInterval = setInterval(actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.bind(this, base, quote), 30 * 1000);
    this.setState({
      base: quote,
      quote: base,
      marketStats: marketStats
    });
  }

  _checkStats(newStats = {
    close: {}
  }, oldStats = {
    close: {}
  }) {
    //console.log("Check update: " + JSON.stringify(newStats));
    return newStats.volumeQuote !== oldStats.volumeQuote || !common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].are_equal_shallow(newStats.close && newStats.close.base, oldStats.close && oldStats.close.base) || !common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].are_equal_shallow(newStats.close && newStats.close.quote, oldStats.close && oldStats.close.quote);
  }

  shouldComponentUpdate(np, ns) {
    return (//this._checkStats(np.marketStats, this.props.marketStats) ||
      this._checkStats(ns.marketStats, this.state.marketStats) || ns.imgError !== this.state.imgError || ns.starredMarkets !== this.state.starredMarkets || ns.base.get("id") !== this.state.base.get("id") || ns.quote.get("id") !== this.state.quote.get("id") ||
      /*np.base.get("id") !== this.props.base.get("id") ||
      np.quote.get("id") !== this.props.quote.get("id") ||*/
      ns.volumeUSDT !== this.state.volumeUSDT //||
      //np.volumeUSDT !== this.props.volumeUSDT

    );
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (nextProps.quote.get("symbol") !== this.state.quote.get("symbol") || nextProps.base.get("symbol") !== this.state.base.get("symbol")) {
      this.setState({
        quote: nextProps.quote,
        base: nextProps.base
      });
    }

    if (nextProps.volumeUSDT !== this.state.volumeUSDT) {
      console.log("Will be update VOLUME: " + nextProps.volumeUSDT);
      this.setState({
        volumeUSDT: nextProps.volumeUSDT
      });
    }
  }

  UNSAFE_componentWillMount() {
    /*        MarketsActions.getMarketStats.defer(this.props.quote, this.props.base);
            this.statsInterval = setInterval(
                MarketsActions.getMarketStats.bind(
                    this,
                    /!*this.props.quote,
                    this.props.base*!/
                    this.state.quote,
                    this.state.base
                ),
                30 * 1000
            );
             let marketStats = MarketsStore.getState().allMarketStats;
             this.setState({
                marketStats: marketStats
            });*/
    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.defer(this.state.quote, this.state.base); //let marketStats = MarketsStore.getState().allMarketStats;

    let marketStats = stores_MarketsStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().allMarketStats.get(`${this.state.base.get("symbol")}_${this.state.quote.get("symbol")}`);
    this.statsInterval = setInterval(actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].getMarketStats.bind(this,
    /*this.props.quote,
    this.props.base*/
    this.state.quote, this.state.base), 30 * 1000);
    this.setState({
      ///base: quote,
      ///quote: base,
      marketStats: marketStats
    });
  }

  componentWillUnmount() {//clearInterval(this.statsInterval);
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
      isLowVolume //base,
      //quote,
      //volumeUSDT,

    } = this.props;
    let {
      base,
      quote,
      marketStats,
      volumeUSDT
    } = this.state;
    if (isLowVolume || hide) return null; //marketStats = marketStats.get(`${this.state.base.get("symbol")}_${this.state.quote.get("symbol")}`);

    if (!marketStats || marketStats.volumeQuote <= 0) return null;

    function getImageName(asset) {
      if (asset === null) return null;
      let symbol = asset.get("symbol");
      if (symbol.startsWith("RUDEX.")) return symbol;
      if ((0,_branding__WEBPACK_IMPORTED_MODULE_10__.get_allTokens)().nativeTokens.indexOf(symbol) !== -1 || symbol == "DONATE" || symbol == "DEXBOT") return symbol;
      return "unknown";
    }

    let imgName = getImageName(base);
    let changeClass = !marketStats ? "" : parseFloat(marketStats.change) > 0 ? "change-up" : parseFloat(marketStats.change) < 0 ? "change-down" : "";
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
      }
      /*to={`/market/${base.get("symbol")}_${quote.get("symbol")}`}*/
      ,
      "data-intro": counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("walkthrough.switch_button"),
      style: {
        padding: "0px 5px 0px 5px",
        display: "inline",
        cursor: "pointer"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "shuffle",
      name: "shuffle",
      title: "icons.shuffle"
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
      title: "icons.fi_star.market"
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
    }, marketStats && marketStats.price ? common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].price_text(marketStats.price.toReal(), base, quote) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fm-volume"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "exchange.volume"
    }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "float-right"
    }, !marketStats ? null : common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].format_volume(marketStats.volumeQuote, quote.get("precision")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
    }, !marketStats ? null : marketStats.change, "%")))));
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

/***/ 3364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1816);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1917);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2530);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(589);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(656);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2809);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3365);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2068);
/* harmony import */ var _DashboardRuDEX_Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3367);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(621);












class DashboardPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      myActiveAccounts,
      myHiddenAccounts,
      accountsReady,
      passwordAccount,
      preferredBases
    } = this.props;

    if (!accountsReady) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    }

    let accountCount = myActiveAccounts.size + myHiddenAccounts.size + (passwordAccount ? 1 : 0);
    /*        if (!accountCount) {
        return <LoginSelector />;
    }*/

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block page-layout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block no-padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content app-tables no-padding",
      ref: "appTables"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block small-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tabs-container generic-bordered-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__.Tabs, {
      defaultActiveTab: 0,
      segmented: false,
      setting: "dashboardTab",
      className: "account-tabs",
      tabsClass: "account-overview no-padding bordered-header content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__.Tab, {
      title: "dashboard.top_markets"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DashboardRuDEX_Dashboard__WEBPACK_IMPORTED_MODULE_9__["default"], this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__.Tab, {
      title: "dashboard.starred_markets"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Markets__WEBPACK_IMPORTED_MODULE_7__.StarredMarkets, null)), preferredBases.map(imgName => {
      let title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        className: "column-hide-small",
        style: {
          maxWidth: 30,
          marginRight: 5
        },
        src: (0,branding__WEBPACK_IMPORTED_MODULE_10__.getMyMarketsQuotes)().indexOf(imgName) !== -1 ? `${""}asset-symbols/${imgName.toLowerCase()}.png` : "asset-symbols/unknown.png"
      }), "\xA0", imgName.replace("RUDEX.", ""));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__.Tab, {
        key: imgName,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Markets__WEBPACK_IMPORTED_MODULE_7__.FeaturedMarkets, {
        quotes: [imgName].concat((0,common_gateways__WEBPACK_IMPORTED_MODULE_8__.getPossibleGatewayPrefixes)([imgName]))
      }));
    })))))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(DashboardPage, {
  listenTo() {
    return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
  },

  getProps() {
    let {
      myActiveAccounts,
      myHiddenAccounts,
      passwordAccount,
      accountsLoaded,
      refsLoaded
    } = stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState();
    return {
      myActiveAccounts,
      myHiddenAccounts,
      passwordAccount,
      accountsReady: accountsLoaded && refsLoaded,
      preferredBases: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().preferredBases
    };
  }

}));

/***/ }),

/***/ 3365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarredMarkets": () => (/* binding */ StarredMarkets),
/* harmony export */   "FeaturedMarkets": () => (/* binding */ FeaturedMarkets),
/* harmony export */   "TopMarkets": () => (/* binding */ TopMarkets)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(521);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1816);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(656);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2314);
/* harmony import */ var _MarketsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3366);




 // import SettingsActions from "actions/SettingsActions";




class StarredMarkets extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MarketsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      markets: this.props.starredMarkets,
      forceDirection: true,
      isFavorite: true
    });
  }

}

StarredMarkets = (0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(StarredMarkets, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    return {
      starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().starredMarkets
    };
  }

});

class FeaturedMarkets extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    let chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__.Apis.instance().chain_id;
    if (chainID) chainID = chainID.substr(0, 8);
    this.state = {
      chainID,
      markets: []
    };
    this._getMarkets = this._getMarkets.bind(this);
    this.update = this.update.bind(this);
  }

  _getMarkets(state = this.state, props = this.props) {
    const {
      chainID
    } = state;

    if (chainID === "7fcf452d") {
      return props.markets;
    } else {
      // assume testnet
      return [["TEST", "PEG.FAKEUSD"], ["TEST", "BTWTY"]];
    }
  }

  shouldComponentUpdate(nextProps) {
    return !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextProps, this.props);
  }

  UNSAFE_componentWillMount() {
    this.update();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.update(nextProps);
  }

  update(props = this.props) {
    let markets = this._getMarkets(this.state, props);

    markets = markets.filter(market => {
      /* Only use markets corresponding to the current tab */
      return props.quotes[0] === market.base;
    });
    /* Add the possible gateway assets */

    for (var i = 1; i < props.quotes.length; i++) {
      markets.forEach(m => {
        let obj = {
          quote: m.quote,
          base: props.quotes[i]
        };
        let marketKey = `${obj.quote}_${obj.base}`;

        if (obj.quote !== obj.base && !markets.has(marketKey) && obj.base !== "RUDEX.RUBLE" && props.quotes[i] === "RUBLE") {
          markets = markets.set(marketKey, obj);
        }
      });
    }

    this.setState({
      markets
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MarketsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      markets: this.state.markets,
      showFlip: false,
      isFavorite: false
    });
  }

}

FeaturedMarkets = (0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(FeaturedMarkets, {
  listenTo() {
    return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    let userMarkets = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().userMarkets;
    let defaultMarkets = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().defaultMarkets;

    if (userMarkets.size) {
      userMarkets.forEach((market, key) => {
        if (!defaultMarkets.has(key)) defaultMarkets = defaultMarkets.set(key, market);
      });
    }

    return {
      markets: defaultMarkets
    };
  }

});

class TopMarkets extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MarketsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      markets: []
    });
  }

}



/***/ }),

/***/ 3366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1816);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(437);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2314);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(657);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(656);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(607);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2798);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1825);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2064);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2073);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(621);

















class MarketsTable extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      filter: "",
      showFlip: false,
      showHidden: false,
      markets: []
    };
    this.update = this.update.bind(this);

    for (let key in this.sortFunctions) {
      this.sortFunctions[key] = this.sortFunctions[key].bind(this);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.update(nextProps);
  }

  UNSAFE_componentWillMount() {
    this.update();
    bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.subscribe(this.update);
  }

  componentWillUnmount() {
    bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.unsubscribe(this.update);
  }

  update(nextProps = null) {
    let props = nextProps || this.props;
    let showFlip = props.forceDirection;

    if (props.markets && props.markets.size > 0) {
      let markets = props.markets.toArray().map(market => {
        let quote = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(market.quote);
        let base = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(market.base);
        if (!base || !quote) return null;
        let marketName = `${market.base}_${market.quote}`;
        return {
          key: marketName,
          inverted: undefined,
          quote: market.quote,
          base: market.base,
          basePrecision: base.get("precision"),
          isHidden: props.hiddenMarkets.includes(marketName),
          isFavorite: props.isFavorite,
          marketStats: props.allMarketStats.get(`${market.quote}_${market.base}`, {}),
          isStarred: this.props.starredMarkets.has(marketName)
        };
      }).filter(a => a !== null);
      this.setState({
        showFlip,
        markets
      });
    }
  }

  _toggleShowHidden(val) {
    if (this.state.showHidden === val) return;
    this.setState({
      showHidden: val
    });
  }

  _handleFilterInput(e) {
    e.preventDefault();
    this.setState({
      filter: e.target.value.toUpperCase()
    });
  }

  _handleHide(row, status) {
    if (this.props.handleHide) {
      return this.props.handleHide(row, status);
    }

    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].hideMarket(row.key, status);
  }

  _handleFlip(row, status) {
    if (this.props.handleFlip) {
      return this.props.handleFlip(row, status);
    }

    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeMarketDirection({
      [row.key]: status
    });
  }

  sort(aPrice, bPrice) {
    const convert = price => {
      price = price.replace(/\,/g, "");
      if (price.includes("k")) price = price.replace(/k/g, "") * 1000;
      if (price.includes("M")) price = price.replace(/M/g, "") * 1000 * 1000;
      return price;
    };

    aPrice = convert(aPrice);
    bPrice = convert(bPrice);

    if (aPrice === null && bPrice !== null) {
      return 1;
    } else if (aPrice !== null && bPrice === null) {
      return -1;
    } else {
      return aPrice - bPrice;
    }
  }

  sortFunctions = {
    alphabetic: function (a, b, force) {
      if (a.key > b.key) return force ? 1 : -1;
      if (a.key < b.key) return force ? -1 : 1;
      return 0;
    },
    priceValue: function (a, b) {
      let aPrice = a.price.props.children;
      let bPrice = b.price.props.children;

      if (aPrice && bPrice) {
        return this.sort(aPrice, bPrice);
      } else {
        return this.sortFunctions.alphabetic(a, b, true);
      }
    },
    volumeValue: function (a, b) {
      let aPrice = a.volume || 0;
      let bPrice = b.volume || 0;
      let compared = 0;

      if (aPrice && bPrice) {
        compared = aPrice - bPrice;
      }

      if (compared == 0) {
        return this.sortFunctions.alphabetic(a, b, true);
      } else {
        return compared;
      }
    },
    changeValue: function (a, b) {
      let aValue = parseFloat(a.hour_24);
      let bValue = parseFloat(b.hour_24);
      let compared = 0;

      if (aValue && bValue && !isNaN(aValue) && !isNaN(bValue)) {
        compared = aValue - bValue;
      }

      if (compared == 0) {
        return this.sortFunctions.alphabetic(a, b, true);
      } else {
        return compared;
      }
    }
  };

  getHeader() {
    const {
      showFlip,
      showHidden
    } = this.state;
    return [{
      dataIndex: "star",
      align: "right",
      width: "75px",
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            whiteSpace: "nowrap",
            cursor: "pointer"
          }
        }, item);
      }
    }, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: "account.asset"
      }),
      dataIndex: "asset",
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            whiteSpace: "nowrap"
          }
        }, item);
      }
    }, this.props.isFavorite ? {} : {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: "account.user_issued_assets.quote_name"
      }),
      dataIndex: "quote_name",
      align: "right",
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            whiteSpace: "nowrap"
          }
        }, item);
      }
    }, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: "exchange.price"
      }),
      dataIndex: "price",
      align: "right",
      sorter: this.sortFunctions.priceValue,
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            whiteSpace: "nowrap"
          }
        }, item);
      }
    }, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: "account.hour_24_short"
      }),
      dataIndex: "hour_24",
      align: "right",
      sorter: this.sortFunctions.changeValue,
      render: (text, record, index) => {
        const changeClass = parseFloat(record.hour_24) > 0 ? "change-up" : parseFloat(record.hour_24) < 0 ? "change-down" : "";
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            whiteSpace: "nowrap",
            textAlign: "right"
          },
          className: changeClass
        }, record.hour_24, "%");
      }
    }, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: "exchange.volume"
      }),
      dataIndex: "volume",
      align: "right",
      sorter: this.sortFunctions.volumeValue,
      defaultSortOrder: "descend",
      render: (text, record, index) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            whiteSpace: "nowrap"
          }
        }, common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].format_volume(record.volume, record.basePrecision));
      }
    }, showFlip ? {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: "exchange.flip"
      }),
      dataIndex: "flip",
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "column-hide-small",
          style: {
            whiteSpace: "nowrap"
          }
        }, item);
      }
    } : {}, {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
        content: !showHidden ? "exchange.hide" : "account.perm.show"
      }),
      dataIndex: "hide",
      render: item => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            whiteSpace: "nowrap",
            cursor: "pointer"
          }
        }, item);
      }
    }];
  }

  _setInterval(nextProps = null) {
    let {
      base,
      quote
    } = nextProps || this.props;
    this.statsChecked = new Date();
    this.statsInterval = MarketsActions.getMarketStatsInterval(35 * 1000, base, quote);
  }

  _clearInterval() {
    if (this.statsInterval) this.statsInterval();
  }

  _onError(imgName) {
    if (!this.state.imgError) {
      this.refs[imgName.toLowerCase()].src = "asset-symbols/unknown.png";
      this.setState({
        imgError: true
      });
    }
  }

  _toggleFavoriteMarket(quote, base) {
    let marketID = `${quote}_${base}`;

    if (!this.props.starredMarkets.has(marketID)) {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].addStarMarket(quote, base);
    } else {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].removeStarMarket(quote, base);
    }
  }

  getTableData(row) {
    let {
      base,
      quote,
      marketStats,
      isHidden,
      inverted,
      basePrecision
    } = row;
    let imgName = (0,branding__WEBPACK_IMPORTED_MODULE_13__.getImageName)(quote);
    let marketID = `${quote}_${base}`;
    const starClass = this.props.starredMarkets.has(marketID) ? "gold-star" : "grey-star";
    return {
      key: marketID,
      star: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        onClick: this._toggleFavoriteMarket.bind(this, quote, base)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          cursor: "pointer"
        },
        className: starClass,
        name: "fi-star",
        title: "icons.fi_star.market"
      })),
      asset: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
        to: `/market/${quote}_${base}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        ref: imgName.toLowerCase(),
        className: "column-hide-small",
        onError: this._onError.bind(this, imgName),
        style: {
          maxWidth: 20,
          marginRight: 10
        },
        src: `${""}asset-symbols/${imgName.toLowerCase()}.png`
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
        dataPlace: "top",
        name: quote
      }), "\xA0", this.props.isFavorite ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, ":\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
        dataPlace: "top",
        name: base
      })) : null),
      quote_name: this.props.isFavorite ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          textAlign: "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], {
        noTip: true,
        name: base
      })),
      price: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "column-hide-small",
        style: {
          textAlign: "right"
        }
      }, marketStats && marketStats.price ? common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].price_text(marketStats.price.toReal(false), bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(quote), bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(base)) : null),
      hour_24: !marketStats || !marketStats.change || marketStats.change === "0.00" ? 0 : marketStats.change,
      volume: !marketStats || !marketStats.volumeBase ? 0 : marketStats.volumeBase,
      flip: inverted === null || !this.props.isFavorite ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "column-hide-small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        onClick: this._handleFlip.bind(this, row, !row.inverted)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "shuffle",
        title: "icons.shuffle"
      }))),
      hide: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Tooltip, {
        title: isHidden ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
          content: "icons.plus_circle.show_market"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
          content: "icons.cross_circle.hide_market"
        }),
        style: {
          marginRight: 0
        },
        onClick: this._handleHide.bind(this, row, !row.isHidden)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: isHidden ? "plus-circle" : "cross-circle",
        title: isHidden ? "icons.plus_circle.show_market" : "icons.cross_circle.hide_market",
        className: "icon-14px"
      })),
      basePrecision: basePrecision
    };
  }

  render() {
    let {
      markets,
      showHidden,
      filter
    } = this.state;
    const marketRows = markets.filter(m => {
      if (!!filter || m.isStarred) return true;

      if (this.props.onlyLiquid // ||
      //(m.marketStats && "volumeBase" in m.marketStats)
      ) {
        return !!m.marketStats.volumeQuote || false;
      } else {
        return true;
      }
    }).map(row => {
      let visible = true;

      if (row.isHidden !== this.state.showHidden) {
        visible = false;
      } else if (filter) {
        const quoteObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(row.quote);
        const baseObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.getAsset(row.base);
        const {
          isBitAsset: quoteIsBitAsset
        } = common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].replaceName(quoteObject);
        const {
          isBitAsset: baseIsBitAsset
        } = common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].replaceName(baseObject);
        let quoteSymbol = row.quote;
        let baseSymbol = row.base;

        if (quoteIsBitAsset) {
          quoteSymbol = "bit" + quoteSymbol;
        }

        if (baseIsBitAsset) {
          baseSymbol = "bit" + baseSymbol;
        }

        const filterPair = filter.includes(":");

        if (filterPair) {
          const quoteFilter = filter.split(":")[0].trim();
          const baseFilter = filter.split(":")[1].trim();
          visible = quoteSymbol.toLowerCase().includes(String(quoteFilter).toLowerCase()) && baseSymbol.toLowerCase().includes(String(baseFilter).toLowerCase());
        } else {
          visible = quoteSymbol.toLowerCase().includes(String(filter).toLowerCase()) || baseSymbol.toLowerCase().includes(String(filter).toLowerCase());
        }
      }

      if (!visible) return null;
      return this.getTableData({ ...row
      });
    }).filter(r => !!r);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-selector"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter inline-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Input, {
      type: "text",
      placeholder: "Filter...",
      onChange: this._handleFilterInput.bind(this),
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Icon, {
        type: "search"
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "selector inline-block",
      style: {
        position: "relative",
        top: "6px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("inline-block", {
        inactive: showHidden
      }),
      onClick: this._toggleShowHidden.bind(this, false)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "account.hide_hidden"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("inline-block", {
        inactive: !showHidden
      }),
      onClick: this._toggleShowHidden.bind(this, true)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "account.show_hidden"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: "0.5rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        margin: "3px 0 0",
        width: "fit-content"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      style: {
        position: "relative",
        top: 3
      },
      className: "no-margin",
      type: "checkbox",
      checked: this.props.onlyLiquid,
      onChange: () => {
        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].changeViewSetting({
          onlyLiquid: !this.props.onlyLiquid
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        paddingLeft: "0.4rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "exchange.show_only_liquid"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      style: {
        paddingLeft: 0,
        paddingRight: 0
      },
      className: "table dashboard-table table-hover",
      header: this.getHeader(),
      rows: marketRows.length ? marketRows : [],
      pageSize: 20,
      label: "utility.total_x_markets",
      leftPadding: "1.5rem"
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(MarketsTable, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
  },

  getProps() {
    let {
      marketDirections,
      hiddenMarkets
    } = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState();
    return {
      marketDirections,
      hiddenMarkets,
      allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().allMarketStats,
      starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().starredMarkets,
      onlyLiquid: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().viewSettings.get("onlyLiquid", true)
    };
  }

}));

/***/ }),

/***/ 2798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaginatedList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2799);




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

/***/ 2809:
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2074);








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

/***/ 2799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLjk0YmJiY2U5YjVmYzZjZmJjYzYzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWxCQTtBQXFCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQUlBOztBQUdBO0FBRUE7QUFFQTtBQUlBOztBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVlBO0FBRUE7QUFDQTtBQWZBO0FBbUJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFJQTs7QUFFQTtBQUdBO0FBQ0E7QUFJQTtBQUNBOztBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFDQTs7QUFHQTtBQUNBOzs7QUFJQTtBQWdCQTtBQWhCQTtBQW1CQTtBQUNBOzs7QUFJQTtBQUVBO0FBRkE7QUFPQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUdBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBT0E7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJBO0FBWUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTtBQVlBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFEQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFXQTs7QUE3YkE7O0FBZ2NBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBVEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVZBO0FBYUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFJQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQVdBOztBQUVBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFFQTtBQUNBOztBQWZBO0FBaUJBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUdBO0FBR0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBR0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7O0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7O0FBS0E7O0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQU9BO0FBQ0E7O0FBRUE7QUFFQTtBQVNBO0FBRUE7QUFJQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWVBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFWQTtBQWVBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBV0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBVUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBVUE7O0FBalpBOztBQW9aQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7O0FBWEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoYkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFHQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQWlCQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFTQTtBQVFBOztBQWxGQTs7QUFxRkE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7O0FBcEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7QUFUQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBOztBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7QUEzRUE7O0FBOEVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQWxCQTs7QUFxQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBWkE7QUFjQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTs7QUEyQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQVZBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBREE7QUFRQTtBQWJBO0FBa0JBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQVZBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQU9BO0FBcEJBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFmQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFaQTtBQWdCQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBU0E7QUFwQkE7QUF1QkE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFNQTtBQUlBO0FBRUE7QUFBQTtBQUVBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUtBO0FBUEE7QUFXQTtBQWhHQTtBQWtHQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOztBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQU9BO0FBQ0E7O0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7O0FBeGpCQTs7QUEyakJBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBOztBQWhCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1a0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBZEE7O0FBaUJBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQU1BO0FBcEJBO0FBeUJBOztBQXBGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFRQTs7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVNBO0FBQUE7QUFJQTtBQUFBO0FBSUE7O0FBMUVBOztBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFPQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQU1BO0FBWkE7QUFxQkE7QUFBQTtBQU1BO0FBQUE7QUFLQTs7QUE3SkE7O0FBZ0tBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBTkE7QUFTQTs7Ozs7Ozs7O0FDaFJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkUnVERVgvRGFzaGJvYXJkLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmRSdURFWC9NYXJrZXRDYXJkLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkUGFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL01hcmtldHMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9NYXJrZXRzVGFibGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUGFnaW5hdGVkTGlzdC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UYWJzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L3BhZ2luYXRlZC1saXN0LnNjc3M/MzYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgTWFya2V0Q2FyZCBmcm9tIFwiLi9NYXJrZXRDYXJkXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL01hcmtldHNTdG9yZVwiO1xuXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmltcG9ydCB7Z2V0TXlNYXJrZXRzUXVvdGVzLCBnZXRGZWF0dXJlZE1hcmtldHN9IGZyb20gXCJicmFuZGluZ1wiO1xuXG5pbXBvcnQgXCIuL0Rhc2hib2FyZFJ1REVYLmNzc1wiO1xuXG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy9sZXQgbWFya2V0c0J5Q2hhaW4gPSB7XG4gICAgICAgIC8vXCI3ZmNmNDUyZFwiOiBnZXRGZWF0dXJlZE1hcmtldHMoKVxuICAgICAgICAvLy8vICAgIFwiN2ZjZjQ1MmRcIjogdGhpcy5nZXRBbGxQYWlycygpXG4gICAgICAgIC8vXCI3ZmNmNDUyZFwiOiBbXVxuICAgICAgICAvL307XG5cbiAgICAgICAgLy9sZXQgY2hhaW5JRCA9IEFwaXMuaW5zdGFuY2UoKS5jaGFpbl9pZDtcbiAgICAgICAgLy9pZiAoY2hhaW5JRCkgY2hhaW5JRCA9IGNoYWluSUQuc3Vic3RyKDAsIDgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICAgIC8vZmVhdHVyZWRNYXJrZXRzOlxuICAgICAgICAgICAgLy9tYXJrZXRzQnlDaGFpbltjaGFpbklEXSB8fCBtYXJrZXRzQnlDaGFpbltcIjdmY2Y0NTJkXCJdLFxuICAgICAgICAgICAgbWFya2V0U3RhdHM6IHRoaXMucHJvcHMubWFya2V0U3RhdHMsXG5cbiAgICAgICAgICAgIGZlYXR1cmVkTWFya2V0czogW10sXG5cbiAgICAgICAgICAgIHZvbHVtZTI0X3VzZHQ6IDAsXG5cbiAgICAgICAgICAgIHVwZGF0ZWRDb3VudDogMCxcbiAgICAgICAgICAgIC8vYXJyVm9sdW1lMjQ6IHt9LFxuICAgICAgICAgICAgYXJyVm9sdW1lMjQ6IFtdLFxuXG4gICAgICAgICAgICBtYXJrZXRzOiBbXSxcbiAgICAgICAgICAgIHVwZGF0aW5nOiB0cnVlLFxuXG4gICAgICAgICAgICB0aW1lT3V0SUQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvdW50OiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5waW5nTWFya2V0cyA9IHRoaXMucGluZ01hcmtldHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgLy9sZXQgZGF0YSA9IHRoaXMuZ2V0QWxsUGFpcnMoKTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNhbGNWb2x1bWVTb3J0KCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmZWF0dXJlZE1hcmtldHM6IGRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTsqL1xuXG5cbiAgICAgICAgbGV0IHRpbWVPdXRJRCA9IHNldFRpbWVvdXQodGhpcy5waW5nTWFya2V0cywgNTAwMCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aW1lT3V0SUQ6IHRpbWVPdXRJRFxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgcGluZ01hcmtldHMoKSB7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm1hcmtldCBQaW5nLi4uXCIpO1xuXG4gICAgICAgIGxldCBhbGxNYXJrZXRTdGF0cyA9IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJwaW5nTWFya2V0cyBhbGxNYXJrZXRTdGF0cy5zaXplOiBcIiArIGFsbE1hcmtldFN0YXRzLnNpemUpO1xuXG4gICAgICAgIC8vaWYgKGFsbE1hcmtldFN0YXRzLnNpemUgPT0gNjUwKSB7XG4gICAgICAgIGlmIChhbGxNYXJrZXRTdGF0cy5zaXplICE9PSAwKSB7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5jYWxjVm9sdW1lU29ydCgpO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FsY1ZvbHVtZVNvcnQgZnJvbSBQaW5nICEhIVwiKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmVhdHVyZWRNYXJrZXRzOiBkYXRhLFxuICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzOiBhbGxNYXJrZXRTdGF0cyxcbiAgICAgICAgICAgICAgICB1cGRhdGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZmVhdHVyZWRNYXJrZXRzIGZyb20gUGluZzogXCIgKyBKU09OLnN0cmluZ2lmeShhbGxNYXJrZXRTdGF0cykpO1xuXG4gICAgICAgICAgICAvL2NsZWFyVGltZW91dCh0aGlzLnN0YXRlLnRpbWVPdXRJRCk7XG5cbiAgICAgICAgICAgIC8vcmV0dXJuO1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGltZU91dElEID0gc2V0VGltZW91dCh0aGlzLnBpbmdNYXJrZXRzLCA1MDAwKTtcblxuXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuc3RhdGUuY291bnQgKyAxO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGltZU91dElEOiB0aW1lT3V0SUQsXG4gICAgICAgICAgICBjb3VudDogY291bnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG5cbiAgICAgICAgLyppZiAobmV4dFN0YXRlLnVwZGF0aW5nID09IGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7Ki9cbiAgICAgICAgLy9yZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5mZWF0dXJlZE1hcmtldHMsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlZE1hcmtldHNcbiAgICAgICAgICAgICkgfHxcblxuICAgICAgICAgICAgbmV4dFByb3BzLm1hcmtldFN0YXRzICE9PSB0aGlzLnByb3BzLm1hcmtldFN0YXRzIHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUubWFya2V0U3RhdHMgIT09IHRoaXMuc3RhdGUubWFya2V0U3RhdHMgfHxcblxuICAgICAgICAgICAgbmV4dFN0YXRlLnZvbHVtZTI0X3VzZHQgIT09IHRoaXMuc3RhdGUudm9sdW1lMjRfdXNkdCB8fFxuICAgICAgICAgICAgbmV4dFN0YXRlLndpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoIC8vfHxcbiAgICAgICAgICAgIC8vbmV4dFN0YXRlLnVwZGF0aW5nICE9PSB0aGlzLnN0YXRlLnVwZGF0aW5nIHx8XG5cbiAgICAgICAgICAgIC8vbmV4dFN0YXRlLnRpbWVPdXRJRCAhPT0gdGhpcy5zdGF0ZS50aW1lT3V0SUQgfHxcbiAgICAgICAgICAgIC8vbmV4dFN0YXRlLmNvdW50ICE9PSB0aGlzLnN0YXRlLmNvdW50XG5cblxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zKTtcbiAgICB9XG5cbiAgICBfc2V0RGltZW5zaW9ucygpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Vm9sdW1lVVNEVChxdW90ZSwgYmFzZSkge1xuXG4gICAgICAgIGxldCBhbGxNYXJrZXRTdGF0cyA9IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzO1xuXG4gICAgICAgIGxldCBtYXJrZXRTdGF0czEgPSBhbGxNYXJrZXRTdGF0cy5nZXQoYCR7cXVvdGV9XyR7YmFzZX1gKTtcbiAgICAgICAgbGV0IHZvbHVtZV91c2R0ID0gMDtcblxuICAgICAgICBpZiAobWFya2V0U3RhdHMxICYmIHF1b3RlID09IFwiUlVERVguVVNEVFwiKSB7XG4gICAgICAgICAgICB2b2x1bWVfdXNkdCA9IG1hcmtldFN0YXRzMS52b2x1bWVRdW90ZSAqIDE7XG4gICAgICAgIH0gZWxzZSB7XG5cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbWFya2V0U3RhdHMyID0gYWxsTWFya2V0U3RhdHMuZ2V0KGBSVURFWC5VU0RUXyR7cXVvdGV9YCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJpY2U7XG4gICAgICAgICAgICAgICAgaWYgKG1hcmtldFN0YXRzMiAmJiBtYXJrZXRTdGF0czIucHJpY2UgJiYgbWFya2V0U3RhdHMyLnByaWNlLnF1b3RlLmFtb3VudCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaWNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICgobWFya2V0U3RhdHMyLnByaWNlLnF1b3RlLmFtb3VudCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHMyLnByaWNlLmJhc2UuYW1vdW50KSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coMTAsIG1hcmtldFN0YXRzMi5wcmljZS5iYXNlLnByZWNpc2lvbikpIC9cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucG93KDEwLCBtYXJrZXRTdGF0czIucHJpY2UucXVvdGUucHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgICAgICAgICB2b2x1bWVfdXNkdCA9IG1hcmtldFN0YXRzMS52b2x1bWVRdW90ZSAqIHByaWNlICogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgbG9nIGVycm9yICR7cXVvdGV9IC8gJHtiYXNlfSA6IHZvbHVtZV91c2R0OiAke3ZvbHVtZV91c2R0fWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZvbHVtZV91c2R0O1xuICAgIH1cblxuXG4gICAgX1NvcnRGaWx0ZXJQYWlycyhwYWlycykge1xuICAgICAgICBsZXQgc29ydFBhaXJzID0gcGFpcnMubWFwKHBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IGNoZWNrUGFpcnMgPSBnZXRGZWF0dXJlZE1hcmtldHMoKTtcblxuICAgICAgICAgICAgbGV0IHByZWZlcnJlZFBhaXMgPSBbXG4gICAgICAgICAgICAgICAgW1wiUlVERVguVVNEVFwiLCBcIlJVREVYLkJUU1wiXSxcbiAgICAgICAgICAgICAgICBbXCJSVURFWC5VU0RUXCIsIFwiUlVERVguTkJTXCJdXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBsZXQgcmVzID0gY2hlY2tQYWlycy5maW5kKGVsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIChlbFswXSA9PSBwYWlyWzFdKSAmJlxuICAgICAgICAgICAgICAgICAgICAoZWxbMV0gPT0gcGFpclswXSlcbiAgICAgICAgICAgICAgICApIHtcblxuICAgICAgICAgICAgICAgICAgICAvKmlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbFswXSA9PSBwYWlyWzBdKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKGVsWzFdID09IHBhaXJbMV0pXG4gICAgICAgICAgICAgICAgICAgICl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFpcjogXCIgKyBcIiAtIFwiICsgcGFpclswXSArIFwiIC0gXCIgKyBwYWlyWzFdICsgXCIgLSBcIiArIHBhaXJbMl0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSovXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzKSB7XG5cblxuICAgICAgICAgICAgICAgIC8vTm90IGluIDJuZCBwbGFjZVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgcGFpclswXSA9PT0gXCJSVURFWC5VU0RUXCJcblxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3BhaXJbMF0sIHBhaXJbMV0sIDBdO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwYWlyWzFdLCBwYWlyWzBdLCAwXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSB7XG5cblxuICAgICAgICAgICAgICAgIC8vTm90IGluIDJuZCBwbGFjZVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgcGFpclswXSA9PT0gXCJSVURFWC5VU0RUXCJcblxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3BhaXJbMF0sIHBhaXJbMV0sIDBdO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwYWlyWzBdLCBwYWlyWzFdLCAwXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvL05vdCBpbiAybmQgcGxhY2VcbiAgICAgICAgICAgIGlmIChcblxuICAgICAgICAgICAgICAgIHBhaXJbMV0gPT09IFwiUlVERVguVVNEVFwiIHx8XG4gICAgICAgICAgICAgICAgcGFpclsxXSA9PT0gXCJSVURFWC5CVVNEXCIgfHxcblxuICAgICAgICAgICAgICAgIHBhaXJbMV0gPT09IFwiR1BIXCIgfHxcblxuICAgICAgICAgICAgICAgIHBhaXJbMV0gPT09IFwiVVNEXCIgfHxcbiAgICAgICAgICAgICAgICBwYWlyWzFdID09PSBcIkVVUlwiIHx8XG4gICAgICAgICAgICAgICAgcGFpclsxXSA9PT0gXCJSVUJcIiB8fFxuICAgICAgICAgICAgICAgIHBhaXJbMV0gPT09IFwiQ05ZXCIgfHxcbiAgICAgICAgICAgICAgICBwYWlyWzFdID09PSBcIkdPTERcIiB8fFxuICAgICAgICAgICAgICAgIHBhaXJbMV0gPT09IFwiU0lMVkVSXCIgfHxcblxuICAgICAgICAgICAgICAgIHBhaXJbMV0gPT09IFwiUlVERVguQlRTXCIgfHxcbiAgICAgICAgICAgICAgICAvL3BhaXJbMV0gPT09IFwiUlVERVguTkJTXCIgfHxcbiAgICAgICAgICAgICAgICBwYWlyWzFdID09PSBcIlJVREVYLkVPU1wiIC8vfHxcblxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwYWlyWzFdLCBwYWlyWzBdLCAwXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvL05vdCBpbiAxbmQgcGxhY2VcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvL3BhaXJbMV0gPT09IFwiR1BIXCIgfHxcbiAgICAgICAgICAgIHBhaXJbMF0gPT09IFwiUlVERVguWE1SXCIgfHxcbiAgICAgICAgICAgIHBhaXJbMF0gPT09IFwiUlVERVguQlRDXCIgfHxcbiAgICAgICAgICAgIHBhaXJbMF0gPT09IFwiUlVERVguQlRDQlwiIC8vfHxcblxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwYWlyWzFdLCBwYWlyWzBdLCAwXTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvL05vdCBpbiAxbmQgcGxhY2VcbiAgICAgICAgICAgIC8qIGlmIChcbiAgICAgICAgICAgICAgICAgLy9wYWlyWzBdID09PSBcIlJVREVYLkJUU1wiIHx8IC8vMlxuICAgICAgICAgICAgICAgICAvL3BhaXJbMF0gPT09IFwiUlVERVguTkJTXCJcbiAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIFtwYWlyWzFdLCBwYWlyWzBdLCAwXTtcbiAgICAgICAgICAgICB9XG4gKi9cblxuICAgICAgICAgICAgcmV0dXJuIFtwYWlyWzBdLCBwYWlyWzFdLCAwXTtcbiAgICAgICAgICAgIC8vcmV0dXJuIHBhaXI7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNvcnRQYWlycztcbiAgICB9XG5cbiAgICBjYWxjVm9sdW1lU29ydCgpIHtcbiAgICAgICAgbGV0IHBhaXJzID0gW107XG4gICAgICAgIGxldCBwYWlyc05ldyA9IFtdO1xuICAgICAgICBsZXQgdm9sdW1lMjRfdXNkdCA9IDA7XG5cbiAgICAgICAgbGV0IGFsbF9jb2lucyA9IGdldE15TWFya2V0c1F1b3RlcygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsX2NvaW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IGkgKyAxOyBrIDwgYWxsX2NvaW5zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaChbYWxsX2NvaW5zW2ldLCBhbGxfY29pbnNba10sIDBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhaXJzID0gdGhpcy5fU29ydEZpbHRlclBhaXJzKHBhaXJzKTtcblxuICAgICAgICBsZXQgYWxsTWFya2V0U3RhdHMgPSBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cztcblxuICAgICAgICBpZiAoYWxsTWFya2V0U3RhdHMuc2l6ZSA9PSAwKSByZXR1cm4gcGFpcnM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2b2x1bWVfdXNkdCA9IDA7XG5cbiAgICAgICAgICAgIHZvbHVtZV91c2R0ID0gdGhpcy5nZXRWb2x1bWVVU0RUKHBhaXJzW2ldWzBdLCBwYWlyc1tpXVsxXSk7XG4gICAgICAgICAgICBwYWlyc05ldy5wdXNoKFtwYWlyc1tpXVswXSwgcGFpcnNbaV1bMV0sIHZvbHVtZV91c2R0XSk7XG5cbiAgICAgICAgICAgIHZvbHVtZTI0X3VzZHQgPSB2b2x1bWUyNF91c2R0ICsgdm9sdW1lX3VzZHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZvbHVtZTI0X3VzZHQ6IHZvbHVtZTI0X3VzZHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhaXJzTmV3O1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZmVhdHVyZWRNYXJrZXRzLFxuICAgICAgICAgICAgbWFya2V0U3RhdHNcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgLy9yZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IvPjtcblxuICAgICAgICBsZXQgdmFsaWRNYXJrZXRzID0gMDtcblxuICAgICAgICBsZXQgbWFya2V0cyA9IFtdO1xuICAgICAgICBsZXQgbWFya2V0czIgPSBbXTtcblxuICAgICAgICBpZiAobWFya2V0U3RhdHMgIT09IHVuZGVmaW5lZCAmJiBtYXJrZXRTdGF0cy5zaXplICE9PSAwKSB7XG5cbiAgICAgICAgICAgIG1hcmtldHMgPSBmZWF0dXJlZE1hcmtldHNcbiAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYlsyXSAqIDEgLSBhWzJdICogMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAocGFpciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhBQ0s6IFNob3cgYWxsIGRlZmluZWQgbWFya2V0c1xuICAgICAgICAgICAgICAgICAgICB2YWxpZE1hcmtldHMrKztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8va2V5PXtwYWlyWzBdICsgXCJfXCIgKyBwYWlyWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldElkPXtwYWlyWzFdICsgXCJfXCIgKyBwYWlyWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtwYWlyWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e3BhaXJbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lVVNEVD17cGFpclsyXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnQ9e3BhaXJbM119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaGlkZT17dmFsaWRNYXJrZXRzID4gNDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFya2V0czIgPSBmZWF0dXJlZE1hcmtldHNcbiAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYlsyXSAqIDEgLSBhWzJdICogMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAocGFpciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhBQ0s6IFNob3cgYWxsIGRlZmluZWQgbWFya2V0c1xuICAgICAgICAgICAgICAgICAgICB2YWxpZE1hcmtldHMrKztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8va2V5PXtwYWlyWzBdICsgXCJfXCIgKyBwYWlyWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldElkPXtwYWlyWzFdICsgXCJfXCIgKyBwYWlyWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtwYWlyWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e3BhaXJbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lVVNEVD17cGFpclsyXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnQ9e3BhaXJbM119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaGlkZT17dmFsaWRNYXJrZXRzID4gNDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIGRhc2hib2FyZFJ1REVYXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJjb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS51cGRhdGluZyA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1mcmFtZSB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJmb290ZXIubG9hZGluZ1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnJhbWUgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnQtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjFyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uudm9sdW1lXzI0XCIgY29tcG9uZW50PVwiaDFcIi8+ICRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKHRoaXMuc3RhdGUudm9sdW1lMjRfdXNkdCwgMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC11cC0xIG1lZGl1bS11cC0zIGxhcmdlLXVwLTQgIG5vLW92ZXJmbG93IGZtLW91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS52b2x1bWUyNF91c2R0ID09PSAwID8gbnVsbCA6IG1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC11cC0xIG1lZGl1bS11cC0zIGxhcmdlLXVwLTQgIG5vLW92ZXJmbG93IGZtLW91dGVyLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0czJ9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5sZXRcbiAgICBEYXNoYm9hcmRXcmFwcGVyID0gcHJvcHMgPT4ge1xuICAgICAgICByZXR1cm4gPERhc2hib2FyZCB7Li4ucHJvcHN9IC8+O1xuICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFdyYXBwZXIgPSBjb25uZWN0KERhc2hib2FyZFdyYXBwZXIsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBNYXJrZXRzU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aWV3U2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MsXG4gICAgICAgICAgICBtYXJrZXRTdGF0czogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHNcbiAgICAgICAgfTtcbiAgICB9XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7Z2V0X2FsbFRva2Vuc30gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5cbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiLi4vLi4vYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuXG5jbGFzcyBNYXJrZXRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBxdW90ZTogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXG4gICAgICAgIGJhc2U6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxuICAgICAgICBpbnZlcnQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGludmVydDogdHJ1ZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW1nRXJyb3I6IGZhbHNlLFxuXG4gICAgICAgICAgICBiYXNlOiB0aGlzLnByb3BzLmJhc2UsXG4gICAgICAgICAgICBxdW90ZTogdGhpcy5wcm9wcy5xdW90ZSxcblxuICAgICAgICAgICAgbWFya2V0U3RhdHM6IHRoaXMucHJvcHMubWFya2V0U3RhdHMsXG4gICAgICAgICAgICBzdGFycmVkTWFya2V0czogdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cyxcblxuICAgICAgICAgICAgaGlzdG9yeTogdGhpcy5wcm9wcy5oaXN0b3J5LFxuICAgICAgICAgICAgdm9sdW1lVVNEVDogdGhpcy5wcm9wcy52b2x1bWVVU0RULFxuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX3RvZ2dsZU1hcmtldChlLCBxdW90ZSwgYmFzZSkge1xuXG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBNYXJrZXRzQWN0aW9ucy5nZXRNYXJrZXRTdGF0cy5kZWZlcihiYXNlLCBxdW90ZSk7XG5cbiAgICAgICAgLy9sZXQgbWFya2V0U3RhdHMgPSBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cztcbiAgICAgICAgbGV0IG1hcmtldFN0YXRzID0gTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMuZ2V0KFxuICAgICAgICAgICAgYCR7cXVvdGUuZ2V0KFwic3ltYm9sXCIpfV8ke2Jhc2UuZ2V0KFwic3ltYm9sXCIpfWBcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmdldE1hcmtldFN0YXRzLmJpbmQoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgIHF1b3RlXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgMzAgKiAxMDAwXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBiYXNlOiBxdW90ZSxcbiAgICAgICAgICAgIHF1b3RlOiBiYXNlLFxuICAgICAgICAgICAgbWFya2V0U3RhdHM6IG1hcmtldFN0YXRzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGVja1N0YXRzKG5ld1N0YXRzID0ge2Nsb3NlOiB7fX0sIG9sZFN0YXRzID0ge2Nsb3NlOiB7fX0pIHtcblxuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJDaGVjayB1cGRhdGU6IFwiICsgSlNPTi5zdHJpbmdpZnkobmV3U3RhdHMpKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbmV3U3RhdHMudm9sdW1lUXVvdGUgIT09IG9sZFN0YXRzLnZvbHVtZVF1b3RlIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV3U3RhdHMuY2xvc2UgJiYgbmV3U3RhdHMuY2xvc2UuYmFzZSxcbiAgICAgICAgICAgICAgICBvbGRTdGF0cy5jbG9zZSAmJiBvbGRTdGF0cy5jbG9zZS5iYXNlXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgbmV3U3RhdHMuY2xvc2UgJiYgbmV3U3RhdHMuY2xvc2UucXVvdGUsXG4gICAgICAgICAgICAgICAgb2xkU3RhdHMuY2xvc2UgJiYgb2xkU3RhdHMuY2xvc2UucXVvdGVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAvL3RoaXMuX2NoZWNrU3RhdHMobnAubWFya2V0U3RhdHMsIHRoaXMucHJvcHMubWFya2V0U3RhdHMpIHx8XG4gICAgICAgICAgICB0aGlzLl9jaGVja1N0YXRzKG5zLm1hcmtldFN0YXRzLCB0aGlzLnN0YXRlLm1hcmtldFN0YXRzKSB8fFxuXG5cbiAgICAgICAgICAgIG5zLmltZ0Vycm9yICE9PSB0aGlzLnN0YXRlLmltZ0Vycm9yIHx8XG4gICAgICAgICAgICBucy5zdGFycmVkTWFya2V0cyAhPT0gdGhpcy5zdGF0ZS5zdGFycmVkTWFya2V0cyB8fFxuXG4gICAgICAgICAgICBucy5iYXNlLmdldChcImlkXCIpICE9PSB0aGlzLnN0YXRlLmJhc2UuZ2V0KFwiaWRcIikgfHxcbiAgICAgICAgICAgIG5zLnF1b3RlLmdldChcImlkXCIpICE9PSB0aGlzLnN0YXRlLnF1b3RlLmdldChcImlkXCIpIHx8XG5cbiAgICAgICAgICAgIC8qbnAuYmFzZS5nZXQoXCJpZFwiKSAhPT0gdGhpcy5wcm9wcy5iYXNlLmdldChcImlkXCIpIHx8XG4gICAgICAgICAgICBucC5xdW90ZS5nZXQoXCJpZFwiKSAhPT0gdGhpcy5wcm9wcy5xdW90ZS5nZXQoXCJpZFwiKSB8fCovXG5cbiAgICAgICAgICAgIG5zLnZvbHVtZVVTRFQgIT09IHRoaXMuc3RhdGUudm9sdW1lVVNEVCAvL3x8XG4gICAgICAgICAgICAvL25wLnZvbHVtZVVTRFQgIT09IHRoaXMucHJvcHMudm9sdW1lVVNEVFxuICAgICAgICApO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMucXVvdGUuZ2V0KFwic3ltYm9sXCIpICE9PSB0aGlzLnN0YXRlLnF1b3RlLmdldChcInN5bWJvbFwiKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmJhc2UuZ2V0KFwic3ltYm9sXCIpICE9PSB0aGlzLnN0YXRlLmJhc2UuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcXVvdGU6IG5leHRQcm9wcy5xdW90ZSxcbiAgICAgICAgICAgICAgICBiYXNlOiBuZXh0UHJvcHMuYmFzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5leHRQcm9wcy52b2x1bWVVU0RUICE9PSB0aGlzLnN0YXRlLnZvbHVtZVVTRFRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldpbGwgYmUgdXBkYXRlIFZPTFVNRTogXCIgKyBuZXh0UHJvcHMudm9sdW1lVVNEVCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZvbHVtZVVTRFQ6IG5leHRQcm9wcy52b2x1bWVVU0RUXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIC8qICAgICAgICBNYXJrZXRzQWN0aW9ucy5nZXRNYXJrZXRTdGF0cy5kZWZlcih0aGlzLnByb3BzLnF1b3RlLCB0aGlzLnByb3BzLmJhc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAgICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy5nZXRNYXJrZXRTdGF0cy5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8hKnRoaXMucHJvcHMucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2UqIS9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJhc2VcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgMzAgKiAxMDAwXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGxldCBtYXJrZXRTdGF0cyA9IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzOiBtYXJrZXRTdGF0c1xuICAgICAgICAgICAgICAgIH0pOyovXG5cbiAgICAgICAgTWFya2V0c0FjdGlvbnMuZ2V0TWFya2V0U3RhdHMuZGVmZXIodGhpcy5zdGF0ZS5xdW90ZSwgdGhpcy5zdGF0ZS5iYXNlKTtcblxuICAgICAgICAvL2xldCBtYXJrZXRTdGF0cyA9IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzO1xuICAgICAgICBsZXQgbWFya2V0U3RhdHMgPSBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cy5nZXQoXG4gICAgICAgICAgICBgJHt0aGlzLnN0YXRlLmJhc2UuZ2V0KFwic3ltYm9sXCIpfV8ke3RoaXMuc3RhdGUucXVvdGUuZ2V0KFwic3ltYm9sXCIpfWBcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLmdldE1hcmtldFN0YXRzLmJpbmQoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAvKnRoaXMucHJvcHMucXVvdGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlKi9cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnF1b3RlLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmFzZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIDMwICogMTAwMFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy8vYmFzZTogcXVvdGUsXG4gICAgICAgICAgICAvLy9xdW90ZTogYmFzZSxcbiAgICAgICAgICAgIG1hcmtldFN0YXRzOiBtYXJrZXRTdGF0c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgLy9jbGVhckludGVydmFsKHRoaXMuc3RhdHNJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgZ29Ub01hcmtldChlKSB7XG4gICAgICAgIC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5O1xuICAgICAgICBoaXN0b3J5LnB1c2goXG4gICAgICAgICAgICBgL21hcmtldC8ke3RoaXMuc3RhdGUuYmFzZS5nZXQoXCJzeW1ib2xcIil9XyR7dGhpcy5zdGF0ZS5xdW90ZS5nZXQoXG4gICAgICAgICAgICAgICAgXCJzeW1ib2xcIlxuICAgICAgICAgICAgKX1gXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2FkZE1hcmtldChxdW90ZSwgYmFzZSkge1xuXG4gICAgICAgIGxldCBtYXJrZXRJRCA9IGAke3F1b3RlfV8ke2Jhc2V9YDtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKSkge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmFkZFN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnJlbW92ZVN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGFycmVkTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5zcmMgPSBcImFzc2V0LXN5bWJvbHMvdW5rbm93bi5wbmdcIjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGltZ0Vycm9yOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGhpZGUsXG4gICAgICAgICAgICBpc0xvd1ZvbHVtZSxcbiAgICAgICAgICAgIC8vYmFzZSxcbiAgICAgICAgICAgIC8vcXVvdGUsXG4gICAgICAgICAgICAvL3ZvbHVtZVVTRFQsXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgbWFya2V0U3RhdHMsXG4gICAgICAgICAgICB2b2x1bWVVU0RULFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoaXNMb3dWb2x1bWUgfHwgaGlkZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgLy9tYXJrZXRTdGF0cyA9IG1hcmtldFN0YXRzLmdldChgJHt0aGlzLnN0YXRlLmJhc2UuZ2V0KFwic3ltYm9sXCIpfV8ke3RoaXMuc3RhdGUucXVvdGUuZ2V0KFwic3ltYm9sXCIpfWApO1xuXG5cbiAgICAgICAgaWYgKCFtYXJrZXRTdGF0cyB8fCBtYXJrZXRTdGF0cy52b2x1bWVRdW90ZSA8PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cblxuICAgICAgICBmdW5jdGlvbiBnZXRJbWFnZU5hbWUoYXNzZXQpIHtcbiAgICAgICAgICAgIGlmIChhc3NldCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBhc3NldC5nZXQoXCJzeW1ib2xcIik7XG5cbiAgICAgICAgICAgIGlmIChzeW1ib2wuc3RhcnRzV2l0aChcIlJVREVYLlwiKSkgcmV0dXJuIHN5bWJvbDtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGdldF9hbGxUb2tlbnMoKS5uYXRpdmVUb2tlbnMuaW5kZXhPZihzeW1ib2wpICE9PSAtMSB8fFxuICAgICAgICAgICAgICAgIHN5bWJvbCA9PSBcIkRPTkFURVwiIHx8XG4gICAgICAgICAgICAgICAgc3ltYm9sID09IFwiREVYQk9UXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xuXG4gICAgICAgICAgICByZXR1cm4gXCJ1bmtub3duXCI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW1nTmFtZSA9IGdldEltYWdlTmFtZShiYXNlKTtcblxuICAgICAgICBsZXQgY2hhbmdlQ2xhc3MgPSAhbWFya2V0U3RhdHNcbiAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgOiBwYXJzZUZsb2F0KG1hcmtldFN0YXRzLmNoYW5nZSkgPiAwXG4gICAgICAgICAgICAgICAgPyBcImNoYW5nZS11cFwiXG4gICAgICAgICAgICAgICAgOiBwYXJzZUZsb2F0KG1hcmtldFN0YXRzLmNoYW5nZSkgPCAwXG4gICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtZG93blwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcblxuXG4gICAgICAgIGxldCBtYXJrZXRJRCA9IGAke2Jhc2UuZ2V0KFwic3ltYm9sXCIpfV8ke3F1b3RlLmdldChcInN5bWJvbFwiKX1gO1xuXG4gICAgICAgIGNvbnN0IHN0YXJDbGFzcyA9IHRoaXMuc3RhdGUuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKVxuICAgICAgICAgICAgPyBcImdvbGQtc3RhclwiXG4gICAgICAgICAgICA6IFwiZ3JleS1zdGFyXCI7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgXCJncmlkLWJsb2NrIG5vLW92ZXJmbG93IGZtLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIHNocmlua1wiXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub01hcmtldChlKVxuICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidi1hbGlnblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWF4V2lkdGg6IDcwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e2Jhc2UuZ2V0KFwic3ltYm9sXCIpfS8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN0YXQtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnRyYWRpbmdfcGFpclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZU1hcmtldChlLCBxdW90ZSwgYmFzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qdG89e2AvbWFya2V0LyR7YmFzZS5nZXQoXCJzeW1ib2xcIil9XyR7cXVvdGUuZ2V0KFwic3ltYm9sXCIpfWB9Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guc3dpdGNoX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjBweCA1cHggMHB4IDVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaHVmZmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNodWZmbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnNodWZmbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZE1hcmtldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwic3ltYm9sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2Fsa3Rocm91Z2guZmF2b3VyaXRlX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXJDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpLXN0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIubWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWwgbm8tb3ZlcmZsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub01hcmtldChlKVxuICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbS12b2x1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5sYXRlc3RcIi8+OntcIiBcIn0qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiLz46e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldFN0YXRzICYmIG1hcmtldFN0YXRzLnByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLnByaWNlX3RleHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHMucHJpY2UudG9SZWFsKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm0tdm9sdW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uudm9sdW1lXzI0XCIvPjp7XCIgXCJ9Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uudm9sdW1lXCIvPjp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IW1hcmtldFN0YXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdXRpbHMuZm9ybWF0X3ZvbHVtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cy52b2x1bWVRdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbS12b2x1bWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS52b2x1bWVfMjRfdXNkdFwiLz46e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF92b2x1bWUodm9sdW1lVVNEVCwgMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbS1jaGFuZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmhvdXJfMjRcIi8+OntcIiBcIn0qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5jaGFuZ2VcIi8+OntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25hbWVzKFwiZmxvYXQtcmlnaHRcIiwgY2hhbmdlQ2xhc3MpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFtYXJrZXRTdGF0cyA/IG51bGwgOiBtYXJrZXRTdGF0cy5jaGFuZ2V9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTWFya2V0Q2FyZCA9IEJpbmRUb0NoYWluU3RhdGUoTWFya2V0Q2FyZCk7XG5cbmNsYXNzIE1hcmtldENhcmRXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TWFya2V0Q2FyZCB7Li4udGhpcy5wcm9wc30gLz47XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcmtldENhcmRXcmFwcGVyLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbTWFya2V0c1N0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXJrZXRTdGF0czogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMuZ2V0KFxuICAgICAgICAgICAgICAgIHByb3BzLm1hcmtldElkXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgfTtcbiAgICB9XG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcblxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBMb2dpblNlbGVjdG9yIGZyb20gXCIuLi9Mb2dpblNlbGVjdG9yXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcblxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcbmltcG9ydCB7U3RhcnJlZE1hcmtldHMsIEZlYXR1cmVkTWFya2V0c30gZnJvbSBcIi4vTWFya2V0c1wiO1xuaW1wb3J0IHtnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlc30gZnJvbSBcImNvbW1vbi9nYXRld2F5c1wiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi4vRGFzaGJvYXJkUnVERVgvRGFzaGJvYXJkXCI7XG5pbXBvcnQge2dldE15TWFya2V0c1F1b3Rlc30gZnJvbSBcImJyYW5kaW5nXCI7XG5cbmNsYXNzIERhc2hib2FyZFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMsXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLFxuICAgICAgICAgICAgYWNjb3VudHNSZWFkeSxcbiAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWFjY291bnRzUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY2NvdW50Q291bnQgPVxuICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50cy5zaXplICtcbiAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMuc2l6ZSArXG4gICAgICAgICAgICAocGFzc3dvcmRBY2NvdW50ID8gMSA6IDApO1xuICAgICAgICAvKiAgICAgICAgaWYgKCFhY2NvdW50Q291bnQpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9naW5TZWxlY3RvciAvPjtcbiAgICAgICAgfSovXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBhcHAtdGFibGVzIG5vLXBhZGRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiYXBwVGFibGVzXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHNtYWxsLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLWNvbnRhaW5lciBnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nPVwiZGFzaGJvYXJkVGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzQ2xhc3M9XCJhY2NvdW50LW92ZXJ2aWV3IG5vLXBhZGRpbmcgYm9yZGVyZWQtaGVhZGVyIGNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwiZGFzaGJvYXJkLnRvcF9tYXJrZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZCB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImRhc2hib2FyZC5zdGFycmVkX21hcmtldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhcnJlZE1hcmtldHMvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlZmVycmVkQmFzZXMubWFwKGltZ05hbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE15TWFya2V0c1F1b3RlcygpLmluZGV4T2YoaW1nTmFtZSkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYXNzZXQtc3ltYm9scy91bmtub3duLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltZ05hbWUucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGtleT17aW1nTmFtZX0gdGl0bGU9e3RpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZE1hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZXM9e1tpbWdOYW1lXS5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFBvc3NpYmxlR2F0ZXdheVByZWZpeGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ltZ05hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgRGFzaGJvYXJkUGFnZSxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmUsIFNldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50cyxcbiAgICAgICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICBhY2NvdW50c0xvYWRlZCxcbiAgICAgICAgICAgICAgICByZWZzTG9hZGVkXG4gICAgICAgICAgICB9ID0gQWNjb3VudFN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50cyxcbiAgICAgICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICBhY2NvdW50c1JlYWR5OiBhY2NvdW50c0xvYWRlZCAmJiByZWZzTG9hZGVkLFxuICAgICAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkucHJlZmVycmVkQmFzZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG4vLyBpbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IE1hcmtldHNUYWJsZSBmcm9tIFwiLi9NYXJrZXRzVGFibGVcIjtcblxuY2xhc3MgU3RhcnJlZE1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYXJrZXRzVGFibGVcbiAgICAgICAgICAgICAgICBtYXJrZXRzPXt0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzfVxuICAgICAgICAgICAgICAgIGZvcmNlRGlyZWN0aW9uPXt0cnVlfVxuICAgICAgICAgICAgICAgIGlzRmF2b3JpdGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuU3RhcnJlZE1hcmtldHMgPSBjb25uZWN0KFN0YXJyZWRNYXJrZXRzLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc3RhcnJlZE1hcmtldHNcbiAgICAgICAgfTtcbiAgICB9XG59KTtcblxuY2xhc3MgRmVhdHVyZWRNYXJrZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBsZXQgY2hhaW5JRCA9IEFwaXMuaW5zdGFuY2UoKS5jaGFpbl9pZDtcbiAgICAgICAgaWYgKGNoYWluSUQpIGNoYWluSUQgPSBjaGFpbklELnN1YnN0cigwLCA4KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hhaW5JRCxcbiAgICAgICAgICAgIG1hcmtldHM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZ2V0TWFya2V0cyA9IHRoaXMuX2dldE1hcmtldHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9nZXRNYXJrZXRzKHN0YXRlID0gdGhpcy5zdGF0ZSwgcHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIGNvbnN0IHtjaGFpbklEfSA9IHN0YXRlO1xuXG4gICAgICAgIGlmIChjaGFpbklEID09PSBcIjdmY2Y0NTJkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5tYXJrZXRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYXNzdW1lIHRlc3RuZXRcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgW1wiVEVTVFwiLCBcIlBFRy5GQUtFVVNEXCJdLFxuICAgICAgICAgICAgICAgIFtcIlRFU1RcIiwgXCJCVFdUWVwiXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICBsZXQgbWFya2V0cyA9IHRoaXMuX2dldE1hcmtldHModGhpcy5zdGF0ZSwgcHJvcHMpO1xuXG4gICAgICAgIG1hcmtldHMgPSBtYXJrZXRzLmZpbHRlcihtYXJrZXQgPT4ge1xuICAgICAgICAgICAgLyogT25seSB1c2UgbWFya2V0cyBjb3JyZXNwb25kaW5nIHRvIHRoZSBjdXJyZW50IHRhYiAqL1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzLnF1b3Rlc1swXSA9PT0gbWFya2V0LmJhc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qIEFkZCB0aGUgcG9zc2libGUgZ2F0ZXdheSBhc3NldHMgKi9cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwcm9wcy5xdW90ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1hcmtldHMuZm9yRWFjaChtID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge3F1b3RlOiBtLnF1b3RlLCBiYXNlOiBwcm9wcy5xdW90ZXNbaV19O1xuICAgICAgICAgICAgICAgIGxldCBtYXJrZXRLZXkgPSBgJHtvYmoucXVvdGV9XyR7b2JqLmJhc2V9YDtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIG9iai5xdW90ZSAhPT0gb2JqLmJhc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgIW1hcmtldHMuaGFzKG1hcmtldEtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgb2JqLmJhc2UgIT09IFwiUlVERVguUlVCTEVcIiAmJiBwcm9wcy5xdW90ZXNbaV0gPT09IFwiUlVCTEVcIlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXRzID0gbWFya2V0cy5zZXQobWFya2V0S2V5LCBvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21hcmtldHN9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWFya2V0c1RhYmxlXG4gICAgICAgICAgICAgICAgbWFya2V0cz17dGhpcy5zdGF0ZS5tYXJrZXRzfVxuICAgICAgICAgICAgICAgIHNob3dGbGlwPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5GZWF0dXJlZE1hcmtldHMgPSBjb25uZWN0KEZlYXR1cmVkTWFya2V0cywge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW01hcmtldHNTdG9yZSwgU2V0dGluZ3NTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgbGV0IHVzZXJNYXJrZXRzID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnVzZXJNYXJrZXRzO1xuICAgICAgICBsZXQgZGVmYXVsdE1hcmtldHMgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuZGVmYXVsdE1hcmtldHM7XG5cbiAgICAgICAgaWYgKHVzZXJNYXJrZXRzLnNpemUpIHtcbiAgICAgICAgICAgIHVzZXJNYXJrZXRzLmZvckVhY2goKG1hcmtldCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkZWZhdWx0TWFya2V0cy5oYXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1hcmtldHMgPSBkZWZhdWx0TWFya2V0cy5zZXQoa2V5LCBtYXJrZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWFya2V0czogZGVmYXVsdE1hcmtldHNcbiAgICAgICAgfTtcbiAgICB9XG59KTtcblxuY2xhc3MgVG9wTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPE1hcmtldHNUYWJsZSBtYXJrZXRzPXtbXX0gLz47XG4gICAgfVxufVxuXG5leHBvcnQge1N0YXJyZWRNYXJrZXRzLCBGZWF0dXJlZE1hcmtldHMsIFRvcE1hcmtldHN9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBQYWdpbmF0ZWRMaXN0IGZyb20gXCIuLi9VdGlsaXR5L1BhZ2luYXRlZExpc3RcIjtcbmltcG9ydCB7SW5wdXQsIFRvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge0ljb24gYXMgQW50SWNvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IHtnZXRJbWFnZU5hbWV9IGZyb20gXCJicmFuZGluZ1wiO1xuXG5jbGFzcyBNYXJrZXRzVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZmlsdGVyOiBcIlwiLFxuICAgICAgICAgICAgc2hvd0ZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0hpZGRlbjogZmFsc2UsXG4gICAgICAgICAgICBtYXJrZXRzOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuc29ydEZ1bmN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5zb3J0RnVuY3Rpb25zW2tleV0gPSB0aGlzLnNvcnRGdW5jdGlvbnNba2V5XS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUobmV4dFByb3BzID0gbnVsbCkge1xuICAgICAgICBsZXQgcHJvcHMgPSBuZXh0UHJvcHMgfHwgdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHNob3dGbGlwID0gcHJvcHMuZm9yY2VEaXJlY3Rpb247XG5cbiAgICAgICAgaWYgKHByb3BzLm1hcmtldHMgJiYgcHJvcHMubWFya2V0cy5zaXplID4gMCkge1xuICAgICAgICAgICAgbGV0IG1hcmtldHMgPSBwcm9wcy5tYXJrZXRzXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICAgICAgICAgIC5tYXAobWFya2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1b3RlID0gQ2hhaW5TdG9yZS5nZXRBc3NldChtYXJrZXQucXVvdGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZSA9IENoYWluU3RvcmUuZ2V0QXNzZXQobWFya2V0LmJhc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2UgfHwgIXF1b3RlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldE5hbWUgPSBgJHttYXJrZXQuYmFzZX1fJHttYXJrZXQucXVvdGV9YDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBtYXJrZXROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBtYXJrZXQucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBtYXJrZXQuYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmVjaXNpb246IGJhc2UuZ2V0KFwicHJlY2lzaW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIaWRkZW46IHByb3BzLmhpZGRlbk1hcmtldHMuaW5jbHVkZXMobWFya2V0TmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlOiBwcm9wcy5pc0Zhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHM6IHByb3BzLmFsbE1hcmtldFN0YXRzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHttYXJrZXQucXVvdGV9XyR7bWFya2V0LmJhc2V9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3RhcnJlZDogdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cy5oYXMobWFya2V0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiBhICE9PSBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dGbGlwLCBtYXJrZXRzfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdG9nZ2xlU2hvd0hpZGRlbih2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd0hpZGRlbiA9PT0gdmFsKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93SGlkZGVuOiB2YWxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUZpbHRlcklucHV0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXI6IGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCl9KTtcbiAgICB9XG5cbiAgICBfaGFuZGxlSGlkZShyb3csIHN0YXR1cykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5oYW5kbGVIaWRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5oYW5kbGVIaWRlKHJvdywgc3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5oaWRlTWFya2V0KHJvdy5rZXksIHN0YXR1cyk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUZsaXAocm93LCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGFuZGxlRmxpcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGFuZGxlRmxpcChyb3csIHN0YXR1cyk7XG4gICAgICAgIH1cblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlTWFya2V0RGlyZWN0aW9uKHtcbiAgICAgICAgICAgIFtyb3cua2V5XTogc3RhdHVzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNvcnQoYVByaWNlLCBiUHJpY2UpIHtcbiAgICAgICAgY29uc3QgY29udmVydCA9IHByaWNlID0+IHtcbiAgICAgICAgICAgIHByaWNlID0gcHJpY2UucmVwbGFjZSgvXFwsL2csIFwiXCIpO1xuICAgICAgICAgICAgaWYgKHByaWNlLmluY2x1ZGVzKFwia1wiKSkgcHJpY2UgPSBwcmljZS5yZXBsYWNlKC9rL2csIFwiXCIpICogMTAwMDtcbiAgICAgICAgICAgIGlmIChwcmljZS5pbmNsdWRlcyhcIk1cIikpXG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcmljZS5yZXBsYWNlKC9NL2csIFwiXCIpICogMTAwMCAqIDEwMDA7XG4gICAgICAgICAgICByZXR1cm4gcHJpY2U7XG4gICAgICAgIH07XG4gICAgICAgIGFQcmljZSA9IGNvbnZlcnQoYVByaWNlKTtcbiAgICAgICAgYlByaWNlID0gY29udmVydChiUHJpY2UpO1xuXG4gICAgICAgIGlmIChhUHJpY2UgPT09IG51bGwgJiYgYlByaWNlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIGlmIChhUHJpY2UgIT09IG51bGwgJiYgYlByaWNlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYVByaWNlIC0gYlByaWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29ydEZ1bmN0aW9ucyA9IHtcbiAgICAgICAgYWxwaGFiZXRpYzogZnVuY3Rpb24oYSwgYiwgZm9yY2UpIHtcbiAgICAgICAgICAgIGlmIChhLmtleSA+IGIua2V5KSByZXR1cm4gZm9yY2UgPyAxIDogLTE7XG4gICAgICAgICAgICBpZiAoYS5rZXkgPCBiLmtleSkgcmV0dXJuIGZvcmNlID8gLTEgOiAxO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlVmFsdWU6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIGxldCBhUHJpY2UgPSBhLnByaWNlLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgbGV0IGJQcmljZSA9IGIucHJpY2UucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICBpZiAoYVByaWNlICYmIGJQcmljZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnQoYVByaWNlLCBiUHJpY2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RnVuY3Rpb25zLmFscGhhYmV0aWMoYSwgYiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZvbHVtZVZhbHVlOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICBsZXQgYVByaWNlID0gYS52b2x1bWUgfHwgMDtcbiAgICAgICAgICAgIGxldCBiUHJpY2UgPSBiLnZvbHVtZSB8fCAwO1xuICAgICAgICAgICAgbGV0IGNvbXBhcmVkID0gMDtcbiAgICAgICAgICAgIGlmIChhUHJpY2UgJiYgYlByaWNlKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZWQgPSBhUHJpY2UgLSBiUHJpY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcGFyZWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRGdW5jdGlvbnMuYWxwaGFiZXRpYyhhLCBiLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2VWYWx1ZTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgbGV0IGFWYWx1ZSA9IHBhcnNlRmxvYXQoYS5ob3VyXzI0KTtcbiAgICAgICAgICAgIGxldCBiVmFsdWUgPSBwYXJzZUZsb2F0KGIuaG91cl8yNCk7XG4gICAgICAgICAgICBsZXQgY29tcGFyZWQgPSAwO1xuICAgICAgICAgICAgaWYgKGFWYWx1ZSAmJiBiVmFsdWUgJiYgIWlzTmFOKGFWYWx1ZSkgJiYgIWlzTmFOKGJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlZCA9IGFWYWx1ZSAtIGJWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wYXJlZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEZ1bmN0aW9ucy5hbHBoYWJldGljKGEsIGIsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcGFyZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0SGVhZGVyKCkge1xuICAgICAgICBjb25zdCB7c2hvd0ZsaXAsIHNob3dIaWRkZW59ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwic3RhclwiLFxuICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNzVweFwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmFzc2V0XCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImFzc2V0XCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaXNGYXZvcml0ZVxuICAgICAgICAgICAgICAgID8ge31cbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnVzZXJfaXNzdWVkX2Fzc2V0cy5xdW90ZV9uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJxdW90ZV9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInByaWNlXCIsXG4gICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IHRoaXMuc29ydEZ1bmN0aW9ucy5wcmljZVZhbHVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT57aXRlbX08L3NwYW4+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuaG91cl8yNF9zaG9ydFwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJob3VyXzI0XCIsXG4gICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IHRoaXMuc29ydEZ1bmN0aW9ucy5jaGFuZ2VWYWx1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZUNsYXNzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmVjb3JkLmhvdXJfMjQpID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdChyZWNvcmQuaG91cl8yNCkgPCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNoYW5nZS1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIiwgdGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2hhbmdlQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5ob3VyXzI0fSVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS52b2x1bWVcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidm9sdW1lXCIsXG4gICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICBzb3J0ZXI6IHRoaXMuc29ydEZ1bmN0aW9ucy52b2x1bWVWYWx1ZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0U29ydE9yZGVyOiBcImRlc2NlbmRcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMuZm9ybWF0X3ZvbHVtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLnZvbHVtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmJhc2VQcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93RmxpcFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5mbGlwXCIgLz4sXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImZsaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc2hvd0hpZGRlbiA/IFwiZXhjaGFuZ2UuaGlkZVwiIDogXCJhY2NvdW50LnBlcm0uc2hvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaGlkZVwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBfc2V0SW50ZXJ2YWwobmV4dFByb3BzID0gbnVsbCkge1xuICAgICAgICBsZXQge2Jhc2UsIHF1b3RlfSA9IG5leHRQcm9wcyB8fCB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnN0YXRzQ2hlY2tlZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IE1hcmtldHNBY3Rpb25zLmdldE1hcmtldFN0YXRzSW50ZXJ2YWwoXG4gICAgICAgICAgICAzNSAqIDEwMDAsXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgcXVvdGVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfY2xlYXJJbnRlcnZhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHNJbnRlcnZhbCkgdGhpcy5zdGF0c0ludGVydmFsKCk7XG4gICAgfVxuXG4gICAgX29uRXJyb3IoaW1nTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnNyYyA9IFwiYXNzZXQtc3ltYm9scy91bmtub3duLnBuZ1wiO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RvZ2dsZUZhdm9yaXRlTWFya2V0KHF1b3RlLCBiYXNlKSB7XG4gICAgICAgIGxldCBtYXJrZXRJRCA9IGAke3F1b3RlfV8ke2Jhc2V9YDtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXRJRCkpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5hZGRTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5yZW1vdmVTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRUYWJsZURhdGEocm93KSB7XG4gICAgICAgIGxldCB7YmFzZSwgcXVvdGUsIG1hcmtldFN0YXRzLCBpc0hpZGRlbiwgaW52ZXJ0ZWQsIGJhc2VQcmVjaXNpb259ID0gcm93O1xuXG4gICAgICAgIGxldCBpbWdOYW1lID0gZ2V0SW1hZ2VOYW1lKHF1b3RlKTtcblxuICAgICAgICBsZXQgbWFya2V0SUQgPSBgJHtxdW90ZX1fJHtiYXNlfWA7XG5cbiAgICAgICAgY29uc3Qgc3RhckNsYXNzID0gdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cy5oYXMobWFya2V0SUQpXG4gICAgICAgICAgICA/IFwiZ29sZC1zdGFyXCJcbiAgICAgICAgICAgIDogXCJncmV5LXN0YXJcIjtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBtYXJrZXRJRCxcbiAgICAgICAgICAgIHN0YXI6IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZUZhdm9yaXRlTWFya2V0LmJpbmQodGhpcywgcXVvdGUsIGJhc2UpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXJDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaS1zdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlfc3Rhci5tYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGFzc2V0OiAoXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2AvbWFya2V0LyR7cXVvdGV9XyR7YmFzZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiAyMCwgbWFyZ2luUmlnaHQ6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvJHtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17cXVvdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0Zhdm9yaXRlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgZGF0YVBsYWNlPVwidG9wXCIgbmFtZT17YmFzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHF1b3RlX25hbWU6IHRoaXMucHJvcHMuaXNGYXZvcml0ZSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5vVGlwIG5hbWU9e2Jhc2V9IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHByaWNlOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAge21hcmtldFN0YXRzICYmIG1hcmtldFN0YXRzLnByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLnByaWNlX3RleHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cy5wcmljZS50b1JlYWwoZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBc3NldChxdW90ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFzc2V0KGJhc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBob3VyXzI0OlxuICAgICAgICAgICAgICAgICFtYXJrZXRTdGF0cyB8fFxuICAgICAgICAgICAgICAgICFtYXJrZXRTdGF0cy5jaGFuZ2UgfHxcbiAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cy5jaGFuZ2UgPT09IFwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IG1hcmtldFN0YXRzLmNoYW5nZSxcbiAgICAgICAgICAgIHZvbHVtZTpcbiAgICAgICAgICAgICAgICAhbWFya2V0U3RhdHMgfHwgIW1hcmtldFN0YXRzLnZvbHVtZUJhc2VcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogbWFya2V0U3RhdHMudm9sdW1lQmFzZSxcbiAgICAgICAgICAgIGZsaXA6XG4gICAgICAgICAgICAgICAgaW52ZXJ0ZWQgPT09IG51bGwgfHwgIXRoaXMucHJvcHMuaXNGYXZvcml0ZSA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUZsaXAuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm93LmludmVydGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2h1ZmZsZVwiIHRpdGxlPVwiaWNvbnMuc2h1ZmZsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgaGlkZTogKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImljb25zLnBsdXNfY2lyY2xlLnNob3dfbWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiaWNvbnMuY3Jvc3NfY2lyY2xlLmhpZGVfbWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5faGFuZGxlSGlkZS5iaW5kKHRoaXMsIHJvdywgIXJvdy5pc0hpZGRlbil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aXNIaWRkZW4gPyBcInBsdXMtY2lyY2xlXCIgOiBcImNyb3NzLWNpcmNsZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJpY29ucy5wbHVzX2NpcmNsZS5zaG93X21hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpY29ucy5jcm9zc19jaXJjbGUuaGlkZV9tYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYmFzZVByZWNpc2lvbjogYmFzZVByZWNpc2lvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHttYXJrZXRzLCBzaG93SGlkZGVuLCBmaWx0ZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBtYXJrZXRSb3dzID0gbWFya2V0c1xuICAgICAgICAgICAgLmZpbHRlcihtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFmaWx0ZXIgfHwgbS5pc1N0YXJyZWQpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkIC8vIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vKG0ubWFya2V0U3RhdHMgJiYgXCJ2b2x1bWVCYXNlXCIgaW4gbS5tYXJrZXRTdGF0cylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhbS5tYXJrZXRTdGF0cy52b2x1bWVRdW90ZSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2aXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChyb3cuaXNIaWRkZW4gIT09IHRoaXMuc3RhdGUuc2hvd0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVPYmplY3QgPSBDaGFpblN0b3JlLmdldEFzc2V0KHJvdy5xdW90ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VPYmplY3QgPSBDaGFpblN0b3JlLmdldEFzc2V0KHJvdy5iYXNlKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7aXNCaXRBc3NldDogcXVvdGVJc0JpdEFzc2V0fSA9IHV0aWxzLnJlcGxhY2VOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lzQml0QXNzZXQ6IGJhc2VJc0JpdEFzc2V0fSA9IHV0aWxzLnJlcGxhY2VOYW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZU9iamVjdFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZVN5bWJvbCA9IHJvdy5xdW90ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2VTeW1ib2wgPSByb3cuYmFzZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocXVvdGVJc0JpdEFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbCA9IFwiYml0XCIgKyBxdW90ZVN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlSXNCaXRBc3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbCA9IFwiYml0XCIgKyBiYXNlU3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyUGFpciA9IGZpbHRlci5pbmNsdWRlcyhcIjpcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlclBhaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlRmlsdGVyID0gZmlsdGVyLnNwbGl0KFwiOlwiKVswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlRmlsdGVyID0gZmlsdGVyLnNwbGl0KFwiOlwiKVsxXS50cmltKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhTdHJpbmcocXVvdGVGaWx0ZXIpLnRvTG93ZXJDYXNlKCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoU3RyaW5nKGJhc2VGaWx0ZXIpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKFN0cmluZyhmaWx0ZXIpLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoU3RyaW5nKGZpbHRlcikudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXZpc2libGUpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFibGVEYXRhKHsuLi5yb3d9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKHIgPT4gISFyKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXIgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXIuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVGaWx0ZXJJbnB1dC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxBbnRJY29uIHR5cGU9XCJzZWFyY2hcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdG9yIGlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogXCI2cHhcIn19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImlubGluZS1ibG9ja1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluYWN0aXZlOiBzaG93SGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU2hvd0hpZGRlbi5iaW5kKHRoaXMsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmhpZGVfaGlkZGVuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwiaW5saW5lLWJsb2NrXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmU6ICFzaG93SGlkZGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fdG9nZ2xlU2hvd0hpZGRlbi5iaW5kKHRoaXMsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuc2hvd19oaWRkZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjAuNXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogXCIzcHggMCAwXCIsIHdpZHRoOiBcImZpdC1jb250ZW50XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogM319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMub25seUxpcXVpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seUxpcXVpZDogIXRoaXMucHJvcHMub25seUxpcXVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjAuNHJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNob3dfb25seV9saXF1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQYWdpbmF0ZWRMaXN0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IDAsIHBhZGRpbmdSaWdodDogMH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGRhc2hib2FyZC10YWJsZSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5nZXRIZWFkZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgcm93cz17bWFya2V0Um93cy5sZW5ndGggPyBtYXJrZXRSb3dzIDogW119XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ1dGlsaXR5LnRvdGFsX3hfbWFya2V0c1wiXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQYWRkaW5nPVwiMS41cmVtXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcmtldHNUYWJsZSwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmUsIE1hcmtldHNTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgbGV0IHttYXJrZXREaXJlY3Rpb25zLCBoaWRkZW5NYXJrZXRzfSA9IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1hcmtldERpcmVjdGlvbnMsXG4gICAgICAgICAgICBoaWRkZW5NYXJrZXRzLFxuICAgICAgICAgICAgYWxsTWFya2V0U3RhdHM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzLFxuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgIG9ubHlMaXF1aWQ6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgIFwib25seUxpcXVpZFwiLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBcIi4vcGFnaW5hdGVkLWxpc3Quc2Nzc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0ZWRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgcm93czogW10sXHJcbiAgICAgICAgcGFnZVNpemU6IDIwLFxyXG5cclxuICAgICAgICBjbGFzc05hbWU6IFwidGFibGVcIixcclxuICAgICAgICBleHRyYVJvdzogbnVsbCxcclxuICAgICAgICBzdHlsZToge3BhZGRpbmdCb3R0b206IFwiMXJlbVwifSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuXHJcbiAgICAgICAgLy8gY2FuIGJlIGEgc3RyaW5nIChhc3N1bWVzIHRoZSB0cmFuc2xhdGlvbiBoYXMgb25lIGFyZ3VtZW50LCB0b3RhbCBjb3VudCksXHJcbiAgICAgICAgLy8gb3IgYW4gb2JqZWN0LCB3aGljaCBhbGxvd3MgYSBjdXN0b20gbGFiZWxcclxuICAgICAgICB0b3RhbExhYmVsOiBcInV0aWxpdHkudG90YWxfeF9pdGVtc1wiLFxyXG5cclxuICAgICAgICAvLyBAZGVwcmVjYXRlZCwgdXNlIHRvdGFsTGFiZWxcclxuICAgICAgICBsYWJlbDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHByb3BzLnBhZ2VTaXplXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3BhZ2VTaXplfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2hlYWRlciwgcm93cywgZXh0cmFSb3csIGxvYWRpbmd9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MCwgMTAwXS5maWx0ZXIoXHJcbiAgICAgICAgICAgIGl0ZW0gPT4gaXRlbSA8IE1hdGgubWF4KHRoaXMucHJvcHMucGFnZVNpemUsIHJvd3MubGVuZ3RoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcGFnZVNpemVPcHRpb25zLnB1c2goTWF0aC5tYXgodGhpcy5wcm9wcy5wYWdlU2l6ZSwgcm93cy5sZW5ndGgpKTtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsQ29sdW1uc0xhYmVsID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYWJlbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5sYWJlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50b3RhbExhYmVsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29sdW1uc0xhYmVsID0gdG90YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLnRvdGFsTGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMudG90YWxMYWJlbCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy50b3RhbExhYmVsLmtleSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbCxcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnRvdGFsTGFiZWwuYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRlZC1saXN0XCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtyb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgIHVuc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e0FycmF5LmlzQXJyYXkoaGVhZGVyKSA/IGhlYWRlciA6IFtdfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17KCkgPT4gKGV4dHJhUm93ID8gZXh0cmFSb3cgOiA8c3Bhbj4mbmJzcDs8L3NwYW4+KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy50b2dnbGVTb3J0T3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPblNpbmdsZVBhZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UGFnZVNpemU6IHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM6IHBhZ2VTaXplT3B0aW9ucy5tYXAobyA9PiBvLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VG90YWw6ICh0b3RhbCwgcmFuZ2UpID0+IHRvdGFsQ29sdW1uc0xhYmVsKHRvdGFsKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcm93Q2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHJlY29yZCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJvd0NsYXNzTmFtZShyZWNvcmQsIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb249e3RoaXMucHJvcHMucm93U2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG4vKipcbiAqICBSZW5kZXJzIGEgdGFiIGxheW91dCwgaGFuZGxpbmcgc3dpdGNoaW5nIGFuZCBvcHRpb25hbGx5IHBlcnNpc3RzIHRoZSBjdXJyZW50bHkgb3BlbiB0YWIgdXNpbmcgdGhlIFNldHRpbmdzU3RvcmVcbiAqXG4gKiAgcHJvcHM6XG4gKiAgICAgc2V0dGluZzogdW5pcXVlIG5hbWUgdG8gYmUgdXNlZCB0byByZW1lbWJlciB0aGUgYWN0aXZlIHRhYiBvZiB0aGlzIHRhYnMgbGF5b3V0LFxuICogICAgIHRhYnNDbGFzczogb3B0aW9uYWwgY2xhc3NlcyBmb3IgdGhlIHRhYnMgY29udGFpbmVyIGRpdlxuICogICAgIGNvbnRlbnRDbGFzczogb3B0aW9uYWwgY2xhc3NlcyBmb3IgdGhlIGNvbnRlbnQgY29udGFpbmVyIGRpdlxuICpcbiAqICBVc2FnZTpcbiAqXG4gKiAgPFRhYnMgc2V0dGluZz1cIm15U2V0dGluZ1wiPlxuICogICAgICA8VGFiIHRpdGxlPVwibG9jYWxlLnN0cmluZy50aXRsZTFcIj5UYWIgMSBjb250ZW50PC9UYWI+XG4gKiAgICAgIDxUYWIgdGl0bGU9XCJsb2NhbGUuc3RyaW5nLnRpdGxlMlwiPlRhYiAyIGNvbnRlbnQ8L1RhYj5cbiAqICA8L1RhYnM+XG4gKlxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hhbmdlVGFiOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaXNMaW5rVG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN1YlRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKVxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgICAgIGlzTGlua1RvOiBcIlwiLFxuICAgICAgICBzdWJUZXh0OiBudWxsXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBjaGFuZ2VUYWIsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIHVwZGF0ZWRUYWIsXG4gICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgIHN1YlRleHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBjID0gY25hbWVzKHtcImlzLWFjdGl2ZVwiOiBpc0FjdGl2ZX0sIGNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIiAmJiB0aXRsZS5pbmRleE9mKFwiLlwiKSA+IDApIHtcbiAgICAgICAgICAgIHRpdGxlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKHRpdGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvbnQgc3RyaW5nIGNvbmNldGVuYXRlIHN1YlRleHQgZGlyZWN0bHkgd2l0aGluIHRoZSByZW5kZXJpbmcsIHN1YlRleHQgY2FuIGJlIGFuIG9iamVjdCB3aXRob3V0IHRvU3RyaW5nXG4gICAgICAgIC8vIGltcGxlbWVudGF0aW9uLCBidXQgdmFsaWQgRE9NIChtZWFuaW5nLCBkb24ndCBkbyBzdWJUZXh0ICsgXCJzb21lU3RyaW5nXCJcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIC8vIGlmIHN1YlRleHQgaXMgZW1wdHksIGRvbnQgcmVuZGVyIGl0LCB3ZSBkb250IHdhbnQgZW1wdHkgYnJhY2tldHMgYWRkZWRcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3ViVGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHN1YlRleHQgPSBzdWJUZXh0LnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aXRsZS50eXBlID09PSBcInNwYW5cIikge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gdGl0bGUucHJvcHMuY2hpbGRyZW5bMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4fSBkYXRhLWlzLWxpbmstdG89e3RoaXMucHJvcHMuaXNMaW5rVG99PlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHt1cGRhdGVkVGFiID8gXCIqXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiBcIiAoXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIHN1YlRleHR9XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIFwiKVwifVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAhZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hhbmdlVGFiLmJpbmQodGhpcywgaW5kZXgsIHRoaXMucHJvcHMuaXNMaW5rVG8pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhYi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAge3VwZGF0ZWRUYWIgPyBcIipcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgPGRpdiBjbGFzc05hbWU9XCJ0YWItc3VidGV4dFwiPntzdWJUZXh0fTwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgVGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2V0dGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgc2VnbWVudGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBhY3RpdmU6IDAsXG4gICAgICAgIGRlZmF1bHRBY3RpdmVUYWI6IDAsXG4gICAgICAgIHNlZ21lbnRlZDogdHJ1ZSxcbiAgICAgICAgY29udGVudENsYXNzOiBcIlwiLFxuICAgICAgICBzdHlsZToge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogcHJvcHMuc2V0dGluZ1xuICAgICAgICAgICAgICAgID8gcHJvcHMudmlld1NldHRpbmdzLmdldChwcm9wcy5zZXR0aW5nLCBwcm9wcy5kZWZhdWx0QWN0aXZlVGFiKVxuICAgICAgICAgICAgICAgIDogcHJvcHMuZGVmYXVsdEFjdGl2ZVRhYixcbiAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMgPSB0aGlzLl9zZXREaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgbmV4dFNldHRpbmcgPSBuZXh0UHJvcHMudmlld1NldHRpbmdzLmdldChuZXh0UHJvcHMuc2V0dGluZyk7XG4gICAgICAgIGlmIChuZXh0U2V0dGluZyAhPT0gdGhpcy5wcm9wcy52aWV3U2V0dGluZ3MuZ2V0KHRoaXMucHJvcHMuc2V0dGluZykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYjogbmV4dFNldHRpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMpO1xuICAgIH1cblxuICAgIF9zZXREaW1lbnNpb25zKCkge1xuICAgICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAod2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRofSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2hhbmdlVGFiKHZhbHVlLCBpc0xpbmtUbykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiKSByZXR1cm47XG4gICAgICAgIC8vIFBlcnNpc3QgY3VycmVudCB0YWIgaWYgZGVzaXJlZFxuXG4gICAgICAgIGlmIChpc0xpbmtUbyAhPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goaXNMaW5rVG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2V0dGluZykge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5zZXR0aW5nXTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogdmFsdWV9KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZVRhYikgdGhpcy5wcm9wcy5vbkNoYW5nZVRhYih2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NoaWxkcmVuLCBjb250ZW50Q2xhc3MsIHRhYnNDbGFzcywgc3R5bGUsIHNlZ21lbnRlZH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjb2xsYXBzZVRhYnMgPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aWR0aCA8IDkwMCAmJiBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAyO1xuXG4gICAgICAgIGxldCBhY3RpdmVDb250ZW50ID0gbnVsbDtcblxuICAgICAgICBsZXQgdGFicyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbGxhcHNlVGFicyAmJiBjaGlsZC5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVUYWI7XG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb250ZW50ID0gY2hpbGQucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGNvbGxhcHNlVGFicyxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICBjaGFuZ2VUYWI6IHRoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmZpbHRlcihhID0+IGEgIT09IG51bGwpO1xuXG4gICAgICAgIGlmICghYWN0aXZlQ29udGVudCkge1xuICAgICAgICAgICAgYWN0aXZlQ29udGVudCA9IHRhYnNbMF0ucHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuYWN0aW9uQnV0dG9ucyA/IFwid2l0aC1idXR0b25zXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJidXR0b24tZ3JvdXAgbm8tbWFyZ2luXCIsIHRhYnNDbGFzcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsYXBzZVRhYnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMTVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWN0aXZlVGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0cy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmQgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZVRhYihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldFtpbmRdLmF0dHJpYnV0ZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtaXMtbGluay10b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJzLWFjdGlvbi1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbmFtZXMoXCJ0YWItY29udGVudFwiLCBjb250ZW50Q2xhc3MpfT5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRhYnMgPSBjb25uZWN0KFRhYnMsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge3ZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc307XG4gICAgfVxufSk7XG5cblRhYnMgPSB3aXRoUm91dGVyKFRhYnMpO1xuXG5leHBvcnQge1RhYnMsIFRhYn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=