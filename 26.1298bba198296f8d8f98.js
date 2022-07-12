"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[26],{

/***/ 2731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2118);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2085);
/* harmony import */ var _Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2732);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2701);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(607);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1825);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2339);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(657);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2098);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__);












class MarketRow extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static defaultProps = {
    noSymbols: false
  };

  constructor() {
    super();
    this.statsInterval = null;
  }

  _onClick(marketID) {
    const newPath = `/market/${marketID}`;

    if (newPath !== this.props.location.pathname) {
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].switchMarket();
      this.props.history.push(`/market/${marketID}`);
    }
  }

  componentDidMount() {
    this.statsChecked = new Date();

    if (this.props.base && this.props.quote && this.props.base.get && this.props.base.get("id") && this.props.quote.get && this.props.quote.get("id")) {
      this.statsInterval = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].getMarketStatsInterval(35 * 1000, this.props.base, this.props.quote);
    }
  }

  componentWillUnmount() {
    if (this.statsInterval) this.statsInterval();
  }

  shouldComponentUpdate(nextProps) {
    return !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(nextProps, this.props);
  }

  _onStar(quote, base, e) {
    e.preventDefault();

    if (!this.props.starred) {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].addStarMarket(quote, base);
    } else {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__["default"].removeStarMarket(quote, base);
    }
  }

  render() {
    let {
      quote,
      base,
      noSymbols,
      stats,
      starred
    } = this.props;

    if (!quote || !base) {
      return null;
    }

    let marketID = quote.get("symbol") + "_" + base.get("symbol");
    let marketName = quote.get("symbol") + ":" + base.get("symbol");
    let dynamic_data = this.props.getDynamicObject(quote.get("dynamic_asset_data_id"));
    let base_dynamic_data = this.props.getDynamicObject(base.get("dynamic_asset_data_id"));
    let price = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].convertPrice(quote, base);
    let rowStyles = {};

    if (this.props.leftAlign) {
      rowStyles.textAlign = "left";
    }

    let buttonClass = "button outline";
    let buttonStyle = null;

    if (this.props.compact) {
      buttonClass += " no-margin";
      buttonStyle = {
        marginBottom: 0,
        fontSize: "0.75rem",
        padding: "4px 10px",
        borderRadius: "0px",
        letterSpacing: "0.05rem"
      };
    }

    let columns = this.props.columns.map(column => {
      switch (column.name) {
        case "star":
          let starClass = starred ? "gold-star" : "grey-star";
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            onClick: this._onStar.bind(this, quote.get("symbol"), base.get("symbol")),
            key: column.index
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: starClass,
            name: "fi-star",
            title: "icons.fi_star.symbol"
          }));

        case "vol":
          let amount = stats ? stats.volumeBase : 0;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            onClick: this._onClick.bind(this, marketID),
            className: "text-right",
            key: column.index
          }, common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_volume(amount));

        case "change":
          let change = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_number(stats && stats.change ? stats.change : 0, 2);
          let changeClass = change === "0.00" ? "" : change > 0 ? "change-up" : "change-down";
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            onClick: this._onClick.bind(this, marketID),
            className: "text-right " + changeClass,
            key: column.index
          }, change + "%");

        case "marketName":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            onClick: this._onClick.bind(this, marketID),
            key: column.index
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: buttonClass,
            style: buttonStyle
          }, marketName));

        case "market":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            onClick: this._onClick.bind(this, marketID),
            key: column.index
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
            replaceNoneToBts: false,
            maxWidth: 20,
            name: quote.get("symbol")
          }), this.props.name);

        case "price":
          let finalPrice = stats && stats.price ? stats.price.toReal() : stats && stats.close && stats.close.quote.amount && stats.close.base.amount ? common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_price(stats.close.quote.amount, quote, stats.close.base.amount, base, true) : common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_price(price.quote.amount, quote, price.base.amount, base, true);
          let highPrecisionAssets = ["BTC", "RUDEX.BTC", "GOLD", "SILVER"];
          let precision = 6;

          if (highPrecisionAssets.indexOf(base.get("symbol")) !== -1) {
            precision = 8;
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            onClick: this._onClick.bind(this, marketID),
            className: "text-right",
            key: column.index
          }, common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].format_number(finalPrice, finalPrice > 1000 ? 0 : finalPrice > 10 ? 2 : precision));

        case "quoteSupply":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            onClick: this._onClick.bind(this, marketID),
            key: column.index
          }, dynamic_data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
            style: {
              fontWeight: "bold"
            },
            amount: parseInt(dynamic_data.get("current_supply"), 10),
            asset: quote.get("id")
          }) : null);

        case "baseSupply":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            onClick: this._onClick.bind(this, marketID),
            key: column.index
          }, base_dynamic_data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
            style: {
              fontWeight: "bold"
            },
            amount: parseInt(base_dynamic_data.get("current_supply"), 10),
            asset: base.get("id")
          }) : null);

        case "issuer":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            onClick: this._onClick.bind(this, marketID),
            key: column.index
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__["default"], {
            account: quote.get("issuer")
          }));

        case "add":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            style: {
              textAlign: "right"
            },
            key: column.index,
            onClick: this.props.onCheckMarket.bind(this, marketID)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__.Tooltip, {
            title: this.props.isDefault ? "This market is a default market and cannot be removed" : null
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
            type: "checkbox",
            checked: !!this.props.isChecked || this.props.isDefault,
            disabled: this.props.isDefault
          })));

        case "remove":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
            key: column.index,
            className: "clickable",
            onClick: this.props.removeMarket
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            style: {
              marginBottom: "6px",
              marginRight: "6px",
              zIndex: 999
            },
            className: "text float-right remove"
          }, "\u2013"));

        default:
          break;
      }
    }).sort((a, b) => {
      return a.key > b.key;
    });
    let className = "clickable";

    if (this.props.current) {
      className += " activeMarket";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      className: className,
      style: rowStyles
    }, columns);
  }

}

MarketRow = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.withRouter)(MarketRow);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__["default"])(MarketRow, {
  propNames: ["quote", "base"],
  defaultProps: {
    tempComponent: "tr"
  },
  withDynamic: true
}));

/***/ }),

/***/ 2730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2737);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2670);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2436);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1816);
/* harmony import */ var _MarketRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2731);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(656);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2338);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2347);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2088);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(657);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2348);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2339);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2733);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1941);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(437);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2110);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(665);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2092);
/* harmony import */ var _QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2735);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2736);



























class MarketGroup extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static defaultProps = {
    maxRows: 20,
    onlyLiquid: false
  };

  constructor(props) {
    super();
    this.state = this._getInitialState(props);
  }

  _getInitialState(props) {
    let open = props.findMarketTab ? true : props.viewSettings.get(`myMarketsBase_${props.index}`);
    return {
      open: open !== undefined ? open : true,
      inverseSort: props.viewSettings.get("myMarketsInvert", true),
      sortBy: props.viewSettings.get("myMarketsSort", "volume")
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.findMarketTab !== this.props.findMarketTab) {
      this.setState(this._getInitialState(nextProps));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextProps.markets || !this.props.markets) {
      return true;
    }

    return !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextState, this.state) || !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextProps.markets, this.props.markets) || nextProps.starredMarkets !== this.props.starredMarkets || nextProps.marketStats !== this.props.marketStats || nextProps.userMarkets !== this.props.userMarkets;
  }

  _inverseSort() {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeViewSetting({
      myMarketsInvert: !this.state.myMarketsInvert
    });
    this.setState({
      inverseSort: !this.state.inverseSort
    });
  }

  _changeSort(type) {
    if (type !== this.state.sortBy) {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeViewSetting({
        myMarketsSort: type
      });
      this.setState({
        sortBy: type
      });
    } else {
      this._inverseSort();
    }
  } // _onSelectBase(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     SettingsActions.changeBase(this.props.index, e.target.value);
  // }


  _onToggle() {
    if (!this.props.findMarketTab) {
      let open = !this.state.open;
      this.setState({
        open: open
      });
      let setting = {};
      setting[`myMarketsBase_${this.props.index}`] = open;
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeViewSetting(setting);
    }
  }

  _onToggleUserMarket(market) {
    let [base, quote] = market.split("_");
    let newValue = !this.props.userMarkets.get(market);
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__["default"].setUserMarket(base, quote, newValue);
  }

  render() {
    let {
      columns,
      markets,
      base,
      marketStats,
      starredMarkets,
      current
    } = this.props;
    let {
      sortBy,
      inverseSort,
      open
    } = this.state;

    if (!markets || !markets.length) {
      return null;
    }

    let headers = columns.map(header => {
      switch (header.name) {
        case "market":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
            key: header.name,
            className: "clickable",
            onClick: this._changeSort.bind(this, "name")
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
            content: "exchange.market"
          }));

        case "vol":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
            key: header.name,
            className: "clickable",
            onClick: this._changeSort.bind(this, "volume"),
            style: {
              textAlign: "right"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
            content: "exchange.vol_short"
          }));

        case "price":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
            key: header.name,
            style: {
              textAlign: "right"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
            content: "exchange.price"
          }));

        case "quoteSupply":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
            key: header.name
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
            content: "exchange.base_supply"
          }));

        case "baseSupply":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
            key: header.name
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
            content: "exchange.quote_supply"
          }));

        case "change":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
            key: header.name,
            className: "clickable",
            onClick: this._changeSort.bind(this, "change"),
            style: {
              textAlign: "right"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
            content: "exchange.change"
          }));

        case "issuer":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
            key: header.name
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
            content: "explorer.assets.issuer"
          }));

        case "add":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
            key: header.name,
            style: {
              textAlign: "right"
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
            content: "account.perm.confirm_add"
          }));

        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
            key: header.name
          });
      }
    });
    let marketRows = markets.map(market => {
      if (this.props.onlyLiquid && marketStats.get(market.id) && marketStats.get(market.id).volumeBase == 0) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MarketRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: market.id,
        name: base === "others" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
          name: market.quote
        }), ":", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
          name: market.base
        })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
          dataPlace: "left",
          name: market.quote
        }),
        quote: market.quote,
        base: market.base,
        columns: columns,
        leftAlign: true,
        compact: true,
        noSymbols: true,
        stats: marketStats.get(market.id),
        starred: starredMarkets.has(market.id),
        current: current === market.id,
        isChecked: this.props.userMarkets.has(market.id),
        isDefault: this.props.defaultMarkets && this.props.defaultMarkets.has(market.id),
        onCheckMarket: this._onToggleUserMarket.bind(this),
        location: this.props.location,
        history: this.props.history
      });
    }).filter(a => {
      return a !== null;
    }).sort((a, b) => {
      let a_symbols = a.key.split("_");
      let b_symbols = b.key.split("_");
      let aStats = marketStats.get(a_symbols[0] + "_" + a_symbols[1]);
      let bStats = marketStats.get(b_symbols[0] + "_" + b_symbols[1]);

      switch (sortBy) {
        case "name":
          if (a_symbols[0] > b_symbols[0]) {
            return inverseSort ? -1 : 1;
          } else if (a_symbols[0] < b_symbols[0]) {
            return inverseSort ? 1 : -1;
          } else {
            if (a_symbols[1] > b_symbols[1]) {
              return inverseSort ? -1 : 1;
            } else if (a_symbols[1] < b_symbols[1]) {
              return inverseSort ? 1 : -1;
            } else {
              return 0;
            }
          }

        case "volume":
          if (aStats && bStats) {
            if (inverseSort) {
              return bStats.volumeBase - aStats.volumeBase;
            } else {
              return aStats.volumeBase - bStats.volumeBase;
            }
          } else {
            return 0;
          }

        case "change":
          if (aStats && bStats) {
            if (inverseSort) {
              return bStats.change - aStats.change;
            } else {
              return aStats.change - bStats.change;
            }
          } else {
            return 0;
          }

      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingRight: 10
      }
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table table-hover text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, headers)), marketRows && marketRows.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, marketRows) : null) : null);
  }

}

