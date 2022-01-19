"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[14],{

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

/***/ 3063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1804);
/* harmony import */ var _Account_AccountImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2076);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(578);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(594);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(426);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1926);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1927);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1813);
/* harmony import */ var common_account_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(595);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2075);

















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

/***/ 3059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _DonutChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3060);
/* harmony import */ var _DonateSendModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3062);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(645);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1804);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(578);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(626);










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
    }) : "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
    }), ":\xA0"), coin.votes, coin.soon === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "coin-soon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      name: "transfer",
      title: "icons.transfer",
      className: "icon-14px"
    }), "\xA0 Donate") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      onClick: this.triggerSend.bind(this, "1.3.2", coin)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      name: "transfer",
      title: "icons.transfer",
      className: "icon-14px"
    }), "\xA0 Donate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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

/***/ 3062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2272);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _Modal_SendModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2047);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(578);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1804);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(426);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2048);
/* harmony import */ var _AccountSelectorListing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3063);
/* harmony import */ var _Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2059);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2081);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(610);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(626);


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

/***/ 3060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonutChart": () => (/* binding */ DonutChart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _DonutChart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3061);


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

/***/ 3057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3058);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(510);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(426);
/* harmony import */ var _CoinCardListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3059);
/* harmony import */ var _branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(610);
/* harmony import */ var _Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2797);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2662);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2061);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(645);













class ListingPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      ListingNotice1Informed: false,
      coins: [],
      updating: true
    };
  }

  onSubmitRequest(e) {
    e.preventDefault();
    this.setState({
      error: null
    });
    let link_ru = "https://docs.google.com/forms/d/1lJnvufc95CDh2z1Ntq7iCSEs3oD7tPG4nljKTYYezQw";
    let link_en = "https://docs.google.com/forms/d/1X2PguAaRzxlXZGLAarGcmNd-LbJCy8lcoMBcQjFSQ5k";
    let current_locale = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().settings.get("locale");
    window.open(current_locale == "ru" ? link_ru : link_en, "_blank");
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

  render() {
    let current_locale = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().settings.get("locale");
    let agreement_ru = "https://rudex.freshdesk.com/support/solutions/articles/35000138247-cоглашение-об-оказании-услуг-шлюза";
    let agreement_en = "https://rudex.freshdesk.com/support/solutions/articles/35000138245-gateway-service-agreement";
    let RuDEX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        fontWeight: "bold"
      }
    }, "RuDEX");
    let DONATE = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem",
        paddingRight: 5
      },
      to: "/asset/DONATE"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      maxWidth: 25,
      replaceNoneToBts: false,
      name: "DONATE"
    }), "DONATE");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "content-block small-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tabs-container generic-bordered-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__.Tabs, {
      defaultActiveTab: 0,
      segmented: false,
      setting: "permissionsTab",
      className: "account-tabs",
      tabsClass: "account-overview bordered-header content-block",
      contentClass: "padding"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__.Tab, {
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
    }, this.state.updating === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        margin: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.loading"
    }), " ") : this.getContent()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__.Tab, {
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
    }, this.state.updating === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        margin: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.loading"
    }), " ") : this.getContent_listed()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_Tabs__WEBPACK_IMPORTED_MODULE_6__.Tab, {
      title: "listing.add_coin"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
      className: "horizontal",
      tabIndex: 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-container help-content-layout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "main-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.header"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      style: {
        fontSize: "20px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text3.t1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text3.t2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem"
      },
      to: "/market/DONATE_RUDEX.USDT"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text3.get"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text4.t1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem",
        paddingRight: 5
      },
      to: "/asset/DONATE"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      maxWidth: 25,
      replaceNoneToBts: false,
      name: "DONATE"
    }), "DONATE"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text4.t2"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem",
        paddingRight: 5
      },
      to: "/asset/DONATE"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      maxWidth: 25,
      replaceNoneToBts: false,
      name: "DONATE"
    }), "DONATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text4.t3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        border: "1px solid #00a9e0",
        padding: "4px 3px 3px 4px",
        borderRadius: "3px",
        cursor: "pointer"
      }
    }, "DONATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text4.t4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text5.t1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem",
        paddingRight: 5
      },
      to: "/asset/DONATE"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      maxWidth: 25,
      replaceNoneToBts: false,
      name: "DONATE"
    }), "DONATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text5.t2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.text5.t3"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.rules.header"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.rules.rule_1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      href: current_locale == "ru" ? agreement_ru : agreement_en,
      content: "listing.texts.rules.rule_10",
      component: "a",
      target: "_blank"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.rules.rule_11"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.rules.rule_2"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.rules.rule_3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem",
        paddingRight: 5
      },
      to: "/asset/DONATE"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      maxWidth: 25,
      replaceNoneToBts: false,
      name: "DONATE"
    }), "DONATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.rules.rule_4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.rules.rule_5"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "checkbox",
      defaultChecked: this.state.ListingNotice1Informed,
      onChange: this.onListingNotice1Informed.bind(this)
    }), " ", "-", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.notice_informed"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listing_button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_9__.Button, {
      key: "send",
      disabled: !this.state.ListingNotice1Informed,
      onClick: this.state.ListingNotice1Informed ? this.onSubmitRequest.bind(this) : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.submit_request"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.texts.end"
    }), " ", RuDEX, "!"))))))));
  }

  _getBalances() {
    let coins = (0,_branding__WEBPACK_IMPORTED_MODULE_5__.getListingCoins)();
    if (this.state.coins.length !== 0) coins = this.state.coins;
    this.setState({
      coins: coins,
      updating: true
    });
    coins.forEach(coin => {
      (0,bitsharesjs__WEBPACK_IMPORTED_MODULE_3__.FetchChain)("getAsset", "DONATE").then(assetInfo => {
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

  getContent = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
      style: {
        margin: 2,
        fontSize: "1.0rem"
      },
      to: "/market/DONATE_RUDEX.USDT"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.get_donate_tokens"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        margin: 2,
        fontSize: "1.0rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      maxWidth: 25,
      replaceNoneToBts: false,
      name: "DONATE"
    }), "DONATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.token"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableRank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.table.rank"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableLogo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableAssetName align-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.table.asset_name"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoData"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableVotes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.table.goal"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableGoal"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.table.donates"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableStatus"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.table.status"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableProgress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.table.progress"
    })))), this.getCoinsList());
  };
  getContent_listed = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableRank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.table.rank"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableLogo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableAssetName align-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.table.asset_name"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfo"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingAssetInfoData"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableVotes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
      content: "listing.table.goal"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "listingTable__cell listingTableStatus"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_8___default()), {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CoinCardListing__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: i,
        rank: i + 1,
        coin: coin
      });
    });
  };
  getCoinsList_listed = () => {
    let coins = (0,_branding__WEBPACK_IMPORTED_MODULE_5__.getListedCoins)();
    let sortedCoins = coins.sort((a, b) => {
      return b.votes - a.votes;
    });
    return sortedCoins.map((coin, i) => {
      coin.votes_for_percent = coin.votes < coin.goal ? coin.votes : coin.goal;
      coin.status = "done";
      coin.listed = true;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CoinCardListing__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: i,
        rank: i + 1,
        coin: coin
      });
    });
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListingPage);

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

