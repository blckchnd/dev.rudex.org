(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[19],{

/***/ 2855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(742);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2012);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2380);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2013);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(580);
/* harmony import */ var api_WalletApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(611);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(614);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(591);
/* harmony import */ var _View_BorrowModalView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2856);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2148);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_14__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















/**
 *  Given an account and an asset id, render a modal allowing modification of a margin position for that asset
 *
 *  Expected Properties:
 *     quoteAssetObj:  asset id, must be a bitasset
 *     accountObj: full_account object for the account to use
 *
 */

var BorrowModalContent = function (_React$Component) {
    _inherits(BorrowModalContent, _React$Component);

    function BorrowModalContent(props) {
        _classCallCheck(this, BorrowModalContent);

        var _this = _possibleConstructorReturn(this, (BorrowModalContent.__proto__ || Object.getPrototypeOf(BorrowModalContent)).call(this, props));

        _this.state = _this._initialState(props);

        _this._onSubmit = _this._onSubmit.bind(_this);
        return _this;
    }

    _createClass(BorrowModalContent, [{
        key: "_initialState",
        value: function _initialState(props) {
            var currentPosition = props ? this._getCurrentPosition(props) : {};

            if (currentPosition.collateral) {
                var debt = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_amount(currentPosition.debt, props.quoteAssetObj);
                var collateral = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_amount(currentPosition.collateral, props.backingAssetObj);

                var target_collateral_ratio = !isNaN(currentPosition.target_collateral_ratio) ? currentPosition.target_collateral_ratio / 1000 : 0;

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
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a.rebuild();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var newState = this._initialState(this.props);

            this.setState(newState);
            this._setUpdatedPosition(newState);
            // set max on mount todo: discuss if feasible default
            // this._maximizeCollateral();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.visible !== nextProps.visible || !common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].are_equal_shallow(nextState, this.state) || !immutable__WEBPACK_IMPORTED_MODULE_10___default.a.is(nextProps.quoteAssetObj, this.props.quoteAssetObj) || !nextProps.backingAssetObj.get("symbol") === this.props.backingAssetObj.get("symbol") || !immutable__WEBPACK_IMPORTED_MODULE_10___default.a.is(nextProps.accountObj, this.props.accountObj) || !immutable__WEBPACK_IMPORTED_MODULE_10___default.a.is(nextProps.call_orders, this.props.call_orders) || this.state.unlockedInputType !== nextState.unlockedInputType;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _state = this.state,
                debtAmount = _state.debtAmount,
                collateral = _state.collateral,
                collateral_ratio = _state.collateral_ratio;


            if (nextProps.accountObj !== this.props.accountObj || nextProps.hasCallOrders !== this.props.hasCallOrders || nextProps.quoteAssetObj.get("id") !== this.props.quoteAssetObj.get("id")) {
                var newState = this._initialState(nextProps);

                var revalidate = false;
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
    }, {
        key: "_getInitialErrors",
        value: function _getInitialErrors() {
            return {
                collateral_balance: null,
                ratio_too_high: null
            };
        }
    }, {
        key: "_getMaintenanceRatio",
        value: function _getMaintenanceRatio() {
            return this.props.quoteAssetObj.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;
        }
    }, {
        key: "confirmClicked",
        value: function confirmClicked(e) {
            e.preventDefault();
            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish(this.props.modalId, "close");
        }
    }, {
        key: "_onBorrowChange",
        value: function _onBorrowChange(e) {
            var feed_price = this._getFeedPrice();
            var amount = e.amount.replace(/,/g, "");

            var collateral = !this.state.isRatioLocked ? this.state.collateral : (this.state.collateral_ratio * (amount / feed_price).toFixed(this.props.backingAssetObj.get("precision"))).toFixed(this.props.backingAssetObj.get("precision"));

            var collateral_ratio = this.state.isRatioLocked ? this.state.collateral_ratio : this.state.collateral / (amount / feed_price);

            var newState = {
                debtAmount: amount,
                collateral: collateral,
                collateral_ratio: collateral_ratio
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_onCollateralChange",
        value: function _onCollateralChange(e) {
            var _state2 = this.state,
                isRatioLocked = _state2.isRatioLocked,
                collateral_ratio = _state2.collateral_ratio;

            var amount = e.amount.replace(/,/g, "");

            var feed_price = this._getFeedPrice();
            var collateralRatio = !isRatioLocked ? amount / (this.state.debtAmount / feed_price) : collateral_ratio;

            var debtAmount = !isRatioLocked ? this.state.debtAmount : (amount * feed_price / collateralRatio).toFixed(this.props.backingAssetObj.get("precision"));

            var newState = this._isPredictionMarket(this.props) ? {
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
    }, {
        key: "_onTargetRatioChange",
        value: function _onTargetRatioChange(e) {
            var target = e.target.value;
            // Ensure input is valid
            var regexp_numeral = new RegExp(/[[:digit:]]/);
            if (!regexp_numeral.test(target)) {
                target = target.replace(/[^0-9.]/g, "");
            }

            var newState = {
                target_collateral_ratio: target
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_onRatioChange",
        value: function _onRatioChange(e) {
            var feed_price = this._getFeedPrice();
            var debtAmount = void 0;
            var collateral = void 0;
            var ratio = 0;

            if (e.target) {
                // Ensure input is valid
                var regexp_numeral = new RegExp(/[[:digit:]]/);
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

            var newState = {
                debtAmount: debtAmount,
                collateral: collateral,
                collateral_ratio: ratio
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_maximizeCollateral",
        value: function _maximizeCollateral() {
            var currentPosition = this.props ? this._getCurrentPosition(this.props) : {};
            var initialCollateralTyped = 0;
            if (currentPosition.collateral) {
                initialCollateralTyped = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].convert_satoshi_to_typed(currentPosition.collateral, this.props.backingAssetObj);
            }

            var backingAssetBalanceTyped = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].convert_satoshi_to_typed(this.props.collateralBalanceObj.get("balance"), this.props.backingAssetObj);

            // make sure we don't go over the maximum available collateral balance, and also not negative
            var maximizedCollateral = Math.max(Math.floor(backingAssetBalanceTyped + initialCollateralTyped - 10), 0);

            this._onCollateralChange(new Object({ amount: maximizedCollateral.toString() }));
        }

        // Usage?

    }, {
        key: "_maximizeDebt",
        value: function _maximizeDebt() {
            var currentPosition = this.props ? this._getCurrentPosition(this.props) : {};
            var initialCollateral = 0;

            if (currentPosition.collateral) {
                initialCollateral = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_amount(currentPosition.collateral, this.props.backingAssetObj);
            }

            var maximumCollateral = this.props.collateralBalanceObj.get("balance") / common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(this.props.backingAssetObj) + initialCollateral - 10;
            var debtAmount = maximumCollateral / this.state.collateral_ratio * this._getFeedPrice();

            var newState = {
                debtAmount: debtAmount,
                collateral: maximumCollateral,
                collateral_ratio: this.state.collateral_ratio
            };

            this.setState(newState);
            this._validateFields(newState);
            this._setUpdatedPosition(newState);
        }
    }, {
        key: "_payDebt",
        value: function _payDebt() {
            var currentPosition = this.props ? this._getCurrentPosition(this.props) : { debt: 0 };

            if (currentPosition.debt <= 0) {
                return;
            }

            var debtAmount = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_amount(Math.max(currentPosition.debt - this.props.debtBalanceObj.get("balance"), 0), this.props.quoteAssetObj);

            this._onBorrowChange({
                amount: debtAmount.toString()
            });
        }
    }, {
        key: "_setUpdatedPosition",
        value: function _setUpdatedPosition(newState) {
            this.setState({
                newPosition: parseFloat(newState.debtAmount) / parseFloat(newState.collateral)
            });
        }
    }, {
        key: "_validateFields",
        value: function _validateFields(newState) {
            var errors = this._getInitialErrors();
            var original_position = this.state.original_position;

            var collateralBalanceObj = !this.props.collateralBalanceObj ? { balance: 0 } : this.props.collateralBalanceObj.toJS();

            var maintenanceRatio = this._getMaintenanceRatio();
            var originalCR = this._getCollateralRatio(original_position.debt, original_position.collateral);
            var isOriginalBelowMCR = original_position.collateral > 0 && originalCR < maintenanceRatio;

            if (parseFloat(newState.collateral) - original_position.collateral > common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_amount(collateralBalanceObj.balance, this.props.backingAssetObj.toJS())) {
                errors.collateral_balance = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("borrow.errors.collateral");
            }

            if (newState.target_collateral_ratio && newState.target_collateral_ratio < maintenanceRatio) {
                errors.tcr_below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("borrow.errors.below_mcr_tcr", { mr: maintenanceRatio });
            }

            if (isOriginalBelowMCR && newState.debtAmount > original_position.debt) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("borrow.errors.increased_debt_on_margin_call");
            } else if (isOriginalBelowMCR && parseFloat(newState.collateral_ratio) <= parseFloat(originalCR)) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("borrow.errors.below_ratio_mcr_update", { ocr: originalCR.toFixed(4) });
            } else if (!isOriginalBelowMCR && parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : maintenanceRatio)) {
                errors.below_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("borrow.errors.below", { mr: maintenanceRatio });
            } else if (parseFloat(newState.collateral_ratio) < (this._isPredictionMarket(this.props) ? 1 : maintenanceRatio + 0.5)) {
                errors.close_maintenance = counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("borrow.errors.close", { mr: maintenanceRatio });
            }

            this.setState({ errors: errors });
        }
    }, {
        key: "_onSubmit",
        value: function _onSubmit(e) {
            e.preventDefault();

            this.props.hideModal();

            var quotePrecision = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(this.props.quoteAssetObj.get("precision"));
            var backingPrecision = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(this.props.backingAssetObj.get("precision"));
            var currentPosition = this._getCurrentPosition(this.props);

            var isTCR = typeof this.state.target_collateral_ratio !== "undefined" && this.state.target_collateral_ratio > 0 && this.state.useTargetCollateral ? true : false;

            var extensionsProp = false;

            if (isTCR) {
                extensionsProp = {
                    target_collateral_ratio: parseInt(this.state.target_collateral_ratio * 1000, 10)
                };
            }

            var delta_collateral_amount = parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10);
            var delta_debt_amount = parseInt(this.state.debtAmount * quotePrecision - currentPosition.debt, 10);

            // Amount can not be 0
            if (delta_collateral_amount == 0 && delta_debt_amount == 0) {
                delta_collateral_amount = 1;
            }

            var tr = api_WalletApi__WEBPACK_IMPORTED_MODULE_7__["default"].new_transaction();
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
            stores_WalletDb__WEBPACK_IMPORTED_MODULE_8__["default"].process_transaction(tr, null, true).catch(function (err) {
                if (false) {}
            });

            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish(this.props.modalId, "close");
        }
    }, {
        key: "_getCurrentPosition",
        value: function _getCurrentPosition(props) {
            var currentPosition = {
                collateral: null,
                debt: null
            };

            if (props && props.hasCallOrders && props.call_orders) {
                currentPosition = props.call_orders.filter(function (a) {
                    return !!a;
                }).find(function (a) {
                    return a.getIn(["call_price", "quote", "asset_id"]) === props.quoteAssetObj.get("id");
                });

                currentPosition = !!currentPosition ? currentPosition.toJS() : {
                    collateral: null,
                    debt: null
                };
            }
            return currentPosition;
        }
    }, {
        key: "_getFeedPrice",
        value: function _getFeedPrice() {
            if (!this.props) {
                return 1;
            }

            if (this._isPredictionMarket(this.props)) {
                return 1;
            }

            return 1 / common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_price(_lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(this.props.quoteAssetObj).getIn(["quote", "amount"]), this.props.backingAssetObj, _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_12__["default"].extractRawFeedPrice(this.props.quoteAssetObj).getIn(["base", "amount"]), this.props.quoteAssetObj);
        }
    }, {
        key: "_getInitialCollateralRatio",
        value: function _getInitialCollateralRatio(props) {
            return this._isPredictionMarket(props) ? 1 : this._getMaintenanceRatio() * 2;
        }
    }, {
        key: "_getCollateralRatio",
        value: function _getCollateralRatio(debt, collateral) {
            return collateral / (debt / this._getFeedPrice());
        }
    }, {
        key: "_isPredictionMarket",
        value: function _isPredictionMarket(props) {
            return props.quoteAssetObj.getIn(["bitasset", "is_prediction_market"]);
        }
    }, {
        key: "_setUseTargetCollateral",
        value: function _setUseTargetCollateral() {
            this.setState({
                useTargetCollateral: !this.state.useTargetCollateral
            });
        }
    }, {
        key: "_onLockChange",
        value: function _onLockChange(type) {
            this.setState({
                isRatioLocked: false,
                unlockedInputType: type
            });
        }
    }, {
        key: "_onLockCR",
        value: function _onLockCR() {
            this.setState({
                isRatioLocked: !this.state.isRatioLocked
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                quoteAssetObj = _props.quoteAssetObj,
                backingAssetObj = _props.backingAssetObj,
                debtBalanceObj = _props.debtBalanceObj,
                collateralBalanceObj = _props.collateralBalanceObj;
            var _state3 = this.state,
                debtAmount = _state3.debtAmount,
                collateral = _state3.collateral,
                collateral_ratio = _state3.collateral_ratio,
                target_collateral_ratio = _state3.target_collateral_ratio,
                errors = _state3.errors,
                original_position = _state3.original_position,
                useTargetCollateral = _state3.useTargetCollateral;


            if (!collateral_ratio || isNaN(collateral_ratio) || !(collateral_ratio > 0.0 && collateral_ratio < 1000.0)) {
                collateral_ratio = 0;
            }

            // Ensure we don't get massive decimal placement
            if (collateral_ratio.toString().indexOf(".") != -1 && collateral_ratio.toString().split(".")[1].length > 2) {
                collateral_ratio = collateral_ratio.toString().split(".")[0] + "." + collateral_ratio.toString().split(".")[1].substr(0, 2);
            }

            if (target_collateral_ratio.toString().indexOf(".") != -1 && target_collateral_ratio.toString().split(".")[1].length > 2) {
                target_collateral_ratio = target_collateral_ratio.toString().split(".")[0] + "." + target_collateral_ratio.toString().split(".")[1].substr(0, 2);
            }

            debtBalanceObj = !debtBalanceObj ? { balance: 0, id: null } : debtBalanceObj.toJS();

            collateralBalanceObj = !collateralBalanceObj ? { balance: 0, id: null } : collateralBalanceObj.toJS();

            var backingPrecision = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(this.props.backingAssetObj.get("precision"));
            var debtPrecision = common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].get_asset_precision(this.props.quoteAssetObj.get("precision"));

            // Dynamically update user's remaining collateral
            var currentPosition = this._getCurrentPosition(this.props);
            var collateralChange = parseInt(this.state.collateral * backingPrecision - currentPosition.collateral, 10);

            var debtChange = parseInt(this.state.debtAmount * debtPrecision - currentPosition.debt, 10);

            var remainingBackingBalance = collateralBalanceObj.balance - collateralChange;
            var remainingDebtBalance = debtBalanceObj.balance + debtChange;

            var feed_price = this._getFeedPrice();

            var maintenanceRatio = this._getMaintenanceRatio();

            var isPredictionMarket = this._isPredictionMarket(this.props);

            var isOriginalBelowMCR = original_position.collateral > 0 && this._getCollateralRatio(original_position.debt, original_position.collateral) < maintenanceRatio;

            var footer = [];

            var resetModal = function resetModal() {
                _this2.setState(_this2._initialState(_this2.props));
            };

            if (!isPredictionMarket && isNaN(feed_price)) {
                footer.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Button"],
                    { tabIndex: 6, onClick: this.props.hideModal },
                    counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("accountObj.perm.cancel")
                ));
            } else {
                footer.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Button"],
                    {
                        tabIndex: 6,
                        key: "submit",
                        type: "primary",
                        onClick: this._onSubmit
                    },
                    counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("borrow.adjust")
                ));
                footer.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Button"],
                    { tabIndex: 7, key: "cancel", onClick: resetModal },
                    counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("wallet.reset")
                ));
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Modal"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("borrow.title", {
                        asset_symbol: quoteAssetObj.get("symbol")
                    }),
                    visible: this.props.visible,
                    onCancel: this.props.hideModal,
                    footer: footer
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_View_BorrowModalView__WEBPACK_IMPORTED_MODULE_13__["BorrowModalView"]
                // Objects
                , { accountObj: this.props.accountObj,
                    backingAssetObj: backingAssetObj,
                    collateralBalanceObj: collateralBalanceObj,
                    debtBalanceObj: debtBalanceObj,
                    quoteAssetObj: quoteAssetObj,
                    newPosition: this.state.newPosition || null,
                    errors: errors
                    // Strings, Floats and Numbers
                    , collateral: collateral,
                    collateral_ratio: collateral_ratio,
                    debtAmount: debtAmount,
                    backingPrecision: backingPrecision,
                    maintenanceRatio: maintenanceRatio,
                    remainingBackingBalance: remainingBackingBalance,
                    remainingDebtBalance: remainingDebtBalance,
                    target_collateral_ratio: target_collateral_ratio,
                    unlockedInputType: this.state.unlockedInputType
                    // Bool Flags
                    , disableHelp: this.props.disableHelp,
                    isRatioLocked: this.state.isRatioLocked,
                    isOriginalBelowMCR: isOriginalBelowMCR,
                    isPredictionMarket: isPredictionMarket,
                    isValid: isPredictionMarket || !isPredictionMarket && !isNaN(feed_price),
                    useTargetCollateral: useTargetCollateral
                    // Actions
                    , onBorrowChange: this._onBorrowChange.bind(this),
                    onCollateralChange: this._onCollateralChange.bind(this),
                    onMaximizeCollatereal: this._maximizeCollateral.bind(this),
                    onRatioChange: this._onRatioChange.bind(this),
                    onLockChangeCR: this._onLockCR.bind(this),
                    onLockChangeCollateral: this._onLockChange.bind(this, "debt"),
                    onLockChangeDebt: this._onLockChange.bind(this, "collateral"),
                    onPayDebt: this._payDebt.bind(this),
                    onTCRatioChange: this._onTargetRatioChange.bind(this),
                    onSetUseTCR: this._setUseTargetCollateral.bind(this)
                })
            );
        }
    }]);

    return BorrowModalContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BorrowModalContent.propTypes = {
    quoteAssetObj: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired,
    backingAssetObj: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset.isRequired,
    debtBalanceObj: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject,
    collateralBalanceObj: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObject,
    call_orders: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainObjectsList,
    hasCallOrders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

BorrowModalContent = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(BorrowModalContent);

BorrowModalContent = react_debounce_render__WEBPACK_IMPORTED_MODULE_14___default()(BorrowModalContent, 50, {
    leading: false
});

/* This wrapper class appears to be necessary because the decorator eats the show method from refs */

var ModalWrapper = function (_React$Component2) {
    _inherits(ModalWrapper, _React$Component2);

    function ModalWrapper() {
        _classCallCheck(this, ModalWrapper);

        var _this3 = _possibleConstructorReturn(this, (ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call(this));

        _this3.state = {
            smallScreen: false,
            open: false
        };
        return _this3;
    }

    _createClass(ModalWrapper, [{
        key: "show",
        value: function show() {
            this.props.showModal();
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                smallScreen: window.innerHeight <= 800
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                quoteAssetObj = _props2.quoteAssetObj,
                backingAssetObj = _props2.backingAssetObj,
                accountObj = _props2.accountObj;

            var accountObjBalance = accountObj.get("balances").toJS();
            var coreBalance = void 0,
                bitAssetBalance = void 0;

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

            return this.props.visible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BorrowModalContent, {
                visible: this.props.visible,
                hideModal: this.props.hideModal,
                showModal: this.props.showModal,
                quoteAssetObj: quoteAssetObj,
                call_orders: accountObj.get("call_orders", Object(immutable__WEBPACK_IMPORTED_MODULE_10__["List"])()).toList(),
                hasCallOrders: accountObj.get("call_orders") && accountObj.get("call_orders").size > 0,
                modalId: this.props.modalId,
                debtBalanceObj: bitAssetBalance,
                collateralBalanceObj: coreBalance,
                backingAssetObj: backingAssetObj,
                disableHelp: this.state.smallScreen,
                accountObj: accountObj
            }) : null;
        }
    }]);

    return ModalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ModalWrapper);

/***/ }),

