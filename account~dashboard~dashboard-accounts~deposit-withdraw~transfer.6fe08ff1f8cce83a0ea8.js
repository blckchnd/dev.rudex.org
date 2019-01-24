(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 2434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2435);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TransitionWrapper = function (_React$Component) {
    _inherits(TransitionWrapper, _React$Component);

    function TransitionWrapper() {
        _classCallCheck(this, TransitionWrapper);

        var _this = _possibleConstructorReturn(this, (TransitionWrapper.__proto__ || Object.getPrototypeOf(TransitionWrapper)).call(this));

        _this.state = {
            animateEnter: false
        };

        _this.timer = null;
        return _this;
    }

    _createClass(TransitionWrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.enableAnimation();
        }
    }, {
        key: "resetAnimation",
        value: function resetAnimation() {
            this.setState({
                animateEnter: false
            });

            this.enableAnimation();
        }
    }, {
        key: "enableAnimation",
        value: function enableAnimation() {
            var _this2 = this;

            this.timer = setTimeout(function () {
                if (_this2.timer) {
                    _this2.setState({
                        animateEnter: true
                    });
                }
            }, 2000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.props.children) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.props.component);
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1___default.a,
                    {
                        className: this.props.className,
                        component: this.props.component,
                        transitionName: this.props.transitionName,
                        transitionEnterTimeout: this.props.enterTimeout,
                        transitionEnter: this.state.animateEnter,
                        transitionLeave: false
                    },
                    this.props.children
                );
            }
        }
    }]);

    return TransitionWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TransitionWrapper.defaultProps = {
    component: "span",
    enterTimeout: 2000
};
/* harmony default export */ __webpack_exports__["default"] = (TransitionWrapper);

/***/ }),

/***/ 2541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(848);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2434);
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
            page: 1,
            pageSize: props.pageSize
        };
        return _this;
    }

    _createClass(PaginatedList, [{
        key: "onChange",
        value: function onChange(page, pageSize) {
            this.setState({ page: page, pageSize: pageSize });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                page = _state.page,
                pageSize = _state.pageSize;
            var _props = this.props,
                header = _props.header,
                rows = _props.rows,
                extraRow = _props.extraRow;

            var total = rows.length;

            var currentRows = getRows(page, pageSize);

            function getRows(page, pageSize) {
                var r = [];
                for (var i = (page - 1) * pageSize; i < Math.min(total, page * pageSize); i++) {
                    r.push(rows[i]);
                }
                return r;
            }

            /* Paginated too far or filtered out options without changing the page */
            if (!currentRows.length && total) {
                currentRows = getRows(1, pageSize);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-content", style: this.props.style },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: this.props.className },
                    header ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "thead",
                        null,
                        header
                    ) : null,
                    this.props.withTransition && page === 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_3__["default"],
                        {
                            component: "tbody",
                            transitionName: "newrow"
                        },
                        currentRows,
                        extraRow
                    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        currentRows,
                        extraRow
                    )
                ),
                total > pageSize ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
                    style: {
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        paddingLeft: this.props.leftPadding || null
                    },
                    total: total,
                    showTotal: function showTotal(total) {
                        return counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate(_this2.props.label, {
                            count: total
                        });
                    },
                    pageSize: pageSize,
                    current: page,
                    onChange: this.onChange.bind(this)
                }) : null,
                this.props.children
            );
        }
    }]);

    return PaginatedList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PaginatedList.defaultProps = {
    rows: [],
    pageSize: 15,
    label: "utility.total_x_items",
    className: "table",
    extraRow: null,
    style: { paddingBottom: "1rem" }
};
/* harmony default export */ __webpack_exports__["default"] = (PaginatedList);

/***/ }),

/***/ 2564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentTransactions", function() { return RecentTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionWrapper", function() { return TransactionWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2353);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2341);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1842);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1843);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(568);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(417);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2411);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(784);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(941);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(729);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2541);
/* harmony import */ var bitshares_report__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2565);
/* harmony import */ var bitshares_report__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_report__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1828);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainTypes"].operations;

var alignLeft = { textAlign: "left" };


var ops = Object.keys(operations);

function compareOps(b, a) {
    if (a.block_num === b.block_num) {
        return a.virtual_op - b.virtual_op;
    } else {
        return a.block_num - b.block_num;
    }
}

// function textContent(n) {
//     return n ? `"${n.textContent.replace(/[\s\t\r\n]/gi, " ")}"` : "";
// }

