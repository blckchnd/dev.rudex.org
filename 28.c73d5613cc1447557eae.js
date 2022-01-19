"use strict";
(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[28],{

/***/ 2718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(653);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1926);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2305);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1927);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(630);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(633);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(548);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(607);
/* harmony import */ var _View_BorrowModalView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2719);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2074);
















/**
 *  Given an account and an asset id, render a modal allowing modification of a margin position for that asset
 *
 *  Expected Properties:
 *     quoteAssetObj:  asset id, must be a bitasset
 *     accountObj: full_account object for the account to use
 *
 */

class BorrowModalContent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    quoteAssetObj: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    backingAssetObj: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    debtBalanceObj: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject,
    collateralBalanceObj: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject,
    call_orders: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObjectsList,
    hasCallOrders: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool)
  };

  constructor(props) {
    super(props);
    this.state = this._initialState(props);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _initialState(props) {
    let currentPosition = props ? this._getCurrentPosition(props) : {};

    if (currentPosition.collateral) {
      let debt = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(currentPosition.debt, props.quoteAssetObj);
      let collateral = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(currentPosition.collateral, props.backingAssetObj);
      let target_collateral_ratio = !isNaN(currentPosition.target_collateral_ratio) ? currentPosition.target_collateral_ratio / 1000 : 0;
      return {
        debtAmount: debt ? debt.toString() : null,
        collateral: collateral ? collateral.toString() : null,
        collateral_ratio: this._getCollateralRatio(debt, collateral),
        target_collateral_ratio: target_collateral_ratio,
        errors: this._getInitialErrors(),
        useTargetCollateral: target_collateral_ratio > 0 ? true : false,
        original_position: {
          debt: debt,
          collateral: collateral,
          target_collateral_ratio: target_collateral_ratio
        },
        unlockedInputType: "collateral",
        isRatioLocked: true
      };
    } else {
      return {
        debtAmount: 0,
        collateral: 0,
        collateral_ratio: this._getInitialCollateralRatio(props),
        target_collateral_ratio: this._getMaintenanceRatio(),
        errors: this._getInitialErrors(),
        useTargetCollateral: false,
        original_position: {
          debt: 0,
          collateral: 0
        },
        unlockedInputType: "debt",
        isRatioLocked: true
      };
    }
  }

  componentDidUpdate() {
    react_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"].rebuild();
  }

  componentDidMount() {
    let newState = this._initialState(this.props);

    this.setState(newState);

    this._setUpdatedPosition(newState); // set max on mount todo: discuss if feasible default
    // this._maximizeCollateral();

  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.visible !== nextProps.visible || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(nextState, this.state) || !immutable__WEBPACK_IMPORTED_MODULE_9___default().is(nextProps.quoteAssetObj, this.props.quoteAssetObj) || !nextProps.backingAssetObj.get("symbol") === this.props.backingAssetObj.get("symbol") || !immutable__WEBPACK_IMPORTED_MODULE_9___default().is(nextProps.accountObj, this.props.accountObj) || !immutable__WEBPACK_IMPORTED_MODULE_9___default().is(nextProps.call_orders, this.props.call_orders) || this.state.unlockedInputType !== nextState.unlockedInputType;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      debtAmount,
      collateral,
      collateral_ratio
    } = this.state;

    if (nextProps.accountObj !== this.props.accountObj || nextProps.hasCallOrders !== this.props.hasCallOrders || nextProps.quoteAssetObj.get("id") !== this.props.quoteAssetObj.get("id")) {
      let newState = this._initialState(nextProps);

      let revalidate = false;

      if (debtAmount || collateral || collateral_ratio) {
        newState.debtAmount = debtAmount;
        newState.collateral = collateral;
        newState.collateral_ratio = collateral_ratio;
        revalidate = true;
      }

      this.setState(newState);

      if (revalidate) {
        this._validateFields(newState);
      }
    }
  }

  _getInitialErrors() {
    return {
      collateral_balance: null,
      ratio_too_high: null
    };
  }

  _getMaintenanceRatio() {
    return this.props.quoteAssetObj.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;
  }

  confirmClicked(e) {
    e.preventDefault();
    react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default().publish(this.props.modalId, "close");
  }

  _onBorrowChange(e) {
    let feed_price = this._getFeedPrice();

    let amount = e.amount.replace(/,/g, "");
    let collateral = !this.state.isRatioLocked ? this.state.collateral : (this.state.collateral_ratio * (amount / feed_price).toFixed(this.props.backingAssetObj.get("precision"))).toFixed(this.props.backingAssetObj.get("precision"));
    let collateral_ratio = this.state.isRatioLocked ? this.state.collateral_ratio : this.state.collateral / (amount / feed_price);
    let newState = {
      debtAmount: amount,
      collateral: collateral,
      collateral_ratio: collateral_ratio
    };
    this.setState(newState);

    this._validateFields(newState);

    this._setUpdatedPosition(newState);
  }

  _onCollateralChange(e) {
    let {
      isRatioLocked,
      collateral_ratio
    } = this.state;
    let amount = e.amount.replace(/,/g, "");

    let feed_price = this._getFeedPrice();

    const collateralRatio = !isRatioLocked ? amount / (this.state.debtAmount / feed_price) : collateral_ratio;
    const debtAmount = !isRatioLocked ? this.state.debtAmount : (amount * feed_price / collateralRatio).toFixed(this.props.backingAssetObj.get("precision"));
    let newState = this._isPredictionMarket(this.props) ? {
      debtAmount: amount,
      collateral: amount,
      collateral_ratio: 1
    } : {
      debtAmount: debtAmount,
      collateral: amount,
      collateral_ratio: collateralRatio
    };
    this.setState(newState);

    this._validateFields(newState);

    this._setUpdatedPosition(newState);
  }

  _onTargetRatioChange(e) {
    let target = e.target.value; // Ensure input is valid

    const regexp_numeral = new RegExp(/[[:digit:]]/);

    if (!regexp_numeral.test(target)) {
      target = target.replace(/[^0-9.]/g, "");
    }

    let newState = {
      target_collateral_ratio: target
    };
    this.setState(newState);

    this._validateFields(newState);

    this._setUpdatedPosition(newState);
  }

  _onRatioChange(e) {
    let feed_price = this._getFeedPrice();

    let debtAmount;
    let collateral;
    let ratio = 0;

    if (e.target) {
      // Ensure input is valid
      const regexp_numeral = new RegExp(/[[:digit:]]/);

      if (!regexp_numeral.test(e.target.value)) {
        e.target.value = e.target.value.replace(/[^0-9.]/g, "");
      }

      ratio = e.target.value;
    } else {
      ratio = e;
    }

    if (this.state.unlockedInputType == "debt") {
      debtAmount = (this.state.collateral * feed_price / parseFloat(ratio)).toFixed(this.props.backingAssetObj.get("precision"));
      collateral = this.state.collateral;
    } else {
      debtAmount = this.state.debtAmount;
      collateral = (this.state.debtAmount / feed_price * parseFloat(ratio)).toFixed(this.props.backingAssetObj.get("precision"));
    }

    let newState = {
      debtAmount: debtAmount,
      collateral: collateral,
      collateral_ratio: ratio
    };
    this.setState(newState);

    this._validateFields(newState);

    this._setUpdatedPosition(newState);
  }

  _maximizeCollateral() {
    let currentPosition = this.props ? this._getCurrentPosition(this.props) : {};
    let initialCollateralTyped = 0;

    if (currentPosition.collateral) {
      initialCollateralTyped = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].convert_satoshi_to_typed(currentPosition.collateral, this.props.backingAssetObj);
    }

    let backingAssetBalanceTyped = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].convert_satoshi_to_typed(this.props.collateralBalanceObj.get("balance"), this.props.backingAssetObj); // make sure we don't go over the maximum available collateral balance, and also not negative

    let maximizedCollateral = Math.max(Math.floor(backingAssetBalanceTyped + initialCollateralTyped - 10), 0);

    this._onCollateralChange(new Object({
      amount: maximizedCollateral.toString()
    }));
  } // Usage?


  _maximizeDebt() {
    let currentPosition = this.props ? this._getCurrentPosition(this.props) : {};
    let initialCollateral = 0;

    if (currentPosition.collateral) {
      initialCollateral = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(currentPosition.collateral, this.props.backingAssetObj);
    }

    let maximumCollateral = this.props.collateralBalanceObj.get("balance") / common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(this.props.backingAssetObj) + initialCollateral - 10;

    const debtAmount = maximumCollateral / this.state.collateral_ratio * this._getFeedPrice();

    const newState = {
      debtAmount: debtAmount,
      collateral: maximumCollateral,
      collateral_ratio: this.state.collateral_ratio
    };
    this.setState(newState);

    this._validateFields(newState);

    this._setUpdatedPosition(newState);
  }

  _payDebt() {
    let currentPosition = this.props ? this._getCurrentPosition(this.props) : {
      debt: 0
    };

    if (currentPosition.debt <= 0) {
      return;
    }

    const debtAmount = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(Math.max(currentPosition.debt - this.props.debtBalanceObj.get("balance"), 0), this.props.quoteAssetObj);

    this._onBorrowChange({
      amount: debtAmount.toString()
    });
  }

  _setUpdatedPosition(newState) {
    this.setState({
      newPosition: parseFloat(newState.debtAmount) / parseFloat(newState.collateral)
    });
  }

  _validateFields(newState) {
    let errors = this._getInitialErrors();

    let {
      original_position
    } = this.state;
    let collateralBalanceObj = !this.props.collateralBalanceObj ? {
      balance: 0
    } : this.props.collateralBalanceObj.toJS();

    let maintenanceRatio = this._getMaintenanceRatio();

    let originalCR = this._getCollateralRatio(original_position.debt, original_position.collateral);

    let isOriginalBelowMCR = original_position.collateral > 0 && originalCR < maintenanceRatio;

    if (parseFloat(newState.collateral) - original_position.collateral > common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_amount(collateralBalanceObj.balance, this.props.backingAssetObj.toJS())) {
      errors.collateral_balance = counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("borrow.errors.collateral");
    }

    if (newState.target_collateral_ratio && newState.target_collateral_ratio < maintenanceRatio) {
      errors.tcr_below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("borrow.errors.below_mcr_tcr", {
        mr: maintenanceRatio
      });
    }

    if (isOriginalBelowMCR && newState.debtAmount > original_position.debt) {
      errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("borrow.errors.increased_debt_on_margin_call");
    } else if (isOriginalBelowMCR && parseFloat(newState.collateral_ratio) <= parseFloat(originalCR)) {
      errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("borrow.errors.below_ratio_mcr_update", {
        ocr: originalCR.toFixed(4)
      });
    } else if (!isOriginalBelowMCR && parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : maintenanceRatio)) {
      errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("borrow.errors.below", {
        mr: maintenanceRatio
      });
    } else if (parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : maintenanceRatio + 0.5)) {
      errors.close_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("borrow.errors.close", {
        mr: maintenanceRatio
      });
    }

    this.setState({
      errors
    });
  }

  _onSubmit(e) {
    e.preventDefault();
    this.props.hideModal();
    let quotePrecision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(this.props.quoteAssetObj.get("precision"));
    let backingPrecision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(this.props.backingAssetObj.get("precision"));

    let currentPosition = this._getCurrentPosition(this.props);

    let isTCR = typeof this.state.target_collateral_ratio !== "undefined" && this.state.target_collateral_ratio > 0 && this.state.useTargetCollateral ? true : false;
    let extensionsProp = false;

    if (isTCR) {
      extensionsProp = {
        target_collateral_ratio: parseInt(this.state.target_collateral_ratio * 1000, 10)
      };
    }

    let delta_collateral_amount = parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10);
    let delta_debt_amount = parseInt(this.state.debtAmount * quotePrecision - currentPosition.debt, 10); // Amount can not be 0

    if (delta_collateral_amount == 0 && delta_debt_amount == 0) {
      delta_collateral_amount = 1;
    }

    var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_6__["default"].new_transaction();

    if (extensionsProp) {
      tr.add_type_operation("call_order_update", {
        fee: {
          amount: 0,
          asset_id: 0
        },
        funding_account: this.props.accountObj.get("id"),
        delta_collateral: {
          amount: delta_collateral_amount,
          asset_id: this.props.backingAssetObj.get("id")
        },
        delta_debt: {
          amount: delta_debt_amount,
          asset_id: this.props.quoteAssetObj.get("id")
        },
        extensions: extensionsProp
      });
    } else {
      tr.add_type_operation("call_order_update", {
        fee: {
          amount: 0,
          asset_id: 0
        },
        funding_account: this.props.accountObj.get("id"),
        delta_collateral: {
          amount: delta_collateral_amount,
          asset_id: this.props.backingAssetObj.get("id")
        },
        delta_debt: {
          amount: delta_debt_amount,
          asset_id: this.props.quoteAssetObj.get("id")
        }
      });
    }

    stores_WalletDb__WEBPACK_IMPORTED_MODULE_7__["default"].process_transaction(tr, null, true).catch(err => {
      if (false) {}
    });
    react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default().publish(this.props.modalId, "close");
  }

  _getCurrentPosition(props) {
    let currentPosition = {
      collateral: null,
      debt: null
    };

    if (props && props.hasCallOrders && props.call_orders) {
      currentPosition = props.call_orders.filter(a => !!a).find(a => {
        return a.getIn(["call_price", "quote", "asset_id"]) === props.quoteAssetObj.get("id");
      });
      currentPosition = !!currentPosition ? currentPosition.toJS() : {
        collateral: null,
        debt: null
      };
    }

    return currentPosition;
  }

  _getFeedPrice() {
    if (!this.props) {
      return 1;
    }

    if (this._isPredictionMarket(this.props)) {
      return 1;
    }

    return 1 / common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_price(_lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].extractRawFeedPrice(this.props.quoteAssetObj).getIn(["quote", "amount"]), this.props.backingAssetObj, _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_11__["default"].extractRawFeedPrice(this.props.quoteAssetObj).getIn(["base", "amount"]), this.props.quoteAssetObj);
  }

  _getInitialCollateralRatio(props) {
    return this._isPredictionMarket(props) ? 1 : this._getMaintenanceRatio() * 2;
  }

  _getCollateralRatio(debt, collateral) {
    return collateral / (debt / this._getFeedPrice());
  }

  _isPredictionMarket(props) {
    return props.quoteAssetObj.getIn(["bitasset", "is_prediction_market"]);
  }

  _setUseTargetCollateral() {
    this.setState({
      useTargetCollateral: !this.state.useTargetCollateral
    });
  }

  _onLockChange(type) {
    this.setState({
      isRatioLocked: false,
      unlockedInputType: type
    });
  }

  _onLockCR() {
    this.setState({
      isRatioLocked: !this.state.isRatioLocked
    });
  }

  render() {
    let {
      quoteAssetObj,
      backingAssetObj,
      debtBalanceObj,
      collateralBalanceObj
    } = this.props;
    let {
      debtAmount,
      collateral,
      collateral_ratio,
      target_collateral_ratio,
      errors,
      original_position,
      useTargetCollateral
    } = this.state;

    if (!collateral_ratio || isNaN(collateral_ratio) || !(collateral_ratio > 0.0 && collateral_ratio < 1000.0)) {
      collateral_ratio = 0;
    } // Ensure we don't get massive decimal placement


    if (collateral_ratio.toString().indexOf(".") != -1 && collateral_ratio.toString().split(".")[1].length > 2) {
      collateral_ratio = collateral_ratio.toString().split(".")[0] + "." + collateral_ratio.toString().split(".")[1].substr(0, 2);
    }

    if (target_collateral_ratio.toString().indexOf(".") != -1 && target_collateral_ratio.toString().split(".")[1].length > 2) {
      target_collateral_ratio = target_collateral_ratio.toString().split(".")[0] + "." + target_collateral_ratio.toString().split(".")[1].substr(0, 2);
    }

    debtBalanceObj = !debtBalanceObj ? {
      balance: 0,
      id: null
    } : debtBalanceObj.toJS();
    collateralBalanceObj = !collateralBalanceObj ? {
      balance: 0,
      id: null
    } : collateralBalanceObj.toJS();
    let backingPrecision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(this.props.backingAssetObj.get("precision"));
    let debtPrecision = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].get_asset_precision(this.props.quoteAssetObj.get("precision")); // Dynamically update user's remaining collateral

    let currentPosition = this._getCurrentPosition(this.props);

    let collateralChange = parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10);
    let debtChange = parseInt(this.state.debtAmount * debtPrecision - currentPosition.debt, 10);
    let remainingBackingBalance = collateralBalanceObj.balance - collateralChange;
    let remainingDebtBalance = debtBalanceObj.balance + debtChange;

    let feed_price = this._getFeedPrice();

    let maintenanceRatio = this._getMaintenanceRatio();

    let isPredictionMarket = this._isPredictionMarket(this.props);

    let isOriginalBelowMCR = original_position.collateral > 0 && this._getCollateralRatio(original_position.debt, original_position.collateral) < maintenanceRatio;
    const footer = [];

    const resetModal = () => {
      this.setState(this._initialState(this.props));
    };

    if (!isPredictionMarket && isNaN(feed_price)) {
      footer.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
        tabIndex: 6,
        onClick: this.props.hideModal
      }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("accountObj.perm.cancel")));
    } else {
      footer.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
        tabIndex: 6,
        key: "submit",
        type: "primary",
        onClick: this._onSubmit
      }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("borrow.adjust")));
      footer.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Button, {
        tabIndex: 7,
        key: "cancel",
        onClick: resetModal
      }, counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("wallet.reset")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_10__.Modal, {
      title: counterpart__WEBPACK_IMPORTED_MODULE_8___default().translate("borrow.title", {
        asset_symbol: quoteAssetObj.get("symbol")
      }),
      visible: this.props.visible,
      onCancel: this.props.hideModal,
      footer: footer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_View_BorrowModalView__WEBPACK_IMPORTED_MODULE_12__.BorrowModalView // Objects
    , {
      accountObj: this.props.accountObj,
      backingAssetObj: backingAssetObj,
      collateralBalanceObj: collateralBalanceObj,
      debtBalanceObj: debtBalanceObj,
      quoteAssetObj: quoteAssetObj,
      newPosition: this.state.newPosition || null,
      errors: errors // Strings, Floats and Numbers
      ,
      collateral: collateral,
      collateral_ratio: collateral_ratio,
      debtAmount: debtAmount,
      backingPrecision: backingPrecision,
      maintenanceRatio: maintenanceRatio,
      remainingBackingBalance: remainingBackingBalance,
      remainingDebtBalance: remainingDebtBalance,
      target_collateral_ratio: target_collateral_ratio,
      unlockedInputType: this.state.unlockedInputType // Bool Flags
      ,
      disableHelp: this.props.disableHelp,
      isRatioLocked: this.state.isRatioLocked,
      isOriginalBelowMCR: isOriginalBelowMCR,
      isPredictionMarket: isPredictionMarket,
      isValid: isPredictionMarket || !isPredictionMarket && !isNaN(feed_price),
      useTargetCollateral: useTargetCollateral // Actions
      ,
      onBorrowChange: this._onBorrowChange.bind(this),
      onCollateralChange: this._onCollateralChange.bind(this),
      onMaximizeCollatereal: this._maximizeCollateral.bind(this),
      onRatioChange: this._onRatioChange.bind(this),
      onLockChangeCR: this._onLockCR.bind(this),
      onLockChangeCollateral: this._onLockChange.bind(this, "debt"),
      onLockChangeDebt: this._onLockChange.bind(this, "collateral"),
      onPayDebt: this._payDebt.bind(this),
      onTCRatioChange: this._onTargetRatioChange.bind(this),
      onSetUseTCR: this._setUseTargetCollateral.bind(this)
    }));
  }

}

