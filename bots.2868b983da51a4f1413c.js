(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[23],{

/***/ 2881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2882);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(553);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1886);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1846);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Bots = function (_React$Component) {
    _inherits(Bots, _React$Component);

    function Bots(props) {
        var _this2 = this;

        _classCallCheck(this, Bots);

        var _this = _possibleConstructorReturn(this, (Bots.__proto__ || Object.getPrototypeOf(Bots)).call(this, props));

        _this.handleChangeStrategy = function (event) {
            _this.setState({ selectStrategy: event.target.value });
        };

        _this.handleChangeBot = function (event) {
            var selectBot = event.target.value;

            _this.setState({
                selectBot: selectBot,
                botRun: _this.state.bots[selectBot].run
            });
        };

        _this.handleCreate = function (event) {
            event.preventDefault();
            var bots = _this.state.bots;

            bots.push(lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].create(_this.state.selectStrategy, _this.props.currentAccount, _this.createForm.state));
            _this.setState({ bots: bots });

            if (_this.createForm.validate) _this.createForm.validate("name", _this.createForm.state.name);
        };

        _this.handleEnableCreate = function (enableCreate) {
            if (_this.state.enableCreate != enableCreate) _this.setState({ enableCreate: enableCreate });
        };

        _this.handleStartBot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var bot;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            bot = _this.state.bots[_this.state.selectBot];
                            _context.next = 3;
                            return bot.start();

                        case 3:
                            _this.setState({ botRun: bot.run });

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        _this.handleStopBot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var bot;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            bot = _this.state.bots[_this.state.selectBot];
                            _context2.next = 3;
                            return bot.stop();

                        case 3:
                            _this.setState({ botRun: bot.run });

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.handleDeleteBot = function () {
            lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].delete(_this.state.bots[_this.state.selectBot]);

            _this.setState({
                bots: lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].getBots(_this.props.currentAccount),
                selectBot: 0
            });
        };

        _this.strategies = lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].strategies;
        _this.state = {
            selectStrategy: Object.keys(_this.strategies)[0],
            bots: [],
            selectBot: 0,
            enableCreate: false,
            botRun: false
        };
        return _this;
    }

    _createClass(Bots, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var bots = lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].getBots(this.props.currentAccount);
            this.setState({
                bots: bots,
                selectBot: 0,
                botRun: bots[0] ? bots[0].run : false
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            //console.log("start render main page", this.props)
            if (this.props.currentAccount === null) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], { to: "/" });
            }

            var CreateForm = this.strategies[this.state.selectStrategy].create;

            var bot = this.state.bots[this.state.selectBot] || null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block shrink vertical medium-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        {
                            style: { paddingBottom: 20, overflow: "visible" },
                            className: "grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",
                            onSubmit: this.handleCreate,
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "left-label", style: { marginTop: 30 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.select_strategy" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "content-block" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "select",
                                    {
                                        className: "form-control bts-select ",
                                        value: this.state.selectStrategy,
                                        onChange: this.handleChangeStrategy
                                    },
                                    Object.keys(this.strategies).map(function (name) {
                                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "option",
                                            { key: name, value: name },
                                            name
                                        );
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateForm, {
                                ref: function ref(form) {
                                    _this3.createForm = form;
                                },
                                account: this.props.currentAccount,
                                name: this.state.selectStrategy,
                                enableCreate: this.handleEnableCreate
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: "button no-margin",
                                    type: "submit",
                                    disabled: !this.state.enableCreate
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.create" })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "left-label", style: { marginTop: 30 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.bot_state" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "select",
                            {
                                className: "form-control bts-select",
                                value: this.state.selectBot,
                                onChange: this.handleChangeBot
                            },
                            this.state.bots.map(function (bot, index) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "option",
                                    { key: bot.name, value: index },
                                    bot.name + " (" + bot.constructor.name + ")"
                                );
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            bot ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bot.state, { key: bot.name, bot: bot }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        onClick: this.handleStartBot,
                                        disabled: this.state.botRun,
                                        style: { marginLeft: 50 }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.start" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        onClick: this.handleStopBot,
                                        disabled: !this.state.botRun,
                                        style: { marginLeft: 50 }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.stop" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        onClick: this.handleDeleteBot,
                                        disabled: this.state.botRun,
                                        style: { marginLeft: 50 }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.delete" })
                                )
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.select_bot" })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Bots;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(Bots, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().currentAccount || stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().passwordAccount
        };
    }
}));

/***/ }),

/***/ 2882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2883);
/* harmony import */ var _TrailingStop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
/* harmony import */ var _PercentUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2908);
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2912);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




//import RelativeOrders from "./RelativeOrders";


var bots = {};

/* harmony default export */ __webpack_exports__["default"] = ({
    strategies: {
        SpreadTrade: _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__["default"],
        TrailingStop: _TrailingStop__WEBPACK_IMPORTED_MODULE_1__["default"],
        //RelativeOrders,
        PercentUp: _PercentUp__WEBPACK_IMPORTED_MODULE_2__["default"]
    },

    create: function create(strategy, account, initData) {
        var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"](account + "::" + strategy + "[" + initData.name + "]");

        var bot = new this.strategies[strategy](account, storage, initData);
        bots["__bots__" + storage.name] = bot;

        return bot;
    },
    delete: function _delete(bot) {
        var name = "__bots__" + bot.storage.name;

        bots[name].delete();
        delete bots[name];
    },
    getBots: function getBots(account) {
        var _this = this;

        //console.log("getBots", Object.keys(bots))

        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"].getAccountBot(account).map(function (key) {
            if (bots[key]) return bots[key];

            var _key$replace$split = key.replace(/^__bots__(.+)::(\w+)\[(\w+)\]/, "$2,$3").split(","),
                _key$replace$split2 = _slicedToArray(_key$replace$split, 2),
                strategy = _key$replace$split2[0],
                name = _key$replace$split2[1];

            if (!strategy || !name) return null;

            var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"](account + "::" + strategy + "[" + name + "]");

            var bot = new _this.strategies[strategy](account, storage);
            bots[key] = bot;
            return bot;
        }).filter(function (el) {
            return el;
        });
    },
    hasBot: function hasBot(account, strategy, name) {
        console.log("check name stategy", account, strategy, name);
        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"].has(account + "::" + strategy + "[" + name + "]");
    }
});

/***/ }),

/***/ 2883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2884);
/* harmony import */ var components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2902);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(420);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2885);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2889);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(599);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2904);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(726);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(604);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var SpreadTrade = function () {
    function SpreadTrade(account, storage, initData) {
        var _this = this;

        _classCallCheck(this, SpreadTrade);

        this.state = components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__["default"];

        this.queue = function () {
            _this.queueEvents = _this.queueEvents.then(_this.checkOrders).catch(_this.logger.error.bind(_this.logger));
        };

        this.checkOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var state, ticker, feedPrice, buyPrice, sellPrice, buyOrder, sellOrder, accountBalances, baseBalance, quoteBalance, baseAmount, quoteAmount, orderAmount, amount, obj, _obj, _orderAmount, _amount, _obj2, _obj3;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            state = _this.storage.read();
                            //console.log("state", state);

                            _context.next = 3;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_ticker(_this.base.symbol, _this.quote.symbol);

                        case 3:
                            ticker = _context.sent;


                            _this.defaultPrice = state.defaultPrice;

                            if (!state.fromMarket) {
                                _context.next = 9;
                                break;
                            }

                            _context.t0 = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ticker.latest);
                            _context.next = 12;
                            break;

                        case 9:
                            _context.next = 11;
                            return _this.getFeed();

                        case 11:
                            _context.t0 = _context.sent;

                        case 12:
                            feedPrice = _context.t0;
                            buyPrice = feedPrice.times(1 - state.base.spread / 100).toNumber();
                            sellPrice = feedPrice.times(1 + state.quote.spread / 100).toNumber();


                            feedPrice = feedPrice.toNumber();

                            if (!(feedPrice == 0)) {
                                _context.next = 18;
                                break;
                            }

                            return _context.abrupt("return");

                        case 18:
                            if (!state.base.order.id) {
                                _context.next = 24;
                                break;
                            }

                            _context.next = 21;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_objects([state.base.order.id]);

                        case 21:
                            _context.t1 = _context.sent[0];
                            _context.next = 25;
                            break;

                        case 24:
                            _context.t1 = state.base.order.id;

                        case 25:
                            buyOrder = _context.t1;

                            if (!state.quote.order.id) {
                                _context.next = 32;
                                break;
                            }

                            _context.next = 29;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_objects([state.quote.order.id]);

                        case 29:
                            _context.t2 = _context.sent[0];
                            _context.next = 33;
                            break;

                        case 32:
                            _context.t2 = state.quote.order.id;

                        case 33:
                            sellOrder = _context.t2;
                            _context.next = 36;
                            return _this.account.balances(_this.base.id, _this.quote.id);

                        case 36:
                            _context.t3 = function (acc, balance) {
                                _this.base.id === balance.asset_id ? acc.base = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(balance.amount).div(Math.pow(10, _this.base.precision)).toNumber() : acc.quote = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(balance.amount).div(Math.pow(10, _this.quote.precision)).toNumber();
                                return acc;
                            };

                            _context.t4 = {};
                            accountBalances = _context.sent.reduce(_context.t3, _context.t4);
                            baseBalance = state.base.balance === "-" ? 0 : state.base.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.base.balance);
                            quoteBalance = state.quote.balance === "-" ? 0 : state.quote.balance === "" ? accountBalances.quote : Math.min(accountBalances.quote, state.quote.balance);
                            baseAmount = state.base.percent.toString() == "true" ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(baseBalance).times(state.base.amount).div(100).toNumber() : state.base.amount;
                            quoteAmount = state.quote.percent.toString() == "true" ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quoteBalance).times(state.quote.amount).div(100).toNumber() : state.quote.amount;


                            console.log("prices", buyPrice, feedPrice, sellPrice);
                            console.log("orders", buyOrder, sellOrder);

                            if (!buyOrder) {
                                _context.next = 69;
                                break;
                            }

                            //check Price
                            console.log("check buyOrder: move=" + (Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2) + ", fill=" + (ticker.lowest_ask <= buyPrice));

                            if (!(Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2 && ticker.lowest_ask > buyPrice)) {
                                _context.next = 67;
                                break;
                            }

                            // move order

                            _this.logger.info("move buy order: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 51;
                            return _this.account.cancelOrder(state.base.order.id);

                        case 51:

                            // check amount in order
                            orderAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(buyOrder.for_sale).div(Math.pow(10, _this.base.precision)).toNumber();


                            !["", "-"].includes(state.base.balance) && (state.base.balance = Number(state.base.balance) + orderAmount);

                            // add to sell balance
                            if (state.base.order.amount > orderAmount && !["", "-"].incudes(state.quote.balance)) state.quote.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount - orderAmount).div(state.base.order.price).plus(state.quote.balance).toNumber();

                            amount = Math.min(baseBalance, baseAmount);
                            _context.prev = 55;
                            _context.next = 58;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, amount, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());

                        case 58:
                            obj = _context.sent;

                            state.base.order = {
                                id: obj ? obj.id : "1.7.0",
                                price: buyPrice,
                                amount: amount
                            };
                            !["", "-"].includes(state.base.balance) && (state.base.balance -= amount);
                            _context.next = 67;
                            break;

                        case 63:
                            _context.prev = 63;
                            _context.t5 = _context["catch"](55);

                            _this.logger.error(_context.t5);
                            state.base.order.id = undefined;

                        case 67:
                            _context.next = 84;
                            break;

                        case 69:
                            if (/^1.7.\d*$/.test(state.base.order.id)) {
                                // fill order
                                !["", "-"].includes(state.quote.balance) && (state.quote.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount).div(state.base.order.price).plus(state.quote.balance).toNumber());

                                state.base.order.id = undefined;
                            }

                            console.log("create buyOrder: balance=" + (baseBalance >= baseAmount) + ", fill=" + (ticker.lowest_ask <= buyPrice));

                            if (!(baseBalance >= baseAmount && ticker.lowest_ask > buyPrice)) {
                                _context.next = 84;
                                break;
                            }

                            //buy
                            _this.logger.info("buy: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 73;
                            _context.next = 76;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, baseAmount, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());

                        case 76:
                            _obj = _context.sent;

                            state.base.order = {
                                id: _obj ? _obj.id : "1.7.0",
                                price: buyPrice,
                                amount: baseAmount
                            };
                            !["", "-"].includes(state.base.balance) && (state.base.balance -= baseAmount);
                            _context.next = 84;
                            break;

                        case 81:
                            _context.prev = 81;
                            _context.t6 = _context["catch"](73);

                            _this.logger.error(_context.t6);

                        case 84:
                            if (!sellOrder) {
                                _context.next = 108;
                                break;
                            }

                            //check Price
                            console.log("check sellOrder: move=" + (Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2) + ", fill=" + (ticker.highest_bid >= sellPrice));

                            if (!(Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2 && ticker.highest_bid < sellPrice)) {
                                _context.next = 106;
                                break;
                            }

                            // move order

                            _this.logger.info("move sell order: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 90;
                            return _this.account.cancelOrder(state.quote.order.id);

                        case 90:

                            // check amount in order
                            _orderAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(sellOrder.for_sale).div(Math.pow(10, _this.quote.precision)).toNumber();

                            !["", "-"].includes(state.quote.balance) && (state.quote.balance = Number(state.quote.balance) + _orderAmount);

                            // add to buy balance
                            if (state.quote.order.amount > _orderAmount && !["", "-"].includes(state.base.balance)) state.base.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount - _orderAmount).times(state.quote.order.price).plus(state.base.balance).toNumber();

                            _amount = Math.min(quoteBalance, quoteAmount);
                            _context.prev = 94;
                            _context.next = 97;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, _amount, sellPrice);

                        case 97:
                            _obj2 = _context.sent;

                            state.quote.order = {
                                id: _obj2 ? _obj2.id : "1.7.0",
                                price: sellPrice,
                                amount: _amount
                            };
                            !["", "-"].includes(state.quote.balance) && (state.quote.balance -= _amount);
                            _context.next = 106;
                            break;

                        case 102:
                            _context.prev = 102;
                            _context.t7 = _context["catch"](94);

                            _this.logger.error(_context.t7);
                            state.quote.order.id = undefined;

                        case 106:
                            _context.next = 123;
                            break;

                        case 108:
                            if (/^1.7.\d*$/.test(state.quote.order.id)) {
                                // fill order
                                !["", "-"].includes(state.base.balance) && (state.base.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount).times(state.quote.order.price).plus(state.base.balance).toNumber());
                                state.quote.order.id = undefined;
                            }

                            console.log("create sellOrder: balance=" + (quoteBalance >= quoteAmount) + ", fill=" + (ticker.highest_bid >= sellPrice));

                            if (!(quoteBalance >= quoteAmount && ticker.highest_bid < sellPrice)) {
                                _context.next = 123;
                                break;
                            }

                            //buy
                            _this.logger.info("sell: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 112;
                            _context.next = 115;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, quoteAmount, sellPrice);

                        case 115:
                            _obj3 = _context.sent;

                            state.quote.order = {
                                id: _obj3 ? _obj3.id : "1.7.0",
                                price: sellPrice,
                                amount: quoteAmount
                            };
                            !["", "-"].includes(state.quote.balance) && (state.quote.balance -= quoteAmount);
                            _context.next = 123;
                            break;

                        case 120:
                            _context.prev = 120;
                            _context.t8 = _context["catch"](112);

                            _this.logger.error(_context.t8);

                        case 123:

                            _this.storage.write(state);

                        case 124:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[55, 63], [73, 81], [94, 102], [112, 120]]);
        }));

        this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_6__["default"](account);
        this.storage = storage;

        if (initData) {
            storage.init({
                name: initData.name,
                base: {
                    asset: initData.baseAsset,
                    balance: initData.baseBalance,
                    spread: initData.baseSpread,
                    amount: initData.baseAmount,
                    percent: initData.percentBaseAmount,
                    order: {
                        //id, price and amount
                    }
                },
                quote: {
                    asset: initData.quoteAsset,
                    balance: initData.quoteBalance,
                    spread: initData.quoteSpread,
                    amount: initData.quoteAmount,
                    percent: initData.percentQuoteAmount,
                    order: {
                        //id, price and amount
                    }
                },
                fromMarket: initData.fromMarket,
                defaultPrice: initData.defaultPrice
            });
        }

        this.name = storage.read().name;

        this.logger = console;
        this.queueEvents = Promise.resolve();
        this.run = false;
    }

    _createClass(SpreadTrade, [{
        key: "start",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var state;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                state = this.storage.read();
                                _context2.next = 3;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.base.asset];

                            case 3:
                                this.base = _context2.sent;
                                _context2.next = 6;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.quote.asset];

                            case 6:
                                this.quote = _context2.sent;


                                if ([this.base.issuer, this.quote.issuer].includes("1.2.0")) {
                                    if ([this.base.id, this.quote.id].includes("1.3.0")) this.getFeed = this.getCoreFeed;else if (this.base.issuer == this.quote.issuer) this.getFeed = this.getSmartFeed;else this.getFeed = this.getUIAFeed;
                                } else {
                                    this.getFeed = this.getUIAFeed;
                                }

                                _context2.next = 10;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();

                            case 10:
                                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
                                    setting: "walletLockTimeout",
                                    value: 0
                                });

                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(this.queue);
                                this.run = true;

                            case 13:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function start() {
                return _ref2.apply(this, arguments);
            }

            return start;
        }()
    }, {
        key: "stop",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(this.queue);
                                this.run = false;
                                _context3.next = 4;
                                return this.queueEvents;

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function stop() {
                return _ref3.apply(this, arguments);
            }

            return stop;
        }()
    }, {
        key: "delete",
        value: function _delete() {
            this.storage.delete();
        }
    }, {
        key: "getCoreFeed",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var rate, _ref5, _ref6, base, quote;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                rate = void 0;

                                if (!(this.base.id == "1.3.0")) {
                                    _context4.next = 7;
                                    break;
                                }

                                _context4.next = 4;
                                return this.quote.update();

                            case 4:
                                rate = this.quote.options.core_exchange_rate;
                                _context4.next = 10;
                                break;

                            case 7:
                                _context4.next = 9;
                                return this.base.update();

                            case 9:
                                rate = this.base.options.core_exchange_rate;

                            case 10:
                                _ref5 = rate.base.asset_id == this.base.id ? [rate.base, rate.quote] : [rate.quote, rate.base], _ref6 = _slicedToArray(_ref5, 2), base = _ref6[0], quote = _ref6[1];
                                return _context4.abrupt("return", Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(Math.pow(10, this.base.precision)).div(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(Math.pow(10, this.quote.precision))));

                            case 12:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getCoreFeed() {
                return _ref4.apply(this, arguments);
            }

            return getCoreFeed;
        }()
    }, {
        key: "getSmartFeed",
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var bts, rate, _ref8, _ref9, base, quote, basePrice, quotePrice;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"]["bts"];

                            case 2:
                                bts = _context5.sent;
                                _context5.next = 5;
                                return this.base.update();

                            case 5:
                                rate = this.base.options.core_exchange_rate;
                                _ref8 = rate.base.asset_id == "1.3.0" ? [rate.base, rate.quote] : [rate.quote, rate.base], _ref9 = _slicedToArray(_ref8, 2), base = _ref9[0], quote = _ref9[1];
                                basePrice = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(Math.pow(10, bts.precision)).div(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(Math.pow(10, this.base.precision)));
                                _context5.next = 10;
                                return this.quote.update();

                            case 10:
                                rate = this.quote.options.core_exchange_rate;
                                if (rate.base.asset_id == "1.3.0") {
                                    base = rate.base;
                                    quote = rate.quote;
                                } else {
                                    base = rate.quote;
                                    quote = rate.base;
                                }

                                quotePrice = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(Math.pow(10, bts.precision)).div(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(Math.pow(10, this.quote.precision)));
                                return _context5.abrupt("return", quotePrice.div(basePrice));

                            case 14:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getSmartFeed() {
                return _ref7.apply(this, arguments);
            }

            return getSmartFeed;
        }()
    }, {
        key: "getUIAFeed",
        value: function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                if (!this.defaultPrice) {
                                    _context6.next = 4;
                                    break;
                                }

                                _context6.t0 = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this.defaultPrice);
                                _context6.next = 7;
                                break;

                            case 4:
                                _context6.next = 6;
                                return this.binancePrice(this.base.symbol, this.quote.symbol);

                            case 6:
                                _context6.t0 = _context6.sent;

                            case 7:
                                return _context6.abrupt("return", _context6.t0);

                            case 8:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getUIAFeed() {
                return _ref10.apply(this, arguments);
            }

            return getUIAFeed;
        }()
    }, {
        key: "binancePrice",
        value: function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(base, quote) {
                var asset, response, data;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                asset = ("" + quote.split(".").slice(-1)[0] + base.split(".").slice(-1)[0]).toUpperCase().replace("USD", "USDT");

                                console.log("get asset: " + asset);
                                this.priceArray = this.priceArray || [];

                                _context7.prev = 3;
                                _context7.next = 6;
                                return fetch("https://api.binance.com/api/v1/trades?symbol=" + asset + "&limit=1");

                            case 6:
                                response = _context7.sent;
                                _context7.next = 9;
                                return response.json();

                            case 9:
                                data = _context7.sent;

                                this.priceArray.push(data[0].price);
                                //this.priceArray.push(10)
                                _context7.next = 16;
                                break;

                            case 13:
                                _context7.prev = 13;
                                _context7.t0 = _context7["catch"](3);

                                this.logger.error("Error Binance request: " + asset + ", error: " + _context7.t0);

                            case 16:

                                if (this.priceArray.length > 10) this.priceArray.shift();

                                return _context7.abrupt("return", this.priceArray.length > 0 ? this.priceArray.reduce(function (a, b) {
                                    return a.plus(b);
                                }, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0)).div(this.priceArray.length) : Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0));

                            case 18:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this, [[3, 13]]);
            }));

            function binancePrice(_x, _x2) {
                return _ref11.apply(this, arguments);
            }

            return binancePrice;
        }()
    }]);

    return SpreadTrade;
}();

