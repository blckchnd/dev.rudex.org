"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[36],{

/***/ 3013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackupBrainkey)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2083);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1799);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(633);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(426);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);








class BackupBrainkey extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = this._getInitialState();
  }

  _getInitialState() {
    return {
      password: null,
      brainkey: null,
      invalid_password: false
    };
  }

  render() {
    var content;
    var brainkey_backup_date = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].getWallet().brainkey_backup_date;
    var brainkey_backup_time = brainkey_backup_date ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      content: "wallet.brainkey_backed_up"
    }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedDate, {
      value: brainkey_backup_date
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "facolor-error",
      component: "p",
      content: "wallet.brainkey_not_backed_up"
    });

    if (this.state.verified) {
      var sha1 = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.hash.sha1(this.state.brainkey).toString("hex").substring(0, 4);
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "wallet.brainkey"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Card, null, this.state.brainkey), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
        className: "no-overflow"
      }, "sha1 hash of the brainkey: ", sha1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), brainkey_backup_time);
    }

    if (!content && this.state.brainkey) {
      var sha1 = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.hash.sha1(this.state.brainkey).toString("hex").substring(0, 4);
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "wallet.brainkey"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Card, null, this.state.brainkey), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          padding: "10px 0"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
        className: "no-overflow"
      }, "sha1 hash of your brainkey: ", sha1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          padding: "10px 0 20px 0"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "wallet.brainkey_w1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "wallet.brainkey_w2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "wallet.brainkey_w3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
        type: "primary",
        onClick: this.onComplete.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "wallet.verify"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
        type: "default",
        onClick: this.reset.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "wallet.cancel"
      })));
    }

    if (!content) {
      var valid = this.state.password && this.state.password !== "";
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "wallet.enter_password"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        onSubmit: this.onSubmit.bind(this),
        className: "name-form",
        noValidate: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Input, {
        type: "password",
        id: "password",
        onChange: this.onPassword.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, brainkey_backup_time, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Button, {
        type: "primary",
        onClick: this.onSubmit.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        content: "wallet.show_brainkey"
      }))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content no-overflow"
    }, content));
  }

  onComplete(brnkey) {
    this.setState({
      verified: true
    });
    actions_WalletActions__WEBPACK_IMPORTED_MODULE_3__["default"].setBrainkeyBackupDate();
  }

  reset(e) {
    if (e) {
      e.preventDefault();
    }

    this.setState(this._getInitialState());
  }

  onBack(e) {
    e.preventDefault();
    window.history.back();
  }

  onSubmit(e) {
    e.preventDefault();
    var was_locked = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].isLocked();
    let {
      success
    } = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].validatePassword(this.state.password, true);

    if (success) {
      var brainkey = stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].getBrainKey();
      if (was_locked) stores_WalletDb__WEBPACK_IMPORTED_MODULE_4__["default"].onLock();
      this.setState({
        brainkey
      });
    } else {
      bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__.Notification.error({
        message: counterpart__WEBPACK_IMPORTED_MODULE_7___default().translate("notifications.invalid_password")
      });
    }
  }

  onPassword(event) {
    this.setState({
      password: event.target.value
    });
  }

}

/***/ }),

/***/ 3012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordConfirm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);







const FormItem = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Form.Item;
class PasswordConfirm extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    // Called everytime a valid password is provided and matches a confirmed password
    onValid: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired)
  };

  constructor() {
    super();
    this.state = {
      password: "",
      confirm: "",
      errors: immutable__WEBPACK_IMPORTED_MODULE_2___default().Map(),
      // An empty form has no errors but is still invaid
      valid: false
    };
  }

  componentDidMount() {
    if (this.refs.firstPassword) {
      this.refs.firstPassword.focus();
    }
  }

  formChange(event) {
    let key = event.target.id === "current-password" ? "password" : "confirm";
    let state = {};
    state[key] = event.target.value;
    this.setState(state, this.validate);
  }

  validate(state = this.state) {
    let {
      password,
      confirm
    } = state;
    confirm = confirm.trim();
    password = password.trim();
    let errors = immutable__WEBPACK_IMPORTED_MODULE_2___default().Map(); // Don't report until typing begins

    if (password.length !== 0 && password.length < 8) errors = errors.set("password_length", "Password must be 8 characters or more"); // Don't report it until the confirm is populated

    if (password !== "" && confirm !== "" && password !== confirm) errors = errors.set("password_match", "Passwords do not match");
    let valid = password.length >= 8 && password === confirm;
    this.setState({
      errors,
      valid
    });
    this.props.onValid(valid ? password : null);
  }

  render() {
    const {
      password,
      confirm,
      errors
    } = this.state;
    let {
      newPassword
    } = this.props;
    let tabIndex = 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        "has-error": errors.size
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormItem, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate(newPassword ? "wallet.new_password" : "wallet.password")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "password",
      id: "current-password",
      autoComplete: "current-password",
      ref: "firstPassword",
      onChange: this.formChange.bind(this),
      value: password,
      tabIndex: tabIndex++
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormItem, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate(newPassword ? "wallet.new_confirm" : "wallet.confirm")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "password",
      id: "new-password",
      autoComplete: "new-password",
      onChange: this.formChange.bind(this),
      value: confirm,
      tabIndex: tabIndex++
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingBottom: 10
      }
    }, errors.get("password_match") || errors.get("password_length")), this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null));
  }

}

/***/ }),

