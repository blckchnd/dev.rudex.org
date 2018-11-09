(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 2597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1000);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1002);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1238);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(783);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1004);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1227);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(551);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1005);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(569);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1237);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2564);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(525);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(418);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(771);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(583);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(584);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2598);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_20__);



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var Transfer = function (_React$Component) {
    _inherits(Transfer, _React$Component);

    function Transfer(props) {
        _classCallCheck(this, Transfer);

        var _this = _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, props));

        var state = Transfer.getInitialState();
        var query = query_string__WEBPACK_IMPORTED_MODULE_20___default.a.parse(props.location.search) || {};

        if (query.from) {
            state.from_name = query.from;
            bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(query.from);
        }
        if (query.to) {
            state.to_name = query.to;
            bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(query.to);
        }
        if (query.amount) state.amount = query.amount;
        if (query.asset) {
            state.asset_id = query.asset;
            state.asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset(query.asset);
        }
        if (query.memo) state.memo = query.memo;
        var currentAccount = stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().currentAccount;
        if (!state.from_name) state.from_name = currentAccount;

        _this.state = state;
        _this.onTrxIncluded = _this.onTrxIncluded.bind(_this);

        _this._updateFee = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__["default"])(_this._updateFee.bind(_this), 250);
        _this._checkFeeStatus = _this._checkFeeStatus.bind(_this);
        _this._checkBalance = _this._checkBalance.bind(_this);
        return _this;
    }

    _createClass(Transfer, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.nestedRef = null;
            this._updateFee();
            this._checkFeeStatus();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            var _getAvailableAssets2 = this._getAvailableAssets(),
                current_types = _getAvailableAssets2.asset_types;

            var _getAvailableAssets3 = this._getAvailableAssets(ns),
                next_asset_types = _getAvailableAssets3.asset_types;

            if (next_asset_types.length === 1) {
                var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset(next_asset_types[0]);
                if (current_types.length !== 1) {
                    this.onAmountChanged({ amount: ns.amount, asset: asset });
                }

                if (next_asset_types[0] !== this.state.fee_asset_id) {
                    if (asset && this.state.fee_asset_id !== next_asset_types[0]) {
                        this.setState({
                            feeAsset: asset,
                            fee_asset_id: next_asset_types[0]
                        });
                    }
                }
            }
            return true;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            var _this2 = this;

            if (np.currentAccount !== this.state.from_name && np.currentAccount !== this.props.currentAccount) {
                this.setState({
                    from_name: np.currentAccount,
                    from_account: bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(np.currentAccount),
                    feeStatus: {},
                    fee_asset_id: "1.3.0",
                    feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_19__["Asset"]({ amount: 0 })
                }, function () {
                    _this2._updateFee();
                    _this2._checkFeeStatus(bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAccount(np.currentAccount));
                });
            }
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAmount = _state.feeAmount,
                amount = _state.amount,
                from_account = _state.from_account,
                asset = _state.asset;

            if (!asset || !from_account) return;
            var balanceID = from_account.getIn(["balances", asset.get("id")]);
            var feeBalanceID = from_account.getIn(["balances", feeAmount.asset_id]);
            if (!asset || !from_account) return;
            if (!balanceID) return this.setState({ balanceError: true });
            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(balanceID);
            var feeBalanceObject = feeBalanceID ? bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(feeBalanceID) : null;
            if (!feeBalanceObject || feeBalanceObject.get("balance") === 0) {
                this.setState({ fee_asset_id: "1.3.0" }, this._updateFee);
            }
            if (!balanceObject || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["checkBalance"])(amount, asset, feeAmount, balanceObject);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this3 = this;

            var account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.from_account;

            if (!account) return;

            var assets = Object.keys(account.get("balances").toJS()).sort(common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].sortID);
            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a,
                    options: ["price_per_kbyte"],
                    data: {
                        type: "memo",
                        content: _this3.state.memo
                    }
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].are_equal_shallow(_this3.state.feeStatus, feeStatus)) {
                    _this3.setState({
                        feeStatus: feeStatus
                    });
                }
                _this3._checkBalance();
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: "_updateFee",
        value: function _updateFee() {
            var _this4 = this;

            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var fee_asset_id = state.fee_asset_id,
                from_account = state.from_account,
                asset_id = state.asset_id;

            var _getAvailableAssets4 = this._getAvailableAssets(state),
                fee_asset_types = _getAvailableAssets4.fee_asset_types;

            if (fee_asset_types.length === 1 && fee_asset_types[0] !== fee_asset_id) {
                fee_asset_id = fee_asset_types[0];
            }
            if (!from_account) return null;
            Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["checkFeeStatusAsync"])({
                accountID: from_account.get("id"),
                feeID: fee_asset_id,
                options: ["price_per_kbyte"],
                data: {
                    type: "memo",
                    content: state.memo
                }
            }).then(function (_ref) {
                var fee = _ref.fee,
                    hasBalance = _ref.hasBalance,
                    hasPoolBalance = _ref.hasPoolBalance;
                return Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_17__["shouldPayFeeWithAssetAsync"])(from_account, fee).then(function (should) {
                    return should ? _this4.setState({ fee_asset_id: asset_id }, _this4._updateFee) : _this4.setState({
                        feeAmount: fee,
                        fee_asset_id: fee.asset_id,
                        hasBalance: hasBalance,
                        hasPoolBalance: hasPoolBalance,
                        error: !hasBalance || !hasPoolBalance
                    });
                });
            });
        }
    }, {
        key: "fromChanged",
        value: function fromChanged(from_name) {
            if (!from_name) this.setState({ from_account: null });
            this.setState({
                from_name: from_name,
                error: null,
                propose: false,
                propose_account: ""
            });
        }
    }, {
        key: "toChanged",
        value: function toChanged(to_name) {
            this.setState({ to_name: to_name, error: null });
        }
    }, {
        key: "onFromAccountChanged",
        value: function onFromAccountChanged(from_account) {
            var _this5 = this;

            this.setState({ from_account: from_account, error: null }, function () {
                _this5._updateFee();
                _this5._checkFeeStatus();
            });
        }
    }, {
        key: "onToAccountChanged",
        value: function onToAccountChanged(to_account) {
            this.setState({ to_account: to_account, error: null });
        }
    }, {
        key: "onAmountChanged",
        value: function onAmountChanged(_ref2) {
            var amount = _ref2.amount,
                asset = _ref2.asset;

            if (!asset) {
                return;
            }
            this.setState({ amount: amount, asset: asset, asset_id: asset.get("id"), error: null }, this._checkBalance);
        }
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(_ref3) {
            var asset = _ref3.asset;

            this.setState({ feeAsset: asset, fee_asset_id: asset.get("id"), error: null }, this._updateFee);
        }
    }, {
        key: "onMemoChanged",
        value: function onMemoChanged(e) {
            this.setState({ memo: e.target.value }, this._updateFee);
        }
    }, {
        key: "onTrxIncluded",
        value: function onTrxIncluded(confirm_store_state) {
            if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
                // this.setState(Transfer.getInitialState());
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].reset();
            } else if (confirm_store_state.closed) {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].unlisten(this.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].reset();
            }
        }
    }, {
        key: "onPropose",
        value: function onPropose(propose, e) {
            e.preventDefault();
            this.setState({ propose: propose, propose_account: null });
        }
    }, {
        key: "onProposeAccount",
        value: function onProposeAccount(propose_account) {
            this.setState({ propose_account: propose_account });
        }
    }, {
        key: "resetForm",
        value: function resetForm() {
            this.setState({ memo: "", to_name: "", to_account: null, amount: "" });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            var _this6 = this;

            e.preventDefault();
            this.setState({ error: null });
            var _state2 = this.state,
                asset = _state2.asset,
                amount = _state2.amount;

            var sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_19__["Asset"]({
                real: amount,
                asset_id: asset.get("id"),
                precision: asset.get("precision")
            });

            actions_AccountActions__WEBPACK_IMPORTED_MODULE_4__["default"].transfer(this.state.from_account.get("id"), this.state.to_account.get("id"), sendAmount.getAmount(), asset.get("id"), this.state.memo ? new Buffer(this.state.memo, "utf-8") : this.state.memo, this.state.propose ? this.state.propose_account : null, this.state.feeAsset ? this.state.feeAsset.get("id") : "1.3.0").then(function () {
                _this6.resetForm.call(_this6);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].unlisten(_this6.onTrxIncluded);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__["default"].listen(_this6.onTrxIncluded);
            }).catch(function (e) {
                var msg = e.message ? e.message.split("\n")[1] || e.message : null;
                console.log("error: ", e, msg);
                _this6.setState({ error: msg });
            });
        }
    }, {
        key: "setNestedRef",
        value: function setNestedRef(ref) {
            this.nestedRef = ref;
        }
    }, {
        key: "_setTotal",
        value: function _setTotal(asset_id, balance_id) {
            var feeAmount = this.state.feeAmount;

            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(balance_id);
            var transferAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(asset_id);

            var balance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_19__["Asset"]({
                amount: balanceObject.get("balance"),
                asset_id: transferAsset.get("id"),
                precision: transferAsset.get("precision")
            });

            if (balanceObject) {
                if (feeAmount.asset_id === balance.asset_id) {
                    balance.minus(feeAmount);
                }
                this.setState({ amount: balance.getAmount({ real: true }) }, this._checkBalance);
            }
        }
    }, {
        key: "_getAvailableAssets",
        value: function _getAvailableAssets() {
            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
            var feeStatus = this.state.feeStatus;

            function hasFeePoolBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasPoolBalance;
            }

            function hasBalance(id) {
                if (feeStatus[id] === undefined) return true;
                return feeStatus[id] && feeStatus[id].hasBalance;
            }

            var from_account = state.from_account,
                from_error = state.from_error;

            var asset_types = [],
                fee_asset_types = [];
            if (!(from_account && from_account.get("balances") && !from_error)) {
                return { asset_types: asset_types, fee_asset_types: fee_asset_types };
            }
            var account_balances = state.from_account.get("balances").toJS();
            asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].sortID);
            fee_asset_types = Object.keys(account_balances).sort(common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].sortID);
            for (var key in account_balances) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getObject(account_balances[key]);
                if (balanceObject && balanceObject.get("balance") === 0) {
                    asset_types.splice(asset_types.indexOf(key), 1);
                    if (fee_asset_types.indexOf(key) !== -1) {
                        fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
                    }
                }
            }

            fee_asset_types = fee_asset_types.filter(function (a) {
                return hasFeePoolBalance(a) && hasBalance(a);
            });

            return { asset_types: asset_types, fee_asset_types: fee_asset_types };
        }
    }, {
        key: "render",
        value: function render() {
            var from_error = null;
            var _state3 = this.state,
                propose = _state3.propose,
                from_account = _state3.from_account,
                to_account = _state3.to_account,
                asset = _state3.asset,
                asset_id = _state3.asset_id,
                propose_account = _state3.propose_account,
                feeAmount = _state3.feeAmount,
                amount = _state3.amount,
                error = _state3.error,
                to_name = _state3.to_name,
                from_name = _state3.from_name,
                memo = _state3.memo,
                feeAsset = _state3.feeAsset,
                fee_asset_id = _state3.fee_asset_id,
                balanceError = _state3.balanceError;

            var from_my_account = stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].isMyAccount(from_account) || from_name === this.props.passwordAccount;

            if (from_account && !from_my_account && !propose) {
                from_error = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    "span",
                    null,
                    counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("account.errors.not_yours"),
                    "\xA0(",
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "a",
                        { onClick: this.onPropose.bind(this, true) },
                        counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("propose")
                    ),
                    ")"
                );
            }

            var _getAvailableAssets5 = this._getAvailableAssets(),
                asset_types = _getAvailableAssets5.asset_types,
                fee_asset_types = _getAvailableAssets5.fee_asset_types;

            var balance = null;

            // Estimate fee
            var fee = this.state.feeAmount.getAmount({ real: true });
            if (from_account && from_account.get("balances") && !from_error) {
                var account_balances = from_account.get("balances").toJS();
                if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_15__["ChainStore"].getAsset(asset_types[0]);
                if (asset_types.length > 0) {
                    var current_asset_id = asset ? asset.get("id") : asset_types[0];
                    var feeID = feeAsset ? feeAsset.get("id") : "1.3.0";
                    balance = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "span",
                        {
                            style: {
                                borderBottom: "#A09F9F 1px dotted",
                                cursor: "pointer"
                            },
                            onClick: this._setTotal.bind(this, current_asset_id, account_balances[current_asset_id], fee, feeID)
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                            component: "span",
                            content: "transfer.available"
                        }),
                        ":",
                        " ",
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            balance: account_balances[current_asset_id]
                        })
                    );
                } else {
                    balance = "No funds";
                }
            }

            var propose_incomplete = propose && !propose_account;
            var amountValue = parseFloat(String.prototype.replace.call(amount, /,/g, ""));
            var isAmountValid = amountValue && !Object(lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__["default"])(amountValue);
            var isToAccountValid = to_account && to_account.get("name") === to_name;
            var isSendNotValid = !from_account || !isToAccountValid || !isAmountValid || !asset || from_error || propose_incomplete || balanceError;
            var accountsList = immutable__WEBPACK_IMPORTED_MODULE_14___default.a.Set();
            accountsList = accountsList.add(from_account);
            var tabIndex = 1;

            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    "div",
                    {
                        className: "grid-block shrink vertical medium-horizontal",
                        style: { paddingTop: "2rem" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "form",
                        {
                            style: { paddingBottom: 20, overflow: "visible" },
                            className: "grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",
                            onSubmit: this.onSubmit.bind(this),
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "transfer.header", component: "h2" }),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                label: "transfer.from",
                                ref: "from",
                                accountName: from_name,
                                onChange: this.fromChanged.bind(this),
                                onAccountChanged: this.onFromAccountChanged.bind(this),
                                account: from_account,
                                size: 60,
                                error: from_error,
                                typeahead: true,
                                tabIndex: tabIndex++
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                label: "transfer.to",
                                ref: "to",
                                accountName: to_name,
                                onChange: this.toChanged.bind(this),
                                onAccountChanged: this.onToAccountChanged.bind(this),
                                account: to_account,
                                size: 60,
                                tabIndex: tabIndex++,
                                typeahead: true
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "content-block transfer-input" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                label: "transfer.amount",
                                amount: amount,
                                onChange: this.onAmountChanged.bind(this),
                                asset: asset_types.length > 0 && asset ? asset.get("id") : asset_id ? asset_id : asset_types[0],
                                assets: asset_types,
                                display_balance: balance,
                                tabIndex: tabIndex++
                            }),
                            this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "p",
                                {
                                    className: "has-error no-margin",
                                    style: { paddingTop: 10 }
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "transfer.errors.insufficient" })
                            ) : null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "content-block transfer-input" },
                            memo && memo.length ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "label",
                                { className: "right-label" },
                                memo.length
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                className: "left-label tooltip",
                                component: "label",
                                content: "transfer.memo",
                                "data-place": "top",
                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_11___default.a.translate("tooltip.memo_tip")
                            }),
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
                                style: { marginBottom: 0 },
                                rows: "3",
                                value: memo,
                                tabIndex: tabIndex++,
                                onChange: this.onMemoChanged.bind(this)
                            }),
                            this.state.propose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "div",
                                {
                                    className: "error-area",
                                    style: { position: "absolute" }
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    content: "transfer.warn_name_unable_read_memo",
                                    name: this.state.from_name
                                })
                            ) : null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            {
                                className: "content-block transfer-input fee-row" + (this.state.propose ? " proposal" : "")
                            },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                refCallback: this.setNestedRef.bind(this),
                                label: "transfer.fee",
                                disabled: true,
                                amount: fee,
                                onChange: this.onFeeChanged.bind(this),
                                asset: fee_asset_types.length && feeAmount ? feeAmount.asset_id : fee_asset_types.length === 1 ? fee_asset_types[0] : fee_asset_id ? fee_asset_id : fee_asset_types[0],
                                assets: fee_asset_types,
                                tabIndex: tabIndex++,
                                error: this.state.hasPoolBalance === false ? "transfer.errors.insufficient" : null
                            }),
                            propose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "button",
                                {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_18___default()("button float-right no-margin", { disabled: isSendNotValid }),
                                    type: "submit",
                                    value: "Submit",
                                    tabIndex: tabIndex++
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "span",
                                    content: "propose"
                                })
                            ) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "button",
                                {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_18___default()("button float-right no-margin", { disabled: isSendNotValid }),
                                    type: "submit",
                                    value: "Submit",
                                    tabIndex: tabIndex++
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                    component: "span",
                                    content: "transfer.send"
                                })
                            )
                        ),
                        propose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "full-width-content form-group transfer-input" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.propose_from" })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                account_names: stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getMyAccounts(),
                                onChange: this.onProposeAccount.bind(this),
                                tabIndex: tabIndex++
                            })
                        ) : null,
                        error ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "content-block has-error" },
                            error
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            null,
                            propose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    "button",
                                    {
                                        className: " button",
                                        onClick: this.onPropose.bind(this, false),
                                        tabIndex: tabIndex++
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                        component: "span",
                                        content: "cancel"
                                    })
                                )
                            ) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-content small-12 medium-6 large-4 large-offset-1 right-column" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "grid-content no-padding" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_13__["RecentTransactions"], {
                                accountsList: accountsList,
                                limit: 25,
                                compactView: true,
                                filter: "transfer",
                                fullHeight: true
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "grid-content medium-6 large-4" })
                )
            );
        }
    }], [{
        key: "getInitialState",
        value: function getInitialState() {
            return {
                from_name: "",
                to_name: "",
                from_account: null,
                to_account: null,
                amount: "",
                asset_id: null,
                asset: null,
                memo: "",
                error: null,
                propose: false,
                propose_account: "",
                feeAsset: null,
                fee_asset_id: "1.3.0",
                feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_19__["Asset"]({ amount: 0 }),
                feeStatus: {}
            };
        }
    }]);

    return Transfer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_16__["connect"])(Transfer, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().currentAccount,
            passwordAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().passwordAccount,
            contactsList: stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__["default"].getState().accountContacts
        };
    }
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(425).Buffer))