class MyMarkets extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static defaultProps = {
    activeTab: "my-market",
    setMinWidth: false
  };

  constructor(props) {
    super();
    this.state = {
      isQuoteModalVisible: false,
      inverseSort: props.viewSettings.get("myMarketsInvert", true),
      sortBy: props.viewSettings.get("myMarketsSort", "volume"),
      activeTab: props.viewSettings.get("favMarketTab", "my-market"),
      activeMarketTab: props.viewSettings.get("activeMarketTab", 0),
      lookupQuote: null,
      lookupBase: null,
      inputValue: "",
      minWidth: "100%",
      findBaseInput: "GPH",
      activeFindBase: "GPH"
    };
    this._setMinWidth = this._setMinWidth.bind(this);
    this.getAssetList = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_25__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_13__["default"].getAssetList.defer, 150);
    this.showQuoteModal = this.showQuoteModal.bind(this);
    this.hideQuoteModal = this.hideQuoteModal.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    /* Trigger a lookup when switching tabs to find-market */
    if (this.state.activeTab !== "find-market" && nextState.activeTab === "find-market" && !nextProps.searchAssets.size) {
      this._lookupAssets("RUDEX.", true);
    }

    if (this.state.activeTab !== nextState.activeTab) {
      this._changeTab(nextState.activeTab);
    } else if (!nextProps.tabHeader && this.state.activeTab !== nextProps.activeTab) {
      this._changeTab(nextProps.activeTab);
    }

    return !immutable__WEBPACK_IMPORTED_MODULE_1___default().is(nextProps.searchAssets, this.props.searchAssets) || !immutable__WEBPACK_IMPORTED_MODULE_1___default().is(nextProps.markets, this.props.markets) || !immutable__WEBPACK_IMPORTED_MODULE_1___default().is(nextProps.starredMarkets, this.props.starredMarkets) || !immutable__WEBPACK_IMPORTED_MODULE_1___default().is(nextProps.defaultMarkets, this.props.defaultMarkets) || !immutable__WEBPACK_IMPORTED_MODULE_1___default().is(nextProps.marketStats, this.props.marketStats) || !common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].are_equal_shallow(nextState, this.state) || nextProps.current !== this.props.current || nextProps.minWidth !== this.props.minWidth || nextProps.listHeight !== this.props.listHeight || nextProps.preferredBases !== this.props.preferredBases || nextProps.onlyStars !== this.props.onlyStars || nextProps.onlyLiquid !== this.props.onlyLiquid || nextProps.assetsLoading !== this.props.assetsLoading || nextProps.userMarkets !== this.props.userMarkets;
  }

  UNSAFE_componentWillMount() {
    if (this.props.setMinWidth) {
      window.addEventListener("resize", this._setMinWidth, {
        capture: false,
        passive: true
      });
    }

    if (this.props.currrent) {
      const currentBase = this.props.current.split("_")[1];
      const currentIndex = this.props.preferredBases.findIndex(a => a === currentBase);

      if (currentIndex !== -1 && currentIndex !== this.state.activeMarketTab) {
        this.setState({
          activeMarketTab: currentIndex
        });
      }
    }
  }

  componentDidMount() {
    let historyContainer = this.refs.favorites;
    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default().initialize(historyContainer);

    this._setMinWidth();

    if (this.state.activeTab === "find-market") {
      this._lookupAssets("RUDEX.", true);
    }

    if (this.state.activeTab !== this.props.activeTab) {
      setTimeout(() => {
        this._changeTab(this.props.activeTab);
      }, 100);
    }
  }

  componentWillUnmount() {
    if (this.props.setMinWidth) {
      window.removeEventListener("resize", this._setMinWidth);
    }

    clearTimeout(this.timer);
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (this.props.myMarketTab && !np.myMarketTab) {
      if (this.refs.findSearchInput) this.refs.findSearchInput.focus();
    }
  }

  hideQuoteModal() {
    this.setState({
      isQuoteModalVisible: false
    });
  }

  showQuoteModal() {
    this.setState({
      isQuoteModalVisible: true
    });
  }

  _setMinWidth() {
    if (this.props.setMinWidth && this.refs.favorites && this.props.activeTab === "my-market") {
      if (this.state.minWidth !== this.refs.favorites.offsetWidth) {
        this.setState({
          minWidth: this.refs.favorites.offsetWidth
        });
      }
    }
  }

  componentDidUpdate() {
    if (this.refs.favorites) {
      let historyContainer = this.refs.favorites;
      perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default().update(historyContainer);
    }
  }

  _inverseSort() {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeViewSetting({
      myMarketsInvert: !this.state.myMarketsInvert
    });
    this.setState({
      inverseSort: !this.state.inverseSort
    });
  }

  _changeSort(type) {
    if (type !== this.state.sortBy) {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeViewSetting({
        myMarketsSort: type
      });
      this.setState({
        sortBy: type
      });
    } else {
      this._inverseSort();
    }
  }

  _goMarkets() {
    this.props.history.push("/markets");
  }

  _changeTab(tab) {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeViewSetting({
      favMarketTab: tab
    });
    this.setState({
      activeTab: tab
    });

    this._setMinWidth();
  }

  _onInputName(getBackedAssets, e) {
    let toFind = e.target.value.trim().toUpperCase();
    let isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_19__.ChainValidation.is_valid_symbol_error(toFind, true);
    this.setState({
      inputValue: toFind
    });
    /* Don't lookup invalid asset names */

    if (toFind && toFind.length >= 2 && !isValidName) return;

    if (this.state.inputValue !== toFind) {
      this.timer && clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this._lookupAssets(toFind, getBackedAssets);
    }, 1500);
  }

  _lookupAssets(value, gatewayAssets = false) {
    if (!value && value !== "") return;
    let symbols = value.toUpperCase().split(":");
    let quote = symbols[0];
    let base = symbols.length === 2 ? symbols[1] : null;
    this.setState({
      lookupQuote: quote,
      lookupBase: base
    });
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeViewSetting.defer({
      marketLookupInput: value.toUpperCase()
    });
    this.getAssetList(quote, 50, gatewayAssets);
  }

  toggleActiveMarketTab(index) {
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeViewSetting({
      activeMarketTab: index
    });
    this.setState({
      activeMarketTab: index
    });
  }

  _onInputBaseAsset(asset) {
    this.setState({
      findBaseInput: asset.toUpperCase(),
      error: null
    });
  }

  _onFoundBaseAsset(asset) {
    if (asset) {
      this.setState({
        activeFindBase: asset.get("symbol")
      });
    }
  }

  clearInput = () => {
    this.setState({
      myMarketFilter: ""
    });
  };
  handleSearchUpdate = e => {
    this.setState({
      myMarketFilter: e.target.value && e.target.value.toUpperCase()
    });
  };

  _getMarkets() {
    const {
      searchAssets,
      defaultMarkets,
      onlyStars,
      userMarkets,
      preferredBases,
      starredMarkets
    } = this.props;
    const {
      activeTab,
      lookupQuote,
      lookupBase,
      myMarketFilter,
      activeMarketTab
    } = this.state;
    const possibleGatewayAssets = (0,common_gateways__WEBPACK_IMPORTED_MODULE_22__.getPossibleGatewayPrefixes)(preferredBases);

    let bases = this._getBases();

    let allMarkets = [],
        baseGroups = {};
    let otherMarkets = [];
    const myMarketTab = activeTab === "my-market";

    if (searchAssets.size) {
      searchAssets.filter(a => {
        try {
          if (a.options.description) {
            let description = JSON.parse(a.options.description);

            if ("visible" in description) {
              if (!description.visible) return false;
            }
          }
        } catch (e) {}

        return a.symbol.indexOf(lookupQuote) !== -1 && a.symbol.length >= lookupQuote.length;
      }).forEach(asset => {
        bases.forEach(base => {
          let marketID = asset.symbol + "_" + base;

          if (base !== asset.symbol) {
            allMarkets.push([marketID, {
              quote: asset.symbol,
              base: base
            }]);
          }
        });
      });
    }

    allMarkets = allMarkets.filter(a => {
      // If a base asset is specified, limit the quote asset to the exact search term
      if (lookupBase) {
        return a[1].quote === lookupQuote;
      }

      return true;
    });
    let activeMarkets = myMarketTab ? defaultMarkets : immutable__WEBPACK_IMPORTED_MODULE_1___default().Map(allMarkets);

    if (myMarketTab && userMarkets.size) {
      userMarkets.forEach((market, key) => {
        if (!activeMarkets.has(key)) activeMarkets = activeMarkets.set(key, market);
      });
    }

    function filterAndSeparateMarkets(base, matchBases, markets, baseGroups, otherMarkets) {
      let others = markets.filter(a => {
        if (a.base === a.quote) return false;
        /* Return search results in the Find Markets Tab */

        if (!myMarketTab) {
          if (lookupQuote.length < 1) {
            return false;
          }

          return a.quote.indexOf(lookupQuote) !== -1;
        } else {
          /* Return filtered markets if a filter is input */
          const ID = a.quote + "_" + a.base;

          if (!!myMarketFilter) {
            return ID.indexOf(myMarketFilter) !== -1;
          }
          /* Return only starred markets if that option is checked */


          if (onlyStars && !starredMarkets.has(ID)) {
            return false;
          }
          /* Else return all markets */


          return true;
        }
      }).map(market => {
        let marketID = market.quote + "_" + market.base;

        if (matchBases.indexOf(market.base) !== -1) {
          if (!baseGroups[base]) {
            baseGroups[base] = [];
          }

          let marketObject = {
            id: marketID,
            quote: market.quote,
            base: market.base
          };
          if (!baseGroups[base].find(m => m.id === marketID)) baseGroups[base].push(marketObject);
          return null;
        } else if (!preferredBases.includes(market.base) && possibleGatewayAssets.indexOf(market.base) === -1) {
          // console.log("Adding to other markets:", base, market.base, preferredBases.toJS())
          return {
            id: marketID,
            quote: market.quote,
            base: market.base
          };
        }
      }).filter(a => !!a).take(myMarketTab ? 100 : 20).toArray();
      return {
        otherMarkets: others.concat(otherMarkets),
        baseGroups
      };
    }

    if (activeMarkets.size > 0) {
      const currentBase = myMarketTab ? preferredBases.get(activeMarketTab) : this.state.activeFindBase;
      ({
        otherMarkets,
        baseGroups
      } = filterAndSeparateMarkets(currentBase, [currentBase], activeMarkets, baseGroups, otherMarkets));
      /* Check for possible gateway versions of the asset */

      common_gateways__WEBPACK_IMPORTED_MODULE_22__.gatewayPrefixes.forEach(prefix => {
        let possibleGatewayAssetName = `${prefix}.${currentBase}`;
        let gatewayAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_19__.ChainStore.getAsset(possibleGatewayAssetName);
        /* If the gateway offers an asset for this base, add it to the list */

        if (!!gatewayAsset) {
          let gatewayMarkets = activeMarkets.map(m => {
            if (m.quote === m.base) return null;
            let newID = `${m.quote}_${possibleGatewayAssetName}`;
            if (activeMarkets.has(newID)) return null;
            if (possibleGatewayAssetName == "RUDEX.RUBLE") return null;
            return {
              base: possibleGatewayAssetName,
              quote: m.quote
            };
          }, {}).filter(m => !!m);
          ({
            otherMarkets,
            baseGroups
          } = filterAndSeparateMarkets(currentBase, [currentBase, possibleGatewayAssetName], gatewayMarkets, baseGroups, otherMarkets));
        }
      });
    }

    return {
      baseGroups,
      otherMarkets
    };
  }

  _getBases() {
    let {
      preferredBases,
      searchAssets
    } = this.props;
    let {
      lookupQuote,
      lookupBase
    } = this.state;
    let bases = searchAssets.filter(a => {
      if (lookupBase && lookupBase.length) {
        return a.symbol.indexOf(lookupBase) === 0;
      }

      return a.symbol.indexOf(lookupQuote) !== -1;
    }).map(asset => {
      if (lookupBase && lookupBase.length) {
        if (asset.symbol.indexOf(lookupBase) === 0) {
          return asset.symbol;
        }
      } else if (preferredBases.includes(asset.symbol)) {
        if (asset.symbol.length >= lookupQuote.length && asset.symbol.length < lookupQuote.length + 3) {
          return asset.symbol;
        }
      }
    }).filter(a => !!a).toArray();
    bases = bases.concat(preferredBases.filter(a => {
      if (!lookupBase || !lookupBase.length) {
        return true;
      }

      return a.indexOf(lookupBase) === 0;
    }).toArray());
    bases = bases.filter(base => {
      if (lookupBase && lookupBase.length > 1) {
        return base.indexOf(lookupBase) === 0;
      } else {
        return true;
      }
    });
    return bases;
  }

  render() {
    let {
      starredMarkets,
      marketStats,
      columns,
      assetsLoading,
      preferredBases,
      current,
      viewSettings,
      listHeight
    } = this.props;
    let {
      activeMarketTab,
      activeTab
    } = this.state;
    const myMarketTab = activeTab === "my-market";
    let defaultBases = preferredBases.map(a => a);

    if (!myMarketTab) {
      preferredBases = preferredBases.clear();
      preferredBases = preferredBases.push(this.state.activeFindBase);
    } // Add some default base options
    // let preferredBases = [coreSymbol, "BTC", "USD", "CNY"];

    /* In the find-market tab, only use market tab 0 */


    if (!myMarketTab) activeMarketTab = 0;

    let {
      baseGroups,
      otherMarkets
    } = this._getMarkets();

    const hasOthers = otherMarkets && otherMarkets.length;
    let hc = "mymarkets-header clickable";
    let starClass = classnames__WEBPACK_IMPORTED_MODULE_15___default()(hc, {
      inactive: !myMarketTab
    });
    let allClass = classnames__WEBPACK_IMPORTED_MODULE_15___default()(hc, {
      inactive: myMarketTab
    });
    let listStyle = {
      minWidth: this.state.minWidth,
      minHeight: "6rem",
      paddingBottom: "2rem"
    };

    if (listHeight) {
      listStyle.height = listHeight;
    }

    const translator = __webpack_require__(623);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, this.props.tabHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: this.props.headerStyle,
      className: "grid-block shrink left-orderbook-header bottom-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: "myMarkets",
      className: starClass,
      onClick: this._changeTab.bind(this, "my-market"),
      "data-intro": translator.translate("walkthrough.my_markets_tab")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.market_name"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: allClass,
      onClick: this._changeTab.bind(this, "find-market"),
      "data-intro": translator.translate("walkthrough.find_markets_tab")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.more"
    }))) : null, this.props.noHeader || this.props.tabHeader ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: this.props.headerStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "exchange-content-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.market_name"
    })))), this.props.controls ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "small-12 medium-6",
      style: {
        padding: "1rem 0"
      }
    }, this.props.controls ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingBottom: "0.5rem"
      }
    }, this.props.controls) : null) : null, myMarketTab ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical shrink",
      style: {
        width: "100%",
        textAlign: "left",
        padding: "0 0.5rem 0.75rem 0.5rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        margin: "3px 0 0"
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
        actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeViewSetting({
          onlyLiquid: !this.props.onlyLiquid
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        paddingLeft: "0.4rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.show_only_liquid"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        margin: "3px 0 0"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      style: {
        position: "relative",
        top: 3
      },
      className: "no-margin",
      type: "checkbox",
      checked: this.props.onlyStars,
      onChange: () => {
        actions_MarketsActions__WEBPACK_IMPORTED_MODULE_14__["default"].toggleStars();
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        paddingLeft: "0.4rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
      string: "exchange.show_only_star_formatter",
      keys: [{
        type: "icon",
        value: "fi-star",
        className: "gold-star",
        arg: "star_icon"
      }]
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "search-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter inline-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_SearchInput__WEBPACK_IMPORTED_MODULE_24__["default"], {
      style: {
        fontSize: "0.9rem",
        height: "inherit",
        position: "relative"
      },
      className: "no-margin market-filter-input",
      value: this.state.myMarketFilter,
      onChange: this.handleSearchUpdate
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        width: "100%",
        textAlign: "left",
        padding: "0.75rem 0.5rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_16__["default"], {
      onAssetSelect: this._onFoundBaseAsset.bind(this),
      assets: defaultBases,
      onChange: this._onInputBaseAsset.bind(this),
      asset: this.state.findBaseInput,
      assetInput: this.state.findBaseInput,
      tabIndex: 1,
      style: {
        width: "100%",
        paddingBottom: "1.5rem"
      },
      onFound: this._onFoundBaseAsset.bind(this),
      label: "exchange.quote",
      noLabel: true,
      inputStyle: {
        fontSize: "0.9rem"
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "account.user_issued_assets.name"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      style: {
        fontSize: "0.9rem",
        position: "relative",
        top: 1
      },
      type: "text",
      value: this.state.inputValue,
      onChange: this._onInputName.bind(this, true),
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_17___default().translate("exchange.search"),
      maxLength: 16,
      tabIndex: 2,
      ref: "findSearchInput"
    }), this.state.assetNameError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "error-area",
      style: {
        paddingTop: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        wordBreak: "break-all"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "explorer.asset.invalid",
      name: this.state.inputValue
    }))) : null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "mymarkets-tabs",
      style: {
        marginBottom: 0
      }
    }, myMarketTab && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: "quote_edit",
      style: {
        textTransform: "uppercase"
      },
      onClick: this.showQuoteModal,
      className: "mymarkets-tab"
    }, "\xA0+\xA0"), !myMarketTab && !this.state.inputValue ? null : preferredBases.map((base, index) => {
      if (!base) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: base,
        onClick: this.toggleActiveMarketTab.bind(this, index),
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()("mymarkets-tab", {
          active: activeMarketTab === index
        })
      }, base.replace("RUDEX.", ""));
    }), myMarketTab && hasOthers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: "others",
      style: {
        textTransform: "uppercase"
      },
      onClick: this.toggleActiveMarketTab.bind(this, preferredBases.size + 1),
      className: classnames__WEBPACK_IMPORTED_MODULE_15___default()("mymarkets-tab", {
        active: activeMarketTab === preferredBases.size + 1
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.others"
    })) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: listStyle,
      className: "table-container grid-block vertical mymarkets-list",
      ref: "favorites"
    }, assetsLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        position: "absolute",
        paddingTop: "3rem",
        textAlign: "center",
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_18__["default"], {
      type: "three-bounce"
    })) : null, preferredBases.filter(a => {
      return a === preferredBases.get(activeMarketTab);
    }).map((base, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MarketGroup, {
        userMarkets: this.props.userMarkets,
        defaultMarkets: this.props.defaultMarkets,
        index: index,
        allowChange: false,
        key: base,
        current: current,
        starredMarkets: starredMarkets,
        marketStats: marketStats,
        viewSettings: viewSettings,
        columns: myMarketTab ? columns : this.props.findColumns || columns,
        markets: baseGroups[base],
        base: base,
        maxRows: myMarketTab ? 20 : 10,
        findMarketTab: !myMarketTab,
        location: this.props.location,
        history: this.props.history,
        onlyLiquid: this.props.onlyLiquid && myMarketTab
      });
    }), activeMarketTab === preferredBases.size + 1 && myMarketTab && hasOthers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MarketGroup, {
      userMarkets: this.props.userMarkets,
      index: preferredBases.size,
      current: current,
      starredMarkets: starredMarkets,
      marketStats: marketStats,
      viewSettings: viewSettings,
      columns: columns,
      markets: otherMarkets,
      base: "others",
      maxRows: myMarketTab ? 20 : 10,
      findMarketTab: !myMarketTab,
      location: this.props.location,
      history: this.props.history
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_23__["default"], {
      visible: this.state.isQuoteModalVisible,
      hideModal: this.hideQuoteModal,
      showModal: this.showQuoteModal,
      quotes: this.props.preferredBases
    }));
  }

}

