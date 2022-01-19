"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[7],{

/***/ 3034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1905);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2518);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(578);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(645);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2797);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3035);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2056);










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
      defaultActiveTab: 1,
      segmented: false,
      setting: "dashboardTab",
      className: "account-tabs",
      tabsClass: "account-overview no-padding bordered-header content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__.Tab, {
      title: "dashboard.starred_markets"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Markets__WEBPACK_IMPORTED_MODULE_7__.StarredMarkets, null)), preferredBases.map(imgName => {
      let title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        className: "column-hide-small",
        style: {
          maxWidth: 30,
          marginRight: 5
        },
        src: imgName.indexOf("RUDEX") !== -1 || imgName.indexOf("GPH") !== -1 || imgName.indexOf("USD") !== -1 ? `${""}asset-symbols/${imgName.replace(/^BTC/, "OPEN.BTC").toLowerCase()}.png` : "asset-symbols/unknown.png"
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

/***/ 3035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarredMarkets": () => (/* binding */ StarredMarkets),
/* harmony export */   "FeaturedMarkets": () => (/* binding */ FeaturedMarkets),
/* harmony export */   "TopMarkets": () => (/* binding */ TopMarkets)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(510);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1804);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(596);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(645);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2302);
/* harmony import */ var _MarketsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3036);




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

/***/ 3036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2302);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(646);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(645);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(596);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2786);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1813);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2052);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2061);
















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

    function getImageName(symbol) {
      //if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
      if (symbol.startsWith("RUDEX.")) return symbol;
      if (symbol == "DONATE" || symbol == "GPH" || symbol == "USD"
      /* ||
      symbol == "EUR" ||
      symbol == "CNY" ||
      symbol == "RUB" ||
      symbol == "BTC" ||
      symbol == "GOLD" ||
      symbol == "SILVER" ||
      symbol == "OIL"*/
      ) return symbol;
      let imgName = symbol.split(".");
      return imgName.length === 2 ? imgName[1] : imgName[0];
    }

    let imgName = getImageName(quote);
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
      asset: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link, {
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

/***/ 2797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => (/* binding */ Tabs),
/* harmony export */   "Tab": () => (/* binding */ Tab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1804);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(646);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(645);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2062);








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

