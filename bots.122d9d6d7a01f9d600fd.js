"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[5],{

/***/ 2787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2788);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(589);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1816);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2098);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2097);
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

/***/ 2815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2737);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2788);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2792);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2791);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2816);
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

/***/ 2817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2792);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2808);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2816);
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

/***/ 2790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2737);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2788);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2791);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2792);
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

/***/ 2807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2792);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2808);
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

/***/ 2812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2737);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2788);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2791);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2792);
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

/***/ 2813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2792);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2808);
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

/***/ 2792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetLabel": () => (/* binding */ AssetLabel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2737);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2793);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2791);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2794);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2701);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2795);
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
var options = (0,branding__WEBPACK_IMPORTED_MODULE_6__.getMyMarketsQuotes)().map(name => ({
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

/***/ 2702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1964);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1962);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1963);
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

/***/ 2816:
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

/***/ 2701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetImageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2702);
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

/***/ 2809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(437);
/* harmony import */ var _app_lib_bots_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2810);
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

/***/ 2814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2815);
/* harmony import */ var components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2817);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2791);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2794);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(638);
/* harmony import */ var _BotFather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2809);







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

/***/ 2789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2790);
/* harmony import */ var components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2807);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2791);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2794);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(638);
/* harmony import */ var _BotFather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2809);






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

/***/ 2811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2812);
/* harmony import */ var components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2813);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2791);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2794);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(638);
/* harmony import */ var _BotFather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2809);







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

/***/ 2810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2791);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2794);
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

/***/ 2791:
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

/***/ 2794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2791);


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

/***/ 2788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2789);
/* harmony import */ var _TrailingStop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2811);
/* harmony import */ var _PercentUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2814);
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2818);


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