SpreadTrade.create = components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__["default"];


/* harmony default export */ __webpack_exports__["default"] = (SpreadTrade);

/***/ }),

/***/ 2884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2759);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2882);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2885);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2886);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Create = function (_React$Component) {
    _inherits(Create, _React$Component);

    function Create() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Create);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Create.__proto__ || Object.getPrototypeOf(Create)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: "",
            baseAsset: "RUDEX.USDT",
            quoteAsset: "RUDEX.BTC",
            baseAmount: 10,
            quoteAmount: 0.01,
            baseSpread: 10,
            quoteSpread: 10,
            baseBalance: 100,
            quoteBalance: 0.1,
            percentBaseAmount: false,
            percentQuoteAmount: false,
            validate: ["name"]
        }, _this.assetValidate = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
                var asset, blockchainAssets, validate;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                asset = _this.state[name];
                                _context.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.list_assets(asset, 1);

                            case 3:
                                blockchainAssets = _context.sent[0];
                                validate = _this.state.validate;


                                if (asset !== blockchainAssets.symbol) validate.push(name);else {
                                    validate = validate.filter(function (input) {
                                        return input !== name;
                                    });
                                }

                                _this.setState({ validate: validate });
                                _this.props.enableCreate(_this.state.validate.length == 0);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
            console.log(name, value);

            if (["baseAsset", "quoteAsset"].includes(name)) value = value.toUpperCase();

            _this.setState(_defineProperty({}, name, value), function () {
                return _this.validate(name, value);
            });
        }, _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_2__["default"].hasBot(_this.props.account, _this.props.name, value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "baseAsset":
                case "quoteAsset":
                    if (value.length !== 0) {
                        _this.assetValidate(name);
                    } else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
                case "baseBalance":
                case "quoteBalance":
                    if (value !== "-" && isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "baseAmount":
                case "quoteAmount":
                case "baseSpread":
                case "quoteSpread":
                    if (value === "" || isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "defaultPrice":
                    if (!isNaN(+value)) _this.setState({
                        validate: validate.filter(function (input) {
                            return input !== name;
                        })
                    });else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
            }

            console.log(_this.state.validate);
            _this.props.enableCreate(_this.state.validate.length == 0);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Create, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.assetValidate = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(this.assetValidate, 200);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.name" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "name",
                        id: "name",
                        type: "text",
                        ref: "input",
                        value: this.state.name,
                        onChange: this.handleChange,
                        autoComplete: "name",
                        style: {
                            border: this.state.validate.includes("name") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.base" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            name: "baseAsset",
                            value: this.state.baseAsset,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "baseBalance",
                            id: "baseBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.baseBalance,
                            onChange: this.handleChange,
                            autoComplete: "baseBalance",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { onChange: this.handleChange },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentBaseAmount"
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trade.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentBaseAmount",
                                defaultChecked: true
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trade.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "baseAmount",
                            id: "baseAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.baseAmount,
                            onChange: this.handleChange,
                            autoComplete: "baseAmount",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trade.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "baseSpread",
                            id: "baseSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.baseSpread,
                            onChange: this.handleChange,
                            autoComplete: "baseSpread",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseSpread") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.quote" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            name: "quoteAsset",
                            value: this.state.quoteAsset,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "quoteBalance",
                            id: "quoteBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.quoteBalance,
                            onChange: this.handleChange,
                            autoComplete: "quoteBalance",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { onChange: this.handleChange },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentQuoteAmount"
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trade.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentQuoteAmount",
                                defaultChecked: true
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trade.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "quoteAmount",
                            id: "quoteAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.quoteAmount,
                            onChange: this.handleChange,
                            autoComplete: "quoteAmount",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trade.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "quoteSpread",
                            id: "quoteSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.quoteSpread,
                            onChange: this.handleChange,
                            autoComplete: "quoteSpread",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteSpread") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trade.default_price" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "defaultPrice",
                        id: "defaultPrice",
                        type: "text",
                        ref: "input",
                        value: this.state.defaultPrice,
                        onChange: this.handleChange,
                        autoComplete: "defaultPrice",
                        style: {
                            border: this.state.validate.includes("defaultPrice") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            type: "checkbox",
                            name: "fromMarket",
                            onChange: this.handleChange,
                            checked: this.state.fromMarket
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trade.get_price_from_market" })
                    )
                )
            );
        }
    }]);

    return Create;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 2885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(489);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
    db: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                //console.log(`call Apis.db.${method}(${[...arguments]})`);
                return apis.instance().db_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    history: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().history_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    network: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().network_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    crypto: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().crypto_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    orders: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().orders_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    })
});

/***/ }),

/***/ 2886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLabel", function() { return AssetLabel; });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2759);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2887);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2885);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2889);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2792);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2890);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(585);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(587);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var AssetLabel = function (_React$Component) {
    _inherits(AssetLabel, _React$Component);

    function AssetLabel() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, AssetLabel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AssetLabel.__proto__ || Object.getPrototypeOf(AssetLabel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: null
        }, _this.hidePrefix = function (name) {
            var arr = name.split(".");
            if (Object(branding__WEBPACK_IMPORTED_MODULE_7__["getAssetHideNamespaces"])().includes(arr[0] + ".")) arr.shift();

            return arr.join(".");
        }, _this.setAssetName = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
                var asset;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][name];

                            case 2:
                                asset = _context.sent;


                                _this.setState({
                                    name: asset.bitasset_data_id ? "bit" + name : name
                                });

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AssetLabel, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setAssetName(this.props.name);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.name !== this.props.name) this.setAssetName(nextProps.name);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    replaceNoneToBts: false,
                    maxWidth: 30,
                    name: this.props.name
                }),
                this.hidePrefix(this.state.name || this.props.name)
            );
        }
    }]);

    return AssetLabel;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var options = Object(branding__WEBPACK_IMPORTED_MODULE_7__["getMyMarketsQuotes"])().map(function (name) {
    return {
        value: name,
        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AssetLabel, { name: name })
    };
});

var AssetSelector = function (_React$Component2) {
    _inherits(AssetSelector, _React$Component2);

    function AssetSelector() {
        var _ref3,
            _this4 = this;

        var _temp2, _this3, _ret2;

        _classCallCheck(this, AssetSelector);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref3 = AssetSelector.__proto__ || Object.getPrototypeOf(AssetSelector)).call.apply(_ref3, [this].concat(args))), _this3), _this3.onChange = function (option) {
            console.log("onChange", option);
            _this3.props.onChange({
                target: {
                    name: _this3.props.name,
                    value: option ? option.value : ""
                }
            });
        }, _this3.promiseOptions = function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(inputValue) {
                var result, asset;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                inputValue = inputValue.toUpperCase();

                                result = options.filter(function (i) {
                                    return i.value == inputValue;
                                });

                                if (!(result.length === 0 && inputValue)) {
                                    _context2.next = 7;
                                    break;
                                }

                                _context2.next = 5;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.list_assets(inputValue, 1);

                            case 5:
                                asset = _context2.sent[0];


                                if (asset && !options.find(function (i) {
                                    return i.value == asset.symbol;
                                })) {
                                    options.push({
                                        value: asset.symbol,
                                        label: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AssetLabel, { name: asset.symbol })
                                    });
                                }

                            case 7:
                                return _context2.abrupt("return", { options: options });

                            case 8:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this4);
            }));

            return function (_x2) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp2), _possibleConstructorReturn(_this3, _ret2);
    }

    _createClass(AssetSelector, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.promiseOptions = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(this.promiseOptions, 200);
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var value = options.find(function (option) {
                return option.value === _this5.props.value;
            });

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                { style: { marginBottom: 30 } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    value: value,
                    onChange: this.onChange,
                    loadOptions: this.promiseOptions,
                    searchPromptText: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("bots.asset_selector.wait"),
                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("bots.asset_selector.placeholder")
                })
            );
        }
    }]);

    return AssetSelector;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetSelector);

/***/ }),

/***/ 2889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Asset = function () {
    _createClass(Asset, null, [{
        key: "get",
        value: function get(_, name) {
            if (this[name]) return this[name];

            return (/^1\.3\.\d+$/.test(name) || !isNaN(name) ? this.id(name) : this.getAsset(name)
            );
        }
    }, {
        key: "getAsset",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_symbol) {
                var symbol, obj;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                symbol = _symbol.toUpperCase();


                                this.map = this.map || {};

                                if (!this.map[symbol]) {
                                    _context.next = 4;
                                    break;
                                }

                                return _context.abrupt("return", this.map[symbol]);

                            case 4:
                                _context.next = 6;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.list_assets(symbol, 1);

                            case 6:
                                obj = _context.sent[0];

                                if (!(!obj || obj.symbol !== symbol)) {
                                    _context.next = 9;
                                    break;
                                }

                                throw new Error("Not found asset " + symbol + "! Blockchain return " + (obj ? obj.symbol : obj));

                            case 9:

                                this.map[symbol] = new this(obj);
                                return _context.abrupt("return", this.map[symbol]);

                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAsset(_x) {
                return _ref.apply(this, arguments);
            }

            return getAsset;
        }()
    }, {
        key: "id",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_id) {
                var _this = this;

                var asset;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.map = this.map || {};
                                asset = Object.keys(this.map).find(function (symbol) {
                                    return _this.map[symbol].id == _id;
                                });

                                if (!asset) {
                                    _context2.next = 4;
                                    break;
                                }

                                return _context2.abrupt("return", this.map[asset]);

                            case 4:
                                _context2.next = 6;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets([_id]);

                            case 6:
                                asset = _context2.sent[0];

                                if (asset) {
                                    _context2.next = 9;
                                    break;
                                }

                                throw new Error("Not found asset by id " + _id + "!");

                            case 9:

                                this.map[asset.symbol] = new this(asset);
                                return _context2.abrupt("return", this.map[asset.symbol]);

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function id(_x2) {
                return _ref2.apply(this, arguments);
            }

            return id;
        }()
    }, {
        key: "fromParam",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(param) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.t0 = param.amount;
                                _context3.next = 3;
                                return this.id(param.asset_id);

                            case 3:
                                _context3.t1 = _context3.sent;
                                return _context3.abrupt("return", {
                                    amount: _context3.t0,
                                    asset: _context3.t1
                                });

                            case 5:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function fromParam(_x3) {
                return _ref3.apply(this, arguments);
            }

            return fromParam;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this2 = this;

                var assets;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                this.map = this.map || {};

                                _context4.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets(Object.keys(this.map).map(function (symbol) {
                                    return _this2.map[symbol].id;
                                }));

                            case 3:
                                assets = _context4.sent;

                                assets.forEach(function (asset) {
                                    return Object.assign(_this2.map[asset.symbol], asset);
                                });

                            case 5:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function update() {
                return _ref4.apply(this, arguments);
            }

            return update;
        }()
    }]);

    function Asset(rpcObj) {
        _classCallCheck(this, Asset);

        Object.assign(this, rpcObj);
    }

    _createClass(Asset, [{
        key: "toParam",
        value: function toParam() {
            var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            return { amount: number, asset_id: this.id };
        }
    }, {
        key: "fee",
        value: function fee() {
            return this.options.market_fee_percent / 100 / 100;
        }
    }, {
        key: "update",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.t0 = Object;
                                _context5.t1 = this;
                                _context5.next = 4;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets([this.id]);

                            case 4:
                                _context5.t2 = _context5.sent[0];

                                _context5.t0.assign.call(_context5.t0, _context5.t1, _context5.t2);

                            case 6:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function update() {
                return _ref5.apply(this, arguments);
            }

            return update;
        }()
    }]);

    return Asset;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Proxy({}, Asset));

/***/ }),