BorrowModalContent = (0,_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(BorrowModalContent);
BorrowModalContent = (0,react_debounce_render__WEBPACK_IMPORTED_MODULE_13__["default"])(BorrowModalContent, 50, {
  leading: false
});
/* This wrapper class appears to be necessary because the decorator eats the show method from refs */

class ModalWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();
    this.state = {
      smallScreen: false,
      open: false
    };
  }

  show() {
    this.props.showModal();
  }

  UNSAFE_componentWillMount() {
    this.setState({
      smallScreen: window.innerHeight <= 800
    });
  }

  render() {
    let {
      quoteAssetObj,
      backingAssetObj,
      accountObj
    } = this.props;
    let accountObjBalance = accountObj.get("balances").toJS();
    let coreBalance, bitAssetBalance;

    if (accountObjBalance) {
      for (var id in accountObjBalance) {
        if (id === backingAssetObj) {
          coreBalance = accountObjBalance[id];
        }

        if (id === quoteAssetObj) {
          bitAssetBalance = accountObjBalance[id];
        }
      }
    }

    return this.props.visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BorrowModalContent, {
      visible: this.props.visible,
      hideModal: this.props.hideModal,
      showModal: this.props.showModal,
      quoteAssetObj: quoteAssetObj,
      call_orders: accountObj.get("call_orders", (0,immutable__WEBPACK_IMPORTED_MODULE_9__.List)()).toList(),
      hasCallOrders: accountObj.get("call_orders") && accountObj.get("call_orders").size > 0,
      modalId: this.props.modalId,
      debtBalanceObj: bitAssetBalance,
      collateralBalanceObj: coreBalance,
      backingAssetObj: backingAssetObj,
      disableHelp: this.state.smallScreen,
      accountObj: accountObj
    }) : null;
  }

}

/***/ }),

/***/ 2719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BorrowModalView": () => (/* binding */ BorrowModalView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2082);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(596);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2048);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2098);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(655);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(607);










