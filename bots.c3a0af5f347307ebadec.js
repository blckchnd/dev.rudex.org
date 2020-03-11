(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[26],{

/***/ 2811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2812);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(558);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1818);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1782);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1826);
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
            this._upd(bots);
        }
    }, {
        key: "_upd",
        value: function _upd(bots) {
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                {
                                    style: {
                                        paddingRight: 5,
                                        position: "relative",
                                        top: 9
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
                                    { to: "/help/bots/introduction" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        name: "question-circle",
                                        title: "icons.question_circle",
                                        size: "2x"
                                    })
                                )
                            ),
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

/***/ 2812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2813);
/* harmony import */ var _TrailingStop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2834);
/* harmony import */ var _PercentUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2837);
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2841);
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

/***/ 2813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2814);
/* harmony import */ var components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2831);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(418);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2815);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2818);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(604);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2833);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(732);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(609);
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

                            _context.t0 = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(ticker.latest);
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
                                _this.base.id === balance.asset_id ? acc.base = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(balance.amount).div(Math.pow(10, _this.base.precision)).toNumber() : acc.quote = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(balance.amount).div(Math.pow(10, _this.quote.precision)).toNumber();
                                return acc;
                            };

                            _context.t4 = {};
                            accountBalances = _context.sent.reduce(_context.t3, _context.t4);
                            baseBalance = state.base.balance === "-" ? 0 : state.base.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.base.balance);
                            quoteBalance = state.quote.balance === "-" ? 0 : state.quote.balance === "" ? accountBalances.quote : Math.min(accountBalances.quote, state.quote.balance);
                            baseAmount = state.base.percent.toString() == "true" ? bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(baseBalance).times(state.base.amount).div(100).toNumber() : state.base.amount;
                            quoteAmount = state.quote.percent.toString() == "true" ? bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(quoteBalance).times(state.quote.amount).div(100).toNumber() : state.quote.amount;


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
                            orderAmount = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(buyOrder.for_sale).div(Math.pow(10, _this.base.precision)).toNumber();


                            !["", "-"].includes(state.base.balance) && (state.base.balance = Number(state.base.balance) + orderAmount);

                            // add to sell balance
                            if (state.base.order.amount > orderAmount && !["", "-"].incudes(state.quote.balance)) state.quote.balance = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(state.base.order.amount - orderAmount).div(state.base.order.price).plus(state.quote.balance).toNumber();

                            amount = Math.min(baseBalance, baseAmount);
                            _context.prev = 55;
                            _context.next = 58;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, amount, bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(1).div(buyPrice).toNumber());

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
                                !["", "-"].includes(state.quote.balance) && (state.quote.balance = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(state.base.order.amount).div(state.base.order.price).plus(state.quote.balance).toNumber());

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
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, baseAmount, bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(1).div(buyPrice).toNumber());

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
                            _orderAmount = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(sellOrder.for_sale).div(Math.pow(10, _this.quote.precision)).toNumber();

                            !["", "-"].includes(state.quote.balance) && (state.quote.balance = Number(state.quote.balance) + _orderAmount);

                            // add to buy balance
                            if (state.quote.order.amount > _orderAmount && !["", "-"].includes(state.base.balance)) state.base.balance = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(state.quote.order.amount - _orderAmount).times(state.quote.order.price).plus(state.base.balance).toNumber();

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
                                !["", "-"].includes(state.base.balance) && (state.base.balance = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(state.quote.order.amount).times(state.quote.order.price).plus(state.base.balance).toNumber());
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
                                return _context4.abrupt("return", bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(base.amount).div(Math.pow(10, this.base.precision)).div(bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(quote.amount).div(Math.pow(10, this.quote.precision))));

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
                                basePrice = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(base.amount).div(Math.pow(10, bts.precision)).div(bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(quote.amount).div(Math.pow(10, this.base.precision)));
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

                                quotePrice = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(base.amount).div(Math.pow(10, bts.precision)).div(bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(quote.amount).div(Math.pow(10, this.quote.precision)));
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

                                _context6.t0 = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(this.defaultPrice);
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
                                }, bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(0)).div(this.priceArray.length) : bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(0));

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

/***/ 2814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2812);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2815);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2816);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1824);
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

/***/ 2815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
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

/***/ 2816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLabel", function() { return AssetLabel; });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2817);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2815);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2818);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2722);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2819);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(590);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(592);
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

/***/ 2818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2815);
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

/***/ 2831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2816);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2832);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1824);
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

/***/ 2833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2815);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2818);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(604);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(610);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(609);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(418);
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
                                buyAmount = Math.floor(bignumber_js__WEBPACK_IMPORTED_MODULE_2___default()((typeof buySymbol === "undefined" ? "undefined" : _typeof(buySymbol)) === "object" ? buySymbol.amount : amount).times(Math.pow(10, buyAsset.precision)).toString());
                                sellAmount = Math.floor(((typeof baseSymbol === "undefined" ? "undefined" : _typeof(baseSymbol)) === "object" ? bignumber_js__WEBPACK_IMPORTED_MODULE_2___default()(baseSymbol.amount) : bignumber_js__WEBPACK_IMPORTED_MODULE_2___default()(amount).times(price)).times(Math.pow(10, baseAsset.precision)).toString());

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
                                sellAmount = Math.floor(bignumber_js__WEBPACK_IMPORTED_MODULE_2___default()((typeof sellSymbol === "undefined" ? "undefined" : _typeof(sellSymbol)) === "object" ? sellSymbol.amount : amount).times(Math.pow(10, sellAsset.precision)).toString());
                                buyAmount = Math.floor(((typeof baseSymbol === "undefined" ? "undefined" : _typeof(baseSymbol)) === "object" ? bignumber_js__WEBPACK_IMPORTED_MODULE_2___default()(baseSymbol.amount) : bignumber_js__WEBPACK_IMPORTED_MODULE_2___default()(amount).times(price)).times(Math.pow(10, baseAsset.precision)).toString());

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

/***/ 2834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2835);
/* harmony import */ var components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2836);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(418);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2815);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2818);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(604);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2833);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(732);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(609);
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
                            price = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(ticker.latest);
                            needStoploss = price.times(1 - state.percent / 100);
                            createOrderPrice = price.times(1 - state.percent * 2 / 3 / 100);
                            stoploss = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default()(state.minAmount).div(state.amount);


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

/***/ 2835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2812);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2815);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2816);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1824);
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

/***/ 2836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2816);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2832);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1824);
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

/***/ 2837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2838);
/* harmony import */ var components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2840);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2833);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(418);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2815);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2818);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(604);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(732);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(609);
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
                                _this.base.id === balance.asset_id ? acc.base = bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(balance.amount).div(Math.pow(10, _this.base.precision)).toNumber() : acc.quote = bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(balance.amount).div(Math.pow(10, _this.quote.precision)).toNumber();
                                return acc;
                            };

                            _context2.t1 = {};
                            accountBalances = _context2.sent.reduce(_context2.t0, _context2.t1);
                            balance = state.balance === "-" ? 0 : state.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.balance);
                            amount = state.percentAmount.toString() == "true" ? bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(balance).times(state.amount).div(100).toNumber() : state.amount;
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
                            _context2.t4 = bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a;
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
                                                        amountToMarket = Math.floor(bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(_this.base.options.market_fee_percent).div(100 * 100).times(order.base).times(Math.pow(10, _this.base.precision)).toString());

                                                        state.balance = Number(state.balance) + Number(order.base) - (amountToMarket !== 0 ? bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(amountToMarket).div(Math.pow(10, _this.base.precision)).toNumber() : _this.base.options.market_fee_percent !== 0 ? Math.pow(10, -_this.base.precision) : 0);
                                                    }
                                                    _context.next = 13;
                                                    break;

                                                case 5:
                                                    forQuoteFee = _this.quote.symbol === "BTS" ? (isNaN(order.fee) ? orderFee : order.fee) + orderFee : 0, forBaseFee = _this.base.symbol === "BTS" ? (isNaN(order.fee) ? orderFee : order.fee) + orderFee : 0, quoteAssetAmount = {
                                                        asset_id: _this.quote.id,
                                                        amount: Math.min(Number(accountBalances.quote), Number(order.quote)) - forQuoteFee
                                                    }, percentOnMarket = bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(_this.base.options.market_fee_percent).div(100 * 100), baseAssetAmount = {
                                                        asset_id: _this.base.id,
                                                        amount: bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(order.base).times(1 + Number(state.spread) / 100 + percentOnMarket.toNumber()).plus(forBaseFee)
                                                    };


                                                    log("buy " + _this.base.symbol + ": amount=" + baseAssetAmount.amount.toNumber() + " price=" + bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(quoteAssetAmount.amount).div(baseAssetAmount.amount).toNumber() + " " + _this.base.symbol + "/" + _this.quote.symbol);
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
                            quoteAmount = bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(0), baseAmount = bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(0);
                            i = 0;

                        case 32:
                            if (!(i < orderBook.asks.length)) {
                                _context2.next = 55;
                                break;
                            }

                            ask = orderBook.asks[i];
                            quote = bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(ask.base);
                            base = bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(ask.quote);
                            diffBase = bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(amount).minus(baseAmount);

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
                            quoteAmount = quoteAmount.plus(bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(ask.price).times(diffBase));
                            return _context2.abrupt("break", 55);

                        case 52:
                            i++;
                            _context2.next = 32;
                            break;

                        case 55:
                            price = quoteAmount.div(baseAmount), lowPrice = null;


                            state.orders.forEach(function (order) {
                                var orderPrice = bignumber_js__WEBPACK_IMPORTED_MODULE_6___default()(order.quote).div(order.base);
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

/***/ 2838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2812);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2816);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2815);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2839);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1824);
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

/***/ 2839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
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

/***/ 2840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2816);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2832);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2839);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1824);
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

