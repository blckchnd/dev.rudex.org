"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[4],{

/***/ 3361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2095);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1821);
/* harmony import */ var _Transaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2370);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1939);
/* harmony import */ var _Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2753);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2472);












class TransactionList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.block.id !== this.props.block.id;
  }

  render() {
    let {
      block
    } = this.props;
    let transactions = null;
    transactions = [];

    if (block.transactions.length > 0) {
      transactions = [];
      block.transactions.forEach((trx, index) => {
        transactions.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_9__.Element, {
          key: index,
          id: `tx_${index}`,
          name: `tx_${index}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Transaction__WEBPACK_IMPORTED_MODULE_4__["default"], {
          block: block,
          key: index,
          trx: trx,
          index: index
        })));
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, transactions);
  }

}

class Block extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    dynGlobalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainObject.isRequired,
    blocks: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired),
    height: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number.isRequired)
  };
  static defaultProps = {
    dynGlobalObject: "2.1.0",
    blocks: {},
    height: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      showInput: false
    };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    this._getBlock(this.props.height);

    react_scroll__WEBPACK_IMPORTED_MODULE_9__.Events.scrollEvent.register("begin", () => {//console.log("begin", arguments);
    });
    react_scroll__WEBPACK_IMPORTED_MODULE_9__.Events.scrollEvent.register("end", () => {
      //console.log("end", arguments);
      this.setState({
        scrollEnded: true
      });
    });
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (np.height !== this.props.height) {
      this._getBlock(np.height);
    }
  }

  shouldComponentUpdate(np, ns) {
    return !immutable__WEBPACK_IMPORTED_MODULE_2___default().is(np.blocks, this.props.blocks) || np.height !== this.props.height || np.dynGlobalObject !== this.props.dynGlobalObject || ns.showInput !== this.state.showInput;
  }

  scrollToTop() {
    react_scroll__WEBPACK_IMPORTED_MODULE_9__.animateScroll.scrollToTop({
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: "blockContainer"
    });
  }

  _getBlock(height) {
    if (height) {
      height = parseInt(height, 10);

      if (!this.props.blocks.get(height)) {
        actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_3__["default"].getBlock(height);
      }
    }
  }

  _nextBlock() {
    let height = this.props.match.params.height;
    let nextBlock = Math.min(this.props.dynGlobalObject.get("head_block_number"), parseInt(height, 10) + 1);
    this.props.history.push(`/block/${nextBlock}`);
  }

  _previousBlock() {
    let height = this.props.match.params.height;
    let previousBlock = Math.max(1, parseInt(height, 10) - 1);
    this.props.history.push(`/block/${previousBlock}`);
  }

  toggleInput(e) {
    e.preventDefault();
    this.setState({
      showInput: true
    });
  }

  _onKeyDown(e) {
    if (e && e.keyCode === 13) {
      this.props.history.push(`/block/${e.target.value}`);
      this.setState({
        showInput: false
      });
    }
  }

  _onSubmit() {
    const value = this.refs.blockInput.value;

    if (value) {
      this._onKeyDown({
        keyCode: 13,
        target: {
          value
        }
      });
    }
  }

  componentDidUpdate() {
    let {
      blocks
    } = this.props;
    let height = parseInt(this.props.height, 10);
    let block = blocks.get(height);

    if (this.props.scrollToIndex && !this.state.scrollEnded && block) {
      react_scroll__WEBPACK_IMPORTED_MODULE_9__.scroller.scrollTo(`tx_${this.props.scrollToIndex}`, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -100,
        containerId: "blockContainer"
      });
    }
  }

  render() {
    const {
      showInput
    } = this.state;
    let {
      blocks
    } = this.props;
    let height = parseInt(this.props.height, 10);
    let block = blocks.get(height);
    let blockHeight = showInput ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "inline-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      ref: "blockInput",
      type: "number",
      onKeyDown: this._onKeyDown.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this._onSubmit.bind(this),
      className: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "explorer.block.go_to"
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      style: {
        textTransform: "uppercase"
      },
      component: "span",
      content: "explorer.block.title"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: this.toggleInput.bind(this)
    }, "\xA0#", height));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block page-layout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block main-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content",
      id: "blockContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow medium-offset-2 medium-8 large-offset-3 large-6 small-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
      className: "text-center"
    }, blockHeight), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      component: "span",
      content: "explorer.block.date"
    }), ":", " ", block ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedDate, {
      value: block.timestamp,
      format: "full"
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      component: "span",
      content: "explorer.block.witness"
    }), ":", " ", block ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToWitnessById__WEBPACK_IMPORTED_MODULE_8__["default"], {
      witness: block.witness
    }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      component: "span",
      content: "explorer.block.previous"
    }), ": ", block ? block.previous : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      component: "span",
      content: "explorer.block.transactions"
    }), ": ", block ? block.transactions.length : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "clearfix",
      style: {
        marginBottom: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button float-left outline",
      onClick: this._previousBlock.bind(this)
    }, "\u2190"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button float-right outline",
      onClick: this._nextBlock.bind(this)
    }, "\u2192")), block ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransactionList, {
      block: block
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: 20
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: this.scrollToTop
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "global.return_to_top"
    })))))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_7__["default"])(Block));

/***/ }),

/***/ 3360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1820);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1920);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3361);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class BlockContainer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let height = parseInt(this.props.match.params.height, 10);
    let txIndex = this.props.match.params.txIndex ? parseInt(this.props.match.params.txIndex) : 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(alt_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      stores: [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
      inject: {
        blocks: () => {
          return stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().blocks;
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Block__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
      height: height,
      scrollToIndex: txIndex
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockContainer);

/***/ }),

/***/ 2753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1939);
/* harmony import */ var _LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2386);





class LinkToWitnessById extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    witness: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainObject.isRequired
  };

  render() {
    let witness_account = this.props.witness.get("witness_account");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LinkToAccountById__WEBPACK_IMPORTED_MODULE_3__["default"], {
      account: witness_account
    });
  }

}

LinkToWitnessById = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_2__["default"])(LinkToWitnessById);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkToWitnessById);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suY2RiZTQwNTgyM2MyMmE3NDk5YWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBOztBQUVBO0FBQ0E7O0FBakNBOztBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUZBO0FBT0E7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBUUE7O0FBbk9BOztBQXNPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBVUE7QUFDQTtBQUhBO0FBT0E7O0FBdkJBOztBQTBCQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFSQTs7QUFVQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQmxvY2tjaGFpbi9CbG9jay5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQmxvY2tjaGFpbi9CbG9ja0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9MaW5rVG9XaXRuZXNzQnlJZC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtGb3JtYXR0ZWREYXRlfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQgQmxvY2tjaGFpbkFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQmxvY2tjaGFpbkFjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tIFwiLi9UcmFuc2FjdGlvblwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuaW1wb3J0IExpbmtUb1dpdG5lc3NCeUlkIGZyb20gXCIuLi9VdGlsaXR5L0xpbmtUb1dpdG5lc3NCeUlkXCI7XG5pbXBvcnQge0VsZW1lbnQsIEV2ZW50cywgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsIHNjcm9sbGVyfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmNsYXNzIFRyYW5zYWN0aW9uTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gbmV4dFByb3BzLmJsb2NrLmlkICE9PSB0aGlzLnByb3BzLmJsb2NrLmlkO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtibG9ja30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb25zID0gbnVsbDtcblxuICAgICAgICB0cmFuc2FjdGlvbnMgPSBbXTtcblxuICAgICAgICBpZiAoYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9ucyA9IFtdO1xuXG4gICAgICAgICAgICBibG9jay50cmFuc2FjdGlvbnMuZm9yRWFjaCgodHJ4LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgdHhfJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YHR4XyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9e2Jsb2NrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4PXt0cnh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9FbGVtZW50PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8ZGl2Pnt0cmFuc2FjdGlvbnN9PC9kaXY+O1xuICAgIH1cbn1cblxuY2xhc3MgQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGR5bkdsb2JhbE9iamVjdDogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBibG9ja3M6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZHluR2xvYmFsT2JqZWN0OiBcIjIuMS4wXCIsXG4gICAgICAgIGJsb2Nrczoge30sXG4gICAgICAgIGhlaWdodDogMVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dJbnB1dDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvVG9wID0gdGhpcy5zY3JvbGxUb1RvcC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9nZXRCbG9jayh0aGlzLnByb3BzLmhlaWdodCk7XG5cbiAgICAgICAgRXZlbnRzLnNjcm9sbEV2ZW50LnJlZ2lzdGVyKFwiYmVnaW5cIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImJlZ2luXCIsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV2ZW50cy5zY3JvbGxFdmVudC5yZWdpc3RlcihcImVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZW5kXCIsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzY3JvbGxFbmRlZDogdHJ1ZX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAobnAuaGVpZ2h0ICE9PSB0aGlzLnByb3BzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5fZ2V0QmxvY2sobnAuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFJbW11dGFibGUuaXMobnAuYmxvY2tzLCB0aGlzLnByb3BzLmJsb2NrcykgfHxcbiAgICAgICAgICAgIG5wLmhlaWdodCAhPT0gdGhpcy5wcm9wcy5oZWlnaHQgfHxcbiAgICAgICAgICAgIG5wLmR5bkdsb2JhbE9iamVjdCAhPT0gdGhpcy5wcm9wcy5keW5HbG9iYWxPYmplY3QgfHxcbiAgICAgICAgICAgIG5zLnNob3dJbnB1dCAhPT0gdGhpcy5zdGF0ZS5zaG93SW5wdXRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUb1RvcCgpIHtcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvVG9wKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgZGVsYXk6IDEwMCxcbiAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5lcklkOiBcImJsb2NrQ29udGFpbmVyXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldEJsb2NrKGhlaWdodCkge1xuICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBwYXJzZUludChoZWlnaHQsIDEwKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5ibG9ja3MuZ2V0KGhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICBCbG9ja2NoYWluQWN0aW9ucy5nZXRCbG9jayhoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX25leHRCbG9jaygpIHtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmhlaWdodDtcbiAgICAgICAgbGV0IG5leHRCbG9jayA9IE1hdGgubWluKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5keW5HbG9iYWxPYmplY3QuZ2V0KFwiaGVhZF9ibG9ja19udW1iZXJcIiksXG4gICAgICAgICAgICBwYXJzZUludChoZWlnaHQsIDEwKSArIDFcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9ibG9jay8ke25leHRCbG9ja31gKTtcbiAgICB9XG5cbiAgICBfcHJldmlvdXNCbG9jaygpIHtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmhlaWdodDtcbiAgICAgICAgbGV0IHByZXZpb3VzQmxvY2sgPSBNYXRoLm1heCgxLCBwYXJzZUludChoZWlnaHQsIDEwKSAtIDEpO1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2Jsb2NrLyR7cHJldmlvdXNCbG9ja31gKTtcbiAgICB9XG5cbiAgICB0b2dnbGVJbnB1dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0lucHV0OiB0cnVlfSk7XG4gICAgfVxuXG4gICAgX29uS2V5RG93bihlKSB7XG4gICAgICAgIGlmIChlICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYmxvY2svJHtlLnRhcmdldC52YWx1ZX1gKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dJbnB1dDogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblN1Ym1pdCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlZnMuYmxvY2tJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9vbktleURvd24oe2tleUNvZGU6IDEzLCB0YXJnZXQ6IHt2YWx1ZX19KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IHtibG9ja3N9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHRoaXMucHJvcHMuaGVpZ2h0LCAxMCk7XG4gICAgICAgIGxldCBibG9jayA9IGJsb2Nrcy5nZXQoaGVpZ2h0KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zY3JvbGxUb0luZGV4ICYmICF0aGlzLnN0YXRlLnNjcm9sbEVuZGVkICYmIGJsb2NrKSB7XG4gICAgICAgICAgICBzY3JvbGxlci5zY3JvbGxUbyhgdHhfJHt0aGlzLnByb3BzLnNjcm9sbFRvSW5kZXh9YCwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwLFxuICAgICAgICAgICAgICAgIGRlbGF5OiAxMDAsXG4gICAgICAgICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9mZnNldDogLTEwMCxcbiAgICAgICAgICAgICAgICBjb250YWluZXJJZDogXCJibG9ja0NvbnRhaW5lclwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3Nob3dJbnB1dH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQge2Jsb2Nrc30gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5oZWlnaHQsIDEwKTtcbiAgICAgICAgbGV0IGJsb2NrID0gYmxvY2tzLmdldChoZWlnaHQpO1xuXG4gICAgICAgIGxldCBibG9ja0hlaWdodCA9IHNob3dJbnB1dCA/IChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9XCJibG9ja0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX29uU3VibWl0LmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay5nb190b1wiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIn19XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2sudGl0bGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy50b2dnbGVJbnB1dC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7I1xuICAgICAgICAgICAgICAgICAgICB7aGVpZ2h0fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHBhZ2UtbGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIG1haW4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiIGlkPVwiYmxvY2tDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG5vLW92ZXJmbG93IG1lZGl1bS1vZmZzZXQtMiBtZWRpdW0tOCBsYXJnZS1vZmZzZXQtMyBsYXJnZS02IHNtYWxsLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2Jsb2NrSGVpZ2h0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2sgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZERhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jsb2NrLnRpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLndpdG5lc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2sgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtUb1dpdG5lc3NCeUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdG5lc3M9e2Jsb2NrLndpdG5lc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLnByZXZpb3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtibG9jayA/IGJsb2NrLnByZXZpb3VzIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci5ibG9jay50cmFuc2FjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge2Jsb2NrID8gYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aCA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsZWFyZml4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiMXJlbVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbG9hdC1sZWZ0IG91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fcHJldmlvdXNCbG9jay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzg1OTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gZmxvYXQtcmlnaHQgb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9uZXh0QmxvY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4NTk0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvY2sgPyA8VHJhbnNhY3Rpb25MaXN0IGJsb2NrPXtibG9ja30gLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogMjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5zY3JvbGxUb1RvcH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJnbG9iYWwucmV0dXJuX3RvX3RvcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluZFRvQ2hhaW5TdGF0ZShCbG9jayk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCbG9ja2NoYWluU3RvcmUgZnJvbSBcInN0b3Jlcy9CbG9ja2NoYWluU3RvcmVcIjtcclxuaW1wb3J0IEFsdENvbnRhaW5lciBmcm9tIFwiYWx0LWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcclxuXHJcbmNsYXNzIEJsb2NrQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaGVpZ2h0LCAxMCk7XHJcbiAgICAgICAgbGV0IHR4SW5kZXggPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy50eEluZGV4XHJcbiAgICAgICAgICAgID8gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudHhJbmRleClcclxuICAgICAgICAgICAgOiAwO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QWx0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBzdG9yZXM9e1tCbG9ja2NoYWluU3RvcmVdfVxyXG4gICAgICAgICAgICAgICAgaW5qZWN0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBCbG9ja2NoYWluU3RvcmUuZ2V0U3RhdGUoKS5ibG9ja3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9JbmRleD17dHhJbmRleH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQWx0Q29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4vTGlua1RvQWNjb3VudEJ5SWRcIjtcclxuXHJcbmNsYXNzIExpbmtUb1dpdG5lc3NCeUlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgd2l0bmVzczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgd2l0bmVzc19hY2NvdW50ID0gdGhpcy5wcm9wcy53aXRuZXNzLmdldChcIndpdG5lc3NfYWNjb3VudFwiKTtcclxuICAgICAgICByZXR1cm4gPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e3dpdG5lc3NfYWNjb3VudH0gLz47XHJcbiAgICB9XHJcbn1cclxuTGlua1RvV2l0bmVzc0J5SWQgPSBCaW5kVG9DaGFpblN0YXRlKExpbmtUb1dpdG5lc3NCeUlkKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmtUb1dpdG5lc3NCeUlkO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=