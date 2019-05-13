(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 2453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2186);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AssetImage = function (_React$Component) {
    _inherits(AssetImage, _React$Component);

    function AssetImage(props) {
        _classCallCheck(this, AssetImage);

        var _this = _possibleConstructorReturn(this, (AssetImage.__proto__ || Object.getPrototypeOf(AssetImage)).call(this, props));

        _this.state = {
            imgError: false
        };
        return _this;
    }

    _createClass(AssetImage, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return this.props.asset !== np.asset || this.props.maxWidth !== np.maxWidth || this.props.whiteList !== np.whiteList || this.state.imgError !== ns.imgError;
        }
    }, {
        key: "_onError",
        value: function _onError(imgName) {
            if (!this.state.imgError) {
                if (this.props.replaceNoneToBts) this.refs[imgName.toLowerCase()].src = "" + "asset-symbols/bts.png";else this.refs[imgName.toLowerCase()].remove();
                this.setState({
                    imgError: true
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;


            function getImageName(asset) {
                var symbol = asset.get("symbol");
                return symbol;
                // if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
                // if (symbol.startsWith("ESCROW.")) return symbol;
                // let imgName = asset.get("symbol").split(".");
                //return imgName.length === 2 ? imgName[1] : imgName[0];
            }

            var imgName = getImageName(asset);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                ref: imgName.toLowerCase(),
                className: "column-hide-small",
                onError: this._onError.bind(this, imgName),
                style: { maxWidth: this.props.maxWidth, marginRight: 5 },
                src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
            });
        }
    }]);

    return AssetImage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetImage.propTypes = {
    replaceNoneToBts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
AssetImage.defaultProps = {
    replaceNoneToBts: true,
    maxWidth: 20
};


AssetImage = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(AssetImage);

var AssetImageWrapper = function (_React$Component2) {
    _inherits(AssetImageWrapper, _React$Component2);

    function AssetImageWrapper() {
        _classCallCheck(this, AssetImageWrapper);

        return _possibleConstructorReturn(this, (AssetImageWrapper.__proto__ || Object.getPrototypeOf(AssetImageWrapper)).apply(this, arguments));
    }

    _createClass(AssetImageWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetImage, _extends({}, this.props, { asset: this.props.name }));
        }
    }]);

    return AssetImageWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetImageWrapper);

/***/ }),

/***/ 2591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2592);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(540);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(760);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(716);
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

/***/ 2592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2593);
/* harmony import */ var _TrailingStop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2615);
/* harmony import */ var _PercentUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2618);
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2622);
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

/***/ 2593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2594);
/* harmony import */ var components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2612);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(407);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2599);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2259);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2614);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(702);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(579);
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

/***/ 2594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1957);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2592);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2596);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(772);
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
            baseAsset: "USD",
            quoteAsset: "BTC",
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
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.asset" })
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
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentBaseAmount",
                                defaultChecked: true
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.balance_value" })
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
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.spread" })
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
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.common.asset" })
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
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentQuoteAmount",
                                defaultChecked: true
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.balance_value" })
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
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.spread" })
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
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.default_price" })
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
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "bots.spread_trande.get_price_from_market" })
                    )
                )
            );
        }
    }]);

    return Create;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 2595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);


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

/***/ 2596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetLabel", function() { return AssetLabel; });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1957);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2597);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2599);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2453);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2600);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(560);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(562);
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

/***/ 2599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2595);
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

/***/ 2612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2596);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2613);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.asset" })
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentBaseAmount",
                                checked: !this.state.base.percent,
                                onChange: this.handleChange
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.balance_value" })
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.spread" })
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.common.asset" })
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.balance_percent" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                type: "radio",
                                value: false,
                                name: "percentQuoteAmount",
                                checked: !this.state.quote.percent,
                                onChange: this.handleChange
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.balance_value" })
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
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.spread" })
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.default_price" })
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "bots.spread_trande.get_price_from_market" })
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

/***/ 2614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2595);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2599);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2259);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(581);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(579);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(407);
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

/***/ 2615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2616);
/* harmony import */ var components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2617);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(407);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2599);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2259);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2614);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(702);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(579);
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

/***/ 2616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1957);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2592);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2596);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(772);
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
            sellAsset: "BTC",
            getAsset: "USD",
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

/***/ 2617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2596);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2613);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
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

/***/ 2618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2619);
/* harmony import */ var components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2621);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2614);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(407);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2595);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2599);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2259);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(702);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(579);
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
            var state, log, accountBalances, balance, amount, orders, processOrders, promises, lowPrice, ticker, price, baseAssetAmount, quoteAssetAmount, obj, order;
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

                            if (!(processOrders.length > 0)) {
                                _context2.next = 18;
                                break;
                            }

                            _context2.next = 18;
                            return _this.base.update();

                        case 18:
                            promises = processOrders.map(function () {
                                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(order) {
                                    var amountToMarket, quoteAssetAmount, percentOnMarket, baseAssetAmount, obj;
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
                                                    quoteAssetAmount = {
                                                        asset_id: _this.quote.id,
                                                        amount: Math.min(Number(accountBalances.quote), Number(order.quote))
                                                    }, percentOnMarket = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.base.options.market_fee_percent).div(100 * 100), baseAssetAmount = {
                                                        asset_id: _this.base.id,
                                                        amount: Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(order.base).times(1 + Number(state.spread) / 100 + percentOnMarket.toNumber())
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
                            _context2.next = 21;
                            return Promise.all(promises);

                        case 21:
                            lowPrice = null;

                            state.orders.forEach(function (order) {
                                var price = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(order.quote).div(order.base);
                                if (!lowPrice || price.isLessThan(lowPrice)) lowPrice = price;
                            });

                            _context2.next = 25;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.get_ticker(_this.quote.symbol, _this.base.symbol);

                        case 25:
                            ticker = _context2.sent;
                            price = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ticker.lowest_ask);


                            log("Orders exists: " + !!lowPrice + ", balance > amount: " + (balance > amount) + ", lowPrice - price > distance: " + (!!lowPrice && lowPrice.times(1 - Number(state.distance) / 100).isGreaterThan(price)));

                            if (!(balance > amount && (!lowPrice || lowPrice.times(1 - Number(state.distance) / 100).isGreaterThan(price)))) {
                                _context2.next = 38;
                                break;
                            }

                            baseAssetAmount = {
                                asset_id: _this.base.id,
                                amount: amount
                            };
                            quoteAssetAmount = {
                                asset_id: _this.quote.id,
                                amount: price.times(amount)
                            };
                            _context2.next = 33;
                            return _this.account.buy(quoteAssetAmount, baseAssetAmount);

                        case 33:
                            obj = _context2.sent;
                            order = {
                                state: "sell",
                                base: amount,
                                quote: quoteAssetAmount.amount.toNumber(),
                                id: obj ? obj.id : "1.7.0"
                            };


                            state.orders.push(order);
                            log("sell " + _this.base.symbol + ": amount=" + amount + ", price=" + price.toNumber() + " " + _this.base.symbol + "/" + _this.quote.symbol);

                            if (!["", "-"].includes(state.balance)) state.balance = Number(state.balance) - amount;

                        case 38:

                            state.orders = state.orders.filter(function (order) {
                                return order.id !== null;
                            });

                            _this.storage.write(state);

                        case 40:
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

/***/ 2619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1957);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2592);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2596);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2595);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2620);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
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
            base: "CNY",
            quote: "BTS",
            amount: 1,
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

/***/ 2620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
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

/***/ 2621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2596);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2613);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2620);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
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