/***/ }),

/***/ 2598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(2599);
const decodeComponent = __webpack_require__(2600);

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return (key, value, index) => {
				return value === null ? [
					encode(key, options),
					'[',
					index,
					']'
				].join('') : [
					encode(key, options),
					'[',
					encode(index, options),
					']=',
					encode(value, options)
				].join('');
			};
		case 'bracket':
			return (key, value) => {
				return value === null ? [encode(key, options), '[]'].join('') : [
					encode(key, options),
					'[]=',
					encode(value, options)
				].join('');
			};
		default:
			return (key, value) => {
				return value === null ? encode(key, options) : [
					encode(key, options),
					'=',
					encode(value, options)
				].join('');
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};
		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function extract(input) {
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return input.slice(queryStart + 1);
}

function parse(input, options) {
	options = Object.assign({decode: true, arrayFormat: 'none'}, options);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = param.replace(/\+/g, ' ').split('=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : decode(value, options);

		formatter(decode(key, options), value, ret);
	}

	return Object.keys(ret).sort().reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (obj, options) => {
	const defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	options = Object.assign(defaults, options);

	if (options.sort === false) {
		options.sort = () => {};
	}

	const formatter = encoderForArrayFormat(options);

	return obj ? Object.keys(obj).sort(options.sort).map(key => {
		const value = obj[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			const result = [];

			for (const value2 of value.slice()) {
				if (value2 === undefined) {
					continue;
				}

				result.push(formatter(key, value2, result.length));
			}

			return result.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&') : '';
};

exports.parseUrl = (input, options) => {
	return {
		url: input.split('?')[0] || '',
		query: parse(extract(input), options)
	};
};


/***/ }),

/***/ 2599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 2600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuOGNjYWNiY2NkN2IzOTFiMGE0ZGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVHJhbnNmZXIvVHJhbnNmZXIuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWNvZGUtdXJpLWNvbXBvbmVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0IGZyb20gXCIuLi9Gb3Jtcy9BY2NvdW50U2VsZWN0XCI7XG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlIGZyb20gXCJzdG9yZXMvVHJhbnNhY3Rpb25Db25maXJtU3RvcmVcIjtcbmltcG9ydCB7UmVjZW50VHJhbnNhY3Rpb25zfSBmcm9tIFwiLi4vQWNjb3VudC9SZWNlbnRUcmFuc2FjdGlvbnNcIjtcbmltcG9ydCBJbW11dGFibGUgZnJvbSBcImltbXV0YWJsZVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IHtcbiAgICBjaGVja0ZlZVN0YXR1c0FzeW5jLFxuICAgIGNoZWNrQmFsYW5jZSxcbiAgICBzaG91bGRQYXlGZWVXaXRoQXNzZXRBc3luY1xufSBmcm9tIFwiY29tbW9uL3RyeEhlbHBlclwiO1xuaW1wb3J0IHtkZWJvdW5jZSwgaXNOYU59IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge0Fzc2V0fSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XG5cbmNsYXNzIFRyYW5zZmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCBzdGF0ZSA9IFRyYW5zZmVyLmdldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5wYXJzZShwcm9wcy5sb2NhdGlvbi5zZWFyY2gpIHx8IHt9O1xuXG4gICAgICAgIGlmIChxdWVyeS5mcm9tKSB7XG4gICAgICAgICAgICBzdGF0ZS5mcm9tX25hbWUgPSBxdWVyeS5mcm9tO1xuICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHF1ZXJ5LmZyb20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVyeS50bykge1xuICAgICAgICAgICAgc3RhdGUudG9fbmFtZSA9IHF1ZXJ5LnRvO1xuICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHF1ZXJ5LnRvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkuYW1vdW50KSBzdGF0ZS5hbW91bnQgPSBxdWVyeS5hbW91bnQ7XG4gICAgICAgIGlmIChxdWVyeS5hc3NldCkge1xuICAgICAgICAgICAgc3RhdGUuYXNzZXRfaWQgPSBxdWVyeS5hc3NldDtcbiAgICAgICAgICAgIHN0YXRlLmFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChxdWVyeS5hc3NldCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXJ5Lm1lbW8pIHN0YXRlLm1lbW8gPSBxdWVyeS5tZW1vO1xuICAgICAgICBsZXQgY3VycmVudEFjY291bnQgPSBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudDtcbiAgICAgICAgaWYgKCFzdGF0ZS5mcm9tX25hbWUpIHN0YXRlLmZyb21fbmFtZSA9IGN1cnJlbnRBY2NvdW50O1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5vblRyeEluY2x1ZGVkID0gdGhpcy5vblRyeEluY2x1ZGVkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlID0gZGVib3VuY2UodGhpcy5fdXBkYXRlRmVlLmJpbmQodGhpcyksIDI1MCk7XG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzID0gdGhpcy5fY2hlY2tGZWVTdGF0dXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZyb21fbmFtZTogXCJcIixcbiAgICAgICAgICAgIHRvX25hbWU6IFwiXCIsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQ6IG51bGwsXG4gICAgICAgICAgICB0b19hY2NvdW50OiBudWxsLFxuICAgICAgICAgICAgYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IG51bGwsXG4gICAgICAgICAgICBhc3NldDogbnVsbCxcbiAgICAgICAgICAgIG1lbW86IFwiXCIsXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIHByb3Bvc2U6IGZhbHNlLFxuICAgICAgICAgICAgcHJvcG9zZV9hY2NvdW50OiBcIlwiLFxuICAgICAgICAgICAgZmVlQXNzZXQ6IG51bGwsXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQ6IFwiMS4zLjBcIixcbiAgICAgICAgICAgIGZlZUFtb3VudDogbmV3IEFzc2V0KHthbW91bnQ6IDB9KSxcbiAgICAgICAgICAgIGZlZVN0YXR1czoge31cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMubmVzdGVkUmVmID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzOiBjdXJyZW50X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzOiBuZXh0X2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cyhucyk7XG5cbiAgICAgICAgaWYgKG5leHRfYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KG5leHRfYXNzZXRfdHlwZXNbMF0pO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRfdHlwZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFtb3VudENoYW5nZWQoe2Ftb3VudDogbnMuYW1vdW50LCBhc3NldH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV4dF9hc3NldF90eXBlc1swXSAhPT0gdGhpcy5zdGF0ZS5mZWVfYXNzZXRfaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQgJiYgdGhpcy5zdGF0ZS5mZWVfYXNzZXRfaWQgIT09IG5leHRfYXNzZXRfdHlwZXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVBc3NldDogYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfaWQ6IG5leHRfYXNzZXRfdHlwZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnAuY3VycmVudEFjY291bnQgIT09IHRoaXMuc3RhdGUuZnJvbV9uYW1lICYmXG4gICAgICAgICAgICBucC5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmcm9tX25hbWU6IG5wLmN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQ6IENoYWluU3RvcmUuZ2V0QWNjb3VudChucC5jdXJyZW50QWNjb3VudCksXG4gICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1czoge30sXG4gICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF9pZDogXCIxLjMuMFwiLFxuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IG5ldyBBc3NldCh7YW1vdW50OiAwfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50KG5wLmN1cnJlbnRBY2NvdW50KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2hlY2tCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBhbW91bnQsIGZyb21fYWNjb3VudCwgYXNzZXR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKCFhc3NldCB8fCAhZnJvbV9hY2NvdW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJhbGFuY2VJRCA9IGZyb21fYWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBhc3NldC5nZXQoXCJpZFwiKV0pO1xuICAgICAgICBjb25zdCBmZWVCYWxhbmNlSUQgPSBmcm9tX2FjY291bnQuZ2V0SW4oW1xuICAgICAgICAgICAgXCJiYWxhbmNlc1wiLFxuICAgICAgICAgICAgZmVlQW1vdW50LmFzc2V0X2lkXG4gICAgICAgIF0pO1xuICAgICAgICBpZiAoIWFzc2V0IHx8ICFmcm9tX2FjY291bnQpIHJldHVybjtcbiAgICAgICAgaWYgKCFiYWxhbmNlSUQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6IHRydWV9KTtcbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlSUQpO1xuICAgICAgICBsZXQgZmVlQmFsYW5jZU9iamVjdCA9IGZlZUJhbGFuY2VJRFxuICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldE9iamVjdChmZWVCYWxhbmNlSUQpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmICghZmVlQmFsYW5jZU9iamVjdCB8fCBmZWVCYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZV9hc3NldF9pZDogXCIxLjMuMFwifSwgdGhpcy5fdXBkYXRlRmVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJhbGFuY2VPYmplY3QgfHwgIWZlZUFtb3VudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBoYXNCYWxhbmNlID0gY2hlY2tCYWxhbmNlKFxuICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICBmZWVBbW91bnQsXG4gICAgICAgICAgICBiYWxhbmNlT2JqZWN0XG4gICAgICAgICk7XG4gICAgICAgIGlmIChoYXNCYWxhbmNlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogIWhhc0JhbGFuY2V9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tGZWVTdGF0dXMoYWNjb3VudCA9IHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50KSB7XG4gICAgICAgIGlmICghYWNjb3VudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IE9iamVjdC5rZXlzKGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpKS5zb3J0KFxuICAgICAgICAgICAgdXRpbHMuc29ydElEXG4gICAgICAgICk7XG4gICAgICAgIGxldCBmZWVTdGF0dXMgPSB7fTtcbiAgICAgICAgbGV0IHAgPSBbXTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBwLnB1c2goXG4gICAgICAgICAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZmVlSUQ6IGEsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgUHJvbWlzZS5hbGwocClcbiAgICAgICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goKGEsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXNbYV0gPSBzdGF0dXNbaWR4XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KHRoaXMuc3RhdGUuZmVlU3RhdHVzLCBmZWVTdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdXBkYXRlRmVlKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBsZXQge2ZlZV9hc3NldF9pZCwgZnJvbV9hY2NvdW50LCBhc3NldF9pZH0gPSBzdGF0ZTtcbiAgICAgICAgY29uc3Qge2ZlZV9hc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXNbMF0gIT09IGZlZV9hc3NldF9pZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZCA9IGZlZV9hc3NldF90eXBlc1swXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZyb21fYWNjb3VudCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xuICAgICAgICAgICAgYWNjb3VudElEOiBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBmZWVJRDogZmVlX2Fzc2V0X2lkLFxuICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHN0YXRlLm1lbW9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoe2ZlZSwgaGFzQmFsYW5jZSwgaGFzUG9vbEJhbGFuY2V9KSA9PlxuICAgICAgICAgICAgc2hvdWxkUGF5RmVlV2l0aEFzc2V0QXN5bmMoZnJvbV9hY2NvdW50LCBmZWUpLnRoZW4oXG4gICAgICAgICAgICAgICAgc2hvdWxkID0+XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZV9hc3NldF9pZDogYXNzZXRfaWR9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IGZlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF9pZDogZmVlLmFzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Bvb2xCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICFoYXNCYWxhbmNlIHx8ICFoYXNQb29sQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZyb21DaGFuZ2VkKGZyb21fbmFtZSkge1xuICAgICAgICBpZiAoIWZyb21fbmFtZSkgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9hY2NvdW50OiBudWxsfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZnJvbV9uYW1lLFxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBwcm9wb3NlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb3Bvc2VfYWNjb3VudDogXCJcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b0NoYW5nZWQodG9fbmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19uYW1lLCBlcnJvcjogbnVsbH0pO1xuICAgIH1cblxuICAgIG9uRnJvbUFjY291bnRDaGFuZ2VkKGZyb21fYWNjb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tX2FjY291bnQsIGVycm9yOiBudWxsfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRvQWNjb3VudENoYW5nZWQodG9fYWNjb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19hY2NvdW50LCBlcnJvcjogbnVsbH0pO1xuICAgIH1cblxuICAgIG9uQW1vdW50Q2hhbmdlZCh7YW1vdW50LCBhc3NldH0pIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7YW1vdW50LCBhc3NldCwgYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpLCBlcnJvcjogbnVsbH0sXG4gICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkZlZUNoYW5nZWQoe2Fzc2V0fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge2ZlZUFzc2V0OiBhc3NldCwgZmVlX2Fzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSwgZXJyb3I6IG51bGx9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25NZW1vQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW86IGUudGFyZ2V0LnZhbHVlfSwgdGhpcy5fdXBkYXRlRmVlKTtcbiAgICB9XG5cbiAgICBvblRyeEluY2x1ZGVkKGNvbmZpcm1fc3RvcmVfc3RhdGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5pbmNsdWRlZCAmJlxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5icm9hZGNhc3RlZF90cmFuc2FjdGlvblxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoVHJhbnNmZXIuZ2V0SW5pdGlhbFN0YXRlKCkpO1xuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUudW5saXN0ZW4odGhpcy5vblRyeEluY2x1ZGVkKTtcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnJlc2V0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlybV9zdG9yZV9zdGF0ZS5jbG9zZWQpIHtcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnVubGlzdGVuKHRoaXMub25UcnhJbmNsdWRlZCk7XG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Qcm9wb3NlKHByb3Bvc2UsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9wb3NlLCBwcm9wb3NlX2FjY291bnQ6IG51bGx9KTtcbiAgICB9XG5cbiAgICBvblByb3Bvc2VBY2NvdW50KHByb3Bvc2VfYWNjb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9wb3NlX2FjY291bnR9KTtcbiAgICB9XG5cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW86IFwiXCIsIHRvX25hbWU6IFwiXCIsIHRvX2FjY291bnQ6IG51bGwsIGFtb3VudDogXCJcIn0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogbnVsbH0pO1xuICAgICAgICBjb25zdCB7YXNzZXQsIGFtb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzZW5kQW1vdW50ID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIHJlYWw6IGFtb3VudCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEFjY291bnRBY3Rpb25zLnRyYW5zZmVyKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBzZW5kQW1vdW50LmdldEFtb3VudCgpLFxuICAgICAgICAgICAgYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICA/IG5ldyBCdWZmZXIodGhpcy5zdGF0ZS5tZW1vLCBcInV0Zi04XCIpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLm1lbW8sXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByb3Bvc2UgPyB0aGlzLnN0YXRlLnByb3Bvc2VfYWNjb3VudCA6IG51bGwsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZlZUFzc2V0ID8gdGhpcy5zdGF0ZS5mZWVBc3NldC5nZXQoXCJpZFwiKSA6IFwiMS4zLjBcIlxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS51bmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xuICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbXNnID0gZS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgID8gZS5tZXNzYWdlLnNwbGl0KFwiXFxuXCIpWzFdIHx8IGUubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIsIGUsIG1zZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG1zZ30pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0TmVzdGVkUmVmKHJlZikge1xuICAgICAgICB0aGlzLm5lc3RlZFJlZiA9IHJlZjtcbiAgICB9XG5cbiAgICBfc2V0VG90YWwoYXNzZXRfaWQsIGJhbGFuY2VfaWQpIHtcbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2VfaWQpO1xuICAgICAgICBsZXQgdHJhbnNmZXJBc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFzc2V0X2lkKTtcblxuICAgICAgICBsZXQgYmFsYW5jZSA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICBhbW91bnQ6IGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSxcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0cmFuc2ZlckFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0cmFuc2ZlckFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGZlZUFtb3VudC5hc3NldF9pZCA9PT0gYmFsYW5jZS5hc3NldF9pZCkge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UubWludXMoZmVlQW1vdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge2Ftb3VudDogYmFsYW5jZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KX0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY29uc3Qge2ZlZVN0YXR1c30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBmdW5jdGlvbiBoYXNGZWVQb29sQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc1Bvb2xCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFzQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7ZnJvbV9hY2NvdW50LCBmcm9tX2Vycm9yfSA9IHN0YXRlO1xuICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBbXSxcbiAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcyA9IFtdO1xuICAgICAgICBpZiAoIShmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpICYmICFmcm9tX2Vycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIHthc3NldF90eXBlcywgZmVlX2Fzc2V0X3R5cGVzfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgIGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRfYmFsYW5jZXNba2V5XSk7XG4gICAgICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCAmJiBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5zcGxpY2UoYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBmZWVfYXNzZXRfdHlwZXMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGhhc0ZlZVBvb2xCYWxhbmNlKGEpICYmIGhhc0JhbGFuY2UoYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7YXNzZXRfdHlwZXMsIGZlZV9hc3NldF90eXBlc307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZnJvbV9lcnJvciA9IG51bGw7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBwcm9wb3NlLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgYXNzZXRfaWQsXG4gICAgICAgICAgICBwcm9wb3NlX2FjY291bnQsXG4gICAgICAgICAgICBmZWVBbW91bnQsXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgIHRvX25hbWUsXG4gICAgICAgICAgICBmcm9tX25hbWUsXG4gICAgICAgICAgICBtZW1vLFxuICAgICAgICAgICAgZmVlQXNzZXQsXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQsXG4gICAgICAgICAgICBiYWxhbmNlRXJyb3JcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBmcm9tX215X2FjY291bnQgPVxuICAgICAgICAgICAgQWNjb3VudFN0b3JlLmlzTXlBY2NvdW50KGZyb21fYWNjb3VudCkgfHxcbiAgICAgICAgICAgIGZyb21fbmFtZSA9PT0gdGhpcy5wcm9wcy5wYXNzd29yZEFjY291bnQ7XG5cbiAgICAgICAgaWYgKGZyb21fYWNjb3VudCAmJiAhZnJvbV9teV9hY2NvdW50ICYmICFwcm9wb3NlKSB7XG4gICAgICAgICAgICBmcm9tX2Vycm9yID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5lcnJvcnMubm90X3lvdXJzXCIpfVxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsoPGEgb25DbGljaz17dGhpcy5vblByb3Bvc2UuYmluZCh0aGlzLCB0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwicHJvcG9zZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPilcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHthc3NldF90eXBlcywgZmVlX2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuICAgICAgICBsZXQgYmFsYW5jZSA9IG51bGw7XG5cbiAgICAgICAgLy8gRXN0aW1hdGUgZmVlXG4gICAgICAgIGxldCBmZWUgPSB0aGlzLnN0YXRlLmZlZUFtb3VudC5nZXRBbW91bnQoe3JlYWw6IHRydWV9KTtcbiAgICAgICAgaWYgKGZyb21fYWNjb3VudCAmJiBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikgJiYgIWZyb21fZXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBhY2NvdW50X2JhbGFuY2VzID0gZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFzc2V0X3R5cGVzWzBdKTtcbiAgICAgICAgICAgIGlmIChhc3NldF90eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfYXNzZXRfaWQgPSBhc3NldCA/IGFzc2V0LmdldChcImlkXCIpIDogYXNzZXRfdHlwZXNbMF07XG4gICAgICAgICAgICAgICAgbGV0IGZlZUlEID0gZmVlQXNzZXQgPyBmZWVBc3NldC5nZXQoXCJpZFwiKSA6IFwiMS4zLjBcIjtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IFwiI0EwOUY5RiAxcHggZG90dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX3NldFRvdGFsLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2Fzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZUlEXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLmF2YWlsYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPjp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFsYW5jZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e2FjY291bnRfYmFsYW5jZXNbY3VycmVudF9hc3NldF9pZF19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IFwiTm8gZnVuZHNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9wb3NlX2luY29tcGxldGUgPSBwcm9wb3NlICYmICFwcm9wb3NlX2FjY291bnQ7XG4gICAgICAgIGNvbnN0IGFtb3VudFZhbHVlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZS5jYWxsKGFtb3VudCwgLywvZywgXCJcIilcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaXNBbW91bnRWYWxpZCA9IGFtb3VudFZhbHVlICYmICFpc05hTihhbW91bnRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGlzVG9BY2NvdW50VmFsaWQgPVxuICAgICAgICAgICAgdG9fYWNjb3VudCAmJiB0b19hY2NvdW50LmdldChcIm5hbWVcIikgPT09IHRvX25hbWU7XG4gICAgICAgIGNvbnN0IGlzU2VuZE5vdFZhbGlkID1cbiAgICAgICAgICAgICFmcm9tX2FjY291bnQgfHxcbiAgICAgICAgICAgICFpc1RvQWNjb3VudFZhbGlkIHx8XG4gICAgICAgICAgICAhaXNBbW91bnRWYWxpZCB8fFxuICAgICAgICAgICAgIWFzc2V0IHx8XG4gICAgICAgICAgICBmcm9tX2Vycm9yIHx8XG4gICAgICAgICAgICBwcm9wb3NlX2luY29tcGxldGUgfHxcbiAgICAgICAgICAgIGJhbGFuY2VFcnJvcjtcbiAgICAgICAgbGV0IGFjY291bnRzTGlzdCA9IEltbXV0YWJsZS5TZXQoKTtcbiAgICAgICAgYWNjb3VudHNMaXN0ID0gYWNjb3VudHNMaXN0LmFkZChmcm9tX2FjY291bnQpO1xuICAgICAgICBsZXQgdGFiSW5kZXggPSAxO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiBcIjJyZW1cIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMCwgb3ZlcmZsb3c6IFwidmlzaWJsZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC0xMiBtZWRpdW0tNiBsYXJnZS01IGxhcmdlLW9mZnNldC0xIGZ1bGwtd2lkdGgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJ0cmFuc2Zlci5oZWFkZXJcIiBjb21wb25lbnQ9XCJoMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogIEYgUiBPIE0gICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLmZyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJmcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e2Zyb21fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZnJvbUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vbkZyb21BY2NvdW50Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXtmcm9tX2FjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezYwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZnJvbV9lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogIFQgTyAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIudG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lPXt0b19uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY2NvdW50Q2hhbmdlZD17dGhpcy5vblRvQWNjb3VudENoYW5nZWQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dG9fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICBBIE0gTyBVIE4gVCAgICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQW1vdW50Q2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5sZW5ndGggPiAwICYmIGFzc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldC5nZXQoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFzc2V0X3R5cGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXthc3NldF90eXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheV9iYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJhbGFuY2VFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1lcnJvciBuby1tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nVG9wOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmVycm9ycy5pbnN1ZmZpY2llbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgTSBFIE0gTyAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVtbyAmJiBtZW1vLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJpZ2h0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVtby5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsIHRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5tZW1vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPXtjb3VudGVycGFydC50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXAubWVtb190aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVtb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWVtb0NoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB3YXJuaW5nICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByb3Bvc2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yLWFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogXCJhYnNvbHV0ZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci53YXJuX25hbWVfdW5hYmxlX3JlYWRfbWVtb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5mcm9tX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogIEYgRSBFICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LWJsb2NrIHRyYW5zZmVyLWlucHV0IGZlZS1yb3dcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnByb3Bvc2UgPyBcIiBwcm9wb3NhbFwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkNhbGxiYWNrPXt0aGlzLnNldE5lc3RlZFJlZi5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRyYW5zZmVyLmZlZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2ZlZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GZWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcy5sZW5ndGggJiYgZmVlQW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmZWVBbW91bnQuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZlZV9hc3NldF90eXBlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmZWVfYXNzZXRfdHlwZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmZWVfYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmVlX2Fzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZlZV9hc3NldF90eXBlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cz17ZmVlX2Fzc2V0X3R5cGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oYXNQb29sQmFsYW5jZSA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wb3NlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gZmxvYXQtcmlnaHQgbm8tbWFyZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc2FibGVkOiBpc1NlbmROb3RWYWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInByb3Bvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGZsb2F0LXJpZ2h0IG5vLW1hcmdpblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNhYmxlZDogaXNTZW5kTm90VmFsaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ0cmFuc2Zlci5zZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFAgUiBPIFAgTyBTIEUgICBGIFIgTyBNXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGF2aW5nIHNvbWUgcHJvcG9zZWQgdHJhbnNhY3Rpb24gbG9naWMgaGVyZSAocHJpb3IgdG8gdGhlIHRyYW5zYWN0aW9uIGNvbmZpcm1hdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd3MgYWRqdXN0aW5nIG9mIHRoZSBtZW1vIHRvIC8gZnJvbSBwYXJhbWV0ZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcG9zZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtd2lkdGgtY29udGVudCBmb3JtLWdyb3VwIHRyYW5zZmVyLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnByb3Bvc2VfZnJvbVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X25hbWVzPXtBY2NvdW50U3RvcmUuZ2V0TXlBY2NvdW50cygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Qcm9wb3NlQWNjb3VudC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICBTIEUgTiBEICBCIFUgVCBUIE8gTiAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrIGhhcy1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3Bvc2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Qcm9wb3NlLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVE9ETzogc2hvdyByZW1haW5pbmcgYmFsYW5jZSAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC0xMiBtZWRpdW0tNiBsYXJnZS00IGxhcmdlLW9mZnNldC0xIHJpZ2h0LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWNlbnRUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHNMaXN0PXthY2NvdW50c0xpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0PXsyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdFZpZXc9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcj1cInRyYW5zZmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbEhlaWdodD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IG1lZGl1bS02IGxhcmdlLTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIFRyYW5zZmVyLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnQsXG4gICAgICAgICAgICAgICAgY29udGFjdHNMaXN0OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50Q29udGFjdHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcbmNvbnN0IGRlY29kZUNvbXBvbmVudCA9IHJlcXVpcmUoJ2RlY29kZS11cmktY29tcG9uZW50Jyk7XG5cbmZ1bmN0aW9uIGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgaW5kZXgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdGlvbnMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHQnXSdcblx0XHRcdFx0XS5qb2luKCcnKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRpb25zKSxcblx0XHRcdFx0XHQnWycsXG5cdFx0XHRcdFx0ZW5jb2RlKGluZGV4LCBvcHRpb25zKSxcblx0XHRcdFx0XHQnXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0aW9ucylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gW2VuY29kZShrZXksIG9wdGlvbnMpLCAnW10nXS5qb2luKCcnKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRpb25zKSxcblx0XHRcdFx0XHQnW109Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdGlvbnMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gZW5jb2RlKGtleSwgb3B0aW9ucykgOiBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0aW9ucyksXG5cdFx0XHRcdFx0Jz0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0aW9ucylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucykge1xuXHRsZXQgcmVzdWx0O1xuXG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0cmVzdWx0ID0gL1xcWyhcXGQqKVxcXSQvLmV4ZWMoa2V5KTtcblxuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkKlxcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB7fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV1bcmVzdWx0WzFdXSA9IHZhbHVlO1xuXHRcdFx0fTtcblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0cmVzdWx0ID0gLyhcXFtcXF0pJC8uZXhlYyhrZXkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFt2YWx1ZV07XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmRlY29kZSkge1xuXHRcdHJldHVybiBkZWNvZGVDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBrZXlzU29ydGVyKGlucHV0KSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dC5zb3J0KCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBrZXlzU29ydGVyKE9iamVjdC5rZXlzKGlucHV0KSlcblx0XHRcdC5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYSkgLSBOdW1iZXIoYikpXG5cdFx0XHQubWFwKGtleSA9PiBpbnB1dFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdChpbnB1dCkge1xuXHRjb25zdCBxdWVyeVN0YXJ0ID0gaW5wdXQuaW5kZXhPZignPycpO1xuXHRpZiAocXVlcnlTdGFydCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0cmV0dXJuIGlucHV0LnNsaWNlKHF1ZXJ5U3RhcnQgKyAxKTtcbn1cblxuZnVuY3Rpb24gcGFyc2UoaW5wdXQsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe2RlY29kZTogdHJ1ZSwgYXJyYXlGb3JtYXQ6ICdub25lJ30sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IGZvcm1hdHRlciA9IHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBubyBwcm90b3R5cGVcblx0Y29uc3QgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRpbnB1dCA9IGlucHV0LnRyaW0oKS5yZXBsYWNlKC9eWz8jJl0vLCAnJyk7XG5cblx0aWYgKCFpbnB1dCkge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRmb3IgKGNvbnN0IHBhcmFtIG9mIGlucHV0LnNwbGl0KCcmJykpIHtcblx0XHRsZXQgW2tleSwgdmFsdWVdID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcblxuXHRcdC8vIE1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG5cdFx0Ly8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuXHRcdHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXG5cdFx0Zm9ybWF0dGVyKGRlY29kZShrZXksIG9wdGlvbnMpLCB2YWx1ZSwgcmV0KTtcblx0fVxuXG5cdHJldHVybiBPYmplY3Qua2V5cyhyZXQpLnNvcnQoKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdFtrZXldID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5cbmV4cG9ydHMuZXh0cmFjdCA9IGV4dHJhY3Q7XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gKG9iaiwgb3B0aW9ucykgPT4ge1xuXHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZSdcblx0fTtcblxuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgb3B0aW9ucyk7XG5cblx0aWYgKG9wdGlvbnMuc29ydCA9PT0gZmFsc2UpIHtcblx0XHRvcHRpb25zLnNvcnQgPSAoKSA9PiB7fTtcblx0fVxuXG5cdGNvbnN0IGZvcm1hdHRlciA9IGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKTtcblxuXHRyZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KG9wdGlvbnMuc29ydCkubWFwKGtleSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSBvYmpba2V5XTtcblxuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcblxuXHRcdFx0Zm9yIChjb25zdCB2YWx1ZTIgb2YgdmFsdWUuc2xpY2UoKSkge1xuXHRcdFx0XHRpZiAodmFsdWUyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGZvcm1hdHRlcihrZXksIHZhbHVlMiwgcmVzdWx0Lmxlbmd0aCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucykgKyAnPScgKyBlbmNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHR9KS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCA+IDApLmpvaW4oJyYnKSA6ICcnO1xufTtcblxuZXhwb3J0cy5wYXJzZVVybCA9IChpbnB1dCwgb3B0aW9ucykgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHVybDogaW5wdXQuc3BsaXQoJz8nKVswXSB8fCAnJyxcblx0XHRxdWVyeTogcGFyc2UoZXh0cmFjdChpbnB1dCksIG9wdGlvbnMpXG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCB4ID0+IGAlJHt4LmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9rZW4gPSAnJVthLWYwLTldezJ9JztcbnZhciBzaW5nbGVNYXRjaGVyID0gbmV3IFJlZ0V4cCh0b2tlbiwgJ2dpJyk7XG52YXIgbXVsdGlNYXRjaGVyID0gbmV3IFJlZ0V4cCgnKCcgKyB0b2tlbiArICcpKycsICdnaScpO1xuXG5mdW5jdGlvbiBkZWNvZGVDb21wb25lbnRzKGNvbXBvbmVudHMsIHNwbGl0KSB7XG5cdHRyeSB7XG5cdFx0Ly8gVHJ5IHRvIGRlY29kZSB0aGUgZW50aXJlIHN0cmluZyBmaXJzdFxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29tcG9uZW50cy5qb2luKCcnKSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIERvIG5vdGhpbmdcblx0fVxuXG5cdGlmIChjb21wb25lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiBjb21wb25lbnRzO1xuXHR9XG5cblx0c3BsaXQgPSBzcGxpdCB8fCAxO1xuXG5cdC8vIFNwbGl0IHRoZSBhcnJheSBpbiAyIHBhcnRzXG5cdHZhciBsZWZ0ID0gY29tcG9uZW50cy5zbGljZSgwLCBzcGxpdCk7XG5cdHZhciByaWdodCA9IGNvbXBvbmVudHMuc2xpY2Uoc3BsaXQpO1xuXG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmNhbGwoW10sIGRlY29kZUNvbXBvbmVudHMobGVmdCksIGRlY29kZUNvbXBvbmVudHMocmlnaHQpKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHZhciB0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKTtcblxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbnB1dCA9IGRlY29kZUNvbXBvbmVudHModG9rZW5zLCBpKS5qb2luKCcnKTtcblxuXHRcdFx0dG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGN1c3RvbURlY29kZVVSSUNvbXBvbmVudChpbnB1dCkge1xuXHQvLyBLZWVwIHRyYWNrIG9mIGFsbCB0aGUgcmVwbGFjZW1lbnRzIGFuZCBwcmVmaWxsIHRoZSBtYXAgd2l0aCB0aGUgYEJPTWBcblx0dmFyIHJlcGxhY2VNYXAgPSB7XG5cdFx0JyVGRSVGRic6ICdcXHVGRkZEXFx1RkZGRCcsXG5cdFx0JyVGRiVGRSc6ICdcXHVGRkZEXFx1RkZGRCdcblx0fTtcblxuXHR2YXIgbWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdHdoaWxlIChtYXRjaCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBEZWNvZGUgYXMgYmlnIGNodW5rcyBhcyBwb3NzaWJsZVxuXHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMF0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGRlY29kZShtYXRjaFswXSk7XG5cblx0XHRcdGlmIChyZXN1bHQgIT09IG1hdGNoWzBdKSB7XG5cdFx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR9XG5cblx0Ly8gQWRkIGAlQzJgIGF0IHRoZSBlbmQgb2YgdGhlIG1hcCB0byBtYWtlIHN1cmUgaXQgZG9lcyBub3QgcmVwbGFjZSB0aGUgY29tYmluYXRvciBiZWZvcmUgZXZlcnl0aGluZyBlbHNlXG5cdHJlcGxhY2VNYXBbJyVDMiddID0gJ1xcdUZGRkQnO1xuXG5cdHZhciBlbnRyaWVzID0gT2JqZWN0LmtleXMocmVwbGFjZU1hcCk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gUmVwbGFjZSBhbGwgZGVjb2RlZCBjb21wb25lbnRzXG5cdFx0dmFyIGtleSA9IGVudHJpZXNbaV07XG5cdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKG5ldyBSZWdFeHAoa2V5LCAnZycpLCByZXBsYWNlTWFwW2tleV0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbmNvZGVkVVJJKSB7XG5cdGlmICh0eXBlb2YgZW5jb2RlZFVSSSAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBgZW5jb2RlZFVSSWAgdG8gYmUgb2YgdHlwZSBgc3RyaW5nYCwgZ290IGAnICsgdHlwZW9mIGVuY29kZWRVUkkgKyAnYCcpO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRlbmNvZGVkVVJJID0gZW5jb2RlZFVSSS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcblxuXHRcdC8vIFRyeSB0aGUgYnVpbHQgaW4gZGVjb2RlciBmaXJzdFxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIEZhbGxiYWNrIHRvIGEgbW9yZSBhZHZhbmNlZCBkZWNvZGVyXG5cdFx0cmV0dXJuIGN1c3RvbURlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQTRCQTtBQUNBOzs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUdBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFOQTtBQUZBO0FBaUJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUFBO0FBQ0E7QUFZQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBa0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFBQTtBQU9BO0FBQ0E7QUFqQ0E7QUFBQTtBQUFBO0FBQ0E7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFhQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQURBO0FBakJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFEQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQWpCQTtBQTBCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUF4QkE7QUFxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBakJBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBZUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBN0NBO0FBa0VBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBREE7QUFGQTtBQTdMQTtBQW1OQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBREE7QUFZQTtBQW5PQTtBQURBO0FBd09BOzs7QUFocUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTs7OztBQWpEQTtBQUNBO0FBaXNCQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7Ozs7Ozs7OztBQzd0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM3TkE7QUFDQTs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=