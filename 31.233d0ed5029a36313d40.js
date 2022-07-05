"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[31],{

/***/ 2826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentTransactions": () => (/* binding */ RecentTransactions),
/* harmony export */   "TransactionWrapper": () => (/* binding */ TransactionWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1939);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(607);
/* harmony import */ var components_Modal_JSONModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2488);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(437);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1825);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2798);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1917);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2073);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2094);
/* harmony import */ var _Blockchain_BlockTime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2492);
/* harmony import */ var _Blockchain_OperationAnt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2827);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(656);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1816);
/* harmony import */ var _Utility_PendingBlock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2828);
/* harmony import */ var _services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2829);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(663);







 //import ps from "perfect-scrollbar";






const {
  operations
} = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainTypes;


const ops = Object.keys(operations);







const operation = new _Blockchain_OperationAnt__WEBPACK_IMPORTED_MODULE_15__["default"]();
const Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Select.Option;



function compareOps(b, a) {
  if (a.block_num === b.block_num) {
    if (a.trx_in_block !== b.trx_in_block) {
      return a.trx_in_block - b.trx_in_block;
    }

    if (a.op_in_trx !== b.op_in_trx) {
      return a.op_in_trx - b.op_in_trx;
    }

    return a.virtual_op - b.virtual_op;
  } else {
    return a.block_num - b.block_num;
  }
}