function BorrowModalView({
  // Objects
  accountObj,
  backingAssetObj,
  collateralBalanceObj,
  debtBalanceObj,
  quoteAssetObj,
  newPosition,
  errors,
  // Strings, Floats and Numbers
  collateral,
  collateral_ratio,
  debtAmount,
  backingPrecision,
  maintenanceRatio,
  remainingBackingBalance,
  remainingDebtBalance,
  target_collateral_ratio,
  unlockedInputType,
  // Bool Flags
  disableHelp,
  isRatioLocked,
  isOriginalBelowMCR,
  isPredictionMarket,
  isValid,
  useTargetCollateral,
  // Callbacks
  onPayDebt,
  onMaximizeCollatereal,
  onBorrowChange,
  onLockChangeDebt,
  onCollateralChange,
  onLockChangeCollateral,
  onRatioChange,
  onLockChangeCR,
  onSetUseTCR,
  onTCRatioChange
}) {
  let quotePrecision = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].get_asset_precision(quoteAssetObj.get("precision"));
  const userExchangePrice = newPosition ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    noPopOver: true,
    noTip: true,
    quote_amount: maintenanceRatio * debtAmount * quotePrecision,
    quote_asset: quoteAssetObj.get("id"),
    base_asset: backingAssetObj.get("id"),
    base_amount: collateral * backingPrecision
  }) : null;
  const noValidComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
    component: "h3",
    content: "borrow.no_valid",
    asset_symbol: quoteAssetObj.get("symbol")
  }));
  const bitAssetBalanceText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, collateral != 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
    component: "a",
    onClick: onPayDebt.bind(this),
    content: "borrow.pay_max_debt"
  }), "\xA0") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
    component: "span",
    content: "transfer.available"
  }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, debtBalanceObj.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
    amount: remainingDebtBalance,
    asset: quoteAssetObj.get("id")
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
    amount: 0,
    asset: quoteAssetObj.get("id")
  }))));
  const backingBalanceText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
    component: "a",
    onClick: onMaximizeCollatereal.bind(this),
    content: "borrow.use_max"
  }), "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
    component: "span",
    content: "transfer.available"
  }), ":", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, collateralBalanceObj.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
    amount: remainingBackingBalance,
    asset: backingAssetObj.get("id")
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
    amount: 0,
    asset: backingAssetObj.get("id")
  }))));
  return !isValid ? noValidComponent : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, disableHelp ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      paddingBottom: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    path: "components/" + (isPredictionMarket ? "BorrowModalPrediction" : "BorrowModal"),
    debt: quoteAssetObj.get("symbol"),
    collateral: backingAssetObj.get("symbol"),
    borrower: accountObj.get("name"),
    mr: maintenanceRatio
  })), !isPredictionMarket && isOriginalBelowMCR ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
    component: "h6",
    className: "has-warning",
    content: "borrow.errors.below_info"
  }) : null, !isPredictionMarket ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      paddingTop: "1rem",
      paddingBottom: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "borrow-price-feeds"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "borrow-price-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
    content: "transaction.feed_price"
  }), ":\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    noPopOver: true,
    quote_amount: _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].extractRawFeedPrice(quoteAssetObj).getIn(["base", "amount"]),
    quote_asset: _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].extractRawFeedPrice(quoteAssetObj).getIn(["base", "asset_id"]),
    base_asset: _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].extractRawFeedPrice(quoteAssetObj).getIn(["quote", "asset_id"]),
    base_amount: _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].extractRawFeedPrice(quoteAssetObj).getIn(["quote", "amount"])
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "borrow-price-final " + (errors.below_maintenance ? "has-error" : errors.close_maintenance ? "has-warning" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "borrow-price-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
    content: "exchange.your_price"
  }), ":\xA0"), userExchangePrice)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Form, {
    className: "full-width",
    layout: "vertical"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "transaction.borrow_amount",
    amount: debtAmount.toString(),
    onChange: onBorrowChange.bind(this),
    asset: quoteAssetObj.get("id"),
    assets: [quoteAssetObj.get("id")],
    display_balance: bitAssetBalanceText,
    placeholder: "0.0",
    tabIndex: 1,
    lockStatus: unlockedInputType == "debt" || isRatioLocked ? false : true,
    onLockChange: onLockChangeDebt.bind(this)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "transaction.collateral",
    amount: collateral.toString(),
    onChange: onCollateralChange.bind(this),
    asset: backingAssetObj.get("id"),
    assets: [backingAssetObj.get("id")],
    display_balance: backingBalanceText,
    placeholder: "0.0",
    tabIndex: 2,
    lockStatus: unlockedInputType == "collateral" || isRatioLocked ? false : true,
    onLockChange: onLockChangeCollateral.bind(this),
    validateStatus: errors.collateral_balance ? "error" : "",
    help: errors.collateral_balance ? errors.collateral_balance : null
  }), !isPredictionMarket ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Row, {
    gutter: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Col, {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Form.Item, {
    label: counterpart__WEBPACK_IMPORTED_MODULE_6___default().translate("borrow.coll_ratio"),
    validateStatus: errors.close_maintenance ? "warning" : errors.below_maintenance ? "error" : null,
    help: errors.close_maintenance ? errors.close_maintenance : errors.below_maintenance ? errors.below_maintenance : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Input, {
    value: collateral_ratio == 0 ? "" : collateral_ratio,
    tabIndex: 3,
    onChange: onRatioChange.bind(this),
    className: "input-group-unbordered-before",
    addonBefore: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Icon, {
      className: !isRatioLocked ? "grey" : "green",
      type: !isRatioLocked ? "unlock" : "lock",
      onClick: onLockChangeCR.bind(this),
      style: {
        fontSize: "20px"
      }
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Col, {
    span: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Form.Item, {
    validateStatus: errors.tcr_below_maintenance ? "error" : "",
    help: errors.tcr_below_maintenance ? errors.tcr_below_maintenance : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Input.Group, {
    compact: true,
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
    onClick: onSetUseTCR.bind(this),
    checked: useTargetCollateral,
    tabIndex: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_1___default()), {
    content: "borrow.enable_target_collateral_ratio"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
    title: counterpart__WEBPACK_IMPORTED_MODULE_6___default().translate("tooltip.target_collateral_ratio")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Icon, {
    type: "question-circle"
  }))), useTargetCollateral ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Input, {
    value: isNaN(target_collateral_ratio) ? "0" : target_collateral_ratio,
    tabIndex: 5,
    onChange: onTCRatioChange.bind(this)
  }) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Form.Item, {
    label: "Ratio Slider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__.Slider, {
    step: 0.01,
    min: 0,
    max: maintenanceRatio * 12,
    value: collateral_ratio,
    onChange: onRatioChange.bind(this)
  }))) : null));
}

/***/ }),

/***/ 2699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




