(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 2703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_CSSTransitionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2704);
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
                        id: this.props.id,
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

/***/ 2775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(724);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2703);
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

/***/ 2799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentTransactions", function() { return RecentTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionWrapper", function() { return TransactionWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2459);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2445);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1954);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1955);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(570);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(419);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2639);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(574);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(819);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(813);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utility_PaginatedList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2775);
/* harmony import */ var bitshares_report__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2800);
/* harmony import */ var bitshares_report__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_report__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1939);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(723);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__);
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

            var hideFee = false;

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
                    hideFee: hideFee,
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
                    "\xA0"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null),
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
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_16__["Tooltip"],
                                    {
                                        placement: "left",
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.filter_ops")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "select",
                                        {
                                            style: {
                                                paddingTop: 5,
                                                width: "auto"
                                            },
                                            className: "bts-select no-margin",
                                            value: this.state.filter,
                                            onChange: this._onChangeFilter.bind(this)
                                        },
                                        options
                                    )
                                ) : null
                            ),
                            historyCount > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                {
                                    className: "inline-block",
                                    onClick: this._generateCSV.bind(this),
                                    "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("transaction.csv_tip"),
                                    "data-place": "bottom",
                                    style: { marginLeft: "1rem" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], { name: "excel", size: "1_5x" })
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
                                !hideFee && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "th",
                                    { style: alignLeft },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "account.transactions.fee" })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5kYXNoYm9hcmR+ZGFzaGJvYXJkLWFjY291bnRzfmRlcG9zaXQtd2l0aGRyYXd+dHJhbnNmZXIuOGRmNzRhYmZlZTRjOTZkMGM3N2IuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvUGFnaW5hdGVkTGlzdC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb25Hcm91cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2l0aW9uV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29tcG9uZW50OiBcInNwYW5cIixcbiAgICAgICAgZW50ZXJUaW1lb3V0OiAyMDAwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbmltYXRlRW50ZXI6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgcmVzZXRBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZUFuaW1hdGlvbigpO1xuICAgIH1cblxuICAgIGVuYWJsZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUVudGVyOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17dGhpcy5wcm9wcy5jb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPXt0aGlzLnByb3BzLnRyYW5zaXRpb25OYW1lfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXt0aGlzLnByb3BzLmVudGVyVGltZW91dH1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyPXt0aGlzLnN0YXRlLmFuaW1hdGVFbnRlcn1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7UGFnaW5hdGlvbn0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBUcmFuc2l0aW9uV3JhcHBlciBmcm9tIFwiLi4vVXRpbGl0eS9UcmFuc2l0aW9uV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0ZWRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICBwYWdlU2l6ZTogcHJvcHMucGFnZVNpemVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICByb3dzOiBbXSxcbiAgICAgICAgcGFnZVNpemU6IDE1LFxuICAgICAgICBsYWJlbDogXCJ1dGlsaXR5LnRvdGFsX3hfaXRlbXNcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcInRhYmxlXCIsXG4gICAgICAgIGV4dHJhUm93OiBudWxsLFxuICAgICAgICBzdHlsZToge3BhZGRpbmdCb3R0b206IFwiMXJlbVwifVxuICAgIH07XG5cbiAgICBvbkNoYW5nZShwYWdlLCBwYWdlU2l6ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYWdlLCBwYWdlU2l6ZX0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3BhZ2UsIHBhZ2VTaXplfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHtoZWFkZXIsIHJvd3MsIGV4dHJhUm93fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gcm93cy5sZW5ndGg7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRSb3dzID0gZ2V0Um93cyhwYWdlLCBwYWdlU2l6ZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Um93cyhwYWdlLCBwYWdlU2l6ZSkge1xuICAgICAgICAgICAgbGV0IHIgPSBbXTtcbiAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgdmFyIGkgPSAocGFnZSAtIDEpICogcGFnZVNpemU7XG4gICAgICAgICAgICAgICAgaSA8IE1hdGgubWluKHRvdGFsLCBwYWdlICogcGFnZVNpemUpO1xuICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgci5wdXNoKHJvd3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBQYWdpbmF0ZWQgdG9vIGZhciBvciBmaWx0ZXJlZCBvdXQgb3B0aW9ucyB3aXRob3V0IGNoYW5naW5nIHRoZSBwYWdlICovXG4gICAgICAgIGlmICghY3VycmVudFJvd3MubGVuZ3RoICYmIHRvdGFsKSB7XG4gICAgICAgICAgICBjdXJyZW50Um93cyA9IGdldFJvd3MoMSwgcGFnZVNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge2hlYWRlciA/IDx0aGVhZD57aGVhZGVyfTwvdGhlYWQ+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMud2l0aFRyYW5zaXRpb24gJiYgcGFnZSA9PT0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uV3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInRib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cIm5ld3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRSb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHRyYVJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRSb3dzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleHRyYVJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgIHt0b3RhbCA+IHBhZ2VTaXplID8gKFxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhpcy5wcm9wcy5sZWZ0UGFkZGluZyB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw9e3RvdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RvdGFsPXt0b3RhbCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiB0b3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17cGFnZVNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtwYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtzYXZlQXN9IGZyb20gXCJmaWxlLXNhdmVyXCI7XG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gXCIuLi9CbG9ja2NoYWluL09wZXJhdGlvblwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCB7Q2hhaW5UeXBlcyBhcyBncmFwaGVuZUNoYWluVHlwZXMsIEZldGNoQ2hhaW59IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IHBzIGZyb20gXCJwZXJmZWN0LXNjcm9sbGJhclwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFBhZ2luYXRlZExpc3QgZnJvbSBcIi4uL1V0aWxpdHkvUGFnaW5hdGVkTGlzdFwiO1xuY29uc3Qge29wZXJhdGlvbnN9ID0gZ3JhcGhlbmVDaGFpblR5cGVzO1xuY29uc3QgYWxpZ25MZWZ0ID0ge3RleHRBbGlnbjogXCJsZWZ0XCJ9O1xuaW1wb3J0IHJlcG9ydCBmcm9tIFwiYml0c2hhcmVzLXJlcG9ydFwiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuY29uc3Qgb3BzID0gT2JqZWN0LmtleXMob3BlcmF0aW9ucyk7XG5cbmZ1bmN0aW9uIGNvbXBhcmVPcHMoYiwgYSkge1xuICAgIGlmIChhLmJsb2NrX251bSA9PT0gYi5ibG9ja19udW0pIHtcbiAgICAgICAgcmV0dXJuIGEudmlydHVhbF9vcCAtIGIudmlydHVhbF9vcDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYS5ibG9ja19udW0gLSBiLmJsb2NrX251bTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRleHRDb250ZW50KG4pIHtcbi8vICAgICByZXR1cm4gbiA/IGBcIiR7bi50ZXh0Q29udGVudC5yZXBsYWNlKC9bXFxzXFx0XFxyXFxuXS9naSwgXCIgXCIpfVwiYCA6IFwiXCI7XG4vLyB9XG5cbmNsYXNzIFJlY2VudFRyYW5zYWN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYWNjb3VudHNMaXN0OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudHNMaXN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGNvbXBhY3RWaWV3OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIG1heEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgZnVsbEhlaWdodDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIHNob3dGaWx0ZXJzOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBsaW1pdDogMjUsXG4gICAgICAgIG1heEhlaWdodDogNTAwLFxuICAgICAgICBmdWxsSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgc2hvd0ZpbHRlcnM6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsaW1pdDogcHJvcHMubGltaXQsXG4gICAgICAgICAgICBmZXRjaGluZ0FjY291bnRIaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgIGhlYWRlckhlaWdodDogODUsXG4gICAgICAgICAgICBmaWx0ZXI6IFwiYWxsXCIsXG4gICAgICAgICAgICBhY2NvdW50SGlzdG9yeUVycm9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuZnVsbEhlaWdodCkge1xuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnJlZnMudHJhbnNhY3Rpb25zO1xuICAgICAgICAgICAgcHMuaW5pdGlhbGl6ZSh0KTtcblxuICAgICAgICAgICAgdGhpcy5fc2V0SGVhZGVySGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2V0SGVhZGVySGVpZ2h0KCkge1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5yZWZzLmhlYWRlci5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGhlaWdodCAhPT0gdGhpcy5zdGF0ZS5oZWFkZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGhlYWRlckhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3coXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50c0xpc3QsXG4gICAgICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnRzTGlzdFxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF4SGVpZ2h0ICE9PSBuZXh0UHJvcHMubWF4SGVpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGVhZGVySGVpZ2h0ICE9PSBuZXh0U3RhdGUuaGVhZGVySGVpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyICE9PSBuZXh0U3RhdGUuZmlsdGVyKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VzdG9tRmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1c3RvbUZpbHRlci5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgIG5leHRQcm9wcy5jdXN0b21GaWx0ZXIuZmllbGRzXG4gICAgICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXN0b21GaWx0ZXIudmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICBuZXh0UHJvcHMuY3VzdG9tRmlsdGVyLnZhbHVlc1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF4SGVpZ2h0ICE9PSBuZXh0UHJvcHMubWF4SGVpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFN0YXRlLmxpbWl0ICE9PSB0aGlzLnN0YXRlLmxpbWl0IHx8XG4gICAgICAgICAgICBuZXh0U3RhdGUuZmV0Y2hpbmdBY2NvdW50SGlzdG9yeSAhPT1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoaW5nQWNjb3VudEhpc3RvcnlcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGZvciAobGV0IGtleSA9IDA7IGtleSA8IG5leHRQcm9wcy5hY2NvdW50c0xpc3QubGVuZ3RoOyArK2tleSkge1xuICAgICAgICAgICAgbGV0IG5wYSA9IG5leHRQcm9wcy5hY2NvdW50c0xpc3Rba2V5XTtcbiAgICAgICAgICAgIGxldCBuc2EgPSB0aGlzLnByb3BzLmFjY291bnRzTGlzdFtrZXldO1xuICAgICAgICAgICAgaWYgKG5wYSAmJiBuc2EgJiYgbnBhLmdldChcImhpc3RvcnlcIikgIT09IG5zYS5nZXQoXCJoaXN0b3J5XCIpKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBfb25JbmNyZWFzZUxpbWl0KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxpbWl0OiB0aGlzLnN0YXRlLmxpbWl0ICsgMzBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldEFjY291bnRIaXN0b3J5RVMoYWNjb3VudF9pZCwgbGltaXQsIHN0YXJ0KSB7XG4gICAgICAgIHZhciBlc05vZGUgPSBcImh0dHBzOi8vd3JhcHBlci5lbGFzdGljc2VhcmNoLmJpdHNoYXJlcy53c1wiO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCJxdWVyeVwiLFxuICAgICAgICAgICAgZXNOb2RlICtcbiAgICAgICAgICAgICAgICBcIi9nZXRfYWNjb3VudF9oaXN0b3J5P2FjY291bnRfaWQ9XCIgK1xuICAgICAgICAgICAgICAgIGFjY291bnRfaWQgK1xuICAgICAgICAgICAgICAgIFwiJmZyb21fPVwiICtcbiAgICAgICAgICAgICAgICBzdGFydCArXG4gICAgICAgICAgICAgICAgXCImc2l6ZT1cIiArXG4gICAgICAgICAgICAgICAgbGltaXQgK1xuICAgICAgICAgICAgICAgIFwiJnNvcnRfYnk9YmxvY2tfZGF0YS5ibG9ja190aW1lJnR5cGU9ZGF0YSZhZ2dfZmllbGQ9b3BlcmF0aW9uX3R5cGVcIlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBmZXRjaChcbiAgICAgICAgICAgICAgICBlc05vZGUgK1xuICAgICAgICAgICAgICAgICAgICBcIi9nZXRfYWNjb3VudF9oaXN0b3J5P2FjY291bnRfaWQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2lkICtcbiAgICAgICAgICAgICAgICAgICAgXCImZnJvbV89XCIgK1xuICAgICAgICAgICAgICAgICAgICBzdGFydCArXG4gICAgICAgICAgICAgICAgICAgIFwiJnNpemU9XCIgK1xuICAgICAgICAgICAgICAgICAgICBsaW1pdCArXG4gICAgICAgICAgICAgICAgICAgIFwiJnNvcnRfYnk9YmxvY2tfZGF0YS5ibG9ja190aW1lJnR5cGU9ZGF0YSZhZ2dfZmllbGQ9b3BlcmF0aW9uX3R5cGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHMgPSByZXN1bHQubWFwKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByLmFjY291bnRfaGlzdG9yeS5vcGVyYXRpb25faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogci5vcGVyYXRpb25fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogci5vcGVyYXRpb25faGlzdG9yeS5vcF9vYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5vcGVyYXRpb25faGlzdG9yeS5vcGVyYXRpb25fcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja19udW06IHIuYmxvY2tfZGF0YS5ibG9ja19udW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZTogci5ibG9ja19kYXRhLmJsb2NrX3RpbWUgKyBcIlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3BzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJxdWVyeSBmYWlsZWRcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRIaXN0b3J5KGFjY291bnRzTGlzdCwgZmlsdGVyT3AsIGN1c3RvbUZpbHRlcikge1xuICAgICAgICBsZXQgaGlzdG9yeSA9IFtdO1xuICAgICAgICBsZXQgc2Vlbl9vcHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZvciAobGV0IGFjY291bnQgb2YgYWNjb3VudHNMaXN0KSB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgICAgIGxldCBoID0gYWNjb3VudC5nZXQoXCJoaXN0b3J5XCIpO1xuICAgICAgICAgICAgICAgIGlmIChoKVxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gaGlzdG9yeS5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvSlMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc2Vlbl9vcHMuaGFzKG9wLmlkKSAmJiBzZWVuX29wcy5hZGQob3AuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWx0ZXJPcCkge1xuICAgICAgICAgICAgaGlzdG9yeSA9IGhpc3RvcnkuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLm9wWzBdID09PSBvcGVyYXRpb25zW2ZpbHRlck9wXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1c3RvbUZpbHRlcikge1xuICAgICAgICAgICAgaGlzdG9yeSA9IGhpc3RvcnkuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmaW5hbFZhbHVlID0gY3VzdG9tRmlsdGVyLmZpZWxkcy5yZWR1Y2UoKGZpbmFsLCBmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhc3NldF9pZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEub3BbMV1bXCJhbW91bnRcIl1bZmlsdGVyXSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpbHRlci52YWx1ZXNbZmlsdGVyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEub3BbMV1bZmlsdGVyXSA9PT0gY3VzdG9tRmlsdGVyLnZhbHVlc1tmaWx0ZXJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XG4gICAgfVxuXG4gICAgX2dldEFjY291bnRIaXN0b3J5RVMoYWNjb3VudF9pZCwgbGltaXQsIHN0YXJ0KSB7XG4gICAgICAgIHZhciBlc05vZGUgPSBcImh0dHBzOi8vd3JhcHBlci5lbGFzdGljc2VhcmNoLmJpdHNoYXJlcy53c1wiO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCJxdWVyeVwiLFxuICAgICAgICAgICAgZXNOb2RlICtcbiAgICAgICAgICAgICAgICBcIi9nZXRfYWNjb3VudF9oaXN0b3J5P2FjY291bnRfaWQ9XCIgK1xuICAgICAgICAgICAgICAgIGFjY291bnRfaWQgK1xuICAgICAgICAgICAgICAgIFwiJmZyb21fPVwiICtcbiAgICAgICAgICAgICAgICBzdGFydCArXG4gICAgICAgICAgICAgICAgXCImc2l6ZT1cIiArXG4gICAgICAgICAgICAgICAgbGltaXQgK1xuICAgICAgICAgICAgICAgIFwiJnNvcnRfYnk9YmxvY2tfZGF0YS5ibG9ja190aW1lJnR5cGU9ZGF0YSZhZ2dfZmllbGQ9b3BlcmF0aW9uX3R5cGVcIlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBmZXRjaChcbiAgICAgICAgICAgICAgICBlc05vZGUgK1xuICAgICAgICAgICAgICAgICAgICBcIi9nZXRfYWNjb3VudF9oaXN0b3J5P2FjY291bnRfaWQ9XCIgK1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50X2lkICtcbiAgICAgICAgICAgICAgICAgICAgXCImZnJvbV89XCIgK1xuICAgICAgICAgICAgICAgICAgICBzdGFydCArXG4gICAgICAgICAgICAgICAgICAgIFwiJnNpemU9XCIgK1xuICAgICAgICAgICAgICAgICAgICBsaW1pdCArXG4gICAgICAgICAgICAgICAgICAgIFwiJnNvcnRfYnk9YmxvY2tfZGF0YS5ibG9ja190aW1lJnR5cGU9ZGF0YSZhZ2dfZmllbGQ9b3BlcmF0aW9uX3R5cGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHMgPSByZXN1bHQubWFwKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByLmFjY291bnRfaGlzdG9yeS5vcGVyYXRpb25faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogci5vcGVyYXRpb25fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogci5vcGVyYXRpb25faGlzdG9yeS5vcF9vYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5vcGVyYXRpb25faGlzdG9yeS5vcGVyYXRpb25fcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja19udW06IHIuYmxvY2tfZGF0YS5ibG9ja19udW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZTogci5ibG9ja19kYXRhLmJsb2NrX3RpbWUgKyBcIlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3BzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJxdWVyeSBmYWlsZWRcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIF9nZW5lcmF0ZUNTVigpIHtcbiAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW50aWFsaXppbmcgZmV0Y2hpbmcgb2YgRVMgZGF0YVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmZXRjaGluZ0FjY291bnRIaXN0b3J5OiB0cnVlfSk7XG4gICAgICAgIGxldCBzdGFydCA9IDAsXG4gICAgICAgICAgICBsaW1pdCA9IDE1MDtcbiAgICAgICAgbGV0IGFjY291bnQgPSB0aGlzLnByb3BzLmFjY291bnRzTGlzdFswXS5nZXQoXCJpZFwiKTtcbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gKGF3YWl0IEZldGNoQ2hhaW4oXCJnZXRBY2NvdW50XCIsIGFjY291bnQpKS5nZXQoXCJuYW1lXCIpO1xuICAgICAgICBsZXQgcmVjb3JkRGF0YSA9IHt9O1xuXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgdGhpcy5fZ2V0QWNjb3VudEhpc3RvcnlFUyhhY2NvdW50LCBsaW1pdCwgc3RhcnQpO1xuICAgICAgICAgICAgaWYgKCFyZXMubGVuZ3RoKSBicmVhaztcblxuICAgICAgICAgICAgYXdhaXQgcmVwb3J0LnJlc29sdmVCbG9ja1RpbWVzKHJlcyk7XG5cbiAgICAgICAgICAgIC8qIEJlZm9yZSBwYXJzaW5nIHJlc3VsdHMgd2UgbmVlZCB0byBrbm93IHRoZSBhc3NldCBpbmZvIChwcmVjaXNpb24pICovXG4gICAgICAgICAgICBhd2FpdCByZXBvcnQucmVzb2x2ZUFzc2V0cyhyZXMpO1xuXG4gICAgICAgICAgICByZXMubWFwKGZ1bmN0aW9uKHJlY29yZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyeF9pZCA9IHJlY29yZC5pZDtcbiAgICAgICAgICAgICAgICAvLyBsZXQgdGltZXN0YW1wID0gYXBpLmdldEJsb2NrKHJlY29yZC5ibG9ja19udW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBvcHNbcmVjb3JkLm9wLnR5cGVdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZWNvcmQub3AuZGF0YTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmVzdGluZ19iYWxhbmNlX3dpdGhkcmF3XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFtb3VudCA9IGRhdGEuYW1vdW50XztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmFuc2ZlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hbW91bnQgPSBkYXRhLmFtb3VudF87XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZERhdGFbdHJ4X2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKHJlY29yZC5ibG9ja190aW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHN0YXJ0ICs9IHJlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhyZWNvcmREYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmZXRjaGluZ0FjY291bnRIaXN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhY2NvdW50SGlzdG9yeUVycm9yOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZWNvcmREYXRhID0gcmVwb3J0Lmdyb3VwRW50cmllcyhyZWNvcmREYXRhKTtcbiAgICAgICAgbGV0IHBhcnNlZERhdGEgPSByZXBvcnQucGFyc2VEYXRhKHJlY29yZERhdGEsIGFjY291bnQsIGFjY291bnROYW1lKTtcbiAgICAgICAgbGV0IGNzdlN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGxpbmUgb2YgcGFyc2VkRGF0YSkge1xuICAgICAgICAgICAgY3N2U3RyaW5nICs9IGxpbmUuam9pbihcIixcIikgKyBcIlxcblwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2NzdlN0cmluZ10sIHt0eXBlOiBcInRleHQvY3N2O2NoYXJzZXQ9dXRmLThcIn0pO1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBzYXZlQXMoXG4gICAgICAgICAgICBibG9iLFxuICAgICAgICAgICAgXCJiaXRzaGFyZXMtYWNjb3VudC1oaXN0b3J5LVwiICtcbiAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIHRvZGF5LmdldEZ1bGxZZWFyKCkgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICAoXCIwXCIgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgK1xuICAgICAgICAgICAgICAgIFwiLVwiICtcbiAgICAgICAgICAgICAgICAoXCIwXCIgKyB0b2RheS5nZXREYXRlKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgIChcIjBcIiArIHRvZGF5LmdldEhvdXJzKCkpLnNsaWNlKC0yKSArXG4gICAgICAgICAgICAgICAgKFwiMFwiICsgdG9kYXkuZ2V0TWludXRlcygpKS5zbGljZSgtMikgK1xuICAgICAgICAgICAgICAgIFwiLmNzdlwiXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmV0Y2hpbmdBY2NvdW50SGlzdG9yeTogZmFsc2UsXG4gICAgICAgICAgICBhY2NvdW50SGlzdG9yeUVycm9yOiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkNoYW5nZUZpbHRlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBhY2NvdW50c0xpc3QsXG4gICAgICAgICAgICBjb21wYWN0VmlldyxcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIGN1c3RvbUZpbHRlcixcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgbWF4SGVpZ2h0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge2xpbWl0LCBoZWFkZXJIZWlnaHR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGN1cnJlbnRfYWNjb3VudF9pZCA9XG4gICAgICAgICAgICBhY2NvdW50c0xpc3QubGVuZ3RoID09PSAxICYmIGFjY291bnRzTGlzdFswXVxuICAgICAgICAgICAgICAgID8gYWNjb3VudHNMaXN0WzBdLmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBsZXQgaGlzdG9yeSA9IHRoaXMuX2dldEhpc3RvcnkoXG4gICAgICAgICAgICBhY2NvdW50c0xpc3QsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNob3dGaWx0ZXJzICYmIHRoaXMuc3RhdGUuZmlsdGVyICE9PSBcImFsbFwiXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLmZpbHRlclxuICAgICAgICAgICAgICAgIDogZmlsdGVyLFxuICAgICAgICAgICAgY3VzdG9tRmlsdGVyXG4gICAgICAgICkuc29ydChjb21wYXJlT3BzKTtcbiAgICAgICAgbGV0IGhpc3RvcnlDb3VudCA9IGhpc3RvcnkubGVuZ3RoO1xuXG4gICAgICAgIHN0eWxlID0gc3R5bGUgPyBzdHlsZSA6IHt3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9O1xuXG4gICAgICAgIGxldCBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgaWYgKHRydWUgfHwgdGhpcy5wcm9wcy5zaG93RmlsdGVycykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICBcImFsbFwiLFxuICAgICAgICAgICAgICAgIFwidHJhbnNmZXJcIixcbiAgICAgICAgICAgICAgICBcImxpbWl0X29yZGVyX2NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwibGltaXRfb3JkZXJfY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgXCJmaWxsX29yZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJhY2NvdW50X2NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwiYWNjb3VudF91cGRhdGVcIixcbiAgICAgICAgICAgICAgICBcImFzc2V0X2NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgIFwid2l0bmVzc193aXRoZHJhd19wYXlcIixcbiAgICAgICAgICAgICAgICBcInZlc3RpbmdfYmFsYW5jZV93aXRoZHJhd1wiXG4gICAgICAgICAgICBdLm1hcCh0eXBlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt0eXBlfSBrZXk9e3R5cGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zYWN0aW9uLnRyeFR5cGVzLlwiICsgdHlwZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoaWRlRmVlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGRpc3BsYXlfaGlzdG9yeSA9IGhpc3RvcnkubGVuZ3RoXG4gICAgICAgICAgICA/IGhpc3Rvcnkuc2xpY2UoMCwgbGltaXQpLm1hcChvID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlT3BlcmF0aW9uSWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkPXtvLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17YWxpZ25MZWZ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e28uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wPXtvLm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e28ucmVzdWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eEluZGV4PXtvLnRyeF9pbl9ibG9ja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9e28uYmxvY2tfbnVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50X2FjY291bnRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGZWU9e2hpZGVGZWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludmVydGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wTGFiZWw9e2NvbXBhY3RWaWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsRGF0ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgPHRyIGtleT1cIm5vX3JlY2VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXtjb21wYWN0VmlldyA/IFwiMlwiIDogXCIzXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJvcGVyYXRpb24ubm9fcmVjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgbGV0IGFjdGlvbiA9IChcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0b3RhbC12YWx1ZVwiIGtleT1cInRvdGFsX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+Jm5ic3A7PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgLz5cbiAgICAgICAgICAgICAgICA8dGQgLz5cbiAgICAgICAgICAgICAgICA8dGQgLz5cbiAgICAgICAgICAgICAgICA8dGQgLz5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZW50LXRyYW5zYWN0aW9ucyBuby1vdmVyZmxvd1wiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXNoYm9hcmQgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnJlY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25hbWVzKFwiaW5saW5lLWJsb2NrXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvd0ZpbHRlcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5maWx0ZXJfb3BzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRzLXNlbGVjdCBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZUZpbHRlci5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoaXN0b3J5Q291bnQgPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2dlbmVyYXRlQ1NWLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNhY3Rpb24uY3N2X3RpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImV4Y2VsXCIgc2l6ZT1cIjFfNXhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFjY291bnRIaXN0b3J5RXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIwLjc1cmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5oaXN0b3J5X2Vycm9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3gtY29udGVudCBncmlkLWJsb2NrIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZnVsbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQgLSBoZWFkZXJIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwidHJhbnNhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRlZExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoVHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGUgdGFibGUtc3RyaXBlZCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb21wYWN0VmlldyA/IFwiY29tcGFjdFwiIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5kYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgZGFzaGJvYXJkLXRhYmxlIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtdGlueVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2FsaWduTGVmdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYW5zYWN0aW9ucy5pZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtdGlueVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2FsaWduTGVmdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnRyYW5zYWN0aW9ucy50eXBlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2FsaWduTGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC50cmFuc2FjdGlvbnMuaW5mb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFoaWRlRmVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2FsaWduTGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudHJhbnNhY3Rpb25zLmZlZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC50cmFuc2FjdGlvbnMudGltZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtkaXNwbGF5X2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ1dGlsaXR5LnRvdGFsX3hfb3BlcmF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFSb3c9e2FjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZXRjaGluZ0FjY291bnRIaXN0b3J5ICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuUmVjZW50VHJhbnNhY3Rpb25zID0gQmluZFRvQ2hhaW5TdGF0ZShSZWNlbnRUcmFuc2FjdGlvbnMpO1xuXG5jbGFzcyBUcmFuc2FjdGlvbldyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFzc2V0OiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgdG86IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LmlzUmVxdWlyZWQsXG4gICAgICAgIGZyb21BY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFzc2V0OiBcIjEuMy4wXCJcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid3JhcHBlclwiPnt0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMucHJvcHMpfTwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5UcmFuc2FjdGlvbldyYXBwZXIgPSBCaW5kVG9DaGFpblN0YXRlKFRyYW5zYWN0aW9uV3JhcHBlcik7XG5cbmV4cG9ydCB7UmVjZW50VHJhbnNhY3Rpb25zLCBUcmFuc2FjdGlvbldyYXBwZXJ9O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBUEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFUQTtBQVlBO0FBQ0E7Ozs7QUE3REE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQU9BO0FBQ0E7OztBQVVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUxBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBa0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQWRBO0FBa0JBO0FBdENBO0FBeUNBOzs7O0FBekZBO0FBQ0E7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaUJBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBU0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFJQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFHQSw2Q0FFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFDQTs7QUFDQTs7O0FBQ0E7QUFDQTs7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFJQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQVBBO0FBV0E7QUFYQTtBQU5BO0FBRkE7QUF3QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVBBO0FBU0E7QUFUQTtBQTFCQTtBQXVDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBekNBO0FBaURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBS0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBckJBO0FBMEJBO0FBQ0E7QUFDQTtBQXRDQTtBQVhBO0FBb0RBO0FBbkhBO0FBREE7QUF3SEE7Ozs7QUE3aEJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFvaEJBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7OztBQWZBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQURBO0FBQ0E7QUFTQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9