/***/ 2622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(705);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90cy44MTZkYjRhZTFjNzllZTc3NzY3MS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0SW1hZ2UuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL0JvdHMuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9TcHJlYWRUcmFkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGUuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvYXBpcy5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0Fzc2V0U2VsZWN0b3IuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvYXNzZXRzLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9UcmFpbGluZ1N0b3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL1BlcmNlbnRVcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvQ3JlYXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvU3RhdGUuanN4Iiwid2VicGFjazovLy9hcHAvc3RvcmVzL0JvdHNTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4vQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIEFzc2V0SW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiB0cnVlLFxuICAgICAgICBtYXhXaWR0aDogMjBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWdFcnJvcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0ICE9PSBucC5hc3NldCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhXaWR0aCAhPT0gbnAubWF4V2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2hpdGVMaXN0ICE9PSBucC53aGl0ZUxpc3QgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1nRXJyb3IgIT09IG5zLmltZ0Vycm9yXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uRXJyb3IoaW1nTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VOb25lVG9CdHMpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW1xuICAgICAgICAgICAgICAgICAgICBpbWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICBdLnNyYyA9IGAke19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzL2J0cy5wbmdgO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGltZ0Vycm9yOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthc3NldH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEltYWdlTmFtZShhc3NldCkge1xuICAgICAgICAgICAgbGV0IHN5bWJvbCA9IGFzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICAvLyBpZiAoc3ltYm9sID09PSBcIk9QRU4uQlRDXCIgfHwgc3ltYm9sID09PSBcIkdERVguQlRDXCIpIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICAvLyBpZiAoc3ltYm9sLnN0YXJ0c1dpdGgoXCJFU0NST1cuXCIpKSByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgLy8gbGV0IGltZ05hbWUgPSBhc3NldC5nZXQoXCJzeW1ib2xcIikuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgLy9yZXR1cm4gaW1nTmFtZS5sZW5ndGggPT09IDIgPyBpbWdOYW1lWzFdIDogaW1nTmFtZVswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGltZ05hbWUgPSBnZXRJbWFnZU5hbWUoYXNzZXQpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgcmVmPXtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uLWhpZGUtc21hbGxcIlxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX29uRXJyb3IuYmluZCh0aGlzLCBpbWdOYW1lKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLCBtYXJnaW5SaWdodDogNX19XG4gICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Bc3NldEltYWdlID0gQXNzZXRXcmFwcGVyKEFzc2V0SW1hZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldEltYWdlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPEFzc2V0SW1hZ2Ugey4uLnRoaXMucHJvcHN9IGFzc2V0PXt0aGlzLnByb3BzLm5hbWV9IC8+O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge1JlZGlyZWN0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jbGFzcyBCb3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gQm90TWFuYWdlci5zdHJhdGVnaWVzO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0U3RyYXRlZ3k6IE9iamVjdC5rZXlzKHRoaXMuc3RyYXRlZ2llcylbMF0sXG4gICAgICAgICAgICBib3RzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMCxcbiAgICAgICAgICAgIGVuYWJsZUNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBib3RSdW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBib3RzID0gQm90TWFuYWdlci5nZXRCb3RzKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJvdHMsXG4gICAgICAgICAgICBzZWxlY3RCb3Q6IDAsXG4gICAgICAgICAgICBib3RSdW46IGJvdHNbMF0gPyBib3RzWzBdLnJ1biA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVN0cmF0ZWd5ID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RTdHJhdGVneTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNoYW5nZUJvdCA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdEJvdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdEJvdCxcbiAgICAgICAgICAgIGJvdFJ1bjogdGhpcy5zdGF0ZS5ib3RzW3NlbGVjdEJvdF0ucnVuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDcmVhdGUgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBib3RzID0gdGhpcy5zdGF0ZS5ib3RzO1xuXG4gICAgICAgIGJvdHMucHVzaChcbiAgICAgICAgICAgIEJvdE1hbmFnZXIuY3JlYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3ksXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0uc3RhdGVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym90c30pO1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0ZUZvcm0udmFsaWRhdGUpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0udmFsaWRhdGUoXCJuYW1lXCIsIHRoaXMuY3JlYXRlRm9ybS5zdGF0ZS5uYW1lKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRW5hYmxlQ3JlYXRlID0gZW5hYmxlQ3JlYXRlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlQ3JlYXRlICE9IGVuYWJsZUNyZWF0ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZUNyZWF0ZX0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdGFydEJvdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGJvdCA9IHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF07XG5cbiAgICAgICAgYXdhaXQgYm90LnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvdFJ1bjogYm90LnJ1bn0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdG9wQm90ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgYm90ID0gdGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XTtcblxuICAgICAgICBhd2FpdCBib3Quc3RvcCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtib3RSdW46IGJvdC5ydW59KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRGVsZXRlQm90ID0gKCkgPT4ge1xuICAgICAgICBCb3RNYW5hZ2VyLmRlbGV0ZSh0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJvdHM6IEJvdE1hbmFnZXIuZ2V0Qm90cyh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KSxcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwic3RhcnQgcmVuZGVyIG1haW4gcGFnZVwiLCB0aGlzLnByb3BzKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17XCIvXCJ9IC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IENyZWF0ZUZvcm0gPSB0aGlzLnN0cmF0ZWdpZXNbdGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneV0uY3JlYXRlO1xuXG4gICAgICAgIGxldCBib3QgPSB0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdIHx8IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjAsIG92ZXJmbG93OiBcInZpc2libGVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtMTIgbWVkaXVtLTYgbGFyZ2UtNSBsYXJnZS1vZmZzZXQtMSBmdWxsLXdpZHRoLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIiBzdHlsZT17e21hcmdpblRvcDogMzB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zZWxlY3Rfc3RyYXRlZ3lcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBidHMtc2VsZWN0IFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VTdHJhdGVneX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RyYXRlZ2llcykubWFwKG5hbWUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtuYW1lfSB2YWx1ZT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Zm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0gPSBmb3JtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVDcmVhdGU9e3RoaXMuaGFuZGxlRW5hYmxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5lbmFibGVDcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5jcmVhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIiBzdHlsZT17e21hcmdpblRvcDogMzB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5ib3Rfc3RhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBidHMtc2VsZWN0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0Qm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5ib3RzLm1hcCgoYm90LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Ym90Lm5hbWV9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Ym90Lm5hbWV9ICgke2JvdC5jb25zdHJ1Y3Rvci5uYW1lfSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxib3Quc3RhdGUga2V5PXtib3QubmFtZX0gYm90PXtib3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0Qm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmJvdFJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zdGFydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3RvcEJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuYm90UnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnN0b3BcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbGV0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ib3RSdW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uZGVsZXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnNlbGVjdF9ib3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBCb3RzLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBTcHJlYWRUcmFkZSBmcm9tIFwiLi9TcHJlYWRUcmFkZVwiO1xuaW1wb3J0IFRyYWlsaW5nU3RvcCBmcm9tIFwiLi9UcmFpbGluZ1N0b3BcIjtcbmltcG9ydCBQZXJjZW50VXAgZnJvbSBcIi4vUGVyY2VudFVwXCI7XG4vL2ltcG9ydCBSZWxhdGl2ZU9yZGVycyBmcm9tIFwiLi9SZWxhdGl2ZU9yZGVyc1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcInN0b3Jlcy9Cb3RzU3RvcmFnZVwiO1xuXG52YXIgYm90cyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RyYXRlZ2llczoge1xuICAgICAgICBTcHJlYWRUcmFkZSxcbiAgICAgICAgVHJhaWxpbmdTdG9wLFxuICAgICAgICAvL1JlbGF0aXZlT3JkZXJzLFxuICAgICAgICBQZXJjZW50VXBcbiAgICB9LFxuXG4gICAgY3JlYXRlKHN0cmF0ZWd5LCBhY2NvdW50LCBpbml0RGF0YSkge1xuICAgICAgICBsZXQgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske2luaXREYXRhLm5hbWV9XWApO1xuXG4gICAgICAgIGxldCBib3QgPSBuZXcgdGhpcy5zdHJhdGVnaWVzW3N0cmF0ZWd5XShhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSk7XG4gICAgICAgIGJvdHNbYF9fYm90c19fJHtzdG9yYWdlLm5hbWV9YF0gPSBib3Q7XG5cbiAgICAgICAgcmV0dXJuIGJvdDtcbiAgICB9LFxuXG4gICAgZGVsZXRlKGJvdCkge1xuICAgICAgICBsZXQgbmFtZSA9IGBfX2JvdHNfXyR7Ym90LnN0b3JhZ2UubmFtZX1gO1xuXG4gICAgICAgIGJvdHNbbmFtZV0uZGVsZXRlKCk7XG4gICAgICAgIGRlbGV0ZSBib3RzW25hbWVdO1xuICAgIH0sXG5cbiAgICBnZXRCb3RzKGFjY291bnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldEJvdHNcIiwgT2JqZWN0LmtleXMoYm90cykpXG5cbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuZ2V0QWNjb3VudEJvdChhY2NvdW50KVxuICAgICAgICAgICAgLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChib3RzW2tleV0pIHJldHVybiBib3RzW2tleV07XG5cbiAgICAgICAgICAgICAgICBsZXQgW3N0cmF0ZWd5LCBuYW1lXSA9IGtleVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXl9fYm90c19fKC4rKTo6KFxcdyspXFxbKFxcdyspXFxdLywgXCIkMiwkM1wiKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIsXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdHJhdGVneSB8fCAhbmFtZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske25hbWV9XWApO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJvdCA9IG5ldyB0aGlzLnN0cmF0ZWdpZXNbc3RyYXRlZ3ldKGFjY291bnQsIHN0b3JhZ2UpO1xuICAgICAgICAgICAgICAgIGJvdHNba2V5XSA9IGJvdDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm90O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZWwgPT4gZWwpO1xuICAgIH0sXG5cbiAgICBoYXNCb3QoYWNjb3VudCwgc3RyYXRlZ3ksIG5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBuYW1lIHN0YXRlZ3lcIiwgYWNjb3VudCwgc3RyYXRlZ3ksIG5hbWUpO1xuICAgICAgICByZXR1cm4gU3RvcmFnZS5oYXMoYCR7YWNjb3VudH06OiR7c3RyYXRlZ3l9WyR7bmFtZX1dYCk7XG4gICAgfVxufTtcbiIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL1N0YXRlXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwibGliL2JvdHMvYWNjb3VudFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcblxuY2xhc3MgU3ByZWFkVHJhZGUge1xuICAgIHN0YXRpYyBjcmVhdGUgPSBDcmVhdGU7XG4gICAgc3RhdGUgPSBTdGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG5ldyBBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xuICAgICAgICAgICAgc3RvcmFnZS5pbml0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpbml0RGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIGJhc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGluaXREYXRhLmJhc2VBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogaW5pdERhdGEuYmFzZUJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIHNwcmVhZDogaW5pdERhdGEuYmFzZVNwcmVhZCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5iYXNlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50OiBpbml0RGF0YS5wZXJjZW50QmFzZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWQsIHByaWNlIGFuZCBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVvdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGluaXREYXRhLnF1b3RlQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IGluaXREYXRhLnF1b3RlQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkOiBpbml0RGF0YS5xdW90ZVNwcmVhZCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5xdW90ZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudDogaW5pdERhdGEucGVyY2VudFF1b3RlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZCwgcHJpY2UgYW5kIGFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmcm9tTWFya2V0OiBpbml0RGF0YS5mcm9tTWFya2V0LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRQcmljZTogaW5pdERhdGEuZGVmYXVsdFByaWNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmFtZSA9IHN0b3JhZ2UucmVhZCgpLm5hbWU7XG5cbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnQoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG5cbiAgICAgICAgdGhpcy5iYXNlID0gYXdhaXQgQXNzZXRzW3N0YXRlLmJhc2UuYXNzZXRdO1xuICAgICAgICB0aGlzLnF1b3RlID0gYXdhaXQgQXNzZXRzW3N0YXRlLnF1b3RlLmFzc2V0XTtcblxuICAgICAgICBpZiAoW3RoaXMuYmFzZS5pc3N1ZXIsIHRoaXMucXVvdGUuaXNzdWVyXS5pbmNsdWRlcyhcIjEuMi4wXCIpKSB7XG4gICAgICAgICAgICBpZiAoW3RoaXMuYmFzZS5pZCwgdGhpcy5xdW90ZS5pZF0uaW5jbHVkZXMoXCIxLjMuMFwiKSlcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZlZWQgPSB0aGlzLmdldENvcmVGZWVkO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5iYXNlLmlzc3VlciA9PSB0aGlzLnF1b3RlLmlzc3VlcilcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZlZWQgPSB0aGlzLmdldFNtYXJ0RmVlZDtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRVSUFGZWVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRVSUFGZWVkO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgc2V0dGluZzogXCJ3YWxsZXRMb2NrVGltZW91dFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhc3luYyBzdG9wKCkge1xuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXVlRXZlbnRzO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZSgpO1xuICAgIH1cblxuICAgIHF1ZXVlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gdGhpcy5xdWV1ZUV2ZW50c1xuICAgICAgICAgICAgLnRoZW4odGhpcy5jaGVja09yZGVycylcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvci5iaW5kKHRoaXMubG9nZ2VyKSk7XG4gICAgfTtcblxuICAgIGNoZWNrT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwic3RhdGVcIiwgc3RhdGUpO1xuXG4gICAgICAgIGxldCB0aWNrZXIgPSBhd2FpdCBBcGlzLmRiLmdldF90aWNrZXIoXG4gICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2xcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmRlZmF1bHRQcmljZSA9IHN0YXRlLmRlZmF1bHRQcmljZTtcblxuICAgICAgICBsZXQgZmVlZFByaWNlID0gc3RhdGUuZnJvbU1hcmtldFxuICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKHRpY2tlci5sYXRlc3QpXG4gICAgICAgICAgICAgICAgOiBhd2FpdCB0aGlzLmdldEZlZWQoKSxcbiAgICAgICAgICAgIGJ1eVByaWNlID0gZmVlZFByaWNlLnRpbWVzKDEgLSBzdGF0ZS5iYXNlLnNwcmVhZCAvIDEwMCkudG9OdW1iZXIoKSxcbiAgICAgICAgICAgIHNlbGxQcmljZSA9IGZlZWRQcmljZVxuICAgICAgICAgICAgICAgIC50aW1lcygxICsgc3RhdGUucXVvdGUuc3ByZWFkIC8gMTAwKVxuICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuXG4gICAgICAgIGZlZWRQcmljZSA9IGZlZWRQcmljZS50b051bWJlcigpO1xuXG4gICAgICAgIGlmIChmZWVkUHJpY2UgPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBidXlPcmRlciA9IHN0YXRlLmJhc2Uub3JkZXIuaWRcbiAgICAgICAgICAgICAgICA/IChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFtzdGF0ZS5iYXNlLm9yZGVyLmlkXSkpWzBdXG4gICAgICAgICAgICAgICAgOiBzdGF0ZS5iYXNlLm9yZGVyLmlkLFxuICAgICAgICAgICAgc2VsbE9yZGVyID0gc3RhdGUucXVvdGUub3JkZXIuaWRcbiAgICAgICAgICAgICAgICA/IChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFtzdGF0ZS5xdW90ZS5vcmRlci5pZF0pKVswXVxuICAgICAgICAgICAgICAgIDogc3RhdGUucXVvdGUub3JkZXIuaWQsXG4gICAgICAgICAgICBhY2NvdW50QmFsYW5jZXMgPSAoYXdhaXQgdGhpcy5hY2NvdW50LmJhbGFuY2VzKFxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5pZCxcbiAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLmlkXG4gICAgICAgICAgICApKS5yZWR1Y2UoKGFjYywgYmFsYW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5pZCA9PT0gYmFsYW5jZS5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA/IChhY2MuYmFzZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSlcbiAgICAgICAgICAgICAgICAgICAgOiAoYWNjLnF1b3RlID0gQmlnTnVtYmVyKGJhbGFuY2UuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICAgIGJhc2VCYWxhbmNlID1cbiAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLmJhbGFuY2UgPT09IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmJhc2UuYmFsYW5jZSA9PT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50QmFsYW5jZXMuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihhY2NvdW50QmFsYW5jZXMuYmFzZSwgc3RhdGUuYmFzZS5iYWxhbmNlKSxcbiAgICAgICAgICAgIHF1b3RlQmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgc3RhdGUucXVvdGUuYmFsYW5jZSA9PT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUucXVvdGUuYmFsYW5jZSA9PT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50QmFsYW5jZXMucXVvdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5taW4oYWNjb3VudEJhbGFuY2VzLnF1b3RlLCBzdGF0ZS5xdW90ZS5iYWxhbmNlKSxcbiAgICAgICAgICAgIGJhc2VBbW91bnQgPVxuICAgICAgICAgICAgICAgIHN0YXRlLmJhc2UucGVyY2VudC50b1N0cmluZygpID09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhc2VCYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUuYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmJhc2UuYW1vdW50LFxuICAgICAgICAgICAgcXVvdGVBbW91bnQgPVxuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLnBlcmNlbnQudG9TdHJpbmcoKSA9PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICA/IEJpZ051bWJlcihxdW90ZUJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5xdW90ZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLnF1b3RlLmFtb3VudDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInByaWNlc1wiLCBidXlQcmljZSwgZmVlZFByaWNlLCBzZWxsUHJpY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9yZGVyc1wiLCBidXlPcmRlciwgc2VsbE9yZGVyKTtcblxuICAgICAgICBpZiAoYnV5T3JkZXIpIHtcbiAgICAgICAgICAgIC8vY2hlY2sgUHJpY2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBjaGVjayBidXlPcmRlcjogbW92ZT0ke01hdGguYWJzKFxuICAgICAgICAgICAgICAgICAgICBidXlQcmljZSAtIHN0YXRlLmJhc2Uub3JkZXIucHJpY2VcbiAgICAgICAgICAgICAgICApID5cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gYnV5UHJpY2UpIC9cbiAgICAgICAgICAgICAgICAgICAgICAgIDJ9LCBmaWxsPSR7dGlja2VyLmxvd2VzdF9hc2sgPD0gYnV5UHJpY2V9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhidXlQcmljZSAtIHN0YXRlLmJhc2Uub3JkZXIucHJpY2UpID5cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gYnV5UHJpY2UpIC8gMiAmJlxuICAgICAgICAgICAgICAgIHRpY2tlci5sb3dlc3RfYXNrID4gYnV5UHJpY2VcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3JkZXJcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgICAgICAgICAgICAgIGBtb3ZlIGJ1eSBvcmRlcjogJHtidXlQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5jYW5jZWxPcmRlcihzdGF0ZS5iYXNlLm9yZGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFtb3VudCBpbiBvcmRlclxuICAgICAgICAgICAgICAgIGxldCBvcmRlckFtb3VudCA9IEJpZ051bWJlcihidXlPcmRlci5mb3Jfc2FsZSlcbiAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcblxuICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc3RhdGUuYmFzZS5iYWxhbmNlKSArIG9yZGVyQW1vdW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGFkZCB0byBzZWxsIGJhbGFuY2VcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50ID4gb3JkZXJBbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUuYmFsYW5jZSA9IEJpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50IC0gb3JkZXJBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUucXVvdGUuYmFsYW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IE1hdGgubWluKGJhc2VCYWxhbmNlLCBiYXNlQW1vdW50KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBCaWdOdW1iZXIoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KGJ1eVByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGJ1eVByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgLT0gYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKC9eMS43LlxcZCokLy50ZXN0KHN0YXRlLmJhc2Uub3JkZXIuaWQpKSB7XG4gICAgICAgICAgICAgICAgLy8gZmlsbCBvcmRlclxuICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlID0gQmlnTnVtYmVyKHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUucXVvdGUuYmFsYW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcblxuICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBjcmVhdGUgYnV5T3JkZXI6IGJhbGFuY2U9JHtiYXNlQmFsYW5jZSA+PVxuICAgICAgICAgICAgICAgICAgICBiYXNlQW1vdW50fSwgZmlsbD0ke3RpY2tlci5sb3dlc3RfYXNrIDw9IGJ1eVByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYmFzZUJhbGFuY2UgPj0gYmFzZUFtb3VudCAmJiB0aWNrZXIubG93ZXN0X2FzayA+IGJ1eVByaWNlKSB7XG4gICAgICAgICAgICAgICAgLy9idXlcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICAgICAgICAgICAgICBgYnV5OiAke2J1eVByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke3RoaXMuYmFzZS5zeW1ib2x9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcigxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYnV5UHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYnV5UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGJhc2VBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSAtPSBiYXNlQW1vdW50KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGxPcmRlcikge1xuICAgICAgICAgICAgLy9jaGVjayBQcmljZVxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgYGNoZWNrIHNlbGxPcmRlcjogbW92ZT0ke01hdGguYWJzKFxuICAgICAgICAgICAgICAgICAgICBzZWxsUHJpY2UgLSBzdGF0ZS5xdW90ZS5vcmRlci5wcmljZVxuICAgICAgICAgICAgICAgICkgPlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBzZWxsUHJpY2UpIC9cbiAgICAgICAgICAgICAgICAgICAgICAgIDJ9LCBmaWxsPSR7dGlja2VyLmhpZ2hlc3RfYmlkID49IHNlbGxQcmljZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIE1hdGguYWJzKHNlbGxQcmljZSAtIHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlKSA+XG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGZlZWRQcmljZSAtIHNlbGxQcmljZSkgLyAyICYmXG4gICAgICAgICAgICAgICAgdGlja2VyLmhpZ2hlc3RfYmlkIDwgc2VsbFByaWNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIG9yZGVyXG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICAgICAgICAgICAgICBgbW92ZSBzZWxsIG9yZGVyOiAke3NlbGxQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5jYW5jZWxPcmRlcihzdGF0ZS5xdW90ZS5vcmRlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhbW91bnQgaW4gb3JkZXJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXJBbW91bnQgPSBCaWdOdW1iZXIoc2VsbE9yZGVyLmZvcl9zYWxlKVxuICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc3RhdGUucXVvdGUuYmFsYW5jZSkgKyBvcmRlckFtb3VudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgdG8gYnV5IGJhbGFuY2VcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmFtb3VudCA+IG9yZGVyQW1vdW50ICYmXG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2UuYmFsYW5jZSA9IEJpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmFtb3VudCAtIG9yZGVyQW1vdW50XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5xdW90ZS5vcmRlci5wcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IE1hdGgubWluKHF1b3RlQmFsYW5jZSwgcXVvdGVBbW91bnQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogc2VsbFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSAtPSBhbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKC9eMS43LlxcZCokLy50ZXN0KHN0YXRlLnF1b3RlLm9yZGVyLmlkKSkge1xuICAgICAgICAgICAgICAgIC8vIGZpbGwgb3JkZXJcbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgPSBCaWdOdW1iZXIoc3RhdGUucXVvdGUub3JkZXIuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgY3JlYXRlIHNlbGxPcmRlcjogYmFsYW5jZT0ke3F1b3RlQmFsYW5jZSA+PVxuICAgICAgICAgICAgICAgICAgICBxdW90ZUFtb3VudH0sIGZpbGw9JHt0aWNrZXIuaGlnaGVzdF9iaWQgPj0gc2VsbFByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocXVvdGVCYWxhbmNlID49IHF1b3RlQW1vdW50ICYmIHRpY2tlci5oaWdoZXN0X2JpZCA8IHNlbGxQcmljZSkge1xuICAgICAgICAgICAgICAgIC8vYnV5XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgYHNlbGw6ICR7c2VsbFByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxsUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHNlbGxQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogcXVvdGVBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlIC09IHF1b3RlQW1vdW50KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdG9yYWdlLndyaXRlKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgYXN5bmMgZ2V0Q29yZUZlZWQoKSB7XG4gICAgICAgIGxldCByYXRlO1xuXG4gICAgICAgIGlmICh0aGlzLmJhc2UuaWQgPT0gXCIxLjMuMFwiKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnF1b3RlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmF0ZSA9IHRoaXMucXVvdGUub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XG4gICAgICAgICAgICByYXRlID0gdGhpcy5iYXNlLm9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPVxuICAgICAgICAgICAgcmF0ZS5iYXNlLmFzc2V0X2lkID09IHRoaXMuYmFzZS5pZFxuICAgICAgICAgICAgICAgID8gW3JhdGUuYmFzZSwgcmF0ZS5xdW90ZV1cbiAgICAgICAgICAgICAgICA6IFtyYXRlLnF1b3RlLCByYXRlLmJhc2VdO1xuXG4gICAgICAgIHJldHVybiBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQpLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbikpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNtYXJ0RmVlZCgpIHtcbiAgICAgICAgbGV0IGJ0cyA9IGF3YWl0IEFzc2V0c1tcImJ0c1wiXTtcbiAgICAgICAgYXdhaXQgdGhpcy5iYXNlLnVwZGF0ZSgpO1xuICAgICAgICBsZXQgcmF0ZSA9IHRoaXMuYmFzZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPVxuICAgICAgICAgICAgcmF0ZS5iYXNlLmFzc2V0X2lkID09IFwiMS4zLjBcIlxuICAgICAgICAgICAgICAgID8gW3JhdGUuYmFzZSwgcmF0ZS5xdW90ZV1cbiAgICAgICAgICAgICAgICA6IFtyYXRlLnF1b3RlLCByYXRlLmJhc2VdO1xuXG4gICAgICAgIGxldCBiYXNlUHJpY2UgPSBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAuZGl2KDEwICoqIGJ0cy5wcmVjaXNpb24pXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQpLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5xdW90ZS51cGRhdGUoKTtcbiAgICAgICAgcmF0ZSA9IHRoaXMucXVvdGUub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgIGlmIChyYXRlLmJhc2UuYXNzZXRfaWQgPT0gXCIxLjMuMFwiKSB7XG4gICAgICAgICAgICBiYXNlID0gcmF0ZS5iYXNlO1xuICAgICAgICAgICAgcXVvdGUgPSByYXRlLnF1b3RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFzZSA9IHJhdGUucXVvdGU7XG4gICAgICAgICAgICBxdW90ZSA9IHJhdGUuYmFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBxdW90ZVByaWNlID0gQmlnTnVtYmVyKGJhc2UuYW1vdW50KVxuICAgICAgICAgICAgLmRpdigxMCAqKiBidHMucHJlY2lzaW9uKVxuICAgICAgICAgICAgLmRpdihCaWdOdW1iZXIocXVvdGUuYW1vdW50KS5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pKTtcblxuICAgICAgICByZXR1cm4gcXVvdGVQcmljZS5kaXYoYmFzZVByaWNlKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRVSUFGZWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJpY2VcbiAgICAgICAgICAgID8gQmlnTnVtYmVyKHRoaXMuZGVmYXVsdFByaWNlKVxuICAgICAgICAgICAgOiBhd2FpdCB0aGlzLmJpbmFuY2VQcmljZSh0aGlzLmJhc2Uuc3ltYm9sLCB0aGlzLnF1b3RlLnN5bWJvbCk7XG4gICAgfVxuXG4gICAgYXN5bmMgYmluYW5jZVByaWNlKGJhc2UsIHF1b3RlKSB7XG4gICAgICAgIGxldCBhc3NldCA9IGAke3F1b3RlLnNwbGl0KFwiLlwiKS5zbGljZSgtMSlbMF19JHtcbiAgICAgICAgICAgIGJhc2Uuc3BsaXQoXCIuXCIpLnNsaWNlKC0xKVswXVxuICAgICAgICB9YFxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiVVNEXCIsIFwiVVNEVFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYGdldCBhc3NldDogJHthc3NldH1gKTtcbiAgICAgICAgdGhpcy5wcmljZUFycmF5ID0gdGhpcy5wcmljZUFycmF5IHx8IFtdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvL2Fzc2V0ID0gXCJCVENVU0RUXCJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgIGBodHRwczovL2FwaS5iaW5hbmNlLmNvbS9hcGkvdjEvdHJhZGVzP3N5bWJvbD0ke2Fzc2V0fSZsaW1pdD0xYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhpcy5wcmljZUFycmF5LnB1c2goZGF0YVswXS5wcmljZSk7XG4gICAgICAgICAgICAvL3RoaXMucHJpY2VBcnJheS5wdXNoKDEwKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXG4gICAgICAgICAgICAgICAgYEVycm9yIEJpbmFuY2UgcmVxdWVzdDogJHthc3NldH0sIGVycm9yOiAke2Vycm9yfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmljZUFycmF5Lmxlbmd0aCA+IDEwKSB0aGlzLnByaWNlQXJyYXkuc2hpZnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZUFycmF5Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gdGhpcy5wcmljZUFycmF5XG4gICAgICAgICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBhLnBsdXMoYiksIEJpZ051bWJlcigwKSlcbiAgICAgICAgICAgICAgICAgIC5kaXYodGhpcy5wcmljZUFycmF5Lmxlbmd0aClcbiAgICAgICAgICAgIDogQmlnTnVtYmVyKDApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ByZWFkVHJhZGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90TWFuYWdlciBmcm9tIFwibGliL2JvdHNcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIENyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGJhc2VBc3NldDogXCJVU0RcIixcbiAgICAgICAgcXVvdGVBc3NldDogXCJCVENcIixcbiAgICAgICAgYmFzZUFtb3VudDogMTAsXG4gICAgICAgIHF1b3RlQW1vdW50OiAwLjAxLFxuICAgICAgICBiYXNlU3ByZWFkOiAxMCxcbiAgICAgICAgcXVvdGVTcHJlYWQ6IDEwLFxuICAgICAgICBiYXNlQmFsYW5jZTogMTAwLFxuICAgICAgICBxdW90ZUJhbGFuY2U6IDAuMSxcbiAgICAgICAgcGVyY2VudEJhc2VBbW91bnQ6IGZhbHNlLFxuICAgICAgICBwZXJjZW50UXVvdGVBbW91bnQ6IGZhbHNlLFxuICAgICAgICB2YWxpZGF0ZTogW1wibmFtZVwiXVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlID0gZGVib3VuY2UodGhpcy5hc3NldFZhbGlkYXRlLCAyMDApO1xuICAgIH1cblxuICAgIGFzc2V0VmFsaWRhdGUgPSBhc3luYyBuYW1lID0+IHtcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5zdGF0ZVtuYW1lXTtcbiAgICAgICAgbGV0IGJsb2NrY2hhaW5Bc3NldHMgPSAoYXdhaXQgQXBpcy5kYi5saXN0X2Fzc2V0cyhhc3NldCwgMSkpWzBdO1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIGlmIChhc3NldCAhPT0gYmxvY2tjaGFpbkFzc2V0cy5zeW1ib2wpIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGUgPSB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodGhpcy5zdGF0ZS52YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID1cbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgID8gZXZlbnQudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgOiBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHZhbHVlKTtcblxuICAgICAgICBpZiAoW1wiYmFzZUFzc2V0XCIsIFwicXVvdGVBc3NldFwiXS5pbmNsdWRlcyhuYW1lKSlcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQXNzZXRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUFzc2V0XCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUJhbGFuY2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUJhbGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwiLVwiICYmIGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQW1vdW50XCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBbW91bnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlU3ByZWFkXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVTcHJlYWRcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRQcmljZVwiOlxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oK3ZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbGlkYXRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodGhpcy5zdGF0ZS52YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLmJhbGFuY2VfcGVyY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFuZGUuYmFsYW5jZV92YWx1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFuZGUuc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VTcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnF1b3RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlQmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFuZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFuZGUuYmFsYW5jZV92YWx1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5zcHJlYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxdW90ZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZVNwcmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLmRlZmF1bHRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlZmF1bHRQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlZmF1bHRQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZWZhdWx0UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJkZWZhdWx0UHJpY2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmcm9tTWFya2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mcm9tTWFya2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5nZXRfcHJpY2VfZnJvbV9tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XG4iLCJpbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGI6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBjYWxsIEFwaXMuZGIuJHttZXRob2R9KCR7Wy4uLmFyZ3VtZW50c119KWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5kYl9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIGhpc3Rvcnk6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAuaGlzdG9yeV9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIG5ldHdvcms6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAubmV0d29ya19hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIGNyeXB0bzogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5jcnlwdG9fYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMobWV0aG9kLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSksXG5cbiAgICBvcmRlcnM6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAub3JkZXJzX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwicmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzc1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uLy4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IEFzeW5jU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3QvbGliL0FzeW5jXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQge2dldE15TWFya2V0c1F1b3RlcywgZ2V0QXNzZXRIaWRlTmFtZXNwYWNlc30gZnJvbSBcImJyYW5kaW5nXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmV4cG9ydCBjbGFzcyBBc3NldExhYmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogbnVsbFxuICAgIH07XG5cbiAgICBoaWRlUHJlZml4ID0gbmFtZSA9PiB7XG4gICAgICAgIGxldCBhcnIgPSBuYW1lLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgaWYgKGdldEFzc2V0SGlkZU5hbWVzcGFjZXMoKS5pbmNsdWRlcyhgJHthcnJbMF19LmApKSBhcnIuc2hpZnQoKTtcblxuICAgICAgICByZXR1cm4gYXJyLmpvaW4oXCIuXCIpO1xuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0QXNzZXROYW1lKHRoaXMucHJvcHMubmFtZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUpXG4gICAgICAgICAgICB0aGlzLnNldEFzc2V0TmFtZShuZXh0UHJvcHMubmFtZSk7XG4gICAgfVxuXG4gICAgc2V0QXNzZXROYW1lID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IGF3YWl0IEFzc2V0c1tuYW1lXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWU6IGFzc2V0LmJpdGFzc2V0X2RhdGFfaWQgPyBgYml0JHtuYW1lfWAgOiBuYW1lXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLmhpZGVQcmVmaXgodGhpcy5zdGF0ZS5uYW1lIHx8IHRoaXMucHJvcHMubmFtZSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbnZhciBvcHRpb25zID0gZ2V0TXlNYXJrZXRzUXVvdGVzKCkubWFwKG5hbWUgPT4gKHtcbiAgICB2YWx1ZTogbmFtZSxcbiAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17bmFtZX0gLz5cbn0pKTtcblxuY2xhc3MgQXNzZXRTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZU9wdGlvbnMgPSBkZWJvdW5jZSh0aGlzLnByb21pc2VPcHRpb25zLCAyMDApO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gb3B0aW9uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkNoYW5nZVwiLCBvcHRpb24pO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uID8gb3B0aW9uLnZhbHVlIDogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHJvbWlzZU9wdGlvbnMgPSBhc3luYyBpbnB1dFZhbHVlID0+IHtcbiAgICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gb3B0aW9ucy5maWx0ZXIoaSA9PiBpLnZhbHVlID09IGlucHV0VmFsdWUpO1xuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwICYmIGlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBhc3NldCA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKGlucHV0VmFsdWUsIDEpKVswXTtcblxuICAgICAgICAgICAgaWYgKGFzc2V0ICYmICFvcHRpb25zLmZpbmQoaSA9PiBpLnZhbHVlID09IGFzc2V0LnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17YXNzZXQuc3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtvcHRpb25zfTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5wcm9wcy52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX0+XG4gICAgICAgICAgICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRPcHRpb25zPXt0aGlzLnByb21pc2VPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hQcm9tcHRUZXh0PXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHMuYXNzZXRfc2VsZWN0b3Iud2FpdFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHMuYXNzZXRfc2VsZWN0b3IucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0U2VsZWN0b3I7XG4iLCJpbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuXG5jbGFzcyBBc3NldCB7XG4gICAgc3RhdGljIGdldChfLCBuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzW25hbWVdKSByZXR1cm4gdGhpc1tuYW1lXTtcblxuICAgICAgICByZXR1cm4gL14xXFwuM1xcLlxcZCskLy50ZXN0KG5hbWUpIHx8ICFpc05hTihuYW1lKVxuICAgICAgICAgICAgPyB0aGlzLmlkKG5hbWUpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0QXNzZXQobmFtZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEFzc2V0KF9zeW1ib2wpIHtcbiAgICAgICAgbGV0IHN5bWJvbCA9IF9zeW1ib2wudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubWFwIHx8IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLm1hcFtzeW1ib2xdKSByZXR1cm4gdGhpcy5tYXBbc3ltYm9sXTtcblxuICAgICAgICBsZXQgb2JqID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoc3ltYm9sLCAxKSlbMF07XG5cbiAgICAgICAgaWYgKCFvYmogfHwgb2JqLnN5bWJvbCAhPT0gc3ltYm9sKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBOb3QgZm91bmQgYXNzZXQgJHtzeW1ib2x9ISBCbG9ja2NoYWluIHJldHVybiAke1xuICAgICAgICAgICAgICAgICAgICBvYmogPyBvYmouc3ltYm9sIDogb2JqXG4gICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5tYXBbc3ltYm9sXSA9IG5ldyB0aGlzKG9iaik7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcFtzeW1ib2xdO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBpZChpZCkge1xuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubWFwIHx8IHt9O1xuICAgICAgICBsZXQgYXNzZXQgPSBPYmplY3Qua2V5cyh0aGlzLm1hcCkuZmluZChcbiAgICAgICAgICAgIHN5bWJvbCA9PiB0aGlzLm1hcFtzeW1ib2xdLmlkID09IGlkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGFzc2V0KSByZXR1cm4gdGhpcy5tYXBbYXNzZXRdO1xuXG4gICAgICAgIGFzc2V0ID0gKGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhbaWRdKSlbMF07XG5cbiAgICAgICAgaWYgKCFhc3NldCkgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgYXNzZXQgYnkgaWQgJHtpZH0hYCk7XG5cbiAgICAgICAgdGhpcy5tYXBbYXNzZXQuc3ltYm9sXSA9IG5ldyB0aGlzKGFzc2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwW2Fzc2V0LnN5bWJvbF07XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGZyb21QYXJhbShwYXJhbSkge1xuICAgICAgICByZXR1cm4ge2Ftb3VudDogcGFyYW0uYW1vdW50LCBhc3NldDogYXdhaXQgdGhpcy5pZChwYXJhbS5hc3NldF9pZCl9O1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5tYXAgfHwge307XG5cbiAgICAgICAgbGV0IGFzc2V0cyA9IGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWFwKS5tYXAoc3ltYm9sID0+IHRoaXMubWFwW3N5bWJvbF0uaWQpXG4gICAgICAgICk7XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IE9iamVjdC5hc3NpZ24odGhpcy5tYXBbYXNzZXQuc3ltYm9sXSwgYXNzZXQpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihycGNPYmopIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBycGNPYmopO1xuICAgIH1cblxuICAgIHRvUGFyYW0obnVtYmVyID0gMCkge1xuICAgICAgICByZXR1cm4ge2Ftb3VudDogbnVtYmVyLCBhc3NldF9pZDogdGhpcy5pZH07XG4gICAgfVxuXG4gICAgZmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLm1hcmtldF9mZWVfcGVyY2VudCAvIDEwMCAvIDEwMDtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGUoKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgKGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhbdGhpcy5pZF0pKVswXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJveHkoe30sIEFzc2V0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXNzZXRMYWJlbH0gZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIFN0YXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt2YWxpZGF0ZTogW119LCB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICBxdW90ZTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKG5hbWUsIHZhbHVlLCB0eXBlb2YgdmFsdWUpO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImJhc2VBbW91bnRcIjpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xuICAgICAgICAgICAgICAgIGJhc2UuYW1vdW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBlcmNlbnRCYXNlQW1vdW50XCI6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuc3RhdGUuYmFzZTtcbiAgICAgICAgICAgICAgICBiYXNlLnBlcmNlbnQgPSB2YWx1ZSA9PSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUJhbGFuY2VcIjpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xuICAgICAgICAgICAgICAgIGJhc2UuYmFsYW5jZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2V9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlU3ByZWFkXCI6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuc3RhdGUuYmFzZTtcbiAgICAgICAgICAgICAgICBiYXNlLnNwcmVhZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2V9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUFtb3VudFwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5hbW91bnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBlcmNlbnRRdW90ZUFtb3VudFwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5wZXJjZW50ID0gdmFsdWUgPT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUJhbGFuY2VcIjpcbiAgICAgICAgICAgICAgICBxdW90ZSA9IHRoaXMuc3RhdGUucXVvdGU7XG4gICAgICAgICAgICAgICAgcXVvdGUuYmFsYW5jZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1b3RlfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVTcHJlYWRcIjpcbiAgICAgICAgICAgICAgICBxdW90ZSA9IHRoaXMuc3RhdGUucXVvdGU7XG4gICAgICAgICAgICAgICAgcXVvdGUuc3ByZWFkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkZWZhdWx0UHJpY2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkZWZhdWx0UHJpY2U6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZnJvbU1hcmtldFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zyb21NYXJrZXQ6IGV2ZW50LnRhcmdldC5jaGVja2VkfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvL3RoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVVwZGF0ZUJvdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlTm93ID0gdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCk7XG4gICAgICAgIHRoaXMuc3RhdGUuYmFzZS5vcmRlciA9IHN0YXRlTm93LmJhc2Uub3JkZXI7XG4gICAgICAgIHRoaXMuc3RhdGUucXVvdGUub3JkZXIgPSBzdGF0ZU5vdy5xdW90ZS5vcmRlcjtcblxuICAgICAgICB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLndyaXRlKHRoaXMuc3RhdGUpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5iYXNlLmFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5iYXNlLmFzc2V0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5iYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuYmFzZS5wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLmJhbGFuY2VfcGVyY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IXRoaXMuc3RhdGUuYmFzZS5wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLmJhbGFuY2VfdmFsdWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5zcHJlYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2Uuc3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnF1b3RlLmFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5xdW90ZS5hc3NldH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5iYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5xdW90ZS5wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLmJhbGFuY2VfcGVyY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyF0aGlzLnN0YXRlLnF1b3RlLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFuZGUuYmFsYW5jZV92YWx1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhbmRlLnNwcmVhZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlLnNwcmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYW5kZS5kZWZhdWx0X3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVmYXVsdFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlZmF1bHRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImRlZmF1bHRQcmljZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZyb21NYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZyb21NYXJrZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFuZGUuZ2V0X3ByaWNlX2Zyb21fbWFya2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQm90fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnVwZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlO1xuIiwiaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuaW1wb3J0IHtUcmFuc2FjdGlvbkJ1aWxkZXJ9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuXG5jbGFzcyBBY2NvdW50IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBmZWVTeW1ib2wgPSBcIkJUU1wiKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIEFwaXMuZGIuZ2V0X2FjY291bnRfYnlfbmFtZShuYW1lKSxcbiAgICAgICAgICAgIEFzc2V0c1tmZWVTeW1ib2xdXG4gICAgICAgIF0pLnRoZW4oKFthY2MsIGZlZV0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjID0gYWNjO1xuICAgICAgICAgICAgdGhpcy5mZWVBc3NldCA9IGZlZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FuY2VsT3JkZXIoaWQpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRUcmFuc2FjdGlvbihcImxpbWl0X29yZGVyX2NhbmNlbFwiLCB7XG4gICAgICAgICAgICBmZWU6IHRoaXMuZmVlQXNzZXQudG9QYXJhbSgpLFxuICAgICAgICAgICAgZmVlX3BheWluZ19hY2NvdW50OiB0aGlzLmFjYy5pZCxcbiAgICAgICAgICAgIG9yZGVyOiBpZCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGJ1eShcbiAgICAgICAgYnV5U3ltYm9sLFxuICAgICAgICBiYXNlU3ltYm9sLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHByaWNlLFxuICAgICAgICBmaWxsX29yX2tpbGwgPSBmYWxzZSxcbiAgICAgICAgZXhwaXJlID0gXCIyMDI1LTAyLTAyVDAyOjAyOjAyXCJcbiAgICApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIGxldCBidXlBc3NldCA9IGF3YWl0IEFzc2V0c1tcbiAgICAgICAgICAgICAgICB0eXBlb2YgYnV5U3ltYm9sID09PSBcIm9iamVjdFwiID8gYnV5U3ltYm9sLmFzc2V0X2lkIDogYnV5U3ltYm9sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmFzZUFzc2V0ID0gYXdhaXQgQXNzZXRzW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYmFzZVN5bWJvbC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA6IGJhc2VTeW1ib2xcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBidXlBbW91bnQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgIEJpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGJ1eVN5bWJvbCA9PT0gXCJvYmplY3RcIiA/IGJ1eVN5bWJvbC5hbW91bnQgOiBhbW91bnRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiBidXlBc3NldC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc2VsbEFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhc2VTeW1ib2wuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICA6IEJpZ051bWJlcihhbW91bnQpLnRpbWVzKHByaWNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIGJhc2VBc3NldC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGlmIChidXlBbW91bnQgPT0gMCB8fCBzZWxsQW1vdW50ID09IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbW91bnQgZXF1YWwgMCFcIik7XG5cbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdGhpcy5zZW5kVHJhbnNhY3Rpb24oXCJsaW1pdF9vcmRlcl9jcmVhdGVcIiwge1xuICAgICAgICAgICAgZmVlOiB0aGlzLmZlZUFzc2V0LnRvUGFyYW0oKSxcbiAgICAgICAgICAgIHNlbGxlcjogdGhpcy5hY2MuaWQsXG4gICAgICAgICAgICBhbW91bnRfdG9fc2VsbDogYmFzZUFzc2V0LnRvUGFyYW0oc2VsbEFtb3VudCksXG4gICAgICAgICAgICBtaW5fdG9fcmVjZWl2ZTogYnV5QXNzZXQudG9QYXJhbShidXlBbW91bnQpLFxuICAgICAgICAgICAgZXhwaXJhdGlvbjogZXhwaXJlLFxuICAgICAgICAgICAgZmlsbF9vcl9raWxsOiBmaWxsX29yX2tpbGwsXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbXVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW1xuICAgICAgICAgICAgdHhbMF0udHJ4Lm9wZXJhdGlvbl9yZXN1bHRzWzBdWzFdXG4gICAgICAgIF0pKVswXTtcbiAgICB9XG5cbiAgICBhc3luYyBzZWxsKFxuICAgICAgICBzZWxsU3ltYm9sLFxuICAgICAgICBiYXNlU3ltYm9sLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHByaWNlLFxuICAgICAgICBmaWxsX29yX2tpbGwgPSBmYWxzZSxcbiAgICAgICAgZXhwaXJlID0gXCIyMDI1LTAyLTAyVDAyOjAyOjAyXCJcbiAgICApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIGxldCBzZWxsQXNzZXQgPSBhd2FpdCBBc3NldHNbXG4gICAgICAgICAgICAgICAgdHlwZW9mIHNlbGxTeW1ib2wgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxsU3ltYm9sLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIDogc2VsbFN5bWJvbFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJhc2VBc3NldCA9IGF3YWl0IEFzc2V0c1tcbiAgICAgICAgICAgICAgICB0eXBlb2YgYmFzZVN5bWJvbCA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IGJhc2VTeW1ib2wuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgOiBiYXNlU3ltYm9sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2VsbEFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygc2VsbFN5bWJvbCA9PT0gXCJvYmplY3RcIiA/IHNlbGxTeW1ib2wuYW1vdW50IDogYW1vdW50XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogc2VsbEFzc2V0LnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBidXlBbW91bnQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICh0eXBlb2YgYmFzZVN5bWJvbCA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IEJpZ051bWJlcihiYXNlU3ltYm9sLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgOiBCaWdOdW1iZXIoYW1vdW50KS50aW1lcyhwcmljZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiBiYXNlQXNzZXQucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBpZiAoYnV5QW1vdW50ID09IDAgfHwgc2VsbEFtb3VudCA9PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW1vdW50IGVxdWFsIDAhXCIpO1xuXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IHRoaXMuc2VuZFRyYW5zYWN0aW9uKFwibGltaXRfb3JkZXJfY3JlYXRlXCIsIHtcbiAgICAgICAgICAgIGZlZTogdGhpcy5mZWVBc3NldC50b1BhcmFtKCksXG4gICAgICAgICAgICBzZWxsZXI6IHRoaXMuYWNjLmlkLFxuICAgICAgICAgICAgYW1vdW50X3RvX3NlbGw6IHNlbGxBc3NldC50b1BhcmFtKHNlbGxBbW91bnQpLFxuICAgICAgICAgICAgbWluX3RvX3JlY2VpdmU6IGJhc2VBc3NldC50b1BhcmFtKGJ1eUFtb3VudCksXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHBpcmUsXG4gICAgICAgICAgICBmaWxsX29yX2tpbGw6IGZpbGxfb3Jfa2lsbCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbXG4gICAgICAgICAgICB0eFswXS50cngub3BlcmF0aW9uX3Jlc3VsdHNbMF1bMV1cbiAgICAgICAgXSkpWzBdO1xuICAgIH1cblxuICAgIGFzeW5jIGJhbGFuY2VzKCkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG4gICAgICAgIHJldHVybiBBcGlzLmRiLmdldF9hY2NvdW50X2JhbGFuY2VzKHRoaXMuYWNjLmlkLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZFRyYW5zYWN0aW9uKHR5cGUsIG9wZXJhdGlvbikge1xuICAgICAgICBsZXQgdHIgPSBuZXcgVHJhbnNhY3Rpb25CdWlsZGVyKCk7XG4gICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbih0eXBlLCBvcGVyYXRpb24pO1xuICAgICAgICBhd2FpdCB0ci5zZXRfcmVxdWlyZWRfZmVlcygpO1xuXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XG4gICAgICAgIGxldCBwcml2YXRlX2tleSA9IFdhbGxldERiLmdldFByaXZhdGVLZXkoXG4gICAgICAgICAgICB0aGlzLmFjYy5hY3RpdmUua2V5X2F1dGhzWzBdWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRyLmFkZF9zaWduZXIoXG4gICAgICAgICAgICBwcml2YXRlX2tleSxcbiAgICAgICAgICAgIHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCkudG9QdWJsaWNLZXlTdHJpbmcoKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0ci5icm9hZGNhc3QoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XG4iLCJpbXBvcnQgQ3JlYXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZVwiO1xuaW1wb3J0IFN0YXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwibGliL2JvdHMvYWNjb3VudFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcblxuY2xhc3MgVHJhaWxpbmdTdG9wIHtcbiAgICBzdGF0aWMgY3JlYXRlID0gQ3JlYXRlO1xuICAgIHN0YXRlID0gU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSkge1xuICAgICAgICB0aGlzLmFjY291bnQgPSBuZXcgQWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcblxuICAgICAgICBpZiAoaW5pdERhdGEpIHtcbiAgICAgICAgICAgIHN0b3JhZ2UuaW5pdCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaW5pdERhdGEubmFtZSxcbiAgICAgICAgICAgICAgICBzZWxsQXNzZXQ6IGluaXREYXRhLnNlbGxBc3NldCxcbiAgICAgICAgICAgICAgICBnZXRBc3NldDogaW5pdERhdGEuZ2V0QXNzZXQsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5hbW91bnQsXG4gICAgICAgICAgICAgICAgbWluQW1vdW50OiBpbml0RGF0YS5taW5BbW91bnQsXG4gICAgICAgICAgICAgICAgcGVyY2VudDogaW5pdERhdGEucGVyY2VudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5hbWUgPSBzdG9yYWdlLnJlYWQoKS5uYW1lO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuXG4gICAgICAgIHRoaXMuc2VsbEFzc2V0ID0gYXdhaXQgQXNzZXRzW3N0YXRlLnNlbGxBc3NldF07XG4gICAgICAgIHRoaXMuZ2V0QXNzZXQgPSBhd2FpdCBBc3NldHNbc3RhdGUuZ2V0QXNzZXRdO1xuXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xuICAgICAgICB0aGlzLnJ1biA9IHRydWU7XG4gICAgfVxuICAgIGFzeW5jIHN0b3AoKSB7XG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IHRoaXMucXVldWVFdmVudHM7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlKCk7XG4gICAgfVxuXG4gICAgcXVldWUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSB0aGlzLnF1ZXVlRXZlbnRzXG4gICAgICAgICAgICAudGhlbih0aGlzLmNoZWNrT3JkZXJzKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yLmJpbmQodGhpcy5sb2dnZXIpKTtcbiAgICB9O1xuXG4gICAgY2hlY2tPcmRlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tPcmRlcnNcIik7XG5cbiAgICAgICAgbGV0IHRpY2tlciA9IGF3YWl0IEFwaXMuZGIuZ2V0X3RpY2tlcihcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGxBc3NldC5zeW1ib2xcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBwcmljZSA9IEJpZ051bWJlcih0aWNrZXIubGF0ZXN0KSxcbiAgICAgICAgICAgIG5lZWRTdG9wbG9zcyA9IHByaWNlLnRpbWVzKDEgLSBzdGF0ZS5wZXJjZW50IC8gMTAwKSxcbiAgICAgICAgICAgIGNyZWF0ZU9yZGVyUHJpY2UgPSBwcmljZS50aW1lcygxIC0gKHN0YXRlLnBlcmNlbnQgKiAyKSAvIDMgLyAxMDApLFxuICAgICAgICAgICAgc3RvcGxvc3MgPSBCaWdOdW1iZXIoc3RhdGUubWluQW1vdW50KS5kaXYoc3RhdGUuYW1vdW50KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIHByaWNlLnRvTnVtYmVyKCksXG4gICAgICAgICAgICBuZWVkU3RvcGxvc3MudG9OdW1iZXIoKSxcbiAgICAgICAgICAgIGNyZWF0ZU9yZGVyUHJpY2UudG9OdW1iZXIoKSxcbiAgICAgICAgICAgIHN0b3Bsb3NzLnRvTnVtYmVyKClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobmVlZFN0b3Bsb3NzLmd0KHN0b3Bsb3NzKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cCBtaW5BbW91bnRcIik7XG4gICAgICAgICAgICBzdGF0ZS5taW5BbW91bnQgPSBuZWVkU3RvcGxvc3MudGltZXMoc3RhdGUuYW1vdW50KS50b051bWJlcigpO1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLndyaXRlKHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVPcmRlclByaWNlLmx0KHN0b3Bsb3NzKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgbGltaXQgb3JkZXJcIik7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGxBc3NldC5zeW1ib2wsXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBc3NldC5zeW1ib2wsXG4gICAgICAgICAgICAgICAgc3RhdGUuYW1vdW50LFxuICAgICAgICAgICAgICAgIHN0b3Bsb3NzLnRvTnVtYmVyKClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWlsaW5nU3RvcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgc2VsbEFzc2V0OiBcIkJUQ1wiLFxuICAgICAgICBnZXRBc3NldDogXCJVU0RcIixcbiAgICAgICAgYW1vdW50OiAwLjAxLFxuICAgICAgICBtaW5BbW91bnQ6IDEsXG4gICAgICAgIHN0b3Bsb3NzOiAxMDAsXG4gICAgICAgIHBlcmNlbnQ6IDEwLFxuICAgICAgICB2YWxpZGF0ZTogW1wibmFtZVwiXVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlID0gZGVib3VuY2UodGhpcy5hc3NldFZhbGlkYXRlLCAyMDApO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmIChbXCJzZWxsQXNzZXRcIiwgXCJnZXRBc3NldFwiXS5pbmNsdWRlcyhuYW1lKSlcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gXCJtaW5BbW91bnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHN0b3Bsb3NzOiB2YWx1ZSAvIHRoaXMuc3RhdGUuYW1vdW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInN0b3Bsb3NzXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHRoaXMuc3RhdGUuYW1vdW50ICogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHN0b3Bsb3NzOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJhbW91bnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdmFsdWUgKiB0aGlzLnN0YXRlLnN0b3Bsb3NzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXNzZXRWYWxpZGF0ZSA9IGFzeW5jIG5hbWUgPT4ge1xuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnN0YXRlW25hbWVdO1xuICAgICAgICBsZXQgYmxvY2tjaGFpbkFzc2V0cyA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKGFzc2V0LCAxKSlbMF07XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XG5cbiAgICAgICAgaWYgKGFzc2V0ICE9PSBibG9ja2NoYWluQXNzZXRzLnN5bWJvbCkgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZSA9IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2VsbEFzc2V0XCI6XG4gICAgICAgICAgICBjYXNlIFwiZ2V0QXNzZXRcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhbW91bnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJtaW5BbW91bnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwZWNlbnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJzdG9wbG9zc1wiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbGlkYXRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodGhpcy5zdGF0ZS52YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3Auc2VsbF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsbEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxsQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmdldF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2V0QXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdldEFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5taW5fYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW5BbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zdG9wbG9zc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0b3Bsb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RvcGxvc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwic3RvcGxvc3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnRyYWlsaW5nX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcInBlcmNlbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0Fzc2V0TGFiZWx9IGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBTdGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHZhbGlkYXRlOiBbXVxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpO1xuICAgICAgICBzdGF0ZS5zdG9wbG9zcyA9IHN0YXRlLm1pbkFtb3VudCAvIHN0YXRlLmFtb3VudDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoW1wic2VsbEFzc2V0XCIsIFwiZ2V0QXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwibWluQW1vdW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWUgLyB0aGlzLnN0YXRlLmFtb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJzdG9wbG9zc1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB0aGlzLnN0YXRlLmFtb3VudCAqIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiYW1vdW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlICogdGhpcy5zdGF0ZS5zdG9wbG9zc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge307XG5cbiAgICBoYW5kbGVVcGRhdGVCb3QgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUodGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Ub3A6IDUwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3Auc2VsbF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGxBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2VsbEFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5zZWxsQXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmdldF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5nZXRBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUuZ2V0QXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AubWluX2Ftb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zdG9wbG9zc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0b3Bsb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RvcGxvc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcInN0b3Bsb3NzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC50cmFpbGluZ19wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwicGVyY2VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi51cGRhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvQ3JlYXRlXCI7XG5pbXBvcnQgU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvU3RhdGVcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCJsaWIvYm90cy9hY2NvdW50XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuXG5jbGFzcyBQZXJjZW50VXAge1xuICAgIHN0YXRpYyBjcmVhdGUgPSBDcmVhdGU7XG4gICAgc3RhdGUgPSBTdGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG5ldyBBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xuICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgIHBlcmNlbnRBbW91bnQsXG4gICAgICAgICAgICAgICAgYmFsYW5jZSxcbiAgICAgICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICAgIH0gPSBpbml0RGF0YTtcbiAgICAgICAgICAgIHN0b3JhZ2UuaW5pdCh7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICBwZXJjZW50QW1vdW50LFxuICAgICAgICAgICAgICAgIGJhbGFuY2UsXG4gICAgICAgICAgICAgICAgc3ByZWFkLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlLFxuICAgICAgICAgICAgICAgIG9yZGVyczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uYW1lID0gc3RvcmFnZS5yZWFkKCkubmFtZTtcblxuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhc3luYyBzdGFydCgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcblxuICAgICAgICB0aGlzLmJhc2UgPSBhd2FpdCBBc3NldHNbc3RhdGUuYmFzZV07XG4gICAgICAgIHRoaXMucXVvdGUgPSBhd2FpdCBBc3NldHNbc3RhdGUucXVvdGVdO1xuXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xuICAgICAgICB0aGlzLnJ1biA9IHRydWU7XG4gICAgfVxuICAgIGFzeW5jIHN0b3AoKSB7XG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IHRoaXMucXVldWVFdmVudHM7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlKCk7XG4gICAgfVxuXG4gICAgcXVldWUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSB0aGlzLnF1ZXVlRXZlbnRzXG4gICAgICAgICAgICAudGhlbih0aGlzLmNoZWNrT3JkZXJzKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yLmJpbmQodGhpcy5sb2dnZXIpKTtcbiAgICB9O1xuXG4gICAgY2hlY2tPcmRlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCksXG4gICAgICAgICAgICBsb2cgPSAoLi4uYXJncykgPT4gdGhpcy5sb2dnZXIubG9nKGBbJHtzdGF0ZS5uYW1lfV1gLCAuLi5hcmdzKSxcbiAgICAgICAgICAgIGFjY291bnRCYWxhbmNlcyA9IChhd2FpdCB0aGlzLmFjY291bnQuYmFsYW5jZXMoXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkLFxuICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuaWRcbiAgICAgICAgICAgICkpLnJlZHVjZSgoYWNjLCBiYWxhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkID09PSBiYWxhbmNlLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgID8gKGFjYy5iYXNlID0gQmlnTnVtYmVyKGJhbGFuY2UuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKVxuICAgICAgICAgICAgICAgICAgICA6IChhY2MucXVvdGUgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pLFxuICAgICAgICAgICAgYmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgc3RhdGUuYmFsYW5jZSA9PT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUuYmFsYW5jZSA9PT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50QmFsYW5jZXMuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihhY2NvdW50QmFsYW5jZXMuYmFzZSwgc3RhdGUuYmFsYW5jZSksXG4gICAgICAgICAgICBhbW91bnQgPVxuICAgICAgICAgICAgICAgIHN0YXRlLnBlcmNlbnRBbW91bnQudG9TdHJpbmcoKSA9PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICA/IEJpZ051bWJlcihiYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5hbW91bnQsXG4gICAgICAgICAgICBvcmRlcnMgPSAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhcbiAgICAgICAgICAgICAgICBzdGF0ZS5vcmRlcnMubWFwKG9yZGVyID0+IG9yZGVyLmlkKS5maWx0ZXIoaWQgPT4gaWQpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIC5tYXAob3JkZXIgPT4gb3JkZXIgJiYgb3JkZXIuaWQpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpZCA9PiBpZCksXG4gICAgICAgICAgICBwcm9jZXNzT3JkZXJzID0gc3RhdGUub3JkZXJzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBvcmRlciA9PiAhb3JkZXJzLmluY2x1ZGVzKG9yZGVyLmlkKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBpZiAocHJvY2Vzc09yZGVycy5sZW5ndGggPiAwKSBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XG5cbiAgICAgICAgbGV0IHByb21pc2VzID0gcHJvY2Vzc09yZGVycy5tYXAoYXN5bmMgb3JkZXIgPT4ge1xuICAgICAgICAgICAgaWYgKG9yZGVyLnN0YXRlID09PSBcImJ1eVwiKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIuaWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYWxhbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50VG9NYXJrZXQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKHRoaXMuYmFzZS5vcHRpb25zLm1hcmtldF9mZWVfcGVyY2VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwMCAqIDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMob3JkZXIuYmFzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYWxhbmNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5iYWxhbmNlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIob3JkZXIuYmFzZSkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgKGFtb3VudFRvTWFya2V0ICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYW1vdW50VG9NYXJrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmJhc2Uub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgIT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxMCAqKiAtdGhpcy5iYXNlLnByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHF1b3RlQXNzZXRBbW91bnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5xdW90ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGFjY291bnRCYWxhbmNlcy5xdW90ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKG9yZGVyLnF1b3RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50T25NYXJrZXQgPSBCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnRcbiAgICAgICAgICAgICAgICAgICAgKS5kaXYoMTAwICogMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0QW1vdW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMuYmFzZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogQmlnTnVtYmVyKG9yZGVyLmJhc2UpLnRpbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc3RhdGUuc3ByZWFkKSAvIDEwMCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRPbk1hcmtldC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsb2coXG4gICAgICAgICAgICAgICAgICAgIGBidXkgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgfTogYW1vdW50PSR7YmFzZUFzc2V0QW1vdW50LmFtb3VudC50b051bWJlcigpfSBwcmljZT0ke0JpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRBbW91bnQuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYmFzZUFzc2V0QW1vdW50LmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpfSAke3RoaXMuYmFzZS5zeW1ib2x9LyR7dGhpcy5xdW90ZS5zeW1ib2x9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0QW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXRBbW91bnRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgb3JkZXIuc3RhdGUgPSBcImJ1eVwiO1xuICAgICAgICAgICAgICAgIG9yZGVyLmlkID0gb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiO1xuICAgICAgICAgICAgICAgIG9yZGVyLmJhc2UgPSBiYXNlQXNzZXRBbW91bnQuYW1vdW50LnRvTnVtYmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICBsZXQgbG93UHJpY2UgPSBudWxsO1xuICAgICAgICBzdGF0ZS5vcmRlcnMuZm9yRWFjaChvcmRlciA9PiB7XG4gICAgICAgICAgICBsZXQgcHJpY2UgPSBCaWdOdW1iZXIob3JkZXIucXVvdGUpLmRpdihvcmRlci5iYXNlKTtcbiAgICAgICAgICAgIGlmICghbG93UHJpY2UgfHwgcHJpY2UuaXNMZXNzVGhhbihsb3dQcmljZSkpIGxvd1ByaWNlID0gcHJpY2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB0aWNrZXIgPSBhd2FpdCBBcGlzLmRiLmdldF90aWNrZXIoXG4gICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHByaWNlID0gQmlnTnVtYmVyKHRpY2tlci5sb3dlc3RfYXNrKTtcblxuICAgICAgICBsb2coXG4gICAgICAgICAgICBgT3JkZXJzIGV4aXN0czogJHshIWxvd1ByaWNlfSwgYmFsYW5jZSA+IGFtb3VudDogJHtiYWxhbmNlID5cbiAgICAgICAgICAgICAgICBhbW91bnR9LCBsb3dQcmljZSAtIHByaWNlID4gZGlzdGFuY2U6ICR7ISFsb3dQcmljZSAmJlxuICAgICAgICAgICAgICAgIGxvd1ByaWNlXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxIC0gTnVtYmVyKHN0YXRlLmRpc3RhbmNlKSAvIDEwMClcbiAgICAgICAgICAgICAgICAgICAgLmlzR3JlYXRlclRoYW4ocHJpY2UpfWBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYmFsYW5jZSA+IGFtb3VudCAmJlxuICAgICAgICAgICAgKCFsb3dQcmljZSB8fFxuICAgICAgICAgICAgICAgIGxvd1ByaWNlXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxIC0gTnVtYmVyKHN0YXRlLmRpc3RhbmNlKSAvIDEwMClcbiAgICAgICAgICAgICAgICAgICAgLmlzR3JlYXRlclRoYW4ocHJpY2UpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBiYXNlQXNzZXRBbW91bnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLmJhc2UuaWQsXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucXVvdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogcHJpY2UudGltZXMoYW1vdW50KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LmJ1eShxdW90ZUFzc2V0QW1vdW50LCBiYXNlQXNzZXRBbW91bnQpLFxuICAgICAgICAgICAgICAgIG9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJzZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgcXVvdGU6IHF1b3RlQXNzZXRBbW91bnQuYW1vdW50LnRvTnVtYmVyKCksXG4gICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCJcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzdGF0ZS5vcmRlcnMucHVzaChvcmRlcik7XG4gICAgICAgICAgICBsb2coXG4gICAgICAgICAgICAgICAgYHNlbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgIH06IGFtb3VudD0ke2Ftb3VudH0sIHByaWNlPSR7cHJpY2UudG9OdW1iZXIoKX0gJHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgIH0vJHt0aGlzLnF1b3RlLnN5bWJvbH1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFsYW5jZSkpXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFsYW5jZSA9IE51bWJlcihzdGF0ZS5iYWxhbmNlKSAtIGFtb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLm9yZGVycyA9IHN0YXRlLm9yZGVycy5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQgIT09IG51bGwpO1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyY2VudFVwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi9saWJzL0lucHV0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIENyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGJhc2U6IFwiQ05ZXCIsXG4gICAgICAgIHF1b3RlOiBcIkJUU1wiLFxuICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgIHBlcmNlbnRBbW91bnQ6IGZhbHNlLFxuICAgICAgICBiYWxhbmNlOiBcIlwiLFxuICAgICAgICBzcHJlYWQ6IDEsXG4gICAgICAgIGRpc3RhbmNlOiBcIjEuNVwiLFxuICAgICAgICB2YWxpZGF0ZTogW1wibmFtZVwiXVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlID0gZGVib3VuY2UodGhpcy5hc3NldFZhbGlkYXRlLCAyMDApO1xuICAgIH1cblxuICAgIGFzc2V0VmFsaWRhdGUgPSBhc3luYyBuYW1lID0+IHtcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5zdGF0ZVtuYW1lXTtcbiAgICAgICAgbGV0IGJsb2NrY2hhaW5Bc3NldHMgPSAoYXdhaXQgQXBpcy5kYi5saXN0X2Fzc2V0cyhhc3NldCwgMSkpWzBdO1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIGlmIChhc3NldCAhPT0gYmxvY2tjaGFpbkFzc2V0cy5zeW1ib2wpIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGUgPSB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodGhpcy5zdGF0ZS52YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmIChbXCJiYXNlXCIsIFwicXVvdGVcIl0uaW5jbHVkZXMobmFtZSkpIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIi1cIiAmJiBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3ByZWFkXCI6XG4gICAgICAgICAgICBjYXNlIFwiZGlzdGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codmFsaWRhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh2YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt2YWxpZGF0ZSwgbmFtZSwgYW1vdW50LCBiYWxhbmNlLCBzcHJlYWQsIGRpc3RhbmNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBob3Jpem9udGFsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImJhbGFuY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnNwcmVhZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwcmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcInNwcmVhZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMucGVyY2VudF91cC5kaXN0YW5jZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRpc3RhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzdGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJkaXN0YW5jZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7bmFtZSwgdmFsdWUsIG9uQ2hhbmdlLCBib3JkZXIsIC4uLnByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIGlkPXtuYW1lfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGJvcmRlciA/IFwiMXB4IHNvbGlkIHJlZFwiIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCB7QXNzZXRMYWJlbH0gZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2xpYnMvSW5wdXRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgU3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe3ZhbGlkYXRlOiBbXX0sIHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmIChbXCJiYXNlXCIsIFwicXVvdGVcIl0uaW5jbHVkZXMobmFtZSkpIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIi1cIiAmJiBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3ByZWFkXCI6XG4gICAgICAgICAgICBjYXNlIFwiZGlzdGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh2YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIGhhbmRsZVVwZGF0ZUJvdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlTm93ID0gdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS53cml0ZSh7Li4uc3RhdGVOb3csIC4uLnRoaXMuc3RhdGV9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZhbGlkYXRlLCBhbW91bnQsIGJhbGFuY2UsIHNwcmVhZCwgZGlzdGFuY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5iYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5iYXNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV9wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV92YWx1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJiYWxhbmNlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ucXVvdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLnF1b3RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwic3ByZWFkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5wZXJjZW50X3VwLmRpc3RhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzdGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXN0YW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImRpc3RhbmNlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi51cGRhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBscyBmcm9tIFwiY29tbW9uL2xvY2FsU3RvcmFnZVwiO1xuXG52YXIgYm90cyA9IGxzKFwiX19ib3RzX19cIik7XG5cbmNsYXNzIFN0b3JhZ2Uge1xuICAgIHN0YXRpYyBnZXRBY2NvdW50Qm90KGFjY291bnQpIHtcbiAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChgXl9fYm90c19fJHthY2NvdW50fTo6YCk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihrZXkgPT4gcmUudGVzdChrZXkpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGJvdHMuaGFzKG5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgLy9ib3RzLmhhcyhuYW1lKVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvL2lmICghYm90cy5oYXMobmFtZSkpXG4gICAgICAgIC8vYm90cy5zZXQobmFtZSwge30pXG4gICAgfVxuXG4gICAgaW5pdChkYXRhKSB7XG4gICAgICAgIGlmICghYm90cy5oYXMobmFtZSkpIGJvdHMuc2V0KHRoaXMubmFtZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmVhZCgpIHtcbiAgICAgICAgcmV0dXJuIGJvdHMuZ2V0KHRoaXMubmFtZSk7XG4gICAgfVxuXG4gICAgd3JpdGUobmV3U3RhdGUpIHtcbiAgICAgICAgYm90cy5zZXQodGhpcy5uYW1lLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBib3RzLnJlbW92ZSh0aGlzLm5hbWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTs7OztBQWhFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUEyREE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUF1QkE7QUFDQTtBQUNBO0FBekJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFsQ0E7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBbkRBO0FBcURBO0FBRUE7QUFDQTtBQXhEQTtBQXlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpEQTtBQWdFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBakVBO0FBd0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUE1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUpBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBNERBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUxBO0FBREE7QUFEQTtBQWVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVRBO0FBekJBO0FBMkNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQWxCQTtBQTRCQTtBQUFBO0FBQ0E7QUFEQTtBQTlCQTtBQWZBO0FBNUNBO0FBREE7QUFtR0E7Ozs7QUEvTEE7QUFDQTtBQWlNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFWQTs7Ozs7Ozs7Ozs7Ozs7O0FDM01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBakRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBNEVBO0FBR0E7QUFDQTtBQWhGQTtBQWlGQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBV0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUF1QkE7QUFDQTtBQXhCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBMEJBO0FBMUJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFpQ0E7QUFPQTtBQUNBO0FBQ0E7QUExQ0E7QUE2QkE7QUFhQTtBQU1BO0FBTUE7QUFPQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUF2RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXdFQTtBQUNBO0FBQ0E7QUEzRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXFGQTtBQUNBO0FBQ0E7QUF4RkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQThGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFVQTtBQXBIQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBc0hBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFuSUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFxSUE7QUFDQTtBQUNBO0FBeElBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUEySUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEwSkE7QUFDQTtBQTVKQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZ0tBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUE3S0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUErS0E7QUFDQTtBQWpMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFxTEE7QUFDQTtBQUNBO0FBeExBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFrTUE7QUFDQTtBQUNBO0FBck1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUEyTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVVBO0FBaE9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFrT0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQTdPQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQStPQTtBQUNBO0FBQ0E7QUFsUEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXFQQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaFFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFtUUE7QUFDQTtBQXJRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBMlFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUF0UkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUF3UkE7QUFDQTtBQTFSQTtBQUNBO0FBNlJBO0FBQ0E7QUEvUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWpGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFDQTtBQXZCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQTBTQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTs7QUFHQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFJQTs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBREE7O0FBR0E7QUFDQTs7QUFEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBM2NBO0FBQ0E7QUFDQTtBQThjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFhQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQTVEQTtBQUNBO0FBOERBO0FBQ0E7QUFDQTs7Ozs7QUFwR0E7QUFDQTtBQUNBOzs7QUFvR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVJBO0FBSkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQXZFQTtBQXlGQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBdkVBO0FBMUZBO0FBb0xBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFMQTtBQW9CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVBBO0FBREE7QUE1TkE7QUF5T0E7Ozs7QUFqV0E7QUFDQTtBQW1XQTs7Ozs7Ozs7QUMzV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVJBO0FBOUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBaUJBO0FBRUE7QUFuQkE7QUFBQTtBQUFBO0FBOEJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBU0E7QUF4Q0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQTBDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFkQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFmQTtBQUNBO0FBQ0E7OztBQStCQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBREE7QUFjQTs7OztBQXBEQTtBQUNBO0FBc0RBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUNBOztBQUFBO0FBQ0E7Ozs7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFGQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUdBO0FBQUE7O0FBQUE7QUFDQTs7QUFEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBQ0E7QUFnREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUF4RUE7QUFDQTtBQUdBOzs7QUFzRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQXRGQTtBQXVHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTUE7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQXRGQTtBQXhHQTtBQWdOQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQUpBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUEvT0E7QUF5UEE7Ozs7QUF0VUE7QUFDQTtBQXdVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUlBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBOztBQUdBO0FBQ0E7O0FBREE7QUFLQTtBQU9BO0FBQ0E7QUFRQTs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTs7QUFEQTs7QUFVQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7O0FBS0E7QUFDQTs7QUFEQTtBQUtBO0FBT0E7QUFDQTtBQVFBOzs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBOztBQURBOztBQVVBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBZ0RBO0FBR0E7QUFDQTtBQXBEQTtBQXFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBdkJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXdCQTtBQXpCQTtBQUFBO0FBQ0E7QUFEQTtBQWdDQTtBQUNBO0FBakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQURBOztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFqREE7QUFDQTtBQUNBO0FBNEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBZ0JBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF2Q0E7QUFDQTtBQXlDQTtBQUNBO0FBQ0E7Ozs7O0FBckdBO0FBQ0E7QUFDQTs7O0FBcUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFKQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFaQTtBQTJCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFaQTtBQTVCQTtBQTBEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQXJCQTtBQTdFQTtBQW1IQTs7OztBQXhPQTtBQUNBO0FBME9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFZQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7O0FBakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOENBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFwQkE7QUFvQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFsQkE7QUF4Q0E7QUE2RUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBdEJBO0FBc0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBcEhBO0FBOEhBOzs7O0FBeExBO0FBQ0E7QUEwTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQTZEQTtBQUdBO0FBQ0E7QUFqRUE7QUFrRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFPQTtBQU9BO0FBQ0E7QUFDQTtBQWhCQTtBQUdBO0FBYUE7QUFNQTtBQXRCQTtBQUFBO0FBOEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEvQkE7QUFBQTtBQWdDQTtBQUFBO0FBQ0E7QUFqQ0E7QUFpQ0E7QUFBQTtBQUNBO0FBTEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQXBDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUF3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVVBO0FBckJBO0FBQUE7QUFDQTtBQURBO0FBdUJBO0FBQ0E7QUFDQTtBQUZBO0FBV0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQU9BO0FBMUNBO0FBQUE7QUFDQTtBQURBO0FBbURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBM0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQXhDQTtBQUFBO0FBQ0E7QUFEQTtBQXdHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdHQTtBQUFBO0FBQ0E7QUFEQTtBQThHQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFySEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWlJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBdElBO0FBQUE7QUFDQTtBQURBO0FBMElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUE1SkE7QUFDQTtBQThKQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFsS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWxFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBREE7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQTlEQTtBQUNBO0FBQ0E7QUF5T0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQS9DQTtBQUNBO0FBaURBO0FBQ0E7QUFDQTs7Ozs7QUFsRkE7QUFDQTtBQUNBOzs7QUFrRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFyQ0E7QUE0Q0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXJCQTtBQTdDQTtBQVpBO0FBd0ZBOzs7O0FBN0xBO0FBQ0E7QUErTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE1BO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBY0E7Ozs7QUFsQkE7QUFDQTtBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUEvQ0E7QUFDQTtBQWlEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBM0VBO0FBQ0E7QUFHQTs7O0FBeUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQTNDQTtBQWtEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBM0JBO0FBbkRBO0FBc0ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBdkZBO0FBaUdBOzs7O0FBbkxBO0FBQ0E7QUFxTEE7Ozs7Ozs7Ozs7Ozs7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==