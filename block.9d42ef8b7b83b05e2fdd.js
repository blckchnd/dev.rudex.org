(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 2512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(875);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(876);
/* harmony import */ var _LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1336);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var LinkToWitnessById = function (_React$Component) {
    _inherits(LinkToWitnessById, _React$Component);

    function LinkToWitnessById() {
        _classCallCheck(this, LinkToWitnessById);

        return _possibleConstructorReturn(this, (LinkToWitnessById.__proto__ || Object.getPrototypeOf(LinkToWitnessById)).apply(this, arguments));
    }

    _createClass(LinkToWitnessById, [{
        key: "render",
        value: function render() {
            var witness_account = this.props.witness.get("witness_account");
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], { account: witness_account });
        }
    }]);

    return LinkToWitnessById;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

LinkToWitnessById.propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainObject.isRequired
};

LinkToWitnessById = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(LinkToWitnessById);

/* harmony default export */ __webpack_exports__["default"] = (LinkToWitnessById);

/***/ }),

/***/ 2801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(779);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(863);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2802);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var BlockContainer = function (_React$Component) {
    _inherits(BlockContainer, _React$Component);

    function BlockContainer() {
        _classCallCheck(this, BlockContainer);

        return _possibleConstructorReturn(this, (BlockContainer.__proto__ || Object.getPrototypeOf(BlockContainer)).apply(this, arguments));
    }

    _createClass(BlockContainer, [{
        key: "render",
        value: function render() {
            var height = parseInt(this.props.match.params.height, 10);
            var txIndex = this.props.match.params.txIndex ? parseInt(this.props.match.params.txIndex) : 0;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                    stores: [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        blocks: function blocks() {
                            return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().blocks;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Block__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
                    height: height,
                    scrollToIndex: txIndex
                }))
            );
        }
    }]);

    return BlockContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BlockContainer);

/***/ }),

