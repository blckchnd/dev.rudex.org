"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[7],{

/***/ 3388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1816);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1941);
/* harmony import */ var _LoginSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2554);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(589);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(656);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2833);
/* harmony import */ var _Markets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3389);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2092);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(621);








 //import Dashboard from "../DashboardRuDEX/Dashboard";



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
      title: "dashboard.starred_markets"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Markets__WEBPACK_IMPORTED_MODULE_7__.StarredMarkets, null)), preferredBases.map(imgName => {
      let title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        className: "column-hide-small",
        style: {
          maxWidth: 30,
          marginRight: 5
        },
        src: (0,branding__WEBPACK_IMPORTED_MODULE_9__.getMyMarketsQuotes)().indexOf(imgName) !== -1 ? `${""}asset-symbols/${imgName.toLowerCase()}.png` : "asset-symbols/unknown.png"
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

/***/ 3389:
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
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2338);
/* harmony import */ var _MarketsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3390);




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

/***/ 3390:
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
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2338);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(657);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(656);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(607);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2822);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1825);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2088);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2097);
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
          quoteSymbol = "gp" + quoteSymbol;
        }

        if (baseIsBitAsset) {
          baseSymbol = "gp" + baseSymbol;
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

/***/ 2822:
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
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2823);




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

/***/ 2823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLjYwYTI1MGJkZDdiZjQ4ZTAxN2UzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFpQkE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBU0E7QUFRQTs7QUFsRkE7O0FBcUZBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOztBQXBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7O0FBVEE7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFSQTs7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7O0FBM0VBOztBQThFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFsQkE7O0FBcUJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVpBO0FBY0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4Q0E7O0FBMkNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFWQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBUUE7QUFiQTtBQWtCQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFWQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFPQTtBQXBCQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBZkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBWkE7QUFnQkE7QUFFQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVNBO0FBcEJBO0FBdUJBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBTUE7QUFJQTtBQUVBO0FBQUE7QUFFQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFLQTtBQVBBO0FBV0E7QUFoR0E7QUFrR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFPQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBTUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBOztBQXhqQkE7O0FBMmpCQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTs7QUFoQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWRBOztBQWlCQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFNQTtBQXBCQTtBQXlCQTs7QUFwRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUUE7O0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFTQTtBQUFBO0FBSUE7QUFBQTtBQUlBOztBQTFFQTs7QUE2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBT0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFNQTtBQVpBO0FBcUJBO0FBQUE7QUFNQTtBQUFBO0FBS0E7O0FBN0pBOztBQWdLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQU5BO0FBU0E7Ozs7Ozs7OztBQ2hSQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmRQYWdlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9EYXNoYm9hcmQvTWFya2V0cy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRGFzaGJvYXJkL01hcmtldHNUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9QYWdpbmF0ZWRMaXN0LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1RhYnMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvcGFnaW5hdGVkLWxpc3Quc2Nzcz8zNjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IExvZ2luU2VsZWN0b3IgZnJvbSBcIi4uL0xvZ2luU2VsZWN0b3JcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuXG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1V0aWxpdHkvVGFic1wiO1xuaW1wb3J0IHtTdGFycmVkTWFya2V0cywgRmVhdHVyZWRNYXJrZXRzfSBmcm9tIFwiLi9NYXJrZXRzXCI7XG5pbXBvcnQge2dldFBvc3NpYmxlR2F0ZXdheVByZWZpeGVzfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlzXCI7XG4vL2ltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4uL0Rhc2hib2FyZFJ1REVYL0Rhc2hib2FyZFwiO1xuaW1wb3J0IHtnZXRNeU1hcmtldHNRdW90ZXN9IGZyb20gXCJicmFuZGluZ1wiO1xuXG5jbGFzcyBEYXNoYm9hcmRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBteUFjdGl2ZUFjY291bnRzLFxuICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcbiAgICAgICAgICAgIGFjY291bnRzUmVhZHksXG4gICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFhY2NvdW50c1JlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdJbmRpY2F0b3IgLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudENvdW50ID1cbiAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMuc2l6ZSArXG4gICAgICAgICAgICBteUhpZGRlbkFjY291bnRzLnNpemUgK1xuICAgICAgICAgICAgKHBhc3N3b3JkQWNjb3VudCA/IDEgOiAwKTtcbiAgICAgICAgLyogICAgICAgIGlmICghYWNjb3VudENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gPExvZ2luU2VsZWN0b3IgLz47XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgYXBwLXRhYmxlcyBuby1wYWRkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImFwcFRhYmxlc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayBzbWFsbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWI9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZz1cImRhc2hib2FyZFRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFic0NsYXNzPVwiYWNjb3VudC1vdmVydmlldyBuby1wYWRkaW5nIGJvcmRlcmVkLWhlYWRlciBjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImRhc2hib2FyZC50b3BfbWFya2V0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJkYXNoYm9hcmQuc3RhcnJlZF9tYXJrZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJyZWRNYXJrZXRzLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZWZlcnJlZEJhc2VzLm1hcChpbWdOYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRNeU1hcmtldHNRdW90ZXMoKS5pbmRleE9mKGltZ05hbWUpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImFzc2V0LXN5bWJvbHMvdW5rbm93bi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWdOYW1lLnJlcGxhY2UoXCJSVURFWC5cIiwgXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBrZXk9e2ltZ05hbWV9IHRpdGxlPXt0aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVzPXtbaW1nTmFtZV0uY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbWdOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIERhc2hib2FyZFBhZ2UsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlLCBTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICAgICAgYWNjb3VudHNMb2FkZWQsXG4gICAgICAgICAgICAgICAgcmVmc0xvYWRlZFxuICAgICAgICAgICAgfSA9IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG15QWN0aXZlQWNjb3VudHMsXG4gICAgICAgICAgICAgICAgbXlIaWRkZW5BY2NvdW50cyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICAgICAgYWNjb3VudHNSZWFkeTogYWNjb3VudHNMb2FkZWQgJiYgcmVmc0xvYWRlZCxcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRCYXNlczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnByZWZlcnJlZEJhc2VzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcblxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuLy8gaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCBNYXJrZXRzVGFibGUgZnJvbSBcIi4vTWFya2V0c1RhYmxlXCI7XG5cbmNsYXNzIFN0YXJyZWRNYXJrZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWFya2V0c1RhYmxlXG4gICAgICAgICAgICAgICAgbWFya2V0cz17dGhpcy5wcm9wcy5zdGFycmVkTWFya2V0c31cbiAgICAgICAgICAgICAgICBmb3JjZURpcmVjdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlXG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblN0YXJyZWRNYXJrZXRzID0gY29ubmVjdChTdGFycmVkTWFya2V0cywge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFycmVkTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzXG4gICAgICAgIH07XG4gICAgfVxufSk7XG5cbmNsYXNzIEZlYXR1cmVkTWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgbGV0IGNoYWluSUQgPSBBcGlzLmluc3RhbmNlKCkuY2hhaW5faWQ7XG4gICAgICAgIGlmIChjaGFpbklEKSBjaGFpbklEID0gY2hhaW5JRC5zdWJzdHIoMCwgOCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoYWluSUQsXG4gICAgICAgICAgICBtYXJrZXRzOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2dldE1hcmtldHMgPSB0aGlzLl9nZXRNYXJrZXRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfZ2V0TWFya2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUsIHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICBjb25zdCB7Y2hhaW5JRH0gPSBzdGF0ZTtcblxuICAgICAgICBpZiAoY2hhaW5JRCA9PT0gXCI3ZmNmNDUyZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMubWFya2V0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFzc3VtZSB0ZXN0bmV0XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIFtcIlRFU1RcIiwgXCJQRUcuRkFLRVVTRFwiXSxcbiAgICAgICAgICAgICAgICBbXCJURVNUXCIsIFwiQlRXVFlcIl1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFByb3BzLCB0aGlzLnByb3BzKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLnVwZGF0ZShuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIHVwZGF0ZShwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgbGV0IG1hcmtldHMgPSB0aGlzLl9nZXRNYXJrZXRzKHRoaXMuc3RhdGUsIHByb3BzKTtcblxuICAgICAgICBtYXJrZXRzID0gbWFya2V0cy5maWx0ZXIobWFya2V0ID0+IHtcbiAgICAgICAgICAgIC8qIE9ubHkgdXNlIG1hcmtldHMgY29ycmVzcG9uZGluZyB0byB0aGUgY3VycmVudCB0YWIgKi9cbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5xdW90ZXNbMF0gPT09IG1hcmtldC5iYXNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKiBBZGQgdGhlIHBvc3NpYmxlIGdhdGV3YXkgYXNzZXRzICovXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcHJvcHMucXVvdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYXJrZXRzLmZvckVhY2gobSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtxdW90ZTogbS5xdW90ZSwgYmFzZTogcHJvcHMucXVvdGVzW2ldfTtcbiAgICAgICAgICAgICAgICBsZXQgbWFya2V0S2V5ID0gYCR7b2JqLnF1b3RlfV8ke29iai5iYXNlfWA7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBvYmoucXVvdGUgIT09IG9iai5iYXNlICYmXG4gICAgICAgICAgICAgICAgICAgICFtYXJrZXRzLmhhcyhtYXJrZXRLZXkpICYmXG4gICAgICAgICAgICAgICAgICAgIG9iai5iYXNlICE9PSBcIlJVREVYLlJVQkxFXCIgJiYgcHJvcHMucXVvdGVzW2ldID09PSBcIlJVQkxFXCJcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0cyA9IG1hcmtldHMuc2V0KG1hcmtldEtleSwgb2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHttYXJrZXRzfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1hcmtldHNUYWJsZVxuICAgICAgICAgICAgICAgIG1hcmtldHM9e3RoaXMuc3RhdGUubWFya2V0c31cbiAgICAgICAgICAgICAgICBzaG93RmxpcD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgaXNGYXZvcml0ZT17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRmVhdHVyZWRNYXJrZXRzID0gY29ubmVjdChGZWF0dXJlZE1hcmtldHMsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtNYXJrZXRzU3RvcmUsIFNldHRpbmdzU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIGxldCB1c2VyTWFya2V0cyA9IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS51c2VyTWFya2V0cztcbiAgICAgICAgbGV0IGRlZmF1bHRNYXJrZXRzID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLmRlZmF1bHRNYXJrZXRzO1xuXG4gICAgICAgIGlmICh1c2VyTWFya2V0cy5zaXplKSB7XG4gICAgICAgICAgICB1c2VyTWFya2V0cy5mb3JFYWNoKChtYXJrZXQsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZGVmYXVsdE1hcmtldHMuaGFzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzID0gZGVmYXVsdE1hcmtldHMuc2V0KGtleSwgbWFya2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1hcmtldHM6IGRlZmF1bHRNYXJrZXRzXG4gICAgICAgIH07XG4gICAgfVxufSk7XG5cbmNsYXNzIFRvcE1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxNYXJrZXRzVGFibGUgbWFya2V0cz17W119IC8+O1xuICAgIH1cbn1cblxuZXhwb3J0IHtTdGFycmVkTWFya2V0cywgRmVhdHVyZWRNYXJrZXRzLCBUb3BNYXJrZXRzfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgUGFnaW5hdGVkTGlzdCBmcm9tIFwiLi4vVXRpbGl0eS9QYWdpbmF0ZWRMaXN0XCI7XG5pbXBvcnQge0lucHV0LCBUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtJY29uIGFzIEFudEljb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCB7Z2V0SW1hZ2VOYW1lfSBmcm9tIFwiYnJhbmRpbmdcIjtcblxuY2xhc3MgTWFya2V0c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZpbHRlcjogXCJcIixcbiAgICAgICAgICAgIHNob3dGbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dIaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgbWFya2V0czogW11cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnNvcnRGdW5jdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydEZ1bmN0aW9uc1trZXldID0gdGhpcy5zb3J0RnVuY3Rpb25zW2tleV0uYmluZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLnVwZGF0ZShuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKG5leHRQcm9wcyA9IG51bGwpIHtcbiAgICAgICAgbGV0IHByb3BzID0gbmV4dFByb3BzIHx8IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzaG93RmxpcCA9IHByb3BzLmZvcmNlRGlyZWN0aW9uO1xuXG4gICAgICAgIGlmIChwcm9wcy5tYXJrZXRzICYmIHByb3BzLm1hcmtldHMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGxldCBtYXJrZXRzID0gcHJvcHMubWFya2V0c1xuICAgICAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgICAgICAgICAubWFwKG1hcmtldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZSA9IENoYWluU3RvcmUuZ2V0QXNzZXQobWFya2V0LnF1b3RlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2UgPSBDaGFpblN0b3JlLmdldEFzc2V0KG1hcmtldC5iYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXNlIHx8ICFxdW90ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXROYW1lID0gYCR7bWFya2V0LmJhc2V9XyR7bWFya2V0LnF1b3RlfWA7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbWFya2V0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbWFya2V0LnF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogbWFya2V0LmJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlUHJlY2lzaW9uOiBiYXNlLmdldChcInByZWNpc2lvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuOiBwcm9wcy5oaWRkZW5NYXJrZXRzLmluY2x1ZGVzKG1hcmtldE5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGYXZvcml0ZTogcHJvcHMuaXNGYXZvcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzOiBwcm9wcy5hbGxNYXJrZXRTdGF0cy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7bWFya2V0LnF1b3RlfV8ke21hcmtldC5iYXNlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1N0YXJyZWQ6IHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldE5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gYSAhPT0gbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RmxpcCwgbWFya2V0c30pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RvZ2dsZVNob3dIaWRkZW4odmFsKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dIaWRkZW4gPT09IHZhbCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0hpZGRlbjogdmFsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9oYW5kbGVGaWx0ZXJJbnB1dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyOiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUhpZGUocm93LCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaGFuZGxlSGlkZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGFuZGxlSGlkZShyb3csIHN0YXR1cyk7XG4gICAgICAgIH1cblxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuaGlkZU1hcmtldChyb3cua2V5LCBzdGF0dXMpO1xuICAgIH1cblxuICAgIF9oYW5kbGVGbGlwKHJvdywgc3RhdHVzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmhhbmRsZUZsaXApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhbmRsZUZsaXAocm93LCBzdGF0dXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZU1hcmtldERpcmVjdGlvbih7XG4gICAgICAgICAgICBbcm93LmtleV06IHN0YXR1c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzb3J0KGFQcmljZSwgYlByaWNlKSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnQgPSBwcmljZSA9PiB7XG4gICAgICAgICAgICBwcmljZSA9IHByaWNlLnJlcGxhY2UoL1xcLC9nLCBcIlwiKTtcbiAgICAgICAgICAgIGlmIChwcmljZS5pbmNsdWRlcyhcImtcIikpIHByaWNlID0gcHJpY2UucmVwbGFjZSgvay9nLCBcIlwiKSAqIDEwMDA7XG4gICAgICAgICAgICBpZiAocHJpY2UuaW5jbHVkZXMoXCJNXCIpKVxuICAgICAgICAgICAgICAgIHByaWNlID0gcHJpY2UucmVwbGFjZSgvTS9nLCBcIlwiKSAqIDEwMDAgKiAxMDAwO1xuICAgICAgICAgICAgcmV0dXJuIHByaWNlO1xuICAgICAgICB9O1xuICAgICAgICBhUHJpY2UgPSBjb252ZXJ0KGFQcmljZSk7XG4gICAgICAgIGJQcmljZSA9IGNvbnZlcnQoYlByaWNlKTtcblxuICAgICAgICBpZiAoYVByaWNlID09PSBudWxsICYmIGJQcmljZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoYVByaWNlICE9PSBudWxsICYmIGJQcmljZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFQcmljZSAtIGJQcmljZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRGdW5jdGlvbnMgPSB7XG4gICAgICAgIGFscGhhYmV0aWM6IGZ1bmN0aW9uKGEsIGIsIGZvcmNlKSB7XG4gICAgICAgICAgICBpZiAoYS5rZXkgPiBiLmtleSkgcmV0dXJuIGZvcmNlID8gMSA6IC0xO1xuICAgICAgICAgICAgaWYgKGEua2V5IDwgYi5rZXkpIHJldHVybiBmb3JjZSA/IC0xIDogMTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBwcmljZVZhbHVlOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICBsZXQgYVByaWNlID0gYS5wcmljZS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGxldCBiUHJpY2UgPSBiLnByaWNlLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGFQcmljZSAmJiBiUHJpY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0KGFQcmljZSwgYlByaWNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEZ1bmN0aW9ucy5hbHBoYWJldGljKGEsIGIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2b2x1bWVWYWx1ZTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgbGV0IGFQcmljZSA9IGEudm9sdW1lIHx8IDA7XG4gICAgICAgICAgICBsZXQgYlByaWNlID0gYi52b2x1bWUgfHwgMDtcbiAgICAgICAgICAgIGxldCBjb21wYXJlZCA9IDA7XG4gICAgICAgICAgICBpZiAoYVByaWNlICYmIGJQcmljZSkge1xuICAgICAgICAgICAgICAgIGNvbXBhcmVkID0gYVByaWNlIC0gYlByaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbXBhcmVkID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RnVuY3Rpb25zLmFscGhhYmV0aWMoYSwgYiwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wYXJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlVmFsdWU6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIGxldCBhVmFsdWUgPSBwYXJzZUZsb2F0KGEuaG91cl8yNCk7XG4gICAgICAgICAgICBsZXQgYlZhbHVlID0gcGFyc2VGbG9hdChiLmhvdXJfMjQpO1xuICAgICAgICAgICAgbGV0IGNvbXBhcmVkID0gMDtcbiAgICAgICAgICAgIGlmIChhVmFsdWUgJiYgYlZhbHVlICYmICFpc05hTihhVmFsdWUpICYmICFpc05hTihiVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgY29tcGFyZWQgPSBhVmFsdWUgLSBiVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcGFyZWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRGdW5jdGlvbnMuYWxwaGFiZXRpYyhhLCBiLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdldEhlYWRlcigpIHtcbiAgICAgICAgY29uc3Qge3Nob3dGbGlwLCBzaG93SGlkZGVufSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInN0YXJcIixcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjc1cHhcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLCBjdXJzb3I6IFwicG9pbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5hc3NldFwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLmlzRmF2b3JpdGVcbiAgICAgICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMucXVvdGVfbmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicXVvdGVfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19PntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiIC8+LFxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJwcmljZVwiLFxuICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiB0aGlzLnNvcnRGdW5jdGlvbnMucHJpY2VWYWx1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+e2l0ZW19PC9zcGFuPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmhvdXJfMjRfc2hvcnRcIiAvPixcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaG91cl8yNFwiLFxuICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiB0aGlzLnNvcnRGdW5jdGlvbnMuY2hhbmdlVmFsdWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2VDbGFzcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHJlY29yZC5ob3VyXzI0KSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY2hhbmdlLXVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBhcnNlRmxvYXQocmVjb3JkLmhvdXJfMjQpIDwgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCIsIHRleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NoYW5nZUNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuaG91cl8yNH0lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uudm9sdW1lXCIgLz4sXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInZvbHVtZVwiLFxuICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgc29ydGVyOiB0aGlzLnNvcnRGdW5jdGlvbnMudm9sdW1lVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNvcnRPcmRlcjogXCJkZXNjZW5kXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF92b2x1bWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC52b2x1bWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC5iYXNlUHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0ZsaXBcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuZmxpcFwiIC8+LFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJmbGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNob3dIaWRkZW4gPyBcImV4Y2hhbmdlLmhpZGVcIiA6IFwiYWNjb3VudC5wZXJtLnNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImhpZGVcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgX3NldEludGVydmFsKG5leHRQcm9wcyA9IG51bGwpIHtcbiAgICAgICAgbGV0IHtiYXNlLCBxdW90ZX0gPSBuZXh0UHJvcHMgfHwgdGhpcy5wcm9wcztcbiAgICAgICAgdGhpcy5zdGF0c0NoZWNrZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBNYXJrZXRzQWN0aW9ucy5nZXRNYXJrZXRTdGF0c0ludGVydmFsKFxuICAgICAgICAgICAgMzUgKiAxMDAwLFxuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIHF1b3RlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRzSW50ZXJ2YWwpIHRoaXMuc3RhdHNJbnRlcnZhbCgpO1xuICAgIH1cblxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5zcmMgPSBcImFzc2V0LXN5bWJvbHMvdW5rbm93bi5wbmdcIjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGltZ0Vycm9yOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90b2dnbGVGYXZvcml0ZU1hcmtldChxdW90ZSwgYmFzZSkge1xuICAgICAgICBsZXQgbWFya2V0SUQgPSBgJHtxdW90ZX1fJHtiYXNlfWA7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cy5oYXMobWFya2V0SUQpKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuYWRkU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMucmVtb3ZlU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VGFibGVEYXRhKHJvdykge1xuICAgICAgICBsZXQge2Jhc2UsIHF1b3RlLCBtYXJrZXRTdGF0cywgaXNIaWRkZW4sIGludmVydGVkLCBiYXNlUHJlY2lzaW9ufSA9IHJvdztcblxuICAgICAgICBsZXQgaW1nTmFtZSA9IGdldEltYWdlTmFtZShxdW90ZSk7XG5cbiAgICAgICAgbGV0IG1hcmtldElEID0gYCR7cXVvdGV9XyR7YmFzZX1gO1xuXG4gICAgICAgIGNvbnN0IHN0YXJDbGFzcyA9IHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMuaGFzKG1hcmtldElEKVxuICAgICAgICAgICAgPyBcImdvbGQtc3RhclwiXG4gICAgICAgICAgICA6IFwiZ3JleS1zdGFyXCI7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogbWFya2V0SUQsXG4gICAgICAgICAgICBzdGFyOiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVGYXZvcml0ZU1hcmtldC5iaW5kKHRoaXMsIHF1b3RlLCBiYXNlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIubWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhc3NldDogKFxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgL21hcmtldC8ke3F1b3RlfV8ke2Jhc2V9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogMjAsIG1hcmdpblJpZ2h0OiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e3F1b3RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNGYXZvcml0ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIGRhdGFQbGFjZT1cInRvcFwiIG5hbWU9e2Jhc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxdW90ZV9uYW1lOiB0aGlzLnByb3BzLmlzRmF2b3JpdGUgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZSBub1RpcCBuYW1lPXtiYXNlfSAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBwcmljZTogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIiBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgIHttYXJrZXRTdGF0cyAmJiBtYXJrZXRTdGF0cy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB1dGlscy5wcmljZV90ZXh0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0U3RhdHMucHJpY2UudG9SZWFsKGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYWluU3RvcmUuZ2V0QXNzZXQocXVvdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBc3NldChiYXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaG91cl8yNDpcbiAgICAgICAgICAgICAgICAhbWFya2V0U3RhdHMgfHxcbiAgICAgICAgICAgICAgICAhbWFya2V0U3RhdHMuY2hhbmdlIHx8XG4gICAgICAgICAgICAgICAgbWFya2V0U3RhdHMuY2hhbmdlID09PSBcIjAuMDBcIlxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBtYXJrZXRTdGF0cy5jaGFuZ2UsXG4gICAgICAgICAgICB2b2x1bWU6XG4gICAgICAgICAgICAgICAgIW1hcmtldFN0YXRzIHx8ICFtYXJrZXRTdGF0cy52b2x1bWVCYXNlXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IG1hcmtldFN0YXRzLnZvbHVtZUJhc2UsXG4gICAgICAgICAgICBmbGlwOlxuICAgICAgICAgICAgICAgIGludmVydGVkID09PSBudWxsIHx8ICF0aGlzLnByb3BzLmlzRmF2b3JpdGUgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9oYW5kbGVGbGlwLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdy5pbnZlcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInNodWZmbGVcIiB0aXRsZT1cImljb25zLnNodWZmbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGhpZGU6IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJpY29ucy5wbHVzX2NpcmNsZS5zaG93X21hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImljb25zLmNyb3NzX2NpcmNsZS5oaWRlX21hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogMH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUhpZGUuYmluZCh0aGlzLCByb3csICFyb3cuaXNIaWRkZW4pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2lzSGlkZGVuID8gXCJwbHVzLWNpcmNsZVwiIDogXCJjcm9zcy1jaXJjbGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbnMucGx1c19jaXJjbGUuc2hvd19tYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbnMuY3Jvc3NfY2lyY2xlLmhpZGVfbWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGJhc2VQcmVjaXNpb246IGJhc2VQcmVjaXNpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7bWFya2V0cywgc2hvd0hpZGRlbiwgZmlsdGVyfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgbWFya2V0Um93cyA9IG1hcmtldHNcbiAgICAgICAgICAgIC5maWx0ZXIobSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhZmlsdGVyIHx8IG0uaXNTdGFycmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25seUxpcXVpZCAvLyB8fFxuICAgICAgICAgICAgICAgICAgICAvLyhtLm1hcmtldFN0YXRzICYmIFwidm9sdW1lQmFzZVwiIGluIG0ubWFya2V0U3RhdHMpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIW0ubWFya2V0U3RhdHMudm9sdW1lUXVvdGUgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocm93LmlzSGlkZGVuICE9PSB0aGlzLnN0YXRlLnNob3dIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChyb3cucXVvdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChyb3cuYmFzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2lzQml0QXNzZXQ6IHF1b3RlSXNCaXRBc3NldH0gPSB1dGlscy5yZXBsYWNlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpc0JpdEFzc2V0OiBiYXNlSXNCaXRBc3NldH0gPSB1dGlscy5yZXBsYWNlTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VPYmplY3RcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVTeW1ib2wgPSByb3cucXVvdGU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlU3ltYm9sID0gcm93LmJhc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1b3RlSXNCaXRBc3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2wgPSBcImdwXCIgKyBxdW90ZVN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlSXNCaXRBc3NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVN5bWJvbCA9IFwiZ3BcIiArIGJhc2VTeW1ib2w7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJQYWlyID0gZmlsdGVyLmluY2x1ZGVzKFwiOlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyUGFpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVGaWx0ZXIgPSBmaWx0ZXIuc3BsaXQoXCI6XCIpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VGaWx0ZXIgPSBmaWx0ZXIuc3BsaXQoXCI6XCIpWzFdLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKFN0cmluZyhxdW90ZUZpbHRlcikudG9Mb3dlckNhc2UoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhTdHJpbmcoYmFzZUZpbHRlcikudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZVN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoU3RyaW5nKGZpbHRlcikudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhTdHJpbmcoZmlsdGVyKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdmlzaWJsZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUYWJsZURhdGEoey4uLnJvd30pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIociA9PiAhIXIpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlci4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUZpbHRlcklucHV0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEFudEljb24gdHlwZT1cInNlYXJjaFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0b3IgaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiBcIjZweFwifX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwiaW5saW5lLWJsb2NrXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmU6IHNob3dIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTaG93SGlkZGVuLmJpbmQodGhpcywgZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuaGlkZV9oaWRkZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJpbmxpbmUtYmxvY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmFjdGl2ZTogIXNob3dIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTaG93SGlkZGVuLmJpbmQodGhpcywgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5zaG93X2hpZGRlblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMC41cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiBcIjNweCAwIDBcIiwgd2lkdGg6IFwiZml0LWNvbnRlbnRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIiwgdG9wOiAzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5vbmx5TGlxdWlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmx5TGlxdWlkOiAhdGhpcy5wcm9wcy5vbmx5TGlxdWlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC40cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2Uuc2hvd19vbmx5X2xpcXVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRlZExpc3RcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nTGVmdDogMCwgcGFkZGluZ1JpZ2h0OiAwfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgZGFzaGJvYXJkLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmdldEhlYWRlcigpfVxuICAgICAgICAgICAgICAgICAgICByb3dzPXttYXJrZXRSb3dzLmxlbmd0aCA/IG1hcmtldFJvd3MgOiBbXX1cbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInV0aWxpdHkudG90YWxfeF9tYXJrZXRzXCJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBhZGRpbmc9XCIxLjVyZW1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTWFya2V0c1RhYmxlLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZSwgTWFya2V0c1N0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICBsZXQge21hcmtldERpcmVjdGlvbnMsIGhpZGRlbk1hcmtldHN9ID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWFya2V0RGlyZWN0aW9ucyxcbiAgICAgICAgICAgIGhpZGRlbk1hcmtldHMsXG4gICAgICAgICAgICBhbGxNYXJrZXRTdGF0czogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMsXG4gICAgICAgICAgICBzdGFycmVkTWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgb25seUxpcXVpZDogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5ncy5nZXQoXG4gICAgICAgICAgICAgICAgXCJvbmx5TGlxdWlkXCIsXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7VGFibGV9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IFwiLi9wYWdpbmF0ZWQtbGlzdC5zY3NzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRlZExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICByb3dzOiBbXSxcclxuICAgICAgICBwYWdlU2l6ZTogMjAsXHJcblxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJ0YWJsZVwiLFxyXG4gICAgICAgIGV4dHJhUm93OiBudWxsLFxyXG4gICAgICAgIHN0eWxlOiB7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9LFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG5cclxuICAgICAgICAvLyBjYW4gYmUgYSBzdHJpbmcgKGFzc3VtZXMgdGhlIHRyYW5zbGF0aW9uIGhhcyBvbmUgYXJndW1lbnQsIHRvdGFsIGNvdW50KSxcclxuICAgICAgICAvLyBvciBhbiBvYmplY3QsIHdoaWNoIGFsbG93cyBhIGN1c3RvbSBsYWJlbFxyXG4gICAgICAgIHRvdGFsTGFiZWw6IFwidXRpbGl0eS50b3RhbF94X2l0ZW1zXCIsXHJcblxyXG4gICAgICAgIC8vIEBkZXByZWNhdGVkLCB1c2UgdG90YWxMYWJlbFxyXG4gICAgICAgIGxhYmVsOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcHJvcHMucGFnZVNpemVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7cGFnZVNpemV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7aGVhZGVyLCByb3dzLCBleHRyYVJvdywgbG9hZGluZ30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwLCAxMDBdLmZpbHRlcihcclxuICAgICAgICAgICAgaXRlbSA9PiBpdGVtIDwgTWF0aC5tYXgodGhpcy5wcm9wcy5wYWdlU2l6ZSwgcm93cy5sZW5ndGgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBwYWdlU2l6ZU9wdGlvbnMucHVzaChNYXRoLm1heCh0aGlzLnByb3BzLnBhZ2VTaXplLCByb3dzLmxlbmd0aCkpO1xyXG5cclxuICAgICAgICBsZXQgdG90YWxDb2x1bW5zTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhYmVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29sdW1uc0xhYmVsID0gdG90YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRvdGFsTGFiZWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMudG90YWxMYWJlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50b3RhbExhYmVsID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29sdW1uc0xhYmVsID0gdG90YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLnRvdGFsTGFiZWwua2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMudG90YWxMYWJlbC5hcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGVkLWxpc3RcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Jvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17QXJyYXkuaXNBcnJheShoZWFkZXIpID8gaGVhZGVyIDogW119XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXsoKSA9PiAoZXh0cmFSb3cgPyBleHRyYVJvdyA6IDxzcGFuPiZuYnNwOzwvc3Bhbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLnRvZ2dsZVNvcnRPcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaXplQ2hhbmdlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9uU2luZ2xlUGFnZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQYWdlU2l6ZTogcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplT3B0aW9uczogcGFnZVNpemVPcHRpb25zLm1hcChvID0+IG8udG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb3RhbDogKHRvdGFsLCByYW5nZSkgPT4gdG90YWxDb2x1bW5zTGFiZWwodG90YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByb3dDbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJvd0NsYXNzTmFtZSA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAocmVjb3JkLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucm93Q2xhc3NOYW1lKHJlY29yZCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17dGhpcy5wcm9wcy5yb3dTZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbi8qKlxuICogIFJlbmRlcnMgYSB0YWIgbGF5b3V0LCBoYW5kbGluZyBzd2l0Y2hpbmcgYW5kIG9wdGlvbmFsbHkgcGVyc2lzdHMgdGhlIGN1cnJlbnRseSBvcGVuIHRhYiB1c2luZyB0aGUgU2V0dGluZ3NTdG9yZVxuICpcbiAqICBwcm9wczpcbiAqICAgICBzZXR0aW5nOiB1bmlxdWUgbmFtZSB0byBiZSB1c2VkIHRvIHJlbWVtYmVyIHRoZSBhY3RpdmUgdGFiIG9mIHRoaXMgdGFicyBsYXlvdXQsXG4gKiAgICAgdGFic0NsYXNzOiBvcHRpb25hbCBjbGFzc2VzIGZvciB0aGUgdGFicyBjb250YWluZXIgZGl2XG4gKiAgICAgY29udGVudENsYXNzOiBvcHRpb25hbCBjbGFzc2VzIGZvciB0aGUgY29udGVudCBjb250YWluZXIgZGl2XG4gKlxuICogIFVzYWdlOlxuICpcbiAqICA8VGFicyBzZXR0aW5nPVwibXlTZXR0aW5nXCI+XG4gKiAgICAgIDxUYWIgdGl0bGU9XCJsb2NhbGUuc3RyaW5nLnRpdGxlMVwiPlRhYiAxIGNvbnRlbnQ8L1RhYj5cbiAqICAgICAgPFRhYiB0aXRsZT1cImxvY2FsZS5zdHJpbmcudGl0bGUyXCI+VGFiIDIgY29udGVudDwvVGFiPlxuICogIDwvVGFicz5cbiAqXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjaGFuZ2VUYWI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpc0xpbmtUbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgc3ViVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICAgICAgaXNMaW5rVG86IFwiXCIsXG4gICAgICAgIHN1YlRleHQ6IG51bGxcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGNoYW5nZVRhYixcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgdXBkYXRlZFRhYixcbiAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgc3ViVGV4dFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGMgPSBjbmFtZXMoe1wiaXMtYWN0aXZlXCI6IGlzQWN0aXZlfSwgY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiICYmIHRpdGxlLmluZGV4T2YoXCIuXCIpID4gMCkge1xuICAgICAgICAgICAgdGl0bGUgPSBjb3VudGVycGFydC50cmFuc2xhdGUodGl0bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZG9udCBzdHJpbmcgY29uY2V0ZW5hdGUgc3ViVGV4dCBkaXJlY3RseSB3aXRoaW4gdGhlIHJlbmRlcmluZywgc3ViVGV4dCBjYW4gYmUgYW4gb2JqZWN0IHdpdGhvdXQgdG9TdHJpbmdcbiAgICAgICAgLy8gaW1wbGVtZW50YXRpb24sIGJ1dCB2YWxpZCBET00gKG1lYW5pbmcsIGRvbid0IGRvIHN1YlRleHQgKyBcInNvbWVTdHJpbmdcIlxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgLy8gaWYgc3ViVGV4dCBpcyBlbXB0eSwgZG9udCByZW5kZXIgaXQsIHdlIGRvbnQgd2FudCBlbXB0eSBicmFja2V0cyBhZGRlZFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdWJUZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgc3ViVGV4dCA9IHN1YlRleHQudHJpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpdGxlLnR5cGUgPT09IFwic3BhblwiKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUgPSB0aXRsZS5wcm9wcy5jaGlsZHJlblsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXh9IGRhdGEtaXMtbGluay10bz17dGhpcy5wcm9wcy5pc0xpbmtUb30+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAge3VwZGF0ZWRUYWIgPyBcIipcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIFwiIChcIn1cbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgc3ViVGV4dH1cbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgXCIpXCJ9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N9XG4gICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICFkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGFuZ2VUYWIuYmluZCh0aGlzLCBpbmRleCwgdGhpcy5wcm9wcy5pc0xpbmtUbylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFiLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXBkYXRlZFRhYiA/IFwiKlwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRhYi1zdWJ0ZXh0XCI+e3N1YlRleHR9PC9kaXY+fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzZXR0aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZWZhdWx0QWN0aXZlVGFiOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBzZWdtZW50ZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFjdGl2ZTogMCxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYjogMCxcbiAgICAgICAgc2VnbWVudGVkOiB0cnVlLFxuICAgICAgICBjb250ZW50Q2xhc3M6IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7fVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlVGFiOiBwcm9wcy5zZXR0aW5nXG4gICAgICAgICAgICAgICAgPyBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KHByb3BzLnNldHRpbmcsIHByb3BzLmRlZmF1bHRBY3RpdmVUYWIpXG4gICAgICAgICAgICAgICAgOiBwcm9wcy5kZWZhdWx0QWN0aXZlVGFiLFxuICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBuZXh0U2V0dGluZyA9IG5leHRQcm9wcy52aWV3U2V0dGluZ3MuZ2V0KG5leHRQcm9wcy5zZXR0aW5nKTtcbiAgICAgICAgaWYgKG5leHRTZXR0aW5nICE9PSB0aGlzLnByb3BzLnZpZXdTZXR0aW5ncy5nZXQodGhpcy5wcm9wcy5zZXR0aW5nKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiOiBuZXh0U2V0dGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgX3NldERpbWVuc2lvbnMoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGh9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jaGFuZ2VUYWIodmFsdWUsIGlzTGlua1RvKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVUYWIpIHJldHVybjtcbiAgICAgICAgLy8gUGVyc2lzdCBjdXJyZW50IHRhYiBpZiBkZXNpcmVkXG5cbiAgICAgICAgaWYgKGlzTGlua1RvICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChpc0xpbmtUbyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXR0aW5nKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLnNldHRpbmddOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiB2YWx1ZX0pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlVGFiKSB0aGlzLnByb3BzLm9uQ2hhbmdlVGFiKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2hpbGRyZW4sIGNvbnRlbnRDbGFzcywgdGFic0NsYXNzLCBzdHlsZSwgc2VnbWVudGVkfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlVGFicyA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpZHRoIDwgOTAwICYmIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDI7XG5cbiAgICAgICAgbGV0IGFjdGl2ZUNvbnRlbnQgPSBudWxsO1xuXG4gICAgICAgIGxldCB0YWJzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sbGFwc2VUYWJzICYmIGNoaWxkLnByb3BzLmRpc2FibGVkKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9IGluZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYjtcbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbnRlbnQgPSBjaGlsZC5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogY29sbGFwc2VUYWJzLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgICAgICAgIGNoYW5nZVRhYjogdGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuZmlsdGVyKGEgPT4gYSAhPT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKCFhY3RpdmVDb250ZW50KSB7XG4gICAgICAgICAgICBhY3RpdmVDb250ZW50ID0gdGFic1swXS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zID8gXCJ3aXRoLWJ1dHRvbnNcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2Utc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImJ1dHRvbi1ncm91cCBuby1tYXJnaW5cIiwgdGFic0NsYXNzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbGxhcHNlVGFicyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIxNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hY3RpdmVUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogMTAsIG1hcmdpbkJvdHRvbTogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0W2luZF0uYXR0cmlidXRlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1pcy1saW5rLXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFic31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYnMtYWN0aW9uLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWN0aW9uQnV0dG9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuYW1lcyhcInRhYi1jb250ZW50XCIsIGNvbnRlbnRDbGFzcyl9PlxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlQ29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVGFicyA9IGNvbm5lY3QoVGFicywge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7dmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzfTtcbiAgICB9XG59KTtcblxuVGFicyA9IHdpdGhSb3V0ZXIoVGFicyk7XG5cbmV4cG9ydCB7VGFicywgVGFifTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==