/***/ 2902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2886);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2903);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var State = function (_React$Component) {
    _inherits(State, _React$Component);

    function State() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, State);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = State.__proto__ || Object.getPrototypeOf(State)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value,
                base = void 0,
                quote = void 0;

            //console.log(name, value, typeof value);

            switch (name) {
                case "baseAmount":
                    base = _this.state.base;
                    base.amount = value;
                    _this.setState({ base: base });
                    break;
                case "percentBaseAmount":
                    base = _this.state.base;
                    base.percent = value == "true";
                    _this.setState({ base: base });
                    break;
                case "baseBalance":
                    base = _this.state.base;
                    base.balance = value;
                    _this.setState({ base: base });
                    break;
                case "baseSpread":
                    base = _this.state.base;
                    base.spread = value;
                    _this.setState({ base: base });
                    break;
                case "quoteAmount":
                    quote = _this.state.quote;
                    quote.amount = value;
                    _this.setState({ quote: quote });
                    break;
                case "percentQuoteAmount":
                    quote = _this.state.quote;
                    quote.percent = value == "true";
                    _this.setState({ quote: quote });
                    break;
                case "quoteBalance":
                    quote = _this.state.quote;
                    quote.balance = value;
                    _this.setState({ quote: quote });
                    break;
                case "quoteSpread":
                    quote = _this.state.quote;
                    quote.spread = value;
                    _this.setState({ quote: quote });
                    break;
                case "defaultPrice":
                    _this.setState({ defaultPrice: value });
                    break;
                case "fromMarket":
                    _this.setState({ fromMarket: event.target.checked });
                    break;
            }

            //this.setState({[name]: value}, () => this.validate(name, value));
        }, _this.handleUpdateBot = function () {
            var stateNow = _this.props.bot.storage.read();
            _this.state.base.order = stateNow.base.order;
            _this.state.quote.order = stateNow.quote.order;

            _this.props.bot.storage.write(_this.state);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(State, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState(Object.assign({ validate: [] }, this.props.bot.storage.read()));
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "content-block",
                            style: {
                                marginLeft: 50,
                                marginTop: 30
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.base" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "baseAsset",
                            value: {
                                value: this.state.base.asset,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.base.asset })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.base.balance,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentBaseAmount",
                                checked: this.state.base.percent,
                                onChange: this.handleChange
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trade.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentBaseAmount",
                                checked: !this.state.base.percent,
                                onChange: this.handleChange
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trade.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.base.amount,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trade.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.base.spread,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseSpread") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "content-block",
                            style: {
                                marginLeft: 50,
                                marginTop: 30
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.quote" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "quoteAsset",
                            value: {
                                value: this.state.quote.asset,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.quote.asset })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.quote.balance,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentQuoteAmount",
                                checked: this.state.quote.percent,
                                onChange: this.handleChange
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trade.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentQuoteAmount",
                                checked: !this.state.quote.percent,
                                onChange: this.handleChange
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trade.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.quote.amount,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trade.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.quote.spread,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteSpread") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trade.default_price" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "defaultPrice",
                        type: "text",
                        ref: "input",
                        value: this.state.defaultPrice,
                        onChange: this.handleChange,
                        disabled: this.props.bot.run,
                        style: {
                            border: this.state.validate.includes("defaultPrice") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "checkbox",
                            name: "fromMarket",
                            onChange: this.handleChange,
                            checked: this.state.fromMarket,
                            disabled: this.props.bot.run
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trade.get_price_from_market" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button",
                        onClick: this.handleUpdateBot,
                        disabled: this.props.bot.run,
                        style: { marginLeft: 50, marginBottom: 30 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.update" })
                )
            );
        }
    }]);

    return State;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ 2904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2889);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(599);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(605);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(604);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(420);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var Account = function () {
    function Account(name) {
        var _this = this;

        var feeSymbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "BTS";

        _classCallCheck(this, Account);

        this.promise = Promise.all([lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_account_by_name(name), lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][feeSymbol]]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                acc = _ref2[0],
                fee = _ref2[1];

            _this.acc = acc;
            _this.feeAsset = fee;
        });
    }

    _createClass(Account, [{
        key: "cancelOrder",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.promise;

                            case 2:
                                return _context.abrupt("return", this.sendTransaction("limit_order_cancel", {
                                    fee: this.feeAsset.toParam(),
                                    fee_paying_account: this.acc.id,
                                    order: id,
                                    extensions: []
                                }));

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function cancelOrder(_x2) {
                return _ref3.apply(this, arguments);
            }

            return cancelOrder;
        }()
    }, {
        key: "buy",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(buySymbol, baseSymbol, amount, price) {
                var fill_or_kill = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var expire = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "2025-02-02T02:02:02";
                var buyAsset, baseAsset, buyAmount, sellAmount, tx;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.promise;

                            case 2:
                                _context2.next = 4;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][(typeof buySymbol === "undefined" ? "undefined" : _typeof(buySymbol)) === "object" ? buySymbol.asset_id : buySymbol];

                            case 4:
                                buyAsset = _context2.sent;
                                _context2.next = 7;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][(typeof baseSymbol === "undefined" ? "undefined" : _typeof(baseSymbol)) === "object" ? baseSymbol.asset_id : baseSymbol];

                            case 7:
                                baseAsset = _context2.sent;
                                buyAmount = Math.floor(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])((typeof buySymbol === "undefined" ? "undefined" : _typeof(buySymbol)) === "object" ? buySymbol.amount : amount).times(Math.pow(10, buyAsset.precision)).toString());
                                sellAmount = Math.floor(((typeof baseSymbol === "undefined" ? "undefined" : _typeof(baseSymbol)) === "object" ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(baseSymbol.amount) : Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(amount).times(price)).times(Math.pow(10, baseAsset.precision)).toString());

                                if (!(buyAmount == 0 || sellAmount == 0)) {
                                    _context2.next = 12;
                                    break;
                                }

                                throw new Error("Amount equal 0!");

                            case 12:
                                _context2.next = 14;
                                return this.sendTransaction("limit_order_create", {
                                    fee: this.feeAsset.toParam(),
                                    seller: this.acc.id,
                                    amount_to_sell: baseAsset.toParam(sellAmount),
                                    min_to_receive: buyAsset.toParam(buyAmount),
                                    expiration: expire,
                                    fill_or_kill: fill_or_kill,
                                    extensions: []
                                });

                            case 14:
                                tx = _context2.sent;
                                _context2.next = 17;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_objects([tx[0].trx.operation_results[0][1]]);

                            case 17:
                                return _context2.abrupt("return", _context2.sent[0]);

                            case 18:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function buy(_x3, _x4, _x5, _x6) {
                return _ref4.apply(this, arguments);
            }

            return buy;
        }()
    }, {
        key: "sell",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sellSymbol, baseSymbol, amount, price) {
                var fill_or_kill = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var expire = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "2025-02-02T02:02:02";
                var sellAsset, baseAsset, sellAmount, buyAmount, tx;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.promise;

                            case 2:
                                _context3.next = 4;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][(typeof sellSymbol === "undefined" ? "undefined" : _typeof(sellSymbol)) === "object" ? sellSymbol.asset_id : sellSymbol];

                            case 4:
                                sellAsset = _context3.sent;
                                _context3.next = 7;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][(typeof baseSymbol === "undefined" ? "undefined" : _typeof(baseSymbol)) === "object" ? baseSymbol.asset_id : baseSymbol];

                            case 7:
                                baseAsset = _context3.sent;
                                sellAmount = Math.floor(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])((typeof sellSymbol === "undefined" ? "undefined" : _typeof(sellSymbol)) === "object" ? sellSymbol.amount : amount).times(Math.pow(10, sellAsset.precision)).toString());
                                buyAmount = Math.floor(((typeof baseSymbol === "undefined" ? "undefined" : _typeof(baseSymbol)) === "object" ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(baseSymbol.amount) : Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(amount).times(price)).times(Math.pow(10, baseAsset.precision)).toString());

                                if (!(buyAmount == 0 || sellAmount == 0)) {
                                    _context3.next = 12;
                                    break;
                                }

                                throw new Error("Amount equal 0!");

                            case 12:
                                _context3.next = 14;
                                return this.sendTransaction("limit_order_create", {
                                    fee: this.feeAsset.toParam(),
                                    seller: this.acc.id,
                                    amount_to_sell: sellAsset.toParam(sellAmount),
                                    min_to_receive: baseAsset.toParam(buyAmount),
                                    expiration: expire,
                                    fill_or_kill: fill_or_kill,
                                    extensions: []
                                });

                            case 14:
                                tx = _context3.sent;
                                _context3.next = 17;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_objects([tx[0].trx.operation_results[0][1]]);

                            case 17:
                                return _context3.abrupt("return", _context3.sent[0]);

                            case 18:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function sell(_x9, _x10, _x11, _x12) {
                return _ref5.apply(this, arguments);
            }

            return sell;
        }()
    }, {
        key: "balances",
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _args4 = arguments;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.promise;

                            case 2:
                                return _context4.abrupt("return", lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_account_balances(this.acc.id, [].concat(Array.prototype.slice.call(_args4))));

                            case 3:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function balances() {
                return _ref6.apply(this, arguments);
            }

            return balances;
        }()
    }, {
        key: "sendTransaction",
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(type, operation) {
                var tr, private_key;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                tr = new bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["TransactionBuilder"]();

                                tr.add_type_operation(type, operation);
                                _context5.next = 4;
                                return tr.set_required_fees();

                            case 4:
                                _context5.next = 6;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__["default"].unlock();

                            case 6:
                                private_key = stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].getPrivateKey(this.acc.active.key_auths[0][0]);

                                tr.add_signer(private_key, private_key.toPublicKey().toPublicKeyString());

                                return _context5.abrupt("return", tr.broadcast());

                            case 9:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function sendTransaction(_x15, _x16) {
                return _ref7.apply(this, arguments);
            }

            return sendTransaction;
        }()
    }]);

    return Account;
}();

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ 2905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2906);
/* harmony import */ var components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(420);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2885);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2889);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(599);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2904);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(726);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(604);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var TrailingStop = function () {
    function TrailingStop(account, storage, initData) {
        var _this = this;

        _classCallCheck(this, TrailingStop);

        this.state = components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__["default"];

        this.queue = function () {
            _this.queueEvents = _this.queueEvents.then(_this.checkOrders).catch(_this.logger.error.bind(_this.logger));
        };

        this.checkOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var state, ticker, price, needStoploss, createOrderPrice, stoploss;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            state = _this.storage.read();

                            console.log("checkOrders");

                            _context.next = 4;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_ticker(_this.getAsset.symbol, _this.sellAsset.symbol);

                        case 4:
                            ticker = _context.sent;
                            price = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ticker.latest);
                            needStoploss = price.times(1 - state.percent / 100);
                            createOrderPrice = price.times(1 - state.percent * 2 / 3 / 100);
                            stoploss = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.minAmount).div(state.amount);


                            console.log(price.toNumber(), needStoploss.toNumber(), createOrderPrice.toNumber(), stoploss.toNumber());

                            if (!needStoploss.gt(stoploss)) {
                                _context.next = 16;
                                break;
                            }

                            console.log("up minAmount");
                            state.minAmount = needStoploss.times(state.amount).toNumber();
                            _this.storage.write(state);
                            _context.next = 21;
                            break;

                        case 16:
                            if (!createOrderPrice.lt(stoploss)) {
                                _context.next = 21;
                                break;
                            }

                            console.log("create limit order");
                            _context.next = 20;
                            return _this.account.sell(_this.sellAsset.symbol, _this.getAsset.symbol, state.amount, stoploss.toNumber());

                        case 20:
                            _this.stop();

                        case 21:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_6__["default"](account);
        this.storage = storage;

        if (initData) {
            storage.init({
                name: initData.name,
                sellAsset: initData.sellAsset,
                getAsset: initData.getAsset,
                amount: initData.amount,
                minAmount: initData.minAmount,
                percent: initData.percent
            });
        }

        this.name = storage.read().name;

        this.logger = console;
        this.queueEvents = Promise.resolve();
        this.run = false;
    }

    _createClass(TrailingStop, [{
        key: "start",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var state;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                state = this.storage.read();
                                _context2.next = 3;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.sellAsset];

                            case 3:
                                this.sellAsset = _context2.sent;
                                _context2.next = 6;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.getAsset];

                            case 6:
                                this.getAsset = _context2.sent;
                                _context2.next = 9;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();

                            case 9:
                                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
                                    setting: "walletLockTimeout",
                                    value: 0
                                });

                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(this.queue);
                                this.run = true;

                            case 12:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function start() {
                return _ref2.apply(this, arguments);
            }

            return start;
        }()
    }, {
        key: "stop",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(this.queue);
                                this.run = false;
                                _context3.next = 4;
                                return this.queueEvents;

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function stop() {
                return _ref3.apply(this, arguments);
            }

            return stop;
        }()
    }, {
        key: "delete",
        value: function _delete() {
            this.storage.delete();
        }
    }]);

    return TrailingStop;
}();

TrailingStop.create = components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__["default"];


/* harmony default export */ __webpack_exports__["default"] = (TrailingStop);

/***/ }),

/***/ 2906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2759);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2882);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2885);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2886);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Create = function (_React$Component) {
    _inherits(Create, _React$Component);

    function Create() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Create);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Create.__proto__ || Object.getPrototypeOf(Create)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: "",
            sellAsset: "RUDEX.BTC",
            getAsset: "RUDEX.USDT",
            amount: 0.01,
            minAmount: 1,
            stoploss: 100,
            percent: 10,
            validate: ["name"]
        }, _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value;

            if (["sellAsset", "getAsset"].includes(name)) value = value.toUpperCase();

            if (name === "minAmount") {
                _this.setState({
                    minAmount: value,
                    stoploss: value / _this.state.amount
                }, function () {
                    return _this.validate(name, value);
                });
            } else if (name === "stoploss") {
                _this.setState({
                    minAmount: _this.state.amount * value,
                    stoploss: value
                }, function () {
                    return _this.validate(name, value);
                });
            } else if (name === "amount") {
                _this.setState({
                    amount: value,
                    minAmount: value * _this.state.stoploss
                }, function () {
                    return _this.validate(name, value);
                });
            } else {
                _this.setState(_defineProperty({}, name, value), function () {
                    return _this.validate(name, value);
                });
            }
        }, _this.assetValidate = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
                var asset, blockchainAssets, validate;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                asset = _this.state[name];
                                _context.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.list_assets(asset, 1);

                            case 3:
                                blockchainAssets = _context.sent[0];
                                validate = _this.state.validate;


                                if (asset !== blockchainAssets.symbol) validate.push(name);else {
                                    validate = validate.filter(function (input) {
                                        return input !== name;
                                    });
                                }

                                _this.setState({ validate: validate });
                                _this.props.enableCreate(_this.state.validate.length == 0);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_2__["default"].hasBot(_this.props.account, _this.props.name, value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "sellAsset":
                case "getAsset":
                    if (value.length !== 0) {
                        _this.assetValidate(name);
                    } else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
                case "amount":
                case "minAmount":
                case "pecent":
                case "stoploss":
                    if (value === "" || isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
            }

            console.log(_this.state.validate);
            _this.props.enableCreate(_this.state.validate.length == 0);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Create, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.assetValidate = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(this.assetValidate, 200);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.name" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "name",
                        id: "name",
                        type: "text",
                        ref: "input",
                        value: this.state.name,
                        onChange: this.handleChange,
                        style: {
                            border: this.state.validate.includes("name") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal", style: { marginLeft: 50 } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.sell_asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            name: "sellAsset",
                            value: this.state.sellAsset,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "amount",
                            id: "amount",
                            type: "text",
                            ref: "input",
                            value: this.state.amount,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("amount") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.get_asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            name: "getAsset",
                            value: this.state.getAsset,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.min_amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "minAmount",
                            id: "minAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.minAmount,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("minAmount") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.stoploss" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "stoploss",
                        id: "stoploss",
                        type: "text",
                        ref: "input",
                        value: this.state.stoploss,
                        onChange: this.handleChange,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("stoploss") ? "1px solid red" : "none"
                        }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.trailing_stop.trailing_percent" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "percent",
                        id: "percent",
                        type: "text",
                        ref: "input",
                        value: this.state.percent,
                        onChange: this.handleChange,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("percent") ? "1px solid red" : "none"
                        }
                    })
                )
            );
        }
    }]);

    return Create;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 2907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2886);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2903);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var State = function (_React$Component) {
    _inherits(State, _React$Component);

    function State() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, State);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = State.__proto__ || Object.getPrototypeOf(State)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            validate: []
        }, _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value;

            if (["sellAsset", "getAsset"].includes(name)) value = value.toUpperCase();

            if (name === "minAmount") {
                _this.setState({
                    minAmount: value,
                    stoploss: value / _this.state.amount
                }, function () {
                    return _this.validate(name, value);
                });
            } else if (name === "stoploss") {
                _this.setState({
                    minAmount: _this.state.amount * value,
                    stoploss: value
                }, function () {
                    return _this.validate(name, value);
                });
            } else if (name === "amount") {
                _this.setState({
                    amount: value,
                    minAmount: value * _this.state.stoploss
                }, function () {
                    return _this.validate(name, value);
                });
            } else {
                _this.setState(_defineProperty({}, name, value), function () {
                    return _this.validate(name, value);
                });
            }

            _this.setState(_defineProperty({}, name, value));
        }, _this.validate = function (name, value) {}, _this.handleUpdateBot = function () {
            _this.props.bot.storage.write(_this.state);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(State, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var state = this.props.bot.storage.read();
            state.stoploss = state.minAmount / state.amount;

            this.setState(state);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block horizontal",
                        style: { marginLeft: 50, marginTop: 50 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.sell_asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "sellAsset",
                            value: {
                                value: this.state.sellAsset,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.sellAsset })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "amount",
                            id: "amount",
                            type: "text",
                            ref: "input",
                            value: this.state.amount,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("amount") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.get_asset" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "getAsset",
                            value: {
                                value: this.state.getAsset,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.getAsset })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.min_amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "minAmount",
                            id: "minAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.minAmount,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("minAmount") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.stoploss" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "stoploss",
                        id: "stoploss",
                        type: "text",
                        ref: "input",
                        value: this.state.stoploss,
                        onChange: this.handleChange,
                        disabled: this.props.bot.run,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("stoploss") ? "1px solid red" : "none"
                        }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.trailing_stop.trailing_percent" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "percent",
                        id: "percent",
                        type: "text",
                        ref: "input",
                        value: this.state.percent,
                        onChange: this.handleChange,
                        disabled: this.props.bot.run,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("percent") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button",
                        onClick: this.handleUpdateBot,
                        disabled: this.props.bot.run,
                        style: { marginLeft: 50, marginBottom: 30 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.update" })
                )
            );
        }
    }]);

    return State;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ 2908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2909);