var RecentTransactions = function (_React$Component) {
    _inherits(RecentTransactions, _React$Component);

    function RecentTransactions(props) {
        _classCallCheck(this, RecentTransactions);

        var _this = _possibleConstructorReturn(this, (RecentTransactions.__proto__ || Object.getPrototypeOf(RecentTransactions)).call(this));

        _this.state = {
            limit: props.limit,
            fetchingAccountHistory: false,
            headerHeight: 85,
            filter: "all",
            accountHistoryError: false
        };
        return _this;
    }

    _createClass(RecentTransactions, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!this.props.fullHeight) {
                var t = this.refs.transactions;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default.a.initialize(t);

                this._setHeaderHeight();
            }
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
            if (!common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(this.props.accountsList, nextProps.accountsList)) return true;
            if (this.props.maxHeight !== nextProps.maxHeight) return true;
            if (this.state.headerHeight !== nextState.headerHeight) return true;
            if (this.state.filter !== nextState.filter) return true;
            if (this.props.customFilter) {
                if (!common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(this.props.customFilter.fields, nextProps.customFilter.fields) || !common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(this.props.customFilter.values, nextProps.customFilter.values)) {
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
        key: "_getAccountHistoryES",
        value: function _getAccountHistoryES(account_id, limit, start) {
            var esNode = "https://wrapper.elasticsearch.bitshares.ws";

            console.log("query", esNode + "/get_account_history?account_id=" + account_id + "&from_=" + start + "&size=" + limit + "&sort_by=block_data.block_time&type=data&agg_field=operation_type");
            return new Promise(function (resolve, reject) {
                fetch(esNode + "/get_account_history?account_id=" + account_id + "&from_=" + start + "&size=" + limit + "&sort_by=block_data.block_time&type=data&agg_field=operation_type").then(function (res) {
                    return res.json();
                }).then(function (result) {
                    var ops = result.map(function (r) {
                        console.log(r);
                        return {
                            id: r.account_history.operation_id,
                            op: {
                                type: r.operation_type,
                                data: r.operation_history.op_object
                            },
                            result: JSON.parse(r.operation_history.operation_result),
                            block_num: r.block_data.block_num,
                            block_time: r.block_data.block_time + "Z"
                        };
                    });
                    resolve(ops);
                }).catch(function (err) {
                    console.warn("query failed", err);
                    resolve([]);
                });
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
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var start, limit, account, accountName, recordData, res, parsedData, csvString, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, line, blob, today;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (false) {}
                                this.setState({ fetchingAccountHistory: true });
                                start = 0, limit = 150;
                                account = this.props.accountsList[0].get("id");
                                _context.next = 6;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["FetchChain"])("getAccount", account);

                            case 6:
                                accountName = _context.sent.get("name");
                                recordData = {};

                            case 8:
                                if (false) {}

                                _context.next = 11;
                                return this._getAccountHistoryES(account, limit, start);

                            case 11:
                                res = _context.sent;

                                if (res.length) {
                                    _context.next = 14;
                                    break;
                                }

                                return _context.abrupt("break", 22);

                            case 14:
                                _context.next = 16;
                                return bitshares_report__WEBPACK_IMPORTED_MODULE_14___default.a.resolveBlockTimes(res);

                            case 16:
                                _context.next = 18;
                                return bitshares_report__WEBPACK_IMPORTED_MODULE_14___default.a.resolveAssets(res);

                            case 18:

                                res.map(function (record) {
                                    var trx_id = record.id;
                                    // let timestamp = api.getBlock(record.block_num);
                                    var type = ops[record.op.type];
                                    var data = record.op.data;

                                    switch (type) {
                                        case "vesting_balance_withdraw":
                                            data.amount = data.amount_;
                                            break;

                                        case "transfer":
                                            data.amount = data.amount_;
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
                                });

                                start += res.length;
                                _context.next = 8;
                                break;

                            case 22:
                                if (Object.keys(recordData).length) {
                                    _context.next = 24;
                                    break;
                                }

                                return _context.abrupt("return", this.setState({
                                    fetchingAccountHistory: false,
                                    accountHistoryError: true
                                }));

                            case 24:
                                recordData = bitshares_report__WEBPACK_IMPORTED_MODULE_14___default.a.groupEntries(recordData);
                                parsedData = bitshares_report__WEBPACK_IMPORTED_MODULE_14___default.a.parseData(recordData, account, accountName);
                                csvString = "";
                                _iteratorNormalCompletion2 = true;
                                _didIteratorError2 = false;
                                _iteratorError2 = undefined;
                                _context.prev = 30;

                                for (_iterator2 = parsedData[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    line = _step2.value;

                                    csvString += line.join(",") + "\n";
                                }
                                _context.next = 38;
                                break;

                            case 34:
                                _context.prev = 34;
                                _context.t0 = _context["catch"](30);
                                _didIteratorError2 = true;
                                _iteratorError2 = _context.t0;

                            case 38:
                                _context.prev = 38;
                                _context.prev = 39;

                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }

                            case 41:
                                _context.prev = 41;

                                if (!_didIteratorError2) {
                                    _context.next = 44;
                                    break;
                                }

                                throw _iteratorError2;

                            case 44:
                                return _context.finish(41);

                            case 45:
                                return _context.finish(38);

                            case 46:
                                blob = new Blob([csvString], { type: "text/csv;charset=utf-8" });
                                today = new Date();

                                Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, "bitshares-account-history-" + accountName + "-" + today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + "-" + ("0" + today.getHours()).slice(-2) + ("0" + today.getMinutes()).slice(-2) + ".csv");
                                this.setState({
                                    fetchingAccountHistory: false,
                                    accountHistoryError: null
                                });

                            case 50:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[30, 34, 38, 46], [39,, 41, 45]]);
            }));

            function _generateCSV() {
                return _ref.apply(this, arguments);
            }

            return _generateCSV;
        }()
    }, {
        key: "_onChangeFilter",
        value: function _onChangeFilter(e) {
            this.setState({
                filter: e.target.value
            });
        }
    }, {
        key: "render",
        value: function render() {
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
                        "option",
                        { value: type, key: type },
                        counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("transaction.trxTypes." + type)
                    );
                });
            }

            var display_history = history.length ? history.slice(0, limit).map(function (o) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    includeOperationId: true,
                    operationId: o.id,
                    style: alignLeft,
                    key: o.id,
                    op: o.op,
                    result: o.result,
                    txIndex: o.trx_in_block,
                    block: o.block_num,
                    current: current_account_id,
                    hideFee: true,
                    inverted: false,
                    hideOpLabel: compactView,
                    fullDate: true
                });
            }) : [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { key: "no_recent" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { colSpan: compactView ? "2" : "3" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "operation.no_recent" })
                )
            )];
            var action = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { className: "total-value", key: "total_value" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "center" } },
                    historyCount > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            {
                                className: "inline-block",
                                onClick: this._generateCSV.bind(this),
                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("transaction.csv_tip"),
                                "data-place": "bottom"
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                name: "excel",
                                title: "icons.excel",
                                className: "icon-14px"
                            })
                        )
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "column-hide-tiny" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { style: { textAlign: "center" } },
                    "\xA0",
                    this.props.showMore && historyCount > this.props.limit || 20 && limit < historyCount ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        { onClick: this._onIncreaseLimit.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            name: "chevron-down",
                            title: "icons.chevron_down.transactions",
                            className: "icon-14px"
                        })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "recent-transactions no-overflow", style: style },
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
                            { className: "selector" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: classnames__WEBPACK_IMPORTED_MODULE_11___default()("inline-block") },
                                this.props.showFilters ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "select",
                                    {
                                        "data-place": "left",
                                        "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.filter_ops"),
                                        style: { paddingTop: 5, width: "auto" },
                                        className: "bts-select no-margin",
                                        value: this.state.filter,
                                        onChange: this._onChangeFilter.bind(this)
                                    },
                                    options
                                ) : null
                            )
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "box-content grid-block no-margin",
                            style: !this.props.fullHeight ? {
                                maxHeight: maxHeight - headerHeight
                            } : null,
                            ref: "transactions"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_13__["default"], {
                            withTransition: true,
                            className: "table table-striped " + (compactView ? "compact" : "") + (this.props.dashboard ? " dashboard-table table-hover" : ""),
                            header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "tr",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    {
                                        className: "column-hide-tiny",
                                        style: alignLeft
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.id" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    {
                                        className: "column-hide-tiny",
                                        style: alignLeft
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.type" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: alignLeft },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.info" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.time" })
                                )
                            ),
                            rows: display_history,
                            label: "utility.total_x_operations",
                            extraRow: action
                        })
                    ),
                    this.state.fetchingAccountHistory && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__["default"], null)
                )
            );
        }
    }]);

    return RecentTransactions;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RecentTransactions.propTypes = {
    accountsList: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccountsList.isRequired,
    compactView: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
    maxHeight: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
    fullHeight: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
    showFilters: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool
};
RecentTransactions.defaultProps = {
    limit: 25,
    maxHeight: 500,
    fullHeight: false,
    showFilters: false
};

