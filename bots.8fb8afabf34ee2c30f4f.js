"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[5],{

/***/ 2763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2764);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(589);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1816);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2074);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2073);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1825);








class Bots extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.strategies = lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].strategies;
    this.state = {
      selectStrategy: Object.keys(this.strategies)[0],
      bots: [],
      selectBot: 0,
      enableCreate: false,
      botRun: false
    };
  }

  componentDidMount() {
    let bots = lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].getBots(this.props.currentAccount);

    this._upd(bots);
  }

  _upd(bots) {
    this.setState({
      bots,
      selectBot: 0,
      botRun: bots[0] ? bots[0].run : false
    });
  }

  handleChangeStrategy = event => {
    this.setState({
      selectStrategy: event.target.value
    });
  };
  handleChangeBot = event => {
    let selectBot = event.target.value;
    this.setState({
      selectBot,
      botRun: this.state.bots[selectBot].run
    });
  };
  handleCreate = event => {
    event.preventDefault();
    let bots = this.state.bots;
    bots.push(lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].create(this.state.selectStrategy, this.props.currentAccount, this.createForm.state));
    this.setState({
      bots
    });
    if (this.createForm.validate) this.createForm.validate("name", this.createForm.state.name);
  };
  handleEnableCreate = enableCreate => {
    if (this.state.enableCreate != enableCreate) this.setState({
      enableCreate
    });
  };
  handleStartBot = async () => {
    let bot = this.state.bots[this.state.selectBot];
    await bot.start();
    this.setState({
      botRun: bot.run
    });
  };
  handleStopBot = async () => {
    let bot = this.state.bots[this.state.selectBot];
    await bot.stop();
    this.setState({
      botRun: bot.run
    });
  };
  handleDeleteBot = async () => {
    await lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](this.state.bots[this.state.selectBot]);
    this.setState({
      bots: lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].getBots(this.props.currentAccount),
      selectBot: 0
    });
  };

  render() {
    //console.log("start render main page", this.props)
    if (this.props.currentAccount === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Redirect, {
        to: "/"
      });
    }

    let CreateForm = this.strategies[this.state.selectStrategy].create;
    let bot = this.state.bots[this.state.selectBot] || null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block shrink vertical medium-horizontal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      style: {
        paddingBottom: 20,
        overflow: "visible"
      },
      className: "grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",
      onSubmit: this.handleCreate,
      noValidate: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "left-label",
      style: {
        marginTop: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        paddingRight: 5,
        position: "relative",
        top: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
      to: "/help/bots/introduction"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "question-circle",
      title: "icons.question_circle",
      size: "2x"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.select_strategy"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "form-control bts-select ",
      value: this.state.selectStrategy,
      onChange: this.handleChangeStrategy
    }, Object.keys(this.strategies).map(name => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: name,
      value: name
    }, name))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CreateForm, {
      ref: form => {
        this.createForm = form;
      },
      account: this.props.currentAccount,
      name: this.state.selectStrategy,
      enableCreate: this.handleEnableCreate
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button no-margin",
      type: "submit",
      disabled: !this.state.enableCreate
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.create"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "left-label",
      style: {
        marginTop: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.bot_state"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      className: "form-control bts-select",
      value: this.state.selectBot,
      onChange: this.handleChangeBot
    }, this.state.bots.map((bot, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: bot.name,
      value: index
    }, `${bot.name} (${bot.constructor.name})`))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, bot ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bot.state, {
      key: bot.name,
      bot: bot
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button",
      onClick: this.handleStartBot,
      disabled: this.state.botRun,
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.start"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button",
      onClick: this.handleStopBot,
      disabled: !this.state.botRun,
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.stop"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button",
      onClick: this.handleDeleteBot,
      disabled: this.state.botRun,
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.delete"
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.select_bot"
    }))))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,alt_react__WEBPACK_IMPORTED_MODULE_3__.connect)(Bots, {
  listenTo() {
    return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
  },

  getProps() {
    return {
      currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().currentAccount || stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().passwordAccount
    };
  }

}));

/***/ }),

/***/ 2791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2713);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2764);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2768);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2767);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2792);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);








class Create extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    name: "",
    base: "GPH",
    quote: "RUDEX.USDT",
    amount: 1000,
    percentAmount: false,
    balance: "5000",
    spread: 2,
    distance: 4,
    validate: ["name"],
    fromMarket: false
  };

  componentDidMount() {
    this.assetValidate = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(this.assetValidate, 200);
  }

  assetValidate = async name => {
    let asset = this.state[name];
    let blockchainAssets = (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.list_assets(asset, 1))[0];
    let validate = this.state.validate;
    if (asset !== blockchainAssets.symbol) validate.push(name);else {
      validate = validate.filter(input => input !== name);
    }
    this.setState({
      validate
    });
    this.props.enableCreate(this.state.validate.length == 0);
  };
  handleChange = event => {
    let name = event.target.name,
        value = event.target.value;
    if (["base", "quote"].includes(name)) value = value.toUpperCase();
    this.setState({
      [name]: value
    }, () => this.validate(name, value));
  };
  validate = (name, value) => {
    let validate = this.state.validate;

    switch (name) {
      case "name":
        if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].hasBot(this.props.account, this.props.name, value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;

      case "base":
      case "quote":
        if (value.length !== 0) {
          this.assetValidate(name);
        } else {
          validate.push(name);
          this.setState({
            validate
          });
        }

        break;

      case "balance":
        if (value !== "-" && isNaN(+value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;

      case "spread":
      case "distance":
        if (value === "" || isNaN(+value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;
    }

    console.log(validate);
    this.props.enableCreate(validate.length == 0);
  };

  render() {
    let {
      validate,
      name,
      amount,
      balance,
      spread,
      distance
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "bots.common.name"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "name",
      value: name,
      onChange: this.handleChange,
      border: validate.includes("name")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block horizontal",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "bots.percent_up.sell_asset"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "base",
      value: this.state.base,
      onChange: this.handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "bots.common.amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      onChange: this.handleChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: true,
      name: "percentAmount"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "bots.common.balance_percent"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: false,
      name: "percentAmount",
      defaultChecked: true
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "bots.common.balance_value"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "amount",
      value: amount,
      onChange: this.handleChange,
      border: validate.includes("amount")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "bots.common.balance"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "balance",
      value: balance,
      onChange: this.handleChange,
      border: validate.includes("balance")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "bots.percent_up.get_asset"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "quote",
      value: this.state.quote,
      onChange: this.handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "bots.common.spread"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "spread",
      value: spread,
      onChange: this.handleChange,
      border: validate.includes("spread")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "bots.percent_up.distance"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "distance",
      value: distance,
      onChange: this.handleChange,
      border: validate.includes("distance")
    }))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Create);

/***/ }),

/***/ 2793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2768);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2792);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);






class State extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  UNSAFE_componentWillMount() {
    this.setState(Object.assign({
      validate: []
    }, this.props.bot.storage.read()));
  }

  handleChange = event => {
    let name = event.target.name,
        value = event.target.value;
    if (["base", "quote"].includes(name)) value = value.toUpperCase();
    this.setState({
      [name]: value
    }, () => this.validate(name, value));
  };
  validate = (name, value) => {
    let validate = this.state.validate;

    switch (name) {
      case "name":
        if (!/^\w+$/.test(value) || BotManager.hasBot(this.props.account, this.props.name, value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;

      case "base":
      case "quote":
        if (value.length !== 0) {
          this.assetValidate(name);
        } else {
          validate.push(name);
          this.setState({
            validate
          });
        }

        break;

      case "balance":
        if (value !== "-" && isNaN(+value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;

      case "spread":
      case "distance":
        if (value === "" || isNaN(+value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;
    } //this.props.enableCreate(validate.length == 0);

  };
  handleUpdateBot = () => {
    let stateNow = this.props.bot.storage.read();
    this.props.bot.storage.write({ ...stateNow,
      ...this.state
    });
  };

  render() {
    let {
      validate,
      amount,
      balance,
      spread,
      distance
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block horizontal",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.percent_up.sell_asset"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        marginBottom: 30
      },
      name: "base",
      value: {
        value: this.state.base,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__.AssetLabel, {
          name: this.state.base
        })
      },
      clearable: false,
      searchable: false,
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      onChange: this.handleChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: true,
      name: "percentAmount",
      checked: this.state.percentAmount == "true" ? true : false
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.balance_percent"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: false,
      name: "percentAmount",
      checked: this.state.percentAmount == "false" ? true : false
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.balance_value"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "amount",
      value: amount,
      onChange: this.handleChange,
      border: validate.includes("amount")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.balance"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "balance",
      value: balance,
      onChange: this.handleChange,
      border: validate.includes("balance")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.percent_up.get_asset"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        marginBottom: 30
      },
      name: "quote",
      value: {
        value: this.state.quote,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__.AssetLabel, {
          name: this.state.quote
        })
      },
      clearable: false,
      searchable: false,
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.spread"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "spread",
      value: spread,
      onChange: this.handleChange,
      border: validate.includes("spread")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.percent_up.distance"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "distance",
      value: distance,
      onChange: this.handleChange,
      border: validate.includes("distance")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button",
      onClick: this.handleUpdateBot,
      disabled: this.props.bot.run,
      style: {
        marginLeft: 50,
        marginBottom: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.update"
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);

/***/ }),

/***/ 2766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2713);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2764);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2768);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);







class Create extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    name: "",
    quoteAsset: "GPH",
    baseAsset: "RUDEX.USDT",
    quoteAmount: 500.0,
    baseAmount: 10,
    baseSpread: 10,
    quoteSpread: 10,
    quoteBalance: 5000.0,
    baseBalance: 100,
    percentQuoteAmount: false,
    percentBaseAmount: false,
    validate: ["name"],
    fromMarket: false
  };

  componentDidMount() {
    this.assetValidate = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_5__["default"])(this.assetValidate, 200);
  }

  assetValidate = async name => {
    let asset = this.state[name];
    let blockchainAssets = (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__["default"].db.list_assets(asset, 1))[0];
    let validate = this.state.validate;
    if (asset !== blockchainAssets.symbol) validate.push(name);else {
      validate = validate.filter(input => input !== name);
    }
    this.setState({
      validate
    });
    this.props.enableCreate(this.state.validate.length == 0);
  };
  handleChange = event => {
    let name = event.target.name,
        value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    console.log(name, value);
    if (["baseAsset", "quoteAsset"].includes(name)) value = value.toUpperCase();
    this.setState({
      [name]: value
    }, () => this.validate(name, value));
  };
  validate = (name, value) => {
    let validate = this.state.validate;

    switch (name) {
      case "name":
        if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].hasBot(this.props.account, this.props.name, value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;

      case "baseAsset":
      case "quoteAsset":
        if (value.length !== 0) {
          this.assetValidate(name);
        } else {
          validate.push(name);
          this.setState({
            validate
          });
        }

        break;

      case "baseBalance":
      case "quoteBalance":
        if (value !== "-" && isNaN(+value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;

      case "baseAmount":
      case "quoteAmount":
      case "baseSpread":
      case "quoteSpread":
        if (value === "" || isNaN(+value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;

      case "defaultPrice":
        if (!isNaN(+value)) this.setState({
          validate: validate.filter(input => input !== name)
        });else {
          validate.push(name);
          this.setState({
            validate
          });
        }
        break;
    }

    console.log(this.state.validate);
    this.props.enableCreate(this.state.validate.length == 0);
  };

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.name"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block horizontal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.quote"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "quoteAsset",
      value: this.state.quoteAsset,
      onChange: this.handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.balance"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      onChange: this.handleChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: true,
      name: "percentQuoteAmount"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.spread_trade.balance_percent"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: false,
      name: "percentQuoteAmount",
      defaultChecked: true
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.spread_trade.balance_value"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.spread_trade.spread"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.base"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "baseAsset",
      value: this.state.baseAsset,
      onChange: this.handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.balance"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      onChange: this.handleChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: true,
      name: "percentBaseAmount"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.spread_trade.balance_percent"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: false,
      name: "percentBaseAmount",
      defaultChecked: true
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.spread_trade.balance_value"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.spread_trade.spread"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.spread_trade.default_price"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "checkbox",
      name: "fromMarket",
      onChange: this.handleChange,
      checked: this.state.fromMarket
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.spread_trade.get_price_from_market"
    }))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Create);

/***/ }),

/***/ 2783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2768);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);





class State extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  UNSAFE_componentWillMount() {
    this.setState(Object.assign({
      validate: []
    }, this.props.bot.storage.read()));
  }

  handleChange = event => {
    let name = event.target.name,
        value = event.target.value,
        base,
        quote; //console.log(name, value, typeof value);

    switch (name) {
      case "baseAmount":
        base = this.state.base;
        base.amount = value;
        this.setState({
          base
        });
        break;

      case "percentBaseAmount":
        base = this.state.base;
        base.percent = value == "true";
        this.setState({
          base
        });
        break;

      case "baseBalance":
        base = this.state.base;
        base.balance = value;
        this.setState({
          base
        });
        break;

      case "baseSpread":
        base = this.state.base;
        base.spread = value;
        this.setState({
          base
        });
        break;

      case "quoteAmount":
        quote = this.state.quote;
        quote.amount = value;
        this.setState({
          quote
        });
        break;

      case "percentQuoteAmount":
        quote = this.state.quote;
        quote.percent = value == "true";
        this.setState({
          quote
        });
        break;

      case "quoteBalance":
        quote = this.state.quote;
        quote.balance = value;
        this.setState({
          quote
        });
        break;

      case "quoteSpread":
        quote = this.state.quote;
        quote.spread = value;
        this.setState({
          quote
        });
        break;

      case "defaultPrice":
        this.setState({
          defaultPrice: value
        });
        break;

      case "fromMarket":
        this.setState({
          fromMarket: event.target.checked
        });
        break;
    } //this.setState({[name]: value}, () => this.validate(name, value));

  };
  handleUpdateBot = () => {
    let stateNow = this.props.bot.storage.read();
    this.state.base.order = stateNow.base.order;
    this.state.quote.order = stateNow.quote.order;
    this.props.bot.storage.write(this.state);
  };

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block horizontal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50,
        marginTop: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.common.quote"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        marginBottom: 30
      },
      name: "quoteAsset",
      value: {
        value: this.state.quote.asset,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__.AssetLabel, {
          name: this.state.quote.asset
        })
      },
      clearable: false,
      searchable: false,
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.common.balance"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.common.amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: true,
      name: "percentQuoteAmount",
      checked: this.state.quote.percent,
      onChange: this.handleChange
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.spread_trade.balance_percent"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: false,
      name: "percentQuoteAmount",
      checked: !this.state.quote.percent,
      onChange: this.handleChange
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.spread_trade.balance_value"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.spread_trade.spread"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50,
        marginTop: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.common.base"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        marginBottom: 30
      },
      name: "baseAsset",
      value: {
        value: this.state.base.asset,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__.AssetLabel, {
          name: this.state.base.asset
        })
      },
      clearable: false,
      searchable: false,
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.common.balance"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.common.amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: true,
      name: "percentBaseAmount",
      checked: this.state.base.percent,
      onChange: this.handleChange
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.spread_trade.balance_percent"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: false,
      name: "percentBaseAmount",
      checked: !this.state.base.percent,
      onChange: this.handleChange
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.spread_trade.balance_value"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.spread_trade.spread"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.spread_trade.default_price"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      name: "defaultPrice",
      type: "text",
      ref: "input",
      value: this.state.defaultPrice,
      onChange: this.handleChange,
      disabled: this.props.bot.run,
      style: {
        border: this.state.validate.includes("defaultPrice") ? "1px solid red" : "none"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "checkbox",
      name: "fromMarket",
      onChange: this.handleChange,
      checked: this.state.fromMarket,
      disabled: this.props.bot.run
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.spread_trade.get_price_from_market"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button",
      onClick: this.handleUpdateBot,
      disabled: this.props.bot.run,
      style: {
        marginLeft: 50,
        marginBottom: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.common.update"
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);

/***/ }),

/***/ 2788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2713);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2764);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2768);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);







class Create extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    name: "",
    sellAsset: "GPH",
    getAsset: "RUDEX.USDT",
    amount: 1000,
    minAmount: 1,
    stoploss: 0.01,
    percent: 10,
    validate: ["name"]
  };

  componentDidMount() {
    this.assetValidate = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_5__["default"])(this.assetValidate, 200);
  }

  handleChange = event => {
    let name = event.target.name,
        value = event.target.value;
    if (["sellAsset", "getAsset"].includes(name)) value = value.toUpperCase();

    if (name === "minAmount") {
      this.setState({
        minAmount: value,
        stoploss: value / this.state.amount
      }, () => this.validate(name, value));
    } else if (name === "stoploss") {
      this.setState({
        minAmount: this.state.amount * value,
        stoploss: value
      }, () => this.validate(name, value));
    } else if (name === "amount") {
      this.setState({
        amount: value,
        minAmount: value * this.state.stoploss
      }, () => this.validate(name, value));
    } else {
      this.setState({
        [name]: value
      }, () => this.validate(name, value));
    }
  };
  assetValidate = async name => {
    let asset = this.state[name];
    let blockchainAssets = (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__["default"].db.list_assets(asset, 1))[0];
    let validate = this.state.validate;
    if (asset !== blockchainAssets.symbol) validate.push(name);else {
      validate = validate.filter(input => input !== name);
    }
    this.setState({
      validate
    });
    this.props.enableCreate(this.state.validate.length == 0);
  };
  validate = (name, value) => {
    let validate = this.state.validate;

    switch (name) {
      case "name":
        if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].hasBot(this.props.account, this.props.name, value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;

      case "sellAsset":
      case "getAsset":
        if (value.length !== 0) {
          this.assetValidate(name);
        } else {
          validate.push(name);
          this.setState({
            validate
          });
        }

        break;

      case "amount":
      case "minAmount":
      case "pecent":
      case "stoploss":
        if (value === "" || isNaN(+value)) {
          validate.push(name);
          this.setState({
            validate
          });
        } else {
          this.setState({
            validate: validate.filter(input => input !== name)
          });
        }

        break;
    }

    console.log(this.state.validate);
    this.props.enableCreate(this.state.validate.length == 0);
  };

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.name"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      name: "name",
      id: "name",
      type: "text",
      ref: "input",
      value: this.state.name,
      onChange: this.handleChange,
      style: {
        border: this.state.validate.includes("name") ? "1px solid red" : "none"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block horizontal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.trailing_stop.sell_asset"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "sellAsset",
      value: this.state.sellAsset,
      onChange: this.handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.trailing_stop.amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.trailing_stop.get_asset"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "getAsset",
      value: this.state.getAsset,
      onChange: this.handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.trailing_stop.min_amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.trailing_stop.stoploss"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.trailing_stop.trailing_percent"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Create);

