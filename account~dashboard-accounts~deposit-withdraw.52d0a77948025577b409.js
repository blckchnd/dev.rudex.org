(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[24],{

/***/ 2948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2949);
/* harmony import */ var _paginated_list_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_paginated_list_scss__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var PaginatedList = function (_React$Component) {
    _inherits(PaginatedList, _React$Component);

    function PaginatedList(props) {
        _classCallCheck(this, PaginatedList);

        var _this = _possibleConstructorReturn(this, (PaginatedList.__proto__ || Object.getPrototypeOf(PaginatedList)).call(this, props));

        _this.state = {
            pageSize: props.pageSize
        };
        return _this;
    }

    _createClass(PaginatedList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var pageSize = this.state.pageSize;
            var _props = this.props,
                header = _props.header,
                rows = _props.rows,
                extraRow = _props.extraRow,
                loading = _props.loading;


            var pageSizeOptions = [10, 20, 30, 40, 50, 100].filter(function (item) {
                return item < Math.max(_this2.props.pageSize, rows.length);
            });
            pageSizeOptions.push(Math.max(this.props.pageSize, rows.length));

            var totalColumnsLabel = null;
            if (this.props.label !== null) {
                totalColumnsLabel = function totalColumnsLabel(total) {
                    return counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(_this2.props.label, {
                        count: total
                    });
                };
            } else if (typeof this.props.totalLabel === "string") {
                totalColumnsLabel = function totalColumnsLabel(total) {
                    return counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(_this2.props.totalLabel, {
                        count: total
                    });
                };
            } else if (_typeof(this.props.totalLabel) === "object") {
                totalColumnsLabel = function totalColumnsLabel(total) {
                    return counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate(_this2.props.totalLabel.key, _extends({
                        count: total
                    }, _this2.props.totalLabel.args));
                };
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "paginated-list", style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Table"], {
                    loading: loading,
                    dataSource: rows,
                    uns: true,
                    columns: Array.isArray(header) ? header : [],
                    footer: function footer() {
                        return extraRow ? extraRow : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            "\xA0"
                        );
                    },
                    onChange: this.props.toggleSortOrder,
                    pagination: {
                        showSizeChanger: true,
                        hideOnSinglePage: false,
                        defaultPageSize: pageSize,
                        pageSizeOptions: pageSizeOptions.map(function (o) {
                            return o.toString();
                        }),
                        showTotal: function showTotal(total, range) {
                            return totalColumnsLabel(total);
                        }
                    },
                    rowClassName: this.props.rowClassName == null ? undefined : function (record, index) {
                        return _this2.props.rowClassName(record, index);
                    },
                    rowSelection: this.props.rowSelection
                }),
                this.props.children
            );
        }
    }]);

    return PaginatedList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PaginatedList.defaultProps = {
    rows: [],
    pageSize: 20,

    className: "table",
    extraRow: null,
    style: { paddingBottom: "1rem" },
    loading: false,

    // can be a string (assumes the translation has one argument, total count),
    // or an object, which allows a custom label
    totalLabel: "utility.total_x_items",

    // @deprecated, use totalLabel
    label: null
};
/* harmony default export */ __webpack_exports__["default"] = (PaginatedList);

/***/ }),

/***/ 2949:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentTransactions", function() { return RecentTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionWrapper", function() { return TransactionWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2023);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2024);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(591);
/* harmony import */ var components_Modal_JSONModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2577);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(440);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1914);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(760);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(850);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2948);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2007);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1866);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2167);
/* harmony import */ var _Blockchain_BlockTime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2582);
/* harmony import */ var _Blockchain_OperationAnt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2979);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(745);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1906);
/* harmony import */ var _Utility_PendingBlock__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2980);
/* harmony import */ var _services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2981);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(751);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









//import ps from "perfect-scrollbar";





var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainTypes"].operations;



var ops = Object.keys(operations);








var operation = new _Blockchain_OperationAnt__WEBPACK_IMPORTED_MODULE_17__["default"]();

var Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Select"].Option;



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

var RecentTransactions = function (_React$Component) {
    _inherits(RecentTransactions, _React$Component);

    function RecentTransactions(props) {
        _classCallCheck(this, RecentTransactions);

        // fixme access to ES could be wrapped in a store or something else

        var _this = _possibleConstructorReturn(this, (RecentTransactions.__proto__ || Object.getPrototypeOf(RecentTransactions)).call(this));

        _this.closeJSONModal = function () {
            _this.setState({ visibleId: "" });
        };

        _this.state = {
            limit: props.limit,
            fetchingAccountHistory: false,
            headerHeight: 85,
            filter: "all",
            accountHistoryError: false,
            rows: [],
            showModal: false,
            esNodeCustom: false,
            esNode: api_apiConfig__WEBPACK_IMPORTED_MODULE_22__["settingsAPIs"].ES_WRAPPER_LIST.length > 0 ? api_apiConfig__WEBPACK_IMPORTED_MODULE_22__["settingsAPIs"].ES_WRAPPER_LIST[0].url : null,
            visibleId: ""
        };
        _this.getDataSource = _this.getDataSource.bind(_this);

        _this.useCustom = counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("account.export_modal.use_custom");
        // https://eswrapper.bitshares.eu/ is not alive
        // https://wrapper.elasticsearch.bitshares.ws/ is not alive
        // http://bts-es.clockwork.gr:5000/ is alive
        // https://explorer.bitshares-kibana.info/ is not alive
        // http://185.208.208.184:5000/es/ is alive
        _this.showExportModal = _this.showExportModal.bind(_this);
        _this.hideExportModal = _this.hideExportModal.bind(_this);
        _this.esNodeChange = _this.esNodeChange.bind(_this);
        _this._generateCSV = _this._generateCSV.bind(_this);
        return _this;
    }

    _createClass(RecentTransactions, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!this.props.fullHeight) {
                var t = this.refs.transactions;
                //ps.initialize(t);

                this._setHeaderHeight();
            }
        }
    }, {
        key: "esNodeChange",
        value: function esNodeChange(e) {
            var newValue = null;
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
    }, {
        key: "showExportModal",
        value: function showExportModal() {
            this.setState({
                showModal: true
            });
        }
    }, {
        key: "hideExportModal",
        value: function hideExportModal() {
            this.setState({
                showModal: false
            });
        }
    }, {
        key: "_setHeaderHeight",
        value: function _setHeaderHeight() {
            var height = this.refs.header.offsetHeight;

            if (height !== this.state.headerHeight) {
                this.setState({
                    headerHeight: height
                });
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
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
            for (var key = 0; key < nextProps.accountsList.length; ++key) {
                var npa = nextProps.accountsList[key];
                var nsa = this.props.accountsList[key];
                if (npa && nsa && npa.get("history") !== nsa.get("history")) return true;
            }
            if (this.state.showModal !== nextState.showModal) return true;
            if (this.state.esNode !== nextState.esNode) return true;
            if (this.state.esNodeCustom !== nextState.esNodeCustom) return true;
            if (this.state.visibleId !== nextState.visibleId) return true;
            return false;
        }
    }, {
        key: "_onIncreaseLimit",
        value: function _onIncreaseLimit() {
            this.setState({
                limit: this.state.limit + 30
            });
        }
    }, {
        key: "_getHistory",
        value: function _getHistory(accountsList, filterOp, customFilter) {
            var history = [];
            var seen_ops = new Set();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = accountsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var account = _step.value;

                    if (account) {
                        var h = account.get("history");
                        if (h) history = history.concat(h.toJS().filter(function (op) {
                            return !seen_ops.has(op.id) && seen_ops.add(op.id);
                        }));
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (filterOp) {
                history = history.filter(function (a) {
                    return a.op[0] === operations[filterOp];
                });
            }

            if (customFilter) {
                history = history.filter(function (a) {
                    var finalValue = customFilter.fields.reduce(function (final, filter) {
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
    }, {
        key: "_generateCSV",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(exportType) {
                var AHE;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (false) {}
                                _context.prev = 1;
                                AHE = new _services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_21__["default"]();


                                this.setState({
                                    fetchingAccountHistory: true,
                                    showModal: false
                                });

                                _context.next = 6;
                                return AHE.generateCSV(this.props.accountsList, this.state.esNode, exportType);

                            case 6:

                                this.setState({
                                    fetchingAccountHistory: false,
                                    accountHistoryError: null
                                });
                                _context.next = 13;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context["catch"](1);

                                console.error(_context.t0);
                                this.setState({
                                    fetchingAccountHistory: false,
                                    accountHistoryError: _context.t0,
                                    esNodeCustom: false,
                                    esNode: api_apiConfig__WEBPACK_IMPORTED_MODULE_22__["settingsAPIs"].ES_WRAPPER_LIST[0].url
                                });

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 9]]);
            }));

            function _generateCSV(_x) {
                return _ref.apply(this, arguments);
            }

            return _generateCSV;
        }()
    }, {
        key: "_onChangeFilter",
        value: function _onChangeFilter(value) {
            this.setState({
                filter: value
            });
        }
    }, {
        key: "openJSONModal",
        value: function openJSONModal(id) {
            this.setState({ visibleId: id });
        }
    }, {
        key: "getDataSource",
        value: function getDataSource(o, current_account_id) {
            var _this2 = this;

            var fee = o.op[1].fee;
            var trxTypes = counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("transaction.trxTypes");
            var info = operation.getColumn(o.op, current_account_id, o.block_num, o.result, this.props.marketDirections);
            fee.amount = parseInt(fee.amount, 10);
            var dynGlobalObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainStore"].getObject("2.1.0");
            var lastIrreversibleBlockNum = dynGlobalObject.get("last_irreversible_block_num");
            return {
                key: o.id,
                id: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            className: "cursor-pointer",
                            onClick: function onClick() {
                                return _this2.openJSONModal(o.id);
                            }
                        },
                        o.id,
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Icon"], { type: "file-search" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Modal_JSONModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        visible: this.state.visibleId === o.id,
                        operation: o.op,
                        title: trxTypes[ops[o.op[0]] || ""],
                        hideModal: this.closeJSONModal
                    })
                ),
                type: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"],
                    {
                        className: "inline-block",
                        "data-place": "bottom",
                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("tooltip.show_block", {
                            block: common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(o.block_num, 0)
                        }),
                        to: "/block/" + o.block_num + "/" + o.trx_in_block
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("label", info.color || "info") },
                        trxTypes[ops[o.op[0]]]
                    )
                ),
                info: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            info.column
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { fontSize: 14, paddingTop: 5 } },
                        o.block_num > lastIrreversibleBlockNum ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PendingBlock__WEBPACK_IMPORTED_MODULE_20__["default"], { blockNumber: o.block_num }) : null
                    )
                ),
                fee: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_15__["default"], { amount: fee.amount, asset: fee.asset_id }),
                time: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blockchain_BlockTime__WEBPACK_IMPORTED_MODULE_16__["default"], { block_number: o.block_num, fullDate: true })
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                accountsList = _props.accountsList,
                compactView = _props.compactView,
                filter = _props.filter,
                customFilter = _props.customFilter,
                style = _props.style,
                maxHeight = _props.maxHeight;
            var _state = this.state,
                limit = _state.limit,
                headerHeight = _state.headerHeight;

            var current_account_id = accountsList.length === 1 && accountsList[0] ? accountsList[0].get("id") : null;
            var history = this._getHistory(accountsList, this.props.showFilters && this.state.filter !== "all" ? this.state.filter : filter, customFilter).sort(compareOps);
            var historyCount = history.length;

            style = style ? style : { width: "100%", height: "100%" };

            var options = null;
            if (true) {
                options = ["all", "transfer", "limit_order_create", "limit_order_cancel", "fill_order", "account_create", "account_update", "asset_create", "witness_withdraw_pay", "vesting_balance_withdraw"].map(function (type) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        Option,
                        { value: type, key: type },
                        counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("transaction.trxTypes." + type)
                    );
                });
            }

            var hideFee = false;

            var display_history = history.length ? history.slice(0, limit).map(function (o) {
                return _this3.getDataSource(o, current_account_id);
            }) : [];
            var action = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "total-value", key: "total_value" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { style: { textAlign: "center" } },
                    "\xA0"
                )
            );

            var footer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                    { onClick: function onClick() {
                            return _this3._generateCSV(_services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_21__["FULL"]);
                        }, type: "primary" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.export_modal.full_report" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                    {
                        onClick: function onClick() {
                            return _this3._generateCSV(_services_AccountHistoryExporter__WEBPACK_IMPORTED_MODULE_21__["COINBASE"]);
                        },
                        type: "primary"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.export_modal.coinbase_report" })
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "recent-transactions no-overflow", style: style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Modal"],
                    {
                        wrapClassName: "modal--transaction-confirm",
                        title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.export_modal.title" }),
                        visible: this.state.showModal,
                        id: "transaction_confirm_modal",
                        ref: "modal",
                        footer: footer,
                        overlay: true,
                        onCancel: this.hideExportModal,
                        noCloseBtn: true
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.export_modal.description" })
                    ),
                    this.state.esNodeCustom ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Input"], {
                        type: "text",
                        value: this.state.esNode,
                        onChange: this.esNodeChange
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Select"],
                        {
                            showSearch: true,
                            value: this.state.esNode,
                            onChange: this.esNodeChange,
                            style: {
                                width: "100%"
                            }
                        },
                        api_apiConfig__WEBPACK_IMPORTED_MODULE_22__["settingsAPIs"].ES_WRAPPER_LIST.concat([{ url: this.useCustom }]).map(function (wrapper) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Select"].Option,
                                { key: wrapper.url },
                                wrapper.url
                            );
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "generic-bordered-box" },
                    this.props.dashboard ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { ref: "header" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "block-content-header" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                this.props.title ? this.props.title : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.recent" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "header-selector" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "filter inline-block" },
                            this.props.showFilters ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                                {
                                    placement: "bottom",
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("tooltip.filter_ops")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Select"],
                                    {
                                        style: {
                                            width: "210px"
                                        },
                                        value: this.state.filter,
                                        onChange: this._onChangeFilter.bind(this)
                                    },
                                    options
                                )
                            ) : null,
                            historyCount > 0 && this.props.dashboard && this.state.esNode !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                                {
                                    placement: "bottom",
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("transaction.csv_tip")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        className: "inline-block iconLinkAndLabel",
                                        onClick: this.showExportModal,
                                        style: {
                                            marginLeft: "1rem"
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], { name: "excel", size: "1x" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.download_history" })
                                )
                            ) : null
                        ),
                        this.state.accountHistoryError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "has-error",
                                style: { paddingLeft: "0.75rem" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.history_error" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_12__["default"], {
                        withTransition: true,
                        className: "table table-striped " + (compactView ? "compact" : "") + (this.props.dashboard ? " dashboard-table table-hover" : ""),
                        header: [{
                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.id" }),
                            dataIndex: "id",
                            align: "left",
                            render: function render(item) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { style: { whiteSpace: "nowrap" } },
                                    item
                                );
                            }
                        }, !compactView ? {
                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.type" }),
                            dataIndex: "type",
                            align: "left"
                        } : {}, {
                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.info" }),
                            dataIndex: "info",
                            align: "left",
                            render: function render(item) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        style: {
                                            whiteSpace: "nowrap"
                                        }
                                    },
                                    item
                                );
                            }
                        }, !hideFee ? {
                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.fee" }),
                            dataIndex: "fee",
                            align: "left",
                            render: function render(item) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        style: {
                                            whiteSpace: "nowrap"
                                        }
                                    },
                                    item
                                );
                            }
                        } : {}, {
                            title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                                style: { whiteSpace: "nowrap" },
                                content: "account.transactions.time"
                            }),
                            dataIndex: "time",
                            render: function render(item) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { style: { whiteSpace: "nowrap" } },
                                    item
                                );
                            }
                        }],
                        rows: display_history,
                        label: "utility.total_x_operations",
                        extraRow: action
                    }),
                    this.state.fetchingAccountHistory && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], null)
                )
            );
        }
    }]);

    return RecentTransactions;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RecentTransactions.propTypes = {
    accountsList: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccountsList.isRequired,
    compactView: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
    maxHeight: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
    fullHeight: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
    showFilters: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool
};
RecentTransactions.defaultProps = {
    limit: 25,
    maxHeight: 500,
    fullHeight: false,
    showFilters: false
};

