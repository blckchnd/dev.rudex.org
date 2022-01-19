"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[5],{

/***/ 2752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2753);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(578);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1804);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2062);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2061);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1813);








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
  handleDeleteBot = () => {
    lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](this.state.bots[this.state.selectBot]);
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

/***/ 2779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2702);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2753);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2757);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2756);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2780);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);








class Create extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    name: "",
    base: "GPH",
    quote: "RUDEX.USDT",
    amount: 100,
    percentAmount: false,
    balance: "",
    spread: 1,
    distance: "1.5",
    validate: ["name"]
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
      content: "bots.common.base"
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
      content: "bots.common.quote"
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

/***/ 2781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2757);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2773);
/* harmony import */ var _libs_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2780);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
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
      content: "bots.common.base"
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
      name: "percentAmount"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
      content: "bots.common.balance_percent"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "radio",
      value: false,
      name: "percentAmount",
      defaultChecked: true
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
      content: "bots.common.quote"
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

/***/ 2755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2702);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2753);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2756);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2757);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);







class Create extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
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
      style: {
        textAlign: "center"
      }
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        textAlign: "center"
      }
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

/***/ 2772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2757);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2773);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1810);
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
      style: {
        textAlign: "center"
      }
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        marginLeft: 50,
        marginTop: 30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      style: {
        textAlign: "center"
      }
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

/***/ 2776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2702);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2753);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2756);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2757);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);







class Create extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  state = {
    name: "",
    sellAsset: "RUDEX.BTC",
    getAsset: "RUDEX.USDT",
    amount: 0.01,
    minAmount: 1,
    stoploss: 100,
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
      className: "grid-block horizontal",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
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

/***/ 2777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _libs_AssetSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2757);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2773);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1810);
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

/***/ 2757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetLabel": () => (/* binding */ AssetLabel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2702);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2758);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2756);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2759);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2662);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2760);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(610);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(612);
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
      name: asset.bitasset_data_id ? `bit${name}` : name
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

/***/ 2663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1928);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1926);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1927);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(548);
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

/***/ 2780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
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

/***/ 2662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssetImageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2663);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class AssetImage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    replaceNoneToBts: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
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

    function getImageName(asset) {
      if (asset === null) return null;
      let symbol = asset.get("symbol");
      return symbol;
    }

    const imgName = getImageName(asset);
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

/***/ 2778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2779);
/* harmony import */ var components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2781);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2774);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(426);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2756);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2759);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(627);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(646);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(632);










class PercentUp {
  static create = components_Bots_PercentUp_Create__WEBPACK_IMPORTED_MODULE_0__["default"];
  state = components_Bots_PercentUp_State__WEBPACK_IMPORTED_MODULE_1__["default"];

  constructor(account, storage, initData) {
    this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_2__["default"](account);
    this.storage = storage;

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
    }

    this.name = storage.read().name;
    this.logger = console;
    this.queueEvents = Promise.resolve();
    this.run = false;
  }

  async start() {
    let state = this.storage.read();
    this.base = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__["default"][state.base];
    this.quote = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_5__["default"][state.quote];
    await actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
      setting: "walletLockTimeout",
      value: 0
    });
    bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.ChainStore.subscribe(this.queue);
    this.run = true;
  }

  async stop() {
    bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.ChainStore.unsubscribe(this.queue);
    this.run = false;
    await this.queueEvents;
  }

  delete() {
    this.storage.delete();
  }

  queue = () => {
    this.queueEvents = this.queueEvents.then(this.checkOrders).catch(this.logger.error.bind(this.logger));
  };
  checkOrders = async () => {
    let state = this.storage.read(),
        log = (...args) => this.logger.log(`[${state.name}]`, ...args),
        accountBalances = (await this.account.balances(this.base.id, this.quote.id)).reduce((acc, balance) => {
      this.base.id === balance.asset_id ? acc.base = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(balance.amount).div(10 ** this.base.precision).toNumber() : acc.quote = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(balance.amount).div(10 ** this.quote.precision).toNumber();
      return acc;
    }, {}),
        balance = state.balance === "-" ? 0 : state.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.balance),
        amount = state.percentAmount.toString() == "true" ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(balance).times(state.amount).div(100).toNumber() : state.amount,
        orders = (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.get_objects(state.orders.map(order => order.id).filter(id => id))).map(order => order && order.id).filter(id => id),
        processOrders = state.orders.filter(order => !orders.includes(order.id)),
        orderFee = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])((await lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.get_global_properties()).parameters.current_fees.parameters[1][1].fee).div(10 ** 5).toNumber();

    if (processOrders.length > 0) await this.base.update();
    let promises = processOrders.map(async order => {
      if (order.state === "buy") {
        order.id = null;

        if (!["", "-"].includes(state.balance)) {
          let amountToMarket = Math.floor((0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this.base.options.market_fee_percent).div(100 * 100).times(order.base).times(10 ** this.base.precision).toString());
          state.balance = Number(state.balance) + Number(order.base) - (amountToMarket !== 0 ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(amountToMarket).div(10 ** this.base.precision).toNumber() : this.base.options.market_fee_percent !== 0 ? 10 ** -this.base.precision : 0);
        }
      } else {
        let forQuoteFee = this.quote.symbol === "GPH" ? (isNaN(order.fee) ? orderFee : order.fee) + orderFee : 0,
            forBaseFee = this.base.symbol === "GPH" ? (isNaN(order.fee) ? orderFee : order.fee) + orderFee : 0,
            quoteAssetAmount = {
          asset_id: this.quote.id,
          amount: Math.min(Number(accountBalances.quote), Number(order.quote)) - forQuoteFee
        },
            percentOnMarket = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this.base.options.market_fee_percent).div(100 * 100),
            baseAssetAmount = {
          asset_id: this.base.id,
          amount: (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(order.base).times(1 + Number(state.spread) / 100 + percentOnMarket.toNumber()).plus(forBaseFee)
        };
        log(`buy ${this.base.symbol}: amount=${baseAssetAmount.amount.toNumber()} price=${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(quoteAssetAmount.amount).div(baseAssetAmount.amount).toNumber()} ${this.base.symbol}/${this.quote.symbol}`);
        let obj = await this.account.sell(quoteAssetAmount, baseAssetAmount);
        order.state = "buy";
        order.id = obj ? obj.id : "1.7.0";
        order.base = baseAssetAmount.amount.toNumber();
      }
    });
    await Promise.all(promises);
    let orderBook = await lib_bots_apis__WEBPACK_IMPORTED_MODULE_4__["default"].db.get_order_book(this.quote.symbol, this.base.symbol, 50);
    let quoteAmount = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(0),
        baseAmount = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(0);

    for (let i = 0; i < orderBook.asks.length; i++) {
      let ask = orderBook.asks[i];
      let quote = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ask.base);
      let base = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ask.quote);
      let diffBase = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(amount).minus(baseAmount);

      if (base.isEqualTo(diffBase)) {
        quoteAmount = quoteAmount.plus(quote);
        baseAmount = baseAmount.plus(base);
        break;
      } else if (base.isLessThan(diffBase)) {
        quoteAmount = quoteAmount.plus(quote);
        baseAmount = baseAmount.plus(base);
      } else if (base.isGreaterThan(diffBase)) {
        baseAmount = baseAmount.plus(diffBase);
        quoteAmount = quoteAmount.plus((0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(ask.price).times(diffBase));
        break;
      }
    }

    let price = quoteAmount.div(baseAmount),
        lowPrice = null;
    state.orders.forEach(order => {
      let orderPrice = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])(order.quote).div(order.base);
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PercentUp);

/***/ }),

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2755);
/* harmony import */ var components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2772);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2756);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2759);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(627);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2774);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(646);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(632);










class SpreadTrade {
  static create = components_Bots_SpreadTrade_Create__WEBPACK_IMPORTED_MODULE_0__["default"];
  state = components_Bots_SpreadTrade_State__WEBPACK_IMPORTED_MODULE_1__["default"];

  constructor(account, storage, initData) {
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
    }

    this.name = storage.read().name;
    this.logger = console;
    this.queueEvents = Promise.resolve();
    this.run = false;
  }

  async start() {
    let state = this.storage.read();
    this.base = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.base.asset];
    this.quote = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.quote.asset];

    if ([this.base.issuer, this.quote.issuer].includes("1.2.0")) {
      if ([this.base.id, this.quote.id].includes("1.3.0")) this.getFeed = this.getCoreFeed;else if (this.base.issuer == this.quote.issuer) this.getFeed = this.getSmartFeed;else this.getFeed = this.getUIAFeed;
    } else {
      this.getFeed = this.getUIAFeed;
    }

    await actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
      setting: "walletLockTimeout",
      value: 0
    });
    bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.subscribe(this.queue);
    this.run = true;
  }

  async stop() {
    bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.unsubscribe(this.queue);
    this.run = false;
    await this.queueEvents;
  }

  delete() {
    this.storage.delete();
  }

  queue = () => {
    this.queueEvents = this.queueEvents.then(this.checkOrders).catch(this.logger.error.bind(this.logger));
  };
  checkOrders = async () => {
    let state = this.storage.read(); //console.log("state", state);

    let ticker = await lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_ticker(this.base.symbol, this.quote.symbol);
    this.defaultPrice = state.defaultPrice;
    let feedPrice = state.fromMarket ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ticker.latest) : await this.getFeed(),
        buyPrice = feedPrice.times(1 - state.base.spread / 100).toNumber(),
        sellPrice = feedPrice.times(1 + state.quote.spread / 100).toNumber();
    feedPrice = feedPrice.toNumber();
    if (feedPrice == 0) return;
    let buyOrder = state.base.order.id ? (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_objects([state.base.order.id]))[0] : state.base.order.id,
        sellOrder = state.quote.order.id ? (await lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_objects([state.quote.order.id]))[0] : state.quote.order.id,
        accountBalances = (await this.account.balances(this.base.id, this.quote.id)).reduce((acc, balance) => {
      this.base.id === balance.asset_id ? acc.base = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(balance.amount).div(10 ** this.base.precision).toNumber() : acc.quote = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(balance.amount).div(10 ** this.quote.precision).toNumber();
      return acc;
    }, {}),
        baseBalance = state.base.balance === "-" ? 0 : state.base.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.base.balance),
        quoteBalance = state.quote.balance === "-" ? 0 : state.quote.balance === "" ? accountBalances.quote : Math.min(accountBalances.quote, state.quote.balance),
        baseAmount = state.base.percent.toString() == "true" ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(baseBalance).times(state.base.amount).div(100).toNumber() : state.base.amount,
        quoteAmount = state.quote.percent.toString() == "true" ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quoteBalance).times(state.quote.amount).div(100).toNumber() : state.quote.amount;
    console.log("prices", buyPrice, feedPrice, sellPrice);
    console.log("orders", buyOrder, sellOrder);

    if (buyOrder) {
      //check Price
      console.log(`check buyOrder: move=${Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2}, fill=${ticker.lowest_ask <= buyPrice}`);

      if (Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2 && ticker.lowest_ask > buyPrice) {
        // move order
        this.logger.info(`move buy order: ${buyPrice} ${this.quote.symbol}/${this.base.symbol}`);
        await this.account.cancelOrder(state.base.order.id); // check amount in order

        let orderAmount = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(buyOrder.for_sale).div(10 ** this.base.precision).toNumber();
        !["", "-"].includes(state.base.balance) && (state.base.balance = Number(state.base.balance) + orderAmount); // add to sell balance

        if (state.base.order.amount > orderAmount && !["", "-"].incudes(state.quote.balance)) state.quote.balance = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount - orderAmount).div(state.base.order.price).plus(state.quote.balance).toNumber();
        let amount = Math.min(baseBalance, baseAmount);

        try {
          let obj = await this.account.sell(this.base.symbol, this.quote.symbol, amount, (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());
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
        !["", "-"].includes(state.quote.balance) && (state.quote.balance = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount).div(state.base.order.price).plus(state.quote.balance).toNumber());
        state.base.order.id = undefined;
      }

      console.log(`create buyOrder: balance=${baseBalance >= baseAmount}, fill=${ticker.lowest_ask <= buyPrice}`);

      if (baseBalance >= baseAmount && ticker.lowest_ask > buyPrice) {
        //buy
        this.logger.info(`buy: ${buyPrice} ${this.quote.symbol}/${this.base.symbol}`);

        try {
          let obj = await this.account.sell(this.base.symbol, this.quote.symbol, baseAmount, (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());
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

        let orderAmount = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(sellOrder.for_sale).div(10 ** this.quote.precision).toNumber();
        !["", "-"].includes(state.quote.balance) && (state.quote.balance = Number(state.quote.balance) + orderAmount); // add to buy balance

        if (state.quote.order.amount > orderAmount && !["", "-"].includes(state.base.balance)) state.base.balance = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount - orderAmount).times(state.quote.order.price).plus(state.base.balance).toNumber();
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
        !["", "-"].includes(state.base.balance) && (state.base.balance = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount).times(state.quote.order.price).plus(state.base.balance).toNumber());
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
    return (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(10 ** this.base.precision).div((0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(10 ** this.quote.precision));
  }

  async getSmartFeed() {
    let bts = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"].gph;
    await this.base.update();
    let rate = this.base.options.core_exchange_rate;
    let [base, quote] = rate.base.asset_id == "1.3.0" ? [rate.base, rate.quote] : [rate.quote, rate.base];
    let basePrice = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(10 ** bts.precision).div((0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(10 ** this.base.precision));
    await this.quote.update();
    rate = this.quote.options.core_exchange_rate;

    if (rate.base.asset_id == "1.3.0") {
      base = rate.base;
      quote = rate.quote;
    } else {
      base = rate.quote;
      quote = rate.base;
    }

    let quotePrice = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(10 ** bts.precision).div((0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(10 ** this.quote.precision));
    return quotePrice.div(basePrice);
  }

  async getUIAFeed() {
    return this.defaultPrice ? (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this.defaultPrice) : await this.binancePrice(this.base.symbol, this.quote.symbol);
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
    return this.priceArray.length > 0 ? this.priceArray.reduce((a, b) => a.plus(b), (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0)).div(this.priceArray.length) : (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpreadTrade);

/***/ }),

/***/ 2775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2776);
/* harmony import */ var components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2777);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2756);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2759);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(627);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2774);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(646);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(632);