/***/ }),

/***/ 2789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2768);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);





class State extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    validate: []
  };

  UNSAFE_componentWillMount() {
    let state = this.props.bot.storage.read();
    state.stoploss = state.minAmount / state.amount;
    this.setState(state);
  }

  handleChange = event => {
    let name = event.target.name,
        value = event.target.value;
    if (["sellAsset", "getAsset"].includes(name)) value = value.toUpperCase();

    if (name === "minAmount") {
      this.setState({
        minAmount: value,
        stoploss: value / this.state.amount
      }, () => this.validate(name, value));
    } else if (name === "stoploss") {
      this.setState({
        minAmount: this.state.amount * value,
        stoploss: value
      }, () => this.validate(name, value));
    } else if (name === "amount") {
      this.setState({
        amount: value,
        minAmount: value * this.state.stoploss
      }, () => this.validate(name, value));
    } else {
      this.setState({
        [name]: value
      }, () => this.validate(name, value));
    }

    this.setState({
      [name]: value
    });
  };
  validate = (name, value) => {};
  handleUpdateBot = () => {
    this.props.bot.storage.write(this.state);
  };

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block horizontal",
      style: {
        marginLeft: 50,
        marginTop: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.trailing_stop.sell_asset"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        marginBottom: 30
      },
      name: "sellAsset",
      value: {
        value: this.state.sellAsset,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__.AssetLabel, {
          name: this.state.sellAsset
        })
      },
      clearable: false,
      searchable: false,
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.trailing_stop.amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.trailing_stop.get_asset"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        marginBottom: 30
      },
      name: "getAsset",
      value: {
        value: this.state.getAsset,
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__.AssetLabel, {
          name: this.state.getAsset
        })
      },
      clearable: false,
      searchable: false,
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.trailing_stop.min_amount"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.trailing_stop.stoploss"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "left-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.trailing_stop.trailing_percent"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "button",
      onClick: this.handleUpdateBot,
      disabled: this.props.bot.run,
      style: {
        marginLeft: 50,
        marginBottom: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "bots.common.update"
    })));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);

/***/ }),

/***/ 2768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetLabel": () => (/* binding */ AssetLabel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2713);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2769);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2770);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2677);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2771);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(621);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);









class AssetLabel extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    name: null
  };
  hidePrefix = name => {
    let arr = name.split(".");
    if ((0,branding__WEBPACK_IMPORTED_MODULE_6__.getAssetHideNamespaces)().includes(`${arr[0]}.`)) arr.shift();
    return arr.join(".");
  };

  UNSAFE_componentWillMount() {
    this.setAssetName(this.props.name);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) this.setAssetName(nextProps.name);
  }

  setAssetName = async name => {
    let asset = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__["default"][name];
    this.setState({
      name: asset.bitasset_data_id ? `gp${name}` : name
    });
  };

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      replaceNoneToBts: false,
      maxWidth: 30,
      name: this.props.name
    }), this.hidePrefix(this.state.name || this.props.name));
  }

}
var options = (0,branding__WEBPACK_IMPORTED_MODULE_6__.getMyMarketsQuotes)(true).map(name => ({
  value: name,
  label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetLabel, {
    name: name
  })
}));

class AssetSelector extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  componentDidMount() {
    this.promiseOptions = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_8__["default"])(this.promiseOptions, 200);
  }

  onChange = option => {
    console.log("onChange", option);
    this.props.onChange({
      target: {
        name: this.props.name,
        value: option ? option.value : ""
      }
    });
  };
  promiseOptions = async inputValue => {
    inputValue = inputValue.toUpperCase();
    let result = options.filter(i => i.value == inputValue);

    if (result.length === 0 && inputValue) {
      let asset = (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__["default"].db.list_assets(inputValue, 1))[0];

      if (asset && !options.find(i => i.value == asset.symbol)) {
        options.push({
          value: asset.symbol,
          label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetLabel, {
            name: asset.symbol
          })
        });
      }
    }

    return {
      options
    };
  };

  render() {
    let value = options.find(option => option.value === this.props.value);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: value,
      onChange: this.onChange,
      loadOptions: this.promiseOptions,
      searchPromptText: counterpart__WEBPACK_IMPORTED_MODULE_7___default().translate("bots.asset_selector.wait"),
      placeholder: counterpart__WEBPACK_IMPORTED_MODULE_7___default().translate("bots.asset_selector.placeholder")
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetSelector);

/***/ }),

/***/ 2678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1940);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1938);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1939);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);






class DynamicObjectResolver extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    dos: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObjectsList
  };
  static defaultProps = {
    dos: (0,immutable__WEBPACK_IMPORTED_MODULE_4__.List)()
  };

  constructor() {
    super();
    this.getDynamicObject = this.getDynamicObject.bind(this);
  }

  getDynamicObject(id) {
    return this.props.dos.find(a => {
      return a && a.get("id") === id;
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children), { ...this.props,
      getDynamicObject: this.getDynamicObject
    });
  }

}

DynamicObjectResolver = (0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(DynamicObjectResolver);
/**
 * HOC that resolves either a number of assets directly with ChainAsset,
 * or a list of assets with ChainAssets
 *
 *  Options
 *  -'propNames' an array of prop names to be resolved as assets. (defaults to "asset" or "assets")
 *  -'defaultProps' default values to use for objects (optional)
 *  -'asList' defines whether to use ChainAssetsList or not (useful for resolving large quantities of assets)
 *  -'withDynamic' defines whether to also resolve dynamic objects or not
 */

function AssetWrapper(Component, options = {}) {
  options.propNames = options.propNames || [!!options.asList ? "assets" : "asset"];
  const finalPropTypes = options.propNames.reduce((res, type) => {
    res[type] = options.asList ? components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAssetsList : components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired;
    return res;
  }, {});
  let defaultProps = Object.keys(finalPropTypes).reduce((res, key) => {
    let current = options.defaultProps && options.defaultProps[key];
    res[key] = !!options.asList ? (0,immutable__WEBPACK_IMPORTED_MODULE_4__.List)(current || []) : current || "1.3.0";
    return res;
  }, {});

  if (options.defaultProps && !!options.defaultProps.tempComponent) {
    defaultProps.tempComponent = options.defaultProps.tempComponent;
  }

  class AssetsResolver extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static propTypes = finalPropTypes;
    static defaultProps = defaultProps;

    render() {
      let finalAssets = {};
      let passTroughProps = {};
      let dos = (0,immutable__WEBPACK_IMPORTED_MODULE_4__.List)();
      Object.keys(this.props).forEach(prop => {
        if (this.props[prop] && options.propNames.indexOf(prop) !== -1) {
          if (options.withDynamic) {
            if (!options.asList) {
              dos = dos.push(this.props[prop].get("dynamic_asset_data_id"));
            } else {
              this.props[prop].forEach(a => {
                if (!!a) dos = dos.push(a.get("dynamic_asset_data_id"));
              });
            }
          }

          finalAssets[prop] = options.asList ? this.props[prop].filter(a => !!a) : this.props[prop];
        } else {
          passTroughProps[prop] = this.props[prop];
        }
      });
      let wrapped = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children), { ...passTroughProps,
        ...finalAssets
      });
      if (options.withDynamic) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DynamicObjectResolver, {
        dos: dos
      }, wrapped);else return wrapped;
    }

  }

  AssetsResolver = (0,components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(AssetsResolver);

  class Wrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetsResolver, this.props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {
        ref: "bound_component"
      }));
    }

  }

  Wrapper.displayName = `Wrapper(${(0,common_reactUtils__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(Component)})`;
  return Wrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssetWrapper);

/***/ }),

/***/ 2792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



class Input extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let {
      name,
      value,
      onChange,
      border,
      ...props
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
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

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ 2677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetImageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2678);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(621);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class AssetImage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    replaceNoneToBts: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
    maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  };
  static defaultProps = {
    replaceNoneToBts: true,
    maxWidth: 20
  };

  constructor(props) {
    super(props);
    this.state = {
      imgError: false
    };
  }

  shouldComponentUpdate(np, ns) {
    return this.props.asset !== np.asset || this.props.maxWidth !== np.maxWidth || this.props.whiteList !== np.whiteList || this.state.imgError !== ns.imgError;
  }

  _onError(imgName) {
    if (!this.state.imgError) {
      if (this.props.replaceNoneToBts) this.refs[imgName.toLowerCase()].src = "asset-symbols/unknown.png";else this.refs[imgName.toLowerCase()].remove();
      this.setState({
        imgError: true
      });
    }
  }

  render() {
    let {
      asset
    } = this.props;

    function getImageWrapper(asset) {
      if (asset === null) return "unknown";
      let symbol = asset.get("symbol");
      return (0,branding__WEBPACK_IMPORTED_MODULE_2__.getImageName)(symbol);
    }

    const imgName = getImageWrapper(asset);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      ref: imgName.toLowerCase(),
      className: "column-hide-small",
      onError: this._onError.bind(this, imgName),
      style: {
        maxWidth: this.props.maxWidth,
        marginRight: 5,
        marginTop: "-3px"
      },
      src: `${""}asset-symbols/${imgName.toLowerCase()}.png`
    });
  }

}

AssetImage = (0,_Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(AssetImage);
class AssetImageWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AssetImage, _extends({}, this.props, {
      asset: this.props.name
    }));
  }

}

/***/ }),

/***/ 2785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(437);
/* harmony import */ var _app_lib_bots_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2786);
/* harmony import */ var _app_actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(657);
/* harmony import */ var _app_actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(643);




/*/
    Bot progenitor:
        3 required methods for create new bots:
            - constructor
            - initStartData
            - checkOrders
 */

class BotFather {
  static create = null;
  state = null;

  constructor(account, storage, initData) {
    if (initData) {
      /*storage.init({
          name: initData.name,
          defaultPrice: initData.defaultPrice
      });*/
    }

    this.account = new _app_lib_bots_account__WEBPACK_IMPORTED_MODULE_1__["default"](account);
    this.storage = storage;
    this.name = storage.read().name;
    this.logger = console;
    this.queueEvents = Promise.resolve();
    this.run = false;
  }

  async initStartData() {//Example

    /*
    let state = this.storage.read();
     this.base = await Assets[state.base];
    this.quote = await Assets[state.quote];
    */
  } //Here Logic - Change for new strategy


  async checkOrders() {
    let state = this.storage.read();
    console.log("checkOrders"); //Strategy
    //...
  } //=============================================
  //Common Methods
  //=============================================


  async start() {
    await this.initStartData();
    await _app_actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_3__["default"].unlock();
    _app_actions_SettingsActions__WEBPACK_IMPORTED_MODULE_2__["default"].changeSetting({
      setting: "walletLockTimeout",
      value: 0
    });
    bitsharesjs__WEBPACK_IMPORTED_MODULE_0__.ChainStore.subscribe(this.queue);
    this.run = true;
  }

  async stop() {
    bitsharesjs__WEBPACK_IMPORTED_MODULE_0__.ChainStore.unsubscribe(this.queue);
    this.run = false;
    await this.queueEvents;
  }
  /*
      See SpreadTrade or PercentUp  delete() to:
          to implement a general method for deleting orders for all inherited bots , taking into account the internal data structure
   */


  async delete() {
    this.storage.delete();
  }

  queue = () => {
    this.queueEvents = this.queueEvents.then(this.checkOrders).catch(this.logger.error.bind(this.logger));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BotFather);

/***/ }),

/***/ 2790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2791);
/* harmony import */ var components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2793);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2770);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(638);
/* harmony import */ var _BotFather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2785);







class PercentUp extends _BotFather__WEBPACK_IMPORTED_MODULE_5__["default"] {
  static create = components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__["default"];
  state = components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__["default"];

  constructor(account, storage, initData) {
    if (initData) {
      let {
        name,
        base,
        quote,
        amount,
        percentAmount,
        balance,
        spread,
        distance
      } = initData;
      storage.init({
        name,
        base,
        quote,
        amount,
        percentAmount,
        balance,
        spread,
        distance,
        orders: []
      });
    } //BotFather


    super(account, storage, initData);
  }

  async initStartData() {
    let state = this.storage.read();
    this.base = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__["default"][state.base];
    this.quote = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__["default"][state.quote];
  }

  checkOrders = async () => {
    let state = this.storage.read(),
        log = (...args) => this.logger.log(`[${state.name}]`, ...args),
        accountBalances = (await this.account.balances(this.base.id, this.quote.id)).reduce((acc, balance) => {
      this.base.id === balance.asset_id ? acc.base = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(balance.amount).div(10 ** this.base.precision).toNumber() : acc.quote = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(balance.amount).div(10 ** this.quote.precision).toNumber();
      return acc;
    }, {}),
        balance = state.balance === "-" ? 0 : state.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.balance),
        amount = state.percentAmount.toString() == "true" ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(balance).times(state.amount).div(100).toNumber() : state.amount,
        orders = (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__["default"].db.get_objects(state.orders.map(order => order.id).filter(id => id))).map(order => order && order.id).filter(id => id),
        processOrders = state.orders.filter(order => !orders.includes(order.id)),
        orderFee = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])((await lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__["default"].db.get_global_properties()).parameters.current_fees.parameters[1][1].fee).div(10 ** 5).toNumber();

    if (processOrders.length > 0) await this.base.update();
    let promises = processOrders.map(async order => {
      if (order.state === "buy") {
        order.id = null;

        if (!["", "-"].includes(state.balance)) {
          let amountToMarket = Math.floor((0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this.base.options.market_fee_percent).div(100 * 100).times(order.base).times(10 ** this.base.precision).toString());
          state.balance = Number(state.balance) + Number(order.base) - (amountToMarket !== 0 ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(amountToMarket).div(10 ** this.base.precision).toNumber() : this.base.options.market_fee_percent !== 0 ? 10 ** -this.base.precision : 0);
        }
      } else {
        let forQuoteFee = this.quote.symbol === "GPH" ? (isNaN(order.fee) ? orderFee : order.fee) + orderFee : 0,
            forBaseFee = this.base.symbol === "GPH" ? (isNaN(order.fee) ? orderFee : order.fee) + orderFee : 0,
            quoteAssetAmount = {
          asset_id: this.quote.id,
          amount: Math.min(Number(accountBalances.quote), Number(order.quote)) - forQuoteFee
        },
            percentOnMarket = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this.base.options.market_fee_percent).div(100 * 100),
            baseAssetAmount = {
          asset_id: this.base.id,
          amount: (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(order.base).times(1 + Number(state.spread) / 100 + percentOnMarket.toNumber()).plus(forBaseFee)
        };
        log(`buy ${this.base.symbol}: amount=${baseAssetAmount.amount.toNumber()} price=${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(quoteAssetAmount.amount).div(baseAssetAmount.amount).toNumber()} ${this.base.symbol}/${this.quote.symbol}`);
        let obj = await this.account.sell(quoteAssetAmount, baseAssetAmount);
        order.state = "buy";
        order.id = obj ? obj.id : "1.7.0";
        order.base = baseAssetAmount.amount.toNumber();
      }
    });
    await Promise.all(promises);
    let orderBook = await lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__["default"].db.get_order_book(this.quote.symbol, this.base.symbol, 50);
    let quoteAmount = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0),
        baseAmount = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0);

    for (let i = 0; i < orderBook.asks.length; i++) {
      let ask = orderBook.asks[i];
      let quote = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ask.base);
      let base = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ask.quote);
      let diffBase = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(amount).minus(baseAmount);

      if (base.isEqualTo(diffBase)) {
        quoteAmount = quoteAmount.plus(quote);
        baseAmount = baseAmount.plus(base);
        break;
      } else if (base.isLessThan(diffBase)) {
        quoteAmount = quoteAmount.plus(quote);
        baseAmount = baseAmount.plus(base);
      } else if (base.isGreaterThan(diffBase)) {
        baseAmount = baseAmount.plus(diffBase);
        quoteAmount = quoteAmount.plus((0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ask.price).times(diffBase));
        break;
      }
    }

    let price = quoteAmount.div(baseAmount),
        lowPrice = null;
    state.orders.forEach(order => {
      let orderPrice = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(order.quote).div(order.base);
      if (!lowPrice || orderPrice.minus(price).abs().isLessThan(lowPrice.minus(price).abs())) lowPrice = orderPrice;
    });
    let isGreaterDistance = !!lowPrice && lowPrice.minus(price).abs().div(lowPrice).times(100).isGreaterThan(state.distance);
    log(`Orders exists: ${!!lowPrice}, balance > amount: ${balance > amount}, lowPrice - price > distance: ${isGreaterDistance}`);

    if (balance > amount && (!lowPrice || isGreaterDistance)) {
      let baseAssetAmount = {
        asset_id: this.base.id,
        amount
      },
          quoteAssetAmount = {
        asset_id: this.quote.id,
        amount: quoteAmount
      },
          obj = await this.account.buy(quoteAssetAmount, baseAssetAmount),
          order = {
        state: "sell",
        base: amount,
        quote: quoteAssetAmount.amount.toNumber(),
        id: obj ? obj.id : "1.7.0",
        fee: orderFee
      };
      state.orders.push(order);
      log(`sell ${this.base.symbol}: amount=${amount}, price=${price.toNumber()} ${this.base.symbol}/${this.quote.symbol}`);
      if (!["", "-"].includes(state.balance)) state.balance = Number(state.balance) - amount;
    }

    state.orders = state.orders.filter(order => order.id !== null);
    this.storage.write(state);
  };

  async delete() {
    let state = this.storage.read();
    state.orders.forEach(async order => {
      try {
        this.logger.info(`delete orderId: ${order.id}`);
        await this.account.cancelOrder(order.id);
      } catch (error) {
        this.logger.error(error);
      }
    });
    this.storage.delete();
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PercentUp);