/* harmony import */ var components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2911);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2904);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(420);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2885);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2889);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(599);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(726);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(604);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var PercentUp = function () {
    function PercentUp(account, storage, initData) {
        var _this = this;

        _classCallCheck(this, PercentUp);

        this.state = components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__["default"];

        this.queue = function () {
            _this.queueEvents = _this.queueEvents.then(_this.checkOrders).catch(_this.logger.error.bind(_this.logger));
        };

        this.checkOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var state, log, accountBalances, balance, amount, orders, processOrders, orderFee, promises, orderBook, quoteAmount, baseAmount, i, ask, quote, base, diffBase, price, lowPrice, isGreaterDistance, baseAssetAmount, quoteAssetAmount, obj, order;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            state = _this.storage.read();

                            log = function log() {
                                var _logger;

                                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                                    args[_key] = arguments[_key];
                                }

                                return (_logger = _this.logger).log.apply(_logger, ["[" + state.name + "]"].concat(args));
                            };

                            _context2.next = 4;
                            return _this.account.balances(_this.base.id, _this.quote.id);

                        case 4:
                            _context2.t0 = function (acc, balance) {
                                _this.base.id === balance.asset_id ? acc.base = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(balance.amount).div(Math.pow(10, _this.base.precision)).toNumber() : acc.quote = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(balance.amount).div(Math.pow(10, _this.quote.precision)).toNumber();
                                return acc;
                            };

                            _context2.t1 = {};
                            accountBalances = _context2.sent.reduce(_context2.t0, _context2.t1);
                            balance = state.balance === "-" ? 0 : state.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.balance);
                            amount = state.percentAmount.toString() == "true" ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(balance).times(state.amount).div(100).toNumber() : state.amount;
                            _context2.next = 11;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.get_objects(state.orders.map(function (order) {
                                return order.id;
                            }).filter(function (id) {
                                return id;
                            }));

                        case 11:
                            _context2.t2 = function (order) {
                                return order && order.id;
                            };

                            _context2.t3 = function (id) {
                                return id;
                            };

                            orders = _context2.sent.map(_context2.t2).filter(_context2.t3);
                            processOrders = state.orders.filter(function (order) {
                                return !orders.includes(order.id);
                            });
                            _context2.t4 = bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"];
                            _context2.next = 18;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.get_global_properties();

                        case 18:
                            _context2.t5 = _context2.sent.parameters.current_fees.parameters[1][1].fee;
                            _context2.t6 = Math.pow(10, 5);
                            orderFee = (0, _context2.t4)(_context2.t5).div(_context2.t6).toNumber();

                            if (!(processOrders.length > 0)) {
                                _context2.next = 24;
                                break;
                            }

                            _context2.next = 24;
                            return _this.base.update();

                        case 24:
                            promises = processOrders.map(function () {
                                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(order) {
                                    var amountToMarket, forQuoteFee, forBaseFee, quoteAssetAmount, percentOnMarket, baseAssetAmount, obj;
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    if (!(order.state === "buy")) {
                                                        _context.next = 5;
                                                        break;
                                                    }

                                                    order.id = null;
                                                    if (!["", "-"].includes(state.balance)) {
                                                        amountToMarket = Math.floor(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.base.options.market_fee_percent).div(100 * 100).times(order.base).times(Math.pow(10, _this.base.precision)).toString());

                                                        state.balance = Number(state.balance) + Number(order.base) - (amountToMarket !== 0 ? Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(amountToMarket).div(Math.pow(10, _this.base.precision)).toNumber() : _this.base.options.market_fee_percent !== 0 ? Math.pow(10, -_this.base.precision) : 0);
                                                    }
                                                    _context.next = 13;
                                                    break;

                                                case 5:
                                                    forQuoteFee = _this.quote.symbol === "BTS" ? (isNaN(order.fee) ? orderFee : order.fee) + orderFee : 0, forBaseFee = _this.base.symbol === "BTS" ? (isNaN(order.fee) ? orderFee : order.fee) + orderFee : 0, quoteAssetAmount = {
                                                        asset_id: _this.quote.id,
                                                        amount: Math.min(Number(accountBalances.quote), Number(order.quote)) - forQuoteFee
                                                    }, percentOnMarket = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.base.options.market_fee_percent).div(100 * 100), baseAssetAmount = {
                                                        asset_id: _this.base.id,
                                                        amount: Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(order.base).times(1 + Number(state.spread) / 100 + percentOnMarket.toNumber()).plus(forBaseFee)
                                                    };


                                                    log("buy " + _this.base.symbol + ": amount=" + baseAssetAmount.amount.toNumber() + " price=" + Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(quoteAssetAmount.amount).div(baseAssetAmount.amount).toNumber() + " " + _this.base.symbol + "/" + _this.quote.symbol);
                                                    _context.next = 9;
                                                    return _this.account.sell(quoteAssetAmount, baseAssetAmount);

                                                case 9:
                                                    obj = _context.sent;


                                                    order.state = "buy";
                                                    order.id = obj ? obj.id : "1.7.0";
                                                    order.base = baseAssetAmount.amount.toNumber();

                                                case 13:
                                                case "end":
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, _this);
                                }));

                                return function (_x) {
                                    return _ref2.apply(this, arguments);
                                };
                            }());
                            _context2.next = 27;
                            return Promise.all(promises);

                        case 27:
                            _context2.next = 29;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.get_order_book(_this.quote.symbol, _this.base.symbol, 50);

                        case 29:
                            orderBook = _context2.sent;
                            quoteAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(0), baseAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(0);
                            i = 0;

                        case 32:
                            if (!(i < orderBook.asks.length)) {
                                _context2.next = 55;
                                break;
                            }

                            ask = orderBook.asks[i];
                            quote = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ask.base);
                            base = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ask.quote);
                            diffBase = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(amount).minus(baseAmount);

                            if (!base.isEqualTo(diffBase)) {
                                _context2.next = 43;
                                break;
                            }

                            quoteAmount = quoteAmount.plus(quote);
                            baseAmount = baseAmount.plus(base);
                            return _context2.abrupt("break", 55);

                        case 43:
                            if (!base.isLessThan(diffBase)) {
                                _context2.next = 48;
                                break;
                            }

                            quoteAmount = quoteAmount.plus(quote);
                            baseAmount = baseAmount.plus(base);
                            _context2.next = 52;
                            break;

                        case 48:
                            if (!base.isGreaterThan(diffBase)) {
                                _context2.next = 52;
                                break;
                            }

                            baseAmount = baseAmount.plus(diffBase);
                            quoteAmount = quoteAmount.plus(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ask.price).times(diffBase));
                            return _context2.abrupt("break", 55);

                        case 52:
                            i++;
                            _context2.next = 32;
                            break;

                        case 55:
                            price = quoteAmount.div(baseAmount), lowPrice = null;


                            state.orders.forEach(function (order) {
                                var orderPrice = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(order.quote).div(order.base);
                                if (!lowPrice || orderPrice.minus(price).abs().isLessThan(lowPrice.minus(price).abs())) lowPrice = orderPrice;
                            });

                            isGreaterDistance = !!lowPrice && lowPrice.minus(price).abs().div(lowPrice).times(100).isGreaterThan(state.distance);


                            log("Orders exists: " + !!lowPrice + ", balance > amount: " + (balance > amount) + ", lowPrice - price > distance: " + isGreaterDistance);

                            if (!(balance > amount && (!lowPrice || isGreaterDistance))) {
                                _context2.next = 69;
                                break;
                            }

                            baseAssetAmount = {
                                asset_id: _this.base.id,
                                amount: amount
                            };
                            quoteAssetAmount = {
                                asset_id: _this.quote.id,
                                amount: quoteAmount
                            };
                            _context2.next = 64;
                            return _this.account.buy(quoteAssetAmount, baseAssetAmount);

                        case 64:
                            obj = _context2.sent;
                            order = {
                                state: "sell",
                                base: amount,
                                quote: quoteAssetAmount.amount.toNumber(),
                                id: obj ? obj.id : "1.7.0",
                                fee: orderFee
                            };


                            state.orders.push(order);
                            log("sell " + _this.base.symbol + ": amount=" + amount + ", price=" + price.toNumber() + " " + _this.base.symbol + "/" + _this.quote.symbol);

                            if (!["", "-"].includes(state.balance)) state.balance = Number(state.balance) - amount;

                        case 69:

                            state.orders = state.orders.filter(function (order) {
                                return order.id !== null;
                            });

                            _this.storage.write(state);

                        case 71:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, _this);
        }));

        this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_2__["default"](account);
        this.storage = storage;

        if (initData) {
            var name = initData.name,
                base = initData.base,
                quote = initData.quote,
                amount = initData.amount,
                percentAmount = initData.percentAmount,
                balance = initData.balance,
                spread = initData.spread,
                distance = initData.distance;

            storage.init({
                name: name,
                base: base,
                quote: quote,
                amount: amount,
                percentAmount: percentAmount,
                balance: balance,
                spread: spread,
                distance: distance,
                orders: []
            });
        }

        this.name = storage.read().name;

        this.logger = console;
        this.queueEvents = Promise.resolve();
        this.run = false;
    }

    _createClass(PercentUp, [{
        key: "start",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var state;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                state = this.storage.read();
                                _context3.next = 3;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__["default"][state.base];

                            case 3:
                                this.base = _context3.sent;
                                _context3.next = 6;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__["default"][state.quote];

                            case 6:
                                this.quote = _context3.sent;
                                _context3.next = 9;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();

                            case 9:
                                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
                                    setting: "walletLockTimeout",
                                    value: 0
                                });

                                bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].subscribe(this.queue);
                                this.run = true;

                            case 12:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function start() {
                return _ref3.apply(this, arguments);
            }

            return start;
        }()
    }, {
        key: "stop",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                bitsharesjs__WEBPACK_IMPORTED_MODULE_3__["ChainStore"].unsubscribe(this.queue);
                                this.run = false;
                                _context4.next = 4;
                                return this.queueEvents;

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function stop() {
                return _ref4.apply(this, arguments);
            }

            return stop;
        }()
    }, {
        key: "delete",
        value: function _delete() {
            this.storage.delete();
        }
    }]);

    return PercentUp;
}();

PercentUp.create = components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__["default"];


/* harmony default export */ __webpack_exports__["default"] = (PercentUp);

/***/ }),