/***/ 2818:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90cy4xMjJkOWQ2ZDdhMDFmOWQ2MDBmZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFRQTs7QUFsTkE7O0FBcU5BO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7O0FBVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTs7QUFnQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQS9DQTs7QUFrREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7O0FBak1BOztBQW9NQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBL0NBOztBQW1EQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBSUE7O0FBcExBOztBQXVMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWxCQTs7QUFxQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBNURBOztBQStEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFlQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBbUJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFlQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFLQTs7QUF2V0E7O0FBMFdBOzs7Ozs7Ozs7Ozs7Ozs7O0FDalhBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBOUNBOztBQWtEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWtCQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQWNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFJQTs7QUF0VUE7O0FBeVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTs7QUFXQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBR0E7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQXZDQTs7QUEwQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQWNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBa0JBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFjQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFpQkE7O0FBeE9BOztBQTJPQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUdBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQW1CQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFlQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUlBOztBQXhMQTs7QUEyTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7O0FBeENBO0FBMkNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBUEE7QUFhQTs7QUFwREE7O0FBdURBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFJQTs7QUF6QkE7O0FBMkJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBS0E7O0FBL0NBOztBQWlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7O0FBUEE7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ25JQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFjQTs7QUFsQkE7O0FBcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFUQTtBQVlBOztBQWhFQTs7QUFtRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBSEE7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBOzs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFsRkE7O0FBd0ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFPQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEyQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQU9BO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFGQTtBQVZBO0FBQUE7QUFzQkE7QUFDQTtBQUZBO0FBV0E7QUFTQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFBQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBU0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFRQTtBQUVBOztBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBOVFBOztBQWlSQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQVVBO0FBQ0E7QUF2QkE7QUF5QkE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBUUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQVVBO0FBT0E7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTs7QUE4Q0E7QUFDQTtBQUNBOztBQU9BO0FBS0E7QUFFQTtBQUtBOztBQUdBO0FBSUE7O0FBS0E7QUFXQTs7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQU9BO0FBS0E7QUFFQTtBQUtBOztBQUdBO0FBR0E7O0FBS0E7QUFXQTs7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7O0FBS0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBS0E7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBR0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7QUFFQTtBQUVBO0FBS0E7O0FBN2JBOztBQWdjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBL0RBOztBQWtFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7QUFFQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUF3QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUdBOztBQUVBO0FBUUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQTBCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFLQTtBQUNBOztBQXBKQTs7QUF1SkE7Ozs7Ozs7Ozs7OztBQzlKQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBUkE7QUE5Q0E7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQU9BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQXhFQTs7QUEyRUE7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFqREE7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBL0JBOztBQWtDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvQm90cy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvQ3JlYXRlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL1BlcmNlbnRVcC9TdGF0ZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvU3RhdGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQm90cy9UcmFpbGluZ1N0b3AvU3RhdGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvbGlicy9Bc3NldFNlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL2xpYnMvQXNzZXRXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL2xpYnMvSW5wdXQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2xpYi9ib3RzL0JvdEZhdGhlci5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvbGliL2JvdHMvUGVyY2VudFVwL2luZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvYm90cy9TcHJlYWRUcmFkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvbGliL2JvdHMvVHJhaWxpbmdTdG9wL2luZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvYm90cy9hY2NvdW50LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvYm90cy9hcGlzLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvYm90cy9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2xpYi9ib3RzL2luZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9zdG9yZXMvQm90c1N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7UmVkaXJlY3QsIExpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcblxuY2xhc3MgQm90cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RyYXRlZ2llcyA9IEJvdE1hbmFnZXIuc3RyYXRlZ2llcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdFN0cmF0ZWd5OiBPYmplY3Qua2V5cyh0aGlzLnN0cmF0ZWdpZXMpWzBdLFxuICAgICAgICAgICAgYm90czogW10sXG4gICAgICAgICAgICBzZWxlY3RCb3Q6IDAsXG4gICAgICAgICAgICBlbmFibGVDcmVhdGU6IGZhbHNlLFxuICAgICAgICAgICAgYm90UnVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgYm90cyA9IEJvdE1hbmFnZXIuZ2V0Qm90cyh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KTtcbiAgICAgICAgdGhpcy5fdXBkKGJvdHMpO1xuICAgIH1cblxuICAgIF91cGQoYm90cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJvdHMsXG4gICAgICAgICAgICBzZWxlY3RCb3Q6IDAsXG4gICAgICAgICAgICBib3RSdW46IGJvdHNbMF0gPyBib3RzWzBdLnJ1biA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVN0cmF0ZWd5ID0gZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RTdHJhdGVneTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNoYW5nZUJvdCA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdEJvdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdEJvdCxcbiAgICAgICAgICAgIGJvdFJ1bjogdGhpcy5zdGF0ZS5ib3RzW3NlbGVjdEJvdF0ucnVuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDcmVhdGUgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBib3RzID0gdGhpcy5zdGF0ZS5ib3RzO1xuXG4gICAgICAgIGJvdHMucHVzaChcbiAgICAgICAgICAgIEJvdE1hbmFnZXIuY3JlYXRlKFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3ksXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0uc3RhdGVcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym90c30pO1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0ZUZvcm0udmFsaWRhdGUpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0udmFsaWRhdGUoXCJuYW1lXCIsIHRoaXMuY3JlYXRlRm9ybS5zdGF0ZS5uYW1lKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRW5hYmxlQ3JlYXRlID0gZW5hYmxlQ3JlYXRlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlQ3JlYXRlICE9IGVuYWJsZUNyZWF0ZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZUNyZWF0ZX0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdGFydEJvdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGJvdCA9IHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF07XG5cbiAgICAgICAgYXdhaXQgYm90LnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvdFJ1bjogYm90LnJ1bn0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVTdG9wQm90ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgYm90ID0gdGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XTtcblxuICAgICAgICBhd2FpdCBib3Quc3RvcCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtib3RSdW46IGJvdC5ydW59KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRGVsZXRlQm90ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBCb3RNYW5hZ2VyLmRlbGV0ZSh0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJvdHM6IEJvdE1hbmFnZXIuZ2V0Qm90cyh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KSxcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwic3RhcnQgcmVuZGVyIG1haW4gcGFnZVwiLCB0aGlzLnByb3BzKVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17XCIvXCJ9IC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IENyZWF0ZUZvcm0gPSB0aGlzLnN0cmF0ZWdpZXNbdGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneV0uY3JlYXRlO1xuXG4gICAgICAgIGxldCBib3QgPSB0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdIHx8IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMjAsIG92ZXJmbG93OiBcInZpc2libGVcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtMTIgbWVkaXVtLTYgbGFyZ2UtNSBsYXJnZS1vZmZzZXQtMSBmdWxsLXdpZHRoLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIiBzdHlsZT17e21hcmdpblRvcDogMzB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaGVscC9ib3RzL2ludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImljb25zLnF1ZXN0aW9uX2NpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc2VsZWN0X3N0cmF0ZWd5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgYnRzLXNlbGVjdCBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlU3RyYXRlZ3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0cmF0ZWdpZXMpLm1hcChuYW1lID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bmFtZX0gdmFsdWU9e25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2Zvcm0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtID0gZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ3JlYXRlPXt0aGlzLmhhbmRsZUVuYWJsZUNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZW5hYmxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uY3JlYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDMwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYm90X3N0YXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgYnRzLXNlbGVjdFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdEJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VCb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYm90cy5tYXAoKGJvdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JvdC5uYW1lfSB2YWx1ZT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2JvdC5uYW1lfSAoJHtib3QuY29uc3RydWN0b3IubmFtZX0pYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Ym90LnN0YXRlIGtleT17Ym90Lm5hbWV9IGJvdD17Ym90fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdGFydEJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ib3RSdW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc3RhcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0b3BCb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmJvdFJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zdG9wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVEZWxldGVCb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuYm90UnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmRlbGV0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zZWxlY3RfYm90XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgQm90cyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90TWFuYWdlciBmcm9tIFwibGliL2JvdHNcIjtcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2xpYnMvSW5wdXRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogXCJcIixcblxuICAgICAgICBiYXNlOiBcIkdQSFwiLFxuICAgICAgICBxdW90ZTogXCJSVURFWC5VU0RUXCIsXG5cbiAgICAgICAgYW1vdW50OiAxMDAwLFxuICAgICAgICBwZXJjZW50QW1vdW50OiBmYWxzZSxcblxuICAgICAgICBiYWxhbmNlOiBcIjUwMDBcIixcbiAgICAgICAgc3ByZWFkOiAyLFxuICAgICAgICBkaXN0YW5jZTogNCxcbiAgICAgICAgdmFsaWRhdGU6IFtcIm5hbWVcIl0sXG4gICAgICAgIGZyb21NYXJrZXQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUgPSBkZWJvdW5jZSh0aGlzLmFzc2V0VmFsaWRhdGUsIDIwMCk7XG4gICAgfVxuXG4gICAgYXNzZXRWYWxpZGF0ZSA9IGFzeW5jIG5hbWUgPT4ge1xuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnN0YXRlW25hbWVdO1xuICAgICAgICBsZXQgYmxvY2tjaGFpbkFzc2V0cyA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKGFzc2V0LCAxKSlbMF07XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XG5cbiAgICAgICAgaWYgKGFzc2V0ICE9PSBibG9ja2NoYWluQXNzZXRzLnN5bWJvbCkgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZSA9IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKFtcImJhc2VcIiwgXCJxdW90ZVwiXS5pbmNsdWRlcyhuYW1lKSkgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XG4gICAgfTtcblxuICAgIHZhbGlkYXRlID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIS9eXFx3KyQvLnRlc3QodmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIEJvdE1hbmFnZXIuaGFzQm90KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhc2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwiLVwiICYmIGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzcHJlYWRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJkaXN0YW5jZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh2YWxpZGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZhbGlkYXRlLCBuYW1lLCBhbW91bnQsIGJhbGFuY2UsIHNwcmVhZCwgZGlzdGFuY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnBlcmNlbnRfdXAuc2VsbF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImJhbGFuY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnBlcmNlbnRfdXAuZ2V0X2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwic3ByZWFkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5wZXJjZW50X3VwLmRpc3RhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzdGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXN0YW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImRpc3RhbmNlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXNzZXRMYWJlbH0gZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2xpYnMvSW5wdXRcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgU3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt2YWxpZGF0ZTogW119LCB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoW1wiYmFzZVwiLCBcInF1b3RlXCJdLmluY2x1ZGVzKG5hbWUpKSB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZVwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsYW5jZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gXCItXCIgJiYgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNwcmVhZFwiOlxuICAgICAgICAgICAgY2FzZSBcImRpc3RhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICBoYW5kbGVVcGRhdGVCb3QgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZU5vdyA9IHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUoey4uLnN0YXRlTm93LCAuLi50aGlzLnN0YXRlfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt2YWxpZGF0ZSwgYW1vdW50LCBiYWxhbmNlLCBzcHJlYWQsIGRpc3RhbmNlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnBlcmNlbnRfdXAuc2VsbF9hc3NldFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUuYmFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17KHRoaXMuc3RhdGUucGVyY2VudEFtb3VudCA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV9wZXJjZW50XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsodGhpcy5zdGF0ZS5wZXJjZW50QW1vdW50ID09IFwiZmFsc2VcIiA/IHRydWUgOiBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV92YWx1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiYmFsYW5jZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMucGVyY2VudF91cC5nZXRfYXNzZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5xdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUucXVvdGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnNwcmVhZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwic3ByZWFkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5wZXJjZW50X3VwLmRpc3RhbmNlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXN0YW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc3RhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiZGlzdGFuY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQm90fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnVwZGF0ZVwiLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90TWFuYWdlciBmcm9tIFwibGliL2JvdHNcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgQXNzZXRTZWxlY3RvciBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIENyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHF1b3RlQXNzZXQ6IFwiR1BIXCIsXG4gICAgICAgIGJhc2VBc3NldDogXCJSVURFWC5VU0RUXCIsXG5cbiAgICAgICAgcXVvdGVBbW91bnQ6IDUwMC4wLFxuICAgICAgICBiYXNlQW1vdW50OiAxMCxcblxuICAgICAgICBiYXNlU3ByZWFkOiAxMCxcbiAgICAgICAgcXVvdGVTcHJlYWQ6IDEwLFxuXG4gICAgICAgIHF1b3RlQmFsYW5jZTogNTAwMC4wLFxuICAgICAgICBiYXNlQmFsYW5jZTogMTAwLFxuXG4gICAgICAgIHBlcmNlbnRRdW90ZUFtb3VudDogZmFsc2UsXG4gICAgICAgIHBlcmNlbnRCYXNlQW1vdW50OiBmYWxzZSxcblxuICAgICAgICB2YWxpZGF0ZTogW1wibmFtZVwiXSxcbiAgICAgICAgZnJvbU1hcmtldDogZmFsc2VcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZSA9IGRlYm91bmNlKHRoaXMuYXNzZXRWYWxpZGF0ZSwgMjAwKTtcbiAgICB9XG5cbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICA/IGV2ZW50LnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKFtcImJhc2VBc3NldFwiLCBcInF1b3RlQXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFzc2V0XCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBc3NldFwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhc2VCYWxhbmNlXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVCYWxhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIi1cIiAmJiBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlQW1vdW50XCI6XG4gICAgICAgICAgICBjYXNlIFwiYmFzZVNwcmVhZFwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlU3ByZWFkXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkZWZhdWx0UHJpY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKCt2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWxpZGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGVBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGVTcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmJhbGFuY2VfdmFsdWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VTcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5kZWZhdWx0X3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZGVmYXVsdFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwiZGVmYXVsdFByaWNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJvbU1hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZnJvbU1hcmtldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5nZXRfcHJpY2VfZnJvbV9tYXJrZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0Fzc2V0TGFiZWx9IGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBTdGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe3ZhbGlkYXRlOiBbXX0sIHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgIHF1b3RlO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2cobmFtZSwgdmFsdWUsIHR5cGVvZiB2YWx1ZSk7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFtb3VudFwiOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnN0YXRlLmJhc2U7XG4gICAgICAgICAgICAgICAgYmFzZS5hbW91bnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGVyY2VudEJhc2VBbW91bnRcIjpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xuICAgICAgICAgICAgICAgIGJhc2UucGVyY2VudCA9IHZhbHVlID09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2V9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQmFsYW5jZVwiOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnN0YXRlLmJhc2U7XG4gICAgICAgICAgICAgICAgYmFzZS5iYWxhbmNlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhc2VTcHJlYWRcIjpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xuICAgICAgICAgICAgICAgIGJhc2Uuc3ByZWFkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInF1b3RlQW1vdW50XCI6XG4gICAgICAgICAgICAgICAgcXVvdGUgPSB0aGlzLnN0YXRlLnF1b3RlO1xuICAgICAgICAgICAgICAgIHF1b3RlLmFtb3VudCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1b3RlfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGVyY2VudFF1b3RlQW1vdW50XCI6XG4gICAgICAgICAgICAgICAgcXVvdGUgPSB0aGlzLnN0YXRlLnF1b3RlO1xuICAgICAgICAgICAgICAgIHF1b3RlLnBlcmNlbnQgPSB2YWx1ZSA9PSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInF1b3RlQmFsYW5jZVwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5iYWxhbmNlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZVNwcmVhZFwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5zcHJlYWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRQcmljZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlZmF1bHRQcmljZTogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmcm9tTWFya2V0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbU1hcmtldDogZXZlbnQudGFyZ2V0LmNoZWNrZWR9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlVXBkYXRlQm90ID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGVOb3cgPSB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5iYXNlLm9yZGVyID0gc3RhdGVOb3cuYmFzZS5vcmRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5xdW90ZS5vcmRlciA9IHN0YXRlTm93LnF1b3RlLm9yZGVyO1xuXG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUodGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ucXVvdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYXNzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5xdW90ZS5hc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUucXVvdGUuYXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGUuYmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucXVvdGUucGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmJhbGFuY2VfcGVyY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyF0aGlzLnN0YXRlLnF1b3RlLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3ZhbHVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5zcHJlYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5zcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYXNzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmJhc2UuYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLmJhc2UuYXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlLmJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5iYXNlLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50QmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyF0aGlzLnN0YXRlLmJhc2UucGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmJhbGFuY2VfdmFsdWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLnNwcmVhZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5zcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmRlZmF1bHRfcHJpY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwiZGVmYXVsdFByaWNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJvbU1hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZnJvbU1hcmtldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmdldF9wcmljZV9mcm9tX21hcmtldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi51cGRhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgc2VsbEFzc2V0OiBcIkdQSFwiLFxuICAgICAgICBnZXRBc3NldDogXCJSVURFWC5VU0RUXCIsXG4gICAgICAgIGFtb3VudDogMTAwMCxcbiAgICAgICAgbWluQW1vdW50OiAxLFxuICAgICAgICBzdG9wbG9zczogMC4wMSxcbiAgICAgICAgcGVyY2VudDogMTAsXG4gICAgICAgIHZhbGlkYXRlOiBbXCJuYW1lXCJdXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUgPSBkZWJvdW5jZSh0aGlzLmFzc2V0VmFsaWRhdGUsIDIwMCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKFtcInNlbGxBc3NldFwiLCBcImdldEFzc2V0XCJdLmluY2x1ZGVzKG5hbWUpKVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcIm1pbkFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlIC8gdGhpcy5zdGF0ZS5hbW91bnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3RvcGxvc3NcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgKiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcImFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSAqIHRoaXMuc3RhdGUuc3RvcGxvc3NcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQXNzZXRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJnZXRBc3NldFwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcIm1pbkFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInBlY2VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInN0b3Bsb3NzXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsaWRhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zZWxsX2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxsQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGxBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AuYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AuZ2V0X2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZXRBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2V0QXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLm1pbl9hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbkFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnN0b3Bsb3NzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9wbG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdG9wbG9zc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJzdG9wbG9zc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AudHJhaWxpbmdfcGVyY2VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwicGVyY2VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7QXNzZXRMYWJlbH0gZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5cbmNsYXNzIFN0YXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdmFsaWRhdGU6IFtdXG4gICAgfTtcblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpO1xuICAgICAgICBzdGF0ZS5zdG9wbG9zcyA9IHN0YXRlLm1pbkFtb3VudCAvIHN0YXRlLmFtb3VudDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoW1wic2VsbEFzc2V0XCIsIFwiZ2V0QXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwibWluQW1vdW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWUgLyB0aGlzLnN0YXRlLmFtb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJzdG9wbG9zc1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB0aGlzLnN0YXRlLmFtb3VudCAqIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiYW1vdW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlICogdGhpcy5zdGF0ZS5zdG9wbG9zc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge307XG5cbiAgICBoYW5kbGVVcGRhdGVCb3QgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUodGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Ub3A6IDUwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3Auc2VsbF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGxBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2VsbEFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5zZWxsQXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmdldF9hc3NldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5nZXRBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUuZ2V0QXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AubWluX2Ftb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zdG9wbG9zc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0b3Bsb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3RvcGxvc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcInN0b3Bsb3NzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC50cmFpbGluZ19wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwicGVyY2VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi51cGRhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcInJlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3NcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQgQXNzZXRzIGZyb20gXCJsaWIvYm90cy9hc3NldHNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi8uLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCBBc3luY1NlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0L2xpYi9Bc3luY1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtnZXRNeU1hcmtldHNRdW90ZXMsIGdldEFzc2V0SGlkZU5hbWVzcGFjZXN9IGZyb20gXCJicmFuZGluZ1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5leHBvcnQgY2xhc3MgQXNzZXRMYWJlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IG51bGxcbiAgICB9O1xuXG4gICAgaGlkZVByZWZpeCA9IG5hbWUgPT4ge1xuICAgICAgICBsZXQgYXJyID0gbmFtZS5zcGxpdChcIi5cIik7XG4gICAgICAgIGlmIChnZXRBc3NldEhpZGVOYW1lc3BhY2VzKCkuaW5jbHVkZXMoYCR7YXJyWzBdfS5gKSkgYXJyLnNoaWZ0KCk7XG5cbiAgICAgICAgcmV0dXJuIGFyci5qb2luKFwiLlwiKTtcbiAgICB9O1xuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRBc3NldE5hbWUodGhpcy5wcm9wcy5uYW1lKTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUpXG4gICAgICAgICAgICB0aGlzLnNldEFzc2V0TmFtZShuZXh0UHJvcHMubmFtZSk7XG4gICAgfVxuXG4gICAgc2V0QXNzZXROYW1lID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IGF3YWl0IEFzc2V0c1tuYW1lXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWU6IGFzc2V0LmJpdGFzc2V0X2RhdGFfaWQgPyBgZ3Ake25hbWV9YCA6IG5hbWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RoaXMuaGlkZVByZWZpeCh0aGlzLnN0YXRlLm5hbWUgfHwgdGhpcy5wcm9wcy5uYW1lKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxudmFyIG9wdGlvbnMgPSBnZXRNeU1hcmtldHNRdW90ZXMoKS5tYXAobmFtZSA9PiAoe1xuICAgIHZhbHVlOiBuYW1lLFxuICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXtuYW1lfSAvPlxufSkpO1xuXG5jbGFzcyBBc3NldFNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlT3B0aW9ucyA9IGRlYm91bmNlKHRoaXMucHJvbWlzZU9wdGlvbnMsIDIwMCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSBvcHRpb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2hhbmdlXCIsIG9wdGlvbik7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24gPyBvcHRpb24udmFsdWUgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwcm9taXNlT3B0aW9ucyA9IGFzeW5jIGlucHV0VmFsdWUgPT4ge1xuICAgICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBvcHRpb25zLmZpbHRlcihpID0+IGkudmFsdWUgPT0gaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDAgJiYgaW5wdXRWYWx1ZSkge1xuICAgICAgICAgICAgbGV0IGFzc2V0ID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoaW5wdXRWYWx1ZSwgMSkpWzBdO1xuXG4gICAgICAgICAgICBpZiAoYXNzZXQgJiYgIW9wdGlvbnMuZmluZChpID0+IGkudmFsdWUgPT0gYXNzZXQuc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhc3NldC5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXthc3NldC5zeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge29wdGlvbnN9O1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLnByb3BzLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fT5cbiAgICAgICAgICAgICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e3RoaXMucHJvbWlzZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFByb21wdFRleHQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90cy5hc3NldF9zZWxlY3Rvci53YWl0XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90cy5hc3NldF9zZWxlY3Rvci5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRTZWxlY3RvcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0RGlzcGxheU5hbWV9IGZyb20gXCJjb21tb24vcmVhY3RVdGlsc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCB7TGlzdH0gZnJvbSBcImltbXV0YWJsZVwiO1xuXG5jbGFzcyBEeW5hbWljT2JqZWN0UmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGRvczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdHNMaXN0XG4gICAgfTtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkb3M6IExpc3QoKVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmdldER5bmFtaWNPYmplY3QgPSB0aGlzLmdldER5bmFtaWNPYmplY3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXREeW5hbWljT2JqZWN0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRvcy5maW5kKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEgJiYgYS5nZXQoXCJpZFwiKSA9PT0gaWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7XG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgICAgICAgZ2V0RHluYW1pY09iamVjdDogdGhpcy5nZXREeW5hbWljT2JqZWN0XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkR5bmFtaWNPYmplY3RSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoRHluYW1pY09iamVjdFJlc29sdmVyKTtcblxuLyoqXG4gKiBIT0MgdGhhdCByZXNvbHZlcyBlaXRoZXIgYSBudW1iZXIgb2YgYXNzZXRzIGRpcmVjdGx5IHdpdGggQ2hhaW5Bc3NldCxcbiAqIG9yIGEgbGlzdCBvZiBhc3NldHMgd2l0aCBDaGFpbkFzc2V0c1xuICpcbiAqICBPcHRpb25zXG4gKiAgLSdwcm9wTmFtZXMnIGFuIGFycmF5IG9mIHByb3AgbmFtZXMgdG8gYmUgcmVzb2x2ZWQgYXMgYXNzZXRzLiAoZGVmYXVsdHMgdG8gXCJhc3NldFwiIG9yIFwiYXNzZXRzXCIpXG4gKiAgLSdkZWZhdWx0UHJvcHMnIGRlZmF1bHQgdmFsdWVzIHRvIHVzZSBmb3Igb2JqZWN0cyAob3B0aW9uYWwpXG4gKiAgLSdhc0xpc3QnIGRlZmluZXMgd2hldGhlciB0byB1c2UgQ2hhaW5Bc3NldHNMaXN0IG9yIG5vdCAodXNlZnVsIGZvciByZXNvbHZpbmcgbGFyZ2UgcXVhbnRpdGllcyBvZiBhc3NldHMpXG4gKiAgLSd3aXRoRHluYW1pYycgZGVmaW5lcyB3aGV0aGVyIHRvIGFsc28gcmVzb2x2ZSBkeW5hbWljIG9iamVjdHMgb3Igbm90XG4gKi9cblxuZnVuY3Rpb24gQXNzZXRXcmFwcGVyKENvbXBvbmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy5wcm9wTmFtZXMgPSBvcHRpb25zLnByb3BOYW1lcyB8fCBbXG4gICAgICAgICEhb3B0aW9ucy5hc0xpc3QgPyBcImFzc2V0c1wiIDogXCJhc3NldFwiXG4gICAgXTtcbiAgICBjb25zdCBmaW5hbFByb3BUeXBlcyA9IG9wdGlvbnMucHJvcE5hbWVzLnJlZHVjZSgocmVzLCB0eXBlKSA9PiB7XG4gICAgICAgIHJlc1t0eXBlXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICA/IENoYWluVHlwZXMuQ2hhaW5Bc3NldHNMaXN0XG4gICAgICAgICAgICA6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0sIHt9KTtcblxuICAgIGxldCBkZWZhdWx0UHJvcHMgPSBPYmplY3Qua2V5cyhmaW5hbFByb3BUeXBlcykucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzICYmIG9wdGlvbnMuZGVmYXVsdFByb3BzW2tleV07XG4gICAgICAgIHJlc1trZXldID0gISFvcHRpb25zLmFzTGlzdCA/IExpc3QoY3VycmVudCB8fCBbXSkgOiBjdXJyZW50IHx8IFwiMS4zLjBcIjtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBpZiAob3B0aW9ucy5kZWZhdWx0UHJvcHMgJiYgISFvcHRpb25zLmRlZmF1bHRQcm9wcy50ZW1wQ29tcG9uZW50KSB7XG4gICAgICAgIGRlZmF1bHRQcm9wcy50ZW1wQ29tcG9uZW50ID0gb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudDtcbiAgICB9XG5cbiAgICBjbGFzcyBBc3NldHNSZXNvbHZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBwcm9wVHlwZXMgPSBmaW5hbFByb3BUeXBlcztcbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBsZXQgZmluYWxBc3NldHMgPSB7fTtcbiAgICAgICAgICAgIGxldCBwYXNzVHJvdWdoUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGxldCBkb3MgPSBMaXN0KCk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXSAmJlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb3BOYW1lcy5pbmRleE9mKHByb3ApICE9PSAtMVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFzTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvcyA9IGRvcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0uZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhYSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvcyA9IGRvcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsQXNzZXRzW3Byb3BdID0gb3B0aW9ucy5hc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wc1twcm9wXS5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc1Ryb3VnaFByb3BzW3Byb3BdID0gdGhpcy5wcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHdyYXBwZWQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSxcbiAgICAgICAgICAgICAgICB7Li4ucGFzc1Ryb3VnaFByb3BzLCAuLi5maW5hbEFzc2V0c31cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLndpdGhEeW5hbWljKVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxEeW5hbWljT2JqZWN0UmVzb2x2ZXIgZG9zPXtkb3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3dyYXBwZWR9XG4gICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY09iamVjdFJlc29sdmVyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlbHNlIHJldHVybiB3cmFwcGVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFzc2V0c1Jlc29sdmVyID0gQmluZFRvQ2hhaW5TdGF0ZShBc3NldHNSZXNvbHZlcik7XG5cbiAgICBjbGFzcyBXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QXNzZXRzUmVzb2x2ZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHJlZj1cImJvdW5kX2NvbXBvbmVudFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Bc3NldHNSZXNvbHZlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgV3JhcHBlci5kaXNwbGF5TmFtZSA9IGBXcmFwcGVyKCR7Z2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KX0pYDtcbiAgICByZXR1cm4gV3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge25hbWUsIHZhbHVlLCBvbkNoYW5nZSwgYm9yZGVyLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICBpZD17bmFtZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBib3JkZXIgPyBcIjFweCBzb2xpZCByZWRcIiA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9Cb3RzL2xpYnMvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge2dldEltYWdlTmFtZX0gZnJvbSBcImJyYW5kaW5nXCI7XG5cbmNsYXNzIEFzc2V0SW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiB0cnVlLFxuICAgICAgICBtYXhXaWR0aDogMjBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWdFcnJvcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0ICE9PSBucC5hc3NldCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhXaWR0aCAhPT0gbnAubWF4V2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2hpdGVMaXN0ICE9PSBucC53aGl0ZUxpc3QgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1nRXJyb3IgIT09IG5zLmltZ0Vycm9yXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uRXJyb3IoaW1nTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VOb25lVG9CdHMpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0uc3JjID1cbiAgICAgICAgICAgICAgICAgICAgXCJhc3NldC1zeW1ib2xzL3Vua25vd24ucG5nXCI7XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VXcmFwcGVyKGFzc2V0KSB7XG4gICAgICAgICAgICBpZiAoYXNzZXQgPT09IG51bGwpIHJldHVybiBcInVua25vd25cIjtcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBhc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICByZXR1cm4gZ2V0SW1hZ2VOYW1lKHN5bWJvbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWdOYW1lID0gZ2V0SW1hZ2VXcmFwcGVyKGFzc2V0KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTNweFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0SW1hZ2UgPSBBc3NldFdyYXBwZXIoQXNzZXRJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0SW1hZ2VXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QXNzZXRJbWFnZSB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3RoaXMucHJvcHMubmFtZX0vPjtcbiAgICB9XG59XG4iLCJpbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi9hcHAvbGliL2JvdHMvYWNjb3VudFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiL2FwcC9hY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcIi9hcHAvYWN0aW9ucy9XYWxsZXRVbmxvY2tBY3Rpb25zXCI7XG5cbi8qL1xuICAgIEJvdCBwcm9nZW5pdG9yOlxuICAgICAgICAzIHJlcXVpcmVkIG1ldGhvZHMgZm9yIGNyZWF0ZSBuZXcgYm90czpcbiAgICAgICAgICAgIC0gY29uc3RydWN0b3JcbiAgICAgICAgICAgIC0gaW5pdFN0YXJ0RGF0YVxuICAgICAgICAgICAgLSBjaGVja09yZGVyc1xuICovXG5jbGFzcyBCb3RGYXRoZXIge1xuICAgIHN0YXRpYyBjcmVhdGUgPSBudWxsO1xuICAgIHN0YXRlID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XG5cbiAgICAgICAgaWYgKGluaXREYXRhKSB7XG4gICAgICAgICAgICAvKnN0b3JhZ2UuaW5pdCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaW5pdERhdGEubmFtZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0UHJpY2U6IGluaXREYXRhLmRlZmF1bHRQcmljZVxuICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG5ldyBBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuXG5cbiAgICAgICAgdGhpcy5uYW1lID0gc3RvcmFnZS5yZWFkKCkubmFtZTtcblxuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0U3RhcnREYXRhKCkge1xuICAgICAgICAvL0V4YW1wbGVcbiAgICAgICAgLypcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcblxuICAgICAgICB0aGlzLmJhc2UgPSBhd2FpdCBBc3NldHNbc3RhdGUuYmFzZV07XG4gICAgICAgIHRoaXMucXVvdGUgPSBhd2FpdCBBc3NldHNbc3RhdGUucXVvdGVdO1xuICAgICAgICAqL1xuICAgIH1cblxuXG4gICAgLy9IZXJlIExvZ2ljIC0gQ2hhbmdlIGZvciBuZXcgc3RyYXRlZ3lcbiAgICBhc3luYyBjaGVja09yZGVycygpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja09yZGVyc1wiKTtcblxuICAgICAgICAvL1N0cmF0ZWd5XG4gICAgICAgIC8vLi4uXG5cbiAgICB9XG5cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vQ29tbW9uIE1ldGhvZHNcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgYXN5bmMgc3RhcnQoKSB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0U3RhcnREYXRhKCk7XG5cbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgc2V0dGluZzogXCJ3YWxsZXRMb2NrVGltZW91dFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHN0b3AoKSB7XG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IHRoaXMucXVldWVFdmVudHM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU2VlIFNwcmVhZFRyYWRlIG9yIFBlcmNlbnRVcCAgZGVsZXRlKCkgdG86XG4gICAgICAgICAgICB0byBpbXBsZW1lbnQgYSBnZW5lcmFsIG1ldGhvZCBmb3IgZGVsZXRpbmcgb3JkZXJzIGZvciBhbGwgaW5oZXJpdGVkIGJvdHMgLCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZVxuICAgICAqL1xuICAgIGFzeW5jIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZSgpO1xuICAgIH1cblxuICAgIHF1ZXVlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gdGhpcy5xdWV1ZUV2ZW50c1xuICAgICAgICAgICAgLnRoZW4odGhpcy5jaGVja09yZGVycylcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvci5iaW5kKHRoaXMubG9nZ2VyKSk7XG4gICAgfTtcblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQm90RmF0aGVyOyIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvQ3JlYXRlXCI7XG5pbXBvcnQgU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvU3RhdGVcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQgQXNzZXRzIGZyb20gXCJsaWIvYm90cy9hc3NldHNcIjtcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSBcImJpZ251bWJlci5qc1wiO1xuXG5pbXBvcnQgQm90RmF0aGVyIGZyb20gXCIuLi9Cb3RGYXRoZXJcIjtcblxuY2xhc3MgUGVyY2VudFVwIGV4dGVuZHMgQm90RmF0aGVyIHtcbiAgICBzdGF0aWMgY3JlYXRlID0gQ3JlYXRlO1xuICAgIHN0YXRlID0gU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSkge1xuXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xuICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgIHBlcmNlbnRBbW91bnQsXG4gICAgICAgICAgICAgICAgYmFsYW5jZSxcbiAgICAgICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICAgIH0gPSBpbml0RGF0YTtcbiAgICAgICAgICAgIHN0b3JhZ2UuaW5pdCh7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICBwZXJjZW50QW1vdW50LFxuICAgICAgICAgICAgICAgIGJhbGFuY2UsXG4gICAgICAgICAgICAgICAgc3ByZWFkLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlLFxuICAgICAgICAgICAgICAgIG9yZGVyczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Cb3RGYXRoZXJcbiAgICAgICAgc3VwZXIoYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRTdGFydERhdGEoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG5cbiAgICAgICAgdGhpcy5iYXNlID0gYXdhaXQgQXNzZXRzW3N0YXRlLmJhc2VdO1xuICAgICAgICB0aGlzLnF1b3RlID0gYXdhaXQgQXNzZXRzW3N0YXRlLnF1b3RlXTtcbiAgICB9XG5cbiAgICBjaGVja09yZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKSxcbiAgICAgICAgICAgIGxvZyA9ICguLi5hcmdzKSA9PiB0aGlzLmxvZ2dlci5sb2coYFske3N0YXRlLm5hbWV9XWAsIC4uLmFyZ3MpLFxuICAgICAgICAgICAgYWNjb3VudEJhbGFuY2VzID0gKGF3YWl0IHRoaXMuYWNjb3VudC5iYWxhbmNlcyhcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuaWQsXG4gICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5pZFxuICAgICAgICAgICAgKSkucmVkdWNlKChhY2MsIGJhbGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuaWQgPT09IGJhbGFuY2UuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgPyAoYWNjLmJhc2UgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpXG4gICAgICAgICAgICAgICAgICAgIDogKGFjYy5xdW90ZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBiYWxhbmNlID1cbiAgICAgICAgICAgICAgICBzdGF0ZS5iYWxhbmNlID09PSBcIi1cIlxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5iYWxhbmNlID09PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRCYWxhbmNlcy5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGgubWluKGFjY291bnRCYWxhbmNlcy5iYXNlLCBzdGF0ZS5iYWxhbmNlKSxcbiAgICAgICAgICAgIGFtb3VudCA9XG4gICAgICAgICAgICAgICAgc3RhdGUucGVyY2VudEFtb3VudC50b1N0cmluZygpID09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmFtb3VudCxcbiAgICAgICAgICAgIG9yZGVycyA9IChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFxuICAgICAgICAgICAgICAgIHN0YXRlLm9yZGVycy5tYXAob3JkZXIgPT4gb3JkZXIuaWQpLmZpbHRlcihpZCA9PiBpZClcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgLm1hcChvcmRlciA9PiBvcmRlciAmJiBvcmRlci5pZClcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGlkID0+IGlkKSxcbiAgICAgICAgICAgIHByb2Nlc3NPcmRlcnMgPSBzdGF0ZS5vcmRlcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIG9yZGVyID0+ICFvcmRlcnMuaW5jbHVkZXMob3JkZXIuaWQpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgb3JkZXJGZWUgPSBCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgKGF3YWl0IEFwaXMuZGIuZ2V0X2dsb2JhbF9wcm9wZXJ0aWVzKCkpLnBhcmFtZXRlcnMuY3VycmVudF9mZWVzXG4gICAgICAgICAgICAgICAgICAgIC5wYXJhbWV0ZXJzWzFdWzFdLmZlZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogNSlcbiAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcblxuICAgICAgICBpZiAocHJvY2Vzc09yZGVycy5sZW5ndGggPiAwKSBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XG5cbiAgICAgICAgbGV0IHByb21pc2VzID0gcHJvY2Vzc09yZGVycy5tYXAoYXN5bmMgb3JkZXIgPT4ge1xuICAgICAgICAgICAgaWYgKG9yZGVyLnN0YXRlID09PSBcImJ1eVwiKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIuaWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYWxhbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50VG9NYXJrZXQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKHRoaXMuYmFzZS5vcHRpb25zLm1hcmtldF9mZWVfcGVyY2VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwMCAqIDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMob3JkZXIuYmFzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYWxhbmNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5iYWxhbmNlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIob3JkZXIuYmFzZSkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgKGFtb3VudFRvTWFya2V0ICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYW1vdW50VG9NYXJrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmJhc2Uub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgIT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxMCAqKiAtdGhpcy5iYXNlLnByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvclF1b3RlRmVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sID09PSBcIkdQSFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoaXNOYU4ob3JkZXIuZmVlKSA/IG9yZGVyRmVlIDogb3JkZXIuZmVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlckZlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgZm9yQmFzZUZlZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sID09PSBcIkdQSFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoaXNOYU4ob3JkZXIuZmVlKSA/IG9yZGVyRmVlIDogb3JkZXIuZmVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlckZlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnF1b3RlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoYWNjb3VudEJhbGFuY2VzLnF1b3RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKG9yZGVyLnF1b3RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgLSBmb3JRdW90ZUZlZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50T25NYXJrZXQgPSBCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnRcbiAgICAgICAgICAgICAgICAgICAgKS5kaXYoMTAwICogMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0QW1vdW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMuYmFzZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogQmlnTnVtYmVyKG9yZGVyLmJhc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5zcHJlYWQpIC8gMTAwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRPbk1hcmtldC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKGZvckJhc2VGZWUpXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsb2coXG4gICAgICAgICAgICAgICAgICAgIGBidXkgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgfTogYW1vdW50PSR7YmFzZUFzc2V0QW1vdW50LmFtb3VudC50b051bWJlcigpfSBwcmljZT0ke0JpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRBbW91bnQuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYmFzZUFzc2V0QW1vdW50LmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpfSAke3RoaXMuYmFzZS5zeW1ib2x9LyR7dGhpcy5xdW90ZS5zeW1ib2x9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0QW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXRBbW91bnRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgb3JkZXIuc3RhdGUgPSBcImJ1eVwiO1xuICAgICAgICAgICAgICAgIG9yZGVyLmlkID0gb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiO1xuICAgICAgICAgICAgICAgIG9yZGVyLmJhc2UgPSBiYXNlQXNzZXRBbW91bnQuYW1vdW50LnRvTnVtYmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICBsZXQgb3JkZXJCb29rID0gYXdhaXQgQXBpcy5kYi5nZXRfb3JkZXJfYm9vayhcbiAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxuICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgIDUwXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHF1b3RlQW1vdW50ID0gQmlnTnVtYmVyKDApLFxuICAgICAgICAgICAgYmFzZUFtb3VudCA9IEJpZ051bWJlcigwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlckJvb2suYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFzayA9IG9yZGVyQm9vay5hc2tzW2ldO1xuXG4gICAgICAgICAgICBsZXQgcXVvdGUgPSBCaWdOdW1iZXIoYXNrLmJhc2UpO1xuICAgICAgICAgICAgbGV0IGJhc2UgPSBCaWdOdW1iZXIoYXNrLnF1b3RlKTtcbiAgICAgICAgICAgIGxldCBkaWZmQmFzZSA9IEJpZ051bWJlcihhbW91bnQpLm1pbnVzKGJhc2VBbW91bnQpO1xuXG4gICAgICAgICAgICBpZiAoYmFzZS5pc0VxdWFsVG8oZGlmZkJhc2UpKSB7XG4gICAgICAgICAgICAgICAgcXVvdGVBbW91bnQgPSBxdW90ZUFtb3VudC5wbHVzKHF1b3RlKTtcbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50ID0gYmFzZUFtb3VudC5wbHVzKGJhc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmlzTGVzc1RoYW4oZGlmZkJhc2UpKSB7XG4gICAgICAgICAgICAgICAgcXVvdGVBbW91bnQgPSBxdW90ZUFtb3VudC5wbHVzKHF1b3RlKTtcbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50ID0gYmFzZUFtb3VudC5wbHVzKGJhc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmlzR3JlYXRlclRoYW4oZGlmZkJhc2UpKSB7XG4gICAgICAgICAgICAgICAgYmFzZUFtb3VudCA9IGJhc2VBbW91bnQucGx1cyhkaWZmQmFzZSk7XG4gICAgICAgICAgICAgICAgcXVvdGVBbW91bnQgPSBxdW90ZUFtb3VudC5wbHVzKFxuICAgICAgICAgICAgICAgICAgICBCaWdOdW1iZXIoYXNrLnByaWNlKS50aW1lcyhkaWZmQmFzZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByaWNlID0gcXVvdGVBbW91bnQuZGl2KGJhc2VBbW91bnQpLFxuICAgICAgICAgICAgbG93UHJpY2UgPSBudWxsO1xuXG4gICAgICAgIHN0YXRlLm9yZGVycy5mb3JFYWNoKG9yZGVyID0+IHtcbiAgICAgICAgICAgIGxldCBvcmRlclByaWNlID0gQmlnTnVtYmVyKG9yZGVyLnF1b3RlKS5kaXYob3JkZXIuYmFzZSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIWxvd1ByaWNlIHx8XG4gICAgICAgICAgICAgICAgb3JkZXJQcmljZVxuICAgICAgICAgICAgICAgICAgICAubWludXMocHJpY2UpXG4gICAgICAgICAgICAgICAgICAgIC5hYnMoKVxuICAgICAgICAgICAgICAgICAgICAuaXNMZXNzVGhhbihsb3dQcmljZS5taW51cyhwcmljZSkuYWJzKCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgbG93UHJpY2UgPSBvcmRlclByaWNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgaXNHcmVhdGVyRGlzdGFuY2UgPVxuICAgICAgICAgICAgISFsb3dQcmljZSAmJlxuICAgICAgICAgICAgbG93UHJpY2VcbiAgICAgICAgICAgICAgICAubWludXMocHJpY2UpXG4gICAgICAgICAgICAgICAgLmFicygpXG4gICAgICAgICAgICAgICAgLmRpdihsb3dQcmljZSlcbiAgICAgICAgICAgICAgICAudGltZXMoMTAwKVxuICAgICAgICAgICAgICAgIC5pc0dyZWF0ZXJUaGFuKHN0YXRlLmRpc3RhbmNlKTtcblxuICAgICAgICBsb2coXG4gICAgICAgICAgICBgT3JkZXJzIGV4aXN0czogJHshIWxvd1ByaWNlfSwgYmFsYW5jZSA+IGFtb3VudDogJHtiYWxhbmNlID5cbiAgICAgICAgICAgICAgICBhbW91bnR9LCBsb3dQcmljZSAtIHByaWNlID4gZGlzdGFuY2U6ICR7aXNHcmVhdGVyRGlzdGFuY2V9YFxuICAgICAgICApO1xuICAgICAgICBpZiAoYmFsYW5jZSA+IGFtb3VudCAmJiAoIWxvd1ByaWNlIHx8IGlzR3JlYXRlckRpc3RhbmNlKSkge1xuICAgICAgICAgICAgbGV0IGJhc2VBc3NldEFtb3VudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMuYmFzZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdW90ZUFzc2V0QW1vdW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5xdW90ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBxdW90ZUFtb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LmJ1eShxdW90ZUFzc2V0QW1vdW50LCBiYXNlQXNzZXRBbW91bnQpLFxuICAgICAgICAgICAgICAgIG9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJzZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgcXVvdGU6IHF1b3RlQXNzZXRBbW91bnQuYW1vdW50LnRvTnVtYmVyKCksXG4gICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgIGZlZTogb3JkZXJGZWVcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzdGF0ZS5vcmRlcnMucHVzaChvcmRlcik7XG4gICAgICAgICAgICBsb2coXG4gICAgICAgICAgICAgICAgYHNlbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgIH06IGFtb3VudD0ke2Ftb3VudH0sIHByaWNlPSR7cHJpY2UudG9OdW1iZXIoKX0gJHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgIH0vJHt0aGlzLnF1b3RlLnN5bWJvbH1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFsYW5jZSkpXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFsYW5jZSA9IE51bWJlcihzdGF0ZS5iYWxhbmNlKSAtIGFtb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLm9yZGVycyA9IHN0YXRlLm9yZGVycy5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQgIT09IG51bGwpO1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XG4gICAgfTtcblxuICAgIGFzeW5jIGRlbGV0ZSgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgc3RhdGUub3JkZXJzLmZvckVhY2goYXN5bmMgKG9yZGVyKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oYGRlbGV0ZSBvcmRlcklkOiAke29yZGVyLmlkfWApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5jYW5jZWxPcmRlcihvcmRlci5pZCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmNlbnRVcDtcbiIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL1N0YXRlXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcblxuaW1wb3J0IEJvdEZhdGhlciBmcm9tIFwiLi4vQm90RmF0aGVyXCI7XG5cbkJpZ051bWJlci5jb25maWcoe0VSUk9SUzogZmFsc2V9KTtcblxuY2xhc3MgU3ByZWFkVHJhZGUgZXh0ZW5kcyBCb3RGYXRoZXIge1xuICAgIHN0YXRpYyBjcmVhdGUgPSBDcmVhdGU7XG4gICAgc3RhdGUgPSBTdGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XG5cbiAgICAgICAgaWYgKGluaXREYXRhKSB7XG4gICAgICAgICAgICBzdG9yYWdlLmluaXQoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGluaXREYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgYmFzZToge1xuICAgICAgICAgICAgICAgICAgICBhc3NldDogaW5pdERhdGEuYmFzZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBpbml0RGF0YS5iYXNlQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkOiBpbml0RGF0YS5iYXNlU3ByZWFkLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLmJhc2VBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ6IGluaXREYXRhLnBlcmNlbnRCYXNlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZCwgcHJpY2UgYW5kIGFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdW90ZToge1xuICAgICAgICAgICAgICAgICAgICBhc3NldDogaW5pdERhdGEucXVvdGVBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogaW5pdERhdGEucXVvdGVCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBzcHJlYWQ6IGluaXREYXRhLnF1b3RlU3ByZWFkLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLnF1b3RlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50OiBpbml0RGF0YS5wZXJjZW50UXVvdGVBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lkLCBwcmljZSBhbmQgYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZyb21NYXJrZXQ6IGluaXREYXRhLmZyb21NYXJrZXQsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFByaWNlOiBpbml0RGF0YS5kZWZhdWx0UHJpY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Cb3RGYXRoZXJcbiAgICAgICAgc3VwZXIoYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRTdGFydERhdGEoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG5cbiAgICAgICAgdGhpcy5iYXNlID0gYXdhaXQgQXNzZXRzW3N0YXRlLmJhc2UuYXNzZXRdO1xuICAgICAgICB0aGlzLnF1b3RlID0gYXdhaXQgQXNzZXRzW3N0YXRlLnF1b3RlLmFzc2V0XTtcblxuICAgICAgICBpZiAoW3RoaXMuYmFzZS5pc3N1ZXIsIHRoaXMucXVvdGUuaXNzdWVyXS5pbmNsdWRlcyhcIjEuMi4wXCIpKSB7XG4gICAgICAgICAgICBpZiAoW3RoaXMuYmFzZS5pZCwgdGhpcy5xdW90ZS5pZF0uaW5jbHVkZXMoXCIxLjMuMFwiKSlcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZlZWQgPSB0aGlzLmdldENvcmVGZWVkO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5iYXNlLmlzc3VlciA9PSB0aGlzLnF1b3RlLmlzc3VlcilcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZlZWQgPSB0aGlzLmdldFNtYXJ0RmVlZDtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRVSUFGZWVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRVSUFGZWVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZGVsZXRlKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKGBkZWxldGUgb3JkZXJJZDogJHtzdGF0ZS5xdW90ZS5vcmRlci5pZH1gKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5jYW5jZWxPcmRlcihzdGF0ZS5xdW90ZS5vcmRlci5pZCk7XG5cbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oYGRlbGV0ZSBvcmRlcklkOiAke3N0YXRlLmJhc2Uub3JkZXIuaWR9YCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuY2FuY2VsT3JkZXIoc3RhdGUuYmFzZS5vcmRlci5pZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZSgpO1xuICAgIH1cblxuICAgIGNoZWNrT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwic3RhdGVcIiwgc3RhdGUpO1xuXG4gICAgICAgIGxldCB0aWNrZXIgPSBhd2FpdCBBcGlzLmRiLmdldF90aWNrZXIoXG4gICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2xcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmRlZmF1bHRQcmljZSA9IHN0YXRlLmRlZmF1bHRQcmljZTtcblxuICAgICAgICBsZXQgZmVlZFByaWNlID0gc3RhdGUuZnJvbU1hcmtldFxuICAgICAgICAgICAgPyBCaWdOdW1iZXIodGlja2VyLmxhdGVzdClcbiAgICAgICAgICAgIDogYXdhaXQgdGhpcy5nZXRGZWVkKCksXG4gICAgICAgICAgICBidXlQcmljZSA9IGZlZWRQcmljZS50aW1lcygxIC0gc3RhdGUuYmFzZS5zcHJlYWQgLyAxMDApLnRvTnVtYmVyKCksXG4gICAgICAgICAgICBzZWxsUHJpY2UgPSBmZWVkUHJpY2VcbiAgICAgICAgICAgICAgICAudGltZXMoMSArIHN0YXRlLnF1b3RlLnNwcmVhZCAvIDEwMClcbiAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcblxuICAgICAgICBmZWVkUHJpY2UgPSBmZWVkUHJpY2UudG9OdW1iZXIoKTtcblxuICAgICAgICBpZiAoZmVlZFByaWNlID09IDApIHJldHVybjtcblxuICAgICAgICBsZXQgYnV5T3JkZXIgPSBzdGF0ZS5iYXNlLm9yZGVyLmlkXG4gICAgICAgICAgICA/IChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFtzdGF0ZS5iYXNlLm9yZGVyLmlkXSkpWzBdXG4gICAgICAgICAgICA6IHN0YXRlLmJhc2Uub3JkZXIuaWQsXG4gICAgICAgICAgICBzZWxsT3JkZXIgPSBzdGF0ZS5xdW90ZS5vcmRlci5pZFxuICAgICAgICAgICAgICAgID8gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW3N0YXRlLnF1b3RlLm9yZGVyLmlkXSkpWzBdXG4gICAgICAgICAgICAgICAgOiBzdGF0ZS5xdW90ZS5vcmRlci5pZCxcbiAgICAgICAgICAgIGFjY291bnRCYWxhbmNlcyA9IChhd2FpdCB0aGlzLmFjY291bnQuYmFsYW5jZXMoXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkLFxuICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuaWRcbiAgICAgICAgICAgICkpLnJlZHVjZSgoYWNjLCBiYWxhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkID09PSBiYWxhbmNlLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgID8gKGFjYy5iYXNlID0gQmlnTnVtYmVyKGJhbGFuY2UuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpXG4gICAgICAgICAgICAgICAgICAgIDogKGFjYy5xdW90ZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICAgIGJhc2VCYWxhbmNlID1cbiAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLmJhbGFuY2UgPT09IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmJhc2UuYmFsYW5jZSA9PT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRCYWxhbmNlcy5iYXNlXG4gICAgICAgICAgICAgICAgICAgIDogTWF0aC5taW4oYWNjb3VudEJhbGFuY2VzLmJhc2UsIHN0YXRlLmJhc2UuYmFsYW5jZSksXG4gICAgICAgICAgICBxdW90ZUJhbGFuY2UgPVxuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLmJhbGFuY2UgPT09IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLnF1b3RlLmJhbGFuY2UgPT09IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50QmFsYW5jZXMucXVvdGVcbiAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihhY2NvdW50QmFsYW5jZXMucXVvdGUsIHN0YXRlLnF1b3RlLmJhbGFuY2UpLFxuICAgICAgICAgICAgYmFzZUFtb3VudCA9XG4gICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5wZXJjZW50ID09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhc2VCYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHN0YXRlLmJhc2UuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmJhc2UuYW1vdW50LFxuICAgICAgICAgICAgcXVvdGVBbW91bnQgPVxuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLnBlcmNlbnQgPT0gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIocXVvdGVCYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHN0YXRlLnF1b3RlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5xdW90ZS5hbW91bnQ7XG5cbiAgICAgICAgaWYgKGJ1eU9yZGVyKSB7XG4gICAgICAgICAgICAvL2NoZWNrIFByaWNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgY2hlY2sgYnV5T3JkZXI6IG1vdmU9JHtNYXRoLmFicyhcbiAgICAgICAgICAgICAgICAgICAgYnV5UHJpY2UgLSBzdGF0ZS5iYXNlLm9yZGVyLnByaWNlXG4gICAgICAgICAgICAgICAgKSA+XG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gYnV5UHJpY2UpIC9cbiAgICAgICAgICAgICAgICAyfSwgZmlsbD0ke3RpY2tlci5sb3dlc3RfYXNrIDw9IGJ1eVByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoYnV5UHJpY2UgLSBzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKSA+XG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gYnV5UHJpY2UpIC8gMiAmJlxuICAgICAgICAgICAgICAgIHRpY2tlci5sb3dlc3RfYXNrID4gYnV5UHJpY2VcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3JkZXJcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgICAgICAgICAgICAgIGBtb3ZlIGJ1eSBvcmRlcjogJHtidXlQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuY2FuY2VsT3JkZXIoc3RhdGUuYmFzZS5vcmRlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhbW91bnQgaW4gb3JkZXJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXJBbW91bnQgPSBCaWdOdW1iZXIoYnV5T3JkZXIuZm9yX3NhbGUpXG4gICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5iYXNlLmJhbGFuY2UpICsgb3JkZXJBbW91bnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWRkIHRvIHNlbGwgYmFsYW5jZVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5hbW91bnQgPiBvcmRlckFtb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmN1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5iYWxhbmNlID0gQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5hbW91bnQgLSBvcmRlckFtb3VudFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2KHN0YXRlLmJhc2Uub3JkZXIucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gTWF0aC5taW4oYmFzZUJhbGFuY2UsIGJhc2VBbW91bnQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcigxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYnV5UHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYnV5UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAoc3RhdGUuYmFzZS5iYWxhbmNlIC09IGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgvXjEuNy5cXGQqJC8udGVzdChzdGF0ZS5iYXNlLm9yZGVyLmlkKSkge1xuICAgICAgICAgICAgICAgIC8vIGZpbGwgb3JkZXJcbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlID0gQmlnTnVtYmVyKHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAuZGl2KHN0YXRlLmJhc2Uub3JkZXIucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcblxuICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBjcmVhdGUgYnV5T3JkZXI6IGJhbGFuY2U9JHtiYXNlQmFsYW5jZSA+PVxuICAgICAgICAgICAgICAgIGJhc2VBbW91bnR9LCBmaWxsPSR7dGlja2VyLmxvd2VzdF9hc2sgPD0gYnV5UHJpY2V9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChiYXNlQmFsYW5jZSA+PSBiYXNlQW1vdW50ICYmIHRpY2tlci5sb3dlc3RfYXNrID4gYnV5UHJpY2UpIHtcbiAgICAgICAgICAgICAgICAvL2J1eVxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgICAgICAgICAgICAgIGBidXk6ICR7YnV5UHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7dGhpcy5iYXNlLnN5bWJvbH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihidXlQcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBidXlQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogYmFzZUFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgLT0gYmFzZUFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxsT3JkZXIpIHtcbiAgICAgICAgICAgIC8vY2hlY2sgUHJpY2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBjaGVjayBzZWxsT3JkZXI6IG1vdmU9JHtNYXRoLmFicyhcbiAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlIC0gc3RhdGUucXVvdGUub3JkZXIucHJpY2VcbiAgICAgICAgICAgICAgICApID5cbiAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBzZWxsUHJpY2UpIC9cbiAgICAgICAgICAgICAgICAyfSwgZmlsbD0ke3RpY2tlci5oaWdoZXN0X2JpZCA+PSBzZWxsUHJpY2V9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhzZWxsUHJpY2UgLSBzdGF0ZS5xdW90ZS5vcmRlci5wcmljZSkgPlxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGZlZWRQcmljZSAtIHNlbGxQcmljZSkgLyAyICYmXG4gICAgICAgICAgICAgICAgdGlja2VyLmhpZ2hlc3RfYmlkIDwgc2VsbFByaWNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIG9yZGVyXG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICAgICAgICAgICAgICBgbW92ZSBzZWxsIG9yZGVyOiAke3NlbGxQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuY2FuY2VsT3JkZXIoc3RhdGUucXVvdGUub3JkZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYW1vdW50IGluIG9yZGVyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyQW1vdW50ID0gQmlnTnVtYmVyKHNlbGxPcmRlci5mb3Jfc2FsZSlcbiAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5xdW90ZS5iYWxhbmNlKSArIG9yZGVyQW1vdW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGFkZCB0byBidXkgYmFsYW5jZVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuYW1vdW50ID4gb3JkZXJBbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5iYWxhbmNlID0gQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuYW1vdW50IC0gb3JkZXJBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gTWF0aC5taW4ocXVvdGVCYWxhbmNlLCBxdW90ZUFtb3VudCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBzZWxsUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgLT0gYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgvXjEuNy5cXGQqJC8udGVzdChzdGF0ZS5xdW90ZS5vcmRlci5pZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBmaWxsIG9yZGVyXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgPSBCaWdOdW1iZXIoc3RhdGUucXVvdGUub3JkZXIuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUucXVvdGUub3JkZXIucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLmJhc2UuYmFsYW5jZSlcbiAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgY3JlYXRlIHNlbGxPcmRlcjogYmFsYW5jZT0ke3F1b3RlQmFsYW5jZSA+PVxuICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50fSwgZmlsbD0ke3RpY2tlci5oaWdoZXN0X2JpZCA+PSBzZWxsUHJpY2V9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChxdW90ZUJhbGFuY2UgPj0gcXVvdGVBbW91bnQgJiYgdGlja2VyLmhpZ2hlc3RfYmlkIDwgc2VsbFByaWNlKSB7XG4gICAgICAgICAgICAgICAgLy9idXlcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICAgICAgICAgICAgICBgc2VsbDogJHtzZWxsUHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxsUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHNlbGxQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogcXVvdGVBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgLT0gcXVvdGVBbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3JhZ2Uud3JpdGUoc3RhdGUpO1xuICAgIH07XG5cbiAgICBhc3luYyBnZXRDb3JlRmVlZCgpIHtcbiAgICAgICAgbGV0IHJhdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuYmFzZS5pZCA9PSBcIjEuMy4wXCIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucXVvdGUudXBkYXRlKCk7XG4gICAgICAgICAgICByYXRlID0gdGhpcy5xdW90ZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYmFzZS51cGRhdGUoKTtcbiAgICAgICAgICAgIHJhdGUgPSB0aGlzLmJhc2Uub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgW2Jhc2UsIHF1b3RlXSA9XG4gICAgICAgICAgICByYXRlLmJhc2UuYXNzZXRfaWQgPT0gdGhpcy5iYXNlLmlkXG4gICAgICAgICAgICAgICAgPyBbcmF0ZS5iYXNlLCByYXRlLnF1b3RlXVxuICAgICAgICAgICAgICAgIDogW3JhdGUucXVvdGUsIHJhdGUuYmFzZV07XG5cbiAgICAgICAgcmV0dXJuIEJpZ051bWJlcihiYXNlLmFtb3VudClcbiAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgIC5kaXYoQmlnTnVtYmVyKHF1b3RlLmFtb3VudCkuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U21hcnRGZWVkKCkge1xuICAgICAgICBsZXQgYnRzID0gYXdhaXQgQXNzZXRzW1wiZ3BoXCJdO1xuICAgICAgICBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XG4gICAgICAgIGxldCByYXRlID0gdGhpcy5iYXNlLm9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlO1xuICAgICAgICBsZXQgW2Jhc2UsIHF1b3RlXSA9XG4gICAgICAgICAgICByYXRlLmJhc2UuYXNzZXRfaWQgPT0gXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgPyBbcmF0ZS5iYXNlLCByYXRlLnF1b3RlXVxuICAgICAgICAgICAgICAgIDogW3JhdGUucXVvdGUsIHJhdGUuYmFzZV07XG5cbiAgICAgICAgbGV0IGJhc2VQcmljZSA9IEJpZ051bWJlcihiYXNlLmFtb3VudClcbiAgICAgICAgICAgIC5kaXYoMTAgKiogYnRzLnByZWNpc2lvbilcbiAgICAgICAgICAgIC5kaXYoQmlnTnVtYmVyKHF1b3RlLmFtb3VudCkuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pKTtcblxuICAgICAgICBhd2FpdCB0aGlzLnF1b3RlLnVwZGF0ZSgpO1xuICAgICAgICByYXRlID0gdGhpcy5xdW90ZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgaWYgKHJhdGUuYmFzZS5hc3NldF9pZCA9PSBcIjEuMy4wXCIpIHtcbiAgICAgICAgICAgIGJhc2UgPSByYXRlLmJhc2U7XG4gICAgICAgICAgICBxdW90ZSA9IHJhdGUucXVvdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYXNlID0gcmF0ZS5xdW90ZTtcbiAgICAgICAgICAgIHF1b3RlID0gcmF0ZS5iYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHF1b3RlUHJpY2UgPSBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAuZGl2KDEwICoqIGJ0cy5wcmVjaXNpb24pXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQudG9TdHJpbmcoKSkuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKSk7XG5cbiAgICAgICAgcmV0dXJuIHF1b3RlUHJpY2UuZGl2KGJhc2VQcmljZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VUlBRmVlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByaWNlXG4gICAgICAgICAgICA/IEJpZ051bWJlcih0aGlzLmRlZmF1bHRQcmljZS50b1N0cmluZygpKVxuICAgICAgICAgICAgOiBhd2FpdCB0aGlzLmJpbmFuY2VQcmljZSh0aGlzLmJhc2Uuc3ltYm9sLCB0aGlzLnF1b3RlLnN5bWJvbCk7XG4gICAgfVxuXG4gICAgYXN5bmMgYmluYW5jZVByaWNlKGJhc2UsIHF1b3RlKSB7XG4gICAgICAgIGxldCBhc3NldCA9IGAke3F1b3RlLnNwbGl0KFwiLlwiKS5zbGljZSgtMSlbMF19JHtcbiAgICAgICAgICAgIGJhc2Uuc3BsaXQoXCIuXCIpLnNsaWNlKC0xKVswXVxuICAgICAgICAgICAgfWBcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAucmVwbGFjZShcIlVTRFwiLCBcIlVTRFRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGBnZXQgYXNzZXQ6ICR7YXNzZXR9YCk7XG4gICAgICAgIHRoaXMucHJpY2VBcnJheSA9IHRoaXMucHJpY2VBcnJheSB8fCBbXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9hc3NldCA9IFwiQlRDVVNEVFwiXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICBgaHR0cHM6Ly9hcGkuYmluYW5jZS5jb20vYXBpL3YxL3RyYWRlcz9zeW1ib2w9JHthc3NldH0mbGltaXQ9MWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VBcnJheS5wdXNoKGRhdGFbMF0ucHJpY2UpO1xuICAgICAgICAgICAgLy90aGlzLnByaWNlQXJyYXkucHVzaCgxMClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFxuICAgICAgICAgICAgICAgIGBFcnJvciBCaW5hbmNlIHJlcXVlc3Q6ICR7YXNzZXR9LCBlcnJvcjogJHtlcnJvcn1gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJpY2VBcnJheS5sZW5ndGggPiAxMCkgdGhpcy5wcmljZUFycmF5LnNoaWZ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2VBcnJheS5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRoaXMucHJpY2VBcnJheVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEucGx1cyhiKSwgQmlnTnVtYmVyKDApKVxuICAgICAgICAgICAgICAgIC5kaXYodGhpcy5wcmljZUFycmF5Lmxlbmd0aClcbiAgICAgICAgICAgIDogQmlnTnVtYmVyKDApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ByZWFkVHJhZGU7XG4iLCJpbXBvcnQgQ3JlYXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZVwiO1xuaW1wb3J0IFN0YXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcblxuaW1wb3J0IEJvdEZhdGhlciBmcm9tIFwiLi4vQm90RmF0aGVyXCI7XG5cbmNsYXNzIFRyYWlsaW5nU3RvcCBleHRlbmRzIEJvdEZhdGhlciB7XG4gICAgc3RhdGljIGNyZWF0ZSA9IENyZWF0ZTtcbiAgICBzdGF0ZSA9IFN0YXRlO1xuXG4gICAgY29uc3RydWN0b3IoYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpIHtcblxuICAgICAgICBpZiAoaW5pdERhdGEpIHtcbiAgICAgICAgICAgIHN0b3JhZ2UuaW5pdCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaW5pdERhdGEubmFtZSxcbiAgICAgICAgICAgICAgICBzZWxsQXNzZXQ6IGluaXREYXRhLnNlbGxBc3NldCxcbiAgICAgICAgICAgICAgICBnZXRBc3NldDogaW5pdERhdGEuZ2V0QXNzZXQsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5hbW91bnQsXG4gICAgICAgICAgICAgICAgbWluQW1vdW50OiBpbml0RGF0YS5taW5BbW91bnQsXG4gICAgICAgICAgICAgICAgcGVyY2VudDogaW5pdERhdGEucGVyY2VudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0JvdEZhdGhlclxuICAgICAgICBzdXBlcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSk7XG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdFN0YXJ0RGF0YSgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcblxuICAgICAgICB0aGlzLnNlbGxBc3NldCA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5zZWxsQXNzZXRdO1xuICAgICAgICB0aGlzLmdldEFzc2V0ID0gYXdhaXQgQXNzZXRzW3N0YXRlLmdldEFzc2V0XTtcbiAgICB9XG5cblxuICAgIGNoZWNrT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrT3JkZXJzXCIpO1xuXG4gICAgICAgIGxldCB0aWNrZXIgPSBhd2FpdCBBcGlzLmRiLmdldF90aWNrZXIoXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBc3NldC5zeW1ib2wsXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxsQXNzZXQuc3ltYm9sXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcHJpY2UgPSBCaWdOdW1iZXIodGlja2VyLmxhdGVzdCksXG4gICAgICAgICAgICBuZWVkU3RvcGxvc3MgPSBwcmljZS50aW1lcygxIC0gc3RhdGUucGVyY2VudCAvIDEwMCksXG4gICAgICAgICAgICBjcmVhdGVPcmRlclByaWNlID0gcHJpY2UudGltZXMoMSAtIChzdGF0ZS5wZXJjZW50ICogMikgLyAzIC8gMTAwKSxcbiAgICAgICAgICAgIHN0b3Bsb3NzID0gQmlnTnVtYmVyKHN0YXRlLm1pbkFtb3VudCkuZGl2KHN0YXRlLmFtb3VudCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBwcmljZS50b051bWJlcigpLFxuICAgICAgICAgICAgbmVlZFN0b3Bsb3NzLnRvTnVtYmVyKCksXG4gICAgICAgICAgICBjcmVhdGVPcmRlclByaWNlLnRvTnVtYmVyKCksXG4gICAgICAgICAgICBzdG9wbG9zcy50b051bWJlcigpXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKG5lZWRTdG9wbG9zcy5ndChzdG9wbG9zcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXAgbWluQW1vdW50XCIpO1xuICAgICAgICAgICAgc3RhdGUubWluQW1vdW50ID0gbmVlZFN0b3Bsb3NzLnRpbWVzKHN0YXRlLmFtb3VudCkudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlT3JkZXJQcmljZS5sdChzdG9wbG9zcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIGxpbWl0IG9yZGVyXCIpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxsQXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHN0YXRlLmFtb3VudCxcbiAgICAgICAgICAgICAgICBzdG9wbG9zcy50b051bWJlcigpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFpbGluZ1N0b3A7XG4iLCJpbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQgV2FsbGV0VW5sb2NrQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRVbmxvY2tBY3Rpb25zXCI7XG5pbXBvcnQge1RyYW5zYWN0aW9uQnVpbGRlcn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmNsYXNzIEFjY291bnQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGZlZVN5bWJvbCA9IFwiR1BIXCIpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgQXBpcy5kYi5nZXRfYWNjb3VudF9ieV9uYW1lKG5hbWUpLFxuICAgICAgICAgICAgQXNzZXRzW2ZlZVN5bWJvbF1cbiAgICAgICAgXSkudGhlbigoW2FjYywgZmVlXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2MgPSBhY2M7XG4gICAgICAgICAgICB0aGlzLmZlZUFzc2V0ID0gZmVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYW5jZWxPcmRlcihpZCkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZFRyYW5zYWN0aW9uKFwibGltaXRfb3JkZXJfY2FuY2VsXCIsIHtcbiAgICAgICAgICAgIGZlZTogdGhpcy5mZWVBc3NldC50b1BhcmFtKCksXG4gICAgICAgICAgICBmZWVfcGF5aW5nX2FjY291bnQ6IHRoaXMuYWNjLmlkLFxuICAgICAgICAgICAgb3JkZXI6IGlkLFxuICAgICAgICAgICAgZXh0ZW5zaW9uczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgYnV5KFxuICAgICAgICBidXlTeW1ib2wsXG4gICAgICAgIGJhc2VTeW1ib2wsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGZpbGxfb3Jfa2lsbCA9IGZhbHNlLFxuICAgICAgICBleHBpcmUgPSBcIjIwOTktMDEtMDFUMDA6MDA6MDBcIlxuICAgICkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG5cbiAgICAgICAgbGV0IGJ1eUFzc2V0ID0gYXdhaXQgQXNzZXRzW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBidXlTeW1ib2wgPT09IFwib2JqZWN0XCIgPyBidXlTeW1ib2wuYXNzZXRfaWQgOiBidXlTeW1ib2xcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiYXNlQXNzZXQgPSBhd2FpdCBBc3NldHNbXG4gICAgICAgICAgICAgICAgdHlwZW9mIGJhc2VTeW1ib2wgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBiYXNlU3ltYm9sLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIDogYmFzZVN5bWJvbFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJ1eUFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYnV5U3ltYm9sID09PSBcIm9iamVjdFwiID8gYnV5U3ltYm9sLmFtb3VudCA6IGFtb3VudFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIGJ1eUFzc2V0LnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzZWxsQW1vdW50ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAodHlwZW9mIGJhc2VTeW1ib2wgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYmFzZVN5bWJvbC5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgIDogQmlnTnVtYmVyKGFtb3VudCkudGltZXMocHJpY2UpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogYmFzZUFzc2V0LnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgaWYgKGJ1eUFtb3VudCA9PSAwIHx8IHNlbGxBbW91bnQgPT0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFtb3VudCBlcXVhbCAwIVwiKTtcblxuICAgICAgICBsZXQgdHggPSBhd2FpdCB0aGlzLnNlbmRUcmFuc2FjdGlvbihcImxpbWl0X29yZGVyX2NyZWF0ZVwiLCB7XG4gICAgICAgICAgICBmZWU6IHRoaXMuZmVlQXNzZXQudG9QYXJhbSgpLFxuICAgICAgICAgICAgc2VsbGVyOiB0aGlzLmFjYy5pZCxcbiAgICAgICAgICAgIGFtb3VudF90b19zZWxsOiBiYXNlQXNzZXQudG9QYXJhbShzZWxsQW1vdW50KSxcbiAgICAgICAgICAgIG1pbl90b19yZWNlaXZlOiBidXlBc3NldC50b1BhcmFtKGJ1eUFtb3VudCksXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHBpcmUsXG4gICAgICAgICAgICBmaWxsX29yX2tpbGw6IGZpbGxfb3Jfa2lsbCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbXG4gICAgICAgICAgICB0eFswXS50cngub3BlcmF0aW9uX3Jlc3VsdHNbMF1bMV1cbiAgICAgICAgXSkpWzBdO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbGwoXG4gICAgICAgIHNlbGxTeW1ib2wsXG4gICAgICAgIGJhc2VTeW1ib2wsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGZpbGxfb3Jfa2lsbCA9IGZhbHNlLFxuICAgICAgICBleHBpcmUgPSBcIjIwOTktMDEtMDFUMDA6MDA6MDBcIlxuICAgICkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG5cbiAgICAgICAgbGV0IHNlbGxBc3NldCA9IGF3YWl0IEFzc2V0c1tcbiAgICAgICAgICAgICAgICB0eXBlb2Ygc2VsbFN5bWJvbCA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IHNlbGxTeW1ib2wuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxsU3ltYm9sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmFzZUFzc2V0ID0gYXdhaXQgQXNzZXRzW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYmFzZVN5bWJvbC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA6IGJhc2VTeW1ib2xcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzZWxsQW1vdW50ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICBCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBzZWxsU3ltYm9sID09PSBcIm9iamVjdFwiID8gc2VsbFN5bWJvbC5hbW91bnQgOiBhbW91bnRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiBzZWxsQXNzZXQucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGJ1eUFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhc2VTeW1ib2wuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICA6IEJpZ051bWJlcihhbW91bnQpLnRpbWVzKHByaWNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIGJhc2VBc3NldC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGlmIChidXlBbW91bnQgPT0gMCB8fCBzZWxsQW1vdW50ID09IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbW91bnQgZXF1YWwgMCFcIik7XG5cbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdGhpcy5zZW5kVHJhbnNhY3Rpb24oXCJsaW1pdF9vcmRlcl9jcmVhdGVcIiwge1xuICAgICAgICAgICAgZmVlOiB0aGlzLmZlZUFzc2V0LnRvUGFyYW0oKSxcbiAgICAgICAgICAgIHNlbGxlcjogdGhpcy5hY2MuaWQsXG4gICAgICAgICAgICBhbW91bnRfdG9fc2VsbDogc2VsbEFzc2V0LnRvUGFyYW0oc2VsbEFtb3VudCksXG4gICAgICAgICAgICBtaW5fdG9fcmVjZWl2ZTogYmFzZUFzc2V0LnRvUGFyYW0oYnV5QW1vdW50KSxcbiAgICAgICAgICAgIGV4cGlyYXRpb246IGV4cGlyZSxcbiAgICAgICAgICAgIGZpbGxfb3Jfa2lsbDogZmlsbF9vcl9raWxsLFxuICAgICAgICAgICAgZXh0ZW5zaW9uczogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFtcbiAgICAgICAgICAgIHR4WzBdLnRyeC5vcGVyYXRpb25fcmVzdWx0c1swXVsxXVxuICAgICAgICBdKSlbMF07XG4gICAgfVxuXG4gICAgYXN5bmMgYmFsYW5jZXMoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIEFwaXMuZGIuZ2V0X2FjY291bnRfYmFsYW5jZXModGhpcy5hY2MuaWQsIFsuLi5hcmd1bWVudHNdKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZW5kVHJhbnNhY3Rpb24odHlwZSwgb3BlcmF0aW9uKSB7XG4gICAgICAgIGxldCB0ciA9IG5ldyBUcmFuc2FjdGlvbkJ1aWxkZXIoKTtcbiAgICAgICAgdHIuYWRkX3R5cGVfb3BlcmF0aW9uKHR5cGUsIG9wZXJhdGlvbik7XG4gICAgICAgIGF3YWl0IHRyLnNldF9yZXF1aXJlZF9mZWVzKCk7XG5cbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcbiAgICAgICAgbGV0IHByaXZhdGVfa2V5ID0gV2FsbGV0RGIuZ2V0UHJpdmF0ZUtleShcbiAgICAgICAgICAgIHRoaXMuYWNjLmFjdGl2ZS5rZXlfYXV0aHNbMF1bMF1cbiAgICAgICAgKTtcbiAgICAgICAgdHIuYWRkX3NpZ25lcihcbiAgICAgICAgICAgIHByaXZhdGVfa2V5LFxuICAgICAgICAgICAgcHJpdmF0ZV9rZXkudG9QdWJsaWNLZXkoKS50b1B1YmxpY0tleVN0cmluZygpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRyLmJyb2FkY2FzdCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDtcbiIsImltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYjogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGNhbGwgQXBpcy5kYi4ke21ldGhvZH0oJHtbLi4uYXJndW1lbnRzXX0pYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaXNcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgaGlzdG9yeTogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5oaXN0b3J5X2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgbmV0d29yazogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5uZXR3b3JrX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgY3J5cHRvOiBuZXcgUHJveHkoQXBpcywge1xuICAgICAgICBnZXQoYXBpcywgbWV0aG9kKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaXNcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmNyeXB0b19hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIG9yZGVyczogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5vcmRlcnNfYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMobWV0aG9kLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSlcbn07XG4iLCJpbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuXG5jbGFzcyBBc3NldCB7XG4gICAgc3RhdGljIGdldChfLCBuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzW25hbWVdKSByZXR1cm4gdGhpc1tuYW1lXTtcblxuICAgICAgICByZXR1cm4gL14xXFwuM1xcLlxcZCskLy50ZXN0KG5hbWUpIHx8ICFpc05hTihuYW1lKVxuICAgICAgICAgICAgPyB0aGlzLmlkKG5hbWUpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0QXNzZXQobmFtZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEFzc2V0KF9zeW1ib2wpIHtcbiAgICAgICAgbGV0IHN5bWJvbCA9IF9zeW1ib2wudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubWFwIHx8IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLm1hcFtzeW1ib2xdKSByZXR1cm4gdGhpcy5tYXBbc3ltYm9sXTtcblxuICAgICAgICBsZXQgb2JqID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoc3ltYm9sLCAxKSlbMF07XG5cbiAgICAgICAgaWYgKCFvYmogfHwgb2JqLnN5bWJvbCAhPT0gc3ltYm9sKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBOb3QgZm91bmQgYXNzZXQgJHtzeW1ib2x9ISBCbG9ja2NoYWluIHJldHVybiAke1xuICAgICAgICAgICAgICAgICAgICBvYmogPyBvYmouc3ltYm9sIDogb2JqXG4gICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5tYXBbc3ltYm9sXSA9IG5ldyB0aGlzKG9iaik7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcFtzeW1ib2xdO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBpZChpZCkge1xuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubWFwIHx8IHt9O1xuICAgICAgICBsZXQgYXNzZXQgPSBPYmplY3Qua2V5cyh0aGlzLm1hcCkuZmluZChcbiAgICAgICAgICAgIHN5bWJvbCA9PiB0aGlzLm1hcFtzeW1ib2xdLmlkID09IGlkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGFzc2V0KSByZXR1cm4gdGhpcy5tYXBbYXNzZXRdO1xuXG4gICAgICAgIGFzc2V0ID0gKGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhbaWRdKSlbMF07XG5cbiAgICAgICAgaWYgKCFhc3NldCkgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgYXNzZXQgYnkgaWQgJHtpZH0hYCk7XG5cbiAgICAgICAgdGhpcy5tYXBbYXNzZXQuc3ltYm9sXSA9IG5ldyB0aGlzKGFzc2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwW2Fzc2V0LnN5bWJvbF07XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGZyb21QYXJhbShwYXJhbSkge1xuICAgICAgICByZXR1cm4ge2Ftb3VudDogcGFyYW0uYW1vdW50LCBhc3NldDogYXdhaXQgdGhpcy5pZChwYXJhbS5hc3NldF9pZCl9O1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5tYXAgfHwge307XG5cbiAgICAgICAgbGV0IGFzc2V0cyA9IGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWFwKS5tYXAoc3ltYm9sID0+IHRoaXMubWFwW3N5bWJvbF0uaWQpXG4gICAgICAgICk7XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IE9iamVjdC5hc3NpZ24odGhpcy5tYXBbYXNzZXQuc3ltYm9sXSwgYXNzZXQpKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihycGNPYmopIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBycGNPYmopO1xuICAgIH1cblxuICAgIHRvUGFyYW0obnVtYmVyID0gMCkge1xuICAgICAgICByZXR1cm4ge2Ftb3VudDogbnVtYmVyLCBhc3NldF9pZDogdGhpcy5pZH07XG4gICAgfVxuXG4gICAgZmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLm1hcmtldF9mZWVfcGVyY2VudCAvIDEwMCAvIDEwMDtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGUoKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgKGF3YWl0IEFwaXMuZGIuZ2V0X2Fzc2V0cyhbdGhpcy5pZF0pKVswXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJveHkoe30sIEFzc2V0KTtcbiIsImltcG9ydCBTcHJlYWRUcmFkZSBmcm9tIFwiLi9TcHJlYWRUcmFkZVwiO1xuaW1wb3J0IFRyYWlsaW5nU3RvcCBmcm9tIFwiLi9UcmFpbGluZ1N0b3BcIjtcbmltcG9ydCBQZXJjZW50VXAgZnJvbSBcIi4vUGVyY2VudFVwXCI7XG4vL2ltcG9ydCBSZWxhdGl2ZU9yZGVycyBmcm9tIFwiLi9SZWxhdGl2ZU9yZGVyc1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcInN0b3Jlcy9Cb3RzU3RvcmFnZVwiO1xuXG52YXIgYm90cyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RyYXRlZ2llczoge1xuICAgICAgICBTcHJlYWRUcmFkZSxcbiAgICAgICAgVHJhaWxpbmdTdG9wLFxuICAgICAgICAvL1JlbGF0aXZlT3JkZXJzLFxuICAgICAgICBQZXJjZW50VXBcbiAgICB9LFxuXG4gICAgY3JlYXRlKHN0cmF0ZWd5LCBhY2NvdW50LCBpbml0RGF0YSkge1xuICAgICAgICBsZXQgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske2luaXREYXRhLm5hbWV9XWApO1xuXG4gICAgICAgIGxldCBib3QgPSBuZXcgdGhpcy5zdHJhdGVnaWVzW3N0cmF0ZWd5XShhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSk7XG4gICAgICAgIGJvdHNbYF9fYm90c19fJHtzdG9yYWdlLm5hbWV9YF0gPSBib3Q7XG5cbiAgICAgICAgcmV0dXJuIGJvdDtcbiAgICB9LFxuXG4gICAgYXN5bmMgZGVsZXRlKGJvdCkge1xuICAgICAgICBsZXQgbmFtZSA9IGBfX2JvdHNfXyR7Ym90LnN0b3JhZ2UubmFtZX1gO1xuXG4gICAgICAgIGF3YWl0IGJvdHNbbmFtZV0uZGVsZXRlKCk7XG4gICAgICAgIGRlbGV0ZSBib3RzW25hbWVdO1xuICAgIH0sXG5cbiAgICBnZXRCb3RzKGFjY291bnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldEJvdHNcIiwgT2JqZWN0LmtleXMoYm90cykpXG5cbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuZ2V0QWNjb3VudEJvdChhY2NvdW50KVxuICAgICAgICAgICAgLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChib3RzW2tleV0pIHJldHVybiBib3RzW2tleV07XG5cbiAgICAgICAgICAgICAgICBsZXQgW3N0cmF0ZWd5LCBuYW1lXSA9IGtleVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXl9fYm90c19fKC4rKTo6KFxcdyspXFxbKFxcdyspXFxdLywgXCIkMiwkM1wiKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIsXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdHJhdGVneSB8fCAhbmFtZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske25hbWV9XWApO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJvdCA9IG5ldyB0aGlzLnN0cmF0ZWdpZXNbc3RyYXRlZ3ldKGFjY291bnQsIHN0b3JhZ2UpO1xuICAgICAgICAgICAgICAgIGJvdHNba2V5XSA9IGJvdDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm90O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZWwgPT4gZWwpO1xuICAgIH0sXG5cbiAgICBoYXNCb3QoYWNjb3VudCwgc3RyYXRlZ3ksIG5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBuYW1lIHN0YXRlZ3lcIiwgYWNjb3VudCwgc3RyYXRlZ3ksIG5hbWUpO1xuICAgICAgICByZXR1cm4gU3RvcmFnZS5oYXMoYCR7YWNjb3VudH06OiR7c3RyYXRlZ3l9WyR7bmFtZX1dYCk7XG4gICAgfVxufTtcbiIsImltcG9ydCBscyBmcm9tIFwiY29tbW9uL2xvY2FsU3RvcmFnZVwiO1xuXG52YXIgYm90cyA9IGxzKFwiX19ib3RzX19cIik7XG5cbmNsYXNzIFN0b3JhZ2Uge1xuICAgIHN0YXRpYyBnZXRBY2NvdW50Qm90KGFjY291bnQpIHtcbiAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChgXl9fYm90c19fJHthY2NvdW50fTo6YCk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihrZXkgPT4gcmUudGVzdChrZXkpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGJvdHMuaGFzKG5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgLy9ib3RzLmhhcyhuYW1lKVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvL2lmICghYm90cy5oYXMobmFtZSkpXG4gICAgICAgIC8vYm90cy5zZXQobmFtZSwge30pXG4gICAgfVxuXG4gICAgaW5pdChkYXRhKSB7XG4gICAgICAgIGlmICghYm90cy5oYXMobmFtZSkpIGJvdHMuc2V0KHRoaXMubmFtZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmVhZCgpIHtcbiAgICAgICAgcmV0dXJuIGJvdHMuZ2V0KHRoaXMubmFtZSk7XG4gICAgfVxuXG4gICAgd3JpdGUobmV3U3RhdGUpIHtcbiAgICAgICAgYm90cy5zZXQodGhpcy5uYW1lLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBib3RzLnJlbW92ZSh0aGlzLm5hbWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==