/***/ 2841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(735);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90cy5jM2EwYWY1ZjM0NzMwN2ViYWRlYy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL0JvdHMuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9TcHJlYWRUcmFkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGUuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvYXBpcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0Fzc2V0U2VsZWN0b3IuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvYXNzZXRzLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9UcmFpbGluZ1N0b3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL1BlcmNlbnRVcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvQ3JlYXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvU3RhdGUuanN4Iiwid2VicGFjazovLy9hcHAvc3RvcmVzL0JvdHNTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge1JlZGlyZWN0LCBMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5cbmNsYXNzIEJvdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0cmF0ZWdpZXMgPSBCb3RNYW5hZ2VyLnN0cmF0ZWdpZXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RTdHJhdGVneTogT2JqZWN0LmtleXModGhpcy5zdHJhdGVnaWVzKVswXSxcbiAgICAgICAgICAgIGJvdHM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0Qm90OiAwLFxuICAgICAgICAgICAgZW5hYmxlQ3JlYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGJvdFJ1bjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IGJvdHMgPSBCb3RNYW5hZ2VyLmdldEJvdHModGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCk7XG4gICAgICAgIHRoaXMuX3VwZChib3RzKTtcbiAgICB9XG5cbiAgICBfdXBkKGJvdHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBib3RzLFxuICAgICAgICAgICAgc2VsZWN0Qm90OiAwLFxuICAgICAgICAgICAgYm90UnVuOiBib3RzWzBdID8gYm90c1swXS5ydW4gOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VTdHJhdGVneSA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0U3RyYXRlZ3k6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDaGFuZ2VCb3QgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBzZWxlY3RCb3QgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RCb3QsXG4gICAgICAgICAgICBib3RSdW46IHRoaXMuc3RhdGUuYm90c1tzZWxlY3RCb3RdLnJ1blxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ3JlYXRlID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgYm90cyA9IHRoaXMuc3RhdGUuYm90cztcblxuICAgICAgICBib3RzLnB1c2goXG4gICAgICAgICAgICBCb3RNYW5hZ2VyLmNyZWF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5LFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudEFjY291bnQsXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtLnN0YXRlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvdHN9KTtcblxuICAgICAgICBpZiAodGhpcy5jcmVhdGVGb3JtLnZhbGlkYXRlKVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtLnZhbGlkYXRlKFwibmFtZVwiLCB0aGlzLmNyZWF0ZUZvcm0uc3RhdGUubmFtZSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUVuYWJsZUNyZWF0ZSA9IGVuYWJsZUNyZWF0ZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZUNyZWF0ZSAhPSBlbmFibGVDcmVhdGUpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVDcmVhdGV9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlU3RhcnRCb3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBib3QgPSB0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdO1xuXG4gICAgICAgIGF3YWl0IGJvdC5zdGFydCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtib3RSdW46IGJvdC5ydW59KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlU3RvcEJvdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGJvdCA9IHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF07XG5cbiAgICAgICAgYXdhaXQgYm90LnN0b3AoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym90UnVuOiBib3QucnVufSk7XG4gICAgfTtcblxuICAgIGhhbmRsZURlbGV0ZUJvdCA9ICgpID0+IHtcbiAgICAgICAgQm90TWFuYWdlci5kZWxldGUodGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBib3RzOiBCb3RNYW5hZ2VyLmdldEJvdHModGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCksXG4gICAgICAgICAgICBzZWxlY3RCb3Q6IDBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInN0YXJ0IHJlbmRlciBtYWluIHBhZ2VcIiwgdGhpcy5wcm9wcylcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89e1wiL1wifSAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBDcmVhdGVGb3JtID0gdGhpcy5zdHJhdGVnaWVzW3RoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3ldLmNyZWF0ZTtcblxuICAgICAgICBsZXQgYm90ID0gdGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XSB8fCBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwLCBvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLTEyIG1lZGl1bS02IGxhcmdlLTUgbGFyZ2Utb2Zmc2V0LTEgZnVsbC13aWR0aC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDMwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hlbHAvYm90cy9pbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy5xdWVzdGlvbl9jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIyeFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnNlbGVjdF9zdHJhdGVneVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIGJ0cy1zZWxlY3QgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVN0cmF0ZWd5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5zdHJhdGVnaWVzKS5tYXAobmFtZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e25hbWV9IHZhbHVlPXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtmb3JtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSA9IGZvcm07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUNyZWF0ZT17dGhpcy5oYW5kbGVFbmFibGVDcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmVuYWJsZUNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmNyZWF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAzMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJvdF9zdGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIGJ0cy1zZWxlY3RcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RCb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlQm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJvdHMubWFwKChib3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtib3QubmFtZX0gdmFsdWU9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtib3QubmFtZX0gKCR7Ym90LmNvbnN0cnVjdG9yLm5hbWV9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym90ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJvdC5zdGF0ZSBrZXk9e2JvdC5uYW1lfSBib3Q9e2JvdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3RhcnRCb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuYm90UnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnN0YXJ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdG9wQm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5ib3RSdW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc3RvcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlQm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmJvdFJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5kZWxldGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc2VsZWN0X2JvdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIEJvdHMsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OlxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCB8fFxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFNwcmVhZFRyYWRlIGZyb20gXCIuL1NwcmVhZFRyYWRlXCI7XHJcbmltcG9ydCBUcmFpbGluZ1N0b3AgZnJvbSBcIi4vVHJhaWxpbmdTdG9wXCI7XHJcbmltcG9ydCBQZXJjZW50VXAgZnJvbSBcIi4vUGVyY2VudFVwXCI7XHJcbi8vaW1wb3J0IFJlbGF0aXZlT3JkZXJzIGZyb20gXCIuL1JlbGF0aXZlT3JkZXJzXCI7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gXCJzdG9yZXMvQm90c1N0b3JhZ2VcIjtcclxuXHJcbnZhciBib3RzID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzdHJhdGVnaWVzOiB7XHJcbiAgICAgICAgU3ByZWFkVHJhZGUsXHJcbiAgICAgICAgVHJhaWxpbmdTdG9wLFxyXG4gICAgICAgIC8vUmVsYXRpdmVPcmRlcnMsXHJcbiAgICAgICAgUGVyY2VudFVwXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZShzdHJhdGVneSwgYWNjb3VudCwgaW5pdERhdGEpIHtcclxuICAgICAgICBsZXQgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske2luaXREYXRhLm5hbWV9XWApO1xyXG5cclxuICAgICAgICBsZXQgYm90ID0gbmV3IHRoaXMuc3RyYXRlZ2llc1tzdHJhdGVneV0oYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpO1xyXG4gICAgICAgIGJvdHNbYF9fYm90c19fJHtzdG9yYWdlLm5hbWV9YF0gPSBib3Q7XHJcblxyXG4gICAgICAgIHJldHVybiBib3Q7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZShib3QpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IGBfX2JvdHNfXyR7Ym90LnN0b3JhZ2UubmFtZX1gO1xyXG5cclxuICAgICAgICBib3RzW25hbWVdLmRlbGV0ZSgpO1xyXG4gICAgICAgIGRlbGV0ZSBib3RzW25hbWVdO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRCb3RzKGFjY291bnQpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0Qm90c1wiLCBPYmplY3Qua2V5cyhib3RzKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuZ2V0QWNjb3VudEJvdChhY2NvdW50KVxyXG4gICAgICAgICAgICAubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm90c1trZXldKSByZXR1cm4gYm90c1trZXldO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBbc3RyYXRlZ3ksIG5hbWVdID0ga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15fX2JvdHNfXyguKyk6OihcXHcrKVxcWyhcXHcrKVxcXS8sIFwiJDIsJDNcIilcclxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIsXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghc3RyYXRlZ3kgfHwgIW5hbWUpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoYCR7YWNjb3VudH06OiR7c3RyYXRlZ3l9WyR7bmFtZX1dYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJvdCA9IG5ldyB0aGlzLnN0cmF0ZWdpZXNbc3RyYXRlZ3ldKGFjY291bnQsIHN0b3JhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYm90c1trZXldID0gYm90O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvdDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbHRlcihlbCA9PiBlbCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhc0JvdChhY2NvdW50LCBzdHJhdGVneSwgbmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgbmFtZSBzdGF0ZWd5XCIsIGFjY291bnQsIHN0cmF0ZWd5LCBuYW1lKTtcclxuICAgICAgICByZXR1cm4gU3RvcmFnZS5oYXMoYCR7YWNjb3VudH06OiR7c3RyYXRlZ3l9WyR7bmFtZX1dYCk7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGVcIjtcclxuaW1wb3J0IFN0YXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvU3RhdGVcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcclxuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XHJcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSBcImJpZ251bWJlci5qc1wiO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwibGliL2JvdHMvYWNjb3VudFwiO1xyXG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xyXG5pbXBvcnQgV2FsbGV0VW5sb2NrQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRVbmxvY2tBY3Rpb25zXCI7XHJcblxyXG5jbGFzcyBTcHJlYWRUcmFkZSB7XHJcbiAgICBzdGF0aWMgY3JlYXRlID0gQ3JlYXRlO1xyXG4gICAgc3RhdGUgPSBTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG5ldyBBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblxyXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xyXG4gICAgICAgICAgICBzdG9yYWdlLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogaW5pdERhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGJhc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldDogaW5pdERhdGEuYmFzZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IGluaXREYXRhLmJhc2VCYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcmVhZDogaW5pdERhdGEuYmFzZVNwcmVhZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLmJhc2VBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudDogaW5pdERhdGEucGVyY2VudEJhc2VBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZCwgcHJpY2UgYW5kIGFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBxdW90ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBpbml0RGF0YS5xdW90ZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IGluaXREYXRhLnF1b3RlQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBzcHJlYWQ6IGluaXREYXRhLnF1b3RlU3ByZWFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogaW5pdERhdGEucXVvdGVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudDogaW5pdERhdGEucGVyY2VudFF1b3RlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWQsIHByaWNlIGFuZCBhbW91bnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnJvbU1hcmtldDogaW5pdERhdGEuZnJvbU1hcmtldCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRQcmljZTogaW5pdERhdGEuZGVmYXVsdFByaWNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gc3RvcmFnZS5yZWFkKCkubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xyXG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFzZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5iYXNlLmFzc2V0XTtcclxuICAgICAgICB0aGlzLnF1b3RlID0gYXdhaXQgQXNzZXRzW3N0YXRlLnF1b3RlLmFzc2V0XTtcclxuXHJcbiAgICAgICAgaWYgKFt0aGlzLmJhc2UuaXNzdWVyLCB0aGlzLnF1b3RlLmlzc3Vlcl0uaW5jbHVkZXMoXCIxLjIuMFwiKSkge1xyXG4gICAgICAgICAgICBpZiAoW3RoaXMuYmFzZS5pZCwgdGhpcy5xdW90ZS5pZF0uaW5jbHVkZXMoXCIxLjMuMFwiKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0Q29yZUZlZWQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYmFzZS5pc3N1ZXIgPT0gdGhpcy5xdW90ZS5pc3N1ZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZlZWQgPSB0aGlzLmdldFNtYXJ0RmVlZDtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmdldEZlZWQgPSB0aGlzLmdldFVJQUZlZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRVSUFGZWVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XHJcbiAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcclxuICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0b3AoKSB7XHJcbiAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcclxuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucXVldWVFdmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBxdWV1ZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gdGhpcy5xdWV1ZUV2ZW50c1xyXG4gICAgICAgICAgICAudGhlbih0aGlzLmNoZWNrT3JkZXJzKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3IuYmluZCh0aGlzLmxvZ2dlcikpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja09yZGVycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzdGF0ZVwiLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgIGxldCB0aWNrZXIgPSBhd2FpdCBBcGlzLmRiLmdldF90aWNrZXIoXHJcbiAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXHJcbiAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJpY2UgPSBzdGF0ZS5kZWZhdWx0UHJpY2U7XHJcblxyXG4gICAgICAgIGxldCBmZWVkUHJpY2UgPSBzdGF0ZS5mcm9tTWFya2V0XHJcbiAgICAgICAgICAgICAgICA/IEJpZ051bWJlcih0aWNrZXIubGF0ZXN0KVxyXG4gICAgICAgICAgICAgICAgOiBhd2FpdCB0aGlzLmdldEZlZWQoKSxcclxuICAgICAgICAgICAgYnV5UHJpY2UgPSBmZWVkUHJpY2UudGltZXMoMSAtIHN0YXRlLmJhc2Uuc3ByZWFkIC8gMTAwKS50b051bWJlcigpLFxyXG4gICAgICAgICAgICBzZWxsUHJpY2UgPSBmZWVkUHJpY2VcclxuICAgICAgICAgICAgICAgIC50aW1lcygxICsgc3RhdGUucXVvdGUuc3ByZWFkIC8gMTAwKVxyXG4gICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XHJcblxyXG4gICAgICAgIGZlZWRQcmljZSA9IGZlZWRQcmljZS50b051bWJlcigpO1xyXG5cclxuICAgICAgICBpZiAoZmVlZFByaWNlID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGJ1eU9yZGVyID0gc3RhdGUuYmFzZS5vcmRlci5pZFxyXG4gICAgICAgICAgICAgICAgPyAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbc3RhdGUuYmFzZS5vcmRlci5pZF0pKVswXVxyXG4gICAgICAgICAgICAgICAgOiBzdGF0ZS5iYXNlLm9yZGVyLmlkLFxyXG4gICAgICAgICAgICBzZWxsT3JkZXIgPSBzdGF0ZS5xdW90ZS5vcmRlci5pZFxyXG4gICAgICAgICAgICAgICAgPyAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbc3RhdGUucXVvdGUub3JkZXIuaWRdKSlbMF1cclxuICAgICAgICAgICAgICAgIDogc3RhdGUucXVvdGUub3JkZXIuaWQsXHJcbiAgICAgICAgICAgIGFjY291bnRCYWxhbmNlcyA9IChhd2FpdCB0aGlzLmFjY291bnQuYmFsYW5jZXMoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLmlkXHJcbiAgICAgICAgICAgICkpLnJlZHVjZSgoYWNjLCBiYWxhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuaWQgPT09IGJhbGFuY2UuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICAgICA/IChhY2MuYmFzZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoYWNjLnF1b3RlID0gQmlnTnVtYmVyKGJhbGFuY2UuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSwge30pLFxyXG4gICAgICAgICAgICBiYXNlQmFsYW5jZSA9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLmJhbGFuY2UgPT09IFwiLVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5iYXNlLmJhbGFuY2UgPT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50QmFsYW5jZXMuYmFzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGgubWluKGFjY291bnRCYWxhbmNlcy5iYXNlLCBzdGF0ZS5iYXNlLmJhbGFuY2UpLFxyXG4gICAgICAgICAgICBxdW90ZUJhbGFuY2UgPVxyXG4gICAgICAgICAgICAgICAgc3RhdGUucXVvdGUuYmFsYW5jZSA9PT0gXCItXCJcclxuICAgICAgICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLnF1b3RlLmJhbGFuY2UgPT09IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50QmFsYW5jZXMucXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihhY2NvdW50QmFsYW5jZXMucXVvdGUsIHN0YXRlLnF1b3RlLmJhbGFuY2UpLFxyXG4gICAgICAgICAgICBiYXNlQW1vdW50ID1cclxuICAgICAgICAgICAgICAgIHN0YXRlLmJhc2UucGVyY2VudC50b1N0cmluZygpID09IFwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYmFzZUJhbGFuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHN0YXRlLmJhc2UuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5iYXNlLmFtb3VudCxcclxuICAgICAgICAgICAgcXVvdGVBbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgc3RhdGUucXVvdGUucGVyY2VudC50b1N0cmluZygpID09IFwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIocXVvdGVCYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5xdW90ZS5hbW91bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLnF1b3RlLmFtb3VudDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmljZXNcIiwgYnV5UHJpY2UsIGZlZWRQcmljZSwgc2VsbFByaWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9yZGVyc1wiLCBidXlPcmRlciwgc2VsbE9yZGVyKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1eU9yZGVyKSB7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgUHJpY2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgY2hlY2sgYnV5T3JkZXI6IG1vdmU9JHtNYXRoLmFicyhcclxuICAgICAgICAgICAgICAgICAgICBidXlQcmljZSAtIHN0YXRlLmJhc2Uub3JkZXIucHJpY2VcclxuICAgICAgICAgICAgICAgICkgPlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGZlZWRQcmljZSAtIGJ1eVByaWNlKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJ9LCBmaWxsPSR7dGlja2VyLmxvd2VzdF9hc2sgPD0gYnV5UHJpY2V9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhidXlQcmljZSAtIHN0YXRlLmJhc2Uub3JkZXIucHJpY2UpID5cclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBidXlQcmljZSkgLyAyICYmXHJcbiAgICAgICAgICAgICAgICB0aWNrZXIubG93ZXN0X2FzayA+IGJ1eVByaWNlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvcmRlclxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgYG1vdmUgYnV5IG9yZGVyOiAke2J1eVByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuY2FuY2VsT3JkZXIoc3RhdGUuYmFzZS5vcmRlci5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYW1vdW50IGluIG9yZGVyXHJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXJBbW91bnQgPSBCaWdOdW1iZXIoYnV5T3JkZXIuZm9yX3NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAoc3RhdGUuYmFzZS5iYWxhbmNlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHN0YXRlLmJhc2UuYmFsYW5jZSkgKyBvcmRlckFtb3VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIHRvIHNlbGwgYmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50ID4gb3JkZXJBbW91bnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmN1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUuYmFsYW5jZSA9IEJpZ051bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5hbW91bnQgLSBvcmRlckFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gTWF0aC5taW4oYmFzZUJhbGFuY2UsIGJhc2VBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcigxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihidXlQcmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYnV5UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUuYmFzZS5iYWxhbmNlIC09IGFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKC9eMS43LlxcZCokLy50ZXN0KHN0YXRlLmJhc2Uub3JkZXIuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmaWxsIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlID0gQmlnTnVtYmVyKHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2KHN0YXRlLmJhc2Uub3JkZXIucHJpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGBjcmVhdGUgYnV5T3JkZXI6IGJhbGFuY2U9JHtiYXNlQmFsYW5jZSA+PVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VBbW91bnR9LCBmaWxsPSR7dGlja2VyLmxvd2VzdF9hc2sgPD0gYnV5UHJpY2V9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoYmFzZUJhbGFuY2UgPj0gYmFzZUFtb3VudCAmJiB0aWNrZXIubG93ZXN0X2FzayA+IGJ1eVByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2J1eVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcclxuICAgICAgICAgICAgICAgICAgICBgYnV5OiAke2J1eVByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke3RoaXMuYmFzZS5zeW1ib2x9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KGJ1eVByaWNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBidXlQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBiYXNlQW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgLT0gYmFzZUFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGxPcmRlcikge1xyXG4gICAgICAgICAgICAvL2NoZWNrIFByaWNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYGNoZWNrIHNlbGxPcmRlcjogbW92ZT0ke01hdGguYWJzKFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZSAtIHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlXHJcbiAgICAgICAgICAgICAgICApID5cclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBzZWxsUHJpY2UpIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgMn0sIGZpbGw9JHt0aWNrZXIuaGlnaGVzdF9iaWQgPj0gc2VsbFByaWNlfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoc2VsbFByaWNlIC0gc3RhdGUucXVvdGUub3JkZXIucHJpY2UpID5cclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBzZWxsUHJpY2UpIC8gMiAmJlxyXG4gICAgICAgICAgICAgICAgdGlja2VyLmhpZ2hlc3RfYmlkIDwgc2VsbFByaWNlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvcmRlclxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgYG1vdmUgc2VsbCBvcmRlcjogJHtzZWxsUHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5jYW5jZWxPcmRlcihzdGF0ZS5xdW90ZS5vcmRlci5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYW1vdW50IGluIG9yZGVyXHJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXJBbW91bnQgPSBCaWdOdW1iZXIoc2VsbE9yZGVyLmZvcl9zYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XHJcbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHN0YXRlLnF1b3RlLmJhbGFuY2UpICsgb3JkZXJBbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFkZCB0byBidXkgYmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmFtb3VudCA+IG9yZGVyQW1vdW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2UuYmFsYW5jZSA9IEJpZ051bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuYW1vdW50IC0gb3JkZXJBbW91bnRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5xdW90ZS5vcmRlci5wcmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gTWF0aC5taW4ocXVvdGVCYWxhbmNlLCBxdW90ZUFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHNlbGxQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSAtPSBhbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuaWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoL14xLjcuXFxkKiQvLnRlc3Qoc3RhdGUucXVvdGUub3JkZXIuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmaWxsIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSA9IEJpZ051bWJlcihzdGF0ZS5xdW90ZS5vcmRlci5hbW91bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5xdW90ZS5vcmRlci5wcmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgY3JlYXRlIHNlbGxPcmRlcjogYmFsYW5jZT0ke3F1b3RlQmFsYW5jZSA+PVxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50fSwgZmlsbD0ke3RpY2tlci5oaWdoZXN0X2JpZCA+PSBzZWxsUHJpY2V9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAocXVvdGVCYWxhbmNlID49IHF1b3RlQW1vdW50ICYmIHRpY2tlci5oaWdoZXN0X2JpZCA8IHNlbGxQcmljZSkge1xyXG4gICAgICAgICAgICAgICAgLy9idXlcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgYHNlbGw6ICR7c2VsbFByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxsUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogc2VsbFByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHF1b3RlQW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSAtPSBxdW90ZUFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLndyaXRlKHN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgZ2V0Q29yZUZlZWQoKSB7XHJcbiAgICAgICAgbGV0IHJhdGU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJhc2UuaWQgPT0gXCIxLjMuMFwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucXVvdGUudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHJhdGUgPSB0aGlzLnF1b3RlLm9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYmFzZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgcmF0ZSA9IHRoaXMuYmFzZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBbYmFzZSwgcXVvdGVdID1cclxuICAgICAgICAgICAgcmF0ZS5iYXNlLmFzc2V0X2lkID09IHRoaXMuYmFzZS5pZFxyXG4gICAgICAgICAgICAgICAgPyBbcmF0ZS5iYXNlLCByYXRlLnF1b3RlXVxyXG4gICAgICAgICAgICAgICAgOiBbcmF0ZS5xdW90ZSwgcmF0ZS5iYXNlXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEJpZ051bWJlcihiYXNlLmFtb3VudClcclxuICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQpLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldFNtYXJ0RmVlZCgpIHtcclxuICAgICAgICBsZXQgYnRzID0gYXdhaXQgQXNzZXRzW1wiYnRzXCJdO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYmFzZS51cGRhdGUoKTtcclxuICAgICAgICBsZXQgcmF0ZSA9IHRoaXMuYmFzZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcclxuICAgICAgICBsZXQgW2Jhc2UsIHF1b3RlXSA9XHJcbiAgICAgICAgICAgIHJhdGUuYmFzZS5hc3NldF9pZCA9PSBcIjEuMy4wXCJcclxuICAgICAgICAgICAgICAgID8gW3JhdGUuYmFzZSwgcmF0ZS5xdW90ZV1cclxuICAgICAgICAgICAgICAgIDogW3JhdGUucXVvdGUsIHJhdGUuYmFzZV07XHJcblxyXG4gICAgICAgIGxldCBiYXNlUHJpY2UgPSBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXHJcbiAgICAgICAgICAgIC5kaXYoMTAgKiogYnRzLnByZWNpc2lvbilcclxuICAgICAgICAgICAgLmRpdihCaWdOdW1iZXIocXVvdGUuYW1vdW50KS5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbikpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLnF1b3RlLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJhdGUgPSB0aGlzLnF1b3RlLm9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlO1xyXG4gICAgICAgIGlmIChyYXRlLmJhc2UuYXNzZXRfaWQgPT0gXCIxLjMuMFwiKSB7XHJcbiAgICAgICAgICAgIGJhc2UgPSByYXRlLmJhc2U7XHJcbiAgICAgICAgICAgIHF1b3RlID0gcmF0ZS5xdW90ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYXNlID0gcmF0ZS5xdW90ZTtcclxuICAgICAgICAgICAgcXVvdGUgPSByYXRlLmJhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcXVvdGVQcmljZSA9IEJpZ051bWJlcihiYXNlLmFtb3VudClcclxuICAgICAgICAgICAgLmRpdigxMCAqKiBidHMucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQpLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbikpO1xyXG5cclxuICAgICAgICByZXR1cm4gcXVvdGVQcmljZS5kaXYoYmFzZVByaWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRVSUFGZWVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmljZVxyXG4gICAgICAgICAgICA/IEJpZ051bWJlcih0aGlzLmRlZmF1bHRQcmljZSlcclxuICAgICAgICAgICAgOiBhd2FpdCB0aGlzLmJpbmFuY2VQcmljZSh0aGlzLmJhc2Uuc3ltYm9sLCB0aGlzLnF1b3RlLnN5bWJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYmluYW5jZVByaWNlKGJhc2UsIHF1b3RlKSB7XHJcbiAgICAgICAgbGV0IGFzc2V0ID0gYCR7cXVvdGUuc3BsaXQoXCIuXCIpLnNsaWNlKC0xKVswXX0ke1xyXG4gICAgICAgICAgICBiYXNlLnNwbGl0KFwiLlwiKS5zbGljZSgtMSlbMF1cclxuICAgICAgICB9YFxyXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAucmVwbGFjZShcIlVTRFwiLCBcIlVTRFRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGdldCBhc3NldDogJHthc3NldH1gKTtcclxuICAgICAgICB0aGlzLnByaWNlQXJyYXkgPSB0aGlzLnByaWNlQXJyYXkgfHwgW107XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vYXNzZXQgPSBcIkJUQ1VTRFRcIlxyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgICAgIGBodHRwczovL2FwaS5iaW5hbmNlLmNvbS9hcGkvdjEvdHJhZGVzP3N5bWJvbD0ke2Fzc2V0fSZsaW1pdD0xYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgdGhpcy5wcmljZUFycmF5LnB1c2goZGF0YVswXS5wcmljZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5wcmljZUFycmF5LnB1c2goMTApXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXHJcbiAgICAgICAgICAgICAgICBgRXJyb3IgQmluYW5jZSByZXF1ZXN0OiAke2Fzc2V0fSwgZXJyb3I6ICR7ZXJyb3J9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJpY2VBcnJheS5sZW5ndGggPiAxMCkgdGhpcy5wcmljZUFycmF5LnNoaWZ0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlQXJyYXkubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICA/IHRoaXMucHJpY2VBcnJheVxyXG4gICAgICAgICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBhLnBsdXMoYiksIEJpZ051bWJlcigwKSlcclxuICAgICAgICAgICAgICAgICAgLmRpdih0aGlzLnByaWNlQXJyYXkubGVuZ3RoKVxyXG4gICAgICAgICAgICA6IEJpZ051bWJlcigwKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ByZWFkVHJhZGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XHJcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XHJcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IEFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBDcmVhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBiYXNlQXNzZXQ6IFwiUlVERVguVVNEVFwiLFxyXG4gICAgICAgIHF1b3RlQXNzZXQ6IFwiUlVERVguQlRDXCIsXHJcbiAgICAgICAgYmFzZUFtb3VudDogMTAsXHJcbiAgICAgICAgcXVvdGVBbW91bnQ6IDAuMDEsXHJcbiAgICAgICAgYmFzZVNwcmVhZDogMTAsXHJcbiAgICAgICAgcXVvdGVTcHJlYWQ6IDEwLFxyXG4gICAgICAgIGJhc2VCYWxhbmNlOiAxMDAsXHJcbiAgICAgICAgcXVvdGVCYWxhbmNlOiAwLjEsXHJcbiAgICAgICAgcGVyY2VudEJhc2VBbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgIHBlcmNlbnRRdW90ZUFtb3VudDogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRhdGU6IFtcIm5hbWVcIl1cclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlID0gZGVib3VuY2UodGhpcy5hc3NldFZhbGlkYXRlLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzc2V0VmFsaWRhdGUgPSBhc3luYyBuYW1lID0+IHtcclxuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnN0YXRlW25hbWVdO1xyXG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcclxuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xyXG5cclxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZSA9IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgdmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gZXZlbnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChbXCJiYXNlQXNzZXRcIiwgXCJxdW90ZUFzc2V0XCJdLmluY2x1ZGVzKG5hbWUpKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhbGlkYXRlID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIS9eXFx3KyQvLnRlc3QodmFsdWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VBc3NldFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBc3NldFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQmFsYW5jZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVCYWxhbmNlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwiLVwiICYmIGlzTmFOKCt2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQW1vdW50XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUFtb3VudFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYmFzZVNwcmVhZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVTcHJlYWRcIjpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCBpc05hTigrdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVmYXVsdFByaWNlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKCt2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsaWRhdGUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VCYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VCYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3ZhbHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlU3ByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlU3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiYmFzZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVBc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJxdW90ZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV92YWx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlU3ByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlU3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmRlZmF1bHRfcHJpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVmYXVsdFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZWZhdWx0UHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImRlZmF1bHRQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJkZWZhdWx0UHJpY2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZyb21NYXJrZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mcm9tTWFya2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5nZXRfcHJpY2VfZnJvbV9tYXJrZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iLCJpbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGI6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBjYWxsIEFwaXMuZGIuJHttZXRob2R9KCR7Wy4uLmFyZ3VtZW50c119KWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5kYl9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIGhpc3Rvcnk6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAuaGlzdG9yeV9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIG5ldHdvcms6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAubmV0d29ya19hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIGNyeXB0bzogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5jcnlwdG9fYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMobWV0aG9kLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSksXG5cbiAgICBvcmRlcnM6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAub3JkZXJzX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzXCI7XHJcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XHJcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xyXG5pbXBvcnQgQXNzZXRJbWFnZSBmcm9tIFwiLi4vLi4vVXRpbGl0eS9Bc3NldEltYWdlXCI7XHJcbmltcG9ydCBBc3luY1NlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0L2xpYi9Bc3luY1wiO1xyXG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCB7Z2V0TXlNYXJrZXRzUXVvdGVzLCBnZXRBc3NldEhpZGVOYW1lc3BhY2VzfSBmcm9tIFwiYnJhbmRpbmdcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFzc2V0TGFiZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbmFtZTogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBoaWRlUHJlZml4ID0gbmFtZSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IG5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGlmIChnZXRBc3NldEhpZGVOYW1lc3BhY2VzKCkuaW5jbHVkZXMoYCR7YXJyWzBdfS5gKSkgYXJyLnNoaWZ0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcnIuam9pbihcIi5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldEFzc2V0TmFtZSh0aGlzLnByb3BzLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzZXROYW1lKG5leHRQcm9wcy5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBc3NldE5hbWUgPSBhc3luYyBuYW1lID0+IHtcclxuICAgICAgICBsZXQgYXNzZXQgPSBhd2FpdCBBc3NldHNbbmFtZV07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBhc3NldC5iaXRhc3NldF9kYXRhX2lkID8gYGJpdCR7bmFtZX1gIDogbmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5oaWRlUHJlZml4KHRoaXMuc3RhdGUubmFtZSB8fCB0aGlzLnByb3BzLm5hbWUpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgb3B0aW9ucyA9IGdldE15TWFya2V0c1F1b3RlcygpLm1hcChuYW1lID0+ICh7XHJcbiAgICB2YWx1ZTogbmFtZSxcclxuICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXtuYW1lfSAvPlxyXG59KSk7XHJcblxyXG5jbGFzcyBBc3NldFNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvbWlzZU9wdGlvbnMgPSBkZWJvdW5jZSh0aGlzLnByb21pc2VPcHRpb25zLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlID0gb3B0aW9uID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2hhbmdlXCIsIG9wdGlvbik7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XHJcbiAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbiA/IG9wdGlvbi52YWx1ZSA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm9taXNlT3B0aW9ucyA9IGFzeW5jIGlucHV0VmFsdWUgPT4ge1xyXG4gICAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBvcHRpb25zLmZpbHRlcihpID0+IGkudmFsdWUgPT0gaW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwICYmIGlucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IGFzc2V0ID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoaW5wdXRWYWx1ZSwgMSkpWzBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFzc2V0ICYmICFvcHRpb25zLmZpbmQoaSA9PiBpLnZhbHVlID09IGFzc2V0LnN5bWJvbCkpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFzc2V0LnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17YXNzZXQuc3ltYm9sfSAvPlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7b3B0aW9uc307XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5wcm9wcy52YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX0+XHJcbiAgICAgICAgICAgICAgICA8QXN5bmNTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e3RoaXMucHJvbWlzZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUHJvbXB0VGV4dD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHMuYXNzZXRfc2VsZWN0b3Iud2FpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHMuYXNzZXRfc2VsZWN0b3IucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc3NldFNlbGVjdG9yO1xyXG4iLCJpbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuXG5jbGFzcyBBc3NldCB7XG4gICAgc3RhdGljIGdldChfLCBuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzW25hbWVdKSByZXR1cm4gdGhpc1tuYW1lXTtcblxuICAgICAgICByZXR1cm4gL14xXFwuM1xcLlxcZCskLy50ZXN0KG5hbWUpIHx8ICFpc05hTihuYW1lKVxuICAgICAgICAgICAgPyB0aGlzLmlkKG5hbWUpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0QXNzZXQobmFtZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEFzc2V0KF9zeW1ib2wpIHtcbiAgICAgICAgbGV0IHN5bWJvbCA9IF9zeW1ib2wudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubWFwIHx8IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLm1hcFtzeW1ib2xdKSByZXR1cm4gdGhpcy5tYXBbc3ltYm9sXTtcblxuICAgICAgICBsZXQgb2JqID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoc3ltYm9sLCAxKSlbMF07XG5cbiAgICAgICAgaWYgKCFvYmogfHwgb2JqLnN5bWJvbCAhPT0gc3ltYm9sKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBOb3QgZm91bmQgYXNzZXQgJHtzeW1ib2x9ISBCbG9ja2NoYWluIHJldHVybiAke1xuICAgICAgICAgICAgICAgICAgICBvYmogPyBvYmouc3ltYm9sIDogb2JqXG4gICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5tYXBbc3ltYm9sXSA9IG5ldyB0aGlzKG9iaik7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcFtzeW1ib2xdO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBpZChpZCkge1xuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubWFwIHx8IHt9O1xuICAgICAgICBsZXQgYXNzZXQgPSBPYmplY3Qua2V5cyh0aGlzLm1hcCkuZmluZChcbiAgICAgICAgICAgIHN5bWJvbCA9PiB0aGlzLm1hcFtzeW1ib2xdLmlkID09IGlkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGFzc2V0KSByZXR1cm4gdGhpcy5tYXBbYXNzZXRdO1xuXG4gICAgICAgIGFzc2V0ID0gKGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhbaWRdKSlbMF07XG5cbiAgICAgICAgaWYgKCFhc3NldCkgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgYXNzZXQgYnkgaWQgJHtpZH0hYCk7XG5cbiAgICAgICAgdGhpcy5tYXBbYXNzZXQuc3ltYm9sXSA9IG5ldyB0aGlzKGFzc2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwW2Fzc2V0LnN5bWJvbF07XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGZyb21QYXJhbShwYXJhbSkge1xuICAgICAgICByZXR1cm4ge2Ftb3VudDogcGFyYW0uYW1vdW50LCBhc3NldDogYXdhaXQgdGhpcy5pZChwYXJhbS5hc3NldF9pZCl9O1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5tYXAgfHwge307XG5cbiAgICAgICAgbGV0IGFzc2V0cyA9IGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWFwKS5tYXAoc3ltYm9sID0+IHRoaXMubWFwW3N5bWJvbF0uaWQpXG4gICAgICAgICk7XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IE9iamVjdC5hc3NpZ24odGhpcy5tYXBbYXNzZXQuc3ltYm9sXSwgYXNzZXQpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihycGNPYmopIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBycGNPYmopO1xuICAgIH1cblxuICAgIHRvUGFyYW0obnVtYmVyID0gMCkge1xuICAgICAgICByZXR1cm4ge2Ftb3VudDogbnVtYmVyLCBhc3NldF9pZDogdGhpcy5pZH07XG4gICAgfVxuXG4gICAgZmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLm1hcmtldF9mZWVfcGVyY2VudCAvIDEwMCAvIDEwMDtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGUoKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgKGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhbdGhpcy5pZF0pKVswXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJveHkoe30sIEFzc2V0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtBc3NldExhYmVsfSBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBTdGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7dmFsaWRhdGU6IFtdfSwgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIGJhc2UsXHJcbiAgICAgICAgICAgIHF1b3RlO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG5hbWUsIHZhbHVlLCB0eXBlb2YgdmFsdWUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VBbW91bnRcIjpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnN0YXRlLmJhc2U7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmFtb3VudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXJjZW50QmFzZUFtb3VudFwiOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuc3RhdGUuYmFzZTtcclxuICAgICAgICAgICAgICAgIGJhc2UucGVyY2VudCA9IHZhbHVlID09IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQmFsYW5jZVwiOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuc3RhdGUuYmFzZTtcclxuICAgICAgICAgICAgICAgIGJhc2UuYmFsYW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlU3ByZWFkXCI6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5zcHJlYWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2V9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBbW91bnRcIjpcclxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcclxuICAgICAgICAgICAgICAgIHF1b3RlLmFtb3VudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGVyY2VudFF1b3RlQW1vdW50XCI6XHJcbiAgICAgICAgICAgICAgICBxdW90ZSA9IHRoaXMuc3RhdGUucXVvdGU7XHJcbiAgICAgICAgICAgICAgICBxdW90ZS5wZXJjZW50ID0gdmFsdWUgPT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUJhbGFuY2VcIjpcclxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcclxuICAgICAgICAgICAgICAgIHF1b3RlLmJhbGFuY2UgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1b3RlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInF1b3RlU3ByZWFkXCI6XHJcbiAgICAgICAgICAgICAgICBxdW90ZSA9IHRoaXMuc3RhdGUucXVvdGU7XHJcbiAgICAgICAgICAgICAgICBxdW90ZS5zcHJlYWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1b3RlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRQcmljZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVmYXVsdFByaWNlOiB2YWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmcm9tTWFya2V0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tTWFya2V0OiBldmVudC50YXJnZXQuY2hlY2tlZH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVVwZGF0ZUJvdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc3RhdGVOb3cgPSB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmJhc2Uub3JkZXIgPSBzdGF0ZU5vdy5iYXNlLm9yZGVyO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucXVvdGUub3JkZXIgPSBzdGF0ZU5vdy5xdW90ZS5vcmRlcjtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS53cml0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMzBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYmFzZS5hc3NldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLmJhc2UuYXNzZXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5iYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmJhc2UucGVyY2VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmJhbGFuY2VfcGVyY2VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QmFzZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IXRoaXMuc3RhdGUuYmFzZS5wZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV92YWx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2UuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlU3ByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2Uuc3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVBc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnF1b3RlLmFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUucXVvdGUuYXNzZXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVCYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlLmJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5xdW90ZS5wZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IXRoaXMuc3RhdGUucXVvdGUucGVyY2VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmJhbGFuY2VfdmFsdWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGUuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuc3ByZWFkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGUuc3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5kZWZhdWx0X3ByaWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVmYXVsdFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlZmF1bHRQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwiZGVmYXVsdFByaWNlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmcm9tTWFya2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZnJvbU1hcmtldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmdldF9wcmljZV9mcm9tX21hcmtldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVVcGRhdGVCb3R9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Cb3R0b206IDMwfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi51cGRhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXRlO1xyXG4iLCJpbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQgV2FsbGV0VW5sb2NrQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRVbmxvY2tBY3Rpb25zXCI7XG5pbXBvcnQge1RyYW5zYWN0aW9uQnVpbGRlcn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmNsYXNzIEFjY291bnQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGZlZVN5bWJvbCA9IFwiQlRTXCIpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgQXBpcy5kYi5nZXRfYWNjb3VudF9ieV9uYW1lKG5hbWUpLFxuICAgICAgICAgICAgQXNzZXRzW2ZlZVN5bWJvbF1cbiAgICAgICAgXSkudGhlbigoW2FjYywgZmVlXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2MgPSBhY2M7XG4gICAgICAgICAgICB0aGlzLmZlZUFzc2V0ID0gZmVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYW5jZWxPcmRlcihpZCkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZFRyYW5zYWN0aW9uKFwibGltaXRfb3JkZXJfY2FuY2VsXCIsIHtcbiAgICAgICAgICAgIGZlZTogdGhpcy5mZWVBc3NldC50b1BhcmFtKCksXG4gICAgICAgICAgICBmZWVfcGF5aW5nX2FjY291bnQ6IHRoaXMuYWNjLmlkLFxuICAgICAgICAgICAgb3JkZXI6IGlkLFxuICAgICAgICAgICAgZXh0ZW5zaW9uczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgYnV5KFxuICAgICAgICBidXlTeW1ib2wsXG4gICAgICAgIGJhc2VTeW1ib2wsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGZpbGxfb3Jfa2lsbCA9IGZhbHNlLFxuICAgICAgICBleHBpcmUgPSBcIjIwMjUtMDItMDJUMDI6MDI6MDJcIlxuICAgICkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG5cbiAgICAgICAgbGV0IGJ1eUFzc2V0ID0gYXdhaXQgQXNzZXRzW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBidXlTeW1ib2wgPT09IFwib2JqZWN0XCIgPyBidXlTeW1ib2wuYXNzZXRfaWQgOiBidXlTeW1ib2xcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiYXNlQXNzZXQgPSBhd2FpdCBBc3NldHNbXG4gICAgICAgICAgICAgICAgdHlwZW9mIGJhc2VTeW1ib2wgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBiYXNlU3ltYm9sLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIDogYmFzZVN5bWJvbFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJ1eUFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYnV5U3ltYm9sID09PSBcIm9iamVjdFwiID8gYnV5U3ltYm9sLmFtb3VudCA6IGFtb3VudFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIGJ1eUFzc2V0LnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzZWxsQW1vdW50ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAodHlwZW9mIGJhc2VTeW1ib2wgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYmFzZVN5bWJvbC5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgIDogQmlnTnVtYmVyKGFtb3VudCkudGltZXMocHJpY2UpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogYmFzZUFzc2V0LnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgaWYgKGJ1eUFtb3VudCA9PSAwIHx8IHNlbGxBbW91bnQgPT0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFtb3VudCBlcXVhbCAwIVwiKTtcblxuICAgICAgICBsZXQgdHggPSBhd2FpdCB0aGlzLnNlbmRUcmFuc2FjdGlvbihcImxpbWl0X29yZGVyX2NyZWF0ZVwiLCB7XG4gICAgICAgICAgICBmZWU6IHRoaXMuZmVlQXNzZXQudG9QYXJhbSgpLFxuICAgICAgICAgICAgc2VsbGVyOiB0aGlzLmFjYy5pZCxcbiAgICAgICAgICAgIGFtb3VudF90b19zZWxsOiBiYXNlQXNzZXQudG9QYXJhbShzZWxsQW1vdW50KSxcbiAgICAgICAgICAgIG1pbl90b19yZWNlaXZlOiBidXlBc3NldC50b1BhcmFtKGJ1eUFtb3VudCksXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHBpcmUsXG4gICAgICAgICAgICBmaWxsX29yX2tpbGw6IGZpbGxfb3Jfa2lsbCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbXG4gICAgICAgICAgICB0eFswXS50cngub3BlcmF0aW9uX3Jlc3VsdHNbMF1bMV1cbiAgICAgICAgXSkpWzBdO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbGwoXG4gICAgICAgIHNlbGxTeW1ib2wsXG4gICAgICAgIGJhc2VTeW1ib2wsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGZpbGxfb3Jfa2lsbCA9IGZhbHNlLFxuICAgICAgICBleHBpcmUgPSBcIjIwMjUtMDItMDJUMDI6MDI6MDJcIlxuICAgICkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG5cbiAgICAgICAgbGV0IHNlbGxBc3NldCA9IGF3YWl0IEFzc2V0c1tcbiAgICAgICAgICAgICAgICB0eXBlb2Ygc2VsbFN5bWJvbCA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IHNlbGxTeW1ib2wuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxsU3ltYm9sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmFzZUFzc2V0ID0gYXdhaXQgQXNzZXRzW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYmFzZVN5bWJvbC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA6IGJhc2VTeW1ib2xcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzZWxsQW1vdW50ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICBCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBzZWxsU3ltYm9sID09PSBcIm9iamVjdFwiID8gc2VsbFN5bWJvbC5hbW91bnQgOiBhbW91bnRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiBzZWxsQXNzZXQucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGJ1eUFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhc2VTeW1ib2wuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICA6IEJpZ051bWJlcihhbW91bnQpLnRpbWVzKHByaWNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIGJhc2VBc3NldC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGlmIChidXlBbW91bnQgPT0gMCB8fCBzZWxsQW1vdW50ID09IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbW91bnQgZXF1YWwgMCFcIik7XG5cbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdGhpcy5zZW5kVHJhbnNhY3Rpb24oXCJsaW1pdF9vcmRlcl9jcmVhdGVcIiwge1xuICAgICAgICAgICAgZmVlOiB0aGlzLmZlZUFzc2V0LnRvUGFyYW0oKSxcbiAgICAgICAgICAgIHNlbGxlcjogdGhpcy5hY2MuaWQsXG4gICAgICAgICAgICBhbW91bnRfdG9fc2VsbDogc2VsbEFzc2V0LnRvUGFyYW0oc2VsbEFtb3VudCksXG4gICAgICAgICAgICBtaW5fdG9fcmVjZWl2ZTogYmFzZUFzc2V0LnRvUGFyYW0oYnV5QW1vdW50KSxcbiAgICAgICAgICAgIGV4cGlyYXRpb246IGV4cGlyZSxcbiAgICAgICAgICAgIGZpbGxfb3Jfa2lsbDogZmlsbF9vcl9raWxsLFxuICAgICAgICAgICAgZXh0ZW5zaW9uczogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFtcbiAgICAgICAgICAgIHR4WzBdLnRyeC5vcGVyYXRpb25fcmVzdWx0c1swXVsxXVxuICAgICAgICBdKSlbMF07XG4gICAgfVxuXG4gICAgYXN5bmMgYmFsYW5jZXMoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIEFwaXMuZGIuZ2V0X2FjY291bnRfYmFsYW5jZXModGhpcy5hY2MuaWQsIFsuLi5hcmd1bWVudHNdKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZW5kVHJhbnNhY3Rpb24odHlwZSwgb3BlcmF0aW9uKSB7XG4gICAgICAgIGxldCB0ciA9IG5ldyBUcmFuc2FjdGlvbkJ1aWxkZXIoKTtcbiAgICAgICAgdHIuYWRkX3R5cGVfb3BlcmF0aW9uKHR5cGUsIG9wZXJhdGlvbik7XG4gICAgICAgIGF3YWl0IHRyLnNldF9yZXF1aXJlZF9mZWVzKCk7XG5cbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcbiAgICAgICAgbGV0IHByaXZhdGVfa2V5ID0gV2FsbGV0RGIuZ2V0UHJpdmF0ZUtleShcbiAgICAgICAgICAgIHRoaXMuYWNjLmFjdGl2ZS5rZXlfYXV0aHNbMF1bMF1cbiAgICAgICAgKTtcbiAgICAgICAgdHIuYWRkX3NpZ25lcihcbiAgICAgICAgICAgIHByaXZhdGVfa2V5LFxuICAgICAgICAgICAgcHJpdmF0ZV9rZXkudG9QdWJsaWNLZXkoKS50b1B1YmxpY0tleVN0cmluZygpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRyLmJyb2FkY2FzdCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDtcbiIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9UcmFpbGluZ1N0b3AvQ3JlYXRlXCI7XHJcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1RyYWlsaW5nU3RvcC9TdGF0ZVwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xyXG5pbXBvcnQgQXNzZXRzIGZyb20gXCJsaWIvYm90cy9hc3NldHNcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCJsaWIvYm90cy9hY2NvdW50XCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcclxuXHJcbmNsYXNzIFRyYWlsaW5nU3RvcCB7XHJcbiAgICBzdGF0aWMgY3JlYXRlID0gQ3JlYXRlO1xyXG4gICAgc3RhdGUgPSBTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG5ldyBBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblxyXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xyXG4gICAgICAgICAgICBzdG9yYWdlLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogaW5pdERhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIHNlbGxBc3NldDogaW5pdERhdGEuc2VsbEFzc2V0LFxyXG4gICAgICAgICAgICAgICAgZ2V0QXNzZXQ6IGluaXREYXRhLmdldEFzc2V0LFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IGluaXREYXRhLm1pbkFtb3VudCxcclxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IGluaXREYXRhLnBlcmNlbnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBzdG9yYWdlLnJlYWQoKS5uYW1lO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XHJcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxsQXNzZXQgPSBhd2FpdCBBc3NldHNbc3RhdGUuc2VsbEFzc2V0XTtcclxuICAgICAgICB0aGlzLmdldEFzc2V0ID0gYXdhaXQgQXNzZXRzW3N0YXRlLmdldEFzc2V0XTtcclxuXHJcbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XHJcbiAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcclxuICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RvcCgpIHtcclxuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xyXG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5xdWV1ZUV2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSB0aGlzLnF1ZXVlRXZlbnRzXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuY2hlY2tPcmRlcnMpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvci5iaW5kKHRoaXMubG9nZ2VyKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja09yZGVyc1wiKTtcclxuXHJcbiAgICAgICAgbGV0IHRpY2tlciA9IGF3YWl0IEFwaXMuZGIuZ2V0X3RpY2tlcihcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXNzZXQuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxsQXNzZXQuc3ltYm9sXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHByaWNlID0gQmlnTnVtYmVyKHRpY2tlci5sYXRlc3QpLFxyXG4gICAgICAgICAgICBuZWVkU3RvcGxvc3MgPSBwcmljZS50aW1lcygxIC0gc3RhdGUucGVyY2VudCAvIDEwMCksXHJcbiAgICAgICAgICAgIGNyZWF0ZU9yZGVyUHJpY2UgPSBwcmljZS50aW1lcygxIC0gKHN0YXRlLnBlcmNlbnQgKiAyKSAvIDMgLyAxMDApLFxyXG4gICAgICAgICAgICBzdG9wbG9zcyA9IEJpZ051bWJlcihzdGF0ZS5taW5BbW91bnQpLmRpdihzdGF0ZS5hbW91bnQpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgcHJpY2UudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgbmVlZFN0b3Bsb3NzLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgIGNyZWF0ZU9yZGVyUHJpY2UudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgc3RvcGxvc3MudG9OdW1iZXIoKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChuZWVkU3RvcGxvc3MuZ3Qoc3RvcGxvc3MpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXAgbWluQW1vdW50XCIpO1xyXG4gICAgICAgICAgICBzdGF0ZS5taW5BbW91bnQgPSBuZWVkU3RvcGxvc3MudGltZXMoc3RhdGUuYW1vdW50KS50b051bWJlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uud3JpdGUoc3RhdGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlT3JkZXJQcmljZS5sdChzdG9wbG9zcykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgbGltaXQgb3JkZXJcIik7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxsQXNzZXQuc3ltYm9sLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBc3NldC5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBzdG9wbG9zcy50b051bWJlcigpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWlsaW5nU3RvcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IEFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBDcmVhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBzZWxsQXNzZXQ6IFwiUlVERVguQlRDXCIsXG4gICAgICAgIGdldEFzc2V0OiBcIlJVREVYLlVTRFRcIixcbiAgICAgICAgYW1vdW50OiAwLjAxLFxuICAgICAgICBtaW5BbW91bnQ6IDEsXG4gICAgICAgIHN0b3Bsb3NzOiAxMDAsXG4gICAgICAgIHBlcmNlbnQ6IDEwLFxuICAgICAgICB2YWxpZGF0ZTogW1wibmFtZVwiXVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlID0gZGVib3VuY2UodGhpcy5hc3NldFZhbGlkYXRlLCAyMDApO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmIChbXCJzZWxsQXNzZXRcIiwgXCJnZXRBc3NldFwiXS5pbmNsdWRlcyhuYW1lKSlcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gXCJtaW5BbW91bnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHN0b3Bsb3NzOiB2YWx1ZSAvIHRoaXMuc3RhdGUuYW1vdW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInN0b3Bsb3NzXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHRoaXMuc3RhdGUuYW1vdW50ICogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHN0b3Bsb3NzOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJhbW91bnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdmFsdWUgKiB0aGlzLnN0YXRlLnN0b3Bsb3NzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXNzZXRWYWxpZGF0ZSA9IGFzeW5jIG5hbWUgPT4ge1xuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnN0YXRlW25hbWVdO1xuICAgICAgICBsZXQgYmxvY2tjaGFpbkFzc2V0cyA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKGFzc2V0LCAxKSlbMF07XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XG5cbiAgICAgICAgaWYgKGFzc2V0ICE9PSBibG9ja2NoYWluQXNzZXRzLnN5bWJvbCkgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZSA9IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2VsbEFzc2V0XCI6XG4gICAgICAgICAgICBjYXNlIFwiZ2V0QXNzZXRcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhbW91bnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJtaW5BbW91bnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwZWNlbnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJzdG9wbG9zc1wiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbGlkYXRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodGhpcy5zdGF0ZS52YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3Auc2VsbF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsbEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxsQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmdldF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2V0QXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdldEFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5taW5fYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW5BbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zdG9wbG9zc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0b3Bsb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RvcGxvc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwic3RvcGxvc3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnRyYWlsaW5nX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcInBlcmNlbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0Fzc2V0TGFiZWx9IGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBTdGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHZhbGlkYXRlOiBbXVxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpO1xuICAgICAgICBzdGF0ZS5zdG9wbG9zcyA9IHN0YXRlLm1pbkFtb3VudCAvIHN0YXRlLmFtb3VudDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoW1wic2VsbEFzc2V0XCIsIFwiZ2V0QXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwibWluQW1vdW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWUgLyB0aGlzLnN0YXRlLmFtb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJzdG9wbG9zc1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB0aGlzLnN0YXRlLmFtb3VudCAqIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiYW1vdW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlICogdGhpcy5zdGF0ZS5zdG9wbG9zc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge307XG5cbiAgICBoYW5kbGVVcGRhdGVCb3QgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUodGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Ub3A6IDUwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3Auc2VsbF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGxBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2VsbEFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5zZWxsQXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmdldF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5nZXRBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUuZ2V0QXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AubWluX2Ftb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zdG9wbG9zc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0b3Bsb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RvcGxvc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcInN0b3Bsb3NzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC50cmFpbGluZ19wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwicGVyY2VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi51cGRhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvQ3JlYXRlXCI7XHJcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1BlcmNlbnRVcC9TdGF0ZVwiO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwibGliL2JvdHMvYWNjb3VudFwiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xyXG5pbXBvcnQgQXNzZXRzIGZyb20gXCJsaWIvYm90cy9hc3NldHNcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcclxuXHJcbmNsYXNzIFBlcmNlbnRVcCB7XHJcbiAgICBzdGF0aWMgY3JlYXRlID0gQ3JlYXRlO1xyXG4gICAgc3RhdGUgPSBTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG5ldyBBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblxyXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xyXG4gICAgICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIGJhc2UsXHJcbiAgICAgICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgc3ByZWFkLFxyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VcclxuICAgICAgICAgICAgfSA9IGluaXREYXRhO1xyXG4gICAgICAgICAgICBzdG9yYWdlLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIGJhc2UsXHJcbiAgICAgICAgICAgICAgICBxdW90ZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgc3ByZWFkLFxyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gc3RvcmFnZS5yZWFkKCkubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xyXG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0KCkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFzZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5iYXNlXTtcclxuICAgICAgICB0aGlzLnF1b3RlID0gYXdhaXQgQXNzZXRzW3N0YXRlLnF1b3RlXTtcclxuXHJcbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcclxuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XHJcbiAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcclxuICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XHJcbiAgICAgICAgdGhpcy5ydW4gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3RvcCgpIHtcclxuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xyXG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5xdWV1ZUV2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSB0aGlzLnF1ZXVlRXZlbnRzXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuY2hlY2tPcmRlcnMpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvci5iaW5kKHRoaXMubG9nZ2VyKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCksXHJcbiAgICAgICAgICAgIGxvZyA9ICguLi5hcmdzKSA9PiB0aGlzLmxvZ2dlci5sb2coYFske3N0YXRlLm5hbWV9XWAsIC4uLmFyZ3MpLFxyXG4gICAgICAgICAgICBhY2NvdW50QmFsYW5jZXMgPSAoYXdhaXQgdGhpcy5hY2NvdW50LmJhbGFuY2VzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5pZFxyXG4gICAgICAgICAgICApKS5yZWR1Y2UoKGFjYywgYmFsYW5jZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkID09PSBiYWxhbmNlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoYWNjLmJhc2UgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKGFjYy5xdW90ZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgIH0sIHt9KSxcclxuICAgICAgICAgICAgYmFsYW5jZSA9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYWxhbmNlID09PSBcIi1cIlxyXG4gICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUuYmFsYW5jZSA9PT0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRCYWxhbmNlcy5iYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5taW4oYWNjb3VudEJhbGFuY2VzLmJhc2UsIHN0YXRlLmJhbGFuY2UpLFxyXG4gICAgICAgICAgICBhbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgc3RhdGUucGVyY2VudEFtb3VudC50b1N0cmluZygpID09IFwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYmFsYW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5hbW91bnQsXHJcbiAgICAgICAgICAgIG9yZGVycyA9IChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFxyXG4gICAgICAgICAgICAgICAgc3RhdGUub3JkZXJzLm1hcChvcmRlciA9PiBvcmRlci5pZCkuZmlsdGVyKGlkID0+IGlkKVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgLm1hcChvcmRlciA9PiBvcmRlciAmJiBvcmRlci5pZClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gaWQpLFxyXG4gICAgICAgICAgICBwcm9jZXNzT3JkZXJzID0gc3RhdGUub3JkZXJzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIG9yZGVyID0+ICFvcmRlcnMuaW5jbHVkZXMob3JkZXIuaWQpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG9yZGVyRmVlID0gQmlnTnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgKGF3YWl0IEFwaXMuZGIuZ2V0X2dsb2JhbF9wcm9wZXJ0aWVzKCkpLnBhcmFtZXRlcnMuY3VycmVudF9mZWVzXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhcmFtZXRlcnNbMV1bMV0uZmVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogNSlcclxuICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xyXG5cclxuICAgICAgICBpZiAocHJvY2Vzc09yZGVycy5sZW5ndGggPiAwKSBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IHByb2Nlc3NPcmRlcnMubWFwKGFzeW5jIG9yZGVyID0+IHtcclxuICAgICAgICAgICAgaWYgKG9yZGVyLnN0YXRlID09PSBcImJ1eVwiKSB7XHJcbiAgICAgICAgICAgICAgICBvcmRlci5pZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFsYW5jZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50VG9NYXJrZXQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCaWdOdW1iZXIodGhpcy5iYXNlLm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMDAgKiAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMob3JkZXIuYmFzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhbGFuY2UgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc3RhdGUuYmFsYW5jZSkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIob3JkZXIuYmFzZSkgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYW1vdW50VG9NYXJrZXQgIT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGFtb3VudFRvTWFya2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5iYXNlLm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50ICE9PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxMCAqKiAtdGhpcy5iYXNlLnByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9yUXVvdGVGZWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCA9PT0gXCJCVFNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoaXNOYU4ob3JkZXIuZmVlKSA/IG9yZGVyRmVlIDogb3JkZXIuZmVlKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyRmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yQmFzZUZlZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wgPT09IFwiQlRTXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGlzTmFOKG9yZGVyLmZlZSkgPyBvcmRlckZlZSA6IG9yZGVyLmZlZSkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlckZlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRBbW91bnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnF1b3RlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoYWNjb3VudEJhbGFuY2VzLnF1b3RlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIob3JkZXIucXVvdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIC0gZm9yUXVvdGVGZWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRPbk1hcmtldCA9IEJpZ051bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50XHJcbiAgICAgICAgICAgICAgICAgICAgKS5kaXYoMTAwICogMTAwKSxcclxuICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXRBbW91bnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogQmlnTnVtYmVyKG9yZGVyLmJhc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5zcHJlYWQpIC8gMTAwICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudE9uTWFya2V0LnRvTnVtYmVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKGZvckJhc2VGZWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2coXHJcbiAgICAgICAgICAgICAgICAgICAgYGJ1eSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgfTogYW1vdW50PSR7YmFzZUFzc2V0QW1vdW50LmFtb3VudC50b051bWJlcigpfSBwcmljZT0ke0JpZ051bWJlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudC5hbW91bnRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYmFzZUFzc2V0QW1vdW50LmFtb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCl9ICR7dGhpcy5iYXNlLnN5bWJvbH0vJHt0aGlzLnF1b3RlLnN5bWJvbH1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0QW1vdW50XHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIG9yZGVyLnN0YXRlID0gXCJidXlcIjtcclxuICAgICAgICAgICAgICAgIG9yZGVyLmlkID0gb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiO1xyXG4gICAgICAgICAgICAgICAgb3JkZXIuYmFzZSA9IGJhc2VBc3NldEFtb3VudC5hbW91bnQudG9OdW1iZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gICAgICAgIGxldCBvcmRlckJvb2sgPSBhd2FpdCBBcGlzLmRiLmdldF9vcmRlcl9ib29rKFxyXG4gICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcclxuICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcclxuICAgICAgICAgICAgNTBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgcXVvdGVBbW91bnQgPSBCaWdOdW1iZXIoMCksXHJcbiAgICAgICAgICAgIGJhc2VBbW91bnQgPSBCaWdOdW1iZXIoMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlckJvb2suYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYXNrID0gb3JkZXJCb29rLmFza3NbaV07XHJcblxyXG4gICAgICAgICAgICBsZXQgcXVvdGUgPSBCaWdOdW1iZXIoYXNrLmJhc2UpO1xyXG4gICAgICAgICAgICBsZXQgYmFzZSA9IEJpZ051bWJlcihhc2sucXVvdGUpO1xyXG4gICAgICAgICAgICBsZXQgZGlmZkJhc2UgPSBCaWdOdW1iZXIoYW1vdW50KS5taW51cyhiYXNlQW1vdW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYXNlLmlzRXF1YWxUbyhkaWZmQmFzZSkpIHtcclxuICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50ID0gcXVvdGVBbW91bnQucGx1cyhxdW90ZSk7XHJcbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50ID0gYmFzZUFtb3VudC5wbHVzKGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5pc0xlc3NUaGFuKGRpZmZCYXNlKSkge1xyXG4gICAgICAgICAgICAgICAgcXVvdGVBbW91bnQgPSBxdW90ZUFtb3VudC5wbHVzKHF1b3RlKTtcclxuICAgICAgICAgICAgICAgIGJhc2VBbW91bnQgPSBiYXNlQW1vdW50LnBsdXMoYmFzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5pc0dyZWF0ZXJUaGFuKGRpZmZCYXNlKSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZUFtb3VudCA9IGJhc2VBbW91bnQucGx1cyhkaWZmQmFzZSk7XHJcbiAgICAgICAgICAgICAgICBxdW90ZUFtb3VudCA9IHF1b3RlQW1vdW50LnBsdXMoXHJcbiAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKGFzay5wcmljZSkudGltZXMoZGlmZkJhc2UpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmljZSA9IHF1b3RlQW1vdW50LmRpdihiYXNlQW1vdW50KSxcclxuICAgICAgICAgICAgbG93UHJpY2UgPSBudWxsO1xyXG5cclxuICAgICAgICBzdGF0ZS5vcmRlcnMuZm9yRWFjaChvcmRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvcmRlclByaWNlID0gQmlnTnVtYmVyKG9yZGVyLnF1b3RlKS5kaXYob3JkZXIuYmFzZSk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICFsb3dQcmljZSB8fFxyXG4gICAgICAgICAgICAgICAgb3JkZXJQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5taW51cyhwcmljZSlcclxuICAgICAgICAgICAgICAgICAgICAuYWJzKClcclxuICAgICAgICAgICAgICAgICAgICAuaXNMZXNzVGhhbihsb3dQcmljZS5taW51cyhwcmljZSkuYWJzKCkpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGxvd1ByaWNlID0gb3JkZXJQcmljZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGlzR3JlYXRlckRpc3RhbmNlID1cclxuICAgICAgICAgICAgISFsb3dQcmljZSAmJlxyXG4gICAgICAgICAgICBsb3dQcmljZVxyXG4gICAgICAgICAgICAgICAgLm1pbnVzKHByaWNlKVxyXG4gICAgICAgICAgICAgICAgLmFicygpXHJcbiAgICAgICAgICAgICAgICAuZGl2KGxvd1ByaWNlKVxyXG4gICAgICAgICAgICAgICAgLnRpbWVzKDEwMClcclxuICAgICAgICAgICAgICAgIC5pc0dyZWF0ZXJUaGFuKHN0YXRlLmRpc3RhbmNlKTtcclxuXHJcbiAgICAgICAgbG9nKFxyXG4gICAgICAgICAgICBgT3JkZXJzIGV4aXN0czogJHshIWxvd1ByaWNlfSwgYmFsYW5jZSA+IGFtb3VudDogJHtiYWxhbmNlID5cclxuICAgICAgICAgICAgICAgIGFtb3VudH0sIGxvd1ByaWNlIC0gcHJpY2UgPiBkaXN0YW5jZTogJHtpc0dyZWF0ZXJEaXN0YW5jZX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoYmFsYW5jZSA+IGFtb3VudCAmJiAoIWxvd1ByaWNlIHx8IGlzR3JlYXRlckRpc3RhbmNlKSkge1xyXG4gICAgICAgICAgICBsZXQgYmFzZUFzc2V0QW1vdW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5xdW90ZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHF1b3RlQW1vdW50XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LmJ1eShxdW90ZUFzc2V0QW1vdW50LCBiYXNlQXNzZXRBbW91bnQpLFxyXG4gICAgICAgICAgICAgICAgb3JkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwic2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZTogcXVvdGVBc3NldEFtb3VudC5hbW91bnQudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZTogb3JkZXJGZWVcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5vcmRlcnMucHVzaChvcmRlcik7XHJcbiAgICAgICAgICAgIGxvZyhcclxuICAgICAgICAgICAgICAgIGBzZWxsICR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgfTogYW1vdW50PSR7YW1vdW50fSwgcHJpY2U9JHtwcmljZS50b051bWJlcigpfSAke1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcclxuICAgICAgICAgICAgICAgIH0vJHt0aGlzLnF1b3RlLnN5bWJvbH1gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFsYW5jZSkpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5iYWxhbmNlID0gTnVtYmVyKHN0YXRlLmJhbGFuY2UpIC0gYW1vdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUub3JkZXJzID0gc3RhdGUub3JkZXJzLmZpbHRlcihvcmRlciA9PiBvcmRlci5pZCAhPT0gbnVsbCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJjZW50VXA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vbGlicy9JbnB1dFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBDcmVhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBiYXNlOiBcIkJUU1wiLFxuICAgICAgICBxdW90ZTogXCJSVURFWC5FT1NcIixcbiAgICAgICAgYW1vdW50OiAxMDAsXG4gICAgICAgIHBlcmNlbnRBbW91bnQ6IGZhbHNlLFxuICAgICAgICBiYWxhbmNlOiBcIlwiLFxuICAgICAgICBzcHJlYWQ6IDEsXG4gICAgICAgIGRpc3RhbmNlOiBcIjEuNVwiLFxuICAgICAgICB2YWxpZGF0ZTogW1wibmFtZVwiXVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlID0gZGVib3VuY2UodGhpcy5hc3NldFZhbGlkYXRlLCAyMDApO1xuICAgIH1cblxuICAgIGFzc2V0VmFsaWRhdGUgPSBhc3luYyBuYW1lID0+IHtcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5zdGF0ZVtuYW1lXTtcbiAgICAgICAgbGV0IGJsb2NrY2hhaW5Bc3NldHMgPSAoYXdhaXQgQXBpcy5kYi5saXN0X2Fzc2V0cyhhc3NldCwgMSkpWzBdO1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIGlmIChhc3NldCAhPT0gYmxvY2tjaGFpbkFzc2V0cy5zeW1ib2wpIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGUgPSB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodGhpcy5zdGF0ZS52YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmIChbXCJiYXNlXCIsIFwicXVvdGVcIl0uaW5jbHVkZXMobmFtZSkpIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIi1cIiAmJiBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3ByZWFkXCI6XG4gICAgICAgICAgICBjYXNlIFwiZGlzdGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codmFsaWRhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh2YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt2YWxpZGF0ZSwgbmFtZSwgYW1vdW50LCBiYWxhbmNlLCBzcHJlYWQsIGRpc3RhbmNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBob3Jpem9udGFsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImJhbGFuY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnNwcmVhZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwcmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcInNwcmVhZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMucGVyY2VudF91cC5kaXN0YW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc3RhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzdGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJkaXN0YW5jZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7bmFtZSwgdmFsdWUsIG9uQ2hhbmdlLCBib3JkZXIsIC4uLnByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIGlkPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGJvcmRlciA/IFwiMXB4IHNvbGlkIHJlZFwiIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXNzZXRMYWJlbH0gZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2xpYnMvSW5wdXRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgU3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe3ZhbGlkYXRlOiBbXX0sIHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmIChbXCJiYXNlXCIsIFwicXVvdGVcIl0uaW5jbHVkZXMobmFtZSkpIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIi1cIiAmJiBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3ByZWFkXCI6XG4gICAgICAgICAgICBjYXNlIFwiZGlzdGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh2YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIGhhbmRsZVVwZGF0ZUJvdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlTm93ID0gdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS53cml0ZSh7Li4uc3RhdGVOb3csIC4uLnRoaXMuc3RhdGV9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZhbGlkYXRlLCBhbW91bnQsIGJhbGFuY2UsIHNwcmVhZCwgZGlzdGFuY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5iYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5iYXNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV9wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV92YWx1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJiYWxhbmNlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ucXVvdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLnF1b3RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwic3ByZWFkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5wZXJjZW50X3VwLmRpc3RhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzdGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXN0YW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImRpc3RhbmNlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi51cGRhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBscyBmcm9tIFwiY29tbW9uL2xvY2FsU3RvcmFnZVwiO1xuXG52YXIgYm90cyA9IGxzKFwiX19ib3RzX19cIik7XG5cbmNsYXNzIFN0b3JhZ2Uge1xuICAgIHN0YXRpYyBnZXRBY2NvdW50Qm90KGFjY291bnQpIHtcbiAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChgXl9fYm90c19fJHthY2NvdW50fTo6YCk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihrZXkgPT4gcmUudGVzdChrZXkpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGJvdHMuaGFzKG5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgLy9ib3RzLmhhcyhuYW1lKVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvL2lmICghYm90cy5oYXMobmFtZSkpXG4gICAgICAgIC8vYm90cy5zZXQobmFtZSwge30pXG4gICAgfVxuXG4gICAgaW5pdChkYXRhKSB7XG4gICAgICAgIGlmICghYm90cy5oYXMobmFtZSkpIGJvdHMuc2V0KHRoaXMubmFtZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmVhZCgpIHtcbiAgICAgICAgcmV0dXJuIGJvdHMuZ2V0KHRoaXMubmFtZSk7XG4gICAgfVxuXG4gICAgd3JpdGUobmV3U3RhdGUpIHtcbiAgICAgICAgYm90cy5zZXQodGhpcy5uYW1lLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBib3RzLnJlbW92ZSh0aGlzLm5hbWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQTJCQTtBQUNBO0FBQ0E7QUE3QkE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQXRDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUF2REE7QUF5REE7QUFFQTtBQUNBO0FBNURBO0FBNkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBN0RBO0FBb0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFyRUE7QUE0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWhGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSkE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQTREQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUEE7QUFlQTtBQWhCQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFEQTtBQURBO0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBVEE7QUF4Q0E7QUEwREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBbEJBO0FBNEJBO0FBQUE7QUFDQTtBQURBO0FBOUJBO0FBZkE7QUEzREE7QUFEQTtBQWtIQTs7OztBQWxOQTtBQUNBO0FBb05BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFLQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFqREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBNEVBO0FBR0E7QUFDQTtBQWhGQTtBQWlGQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBV0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUF1QkE7QUFDQTtBQXhCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBMEJBO0FBMUJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFpQ0E7QUFPQTtBQUNBO0FBQ0E7QUExQ0E7QUE2QkE7QUFhQTtBQU1BO0FBTUE7QUFPQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUF2RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXdFQTtBQUNBO0FBQ0E7QUEzRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXFGQTtBQUNBO0FBQ0E7QUF4RkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQThGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFVQTtBQXBIQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBc0hBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFuSUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFxSUE7QUFDQTtBQUNBO0FBeElBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUEySUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEwSkE7QUFDQTtBQTVKQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZ0tBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUE3S0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUErS0E7QUFDQTtBQWpMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFxTEE7QUFDQTtBQUNBO0FBeExBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFrTUE7QUFDQTtBQUNBO0FBck1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUEyTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVVBO0FBaE9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFrT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQTdPQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQStPQTtBQUNBO0FBQ0E7QUFsUEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXFQQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaFFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFtUUE7QUFDQTtBQXJRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBMlFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUF0UkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUF3UkE7QUFDQTtBQTFSQTtBQUNBO0FBNlJBO0FBQ0E7QUEvUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWpGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFDQTtBQXZCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQTBTQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTs7QUFHQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFJQTs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBREE7O0FBR0E7QUFDQTs7QUFEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBM2NBO0FBQ0E7QUFDQTtBQThjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFhQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQTVEQTtBQUNBO0FBOERBO0FBQ0E7QUFDQTs7Ozs7QUFwR0E7QUFDQTtBQUNBOzs7QUFvR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVJBO0FBSkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBdkVBO0FBeUZBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQXZFQTtBQTFGQTtBQW9MQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVJBO0FBTEE7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFQQTtBQURBO0FBNU5BO0FBeU9BOzs7O0FBaldBO0FBQ0E7QUFtV0E7Ozs7Ozs7O0FDM1dBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVJBO0FBOUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBaUJBO0FBRUE7QUFuQkE7QUFBQTtBQUFBO0FBOEJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBU0E7QUF4Q0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQTBDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFkQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFmQTtBQUNBO0FBQ0E7OztBQStCQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBREE7QUFjQTs7OztBQXBEQTtBQUNBO0FBc0RBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUNBOztBQUFBO0FBQ0E7Ozs7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFGQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUdBO0FBQUE7O0FBQUE7QUFDQTs7QUFEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBQ0E7QUFnREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUF4RUE7QUFDQTtBQUdBOzs7QUFzRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBdEZBO0FBdUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUF0RkE7QUF4R0E7QUFnTkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFKQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFEQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBL09BO0FBeVBBOzs7O0FBdFVBO0FBQ0E7QUF3VUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0FBSUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7O0FBR0E7QUFDQTs7QUFEQTtBQUtBO0FBT0E7QUFDQTtBQVFBOzs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBOztBQURBOztBQVVBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFJQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTs7QUFEQTs7QUFLQTtBQUNBOztBQURBO0FBS0E7QUFPQTtBQUNBO0FBUUE7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7O0FBREE7O0FBVUE7QUFDQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBZ0RBO0FBR0E7QUFDQTtBQXBEQTtBQXFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBdkJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXdCQTtBQXpCQTtBQUFBO0FBQ0E7QUFEQTtBQWdDQTtBQUNBO0FBakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQURBOztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFqREE7QUFDQTtBQUNBO0FBNEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBZ0JBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF2Q0E7QUFDQTtBQXlDQTtBQUNBO0FBQ0E7Ozs7O0FBckdBO0FBQ0E7QUFDQTs7O0FBcUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFKQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFaQTtBQTJCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFaQTtBQTVCQTtBQTBEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQXJCQTtBQTdFQTtBQW1IQTs7OztBQXhPQTtBQUNBO0FBME9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFZQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7O0FBakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOENBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFwQkE7QUFvQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFsQkE7QUF4Q0E7QUE2RUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBdEJBO0FBc0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBcEhBO0FBOEhBOzs7O0FBeExBO0FBQ0E7QUEwTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUE2REE7QUFHQTtBQUNBO0FBakVBO0FBa0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBT0E7QUFPQTtBQUNBO0FBQ0E7QUFoQkE7QUFHQTtBQWFBO0FBTUE7QUF0QkE7QUFBQTtBQThCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBL0JBO0FBQUE7QUFnQ0E7QUFBQTtBQUNBO0FBakNBO0FBaUNBO0FBQUE7QUFDQTtBQUxBO0FBS0E7QUFDQTtBQUFBO0FBbkNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBcUNBO0FBQ0E7QUF0Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBOENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFVQTtBQXJCQTtBQUFBO0FBQ0E7QUFEQTtBQXVCQTtBQVdBO0FBQ0E7QUFGQTtBQVlBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFTQTtBQXZEQTtBQUFBO0FBQ0E7QUFEQTtBQWdFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQXhFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUE5Q0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTJIQTtBQU1BO0FBRUE7QUFDQTtBQXBJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFtSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXpJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMElBO0FBQ0E7QUE1SUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQThJQTtBQUNBO0FBaEpBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWlKQTtBQUNBO0FBbkpBO0FBQ0E7QUFEQTtBQW1JQTtBQW5JQTtBQUFBO0FBQ0E7QUFEQTtBQTBKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQW5MQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBc0xBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUEzTEE7QUFBQTtBQUNBO0FBREE7QUErTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBbE5BO0FBQ0E7QUFvTkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBeE5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFsRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQURBOztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUE5REE7QUFDQTtBQUNBO0FBK1JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUEvQ0E7QUFDQTtBQWlEQTtBQUNBO0FBQ0E7Ozs7O0FBbEZBO0FBQ0E7QUFDQTs7O0FBa0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUpBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBckNBO0FBNENBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFyQkE7QUE3Q0E7QUFaQTtBQXdGQTs7OztBQTdMQTtBQUNBO0FBK0xBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hNQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWNBOzs7O0FBbEJBO0FBQ0E7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQS9DQTtBQUNBO0FBaURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUEzRUE7QUFDQTtBQUdBOzs7QUF5RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBM0NBO0FBa0RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUEzQkE7QUFuREE7QUFzRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUF2RkE7QUFpR0E7Ozs7QUFuTEE7QUFDQTtBQXFMQTs7Ozs7Ozs7Ozs7Ozs7QUM1TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9