/***/ 2797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => (/* binding */ Tabs),
/* harmony export */   "Tab": () => (/* binding */ Tab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1804);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(646);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(645);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2062);








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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5iMzQwZTdmMWNiYWEzM2E4MzYyOS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7O0FBekJBOztBQTJCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUtBOztBQS9DQTs7QUFpREE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBOztBQVBBOztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFQQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBOztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7QUFLQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBSEE7QUFtQkE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7O0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBS0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFNQTs7QUFPQTtBQUNBOztBQUVBO0FBSUE7O0FBRUE7O0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBL0JBO0FBc0NBOztBQUVBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFVQTtBQUVBO0FBR0E7QUFEQTtBQU9BO0FBUUE7QUFBQTtBQUFBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUtBO0FBQ0E7QUFQQTtBQVdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFHQTtBQURBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBREE7QUFXQTs7QUF2ckJBOztBQTByQkE7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBVEE7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3B2QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBVUE7QUFEQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBWUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFEQTtBQVNBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFXQTs7QUE3SUE7O0FBZ0pBO0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTs7QUFYQTtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFHQTs7QUFHQTtBQUFBO0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFJQTtBQUFBO0FBVkE7QUFlQTtBQURBO0FBTUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQVVBOztBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBY0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUF4QkE7QUErQkE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU1BO0FBQ0E7QUFQQTtBQWFBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFYQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBWEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQVhBO0FBbUJBOztBQXJPQTs7QUF3T0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUhBOztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQVZBO0FBYUE7Ozs7Ozs7Ozs7Ozs7QUMzUUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUNBO0FBQUE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQVdBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFTQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBTkE7QUFEQTtBQVlBO0FBQUE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBTkE7QUFTQTtBQUNBO0FBR0E7QUFMQTtBQVNBO0FBQUE7QUFHQTtBQUFBO0FBT0E7QUFDQTtBQUlBO0FBTkE7QUFXQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQU5BO0FBZUE7QUFBQTtBQUtBO0FBQUE7QUFXQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFRQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBcmVBOztBQXdlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2ZkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVEE7QUFZQTs7QUFoRUE7O0FBbUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFRQTs7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVNBO0FBQUE7QUFJQTtBQUFBO0FBSUE7O0FBMUVBOztBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFPQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQU1BO0FBWkE7QUFxQkE7QUFBQTtBQU1BO0FBQUE7QUFLQTs7QUE3SkE7O0FBZ0tBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBTkE7QUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0JvdHMvbGlicy9Bc3NldFdyYXBwZXIuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvQWNjb3VudFNlbGVjdG9yTGlzdGluZy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9Db2luQ2FyZExpc3RpbmcuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvRG9uYXRlU2VuZE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9MaXN0aW5nL0RvbnV0Q2hhcnQuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL0xpc3RpbmcvTGlzdGluZ1BhZ2UuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UYWJzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldERpc3BsYXlOYW1lfSBmcm9tIFwiY29tbW9uL3JlYWN0VXRpbHNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCJpbW11dGFibGVcIjtcblxuY2xhc3MgRHluYW1pY09iamVjdFJlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkb3M6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdFxuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZG9zOiBMaXN0KClcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5nZXREeW5hbWljT2JqZWN0ID0gdGhpcy5nZXREeW5hbWljT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0RHluYW1pY09iamVjdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kb3MuZmluZChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICYmIGEuZ2V0KFwiaWRcIikgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldER5bmFtaWNPYmplY3Q6IHRoaXMuZ2V0RHluYW1pY09iamVjdFxuICAgICAgICB9KTtcbiAgICB9XG59XG5EeW5hbWljT2JqZWN0UmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKER5bmFtaWNPYmplY3RSZXNvbHZlcik7XG5cbi8qKlxuICogSE9DIHRoYXQgcmVzb2x2ZXMgZWl0aGVyIGEgbnVtYmVyIG9mIGFzc2V0cyBkaXJlY3RseSB3aXRoIENoYWluQXNzZXQsXG4gKiBvciBhIGxpc3Qgb2YgYXNzZXRzIHdpdGggQ2hhaW5Bc3NldHNcbiAqXG4gKiAgT3B0aW9uc1xuICogIC0ncHJvcE5hbWVzJyBhbiBhcnJheSBvZiBwcm9wIG5hbWVzIHRvIGJlIHJlc29sdmVkIGFzIGFzc2V0cy4gKGRlZmF1bHRzIHRvIFwiYXNzZXRcIiBvciBcImFzc2V0c1wiKVxuICogIC0nZGVmYXVsdFByb3BzJyBkZWZhdWx0IHZhbHVlcyB0byB1c2UgZm9yIG9iamVjdHMgKG9wdGlvbmFsKVxuICogIC0nYXNMaXN0JyBkZWZpbmVzIHdoZXRoZXIgdG8gdXNlIENoYWluQXNzZXRzTGlzdCBvciBub3QgKHVzZWZ1bCBmb3IgcmVzb2x2aW5nIGxhcmdlIHF1YW50aXRpZXMgb2YgYXNzZXRzKVxuICogIC0nd2l0aER5bmFtaWMnIGRlZmluZXMgd2hldGhlciB0byBhbHNvIHJlc29sdmUgZHluYW1pYyBvYmplY3RzIG9yIG5vdFxuICovXG5cbmZ1bmN0aW9uIEFzc2V0V3JhcHBlcihDb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMucHJvcE5hbWVzID0gb3B0aW9ucy5wcm9wTmFtZXMgfHwgW1xuICAgICAgICAhIW9wdGlvbnMuYXNMaXN0ID8gXCJhc3NldHNcIiA6IFwiYXNzZXRcIlxuICAgIF07XG4gICAgY29uc3QgZmluYWxQcm9wVHlwZXMgPSBvcHRpb25zLnByb3BOYW1lcy5yZWR1Y2UoKHJlcywgdHlwZSkgPT4ge1xuICAgICAgICByZXNbdHlwZV0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgPyBDaGFpblR5cGVzLkNoYWluQXNzZXRzTGlzdFxuICAgICAgICAgICAgOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBsZXQgZGVmYXVsdFByb3BzID0gT2JqZWN0LmtleXMoZmluYWxQcm9wVHlwZXMpLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiBvcHRpb25zLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICByZXNba2V5XSA9ICEhb3B0aW9ucy5hc0xpc3QgPyBMaXN0KGN1cnJlbnQgfHwgW10pIDogY3VycmVudCB8fCBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVmYXVsdFByb3BzICYmICEhb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCkge1xuICAgICAgICBkZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY2xhc3MgQXNzZXRzUmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0gZmluYWxQcm9wVHlwZXM7XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGZpbmFsQXNzZXRzID0ge307XG4gICAgICAgICAgICBsZXQgcGFzc1Ryb3VnaFByb3BzID0ge307XG4gICAgICAgICAgICBsZXQgZG9zID0gTGlzdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0gJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9wTmFtZXMuaW5kZXhPZihwcm9wKSAhPT0gLTFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5hc0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFzc2V0c1twcm9wXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHNbcHJvcF0uZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NUcm91Z2hQcm9wc1twcm9wXSA9IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB3cmFwcGVkID0gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgey4uLnBhc3NUcm91Z2hQcm9wcywgLi4uZmluYWxBc3NldHN9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYylcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RHluYW1pY09iamVjdFJlc29sdmVyIGRvcz17ZG9zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3cmFwcGVkfVxuICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNPYmplY3RSZXNvbHZlcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gd3JhcHBlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBc3NldHNSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRzUmVzb2x2ZXIpO1xuXG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFzc2V0c1Jlc29sdmVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCByZWY9XCJib3VuZF9jb21wb25lbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQXNzZXRzUmVzb2x2ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdyYXBwZXIuZGlzcGxheU5hbWUgPSBgV3JhcHBlcigke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG4gICAgcmV0dXJuIFdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBBY2NvdW50SW1hZ2UgZnJvbSBcIi4uL0FjY291bnQvQWNjb3VudEltYWdlXCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCJzdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gICAgQ2hhaW5TdG9yZSxcbiAgICBQdWJsaWNLZXksXG4gICAgQ2hhaW5WYWxpZGF0aW9uLFxuICAgIEZldGNoQ2hhaW4sXG4gICAgRmV0Y2hDaGFpbk9iamVjdHNcbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XG5pbXBvcnQgYWNjb3VudFV0aWxzIGZyb20gXCJjb21tb24vYWNjb3VudF91dGlsc1wiO1xuaW1wb3J0IGNuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtcbiAgICBUb29sdGlwLFxuICAgIEJ1dHRvbixcbiAgICBJbnB1dCxcbiAgICBJY29uIGFzIEFudEljb24sXG4gICAgU2VsZWN0LFxuICAgIEZvcm1cbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xuXG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuXG5jb25zdCBNQVhfTE9PS1VQX0FUVEVNUFRTID0gNTtcbi8qXG4gKiBAYnJpZWYgQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGFuIGFjY291bnQgYnkgbmFtZSBvciAjSURcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBkZXNpZ25lZCB0byBiZSBzdGF0ZWxlc3MgYXMgcG9zc2libGUuICBJdCdzIHByaW1hcnkgcmVzcG9uc2JpbGl0eSBpcyB0b1xuICogbWFuYWdlIHRoZSBsYXlvdXQgb2YgZGF0YSBhbmQgdG8gZmlsdGVyIHRoZSB1c2VyIGlucHV0LlxuICpcbiAqL1xuXG5jbGFzcyBBY2NvdW50U2VsZWN0b3JMaXN0aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZywgLy8gYSB0cmFuc2xhdGlvbiBrZXkgZm9yIHRoZSBsYWJlbFxuICAgICAgICBlcnJvcjogUHJvcFR5cGVzLmVsZW1lbnQsIC8vIHRoZSBlcnJvciBtZXNzYWdlIG92ZXJyaWRlXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgcGxhY2Vob2xkZXIgdGV4dCB0byBiZSBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBpcyBubyB1c2VyX2lucHV0XG4gICAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIGFueSB0aW1lIHVzZXIgaW5wdXQgY2hhbmdlc1xuICAgICAgICBvbkFjY291bnRDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBtZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gZXhpc3RpbmcgYWNjb3VudCBpcyBzZWxlY3RlZFxuICAgICAgICBvbkFjdGlvbjogUHJvcFR5cGVzLmZ1bmMsIC8vIGEgbWV0aG9kIGNhbGxlZCB3aGVuIEFkZCBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgICBhY2NvdW50TmFtZTogUHJvcFR5cGVzLnN0cmluZywgLy8gdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGFjY291bnQgc2VsZWN0b3IsIHRoZSBzdHJpbmcgdGhlIHVzZXIgZW50ZXJzXG4gICAgICAgIGFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50LCAvLyBhY2NvdW50IG9iamVjdCByZXRyaWV2ZWQgdmlhIEJpbmRUb0NoYWluU3RhdGUgZGVjb3JhdG9yIChub3QgaW5wdXQpXG4gICAgICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLCAvLyB0YWJpbmRleCBwcm9wZXJ0eSB0byBiZSBwYXNzZWQgdG8gaW5wdXQgdGFnXG4gICAgICAgIGRpc2FibGVBY3Rpb25CdXR0b246IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgaXQgaWYgeW91IG5lZWQgdG8gZGlzYWJsZSBhY3Rpb24gYnV0dG9uLFxuICAgICAgICBhbGxvd1VwcGVyY2FzZTogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSBpdCBpZiB5b3UgbmVlZCB0byBhbGxvdyB1cHBlcmNhc2UgbGV0dGVyc1xuICAgICAgICB0eXBlYWhlYWQ6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBleGNsdWRlQWNjb3VudHM6IFByb3BUeXBlcy5hcnJheSwgLy8gYXJyYXkgb2YgYWNjb3VudHMgdG8gZXhjbHVkZSBmcm9tIHRoZSB0eXBlYWhlYWRcbiAgICAgICAgZm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGVkaXRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbG9ja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcmVxdWlyZUFjdGl2ZVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG5vRm9ybTogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYXV0b3N1YnNjcmliZTogZmFsc2UsXG4gICAgICAgIGV4Y2x1ZGVBY2NvdW50czogW10sXG4gICAgICAgIGRpc2FibGVkOiBudWxsLFxuICAgICAgICBlZGl0YWJsZTogbnVsbCxcbiAgICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICAgICAgcmVxdWlyZUFjdGl2ZVNlbGVjdDogdHJ1ZSwgLy8gU2hvdWxkIG5vdCBiZSBzZXQgdG8gZmFsc2UsIHJlcXVpcmVkIGZvciBmYWxsYmFja1xuICAgICAgICBub0Zvcm06IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjY291bnRJbmRleDogW10sXG4gICAgICAgICAgICBsb2NrZWQ6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudCwgYWNjb3VudE5hbWV9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBQb3B1bGF0ZSBhY2NvdW50IHNlYXJjaCBhcnJheSwgZmV0Y2ggb25seSBvbmNlXG4gICAgICAgIGlmIChhY2NvdW50TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMubXlBY3RpdmVBY2NvdW50cy5tYXAoYSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuY29udGFjdHMubWFwKGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWRkVGhpc1RvSW5kZXgoYSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9mZXRjaEFjY291bnRzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25BY2NvdW50Q2hhbmdlZCAmJiBhY2NvdW50KVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKGFjY291bnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy50eXBlYWhlYWQgJiYgYWNjb3VudE5hbWUpXG4gICAgICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2VkKGFjY291bnROYW1lKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZvY3VzICYmICEhdGhpcy5wcm9wcy5lZGl0YWJsZSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZzLnVzZXJfaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2UHJvcHMuYWNjb3VudCAmJiBwcmV2UHJvcHMuYWNjb3VudCAhPT0gdGhpcy5wcm9wcy5hY2NvdW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkFjY291bnRDaGFuZ2VkKHRoaXMucHJvcHMuYWNjb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYWRkVG9JbmRleChhY2NvdW50TmFtZSwgbm9EZWxheSA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChub0RlbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUaGlzVG9JbmRleChhY2NvdW50TmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9mZXRjaEFjY291bnRzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkVG9JbmRleChhY2NvdW50TmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2FkZFRoaXNUb0luZGV4KGFjY291bnROYW1lKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFhY2NvdW50TmFtZSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbkFjY291bnRMaXN0ID0gYWNjb3VudEluZGV4LmZpbmQoYSA9PiBhLm5hbWUgPT09IGFjY291bnROYW1lKTtcblxuICAgICAgICBpZiAoYWNjb3VudE5hbWUgJiYgIWluQWNjb3VudExpc3QpIHtcbiAgICAgICAgICAgIGFjY291bnRJbmRleC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIGF0dGVtcHRzOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRJbmRleChuYW1lLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXguZmluZEluZGV4KGEgPT4gYS5uYW1lID09PSBuYW1lKTtcbiAgICB9XG5cbiAgICBfZ2V0U2VhcmNoQXJyYXkoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgLy8gRm9yIGFsbCBvYmplY3RzIGluIHNlYXJjaF9hcnJheSwgcXVlcnkgd2l0aCBGZXRjaENoYWluT2JqZWN0c1xuICAgICAgICAvLyBVcGRhdGUgcmVzdWx0cyBmb3IgZWFjaCBvYmplY3Qgd2l0aCByZXR1cm5lZCBkYXRhIGFuZCByZW1vdmUgZnJvbSBzZWFyY2hfYXJyYXlcbiAgICAgICAgLy8gVXBkYXRlIHNlYXJjaF9hcnJheSBmb3IgYWxsIHJlbWFpbmluZyBvYmplY3RzIHdpdGggaW5jcmVhc2VkIGF0dGVtcHRzIGNvdW50XG4gICAgICAgIC8vIHdoaWNoIGlzIHdoZW4gYWNjb3VudCBkb2VzIG5vdCBleGlzdHMsIGJ1dCBjYW4gYWxzbyBiZSBpZiBub2RlIGZhaWxlZCB0byBzZW5kIHJlc3VsdHNcbiAgICAgICAgLy8gYmFjayBpbiB0aW1lLCBzbyB3ZSBxdWVyeSBhdCBsZWFzdCBgTUFYX0xPT0tVUF9BVFRFTVBUU2AgdGltZXMgYmVmb3JlIHdlIHN0b3BcblxuICAgICAgICAvLyBGaWx0ZXIgb3V0IHdoYXQgb2JqZWN0cyB3ZSBzdGlsbCByZXF1aXJlIGRhdGEgZm9yXG4gICAgICAgIGxldCBzZWFyY2hfYXJyYXkgPSBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgIC5maWx0ZXIoc2VhcmNoID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXNlYXJjaC5kYXRhICYmIHNlYXJjaC5hdHRlbXB0cyA8IE1BWF9MT09LVVBfQVRURU1QVFNcbiAgICAgICAgICAgICAgICAgICAgPyBzZWFyY2gubmFtZVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChzZWFyY2ggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2gubmFtZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWFyY2hfYXJyYXk7XG4gICAgfVxuXG4gICAgX2ZldGNoQWNjb3VudHMoKSB7XG4gICAgICAgIGxldCB7YWNjb3VudEluZGV4fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IHNlYXJjaF9hcnJheSA9IHRoaXMuX2dldFNlYXJjaEFycmF5KCk7XG5cbiAgICAgICAgaWYgKHNlYXJjaF9hcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoX19ERVZfXylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvb2tlZCBmb3IgXCIgKyBzZWFyY2hfYXJyYXkubGVuZ3RoICsgXCIgYWNjb3VudHNcIik7XG4gICAgICAgICAgICBGZXRjaENoYWluT2JqZWN0cyhcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmdldEFjY291bnQsXG4gICAgICAgICAgICAgICAgc2VhcmNoX2FycmF5LFxuICAgICAgICAgICAgICAgIDMwMDAsXG4gICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICkudGhlbihhY2NvdW50cyA9PiB7XG4gICAgICAgICAgICAgICAgYWNjb3VudHMuZm9yRWFjaChhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmplY3RJbmRleCA9IHRoaXMuX2dldEluZGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9wb3B1bGF0ZUFjY291bnRJbmRleChhY2NvdW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFtvYmplY3RJbmRleF0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoX2FycmF5LnNwbGljZShhY2NvdW50LmdldChcIm5hbWVcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZWFyY2hfYXJyYXkuZm9yRWFjaChhY2NvdW50X3RvX2ZpbmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0SW5kZXggPSB0aGlzLl9nZXRJbmRleChcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfdG9fZmluZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdLmF0dGVtcHRzKys7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmRleDogYWNjb3VudEluZGV4XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSdW4gYW5vdGhlciBmZXRjaCBvZiBhY2NvdW50cyBpZiBkYXRhIGlzIHN0aWxsIG1pc3NpbmdcbiAgICAgICAgICAgICAgICBsZXQgaXNEYXRhTWlzc2luZyA9IHRoaXMuc3RhdGUuYWNjb3VudEluZGV4LmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIGEgPT4gIWEuZGF0YSAmJiBhLmF0dGVtcHRzIDwgTUFYX0xPT0tVUF9BVFRFTVBUU1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNEYXRhTWlzc2luZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZldGNoQWNjb3VudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZUFjY291bnRJbmRleChhY2NvdW50UmVzdWx0KSB7XG4gICAgICAgIGxldCB7bXlBY3RpdmVBY2NvdW50cywgY29udGFjdHN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlbiwganVzdCBmYWlsc2FmZVxuICAgICAgICBpZiAoIWFjY291bnRSZXN1bHQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGxldCBhY2NvdW50TmFtZSA9IGFjY291bnRSZXN1bHQuZ2V0KFwibmFtZVwiKTtcbiAgICAgICAgbGV0IGFjY291bnRTdGF0dXMgPSBDaGFpblN0b3JlLmdldEFjY291bnRNZW1iZXJTdGF0dXMoYWNjb3VudFJlc3VsdCk7XG4gICAgICAgIGxldCBhY2NvdW50VHlwZSA9IHRoaXMuZ2V0SW5wdXRUeXBlKGFjY291bnROYW1lKTtcblxuICAgICAgICBsZXQgc3RhdHVzTGFiZWwgPSAhYWNjb3VudFV0aWxzLmlzS25vd25TY2FtbWVyKGFjY291bnROYW1lKVxuICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50Lm1lbWJlci5cIiArIGFjY291bnRTdGF0dXMpXG4gICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQubWVtYmVyLnN1c3BlY3RlZF9zY2FtbWVyXCIpO1xuXG4gICAgICAgIGxldCByaWdodExhYmVsID1cbiAgICAgICAgICAgIGFjY291bnRUeXBlID09PSBcIm5hbWVcIlxuICAgICAgICAgICAgICAgID8gXCIjXCIgKyBhY2NvdW50UmVzdWx0LmdldChcImlkXCIpLnN1YnN0cmluZyg0KVxuICAgICAgICAgICAgICAgIDogYWNjb3VudFR5cGUgPT09IFwiaWRcIlxuICAgICAgICAgICAgICAgICAgICA/IGFjY291bnRSZXN1bHQuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICA6IGFjY291bnRUeXBlID09IFwicHVia2V5XCIgJiYgdGhpcy5wcm9wcy5hbGxvd1B1YktleVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlB1YmxpYyBLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgICAgICAgIGF0dGVtcHRzOiAwLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiBhY2NvdW50UmVzdWx0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIG5hbWU6IGFjY291bnROYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IGFjY291bnRUeXBlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogYWNjb3VudFN0YXR1cyxcbiAgICAgICAgICAgICAgICBpc093bkFjY291bnQ6IG15QWN0aXZlQWNjb3VudHMuaGFzKGFjY291bnROYW1lKSxcbiAgICAgICAgICAgICAgICBpc0NvbnRhY3Q6IGNvbnRhY3RzLmhhcyhhY2NvdW50TmFtZSksXG4gICAgICAgICAgICAgICAgaXNLbm93blNjYW1tZXI6IGFjY291bnRVdGlscy5pc0tub3duU2NhbW1lcihhY2NvdW50TmFtZSksXG4gICAgICAgICAgICAgICAgc3RhdHVzTGFiZWw6IHN0YXR1c0xhYmVsLFxuICAgICAgICAgICAgICAgIHJpZ2h0TGFiZWw6IHJpZ2h0TGFiZWwsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOlxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50VXRpbHMuaXNLbm93blNjYW1tZXIoYWNjb3VudE5hbWUpIHx8ICFhY2NvdW50UmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwibmVnYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY2FuIGJlIHVzZWQgaW4gcGFyZW50IGNvbXBvbmVudDogdGhpcy5yZWZzLmFjY291bnRfc2VsZWN0b3IuZ2V0QWNjb3VudCgpXG4gICAgZ2V0QWNjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYWNjb3VudDtcbiAgICB9XG5cbiAgICBnZXRFcnJvcigpIHtcbiAgICAgICAgbGV0IHthY2NvdW50LCBhY2NvdW50TmFtZSwgZXJyb3IsIHR5cGVhaGVhZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBpbnB1dFR5cGUgPSBhY2NvdW50TmFtZSA/IHRoaXMuZ2V0SW5wdXRUeXBlKGFjY291bnROYW1lKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKCF0eXBlYWhlYWQpIHtcbiAgICAgICAgICAgIGlmICghYWNjb3VudCAmJiBhY2NvdW50TmFtZSAmJiBpbnB1dFR5cGUgIT09IFwicHVia2V5XCIpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuZXJyb3JzLnVua25vd25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUeXBlYWhlYWQgY2FuJ3Qgc2VsZWN0IGFuIHVua25vd24gYWNjb3VudCFcbiAgICAgICAgICAgIC8vIGlmIChcbiAgICAgICAgICAgIC8vICAgICAhKGFsbG93UHViS2V5ICYmIGlucHV0VHlwZSA9PT0gXCJwdWJrZXlcIikgJiZcbiAgICAgICAgICAgIC8vICAgICAhZXJyb3IgJiZcbiAgICAgICAgICAgIC8vICAgICBhY2NvdW50TmFtZSAmJlxuICAgICAgICAgICAgLy8gICAgICFhY2NvdW50XG4gICAgICAgICAgICAvLyApXG4gICAgICAgICAgICAvLyAgICAgZXJyb3IgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LmVycm9ycy51bmtub3duXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvciAmJiBhY2NvdW50ICYmICFpbnB1dFR5cGUpXG4gICAgICAgICAgICBlcnJvciA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnQuZXJyb3JzLmludmFsaWRcIik7XG5cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGdldElucHV0VHlwZSh2YWx1ZSkge1xuICAgICAgICAvLyBPS1xuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKHZhbHVlWzBdID09PSBcIiNcIiAmJiB1dGlscy5pc19vYmplY3RfaWQoXCIxLjIuXCIgKyB2YWx1ZS5zdWJzdHJpbmcoMSkpKVxuICAgICAgICAgICAgcmV0dXJuIFwiaWRcIjtcbiAgICAgICAgaWYgKENoYWluVmFsaWRhdGlvbi5pc19hY2NvdW50X25hbWUodmFsdWUsIHRydWUpKSByZXR1cm4gXCJuYW1lXCI7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFsbG93UHViS2V5ICYmIFB1YmxpY0tleS5mcm9tUHVibGljS2V5U3RyaW5nKHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybiBcInB1YmtleVwiO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRWZXJpZmllZEFjY291bnROYW1lKGUpIHtcbiAgICAgICAgbGV0IHthbGxvd1VwcGVyY2FzZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdmFsdWUgPSBlO1xuICAgICAgICB9IGVsc2UgaWYgKGUgJiYgZS50YXJnZXQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbGxvd1VwcGVyY2FzZSkgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIElmIHJlZ2V4IG1hdGNoZXMgXi4qIy9hY2NvdW50L2FjY291bnQtbmFtZS8uKiQsIHBhcnNlIG91dCBhY2NvdW50LW5hbWVcbiAgICAgICAgbGV0IF92YWx1ZSA9IHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiXCIpLm1hdGNoKC8oPzpcXC9hY2NvdW50XFwvKSguKikvKTtcbiAgICAgICAgaWYgKF92YWx1ZSkgdmFsdWUgPSBfdmFsdWVbMV07XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIF9ub3RpZnlPbkNoYW5nZShzZWxlY3RlZEFjY291bnROYW1lLCBpbnB1dFR5cGUpIHtcbiAgICAgICAgbGV0IHtwcm9wc30gPSB0aGlzO1xuXG4gICAgICAgIC8vIENsZWFyIHNlbGVjdGVkIGFjY291bnQgd2hlbiB3ZSBoYXZlIG5ldyBpbnB1dCBkYXRhIGlmIHdlIHJlcXVpcmUgYW4gYWN0aXZlIHNlbGVjdFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpbnB1dFR5cGUgPT0gXCJpbnB1dFwiICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnR5cGVhaGVhZCAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXF1aXJlQWN0aXZlU2VsZWN0XG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCEhcHJvcHMub25BY2NvdW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQWNjb3VudENoYW5nZWQobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjY291bnROYW1lID0gdGhpcy5nZXRWZXJpZmllZEFjY291bnROYW1lKHNlbGVjdGVkQWNjb3VudE5hbWUpO1xuXG4gICAgICAgIC8vIFN5bmNocm9ub3VzIG9uQ2hhbmdlIGZvciBpbnB1dCBjaGFuZ2VcbiAgICAgICAgaWYgKCEhcHJvcHMub25DaGFuZ2UgJiYgKCEhYWNjb3VudE5hbWUgfHwgYWNjb3VudE5hbWUgPT09IFwiXCIpKSB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShhY2NvdW50TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3luY2hyb25vdXMgb25BY2NvdW50Q2hhbmdlZCBmb3IgY2hlY2tpbmcgb24gY2hhaW5cbiAgICAgICAgaWYgKCEhcHJvcHMub25BY2NvdW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgRmV0Y2hDaGFpbihcImdldEFjY291bnRcIiwgYWNjb3VudE5hbWUsIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICAgIFthY2NvdW50TmFtZV06IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhIWFjY291bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5wcm9wcy5yZXF1aXJlQWN0aXZlU2VsZWN0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlID09IFwic2VsZWN0XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMucmVxdWlyZUFjdGl2ZVNlbGVjdClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkFjY291bnRDaGFuZ2VkKGFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2VsZWN0KHNlbGVjdGVkQWNjb3VudE5hbWUpIHtcbiAgICAgICAgdGhpcy5fbm90aWZ5T25DaGFuZ2Uoc2VsZWN0ZWRBY2NvdW50TmFtZSwgXCJzZWxlY3RcIik7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZWQoZSkge1xuICAgICAgICB0aGlzLl9hZGRUb0luZGV4KHRoaXMuZ2V0VmVyaWZpZWRBY2NvdW50TmFtZShlKSk7XG4gICAgICAgIHRoaXMuX25vdGlmeU9uQ2hhbmdlKGUsIFwiaW5wdXRcIik7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aW9uKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uQWRkQ29udGFjdCgpIHtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMuYWRkQWNjb3VudENvbnRhY3QodGhpcy5wcm9wcy5hY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgX29uUmVtb3ZlQ29udGFjdCgpIHtcbiAgICAgICAgQWNjb3VudEFjdGlvbnMucmVtb3ZlQWNjb3VudENvbnRhY3QodGhpcy5wcm9wcy5hY2NvdW50TmFtZSk7XG4gICAgfVxuXG4gICAgb25BY3Rpb24oZSkge1xuICAgICAgICBsZXQge29uQWN0aW9uLCBkaXNhYmxlQWN0aW9uQnV0dG9uLCBhY2NvdW50LCBhY2NvdW50TmFtZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICghdGhpcy5nZXRFcnJvcigpICYmIG9uQWN0aW9uICYmICFkaXNhYmxlQWN0aW9uQnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudCkgb25BY3Rpb24oYWNjb3VudCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmdldElucHV0VHlwZShhY2NvdW50TmFtZSkgPT09IFwicHVia2V5XCIpXG4gICAgICAgICAgICAgICAgb25BY3Rpb24oYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2FjY291bnRJbmRleH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCB7YWNjb3VudCwgYWNjb3VudE5hbWUsIGRpc2FibGVBY3Rpb25CdXR0b259ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBsZXQgc2VhcmNoSW5Qcm9ncmVzcyA9IHRoaXMuc3RhdGUuYWNjb3VudEluZGV4LmZpbmQoXG4gICAgICAgICAgICBhID0+ICFhLmRhdGEgJiYgYS5hdHRlbXB0cyA8IE1BWF9MT09LVVBfQVRURU1QVFNcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsb2NrZWRTdGF0ZSA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvY2tlZCAhPT0gbnVsbCA/IHRoaXMuc3RhdGUubG9ja2VkIDogdGhpcy5wcm9wcy5sb2NrZWQ7XG5cbiAgICAgICAgbGV0IGVycm9yID0gdGhpcy5nZXRFcnJvcigpLFxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lcixcbiAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudCxcbiAgICAgICAgICAgIGRpc2FibGVkQWN0aW9uLFxuICAgICAgICAgICAgZGlzYWJsZWRJbnB1dCxcbiAgICAgICAgICAgIGVkaXRhYmxlSW5wdXQsXG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzO1xuXG4gICAgICAgIGVkaXRhYmxlSW5wdXQgPSAhIWxvY2tlZFN0YXRlXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuZWRpdGFibGUgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5lZGl0YWJsZVxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGRpc2FibGVkSW5wdXQgPSAhIWxvY2tlZFN0YXRlXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5kaXNhYmxlZCAhPSBudWxsXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gU2VsZWN0ZWQgQWNjb3VudFxuICAgICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICAgICAgbGV0IG9iamVjdEluZGV4ID0gdGhpcy5fZ2V0SW5kZXgoYWNjb3VudC5nZXQoXCJuYW1lXCIpLCBhY2NvdW50SW5kZXgpO1xuXG4gICAgICAgICAgICBzZWxlY3RlZEFjY291bnQgPVxuICAgICAgICAgICAgICAgIGFjY291bnRJbmRleCAmJiBhY2NvdW50SW5kZXhbb2JqZWN0SW5kZXhdXG4gICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEluZGV4W29iamVjdEluZGV4XS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc2FibGVkQWN0aW9uID1cbiAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgYWNjb3VudCB8fFxuICAgICAgICAgICAgICAgIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LnR5cGUgPT09IFwicHVia2V5XCIpXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICBlcnJvciB8fFxuICAgICAgICAgICAgZGlzYWJsZUFjdGlvbkJ1dHRvbjtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRBY2NvdW50ICYmIHNlbGVjdGVkQWNjb3VudC5pc093bkFjY291bnQpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAub3duX2FjY291bnRcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwIGdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwidXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWNjb3VudCAmJiBzZWxlY3RlZEFjY291bnQuaXNLbm93blNjYW1tZXIpIHtcbiAgICAgICAgICAgIGxpbmtlZF9zdGF0dXMgPSAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAuc2NhbV9hY2NvdW50XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcCByZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJ3YXJuaW5nXCIgdGhlbWU9XCJmaWxsZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LmlzQ29udGFjdCkge1xuICAgICAgICAgICAgbGlua2VkX3N0YXR1cyA9IChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5mb2xsb3dfdXNlclwiKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25SZW1vdmVDb250YWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwIGdyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwic3RhclwiIHRoZW1lPVwiZmlsbGVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2NvdW50KSB7XG4gICAgICAgICAgICBsaW5rZWRfc3RhdHVzID0gKFxuICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0b29sdGlwLmZvbGxvd191c2VyX2FkZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25BZGRDb250YWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwic3RhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZWFoZWFkKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uc0NvbnRhaW5lciA9IGFjY291bnRJbmRleFxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYWNjb3VudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpbHRlciBhY2NvdW50cyBiYXNlZCBvblxuICAgICAgICAgICAgICAgICAgICAvLyAtIEV4Y2x1ZGUgd2l0aG91dCByZXN1bHRzIChtaXNzaW5nIGNoYWluIGRhdGEgYXQgdGhlIG1vbWVudClcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBFeGNsdWRlZCBhY2NvdW50cyAoYnkgcHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gSW5jbHVkZSB1c2VycyBvd24gYWNjb3VudHMgKGlzT3duQWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBJbmNsdWRlIHVzZXJzIGNvbnRhY3RzIChpc0NvbnRhY3QpIHVubGVzcyBpdCdzIGEgcHJldmlvdXNseSBsb2NrZWQgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBJbmNsdWRlIGN1cnJlbnQgaW5wdXRcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZXhjbHVkZUFjY291bnRzLmluZGV4T2YoYWNjb3VudC5pZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50LmRhdGEuaXNPd25BY2NvdW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMubG9ja2VkICYmIGFjY291bnQuZGF0YS5pc0NvbnRhY3QpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoYWNjb3VudE5hbWUgJiYgYWNjb3VudC5kYXRhLm5hbWUgPT09IGFjY291bnROYW1lKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5kYXRhLmlzT3duQWNjb3VudCA8IGIuZGF0YS5pc093bkFjY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmRhdGEubmFtZSA+IGIuZGF0YS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhY2NvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthY2NvdW50LmRhdGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnQuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY2NvdW50LmRhdGEuZGlzYWJsZWQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRhdGEuaXNPd25BY2NvdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwidXNlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5pc0NvbnRhY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnRJY29uIHR5cGU9XCJzdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLmlzS25vd25TY2FtbWVyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW50SWNvbiB0eXBlPVwid2FybmluZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kYXRhLnN0YXR1c0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lciA9IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uTGFiZWxQcm9wPXtcInZhbHVlXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLm9uSW5wdXRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50LnNlYXJjaFwiKX1cbiAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJnbG9iYWwubm90X2ZvdW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRBY2NvdW50ID8gc2VsZWN0ZWRBY2NvdW50Lm5hbWUgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWRJbnB1dCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc0NvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyID0gKFxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQgJiYgc2VsZWN0ZWRBY2NvdW50LnR5cGUgPT09IFwicHVia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsb3dlcmNhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBcImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5lZGl0YWJsZSA/IFwidXNlcm5hbWVcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYWNjb3VudE5hbWUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5uYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICByZWY9XCJ1c2VyX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17XG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5lZGl0YWJsZSB8fCAhIXRoaXMucHJvcHMuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLnRhYkluZGV4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgISFlZGl0YWJsZUlucHV0ID8gZWRpdGFibGVJbnB1dC50b1N0cmluZygpIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e1xuICAgICAgICAgICAgICAgICAgICAgICAgISFlZGl0YWJsZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoIWVkaXRhYmxlSW5wdXQpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWNjb3VudEltYWdlQ29udGFpbmVyID0gdGhpcy5wcm9wc1xuICAgICAgICAgICAgLmhpZGVJbWFnZSA/IG51bGwgOiBzZWxlY3RlZEFjY291bnQgJiZcbiAgICAgICAgc2VsZWN0ZWRBY2NvdW50LmFjY291bnRUeXBlID09PSBcInB1YmtleVwiID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImtleVwiIHRpdGxlPVwiaWNvbnMua2V5XCIgc2l6ZT1cIjR4XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPEFjY291bnRJbWFnZVxuICAgICAgICAgICAgICAgIHNpemU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnNpemUgfHwgMzMsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnNpemUgfHwgMzNcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFjY291bnQ9e3NlbGVjdGVkQWNjb3VudCA/IHNlbGVjdGVkQWNjb3VudC5uYW1lIDogbnVsbH1cbiAgICAgICAgICAgICAgICBjdXN0b21faW1hZ2U9e251bGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBsb2NrZWRTdGF0ZUNvbnRhaW5lciA9ICFsb2NrZWRTdGF0ZSA/IG51bGwgOiBcIlwiO1xuXG4gICAgICAgIGxldCByaWdodExhYmVsQ29udGFpbmVyID1cbiAgICAgICAgICAgICF0aGlzLnByb3BzLmxhYmVsIHx8ICFzZWxlY3RlZEFjY291bnQgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyLWFyZWFcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5oaWRlSW1hZ2UgPyBcIiBuby1tYXJnaW5cIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQWNjb3VudC5pc0NvbnRhY3QgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQuaXNPd25BY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJwb3NpdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFjY291bnQuaXNLbm93blNjYW1tZXIgPyBcIm5lZ2F0aXZlXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IC0zMH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiBcIjAuNXJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQWNjb3VudC5yaWdodExhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEFjY291bnQuZGlzcGxheVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlua2VkX3N0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgRm9ybVdyYXBwZXIgPSB0aGlzLnByb3BzLm5vRm9ybSA/IFJlYWN0LkZyYWdtZW50IDogRm9ybTtcbiAgICAgICAgY29uc3QgZm9ybVdyYXBwZXJQcm9wcyA9IHRoaXMucHJvcHMubm9Gb3JtXG4gICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmdWxsLXdpZHRoXCIsXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtYXJlYVwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudG9vbHRpcH1cbiAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuNX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9ybVdyYXBwZXIgey4uLmZvcm1XcmFwcGVyUHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aGlzLnByb3BzLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtlcnJvciA/IFwiZXJyb3JcIiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPXtlcnJvciA/IGVycm9yIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JpZ2h0TGFiZWxDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VIUiAmJiA8aHIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1sYWJlbCBpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnRJbWFnZUNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybUNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoSW5Qcm9ncmVzcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFudEljb24gdHlwZT1cImxvYWRpbmdcIiBzdHlsZT17e3BhZGRpbmc6IDEwfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9ja2VkU3RhdGVDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMub25BY3Rpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5yZXF1aXJlZF9pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnbG9iYWwuZmllbGRfdHlwZS5hY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BY3Rpb24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMuYWN0aW9uX2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvRm9ybVdyYXBwZXI+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BY2NvdW50U2VsZWN0b3JMaXN0aW5nID0gQmluZFRvQ2hhaW5TdGF0ZShBY2NvdW50U2VsZWN0b3JMaXN0aW5nKTtcblxuQWNjb3VudFNlbGVjdG9yTGlzdGluZyA9IGNvbm5lY3QoXG4gICAgQWNjb3VudFNlbGVjdG9yTGlzdGluZyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbXlBY3RpdmVBY2NvdW50czogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkubXlBY3RpdmVBY2NvdW50cyxcbiAgICAgICAgICAgICAgICBjb250YWN0czogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuYWNjb3VudENvbnRhY3RzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudFNlbGVjdG9yTGlzdGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtEb251dENoYXJ0fSBmcm9tIFwiLi9Eb251dENoYXJ0XCI7XG5pbXBvcnQgU2VuZE1vZGFsIGZyb20gXCIuL0RvbmF0ZVNlbmRNb2RhbFwiO1xuaW1wb3J0IHtJY29ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5cbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudFN0b3JlXCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5cbmNsYXNzIENvaW5DYXJkTGlzdGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuY29pbi52b3RlcyA9IDA7XG4gICAgfVxuXG4gICAgdHJpZ2dlclNlbmQoYXNzZXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZF9hc3NldDogYXNzZXR9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZW5kX21vZGFsKSB0aGlzLnNlbmRfbW9kYWwuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmcm9tX25hbWUgPSBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY2NvdW50LmdldChcIm5hbWVcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgbGV0IHtjb2lufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19yb3dcIj5cbiAgICAgICAgICAgICAgICA8U2VuZE1vZGFsXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tb2RhbF9saXN0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuc2VuZF9tb2RhbCA9IGU7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGZyb21fbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0b19uYW1lPXtjb2luLmFjY291bnQgPyBjb2luLmFjY291bnQgOiBmcm9tX25hbWV9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkPXtcIjEuMy4yXCJ9XG4gICAgICAgICAgICAgICAgICAgIHRpY2tlcj17Y29pbi50aWNrZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldENhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZVJhbmsgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmFua31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlTG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXhXaWR0aDogNDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31jb2lucy1sb2dvLyR7Y29pbi50aWNrZXIudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVBc3NldE5hbWUgYWxpZ24tbGVmdCBub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5uYW1lfSAoe2NvaW4udGlja2VyfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5zb29uID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwibGlzdGluZy50YWJsZS5jb21pbmdfc29vblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCIsIGNvbG9yOiBcImdvbGRcIn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9EYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlR29hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9CbG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5nb2FsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDt7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5nb2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4ubGlzdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlVm90ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0Jsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5kb25hdGVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2luLnZvdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvaW4uc29vbiA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjb2luLXNvb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaWNvbnMudHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tMTRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyBEb25hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudHJpZ2dlclNlbmQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEuMy4yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJpY29ucy50cmFuc2ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi0xNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IERvbmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nQXNzZXRJbmZvQmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuc3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDt7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcImxpc3RpbmcudGFibGUuXCIgKyBjb2luLnN0YXR1c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5saXN0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9udXRDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGVzPXtjb2luLnZvdGVzX2Zvcl9wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWw9e2NvaW4uZ29hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Db2luQ2FyZExpc3RpbmcgPSBjb25uZWN0KFxuICAgIENvaW5DYXJkTGlzdGluZyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlLCBBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS5zZXR0aW5ncyxcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDpcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29pbkNhcmRMaXN0aW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtTZW5kTW9kYWx9IGZyb20gXCIuLi9Nb2RhbC9TZW5kTW9kYWxcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcIi4uLy4uL3N0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclN0eWxlR3VpZGVcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0b3JMaXN0aW5nIGZyb20gXCIuL0FjY291bnRTZWxlY3Rvckxpc3RpbmdcIjtcbmltcG9ydCBGZWVBc3NldFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0ZlZUFzc2V0U2VsZWN0b3JcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7aXNOYU59IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7Rm9ybSwgTW9kYWwsIEJ1dHRvbiwgVG9vbHRpcCwgSW5wdXR9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBCYWxhbmNlQ29tcG9uZW50IGZyb20gXCIuLi9VdGlsaXR5L0JhbGFuY2VDb21wb25lbnRcIjtcbmltcG9ydCB7Z2V0V2FsbGV0TmFtZX0gZnJvbSBcIi4uLy4uL2JyYW5kaW5nXCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5cbmNsYXNzIERvbmF0ZVNlbmRNb2RhbCBleHRlbmRzIFNlbmRNb2RhbCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG4gICAgICAgIGlmIChucC50b19uYW1lICE9PSB0aGlzLnN0YXRlLnRvX25hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRvX25hbWU6IG5wLnRvX25hbWUgPyBucC50b19uYW1lIDogXCJcIixcbiAgICAgICAgICAgICAgICB0b19hY2NvdW50OiBucC50b19uYW1lXG4gICAgICAgICAgICAgICAgICAgID8gQ2hhaW5TdG9yZS5nZXRBY2NvdW50KG5wLnRvX25hbWUpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBwcm9wb3NlLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgYXNzZXRfaWQsXG4gICAgICAgICAgICBwcm9wb3NlX2FjY291bnQsXG4gICAgICAgICAgICBmZWVBbW91bnQsXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICB0b19uYW1lLFxuICAgICAgICAgICAgZnJvbV9uYW1lLFxuICAgICAgICAgICAgbWVtbyxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvcixcbiAgICAgICAgICAgIGhpZGRlblxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IGZyb21fbXlfYWNjb3VudCA9XG4gICAgICAgICAgICBBY2NvdW50U3RvcmUuaXNNeUFjY291bnQoZnJvbV9hY2NvdW50KSB8fFxuICAgICAgICAgICAgZnJvbV9uYW1lID09PSB0aGlzLnByb3BzLnBhc3N3b3JkQWNjb3VudDtcbiAgICAgICAgbGV0IGZyb21fZXJyb3IgPVxuICAgICAgICAgICAgZnJvbV9hY2NvdW50ICYmICFmcm9tX215X2FjY291bnQgJiYgIXByb3Bvc2UgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgbGV0IHthc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoKTtcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBudWxsO1xuXG4gICAgICAgIGlmIChmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpICYmICFmcm9tX2Vycm9yKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgICAgICBsZXQgX2Vycm9yID0gdGhpcy5zdGF0ZS5iYWxhbmNlRXJyb3IgPyBcImhhcy1lcnJvclwiIDogXCJcIjtcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFzc2V0X3R5cGVzWzBdKTtcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSBhc3NldCA/IGFzc2V0LmdldChcImlkXCIpIDogYXNzZXRfdHlwZXNbMF07XG5cbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e19lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFRvdGFsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfYXNzZXRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUFtb3VudC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlQW1vdW50LmFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17X2Vycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5lcnJvcnMubm9GdW5kc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb3Bvc2VfaW5jb21wbGV0ZSA9IHByb3Bvc2UgJiYgIXByb3Bvc2VfYWNjb3VudDtcbiAgICAgICAgY29uc3QgYW1vdW50VmFsdWUgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLmNhbGwoYW1vdW50LCAvLC9nLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBpc0Ftb3VudFZhbGlkID0gYW1vdW50VmFsdWUgJiYgIWlzTmFOKGFtb3VudFZhbHVlKTtcbiAgICAgICAgY29uc3QgaXNTdWJtaXROb3RWYWxpZCA9XG4gICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XG4gICAgICAgICAgICAhdG9fYWNjb3VudCB8fFxuICAgICAgICAgICAgIWlzQW1vdW50VmFsaWQgfHxcbiAgICAgICAgICAgICFhc3NldCB8fFxuICAgICAgICAgICAgZnJvbV9lcnJvciB8fFxuICAgICAgICAgICAgcHJvcG9zZV9pbmNvbXBsZXRlIHx8XG4gICAgICAgICAgICBiYWxhbmNlRXJyb3IgfHxcbiAgICAgICAgICAgIGZyb21fYWNjb3VudC5nZXQoXCJpZFwiKSA9PSB0b19hY2NvdW50LmdldChcImlkXCIpO1xuXG4gICAgICAgIGxldCB0YWJJbmRleCA9IHRoaXMucHJvcHMudGFiSW5kZXg7IC8vIENvbnRpbnVlIHRhYkluZGV4IG9uIHByb3BzIGNvdW50XG5cbiAgICAgICAgcmV0dXJuICF0aGlzLnN0YXRlLm9wZW4gPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tb2RhbF93cmFwcGVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2hpZGRlbiB8fCAhdGhpcy5zdGF0ZS5vcGVuID8gXCJoaWRlXCIgOiBcIlwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzTW9kYWxWaXNpYmxlfVxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdE5vdFZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNTdWJtaXROb3RWYWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByb3Bvc2VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJ0cmFuc2Zlci5zZW5kXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5jYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbCBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogXCIxOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFpc1N1Ym1pdE5vdFZhbGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImxpc3RpbmcubW9kYWxfaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibGlzdGluZy5tb2RhbC5uZWVkX2J1eV9kb25hdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XCJsaXN0aW5nLm1vZGFsLmhlYWRlcjJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0X25hbWU9e2dldFdhbGxldE5hbWUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpY2tlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUub3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmdWxsLXdpZHRoLXdyYXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yTGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2Zyb21fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZnJvbUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uRnJvbUFjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Gb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbkFjdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JMaXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci50b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RvX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dG9fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uVG9BY2NvdW50Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWRpdGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbW91bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRfdHlwZXMubGVuZ3RoID4gMCAmJiBhc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X3R5cGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Fzc2V0cz17YXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmFOPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ja2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmVlQXNzZXRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17ZnJvbV9hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRyYW5zZmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxEb25hdGVTZW5kTW9kYWwgey4uLnRoaXMucHJvcHN9IHJlZj17dGhpcy5wcm9wcy5yZWZDYWxsYmFja30gLz47XG4gICAgfVxufVxuXG5Eb25hdGVTZW5kTW9kYWxDb25uZWN0V3JhcHBlciA9IGNvbm5lY3QoRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXIsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgIH0sXG4gICAgZ2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgIHBhc3N3b3JkQWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkucGFzc3dvcmRBY2NvdW50LFxuICAgICAgICAgICAgdGFiSW5kZXg6IHByb3BzLnRhYkluZGV4IHx8IDBcbiAgICAgICAgfTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRG9uYXRlU2VuZE1vZGFsQ29ubmVjdFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL0RvbnV0Q2hhcnQuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBEb251dENoYXJ0ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKChwcm9wcy52b3RlcyAvIHByb3BzLmdvYWwpICogMTAwKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbnV0LWhvbGVcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9udXQtcmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJsaWdodGdyYXlcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjhcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb251dC1zZWdtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tzdHJva2VEYXNoYXJyYXk6IGAke3BlcmNlbnR9IDEwMGB9fVxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0PVwiMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmNlbnRcIj57cGVyY2VudCArIFwiJVwifTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9MaXN0aW5nUGFnZS5jc3NcIjtcblxuaW1wb3J0IHtBcGlzfSBmcm9tIFwiYml0c2hhcmVzanMtd3NcIjtcbmltcG9ydCB7RmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmltcG9ydCBDb2luQ2FyZExpc3RpbmcgZnJvbSBcIi4vQ29pbkNhcmRMaXN0aW5nXCI7XG5pbXBvcnQge2dldExpc3RpbmdDb2lucywgZ2V0TGlzdGVkQ29pbnN9IGZyb20gXCIuLi8uLi9icmFuZGluZ1wiO1xuaW1wb3J0IHtUYWJzLCBUYWJ9IGZyb20gXCIuLi9VdGlsaXR5L1RhYnNcIjtcbmltcG9ydCBBc3NldEltYWdlIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0SW1hZ2VcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcblxuY2xhc3MgTGlzdGluZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgTGlzdGluZ05vdGljZTFJbmZvcm1lZDogZmFsc2UsXG4gICAgICAgICAgICBjb2luczogW10sXG4gICAgICAgICAgICB1cGRhdGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uU3VibWl0UmVxdWVzdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG51bGx9KTtcblxuICAgICAgICBsZXQgbGlua19ydSA9XG4gICAgICAgICAgICBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvMWxKbnZ1ZmM5NUNEaDJ6MU50cTdpQ1NFczNvRDd0UEc0bmxqS1RZWWV6UXdcIjtcbiAgICAgICAgbGV0IGxpbmtfZW4gPVxuICAgICAgICAgICAgXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kLzFYMlBndUFhUnp4bFhaR0xBYXJHY21OZC1MYkpDeThsY29NQmNRakZTUTVrXCI7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRfbG9jYWxlID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKTtcblxuICAgICAgICB3aW5kb3cub3BlbihjdXJyZW50X2xvY2FsZSA9PSBcInJ1XCIgPyBsaW5rX3J1IDogbGlua19lbiwgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgb25MaXN0aW5nTm90aWNlMUluZm9ybWVkKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIExpc3RpbmdOb3RpY2UxSW5mb3JtZWQ6ICF0aGlzLnN0YXRlLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHRoaXMuX2dldEJhbGFuY2VzKCksIDEwMDApO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBpZiAobmV4dFN0YXRlLnVwZGF0aW5nID09IGZhbHNlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRfbG9jYWxlID0gU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnNldHRpbmdzLmdldChcImxvY2FsZVwiKTtcblxuICAgICAgICBsZXQgYWdyZWVtZW50X3J1ID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tL3N1cHBvcnQvc29sdXRpb25zL2FydGljbGVzLzM1MDAwMTM4MjQ3LWPQvtCz0LvQsNGI0LXQvdC40LUt0L7QsS3QvtC60LDQt9Cw0L3QuNC4LdGD0YHQu9GD0LMt0YjQu9GO0LfQsFwiO1xuICAgICAgICBsZXQgYWdyZWVtZW50X2VuID1cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ydWRleC5mcmVzaGRlc2suY29tL3N1cHBvcnQvc29sdXRpb25zL2FydGljbGVzLzM1MDAwMTM4MjQ1LWdhdGV3YXktc2VydmljZS1hZ3JlZW1lbnRcIjtcblxuICAgICAgICBsZXQgUnVERVggPSA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6IFwiYm9sZFwifX0+UnVERVg8L3NwYW4+O1xuICAgICAgICBsZXQgRE9OQVRFID0gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDVcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRvPXtcIi9hc3NldC9ET05BVEVcIn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIHsvKlRhYnMqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgc21hbGwtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1jb250YWluZXIgZ2VuZXJpYy1ib3JkZXJlZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlVGFiPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nPVwicGVybWlzc2lvbnNUYWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzQ2xhc3M9XCJhY2NvdW50LW92ZXJ2aWV3IGJvcmRlcmVkLWhlYWRlciBjb250ZW50LWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudENsYXNzPVwicGFkZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRE9OQVRFIFBST0dSRVNTKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJsaXN0aW5nLmRvbmF0ZV9wcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhvcml6b250YWxcIiB0YWJJbmRleD17MH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIycmVtIDhweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNtYWxsLXVwLTEgbWVkaXVtLXVwLTEgbGFyZ2UtdXAtMSBuby1vdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudXBkYXRpbmcgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiMTBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcubG9hZGluZ1wiIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbnRlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMSVNURUQqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiB0aXRsZT1cImxpc3RpbmcubGlzdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaG9yaXpvbnRhbFwiIHRhYkluZGV4PXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nOiBcIjJyZW0gOHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTogMjB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc21hbGwtdXAtMSBtZWRpdW0tdXAtMSBsYXJnZS11cC0xIG5vLW92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS51cGRhdGluZyA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogXCIxMHB4XCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy5sb2FkaW5nXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29udGVudF9saXN0ZWQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgdGl0bGU9XCJsaXN0aW5nLmFkZF9jb2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250YWluZXIgaGVscC1jb250ZW50LWxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9ja1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMuaGVhZGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0My50MVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQzLnQyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9tYXJrZXQvRE9OQVRFX1JVREVYLlVTRFRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQzLmdldFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnRleHQ0LnQxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvYXNzZXQvRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NC50MlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1wiL2Fzc2V0L0RPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET05BVEVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDQudDNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjFweCBzb2xpZCAjMDBhOWUwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjRweCAzcHggM3B4IDRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTkFURVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NC50NFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDUudDFcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS4wcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e1wiL2Fzc2V0L0RPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoPXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZU5vbmVUb0J0cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiRE9OQVRFXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET05BVEVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy50ZXh0NS50MlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMudGV4dDUudDNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5oZWFkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfbG9jYWxlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJ1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFncmVlbWVudF9ydVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWdyZWVtZW50X2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV8xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzExXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRleHRzLnJ1bGVzLnJ1bGVfM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtcIi9hc3NldC9ET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlTm9uZVRvQnRzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJET05BVEVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGV4dHMucnVsZXMucnVsZV80XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5ydWxlcy5ydWxlXzVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkxpc3RpbmdOb3RpY2UxSW5mb3JtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTGlzdGluZ05vdGljZTFJbmZvcm1lZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLm5vdGljZV9pbmZvcm1lZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImxpc3RpbmdfYnV0dG9uXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wic2VuZFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5MaXN0aW5nTm90aWNlMUluZm9ybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5MaXN0aW5nTm90aWNlMUluZm9ybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5vblN1Ym1pdFJlcXVlc3QuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3Rpbmcuc3VibWl0X3JlcXVlc3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50ZXh0cy5lbmRcIiAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1J1REVYfSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9nZXRCYWxhbmNlcygpIHtcbiAgICAgICAgbGV0IGNvaW5zID0gZ2V0TGlzdGluZ0NvaW5zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29pbnMubGVuZ3RoICE9PSAwKSBjb2lucyA9IHRoaXMuc3RhdGUuY29pbnM7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2luczogY29pbnMsXG4gICAgICAgICAgICB1cGRhdGluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29pbnMuZm9yRWFjaChjb2luID0+IHtcbiAgICAgICAgICAgIEZldGNoQ2hhaW4oXCJnZXRBc3NldFwiLCBcIkRPTkFURVwiKS50aGVuKGFzc2V0SW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgQXBpcy5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5kYl9hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9uYW1lZF9hY2NvdW50X2JhbGFuY2VzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvaW4uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFthc3NldEluZm8uZ2V0KFwiaWRcIildXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29pbnMgPSB0aGlzLnN0YXRlLmNvaW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBjb2lucy5maW5kKGkgPT4gaS5hY2NvdW50ID09PSBjb2luLmFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeC52b3RlcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzWzBdW1wiYW1vdW50XCJdIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgYXNzZXRJbmZvLmdldChcInByZWNpc2lvblwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luczogY29pbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAyLCBmb250U2l6ZTogXCIxLjByZW1cIn19XG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17XCIvbWFya2V0L0RPTkFURV9SVURFWC5VU0RUXCJ9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcuZ2V0X2RvbmF0ZV90b2tlbnNcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbjogMiwgZm9udFNpemU6IFwiMS4wcmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VOb25lVG9CdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRPTkFURVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9OQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRva2VuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucmFua1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlQXNzZXROYW1lIGFsaWduLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmFzc2V0X25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0RhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmdvYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUdvYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5kb25hdGVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVTdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibGlzdGluZy50YWJsZS5zdGF0dXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVQcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucHJvZ3Jlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLmdldENvaW5zTGlzdCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGdldENvbnRlbnRfbGlzdGVkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0Q2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlUmFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUucmFua1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1RhYmxlX19jZWxsIGxpc3RpbmdUYWJsZUxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlQXNzZXROYW1lIGFsaWduLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmFzc2V0X25hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdBc3NldEluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ0Fzc2V0SW5mb0RhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdUYWJsZV9fY2VsbCBsaXN0aW5nVGFibGVWb3Rlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJsaXN0aW5nLnRhYmxlLmdvYWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nVGFibGVfX2NlbGwgbGlzdGluZ1RhYmxlU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImxpc3RpbmcudGFibGUuc3RhdHVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRDb2luc0xpc3RfbGlzdGVkKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgZ2V0Q29pbnNMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsZXQge2NvaW5zfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBzb3J0ZWRDb2lucyA9IGNvaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiLnZvdGVzIC0gYS52b3RlcztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzb3J0ZWRDb2lucy5tYXAoKGNvaW4sIGkpID0+IHtcbiAgICAgICAgICAgIGNvaW4udm90ZXNfZm9yX3BlcmNlbnQgPVxuICAgICAgICAgICAgICAgIGNvaW4udm90ZXMgPCBjb2luLmdvYWwgPyBjb2luLnZvdGVzIDogY29pbi5nb2FsO1xuICAgICAgICAgICAgY29pbi5zdGF0dXMgPSBjb2luLnZvdGVzIDwgY29pbi5nb2FsID8gXCJjb2xsZWN0aW5nXCIgOiBcImRvbmVcIjtcbiAgICAgICAgICAgIGNvaW4uc29vbiA9PSB0cnVlID8gKGNvaW4uc3RhdHVzID0gXCJ3YWl0aW5nXCIpIDogY29pbi5zb29uO1xuXG4gICAgICAgICAgICByZXR1cm4gPENvaW5DYXJkTGlzdGluZyBrZXk9e2l9IHJhbms9e2kgKyAxfSBjb2luPXtjb2lufSAvPjtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGdldENvaW5zTGlzdF9saXN0ZWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb2lucyA9IGdldExpc3RlZENvaW5zKCk7XG4gICAgICAgIGxldCBzb3J0ZWRDb2lucyA9IGNvaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiLnZvdGVzIC0gYS52b3RlcztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzb3J0ZWRDb2lucy5tYXAoKGNvaW4sIGkpID0+IHtcbiAgICAgICAgICAgIGNvaW4udm90ZXNfZm9yX3BlcmNlbnQgPVxuICAgICAgICAgICAgICAgIGNvaW4udm90ZXMgPCBjb2luLmdvYWwgPyBjb2luLnZvdGVzIDogY29pbi5nb2FsO1xuICAgICAgICAgICAgY29pbi5zdGF0dXMgPSBcImRvbmVcIjtcbiAgICAgICAgICAgIGNvaW4ubGlzdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIDxDb2luQ2FyZExpc3Rpbmcga2V5PXtpfSByYW5rPXtpICsgMX0gY29pbj17Y29pbn0gLz47XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFzc2V0V3JhcHBlciBmcm9tIFwiLi4vQm90cy9saWJzL0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jbGFzcyBBc3NldEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbWF4V2lkdGg6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogdHJ1ZSxcbiAgICAgICAgbWF4V2lkdGg6IDIwXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW1nRXJyb3I6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldCAhPT0gbnAuYXNzZXQgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4V2lkdGggIT09IG5wLm1heFdpZHRoIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLndoaXRlTGlzdCAhPT0gbnAud2hpdGVMaXN0IHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmltZ0Vycm9yICE9PSBucy5pbWdFcnJvclxuICAgICAgICApO1xuICAgIH1cblxuICAgIF9vbkVycm9yKGltZ05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5yZXBsYWNlTm9uZVRvQnRzKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnNyYyA9XG4gICAgICAgICAgICAgICAgICAgIFwiYXNzZXQtc3ltYm9scy91bmtub3duLnBuZ1wiO1xuICAgICAgICAgICAgZWxzZSB0aGlzLnJlZnNbaW1nTmFtZS50b0xvd2VyQ2FzZSgpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGltZ0Vycm9yOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHthc3NldH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEltYWdlTmFtZShhc3NldCkge1xuICAgICAgICAgICAgaWYgKGFzc2V0ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBhc3NldC5nZXQoXCJzeW1ib2xcIik7XG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1nTmFtZSA9IGdldEltYWdlTmFtZShhc3NldCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0zcHhcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Bc3NldEltYWdlID0gQXNzZXRXcmFwcGVyKEFzc2V0SW1hZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldEltYWdlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPEFzc2V0SW1hZ2Ugey4uLnRoaXMucHJvcHN9IGFzc2V0PXt0aGlzLnByb3BzLm5hbWV9IC8+O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG4vKipcbiAqICBSZW5kZXJzIGEgdGFiIGxheW91dCwgaGFuZGxpbmcgc3dpdGNoaW5nIGFuZCBvcHRpb25hbGx5IHBlcnNpc3RzIHRoZSBjdXJyZW50bHkgb3BlbiB0YWIgdXNpbmcgdGhlIFNldHRpbmdzU3RvcmVcbiAqXG4gKiAgcHJvcHM6XG4gKiAgICAgc2V0dGluZzogdW5pcXVlIG5hbWUgdG8gYmUgdXNlZCB0byByZW1lbWJlciB0aGUgYWN0aXZlIHRhYiBvZiB0aGlzIHRhYnMgbGF5b3V0LFxuICogICAgIHRhYnNDbGFzczogb3B0aW9uYWwgY2xhc3NlcyBmb3IgdGhlIHRhYnMgY29udGFpbmVyIGRpdlxuICogICAgIGNvbnRlbnRDbGFzczogb3B0aW9uYWwgY2xhc3NlcyBmb3IgdGhlIGNvbnRlbnQgY29udGFpbmVyIGRpdlxuICpcbiAqICBVc2FnZTpcbiAqXG4gKiAgPFRhYnMgc2V0dGluZz1cIm15U2V0dGluZ1wiPlxuICogICAgICA8VGFiIHRpdGxlPVwibG9jYWxlLnN0cmluZy50aXRsZTFcIj5UYWIgMSBjb250ZW50PC9UYWI+XG4gKiAgICAgIDxUYWIgdGl0bGU9XCJsb2NhbGUuc3RyaW5nLnRpdGxlMlwiPlRhYiAyIGNvbnRlbnQ8L1RhYj5cbiAqICA8L1RhYnM+XG4gKlxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hhbmdlVGFiOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaXNMaW5rVG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN1YlRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKVxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgICAgIGlzTGlua1RvOiBcIlwiLFxuICAgICAgICBzdWJUZXh0OiBudWxsXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBjaGFuZ2VUYWIsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIHVwZGF0ZWRUYWIsXG4gICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgIHN1YlRleHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBjID0gY25hbWVzKHtcImlzLWFjdGl2ZVwiOiBpc0FjdGl2ZX0sIGNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIiAmJiB0aXRsZS5pbmRleE9mKFwiLlwiKSA+IDApIHtcbiAgICAgICAgICAgIHRpdGxlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKHRpdGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvbnQgc3RyaW5nIGNvbmNldGVuYXRlIHN1YlRleHQgZGlyZWN0bHkgd2l0aGluIHRoZSByZW5kZXJpbmcsIHN1YlRleHQgY2FuIGJlIGFuIG9iamVjdCB3aXRob3V0IHRvU3RyaW5nXG4gICAgICAgIC8vIGltcGxlbWVudGF0aW9uLCBidXQgdmFsaWQgRE9NIChtZWFuaW5nLCBkb24ndCBkbyBzdWJUZXh0ICsgXCJzb21lU3RyaW5nXCJcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIC8vIGlmIHN1YlRleHQgaXMgZW1wdHksIGRvbnQgcmVuZGVyIGl0LCB3ZSBkb250IHdhbnQgZW1wdHkgYnJhY2tldHMgYWRkZWRcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3ViVGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHN1YlRleHQgPSBzdWJUZXh0LnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aXRsZS50eXBlID09PSBcInNwYW5cIikge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gdGl0bGUucHJvcHMuY2hpbGRyZW5bMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4fSBkYXRhLWlzLWxpbmstdG89e3RoaXMucHJvcHMuaXNMaW5rVG99PlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHt1cGRhdGVkVGFiID8gXCIqXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiBcIiAoXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIHN1YlRleHR9XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIFwiKVwifVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAhZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hhbmdlVGFiLmJpbmQodGhpcywgaW5kZXgsIHRoaXMucHJvcHMuaXNMaW5rVG8pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhYi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAge3VwZGF0ZWRUYWIgPyBcIipcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgPGRpdiBjbGFzc05hbWU9XCJ0YWItc3VidGV4dFwiPntzdWJUZXh0fTwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgVGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2V0dGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgc2VnbWVudGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBhY3RpdmU6IDAsXG4gICAgICAgIGRlZmF1bHRBY3RpdmVUYWI6IDAsXG4gICAgICAgIHNlZ21lbnRlZDogdHJ1ZSxcbiAgICAgICAgY29udGVudENsYXNzOiBcIlwiLFxuICAgICAgICBzdHlsZToge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogcHJvcHMuc2V0dGluZ1xuICAgICAgICAgICAgICAgID8gcHJvcHMudmlld1NldHRpbmdzLmdldChwcm9wcy5zZXR0aW5nLCBwcm9wcy5kZWZhdWx0QWN0aXZlVGFiKVxuICAgICAgICAgICAgICAgIDogcHJvcHMuZGVmYXVsdEFjdGl2ZVRhYixcbiAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMgPSB0aGlzLl9zZXREaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgbmV4dFNldHRpbmcgPSBuZXh0UHJvcHMudmlld1NldHRpbmdzLmdldChuZXh0UHJvcHMuc2V0dGluZyk7XG4gICAgICAgIGlmIChuZXh0U2V0dGluZyAhPT0gdGhpcy5wcm9wcy52aWV3U2V0dGluZ3MuZ2V0KHRoaXMucHJvcHMuc2V0dGluZykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYjogbmV4dFNldHRpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMpO1xuICAgIH1cblxuICAgIF9zZXREaW1lbnNpb25zKCkge1xuICAgICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAod2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRofSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2hhbmdlVGFiKHZhbHVlLCBpc0xpbmtUbykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiKSByZXR1cm47XG4gICAgICAgIC8vIFBlcnNpc3QgY3VycmVudCB0YWIgaWYgZGVzaXJlZFxuXG4gICAgICAgIGlmIChpc0xpbmtUbyAhPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goaXNMaW5rVG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2V0dGluZykge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5zZXR0aW5nXTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogdmFsdWV9KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZVRhYikgdGhpcy5wcm9wcy5vbkNoYW5nZVRhYih2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NoaWxkcmVuLCBjb250ZW50Q2xhc3MsIHRhYnNDbGFzcywgc3R5bGUsIHNlZ21lbnRlZH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjb2xsYXBzZVRhYnMgPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aWR0aCA8IDkwMCAmJiBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAyO1xuXG4gICAgICAgIGxldCBhY3RpdmVDb250ZW50ID0gbnVsbDtcblxuICAgICAgICBsZXQgdGFicyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbGxhcHNlVGFicyAmJiBjaGlsZC5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVUYWI7XG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb250ZW50ID0gY2hpbGQucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGNvbGxhcHNlVGFicyxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICBjaGFuZ2VUYWI6IHRoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmZpbHRlcihhID0+IGEgIT09IG51bGwpO1xuXG4gICAgICAgIGlmICghYWN0aXZlQ29udGVudCkge1xuICAgICAgICAgICAgYWN0aXZlQ29udGVudCA9IHRhYnNbMF0ucHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuYWN0aW9uQnV0dG9ucyA/IFwid2l0aC1idXR0b25zXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJidXR0b24tZ3JvdXAgbm8tbWFyZ2luXCIsIHRhYnNDbGFzcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsYXBzZVRhYnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMTVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWN0aXZlVGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0cy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmQgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZVRhYihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldFtpbmRdLmF0dHJpYnV0ZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtaXMtbGluay10b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJzLWFjdGlvbi1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbmFtZXMoXCJ0YWItY29udGVudFwiLCBjb250ZW50Q2xhc3MpfT5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRhYnMgPSBjb25uZWN0KFRhYnMsIHtcbiAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICB9LFxuICAgIGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge3ZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc307XG4gICAgfVxufSk7XG5cblRhYnMgPSB3aXRoUm91dGVyKFRhYnMpO1xuXG5leHBvcnQge1RhYnMsIFRhYn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=