/***/ 2856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowModalView", function() { return BorrowModalView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2156);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2135);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2455);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_HelpContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2173);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(591);











function BorrowModalView(_ref) {
    var accountObj = _ref.accountObj,
        backingAssetObj = _ref.backingAssetObj,
        collateralBalanceObj = _ref.collateralBalanceObj,
        debtBalanceObj = _ref.debtBalanceObj,
        quoteAssetObj = _ref.quoteAssetObj,
        newPosition = _ref.newPosition,
        errors = _ref.errors,
        collateral = _ref.collateral,
        collateral_ratio = _ref.collateral_ratio,
        debtAmount = _ref.debtAmount,
        backingPrecision = _ref.backingPrecision,
        maintenanceRatio = _ref.maintenanceRatio,
        remainingBackingBalance = _ref.remainingBackingBalance,
        remainingDebtBalance = _ref.remainingDebtBalance,
        target_collateral_ratio = _ref.target_collateral_ratio,
        unlockedInputType = _ref.unlockedInputType,
        disableHelp = _ref.disableHelp,
        isRatioLocked = _ref.isRatioLocked,
        isOriginalBelowMCR = _ref.isOriginalBelowMCR,
        isPredictionMarket = _ref.isPredictionMarket,
        isValid = _ref.isValid,
        useTargetCollateral = _ref.useTargetCollateral,
        onPayDebt = _ref.onPayDebt,
        onMaximizeCollatereal = _ref.onMaximizeCollatereal,
        onBorrowChange = _ref.onBorrowChange,
        onLockChangeDebt = _ref.onLockChangeDebt,
        onCollateralChange = _ref.onCollateralChange,
        onLockChangeCollateral = _ref.onLockChangeCollateral,
        onRatioChange = _ref.onRatioChange,
        onLockChangeCR = _ref.onLockChangeCR,
        onSetUseTCR = _ref.onSetUseTCR,
        onTCRatioChange = _ref.onTCRatioChange;

    var quotePrecision = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].get_asset_precision(quoteAssetObj.get("precision"));

    var userExchangePrice = newPosition ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
        noPopOver: true,
        noTip: true,
        quote_amount: maintenanceRatio * debtAmount * quotePrecision,
        quote_asset: quoteAssetObj.get("id"),
        base_asset: backingAssetObj.get("id"),
        base_amount: collateral * backingPrecision
    }) : null;

    var noValidComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "div",
        { style: { textAlign: "center" } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
            component: "h3",
            content: "borrow.no_valid",
            asset_symbol: quoteAssetObj.get("symbol")
        })
    );

    var bitAssetBalanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "span",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "span",
            null,
            collateral != 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                    component: "a",
                    onClick: onPayDebt.bind(this),
                    content: "borrow.pay_max_debt"
                }),
                "\xA0"
            ) : null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { component: "span", content: "transfer.available" }),
            ":",
            " ",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                debtBalanceObj.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    amount: remainingDebtBalance,
                    asset: quoteAssetObj.get("id")
                }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    amount: 0,
                    asset: quoteAssetObj.get("id")
                })
            )
        )
    );

    var backingBalanceText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "span",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "span",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                    component: "a",
                    onClick: onMaximizeCollatereal.bind(this),
                    content: "borrow.use_max"
                }),
                "\xA0"
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { component: "span", content: "transfer.available" }),
            ":",
            " ",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                collateralBalanceObj.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    amount: remainingBackingBalance,
                    asset: backingAssetObj.get("id")
                }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    amount: 0,
                    asset: backingAssetObj.get("id")
                })
            )
        )
    );

    return !isValid ? noValidComponent : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "div",
        { style: { textAlign: "left" } },
        disableHelp ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
                style: {
                    paddingBottom: "1rem"
                }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_HelpContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
                path: "components/" + (isPredictionMarket ? "BorrowModalPrediction" : "BorrowModal"),
                debt: quoteAssetObj.get("symbol"),
                collateral: backingAssetObj.get("symbol"),
                borrower: accountObj.get("name"),
                mr: maintenanceRatio
            })
        ),
        !isPredictionMarket && isOriginalBelowMCR ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
            component: "h6",
            className: "has-warning",
            content: "borrow.errors.below_info"
        }) : null,
        !isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
                style: {
                    paddingTop: "1rem",
                    paddingBottom: "1rem"
                }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "borrow-price-feeds" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "borrow-price-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "transaction.feed_price" }),
                    ":\xA0"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    noPopOver: true,
                    quote_amount: _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].extractRawFeedPrice(quoteAssetObj).getIn(["base", "amount"]),
                    quote_asset: _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].extractRawFeedPrice(quoteAssetObj).getIn(["base", "asset_id"]),
                    base_asset: _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].extractRawFeedPrice(quoteAssetObj).getIn(["quote", "asset_id"]),
                    base_amount: _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_9__["default"].extractRawFeedPrice(quoteAssetObj).getIn(["quote", "amount"])
                })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "borrow-price-final " + (errors.below_maintenance ? "has-error" : errors.close_maintenance ? "has-warning" : "")
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "borrow-price-label" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "exchange.your_price" }),
                    ":\xA0"
                ),
                userExchangePrice
            )
        ) : null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Form"],
            { className: "full-width", layout: "vertical" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
            }),
            !isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Row"],
                    { gutter: 16 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Col"],
                        { span: 12 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Form"].Item,
                            {
                                label: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("borrow.coll_ratio"),
                                validateStatus: errors.close_maintenance ? "warning" : errors.below_maintenance ? "error" : null,
                                help: errors.close_maintenance ? errors.close_maintenance : errors.below_maintenance ? errors.below_maintenance : null
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Input"], {
                                value: collateral_ratio == 0 ? "" : collateral_ratio,
                                tabIndex: 3,
                                onChange: onRatioChange.bind(this),
                                className: "input-group-unbordered-before",
                                addonBefore: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
                                    className: !isRatioLocked ? "grey" : "green",
                                    type: !isRatioLocked ? "unlock" : "lock",
                                    onClick: onLockChangeCR.bind(this),
                                    style: { fontSize: "20px" }
                                })
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Col"],
                        { span: 12 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Form"].Item,
                            {
                                validateStatus: errors.tcr_below_maintenance ? "error" : "",
                                help: errors.tcr_below_maintenance ? errors.tcr_below_maintenance : null
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Input"].Group,
                                {
                                    compact: true,
                                    style: { marginBottom: 8 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Checkbox"],
                                    {
                                        onClick: onSetUseTCR.bind(this),
                                        checked: useTargetCollateral,
                                        tabIndex: 4
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: "borrow.enable_target_collateral_ratio" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.target_collateral_ratio")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Icon"], { type: "question-circle" })
                                )
                            ),
                            useTargetCollateral ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Input"], {
                                value: isNaN(target_collateral_ratio) ? "0" : target_collateral_ratio,
                                tabIndex: 5,
                                onChange: onTCRatioChange.bind(this)
                            }) : null
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Form"].Item,
                    { label: "Ratio Slider" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Slider"], {
                        step: 0.01,
                        min: 0,
                        max: maintenanceRatio * 12,
                        value: collateral_ratio,
                        onChange: onRatioChange.bind(this)
                    })
                )
            ) : null
        )
    );
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leGNoYW5nZX5zZXR0aW5ncy5lNjgwYmJjN2Y1OTA5MjI5MjA2OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Nb2RhbC9Cb3Jyb3dNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL01vZGFsL1ZpZXcvQm9ycm93TW9kYWxWaWV3LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFpmQXBpIGZyb20gXCJyZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2ZvdW5kYXRpb24tYXBpXCI7XHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi4vVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBXYWxsZXRBcGkgZnJvbSBcImFwaS9XYWxsZXRBcGlcIjtcclxuaW1wb3J0IFdhbGxldERiIGZyb20gXCJzdG9yZXMvV2FsbGV0RGJcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcclxuaW1wb3J0IHtMaXN0fSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcbmltcG9ydCB7TW9kYWwsIEJ1dHRvbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgYXNzZXRfdXRpbHMgZnJvbSBcIi4uLy4uL2xpYi9jb21tb24vYXNzZXRfdXRpbHNcIjtcclxuaW1wb3J0IHtCb3Jyb3dNb2RhbFZpZXd9IGZyb20gXCIuL1ZpZXcvQm9ycm93TW9kYWxWaWV3XCI7XHJcbmltcG9ydCBkZWJvdW5jZVJlbmRlciBmcm9tIFwicmVhY3QtZGVib3VuY2UtcmVuZGVyXCI7XHJcblxyXG4vKipcclxuICogIEdpdmVuIGFuIGFjY291bnQgYW5kIGFuIGFzc2V0IGlkLCByZW5kZXIgYSBtb2RhbCBhbGxvd2luZyBtb2RpZmljYXRpb24gb2YgYSBtYXJnaW4gcG9zaXRpb24gZm9yIHRoYXQgYXNzZXRcclxuICpcclxuICogIEV4cGVjdGVkIFByb3BlcnRpZXM6XHJcbiAqICAgICBxdW90ZUFzc2V0T2JqOiAgYXNzZXQgaWQsIG11c3QgYmUgYSBiaXRhc3NldFxyXG4gKiAgICAgYWNjb3VudE9iajogZnVsbF9hY2NvdW50IG9iamVjdCBmb3IgdGhlIGFjY291bnQgdG8gdXNlXHJcbiAqXHJcbiAqL1xyXG5cclxuY2xhc3MgQm9ycm93TW9kYWxDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgcXVvdGVBc3NldE9iajogQ2hhaW5UeXBlcy5DaGFpbkFzc2V0LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgYmFja2luZ0Fzc2V0T2JqOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZCxcclxuICAgICAgICBkZWJ0QmFsYW5jZU9iajogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdCxcclxuICAgICAgICBjb2xsYXRlcmFsQmFsYW5jZU9iajogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdCxcclxuICAgICAgICBjYWxsX29yZGVyczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdHNMaXN0LFxyXG4gICAgICAgIGhhc0NhbGxPcmRlcnM6IFByb3BUeXBlcy5ib29sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9pbml0aWFsU3RhdGUocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLl9vblN1Ym1pdCA9IHRoaXMuX29uU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRpYWxTdGF0ZShwcm9wcykge1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSBwcm9wcyA/IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbihwcm9wcykgOiB7fTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWJ0ID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5kZWJ0LFxyXG4gICAgICAgICAgICAgICAgcHJvcHMucXVvdGVBc3NldE9ialxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgY29sbGF0ZXJhbCA9IHV0aWxzLmdldF9hc3NldF9hbW91bnQoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcclxuICAgICAgICAgICAgICAgIHByb3BzLmJhY2tpbmdBc3NldE9ialxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvID0gIWlzTmFOKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgID8gY3VycmVudFBvc2l0aW9uLnRhcmdldF9jb2xsYXRlcmFsX3JhdGlvIC8gMTAwMFxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRlYnRBbW91bnQ6IGRlYnQgPyBkZWJ0LnRvU3RyaW5nKCkgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbDogY29sbGF0ZXJhbCA/IGNvbGxhdGVyYWwudG9TdHJpbmcoKSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiB0aGlzLl9nZXRDb2xsYXRlcmFsUmF0aW8oZGVidCwgY29sbGF0ZXJhbCksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbzogdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8sXHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IHRoaXMuX2dldEluaXRpYWxFcnJvcnMoKSxcclxuICAgICAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWw6IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvID4gMCA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVidDogZGVidCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiBjb2xsYXRlcmFsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvOiB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVubG9ja2VkSW5wdXRUeXBlOiBcImNvbGxhdGVyYWxcIixcclxuICAgICAgICAgICAgICAgIGlzUmF0aW9Mb2NrZWQ6IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGVidEFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IDAsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiB0aGlzLl9nZXRJbml0aWFsQ29sbGF0ZXJhbFJhdGlvKHByb3BzKSxcclxuICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvOiB0aGlzLl9nZXRNYWludGVuYW5jZVJhdGlvKCksXHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IHRoaXMuX2dldEluaXRpYWxFcnJvcnMoKSxcclxuICAgICAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWJ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1bmxvY2tlZElucHV0VHlwZTogXCJkZWJ0XCIsXHJcbiAgICAgICAgICAgICAgICBpc1JhdGlvTG9ja2VkOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBSZWFjdFRvb2x0aXAucmVidWlsZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuX2luaXRpYWxTdGF0ZSh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fc2V0VXBkYXRlZFBvc2l0aW9uKG5ld1N0YXRlKTtcclxuICAgICAgICAvLyBzZXQgbWF4IG9uIG1vdW50IHRvZG86IGRpc2N1c3MgaWYgZmVhc2libGUgZGVmYXVsdFxyXG4gICAgICAgIC8vIHRoaXMuX21heGltaXplQ29sbGF0ZXJhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudmlzaWJsZSAhPT0gbmV4dFByb3BzLnZpc2libGUgfHxcclxuICAgICAgICAgICAgIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSkgfHxcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMucXVvdGVBc3NldE9iaiwgdGhpcy5wcm9wcy5xdW90ZUFzc2V0T2JqKSB8fFxyXG4gICAgICAgICAgICAhbmV4dFByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJzeW1ib2xcIikgPT09XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJzeW1ib2xcIikgfHxcclxuICAgICAgICAgICAgIUltbXV0YWJsZS5pcyhuZXh0UHJvcHMuYWNjb3VudE9iaiwgdGhpcy5wcm9wcy5hY2NvdW50T2JqKSB8fFxyXG4gICAgICAgICAgICAhSW1tdXRhYmxlLmlzKG5leHRQcm9wcy5jYWxsX29yZGVycywgdGhpcy5wcm9wcy5jYWxsX29yZGVycykgfHxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS51bmxvY2tlZElucHV0VHlwZSAhPT0gbmV4dFN0YXRlLnVubG9ja2VkSW5wdXRUeXBlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHtkZWJ0QW1vdW50LCBjb2xsYXRlcmFsLCBjb2xsYXRlcmFsX3JhdGlvfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbmV4dFByb3BzLmFjY291bnRPYmogIT09IHRoaXMucHJvcHMuYWNjb3VudE9iaiB8fFxyXG4gICAgICAgICAgICBuZXh0UHJvcHMuaGFzQ2FsbE9yZGVycyAhPT0gdGhpcy5wcm9wcy5oYXNDYWxsT3JkZXJzIHx8XHJcbiAgICAgICAgICAgIG5leHRQcm9wcy5xdW90ZUFzc2V0T2JqLmdldChcImlkXCIpICE9PVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0T2JqLmdldChcImlkXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuX2luaXRpYWxTdGF0ZShuZXh0UHJvcHMpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJldmFsaWRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGRlYnRBbW91bnQgfHwgY29sbGF0ZXJhbCB8fCBjb2xsYXRlcmFsX3JhdGlvKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5kZWJ0QW1vdW50ID0gZGVidEFtb3VudDtcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmNvbGxhdGVyYWwgPSBjb2xsYXRlcmFsO1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuY29sbGF0ZXJhbF9yYXRpbyA9IGNvbGxhdGVyYWxfcmF0aW87XHJcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmV2YWxpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbml0aWFsRXJyb3JzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfYmFsYW5jZTogbnVsbCxcclxuICAgICAgICAgICAgcmF0aW9fdG9vX2hpZ2g6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRNYWludGVuYW5jZVJhdGlvKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucXVvdGVBc3NldE9iai5nZXRJbihbXHJcbiAgICAgICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cnJlbnRfZmVlZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJtYWludGVuYW5jZV9jb2xsYXRlcmFsX3JhdGlvXCJcclxuICAgICAgICAgICAgXSkgLyAxMDAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25maXJtQ2xpY2tlZChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFpmQXBpLnB1Ymxpc2godGhpcy5wcm9wcy5tb2RhbElkLCBcImNsb3NlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkJvcnJvd0NoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IGZlZWRfcHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcclxuICAgICAgICBsZXQgYW1vdW50ID0gZS5hbW91bnQucmVwbGFjZSgvLC9nLCBcIlwiKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxhdGVyYWwgPSAhdGhpcy5zdGF0ZS5pc1JhdGlvTG9ja2VkXHJcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsXHJcbiAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWxfcmF0aW8gKlxyXG4gICAgICAgICAgICAgICAgICAoYW1vdW50IC8gZmVlZF9wcmljZSkudG9GaXhlZChcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0T2JqLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKS50b0ZpeGVkKHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0T2JqLmdldChcInByZWNpc2lvblwiKSk7XHJcblxyXG4gICAgICAgIGxldCBjb2xsYXRlcmFsX3JhdGlvID0gdGhpcy5zdGF0ZS5pc1JhdGlvTG9ja2VkXHJcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsX3JhdGlvXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5jb2xsYXRlcmFsIC8gKGFtb3VudCAvIGZlZWRfcHJpY2UpO1xyXG5cclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlYnRBbW91bnQ6IGFtb3VudCxcclxuICAgICAgICAgICAgY29sbGF0ZXJhbDogY29sbGF0ZXJhbCxcclxuICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogY29sbGF0ZXJhbF9yYXRpb1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGRzKG5ld1N0YXRlKTtcclxuICAgICAgICB0aGlzLl9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkNvbGxhdGVyYWxDaGFuZ2UoZSkge1xyXG4gICAgICAgIGxldCB7aXNSYXRpb0xvY2tlZCwgY29sbGF0ZXJhbF9yYXRpb30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBhbW91bnQgPSBlLmFtb3VudC5yZXBsYWNlKC8sL2csIFwiXCIpO1xyXG5cclxuICAgICAgICBsZXQgZmVlZF9wcmljZSA9IHRoaXMuX2dldEZlZWRQcmljZSgpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxhdGVyYWxSYXRpbyA9ICFpc1JhdGlvTG9ja2VkXHJcbiAgICAgICAgICAgID8gYW1vdW50IC8gKHRoaXMuc3RhdGUuZGVidEFtb3VudCAvIGZlZWRfcHJpY2UpXHJcbiAgICAgICAgICAgIDogY29sbGF0ZXJhbF9yYXRpbztcclxuXHJcbiAgICAgICAgY29uc3QgZGVidEFtb3VudCA9ICFpc1JhdGlvTG9ja2VkXHJcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5kZWJ0QW1vdW50XHJcbiAgICAgICAgICAgIDogKChhbW91bnQgKiBmZWVkX3ByaWNlKSAvIGNvbGxhdGVyYWxSYXRpbykudG9GaXhlZChcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nQXNzZXRPYmouZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHRoaXMucHJvcHMpXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICBkZWJ0QW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogMVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgIGRlYnRBbW91bnQ6IGRlYnRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpbzogY29sbGF0ZXJhbFJhdGlvXHJcbiAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpO1xyXG4gICAgICAgIHRoaXMuX3NldFVwZGF0ZWRQb3NpdGlvbihuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVGFyZ2V0UmF0aW9DaGFuZ2UoZSkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAvLyBFbnN1cmUgaW5wdXQgaXMgdmFsaWRcclxuICAgICAgICBjb25zdCByZWdleHBfbnVtZXJhbCA9IG5ldyBSZWdFeHAoL1tbOmRpZ2l0Ol1dLyk7XHJcbiAgICAgICAgaWYgKCFyZWdleHBfbnVtZXJhbC50ZXN0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnJlcGxhY2UoL1teMC05Ll0vZywgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvOiB0YXJnZXRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkcyhuZXdTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fc2V0VXBkYXRlZFBvc2l0aW9uKG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25SYXRpb0NoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IGZlZWRfcHJpY2UgPSB0aGlzLl9nZXRGZWVkUHJpY2UoKTtcclxuICAgICAgICBsZXQgZGVidEFtb3VudDtcclxuICAgICAgICBsZXQgY29sbGF0ZXJhbDtcclxuICAgICAgICBsZXQgcmF0aW8gPSAwO1xyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgICAgICAgLy8gRW5zdXJlIGlucHV0IGlzIHZhbGlkXHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4cF9udW1lcmFsID0gbmV3IFJlZ0V4cCgvW1s6ZGlnaXQ6XV0vKTtcclxuICAgICAgICAgICAgaWYgKCFyZWdleHBfbnVtZXJhbC50ZXN0KGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXjAtOS5dL2csIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJhdGlvID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmF0aW8gPSBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudW5sb2NrZWRJbnB1dFR5cGUgPT0gXCJkZWJ0XCIpIHtcclxuICAgICAgICAgICAgZGVidEFtb3VudCA9IChcclxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNvbGxhdGVyYWwgKiBmZWVkX3ByaWNlKSAvXHJcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHJhdGlvKVxyXG4gICAgICAgICAgICApLnRvRml4ZWQodGhpcy5wcm9wcy5iYWNraW5nQXNzZXRPYmouZ2V0KFwicHJlY2lzaW9uXCIpKTtcclxuICAgICAgICAgICAgY29sbGF0ZXJhbCA9IHRoaXMuc3RhdGUuY29sbGF0ZXJhbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ0QW1vdW50ID0gdGhpcy5zdGF0ZS5kZWJ0QW1vdW50O1xyXG4gICAgICAgICAgICBjb2xsYXRlcmFsID0gKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZGVidEFtb3VudCAvIGZlZWRfcHJpY2UpICpcclxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocmF0aW8pXHJcbiAgICAgICAgICAgICkudG9GaXhlZCh0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJwcmVjaXNpb25cIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0ge1xyXG4gICAgICAgICAgICBkZWJ0QW1vdW50OiBkZWJ0QW1vdW50LFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsOiBjb2xsYXRlcmFsLFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvOiByYXRpb1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGRzKG5ld1N0YXRlKTtcclxuICAgICAgICB0aGlzLl9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9tYXhpbWl6ZUNvbGxhdGVyYWwoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMucHJvcHNcclxuICAgICAgICAgICAgPyB0aGlzLl9nZXRDdXJyZW50UG9zaXRpb24odGhpcy5wcm9wcylcclxuICAgICAgICAgICAgOiB7fTtcclxuICAgICAgICBsZXQgaW5pdGlhbENvbGxhdGVyYWxUeXBlZCA9IDA7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsKSB7XHJcbiAgICAgICAgICAgIGluaXRpYWxDb2xsYXRlcmFsVHlwZWQgPSB1dGlscy5jb252ZXJ0X3NhdG9zaGlfdG9fdHlwZWQoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0T2JqXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmFja2luZ0Fzc2V0QmFsYW5jZVR5cGVkID0gdXRpbHMuY29udmVydF9zYXRvc2hpX3RvX3R5cGVkKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbGxhdGVyYWxCYWxhbmNlT2JqLmdldChcImJhbGFuY2VcIiksXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0T2JqXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGdvIG92ZXIgdGhlIG1heGltdW0gYXZhaWxhYmxlIGNvbGxhdGVyYWwgYmFsYW5jZSwgYW5kIGFsc28gbm90IG5lZ2F0aXZlXHJcbiAgICAgICAgbGV0IG1heGltaXplZENvbGxhdGVyYWwgPSBNYXRoLm1heChcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihiYWNraW5nQXNzZXRCYWxhbmNlVHlwZWQgKyBpbml0aWFsQ29sbGF0ZXJhbFR5cGVkIC0gMTApLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fb25Db2xsYXRlcmFsQ2hhbmdlKFxyXG4gICAgICAgICAgICBuZXcgT2JqZWN0KHthbW91bnQ6IG1heGltaXplZENvbGxhdGVyYWwudG9TdHJpbmcoKX0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2FnZT9cclxuICAgIF9tYXhpbWl6ZURlYnQoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMucHJvcHNcclxuICAgICAgICAgICAgPyB0aGlzLl9nZXRDdXJyZW50UG9zaXRpb24odGhpcy5wcm9wcylcclxuICAgICAgICAgICAgOiB7fTtcclxuICAgICAgICBsZXQgaW5pdGlhbENvbGxhdGVyYWwgPSAwO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwpIHtcclxuICAgICAgICAgICAgaW5pdGlhbENvbGxhdGVyYWwgPSB1dGlscy5nZXRfYXNzZXRfYW1vdW50KFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLmNvbGxhdGVyYWwsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9ialxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1heGltdW1Db2xsYXRlcmFsID1cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2xsYXRlcmFsQmFsYW5jZU9iai5nZXQoXCJiYWxhbmNlXCIpIC9cclxuICAgICAgICAgICAgICAgIHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24odGhpcy5wcm9wcy5iYWNraW5nQXNzZXRPYmopICtcclxuICAgICAgICAgICAgaW5pdGlhbENvbGxhdGVyYWwgLVxyXG4gICAgICAgICAgICAxMDtcclxuICAgICAgICBjb25zdCBkZWJ0QW1vdW50ID1cclxuICAgICAgICAgICAgKG1heGltdW1Db2xsYXRlcmFsIC8gdGhpcy5zdGF0ZS5jb2xsYXRlcmFsX3JhdGlvKSAqXHJcbiAgICAgICAgICAgIHRoaXMuX2dldEZlZWRQcmljZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGVidEFtb3VudDogZGVidEFtb3VudCxcclxuICAgICAgICAgICAgY29sbGF0ZXJhbDogbWF4aW11bUNvbGxhdGVyYWwsXHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW86IHRoaXMuc3RhdGUuY29sbGF0ZXJhbF9yYXRpb1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGRzKG5ld1N0YXRlKTtcclxuICAgICAgICB0aGlzLl9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9wYXlEZWJ0KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0Q3VycmVudFBvc2l0aW9uKHRoaXMucHJvcHMpXHJcbiAgICAgICAgICAgIDoge2RlYnQ6IDB9O1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uLmRlYnQgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkZWJ0QW1vdW50ID0gdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcclxuICAgICAgICAgICAgTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uZGVidCAtIHRoaXMucHJvcHMuZGVidEJhbGFuY2VPYmouZ2V0KFwiYmFsYW5jZVwiKSxcclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdW90ZUFzc2V0T2JqXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fb25Cb3Jyb3dDaGFuZ2Uoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IGRlYnRBbW91bnQudG9TdHJpbmcoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRVcGRhdGVkUG9zaXRpb24obmV3U3RhdGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbmV3UG9zaXRpb246XHJcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KG5ld1N0YXRlLmRlYnRBbW91bnQpIC9cclxuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfdmFsaWRhdGVGaWVsZHMobmV3U3RhdGUpIHtcclxuICAgICAgICBsZXQgZXJyb3JzID0gdGhpcy5fZ2V0SW5pdGlhbEVycm9ycygpO1xyXG4gICAgICAgIGxldCB7b3JpZ2luYWxfcG9zaXRpb259ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgY29sbGF0ZXJhbEJhbGFuY2VPYmogPSAhdGhpcy5wcm9wcy5jb2xsYXRlcmFsQmFsYW5jZU9ialxyXG4gICAgICAgICAgICA/IHtiYWxhbmNlOiAwfVxyXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMuY29sbGF0ZXJhbEJhbGFuY2VPYmoudG9KUygpO1xyXG5cclxuICAgICAgICBsZXQgbWFpbnRlbmFuY2VSYXRpbyA9IHRoaXMuX2dldE1haW50ZW5hbmNlUmF0aW8oKTtcclxuICAgICAgICBsZXQgb3JpZ2luYWxDUiA9IHRoaXMuX2dldENvbGxhdGVyYWxSYXRpbyhcclxuICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uZGVidCxcclxuICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uY29sbGF0ZXJhbFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGlzT3JpZ2luYWxCZWxvd01DUiA9XHJcbiAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmNvbGxhdGVyYWwgPiAwICYmIG9yaWdpbmFsQ1IgPCBtYWludGVuYW5jZVJhdGlvO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbCkgLSBvcmlnaW5hbF9wb3NpdGlvbi5jb2xsYXRlcmFsID5cclxuICAgICAgICAgICAgdXRpbHMuZ2V0X2Fzc2V0X2Ftb3VudChcclxuICAgICAgICAgICAgICAgIGNvbGxhdGVyYWxCYWxhbmNlT2JqLmJhbGFuY2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai50b0pTKClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlcnJvcnMuY29sbGF0ZXJhbF9iYWxhbmNlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgXCJib3Jyb3cuZXJyb3JzLmNvbGxhdGVyYWxcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBuZXdTdGF0ZS50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyAmJlxyXG4gICAgICAgICAgICBuZXdTdGF0ZS50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyA8IG1haW50ZW5hbmNlUmF0aW9cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZXJyb3JzLnRjcl9iZWxvd19tYWludGVuYW5jZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgIFwiYm9ycm93LmVycm9ycy5iZWxvd19tY3JfdGNyXCIsXHJcbiAgICAgICAgICAgICAgICB7bXI6IG1haW50ZW5hbmNlUmF0aW99XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGlzT3JpZ2luYWxCZWxvd01DUiAmJlxyXG4gICAgICAgICAgICBuZXdTdGF0ZS5kZWJ0QW1vdW50ID4gb3JpZ2luYWxfcG9zaXRpb24uZGVidFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlcnJvcnMuYmVsb3dfbWFpbnRlbmFuY2UgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuaW5jcmVhc2VkX2RlYnRfb25fbWFyZ2luX2NhbGxcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIGlzT3JpZ2luYWxCZWxvd01DUiAmJlxyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KG5ld1N0YXRlLmNvbGxhdGVyYWxfcmF0aW8pIDw9IHBhcnNlRmxvYXQob3JpZ2luYWxDUilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgZXJyb3JzLmJlbG93X21haW50ZW5hbmNlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgXCJib3Jyb3cuZXJyb3JzLmJlbG93X3JhdGlvX21jcl91cGRhdGVcIixcclxuICAgICAgICAgICAgICAgIHtvY3I6IG9yaWdpbmFsQ1IudG9GaXhlZCg0KX1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAhaXNPcmlnaW5hbEJlbG93TUNSICYmXHJcbiAgICAgICAgICAgIHBhcnNlRmxvYXQobmV3U3RhdGUuY29sbGF0ZXJhbF9yYXRpbykgPFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuX2lzUHJlZGljdGlvbk1hcmtldCh0aGlzLnByb3BzKSA/IDEgOiBtYWludGVuYW5jZVJhdGlvKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlcnJvcnMuYmVsb3dfbWFpbnRlbmFuY2UgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuYmVsb3dcIixcclxuICAgICAgICAgICAgICAgIHttcjogbWFpbnRlbmFuY2VSYXRpb31cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KG5ld1N0YXRlLmNvbGxhdGVyYWxfcmF0aW8pIDxcclxuICAgICAgICAgICAgKHRoaXMuX2lzUHJlZGljdGlvbk1hcmtldCh0aGlzLnByb3BzKSA/IDEgOiBtYWludGVuYW5jZVJhdGlvICsgMC41KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBlcnJvcnMuY2xvc2VfbWFpbnRlbmFuY2UgPSBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICBcImJvcnJvdy5lcnJvcnMuY2xvc2VcIixcclxuICAgICAgICAgICAgICAgIHttcjogbWFpbnRlbmFuY2VSYXRpb31cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xyXG5cclxuICAgICAgICBsZXQgcXVvdGVQcmVjaXNpb24gPSB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlQXNzZXRPYmouZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgYmFja2luZ1ByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0T2JqLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuX2dldEN1cnJlbnRQb3NpdGlvbih0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgICAgbGV0IGlzVENSID1cclxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuc3RhdGUudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8gIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyA+IDAgJiZcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VUYXJnZXRDb2xsYXRlcmFsXHJcbiAgICAgICAgICAgICAgICA/IHRydWVcclxuICAgICAgICAgICAgICAgIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBleHRlbnNpb25zUHJvcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoaXNUQ1IpIHtcclxuICAgICAgICAgICAgZXh0ZW5zaW9uc1Byb3AgPSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbzogcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyAqIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMTBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkZWx0YV9jb2xsYXRlcmFsX2Ftb3VudCA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhdGVyYWwgKiBiYWNraW5nUHJlY2lzaW9uIC1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5jb2xsYXRlcmFsLFxyXG4gICAgICAgICAgICAxMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGRlbHRhX2RlYnRfYW1vdW50ID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGVidEFtb3VudCAqIHF1b3RlUHJlY2lzaW9uIC0gY3VycmVudFBvc2l0aW9uLmRlYnQsXHJcbiAgICAgICAgICAgIDEwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQW1vdW50IGNhbiBub3QgYmUgMFxyXG4gICAgICAgIGlmIChkZWx0YV9jb2xsYXRlcmFsX2Ftb3VudCA9PSAwICYmIGRlbHRhX2RlYnRfYW1vdW50ID09IDApIHtcclxuICAgICAgICAgICAgZGVsdGFfY29sbGF0ZXJhbF9hbW91bnQgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRyID0gV2FsbGV0QXBpLm5ld190cmFuc2FjdGlvbigpO1xyXG4gICAgICAgIGlmIChleHRlbnNpb25zUHJvcCkge1xyXG4gICAgICAgICAgICB0ci5hZGRfdHlwZV9vcGVyYXRpb24oXCJjYWxsX29yZGVyX3VwZGF0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5kaW5nX2FjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudE9iai5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIGRlbHRhX2NvbGxhdGVyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRlbHRhX2NvbGxhdGVyYWxfYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbHRhX2RlYnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRlbHRhX2RlYnRfYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLnF1b3RlQXNzZXRPYmouZ2V0KFwiaWRcIilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiBleHRlbnNpb25zUHJvcFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ci5hZGRfdHlwZV9vcGVyYXRpb24oXCJjYWxsX29yZGVyX3VwZGF0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5kaW5nX2FjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudE9iai5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIGRlbHRhX2NvbGxhdGVyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRlbHRhX2NvbGxhdGVyYWxfYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLmJhY2tpbmdBc3NldE9iai5nZXQoXCJpZFwiKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlbHRhX2RlYnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRlbHRhX2RlYnRfYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0X2lkOiB0aGlzLnByb3BzLnF1b3RlQXNzZXRPYmouZ2V0KFwiaWRcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFdhbGxldERiLnByb2Nlc3NfdHJhbnNhY3Rpb24odHIsIG51bGwsIHRydWUpLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVubG9jayBmYWlsZWQ6XCIsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgWmZBcGkucHVibGlzaCh0aGlzLnByb3BzLm1vZGFsSWQsIFwiY2xvc2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEN1cnJlbnRQb3NpdGlvbihwcm9wcykge1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWw6IG51bGwsXHJcbiAgICAgICAgICAgIGRlYnQ6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzQ2FsbE9yZGVycyAmJiBwcm9wcy5jYWxsX29yZGVycykge1xyXG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBwcm9wcy5jYWxsX29yZGVycy5maWx0ZXIoYSA9PiAhIWEpLmZpbmQoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIGEuZ2V0SW4oW1wiY2FsbF9wcmljZVwiLCBcInF1b3RlXCIsIFwiYXNzZXRfaWRcIl0pID09PVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1b3RlQXNzZXRPYmouZ2V0KFwiaWRcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gISFjdXJyZW50UG9zaXRpb25cclxuICAgICAgICAgICAgICAgID8gY3VycmVudFBvc2l0aW9uLnRvSlMoKVxyXG4gICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVidDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVudFBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRGZWVkUHJpY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUHJlZGljdGlvbk1hcmtldCh0aGlzLnByb3BzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDEgL1xyXG4gICAgICAgICAgICB1dGlscy5nZXRfYXNzZXRfcHJpY2UoXHJcbiAgICAgICAgICAgICAgICBhc3NldF91dGlsc1xyXG4gICAgICAgICAgICAgICAgICAgIC5leHRyYWN0UmF3RmVlZFByaWNlKHRoaXMucHJvcHMucXVvdGVBc3NldE9iailcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0pLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5iYWNraW5nQXNzZXRPYmosXHJcbiAgICAgICAgICAgICAgICBhc3NldF91dGlsc1xyXG4gICAgICAgICAgICAgICAgICAgIC5leHRyYWN0UmF3RmVlZFByaWNlKHRoaXMucHJvcHMucXVvdGVBc3NldE9iailcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1wiYmFzZVwiLCBcImFtb3VudFwiXSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlQXNzZXRPYmpcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEluaXRpYWxDb2xsYXRlcmFsUmF0aW8ocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHByb3BzKVxyXG4gICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgOiB0aGlzLl9nZXRNYWludGVuYW5jZVJhdGlvKCkgKiAyO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRDb2xsYXRlcmFsUmF0aW8oZGVidCwgY29sbGF0ZXJhbCkge1xyXG4gICAgICAgIHJldHVybiBjb2xsYXRlcmFsIC8gKGRlYnQgLyB0aGlzLl9nZXRGZWVkUHJpY2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2lzUHJlZGljdGlvbk1hcmtldChwcm9wcykge1xyXG4gICAgICAgIHJldHVybiBwcm9wcy5xdW90ZUFzc2V0T2JqLmdldEluKFtcImJpdGFzc2V0XCIsIFwiaXNfcHJlZGljdGlvbl9tYXJrZXRcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRVc2VUYXJnZXRDb2xsYXRlcmFsKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB1c2VUYXJnZXRDb2xsYXRlcmFsOiAhdGhpcy5zdGF0ZS51c2VUYXJnZXRDb2xsYXRlcmFsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uTG9ja0NoYW5nZSh0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzUmF0aW9Mb2NrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB1bmxvY2tlZElucHV0VHlwZTogdHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkxvY2tDUigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSYXRpb0xvY2tlZDogIXRoaXMuc3RhdGUuaXNSYXRpb0xvY2tlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBxdW90ZUFzc2V0T2JqLFxyXG4gICAgICAgICAgICBiYWNraW5nQXNzZXRPYmosXHJcbiAgICAgICAgICAgIGRlYnRCYWxhbmNlT2JqLFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsQmFsYW5jZU9ialxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGRlYnRBbW91bnQsXHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWwsXHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW8sXHJcbiAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvLFxyXG4gICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLFxyXG4gICAgICAgICAgICB1c2VUYXJnZXRDb2xsYXRlcmFsXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIWNvbGxhdGVyYWxfcmF0aW8gfHxcclxuICAgICAgICAgICAgaXNOYU4oY29sbGF0ZXJhbF9yYXRpbykgfHxcclxuICAgICAgICAgICAgIShjb2xsYXRlcmFsX3JhdGlvID4gMC4wICYmIGNvbGxhdGVyYWxfcmF0aW8gPCAxMDAwLjApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW8gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIHdlIGRvbid0IGdldCBtYXNzaXZlIGRlY2ltYWwgcGxhY2VtZW50XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvLnRvU3RyaW5nKCkuaW5kZXhPZihcIi5cIikgIT0gLTEgJiZcclxuICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpby50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggPiAyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbGxhdGVyYWxfcmF0aW8gPVxyXG4gICAgICAgICAgICAgICAgY29sbGF0ZXJhbF9yYXRpby50b1N0cmluZygpLnNwbGl0KFwiLlwiKVswXSArXHJcbiAgICAgICAgICAgICAgICBcIi5cIiArXHJcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIuXCIpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnN0cigwLCAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8udG9TdHJpbmcoKS5pbmRleE9mKFwiLlwiKSAhPSAtMSAmJlxyXG4gICAgICAgICAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpby50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggPiAyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvID1cclxuICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzBdICtcclxuICAgICAgICAgICAgICAgIFwiLlwiICtcclxuICAgICAgICAgICAgICAgIHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIuXCIpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnN0cigwLCAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlYnRCYWxhbmNlT2JqID0gIWRlYnRCYWxhbmNlT2JqXHJcbiAgICAgICAgICAgID8ge2JhbGFuY2U6IDAsIGlkOiBudWxsfVxyXG4gICAgICAgICAgICA6IGRlYnRCYWxhbmNlT2JqLnRvSlMoKTtcclxuXHJcbiAgICAgICAgY29sbGF0ZXJhbEJhbGFuY2VPYmogPSAhY29sbGF0ZXJhbEJhbGFuY2VPYmpcclxuICAgICAgICAgICAgPyB7YmFsYW5jZTogMCwgaWQ6IG51bGx9XHJcbiAgICAgICAgICAgIDogY29sbGF0ZXJhbEJhbGFuY2VPYmoudG9KUygpO1xyXG5cclxuICAgICAgICBsZXQgYmFja2luZ1ByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYmFja2luZ0Fzc2V0T2JqLmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IGRlYnRQcmVjaXNpb24gPSB1dGlscy5nZXRfYXNzZXRfcHJlY2lzaW9uKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1b3RlQXNzZXRPYmouZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gRHluYW1pY2FsbHkgdXBkYXRlIHVzZXIncyByZW1haW5pbmcgY29sbGF0ZXJhbFxyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLl9nZXRDdXJyZW50UG9zaXRpb24odGhpcy5wcm9wcyk7XHJcbiAgICAgICAgbGV0IGNvbGxhdGVyYWxDaGFuZ2UgPSBwYXJzZUludChcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb2xsYXRlcmFsICogYmFja2luZ1ByZWNpc2lvbiAtXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24uY29sbGF0ZXJhbCxcclxuICAgICAgICAgICAgMTBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgZGVidENoYW5nZSA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRlYnRBbW91bnQgKiBkZWJ0UHJlY2lzaW9uIC0gY3VycmVudFBvc2l0aW9uLmRlYnQsXHJcbiAgICAgICAgICAgIDEwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHJlbWFpbmluZ0JhY2tpbmdCYWxhbmNlID1cclxuICAgICAgICAgICAgY29sbGF0ZXJhbEJhbGFuY2VPYmouYmFsYW5jZSAtIGNvbGxhdGVyYWxDaGFuZ2U7XHJcbiAgICAgICAgbGV0IHJlbWFpbmluZ0RlYnRCYWxhbmNlID0gZGVidEJhbGFuY2VPYmouYmFsYW5jZSArIGRlYnRDaGFuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmZWVkX3ByaWNlID0gdGhpcy5fZ2V0RmVlZFByaWNlKCk7XHJcblxyXG4gICAgICAgIGxldCBtYWludGVuYW5jZVJhdGlvID0gdGhpcy5fZ2V0TWFpbnRlbmFuY2VSYXRpbygpO1xyXG5cclxuICAgICAgICBsZXQgaXNQcmVkaWN0aW9uTWFya2V0ID0gdGhpcy5faXNQcmVkaWN0aW9uTWFya2V0KHRoaXMucHJvcHMpO1xyXG5cclxuICAgICAgICBsZXQgaXNPcmlnaW5hbEJlbG93TUNSID1cclxuICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uY29sbGF0ZXJhbCA+IDAgJiZcclxuICAgICAgICAgICAgdGhpcy5fZ2V0Q29sbGF0ZXJhbFJhdGlvKFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxfcG9zaXRpb24uZGVidCxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsX3Bvc2l0aW9uLmNvbGxhdGVyYWxcclxuICAgICAgICAgICAgKSA8IG1haW50ZW5hbmNlUmF0aW87XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCByZXNldE1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuX2luaXRpYWxTdGF0ZSh0aGlzLnByb3BzKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1ByZWRpY3Rpb25NYXJrZXQgJiYgaXNOYU4oZmVlZF9wcmljZSkpIHtcclxuICAgICAgICAgICAgZm9vdGVyLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRhYkluZGV4PXs2fSBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImFjY291bnRPYmoucGVybS5jYW5jZWxcIil9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb290ZXIucHVzaChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17Nn1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiYm9ycm93LmFkanVzdFwiKX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmb290ZXIucHVzaChcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGFiSW5kZXg9ezd9IGtleT1cImNhbmNlbFwiIG9uQ2xpY2s9e3Jlc2V0TW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJ3YWxsZXQucmVzZXRcIil9XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImJvcnJvdy50aXRsZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfc3ltYm9sOiBxdW90ZUFzc2V0T2JqLmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5wcm9wcy5oaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e2Zvb3Rlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJvcnJvd01vZGFsVmlld1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdHNcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50T2JqPXt0aGlzLnByb3BzLmFjY291bnRPYmp9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2luZ0Fzc2V0T2JqPXtiYWNraW5nQXNzZXRPYmp9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbEJhbGFuY2VPYmo9e2NvbGxhdGVyYWxCYWxhbmNlT2JqfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlYnRCYWxhbmNlT2JqPXtkZWJ0QmFsYW5jZU9ian1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZUFzc2V0T2JqPXtxdW90ZUFzc2V0T2JqfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uPXt0aGlzLnN0YXRlLm5ld1Bvc2l0aW9uIHx8IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RyaW5ncywgRmxvYXRzIGFuZCBOdW1iZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGF0ZXJhbD17Y29sbGF0ZXJhbH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvPXtjb2xsYXRlcmFsX3JhdGlvfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlYnRBbW91bnQ9e2RlYnRBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2luZ1ByZWNpc2lvbj17YmFja2luZ1ByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICBtYWludGVuYW5jZVJhdGlvPXttYWludGVuYW5jZVJhdGlvfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0JhY2tpbmdCYWxhbmNlPXtyZW1haW5pbmdCYWNraW5nQmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdEZWJ0QmFsYW5jZT17cmVtYWluaW5nRGVidEJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW89e3RhcmdldF9jb2xsYXRlcmFsX3JhdGlvfVxyXG4gICAgICAgICAgICAgICAgICAgIHVubG9ja2VkSW5wdXRUeXBlPXt0aGlzLnN0YXRlLnVubG9ja2VkSW5wdXRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJvb2wgRmxhZ3NcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSGVscD17dGhpcy5wcm9wcy5kaXNhYmxlSGVscH1cclxuICAgICAgICAgICAgICAgICAgICBpc1JhdGlvTG9ja2VkPXt0aGlzLnN0YXRlLmlzUmF0aW9Mb2NrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcmlnaW5hbEJlbG93TUNSPXtpc09yaWdpbmFsQmVsb3dNQ1J9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQcmVkaWN0aW9uTWFya2V0PXtpc1ByZWRpY3Rpb25NYXJrZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJlZGljdGlvbk1hcmtldCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoIWlzUHJlZGljdGlvbk1hcmtldCAmJiAhaXNOYU4oZmVlZF9wcmljZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVRhcmdldENvbGxhdGVyYWw9e3VzZVRhcmdldENvbGxhdGVyYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQm9ycm93Q2hhbmdlPXt0aGlzLl9vbkJvcnJvd0NoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29sbGF0ZXJhbENoYW5nZT17dGhpcy5fb25Db2xsYXRlcmFsQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25NYXhpbWl6ZUNvbGxhdGVyZWFsPXt0aGlzLl9tYXhpbWl6ZUNvbGxhdGVyYWwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBvblJhdGlvQ2hhbmdlPXt0aGlzLl9vblJhdGlvQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Mb2NrQ2hhbmdlQ1I9e3RoaXMuX29uTG9ja0NSLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Mb2NrQ2hhbmdlQ29sbGF0ZXJhbD17dGhpcy5fb25Mb2NrQ2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVidFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkxvY2tDaGFuZ2VEZWJ0PXt0aGlzLl9vbkxvY2tDaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xsYXRlcmFsXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUGF5RGVidD17dGhpcy5fcGF5RGVidC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVENSYXRpb0NoYW5nZT17dGhpcy5fb25UYXJnZXRSYXRpb0NoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2V0VXNlVENSPXt0aGlzLl9zZXRVc2VUYXJnZXRDb2xsYXRlcmFsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQm9ycm93TW9kYWxDb250ZW50ID0gQmluZFRvQ2hhaW5TdGF0ZShCb3Jyb3dNb2RhbENvbnRlbnQpO1xyXG5cclxuQm9ycm93TW9kYWxDb250ZW50ID0gZGVib3VuY2VSZW5kZXIoQm9ycm93TW9kYWxDb250ZW50LCA1MCwge1xyXG4gICAgbGVhZGluZzogZmFsc2VcclxufSk7XHJcblxyXG4vKiBUaGlzIHdyYXBwZXIgY2xhc3MgYXBwZWFycyB0byBiZSBuZWNlc3NhcnkgYmVjYXVzZSB0aGUgZGVjb3JhdG9yIGVhdHMgdGhlIHNob3cgbWV0aG9kIGZyb20gcmVmcyAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzbWFsbFNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2hvd01vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzbWFsbFNjcmVlbjogd2luZG93LmlubmVySGVpZ2h0IDw9IDgwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge3F1b3RlQXNzZXRPYmosIGJhY2tpbmdBc3NldE9iaiwgYWNjb3VudE9ian0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBhY2NvdW50T2JqQmFsYW5jZSA9IGFjY291bnRPYmouZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xyXG4gICAgICAgIGxldCBjb3JlQmFsYW5jZSwgYml0QXNzZXRCYWxhbmNlO1xyXG5cclxuICAgICAgICBpZiAoYWNjb3VudE9iakJhbGFuY2UpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gYWNjb3VudE9iakJhbGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpZCA9PT0gYmFja2luZ0Fzc2V0T2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29yZUJhbGFuY2UgPSBhY2NvdW50T2JqQmFsYW5jZVtpZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSBxdW90ZUFzc2V0T2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYml0QXNzZXRCYWxhbmNlID0gYWNjb3VudE9iakJhbGFuY2VbaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52aXNpYmxlID8gKFxyXG4gICAgICAgICAgICA8Qm9ycm93TW9kYWxDb250ZW50XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnByb3BzLnZpc2libGV9XHJcbiAgICAgICAgICAgICAgICBoaWRlTW9kYWw9e3RoaXMucHJvcHMuaGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsPXt0aGlzLnByb3BzLnNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIHF1b3RlQXNzZXRPYmo9e3F1b3RlQXNzZXRPYmp9XHJcbiAgICAgICAgICAgICAgICBjYWxsX29yZGVycz17YWNjb3VudE9iai5nZXQoXCJjYWxsX29yZGVyc1wiLCBMaXN0KCkpLnRvTGlzdCgpfVxyXG4gICAgICAgICAgICAgICAgaGFzQ2FsbE9yZGVycz17XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudE9iai5nZXQoXCJjYWxsX29yZGVyc1wiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRPYmouZ2V0KFwiY2FsbF9vcmRlcnNcIikuc2l6ZSA+IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1vZGFsSWQ9e3RoaXMucHJvcHMubW9kYWxJZH1cclxuICAgICAgICAgICAgICAgIGRlYnRCYWxhbmNlT2JqPXtiaXRBc3NldEJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICBjb2xsYXRlcmFsQmFsYW5jZU9iaj17Y29yZUJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICBiYWNraW5nQXNzZXRPYmo9e2JhY2tpbmdBc3NldE9ian1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVIZWxwPXt0aGlzLnN0YXRlLnNtYWxsU2NyZWVufVxyXG4gICAgICAgICAgICAgICAgYWNjb3VudE9iaj17YWNjb3VudE9ian1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuLi8uLi9VdGlsaXR5L0Zvcm1hdHRlZEFzc2V0XCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tIFwiLi4vLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvclN0eWxlR3VpZGVcIjtcclxuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuLi8uLi9VdGlsaXR5L0Zvcm1hdHRlZFByaWNlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IEhlbHBDb250ZW50IGZyb20gXCIuLi8uLi9VdGlsaXR5L0hlbHBDb250ZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDaGVja2JveCxcclxuICAgIFRvb2x0aXAsXHJcbiAgICBGb3JtLFxyXG4gICAgU2xpZGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBJY29uLFxyXG4gICAgUm93LFxyXG4gICAgQ29sXHJcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgYXNzZXRfdXRpbHMgZnJvbSBcIi4uLy4uLy4uL2xpYi9jb21tb24vYXNzZXRfdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCb3Jyb3dNb2RhbFZpZXcoe1xyXG4gICAgLy8gT2JqZWN0c1xyXG4gICAgYWNjb3VudE9iaixcclxuICAgIGJhY2tpbmdBc3NldE9iaixcclxuICAgIGNvbGxhdGVyYWxCYWxhbmNlT2JqLFxyXG4gICAgZGVidEJhbGFuY2VPYmosXHJcbiAgICBxdW90ZUFzc2V0T2JqLFxyXG4gICAgbmV3UG9zaXRpb24sXHJcbiAgICBlcnJvcnMsXHJcblxyXG4gICAgLy8gU3RyaW5ncywgRmxvYXRzIGFuZCBOdW1iZXJzXHJcbiAgICBjb2xsYXRlcmFsLFxyXG4gICAgY29sbGF0ZXJhbF9yYXRpbyxcclxuICAgIGRlYnRBbW91bnQsXHJcbiAgICBiYWNraW5nUHJlY2lzaW9uLFxyXG4gICAgbWFpbnRlbmFuY2VSYXRpbyxcclxuICAgIHJlbWFpbmluZ0JhY2tpbmdCYWxhbmNlLFxyXG4gICAgcmVtYWluaW5nRGVidEJhbGFuY2UsXHJcbiAgICB0YXJnZXRfY29sbGF0ZXJhbF9yYXRpbyxcclxuICAgIHVubG9ja2VkSW5wdXRUeXBlLFxyXG5cclxuICAgIC8vIEJvb2wgRmxhZ3NcclxuICAgIGRpc2FibGVIZWxwLFxyXG4gICAgaXNSYXRpb0xvY2tlZCxcclxuICAgIGlzT3JpZ2luYWxCZWxvd01DUixcclxuICAgIGlzUHJlZGljdGlvbk1hcmtldCxcclxuICAgIGlzVmFsaWQsXHJcbiAgICB1c2VUYXJnZXRDb2xsYXRlcmFsLFxyXG5cclxuICAgIC8vIENhbGxiYWNrc1xyXG4gICAgb25QYXlEZWJ0LFxyXG4gICAgb25NYXhpbWl6ZUNvbGxhdGVyZWFsLFxyXG4gICAgb25Cb3Jyb3dDaGFuZ2UsXHJcbiAgICBvbkxvY2tDaGFuZ2VEZWJ0LFxyXG4gICAgb25Db2xsYXRlcmFsQ2hhbmdlLFxyXG4gICAgb25Mb2NrQ2hhbmdlQ29sbGF0ZXJhbCxcclxuICAgIG9uUmF0aW9DaGFuZ2UsXHJcbiAgICBvbkxvY2tDaGFuZ2VDUixcclxuICAgIG9uU2V0VXNlVENSLFxyXG4gICAgb25UQ1JhdGlvQ2hhbmdlXHJcbn0pIHtcclxuICAgIGxldCBxdW90ZVByZWNpc2lvbiA9IHV0aWxzLmdldF9hc3NldF9wcmVjaXNpb24oXHJcbiAgICAgICAgcXVvdGVBc3NldE9iai5nZXQoXCJwcmVjaXNpb25cIilcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdXNlckV4Y2hhbmdlUHJpY2UgPSBuZXdQb3NpdGlvbiA/IChcclxuICAgICAgICA8Rm9ybWF0dGVkUHJpY2VcclxuICAgICAgICAgICAgbm9Qb3BPdmVyXHJcbiAgICAgICAgICAgIG5vVGlwXHJcbiAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17bWFpbnRlbmFuY2VSYXRpbyAqIGRlYnRBbW91bnQgKiBxdW90ZVByZWNpc2lvbn1cclxuICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3F1b3RlQXNzZXRPYmouZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgIGJhc2VfYXNzZXQ9e2JhY2tpbmdBc3NldE9iai5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2NvbGxhdGVyYWwgKiBiYWNraW5nUHJlY2lzaW9ufVxyXG4gICAgICAgIC8+XHJcbiAgICApIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBub1ZhbGlkQ29tcG9uZW50ID0gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cImJvcnJvdy5ub192YWxpZFwiXHJcbiAgICAgICAgICAgICAgICBhc3NldF9zeW1ib2w9e3F1b3RlQXNzZXRPYmouZ2V0KFwic3ltYm9sXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBiaXRBc3NldEJhbGFuY2VUZXh0ID0gKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtjb2xsYXRlcmFsICE9IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25QYXlEZWJ0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiYm9ycm93LnBheV9tYXhfZGVidFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiIC8+OntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkZWJ0QmFsYW5jZU9iai5pZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3JlbWFpbmluZ0RlYnRCYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3F1b3RlQXNzZXRPYmouZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17cXVvdGVBc3NldE9iai5nZXQoXCJpZFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBiYWNraW5nQmFsYW5jZVRleHQgPSAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25NYXhpbWl6ZUNvbGxhdGVyZWFsLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJib3Jyb3cudXNlX21heFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJ0cmFuc2Zlci5hdmFpbGFibGVcIiAvPjp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sbGF0ZXJhbEJhbGFuY2VPYmouaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRBc3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtyZW1haW5pbmdCYWNraW5nQmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYWNraW5nQXNzZXRPYmouZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17YmFja2luZ0Fzc2V0T2JqLmdldChcImlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAhaXNWYWxpZCA/IChcclxuICAgICAgICBub1ZhbGlkQ29tcG9uZW50XHJcbiAgICApIDogKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246IFwibGVmdFwifX0+XHJcbiAgICAgICAgICAgIHtkaXNhYmxlSGVscCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWxwQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50cy9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNQcmVkaWN0aW9uTWFya2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkJvcnJvd01vZGFsUHJlZGljdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJvcnJvd01vZGFsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidD17cXVvdGVBc3NldE9iai5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhdGVyYWw9e2JhY2tpbmdBc3NldE9iai5nZXQoXCJzeW1ib2xcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcnJvd2VyPXthY2NvdW50T2JqLmdldChcIm5hbWVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yPXttYWludGVuYW5jZVJhdGlvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHshaXNQcmVkaWN0aW9uTWFya2V0ICYmIGlzT3JpZ2luYWxCZWxvd01DUiA/IChcclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJib3Jyb3cuZXJyb3JzLmJlbG93X2luZm9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICB7IWlzUHJlZGljdGlvbk1hcmtldCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxcmVtXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9ycm93LXByaWNlLWZlZWRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvcnJvdy1wcmljZS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNhY3Rpb24uZmVlZF9wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17YXNzZXRfdXRpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZXh0cmFjdFJhd0ZlZWRQcmljZShxdW90ZUFzc2V0T2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRJbihbXCJiYXNlXCIsIFwiYW1vdW50XCJdKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXthc3NldF91dGlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHRyYWN0UmF3RmVlZFByaWNlKHF1b3RlQXNzZXRPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcImJhc2VcIiwgXCJhc3NldF9pZFwiXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXthc3NldF91dGlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5leHRyYWN0UmF3RmVlZFByaWNlKHF1b3RlQXNzZXRPYmopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldEluKFtcInF1b3RlXCIsIFwiYXNzZXRfaWRcIl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hbW91bnQ9e2Fzc2V0X3V0aWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmV4dHJhY3RSYXdGZWVkUHJpY2UocXVvdGVBc3NldE9iailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0SW4oW1wicXVvdGVcIiwgXCJhbW91bnRcIl0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3Jyb3ctcHJpY2UtZmluYWwgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9ycy5iZWxvd19tYWludGVuYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoYXMtZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3JzLmNsb3NlX21haW50ZW5hbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJoYXMtd2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9ycm93LXByaWNlLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleGNoYW5nZS55b3VyX3ByaWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDombmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlckV4Y2hhbmdlUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCIgbGF5b3V0PVwidmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNhY3Rpb24uYm9ycm93X2Ftb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtkZWJ0QW1vdW50LnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQm9ycm93Q2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e3F1b3RlQXNzZXRPYmouZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbcXVvdGVBc3NldE9iai5nZXQoXCJpZFwiKV19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiaXRBc3NldEJhbGFuY2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMC4wXCJcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgICBsb2NrU3RhdHVzPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5sb2NrZWRJbnB1dFR5cGUgPT0gXCJkZWJ0XCIgfHwgaXNSYXRpb0xvY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTG9ja0NoYW5nZT17b25Mb2NrQ2hhbmdlRGVidC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNhY3Rpb24uY29sbGF0ZXJhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjb2xsYXRlcmFsLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ29sbGF0ZXJhbENoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0PXtiYWNraW5nQXNzZXRPYmouZ2V0KFwiaWRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtbYmFja2luZ0Fzc2V0T2JqLmdldChcImlkXCIpXX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhY2tpbmdCYWxhbmNlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAuMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9ja1N0YXR1cz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubG9ja2VkSW5wdXRUeXBlID09IFwiY29sbGF0ZXJhbFwiIHx8IGlzUmF0aW9Mb2NrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkxvY2tDaGFuZ2U9e29uTG9ja0NoYW5nZUNvbGxhdGVyYWwuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17ZXJyb3JzLmNvbGxhdGVyYWxfYmFsYW5jZSA/IFwiZXJyb3JcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVscD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5jb2xsYXRlcmFsX2JhbGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3JzLmNvbGxhdGVyYWxfYmFsYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHshaXNQcmVkaWN0aW9uTWFya2V0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezE2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9ycm93LmNvbGxfcmF0aW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuY2xvc2VfbWFpbnRlbmFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvcnMuYmVsb3dfbWFpbnRlbmFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuY2xvc2VfbWFpbnRlbmFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9ycy5jbG9zZV9tYWludGVuYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3JzLmJlbG93X21haW50ZW5hbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3JzLmJlbG93X21haW50ZW5hbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXRlcmFsX3JhdGlvID09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29sbGF0ZXJhbF9yYXRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25SYXRpb0NoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdW5ib3JkZXJlZC1iZWZvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25CZWZvcmU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNSYXRpb0xvY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJncmV5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzUmF0aW9Mb2NrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidW5sb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Mb2NrQ2hhbmdlQ1IuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIyMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnRjcl9iZWxvd19tYWludGVuYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMudGNyX2JlbG93X21haW50ZW5hbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvcnMudGNyX2JlbG93X21haW50ZW5hbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDh9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblNldFVzZVRDUi5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3VzZVRhcmdldENvbGxhdGVyYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYm9ycm93LmVuYWJsZV90YXJnZXRfY29sbGF0ZXJhbF9yYXRpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAudGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXQuR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlVGFyZ2V0Q29sbGF0ZXJhbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOYU4odGFyZ2V0X2NvbGxhdGVyYWxfcmF0aW8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRhcmdldF9jb2xsYXRlcmFsX3JhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblRDUmF0aW9DaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD17XCJSYXRpbyBTbGlkZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4wMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXttYWludGVuYW5jZVJhdGlvICogMTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbGxhdGVyYWxfcmF0aW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUmF0aW9DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTs7O0FBVUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVpBO0FBY0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBVUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBS0E7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFPQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUlBO0FBSUE7QUFLQTtBQUlBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7QUFDQTtBQUNBLDZCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBZUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFPQTtBQUNBO0FBQ0E7QUFJQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBN0JBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQTdDQTtBQVJBO0FBeURBOzs7O0FBanhCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBaXhCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7Ozs7QUF2REE7QUFDQTtBQURBOzs7Ozs7OztBQ3B6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUF3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQUE7QUFTQTtBQVhBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFGQTtBQVBBO0FBWkE7QUFEQTtBQUNBO0FBNkJBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUFBO0FBUUE7QUFUQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBRkE7QUFQQTtBQVZBO0FBREE7QUFDQTtBQTJCQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBTEE7QUFvQkE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBR0E7QUFYQTtBQUxBO0FBcUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBZEE7QUE1QkE7QUErQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBaEJBO0FBc0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFPQTtBQVhBO0FBbUJBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFLQTtBQUdBO0FBZEE7QUFWQTtBQW5CQTtBQURBO0FBa0RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFOQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUxBO0FBWEE7QUFvQkE7QUFFQTtBQUtBO0FBQ0E7QUFQQTtBQWpDQTtBQURBO0FBbkRBO0FBb0dBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFyR0E7QUF4Q0E7QUE5RUE7QUF5T0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==