class TrailingStop {
  static create = components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__["default"];
  state = components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__["default"];

  constructor(account, storage, initData) {
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

  async start() {
    let state = this.storage.read();
    this.sellAsset = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.sellAsset];
    this.getAsset = await lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.getAsset];
    await actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();
    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
      setting: "walletLockTimeout",
      value: 0
    });
    bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.subscribe(this.queue);
    this.run = true;
  }

  async stop() {
    bitsharesjs__WEBPACK_IMPORTED_MODULE_2__.ChainStore.unsubscribe(this.queue);
    this.run = false;
    await this.queueEvents;
  }

  delete() {
    this.storage.delete();
  }

  queue = () => {
    this.queueEvents = this.queueEvents.then(this.checkOrders).catch(this.logger.error.bind(this.logger));
  };
  checkOrders = async () => {
    let state = this.storage.read();
    console.log("checkOrders");
    let ticker = await lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_ticker(this.getAsset.symbol, this.sellAsset.symbol),
        price = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ticker.latest),
        needStoploss = price.times(1 - state.percent / 100),
        createOrderPrice = price.times(1 - state.percent * 2 / 3 / 100),
        stoploss = (0,bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.minAmount).div(state.amount);
    console.log(price.toNumber(), needStoploss.toNumber(), createOrderPrice.toNumber(), stoploss.toNumber());

    if (needStoploss.gt(stoploss)) {
      console.log("up minAmount");
      state.minAmount = needStoploss.times(state.amount).toNumber();
      this.storage.write(state);
    } else if (createOrderPrice.lt(stoploss)) {
      console.log("create limit order");
      await this.account.sell(this.sellAsset.symbol, this.getAsset.symbol, state.amount, stoploss.toNumber());
      this.stop();
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrailingStop);

/***/ }),