/***/ }),

/***/ 2765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2766);
/* harmony import */ var components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2783);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2770);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(638);
/* harmony import */ var _BotFather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2785);






bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"].config({
  ERRORS: false
});

class SpreadTrade extends _BotFather__WEBPACK_IMPORTED_MODULE_5__["default"] {
  static create = components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__["default"];
  state = components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__["default"];

  constructor(account, storage, initData) {
    if (initData) {
      storage.init({
        name: initData.name,
        base: {
          asset: initData.baseAsset,
          balance: initData.baseBalance,
          spread: initData.baseSpread,
          amount: initData.baseAmount,
          percent: initData.percentBaseAmount,
          order: {//id, price and amount
          }
        },
        quote: {
          asset: initData.quoteAsset,
          balance: initData.quoteBalance,
          spread: initData.quoteSpread,
          amount: initData.quoteAmount,
          percent: initData.percentQuoteAmount,
          order: {//id, price and amount
          }
        },
        fromMarket: initData.fromMarket,
        defaultPrice: initData.defaultPrice
      });
    } //BotFather


    super(account, storage, initData);
  }

  async initStartData() {
    let state = this.storage.read();
    this.base = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__["default"][state.base.asset];
    this.quote = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__["default"][state.quote.asset];

    if ([this.base.issuer, this.quote.issuer].includes("1.2.0")) {
      if ([this.base.id, this.quote.id].includes("1.3.0")) this.getFeed = this.getCoreFeed;else if (this.base.issuer == this.quote.issuer) this.getFeed = this.getSmartFeed;else this.getFeed = this.getUIAFeed;
    } else {
      this.getFeed = this.getUIAFeed;
    }
  }

  async delete() {
    let state = this.storage.read();

    try {
      this.logger.info(`delete orderId: ${state.quote.order.id}`);
      await this.account.cancelOrder(state.quote.order.id);
      this.logger.info(`delete orderId: ${state.base.order.id}`);
      await this.account.cancelOrder(state.base.order.id);
    } catch (error) {
      this.logger.error(error);
      state.base.order.id = undefined;
    }

    this.storage.delete();
  }

  checkOrders = async () => {
    let state = this.storage.read(); //console.log("state", state);

    let ticker = await lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__["default"].db.get_ticker(this.base.symbol, this.quote.symbol);
    this.defaultPrice = state.defaultPrice;
    let feedPrice = state.fromMarket ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ticker.latest) : await this.getFeed(),
        buyPrice = feedPrice.times(1 - state.base.spread / 100).toNumber(),
        sellPrice = feedPrice.times(1 + state.quote.spread / 100).toNumber();
    feedPrice = feedPrice.toNumber();
    if (feedPrice == 0) return;
    let buyOrder = state.base.order.id ? (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__["default"].db.get_objects([state.base.order.id]))[0] : state.base.order.id,
        sellOrder = state.quote.order.id ? (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__["default"].db.get_objects([state.quote.order.id]))[0] : state.quote.order.id,
        accountBalances = (await this.account.balances(this.base.id, this.quote.id)).reduce((acc, balance) => {
      this.base.id === balance.asset_id ? acc.base = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(balance.amount).div(10 ** this.base.precision).toNumber() : acc.quote = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(balance.amount).div(10 ** this.quote.precision).toNumber();
      return acc;
    }, {}),
        baseBalance = state.base.balance === "-" ? 0 : state.base.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.base.balance),
        quoteBalance = state.quote.balance === "-" ? 0 : state.quote.balance === "" ? accountBalances.quote : Math.min(accountBalances.quote, state.quote.balance),
        baseAmount = state.base.percent == "true" ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(baseBalance).times(state.base.amount).div(100).toNumber() : state.base.amount,
        quoteAmount = state.quote.percent == "true" ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(quoteBalance).times(state.quote.amount).div(100).toNumber() : state.quote.amount;

    if (buyOrder) {
      //check Price
      console.log(`check buyOrder: move=${Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2}, fill=${ticker.lowest_ask <= buyPrice}`);

      if (Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2 && ticker.lowest_ask > buyPrice) {
        // move order
        this.logger.info(`move buy order: ${buyPrice} ${this.quote.symbol}/${this.base.symbol}`);
        await this.account.cancelOrder(state.base.order.id); // check amount in order

        let orderAmount = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(buyOrder.for_sale).div(10 ** this.base.precision).toNumber();
        !["", "-"].includes(state.base.balance) && (state.base.balance = Number(state.base.balance) + orderAmount); // add to sell balance

        if (state.base.order.amount > orderAmount && !["", "-"].incudes(state.quote.balance)) state.quote.balance = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.base.order.amount - orderAmount).div(state.base.order.price).plus(state.quote.balance).toNumber();
        let amount = Math.min(baseBalance, baseAmount);

        try {
          let obj = await this.account.sell(this.base.symbol, this.quote.symbol, amount, (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(1).div(buyPrice).toNumber());
          state.base.order = {
            id: obj ? obj.id : "1.7.0",
            price: buyPrice,
            amount
          };
          !["", "-"].includes(state.base.balance) && (state.base.balance -= amount);
        } catch (error) {
          this.logger.error(error);
          state.base.order.id = undefined;
        }
      }
    } else {
      if (/^1.7.\d*$/.test(state.base.order.id)) {
        // fill order
        !["", "-"].includes(state.quote.balance) && (state.quote.balance = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.base.order.amount).div(state.base.order.price).plus(state.quote.balance).toNumber());
        state.base.order.id = undefined;
      }

      console.log(`create buyOrder: balance=${baseBalance >= baseAmount}, fill=${ticker.lowest_ask <= buyPrice}`);

      if (baseBalance >= baseAmount && ticker.lowest_ask > buyPrice) {
        //buy
        this.logger.info(`buy: ${buyPrice} ${this.quote.symbol}/${this.base.symbol}`);

        try {
          let obj = await this.account.sell(this.base.symbol, this.quote.symbol, baseAmount, (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(1).div(buyPrice).toNumber());
          state.base.order = {
            id: obj ? obj.id : "1.7.0",
            price: buyPrice,
            amount: baseAmount
          };
          !["", "-"].includes(state.base.balance) && (state.base.balance -= baseAmount);
        } catch (error) {
          this.logger.error(error);
        }
      }
    }

    if (sellOrder) {
      //check Price
      console.log(`check sellOrder: move=${Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2}, fill=${ticker.highest_bid >= sellPrice}`);

      if (Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2 && ticker.highest_bid < sellPrice) {
        // move order
        this.logger.info(`move sell order: ${sellPrice} ${this.quote.symbol}/${this.base.symbol}`);
        await this.account.cancelOrder(state.quote.order.id); // check amount in order

        let orderAmount = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(sellOrder.for_sale).div(10 ** this.quote.precision).toNumber();
        !["", "-"].includes(state.quote.balance) && (state.quote.balance = Number(state.quote.balance) + orderAmount); // add to buy balance

        if (state.quote.order.amount > orderAmount && !["", "-"].includes(state.base.balance)) state.base.balance = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.quote.order.amount - orderAmount).times(state.quote.order.price).plus(state.base.balance).toNumber();
        let amount = Math.min(quoteBalance, quoteAmount);

        try {
          let obj = await this.account.sell(this.quote.symbol, this.base.symbol, amount, sellPrice);
          state.quote.order = {
            id: obj ? obj.id : "1.7.0",
            price: sellPrice,
            amount
          };
          !["", "-"].includes(state.quote.balance) && (state.quote.balance -= amount);
        } catch (error) {
          this.logger.error(error);
          state.quote.order.id = undefined;
        }
      }
    } else {
      if (/^1.7.\d*$/.test(state.quote.order.id)) {
        // fill order
        !["", "-"].includes(state.base.balance) && (state.base.balance = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.quote.order.amount).times(state.quote.order.price).plus(state.base.balance).toNumber());
        state.quote.order.id = undefined;
      }

      console.log(`create sellOrder: balance=${quoteBalance >= quoteAmount}, fill=${ticker.highest_bid >= sellPrice}`);

      if (quoteBalance >= quoteAmount && ticker.highest_bid < sellPrice) {
        //buy
        this.logger.info(`sell: ${sellPrice} ${this.quote.symbol}/${this.base.symbol}`);

        try {
          let obj = await this.account.sell(this.quote.symbol, this.base.symbol, quoteAmount, sellPrice);
          state.quote.order = {
            id: obj ? obj.id : "1.7.0",
            price: sellPrice,
            amount: quoteAmount
          };
          !["", "-"].includes(state.quote.balance) && (state.quote.balance -= quoteAmount);
        } catch (error) {
          this.logger.error(error);
        }
      }
    }

    this.storage.write(state);
  };

  async getCoreFeed() {
    let rate;

    if (this.base.id == "1.3.0") {
      await this.quote.update();
      rate = this.quote.options.core_exchange_rate;
    } else {
      await this.base.update();
      rate = this.base.options.core_exchange_rate;
    }

    let [base, quote] = rate.base.asset_id == this.base.id ? [rate.base, rate.quote] : [rate.quote, rate.base];
    return (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(base.amount).div(10 ** this.base.precision).div((0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(quote.amount).div(10 ** this.quote.precision));
  }

  async getSmartFeed() {
    let bts = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__["default"].gph;
    await this.base.update();
    let rate = this.base.options.core_exchange_rate;
    let [base, quote] = rate.base.asset_id == "1.3.0" ? [rate.base, rate.quote] : [rate.quote, rate.base];
    let basePrice = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(base.amount).div(10 ** bts.precision).div((0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(quote.amount).div(10 ** this.base.precision));
    await this.quote.update();
    rate = this.quote.options.core_exchange_rate;

    if (rate.base.asset_id == "1.3.0") {
      base = rate.base;
      quote = rate.quote;
    } else {
      base = rate.quote;
      quote = rate.base;
    }

    let quotePrice = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(base.amount).div(10 ** bts.precision).div((0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(quote.amount.toString()).div(10 ** this.quote.precision));
    return quotePrice.div(basePrice);
  }

  async getUIAFeed() {
    return this.defaultPrice ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this.defaultPrice.toString()) : await this.binancePrice(this.base.symbol, this.quote.symbol);
  }

  async binancePrice(base, quote) {
    let asset = `${quote.split(".").slice(-1)[0]}${base.split(".").slice(-1)[0]}`.toUpperCase().replace("USD", "USDT");
    console.log(`get asset: ${asset}`);
    this.priceArray = this.priceArray || [];

    try {
      //asset = "BTCUSDT"
      let response = await fetch(`https://api.binance.com/api/v1/trades?symbol=${asset}&limit=1`);
      let data = await response.json();
      this.priceArray.push(data[0].price); //this.priceArray.push(10)
    } catch (error) {
      this.logger.error(`Error Binance request: ${asset}, error: ${error}`);
    }

    if (this.priceArray.length > 10) this.priceArray.shift();
    return this.priceArray.length > 0 ? this.priceArray.reduce((a, b) => a.plus(b), (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0)).div(this.priceArray.length) : (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpreadTrade);

/***/ }),

/***/ 2787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2788);
/* harmony import */ var components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2789);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2767);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2770);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(638);
/* harmony import */ var _BotFather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2785);







class TrailingStop extends _BotFather__WEBPACK_IMPORTED_MODULE_5__["default"] {
  static create = components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__["default"];
  state = components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__["default"];

  constructor(account, storage, initData) {
    if (initData) {
      storage.init({
        name: initData.name,
        sellAsset: initData.sellAsset,
        getAsset: initData.getAsset,
        amount: initData.amount,
        minAmount: initData.minAmount,
        percent: initData.percent
      });
    } //BotFather


    super(account, storage, initData);
  }

  async initStartData() {
    let state = this.storage.read();
    this.sellAsset = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__["default"][state.sellAsset];
    this.getAsset = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__["default"][state.getAsset];
  }

  checkOrders = async () => {
    let state = this.storage.read();
    console.log("checkOrders");
    let ticker = await lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__["default"].db.get_ticker(this.getAsset.symbol, this.sellAsset.symbol),
        price = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ticker.latest),
        needStoploss = price.times(1 - state.percent / 100),
        createOrderPrice = price.times(1 - state.percent * 2 / 3 / 100),
        stoploss = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.minAmount).div(state.amount);
    console.log(price.toNumber(), needStoploss.toNumber(), createOrderPrice.toNumber(), stoploss.toNumber());

    if (needStoploss.gt(stoploss)) {
      console.log("up minAmount");
      state.minAmount = needStoploss.times(state.amount).toNumber();
      this.storage.write(state);
    } else if (createOrderPrice.lt(stoploss)) {
      console.log("create limit order");
      await this.account.sell(this.sellAsset.symbol, this.getAsset.symbol, state.amount, stoploss.toNumber());
      await this.stop();
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrailingStop);

/***/ }),

/***/ 2786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2767);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2770);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(638);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(644);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(643);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(437);







class Account {
  constructor(name, feeSymbol = "GPH") {
    this.promise = Promise.all([lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_account_by_name(name), lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][feeSymbol]]).then(([acc, fee]) => {
      this.acc = acc;
      this.feeAsset = fee;
    });
  }

  async cancelOrder(id) {
    await this.promise;
    return this.sendTransaction("limit_order_cancel", {
      fee: this.feeAsset.toParam(),
      fee_paying_account: this.acc.id,
      order: id,
      extensions: []
    });
  }

  async buy(buySymbol, baseSymbol, amount, price, fill_or_kill = false, expire = "2099-01-01T00:00:00") {
    await this.promise;
    let buyAsset = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][typeof buySymbol === "object" ? buySymbol.asset_id : buySymbol],
        baseAsset = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][typeof baseSymbol === "object" ? baseSymbol.asset_id : baseSymbol],
        buyAmount = Math.floor((0,bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(typeof buySymbol === "object" ? buySymbol.amount : amount).times(10 ** buyAsset.precision).toString()),
        sellAmount = Math.floor((typeof baseSymbol === "object" ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(baseSymbol.amount) : (0,bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(amount).times(price)).times(10 ** baseAsset.precision).toString());
    if (buyAmount == 0 || sellAmount == 0) throw new Error("Amount equal 0!");
    let tx = await this.sendTransaction("limit_order_create", {
      fee: this.feeAsset.toParam(),
      seller: this.acc.id,
      amount_to_sell: baseAsset.toParam(sellAmount),
      min_to_receive: buyAsset.toParam(buyAmount),
      expiration: expire,
      fill_or_kill: fill_or_kill,
      extensions: []
    });
    return (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_objects([tx[0].trx.operation_results[0][1]]))[0];
  }

  async sell(sellSymbol, baseSymbol, amount, price, fill_or_kill = false, expire = "2099-01-01T00:00:00") {
    await this.promise;
    let sellAsset = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][typeof sellSymbol === "object" ? sellSymbol.asset_id : sellSymbol],
        baseAsset = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][typeof baseSymbol === "object" ? baseSymbol.asset_id : baseSymbol],
        sellAmount = Math.floor((0,bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(typeof sellSymbol === "object" ? sellSymbol.amount : amount).times(10 ** sellAsset.precision).toString()),
        buyAmount = Math.floor((typeof baseSymbol === "object" ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(baseSymbol.amount) : (0,bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(amount).times(price)).times(10 ** baseAsset.precision).toString());
    if (buyAmount == 0 || sellAmount == 0) throw new Error("Amount equal 0!");
    let tx = await this.sendTransaction("limit_order_create", {
      fee: this.feeAsset.toParam(),
      seller: this.acc.id,
      amount_to_sell: sellAsset.toParam(sellAmount),
      min_to_receive: baseAsset.toParam(buyAmount),
      expiration: expire,
      fill_or_kill: fill_or_kill,
      extensions: []
    });
    return (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_objects([tx[0].trx.operation_results[0][1]]))[0];
  }

  async balances() {
    await this.promise;
    return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_account_balances(this.acc.id, [...arguments]);
  }

  async sendTransaction(type, operation) {
    let tr = new bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.TransactionBuilder();
    tr.add_type_operation(type, operation);
    await tr.set_required_fees();
    await actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__["default"].unlock();
    let private_key = stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].getPrivateKey(this.acc.active.key_auths[0][0]);
    tr.add_signer(private_key, private_key.toPublicKey().toPublicKeyString());
    return tr.broadcast();
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Account);

/***/ }),

/***/ 2767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(521);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  db: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__.Apis, {
    get(apis, method) {
      return function () {
        //console.log(`call Apis.db.${method}(${[...arguments]})`);
        return apis.instance().db_api().exec(method, [...arguments]);
      };
    }

  }),
  history: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__.Apis, {
    get(apis, method) {
      return function () {
        return apis.instance().history_api().exec(method, [...arguments]);
      };
    }

  }),
  network: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__.Apis, {
    get(apis, method) {
      return function () {
        return apis.instance().network_api().exec(method, [...arguments]);
      };
    }

  }),
  crypto: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__.Apis, {
    get(apis, method) {
      return function () {
        return apis.instance().crypto_api().exec(method, [...arguments]);
      };
    }

  }),
  orders: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__.Apis, {
    get(apis, method) {
      return function () {
        return apis.instance().orders_api().exec(method, [...arguments]);
      };
    }

  })
});

/***/ }),

/***/ 2770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2767);


class Asset {
  static get(_, name) {
    if (this[name]) return this[name];
    return /^1\.3\.\d+$/.test(name) || !isNaN(name) ? this.id(name) : this.getAsset(name);
  }