/***/ 3011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WalletChangePassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2061);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(633);
/* harmony import */ var _PasswordConfirm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3012);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);








const FormItem = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Form.Item;
class WalletChangePassword extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      success: false
    };
  }

  onAccept(e) {
    e.preventDefault();
    var {
      old_password,
      new_password
    } = this.state;
    stores_WalletDb__WEBPACK_IMPORTED_MODULE_2__["default"].changePassword(old_password, new_password, true
    /*unlock*/
    ).then(() => {
      bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Notification.success({
        message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.password_change_success")
      });
      this.setState({
        success: true
      }); // window.history.back();
    }).catch(error => {
      // Programmer or database error ( validation missed something? )
      // .. translation may be unnecessary
      console.error(error);
      bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Notification.error({
        message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.password_change_failure", {
          error_msg: error
        })
      });
    });
  }

  onOldPassword(old_password) {
    this.setState({
      old_password
    });
  }

  onNewPassword(new_password) {
    this.setState({
      new_password
    });
  }

  _onCancel() {
    this.setState({
      old_password: ""
    });
    this.refs.pwd.cancel();
  }

  render() {
    var ready = !!this.state.new_password;
    let {
      success
    } = this.state;

    if (success) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "p",
        content: "wallet.change_success"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        component: "p",
        content: "wallet.change_backup"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
        to: "/wallet/backup/create"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Button, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "wallet.create_backup"
      }))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WalletPassword, {
      ref: "pwd",
      onValid: this.onOldPassword.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PasswordConfirm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onSubmit: this.onAccept.bind(this),
      newPassword: true,
      onValid: this.onNewPassword.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Button, {
      type: "primary",
      disabled: !ready,
      htmlType: "submit",
      style: {
        marginRight: "16px"
      },
      onClick: this.onAccept.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "wallet.accept"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Button, {
      onClick: this._onCancel.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "wallet.cancel"
    })))));
  }

}

class WalletPassword extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    onValid: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired)
  };

  constructor() {
    super();
    this.state = {
      password: "",
      verified: false
    };
  }

  cancel() {
    this.setState({
      verified: false,
      password: ""
    });
  }

  onPassword(e) {
    e.preventDefault();
    let {
      success
    } = stores_WalletDb__WEBPACK_IMPORTED_MODULE_2__["default"].validatePassword(this.state.password, true);

    if (success) {
      this.setState({
        verified: true
      });
      this.props.onValid(this.state.password);
    } else {
      bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Notification.error({
        message: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("notifications.invalid_password")
      });
    }
  }

  formChange(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  }

  render() {
    if (this.state.verified) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "grid-content"
      }, this.props.children);
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Form, {
        onSubmit: this.onPassword.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormItem, {
        label: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("wallet.current_pass")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Input, {
        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("wallet.current_pass"),
        type: "password",
        id: "password",
        autoComplete: "current-password",
        onChange: this.formChange.bind(this),
        value: this.state.password
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Button, {
        type: "primary",
        onClick: this.onPassword.bind(this),
        style: {
          marginTop: 10
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: "wallet.submit"
      }))));
    }
  }

}

class Reset extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    var label = this.props.label || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      content: "wallet.reset"
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "button outline",
      onClick: this.onReset.bind(this)
    }, label);
  }

  onReset() {
    window.history.back();
  }

}

/***/ }),

/***/ 2995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "WalletOptions": () => (/* binding */ WalletOptions),
/* harmony export */   "ChangeActiveWallet": () => (/* binding */ ChangeActiveWallet),
/* harmony export */   "WalletDelete": () => (/* binding */ WalletDelete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2061);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1804);
/* harmony import */ var actions_WalletActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1799);
/* harmony import */ var actions_BackupActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2484);
/* harmony import */ var stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1900);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2062);
/* harmony import */ var _ExistingAccount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2996);
/* harmony import */ var _ImportKeys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3005);
/* harmony import */ var _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2997);
/* harmony import */ var _WalletChangePassword__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3011);
/* harmony import */ var _WalletCreate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2543);
/* harmony import */ var _Backup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2523);
/* harmony import */ var _BackupBrainkey__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3013);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__);


















const FormItem = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Form.Item;
const Option = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Select.Option;
const connectObject = {
  listenTo() {
    return [stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    return stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState();
  }

};

class WalletManager extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  getTitle() {
    switch (this.props.location.pathname) {
      case "/wallet/create":
        return "wallet.create_wallet";
        break;

      case "/wallet/backup/create":
        return "wallet.create_backup";
        break;

      case "/wallet/backup/restore":
        return "wallet.restore_backup";
        break;

      case "/wallet/backup/brainkey":
        return "wallet.backup_brainkey";
        break;

      case "/wallet/delete":
        return "wallet.delete_wallet";
        break;

      case "/wallet/change-password":
        return "wallet.change_password";
        break;

      case "/wallet/import-keys":
        return "wallet.import_keys";
        break;

      default:
        return "wallet.console";
        break;
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container",
      style: {
        maxWidth: "40rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "page-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      component: "h3",
      content: this.getTitle()
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet",
      component: WalletOptions
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet/change",
      component: ChangeActiveWallet
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet/change-password",
      component: _WalletChangePassword__WEBPACK_IMPORTED_MODULE_11__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet/import-keys",
      component: _ImportKeys__WEBPACK_IMPORTED_MODULE_9__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet/brainkey",
      component: _ExistingAccount__WEBPACK_IMPORTED_MODULE_8__.ExistingAccountOptions
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet/create",
      component: _WalletCreate__WEBPACK_IMPORTED_MODULE_12__.WalletCreate
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet/delete",
      component: WalletDelete
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet/backup/restore",
      component: _Backup__WEBPACK_IMPORTED_MODULE_13__.BackupRestore
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet/backup/create",
      component: _Backup__WEBPACK_IMPORTED_MODULE_13__.BackupCreate
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet/backup/brainkey",
      component: _BackupBrainkey__WEBPACK_IMPORTED_MODULE_14__["default"]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      exact: true,
      path: "/wallet/balance-claims",
      component: _BalanceClaimActive__WEBPACK_IMPORTED_MODULE_10__["default"]
    }))))));
  }

}