class Dropdown extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static propTypes = {
    scroll_length: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
  };
  static defaultProps = {
    scroll_length: 9
  };

  constructor(props) {
    const scroll_length = props.scroll_length;
    super(props);
    this.state = {
      active: false
    };
    this.listener = false;
    this.onBodyClick = this.onBodyClick.bind(this);
  }

  componentDidMount() {
    this._setListener();
  }

  shouldComponentUpdate(np, ns) {
    return !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(np.entries, this.props.entries) || !common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].are_equal_shallow(ns, this.state) || np.value !== this.props.value;
  }

  _setListener(props = this.props) {
    if (props.entries.length > 1 && !this.listener) {
      this.listener = true;
      document.body.addEventListener("click", this.onBodyClick, {
        capture: false,
        passive: true
      });
    }
  }

  _removeListener() {
    document.body.removeEventListener("click", this.onBodyClick);
    this.listener = false;
  }

  UNSAFE_componentWillReceiveProps(np) {
    if (np.entries.length === 1) {
      this._removeListener();
    } else if (np.entries.length > 1) {
      this._setListener(np);
    }
  }

  componentWillUnmount() {
    this._removeListener();
  }

  onBodyClick(e) {
    let el = e.target;
    let insideActionSheet = false;

    do {
      if (el.classList && el.classList.contains("dropdown") && el.id === this.props.id) {
        insideActionSheet = true;
        break;
      }
    } while (el = el.parentNode);

    if (!insideActionSheet) {
      this.setState({
        active: false
      });
    } else {
      e.stopPropagation();
    }
  }

  onChange(value, e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onChange(value);
    this.setState({
      active: false
    });
  }

  _toggleDropdown() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const {
      entries,
      value
    } = this.props;
    let {
      active
    } = this.state;
    if (entries.length === 0) return null;

    if (entries.length == 1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "dropdown-wrapper inactive" + (this.props.upperCase ? " upper-case" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.props.singleEntry ? this.props.singleEntry : entries[0]));
    } else {
      let options = entries.map(value => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: this.props.upperCase ? "upper-case" : "",
          key: value,
          onClick: this.onChange.bind(this, this.props.values[value])
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, value));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        onClick: this._toggleDropdown.bind(this),
        className: "dropdown-wrapper" + (active ? " active" : "") + (this.props.upperCase ? " upper-case" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          paddingRight: 15
        }
      }, value ? value : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "hidden"
      }, "A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "dropdown",
        style: {
          overflow: entries.length > this.props.scroll_length ? "auto" : "hidden"
        }
      }, options));
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguYzczZDU2MTNjYzE0NDc1NTdlYWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUlBO0FBS0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBWkE7QUFjQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUNBO0FBRUE7O0FBQ0E7O0FBRUE7QUFDQTtBQVVBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQU1BOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBT0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFDQTtBQUVBO0FBU0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFJQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOztBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBSUE7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTs7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTs7QUFDQTtBQUNBO0FBSUE7O0FBRUE7O0FBTUE7O0FBS0E7QUFDQTtBQUFBO0FBRUE7OztBQUdBO0FBQ0E7QUFHQTs7QUFFQTtBQUNBO0FBSUE7O0FBRUE7O0FBS0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOztBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQVFBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBS0E7O0FBRUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7O0FBR0E7O0FBQ0E7O0FBSUE7O0FBR0E7QUFPQTtBQUdBOztBQUVBO0FBSUE7QUFFQTtBQUFBO0FBRUE7O0FBRUE7QUFJQTtBQUdBO0FBSUE7QUFFQTtBQUFBO0FBRUE7QUFLQTtBQUVBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUVBOztBQUVBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7O0FBR0E7O0FBRUE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQU1BOztBQUVBO0FBS0E7O0FBTUE7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTs7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7O0FBS0E7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUdBO0FBQ0E7QUFGQTtBQUlBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBYUE7O0FBRUE7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTs7QUFVQTtBQUtBO0FBQ0E7OztBQUdBO0FBSUE7QUFPQTs7QUFFQTtBQUlBO0FBT0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBR0E7O0FBS0E7O0FBQ0E7QUFNQTtBQUtBO0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUVBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBNUJBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBN0NBO0FBaURBOztBQW54QkE7O0FBcXhCQTtBQUVBO0FBQ0E7QUFEQTtBQUlBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWtCQTs7QUF2REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3R6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQTtBQXlDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUZBO0FBVUE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQVVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWlCQTtBQUNBO0FBQ0E7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBWEE7QUFrQkE7QUFEQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFkQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFoQkE7QUF3QkE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBT0E7QUFYQTtBQW9CQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUtBO0FBR0E7QUFBQTtBQUFBO0FBZEE7QUFWQTtBQThCQTtBQUFBO0FBRUE7QUFLQTtBQU5BO0FBYUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUdBO0FBREE7QUFLQTtBQUFBO0FBTUE7QUFLQTtBQUNBO0FBUEE7QUFlQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBYUE7Ozs7Ozs7Ozs7Ozs7OztBQzlYQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFhQTtBQUNBOztBQTVKQTs7QUErSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9hcHAvY29tcG9uZW50cy9Nb2RhbC9Cb3Jyb3dNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTW9kYWwvVmlldy9Cb3Jyb3dNb2RhbFZpZXcuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvRmxvYXRpbmdEcm9wZG93bi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFpmQXBpIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2ZvdW5kYXRpb24tYXBpXCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi4vVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IFdhbGxldEFwaSBmcm9tIFwiYXBpL1dhbGxldEFwaVwiO1xuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IHtMaXN0fSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQge01vZGFsLCBCdXR0b259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBhc3NldF91dGlscyBmcm9tIFwiLi4vLi4vbGliL2NvbW1vbi9hc3NldF91dGlsc1wiO1xuaW1wb3J0IHtCb3Jyb3dNb2RhbFZpZXd9IGZyb20gXCIuL1ZpZXcvQm9ycm93TW9kYWxWaWV3XCI7XG5pbXBvcnQgZGVib3VuY2VSZW5kZXIgZnJvbSBcInJlYWN0LWRlYm91bmNlLXJlbmRlclwiO1xuXG4vKipcbiAqICBHaXZlbiBhbiBhY2NvdW50IGFuZCBhbiBhc3NldCBpZCwgcmVuZGVyIGEgbW9kYWwgYWxsb3dpbmcgbW9kaWZpY2F0aW9uIG9mIGEgbWFyZ2luIHBvc2l0aW9uIGZvciB0aGF0IGFzc2V0XG4gKlxuICogIEV4cGVjdGVkIFByb3BlcnRpZXM6XG4gKiAgICAgcXVvdGVBc3NldE9iajogIGFzc2V0IGlkLCBtdXN0IGJlIGEgYml0YXNzZXRcbiAqICAgICBhY2NvdW50T2JqOiBmdWxsX2FjY291bnQgb2JqZWN0IGZvciB0aGUgYWNjb3VudCB0byB1c2VcbiAqXG4gKi9cblxuY2xhc3MgQm9ycm93TW9kYWxDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBxdW90ZUFzc2V0T2JqOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgYmFja2luZ0Fzc2V0T2JqOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcbiAgICAgICAgZGVidEJhbGFuY2VPYmo6IENoYWluVHlwZXMuQ2hhaW5PYmplY3QsXG4gICAgICAgIGNvbGxhdGVyYWxCYWxhbmNlT2JqOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LFxuICAgICAgICBjYWxsX29yZGVyczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdHNMaXN0LFxuICAgICAgICBoYXNDYWxsT3JkZXJzOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9pbml0aWFsU3RhdGUocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuX29uU3VibWl0ID0gdGhpcy5fb25TdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfaW5pdGlhbFN0YXRlKHByb3BzKSB7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSBwcm9wcyA/IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbihwcm9wcykgOiB7fTtcblxuICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwpIHtcbiAgICAgICAgICAgIGxldCBkZWJ0ID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uZGVidCxcbiAgICAgICAgICAgICAgICBwcm9wcy5xdW90ZUFzc2V0T2JqXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgIHByb3BzLmJhY2tpbmdBc3NldE9ialxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvID0gIWlzTmFOKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi50YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgID8gY3VycmVudFBvc2l0aW9uLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMFxuICAgICAgICAgICAgICAgIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkZWJ0QW1vdW50OiBkZWJ0ID8gZGVidC50b1N0cmluZygpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiBjb2xsYXRlcmFsID8gY29sbGF0ZXJhbC50b1N0cmluZygpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiB0aGlzLl9nZXRDb2xsYXRlcmFsUmF0aW8oZGVidCwgY29sbGF0ZXJhbCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW86IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvLFxuICAgICAgICAgICAgICAgIGVycm9yczogdGhpcy5fZ2V0SW5pdGlhbEVycm9ycygpLFxuICAgICAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWw6IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvID4gMCA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBkZWJ0OiBkZWJ0LFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiBjb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbzogdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVubG9ja2VkSW5wdXRUeXBlOiBcImNvbGxhdGVyYWxcIixcbiAgICAgICAgICAgICAgICBpc1JhdGlvTG9ja2VkOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkZWJ0QW1vdW50OiAwLFxuICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IDAsXG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogdGhpcy5fZ2V0SW5pdGlhbENvbGxhdGVyYWxSYXRpbyhwcm9wcyksXG4gICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW86IHRoaXMuX2dldE1haW50ZW5hbmNlUmF0aW8oKSxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IHRoaXMuX2dldEluaXRpYWxFcnJvcnMoKSxcbiAgICAgICAgICAgICAgICB1c2VUYXJnZXRDb2xsYXRlcmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBkZWJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1bmxvY2tlZElucHV0VHlwZTogXCJkZWJ0XCIsXG4gICAgICAgICAgICAgICAgaXNSYXRpb0xvY2tlZDogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgUmVhY3RUb29sdGlwLnJlYnVpbGQoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5faW5pdGlhbFN0YXRlKHRoaXMucHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpO1xuICAgICAgICAvLyBzZXQgbWF4IG9uIG1vdW50IHRvZG86IGRpc2N1c3MgaWYgZmVhc2libGUgZGVmYXVsdFxuICAgICAgICAvLyB0aGlzLl9tYXhpbWl6ZUNvbGxhdGVyYWwoKTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMudmlzaWJsZSAhPT0gbmV4dFByb3BzLnZpc2libGUgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5xdW90ZUFzc2V0T2JqLCB0aGlzLnByb3BzLnF1b3RlQXNzZXRPYmopIHx8XG4gICAgICAgICAgICAhbmV4dFByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJzeW1ib2xcIikgPT09XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nQXNzZXRPYmouZ2V0KFwic3ltYm9sXCIpIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5hY2NvdW50T2JqLCB0aGlzLnByb3BzLmFjY291bnRPYmopIHx8XG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5jYWxsX29yZGVycywgdGhpcy5wcm9wcy5jYWxsX29yZGVycykgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudW5sb2NrZWRJbnB1dFR5cGUgIT09IG5leHRTdGF0ZS51bmxvY2tlZElucHV0VHlwZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBjb25zdCB7ZGVidEFtb3VudCwgY29sbGF0ZXJhbCwgY29sbGF0ZXJhbF9yYXRpb30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG5leHRQcm9wcy5hY2NvdW50T2JqICE9PSB0aGlzLnByb3BzLmFjY291bnRPYmogfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5oYXNDYWxsT3JkZXJzICE9PSB0aGlzLnByb3BzLmhhc0NhbGxPcmRlcnMgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZUFzc2V0T2JqLmdldChcImlkXCIpICE9PVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldE9iai5nZXQoXCJpZFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuX2luaXRpYWxTdGF0ZShuZXh0UHJvcHMpO1xuXG4gICAgICAgICAgICBsZXQgcmV2YWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGRlYnRBbW91bnQgfHwgY29sbGF0ZXJhbCB8fCBjb2xsYXRlcmFsX3JhdGlvKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuZGVidEFtb3VudCA9IGRlYnRBbW91bnQ7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuY29sbGF0ZXJhbCA9IGNvbGxhdGVyYWw7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuY29sbGF0ZXJhbF9yYXRpbyA9IGNvbGxhdGVyYWxfcmF0aW87XG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXG4gICAgICAgICAgICBpZiAocmV2YWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGRzKG5ld1N0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRJbml0aWFsRXJyb3JzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sbGF0ZXJhbF9iYWxhbmNlOiBudWxsLFxuICAgICAgICAgICAgcmF0aW9fdG9vX2hpZ2g6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfZ2V0TWFpbnRlbmFuY2VSYXRpbygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldE9iai5nZXRJbihbXG4gICAgICAgICAgICAgICAgXCJiaXRhc3NldFwiLFxuICAgICAgICAgICAgICAgIFwiY3VycmVudF9mZWVkXCIsXG4gICAgICAgICAgICAgICAgXCJtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCJcbiAgICAgICAgICAgIF0pIC8gMTAwMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbmZpcm1DbGlja2VkKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBaZkFwaS5wdWJsaXNoKHRoaXMucHJvcHMubW9kYWxJZCwgXCJjbG9zZVwiKTtcbiAgICB9XG5cbiAgICBfb25Cb3Jyb3dDaGFuZ2UoZSkge1xuICAgICAgICBsZXQgZmVlZF9wcmljZSA9IHRoaXMuX2dldEZlZWRQcmljZSgpO1xuICAgICAgICBsZXQgYW1vdW50ID0gZS5hbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKTtcblxuICAgICAgICBsZXQgY29sbGF0ZXJhbCA9ICF0aGlzLnN0YXRlLmlzUmF0aW9Mb2NrZWRcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbF9yYXRpbyAqXG4gICAgICAgICAgICAgICAgICAoYW1vdW50IC8gZmVlZF9wcmljZSkudG9GaXhlZChcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKS50b0ZpeGVkKHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0T2JqLmdldChcInByZWNpc2lvblwiKSk7XG5cbiAgICAgICAgbGV0IGNvbGxhdGVyYWxfcmF0aW8gPSB0aGlzLnN0YXRlLmlzUmF0aW9Mb2NrZWRcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUuY29sbGF0ZXJhbCAvIChhbW91bnQgLyBmZWVkX3ByaWNlKTtcblxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICBkZWJ0QW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICBjb2xsYXRlcmFsOiBjb2xsYXRlcmFsLFxuICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuX3NldFVwZGF0ZWRQb3NpdGlvbihuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgX29uQ29sbGF0ZXJhbENoYW5nZShlKSB7XG4gICAgICAgIGxldCB7aXNSYXRpb0xvY2tlZCwgY29sbGF0ZXJhbF9yYXRpb30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgYW1vdW50ID0gZS5hbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKTtcblxuICAgICAgICBsZXQgZmVlZF9wcmljZSA9IHRoaXMuX2dldEZlZWRQcmljZSgpO1xuICAgICAgICBjb25zdCBjb2xsYXRlcmFsUmF0aW8gPSAhaXNSYXRpb0xvY2tlZFxuICAgICAgICAgICAgPyBhbW91bnQgLyAodGhpcy5zdGF0ZS5kZWJ0QW1vdW50IC8gZmVlZF9wcmljZSlcbiAgICAgICAgICAgIDogY29sbGF0ZXJhbF9yYXRpbztcblxuICAgICAgICBjb25zdCBkZWJ0QW1vdW50ID0gIWlzUmF0aW9Mb2NrZWRcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5kZWJ0QW1vdW50XG4gICAgICAgICAgICA6ICgoYW1vdW50ICogZmVlZF9wcmljZSkgLyBjb2xsYXRlcmFsUmF0aW8pLnRvRml4ZWQoXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLl9pc1ByZWRpY3Rpb25NYXJrZXQodGhpcy5wcm9wcylcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgZGVidEFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbDogYW1vdW50LFxuICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGRlYnRBbW91bnQ6IGRlYnRBbW91bnQsXG4gICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiBhbW91bnQsXG4gICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiBjb2xsYXRlcmFsUmF0aW9cbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpO1xuICAgIH1cblxuICAgIF9vblRhcmdldFJhdGlvQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAvLyBFbnN1cmUgaW5wdXQgaXMgdmFsaWRcbiAgICAgICAgY29uc3QgcmVnZXhwX251bWVyYWwgPSBuZXcgUmVnRXhwKC9bWzpkaWdpdDpdXS8pO1xuICAgICAgICBpZiAoIXJlZ2V4cF9udW1lcmFsLnRlc3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnJlcGxhY2UoL1teMC05Ll0vZywgXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbzogdGFyZ2V0XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGRzKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5fc2V0VXBkYXRlZFBvc2l0aW9uKG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBfb25SYXRpb0NoYW5nZShlKSB7XG4gICAgICAgIGxldCBmZWVkX3ByaWNlID0gdGhpcy5fZ2V0RmVlZFByaWNlKCk7XG4gICAgICAgIGxldCBkZWJ0QW1vdW50O1xuICAgICAgICBsZXQgY29sbGF0ZXJhbDtcbiAgICAgICAgbGV0IHJhdGlvID0gMDtcblxuICAgICAgICBpZiAoZS50YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbnB1dCBpcyB2YWxpZFxuICAgICAgICAgICAgY29uc3QgcmVnZXhwX251bWVyYWwgPSBuZXcgUmVnRXhwKC9bWzpkaWdpdDpdXS8pO1xuICAgICAgICAgICAgaWYgKCFyZWdleHBfbnVtZXJhbC50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTkuXS9nLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJhdGlvID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYXRpbyA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS51bmxvY2tlZElucHV0VHlwZSA9PSBcImRlYnRcIikge1xuICAgICAgICAgICAgZGVidEFtb3VudCA9IChcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jb2xsYXRlcmFsICogZmVlZF9wcmljZSkgL1xuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmF0aW8pXG4gICAgICAgICAgICApLnRvRml4ZWQodGhpcy5wcm9wcy5iYWNraW5nQXNzZXRPYmouZ2V0KFwicHJlY2lzaW9uXCIpKTtcbiAgICAgICAgICAgIGNvbGxhdGVyYWwgPSB0aGlzLnN0YXRlLmNvbGxhdGVyYWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWJ0QW1vdW50ID0gdGhpcy5zdGF0ZS5kZWJ0QW1vdW50O1xuICAgICAgICAgICAgY29sbGF0ZXJhbCA9IChcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5kZWJ0QW1vdW50IC8gZmVlZF9wcmljZSkgKlxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmF0aW8pXG4gICAgICAgICAgICApLnRvRml4ZWQodGhpcy5wcm9wcy5iYWNraW5nQXNzZXRPYmouZ2V0KFwicHJlY2lzaW9uXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIGRlYnRBbW91bnQ6IGRlYnRBbW91bnQsXG4gICAgICAgICAgICBjb2xsYXRlcmFsOiBjb2xsYXRlcmFsLFxuICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogcmF0aW9cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpO1xuICAgIH1cblxuICAgIF9tYXhpbWl6ZUNvbGxhdGVyYWwoKSB7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnByb3BzXG4gICAgICAgICAgICA/IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbih0aGlzLnByb3BzKVxuICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgbGV0IGluaXRpYWxDb2xsYXRlcmFsVHlwZWQgPSAwO1xuICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwpIHtcbiAgICAgICAgICAgIGluaXRpYWxDb2xsYXRlcmFsVHlwZWQgPSB1dGlscy5jb252ZXJ0X3NhdG9zaGlfdG9fdHlwZWQoXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwsXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nQXNzZXRPYmpcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmFja2luZ0Fzc2V0QmFsYW5jZVR5cGVkID0gdXRpbHMuY29udmVydF9zYXRvc2hpX3RvX3R5cGVkKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2xsYXRlcmFsQmFsYW5jZU9iai5nZXQoXCJiYWxhbmNlXCIpLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nQXNzZXRPYmpcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3QgZ28gb3ZlciB0aGUgbWF4aW11bSBhdmFpbGFibGUgY29sbGF0ZXJhbCBiYWxhbmNlLCBhbmQgYWxzbyBub3QgbmVnYXRpdmVcbiAgICAgICAgbGV0IG1heGltaXplZENvbGxhdGVyYWwgPSBNYXRoLm1heChcbiAgICAgICAgICAgIE1hdGguZmxvb3IoYmFja2luZ0Fzc2V0QmFsYW5jZVR5cGVkICsgaW5pdGlhbENvbGxhdGVyYWxUeXBlZCAtIDEwKSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9vbkNvbGxhdGVyYWxDaGFuZ2UoXG4gICAgICAgICAgICBuZXcgT2JqZWN0KHthbW91bnQ6IG1heGltaXplZENvbGxhdGVyYWwudG9TdHJpbmcoKX0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVXNhZ2U/XG4gICAgX21heGltaXplRGVidCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMucHJvcHNcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKHRoaXMucHJvcHMpXG4gICAgICAgICAgICA6IHt9O1xuICAgICAgICBsZXQgaW5pdGlhbENvbGxhdGVyYWwgPSAwO1xuXG4gICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCkge1xuICAgICAgICAgICAgaW5pdGlhbENvbGxhdGVyYWwgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsLFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0T2JqXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1heGltdW1Db2xsYXRlcmFsID1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29sbGF0ZXJhbEJhbGFuY2VPYmouZ2V0KFwiYmFsYW5jZVwiKSAvXG4gICAgICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X3ByZWNpc2lvbih0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iaikgK1xuICAgICAgICAgICAgaW5pdGlhbENvbGxhdGVyYWwgLVxuICAgICAgICAgICAgMTA7XG4gICAgICAgIGNvbnN0IGRlYnRBbW91bnQgPVxuICAgICAgICAgICAgKG1heGltdW1Db2xsYXRlcmFsIC8gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsX3JhdGlvKSAqXG4gICAgICAgICAgICB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcblxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIGRlYnRBbW91bnQ6IGRlYnRBbW91bnQsXG4gICAgICAgICAgICBjb2xsYXRlcmFsOiBtYXhpbXVtQ29sbGF0ZXJhbCxcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW86IHRoaXMuc3RhdGUuY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuX3NldFVwZGF0ZWRQb3NpdGlvbihuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgX3BheURlYnQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnByb3BzXG4gICAgICAgICAgICA/IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbih0aGlzLnByb3BzKVxuICAgICAgICAgICAgOiB7ZGVidDogMH07XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi5kZWJ0IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlYnRBbW91bnQgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxuICAgICAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmRlYnQgLSB0aGlzLnByb3BzLmRlYnRCYWxhbmNlT2JqLmdldChcImJhbGFuY2VcIiksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldE9ialxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX29uQm9ycm93Q2hhbmdlKHtcbiAgICAgICAgICAgIGFtb3VudDogZGVidEFtb3VudC50b1N0cmluZygpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbjpcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KG5ld1N0YXRlLmRlYnRBbW91bnQpIC9cbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KG5ld1N0YXRlLmNvbGxhdGVyYWwpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSkge1xuICAgICAgICBsZXQgZXJyb3JzID0gdGhpcy5fZ2V0SW5pdGlhbEVycm9ycygpO1xuICAgICAgICBsZXQge29yaWdpbmFsX3Bvc2l0aW9ufSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBjb2xsYXRlcmFsQmFsYW5jZU9iaiA9ICF0aGlzLnByb3BzLmNvbGxhdGVyYWxCYWxhbmNlT2JqXG4gICAgICAgICAgICA/IHtiYWxhbmNlOiAwfVxuICAgICAgICAgICAgOiB0aGlzLnByb3BzLmNvbGxhdGVyYWxCYWxhbmNlT2JqLnRvSlMoKTtcblxuICAgICAgICBsZXQgbWFpbnRlbmFuY2VSYXRpbyA9IHRoaXMuX2dldE1haW50ZW5hbmNlUmF0aW8oKTtcbiAgICAgICAgbGV0IG9yaWdpbmFsQ1IgPSB0aGlzLl9nZXRDb2xsYXRlcmFsUmF0aW8oXG4gICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbi5kZWJ0LFxuICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uY29sbGF0ZXJhbFxuICAgICAgICApO1xuICAgICAgICBsZXQgaXNPcmlnaW5hbEJlbG93TUNSID1cbiAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmNvbGxhdGVyYWwgPiAwICYmIG9yaWdpbmFsQ1IgPCBtYWludGVuYW5jZVJhdGlvO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbCkgLSBvcmlnaW5hbF9wb3NpdGlvbi5jb2xsYXRlcmFsID5cbiAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9hbW91bnQoXG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbEJhbGFuY2VPYmouYmFsYW5jZSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai50b0pTKClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvcnMuY29sbGF0ZXJhbF9iYWxhbmNlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgIFwiYm9ycm93LmVycm9ycy5jb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBuZXdTdGF0ZS50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyAmJlxuICAgICAgICAgICAgbmV3U3RhdGUudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8gPCBtYWludGVuYW5jZVJhdGlvXG4gICAgICAgICkge1xuICAgICAgICAgICAgZXJyb3JzLnRjcl9iZWxvd19tYWludGVuYW5jZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuYmVsb3dfbWNyX3RjclwiLFxuICAgICAgICAgICAgICAgIHttcjogbWFpbnRlbmFuY2VSYXRpb31cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc09yaWdpbmFsQmVsb3dNQ1IgJiZcbiAgICAgICAgICAgIG5ld1N0YXRlLmRlYnRBbW91bnQgPiBvcmlnaW5hbF9wb3NpdGlvbi5kZWJ0XG4gICAgICAgICkge1xuICAgICAgICAgICAgZXJyb3JzLmJlbG93X21haW50ZW5hbmNlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgIFwiYm9ycm93LmVycm9ycy5pbmNyZWFzZWRfZGVidF9vbl9tYXJnaW5fY2FsbFwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgaXNPcmlnaW5hbEJlbG93TUNSICYmXG4gICAgICAgICAgICBwYXJzZUZsb2F0KG5ld1N0YXRlLmNvbGxhdGVyYWxfcmF0aW8pIDw9IHBhcnNlRmxvYXQob3JpZ2luYWxDUilcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvcnMuYmVsb3dfbWFpbnRlbmFuY2UgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgXCJib3Jyb3cuZXJyb3JzLmJlbG93X3JhdGlvX21jcl91cGRhdGVcIixcbiAgICAgICAgICAgICAgICB7b2NyOiBvcmlnaW5hbENSLnRvRml4ZWQoNCl9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgIWlzT3JpZ2luYWxCZWxvd01DUiAmJlxuICAgICAgICAgICAgcGFyc2VGbG9hdChuZXdTdGF0ZS5jb2xsYXRlcmFsX3JhdGlvKSA8XG4gICAgICAgICAgICAgICAgKHRoaXMuX2lzUHJlZGljdGlvbk1hcmtldCh0aGlzLnByb3BzKSA/IDEgOiBtYWludGVuYW5jZVJhdGlvKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGVycm9ycy5iZWxvd19tYWludGVuYW5jZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuYmVsb3dcIixcbiAgICAgICAgICAgICAgICB7bXI6IG1haW50ZW5hbmNlUmF0aW99XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgcGFyc2VGbG9hdChuZXdTdGF0ZS5jb2xsYXRlcmFsX3JhdGlvKSA8XG4gICAgICAgICAgICAodGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHRoaXMucHJvcHMpID8gMSA6IG1haW50ZW5hbmNlUmF0aW8gKyAwLjUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgZXJyb3JzLmNsb3NlX21haW50ZW5hbmNlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgIFwiYm9ycm93LmVycm9ycy5jbG9zZVwiLFxuICAgICAgICAgICAgICAgIHttcjogbWFpbnRlbmFuY2VSYXRpb31cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KTtcbiAgICB9XG5cbiAgICBfb25TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcblxuICAgICAgICBsZXQgcXVvdGVQcmVjaXNpb24gPSB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0T2JqLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICApO1xuICAgICAgICBsZXQgYmFja2luZ1ByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbih0aGlzLnByb3BzKTtcblxuICAgICAgICBsZXQgaXNUQ1IgPVxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuc3RhdGUudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8gPiAwICYmXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnVzZVRhcmdldENvbGxhdGVyYWxcbiAgICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgICA6IGZhbHNlO1xuXG4gICAgICAgIGxldCBleHRlbnNpb25zUHJvcCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc1RDUikge1xuICAgICAgICAgICAgZXh0ZW5zaW9uc1Byb3AgPSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW86IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbHRhX2NvbGxhdGVyYWxfYW1vdW50ID0gcGFyc2VJbnQoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWwgKiBiYWNraW5nUHJlY2lzaW9uIC1cbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcbiAgICAgICAgICAgIDEwXG4gICAgICAgICk7XG4gICAgICAgIGxldCBkZWx0YV9kZWJ0X2Ftb3VudCA9IHBhcnNlSW50KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZWJ0QW1vdW50ICogcXVvdGVQcmVjaXNpb24gLSBjdXJyZW50UG9zaXRpb24uZGVidCxcbiAgICAgICAgICAgIDEwXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQW1vdW50IGNhbiBub3QgYmUgMFxuICAgICAgICBpZiAoZGVsdGFfY29sbGF0ZXJhbF9hbW91bnQgPT0gMCAmJiBkZWx0YV9kZWJ0X2Ftb3VudCA9PSAwKSB7XG4gICAgICAgICAgICBkZWx0YV9jb2xsYXRlcmFsX2Ftb3VudCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHIgPSBXYWxsZXRBcGkubmV3X3RyYW5zYWN0aW9uKCk7XG4gICAgICAgIGlmIChleHRlbnNpb25zUHJvcCkge1xuICAgICAgICAgICAgdHIuYWRkX3R5cGVfb3BlcmF0aW9uKFwiY2FsbF9vcmRlcl91cGRhdGVcIiwge1xuICAgICAgICAgICAgICAgIGZlZToge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5kaW5nX2FjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudE9iai5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICBkZWx0YV9jb2xsYXRlcmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGVsdGFfY29sbGF0ZXJhbF9hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVsdGFfZGVidDoge1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRlbHRhX2RlYnRfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogdGhpcy5wcm9wcy5xdW90ZUFzc2V0T2JqLmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBleHRlbnNpb25zUHJvcFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ci5hZGRfdHlwZV9vcGVyYXRpb24oXCJjYWxsX29yZGVyX3VwZGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgZmVlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmRpbmdfYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50T2JqLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgIGRlbHRhX2NvbGxhdGVyYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkZWx0YV9jb2xsYXRlcmFsX2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0T2JqLmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWx0YV9kZWJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGVsdGFfZGVidF9hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLnF1b3RlQXNzZXRPYmouZ2V0KFwiaWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBXYWxsZXREYi5wcm9jZXNzX3RyYW5zYWN0aW9uKHRyLCBudWxsLCB0cnVlKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVubG9jayBmYWlsZWQ6XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFpmQXBpLnB1Ymxpc2godGhpcy5wcm9wcy5tb2RhbElkLCBcImNsb3NlXCIpO1xuICAgIH1cblxuICAgIF9nZXRDdXJyZW50UG9zaXRpb24ocHJvcHMpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IG51bGwsXG4gICAgICAgICAgICBkZWJ0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmhhc0NhbGxPcmRlcnMgJiYgcHJvcHMuY2FsbF9vcmRlcnMpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHByb3BzLmNhbGxfb3JkZXJzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+ICEhYSlcbiAgICAgICAgICAgICAgICAuZmluZChhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0SW4oW1wiY2FsbF9wcmljZVwiLCBcInF1b3RlXCIsIFwiYXNzZXRfaWRcIl0pID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMucXVvdGVBc3NldE9iai5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSAhIWN1cnJlbnRQb3NpdGlvblxuICAgICAgICAgICAgICAgID8gY3VycmVudFBvc2l0aW9uLnRvSlMoKVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZGVidDogbnVsbFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFBvc2l0aW9uO1xuICAgIH1cblxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAxIC9cbiAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmljZShcbiAgICAgICAgICAgICAgICBhc3NldF91dGlsc1xuICAgICAgICAgICAgICAgICAgICAuZXh0cmFjdFJhd0ZlZWRQcmljZSh0aGlzLnByb3BzLnF1b3RlQXNzZXRPYmopXG4gICAgICAgICAgICAgICAgICAgIC5nZXRJbihbXCJxdW90ZVwiLCBcImFtb3VudFwiXSksXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nQXNzZXRPYmosXG4gICAgICAgICAgICAgICAgYXNzZXRfdXRpbHNcbiAgICAgICAgICAgICAgICAgICAgLmV4dHJhY3RSYXdGZWVkUHJpY2UodGhpcy5wcm9wcy5xdW90ZUFzc2V0T2JqKVxuICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1wiYmFzZVwiLCBcImFtb3VudFwiXSksXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0T2JqXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX2dldEluaXRpYWxDb2xsYXRlcmFsUmF0aW8ocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzUHJlZGljdGlvbk1hcmtldChwcm9wcylcbiAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgOiB0aGlzLl9nZXRNYWludGVuYW5jZVJhdGlvKCkgKiAyO1xuICAgIH1cblxuICAgIF9nZXRDb2xsYXRlcmFsUmF0aW8oZGVidCwgY29sbGF0ZXJhbCkge1xuICAgICAgICByZXR1cm4gY29sbGF0ZXJhbCAvIChkZWJ0IC8gdGhpcy5fZ2V0RmVlZFByaWNlKCkpO1xuICAgIH1cblxuICAgIF9pc1ByZWRpY3Rpb25NYXJrZXQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnF1b3RlQXNzZXRPYmouZ2V0SW4oW1wiYml0YXNzZXRcIiwgXCJpc19wcmVkaWN0aW9uX21hcmtldFwiXSk7XG4gICAgfVxuXG4gICAgX3NldFVzZVRhcmdldENvbGxhdGVyYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdXNlVGFyZ2V0Q29sbGF0ZXJhbDogIXRoaXMuc3RhdGUudXNlVGFyZ2V0Q29sbGF0ZXJhbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25Mb2NrQ2hhbmdlKHR5cGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1JhdGlvTG9ja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHVubG9ja2VkSW5wdXRUeXBlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbkxvY2tDUigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1JhdGlvTG9ja2VkOiAhdGhpcy5zdGF0ZS5pc1JhdGlvTG9ja2VkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIHF1b3RlQXNzZXRPYmosXG4gICAgICAgICAgICBiYWNraW5nQXNzZXRPYmosXG4gICAgICAgICAgICBkZWJ0QmFsYW5jZU9iaixcbiAgICAgICAgICAgIGNvbGxhdGVyYWxCYWxhbmNlT2JqXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZGVidEFtb3VudCxcbiAgICAgICAgICAgIGNvbGxhdGVyYWwsXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvLFxuICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8sXG4gICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbixcbiAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWxcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWNvbGxhdGVyYWxfcmF0aW8gfHxcbiAgICAgICAgICAgIGlzTmFOKGNvbGxhdGVyYWxfcmF0aW8pIHx8XG4gICAgICAgICAgICAhKGNvbGxhdGVyYWxfcmF0aW8gPiAwLjAgJiYgY29sbGF0ZXJhbF9yYXRpbyA8IDEwMDAuMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVuc3VyZSB3ZSBkb24ndCBnZXQgbWFzc2l2ZSBkZWNpbWFsIHBsYWNlbWVudFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvLnRvU3RyaW5nKCkuaW5kZXhPZihcIi5cIikgIT0gLTEgJiZcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW8udG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoID4gMlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW8gPVxuICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW8udG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMF0gK1xuICAgICAgICAgICAgICAgIFwiLlwiICtcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi5cIilbMV1cbiAgICAgICAgICAgICAgICAgICAgLnN1YnN0cigwLCAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvLnRvU3RyaW5nKCkuaW5kZXhPZihcIi5cIikgIT0gLTEgJiZcbiAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCA+IDJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyA9XG4gICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8udG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMF0gK1xuICAgICAgICAgICAgICAgIFwiLlwiICtcbiAgICAgICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIuXCIpWzFdXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzdHIoMCwgMik7XG4gICAgICAgIH1cblxuICAgICAgICBkZWJ0QmFsYW5jZU9iaiA9ICFkZWJ0QmFsYW5jZU9ialxuICAgICAgICAgICAgPyB7YmFsYW5jZTogMCwgaWQ6IG51bGx9XG4gICAgICAgICAgICA6IGRlYnRCYWxhbmNlT2JqLnRvSlMoKTtcblxuICAgICAgICBjb2xsYXRlcmFsQmFsYW5jZU9iaiA9ICFjb2xsYXRlcmFsQmFsYW5jZU9ialxuICAgICAgICAgICAgPyB7YmFsYW5jZTogMCwgaWQ6IG51bGx9XG4gICAgICAgICAgICA6IGNvbGxhdGVyYWxCYWxhbmNlT2JqLnRvSlMoKTtcblxuICAgICAgICBsZXQgYmFja2luZ1ByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXG4gICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRlYnRQcmVjaXNpb24gPSB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0T2JqLmdldChcInByZWNpc2lvblwiKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIER5bmFtaWNhbGx5IHVwZGF0ZSB1c2VyJ3MgcmVtYWluaW5nIGNvbGxhdGVyYWxcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbih0aGlzLnByb3BzKTtcbiAgICAgICAgbGV0IGNvbGxhdGVyYWxDaGFuZ2UgPSBwYXJzZUludChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY29sbGF0ZXJhbCAqIGJhY2tpbmdQcmVjaXNpb24gLVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsLFxuICAgICAgICAgICAgMTBcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgZGVidENoYW5nZSA9IHBhcnNlSW50KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZWJ0QW1vdW50ICogZGVidFByZWNpc2lvbiAtIGN1cnJlbnRQb3NpdGlvbi5kZWJ0LFxuICAgICAgICAgICAgMTBcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgcmVtYWluaW5nQmFja2luZ0JhbGFuY2UgPVxuICAgICAgICAgICAgY29sbGF0ZXJhbEJhbGFuY2VPYmouYmFsYW5jZSAtIGNvbGxhdGVyYWxDaGFuZ2U7XG4gICAgICAgIGxldCByZW1haW5pbmdEZWJ0QmFsYW5jZSA9IGRlYnRCYWxhbmNlT2JqLmJhbGFuY2UgKyBkZWJ0Q2hhbmdlO1xuXG4gICAgICAgIGxldCBmZWVkX3ByaWNlID0gdGhpcy5fZ2V0RmVlZFByaWNlKCk7XG5cbiAgICAgICAgbGV0IG1haW50ZW5hbmNlUmF0aW8gPSB0aGlzLl9nZXRNYWludGVuYW5jZVJhdGlvKCk7XG5cbiAgICAgICAgbGV0IGlzUHJlZGljdGlvbk1hcmtldCA9IHRoaXMuX2lzUHJlZGljdGlvbk1hcmtldCh0aGlzLnByb3BzKTtcblxuICAgICAgICBsZXQgaXNPcmlnaW5hbEJlbG93TUNSID1cbiAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmNvbGxhdGVyYWwgPiAwICYmXG4gICAgICAgICAgICB0aGlzLl9nZXRDb2xsYXRlcmFsUmF0aW8oXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uZGVidCxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbF9wb3NpdGlvbi5jb2xsYXRlcmFsXG4gICAgICAgICAgICApIDwgbWFpbnRlbmFuY2VSYXRpbztcblxuICAgICAgICBjb25zdCBmb290ZXIgPSBbXTtcblxuICAgICAgICBjb25zdCByZXNldE1vZGFsID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9pbml0aWFsU3RhdGUodGhpcy5wcm9wcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghaXNQcmVkaWN0aW9uTWFya2V0ICYmIGlzTmFOKGZlZWRfcHJpY2UpKSB7XG4gICAgICAgICAgICBmb290ZXIucHVzaChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRhYkluZGV4PXs2fSBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJhY2NvdW50T2JqLnBlcm0uY2FuY2VsXCIpfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvb3Rlci5wdXNoKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezZ9XG4gICAgICAgICAgICAgICAgICAgIGtleT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25TdWJtaXR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiYm9ycm93LmFkanVzdFwiKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmb290ZXIucHVzaChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRhYkluZGV4PXs3fSBrZXk9XCJjYW5jZWxcIiBvbkNsaWNrPXtyZXNldE1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcIndhbGxldC5yZXNldFwiKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImJvcnJvdy50aXRsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X3N5bWJvbDogcXVvdGVBc3NldE9iai5nZXQoXCJzeW1ib2xcIilcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLnZpc2libGV9XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgIGZvb3Rlcj17Zm9vdGVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3Jyb3dNb2RhbFZpZXdcbiAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0c1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50T2JqPXt0aGlzLnByb3BzLmFjY291bnRPYmp9XG4gICAgICAgICAgICAgICAgICAgIGJhY2tpbmdBc3NldE9iaj17YmFja2luZ0Fzc2V0T2JqfVxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsQmFsYW5jZU9iaj17Y29sbGF0ZXJhbEJhbGFuY2VPYmp9XG4gICAgICAgICAgICAgICAgICAgIGRlYnRCYWxhbmNlT2JqPXtkZWJ0QmFsYW5jZU9ian1cbiAgICAgICAgICAgICAgICAgICAgcXVvdGVBc3NldE9iaj17cXVvdGVBc3NldE9ian1cbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb249e3RoaXMuc3RhdGUubmV3UG9zaXRpb24gfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0cmluZ3MsIEZsb2F0cyBhbmQgTnVtYmVyc1xuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsPXtjb2xsYXRlcmFsfVxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvPXtjb2xsYXRlcmFsX3JhdGlvfVxuICAgICAgICAgICAgICAgICAgICBkZWJ0QW1vdW50PXtkZWJ0QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICBiYWNraW5nUHJlY2lzaW9uPXtiYWNraW5nUHJlY2lzaW9ufVxuICAgICAgICAgICAgICAgICAgICBtYWludGVuYW5jZVJhdGlvPXttYWludGVuYW5jZVJhdGlvfVxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdCYWNraW5nQmFsYW5jZT17cmVtYWluaW5nQmFja2luZ0JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0RlYnRCYWxhbmNlPXtyZW1haW5pbmdEZWJ0QmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW89e3RhcmdldF9jb2xsYXRlcmFsX3JhdGlvfVxuICAgICAgICAgICAgICAgICAgICB1bmxvY2tlZElucHV0VHlwZT17dGhpcy5zdGF0ZS51bmxvY2tlZElucHV0VHlwZX1cbiAgICAgICAgICAgICAgICAgICAgLy8gQm9vbCBGbGFnc1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSGVscD17dGhpcy5wcm9wcy5kaXNhYmxlSGVscH1cbiAgICAgICAgICAgICAgICAgICAgaXNSYXRpb0xvY2tlZD17dGhpcy5zdGF0ZS5pc1JhdGlvTG9ja2VkfVxuICAgICAgICAgICAgICAgICAgICBpc09yaWdpbmFsQmVsb3dNQ1I9e2lzT3JpZ2luYWxCZWxvd01DUn1cbiAgICAgICAgICAgICAgICAgICAgaXNQcmVkaWN0aW9uTWFya2V0PXtpc1ByZWRpY3Rpb25NYXJrZXR9XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNQcmVkaWN0aW9uTWFya2V0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoIWlzUHJlZGljdGlvbk1hcmtldCAmJiAhaXNOYU4oZmVlZF9wcmljZSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdXNlVGFyZ2V0Q29sbGF0ZXJhbD17dXNlVGFyZ2V0Q29sbGF0ZXJhbH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBvbkJvcnJvd0NoYW5nZT17dGhpcy5fb25Cb3Jyb3dDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25Db2xsYXRlcmFsQ2hhbmdlPXt0aGlzLl9vbkNvbGxhdGVyYWxDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25NYXhpbWl6ZUNvbGxhdGVyZWFsPXt0aGlzLl9tYXhpbWl6ZUNvbGxhdGVyYWwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25SYXRpb0NoYW5nZT17dGhpcy5fb25SYXRpb0NoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvbkxvY2tDaGFuZ2VDUj17dGhpcy5fb25Mb2NrQ1IuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25Mb2NrQ2hhbmdlQ29sbGF0ZXJhbD17dGhpcy5fb25Mb2NrQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWJ0XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb25Mb2NrQ2hhbmdlRGVidD17dGhpcy5fb25Mb2NrQ2hhbmdlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgb25QYXlEZWJ0PXt0aGlzLl9wYXlEZWJ0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uVENSYXRpb0NoYW5nZT17dGhpcy5fb25UYXJnZXRSYXRpb0NoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvblNldFVzZVRDUj17dGhpcy5fc2V0VXNlVGFyZ2V0Q29sbGF0ZXJhbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn1cbkJvcnJvd01vZGFsQ29udGVudCA9IEJpbmRUb0NoYWluU3RhdGUoQm9ycm93TW9kYWxDb250ZW50KTtcblxuQm9ycm93TW9kYWxDb250ZW50ID0gZGVib3VuY2VSZW5kZXIoQm9ycm93TW9kYWxDb250ZW50LCA1MCwge1xuICAgIGxlYWRpbmc6IGZhbHNlXG59KTtcblxuLyogVGhpcyB3cmFwcGVyIGNsYXNzIGFwcGVhcnMgdG8gYmUgbmVjZXNzYXJ5IGJlY2F1c2UgdGhlIGRlY29yYXRvciBlYXRzIHRoZSBzaG93IG1ldGhvZCBmcm9tIHJlZnMgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzbWFsbFNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzbWFsbFNjcmVlbjogd2luZG93LmlubmVySGVpZ2h0IDw9IDgwMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cXVvdGVBc3NldE9iaiwgYmFja2luZ0Fzc2V0T2JqLCBhY2NvdW50T2JqfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBhY2NvdW50T2JqQmFsYW5jZSA9IGFjY291bnRPYmouZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICBsZXQgY29yZUJhbGFuY2UsIGJpdEFzc2V0QmFsYW5jZTtcblxuICAgICAgICBpZiAoYWNjb3VudE9iakJhbGFuY2UpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGlkIGluIGFjY291bnRPYmpCYWxhbmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSBiYWNraW5nQXNzZXRPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgY29yZUJhbGFuY2UgPSBhY2NvdW50T2JqQmFsYW5jZVtpZF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSBxdW90ZUFzc2V0T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpdEFzc2V0QmFsYW5jZSA9IGFjY291bnRPYmpCYWxhbmNlW2lkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52aXNpYmxlID8gKFxuICAgICAgICAgICAgPEJvcnJvd01vZGFsQ29udGVudFxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMucHJvcHMudmlzaWJsZX1cbiAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxuICAgICAgICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5wcm9wcy5zaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgcXVvdGVBc3NldE9iaj17cXVvdGVBc3NldE9ian1cbiAgICAgICAgICAgICAgICBjYWxsX29yZGVycz17YWNjb3VudE9iai5nZXQoXCJjYWxsX29yZGVyc1wiLCBMaXN0KCkpLnRvTGlzdCgpfVxuICAgICAgICAgICAgICAgIGhhc0NhbGxPcmRlcnM9e1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50T2JqLmdldChcImNhbGxfb3JkZXJzXCIpICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRPYmouZ2V0KFwiY2FsbF9vcmRlcnNcIikuc2l6ZSA+IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9kYWxJZD17dGhpcy5wcm9wcy5tb2RhbElkfVxuICAgICAgICAgICAgICAgIGRlYnRCYWxhbmNlT2JqPXtiaXRBc3NldEJhbGFuY2V9XG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbEJhbGFuY2VPYmo9e2NvcmVCYWxhbmNlfVxuICAgICAgICAgICAgICAgIGJhY2tpbmdBc3NldE9iaj17YmFja2luZ0Fzc2V0T2JqfVxuICAgICAgICAgICAgICAgIGRpc2FibGVIZWxwPXt0aGlzLnN0YXRlLnNtYWxsU2NyZWVufVxuICAgICAgICAgICAgICAgIGFjY291bnRPYmo9e2FjY291bnRPYmp9XG4gICAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4uLy4uL1V0aWxpdHkvRm9ybWF0dGVkQXNzZXRcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uLy4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JTdHlsZUd1aWRlXCI7XG5pbXBvcnQgRm9ybWF0dGVkUHJpY2UgZnJvbSBcIi4uLy4uL1V0aWxpdHkvRm9ybWF0dGVkUHJpY2VcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCBIZWxwQ29udGVudCBmcm9tIFwiLi4vLi4vVXRpbGl0eS9IZWxwQ29udGVudFwiO1xuaW1wb3J0IHtcbiAgICBDaGVja2JveCxcbiAgICBUb29sdGlwLFxuICAgIEZvcm0sXG4gICAgU2xpZGVyLFxuICAgIElucHV0LFxuICAgIEljb24sXG4gICAgUm93LFxuICAgIENvbFxufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XG5pbXBvcnQgYXNzZXRfdXRpbHMgZnJvbSBcIi4uLy4uLy4uL2xpYi9jb21tb24vYXNzZXRfdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJvcnJvd01vZGFsVmlldyh7XG4gICAgLy8gT2JqZWN0c1xuICAgIGFjY291bnRPYmosXG4gICAgYmFja2luZ0Fzc2V0T2JqLFxuICAgIGNvbGxhdGVyYWxCYWxhbmNlT2JqLFxuICAgIGRlYnRCYWxhbmNlT2JqLFxuICAgIHF1b3RlQXNzZXRPYmosXG4gICAgbmV3UG9zaXRpb24sXG4gICAgZXJyb3JzLFxuXG4gICAgLy8gU3RyaW5ncywgRmxvYXRzIGFuZCBOdW1iZXJzXG4gICAgY29sbGF0ZXJhbCxcbiAgICBjb2xsYXRlcmFsX3JhdGlvLFxuICAgIGRlYnRBbW91bnQsXG4gICAgYmFja2luZ1ByZWNpc2lvbixcbiAgICBtYWludGVuYW5jZVJhdGlvLFxuICAgIHJlbWFpbmluZ0JhY2tpbmdCYWxhbmNlLFxuICAgIHJlbWFpbmluZ0RlYnRCYWxhbmNlLFxuICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvLFxuICAgIHVubG9ja2VkSW5wdXRUeXBlLFxuXG4gICAgLy8gQm9vbCBGbGFnc1xuICAgIGRpc2FibGVIZWxwLFxuICAgIGlzUmF0aW9Mb2NrZWQsXG4gICAgaXNPcmlnaW5hbEJlbG93TUNSLFxuICAgIGlzUHJlZGljdGlvbk1hcmtldCxcbiAgICBpc1ZhbGlkLFxuICAgIHVzZVRhcmdldENvbGxhdGVyYWwsXG5cbiAgICAvLyBDYWxsYmFja3NcbiAgICBvblBheURlYnQsXG4gICAgb25NYXhpbWl6ZUNvbGxhdGVyZWFsLFxuICAgIG9uQm9ycm93Q2hhbmdlLFxuICAgIG9uTG9ja0NoYW5nZURlYnQsXG4gICAgb25Db2xsYXRlcmFsQ2hhbmdlLFxuICAgIG9uTG9ja0NoYW5nZUNvbGxhdGVyYWwsXG4gICAgb25SYXRpb0NoYW5nZSxcbiAgICBvbkxvY2tDaGFuZ2VDUixcbiAgICBvblNldFVzZVRDUixcbiAgICBvblRDUmF0aW9DaGFuZ2Vcbn0pIHtcbiAgICBsZXQgcXVvdGVQcmVjaXNpb24gPSB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKFxuICAgICAgICBxdW90ZUFzc2V0T2JqLmdldChcInByZWNpc2lvblwiKVxuICAgICk7XG5cbiAgICBjb25zdCB1c2VyRXhjaGFuZ2VQcmljZSA9IG5ld1Bvc2l0aW9uID8gKFxuICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgIG5vUG9wT3ZlclxuICAgICAgICAgICAgbm9UaXBcbiAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17bWFpbnRlbmFuY2VSYXRpbyAqIGRlYnRBbW91bnQgKiBxdW90ZVByZWNpc2lvbn1cbiAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtxdW90ZUFzc2V0T2JqLmdldChcImlkXCIpfVxuICAgICAgICAgICAgYmFzZV9hc3NldD17YmFja2luZ0Fzc2V0T2JqLmdldChcImlkXCIpfVxuICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2NvbGxhdGVyYWwgKiBiYWNraW5nUHJlY2lzaW9ufVxuICAgICAgICAvPlxuICAgICkgOiBudWxsO1xuXG4gICAgY29uc3Qgbm9WYWxpZENvbXBvbmVudCA9IChcbiAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiYm9ycm93Lm5vX3ZhbGlkXCJcbiAgICAgICAgICAgICAgICBhc3NldF9zeW1ib2w9e3F1b3RlQXNzZXRPYmouZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGNvbnN0IGJpdEFzc2V0QmFsYW5jZVRleHQgPSAoXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge2NvbGxhdGVyYWwgIT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25QYXlEZWJ0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImJvcnJvdy5wYXlfbWF4X2RlYnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+OntcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2RlYnRCYWxhbmNlT2JqLmlkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZW1haW5pbmdEZWJ0QmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17cXVvdGVBc3NldE9iai5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3F1b3RlQXNzZXRPYmouZ2V0KFwiaWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICBjb25zdCBiYWNraW5nQmFsYW5jZVRleHQgPSAoXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25NYXhpbWl6ZUNvbGxhdGVyZWFsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYm9ycm93LnVzZV9tYXhcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+OntcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2NvbGxhdGVyYWxCYWxhbmNlT2JqLmlkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZW1haW5pbmdCYWNraW5nQmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFja2luZ0Fzc2V0T2JqLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFja2luZ0Fzc2V0T2JqLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xuXG4gICAgcmV0dXJuICFpc1ZhbGlkID8gKFxuICAgICAgICBub1ZhbGlkQ29tcG9uZW50XG4gICAgKSA6IChcbiAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgIHtkaXNhYmxlSGVscCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wb25lbnRzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNQcmVkaWN0aW9uTWFya2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJCb3Jyb3dNb2RhbFByZWRpY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQm9ycm93TW9kYWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnQ9e3F1b3RlQXNzZXRPYmouZ2V0KFwic3ltYm9sXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbD17YmFja2luZ0Fzc2V0T2JqLmdldChcInN5bWJvbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcnJvd2VyPXthY2NvdW50T2JqLmdldChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBtcj17bWFpbnRlbmFuY2VSYXRpb31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshaXNQcmVkaWN0aW9uTWFya2V0ICYmIGlzT3JpZ2luYWxCZWxvd01DUiA/IChcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImg2XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYm9ycm93LmVycm9ycy5iZWxvd19pbmZvXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgIHshaXNQcmVkaWN0aW9uTWFya2V0ID8gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9ycm93LXByaWNlLWZlZWRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib3Jyb3ctcHJpY2UtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2FjdGlvbi5mZWVkX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e2Fzc2V0X3V0aWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHRyYWN0UmF3RmVlZFByaWNlKHF1b3RlQXNzZXRPYmopXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRJbihbXCJiYXNlXCIsIFwiYW1vdW50XCJdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17YXNzZXRfdXRpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4dHJhY3RSYXdGZWVkUHJpY2UocXVvdGVBc3NldE9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcImJhc2VcIiwgXCJhc3NldF9pZFwiXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17YXNzZXRfdXRpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4dHJhY3RSYXdGZWVkUHJpY2UocXVvdGVBc3NldE9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcInF1b3RlXCIsIFwiYXNzZXRfaWRcIl0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXthc3NldF91dGlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXh0cmFjdFJhd0ZlZWRQcmljZShxdW90ZUFzc2V0T2JqKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3Jyb3ctcHJpY2UtZmluYWwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcnMuYmVsb3dfbWFpbnRlbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImhhcy1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3JzLmNsb3NlX21haW50ZW5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaGFzLXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib3Jyb3ctcHJpY2UtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS55b3VyX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlckV4Y2hhbmdlUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zYWN0aW9uLmJvcnJvd19hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2RlYnRBbW91bnQudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQm9ycm93Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXtxdW90ZUFzc2V0T2JqLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAgICAgICBhc3NldHM9e1txdW90ZUFzc2V0T2JqLmdldChcImlkXCIpXX1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiaXRBc3NldEJhbGFuY2VUZXh0fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxuICAgICAgICAgICAgICAgICAgICBsb2NrU3RhdHVzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubG9ja2VkSW5wdXRUeXBlID09IFwiZGVidFwiIHx8IGlzUmF0aW9Mb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25Mb2NrQ2hhbmdlPXtvbkxvY2tDaGFuZ2VEZWJ0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2FjdGlvbi5jb2xsYXRlcmFsXCJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjb2xsYXRlcmFsLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNvbGxhdGVyYWxDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e2JhY2tpbmdBc3NldE9iai5nZXQoXCJpZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbYmFja2luZ0Fzc2V0T2JqLmdldChcImlkXCIpXX1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWNraW5nQmFsYW5jZVRleHR9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGxvY2tTdGF0dXM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5sb2NrZWRJbnB1dFR5cGUgPT0gXCJjb2xsYXRlcmFsXCIgfHwgaXNSYXRpb0xvY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvbkxvY2tDaGFuZ2U9e29uTG9ja0NoYW5nZUNvbGxhdGVyYWwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e2Vycm9ycy5jb2xsYXRlcmFsX2JhbGFuY2UgPyBcImVycm9yXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICBoZWxwPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5jb2xsYXRlcmFsX2JhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9ycy5jb2xsYXRlcmFsX2JhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgeyFpc1ByZWRpY3Rpb25NYXJrZXQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3Jyb3cuY29sbF9yYXRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5jbG9zZV9tYWludGVuYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3JzLmJlbG93X21haW50ZW5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuY2xvc2VfbWFpbnRlbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvcnMuY2xvc2VfbWFpbnRlbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvcnMuYmVsb3dfbWFpbnRlbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3JzLmJlbG93X21haW50ZW5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblJhdGlvQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdW5ib3JkZXJlZC1iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQmVmb3JlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzUmF0aW9Mb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzUmF0aW9Mb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInVubG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9ja0NoYW5nZUNSLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMjBweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy50Y3JfYmVsb3dfbWFpbnRlbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMudGNyX2JlbG93X21haW50ZW5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3JzLnRjcl9iZWxvd19tYWludGVuYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Lkdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiA4fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TZXRVc2VUQ1IuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dXNlVGFyZ2V0Q29sbGF0ZXJhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJib3Jyb3cuZW5hYmxlX3RhcmdldF9jb2xsYXRlcmFsX3JhdGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dC5Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZVRhcmdldENvbGxhdGVyYWwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmFOKHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblRDUmF0aW9DaGFuZ2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPXtcIlJhdGlvIFNsaWRlclwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXttYWludGVuYW5jZVJhdGlvICogMTJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb2xsYXRlcmFsX3JhdGlvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25SYXRpb0NoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzY3JvbGxfbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHNjcm9sbF9sZW5ndGg6IDlcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsX2xlbmd0aCA9IHByb3BzLnNjcm9sbF9sZW5ndGg7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Cb2R5Q2xpY2sgPSB0aGlzLm9uQm9keUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5wLmVudHJpZXMsIHRoaXMucHJvcHMuZW50cmllcykgfHxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucywgdGhpcy5zdGF0ZSkgfHxcbiAgICAgICAgICAgIG5wLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3NldExpc3RlbmVyKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuZW50cmllcy5sZW5ndGggPiAxICYmICF0aGlzLmxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25Cb2R5Q2xpY2ssIHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9yZW1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkJvZHlDbGljayk7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhucCkge1xuICAgICAgICBpZiAobnAuZW50cmllcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobnAuZW50cmllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRMaXN0ZW5lcihucCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBvbkJvZHlDbGljayhlKSB7XG4gICAgICAgIGxldCBlbCA9IGUudGFyZ2V0O1xuICAgICAgICBsZXQgaW5zaWRlQWN0aW9uU2hlZXQgPSBmYWxzZTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0ICYmXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd25cIikgJiZcbiAgICAgICAgICAgICAgICBlbC5pZCA9PT0gdGhpcy5wcm9wcy5pZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaW5zaWRlQWN0aW9uU2hlZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgoZWwgPSBlbC5wYXJlbnROb2RlKSk7XG5cbiAgICAgICAgaWYgKCFpbnNpZGVBY3Rpb25TaGVldCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOiBmYWxzZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlLCBlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlOiAhdGhpcy5zdGF0ZS5hY3RpdmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7ZW50cmllcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHthY3RpdmV9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkcm9wZG93bi13cmFwcGVyIGluYWN0aXZlXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMudXBwZXJDYXNlID8gXCIgdXBwZXItY2FzZVwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpbmdsZUVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLnNpbmdsZUVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlbnRyaWVzWzBdfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGVudHJpZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy51cHBlckNhc2UgPyBcInVwcGVyLWNhc2VcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNoYW5nZS5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZXNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVEcm9wZG93bi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkcm9wZG93bi13cmFwcGVyXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMudXBwZXJDYXNlID8gXCIgdXBwZXItY2FzZVwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdSaWdodDogMTV9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZSA/IHZhbHVlIDogPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+QTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMubGVuZ3RoID4gdGhpcy5wcm9wcy5zY3JvbGxfbGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=