  static async getAsset(_symbol) {
    let symbol = _symbol.toUpperCase();

    this.map = this.map || {};
    if (this.map[symbol]) return this.map[symbol];
    let obj = (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.list_assets(symbol, 1))[0];
    if (!obj || obj.symbol !== symbol) throw new Error(`Not found asset ${symbol}! Blockchain return ${obj ? obj.symbol : obj}`);
    this.map[symbol] = new this(obj);
    return this.map[symbol];
  }

  static async id(id) {
    this.map = this.map || {};
    let asset = Object.keys(this.map).find(symbol => this.map[symbol].id == id);
    if (asset) return this.map[asset];
    asset = (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets([id]))[0];
    if (!asset) throw new Error(`Not found asset by id ${id}!`);
    this.map[asset.symbol] = new this(asset);
    return this.map[asset.symbol];
  }

  static async fromParam(param) {
    return {
      amount: param.amount,
      asset: await this.id(param.asset_id)
    };
  }

  static async update() {
    this.map = this.map || {};
    let assets = await lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets(Object.keys(this.map).map(symbol => this.map[symbol].id));
    assets.forEach(asset => Object.assign(this.map[asset.symbol], asset));
  }

  constructor(rpcObj) {
    Object.assign(this, rpcObj);
  }

  toParam(number = 0) {
    return {
      amount: number,
      asset_id: this.id
    };
  }

  fee() {
    return this.options.market_fee_percent / 100 / 100;
  }

  async update() {
    Object.assign(this, (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets([this.id]))[0]);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Proxy({}, Asset));

/***/ }),

/***/ 2764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2765);
/* harmony import */ var _TrailingStop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2787);
/* harmony import */ var _PercentUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2790);
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2794);


 //import RelativeOrders from "./RelativeOrders";


var bots = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  strategies: {
    SpreadTrade: _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__["default"],
    TrailingStop: _TrailingStop__WEBPACK_IMPORTED_MODULE_1__["default"],
    //RelativeOrders,
    PercentUp: _PercentUp__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  create(strategy, account, initData) {
    let storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"](`${account}::${strategy}[${initData.name}]`);
    let bot = new this.strategies[strategy](account, storage, initData);
    bots[`__bots__${storage.name}`] = bot;
    return bot;
  },

  async delete(bot) {
    let name = `__bots__${bot.storage.name}`;
    await bots[name].delete();
    delete bots[name];
  },

  getBots(account) {
    //console.log("getBots", Object.keys(bots))
    return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"].getAccountBot(account).map(key => {
      if (bots[key]) return bots[key];
      let [strategy, name] = key.replace(/^__bots__(.+)::(\w+)\[(\w+)\]/, "$2,$3").split(",");
      if (!strategy || !name) return null;
      let storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"](`${account}::${strategy}[${name}]`);
      let bot = new this.strategies[strategy](account, storage);
      bots[key] = bot;
      return bot;
    }).filter(el => el);
  },

  hasBot(account, strategy, name) {
    console.log("check name stategy", account, strategy, name);
    return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"].has(`${account}::${strategy}[${name}]`);
  }

});

/***/ }),

/***/ 2794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661);