MyMarkets = (0,react_debounce_render__WEBPACK_IMPORTED_MODULE_20__["default"])(MyMarkets, 50, {
  leading: false
});

class MyMarketsWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MyMarkets, this.props);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_6__.connect)(MyMarketsWrapper, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_8__["default"], stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__["default"], stores_AssetStore__WEBPACK_IMPORTED_MODULE_10__["default"]];
  },

  getProps() {
    return {
      starredMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().starredMarkets,
      onlyLiquid: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().viewSettings.get("onlyLiquid", true),
      defaultMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().defaultMarkets,
      viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().viewSettings,
      preferredBases: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().preferredBases,
      marketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().allMarketStats,
      userMarkets: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().userMarkets,
      searchAssets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().assets,
      onlyStars: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().onlyStars,
      assetsLoading: stores_AssetStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().assetsLoading
    };
  }

}));

/***/ }),

/***/ 2735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuoteSelectionModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1825);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2733);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(657);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);







class QuoteSelectionModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      backingAsset: "",
      error: false,
      valid: false
    };
  }

  _onMoveUp(quote) {
    const idx = this.props.quotes.findIndex(q => q === quote);
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
      oldIndex: idx,
      newIndex: idx - 1
    });
  }

  _onMoveDown(quote) {
    const idx = this.props.quotes.findIndex(q => q === quote);
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
      oldIndex: idx,
      newIndex: idx + 1
    });
  }

  _onRemove(quote) {
    const idx = this.props.quotes.findIndex(q => q === quote);

    if (idx >= 0) {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
        remove: idx
      });
    }
  }

  _onAdd(quote) {
    const idx = this.props.quotes.findIndex(q => q === quote.get("symbol"));

    if (idx === -1) {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].modifyPreferedBases({
        add: quote.get("symbol")
      });
    }
  }

  _onInputBackingAsset(asset) {
    this.setState({
      backingAsset: asset.toUpperCase(),
      error: null
    });
  }

  _onFoundBackingAsset(asset) {
    if (asset) {
      if (!this.props.quotes.includes(asset.get("symbol"))) {
        this.setState({
          isValid: true
        });
      } else {
        this.setState({
          error: "Asset already being used",
          isValid: false
        });
      }
    }
  }

  render() {
    const {
      error
    } = this.state;
    const quoteCount = this.props.quotes.size;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Modal, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("exchange.quote_selection"),
      closable: false,
      visible: this.props.visible,
      id: "quote_selection",
      overlay: true,
      onCancel: this.props.hideModal,
      footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
        onClick: this.props.hideModal
      }, counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate("modal.close"))]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: "no-border-bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "account.quote"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.move_down"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.move_up"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "exchange.remove"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, this.props.quotes.map((q, idx) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        key: q
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, idx + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, q), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "text-center"
      }, idx !== quoteCount - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: this._onMoveDown.bind(this, q),
        name: "chevron-down",
        className: "clickable"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "text-center"
      }, idx !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: this._onMoveUp.bind(this, q),
        name: "chevron-down",
        className: "clickable rotate180"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        className: "text-center"
      }, quoteCount > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: this._onRemove.bind(this, q),
        name: "cross-circle",
        className: "clickable"
      })));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "exchange.custom_quote",
      onChange: this._onInputBackingAsset.bind(this),
      asset: this.state.backingAsset,
      assetInput: this.state.backingAsset,
      tabIndex: 1,
      style: {
        width: "100%",
        paddingRight: "10px"
      },
      onFound: this._onFoundBackingAsset.bind(this),
      onAction: this._onAdd.bind(this),
      action_label: "exchange.add_quote",
      disableActionButton: !!error,
      noLabel: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "error-area"
    }, error))));
  }

}