/***/ 2802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(728);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1005);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(523);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(780);
/* harmony import */ var _Transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1320);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(781);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(875);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(876);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2512);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1364);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_10__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var TransactionList = function (_React$Component) {
    _inherits(TransactionList, _React$Component);

    function TransactionList() {
        _classCallCheck(this, TransactionList);

        return _possibleConstructorReturn(this, (TransactionList.__proto__ || Object.getPrototypeOf(TransactionList)).apply(this, arguments));
    }

    _createClass(TransactionList, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.block.id !== this.props.block.id;
        }
    }, {
        key: "render",
        value: function render() {
            var block = this.props.block;

            var transactions = null;

            transactions = [];

            if (block.transactions.length > 0) {
                transactions = [];

                block.transactions.forEach(function (trx, index) {
                    transactions.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"],
                        {
                            key: index,
                            id: "tx_" + index,
                            name: "tx_" + index
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Transaction__WEBPACK_IMPORTED_MODULE_5__["default"], { key: index, trx: trx, index: index })
                    ));
                });
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                transactions
            );
        }
    }]);

    return TransactionList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Block = function (_React$Component2) {
    _inherits(Block, _React$Component2);

    function Block(props) {
        _classCallCheck(this, Block);

        var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));

        _this2.state = {
            showInput: false
        };

        _this2.scrollToTop = _this2.scrollToTop.bind(_this2);
        return _this2;
    }

    _createClass(Block, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this3 = this;

            this._getBlock(this.props.height);

            react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.register("begin", function () {
                //console.log("begin", arguments);
            });

            react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.register("end", function () {
                //console.log("end", arguments);
                _this3.setState({ scrollEnded: true });
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.height !== this.props.height) {
                this._getBlock(np.height);
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return !immutable__WEBPACK_IMPORTED_MODULE_3___default.a.is(np.blocks, this.props.blocks) || np.height !== this.props.height || np.dynGlobalObject !== this.props.dynGlobalObject || ns.showInput !== this.state.showInput;
        }
    }, {
        key: "scrollToTop",
        value: function scrollToTop() {
            react_scroll__WEBPACK_IMPORTED_MODULE_10__["animateScroll"].scrollToTop({
                duration: 1500,
                delay: 100,
                smooth: true,
                containerId: "blockContainer"
            });
        }
    }, {
        key: "_getBlock",
        value: function _getBlock(height) {
            if (height) {
                height = parseInt(height, 10);
                if (!this.props.blocks.get(height)) {
                    actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__["default"].getBlock(height);
                }
            }
        }
    }, {
        key: "_nextBlock",
        value: function _nextBlock() {
            var height = this.props.match.params.height;
            var nextBlock = Math.min(this.props.dynGlobalObject.get("head_block_number"), parseInt(height, 10) + 1);
            this.props.history.push("/block/" + nextBlock);
        }
    }, {
        key: "_previousBlock",
        value: function _previousBlock() {
            var height = this.props.match.params.height;
            var previousBlock = Math.max(1, parseInt(height, 10) - 1);
            this.props.history.push("/block/" + previousBlock);
        }
    }, {
        key: "toggleInput",
        value: function toggleInput(e) {
            e.preventDefault();
            this.setState({ showInput: true });
        }
    }, {
        key: "_onKeyDown",
        value: function _onKeyDown(e) {
            if (e && e.keyCode === 13) {
                this.props.history.push("/block/" + e.target.value);
                this.setState({ showInput: false });
            }
        }
    }, {
        key: "_onSubmit",
        value: function _onSubmit() {
            var value = this.refs.blockInput.value;
            if (value) {
                this._onKeyDown({ keyCode: 13, target: { value: value } });
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var blocks = this.props.blocks;

            var height = parseInt(this.props.height, 10);
            var block = blocks.get(height);

            if (this.props.scrollToIndex && !this.state.scrollEnded && block) {
                react_scroll__WEBPACK_IMPORTED_MODULE_10__["scroller"].scrollTo("tx_" + this.props.scrollToIndex, {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                    offset: -100,
                    containerId: "blockContainer"
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var showInput = this.state.showInput;
            var blocks = this.props.blocks;

            var height = parseInt(this.props.height, 10);
            var block = blocks.get(height);

            var blockHeight = showInput ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "inline-label" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                    ref: "blockInput",
                    type: "number",
                    onKeyDown: this._onKeyDown.bind(this)
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    { onClick: this._onSubmit.bind(this), className: "button" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.block.go_to" })
                )
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    style: { textTransform: "uppercase" },
                    component: "span",
                    content: "explorer.block.title"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    { onClick: this.toggleInput.bind(this) },
                    "\xA0#",
                    height
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block page-layout" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block main-content" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-content", id: "blockContainer" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-content no-overflow medium-offset-2 medium-8 large-offset-3 large-6 small-12" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "h4",
                                { className: "text-center" },
                                blockHeight
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                        component: "span",
                                        content: "explorer.block.date"
                                    }),
                                    ":",
                                    " ",
                                    block ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedDate"], {
                                        value: block.timestamp,
                                        format: "full"
                                    }) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                        component: "span",
                                        content: "explorer.block.witness"
                                    }),
                                    ":",
                                    " ",
                                    block ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                        witness: block.witness
                                    }) : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                        component: "span",
                                        content: "explorer.block.previous"
                                    }),
                                    ": ",
                                    block ? block.previous : null
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                                        component: "span",
                                        content: "explorer.block.transactions"
                                    }),
                                    ":",
                                    " ",
                                    block ? block.transactions.length : null
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    className: "clearfix",
                                    style: { marginBottom: "1rem" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button float-left outline",
                                        onClick: this._previousBlock.bind(this)
                                    },
                                    "\u2190"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    {
                                        className: "button float-right outline",
                                        onClick: this._nextBlock.bind(this)
                                    },
                                    "\u2192"
                                )
                            ),
                            block ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TransactionList, { block: block }) : null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: { textAlign: "center", marginBottom: 20 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    { onClick: this.scrollToTop },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "global.return_to_top" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Block;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Block.propTypes = {
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject.isRequired,
    blocks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
Block.defaultProps = {
    dynGlobalObject: "2.1.0",
    blocks: {},
    height: 1
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__["default"])(Block));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suOWQ0MmVmOGI3YjgzYjA1ZTJmZGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9MaW5rVG9XaXRuZXNzQnlJZC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0Jsb2NrY2hhaW4vQmxvY2tDb250YWluZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9CbG9ja2NoYWluL0Jsb2NrLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4vTGlua1RvQWNjb3VudEJ5SWRcIjtcblxuY2xhc3MgTGlua1RvV2l0bmVzc0J5SWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHdpdG5lc3M6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB3aXRuZXNzX2FjY291bnQgPSB0aGlzLnByb3BzLndpdG5lc3MuZ2V0KFwid2l0bmVzc19hY2NvdW50XCIpO1xuICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e3dpdG5lc3NfYWNjb3VudH0gLz47XG4gICAgfVxufVxuTGlua1RvV2l0bmVzc0J5SWQgPSBCaW5kVG9DaGFpblN0YXRlKExpbmtUb1dpdG5lc3NCeUlkKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlua1RvV2l0bmVzc0J5SWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvY2tjaGFpblN0b3JlIGZyb20gXCJzdG9yZXMvQmxvY2tjaGFpblN0b3JlXCI7XG5pbXBvcnQgQWx0Q29udGFpbmVyIGZyb20gXCJhbHQtY29udGFpbmVyXCI7XG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcblxuY2xhc3MgQmxvY2tDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmhlaWdodCwgMTApO1xuICAgICAgICBsZXQgdHhJbmRleCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnR4SW5kZXhcbiAgICAgICAgICAgID8gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudHhJbmRleClcbiAgICAgICAgICAgIDogMDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFsdENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHN0b3Jlcz17W0Jsb2NrY2hhaW5TdG9yZV19XG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJsb2NrY2hhaW5TdG9yZS5nZXRTdGF0ZSgpLmJsb2NrcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJsb2NrXG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9JbmRleD17dHhJbmRleH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BbHRDb250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0NvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7Rm9ybWF0dGVkRGF0ZX0gZnJvbSBcInJlYWN0LWludGxcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IEJsb2NrY2hhaW5BY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Jsb2NrY2hhaW5BY3Rpb25zXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSBcIi4vVHJhbnNhY3Rpb25cIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCBMaW5rVG9XaXRuZXNzQnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9XaXRuZXNzQnlJZFwiO1xuaW1wb3J0IHtFbGVtZW50LCBFdmVudHMsIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsLCBzY3JvbGxlcn0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5jbGFzcyBUcmFuc2FjdGlvbkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5leHRQcm9wcy5ibG9jay5pZCAhPT0gdGhpcy5wcm9wcy5ibG9jay5pZDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7YmxvY2t9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9ucyA9IG51bGw7XG5cbiAgICAgICAgdHJhbnNhY3Rpb25zID0gW107XG5cbiAgICAgICAgaWYgKGJsb2NrLnRyYW5zYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbnMgPSBbXTtcblxuICAgICAgICAgICAgYmxvY2sudHJhbnNhY3Rpb25zLmZvckVhY2goKHRyeCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YHR4XyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2B0eF8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvbiBrZXk9e2luZGV4fSB0cng9e3RyeH0gaW5kZXg9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0VsZW1lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxkaXY+e3RyYW5zYWN0aW9uc308L2Rpdj47XG4gICAgfVxufVxuXG5jbGFzcyBCbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGJsb2NrczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkeW5HbG9iYWxPYmplY3Q6IFwiMi4xLjBcIixcbiAgICAgICAgYmxvY2tzOiB7fSxcbiAgICAgICAgaGVpZ2h0OiAxXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd0lucHV0OiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AgPSB0aGlzLnNjcm9sbFRvVG9wLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2dldEJsb2NrKHRoaXMucHJvcHMuaGVpZ2h0KTtcblxuICAgICAgICBFdmVudHMuc2Nyb2xsRXZlbnQucmVnaXN0ZXIoXCJiZWdpblwiLCAoKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYmVnaW5cIiwgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKFwiZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJlbmRcIiwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Njcm9sbEVuZGVkOiB0cnVlfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKG5wLmhlaWdodCAhPT0gdGhpcy5wcm9wcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2dldEJsb2NrKG5wLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5wLmJsb2NrcywgdGhpcy5wcm9wcy5ibG9ja3MpIHx8XG4gICAgICAgICAgICBucC5oZWlnaHQgIT09IHRoaXMucHJvcHMuaGVpZ2h0IHx8XG4gICAgICAgICAgICBucC5keW5HbG9iYWxPYmplY3QgIT09IHRoaXMucHJvcHMuZHluR2xvYmFsT2JqZWN0IHx8XG4gICAgICAgICAgICBucy5zaG93SW5wdXQgIT09IHRoaXMuc3RhdGUuc2hvd0lucHV0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgICAgIHNjcm9sbC5zY3JvbGxUb1RvcCh7XG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgIGRlbGF5OiAxMDAsXG4gICAgICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgICAgICBjb250YWluZXJJZDogXCJibG9ja0NvbnRhaW5lclwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRCbG9jayhoZWlnaHQpIHtcbiAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0LCAxMCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMuYmxvY2tzLmdldChoZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgQmxvY2tjaGFpbkFjdGlvbnMuZ2V0QmxvY2soaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9uZXh0QmxvY2soKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5oZWlnaHQ7XG4gICAgICAgIGxldCBuZXh0QmxvY2sgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZHluR2xvYmFsT2JqZWN0LmdldChcImhlYWRfYmxvY2tfbnVtYmVyXCIpLFxuICAgICAgICAgICAgcGFyc2VJbnQoaGVpZ2h0LCAxMCkgKyAxXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYmxvY2svJHtuZXh0QmxvY2t9YCk7XG4gICAgfVxuXG4gICAgX3ByZXZpb3VzQmxvY2soKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5oZWlnaHQ7XG4gICAgICAgIGxldCBwcmV2aW91c0Jsb2NrID0gTWF0aC5tYXgoMSwgcGFyc2VJbnQoaGVpZ2h0LCAxMCkgLSAxKTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9ibG9jay8ke3ByZXZpb3VzQmxvY2t9YCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlSW5wdXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dJbnB1dDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIF9vbktleURvd24oZSkge1xuICAgICAgICBpZiAoZSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2Jsb2NrLyR7ZS50YXJnZXQudmFsdWV9YCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93SW5wdXQ6IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25TdWJtaXQoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZWZzLmJsb2NrSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fb25LZXlEb3duKHtrZXlDb2RlOiAxMywgdGFyZ2V0OiB7dmFsdWV9fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGxldCB7YmxvY2tzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBoZWlnaHQgPSBwYXJzZUludCh0aGlzLnByb3BzLmhlaWdodCwgMTApO1xuICAgICAgICBsZXQgYmxvY2sgPSBibG9ja3MuZ2V0KGhlaWdodCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2Nyb2xsVG9JbmRleCAmJiAhdGhpcy5zdGF0ZS5zY3JvbGxFbmRlZCAmJiBibG9jaykge1xuICAgICAgICAgICAgc2Nyb2xsZXIuc2Nyb2xsVG8oYHR4XyR7dGhpcy5wcm9wcy5zY3JvbGxUb0luZGV4fWAsIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgICAgICAgICBkZWxheTogMTAwLFxuICAgICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IC0xMDAsXG4gICAgICAgICAgICAgICAgY29udGFpbmVySWQ6IFwiYmxvY2tDb250YWluZXJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtzaG93SW5wdXR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHtibG9ja3N9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHRoaXMucHJvcHMuaGVpZ2h0LCAxMCk7XG4gICAgICAgIGxldCBibG9jayA9IGJsb2Nrcy5nZXQoaGVpZ2h0KTtcblxuICAgICAgICBsZXQgYmxvY2tIZWlnaHQgPSBzaG93SW5wdXQgPyAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiYmxvY2tJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vblN1Ym1pdC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suZ29fdG9cIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJ9fVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMudG9nZ2xlSW5wdXQuYmluZCh0aGlzKX0+Jm5ic3A7I3toZWlnaHR9PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgbWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCIgaWQ9XCJibG9ja0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tb3ZlcmZsb3cgbWVkaXVtLW9mZnNldC0yIG1lZGl1bS04IGxhcmdlLW9mZnNldC0zIGxhcmdlLTYgc21hbGwtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57YmxvY2tIZWlnaHR9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2sgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLnRpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLndpdG5lc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz46e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2NrID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rVG9XaXRuZXNzQnlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRuZXNzPXtibG9jay53aXRuZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5wcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjoge2Jsb2NrID8gYmxvY2sucHJldmlvdXMgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLnRyYW5zYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2sgPyBibG9jay50cmFuc2FjdGlvbnMubGVuZ3RoIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogXCIxcmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsb2F0LWxlZnQgb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9wcmV2aW91c0Jsb2NrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODU5MjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbG9hdC1yaWdodCBvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX25leHRCbG9jay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzg1OTQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9jayA/IDxUcmFuc2FjdGlvbkxpc3QgYmxvY2s9e2Jsb2NrfSAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiAyMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnNjcm9sbFRvVG9wfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImdsb2JhbC5yZXR1cm5fdG9fdG9wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5kVG9DaGFpblN0YXRlKEJsb2NrKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFSQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQUVBO0FBQ0E7QUFIQTtBQVJBO0FBZUE7Ozs7QUF2QkE7QUFDQTtBQXlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQTVCQTtBQUNBO0FBOEJBOzs7QUFhQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQVBBO0FBUUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTkE7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFOQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFEQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBSUE7QUFDQTtBQUxBO0FBOUJBO0FBc0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBVkE7QUFpQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUhBO0FBMURBO0FBREE7QUFEQTtBQURBO0FBeUVBOzs7O0FBN05BO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBQ0E7QUF1TkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==