var bots = (0,common_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"])("__bots__");

class Storage {
  static getAccountBot(account) {
    let re = new RegExp(`^__bots__${account}::`);
    return Object.keys(localStorage).filter(key => re.test(key));
  }

  static has(name) {
    return bots.has(name);
  }

  constructor(name) {
    //bots.has(name)
    this.name = name; //if (!bots.has(name))
    //bots.set(name, {})
  }

  init(data) {
    if (!bots.has(name)) bots.set(this.name, data);
  }

  read() {
    return bots.get(this.name);
  }

  write(newState) {
    bots.set(this.name, newState);
  }

  delete() {
    bots.remove(this.name);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90cy44ZmI4YWZhYmYzNGVlMmMzMGY0Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFRQTs7QUFsTkE7O0FBcU5BO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7O0FBVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTs7QUFnQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQS9DQTs7QUFrREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7O0FBak1BOztBQW9NQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBL0NBOztBQW1EQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBSUE7O0FBcExBOztBQXVMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWxCQTs7QUFxQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBNURBOztBQStEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFlQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBbUJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFlQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFLQTs7QUF2V0E7O0FBMFdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDalhBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBOUNBOztBQWtEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWtCQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQWNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFJQTs7QUF0VUE7O0FBeVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTs7QUFXQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBR0E7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQXZDQTs7QUEwQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQWNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBa0JBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFjQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFpQkE7O0FBeE9BOztBQTJPQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUdBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQW1CQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFlQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUlBOztBQXhMQTs7QUEyTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7O0FBeENBO0FBMkNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFhQTs7QUFwREE7O0FBdURBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFJQTs7QUF6QkE7O0FBMkJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBS0E7O0FBL0NBOztBQWlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7O0FBUEE7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ25JQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFjQTs7QUFsQkE7O0FBcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFUQTtBQVlBOztBQWhFQTs7QUFtRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBSEE7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBOzs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFsRkE7O0FBd0ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFPQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEyQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQU9BO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFGQTtBQVZBO0FBQUE7QUFzQkE7QUFDQTtBQUZBO0FBV0E7QUFTQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFBQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBU0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFRQTtBQUVBOztBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBOVFBOztBQWlSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQVVBO0FBQ0E7QUF2QkE7QUF5QkE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBUUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQVVBO0FBT0E7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTs7QUE4Q0E7QUFDQTtBQUNBOztBQU9BO0FBS0E7QUFFQTtBQUtBOztBQUdBO0FBSUE7O0FBS0E7QUFXQTs7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQU9BO0FBS0E7QUFFQTtBQUtBOztBQUdBO0FBR0E7O0FBS0E7QUFXQTs7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7O0FBS0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBS0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7QUFFQTtBQUVBO0FBS0E7O0FBN2JBOztBQWdjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBL0RBOztBQWtFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7QUFFQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUF3QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUdBOztBQUVBO0FBUUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQTBCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFLQTtBQUNBOztBQXBKQTs7QUF1SkE7Ozs7Ozs7Ozs7OztBQzlKQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBUkE7QUE5Q0E7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQU9BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQXhFQTs7QUEyRUE7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFqREE7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBL0JBOztBQWtDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvQm90cy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvQ3JlYXRlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL1BlcmNlbnRVcC9TdGF0ZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvU3RhdGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQm90cy9UcmFpbGluZ1N0b3AvU3RhdGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvbGlicy9Bc3NldFNlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL2xpYnMvQXNzZXRXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL2xpYnMvSW5wdXQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2xpYi9ib3RzL0JvdEZhdGhlci5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvbGliL2JvdHMvUGVyY2VudFVwL2luZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvYm90cy9TcHJlYWRUcmFkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvbGliL2JvdHMvVHJhaWxpbmdTdG9wL2luZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvYm90cy9hY2NvdW50LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvYm90cy9hcGlzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvYm90cy9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2xpYi9ib3RzL2luZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9zdG9yZXMvQm90c1N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7UmVkaXJlY3QsIExpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcblxuY2xhc3MgQm90cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RyYXRlZ2llcyA9IEJvdE1hbmFnZXIuc3RyYXRlZ2llcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdFN0cmF0ZWd5OiBPYmplY3Qua2V5cyh0aGlzLnN0cmF0ZWdpZXMpWzBdLFxuICAgICAgICAgICAgYm90czogW10sXG4gICAgICAgICAgICBzZWxlY3RCb3Q6IDAsXG4gICAgICAgICAgICBlbmFibGVDcmVhdGU6IGZhbHNlLFxuICAgICAgICAgICAgYm90UnVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgYm90cyA9IEJvdE1hbmFnZXIuZ2V0Qm90cyh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KTtcbiAgICAgICAgdGhpcy5fdXBkKGJvdHMpO1xuICAgIH1cblxuICAgIF91cGQoYm90cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJvdHMsXG4gICAgICAgICAgICBzZWxlY3RCb3Q6IDAsXG4gICAgICAgICAgICBib3RSdW46IGJvdHNbMF0gPyBib3RzWzBdLnJ1biA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVN0cmF0ZWd5ID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RTdHJhdGVneTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNoYW5nZUJvdCA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdEJvdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdEJvdCxcbiAgICAgICAgICAgIGJvdFJ1bjogdGhpcy5zdGF0ZS5ib3RzW3NlbGVjdEJvdF0ucnVuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDcmVhdGUgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBib3RzID0gdGhpcy5zdGF0ZS5ib3RzO1xuXG4gICAgICAgIGJvdHMucHVzaChcbiAgICAgICAgICAgIEJvdE1hbmFnZXIuY3JlYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3ksXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0uc3RhdGVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym90c30pO1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0ZUZvcm0udmFsaWRhdGUpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0udmFsaWRhdGUoXCJuYW1lXCIsIHRoaXMuY3JlYXRlRm9ybS5zdGF0ZS5uYW1lKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRW5hYmxlQ3JlYXRlID0gZW5hYmxlQ3JlYXRlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlQ3JlYXRlICE9IGVuYWJsZUNyZWF0ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZUNyZWF0ZX0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdGFydEJvdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGJvdCA9IHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF07XG5cbiAgICAgICAgYXdhaXQgYm90LnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvdFJ1bjogYm90LnJ1bn0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdG9wQm90ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgYm90ID0gdGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XTtcblxuICAgICAgICBhd2FpdCBib3Quc3RvcCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtib3RSdW46IGJvdC5ydW59KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRGVsZXRlQm90ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBCb3RNYW5hZ2VyLmRlbGV0ZSh0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJvdHM6IEJvdE1hbmFnZXIuZ2V0Qm90cyh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KSxcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwic3RhcnQgcmVuZGVyIG1haW4gcGFnZVwiLCB0aGlzLnByb3BzKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17XCIvXCJ9IC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IENyZWF0ZUZvcm0gPSB0aGlzLnN0cmF0ZWdpZXNbdGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneV0uY3JlYXRlO1xuXG4gICAgICAgIGxldCBib3QgPSB0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdIHx8IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjAsIG92ZXJmbG93OiBcInZpc2libGVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtMTIgbWVkaXVtLTYgbGFyZ2UtNSBsYXJnZS1vZmZzZXQtMSBmdWxsLXdpZHRoLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIiBzdHlsZT17e21hcmdpblRvcDogMzB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaGVscC9ib3RzL2ludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnF1ZXN0aW9uX2NpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc2VsZWN0X3N0cmF0ZWd5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgYnRzLXNlbGVjdCBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlU3RyYXRlZ3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0cmF0ZWdpZXMpLm1hcChuYW1lID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bmFtZX0gdmFsdWU9e25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2Zvcm0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtID0gZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ3JlYXRlPXt0aGlzLmhhbmRsZUVuYWJsZUNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZW5hYmxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uY3JlYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDMwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYm90X3N0YXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgYnRzLXNlbGVjdFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdEJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VCb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYm90cy5tYXAoKGJvdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JvdC5uYW1lfSB2YWx1ZT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2JvdC5uYW1lfSAoJHtib3QuY29uc3RydWN0b3IubmFtZX0pYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Ym90LnN0YXRlIGtleT17Ym90Lm5hbWV9IGJvdD17Ym90fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdGFydEJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ib3RSdW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc3RhcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0b3BCb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmJvdFJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zdG9wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVEZWxldGVCb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuYm90UnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmRlbGV0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zZWxlY3RfYm90XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgQm90cyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90TWFuYWdlciBmcm9tIFwibGliL2JvdHNcIjtcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2xpYnMvSW5wdXRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogXCJcIixcblxuICAgICAgICBiYXNlOiBcIkdQSFwiLFxuICAgICAgICBxdW90ZTogXCJSVURFWC5VU0RUXCIsXG5cbiAgICAgICAgYW1vdW50OiAxMDAwLFxuICAgICAgICBwZXJjZW50QW1vdW50OiBmYWxzZSxcblxuICAgICAgICBiYWxhbmNlOiBcIjUwMDBcIixcbiAgICAgICAgc3ByZWFkOiAyLFxuICAgICAgICBkaXN0YW5jZTogNCxcbiAgICAgICAgdmFsaWRhdGU6IFtcIm5hbWVcIl0sXG4gICAgICAgIGZyb21NYXJrZXQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUgPSBkZWJvdW5jZSh0aGlzLmFzc2V0VmFsaWRhdGUsIDIwMCk7XG4gICAgfVxuXG4gICAgYXNzZXRWYWxpZGF0ZSA9IGFzeW5jIG5hbWUgPT4ge1xuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnN0YXRlW25hbWVdO1xuICAgICAgICBsZXQgYmxvY2tjaGFpbkFzc2V0cyA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKGFzc2V0LCAxKSlbMF07XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XG5cbiAgICAgICAgaWYgKGFzc2V0ICE9PSBibG9ja2NoYWluQXNzZXRzLnN5bWJvbCkgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZSA9IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKFtcImJhc2VcIiwgXCJxdW90ZVwiXS5pbmNsdWRlcyhuYW1lKSkgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XG4gICAgfTtcblxuICAgIHZhbGlkYXRlID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIS9eXFx3KyQvLnRlc3QodmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIEJvdE1hbmFnZXIuaGFzQm90KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhc2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwiLVwiICYmIGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzcHJlYWRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJkaXN0YW5jZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZhbGlkYXRlLCBuYW1lLCBhbW91bnQsIGJhbGFuY2UsIHNwcmVhZCwgZGlzdGFuY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnBlcmNlbnRfdXAuc2VsbF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImJhbGFuY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnBlcmNlbnRfdXAuZ2V0X2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwic3ByZWFkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5wZXJjZW50X3VwLmRpc3RhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzdGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXN0YW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImRpc3RhbmNlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXNzZXRMYWJlbH0gZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2xpYnMvSW5wdXRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgU3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt2YWxpZGF0ZTogW119LCB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoW1wiYmFzZVwiLCBcInF1b3RlXCJdLmluY2x1ZGVzKG5hbWUpKSB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZVwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsYW5jZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gXCItXCIgJiYgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNwcmVhZFwiOlxuICAgICAgICAgICAgY2FzZSBcImRpc3RhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICBoYW5kbGVVcGRhdGVCb3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZU5vdyA9IHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUoey4uLnN0YXRlTm93LCAuLi50aGlzLnN0YXRlfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt2YWxpZGF0ZSwgYW1vdW50LCBiYWxhbmNlLCBzcHJlYWQsIGRpc3RhbmNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnBlcmNlbnRfdXAuc2VsbF9hc3NldFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUuYmFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17KHRoaXMuc3RhdGUucGVyY2VudEFtb3VudCA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV9wZXJjZW50XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsodGhpcy5zdGF0ZS5wZXJjZW50QW1vdW50ID09IFwiZmFsc2VcIiA/IHRydWUgOiBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV92YWx1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiYmFsYW5jZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMucGVyY2VudF91cC5nZXRfYXNzZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5xdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUucXVvdGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnNwcmVhZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwic3ByZWFkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5wZXJjZW50X3VwLmRpc3RhbmNlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXN0YW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc3RhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiZGlzdGFuY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQm90fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnVwZGF0ZVwiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90TWFuYWdlciBmcm9tIFwibGliL2JvdHNcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIENyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHF1b3RlQXNzZXQ6IFwiR1BIXCIsXG4gICAgICAgIGJhc2VBc3NldDogXCJSVURFWC5VU0RUXCIsXG5cbiAgICAgICAgcXVvdGVBbW91bnQ6IDUwMC4wLFxuICAgICAgICBiYXNlQW1vdW50OiAxMCxcblxuICAgICAgICBiYXNlU3ByZWFkOiAxMCxcbiAgICAgICAgcXVvdGVTcHJlYWQ6IDEwLFxuXG4gICAgICAgIHF1b3RlQmFsYW5jZTogNTAwMC4wLFxuICAgICAgICBiYXNlQmFsYW5jZTogMTAwLFxuXG4gICAgICAgIHBlcmNlbnRRdW90ZUFtb3VudDogZmFsc2UsXG4gICAgICAgIHBlcmNlbnRCYXNlQW1vdW50OiBmYWxzZSxcblxuICAgICAgICB2YWxpZGF0ZTogW1wibmFtZVwiXSxcbiAgICAgICAgZnJvbU1hcmtldDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZSA9IGRlYm91bmNlKHRoaXMuYXNzZXRWYWxpZGF0ZSwgMjAwKTtcbiAgICB9XG5cbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICA/IGV2ZW50LnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKFtcImJhc2VBc3NldFwiLCBcInF1b3RlQXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFzc2V0XCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBc3NldFwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhc2VCYWxhbmNlXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVCYWxhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIi1cIiAmJiBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlQW1vdW50XCI6XG4gICAgICAgICAgICBjYXNlIFwiYmFzZVNwcmVhZFwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlU3ByZWFkXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkZWZhdWx0UHJpY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKCt2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWxpZGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGVBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGVTcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmJhbGFuY2VfdmFsdWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VTcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5kZWZhdWx0X3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZGVmYXVsdFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwiZGVmYXVsdFByaWNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJvbU1hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZnJvbU1hcmtldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5nZXRfcHJpY2VfZnJvbV9tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0Fzc2V0TGFiZWx9IGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBTdGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe3ZhbGlkYXRlOiBbXX0sIHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIHF1b3RlO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2cobmFtZSwgdmFsdWUsIHR5cGVvZiB2YWx1ZSk7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFtb3VudFwiOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnN0YXRlLmJhc2U7XG4gICAgICAgICAgICAgICAgYmFzZS5hbW91bnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGVyY2VudEJhc2VBbW91bnRcIjpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xuICAgICAgICAgICAgICAgIGJhc2UucGVyY2VudCA9IHZhbHVlID09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2V9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQmFsYW5jZVwiOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnN0YXRlLmJhc2U7XG4gICAgICAgICAgICAgICAgYmFzZS5iYWxhbmNlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhc2VTcHJlYWRcIjpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xuICAgICAgICAgICAgICAgIGJhc2Uuc3ByZWFkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInF1b3RlQW1vdW50XCI6XG4gICAgICAgICAgICAgICAgcXVvdGUgPSB0aGlzLnN0YXRlLnF1b3RlO1xuICAgICAgICAgICAgICAgIHF1b3RlLmFtb3VudCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1b3RlfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGVyY2VudFF1b3RlQW1vdW50XCI6XG4gICAgICAgICAgICAgICAgcXVvdGUgPSB0aGlzLnN0YXRlLnF1b3RlO1xuICAgICAgICAgICAgICAgIHF1b3RlLnBlcmNlbnQgPSB2YWx1ZSA9PSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInF1b3RlQmFsYW5jZVwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5iYWxhbmNlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZVNwcmVhZFwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5zcHJlYWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRQcmljZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlZmF1bHRQcmljZTogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmcm9tTWFya2V0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbU1hcmtldDogZXZlbnQudGFyZ2V0LmNoZWNrZWR9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlVXBkYXRlQm90ID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGVOb3cgPSB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5iYXNlLm9yZGVyID0gc3RhdGVOb3cuYmFzZS5vcmRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5xdW90ZS5vcmRlciA9IHN0YXRlTm93LnF1b3RlLm9yZGVyO1xuXG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUodGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ucXVvdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYXNzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5xdW90ZS5hc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUucXVvdGUuYXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGUuYmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucXVvdGUucGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmJhbGFuY2VfcGVyY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyF0aGlzLnN0YXRlLnF1b3RlLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5zcHJlYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5zcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYXNzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJhc2UuYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLmJhc2UuYXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlLmJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5iYXNlLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyF0aGlzLnN0YXRlLmJhc2UucGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmJhbGFuY2VfdmFsdWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLnNwcmVhZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5zcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmRlZmF1bHRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwiZGVmYXVsdFByaWNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJvbU1hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZnJvbU1hcmtldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmdldF9wcmljZV9mcm9tX21hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi51cGRhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgc2VsbEFzc2V0OiBcIkdQSFwiLFxuICAgICAgICBnZXRBc3NldDogXCJSVURFWC5VU0RUXCIsXG4gICAgICAgIGFtb3VudDogMTAwMCxcbiAgICAgICAgbWluQW1vdW50OiAxLFxuICAgICAgICBzdG9wbG9zczogMC4wMSxcbiAgICAgICAgcGVyY2VudDogMTAsXG4gICAgICAgIHZhbGlkYXRlOiBbXCJuYW1lXCJdXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUgPSBkZWJvdW5jZSh0aGlzLmFzc2V0VmFsaWRhdGUsIDIwMCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKFtcInNlbGxBc3NldFwiLCBcImdldEFzc2V0XCJdLmluY2x1ZGVzKG5hbWUpKVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcIm1pbkFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlIC8gdGhpcy5zdGF0ZS5hbW91bnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3RvcGxvc3NcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgKiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcImFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSAqIHRoaXMuc3RhdGUuc3RvcGxvc3NcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQXNzZXRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJnZXRBc3NldFwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcIm1pbkFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInBlY2VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInN0b3Bsb3NzXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsaWRhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zZWxsX2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxsQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGxBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AuYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AuZ2V0X2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZXRBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2V0QXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLm1pbl9hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbkFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnN0b3Bsb3NzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9wbG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdG9wbG9zc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJzdG9wbG9zc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AudHJhaWxpbmdfcGVyY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwicGVyY2VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXNzZXRMYWJlbH0gZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIFN0YXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdmFsaWRhdGU6IFtdXG4gICAgfTtcblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpO1xuICAgICAgICBzdGF0ZS5zdG9wbG9zcyA9IHN0YXRlLm1pbkFtb3VudCAvIHN0YXRlLmFtb3VudDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoW1wic2VsbEFzc2V0XCIsIFwiZ2V0QXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwibWluQW1vdW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWUgLyB0aGlzLnN0YXRlLmFtb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJzdG9wbG9zc1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB0aGlzLnN0YXRlLmFtb3VudCAqIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiYW1vdW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlICogdGhpcy5zdGF0ZS5zdG9wbG9zc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge307XG5cbiAgICBoYW5kbGVVcGRhdGVCb3QgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUodGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Ub3A6IDUwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3Auc2VsbF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGxBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2VsbEFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5zZWxsQXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmdldF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5nZXRBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUuZ2V0QXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AubWluX2Ftb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zdG9wbG9zc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0b3Bsb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RvcGxvc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcInN0b3Bsb3NzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC50cmFpbGluZ19wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwicGVyY2VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi51cGRhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcInJlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQgQXNzZXRzIGZyb20gXCJsaWIvYm90cy9hc3NldHNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi8uLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCBBc3luY1NlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0L2xpYi9Bc3luY1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtnZXRNeU1hcmtldHNRdW90ZXMsIGdldEFzc2V0SGlkZU5hbWVzcGFjZXN9IGZyb20gXCJicmFuZGluZ1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5leHBvcnQgY2xhc3MgQXNzZXRMYWJlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IG51bGxcbiAgICB9O1xuXG4gICAgaGlkZVByZWZpeCA9IG5hbWUgPT4ge1xuICAgICAgICBsZXQgYXJyID0gbmFtZS5zcGxpdChcIi5cIik7XG4gICAgICAgIGlmIChnZXRBc3NldEhpZGVOYW1lc3BhY2VzKCkuaW5jbHVkZXMoYCR7YXJyWzBdfS5gKSkgYXJyLnNoaWZ0KCk7XG5cbiAgICAgICAgcmV0dXJuIGFyci5qb2luKFwiLlwiKTtcbiAgICB9O1xuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRBc3NldE5hbWUodGhpcy5wcm9wcy5uYW1lKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUpXG4gICAgICAgICAgICB0aGlzLnNldEFzc2V0TmFtZShuZXh0UHJvcHMubmFtZSk7XG4gICAgfVxuXG4gICAgc2V0QXNzZXROYW1lID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IGF3YWl0IEFzc2V0c1tuYW1lXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWU6IGFzc2V0LmJpdGFzc2V0X2RhdGFfaWQgPyBgZ3Ake25hbWV9YCA6IG5hbWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RoaXMuaGlkZVByZWZpeCh0aGlzLnN0YXRlLm5hbWUgfHwgdGhpcy5wcm9wcy5uYW1lKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxudmFyIG9wdGlvbnMgPSBnZXRNeU1hcmtldHNRdW90ZXModHJ1ZSkubWFwKG5hbWUgPT4gKHtcbiAgICB2YWx1ZTogbmFtZSxcbiAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17bmFtZX0gLz5cbn0pKTtcblxuY2xhc3MgQXNzZXRTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZU9wdGlvbnMgPSBkZWJvdW5jZSh0aGlzLnByb21pc2VPcHRpb25zLCAyMDApO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gb3B0aW9uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkNoYW5nZVwiLCBvcHRpb24pO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgIHRhcmdldDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uID8gb3B0aW9uLnZhbHVlIDogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHJvbWlzZU9wdGlvbnMgPSBhc3luYyBpbnB1dFZhbHVlID0+IHtcbiAgICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gb3B0aW9ucy5maWx0ZXIoaSA9PiBpLnZhbHVlID09IGlucHV0VmFsdWUpO1xuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwICYmIGlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBhc3NldCA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKGlucHV0VmFsdWUsIDEpKVswXTtcblxuICAgICAgICAgICAgaWYgKGFzc2V0ICYmICFvcHRpb25zLmZpbmQoaSA9PiBpLnZhbHVlID09IGFzc2V0LnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17YXNzZXQuc3ltYm9sfSAvPlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtvcHRpb25zfTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb25zLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5wcm9wcy52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX0+XG4gICAgICAgICAgICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRPcHRpb25zPXt0aGlzLnByb21pc2VPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hQcm9tcHRUZXh0PXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHMuYXNzZXRfc2VsZWN0b3Iud2FpdFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHMuYXNzZXRfc2VsZWN0b3IucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0U2VsZWN0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldERpc3BsYXlOYW1lfSBmcm9tIFwiY29tbW9uL3JlYWN0VXRpbHNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCJpbW11dGFibGVcIjtcblxuY2xhc3MgRHluYW1pY09iamVjdFJlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkb3M6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdFxuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZG9zOiBMaXN0KClcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5nZXREeW5hbWljT2JqZWN0ID0gdGhpcy5nZXREeW5hbWljT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0RHluYW1pY09iamVjdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kb3MuZmluZChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICYmIGEuZ2V0KFwiaWRcIikgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldER5bmFtaWNPYmplY3Q6IHRoaXMuZ2V0RHluYW1pY09iamVjdFxuICAgICAgICB9KTtcbiAgICB9XG59XG5EeW5hbWljT2JqZWN0UmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKER5bmFtaWNPYmplY3RSZXNvbHZlcik7XG5cbi8qKlxuICogSE9DIHRoYXQgcmVzb2x2ZXMgZWl0aGVyIGEgbnVtYmVyIG9mIGFzc2V0cyBkaXJlY3RseSB3aXRoIENoYWluQXNzZXQsXG4gKiBvciBhIGxpc3Qgb2YgYXNzZXRzIHdpdGggQ2hhaW5Bc3NldHNcbiAqXG4gKiAgT3B0aW9uc1xuICogIC0ncHJvcE5hbWVzJyBhbiBhcnJheSBvZiBwcm9wIG5hbWVzIHRvIGJlIHJlc29sdmVkIGFzIGFzc2V0cy4gKGRlZmF1bHRzIHRvIFwiYXNzZXRcIiBvciBcImFzc2V0c1wiKVxuICogIC0nZGVmYXVsdFByb3BzJyBkZWZhdWx0IHZhbHVlcyB0byB1c2UgZm9yIG9iamVjdHMgKG9wdGlvbmFsKVxuICogIC0nYXNMaXN0JyBkZWZpbmVzIHdoZXRoZXIgdG8gdXNlIENoYWluQXNzZXRzTGlzdCBvciBub3QgKHVzZWZ1bCBmb3IgcmVzb2x2aW5nIGxhcmdlIHF1YW50aXRpZXMgb2YgYXNzZXRzKVxuICogIC0nd2l0aER5bmFtaWMnIGRlZmluZXMgd2hldGhlciB0byBhbHNvIHJlc29sdmUgZHluYW1pYyBvYmplY3RzIG9yIG5vdFxuICovXG5cbmZ1bmN0aW9uIEFzc2V0V3JhcHBlcihDb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMucHJvcE5hbWVzID0gb3B0aW9ucy5wcm9wTmFtZXMgfHwgW1xuICAgICAgICAhIW9wdGlvbnMuYXNMaXN0ID8gXCJhc3NldHNcIiA6IFwiYXNzZXRcIlxuICAgIF07XG4gICAgY29uc3QgZmluYWxQcm9wVHlwZXMgPSBvcHRpb25zLnByb3BOYW1lcy5yZWR1Y2UoKHJlcywgdHlwZSkgPT4ge1xuICAgICAgICByZXNbdHlwZV0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgPyBDaGFpblR5cGVzLkNoYWluQXNzZXRzTGlzdFxuICAgICAgICAgICAgOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBsZXQgZGVmYXVsdFByb3BzID0gT2JqZWN0LmtleXMoZmluYWxQcm9wVHlwZXMpLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiBvcHRpb25zLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICByZXNba2V5XSA9ICEhb3B0aW9ucy5hc0xpc3QgPyBMaXN0KGN1cnJlbnQgfHwgW10pIDogY3VycmVudCB8fCBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVmYXVsdFByb3BzICYmICEhb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCkge1xuICAgICAgICBkZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY2xhc3MgQXNzZXRzUmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0gZmluYWxQcm9wVHlwZXM7XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGZpbmFsQXNzZXRzID0ge307XG4gICAgICAgICAgICBsZXQgcGFzc1Ryb3VnaFByb3BzID0ge307XG4gICAgICAgICAgICBsZXQgZG9zID0gTGlzdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0gJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9wTmFtZXMuaW5kZXhPZihwcm9wKSAhPT0gLTFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5hc0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFzc2V0c1twcm9wXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHNbcHJvcF0uZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NUcm91Z2hQcm9wc1twcm9wXSA9IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB3cmFwcGVkID0gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgey4uLnBhc3NUcm91Z2hQcm9wcywgLi4uZmluYWxBc3NldHN9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYylcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RHluYW1pY09iamVjdFJlc29sdmVyIGRvcz17ZG9zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3cmFwcGVkfVxuICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNPYmplY3RSZXNvbHZlcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gd3JhcHBlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBc3NldHNSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRzUmVzb2x2ZXIpO1xuXG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFzc2V0c1Jlc29sdmVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCByZWY9XCJib3VuZF9jb21wb25lbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQXNzZXRzUmVzb2x2ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdyYXBwZXIuZGlzcGxheU5hbWUgPSBgV3JhcHBlcigke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG4gICAgcmV0dXJuIFdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtuYW1lLCB2YWx1ZSwgb25DaGFuZ2UsIGJvcmRlciwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgaWQ9e25hbWV9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYm9yZGVyID8gXCIxcHggc29saWQgcmVkXCIgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vQm90cy9saWJzL0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtnZXRJbWFnZU5hbWV9IGZyb20gXCJicmFuZGluZ1wiO1xuXG5jbGFzcyBBc3NldEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogdHJ1ZSxcbiAgICAgICAgbWF4V2lkdGg6IDIwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW1nRXJyb3I6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCAhPT0gbnAuYXNzZXQgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4V2lkdGggIT09IG5wLm1heFdpZHRoIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLndoaXRlTGlzdCAhPT0gbnAud2hpdGVMaXN0IHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmltZ0Vycm9yICE9PSBucy5pbWdFcnJvclxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXBsYWNlTm9uZVRvQnRzKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnNyYyA9XG4gICAgICAgICAgICAgICAgICAgIFwiYXNzZXQtc3ltYm9scy91bmtub3duLnBuZ1wiO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGltZ0Vycm9yOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthc3NldH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEltYWdlV3JhcHBlcihhc3NldCkge1xuICAgICAgICAgICAgaWYgKGFzc2V0ID09PSBudWxsKSByZXR1cm4gXCJ1bmtub3duXCI7XG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGdldEltYWdlTmFtZShzeW1ib2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1nTmFtZSA9IGdldEltYWdlV3JhcHBlcihhc3NldCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0zcHhcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Bc3NldEltYWdlID0gQXNzZXRXcmFwcGVyKEFzc2V0SW1hZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldEltYWdlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPEFzc2V0SW1hZ2Ugey4uLnRoaXMucHJvcHN9IGFzc2V0PXt0aGlzLnByb3BzLm5hbWV9Lz47XG4gICAgfVxufVxuIiwiaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCIvYXBwL2xpYi9ib3RzL2FjY291bnRcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcIi9hcHAvYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCIvYXBwL2FjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuXG4vKi9cbiAgICBCb3QgcHJvZ2VuaXRvcjpcbiAgICAgICAgMyByZXF1aXJlZCBtZXRob2RzIGZvciBjcmVhdGUgbmV3IGJvdHM6XG4gICAgICAgICAgICAtIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICAtIGluaXRTdGFydERhdGFcbiAgICAgICAgICAgIC0gY2hlY2tPcmRlcnNcbiAqL1xuY2xhc3MgQm90RmF0aGVyIHtcbiAgICBzdGF0aWMgY3JlYXRlID0gbnVsbDtcbiAgICBzdGF0ZSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSkge1xuXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xuICAgICAgICAgICAgLypzdG9yYWdlLmluaXQoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGluaXREYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFByaWNlOiBpbml0RGF0YS5kZWZhdWx0UHJpY2VcbiAgICAgICAgICAgIH0pOyovXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjY291bnQgPSBuZXcgQWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcblxuXG4gICAgICAgIHRoaXMubmFtZSA9IHN0b3JhZ2UucmVhZCgpLm5hbWU7XG5cbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdFN0YXJ0RGF0YSgpIHtcbiAgICAgICAgLy9FeGFtcGxlXG4gICAgICAgIC8qXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG5cbiAgICAgICAgdGhpcy5iYXNlID0gYXdhaXQgQXNzZXRzW3N0YXRlLmJhc2VdO1xuICAgICAgICB0aGlzLnF1b3RlID0gYXdhaXQgQXNzZXRzW3N0YXRlLnF1b3RlXTtcbiAgICAgICAgKi9cbiAgICB9XG5cblxuICAgIC8vSGVyZSBMb2dpYyAtIENoYW5nZSBmb3IgbmV3IHN0cmF0ZWd5XG4gICAgYXN5bmMgY2hlY2tPcmRlcnMoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tPcmRlcnNcIik7XG5cbiAgICAgICAgLy9TdHJhdGVneVxuICAgICAgICAvLy4uLlxuXG4gICAgfVxuXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvL0NvbW1vbiBNZXRob2RzXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGFzeW5jIHN0YXJ0KCkge1xuXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdFN0YXJ0RGF0YSgpO1xuXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xuICAgICAgICB0aGlzLnJ1biA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBhc3luYyBzdG9wKCkge1xuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXVlRXZlbnRzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFNlZSBTcHJlYWRUcmFkZSBvciBQZXJjZW50VXAgIGRlbGV0ZSgpIHRvOlxuICAgICAgICAgICAgdG8gaW1wbGVtZW50IGEgZ2VuZXJhbCBtZXRob2QgZm9yIGRlbGV0aW5nIG9yZGVycyBmb3IgYWxsIGluaGVyaXRlZCBib3RzICwgdGFraW5nIGludG8gYWNjb3VudCB0aGUgaW50ZXJuYWwgZGF0YSBzdHJ1Y3R1cmVcbiAgICAgKi9cbiAgICBhc3luYyBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoKTtcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcbiAgICAgICAgICAgIC50aGVuKHRoaXMuY2hlY2tPcmRlcnMpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3IuYmluZCh0aGlzLmxvZ2dlcikpO1xuICAgIH07XG5cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJvdEZhdGhlcjsiLCJpbXBvcnQgQ3JlYXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvUGVyY2VudFVwL0NyZWF0ZVwiO1xuaW1wb3J0IFN0YXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvUGVyY2VudFVwL1N0YXRlXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcblxuaW1wb3J0IEJvdEZhdGhlciBmcm9tIFwiLi4vQm90RmF0aGVyXCI7XG5cbmNsYXNzIFBlcmNlbnRVcCBleHRlbmRzIEJvdEZhdGhlciB7XG4gICAgc3RhdGljIGNyZWF0ZSA9IENyZWF0ZTtcbiAgICBzdGF0ZSA9IFN0YXRlO1xuXG4gICAgY29uc3RydWN0b3IoYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpIHtcblxuICAgICAgICBpZiAoaW5pdERhdGEpIHtcbiAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICBwZXJjZW50QW1vdW50LFxuICAgICAgICAgICAgICAgIGJhbGFuY2UsXG4gICAgICAgICAgICAgICAgc3ByZWFkLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgICAgICB9ID0gaW5pdERhdGE7XG4gICAgICAgICAgICBzdG9yYWdlLmluaXQoe1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICAgICAgcGVyY2VudEFtb3VudCxcbiAgICAgICAgICAgICAgICBiYWxhbmNlLFxuICAgICAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQm90RmF0aGVyXG4gICAgICAgIHN1cGVyKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0U3RhcnREYXRhKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuXG4gICAgICAgIHRoaXMuYmFzZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5iYXNlXTtcbiAgICAgICAgdGhpcy5xdW90ZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5xdW90ZV07XG4gICAgfVxuXG4gICAgY2hlY2tPcmRlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCksXG4gICAgICAgICAgICBsb2cgPSAoLi4uYXJncykgPT4gdGhpcy5sb2dnZXIubG9nKGBbJHtzdGF0ZS5uYW1lfV1gLCAuLi5hcmdzKSxcbiAgICAgICAgICAgIGFjY291bnRCYWxhbmNlcyA9IChhd2FpdCB0aGlzLmFjY291bnQuYmFsYW5jZXMoXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkLFxuICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuaWRcbiAgICAgICAgICAgICkpLnJlZHVjZSgoYWNjLCBiYWxhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkID09PSBiYWxhbmNlLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgID8gKGFjYy5iYXNlID0gQmlnTnVtYmVyKGJhbGFuY2UuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKVxuICAgICAgICAgICAgICAgICAgICA6IChhY2MucXVvdGUgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pLFxuICAgICAgICAgICAgYmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgc3RhdGUuYmFsYW5jZSA9PT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUuYmFsYW5jZSA9PT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50QmFsYW5jZXMuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihhY2NvdW50QmFsYW5jZXMuYmFzZSwgc3RhdGUuYmFsYW5jZSksXG4gICAgICAgICAgICBhbW91bnQgPVxuICAgICAgICAgICAgICAgIHN0YXRlLnBlcmNlbnRBbW91bnQudG9TdHJpbmcoKSA9PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICA/IEJpZ051bWJlcihiYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5hbW91bnQsXG4gICAgICAgICAgICBvcmRlcnMgPSAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhcbiAgICAgICAgICAgICAgICBzdGF0ZS5vcmRlcnMubWFwKG9yZGVyID0+IG9yZGVyLmlkKS5maWx0ZXIoaWQgPT4gaWQpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIC5tYXAob3JkZXIgPT4gb3JkZXIgJiYgb3JkZXIuaWQpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpZCA9PiBpZCksXG4gICAgICAgICAgICBwcm9jZXNzT3JkZXJzID0gc3RhdGUub3JkZXJzLmZpbHRlcihcbiAgICAgICAgICAgICAgICBvcmRlciA9PiAhb3JkZXJzLmluY2x1ZGVzKG9yZGVyLmlkKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG9yZGVyRmVlID0gQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgIChhd2FpdCBBcGlzLmRiLmdldF9nbG9iYWxfcHJvcGVydGllcygpKS5wYXJhbWV0ZXJzLmN1cnJlbnRfZmVlc1xuICAgICAgICAgICAgICAgICAgICAucGFyYW1ldGVyc1sxXVsxXS5mZWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZGl2KDEwICoqIDUpXG4gICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3NPcmRlcnMubGVuZ3RoID4gMCkgYXdhaXQgdGhpcy5iYXNlLnVwZGF0ZSgpO1xuXG4gICAgICAgIGxldCBwcm9taXNlcyA9IHByb2Nlc3NPcmRlcnMubWFwKGFzeW5jIG9yZGVyID0+IHtcbiAgICAgICAgICAgIGlmIChvcmRlci5zdGF0ZSA9PT0gXCJidXlcIikge1xuICAgICAgICAgICAgICAgIG9yZGVyLmlkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFsYW5jZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFtb3VudFRvTWFya2V0ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcih0aGlzLmJhc2Uub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMDAgKiAxMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKG9yZGVyLmJhc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc3RhdGUuYmFsYW5jZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKG9yZGVyLmJhc2UpIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIChhbW91bnRUb01hcmtldCAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGFtb3VudFRvTWFya2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5iYXNlLm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50ICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMTAgKiogLXRoaXMuYmFzZS5wcmVjaXNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBmb3JRdW90ZUZlZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCA9PT0gXCJHUEhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGlzTmFOKG9yZGVyLmZlZSkgPyBvcmRlckZlZSA6IG9yZGVyLmZlZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJGZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDAsXG4gICAgICAgICAgICAgICAgICAgIGZvckJhc2VGZWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCA9PT0gXCJHUEhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKGlzTmFOKG9yZGVyLmZlZSkgPyBvcmRlckZlZSA6IG9yZGVyLmZlZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJGZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRBbW91bnQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5xdW90ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGFjY291bnRCYWxhbmNlcy5xdW90ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihvcmRlci5xdW90ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIC0gZm9yUXVvdGVGZWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudE9uTWFya2V0ID0gQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50XG4gICAgICAgICAgICAgICAgICAgICkuZGl2KDEwMCAqIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIGJhc2VBc3NldEFtb3VudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLmJhc2UuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IEJpZ051bWJlcihvcmRlci5iYXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc3RhdGUuc3ByZWFkKSAvIDEwMCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50T25NYXJrZXQudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhmb3JCYXNlRmVlKVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbG9nKFxuICAgICAgICAgICAgICAgICAgICBgYnV5ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgIH06IGFtb3VudD0ke2Jhc2VBc3NldEFtb3VudC5hbW91bnQudG9OdW1iZXIoKX0gcHJpY2U9JHtCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0QW1vdW50LmFtb3VudFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2KGJhc2VBc3NldEFtb3VudC5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKX0gJHt0aGlzLmJhc2Uuc3ltYm9sfS8ke3RoaXMucXVvdGUuc3ltYm9sfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0QW1vdW50XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIG9yZGVyLnN0YXRlID0gXCJidXlcIjtcbiAgICAgICAgICAgICAgICBvcmRlci5pZCA9IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIjtcbiAgICAgICAgICAgICAgICBvcmRlci5iYXNlID0gYmFzZUFzc2V0QW1vdW50LmFtb3VudC50b051bWJlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgbGV0IG9yZGVyQm9vayA9IGF3YWl0IEFwaXMuZGIuZ2V0X29yZGVyX2Jvb2soXG4gICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcbiAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXG4gICAgICAgICAgICA1MFxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBxdW90ZUFtb3VudCA9IEJpZ051bWJlcigwKSxcbiAgICAgICAgICAgIGJhc2VBbW91bnQgPSBCaWdOdW1iZXIoMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJCb29rLmFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhc2sgPSBvcmRlckJvb2suYXNrc1tpXTtcblxuICAgICAgICAgICAgbGV0IHF1b3RlID0gQmlnTnVtYmVyKGFzay5iYXNlKTtcbiAgICAgICAgICAgIGxldCBiYXNlID0gQmlnTnVtYmVyKGFzay5xdW90ZSk7XG4gICAgICAgICAgICBsZXQgZGlmZkJhc2UgPSBCaWdOdW1iZXIoYW1vdW50KS5taW51cyhiYXNlQW1vdW50KTtcblxuICAgICAgICAgICAgaWYgKGJhc2UuaXNFcXVhbFRvKGRpZmZCYXNlKSkge1xuICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50ID0gcXVvdGVBbW91bnQucGx1cyhxdW90ZSk7XG4gICAgICAgICAgICAgICAgYmFzZUFtb3VudCA9IGJhc2VBbW91bnQucGx1cyhiYXNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5pc0xlc3NUaGFuKGRpZmZCYXNlKSkge1xuICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50ID0gcXVvdGVBbW91bnQucGx1cyhxdW90ZSk7XG4gICAgICAgICAgICAgICAgYmFzZUFtb3VudCA9IGJhc2VBbW91bnQucGx1cyhiYXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5pc0dyZWF0ZXJUaGFuKGRpZmZCYXNlKSkge1xuICAgICAgICAgICAgICAgIGJhc2VBbW91bnQgPSBiYXNlQW1vdW50LnBsdXMoZGlmZkJhc2UpO1xuICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50ID0gcXVvdGVBbW91bnQucGx1cyhcbiAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKGFzay5wcmljZSkudGltZXMoZGlmZkJhc2UpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmljZSA9IHF1b3RlQW1vdW50LmRpdihiYXNlQW1vdW50KSxcbiAgICAgICAgICAgIGxvd1ByaWNlID0gbnVsbDtcblxuICAgICAgICBzdGF0ZS5vcmRlcnMuZm9yRWFjaChvcmRlciA9PiB7XG4gICAgICAgICAgICBsZXQgb3JkZXJQcmljZSA9IEJpZ051bWJlcihvcmRlci5xdW90ZSkuZGl2KG9yZGVyLmJhc2UpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFsb3dQcmljZSB8fFxuICAgICAgICAgICAgICAgIG9yZGVyUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgLm1pbnVzKHByaWNlKVxuICAgICAgICAgICAgICAgICAgICAuYWJzKClcbiAgICAgICAgICAgICAgICAgICAgLmlzTGVzc1RoYW4obG93UHJpY2UubWludXMocHJpY2UpLmFicygpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGxvd1ByaWNlID0gb3JkZXJQcmljZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGlzR3JlYXRlckRpc3RhbmNlID1cbiAgICAgICAgICAgICEhbG93UHJpY2UgJiZcbiAgICAgICAgICAgIGxvd1ByaWNlXG4gICAgICAgICAgICAgICAgLm1pbnVzKHByaWNlKVxuICAgICAgICAgICAgICAgIC5hYnMoKVxuICAgICAgICAgICAgICAgIC5kaXYobG93UHJpY2UpXG4gICAgICAgICAgICAgICAgLnRpbWVzKDEwMClcbiAgICAgICAgICAgICAgICAuaXNHcmVhdGVyVGhhbihzdGF0ZS5kaXN0YW5jZSk7XG5cbiAgICAgICAgbG9nKFxuICAgICAgICAgICAgYE9yZGVycyBleGlzdHM6ICR7ISFsb3dQcmljZX0sIGJhbGFuY2UgPiBhbW91bnQ6ICR7YmFsYW5jZSA+XG4gICAgICAgICAgICAgICAgYW1vdW50fSwgbG93UHJpY2UgLSBwcmljZSA+IGRpc3RhbmNlOiAke2lzR3JlYXRlckRpc3RhbmNlfWBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGJhbGFuY2UgPiBhbW91bnQgJiYgKCFsb3dQcmljZSB8fCBpc0dyZWF0ZXJEaXN0YW5jZSkpIHtcbiAgICAgICAgICAgIGxldCBiYXNlQXNzZXRBbW91bnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLmJhc2UuaWQsXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucXVvdGUuaWQsXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogcXVvdGVBbW91bnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5idXkocXVvdGVBc3NldEFtb3VudCwgYmFzZUFzc2V0QW1vdW50KSxcbiAgICAgICAgICAgICAgICBvcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwic2VsbFwiLFxuICAgICAgICAgICAgICAgICAgICBiYXNlOiBhbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlOiBxdW90ZUFzc2V0QW1vdW50LmFtb3VudC50b051bWJlcigpLFxuICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxuICAgICAgICAgICAgICAgICAgICBmZWU6IG9yZGVyRmVlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3RhdGUub3JkZXJzLnB1c2gob3JkZXIpO1xuICAgICAgICAgICAgbG9nKFxuICAgICAgICAgICAgICAgIGBzZWxsICR7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcbiAgICAgICAgICAgICAgICB9OiBhbW91bnQ9JHthbW91bnR9LCBwcmljZT0ke3ByaWNlLnRvTnVtYmVyKCl9ICR7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcbiAgICAgICAgICAgICAgICB9LyR7dGhpcy5xdW90ZS5zeW1ib2x9YFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKCFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhbGFuY2UpKVxuICAgICAgICAgICAgICAgIHN0YXRlLmJhbGFuY2UgPSBOdW1iZXIoc3RhdGUuYmFsYW5jZSkgLSBhbW91bnQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5vcmRlcnMgPSBzdGF0ZS5vcmRlcnMuZmlsdGVyKG9yZGVyID0+IG9yZGVyLmlkICE9PSBudWxsKTtcblxuICAgICAgICB0aGlzLnN0b3JhZ2Uud3JpdGUoc3RhdGUpO1xuICAgIH07XG5cbiAgICBhc3luYyBkZWxldGUoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG4gICAgICAgIHN0YXRlLm9yZGVycy5mb3JFYWNoKGFzeW5jIChvcmRlcikgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKGBkZWxldGUgb3JkZXJJZDogJHtvcmRlci5pZH1gKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuY2FuY2VsT3JkZXIob3JkZXIuaWQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJjZW50VXA7XG4iLCJpbXBvcnQgQ3JlYXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvQ3JlYXRlXCI7XG5pbXBvcnQgU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9TdGF0ZVwiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5cbmltcG9ydCBCb3RGYXRoZXIgZnJvbSBcIi4uL0JvdEZhdGhlclwiO1xuXG5CaWdOdW1iZXIuY29uZmlnKHtFUlJPUlM6IGZhbHNlfSk7XG5cbmNsYXNzIFNwcmVhZFRyYWRlIGV4dGVuZHMgQm90RmF0aGVyIHtcbiAgICBzdGF0aWMgY3JlYXRlID0gQ3JlYXRlO1xuICAgIHN0YXRlID0gU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSkge1xuXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xuICAgICAgICAgICAgc3RvcmFnZS5pbml0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpbml0RGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIGJhc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGluaXREYXRhLmJhc2VBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogaW5pdERhdGEuYmFzZUJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIHNwcmVhZDogaW5pdERhdGEuYmFzZVNwcmVhZCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5iYXNlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50OiBpbml0RGF0YS5wZXJjZW50QmFzZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWQsIHByaWNlIGFuZCBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVvdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGluaXREYXRhLnF1b3RlQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IGluaXREYXRhLnF1b3RlQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkOiBpbml0RGF0YS5xdW90ZVNwcmVhZCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5xdW90ZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudDogaW5pdERhdGEucGVyY2VudFF1b3RlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZCwgcHJpY2UgYW5kIGFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmcm9tTWFya2V0OiBpbml0RGF0YS5mcm9tTWFya2V0LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRQcmljZTogaW5pdERhdGEuZGVmYXVsdFByaWNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQm90RmF0aGVyXG4gICAgICAgIHN1cGVyKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0U3RhcnREYXRhKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuXG4gICAgICAgIHRoaXMuYmFzZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5iYXNlLmFzc2V0XTtcbiAgICAgICAgdGhpcy5xdW90ZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5xdW90ZS5hc3NldF07XG5cbiAgICAgICAgaWYgKFt0aGlzLmJhc2UuaXNzdWVyLCB0aGlzLnF1b3RlLmlzc3Vlcl0uaW5jbHVkZXMoXCIxLjIuMFwiKSkge1xuICAgICAgICAgICAgaWYgKFt0aGlzLmJhc2UuaWQsIHRoaXMucXVvdGUuaWRdLmluY2x1ZGVzKFwiMS4zLjBcIikpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRDb3JlRmVlZDtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYmFzZS5pc3N1ZXIgPT0gdGhpcy5xdW90ZS5pc3N1ZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRTbWFydEZlZWQ7XG4gICAgICAgICAgICBlbHNlIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0VUlBRmVlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0VUlBRmVlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGRlbGV0ZSgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhgZGVsZXRlIG9yZGVySWQ6ICR7c3RhdGUucXVvdGUub3JkZXIuaWR9YCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuY2FuY2VsT3JkZXIoc3RhdGUucXVvdGUub3JkZXIuaWQpO1xuXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKGBkZWxldGUgb3JkZXJJZDogJHtzdGF0ZS5iYXNlLm9yZGVyLmlkfWApO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LmNhbmNlbE9yZGVyKHN0YXRlLmJhc2Uub3JkZXIuaWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoKTtcbiAgICB9XG5cbiAgICBjaGVja09yZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInN0YXRlXCIsIHN0YXRlKTtcblxuICAgICAgICBsZXQgdGlja2VyID0gYXdhaXQgQXBpcy5kYi5nZXRfdGlja2VyKFxuICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0UHJpY2UgPSBzdGF0ZS5kZWZhdWx0UHJpY2U7XG5cbiAgICAgICAgbGV0IGZlZWRQcmljZSA9IHN0YXRlLmZyb21NYXJrZXRcbiAgICAgICAgICAgID8gQmlnTnVtYmVyKHRpY2tlci5sYXRlc3QpXG4gICAgICAgICAgICA6IGF3YWl0IHRoaXMuZ2V0RmVlZCgpLFxuICAgICAgICAgICAgYnV5UHJpY2UgPSBmZWVkUHJpY2UudGltZXMoMSAtIHN0YXRlLmJhc2Uuc3ByZWFkIC8gMTAwKS50b051bWJlcigpLFxuICAgICAgICAgICAgc2VsbFByaWNlID0gZmVlZFByaWNlXG4gICAgICAgICAgICAgICAgLnRpbWVzKDEgKyBzdGF0ZS5xdW90ZS5zcHJlYWQgLyAxMDApXG4gICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgZmVlZFByaWNlID0gZmVlZFByaWNlLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgaWYgKGZlZWRQcmljZSA9PSAwKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGJ1eU9yZGVyID0gc3RhdGUuYmFzZS5vcmRlci5pZFxuICAgICAgICAgICAgPyAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbc3RhdGUuYmFzZS5vcmRlci5pZF0pKVswXVxuICAgICAgICAgICAgOiBzdGF0ZS5iYXNlLm9yZGVyLmlkLFxuICAgICAgICAgICAgc2VsbE9yZGVyID0gc3RhdGUucXVvdGUub3JkZXIuaWRcbiAgICAgICAgICAgICAgICA/IChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFtzdGF0ZS5xdW90ZS5vcmRlci5pZF0pKVswXVxuICAgICAgICAgICAgICAgIDogc3RhdGUucXVvdGUub3JkZXIuaWQsXG4gICAgICAgICAgICBhY2NvdW50QmFsYW5jZXMgPSAoYXdhaXQgdGhpcy5hY2NvdW50LmJhbGFuY2VzKFxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5pZCxcbiAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLmlkXG4gICAgICAgICAgICApKS5yZWR1Y2UoKGFjYywgYmFsYW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5pZCA9PT0gYmFsYW5jZS5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA/IChhY2MuYmFzZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKVxuICAgICAgICAgICAgICAgICAgICA6IChhY2MucXVvdGUgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBiYXNlQmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5iYWxhbmNlID09PSBcIi1cIlxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5iYXNlLmJhbGFuY2UgPT09IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50QmFsYW5jZXMuYmFzZVxuICAgICAgICAgICAgICAgICAgICA6IE1hdGgubWluKGFjY291bnRCYWxhbmNlcy5iYXNlLCBzdGF0ZS5iYXNlLmJhbGFuY2UpLFxuICAgICAgICAgICAgcXVvdGVCYWxhbmNlID1cbiAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5iYWxhbmNlID09PSBcIi1cIlxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5xdW90ZS5iYWxhbmNlID09PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEJhbGFuY2VzLnF1b3RlXG4gICAgICAgICAgICAgICAgICAgIDogTWF0aC5taW4oYWNjb3VudEJhbGFuY2VzLnF1b3RlLCBzdGF0ZS5xdW90ZS5iYWxhbmNlKSxcbiAgICAgICAgICAgIGJhc2VBbW91bnQgPVxuICAgICAgICAgICAgICAgIHN0YXRlLmJhc2UucGVyY2VudCA9PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICA/IEJpZ051bWJlcihiYXNlQmFsYW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5iYXNlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5iYXNlLmFtb3VudCxcbiAgICAgICAgICAgIHF1b3RlQW1vdW50ID1cbiAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5wZXJjZW50ID09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKHF1b3RlQmFsYW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5xdW90ZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUucXVvdGUuYW1vdW50O1xuXG4gICAgICAgIGlmIChidXlPcmRlcikge1xuICAgICAgICAgICAgLy9jaGVjayBQcmljZVxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgYGNoZWNrIGJ1eU9yZGVyOiBtb3ZlPSR7TWF0aC5hYnMoXG4gICAgICAgICAgICAgICAgICAgIGJ1eVByaWNlIC0gc3RhdGUuYmFzZS5vcmRlci5wcmljZVxuICAgICAgICAgICAgICAgICkgPlxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGZlZWRQcmljZSAtIGJ1eVByaWNlKSAvXG4gICAgICAgICAgICAgICAgMn0sIGZpbGw9JHt0aWNrZXIubG93ZXN0X2FzayA8PSBidXlQcmljZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGJ1eVByaWNlIC0gc3RhdGUuYmFzZS5vcmRlci5wcmljZSkgPlxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGZlZWRQcmljZSAtIGJ1eVByaWNlKSAvIDIgJiZcbiAgICAgICAgICAgICAgICB0aWNrZXIubG93ZXN0X2FzayA+IGJ1eVByaWNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIG9yZGVyXG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICAgICAgICAgICAgICBgbW92ZSBidXkgb3JkZXI6ICR7YnV5UHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LmNhbmNlbE9yZGVyKHN0YXRlLmJhc2Uub3JkZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYW1vdW50IGluIG9yZGVyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyQW1vdW50ID0gQmlnTnVtYmVyKGJ1eU9yZGVyLmZvcl9zYWxlKVxuICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgPVxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc3RhdGUuYmFzZS5iYWxhbmNlKSArIG9yZGVyQW1vdW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGFkZCB0byBzZWxsIGJhbGFuY2VcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50ID4gb3JkZXJBbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUuYmFsYW5jZSA9IEJpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50IC0gb3JkZXJBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUucXVvdGUuYmFsYW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IE1hdGgubWluKGJhc2VCYWxhbmNlLCBiYXNlQW1vdW50KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBCaWdOdW1iZXIoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KGJ1eVByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGJ1eVByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSAtPSBhbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoL14xLjcuXFxkKiQvLnRlc3Qoc3RhdGUuYmFzZS5vcmRlci5pZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBmaWxsIG9yZGVyXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSA9IEJpZ051bWJlcihzdGF0ZS5iYXNlLm9yZGVyLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgLmRpdihzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSk7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgY3JlYXRlIGJ1eU9yZGVyOiBiYWxhbmNlPSR7YmFzZUJhbGFuY2UgPj1cbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50fSwgZmlsbD0ke3RpY2tlci5sb3dlc3RfYXNrIDw9IGJ1eVByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYmFzZUJhbGFuY2UgPj0gYmFzZUFtb3VudCAmJiB0aWNrZXIubG93ZXN0X2FzayA+IGJ1eVByaWNlKSB7XG4gICAgICAgICAgICAgICAgLy9idXlcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICAgICAgICAgICAgICBgYnV5OiAke2J1eVByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke3RoaXMuYmFzZS5zeW1ib2x9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcigxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYnV5UHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYnV5UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGJhc2VBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAoc3RhdGUuYmFzZS5iYWxhbmNlIC09IGJhc2VBbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsbE9yZGVyKSB7XG4gICAgICAgICAgICAvL2NoZWNrIFByaWNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgY2hlY2sgc2VsbE9yZGVyOiBtb3ZlPSR7TWF0aC5hYnMoXG4gICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZSAtIHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlXG4gICAgICAgICAgICAgICAgKSA+XG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gc2VsbFByaWNlKSAvXG4gICAgICAgICAgICAgICAgMn0sIGZpbGw9JHt0aWNrZXIuaGlnaGVzdF9iaWQgPj0gc2VsbFByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoc2VsbFByaWNlIC0gc3RhdGUucXVvdGUub3JkZXIucHJpY2UpID5cbiAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBzZWxsUHJpY2UpIC8gMiAmJlxuICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA8IHNlbGxQcmljZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvcmRlclxuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgYG1vdmUgc2VsbCBvcmRlcjogJHtzZWxsUHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LmNhbmNlbE9yZGVyKHN0YXRlLnF1b3RlLm9yZGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFtb3VudCBpbiBvcmRlclxuICAgICAgICAgICAgICAgIGxldCBvcmRlckFtb3VudCA9IEJpZ051bWJlcihzZWxsT3JkZXIuZm9yX3NhbGUpXG4gICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgPVxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc3RhdGUucXVvdGUuYmFsYW5jZSkgKyBvcmRlckFtb3VudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgdG8gYnV5IGJhbGFuY2VcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmFtb3VudCA+IG9yZGVyQW1vdW50ICYmXG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2UuYmFsYW5jZSA9IEJpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmFtb3VudCAtIG9yZGVyQW1vdW50XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5xdW90ZS5vcmRlci5wcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IE1hdGgubWluKHF1b3RlQmFsYW5jZSwgcXVvdGVBbW91bnQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogc2VsbFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlIC09IGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoL14xLjcuXFxkKiQvLnRlc3Qoc3RhdGUucXVvdGUub3JkZXIuaWQpKSB7XG4gICAgICAgICAgICAgICAgLy8gZmlsbCBvcmRlclxuICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAoc3RhdGUuYmFzZS5iYWxhbmNlID0gQmlnTnVtYmVyKHN0YXRlLnF1b3RlLm9yZGVyLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5iYXNlLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgYGNyZWF0ZSBzZWxsT3JkZXI6IGJhbGFuY2U9JHtxdW90ZUJhbGFuY2UgPj1cbiAgICAgICAgICAgICAgICBxdW90ZUFtb3VudH0sIGZpbGw9JHt0aWNrZXIuaGlnaGVzdF9iaWQgPj0gc2VsbFByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocXVvdGVCYWxhbmNlID49IHF1b3RlQW1vdW50ICYmIHRpY2tlci5oaWdoZXN0X2JpZCA8IHNlbGxQcmljZSkge1xuICAgICAgICAgICAgICAgIC8vYnV5XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgYHNlbGw6ICR7c2VsbFByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBzZWxsUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHF1b3RlQW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlIC09IHF1b3RlQW1vdW50KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdG9yYWdlLndyaXRlKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgYXN5bmMgZ2V0Q29yZUZlZWQoKSB7XG4gICAgICAgIGxldCByYXRlO1xuXG4gICAgICAgIGlmICh0aGlzLmJhc2UuaWQgPT0gXCIxLjMuMFwiKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnF1b3RlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmF0ZSA9IHRoaXMucXVvdGUub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XG4gICAgICAgICAgICByYXRlID0gdGhpcy5iYXNlLm9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPVxuICAgICAgICAgICAgcmF0ZS5iYXNlLmFzc2V0X2lkID09IHRoaXMuYmFzZS5pZFxuICAgICAgICAgICAgICAgID8gW3JhdGUuYmFzZSwgcmF0ZS5xdW90ZV1cbiAgICAgICAgICAgICAgICA6IFtyYXRlLnF1b3RlLCByYXRlLmJhc2VdO1xuXG4gICAgICAgIHJldHVybiBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQpLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbikpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNtYXJ0RmVlZCgpIHtcbiAgICAgICAgbGV0IGJ0cyA9IGF3YWl0IEFzc2V0c1tcImdwaFwiXTtcbiAgICAgICAgYXdhaXQgdGhpcy5iYXNlLnVwZGF0ZSgpO1xuICAgICAgICBsZXQgcmF0ZSA9IHRoaXMuYmFzZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPVxuICAgICAgICAgICAgcmF0ZS5iYXNlLmFzc2V0X2lkID09IFwiMS4zLjBcIlxuICAgICAgICAgICAgICAgID8gW3JhdGUuYmFzZSwgcmF0ZS5xdW90ZV1cbiAgICAgICAgICAgICAgICA6IFtyYXRlLnF1b3RlLCByYXRlLmJhc2VdO1xuXG4gICAgICAgIGxldCBiYXNlUHJpY2UgPSBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAuZGl2KDEwICoqIGJ0cy5wcmVjaXNpb24pXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQpLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5xdW90ZS51cGRhdGUoKTtcbiAgICAgICAgcmF0ZSA9IHRoaXMucXVvdGUub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgIGlmIChyYXRlLmJhc2UuYXNzZXRfaWQgPT0gXCIxLjMuMFwiKSB7XG4gICAgICAgICAgICBiYXNlID0gcmF0ZS5iYXNlO1xuICAgICAgICAgICAgcXVvdGUgPSByYXRlLnF1b3RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFzZSA9IHJhdGUucXVvdGU7XG4gICAgICAgICAgICBxdW90ZSA9IHJhdGUuYmFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBxdW90ZVByaWNlID0gQmlnTnVtYmVyKGJhc2UuYW1vdW50KVxuICAgICAgICAgICAgLmRpdigxMCAqKiBidHMucHJlY2lzaW9uKVxuICAgICAgICAgICAgLmRpdihCaWdOdW1iZXIocXVvdGUuYW1vdW50LnRvU3RyaW5nKCkpLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbikpO1xuXG4gICAgICAgIHJldHVybiBxdW90ZVByaWNlLmRpdihiYXNlUHJpY2UpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFVJQUZlZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmljZVxuICAgICAgICAgICAgPyBCaWdOdW1iZXIodGhpcy5kZWZhdWx0UHJpY2UudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIDogYXdhaXQgdGhpcy5iaW5hbmNlUHJpY2UodGhpcy5iYXNlLnN5bWJvbCwgdGhpcy5xdW90ZS5zeW1ib2wpO1xuICAgIH1cblxuICAgIGFzeW5jIGJpbmFuY2VQcmljZShiYXNlLCBxdW90ZSkge1xuICAgICAgICBsZXQgYXNzZXQgPSBgJHtxdW90ZS5zcGxpdChcIi5cIikuc2xpY2UoLTEpWzBdfSR7XG4gICAgICAgICAgICBiYXNlLnNwbGl0KFwiLlwiKS5zbGljZSgtMSlbMF1cbiAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCJVU0RcIiwgXCJVU0RUXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2V0IGFzc2V0OiAke2Fzc2V0fWApO1xuICAgICAgICB0aGlzLnByaWNlQXJyYXkgPSB0aGlzLnByaWNlQXJyYXkgfHwgW107XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vYXNzZXQgPSBcIkJUQ1VTRFRcIlxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgYGh0dHBzOi8vYXBpLmJpbmFuY2UuY29tL2FwaS92MS90cmFkZXM/c3ltYm9sPSR7YXNzZXR9JmxpbWl0PTFgXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB0aGlzLnByaWNlQXJyYXkucHVzaChkYXRhWzBdLnByaWNlKTtcbiAgICAgICAgICAgIC8vdGhpcy5wcmljZUFycmF5LnB1c2goMTApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcbiAgICAgICAgICAgICAgICBgRXJyb3IgQmluYW5jZSByZXF1ZXN0OiAke2Fzc2V0fSwgZXJyb3I6ICR7ZXJyb3J9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByaWNlQXJyYXkubGVuZ3RoID4gMTApIHRoaXMucHJpY2VBcnJheS5zaGlmdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlQXJyYXkubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB0aGlzLnByaWNlQXJyYXlcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBhLnBsdXMoYiksIEJpZ051bWJlcigwKSlcbiAgICAgICAgICAgICAgICAuZGl2KHRoaXMucHJpY2VBcnJheS5sZW5ndGgpXG4gICAgICAgICAgICA6IEJpZ051bWJlcigwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwcmVhZFRyYWRlO1xuIiwiaW1wb3J0IENyZWF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1RyYWlsaW5nU3RvcC9DcmVhdGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1RyYWlsaW5nU3RvcC9TdGF0ZVwiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5cbmltcG9ydCBCb3RGYXRoZXIgZnJvbSBcIi4uL0JvdEZhdGhlclwiO1xuXG5jbGFzcyBUcmFpbGluZ1N0b3AgZXh0ZW5kcyBCb3RGYXRoZXIge1xuICAgIHN0YXRpYyBjcmVhdGUgPSBDcmVhdGU7XG4gICAgc3RhdGUgPSBTdGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XG5cbiAgICAgICAgaWYgKGluaXREYXRhKSB7XG4gICAgICAgICAgICBzdG9yYWdlLmluaXQoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGluaXREYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0OiBpbml0RGF0YS5zZWxsQXNzZXQsXG4gICAgICAgICAgICAgICAgZ2V0QXNzZXQ6IGluaXREYXRhLmdldEFzc2V0LFxuICAgICAgICAgICAgICAgIGFtb3VudDogaW5pdERhdGEuYW1vdW50LFxuICAgICAgICAgICAgICAgIG1pbkFtb3VudDogaW5pdERhdGEubWluQW1vdW50LFxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IGluaXREYXRhLnBlcmNlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Cb3RGYXRoZXJcbiAgICAgICAgc3VwZXIoYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRTdGFydERhdGEoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG5cbiAgICAgICAgdGhpcy5zZWxsQXNzZXQgPSBhd2FpdCBBc3NldHNbc3RhdGUuc2VsbEFzc2V0XTtcbiAgICAgICAgdGhpcy5nZXRBc3NldCA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5nZXRBc3NldF07XG4gICAgfVxuXG5cbiAgICBjaGVja09yZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja09yZGVyc1wiKTtcblxuICAgICAgICBsZXQgdGlja2VyID0gYXdhaXQgQXBpcy5kYi5nZXRfdGlja2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsbEFzc2V0LnN5bWJvbFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHByaWNlID0gQmlnTnVtYmVyKHRpY2tlci5sYXRlc3QpLFxuICAgICAgICAgICAgbmVlZFN0b3Bsb3NzID0gcHJpY2UudGltZXMoMSAtIHN0YXRlLnBlcmNlbnQgLyAxMDApLFxuICAgICAgICAgICAgY3JlYXRlT3JkZXJQcmljZSA9IHByaWNlLnRpbWVzKDEgLSAoc3RhdGUucGVyY2VudCAqIDIpIC8gMyAvIDEwMCksXG4gICAgICAgICAgICBzdG9wbG9zcyA9IEJpZ051bWJlcihzdGF0ZS5taW5BbW91bnQpLmRpdihzdGF0ZS5hbW91bnQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgcHJpY2UudG9OdW1iZXIoKSxcbiAgICAgICAgICAgIG5lZWRTdG9wbG9zcy50b051bWJlcigpLFxuICAgICAgICAgICAgY3JlYXRlT3JkZXJQcmljZS50b051bWJlcigpLFxuICAgICAgICAgICAgc3RvcGxvc3MudG9OdW1iZXIoKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChuZWVkU3RvcGxvc3MuZ3Qoc3RvcGxvc3MpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwIG1pbkFtb3VudFwiKTtcbiAgICAgICAgICAgIHN0YXRlLm1pbkFtb3VudCA9IG5lZWRTdG9wbG9zcy50aW1lcyhzdGF0ZS5hbW91bnQpLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uud3JpdGUoc3RhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNyZWF0ZU9yZGVyUHJpY2UubHQoc3RvcGxvc3MpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBsaW1pdCBvcmRlclwiKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsbEFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICBzdGF0ZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgc3RvcGxvc3MudG9OdW1iZXIoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxpbmdTdG9wO1xuIiwiaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuaW1wb3J0IHtUcmFuc2FjdGlvbkJ1aWxkZXJ9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuXG5jbGFzcyBBY2NvdW50IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBmZWVTeW1ib2wgPSBcIkdQSFwiKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIEFwaXMuZGIuZ2V0X2FjY291bnRfYnlfbmFtZShuYW1lKSxcbiAgICAgICAgICAgIEFzc2V0c1tmZWVTeW1ib2xdXG4gICAgICAgIF0pLnRoZW4oKFthY2MsIGZlZV0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjID0gYWNjO1xuICAgICAgICAgICAgdGhpcy5mZWVBc3NldCA9IGZlZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FuY2VsT3JkZXIoaWQpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRUcmFuc2FjdGlvbihcImxpbWl0X29yZGVyX2NhbmNlbFwiLCB7XG4gICAgICAgICAgICBmZWU6IHRoaXMuZmVlQXNzZXQudG9QYXJhbSgpLFxuICAgICAgICAgICAgZmVlX3BheWluZ19hY2NvdW50OiB0aGlzLmFjYy5pZCxcbiAgICAgICAgICAgIG9yZGVyOiBpZCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGJ1eShcbiAgICAgICAgYnV5U3ltYm9sLFxuICAgICAgICBiYXNlU3ltYm9sLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHByaWNlLFxuICAgICAgICBmaWxsX29yX2tpbGwgPSBmYWxzZSxcbiAgICAgICAgZXhwaXJlID0gXCIyMDk5LTAxLTAxVDAwOjAwOjAwXCJcbiAgICApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIGxldCBidXlBc3NldCA9IGF3YWl0IEFzc2V0c1tcbiAgICAgICAgICAgICAgICB0eXBlb2YgYnV5U3ltYm9sID09PSBcIm9iamVjdFwiID8gYnV5U3ltYm9sLmFzc2V0X2lkIDogYnV5U3ltYm9sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmFzZUFzc2V0ID0gYXdhaXQgQXNzZXRzW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYmFzZVN5bWJvbC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA6IGJhc2VTeW1ib2xcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBidXlBbW91bnQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgIEJpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGJ1eVN5bWJvbCA9PT0gXCJvYmplY3RcIiA/IGJ1eVN5bWJvbC5hbW91bnQgOiBhbW91bnRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiBidXlBc3NldC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc2VsbEFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhc2VTeW1ib2wuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICA6IEJpZ051bWJlcihhbW91bnQpLnRpbWVzKHByaWNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIGJhc2VBc3NldC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGlmIChidXlBbW91bnQgPT0gMCB8fCBzZWxsQW1vdW50ID09IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbW91bnQgZXF1YWwgMCFcIik7XG5cbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdGhpcy5zZW5kVHJhbnNhY3Rpb24oXCJsaW1pdF9vcmRlcl9jcmVhdGVcIiwge1xuICAgICAgICAgICAgZmVlOiB0aGlzLmZlZUFzc2V0LnRvUGFyYW0oKSxcbiAgICAgICAgICAgIHNlbGxlcjogdGhpcy5hY2MuaWQsXG4gICAgICAgICAgICBhbW91bnRfdG9fc2VsbDogYmFzZUFzc2V0LnRvUGFyYW0oc2VsbEFtb3VudCksXG4gICAgICAgICAgICBtaW5fdG9fcmVjZWl2ZTogYnV5QXNzZXQudG9QYXJhbShidXlBbW91bnQpLFxuICAgICAgICAgICAgZXhwaXJhdGlvbjogZXhwaXJlLFxuICAgICAgICAgICAgZmlsbF9vcl9raWxsOiBmaWxsX29yX2tpbGwsXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbXVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW1xuICAgICAgICAgICAgdHhbMF0udHJ4Lm9wZXJhdGlvbl9yZXN1bHRzWzBdWzFdXG4gICAgICAgIF0pKVswXTtcbiAgICB9XG5cbiAgICBhc3luYyBzZWxsKFxuICAgICAgICBzZWxsU3ltYm9sLFxuICAgICAgICBiYXNlU3ltYm9sLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHByaWNlLFxuICAgICAgICBmaWxsX29yX2tpbGwgPSBmYWxzZSxcbiAgICAgICAgZXhwaXJlID0gXCIyMDk5LTAxLTAxVDAwOjAwOjAwXCJcbiAgICApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIGxldCBzZWxsQXNzZXQgPSBhd2FpdCBBc3NldHNbXG4gICAgICAgICAgICAgICAgdHlwZW9mIHNlbGxTeW1ib2wgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxsU3ltYm9sLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIDogc2VsbFN5bWJvbFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJhc2VBc3NldCA9IGF3YWl0IEFzc2V0c1tcbiAgICAgICAgICAgICAgICB0eXBlb2YgYmFzZVN5bWJvbCA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IGJhc2VTeW1ib2wuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgOiBiYXNlU3ltYm9sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2VsbEFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygc2VsbFN5bWJvbCA9PT0gXCJvYmplY3RcIiA/IHNlbGxTeW1ib2wuYW1vdW50IDogYW1vdW50XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogc2VsbEFzc2V0LnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBidXlBbW91bnQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICh0eXBlb2YgYmFzZVN5bWJvbCA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IEJpZ051bWJlcihiYXNlU3ltYm9sLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgOiBCaWdOdW1iZXIoYW1vdW50KS50aW1lcyhwcmljZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiBiYXNlQXNzZXQucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBpZiAoYnV5QW1vdW50ID09IDAgfHwgc2VsbEFtb3VudCA9PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW1vdW50IGVxdWFsIDAhXCIpO1xuXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IHRoaXMuc2VuZFRyYW5zYWN0aW9uKFwibGltaXRfb3JkZXJfY3JlYXRlXCIsIHtcbiAgICAgICAgICAgIGZlZTogdGhpcy5mZWVBc3NldC50b1BhcmFtKCksXG4gICAgICAgICAgICBzZWxsZXI6IHRoaXMuYWNjLmlkLFxuICAgICAgICAgICAgYW1vdW50X3RvX3NlbGw6IHNlbGxBc3NldC50b1BhcmFtKHNlbGxBbW91bnQpLFxuICAgICAgICAgICAgbWluX3RvX3JlY2VpdmU6IGJhc2VBc3NldC50b1BhcmFtKGJ1eUFtb3VudCksXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHBpcmUsXG4gICAgICAgICAgICBmaWxsX29yX2tpbGw6IGZpbGxfb3Jfa2lsbCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbXG4gICAgICAgICAgICB0eFswXS50cngub3BlcmF0aW9uX3Jlc3VsdHNbMF1bMV1cbiAgICAgICAgXSkpWzBdO1xuICAgIH1cblxuICAgIGFzeW5jIGJhbGFuY2VzKCkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG4gICAgICAgIHJldHVybiBBcGlzLmRiLmdldF9hY2NvdW50X2JhbGFuY2VzKHRoaXMuYWNjLmlkLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZFRyYW5zYWN0aW9uKHR5cGUsIG9wZXJhdGlvbikge1xuICAgICAgICBsZXQgdHIgPSBuZXcgVHJhbnNhY3Rpb25CdWlsZGVyKCk7XG4gICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbih0eXBlLCBvcGVyYXRpb24pO1xuICAgICAgICBhd2FpdCB0ci5zZXRfcmVxdWlyZWRfZmVlcygpO1xuXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XG4gICAgICAgIGxldCBwcml2YXRlX2tleSA9IFdhbGxldERiLmdldFByaXZhdGVLZXkoXG4gICAgICAgICAgICB0aGlzLmFjYy5hY3RpdmUua2V5X2F1dGhzWzBdWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRyLmFkZF9zaWduZXIoXG4gICAgICAgICAgICBwcml2YXRlX2tleSxcbiAgICAgICAgICAgIHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCkudG9QdWJsaWNLZXlTdHJpbmcoKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0ci5icm9hZGNhc3QoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XG4iLCJpbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGI6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBjYWxsIEFwaXMuZGIuJHttZXRob2R9KCR7Wy4uLmFyZ3VtZW50c119KWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5kYl9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIGhpc3Rvcnk6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAuaGlzdG9yeV9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIG5ldHdvcms6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAubmV0d29ya19hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIGNyeXB0bzogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5jcnlwdG9fYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMobWV0aG9kLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSksXG5cbiAgICBvcmRlcnM6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAub3JkZXJzX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pXG59O1xuIiwiaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcblxuY2xhc3MgQXNzZXQge1xuICAgIHN0YXRpYyBnZXQoXywgbmFtZSkge1xuICAgICAgICBpZiAodGhpc1tuYW1lXSkgcmV0dXJuIHRoaXNbbmFtZV07XG5cbiAgICAgICAgcmV0dXJuIC9eMVxcLjNcXC5cXGQrJC8udGVzdChuYW1lKSB8fCAhaXNOYU4obmFtZSlcbiAgICAgICAgICAgID8gdGhpcy5pZChuYW1lKVxuICAgICAgICAgICAgOiB0aGlzLmdldEFzc2V0KG5hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRBc3NldChfc3ltYm9sKSB7XG4gICAgICAgIGxldCBzeW1ib2wgPSBfc3ltYm9sLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcblxuICAgICAgICBpZiAodGhpcy5tYXBbc3ltYm9sXSkgcmV0dXJuIHRoaXMubWFwW3N5bWJvbF07XG5cbiAgICAgICAgbGV0IG9iaiA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKHN5bWJvbCwgMSkpWzBdO1xuXG4gICAgICAgIGlmICghb2JqIHx8IG9iai5zeW1ib2wgIT09IHN5bWJvbClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgTm90IGZvdW5kIGFzc2V0ICR7c3ltYm9sfSEgQmxvY2tjaGFpbiByZXR1cm4gJHtcbiAgICAgICAgICAgICAgICAgICAgb2JqID8gb2JqLnN5bWJvbCA6IG9ialxuICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubWFwW3N5bWJvbF0gPSBuZXcgdGhpcyhvYmopO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBbc3ltYm9sXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgaWQoaWQpIHtcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcbiAgICAgICAgbGV0IGFzc2V0ID0gT2JqZWN0LmtleXModGhpcy5tYXApLmZpbmQoXG4gICAgICAgICAgICBzeW1ib2wgPT4gdGhpcy5tYXBbc3ltYm9sXS5pZCA9PSBpZFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChhc3NldCkgcmV0dXJuIHRoaXMubWFwW2Fzc2V0XTtcblxuICAgICAgICBhc3NldCA9IChhd2FpdCBBcGlzLmRiLmdldF9hc3NldHMoW2lkXSkpWzBdO1xuXG4gICAgICAgIGlmICghYXNzZXQpIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIGFzc2V0IGJ5IGlkICR7aWR9IWApO1xuXG4gICAgICAgIHRoaXMubWFwW2Fzc2V0LnN5bWJvbF0gPSBuZXcgdGhpcyhhc3NldCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcFthc3NldC5zeW1ib2xdO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBmcm9tUGFyYW0ocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHthbW91bnQ6IHBhcmFtLmFtb3VudCwgYXNzZXQ6IGF3YWl0IHRoaXMuaWQocGFyYW0uYXNzZXRfaWQpfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubWFwIHx8IHt9O1xuXG4gICAgICAgIGxldCBhc3NldHMgPSBhd2FpdCBBcGlzLmRiLmdldF9hc3NldHMoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1hcCkubWFwKHN5bWJvbCA9PiB0aGlzLm1hcFtzeW1ib2xdLmlkKVxuICAgICAgICApO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChhc3NldCA9PiBPYmplY3QuYXNzaWduKHRoaXMubWFwW2Fzc2V0LnN5bWJvbF0sIGFzc2V0KSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocnBjT2JqKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcnBjT2JqKTtcbiAgICB9XG5cbiAgICB0b1BhcmFtKG51bWJlciA9IDApIHtcbiAgICAgICAgcmV0dXJuIHthbW91bnQ6IG51bWJlciwgYXNzZXRfaWQ6IHRoaXMuaWR9O1xuICAgIH1cblxuICAgIGZlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgLyAxMDAgLyAxMDA7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlKCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIChhd2FpdCBBcGlzLmRiLmdldF9hc3NldHMoW3RoaXMuaWRdKSlbMF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb3h5KHt9LCBBc3NldCk7XG4iLCJpbXBvcnQgU3ByZWFkVHJhZGUgZnJvbSBcIi4vU3ByZWFkVHJhZGVcIjtcbmltcG9ydCBUcmFpbGluZ1N0b3AgZnJvbSBcIi4vVHJhaWxpbmdTdG9wXCI7XG5pbXBvcnQgUGVyY2VudFVwIGZyb20gXCIuL1BlcmNlbnRVcFwiO1xuLy9pbXBvcnQgUmVsYXRpdmVPcmRlcnMgZnJvbSBcIi4vUmVsYXRpdmVPcmRlcnNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCJzdG9yZXMvQm90c1N0b3JhZ2VcIjtcblxudmFyIGJvdHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0cmF0ZWdpZXM6IHtcbiAgICAgICAgU3ByZWFkVHJhZGUsXG4gICAgICAgIFRyYWlsaW5nU3RvcCxcbiAgICAgICAgLy9SZWxhdGl2ZU9yZGVycyxcbiAgICAgICAgUGVyY2VudFVwXG4gICAgfSxcblxuICAgIGNyZWF0ZShzdHJhdGVneSwgYWNjb3VudCwgaW5pdERhdGEpIHtcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZShgJHthY2NvdW50fTo6JHtzdHJhdGVneX1bJHtpbml0RGF0YS5uYW1lfV1gKTtcblxuICAgICAgICBsZXQgYm90ID0gbmV3IHRoaXMuc3RyYXRlZ2llc1tzdHJhdGVneV0oYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpO1xuICAgICAgICBib3RzW2BfX2JvdHNfXyR7c3RvcmFnZS5uYW1lfWBdID0gYm90O1xuXG4gICAgICAgIHJldHVybiBib3Q7XG4gICAgfSxcblxuICAgIGFzeW5jIGRlbGV0ZShib3QpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBgX19ib3RzX18ke2JvdC5zdG9yYWdlLm5hbWV9YDtcblxuICAgICAgICBhd2FpdCBib3RzW25hbWVdLmRlbGV0ZSgpO1xuICAgICAgICBkZWxldGUgYm90c1tuYW1lXTtcbiAgICB9LFxuXG4gICAgZ2V0Qm90cyhhY2NvdW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRCb3RzXCIsIE9iamVjdC5rZXlzKGJvdHMpKVxuXG4gICAgICAgIHJldHVybiBTdG9yYWdlLmdldEFjY291bnRCb3QoYWNjb3VudClcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYm90c1trZXldKSByZXR1cm4gYm90c1trZXldO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtzdHJhdGVneSwgbmFtZV0gPSBrZXlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15fX2JvdHNfXyguKyk6OihcXHcrKVxcWyhcXHcrKVxcXS8sIFwiJDIsJDNcIilcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLFwiKTtcblxuICAgICAgICAgICAgICAgIGlmICghc3RyYXRlZ3kgfHwgIW5hbWUpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZShgJHthY2NvdW50fTo6JHtzdHJhdGVneX1bJHtuYW1lfV1gKTtcblxuICAgICAgICAgICAgICAgIGxldCBib3QgPSBuZXcgdGhpcy5zdHJhdGVnaWVzW3N0cmF0ZWd5XShhY2NvdW50LCBzdG9yYWdlKTtcbiAgICAgICAgICAgICAgICBib3RzW2tleV0gPSBib3Q7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGVsID0+IGVsKTtcbiAgICB9LFxuXG4gICAgaGFzQm90KGFjY291bnQsIHN0cmF0ZWd5LCBuYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgbmFtZSBzdGF0ZWd5XCIsIGFjY291bnQsIHN0cmF0ZWd5LCBuYW1lKTtcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuaGFzKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske25hbWV9XWApO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgbHMgZnJvbSBcImNvbW1vbi9sb2NhbFN0b3JhZ2VcIjtcblxudmFyIGJvdHMgPSBscyhcIl9fYm90c19fXCIpO1xuXG5jbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgZ2V0QWNjb3VudEJvdChhY2NvdW50KSB7XG4gICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoYF5fX2JvdHNfXyR7YWNjb3VudH06OmApO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoa2V5ID0+IHJlLnRlc3Qoa2V5KSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhhcyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBib3RzLmhhcyhuYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIC8vYm90cy5oYXMobmFtZSlcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgLy9pZiAoIWJvdHMuaGFzKG5hbWUpKVxuICAgICAgICAvL2JvdHMuc2V0KG5hbWUsIHt9KVxuICAgIH1cblxuICAgIGluaXQoZGF0YSkge1xuICAgICAgICBpZiAoIWJvdHMuaGFzKG5hbWUpKSBib3RzLnNldCh0aGlzLm5hbWUsIGRhdGEpO1xuICAgIH1cblxuICAgIHJlYWQoKSB7XG4gICAgICAgIHJldHVybiBib3RzLmdldCh0aGlzLm5hbWUpO1xuICAgIH1cblxuICAgIHdyaXRlKG5ld1N0YXRlKSB7XG4gICAgICAgIGJvdHMuc2V0KHRoaXMubmFtZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgYm90cy5yZW1vdmUodGhpcy5uYW1lKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=