/***/ }),

/***/ 2732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1962);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1963);



/**
 *  Given an account id, displays the name of that account
 *
 *  Expects one property, 'account' which should be a account id
 */

class AccountName extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    account: _ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainObject.isRequired
  };
  static defaultProps = {
    autosubscribe: false
  };

  render() {
    if (!this.props.account) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.props.account.get("name"));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(AccountName));

/***/ }),

/***/ 2708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TransitionWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2709);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2713);


class TransitionWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static defaultProps = {
    component: "span",
    enterTimeout: 2000
  };

  constructor() {
    super();
    this.state = {
      animateEnter: false
    };
    this.timer = null;
  }

  componentDidMount() {
    this.enableAnimation();
  }

  resetAnimation() {
    this.setState({
      animateEnter: false
    });
    this.enableAnimation();
  }

  enableAnimation() {
    this.timer = setTimeout(() => {
      if (this.timer) {
        this.setState({
          animateEnter: true
        });
      }
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  render() {
    if (!this.props.children) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(this.props.component);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["default"], {
        component: this.props.component,
        id: this.props.id,
        className: this.props.className
      }, react__WEBPACK_IMPORTED_MODULE_0__.Children.map(this.props.children, (child, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
        classNames: this.props.transitionName,
        timeout: {
          enter: this.props.enterTimeout
        },
        exit: false,
        enter: this.state.animateEnter
      }, child)));
    }
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYuMTI5OGJiYTE5ODI5NmY4ZDhmOTguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFRQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUhBOztBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBOztBQVNBO0FBQ0E7QUFJQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7O0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTs7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSEE7O0FBU0E7QUFDQTtBQXNCQTtBQU1BOztBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUhBOztBQWdCQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQU5BOztBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBUkE7O0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7O0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBREE7QUFRQTtBQUNBO0FBSUE7QUFOQTs7QUFZQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTs7QUFhQTtBQUNBO0FBOU9BO0FBZ1BBO0FBRUE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUlBOztBQTNWQTs7QUE2VkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUF4RUE7QUEwRUE7QUFFQTtBQUVBO0FBS0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUEvQkE7QUFrQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBDQTtBQXNDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBV0E7O0FBalNBOztBQW9TQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBc0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7QUFJQTs7QUFDQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFJQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFPQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBUUE7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7OztBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBZUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBUkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQXRCQTtBQTBCQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFqQkE7QUFxQkE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUZBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBTkE7QUFhQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUEwQkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTs7QUFyM0JBOztBQXczQkE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUhBOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7O0FBcEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBYUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBSUE7QUFDQTtBQU5BO0FBVUE7QUFBQTtBQUdBO0FBSUE7QUFDQTtBQU5BO0FBVUE7QUFBQTtBQUdBO0FBSUE7QUFDQTtBQU5BO0FBWUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBS0E7O0FBMUtBOzs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBWkE7O0FBZUE7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFZQTtBQUNBOztBQW5FQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL01hcmtldFJvdy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvTXlNYXJrZXRzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9RdW90ZVNlbGVjdGlvbk1vZGFsLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0FjY291bnROYW1lLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1RyYW5zaXRpb25XcmFwcGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgQWNjb3VudE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQWNjb3VudE5hbWVcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuY2xhc3MgTWFya2V0Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBub1N5bWJvbHM6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdHNJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuXG4gICAgX29uQ2xpY2sobWFya2V0SUQpIHtcbiAgICAgICAgY29uc3QgbmV3UGF0aCA9IGAvbWFya2V0LyR7bWFya2V0SUR9YDtcbiAgICAgICAgaWYgKG5ld1BhdGggIT09IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgICAgIE1hcmtldHNBY3Rpb25zLnN3aXRjaE1hcmtldCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9tYXJrZXQvJHttYXJrZXRJRH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnN0YXRzQ2hlY2tlZCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhc2UuZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhc2UuZ2V0KFwiaWRcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGUuZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlLmdldChcImlkXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gTWFya2V0c0FjdGlvbnMuZ2V0TWFya2V0U3RhdHNJbnRlcnZhbChcbiAgICAgICAgICAgICAgICAzNSAqIDEwMDAsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYXNlLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHNJbnRlcnZhbCkgdGhpcy5zdGF0c0ludGVydmFsKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgX29uU3RhcihxdW90ZSwgYmFzZSwgZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zdGFycmVkKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuYWRkU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMucmVtb3ZlU3Rhck1hcmtldChxdW90ZSwgYmFzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cXVvdGUsIGJhc2UsIG5vU3ltYm9scywgc3RhdHMsIHN0YXJyZWR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFxdW90ZSB8fCAhYmFzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWFya2V0SUQgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIikgKyBcIl9cIiArIGJhc2UuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICBsZXQgbWFya2V0TmFtZSA9IHF1b3RlLmdldChcInN5bWJvbFwiKSArIFwiOlwiICsgYmFzZS5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGxldCBkeW5hbWljX2RhdGEgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICBxdW90ZS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGJhc2VfZHluYW1pY19kYXRhID0gdGhpcy5wcm9wcy5nZXREeW5hbWljT2JqZWN0KFxuICAgICAgICAgICAgYmFzZS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgcHJpY2UgPSB1dGlscy5jb252ZXJ0UHJpY2UocXVvdGUsIGJhc2UpO1xuXG4gICAgICAgIGxldCByb3dTdHlsZXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubGVmdEFsaWduKSB7XG4gICAgICAgICAgICByb3dTdHlsZXMudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnV0dG9uQ2xhc3MgPSBcImJ1dHRvbiBvdXRsaW5lXCI7XG4gICAgICAgIGxldCBidXR0b25TdHlsZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbXBhY3QpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzICs9IFwiIG5vLW1hcmdpblwiO1xuICAgICAgICAgICAgYnV0dG9uU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuNzVyZW1cIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweCAxMHB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4wNXJlbVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnNcbiAgICAgICAgICAgIC5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhckNsYXNzID0gc3RhcnJlZCA/IFwiZ29sZC1zdGFyXCIgOiBcImdyZXktc3RhclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25TdGFyLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUuZ2V0KFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGFyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmktc3RhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLmZpX3N0YXIuc3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9sXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gc3RhdHMgPyBzdGF0cy52b2x1bWVCYXNlIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfdm9sdW1lKGFtb3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZSA9IHV0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMgJiYgc3RhdHMuY2hhbmdlID8gc3RhdHMuY2hhbmdlIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZUNsYXNzID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPT09IFwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoYW5nZSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFuZ2UtdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNoYW5nZS1kb3duXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ0ZXh0LXJpZ2h0IFwiICsgY2hhbmdlQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYW5nZSArIFwiJVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJrZXROYW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YnV0dG9uU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFya2V0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3F1b3RlLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicHJpY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5hbFByaWNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cyAmJiBzdGF0cy5wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHN0YXRzLnByaWNlLnRvUmVhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3RhdHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5jbG9zZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0cy5jbG9zZS5xdW90ZS5hbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UuYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmNsb3NlLnF1b3RlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UuYmFzZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLnF1b3RlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UuYmFzZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaFByZWNpc2lvbkFzc2V0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJUQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUlVERVguQlRDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHT0xEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTSUxWRVJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVjaXNpb24gPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hQcmVjaXNpb25Bc3NldHMuaW5kZXhPZihiYXNlLmdldChcInN5bWJvbFwiKSkgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IDg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1dGlscy5mb3JtYXRfbnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsUHJpY2UgPiAxMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaW5hbFByaWNlID4gMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInF1b3RlU3VwcGx5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkeW5hbWljX2RhdGEgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3BhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljX2RhdGEuZ2V0KFwiY3VycmVudF9zdXBwbHlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17cXVvdGUuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmFzZVN1cHBseVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFzZV9keW5hbWljX2RhdGEgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3BhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2R5bmFtaWNfZGF0YS5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRfc3VwcGx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYXNlLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlzc3VlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudE5hbWUgYWNjb3VudD17cXVvdGUuZ2V0KFwiaXNzdWVyXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNoZWNrTWFya2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlRoaXMgbWFya2V0IGlzIGEgZGVmYXVsdCBtYXJrZXQgYW5kIGNhbm5vdCBiZSByZW1vdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5pc0NoZWNrZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNEZWZhdWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZW1vdmVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnJlbW92ZU1hcmtldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQgZmxvYXQtcmlnaHQgcmVtb3ZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oCTXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEua2V5ID4gYi5rZXk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJjbGlja2FibGVcIjtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIGFjdGl2ZU1hcmtldFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3Jvd1N0eWxlc30+XG4gICAgICAgICAgICAgICAge2NvbHVtbnN9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cbk1hcmtldFJvdyA9IHdpdGhSb3V0ZXIoTWFya2V0Um93KTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRXcmFwcGVyKE1hcmtldFJvdywge1xuICAgIHByb3BOYW1lczogW1wicXVvdGVcIiwgXCJiYXNlXCJdLFxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB0ZW1wQ29tcG9uZW50OiBcInRyXCJcbiAgICB9LFxuICAgIHdpdGhEeW5hbWljOiB0cnVlXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IFBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBNYXJrZXRSb3cgZnJvbSBcIi4vTWFya2V0Um93XCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBNYXJrZXRzU3RvcmUgZnJvbSBcInN0b3Jlcy9NYXJrZXRzU3RvcmVcIjtcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCJzdG9yZXMvQXNzZXRTdG9yZVwiO1xuaW1wb3J0IEFzc2V0TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldE5hbWVcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xuaW1wb3J0IE1hcmtldHNBY3Rpb25zIGZyb20gXCJhY3Rpb25zL01hcmtldHNBY3Rpb25zXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IHtDaGFpblZhbGlkYXRpb24sIENoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcbmltcG9ydCBaZkFwaSBmcm9tIFwicmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy91dGlscy9mb3VuZGF0aW9uLWFwaVwiO1xuaW1wb3J0IHtnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlcywgZ2F0ZXdheVByZWZpeGVzfSBmcm9tIFwiY29tbW9uL2dhdGV3YXlzXCI7XG5pbXBvcnQgUXVvdGVTZWxlY3Rpb25Nb2RhbCBmcm9tIFwiLi9RdW90ZVNlbGVjdGlvbk1vZGFsXCI7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL1V0aWxpdHkvU2VhcmNoSW5wdXRcIjtcblxuY2xhc3MgTWFya2V0R3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG1heFJvd3M6IDIwLFxuICAgICAgICBvbmx5TGlxdWlkOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5fZ2V0SW5pdGlhbFN0YXRlKHByb3BzKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKHByb3BzKSB7XG4gICAgICAgIGxldCBvcGVuID0gcHJvcHMuZmluZE1hcmtldFRhYlxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoYG15TWFya2V0c0Jhc2VfJHtwcm9wcy5pbmRleH1gKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wZW46IG9wZW4gIT09IHVuZGVmaW5lZCA/IG9wZW4gOiB0cnVlLFxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNJbnZlcnRcIiwgdHJ1ZSksXG4gICAgICAgICAgICBzb3J0Qnk6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNTb3J0XCIsIFwidm9sdW1lXCIpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuZmluZE1hcmtldFRhYiAhPT0gdGhpcy5wcm9wcy5maW5kTWFya2V0VGFiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2dldEluaXRpYWxTdGF0ZShuZXh0UHJvcHMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAoIW5leHRQcm9wcy5tYXJrZXRzIHx8ICF0aGlzLnByb3BzLm1hcmtldHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSB8fFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRQcm9wcy5tYXJrZXRzLCB0aGlzLnByb3BzLm1hcmtldHMpIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuc3RhcnJlZE1hcmtldHMgIT09IHRoaXMucHJvcHMuc3RhcnJlZE1hcmtldHMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5tYXJrZXRTdGF0cyAhPT0gdGhpcy5wcm9wcy5tYXJrZXRTdGF0cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLnVzZXJNYXJrZXRzICE9PSB0aGlzLnByb3BzLnVzZXJNYXJrZXRzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2ludmVyc2VTb3J0KCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgbXlNYXJrZXRzSW52ZXJ0OiAhdGhpcy5zdGF0ZS5teU1hcmtldHNJbnZlcnRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGFuZ2VTb3J0KHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09IHRoaXMuc3RhdGUuc29ydEJ5KSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIG15TWFya2V0c1NvcnQ6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc29ydEJ5OiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ludmVyc2VTb3J0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBfb25TZWxlY3RCYXNlKGUpIHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgLy8gICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VCYXNlKHRoaXMucHJvcHMuaW5kZXgsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyB9XG5cbiAgICBfb25Ub2dnbGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5maW5kTWFya2V0VGFiKSB7XG4gICAgICAgICAgICBsZXQgb3BlbiA9ICF0aGlzLnN0YXRlLm9wZW47XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvcGVuOiBvcGVuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHNldHRpbmcgPSB7fTtcbiAgICAgICAgICAgIHNldHRpbmdbYG15TWFya2V0c0Jhc2VfJHt0aGlzLnByb3BzLmluZGV4fWBdID0gb3BlbjtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyhzZXR0aW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblRvZ2dsZVVzZXJNYXJrZXQobWFya2V0KSB7XG4gICAgICAgIGxldCBbYmFzZSwgcXVvdGVdID0gbWFya2V0LnNwbGl0KFwiX1wiKTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gIXRoaXMucHJvcHMudXNlck1hcmtldHMuZ2V0KG1hcmtldCk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5zZXRVc2VyTWFya2V0KGJhc2UsIHF1b3RlLCBuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgIG1hcmtldHMsXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgbWFya2V0U3RhdHMsXG4gICAgICAgICAgICBzdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgIGN1cnJlbnRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7c29ydEJ5LCBpbnZlcnNlU29ydCwgb3Blbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghbWFya2V0cyB8fCAhbWFya2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBjb2x1bW5zLm1hcChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChoZWFkZXIubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJrZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VTb3J0LmJpbmQodGhpcywgXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInZvbFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVNvcnQuYmluZCh0aGlzLCBcInZvbHVtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS52b2xfc2hvcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJwcmljZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aGVhZGVyLm5hbWV9IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5wcmljZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInF1b3RlU3VwcGx5XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuYmFzZV9zdXBwbHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJiYXNlU3VwcGx5XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UucXVvdGVfc3VwcGx5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiY2hhbmdlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlU29ydC5iaW5kKHRoaXMsIFwiY2hhbmdlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLmNoYW5nZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImlzc3VlclwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aGVhZGVyLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLmFzc2V0cy5pc3N1ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRlci5uYW1lfSBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5wZXJtLmNvbmZpcm1fYWRkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRoIGtleT17aGVhZGVyLm5hbWV9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWFya2V0Um93cyA9IG1hcmtldHNcbiAgICAgICAgICAgIC5tYXAobWFya2V0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25seUxpcXVpZCAmJlxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cy5nZXQobWFya2V0LmlkKSAmJlxuICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cy5nZXQobWFya2V0LmlkKS52b2x1bWVCYXNlID09IDBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxNYXJrZXRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWFya2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZSA9PT0gXCJvdGhlcnNcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldC5xdW90ZX0gLz46XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e21hcmtldC5iYXNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBsYWNlPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXttYXJrZXQucXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e21hcmtldC5xdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e21hcmtldC5iYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRBbGlnbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhY3Q9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBub1N5bWJvbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0cz17bWFya2V0U3RhdHMuZ2V0KG1hcmtldC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFycmVkPXtzdGFycmVkTWFya2V0cy5oYXMobWFya2V0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnQgPT09IG1hcmtldC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17dGhpcy5wcm9wcy51c2VyTWFya2V0cy5oYXMobWFya2V0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVmYXVsdE1hcmtldHMuaGFzKG1hcmtldC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tNYXJrZXQ9e3RoaXMuX29uVG9nZ2xlVXNlck1hcmtldC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhICE9PSBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFfc3ltYm9scyA9IGEua2V5LnNwbGl0KFwiX1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgYl9zeW1ib2xzID0gYi5rZXkuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhU3RhdHMgPSBtYXJrZXRTdGF0cy5nZXQoYV9zeW1ib2xzWzBdICsgXCJfXCIgKyBhX3N5bWJvbHNbMV0pO1xuICAgICAgICAgICAgICAgIGxldCBiU3RhdHMgPSBtYXJrZXRTdGF0cy5nZXQoYl9zeW1ib2xzWzBdICsgXCJfXCIgKyBiX3N5bWJvbHNbMV0pO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzb3J0QnkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhX3N5bWJvbHNbMF0gPiBiX3N5bWJvbHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFfc3ltYm9sc1swXSA8IGJfc3ltYm9sc1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnZlcnNlU29ydCA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFfc3ltYm9sc1sxXSA+IGJfc3ltYm9sc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhX3N5bWJvbHNbMV0gPCBiX3N5bWJvbHNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludmVyc2VTb3J0ID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidm9sdW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYVN0YXRzICYmIGJTdGF0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnZlcnNlU29ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYlN0YXRzLnZvbHVtZUJhc2UgLSBhU3RhdHMudm9sdW1lQmFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYVN0YXRzLnZvbHVtZUJhc2UgLSBiU3RhdHMudm9sdW1lQmFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhU3RhdHMgJiYgYlN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludmVyc2VTb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiU3RhdHMuY2hhbmdlIC0gYVN0YXRzLmNoYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYVN0YXRzLmNoYW5nZSAtIGJTdGF0cy5jaGFuZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDogMTB9fT5cbiAgICAgICAgICAgICAgICB7b3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+e2hlYWRlcnN9PC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWFya2V0Um93cyAmJiBtYXJrZXRSb3dzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+e21hcmtldFJvd3N9PC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBNeU1hcmtldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFjdGl2ZVRhYjogXCJteS1tYXJrZXRcIixcbiAgICAgICAgc2V0TWluV2lkdGg6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzUXVvdGVNb2RhbFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNJbnZlcnRcIiwgdHJ1ZSksXG4gICAgICAgICAgICBzb3J0Qnk6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJteU1hcmtldHNTb3J0XCIsIFwidm9sdW1lXCIpLFxuICAgICAgICAgICAgYWN0aXZlVGFiOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiZmF2TWFya2V0VGFiXCIsIFwibXktbWFya2V0XCIpLFxuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiOiBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KFwiYWN0aXZlTWFya2V0VGFiXCIsIDApLFxuICAgICAgICAgICAgbG9va3VwUXVvdGU6IG51bGwsXG4gICAgICAgICAgICBsb29rdXBCYXNlOiBudWxsLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICAgIG1pbldpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGZpbmRCYXNlSW5wdXQ6IFwiR1BIXCIsXG4gICAgICAgICAgICBhY3RpdmVGaW5kQmFzZTogXCJHUEhcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldE1pbldpZHRoID0gdGhpcy5fc2V0TWluV2lkdGguYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRBc3NldExpc3QgPSBkZWJvdW5jZShBc3NldEFjdGlvbnMuZ2V0QXNzZXRMaXN0LmRlZmVyLCAxNTApO1xuXG4gICAgICAgIHRoaXMuc2hvd1F1b3RlTW9kYWwgPSB0aGlzLnNob3dRdW90ZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGlkZVF1b3RlTW9kYWwgPSB0aGlzLmhpZGVRdW90ZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIC8qIFRyaWdnZXIgYSBsb29rdXAgd2hlbiBzd2l0Y2hpbmcgdGFicyB0byBmaW5kLW1hcmtldCAqL1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVRhYiAhPT0gXCJmaW5kLW1hcmtldFwiICYmXG4gICAgICAgICAgICBuZXh0U3RhdGUuYWN0aXZlVGFiID09PSBcImZpbmQtbWFya2V0XCIgJiZcbiAgICAgICAgICAgICFuZXh0UHJvcHMuc2VhcmNoQXNzZXRzLnNpemVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9sb29rdXBBc3NldHMoXCJSVURFWC5cIiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVUYWIgIT09IG5leHRTdGF0ZS5hY3RpdmVUYWIpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZVRhYihuZXh0U3RhdGUuYWN0aXZlVGFiKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICFuZXh0UHJvcHMudGFiSGVhZGVyICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVRhYiAhPT0gbmV4dFByb3BzLmFjdGl2ZVRhYlxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZVRhYihuZXh0UHJvcHMuYWN0aXZlVGFiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5zZWFyY2hBc3NldHMsIHRoaXMucHJvcHMuc2VhcmNoQXNzZXRzKSB8fFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMubWFya2V0cywgdGhpcy5wcm9wcy5tYXJrZXRzKSB8fFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuc3RhcnJlZE1hcmtldHMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0c1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuZGVmYXVsdE1hcmtldHMsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0c1xuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMubWFya2V0U3RhdHMsIHRoaXMucHJvcHMubWFya2V0U3RhdHMpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnQgIT09IHRoaXMucHJvcHMuY3VycmVudCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm1pbldpZHRoICE9PSB0aGlzLnByb3BzLm1pbldpZHRoIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMubGlzdEhlaWdodCAhPT0gdGhpcy5wcm9wcy5saXN0SGVpZ2h0IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMucHJlZmVycmVkQmFzZXMgIT09IHRoaXMucHJvcHMucHJlZmVycmVkQmFzZXMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vbmx5U3RhcnMgIT09IHRoaXMucHJvcHMub25seVN0YXJzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMub25seUxpcXVpZCAhPT0gdGhpcy5wcm9wcy5vbmx5TGlxdWlkIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuYXNzZXRzTG9hZGluZyAhPT0gdGhpcy5wcm9wcy5hc3NldHNMb2FkaW5nIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMudXNlck1hcmtldHMgIT09IHRoaXMucHJvcHMudXNlck1hcmtldHNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXRNaW5XaWR0aCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0TWluV2lkdGgsIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QmFzZSA9IHRoaXMucHJvcHMuY3VycmVudC5zcGxpdChcIl9cIilbMV07XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnByb3BzLnByZWZlcnJlZEJhc2VzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICBhID0+IGEgPT09IGN1cnJlbnRCYXNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCAhPT0gLTEgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggIT09IHRoaXMuc3RhdGUuYWN0aXZlTWFya2V0VGFiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVNYXJrZXRUYWI6IGN1cnJlbnRJbmRleH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBoaXN0b3J5Q29udGFpbmVyID0gdGhpcy5yZWZzLmZhdm9yaXRlcztcbiAgICAgICAgUHMuaW5pdGlhbGl6ZShoaXN0b3J5Q29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLl9zZXRNaW5XaWR0aCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVRhYiA9PT0gXCJmaW5kLW1hcmtldFwiKSB7XG4gICAgICAgICAgICB0aGlzLl9sb29rdXBBc3NldHMoXCJSVURFWC5cIiwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVUYWIgIT09IHRoaXMucHJvcHMuYWN0aXZlVGFiKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VUYWIodGhpcy5wcm9wcy5hY3RpdmVUYWIpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXRNaW5XaWR0aCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0TWluV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5teU1hcmtldFRhYiAmJiAhbnAubXlNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZnMuZmluZFNlYXJjaElucHV0KSB0aGlzLnJlZnMuZmluZFNlYXJjaElucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlUXVvdGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1F1b3RlTW9kYWxWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UXVvdGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1F1b3RlTW9kYWxWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRNaW5XaWR0aCgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRNaW5XaWR0aCAmJlxuICAgICAgICAgICAgdGhpcy5yZWZzLmZhdm9yaXRlcyAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmVUYWIgPT09IFwibXktbWFya2V0XCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5taW5XaWR0aCAhPT0gdGhpcy5yZWZzLmZhdm9yaXRlcy5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogdGhpcy5yZWZzLmZhdm9yaXRlcy5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yZWZzLmZhdm9yaXRlcykge1xuICAgICAgICAgICAgbGV0IGhpc3RvcnlDb250YWluZXIgPSB0aGlzLnJlZnMuZmF2b3JpdGVzO1xuICAgICAgICAgICAgUHMudXBkYXRlKGhpc3RvcnlDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ludmVyc2VTb3J0KCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgbXlNYXJrZXRzSW52ZXJ0OiAhdGhpcy5zdGF0ZS5teU1hcmtldHNJbnZlcnRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW52ZXJzZVNvcnQ6ICF0aGlzLnN0YXRlLmludmVyc2VTb3J0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jaGFuZ2VTb3J0KHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgIT09IHRoaXMuc3RhdGUuc29ydEJ5KSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIG15TWFya2V0c1NvcnQ6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc29ydEJ5OiB0eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ludmVyc2VTb3J0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ29NYXJrZXRzKCkge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9tYXJrZXRzXCIpO1xuICAgIH1cblxuICAgIF9jaGFuZ2VUYWIodGFiKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBmYXZNYXJrZXRUYWI6IHRhYlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVUYWI6IHRhYlxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zZXRNaW5XaWR0aCgpO1xuICAgIH1cblxuICAgIF9vbklucHV0TmFtZShnZXRCYWNrZWRBc3NldHMsIGUpIHtcbiAgICAgICAgbGV0IHRvRmluZCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBsZXQgaXNWYWxpZE5hbWUgPSAhQ2hhaW5WYWxpZGF0aW9uLmlzX3ZhbGlkX3N5bWJvbF9lcnJvcih0b0ZpbmQsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogdG9GaW5kXG4gICAgICAgIH0pO1xuICAgICAgICAvKiBEb24ndCBsb29rdXAgaW52YWxpZCBhc3NldCBuYW1lcyAqL1xuICAgICAgICBpZiAodG9GaW5kICYmIHRvRmluZC5sZW5ndGggPj0gMiAmJiAhaXNWYWxpZE5hbWUpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSB0b0ZpbmQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9va3VwQXNzZXRzKHRvRmluZCwgZ2V0QmFja2VkQXNzZXRzKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgX2xvb2t1cEFzc2V0cyh2YWx1ZSwgZ2F0ZXdheUFzc2V0cyA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IFwiXCIpIHJldHVybjtcblxuICAgICAgICBsZXQgc3ltYm9scyA9IHZhbHVlLnRvVXBwZXJDYXNlKCkuc3BsaXQoXCI6XCIpO1xuICAgICAgICBsZXQgcXVvdGUgPSBzeW1ib2xzWzBdO1xuICAgICAgICBsZXQgYmFzZSA9IHN5bWJvbHMubGVuZ3RoID09PSAyID8gc3ltYm9sc1sxXSA6IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb29rdXBRdW90ZTogcXVvdGUsXG4gICAgICAgICAgICBsb29rdXBCYXNlOiBiYXNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZy5kZWZlcih7XG4gICAgICAgICAgICBtYXJrZXRMb29rdXBJbnB1dDogdmFsdWUudG9VcHBlckNhc2UoKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdChxdW90ZSwgNTAsIGdhdGV3YXlBc3NldHMpO1xuICAgIH1cblxuICAgIHRvZ2dsZUFjdGl2ZU1hcmtldFRhYihpbmRleCkge1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiOiBpbmRleFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZU1hcmtldFRhYjogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uSW5wdXRCYXNlQXNzZXQoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaW5kQmFzZUlucHV0OiBhc3NldC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uRm91bmRCYXNlQXNzZXQoYXNzZXQpIHtcbiAgICAgICAgaWYgKGFzc2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVGaW5kQmFzZTogYXNzZXQuZ2V0KFwic3ltYm9sXCIpfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcklucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtteU1hcmtldEZpbHRlcjogXCJcIn0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTZWFyY2hVcGRhdGUgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBteU1hcmtldEZpbHRlcjogZS50YXJnZXQudmFsdWUgJiYgZS50YXJnZXQudmFsdWUudG9VcHBlckNhc2UoKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2dldE1hcmtldHMoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNlYXJjaEFzc2V0cyxcbiAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzLFxuICAgICAgICAgICAgb25seVN0YXJzLFxuICAgICAgICAgICAgdXNlck1hcmtldHMsXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlcyxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmVUYWIsXG4gICAgICAgICAgICBsb29rdXBRdW90ZSxcbiAgICAgICAgICAgIGxvb2t1cEJhc2UsXG4gICAgICAgICAgICBteU1hcmtldEZpbHRlcixcbiAgICAgICAgICAgIGFjdGl2ZU1hcmtldFRhYlxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgcG9zc2libGVHYXRld2F5QXNzZXRzID0gZ2V0UG9zc2libGVHYXRld2F5UHJlZml4ZXMoXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlc1xuICAgICAgICApO1xuXG4gICAgICAgIGxldCBiYXNlcyA9IHRoaXMuX2dldEJhc2VzKCk7XG4gICAgICAgIGxldCBhbGxNYXJrZXRzID0gW10sXG4gICAgICAgICAgICBiYXNlR3JvdXBzID0ge307XG4gICAgICAgIGxldCBvdGhlck1hcmtldHMgPSBbXTtcblxuICAgICAgICBjb25zdCBteU1hcmtldFRhYiA9IGFjdGl2ZVRhYiA9PT0gXCJteS1tYXJrZXRcIjtcblxuICAgICAgICBpZiAoc2VhcmNoQXNzZXRzLnNpemUpIHtcbiAgICAgICAgICAgIHNlYXJjaEFzc2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5vcHRpb25zLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShhLm9wdGlvbnMuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInZpc2libGVcIiBpbiBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uLnZpc2libGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuc3ltYm9sLmluZGV4T2YobG9va3VwUXVvdGUpICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zeW1ib2wubGVuZ3RoID49IGxvb2t1cFF1b3RlLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBiYXNlcy5mb3JFYWNoKGJhc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gYXNzZXQuc3ltYm9sICsgXCJfXCIgKyBiYXNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZSAhPT0gYXNzZXQuc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTWFya2V0cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdW90ZTogYXNzZXQuc3ltYm9sLCBiYXNlOiBiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsbE1hcmtldHMgPSBhbGxNYXJrZXRzLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIC8vIElmIGEgYmFzZSBhc3NldCBpcyBzcGVjaWZpZWQsIGxpbWl0IHRoZSBxdW90ZSBhc3NldCB0byB0aGUgZXhhY3Qgc2VhcmNoIHRlcm1cbiAgICAgICAgICAgIGlmIChsb29rdXBCYXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFbMV0ucXVvdGUgPT09IGxvb2t1cFF1b3RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhY3RpdmVNYXJrZXRzID0gbXlNYXJrZXRUYWJcbiAgICAgICAgICAgID8gZGVmYXVsdE1hcmtldHNcbiAgICAgICAgICAgIDogSW1tdXRhYmxlLk1hcChhbGxNYXJrZXRzKTtcbiAgICAgICAgaWYgKG15TWFya2V0VGFiICYmIHVzZXJNYXJrZXRzLnNpemUpIHtcbiAgICAgICAgICAgIHVzZXJNYXJrZXRzLmZvckVhY2goKG1hcmtldCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVNYXJrZXRzLmhhcyhrZXkpKVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVNYXJrZXRzID0gYWN0aXZlTWFya2V0cy5zZXQoa2V5LCBtYXJrZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmaWx0ZXJBbmRTZXBhcmF0ZU1hcmtldHMoXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgbWF0Y2hCYXNlcyxcbiAgICAgICAgICAgIG1hcmtldHMsXG4gICAgICAgICAgICBiYXNlR3JvdXBzLFxuICAgICAgICAgICAgb3RoZXJNYXJrZXRzXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IG90aGVycyA9IG1hcmtldHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5iYXNlID09PSBhLnF1b3RlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8qIFJldHVybiBzZWFyY2ggcmVzdWx0cyBpbiB0aGUgRmluZCBNYXJrZXRzIFRhYiAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW15TWFya2V0VGFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9va3VwUXVvdGUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucXVvdGUuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogUmV0dXJuIGZpbHRlcmVkIG1hcmtldHMgaWYgYSBmaWx0ZXIgaXMgaW5wdXQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IElEID0gYS5xdW90ZSArIFwiX1wiICsgYS5iYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhbXlNYXJrZXRGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSUQuaW5kZXhPZihteU1hcmtldEZpbHRlcikgIT09IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLyogUmV0dXJuIG9ubHkgc3RhcnJlZCBtYXJrZXRzIGlmIHRoYXQgb3B0aW9uIGlzIGNoZWNrZWQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmx5U3RhcnMgJiYgIXN0YXJyZWRNYXJrZXRzLmhhcyhJRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFbHNlIHJldHVybiBhbGwgbWFya2V0cyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAobWFya2V0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gbWFya2V0LnF1b3RlICsgXCJfXCIgKyBtYXJrZXQuYmFzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoQmFzZXMuaW5kZXhPZihtYXJrZXQuYmFzZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2VHcm91cHNbYmFzZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlR3JvdXBzW2Jhc2VdID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0T2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtYXJrZXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbWFya2V0LnF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG1hcmtldC5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXNlR3JvdXBzW2Jhc2VdLmZpbmQobSA9PiBtLmlkID09PSBtYXJrZXRJRCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUdyb3Vwc1tiYXNlXS5wdXNoKG1hcmtldE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICFwcmVmZXJyZWRCYXNlcy5pbmNsdWRlcyhtYXJrZXQuYmFzZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlR2F0ZXdheUFzc2V0cy5pbmRleE9mKG1hcmtldC5iYXNlKSA9PT0gLTFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFkZGluZyB0byBvdGhlciBtYXJrZXRzOlwiLCBiYXNlLCBtYXJrZXQuYmFzZSwgcHJlZmVycmVkQmFzZXMudG9KUygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWFya2V0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG1hcmtldC5xdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBtYXJrZXQuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgICAgICAgICAudGFrZShteU1hcmtldFRhYiA/IDEwMCA6IDIwKVxuICAgICAgICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICAgICAgICByZXR1cm4ge290aGVyTWFya2V0czogb3RoZXJzLmNvbmNhdChvdGhlck1hcmtldHMpLCBiYXNlR3JvdXBzfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVNYXJrZXRzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QmFzZSA9IG15TWFya2V0VGFiXG4gICAgICAgICAgICAgICAgPyBwcmVmZXJyZWRCYXNlcy5nZXQoYWN0aXZlTWFya2V0VGFiKVxuICAgICAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5hY3RpdmVGaW5kQmFzZTtcblxuICAgICAgICAgICAgKHtvdGhlck1hcmtldHMsIGJhc2VHcm91cHN9ID0gZmlsdGVyQW5kU2VwYXJhdGVNYXJrZXRzKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRCYXNlLFxuICAgICAgICAgICAgICAgIFtjdXJyZW50QmFzZV0sXG4gICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0cyxcbiAgICAgICAgICAgICAgICBiYXNlR3JvdXBzLFxuICAgICAgICAgICAgICAgIG90aGVyTWFya2V0c1xuICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgIC8qIENoZWNrIGZvciBwb3NzaWJsZSBnYXRld2F5IHZlcnNpb25zIG9mIHRoZSBhc3NldCAqL1xuICAgICAgICAgICAgZ2F0ZXdheVByZWZpeGVzLmZvckVhY2gocHJlZml4ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zc2libGVHYXRld2F5QXNzZXROYW1lID0gYCR7cHJlZml4fS4ke2N1cnJlbnRCYXNlfWA7XG4gICAgICAgICAgICAgICAgbGV0IGdhdGV3YXlBc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoXG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLyogSWYgdGhlIGdhdGV3YXkgb2ZmZXJzIGFuIGFzc2V0IGZvciB0aGlzIGJhc2UsIGFkZCBpdCB0byB0aGUgbGlzdCAqL1xuICAgICAgICAgICAgICAgIGlmICghIWdhdGV3YXlBc3NldCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ2F0ZXdheU1hcmtldHMgPSBhY3RpdmVNYXJrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLnF1b3RlID09PSBtLmJhc2UpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJRCA9IGAke20ucXVvdGV9XyR7cG9zc2libGVHYXRld2F5QXNzZXROYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZU1hcmtldHMuaGFzKG5ld0lEKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZSA9PSBcIlJVREVYLlJVQkxFXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHBvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IG0ucXVvdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG0gPT4gISFtKTtcbiAgICAgICAgICAgICAgICAgICAgKHtvdGhlck1hcmtldHMsIGJhc2VHcm91cHN9ID0gZmlsdGVyQW5kU2VwYXJhdGVNYXJrZXRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBbY3VycmVudEJhc2UsIHBvc3NpYmxlR2F0ZXdheUFzc2V0TmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXRld2F5TWFya2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VHcm91cHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlck1hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2Jhc2VHcm91cHMsIG90aGVyTWFya2V0c307XG4gICAgfVxuXG4gICAgX2dldEJhc2VzKCkge1xuICAgICAgICBsZXQge3ByZWZlcnJlZEJhc2VzLCBzZWFyY2hBc3NldHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtsb29rdXBRdW90ZSwgbG9va3VwQmFzZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBiYXNlcyA9IHNlYXJjaEFzc2V0c1xuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwQmFzZSAmJiBsb29rdXBCYXNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wuaW5kZXhPZihsb29rdXBCYXNlKSA9PT0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuc3ltYm9sLmluZGV4T2YobG9va3VwUXVvdGUpICE9PSAtMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwQmFzZSAmJiBsb29rdXBCYXNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXQuc3ltYm9sLmluZGV4T2YobG9va3VwQmFzZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3NldC5zeW1ib2w7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZWZlcnJlZEJhc2VzLmluY2x1ZGVzKGFzc2V0LnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sLmxlbmd0aCA+PSBsb29rdXBRdW90ZS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnN5bWJvbC5sZW5ndGggPCBsb29rdXBRdW90ZS5sZW5ndGggKyAzXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0LnN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgLnRvQXJyYXkoKTtcblxuICAgICAgICBiYXNlcyA9IGJhc2VzLmNvbmNhdChcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb29rdXBCYXNlIHx8ICFsb29rdXBCYXNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXhPZihsb29rdXBCYXNlKSA9PT0gMDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50b0FycmF5KClcbiAgICAgICAgKTtcblxuICAgICAgICBiYXNlcyA9IGJhc2VzLmZpbHRlcihiYXNlID0+IHtcbiAgICAgICAgICAgIGlmIChsb29rdXBCYXNlICYmIGxvb2t1cEJhc2UubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlLmluZGV4T2YobG9va3VwQmFzZSkgPT09IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYmFzZXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHMsXG4gICAgICAgICAgICBtYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIGNvbHVtbnMsXG4gICAgICAgICAgICBhc3NldHNMb2FkaW5nLFxuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMsXG4gICAgICAgICAgICBjdXJyZW50LFxuICAgICAgICAgICAgdmlld1NldHRpbmdzLFxuICAgICAgICAgICAgbGlzdEhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmVNYXJrZXRUYWIsIGFjdGl2ZVRhYn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IG15TWFya2V0VGFiID0gYWN0aXZlVGFiID09PSBcIm15LW1hcmtldFwiO1xuICAgICAgICBsZXQgZGVmYXVsdEJhc2VzID0gcHJlZmVycmVkQmFzZXMubWFwKGEgPT4gYSk7XG5cbiAgICAgICAgaWYgKCFteU1hcmtldFRhYikge1xuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMgPSBwcmVmZXJyZWRCYXNlcy5jbGVhcigpO1xuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXMgPSBwcmVmZXJyZWRCYXNlcy5wdXNoKHRoaXMuc3RhdGUuYWN0aXZlRmluZEJhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHNvbWUgZGVmYXVsdCBiYXNlIG9wdGlvbnNcbiAgICAgICAgLy8gbGV0IHByZWZlcnJlZEJhc2VzID0gW2NvcmVTeW1ib2wsIFwiQlRDXCIsIFwiVVNEXCIsIFwiQ05ZXCJdO1xuXG4gICAgICAgIC8qIEluIHRoZSBmaW5kLW1hcmtldCB0YWIsIG9ubHkgdXNlIG1hcmtldCB0YWIgMCAqL1xuICAgICAgICBpZiAoIW15TWFya2V0VGFiKSBhY3RpdmVNYXJrZXRUYWIgPSAwO1xuXG4gICAgICAgIGxldCB7YmFzZUdyb3Vwcywgb3RoZXJNYXJrZXRzfSA9IHRoaXMuX2dldE1hcmtldHMoKTtcbiAgICAgICAgY29uc3QgaGFzT3RoZXJzID0gb3RoZXJNYXJrZXRzICYmIG90aGVyTWFya2V0cy5sZW5ndGg7XG4gICAgICAgIGxldCBoYyA9IFwibXltYXJrZXRzLWhlYWRlciBjbGlja2FibGVcIjtcbiAgICAgICAgbGV0IHN0YXJDbGFzcyA9IGNuYW1lcyhoYywge2luYWN0aXZlOiAhbXlNYXJrZXRUYWJ9KTtcbiAgICAgICAgbGV0IGFsbENsYXNzID0gY25hbWVzKGhjLCB7aW5hY3RpdmU6IG15TWFya2V0VGFifSk7XG5cbiAgICAgICAgbGV0IGxpc3RTdHlsZSA9IHtcbiAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnN0YXRlLm1pbldpZHRoLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjZyZW1cIixcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMnJlbVwiXG4gICAgICAgIH07XG4gICAgICAgIGlmIChsaXN0SGVpZ2h0KSB7XG4gICAgICAgICAgICBsaXN0U3R5bGUuaGVpZ2h0ID0gbGlzdEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0b3IgPSByZXF1aXJlKFwiY291bnRlcnBhcnRcIik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRhYkhlYWRlciA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuaGVhZGVyU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBsZWZ0LW9yZGVyYm9vay1oZWFkZXIgYm90dG9tLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJteU1hcmtldHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhckNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMsIFwibXktbWFya2V0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e3RyYW5zbGF0b3IudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLm15X21hcmtldHNfdGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWxsQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcywgXCJmaW5kLW1hcmtldFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5maW5kX21hcmtldHNfdGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1vcmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vSGVhZGVyIHx8IHRoaXMucHJvcHMudGFiSGVhZGVyID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2xzID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMXJlbSAwXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9scyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIwLjVyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHshbXlNYXJrZXRUYWIgPyA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBvbkNoYW5nZT17dGhpcy5fbG9va3VwQXNzZXRzLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiU1lNQk9MOlNZTUJPTFwiIC8+IDogbnVsbH0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAge215TWFya2V0VGFiID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIHNocmlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAwLjVyZW0gMC43NXJlbSAwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3ttYXJnaW46IFwiM3B4IDAgMFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLm9ubHlMaXF1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlMaXF1aWQ6ICF0aGlzLnByb3BzLm9ubHlMaXF1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC40cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNob3dfb25seV9saXF1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3ttYXJnaW46IFwiM3B4IDAgMFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLm9ubHlTdGFyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMudG9nZ2xlU3RhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC40cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5zaG93X29ubHlfc3Rhcl9mb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJmaS1zdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ29sZC1zdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwic3Rhcl9pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYXJnaW4gbWFya2V0LWZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubXlNYXJrZXRGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjc1cmVtIDAuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFzc2V0U2VsZWN0PXt0aGlzLl9vbkZvdW5kQmFzZUFzc2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17ZGVmYXVsdEJhc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25JbnB1dEJhc2VBc3NldC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5maW5kQmFzZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldElucHV0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmluZEJhc2VJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvdW5kPXt0aGlzLl9vbkZvdW5kQmFzZUFzc2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhjaGFuZ2UucXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e3tmb250U2l6ZTogXCIwLjlyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC45cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXROYW1lLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmluZFNlYXJjaElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFzc2V0TmFtZUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvci1hcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRCcmVhazogXCJicmVhay1hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuaW52YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXltYXJrZXRzLXRhYnNcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19PlxuICAgICAgICAgICAgICAgICAgICB7LyogUXVvdGUgZWRpdCB0YWIgKi99XG4gICAgICAgICAgICAgICAgICAgIHtteU1hcmtldFRhYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJxdW90ZV9lZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1F1b3RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXltYXJrZXRzLXRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgeyFteU1hcmtldFRhYiAmJiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcHJlZmVycmVkQmFzZXMubWFwKChiYXNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXNlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVBY3RpdmVNYXJrZXRUYWIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcIm15bWFya2V0cy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBhY3RpdmVNYXJrZXRUYWIgPT09IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2UucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIHtteU1hcmtldFRhYiAmJiBoYXNPdGhlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wib3RoZXJzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFjdGl2ZU1hcmtldFRhYi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXJyZWRCYXNlcy5zaXplICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJteW1hcmtldHMtdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiID09PSBwcmVmZXJyZWRCYXNlcy5zaXplICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm90aGVyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17bGlzdFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXIgZ3JpZC1ibG9jayB2ZXJ0aWNhbCBteW1hcmtldHMtbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImZhdm9yaXRlc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YXNzZXRzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjNyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7cHJlZmVycmVkQmFzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT09IHByZWZlcnJlZEJhc2VzLmdldChhY3RpdmVNYXJrZXRUYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGJhc2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWFya2V0cz17dGhpcy5wcm9wcy51c2VyTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzPXt0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dDaGFuZ2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzPXtzdGFycmVkTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzPXttYXJrZXRTdGF0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5ncz17dmlld1NldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXJrZXRUYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5maW5kQ29sdW1ucyB8fCBjb2x1bW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRzPXtiYXNlR3JvdXBzW2Jhc2VdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M9e215TWFya2V0VGFiID8gMjAgOiAxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRNYXJrZXRUYWI9eyFteU1hcmtldFRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seUxpcXVpZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkICYmIG15TWFya2V0VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlTWFya2V0VGFiID09PSBwcmVmZXJyZWRCYXNlcy5zaXplICsgMSAmJlxuICAgICAgICAgICAgICAgICAgICBteU1hcmtldFRhYiAmJlxuICAgICAgICAgICAgICAgICAgICBoYXNPdGhlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWFya2V0cz17dGhpcy5wcm9wcy51c2VyTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJlZmVycmVkQmFzZXMuc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzPXtzdGFycmVkTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cz17bWFya2V0U3RhdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld1NldHRpbmdzPXt2aWV3U2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRzPXtvdGhlck1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT1cIm90aGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17bXlNYXJrZXRUYWIgPyAyMCA6IDEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRNYXJrZXRUYWI9eyFteU1hcmtldFRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UXVvdGVTZWxlY3Rpb25Nb2RhbFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzUXVvdGVNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlUXVvdGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsPXt0aGlzLnNob3dRdW90ZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBxdW90ZXM9e3RoaXMucHJvcHMucHJlZmVycmVkQmFzZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTXlNYXJrZXRzID0gZGVib3VuY2VSZW5kZXIoTXlNYXJrZXRzLCA1MCwge2xlYWRpbmc6IGZhbHNlfSk7XG5cbmNsYXNzIE15TWFya2V0c1dyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxNeU1hcmtldHMgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNeU1hcmtldHNXcmFwcGVyLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZSwgTWFya2V0c1N0b3JlLCBBc3NldFN0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgIG9ubHlMaXF1aWQ6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgIFwib25seUxpcXVpZFwiLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBkZWZhdWx0TWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLmRlZmF1bHRNYXJrZXRzLFxuICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLFxuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5wcmVmZXJyZWRCYXNlcyxcbiAgICAgICAgICAgIG1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIHVzZXJNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudXNlck1hcmtldHMsXG4gICAgICAgICAgICBzZWFyY2hBc3NldHM6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHMsXG4gICAgICAgICAgICBvbmx5U3RhcnM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm9ubHlTdGFycyxcbiAgICAgICAgICAgIGFzc2V0c0xvYWRpbmc6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHNMb2FkaW5nXG4gICAgICAgIH07XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5pbXBvcnQge01vZGFsLCBCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVvdGVTZWxlY3Rpb25Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJhY2tpbmdBc3NldDogXCJcIixcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9vbk1vdmVVcChxdW90ZSkge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnByb3BzLnF1b3Rlcy5maW5kSW5kZXgocSA9PiBxID09PSBxdW90ZSk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgIG9sZEluZGV4OiBpZHgsXG4gICAgICAgICAgICBuZXdJbmRleDogaWR4IC0gMVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25Nb3ZlRG93bihxdW90ZSkge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnByb3BzLnF1b3Rlcy5maW5kSW5kZXgocSA9PiBxID09PSBxdW90ZSk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgIG9sZEluZGV4OiBpZHgsXG4gICAgICAgICAgICBuZXdJbmRleDogaWR4ICsgMVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25SZW1vdmUocXVvdGUpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5wcm9wcy5xdW90ZXMuZmluZEluZGV4KHEgPT4gcSA9PT0gcXVvdGUpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgICAgICByZW1vdmU6IGlkeFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25BZGQocXVvdGUpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5wcm9wcy5xdW90ZXMuZmluZEluZGV4KHEgPT4gcSA9PT0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpKTtcbiAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgICAgICBhZGQ6IHF1b3RlLmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25JbnB1dEJhY2tpbmdBc3NldChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJhY2tpbmdBc3NldDogYXNzZXQudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkZvdW5kQmFja2luZ0Fzc2V0KGFzc2V0KSB7XG4gICAgICAgIGlmIChhc3NldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnF1b3Rlcy5pbmNsdWRlcyhhc3NldC5nZXQoXCJzeW1ib2xcIikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNWYWxpZDogdHJ1ZX0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiQXNzZXQgYWxyZWFkeSBiZWluZyB1c2VkXCIsXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBxdW90ZUNvdW50ID0gdGhpcy5wcm9wcy5xdW90ZXMuc2l6ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdW90ZV9zZWxlY3Rpb25cIil9XG4gICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICBpZD1cInF1b3RlX3NlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLmNsb3NlXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5vLWJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5xdW90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubW92ZV9kb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tb3ZlX3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5yZW1vdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnF1b3Rlcy5tYXAoKHEsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpZHggKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZHggIT09IHF1b3RlQ291bnQgLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Nb3ZlRG93bi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR4ICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Nb3ZlVXAuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZXZyb24tZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlIHJvdGF0ZTE4MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdW90ZUNvdW50ID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uUmVtb3ZlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjcm9zcy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4Y2hhbmdlLmN1c3RvbV9xdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXRCYWNraW5nQXNzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5iYWNraW5nQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJbnB1dD17dGhpcy5zdGF0ZS5iYWNraW5nQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdSaWdodDogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm91bmQ9e3RoaXMuX29uRm91bmRCYWNraW5nQXNzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbj17dGhpcy5fb25BZGQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25fbGFiZWw9XCJleGNoYW5nZS5hZGRfcXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b249eyEhZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYXJlYVwiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuL0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4vQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqICBHaXZlbiBhbiBhY2NvdW50IGlkLCBkaXNwbGF5cyB0aGUgbmFtZSBvZiB0aGF0IGFjY291bnRcclxuICpcclxuICogIEV4cGVjdHMgb25lIHByb3BlcnR5LCAnYWNjb3VudCcgd2hpY2ggc2hvdWxkIGJlIGEgYWNjb3VudCBpZFxyXG4gKi9cclxuXHJcbmNsYXNzIEFjY291bnROYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hY2NvdW50KSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gPHNwYW4+e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpfTwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudE5hbWUpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0NTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNpdGlvbldyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbXBvbmVudDogXCJzcGFuXCIsXG4gICAgICAgIGVudGVyVGltZW91dDogMjAwMFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbigpO1xuICAgIH1cblxuICAgIHJlc2V0QW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVBbmltYXRpb24oKTtcbiAgICB9XG5cbiAgICBlbmFibGVBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5jb21wb25lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbkdyb3VwXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5wcm9wcy5jb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcz17dGhpcy5wcm9wcy50cmFuc2l0aW9uTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXt7ZW50ZXI6IHRoaXMucHJvcHMuZW50ZXJUaW1lb3V0fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17dGhpcy5zdGF0ZS5hbmltYXRlRW50ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=