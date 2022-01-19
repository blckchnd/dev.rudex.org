"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[27],{

/***/ 2696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2082);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2049);
/* harmony import */ var _Utility_AccountName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2697);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2662);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1813);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2303);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(646);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2062);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(655);
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

/***/ 2695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2702);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2631);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(596);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2400);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1804);
/* harmony import */ var _MarketRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2696);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(645);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2302);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2311);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2052);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(646);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2312);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2303);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2698);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1905);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(426);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2074);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(653);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var common_gateways__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2056);
/* harmony import */ var _QuoteSelectionModal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2700);
/* harmony import */ var _Utility_SearchInput__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2701);



























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
      minHeight: "6rem"
    };

    if (listHeight) {
      listStyle.height = listHeight;
    }

    const translator = __webpack_require__(612);

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

/***/ 2700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuoteSelectionModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1813);
/* harmony import */ var _Utility_AssetSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2698);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(646);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(655);
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

/***/ 2697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1926);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1927);



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

/***/ 2669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TransitionWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2670);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__);


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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: this.props.id,
        className: this.props.className,
        component: this.props.component,
        transitionName: this.props.transitionName,
        transitionEnterTimeout: this.props.enterTimeout,
        transitionEnter: this.state.animateEnter,
        transitionLeave: false
      }, this.props.children);
    }
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcuZjQyNmZhZmQ1Zjc1Yjc2ZjhlOWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFRQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUhBOztBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBOztBQVNBO0FBQ0E7QUFJQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7O0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTs7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSEE7O0FBU0E7QUFDQTtBQXNCQTtBQU1BOztBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUhBOztBQWdCQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQU5BOztBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBUkE7O0FBY0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7O0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBREE7QUFRQTtBQUNBO0FBSUE7QUFOQTs7QUFZQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFOQTs7QUFhQTtBQUNBO0FBOU9BO0FBZ1BBO0FBRUE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUlBOztBQTNWQTs7QUE2VkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUF4RUE7QUEwRUE7QUFFQTtBQUVBO0FBS0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUEvQkE7QUFrQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBDQTtBQXNDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBV0E7O0FBalNBOztBQW9TQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQUVBO0FBc0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7QUFJQTs7QUFDQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFJQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFPQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBUUE7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUE7OztBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQWVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUF0QkE7QUEwQkE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBakJBO0FBcUJBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFGQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFZQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQU5BO0FBYUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBMEJBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7O0FBcDNCQTs7QUF1M0JBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBOztBQXBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOXJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFSQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUlBO0FBQ0E7QUFOQTtBQVVBO0FBQUE7QUFHQTtBQUlBO0FBQ0E7QUFOQTtBQVVBO0FBQUE7QUFHQTtBQUlBO0FBQ0E7QUFOQTtBQVlBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFBQTtBQUtBOztBQTFLQTs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQVpBOztBQWVBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVlBO0FBQ0E7O0FBN0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvTWFya2V0Um93LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NeU1hcmtldHMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0V4Y2hhbmdlL1F1b3RlU2VsZWN0aW9uTW9kYWwuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQWNjb3VudE5hbWUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvVHJhbnNpdGlvbldyYXBwZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBBY2NvdW50TmFtZSBmcm9tIFwiLi4vVXRpbGl0eS9BY2NvdW50TmFtZVwiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5jbGFzcyBNYXJrZXRSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG5vU3ltYm9sczogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0c0ludGVydmFsID0gbnVsbDtcbiAgICB9XG5cbiAgICBfb25DbGljayhtYXJrZXRJRCkge1xuICAgICAgICBjb25zdCBuZXdQYXRoID0gYC9tYXJrZXQvJHttYXJrZXRJRH1gO1xuICAgICAgICBpZiAobmV3UGF0aCAhPT0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMuc3dpdGNoTWFya2V0KCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL21hcmtldC8ke21hcmtldElEfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc3RhdHNDaGVja2VkID0gbmV3IERhdGUoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhc2UgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGUgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZS5nZXQgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFzZS5nZXQoXCJpZFwiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZS5nZXQgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGUuZ2V0KFwiaWRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRzSW50ZXJ2YWwgPSBNYXJrZXRzQWN0aW9ucy5nZXRNYXJrZXRTdGF0c0ludGVydmFsKFxuICAgICAgICAgICAgICAgIDM1ICogMTAwMCxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhc2UsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0c0ludGVydmFsKSB0aGlzLnN0YXRzSW50ZXJ2YWwoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFByb3BzLCB0aGlzLnByb3BzKTtcbiAgICB9XG5cbiAgICBfb25TdGFyKHF1b3RlLCBiYXNlLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnN0YXJyZWQpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5hZGRTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5yZW1vdmVTdGFyTWFya2V0KHF1b3RlLCBiYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtxdW90ZSwgYmFzZSwgbm9TeW1ib2xzLCBzdGF0cywgc3RhcnJlZH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIXF1b3RlIHx8ICFiYXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXJrZXRJRCA9IHF1b3RlLmdldChcInN5bWJvbFwiKSArIFwiX1wiICsgYmFzZS5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgIGxldCBtYXJrZXROYW1lID0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpICsgXCI6XCIgKyBiYXNlLmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgbGV0IGR5bmFtaWNfZGF0YSA9IHRoaXMucHJvcHMuZ2V0RHluYW1pY09iamVjdChcbiAgICAgICAgICAgIHF1b3RlLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuICAgICAgICBsZXQgYmFzZV9keW5hbWljX2RhdGEgPSB0aGlzLnByb3BzLmdldER5bmFtaWNPYmplY3QoXG4gICAgICAgICAgICBiYXNlLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBwcmljZSA9IHV0aWxzLmNvbnZlcnRQcmljZShxdW90ZSwgYmFzZSk7XG5cbiAgICAgICAgbGV0IHJvd1N0eWxlcyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sZWZ0QWxpZ24pIHtcbiAgICAgICAgICAgIHJvd1N0eWxlcy50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBidXR0b25DbGFzcyA9IFwiYnV0dG9uIG91dGxpbmVcIjtcbiAgICAgICAgbGV0IGJ1dHRvblN0eWxlID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29tcGFjdCkge1xuICAgICAgICAgICAgYnV0dG9uQ2xhc3MgKz0gXCIgbm8tbWFyZ2luXCI7XG4gICAgICAgICAgICBidXR0b25TdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC43NXJlbVwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4IDEwcHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjA1cmVtXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1uc1xuICAgICAgICAgICAgLm1hcChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0YXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFyQ2xhc3MgPSBzdGFycmVkID8gXCJnb2xkLXN0YXJcIiA6IFwiZ3JleS1zdGFyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblN0YXIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZS5nZXQoXCJzeW1ib2xcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXJDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaS1zdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZmlfc3Rhci5zeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2b2xcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSBzdGF0cyA/IHN0YXRzLnZvbHVtZUJhc2UgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF92b2x1bWUoYW1vdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hhbmdlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhbmdlID0gdXRpbHMuZm9ybWF0X251bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cyAmJiBzdGF0cy5jaGFuZ2UgPyBzdGF0cy5jaGFuZ2UgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhbmdlQ2xhc3MgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSA9PT0gXCIwLjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhbmdlID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNoYW5nZS11cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiY2hhbmdlLWRvd25cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInRleHQtcmlnaHQgXCIgKyBjaGFuZ2VDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhbmdlICsgXCIlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1hcmtldE5hbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b25DbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtidXR0b25TdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJrZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cXVvdGUuZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwcmljZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmFsUHJpY2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzICYmIHN0YXRzLnByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3RhdHMucHJpY2UudG9SZWFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdGF0cyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmNsb3NlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRzLmNsb3NlLnF1b3RlLmFtb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5jbG9zZS5iYXNlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdXRpbHMuZ2V0X2Fzc2V0X3ByaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuY2xvc2UucXVvdGUuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5jbG9zZS5iYXNlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdXRpbHMuZ2V0X2Fzc2V0X3ByaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UucXVvdGUuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZS5iYXNlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoaWdoUHJlY2lzaW9uQXNzZXRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQlRDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSVURFWC5CVENcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdPTERcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNJTFZFUlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZWNpc2lvbiA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaFByZWNpc2lvbkFzc2V0cy5pbmRleE9mKGJhc2UuZ2V0KFwic3ltYm9sXCIpKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gODtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25DbGljay5iaW5kKHRoaXMsIG1hcmtldElEKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLmZvcm1hdF9udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxQcmljZSA+IDEwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpbmFsUHJpY2UgPiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicXVvdGVTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uQ2xpY2suYmluZCh0aGlzLCBtYXJrZXRJRCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2R5bmFtaWNfZGF0YSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17cGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNfZGF0YS5nZXQoXCJjdXJyZW50X3N1cHBseVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtxdW90ZS5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiYXNlU3VwcGx5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYXNlX2R5bmFtaWNfZGF0YSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogXCJib2xkXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17cGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfZHluYW1pY19kYXRhLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VycmVudF9zdXBwbHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2Jhc2UuZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaXNzdWVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrLmJpbmQodGhpcywgbWFya2V0SUQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50TmFtZSBhY2NvdW50PXtxdW90ZS5nZXQoXCJpc3N1ZXJcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2hlY2tNYXJrZXQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiVGhpcyBtYXJrZXQgaXMgYSBkZWZhdWx0IG1hcmtldCBhbmQgY2Fubm90IGJlIHJlbW92ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmlzQ2hlY2tlZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0RlZmF1bHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMucmVtb3ZlTWFya2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dCBmbG9hdC1yaWdodCByZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigJNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5rZXkgPiBiLmtleTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBcImNsaWNrYWJsZVwiO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50KSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgYWN0aXZlTWFya2V0XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17cm93U3R5bGVzfT5cbiAgICAgICAgICAgICAgICB7Y29sdW1uc31cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxufVxuTWFya2V0Um93ID0gd2l0aFJvdXRlcihNYXJrZXRSb3cpO1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldFdyYXBwZXIoTWFya2V0Um93LCB7XG4gICAgcHJvcE5hbWVzOiBbXCJxdW90ZVwiLCBcImJhc2VcIl0sXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHRlbXBDb21wb25lbnQ6IFwidHJcIlxuICAgIH0sXG4gICAgd2l0aER5bmFtaWM6IHRydWVcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgUHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFRyYW5zbGF0ZVdpdGhMaW5rcyBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2xhdGVXaXRoTGlua3NcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IE1hcmtldFJvdyBmcm9tIFwiLi9NYXJrZXRSb3dcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IEFzc2V0U3RvcmUgZnJvbSBcInN0b3Jlcy9Bc3NldFN0b3JlXCI7XG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBBc3NldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQXNzZXRBY3Rpb25zXCI7XG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XG5pbXBvcnQge0NoYWluVmFsaWRhdGlvbiwgQ2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgZGVib3VuY2VSZW5kZXIgZnJvbSBcInJlYWN0LWRlYm91bmNlLXJlbmRlclwiO1xuaW1wb3J0IFpmQXBpIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2ZvdW5kYXRpb24tYXBpXCI7XG5pbXBvcnQge2dldFBvc3NpYmxlR2F0ZXdheVByZWZpeGVzLCBnYXRld2F5UHJlZml4ZXN9IGZyb20gXCJjb21tb24vZ2F0ZXdheXNcIjtcbmltcG9ydCBRdW90ZVNlbGVjdGlvbk1vZGFsIGZyb20gXCIuL1F1b3RlU2VsZWN0aW9uTW9kYWxcIjtcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tIFwiLi4vVXRpbGl0eS9TZWFyY2hJbnB1dFwiO1xuXG5jbGFzcyBNYXJrZXRHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbWF4Um93czogMjAsXG4gICAgICAgIG9ubHlMaXF1aWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUocHJvcHMpO1xuICAgIH1cblxuICAgIF9nZXRJbml0aWFsU3RhdGUocHJvcHMpIHtcbiAgICAgICAgbGV0IG9wZW4gPSBwcm9wcy5maW5kTWFya2V0VGFiXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogcHJvcHMudmlld1NldHRpbmdzLmdldChgbXlNYXJrZXRzQmFzZV8ke3Byb3BzLmluZGV4fWApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3Blbjogb3BlbiAhPT0gdW5kZWZpbmVkID8gb3BlbiA6IHRydWUsXG4gICAgICAgICAgICBpbnZlcnNlU29ydDogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c0ludmVydFwiLCB0cnVlKSxcbiAgICAgICAgICAgIHNvcnRCeTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c1NvcnRcIiwgXCJ2b2x1bWVcIilcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5maW5kTWFya2V0VGFiICE9PSB0aGlzLnByb3BzLmZpbmRNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fZ2V0SW5pdGlhbFN0YXRlKG5leHRQcm9wcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmICghbmV4dFByb3BzLm1hcmtldHMgfHwgIXRoaXMucHJvcHMubWFya2V0cykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobmV4dFByb3BzLm1hcmtldHMsIHRoaXMucHJvcHMubWFya2V0cykgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5zdGFycmVkTWFya2V0cyAhPT0gdGhpcy5wcm9wcy5zdGFycmVkTWFya2V0cyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm1hcmtldFN0YXRzICE9PSB0aGlzLnByb3BzLm1hcmtldFN0YXRzIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMudXNlck1hcmtldHMgIT09IHRoaXMucHJvcHMudXNlck1hcmtldHNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfaW52ZXJzZVNvcnQoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBteU1hcmtldHNJbnZlcnQ6ICF0aGlzLnN0YXRlLm15TWFya2V0c0ludmVydFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnZlcnNlU29ydDogIXRoaXMuc3RhdGUuaW52ZXJzZVNvcnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoYW5nZVNvcnQodHlwZSkge1xuICAgICAgICBpZiAodHlwZSAhPT0gdGhpcy5zdGF0ZS5zb3J0QnkpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgbXlNYXJrZXRzU29ydDogdHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW52ZXJzZVNvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIF9vblNlbGVjdEJhc2UoZSkge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAvLyAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZUJhc2UodGhpcy5wcm9wcy5pbmRleCwgZS50YXJnZXQudmFsdWUpO1xuICAgIC8vIH1cblxuICAgIF9vblRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmZpbmRNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgIGxldCBvcGVuID0gIXRoaXMuc3RhdGUub3BlbjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9wZW46IG9wZW5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHt9O1xuICAgICAgICAgICAgc2V0dGluZ1tgbXlNYXJrZXRzQmFzZV8ke3RoaXMucHJvcHMuaW5kZXh9YF0gPSBvcGVuO1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHNldHRpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uVG9nZ2xlVXNlck1hcmtldChtYXJrZXQpIHtcbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPSBtYXJrZXQuc3BsaXQoXCJfXCIpO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy51c2VyTWFya2V0cy5nZXQobWFya2V0KTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLnNldFVzZXJNYXJrZXQoYmFzZSwgcXVvdGUsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgbWFya2V0cyxcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBtYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzLFxuICAgICAgICAgICAgY3VycmVudFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtzb3J0QnksIGludmVyc2VTb3J0LCBvcGVufSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFtYXJrZXRzIHx8ICFtYXJrZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGVhZGVycyA9IGNvbHVtbnMubWFwKGhlYWRlciA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGhlYWRlci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1hcmtldFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVNvcnQuYmluZCh0aGlzLCBcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwidm9sXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlU29ydC5iaW5kKHRoaXMsIFwidm9sdW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnZvbF9zaG9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInByaWNlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwicXVvdGVTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5iYXNlX3N1cHBseVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImJhc2VTdXBwbHlcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5xdW90ZV9zdXBwbHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9jaGFuZ2VTb3J0LmJpbmQodGhpcywgXCJjaGFuZ2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UuY2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiaXNzdWVyXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXRzLmlzc3VlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aGVhZGVyLm5hbWV9IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnBlcm0uY29uZmlybV9hZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGgga2V5PXtoZWFkZXIubmFtZX0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtYXJrZXRSb3dzID0gbWFya2V0c1xuICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkICYmXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmdldChtYXJrZXQuaWQpICYmXG4gICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzLmdldChtYXJrZXQuaWQpLnZvbHVtZUJhc2UgPT0gMFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtldFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttYXJrZXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlID09PSBcIm90aGVyc1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17bWFya2V0LnF1b3RlfSAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17bWFya2V0LmJhc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGxhY2U9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e21hcmtldC5xdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17bWFya2V0LnF1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17bWFya2V0LmJhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEFsaWduPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vU3ltYm9scz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzPXttYXJrZXRTdGF0cy5nZXQobWFya2V0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJyZWQ9e3N0YXJyZWRNYXJrZXRzLmhhcyhtYXJrZXQuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudCA9PT0gbWFya2V0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXt0aGlzLnByb3BzLnVzZXJNYXJrZXRzLmhhcyhtYXJrZXQuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0TWFya2V0cy5oYXMobWFya2V0LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja01hcmtldD17dGhpcy5fb25Ub2dnbGVVc2VyTWFya2V0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYV9zeW1ib2xzID0gYS5rZXkuc3BsaXQoXCJfXCIpO1xuICAgICAgICAgICAgICAgIGxldCBiX3N5bWJvbHMgPSBiLmtleS5zcGxpdChcIl9cIik7XG4gICAgICAgICAgICAgICAgbGV0IGFTdGF0cyA9IG1hcmtldFN0YXRzLmdldChhX3N5bWJvbHNbMF0gKyBcIl9cIiArIGFfc3ltYm9sc1sxXSk7XG4gICAgICAgICAgICAgICAgbGV0IGJTdGF0cyA9IG1hcmtldFN0YXRzLmdldChiX3N5bWJvbHNbMF0gKyBcIl9cIiArIGJfc3ltYm9sc1sxXSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNvcnRCeSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFfc3ltYm9sc1swXSA+IGJfc3ltYm9sc1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnZlcnNlU29ydCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYV9zeW1ib2xzWzBdIDwgYl9zeW1ib2xzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGludmVyc2VTb3J0ID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYV9zeW1ib2xzWzFdID4gYl9zeW1ib2xzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnZlcnNlU29ydCA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFfc3ltYm9sc1sxXSA8IGJfc3ltYm9sc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW52ZXJzZVNvcnQgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2b2x1bWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhU3RhdHMgJiYgYlN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludmVyc2VTb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiU3RhdHMudm9sdW1lQmFzZSAtIGFTdGF0cy52b2x1bWVCYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhU3RhdHMudm9sdW1lQmFzZSAtIGJTdGF0cy52b2x1bWVCYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoYW5nZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFTdGF0cyAmJiBiU3RhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW52ZXJzZVNvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJTdGF0cy5jaGFuZ2UgLSBhU3RhdHMuY2hhbmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhU3RhdHMuY2hhbmdlIC0gYlN0YXRzLmNoYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAxMH19PlxuICAgICAgICAgICAgICAgIHtvcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj57aGVhZGVyc308L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRSb3dzICYmIG1hcmtldFJvd3MubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT57bWFya2V0Um93c308L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIE15TWFya2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYWN0aXZlVGFiOiBcIm15LW1hcmtldFwiLFxuICAgICAgICBzZXRNaW5XaWR0aDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNRdW90ZU1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBpbnZlcnNlU29ydDogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c0ludmVydFwiLCB0cnVlKSxcbiAgICAgICAgICAgIHNvcnRCeTogcHJvcHMudmlld1NldHRpbmdzLmdldChcIm15TWFya2V0c1NvcnRcIiwgXCJ2b2x1bWVcIiksXG4gICAgICAgICAgICBhY3RpdmVUYWI6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJmYXZNYXJrZXRUYWJcIiwgXCJteS1tYXJrZXRcIiksXG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWI6IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQoXCJhY3RpdmVNYXJrZXRUYWJcIiwgMCksXG4gICAgICAgICAgICBsb29rdXBRdW90ZTogbnVsbCxcbiAgICAgICAgICAgIGxvb2t1cEJhc2U6IG51bGwsXG4gICAgICAgICAgICBpbnB1dFZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgbWluV2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgZmluZEJhc2VJbnB1dDogXCJHUEhcIixcbiAgICAgICAgICAgIGFjdGl2ZUZpbmRCYXNlOiBcIkdQSFwiXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0TWluV2lkdGggPSB0aGlzLl9zZXRNaW5XaWR0aC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdCA9IGRlYm91bmNlKEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIsIDE1MCk7XG5cbiAgICAgICAgdGhpcy5zaG93UXVvdGVNb2RhbCA9IHRoaXMuc2hvd1F1b3RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oaWRlUXVvdGVNb2RhbCA9IHRoaXMuaGlkZVF1b3RlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgLyogVHJpZ2dlciBhIGxvb2t1cCB3aGVuIHN3aXRjaGluZyB0YWJzIHRvIGZpbmQtbWFya2V0ICovXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiICE9PSBcImZpbmQtbWFya2V0XCIgJiZcbiAgICAgICAgICAgIG5leHRTdGF0ZS5hY3RpdmVUYWIgPT09IFwiZmluZC1tYXJrZXRcIiAmJlxuICAgICAgICAgICAgIW5leHRQcm9wcy5zZWFyY2hBc3NldHMuc2l6ZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuX2xvb2t1cEFzc2V0cyhcIlJVREVYLlwiLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVRhYiAhPT0gbmV4dFN0YXRlLmFjdGl2ZVRhYikge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKG5leHRTdGF0ZS5hY3RpdmVUYWIpO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgIW5leHRQcm9wcy50YWJIZWFkZXIgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiICE9PSBuZXh0UHJvcHMuYWN0aXZlVGFiXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKG5leHRQcm9wcy5hY3RpdmVUYWIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobmV4dFByb3BzLnNlYXJjaEFzc2V0cywgdGhpcy5wcm9wcy5zZWFyY2hBc3NldHMpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5tYXJrZXRzLCB0aGlzLnByb3BzLm1hcmtldHMpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0YXJyZWRNYXJrZXRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKFxuICAgICAgICAgICAgICAgIG5leHRQcm9wcy5kZWZhdWx0TWFya2V0cyxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5tYXJrZXRTdGF0cywgdGhpcy5wcm9wcy5tYXJrZXRTdGF0cykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMubWluV2lkdGggIT09IHRoaXMucHJvcHMubWluV2lkdGggfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5saXN0SGVpZ2h0ICE9PSB0aGlzLnByb3BzLmxpc3RIZWlnaHQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5wcmVmZXJyZWRCYXNlcyAhPT0gdGhpcy5wcm9wcy5wcmVmZXJyZWRCYXNlcyB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLm9ubHlTdGFycyAhPT0gdGhpcy5wcm9wcy5vbmx5U3RhcnMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5vbmx5TGlxdWlkICE9PSB0aGlzLnByb3BzLm9ubHlMaXF1aWQgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5hc3NldHNMb2FkaW5nICE9PSB0aGlzLnByb3BzLmFzc2V0c0xvYWRpbmcgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy51c2VyTWFya2V0cyAhPT0gdGhpcy5wcm9wcy51c2VyTWFya2V0c1xuICAgICAgICApO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNldE1pbldpZHRoKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXRNaW5XaWR0aCwge1xuICAgICAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCYXNlID0gdGhpcy5wcm9wcy5jdXJyZW50LnNwbGl0KFwiX1wiKVsxXTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMucHJvcHMucHJlZmVycmVkQmFzZXMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgIGEgPT4gYSA9PT0gY3VycmVudEJhc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCAhPT0gdGhpcy5zdGF0ZS5hY3RpdmVNYXJrZXRUYWJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZU1hcmtldFRhYjogY3VycmVudEluZGV4fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IGhpc3RvcnlDb250YWluZXIgPSB0aGlzLnJlZnMuZmF2b3JpdGVzO1xuICAgICAgICBQcy5pbml0aWFsaXplKGhpc3RvcnlDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuX3NldE1pbldpZHRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlVGFiID09PSBcImZpbmQtbWFya2V0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvb2t1cEFzc2V0cyhcIlJVREVYLlwiLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVRhYiAhPT0gdGhpcy5wcm9wcy5hY3RpdmVUYWIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZVRhYih0aGlzLnByb3BzLmFjdGl2ZVRhYik7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNldE1pbldpZHRoKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXRNaW5XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm15TWFya2V0VGFiICYmICFucC5teU1hcmtldFRhYikge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVmcy5maW5kU2VhcmNoSW5wdXQpIHRoaXMucmVmcy5maW5kU2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVRdW90ZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUXVvdGVNb2RhbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dRdW90ZU1vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzUXVvdGVNb2RhbFZpc2libGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NldE1pbldpZHRoKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldE1pbldpZHRoICYmXG4gICAgICAgICAgICB0aGlzLnJlZnMuZmF2b3JpdGVzICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGl2ZVRhYiA9PT0gXCJteS1tYXJrZXRcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1pbldpZHRoICE9PSB0aGlzLnJlZnMuZmF2b3JpdGVzLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0aGlzLnJlZnMuZmF2b3JpdGVzLm9mZnNldFdpZHRoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZnMuZmF2b3JpdGVzKSB7XG4gICAgICAgICAgICBsZXQgaGlzdG9yeUNvbnRhaW5lciA9IHRoaXMucmVmcy5mYXZvcml0ZXM7XG4gICAgICAgICAgICBQcy51cGRhdGUoaGlzdG9yeUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW52ZXJzZVNvcnQoKSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBteU1hcmtldHNJbnZlcnQ6ICF0aGlzLnN0YXRlLm15TWFya2V0c0ludmVydFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnZlcnNlU29ydDogIXRoaXMuc3RhdGUuaW52ZXJzZVNvcnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NoYW5nZVNvcnQodHlwZSkge1xuICAgICAgICBpZiAodHlwZSAhPT0gdGhpcy5zdGF0ZS5zb3J0QnkpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgbXlNYXJrZXRzU29ydDogdHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzb3J0Qnk6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW52ZXJzZVNvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nb01hcmtldHMoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL21hcmtldHNcIik7XG4gICAgfVxuXG4gICAgX2NoYW5nZVRhYih0YWIpIHtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgIGZhdk1hcmtldFRhYjogdGFiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogdGFiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3NldE1pbldpZHRoKCk7XG4gICAgfVxuXG4gICAgX29uSW5wdXROYW1lKGdldEJhY2tlZEFzc2V0cywgZSkge1xuICAgICAgICBsZXQgdG9GaW5kID0gZS50YXJnZXQudmFsdWUudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGxldCBpc1ZhbGlkTmFtZSA9ICFDaGFpblZhbGlkYXRpb24uaXNfdmFsaWRfc3ltYm9sX2Vycm9yKHRvRmluZCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbnB1dFZhbHVlOiB0b0ZpbmRcbiAgICAgICAgfSk7XG4gICAgICAgIC8qIERvbid0IGxvb2t1cCBpbnZhbGlkIGFzc2V0IG5hbWVzICovXG4gICAgICAgIGlmICh0b0ZpbmQgJiYgdG9GaW5kLmxlbmd0aCA+PSAyICYmICFpc1ZhbGlkTmFtZSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09IHRvRmluZCkge1xuICAgICAgICAgICAgdGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb29rdXBBc3NldHModG9GaW5kLCBnZXRCYWNrZWRBc3NldHMpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICB9XG5cbiAgICBfbG9va3VwQXNzZXRzKHZhbHVlLCBnYXRld2F5QXNzZXRzID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gXCJcIikgcmV0dXJuO1xuXG4gICAgICAgIGxldCBzeW1ib2xzID0gdmFsdWUudG9VcHBlckNhc2UoKS5zcGxpdChcIjpcIik7XG4gICAgICAgIGxldCBxdW90ZSA9IHN5bWJvbHNbMF07XG4gICAgICAgIGxldCBiYXNlID0gc3ltYm9scy5sZW5ndGggPT09IDIgPyBzeW1ib2xzWzFdIDogbnVsbDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvb2t1cFF1b3RlOiBxdW90ZSxcbiAgICAgICAgICAgIGxvb2t1cEJhc2U6IGJhc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nLmRlZmVyKHtcbiAgICAgICAgICAgIG1hcmtldExvb2t1cElucHV0OiB2YWx1ZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0QXNzZXRMaXN0KHF1b3RlLCA1MCwgZ2F0ZXdheUFzc2V0cyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlQWN0aXZlTWFya2V0VGFiKGluZGV4KSB7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICBhY3RpdmVNYXJrZXRUYWI6IGluZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiOiBpbmRleFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25JbnB1dEJhc2VBc3NldChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbmRCYXNlSW5wdXQ6IGFzc2V0LnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICBlcnJvcjogbnVsbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25Gb3VuZEJhc2VBc3NldChhc3NldCkge1xuICAgICAgICBpZiAoYXNzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZUZpbmRCYXNlOiBhc3NldC5nZXQoXCJzeW1ib2xcIil9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFySW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe215TWFya2V0RmlsdGVyOiBcIlwifSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVNlYXJjaFVwZGF0ZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG15TWFya2V0RmlsdGVyOiBlLnRhcmdldC52YWx1ZSAmJiBlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfZ2V0TWFya2V0cygpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgc2VhcmNoQXNzZXRzLFxuICAgICAgICAgICAgZGVmYXVsdE1hcmtldHMsXG4gICAgICAgICAgICBvbmx5U3RhcnMsXG4gICAgICAgICAgICB1c2VyTWFya2V0cyxcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzLFxuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHNcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYixcbiAgICAgICAgICAgIGxvb2t1cFF1b3RlLFxuICAgICAgICAgICAgbG9va3VwQmFzZSxcbiAgICAgICAgICAgIG15TWFya2V0RmlsdGVyLFxuICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBwb3NzaWJsZUdhdGV3YXlBc3NldHMgPSBnZXRQb3NzaWJsZUdhdGV3YXlQcmVmaXhlcyhcbiAgICAgICAgICAgIHByZWZlcnJlZEJhc2VzXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGJhc2VzID0gdGhpcy5fZ2V0QmFzZXMoKTtcbiAgICAgICAgbGV0IGFsbE1hcmtldHMgPSBbXSxcbiAgICAgICAgICAgIGJhc2VHcm91cHMgPSB7fTtcbiAgICAgICAgbGV0IG90aGVyTWFya2V0cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IG15TWFya2V0VGFiID0gYWN0aXZlVGFiID09PSBcIm15LW1hcmtldFwiO1xuXG4gICAgICAgIGlmIChzZWFyY2hBc3NldHMuc2l6ZSkge1xuICAgICAgICAgICAgc2VhcmNoQXNzZXRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLm9wdGlvbnMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGEub3B0aW9ucy5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwidmlzaWJsZVwiIGluIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVzY3JpcHRpb24udmlzaWJsZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgYS5zeW1ib2wuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhLnN5bWJvbC5sZW5ndGggPj0gbG9va3VwUXVvdGUubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJhc2VzLmZvckVhY2goYmFzZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPSBhc3NldC5zeW1ib2wgKyBcIl9cIiArIGJhc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYXNlICE9PSBhc3NldC5zeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxNYXJrZXRzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1b3RlOiBhc3NldC5zeW1ib2wsIGJhc2U6IGJhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYWxsTWFya2V0cyA9IGFsbE1hcmtldHMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgLy8gSWYgYSBiYXNlIGFzc2V0IGlzIHNwZWNpZmllZCwgbGltaXQgdGhlIHF1b3RlIGFzc2V0IHRvIHRoZSBleGFjdCBzZWFyY2ggdGVybVxuICAgICAgICAgICAgaWYgKGxvb2t1cEJhc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYVsxXS5xdW90ZSA9PT0gbG9va3VwUXVvdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFjdGl2ZU1hcmtldHMgPSBteU1hcmtldFRhYlxuICAgICAgICAgICAgPyBkZWZhdWx0TWFya2V0c1xuICAgICAgICAgICAgOiBJbW11dGFibGUuTWFwKGFsbE1hcmtldHMpO1xuICAgICAgICBpZiAobXlNYXJrZXRUYWIgJiYgdXNlck1hcmtldHMuc2l6ZSkge1xuICAgICAgICAgICAgdXNlck1hcmtldHMuZm9yRWFjaCgobWFya2V0LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZU1hcmtldHMuaGFzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZU1hcmtldHMgPSBhY3RpdmVNYXJrZXRzLnNldChrZXksIG1hcmtldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZpbHRlckFuZFNlcGFyYXRlTWFya2V0cyhcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBtYXRjaEJhc2VzLFxuICAgICAgICAgICAgbWFya2V0cyxcbiAgICAgICAgICAgIGJhc2VHcm91cHMsXG4gICAgICAgICAgICBvdGhlck1hcmtldHNcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgb3RoZXJzID0gbWFya2V0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmJhc2UgPT09IGEucXVvdGUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLyogUmV0dXJuIHNlYXJjaCByZXN1bHRzIGluIHRoZSBGaW5kIE1hcmtldHMgVGFiICovXG4gICAgICAgICAgICAgICAgICAgIGlmICghbXlNYXJrZXRUYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb29rdXBRdW90ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5xdW90ZS5pbmRleE9mKGxvb2t1cFF1b3RlKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBSZXR1cm4gZmlsdGVyZWQgbWFya2V0cyBpZiBhIGZpbHRlciBpcyBpbnB1dCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgSUQgPSBhLnF1b3RlICsgXCJfXCIgKyBhLmJhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFteU1hcmtldEZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBJRC5pbmRleE9mKG15TWFya2V0RmlsdGVyKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBSZXR1cm4gb25seSBzdGFycmVkIG1hcmtldHMgaWYgdGhhdCBvcHRpb24gaXMgY2hlY2tlZCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ubHlTdGFycyAmJiAhc3RhcnJlZE1hcmtldHMuaGFzKElEKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEVsc2UgcmV0dXJuIGFsbCBtYXJrZXRzICovXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChtYXJrZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPSBtYXJrZXQucXVvdGUgKyBcIl9cIiArIG1hcmtldC5iYXNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hCYXNlcy5pbmRleE9mKG1hcmtldC5iYXNlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYmFzZUdyb3Vwc1tiYXNlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VHcm91cHNbYmFzZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJrZXRPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1hcmtldElELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBtYXJrZXQucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogbWFya2V0LmJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhc2VHcm91cHNbYmFzZV0uZmluZChtID0+IG0uaWQgPT09IG1hcmtldElEKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlR3JvdXBzW2Jhc2VdLnB1c2gobWFya2V0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgIXByZWZlcnJlZEJhc2VzLmluY2x1ZGVzKG1hcmtldC5iYXNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVHYXRld2F5QXNzZXRzLmluZGV4T2YobWFya2V0LmJhc2UpID09PSAtMVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQWRkaW5nIHRvIG90aGVyIG1hcmtldHM6XCIsIGJhc2UsIG1hcmtldC5iYXNlLCBwcmVmZXJyZWRCYXNlcy50b0pTKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtYXJrZXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbWFya2V0LnF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IG1hcmtldC5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgICAgIC50YWtlKG15TWFya2V0VGFiID8gMTAwIDogMjApXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKTtcbiAgICAgICAgICAgIHJldHVybiB7b3RoZXJNYXJrZXRzOiBvdGhlcnMuY29uY2F0KG90aGVyTWFya2V0cyksIGJhc2VHcm91cHN9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZU1hcmtldHMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCYXNlID0gbXlNYXJrZXRUYWJcbiAgICAgICAgICAgICAgICA/IHByZWZlcnJlZEJhc2VzLmdldChhY3RpdmVNYXJrZXRUYWIpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLmFjdGl2ZUZpbmRCYXNlO1xuXG4gICAgICAgICAgICAoe290aGVyTWFya2V0cywgYmFzZUdyb3Vwc30gPSBmaWx0ZXJBbmRTZXBhcmF0ZU1hcmtldHMoXG4gICAgICAgICAgICAgICAgY3VycmVudEJhc2UsXG4gICAgICAgICAgICAgICAgW2N1cnJlbnRCYXNlXSxcbiAgICAgICAgICAgICAgICBhY3RpdmVNYXJrZXRzLFxuICAgICAgICAgICAgICAgIGJhc2VHcm91cHMsXG4gICAgICAgICAgICAgICAgb3RoZXJNYXJrZXRzXG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgLyogQ2hlY2sgZm9yIHBvc3NpYmxlIGdhdGV3YXkgdmVyc2lvbnMgb2YgdGhlIGFzc2V0ICovXG4gICAgICAgICAgICBnYXRld2F5UHJlZml4ZXMuZm9yRWFjaChwcmVmaXggPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWUgPSBgJHtwcmVmaXh9LiR7Y3VycmVudEJhc2V9YDtcbiAgICAgICAgICAgICAgICBsZXQgZ2F0ZXdheUFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVHYXRld2F5QXNzZXROYW1lXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvKiBJZiB0aGUgZ2F0ZXdheSBvZmZlcnMgYW4gYXNzZXQgZm9yIHRoaXMgYmFzZSwgYWRkIGl0IHRvIHRoZSBsaXN0ICovXG4gICAgICAgICAgICAgICAgaWYgKCEhZ2F0ZXdheUFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBnYXRld2F5TWFya2V0cyA9IGFjdGl2ZU1hcmtldHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0ucXVvdGUgPT09IG0uYmFzZSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0lEID0gYCR7bS5xdW90ZX1fJHtwb3NzaWJsZUdhdGV3YXlBc3NldE5hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlTWFya2V0cy5oYXMobmV3SUQpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVHYXRld2F5QXNzZXROYW1lID09IFwiUlVERVguUlVCTEVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogcG9zc2libGVHYXRld2F5QXNzZXROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogbS5xdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIobSA9PiAhIW0pO1xuICAgICAgICAgICAgICAgICAgICAoe290aGVyTWFya2V0cywgYmFzZUdyb3Vwc30gPSBmaWx0ZXJBbmRTZXBhcmF0ZU1hcmtldHMoXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjdXJyZW50QmFzZSwgcG9zc2libGVHYXRld2F5QXNzZXROYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhdGV3YXlNYXJrZXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTWFya2V0c1xuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7YmFzZUdyb3Vwcywgb3RoZXJNYXJrZXRzfTtcbiAgICB9XG5cbiAgICBfZ2V0QmFzZXMoKSB7XG4gICAgICAgIGxldCB7cHJlZmVycmVkQmFzZXMsIHNlYXJjaEFzc2V0c30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2xvb2t1cFF1b3RlLCBsb29rdXBCYXNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGJhc2VzID0gc2VhcmNoQXNzZXRzXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb29rdXBCYXNlICYmIGxvb2t1cEJhc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbC5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoYXNzZXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsb29rdXBCYXNlICYmIGxvb2t1cEJhc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NldC5zeW1ib2wuaW5kZXhPZihsb29rdXBCYXNlKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0LnN5bWJvbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlZmVycmVkQmFzZXMuaW5jbHVkZXMoYXNzZXQuc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldC5zeW1ib2wubGVuZ3RoID49IGxvb2t1cFF1b3RlLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuc3ltYm9sLmxlbmd0aCA8IGxvb2t1cFF1b3RlLmxlbmd0aCArIDNcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXQuc3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgICAgICAudG9BcnJheSgpO1xuXG4gICAgICAgIGJhc2VzID0gYmFzZXMuY29uY2F0KFxuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvb2t1cEJhc2UgfHwgIWxvb2t1cEJhc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleE9mKGxvb2t1cEJhc2UpID09PSAwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKVxuICAgICAgICApO1xuXG4gICAgICAgIGJhc2VzID0gYmFzZXMuZmlsdGVyKGJhc2UgPT4ge1xuICAgICAgICAgICAgaWYgKGxvb2t1cEJhc2UgJiYgbG9va3VwQmFzZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuaW5kZXhPZihsb29rdXBCYXNlKSA9PT0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBiYXNlcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBzdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgIG1hcmtldFN0YXRzLFxuICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgIGFzc2V0c0xvYWRpbmcsXG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlcyxcbiAgICAgICAgICAgIGN1cnJlbnQsXG4gICAgICAgICAgICB2aWV3U2V0dGluZ3MsXG4gICAgICAgICAgICBsaXN0SGVpZ2h0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2FjdGl2ZU1hcmtldFRhYiwgYWN0aXZlVGFifSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgbXlNYXJrZXRUYWIgPSBhY3RpdmVUYWIgPT09IFwibXktbWFya2V0XCI7XG4gICAgICAgIGxldCBkZWZhdWx0QmFzZXMgPSBwcmVmZXJyZWRCYXNlcy5tYXAoYSA9PiBhKTtcblxuICAgICAgICBpZiAoIW15TWFya2V0VGFiKSB7XG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlcyA9IHByZWZlcnJlZEJhc2VzLmNsZWFyKCk7XG4gICAgICAgICAgICBwcmVmZXJyZWRCYXNlcyA9IHByZWZlcnJlZEJhc2VzLnB1c2godGhpcy5zdGF0ZS5hY3RpdmVGaW5kQmFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgc29tZSBkZWZhdWx0IGJhc2Ugb3B0aW9uc1xuICAgICAgICAvLyBsZXQgcHJlZmVycmVkQmFzZXMgPSBbY29yZVN5bWJvbCwgXCJCVENcIiwgXCJVU0RcIiwgXCJDTllcIl07XG5cbiAgICAgICAgLyogSW4gdGhlIGZpbmQtbWFya2V0IHRhYiwgb25seSB1c2UgbWFya2V0IHRhYiAwICovXG4gICAgICAgIGlmICghbXlNYXJrZXRUYWIpIGFjdGl2ZU1hcmtldFRhYiA9IDA7XG5cbiAgICAgICAgbGV0IHtiYXNlR3JvdXBzLCBvdGhlck1hcmtldHN9ID0gdGhpcy5fZ2V0TWFya2V0cygpO1xuICAgICAgICBjb25zdCBoYXNPdGhlcnMgPSBvdGhlck1hcmtldHMgJiYgb3RoZXJNYXJrZXRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGhjID0gXCJteW1hcmtldHMtaGVhZGVyIGNsaWNrYWJsZVwiO1xuICAgICAgICBsZXQgc3RhckNsYXNzID0gY25hbWVzKGhjLCB7aW5hY3RpdmU6ICFteU1hcmtldFRhYn0pO1xuICAgICAgICBsZXQgYWxsQ2xhc3MgPSBjbmFtZXMoaGMsIHtpbmFjdGl2ZTogbXlNYXJrZXRUYWJ9KTtcblxuICAgICAgICBsZXQgbGlzdFN0eWxlID0ge1xuICAgICAgICAgICAgbWluV2lkdGg6IHRoaXMuc3RhdGUubWluV2lkdGgsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFwiNnJlbVwiXG4gICAgICAgIH07XG4gICAgICAgIGlmIChsaXN0SGVpZ2h0KSB7XG4gICAgICAgICAgICBsaXN0U3R5bGUuaGVpZ2h0ID0gbGlzdEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0b3IgPSByZXF1aXJlKFwiY291bnRlcnBhcnRcIik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRhYkhlYWRlciA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuaGVhZGVyU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayBsZWZ0LW9yZGVyYm9vay1oZWFkZXIgYm90dG9tLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJteU1hcmtldHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhckNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMsIFwibXktbWFya2V0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW50cm89e3RyYW5zbGF0b3IudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndhbGt0aHJvdWdoLm15X21hcmtldHNfdGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWxsQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcywgXCJmaW5kLW1hcmtldFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWludHJvPXt0cmFuc2xhdG9yLnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxrdGhyb3VnaC5maW5kX21hcmtldHNfdGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1vcmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vSGVhZGVyIHx8IHRoaXMucHJvcHMudGFiSGVhZGVyID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5oZWFkZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2hhbmdlLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm1hcmtldF9uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRyb2xzID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbC0xMiBtZWRpdW0tNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6IFwiMXJlbSAwXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9scyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogXCIwLjVyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250cm9sc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHshbXlNYXJrZXRUYWIgPyA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBvbkNoYW5nZT17dGhpcy5fbG9va3VwQXNzZXRzLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiU1lNQk9MOlNZTUJPTFwiIC8+IDogbnVsbH0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAge215TWFya2V0VGFiID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIHNocmlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAwLjVyZW0gMC43NXJlbSAwLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3ttYXJnaW46IFwiM3B4IDAgMFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLm9ubHlMaXF1aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlMaXF1aWQ6ICF0aGlzLnByb3BzLm9ubHlMaXF1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC40cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLnNob3dfb25seV9saXF1aWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3ttYXJnaW46IFwiM3B4IDAgMFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB0b3A6IDN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLm9ubHlTdGFyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMudG9nZ2xlU3RhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC40cmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJleGNoYW5nZS5zaG93X29ubHlfc3Rhcl9mb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJmaS1zdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZ29sZC1zdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwic3Rhcl9pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlciBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1tYXJnaW4gbWFya2V0LWZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubXlNYXJrZXRGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjc1cmVtIDAuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFzc2V0U2VsZWN0PXt0aGlzLl9vbkZvdW5kQmFzZUFzc2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17ZGVmYXVsdEJhc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25JbnB1dEJhc2VBc3NldC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5maW5kQmFzZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldElucHV0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmluZEJhc2VJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvdW5kPXt0aGlzLl9vbkZvdW5kQmFzZUFzc2V0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhjaGFuZ2UucXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e3tmb250U2l6ZTogXCIwLjlyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC51c2VyX2lzc3VlZF9hc3NldHMubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC45cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXROYW1lLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmluZFNlYXJjaElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFzc2V0TmFtZUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvci1hcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRCcmVhazogXCJicmVhay1hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYXNzZXQuaW52YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXltYXJrZXRzLXRhYnNcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMH19PlxuICAgICAgICAgICAgICAgICAgICB7LyogUXVvdGUgZWRpdCB0YWIgKi99XG4gICAgICAgICAgICAgICAgICAgIHtteU1hcmtldFRhYiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJxdW90ZV9lZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1F1b3RlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXltYXJrZXRzLXRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgeyFteU1hcmtldFRhYiAmJiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcHJlZmVycmVkQmFzZXMubWFwKChiYXNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiYXNlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVBY3RpdmVNYXJrZXRUYWIuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcIm15bWFya2V0cy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBhY3RpdmVNYXJrZXRUYWIgPT09IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jhc2UucmVwbGFjZShcIlJVREVYLlwiLCBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIHtteU1hcmtldFRhYiAmJiBoYXNPdGhlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wib3RoZXJzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFjdGl2ZU1hcmtldFRhYi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXJyZWRCYXNlcy5zaXplICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJteW1hcmtldHMtdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0VGFiID09PSBwcmVmZXJyZWRCYXNlcy5zaXplICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4Y2hhbmdlLm90aGVyc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17bGlzdFN0eWxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXIgZ3JpZC1ibG9jayB2ZXJ0aWNhbCBteW1hcmtldHMtbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImZhdm9yaXRlc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YXNzZXRzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjNyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIHR5cGU9XCJ0aHJlZS1ib3VuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7cHJlZmVycmVkQmFzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT09IHByZWZlcnJlZEJhc2VzLmdldChhY3RpdmVNYXJrZXRUYWIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGJhc2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcmtldEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWFya2V0cz17dGhpcy5wcm9wcy51c2VyTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNYXJrZXRzPXt0aGlzLnByb3BzLmRlZmF1bHRNYXJrZXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dDaGFuZ2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtiYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzPXtzdGFycmVkTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldFN0YXRzPXttYXJrZXRTdGF0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdTZXR0aW5ncz17dmlld1NldHRpbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXJrZXRUYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5maW5kQ29sdW1ucyB8fCBjb2x1bW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRzPXtiYXNlR3JvdXBzW2Jhc2VdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17YmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M9e215TWFya2V0VGFiID8gMjAgOiAxMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRNYXJrZXRUYWI9eyFteU1hcmtldFRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25seUxpcXVpZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbmx5TGlxdWlkICYmIG15TWFya2V0VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlTWFya2V0VGFiID09PSBwcmVmZXJyZWRCYXNlcy5zaXplICsgMSAmJlxuICAgICAgICAgICAgICAgICAgICBteU1hcmtldFRhYiAmJlxuICAgICAgICAgICAgICAgICAgICBoYXNPdGhlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFya2V0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTWFya2V0cz17dGhpcy5wcm9wcy51c2VyTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17cHJlZmVycmVkQmFzZXMuc2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJyZWRNYXJrZXRzPXtzdGFycmVkTWFya2V0c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRTdGF0cz17bWFya2V0U3RhdHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld1NldHRpbmdzPXt2aWV3U2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRzPXtvdGhlck1hcmtldHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT1cIm90aGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17bXlNYXJrZXRUYWIgPyAyMCA6IDEwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRNYXJrZXRUYWI9eyFteU1hcmtldFRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UXVvdGVTZWxlY3Rpb25Nb2RhbFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzUXVvdGVNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIGhpZGVNb2RhbD17dGhpcy5oaWRlUXVvdGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsPXt0aGlzLnNob3dRdW90ZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBxdW90ZXM9e3RoaXMucHJvcHMucHJlZmVycmVkQmFzZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTXlNYXJrZXRzID0gZGVib3VuY2VSZW5kZXIoTXlNYXJrZXRzLCA1MCwge2xlYWRpbmc6IGZhbHNlfSk7XG5cbmNsYXNzIE15TWFya2V0c1dyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxNeU1hcmtldHMgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNeU1hcmtldHNXcmFwcGVyLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZSwgTWFya2V0c1N0b3JlLCBBc3NldFN0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhcnJlZE1hcmtldHM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zdGFycmVkTWFya2V0cyxcbiAgICAgICAgICAgIG9ubHlMaXF1aWQ6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3MuZ2V0KFxuICAgICAgICAgICAgICAgIFwib25seUxpcXVpZFwiLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBkZWZhdWx0TWFya2V0czogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLmRlZmF1bHRNYXJrZXRzLFxuICAgICAgICAgICAgdmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzLFxuICAgICAgICAgICAgcHJlZmVycmVkQmFzZXM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5wcmVmZXJyZWRCYXNlcyxcbiAgICAgICAgICAgIG1hcmtldFN0YXRzOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5hbGxNYXJrZXRTdGF0cyxcbiAgICAgICAgICAgIHVzZXJNYXJrZXRzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudXNlck1hcmtldHMsXG4gICAgICAgICAgICBzZWFyY2hBc3NldHM6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHMsXG4gICAgICAgICAgICBvbmx5U3RhcnM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm9ubHlTdGFycyxcbiAgICAgICAgICAgIGFzc2V0c0xvYWRpbmc6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHNMb2FkaW5nXG4gICAgICAgIH07XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5pbXBvcnQge01vZGFsLCBCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVvdGVTZWxlY3Rpb25Nb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJhY2tpbmdBc3NldDogXCJcIixcbiAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9vbk1vdmVVcChxdW90ZSkge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnByb3BzLnF1b3Rlcy5maW5kSW5kZXgocSA9PiBxID09PSBxdW90ZSk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgIG9sZEluZGV4OiBpZHgsXG4gICAgICAgICAgICBuZXdJbmRleDogaWR4IC0gMVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25Nb3ZlRG93bihxdW90ZSkge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnByb3BzLnF1b3Rlcy5maW5kSW5kZXgocSA9PiBxID09PSBxdW90ZSk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgIG9sZEluZGV4OiBpZHgsXG4gICAgICAgICAgICBuZXdJbmRleDogaWR4ICsgMVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25SZW1vdmUocXVvdGUpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5wcm9wcy5xdW90ZXMuZmluZEluZGV4KHEgPT4gcSA9PT0gcXVvdGUpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgICAgICByZW1vdmU6IGlkeFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25BZGQocXVvdGUpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5wcm9wcy5xdW90ZXMuZmluZEluZGV4KHEgPT4gcSA9PT0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpKTtcbiAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5tb2RpZnlQcmVmZXJlZEJhc2VzKHtcbiAgICAgICAgICAgICAgICBhZGQ6IHF1b3RlLmdldChcInN5bWJvbFwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25JbnB1dEJhY2tpbmdBc3NldChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJhY2tpbmdBc3NldDogYXNzZXQudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkZvdW5kQmFja2luZ0Fzc2V0KGFzc2V0KSB7XG4gICAgICAgIGlmIChhc3NldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnF1b3Rlcy5pbmNsdWRlcyhhc3NldC5nZXQoXCJzeW1ib2xcIikpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNWYWxpZDogdHJ1ZX0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiQXNzZXQgYWxyZWFkeSBiZWluZyB1c2VkXCIsXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtlcnJvcn0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBxdW90ZUNvdW50ID0gdGhpcy5wcm9wcy5xdW90ZXMuc2l6ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdW90ZV9zZWxlY3Rpb25cIil9XG4gICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICBpZD1cInF1b3RlX3NlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgZm9vdGVyPXtbXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm1vZGFsLmNsb3NlXCIpfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5vLWJvcmRlci1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5xdW90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhjaGFuZ2UubW92ZV9kb3duXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5tb3ZlX3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS5yZW1vdmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnF1b3Rlcy5tYXAoKHEsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpZHggKyAxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntxfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZHggIT09IHF1b3RlQ291bnQgLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Nb3ZlRG93bi5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR4ICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25Nb3ZlVXAuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZXZyb24tZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpY2thYmxlIHJvdGF0ZTE4MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdW90ZUNvdW50ID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uUmVtb3ZlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjcm9zcy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4Y2hhbmdlLmN1c3RvbV9xdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uSW5wdXRCYWNraW5nQXNzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17dGhpcy5zdGF0ZS5iYWNraW5nQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJbnB1dD17dGhpcy5zdGF0ZS5iYWNraW5nQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdSaWdodDogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm91bmQ9e3RoaXMuX29uRm91bmRCYWNraW5nQXNzZXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbj17dGhpcy5fb25BZGQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25fbGFiZWw9XCJleGNoYW5nZS5hZGRfcXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b249eyEhZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYXJlYVwiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuL0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4vQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqICBHaXZlbiBhbiBhY2NvdW50IGlkLCBkaXNwbGF5cyB0aGUgbmFtZSBvZiB0aGF0IGFjY291bnRcclxuICpcclxuICogIEV4cGVjdHMgb25lIHByb3BlcnR5LCAnYWNjb3VudCcgd2hpY2ggc2hvdWxkIGJlIGEgYWNjb3VudCBpZFxyXG4gKi9cclxuXHJcbmNsYXNzIEFjY291bnROYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYWNjb3VudDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hY2NvdW50KSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gPHNwYW4+e3RoaXMucHJvcHMuYWNjb3VudC5nZXQoXCJuYW1lXCIpfTwvc3Bhbj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbmRUb0NoYWluU3RhdGUoQWNjb3VudE5hbWUpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbkdyb3VwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGNvbXBvbmVudDogXCJzcGFuXCIsXHJcbiAgICAgICAgZW50ZXJUaW1lb3V0OiAyMDAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhbmltYXRlRW50ZXI6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVFbnRlcjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5wcm9wcy5jb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3RoaXMucHJvcHMudHJhbnNpdGlvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17dGhpcy5wcm9wcy5lbnRlclRpbWVvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyPXt0aGlzLnN0YXRlLmFuaW1hdGVFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uR3JvdXA+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==