"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[0],{

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

/***/ 3396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(607);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1816);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2088);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(589);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(605);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(437);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1939);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1825);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(606);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2087);

















const MAX_LOOKUP_ATTEMPTS = 5;
/*
 * @brief Allows the user to enter an account by name or #ID
 *
 * This component is designed to be stateless as possible.  It's primary responsbility is to
 * manage the layout of data and to filter the user input.
 *
 */

class AccountSelectorListing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    label: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    // a translation key for the label
    error: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().element),
    // the error message override
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    // the placeholder text to be displayed when there is no user_input
    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),
    // a method to be called any time user input changes
    onAccountChanged: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),
    // a method to be called when existing account is selected
    onAction: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().func),
    // a method called when Add button is clicked
    accountName: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string),
    // the current value of the account selector, the string the user enters
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__["default"].ChainAccount,
    // account object retrieved via BindToChainState decorator (not input)
    tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().number),
    // tabindex property to be passed to input tag
    disableActionButton: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    // use it if you need to disable action button,
    allowUppercase: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    // use it if you need to allow uppercase letters
    typeahead: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    excludeAccounts: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().array),
    // array of accounts to exclude from the typeahead
    focus: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    editable: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    locked: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    requireActiveSelect: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool),
    noForm: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool)
  };
  static defaultProps = {
    autosubscribe: false,
    excludeAccounts: [],
    disabled: null,
    editable: null,
    locked: false,
    requireActiveSelect: true,
    // Should not be set to false, required for fallback
    noForm: false
  };

  constructor(props) {
    super(props);
    this.state = {
      accountIndex: [],
      locked: null
    };
    this.timer = null;
  }

  componentDidMount() {
    let {
      account,
      accountName
    } = this.props; // Populate account search array, fetch only once

    if (accountName) {
      this._addThisToIndex(accountName);
    }

    this.props.myActiveAccounts.map(a => {
      this._addThisToIndex(a);
    });
    this.props.contacts.map(a => {
      this._addThisToIndex(a);
    });

    this._fetchAccounts();

    if (this.props.onAccountChanged && account) this.props.onAccountChanged(account);
    if (!this.props.typeahead && accountName) this.onInputChanged(accountName);
  }

  componentDidUpdate(prevProps) {
    if (this.props.focus && !!this.props.editable && !this.props.disabled) {
      this.refs.user_input.focus();
    }

    if (prevProps.account && prevProps.account !== this.props.account) {
      if (this.props.onAccountChanged) {
        this.props.onAccountChanged(this.props.account);
      }
    }
  }

  _addToIndex(accountName, noDelay = false) {
    if (noDelay) {
      this._addThisToIndex(accountName);

      this._fetchAccounts();
    } else {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this._addToIndex(accountName, true);
      }, 500);
    }
  }

  _addThisToIndex(accountName) {
    let {
      accountIndex
    } = this.state;
    if (!accountName) return;
    let inAccountList = accountIndex.find(a => a.name === accountName);

    if (accountName && !inAccountList) {
      accountIndex.push({
        name: accountName,
        data: null,
        attempts: 0
      });
    }
  }

  _getIndex(name, index) {
    return index.findIndex(a => a.name === name);
  }

  _getSearchArray() {
    let {
      accountIndex
    } = this.state; // For all objects in search_array, query with FetchChainObjects
    // Update results for each object with returned data and remove from search_array
    // Update search_array for all remaining objects with increased attempts count
    // which is when account does not exists, but can also be if node failed to send results
    // back in time, so we query at least `MAX_LOOKUP_ATTEMPTS` times before we stop
    // Filter out what objects we still require data for

    let search_array = accountIndex.filter(search => {
      return !search.data && search.attempts < MAX_LOOKUP_ATTEMPTS ? search.name : null;
    }).map(search => {
      return search.name;
    });
    return search_array;
  }

  _fetchAccounts() {
    let {
      accountIndex
    } = this.state;

    let search_array = this._getSearchArray();

    if (search_array.length > 0) {
      if (false) {}
      (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.FetchChainObjects)(bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getAccount, search_array, 3000, {}).then(accounts => {
        accounts.forEach(account => {
          if (account) {
            let objectIndex = this._getIndex(account.get("name"), accountIndex);

            let result = this._populateAccountIndex(account);

            if (result) {
              accountIndex[objectIndex] = result;
              search_array.splice(account.get("name"));
            }
          }
        });
        search_array.forEach(account_to_find => {
          let objectIndex = this._getIndex(account_to_find, accountIndex);

          accountIndex[objectIndex].attempts++;
        });
        this.setState({
          accountIndex: accountIndex
        }); // Run another fetch of accounts if data is still missing

        let isDataMissing = this.state.accountIndex.find(a => !a.data && a.attempts < MAX_LOOKUP_ATTEMPTS);

        if (isDataMissing) {
          setTimeout(() => {
            this._fetchAccounts();
          }, 500);
        }
      });
    }
  }

  _populateAccountIndex(accountResult) {
    let {
      myActiveAccounts,
      contacts
    } = this.props; // Should not happen, just failsafe

    if (!accountResult) return null;
    let accountName = accountResult.get("name");
    let accountStatus = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainStore.getAccountMemberStatus(accountResult);
    let accountType = this.getInputType(accountName);
    let statusLabel = !common_account_utils__WEBPACK_IMPORTED_MODULE_12__["default"].isKnownScammer(accountName) ? counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.member." + accountStatus) : counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.member.suspected_scammer");
    let rightLabel = accountType === "name" ? "#" + accountResult.get("id").substring(4) : accountType === "id" ? accountResult.get("name") : accountType == "pubkey" && this.props.allowPubKey ? "Public Key" : null;
    return {
      name: accountName,
      attempts: 0,
      data: {
        id: accountResult.get("id"),
        name: accountName,
        type: accountType,
        status: accountStatus,
        isOwnAccount: myActiveAccounts.has(accountName),
        isContact: contacts.has(accountName),
        isKnownScammer: common_account_utils__WEBPACK_IMPORTED_MODULE_12__["default"].isKnownScammer(accountName),
        statusLabel: statusLabel,
        rightLabel: rightLabel,
        className: common_account_utils__WEBPACK_IMPORTED_MODULE_12__["default"].isKnownScammer(accountName) || !accountResult ? "negative" : null
      }
    };
  } // can be used in parent component: this.refs.account_selector.getAccount()


  getAccount() {
    return this.props.account;
  }

  getError() {
    let {
      account,
      accountName,
      error,
      typeahead
    } = this.props;
    let inputType = accountName ? this.getInputType(accountName) : null;

    if (!typeahead) {
      if (!account && accountName && inputType !== "pubkey") {
        error = counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.errors.unknown");
      }
    } else {// Typeahead can't select an unknown account!
      // if (
      //     !(allowPubKey && inputType === "pubkey") &&
      //     !error &&
      //     accountName &&
      //     !account
      // )
      //     error = counterpart.translate("account.errors.unknown");
    }

    if (!error && account && !inputType) error = counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.errors.invalid");
    return error;
  }

  getInputType(value) {
    // OK
    if (!value) return null;
    if (value[0] === "#" && common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].is_object_id("1.2." + value.substring(1))) return "id";
    if (bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.ChainValidation.is_account_name(value, true)) return "name";
    if (this.props.allowPubKey && bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.PublicKey.fromPublicKeyString(value)) return "pubkey";
    return null;
  }

  getVerifiedAccountName(e) {
    let {
      allowUppercase
    } = this.props;
    let value = null;

    if (typeof e === "string") {
      value = e;
    } else if (e && e.target) {
      value = e.target.value.trim();
    } else {
      value = "";
    }

    if (!allowUppercase) value = value.toLowerCase(); // If regex matches ^.*#/account/account-name/.*$, parse out account-name

    let _value = value.replace("#", "").match(/(?:\/account\/)(.*)/);

    if (_value) value = _value[1];
    return value;
  }

  _notifyOnChange(selectedAccountName, inputType) {
    let {
      props
    } = this; // Clear selected account when we have new input data if we require an active select

    if (inputType == "input" && this.props.typeahead && this.props.requireActiveSelect) {
      if (!!props.onAccountChanged) {
        props.onAccountChanged(null);
      }

      if (!!props.onChange) {
        props.onChange(null);
      }
    }

    let accountName = this.getVerifiedAccountName(selectedAccountName); // Synchronous onChange for input change

    if (!!props.onChange && (!!accountName || accountName === "")) {
      props.onChange(accountName);
    } // asynchronous onAccountChanged for checking on chain


    if (!!props.onAccountChanged) {
      (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_7__.FetchChain)("getAccount", accountName, undefined, {
        [accountName]: false
      }).then(account => {
        if (!!account && (this.props.requireActiveSelect && inputType == "select" || !this.props.requireActiveSelect)) {
          props.onAccountChanged(account);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }

  onSelect(selectedAccountName) {
    this._notifyOnChange(selectedAccountName, "select");
  }

  onInputChanged(e) {
    this._addToIndex(this.getVerifiedAccountName(e));

    this._notifyOnChange(e, "input");
  }

  onKeyDown(e) {
    if (e.keyCode === 13 || e.keyCode === 9) {
      this.onAction(e);
    }
  }

  _onAddContact() {
    actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__["default"].addAccountContact(this.props.accountName);
  }

  _onRemoveContact() {
    actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__["default"].removeAccountContact(this.props.accountName);
  }

  onAction(e) {
    let {
      onAction,
      disableActionButton,
      account,
      accountName
    } = this.props;
    e.preventDefault();

    if (!this.getError() && onAction && !disableActionButton) {
      if (account) onAction(account);else if (this.getInputType(accountName) === "pubkey") onAction(accountName);
    }
  }

  render() {
    let {
      accountIndex
    } = this.state;
    let {
      account,
      accountName,
      disableActionButton
    } = this.props;
    let searchInProgress = this.state.accountIndex.find(a => !a.data && a.attempts < MAX_LOOKUP_ATTEMPTS);
    const lockedState = this.state.locked !== null ? this.state.locked : this.props.locked;
    let error = this.getError(),
        formContainer,
        selectedAccount,
        disabledAction,
        disabledInput,
        editableInput,
        linked_status;
    editableInput = !!lockedState ? false : this.props.editable != null ? this.props.editable : undefined;
    disabledInput = !!lockedState ? true : this.props.disabled != null ? this.props.disabled : undefined; // Selected Account

    if (account) {
      let objectIndex = this._getIndex(account.get("name"), accountIndex);

      selectedAccount = accountIndex && accountIndex[objectIndex] ? accountIndex[objectIndex].data : null;
    }

    disabledAction = !(account || selectedAccount && selectedAccount.type === "pubkey") || error || disableActionButton;

    if (selectedAccount && selectedAccount.isOwnAccount) {
      linked_status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
        placement: "top",
        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("tooltip.own_account")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "tooltip green"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
        type: "user"
      })));
    } else if (selectedAccount && selectedAccount.isKnownScammer) {
      linked_status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
        placement: "top",
        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("tooltip.scam_account")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "tooltip red"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
        type: "warning",
        theme: "filled"
      })));
    } else if (selectedAccount && selectedAccount.isContact) {
      linked_status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
        placement: "top",
        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("tooltip.follow_user"),
        onClick: this._onRemoveContact.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "tooltip green"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
        type: "star",
        theme: "filled"
      })));
    } else if (selectedAccount) {
      linked_status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
        placement: "top",
        title: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("tooltip.follow_user_add"),
        onClick: this._onAddContact.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "tooltip"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
        type: "star"
      })));
    }

    if (this.props.typeahead) {
      let optionsContainer = accountIndex.filter(account => {
        // Filter accounts based on
        // - Exclude without results (missing chain data at the moment)
        // - Excluded accounts (by props)
        // - Include users own accounts (isOwnAccount)
        // - Include users contacts (isContact) unless it's a previously locked input
        // - Include current input
        if (!account.data) {
          return null;
        }

        if (this.props.excludeAccounts.indexOf(account.id) !== -1) {
          return null;
        }

        if (account.data.isOwnAccount || !this.props.locked && account.data.isContact || accountName && account.data.name === accountName) {
          return account;
        }
      }).sort((a, b) => {
        if (a.data.isOwnAccount < b.data.isOwnAccount) {
          if (a.data.name > b.data.name) {
            return 1;
          } else {
            return -1;
          }
        } else {
          return -1;
        }
      }).map(account => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Select.Option, {
          key: account.data.id,
          value: account.data.name,
          disabled: account.data.disabled ? true : undefined
        }, account.data.isOwnAccount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
          type: "user"
        }) : null, account.data.isContact ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
          type: "star"
        }) : null, account.data.isKnownScammer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
          type: "warning"
        }) : null, "\xA0", account.data.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          style: {
            float: "right"
          }
        }, account.data.statusLabel));
      });
      formContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Select, {
        showSearch: true,
        optionLabelProp: "value",
        onSelect: this.onSelect.bind(this),
        onSearch: this.onInputChanged.bind(this),
        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.search"),
        notFoundContent: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("global.not_found"),
        value: selectedAccount ? selectedAccount.name : null,
        disabled: disabledInput ? true : undefined
      }, optionsContainer);
    } else {
      formContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Input, {
        style: {
          textTransform: selectedAccount && selectedAccount.type === "pubkey" ? null : "lowercase",
          fontVariant: "initial"
        },
        name: "username",
        id: "username",
        autoComplete: !!this.props.editable ? "username" : undefined,
        type: "text",
        value: this.props.accountName || "",
        placeholder: this.props.placeholder || counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("account.name"),
        disabled: this.props.disabled ? true : undefined,
        ref: "user_input",
        onChange: this.onInputChanged.bind(this),
        onKeyDown: this.onKeyDown.bind(this),
        tabIndex: !this.props.editable || !!this.props.disabled ? -1 : this.props.tabIndex,
        editable: !!editableInput ? editableInput.toString() : undefined,
        readOnly: !!editableInput ? (!editableInput).toString() : undefined
      });
    }

    let accountImageContainer = this.props.hideImage ? null : selectedAccount && selectedAccount.accountType === "pubkey" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "account-image"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "key",
      title: "icons.key",
      size: "4x"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: {
        height: this.props.size || 33,
        width: this.props.size || 33
      },
      account: selectedAccount ? selectedAccount.name : null,
      custom_image: null
    });
    let lockedStateContainer = !lockedState ? null : "";
    let rightLabelContainer = !this.props.label || !selectedAccount ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "header-area" + (this.props.hideImage ? " no-margin" : "")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: classnames__WEBPACK_IMPORTED_MODULE_13___default()("right-label", selectedAccount.isContact || selectedAccount.isOwnAccount ? "positive" : null, selectedAccount.isKnownScammer ? "negative" : null),
      style: {
        marginTop: -30
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        paddingRight: "0.5rem"
      }
    }, selectedAccount.rightLabel, "\xA0", selectedAccount.displayText), linked_status));
    const FormWrapper = this.props.noForm ? react__WEBPACK_IMPORTED_MODULE_0__.Fragment : bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Form;
    const formWrapperProps = this.props.noForm ? {} : {
      className: "full-width",
      layout: "vertical",
      style: this.props.style
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
      className: "input-area",
      title: this.props.tooltip,
      mouseEnterDelay: 0.5
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormWrapper, formWrapperProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Form.Item, {
      label: this.props.label ? counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate(this.props.label) : "",
      validateStatus: error ? "error" : null,
      help: error ? error : null
    }, rightLabelContainer, this.props.useHR && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "inline-label input-wrapper"
    }, accountImageContainer, formContainer, searchInProgress ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Icon, {
      type: "loading",
      style: {
        padding: 10
      }
    }) : null, lockedStateContainer, this.props.children, this.props.onAction ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("tooltip.required_input", {
        type: counterpart__WEBPACK_IMPORTED_MODULE_10___default().translate("global.field_type.account")
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__.Button, {
      type: "primary",
      disabled: disabledAction,
      onClick: this.onAction.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_6___default()), {
      content: this.props.action_label
    }))) : null))));
  }

}

AccountSelectorListing = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__["default"])(AccountSelectorListing);
AccountSelectorListing = (0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(AccountSelectorListing, {
  listenTo() {
    return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    return {
      myActiveAccounts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().myActiveAccounts,
      contacts: stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().accountContacts
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountSelectorListing);

/***/ }),

/***/ 3392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3393);
/* harmony import */ var _DonateSendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3395);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(656);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1816);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(589);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);









class CoinCardListing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.props.coin.votes = 0;
  }

  triggerSend(asset) {
    this.setState({
      send_asset: asset
    }, () => {
      if (this.send_modal) this.send_modal.show();
    });
  }

  render() {
    let from_name = "";

    try {
      this.props.account.get("name");
    } catch (e) {}

    let {
      coin
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DonateSendModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "send_modal_listing",
      refCallback: e => {
        if (e) this.send_modal = e;
      },
      from_name: this.props.currentAccount ? this.props.currentAccount : this.props.account,
      to_name: coin.account ? coin.account : from_name,
      asset_id: "1.3.2",
      ticker: coin.ticker
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAsset"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableRank align-center"
    }, this.props.rank), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableLogo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "align-center",
      style: {
        maxWidth: 40
      },
      src: `${""}coins-logo/${coin.ticker.toLowerCase()}.png`,
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableAssetName align-left nowrap"
    }, coin.name, " (", coin.ticker, ")", coin.soon === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.table.coming_soon",
      style: {
        float: "right",
        color: "gold"
      }
    }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableLogo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      href: coin.page,
      content: "listing.goto",
      component: "a",
      target: "_blank"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoData"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableGoal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoBlock"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.table.goal"
    }), ":\xA0", " "), coin.goal), coin.listed ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableVotes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoBlock"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.table.donates"
    }), ":\xA0"), coin.votes, coin.soon === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "coin-soon",
      onClick: this.triggerSend.bind(this, "1.3.2", coin),
      disabled: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.donate"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Button, {
      title: "Donate",
      onClick: this.triggerSend.bind(this, "1.3.2", coin)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.donate"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableStatus"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoBlock"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.table.status"
    }), ":\xA0", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_7___default()), {
      content: "listing.table." + coin.status
    }))), coin.listed ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableProgress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DonutChart__WEBPACK_IMPORTED_MODULE_1__.DonutChart, {
      votes: coin.votes_for_percent,
      goal: coin.goal
    })))));
  }

}

CoinCardListing = (0,alt_react__WEBPACK_IMPORTED_MODULE_5__.connect)(CoinCardListing, {
  listenTo() {
    return [_stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"], _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"]];
  },

  getProps() {
    return {
      settings: _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().settings,
      currentAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().passwordAccount
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinCardListing);

/***/ }),

/***/ 3395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2284);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Modal_SendModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2059);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(589);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1816);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(437);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2060);
/* harmony import */ var _AccountSelectorListing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3396);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2071);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2093);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(621);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(637);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















class DonateSendModal extends _Modal_SendModal__WEBPACK_IMPORTED_MODULE_1__.SendModal {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (np.to_name !== this.state.to_name) {
      this.setState({
        to_name: np.to_name ? np.to_name : "",
        to_account: np.to_name ? bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getAccount(np.to_name) : null
      });
    }
  }

  render() {
    let {
      propose,
      from_account,
      to_account,
      asset,
      asset_id,
      propose_account,
      feeAmount,
      amount,
      to_name,
      from_name,
      memo,
      balanceError,
      hidden
    } = this.state;
    let from_my_account = _stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"].isMyAccount(from_account) || from_name === this.props.passwordAccount;
    let from_error = from_account && !from_my_account && !propose ? true : false;

    let {
      asset_types
    } = this._getAvailableAssets();

    let balance = null;

    if (from_account && from_account.get("balances") && !from_error) {
      let account_balances = from_account.get("balances").toJS();

      let _error = this.state.balanceError ? "has-error" : "";

      if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_5__.ChainStore.getAsset(asset_types[0]);

      if (asset_types.length > 0) {
        let current_asset_id = asset ? asset.get("id") : asset_types[0];
        balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          component: "span",
          content: "transfer.available"
        }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: _error,
          style: {
            borderBottom: "#A09F9F 1px dotted",
            cursor: "pointer"
          },
          onClick: this._setTotal.bind(this, current_asset_id, account_balances[current_asset_id], feeAmount.getAmount({
            real: true
          }), feeAmount.asset_id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
          balance: account_balances[current_asset_id]
        })));
      } else {
        balance = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: _error
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
          content: "transfer.errors.noFunds"
        })));
      }
    }

    let propose_incomplete = propose && !propose_account;
    const amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
    const isAmountValid = amountValue && !(0,lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_14__["default"])(amountValue);
    const isSubmitNotValid = !from_account || !to_account || !isAmountValid || !asset || from_error || propose_incomplete || balanceError || from_account.get("id") == to_account.get("id");
    let tabIndex = this.props.tabIndex; // Continue tabIndex on props count

    return !this.state.open ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "send_modal_wrapper",
      className: hidden || !this.state.open ? "hide" : ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Modal, {
      visible: this.state.isModalVisible,
      id: this.props.id,
      overlay: true,
      onCancel: this.hideModal,
      footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
        key: "send",
        disabled: isSubmitNotValid,
        onClick: !isSubmitNotValid ? this.onSubmit.bind(this) : null
      }, propose ? counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("propose") : counterpart__WEBPACK_IMPORTED_MODULE_9___default().translate("transfer.send")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
        key: "Cancel",
        tabIndex: tabIndex++,
        onClick: this.onClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "span",
        content: "transfer.cancel"
      }))]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical no-overflow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block",
      style: {
        textAlign: "center",
        fontSize: "18px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_2___default())
    /*                                content={
        !!isSubmitNotValid
            ? "listing.modal_header"
            : "listing.modal.need_buy_donate"
    }*/
    , {
      content: "listing.modal.header2",
      wallet_name: (0,_branding__WEBPACK_IMPORTED_MODULE_12__.getWalletName)()
    }), this.props.ticker), this.state.open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Form, {
      className: "full-width-wrapper",
      layout: "vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccountSelectorListing__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: "transfer.from",
      accountName: from_name,
      account: from_account,
      onChange: this.fromChanged.bind(this),
      onAccountChanged: this.onFromAccountChanged.bind(this),
      typeahead: true,
      tabIndex: tabIndex++,
      locked: true,
      noForm: true //onAction={false}

    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AccountSelectorListing__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: "transfer.to",
      accountName: to_name,
      account: to_account,
      onChange: this.toChanged.bind(this),
      onAccountChanged: this.onToAccountChanged.bind(this),
      typeahead: true,
      tabIndex: tabIndex++,
      locked: true,
      noForm: true //editable={false}

    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: "transfer.amount",
      amount: amount,
      onChange: this.onAmountChanged.bind(this),
      asset: asset_types.length > 0 && asset ? asset.get("id") : asset_id ? asset_id : asset_types[0] //assets={asset_types}
      ,
      display_balance: balance,
      tabIndex: tabIndex++,
      allowNaN: true,
      locked: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
      account: from_account,
      transaction: {
        type: "transfer",
        options: ["price_per_kbyte"],
        data: {
          type: "memo",
          content: memo
        }
      },
      onChange: this.onFeeChanged.bind(this),
      tabIndex: tabIndex++
    })) : null)));
  }

}

class DonateSendModalConnectWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DonateSendModal, _extends({}, this.props, {
      ref: this.props.refCallback
    }));
  }

}

DonateSendModalConnectWrapper = (0,alt_react__WEBPACK_IMPORTED_MODULE_4__.connect)(DonateSendModalConnectWrapper, {
  listenTo() {
    return [_stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
  },

  getProps(props) {
    return {
      currentAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().currentAccount,
      passwordAccount: _stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().passwordAccount,
      tabIndex: props.tabIndex || 0
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonateSendModalConnectWrapper);

/***/ }),

/***/ 3393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonutChart": () => (/* binding */ DonutChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _DonutChart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3394);


const DonutChart = props => {
  const percent = Math.round(props.votes / props.goal * 100);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 32 32",
    className: "chart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    className: "donut-hole",
    r: "16",
    cx: "16",
    cy: "16",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    className: "donut-ring",
    r: "16",
    cx: "16",
    cy: "16",
    fill: "none",
    stroke: "lightgray",
    strokeWidth: "8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    className: "donut-segment",
    r: "16",
    cx: "16",
    cy: "16",
    fill: "none",
    stroke: "green",
    strokeWidth: "8",
    style: {
      strokeDasharray: `${percent} 100`
    },
    strokeDashoffset: "0"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "inside"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "percent"
  }, percent + "%")));
};

/***/ }),

/***/ 3390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3391);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(521);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(437);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CoinCardListing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3392);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(621);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2809);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2677);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2073);
/* harmony import */ var _stores_IntlStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2598);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1917);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1816);
















class ListingPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListingNotice1Informed: false,
      coins: [],
      updating: true,
      currentLocale: this.props.currentLocale
    };
    this.data = {
      "links": {
        "agreement_ru": "https://rudex.freshdesk.com/support/solutions/articles/35000138247-cоглашение-об-оказании-услуг-шлюза",
        "agreement_en": "https://rudex.freshdesk.com/support/solutions/articles/35000138245-gateway-service-agreement"
      },
      "donateTokenName": "DONATE",
      "donateMarket": "DONATE_RUDEX.USDT"
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentLocale !== this.state.currentLocale) {
      this.setState({
        currentLocale: nextProps.currentLocale
      });
    }
  }

  onSubmitRequest(e) {
    e.preventDefault();
    this.setState({
      error: null
    });
    let link_ru = "https://docs.google.com/forms/d/1lJnvufc95CDh2z1Ntq7iCSEs3oD7tPG4nljKTYYezQw";
    let link_en = "https://docs.google.com/forms/d/1X2PguAaRzxlXZGLAarGcmNd-LbJCy8lcoMBcQjFSQ5k";
    window.open(this.state.currentLocale == "ru" ? link_ru : link_en, "_blank");
  }

  onListingNotice1Informed() {
    this.setState({
      ListingNotice1Informed: !this.state.ListingNotice1Informed
    });
  }

  componentDidMount() {
    setInterval(() => this._getBalances(), 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.updating == false) return true;
    return false;
  }

  _getBalances() {
    let coins = (0,_branding__WEBPACK_IMPORTED_MODULE_6__.getListingCoins)();
    if (this.state.coins.length !== 0) coins = this.state.coins;
    this.setState({
      coins: coins,
      updating: true
    });
    coins.forEach(coin => {
      (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.FetchChain)("getAsset", this.data.donateTokenName).then(assetInfo => {
        bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__.Apis.instance().db_api().exec("get_named_account_balances", [coin.account, [assetInfo.get("id")]]).then(res => {
          let coins = this.state.coins;
          let x = coins.find(i => i.account === coin.account);
          x.votes = res[0]["amount"] / Math.pow(10, assetInfo.get("precision"));
          this.setState({
            coins: coins
          });
        }).then(() => {
          this.setState({
            updating: false
          });
        });
      });
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, this.state.updating === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_12__["default"], {
      loadingText: counterpart__WEBPACK_IMPORTED_MODULE_4___default().translate("footer.loading")
    }) : this.getTableTabs());
  }

  getContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem"
      },
      to: `/market/${this.data.donateMarket}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.get_donate_tokens"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        margin: 2,
        fontSize: "1.0rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      maxWidth: 25,
      replaceNoneToBts: false,
      name: this.data.donateTokenName
    }), this.data.donateTokenName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.token"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableRank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.rank"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableLogo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableAssetName align-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.asset_name"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoData"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableVotes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.goal"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableGoal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.donates"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableStatus"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.status"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableProgress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.progress"
    })))), this.getCoinsList());
  }

  getContent_listed = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableRank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.rank"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableLogo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableAssetName align-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.asset_name"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoData"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableVotes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.goal"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableStatus"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.table.status"
    }))))), this.getCoinsList_listed());
  };
  getCoinsList = () => {
    let {
      coins
    } = this.state;
    let sortedCoins = coins.sort((a, b) => {
      return b.votes - a.votes;
    });
    return sortedCoins.map((coin, i) => {
      coin.votes_for_percent = coin.votes < coin.goal ? coin.votes : coin.goal;
      coin.status = coin.votes < coin.goal ? "collecting" : "done";
      coin.soon == true ? coin.status = "waiting" : coin.soon;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CoinCardListing__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: i,
        rank: i + 1,
        coin: coin
      });
    });
  };
  getCoinsList_listed = () => {
    let coins = (0,_branding__WEBPACK_IMPORTED_MODULE_6__.getListedCoins)();
    let sortedCoins = coins.sort((a, b) => {
      return b.votes - a.votes;
    });
    return sortedCoins.map((coin, i) => {
      coin.votes_for_percent = coin.votes < coin.goal ? coin.votes : coin.goal;
      coin.status = "done";
      coin.listed = true;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CoinCardListing__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: i,
        rank: i + 1,
        coin: coin
      });
    });
  };
  getTableTabs = () => {
    let RuDEX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontWeight: "bold"
      }
    }, "RuDEX");

    let DonateLink = (style = {
      margin: 2,
      fontSize: "1.0rem",
      paddingRight: 5
    }) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
        style: style,
        to: `/asset/${this.data.donateTokenName}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        maxWidth: 25,
        replaceNoneToBts: false,
        name: this.data.donateTokenName
      }), this.data.donateTokenName);
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block small-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tabs-container generic-bordered-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tabs, {
      defaultActiveTab: 0,
      segmented: false,
      setting: "permissionsTab",
      className: "account-tabs",
      tabsClass: "account-overview bordered-header content-block",
      contentClass: "padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, {
      title: "listing.donate_progress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "horizontal",
      tabIndex: 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container",
      style: {
        padding: "2rem 8px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: 20
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-up-1 medium-up-1 large-up-1 no-overflow"
    }, this.getContent()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, {
      title: "listing.listed"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "horizontal",
      tabIndex: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container",
      style: {
        padding: "2rem 8px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginBottom: 20
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block small-up-1 medium-up-1 large-up-1 no-overflow"
    }, this.getContent_listed()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_7__.Tab, {
      title: "listing.add_coin"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "horizontal",
      tabIndex: 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container help-content-layout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "main-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.header"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontSize: "20px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text3.t1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text3.t2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem"
      },
      to: `/market/${this.data.donateMarket}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text3.get"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text4.t1"
    }), DonateLink(), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text4.t2"
    }), DonateLink(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text4.t3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        border: "1px solid #00a9e0",
        padding: "4px 3px 3px 4px",
        borderRadius: "3px",
        cursor: "pointer"
      }
    }, this.data.donateTokenName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text4.t4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text5.t1"
    }), DonateLink(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text5.t2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.text5.t3"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.header"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      href: this.state.currentLocale == "ru" ? this.data.links.agreement_ru : this.data.links.agreement_en,
      content: "listing.texts.rules.rule_10",
      component: "a",
      target: "_blank"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_11"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_3"
    }), DonateLink(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.rules.rule_5"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "checkbox",
      defaultChecked: this.state.ListingNotice1Informed,
      onChange: this.onListingNotice1Informed.bind(this)
    }), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.notice_informed"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listing_button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
      key: "send",
      disabled: !this.state.ListingNotice1Informed,
      onClick: this.state.ListingNotice1Informed ? this.onSubmitRequest.bind(this) : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.submit_request"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_9___default()), {
      content: "listing.texts.end"
    }), " ", RuDEX, "!")))))));
  };
}

ListingPage = (0,alt_react__WEBPACK_IMPORTED_MODULE_13__.connect)(ListingPage, {
  listenTo() {
    return [_stores_IntlStore__WEBPACK_IMPORTED_MODULE_11__["default"]];
  },

  getProps() {
    return {
      currentLocale: _stores_IntlStore__WEBPACK_IMPORTED_MODULE_11__["default"].getState().currentLocale
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingPage);

/***/ }),

/***/ 3385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2713);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2630);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1816);
/* harmony import */ var _stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2323);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2314);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_QuickTrade_SellReceive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3386);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2315);
/* harmony import */ var _QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3389);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(437);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2324);
/* harmony import */ var _Exchange_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2716);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2386);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(637);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2388);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2064);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_17__);






















class QuickTrade extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    const accountAssets = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getAssetsToSell)(props.currentAccount);
    this.state = {
      mounted: false,
      sub: "",
      sellAssetInput: "",
      sellAsset: null,
      sellAssets: accountAssets,
      sellAmount: "",
      sellImgName: "unknown",
      receiveAssetInput: "",
      receiveAsset: null,
      receiveAssets: accountAssets,
      receiveAmount: "",
      receiveImgName: "unknown",
      activeInput: "",
      activeAmountInput: "",
      lookupQuote: "",
      orders: [],
      orderView: "amount",
      fees: null,
      prices: null,
      isSubscribedToMarket: true
    };
    this.onSellAssetInputChange = this.onSellAssetInputChange.bind(this);
    this.onReceiveAssetInputChange = this.onReceiveAssetInputChange.bind(this);
    this.onSellAmountChange = this.onSellAmountChange.bind(this);
    this.onReceiveAmountChange = this.onReceiveAmountChange.bind(this);
    this.onSellImageError = this.onSellImageError.bind(this);
    this.onReceiveImageError = this.onReceiveImageError.bind(this);
    this.onReceiveAssetSearch = this.onReceiveAssetSearch.bind(this);
    this.onSwap = this.onSwap.bind(this);
    this.handleSubscriptionToggleChange = this.handleSubscriptionToggleChange.bind(this);
    this.hendleOrderView = this.hendleOrderView.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this._subToMarket = this._subToMarket.bind(this);
    this._checkAndUpdateMarketList = this._checkAndUpdateMarketList.bind(this);
    this.getAssetList = (0,lodash_es_debounce__WEBPACK_IMPORTED_MODULE_18__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_10__["default"].getAssetList.defer, 150);
  }

  static getDerivedStateFromProps(props, state) {
    let newState = {};

    if (props.assetToSell) {
      newState = {
        sellAssetInput: props.assetToSell.get("id"),
        sellAsset: props.assetToSell,
        sellImgName: props.assetToSell.get("symbol")
      };
    }

    if (props.assetToReceive) {
      newState = { ...newState,
        ...{
          receiveAssetInput: props.assetToReceive.get("id"),
          receiveAsset: props.assetToReceive,
          receiveImgName: props.assetToReceive.get("symbol")
        }
      };
    }

    return newState;
  }

  _routeTo(assetToSell, assetToReceive) {
    let sellRoute = assetToSell;
    let receiveRoute = assetToReceive;

    if (!assetToSell) {
      sellRoute = "";
    }

    if (!assetToReceive) {
      receiveRoute = "";
    }

    let pathName = "/instant-trade/" + sellRoute + "_" + receiveRoute;

    if (false) {}

    if (this.props.location.pathname !== pathName) {
      this.props.history.push(pathName);
    }
  }

  _areEqualAssets(asset1, asset2) {
    return this._isLoadedAsset(asset1) && this._isLoadedAsset(asset2) && asset1.get("id") === asset2.get("id");
  }

  _isLoadedAsset(asset) {
    return !!asset && !!asset.toJS;
  }

  _areAssetsGiven() {
    return this._isLoadedAsset(this.props.assetToSell) && this._isLoadedAsset(this.props.assetToReceive);
  }

  _haveAssetsChanged(prevProps) {
    if (this._isLoadedAsset(this.props.assetToSell) !== this._isLoadedAsset(prevProps.assetToSell)) {
      return true;
    }

    if (this._isLoadedAsset(this.props.assetToReceive) !== this._isLoadedAsset(prevProps.assetToReceive)) {
      return true;
    }

    if (!this._areEqualAssets(this.props.assetToSell, prevProps.assetToSell) || !this._areEqualAssets(this.props.assetToReceive, prevProps.assetToReceive)) {
      return true;
    }

    return false;
  }

  _hasMarketChanged(prevProps) {
    return JSON.stringify(prevProps.marketData) !== JSON.stringify(this.props.marketData);
  }

  componentDidUpdate(prevProps) {
    if (this._haveAssetsChanged(prevProps)) {
      this._assetsHaveChanged();
    } else {
      if (this._hasMarketChanged(prevProps)) {
        this._getOrders();
      }
    }

    if (this.props.searchAssets !== prevProps.searchAssets) {
      this.setState({
        activeSearch: true
      });
      let filteredAssets = this.props.searchAssets.toArray().filter(a => a.symbol.indexOf(this.state.lookupQuote) !== -1);

      this._checkAndUpdateMarketList(filteredAssets);
    }

    if (this.props.currentAccount !== prevProps.currentAccount) {
      const assets = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getAssetsToSell)(this.props.currentAccount);
      this.setState({
        sellAssets: assets,
        receiveAssets: assets
      });
    }
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });

    if (this._areAssetsGiven()) {
      this._assetsHaveChanged();
    }
  }

  componentWillUnmount() {
    const {
      sub
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId
    } = this.getAssetsDetails();

    if (sub) {
      actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].unSubscribeMarket(sellAssetId, receiveAssetId);
    }
  }

  async _subToMarket() {
    const {
      receiveAsset: baseAsset,
      sellAsset: quoteAsset,
      sub
    } = this.state;

    if (baseAsset && quoteAsset) {
      const {
        receiveAssetId: baseAssetId,
        sellAssetId: quoteAssetId
      } = this.getAssetsDetails();
      const {
        bucketSize,
        currentGroupOrderLimit
      } = this.props;

      if (sub) {
        let [qa, ba] = sub.split("_");

        if (qa === quoteAssetId && ba === baseAssetId) {
          return;
        }

        await actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].unSubscribeMarket(qa, ba);
      }

      await actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].subscribeMarket(baseAsset, quoteAsset, 3600, 0);
      this.setState({
        sub: `${quoteAssetId}_${baseAssetId}`
      }, () => {
        this.getAllPrices();
        this.getAllFees();
      });
    }
  }

  async getAllFees() {
    const {
      currentAccount
    } = this.props;
    const {
      sellAsset,
      receiveAsset
    } = this.state;

    if (sellAsset && receiveAsset) {
      const fees = await (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getFees)(receiveAsset, sellAsset, currentAccount);
      this.setState({
        fees
      });
    }
  }

  getAssetsDetails() {
    const {
      sellAsset,
      receiveAsset
    } = this.state;
    return {
      sellAssetId: sellAsset ? sellAsset.get("id") : null,
      receiveAssetId: receiveAsset ? receiveAsset.get("id") : null,
      sellAssetPrecision: sellAsset ? sellAsset.get("precision") : null,
      receiveAssetPrecision: receiveAsset ? receiveAsset.get("precision") : null,
      sellAssetSymbol: sellAsset ? sellAsset.get("symbol") : null,
      receiveAssetSymbol: receiveAsset ? receiveAsset.get("symbol") : null
    };
  }

  getAllPrices() {
    const {
      activeMarketHistory,
      feedPrice
    } = this.props;
    const prices = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getPrices)(activeMarketHistory, feedPrice);
    this.setState({
      prices
    });
  }

  _getOrders() {
    if (!this.state.isSubscribedToMarket) {
      console.log(this.props.marketData); // if the user wants to inspect current orders, pause updating

      return;
    }

    const {
      combinedBids
    } = this.props.marketData;
    const {
      sellAsset,
      receiveAsset,
      sellAmount,
      receiveAmount,
      activeInput
    } = this.state;
    const {
      sellAssetPrecision,
      receiveAssetPrecision
    } = this.getAssetsDetails();

    if (false) {}

    if (combinedBids && combinedBids.length) {
      if (sellAsset && receiveAsset) {
        switch (activeInput) {
          case "receiveAsset":
            if (sellAmount) {
              const orders = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getOrders)(sellAmount * 10 ** sellAssetPrecision, combinedBids, "sell");
              this.setState({
                orders,
                ordersUpdated: new Date()
              }, () => this.updateReceiveAmount());
            }

            break;

          case "sellAsset":
            if (receiveAmount) {
              const orders = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getOrders)(receiveAmount * 10 ** receiveAssetPrecision, combinedBids, "receive");
              this.setState({
                orders,
                ordersUpdated: new Date()
              }, () => this.updateSellAmount());
            }

            break;

          case "sell":
            if (sellAmount) {
              const orders = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getOrders)(sellAmount * 10 ** sellAssetPrecision, combinedBids, "sell");
              this.setState({
                orders,
                ordersUpdated: new Date()
              }, () => this.updateReceiveAmount());
            } else {
              this.setState({
                orders: [],
                receiveAmount: ""
              });
            }

            break;

          case "receive":
            if (receiveAmount) {
              const orders = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getOrders)(receiveAmount * 10 ** receiveAssetPrecision, combinedBids, "receive");
              this.setState({
                orders,
                ordersUpdated: new Date()
              }, () => this.updateSellAmount());
            } else {
              this.setState({
                orders: [],
                sellAmount: ""
              });
            }

            break;
        }
      }
    }
  }

  _assetsHaveChanged() {
    this._subToMarket();
  }

  async _setSellAsset(assetObjectIdOrSymbol, activeInput = "sellAsset", fireChanged = true) {
    let asset = null;

    if (typeof assetObjectIdOrSymbol === "string") {
      asset = await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.FetchChain)("getAsset", assetObjectIdOrSymbol);
    } else {
      asset = assetObjectIdOrSymbol;
    }

    if (false) {}

    this.setState({
      activeInput: activeInput
    }, () => {
      this._routeTo(asset.get("symbol"), !!this.props.assetToReceive ? this.props.assetToReceive.get("symbol") : "");
    });
  }

  async _setReceiveAsset(assetObjectIdOrSymbol, activeInput = "receiveAsset", fireChanged = true) {
    let asset = null;

    if (typeof assetObjectIdOrSymbol === "string") {
      asset = await (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.FetchChain)("getAsset", assetObjectIdOrSymbol);
    } else {
      asset = assetObjectIdOrSymbol;
    }

    if (false) {}

    this.setState({
      activeInput: activeInput
    }, () => {
      this._routeTo(!!this.props.assetToSell ? this.props.assetToSell.get("symbol") : "", asset.get("symbol"));
    });
  }

  async _swapAssets(activeInput, fireChanged = true) {
    this.setState({
      sellAmount: activeInput === "sellAsset" ? "" : this.state.receiveAmount,
      receiveAmount: activeInput === "receiveAsset" ? "" : this.state.sellAmount,
      activeInput: activeInput
    }, () => {
      this._routeTo(this.state.receiveAsset.get("symbol"), this.state.sellAsset.get("symbol"));
    });
  }

  async onSellAssetInputChange(assetIdOrSymbol) {
    const {
      receiveAssetId
    } = this.getAssetsDetails();

    if (assetIdOrSymbol === receiveAssetId) {
      this._swapAssets("sellAsset");
    } else {
      this._setSellAsset(assetIdOrSymbol);
    }
  }

  async onReceiveAssetInputChange(assetIdOrSymbol) {
    const {
      sellAssetId
    } = this.getAssetsDetails();

    if (assetIdOrSymbol === sellAssetId) {
      this._swapAssets("receiveAsset");
    } else {
      this._setReceiveAsset(assetIdOrSymbol);
    }
  }

  onReceiveAssetSearch(e) {
    if (!this.state.mounted) return;
    let isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainValidation.is_valid_symbol_error(e, true);

    if (!isValidName) {
      /* Don't lookup invalid asset names */
      this.setState({
        receiveAsset: null,
        receiveAssetInput: e,
        activeSearch: false
      });
      return;
    }

    if (this.state.receiveAssetInput !== e) {
      this.timer && clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      (0,_Exchange_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_11__.lookupAssets)(e, true, this.getAssetList, this.setState);
    }, 100);
  }

  _checkAndUpdateMarketList(marketsList) {
    let receiveAssets = marketsList.map(asset => asset.id);
    clearInterval(this.intervalId);
    const {
      receiveAssetInput
    } = this.state;
    let asset = "";

    if (bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getAsset(receiveAssetInput)) {
      const assetId = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getAsset(receiveAssetInput).get("id");

      if (receiveAssets.includes(assetId)) {
        asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getAsset(receiveAssetInput).get("id");
      }
    }

    if (receiveAssets.length === 1) {
      asset = receiveAssets[0];
      const {
        currentAccount
      } = this.props;
      receiveAssets = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getAssetsToSell)(currentAccount);
      receiveAssets.push(asset);
    }

    if (receiveAssets.length === 0) {
      const {
        currentAccount
      } = this.props;
      receiveAssets = (0,_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_8__.getAssetsToSell)(currentAccount);
    }

    this.intervalId = setInterval(() => {
      clearInterval(this.intervalId);
      this.setState({
        receiveAssets,
        activeSearch: false
      }, () => {
        this._subToMarket();
      });
    }, 100);
  }

  onSellAmountChange(e) {
    if (!this.state.mounted) return;

    if (e.asset !== this.state.sellAssetInput) {
      this.onSellAssetInputChange(e.asset);
    }

    this.setState({
      sellAmount: e.amount,
      activeInput: "sell",
      activeAmountInput: "sell"
    }, () => {
      this._getOrders();
    });
  }

  onReceiveAmountChange(e) {
    if (!this.state.mounted) return;

    if (e.asset !== this.state.receiveAssetInput) {
      this.onReceiveAssetInputChange(e.asset);
    }

    this.setState({
      receiveAmount: e.amount,
      activeInput: "receive",
      activeAmountInput: "receive"
    }, () => {
      this._getOrders();
    });
  }

  onSellImageError() {
    this.setState({
      sellImgName: "unknown"
    });
  }

  onReceiveImageError() {
    this.setState({
      receiveImgName: "unknown"
    });
  }

  onSwap() {
    if (this.isSwappable()) {
      this._swapAssets("neither");
    }
  }

  handleSubscriptionToggleChange() {
    this.setState(state => {
      return {
        isSubscribedToMarket: !state.isSubscribedToMarket
      };
    });
  }

  hendleOrderView() {
    this.setState(state => {
      const orderView = state.orderView === "amount" ? "total" : "amount";
      return {
        orderView
      };
    });
  }

  handleSell() {
    const {
      currentAccount
    } = this.props;
    const {
      sellAmount,
      receiveAmount
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId,
      sellAssetPrecision,
      receiveAssetPrecision
    } = this.getAssetsDetails();
    const forSale = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.Asset({
      asset_id: sellAssetId,
      precision: sellAssetPrecision,
      amount: sellAmount * 10 ** sellAssetPrecision
    });
    const toReceive = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.Asset({
      asset_id: receiveAssetId,
      precision: receiveAssetPrecision,
      amount: receiveAmount * 10 ** receiveAssetPrecision
    });
    const expirationTime = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    const order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_14__.LimitOrderCreate({
      for_sale: forSale,
      expiration: expirationTime,
      to_receive: toReceive,
      seller: currentAccount.get("id"),
      fee: {
        asset_id: "1.3.0",
        amount: 0
      },
      fill_or_kill: true
    });
    return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_7__["default"].createLimitOrder2(order).then(result => {
      if (result.error) {
        if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Notification.error({
          message: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("notifications.exchange_unknown_error_place_order", {
            amount: receiveAmount,
            symbol: receiveAssetId
          })
        });
      }
    }).catch(e => {
      console.error("order failed:", e);
    });
  }

  updateSellAmount() {
    const {
      orders,
      receiveAmount
    } = this.state;
    const {
      sellAssetPrecision,
      receiveAssetPrecision
    } = this.getAssetsDetails();

    if (orders.length === 1) {
      const sellAmount = (receiveAmount / orders[0].order.getPrice()).toFixed(sellAssetPrecision);
      this.setState({
        sellAmount
      });
      return;
    }

    if (orders.length > 1) {
      const lastOrder = orders.slice(-1)[0];
      const penultimateOrder = orders.slice(orders.length - 2, orders.length - 1)[0];
      const lastOrderToReceive = receiveAmount * 10 ** receiveAssetPrecision - penultimateOrder.order.total_for_sale.getAmount();
      const lastOrderForSale = lastOrderToReceive / lastOrder.order.getPrice() * 10 ** sellAssetPrecision / 10 ** receiveAssetPrecision;
      const sellAmount = ((penultimateOrder.order.total_to_receive.getAmount() + lastOrderForSale) / 10 ** sellAssetPrecision).toFixed(sellAssetPrecision);
      this.setState({
        sellAmount
      });
      return;
    }
  }

  updateReceiveAmount() {
    const {
      orders,
      sellAmount
    } = this.state;
    const {
      sellAssetPrecision,
      receiveAssetPrecision
    } = this.getAssetsDetails();

    if (orders.length === 1) {
      const receiveAmount = (orders[0].order.getPrice() * sellAmount).toFixed(receiveAssetPrecision);
      this.setState({
        receiveAmount
      });
      return;
    }

    if (orders.length > 1) {
      const lastOrder = orders.slice(-1)[0];
      const penultimateOrder = orders.slice(orders.length - 2, orders.length - 1)[0];
      const lastOrderForSale = sellAmount * 10 ** sellAssetPrecision - penultimateOrder.order.total_to_receive.getAmount();
      const lastOrderToReceive = lastOrderForSale * lastOrder.order.getPrice() * 10 ** receiveAssetPrecision / 10 ** sellAssetPrecision;
      const receiveAmount = ((penultimateOrder.order.total_for_sale.getAmount() + lastOrderToReceive) / 10 ** receiveAssetPrecision).toFixed(receiveAssetPrecision);
      this.setState({
        receiveAmount
      });
      return;
    }
  }

  isSwappable() {
    return this._areAssetsGiven();
  }

  _getTransactionFee(denominationAssetId) {
    const {
      fees,
      prices
    } = this.state;
    const {
      sellAssetId
    } = this.getAssetsDetails();

    if (fees) {
      if (fees.transactionFee[sellAssetId]) {
        if (!denominationAssetId || denominationAssetId === sellAssetId) {
          return fees.transactionFee[sellAssetId].fee.amount / 10 ** fees.transactionFee[sellAssetId].fee.precision;
        } else {
          return fees.transactionFee[sellAssetId].fee.amount / 10 ** fees.transactionFee[sellAssetId].fee.precision * prices.latestPrice;
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  _getMarketFee(denomindatedAssetId) {
    const {
      fees,
      prices,
      receiveAmount
    } = this.state;
    const {
      receiveAssetId
    } = this.getAssetsDetails();

    if (fees) {
      if (!denomindatedAssetId || denomindatedAssetId === receiveAssetId) {
        return fees.marketFee.baseMarketFee * receiveAmount / 10000;
      } else {
        return fees.marketFee.baseMarketFee * receiveAmount / prices.latestPrice / 10000;
      }
    } else {
      return 0;
    }
  }

  _getFeePercent(feeAmount, totalAmount) {
    return +totalAmount ? (+totalAmount + +feeAmount) / totalAmount - 1 : 0;
  }

  getDetails() {
    const {
      sub
    } = this.state;

    if (!sub) {
      return;
    }

    const {
      sellAmount,
      receiveAmount
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId,
      sellAssetPrecision,
      receiveAssetPrecision,
      receiveAssetSymbol
    } = this.getAssetsDetails();
    const priceSection = this.getPriceSection();
    const priceExtra = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.effective"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
      base_asset: sellAssetId,
      quote_asset: receiveAssetId,
      base_amount: sellAmount * 10 ** sellAssetPrecision,
      quote_amount: receiveAmount * 10 ** receiveAssetPrecision,
      noPopOver: true,
      force_direction: receiveAssetSymbol,
      noInvertTip: true
    }));
    const feeSection = this.getFeeSection();
    const ordersSection = this.getOrdersSection();
    const totalPercentFee = counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.effective") + " " + (this.getTotalPercentFee() * 100).toFixed(2);
    const amountOfOrders = this.state.orders.length;
    const ordersCaption = amountOfOrders < 2 ? counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.order") : counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.orders");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Collapse, {
      className: "asset-collapse",
      style: {
        marginTop: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Collapse.Panel, {
      header: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.price"),
      extra: priceExtra
    }, priceSection), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Collapse.Panel, {
      header: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.fee"),
      extra: `${totalPercentFee}%`
    }, feeSection), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Collapse.Panel, {
      header: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.orders"),
      extra: amountOfOrders ? `${amountOfOrders} ${ordersCaption}` : "no orders"
    }, ordersSection));
  }

  showDetails() {
    const {
      sellAsset,
      receiveAsset,
      sellAmount,
      receiveAmount
    } = this.state;
    return sellAsset && receiveAsset && +sellAmount && +receiveAmount;
  }

  showFeedPrice() {
    const {
      sellAsset,
      receiveAsset
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId
    } = this.getAssetsDetails();
    const receiveCollateralAsset = receiveAsset.getIn(["bitasset", "options", "short_backing_asset"]);
    const sellCollateralAsset = sellAsset.getIn(["bitasset", "options", "short_backing_asset"]);
    return receiveCollateralAsset === sellAssetId || sellCollateralAsset === receiveAssetId;
  }

  getPriceSection() {
    const {
      prices,
      sellAmount,
      receiveAmount
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId,
      sellAssetPrecision,
      receiveAssetPrecision,
      receiveAssetSymbol
    } = this.getAssetsDetails();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Col, {
      span: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.your_price")), this.showFeedPrice() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.feed_price")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.last_price"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Col, {
      span: 12,
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
      base_asset: sellAssetId,
      quote_asset: receiveAssetId,
      base_amount: sellAmount * 10 ** sellAssetPrecision,
      quote_amount: receiveAmount * 10 ** receiveAssetPrecision,
      noPopOver: true,
      force_direction: receiveAssetSymbol,
      noInvertTip: true
    })), this.showFeedPrice() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
      base_asset: sellAssetId,
      quote_asset: receiveAssetId,
      base_amount: 1 * 10 ** sellAssetPrecision,
      quote_amount: prices.feedPrice * 10 ** receiveAssetPrecision,
      noPopOver: true,
      force_direction: receiveAssetSymbol,
      noInvertTip: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
      base_asset: sellAssetId,
      quote_asset: receiveAssetId,
      base_amount: 1 * 10 ** sellAssetPrecision,
      quote_amount: prices.latestPrice * 10 ** receiveAssetPrecision,
      noPopOver: true,
      force_direction: receiveAssetSymbol,
      noInvertTip: true
    }))));
  }

  getFeeSection() {
    const {
      sellAmount,
      receiveAmount
    } = this.state;
    const {
      sellAssetPrecision,
      receiveAssetPrecision,
      sellAssetSymbol,
      receiveAssetSymbol
    } = this.getAssetsDetails();

    const transactionFee = this._getTransactionFee().toFixed(sellAssetPrecision);

    const transactionFeePercent = (this._getFeePercent(this._getTransactionFee(), sellAmount) * 100).toFixed(2);

    const marketFee = this._getMarketFee().toFixed(receiveAssetPrecision);

    const marketFeePercent = (this._getFeePercent(this._getMarketFee(), receiveAmount) * 100).toFixed(2);
    let [liqidityPenaltyMarket, liqidityPenaltyFeed] = this.getLiquidityPenalty();

    if (liqidityPenaltyMarket || liqidityPenaltyMarket === 0) {
      liqidityPenaltyMarket = (liqidityPenaltyMarket * 100).toFixed(2) + "%";
    } else {
      liqidityPenaltyMarket = "-";
    }

    if (liqidityPenaltyFeed || liqidityPenaltyFeed === 0) {
      liqidityPenaltyFeed = (liqidityPenaltyFeed * 100).toFixed(2) + "%";
    } else {
      liqidityPenaltyFeed = "-";
    }

    const liqidityPenalty = this.showFeedPrice() ? `${liqidityPenaltyMarket} / ${liqidityPenaltyFeed}` : liqidityPenaltyMarket;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Col, {
      span: 12
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.liquidity_penalty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.market_fee"), ` ${marketFeePercent}%`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.transaction_fee"), ` ${transactionFeePercent}%`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Col, {
      span: 12,
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, liqidityPenalty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, marketFee, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_16__["default"], {
      name: receiveAssetSymbol,
      noTip: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, transactionFee, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_16__["default"], {
      name: sellAssetSymbol,
      noTip: true
    }))));
  }

  getOrdersSection() {
    const {
      orders,
      orderView
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId,
      sellAssetPrecision,
      sellAssetSymbol,
      receiveAssetSymbol
    } = this.getAssetsDetails();
    const dataSource = orders.map(item => {
      return {
        key: item.order.id,
        id: item.order.id,
        seller: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_13__["default"], {
          account: item.order.seller
        }),
        amount: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          onClick: this.hendleOrderView
        }, orderView === "amount" ? item.amount / 10 ** sellAssetPrecision : item.total_amount / 10 ** sellAssetPrecision),
        price: item.price
      };
    });
    const amount = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, orderView === "amount" ? counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.amount") : counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.total"), "\xA0(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_16__["default"], {
      name: sellAssetSymbol,
      noTip: true
    }), ")");
    const price = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.price"), "\xA0(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_15__["default"], {
      base_asset: sellAssetId,
      quote_asset: receiveAssetId,
      noPopOver: true,
      force_direction: receiveAssetSymbol,
      noInvertTip: true,
      hide_value: true
    }), ")");
    const columns = [{
      title: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.id"),
      dataIndex: "id",
      key: "id",
      width: "20%"
    }, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.quick_trade_details.seller"),
      dataIndex: "seller",
      key: "seller",
      width: "20%"
    }, {
      title: amount,
      dataIndex: "amount",
      key: "amount",
      width: "30%"
    }, {
      title: price,
      dataIndex: "price",
      key: "price"
    }];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Switch, {
      style: {
        marginLeft: "0px"
      },
      onChange: this.handleSubscriptionToggleChange,
      checked: this.state.isSubscribedToMarket
    }), this.state.ordersUpdated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        float: "right"
      }
    }, counterpart__WEBPACK_IMPORTED_MODULE_12___default().localize(this.state.ordersUpdated)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_17___default()), {
      onClick: this.handleSubscriptionToggleChange,
      content: "exchange.quick_trade_details.subscribe_to_market",
      style: {
        marginLeft: "10px",
        cursor: "pointer"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Table, {
      columns: columns,
      dataSource: dataSource,
      style: {
        width: "100%",
        marginTop: "10px"
      },
      pagination: dataSource.length > 5 ? {
        pageSize: 5
      } : false
    }));
  }

  getLiquidityPenalty() {
    const {
      prices,
      sellAmount,
      receiveAmount
    } = this.state;
    const price = receiveAmount / sellAmount;
    const marketPrice = prices.latestPrice;
    const feedPrice = prices.feedPrice;
    let liquidityFee1, liquidityFee2;

    if (price && marketPrice) {
      liquidityFee1 = Math.max(1 - price / marketPrice, 1 - marketPrice / price);
    }

    if (price && feedPrice) {
      liquidityFee2 = Math.max(1 - price / feedPrice, 1 - feedPrice / price);
    }

    return [liquidityFee1, liquidityFee2];
  }

  getTotalPercentFee() {
    const {
      sellAmount,
      receiveAmount
    } = this.state;

    const transactionFeePercent = this._getFeePercent(this._getTransactionFee(), sellAmount);

    const marketFeePercent = this._getFeePercent(this._getMarketFee(), receiveAmount);

    const liquidityFee = this.getLiquidityPenalty()[0];
    return transactionFeePercent + marketFeePercent + liquidityFee;
  }

  hasBalance() {
    const {
      sellAmount
    } = this.state;
    const {
      currentAccount
    } = this.props;
    const accountBalances = currentAccount.get("balances").toJS();
    const {
      sellAssetId,
      sellAssetPrecision
    } = this.getAssetsDetails();

    if (!accountBalances[sellAssetId]) {
      return false;
    }

    const balance = bitsharesjs__WEBPACK_IMPORTED_MODULE_9__.ChainStore.getObject(accountBalances[sellAssetId]).get("balance");

    const transactionFee = this._getTransactionFee();

    return sellAmount * 10 ** sellAssetPrecision + transactionFee * 10 ** sellAssetPrecision < +balance;
  }

  render() {
    const {
      sellAssetInput,
      sellAssets,
      sellAmount,
      sellImgName,
      receiveAssetInput,
      receiveAssets,
      receiveAmount,
      receiveImgName,
      sub
    } = this.state;
    const {
      sellAssetId,
      receiveAssetId
    } = this.getAssetsDetails();
    const Details = this.showDetails() ? this.getDetails() : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Card, {
      className: "quick-trade",
      style: {
        align: "center",
        display: "flex",
        justifyContent: "center",
        minWidth: "300px",
        marginTop: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_QuickTrade_SellReceive__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sellAssetInput: sellAssetInput,
      sellAsset: sellAssetId,
      sellAssets: sellAssets,
      sellAmount: sellAmount,
      sellImgName: sellImgName,
      onSellAssetInputChange: this.onSellAssetInputChange,
      onSellAmountChange: this.onSellAmountChange,
      receiveAssetInput: receiveAssetInput,
      receiveAsset: receiveAssetId,
      receiveAssets: receiveAssets,
      receiveAmount: receiveAmount,
      receiveImgName: receiveImgName,
      onReceiveAssetInputChange: this.onReceiveAssetInputChange,
      onReceiveAmountChange: this.onReceiveAmountChange,
      onReceiveAssetSearch: this.onReceiveAssetSearch,
      onSwap: this.onSwap,
      isSwappable: this.isSwappable()
    }), Details, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginTop: "1rem",
        textAlign: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
      title: !this.hasBalance() ? counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.no_balance") : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_5__.Button, {
      key: "sell",
      type: "primary",
      disabled: !this.showDetails() || !sub || !this.hasBalance(),
      onClick: this.handleSell
    }, counterpart__WEBPACK_IMPORTED_MODULE_12___default().translate("exchange.sell")))));
  }

}

QuickTrade = (0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(QuickTrade, {
  listenTo() {
    return [_stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__["default"], _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    return {
      searchAssets: _stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().assets,
      assetsLoading: _stores_AssetStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().assetsLoading,
      marketData: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().marketData,
      activeMarketHistory: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().activeMarketHistory,
      bucketSize: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().bucketSize,
      currentGroupOrderLimit: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().currentGroupOrderLimit,
      feedPrice: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().feedPrice,
      marketLimitOrders: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().marketLimitOrders
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickTrade = (0,_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_1__.bindToCurrentAccount)(QuickTrade));

/***/ }),

/***/ 3384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2526);
/* harmony import */ var _QuickTrade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3385);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1938);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1939);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







class QuickTradeSubscriber extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    assetToSell: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    assetToReceive: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset
  };
  static defaultProps = {
    assetToSell: "USD",
    assetToReceive: "GPH"
  };

  render() {
    if (!!this.props.assetToReceive.get && !!this.props.assetToSell.get) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QuickTrade__WEBPACK_IMPORTED_MODULE_2__["default"], this.props);
    } else {
      return null;
    }
  }

}

const QuickTradeAssetResolver = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(QuickTradeSubscriber, {
  show_loader: true
});

class QuickTradeRouter extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let symbols = !!this.props.match.params.marketID ? this.props.match.params.marketID.toUpperCase().split("_") : ["", ""];

    if (symbols.length == 2 && !!symbols[0] && symbols[0] === symbols[1]) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_1__["default"], {
        subtitle: "market_not_found_subtitle"
      });
    }

    if (false) {}

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuickTradeAssetResolver, _extends({}, this.props, {
      assetToSell: symbols[0] || "",
      assetToReceive: symbols.length == 2 ? symbols[1] : ""
    }));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickTradeRouter);

/***/ }),

/***/ 3386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3387);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1825);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);







class SellReceive extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    sellAssetInput: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    sellAsset: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    sellAssets: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
    sellAmount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    sellImgName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    receiveAssetInput: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    receiveAsset: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    receiveAssets: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
    receiveAmount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    receiveImgName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    onSellAssetInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    onSellAmountChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    onReceiveAssetInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    onReceiveAmountChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    onSwap: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    isSwappable: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
  };

  render() {
    const smallScreen = window.innerWidth < 850 ? true : false;
    const {
      sellAssetInput,
      sellAsset,
      sellAssets,
      sellAmount,
      sellImgName,
      receiveAssetInput,
      receiveAsset,
      receiveAssets,
      receiveAmount,
      receiveImgName,
      onSellAssetInputChange,
      onSellAmountChange,
      onReceiveAssetInputChange,
      onReceiveAmountChange,
      onReceiveAssetSearch,
      onSwap,
      isSwappable
    } = this.props;
    const sellSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "exchange.sell",
      assetInput: sellAssetInput,
      asset: sellAsset,
      assets: sellAssets,
      amount: sellAmount,
      onAssetInputChange: onSellAssetInputChange,
      onAmountChange: onSellAmountChange,
      imgName: sellImgName,
      placeholder: "exchange.quick_trade_details.placeholder_sell"
    });
    const receiveSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "exchange.receive",
      assetInput: receiveAssetInput,
      asset: receiveAsset,
      assets: receiveAssets,
      amount: receiveAmount,
      onAssetInputChange: onReceiveAssetInputChange,
      onSearch: onReceiveAssetSearch,
      onAmountChange: onReceiveAmountChange,
      imgName: receiveImgName,
      placeholder: "exchange.quick_trade_details.placeholder_receive"
    });
    const btnStyle = {
      align: "center",
      display: "flex",
      justifyContent: "center"
    };

    if (!isSwappable) {
      btnStyle.opacity = 0.1;
    }

    const swapButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: btnStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "swap",
      size: "2x",
      style: !smallScreen ? {
        marginTop: "3rem"
      } : null,
      onClick: onSwap
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, smallScreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Row, null, sellSelector), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Row, null, swapButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Row, null, receiveSelector)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Col, {
      span: 10
    }, sellSelector), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Col, {
      span: 4
    }, swapButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Col, {
      span: 10
    }, receiveSelector)));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellReceive);

/***/ }),

/***/ 3387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2060);
/* harmony import */ var _ChainSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3388);







class AmountSelector3 extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    label: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    assetInput: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    asset: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    assets: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
    amount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
    onAssetInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    onAmountChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    onImageError: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    onSearch: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
    imgName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    placeholderAmount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
  };
  static defaultProps = {
    disabled: false,
    imgName: "unknown",
    placeholderAmount: "0.0",
    placeholder: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      imageError: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!!this.props.imgName && this.props.imgName !== prevProps.imgName && this.props.imgName !== "unknown") {
      this.setState({
        imageError: false
      });
    }
  }

  onImageError() {
    this.setState({
      imageError: true
    });
  }

  render() {
    let {
      label,
      assetInput,
      asset,
      assets,
      amount,
      onAssetInputChange,
      onSearch,
      onAmountChange,
      imgName,
      placeholder,
      placeholderAmount,
      tooltipText
    } = this.props;

    if (this.state.imageError) {
      imgName = "unknown";
    }

    const labelText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "left-label",
      component: "label",
      content: label,
      style: {
        fontSize: "1.2rem",
        margin: "0",
        padding: "0"
      }
    });
    const chainSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChainSelect__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    const image = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      style: {
        width: "3.5rem",
        height: "3.5rem",
        marginTop: "0.5rem"
      },
      onError: this.onImageError.bind(this),
      src: `${""}asset-symbols/${imgName.toLowerCase()}.png`
    });
    const amountSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onChange: onAmountChange,
      amount: amount,
      asset: asset,
      assets: assets,
      placeholder: placeholderAmount,
      onSearch: onSearch
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "amount-selector-2",
      style: {
        minWidth: "3.5rem",
        width: "100%"
      }
    }, labelText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Row, {
      style: {
        minWidth: "18rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      style: {
        minWidth: "3.5rem"
      },
      span: 5
    }, image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Col, {
      span: 19
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      placement: "top",
      title: tooltipText
    }, chainSelector), amountSelector)));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmountSelector3);

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

/***/ 2630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasLoaded": () => (/* binding */ hasLoaded),
/* harmony export */   "bindToCurrentAccount": () => (/* binding */ bindToCurrentAccount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1938);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2086);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1939);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1816);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(589);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1917);







const hasLoaded = function hasLoaded(currentAccount) {
  return !!currentAccount && !!currentAccount.get("id");
};
const bindToCurrentAccount = function bindToCurrentAccount(WrappedComponent) {
  // ...and returns another component...
  let BindToCurrentAccount = class BindToCurrentAccount extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static propTypes = {
      currentAccount: _ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount
    };
    static defaultProps = {
      // set subscription
      autosubscribe: true
    };

    constructor(props) {
      super(props);
    }

    render() {
      if (hasLoaded(this.props.currentAccount)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, this.props);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__["default"], null);
      }
    }

  };
  BindToCurrentAccount = (0,_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(BindToCurrentAccount);
  BindToCurrentAccount = (0,react_debounce_render__WEBPACK_IMPORTED_MODULE_2__["default"])(BindToCurrentAccount, 100, {
    leading: false
  });
  return (0,alt_react__WEBPACK_IMPORTED_MODULE_4__.connect)(BindToCurrentAccount, {
    listenTo() {
      return [_stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },

    getProps() {
      let currentAccount = _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().passwordAccount || "please-login";
      return {
        currentAccount: new Map([["name", currentAccount]])
      };
    }

  });
};

/***/ }),

/***/ 3388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(559);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








class ChainSelectView extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    chains: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
    selectStyle: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object) // all other props are passed to the Select component

  };
  static defaultProps = {
    chains: ["Graphene Blockchain"],
    placeholder: null,
    style: {},
    selectStyle: {}
  };

  render() {
    let {
      chains,
      selectStyle,
      style,
      placeholder,
      value,
      onDropdownVisibleChange,
      ...remProps
    } = this.props;
    const disableSelect = chains.filter(immutable__WEBPACK_IMPORTED_MODULE_4__.Map.isMap).length <= 1 && !onDropdownVisibleChange;

    if (!value) {
      value = chains[0];
    } // if onDropdownVisibleChange given we assume that lazy loading takes place


    const select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Select, _extends({
      onDropdownVisibleChange: onDropdownVisibleChange,
      showArrow: disableSelect ? false : undefined,
      style: selectStyle,
      placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
        content: placeholder || "utility.asset_select_placeholder"
      }),
      value: value
    }, remProps, {
      optionFilterProp: "children",
      filterOption: (input, option) => option.key.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      disabled: disableSelect,
      notFoundContent: counterpart__WEBPACK_IMPORTED_MODULE_3___default().translate("global.not_found")
    }), chains.filter(immutable__WEBPACK_IMPORTED_MODULE_4__.Map.isMap).map(chain => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__.Select.Option, {
        key: chain,
        value: chain
      }, chain);
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "chain-select",
      style: style
    }, select);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChainSelectView);

/***/ }),

/***/ 2809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => (/* binding */ Tabs),
/* harmony export */   "Tab": () => (/* binding */ Tab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(763);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1816);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(657);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(656);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2074);








/**
 *  Renders a tab layout, handling switching and optionally persists the currently open tab using the SettingsStore
 *
 *  props:
 *     setting: unique name to be used to remember the active tab of this tabs layout,
 *     tabsClass: optional classes for the tabs container div
 *     contentClass: optional classes for the content container div
 *
 *  Usage:
 *
 *  <Tabs setting="mySetting">
 *      <Tab title="locale.string.title1">Tab 1 content</Tab>
 *      <Tab title="locale.string.title2">Tab 2 content</Tab>
 *  </Tabs>
 *
 */

class Tab extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    changeTab: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
    isActive: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool.isRequired),
    index: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number.isRequired),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    isLinkTo: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    subText: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)])
  };
  static defaultProps = {
    isActive: false,
    index: 0,
    className: "",
    isLinkTo: "",
    subText: null
  };

  render() {
    let {
      isActive,
      index,
      changeTab,
      title,
      className,
      updatedTab,
      disabled,
      subText
    } = this.props;
    let c = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      "is-active": isActive
    }, className);

    if (typeof title === "string" && title.indexOf(".") > 0) {
      title = counterpart__WEBPACK_IMPORTED_MODULE_5___default().translate(title);
    } // dont string concetenate subText directly within the rendering, subText can be an object without toString
    // implementation, but valid DOM (meaning, don't do subText + "someString"


    if (this.props.collapsed) {
      // if subText is empty, dont render it, we dont want empty brackets added
      if (typeof subText === "string") {
        subText = subText.trim();
      }

      if (title.type === "span") {
        title = title.props.children[2];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: index,
        "data-is-link-to": this.props.isLinkTo
      }, title, updatedTab ? "*" : "", subText && " (", subText && subText, subText && ")");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: c,
      onClick: !disabled ? changeTab.bind(this, index, this.props.isLinkTo) : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "tab-title"
    }, title, updatedTab ? "*" : ""), subText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tab-subtext"
    }, subText)));
  }

}

class Tabs extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    setting: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    defaultActiveTab: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
    segmented: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
  };
  static defaultProps = {
    active: 0,
    defaultActiveTab: 0,
    segmented: true,
    contentClass: "",
    style: {}
  };

  constructor(props) {
    super();
    this.state = {
      activeTab: props.setting ? props.viewSettings.get(props.setting, props.defaultActiveTab) : props.defaultActiveTab,
      width: window.innerWidth
    };
    this._setDimensions = this._setDimensions.bind(this);
  }

  componentDidMount() {
    this._setDimensions();

    window.addEventListener("resize", this._setDimensions, {
      capture: false,
      passive: true
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let nextSetting = nextProps.viewSettings.get(nextProps.setting);

    if (nextSetting !== this.props.viewSettings.get(this.props.setting)) {
      this.setState({
        activeTab: nextSetting
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._setDimensions);
  }

  _setDimensions() {
    let width = window.innerWidth;

    if (width !== this.state.width) {
      this.setState({
        width
      });
    }
  }

  _changeTab(value, isLinkTo) {
    if (value === this.state.activeTab) return; // Persist current tab if desired

    if (isLinkTo !== "") {
      this.props.history.push(isLinkTo);
    }

    if (this.props.setting) {
      actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeViewSetting({
        [this.props.setting]: value
      });
    }

    this.setState({
      activeTab: value
    });
    if (this.props.onChangeTab) this.props.onChangeTab(value);
  }

  render() {
    let {
      children,
      contentClass,
      tabsClass,
      style,
      segmented
    } = this.props;
    const collapseTabs = this.state.width < 900 && react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 2;
    let activeContent = null;
    let tabs = react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, (child, index) => {
      if (!child) {
        return null;
      }

      if (collapseTabs && child.props.disabled) return null;
      let isActive = index === this.state.activeTab;

      if (isActive) {
        activeContent = child.props.children;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
        collapsed: collapseTabs,
        isActive,
        changeTab: this._changeTab.bind(this),
        index: index
      });
    }).filter(a => a !== null);

    if (!activeContent) {
      activeContent = tabs[0].props.children;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(!!this.props.actionButtons ? "with-buttons" : "", this.props.className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "service-selector"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      style: style,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("button-group no-margin", tabsClass, {
        segmented
      })
    }, collapseTabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      style: {
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: "15rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      value: this.state.activeTab,
      style: {
        marginTop: 10,
        marginBottom: 10
      },
      className: "bts-select",
      onChange: e => {
        let ind = parseInt(e.target.value, 10);

        this._changeTab(ind, e.target[ind].attributes["data-is-link-to"].value);
      }
    }, tabs)) : tabs, this.props.actionButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "tabs-action-buttons"
    }, this.props.actionButtons) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("tab-content", contentClass)
    }, activeContent));
  }

}

Tabs = (0,alt_react__WEBPACK_IMPORTED_MODULE_2__.connect)(Tabs, {
  listenTo() {
    return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"]];
  },

  getProps() {
    return {
      viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().viewSettings
    };
  }

});
Tabs = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.withRouter)(Tabs);


/***/ }),

/***/ 2716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lookupAssets": () => (/* binding */ lookupAssets),
/* harmony export */   "assetFilter": () => (/* binding */ assetFilter),
/* harmony export */   "fetchIssuerName": () => (/* binding */ fetchIssuerName)
/* harmony export */ });
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2070);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);



function lookupAssets(value, gatewayAssets = false, getAssetList, setState) {
  if (!value && value !== "") return;
  let quote = value.toUpperCase();

  if (quote.startsWith("GP") && quote.length >= 6) {
    quote = value.substr(3, quote.length - 1);
  }

  getAssetList(quote, 10, gatewayAssets);
  setState({
    lookupQuote: quote
  });
}

function assetFilter({
  searchAssets,
  marketPickerAsset,
  baseAsset,
  quoteAsset
}, {
  inputValue,
  lookupQuote
}, setState, checkAndUpdateMarketList) {
  setState({
    activeSearch: true
  });
  let assetCount = 0;
  let allMarkets = [];
  let baseSymbol = baseAsset.get("symbol");
  let quoteSymbol = quoteAsset.get("symbol");

  if (searchAssets.size && !!inputValue && inputValue.length > 2) {
    searchAssets.filter(a => {
      try {
        if (a.options.description) {
          let description = JSON.parse(a.options.description);

          if ("visible" in description) {
            if (!description.visible) return false;
          }
        }
      } catch (e) {}

      return a.symbol.indexOf(lookupQuote) !== -1;
    }).forEach(asset => {
      if (assetCount > 100) return;
      assetCount++;
      let issuerName = fetchIssuerName(asset.issuer);
      let base = baseAsset.get("symbol");
      let marketID = asset.symbol + "_" + base;
      let isQuoteAsset = quoteSymbol == marketPickerAsset;
      let includeAsset = isQuoteAsset && asset.symbol != baseSymbol || !isQuoteAsset && asset.symbol != quoteSymbol;

      if (includeAsset) {
        allMarkets.push([marketID, {
          quote: asset.symbol,
          base: base,
          issuerId: asset.issuer,
          issuer: issuerName
        }]);
      }
    });
  }

  const marketsList = sortMarketsList(allMarkets, inputValue);
  checkAndUpdateMarketList(marketsList);
}

function getMarketSortComponents(market) {
  const weight = {};
  const quote = market.quote;

  if (quote.indexOf(".") !== -1) {
    const [gateway, asset] = quote.split(".");
    weight.gateway = gateway;
    weight.asset = asset;
  } else {
    weight.asset = quote;
  }

  if (market.issuerId === "1.2.0") weight.isCommittee = true;
  return weight;
}

function sortMarketsList(allMarkets, inputValue) {
  if (inputValue.startsWith("GP") && inputValue.length >= 6) {
    inputValue = inputValue.substr(3, inputValue.length - 1);
  }

  return allMarkets.sort(([, marketA], [, marketB]) => {
    const weightA = getMarketSortComponents(marketA);
    const weightB = getMarketSortComponents(marketB);

    if (weightA.asset !== weightB.asset) {
      if (weightA.asset === inputValue) return -1;
      if (weightB.asset === inputValue) return 1;
      if (weightA.asset > weightB.asset) return -1;
      if (weightA.asset < weightB.asset) return 1;
    }

    if (weightA.isCommittee ^ weightB.isCommittee) {
      if (weightA.isCommittee) return -1;
      if (weightB.isCommittee) return 1;
    }

    const aIsKnownGateway = (0,common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__.hasGatewayPrefix)(marketA.quote);
    const bIsKnownGateway = (0,common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__.hasGatewayPrefix)(marketB.quote);
    if (aIsKnownGateway && !bIsKnownGateway) return -1;
    if (bIsKnownGateway && !aIsKnownGateway) return 1;
    if (weightA.gateway > weightB.gateway) return 1;
    if (weightA.gateway < weightB.gateway) return -1;
    return 0;
  });
}

function fetchIssuerName(issuerId) {
  let issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(issuerId, false, false);

  if (!issuer) {
    return;
  } else {
    return issuer.get("name");
  }
}



/***/ }),

/***/ 3389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrders": () => (/* binding */ getOrders),
/* harmony export */   "getPrices": () => (/* binding */ getPrices),
/* harmony export */   "getFees": () => (/* binding */ getFees),
/* harmony export */   "getAssetsToSell": () => (/* binding */ getAssetsToSell)
/* harmony export */ });
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(636);


 // Returns a list of dicts with keys id, seller amount and price and respective values

function getOrders(amount, orders, whatAmount) {
  const matchedOrders = [];
  let totalAmount;
  orders.sort((a, b) => {
    return b.getPrice() - a.getPrice(); // getPrice === _real_price
  });

  for (let i = 0; i < orders.length; i++) {
    if (matchedOrders.length) {
      matchedOrders.forEach(({
        order
      }) => {
        totalAmount = whatAmount === "receive" ? order.total_for_sale.getAmount() : order.total_to_receive.getAmount();
      });

      if (totalAmount >= amount) {
        break;
      } else {
        matchedOrders.push({
          order: orders[i],
          amount: orders[i].amountToReceive().amount,
          total_amount: orders[i].total_to_receive.amount,
          price: orders[i].getPrice()
        });
      }
    } else {
      matchedOrders.push({
        order: orders[i],
        amount: orders[i].amountToReceive().amount,
        total_amount: orders[i].total_to_receive.amount,
        price: orders[i].getPrice()
      });
    }
  }

  return matchedOrders;
} // Returns a dict with keys feedPrice and lastPrice


function getPrices(activeMarketHistory, feedPrice) {
  let latestPrice;

  if (activeMarketHistory.size) {
    const latest_two = activeMarketHistory.take(2);
    const latest = latest_two.first();
    latestPrice = latest.getPrice();
  } // feed price === null if not a bitasset market


  return {
    latestPrice: latestPrice ? latestPrice : null,
    feedPrice: feedPrice ? feedPrice.toReal() : feedPrice
  };
} // Returns a list of asset ids that the user can sell


function getAssetsToSell(account) {
  let assetTypes = [];

  if (!(account && account.get("balances"))) {
    return assetTypes;
  }

  let accountBalances = account.get("balances").toJS();
  assetTypes = Object.keys(accountBalances).sort(common_utils__WEBPACK_IMPORTED_MODULE_0__["default"].sortID);

  for (let key in accountBalances) {
    let balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__.ChainStore.getObject(accountBalances[key]);

    if (balanceObject && balanceObject.get("balance") === 0) {
      assetTypes.splice(assetTypes.indexOf(key), 1);
    }
  }

  return assetTypes;
} // Returns a dict with keys liquidityPenalty, marketFee and transactionFee, input is selected assets and amounts


async function getFees(baseAsset, quoteAsset, currentAccount) {
  const baseMarketFeePercent = baseAsset.getIn(["options", "market_fee_percent"]) / 100 + "%";
  const quoteMarketFeePercent = quoteAsset.getIn(["options", "market_fee_percent"]) / 100 + "%";
  const baseMarketFee = baseAsset.getIn(["options", "market_fee_percent"]);
  const quoteMarketFee = quoteAsset.getIn(["options", "market_fee_percent"]);
  const trxFee = await checkFeeStatus([baseAsset, quoteAsset], currentAccount);
  return {
    marketFee: {
      baseMarketFeePercent,
      quoteMarketFeePercent,
      baseMarketFee,
      quoteMarketFee
    },
    transactionFee: trxFee
  };
}

async function checkFeeStatus(assets = [], account) {
  let feeStatus = {};
  let p = [];
  assets.forEach(a => {
    p.push((0,common_trxHelper__WEBPACK_IMPORTED_MODULE_2__.checkFeeStatusAsync)({
      accountID: account.get("id"),
      feeID: a.get("id"),
      type: "limit_order_create"
    }));
  });
  return Promise.all(p).then(status => {
    assets.forEach((a, idx) => {
      feeStatus[a.get("id")] = status[idx];
    });
    return feeStatus;
  }).catch(err => {
    console.error("checkFeeStatusAsync error", err);
    return feeStatus;
  });
}



/***/ }),

/***/ 2713:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1705);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2714);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1945);




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(wait) || 0;
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  }

  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);


/***/ }),

/***/ 2714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1717);


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (now);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tUcmFkZS5jMTM0NjdhOTYxNmM2YmYyZmI2MC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7O0FBekJBOztBQTJCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUtBOztBQS9DQTs7QUFpREE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBOztBQVBBOztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFQQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBOztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7QUFLQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBSEE7QUFtQkE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7O0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBS0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFNQTs7QUFPQTtBQUNBOztBQUVBO0FBSUE7O0FBRUE7O0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBL0JBO0FBc0NBOztBQUVBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFVQTtBQUVBO0FBR0E7QUFEQTtBQU9BO0FBUUE7QUFBQTtBQUFBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUtBO0FBQ0E7QUFQQTtBQVdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFHQTtBQURBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBREE7QUFXQTs7QUF2ckJBOztBQTByQkE7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBVEE7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcHZCQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBS0E7QUFQQTtBQVNBO0FBQUE7QUFJQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFEQTtBQVNBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFXQTs7QUFqSkE7O0FBb0pBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTs7QUFYQTtBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFHQTs7QUFHQTtBQUFBO0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFJQTtBQUFBO0FBVkE7QUFlQTtBQURBO0FBTUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQVVBOztBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUF4QkE7QUErQkE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFQQTtBQWFBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFYQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBWEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQVhBO0FBbUJBOztBQXJPQTs7QUF3T0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUhBOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQVZBO0FBYUE7Ozs7Ozs7Ozs7Ozs7QUMzUUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUNBO0FBQUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFRQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFEQTtBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQVFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFRQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFTQTtBQUFBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQU5BO0FBREE7QUFZQTtBQUFBO0FBSUE7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFPQTtBQUNBO0FBSUE7QUFOQTtBQVdBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBTkE7QUFlQTtBQUFBO0FBS0E7QUFBQTtBQVdBO0FBMWJBOztBQTZiQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBO0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXNCQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBUUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTs7QUFDQTtBQUlBO0FBQ0E7O0FBQ0E7QUFVQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFNQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFVQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUZBOztBQUlBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBTUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFNQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFDQTtBQTFFQTtBQTRFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBS0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFJQTtBQUVBO0FBREE7QUFJQTtBQU1BO0FBRUE7O0FBRUE7QUFLQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUdBO0FBRUE7QUFEQTtBQUlBO0FBTUE7QUFFQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBTEE7QUFRQTtBQUlBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFUQTtBQVlBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTs7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBSUE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFLQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFPQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBRkE7QUFZQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUtBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUVBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBVEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQVZBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBVEE7QUFlQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBOztBQU9BOztBQUdBOztBQUdBOztBQUNBO0FBSUE7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBSUE7QUFFQTtBQUFBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFLQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBWEE7QUFhQTtBQUVBO0FBVUE7QUFBQTtBQUFBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBREE7QUFOQTtBQWNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFJQTs7QUFDQTtBQUNBO0FBSUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUlBOztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUdBOztBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQXFCQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUtBO0FBUkE7QUFnQkE7O0FBcHdDQTs7QUF1d0NBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBVkE7QUFZQTs7QUFqQkE7QUFxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2wwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBakJBOztBQW9CQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7O0FBR0E7QUFHQTtBQUNBO0FBSEE7QUFNQTs7QUFsQkE7O0FBcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBb0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOztBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBS0E7QUFWQTtBQWVBO0FBVUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7O0FBbkhBOztBQXNIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7O0FBZUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBWUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBUEE7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFTQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUUE7O0FBMUlBOztBQTZJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVEE7QUFZQTs7QUFoRUE7O0FBbUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBCQTtBQXVCQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTs7QUFaQTtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBOztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQVhBO0FBYUE7QUFDQTtBQUdBO0FBQ0E7QUFsQkE7QUFxQkE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7O0FBdkVBOztBQTBFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUUE7O0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFTQTtBQUFBO0FBSUE7QUFBQTtBQUlBOztBQTFFQTs7QUE2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBT0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFNQTtBQVpBO0FBcUJBO0FBQUE7QUFNQTtBQUFBO0FBS0E7O0FBN0pBOztBQWdLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQU5BO0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoUkE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFQQTtBQVNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0Fzc2V0V3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9BY2NvdW50U2VsZWN0b3JMaXN0aW5nLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0NvaW5DYXJkTGlzdGluZy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Eb25hdGVTZW5kTW9kYWwuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvRG9udXRDaGFydC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9MaXN0aW5nUGFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvUXVpY2tUcmFkZS9RdWlja1RyYWRlLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1F1aWNrVHJhZGVSb3V0ZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1F1aWNrVHJhZGUvU2VsbFJlY2VpdmUuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQW1vdW50U2VsZWN0b3IzLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0Fzc2V0SW1hZ2UuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5TZWxlY3QuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvVGFicy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvRXhjaGFuZ2UvTWFya2V0UGlja2VySGVscGVycy5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1F1aWNrVHJhZGVIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL25vdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldERpc3BsYXlOYW1lfSBmcm9tIFwiY29tbW9uL3JlYWN0VXRpbHNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCJpbW11dGFibGVcIjtcblxuY2xhc3MgRHluYW1pY09iamVjdFJlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkb3M6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdFxuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZG9zOiBMaXN0KClcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5nZXREeW5hbWljT2JqZWN0ID0gdGhpcy5nZXREeW5hbWljT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0RHluYW1pY09iamVjdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kb3MuZmluZChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICYmIGEuZ2V0KFwiaWRcIikgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldER5bmFtaWNPYmplY3Q6IHRoaXMuZ2V0RHluYW1pY09iamVjdFxuICAgICAgICB9KTtcbiAgICB9XG59XG5EeW5hbWljT2JqZWN0UmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKER5bmFtaWNPYmplY3RSZXNvbHZlcik7XG5cbi8qKlxuICogSE9DIHRoYXQgcmVzb2x2ZXMgZWl0aGVyIGEgbnVtYmVyIG9mIGFzc2V0cyBkaXJlY3RseSB3aXRoIENoYWluQXNzZXQsXG4gKiBvciBhIGxpc3Qgb2YgYXNzZXRzIHdpdGggQ2hhaW5Bc3NldHNcbiAqXG4gKiAgT3B0aW9uc1xuICogIC0ncHJvcE5hbWVzJyBhbiBhcnJheSBvZiBwcm9wIG5hbWVzIHRvIGJlIHJlc29sdmVkIGFzIGFzc2V0cy4gKGRlZmF1bHRzIHRvIFwiYXNzZXRcIiBvciBcImFzc2V0c1wiKVxuICogIC0nZGVmYXVsdFByb3BzJyBkZWZhdWx0IHZhbHVlcyB0byB1c2UgZm9yIG9iamVjdHMgKG9wdGlvbmFsKVxuICogIC0nYXNMaXN0JyBkZWZpbmVzIHdoZXRoZXIgdG8gdXNlIENoYWluQXNzZXRzTGlzdCBvciBub3QgKHVzZWZ1bCBmb3IgcmVzb2x2aW5nIGxhcmdlIHF1YW50aXRpZXMgb2YgYXNzZXRzKVxuICogIC0nd2l0aER5bmFtaWMnIGRlZmluZXMgd2hldGhlciB0byBhbHNvIHJlc29sdmUgZHluYW1pYyBvYmplY3RzIG9yIG5vdFxuICovXG5cbmZ1bmN0aW9uIEFzc2V0V3JhcHBlcihDb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMucHJvcE5hbWVzID0gb3B0aW9ucy5wcm9wTmFtZXMgfHwgW1xuICAgICAgICAhIW9wdGlvbnMuYXNMaXN0ID8gXCJhc3NldHNcIiA6IFwiYXNzZXRcIlxuICAgIF07XG4gICAgY29uc3QgZmluYWxQcm9wVHlwZXMgPSBvcHRpb25zLnByb3BOYW1lcy5yZWR1Y2UoKHJlcywgdHlwZSkgPT4ge1xuICAgICAgICByZXNbdHlwZV0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgPyBDaGFpblR5cGVzLkNoYWluQXNzZXRzTGlzdFxuICAgICAgICAgICAgOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBsZXQgZGVmYXVsdFByb3BzID0gT2JqZWN0LmtleXMoZmluYWxQcm9wVHlwZXMpLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiBvcHRpb25zLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICByZXNba2V5XSA9ICEhb3B0aW9ucy5hc0xpc3QgPyBMaXN0KGN1cnJlbnQgfHwgW10pIDogY3VycmVudCB8fCBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVmYXVsdFByb3BzICYmICEhb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCkge1xuICAgICAgICBkZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY2xhc3MgQXNzZXRzUmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0gZmluYWxQcm9wVHlwZXM7XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGZpbmFsQXNzZXRzID0ge307XG4gICAgICAgICAgICBsZXQgcGFzc1Ryb3VnaFByb3BzID0ge307XG4gICAgICAgICAgICBsZXQgZG9zID0gTGlzdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0gJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9wTmFtZXMuaW5kZXhPZihwcm9wKSAhPT0gLTFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5hc0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFzc2V0c1twcm9wXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHNbcHJvcF0uZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NUcm91Z2hQcm9wc1twcm9wXSA9IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB3cmFwcGVkID0gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgey4uLnBhc3NUcm91Z2hQcm9wcywgLi4uZmluYWxBc3NldHN9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYylcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RHluYW1pY09iamVjdFJlc29sdmVyIGRvcz17ZG9zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3cmFwcGVkfVxuICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNPYmplY3RSZXNvbHZlcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gd3JhcHBlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBc3NldHNSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRzUmVzb2x2ZXIpO1xuXG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFzc2V0c1Jlc29sdmVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCByZWY9XCJib3VuZF9jb21wb25lbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQXNzZXRzUmVzb2x2ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdyYXBwZXIuZGlzcGxheU5hbWUgPSBgV3JhcHBlcigke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG4gICAgcmV0dXJuIFdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBBY2NvdW50SW1hZ2UgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudEltYWdlXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gICAgQ2hhaW5TdG9yZSxcbiAgICBQdWJsaWNLZXksXG4gICAgQ2hhaW5WYWxpZGF0aW9uLFxuICAgIEZldGNoQ2hhaW4sXG4gICAgRmV0Y2hDaGFpbk9iamVjdHNcbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgYWNjb3VudFV0aWxzIGZyb20gXCJjb21tb24vYWNjb3VudF91dGlsc1wiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtcbiAgICBUb29sdGlwLFxuICAgIEJ1dHRvbixcbiAgICBJbnB1dCxcbiAgICBJY29uIGFzIEFudEljb24sXG4gICAgU2VsZWN0LFxuICAgIEZvcm1cbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuXG5jb25zdCBNQVhfTE9PS1VQX0FUVEVNUFRTID0gNTtcbi8qXG4gKiBAYnJpZWYgQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGFuIGFjY291bnQgYnkgbmFtZSBvciAjSURcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBkZXNpZ25lZCB0byBiZSBzdGF0ZWxlc3MgYXMgcG9zc2libGUuICBJdCdzIHByaW1hcnkgcmVzcG9uc2JpbGl0eSBpcyB0b1xuICogbWFuYWdlIHRoZSBsYXlvdXQgb2YgZGF0YSBhbmQgdG8gZmlsdGVyIHRoZSB1c2VyIGlucHV0LlxuICpcbiAqL1xuXG5jbGFzcyBBY2NvdW50U2VsZWN0b3JMaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZywgLy8gYSB0cmFuc2xhdGlvbiBrZXkgZm9yIHRoZSBsYWJlbFxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLmVsZW1lbnQsIC8vIHRoZSBlcnJvciBtZXNzYWdlIG92ZXJyaWRlXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgcGxhY2Vob2xkZXIgdGV4dCB0byBiZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBpcyBubyB1c2VyX2lucHV0XG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIGFueSB0aW1lIHVzZXIgaW5wdXQgY2hhbmdlc1xuICAgICAgICBvbkFjY291bnRDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gZXhpc3RpbmcgYWNjb3VudCBpcyBzZWxlY3RlZFxuICAgICAgICBvbkFjdGlvbjogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIGNhbGxlZCB3aGVuIEFkZCBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgICBhY2NvdW50TmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGFjY291bnQgc2VsZWN0b3IsIHRoZSBzdHJpbmcgdGhlIHVzZXIgZW50ZXJzXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LCAvLyBhY2NvdW50IG9iamVjdCByZXRyaWV2ZWQgdmlhIEJpbmRUb0NoYWluU3RhdGUgZGVjb3JhdG9yIChub3QgaW5wdXQpXG4gICAgICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLCAvLyB0YWJpbmRleCBwcm9wZXJ0eSB0byBiZSBwYXNzZWQgdG8gaW5wdXQgdGFnXG4gICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b246IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgaXQgaWYgeW91IG5lZWQgdG8gZGlzYWJsZSBhY3Rpb24gYnV0dG9uLFxuICAgICAgICBhbGxvd1VwcGVyY2FzZTogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSBpdCBpZiB5b3UgbmVlZCB0byBhbGxvdyB1cHBlcmNhc2UgbGV0dGVyc1xuICAgICAgICB0eXBlYWhlYWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBleGNsdWRlQWNjb3VudHM6IFByb3BUeXBlcy5hcnJheSwgLy8gYXJyYXkgb2YgYWNjb3VudHMgdG8gZXhjbHVkZSBmcm9tIHRoZSB0eXBlYWhlYWRcbiAgICAgICAgZm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGVkaXRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbG9ja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcmVxdWlyZUFjdGl2ZVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG5vRm9ybTogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVBY2NvdW50czogW10sXG4gICAgICAgIGRpc2FibGVkOiBudWxsLFxuICAgICAgICBlZGl0YWJsZTogbnVsbCxcbiAgICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICAgICAgcmVxdWlyZUFjdGl2ZVNlbGVjdDogdHJ1ZSwgLy8gU2hvdWxkIG5vdCBiZSBzZXQgdG8gZmFsc2UsIHJlcXVpcmVkIGZvciBmYWxsYmFja1xuICAgICAgICBub0Zvcm06IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjY291bnRJbmRleDogW10sXG4gICAgICAgICAgICBsb2NrZWQ6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudCwgYWNjb3VudE5hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBQb3B1bGF0ZSBhY2NvdW50IHNlYXJjaCBhcnJheSwgZmV0Y2ggb25seSBvbmNlXG4gICAgICAgIGlmIChhY2NvdW50TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMubXlBY3RpdmVBY2NvdW50cy5tYXAoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuY29udGFjdHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9mZXRjaEFjY291bnRzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY2NvdW50Q2hhbmdlZCAmJiBhY2NvdW50KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKGFjY291bnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy50eXBlYWhlYWQgJiYgYWNjb3VudE5hbWUpXG4gICAgICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2VkKGFjY291bnROYW1lKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZvY3VzICYmICEhdGhpcy5wcm9wcy5lZGl0YWJsZSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLnVzZXJfaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2UHJvcHMuYWNjb3VudCAmJiBwcmV2UHJvcHMuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKHRoaXMucHJvcHMuYWNjb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYWRkVG9JbmRleChhY2NvdW50TmFtZSwgbm9EZWxheSA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChub0RlbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhY2NvdW50TmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9mZXRjaEFjY291bnRzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkVG9JbmRleChhY2NvdW50TmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2FkZFRoaXNUb0luZGV4KGFjY291bnROYW1lKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFhY2NvdW50TmFtZSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbkFjY291bnRMaXN0ID0gYWNjb3VudEluZGV4LmZpbmQoYSA9PiBhLm5hbWUgPT09IGFjY291bnROYW1lKTtcblxuICAgICAgICBpZiAoYWNjb3VudE5hbWUgJiYgIWluQWNjb3VudExpc3QpIHtcbiAgICAgICAgICAgIGFjY291bnRJbmRleC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIGF0dGVtcHRzOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRJbmRleChuYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXguZmluZEluZGV4KGEgPT4gYS5uYW1lID09PSBuYW1lKTtcbiAgICB9XG5cbiAgICBfZ2V0U2VhcmNoQXJyYXkoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgLy8gRm9yIGFsbCBvYmplY3RzIGluIHNlYXJjaF9hcnJheSwgcXVlcnkgd2l0aCBGZXRjaENoYWluT2JqZWN0c1xuICAgICAgICAvLyBVcGRhdGUgcmVzdWx0cyBmb3IgZWFjaCBvYmplY3Qgd2l0aCByZXR1cm5lZCBkYXRhIGFuZCByZW1vdmUgZnJvbSBzZWFyY2hfYXJyYXlcbiAgICAgICAgLy8gVXBkYXRlIHNlYXJjaF9hcnJheSBmb3IgYWxsIHJlbWFpbmluZyBvYmplY3RzIHdpdGggaW5jcmVhc2VkIGF0dGVtcHRzIGNvdW50XG4gICAgICAgIC8vIHdoaWNoIGlzIHdoZW4gYWNjb3VudCBkb2VzIG5vdCBleGlzdHMsIGJ1dCBjYW4gYWxzbyBiZSBpZiBub2RlIGZhaWxlZCB0byBzZW5kIHJlc3VsdHNcbiAgICAgICAgLy8gYmFjayBpbiB0aW1lLCBzbyB3ZSBxdWVyeSBhdCBsZWFzdCBgTUFYX0xPT0tVUF9BVFRFTVBUU2AgdGltZXMgYmVmb3JlIHdlIHN0b3BcblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IHdoYXQgb2JqZWN0cyB3ZSBzdGlsbCByZXF1aXJlIGRhdGEgZm9yXG4gICAgICAgIGxldCBzZWFyY2hfYXJyYXkgPSBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgIC5maWx0ZXIoc2VhcmNoID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXNlYXJjaC5kYXRhICYmIHNlYXJjaC5hdHRlbXB0cyA8IE1BWF9MT09LVVBfQVRURU1QVFNcbiAgICAgICAgICAgICAgICAgICAgPyBzZWFyY2gubmFtZVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChzZWFyY2ggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2gubmFtZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWFyY2hfYXJyYXk7XG4gICAgfVxuXG4gICAgX2ZldGNoQWNjb3VudHMoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHNlYXJjaF9hcnJheSA9IHRoaXMuX2dldFNlYXJjaEFycmF5KCk7XG5cbiAgICAgICAgaWYgKHNlYXJjaF9hcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoX19ERVZfXylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvb2tlZCBmb3IgXCIgKyBzZWFyY2hfYXJyYXkubGVuZ3RoICsgXCIgYWNjb3VudHNcIik7XG4gICAgICAgICAgICBGZXRjaENoYWluT2JqZWN0cyhcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQsXG4gICAgICAgICAgICAgICAgc2VhcmNoX2FycmF5LFxuICAgICAgICAgICAgICAgIDMwMDAsXG4gICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICkudGhlbihhY2NvdW50cyA9PiB7XG4gICAgICAgICAgICAgICAgYWNjb3VudHMuZm9yRWFjaChhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmplY3RJbmRleCA9IHRoaXMuX2dldEluZGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9wb3B1bGF0ZUFjY291bnRJbmRleChhY2NvdW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFtvYmplY3RJbmRleF0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoX2FycmF5LnNwbGljZShhY2NvdW50LmdldChcIm5hbWVcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZWFyY2hfYXJyYXkuZm9yRWFjaChhY2NvdW50X3RvX2ZpbmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0SW5kZXggPSB0aGlzLl9nZXRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfdG9fZmluZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdLmF0dGVtcHRzKys7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleDogYWNjb3VudEluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSdW4gYW5vdGhlciBmZXRjaCBvZiBhY2NvdW50cyBpZiBkYXRhIGlzIHN0aWxsIG1pc3NpbmdcbiAgICAgICAgICAgICAgICBsZXQgaXNEYXRhTWlzc2luZyA9IHRoaXMuc3RhdGUuYWNjb3VudEluZGV4LmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIGEgPT4gIWEuZGF0YSAmJiBhLmF0dGVtcHRzIDwgTUFYX0xPT0tVUF9BVFRFTVBUU1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNEYXRhTWlzc2luZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZldGNoQWNjb3VudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZUFjY291bnRJbmRleChhY2NvdW50UmVzdWx0KSB7XG4gICAgICAgIGxldCB7bXlBY3RpdmVBY2NvdW50cywgY29udGFjdHN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlbiwganVzdCBmYWlsc2FmZVxuICAgICAgICBpZiAoIWFjY291bnRSZXN1bHQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGxldCBhY2NvdW50TmFtZSA9IGFjY291bnRSZXN1bHQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgbGV0IGFjY291bnRTdGF0dXMgPSBDaGFpblN0b3JlLmdldEFjY291bnRNZW1iZXJTdGF0dXMoYWNjb3VudFJlc3VsdCk7XG4gICAgICAgIGxldCBhY2NvdW50VHlwZSA9IHRoaXMuZ2V0SW5wdXRUeXBlKGFjY291bnROYW1lKTtcblxuICAgICAgICBsZXQgc3RhdHVzTGFiZWwgPSAhYWNjb3VudFV0aWxzLmlzS25vd25TY2FtbWVyKGFjY291bnROYW1lKVxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50Lm1lbWJlci5cIiArIGFjY291bnRTdGF0dXMpXG4gICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubWVtYmVyLnN1c3BlY3RlZF9zY2FtbWVyXCIpO1xuXG4gICAgICAgIGxldCByaWdodExhYmVsID1cbiAgICAgICAgICAgIGFjY291bnRUeXBlID09PSBcIm5hbWVcIlxuICAgICAgICAgICAgICAgID8gXCIjXCIgKyBhY2NvdW50UmVzdWx0LmdldChcImlkXCIpLnN1YnN0cmluZyg0KVxuICAgICAgICAgICAgICAgIDogYWNjb3VudFR5cGUgPT09IFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRSZXN1bHQuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICA6IGFjY291bnRUeXBlID09IFwicHVia2V5XCIgJiYgdGhpcy5wcm9wcy5hbGxvd1B1YktleVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgIGF0dGVtcHRzOiAwLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiBhY2NvdW50UmVzdWx0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IGFjY291bnRUeXBlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogYWNjb3VudFN0YXR1cyxcbiAgICAgICAgICAgICAgICBpc093bkFjY291bnQ6IG15QWN0aXZlQWNjb3VudHMuaGFzKGFjY291bnROYW1lKSxcbiAgICAgICAgICAgICAgICBpc0NvbnRhY3Q6IGNvbnRhY3RzLmhhcyhhY2NvdW50TmFtZSksXG4gICAgICAgICAgICAgICAgaXNLbm93blNjYW1tZXI6IGFjY291bnRVdGlscy5pc0tub3duU2NhbW1lcihhY2NvdW50TmFtZSksXG4gICAgICAgICAgICAgICAgc3RhdHVzTGFiZWw6IHN0YXR1c0xhYmVsLFxuICAgICAgICAgICAgICAgIHJpZ2h0TGFiZWw6IHJpZ2h0TGFiZWwsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOlxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50VXRpbHMuaXNLbm93blNjYW1tZXIoYWNjb3VudE5hbWUpIHx8ICFhY2NvdW50UmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibmVnYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY2FuIGJlIHVzZWQgaW4gcGFyZW50IGNvbXBvbmVudDogdGhpcy5yZWZzLmFjY291bnRfc2VsZWN0b3IuZ2V0QWNjb3VudCgpXG4gICAgZ2V0QWNjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWNjb3VudDtcbiAgICB9XG5cbiAgICBnZXRFcnJvcigpIHtcbiAgICAgICAgbGV0IHthY2NvdW50LCBhY2NvdW50TmFtZSwgZXJyb3IsIHR5cGVhaGVhZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBpbnB1dFR5cGUgPSBhY2NvdW50TmFtZSA/IHRoaXMuZ2V0SW5wdXRUeXBlKGFjY291bnROYW1lKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKCF0eXBlYWhlYWQpIHtcbiAgICAgICAgICAgIGlmICghYWNjb3VudCAmJiBhY2NvdW50TmFtZSAmJiBpbnB1dFR5cGUgIT09IFwicHVia2V5XCIpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuZXJyb3JzLnVua25vd25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUeXBlYWhlYWQgY2FuJ3Qgc2VsZWN0IGFuIHVua25vd24gYWNjb3VudCFcbiAgICAgICAgICAgIC8vIGlmIChcbiAgICAgICAgICAgIC8vICAgICAhKGFsbG93UHViS2V5ICYmIGlucHV0VHlwZSA9PT0gXCJwdWJrZXlcIikgJiZcbiAgICAgICAgICAgIC8vICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgIC8vICAgICBhY2NvdW50TmFtZSAmJlxuICAgICAgICAgICAgLy8gICAgICFhY2NvdW50XG4gICAgICAgICAgICAvLyApXG4gICAgICAgICAgICAvLyAgICAgZXJyb3IgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LmVycm9ycy51bmtub3duXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvciAmJiBhY2NvdW50ICYmICFpbnB1dFR5cGUpXG4gICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuZXJyb3JzLmludmFsaWRcIik7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGdldElucHV0VHlwZSh2YWx1ZSkge1xuICAgICAgICAvLyBPS1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKHZhbHVlWzBdID09PSBcIiNcIiAmJiB1dGlscy5pc19vYmplY3RfaWQoXCIxLjIuXCIgKyB2YWx1ZS5zdWJzdHJpbmcoMSkpKVxuICAgICAgICAgICAgcmV0dXJuIFwiaWRcIjtcbiAgICAgICAgaWYgKENoYWluVmFsaWRhdGlvbi5pc19hY2NvdW50X25hbWUodmFsdWUsIHRydWUpKSByZXR1cm4gXCJuYW1lXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFsbG93UHViS2V5ICYmIFB1YmxpY0tleS5mcm9tUHVibGljS2V5U3RyaW5nKHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybiBcInB1YmtleVwiO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRWZXJpZmllZEFjY291bnROYW1lKGUpIHtcbiAgICAgICAgbGV0IHthbGxvd1VwcGVyY2FzZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdmFsdWUgPSBlO1xuICAgICAgICB9IGVsc2UgaWYgKGUgJiYgZS50YXJnZXQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbGxvd1VwcGVyY2FzZSkgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIElmIHJlZ2V4IG1hdGNoZXMgXi4qIy9hY2NvdW50L2FjY291bnQtbmFtZS8uKiQsIHBhcnNlIG91dCBhY2NvdW50LW5hbWVcbiAgICAgICAgbGV0IF92YWx1ZSA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpLm1hdGNoKC8oPzpcXC9hY2NvdW50XFwvKSguKikvKTtcbiAgICAgICAgaWYgKF92YWx1ZSkgdmFsdWUgPSBfdmFsdWVbMV07XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIF9ub3RpZnlPbkNoYW5nZShzZWxlY3RlZEFjY291bnROYW1lLCBpbnB1dFR5cGUpIHtcbiAgICAgICAgbGV0IHtwcm9wc30gPSB0aGlzO1xuXG4gICAgICAgIC8vIENsZWFyIHNlbGVjdGVkIGFjY291bnQgd2hlbiB3ZSBoYXZlIG5ldyBpbnB1dCBkYXRhIGlmIHdlIHJlcXVpcmUgYW4gYWN0aXZlIHNlbGVjdFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpbnB1dFR5cGUgPT0gXCJpbnB1dFwiICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnR5cGVhaGVhZCAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXF1aXJlQWN0aXZlU2VsZWN0XG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCEhcHJvcHMub25BY2NvdW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQWNjb3VudENoYW5nZWQobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gdGhpcy5nZXRWZXJpZmllZEFjY291bnROYW1lKHNlbGVjdGVkQWNjb3VudE5hbWUpO1xuXG4gICAgICAgIC8vIFN5bmNocm9ub3VzIG9uQ2hhbmdlIGZvciBpbnB1dCBjaGFuZ2VcbiAgICAgICAgaWYgKCEhcHJvcHMub25DaGFuZ2UgJiYgKCEhYWNjb3VudE5hbWUgfHwgYWNjb3VudE5hbWUgPT09IFwiXCIpKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShhY2NvdW50TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3luY2hyb25vdXMgb25BY2NvdW50Q2hhbmdlZCBmb3IgY2hlY2tpbmcgb24gY2hhaW5cbiAgICAgICAgaWYgKCEhcHJvcHMub25BY2NvdW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgRmV0Y2hDaGFpbihcImdldEFjY291bnRcIiwgYWNjb3VudE5hbWUsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgIFthY2NvdW50TmFtZV06IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhIWFjY291bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5wcm9wcy5yZXF1aXJlQWN0aXZlU2VsZWN0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlID09IFwic2VsZWN0XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMucmVxdWlyZUFjdGl2ZVNlbGVjdClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkFjY291bnRDaGFuZ2VkKGFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2VsZWN0KHNlbGVjdGVkQWNjb3VudE5hbWUpIHtcbiAgICAgICAgdGhpcy5fbm90aWZ5T25DaGFuZ2Uoc2VsZWN0ZWRBY2NvdW50TmFtZSwgXCJzZWxlY3RcIik7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZWQoZSkge1xuICAgICAgICB0aGlzLl9hZGRUb0luZGV4KHRoaXMuZ2V0VmVyaWZpZWRBY2NvdW50TmFtZShlKSk7XG4gICAgICAgIHRoaXMuX25vdGlmeU9uQ2hhbmdlKGUsIFwiaW5wdXRcIik7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aW9uKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uQWRkQ29udGFjdCgpIHtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMuYWRkQWNjb3VudENvbnRhY3QodGhpcy5wcm9wcy5hY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgX29uUmVtb3ZlQ29udGFjdCgpIHtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMucmVtb3ZlQWNjb3VudENvbnRhY3QodGhpcy5wcm9wcy5hY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgb25BY3Rpb24oZSkge1xuICAgICAgICBsZXQge29uQWN0aW9uLCBkaXNhYmxlQWN0aW9uQnV0dG9uLCBhY2NvdW50LCBhY2NvdW50TmFtZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5nZXRFcnJvcigpICYmIG9uQWN0aW9uICYmICFkaXNhYmxlQWN0aW9uQnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudCkgb25BY3Rpb24oYWNjb3VudCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmdldElucHV0VHlwZShhY2NvdW50TmFtZSkgPT09IFwicHVia2V5XCIpXG4gICAgICAgICAgICAgICAgb25BY3Rpb24oYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnRJbmRleH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCB7YWNjb3VudCwgYWNjb3VudE5hbWUsIGRpc2FibGVBY3Rpb25CdXR0b259ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgc2VhcmNoSW5Qcm9ncmVzcyA9IHRoaXMuc3RhdGUuYWNjb3VudEluZGV4LmZpbmQoXG4gICAgICAgICAgICBhID0+ICFhLmRhdGEgJiYgYS5hdHRlbXB0cyA8IE1BWF9MT09LVVBfQVRURU1QVFNcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsb2NrZWRTdGF0ZSA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvY2tlZCAhPT0gbnVsbCA/IHRoaXMuc3RhdGUubG9ja2VkIDogdGhpcy5wcm9wcy5sb2NrZWQ7XG5cbiAgICAgICAgbGV0IGVycm9yID0gdGhpcy5nZXRFcnJvcigpLFxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lcixcbiAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudCxcbiAgICAgICAgICAgIGRpc2FibGVkQWN0aW9uLFxuICAgICAgICAgICAgZGlzYWJsZWRJbnB1dCxcbiAgICAgICAgICAgIGVkaXRhYmxlSW5wdXQsXG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzO1xuXG4gICAgICAgIGVkaXRhYmxlSW5wdXQgPSAhIWxvY2tlZFN0YXRlXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuZWRpdGFibGUgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5lZGl0YWJsZVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGRpc2FibGVkSW5wdXQgPSAhIWxvY2tlZFN0YXRlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5kaXNhYmxlZCAhPSBudWxsXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gU2VsZWN0ZWQgQWNjb3VudFxuICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgbGV0IG9iamVjdEluZGV4ID0gdGhpcy5fZ2V0SW5kZXgoYWNjb3VudC5nZXQoXCJuYW1lXCIpLCBhY2NvdW50SW5kZXgpO1xuXG4gICAgICAgICAgICBzZWxlY3RlZEFjY291bnQgPVxuICAgICAgICAgICAgICAgIGFjY291bnRJbmRleCAmJiBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEluZGV4W29iamVjdEluZGV4XS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc2FibGVkQWN0aW9uID1cbiAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgYWNjb3VudCB8fFxuICAgICAgICAgICAgICAgIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LnR5cGUgPT09IFwicHVia2V5XCIpXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICBlcnJvciB8fFxuICAgICAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbjtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC5pc093bkFjY291bnQpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAub3duX2FjY291bnRcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwIGdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwidXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQuaXNLbm93blNjYW1tZXIpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuc2NhbV9hY2NvdW50XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcCByZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJ3YXJuaW5nXCIgdGhlbWU9XCJmaWxsZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LmlzQ29udGFjdCkge1xuICAgICAgICAgICAgbGlua2VkX3N0YXR1cyA9IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5mb2xsb3dfdXNlclwiKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25SZW1vdmVDb250YWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwIGdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwic3RhclwiIHRoZW1lPVwiZmlsbGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2NvdW50KSB7XG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLmZvbGxvd191c2VyX2FkZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25BZGRDb250YWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwic3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZWFoZWFkKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uc0NvbnRhaW5lciA9IGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbHRlciBhY2NvdW50cyBiYXNlZCBvblxuICAgICAgICAgICAgICAgICAgICAvLyAtIEV4Y2x1ZGUgd2l0aG91dCByZXN1bHRzIChtaXNzaW5nIGNoYWluIGRhdGEgYXQgdGhlIG1vbWVudClcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBFeGNsdWRlZCBhY2NvdW50cyAoYnkgcHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gSW5jbHVkZSB1c2VycyBvd24gYWNjb3VudHMgKGlzT3duQWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBJbmNsdWRlIHVzZXJzIGNvbnRhY3RzIChpc0NvbnRhY3QpIHVubGVzcyBpdCdzIGEgcHJldmlvdXNseSBsb2NrZWQgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBJbmNsdWRlIGN1cnJlbnQgaW5wdXRcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZXhjbHVkZUFjY291bnRzLmluZGV4T2YoYWNjb3VudC5pZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmRhdGEuaXNPd25BY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMubG9ja2VkICYmIGFjY291bnQuZGF0YS5pc0NvbnRhY3QpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoYWNjb3VudE5hbWUgJiYgYWNjb3VudC5kYXRhLm5hbWUgPT09IGFjY291bnROYW1lKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5kYXRhLmlzT3duQWNjb3VudCA8IGIuZGF0YS5pc093bkFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmRhdGEubmFtZSA+IGIuZGF0YS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthY2NvdW50LmRhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnQuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY2NvdW50LmRhdGEuZGlzYWJsZWQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEuaXNPd25BY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwidXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5pc0NvbnRhY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJzdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLmlzS25vd25TY2FtbWVyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwid2FybmluZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLnN0YXR1c0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lciA9IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWxQcm9wPXtcInZhbHVlXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LnNlYXJjaFwiKX1cbiAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwubm90X2ZvdW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRBY2NvdW50ID8gc2VsZWN0ZWRBY2NvdW50Lm5hbWUgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWRJbnB1dCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc0NvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyID0gKFxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LnR5cGUgPT09IFwicHVia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsb3dlcmNhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBcImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5lZGl0YWJsZSA/IFwidXNlcm5hbWVcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYWNjb3VudE5hbWUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5uYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1c2VyX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17XG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5lZGl0YWJsZSB8fCAhIXRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLnRhYkluZGV4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgISFlZGl0YWJsZUlucHV0ID8gZWRpdGFibGVJbnB1dC50b1N0cmluZygpIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgISFlZGl0YWJsZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoIWVkaXRhYmxlSW5wdXQpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudEltYWdlQ29udGFpbmVyID0gdGhpcy5wcm9wc1xuICAgICAgICAgICAgLmhpZGVJbWFnZSA/IG51bGwgOiBzZWxlY3RlZEFjY291bnQgJiZcbiAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmFjY291bnRUeXBlID09PSBcInB1YmtleVwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImtleVwiIHRpdGxlPVwiaWNvbnMua2V5XCIgc2l6ZT1cIjR4XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPEFjY291bnRJbWFnZVxuICAgICAgICAgICAgICAgIHNpemU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnNpemUgfHwgMzMsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnNpemUgfHwgMzNcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFjY291bnQ9e3NlbGVjdGVkQWNjb3VudCA/IHNlbGVjdGVkQWNjb3VudC5uYW1lIDogbnVsbH1cbiAgICAgICAgICAgICAgICBjdXN0b21faW1hZ2U9e251bGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBsb2NrZWRTdGF0ZUNvbnRhaW5lciA9ICFsb2NrZWRTdGF0ZSA/IG51bGwgOiBcIlwiO1xuXG4gICAgICAgIGxldCByaWdodExhYmVsQ29udGFpbmVyID1cbiAgICAgICAgICAgICF0aGlzLnByb3BzLmxhYmVsIHx8ICFzZWxlY3RlZEFjY291bnQgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyLWFyZWFcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5oaWRlSW1hZ2UgPyBcIiBuby1tYXJnaW5cIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudC5pc0NvbnRhY3QgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQuaXNPd25BY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJwb3NpdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQuaXNLbm93blNjYW1tZXIgPyBcIm5lZ2F0aXZlXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IC0zMH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiBcIjAuNXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQWNjb3VudC5yaWdodExhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEFjY291bnQuZGlzcGxheVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlua2VkX3N0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgRm9ybVdyYXBwZXIgPSB0aGlzLnByb3BzLm5vRm9ybSA/IFJlYWN0LkZyYWdtZW50IDogRm9ybTtcbiAgICAgICAgY29uc3QgZm9ybVdyYXBwZXJQcm9wcyA9IHRoaXMucHJvcHMubm9Gb3JtXG4gICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmdWxsLXdpZHRoXCIsXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtYXJlYVwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudG9vbHRpcH1cbiAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9ybVdyYXBwZXIgey4uLmZvcm1XcmFwcGVyUHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtlcnJvciA/IFwiZXJyb3JcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPXtlcnJvciA/IGVycm9yIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JpZ2h0TGFiZWxDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VIUiAmJiA8aHIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnRJbWFnZUNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybUNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoSW5Qcm9ncmVzcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cImxvYWRpbmdcIiBzdHlsZT17e3BhZGRpbmc6IDEwfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9ja2VkU3RhdGVDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub25BY3Rpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5yZXF1aXJlZF9pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnbG9iYWwuZmllbGRfdHlwZS5hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY3Rpb24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMuYWN0aW9uX2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvRm9ybVdyYXBwZXI+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BY2NvdW50U2VsZWN0b3JMaXN0aW5nID0gQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50U2VsZWN0b3JMaXN0aW5nKTtcblxuQWNjb3VudFNlbGVjdG9yTGlzdGluZyA9IGNvbm5lY3QoXG4gICAgQWNjb3VudFNlbGVjdG9yTGlzdGluZyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50czogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkubXlBY3RpdmVBY2NvdW50cyxcbiAgICAgICAgICAgICAgICBjb250YWN0czogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuYWNjb3VudENvbnRhY3RzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudFNlbGVjdG9yTGlzdGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtEb251dENoYXJ0fSBmcm9tIFwiLi9Eb251dENoYXJ0XCI7XG5pbXBvcnQgU2VuZE1vZGFsIGZyb20gXCIuL0RvbmF0ZVNlbmRNb2RhbFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcblxuaW1wb3J0IFNldHRpbmdzU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9TZXR0aW5nc1N0b3JlXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcblxuY2xhc3MgQ29pbkNhcmRMaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5jb2luLnZvdGVzID0gMDtcbiAgICB9XG5cbiAgICB0cmlnZ2VyU2VuZChhc3NldCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZW5kX2Fzc2V0OiBhc3NldH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbmRfbW9kYWwpIHRoaXMuc2VuZF9tb2RhbC5zaG93KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGZyb21fbmFtZSA9IFwiXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHtjb2lufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19yb3dcIj5cbiAgICAgICAgICAgICAgICA8U2VuZE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tb2RhbF9saXN0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuc2VuZF9tb2RhbCA9IGU7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGZyb21fbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0b19uYW1lPXtjb2luLmFjY291bnQgPyBjb2luLmFjY291bnQgOiBmcm9tX25hbWV9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkPXtcIjEuMy4yXCJ9XG4gICAgICAgICAgICAgICAgICAgIHRpY2tlcj17Y29pbi50aWNrZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVJhbmsgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmFua31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlTG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogNDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31jb2lucy1sb2dvLyR7Y29pbi50aWNrZXIudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVBc3NldE5hbWUgYWxpZ24tbGVmdCBub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5uYW1lfSAoe2NvaW4udGlja2VyfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5zb29uID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibGlzdGluZy50YWJsZS5jb21pbmdfc29vblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCIsIGNvbG9yOiBcImdvbGRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2NvaW4ucGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImxpc3RpbmcuZ290b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlR29hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9CbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5nb2FsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwO3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLmdvYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5saXN0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmRvbmF0ZXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi52b3Rlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLnNvb24gPT09IHRydWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY29pbi1zb29uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudHJpZ2dlclNlbmQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLmRvbmF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRvbmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudHJpZ2dlclNlbmQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLmRvbmF0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuc3RhdHVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiZuYnNwO3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1wibGlzdGluZy50YWJsZS5cIiArIGNvaW4uc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLmxpc3RlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb251dENoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm90ZXM9e2NvaW4udm90ZXNfZm9yX3BlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29hbD17Y29pbi5nb2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkNvaW5DYXJkTGlzdGluZyA9IGNvbm5lY3QoQ29pbkNhcmRMaXN0aW5nLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZSwgQWNjb3VudFN0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncyxcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OlxuICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudFxuICAgICAgICB9O1xuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb2luQ2FyZExpc3Rpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1NlbmRNb2RhbH0gZnJvbSBcIi4uL01vZGFsL1NlbmRNb2RhbFwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xuaW1wb3J0IEFjY291bnRTZWxlY3Rvckxpc3RpbmcgZnJvbSBcIi4vQWNjb3VudFNlbGVjdG9yTGlzdGluZ1wiO1xuaW1wb3J0IEZlZUFzc2V0U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvRmVlQXNzZXRTZWxlY3RvclwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtpc05hTn0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHtGb3JtLCBNb2RhbCwgQnV0dG9uLCBUb29sdGlwLCBJbnB1dH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IEJhbGFuY2VDb21wb25lbnQgZnJvbSBcIi4uL1V0aWxpdHkvQmFsYW5jZUNvbXBvbmVudFwiO1xuaW1wb3J0IHtnZXRXYWxsZXROYW1lfSBmcm9tIFwiLi4vLi4vYnJhbmRpbmdcIjtcbmltcG9ydCB7QXNzZXR9IGZyb20gXCIuLi8uLi9saWIvY29tbW9uL01hcmtldENsYXNzZXNcIjtcblxuY2xhc3MgRG9uYXRlU2VuZE1vZGFsIGV4dGVuZHMgU2VuZE1vZGFsIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKG5wLnRvX25hbWUgIT09IHRoaXMuc3RhdGUudG9fbmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9fbmFtZTogbnAudG9fbmFtZSA/IG5wLnRvX25hbWUgOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRvX2FjY291bnQ6IG5wLnRvX25hbWVcbiAgICAgICAgICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldEFjY291bnQobnAudG9fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHByb3Bvc2UsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQsXG4gICAgICAgICAgICB0b19hY2NvdW50LFxuICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICBhc3NldF9pZCxcbiAgICAgICAgICAgIHByb3Bvc2VfYWNjb3VudCxcbiAgICAgICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIHRvX25hbWUsXG4gICAgICAgICAgICBmcm9tX25hbWUsXG4gICAgICAgICAgICBtZW1vLFxuICAgICAgICAgICAgYmFsYW5jZUVycm9yLFxuICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgZnJvbV9teV9hY2NvdW50ID1cbiAgICAgICAgICAgIEFjY291bnRTdG9yZS5pc015QWNjb3VudChmcm9tX2FjY291bnQpIHx8XG4gICAgICAgICAgICBmcm9tX25hbWUgPT09IHRoaXMucHJvcHMucGFzc3dvcmRBY2NvdW50O1xuICAgICAgICBsZXQgZnJvbV9lcnJvciA9XG4gICAgICAgICAgICBmcm9tX2FjY291bnQgJiYgIWZyb21fbXlfYWNjb3VudCAmJiAhcHJvcG9zZSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikgJiYgIWZyb21fZXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgICAgIGxldCBfZXJyb3IgPSB0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IFwiaGFzLWVycm9yXCIgOiBcIlwiO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYXNzZXRfdHlwZXNbMF0pO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IGFzc2V0ID8gYXNzZXQuZ2V0KFwiaWRcIikgOiBhc3NldF90eXBlc1swXTtcblxuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17X2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0VG90YWwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hc3NldF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWxhbmNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtfZXJyb3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5ub0Z1bmRzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvcG9zZV9pbmNvbXBsZXRlID0gcHJvcG9zZSAmJiAhcHJvcG9zZV9hY2NvdW50O1xuICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChhbW91bnQsIC8sL2csIFwiXCIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGlzQW1vdW50VmFsaWQgPSBhbW91bnRWYWx1ZSAmJiAhaXNOYU4oYW1vdW50VmFsdWUpO1xuICAgICAgICBjb25zdCBpc1N1Ym1pdE5vdFZhbGlkID1cbiAgICAgICAgICAgICFmcm9tX2FjY291bnQgfHxcbiAgICAgICAgICAgICF0b19hY2NvdW50IHx8XG4gICAgICAgICAgICAhaXNBbW91bnRWYWxpZCB8fFxuICAgICAgICAgICAgIWFzc2V0IHx8XG4gICAgICAgICAgICBmcm9tX2Vycm9yIHx8XG4gICAgICAgICAgICBwcm9wb3NlX2luY29tcGxldGUgfHxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvciB8fFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LmdldChcImlkXCIpID09IHRvX2FjY291bnQuZ2V0KFwiaWRcIik7XG5cbiAgICAgICAgbGV0IHRhYkluZGV4ID0gdGhpcy5wcm9wcy50YWJJbmRleDsgLy8gQ29udGludWUgdGFiSW5kZXggb24gcHJvcHMgY291bnRcblxuICAgICAgICByZXR1cm4gIXRoaXMuc3RhdGUub3BlbiA/IG51bGwgOiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgaWQ9XCJzZW5kX21vZGFsX3dyYXBwZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aGlkZGVuIHx8ICF0aGlzLnN0YXRlLm9wZW4gPyBcImhpZGVcIiA6IFwiXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNNb2RhbFZpc2libGV9XG4gICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oaWRlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJzZW5kXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0Tm90VmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJvcG9zZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRyYW5zZmVyLnNlbmRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiQ2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiBcIjE4cHhcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWlzU3VibWl0Tm90VmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibGlzdGluZy5tb2RhbF9oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsaXN0aW5nLm1vZGFsLm5lZWRfYnV5X2RvbmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImxpc3RpbmcubW9kYWwuaGVhZGVyMlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXRfbmFtZT17Z2V0V2FsbGV0TmFtZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGlja2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGgtd3JhcHBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JMaXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnJvbV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mcm9tQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Gcm9tQWNjb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2tlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uQWN0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3Rvckxpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17dG9fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWNjb3VudENoYW5nZWQ9e3RoaXMub25Ub0FjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lZGl0YWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFtb3VudENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5sZW5ndGggPiAwICYmIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXNzZXQuZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfdHlwZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYXNzZXRzPXthc3NldF90eXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlfYmFsYW5jZT17YmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOYU49e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWVBc3NldFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHJhbnNmZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXCJwcmljZV9wZXJfa2J5dGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm1lbW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBEb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPERvbmF0ZVNlbmRNb2RhbCB7Li4udGhpcy5wcm9wc30gcmVmPXt0aGlzLnByb3BzLnJlZkNhbGxiYWNrfSAvPjtcbiAgICB9XG59XG5cbkRvbmF0ZVNlbmRNb2RhbENvbm5lY3RXcmFwcGVyID0gY29ubmVjdChEb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlciwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcyhwcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudEFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICB0YWJJbmRleDogcHJvcHMudGFiSW5kZXggfHwgMFxuICAgICAgICB9O1xuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vRG9udXRDaGFydC5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IERvbnV0Q2hhcnQgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQoKHByb3BzLnZvdGVzIC8gcHJvcHMuZ29hbCkgKiAxMDApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9udXQtaG9sZVwiXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb251dC1yaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImxpZ2h0Z3JheVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiOFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbnV0LXNlZ21lbnRcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjhcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3N0cm9rZURhc2hhcnJheTogYCR7cGVyY2VudH0gMTAwYH19XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ9XCIwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2lkZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyY2VudFwiPntwZXJjZW50ICsgXCIlXCJ9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL0xpc3RpbmdQYWdlLmNzc1wiO1xuXG5pbXBvcnQge0FwaXN9IGZyb20gXCJiaXRzaGFyZXNqcy13c1wiO1xuaW1wb3J0IHtGZXRjaENoYWlufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcblxuaW1wb3J0IENvaW5DYXJkTGlzdGluZyBmcm9tIFwiLi9Db2luQ2FyZExpc3RpbmdcIjtcbmltcG9ydCB7Z2V0TGlzdGluZ0NvaW5zLCBnZXRMaXN0ZWRDb2luc30gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge1RhYnMsIFRhYn0gZnJvbSBcIi4uL1V0aWxpdHkvVGFic1wiO1xuaW1wb3J0IEFzc2V0SW1hZ2UgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXRJbWFnZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBJbnRsU3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9JbnRsU3RvcmVcIjtcblxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuXG5jbGFzcyBMaXN0aW5nUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBMaXN0aW5nTm90aWNlMUluZm9ybWVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvaW5zOiBbXSxcbiAgICAgICAgICAgIHVwZGF0aW5nOiB0cnVlLFxuICAgICAgICAgICAgY3VycmVudExvY2FsZTogdGhpcy5wcm9wcy5jdXJyZW50TG9jYWxlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICBcImxpbmtzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFncmVlbWVudF9ydVwiOiBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbS9zdXBwb3J0L3NvbHV0aW9ucy9hcnRpY2xlcy8zNTAwMDEzODI0Ny1j0L7Qs9C70LDRiNC10L3QuNC1LdC+0LEt0L7QutCw0LfQsNC90LjQuC3Rg9GB0LvRg9CzLdGI0LvRjtC30LBcIixcbiAgICAgICAgICAgICAgICBcImFncmVlbWVudF9lblwiOiBcImh0dHBzOi8vcnVkZXguZnJlc2hkZXNrLmNvbS9zdXBwb3J0L3NvbHV0aW9ucy9hcnRpY2xlcy8zNTAwMDEzODI0NS1nYXRld2F5LXNlcnZpY2UtYWdyZWVtZW50XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRvbmF0ZVRva2VuTmFtZVwiOiBcIkRPTkFURVwiLFxuICAgICAgICAgICAgXCJkb25hdGVNYXJrZXRcIjogXCJET05BVEVfUlVERVguVVNEVFwiLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXh0UHJvcHMuY3VycmVudExvY2FsZSAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50TG9jYWxlXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudExvY2FsZTogbmV4dFByb3BzLmN1cnJlbnRMb2NhbGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0UmVxdWVzdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG51bGx9KTtcblxuICAgICAgICBsZXQgbGlua19ydSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvMWxKbnZ1ZmM5NUNEaDJ6MU50cTdpQ1NFczNvRDd0UEc0bmxqS1RZWWV6UXdcIjtcbiAgICAgICAgbGV0IGxpbmtfZW4gPVxuICAgICAgICAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kLzFYMlBndUFhUnp4bFhaR0xBYXJHY21OZC1MYkpDeThsY29NQmNRakZTUTVrXCI7XG5cbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5zdGF0ZS5jdXJyZW50TG9jYWxlID09IFwicnVcIiA/IGxpbmtfcnUgOiBsaW5rX2VuLCBcIl9ibGFua1wiKTtcbiAgICB9XG5cbiAgICBvbkxpc3RpbmdOb3RpY2UxSW5mb3JtZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgTGlzdGluZ05vdGljZTFJbmZvcm1lZDogIXRoaXMuc3RhdGUuTGlzdGluZ05vdGljZTFJbmZvcm1lZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5fZ2V0QmFsYW5jZXMoKSwgMTAwMCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmIChuZXh0U3RhdGUudXBkYXRpbmcgPT0gZmFsc2UpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgX2dldEJhbGFuY2VzKCkge1xuICAgICAgICBsZXQgY29pbnMgPSBnZXRMaXN0aW5nQ29pbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb2lucy5sZW5ndGggIT09IDApIGNvaW5zID0gdGhpcy5zdGF0ZS5jb2lucztcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvaW5zOiBjb2lucyxcbiAgICAgICAgICAgIHVwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvaW5zLmZvckVhY2goY29pbiA9PiB7XG4gICAgICAgICAgICBGZXRjaENoYWluKFwiZ2V0QXNzZXRcIiwgdGhpcy5kYXRhLmRvbmF0ZVRva2VuTmFtZSkudGhlbihhc3NldEluZm8gPT4ge1xuICAgICAgICAgICAgICAgIEFwaXMuaW5zdGFuY2UoKVxuICAgICAgICAgICAgICAgICAgICAuZGJfYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMoXCJnZXRfbmFtZWRfYWNjb3VudF9iYWxhbmNlc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2luLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXNzZXRJbmZvLmdldChcImlkXCIpXVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvaW5zID0gdGhpcy5zdGF0ZS5jb2lucztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4ID0gY29pbnMuZmluZChpID0+IGkuYWNjb3VudCA9PT0gY29pbi5hY2NvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgudm90ZXMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1swXVtcImFtb3VudFwiXSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coMTAsIGFzc2V0SW5mby5nZXQoXCJwcmVjaXNpb25cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29pbnM6IGNvaW5zXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudXBkYXRpbmcgPT09XG4gICAgICAgICAgICAgICAgdHJ1ZSA/XG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1RleHQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImZvb3Rlci5sb2FkaW5nXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IHRoaXMuZ2V0VGFibGVUYWJzKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRDb250ZW50KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAyLCBmb250U2l6ZTogXCIxLjByZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17YC9tYXJrZXQvJHt0aGlzLmRhdGEuZG9uYXRlTWFya2V0fWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcuZ2V0X2RvbmF0ZV90b2tlbnNcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7bWFyZ2luOiAyLCBmb250U2l6ZTogXCIxLjByZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuZGF0YS5kb25hdGVUb2tlbk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5kYXRhLmRvbmF0ZVRva2VuTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudG9rZW5cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVJhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLnJhbmtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUxvZ29cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVBc3NldE5hbWUgYWxpZ24tbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuYXNzZXRfbmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlVm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5nb2FsXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUdvYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5kb25hdGVzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLnN0YXR1c1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLnByb2dyZXNzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLmdldENvaW5zTGlzdCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGdldENvbnRlbnRfbGlzdGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucmFua1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlTG9nb1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUFzc2V0TmFtZSBhbGlnbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5hc3NldF9uYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0RhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmdvYWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5zdGF0dXNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29pbnNMaXN0X2xpc3RlZCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGdldENvaW5zTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHtjb2luc30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgc29ydGVkQ29pbnMgPSBjb2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYi52b3RlcyAtIGEudm90ZXM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkQ29pbnMubWFwKChjb2luLCBpKSA9PiB7XG4gICAgICAgICAgICBjb2luLnZvdGVzX2Zvcl9wZXJjZW50ID1cbiAgICAgICAgICAgICAgICBjb2luLnZvdGVzIDwgY29pbi5nb2FsID8gY29pbi52b3RlcyA6IGNvaW4uZ29hbDtcbiAgICAgICAgICAgIGNvaW4uc3RhdHVzID0gY29pbi52b3RlcyA8IGNvaW4uZ29hbCA/IFwiY29sbGVjdGluZ1wiIDogXCJkb25lXCI7XG4gICAgICAgICAgICBjb2luLnNvb24gPT0gdHJ1ZSA/IChjb2luLnN0YXR1cyA9IFwid2FpdGluZ1wiKSA6IGNvaW4uc29vbjtcblxuICAgICAgICAgICAgcmV0dXJuIDxDb2luQ2FyZExpc3Rpbmcga2V5PXtpfSByYW5rPXtpICsgMX0gY29pbj17Y29pbn0vPjtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGdldENvaW5zTGlzdF9saXN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb2lucyA9IGdldExpc3RlZENvaW5zKCk7XG4gICAgICAgIGxldCBzb3J0ZWRDb2lucyA9IGNvaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiLnZvdGVzIC0gYS52b3RlcztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzb3J0ZWRDb2lucy5tYXAoKGNvaW4sIGkpID0+IHtcbiAgICAgICAgICAgIGNvaW4udm90ZXNfZm9yX3BlcmNlbnQgPVxuICAgICAgICAgICAgICAgIGNvaW4udm90ZXMgPCBjb2luLmdvYWwgPyBjb2luLnZvdGVzIDogY29pbi5nb2FsO1xuICAgICAgICAgICAgY29pbi5zdGF0dXMgPSBcImRvbmVcIjtcbiAgICAgICAgICAgIGNvaW4ubGlzdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIDxDb2luQ2FyZExpc3Rpbmcga2V5PXtpfSByYW5rPXtpICsgMX0gY29pbj17Y29pbn0vPjtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGdldFRhYmxlVGFicyA9ICgpID0+IHtcblxuICAgICAgICBsZXQgUnVERVggPSA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+UnVERVg8L3NwYW4+O1xuXG4gICAgICAgIGxldCBEb25hdGVMaW5rID0gKHN0eWxlID0ge1xuICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDVcbiAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIHRvPXtgL2Fzc2V0LyR7dGhpcy5kYXRhLmRvbmF0ZVRva2VuTmFtZX1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5kYXRhLmRvbmF0ZVRva2VuTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuZGF0YS5kb25hdGVUb2tlbk5hbWV9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgc21hbGwtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLWNvbnRhaW5lciBnZW5lcmljLWJvcmRlcmVkLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlVGFiPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZz1cInBlcm1pc3Npb25zVGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNDbGFzcz1cImFjY291bnQtb3ZlcnZpZXcgYm9yZGVyZWQtaGVhZGVyIGNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRDbGFzcz1cInBhZGRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBET05BVEUgUFJPR1JFU1MqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIHRpdGxlPVwibGlzdGluZy5kb25hdGVfcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhvcml6b250YWxcIiB0YWJJbmRleD17MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIycmVtIDhweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtdXAtMSBtZWRpdW0tdXAtMSBsYXJnZS11cC0xIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldENvbnRlbnQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIExJU1RFRCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJsaXN0aW5nLmxpc3RlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbFwiIHRhYkluZGV4PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzbWFsbC11cC0xIG1lZGl1bS11cC0xIGxhcmdlLXVwLTEgbm8tb3ZlcmZsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0Q29udGVudF9saXN0ZWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBDb2luKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImxpc3RpbmcuYWRkX2NvaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgaGVscC1jb250ZW50LWxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5oZWFkZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6IFwiMjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQzLnQxXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQzLnQyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYC9tYXJrZXQvJHt0aGlzLmRhdGEuZG9uYXRlTWFya2V0fWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0My5nZXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NC50MVwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RG9uYXRlTGluaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDQudDJcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0RvbmF0ZUxpbmsoKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMXB4IHNvbGlkICMwMGE5ZTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjRweCAzcHggM3B4IDRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZGF0YS5kb25hdGVUb2tlbk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDQudDRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDUudDFcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0RvbmF0ZUxpbmsoKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ1LnQyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ1LnQzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5oZWFkZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudExvY2FsZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5kYXRhLmxpbmtzLmFncmVlbWVudF9ydVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmRhdGEubGlua3MuYWdyZWVtZW50X2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzExXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RG9uYXRlTGluaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV81XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkxpc3RpbmdOb3RpY2UxSW5mb3JtZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3Rpbmcubm90aWNlX2luZm9ybWVkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibGlzdGluZ19idXR0b25cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5MaXN0aW5nTm90aWNlMUluZm9ybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub25TdWJtaXRSZXF1ZXN0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5zdWJtaXRfcmVxdWVzdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5lbmRcIi8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSdURFWH0hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTGlzdGluZ1BhZ2UgPSBjb25uZWN0KFxuICAgIExpc3RpbmdQYWdlLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0ludGxTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50TG9jYWxlOiBJbnRsU3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50TG9jYWxlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdQYWdlO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtiaW5kVG9DdXJyZW50QWNjb3VudH0gZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnRcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQXNzZXRTdG9yZVwiO1xyXG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvTWFya2V0c1N0b3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDYXJkLFxyXG4gICAgQ29sbGFwc2UsXHJcbiAgICBSb3csXHJcbiAgICBDb2wsXHJcbiAgICBUYWJsZSxcclxuICAgIEJ1dHRvbixcclxuICAgIFN3aXRjaCxcclxuICAgIFRvb2x0aXBcclxufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBTZWxsUmVjZWl2ZSBmcm9tIFwiY29tcG9uZW50cy9RdWlja1RyYWRlL1NlbGxSZWNlaXZlXCI7XHJcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0QXNzZXRzVG9TZWxsLFxyXG4gICAgZ2V0UHJpY2VzLFxyXG4gICAgZ2V0T3JkZXJzLFxyXG4gICAgZ2V0RmVlc1xyXG59IGZyb20gXCIuL1F1aWNrVHJhZGVIZWxwZXJcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlLCBGZXRjaENoYWlufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xyXG5pbXBvcnQge0NoYWluVmFsaWRhdGlvbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7bG9va3VwQXNzZXRzfSBmcm9tIFwiLi4vRXhjaGFuZ2UvTWFya2V0UGlja2VySGVscGVyc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xyXG5pbXBvcnQge0Fzc2V0LCBMaW1pdE9yZGVyQ3JlYXRlfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZFByaWNlXCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFF1aWNrVHJhZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudEFzc2V0cyA9IGdldEFzc2V0c1RvU2VsbChwcm9wcy5jdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbW91bnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1YjogXCJcIixcclxuICAgICAgICAgICAgc2VsbEFzc2V0SW5wdXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldDogbnVsbCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0czogYWNjb3VudEFzc2V0cyxcclxuICAgICAgICAgICAgc2VsbEFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgc2VsbEltZ05hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dDogXCJcIixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0OiBudWxsLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRzOiBhY2NvdW50QXNzZXRzLFxyXG4gICAgICAgICAgICByZWNlaXZlQW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICByZWNlaXZlSW1nTmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgICAgICAgIGFjdGl2ZUlucHV0OiBcIlwiLFxyXG4gICAgICAgICAgICBhY3RpdmVBbW91bnRJbnB1dDogXCJcIixcclxuICAgICAgICAgICAgbG9va3VwUXVvdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIG9yZGVyczogW10sXHJcbiAgICAgICAgICAgIG9yZGVyVmlldzogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgZmVlczogbnVsbCxcclxuICAgICAgICAgICAgcHJpY2VzOiBudWxsLFxyXG4gICAgICAgICAgICBpc1N1YnNjcmliZWRUb01hcmtldDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vblNlbGxBc3NldElucHV0Q2hhbmdlID0gdGhpcy5vblNlbGxBc3NldElucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlY2VpdmVBc3NldElucHV0Q2hhbmdlID0gdGhpcy5vblJlY2VpdmVBc3NldElucHV0Q2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMub25TZWxsQW1vdW50Q2hhbmdlID0gdGhpcy5vblNlbGxBbW91bnRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVjZWl2ZUFtb3VudENoYW5nZSA9IHRoaXMub25SZWNlaXZlQW1vdW50Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlbGxJbWFnZUVycm9yID0gdGhpcy5vblNlbGxJbWFnZUVycm9yLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlY2VpdmVJbWFnZUVycm9yID0gdGhpcy5vblJlY2VpdmVJbWFnZUVycm9yLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlY2VpdmVBc3NldFNlYXJjaCA9IHRoaXMub25SZWNlaXZlQXNzZXRTZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU3dhcCA9IHRoaXMub25Td2FwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25Ub2dnbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVN1YnNjcmlwdGlvblRvZ2dsZUNoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmhlbmRsZU9yZGVyVmlldyA9IHRoaXMuaGVuZGxlT3JkZXJWaWV3LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxsID0gdGhpcy5oYW5kbGVTZWxsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQgPSB0aGlzLl9zdWJUb01hcmtldC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrQW5kVXBkYXRlTWFya2V0TGlzdCA9IHRoaXMuX2NoZWNrQW5kVXBkYXRlTWFya2V0TGlzdC5iaW5kKFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdCA9IGRlYm91bmNlKEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIsIDE1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7fTtcclxuICAgICAgICBpZiAocHJvcHMuYXNzZXRUb1NlbGwpIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBzZWxsQXNzZXRJbnB1dDogcHJvcHMuYXNzZXRUb1NlbGwuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBzZWxsQXNzZXQ6IHByb3BzLmFzc2V0VG9TZWxsLFxyXG4gICAgICAgICAgICAgICAgc2VsbEltZ05hbWU6IHByb3BzLmFzc2V0VG9TZWxsLmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMuYXNzZXRUb1JlY2VpdmUpIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5uZXdTdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dDogcHJvcHMuYXNzZXRUb1JlY2VpdmUuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0OiBwcm9wcy5hc3NldFRvUmVjZWl2ZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlSW1nTmFtZTogcHJvcHMuYXNzZXRUb1JlY2VpdmUuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBfcm91dGVUbyhhc3NldFRvU2VsbCwgYXNzZXRUb1JlY2VpdmUpIHtcclxuICAgICAgICBsZXQgc2VsbFJvdXRlID0gYXNzZXRUb1NlbGw7XHJcbiAgICAgICAgbGV0IHJlY2VpdmVSb3V0ZSA9IGFzc2V0VG9SZWNlaXZlO1xyXG4gICAgICAgIGlmICghYXNzZXRUb1NlbGwpIHtcclxuICAgICAgICAgICAgc2VsbFJvdXRlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhc3NldFRvUmVjZWl2ZSkge1xyXG4gICAgICAgICAgICByZWNlaXZlUm91dGUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGF0aE5hbWUgPSBcIi9pbnN0YW50LXRyYWRlL1wiICsgc2VsbFJvdXRlICsgXCJfXCIgKyByZWNlaXZlUm91dGU7XHJcbiAgICAgICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBcIl9yb3V0ZVRvOiBcIixcclxuICAgICAgICAgICAgICAgIHBhdGhOYW1lLFxyXG4gICAgICAgICAgICAgICAgXCIgb2xkOiBcIixcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUgIT09IHBhdGhOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHBhdGhOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2FyZUVxdWFsQXNzZXRzKGFzc2V0MSwgYXNzZXQyKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldChhc3NldDEpICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQoYXNzZXQyKSAmJlxyXG4gICAgICAgICAgICBhc3NldDEuZ2V0KFwiaWRcIikgPT09IGFzc2V0Mi5nZXQoXCJpZFwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2lzTG9hZGVkQXNzZXQoYXNzZXQpIHtcclxuICAgICAgICByZXR1cm4gISFhc3NldCAmJiAhIWFzc2V0LnRvSlM7XHJcbiAgICB9XHJcblxyXG4gICAgX2FyZUFzc2V0c0dpdmVuKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQodGhpcy5wcm9wcy5hc3NldFRvU2VsbCkgJiZcclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldCh0aGlzLnByb3BzLmFzc2V0VG9SZWNlaXZlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhdmVBc3NldHNDaGFuZ2VkKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldCh0aGlzLnByb3BzLmFzc2V0VG9TZWxsKSAhPT1cclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldChwcmV2UHJvcHMuYXNzZXRUb1NlbGwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQodGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZSkgIT09XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQocHJldlByb3BzLmFzc2V0VG9SZWNlaXZlKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdGhpcy5fYXJlRXF1YWxBc3NldHMoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0VG9TZWxsLFxyXG4gICAgICAgICAgICAgICAgcHJldlByb3BzLmFzc2V0VG9TZWxsXHJcbiAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgIXRoaXMuX2FyZUVxdWFsQXNzZXRzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZSxcclxuICAgICAgICAgICAgICAgIHByZXZQcm9wcy5hc3NldFRvUmVjZWl2ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhc01hcmtldENoYW5nZWQocHJldlByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLm1hcmtldERhdGEpICE9PVxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLm1hcmtldERhdGEpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhdmVBc3NldHNDaGFuZ2VkKHByZXZQcm9wcykpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXNzZXRzSGF2ZUNoYW5nZWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faGFzTWFya2V0Q2hhbmdlZChwcmV2UHJvcHMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRPcmRlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hBc3NldHMgIT09IHByZXZQcm9wcy5zZWFyY2hBc3NldHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlU2VhcmNoOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZEFzc2V0cyA9IHRoaXMucHJvcHMuc2VhcmNoQXNzZXRzXHJcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gYS5zeW1ib2wuaW5kZXhPZih0aGlzLnN0YXRlLmxvb2t1cFF1b3RlKSAhPT0gLTEpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0FuZFVwZGF0ZU1hcmtldExpc3QoZmlsdGVyZWRBc3NldHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCAhPT0gcHJldlByb3BzLmN1cnJlbnRBY2NvdW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0cyA9IGdldEFzc2V0c1RvU2VsbCh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxsQXNzZXRzOiBhc3NldHMsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRzOiBhc3NldHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtb3VudGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FyZUFzc2V0c0dpdmVuKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXNzZXRzSGF2ZUNoYW5nZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge3N1Yn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXRJZCwgcmVjZWl2ZUFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy51blN1YnNjcmliZU1hcmtldChzZWxsQXNzZXRJZCwgcmVjZWl2ZUFzc2V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfc3ViVG9NYXJrZXQoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXQ6IGJhc2VBc3NldCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0OiBxdW90ZUFzc2V0LFxyXG4gICAgICAgICAgICBzdWJcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoYmFzZUFzc2V0ICYmIHF1b3RlQXNzZXQpIHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SWQ6IGJhc2VBc3NldElkLFxyXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0SWQ6IHF1b3RlQXNzZXRJZFxyXG4gICAgICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHtidWNrZXRTaXplLCBjdXJyZW50R3JvdXBPcmRlckxpbWl0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBbcWEsIGJhXSA9IHN1Yi5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocWEgPT09IHF1b3RlQXNzZXRJZCAmJiBiYSA9PT0gYmFzZUFzc2V0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBNYXJrZXRzQWN0aW9ucy51blN1YnNjcmliZU1hcmtldChxYSwgYmEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IE1hcmtldHNBY3Rpb25zLnN1YnNjcmliZU1hcmtldChcclxuICAgICAgICAgICAgICAgIGJhc2VBc3NldCxcclxuICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQsXHJcbiAgICAgICAgICAgICAgICAzNjAwLFxyXG4gICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YjogYCR7cXVvdGVBc3NldElkfV8ke2Jhc2VBc3NldElkfWBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxQcmljZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbEZlZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QWxsRmVlcygpIHtcclxuICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0LCByZWNlaXZlQXNzZXR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoc2VsbEFzc2V0ICYmIHJlY2VpdmVBc3NldCkge1xyXG4gICAgICAgICAgICBjb25zdCBmZWVzID0gYXdhaXQgZ2V0RmVlcyhyZWNlaXZlQXNzZXQsIHNlbGxBc3NldCwgY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZlZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFzc2V0c0RldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldCwgcmVjZWl2ZUFzc2V0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SWQ6IHNlbGxBc3NldCA/IHNlbGxBc3NldC5nZXQoXCJpZFwiKSA6IG51bGwsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElkOiByZWNlaXZlQXNzZXQgPyByZWNlaXZlQXNzZXQuZ2V0KFwiaWRcIikgOiBudWxsLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb246IHNlbGxBc3NldCA/IHNlbGxBc3NldC5nZXQoXCJwcmVjaXNpb25cIikgOiBudWxsLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb246IHJlY2VpdmVBc3NldFxyXG4gICAgICAgICAgICAgICAgPyByZWNlaXZlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFN5bWJvbDogc2VsbEFzc2V0ID8gc2VsbEFzc2V0LmdldChcInN5bWJvbFwiKSA6IG51bGwsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFN5bWJvbDogcmVjZWl2ZUFzc2V0ID8gcmVjZWl2ZUFzc2V0LmdldChcInN5bWJvbFwiKSA6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFByaWNlcygpIHtcclxuICAgICAgICBjb25zdCB7YWN0aXZlTWFya2V0SGlzdG9yeSwgZmVlZFByaWNlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgcHJpY2VzID0gZ2V0UHJpY2VzKGFjdGl2ZU1hcmtldEhpc3RvcnksIGZlZWRQcmljZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHByaWNlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRPcmRlcnMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzU3Vic2NyaWJlZFRvTWFya2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMubWFya2V0RGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSB1c2VyIHdhbnRzIHRvIGluc3BlY3QgY3VycmVudCBvcmRlcnMsIHBhdXNlIHVwZGF0aW5nXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qge2NvbWJpbmVkQmlkc30gPSB0aGlzLnByb3BzLm1hcmtldERhdGE7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldCxcclxuICAgICAgICAgICAgc2VsbEFtb3VudCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCxcclxuICAgICAgICAgICAgYWN0aXZlSW5wdXRcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiX2dldE9yZGVyc1wiLCB0aGlzLnByb3BzLm1hcmtldERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29tYmluZWRCaWRzICYmIGNvbWJpbmVkQmlkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGxBc3NldCAmJiByZWNlaXZlQXNzZXQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aXZlSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVjZWl2ZUFzc2V0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxsQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlcnMgPSBnZXRPcmRlcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsbEFtb3VudCAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEJpZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnNVcGRhdGVkOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZVJlY2VpdmVBbW91bnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VsbEFzc2V0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNlaXZlQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlcnMgPSBnZXRPcmRlcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEJpZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnNVcGRhdGVkOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZVNlbGxBbW91bnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VsbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsbEFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gZ2V0T3JkZXJzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRCaWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzVXBkYXRlZDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVSZWNlaXZlQW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQ6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZWNlaXZlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNlaXZlQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlcnMgPSBnZXRPcmRlcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEJpZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnNVcGRhdGVkOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZVNlbGxBbW91bnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsbEFtb3VudDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2Fzc2V0c0hhdmVDaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMuX3N1YlRvTWFya2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgX3NldFNlbGxBc3NldChcclxuICAgICAgICBhc3NldE9iamVjdElkT3JTeW1ib2wsXHJcbiAgICAgICAgYWN0aXZlSW5wdXQgPSBcInNlbGxBc3NldFwiLFxyXG4gICAgICAgIGZpcmVDaGFuZ2VkID0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGFzc2V0ID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mIGFzc2V0T2JqZWN0SWRPclN5bWJvbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBhc3NldCA9IGF3YWl0IEZldGNoQ2hhaW4oXCJnZXRBc3NldFwiLCBhc3NldE9iamVjdElkT3JTeW1ib2wpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gYXNzZXRPYmplY3RJZE9yU3ltYm9sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIl9zZXRTZWxsQXNzZXRcIiwgYXNzZXRPYmplY3RJZE9yU3ltYm9sLCBhc3NldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dDogYWN0aXZlSW5wdXRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVUbyhcclxuICAgICAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJzeW1ib2xcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmFzc2V0VG9SZWNlaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZS5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfc2V0UmVjZWl2ZUFzc2V0KFxyXG4gICAgICAgIGFzc2V0T2JqZWN0SWRPclN5bWJvbCxcclxuICAgICAgICBhY3RpdmVJbnB1dCA9IFwicmVjZWl2ZUFzc2V0XCIsXHJcbiAgICAgICAgZmlyZUNoYW5nZWQgPSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgYXNzZXQgPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXNzZXRPYmplY3RJZE9yU3ltYm9sID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gYXdhaXQgRmV0Y2hDaGFpbihcImdldEFzc2V0XCIsIGFzc2V0T2JqZWN0SWRPclN5bWJvbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXNzZXQgPSBhc3NldE9iamVjdElkT3JTeW1ib2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiX3NldFJlY2VpdmVBc3NldFwiLCBhc3NldE9iamVjdElkT3JTeW1ib2wsIGFzc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQ6IGFjdGl2ZUlucHV0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmFzc2V0VG9TZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hc3NldFRvU2VsbC5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgX3N3YXBBc3NldHMoYWN0aXZlSW5wdXQsIGZpcmVDaGFuZ2VkID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGxBbW91bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQgPT09IFwic2VsbEFzc2V0XCIgPyBcIlwiIDogdGhpcy5zdGF0ZS5yZWNlaXZlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDpcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dCA9PT0gXCJyZWNlaXZlQXNzZXRcIiA/IFwiXCIgOiB0aGlzLnN0YXRlLnNlbGxBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dDogYWN0aXZlSW5wdXRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVUbyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlY2VpdmVBc3NldC5nZXQoXCJzeW1ib2xcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxsQXNzZXQuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvblNlbGxBc3NldElucHV0Q2hhbmdlKGFzc2V0SWRPclN5bWJvbCkge1xyXG4gICAgICAgIGNvbnN0IHtyZWNlaXZlQXNzZXRJZH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuXHJcbiAgICAgICAgaWYgKGFzc2V0SWRPclN5bWJvbCA9PT0gcmVjZWl2ZUFzc2V0SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3dhcEFzc2V0cyhcInNlbGxBc3NldFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRTZWxsQXNzZXQoYXNzZXRJZE9yU3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZShhc3NldElkT3JTeW1ib2wpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcblxyXG4gICAgICAgIGlmIChhc3NldElkT3JTeW1ib2wgPT09IHNlbGxBc3NldElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N3YXBBc3NldHMoXCJyZWNlaXZlQXNzZXRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0UmVjZWl2ZUFzc2V0KGFzc2V0SWRPclN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVjZWl2ZUFzc2V0U2VhcmNoKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkTmFtZSA9ICFDaGFpblZhbGlkYXRpb24uaXNfdmFsaWRfc3ltYm9sX2Vycm9yKGUsIHRydWUpO1xyXG4gICAgICAgIGlmICghaXNWYWxpZE5hbWUpIHtcclxuICAgICAgICAgICAgLyogRG9uJ3QgbG9va3VwIGludmFsaWQgYXNzZXQgbmFtZXMgKi9cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dDogZSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNlYXJjaDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlY2VpdmVBc3NldElucHV0ICE9PSBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsb29rdXBBc3NldHMoZSwgdHJ1ZSwgdGhpcy5nZXRBc3NldExpc3QsIHRoaXMuc2V0U3RhdGUpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrQW5kVXBkYXRlTWFya2V0TGlzdChtYXJrZXRzTGlzdCkge1xyXG4gICAgICAgIGxldCByZWNlaXZlQXNzZXRzID0gbWFya2V0c0xpc3QubWFwKGFzc2V0ID0+IGFzc2V0LmlkKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgY29uc3Qge3JlY2VpdmVBc3NldElucHV0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGFzc2V0ID0gXCJcIjtcclxuICAgICAgICBpZiAoQ2hhaW5TdG9yZS5nZXRBc3NldChyZWNlaXZlQXNzZXRJbnB1dCkpIHtcclxuICAgICAgICAgICAgY29uc3QgYXNzZXRJZCA9IENoYWluU3RvcmUuZ2V0QXNzZXQocmVjZWl2ZUFzc2V0SW5wdXQpLmdldChcImlkXCIpO1xyXG4gICAgICAgICAgICBpZiAocmVjZWl2ZUFzc2V0cy5pbmNsdWRlcyhhc3NldElkKSkge1xyXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KHJlY2VpdmVBc3NldElucHV0KS5nZXQoXCJpZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVjZWl2ZUFzc2V0cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgYXNzZXQgPSByZWNlaXZlQXNzZXRzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cyA9IGdldEFzc2V0c1RvU2VsbChjdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHMucHVzaChhc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWNlaXZlQXNzZXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cyA9IGdldEFzc2V0c1RvU2VsbChjdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlYXJjaDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsbEFtb3VudENoYW5nZShlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm1vdW50ZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoZS5hc3NldCAhPT0gdGhpcy5zdGF0ZS5zZWxsQXNzZXRJbnB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2VsbEFzc2V0SW5wdXRDaGFuZ2UoZS5hc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGxBbW91bnQ6IGUuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQ6IFwic2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQW1vdW50SW5wdXQ6IFwic2VsbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldE9yZGVycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlY2VpdmVBbW91bnRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5tb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGUuYXNzZXQgIT09IHRoaXMuc3RhdGUucmVjZWl2ZUFzc2V0SW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblJlY2VpdmVBc3NldElucHV0Q2hhbmdlKGUuYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50OiBlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0OiBcInJlY2VpdmVcIixcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUFtb3VudElucHV0OiBcInJlY2VpdmVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRPcmRlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxsSW1hZ2VFcnJvcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsbEltZ05hbWU6IFwidW5rbm93blwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWNlaXZlSW1hZ2VFcnJvcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWU6IFwidW5rbm93blwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Td2FwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3dhcHBhYmxlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3dhcEFzc2V0cyhcIm5laXRoZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1YnNjcmlwdGlvblRvZ2dsZUNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZFRvTWFya2V0OiAhc3RhdGUuaXNTdWJzY3JpYmVkVG9NYXJrZXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoZW5kbGVPcmRlclZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyVmlldyA9IHN0YXRlLm9yZGVyVmlldyA9PT0gXCJhbW91bnRcIiA/IFwidG90YWxcIiA6IFwiYW1vdW50XCI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBvcmRlclZpZXdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxsKCkge1xyXG4gICAgICAgIGNvbnN0IHtjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQW1vdW50LCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJZCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SWQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGNvbnN0IGZvclNhbGUgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhc3NldF9pZDogc2VsbEFzc2V0SWQsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHNlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB0b1JlY2VpdmUgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhc3NldF9pZDogcmVjZWl2ZUFzc2V0SWQsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHJlY2VpdmVBbW91bnQgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBleHBpcmF0aW9uVGltZSA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBuZXcgTGltaXRPcmRlckNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGZvcl9zYWxlOiBmb3JTYWxlLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHBpcmF0aW9uVGltZSxcclxuICAgICAgICAgICAgdG9fcmVjZWl2ZTogdG9SZWNlaXZlLFxyXG4gICAgICAgICAgICBzZWxsZXI6IGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBcIjEuMy4wXCIsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsbF9vcl9raWxsOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXJrZXRzQWN0aW9ucy5jcmVhdGVMaW1pdE9yZGVyMihvcmRlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yLm1lc3NhZ2UgIT09IFwid2FsbGV0IGxvY2tlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5leGNoYW5nZV91bmtub3duX2Vycm9yX3BsYWNlX29yZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHJlY2VpdmVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogcmVjZWl2ZUFzc2V0SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwib3JkZXIgZmFpbGVkOlwiLCBlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2VsbEFtb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7b3JkZXJzLCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAob3JkZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxsQW1vdW50ID0gKFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCAvIG9yZGVyc1swXS5vcmRlci5nZXRQcmljZSgpXHJcbiAgICAgICAgICAgICkudG9GaXhlZChzZWxsQXNzZXRQcmVjaXNpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGxBbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9yZGVycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlciA9IG9yZGVycy5zbGljZSgtMSlbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHBlbnVsdGltYXRlT3JkZXIgPSBvcmRlcnMuc2xpY2UoXHJcbiAgICAgICAgICAgICAgICBvcmRlcnMubGVuZ3RoIC0gMixcclxuICAgICAgICAgICAgICAgIG9yZGVycy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIClbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlclRvUmVjZWl2ZSA9XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50ICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uIC1cclxuICAgICAgICAgICAgICAgIHBlbnVsdGltYXRlT3JkZXIub3JkZXIudG90YWxfZm9yX3NhbGUuZ2V0QW1vdW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlckZvclNhbGUgPVxyXG4gICAgICAgICAgICAgICAgKChsYXN0T3JkZXJUb1JlY2VpdmUgLyBsYXN0T3JkZXIub3JkZXIuZ2V0UHJpY2UoKSkgKlxyXG4gICAgICAgICAgICAgICAgICAgIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbikgL1xyXG4gICAgICAgICAgICAgICAgMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxsQW1vdW50ID0gKFxyXG4gICAgICAgICAgICAgICAgKHBlbnVsdGltYXRlT3JkZXIub3JkZXIudG90YWxfdG9fcmVjZWl2ZS5nZXRBbW91bnQoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE9yZGVyRm9yU2FsZSkgL1xyXG4gICAgICAgICAgICAgICAgMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICkudG9GaXhlZChzZWxsQXNzZXRQcmVjaXNpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGxBbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUmVjZWl2ZUFtb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7b3JkZXJzLCBzZWxsQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAob3JkZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByZWNlaXZlQW1vdW50ID0gKFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzWzBdLm9yZGVyLmdldFByaWNlKCkgKiBzZWxsQW1vdW50XHJcbiAgICAgICAgICAgICkudG9GaXhlZChyZWNlaXZlQXNzZXRQcmVjaXNpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcmRlcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXIgPSBvcmRlcnMuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBwZW51bHRpbWF0ZU9yZGVyID0gb3JkZXJzLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzLmxlbmd0aCAtIDIsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICApWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXJGb3JTYWxlID1cclxuICAgICAgICAgICAgICAgIHNlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24gLVxyXG4gICAgICAgICAgICAgICAgcGVudWx0aW1hdGVPcmRlci5vcmRlci50b3RhbF90b19yZWNlaXZlLmdldEFtb3VudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXJUb1JlY2VpdmUgPVxyXG4gICAgICAgICAgICAgICAgKGxhc3RPcmRlckZvclNhbGUgKlxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RPcmRlci5vcmRlci5nZXRQcmljZSgpICpcclxuICAgICAgICAgICAgICAgICAgICAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb24pIC9cclxuICAgICAgICAgICAgICAgIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbjtcclxuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZUFtb3VudCA9IChcclxuICAgICAgICAgICAgICAgIChwZW51bHRpbWF0ZU9yZGVyLm9yZGVyLnRvdGFsX2Zvcl9zYWxlLmdldEFtb3VudCgpICtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0T3JkZXJUb1JlY2VpdmUpIC9cclxuICAgICAgICAgICAgICAgIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgICAgICApLnRvRml4ZWQocmVjZWl2ZUFzc2V0UHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzU3dhcHBhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcmVBc3NldHNHaXZlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUcmFuc2FjdGlvbkZlZShkZW5vbWluYXRpb25Bc3NldElkKSB7XHJcbiAgICAgICAgY29uc3Qge2ZlZXMsIHByaWNlc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXRJZH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAoZmVlcykge1xyXG4gICAgICAgICAgICBpZiAoZmVlcy50cmFuc2FjdGlvbkZlZVtzZWxsQXNzZXRJZF0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhZGVub21pbmF0aW9uQXNzZXRJZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbm9taW5hdGlvbkFzc2V0SWQgPT09IHNlbGxBc3NldElkXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVzLnRyYW5zYWN0aW9uRmVlW3NlbGxBc3NldElkXS5mZWUuYW1vdW50IC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAgKiogZmVlcy50cmFuc2FjdGlvbkZlZVtzZWxsQXNzZXRJZF0uZmVlLnByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmZWVzLnRyYW5zYWN0aW9uRmVlW3NlbGxBc3NldElkXS5mZWUuYW1vdW50IC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwICoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlcy50cmFuc2FjdGlvbkZlZVtzZWxsQXNzZXRJZF0uZmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVjaXNpb24pICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzLmxhdGVzdFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRNYXJrZXRGZWUoZGVub21pbmRhdGVkQXNzZXRJZCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVzLCBwcmljZXMsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7cmVjZWl2ZUFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKGZlZXMpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIWRlbm9taW5kYXRlZEFzc2V0SWQgfHxcclxuICAgICAgICAgICAgICAgIGRlbm9taW5kYXRlZEFzc2V0SWQgPT09IHJlY2VpdmVBc3NldElkXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChmZWVzLm1hcmtldEZlZS5iYXNlTWFya2V0RmVlICogcmVjZWl2ZUFtb3VudCkgLyAxMDAwMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGZlZXMubWFya2V0RmVlLmJhc2VNYXJrZXRGZWUgKiByZWNlaXZlQW1vdW50KSAvXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzLmxhdGVzdFByaWNlIC9cclxuICAgICAgICAgICAgICAgICAgICAxMDAwMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RmVlUGVyY2VudChmZWVBbW91bnQsIHRvdGFsQW1vdW50KSB7XHJcbiAgICAgICAgcmV0dXJuICt0b3RhbEFtb3VudCA/ICgrdG90YWxBbW91bnQgKyArZmVlQW1vdW50KSAvIHRvdGFsQW1vdW50IC0gMSA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGV0YWlscygpIHtcclxuICAgICAgICBjb25zdCB7c3VifSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKCFzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7c2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SWQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElkLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0U3ltYm9sXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlU2VjdGlvbiA9IHRoaXMuZ2V0UHJpY2VTZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VFeHRyYSA9IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuZWZmZWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3JlY2VpdmVBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17cmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e3JlY2VpdmVBc3NldFN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICBub0ludmVydFRpcFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGZlZVNlY3Rpb24gPSB0aGlzLmdldEZlZVNlY3Rpb24oKTtcclxuICAgICAgICBjb25zdCBvcmRlcnNTZWN0aW9uID0gdGhpcy5nZXRPcmRlcnNTZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgdG90YWxQZXJjZW50RmVlID1cclxuICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5lZmZlY3RpdmVcIikgK1xyXG4gICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICh0aGlzLmdldFRvdGFsUGVyY2VudEZlZSgpICogMTAwKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGNvbnN0IGFtb3VudE9mT3JkZXJzID0gdGhpcy5zdGF0ZS5vcmRlcnMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG9yZGVyc0NhcHRpb24gPVxyXG4gICAgICAgICAgICBhbW91bnRPZk9yZGVycyA8IDJcclxuICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5vcmRlclwiKVxyXG4gICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLm9yZGVyc1wiKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29sbGFwc2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzc2V0LWNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlLlBhbmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5wcmljZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17cHJpY2VFeHRyYX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7cHJpY2VTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZS5QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UuZmVlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtgJHt0b3RhbFBlcmNlbnRGZWV9JWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZlZVNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlLlBhbmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5vcmRlcnNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRPZk9yZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHthbW91bnRPZk9yZGVyc30gJHtvcmRlcnNDYXB0aW9ufWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJubyBvcmRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJzU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGV0YWlscygpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0LCByZWNlaXZlQXNzZXQsIHNlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gc2VsbEFzc2V0ICYmIHJlY2VpdmVBc3NldCAmJiArc2VsbEFtb3VudCAmJiArcmVjZWl2ZUFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmVlZFByaWNlKCkge1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXQsIHJlY2VpdmVBc3NldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXRJZCwgcmVjZWl2ZUFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgY29uc3QgcmVjZWl2ZUNvbGxhdGVyYWxBc3NldCA9IHJlY2VpdmVBc3NldC5nZXRJbihbXHJcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgXCJvcHRpb25zXCIsXHJcbiAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY29uc3Qgc2VsbENvbGxhdGVyYWxBc3NldCA9IHNlbGxBc3NldC5nZXRJbihbXHJcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgXCJvcHRpb25zXCIsXHJcbiAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgcmVjZWl2ZUNvbGxhdGVyYWxBc3NldCA9PT0gc2VsbEFzc2V0SWQgfHxcclxuICAgICAgICAgICAgc2VsbENvbGxhdGVyYWxBc3NldCA9PT0gcmVjZWl2ZUFzc2V0SWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByaWNlU2VjdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7cHJpY2VzLCBzZWxsQW1vdW50LCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJZCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SWQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRTeW1ib2xcclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMueW91cl9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc2hvd0ZlZWRQcmljZSgpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmZlZWRfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmxhc3RfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtzZWxsQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50ICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlX2RpcmVjdGlvbj17cmVjZWl2ZUFzc2V0U3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9JbnZlcnRUaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zaG93RmVlZFByaWNlKCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3JlY2VpdmVBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXsxICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcy5mZWVkUHJpY2UgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtyZWNlaXZlQXNzZXRTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9JbnZlcnRUaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtzZWxsQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXsxICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXMubGF0ZXN0UHJpY2UgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtyZWNlaXZlQXNzZXRTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0ludmVydFRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmVlU2VjdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFN5bWJvbCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0U3ltYm9sXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkZlZSA9IHRoaXMuX2dldFRyYW5zYWN0aW9uRmVlKCkudG9GaXhlZChcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkZlZVBlcmNlbnQgPSAoXHJcbiAgICAgICAgICAgIHRoaXMuX2dldEZlZVBlcmNlbnQodGhpcy5fZ2V0VHJhbnNhY3Rpb25GZWUoKSwgc2VsbEFtb3VudCkgKiAxMDBcclxuICAgICAgICApLnRvRml4ZWQoMik7XHJcbiAgICAgICAgY29uc3QgbWFya2V0RmVlID0gdGhpcy5fZ2V0TWFya2V0RmVlKCkudG9GaXhlZChyZWNlaXZlQXNzZXRQcmVjaXNpb24pO1xyXG4gICAgICAgIGNvbnN0IG1hcmtldEZlZVBlcmNlbnQgPSAoXHJcbiAgICAgICAgICAgIHRoaXMuX2dldEZlZVBlcmNlbnQodGhpcy5fZ2V0TWFya2V0RmVlKCksIHJlY2VpdmVBbW91bnQpICogMTAwXHJcbiAgICAgICAgKS50b0ZpeGVkKDIpO1xyXG5cclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlNYXJrZXQsXHJcbiAgICAgICAgICAgIGxpcWlkaXR5UGVuYWx0eUZlZWRcclxuICAgICAgICBdID0gdGhpcy5nZXRMaXF1aWRpdHlQZW5hbHR5KCk7XHJcbiAgICAgICAgaWYgKGxpcWlkaXR5UGVuYWx0eU1hcmtldCB8fCBsaXFpZGl0eVBlbmFsdHlNYXJrZXQgPT09IDApIHtcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5TWFya2V0ID1cclxuICAgICAgICAgICAgICAgIChsaXFpZGl0eVBlbmFsdHlNYXJrZXQgKiAxMDApLnRvRml4ZWQoMikgKyBcIiVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlNYXJrZXQgPSBcIi1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxpcWlkaXR5UGVuYWx0eUZlZWQgfHwgbGlxaWRpdHlQZW5hbHR5RmVlZCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlGZWVkID0gKGxpcWlkaXR5UGVuYWx0eUZlZWQgKiAxMDApLnRvRml4ZWQoMikgKyBcIiVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlGZWVkID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxpcWlkaXR5UGVuYWx0eSA9IHRoaXMuc2hvd0ZlZWRQcmljZSgpXHJcbiAgICAgICAgICAgID8gYCR7bGlxaWRpdHlQZW5hbHR5TWFya2V0fSAvICR7bGlxaWRpdHlQZW5hbHR5RmVlZH1gXHJcbiAgICAgICAgICAgIDogbGlxaWRpdHlQZW5hbHR5TWFya2V0O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5saXF1aWRpdHlfcGVuYWx0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5tYXJrZXRfZmVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AgJHttYXJrZXRGZWVQZXJjZW50fSVgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMudHJhbnNhY3Rpb25fZmVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AgJHt0cmFuc2FjdGlvbkZlZVBlcmNlbnR9JWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntsaXFpZGl0eVBlbmFsdHl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldEZlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17cmVjZWl2ZUFzc2V0U3ltYm9sfSBub1RpcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbkZlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17c2VsbEFzc2V0U3ltYm9sfSBub1RpcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JkZXJzU2VjdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7b3JkZXJzLCBvcmRlclZpZXd9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElkLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJZCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRTeW1ib2wsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFN5bWJvbFxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gb3JkZXJzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtleTogaXRlbS5vcmRlci5pZCxcclxuICAgICAgICAgICAgICAgIGlkOiBpdGVtLm9yZGVyLmlkLFxyXG4gICAgICAgICAgICAgICAgc2VsbGVyOiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17aXRlbS5vcmRlci5zZWxsZXJ9IC8+LFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhlbmRsZU9yZGVyVmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlclZpZXcgPT09IFwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5hbW91bnQgLyAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS50b3RhbF9hbW91bnQgLyAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYW1vdW50ID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtvcmRlclZpZXcgPT09IFwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMudG90YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICZuYnNwOyhcclxuICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17c2VsbEFzc2V0U3ltYm9sfSBub1RpcCAvPilcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaWNlID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnByaWNlXCIpfVxyXG4gICAgICAgICAgICAgICAgJm5ic3A7KFxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3JlY2VpdmVBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlX2RpcmVjdGlvbj17cmVjZWl2ZUFzc2V0U3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vSW52ZXJ0VGlwXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZV92YWx1ZVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmlkXCIpLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwJVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnNlbGxlclwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInNlbGxlclwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcInNlbGxlclwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwJVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBwcmljZSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJwcmljZVwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcInByaWNlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1YnNjcmlwdGlvblRvZ2dsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmlzU3Vic2NyaWJlZFRvTWFya2V0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9yZGVyc1VwZGF0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC5sb2NhbGl6ZSh0aGlzLnN0YXRlLm9yZGVyc1VwZGF0ZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1YnNjcmlwdGlvblRvZ2dsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5zdWJzY3JpYmVfdG9fbWFya2V0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5sZW5ndGggPiA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpcXVpZGl0eVBlbmFsdHkoKSB7XHJcbiAgICAgICAgY29uc3Qge3ByaWNlcywgc2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gcmVjZWl2ZUFtb3VudCAvIHNlbGxBbW91bnQ7XHJcbiAgICAgICAgY29uc3QgbWFya2V0UHJpY2UgPSBwcmljZXMubGF0ZXN0UHJpY2U7XHJcbiAgICAgICAgY29uc3QgZmVlZFByaWNlID0gcHJpY2VzLmZlZWRQcmljZTtcclxuICAgICAgICBsZXQgbGlxdWlkaXR5RmVlMSwgbGlxdWlkaXR5RmVlMjtcclxuICAgICAgICBpZiAocHJpY2UgJiYgbWFya2V0UHJpY2UpIHtcclxuICAgICAgICAgICAgbGlxdWlkaXR5RmVlMSA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICAgICAgMSAtIHByaWNlIC8gbWFya2V0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAxIC0gbWFya2V0UHJpY2UgLyBwcmljZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJpY2UgJiYgZmVlZFByaWNlKSB7XHJcbiAgICAgICAgICAgIGxpcXVpZGl0eUZlZTIgPSBNYXRoLm1heChcclxuICAgICAgICAgICAgICAgIDEgLSBwcmljZSAvIGZlZWRQcmljZSxcclxuICAgICAgICAgICAgICAgIDEgLSBmZWVkUHJpY2UgLyBwcmljZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW2xpcXVpZGl0eUZlZTEsIGxpcXVpZGl0eUZlZTJdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvdGFsUGVyY2VudEZlZSgpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uRmVlUGVyY2VudCA9IHRoaXMuX2dldEZlZVBlcmNlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuX2dldFRyYW5zYWN0aW9uRmVlKCksXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnRcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG1hcmtldEZlZVBlcmNlbnQgPSB0aGlzLl9nZXRGZWVQZXJjZW50KFxyXG4gICAgICAgICAgICB0aGlzLl9nZXRNYXJrZXRGZWUoKSxcclxuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbGlxdWlkaXR5RmVlID0gdGhpcy5nZXRMaXF1aWRpdHlQZW5hbHR5KClbMF07XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRmVlUGVyY2VudCArIG1hcmtldEZlZVBlcmNlbnQgKyBsaXF1aWRpdHlGZWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQmFsYW5jZSgpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRCYWxhbmNlcyA9IGN1cnJlbnRBY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWQsIHNlbGxBc3NldFByZWNpc2lvbn0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAoIWFjY291bnRCYWxhbmNlc1tzZWxsQXNzZXRJZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYWxhbmNlID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYWNjb3VudEJhbGFuY2VzW3NlbGxBc3NldElkXSkuZ2V0KFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25GZWUgPSB0aGlzLl9nZXRUcmFuc2FjdGlvbkZlZSgpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24gK1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25GZWUgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24gPFxyXG4gICAgICAgICAgICArYmFsYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SW5wdXQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldHMsXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnQsXHJcbiAgICAgICAgICAgIHNlbGxJbWdOYW1lLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cyxcclxuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCxcclxuICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWUsXHJcbiAgICAgICAgICAgIHN1YlxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXRJZCwgcmVjZWl2ZUFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IERldGFpbHMgPSB0aGlzLnNob3dEZXRhaWxzKCkgPyB0aGlzLmdldERldGFpbHMoKSA6IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWljay10cmFkZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjMwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGxSZWNlaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbEFzc2V0SW5wdXQ9e3NlbGxBc3NldElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxBc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbEFzc2V0cz17c2VsbEFzc2V0c31cclxuICAgICAgICAgICAgICAgICAgICBzZWxsQW1vdW50PXtzZWxsQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxJbWdOYW1lPXtzZWxsSW1nTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGxBc3NldElucHV0Q2hhbmdlPXt0aGlzLm9uU2VsbEFzc2V0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxsQW1vdW50Q2hhbmdlPXt0aGlzLm9uU2VsbEFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dD17cmVjZWl2ZUFzc2V0SW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRzPXtyZWNlaXZlQXNzZXRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQ9e3JlY2VpdmVBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWU9e3JlY2VpdmVJbWdOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2U9e3RoaXMub25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvblJlY2VpdmVBbW91bnRDaGFuZ2U9e3RoaXMub25SZWNlaXZlQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVjZWl2ZUFzc2V0U2VhcmNoPXt0aGlzLm9uUmVjZWl2ZUFzc2V0U2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3dhcD17dGhpcy5vblN3YXB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTd2FwcGFibGU9e3RoaXMuaXNTd2FwcGFibGUoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7RGV0YWlsc31cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmhhc0JhbGFuY2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uubm9fYmFsYW5jZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJzZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zaG93RGV0YWlscygpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXN1YiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmhhc0JhbGFuY2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uuc2VsbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5RdWlja1RyYWRlID0gY29ubmVjdChcclxuICAgIFF1aWNrVHJhZGUsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbQXNzZXRTdG9yZSwgTWFya2V0c1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQXNzZXRzOiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzLFxyXG4gICAgICAgICAgICAgICAgYXNzZXRzTG9hZGluZzogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0c0xvYWRpbmcsXHJcbiAgICAgICAgICAgICAgICBtYXJrZXREYXRhOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXREYXRhLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0SGlzdG9yeTogTWFya2V0c1N0b3JlLmdldFN0YXRlKClcclxuICAgICAgICAgICAgICAgICAgICAuYWN0aXZlTWFya2V0SGlzdG9yeSxcclxuICAgICAgICAgICAgICAgIGJ1Y2tldFNpemU6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmJ1Y2tldFNpemUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0OiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jdXJyZW50R3JvdXBPcmRlckxpbWl0LFxyXG4gICAgICAgICAgICAgICAgZmVlZFByaWNlOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5mZWVkUHJpY2UsXHJcbiAgICAgICAgICAgICAgICBtYXJrZXRMaW1pdE9yZGVyczogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0TGltaXRPcmRlcnNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tUcmFkZSA9IGJpbmRUb0N1cnJlbnRBY2NvdW50KFF1aWNrVHJhZGUpKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYWdlNDA0IGZyb20gXCIuLi9QYWdlNDA0L1BhZ2U0MDRcIjtcbmltcG9ydCBRdWlja1RyYWRlIGZyb20gXCIuL1F1aWNrVHJhZGVcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcblxuY2xhc3MgUXVpY2tUcmFkZVN1YnNjcmliZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFzc2V0VG9TZWxsOiBDaGFpblR5cGVzLkNoYWluQXNzZXQsXG4gICAgICAgIGFzc2V0VG9SZWNlaXZlOiBDaGFpblR5cGVzLkNoYWluQXNzZXRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYXNzZXRUb1NlbGw6IFwiVVNEXCIsXG4gICAgICAgIGFzc2V0VG9SZWNlaXZlOiBcIkdQSFwiXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZS5nZXQgJiYgISF0aGlzLnByb3BzLmFzc2V0VG9TZWxsLmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxRdWlja1RyYWRlIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBRdWlja1RyYWRlQXNzZXRSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoUXVpY2tUcmFkZVN1YnNjcmliZXIsIHtcbiAgICBzaG93X2xvYWRlcjogdHJ1ZVxufSk7XG5cbmNsYXNzIFF1aWNrVHJhZGVSb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHN5bWJvbHMgPSAhIXRoaXMucHJvcHMubWF0Y2gucGFyYW1zLm1hcmtldElEXG4gICAgICAgICAgICA/IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLm1hcmtldElELnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJfXCIpXG4gICAgICAgICAgICA6IFtcIlwiLCBcIlwiXTtcbiAgICAgICAgaWYgKHN5bWJvbHMubGVuZ3RoID09IDIgJiYgISFzeW1ib2xzWzBdICYmIHN5bWJvbHNbMF0gPT09IHN5bWJvbHNbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiA8UGFnZTQwNCBzdWJ0aXRsZT1cIm1hcmtldF9ub3RfZm91bmRfc3VidGl0bGVcIiAvPjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWlja1RyYWRlUm91dGVyXCIsIHN5bWJvbHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UXVpY2tUcmFkZUFzc2V0UmVzb2x2ZXJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBhc3NldFRvU2VsbD17c3ltYm9sc1swXSB8fCBcIlwifVxuICAgICAgICAgICAgICAgIGFzc2V0VG9SZWNlaXZlPXtzeW1ib2xzLmxlbmd0aCA9PSAyID8gc3ltYm9sc1sxXSA6IFwiXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVpY2tUcmFkZVJvdXRlcjtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvcjMgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3IzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuXHJcbmNsYXNzIFNlbGxSZWNlaXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgc2VsbEFzc2V0SW5wdXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc2VsbEFzc2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNlbGxBc3NldHM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBzZWxsQW1vdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNlbGxJbWdOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHJlY2VpdmVBc3NldElucHV0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHJlY2VpdmVBc3NldDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICByZWNlaXZlQXNzZXRzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgICAgcmVjZWl2ZUFtb3VudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICByZWNlaXZlSW1nTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBvblNlbGxBc3NldElucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uU2VsbEFtb3VudENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBvblJlY2VpdmVBc3NldElucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uUmVjZWl2ZUFtb3VudENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBvblN3YXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaXNTd2FwcGFibGU6IFByb3BUeXBlcy5ib29sXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzbWFsbFNjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoIDwgODUwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SW5wdXQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0cyxcclxuICAgICAgICAgICAgc2VsbEFtb3VudCxcclxuICAgICAgICAgICAgc2VsbEltZ05hbWUsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElucHV0LFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHMsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBbW91bnQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVJbWdOYW1lLFxyXG4gICAgICAgICAgICBvblNlbGxBc3NldElucHV0Q2hhbmdlLFxyXG4gICAgICAgICAgICBvblNlbGxBbW91bnRDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uUmVjZWl2ZUFtb3VudENoYW5nZSxcclxuICAgICAgICAgICAgb25SZWNlaXZlQXNzZXRTZWFyY2gsXHJcbiAgICAgICAgICAgIG9uU3dhcCxcclxuICAgICAgICAgICAgaXNTd2FwcGFibGVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsbFNlbGVjdG9yID0gKFxyXG4gICAgICAgICAgICA8QW1vdW50U2VsZWN0b3IzXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17XCJleGNoYW5nZS5zZWxsXCJ9XHJcbiAgICAgICAgICAgICAgICBhc3NldElucHV0PXtzZWxsQXNzZXRJbnB1dH1cclxuICAgICAgICAgICAgICAgIGFzc2V0PXtzZWxsQXNzZXR9XHJcbiAgICAgICAgICAgICAgICBhc3NldHM9e3NlbGxBc3NldHN9XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e3NlbGxBbW91bnR9XHJcbiAgICAgICAgICAgICAgICBvbkFzc2V0SW5wdXRDaGFuZ2U9e29uU2VsbEFzc2V0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkFtb3VudENoYW5nZT17b25TZWxsQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgaW1nTmFtZT17c2VsbEltZ05hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnBsYWNlaG9sZGVyX3NlbGxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByZWNlaXZlU2VsZWN0b3IgPSAoXHJcbiAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvcjNcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtcImV4Y2hhbmdlLnJlY2VpdmVcIn1cclxuICAgICAgICAgICAgICAgIGFzc2V0SW5wdXQ9e3JlY2VpdmVBc3NldElucHV0fVxyXG4gICAgICAgICAgICAgICAgYXNzZXQ9e3JlY2VpdmVBc3NldH1cclxuICAgICAgICAgICAgICAgIGFzc2V0cz17cmVjZWl2ZUFzc2V0c31cclxuICAgICAgICAgICAgICAgIGFtb3VudD17cmVjZWl2ZUFtb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQXNzZXRJbnB1dENoYW5nZT17b25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblJlY2VpdmVBc3NldFNlYXJjaH1cclxuICAgICAgICAgICAgICAgIG9uQW1vdW50Q2hhbmdlPXtvblJlY2VpdmVBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpbWdOYW1lPXtyZWNlaXZlSW1nTmFtZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMucGxhY2Vob2xkZXJfcmVjZWl2ZVwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0blN0eWxlID0ge1xyXG4gICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1N3YXBwYWJsZSkge1xyXG4gICAgICAgICAgICBidG5TdHlsZS5vcGFjaXR5ID0gMC4xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3dhcEJ1dHRvbiA9IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17YnRuU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFzbWFsbFNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiM3JlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN3YXB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3NtYWxsU2NyZWVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+e3NlbGxTZWxlY3Rvcn08L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz57c3dhcEJ1dHRvbn08L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz57cmVjZWl2ZVNlbGVjdG9yfTwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEwfT57c2VsbFNlbGVjdG9yfTwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9Pntzd2FwQnV0dG9ufTwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEwfT57cmVjZWl2ZVNlbGVjdG9yfTwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsbFJlY2VpdmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7Um93LCBDb2wsIFRvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xyXG5cclxuaW1wb3J0IENoYWluU2VsZWN0IGZyb20gXCIuL0NoYWluU2VsZWN0XCI7XHJcblxyXG5jbGFzcyBBbW91bnRTZWxlY3RvcjMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBhc3NldElucHV0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGFzc2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGFzc2V0czogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIGFtb3VudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgb25Bc3NldElucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBvbkFtb3VudENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgb25JbWFnZUVycm9yOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgaW1nTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBwbGFjZWhvbGRlckFtb3VudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICBpbWdOYW1lOiBcInVua25vd25cIixcclxuICAgICAgICBwbGFjZWhvbGRlckFtb3VudDogXCIwLjBcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbWFnZUVycm9yOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhIXRoaXMucHJvcHMuaW1nTmFtZSAmJlxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmltZ05hbWUgIT09IHByZXZQcm9wcy5pbWdOYW1lICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW1nTmFtZSAhPT0gXCJ1bmtub3duXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25JbWFnZUVycm9yKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbWFnZUVycm9yOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBhc3NldElucHV0LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgYXNzZXRzLFxyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIG9uQXNzZXRJbnB1dENoYW5nZSxcclxuICAgICAgICAgICAgb25TZWFyY2gsXHJcbiAgICAgICAgICAgIG9uQW1vdW50Q2hhbmdlLFxyXG4gICAgICAgICAgICBpbWdOYW1lLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJBbW91bnQsXHJcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmltYWdlRXJyb3IpIHtcclxuICAgICAgICAgICAgaW1nTmFtZSA9IFwidW5rbm93blwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWxUZXh0ID0gKFxyXG4gICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYWluU2VsZWN0b3IgPSA8Q2hhaW5TZWxlY3QgLz47XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMC41cmVtXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLm9uSW1hZ2VFcnJvci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBhbW91bnRTZWxlY3RvciA9IChcclxuICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25BbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldH1cclxuICAgICAgICAgICAgICAgIGFzc2V0cz17YXNzZXRzfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFtb3VudC1zZWxlY3Rvci0yXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMy41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWxUZXh0fVxyXG4gICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjE4cmVtXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjMuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW49ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxOX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXt0b29sdGlwVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW5TZWxlY3Rvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YW1vdW50U2VsZWN0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW1vdW50U2VsZWN0b3IzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9Cb3RzL2xpYnMvQXNzZXRXcmFwcGVyXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge2dldEltYWdlTmFtZX0gZnJvbSBcImJyYW5kaW5nXCI7XG5cbmNsYXNzIEFzc2V0SW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiB0cnVlLFxuICAgICAgICBtYXhXaWR0aDogMjBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWdFcnJvcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0ICE9PSBucC5hc3NldCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhXaWR0aCAhPT0gbnAubWF4V2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMud2hpdGVMaXN0ICE9PSBucC53aGl0ZUxpc3QgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1nRXJyb3IgIT09IG5zLmltZ0Vycm9yXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX29uRXJyb3IoaW1nTmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW1nRXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VOb25lVG9CdHMpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZzW2ltZ05hbWUudG9Mb3dlckNhc2UoKV0uc3JjID1cbiAgICAgICAgICAgICAgICAgICAgXCJhc3NldC1zeW1ib2xzL3Vua25vd24ucG5nXCI7XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VXcmFwcGVyKGFzc2V0KSB7XG4gICAgICAgICAgICBpZiAoYXNzZXQgPT09IG51bGwpIHJldHVybiBcInVua25vd25cIjtcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBhc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICByZXR1cm4gZ2V0SW1hZ2VOYW1lKHN5bWJvbCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWdOYW1lID0gZ2V0SW1hZ2VXcmFwcGVyKGFzc2V0KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHJlZj17aW1nTmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbHVtbi1oaWRlLXNtYWxsXCJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMucHJvcHMubWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTNweFwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFzc2V0SW1hZ2UgPSBBc3NldFdyYXBwZXIoQXNzZXRJbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0SW1hZ2VXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8QXNzZXRJbWFnZSB7Li4udGhpcy5wcm9wc30gYXNzZXQ9e3RoaXMucHJvcHMubmFtZX0vPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi9DaGFpblR5cGVzXCI7XHJcbmltcG9ydCBkZWJvdW5jZVJlbmRlciBmcm9tIFwicmVhY3QtZGVib3VuY2UtcmVuZGVyXCI7XHJcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuL0JpbmRUb0NoYWluU3RhdGVcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNMb2FkZWQgPSBmdW5jdGlvbiBoYXNMb2FkZWQoY3VycmVudEFjY291bnQpIHtcclxuICAgIHJldHVybiAhIWN1cnJlbnRBY2NvdW50ICYmICEhY3VycmVudEFjY291bnQuZ2V0KFwiaWRcIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYmluZFRvQ3VycmVudEFjY291bnQgPSBmdW5jdGlvbiBiaW5kVG9DdXJyZW50QWNjb3VudChcclxuICAgIFdyYXBwZWRDb21wb25lbnRcclxuKSB7XHJcbiAgICAvLyAuLi5hbmQgcmV0dXJucyBhbm90aGVyIGNvbXBvbmVudC4uLlxyXG4gICAgbGV0IEJpbmRUb0N1cnJlbnRBY2NvdW50ID0gY2xhc3MgQmluZFRvQ3VycmVudEFjY291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBDaGFpblR5cGVzLkNoYWluQWNjb3VudFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgICAgIC8vIHNldCBzdWJzY3JpcHRpb25cclxuICAgICAgICAgICAgYXV0b3N1YnNjcmliZTogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgaWYgKGhhc0xvYWRlZCh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TG9hZGluZ0luZGljYXRvciAvPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgQmluZFRvQ3VycmVudEFjY291bnQgPSBCaW5kVG9DaGFpblN0YXRlKEJpbmRUb0N1cnJlbnRBY2NvdW50KTtcclxuXHJcbiAgICBCaW5kVG9DdXJyZW50QWNjb3VudCA9IGRlYm91bmNlUmVuZGVyKEJpbmRUb0N1cnJlbnRBY2NvdW50LCAxMDAsIHtcclxuICAgICAgICBsZWFkaW5nOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbm5lY3QoXHJcbiAgICAgICAgQmluZFRvQ3VycmVudEFjY291bnQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0ZW5UbygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFjY291bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgXCJwbGVhc2UtbG9naW5cIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6IG5ldyBNYXAoW1tcIm5hbWVcIiwgY3VycmVudEFjY291bnRdXSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge1NlbGVjdH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHtNYXB9IGZyb20gXCJpbW11dGFibGVcIjtcblxuY2xhc3MgQ2hhaW5TZWxlY3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBjaGFpbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBzZWxlY3RTdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuXG4gICAgICAgIC8vIGFsbCBvdGhlciBwcm9wcyBhcmUgcGFzc2VkIHRvIHRoZSBTZWxlY3QgY29tcG9uZW50XG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNoYWluczogW1wiR3JhcGhlbmUgQmxvY2tjaGFpblwiXSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgc2VsZWN0U3R5bGU6IHt9XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGNoYWlucyxcbiAgICAgICAgICAgIHNlbGVjdFN0eWxlLFxuICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2UsXG4gICAgICAgICAgICAuLi5yZW1Qcm9wc1xuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBkaXNhYmxlU2VsZWN0ID1cbiAgICAgICAgICAgIGNoYWlucy5maWx0ZXIoTWFwLmlzTWFwKS5sZW5ndGggPD0gMSAmJiAhb25Ecm9wZG93blZpc2libGVDaGFuZ2U7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBjaGFpbnNbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSBnaXZlbiB3ZSBhc3N1bWUgdGhhdCBsYXp5IGxvYWRpbmcgdGFrZXMgcGxhY2VcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gKFxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPXtvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2Rpc2FibGVTZWxlY3QgPyBmYWxzZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBzdHlsZT17c2VsZWN0U3R5bGV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciB8fCBcInV0aWxpdHkuYXNzZXRfc2VsZWN0X3BsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIHsuLi5yZW1Qcm9wc31cbiAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiY2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KGlucHV0LCBvcHRpb24pID0+XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5rZXkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0LnRvTG93ZXJDYXNlKCkpID49IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVTZWxlY3R9XG4gICAgICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwubm90X2ZvdW5kXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGFpbnMuZmlsdGVyKE1hcC5pc01hcCkubWFwKGNoYWluID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17Y2hhaW59IHZhbHVlPXtjaGFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjaGFpbi1zZWxlY3RcIn0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICB7c2VsZWN0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFpblNlbGVjdFZpZXc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuLyoqXG4gKiAgUmVuZGVycyBhIHRhYiBsYXlvdXQsIGhhbmRsaW5nIHN3aXRjaGluZyBhbmQgb3B0aW9uYWxseSBwZXJzaXN0cyB0aGUgY3VycmVudGx5IG9wZW4gdGFiIHVzaW5nIHRoZSBTZXR0aW5nc1N0b3JlXG4gKlxuICogIHByb3BzOlxuICogICAgIHNldHRpbmc6IHVuaXF1ZSBuYW1lIHRvIGJlIHVzZWQgdG8gcmVtZW1iZXIgdGhlIGFjdGl2ZSB0YWIgb2YgdGhpcyB0YWJzIGxheW91dCxcbiAqICAgICB0YWJzQ2xhc3M6IG9wdGlvbmFsIGNsYXNzZXMgZm9yIHRoZSB0YWJzIGNvbnRhaW5lciBkaXZcbiAqICAgICBjb250ZW50Q2xhc3M6IG9wdGlvbmFsIGNsYXNzZXMgZm9yIHRoZSBjb250ZW50IGNvbnRhaW5lciBkaXZcbiAqXG4gKiAgVXNhZ2U6XG4gKlxuICogIDxUYWJzIHNldHRpbmc9XCJteVNldHRpbmdcIj5cbiAqICAgICAgPFRhYiB0aXRsZT1cImxvY2FsZS5zdHJpbmcudGl0bGUxXCI+VGFiIDEgY29udGVudDwvVGFiPlxuICogICAgICA8VGFiIHRpdGxlPVwibG9jYWxlLnN0cmluZy50aXRsZTJcIj5UYWIgMiBjb250ZW50PC9UYWI+XG4gKiAgPC9UYWJzPlxuICpcbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNoYW5nZVRhYjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGlzTGlua1RvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzdWJUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSlcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgICAgICBpc0xpbmtUbzogXCJcIixcbiAgICAgICAgc3ViVGV4dDogbnVsbFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgY2hhbmdlVGFiLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICB1cGRhdGVkVGFiLFxuICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICBzdWJUZXh0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgYyA9IGNuYW1lcyh7XCJpcy1hY3RpdmVcIjogaXNBY3RpdmV9LCBjbGFzc05hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIgJiYgdGl0bGUuaW5kZXhPZihcIi5cIikgPiAwKSB7XG4gICAgICAgICAgICB0aXRsZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkb250IHN0cmluZyBjb25jZXRlbmF0ZSBzdWJUZXh0IGRpcmVjdGx5IHdpdGhpbiB0aGUgcmVuZGVyaW5nLCBzdWJUZXh0IGNhbiBiZSBhbiBvYmplY3Qgd2l0aG91dCB0b1N0cmluZ1xuICAgICAgICAvLyBpbXBsZW1lbnRhdGlvbiwgYnV0IHZhbGlkIERPTSAobWVhbmluZywgZG9uJ3QgZG8gc3ViVGV4dCArIFwic29tZVN0cmluZ1wiXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICAvLyBpZiBzdWJUZXh0IGlzIGVtcHR5LCBkb250IHJlbmRlciBpdCwgd2UgZG9udCB3YW50IGVtcHR5IGJyYWNrZXRzIGFkZGVkXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN1YlRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBzdWJUZXh0ID0gc3ViVGV4dC50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGl0bGUudHlwZSA9PT0gXCJzcGFuXCIpIHtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IHRpdGxlLnByb3BzLmNoaWxkcmVuWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleH0gZGF0YS1pcy1saW5rLXRvPXt0aGlzLnByb3BzLmlzTGlua1RvfT5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICB7dXBkYXRlZFRhYiA/IFwiKlwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgXCIgKFwifVxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiBzdWJUZXh0fVxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiBcIilcIn1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgIWRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNoYW5nZVRhYi5iaW5kKHRoaXMsIGluZGV4LCB0aGlzLnByb3BzLmlzTGlua1RvKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cGRhdGVkVGFiID8gXCIqXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIDxkaXYgY2xhc3NOYW1lPVwidGFiLXN1YnRleHRcIj57c3ViVGV4dH08L2Rpdj59XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHNldHRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlZmF1bHRBY3RpdmVUYWI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHNlZ21lbnRlZDogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYWN0aXZlOiAwLFxuICAgICAgICBkZWZhdWx0QWN0aXZlVGFiOiAwLFxuICAgICAgICBzZWdtZW50ZWQ6IHRydWUsXG4gICAgICAgIGNvbnRlbnRDbGFzczogXCJcIixcbiAgICAgICAgc3R5bGU6IHt9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVUYWI6IHByb3BzLnNldHRpbmdcbiAgICAgICAgICAgICAgICA/IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQocHJvcHMuc2V0dGluZywgcHJvcHMuZGVmYXVsdEFjdGl2ZVRhYilcbiAgICAgICAgICAgICAgICA6IHByb3BzLmRlZmF1bHRBY3RpdmVUYWIsXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zID0gdGhpcy5fc2V0RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMsIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IG5leHRTZXR0aW5nID0gbmV4dFByb3BzLnZpZXdTZXR0aW5ncy5nZXQobmV4dFByb3BzLnNldHRpbmcpO1xuICAgICAgICBpZiAobmV4dFNldHRpbmcgIT09IHRoaXMucHJvcHMudmlld1NldHRpbmdzLmdldCh0aGlzLnByb3BzLnNldHRpbmcpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWI6IG5leHRTZXR0aW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zKTtcbiAgICB9XG5cbiAgICBfc2V0RGltZW5zaW9ucygpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NoYW5nZVRhYih2YWx1ZSwgaXNMaW5rVG8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYikgcmV0dXJuO1xuICAgICAgICAvLyBQZXJzaXN0IGN1cnJlbnQgdGFiIGlmIGRlc2lyZWRcblxuICAgICAgICBpZiAoaXNMaW5rVG8gIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGlzTGlua1RvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNldHRpbmcpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuc2V0dGluZ106IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVUYWI6IHZhbHVlfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2VUYWIpIHRoaXMucHJvcHMub25DaGFuZ2VUYWIodmFsdWUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjaGlsZHJlbiwgY29udGVudENsYXNzLCB0YWJzQ2xhc3MsIHN0eWxlLCBzZWdtZW50ZWR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY29sbGFwc2VUYWJzID1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGggPCA5MDAgJiYgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMjtcblxuICAgICAgICBsZXQgYWN0aXZlQ29udGVudCA9IG51bGw7XG5cbiAgICAgICAgbGV0IHRhYnMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2xsYXBzZVRhYnMgJiYgY2hpbGQucHJvcHMuZGlzYWJsZWQpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiO1xuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29udGVudCA9IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZVRhYnMsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgY2hhbmdlVGFiOiB0aGlzLl9jaGFuZ2VUYWIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5maWx0ZXIoYSA9PiBhICE9PSBudWxsKTtcblxuICAgICAgICBpZiAoIWFjdGl2ZUNvbnRlbnQpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNvbnRlbnQgPSB0YWJzWzBdLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnMgPyBcIndpdGgtYnV0dG9uc1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwiYnV0dG9uLWdyb3VwIG5vLW1hcmdpblwiLCB0YWJzQ2xhc3MsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGFwc2VUYWJzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjE1cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjdGl2ZVRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAxMCwgbWFyZ2luQm90dG9tOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VUYWIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXRbaW5kXS5hdHRyaWJ1dGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWlzLWxpbmstdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWN0aW9uQnV0dG9ucyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFicy1hY3Rpb24tYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25hbWVzKFwidGFiLWNvbnRlbnRcIiwgY29udGVudENsYXNzKX0+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVDb250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UYWJzID0gY29ubmVjdChUYWJzLCB7XG4gICAgbGlzdGVuVG8oKSB7XG4gICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt2aWV3U2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3N9O1xuICAgIH1cbn0pO1xuXG5UYWJzID0gd2l0aFJvdXRlcihUYWJzKTtcblxuZXhwb3J0IHtUYWJzLCBUYWJ9O1xuIiwiaW1wb3J0IHtoYXNHYXRld2F5UHJlZml4fSBmcm9tIFwiY29tbW9uL2dhdGV3YXlVdGlsc1wiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcblxuZnVuY3Rpb24gbG9va3VwQXNzZXRzKHZhbHVlLCBnYXRld2F5QXNzZXRzID0gZmFsc2UsIGdldEFzc2V0TGlzdCwgc2V0U3RhdGUpIHtcbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSBcIlwiKSByZXR1cm47XG5cbiAgICBsZXQgcXVvdGUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgaWYgKHF1b3RlLnN0YXJ0c1dpdGgoXCJHUFwiKSAmJiBxdW90ZS5sZW5ndGggPj0gNikge1xuICAgICAgICBxdW90ZSA9IHZhbHVlLnN1YnN0cigzLCBxdW90ZS5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICBnZXRBc3NldExpc3QocXVvdGUsIDEwLCBnYXRld2F5QXNzZXRzKTtcblxuICAgIHNldFN0YXRlKHtsb29rdXBRdW90ZTogcXVvdGV9KTtcbn1cblxuZnVuY3Rpb24gYXNzZXRGaWx0ZXIoXG4gICAge3NlYXJjaEFzc2V0cywgbWFya2V0UGlja2VyQXNzZXQsIGJhc2VBc3NldCwgcXVvdGVBc3NldH0sXG4gICAge2lucHV0VmFsdWUsIGxvb2t1cFF1b3RlfSxcbiAgICBzZXRTdGF0ZSxcbiAgICBjaGVja0FuZFVwZGF0ZU1hcmtldExpc3Rcbikge1xuICAgIHNldFN0YXRlKHthY3RpdmVTZWFyY2g6IHRydWV9KTtcblxuICAgIGxldCBhc3NldENvdW50ID0gMDtcbiAgICBsZXQgYWxsTWFya2V0cyA9IFtdO1xuXG4gICAgbGV0IGJhc2VTeW1ib2wgPSBiYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgIGxldCBxdW90ZVN5bWJvbCA9IHF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuXG4gICAgaWYgKHNlYXJjaEFzc2V0cy5zaXplICYmICEhaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgc2VhcmNoQXNzZXRzXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLm9wdGlvbnMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UoYS5vcHRpb25zLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInZpc2libGVcIiBpbiBkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVzY3JpcHRpb24udmlzaWJsZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbC5pbmRleE9mKGxvb2t1cFF1b3RlKSAhPT0gLTE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhc3NldENvdW50ID4gMTAwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgYXNzZXRDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgbGV0IGlzc3Vlck5hbWUgPSBmZXRjaElzc3Vlck5hbWUoYXNzZXQuaXNzdWVyKTtcblxuICAgICAgICAgICAgICAgIGxldCBiYXNlID0gYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPSBhc3NldC5zeW1ib2wgKyBcIl9cIiArIGJhc2U7XG5cbiAgICAgICAgICAgICAgICBsZXQgaXNRdW90ZUFzc2V0ID0gcXVvdGVTeW1ib2wgPT0gbWFya2V0UGlja2VyQXNzZXQ7XG4gICAgICAgICAgICAgICAgbGV0IGluY2x1ZGVBc3NldCA9XG4gICAgICAgICAgICAgICAgICAgIChpc1F1b3RlQXNzZXQgJiYgYXNzZXQuc3ltYm9sICE9IGJhc2VTeW1ib2wpIHx8XG4gICAgICAgICAgICAgICAgICAgICghaXNRdW90ZUFzc2V0ICYmIGFzc2V0LnN5bWJvbCAhPSBxdW90ZVN5bWJvbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZUFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbE1hcmtldHMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogYXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVySWQ6IGFzc2V0Lmlzc3VlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXI6IGlzc3Vlck5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFya2V0c0xpc3QgPSBzb3J0TWFya2V0c0xpc3QoYWxsTWFya2V0cywgaW5wdXRWYWx1ZSk7XG4gICAgY2hlY2tBbmRVcGRhdGVNYXJrZXRMaXN0KG1hcmtldHNMaXN0KTtcbn1cblxuZnVuY3Rpb24gZ2V0TWFya2V0U29ydENvbXBvbmVudHMobWFya2V0KSB7XG4gICAgY29uc3Qgd2VpZ2h0ID0ge307XG4gICAgY29uc3QgcXVvdGUgPSBtYXJrZXQucXVvdGU7XG4gICAgaWYgKHF1b3RlLmluZGV4T2YoXCIuXCIpICE9PSAtMSkge1xuICAgICAgICBjb25zdCBbZ2F0ZXdheSwgYXNzZXRdID0gcXVvdGUuc3BsaXQoXCIuXCIpO1xuICAgICAgICB3ZWlnaHQuZ2F0ZXdheSA9IGdhdGV3YXk7XG4gICAgICAgIHdlaWdodC5hc3NldCA9IGFzc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdlaWdodC5hc3NldCA9IHF1b3RlO1xuICAgIH1cbiAgICBpZiAobWFya2V0Lmlzc3VlcklkID09PSBcIjEuMi4wXCIpIHdlaWdodC5pc0NvbW1pdHRlZSA9IHRydWU7XG4gICAgcmV0dXJuIHdlaWdodDtcbn1cblxuZnVuY3Rpb24gc29ydE1hcmtldHNMaXN0KGFsbE1hcmtldHMsIGlucHV0VmFsdWUpIHtcbiAgICBpZiAoaW5wdXRWYWx1ZS5zdGFydHNXaXRoKFwiR1BcIikgJiYgaW5wdXRWYWx1ZS5sZW5ndGggPj0gNikge1xuICAgICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5zdWJzdHIoMywgaW5wdXRWYWx1ZS5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbE1hcmtldHMuc29ydCgoWywgbWFya2V0QV0sIFssIG1hcmtldEJdKSA9PiB7XG4gICAgICAgIGNvbnN0IHdlaWdodEEgPSBnZXRNYXJrZXRTb3J0Q29tcG9uZW50cyhtYXJrZXRBKTtcbiAgICAgICAgY29uc3Qgd2VpZ2h0QiA9IGdldE1hcmtldFNvcnRDb21wb25lbnRzKG1hcmtldEIpO1xuXG4gICAgICAgIGlmICh3ZWlnaHRBLmFzc2V0ICE9PSB3ZWlnaHRCLmFzc2V0KSB7XG4gICAgICAgICAgICBpZiAod2VpZ2h0QS5hc3NldCA9PT0gaW5wdXRWYWx1ZSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKHdlaWdodEIuYXNzZXQgPT09IGlucHV0VmFsdWUpIHJldHVybiAxO1xuICAgICAgICAgICAgaWYgKHdlaWdodEEuYXNzZXQgPiB3ZWlnaHRCLmFzc2V0KSByZXR1cm4gLTE7XG4gICAgICAgICAgICBpZiAod2VpZ2h0QS5hc3NldCA8IHdlaWdodEIuYXNzZXQpIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdlaWdodEEuaXNDb21taXR0ZWUgXiB3ZWlnaHRCLmlzQ29tbWl0dGVlKSB7XG4gICAgICAgICAgICBpZiAod2VpZ2h0QS5pc0NvbW1pdHRlZSkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYgKHdlaWdodEIuaXNDb21taXR0ZWUpIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYUlzS25vd25HYXRld2F5ID0gaGFzR2F0ZXdheVByZWZpeChtYXJrZXRBLnF1b3RlKTtcbiAgICAgICAgY29uc3QgYklzS25vd25HYXRld2F5ID0gaGFzR2F0ZXdheVByZWZpeChtYXJrZXRCLnF1b3RlKTtcbiAgICAgICAgaWYgKGFJc0tub3duR2F0ZXdheSAmJiAhYklzS25vd25HYXRld2F5KSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChiSXNLbm93bkdhdGV3YXkgJiYgIWFJc0tub3duR2F0ZXdheSkgcmV0dXJuIDE7XG5cbiAgICAgICAgaWYgKHdlaWdodEEuZ2F0ZXdheSA+IHdlaWdodEIuZ2F0ZXdheSkgcmV0dXJuIDE7XG4gICAgICAgIGlmICh3ZWlnaHRBLmdhdGV3YXkgPCB3ZWlnaHRCLmdhdGV3YXkpIHJldHVybiAtMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZldGNoSXNzdWVyTmFtZShpc3N1ZXJJZCkge1xuICAgIGxldCBpc3N1ZXIgPSBDaGFpblN0b3JlLmdldE9iamVjdChpc3N1ZXJJZCwgZmFsc2UsIGZhbHNlKTtcbiAgICBpZiAoIWlzc3Vlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlzc3Vlci5nZXQoXCJuYW1lXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtsb29rdXBBc3NldHMsIGFzc2V0RmlsdGVyLCBmZXRjaElzc3Vlck5hbWV9O1xuIiwiaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHtjaGVja0ZlZVN0YXR1c0FzeW5jfSBmcm9tIFwiY29tbW9uL3RyeEhlbHBlclwiO1xyXG5cclxuLy8gUmV0dXJucyBhIGxpc3Qgb2YgZGljdHMgd2l0aCBrZXlzIGlkLCBzZWxsZXIgYW1vdW50IGFuZCBwcmljZSBhbmQgcmVzcGVjdGl2ZSB2YWx1ZXNcclxuZnVuY3Rpb24gZ2V0T3JkZXJzKGFtb3VudCwgb3JkZXJzLCB3aGF0QW1vdW50KSB7XHJcbiAgICBjb25zdCBtYXRjaGVkT3JkZXJzID0gW107XHJcbiAgICBsZXQgdG90YWxBbW91bnQ7XHJcbiAgICBvcmRlcnMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBiLmdldFByaWNlKCkgLSBhLmdldFByaWNlKCk7IC8vIGdldFByaWNlID09PSBfcmVhbF9wcmljZVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobWF0Y2hlZE9yZGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWF0Y2hlZE9yZGVycy5mb3JFYWNoKCh7b3JkZXJ9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgd2hhdEFtb3VudCA9PT0gXCJyZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBvcmRlci50b3RhbF9mb3Jfc2FsZS5nZXRBbW91bnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG9yZGVyLnRvdGFsX3RvX3JlY2VpdmUuZ2V0QW1vdW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRvdGFsQW1vdW50ID49IGFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVkT3JkZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiBvcmRlcnNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBvcmRlcnNbaV0uYW1vdW50VG9SZWNlaXZlKCkuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsX2Ftb3VudDogb3JkZXJzW2ldLnRvdGFsX3RvX3JlY2VpdmUuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBvcmRlcnNbaV0uZ2V0UHJpY2UoKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaGVkT3JkZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IG9yZGVyc1tpXSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogb3JkZXJzW2ldLmFtb3VudFRvUmVjZWl2ZSgpLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIHRvdGFsX2Ftb3VudDogb3JkZXJzW2ldLnRvdGFsX3RvX3JlY2VpdmUuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IG9yZGVyc1tpXS5nZXRQcmljZSgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWF0Y2hlZE9yZGVycztcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGRpY3Qgd2l0aCBrZXlzIGZlZWRQcmljZSBhbmQgbGFzdFByaWNlXHJcbmZ1bmN0aW9uIGdldFByaWNlcyhhY3RpdmVNYXJrZXRIaXN0b3J5LCBmZWVkUHJpY2UpIHtcclxuICAgIGxldCBsYXRlc3RQcmljZTtcclxuICAgIGlmIChhY3RpdmVNYXJrZXRIaXN0b3J5LnNpemUpIHtcclxuICAgICAgICBjb25zdCBsYXRlc3RfdHdvID0gYWN0aXZlTWFya2V0SGlzdG9yeS50YWtlKDIpO1xyXG4gICAgICAgIGNvbnN0IGxhdGVzdCA9IGxhdGVzdF90d28uZmlyc3QoKTtcclxuICAgICAgICBsYXRlc3RQcmljZSA9IGxhdGVzdC5nZXRQcmljZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gZmVlZCBwcmljZSA9PT0gbnVsbCBpZiBub3QgYSBiaXRhc3NldCBtYXJrZXRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGF0ZXN0UHJpY2U6IGxhdGVzdFByaWNlID8gbGF0ZXN0UHJpY2UgOiBudWxsLFxyXG4gICAgICAgIGZlZWRQcmljZTogZmVlZFByaWNlID8gZmVlZFByaWNlLnRvUmVhbCgpIDogZmVlZFByaWNlXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBSZXR1cm5zIGEgbGlzdCBvZiBhc3NldCBpZHMgdGhhdCB0aGUgdXNlciBjYW4gc2VsbFxyXG5mdW5jdGlvbiBnZXRBc3NldHNUb1NlbGwoYWNjb3VudCkge1xyXG4gICAgbGV0IGFzc2V0VHlwZXMgPSBbXTtcclxuXHJcbiAgICBpZiAoIShhY2NvdW50ICYmIGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFzc2V0VHlwZXM7XHJcbiAgICB9XHJcbiAgICBsZXQgYWNjb3VudEJhbGFuY2VzID0gYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XHJcblxyXG4gICAgYXNzZXRUeXBlcyA9IE9iamVjdC5rZXlzKGFjY291bnRCYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50QmFsYW5jZXMpIHtcclxuICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRCYWxhbmNlc1trZXldKTtcclxuICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCAmJiBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcclxuICAgICAgICAgICAgYXNzZXRUeXBlcy5zcGxpY2UoYXNzZXRUeXBlcy5pbmRleE9mKGtleSksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXNzZXRUeXBlcztcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGRpY3Qgd2l0aCBrZXlzIGxpcXVpZGl0eVBlbmFsdHksIG1hcmtldEZlZSBhbmQgdHJhbnNhY3Rpb25GZWUsIGlucHV0IGlzIHNlbGVjdGVkIGFzc2V0cyBhbmQgYW1vdW50c1xyXG5hc3luYyBmdW5jdGlvbiBnZXRGZWVzKGJhc2VBc3NldCwgcXVvdGVBc3NldCwgY3VycmVudEFjY291bnQpIHtcclxuICAgIGNvbnN0IGJhc2VNYXJrZXRGZWVQZXJjZW50ID1cclxuICAgICAgICBiYXNlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSkgLyAxMDAgKyBcIiVcIjtcclxuICAgIGNvbnN0IHF1b3RlTWFya2V0RmVlUGVyY2VudCA9XHJcbiAgICAgICAgcXVvdGVBc3NldC5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKSAvIDEwMCArIFwiJVwiO1xyXG4gICAgY29uc3QgYmFzZU1hcmtldEZlZSA9IGJhc2VBc3NldC5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKTtcclxuICAgIGNvbnN0IHF1b3RlTWFya2V0RmVlID0gcXVvdGVBc3NldC5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKTtcclxuXHJcbiAgICBjb25zdCB0cnhGZWUgPSBhd2FpdCBjaGVja0ZlZVN0YXR1cyhcclxuICAgICAgICBbYmFzZUFzc2V0LCBxdW90ZUFzc2V0XSxcclxuICAgICAgICBjdXJyZW50QWNjb3VudFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1hcmtldEZlZToge1xyXG4gICAgICAgICAgICBiYXNlTWFya2V0RmVlUGVyY2VudCxcclxuICAgICAgICAgICAgcXVvdGVNYXJrZXRGZWVQZXJjZW50LFxyXG4gICAgICAgICAgICBiYXNlTWFya2V0RmVlLFxyXG4gICAgICAgICAgICBxdW90ZU1hcmtldEZlZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJhbnNhY3Rpb25GZWU6IHRyeEZlZVxyXG4gICAgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tGZWVTdGF0dXMoYXNzZXRzID0gW10sIGFjY291bnQpIHtcclxuICAgIGxldCBmZWVTdGF0dXMgPSB7fTtcclxuICAgIGxldCBwID0gW107XHJcbiAgICBhc3NldHMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICBwLnB1c2goXHJcbiAgICAgICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xyXG4gICAgICAgICAgICAgICAgYWNjb3VudElEOiBhY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgZmVlSUQ6IGEuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImxpbWl0X29yZGVyX2NyZWF0ZVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHApXHJcbiAgICAgICAgLnRoZW4oc3RhdHVzID0+IHtcclxuICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goKGEsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmVlU3RhdHVzW2EuZ2V0KFwiaWRcIildID0gc3RhdHVzW2lkeF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjaGVja0ZlZVN0YXR1c0FzeW5jIGVycm9yXCIsIGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXM7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0T3JkZXJzLCBnZXRQcmljZXMsIGdldEZlZXMsIGdldEFzc2V0c1RvU2VsbH07XHJcbiIsImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBub3cgZnJvbSAnLi9ub3cuanMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJy4vdG9OdW1iZXIuanMnO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVib3VuY2U7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm93O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9