RecentTransactions = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(RecentTransactions);

RecentTransactions = Object(alt_react__WEBPACK_IMPORTED_MODULE_19__["connect"])(RecentTransactions, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__["default"]];
    },
    getProps: function getProps() {
        return {
            marketDirections: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_18__["default"].getState().marketDirections
        };
    }
});

var TransactionWrapper = function (_React$Component2) {
    _inherits(TransactionWrapper, _React$Component2);

    function TransactionWrapper() {
        _classCallCheck(this, TransactionWrapper);

        return _possibleConstructorReturn(this, (TransactionWrapper.__proto__ || Object.getPrototypeOf(TransactionWrapper)).apply(this, arguments));
    }

    _createClass(TransactionWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "wrapper" },
                this.props.children(this.props)
            );
        }
    }]);

    return TransactionWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TransactionWrapper.propTypes = {
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    to: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired,
    fromAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAccount.isRequired
};
TransactionWrapper.defaultProps = {
    asset: "1.3.0"
};

TransactionWrapper = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(TransactionWrapper);



/***/ }),

/***/ 2979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1866);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(591);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2474);
/* harmony import */ var _Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2475);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2024);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2500);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(440);
/* harmony import */ var chain_account_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2496);
/* harmony import */ var chain_account_constants__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(chain_account_constants__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _MemoText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2501);
/* harmony import */ var _ProposedOperation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2497);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2396);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(756);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(607);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


















var ShortObjectId = function ShortObjectId(_ref) {
    var objectId = _ref.objectId;

    if (typeof objectId === "string") {
        var parts = objectId.split(".");
        var length = parts.length;

        if (length > 0) return "#" + parts[length - 1];
    }
    return objectId;
};

var Operation = function () {
    function Operation() {
        _classCallCheck(this, Operation);
    }

    _createClass(Operation, [{
        key: "linkToAccount",
        value: function linkToAccount(name_or_id) {
            if (!name_or_id) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "-"
            );
            return common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].is_object_id(name_or_id) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_5__["default"], { account: name_or_id }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                { to: "/account/" + name_or_id },
                name_or_id
            );
        }
    }, {
        key: "linkToAsset",
        value: function linkToAsset(symbol_or_id) {
            if (!symbol_or_id) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "-"
            );
            return common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].is_object_id(symbol_or_id) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToAssetById__WEBPACK_IMPORTED_MODULE_6__["default"], { asset: symbol_or_id }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                { to: "/asset/" + symbol_or_id },
                symbol_or_id
            );
        }
    }, {
        key: "getColumn",
        value: function getColumn(op, current, block, result, marketDirections) {
            var _this = this;

            var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainTypes"].operations;

            var ops = Object.keys(operations);
            var listings = chain_account_constants__WEBPACK_IMPORTED_MODULE_10___default.a.account_listing;
            var column = null,
                color = "info";
            var memoComponent = null;

            switch (ops[op[0]] // For a list of trx types, see chain_types.coffee
            ) {case "transfer":
                    if (op[1].memo) {
                        memoComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MemoText__WEBPACK_IMPORTED_MODULE_11__["default"], { memo: op[1].memo });
                    }

                    color = "success";
                    op[1].amount.amount = parseFloat(op[1].amount.amount);

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "right-td" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                            }, { type: "account", value: op[1].to, arg: "to" }]
                        }),
                        memoComponent
                    );

                    break;

                case "limit_order_create":
                    color = "warning";
                    var o = op[1];
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
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"].Wrapper,
                            {
                                base: o.min_to_receive.asset_id,
                                quote: o.amount_to_sell.asset_id
                            },
                            function (_ref2) {
                                var base = _ref2.base,
                                    quote = _ref2.quote;

                                var _marketUtils$getMarke = common_market_utils__WEBPACK_IMPORTED_MODULE_13__["default"].getMarketName(base, quote),
                                    marketName = _marketUtils$getMarke.marketName,
                                    first = _marketUtils$getMarke.first,
                                    second = _marketUtils$getMarke.second;

                                var inverted = marketDirections.get(marketName);
                                // const paySymbol = base.get("symbol");
                                // const receiveSymbol = quote.get("symbol");

                                var isBid = o.amount_to_sell.asset_id === (inverted ? first.get("id") : second.get("id"));

                                var priceBase = isBid ? o.amount_to_sell : o.min_to_receive;
                                var priceQuote = isBid ? o.min_to_receive : o.amount_to_sell;
                                var amount = isBid ? op[1].min_to_receive : op[1].amount_to_sell;
                                var orderId = result ? typeof result[1] == "string" ? "#" + result[1].substring(4) : "" : "";

                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                            }
                        )
                    );
                    break;

                case "limit_order_cancel":
                    color = "cancel";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.limit_order_cancel",
                            keys: [{
                                type: "account",
                                value: op[1].fee_paying_account,
                                arg: "account"
                            }],
                            params: {
                                order: op[1].order.substring(4)
                            }
                        })
                    );
                    break;

                case "call_order_update":
                    color = "warning";

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "key_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.create_key"
                        })
                    );
                    break;

                case "account_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.update_account",
                            keys: [{
                                type: "account",
                                value: op[1].account,
                                arg: "account"
                            }]
                        })
                    );

                    break;

                case "account_whitelist":
                    var label = op[1].new_listing === listings.no_listing ? "unlisted_by" : op[1].new_listing === listings.white_listed ? "whitelisted_by" : "blacklisted_by";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "account_upgrade":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: op[1].upgrade_to_lifetime_member ? "operation.lifetime_upgrade_account" : "operation.annual_upgrade_account",
                            keys: [{
                                type: "account",
                                value: op[1].account_to_upgrade,
                                arg: "account"
                            }]
                        })
                    );
                    break;

                case "account_transfer":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "asset_create":
                    color = "warning";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "asset_update":
                case "asset_update_bitasset":
                    color = "warning";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "asset_update_feed_producers":
                    color = "warning";

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "asset_issue":
                    color = "warning";

                    if (op[1].memo) {
                        memoComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MemoText__WEBPACK_IMPORTED_MODULE_11__["default"], { memo: op[1].memo });
                    }

                    op[1].asset_to_issue.amount = parseInt(op[1].asset_to_issue.amount, 10);
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        }),
                        memoComponent
                    );
                    break;

                case "asset_fund_fee_pool":
                    color = "warning";

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "asset_settle":
                    color = "warning";
                    var baseAmount = op[1].amount;
                    var instantSettleCode = 2;
                    if (result && result[0] == instantSettleCode) {
                        var quoteAmount = result[1];
                        column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                            })
                        );
                    } else {
                        column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                            })
                        );
                    }

                    break;

                case "asset_global_settle":
                    color = "warning";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "asset_publish_feed":
                    color = "warning";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "witness_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.witness_create",
                            keys: [{
                                type: "account",
                                value: op[1].witness_account,
                                arg: "account"
                            }]
                        })
                    );

                    break;

                case "witness_update":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.witness_update",
                            keys: [{
                                type: "account",
                                value: op[1].witness_account,
                                arg: "account"
                            }]
                        })
                    );

                    break;

                case "witness_withdraw_pay":
                    console.log("witness_withdraw_pay:", op[1].witness_account);
                    if (current === op[1].witness_account) {
                        column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "transaction.witness_pay"
                            }),
                            "\xA0",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                amount: op[1].amount,
                                asset: "1.3.0"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "transaction.to"
                            }),
                            "\xA0",
                            this.linkToAccount(op[1].witness_account)
                        );
                    } else {
                        column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "transaction.received"
                            }),
                            "\xA0",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                amount: op[1].amount,
                                asset: "1.3.0"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                component: "span",
                                content: "transaction.from"
                            }),
                            "\xA0",
                            this.linkToAccount(op[1].witness_account)
                        );
                    }
                    break;

                case "proposal_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "inline-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                string: "operation.proposal_create",
                                keys: [{
                                    type: "account",
                                    value: op[1].fee_paying_account,
                                    arg: "account"
                                }, {
                                    value: result ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShortObjectId, {
                                        objectId: result[1]
                                    }) : "",
                                    arg: "proposal"
                                }]
                            }),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            op[1].proposed_ops.map(function (o, index) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProposedOperation__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    op: o.op,
                                    key: index,
                                    index: index,
                                    inverted: false,
                                    hideFee: true,
                                    hideOpLabel: true,
                                    hideDate: true,
                                    proposal: true
                                });
                            })
                        )
                    );
                    break;

                case "proposal_update":
                    var fields = ["active_approvals_to_add", "active_approvals_to_remove", "owner_approvals_to_add", "owner_approvals_to_remove", "key_approvals_to_add", "key_approvals_to_remove"];
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                string: "operation.proposal_update",
                                keys: [{
                                    type: "account",
                                    value: op[1].fee_paying_account,
                                    arg: "account"
                                }, {
                                    value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShortObjectId, {
                                        objectId: op[1].proposal
                                    }),
                                    arg: "proposal"
                                }]
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "proposal-update" },
                            fields.map(function (field) {
                                if (op[1][field].length) {
                                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "div",
                                        { key: field },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                                            content: "proposal.updated." + field
                                        }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "ul",
                                            null,
                                            op[1][field].map(function (value) {
                                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    "li",
                                                    { key: value },
                                                    field.startsWith("key") ? value : _this.linkToAccount(value)
                                                );
                                            })
                                        )
                                    );
                                } else return null;
                            })
                        )
                    );
                    break;

                case "proposal_delete":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.proposal_delete",
                            keys: [{
                                type: "account",
                                value: op[1].fee_paying_account,
                                arg: "account"
                            }, {
                                value: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShortObjectId, {
                                    objectId: op[1].proposal
                                }),
                                arg: "proposal"
                            }]
                        })
                    );
                    break;

                case "withdraw_permission_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.withdraw_permission_create"
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].withdraw_from_account),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transaction.to" }),
                        "\xA0",
                        this.linkToAccount(op[1].authorized_account)
                    );
                    break;

                case "withdraw_permission_update":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.withdraw_permission_update"
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].withdraw_from_account),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transaction.to" }),
                        "\xA0",
                        this.linkToAccount(op[1].authorized_account)
                    );
                    break;

                case "withdraw_permission_claim":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.withdraw_permission_claim"
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].withdraw_from_account),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transaction.to" }),
                        "\xA0",
                        this.linkToAccount(op[1].withdraw_to_account)
                    );
                    break;

                case "withdraw_permission_delete":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.withdraw_permission_delete"
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].withdraw_from_account),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "transaction.to" }),
                        "\xA0",
                        this.linkToAccount(op[1].authorized_account)
                    );
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

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"].Wrapper,
                            {
                                base: o.receives.asset_id,
                                quote: o.pays.asset_id
                            },
                            function (_ref3) {
                                var base = _ref3.base,
                                    quote = _ref3.quote;

                                var _marketUtils$getMarke2 = common_market_utils__WEBPACK_IMPORTED_MODULE_13__["default"].getMarketName(base, quote),
                                    marketName = _marketUtils$getMarke2.marketName,
                                    first = _marketUtils$getMarke2.first,
                                    second = _marketUtils$getMarke2.second;

                                var inverted = marketDirections.get(marketName);
                                var isBid = o.pays.asset_id === (inverted ? first.get("id") : second.get("id"));

                                // const paySymbol = base.get("symbol");
                                // const receiveSymbol = quote.get("symbol");
                                var priceBase = isBid ? o.receives : o.pays;
                                var priceQuote = isBid ? o.pays : o.receives;
                                var amount = isBid ? o.receives : o.pays;
                                var receivedAmount = o.fee.asset_id === amount.asset_id ? amount.amount - o.fee.amount : amount.amount;

                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    string: "operation.fill_order_" + (isBid ? "buy" : "sell"),
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
                            }
                        )
                    );
                    break;

                case "global_parameters_update":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.global_parameters_update"
                        })
                    );
                    break;

                case "vesting_balance_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "\xA0",
                        this.linkToAccount(op[1].creator),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.vesting_balance_create"
                        }),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            amount: op[1].amount.amount,
                            asset: op[1].amount.asset_id
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].owner)
                    );
                    break;

                case "vesting_balance_withdraw":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "worker_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "balance_claim":
                    color = "success";
                    op[1].total_claimed.amount = parseInt(op[1].total_claimed.amount, 10);
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "committee_member_create":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.committee_member_create"
                        }),
                        "\xA0",
                        this.linkToAccount(op[1].committee_member_account)
                    );
                    break;

                case "transfer_to_blind":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        this.linkToAccount(op[1].from),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.sent"
                        }),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            amount: op[1].amount.amount,
                            asset: op[1].amount.asset_id
                        })
                    );
                    break;

                case "transfer_from_blind":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        this.linkToAccount(op[1].to),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.received"
                        }),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            amount: op[1].amount.amount,
                            asset: op[1].amount.asset_id
                        })
                    );
                    break;

                case "asset_claim_fees":
                    color = "success";
                    op[1].amount_to_claim.amount = parseInt(op[1].amount_to_claim.amount, 10);
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        this.linkToAccount(op[1].issuer),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"].Wrapper,
                            {
                                asset: op[1].amount_to_claim.asset_id
                            },
                            function (_ref4) {
                                var asset = _ref4.asset;
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                                });
                            }
                        )
                    );
                    break;

                case "custom":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                            component: "span",
                            content: "transaction.custom"
                        })
                    );
                    break;

                case "asset_reserve":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;

                case "committee_member_update_global_parameters":
                    console.log("committee_member_update_global_parameters op:", op);
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.committee_member_update_global_parameters",
                            keys: [{
                                type: "account",
                                value: "1.2.0",
                                arg: "account"
                            }]
                        })
                    );
                    break;

                case "override_transfer":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        string: "operation.override_transfer",
                        keys: [{
                            type: "account",
                            value: op[1].issuer,
                            arg: "issuer"
                        }, { type: "account", value: op[1].from, arg: "from" }, { type: "account", value: op[1].to, arg: "to" }, { type: "amount", value: op[1].amount, arg: "amount" }]
                    });
                    break;

                case "asset_settle_cancel":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        string: "operation.asset_settle_cancel",
                        keys: [{
                            type: "account",
                            value: op[1].account,
                            arg: "account"
                        }, { type: "amount", value: op[1].amount, arg: "amount" }]
                    });
                    break;

                case "asset_claim_pool":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                    var globalObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getObject("2.0.0");
                    var dynGlobalObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__["ChainStore"].getObject("2.1.0");
                    var block_time = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].calc_block_time(block, globalObject, dynGlobalObject);
                    var estimated = false;
                    if (!block_time) {
                        block_time = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].calc_block_time(block, globalObject, dynGlobalObject, true);
                        estimated = true;
                    }

                    op[1].amount.amount = parseFloat(op[1].amount.amount);

                    var expiryTime = new Date();

                    expiryTime.setTime(block_time.getTime() + op[1].claim_period_seconds * 1000);

                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "right-td" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                                { title: "Estimated" },
                                estimated ? "*" : ""
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "memo",
                                style: { paddingTop: 5, cursor: "help" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                                {
                                    placement: "bottom",
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("htlc.preimage_hash_explanation")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { className: "inline-block" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("htlc.preimage_hash") + " (" + op[1].preimage_size + ", " + op[1].preimage_hash[0] + "): " + op[1].preimage_hash[1]
                                )
                            )
                        )
                    );
                    break;
                case "htlc_redeem":
                    color = "success";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "right-td" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                string: "operation.htlc_redeem",
                                keys: [{
                                    type: "account",
                                    value: op[1].redeemer,
                                    arg: "redeemer"
                                }, {
                                    value: op[1].htlc_id,
                                    arg: "htlc_id"
                                }]
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "memo",
                                style: { paddingTop: 5, cursor: "help" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__["Tooltip"],
                                {
                                    placement: "bottom",
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("htlc.preimage_explanation")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { className: "inline-block" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("htlc.preimage") + ": " + op[1].preimage
                                )
                            )
                        )
                    );
                    break;
                case "htlc_extend":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "right-td" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;
                case "htlc_redeemed":
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "right-td" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
                        })
                    );
                    break;
                case "htlc_refund":
                    color = "warning";
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "right-td" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            string: "operation.htlc_refund",
                            keys: [{
                                value: op[1].htlc_id,
                                arg: "htlc_id"
                            }, {
                                type: "account",
                                value: op[1].to,
                                arg: "to"
                            }]
                        })
                    );

                    break;
                default:
                    console.log("unimplemented op '" + ops[op[0]] + "':", op);
                    column = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                            { to: "/block/" + block },
                            "#",
                            block
                        )
                    );
            }
            return { column: column, color: color };
        }
    }]);

    return Operation;
}();