/***/ 2774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2756);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2759);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(627);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(633);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(632);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(426);







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

  async buy(buySymbol, baseSymbol, amount, price, fill_or_kill = false, expire = "2025-02-02T02:02:02") {
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

  async sell(sellSymbol, baseSymbol, amount, price, fill_or_kill = false, expire = "2025-02-02T02:02:02") {
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

/***/ 2756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(510);

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

/***/ 2759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2756);


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

/***/ 2753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2754);
/* harmony import */ var _TrailingStop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2775);
/* harmony import */ var _PercentUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2778);
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2782);


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

  delete(bot) {
    let name = `__bots__${bot.storage.name}`;
    bots[name].delete();
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

/***/ 2782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(649);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90cy5jNmY0NTMwZDMzZTcyZTBmNzk1OS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFRQTs7QUFsTkE7O0FBcU5BO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBS0E7O0FBVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7O0FBWUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQS9DQTs7QUFrREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7O0FBN0xBOztBQWdNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBL0NBOztBQW1EQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUlBOztBQW5MQTs7QUFzTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TEE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7O0FBZUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBNURBOztBQStEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFlQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFtQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFSQTtBQWVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUtBOztBQWpXQTs7QUFvV0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzV0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUE5Q0E7O0FBa0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFrQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFjQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBSUE7O0FBdFVBOztBQXlVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7O0FBV0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUdBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7QUF2Q0E7O0FBMENBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWtCQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBY0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBaUJBOztBQXhPQTs7QUEyT0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFHQTs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFtQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBZUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFJQTs7QUF4TEE7O0FBMkxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQVFBOztBQXhDQTtBQTJDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBYUE7O0FBcERBOztBQXVEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7O0FBekJBOztBQTJCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUtBOztBQS9DQTs7QUFpREE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBOztBQVBBOztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuSUE7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBY0E7O0FBbEJBOztBQXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVEE7QUFZQTs7QUFoRUE7O0FBbUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFPQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEyQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQU9BO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFGQTtBQVZBO0FBQUE7QUFzQkE7QUFDQTtBQUZBO0FBV0E7QUFTQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFBQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFRQTtBQUVBO0FBU0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFRQTtBQUVBOztBQUVBO0FBRUE7QUFDQTtBQTlSQTs7QUFpU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQVVBO0FBQ0E7QUF2QkE7QUF5QkE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTs7QUFHQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBUUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQVVBO0FBT0E7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQThDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFPQTtBQUtBO0FBRUE7QUFLQTs7QUFHQTtBQUlBOztBQUtBO0FBV0E7O0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7O0FBRUE7O0FBSUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFPQTtBQUtBO0FBRUE7QUFLQTs7QUFHQTtBQUdBOztBQUtBO0FBV0E7O0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7O0FBRUE7O0FBSUE7QUFDQTtBQUNBOztBQUtBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUtBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7O0FBRUE7QUFFQTtBQUtBOztBQTdjQTs7QUFnZEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQTNGQTs7QUE4RkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFRQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBd0JBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFHQTs7QUFFQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUEwQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBS0E7QUFDQTs7QUFwSkE7O0FBdUpBOzs7Ozs7Ozs7Ozs7QUM5SkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQVJBO0FBOUNBOzs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUF4RUE7O0FBMkVBOzs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBakRBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQS9CQTs7QUFrQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL0JvdHMuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvUGVyY2VudFVwL0NyZWF0ZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQm90cy9QZXJjZW50VXAvU3RhdGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvQ3JlYXRlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL1RyYWlsaW5nU3RvcC9DcmVhdGUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Cb3RzL2xpYnMvQXNzZXRTZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0Fzc2V0V3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0SW1hZ2UuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvYm90cy9QZXJjZW50VXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2xpYi9ib3RzL1NwcmVhZFRyYWRlL2luZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9saWIvYm90cy9UcmFpbGluZ1N0b3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2xpYi9ib3RzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2xpYi9ib3RzL2FwaXMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2xpYi9ib3RzL2Fzc2V0cy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvbGliL2JvdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL3N0b3Jlcy9Cb3RzU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90TWFuYWdlciBmcm9tIFwibGliL2JvdHNcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWRpcmVjdCwgTGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xuXG5jbGFzcyBCb3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gQm90TWFuYWdlci5zdHJhdGVnaWVzO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0U3RyYXRlZ3k6IE9iamVjdC5rZXlzKHRoaXMuc3RyYXRlZ2llcylbMF0sXG4gICAgICAgICAgICBib3RzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMCxcbiAgICAgICAgICAgIGVuYWJsZUNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBib3RSdW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBib3RzID0gQm90TWFuYWdlci5nZXRCb3RzKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpO1xuICAgICAgICB0aGlzLl91cGQoYm90cyk7XG4gICAgfVxuXG4gICAgX3VwZChib3RzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYm90cyxcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMCxcbiAgICAgICAgICAgIGJvdFJ1bjogYm90c1swXSA/IGJvdHNbMF0ucnVuIDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlU3RyYXRlZ3kgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdFN0cmF0ZWd5OiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2hhbmdlQm90ID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0Qm90ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0Qm90LFxuICAgICAgICAgICAgYm90UnVuOiB0aGlzLnN0YXRlLmJvdHNbc2VsZWN0Qm90XS5ydW5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNyZWF0ZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGJvdHMgPSB0aGlzLnN0YXRlLmJvdHM7XG5cbiAgICAgICAgYm90cy5wdXNoKFxuICAgICAgICAgICAgQm90TWFuYWdlci5jcmVhdGUoXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybS5zdGF0ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtib3RzfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlRm9ybS52YWxpZGF0ZSlcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybS52YWxpZGF0ZShcIm5hbWVcIiwgdGhpcy5jcmVhdGVGb3JtLnN0YXRlLm5hbWUpO1xuICAgIH07XG5cbiAgICBoYW5kbGVFbmFibGVDcmVhdGUgPSBlbmFibGVDcmVhdGUgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVDcmVhdGUgIT0gZW5hYmxlQ3JlYXRlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlQ3JlYXRlfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVN0YXJ0Qm90ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgYm90ID0gdGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XTtcblxuICAgICAgICBhd2FpdCBib3Quc3RhcnQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym90UnVuOiBib3QucnVufSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVN0b3BCb3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBib3QgPSB0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdO1xuXG4gICAgICAgIGF3YWl0IGJvdC5zdG9wKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvdFJ1bjogYm90LnJ1bn0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVEZWxldGVCb3QgPSAoKSA9PiB7XG4gICAgICAgIEJvdE1hbmFnZXIuZGVsZXRlKHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYm90czogQm90TWFuYWdlci5nZXRCb3RzKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpLFxuICAgICAgICAgICAgc2VsZWN0Qm90OiAwXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzdGFydCByZW5kZXIgbWFpbiBwYWdlXCIsIHRoaXMucHJvcHMpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXtcIi9cIn0gLz47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgQ3JlYXRlRm9ybSA9IHRoaXMuc3RyYXRlZ2llc1t0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5XS5jcmVhdGU7XG5cbiAgICAgICAgbGV0IGJvdCA9IHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF0gfHwgbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMCwgb3ZlcmZsb3c6IFwidmlzaWJsZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC0xMiBtZWRpdW0tNiBsYXJnZS01IGxhcmdlLW9mZnNldC0xIGZ1bGwtd2lkdGgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVDcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAzMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9oZWxwL2JvdHMvaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMucXVlc3Rpb25fY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMnhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zZWxlY3Rfc3RyYXRlZ3lcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBidHMtc2VsZWN0IFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VTdHJhdGVneX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RyYXRlZ2llcykubWFwKG5hbWUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtuYW1lfSB2YWx1ZT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Zm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0gPSBmb3JtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVDcmVhdGU9e3RoaXMuaGFuZGxlRW5hYmxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5lbmFibGVDcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5jcmVhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIiBzdHlsZT17e21hcmdpblRvcDogMzB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5ib3Rfc3RhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBidHMtc2VsZWN0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0Qm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5ib3RzLm1hcCgoYm90LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Ym90Lm5hbWV9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Ym90Lm5hbWV9ICgke2JvdC5jb25zdHJ1Y3Rvci5uYW1lfSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxib3Quc3RhdGUga2V5PXtib3QubmFtZX0gYm90PXtib3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0Qm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmJvdFJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zdGFydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3RvcEJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuYm90UnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnN0b3BcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbGV0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ib3RSdW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uZGVsZXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnNlbGVjdF9ib3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBCb3RzLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vbGlicy9JbnB1dFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBDcmVhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBiYXNlOiBcIkdQSFwiLFxuICAgICAgICBxdW90ZTogXCJSVURFWC5VU0RUXCIsXG4gICAgICAgIGFtb3VudDogMTAwLFxuICAgICAgICBwZXJjZW50QW1vdW50OiBmYWxzZSxcbiAgICAgICAgYmFsYW5jZTogXCJcIixcbiAgICAgICAgc3ByZWFkOiAxLFxuICAgICAgICBkaXN0YW5jZTogXCIxLjVcIixcbiAgICAgICAgdmFsaWRhdGU6IFtcIm5hbWVcIl1cbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZSA9IGRlYm91bmNlKHRoaXMuYXNzZXRWYWxpZGF0ZSwgMjAwKTtcbiAgICB9XG5cbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoW1wiYmFzZVwiLCBcInF1b3RlXCJdLmluY2x1ZGVzKG5hbWUpKSB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZVwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsYW5jZVwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gXCItXCIgJiYgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNwcmVhZFwiOlxuICAgICAgICAgICAgY2FzZSBcImRpc3RhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7dmFsaWRhdGUsIG5hbWUsIGFtb3VudCwgYmFsYW5jZSwgc3ByZWFkLCBkaXN0YW5jZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwibmFtZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV9wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV92YWx1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJiYWxhbmNlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ucXVvdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5zcHJlYWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJzcHJlYWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnBlcmNlbnRfdXAuZGlzdGFuY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXN0YW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc3RhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwiZGlzdGFuY2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBc3NldExhYmVsfSBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vbGlicy9JbnB1dFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBTdGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe3ZhbGlkYXRlOiBbXX0sIHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmIChbXCJiYXNlXCIsIFwicXVvdGVcIl0uaW5jbHVkZXMobmFtZSkpIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIi1cIiAmJiBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3ByZWFkXCI6XG4gICAgICAgICAgICBjYXNlIFwiZGlzdGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh2YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIGhhbmRsZVVwZGF0ZUJvdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlTm93ID0gdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS53cml0ZSh7Li4uc3RhdGVOb3csIC4uLnRoaXMuc3RhdGV9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZhbGlkYXRlLCBhbW91bnQsIGJhbGFuY2UsIHNwcmVhZCwgZGlzdGFuY2V9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5iYXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5iYXNlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV9wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZV92YWx1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYWxhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17dmFsaWRhdGUuaW5jbHVkZXMoXCJiYWxhbmNlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ucXVvdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUucXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLnF1b3RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uc3ByZWFkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e3ZhbGlkYXRlLmluY2x1ZGVzKFwic3ByZWFkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5wZXJjZW50X3VwLmRpc3RhbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzdGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXN0YW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXt2YWxpZGF0ZS5pbmNsdWRlcyhcImRpc3RhbmNlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi51cGRhdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XHJcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XHJcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IEFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBDcmVhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBiYXNlQXNzZXQ6IFwiUlVERVguVVNEVFwiLFxyXG4gICAgICAgIHF1b3RlQXNzZXQ6IFwiUlVERVguQlRDXCIsXHJcbiAgICAgICAgYmFzZUFtb3VudDogMTAsXHJcbiAgICAgICAgcXVvdGVBbW91bnQ6IDAuMDEsXHJcbiAgICAgICAgYmFzZVNwcmVhZDogMTAsXHJcbiAgICAgICAgcXVvdGVTcHJlYWQ6IDEwLFxyXG4gICAgICAgIGJhc2VCYWxhbmNlOiAxMDAsXHJcbiAgICAgICAgcXVvdGVCYWxhbmNlOiAwLjEsXHJcbiAgICAgICAgcGVyY2VudEJhc2VBbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgIHBlcmNlbnRRdW90ZUFtb3VudDogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRhdGU6IFtcIm5hbWVcIl1cclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlID0gZGVib3VuY2UodGhpcy5hc3NldFZhbGlkYXRlLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzc2V0VmFsaWRhdGUgPSBhc3luYyBuYW1lID0+IHtcclxuICAgICAgICBsZXQgYXNzZXQgPSB0aGlzLnN0YXRlW25hbWVdO1xyXG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcclxuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xyXG5cclxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZSA9IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgdmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gZXZlbnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICA6IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChbXCJiYXNlQXNzZXRcIiwgXCJxdW90ZUFzc2V0XCJdLmluY2x1ZGVzKG5hbWUpKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhbGlkYXRlID0gKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIS9eXFx3KyQvLnRlc3QodmFsdWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VBc3NldFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBc3NldFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQmFsYW5jZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVCYWxhbmNlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwiLVwiICYmIGlzTmFOKCt2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQW1vdW50XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUFtb3VudFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYmFzZVNwcmVhZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVTcHJlYWRcIjpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIiB8fCBpc05hTigrdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVmYXVsdFByaWNlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKCt2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsaWRhdGUpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VCYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VCYWxhbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3ZhbHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlU3ByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlU3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiYmFzZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5xdW90ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hc3NldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVBc3NldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYmFsYW5jZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJxdW90ZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24uYW1vdW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRRdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV92YWx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlU3ByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlU3ByZWFkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmRlZmF1bHRfcHJpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVmYXVsdFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZWZhdWx0UHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImRlZmF1bHRQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJkZWZhdWx0UHJpY2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZyb21NYXJrZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mcm9tTWFya2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5nZXRfcHJpY2VfZnJvbV9tYXJrZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QXNzZXRMYWJlbH0gZnJvbSBcIi4uL2xpYnMvQXNzZXRTZWxlY3RvclwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgU3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt2YWxpZGF0ZTogW119LCB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgYmFzZSxcclxuICAgICAgICAgICAgcXVvdGU7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2cobmFtZSwgdmFsdWUsIHR5cGVvZiB2YWx1ZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFtb3VudFwiOlxyXG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuc3RhdGUuYmFzZTtcclxuICAgICAgICAgICAgICAgIGJhc2UuYW1vdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBlcmNlbnRCYXNlQW1vdW50XCI6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5wZXJjZW50ID0gdmFsdWUgPT0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VCYWxhbmNlXCI6XHJcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5iYWxhbmNlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJhc2VTcHJlYWRcIjpcclxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnN0YXRlLmJhc2U7XHJcbiAgICAgICAgICAgICAgICBiYXNlLnNwcmVhZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YmFzZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUFtb3VudFwiOlxyXG4gICAgICAgICAgICAgICAgcXVvdGUgPSB0aGlzLnN0YXRlLnF1b3RlO1xyXG4gICAgICAgICAgICAgICAgcXVvdGUuYW1vdW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXJjZW50UXVvdGVBbW91bnRcIjpcclxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcclxuICAgICAgICAgICAgICAgIHF1b3RlLnBlcmNlbnQgPSB2YWx1ZSA9PSBcInRydWVcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1b3RlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInF1b3RlQmFsYW5jZVwiOlxyXG4gICAgICAgICAgICAgICAgcXVvdGUgPSB0aGlzLnN0YXRlLnF1b3RlO1xyXG4gICAgICAgICAgICAgICAgcXVvdGUuYmFsYW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicXVvdGVTcHJlYWRcIjpcclxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcclxuICAgICAgICAgICAgICAgIHF1b3RlLnNwcmVhZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVmYXVsdFByaWNlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkZWZhdWx0UHJpY2U6IHZhbHVlfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZyb21NYXJrZXRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zyb21NYXJrZXQ6IGV2ZW50LnRhcmdldC5jaGVja2VkfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlVXBkYXRlQm90ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZU5vdyA9IHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYmFzZS5vcmRlciA9IHN0YXRlTm93LmJhc2Uub3JkZXI7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5xdW90ZS5vcmRlciA9IHN0YXRlTm93LnF1b3RlLm9yZGVyO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLndyaXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5iYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5iYXNlLmFzc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldExhYmVsIG5hbWU9e3RoaXMuc3RhdGUuYmFzZS5hc3NldH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlLmJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudEJhc2VBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuYmFzZS5wZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV9wZXJjZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRCYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXshdGhpcy5zdGF0ZS5iYXNlLnBlcmNlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3ZhbHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLnNwcmVhZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VTcHJlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5zcHJlYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlU3ByZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnF1b3RlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmFzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFzc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUucXVvdGUuYXNzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5xdW90ZS5hc3NldH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLmJhbGFuY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUJhbGFuY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGUuYmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQmFsYW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLmNvbW1vbi5hbW91bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnF1b3RlLnBlcmNlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5iYWxhbmNlX3BlcmNlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFF1b3RlQW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXshdGhpcy5zdGF0ZS5xdW90ZS5wZXJjZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuYmFsYW5jZV92YWx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnNwcmVhZF90cmFkZS5zcHJlYWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5zcHJlYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZVNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuc3ByZWFkX3RyYWRlLmRlZmF1bHRfcHJpY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWZhdWx0UHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJkZWZhdWx0UHJpY2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZyb21NYXJrZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mcm9tTWFya2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5zcHJlYWRfdHJhZGUuZ2V0X3ByaWNlX2Zyb21fbWFya2V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTAsIG1hcmdpbkJvdHRvbTogMzB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnVwZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9saWJzL0Fzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgQ3JlYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgc2VsbEFzc2V0OiBcIlJVREVYLkJUQ1wiLFxuICAgICAgICBnZXRBc3NldDogXCJSVURFWC5VU0RUXCIsXG4gICAgICAgIGFtb3VudDogMC4wMSxcbiAgICAgICAgbWluQW1vdW50OiAxLFxuICAgICAgICBzdG9wbG9zczogMTAwLFxuICAgICAgICBwZXJjZW50OiAxMCxcbiAgICAgICAgdmFsaWRhdGU6IFtcIm5hbWVcIl1cbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZSA9IGRlYm91bmNlKHRoaXMuYXNzZXRWYWxpZGF0ZSwgMjAwKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoW1wic2VsbEFzc2V0XCIsIFwiZ2V0QXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwibWluQW1vdW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWUgLyB0aGlzLnN0YXRlLmFtb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJzdG9wbG9zc1wiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB0aGlzLnN0YXRlLmFtb3VudCAqIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdG9wbG9zczogdmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiYW1vdW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHZhbHVlICogdGhpcy5zdGF0ZS5zdG9wbG9zc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzc2V0VmFsaWRhdGUgPSBhc3luYyBuYW1lID0+IHtcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5zdGF0ZVtuYW1lXTtcbiAgICAgICAgbGV0IGJsb2NrY2hhaW5Bc3NldHMgPSAoYXdhaXQgQXBpcy5kYi5saXN0X2Fzc2V0cyhhc3NldCwgMSkpWzBdO1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIGlmIChhc3NldCAhPT0gYmxvY2tjaGFpbkFzc2V0cy5zeW1ib2wpIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGUgPSB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodGhpcy5zdGF0ZS52YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIHZhbGlkYXRlID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZGF0ZSA9IHRoaXMuc3RhdGUudmFsaWRhdGU7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIS9eXFx3KyQvLnRlc3QodmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIEJvdE1hbmFnZXIuaGFzQm90KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNlbGxBc3NldFwiOlxuICAgICAgICAgICAgY2FzZSBcImdldEFzc2V0XCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYW1vdW50XCI6XG4gICAgICAgICAgICBjYXNlIFwibWluQW1vdW50XCI6XG4gICAgICAgICAgICBjYXNlIFwicGVjZW50XCI6XG4gICAgICAgICAgICBjYXNlIFwic3RvcGxvc3NcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWxpZGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy5jb21tb24ubmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBob3Jpem9udGFsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnNlbGxfYXNzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGxBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsbEFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5hbW91bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwiYW1vdW50XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5nZXRfYXNzZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nZXRBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AubWluX2Ftb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3Auc3RvcGxvc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdG9wbG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0b3Bsb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnN0b3Bsb3NzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcInN0b3Bsb3NzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC50cmFpbGluZ19wZXJjZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGVyY2VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJwZXJjZW50XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtBc3NldExhYmVsfSBmcm9tIFwiLi4vbGlicy9Bc3NldFNlbGVjdG9yXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgU3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICB2YWxpZGF0ZTogW11cbiAgICB9O1xuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCk7XG4gICAgICAgIHN0YXRlLnN0b3Bsb3NzID0gc3RhdGUubWluQW1vdW50IC8gc3RhdGUuYW1vdW50O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmIChbXCJzZWxsQXNzZXRcIiwgXCJnZXRBc3NldFwiXS5pbmNsdWRlcyhuYW1lKSlcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gXCJtaW5BbW91bnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHN0b3Bsb3NzOiB2YWx1ZSAvIHRoaXMuc3RhdGUuYW1vdW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInN0b3Bsb3NzXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IHRoaXMuc3RhdGUuYW1vdW50ICogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHN0b3Bsb3NzOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJhbW91bnRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdmFsdWUgKiB0aGlzLnN0YXRlLnN0b3Bsb3NzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XG4gICAgfTtcblxuICAgIHZhbGlkYXRlID0gKG5hbWUsIHZhbHVlKSA9PiB7fTtcblxuICAgIGhhbmRsZVVwZGF0ZUJvdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS53cml0ZSh0aGlzLnN0YXRlKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogNTAsIG1hcmdpblRvcDogNTB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5zZWxsX2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsbEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5zZWxsQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRMYWJlbCBuYW1lPXt0aGlzLnN0YXRlLnNlbGxBc3NldH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLmFtb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3RzLnRyYWlsaW5nX3N0b3AuZ2V0X2Fzc2V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2V0QXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmdldEFzc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogPEFzc2V0TGFiZWwgbmFtZT17dGhpcy5zdGF0ZS5nZXRBc3NldH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMudHJhaWxpbmdfc3RvcC5taW5fYW1vdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW5BbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnN0b3Bsb3NzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9wbG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdG9wbG9zc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwic3RvcGxvc3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm90cy50cmFpbGluZ19zdG9wLnRyYWlsaW5nX3BlcmNlbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJwZXJjZW50XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQm90fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImJvdHMuY29tbW9uLnVwZGF0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwicmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzc1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uLy4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IEFzeW5jU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3QvbGliL0FzeW5jXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQge2dldE15TWFya2V0c1F1b3RlcywgZ2V0QXNzZXRIaWRlTmFtZXNwYWNlc30gZnJvbSBcImJyYW5kaW5nXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5cbmV4cG9ydCBjbGFzcyBBc3NldExhYmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogbnVsbFxuICAgIH07XG5cbiAgICBoaWRlUHJlZml4ID0gbmFtZSA9PiB7XG4gICAgICAgIGxldCBhcnIgPSBuYW1lLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgaWYgKGdldEFzc2V0SGlkZU5hbWVzcGFjZXMoKS5pbmNsdWRlcyhgJHthcnJbMF19LmApKSBhcnIuc2hpZnQoKTtcblxuICAgICAgICByZXR1cm4gYXJyLmpvaW4oXCIuXCIpO1xuICAgIH07XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldEFzc2V0TmFtZSh0aGlzLnByb3BzLm5hbWUpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLm5hbWUgIT09IHRoaXMucHJvcHMubmFtZSlcbiAgICAgICAgICAgIHRoaXMuc2V0QXNzZXROYW1lKG5leHRQcm9wcy5uYW1lKTtcbiAgICB9XG5cbiAgICBzZXRBc3NldE5hbWUgPSBhc3luYyBuYW1lID0+IHtcbiAgICAgICAgbGV0IGFzc2V0ID0gYXdhaXQgQXNzZXRzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmFtZTogYXNzZXQuYml0YXNzZXRfZGF0YV9pZCA/IGBiaXQke25hbWV9YCA6IG5hbWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RoaXMuaGlkZVByZWZpeCh0aGlzLnN0YXRlLm5hbWUgfHwgdGhpcy5wcm9wcy5uYW1lKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxudmFyIG9wdGlvbnMgPSBnZXRNeU1hcmtldHNRdW90ZXMoKS5tYXAobmFtZSA9PiAoe1xuICAgIHZhbHVlOiBuYW1lLFxuICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXtuYW1lfSAvPlxufSkpO1xuXG5jbGFzcyBBc3NldFNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlT3B0aW9ucyA9IGRlYm91bmNlKHRoaXMucHJvbWlzZU9wdGlvbnMsIDIwMCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSBvcHRpb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2hhbmdlXCIsIG9wdGlvbik7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24gPyBvcHRpb24udmFsdWUgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwcm9taXNlT3B0aW9ucyA9IGFzeW5jIGlucHV0VmFsdWUgPT4ge1xuICAgICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBvcHRpb25zLmZpbHRlcihpID0+IGkudmFsdWUgPT0gaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDAgJiYgaW5wdXRWYWx1ZSkge1xuICAgICAgICAgICAgbGV0IGFzc2V0ID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoaW5wdXRWYWx1ZSwgMSkpWzBdO1xuXG4gICAgICAgICAgICBpZiAoYXNzZXQgJiYgIW9wdGlvbnMuZmluZChpID0+IGkudmFsdWUgPT0gYXNzZXQuc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhc3NldC5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiA8QXNzZXRMYWJlbCBuYW1lPXthc3NldC5zeW1ib2x9IC8+XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge29wdGlvbnN9O1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSB0aGlzLnByb3BzLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fT5cbiAgICAgICAgICAgICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e3RoaXMucHJvbWlzZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFByb21wdFRleHQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90cy5hc3NldF9zZWxlY3Rvci53YWl0XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90cy5hc3NldF9zZWxlY3Rvci5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRTZWxlY3RvcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0RGlzcGxheU5hbWV9IGZyb20gXCJjb21tb24vcmVhY3RVdGlsc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCB7TGlzdH0gZnJvbSBcImltbXV0YWJsZVwiO1xuXG5jbGFzcyBEeW5hbWljT2JqZWN0UmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGRvczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdHNMaXN0XG4gICAgfTtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkb3M6IExpc3QoKVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmdldER5bmFtaWNPYmplY3QgPSB0aGlzLmdldER5bmFtaWNPYmplY3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXREeW5hbWljT2JqZWN0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRvcy5maW5kKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEgJiYgYS5nZXQoXCJpZFwiKSA9PT0gaWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7XG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgICAgICAgZ2V0RHluYW1pY09iamVjdDogdGhpcy5nZXREeW5hbWljT2JqZWN0XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkR5bmFtaWNPYmplY3RSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoRHluYW1pY09iamVjdFJlc29sdmVyKTtcblxuLyoqXG4gKiBIT0MgdGhhdCByZXNvbHZlcyBlaXRoZXIgYSBudW1iZXIgb2YgYXNzZXRzIGRpcmVjdGx5IHdpdGggQ2hhaW5Bc3NldCxcbiAqIG9yIGEgbGlzdCBvZiBhc3NldHMgd2l0aCBDaGFpbkFzc2V0c1xuICpcbiAqICBPcHRpb25zXG4gKiAgLSdwcm9wTmFtZXMnIGFuIGFycmF5IG9mIHByb3AgbmFtZXMgdG8gYmUgcmVzb2x2ZWQgYXMgYXNzZXRzLiAoZGVmYXVsdHMgdG8gXCJhc3NldFwiIG9yIFwiYXNzZXRzXCIpXG4gKiAgLSdkZWZhdWx0UHJvcHMnIGRlZmF1bHQgdmFsdWVzIHRvIHVzZSBmb3Igb2JqZWN0cyAob3B0aW9uYWwpXG4gKiAgLSdhc0xpc3QnIGRlZmluZXMgd2hldGhlciB0byB1c2UgQ2hhaW5Bc3NldHNMaXN0IG9yIG5vdCAodXNlZnVsIGZvciByZXNvbHZpbmcgbGFyZ2UgcXVhbnRpdGllcyBvZiBhc3NldHMpXG4gKiAgLSd3aXRoRHluYW1pYycgZGVmaW5lcyB3aGV0aGVyIHRvIGFsc28gcmVzb2x2ZSBkeW5hbWljIG9iamVjdHMgb3Igbm90XG4gKi9cblxuZnVuY3Rpb24gQXNzZXRXcmFwcGVyKENvbXBvbmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy5wcm9wTmFtZXMgPSBvcHRpb25zLnByb3BOYW1lcyB8fCBbXG4gICAgICAgICEhb3B0aW9ucy5hc0xpc3QgPyBcImFzc2V0c1wiIDogXCJhc3NldFwiXG4gICAgXTtcbiAgICBjb25zdCBmaW5hbFByb3BUeXBlcyA9IG9wdGlvbnMucHJvcE5hbWVzLnJlZHVjZSgocmVzLCB0eXBlKSA9PiB7XG4gICAgICAgIHJlc1t0eXBlXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICA/IENoYWluVHlwZXMuQ2hhaW5Bc3NldHNMaXN0XG4gICAgICAgICAgICA6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0sIHt9KTtcblxuICAgIGxldCBkZWZhdWx0UHJvcHMgPSBPYmplY3Qua2V5cyhmaW5hbFByb3BUeXBlcykucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzICYmIG9wdGlvbnMuZGVmYXVsdFByb3BzW2tleV07XG4gICAgICAgIHJlc1trZXldID0gISFvcHRpb25zLmFzTGlzdCA/IExpc3QoY3VycmVudCB8fCBbXSkgOiBjdXJyZW50IHx8IFwiMS4zLjBcIjtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBpZiAob3B0aW9ucy5kZWZhdWx0UHJvcHMgJiYgISFvcHRpb25zLmRlZmF1bHRQcm9wcy50ZW1wQ29tcG9uZW50KSB7XG4gICAgICAgIGRlZmF1bHRQcm9wcy50ZW1wQ29tcG9uZW50ID0gb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudDtcbiAgICB9XG5cbiAgICBjbGFzcyBBc3NldHNSZXNvbHZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBwcm9wVHlwZXMgPSBmaW5hbFByb3BUeXBlcztcbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBsZXQgZmluYWxBc3NldHMgPSB7fTtcbiAgICAgICAgICAgIGxldCBwYXNzVHJvdWdoUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGxldCBkb3MgPSBMaXN0KCk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXSAmJlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb3BOYW1lcy5pbmRleE9mKHByb3ApICE9PSAtMVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFzTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvcyA9IGRvcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0uZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhYSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvcyA9IGRvcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsQXNzZXRzW3Byb3BdID0gb3B0aW9ucy5hc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wc1twcm9wXS5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc1Ryb3VnaFByb3BzW3Byb3BdID0gdGhpcy5wcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHdyYXBwZWQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSxcbiAgICAgICAgICAgICAgICB7Li4ucGFzc1Ryb3VnaFByb3BzLCAuLi5maW5hbEFzc2V0c31cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLndpdGhEeW5hbWljKVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxEeW5hbWljT2JqZWN0UmVzb2x2ZXIgZG9zPXtkb3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3dyYXBwZWR9XG4gICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY09iamVjdFJlc29sdmVyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlbHNlIHJldHVybiB3cmFwcGVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFzc2V0c1Jlc29sdmVyID0gQmluZFRvQ2hhaW5TdGF0ZShBc3NldHNSZXNvbHZlcik7XG5cbiAgICBjbGFzcyBXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QXNzZXRzUmVzb2x2ZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHJlZj1cImJvdW5kX2NvbXBvbmVudFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Bc3NldHNSZXNvbHZlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgV3JhcHBlci5kaXNwbGF5TmFtZSA9IGBXcmFwcGVyKCR7Z2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KX0pYDtcbiAgICByZXR1cm4gV3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge25hbWUsIHZhbHVlLCBvbkNoYW5nZSwgYm9yZGVyLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICBpZD17bmFtZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBib3JkZXIgPyBcIjFweCBzb2xpZCByZWRcIiA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9Cb3RzL2xpYnMvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIEFzc2V0SW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiB0cnVlLFxuICAgICAgICBtYXhXaWR0aDogMjBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWdFcnJvcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0ICE9PSBucC5hc3NldCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhXaWR0aCAhPT0gbnAubWF4V2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2hpdGVMaXN0ICE9PSBucC53aGl0ZUxpc3QgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1nRXJyb3IgIT09IG5zLmltZ0Vycm9yXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uRXJyb3IoaW1nTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VOb25lVG9CdHMpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0uc3JjID1cbiAgICAgICAgICAgICAgICAgICAgXCJhc3NldC1zeW1ib2xzL3Vua25vd24ucG5nXCI7XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKGFzc2V0KSB7XG4gICAgICAgICAgICBpZiAoYXNzZXQgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgbGV0IHN5bWJvbCA9IGFzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWdOYW1lID0gZ2V0SW1hZ2VOYW1lKGFzc2V0KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTNweFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0SW1hZ2UgPSBBc3NldFdyYXBwZXIoQXNzZXRJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0SW1hZ2VXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QXNzZXRJbWFnZSB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3RoaXMucHJvcHMubmFtZX0gLz47XG4gICAgfVxufVxuIiwiaW1wb3J0IENyZWF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1BlcmNlbnRVcC9DcmVhdGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1BlcmNlbnRVcC9TdGF0ZVwiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcImxpYi9ib3RzL2FjY291bnRcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgV2FsbGV0VW5sb2NrQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRVbmxvY2tBY3Rpb25zXCI7XG5cbmNsYXNzIFBlcmNlbnRVcCB7XG4gICAgc3RhdGljIGNyZWF0ZSA9IENyZWF0ZTtcbiAgICBzdGF0ZSA9IFN0YXRlO1xuXG4gICAgY29uc3RydWN0b3IoYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbmV3IEFjY291bnQoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG5cbiAgICAgICAgaWYgKGluaXREYXRhKSB7XG4gICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgYmFzZSxcbiAgICAgICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICAgICAgcGVyY2VudEFtb3VudCxcbiAgICAgICAgICAgICAgICBiYWxhbmNlLFxuICAgICAgICAgICAgICAgIHNwcmVhZCxcbiAgICAgICAgICAgICAgICBkaXN0YW5jZVxuICAgICAgICAgICAgfSA9IGluaXREYXRhO1xuICAgICAgICAgICAgc3RvcmFnZS5pbml0KHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGJhc2UsXG4gICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgIHBlcmNlbnRBbW91bnQsXG4gICAgICAgICAgICAgICAgYmFsYW5jZSxcbiAgICAgICAgICAgICAgICBzcHJlYWQsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5hbWUgPSBzdG9yYWdlLnJlYWQoKS5uYW1lO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuXG4gICAgICAgIHRoaXMuYmFzZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5iYXNlXTtcbiAgICAgICAgdGhpcy5xdW90ZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5xdW90ZV07XG5cbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgc2V0dGluZzogXCJ3YWxsZXRMb2NrVGltZW91dFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcbiAgICB9XG4gICAgYXN5bmMgc3RvcCgpIHtcbiAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWV1ZUV2ZW50cztcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoKTtcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcbiAgICAgICAgICAgIC50aGVuKHRoaXMuY2hlY2tPcmRlcnMpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3IuYmluZCh0aGlzLmxvZ2dlcikpO1xuICAgIH07XG5cbiAgICBjaGVja09yZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKSxcbiAgICAgICAgICAgIGxvZyA9ICguLi5hcmdzKSA9PiB0aGlzLmxvZ2dlci5sb2coYFske3N0YXRlLm5hbWV9XWAsIC4uLmFyZ3MpLFxuICAgICAgICAgICAgYWNjb3VudEJhbGFuY2VzID0gKGF3YWl0IHRoaXMuYWNjb3VudC5iYWxhbmNlcyhcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuaWQsXG4gICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5pZFxuICAgICAgICAgICAgKSkucmVkdWNlKChhY2MsIGJhbGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuaWQgPT09IGJhbGFuY2UuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgPyAoYWNjLmJhc2UgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpXG4gICAgICAgICAgICAgICAgICAgIDogKGFjYy5xdW90ZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBiYWxhbmNlID1cbiAgICAgICAgICAgICAgICBzdGF0ZS5iYWxhbmNlID09PSBcIi1cIlxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5iYWxhbmNlID09PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRCYWxhbmNlcy5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGgubWluKGFjY291bnRCYWxhbmNlcy5iYXNlLCBzdGF0ZS5iYWxhbmNlKSxcbiAgICAgICAgICAgIGFtb3VudCA9XG4gICAgICAgICAgICAgICAgc3RhdGUucGVyY2VudEFtb3VudC50b1N0cmluZygpID09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmFtb3VudCxcbiAgICAgICAgICAgIG9yZGVycyA9IChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFxuICAgICAgICAgICAgICAgIHN0YXRlLm9yZGVycy5tYXAob3JkZXIgPT4gb3JkZXIuaWQpLmZpbHRlcihpZCA9PiBpZClcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgLm1hcChvcmRlciA9PiBvcmRlciAmJiBvcmRlci5pZClcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGlkID0+IGlkKSxcbiAgICAgICAgICAgIHByb2Nlc3NPcmRlcnMgPSBzdGF0ZS5vcmRlcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIG9yZGVyID0+ICFvcmRlcnMuaW5jbHVkZXMob3JkZXIuaWQpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgb3JkZXJGZWUgPSBCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgKGF3YWl0IEFwaXMuZGIuZ2V0X2dsb2JhbF9wcm9wZXJ0aWVzKCkpLnBhcmFtZXRlcnMuY3VycmVudF9mZWVzXG4gICAgICAgICAgICAgICAgICAgIC5wYXJhbWV0ZXJzWzFdWzFdLmZlZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogNSlcbiAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcblxuICAgICAgICBpZiAocHJvY2Vzc09yZGVycy5sZW5ndGggPiAwKSBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XG5cbiAgICAgICAgbGV0IHByb21pc2VzID0gcHJvY2Vzc09yZGVycy5tYXAoYXN5bmMgb3JkZXIgPT4ge1xuICAgICAgICAgICAgaWYgKG9yZGVyLnN0YXRlID09PSBcImJ1eVwiKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIuaWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYWxhbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYW1vdW50VG9NYXJrZXQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKHRoaXMuYmFzZS5vcHRpb25zLm1hcmtldF9mZWVfcGVyY2VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwMCAqIDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMob3JkZXIuYmFzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYWxhbmNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5iYWxhbmNlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIob3JkZXIuYmFzZSkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgKGFtb3VudFRvTWFya2V0ICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYW1vdW50VG9NYXJrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmJhc2Uub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgIT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAxMCAqKiAtdGhpcy5iYXNlLnByZWNpc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvclF1b3RlRmVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sID09PSBcIkdQSFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoaXNOYU4ob3JkZXIuZmVlKSA/IG9yZGVyRmVlIDogb3JkZXIuZmVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlckZlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgZm9yQmFzZUZlZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sID09PSBcIkdQSFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoaXNOYU4ob3JkZXIuZmVlKSA/IG9yZGVyRmVlIDogb3JkZXIuZmVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlckZlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldEFtb3VudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnF1b3RlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoYWNjb3VudEJhbGFuY2VzLnF1b3RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKG9yZGVyLnF1b3RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgLSBmb3JRdW90ZUZlZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50T25NYXJrZXQgPSBCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnRcbiAgICAgICAgICAgICAgICAgICAgKS5kaXYoMTAwICogMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgYmFzZUFzc2V0QW1vdW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMuYmFzZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogQmlnTnVtYmVyKG9yZGVyLmJhc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5zcHJlYWQpIC8gMTAwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRPbk1hcmtldC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKGZvckJhc2VGZWUpXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsb2coXG4gICAgICAgICAgICAgICAgICAgIGBidXkgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgfTogYW1vdW50PSR7YmFzZUFzc2V0QW1vdW50LmFtb3VudC50b051bWJlcigpfSBwcmljZT0ke0JpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRBbW91bnQuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYmFzZUFzc2V0QW1vdW50LmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpfSAke3RoaXMuYmFzZS5zeW1ib2x9LyR7dGhpcy5xdW90ZS5zeW1ib2x9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0QW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBiYXNlQXNzZXRBbW91bnRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgb3JkZXIuc3RhdGUgPSBcImJ1eVwiO1xuICAgICAgICAgICAgICAgIG9yZGVyLmlkID0gb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiO1xuICAgICAgICAgICAgICAgIG9yZGVyLmJhc2UgPSBiYXNlQXNzZXRBbW91bnQuYW1vdW50LnRvTnVtYmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICBsZXQgb3JkZXJCb29rID0gYXdhaXQgQXBpcy5kYi5nZXRfb3JkZXJfYm9vayhcbiAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxuICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgIDUwXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHF1b3RlQW1vdW50ID0gQmlnTnVtYmVyKDApLFxuICAgICAgICAgICAgYmFzZUFtb3VudCA9IEJpZ051bWJlcigwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlckJvb2suYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFzayA9IG9yZGVyQm9vay5hc2tzW2ldO1xuXG4gICAgICAgICAgICBsZXQgcXVvdGUgPSBCaWdOdW1iZXIoYXNrLmJhc2UpO1xuICAgICAgICAgICAgbGV0IGJhc2UgPSBCaWdOdW1iZXIoYXNrLnF1b3RlKTtcbiAgICAgICAgICAgIGxldCBkaWZmQmFzZSA9IEJpZ051bWJlcihhbW91bnQpLm1pbnVzKGJhc2VBbW91bnQpO1xuXG4gICAgICAgICAgICBpZiAoYmFzZS5pc0VxdWFsVG8oZGlmZkJhc2UpKSB7XG4gICAgICAgICAgICAgICAgcXVvdGVBbW91bnQgPSBxdW90ZUFtb3VudC5wbHVzKHF1b3RlKTtcbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50ID0gYmFzZUFtb3VudC5wbHVzKGJhc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmlzTGVzc1RoYW4oZGlmZkJhc2UpKSB7XG4gICAgICAgICAgICAgICAgcXVvdGVBbW91bnQgPSBxdW90ZUFtb3VudC5wbHVzKHF1b3RlKTtcbiAgICAgICAgICAgICAgICBiYXNlQW1vdW50ID0gYmFzZUFtb3VudC5wbHVzKGJhc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmlzR3JlYXRlclRoYW4oZGlmZkJhc2UpKSB7XG4gICAgICAgICAgICAgICAgYmFzZUFtb3VudCA9IGJhc2VBbW91bnQucGx1cyhkaWZmQmFzZSk7XG4gICAgICAgICAgICAgICAgcXVvdGVBbW91bnQgPSBxdW90ZUFtb3VudC5wbHVzKFxuICAgICAgICAgICAgICAgICAgICBCaWdOdW1iZXIoYXNrLnByaWNlKS50aW1lcyhkaWZmQmFzZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByaWNlID0gcXVvdGVBbW91bnQuZGl2KGJhc2VBbW91bnQpLFxuICAgICAgICAgICAgbG93UHJpY2UgPSBudWxsO1xuXG4gICAgICAgIHN0YXRlLm9yZGVycy5mb3JFYWNoKG9yZGVyID0+IHtcbiAgICAgICAgICAgIGxldCBvcmRlclByaWNlID0gQmlnTnVtYmVyKG9yZGVyLnF1b3RlKS5kaXYob3JkZXIuYmFzZSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIWxvd1ByaWNlIHx8XG4gICAgICAgICAgICAgICAgb3JkZXJQcmljZVxuICAgICAgICAgICAgICAgICAgICAubWludXMocHJpY2UpXG4gICAgICAgICAgICAgICAgICAgIC5hYnMoKVxuICAgICAgICAgICAgICAgICAgICAuaXNMZXNzVGhhbihsb3dQcmljZS5taW51cyhwcmljZSkuYWJzKCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgbG93UHJpY2UgPSBvcmRlclByaWNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgaXNHcmVhdGVyRGlzdGFuY2UgPVxuICAgICAgICAgICAgISFsb3dQcmljZSAmJlxuICAgICAgICAgICAgbG93UHJpY2VcbiAgICAgICAgICAgICAgICAubWludXMocHJpY2UpXG4gICAgICAgICAgICAgICAgLmFicygpXG4gICAgICAgICAgICAgICAgLmRpdihsb3dQcmljZSlcbiAgICAgICAgICAgICAgICAudGltZXMoMTAwKVxuICAgICAgICAgICAgICAgIC5pc0dyZWF0ZXJUaGFuKHN0YXRlLmRpc3RhbmNlKTtcblxuICAgICAgICBsb2coXG4gICAgICAgICAgICBgT3JkZXJzIGV4aXN0czogJHshIWxvd1ByaWNlfSwgYmFsYW5jZSA+IGFtb3VudDogJHtiYWxhbmNlID5cbiAgICAgICAgICAgICAgICBhbW91bnR9LCBsb3dQcmljZSAtIHByaWNlID4gZGlzdGFuY2U6ICR7aXNHcmVhdGVyRGlzdGFuY2V9YFxuICAgICAgICApO1xuICAgICAgICBpZiAoYmFsYW5jZSA+IGFtb3VudCAmJiAoIWxvd1ByaWNlIHx8IGlzR3JlYXRlckRpc3RhbmNlKSkge1xuICAgICAgICAgICAgbGV0IGJhc2VBc3NldEFtb3VudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMuYmFzZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdW90ZUFzc2V0QW1vdW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5xdW90ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBxdW90ZUFtb3VudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LmJ1eShxdW90ZUFzc2V0QW1vdW50LCBiYXNlQXNzZXRBbW91bnQpLFxuICAgICAgICAgICAgICAgIG9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJzZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgcXVvdGU6IHF1b3RlQXNzZXRBbW91bnQuYW1vdW50LnRvTnVtYmVyKCksXG4gICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgIGZlZTogb3JkZXJGZWVcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzdGF0ZS5vcmRlcnMucHVzaChvcmRlcik7XG4gICAgICAgICAgICBsb2coXG4gICAgICAgICAgICAgICAgYHNlbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgIH06IGFtb3VudD0ke2Ftb3VudH0sIHByaWNlPSR7cHJpY2UudG9OdW1iZXIoKX0gJHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgIH0vJHt0aGlzLnF1b3RlLnN5bWJvbH1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFsYW5jZSkpXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFsYW5jZSA9IE51bWJlcihzdGF0ZS5iYWxhbmNlKSAtIGFtb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLm9yZGVycyA9IHN0YXRlLm9yZGVycy5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaWQgIT09IG51bGwpO1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyY2VudFVwO1xuIiwiaW1wb3J0IENyZWF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL0NyZWF0ZVwiO1xuaW1wb3J0IFN0YXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvU3RhdGVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCJsaWIvYm90cy9hY2NvdW50XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuXG5jbGFzcyBTcHJlYWRUcmFkZSB7XG4gICAgc3RhdGljIGNyZWF0ZSA9IENyZWF0ZTtcbiAgICBzdGF0ZSA9IFN0YXRlO1xuXG4gICAgY29uc3RydWN0b3IoYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbmV3IEFjY291bnQoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG5cbiAgICAgICAgaWYgKGluaXREYXRhKSB7XG4gICAgICAgICAgICBzdG9yYWdlLmluaXQoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGluaXREYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgYmFzZToge1xuICAgICAgICAgICAgICAgICAgICBhc3NldDogaW5pdERhdGEuYmFzZUFzc2V0LFxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiBpbml0RGF0YS5iYXNlQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkOiBpbml0RGF0YS5iYXNlU3ByZWFkLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLmJhc2VBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ6IGluaXREYXRhLnBlcmNlbnRCYXNlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZCwgcHJpY2UgYW5kIGFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdW90ZToge1xuICAgICAgICAgICAgICAgICAgICBhc3NldDogaW5pdERhdGEucXVvdGVBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogaW5pdERhdGEucXVvdGVCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBzcHJlYWQ6IGluaXREYXRhLnF1b3RlU3ByZWFkLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLnF1b3RlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50OiBpbml0RGF0YS5wZXJjZW50UXVvdGVBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lkLCBwcmljZSBhbmQgYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZyb21NYXJrZXQ6IGluaXREYXRhLmZyb21NYXJrZXQsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFByaWNlOiBpbml0RGF0YS5kZWZhdWx0UHJpY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uYW1lID0gc3RvcmFnZS5yZWFkKCkubmFtZTtcblxuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhc3luYyBzdGFydCgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcblxuICAgICAgICB0aGlzLmJhc2UgPSBhd2FpdCBBc3NldHNbc3RhdGUuYmFzZS5hc3NldF07XG4gICAgICAgIHRoaXMucXVvdGUgPSBhd2FpdCBBc3NldHNbc3RhdGUucXVvdGUuYXNzZXRdO1xuXG4gICAgICAgIGlmIChbdGhpcy5iYXNlLmlzc3VlciwgdGhpcy5xdW90ZS5pc3N1ZXJdLmluY2x1ZGVzKFwiMS4yLjBcIikpIHtcbiAgICAgICAgICAgIGlmIChbdGhpcy5iYXNlLmlkLCB0aGlzLnF1b3RlLmlkXS5pbmNsdWRlcyhcIjEuMy4wXCIpKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0Q29yZUZlZWQ7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJhc2UuaXNzdWVyID09IHRoaXMucXVvdGUuaXNzdWVyKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0U21hcnRGZWVkO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmdldEZlZWQgPSB0aGlzLmdldFVJQUZlZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldEZlZWQgPSB0aGlzLmdldFVJQUZlZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICBzZXR0aW5nOiBcIndhbGxldExvY2tUaW1lb3V0XCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9KTtcblxuICAgICAgICBDaGFpblN0b3JlLnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcbiAgICAgICAgdGhpcy5ydW4gPSB0cnVlO1xuICAgIH1cblxuICAgIGFzeW5jIHN0b3AoKSB7XG4gICAgICAgIENoYWluU3RvcmUudW5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XG4gICAgICAgIGF3YWl0IHRoaXMucXVldWVFdmVudHM7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZGVsZXRlKCk7XG4gICAgfVxuXG4gICAgcXVldWUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSB0aGlzLnF1ZXVlRXZlbnRzXG4gICAgICAgICAgICAudGhlbih0aGlzLmNoZWNrT3JkZXJzKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2VyLmVycm9yLmJpbmQodGhpcy5sb2dnZXIpKTtcbiAgICB9O1xuXG4gICAgY2hlY2tPcmRlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzdGF0ZVwiLCBzdGF0ZSk7XG5cbiAgICAgICAgbGV0IHRpY2tlciA9IGF3YWl0IEFwaXMuZGIuZ2V0X3RpY2tlcihcbiAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXG4gICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZGVmYXVsdFByaWNlID0gc3RhdGUuZGVmYXVsdFByaWNlO1xuXG4gICAgICAgIGxldCBmZWVkUHJpY2UgPSBzdGF0ZS5mcm9tTWFya2V0XG4gICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIodGlja2VyLmxhdGVzdClcbiAgICAgICAgICAgICAgICA6IGF3YWl0IHRoaXMuZ2V0RmVlZCgpLFxuICAgICAgICAgICAgYnV5UHJpY2UgPSBmZWVkUHJpY2UudGltZXMoMSAtIHN0YXRlLmJhc2Uuc3ByZWFkIC8gMTAwKS50b051bWJlcigpLFxuICAgICAgICAgICAgc2VsbFByaWNlID0gZmVlZFByaWNlXG4gICAgICAgICAgICAgICAgLnRpbWVzKDEgKyBzdGF0ZS5xdW90ZS5zcHJlYWQgLyAxMDApXG4gICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgZmVlZFByaWNlID0gZmVlZFByaWNlLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgaWYgKGZlZWRQcmljZSA9PSAwKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGJ1eU9yZGVyID0gc3RhdGUuYmFzZS5vcmRlci5pZFxuICAgICAgICAgICAgICAgID8gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW3N0YXRlLmJhc2Uub3JkZXIuaWRdKSlbMF1cbiAgICAgICAgICAgICAgICA6IHN0YXRlLmJhc2Uub3JkZXIuaWQsXG4gICAgICAgICAgICBzZWxsT3JkZXIgPSBzdGF0ZS5xdW90ZS5vcmRlci5pZFxuICAgICAgICAgICAgICAgID8gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW3N0YXRlLnF1b3RlLm9yZGVyLmlkXSkpWzBdXG4gICAgICAgICAgICAgICAgOiBzdGF0ZS5xdW90ZS5vcmRlci5pZCxcbiAgICAgICAgICAgIGFjY291bnRCYWxhbmNlcyA9IChhd2FpdCB0aGlzLmFjY291bnQuYmFsYW5jZXMoXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkLFxuICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuaWRcbiAgICAgICAgICAgICkpLnJlZHVjZSgoYWNjLCBiYWxhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLmlkID09PSBiYWxhbmNlLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgID8gKGFjYy5iYXNlID0gQmlnTnVtYmVyKGJhbGFuY2UuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKVxuICAgICAgICAgICAgICAgICAgICA6IChhY2MucXVvdGUgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pLFxuICAgICAgICAgICAgYmFzZUJhbGFuY2UgPVxuICAgICAgICAgICAgICAgIHN0YXRlLmJhc2UuYmFsYW5jZSA9PT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUuYmFzZS5iYWxhbmNlID09PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRCYWxhbmNlcy5iYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGgubWluKGFjY291bnRCYWxhbmNlcy5iYXNlLCBzdGF0ZS5iYXNlLmJhbGFuY2UpLFxuICAgICAgICAgICAgcXVvdGVCYWxhbmNlID1cbiAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5iYWxhbmNlID09PSBcIi1cIlxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5xdW90ZS5iYWxhbmNlID09PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRCYWxhbmNlcy5xdW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihhY2NvdW50QmFsYW5jZXMucXVvdGUsIHN0YXRlLnF1b3RlLmJhbGFuY2UpLFxuICAgICAgICAgICAgYmFzZUFtb3VudCA9XG4gICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5wZXJjZW50LnRvU3RyaW5nKCkgPT0gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBCaWdOdW1iZXIoYmFzZUJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lcyhzdGF0ZS5iYXNlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUuYmFzZS5hbW91bnQsXG4gICAgICAgICAgICBxdW90ZUFtb3VudCA9XG4gICAgICAgICAgICAgICAgc3RhdGUucXVvdGUucGVyY2VudC50b1N0cmluZygpID09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKHF1b3RlQmFsYW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHN0YXRlLnF1b3RlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUucXVvdGUuYW1vdW50O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJpY2VzXCIsIGJ1eVByaWNlLCBmZWVkUHJpY2UsIHNlbGxQcmljZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib3JkZXJzXCIsIGJ1eU9yZGVyLCBzZWxsT3JkZXIpO1xuXG4gICAgICAgIGlmIChidXlPcmRlcikge1xuICAgICAgICAgICAgLy9jaGVjayBQcmljZVxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgYGNoZWNrIGJ1eU9yZGVyOiBtb3ZlPSR7TWF0aC5hYnMoXG4gICAgICAgICAgICAgICAgICAgIGJ1eVByaWNlIC0gc3RhdGUuYmFzZS5vcmRlci5wcmljZVxuICAgICAgICAgICAgICAgICkgPlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBidXlQcmljZSkgL1xuICAgICAgICAgICAgICAgICAgICAgICAgMn0sIGZpbGw9JHt0aWNrZXIubG93ZXN0X2FzayA8PSBidXlQcmljZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGJ1eVByaWNlIC0gc3RhdGUuYmFzZS5vcmRlci5wcmljZSkgPlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBidXlQcmljZSkgLyAyICYmXG4gICAgICAgICAgICAgICAgdGlja2VyLmxvd2VzdF9hc2sgPiBidXlQcmljZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvcmRlclxuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgYG1vdmUgYnV5IG9yZGVyOiAke2J1eVByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LmNhbmNlbE9yZGVyKHN0YXRlLmJhc2Uub3JkZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYW1vdW50IGluIG9yZGVyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyQW1vdW50ID0gQmlnTnVtYmVyKGJ1eU9yZGVyLmZvcl9zYWxlKVxuICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAoc3RhdGUuYmFzZS5iYWxhbmNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5iYXNlLmJhbGFuY2UpICsgb3JkZXJBbW91bnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWRkIHRvIHNlbGwgYmFsYW5jZVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5hbW91bnQgPiBvcmRlckFtb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmN1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5iYWxhbmNlID0gQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5hbW91bnQgLSBvcmRlckFtb3VudFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2KHN0YXRlLmJhc2Uub3JkZXIucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gTWF0aC5taW4oYmFzZUJhbGFuY2UsIGJhc2VBbW91bnQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcigxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYnV5UHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYnV5UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSAtPSBhbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoL14xLjcuXFxkKiQvLnRlc3Qoc3RhdGUuYmFzZS5vcmRlci5pZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBmaWxsIG9yZGVyXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgPSBCaWdOdW1iZXIoc3RhdGUuYmFzZS5vcmRlci5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2KHN0YXRlLmJhc2Uub3JkZXIucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgYGNyZWF0ZSBidXlPcmRlcjogYmFsYW5jZT0ke2Jhc2VCYWxhbmNlID49XG4gICAgICAgICAgICAgICAgICAgIGJhc2VBbW91bnR9LCBmaWxsPSR7dGlja2VyLmxvd2VzdF9hc2sgPD0gYnV5UHJpY2V9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChiYXNlQmFsYW5jZSA+PSBiYXNlQW1vdW50ICYmIHRpY2tlci5sb3dlc3RfYXNrID4gYnV5UHJpY2UpIHtcbiAgICAgICAgICAgICAgICAvL2J1eVxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgICAgICAgICAgICAgIGBidXk6ICR7YnV5UHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7dGhpcy5iYXNlLnN5bWJvbH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihidXlQcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBidXlQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogYmFzZUFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUuYmFzZS5iYWxhbmNlIC09IGJhc2VBbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsbE9yZGVyKSB7XG4gICAgICAgICAgICAvL2NoZWNrIFByaWNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgY2hlY2sgc2VsbE9yZGVyOiBtb3ZlPSR7TWF0aC5hYnMoXG4gICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZSAtIHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlXG4gICAgICAgICAgICAgICAgKSA+XG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGZlZWRQcmljZSAtIHNlbGxQcmljZSkgL1xuICAgICAgICAgICAgICAgICAgICAgICAgMn0sIGZpbGw9JHt0aWNrZXIuaGlnaGVzdF9iaWQgPj0gc2VsbFByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoc2VsbFByaWNlIC0gc3RhdGUucXVvdGUub3JkZXIucHJpY2UpID5cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gc2VsbFByaWNlKSAvIDIgJiZcbiAgICAgICAgICAgICAgICB0aWNrZXIuaGlnaGVzdF9iaWQgPCBzZWxsUHJpY2VcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3JkZXJcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgICAgICAgICAgICAgIGBtb3ZlIHNlbGwgb3JkZXI6ICR7c2VsbFByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LmNhbmNlbE9yZGVyKHN0YXRlLnF1b3RlLm9yZGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFtb3VudCBpbiBvcmRlclxuICAgICAgICAgICAgICAgIGxldCBvcmRlckFtb3VudCA9IEJpZ051bWJlcihzZWxsT3JkZXIuZm9yX3NhbGUpXG4gICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5xdW90ZS5iYWxhbmNlKSArIG9yZGVyQW1vdW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGFkZCB0byBidXkgYmFsYW5jZVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuYW1vdW50ID4gb3JkZXJBbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5iYWxhbmNlID0gQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuYW1vdW50IC0gb3JkZXJBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gTWF0aC5taW4ocXVvdGVCYWxhbmNlLCBxdW90ZUFtb3VudCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBzZWxsUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlIC09IGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoL14xLjcuXFxkKiQvLnRlc3Qoc3RhdGUucXVvdGUub3JkZXIuaWQpKSB7XG4gICAgICAgICAgICAgICAgLy8gZmlsbCBvcmRlclxuICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSA9IEJpZ051bWJlcihzdGF0ZS5xdW90ZS5vcmRlci5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUucXVvdGUub3JkZXIucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5iYXNlLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBjcmVhdGUgc2VsbE9yZGVyOiBiYWxhbmNlPSR7cXVvdGVCYWxhbmNlID49XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlQW1vdW50fSwgZmlsbD0ke3RpY2tlci5oaWdoZXN0X2JpZCA+PSBzZWxsUHJpY2V9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChxdW90ZUJhbGFuY2UgPj0gcXVvdGVBbW91bnQgJiYgdGlja2VyLmhpZ2hlc3RfYmlkIDwgc2VsbFByaWNlKSB7XG4gICAgICAgICAgICAgICAgLy9idXlcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICAgICAgICAgICAgICBgc2VsbDogJHtzZWxsUHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogc2VsbFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBxdW90ZUFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgLT0gcXVvdGVBbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3JhZ2Uud3JpdGUoc3RhdGUpO1xuICAgIH07XG5cbiAgICBhc3luYyBnZXRDb3JlRmVlZCgpIHtcbiAgICAgICAgbGV0IHJhdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuYmFzZS5pZCA9PSBcIjEuMy4wXCIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucXVvdGUudXBkYXRlKCk7XG4gICAgICAgICAgICByYXRlID0gdGhpcy5xdW90ZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYmFzZS51cGRhdGUoKTtcbiAgICAgICAgICAgIHJhdGUgPSB0aGlzLmJhc2Uub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgW2Jhc2UsIHF1b3RlXSA9XG4gICAgICAgICAgICByYXRlLmJhc2UuYXNzZXRfaWQgPT0gdGhpcy5iYXNlLmlkXG4gICAgICAgICAgICAgICAgPyBbcmF0ZS5iYXNlLCByYXRlLnF1b3RlXVxuICAgICAgICAgICAgICAgIDogW3JhdGUucXVvdGUsIHJhdGUuYmFzZV07XG5cbiAgICAgICAgcmV0dXJuIEJpZ051bWJlcihiYXNlLmFtb3VudClcbiAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgIC5kaXYoQmlnTnVtYmVyKHF1b3RlLmFtb3VudCkuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U21hcnRGZWVkKCkge1xuICAgICAgICBsZXQgYnRzID0gYXdhaXQgQXNzZXRzW1wiZ3BoXCJdO1xuICAgICAgICBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XG4gICAgICAgIGxldCByYXRlID0gdGhpcy5iYXNlLm9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlO1xuICAgICAgICBsZXQgW2Jhc2UsIHF1b3RlXSA9XG4gICAgICAgICAgICByYXRlLmJhc2UuYXNzZXRfaWQgPT0gXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgPyBbcmF0ZS5iYXNlLCByYXRlLnF1b3RlXVxuICAgICAgICAgICAgICAgIDogW3JhdGUucXVvdGUsIHJhdGUuYmFzZV07XG5cbiAgICAgICAgbGV0IGJhc2VQcmljZSA9IEJpZ051bWJlcihiYXNlLmFtb3VudClcbiAgICAgICAgICAgIC5kaXYoMTAgKiogYnRzLnByZWNpc2lvbilcbiAgICAgICAgICAgIC5kaXYoQmlnTnVtYmVyKHF1b3RlLmFtb3VudCkuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pKTtcblxuICAgICAgICBhd2FpdCB0aGlzLnF1b3RlLnVwZGF0ZSgpO1xuICAgICAgICByYXRlID0gdGhpcy5xdW90ZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgaWYgKHJhdGUuYmFzZS5hc3NldF9pZCA9PSBcIjEuMy4wXCIpIHtcbiAgICAgICAgICAgIGJhc2UgPSByYXRlLmJhc2U7XG4gICAgICAgICAgICBxdW90ZSA9IHJhdGUucXVvdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYXNlID0gcmF0ZS5xdW90ZTtcbiAgICAgICAgICAgIHF1b3RlID0gcmF0ZS5iYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHF1b3RlUHJpY2UgPSBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAuZGl2KDEwICoqIGJ0cy5wcmVjaXNpb24pXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQpLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbikpO1xuXG4gICAgICAgIHJldHVybiBxdW90ZVByaWNlLmRpdihiYXNlUHJpY2UpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFVJQUZlZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmljZVxuICAgICAgICAgICAgPyBCaWdOdW1iZXIodGhpcy5kZWZhdWx0UHJpY2UpXG4gICAgICAgICAgICA6IGF3YWl0IHRoaXMuYmluYW5jZVByaWNlKHRoaXMuYmFzZS5zeW1ib2wsIHRoaXMucXVvdGUuc3ltYm9sKTtcbiAgICB9XG5cbiAgICBhc3luYyBiaW5hbmNlUHJpY2UoYmFzZSwgcXVvdGUpIHtcbiAgICAgICAgbGV0IGFzc2V0ID0gYCR7cXVvdGUuc3BsaXQoXCIuXCIpLnNsaWNlKC0xKVswXX0ke1xuICAgICAgICAgICAgYmFzZS5zcGxpdChcIi5cIikuc2xpY2UoLTEpWzBdXG4gICAgICAgIH1gXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCJVU0RcIiwgXCJVU0RUXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2V0IGFzc2V0OiAke2Fzc2V0fWApO1xuICAgICAgICB0aGlzLnByaWNlQXJyYXkgPSB0aGlzLnByaWNlQXJyYXkgfHwgW107XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vYXNzZXQgPSBcIkJUQ1VTRFRcIlxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgYGh0dHBzOi8vYXBpLmJpbmFuY2UuY29tL2FwaS92MS90cmFkZXM/c3ltYm9sPSR7YXNzZXR9JmxpbWl0PTFgXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB0aGlzLnByaWNlQXJyYXkucHVzaChkYXRhWzBdLnByaWNlKTtcbiAgICAgICAgICAgIC8vdGhpcy5wcmljZUFycmF5LnB1c2goMTApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcbiAgICAgICAgICAgICAgICBgRXJyb3IgQmluYW5jZSByZXF1ZXN0OiAke2Fzc2V0fSwgZXJyb3I6ICR7ZXJyb3J9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByaWNlQXJyYXkubGVuZ3RoID4gMTApIHRoaXMucHJpY2VBcnJheS5zaGlmdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlQXJyYXkubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB0aGlzLnByaWNlQXJyYXlcbiAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEucGx1cyhiKSwgQmlnTnVtYmVyKDApKVxuICAgICAgICAgICAgICAgICAgLmRpdih0aGlzLnByaWNlQXJyYXkubGVuZ3RoKVxuICAgICAgICAgICAgOiBCaWdOdW1iZXIoMCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcHJlYWRUcmFkZTtcbiIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9UcmFpbGluZ1N0b3AvQ3JlYXRlXCI7XG5pbXBvcnQgU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9UcmFpbGluZ1N0b3AvU3RhdGVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCJsaWIvYm90cy9hY2NvdW50XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuXG5jbGFzcyBUcmFpbGluZ1N0b3Age1xuICAgIHN0YXRpYyBjcmVhdGUgPSBDcmVhdGU7XG4gICAgc3RhdGUgPSBTdGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG5ldyBBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xuICAgICAgICAgICAgc3RvcmFnZS5pbml0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpbml0RGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIHNlbGxBc3NldDogaW5pdERhdGEuc2VsbEFzc2V0LFxuICAgICAgICAgICAgICAgIGdldEFzc2V0OiBpbml0RGF0YS5nZXRBc3NldCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLmFtb3VudCxcbiAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IGluaXREYXRhLm1pbkFtb3VudCxcbiAgICAgICAgICAgICAgICBwZXJjZW50OiBpbml0RGF0YS5wZXJjZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmFtZSA9IHN0b3JhZ2UucmVhZCgpLm5hbWU7XG5cbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnQoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG5cbiAgICAgICAgdGhpcy5zZWxsQXNzZXQgPSBhd2FpdCBBc3NldHNbc3RhdGUuc2VsbEFzc2V0XTtcbiAgICAgICAgdGhpcy5nZXRBc3NldCA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5nZXRBc3NldF07XG5cbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgc2V0dGluZzogXCJ3YWxsZXRMb2NrVGltZW91dFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcbiAgICB9XG4gICAgYXN5bmMgc3RvcCgpIHtcbiAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWV1ZUV2ZW50cztcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoKTtcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcbiAgICAgICAgICAgIC50aGVuKHRoaXMuY2hlY2tPcmRlcnMpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3IuYmluZCh0aGlzLmxvZ2dlcikpO1xuICAgIH07XG5cbiAgICBjaGVja09yZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja09yZGVyc1wiKTtcblxuICAgICAgICBsZXQgdGlja2VyID0gYXdhaXQgQXBpcy5kYi5nZXRfdGlja2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsbEFzc2V0LnN5bWJvbFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHByaWNlID0gQmlnTnVtYmVyKHRpY2tlci5sYXRlc3QpLFxuICAgICAgICAgICAgbmVlZFN0b3Bsb3NzID0gcHJpY2UudGltZXMoMSAtIHN0YXRlLnBlcmNlbnQgLyAxMDApLFxuICAgICAgICAgICAgY3JlYXRlT3JkZXJQcmljZSA9IHByaWNlLnRpbWVzKDEgLSAoc3RhdGUucGVyY2VudCAqIDIpIC8gMyAvIDEwMCksXG4gICAgICAgICAgICBzdG9wbG9zcyA9IEJpZ051bWJlcihzdGF0ZS5taW5BbW91bnQpLmRpdihzdGF0ZS5hbW91bnQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgcHJpY2UudG9OdW1iZXIoKSxcbiAgICAgICAgICAgIG5lZWRTdG9wbG9zcy50b051bWJlcigpLFxuICAgICAgICAgICAgY3JlYXRlT3JkZXJQcmljZS50b051bWJlcigpLFxuICAgICAgICAgICAgc3RvcGxvc3MudG9OdW1iZXIoKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChuZWVkU3RvcGxvc3MuZ3Qoc3RvcGxvc3MpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwIG1pbkFtb3VudFwiKTtcbiAgICAgICAgICAgIHN0YXRlLm1pbkFtb3VudCA9IG5lZWRTdG9wbG9zcy50aW1lcyhzdGF0ZS5hbW91bnQpLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uud3JpdGUoc3RhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNyZWF0ZU9yZGVyUHJpY2UubHQoc3RvcGxvc3MpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBsaW1pdCBvcmRlclwiKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsbEFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICBzdGF0ZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgc3RvcGxvc3MudG9OdW1iZXIoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxpbmdTdG9wO1xuIiwiaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuaW1wb3J0IHtUcmFuc2FjdGlvbkJ1aWxkZXJ9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuXG5jbGFzcyBBY2NvdW50IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBmZWVTeW1ib2wgPSBcIkdQSFwiKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIEFwaXMuZGIuZ2V0X2FjY291bnRfYnlfbmFtZShuYW1lKSxcbiAgICAgICAgICAgIEFzc2V0c1tmZWVTeW1ib2xdXG4gICAgICAgIF0pLnRoZW4oKFthY2MsIGZlZV0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjID0gYWNjO1xuICAgICAgICAgICAgdGhpcy5mZWVBc3NldCA9IGZlZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FuY2VsT3JkZXIoaWQpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRUcmFuc2FjdGlvbihcImxpbWl0X29yZGVyX2NhbmNlbFwiLCB7XG4gICAgICAgICAgICBmZWU6IHRoaXMuZmVlQXNzZXQudG9QYXJhbSgpLFxuICAgICAgICAgICAgZmVlX3BheWluZ19hY2NvdW50OiB0aGlzLmFjYy5pZCxcbiAgICAgICAgICAgIG9yZGVyOiBpZCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGJ1eShcbiAgICAgICAgYnV5U3ltYm9sLFxuICAgICAgICBiYXNlU3ltYm9sLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHByaWNlLFxuICAgICAgICBmaWxsX29yX2tpbGwgPSBmYWxzZSxcbiAgICAgICAgZXhwaXJlID0gXCIyMDI1LTAyLTAyVDAyOjAyOjAyXCJcbiAgICApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIGxldCBidXlBc3NldCA9IGF3YWl0IEFzc2V0c1tcbiAgICAgICAgICAgICAgICB0eXBlb2YgYnV5U3ltYm9sID09PSBcIm9iamVjdFwiID8gYnV5U3ltYm9sLmFzc2V0X2lkIDogYnV5U3ltYm9sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmFzZUFzc2V0ID0gYXdhaXQgQXNzZXRzW1xuICAgICAgICAgICAgICAgIHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gYmFzZVN5bWJvbC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA6IGJhc2VTeW1ib2xcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBidXlBbW91bnQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgIEJpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGJ1eVN5bWJvbCA9PT0gXCJvYmplY3RcIiA/IGJ1eVN5bWJvbC5hbW91bnQgOiBhbW91bnRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiBidXlBc3NldC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc2VsbEFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgKHR5cGVvZiBiYXNlU3ltYm9sID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgID8gQmlnTnVtYmVyKGJhc2VTeW1ib2wuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICA6IEJpZ051bWJlcihhbW91bnQpLnRpbWVzKHByaWNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKDEwICoqIGJhc2VBc3NldC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGlmIChidXlBbW91bnQgPT0gMCB8fCBzZWxsQW1vdW50ID09IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbW91bnQgZXF1YWwgMCFcIik7XG5cbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdGhpcy5zZW5kVHJhbnNhY3Rpb24oXCJsaW1pdF9vcmRlcl9jcmVhdGVcIiwge1xuICAgICAgICAgICAgZmVlOiB0aGlzLmZlZUFzc2V0LnRvUGFyYW0oKSxcbiAgICAgICAgICAgIHNlbGxlcjogdGhpcy5hY2MuaWQsXG4gICAgICAgICAgICBhbW91bnRfdG9fc2VsbDogYmFzZUFzc2V0LnRvUGFyYW0oc2VsbEFtb3VudCksXG4gICAgICAgICAgICBtaW5fdG9fcmVjZWl2ZTogYnV5QXNzZXQudG9QYXJhbShidXlBbW91bnQpLFxuICAgICAgICAgICAgZXhwaXJhdGlvbjogZXhwaXJlLFxuICAgICAgICAgICAgZmlsbF9vcl9raWxsOiBmaWxsX29yX2tpbGwsXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbXVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKGF3YWl0IEFwaXMuZGIuZ2V0X29iamVjdHMoW1xuICAgICAgICAgICAgdHhbMF0udHJ4Lm9wZXJhdGlvbl9yZXN1bHRzWzBdWzFdXG4gICAgICAgIF0pKVswXTtcbiAgICB9XG5cbiAgICBhc3luYyBzZWxsKFxuICAgICAgICBzZWxsU3ltYm9sLFxuICAgICAgICBiYXNlU3ltYm9sLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHByaWNlLFxuICAgICAgICBmaWxsX29yX2tpbGwgPSBmYWxzZSxcbiAgICAgICAgZXhwaXJlID0gXCIyMDI1LTAyLTAyVDAyOjAyOjAyXCJcbiAgICApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIGxldCBzZWxsQXNzZXQgPSBhd2FpdCBBc3NldHNbXG4gICAgICAgICAgICAgICAgdHlwZW9mIHNlbGxTeW1ib2wgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxsU3ltYm9sLmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgIDogc2VsbFN5bWJvbFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJhc2VBc3NldCA9IGF3YWl0IEFzc2V0c1tcbiAgICAgICAgICAgICAgICB0eXBlb2YgYmFzZVN5bWJvbCA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IGJhc2VTeW1ib2wuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgOiBiYXNlU3ltYm9sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2VsbEFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygc2VsbFN5bWJvbCA9PT0gXCJvYmplY3RcIiA/IHNlbGxTeW1ib2wuYW1vdW50IDogYW1vdW50XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAudGltZXMoMTAgKiogc2VsbEFzc2V0LnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBidXlBbW91bnQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICh0eXBlb2YgYmFzZVN5bWJvbCA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICA/IEJpZ051bWJlcihiYXNlU3ltYm9sLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgOiBCaWdOdW1iZXIoYW1vdW50KS50aW1lcyhwcmljZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcygxMCAqKiBiYXNlQXNzZXQucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBpZiAoYnV5QW1vdW50ID09IDAgfHwgc2VsbEFtb3VudCA9PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW1vdW50IGVxdWFsIDAhXCIpO1xuXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IHRoaXMuc2VuZFRyYW5zYWN0aW9uKFwibGltaXRfb3JkZXJfY3JlYXRlXCIsIHtcbiAgICAgICAgICAgIGZlZTogdGhpcy5mZWVBc3NldC50b1BhcmFtKCksXG4gICAgICAgICAgICBzZWxsZXI6IHRoaXMuYWNjLmlkLFxuICAgICAgICAgICAgYW1vdW50X3RvX3NlbGw6IHNlbGxBc3NldC50b1BhcmFtKHNlbGxBbW91bnQpLFxuICAgICAgICAgICAgbWluX3RvX3JlY2VpdmU6IGJhc2VBc3NldC50b1BhcmFtKGJ1eUFtb3VudCksXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHBpcmUsXG4gICAgICAgICAgICBmaWxsX29yX2tpbGw6IGZpbGxfb3Jfa2lsbCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbXG4gICAgICAgICAgICB0eFswXS50cngub3BlcmF0aW9uX3Jlc3VsdHNbMF1bMV1cbiAgICAgICAgXSkpWzBdO1xuICAgIH1cblxuICAgIGFzeW5jIGJhbGFuY2VzKCkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG4gICAgICAgIHJldHVybiBBcGlzLmRiLmdldF9hY2NvdW50X2JhbGFuY2VzKHRoaXMuYWNjLmlkLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZFRyYW5zYWN0aW9uKHR5cGUsIG9wZXJhdGlvbikge1xuICAgICAgICBsZXQgdHIgPSBuZXcgVHJhbnNhY3Rpb25CdWlsZGVyKCk7XG4gICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbih0eXBlLCBvcGVyYXRpb24pO1xuICAgICAgICBhd2FpdCB0ci5zZXRfcmVxdWlyZWRfZmVlcygpO1xuXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XG4gICAgICAgIGxldCBwcml2YXRlX2tleSA9IFdhbGxldERiLmdldFByaXZhdGVLZXkoXG4gICAgICAgICAgICB0aGlzLmFjYy5hY3RpdmUua2V5X2F1dGhzWzBdWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRyLmFkZF9zaWduZXIoXG4gICAgICAgICAgICBwcml2YXRlX2tleSxcbiAgICAgICAgICAgIHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCkudG9QdWJsaWNLZXlTdHJpbmcoKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0ci5icm9hZGNhc3QoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XG4iLCJpbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGI6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBjYWxsIEFwaXMuZGIuJHttZXRob2R9KCR7Wy4uLmFyZ3VtZW50c119KWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5kYl9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIGhpc3Rvcnk6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAuaGlzdG9yeV9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIG5ldHdvcms6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAubmV0d29ya19hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIGNyeXB0bzogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5jcnlwdG9fYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMobWV0aG9kLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSksXG5cbiAgICBvcmRlcnM6IG5ldyBQcm94eShBcGlzLCB7XG4gICAgICAgIGdldChhcGlzLCBtZXRob2QpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpc1xuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAub3JkZXJzX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pXG59O1xuIiwiaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcblxuY2xhc3MgQXNzZXQge1xuICAgIHN0YXRpYyBnZXQoXywgbmFtZSkge1xuICAgICAgICBpZiAodGhpc1tuYW1lXSkgcmV0dXJuIHRoaXNbbmFtZV07XG5cbiAgICAgICAgcmV0dXJuIC9eMVxcLjNcXC5cXGQrJC8udGVzdChuYW1lKSB8fCAhaXNOYU4obmFtZSlcbiAgICAgICAgICAgID8gdGhpcy5pZChuYW1lKVxuICAgICAgICAgICAgOiB0aGlzLmdldEFzc2V0KG5hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRBc3NldChfc3ltYm9sKSB7XG4gICAgICAgIGxldCBzeW1ib2wgPSBfc3ltYm9sLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcblxuICAgICAgICBpZiAodGhpcy5tYXBbc3ltYm9sXSkgcmV0dXJuIHRoaXMubWFwW3N5bWJvbF07XG5cbiAgICAgICAgbGV0IG9iaiA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKHN5bWJvbCwgMSkpWzBdO1xuXG4gICAgICAgIGlmICghb2JqIHx8IG9iai5zeW1ib2wgIT09IHN5bWJvbClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgTm90IGZvdW5kIGFzc2V0ICR7c3ltYm9sfSEgQmxvY2tjaGFpbiByZXR1cm4gJHtcbiAgICAgICAgICAgICAgICAgICAgb2JqID8gb2JqLnN5bWJvbCA6IG9ialxuICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubWFwW3N5bWJvbF0gPSBuZXcgdGhpcyhvYmopO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBbc3ltYm9sXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgaWQoaWQpIHtcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcbiAgICAgICAgbGV0IGFzc2V0ID0gT2JqZWN0LmtleXModGhpcy5tYXApLmZpbmQoXG4gICAgICAgICAgICBzeW1ib2wgPT4gdGhpcy5tYXBbc3ltYm9sXS5pZCA9PSBpZFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChhc3NldCkgcmV0dXJuIHRoaXMubWFwW2Fzc2V0XTtcblxuICAgICAgICBhc3NldCA9IChhd2FpdCBBcGlzLmRiLmdldF9hc3NldHMoW2lkXSkpWzBdO1xuXG4gICAgICAgIGlmICghYXNzZXQpIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIGFzc2V0IGJ5IGlkICR7aWR9IWApO1xuXG4gICAgICAgIHRoaXMubWFwW2Fzc2V0LnN5bWJvbF0gPSBuZXcgdGhpcyhhc3NldCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcFthc3NldC5zeW1ib2xdO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBmcm9tUGFyYW0ocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHthbW91bnQ6IHBhcmFtLmFtb3VudCwgYXNzZXQ6IGF3YWl0IHRoaXMuaWQocGFyYW0uYXNzZXRfaWQpfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubWFwIHx8IHt9O1xuXG4gICAgICAgIGxldCBhc3NldHMgPSBhd2FpdCBBcGlzLmRiLmdldF9hc3NldHMoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1hcCkubWFwKHN5bWJvbCA9PiB0aGlzLm1hcFtzeW1ib2xdLmlkKVxuICAgICAgICApO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChhc3NldCA9PiBPYmplY3QuYXNzaWduKHRoaXMubWFwW2Fzc2V0LnN5bWJvbF0sIGFzc2V0KSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocnBjT2JqKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcnBjT2JqKTtcbiAgICB9XG5cbiAgICB0b1BhcmFtKG51bWJlciA9IDApIHtcbiAgICAgICAgcmV0dXJuIHthbW91bnQ6IG51bWJlciwgYXNzZXRfaWQ6IHRoaXMuaWR9O1xuICAgIH1cblxuICAgIGZlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgLyAxMDAgLyAxMDA7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlKCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIChhd2FpdCBBcGlzLmRiLmdldF9hc3NldHMoW3RoaXMuaWRdKSlbMF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb3h5KHt9LCBBc3NldCk7XG4iLCJpbXBvcnQgU3ByZWFkVHJhZGUgZnJvbSBcIi4vU3ByZWFkVHJhZGVcIjtcbmltcG9ydCBUcmFpbGluZ1N0b3AgZnJvbSBcIi4vVHJhaWxpbmdTdG9wXCI7XG5pbXBvcnQgUGVyY2VudFVwIGZyb20gXCIuL1BlcmNlbnRVcFwiO1xuLy9pbXBvcnQgUmVsYXRpdmVPcmRlcnMgZnJvbSBcIi4vUmVsYXRpdmVPcmRlcnNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCJzdG9yZXMvQm90c1N0b3JhZ2VcIjtcblxudmFyIGJvdHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0cmF0ZWdpZXM6IHtcbiAgICAgICAgU3ByZWFkVHJhZGUsXG4gICAgICAgIFRyYWlsaW5nU3RvcCxcbiAgICAgICAgLy9SZWxhdGl2ZU9yZGVycyxcbiAgICAgICAgUGVyY2VudFVwXG4gICAgfSxcblxuICAgIGNyZWF0ZShzdHJhdGVneSwgYWNjb3VudCwgaW5pdERhdGEpIHtcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZShgJHthY2NvdW50fTo6JHtzdHJhdGVneX1bJHtpbml0RGF0YS5uYW1lfV1gKTtcblxuICAgICAgICBsZXQgYm90ID0gbmV3IHRoaXMuc3RyYXRlZ2llc1tzdHJhdGVneV0oYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpO1xuICAgICAgICBib3RzW2BfX2JvdHNfXyR7c3RvcmFnZS5uYW1lfWBdID0gYm90O1xuXG4gICAgICAgIHJldHVybiBib3Q7XG4gICAgfSxcblxuICAgIGRlbGV0ZShib3QpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBgX19ib3RzX18ke2JvdC5zdG9yYWdlLm5hbWV9YDtcblxuICAgICAgICBib3RzW25hbWVdLmRlbGV0ZSgpO1xuICAgICAgICBkZWxldGUgYm90c1tuYW1lXTtcbiAgICB9LFxuXG4gICAgZ2V0Qm90cyhhY2NvdW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRCb3RzXCIsIE9iamVjdC5rZXlzKGJvdHMpKVxuXG4gICAgICAgIHJldHVybiBTdG9yYWdlLmdldEFjY291bnRCb3QoYWNjb3VudClcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYm90c1trZXldKSByZXR1cm4gYm90c1trZXldO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtzdHJhdGVneSwgbmFtZV0gPSBrZXlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15fX2JvdHNfXyguKyk6OihcXHcrKVxcWyhcXHcrKVxcXS8sIFwiJDIsJDNcIilcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLFwiKTtcblxuICAgICAgICAgICAgICAgIGlmICghc3RyYXRlZ3kgfHwgIW5hbWUpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZShgJHthY2NvdW50fTo6JHtzdHJhdGVneX1bJHtuYW1lfV1gKTtcblxuICAgICAgICAgICAgICAgIGxldCBib3QgPSBuZXcgdGhpcy5zdHJhdGVnaWVzW3N0cmF0ZWd5XShhY2NvdW50LCBzdG9yYWdlKTtcbiAgICAgICAgICAgICAgICBib3RzW2tleV0gPSBib3Q7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGVsID0+IGVsKTtcbiAgICB9LFxuXG4gICAgaGFzQm90KGFjY291bnQsIHN0cmF0ZWd5LCBuYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgbmFtZSBzdGF0ZWd5XCIsIGFjY291bnQsIHN0cmF0ZWd5LCBuYW1lKTtcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuaGFzKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske25hbWV9XWApO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgbHMgZnJvbSBcImNvbW1vbi9sb2NhbFN0b3JhZ2VcIjtcblxudmFyIGJvdHMgPSBscyhcIl9fYm90c19fXCIpO1xuXG5jbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgZ2V0QWNjb3VudEJvdChhY2NvdW50KSB7XG4gICAgICAgIGxldCByZSA9IG5ldyBSZWdFeHAoYF5fX2JvdHNfXyR7YWNjb3VudH06OmApO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoa2V5ID0+IHJlLnRlc3Qoa2V5KSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhhcyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBib3RzLmhhcyhuYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIC8vYm90cy5oYXMobmFtZSlcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgLy9pZiAoIWJvdHMuaGFzKG5hbWUpKVxuICAgICAgICAvL2JvdHMuc2V0KG5hbWUsIHt9KVxuICAgIH1cblxuICAgIGluaXQoZGF0YSkge1xuICAgICAgICBpZiAoIWJvdHMuaGFzKG5hbWUpKSBib3RzLnNldCh0aGlzLm5hbWUsIGRhdGEpO1xuICAgIH1cblxuICAgIHJlYWQoKSB7XG4gICAgICAgIHJldHVybiBib3RzLmdldCh0aGlzLm5hbWUpO1xuICAgIH1cblxuICAgIHdyaXRlKG5ld1N0YXRlKSB7XG4gICAgICAgIGJvdHMuc2V0KHRoaXMubmFtZSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgYm90cy5yZW1vdmUodGhpcy5uYW1lKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=