/***/ 2909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2759);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2882);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2886);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2885);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2910);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Create = function (_React$Component) {
    _inherits(Create, _React$Component);

    function Create() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Create);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Create.__proto__ || Object.getPrototypeOf(Create)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: "",
            base: "BTS",
            quote: "RUDEX.EOS",
            amount: 100,
            percentAmount: false,
            balance: "",
            spread: 1,
            distance: "1.5",
            validate: ["name"]
        }, _this.assetValidate = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
                var asset, blockchainAssets, validate;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                asset = _this.state[name];
                                _context.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.list_assets(asset, 1);

                            case 3:
                                blockchainAssets = _context.sent[0];
                                validate = _this.state.validate;


                                if (asset !== blockchainAssets.symbol) validate.push(name);else {
                                    validate = validate.filter(function (input) {
                                        return input !== name;
                                    });
                                }

                                _this.setState({ validate: validate });
                                _this.props.enableCreate(_this.state.validate.length == 0);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value;

            if (["base", "quote"].includes(name)) value = value.toUpperCase();

            _this.setState(_defineProperty({}, name, value), function () {
                return _this.validate(name, value);
            });
        }, _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_2__["default"].hasBot(_this.props.account, _this.props.name, value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "base":
                case "quote":
                    if (value.length !== 0) {
                        _this.assetValidate(name);
                    } else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
                case "balance":
                    if (value !== "-" && isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "spread":
                case "distance":
                    if (value === "" || isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
            }

            console.log(validate);
            _this.props.enableCreate(validate.length == 0);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Create, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.assetValidate = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(this.assetValidate, 200);
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                validate = _state.validate,
                name = _state.name,
                amount = _state.amount,
                balance = _state.balance,
                spread = _state.spread,
                distance = _state.distance;


            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.name" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        name: "name",
                        value: name,
                        onChange: this.handleChange,
                        border: validate.includes("name")
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal", style: { marginLeft: 50 } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.base" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "base",
                            value: this.state.base,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { onChange: this.handleChange },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentAmount"
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentAmount",
                                defaultChecked: true
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            name: "amount",
                            value: amount,
                            onChange: this.handleChange,
                            border: validate.includes("amount")
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            name: "balance",
                            value: balance,
                            onChange: this.handleChange,
                            border: validate.includes("balance")
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.quote" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "quote",
                            value: this.state.quote,
                            onChange: this.handleChange
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.common.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            name: "spread",
                            value: spread,
                            onChange: this.handleChange,
                            border: validate.includes("spread")
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "bots.percent_up.distance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            name: "distance",
                            value: distance,
                            onChange: this.handleChange,
                            border: validate.includes("distance")
                        })
                    )
                )
            );
        }
    }]);

    return Create;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 2910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                name = _props.name,
                value = _props.value,
                onChange = _props.onChange,
                border = _props.border,
                props = _objectWithoutProperties(_props, ["name", "value", "onChange", "border"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
                name: name,
                id: name,
                type: "text",
                ref: "input",
                value: value,
                onChange: onChange,
                style: {
                    marginBottom: 30,
                    border: border ? "1px solid red" : "none"
                }
            }, props));
        }
    }]);

    return Input;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ 2911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2886);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2903);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2910);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1892);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var State = function (_React$Component) {
    _inherits(State, _React$Component);

    function State() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, State);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = State.__proto__ || Object.getPrototypeOf(State)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value;

            if (["base", "quote"].includes(name)) value = value.toUpperCase();

            _this.setState(_defineProperty({}, name, value), function () {
                return _this.validate(name, value);
            });
        }, _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (!/^\w+$/.test(value) || BotManager.hasBot(_this.props.account, _this.props.name, value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "base":
                case "quote":
                    if (value.length !== 0) {
                        _this.assetValidate(name);
                    } else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
                case "balance":
                    if (value !== "-" && isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "spread":
                case "distance":
                    if (value === "" || isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
            }

            //this.props.enableCreate(validate.length == 0);
        }, _this.handleUpdateBot = function () {
            var stateNow = _this.props.bot.storage.read();

            _this.props.bot.storage.write(_extends({}, stateNow, _this.state));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(State, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState(Object.assign({ validate: [] }, this.props.bot.storage.read()));
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                validate = _state.validate,
                amount = _state.amount,
                balance = _state.balance,
                spread = _state.spread,
                distance = _state.distance;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal", style: { marginLeft: 50 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.base" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "base",
                            value: {
                                value: this.state.base,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.base })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.amount" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { onChange: this.handleChange },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: true,
                                name: "percentAmount"
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentAmount",
                                defaultChecked: true
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.balance_value" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "amount",
                            value: amount,
                            onChange: this.handleChange,
                            border: validate.includes("amount")
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.balance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "balance",
                            value: balance,
                            onChange: this.handleChange,
                            border: validate.includes("balance")
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.quote" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            style: { marginBottom: 30 },
                            name: "quote",
                            value: {
                                value: this.state.quote,
                                label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__["AssetLabel"], { name: this.state.quote })
                            },
                            clearable: false,
                            searchable: false,
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.spread" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "spread",
                            value: spread,
                            onChange: this.handleChange,
                            border: validate.includes("spread")
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.percent_up.distance" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: "distance",
                            value: distance,
                            onChange: this.handleChange,
                            border: validate.includes("distance")
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button",
                        onClick: this.handleUpdateBot,
                        disabled: this.props.bot.run,
                        style: { marginLeft: 50, marginBottom: 30 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "bots.common.update" })
                )
            );
        }
    }]);

    return State;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ 2912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(729);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bots = Object(common_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"])("__bots__");

var Storage = function () {
    _createClass(Storage, null, [{
        key: "getAccountBot",
        value: function getAccountBot(account) {
            var re = new RegExp("^__bots__" + account + "::");
            return Object.keys(localStorage).filter(function (key) {
                return re.test(key);
            });
        }
    }, {
        key: "has",
        value: function has(name) {
            return bots.has(name);
        }
    }]);

    function Storage(name) {
        _classCallCheck(this, Storage);

        //bots.has(name)
        this.name = name;
        //if (!bots.has(name))
        //bots.set(name, {})
    }

    _createClass(Storage, [{
        key: "init",
        value: function init(data) {
            if (!bots.has(name)) bots.set(this.name, data);
        }
    }, {
        key: "read",
        value: function read() {
            return bots.get(this.name);
        }
    }, {
        key: "write",
        value: function write(newState) {
            bots.set(this.name, newState);
        }
    }, {
        key: "delete",
        value: function _delete() {
            bots.remove(this.name);
        }
    }]);

    return Storage;
}();

/* harmony default export */ __webpack_exports__["default"] = (Storage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90cy4yODY4Yjk4M2RhNTFhNGYxNDEzYy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL0JvdHMuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9TcHJlYWRUcmFkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGUuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvYXBpcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0Fzc2V0U2VsZWN0b3IuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvYXNzZXRzLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9UcmFpbGluZ1N0b3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL1BlcmNlbnRVcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvQ3JlYXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvU3RhdGUuanN4Iiwid2VicGFjazovLy9hcHAvc3RvcmVzL0JvdHNTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge1JlZGlyZWN0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jbGFzcyBCb3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gQm90TWFuYWdlci5zdHJhdGVnaWVzO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0U3RyYXRlZ3k6IE9iamVjdC5rZXlzKHRoaXMuc3RyYXRlZ2llcylbMF0sXG4gICAgICAgICAgICBib3RzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMCxcbiAgICAgICAgICAgIGVuYWJsZUNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBib3RSdW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBib3RzID0gQm90TWFuYWdlci5nZXRCb3RzKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJvdHMsXG4gICAgICAgICAgICBzZWxlY3RCb3Q6IDAsXG4gICAgICAgICAgICBib3RSdW46IGJvdHNbMF0gPyBib3RzWzBdLnJ1biA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVN0cmF0ZWd5ID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RTdHJhdGVneTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNoYW5nZUJvdCA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdEJvdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdEJvdCxcbiAgICAgICAgICAgIGJvdFJ1bjogdGhpcy5zdGF0ZS5ib3RzW3NlbGVjdEJvdF0ucnVuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDcmVhdGUgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBib3RzID0gdGhpcy5zdGF0ZS5ib3RzO1xuXG4gICAgICAgIGJvdHMucHVzaChcbiAgICAgICAgICAgIEJvdE1hbmFnZXIuY3JlYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3ksXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0uc3RhdGVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym90c30pO1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0ZUZvcm0udmFsaWRhdGUpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0udmFsaWRhdGUoXCJuYW1lXCIsIHRoaXMuY3JlYXRlRm9ybS5zdGF0ZS5uYW1lKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRW5hYmxlQ3JlYXRlID0gZW5hYmxlQ3JlYXRlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlQ3JlYXRlICE9IGVuYWJsZUNyZWF0ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZUNyZWF0ZX0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdGFydEJvdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGJvdCA9IHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF07XG5cbiAgICAgICAgYXdhaXQgYm90LnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvdFJ1bjogYm90LnJ1bn0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdG9wQm90ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgYm90ID0gdGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XTtcblxuICAgICAgICBhd2FpdCBib3Quc3RvcCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtib3RSdW46IGJvdC5ydW59KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRGVsZXRlQm90ID0gKCkgPT4ge1xuICAgICAgICBCb3RNYW5hZ2VyLmRlbGV0ZSh0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJvdHM6IEJvdE1hbmFnZXIuZ2V0Qm90cyh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KSxcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwic3RhcnQgcmVuZGVyIG1haW4gcGFnZVwiLCB0aGlzLnByb3BzKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17XCIvXCJ9IC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IENyZWF0ZUZvcm0gPSB0aGlzLnN0cmF0ZWdpZXNbdGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneV0uY3JlYXRlO1xuXG4gICAgICAgIGxldCBib3QgPSB0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdIHx8IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjAsIG92ZXJmbG93OiBcInZpc2libGVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtMTIgbWVkaXVtLTYgbGFyZ2UtNSBsYXJnZS1vZmZzZXQtMSBmdWxsLXdpZHRoLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIiBzdHlsZT17e21hcmdpblRvcDogMzB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zZWxlY3Rfc3RyYXRlZ3lcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBidHMtc2VsZWN0IFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VTdHJhdGVneX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RyYXRlZ2llcykubWFwKG5hbWUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtuYW1lfSB2YWx1ZT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Zm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0gPSBmb3JtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVDcmVhdGU9e3RoaXMuaGFuZGxlRW5hYmxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5lbmFibGVDcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5jcmVhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIiBzdHlsZT17e21hcmdpblRvcDogMzB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5ib3Rfc3RhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBidHMtc2VsZWN0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0Qm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5ib3RzLm1hcCgoYm90LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Ym90Lm5hbWV9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Ym90Lm5hbWV9ICgke2JvdC5jb25zdHJ1Y3Rvci5uYW1lfSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxib3Quc3RhdGUga2V5PXtib3QubmFtZX0gYm90PXtib3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0Qm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmJvdFJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zdGFydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3RvcEJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuYm90UnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnN0b3BcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbGV0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ib3RSdW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uZGVsZXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnNlbGVjdF9ib3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBCb3RzLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBTcHJlYWRUcmFkZSBmcm9tIFwiLi9TcHJlYWRUcmFkZVwiO1xyXG5pbXBvcnQgVHJhaWxpbmdTdG9wIGZyb20gXCIuL1RyYWlsaW5nU3RvcFwiO1xyXG5pbXBvcnQgUGVyY2VudFVwIGZyb20gXCIuL1BlcmNlbnRVcFwiO1xyXG4vL2ltcG9ydCBSZWxhdGl2ZU9yZGVycyBmcm9tIFwiLi9SZWxhdGl2ZU9yZGVyc1wiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwic3RvcmVzL0JvdHNTdG9yYWdlXCI7XHJcblxyXG52YXIgYm90cyA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc3RyYXRlZ2llczoge1xyXG4gICAgICAgIFNwcmVhZFRyYWRlLFxyXG4gICAgICAgIFRyYWlsaW5nU3RvcCxcclxuICAgICAgICAvL1JlbGF0aXZlT3JkZXJzLFxyXG4gICAgICAgIFBlcmNlbnRVcFxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUoc3RyYXRlZ3ksIGFjY291bnQsIGluaXREYXRhKSB7XHJcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZShgJHthY2NvdW50fTo6JHtzdHJhdGVneX1bJHtpbml0RGF0YS5uYW1lfV1gKTtcclxuXHJcbiAgICAgICAgbGV0IGJvdCA9IG5ldyB0aGlzLnN0cmF0ZWdpZXNbc3RyYXRlZ3ldKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKTtcclxuICAgICAgICBib3RzW2BfX2JvdHNfXyR7c3RvcmFnZS5uYW1lfWBdID0gYm90O1xyXG5cclxuICAgICAgICByZXR1cm4gYm90O1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWxldGUoYm90KSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBgX19ib3RzX18ke2JvdC5zdG9yYWdlLm5hbWV9YDtcclxuXHJcbiAgICAgICAgYm90c1tuYW1lXS5kZWxldGUoKTtcclxuICAgICAgICBkZWxldGUgYm90c1tuYW1lXTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0Qm90cyhhY2NvdW50KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldEJvdHNcIiwgT2JqZWN0LmtleXMoYm90cykpXHJcblxyXG4gICAgICAgIHJldHVybiBTdG9yYWdlLmdldEFjY291bnRCb3QoYWNjb3VudClcclxuICAgICAgICAgICAgLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvdHNba2V5XSkgcmV0dXJuIGJvdHNba2V5XTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgW3N0cmF0ZWd5LCBuYW1lXSA9IGtleVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eX19ib3RzX18oLispOjooXFx3KylcXFsoXFx3KylcXF0vLCBcIiQyLCQzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cmF0ZWd5IHx8ICFuYW1lKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske25hbWV9XWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBib3QgPSBuZXcgdGhpcy5zdHJhdGVnaWVzW3N0cmF0ZWd5XShhY2NvdW50LCBzdG9yYWdlKTtcclxuICAgICAgICAgICAgICAgIGJvdHNba2V5XSA9IGJvdDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib3Q7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZWwgPT4gZWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYXNCb3QoYWNjb3VudCwgc3RyYXRlZ3ksIG5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIG5hbWUgc3RhdGVneVwiLCBhY2NvdW50LCBzdHJhdGVneSwgbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuaGFzKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske25hbWV9XWApO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgQ3JlYXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvQ3JlYXRlXCI7XHJcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL1N0YXRlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XHJcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcclxuaW1wb3J0IEFjY291bnQgZnJvbSBcImxpYi9ib3RzL2FjY291bnRcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgU3ByZWFkVHJhZGUge1xyXG4gICAgc3RhdGljIGNyZWF0ZSA9IENyZWF0ZTtcclxuICAgIHN0YXRlID0gU3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpIHtcclxuICAgICAgICB0aGlzLmFjY291bnQgPSBuZXcgQWNjb3VudChhY2NvdW50KTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cclxuICAgICAgICBpZiAoaW5pdERhdGEpIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5pbml0KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGluaXREYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBiYXNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGluaXREYXRhLmJhc2VBc3NldCxcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBpbml0RGF0YS5iYXNlQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBzcHJlYWQ6IGluaXREYXRhLmJhc2VTcHJlYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5iYXNlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ6IGluaXREYXRhLnBlcmNlbnRCYXNlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWQsIHByaWNlIGFuZCBhbW91bnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcXVvdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldDogaW5pdERhdGEucXVvdGVBc3NldCxcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBpbml0RGF0YS5xdW90ZUJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkOiBpbml0RGF0YS5xdW90ZVNwcmVhZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLnF1b3RlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ6IGluaXREYXRhLnBlcmNlbnRRdW90ZUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lkLCBwcmljZSBhbmQgYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZyb21NYXJrZXQ6IGluaXREYXRhLmZyb21NYXJrZXQsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0UHJpY2U6IGluaXREYXRhLmRlZmF1bHRQcmljZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IHN0b3JhZ2UucmVhZCgpLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcclxuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xyXG5cclxuICAgICAgICB0aGlzLmJhc2UgPSBhd2FpdCBBc3NldHNbc3RhdGUuYmFzZS5hc3NldF07XHJcbiAgICAgICAgdGhpcy5xdW90ZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5xdW90ZS5hc3NldF07XHJcblxyXG4gICAgICAgIGlmIChbdGhpcy5iYXNlLmlzc3VlciwgdGhpcy5xdW90ZS5pc3N1ZXJdLmluY2x1ZGVzKFwiMS4yLjBcIikpIHtcclxuICAgICAgICAgICAgaWYgKFt0aGlzLmJhc2UuaWQsIHRoaXMucXVvdGUuaWRdLmluY2x1ZGVzKFwiMS4zLjBcIikpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZlZWQgPSB0aGlzLmdldENvcmVGZWVkO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJhc2UuaXNzdWVyID09IHRoaXMucXVvdGUuaXNzdWVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRTbWFydEZlZWQ7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRVSUFGZWVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0VUlBRmVlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XHJcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xyXG4gICAgICAgICAgICBzZXR0aW5nOiBcIndhbGxldExvY2tUaW1lb3V0XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xyXG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdG9wKCkge1xyXG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnF1ZXVlRXZlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5jaGVja09yZGVycylcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yLmJpbmQodGhpcy5sb2dnZXIpKTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tPcmRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic3RhdGVcIiwgc3RhdGUpO1xyXG5cclxuICAgICAgICBsZXQgdGlja2VyID0gYXdhaXQgQXBpcy5kYi5nZXRfdGlja2VyKFxyXG4gICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxyXG4gICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByaWNlID0gc3RhdGUuZGVmYXVsdFByaWNlO1xyXG5cclxuICAgICAgICBsZXQgZmVlZFByaWNlID0gc3RhdGUuZnJvbU1hcmtldFxyXG4gICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIodGlja2VyLmxhdGVzdClcclxuICAgICAgICAgICAgICAgIDogYXdhaXQgdGhpcy5nZXRGZWVkKCksXHJcbiAgICAgICAgICAgIGJ1eVByaWNlID0gZmVlZFByaWNlLnRpbWVzKDEgLSBzdGF0ZS5iYXNlLnNwcmVhZCAvIDEwMCkudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgc2VsbFByaWNlID0gZmVlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAudGltZXMoMSArIHN0YXRlLnF1b3RlLnNwcmVhZCAvIDEwMClcclxuICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xyXG5cclxuICAgICAgICBmZWVkUHJpY2UgPSBmZWVkUHJpY2UudG9OdW1iZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKGZlZWRQcmljZSA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBidXlPcmRlciA9IHN0YXRlLmJhc2Uub3JkZXIuaWRcclxuICAgICAgICAgICAgICAgID8gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW3N0YXRlLmJhc2Uub3JkZXIuaWRdKSlbMF1cclxuICAgICAgICAgICAgICAgIDogc3RhdGUuYmFzZS5vcmRlci5pZCxcclxuICAgICAgICAgICAgc2VsbE9yZGVyID0gc3RhdGUucXVvdGUub3JkZXIuaWRcclxuICAgICAgICAgICAgICAgID8gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW3N0YXRlLnF1b3RlLm9yZGVyLmlkXSkpWzBdXHJcbiAgICAgICAgICAgICAgICA6IHN0YXRlLnF1b3RlLm9yZGVyLmlkLFxyXG4gICAgICAgICAgICBhY2NvdW50QmFsYW5jZXMgPSAoYXdhaXQgdGhpcy5hY2NvdW50LmJhbGFuY2VzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5pZFxyXG4gICAgICAgICAgICApKS5yZWR1Y2UoKGFjYywgYmFsYW5jZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkID09PSBiYWxhbmNlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoYWNjLmJhc2UgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKGFjYy5xdW90ZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgIH0sIHt9KSxcclxuICAgICAgICAgICAgYmFzZUJhbGFuY2UgPVxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5iYWxhbmNlID09PSBcIi1cIlxyXG4gICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUuYmFzZS5iYWxhbmNlID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEJhbGFuY2VzLmJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihhY2NvdW50QmFsYW5jZXMuYmFzZSwgc3RhdGUuYmFzZS5iYWxhbmNlKSxcclxuICAgICAgICAgICAgcXVvdGVCYWxhbmNlID1cclxuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLmJhbGFuY2UgPT09IFwiLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5xdW90ZS5iYWxhbmNlID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEJhbGFuY2VzLnF1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5taW4oYWNjb3VudEJhbGFuY2VzLnF1b3RlLCBzdGF0ZS5xdW90ZS5iYWxhbmNlKSxcclxuICAgICAgICAgICAgYmFzZUFtb3VudCA9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLnBlcmNlbnQudG9TdHJpbmcoKSA9PSBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhc2VCYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5iYXNlLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUuYmFzZS5hbW91bnQsXHJcbiAgICAgICAgICAgIHF1b3RlQW1vdW50ID1cclxuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLnBlcmNlbnQudG9TdHJpbmcoKSA9PSBcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKHF1b3RlQmFsYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUucXVvdGUuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5xdW90ZS5hbW91bnQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJpY2VzXCIsIGJ1eVByaWNlLCBmZWVkUHJpY2UsIHNlbGxQcmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvcmRlcnNcIiwgYnV5T3JkZXIsIHNlbGxPcmRlcik7XHJcblxyXG4gICAgICAgIGlmIChidXlPcmRlcikge1xyXG4gICAgICAgICAgICAvL2NoZWNrIFByaWNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYGNoZWNrIGJ1eU9yZGVyOiBtb3ZlPSR7TWF0aC5hYnMoXHJcbiAgICAgICAgICAgICAgICAgICAgYnV5UHJpY2UgLSBzdGF0ZS5iYXNlLm9yZGVyLnByaWNlXHJcbiAgICAgICAgICAgICAgICApID5cclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBidXlQcmljZSkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAyfSwgZmlsbD0ke3RpY2tlci5sb3dlc3RfYXNrIDw9IGJ1eVByaWNlfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoYnV5UHJpY2UgLSBzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKSA+XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gYnV5UHJpY2UpIC8gMiAmJlxyXG4gICAgICAgICAgICAgICAgdGlja2VyLmxvd2VzdF9hc2sgPiBidXlQcmljZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3JkZXJcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgIGBtb3ZlIGJ1eSBvcmRlcjogJHtidXlQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LmNhbmNlbE9yZGVyKHN0YXRlLmJhc2Uub3JkZXIuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFtb3VudCBpbiBvcmRlclxyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyQW1vdW50ID0gQmlnTnVtYmVyKGJ1eU9yZGVyLmZvcl9zYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcclxuICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5iYXNlLmJhbGFuY2UpICsgb3JkZXJBbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFkZCB0byBzZWxsIGJhbGFuY2VcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmFtb3VudCA+IG9yZGVyQW1vdW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLmJhbGFuY2UgPSBCaWdOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50IC0gb3JkZXJBbW91bnRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoc3RhdGUuYmFzZS5vcmRlci5wcmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUucXVvdGUuYmFsYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IE1hdGgubWluKGJhc2VCYWxhbmNlLCBiYXNlQW1vdW50KTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCaWdOdW1iZXIoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYnV5UHJpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGJ1eVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSAtPSBhbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICgvXjEuNy5cXGQqJC8udGVzdChzdGF0ZS5iYXNlLm9yZGVyLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZmlsbCBvcmRlclxyXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSA9IEJpZ051bWJlcihzdGF0ZS5iYXNlLm9yZGVyLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgY3JlYXRlIGJ1eU9yZGVyOiBiYWxhbmNlPSR7YmFzZUJhbGFuY2UgPj1cclxuICAgICAgICAgICAgICAgICAgICBiYXNlQW1vdW50fSwgZmlsbD0ke3RpY2tlci5sb3dlc3RfYXNrIDw9IGJ1eVByaWNlfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGJhc2VCYWxhbmNlID49IGJhc2VBbW91bnQgJiYgdGlja2VyLmxvd2VzdF9hc2sgPiBidXlQcmljZSkge1xyXG4gICAgICAgICAgICAgICAgLy9idXlcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgYGJ1eTogJHtidXlQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHt0aGlzLmJhc2Uuc3ltYm9sfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcigxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihidXlQcmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYnV5UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogYmFzZUFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUuYmFzZS5iYWxhbmNlIC09IGJhc2VBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxsT3JkZXIpIHtcclxuICAgICAgICAgICAgLy9jaGVjayBQcmljZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGBjaGVjayBzZWxsT3JkZXI6IG1vdmU9JHtNYXRoLmFicyhcclxuICAgICAgICAgICAgICAgICAgICBzZWxsUHJpY2UgLSBzdGF0ZS5xdW90ZS5vcmRlci5wcmljZVxyXG4gICAgICAgICAgICAgICAgKSA+XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gc2VsbFByaWNlKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJ9LCBmaWxsPSR7dGlja2VyLmhpZ2hlc3RfYmlkID49IHNlbGxQcmljZX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIE1hdGguYWJzKHNlbGxQcmljZSAtIHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlKSA+XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gc2VsbFByaWNlKSAvIDIgJiZcclxuICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA8IHNlbGxQcmljZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3JkZXJcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgIGBtb3ZlIHNlbGwgb3JkZXI6ICR7c2VsbFByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuY2FuY2VsT3JkZXIoc3RhdGUucXVvdGUub3JkZXIuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFtb3VudCBpbiBvcmRlclxyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyQW1vdW50ID0gQmlnTnVtYmVyKHNlbGxPcmRlci5mb3Jfc2FsZSlcclxuICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xyXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5xdW90ZS5iYWxhbmNlKSArIG9yZGVyQW1vdW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgdG8gYnV5IGJhbGFuY2VcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlci5hbW91bnQgPiBvcmRlckFtb3VudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLmJhbGFuY2UgPSBCaWdOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmFtb3VudCAtIG9yZGVyQW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUucXVvdGUub3JkZXIucHJpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IE1hdGgubWluKHF1b3RlQmFsYW5jZSwgcXVvdGVBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBzZWxsUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgLT0gYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKC9eMS43LlxcZCokLy50ZXN0KHN0YXRlLnF1b3RlLm9yZGVyLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZmlsbCBvcmRlclxyXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgPSBCaWdOdW1iZXIoc3RhdGUucXVvdGUub3JkZXIuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUucXVvdGUub3JkZXIucHJpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYGNyZWF0ZSBzZWxsT3JkZXI6IGJhbGFuY2U9JHtxdW90ZUJhbGFuY2UgPj1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZUFtb3VudH0sIGZpbGw9JHt0aWNrZXIuaGlnaGVzdF9iaWQgPj0gc2VsbFByaWNlfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHF1b3RlQmFsYW5jZSA+PSBxdW90ZUFtb3VudCAmJiB0aWNrZXIuaGlnaGVzdF9iaWQgPCBzZWxsUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgIC8vYnV5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxyXG4gICAgICAgICAgICAgICAgICAgIGBzZWxsOiAke3NlbGxQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHNlbGxQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBxdW90ZUFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgLT0gcXVvdGVBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGdldENvcmVGZWVkKCkge1xyXG4gICAgICAgIGxldCByYXRlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5iYXNlLmlkID09IFwiMS4zLjBcIikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnF1b3RlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICByYXRlID0gdGhpcy5xdW90ZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJhdGUgPSB0aGlzLmJhc2Uub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgW2Jhc2UsIHF1b3RlXSA9XHJcbiAgICAgICAgICAgIHJhdGUuYmFzZS5hc3NldF9pZCA9PSB0aGlzLmJhc2UuaWRcclxuICAgICAgICAgICAgICAgID8gW3JhdGUuYmFzZSwgcmF0ZS5xdW90ZV1cclxuICAgICAgICAgICAgICAgIDogW3JhdGUucXVvdGUsIHJhdGUuYmFzZV07XHJcblxyXG4gICAgICAgIHJldHVybiBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXHJcbiAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcclxuICAgICAgICAgICAgLmRpdihCaWdOdW1iZXIocXVvdGUuYW1vdW50KS5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRTbWFydEZlZWQoKSB7XHJcbiAgICAgICAgbGV0IGJ0cyA9IGF3YWl0IEFzc2V0c1tcImJ0c1wiXTtcclxuICAgICAgICBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XHJcbiAgICAgICAgbGV0IHJhdGUgPSB0aGlzLmJhc2Uub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XHJcbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPVxyXG4gICAgICAgICAgICByYXRlLmJhc2UuYXNzZXRfaWQgPT0gXCIxLjMuMFwiXHJcbiAgICAgICAgICAgICAgICA/IFtyYXRlLmJhc2UsIHJhdGUucXVvdGVdXHJcbiAgICAgICAgICAgICAgICA6IFtyYXRlLnF1b3RlLCByYXRlLmJhc2VdO1xyXG5cclxuICAgICAgICBsZXQgYmFzZVByaWNlID0gQmlnTnVtYmVyKGJhc2UuYW1vdW50KVxyXG4gICAgICAgICAgICAuZGl2KDEwICoqIGJ0cy5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgIC5kaXYoQmlnTnVtYmVyKHF1b3RlLmFtb3VudCkuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5xdW90ZS51cGRhdGUoKTtcclxuICAgICAgICByYXRlID0gdGhpcy5xdW90ZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcclxuICAgICAgICBpZiAocmF0ZS5iYXNlLmFzc2V0X2lkID09IFwiMS4zLjBcIikge1xyXG4gICAgICAgICAgICBiYXNlID0gcmF0ZS5iYXNlO1xyXG4gICAgICAgICAgICBxdW90ZSA9IHJhdGUucXVvdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFzZSA9IHJhdGUucXVvdGU7XHJcbiAgICAgICAgICAgIHF1b3RlID0gcmF0ZS5iYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHF1b3RlUHJpY2UgPSBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXHJcbiAgICAgICAgICAgIC5kaXYoMTAgKiogYnRzLnByZWNpc2lvbilcclxuICAgICAgICAgICAgLmRpdihCaWdOdW1iZXIocXVvdGUuYW1vdW50KS5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHF1b3RlUHJpY2UuZGl2KGJhc2VQcmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0VUlBRmVlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJpY2VcclxuICAgICAgICAgICAgPyBCaWdOdW1iZXIodGhpcy5kZWZhdWx0UHJpY2UpXHJcbiAgICAgICAgICAgIDogYXdhaXQgdGhpcy5iaW5hbmNlUHJpY2UodGhpcy5iYXNlLnN5bWJvbCwgdGhpcy5xdW90ZS5zeW1ib2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGJpbmFuY2VQcmljZShiYXNlLCBxdW90ZSkge1xyXG4gICAgICAgIGxldCBhc3NldCA9IGAke3F1b3RlLnNwbGl0KFwiLlwiKS5zbGljZSgtMSlbMF19JHtcclxuICAgICAgICAgICAgYmFzZS5zcGxpdChcIi5cIikuc2xpY2UoLTEpWzBdXHJcbiAgICAgICAgfWBcclxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAgICAgLnJlcGxhY2UoXCJVU0RcIiwgXCJVU0RUXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBnZXQgYXNzZXQ6ICR7YXNzZXR9YCk7XHJcbiAgICAgICAgdGhpcy5wcmljZUFycmF5ID0gdGhpcy5wcmljZUFycmF5IHx8IFtdO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL2Fzc2V0ID0gXCJCVENVU0RUXCJcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICBgaHR0cHM6Ly9hcGkuYmluYW5jZS5jb20vYXBpL3YxL3RyYWRlcz9zeW1ib2w9JHthc3NldH0mbGltaXQ9MWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VBcnJheS5wdXNoKGRhdGFbMF0ucHJpY2UpO1xyXG4gICAgICAgICAgICAvL3RoaXMucHJpY2VBcnJheS5wdXNoKDEwKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgYEVycm9yIEJpbmFuY2UgcmVxdWVzdDogJHthc3NldH0sIGVycm9yOiAke2Vycm9yfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByaWNlQXJyYXkubGVuZ3RoID4gMTApIHRoaXMucHJpY2VBcnJheS5zaGlmdCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZUFycmF5Lmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyB0aGlzLnByaWNlQXJyYXlcclxuICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYS5wbHVzKGIpLCBCaWdOdW1iZXIoMCkpXHJcbiAgICAgICAgICAgICAgICAgIC5kaXYodGhpcy5wcmljZUFycmF5Lmxlbmd0aClcclxuICAgICAgICAgICAgOiBCaWdOdW1iZXIoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwcmVhZFRyYWRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90TWFuYWdlciBmcm9tIFwibGliL2JvdHNcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIENyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGJhc2VBc3NldDogXCJSVURFWC5VU0RUXCIsXG4gICAgICAgIHF1b3RlQXNzZXQ6IFwiUlVERVguQlRDXCIsXG4gICAgICAgIGJhc2VBbW91bnQ6IDEwLFxuICAgICAgICBxdW90ZUFtb3VudDogMC4wMSxcbiAgICAgICAgYmFzZVNwcmVhZDogMTAsXG4gICAgICAgIHF1b3RlU3ByZWFkOiAxMCxcbiAgICAgICAgYmFzZUJhbGFuY2U6IDEwMCxcbiAgICAgICAgcXVvdGVCYWxhbmNlOiAwLjEsXG4gICAgICAgIHBlcmNlbnRCYXNlQW1vdW50OiBmYWxzZSxcbiAgICAgICAgcGVyY2VudFF1b3RlQW1vdW50OiBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGU6IFtcIm5hbWVcIl1cbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZSA9IGRlYm91bmNlKHRoaXMuYXNzZXRWYWxpZGF0ZSwgMjAwKTtcbiAgICB9XG5cbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICA/IGV2ZW50LnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKFtcImJhc2VBc3NldFwiLCBcInF1b3RlQXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFzc2V0XCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBc3NldFwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhc2VCYWxhbmNlXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVCYWxhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIi1cIiAmJiBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlQW1vdW50XCI6XG4gICAgICAgICAgICBjYXNlIFwiYmFzZVNwcmVhZFwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlU3ByZWFkXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkZWZhdWx0UHJpY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKCt2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWxpZGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VCYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmJhbGFuY2VfcGVyY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLnNwcmVhZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlU3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGVBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGVTcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmRlZmF1bHRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlZmF1bHRQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlZmF1bHRQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZWZhdWx0UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJkZWZhdWx0UHJpY2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmcm9tTWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mcm9tTWFya2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmdldF9wcmljZV9mcm9tX21hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiIsImltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYjogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGNhbGwgQXBpcy5kYi4ke21ldGhvZH0oJHtbLi4uYXJndW1lbnRzXX0pYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaXNcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgaGlzdG9yeTogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5oaXN0b3J5X2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgbmV0d29yazogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5uZXR3b3JrX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgY3J5cHRvOiBuZXcgUHJveHkoQXBpcywge1xuICAgICAgICBnZXQoYXBpcywgbWV0aG9kKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaXNcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmNyeXB0b19hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIG9yZGVyczogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5vcmRlcnNfYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMobWV0aG9kLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSlcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcInJlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIjtcclxuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcclxuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XHJcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi8uLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcclxuaW1wb3J0IEFzeW5jU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3QvbGliL0FzeW5jXCI7XHJcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IHtnZXRNeU1hcmtldHNRdW90ZXMsIGdldEFzc2V0SGlkZU5hbWVzcGFjZXN9IGZyb20gXCJicmFuZGluZ1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXNzZXRMYWJlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBuYW1lOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGhpZGVQcmVmaXggPSBuYW1lID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gbmFtZS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgaWYgKGdldEFzc2V0SGlkZU5hbWVzcGFjZXMoKS5pbmNsdWRlcyhgJHthcnJbMF19LmApKSBhcnIuc2hpZnQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFyci5qb2luKFwiLlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0QXNzZXROYW1lKHRoaXMucHJvcHMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBpZiAobmV4dFByb3BzLm5hbWUgIT09IHRoaXMucHJvcHMubmFtZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRBc3NldE5hbWUobmV4dFByb3BzLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFzc2V0TmFtZSA9IGFzeW5jIG5hbWUgPT4ge1xyXG4gICAgICAgIGxldCBhc3NldCA9IGF3YWl0IEFzc2V0c1tuYW1lXTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IGFzc2V0LmJpdGFzc2V0X2RhdGFfaWQgPyBgYml0JHtuYW1lfWAgOiBuYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmhpZGVQcmVmaXgodGhpcy5zdGF0ZS5uYW1lIHx8IHRoaXMucHJvcHMubmFtZSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBvcHRpb25zID0gZ2V0TXlNYXJrZXRzUXVvdGVzKCkubWFwKG5hbWUgPT4gKHtcclxuICAgIHZhbHVlOiBuYW1lLFxyXG4gICAgbGFiZWw6IDxBc3NldExhYmVsIG5hbWU9e25hbWV9IC8+XHJcbn0pKTtcclxuXHJcbmNsYXNzIEFzc2V0U2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlT3B0aW9ucyA9IGRlYm91bmNlKHRoaXMucHJvbWlzZU9wdGlvbnMsIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSBvcHRpb24gPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25DaGFuZ2VcIiwgb3B0aW9uKTtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uID8gb3B0aW9uLnZhbHVlIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb21pc2VPcHRpb25zID0gYXN5bmMgaW5wdXRWYWx1ZSA9PiB7XHJcbiAgICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG9wdGlvbnMuZmlsdGVyKGkgPT4gaS52YWx1ZSA9PSBpbnB1dFZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDAgJiYgaW5wdXRWYWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgYXNzZXQgPSAoYXdhaXQgQXBpcy5kYi5saXN0X2Fzc2V0cyhpbnB1dFZhbHVlLCAxKSlbMF07XHJcblxyXG4gICAgICAgICAgICBpZiAoYXNzZXQgJiYgIW9wdGlvbnMuZmluZChpID0+IGkudmFsdWUgPT0gYXNzZXQuc3ltYm9sKSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXNzZXQuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXthc3NldC5zeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtvcHRpb25zfTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLnByb3BzLnZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fT5cclxuICAgICAgICAgICAgICAgIDxBc3luY1NlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17dGhpcy5wcm9taXNlT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hQcm9tcHRUZXh0PXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90cy5hc3NldF9zZWxlY3Rvci53YWl0XCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90cy5hc3NldF9zZWxlY3Rvci5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFzc2V0U2VsZWN0b3I7XHJcbiIsImltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5cbmNsYXNzIEFzc2V0IHtcbiAgICBzdGF0aWMgZ2V0KF8sIG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXNbbmFtZV0pIHJldHVybiB0aGlzW25hbWVdO1xuXG4gICAgICAgIHJldHVybiAvXjFcXC4zXFwuXFxkKyQvLnRlc3QobmFtZSkgfHwgIWlzTmFOKG5hbWUpXG4gICAgICAgICAgICA/IHRoaXMuaWQobmFtZSlcbiAgICAgICAgICAgIDogdGhpcy5nZXRBc3NldChuYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0QXNzZXQoX3N5bWJvbCkge1xuICAgICAgICBsZXQgc3ltYm9sID0gX3N5bWJvbC50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5tYXAgfHwge307XG5cbiAgICAgICAgaWYgKHRoaXMubWFwW3N5bWJvbF0pIHJldHVybiB0aGlzLm1hcFtzeW1ib2xdO1xuXG4gICAgICAgIGxldCBvYmogPSAoYXdhaXQgQXBpcy5kYi5saXN0X2Fzc2V0cyhzeW1ib2wsIDEpKVswXTtcblxuICAgICAgICBpZiAoIW9iaiB8fCBvYmouc3ltYm9sICE9PSBzeW1ib2wpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYE5vdCBmb3VuZCBhc3NldCAke3N5bWJvbH0hIEJsb2NrY2hhaW4gcmV0dXJuICR7XG4gICAgICAgICAgICAgICAgICAgIG9iaiA/IG9iai5zeW1ib2wgOiBvYmpcbiAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm1hcFtzeW1ib2xdID0gbmV3IHRoaXMob2JqKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwW3N5bWJvbF07XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGlkKGlkKSB7XG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5tYXAgfHwge307XG4gICAgICAgIGxldCBhc3NldCA9IE9iamVjdC5rZXlzKHRoaXMubWFwKS5maW5kKFxuICAgICAgICAgICAgc3ltYm9sID0+IHRoaXMubWFwW3N5bWJvbF0uaWQgPT0gaWRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoYXNzZXQpIHJldHVybiB0aGlzLm1hcFthc3NldF07XG5cbiAgICAgICAgYXNzZXQgPSAoYXdhaXQgQXBpcy5kYi5nZXRfYXNzZXRzKFtpZF0pKVswXTtcblxuICAgICAgICBpZiAoIWFzc2V0KSB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBhc3NldCBieSBpZCAke2lkfSFgKTtcblxuICAgICAgICB0aGlzLm1hcFthc3NldC5zeW1ib2xdID0gbmV3IHRoaXMoYXNzZXQpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBbYXNzZXQuc3ltYm9sXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZnJvbVBhcmFtKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiB7YW1vdW50OiBwYXJhbS5hbW91bnQsIGFzc2V0OiBhd2FpdCB0aGlzLmlkKHBhcmFtLmFzc2V0X2lkKX07XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcblxuICAgICAgICBsZXQgYXNzZXRzID0gYXdhaXQgQXBpcy5kYi5nZXRfYXNzZXRzKFxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tYXApLm1hcChzeW1ib2wgPT4gdGhpcy5tYXBbc3ltYm9sXS5pZClcbiAgICAgICAgKTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4gT2JqZWN0LmFzc2lnbih0aGlzLm1hcFthc3NldC5zeW1ib2xdLCBhc3NldCkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJwY09iaikge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHJwY09iaik7XG4gICAgfVxuXG4gICAgdG9QYXJhbShudW1iZXIgPSAwKSB7XG4gICAgICAgIHJldHVybiB7YW1vdW50OiBudW1iZXIsIGFzc2V0X2lkOiB0aGlzLmlkfTtcbiAgICB9XG5cbiAgICBmZWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50IC8gMTAwIC8gMTAwO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZSgpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCAoYXdhaXQgQXBpcy5kYi5nZXRfYXNzZXRzKFt0aGlzLmlkXSkpWzBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm94eSh7fSwgQXNzZXQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Fzc2V0TGFiZWx9IGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFN0YXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt2YWxpZGF0ZTogW119LCB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgcXVvdGU7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2cobmFtZSwgdmFsdWUsIHR5cGVvZiB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFtb3VudFwiOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuc3RhdGUuYmFzZTtcclxuICAgICAgICAgICAgICAgIGJhc2UuYW1vdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBlcmNlbnRCYXNlQW1vdW50XCI6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5wZXJjZW50ID0gdmFsdWUgPT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VCYWxhbmNlXCI6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5iYWxhbmNlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VTcHJlYWRcIjpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnN0YXRlLmJhc2U7XHJcbiAgICAgICAgICAgICAgICBiYXNlLnNwcmVhZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUFtb3VudFwiOlxyXG4gICAgICAgICAgICAgICAgcXVvdGUgPSB0aGlzLnN0YXRlLnF1b3RlO1xyXG4gICAgICAgICAgICAgICAgcXVvdGUuYW1vdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXJjZW50UXVvdGVBbW91bnRcIjpcclxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcclxuICAgICAgICAgICAgICAgIHF1b3RlLnBlcmNlbnQgPSB2YWx1ZSA9PSBcInRydWVcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1b3RlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInF1b3RlQmFsYW5jZVwiOlxyXG4gICAgICAgICAgICAgICAgcXVvdGUgPSB0aGlzLnN0YXRlLnF1b3RlO1xyXG4gICAgICAgICAgICAgICAgcXVvdGUuYmFsYW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVTcHJlYWRcIjpcclxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcclxuICAgICAgICAgICAgICAgIHF1b3RlLnNwcmVhZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVmYXVsdFByaWNlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkZWZhdWx0UHJpY2U6IHZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZyb21NYXJrZXRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zyb21NYXJrZXQ6IGV2ZW50LnRhcmdldC5jaGVja2VkfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQm90ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZU5vdyA9IHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYmFzZS5vcmRlciA9IHN0YXRlTm93LmJhc2Uub3JkZXI7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5xdW90ZS5vcmRlciA9IHN0YXRlTm93LnF1b3RlLm9yZGVyO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLndyaXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5iYXNlLmFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUuYmFzZS5hc3NldH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlLmJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEJhc2VBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuYmFzZS5wZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXshdGhpcy5zdGF0ZS5iYXNlLnBlcmNlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3ZhbHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLnNwcmVhZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5zcHJlYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlU3ByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnF1b3RlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUucXVvdGUuYXNzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5xdW90ZS5hc3NldH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGUuYmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnF1b3RlLnBlcmNlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3BlcmNlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXshdGhpcy5zdGF0ZS5xdW90ZS5wZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV92YWx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5zcHJlYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmRlZmF1bHRfcHJpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWZhdWx0UHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJkZWZhdWx0UHJpY2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZyb21NYXJrZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mcm9tTWFya2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuZ2V0X3ByaWNlX2Zyb21fbWFya2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTAsIG1hcmdpbkJvdHRvbTogMzB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnVwZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGU7XHJcbiIsImltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQgQXNzZXRzIGZyb20gXCJsaWIvYm90cy9hc3NldHNcIjtcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSBcImJpZ251bWJlci5qc1wiO1xuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcbmltcG9ydCB7VHJhbnNhY3Rpb25CdWlsZGVyfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxuY2xhc3MgQWNjb3VudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZmVlU3ltYm9sID0gXCJCVFNcIikge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBBcGlzLmRiLmdldF9hY2NvdW50X2J5X25hbWUobmFtZSksXG4gICAgICAgICAgICBBc3NldHNbZmVlU3ltYm9sXVxuICAgICAgICBdKS50aGVuKChbYWNjLCBmZWVdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjYyA9IGFjYztcbiAgICAgICAgICAgIHRoaXMuZmVlQXNzZXQgPSBmZWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbmNlbE9yZGVyKGlkKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucHJvbWlzZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kVHJhbnNhY3Rpb24oXCJsaW1pdF9vcmRlcl9jYW5jZWxcIiwge1xuICAgICAgICAgICAgZmVlOiB0aGlzLmZlZUFzc2V0LnRvUGFyYW0oKSxcbiAgICAgICAgICAgIGZlZV9wYXlpbmdfYWNjb3VudDogdGhpcy5hY2MuaWQsXG4gICAgICAgICAgICBvcmRlcjogaWQsXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBidXkoXG4gICAgICAgIGJ1eVN5bWJvbCxcbiAgICAgICAgYmFzZVN5bWJvbCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBwcmljZSxcbiAgICAgICAgZmlsbF9vcl9raWxsID0gZmFsc2UsXG4gICAgICAgIGV4cGlyZSA9IFwiMjAyNS0wMi0wMlQwMjowMjowMlwiXG4gICAgKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucHJvbWlzZTtcblxuICAgICAgICBsZXQgYnV5QXNzZXQgPSBhd2FpdCBBc3NldHNbXG4gICAgICAgICAgICAgICAgdHlwZW9mIGJ1eVN5bWJvbCA9PT0gXCJvYmplY3RcIiA/IGJ1eVN5bWJvbC5hc3NldF9pZCA6IGJ1eVN5bWJvbFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJhc2VBc3NldCA9IGF3YWl0IEFzc2V0c1tcbiAgICAgICAgICAgICAgICB0eXBlb2YgYmFzZVN5bWJvbCA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IGJhc2VTeW1ib2wuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgOiBiYXNlU3ltYm9sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYnV5QW1vdW50ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICBCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBidXlTeW1ib2wgPT09IFwib2JqZWN0XCIgPyBidXlTeW1ib2wuYW1vdW50IDogYW1vdW50XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogYnV5QXNzZXQucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNlbGxBbW91bnQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICh0eXBlb2YgYmFzZVN5bWJvbCA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IEJpZ051bWJlcihiYXNlU3ltYm9sLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgOiBCaWdOdW1iZXIoYW1vdW50KS50aW1lcyhwcmljZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiBiYXNlQXNzZXQucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBpZiAoYnV5QW1vdW50ID09IDAgfHwgc2VsbEFtb3VudCA9PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW1vdW50IGVxdWFsIDAhXCIpO1xuXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IHRoaXMuc2VuZFRyYW5zYWN0aW9uKFwibGltaXRfb3JkZXJfY3JlYXRlXCIsIHtcbiAgICAgICAgICAgIGZlZTogdGhpcy5mZWVBc3NldC50b1BhcmFtKCksXG4gICAgICAgICAgICBzZWxsZXI6IHRoaXMuYWNjLmlkLFxuICAgICAgICAgICAgYW1vdW50X3RvX3NlbGw6IGJhc2VBc3NldC50b1BhcmFtKHNlbGxBbW91bnQpLFxuICAgICAgICAgICAgbWluX3RvX3JlY2VpdmU6IGJ1eUFzc2V0LnRvUGFyYW0oYnV5QW1vdW50KSxcbiAgICAgICAgICAgIGV4cGlyYXRpb246IGV4cGlyZSxcbiAgICAgICAgICAgIGZpbGxfb3Jfa2lsbDogZmlsbF9vcl9raWxsLFxuICAgICAgICAgICAgZXh0ZW5zaW9uczogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFtcbiAgICAgICAgICAgIHR4WzBdLnRyeC5vcGVyYXRpb25fcmVzdWx0c1swXVsxXVxuICAgICAgICBdKSlbMF07XG4gICAgfVxuXG4gICAgYXN5bmMgc2VsbChcbiAgICAgICAgc2VsbFN5bWJvbCxcbiAgICAgICAgYmFzZVN5bWJvbCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBwcmljZSxcbiAgICAgICAgZmlsbF9vcl9raWxsID0gZmFsc2UsXG4gICAgICAgIGV4cGlyZSA9IFwiMjAyNS0wMi0wMlQwMjowMjowMlwiXG4gICAgKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucHJvbWlzZTtcblxuICAgICAgICBsZXQgc2VsbEFzc2V0ID0gYXdhaXQgQXNzZXRzW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBzZWxsU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gc2VsbFN5bWJvbC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA6IHNlbGxTeW1ib2xcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiYXNlQXNzZXQgPSBhd2FpdCBBc3NldHNbXG4gICAgICAgICAgICAgICAgdHlwZW9mIGJhc2VTeW1ib2wgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBiYXNlU3ltYm9sLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIDogYmFzZVN5bWJvbFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNlbGxBbW91bnQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgIEJpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHNlbGxTeW1ib2wgPT09IFwib2JqZWN0XCIgPyBzZWxsU3ltYm9sLmFtb3VudCA6IGFtb3VudFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIHNlbGxBc3NldC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYnV5QW1vdW50ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAodHlwZW9mIGJhc2VTeW1ib2wgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYmFzZVN5bWJvbC5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgIDogQmlnTnVtYmVyKGFtb3VudCkudGltZXMocHJpY2UpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogYmFzZUFzc2V0LnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgaWYgKGJ1eUFtb3VudCA9PSAwIHx8IHNlbGxBbW91bnQgPT0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFtb3VudCBlcXVhbCAwIVwiKTtcblxuICAgICAgICBsZXQgdHggPSBhd2FpdCB0aGlzLnNlbmRUcmFuc2FjdGlvbihcImxpbWl0X29yZGVyX2NyZWF0ZVwiLCB7XG4gICAgICAgICAgICBmZWU6IHRoaXMuZmVlQXNzZXQudG9QYXJhbSgpLFxuICAgICAgICAgICAgc2VsbGVyOiB0aGlzLmFjYy5pZCxcbiAgICAgICAgICAgIGFtb3VudF90b19zZWxsOiBzZWxsQXNzZXQudG9QYXJhbShzZWxsQW1vdW50KSxcbiAgICAgICAgICAgIG1pbl90b19yZWNlaXZlOiBiYXNlQXNzZXQudG9QYXJhbShidXlBbW91bnQpLFxuICAgICAgICAgICAgZXhwaXJhdGlvbjogZXhwaXJlLFxuICAgICAgICAgICAgZmlsbF9vcl9raWxsOiBmaWxsX29yX2tpbGwsXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbXVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW1xuICAgICAgICAgICAgdHhbMF0udHJ4Lm9wZXJhdGlvbl9yZXN1bHRzWzBdWzFdXG4gICAgICAgIF0pKVswXTtcbiAgICB9XG5cbiAgICBhc3luYyBiYWxhbmNlcygpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuICAgICAgICByZXR1cm4gQXBpcy5kYi5nZXRfYWNjb3VudF9iYWxhbmNlcyh0aGlzLmFjYy5pZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRUcmFuc2FjdGlvbih0eXBlLCBvcGVyYXRpb24pIHtcbiAgICAgICAgbGV0IHRyID0gbmV3IFRyYW5zYWN0aW9uQnVpbGRlcigpO1xuICAgICAgICB0ci5hZGRfdHlwZV9vcGVyYXRpb24odHlwZSwgb3BlcmF0aW9uKTtcbiAgICAgICAgYXdhaXQgdHIuc2V0X3JlcXVpcmVkX2ZlZXMoKTtcblxuICAgICAgICBhd2FpdCBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpO1xuICAgICAgICBsZXQgcHJpdmF0ZV9rZXkgPSBXYWxsZXREYi5nZXRQcml2YXRlS2V5KFxuICAgICAgICAgICAgdGhpcy5hY2MuYWN0aXZlLmtleV9hdXRoc1swXVswXVxuICAgICAgICApO1xuICAgICAgICB0ci5hZGRfc2lnbmVyKFxuICAgICAgICAgICAgcHJpdmF0ZV9rZXksXG4gICAgICAgICAgICBwcml2YXRlX2tleS50b1B1YmxpY0tleSgpLnRvUHVibGljS2V5U3RyaW5nKClcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdHIuYnJvYWRjYXN0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50O1xuIiwiaW1wb3J0IENyZWF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1RyYWlsaW5nU3RvcC9DcmVhdGVcIjtcclxuaW1wb3J0IFN0YXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XHJcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcclxuaW1wb3J0IEFjY291bnQgZnJvbSBcImxpYi9ib3RzL2FjY291bnRcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgVHJhaWxpbmdTdG9wIHtcclxuICAgIHN0YXRpYyBjcmVhdGUgPSBDcmVhdGU7XHJcbiAgICBzdGF0ZSA9IFN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbmV3IEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHJcbiAgICAgICAgaWYgKGluaXREYXRhKSB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBpbml0RGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0OiBpbml0RGF0YS5zZWxsQXNzZXQsXHJcbiAgICAgICAgICAgICAgICBnZXRBc3NldDogaW5pdERhdGEuZ2V0QXNzZXQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIG1pbkFtb3VudDogaW5pdERhdGEubWluQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcGVyY2VudDogaW5pdERhdGEucGVyY2VudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IHN0b3JhZ2UucmVhZCgpLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcclxuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGxBc3NldCA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5zZWxsQXNzZXRdO1xyXG4gICAgICAgIHRoaXMuZ2V0QXNzZXQgPSBhd2FpdCBBc3NldHNbc3RhdGUuZ2V0QXNzZXRdO1xyXG5cclxuICAgICAgICBhd2FpdCBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpO1xyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcclxuICAgICAgICAgICAgc2V0dGluZzogXCJ3YWxsZXRMb2NrVGltZW91dFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBDaGFpblN0b3JlLnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcclxuICAgICAgICB0aGlzLnJ1biA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdG9wKCkge1xyXG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnF1ZXVlRXZlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5jaGVja09yZGVycylcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yLmJpbmQodGhpcy5sb2dnZXIpKTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tPcmRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrT3JkZXJzXCIpO1xyXG5cclxuICAgICAgICBsZXQgdGlja2VyID0gYXdhaXQgQXBpcy5kYi5nZXRfdGlja2VyKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBc3NldC5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGxBc3NldC5zeW1ib2xcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgcHJpY2UgPSBCaWdOdW1iZXIodGlja2VyLmxhdGVzdCksXHJcbiAgICAgICAgICAgIG5lZWRTdG9wbG9zcyA9IHByaWNlLnRpbWVzKDEgLSBzdGF0ZS5wZXJjZW50IC8gMTAwKSxcclxuICAgICAgICAgICAgY3JlYXRlT3JkZXJQcmljZSA9IHByaWNlLnRpbWVzKDEgLSAoc3RhdGUucGVyY2VudCAqIDIpIC8gMyAvIDEwMCksXHJcbiAgICAgICAgICAgIHN0b3Bsb3NzID0gQmlnTnVtYmVyKHN0YXRlLm1pbkFtb3VudCkuZGl2KHN0YXRlLmFtb3VudCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBwcmljZS50b051bWJlcigpLFxyXG4gICAgICAgICAgICBuZWVkU3RvcGxvc3MudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgY3JlYXRlT3JkZXJQcmljZS50b051bWJlcigpLFxyXG4gICAgICAgICAgICBzdG9wbG9zcy50b051bWJlcigpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKG5lZWRTdG9wbG9zcy5ndChzdG9wbG9zcykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cCBtaW5BbW91bnRcIik7XHJcbiAgICAgICAgICAgIHN0YXRlLm1pbkFtb3VudCA9IG5lZWRTdG9wbG9zcy50aW1lcyhzdGF0ZS5hbW91bnQpLnRvTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVPcmRlclByaWNlLmx0KHN0b3Bsb3NzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBsaW1pdCBvcmRlclwiKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGxBc3NldC5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFzc2V0LnN5bWJvbCxcclxuICAgICAgICAgICAgICAgIHN0YXRlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIHN0b3Bsb3NzLnRvTnVtYmVyKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhaWxpbmdTdG9wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90TWFuYWdlciBmcm9tIFwibGliL2JvdHNcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIENyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHNlbGxBc3NldDogXCJSVURFWC5CVENcIixcbiAgICAgICAgZ2V0QXNzZXQ6IFwiUlVERVguVVNEVFwiLFxuICAgICAgICBhbW91bnQ6IDAuMDEsXG4gICAgICAgIG1pbkFtb3VudDogMSxcbiAgICAgICAgc3RvcGxvc3M6IDEwMCxcbiAgICAgICAgcGVyY2VudDogMTAsXG4gICAgICAgIHZhbGlkYXRlOiBbXCJuYW1lXCJdXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUgPSBkZWJvdW5jZSh0aGlzLmFzc2V0VmFsaWRhdGUsIDIwMCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKFtcInNlbGxBc3NldFwiLCBcImdldEFzc2V0XCJdLmluY2x1ZGVzKG5hbWUpKVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcIm1pbkFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlIC8gdGhpcy5zdGF0ZS5hbW91bnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3RvcGxvc3NcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgKiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcImFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSAqIHRoaXMuc3RhdGUuc3RvcGxvc3NcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQXNzZXRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJnZXRBc3NldFwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcIm1pbkFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInBlY2VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInN0b3Bsb3NzXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsaWRhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zZWxsX2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxsQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGxBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AuYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AuZ2V0X2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZXRBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2V0QXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLm1pbl9hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbkFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnN0b3Bsb3NzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9wbG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdG9wbG9zc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJzdG9wbG9zc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AudHJhaWxpbmdfcGVyY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwicGVyY2VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXNzZXRMYWJlbH0gZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIFN0YXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdmFsaWRhdGU6IFtdXG4gICAgfTtcblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCk7XG4gICAgICAgIHN0YXRlLnN0b3Bsb3NzID0gc3RhdGUubWluQW1vdW50IC8gc3RhdGUuYW1vdW50O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmIChbXCJzZWxsQXNzZXRcIiwgXCJnZXRBc3NldFwiXS5pbmNsdWRlcyhuYW1lKSlcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gXCJtaW5BbW91bnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHN0b3Bsb3NzOiB2YWx1ZSAvIHRoaXMuc3RhdGUuYW1vdW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInN0b3Bsb3NzXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHRoaXMuc3RhdGUuYW1vdW50ICogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHN0b3Bsb3NzOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJhbW91bnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdmFsdWUgKiB0aGlzLnN0YXRlLnN0b3Bsb3NzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XG4gICAgfTtcblxuICAgIHZhbGlkYXRlID0gKG5hbWUsIHZhbHVlKSA9PiB7fTtcblxuICAgIGhhbmRsZVVwZGF0ZUJvdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS53cml0ZSh0aGlzLnN0YXRlKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTAsIG1hcmdpblRvcDogNTB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zZWxsX2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsbEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5zZWxsQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLnNlbGxBc3NldH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AuZ2V0X2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2V0QXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmdldEFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5nZXRBc3NldH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5taW5fYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW5BbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnN0b3Bsb3NzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9wbG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdG9wbG9zc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwic3RvcGxvc3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnRyYWlsaW5nX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJwZXJjZW50XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQm90fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnVwZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlO1xuIiwiaW1wb3J0IENyZWF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1BlcmNlbnRVcC9DcmVhdGVcIjtcclxuaW1wb3J0IFN0YXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvUGVyY2VudFVwL1N0YXRlXCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCJsaWIvYm90cy9hY2NvdW50XCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XHJcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcclxuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcclxuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgUGVyY2VudFVwIHtcclxuICAgIHN0YXRpYyBjcmVhdGUgPSBDcmVhdGU7XHJcbiAgICBzdGF0ZSA9IFN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbmV3IEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHJcbiAgICAgICAgaWYgKGluaXREYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgICAgIHF1b3RlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcGVyY2VudEFtb3VudCxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICBzcHJlYWQsXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZVxyXG4gICAgICAgICAgICB9ID0gaW5pdERhdGE7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgICAgIHF1b3RlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcGVyY2VudEFtb3VudCxcclxuICAgICAgICAgICAgICAgIGJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICBzcHJlYWQsXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBzdG9yYWdlLnJlYWQoKS5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XHJcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYXNlID0gYXdhaXQgQXNzZXRzW3N0YXRlLmJhc2VdO1xyXG4gICAgICAgIHRoaXMucXVvdGUgPSBhd2FpdCBBc3NldHNbc3RhdGUucXVvdGVdO1xyXG5cclxuICAgICAgICBhd2FpdCBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpO1xyXG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcclxuICAgICAgICAgICAgc2V0dGluZzogXCJ3YWxsZXRMb2NrVGltZW91dFwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBDaGFpblN0b3JlLnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcclxuICAgICAgICB0aGlzLnJ1biA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdG9wKCkge1xyXG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnF1ZXVlRXZlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5jaGVja09yZGVycylcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yLmJpbmQodGhpcy5sb2dnZXIpKTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tPcmRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKSxcclxuICAgICAgICAgICAgbG9nID0gKC4uLmFyZ3MpID0+IHRoaXMubG9nZ2VyLmxvZyhgWyR7c3RhdGUubmFtZX1dYCwgLi4uYXJncyksXHJcbiAgICAgICAgICAgIGFjY291bnRCYWxhbmNlcyA9IChhd2FpdCB0aGlzLmFjY291bnQuYmFsYW5jZXMoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLmlkXHJcbiAgICAgICAgICAgICkpLnJlZHVjZSgoYWNjLCBiYWxhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuaWQgPT09IGJhbGFuY2UuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICA/IChhY2MuYmFzZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoYWNjLnF1b3RlID0gQmlnTnVtYmVyKGJhbGFuY2UuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSwge30pLFxyXG4gICAgICAgICAgICBiYWxhbmNlID1cclxuICAgICAgICAgICAgICAgIHN0YXRlLmJhbGFuY2UgPT09IFwiLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5iYWxhbmNlID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEJhbGFuY2VzLmJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihhY2NvdW50QmFsYW5jZXMuYmFzZSwgc3RhdGUuYmFsYW5jZSksXHJcbiAgICAgICAgICAgIGFtb3VudCA9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wZXJjZW50QW1vdW50LnRvU3RyaW5nKCkgPT0gXCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICA/IEJpZ051bWJlcihiYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5hbW91bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmFtb3VudCxcclxuICAgICAgICAgICAgb3JkZXJzID0gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5vcmRlcnMubWFwKG9yZGVyID0+IG9yZGVyLmlkKS5maWx0ZXIoaWQgPT4gaWQpXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAubWFwKG9yZGVyID0+IG9yZGVyICYmIG9yZGVyLmlkKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpZCA9PiBpZCksXHJcbiAgICAgICAgICAgIHByb2Nlc3NPcmRlcnMgPSBzdGF0ZS5vcmRlcnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgb3JkZXIgPT4gIW9yZGVycy5pbmNsdWRlcyhvcmRlci5pZClcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgb3JkZXJGZWUgPSBCaWdOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAoYXdhaXQgQXBpcy5kYi5nZXRfZ2xvYmFsX3Byb3BlcnRpZXMoKSkucGFyYW1ldGVycy5jdXJyZW50X2ZlZXNcclxuICAgICAgICAgICAgICAgICAgICAucGFyYW1ldGVyc1sxXVsxXS5mZWVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmRpdigxMCAqKiA1KVxyXG4gICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XHJcblxyXG4gICAgICAgIGlmIChwcm9jZXNzT3JkZXJzLmxlbmd0aCA+IDApIGF3YWl0IHRoaXMuYmFzZS51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gcHJvY2Vzc09yZGVycy5tYXAoYXN5bmMgb3JkZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3JkZXIuc3RhdGUgPT09IFwiYnV5XCIpIHtcclxuICAgICAgICAgICAgICAgIG9yZGVyLmlkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmICghW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYWxhbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhbW91bnRUb01hcmtldCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcih0aGlzLmJhc2Uub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwMCAqIDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhvcmRlci5iYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFsYW5jZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5iYWxhbmNlKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihvcmRlci5iYXNlKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhbW91bnRUb01hcmtldCAhPT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYW1vdW50VG9NYXJrZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmJhc2Uub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgIT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDEwICoqIC10aGlzLmJhc2UucHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JRdW90ZUZlZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sID09PSBcIkJUU1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChpc05hTihvcmRlci5mZWUpID8gb3JkZXJGZWUgOiBvcmRlci5mZWUpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJGZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCxcclxuICAgICAgICAgICAgICAgICAgICBmb3JCYXNlRmVlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCA9PT0gXCJCVFNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoaXNOYU4ob3JkZXIuZmVlKSA/IG9yZGVyRmVlIDogb3JkZXIuZmVlKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyRmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucXVvdGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihhY2NvdW50QmFsYW5jZXMucXVvdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihvcmRlci5xdW90ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgLSBmb3JRdW90ZUZlZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudE9uTWFya2V0ID0gQmlnTnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnRcclxuICAgICAgICAgICAgICAgICAgICApLmRpdigxMDAgKiAxMDApLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VBc3NldEFtb3VudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMuYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBCaWdOdW1iZXIob3JkZXIuYmFzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHN0YXRlLnNwcmVhZCkgLyAxMDAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50T25NYXJrZXQudG9OdW1iZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoZm9yQmFzZUZlZSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxvZyhcclxuICAgICAgICAgICAgICAgICAgICBgYnV5ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICB9OiBhbW91bnQ9JHtiYXNlQXNzZXRBbW91bnQuYW1vdW50LnRvTnVtYmVyKCl9IHByaWNlPSR7QmlnTnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0QW1vdW50LmFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihiYXNlQXNzZXRBbW91bnQuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKX0gJHt0aGlzLmJhc2Uuc3ltYm9sfS8ke3RoaXMucXVvdGUuc3ltYm9sfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXRBbW91bnRcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3JkZXIuc3RhdGUgPSBcImJ1eVwiO1xyXG4gICAgICAgICAgICAgICAgb3JkZXIuaWQgPSBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCI7XHJcbiAgICAgICAgICAgICAgICBvcmRlci5iYXNlID0gYmFzZUFzc2V0QW1vdW50LmFtb3VudC50b051bWJlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcbiAgICAgICAgbGV0IG9yZGVyQm9vayA9IGF3YWl0IEFwaXMuZGIuZ2V0X29yZGVyX2Jvb2soXHJcbiAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxyXG4gICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxyXG4gICAgICAgICAgICA1MFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBxdW90ZUFtb3VudCA9IEJpZ051bWJlcigwKSxcclxuICAgICAgICAgICAgYmFzZUFtb3VudCA9IEJpZ051bWJlcigwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVyQm9vay5hc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhc2sgPSBvcmRlckJvb2suYXNrc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBxdW90ZSA9IEJpZ051bWJlcihhc2suYmFzZSk7XHJcbiAgICAgICAgICAgIGxldCBiYXNlID0gQmlnTnVtYmVyKGFzay5xdW90ZSk7XHJcbiAgICAgICAgICAgIGxldCBkaWZmQmFzZSA9IEJpZ051bWJlcihhbW91bnQpLm1pbnVzKGJhc2VBbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhc2UuaXNFcXVhbFRvKGRpZmZCYXNlKSkge1xyXG4gICAgICAgICAgICAgICAgcXVvdGVBbW91bnQgPSBxdW90ZUFtb3VudC5wbHVzKHF1b3RlKTtcclxuICAgICAgICAgICAgICAgIGJhc2VBbW91bnQgPSBiYXNlQW1vdW50LnBsdXMoYmFzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmlzTGVzc1RoYW4oZGlmZkJhc2UpKSB7XHJcbiAgICAgICAgICAgICAgICBxdW90ZUFtb3VudCA9IHF1b3RlQW1vdW50LnBsdXMocXVvdGUpO1xyXG4gICAgICAgICAgICAgICAgYmFzZUFtb3VudCA9IGJhc2VBbW91bnQucGx1cyhiYXNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmlzR3JlYXRlclRoYW4oZGlmZkJhc2UpKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50ID0gYmFzZUFtb3VudC5wbHVzKGRpZmZCYXNlKTtcclxuICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50ID0gcXVvdGVBbW91bnQucGx1cyhcclxuICAgICAgICAgICAgICAgICAgICBCaWdOdW1iZXIoYXNrLnByaWNlKS50aW1lcyhkaWZmQmFzZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByaWNlID0gcXVvdGVBbW91bnQuZGl2KGJhc2VBbW91bnQpLFxyXG4gICAgICAgICAgICBsb3dQcmljZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHN0YXRlLm9yZGVycy5mb3JFYWNoKG9yZGVyID0+IHtcclxuICAgICAgICAgICAgbGV0IG9yZGVyUHJpY2UgPSBCaWdOdW1iZXIob3JkZXIucXVvdGUpLmRpdihvcmRlci5iYXNlKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIWxvd1ByaWNlIHx8XHJcbiAgICAgICAgICAgICAgICBvcmRlclByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLm1pbnVzKHByaWNlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hYnMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5pc0xlc3NUaGFuKGxvd1ByaWNlLm1pbnVzKHByaWNlKS5hYnMoKSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgbG93UHJpY2UgPSBvcmRlclByaWNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaXNHcmVhdGVyRGlzdGFuY2UgPVxyXG4gICAgICAgICAgICAhIWxvd1ByaWNlICYmXHJcbiAgICAgICAgICAgIGxvd1ByaWNlXHJcbiAgICAgICAgICAgICAgICAubWludXMocHJpY2UpXHJcbiAgICAgICAgICAgICAgICAuYWJzKClcclxuICAgICAgICAgICAgICAgIC5kaXYobG93UHJpY2UpXHJcbiAgICAgICAgICAgICAgICAudGltZXMoMTAwKVxyXG4gICAgICAgICAgICAgICAgLmlzR3JlYXRlclRoYW4oc3RhdGUuZGlzdGFuY2UpO1xyXG5cclxuICAgICAgICBsb2coXHJcbiAgICAgICAgICAgIGBPcmRlcnMgZXhpc3RzOiAkeyEhbG93UHJpY2V9LCBiYWxhbmNlID4gYW1vdW50OiAke2JhbGFuY2UgPlxyXG4gICAgICAgICAgICAgICAgYW1vdW50fSwgbG93UHJpY2UgLSBwcmljZSA+IGRpc3RhbmNlOiAke2lzR3JlYXRlckRpc3RhbmNlfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChiYWxhbmNlID4gYW1vdW50ICYmICghbG93UHJpY2UgfHwgaXNHcmVhdGVyRGlzdGFuY2UpKSB7XHJcbiAgICAgICAgICAgIGxldCBiYXNlQXNzZXRBbW91bnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMuYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBxdW90ZUFzc2V0QW1vdW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnF1b3RlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogcXVvdGVBbW91bnRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuYnV5KHF1b3RlQXNzZXRBbW91bnQsIGJhc2VBc3NldEFtb3VudCksXHJcbiAgICAgICAgICAgICAgICBvcmRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJzZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlOiBxdW90ZUFzc2V0QW1vdW50LmFtb3VudC50b051bWJlcigpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVlOiBvcmRlckZlZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLm9yZGVycy5wdXNoKG9yZGVyKTtcclxuICAgICAgICAgICAgbG9nKFxyXG4gICAgICAgICAgICAgICAgYHNlbGwgJHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXHJcbiAgICAgICAgICAgICAgICB9OiBhbW91bnQ9JHthbW91bnR9LCBwcmljZT0ke3ByaWNlLnRvTnVtYmVyKCl9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgfS8ke3RoaXMucXVvdGUuc3ltYm9sfWBcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYWxhbmNlKSlcclxuICAgICAgICAgICAgICAgIHN0YXRlLmJhbGFuY2UgPSBOdW1iZXIoc3RhdGUuYmFsYW5jZSkgLSBhbW91bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5vcmRlcnMgPSBzdGF0ZS5vcmRlcnMuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBudWxsKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLndyaXRlKHN0YXRlKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcmNlbnRVcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi9saWJzL0lucHV0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIENyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGJhc2U6IFwiQlRTXCIsXG4gICAgICAgIHF1b3RlOiBcIlJVREVYLkVPU1wiLFxuICAgICAgICBhbW91bnQ6IDEwMCxcbiAgICAgICAgcGVyY2VudEFtb3VudDogZmFsc2UsXG4gICAgICAgIGJhbGFuY2U6IFwiXCIsXG4gICAgICAgIHNwcmVhZDogMSxcbiAgICAgICAgZGlzdGFuY2U6IFwiMS41XCIsXG4gICAgICAgIHZhbGlkYXRlOiBbXCJuYW1lXCJdXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUgPSBkZWJvdW5jZSh0aGlzLmFzc2V0VmFsaWRhdGUsIDIwMCk7XG4gICAgfVxuXG4gICAgYXNzZXRWYWxpZGF0ZSA9IGFzeW5jIG5hbWUgPT4ge1xuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnN0YXRlW25hbWVdO1xuICAgICAgICBsZXQgYmxvY2tjaGFpbkFzc2V0cyA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKGFzc2V0LCAxKSlbMF07XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XG5cbiAgICAgICAgaWYgKGFzc2V0ICE9PSBibG9ja2NoYWluQXNzZXRzLnN5bWJvbCkgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZSA9IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKFtcImJhc2VcIiwgXCJxdW90ZVwiXS5pbmNsdWRlcyhuYW1lKSkgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XG4gICAgfTtcblxuICAgIHZhbGlkYXRlID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIS9eXFx3KyQvLnRlc3QodmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIEJvdE1hbmFnZXIuaGFzQm90KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhc2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwiLVwiICYmIGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzcHJlYWRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJkaXN0YW5jZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZhbGlkYXRlLCBuYW1lLCBhbW91bnQsIGJhbGFuY2UsIHNwcmVhZCwgZGlzdGFuY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VfcGVyY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VfdmFsdWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiYW1vdW50XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiYmFsYW5jZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnF1b3RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwic3ByZWFkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5wZXJjZW50X3VwLmRpc3RhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzdGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXN0YW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImRpc3RhbmNlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtuYW1lLCB2YWx1ZSwgb25DaGFuZ2UsIGJvcmRlciwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgaWQ9e25hbWV9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYm9yZGVyID8gXCIxcHggc29saWQgcmVkXCIgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBc3NldExhYmVsfSBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vbGlicy9JbnB1dFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBTdGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7dmFsaWRhdGU6IFtdfSwgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKFtcImJhc2VcIiwgXCJxdW90ZVwiXS5pbmNsdWRlcyhuYW1lKSkgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XG4gICAgfTtcblxuICAgIHZhbGlkYXRlID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIS9eXFx3KyQvLnRlc3QodmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIEJvdE1hbmFnZXIuaGFzQm90KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhc2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwiLVwiICYmIGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzcHJlYWRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJkaXN0YW5jZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvL3RoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlVXBkYXRlQm90ID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGVOb3cgPSB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKTtcblxuICAgICAgICB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLndyaXRlKHsuLi5zdGF0ZU5vdywgLi4udGhpcy5zdGF0ZX0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7dmFsaWRhdGUsIGFtb3VudCwgYmFsYW5jZSwgc3ByZWFkLCBkaXN0YW5jZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBob3Jpem9udGFsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLmJhc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImJhbGFuY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5xdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUucXVvdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zcHJlYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJzcHJlYWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnBlcmNlbnRfdXAuZGlzdGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXN0YW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc3RhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiZGlzdGFuY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQm90fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnVwZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlO1xuIiwiaW1wb3J0IGxzIGZyb20gXCJjb21tb24vbG9jYWxTdG9yYWdlXCI7XG5cbnZhciBib3RzID0gbHMoXCJfX2JvdHNfX1wiKTtcblxuY2xhc3MgU3RvcmFnZSB7XG4gICAgc3RhdGljIGdldEFjY291bnRCb3QoYWNjb3VudCkge1xuICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKGBeX19ib3RzX18ke2FjY291bnR9OjpgKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKGtleSA9PiByZS50ZXN0KGtleSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gYm90cy5oYXMobmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAvL2JvdHMuaGFzKG5hbWUpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8vaWYgKCFib3RzLmhhcyhuYW1lKSlcbiAgICAgICAgLy9ib3RzLnNldChuYW1lLCB7fSlcbiAgICB9XG5cbiAgICBpbml0KGRhdGEpIHtcbiAgICAgICAgaWYgKCFib3RzLmhhcyhuYW1lKSkgYm90cy5zZXQodGhpcy5uYW1lLCBkYXRhKTtcbiAgICB9XG5cbiAgICByZWFkKCkge1xuICAgICAgICByZXR1cm4gYm90cy5nZXQodGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICB3cml0ZShuZXdTdGF0ZSkge1xuICAgICAgICBib3RzLnNldCh0aGlzLm5hbWUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGJvdHMucmVtb3ZlKHRoaXMubmFtZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXVCQTtBQUNBO0FBQ0E7QUF6QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWxDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFuREE7QUFxREE7QUFFQTtBQUNBO0FBeERBO0FBeURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekRBO0FBZ0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFqRUE7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSkE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUE0REE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFEQTtBQURBO0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBVEE7QUF6QkE7QUEyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBbEJBO0FBNEJBO0FBQUE7QUFDQTtBQURBO0FBOUJBO0FBZkE7QUE1Q0E7QUFEQTtBQW1HQTs7OztBQS9MQTtBQUNBO0FBaU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7QUMzTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFqREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUE0RUE7QUFHQTtBQUNBO0FBaEZBO0FBaUZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFXQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQXVCQTtBQUNBO0FBeEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUEwQkE7QUExQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWlDQTtBQU9BO0FBQ0E7QUFDQTtBQTFDQTtBQTZCQTtBQWFBO0FBTUE7QUFNQTtBQU9BO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQXZFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBd0VBO0FBQ0E7QUFDQTtBQTNFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcUZBO0FBQ0E7QUFDQTtBQXhGQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBOEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVVBO0FBcEhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFzSEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQW5JQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXFJQTtBQUNBO0FBQ0E7QUF4SUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTJJQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2SkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTBKQTtBQUNBO0FBNUpBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFnS0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQTdLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQStLQTtBQUNBO0FBakxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXFMQTtBQUNBO0FBQ0E7QUF4TEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWtNQTtBQUNBO0FBQ0E7QUFyTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQTJNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBVUE7QUFoT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWtPQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBN09BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBK09BO0FBQ0E7QUFDQTtBQWxQQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBcVBBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW1RQTtBQUNBO0FBclFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUEyUUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQXRSQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXdSQTtBQUNBO0FBMVJBO0FBQ0E7QUE2UkE7QUFDQTtBQS9SQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFVQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUVBOztBQUVBO0FBQ0E7O0FBREE7O0FBQ0E7QUFDQTs7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBMFNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTs7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBOztBQUdBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBQUE7QUFFQTtBQUlBOztBQUlBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFEQTs7QUFHQTtBQUNBOztBQURBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEzY0E7QUFDQTtBQUNBO0FBOGNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQWFBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBNURBO0FBQ0E7QUE4REE7QUFDQTtBQUNBOzs7OztBQXBHQTtBQUNBO0FBQ0E7OztBQW9HQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFKQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUF2RUE7QUF5RkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBdkVBO0FBMUZBO0FBb0xBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFMQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVBBO0FBREE7QUE1TkE7QUF5T0E7Ozs7QUFqV0E7QUFDQTtBQW1XQTs7Ozs7Ozs7QUMzV0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUE5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFpQkE7QUFFQTtBQW5CQTtBQUFBO0FBQUE7QUE4QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFTQTtBQXhDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBMENBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWRBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQWZBO0FBQ0E7QUFDQTs7O0FBK0JBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFEQTtBQWNBOzs7O0FBcERBO0FBQ0E7QUFzREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7Ozs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOzs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0FBQ0E7O0FBQUE7QUFDQTs7OztBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUZBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBR0E7QUFBQTs7QUFBQTtBQUNBOztBQURBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5Q0E7QUFDQTtBQWdEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQXhFQTtBQUNBO0FBR0E7OztBQXNFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUF0RkE7QUF1R0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQXRGQTtBQXhHQTtBQWdOQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQUpBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUEvT0E7QUF5UEE7Ozs7QUF0VUE7QUFDQTtBQXdVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUlBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBOztBQUdBO0FBQ0E7O0FBREE7QUFLQTtBQU9BO0FBQ0E7QUFRQTs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTs7QUFEQTs7QUFVQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7O0FBS0E7QUFDQTs7QUFEQTtBQUtBO0FBT0E7QUFDQTtBQVFBOzs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBOztBQURBOztBQVVBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBZ0RBO0FBR0E7QUFDQTtBQXBEQTtBQXFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBdkJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXdCQTtBQXpCQTtBQUFBO0FBQ0E7QUFEQTtBQWdDQTtBQUNBO0FBakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQURBOztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFqREE7QUFDQTtBQUNBO0FBNEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBZ0JBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF2Q0E7QUFDQTtBQXlDQTtBQUNBO0FBQ0E7Ozs7O0FBckdBO0FBQ0E7QUFDQTs7O0FBcUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFKQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFaQTtBQTJCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFaQTtBQTVCQTtBQTBEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQXJCQTtBQTdFQTtBQW1IQTs7OztBQXhPQTtBQUNBO0FBME9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFZQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7O0FBakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOENBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFwQkE7QUFvQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFsQkE7QUF4Q0E7QUE2RUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBdEJBO0FBc0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBcEhBO0FBOEhBOzs7O0FBeExBO0FBQ0E7QUEwTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQTZEQTtBQUdBO0FBQ0E7QUFqRUE7QUFrRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFPQTtBQU9BO0FBQ0E7QUFDQTtBQWhCQTtBQUdBO0FBYUE7QUFNQTtBQXRCQTtBQUFBO0FBOEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEvQkE7QUFBQTtBQWdDQTtBQUFBO0FBQ0E7QUFqQ0E7QUFpQ0E7QUFBQTtBQUNBO0FBTEE7QUFLQTtBQUNBO0FBQUE7QUFuQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFxQ0E7QUFDQTtBQXRDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUE4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVVBO0FBckJBO0FBQUE7QUFDQTtBQURBO0FBdUJBO0FBV0E7QUFDQTtBQUZBO0FBWUE7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQVNBO0FBdkRBO0FBQUE7QUFDQTtBQURBO0FBZ0VBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBeEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQTlDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBMkhBO0FBTUE7QUFFQTtBQUNBO0FBcElBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW1JQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBeklBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEwSUE7QUFDQTtBQTVJQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBOElBO0FBQ0E7QUFoSkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaUpBO0FBQ0E7QUFuSkE7QUFDQTtBQURBO0FBbUlBO0FBbklBO0FBQUE7QUFDQTtBQURBO0FBMEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBbkxBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFzTEE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQTNMQTtBQUFBO0FBQ0E7QUFEQTtBQStMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFsTkE7QUFDQTtBQW9OQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF4TkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWxFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBREE7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQTlEQTtBQUNBO0FBQ0E7QUErUkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQS9DQTtBQUNBO0FBaURBO0FBQ0E7QUFDQTs7Ozs7QUFsRkE7QUFDQTtBQUNBOzs7QUFrRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFyQ0E7QUE0Q0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXJCQTtBQTdDQTtBQVpBO0FBd0ZBOzs7O0FBN0xBO0FBQ0E7QUErTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBY0E7Ozs7QUFsQkE7QUFDQTtBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBL0NBO0FBQ0E7QUFpREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQTNFQTtBQUNBO0FBR0E7OztBQXlFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUEzQ0E7QUFrREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQTNCQTtBQW5EQTtBQXNGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQXZGQTtBQWlHQTs7OztBQW5MQTtBQUNBO0FBcUxBOzs7Ozs7Ozs7Ozs7OztBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=