class RecentTransactions extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    accountsList: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccountsList.isRequired,
    compactView: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().bool),
    limit: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().number),
    maxHeight: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().number),
    fullHeight: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().bool),
    showFilters: (prop_types__WEBPACK_IMPORTED_MODULE_21___default().bool)
  };
  static defaultProps = {
    limit: 25,
    maxHeight: 500,
    fullHeight: false,
    showFilters: false
  };

  constructor(props) {
    super(); // fixme access to ES could be wrapped in a store or something else

    this.state = {
      limit: props.limit,
      fetchingAccountHistory: false,
      headerHeight: 85,
      filter: "all",
      accountHistoryError: false,
      rows: [],
      showModal: false,
      esNodeCustom: false,
      esNode: api_apiConfig__WEBPACK_IMPORTED_MODULE_20__.settingsAPIs.ES_WRAPPER_LIST.length > 0 ? api_apiConfig__WEBPACK_IMPORTED_MODULE_20__.settingsAPIs.ES_WRAPPER_LIST[0].url : null,
      visibleId: ""
    };
    this.getDataSource = this.getDataSource.bind(this);
    this.useCustom = counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("account.export_modal.use_custom"); // https://eswrapper.bitshares.eu/ is not alive
    // https://wrapper.elasticsearch.bitshares.ws/ is not alive
    // http://bts-es.clockwork.gr:5000/ is alive
    // https://explorer.bitshares-kibana.info/ is not alive
    // http://185.208.208.184:5000/es/ is alive

    this.showExportModal = this.showExportModal.bind(this);
    this.hideExportModal = this.hideExportModal.bind(this);
    this.esNodeChange = this.esNodeChange.bind(this);
    this._generateCSV = this._generateCSV.bind(this);
  }

  componentDidMount() {
    if (!this.props.fullHeight) {
      let t = this.refs.transactions; //ps.initialize(t);

      this._setHeaderHeight();
    }
  }

  esNodeChange(e) {
    let newValue = null;

    if (e.target) {
      newValue = e.target.value;
    } else {
      newValue = e;
    }

    if (newValue == this.useCustom) {
      this.setState({
        esNode: "",
        esNodeCustom: true
      });
    } else {
      this.setState({
        esNode: newValue
      });
    }
  }

  showExportModal() {
    this.setState({
      showModal: true
    });
  }

  hideExportModal() {
    this.setState({
      showModal: false
    });
  }

  _setHeaderHeight() {
    let height = this.refs.header.offsetHeight;

    if (height !== this.state.headerHeight) {
      this.setState({
        headerHeight: height
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(this.props.accountsList, nextProps.accountsList)) return true;
    if (this.props.maxHeight !== nextProps.maxHeight) return true;
    if (this.state.headerHeight !== nextState.headerHeight) return true;
    if (this.state.filter !== nextState.filter) return true;

    if (this.props.customFilter) {
      if (!common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(this.props.customFilter.fields, nextProps.customFilter.fields) || !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(this.props.customFilter.values, nextProps.customFilter.values)) {
        return true;
      }
    }

    if (this.props.maxHeight !== nextProps.maxHeight) return true;
    if (nextState.limit !== this.state.limit || nextState.fetchingAccountHistory !== this.state.fetchingAccountHistory) return true;

    for (let key = 0; key < nextProps.accountsList.length; ++key) {
      let npa = nextProps.accountsList[key];
      let nsa = this.props.accountsList[key];
      if (npa && nsa && npa.get("history") !== nsa.get("history")) return true;
    }

    if (this.state.showModal !== nextState.showModal) return true;
    if (this.state.esNode !== nextState.esNode) return true;
    if (this.state.esNodeCustom !== nextState.esNodeCustom) return true;
    if (this.state.visibleId !== nextState.visibleId) return true;
    return false;
  }

  _onIncreaseLimit() {
    this.setState({
      limit: this.state.limit + 30
    });
  }

  _getHistory(accountsList, filterOp, customFilter) {
    let history = [];
    let seen_ops = new Set();

    for (let account of accountsList) {
      if (account) {
        let h = account.get("history");
        if (h) history = history.concat(h.toJS().filter(op => !seen_ops.has(op.id) && seen_ops.add(op.id)));
      }
    }

    if (filterOp) {
      history = history.filter(a => {
        return a.op[0] === operations[filterOp];
      });
    }

    if (customFilter) {
      history = history.filter(a => {
        let finalValue = customFilter.fields.reduce((final, filter) => {
          switch (filter) {
            case "asset_id":
              return final && a.op[1]["amount"][filter] === customFilter.values[filter];
              break;

            default:
              return final && a.op[1][filter] === customFilter.values[filter];
              break;
          }
        }, true);
        return finalValue;
      });
    }

    return history;
  }

  async _generateCSV(exportType) {
    if (false) {}

    try {
      const AHE = new _services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_19__["default"]();
      this.setState({
        fetchingAccountHistory: true,
        showModal: false
      });
      await AHE.generateCSV(this.props.accountsList, this.state.esNode, exportType);
      this.setState({
        fetchingAccountHistory: false,
        accountHistoryError: null
      });
    } catch (err) {
      console.error(err);
      this.setState({
        fetchingAccountHistory: false,
        accountHistoryError: err,
        esNodeCustom: false,
        esNode: api_apiConfig__WEBPACK_IMPORTED_MODULE_20__.settingsAPIs.ES_WRAPPER_LIST.length > 0 ? api_apiConfig__WEBPACK_IMPORTED_MODULE_20__.settingsAPIs.ES_WRAPPER_LIST[0].url : null
      });
    }
  }

  _onChangeFilter(value) {
    this.setState({
      filter: value
    });
  }

  openJSONModal(id) {
    this.setState({
      visibleId: id
    });
  }

  closeJSONModal = () => {
    this.setState({
      visibleId: ""
    });
  };

  getDataSource(o, current_account_id) {
    let fee = o.op[1].fee;
    let trxTypes = counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("transaction.trxTypes");
    const info = operation.getColumn(o.op, current_account_id, o.block_num, o.result, this.props.marketDirections);
    fee.amount = parseInt(fee.amount, 10);
    const dynGlobalObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getObject("2.1.0");
    const lastIrreversibleBlockNum = dynGlobalObject.get("last_irreversible_block_num");
    return {
      key: o.id,
      id: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "cursor-pointer",
        onClick: () => this.openJSONModal(o.id)
      }, o.id, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Icon, {
        type: "file-search"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Modal_JSONModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        visible: this.state.visibleId === o.id,
        operation: o.op,
        title: trxTypes[ops[o.op[0]] || ""],
        hideModal: this.closeJSONModal
      })),
      type: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
        className: "inline-block",
        "data-place": "bottom",
        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("tooltip.show_block", {
          block: common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(o.block_num, 0)
        }),
        to: `/block/${o.block_num}/${o.trx_in_block}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("label", info.color || "info")
      }, trxTypes[ops[o.op[0]]])),
      info: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, info.column)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          fontSize: 14,
          paddingTop: 5
        }
      }, o.block_num > lastIrreversibleBlockNum ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_PendingBlock__WEBPACK_IMPORTED_MODULE_18__["default"], {
        blockNumber: o.block_num
      }) : null)),
      fee: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_13__["default"], {
        amount: fee.amount,
        asset: fee.asset_id
      }),
      time: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Blockchain_BlockTime__WEBPACK_IMPORTED_MODULE_14__["default"], {
        block_number: o.block_num,
        fullDate: true
      })
    };
  }

  render() {
    let {
      accountsList,
      compactView,
      filter,
      customFilter,
      style,
      maxHeight
    } = this.props;
    let {
      limit,
      headerHeight
    } = this.state;
    let current_account_id = accountsList.length === 1 && accountsList[0] ? accountsList[0].get("id") : null;

    let history = this._getHistory(accountsList, this.props.showFilters && this.state.filter !== "all" ? this.state.filter : filter, customFilter).sort(compareOps);

    let historyCount = history.length;
    style = style ? style : {
      width: "100%",
      height: "100%"
    };
    let options = null;

    if (true) {
      options = ["all", "transfer", "limit_order_create", "limit_order_cancel", "fill_order", "account_create", "account_update", "asset_create", "witness_withdraw_pay", "vesting_balance_withdraw"].map(type => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
          value: type,
          key: type
        }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("transaction.trxTypes." + type));
      });
    }

    let hideFee = false;
    let display_history = history.length ? history.slice(0, limit).map(o => {
      return this.getDataSource(o, current_account_id);
    }) : [];
    let action = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "total-value",
      key: "total_value"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        textAlign: "center"
      }
    }, "\xA0"));
    const footer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: () => this._generateCSV(_services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_19__.FULL),
      type: "primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "account.export_modal.full_report"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
      onClick: () => this._generateCSV(_services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_19__.COINBASE),
      type: "primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "account.export_modal.coinbase_report"
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "recent-transactions no-overflow",
      style: style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Modal, {
      wrapClassName: "modal--transaction-confirm",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "account.export_modal.title"
      }),
      visible: this.state.showModal,
      id: "transaction_confirm_modal",
      ref: "modal",
      footer: footer,
      overlay: true,
      onCancel: this.hideExportModal,
      noCloseBtn: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "account.export_modal.description"
    })), this.state.esNodeCustom ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Input, {
      type: "text",
      value: this.state.esNode,
      onChange: this.esNodeChange
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Select, {
      showSearch: true,
      value: this.state.esNode,
      onChange: this.esNodeChange,
      style: {
        width: "100%"
      }
    }, api_apiConfig__WEBPACK_IMPORTED_MODULE_20__.settingsAPIs.ES_WRAPPER_LIST.concat([{
      url: this.useCustom
    }]).map(wrapper => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Select.Option, {
      key: wrapper.url
    }, wrapper.url)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "generic-bordered-box"
    }, this.props.dashboard ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      ref: "header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "block-content-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.props.title ? this.props.title : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "account.recent"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-selector"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "filter inline-block"
    }, this.props.showFilters ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
      placement: "bottom",
      title: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("tooltip.filter_ops")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Select, {
      style: {
        width: "210px"
      },
      value: this.state.filter,
      onChange: this._onChangeFilter.bind(this)
    }, options)) : null, historyCount > 0 && this.props.dashboard && this.state.esNode !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
      placement: "bottom",
      title: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("transaction.csv_tip")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "inline-block iconLinkAndLabel",
      onClick: this.showExportModal,
      style: {
        marginLeft: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: "excel",
      size: "1x"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "account.download_history"
    }))) : null), this.state.accountHistoryError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "has-error",
      style: {
        paddingLeft: "0.75rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "account.history_error"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_11__["default"], {
      withTransition: true,
      className: "table table-striped " + (compactView ? "compact" : "") + (this.props.dashboard ? " dashboard-table table-hover" : ""),
      header: [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "account.transactions.id"
        }),
        dataIndex: "id",
        align: "left",
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            style: {
              whiteSpace: "nowrap"
            }
          }, item);
        }
      }, !compactView ? {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "account.transactions.type"
        }),
        dataIndex: "type",
        align: "left"
      } : {}, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "account.transactions.info"
        }),
        dataIndex: "info",
        align: "left",
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            style: {
              whiteSpace: "nowrap"
            }
          }, item);
        }
      }, !hideFee ? {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          content: "account.transactions.fee"
        }),
        dataIndex: "fee",
        align: "left",
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            style: {
              whiteSpace: "nowrap"
            }
          }, item);
        }
      } : {}, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
          style: {
            whiteSpace: "nowrap"
          },
          content: "account.transactions.time"
        }),
        dataIndex: "time",
        render: item => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            style: {
              whiteSpace: "nowrap"
            }
          }, item);
        }
      }],
      rows: display_history,
      label: "utility.total_x_operations",
      extraRow: action
    }), this.state.fetchingAccountHistory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__["default"], null)));
  }

}

RecentTransactions = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(RecentTransactions);
RecentTransactions = (0,alt_react__WEBPACK_IMPORTED_MODULE_17__.connect)(RecentTransactions, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"]];
  },

  getProps() {
    return {
      marketDirections: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().marketDirections
    };
  }

});

class TransactionWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    to: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired,
    fromAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired
  };
  static defaultProps = {
    asset: "1.3.0"
  };

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "wrapper"
    }, this.props.children(this.props));
  }

}

TransactionWrapper = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(TransactionWrapper);


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

/***/ 2828:
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
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1938);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1939);







class PendingBlock extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    blockNumber: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number.isRequired),
    dynGlobalObject: _ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject.isRequired
  };
  static defaultProps = {
    dynGlobalObject: "2.1.0"
  };

  shouldComponentUpdate(nextProps) {
    return !immutable__WEBPACK_IMPORTED_MODULE_2___default().is(this.props.dynGlobalObject, nextProps.dynGlobalObject);
  }

  render() {
    const {
      blockNumber,
      dynGlobalObject
    } = this.props;
    const lastIrreversibleBlockNum = dynGlobalObject.get("last_irreversible_block_num");
    return blockNumber > lastIrreversibleBlockNum ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " - ", "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "operation.pending",
      blocks: blockNumber - lastIrreversibleBlockNum
    }), ")") : null;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(PendingBlock));

/***/ }),

/***/ 2827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2094);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2073);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2386);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2387);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1939);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2412);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(437);
/* harmony import */ var chain_account_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2408);
/* harmony import */ var chain_account_constants__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chain_account_constants__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MemoText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2413);
/* harmony import */ var _ProposedOperation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2409);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2313);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_14__);

















const ShortObjectId = ({
  objectId
}) => {
  if (typeof objectId === "string") {
    const parts = objectId.split(".");
    const {
      length
    } = parts;
    if (length > 0) return "#" + parts[length - 1];
  }

  return objectId;
};

class Operation {
  linkToAccount(name_or_id) {
    if (!name_or_id) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "-");
    return common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].is_object_id(name_or_id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_4__["default"], {
      account: name_or_id
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
      to: `/account/${name_or_id}`
    }, name_or_id);
  }

  linkToAsset(symbol_or_id) {
    if (!symbol_or_id) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "-");
    return common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].is_object_id(symbol_or_id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_5__["default"], {
      asset: symbol_or_id
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
      to: `/asset/${symbol_or_id}`
    }, symbol_or_id);
  }

  getColumn(op, current, block, result, marketDirections) {
    const {
      operations
    } = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainTypes;
    let ops = Object.keys(operations);
    let listings = (chain_account_constants__WEBPACK_IMPORTED_MODULE_9___default().account_listing);
    let column = null,
        color = "info";
    let memoComponent = null;
    let o = null;

    switch (ops[op[0]] // For a list of trx types, see chain_types.coffee
    ) {
      case "transfer":
        if (op[1].memo) {
          memoComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MemoText__WEBPACK_IMPORTED_MODULE_10__["default"], {
            memo: op[1].memo
          });
        }

        color = "success";
        op[1].amount.amount = parseFloat(op[1].amount.amount);
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "right-td"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.transfer",
          keys: [{
            type: "account",
            value: op[1].from,
            arg: "from"
          }, {
            type: "amount",
            value: op[1].amount,
            arg: "amount",
            decimalOffset: op[1].amount.asset_id === "1.3.0" ? 5 : null
          }, {
            type: "account",
            value: op[1].to,
            arg: "to"
          }]
        }), memoComponent);
        break;

      case "limit_order_create":
        color = "warning";
        o = op[1];
        /*
        marketName = OPEN.ETH_USD
        if (!inverted) (default)
            price = USD / OPEN.ETH
            buy / sell OPEN.ETH
            isBid = amount_to_sell.asset_symbol = USD
            amount = to_receive
        if (inverted)
            price =  OPEN.ETH / USD
            buy / sell USD
            isBid = amount_to_sell.asset_symbol = OPEN.ETH
            amount =
        */

        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"].Wrapper, {
          base: o.min_to_receive.asset_id,
          quote: o.amount_to_sell.asset_id
        }, ({
          base,
          quote
        }) => {
          const {
            marketName,
            first,
            second
          } = common_market_utils__WEBPACK_IMPORTED_MODULE_12__["default"].getMarketName(base, quote);
          const inverted = marketDirections.get(marketName); // const paySymbol = base.get("symbol");
          // const receiveSymbol = quote.get("symbol");

          const isBid = o.amount_to_sell.asset_id === (inverted ? first.get("id") : second.get("id"));
          let priceBase = isBid ? o.amount_to_sell : o.min_to_receive;
          let priceQuote = isBid ? o.min_to_receive : o.amount_to_sell;
          const amount = isBid ? op[1].min_to_receive : op[1].amount_to_sell;
          let orderId = result ? typeof result[1] == "string" ? "#" + result[1].substring(4) : "" : "";
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
            string: isBid ? "operation.limit_order_buy" : "operation.limit_order_sell",
            keys: [{
              type: "account",
              value: op[1].seller,
              arg: "account"
            }, {
              type: "amount",
              value: amount,
              arg: "amount"
            }, {
              type: "price",
              value: {
                base: priceBase,
                quote: priceQuote
              },
              arg: "price"
            }],
            params: {
              order: orderId
            }
          });
        }));
        break;

      case "limit_order_cancel":
        color = "cancel";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.limit_order_cancel",
          keys: [{
            type: "account",
            value: op[1].fee_paying_account,
            arg: "account"
          }],
          params: {
            order: op[1].order.substring(4)
          }
        }));
        break;

      case "call_order_update":
        color = "warning";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.call_order_update",
          keys: [{
            type: "account",
            value: op[1].funding_account,
            arg: "account"
          }, {
            type: "asset",
            value: op[1].delta_debt.asset_id,
            arg: "debtSymbol"
          }, {
            type: "amount",
            value: op[1].delta_debt,
            arg: "debt"
          }, {
            type: "amount",
            value: op[1].delta_collateral,
            arg: "collateral"
          }]
        }));
        break;

      case "key_create":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.create_key"
        }));
        break;

      case "account_create":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.reg_account",
          keys: [{
            type: "account",
            value: op[1].registrar,
            arg: "registrar"
          }, {
            type: "account",
            value: op[1].name,
            arg: "new_account"
          }]
        });
        break;

      case "account_update":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.update_account",
          keys: [{
            type: "account",
            value: op[1].account,
            arg: "account"
          }]
        }));
        break;

      case "account_whitelist":
        let label = op[1].new_listing === listings.no_listing ? "unlisted_by" : op[1].new_listing === listings.white_listed ? "whitelisted_by" : "blacklisted_by";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation." + label,
          keys: [{
            type: "account",
            value: op[1].authorizing_account,
            arg: "lister"
          }, {
            type: "account",
            value: op[1].account_to_list,
            arg: "listee"
          }]
        }));
        break;

      case "account_upgrade":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: op[1].upgrade_to_lifetime_member ? "operation.lifetime_upgrade_account" : "operation.annual_upgrade_account",
          keys: [{
            type: "account",
            value: op[1].account_to_upgrade,
            arg: "account"
          }]
        }));
        break;

      case "account_transfer":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.account_transfer",
          keys: [{
            type: "account",
            value: op[1].account_id,
            arg: "account"
          }, {
            type: "account",
            value: op[1].new_owner,
            arg: "to"
          }]
        }));
        break;

      case "asset_create":
        color = "warning";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.asset_create",
          keys: [{
            type: "account",
            value: op[1].issuer,
            arg: "account"
          }, {
            type: "asset",
            value: op[1].symbol,
            arg: "asset"
          }]
        }));
        break;

      case "asset_update":
      case "asset_update_bitasset":
        color = "warning";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.asset_update",
          keys: [{
            type: "account",
            value: op[1].issuer,
            arg: "account"
          }, {
            type: "asset",
            value: op[1].asset_to_update,
            arg: "asset"
          }]
        }));
        break;

      case "asset_update_feed_producers":
        color = "warning";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.asset_update_feed_producers",
          keys: [{
            type: "account",
            value: op[1].issuer,
            arg: "account"
          }, {
            type: "asset",
            value: op[1].asset_to_update,
            arg: "asset"
          }]
        }));
        break;

      case "asset_issue":
        color = "warning";

        if (op[1].memo) {
          memoComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MemoText__WEBPACK_IMPORTED_MODULE_10__["default"], {
            memo: op[1].memo
          });
        }

        op[1].asset_to_issue.amount = parseInt(op[1].asset_to_issue.amount, 10);
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.asset_issue",
          keys: [{
            type: "account",
            value: op[1].issuer,
            arg: "account"
          }, {
            type: "amount",
            value: op[1].asset_to_issue,
            arg: "amount"
          }, {
            type: "account",
            value: op[1].issue_to_account,
            arg: "to"
          }]
        }), memoComponent);
        break;

      case "asset_fund_fee_pool":
        color = "warning";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.asset_fund_fee_pool",
          keys: [{
            type: "account",
            value: op[1].from_account,
            arg: "account"
          }, {
            type: "asset",
            value: op[1].asset_id,
            arg: "asset"
          }, {
            type: "amount",
            value: {
              amount: op[1].amount,
              asset_id: "1.3.0"
            },
            arg: "amount"
          }]
        }));
        break;

      case "asset_settle":
        color = "warning";
        const baseAmount = op[1].amount;
        const instantSettleCode = 2;

        if (result && result[0] == instantSettleCode) {
          const quoteAmount = result[1];
          column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
            string: "operation.asset_settle_instant",
            keys: [{
              type: "account",
              value: op[1].account,
              arg: "account"
            }, {
              type: "amount",
              value: baseAmount,
              arg: "amount"
            }, {
              type: "price",
              value: {
                base: baseAmount,
                quote: quoteAmount
              },
              arg: "price"
            }]
          }));
        } else {
          column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
            string: "operation.asset_settle",
            keys: [{
              type: "account",
              value: op[1].account,
              arg: "account"
            }, {
              type: "amount",
              value: op[1].amount,
              arg: "amount"
            }]
          }));
        }

        break;

      case "asset_global_settle":
        color = "warning";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.asset_global_settle",
          keys: [{
            type: "account",
            value: op[1].issuer,
            arg: "account"
          }, {
            type: "asset",
            value: op[1].asset_to_settle,
            arg: "asset"
          }, {
            type: "price",
            value: op[1].settle_price,
            arg: "price"
          }]
        }));
        break;

      case "asset_publish_feed":
        color = "warning";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.publish_feed",
          keys: [{
            type: "account",
            value: op[1].publisher,
            arg: "account"
          }, {
            type: "price",
            value: op[1].feed.settlement_price,
            arg: "price"
          }]
        }));
        break;

      case "witness_create":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.witness_create",
          keys: [{
            type: "account",
            value: op[1].witness_account,
            arg: "account"
          }]
        }));
        break;

      case "witness_update":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.witness_update",
          keys: [{
            type: "account",
            value: op[1].witness_account,
            arg: "account"
          }]
        }));
        break;

      case "witness_withdraw_pay":
        console.log("witness_withdraw_pay:", op[1].witness_account);

        if (current === op[1].witness_account) {
          column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
            component: "span",
            content: "transaction.witness_pay"
          }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
            amount: op[1].amount,
            asset: "1.3.0"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
            component: "span",
            content: "transaction.to"
          }), "\xA0", this.linkToAccount(op[1].witness_account));
        } else {
          column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
            component: "span",
            content: "transaction.received"
          }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
            amount: op[1].amount,
            asset: "1.3.0"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
            component: "span",
            content: "transaction.from"
          }), "\xA0", this.linkToAccount(op[1].witness_account));
        }

        break;

      case "proposal_create":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "inline-block"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.proposal_create",
          keys: [{
            type: "account",
            value: op[1].fee_paying_account,
            arg: "account"
          }, {
            value: result ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ShortObjectId, {
              objectId: result[1]
            }) : "",
            arg: "proposal"
          }]
        }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, op[1].proposed_ops.map((o, index) => {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProposedOperation__WEBPACK_IMPORTED_MODULE_11__["default"], {
            op: o.op,
            key: index,
            index: index,
            inverted: false,
            hideFee: true,
            hideOpLabel: true,
            hideDate: true,
            proposal: true
          });
        })));
        break;

      case "proposal_update":
        const fields = ["active_approvals_to_add", "active_approvals_to_remove", "owner_approvals_to_add", "owner_approvals_to_remove", "key_approvals_to_add", "key_approvals_to_remove"];
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.proposal_update",
          keys: [{
            type: "account",
            value: op[1].fee_paying_account,
            arg: "account"
          }, {
            value: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ShortObjectId, {
              objectId: op[1].proposal
            }),
            arg: "proposal"
          }]
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "proposal-update"
        }, fields.map(field => {
          if (op[1][field].length) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
              key: field
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
              content: `proposal.updated.${field}`
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, op[1][field].map(value => {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
                key: value
              }, field.startsWith("key") ? value : this.linkToAccount(value));
            })));
          } else return null;
        })));
        break;

      case "proposal_delete":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.proposal_delete",
          keys: [{
            type: "account",
            value: op[1].fee_paying_account,
            arg: "account"
          }, {
            value: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ShortObjectId, {
              objectId: op[1].proposal
            }),
            arg: "proposal"
          }]
        }));
        break;

      case "withdraw_permission_create":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.withdraw_permission_create"
        }), "\xA0", this.linkToAccount(op[1].withdraw_from_account), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.to"
        }), "\xA0", this.linkToAccount(op[1].authorized_account));
        break;

      case "withdraw_permission_update":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.withdraw_permission_update"
        }), "\xA0", this.linkToAccount(op[1].withdraw_from_account), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.to"
        }), "\xA0", this.linkToAccount(op[1].authorized_account));
        break;

      case "withdraw_permission_claim":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.withdraw_permission_claim"
        }), "\xA0", this.linkToAccount(op[1].withdraw_from_account), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.to"
        }), "\xA0", this.linkToAccount(op[1].withdraw_to_account));
        break;

      case "withdraw_permission_delete":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.withdraw_permission_delete"
        }), "\xA0", this.linkToAccount(op[1].withdraw_from_account), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.to"
        }), "\xA0", this.linkToAccount(op[1].authorized_account));
        break;

      case "fill_order":
        color = "success";
        o = op[1];
        /*
        marketName = OPEN.ETH_USD
        if (!inverted) (default)
            price = USD / OPEN.ETH
            buy / sell OPEN.ETH
            isBid = amount_to_sell.asset_symbol = USD
            amount = to_receive
        if (inverted)
            price =  OPEN.ETH / USD
            buy / sell USD
            isBid = amount_to_sell.asset_symbol = OPEN.ETH
            amount =
             const {marketName, first, second} = marketUtils.getMarketName(base, quote);
            const inverted = this.props.marketDirections.get(marketName);
            // const paySymbol = base.get("symbol");
            // const receiveSymbol = quote.get("symbol");
             const isBid = o.amount_to_sell.asset_id === (inverted ? first.get("id") : second.get("id"));
             let priceBase = (isBid) ? o.amount_to_sell : o.min_to_receive;
            let priceQuote = (isBid) ? o.min_to_receive : o.amount_to_sell;
            const amount = isBid ? op[1].min_to_receive : op[1].amount_to_sell;
        */

        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"].Wrapper, {
          base: o.receives.asset_id,
          quote: o.pays.asset_id
        }, ({
          base,
          quote
        }) => {
          const {
            marketName,
            first,
            second
          } = common_market_utils__WEBPACK_IMPORTED_MODULE_12__["default"].getMarketName(base, quote);
          const inverted = marketDirections.get(marketName);
          const isBid = o.pays.asset_id === (inverted ? first.get("id") : second.get("id")); // const paySymbol = base.get("symbol");
          // const receiveSymbol = quote.get("symbol");

          let priceBase = isBid ? o.receives : o.pays;
          let priceQuote = isBid ? o.pays : o.receives;
          let amount = isBid ? o.receives : o.pays;
          let receivedAmount = o.fee.asset_id === amount.asset_id ? amount.amount - o.fee.amount : amount.amount;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
            string: `operation.fill_order_${isBid ? "buy" : "sell"}`,
            keys: [{
              type: "account",
              value: op[1].account_id,
              arg: "account"
            }, {
              type: "amount",
              value: {
                amount: receivedAmount,
                asset_id: amount.asset_id
              },
              arg: "amount"
            }, {
              type: "price",
              value: {
                base: priceBase,
                quote: priceQuote
              },
              arg: "price"
            }],
            params: {
              order: o.order_id.substring(4)
            }
          });
        }));
        break;

      case "global_parameters_update":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.global_parameters_update"
        }));
        break;

      case "vesting_balance_create":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\xA0", this.linkToAccount(op[1].creator), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.vesting_balance_create"
        }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
          amount: op[1].amount.amount,
          asset: op[1].amount.asset_id
        }), "\xA0", this.linkToAccount(op[1].owner));
        break;

      case "vesting_balance_withdraw":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.vesting_balance_withdraw",
          keys: [{
            type: "account",
            value: op[1].owner,
            arg: "account"
          }, {
            type: "amount",
            value: op[1].amount,
            arg: "amount"
          }]
        }));
        break;

      case "worker_create":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.worker_create",
          keys: [{
            type: "account",
            value: op[1].owner,
            arg: "account"
          }, {
            type: "amount",
            value: {
              amount: op[1].daily_pay,
              asset_id: "1.3.0"
            },
            arg: "pay"
          }],
          params: {
            name: op[1].name
          }
        }));
        break;

      case "balance_claim":
        color = "success";
        op[1].total_claimed.amount = parseInt(op[1].total_claimed.amount, 10);
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.balance_claim",
          keys: [{
            type: "account",
            value: op[1].deposit_to_account,
            arg: "account"
          }, {
            type: "amount",
            value: op[1].total_claimed,
            arg: "amount"
          }]
        }));
        break;

      case "committee_member_create":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.committee_member_create"
        }), "\xA0", this.linkToAccount(op[1].committee_member_account));
        break;

      case "transfer_to_blind":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.linkToAccount(op[1].from), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.sent"
        }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
          amount: op[1].amount.amount,
          asset: op[1].amount.asset_id
        }));
        break;

      case "transfer_from_blind":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.linkToAccount(op[1].to), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.received"
        }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
          amount: op[1].amount.amount,
          asset: op[1].amount.asset_id
        }));
        break;

      case "asset_claim_fees":
        color = "success";
        op[1].amount_to_claim.amount = parseInt(op[1].amount_to_claim.amount, 10);
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.linkToAccount(op[1].issuer), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"].Wrapper, {
          asset: op[1].amount_to_claim.asset_id
        }, ({
          asset
        }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "transaction.asset_claim_fees",
          keys: [{
            type: "amount",
            value: op[1].amount_to_claim,
            arg: "balance_amount"
          }, {
            type: "asset",
            value: asset.get("id"),
            arg: "asset"
          }]
        })));
        break;

      case "custom":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transaction.custom"
        }));
        break;

      case "asset_reserve":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.asset_reserve",
          keys: [{
            type: "account",
            value: op[1].payer,
            arg: "account"
          }, {
            type: "amount",
            value: op[1].amount_to_reserve,
            arg: "amount"
          }]
        }));
        break;

      case "committee_member_update_global_parameters":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.committee_member_update_global_parameters",
          keys: [{
            type: "account",
            value: "1.2.0",
            arg: "account"
          }]
        }));
        break;

      case "override_transfer":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.override_transfer",
          keys: [{
            type: "account",
            value: op[1].issuer,
            arg: "issuer"
          }, {
            type: "account",
            value: op[1].from,
            arg: "from"
          }, {
            type: "account",
            value: op[1].to,
            arg: "to"
          }, {
            type: "amount",
            value: op[1].amount,
            arg: "amount"
          }]
        });
        break;

      case "asset_settle_cancel":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.asset_settle_cancel",
          keys: [{
            type: "account",
            value: op[1].account,
            arg: "account"
          }, {
            type: "amount",
            value: op[1].amount,
            arg: "amount"
          }]
        });
        break;

      case "asset_claim_pool":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.asset_claim_pool",
          keys: [{
            type: "account",
            value: op[1].issuer,
            arg: "account"
          }, {
            type: "asset",
            value: op[1].asset_id,
            arg: "asset"
          }, {
            type: "amount",
            value: op[1].amount_to_claim,
            arg: "amount"
          }]
        });
        break;

      case "asset_update_issuer":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.asset_update_issuer",
          keys: [{
            type: "account",
            value: op[1].issuer,
            arg: "from_account"
          }, {
            type: "account",
            value: op[1].new_issuer,
            arg: "to_account"
          }, {
            type: "asset",
            value: op[1].asset_to_update,
            arg: "asset"
          }]
        });
        break;

      case "bid_collateral":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.bid_collateral",
          keys: [{
            type: "account",
            value: op[1].bidder,
            arg: "bid_account"
          }, {
            type: "amount",
            value: op[1].additional_collateral,
            arg: "collateral"
          }, {
            type: "amount",
            value: op[1].debt_covered,
            arg: "debt"
          }]
        });
        break;

      case "htlc_create":
        const globalObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainStore.getObject("2.0.0");
        const dynGlobalObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__.ChainStore.getObject("2.1.0");
        let block_time = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].calc_block_time(block, globalObject, dynGlobalObject);
        let estimated = false;

        if (!block_time) {
          block_time = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].calc_block_time(block, globalObject, dynGlobalObject, true);
          estimated = true;
        }

        op[1].amount.amount = parseFloat(op[1].amount.amount);
        let expiryTime = new Date();
        expiryTime.setTime(block_time.getTime() + op[1].claim_period_seconds * 1000);
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "right-td"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.htlc_create",
          keys: [{
            type: "date",
            arg: "lock_period",
            value: expiryTime
          }, {
            type: "account",
            value: op[1].from,
            arg: "from"
          }, {
            type: "amount",
            value: op[1].amount,
            arg: "amount"
          }, {
            type: "account",
            value: op[1].to,
            arg: "to"
          }]
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Tooltip, {
          title: "Estimated"
        }, estimated ? "*" : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "memo",
          style: {
            paddingTop: 5,
            cursor: "help"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Tooltip, {
          placement: "bottom",
          title: counterpart__WEBPACK_IMPORTED_MODULE_14___default().translate("htlc.preimage_hash_explanation")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "inline-block"
        }, counterpart__WEBPACK_IMPORTED_MODULE_14___default().translate("htlc.preimage_hash") + " (" + op[1].preimage_size + ", " + op[1].preimage_hash[0] + "): " + op[1].preimage_hash[1]))));
        break;

      case "htlc_redeem":
        color = "success";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "right-td"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.htlc_redeem",
          keys: [{
            type: "account",
            value: op[1].redeemer,
            arg: "redeemer"
          }, {
            value: op[1].htlc_id,
            arg: "htlc_id"
          }]
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "memo",
          style: {
            paddingTop: 5,
            cursor: "help"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__.Tooltip, {
          placement: "bottom",
          title: counterpart__WEBPACK_IMPORTED_MODULE_14___default().translate("htlc.preimage_explanation")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "inline-block"
        }, counterpart__WEBPACK_IMPORTED_MODULE_14___default().translate("htlc.preimage") + ": " + op[1].preimage))));
        break;

      case "htlc_extend":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "right-td"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.htlc_extend",
          keys: [{
            type: "account",
            value: op[1].update_issuer,
            arg: "update_issuer"
          }, {
            type: "amount",
            arg: "seconds_to_add",
            value: op[1].seconds_to_add
          }, {
            value: op[1].htlc_id,
            arg: "htlc_id"
          }]
        }));
        break;

      case "htlc_redeemed":
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "right-td"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.htlc_redeemed",
          keys: [{
            type: "account",
            value: op[1].to,
            arg: "to"
          }, {
            type: "account",
            value: op[1].from,
            arg: "from"
          }, {
            type: "amount",
            value: op[1].amount,
            arg: "amount",
            decimalOffset: op[1].amount.asset_id === "1.3.0" ? 5 : null
          }, {
            value: op[1].htlc_id,
            arg: "htlc_id"
          }]
        }));
        break;

      case "htlc_refund":
        color = "warning";
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "right-td"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_7__["default"], {
          string: "operation.htlc_refund",
          keys: [{
            value: op[1].htlc_id,
            arg: "htlc_id"
          }, {
            type: "account",
            value: op[1].to,
            arg: "to"
          }]
        }));
        break;

      default:
        console.log("unimplemented op '" + ops[op[0]] + "':", op);
        column = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
          to: `/block/${block}`
        }, "#", block));
    }

    return {
      column,
      color
    };
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operation);

/***/ }),

/***/ 2829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FULL": () => (/* binding */ FULL),
/* harmony export */   "COINBASE": () => (/* binding */ COINBASE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2502);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);
/* harmony import */ var bitshares_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2830);
/* harmony import */ var bitshares_report__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_report__WEBPACK_IMPORTED_MODULE_2__);



const {
  operations
} = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainTypes;
const ops = Object.keys(operations);
const FULL = "FULL";
const COINBASE = "COINBASE";


class AccountHistoryExporter {
  pad(number, length) {
    let str = "" + number;

    while (str.length < length) {
      str = "0" + str;
    }

    return str;
  }

  formatDate(d) {
    return ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2) + " GMT" + ((d.getTimezoneOffset() < 0 ? "+" : "-") + // Note the reversed sign!
    this.pad(parseInt(Math.floor(Math.abs(d.getTimezoneOffset() / 60))), 2) + this.pad(Math.abs(d.getTimezoneOffset() % 60), 2));
  }

  async generateCSV(accountsList, esNode, exportType) {
    let start = 0,
        limit = 10000;
    let account = accountsList[0].get("id");
    let accountName = (await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.FetchChain)("getAccount", account)).get("name");
    let recordData = {};
    let end_next = false;

    while (true) {
      let res = false;

      try {
        res = await this._getAccountHistoryES(account, limit, start, esNode);
      } catch (e) {
        end_next = true;
      }

      if (!res.length || end_next) break;
      await bitshares_report__WEBPACK_IMPORTED_MODULE_2___default().resolveBlockTimes(res);
      /* Before parsing results we need to know the asset info (precision) */

      await bitshares_report__WEBPACK_IMPORTED_MODULE_2___default().resolveAssets(res);
      res.map(function (record) {
        const trx_id = record.id; // let timestamp = api.getBlock(record.block_num);

        const type = ops[record.op.type];
        const data = record.op.data; // Data is sometimes null

        if (data) {
          switch (type) {
            case "vesting_balance_withdraw":
              if (!data.amount) {
                data.amount = data.amount_;
              }

              break;

            case "transfer":
              if (!data.amount) {
                data.amount = data.amount_;
              }

              break;
          }

          switch (type) {
            default:
              recordData[trx_id] = {
                timestamp: new Date(record.block_time),
                type,
                data
              };
          }
        }
      });
      start += res.length;
    }

    if (!Object.keys(recordData).length) {
      return;
    }

    let parsedData;

    if (exportType === FULL) {
      parsedData = [];

      for (let i in recordData) {
        parsedData.push([i, recordData[i]]);
      }
    } else {
      recordData = bitshares_report__WEBPACK_IMPORTED_MODULE_2___default().groupEntries(recordData);
      parsedData = bitshares_report__WEBPACK_IMPORTED_MODULE_2___default().parseData(recordData, account, accountName);
    }

    let blob = this.dataToCSV(parsedData, exportType);
    let today = new Date();
    (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "graphene-account-history-" + accountName + "-" + today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + "-" + ("0" + today.getHours()).slice(-2) + ("0" + today.getMinutes()).slice(-2) + ".csv");
    console.log("Export file generated");
  }

  _getAccountHistoryES(account_id, limit, start, esNode) {
    let endpoint = "get_account_history";

    if (esNode.indexOf("es-wrapper") !== -1) {
      endpoint = "es/account_history";
    }

    let queryUrl = esNode + "/" + endpoint + "?account_id=" + account_id + "&from_=" + start + "&size=" + limit + "&sort_by=block_data.block_time&type=data&agg_field=operation_type";
    console.log("query", queryUrl);
    return new Promise((resolve, reject) => {
      fetch(queryUrl).then(res => res.json()).then(result => {
        let opHistory = result.map(r => {
          // the answer might differ if op_opject is filled or not
          let op_data = r.operation_history.op_object;

          if (!op_data) {
            op_data = JSON.parse(r.operation_history.op)[1];
          }

          return {
            id: r.account_history.operation_id,
            op: {
              type: r.operation_type,
              data: op_data
            },
            result: JSON.parse(r.operation_history.operation_result),
            block_num: r.block_data.block_num,
            block_time: r.block_data.block_time + "Z"
          };
        });
        resolve(opHistory);
      }).catch(err => {
        reject(err);
      });
    });
  }

  dataToCSV(data, exportType) {
    let csvString = "";

    for (let line of data) {
      if (exportType === COINBASE) {
        if (line.length >= 11 && line[10] instanceof Date) {
          line[10] = this.formatDate(line[10]);
        }

        csvString += line.join(",") + "\n";
      } else {
        csvString += JSON.stringify(line) + "\n";
      }
    }

    return new Blob([csvString], {
      type: "text/csv;charset=utf-8"
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountHistoryExporter);

/***/ }),

/***/ 2799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEuMjMzZDBlZDUwMjlhMzYzMTNkNDAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7QUFPQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFiQTtBQWVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUNBO0FBQ0E7QUFJQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQTtBQVFBO0FBQUE7QUFLQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQTdDQTtBQStDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUlBOztBQU9BO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFBQTtBQUVBO0FBQUE7QUFRQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFrQkE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBS0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBWkE7QUFnQkE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFEQTtBQVFBO0FBaEJBO0FBb0JBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBREE7QUFRQTtBQWhCQTtBQW9CQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBZEE7QUFpQkE7QUFDQTtBQUNBO0FBMUZBO0FBaUdBOztBQXRsQkE7O0FBd2xCQTtBQUVBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBUkE7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBZkE7O0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBZEE7O0FBaUJBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQU1BO0FBcEJBO0FBeUJBOztBQXBGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBRkE7QUFPQTs7QUFqQ0E7O0FBb0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7O0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBakJBO0FBd0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBSUE7O0FBRUE7QUFNQTtBQUdBO0FBR0E7QUFHQTtBQU1BO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQTFCQTtBQStCQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQVRBO0FBZUE7O0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBbEJBO0FBMkJBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFNQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWdCQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFhQTs7QUFFQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBaUJBOztBQUVBO0FBQ0E7QUFHQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWdCQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWlCQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBaUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWlCQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBaUJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBdUJBOztBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFiQTtBQXlCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBYkE7QUF5QkE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFpQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBc0JBOztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFpQkE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBYUE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBYUE7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQVFBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQURBO0FBTUE7QUFSQTtBQVJBO0FBd0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFJQTs7QUFFQTtBQUNBO0FBUUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBREE7QUFJQTtBQU5BO0FBUkE7QUFtQkE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQVVBO0FBSUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBREE7QUFJQTtBQU5BO0FBUkE7QUFvQkE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUtBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFLQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBS0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUdBO0FBT0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUEzQkE7QUFnQ0E7QUFJQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBTUE7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQVFBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBaUJBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQWpCQTtBQXVCQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFpQkE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQVFBOztBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFNQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFLQTtBQURBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFtQkE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQU1BOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBaUJBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVlBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFWQTtBQWNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBWUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQXFCQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBcUJBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBYkE7QUFxQkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFJQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFsQkE7QUF5QkE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFlQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBUkE7QUFnQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQVNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFiQTtBQXFCQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQ0E7QUFGQTtBQXRCQTtBQThCQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFpQkE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQXQ5Q0E7O0FBMDlDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQXYvQ0E7O0FBMC9DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcGhEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQWNBO0FBTUE7O0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFYQTs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBZUE7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFHQTtBQUNBO0FBVkE7QUFZQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFsTUE7O0FBcU1BOzs7Ozs7OztBQ2hOQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1BhZ2luYXRlZExpc3QuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUGVuZGluZ0Jsb2NrLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL09wZXJhdGlvbkFudC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvc2VydmljZXMvQWNjb3VudEhpc3RvcnlFeHBvcnRlci5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L3BhZ2luYXRlZC1saXN0LnNjc3M/MzYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IEpTT05Nb2RhbCBmcm9tIFwiY29tcG9uZW50cy9Nb2RhbC9KU09OTW9kYWxcIjtcbmltcG9ydCB7SWNvbiBhcyBBbnRJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQge1xuICAgIENoYWluVHlwZXMgYXMgZ3JhcGhlbmVDaGFpblR5cGVzLFxuICAgIEZldGNoQ2hhaW4sXG4gICAgQ2hhaW5TdG9yZVxufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbi8vaW1wb3J0IHBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcIi4uL1V0aWxpdHkvUGFnaW5hdGVkTGlzdFwiO1xuY29uc3Qge29wZXJhdGlvbnN9ID0gZ3JhcGhlbmVDaGFpblR5cGVzO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCB7VG9vbHRpcCwgTW9kYWwsIEJ1dHRvbiwgU2VsZWN0LCBJbnB1dH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuY29uc3Qgb3BzID0gT2JqZWN0LmtleXMob3BlcmF0aW9ucyk7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCBCbG9ja1RpbWUgZnJvbSBcIi4uL0Jsb2NrY2hhaW4vQmxvY2tUaW1lXCI7XG5pbXBvcnQgT3BlcmF0aW9uQW50IGZyb20gXCIuLi9CbG9ja2NoYWluL09wZXJhdGlvbkFudFwiO1xuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBQZW5kaW5nQmxvY2sgZnJvbSBcIi4uL1V0aWxpdHkvUGVuZGluZ0Jsb2NrXCI7XG5cbmNvbnN0IG9wZXJhdGlvbiA9IG5ldyBPcGVyYXRpb25BbnQoKTtcblxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcbmltcG9ydCBBY2NvdW50SGlzdG9yeUV4cG9ydGVyLCB7XG4gICAgRlVMTCxcbiAgICBDT0lOQkFTRVxufSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQWNjb3VudEhpc3RvcnlFeHBvcnRlclwiO1xuaW1wb3J0IHtzZXR0aW5nc0FQSXN9IGZyb20gXCJhcGkvYXBpQ29uZmlnXCI7XG5cbmZ1bmN0aW9uIGNvbXBhcmVPcHMoYiwgYSkge1xuICAgIGlmIChhLmJsb2NrX251bSA9PT0gYi5ibG9ja19udW0pIHtcbiAgICAgICAgaWYgKGEudHJ4X2luX2Jsb2NrICE9PSBiLnRyeF9pbl9ibG9jaykge1xuICAgICAgICAgICAgcmV0dXJuIGEudHJ4X2luX2Jsb2NrIC0gYi50cnhfaW5fYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYS5vcF9pbl90cnggIT09IGIub3BfaW5fdHJ4KSB7XG4gICAgICAgICAgICByZXR1cm4gYS5vcF9pbl90cnggLSBiLm9wX2luX3RyeDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS52aXJ0dWFsX29wIC0gYi52aXJ0dWFsX29wO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhLmJsb2NrX251bSAtIGIuYmxvY2tfbnVtO1xuICAgIH1cbn1cblxuY2xhc3MgUmVjZW50VHJhbnNhY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBhY2NvdW50c0xpc3Q6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50c0xpc3QuaXNSZXF1aXJlZCxcbiAgICAgICAgY29tcGFjdFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBsaW1pdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBmdWxsSGVpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgc2hvd0ZpbHRlcnM6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGxpbWl0OiAyNSxcbiAgICAgICAgbWF4SGVpZ2h0OiA1MDAsXG4gICAgICAgIGZ1bGxIZWlnaHQ6IGZhbHNlLFxuICAgICAgICBzaG93RmlsdGVyczogZmFsc2VcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBmaXhtZSBhY2Nlc3MgdG8gRVMgY291bGQgYmUgd3JhcHBlZCBpbiBhIHN0b3JlIG9yIHNvbWV0aGluZyBlbHNlXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxpbWl0OiBwcm9wcy5saW1pdCxcbiAgICAgICAgICAgIGZldGNoaW5nQWNjb3VudEhpc3Rvcnk6IGZhbHNlLFxuICAgICAgICAgICAgaGVhZGVySGVpZ2h0OiA4NSxcbiAgICAgICAgICAgIGZpbHRlcjogXCJhbGxcIixcbiAgICAgICAgICAgIGFjY291bnRIaXN0b3J5RXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgcm93czogW10sXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgZXNOb2RlQ3VzdG9tOiBmYWxzZSxcbiAgICAgICAgICAgIGVzTm9kZTpcbiAgICAgICAgICAgICAgICBzZXR0aW5nc0FQSXMuRVNfV1JBUFBFUl9MSVNULmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBzZXR0aW5nc0FQSXMuRVNfV1JBUFBFUl9MSVNUWzBdLnVybFxuICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICB2aXNpYmxlSWQ6IFwiXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXREYXRhU291cmNlID0gdGhpcy5nZXREYXRhU291cmNlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy51c2VDdXN0b20gPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICBcImFjY291bnQuZXhwb3J0X21vZGFsLnVzZV9jdXN0b21cIlxuICAgICAgICApO1xuICAgICAgICAvLyBodHRwczovL2Vzd3JhcHBlci5iaXRzaGFyZXMuZXUvIGlzIG5vdCBhbGl2ZVxuICAgICAgICAvLyBodHRwczovL3dyYXBwZXIuZWxhc3RpY3NlYXJjaC5iaXRzaGFyZXMud3MvIGlzIG5vdCBhbGl2ZVxuICAgICAgICAvLyBodHRwOi8vYnRzLWVzLmNsb2Nrd29yay5ncjo1MDAwLyBpcyBhbGl2ZVxuICAgICAgICAvLyBodHRwczovL2V4cGxvcmVyLmJpdHNoYXJlcy1raWJhbmEuaW5mby8gaXMgbm90IGFsaXZlXG4gICAgICAgIC8vIGh0dHA6Ly8xODUuMjA4LjIwOC4xODQ6NTAwMC9lcy8gaXMgYWxpdmVcbiAgICAgICAgdGhpcy5zaG93RXhwb3J0TW9kYWwgPSB0aGlzLnNob3dFeHBvcnRNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhpZGVFeHBvcnRNb2RhbCA9IHRoaXMuaGlkZUV4cG9ydE1vZGFsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZXNOb2RlQ2hhbmdlID0gdGhpcy5lc05vZGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVDU1YgPSB0aGlzLl9nZW5lcmF0ZUNTVi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuZnVsbEhlaWdodCkge1xuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnJlZnMudHJhbnNhY3Rpb25zO1xuICAgICAgICAgICAgLy9wcy5pbml0aWFsaXplKHQpO1xuXG4gICAgICAgICAgICB0aGlzLl9zZXRIZWFkZXJIZWlnaHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVzTm9kZUNoYW5nZShlKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIGlmIChlLnRhcmdldCkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VmFsdWUgPT0gdGhpcy51c2VDdXN0b20pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGVzTm9kZTogXCJcIixcbiAgICAgICAgICAgICAgICBlc05vZGVDdXN0b206IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXNOb2RlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93RXhwb3J0TW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd01vZGFsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVFeHBvcnRNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRIZWFkZXJIZWlnaHQoKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnJlZnMuaGVhZGVyLm9mZnNldEhlaWdodDtcblxuICAgICAgICBpZiAoaGVpZ2h0ICE9PSB0aGlzLnN0YXRlLmhlYWRlckhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaGVhZGVySGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnRzTGlzdCxcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudHNMaXN0XG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXhIZWlnaHQgIT09IG5leHRQcm9wcy5tYXhIZWlnaHQpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5oZWFkZXJIZWlnaHQgIT09IG5leHRTdGF0ZS5oZWFkZXJIZWlnaHQpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWx0ZXIgIT09IG5leHRTdGF0ZS5maWx0ZXIpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXN0b21GaWx0ZXIpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VzdG9tRmlsdGVyLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dFByb3BzLmN1c3RvbUZpbHRlci5maWVsZHNcbiAgICAgICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1c3RvbUZpbHRlci52YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jdXN0b21GaWx0ZXIudmFsdWVzXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXhIZWlnaHQgIT09IG5leHRQcm9wcy5tYXhIZWlnaHQpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0U3RhdGUubGltaXQgIT09IHRoaXMuc3RhdGUubGltaXQgfHxcbiAgICAgICAgICAgIG5leHRTdGF0ZS5mZXRjaGluZ0FjY291bnRIaXN0b3J5ICE9PVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hpbmdBY2NvdW50SGlzdG9yeVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgbmV4dFByb3BzLmFjY291bnRzTGlzdC5sZW5ndGg7ICsra2V5KSB7XG4gICAgICAgICAgICBsZXQgbnBhID0gbmV4dFByb3BzLmFjY291bnRzTGlzdFtrZXldO1xuICAgICAgICAgICAgbGV0IG5zYSA9IHRoaXMucHJvcHMuYWNjb3VudHNMaXN0W2tleV07XG4gICAgICAgICAgICBpZiAobnBhICYmIG5zYSAmJiBucGEuZ2V0KFwiaGlzdG9yeVwiKSAhPT0gbnNhLmdldChcImhpc3RvcnlcIikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd01vZGFsICE9PSBuZXh0U3RhdGUuc2hvd01vZGFsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXNOb2RlICE9PSBuZXh0U3RhdGUuZXNOb2RlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXNOb2RlQ3VzdG9tICE9PSBuZXh0U3RhdGUuZXNOb2RlQ3VzdG9tKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZUlkICE9PSBuZXh0U3RhdGUudmlzaWJsZUlkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9vbkluY3JlYXNlTGltaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbGltaXQ6IHRoaXMuc3RhdGUubGltaXQgKyAzMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0SGlzdG9yeShhY2NvdW50c0xpc3QsIGZpbHRlck9wLCBjdXN0b21GaWx0ZXIpIHtcbiAgICAgICAgbGV0IGhpc3RvcnkgPSBbXTtcbiAgICAgICAgbGV0IHNlZW5fb3BzID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGxldCBhY2NvdW50IG9mIGFjY291bnRzTGlzdCkge1xuICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaCA9IGFjY291bnQuZ2V0KFwiaGlzdG9yeVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaClcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeSA9IGhpc3RvcnkuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICAgICAgaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0pTKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNlZW5fb3BzLmhhcyhvcC5pZCkgJiYgc2Vlbl9vcHMuYWRkKG9wLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsdGVyT3ApIHtcbiAgICAgICAgICAgIGhpc3RvcnkgPSBoaXN0b3J5LmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5vcFswXSA9PT0gb3BlcmF0aW9uc1tmaWx0ZXJPcF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXN0b21GaWx0ZXIpIHtcbiAgICAgICAgICAgIGhpc3RvcnkgPSBoaXN0b3J5LmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZmluYWxWYWx1ZSA9IGN1c3RvbUZpbHRlci5maWVsZHMucmVkdWNlKChmaW5hbCwgZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXNzZXRfaWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLm9wWzFdW1wiYW1vdW50XCJdW2ZpbHRlcl0gPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWx0ZXIudmFsdWVzW2ZpbHRlcl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLm9wWzFdW2ZpbHRlcl0gPT09IGN1c3RvbUZpbHRlci52YWx1ZXNbZmlsdGVyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaXN0b3J5O1xuICAgIH1cblxuICAgIGFzeW5jIF9nZW5lcmF0ZUNTVihleHBvcnRUeXBlKSB7XG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImludGlhbGl6aW5nIGZldGNoaW5nIG9mIEVTIGRhdGFcIik7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IEFIRSA9IG5ldyBBY2NvdW50SGlzdG9yeUV4cG9ydGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZldGNoaW5nQWNjb3VudEhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IEFIRS5nZW5lcmF0ZUNTVihcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnRzTGlzdCxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVzTm9kZSxcbiAgICAgICAgICAgICAgICBleHBvcnRUeXBlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmZXRjaGluZ0FjY291bnRIaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhY2NvdW50SGlzdG9yeUVycm9yOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmZXRjaGluZ0FjY291bnRIaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhY2NvdW50SGlzdG9yeUVycm9yOiBlcnIsXG4gICAgICAgICAgICAgICAgZXNOb2RlQ3VzdG9tOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlc05vZGU6XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzQVBJcy5FU19XUkFQUEVSX0xJU1QubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXR0aW5nc0FQSXMuRVNfV1JBUFBFUl9MSVNUWzBdLnVybFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbkNoYW5nZUZpbHRlcih2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlcjogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlbkpTT05Nb2RhbChpZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt2aXNpYmxlSWQ6IGlkfSk7XG4gICAgfVxuXG4gICAgY2xvc2VKU09OTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Zpc2libGVJZDogXCJcIn0pO1xuICAgIH07XG5cbiAgICBnZXREYXRhU291cmNlKG8sIGN1cnJlbnRfYWNjb3VudF9pZCkge1xuICAgICAgICBsZXQgZmVlID0gby5vcFsxXS5mZWU7XG4gICAgICAgIGxldCB0cnhUeXBlcyA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zYWN0aW9uLnRyeFR5cGVzXCIpO1xuICAgICAgICBjb25zdCBpbmZvID0gb3BlcmF0aW9uLmdldENvbHVtbihcbiAgICAgICAgICAgIG8ub3AsXG4gICAgICAgICAgICBjdXJyZW50X2FjY291bnRfaWQsXG4gICAgICAgICAgICBvLmJsb2NrX251bSxcbiAgICAgICAgICAgIG8ucmVzdWx0LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXJrZXREaXJlY3Rpb25zXG4gICAgICAgICk7XG4gICAgICAgIGZlZS5hbW91bnQgPSBwYXJzZUludChmZWUuYW1vdW50LCAxMCk7XG4gICAgICAgIGNvbnN0IGR5bkdsb2JhbE9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4xLjBcIik7XG4gICAgICAgIGNvbnN0IGxhc3RJcnJldmVyc2libGVCbG9ja051bSA9IGR5bkdsb2JhbE9iamVjdC5nZXQoXG4gICAgICAgICAgICBcImxhc3RfaXJyZXZlcnNpYmxlX2Jsb2NrX251bVwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IG8uaWQsXG4gICAgICAgICAgICBpZDogKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub3BlbkpTT05Nb2RhbChvLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge28uaWR9IDxBbnRJY29uIHR5cGU9XCJmaWxlLXNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPEpTT05Nb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlSWQgPT09IG8uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb249e28ub3B9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dHJ4VHlwZXNbb3BzW28ub3BbMF1dIHx8IFwiXCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsPXt0aGlzLmNsb3NlSlNPTk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdHlwZTogKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5zaG93X2Jsb2NrXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiB1dGlscy5mb3JtYXRfbnVtYmVyKG8uYmxvY2tfbnVtLCAwKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgdG89e2AvYmxvY2svJHtvLmJsb2NrX251bX0vJHtvLnRyeF9pbl9ibG9ja31gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbmFtZXMoXCJsYWJlbFwiLCBpbmZvLmNvbG9yIHx8IFwiaW5mb1wiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJ4VHlwZXNbb3BzW28ub3BbMF1dXX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBpbmZvOiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpbmZvLmNvbHVtbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6IDE0LCBwYWRkaW5nVG9wOiA1fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7by5ibG9ja19udW0gPiBsYXN0SXJyZXZlcnNpYmxlQmxvY2tOdW0gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlbmRpbmdCbG9jayBibG9ja051bWJlcj17by5ibG9ja19udW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZmVlOiA8Rm9ybWF0dGVkQXNzZXQgYW1vdW50PXtmZWUuYW1vdW50fSBhc3NldD17ZmVlLmFzc2V0X2lkfSAvPixcbiAgICAgICAgICAgIHRpbWU6IDxCbG9ja1RpbWUgYmxvY2tfbnVtYmVyPXtvLmJsb2NrX251bX0gZnVsbERhdGU9e3RydWV9IC8+XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgYWNjb3VudHNMaXN0LFxuICAgICAgICAgICAgY29tcGFjdFZpZXcsXG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICBjdXN0b21GaWx0ZXIsXG4gICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgIG1heEhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHtsaW1pdCwgaGVhZGVySGVpZ2h0fSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBjdXJyZW50X2FjY291bnRfaWQgPVxuICAgICAgICAgICAgYWNjb3VudHNMaXN0Lmxlbmd0aCA9PT0gMSAmJiBhY2NvdW50c0xpc3RbMF1cbiAgICAgICAgICAgICAgICA/IGFjY291bnRzTGlzdFswXS5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgbGV0IGhpc3RvcnkgPSB0aGlzLl9nZXRIaXN0b3J5KFxuICAgICAgICAgICAgYWNjb3VudHNMaXN0LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93RmlsdGVycyAmJiB0aGlzLnN0YXRlLmZpbHRlciAhPT0gXCJhbGxcIlxuICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5maWx0ZXJcbiAgICAgICAgICAgICAgICA6IGZpbHRlcixcbiAgICAgICAgICAgIGN1c3RvbUZpbHRlclxuICAgICAgICApLnNvcnQoY29tcGFyZU9wcyk7XG4gICAgICAgIGxldCBoaXN0b3J5Q291bnQgPSBoaXN0b3J5Lmxlbmd0aDtcblxuICAgICAgICBzdHlsZSA9IHN0eWxlID8gc3R5bGUgOiB7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwifTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IG51bGw7XG4gICAgICAgIGlmICh0cnVlIHx8IHRoaXMucHJvcHMuc2hvd0ZpbHRlcnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgXCJhbGxcIixcbiAgICAgICAgICAgICAgICBcInRyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgXCJsaW1pdF9vcmRlcl9jcmVhdGVcIixcbiAgICAgICAgICAgICAgICBcImxpbWl0X29yZGVyX2NhbmNlbFwiLFxuICAgICAgICAgICAgICAgIFwiZmlsbF9vcmRlclwiLFxuICAgICAgICAgICAgICAgIFwiYWNjb3VudF9jcmVhdGVcIixcbiAgICAgICAgICAgICAgICBcImFjY291bnRfdXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJhc3NldF9jcmVhdGVcIixcbiAgICAgICAgICAgICAgICBcIndpdG5lc3Nfd2l0aGRyYXdfcGF5XCIsXG4gICAgICAgICAgICAgICAgXCJ2ZXN0aW5nX2JhbGFuY2Vfd2l0aGRyYXdcIlxuICAgICAgICAgICAgXS5tYXAodHlwZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17dHlwZX0ga2V5PXt0eXBlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2FjdGlvbi50cnhUeXBlcy5cIiArIHR5cGUpfVxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGlkZUZlZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBkaXNwbGF5X2hpc3RvcnkgPSBoaXN0b3J5Lmxlbmd0aFxuICAgICAgICAgICAgPyBoaXN0b3J5LnNsaWNlKDAsIGxpbWl0KS5tYXAobyA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhU291cmNlKG8sIGN1cnJlbnRfYWNjb3VudF9pZCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFtdO1xuICAgICAgICBsZXQgYWN0aW9uID0gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbC12YWx1ZVwiIGtleT1cInRvdGFsX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmb290ZXIgPSAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5fZ2VuZXJhdGVDU1YoRlVMTCl9IHR5cGU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuZXhwb3J0X21vZGFsLmZ1bGxfcmVwb3J0XCIgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuX2dlbmVyYXRlQ1NWKENPSU5CQVNFKX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5leHBvcnRfbW9kYWwuY29pbmJhc2VfcmVwb3J0XCIgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VudC10cmFuc2FjdGlvbnMgbm8tb3ZlcmZsb3dcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICB3cmFwQ2xhc3NOYW1lPVwibW9kYWwtLXRyYW5zYWN0aW9uLWNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5leHBvcnRfbW9kYWwudGl0bGVcIiAvPn1cbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwidHJhbnNhY3Rpb25fY29uZmlybV9tb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtmb290ZXJ9XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVFeHBvcnRNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgbm9DbG9zZUJ0bj17dHJ1ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5leHBvcnRfbW9kYWwuZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVzTm9kZUN1c3RvbSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lc05vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZXNOb2RlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXNOb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVzTm9kZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXR0aW5nc0FQSXMuRVNfV1JBUFBFUl9MSVNULmNvbmNhdChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1cmw6IHRoaXMudXNlQ3VzdG9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLm1hcCh3cmFwcGVyID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXt3cmFwcGVyLnVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d3JhcHBlci51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyaWMtYm9yZGVyZWQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhc2hib2FyZCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucmVjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXIgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0ZpbHRlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAuZmlsdGVyX29wc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZUZpbHRlci5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGlzdG9yeUNvdW50ID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGFzaGJvYXJkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lc05vZGUgIT09IG51bGwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zYWN0aW9uLmNzdl90aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaWNvbkxpbmtBbmRMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93RXhwb3J0TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJleGNlbFwiIHNpemU9XCIxeFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5kb3dubG9hZF9oaXN0b3J5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY2NvdW50SGlzdG9yeUVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMC43NXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuaGlzdG9yeV9lcnJvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRlZExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGUgdGFibGUtc3RyaXBlZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbXBhY3RWaWV3ID8gXCJjb21wYWN0XCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuZGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgZGFzaGJvYXJkLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC50cmFuc2FjdGlvbnMuaWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNvbXBhY3RWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC50cmFuc2FjdGlvbnMudHlwZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYW5zYWN0aW9ucy5pbmZvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhpZGVGZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYW5zYWN0aW9ucy5mZWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZmVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQudHJhbnNhY3Rpb25zLnRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t3aGl0ZVNwYWNlOiBcIm5vd3JhcFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17ZGlzcGxheV9oaXN0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ1dGlsaXR5LnRvdGFsX3hfb3BlcmF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYVJvdz17YWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoaW5nQWNjb3VudEhpc3RvcnkgJiYgPExvYWRpbmdJbmRpY2F0b3IgLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5SZWNlbnRUcmFuc2FjdGlvbnMgPSBCaW5kVG9DaGFpblN0YXRlKFJlY2VudFRyYW5zYWN0aW9ucyk7XG5cblJlY2VudFRyYW5zYWN0aW9ucyA9IGNvbm5lY3QoXG4gICAgUmVjZW50VHJhbnNhY3Rpb25zLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWFya2V0RGlyZWN0aW9uczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldERpcmVjdGlvbnNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5jbGFzcyBUcmFuc2FjdGlvbldyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgdG86IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGZyb21BY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFzc2V0OiBcIjEuMy4wXCJcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid3JhcHBlclwiPnt0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMucHJvcHMpfTwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5UcmFuc2FjdGlvbldyYXBwZXIgPSBCaW5kVG9DaGFpblN0YXRlKFRyYW5zYWN0aW9uV3JhcHBlcik7XG5cbmV4cG9ydCB7UmVjZW50VHJhbnNhY3Rpb25zLCBUcmFuc2FjdGlvbldyYXBwZXJ9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7VGFibGV9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IFwiLi9wYWdpbmF0ZWQtbGlzdC5zY3NzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRlZExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICByb3dzOiBbXSxcclxuICAgICAgICBwYWdlU2l6ZTogMjAsXHJcblxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJ0YWJsZVwiLFxyXG4gICAgICAgIGV4dHJhUm93OiBudWxsLFxyXG4gICAgICAgIHN0eWxlOiB7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9LFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG5cclxuICAgICAgICAvLyBjYW4gYmUgYSBzdHJpbmcgKGFzc3VtZXMgdGhlIHRyYW5zbGF0aW9uIGhhcyBvbmUgYXJndW1lbnQsIHRvdGFsIGNvdW50KSxcclxuICAgICAgICAvLyBvciBhbiBvYmplY3QsIHdoaWNoIGFsbG93cyBhIGN1c3RvbSBsYWJlbFxyXG4gICAgICAgIHRvdGFsTGFiZWw6IFwidXRpbGl0eS50b3RhbF94X2l0ZW1zXCIsXHJcblxyXG4gICAgICAgIC8vIEBkZXByZWNhdGVkLCB1c2UgdG90YWxMYWJlbFxyXG4gICAgICAgIGxhYmVsOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcHJvcHMucGFnZVNpemVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7cGFnZVNpemV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7aGVhZGVyLCByb3dzLCBleHRyYVJvdywgbG9hZGluZ30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwLCAxMDBdLmZpbHRlcihcclxuICAgICAgICAgICAgaXRlbSA9PiBpdGVtIDwgTWF0aC5tYXgodGhpcy5wcm9wcy5wYWdlU2l6ZSwgcm93cy5sZW5ndGgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBwYWdlU2l6ZU9wdGlvbnMucHVzaChNYXRoLm1heCh0aGlzLnByb3BzLnBhZ2VTaXplLCByb3dzLmxlbmd0aCkpO1xyXG5cclxuICAgICAgICBsZXQgdG90YWxDb2x1bW5zTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxhYmVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29sdW1uc0xhYmVsID0gdG90YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRvdGFsTGFiZWwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdG90YWxDb2x1bW5zTGFiZWwgPSB0b3RhbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMudG90YWxMYWJlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50b3RhbExhYmVsID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29sdW1uc0xhYmVsID0gdG90YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLnRvdGFsTGFiZWwua2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMudG90YWxMYWJlbC5hcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGVkLWxpc3RcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Jvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17QXJyYXkuaXNBcnJheShoZWFkZXIpID8gaGVhZGVyIDogW119XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXsoKSA9PiAoZXh0cmFSb3cgPyBleHRyYVJvdyA6IDxzcGFuPiZuYnNwOzwvc3Bhbj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLnRvZ2dsZVNvcnRPcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaXplQ2hhbmdlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9uU2luZ2xlUGFnZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQYWdlU2l6ZTogcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplT3B0aW9uczogcGFnZVNpemVPcHRpb25zLm1hcChvID0+IG8udG9TdHJpbmcoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb3RhbDogKHRvdGFsLCByYW5nZSkgPT4gdG90YWxDb2x1bW5zTGFiZWwodG90YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByb3dDbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJvd0NsYXNzTmFtZSA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAocmVjb3JkLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucm93Q2xhc3NOYW1lKHJlY29yZCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17dGhpcy5wcm9wcy5yb3dTZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuL0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4vQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5cclxuY2xhc3MgUGVuZGluZ0Jsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYmxvY2tOdW1iZXI6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogXCIyLjEuMFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gIUltbXV0YWJsZS5pcyhcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5keW5HbG9iYWxPYmplY3QsXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5keW5HbG9iYWxPYmplY3RcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7YmxvY2tOdW1iZXIsIGR5bkdsb2JhbE9iamVjdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGxhc3RJcnJldmVyc2libGVCbG9ja051bSA9IGR5bkdsb2JhbE9iamVjdC5nZXQoXHJcbiAgICAgICAgICAgIFwibGFzdF9pcnJldmVyc2libGVfYmxvY2tfbnVtXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gYmxvY2tOdW1iZXIgPiBsYXN0SXJyZXZlcnNpYmxlQmxvY2tOdW0gPyAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge1wiIC0gXCJ9KFxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJvcGVyYXRpb24ucGVuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzPXtibG9ja051bWJlciAtIGxhc3RJcnJldmVyc2libGVCbG9ja051bX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShQZW5kaW5nQmxvY2spO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcbmltcG9ydCBMaW5rVG9Bc3NldEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQXNzZXRCeUlkXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgVHJhbnNsYXRlV2l0aExpbmtzIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zbGF0ZVdpdGhMaW5rc1wiO1xuaW1wb3J0IHtDaGFpblR5cGVzIGFzIGdyYXBoZW5lQ2hhaW5UeXBlcywgQ2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgYWNjb3VudF9jb25zdGFudHMgZnJvbSBcImNoYWluL2FjY291bnRfY29uc3RhbnRzXCI7XG5pbXBvcnQgTWVtb1RleHQgZnJvbSBcIi4vTWVtb1RleHRcIjtcbmltcG9ydCBQcm9wb3NlZE9wZXJhdGlvbiBmcm9tIFwiLi9Qcm9wb3NlZE9wZXJhdGlvblwiO1xuaW1wb3J0IG1hcmtldFV0aWxzIGZyb20gXCJjb21tb24vbWFya2V0X3V0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuY29uc3QgU2hvcnRPYmplY3RJZCA9ICh7b2JqZWN0SWR9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3RJZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IG9iamVjdElkLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgY29uc3Qge2xlbmd0aH0gPSBwYXJ0cztcbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHJldHVybiBcIiNcIiArIHBhcnRzW2xlbmd0aCAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0SWQ7XG59O1xuXG5jbGFzcyBPcGVyYXRpb24ge1xuICAgIGxpbmtUb0FjY291bnQobmFtZV9vcl9pZCkge1xuICAgICAgICBpZiAoIW5hbWVfb3JfaWQpIHJldHVybiA8c3Bhbj4tPC9zcGFuPjtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmlzX29iamVjdF9pZChuYW1lX29yX2lkKSA/IChcbiAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtuYW1lX29yX2lkfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpbmsgdG89e2AvYWNjb3VudC8ke25hbWVfb3JfaWR9YH0+e25hbWVfb3JfaWR9PC9MaW5rPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxpbmtUb0Fzc2V0KHN5bWJvbF9vcl9pZCkge1xuICAgICAgICBpZiAoIXN5bWJvbF9vcl9pZCkgcmV0dXJuIDxzcGFuPi08L3NwYW4+O1xuICAgICAgICByZXR1cm4gdXRpbHMuaXNfb2JqZWN0X2lkKHN5bWJvbF9vcl9pZCkgPyAoXG4gICAgICAgICAgICA8TGlua1RvQXNzZXRCeUlkIGFzc2V0PXtzeW1ib2xfb3JfaWR9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGluayB0bz17YC9hc3NldC8ke3N5bWJvbF9vcl9pZH1gfT57c3ltYm9sX29yX2lkfTwvTGluaz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRDb2x1bW4ob3AsIGN1cnJlbnQsIGJsb2NrLCByZXN1bHQsIG1hcmtldERpcmVjdGlvbnMpIHtcbiAgICAgICAgY29uc3Qge29wZXJhdGlvbnN9ID0gZ3JhcGhlbmVDaGFpblR5cGVzO1xuICAgICAgICBsZXQgb3BzID0gT2JqZWN0LmtleXMob3BlcmF0aW9ucyk7XG4gICAgICAgIGxldCBsaXN0aW5ncyA9IGFjY291bnRfY29uc3RhbnRzLmFjY291bnRfbGlzdGluZztcbiAgICAgICAgbGV0IGNvbHVtbiA9IG51bGwsXG4gICAgICAgICAgICBjb2xvciA9IFwiaW5mb1wiO1xuICAgICAgICBsZXQgbWVtb0NvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIGxldCBvID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2ggKFxuICAgICAgICAgICAgb3BzW29wWzBdXSAvLyBGb3IgYSBsaXN0IG9mIHRyeCB0eXBlcywgc2VlIGNoYWluX3R5cGVzLmNvZmZlZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0cmFuc2ZlclwiOlxuICAgICAgICAgICAgICAgIGlmIChvcFsxXS5tZW1vKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9Db21wb25lbnQgPSA8TWVtb1RleHQgbWVtbz17b3BbMV0ubWVtb30gLz47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICBvcFsxXS5hbW91bnQuYW1vdW50ID0gcGFyc2VGbG9hdChvcFsxXS5hbW91bnQuYW1vdW50KTtcblxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtdGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24udHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJmcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzFdLmFtb3VudC5hc3NldF9pZCA9PT0gXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwiYWNjb3VudFwiLCB2YWx1ZTogb3BbMV0udG8sIGFyZzogXCJ0b1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge21lbW9Db21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJsaW1pdF9vcmRlcl9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwid2FybmluZ1wiO1xuICAgICAgICAgICAgICAgIG8gPSBvcFsxXTtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIG1hcmtldE5hbWUgPSBPUEVOLkVUSF9VU0RcbiAgICAgICAgICAgICAgICBpZiAoIWludmVydGVkKSAoZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBVU0QgLyBPUEVOLkVUSFxuICAgICAgICAgICAgICAgICAgICBidXkgLyBzZWxsIE9QRU4uRVRIXG4gICAgICAgICAgICAgICAgICAgIGlzQmlkID0gYW1vdW50X3RvX3NlbGwuYXNzZXRfc3ltYm9sID0gVVNEXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudCA9IHRvX3JlY2VpdmVcbiAgICAgICAgICAgICAgICBpZiAoaW52ZXJ0ZWQpXG4gICAgICAgICAgICAgICAgICAgIHByaWNlID0gIE9QRU4uRVRIIC8gVVNEXG4gICAgICAgICAgICAgICAgICAgIGJ1eSAvIHNlbGwgVVNEXG4gICAgICAgICAgICAgICAgICAgIGlzQmlkID0gYW1vdW50X3RvX3NlbGwuYXNzZXRfc3ltYm9sID0gT1BFTi5FVEhcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50ID1cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmluZFRvQ2hhaW5TdGF0ZS5XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZT17by5taW5fdG9fcmVjZWl2ZS5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17by5hbW91bnRfdG9fc2VsbC5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtiYXNlLCBxdW90ZX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gPSBtYXJrZXRVdGlscy5nZXRNYXJrZXROYW1lKGJhc2UsIHF1b3RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW52ZXJ0ZWQgPSBtYXJrZXREaXJlY3Rpb25zLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcGF5U3ltYm9sID0gYmFzZS5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlY2VpdmVTeW1ib2wgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNCaWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5hbW91bnRfdG9fc2VsbC5hc3NldF9pZCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbnZlcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmlyc3QuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNlY29uZC5nZXQoXCJpZFwiKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlQmFzZSA9IGlzQmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8uYW1vdW50X3RvX3NlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby5taW5fdG9fcmVjZWl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlUXVvdGUgPSBpc0JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvLm1pbl90b19yZWNlaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG8uYW1vdW50X3RvX3NlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IGlzQmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9wWzFdLm1pbl90b19yZWNlaXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9wWzFdLmFtb3VudF90b19zZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JkZXJJZCA9IHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0eXBlb2YgcmVzdWx0WzFdID09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiI1wiICsgcmVzdWx0WzFdLnN1YnN0cmluZyg0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJvcGVyYXRpb24ubGltaXRfb3JkZXJfYnV5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJvcGVyYXRpb24ubGltaXRfb3JkZXJfc2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uc2VsbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHByaWNlQmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogcHJpY2VRdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogb3JkZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JpbmRUb0NoYWluU3RhdGUuV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJsaW1pdF9vcmRlcl9jYW5jZWxcIjpcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwiY2FuY2VsXCI7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24ubGltaXRfb3JkZXJfY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZlZV9wYXlpbmdfYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBvcFsxXS5vcmRlci5zdWJzdHJpbmcoNClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJjYWxsX29yZGVyX3VwZGF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJ3YXJuaW5nXCI7XG5cbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5jYWxsX29yZGVyX3VwZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mdW5kaW5nX2FjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5kZWx0YV9kZWJ0LmFzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlYnRTeW1ib2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmRlbHRhX2RlYnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVidFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZGVsdGFfY29sbGF0ZXJhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJjb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImtleV9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5jcmVhdGVfa2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5yZWdfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnJlZ2lzdHJhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInJlZ2lzdHJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIm5ld19hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50X3VwZGF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLnVwZGF0ZV9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFjY291bnRfd2hpdGVsaXN0XCI6XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID1cbiAgICAgICAgICAgICAgICAgICAgb3BbMV0ubmV3X2xpc3RpbmcgPT09IGxpc3RpbmdzLm5vX2xpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ1bmxpc3RlZF9ieVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG9wWzFdLm5ld19saXN0aW5nID09PSBsaXN0aW5ncy53aGl0ZV9saXN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ3aGl0ZWxpc3RlZF9ieVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmxhY2tsaXN0ZWRfYnlcIjtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz17XCJvcGVyYXRpb24uXCIgKyBsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmF1dGhvcml6aW5nX2FjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibGlzdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYWNjb3VudF90b19saXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImxpc3RlZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50X3VwZ3JhZGVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzFdLnVwZ3JhZGVfdG9fbGlmZXRpbWVfbWVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwib3BlcmF0aW9uLmxpZmV0aW1lX3VwZ3JhZGVfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwib3BlcmF0aW9uLmFubnVhbF91cGdyYWRlX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnRfdG9fdXBncmFkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFjY291bnRfdHJhbnNmZXJcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hY2NvdW50X3RyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLm5ld19vd25lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwid2FybmluZ1wiO1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X2NyZWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfdXBkYXRlXCI6XG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfdXBkYXRlX2JpdGFzc2V0XCI6XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF91cGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaXNzdWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYXNzZXRfdG9fdXBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X3VwZGF0ZV9mZWVkX3Byb2R1Y2Vyc1wiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJ3YXJuaW5nXCI7XG5cbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF91cGRhdGVfZmVlZF9wcm9kdWNlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaXNzdWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYXNzZXRfdG9fdXBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X2lzc3VlXCI6XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcblxuICAgICAgICAgICAgICAgIGlmIChvcFsxXS5tZW1vKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9Db21wb25lbnQgPSA8TWVtb1RleHQgbWVtbz17b3BbMV0ubWVtb30gLz47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb3BbMV0uYXNzZXRfdG9faXNzdWUuYW1vdW50ID0gcGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgIG9wWzFdLmFzc2V0X3RvX2lzc3VlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X2lzc3VlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hc3NldF90b19pc3N1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5pc3N1ZV90b19hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge21lbW9Db21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfZnVuZF9mZWVfcG9vbFwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJ3YXJuaW5nXCI7XG5cbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF9mdW5kX2ZlZV9wb29sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZyb21fYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBvcFsxXS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IFwiMS4zLjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfc2V0dGxlXCI6XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlQW1vdW50ID0gb3BbMV0uYW1vdW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbnRTZXR0bGVDb2RlID0gMjtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdFswXSA9PSBpbnN0YW50U2V0dGxlQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZUFtb3VudCA9IHJlc3VsdFsxXTtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfc2V0dGxlX2luc3RhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBiYXNlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogYmFzZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IHF1b3RlQW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfc2V0dGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9nbG9iYWxfc2V0dGxlXCI6XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF9nbG9iYWxfc2V0dGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFzc2V0X3RvX3NldHRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5zZXR0bGVfcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfcHVibGlzaF9mZWVkXCI6XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5wdWJsaXNoX2ZlZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ucHVibGlzaGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZmVlZC5zZXR0bGVtZW50X3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndpdG5lc3NfY3JlYXRlXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24ud2l0bmVzc19jcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ud2l0bmVzc19hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ3aXRuZXNzX3VwZGF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLndpdG5lc3NfdXBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLndpdG5lc3NfYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwid2l0bmVzc193aXRoZHJhd19wYXlcIjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndpdG5lc3Nfd2l0aGRyYXdfcGF5OlwiLCBvcFsxXS53aXRuZXNzX2FjY291bnQpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBvcFsxXS53aXRuZXNzX2FjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLndpdG5lc3NfcGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e29wWzFdLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1wiMS4zLjBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdG5lc3NfYWNjb3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLnJlY2VpdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e29wWzFdLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1wiMS4zLjBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0ud2l0bmVzc19hY2NvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJwcm9wb3NhbF9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5wcm9wb3NhbF9jcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZlZV9wYXlpbmdfYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9ydE9iamVjdElkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RJZD17cmVzdWx0WzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJwcm9wb3NhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcFsxXS5wcm9wb3NlZF9vcHMubWFwKChvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb3Bvc2VkT3BlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A9e28ub3B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGZWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wTGFiZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURhdGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJwcm9wb3NhbF91cGRhdGVcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlX2FwcHJvdmFsc190b19hZGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmVfYXBwcm92YWxzX3RvX3JlbW92ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm93bmVyX2FwcHJvdmFsc190b19hZGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvd25lcl9hcHByb3ZhbHNfdG9fcmVtb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwia2V5X2FwcHJvdmFsc190b19hZGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlfYXBwcm92YWxzX3RvX3JlbW92ZVwiXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5wcm9wb3NhbF91cGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZlZV9wYXlpbmdfYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9ydE9iamVjdElkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RJZD17b3BbMV0ucHJvcG9zYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicHJvcG9zYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3Bvc2FsLXVwZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZHMubWFwKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzFdW2ZpZWxkXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17YHByb3Bvc2FsLnVwZGF0ZWQuJHtmaWVsZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BbMV1bZmllbGRdLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dmFsdWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpZWxkLnN0YXJ0c1dpdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubGlua1RvQWNjb3VudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInByb3Bvc2FsX2RlbGV0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLnByb3Bvc2FsX2RlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mZWVfcGF5aW5nX2FjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3J0T2JqZWN0SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWQ9e29wWzFdLnByb3Bvc2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByb3Bvc2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3X3Blcm1pc3Npb25fY3JlYXRlXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24ud2l0aGRyYXdfcGVybWlzc2lvbl9jcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS53aXRoZHJhd19mcm9tX2FjY291bnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zYWN0aW9uLnRvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS5hdXRob3JpemVkX2FjY291bnQpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3X3Blcm1pc3Npb25fdXBkYXRlXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24ud2l0aGRyYXdfcGVybWlzc2lvbl91cGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS53aXRoZHJhd19mcm9tX2FjY291bnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zYWN0aW9uLnRvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS5hdXRob3JpemVkX2FjY291bnQpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3X3Blcm1pc3Npb25fY2xhaW1cIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi53aXRoZHJhd19wZXJtaXNzaW9uX2NsYWltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0ud2l0aGRyYXdfZnJvbV9hY2NvdW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0ud2l0aGRyYXdfdG9fYWNjb3VudCl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdfcGVybWlzc2lvbl9kZWxldGVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi53aXRoZHJhd19wZXJtaXNzaW9uX2RlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdGhkcmF3X2Zyb21fYWNjb3VudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNhY3Rpb24udG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLmF1dGhvcml6ZWRfYWNjb3VudCl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiZmlsbF9vcmRlclwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgbyA9IG9wWzFdO1xuXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBtYXJrZXROYW1lID0gT1BFTi5FVEhfVVNEXG4gICAgICAgICAgICAgICAgaWYgKCFpbnZlcnRlZCkgKGRlZmF1bHQpXG4gICAgICAgICAgICAgICAgICAgIHByaWNlID0gVVNEIC8gT1BFTi5FVEhcbiAgICAgICAgICAgICAgICAgICAgYnV5IC8gc2VsbCBPUEVOLkVUSFxuICAgICAgICAgICAgICAgICAgICBpc0JpZCA9IGFtb3VudF90b19zZWxsLmFzc2V0X3N5bWJvbCA9IFVTRFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQgPSB0b19yZWNlaXZlXG4gICAgICAgICAgICAgICAgaWYgKGludmVydGVkKVxuICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICBPUEVOLkVUSCAvIFVTRFxuICAgICAgICAgICAgICAgICAgICBidXkgLyBzZWxsIFVTRFxuICAgICAgICAgICAgICAgICAgICBpc0JpZCA9IGFtb3VudF90b19zZWxsLmFzc2V0X3N5bWJvbCA9IE9QRU4uRVRIXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudCA9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge21hcmtldE5hbWUsIGZpcnN0LCBzZWNvbmR9ID0gbWFya2V0VXRpbHMuZ2V0TWFya2V0TmFtZShiYXNlLCBxdW90ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGludmVydGVkID0gdGhpcy5wcm9wcy5tYXJrZXREaXJlY3Rpb25zLmdldChtYXJrZXROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcGF5U3ltYm9sID0gYmFzZS5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlY2VpdmVTeW1ib2wgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNCaWQgPSBvLmFtb3VudF90b19zZWxsLmFzc2V0X2lkID09PSAoaW52ZXJ0ZWQgPyBmaXJzdC5nZXQoXCJpZFwiKSA6IHNlY29uZC5nZXQoXCJpZFwiKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlQmFzZSA9IChpc0JpZCkgPyBvLmFtb3VudF90b19zZWxsIDogby5taW5fdG9fcmVjZWl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlUXVvdGUgPSAoaXNCaWQpID8gby5taW5fdG9fcmVjZWl2ZSA6IG8uYW1vdW50X3RvX3NlbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IGlzQmlkID8gb3BbMV0ubWluX3RvX3JlY2VpdmUgOiBvcFsxXS5hbW91bnRfdG9fc2VsbDtcbiAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCaW5kVG9DaGFpblN0YXRlLldyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtvLnJlY2VpdmVzLmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlPXtvLnBheXMuYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7YmFzZSwgcXVvdGV9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ID0gbWFya2V0VXRpbHMuZ2V0TWFya2V0TmFtZShiYXNlLCBxdW90ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludmVydGVkID0gbWFya2V0RGlyZWN0aW9ucy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQmlkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ucGF5cy5hc3NldF9pZCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbnZlcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmlyc3QuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNlY29uZC5nZXQoXCJpZFwiKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcGF5U3ltYm9sID0gYmFzZS5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlY2VpdmVTeW1ib2wgPSBxdW90ZS5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmljZUJhc2UgPSBpc0JpZCA/IG8ucmVjZWl2ZXMgOiBvLnBheXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmljZVF1b3RlID0gaXNCaWQgPyBvLnBheXMgOiBvLnJlY2VpdmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gaXNCaWQgPyBvLnJlY2VpdmVzIDogby5wYXlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjZWl2ZWRBbW91bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5mZWUuYXNzZXRfaWQgPT09IGFtb3VudC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYW1vdW50LmFtb3VudCAtIG8uZmVlLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYW1vdW50LmFtb3VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz17YG9wZXJhdGlvbi5maWxsX29yZGVyXyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQmlkID8gXCJidXlcIiA6IFwic2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hY2NvdW50X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHJlY2VpdmVkQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBhbW91bnQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBwcmljZUJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IHByaWNlUXVvdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG8ub3JkZXJfaWQuc3Vic3RyaW5nKDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmluZFRvQ2hhaW5TdGF0ZS5XcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImdsb2JhbF9wYXJhbWV0ZXJzX3VwZGF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLmdsb2JhbF9wYXJhbWV0ZXJzX3VwZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInZlc3RpbmdfYmFsYW5jZV9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLmNyZWF0b3IpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi52ZXN0aW5nX2JhbGFuY2VfY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17b3BbMV0uYW1vdW50LmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17b3BbMV0uYW1vdW50LmFzc2V0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS5vd25lcil9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidmVzdGluZ19iYWxhbmNlX3dpdGhkcmF3XCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24udmVzdGluZ19iYWxhbmNlX3dpdGhkcmF3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLm93bmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwid29ya2VyX2NyZWF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLndvcmtlcl9jcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ub3duZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogb3BbMV0uZGFpbHlfcGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBcIjEuMy4wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wWzFdLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJiYWxhbmNlX2NsYWltXCI6XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICBvcFsxXS50b3RhbF9jbGFpbWVkLmFtb3VudCA9IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICBvcFsxXS50b3RhbF9jbGFpbWVkLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmJhbGFuY2VfY2xhaW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZGVwb3NpdF90b19hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnRvdGFsX2NsYWltZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImNvbW1pdHRlZV9tZW1iZXJfY3JlYXRlXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24uY29tbWl0dGVlX21lbWJlcl9jcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS5jb21taXR0ZWVfbWVtYmVyX2FjY291bnQpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRyYW5zZmVyX3RvX2JsaW5kXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0uZnJvbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24uc2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e29wWzFdLmFtb3VudC5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e29wWzFdLmFtb3VudC5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidHJhbnNmZXJfZnJvbV9ibGluZFwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLnRvKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5yZWNlaXZlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e29wWzFdLmFtb3VudC5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e29wWzFdLmFtb3VudC5hc3NldF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfY2xhaW1fZmVlc1wiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgb3BbMV0uYW1vdW50X3RvX2NsYWltLmFtb3VudCA9IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICBvcFsxXS5hbW91bnRfdG9fY2xhaW0uYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0uaXNzdWVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJpbmRUb0NoYWluU3RhdGUuV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtvcFsxXS5hbW91bnRfdG9fY2xhaW0uYXNzZXRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7YXNzZXR9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cInRyYW5zYWN0aW9uLmFzc2V0X2NsYWltX2ZlZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFtb3VudF90b19jbGFpbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImJhbGFuY2VfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CaW5kVG9DaGFpblN0YXRlLldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiY3VzdG9tXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24uY3VzdG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfcmVzZXJ2ZVwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X3Jlc2VydmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ucGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYW1vdW50X3RvX3Jlc2VydmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImNvbW1pdHRlZV9tZW1iZXJfdXBkYXRlX2dsb2JhbF9wYXJhbWV0ZXJzXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uY29tbWl0dGVlX21lbWJlcl91cGRhdGVfZ2xvYmFsX3BhcmFtZXRlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIxLjIuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwib3ZlcnJpZGVfdHJhbnNmZXJcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5vdmVycmlkZV90cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImlzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJhY2NvdW50XCIsIHZhbHVlOiBvcFsxXS5mcm9tLCBhcmc6IFwiZnJvbVwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJhY2NvdW50XCIsIHZhbHVlOiBvcFsxXS50bywgYXJnOiBcInRvXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImFtb3VudFwiLCB2YWx1ZTogb3BbMV0uYW1vdW50LCBhcmc6IFwiYW1vdW50XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9zZXR0bGVfY2FuY2VsXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfc2V0dGxlX2NhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImFtb3VudFwiLCB2YWx1ZTogb3BbMV0uYW1vdW50LCBhcmc6IFwiYW1vdW50XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9jbGFpbV9wb29sXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfY2xhaW1fcG9vbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFtb3VudF90b19jbGFpbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfdXBkYXRlX2lzc3VlclwiOlxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X3VwZGF0ZV9pc3N1ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJmcm9tX2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLm5ld19pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ0b19hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYXNzZXRfdG9fdXBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImJpZF9jb2xsYXRlcmFsXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYmlkX2NvbGxhdGVyYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5iaWRkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJiaWRfYWNjb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hZGRpdGlvbmFsX2NvbGxhdGVyYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJjb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmRlYnRfY292ZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlYnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJodGxjX2NyZWF0ZVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGdsb2JhbE9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4wLjBcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZHluR2xvYmFsT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXCIyLjEuMFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tfdGltZSA9IHV0aWxzLmNhbGNfYmxvY2tfdGltZShcbiAgICAgICAgICAgICAgICAgICAgYmxvY2ssXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgZXN0aW1hdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKCFibG9ja190aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrX3RpbWUgPSB1dGlscy5jYWxjX2Jsb2NrX3RpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bkdsb2JhbE9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXN0aW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvcFsxXS5hbW91bnQuYW1vdW50ID0gcGFyc2VGbG9hdChvcFsxXS5hbW91bnQuYW1vdW50KTtcblxuICAgICAgICAgICAgICAgIGxldCBleHBpcnlUaW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgIGV4cGlyeVRpbWUuc2V0VGltZShcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZS5nZXRUaW1lKCkgKyBvcFsxXS5jbGFpbV9wZXJpb2Rfc2Vjb25kcyAqIDEwMDBcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodC10ZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmh0bGNfY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJsb2NrX3BlcmlvZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleHBpcnlUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJmcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0udG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtcIkVzdGltYXRlZFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VzdGltYXRlZCA/IFwiKlwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVtb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiA1LCBjdXJzb3I6IFwiaGVscFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodGxjLnByZWltYWdlX2hhc2hfZXhwbGFuYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRsYy5wcmVpbWFnZV9oYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BbMV0ucHJlaW1hZ2Vfc2l6ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFsxXS5wcmVpbWFnZV9oYXNoWzBdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIik6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFsxXS5wcmVpbWFnZV9oYXNoWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJodGxjX3JlZGVlbVwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodC10ZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmh0bGNfcmVkZWVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5yZWRlZW1lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicmVkZWVtZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaHRsY19pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiaHRsY19pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW1vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDUsIGN1cnNvcjogXCJoZWxwXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0bGMucHJlaW1hZ2VfZXhwbGFuYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiaHRsYy5wcmVpbWFnZVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFsxXS5wcmVpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaHRsY19leHRlbmRcIjpcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0LXRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmh0bGNfZXh0ZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnVwZGF0ZV9pc3N1ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwidXBkYXRlX2lzc3VlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwic2Vjb25kc190b19hZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5zZWNvbmRzX3RvX2FkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaHRsY19pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJodGxjX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJodGxjX3JlZGVlbWVkXCI6XG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodC10ZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5odGxjX3JlZGVlbWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJmcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzFdLmFtb3VudC5hc3NldF9pZCA9PT0gXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmh0bGNfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiaHRsY19pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaHRsY19yZWZ1bmRcIjpcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwid2FybmluZ1wiO1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtdGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uaHRsY19yZWZ1bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmh0bGNfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiaHRsY19pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVuaW1wbGVtZW50ZWQgb3AgJ1wiICsgb3BzW29wWzBdXSArIFwiJzpcIiwgb3ApO1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9ibG9jay8ke2Jsb2NrfWB9PiN7YmxvY2t9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2NvbHVtbiwgY29sb3J9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9uO1xuIiwiaW1wb3J0IHtzYXZlQXN9IGZyb20gXCJmaWxlLXNhdmVyXCI7XG5pbXBvcnQge0NoYWluVHlwZXMgYXMgZ3JhcGhlbmVDaGFpblR5cGVzLCBGZXRjaENoYWlufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCByZXBvcnQgZnJvbSBcImJpdHNoYXJlcy1yZXBvcnRcIjtcbmNvbnN0IHtvcGVyYXRpb25zfSA9IGdyYXBoZW5lQ2hhaW5UeXBlcztcbmNvbnN0IG9wcyA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbnMpO1xuXG5jb25zdCBGVUxMID0gXCJGVUxMXCI7XG5jb25zdCBDT0lOQkFTRSA9IFwiQ09JTkJBU0VcIjtcblxuZXhwb3J0IHtGVUxMLCBDT0lOQkFTRX07XG5cbmNsYXNzIEFjY291bnRIaXN0b3J5RXhwb3J0ZXIge1xuICAgIHBhZChudW1iZXIsIGxlbmd0aCkge1xuICAgICAgICBsZXQgc3RyID0gXCJcIiArIG51bWJlcjtcbiAgICAgICAgd2hpbGUgKHN0ci5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHN0ciA9IFwiMFwiICsgc3RyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZm9ybWF0RGF0ZShkKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoXCIwXCIgKyBkLmdldERhdGUoKSkuc2xpY2UoLTIpICtcbiAgICAgICAgICAgIFwiLlwiICtcbiAgICAgICAgICAgIChcIjBcIiArIChkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICtcbiAgICAgICAgICAgIFwiLlwiICtcbiAgICAgICAgICAgIGQuZ2V0RnVsbFllYXIoKSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAoXCIwXCIgKyBkLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAoXCIwXCIgKyBkLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICtcbiAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgIChcIjBcIiArIGQuZ2V0U2Vjb25kcygpKS5zbGljZSgtMikgK1xuICAgICAgICAgICAgXCIgR01UXCIgK1xuICAgICAgICAgICAgKChkLmdldFRpbWV6b25lT2Zmc2V0KCkgPCAwID8gXCIrXCIgOiBcIi1cIikgKyAvLyBOb3RlIHRoZSByZXZlcnNlZCBzaWduIVxuICAgICAgICAgICAgICAgIHRoaXMucGFkKFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChNYXRoLmZsb29yKE1hdGguYWJzKGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwKSkpLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgdGhpcy5wYWQoTWF0aC5hYnMoZC5nZXRUaW1lem9uZU9mZnNldCgpICUgNjApLCAyKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZW5lcmF0ZUNTVihhY2NvdW50c0xpc3QsIGVzTm9kZSwgZXhwb3J0VHlwZSkge1xuICAgICAgICBsZXQgc3RhcnQgPSAwLFxuICAgICAgICAgICAgbGltaXQgPSAxMDAwMDtcbiAgICAgICAgbGV0IGFjY291bnQgPSBhY2NvdW50c0xpc3RbMF0uZ2V0KFwiaWRcIik7XG4gICAgICAgIGxldCBhY2NvdW50TmFtZSA9IChhd2FpdCBGZXRjaENoYWluKFwiZ2V0QWNjb3VudFwiLCBhY2NvdW50KSkuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgbGV0IHJlY29yZERhdGEgPSB7fTtcbiAgICAgICAgbGV0IGVuZF9uZXh0ID0gZmFsc2U7XG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBmYWxzZTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCB0aGlzLl9nZXRBY2NvdW50SGlzdG9yeUVTKFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGVzTm9kZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZW5kX25leHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXJlcy5sZW5ndGggfHwgZW5kX25leHQpIGJyZWFrO1xuXG4gICAgICAgICAgICBhd2FpdCByZXBvcnQucmVzb2x2ZUJsb2NrVGltZXMocmVzKTtcblxuICAgICAgICAgICAgLyogQmVmb3JlIHBhcnNpbmcgcmVzdWx0cyB3ZSBuZWVkIHRvIGtub3cgdGhlIGFzc2V0IGluZm8gKHByZWNpc2lvbikgKi9cbiAgICAgICAgICAgIGF3YWl0IHJlcG9ydC5yZXNvbHZlQXNzZXRzKHJlcyk7XG5cbiAgICAgICAgICAgIHJlcy5tYXAoZnVuY3Rpb24ocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJ4X2lkID0gcmVjb3JkLmlkO1xuICAgICAgICAgICAgICAgIC8vIGxldCB0aW1lc3RhbXAgPSBhcGkuZ2V0QmxvY2socmVjb3JkLmJsb2NrX251bSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IG9wc1tyZWNvcmQub3AudHlwZV07XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlY29yZC5vcC5kYXRhO1xuXG4gICAgICAgICAgICAgICAgLy8gRGF0YSBpcyBzb21ldGltZXMgbnVsbFxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInZlc3RpbmdfYmFsYW5jZV93aXRoZHJhd1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5hbW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hbW91bnQgPSBkYXRhLmFtb3VudF87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJhbnNmZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYW1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYW1vdW50ID0gZGF0YS5hbW91bnRfO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkRGF0YVt0cnhfaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKHJlY29yZC5ibG9ja190aW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0YXJ0ICs9IHJlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhyZWNvcmREYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJzZWREYXRhO1xuICAgICAgICBpZiAoZXhwb3J0VHlwZSA9PT0gRlVMTCkge1xuICAgICAgICAgICAgcGFyc2VkRGF0YSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiByZWNvcmREYXRhKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0YS5wdXNoKFtpLCByZWNvcmREYXRhW2ldXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWNvcmREYXRhID0gcmVwb3J0Lmdyb3VwRW50cmllcyhyZWNvcmREYXRhKTtcbiAgICAgICAgICAgIHBhcnNlZERhdGEgPSByZXBvcnQucGFyc2VEYXRhKHJlY29yZERhdGEsIGFjY291bnQsIGFjY291bnROYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBibG9iID0gdGhpcy5kYXRhVG9DU1YocGFyc2VkRGF0YSwgZXhwb3J0VHlwZSk7XG5cbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgc2F2ZUFzKFxuICAgICAgICAgICAgYmxvYixcbiAgICAgICAgICAgIFwiZ3JhcGhlbmUtYWNjb3VudC1oaXN0b3J5LVwiICtcbiAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIHRvZGF5LmdldEZ1bGxZZWFyKCkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICAoXCIwXCIgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICAoXCIwXCIgKyB0b2RheS5nZXREYXRlKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIChcIjBcIiArIHRvZGF5LmdldEhvdXJzKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICAgICAgICAgKFwiMFwiICsgdG9kYXkuZ2V0TWludXRlcygpKS5zbGljZSgtMikgK1xuICAgICAgICAgICAgICAgIFwiLmNzdlwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXhwb3J0IGZpbGUgZ2VuZXJhdGVkXCIpO1xuICAgIH1cblxuICAgIF9nZXRBY2NvdW50SGlzdG9yeUVTKGFjY291bnRfaWQsIGxpbWl0LCBzdGFydCwgZXNOb2RlKSB7XG4gICAgICAgIGxldCBlbmRwb2ludCA9IFwiZ2V0X2FjY291bnRfaGlzdG9yeVwiO1xuICAgICAgICBpZiAoZXNOb2RlLmluZGV4T2YoXCJlcy13cmFwcGVyXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgZW5kcG9pbnQgPSBcImVzL2FjY291bnRfaGlzdG9yeVwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBxdWVyeVVybCA9XG4gICAgICAgICAgICBlc05vZGUgK1xuICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgZW5kcG9pbnQgK1xuICAgICAgICAgICAgXCI/YWNjb3VudF9pZD1cIiArXG4gICAgICAgICAgICBhY2NvdW50X2lkICtcbiAgICAgICAgICAgIFwiJmZyb21fPVwiICtcbiAgICAgICAgICAgIHN0YXJ0ICtcbiAgICAgICAgICAgIFwiJnNpemU9XCIgK1xuICAgICAgICAgICAgbGltaXQgK1xuICAgICAgICAgICAgXCImc29ydF9ieT1ibG9ja19kYXRhLmJsb2NrX3RpbWUmdHlwZT1kYXRhJmFnZ19maWVsZD1vcGVyYXRpb25fdHlwZVwiO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlcIiwgcXVlcnlVcmwpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZmV0Y2gocXVlcnlVcmwpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wSGlzdG9yeSA9IHJlc3VsdC5tYXAociA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYW5zd2VyIG1pZ2h0IGRpZmZlciBpZiBvcF9vcGplY3QgaXMgZmlsbGVkIG9yIG5vdFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wX2RhdGEgPSByLm9wZXJhdGlvbl9oaXN0b3J5Lm9wX29iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3BfZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wX2RhdGEgPSBKU09OLnBhcnNlKHIub3BlcmF0aW9uX2hpc3Rvcnkub3ApWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByLmFjY291bnRfaGlzdG9yeS5vcGVyYXRpb25faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogci5vcGVyYXRpb25fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogb3BfZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLm9wZXJhdGlvbl9oaXN0b3J5Lm9wZXJhdGlvbl9yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX251bTogci5ibG9ja19kYXRhLmJsb2NrX251bSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja190aW1lOiByLmJsb2NrX2RhdGEuYmxvY2tfdGltZSArIFwiWlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9wSGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRhdGFUb0NTVihkYXRhLCBleHBvcnRUeXBlKSB7XG4gICAgICAgIGxldCBjc3ZTdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBsaW5lIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChleHBvcnRUeXBlID09PSBDT0lOQkFTRSkge1xuICAgICAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA+PSAxMSAmJiBsaW5lWzEwXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZVsxMF0gPSB0aGlzLmZvcm1hdERhdGUobGluZVsxMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjc3ZTdHJpbmcgKz0gbGluZS5qb2luKFwiLFwiKSArIFwiXFxuXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNzdlN0cmluZyArPSBKU09OLnN0cmluZ2lmeShsaW5lKSArIFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtjc3ZTdHJpbmddLCB7dHlwZTogXCJ0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04XCJ9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRIaXN0b3J5RXhwb3J0ZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=