RecentTransactions = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(RecentTransactions);

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
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAsset.isRequired,
    to: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired,
    fromAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__["default"].ChainAccount.isRequired
};
TransactionWrapper.defaultProps = {
    asset: "1.3.0"
};

TransactionWrapper = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(TransactionWrapper);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5kYXNoYm9hcmR+ZGFzaGJvYXJkLWFjY291bnRzfmRlcG9zaXQtd2l0aGRyYXd+dHJhbnNmZXIuNmZlMDhmZjFmOGNjZTgzYTBlYTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUGFnaW5hdGVkTGlzdC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb25Hcm91cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29tcG9uZW50OiBcInNwYW5cIixcbiAgICAgICAgZW50ZXJUaW1lb3V0OiAyMDAwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbmltYXRlRW50ZXI6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgcmVzZXRBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbigpO1xuICAgIH1cblxuICAgIGVuYWJsZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXt0aGlzLnByb3BzLmNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9e3RoaXMucHJvcHMudHJhbnNpdGlvbk5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9e3RoaXMucHJvcHMuZW50ZXJUaW1lb3V0fVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXI9e3RoaXMuc3RhdGUuYW5pbWF0ZUVudGVyfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtQYWdpbmF0aW9ufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFRyYW5zaXRpb25XcmFwcGVyIGZyb20gXCIuLi9VdGlsaXR5L1RyYW5zaXRpb25XcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRlZExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwcm9wcy5wYWdlU2l6ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHJvd3M6IFtdLFxuICAgICAgICBwYWdlU2l6ZTogMTUsXG4gICAgICAgIGxhYmVsOiBcInV0aWxpdHkudG90YWxfeF9pdGVtc1wiLFxuICAgICAgICBjbGFzc05hbWU6IFwidGFibGVcIixcbiAgICAgICAgZXh0cmFSb3c6IG51bGwsXG4gICAgICAgIHN0eWxlOiB7cGFkZGluZ0JvdHRvbTogXCIxcmVtXCJ9XG4gICAgfTtcblxuICAgIG9uQ2hhbmdlKHBhZ2UsIHBhZ2VTaXplKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BhZ2UsIHBhZ2VTaXplfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7cGFnZSwgcGFnZVNpemV9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qge2hlYWRlciwgcm93cywgZXh0cmFSb3d9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdG90YWwgPSByb3dzLmxlbmd0aDtcblxuICAgICAgICBsZXQgY3VycmVudFJvd3MgPSBnZXRSb3dzKHBhZ2UsIHBhZ2VTaXplKTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRSb3dzKHBhZ2UsIHBhZ2VTaXplKSB7XG4gICAgICAgICAgICBsZXQgciA9IFtdO1xuICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICB2YXIgaSA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcbiAgICAgICAgICAgICAgICBpIDwgTWF0aC5taW4odG90YWwsIHBhZ2UgKiBwYWdlU2l6ZSk7XG4gICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByLnB1c2gocm93c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFBhZ2luYXRlZCB0b28gZmFyIG9yIGZpbHRlcmVkIG91dCBvcHRpb25zIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHBhZ2UgKi9cbiAgICAgICAgaWYgKCFjdXJyZW50Um93cy5sZW5ndGggJiYgdG90YWwpIHtcbiAgICAgICAgICAgIGN1cnJlbnRSb3dzID0gZ2V0Um93cygxLCBwYWdlU2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICB7aGVhZGVyID8gPHRoZWFkPntoZWFkZXJ9PC90aGVhZD4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy53aXRoVHJhbnNpdGlvbiAmJiBwYWdlID09PSAxID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25XcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwidGJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwibmV3cm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFJvd3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2V4dHJhUm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFJvd3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2V4dHJhUm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICAgICAge3RvdGFsID4gcGFnZVNpemUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGlzLnByb3BzLmxlZnRQYWRkaW5nIHx8IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VG90YWw9e3RvdGFsID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKHRoaXMucHJvcHMubGFiZWwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge3NhdmVBc30gZnJvbSBcImZpbGUtc2F2ZXJcIjtcbmltcG9ydCBPcGVyYXRpb24gZnJvbSBcIi4uL0Jsb2NrY2hhaW4vT3BlcmF0aW9uXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IHtDaGFpblR5cGVzIGFzIGdyYXBoZW5lQ2hhaW5UeXBlcywgRmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgcHMgZnJvbSBcInBlcmZlY3Qtc2Nyb2xsYmFyXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUGFnaW5hdGVkTGlzdCBmcm9tIFwiLi4vVXRpbGl0eS9QYWdpbmF0ZWRMaXN0XCI7XG5jb25zdCB7b3BlcmF0aW9uc30gPSBncmFwaGVuZUNoYWluVHlwZXM7XG5jb25zdCBhbGlnbkxlZnQgPSB7dGV4dEFsaWduOiBcImxlZnRcIn07XG5pbXBvcnQgcmVwb3J0IGZyb20gXCJiaXRzaGFyZXMtcmVwb3J0XCI7XG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xuY29uc3Qgb3BzID0gT2JqZWN0LmtleXMob3BlcmF0aW9ucyk7XG5cbmZ1bmN0aW9uIGNvbXBhcmVPcHMoYiwgYSkge1xuICAgIGlmIChhLmJsb2NrX251bSA9PT0gYi5ibG9ja19udW0pIHtcbiAgICAgICAgcmV0dXJuIGEudmlydHVhbF9vcCAtIGIudmlydHVhbF9vcDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYS5ibG9ja19udW0gLSBiLmJsb2NrX251bTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRleHRDb250ZW50KG4pIHtcbi8vICAgICByZXR1cm4gbiA/IGBcIiR7bi50ZXh0Q29udGVudC5yZXBsYWNlKC9bXFxzXFx0XFxyXFxuXS9naSwgXCIgXCIpfVwiYCA6IFwiXCI7XG4vLyB9XG5cbmNsYXNzIFJlY2VudFRyYW5zYWN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudHNMaXN0OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudHNMaXN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGNvbXBhY3RWaWV3OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIG1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgZnVsbEhlaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHNob3dGaWx0ZXJzOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBsaW1pdDogMjUsXG4gICAgICAgIG1heEhlaWdodDogNTAwLFxuICAgICAgICBmdWxsSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgc2hvd0ZpbHRlcnM6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsaW1pdDogcHJvcHMubGltaXQsXG4gICAgICAgICAgICBmZXRjaGluZ0FjY291bnRIaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIGhlYWRlckhlaWdodDogODUsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiYWxsXCIsXG4gICAgICAgICAgICBhY2NvdW50SGlzdG9yeUVycm9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuZnVsbEhlaWdodCkge1xuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnJlZnMudHJhbnNhY3Rpb25zO1xuICAgICAgICAgICAgcHMuaW5pdGlhbGl6ZSh0KTtcblxuICAgICAgICAgICAgdGhpcy5fc2V0SGVhZGVySGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2V0SGVhZGVySGVpZ2h0KCkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5yZWZzLmhlYWRlci5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGhlaWdodCAhPT0gdGhpcy5zdGF0ZS5oZWFkZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGhlYWRlckhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50c0xpc3QsXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnRzTGlzdFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF4SGVpZ2h0ICE9PSBuZXh0UHJvcHMubWF4SGVpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGVhZGVySGVpZ2h0ICE9PSBuZXh0U3RhdGUuaGVhZGVySGVpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyICE9PSBuZXh0U3RhdGUuZmlsdGVyKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VzdG9tRmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1c3RvbUZpbHRlci5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jdXN0b21GaWx0ZXIuZmllbGRzXG4gICAgICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXN0b21GaWx0ZXIudmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICBuZXh0UHJvcHMuY3VzdG9tRmlsdGVyLnZhbHVlc1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF4SGVpZ2h0ICE9PSBuZXh0UHJvcHMubWF4SGVpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFN0YXRlLmxpbWl0ICE9PSB0aGlzLnN0YXRlLmxpbWl0IHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuZmV0Y2hpbmdBY2NvdW50SGlzdG9yeSAhPT1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoaW5nQWNjb3VudEhpc3RvcnlcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGZvciAobGV0IGtleSA9IDA7IGtleSA8IG5leHRQcm9wcy5hY2NvdW50c0xpc3QubGVuZ3RoOyArK2tleSkge1xuICAgICAgICAgICAgbGV0IG5wYSA9IG5leHRQcm9wcy5hY2NvdW50c0xpc3Rba2V5XTtcbiAgICAgICAgICAgIGxldCBuc2EgPSB0aGlzLnByb3BzLmFjY291bnRzTGlzdFtrZXldO1xuICAgICAgICAgICAgaWYgKG5wYSAmJiBuc2EgJiYgbnBhLmdldChcImhpc3RvcnlcIikgIT09IG5zYS5nZXQoXCJoaXN0b3J5XCIpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBfb25JbmNyZWFzZUxpbWl0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxpbWl0OiB0aGlzLnN0YXRlLmxpbWl0ICsgMzBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldEFjY291bnRIaXN0b3J5RVMoYWNjb3VudF9pZCwgbGltaXQsIHN0YXJ0KSB7XG4gICAgICAgIHZhciBlc05vZGUgPSBcImh0dHBzOi8vd3JhcHBlci5lbGFzdGljc2VhcmNoLmJpdHNoYXJlcy53c1wiO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCJxdWVyeVwiLFxuICAgICAgICAgICAgZXNOb2RlICtcbiAgICAgICAgICAgICAgICBcIi9nZXRfYWNjb3VudF9oaXN0b3J5P2FjY291bnRfaWQ9XCIgK1xuICAgICAgICAgICAgICAgIGFjY291bnRfaWQgK1xuICAgICAgICAgICAgICAgIFwiJmZyb21fPVwiICtcbiAgICAgICAgICAgICAgICBzdGFydCArXG4gICAgICAgICAgICAgICAgXCImc2l6ZT1cIiArXG4gICAgICAgICAgICAgICAgbGltaXQgK1xuICAgICAgICAgICAgICAgIFwiJnNvcnRfYnk9YmxvY2tfZGF0YS5ibG9ja190aW1lJnR5cGU9ZGF0YSZhZ2dfZmllbGQ9b3BlcmF0aW9uX3R5cGVcIlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBmZXRjaChcbiAgICAgICAgICAgICAgICBlc05vZGUgK1xuICAgICAgICAgICAgICAgICAgICBcIi9nZXRfYWNjb3VudF9oaXN0b3J5P2FjY291bnRfaWQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2lkICtcbiAgICAgICAgICAgICAgICAgICAgXCImZnJvbV89XCIgK1xuICAgICAgICAgICAgICAgICAgICBzdGFydCArXG4gICAgICAgICAgICAgICAgICAgIFwiJnNpemU9XCIgK1xuICAgICAgICAgICAgICAgICAgICBsaW1pdCArXG4gICAgICAgICAgICAgICAgICAgIFwiJnNvcnRfYnk9YmxvY2tfZGF0YS5ibG9ja190aW1lJnR5cGU9ZGF0YSZhZ2dfZmllbGQ9b3BlcmF0aW9uX3R5cGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHMgPSByZXN1bHQubWFwKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByLmFjY291bnRfaGlzdG9yeS5vcGVyYXRpb25faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogci5vcGVyYXRpb25fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogci5vcGVyYXRpb25faGlzdG9yeS5vcF9vYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5vcGVyYXRpb25faGlzdG9yeS5vcGVyYXRpb25fcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja19udW06IHIuYmxvY2tfZGF0YS5ibG9ja19udW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZTogci5ibG9ja19kYXRhLmJsb2NrX3RpbWUgKyBcIlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3BzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJxdWVyeSBmYWlsZWRcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRIaXN0b3J5KGFjY291bnRzTGlzdCwgZmlsdGVyT3AsIGN1c3RvbUZpbHRlcikge1xuICAgICAgICBsZXQgaGlzdG9yeSA9IFtdO1xuICAgICAgICBsZXQgc2Vlbl9vcHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAobGV0IGFjY291bnQgb2YgYWNjb3VudHNMaXN0KSB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgICAgIGxldCBoID0gYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpO1xuICAgICAgICAgICAgICAgIGlmIChoKVxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gaGlzdG9yeS5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc2Vlbl9vcHMuaGFzKG9wLmlkKSAmJiBzZWVuX29wcy5hZGQob3AuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWx0ZXJPcCkge1xuICAgICAgICAgICAgaGlzdG9yeSA9IGhpc3RvcnkuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLm9wWzBdID09PSBvcGVyYXRpb25zW2ZpbHRlck9wXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1c3RvbUZpbHRlcikge1xuICAgICAgICAgICAgaGlzdG9yeSA9IGhpc3RvcnkuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmaW5hbFZhbHVlID0gY3VzdG9tRmlsdGVyLmZpZWxkcy5yZWR1Y2UoKGZpbmFsLCBmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhc3NldF9pZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEub3BbMV1bXCJhbW91bnRcIl1bZmlsdGVyXSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpbHRlci52YWx1ZXNbZmlsdGVyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEub3BbMV1bZmlsdGVyXSA9PT0gY3VzdG9tRmlsdGVyLnZhbHVlc1tmaWx0ZXJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XG4gICAgfVxuXG4gICAgYXN5bmMgX2dlbmVyYXRlQ1NWKCkge1xuICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnRpYWxpemluZyBmZXRjaGluZyBvZiBFUyBkYXRhXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZldGNoaW5nQWNjb3VudEhpc3Rvcnk6IHRydWV9KTtcbiAgICAgICAgbGV0IHN0YXJ0ID0gMCxcbiAgICAgICAgICAgIGxpbWl0ID0gMTUwO1xuICAgICAgICBsZXQgYWNjb3VudCA9IHRoaXMucHJvcHMuYWNjb3VudHNMaXN0WzBdLmdldChcImlkXCIpO1xuICAgICAgICBsZXQgYWNjb3VudE5hbWUgPSAoYXdhaXQgRmV0Y2hDaGFpbihcImdldEFjY291bnRcIiwgYWNjb3VudCkpLmdldChcIm5hbWVcIik7XG4gICAgICAgIGxldCByZWNvcmREYXRhID0ge307XG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB0aGlzLl9nZXRBY2NvdW50SGlzdG9yeUVTKGFjY291bnQsIGxpbWl0LCBzdGFydCk7XG4gICAgICAgICAgICBpZiAoIXJlcy5sZW5ndGgpIGJyZWFrO1xuXG4gICAgICAgICAgICBhd2FpdCByZXBvcnQucmVzb2x2ZUJsb2NrVGltZXMocmVzKTtcblxuICAgICAgICAgICAgLyogQmVmb3JlIHBhcnNpbmcgcmVzdWx0cyB3ZSBuZWVkIHRvIGtub3cgdGhlIGFzc2V0IGluZm8gKHByZWNpc2lvbikgKi9cbiAgICAgICAgICAgIGF3YWl0IHJlcG9ydC5yZXNvbHZlQXNzZXRzKHJlcyk7XG5cbiAgICAgICAgICAgIHJlcy5tYXAoZnVuY3Rpb24ocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJ4X2lkID0gcmVjb3JkLmlkO1xuICAgICAgICAgICAgICAgIC8vIGxldCB0aW1lc3RhbXAgPSBhcGkuZ2V0QmxvY2socmVjb3JkLmJsb2NrX251bSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IG9wc1tyZWNvcmQub3AudHlwZV07XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlY29yZC5vcC5kYXRhO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZXN0aW5nX2JhbGFuY2Vfd2l0aGRyYXdcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYW1vdW50ID0gZGF0YS5hbW91bnRfO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyYW5zZmVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFtb3VudCA9IGRhdGEuYW1vdW50XztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkRGF0YVt0cnhfaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUocmVjb3JkLmJsb2NrX3RpbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc3RhcnQgKz0gcmVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHJlY29yZERhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZldGNoaW5nQWNjb3VudEhpc3Rvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFjY291bnRIaXN0b3J5RXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlY29yZERhdGEgPSByZXBvcnQuZ3JvdXBFbnRyaWVzKHJlY29yZERhdGEpO1xuICAgICAgICBsZXQgcGFyc2VkRGF0YSA9IHJlcG9ydC5wYXJzZURhdGEocmVjb3JkRGF0YSwgYWNjb3VudCwgYWNjb3VudE5hbWUpO1xuICAgICAgICBsZXQgY3N2U3RyaW5nID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgbGluZSBvZiBwYXJzZWREYXRhKSB7XG4gICAgICAgICAgICBjc3ZTdHJpbmcgKz0gbGluZS5qb2luKFwiLFwiKSArIFwiXFxuXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbY3N2U3RyaW5nXSwge3R5cGU6IFwidGV4dC9jc3Y7Y2hhcnNldD11dGYtOFwifSk7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHNhdmVBcyhcbiAgICAgICAgICAgIGJsb2IsXG4gICAgICAgICAgICBcImJpdHNoYXJlcy1hY2NvdW50LWhpc3RvcnktXCIgK1xuICAgICAgICAgICAgICAgIGFjY291bnROYW1lICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgdG9kYXkuZ2V0RnVsbFllYXIoKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIChcIjBcIiArICh0b2RheS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIChcIjBcIiArIHRvZGF5LmdldERhdGUoKSkuc2xpY2UoLTIpICtcbiAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgKFwiMFwiICsgdG9kYXkuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICtcbiAgICAgICAgICAgICAgICAoXCIwXCIgKyB0b2RheS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICAgICAgICAgXCIuY3N2XCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmZXRjaGluZ0FjY291bnRIaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIGFjY291bnRIaXN0b3J5RXJyb3I6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX29uQ2hhbmdlRmlsdGVyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXI6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGFjY291bnRzTGlzdCxcbiAgICAgICAgICAgIGNvbXBhY3RWaWV3LFxuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgY3VzdG9tRmlsdGVyLFxuICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICBtYXhIZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7bGltaXQsIGhlYWRlckhlaWdodH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgY3VycmVudF9hY2NvdW50X2lkID1cbiAgICAgICAgICAgIGFjY291bnRzTGlzdC5sZW5ndGggPT09IDEgJiYgYWNjb3VudHNMaXN0WzBdXG4gICAgICAgICAgICAgICAgPyBhY2NvdW50c0xpc3RbMF0uZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGxldCBoaXN0b3J5ID0gdGhpcy5fZ2V0SGlzdG9yeShcbiAgICAgICAgICAgIGFjY291bnRzTGlzdCxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0ZpbHRlcnMgJiYgdGhpcy5zdGF0ZS5maWx0ZXIgIT09IFwiYWxsXCJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgOiBmaWx0ZXIsXG4gICAgICAgICAgICBjdXN0b21GaWx0ZXJcbiAgICAgICAgKS5zb3J0KGNvbXBhcmVPcHMpO1xuICAgICAgICBsZXQgaGlzdG9yeUNvdW50ID0gaGlzdG9yeS5sZW5ndGg7XG5cbiAgICAgICAgc3R5bGUgPSBzdHlsZSA/IHN0eWxlIDoge3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn07XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAodHJ1ZSB8fCB0aGlzLnByb3BzLnNob3dGaWx0ZXJzKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gW1xuICAgICAgICAgICAgICAgIFwiYWxsXCIsXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2ZlclwiLFxuICAgICAgICAgICAgICAgIFwibGltaXRfb3JkZXJfY3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJsaW1pdF9vcmRlcl9jYW5jZWxcIixcbiAgICAgICAgICAgICAgICBcImZpbGxfb3JkZXJcIixcbiAgICAgICAgICAgICAgICBcImFjY291bnRfY3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJhY2NvdW50X3VwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIFwiYXNzZXRfY3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJ3aXRuZXNzX3dpdGhkcmF3X3BheVwiLFxuICAgICAgICAgICAgICAgIFwidmVzdGluZ19iYWxhbmNlX3dpdGhkcmF3XCJcbiAgICAgICAgICAgIF0ubWFwKHR5cGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3R5cGV9IGtleT17dHlwZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidHJhbnNhY3Rpb24udHJ4VHlwZXMuXCIgKyB0eXBlKX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpc3BsYXlfaGlzdG9yeSA9IGhpc3RvcnkubGVuZ3RoXG4gICAgICAgICAgICA/IGhpc3Rvcnkuc2xpY2UoMCwgbGltaXQpLm1hcChvID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlT3BlcmF0aW9uSWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkPXtvLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YWxpZ25MZWZ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e28uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wPXtvLm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e28ucmVzdWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eEluZGV4PXtvLnRyeF9pbl9ibG9ja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9e28uYmxvY2tfbnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50X2FjY291bnRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3BMYWJlbD17Y29tcGFjdFZpZXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxEYXRlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PVwibm9fcmVjZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e2NvbXBhY3RWaWV3ID8gXCIyXCIgOiBcIjNcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm9wZXJhdGlvbi5ub19yZWNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICBdO1xuICAgICAgICBsZXQgYWN0aW9uID0gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRvdGFsLXZhbHVlXCIga2V5PVwidG90YWxfdmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAge2hpc3RvcnlDb3VudCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9nZW5lcmF0ZUNTVi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2FjdGlvbi5jc3ZfdGlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImV4Y2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuZXhjZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXRpbnlcIiAvPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnByb3BzLnNob3dNb3JlICYmIGhpc3RvcnlDb3VudCA+IHRoaXMucHJvcHMubGltaXQpIHx8XG4gICAgICAgICAgICAgICAgICAgICgyMCAmJiBsaW1pdCA8IGhpc3RvcnlDb3VudCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLl9vbkluY3JlYXNlTGltaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZXZyb24tZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMuY2hldnJvbl9kb3duLnRyYW5zYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgLz5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZW50LXRyYW5zYWN0aW9ucyBuby1vdmVyZmxvd1wiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXNoYm9hcmQgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnJlY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25hbWVzKFwiaW5saW5lLWJsb2NrXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0ZpbHRlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5maWx0ZXJfb3BzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogNSwgd2lkdGg6IFwiYXV0b1wifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0IG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZUZpbHRlci5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWNjb3VudEhpc3RvcnlFcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjAuNzVyZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50Lmhpc3RvcnlfZXJyb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveC1jb250ZW50IGdyaWQtYmxvY2sgbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5mdWxsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCAtIGhlYWRlckhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ0cmFuc2FjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGVkTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbXBhY3RWaWV3ID8gXCJjb21wYWN0XCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmRhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiBkYXNoYm9hcmQtdGFibGUgdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS10aW55XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YWxpZ25MZWZ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudHJhbnNhY3Rpb25zLmlkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS10aW55XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YWxpZ25MZWZ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudHJhbnNhY3Rpb25zLnR5cGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17YWxpZ25MZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYW5zYWN0aW9ucy5pbmZvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC50cmFuc2FjdGlvbnMudGltZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtkaXNwbGF5X2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ1dGlsaXR5LnRvdGFsX3hfb3BlcmF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFSb3c9e2FjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZXRjaGluZ0FjY291bnRIaXN0b3J5ICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuUmVjZW50VHJhbnNhY3Rpb25zID0gQmluZFRvQ2hhaW5TdGF0ZShSZWNlbnRUcmFuc2FjdGlvbnMpO1xuXG5jbGFzcyBUcmFuc2FjdGlvbldyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgdG86IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGZyb21BY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFzc2V0OiBcIjEuMy4wXCJcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid3JhcHBlclwiPnt0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMucHJvcHMpfTwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5UcmFuc2FjdGlvbldyYXBwZXIgPSBCaW5kVG9DaGFpblN0YXRlKFRyYW5zYWN0aW9uV3JhcHBlcik7XG5cbmV4cG9ydCB7UmVjZW50VHJhbnNhY3Rpb25zLCBUcmFuc2FjdGlvbldyYXBwZXJ9O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBUEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBUkE7QUFXQTtBQUNBOzs7O0FBNURBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFVQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQWtCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFkQTtBQWtCQTtBQXRDQTtBQXlDQTs7OztBQXpGQTtBQUNBO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaUJBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBU0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFJQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUdBLDZDQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOztBQUNBOzs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBUUE7QUFDQTtBQUNBOzs7OztBQUVBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBZUE7QUFDQTtBQUNBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUlBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFnQkE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQURBO0FBRkE7QUFvQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUpBO0FBYUE7QUFuQ0E7QUFDQTtBQXNDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBWUE7QUFaQTtBQUZBO0FBREE7QUFvQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQXRCQTtBQThCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUtBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBaEJBO0FBcUJBO0FBQ0E7QUFDQTtBQWpDQTtBQVhBO0FBK0NBO0FBM0ZBO0FBREE7QUFnR0E7Ozs7QUE5ZUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQXFlQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7QUFmQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFEQTtBQUNBO0FBU0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==