WalletManager = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(WalletManager, connectObject);

class WalletOptions extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let has_wallet = !!this.props.current_wallet;
    let has_wallets = this.props.wallet_names.size > 1;
    let current_wallet = this.props.current_wallet ? this.props.current_wallet.toUpperCase() : "";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.active_wallet"
    }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, current_wallet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), has_wallets ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/wallet/change"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.change_wallet"
    }))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.import_keys_tool"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        visibility: "hidden"
      }
    }, "Dummy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), has_wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/wallet/import-keys"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.import_keys"
    }))) : null)), has_wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.balance_claims"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        visibility: "hidden"
      }
    }, "Dummy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/wallet/balance-claims"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.balance_claim_lookup"
    }))))) : null), has_wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/wallet/backup/create"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.create_backup"
    }))) : null, has_wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/wallet/backup/brainkey"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.backup_brainkey"
    }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/wallet/backup/restore"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.restore_backup"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), has_wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/wallet/create"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.new_wallet"
    }))), has_wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/wallet/delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.delete_wallet"
    }))) : null, has_wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/wallet/change-password"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "button outline success"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.change_password"
    }))) : null);
  }

}

WalletOptions = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(WalletOptions, connectObject);

class ChangeActiveWallet extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    let current_wallet = this.props.current_wallet;
    this.setState({
      current_wallet
    });
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (np.current_wallet !== this.state.current_wallet) {
      this.setState({
        current_wallet: np.current_wallet
      });
    }
  }

  render() {
    let state = stores_WalletManagerStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState();
    let options = [];
    state.wallet_names.forEach(wallet_name => {
      options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
        key: wallet_name,
        value: wallet_name
      }, wallet_name.toLowerCase()));
    });
    let is_dirty = this.state.current_wallet !== this.props.current_wallet;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormItem, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_7___default().translate("wallet.active_wallet"),
      className: "no-offset"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "unstyled-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "with-dropdown",
      style: {
        borderBottom: 0
      }
    }, state.wallet_names.count() <= 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Input, {
      className: "settings--input",
      defaultValue: this.state.current_wallet,
      disabled: true
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Select, {
      className: "settings--select",
      value: this.state.current_wallet,
      onChange: this.onChange.bind(this)
    }, options))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Link, {
      to: "/wallet/create"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Button, {
      style: {
        marginRight: "16px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.new_wallet"
    }))), is_dirty ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Button, {
      onClick: this.onConfirm.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: "wallet.change",
      name: this.state.current_wallet
    })) : null);
  }

  onConfirm() {
    actions_WalletActions__WEBPACK_IMPORTED_MODULE_2__["default"].setWallet(this.state.current_wallet);
    actions_BackupActions__WEBPACK_IMPORTED_MODULE_3__["default"].reset(); // if (window.electron) {
    //     window.location.hash = "";
    //     window.remote.getCurrentWindow().reload();
    // }
    // else window.location.href = "/";
  }

  onChange(value) {
    let current_wallet = value;
    this.setState({
      current_wallet
    });
  }

}

ChangeActiveWallet = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(ChangeActiveWallet, connectObject);

class WalletDelete extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      selected_wallet: null,
      confirm: 0
    };
  }

  _onCancel() {
    this.setState({
      confirm: 0,
      selected_wallet: null
    });
  }

  render() {
    if (this.state.confirm === 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          paddingTop: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "wallet.delete_confirm_line1"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        component: "p",
        content: "wallet.delete_confirm_line3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Button, {
        onClick: this.onConfirm2.bind(this),
        style: {
          marginRight: "16px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "wallet.delete_confirm_line4",
        name: this.state.selected_wallet
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Button, {
        onClick: this._onCancel.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
        content: "wallet.cancel"
      })));
    } // this.props.current_wallet


    let placeholder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
      key: "placeholder",
      value: " ",
      disabled: this.props.wallet_names.size > 1
    }, "\xA0"); // if (this.props.wallet_names.size > 1) {
    //     placeholder = <option value="" disabled>{placeholder}</option>;
    // }
    // else {
    //     //When disabled and list_size was 1, chrome was skipping the
    //     //placeholder and selecting the 1st item automatically (not shown)
    //     placeholder = <option value="">{placeholder}</option>;
    // }

    let options = [placeholder];
    options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
      key: "select_option",
      value: ""
    }, counterpart__WEBPACK_IMPORTED_MODULE_7___default().translate("settings.delete_select"), "\u2026"));
    this.props.wallet_names.forEach(wallet_name => {
      options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {
        key: wallet_name,
        value: wallet_name
      }, wallet_name.toLowerCase()));
    });
    let is_dirty = !!this.state.selected_wallet;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        paddingTop: 20
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormItem, {
      label: counterpart__WEBPACK_IMPORTED_MODULE_7___default().translate("wallet.delete_wallet"),
      className: "no-offset"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "unstyled-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "with-dropdown",
      style: {
        borderBottom: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Select, {
      className: "settings--select",
      value: this.state.selected_wallet || "",
      style: {
        margin: "0 auto"
      },
      onChange: this.onChange.bind(this)
    }, options))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_15__.Button, {
      disabled: !is_dirty,
      onClick: this.onConfirm.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_5___default()), {
      content: this.state.selected_wallet ? "wallet.delete_wallet_name" : "wallet.delete_wallet",
      name: this.state.selected_wallet
    })));
  }

  onConfirm() {
    this.setState({
      confirm: 1
    });
  }

  onConfirm2() {
    actions_WalletActions__WEBPACK_IMPORTED_MODULE_2__["default"].deleteWallet(this.state.selected_wallet);

    this._onCancel(); // window.history.back()

  }

  onChange(selected_wallet) {
    this.setState({
      selected_wallet
    });
  }

}