/* harmony default export */ __webpack_exports__["default"] = (Operation);

/***/ }),

/***/ 2980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1912);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(850);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(547);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2023);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2024);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var PendingBlock = function (_React$Component) {
    _inherits(PendingBlock, _React$Component);

    function PendingBlock() {
        _classCallCheck(this, PendingBlock);

        return _possibleConstructorReturn(this, (PendingBlock.__proto__ || Object.getPrototypeOf(PendingBlock)).apply(this, arguments));
    }

    _createClass(PendingBlock, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !immutable__WEBPACK_IMPORTED_MODULE_3___default.a.is(this.props.dynGlobalObject, nextProps.dynGlobalObject);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                blockNumber = _props.blockNumber,
                dynGlobalObject = _props.dynGlobalObject;

            var lastIrreversibleBlockNum = dynGlobalObject.get("last_irreversible_block_num");

            return blockNumber > lastIrreversibleBlockNum ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                " - ",
                "(",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                    content: "operation.pending",
                    blocks: blockNumber - lastIrreversibleBlockNum
                }),
                ")"
            ) : null;
        }
    }]);

    return PendingBlock;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PendingBlock.propTypes = {
    blockNumber: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    dynGlobalObject: _ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainObject.isRequired
};
PendingBlock.defaultProps = {
    dynGlobalObject: "2.1.0"
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(PendingBlock));

/***/ }),

/***/ 2981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULL", function() { return FULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COINBASE", function() { return COINBASE; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2592);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(440);
/* harmony import */ var bitshares_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2982);
/* harmony import */ var bitshares_report__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_report__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["ChainTypes"].operations;

var ops = Object.keys(operations);

var FULL = "FULL";
var COINBASE = "COINBASE";