/***/ 2787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLjdjNDA5YWRmNGU1YWMzOTJjNWEzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQU9BO0FBQ0E7QUFDQTs7QUFFQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQThCQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFTQTtBQVFBOztBQTVGQTs7QUErRkE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7O0FBcEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7QUFUQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBOztBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTs7QUEzRUE7O0FBOEVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQWxCQTs7QUFxQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBWkE7QUFjQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTs7QUEyQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQVZBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBREE7QUFRQTtBQWJBO0FBa0JBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQVZBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQU9BO0FBcEJBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFmQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFaQTtBQWdCQTtBQUVBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBU0E7QUFwQkE7QUF1QkE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFnQkE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQU1BO0FBSUE7QUFFQTtBQUFBO0FBRUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBS0E7QUFQQTtBQVdBO0FBaEdBO0FBa0dBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7O0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBT0E7QUFDQTs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTs7QUFobEJBOztBQW1sQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7O0FBaEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25tQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFkQTs7QUFpQkE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBTUE7QUFwQkE7QUF5QkE7O0FBcEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVFBOztBQUNBO0FBRUE7QUFDQTtBQUZBO0FBU0E7QUFBQTtBQUlBO0FBQUE7QUFJQTs7QUExRUE7O0FBNkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQU9BO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBTUE7QUFaQTtBQXFCQTtBQUFBO0FBTUE7QUFBQTtBQUtBOztBQTdKQTs7QUFnS0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFOQTtBQVNBOzs7Ozs7Ozs7QUNoUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkUGFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL01hcmtldHMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9NYXJrZXRzVGFibGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUGFnaW5hdGVkTGlzdC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UYWJzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L3BhZ2luYXRlZC1saXN0LnNjc3M/MzYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcblxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBMb2dpblNlbGVjdG9yIGZyb20gXCIuLi9Mb2dpblNlbGVjdG9yXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcblxuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcbmltcG9ydCB7U3RhcnJlZE1hcmtldHMsIEZlYXR1cmVkTWFya2V0c30gZnJvbSBcIi4vTWFya2V0c1wiO1xuaW1wb3J0IHtnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlc30gZnJvbSBcImNvbW1vbi9nYXRld2F5c1wiO1xuXG5jbGFzcyBEYXNoYm9hcmRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcbiAgICAgICAgICAgIGFjY291bnRzUmVhZHksXG4gICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFhY2NvdW50c1JlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudENvdW50ID1cbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMuc2l6ZSArXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLnNpemUgK1xuICAgICAgICAgICAgKHBhc3N3b3JkQWNjb3VudCA/IDEgOiAwKTtcbiAgICAgICAgLyogICAgICAgIGlmICghYWNjb3VudENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvZ2luU2VsZWN0b3IgLz47XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgYXBwLXRhYmxlcyBuby1wYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImFwcFRhYmxlc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBzbWFsbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZz1cImRhc2hib2FyZFRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFic0NsYXNzPVwiYWNjb3VudC1vdmVydmlldyBuby1wYWRkaW5nIGJvcmRlcmVkLWhlYWRlciBjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImRhc2hib2FyZC5zdGFycmVkX21hcmtldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhcnJlZE1hcmtldHMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZWZlcnJlZEJhc2VzLm1hcChpbWdOYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdOYW1lLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJVREVYXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAhPT0gLTEgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nTmFtZS5pbmRleE9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHUEhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9PSAtMSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdOYW1lLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVTRFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL15CVEMvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT1BFTi5CVENcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCl9LnBuZ2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJhc3NldC1zeW1ib2xzL3Vua25vd24ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1nTmFtZS5yZXBsYWNlKFwiUlVERVguXCIsIFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIga2V5PXtpbWdOYW1lfSB0aXRsZT17dGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVkTWFya2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3Rlcz17W2ltZ05hbWVdLmNvbmNhdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UG9zc2libGVHYXRld2F5UHJlZml4ZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW1nTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBEYXNoYm9hcmRQYWdlLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZSwgU2V0dGluZ3NTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50LFxuICAgICAgICAgICAgICAgIGFjY291bnRzTG9hZGVkLFxuICAgICAgICAgICAgICAgIHJlZnNMb2FkZWRcbiAgICAgICAgICAgIH0gPSBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgICAgIG15SGlkZGVuQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50LFxuICAgICAgICAgICAgICAgIGFjY291bnRzUmVhZHk6IGFjY291bnRzTG9hZGVkICYmIHJlZnNMb2FkZWQsXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkQmFzZXM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5wcmVmZXJyZWRCYXNlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5cbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbi8vIGltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XG5pbXBvcnQgTWFya2V0c1RhYmxlIGZyb20gXCIuL01hcmtldHNUYWJsZVwiO1xuXG5jbGFzcyBTdGFycmVkTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1hcmtldHNUYWJsZVxuICAgICAgICAgICAgICAgIG1hcmtldHM9e3RoaXMucHJvcHMuc3RhcnJlZE1hcmtldHN9XG4gICAgICAgICAgICAgICAgZm9yY2VEaXJlY3Rpb249e3RydWV9XG4gICAgICAgICAgICAgICAgaXNGYXZvcml0ZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5TdGFycmVkTWFya2V0cyA9IGNvbm5lY3QoU3RhcnJlZE1hcmtldHMsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0c1xuICAgICAgICB9O1xuICAgIH1cbn0pO1xuXG5jbGFzcyBGZWF0dXJlZE1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGxldCBjaGFpbklEID0gQXBpcy5pbnN0YW5jZSgpLmNoYWluX2lkO1xuICAgICAgICBpZiAoY2hhaW5JRCkgY2hhaW5JRCA9IGNoYWluSUQuc3Vic3RyKDAsIDgpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGFpbklELFxuICAgICAgICAgICAgbWFya2V0czogW11cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9nZXRNYXJrZXRzID0gdGhpcy5fZ2V0TWFya2V0cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2dldE1hcmtldHMoc3RhdGUgPSB0aGlzLnN0YXRlLCBwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgY29uc3Qge2NoYWluSUR9ID0gc3RhdGU7XG5cbiAgICAgICAgaWYgKGNoYWluSUQgPT09IFwiN2ZjZjQ1MmRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzLm1hcmtldHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhc3N1bWUgdGVzdG5ldFxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBbXCJURVNUXCIsIFwiUEVHLkZBS0VVU0RcIl0sXG4gICAgICAgICAgICAgICAgW1wiVEVTVFwiLCBcIkJUV1RZXCJdXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIGxldCBtYXJrZXRzID0gdGhpcy5fZ2V0TWFya2V0cyh0aGlzLnN0YXRlLCBwcm9wcyk7XG5cbiAgICAgICAgbWFya2V0cyA9IG1hcmtldHMuZmlsdGVyKG1hcmtldCA9PiB7XG4gICAgICAgICAgICAvKiBPbmx5IHVzZSBtYXJrZXRzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgdGFiICovXG4gICAgICAgICAgICByZXR1cm4gcHJvcHMucXVvdGVzWzBdID09PSBtYXJrZXQuYmFzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogQWRkIHRoZSBwb3NzaWJsZSBnYXRld2F5IGFzc2V0cyAqL1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHByb3BzLnF1b3Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWFya2V0cy5mb3JFYWNoKG0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7cXVvdGU6IG0ucXVvdGUsIGJhc2U6IHByb3BzLnF1b3Rlc1tpXX07XG4gICAgICAgICAgICAgICAgbGV0IG1hcmtldEtleSA9IGAke29iai5xdW90ZX1fJHtvYmouYmFzZX1gO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgb2JqLnF1b3RlICE9PSBvYmouYmFzZSAmJlxuICAgICAgICAgICAgICAgICAgICAhbWFya2V0cy5oYXMobWFya2V0S2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICBvYmouYmFzZSAhPT0gXCJSVURFWC5SVUJMRVwiICYmIHByb3BzLnF1b3Rlc1tpXSA9PT0gXCJSVUJMRVwiXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtldHMgPSBtYXJrZXRzLnNldChtYXJrZXRLZXksIG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFya2V0c30pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYXJrZXRzVGFibGVcbiAgICAgICAgICAgICAgICBtYXJrZXRzPXt0aGlzLnN0YXRlLm1hcmtldHN9XG4gICAgICAgICAgICAgICAgc2hvd0ZsaXA9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGlzRmF2b3JpdGU9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkZlYXR1cmVkTWFya2V0cyA9IGNvbm5lY3QoRmVhdHVyZWRNYXJrZXRzLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbTWFya2V0c1N0b3JlLCBTZXR0aW5nc1N0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICBsZXQgdXNlck1hcmtldHMgPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudXNlck1hcmtldHM7XG4gICAgICAgIGxldCBkZWZhdWx0TWFya2V0cyA9IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5kZWZhdWx0TWFya2V0cztcblxuICAgICAgICBpZiAodXNlck1hcmtldHMuc2l6ZSkge1xuICAgICAgICAgICAgdXNlck1hcmtldHMuZm9yRWFjaCgobWFya2V0LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWRlZmF1bHRNYXJrZXRzLmhhcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWFya2V0cyA9IGRlZmF1bHRNYXJrZXRzLnNldChrZXksIG1hcmtldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXJrZXRzOiBkZWZhdWx0TWFya2V0c1xuICAgICAgICB9O1xuICAgIH1cbn0pO1xuXG5jbGFzcyBUb3BNYXJrZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TWFya2V0c1RhYmxlIG1hcmtldHM9e1tdfSAvPjtcbiAgICB9XG59XG5cbmV4cG9ydCB7U3RhcnJlZE1hcmtldHMsIEZlYXR1cmVkTWFya2V0cywgVG9wTWFya2V0c307XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcIi4uL1V0aWxpdHkvUGFnaW5hdGVkTGlzdFwiO1xuaW1wb3J0IHtJbnB1dCwgVG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7SWNvbiBhcyBBbnRJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNsYXNzIE1hcmtldHNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgICAgICAgICBzaG93RmxpcDogZmFsc2UsXG4gICAgICAgICAgICBzaG93SGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgIG1hcmtldHM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zb3J0RnVuY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRGdW5jdGlvbnNba2V5XSA9IHRoaXMuc29ydEZ1bmN0aW9uc1trZXldLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUobmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICBDaGFpblN0b3JlLnN1YnNjcmliZSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZShuZXh0UHJvcHMgPSBudWxsKSB7XG4gICAgICAgIGxldCBwcm9wcyA9IG5leHRQcm9wcyB8fCB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgc2hvd0ZsaXAgPSBwcm9wcy5mb3JjZURpcmVjdGlvbjtcblxuICAgICAgICBpZiAocHJvcHMubWFya2V0cyAmJiBwcm9wcy5tYXJrZXRzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBsZXQgbWFya2V0cyA9IHByb3BzLm1hcmtldHNcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpXG4gICAgICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGUgPSBDaGFpblN0b3JlLmdldEFzc2V0KG1hcmtldC5xdW90ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlID0gQ2hhaW5TdG9yZS5nZXRBc3NldChtYXJrZXQuYmFzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYmFzZSB8fCAhcXVvdGUpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0TmFtZSA9IGAke21hcmtldC5iYXNlfV8ke21hcmtldC5xdW90ZX1gO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG1hcmtldE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnRlZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG1hcmtldC5xdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG1hcmtldC5iYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByZWNpc2lvbjogYmFzZS5nZXQoXCJwcmVjaXNpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbjogcHJvcHMuaGlkZGVuTWFya2V0cy5pbmNsdWRlcyhtYXJrZXROYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRmF2b3JpdGU6IHByb3BzLmlzRmF2b3JpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0czogcHJvcHMuYWxsTWFya2V0U3RhdHMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke21hcmtldC5xdW90ZX1fJHttYXJrZXQuYmFzZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdGFycmVkOiB0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXROYW1lKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IGEgIT09IG51bGwpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0ZsaXAsIG1hcmtldHN9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90b2dnbGVTaG93SGlkZGVuKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93SGlkZGVuID09PSB2YWwpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dIaWRkZW46IHZhbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRmlsdGVySW5wdXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlcjogZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKX0pO1xuICAgIH1cblxuICAgIF9oYW5kbGVIaWRlKHJvdywgc3RhdHVzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhhbmRsZUhpZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhbmRsZUhpZGUocm93LCBzdGF0dXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmhpZGVNYXJrZXQocm93LmtleSwgc3RhdHVzKTtcbiAgICB9XG5cbiAgICBfaGFuZGxlRmxpcChyb3csIHN0YXR1cykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5oYW5kbGVGbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5oYW5kbGVGbGlwKHJvdywgc3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VNYXJrZXREaXJlY3Rpb24oe1xuICAgICAgICAgICAgW3Jvdy5rZXldOiBzdGF0dXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc29ydChhUHJpY2UsIGJQcmljZSkge1xuICAgICAgICBjb25zdCBjb252ZXJ0ID0gcHJpY2UgPT4ge1xuICAgICAgICAgICAgcHJpY2UgPSBwcmljZS5yZXBsYWNlKC9cXCwvZywgXCJcIik7XG4gICAgICAgICAgICBpZiAocHJpY2UuaW5jbHVkZXMoXCJrXCIpKSBwcmljZSA9IHByaWNlLnJlcGxhY2UoL2svZywgXCJcIikgKiAxMDAwO1xuICAgICAgICAgICAgaWYgKHByaWNlLmluY2x1ZGVzKFwiTVwiKSlcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByaWNlLnJlcGxhY2UoL00vZywgXCJcIikgKiAxMDAwICogMTAwMDtcbiAgICAgICAgICAgIHJldHVybiBwcmljZTtcbiAgICAgICAgfTtcbiAgICAgICAgYVByaWNlID0gY29udmVydChhUHJpY2UpO1xuICAgICAgICBiUHJpY2UgPSBjb252ZXJ0KGJQcmljZSk7XG5cbiAgICAgICAgaWYgKGFQcmljZSA9PT0gbnVsbCAmJiBiUHJpY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGFQcmljZSAhPT0gbnVsbCAmJiBiUHJpY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhUHJpY2UgLSBiUHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0RnVuY3Rpb25zID0ge1xuICAgICAgICBhbHBoYWJldGljOiBmdW5jdGlvbihhLCBiLCBmb3JjZSkge1xuICAgICAgICAgICAgaWYgKGEua2V5ID4gYi5rZXkpIHJldHVybiBmb3JjZSA/IDEgOiAtMTtcbiAgICAgICAgICAgIGlmIChhLmtleSA8IGIua2V5KSByZXR1cm4gZm9yY2UgPyAtMSA6IDE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VWYWx1ZTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgbGV0IGFQcmljZSA9IGEucHJpY2UucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICBsZXQgYlByaWNlID0gYi5wcmljZS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGlmIChhUHJpY2UgJiYgYlByaWNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydChhUHJpY2UsIGJQcmljZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRGdW5jdGlvbnMuYWxwaGFiZXRpYyhhLCBiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdm9sdW1lVmFsdWU6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIGxldCBhUHJpY2UgPSBhLnZvbHVtZSB8fCAwO1xuICAgICAgICAgICAgbGV0IGJQcmljZSA9IGIudm9sdW1lIHx8IDA7XG4gICAgICAgICAgICBsZXQgY29tcGFyZWQgPSAwO1xuICAgICAgICAgICAgaWYgKGFQcmljZSAmJiBiUHJpY2UpIHtcbiAgICAgICAgICAgICAgICBjb21wYXJlZCA9IGFQcmljZSAtIGJQcmljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wYXJlZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEZ1bmN0aW9ucy5hbHBoYWJldGljKGEsIGIsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcGFyZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoYW5nZVZhbHVlOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICBsZXQgYVZhbHVlID0gcGFyc2VGbG9hdChhLmhvdXJfMjQpO1xuICAgICAgICAgICAgbGV0IGJWYWx1ZSA9IHBhcnNlRmxvYXQoYi5ob3VyXzI0KTtcbiAgICAgICAgICAgIGxldCBjb21wYXJlZCA9IDA7XG4gICAgICAgICAgICBpZiAoYVZhbHVlICYmIGJWYWx1ZSAmJiAhaXNOYU4oYVZhbHVlKSAmJiAhaXNOYU4oYlZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbXBhcmVkID0gYVZhbHVlIC0gYlZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBhcmVkID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RnVuY3Rpb25zLmFscGhhYmV0aWMoYSwgYiwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IHtzaG93RmxpcCwgc2hvd0hpZGRlbn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJzdGFyXCIsXG4gICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI3NXB4XCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIiwgY3Vyc29yOiBcInBvaW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuYXNzZXRcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYXNzZXRcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0Zhdm9yaXRlXG4gICAgICAgICAgICAgICAgPyB7fVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudXNlcl9pc3N1ZWRfYXNzZXRzLnF1b3RlX25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInF1b3RlX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucHJpY2VcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicHJpY2VcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogdGhpcy5zb3J0RnVuY3Rpb25zLnByaWNlVmFsdWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19PntpdGVtfTwvc3Bhbj47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5ob3VyXzI0X3Nob3J0XCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImhvdXJfMjRcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogdGhpcy5zb3J0RnVuY3Rpb25zLmNoYW5nZVZhbHVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlQ2xhc3MgPVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChyZWNvcmQuaG91cl8yNCkgPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNoYW5nZS11cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHJlY29yZC5ob3VyXzI0KSA8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY2hhbmdlLWRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLCB0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjaGFuZ2VDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkLmhvdXJfMjR9JVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZvbHVtZVwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ2b2x1bWVcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHNvcnRlcjogdGhpcy5zb3J0RnVuY3Rpb25zLnZvbHVtZVZhbHVlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRTb3J0T3JkZXI6IFwiZGVzY2VuZFwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfdm9sdW1lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQudm9sdW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuYmFzZVByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dGbGlwXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmZsaXBcIiAvPixcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZmxpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHt9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzaG93SGlkZGVuID8gXCJleGNoYW5nZS5oaWRlXCIgOiBcImFjY291bnQucGVybS5zaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJoaWRlXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIF9zZXRJbnRlcnZhbChuZXh0UHJvcHMgPSBudWxsKSB7XG4gICAgICAgIGxldCB7YmFzZSwgcXVvdGV9ID0gbmV4dFByb3BzIHx8IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMuc3RhdHNDaGVja2VkID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gTWFya2V0c0FjdGlvbnMuZ2V0TWFya2V0U3RhdHNJbnRlcnZhbChcbiAgICAgICAgICAgIDM1ICogMTAwMCxcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBxdW90ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9jbGVhckludGVydmFsKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0c0ludGVydmFsKSB0aGlzLnN0YXRzSW50ZXJ2YWwoKTtcbiAgICB9XG5cbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbWdFcnJvcikge1xuICAgICAgICAgICAgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0uc3JjID0gXCJhc3NldC1zeW1ib2xzL3Vua25vd24ucG5nXCI7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbWdFcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdG9nZ2xlRmF2b3JpdGVNYXJrZXQocXVvdGUsIGJhc2UpIHtcbiAgICAgICAgbGV0IG1hcmtldElEID0gYCR7cXVvdGV9XyR7YmFzZX1gO1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKSkge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmFkZFN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnJlbW92ZVN0YXJNYXJrZXQocXVvdGUsIGJhc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFRhYmxlRGF0YShyb3cpIHtcbiAgICAgICAgbGV0IHtiYXNlLCBxdW90ZSwgbWFya2V0U3RhdHMsIGlzSGlkZGVuLCBpbnZlcnRlZCwgYmFzZVByZWNpc2lvbn0gPSByb3c7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKHN5bWJvbCkge1xuICAgICAgICAgICAgLy9pZiAoc3ltYm9sID09PSBcIk9QRU4uQlRDXCIgfHwgc3ltYm9sID09PSBcIkdERVguQlRDXCIpIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICBpZiAoc3ltYm9sLnN0YXJ0c1dpdGgoXCJSVURFWC5cIikpIHJldHVybiBzeW1ib2w7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBzeW1ib2wgPT0gXCJET05BVEVcIiB8fFxuICAgICAgICAgICAgICAgIHN5bWJvbCA9PSBcIkdQSFwiIHx8XG4gICAgICAgICAgICAgICAgc3ltYm9sID09IFwiVVNEXCJcblxuICAgICAgICAgICAgICAgIC8qIHx8XG4gICAgICAgIHN5bWJvbCA9PSBcIkVVUlwiIHx8XG4gICAgICAgIHN5bWJvbCA9PSBcIkNOWVwiIHx8XG4gICAgICAgIHN5bWJvbCA9PSBcIlJVQlwiIHx8XG4gICAgICAgIHN5bWJvbCA9PSBcIkJUQ1wiIHx8XG4gICAgICAgIHN5bWJvbCA9PSBcIkdPTERcIiB8fFxuICAgICAgICBzeW1ib2wgPT0gXCJTSUxWRVJcIiB8fFxuICAgICAgICBzeW1ib2wgPT0gXCJPSUxcIiovXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcblxuICAgICAgICAgICAgbGV0IGltZ05hbWUgPSBzeW1ib2wuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGltZ05hbWUubGVuZ3RoID09PSAyID8gaW1nTmFtZVsxXSA6IGltZ05hbWVbMF07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW1nTmFtZSA9IGdldEltYWdlTmFtZShxdW90ZSk7XG5cbiAgICAgICAgbGV0IG1hcmtldElEID0gYCR7cXVvdGV9XyR7YmFzZX1gO1xuXG4gICAgICAgIGNvbnN0IHN0YXJDbGFzcyA9IHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKVxuICAgICAgICAgICAgPyBcImdvbGQtc3RhclwiXG4gICAgICAgICAgICA6IFwiZ3JleS1zdGFyXCI7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogbWFya2V0SUQsXG4gICAgICAgICAgICBzdGFyOiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVGYXZvcml0ZU1hcmtldC5iaW5kKHRoaXMsIHF1b3RlLCBiYXNlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIubWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhc3NldDogKFxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke3F1b3RlfV8ke2Jhc2V9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogMjAsIG1hcmdpblJpZ2h0OiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e3F1b3RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNGYXZvcml0ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e2Jhc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxdW90ZV9uYW1lOiB0aGlzLnByb3BzLmlzRmF2b3JpdGUgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBub1RpcCBuYW1lPXtiYXNlfSAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBwcmljZTogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIiBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgIHttYXJrZXRTdGF0cyAmJiBtYXJrZXRTdGF0cy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB1dGlscy5wcmljZV90ZXh0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHMucHJpY2UudG9SZWFsKGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0QXNzZXQocXVvdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBc3NldChiYXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaG91cl8yNDpcbiAgICAgICAgICAgICAgICAhbWFya2V0U3RhdHMgfHxcbiAgICAgICAgICAgICAgICAhbWFya2V0U3RhdHMuY2hhbmdlIHx8XG4gICAgICAgICAgICAgICAgbWFya2V0U3RhdHMuY2hhbmdlID09PSBcIjAuMDBcIlxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBtYXJrZXRTdGF0cy5jaGFuZ2UsXG4gICAgICAgICAgICB2b2x1bWU6XG4gICAgICAgICAgICAgICAgIW1hcmtldFN0YXRzIHx8ICFtYXJrZXRTdGF0cy52b2x1bWVCYXNlXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IG1hcmtldFN0YXRzLnZvbHVtZUJhc2UsXG4gICAgICAgICAgICBmbGlwOlxuICAgICAgICAgICAgICAgIGludmVydGVkID09PSBudWxsIHx8ICF0aGlzLnByb3BzLmlzRmF2b3JpdGUgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9oYW5kbGVGbGlwLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdy5pbnZlcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInNodWZmbGVcIiB0aXRsZT1cImljb25zLnNodWZmbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGhpZGU6IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJpY29ucy5wbHVzX2NpcmNsZS5zaG93X21hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImljb25zLmNyb3NzX2NpcmNsZS5oaWRlX21hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUhpZGUuYmluZCh0aGlzLCByb3csICFyb3cuaXNIaWRkZW4pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2lzSGlkZGVuID8gXCJwbHVzLWNpcmNsZVwiIDogXCJjcm9zcy1jaXJjbGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbnMucGx1c19jaXJjbGUuc2hvd19tYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbnMuY3Jvc3NfY2lyY2xlLmhpZGVfbWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGJhc2VQcmVjaXNpb246IGJhc2VQcmVjaXNpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7bWFya2V0cywgc2hvd0hpZGRlbiwgZmlsdGVyfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgbWFya2V0Um93cyA9IG1hcmtldHNcbiAgICAgICAgICAgIC5maWx0ZXIobSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhZmlsdGVyIHx8IG0uaXNTdGFycmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25seUxpcXVpZCAvLyB8fFxuICAgICAgICAgICAgICAgICAgICAvLyhtLm1hcmtldFN0YXRzICYmIFwidm9sdW1lQmFzZVwiIGluIG0ubWFya2V0U3RhdHMpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIW0ubWFya2V0U3RhdHMudm9sdW1lUXVvdGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocm93LmlzSGlkZGVuICE9PSB0aGlzLnN0YXRlLnNob3dIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChyb3cucXVvdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChyb3cuYmFzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lzQml0QXNzZXQ6IHF1b3RlSXNCaXRBc3NldH0gPSB1dGlscy5yZXBsYWNlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpc0JpdEFzc2V0OiBiYXNlSXNCaXRBc3NldH0gPSB1dGlscy5yZXBsYWNlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVTeW1ib2wgPSByb3cucXVvdGU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlU3ltYm9sID0gcm93LmJhc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1b3RlSXNCaXRBc3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2wgPSBcImJpdFwiICsgcXVvdGVTeW1ib2w7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZUlzQml0QXNzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VTeW1ib2wgPSBcImJpdFwiICsgYmFzZVN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlclBhaXIgPSBmaWx0ZXIuaW5jbHVkZXMoXCI6XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJQYWlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZUZpbHRlciA9IGZpbHRlci5zcGxpdChcIjpcIilbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZUZpbHRlciA9IGZpbHRlci5zcGxpdChcIjpcIilbMV0udHJpbSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoU3RyaW5nKHF1b3RlRmlsdGVyKS50b0xvd2VyQ2FzZSgpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKFN0cmluZyhiYXNlRmlsdGVyKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhTdHJpbmcoZmlsdGVyKS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKFN0cmluZyhmaWx0ZXIpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRhYmxlRGF0YSh7Li4ucm93fSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihyID0+ICEhcik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyIGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlRmlsdGVySW5wdXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkFmdGVyPXs8QW50SWNvbiB0eXBlPVwic2VhcmNoXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RvciBpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IFwiNnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJpbmxpbmUtYmxvY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmFjdGl2ZTogc2hvd0hpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVNob3dIaWRkZW4uYmluZCh0aGlzLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5oaWRlX2hpZGRlblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImlubGluZS1ibG9ja1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluYWN0aXZlOiAhc2hvd0hpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3RvZ2dsZVNob3dIaWRkZW4uYmluZCh0aGlzLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnNob3dfaGlkZGVuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIwLjVyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiM3B4IDAgMFwiLCB3aWR0aDogXCJmaXQtY29udGVudFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLm9ubHlMaXF1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlMaXF1aWQ6ICF0aGlzLnByb3BzLm9ubHlMaXF1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwLjRyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5zaG93X29ubHlfbGlxdWlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGVkTGlzdFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdMZWZ0OiAwLCBwYWRkaW5nUmlnaHQ6IDB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSBkYXNoYm9hcmQtdGFibGUgdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMuZ2V0SGVhZGVyKCl9XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9e21hcmtldFJvd3MubGVuZ3RoID8gbWFya2V0Um93cyA6IFtdfVxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidXRpbGl0eS50b3RhbF94X21hcmtldHNcIlxuICAgICAgICAgICAgICAgICAgICBsZWZ0UGFkZGluZz1cIjEuNXJlbVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNYXJrZXRzVGFibGUsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBNYXJrZXRzU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIGxldCB7bWFya2V0RGlyZWN0aW9ucywgaGlkZGVuTWFya2V0c30gPSBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXJrZXREaXJlY3Rpb25zLFxuICAgICAgICAgICAgaGlkZGVuTWFya2V0cyxcbiAgICAgICAgICAgIGFsbE1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkuc3RhcnJlZE1hcmtldHMsXG4gICAgICAgICAgICBvbmx5TGlxdWlkOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLmdldChcbiAgICAgICAgICAgICAgICBcIm9ubHlMaXF1aWRcIixcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtUYWJsZX0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgXCIuL3BhZ2luYXRlZC1saXN0LnNjc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGVkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHJvd3M6IFtdLFxyXG4gICAgICAgIHBhZ2VTaXplOiAyMCxcclxuXHJcbiAgICAgICAgY2xhc3NOYW1lOiBcInRhYmxlXCIsXHJcbiAgICAgICAgZXh0cmFSb3c6IG51bGwsXHJcbiAgICAgICAgc3R5bGU6IHtwYWRkaW5nQm90dG9tOiBcIjFyZW1cIn0sXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcblxyXG4gICAgICAgIC8vIGNhbiBiZSBhIHN0cmluZyAoYXNzdW1lcyB0aGUgdHJhbnNsYXRpb24gaGFzIG9uZSBhcmd1bWVudCwgdG90YWwgY291bnQpLFxyXG4gICAgICAgIC8vIG9yIGFuIG9iamVjdCwgd2hpY2ggYWxsb3dzIGEgY3VzdG9tIGxhYmVsXHJcbiAgICAgICAgdG90YWxMYWJlbDogXCJ1dGlsaXR5LnRvdGFsX3hfaXRlbXNcIixcclxuXHJcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWQsIHVzZSB0b3RhbExhYmVsXHJcbiAgICAgICAgbGFiZWw6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwcm9wcy5wYWdlU2l6ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtwYWdlU2l6ZX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtoZWFkZXIsIHJvd3MsIGV4dHJhUm93LCBsb2FkaW5nfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgMjAsIDMwLCA0MCwgNTAsIDEwMF0uZmlsdGVyKFxyXG4gICAgICAgICAgICBpdGVtID0+IGl0ZW0gPCBNYXRoLm1heCh0aGlzLnByb3BzLnBhZ2VTaXplLCByb3dzLmxlbmd0aClcclxuICAgICAgICApO1xyXG4gICAgICAgIHBhZ2VTaXplT3B0aW9ucy5wdXNoKE1hdGgubWF4KHRoaXMucHJvcHMucGFnZVNpemUsIHJvd3MubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIGxldCB0b3RhbENvbHVtbnNMYWJlbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGFiZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMudG90YWxMYWJlbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy50b3RhbExhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRvdGFsTGFiZWwgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMudG90YWxMYWJlbC5rZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy50b3RhbExhYmVsLmFyZ3NcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0ZWQtbGlzdFwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cm93c31cclxuICAgICAgICAgICAgICAgICAgICB1bnNcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtBcnJheS5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIgOiBbXX1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9eygpID0+IChleHRyYVJvdyA/IGV4dHJhUm93IDogPHNwYW4+Jm5ic3A7PC9zcGFuPil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMudG9nZ2xlU29ydE9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT25TaW5nbGVQYWdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhZ2VTaXplOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zOiBwYWdlU2l6ZU9wdGlvbnMubWFwKG8gPT4gby50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvdGFsOiAodG90YWwsIHJhbmdlKSA9PiB0b3RhbENvbHVtbnNMYWJlbCh0b3RhbClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd0NsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucm93Q2xhc3NOYW1lID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChyZWNvcmQsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUocmVjb3JkLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPXt0aGlzLnByb3BzLnJvd1NlbGVjdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuLyoqXG4gKiAgUmVuZGVycyBhIHRhYiBsYXlvdXQsIGhhbmRsaW5nIHN3aXRjaGluZyBhbmQgb3B0aW9uYWxseSBwZXJzaXN0cyB0aGUgY3VycmVudGx5IG9wZW4gdGFiIHVzaW5nIHRoZSBTZXR0aW5nc1N0b3JlXG4gKlxuICogIHByb3BzOlxuICogICAgIHNldHRpbmc6IHVuaXF1ZSBuYW1lIHRvIGJlIHVzZWQgdG8gcmVtZW1iZXIgdGhlIGFjdGl2ZSB0YWIgb2YgdGhpcyB0YWJzIGxheW91dCxcbiAqICAgICB0YWJzQ2xhc3M6IG9wdGlvbmFsIGNsYXNzZXMgZm9yIHRoZSB0YWJzIGNvbnRhaW5lciBkaXZcbiAqICAgICBjb250ZW50Q2xhc3M6IG9wdGlvbmFsIGNsYXNzZXMgZm9yIHRoZSBjb250ZW50IGNvbnRhaW5lciBkaXZcbiAqXG4gKiAgVXNhZ2U6XG4gKlxuICogIDxUYWJzIHNldHRpbmc9XCJteVNldHRpbmdcIj5cbiAqICAgICAgPFRhYiB0aXRsZT1cImxvY2FsZS5zdHJpbmcudGl0bGUxXCI+VGFiIDEgY29udGVudDwvVGFiPlxuICogICAgICA8VGFiIHRpdGxlPVwibG9jYWxlLnN0cmluZy50aXRsZTJcIj5UYWIgMiBjb250ZW50PC9UYWI+XG4gKiAgPC9UYWJzPlxuICpcbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNoYW5nZVRhYjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGlzTGlua1RvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzdWJUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSlcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgICAgICBpc0xpbmtUbzogXCJcIixcbiAgICAgICAgc3ViVGV4dDogbnVsbFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgY2hhbmdlVGFiLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICB1cGRhdGVkVGFiLFxuICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICBzdWJUZXh0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgYyA9IGNuYW1lcyh7XCJpcy1hY3RpdmVcIjogaXNBY3RpdmV9LCBjbGFzc05hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIgJiYgdGl0bGUuaW5kZXhPZihcIi5cIikgPiAwKSB7XG4gICAgICAgICAgICB0aXRsZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkb250IHN0cmluZyBjb25jZXRlbmF0ZSBzdWJUZXh0IGRpcmVjdGx5IHdpdGhpbiB0aGUgcmVuZGVyaW5nLCBzdWJUZXh0IGNhbiBiZSBhbiBvYmplY3Qgd2l0aG91dCB0b1N0cmluZ1xuICAgICAgICAvLyBpbXBsZW1lbnRhdGlvbiwgYnV0IHZhbGlkIERPTSAobWVhbmluZywgZG9uJ3QgZG8gc3ViVGV4dCArIFwic29tZVN0cmluZ1wiXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICAvLyBpZiBzdWJUZXh0IGlzIGVtcHR5LCBkb250IHJlbmRlciBpdCwgd2UgZG9udCB3YW50IGVtcHR5IGJyYWNrZXRzIGFkZGVkXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN1YlRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBzdWJUZXh0ID0gc3ViVGV4dC50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGl0bGUudHlwZSA9PT0gXCJzcGFuXCIpIHtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IHRpdGxlLnByb3BzLmNoaWxkcmVuWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleH0gZGF0YS1pcy1saW5rLXRvPXt0aGlzLnByb3BzLmlzTGlua1RvfT5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICB7dXBkYXRlZFRhYiA/IFwiKlwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgXCIgKFwifVxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiBzdWJUZXh0fVxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiBcIilcIn1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgIWRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNoYW5nZVRhYi5iaW5kKHRoaXMsIGluZGV4LCB0aGlzLnByb3BzLmlzTGlua1RvKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cGRhdGVkVGFiID8gXCIqXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIDxkaXYgY2xhc3NOYW1lPVwidGFiLXN1YnRleHRcIj57c3ViVGV4dH08L2Rpdj59XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHNldHRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlZmF1bHRBY3RpdmVUYWI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHNlZ21lbnRlZDogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYWN0aXZlOiAwLFxuICAgICAgICBkZWZhdWx0QWN0aXZlVGFiOiAwLFxuICAgICAgICBzZWdtZW50ZWQ6IHRydWUsXG4gICAgICAgIGNvbnRlbnRDbGFzczogXCJcIixcbiAgICAgICAgc3R5bGU6IHt9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVUYWI6IHByb3BzLnNldHRpbmdcbiAgICAgICAgICAgICAgICA/IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQocHJvcHMuc2V0dGluZywgcHJvcHMuZGVmYXVsdEFjdGl2ZVRhYilcbiAgICAgICAgICAgICAgICA6IHByb3BzLmRlZmF1bHRBY3RpdmVUYWIsXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zID0gdGhpcy5fc2V0RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMsIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IG5leHRTZXR0aW5nID0gbmV4dFByb3BzLnZpZXdTZXR0aW5ncy5nZXQobmV4dFByb3BzLnNldHRpbmcpO1xuICAgICAgICBpZiAobmV4dFNldHRpbmcgIT09IHRoaXMucHJvcHMudmlld1NldHRpbmdzLmdldCh0aGlzLnByb3BzLnNldHRpbmcpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWI6IG5leHRTZXR0aW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zKTtcbiAgICB9XG5cbiAgICBfc2V0RGltZW5zaW9ucygpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NoYW5nZVRhYih2YWx1ZSwgaXNMaW5rVG8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYikgcmV0dXJuO1xuICAgICAgICAvLyBQZXJzaXN0IGN1cnJlbnQgdGFiIGlmIGRlc2lyZWRcblxuICAgICAgICBpZiAoaXNMaW5rVG8gIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGlzTGlua1RvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNldHRpbmcpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuc2V0dGluZ106IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVUYWI6IHZhbHVlfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2VUYWIpIHRoaXMucHJvcHMub25DaGFuZ2VUYWIodmFsdWUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjaGlsZHJlbiwgY29udGVudENsYXNzLCB0YWJzQ2xhc3MsIHN0eWxlLCBzZWdtZW50ZWR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY29sbGFwc2VUYWJzID1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGggPCA5MDAgJiYgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMjtcblxuICAgICAgICBsZXQgYWN0aXZlQ29udGVudCA9IG51bGw7XG5cbiAgICAgICAgbGV0IHRhYnMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2xsYXBzZVRhYnMgJiYgY2hpbGQucHJvcHMuZGlzYWJsZWQpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiO1xuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29udGVudCA9IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZVRhYnMsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgY2hhbmdlVGFiOiB0aGlzLl9jaGFuZ2VUYWIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5maWx0ZXIoYSA9PiBhICE9PSBudWxsKTtcblxuICAgICAgICBpZiAoIWFjdGl2ZUNvbnRlbnQpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNvbnRlbnQgPSB0YWJzWzBdLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnMgPyBcIndpdGgtYnV0dG9uc1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwiYnV0dG9uLWdyb3VwIG5vLW1hcmdpblwiLCB0YWJzQ2xhc3MsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGFwc2VUYWJzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjE1cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjdGl2ZVRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAxMCwgbWFyZ2luQm90dG9tOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VUYWIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXRbaW5kXS5hdHRyaWJ1dGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWlzLWxpbmstdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWN0aW9uQnV0dG9ucyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFicy1hY3Rpb24tYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25hbWVzKFwidGFiLWNvbnRlbnRcIiwgY29udGVudENsYXNzKX0+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVDb250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UYWJzID0gY29ubmVjdChUYWJzLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt2aWV3U2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3N9O1xuICAgIH1cbn0pO1xuXG5UYWJzID0gd2l0aFJvdXRlcihUYWJzKTtcblxuZXhwb3J0IHtUYWJzLCBUYWJ9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9