WalletDelete = (0,alt_react__WEBPACK_IMPORTED_MODULE_1__.connect)(WalletDelete, connectObject);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletManager);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYuOTY4MGU2Y2I5MmJhNGM5ODFlMGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBOztBQU9BO0FBQ0E7QUFJQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBT0E7O0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQVVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFLQTs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQWxLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTs7QUFPQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBYUE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFTQTs7QUF4R0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUhBO0FBUUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBS0E7O0FBRUE7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFNQTs7QUE5RkE7O0FBaUdBO0FBQ0E7QUFDQTtBQURBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBS0E7QUFDQTs7QUF2RUE7O0FBMEVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBTkE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQS9CQTtBQWlDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBV0E7O0FBL0dBOztBQWlIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBUUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQWVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU1BOztBQXJIQTs7QUF1SEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQVlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBUUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBN0ZBOztBQStGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFJQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBYUE7QUFDQTtBQUZBO0FBS0E7QUFLQTtBQU5BO0FBV0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBbklBOztBQXFJQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvV2FsbGV0L0JhY2t1cEJyYWlua2V5LmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9XYWxsZXQvUGFzc3dvcmRDb25maXJtLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9XYWxsZXQvV2FsbGV0Q2hhbmdlUGFzc3dvcmQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1dhbGxldC9XYWxsZXRNYW5hZ2VyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGb3JtYXR0ZWREYXRlfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IFdhbGxldEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0QWN0aW9uc1wiO1xuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcbmltcG9ydCB7aGFzaH0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge0NhcmQsIElucHV0LCBCdXR0b24sIE5vdGlmaWNhdGlvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrdXBCcmFpbmtleSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBfZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICBicmFpbmtleTogbnVsbCxcbiAgICAgICAgICAgIGludmFsaWRfcGFzc3dvcmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgY29udGVudDtcbiAgICAgICAgdmFyIGJyYWlua2V5X2JhY2t1cF9kYXRlID0gV2FsbGV0RGIuZ2V0V2FsbGV0KCkuYnJhaW5rZXlfYmFja3VwX2RhdGU7XG5cbiAgICAgICAgdmFyIGJyYWlua2V5X2JhY2t1cF90aW1lID0gYnJhaW5rZXlfYmFja3VwX2RhdGUgPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5icmFpbmtleV9iYWNrZWRfdXBcIiAvPjp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZERhdGUgdmFsdWU9e2JyYWlua2V5X2JhY2t1cF9kYXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjb2xvci1lcnJvclwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5icmFpbmtleV9ub3RfYmFja2VkX3VwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHZhciBzaGExID0gaGFzaFxuICAgICAgICAgICAgICAgIC5zaGExKHRoaXMuc3RhdGUuYnJhaW5rZXkpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKFwiaGV4XCIpXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZygwLCA0KTtcbiAgICAgICAgICAgIGNvbnRlbnQgPSAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJyYWlua2V5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+e3RoaXMuc3RhdGUuYnJhaW5rZXl9PC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhMSBoYXNoIG9mIHRoZSBicmFpbmtleToge3NoYTF9XG4gICAgICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge2JyYWlua2V5X2JhY2t1cF90aW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29udGVudCAmJiB0aGlzLnN0YXRlLmJyYWlua2V5KSB7XG4gICAgICAgICAgICB2YXIgc2hhMSA9IGhhc2hcbiAgICAgICAgICAgICAgICAuc2hhMSh0aGlzLnN0YXRlLmJyYWlua2V5KVxuICAgICAgICAgICAgICAgIC50b1N0cmluZyhcImhleFwiKVxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICAgICAgICBjb250ZW50ID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD57dGhpcy5zdGF0ZS5icmFpbmtleX08L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjEwcHggMFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIm5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhMSBoYXNoIG9mIHlvdXIgYnJhaW5rZXk6IHtzaGExfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IFwiMTBweCAwIDIwcHggMFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfdzFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfdzJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYnJhaW5rZXlfdzNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Db21wbGV0ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQudmVyaWZ5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT17XCJkZWZhdWx0XCJ9IG9uQ2xpY2s9e3RoaXMucmVzZXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgdmFyIHZhbGlkID0gdGhpcy5zdGF0ZS5wYXNzd29yZCAmJiB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSBcIlwiO1xuICAgICAgICAgICAgY29udGVudCA9IChcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmVudGVyX3Bhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lLWZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUGFzc3dvcmQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmFpbmtleV9iYWNrdXBfdGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnNob3dfYnJhaW5rZXlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1vdmVyZmxvd1wiPntjb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZShicm5rZXkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmVyaWZpZWQ6IHRydWV9KTtcbiAgICAgICAgV2FsbGV0QWN0aW9ucy5zZXRCcmFpbmtleUJhY2t1cERhdGUoKTtcbiAgICB9XG5cbiAgICByZXNldChlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9nZXRJbml0aWFsU3RhdGUoKSk7XG4gICAgfVxuXG4gICAgb25CYWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB3YXNfbG9ja2VkID0gV2FsbGV0RGIuaXNMb2NrZWQoKTtcbiAgICAgICAgbGV0IHtzdWNjZXNzfSA9IFdhbGxldERiLnZhbGlkYXRlUGFzc3dvcmQodGhpcy5zdGF0ZS5wYXNzd29yZCwgdHJ1ZSk7XG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICB2YXIgYnJhaW5rZXkgPSBXYWxsZXREYi5nZXRCcmFpbktleSgpO1xuICAgICAgICAgICAgaWYgKHdhc19sb2NrZWQpIFdhbGxldERiLm9uTG9jaygpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnJhaW5rZXl9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbi5lcnJvcih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwibm90aWZpY2F0aW9ucy5pbnZhbGlkX3Bhc3N3b3JkXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGFzc3dvcmQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCBjbmFtZSBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtGb3JtfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZENvbmZpcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIC8vIENhbGxlZCBldmVyeXRpbWUgYSB2YWxpZCBwYXNzd29yZCBpcyBwcm92aWRlZCBhbmQgbWF0Y2hlcyBhIGNvbmZpcm1lZCBwYXNzd29yZFxuICAgICAgICBvblZhbGlkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgICBjb25maXJtOiBcIlwiLFxuICAgICAgICAgICAgZXJyb3JzOiBJbW11dGFibGUuTWFwKCksXG4gICAgICAgICAgICAvLyBBbiBlbXB0eSBmb3JtIGhhcyBubyBlcnJvcnMgYnV0IGlzIHN0aWxsIGludmFpZFxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZnMuZmlyc3RQYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLmZpcnN0UGFzc3dvcmQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcm1DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IGtleSA9XG4gICAgICAgICAgICBldmVudC50YXJnZXQuaWQgPT09IFwiY3VycmVudC1wYXNzd29yZFwiID8gXCJwYXNzd29yZFwiIDogXCJjb25maXJtXCI7XG4gICAgICAgIGxldCBzdGF0ZSA9IHt9O1xuICAgICAgICBzdGF0ZVtrZXldID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlLCB0aGlzLnZhbGlkYXRlKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgbGV0IHtwYXNzd29yZCwgY29uZmlybX0gPSBzdGF0ZTtcbiAgICAgICAgY29uZmlybSA9IGNvbmZpcm0udHJpbSgpO1xuICAgICAgICBwYXNzd29yZCA9IHBhc3N3b3JkLnRyaW0oKTtcblxuICAgICAgICBsZXQgZXJyb3JzID0gSW1tdXRhYmxlLk1hcCgpO1xuICAgICAgICAvLyBEb24ndCByZXBvcnQgdW50aWwgdHlwaW5nIGJlZ2luc1xuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoICE9PSAwICYmIHBhc3N3b3JkLmxlbmd0aCA8IDgpXG4gICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMuc2V0KFxuICAgICAgICAgICAgICAgIFwicGFzc3dvcmRfbGVuZ3RoXCIsXG4gICAgICAgICAgICAgICAgXCJQYXNzd29yZCBtdXN0IGJlIDggY2hhcmFjdGVycyBvciBtb3JlXCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgLy8gRG9uJ3QgcmVwb3J0IGl0IHVudGlsIHRoZSBjb25maXJtIGlzIHBvcHVsYXRlZFxuICAgICAgICBpZiAocGFzc3dvcmQgIT09IFwiXCIgJiYgY29uZmlybSAhPT0gXCJcIiAmJiBwYXNzd29yZCAhPT0gY29uZmlybSlcbiAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycy5zZXQoXCJwYXNzd29yZF9tYXRjaFwiLCBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XG5cbiAgICAgICAgbGV0IHZhbGlkID0gcGFzc3dvcmQubGVuZ3RoID49IDggJiYgcGFzc3dvcmQgPT09IGNvbmZpcm07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9ycywgdmFsaWR9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblZhbGlkKHZhbGlkID8gcGFzc3dvcmQgOiBudWxsKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtwYXNzd29yZCwgY29uZmlybSwgZXJyb3JzfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7bmV3UGFzc3dvcmR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuYW1lKHtcImhhcy1lcnJvclwiOiBlcnJvcnMuc2l6ZX0pfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkID8gXCJ3YWxsZXQubmV3X3Bhc3N3b3JkXCIgOiBcIndhbGxldC5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJmaXJzdFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mb3JtQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkID8gXCJ3YWxsZXQubmV3X2NvbmZpcm1cIiA6IFwid2FsbGV0LmNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZvcm1DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206IDEwfX0+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZ2V0KFwicGFzc3dvcmRfbWF0Y2hcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5nZXQoXCJwYXNzd29yZF9sZW5ndGhcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuaW1wb3J0IFBhc3N3b3JkQ29uZmlybSBmcm9tIFwiLi9QYXNzd29yZENvbmZpcm1cIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7QnV0dG9uLCBGb3JtLCBJbnB1dCwgTm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsZXRDaGFuZ2VQYXNzd29yZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7c3VjY2VzczogZmFsc2V9O1xuICAgIH1cblxuICAgIG9uQWNjZXB0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIge29sZF9wYXNzd29yZCwgbmV3X3Bhc3N3b3JkfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIFdhbGxldERiLmNoYW5nZVBhc3N3b3JkKG9sZF9wYXNzd29yZCwgbmV3X3Bhc3N3b3JkLCB0cnVlIC8qdW5sb2NrKi8pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMucGFzc3dvcmRfY2hhbmdlX3N1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3VjY2VzczogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFByb2dyYW1tZXIgb3IgZGF0YWJhc2UgZXJyb3IgKCB2YWxpZGF0aW9uIG1pc3NlZCBzb21ldGhpbmc/IClcbiAgICAgICAgICAgICAgICAvLyAuLiB0cmFuc2xhdGlvbiBtYXkgYmUgdW5uZWNlc3NhcnlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMucGFzc3dvcmRfY2hhbmdlX2ZhaWx1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl9tc2c6IGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uT2xkUGFzc3dvcmQob2xkX3Bhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29sZF9wYXNzd29yZH0pO1xuICAgIH1cbiAgICBvbk5ld1Bhc3N3b3JkKG5ld19wYXNzd29yZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtuZXdfcGFzc3dvcmR9KTtcbiAgICB9XG5cbiAgICBfb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb2xkX3Bhc3N3b3JkOiBcIlwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVmcy5wd2QuY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgcmVhZHkgPSAhIXRoaXMuc3RhdGUubmV3X3Bhc3N3b3JkO1xuICAgICAgICBsZXQge3N1Y2Nlc3N9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbXBvbmVudD1cInBcIiBjb250ZW50PVwid2FsbGV0LmNoYW5nZV9zdWNjZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJwXCIgY29udGVudD1cIndhbGxldC5jaGFuZ2VfYmFja3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhY2t1cC9jcmVhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNyZWF0ZV9iYWNrdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPFdhbGxldFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cInB3ZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uVmFsaWQ9e3RoaXMub25PbGRQYXNzd29yZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25BY2NlcHQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bhc3N3b3JkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZD17dGhpcy5vbk5ld1Bhc3N3b3JkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFyZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxNnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY2NlcHQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuYWNjZXB0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2FuY2VsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1Bhc3N3b3JkQ29uZmlybT5cbiAgICAgICAgICAgICAgICA8L1dhbGxldFBhc3N3b3JkPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgV2FsbGV0UGFzc3dvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIG9uVmFsaWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIHZlcmlmaWVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2ZXJpZmllZDogZmFsc2UsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblBhc3N3b3JkKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQge3N1Y2Nlc3N9ID0gV2FsbGV0RGIudmFsaWRhdGVQYXNzd29yZCh0aGlzLnN0YXRlLnBhc3N3b3JkLCB0cnVlKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZlcmlmaWVkOiB0cnVlfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uVmFsaWQodGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIm5vdGlmaWNhdGlvbnMuaW52YWxpZF9wYXNzd29yZFwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3JtQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgICAgICBzdGF0ZVtldmVudC50YXJnZXQuaWRdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uUGFzc3dvcmQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIndhbGxldC5jdXJyZW50X3Bhc3NcIil9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXQuY3VycmVudF9wYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mb3JtQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25QYXNzd29yZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBSZXNldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsIHx8IDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5yZXNldFwiIC8+O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmVcIiBvbkNsaWNrPXt0aGlzLm9uUmVzZXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uUmVzZXQoKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgV2FsbGV0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRBY3Rpb25zXCI7XG5pbXBvcnQgQmFja3VwQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9CYWNrdXBBY3Rpb25zXCI7XG5pbXBvcnQgV2FsbGV0TWFuYWdlclN0b3JlIGZyb20gXCJzdG9yZXMvV2FsbGV0TWFuYWdlclN0b3JlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7RXhpc3RpbmdBY2NvdW50T3B0aW9uc30gZnJvbSBcIi4vRXhpc3RpbmdBY2NvdW50XCI7XG5pbXBvcnQgSW1wb3J0S2V5cyBmcm9tIFwiLi9JbXBvcnRLZXlzXCI7XG5pbXBvcnQgQmFsYW5jZUNsYWltQWN0aXZlIGZyb20gXCIuL0JhbGFuY2VDbGFpbUFjdGl2ZVwiO1xuaW1wb3J0IFdhbGxldENoYW5nZVBhc3N3b3JkIGZyb20gXCIuL1dhbGxldENoYW5nZVBhc3N3b3JkXCI7XG5pbXBvcnQge1dhbGxldENyZWF0ZX0gZnJvbSBcIi4vV2FsbGV0Q3JlYXRlXCI7XG5pbXBvcnQge0JhY2t1cENyZWF0ZSwgQmFja3VwUmVzdG9yZX0gZnJvbSBcIi4vQmFja3VwXCI7XG5pbXBvcnQgQmFja3VwQnJhaW5rZXkgZnJvbSBcIi4vQmFja3VwQnJhaW5rZXlcIjtcbmltcG9ydCB7Rm9ybSwgU2VsZWN0LCBJbnB1dCwgQnV0dG9uLCBDYXJkfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcblxuY29uc3QgY29ubmVjdE9iamVjdCA9IHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtXYWxsZXRNYW5hZ2VyU3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBXYWxsZXRNYW5hZ2VyU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG59O1xuXG5jbGFzcyBXYWxsZXRNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9jcmVhdGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuY3JlYXRlX3dhbGxldFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9iYWNrdXAvY3JlYXRlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2FsbGV0LmNyZWF0ZV9iYWNrdXBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIi93YWxsZXQvYmFja3VwL3Jlc3RvcmVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQucmVzdG9yZV9iYWNrdXBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIi93YWxsZXQvYmFja3VwL2JyYWlua2V5XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2FsbGV0LmJhY2t1cF9icmFpbmtleVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9kZWxldGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuZGVsZXRlX3dhbGxldFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiL3dhbGxldC9jaGFuZ2UtcGFzc3dvcmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3YWxsZXQuY2hhbmdlX3Bhc3N3b3JkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCIvd2FsbGV0L2ltcG9ydC1rZXlzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2FsbGV0LmltcG9ydF9rZXlzXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2FsbGV0LmNvbnNvbGVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIiBzdHlsZT17e21heFdpZHRoOiBcIjQwcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuZ2V0VGl0bGUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1dhbGxldE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2NoYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoYW5nZUFjdGl2ZVdhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvY2hhbmdlLXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17V2FsbGV0Q2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2ltcG9ydC1rZXlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SW1wb3J0S2V5c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYnJhaW5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtFeGlzdGluZ0FjY291bnRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldC9jcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtXYWxsZXRDcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCIvd2FsbGV0L2RlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1dhbGxldERlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYmFja3VwL3Jlc3RvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCYWNrdXBSZXN0b3JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldC9iYWNrdXAvY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17QmFja3VwQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPVwiL3dhbGxldC9iYWNrdXAvYnJhaW5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCYWNrdXBCcmFpbmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD1cIi93YWxsZXQvYmFsYW5jZS1jbGFpbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtCYWxhbmNlQ2xhaW1BY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5XYWxsZXRNYW5hZ2VyID0gY29ubmVjdChXYWxsZXRNYW5hZ2VyLCBjb25uZWN0T2JqZWN0KTtcblxuY2xhc3MgV2FsbGV0T3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgaGFzX3dhbGxldCA9ICEhdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldDtcbiAgICAgICAgbGV0IGhhc193YWxsZXRzID0gdGhpcy5wcm9wcy53YWxsZXRfbmFtZXMuc2l6ZSA+IDE7XG4gICAgICAgIGxldCBjdXJyZW50X3dhbGxldCA9IHRoaXMucHJvcHMuY3VycmVudF93YWxsZXRcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmFjdGl2ZV93YWxsZXRcIiAvPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2N1cnJlbnRfd2FsbGV0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0cyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2NoYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmNoYW5nZV93YWxsZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmltcG9ydF9rZXlzX3Rvb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Zpc2liaWxpdHk6IFwiaGlkZGVuXCJ9fT5EdW1teTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvaW1wb3J0LWtleXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5pbXBvcnRfa2V5c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5iYWxhbmNlX2NsYWltc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t2aXNpYmlsaXR5OiBcImhpZGRlblwifX0+RHVtbXk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3dhbGxldC9iYWxhbmNlLWNsYWltc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhbGFuY2VfY2xhaW1fbG9va3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxCYWxhbmNlQ2xhaW1CeUFzc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5iYWxhbmNlX2NsYWltc1wiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JhbGFuY2VDbGFpbUJ5QXNzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhY2t1cC9jcmVhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jcmVhdGVfYmFja3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhY2t1cC9icmFpbmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmJhY2t1cF9icmFpbmtleVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2JhY2t1cC9yZXN0b3JlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LnJlc3RvcmVfYmFja3VwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IDxiciAvPiA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvY3JlYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIG91dGxpbmUgc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0Lm5ld193YWxsZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICB7aGFzX3dhbGxldCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2RlbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gb3V0bGluZSBzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV93YWxsZXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHtoYXNfd2FsbGV0ID8gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi93YWxsZXQvY2hhbmdlLXBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBvdXRsaW5lIHN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQuY2hhbmdlX3Bhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxufVxuV2FsbGV0T3B0aW9ucyA9IGNvbm5lY3QoV2FsbGV0T3B0aW9ucywgY29ubmVjdE9iamVjdCk7XG5cbmNsYXNzIENoYW5nZUFjdGl2ZVdhbGxldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBsZXQgY3VycmVudF93YWxsZXQgPSB0aGlzLnByb3BzLmN1cnJlbnRfd2FsbGV0O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50X3dhbGxldH0pO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChucC5jdXJyZW50X3dhbGxldCAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudF93YWxsZXQ6IG5wLmN1cnJlbnRfd2FsbGV0fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IFdhbGxldE1hbmFnZXJTdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG4gICAgICAgIHN0YXRlLndhbGxldF9uYW1lcy5mb3JFYWNoKHdhbGxldF9uYW1lID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17d2FsbGV0X25hbWV9IHZhbHVlPXt3YWxsZXRfbmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIHt3YWxsZXRfbmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGlzX2RpcnR5ID0gdGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50X3dhbGxldDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmFjdGl2ZV93YWxsZXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1vZmZzZXRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcInVuc3R5bGVkLWxpc3RcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpdGgtZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlckJvdHRvbTogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUud2FsbGV0X25hbWVzLmNvdW50KCkgPD0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNldHRpbmdzLS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvd2FsbGV0L2NyZWF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiMTZweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ3YWxsZXQubmV3X3dhbGxldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIHtpc19kaXJ0eSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ29uZmlybS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmNoYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5jdXJyZW50X3dhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Db25maXJtKCkge1xuICAgICAgICBXYWxsZXRBY3Rpb25zLnNldFdhbGxldCh0aGlzLnN0YXRlLmN1cnJlbnRfd2FsbGV0KTtcbiAgICAgICAgQmFja3VwQWN0aW9ucy5yZXNldCgpO1xuICAgICAgICAvLyBpZiAod2luZG93LmVsZWN0cm9uKSB7XG4gICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgICAgIC8vICAgICB3aW5kb3cucmVtb3RlLmdldEN1cnJlbnRXaW5kb3coKS5yZWxvYWQoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRfd2FsbGV0ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRfd2FsbGV0fSk7XG4gICAgfVxufVxuQ2hhbmdlQWN0aXZlV2FsbGV0ID0gY29ubmVjdChDaGFuZ2VBY3RpdmVXYWxsZXQsIGNvbm5lY3RPYmplY3QpO1xuXG5jbGFzcyBXYWxsZXREZWxldGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRfd2FsbGV0OiBudWxsLFxuICAgICAgICAgICAgY29uZmlybTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9vbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb25maXJtOiAwLFxuICAgICAgICAgICAgc2VsZWN0ZWRfd2FsbGV0OiBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29uZmlybSA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV9jb25maXJtX2xpbmUxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2FsbGV0LmRlbGV0ZV9jb25maXJtX2xpbmUzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Db25maXJtMi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxNnB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndhbGxldC5kZWxldGVfY29uZmlybV9saW5lNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RlZF93YWxsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIndhbGxldC5jYW5jZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnByb3BzLmN1cnJlbnRfd2FsbGV0XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IChcbiAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICBrZXk9XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIgXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy53YWxsZXRfbmFtZXMuc2l6ZSA+IDF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgKTtcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMud2FsbGV0X25hbWVzLnNpemUgPiAxKSB7XG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlciA9IDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD57cGxhY2Vob2xkZXJ9PC9vcHRpb24+O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgLy9XaGVuIGRpc2FibGVkIGFuZCBsaXN0X3NpemUgd2FzIDEsIGNocm9tZSB3YXMgc2tpcHBpbmcgdGhlXG4gICAgICAgIC8vICAgICAvL3BsYWNlaG9sZGVyIGFuZCBzZWxlY3RpbmcgdGhlIDFzdCBpdGVtIGF1dG9tYXRpY2FsbHkgKG5vdCBzaG93bilcbiAgICAgICAgLy8gICAgIHBsYWNlaG9sZGVyID0gPG9wdGlvbiB2YWx1ZT1cIlwiPntwbGFjZWhvbGRlcn08L29wdGlvbj47XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbcGxhY2Vob2xkZXJdO1xuICAgICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgICAgICA8T3B0aW9uIGtleT1cInNlbGVjdF9vcHRpb25cIiB2YWx1ZT1cIlwiPlxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJzZXR0aW5ncy5kZWxldGVfc2VsZWN0XCIpfVxuICAgICAgICAgICAgICAgICZoZWxsaXA7XG4gICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9wcy53YWxsZXRfbmFtZXMuZm9yRWFjaCh3YWxsZXRfbmFtZSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3dhbGxldF9uYW1lfSB2YWx1ZT17d2FsbGV0X25hbWV9PlxuICAgICAgICAgICAgICAgICAgICB7d2FsbGV0X25hbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgaXNfZGlydHkgPSAhIXRoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogMjB9fT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwid2FsbGV0LmRlbGV0ZV93YWxsZXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1vZmZzZXRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcInVuc3R5bGVkLWxpc3RcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpdGgtZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlckJvdHRvbTogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZXR0aW5ncy0tc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiMCBhdXRvXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNfZGlydHl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Db25maXJtLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwid2FsbGV0LmRlbGV0ZV93YWxsZXRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ3YWxsZXQuZGVsZXRlX3dhbGxldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLnNlbGVjdGVkX3dhbGxldH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQ29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZmlybTogMX0pO1xuICAgIH1cblxuICAgIG9uQ29uZmlybTIoKSB7XG4gICAgICAgIFdhbGxldEFjdGlvbnMuZGVsZXRlV2FsbGV0KHRoaXMuc3RhdGUuc2VsZWN0ZWRfd2FsbGV0KTtcbiAgICAgICAgdGhpcy5fb25DYW5jZWwoKTtcbiAgICAgICAgLy8gd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoc2VsZWN0ZWRfd2FsbGV0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkX3dhbGxldH0pO1xuICAgIH1cbn1cbldhbGxldERlbGV0ZSA9IGNvbm5lY3QoV2FsbGV0RGVsZXRlLCBjb25uZWN0T2JqZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgV2FsbGV0TWFuYWdlcjtcbmV4cG9ydCB7V2FsbGV0T3B0aW9ucywgQ2hhbmdlQWN0aXZlV2FsbGV0LCBXYWxsZXREZWxldGV9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9