var AccountHistoryExporter = function () {
    function AccountHistoryExporter() {
        _classCallCheck(this, AccountHistoryExporter);
    }

    _createClass(AccountHistoryExporter, [{
        key: "pad",
        value: function pad(number, length) {
            var str = "" + number;
            while (str.length < length) {
                str = "0" + str;
            }
            return str;
        }
    }, {
        key: "formatDate",
        value: function formatDate(d) {
            return ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2) + " GMT" + ((d.getTimezoneOffset() < 0 ? "+" : "-") + // Note the reversed sign!
            this.pad(parseInt(Math.floor(Math.abs(d.getTimezoneOffset() / 60))), 2) + this.pad(Math.abs(d.getTimezoneOffset() % 60), 2));
        }
    }, {
        key: "generateCSV",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accountsList, esNode, exportType) {
                var start, limit, account, accountName, recordData, res, parsedData, i, blob, today;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                start = 0, limit = 150;
                                account = accountsList[0].get("id");
                                _context.next = 4;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["FetchChain"])("getAccount", account);

                            case 4:
                                accountName = _context.sent.get("name");
                                recordData = {};

                            case 6:
                                if (false) {}

                                _context.next = 9;
                                return this._getAccountHistoryES(account, limit, start, esNode);

                            case 9:
                                res = _context.sent;

                                if (res.length) {
                                    _context.next = 12;
                                    break;
                                }

                                return _context.abrupt("break", 20);

                            case 12:
                                _context.next = 14;
                                return bitshares_report__WEBPACK_IMPORTED_MODULE_2___default.a.resolveBlockTimes(res);

                            case 14:
                                _context.next = 16;
                                return bitshares_report__WEBPACK_IMPORTED_MODULE_2___default.a.resolveAssets(res);

                            case 16:

                                res.map(function (record) {
                                    var trx_id = record.id;
                                    // let timestamp = api.getBlock(record.block_num);
                                    var type = ops[record.op.type];
                                    var data = record.op.data;

                                    // Data is sometimes null
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
                                                    type: type,
                                                    data: data
                                                };
                                        }
                                    }
                                });
                                start += res.length;
                                _context.next = 6;
                                break;

                            case 20:
                                if (Object.keys(recordData).length) {
                                    _context.next = 22;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 22:
                                parsedData = void 0;

                                if (exportType === FULL) {
                                    parsedData = [];
                                    for (i in recordData) {
                                        parsedData.push([i, recordData[i]]);
                                    }
                                } else {
                                    recordData = bitshares_report__WEBPACK_IMPORTED_MODULE_2___default.a.groupEntries(recordData);
                                    parsedData = bitshares_report__WEBPACK_IMPORTED_MODULE_2___default.a.parseData(recordData, account, accountName);
                                }

                                blob = this.dataToCSV(parsedData, exportType);
                                today = new Date();

                                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "bitshares-account-history-" + accountName + "-" + today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + "-" + ("0" + today.getHours()).slice(-2) + ("0" + today.getMinutes()).slice(-2) + ".csv");
                                console.log("Export file generated");

                            case 28:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function generateCSV(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return generateCSV;
        }()
    }, {
        key: "_getAccountHistoryES",
        value: function _getAccountHistoryES(account_id, limit, start, esNode) {
            var endpoint = "get_account_history";
            if (esNode.indexOf("explorer") !== -1 || esNode.indexOf("api") !== -1) {
                endpoint = "es/account_history";
            }
            var queryUrl = esNode + "/" + endpoint + "?account_id=" + account_id + "&from_=" + start + "&size=" + limit + "&sort_by=block_data.block_time&type=data&agg_field=operation_type";

            console.log("query", queryUrl);
            return new Promise(function (resolve, reject) {
                fetch(queryUrl).then(function (res) {
                    return res.json();
                }).then(function (result) {
                    var opHistory = result.map(function (r) {
                        // the answer might differ if op_opject is filled or not
                        var op_data = r.operation_history.op_object;
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
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: "dataToCSV",
        value: function dataToCSV(data, exportType) {
            var csvString = "";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var line = _step.value;

                    if (exportType === COINBASE) {
                        if (line.length >= 11 && line[10] instanceof Date) {
                            line[10] = this.formatDate(line[10]);
                        }
                        csvString += line.join(",") + "\n";
                    } else {
                        csvString += JSON.stringify(line) + "\n";
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return new Blob([csvString], { type: "text/csv;charset=utf-8" });
        }
    }]);

    return AccountHistoryExporter;
}();

/* harmony default export */ __webpack_exports__["default"] = (AccountHistoryExporter);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5kYXNoYm9hcmQtYWNjb3VudHN+ZGVwb3NpdC13aXRoZHJhdy41MmQwYTc3OTQ4MDI1NTc3YjQwOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1BhZ2luYXRlZExpc3QuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvcGFnaW5hdGVkLWxpc3Quc2Nzcz9kNzMzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9BY2NvdW50L1JlY2VudFRyYW5zYWN0aW9ucy5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vT3BlcmF0aW9uQW50LmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1BlbmRpbmdCbG9jay5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9zZXJ2aWNlcy9BY2NvdW50SGlzdG9yeUV4cG9ydGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBcIi4vcGFnaW5hdGVkLWxpc3Quc2Nzc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0ZWRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgcm93czogW10sXHJcbiAgICAgICAgcGFnZVNpemU6IDIwLFxyXG5cclxuICAgICAgICBjbGFzc05hbWU6IFwidGFibGVcIixcclxuICAgICAgICBleHRyYVJvdzogbnVsbCxcclxuICAgICAgICBzdHlsZToge3BhZGRpbmdCb3R0b206IFwiMXJlbVwifSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuXHJcbiAgICAgICAgLy8gY2FuIGJlIGEgc3RyaW5nIChhc3N1bWVzIHRoZSB0cmFuc2xhdGlvbiBoYXMgb25lIGFyZ3VtZW50LCB0b3RhbCBjb3VudCksXHJcbiAgICAgICAgLy8gb3IgYW4gb2JqZWN0LCB3aGljaCBhbGxvd3MgYSBjdXN0b20gbGFiZWxcclxuICAgICAgICB0b3RhbExhYmVsOiBcInV0aWxpdHkudG90YWxfeF9pdGVtc1wiLFxyXG5cclxuICAgICAgICAvLyBAZGVwcmVjYXRlZCwgdXNlIHRvdGFsTGFiZWxcclxuICAgICAgICBsYWJlbDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHByb3BzLnBhZ2VTaXplXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3BhZ2VTaXplfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2hlYWRlciwgcm93cywgZXh0cmFSb3csIGxvYWRpbmd9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MCwgMTAwXS5maWx0ZXIoXHJcbiAgICAgICAgICAgIGl0ZW0gPT4gaXRlbSA8IE1hdGgubWF4KHRoaXMucHJvcHMucGFnZVNpemUsIHJvd3MubGVuZ3RoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcGFnZVNpemVPcHRpb25zLnB1c2goTWF0aC5tYXgodGhpcy5wcm9wcy5wYWdlU2l6ZSwgcm93cy5sZW5ndGgpKTtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsQ29sdW1uc0xhYmVsID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYWJlbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy5sYWJlbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50b3RhbExhYmVsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29sdW1uc0xhYmVsID0gdG90YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLnRvdGFsTGFiZWwsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMudG90YWxMYWJlbCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB0b3RhbENvbHVtbnNMYWJlbCA9IHRvdGFsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVycGFydC50cmFuc2xhdGUodGhpcy5wcm9wcy50b3RhbExhYmVsLmtleSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbCxcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnRvdGFsTGFiZWwuYXJnc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRlZC1saXN0XCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtyb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgIHVuc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e0FycmF5LmlzQXJyYXkoaGVhZGVyKSA/IGhlYWRlciA6IFtdfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17KCkgPT4gKGV4dHJhUm93ID8gZXh0cmFSb3cgOiA8c3Bhbj4mbmJzcDs8L3NwYW4+KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy50b2dnbGVTb3J0T3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPblNpbmdsZVBhZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UGFnZVNpemU6IHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM6IHBhZ2VTaXplT3B0aW9ucy5tYXAobyA9PiBvLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VG90YWw6ICh0b3RhbCwgcmFuZ2UpID0+IHRvdGFsQ29sdW1uc0xhYmVsKHRvdGFsKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcm93Q2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHJlY29yZCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJvd0NsYXNzTmFtZShyZWNvcmQsIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb249e3RoaXMucHJvcHMucm93U2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IEpTT05Nb2RhbCBmcm9tIFwiY29tcG9uZW50cy9Nb2RhbC9KU09OTW9kYWxcIjtcclxuaW1wb3J0IHtJY29uIGFzIEFudEljb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IHtcclxuICAgIENoYWluVHlwZXMgYXMgZ3JhcGhlbmVDaGFpblR5cGVzLFxyXG4gICAgRmV0Y2hDaGFpbixcclxuICAgIENoYWluU3RvcmVcclxufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuLy9pbXBvcnQgcHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcIi4uL1V0aWxpdHkvUGFnaW5hdGVkTGlzdFwiO1xyXG5jb25zdCB7b3BlcmF0aW9uc30gPSBncmFwaGVuZUNoYWluVHlwZXM7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7VG9vbHRpcCwgTW9kYWwsIEJ1dHRvbiwgU2VsZWN0LCBJbnB1dH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5jb25zdCBvcHMgPSBPYmplY3Qua2V5cyhvcGVyYXRpb25zKTtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IEJsb2NrVGltZSBmcm9tIFwiLi4vQmxvY2tjaGFpbi9CbG9ja1RpbWVcIjtcclxuaW1wb3J0IE9wZXJhdGlvbkFudCBmcm9tIFwiLi4vQmxvY2tjaGFpbi9PcGVyYXRpb25BbnRcIjtcclxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcInN0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgUGVuZGluZ0Jsb2NrIGZyb20gXCIuLi9VdGlsaXR5L1BlbmRpbmdCbG9ja1wiO1xyXG5cclxuY29uc3Qgb3BlcmF0aW9uID0gbmV3IE9wZXJhdGlvbkFudCgpO1xyXG5cclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuaW1wb3J0IEFjY291bnRIaXN0b3J5RXhwb3J0ZXIsIHtcclxuICAgIEZVTEwsXHJcbiAgICBDT0lOQkFTRVxyXG59IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9BY2NvdW50SGlzdG9yeUV4cG9ydGVyXCI7XHJcbmltcG9ydCB7c2V0dGluZ3NBUElzfSBmcm9tIFwiYXBpL2FwaUNvbmZpZ1wiO1xyXG5cclxuZnVuY3Rpb24gY29tcGFyZU9wcyhiLCBhKSB7XHJcbiAgICBpZiAoYS5ibG9ja19udW0gPT09IGIuYmxvY2tfbnVtKSB7XHJcbiAgICAgICAgaWYgKGEudHJ4X2luX2Jsb2NrICE9PSBiLnRyeF9pbl9ibG9jaykge1xyXG4gICAgICAgICAgICByZXR1cm4gYS50cnhfaW5fYmxvY2sgLSBiLnRyeF9pbl9ibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhLm9wX2luX3RyeCAhPT0gYi5vcF9pbl90cngpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3BfaW5fdHJ4IC0gYi5vcF9pbl90cng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhLnZpcnR1YWxfb3AgLSBiLnZpcnR1YWxfb3A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBhLmJsb2NrX251bSAtIGIuYmxvY2tfbnVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSZWNlbnRUcmFuc2FjdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY2NvdW50c0xpc3Q6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50c0xpc3QuaXNSZXF1aXJlZCxcclxuICAgICAgICBjb21wYWN0VmlldzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGZ1bGxIZWlnaHQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIHNob3dGaWx0ZXJzOiBQcm9wVHlwZXMuYm9vbFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGxpbWl0OiAyNSxcclxuICAgICAgICBtYXhIZWlnaHQ6IDUwMCxcclxuICAgICAgICBmdWxsSGVpZ2h0OiBmYWxzZSxcclxuICAgICAgICBzaG93RmlsdGVyczogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLyBmaXhtZSBhY2Nlc3MgdG8gRVMgY291bGQgYmUgd3JhcHBlZCBpbiBhIHN0b3JlIG9yIHNvbWV0aGluZyBlbHNlXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxpbWl0OiBwcm9wcy5saW1pdCxcclxuICAgICAgICAgICAgZmV0Y2hpbmdBY2NvdW50SGlzdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICAgIGhlYWRlckhlaWdodDogODUsXHJcbiAgICAgICAgICAgIGZpbHRlcjogXCJhbGxcIixcclxuICAgICAgICAgICAgYWNjb3VudEhpc3RvcnlFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHJvd3M6IFtdLFxyXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBlc05vZGVDdXN0b206IGZhbHNlLFxyXG4gICAgICAgICAgICBlc05vZGU6XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nc0FQSXMuRVNfV1JBUFBFUl9MSVNULmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICA/IHNldHRpbmdzQVBJcy5FU19XUkFQUEVSX0xJU1RbMF0udXJsXHJcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICB2aXNpYmxlSWQ6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0RGF0YVNvdXJjZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVzZUN1c3RvbSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgXCJhY2NvdW50LmV4cG9ydF9tb2RhbC51c2VfY3VzdG9tXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGh0dHBzOi8vZXN3cmFwcGVyLmJpdHNoYXJlcy5ldS8gaXMgbm90IGFsaXZlXHJcbiAgICAgICAgLy8gaHR0cHM6Ly93cmFwcGVyLmVsYXN0aWNzZWFyY2guYml0c2hhcmVzLndzLyBpcyBub3QgYWxpdmVcclxuICAgICAgICAvLyBodHRwOi8vYnRzLWVzLmNsb2Nrd29yay5ncjo1MDAwLyBpcyBhbGl2ZVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZXhwbG9yZXIuYml0c2hhcmVzLWtpYmFuYS5pbmZvLyBpcyBub3QgYWxpdmVcclxuICAgICAgICAvLyBodHRwOi8vMTg1LjIwOC4yMDguMTg0OjUwMDAvZXMvIGlzIGFsaXZlXHJcbiAgICAgICAgdGhpcy5zaG93RXhwb3J0TW9kYWwgPSB0aGlzLnNob3dFeHBvcnRNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGlkZUV4cG9ydE1vZGFsID0gdGhpcy5oaWRlRXhwb3J0TW9kYWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVzTm9kZUNoYW5nZSA9IHRoaXMuZXNOb2RlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVDU1YgPSB0aGlzLl9nZW5lcmF0ZUNTVi5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5mdWxsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy5yZWZzLnRyYW5zYWN0aW9ucztcclxuICAgICAgICAgICAgLy9wcy5pbml0aWFsaXplKHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2V0SGVhZGVySGVpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVzTm9kZUNoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gbnVsbDtcclxuICAgICAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSB0aGlzLnVzZUN1c3RvbSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVzTm9kZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGVzTm9kZUN1c3RvbTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVzTm9kZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dFeHBvcnRNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvd01vZGFsOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUV4cG9ydE1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NldEhlYWRlckhlaWdodCgpIHtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5yZWZzLmhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHQgIT09IHRoaXMuc3RhdGUuaGVhZGVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVySGVpZ2h0OiBoZWlnaHRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50c0xpc3QsXHJcbiAgICAgICAgICAgICAgICBuZXh0UHJvcHMuYWNjb3VudHNMaXN0XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1heEhlaWdodCAhPT0gbmV4dFByb3BzLm1heEhlaWdodCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGVhZGVySGVpZ2h0ICE9PSBuZXh0U3RhdGUuaGVhZGVySGVpZ2h0KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWx0ZXIgIT09IG5leHRTdGF0ZS5maWx0ZXIpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1c3RvbUZpbHRlcikge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXN0b21GaWx0ZXIuZmllbGRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jdXN0b21GaWx0ZXIuZmllbGRzXHJcbiAgICAgICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXN0b21GaWx0ZXIudmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jdXN0b21GaWx0ZXIudmFsdWVzXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1heEhlaWdodCAhPT0gbmV4dFByb3BzLm1heEhlaWdodCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBuZXh0U3RhdGUubGltaXQgIT09IHRoaXMuc3RhdGUubGltaXQgfHxcclxuICAgICAgICAgICAgbmV4dFN0YXRlLmZldGNoaW5nQWNjb3VudEhpc3RvcnkgIT09XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoaW5nQWNjb3VudEhpc3RvcnlcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGZvciAobGV0IGtleSA9IDA7IGtleSA8IG5leHRQcm9wcy5hY2NvdW50c0xpc3QubGVuZ3RoOyArK2tleSkge1xyXG4gICAgICAgICAgICBsZXQgbnBhID0gbmV4dFByb3BzLmFjY291bnRzTGlzdFtrZXldO1xyXG4gICAgICAgICAgICBsZXQgbnNhID0gdGhpcy5wcm9wcy5hY2NvdW50c0xpc3Rba2V5XTtcclxuICAgICAgICAgICAgaWYgKG5wYSAmJiBuc2EgJiYgbnBhLmdldChcImhpc3RvcnlcIikgIT09IG5zYS5nZXQoXCJoaXN0b3J5XCIpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dNb2RhbCAhPT0gbmV4dFN0YXRlLnNob3dNb2RhbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXNOb2RlICE9PSBuZXh0U3RhdGUuZXNOb2RlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lc05vZGVDdXN0b20gIT09IG5leHRTdGF0ZS5lc05vZGVDdXN0b20pIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGVJZCAhPT0gbmV4dFN0YXRlLnZpc2libGVJZCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkluY3JlYXNlTGltaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxpbWl0OiB0aGlzLnN0YXRlLmxpbWl0ICsgMzBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0SGlzdG9yeShhY2NvdW50c0xpc3QsIGZpbHRlck9wLCBjdXN0b21GaWx0ZXIpIHtcclxuICAgICAgICBsZXQgaGlzdG9yeSA9IFtdO1xyXG4gICAgICAgIGxldCBzZWVuX29wcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBmb3IgKGxldCBhY2NvdW50IG9mIGFjY291bnRzTGlzdCkge1xyXG4gICAgICAgICAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGggPSBhY2NvdW50LmdldChcImhpc3RvcnlcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaClcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gaGlzdG9yeS5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0pTKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3AgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNlZW5fb3BzLmhhcyhvcC5pZCkgJiYgc2Vlbl9vcHMuYWRkKG9wLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbHRlck9wKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnkgPSBoaXN0b3J5LmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLm9wWzBdID09PSBvcGVyYXRpb25zW2ZpbHRlck9wXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VzdG9tRmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnkgPSBoaXN0b3J5LmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmaW5hbFZhbHVlID0gY3VzdG9tRmlsdGVyLmZpZWxkcy5yZWR1Y2UoKGZpbmFsLCBmaWx0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXNzZXRfaWRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWwgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLm9wWzFdW1wiYW1vdW50XCJdW2ZpbHRlcl0gPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpbHRlci52YWx1ZXNbZmlsdGVyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEub3BbMV1bZmlsdGVyXSA9PT0gY3VzdG9tRmlsdGVyLnZhbHVlc1tmaWx0ZXJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoaXN0b3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIF9nZW5lcmF0ZUNTVihleHBvcnRUeXBlKSB7XHJcbiAgICAgICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnRpYWxpemluZyBmZXRjaGluZyBvZiBFUyBkYXRhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBBSEUgPSBuZXcgQWNjb3VudEhpc3RvcnlFeHBvcnRlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGluZ0FjY291bnRIaXN0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IEFIRS5nZW5lcmF0ZUNTVihcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudHNMaXN0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lc05vZGUsXHJcbiAgICAgICAgICAgICAgICBleHBvcnRUeXBlXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZldGNoaW5nQWNjb3VudEhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudEhpc3RvcnlFcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZldGNoaW5nQWNjb3VudEhpc3Rvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudEhpc3RvcnlFcnJvcjogZXJyLFxyXG4gICAgICAgICAgICAgICAgZXNOb2RlQ3VzdG9tOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGVzTm9kZTogc2V0dGluZ3NBUElzLkVTX1dSQVBQRVJfTElTVFswXS51cmxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vbkNoYW5nZUZpbHRlcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmaWx0ZXI6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkpTT05Nb2RhbChpZCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Zpc2libGVJZDogaWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUpTT05Nb2RhbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2aXNpYmxlSWQ6IFwiXCJ9KTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0RGF0YVNvdXJjZShvLCBjdXJyZW50X2FjY291bnRfaWQpIHtcclxuICAgICAgICBsZXQgZmVlID0gby5vcFsxXS5mZWU7XHJcbiAgICAgICAgbGV0IHRyeFR5cGVzID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNhY3Rpb24udHJ4VHlwZXNcIik7XHJcbiAgICAgICAgY29uc3QgaW5mbyA9IG9wZXJhdGlvbi5nZXRDb2x1bW4oXHJcbiAgICAgICAgICAgIG8ub3AsXHJcbiAgICAgICAgICAgIGN1cnJlbnRfYWNjb3VudF9pZCxcclxuICAgICAgICAgICAgby5ibG9ja19udW0sXHJcbiAgICAgICAgICAgIG8ucmVzdWx0LFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1hcmtldERpcmVjdGlvbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIGZlZS5hbW91bnQgPSBwYXJzZUludChmZWUuYW1vdW50LCAxMCk7XHJcbiAgICAgICAgY29uc3QgZHluR2xvYmFsT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXCIyLjEuMFwiKTtcclxuICAgICAgICBjb25zdCBsYXN0SXJyZXZlcnNpYmxlQmxvY2tOdW0gPSBkeW5HbG9iYWxPYmplY3QuZ2V0KFxyXG4gICAgICAgICAgICBcImxhc3RfaXJyZXZlcnNpYmxlX2Jsb2NrX251bVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXk6IG8uaWQsXHJcbiAgICAgICAgICAgIGlkOiAoXHJcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9wZW5KU09OTW9kYWwoby5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7by5pZH0gPEFudEljb24gdHlwZT1cImZpbGUtc2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEpTT05Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGVJZCA9PT0gby5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uPXtvLm9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dHJ4VHlwZXNbb3BzW28ub3BbMF1dIHx8IFwiXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMuY2xvc2VKU09OTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHR5cGU6IChcclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlPVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5zaG93X2Jsb2NrXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IHV0aWxzLmZvcm1hdF9udW1iZXIoby5ibG9ja19udW0sIDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdG89e2AvYmxvY2svJHtvLmJsb2NrX251bX0vJHtvLnRyeF9pbl9ibG9ja31gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y25hbWVzKFwibGFiZWxcIiwgaW5mby5jb2xvciB8fCBcImluZm9cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJ4VHlwZXNbb3BzW28ub3BbMF1dXX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGluZm86IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2luZm8uY29sdW1ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6IDE0LCBwYWRkaW5nVG9wOiA1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvLmJsb2NrX251bSA+IGxhc3RJcnJldmVyc2libGVCbG9ja051bSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZW5kaW5nQmxvY2sgYmxvY2tOdW1iZXI9e28uYmxvY2tfbnVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBmZWU6IDxGb3JtYXR0ZWRBc3NldCBhbW91bnQ9e2ZlZS5hbW91bnR9IGFzc2V0PXtmZWUuYXNzZXRfaWR9IC8+LFxyXG4gICAgICAgICAgICB0aW1lOiA8QmxvY2tUaW1lIGJsb2NrX251bWJlcj17by5ibG9ja19udW19IGZ1bGxEYXRlPXt0cnVlfSAvPlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGFjY291bnRzTGlzdCxcclxuICAgICAgICAgICAgY29tcGFjdFZpZXcsXHJcbiAgICAgICAgICAgIGZpbHRlcixcclxuICAgICAgICAgICAgY3VzdG9tRmlsdGVyLFxyXG4gICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtsaW1pdCwgaGVhZGVySGVpZ2h0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRfYWNjb3VudF9pZCA9XHJcbiAgICAgICAgICAgIGFjY291bnRzTGlzdC5sZW5ndGggPT09IDEgJiYgYWNjb3VudHNMaXN0WzBdXHJcbiAgICAgICAgICAgICAgICA/IGFjY291bnRzTGlzdFswXS5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGxldCBoaXN0b3J5ID0gdGhpcy5fZ2V0SGlzdG9yeShcclxuICAgICAgICAgICAgYWNjb3VudHNMaXN0LFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNob3dGaWx0ZXJzICYmIHRoaXMuc3RhdGUuZmlsdGVyICE9PSBcImFsbFwiXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuZmlsdGVyXHJcbiAgICAgICAgICAgICAgICA6IGZpbHRlcixcclxuICAgICAgICAgICAgY3VzdG9tRmlsdGVyXHJcbiAgICAgICAgKS5zb3J0KGNvbXBhcmVPcHMpO1xyXG4gICAgICAgIGxldCBoaXN0b3J5Q291bnQgPSBoaXN0b3J5Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgc3R5bGUgPSBzdHlsZSA/IHN0eWxlIDoge3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn07XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gbnVsbDtcclxuICAgICAgICBpZiAodHJ1ZSB8fCB0aGlzLnByb3BzLnNob3dGaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2ZlclwiLFxyXG4gICAgICAgICAgICAgICAgXCJsaW1pdF9vcmRlcl9jcmVhdGVcIixcclxuICAgICAgICAgICAgICAgIFwibGltaXRfb3JkZXJfY2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgICBcImZpbGxfb3JkZXJcIixcclxuICAgICAgICAgICAgICAgIFwiYWNjb3VudF9jcmVhdGVcIixcclxuICAgICAgICAgICAgICAgIFwiYWNjb3VudF91cGRhdGVcIixcclxuICAgICAgICAgICAgICAgIFwiYXNzZXRfY3JlYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIndpdG5lc3Nfd2l0aGRyYXdfcGF5XCIsXHJcbiAgICAgICAgICAgICAgICBcInZlc3RpbmdfYmFsYW5jZV93aXRoZHJhd1wiXHJcbiAgICAgICAgICAgIF0ubWFwKHR5cGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXt0eXBlfSBrZXk9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNhY3Rpb24udHJ4VHlwZXMuXCIgKyB0eXBlKX1cclxuICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhpZGVGZWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGRpc3BsYXlfaGlzdG9yeSA9IGhpc3RvcnkubGVuZ3RoXHJcbiAgICAgICAgICAgID8gaGlzdG9yeS5zbGljZSgwLCBsaW1pdCkubWFwKG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhU291cmNlKG8sIGN1cnJlbnRfYWNjb3VudF9pZCk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICBsZXQgYWN0aW9uID0gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLXZhbHVlXCIga2V5PVwidG90YWxfdmFsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBmb290ZXIgPSAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuX2dlbmVyYXRlQ1NWKEZVTEwpfSB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuZXhwb3J0X21vZGFsLmZ1bGxfcmVwb3J0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuX2dlbmVyYXRlQ1NWKENPSU5CQVNFKX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5leHBvcnRfbW9kYWwuY29pbmJhc2VfcmVwb3J0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VudC10cmFuc2FjdGlvbnMgbm8tb3ZlcmZsb3dcIiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcENsYXNzTmFtZT1cIm1vZGFsLS10cmFuc2FjdGlvbi1jb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17PFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5leHBvcnRfbW9kYWwudGl0bGVcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cInRyYW5zYWN0aW9uX2NvbmZpcm1fbW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e2Zvb3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhpZGVFeHBvcnRNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBub0Nsb3NlQnRuPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LmV4cG9ydF9tb2RhbC5kZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVzTm9kZUN1c3RvbSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lc05vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lc05vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZXNOb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZXNOb2RlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXR0aW5nc0FQSXMuRVNfV1JBUFBFUl9MSVNULmNvbmNhdChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VybDogdGhpcy51c2VDdXN0b219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKS5tYXAod3JhcHBlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXt3cmFwcGVyLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3cmFwcGVyLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhc2hib2FyZCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5yZWNlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNlbGVjdG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0ZpbHRlcnMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5maWx0ZXJfb3BzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZUZpbHRlci5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGlzdG9yeUNvdW50ID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXNoYm9hcmQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXNOb2RlICE9PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zYWN0aW9uLmNzdl90aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBpY29uTGlua0FuZExhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0V4cG9ydE1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImV4Y2VsXCIgc2l6ZT1cIjF4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuZG93bmxvYWRfaGlzdG9yeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFjY291bnRIaXN0b3J5RXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwLjc1cmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQuaGlzdG9yeV9lcnJvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGVkTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb21wYWN0VmlldyA/IFwiY29tcGFjdFwiIDogXCJcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuZGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiBkYXNoYm9hcmQtdGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYW5zYWN0aW9ucy5pZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY29tcGFjdFZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYW5zYWN0aW9ucy50eXBlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ0eXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYW5zYWN0aW9ucy5pbmZvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpbmZvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaGlkZUZlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudHJhbnNhY3Rpb25zLmZlZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiZmVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2hpdGVTcGFjZTogXCJub3dyYXBcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYWNjb3VudC50cmFuc2FjdGlvbnMudGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwidGltZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3doaXRlU3BhY2U6IFwibm93cmFwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e2Rpc3BsYXlfaGlzdG9yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ1dGlsaXR5LnRvdGFsX3hfb3BlcmF0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhUm93PXthY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmV0Y2hpbmdBY2NvdW50SGlzdG9yeSAmJiA8TG9hZGluZ0luZGljYXRvciAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblJlY2VudFRyYW5zYWN0aW9ucyA9IEJpbmRUb0NoYWluU3RhdGUoUmVjZW50VHJhbnNhY3Rpb25zKTtcclxuXHJcblJlY2VudFRyYW5zYWN0aW9ucyA9IGNvbm5lY3QoXHJcbiAgICBSZWNlbnRUcmFuc2FjdGlvbnMsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1hcmtldERpcmVjdGlvbnM6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXREaXJlY3Rpb25zXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuY2xhc3MgVHJhbnNhY3Rpb25XcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYXNzZXQ6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIHRvOiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGZyb21BY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgYXNzZXQ6IFwiMS4zLjBcIlxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid3JhcHBlclwiPnt0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMucHJvcHMpfTwvc3Bhbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblRyYW5zYWN0aW9uV3JhcHBlciA9IEJpbmRUb0NoYWluU3RhdGUoVHJhbnNhY3Rpb25XcmFwcGVyKTtcclxuXHJcbmV4cG9ydCB7UmVjZW50VHJhbnNhY3Rpb25zLCBUcmFuc2FjdGlvbldyYXBwZXJ9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRBc3NldCBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRBc3NldFwiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IExpbmtUb0FjY291bnRCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb0FjY291bnRCeUlkXCI7XHJcbmltcG9ydCBMaW5rVG9Bc3NldEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQXNzZXRCeUlkXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZVdpdGhMaW5rcyBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2xhdGVXaXRoTGlua3NcIjtcclxuaW1wb3J0IHtDaGFpblR5cGVzIGFzIGdyYXBoZW5lQ2hhaW5UeXBlcywgQ2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBhY2NvdW50X2NvbnN0YW50cyBmcm9tIFwiY2hhaW4vYWNjb3VudF9jb25zdGFudHNcIjtcclxuaW1wb3J0IE1lbW9UZXh0IGZyb20gXCIuL01lbW9UZXh0XCI7XHJcbmltcG9ydCBQcm9wb3NlZE9wZXJhdGlvbiBmcm9tIFwiLi9Qcm9wb3NlZE9wZXJhdGlvblwiO1xyXG5pbXBvcnQgbWFya2V0VXRpbHMgZnJvbSBcImNvbW1vbi9tYXJrZXRfdXRpbHNcIjtcclxuaW1wb3J0IHtUb29sdGlwfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuXHJcbmNvbnN0IFNob3J0T2JqZWN0SWQgPSAoe29iamVjdElkfSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBvYmplY3RJZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gb2JqZWN0SWQuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gcGFydHM7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHJldHVybiBcIiNcIiArIHBhcnRzW2xlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdElkO1xyXG59O1xyXG5cclxuY2xhc3MgT3BlcmF0aW9uIHtcclxuICAgIGxpbmtUb0FjY291bnQobmFtZV9vcl9pZCkge1xyXG4gICAgICAgIGlmICghbmFtZV9vcl9pZCkgcmV0dXJuIDxzcGFuPi08L3NwYW4+O1xyXG4gICAgICAgIHJldHVybiB1dGlscy5pc19vYmplY3RfaWQobmFtZV9vcl9pZCkgPyAoXHJcbiAgICAgICAgICAgIDxMaW5rVG9BY2NvdW50QnlJZCBhY2NvdW50PXtuYW1lX29yX2lkfSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL2FjY291bnQvJHtuYW1lX29yX2lkfWB9PntuYW1lX29yX2lkfTwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmtUb0Fzc2V0KHN5bWJvbF9vcl9pZCkge1xyXG4gICAgICAgIGlmICghc3ltYm9sX29yX2lkKSByZXR1cm4gPHNwYW4+LTwvc3Bhbj47XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmlzX29iamVjdF9pZChzeW1ib2xfb3JfaWQpID8gKFxyXG4gICAgICAgICAgICA8TGlua1RvQXNzZXRCeUlkIGFzc2V0PXtzeW1ib2xfb3JfaWR9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPExpbmsgdG89e2AvYXNzZXQvJHtzeW1ib2xfb3JfaWR9YH0+e3N5bWJvbF9vcl9pZH08L0xpbms+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2x1bW4ob3AsIGN1cnJlbnQsIGJsb2NrLCByZXN1bHQsIG1hcmtldERpcmVjdGlvbnMpIHtcclxuICAgICAgICBjb25zdCB7b3BlcmF0aW9uc30gPSBncmFwaGVuZUNoYWluVHlwZXM7XHJcbiAgICAgICAgbGV0IG9wcyA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbnMpO1xyXG4gICAgICAgIGxldCBsaXN0aW5ncyA9IGFjY291bnRfY29uc3RhbnRzLmFjY291bnRfbGlzdGluZztcclxuICAgICAgICBsZXQgY29sdW1uID0gbnVsbCxcclxuICAgICAgICAgICAgY29sb3IgPSBcImluZm9cIjtcclxuICAgICAgICBsZXQgbWVtb0NvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoXHJcbiAgICAgICAgICAgIG9wc1tvcFswXV0gLy8gRm9yIGEgbGlzdCBvZiB0cnggdHlwZXMsIHNlZSBjaGFpbl90eXBlcy5jb2ZmZWVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2FzZSBcInRyYW5zZmVyXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAob3BbMV0ubWVtbykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbW9Db21wb25lbnQgPSA8TWVtb1RleHQgbWVtbz17b3BbMV0ubWVtb30gLz47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgIG9wWzFdLmFtb3VudC5hbW91bnQgPSBwYXJzZUZsb2F0KG9wWzFdLmFtb3VudC5hbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodC10ZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24udHJhbnNmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mcm9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZnJvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzFdLmFtb3VudC5hc3NldF9pZCA9PT0gXCIxLjMuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZTogXCJhY2NvdW50XCIsIHZhbHVlOiBvcFsxXS50bywgYXJnOiBcInRvXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVtb0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImxpbWl0X29yZGVyX2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcclxuICAgICAgICAgICAgICAgIGxldCBvID0gb3BbMV07XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgbWFya2V0TmFtZSA9IE9QRU4uRVRIX1VTRFxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnZlcnRlZCkgKGRlZmF1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBVU0QgLyBPUEVOLkVUSFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1eSAvIHNlbGwgT1BFTi5FVEhcclxuICAgICAgICAgICAgICAgICAgICBpc0JpZCA9IGFtb3VudF90b19zZWxsLmFzc2V0X3N5bWJvbCA9IFVTRFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudCA9IHRvX3JlY2VpdmVcclxuICAgICAgICAgICAgICAgIGlmIChpbnZlcnRlZClcclxuICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICBPUEVOLkVUSCAvIFVTRFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1eSAvIHNlbGwgVVNEXHJcbiAgICAgICAgICAgICAgICAgICAgaXNCaWQgPSBhbW91bnRfdG9fc2VsbC5hc3NldF9zeW1ib2wgPSBPUEVOLkVUSFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudCA9XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmluZFRvQ2hhaW5TdGF0ZS5XcmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlPXtvLm1pbl90b19yZWNlaXZlLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU9e28uYW1vdW50X3RvX3NlbGwuYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2Jhc2UsIHF1b3RlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gPSBtYXJrZXRVdGlscy5nZXRNYXJrZXROYW1lKGJhc2UsIHF1b3RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZlcnRlZCA9IG1hcmtldERpcmVjdGlvbnMuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwYXlTeW1ib2wgPSBiYXNlLmdldChcInN5bWJvbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCByZWNlaXZlU3ltYm9sID0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0JpZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uYW1vdW50X3RvX3NlbGwuYXNzZXRfaWQgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbnZlcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaXJzdC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWNvbmQuZ2V0KFwiaWRcIikpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VCYXNlID0gaXNCaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvLmFtb3VudF90b19zZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby5taW5fdG9fcmVjZWl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VRdW90ZSA9IGlzQmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5taW5fdG9fcmVjZWl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG8uYW1vdW50X3RvX3NlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gaXNCaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvcFsxXS5taW5fdG9fcmVjZWl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9wWzFdLmFtb3VudF90b19zZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmRlcklkID0gcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHlwZW9mIHJlc3VsdFsxXSA9PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiI1wiICsgcmVzdWx0WzFdLnN1YnN0cmluZyg0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwib3BlcmF0aW9uLmxpbWl0X29yZGVyX2J1eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJvcGVyYXRpb24ubGltaXRfb3JkZXJfc2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnNlbGxlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwcmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogcHJpY2VCYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IHByaWNlUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG9yZGVySWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmluZFRvQ2hhaW5TdGF0ZS5XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW1pdF9vcmRlcl9jYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJjYW5jZWxcIjtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmxpbWl0X29yZGVyX2NhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZlZV9wYXlpbmdfYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogb3BbMV0ub3JkZXIuc3Vic3RyaW5nKDQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJjYWxsX29yZGVyX3VwZGF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5jYWxsX29yZGVyX3VwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZ1bmRpbmdfYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5kZWx0YV9kZWJ0LmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVidFN5bWJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5kZWx0YV9kZWJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVidFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5kZWx0YV9jb2xsYXRlcmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiY29sbGF0ZXJhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwia2V5X2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5jcmVhdGVfa2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF9jcmVhdGVcIjpcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5yZWdfYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ucmVnaXN0cmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJyZWdpc3RyYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibmV3X2FjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF91cGRhdGVcIjpcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLnVwZGF0ZV9hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50X3doaXRlbGlzdFwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID1cclxuICAgICAgICAgICAgICAgICAgICBvcFsxXS5uZXdfbGlzdGluZyA9PT0gbGlzdGluZ3Mubm9fbGlzdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwidW5saXN0ZWRfYnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG9wWzFdLm5ld19saXN0aW5nID09PSBsaXN0aW5ncy53aGl0ZV9saXN0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ3aGl0ZWxpc3RlZF9ieVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmxhY2tsaXN0ZWRfYnlcIjtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPXtcIm9wZXJhdGlvbi5cIiArIGxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hdXRob3JpemluZ19hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibGlzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hY2NvdW50X3RvX2xpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJsaXN0ZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFjY291bnRfdXBncmFkZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzFdLnVwZ3JhZGVfdG9fbGlmZXRpbWVfbWVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJvcGVyYXRpb24ubGlmZXRpbWVfdXBncmFkZV9hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm9wZXJhdGlvbi5hbm51YWxfdXBncmFkZV9hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYWNjb3VudF90b191cGdyYWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF90cmFuc2ZlclwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYWNjb3VudF90cmFuc2ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5uZXdfb3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfY3JlYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwid2FybmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaXNzdWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF91cGRhdGVcIjpcclxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X3VwZGF0ZV9iaXRhc3NldFwiOlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X3VwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmlzc3VlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hc3NldF90b191cGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfdXBkYXRlX2ZlZWRfcHJvZHVjZXJzXCI6XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwid2FybmluZ1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X3VwZGF0ZV9mZWVkX3Byb2R1Y2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmlzc3VlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hc3NldF90b191cGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfaXNzdWVcIjpcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJ3YXJuaW5nXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9wWzFdLm1lbW8pIHtcclxuICAgICAgICAgICAgICAgICAgICBtZW1vQ29tcG9uZW50ID0gPE1lbW9UZXh0IG1lbW89e29wWzFdLm1lbW99IC8+O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9wWzFdLmFzc2V0X3RvX2lzc3VlLmFtb3VudCA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICAgICAgICAgIG9wWzFdLmFzc2V0X3RvX2lzc3VlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAxMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X2lzc3VlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaXNzdWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hc3NldF90b19pc3N1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaXNzdWVfdG9fYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVtb0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfZnVuZF9mZWVfcG9vbFwiOlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF9mdW5kX2ZlZV9wb29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZnJvbV9hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBvcFsxXS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X3NldHRsZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VBbW91bnQgPSBvcFsxXS5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW50U2V0dGxlQ29kZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdFswXSA9PSBpbnN0YW50U2V0dGxlQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlQW1vdW50ID0gcmVzdWx0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X3NldHRsZV9pbnN0YW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmFzZUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2VBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IHF1b3RlQW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfc2V0dGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfZ2xvYmFsX3NldHRsZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmFzc2V0X2dsb2JhbF9zZXR0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5pc3N1ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYXNzZXRfdG9fc2V0dGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5zZXR0bGVfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfcHVibGlzaF9mZWVkXCI6XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwid2FybmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24ucHVibGlzaF9mZWVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ucHVibGlzaGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZlZWQuc2V0dGxlbWVudF9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aXRuZXNzX2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24ud2l0bmVzc19jcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS53aXRuZXNzX2FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwid2l0bmVzc191cGRhdGVcIjpcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLndpdG5lc3NfdXBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ud2l0bmVzc19hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIndpdG5lc3Nfd2l0aGRyYXdfcGF5XCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndpdG5lc3Nfd2l0aGRyYXdfcGF5OlwiLCBvcFsxXS53aXRuZXNzX2FjY291bnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IG9wWzFdLndpdG5lc3NfYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLndpdG5lc3NfcGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17b3BbMV0uYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcIjEuMy4wXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdG5lc3NfYWNjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5yZWNlaXZlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e29wWzFdLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XCIxLjMuMFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24uZnJvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdG5lc3NfYWNjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwicHJvcG9zYWxfY3JlYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLnByb3Bvc2FsX2NyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mZWVfcGF5aW5nX2FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByZXN1bHQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3J0T2JqZWN0SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWQ9e3Jlc3VsdFsxXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByb3Bvc2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BbMV0ucHJvcG9zZWRfb3BzLm1hcCgobywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvcG9zZWRPcGVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wPXtvLm9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGZWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3BMYWJlbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEYXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJwcm9wb3NhbF91cGRhdGVcIjpcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZV9hcHByb3ZhbHNfdG9fYWRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmVfYXBwcm92YWxzX3RvX3JlbW92ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwib3duZXJfYXBwcm92YWxzX3RvX2FkZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwib3duZXJfYXBwcm92YWxzX3RvX3JlbW92ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwia2V5X2FwcHJvdmFsc190b19hZGRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImtleV9hcHByb3ZhbHNfdG9fcmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLnByb3Bvc2FsX3VwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mZWVfcGF5aW5nX2FjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3J0T2JqZWN0SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0SWQ9e29wWzFdLnByb3Bvc2FsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByb3Bvc2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcG9zYWwtdXBkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGRzLm1hcChmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzFdW2ZpZWxkXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmaWVsZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgcHJvcG9zYWwudXBkYXRlZC4ke2ZpZWxkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcFsxXVtmaWVsZF0ubWFwKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGQuc3RhcnRzV2l0aChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmxpbmtUb0FjY291bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInByb3Bvc2FsX2RlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24ucHJvcG9zYWxfZGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZmVlX3BheWluZ19hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcnRPYmplY3RJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdElkPXtvcFsxXS5wcm9wb3NhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJwcm9wb3NhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdfcGVybWlzc2lvbl9jcmVhdGVcIjpcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24ud2l0aGRyYXdfcGVybWlzc2lvbl9jcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS53aXRoZHJhd19mcm9tX2FjY291bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInNwYW5cIiBjb250ZW50PVwidHJhbnNhY3Rpb24udG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS5hdXRob3JpemVkX2FjY291bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd19wZXJtaXNzaW9uX3VwZGF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi53aXRoZHJhd19wZXJtaXNzaW9uX3VwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdGhkcmF3X2Zyb21fYWNjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLmF1dGhvcml6ZWRfYWNjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3X3Blcm1pc3Npb25fY2xhaW1cIjpcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24ud2l0aGRyYXdfcGVybWlzc2lvbl9jbGFpbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdGhkcmF3X2Zyb21fYWNjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdGhkcmF3X3RvX2FjY291bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd19wZXJtaXNzaW9uX2RlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi53aXRoZHJhd19wZXJtaXNzaW9uX2RlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLndpdGhkcmF3X2Zyb21fYWNjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi50b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLmF1dGhvcml6ZWRfYWNjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZpbGxfb3JkZXJcIjpcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJzdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICBvID0gb3BbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIG1hcmtldE5hbWUgPSBPUEVOLkVUSF9VU0RcclxuICAgICAgICAgICAgICAgIGlmICghaW52ZXJ0ZWQpIChkZWZhdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlID0gVVNEIC8gT1BFTi5FVEhcclxuICAgICAgICAgICAgICAgICAgICBidXkgLyBzZWxsIE9QRU4uRVRIXHJcbiAgICAgICAgICAgICAgICAgICAgaXNCaWQgPSBhbW91bnRfdG9fc2VsbC5hc3NldF9zeW1ib2wgPSBVU0RcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQgPSB0b19yZWNlaXZlXHJcbiAgICAgICAgICAgICAgICBpZiAoaW52ZXJ0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAgT1BFTi5FVEggLyBVU0RcclxuICAgICAgICAgICAgICAgICAgICBidXkgLyBzZWxsIFVTRFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQmlkID0gYW1vdW50X3RvX3NlbGwuYXNzZXRfc3ltYm9sID0gT1BFTi5FVEhcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQgPVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7bWFya2V0TmFtZSwgZmlyc3QsIHNlY29uZH0gPSBtYXJrZXRVdGlscy5nZXRNYXJrZXROYW1lKGJhc2UsIHF1b3RlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZlcnRlZCA9IHRoaXMucHJvcHMubWFya2V0RGlyZWN0aW9ucy5nZXQobWFya2V0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcGF5U3ltYm9sID0gYmFzZS5nZXQoXCJzeW1ib2xcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcmVjZWl2ZVN5bWJvbCA9IHF1b3RlLmdldChcInN5bWJvbFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNCaWQgPSBvLmFtb3VudF90b19zZWxsLmFzc2V0X2lkID09PSAoaW52ZXJ0ZWQgPyBmaXJzdC5nZXQoXCJpZFwiKSA6IHNlY29uZC5nZXQoXCJpZFwiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmljZUJhc2UgPSAoaXNCaWQpID8gby5hbW91bnRfdG9fc2VsbCA6IG8ubWluX3RvX3JlY2VpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlUXVvdGUgPSAoaXNCaWQpID8gby5taW5fdG9fcmVjZWl2ZSA6IG8uYW1vdW50X3RvX3NlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW1vdW50ID0gaXNCaWQgPyBvcFsxXS5taW5fdG9fcmVjZWl2ZSA6IG9wWzFdLmFtb3VudF90b19zZWxsO1xyXG4gICAgICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCaW5kVG9DaGFpblN0YXRlLldyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U9e28ucmVjZWl2ZXMuYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZT17by5wYXlzLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtiYXNlLCBxdW90ZX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ID0gbWFya2V0VXRpbHMuZ2V0TWFya2V0TmFtZShiYXNlLCBxdW90ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW52ZXJ0ZWQgPSBtYXJrZXREaXJlY3Rpb25zLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNCaWQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnBheXMuYXNzZXRfaWQgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbnZlcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaXJzdC5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWNvbmQuZ2V0KFwiaWRcIikpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwYXlTeW1ib2wgPSBiYXNlLmdldChcInN5bWJvbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCByZWNlaXZlU3ltYm9sID0gcXVvdGUuZ2V0KFwic3ltYm9sXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmljZUJhc2UgPSBpc0JpZCA/IG8ucmVjZWl2ZXMgOiBvLnBheXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlUXVvdGUgPSBpc0JpZCA/IG8ucGF5cyA6IG8ucmVjZWl2ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IGlzQmlkID8gby5yZWNlaXZlcyA6IG8ucGF5cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjZWl2ZWRBbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmZlZS5hc3NldF9pZCA9PT0gYW1vdW50LmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFtb3VudC5hbW91bnQgLSBvLmZlZS5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYW1vdW50LmFtb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPXtgb3BlcmF0aW9uLmZpbGxfb3JkZXJfJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JpZCA/IFwiYnV5XCIgOiBcInNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFjY291bnRfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogcmVjZWl2ZWRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogYW1vdW50LmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInByaWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBwcmljZUJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogcHJpY2VRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogby5vcmRlcl9pZC5zdWJzdHJpbmcoNClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmluZFRvQ2hhaW5TdGF0ZS5XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJnbG9iYWxfcGFyYW1ldGVyc191cGRhdGVcIjpcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24uZ2xvYmFsX3BhcmFtZXRlcnNfdXBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidmVzdGluZ19iYWxhbmNlX2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubGlua1RvQWNjb3VudChvcFsxXS5jcmVhdG9yKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNhY3Rpb24udmVzdGluZ19iYWxhbmNlX2NyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17b3BbMV0uYW1vdW50LmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtvcFsxXS5hbW91bnQuYXNzZXRfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLm93bmVyKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidmVzdGluZ19iYWxhbmNlX3dpdGhkcmF3XCI6XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi52ZXN0aW5nX2JhbGFuY2Vfd2l0aGRyYXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5vd25lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ3b3JrZXJfY3JlYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi53b3JrZXJfY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogb3BbMV0uZGFpbHlfcGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IFwiMS4zLjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb3BbMV0ubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYmFsYW5jZV9jbGFpbVwiOlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgIG9wWzFdLnRvdGFsX2NsYWltZWQuYW1vdW50ID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgb3BbMV0udG90YWxfY2xhaW1lZC5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5iYWxhbmNlX2NsYWltXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uZGVwb3NpdF90b19hY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS50b3RhbF9jbGFpbWVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJjb21taXR0ZWVfbWVtYmVyX2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5jb21taXR0ZWVfbWVtYmVyX2NyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLmNvbW1pdHRlZV9tZW1iZXJfYWNjb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInRyYW5zZmVyX3RvX2JsaW5kXCI6XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmxpbmtUb0FjY291bnQob3BbMV0uZnJvbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5zZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtvcFsxXS5hbW91bnQuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e29wWzFdLmFtb3VudC5hc3NldF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidHJhbnNmZXJfZnJvbV9ibGluZFwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLnRvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zYWN0aW9uLnJlY2VpdmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtvcFsxXS5hbW91bnQuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e29wWzFdLmFtb3VudC5hc3NldF9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfY2xhaW1fZmVlc1wiOlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgIG9wWzFdLmFtb3VudF90b19jbGFpbS5hbW91bnQgPSBwYXJzZUludChcclxuICAgICAgICAgICAgICAgICAgICBvcFsxXS5hbW91bnRfdG9fY2xhaW0uYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIDEwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5saW5rVG9BY2NvdW50KG9wWzFdLmlzc3Vlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmluZFRvQ2hhaW5TdGF0ZS5XcmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17b3BbMV0uYW1vdW50X3RvX2NsYWltLmFzc2V0X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHthc3NldH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cInRyYW5zYWN0aW9uLmFzc2V0X2NsYWltX2ZlZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYW1vdW50X3RvX2NsYWltLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJiYWxhbmNlX2Ftb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXNzZXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXNzZXQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CaW5kVG9DaGFpblN0YXRlLldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImN1c3RvbVwiOlxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5jdXN0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9yZXNlcnZlXCI6XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF9yZXNlcnZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ucGF5ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFtb3VudF90b19yZXNlcnZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJjb21taXR0ZWVfbWVtYmVyX3VwZGF0ZV9nbG9iYWxfcGFyYW1ldGVyc1wiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb21taXR0ZWVfbWVtYmVyX3VwZGF0ZV9nbG9iYWxfcGFyYW1ldGVycyBvcDpcIixcclxuICAgICAgICAgICAgICAgICAgICBvcFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmNvbW1pdHRlZV9tZW1iZXJfdXBkYXRlX2dsb2JhbF9wYXJhbWV0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIxLjIuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwib3ZlcnJpZGVfdHJhbnNmZXJcIjpcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5vdmVycmlkZV90cmFuc2ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaXNzdWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJpc3N1ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImFjY291bnRcIiwgdmFsdWU6IG9wWzFdLmZyb20sIGFyZzogXCJmcm9tXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwiYWNjb3VudFwiLCB2YWx1ZTogb3BbMV0udG8sIGFyZzogXCJ0b1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlOiBcImFtb3VudFwiLCB2YWx1ZTogb3BbMV0uYW1vdW50LCBhcmc6IFwiYW1vdW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9zZXR0bGVfY2FuY2VsXCI6XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYXNzZXRfc2V0dGxlX2NhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFjY291bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGU6IFwiYW1vdW50XCIsIHZhbHVlOiBvcFsxXS5hbW91bnQsIGFyZzogXCJhbW91bnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X2NsYWltX3Bvb2xcIjpcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF9jbGFpbV9wb29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5pc3N1ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFzc2V0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmFtb3VudF90b19jbGFpbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X3VwZGF0ZV9pc3N1ZXJcIjpcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cIm9wZXJhdGlvbi5hc3NldF91cGRhdGVfaXNzdWVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5pc3N1ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImZyb21fYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5uZXdfaXNzdWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJ0b19hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhc3NldFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hc3NldF90b191cGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImJpZF9jb2xsYXRlcmFsXCI6XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uYmlkX2NvbGxhdGVyYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmJpZGRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiYmlkX2FjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hZGRpdGlvbmFsX2NvbGxhdGVyYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImNvbGxhdGVyYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5kZWJ0X2NvdmVyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlYnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJodGxjX2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2xvYmFsT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoXCIyLjAuMFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGR5bkdsb2JhbE9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KFwiMi4xLjBcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tfdGltZSA9IHV0aWxzLmNhbGNfYmxvY2tfdGltZShcclxuICAgICAgICAgICAgICAgICAgICBibG9jayxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVzdGltYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFibG9ja190aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZSA9IHV0aWxzLmNhbGNfYmxvY2tfdGltZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbE9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHluR2xvYmFsT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBlc3RpbWF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9wWzFdLmFtb3VudC5hbW91bnQgPSBwYXJzZUZsb2F0KG9wWzFdLmFtb3VudC5hbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBleHBpcnlUaW1lID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBleHBpcnlUaW1lLnNldFRpbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZS5nZXRUaW1lKCkgKyBvcFsxXS5jbGFpbV9wZXJpb2Rfc2Vjb25kcyAqIDEwMDBcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtdGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uaHRsY19jcmVhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibG9ja19wZXJpb2RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleHBpcnlUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmZyb20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZnJvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnRvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e1wiRXN0aW1hdGVkXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc3RpbWF0ZWQgPyBcIipcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVtb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDUsIGN1cnNvcjogXCJoZWxwXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodGxjLnByZWltYWdlX2hhc2hfZXhwbGFuYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0bGMucHJlaW1hZ2VfaGFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzFdLnByZWltYWdlX3NpemUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzFdLnByZWltYWdlX2hhc2hbMF0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpOiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcFsxXS5wcmVpbWFnZV9oYXNoWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImh0bGNfcmVkZWVtXCI6XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwic3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtdGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVXaXRoTGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uaHRsY19yZWRlZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0ucmVkZWVtZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicmVkZWVtZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0uaHRsY19pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJodGxjX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiA1LCBjdXJzb3I6IFwiaGVscFwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHRsYy5wcmVpbWFnZV9leHBsYW5hdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImh0bGMucHJlaW1hZ2VcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzFdLnByZWltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImh0bGNfZXh0ZW5kXCI6XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtdGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmh0bGNfZXh0ZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0udXBkYXRlX2lzc3VlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInVwZGF0ZV9pc3N1ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFtb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwic2Vjb25kc190b19hZGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLnNlY29uZHNfdG9fYWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5odGxjX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiaHRsY19pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJodGxjX3JlZGVlbWVkXCI6XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmlnaHQtdGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nPVwib3BlcmF0aW9uLmh0bGNfcmVkZWVtZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS50byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5mcm9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZnJvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbE9mZnNldDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wWzFdLmFtb3VudC5hc3NldF9pZCA9PT0gXCIxLjMuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS5odGxjX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiaHRsY19pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJodGxjX3JlZnVuZFwiOlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIndhcm5pbmdcIjtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IChcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyaWdodC10ZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlV2l0aExpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmc9XCJvcGVyYXRpb24uaHRsY19yZWZ1bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLmh0bGNfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJodGxjX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NvdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXS50byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVuaW1wbGVtZW50ZWQgb3AgJ1wiICsgb3BzW29wWzBdXSArIFwiJzpcIiwgb3ApO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC9ibG9jay8ke2Jsb2NrfWB9PiN7YmxvY2t9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7Y29sdW1uLCBjb2xvcn07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuL0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4vQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5cclxuY2xhc3MgUGVuZGluZ0Jsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYmxvY2tOdW1iZXI6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogXCIyLjEuMFwiXHJcbiAgICB9O1xyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gIUltbXV0YWJsZS5pcyhcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5keW5HbG9iYWxPYmplY3QsXHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5keW5HbG9iYWxPYmplY3RcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7YmxvY2tOdW1iZXIsIGR5bkdsb2JhbE9iamVjdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGxhc3RJcnJldmVyc2libGVCbG9ja051bSA9IGR5bkdsb2JhbE9iamVjdC5nZXQoXHJcbiAgICAgICAgICAgIFwibGFzdF9pcnJldmVyc2libGVfYmxvY2tfbnVtXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gYmxvY2tOdW1iZXIgPiBsYXN0SXJyZXZlcnNpYmxlQmxvY2tOdW0gPyAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge1wiIC0gXCJ9KFxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJvcGVyYXRpb24ucGVuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzPXtibG9ja051bWJlciAtIGxhc3RJcnJldmVyc2libGVCbG9ja051bX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShQZW5kaW5nQmxvY2spO1xyXG4iLCJpbXBvcnQge3NhdmVBc30gZnJvbSBcImZpbGUtc2F2ZXJcIjtcclxuaW1wb3J0IHtDaGFpblR5cGVzIGFzIGdyYXBoZW5lQ2hhaW5UeXBlcywgRmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCByZXBvcnQgZnJvbSBcImJpdHNoYXJlcy1yZXBvcnRcIjtcclxuY29uc3Qge29wZXJhdGlvbnN9ID0gZ3JhcGhlbmVDaGFpblR5cGVzO1xyXG5jb25zdCBvcHMgPSBPYmplY3Qua2V5cyhvcGVyYXRpb25zKTtcclxuXHJcbmNvbnN0IEZVTEwgPSBcIkZVTExcIjtcclxuY29uc3QgQ09JTkJBU0UgPSBcIkNPSU5CQVNFXCI7XHJcblxyXG5leHBvcnQge0ZVTEwsIENPSU5CQVNFfTtcclxuXHJcbmNsYXNzIEFjY291bnRIaXN0b3J5RXhwb3J0ZXIge1xyXG4gICAgcGFkKG51bWJlciwgbGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiXCIgKyBudW1iZXI7XHJcbiAgICAgICAgd2hpbGUgKHN0ci5sZW5ndGggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyID0gXCIwXCIgKyBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZShkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKFwiMFwiICsgZC5nZXREYXRlKCkpLnNsaWNlKC0yKSArXHJcbiAgICAgICAgICAgIFwiLlwiICtcclxuICAgICAgICAgICAgKFwiMFwiICsgKGQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICBcIi5cIiArXHJcbiAgICAgICAgICAgIGQuZ2V0RnVsbFllYXIoKSArXHJcbiAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgKFwiMFwiICsgZC5nZXRIb3VycygpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICBcIjpcIiArXHJcbiAgICAgICAgICAgIChcIjBcIiArIGQuZ2V0U2Vjb25kcygpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICBcIiBHTVRcIiArXHJcbiAgICAgICAgICAgICgoZC5nZXRUaW1lem9uZU9mZnNldCgpIDwgMCA/IFwiK1wiIDogXCItXCIpICsgLy8gTm90ZSB0aGUgcmV2ZXJzZWQgc2lnbiFcclxuICAgICAgICAgICAgICAgIHRoaXMucGFkKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5hYnMoZC5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjApKSksXHJcbiAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgKSArXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZChNYXRoLmFicyhkLmdldFRpbWV6b25lT2Zmc2V0KCkgJSA2MCksIDIpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2VuZXJhdGVDU1YoYWNjb3VudHNMaXN0LCBlc05vZGUsIGV4cG9ydFR5cGUpIHtcclxuICAgICAgICBsZXQgc3RhcnQgPSAwLFxyXG4gICAgICAgICAgICBsaW1pdCA9IDE1MDtcclxuICAgICAgICBsZXQgYWNjb3VudCA9IGFjY291bnRzTGlzdFswXS5nZXQoXCJpZFwiKTtcclxuICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSAoYXdhaXQgRmV0Y2hDaGFpbihcImdldEFjY291bnRcIiwgYWNjb3VudCkpLmdldChcIm5hbWVcIik7XHJcbiAgICAgICAgbGV0IHJlY29yZERhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHRoaXMuX2dldEFjY291bnRIaXN0b3J5RVMoXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50LFxyXG4gICAgICAgICAgICAgICAgbGltaXQsXHJcbiAgICAgICAgICAgICAgICBzdGFydCxcclxuICAgICAgICAgICAgICAgIGVzTm9kZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5sZW5ndGgpIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgcmVwb3J0LnJlc29sdmVCbG9ja1RpbWVzKHJlcyk7XHJcblxyXG4gICAgICAgICAgICAvKiBCZWZvcmUgcGFyc2luZyByZXN1bHRzIHdlIG5lZWQgdG8ga25vdyB0aGUgYXNzZXQgaW5mbyAocHJlY2lzaW9uKSAqL1xyXG4gICAgICAgICAgICBhd2FpdCByZXBvcnQucmVzb2x2ZUFzc2V0cyhyZXMpO1xyXG5cclxuICAgICAgICAgICAgcmVzLm1hcChmdW5jdGlvbihyZWNvcmQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyeF9pZCA9IHJlY29yZC5pZDtcclxuICAgICAgICAgICAgICAgIC8vIGxldCB0aW1lc3RhbXAgPSBhcGkuZ2V0QmxvY2socmVjb3JkLmJsb2NrX251bSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gb3BzW3JlY29yZC5vcC50eXBlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZWNvcmQub3AuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRhIGlzIHNvbWV0aW1lcyBudWxsXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmVzdGluZ19iYWxhbmNlX3dpdGhkcmF3XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hbW91bnQgPSBkYXRhLmFtb3VudF87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmFuc2ZlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYW1vdW50ID0gZGF0YS5hbW91bnRfO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkRGF0YVt0cnhfaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUocmVjb3JkLmJsb2NrX3RpbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdGFydCArPSByZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHJlY29yZERhdGEpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFyc2VkRGF0YTtcclxuICAgICAgICBpZiAoZXhwb3J0VHlwZSA9PT0gRlVMTCkge1xyXG4gICAgICAgICAgICBwYXJzZWREYXRhID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcmVjb3JkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0YS5wdXNoKFtpLCByZWNvcmREYXRhW2ldXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWNvcmREYXRhID0gcmVwb3J0Lmdyb3VwRW50cmllcyhyZWNvcmREYXRhKTtcclxuICAgICAgICAgICAgcGFyc2VkRGF0YSA9IHJlcG9ydC5wYXJzZURhdGEocmVjb3JkRGF0YSwgYWNjb3VudCwgYWNjb3VudE5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJsb2IgPSB0aGlzLmRhdGFUb0NTVihwYXJzZWREYXRhLCBleHBvcnRUeXBlKTtcclxuXHJcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBzYXZlQXMoXHJcbiAgICAgICAgICAgIGJsb2IsXHJcbiAgICAgICAgICAgIFwiYml0c2hhcmVzLWFjY291bnQtaGlzdG9yeS1cIiArXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSArXHJcbiAgICAgICAgICAgICAgICBcIi1cIiArXHJcbiAgICAgICAgICAgICAgICB0b2RheS5nZXRGdWxsWWVhcigpICtcclxuICAgICAgICAgICAgICAgIFwiLVwiICtcclxuICAgICAgICAgICAgICAgIChcIjBcIiArICh0b2RheS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArXHJcbiAgICAgICAgICAgICAgICBcIi1cIiArXHJcbiAgICAgICAgICAgICAgICAoXCIwXCIgKyB0b2RheS5nZXREYXRlKCkpLnNsaWNlKC0yKSArXHJcbiAgICAgICAgICAgICAgICBcIi1cIiArXHJcbiAgICAgICAgICAgICAgICAoXCIwXCIgKyB0b2RheS5nZXRIb3VycygpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICAgICAgKFwiMFwiICsgdG9kYXkuZ2V0TWludXRlcygpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICAgICAgICAgXCIuY3N2XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXhwb3J0IGZpbGUgZ2VuZXJhdGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRBY2NvdW50SGlzdG9yeUVTKGFjY291bnRfaWQsIGxpbWl0LCBzdGFydCwgZXNOb2RlKSB7XHJcbiAgICAgICAgbGV0IGVuZHBvaW50ID0gXCJnZXRfYWNjb3VudF9oaXN0b3J5XCI7XHJcbiAgICAgICAgaWYgKGVzTm9kZS5pbmRleE9mKFwiZXhwbG9yZXJcIikgIT09IC0xIHx8IGVzTm9kZS5pbmRleE9mKFwiYXBpXCIpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBlbmRwb2ludCA9IFwiZXMvYWNjb3VudF9oaXN0b3J5XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBxdWVyeVVybCA9XHJcbiAgICAgICAgICAgIGVzTm9kZSArXHJcbiAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgZW5kcG9pbnQgK1xyXG4gICAgICAgICAgICBcIj9hY2NvdW50X2lkPVwiICtcclxuICAgICAgICAgICAgYWNjb3VudF9pZCArXHJcbiAgICAgICAgICAgIFwiJmZyb21fPVwiICtcclxuICAgICAgICAgICAgc3RhcnQgK1xyXG4gICAgICAgICAgICBcIiZzaXplPVwiICtcclxuICAgICAgICAgICAgbGltaXQgK1xyXG4gICAgICAgICAgICBcIiZzb3J0X2J5PWJsb2NrX2RhdGEuYmxvY2tfdGltZSZ0eXBlPWRhdGEmYWdnX2ZpZWxkPW9wZXJhdGlvbl90eXBlXCI7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlcIiwgcXVlcnlVcmwpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKHF1ZXJ5VXJsKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcEhpc3RvcnkgPSByZXN1bHQubWFwKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYW5zd2VyIG1pZ2h0IGRpZmZlciBpZiBvcF9vcGplY3QgaXMgZmlsbGVkIG9yIG5vdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3BfZGF0YSA9IHIub3BlcmF0aW9uX2hpc3Rvcnkub3Bfb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wX2RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wX2RhdGEgPSBKU09OLnBhcnNlKHIub3BlcmF0aW9uX2hpc3Rvcnkub3ApWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHIuYWNjb3VudF9oaXN0b3J5Lm9wZXJhdGlvbl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogci5vcGVyYXRpb25fdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBvcF9kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIub3BlcmF0aW9uX2hpc3Rvcnkub3BlcmF0aW9uX3Jlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX251bTogci5ibG9ja19kYXRhLmJsb2NrX251bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX3RpbWU6IHIuYmxvY2tfZGF0YS5ibG9ja190aW1lICsgXCJaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcEhpc3RvcnkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YVRvQ1NWKGRhdGEsIGV4cG9ydFR5cGUpIHtcclxuICAgICAgICBsZXQgY3N2U3RyaW5nID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBsaW5lIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGV4cG9ydFR5cGUgPT09IENPSU5CQVNFKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPj0gMTEgJiYgbGluZVsxMF0gaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVsxMF0gPSB0aGlzLmZvcm1hdERhdGUobGluZVsxMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3N2U3RyaW5nICs9IGxpbmUuam9pbihcIixcIikgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3N2U3RyaW5nICs9IEpTT04uc3RyaW5naWZ5KGxpbmUpICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJsb2IoW2NzdlN0cmluZ10sIHt0eXBlOiBcInRleHQvY3N2O2NoYXJzZXQ9dXRmLThcIn0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50SGlzdG9yeUV4cG9ydGVyO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7O0FBa0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBT0E7QUFHQTtBQUFBO0FBR0E7QUFwQkE7QUFzQkE7QUF2QkE7QUEwQkE7Ozs7QUFwRkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBREE7Ozs7Ozs7QUNKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaUJBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUNBO0FBREE7QUFzT0E7QUFDQTtBQUNBO0FBbk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDQTtBQWtDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUlBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBQ0EsNkNBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTs7QUFJQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBSUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUkE7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFXQTtBQUNBO0FBN0NBO0FBK0NBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFJQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFKQTtBQUNBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQVFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBVkE7QUFyQkE7QUF3Q0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFTQTtBQVRBO0FBTkE7QUFvQkE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBT0E7QUFDQTtBQVJBO0FBTkE7QUF6QkE7QUE0Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQTlDQTtBQXNEQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBWkE7QUFnQkE7QUFHQTtBQUNBO0FBTEE7QUFTQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFMQTtBQVFBO0FBaEJBO0FBb0JBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUxBO0FBUUE7QUFoQkE7QUFvQkE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBZEE7QUFpQkE7QUFDQTtBQUNBO0FBMUZBO0FBNkZBO0FBaktBO0FBekNBO0FBOE1BOzs7O0FBbmxCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBMGtCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFDQTtBQVdBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7O0FBZkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBREE7QUFDQTtBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN3FCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVJBO0FBb0JBO0FBckJBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUdBO0FBR0E7QUFDQTtBQUtBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQTFCQTtBQStCQTtBQXJFQTtBQURBO0FBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFUQTtBQURBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWxCQTtBQURBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQURBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQURBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFEQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQURBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBREE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQW9CQTtBQXJCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBYkE7QUFEQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBYkE7QUFEQTtBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQURBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBREE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBREE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFEQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTtBQWZBO0FBa0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFWQTtBQWVBO0FBZkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFEQTtBQU1BO0FBUkE7QUFSQTtBQURBO0FBQUE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBZEE7QUF4QkE7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFEQTtBQUlBO0FBTkE7QUFSQTtBQURBO0FBb0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFVQTtBQWJBO0FBSkE7QUFxQkE7QUFDQTtBQTFCQTtBQXJCQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFEQTtBQUlBO0FBTkE7QUFSQTtBQURBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBUEE7QUFTQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFQQTtBQVNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQVBBO0FBU0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBUEE7QUFTQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUEzQkE7QUFnQ0E7QUE5REE7QUFEQTtBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFiQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBU0E7QUFDQTtBQURBO0FBakJBO0FBREE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQURBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQURBO0FBSEE7QUFIQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBREE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBREE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWxCQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBMUJBO0FBOEJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFOQTtBQUpBO0FBL0JBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBUkE7QUFEQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTkE7QUFKQTtBQWpCQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQWJBO0FBREE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFDQTtBQUZBO0FBdEJBO0FBREE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQURBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUF6OUNBO0FBODlDQTtBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdmhEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUFBO0FBU0E7Ozs7QUFqQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQURBO0FBQ0E7QUFDQTtBQTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBY0E7QUFNQTs7OztBQUVBOzs7Ozs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOztBQUNBOzs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFLQTs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUdBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBV0E7QUFDQTs7Ozs7O0FBR0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==