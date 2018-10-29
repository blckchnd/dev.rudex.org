(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 2730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var lodash_es_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2079);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2319);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(578);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1865);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Forms_AccountSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2083);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2308);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(562);
/* harmony import */ var _Utility_AmountSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2084);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(580);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(584);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2318);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2429);
/* harmony import */ var _Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2694);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(429);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1859);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(594);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(829);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(595);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2731);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _Modal_SendModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2078);



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
        var query = query_string__WEBPACK_IMPORTED_MODULE_21___default.a.parse(props.location.search) || {};

        if (query.from) {
            state.from_name = query.from;
            bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getAccount(query.from);
        }
        if (query.to) {
            state.to_name = query.to;
            bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getAccount(query.to);
        }
        if (query.amount) state.amount = query.amount;
        if (query.asset) {
            state.asset_id = query.asset;
            state.asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getAsset(query.asset);
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
                var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getAsset(next_asset_types[0]);
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
                    from_account: bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getAccount(np.currentAccount),
                    feeStatus: {},
                    fee_asset_id: "1.3.0",
                    feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_20__["Asset"]({ amount: 0 })
                }, function () {
                    _this2._updateFee();
                    _this2._checkFeeStatus(bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getAccount(np.currentAccount));
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
            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getObject(balanceID);
            var feeBalanceObject = feeBalanceID ? bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getObject(feeBalanceID) : null;
            if (!feeBalanceObject || feeBalanceObject.get("balance") === 0) {
                this.setState({ fee_asset_id: "1.3.0" }, this._updateFee);
            }
            if (!balanceObject || !feeAmount) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_18__["checkBalance"])(amount, asset, feeAmount, balanceObject);
            if (hasBalance === null) return;
            this.setState({ balanceError: !hasBalance });
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this3 = this;

            var account = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.from_account;

            if (!account || !account.get("balances")) return;

            var assets = Object.keys(account.get("balances").toJS()).sort(common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].sortID);
            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_18__["checkFeeStatusAsync"])({
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
            Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_18__["checkFeeStatusAsync"])({
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
                return Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_18__["shouldPayFeeWithAssetAsync"])(from_account, fee).then(function (should) {
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

            var sendAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_20__["Asset"]({
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

            var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getObject(balance_id);
            var transferAsset = bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getObject(asset_id);

            var balance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_20__["Asset"]({
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
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getObject(account_balances[key]);
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
            var _this7 = this;

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
                if (asset_types.length === 1) asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_16__["ChainStore"].getAsset(asset_types[0]);
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
            var accountsList = immutable__WEBPACK_IMPORTED_MODULE_15___default.a.Set();
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
                        "div",
                        { className: "grid-content small-12 medium-12 large-10 large-offset-1 full-width-content" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Modal_SendModal__WEBPACK_IMPORTED_MODULE_22__["default"], {
                            id: "send_modal_header",
                            refCallback: function refCallback(e) {
                                if (e) _this7.send_modal = e;
                            },
                            from_name: this.props.currentAccount
                        }),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_13__["default"], {
                            string: "transfer.phase_out_warning",
                            keys: [{
                                arg: "modal_link",
                                value: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    "a",
                                    {
                                        onClick: function onClick() {
                                            if (_this7.send_modal) _this7.send_modal.show();
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "header.payments" })
                                )
                            }]
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    "div",
                    {
                        className: "grid-block shrink vertical medium-horizontal",
                        style: { paddingTop: "1rem" }
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
                                    className: classnames__WEBPACK_IMPORTED_MODULE_19___default()("button float-right no-margin", { disabled: isSendNotValid }),
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
                                    className: classnames__WEBPACK_IMPORTED_MODULE_19___default()("button float-right no-margin", { disabled: isSendNotValid }),
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
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Account_RecentTransactions__WEBPACK_IMPORTED_MODULE_14__["RecentTransactions"], {
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
                feeAmount: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_20__["Asset"]({ amount: 0 }),
                feeStatus: {}
            };
        }
    }]);

    return Transfer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_17__["connect"])(Transfer, {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 2731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(2732);
const decodeComponent = __webpack_require__(2733);

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

/***/ 2732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 2733:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuZmVkOGNkNmIyOWU3M2RmODJmMzkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVHJhbnNmZXIvVHJhbnNmZXIuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWNvZGUtdXJpLWNvbXBvbmVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmFsYW5jZUNvbXBvbmVudCBmcm9tIFwiLi4vVXRpbGl0eS9CYWxhbmNlQ29tcG9uZW50XCI7XG5pbXBvcnQgQWNjb3VudEFjdGlvbnMgZnJvbSBcImFjdGlvbnMvQWNjb3VudEFjdGlvbnNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBBY2NvdW50U2VsZWN0IGZyb20gXCIuLi9Gb3Jtcy9BY2NvdW50U2VsZWN0XCI7XG5pbXBvcnQgQWNjb3VudFNlbGVjdG9yIGZyb20gXCIuLi9BY2NvdW50L0FjY291bnRTZWxlY3RvclwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlIGZyb20gXCJzdG9yZXMvVHJhbnNhY3Rpb25Db25maXJtU3RvcmVcIjtcbmltcG9ydCBUcmFuc2xhdGVXaXRoTGlua3MgZnJvbSBcIi4uL1V0aWxpdHkvVHJhbnNsYXRlV2l0aExpbmtzXCI7XG5pbXBvcnQge1JlY2VudFRyYW5zYWN0aW9uc30gZnJvbSBcIi4uL0FjY291bnQvUmVjZW50VHJhbnNhY3Rpb25zXCI7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gXCJpbW11dGFibGVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCB7XG4gICAgY2hlY2tGZWVTdGF0dXNBc3luYyxcbiAgICBjaGVja0JhbGFuY2UsXG4gICAgc2hvdWxkUGF5RmVlV2l0aEFzc2V0QXN5bmNcbn0gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcbmltcG9ydCB7ZGVib3VuY2UsIGlzTmFOfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHtBc3NldH0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xuaW1wb3J0IFNlbmRNb2RhbCBmcm9tIFwiLi4vTW9kYWwvU2VuZE1vZGFsXCI7XG5cbmNsYXNzIFRyYW5zZmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCBzdGF0ZSA9IFRyYW5zZmVyLmdldEluaXRpYWxTdGF0ZSgpO1xuICAgICAgICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5wYXJzZShwcm9wcy5sb2NhdGlvbi5zZWFyY2gpIHx8IHt9O1xuXG4gICAgICAgIGlmIChxdWVyeS5mcm9tKSB7XG4gICAgICAgICAgICBzdGF0ZS5mcm9tX25hbWUgPSBxdWVyeS5mcm9tO1xuICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHF1ZXJ5LmZyb20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChxdWVyeS50bykge1xuICAgICAgICAgICAgc3RhdGUudG9fbmFtZSA9IHF1ZXJ5LnRvO1xuICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50KHF1ZXJ5LnRvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlcnkuYW1vdW50KSBzdGF0ZS5hbW91bnQgPSBxdWVyeS5hbW91bnQ7XG4gICAgICAgIGlmIChxdWVyeS5hc3NldCkge1xuICAgICAgICAgICAgc3RhdGUuYXNzZXRfaWQgPSBxdWVyeS5hc3NldDtcbiAgICAgICAgICAgIHN0YXRlLmFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChxdWVyeS5hc3NldCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXJ5Lm1lbW8pIHN0YXRlLm1lbW8gPSBxdWVyeS5tZW1vO1xuICAgICAgICBsZXQgY3VycmVudEFjY291bnQgPSBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudDtcbiAgICAgICAgaWYgKCFzdGF0ZS5mcm9tX25hbWUpIHN0YXRlLmZyb21fbmFtZSA9IGN1cnJlbnRBY2NvdW50O1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5vblRyeEluY2x1ZGVkID0gdGhpcy5vblRyeEluY2x1ZGVkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlID0gZGVib3VuY2UodGhpcy5fdXBkYXRlRmVlLmJpbmQodGhpcyksIDI1MCk7XG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzID0gdGhpcy5fY2hlY2tGZWVTdGF0dXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlID0gdGhpcy5fY2hlY2tCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZyb21fbmFtZTogXCJcIixcbiAgICAgICAgICAgIHRvX25hbWU6IFwiXCIsXG4gICAgICAgICAgICBmcm9tX2FjY291bnQ6IG51bGwsXG4gICAgICAgICAgICB0b19hY2NvdW50OiBudWxsLFxuICAgICAgICAgICAgYW1vdW50OiBcIlwiLFxuICAgICAgICAgICAgYXNzZXRfaWQ6IG51bGwsXG4gICAgICAgICAgICBhc3NldDogbnVsbCxcbiAgICAgICAgICAgIG1lbW86IFwiXCIsXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIHByb3Bvc2U6IGZhbHNlLFxuICAgICAgICAgICAgcHJvcG9zZV9hY2NvdW50OiBcIlwiLFxuICAgICAgICAgICAgZmVlQXNzZXQ6IG51bGwsXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQ6IFwiMS4zLjBcIixcbiAgICAgICAgICAgIGZlZUFtb3VudDogbmV3IEFzc2V0KHthbW91bnQ6IDB9KSxcbiAgICAgICAgICAgIGZlZVN0YXR1czoge31cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMubmVzdGVkUmVmID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wLCBucykge1xuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzOiBjdXJyZW50X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cygpO1xuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzOiBuZXh0X2Fzc2V0X3R5cGVzfSA9IHRoaXMuX2dldEF2YWlsYWJsZUFzc2V0cyhucyk7XG5cbiAgICAgICAgaWYgKG5leHRfYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KG5leHRfYXNzZXRfdHlwZXNbMF0pO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRfdHlwZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFtb3VudENoYW5nZWQoe2Ftb3VudDogbnMuYW1vdW50LCBhc3NldH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV4dF9hc3NldF90eXBlc1swXSAhPT0gdGhpcy5zdGF0ZS5mZWVfYXNzZXRfaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQgJiYgdGhpcy5zdGF0ZS5mZWVfYXNzZXRfaWQgIT09IG5leHRfYXNzZXRfdHlwZXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVBc3NldDogYXNzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVfYXNzZXRfaWQ6IG5leHRfYXNzZXRfdHlwZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbnAuY3VycmVudEFjY291bnQgIT09IHRoaXMuc3RhdGUuZnJvbV9uYW1lICYmXG4gICAgICAgICAgICBucC5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmcm9tX25hbWU6IG5wLmN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBmcm9tX2FjY291bnQ6IENoYWluU3RvcmUuZ2V0QWNjb3VudChucC5jdXJyZW50QWNjb3VudCksXG4gICAgICAgICAgICAgICAgICAgIGZlZVN0YXR1czoge30sXG4gICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF9pZDogXCIxLjMuMFwiLFxuICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IG5ldyBBc3NldCh7YW1vdW50OiAwfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrRmVlU3RhdHVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hhaW5TdG9yZS5nZXRBY2NvdW50KG5wLmN1cnJlbnRBY2NvdW50KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2hlY2tCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB7ZmVlQW1vdW50LCBhbW91bnQsIGZyb21fYWNjb3VudCwgYXNzZXR9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKCFhc3NldCB8fCAhZnJvbV9hY2NvdW50KSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJhbGFuY2VJRCA9IGZyb21fYWNjb3VudC5nZXRJbihbXCJiYWxhbmNlc1wiLCBhc3NldC5nZXQoXCJpZFwiKV0pO1xuICAgICAgICBjb25zdCBmZWVCYWxhbmNlSUQgPSBmcm9tX2FjY291bnQuZ2V0SW4oW1xuICAgICAgICAgICAgXCJiYWxhbmNlc1wiLFxuICAgICAgICAgICAgZmVlQW1vdW50LmFzc2V0X2lkXG4gICAgICAgIF0pO1xuICAgICAgICBpZiAoIWFzc2V0IHx8ICFmcm9tX2FjY291bnQpIHJldHVybjtcbiAgICAgICAgaWYgKCFiYWxhbmNlSUQpIHJldHVybiB0aGlzLnNldFN0YXRlKHtiYWxhbmNlRXJyb3I6IHRydWV9KTtcbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChiYWxhbmNlSUQpO1xuICAgICAgICBsZXQgZmVlQmFsYW5jZU9iamVjdCA9IGZlZUJhbGFuY2VJRFxuICAgICAgICAgICAgPyBDaGFpblN0b3JlLmdldE9iamVjdChmZWVCYWxhbmNlSUQpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmICghZmVlQmFsYW5jZU9iamVjdCB8fCBmZWVCYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZV9hc3NldF9pZDogXCIxLjMuMFwifSwgdGhpcy5fdXBkYXRlRmVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJhbGFuY2VPYmplY3QgfHwgIWZlZUFtb3VudCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBoYXNCYWxhbmNlID0gY2hlY2tCYWxhbmNlKFxuICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICBmZWVBbW91bnQsXG4gICAgICAgICAgICBiYWxhbmNlT2JqZWN0XG4gICAgICAgICk7XG4gICAgICAgIGlmIChoYXNCYWxhbmNlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JhbGFuY2VFcnJvcjogIWhhc0JhbGFuY2V9KTtcbiAgICB9XG5cbiAgICBfY2hlY2tGZWVTdGF0dXMoYWNjb3VudCA9IHRoaXMuc3RhdGUuZnJvbV9hY2NvdW50KSB7XG4gICAgICAgIGlmICghYWNjb3VudCB8fCAhYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IE9iamVjdC5rZXlzKGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpKS5zb3J0KFxuICAgICAgICAgICAgdXRpbHMuc29ydElEXG4gICAgICAgICk7XG4gICAgICAgIGxldCBmZWVTdGF0dXMgPSB7fTtcbiAgICAgICAgbGV0IHAgPSBbXTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICBwLnB1c2goXG4gICAgICAgICAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZmVlSUQ6IGEsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcInByaWNlX3Blcl9rYnl0ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgUHJvbWlzZS5hbGwocClcbiAgICAgICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goKGEsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmZWVTdGF0dXNbYV0gPSBzdGF0dXNbaWR4XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxzLmFyZV9lcXVhbF9zaGFsbG93KHRoaXMuc3RhdGUuZmVlU3RhdHVzLCBmZWVTdGF0dXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVlU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdXBkYXRlRmVlKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBsZXQge2ZlZV9hc3NldF9pZCwgZnJvbV9hY2NvdW50LCBhc3NldF9pZH0gPSBzdGF0ZTtcbiAgICAgICAgY29uc3Qge2ZlZV9hc3NldF90eXBlc30gPSB0aGlzLl9nZXRBdmFpbGFibGVBc3NldHMoc3RhdGUpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICBmZWVfYXNzZXRfdHlwZXNbMF0gIT09IGZlZV9hc3NldF9pZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGZlZV9hc3NldF9pZCA9IGZlZV9hc3NldF90eXBlc1swXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZyb21fYWNjb3VudCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNoZWNrRmVlU3RhdHVzQXN5bmMoe1xuICAgICAgICAgICAgYWNjb3VudElEOiBmcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBmZWVJRDogZmVlX2Fzc2V0X2lkLFxuICAgICAgICAgICAgb3B0aW9uczogW1wicHJpY2VfcGVyX2tieXRlXCJdLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtb1wiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHN0YXRlLm1lbW9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoe2ZlZSwgaGFzQmFsYW5jZSwgaGFzUG9vbEJhbGFuY2V9KSA9PlxuICAgICAgICAgICAgc2hvdWxkUGF5RmVlV2l0aEFzc2V0QXN5bmMoZnJvbV9hY2NvdW50LCBmZWUpLnRoZW4oXG4gICAgICAgICAgICAgICAgc2hvdWxkID0+XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlZV9hc3NldF9pZDogYXNzZXRfaWR9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWVBbW91bnQ6IGZlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZV9hc3NldF9pZDogZmVlLmFzc2V0X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Bvb2xCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICFoYXNCYWxhbmNlIHx8ICFoYXNQb29sQmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZyb21DaGFuZ2VkKGZyb21fbmFtZSkge1xuICAgICAgICBpZiAoIWZyb21fbmFtZSkgdGhpcy5zZXRTdGF0ZSh7ZnJvbV9hY2NvdW50OiBudWxsfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZnJvbV9uYW1lLFxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBwcm9wb3NlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb3Bvc2VfYWNjb3VudDogXCJcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b0NoYW5nZWQodG9fbmFtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19uYW1lLCBlcnJvcjogbnVsbH0pO1xuICAgIH1cblxuICAgIG9uRnJvbUFjY291bnRDaGFuZ2VkKGZyb21fYWNjb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tX2FjY291bnQsIGVycm9yOiBudWxsfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlKCk7XG4gICAgICAgICAgICB0aGlzLl9jaGVja0ZlZVN0YXR1cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRvQWNjb3VudENoYW5nZWQodG9fYWNjb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0b19hY2NvdW50LCBlcnJvcjogbnVsbH0pO1xuICAgIH1cblxuICAgIG9uQW1vdW50Q2hhbmdlZCh7YW1vdW50LCBhc3NldH0pIHtcbiAgICAgICAgaWYgKCFhc3NldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7YW1vdW50LCBhc3NldCwgYXNzZXRfaWQ6IGFzc2V0LmdldChcImlkXCIpLCBlcnJvcjogbnVsbH0sXG4gICAgICAgICAgICB0aGlzLl9jaGVja0JhbGFuY2VcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkZlZUNoYW5nZWQoe2Fzc2V0fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge2ZlZUFzc2V0OiBhc3NldCwgZmVlX2Fzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSwgZXJyb3I6IG51bGx9LFxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmVlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25NZW1vQ2hhbmdlZChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW86IGUudGFyZ2V0LnZhbHVlfSwgdGhpcy5fdXBkYXRlRmVlKTtcbiAgICB9XG5cbiAgICBvblRyeEluY2x1ZGVkKGNvbmZpcm1fc3RvcmVfc3RhdGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5pbmNsdWRlZCAmJlxuICAgICAgICAgICAgY29uZmlybV9zdG9yZV9zdGF0ZS5icm9hZGNhc3RlZF90cmFuc2FjdGlvblxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoVHJhbnNmZXIuZ2V0SW5pdGlhbFN0YXRlKCkpO1xuICAgICAgICAgICAgVHJhbnNhY3Rpb25Db25maXJtU3RvcmUudW5saXN0ZW4odGhpcy5vblRyeEluY2x1ZGVkKTtcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnJlc2V0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlybV9zdG9yZV9zdGF0ZS5jbG9zZWQpIHtcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLnVubGlzdGVuKHRoaXMub25UcnhJbmNsdWRlZCk7XG4gICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Qcm9wb3NlKHByb3Bvc2UsIGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9wb3NlLCBwcm9wb3NlX2FjY291bnQ6IG51bGx9KTtcbiAgICB9XG5cbiAgICBvblByb3Bvc2VBY2NvdW50KHByb3Bvc2VfYWNjb3VudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9wb3NlX2FjY291bnR9KTtcbiAgICB9XG5cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbW86IFwiXCIsIHRvX25hbWU6IFwiXCIsIHRvX2FjY291bnQ6IG51bGwsIGFtb3VudDogXCJcIn0pO1xuICAgIH1cblxuICAgIG9uU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogbnVsbH0pO1xuICAgICAgICBjb25zdCB7YXNzZXQsIGFtb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzZW5kQW1vdW50ID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIHJlYWw6IGFtb3VudCxcbiAgICAgICAgICAgIGFzc2V0X2lkOiBhc3NldC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgIHByZWNpc2lvbjogYXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEFjY291bnRBY3Rpb25zLnRyYW5zZmVyKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mcm9tX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnRvX2FjY291bnQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICBzZW5kQW1vdW50LmdldEFtb3VudCgpLFxuICAgICAgICAgICAgYXNzZXQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1lbW9cbiAgICAgICAgICAgICAgICA/IG5ldyBCdWZmZXIodGhpcy5zdGF0ZS5tZW1vLCBcInV0Zi04XCIpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnN0YXRlLm1lbW8sXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnByb3Bvc2UgPyB0aGlzLnN0YXRlLnByb3Bvc2VfYWNjb3VudCA6IG51bGwsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZlZUFzc2V0ID8gdGhpcy5zdGF0ZS5mZWVBc3NldC5nZXQoXCJpZFwiKSA6IFwiMS4zLjBcIlxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbkNvbmZpcm1TdG9yZS51bmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xuICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uQ29uZmlybVN0b3JlLmxpc3Rlbih0aGlzLm9uVHJ4SW5jbHVkZWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbXNnID0gZS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgID8gZS5tZXNzYWdlLnNwbGl0KFwiXFxuXCIpWzFdIHx8IGUubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIsIGUsIG1zZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG1zZ30pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0TmVzdGVkUmVmKHJlZikge1xuICAgICAgICB0aGlzLm5lc3RlZFJlZiA9IHJlZjtcbiAgICB9XG5cbiAgICBfc2V0VG90YWwoYXNzZXRfaWQsIGJhbGFuY2VfaWQpIHtcbiAgICAgICAgY29uc3Qge2ZlZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGJhbGFuY2VfaWQpO1xuICAgICAgICBsZXQgdHJhbnNmZXJBc3NldCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFzc2V0X2lkKTtcblxuICAgICAgICBsZXQgYmFsYW5jZSA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICBhbW91bnQ6IGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSxcbiAgICAgICAgICAgIGFzc2V0X2lkOiB0cmFuc2ZlckFzc2V0LmdldChcImlkXCIpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB0cmFuc2ZlckFzc2V0LmdldChcInByZWNpc2lvblwiKVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGZlZUFtb3VudC5hc3NldF9pZCA9PT0gYmFsYW5jZS5hc3NldF9pZCkge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UubWludXMoZmVlQW1vdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge2Ftb3VudDogYmFsYW5jZS5nZXRBbW91bnQoe3JlYWw6IHRydWV9KX0sXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tCYWxhbmNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldEF2YWlsYWJsZUFzc2V0cyhzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY29uc3Qge2ZlZVN0YXR1c30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBmdW5jdGlvbiBoYXNGZWVQb29sQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc1Bvb2xCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFzQmFsYW5jZShpZCkge1xuICAgICAgICAgICAgaWYgKGZlZVN0YXR1c1tpZF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzW2lkXSAmJiBmZWVTdGF0dXNbaWRdLmhhc0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7ZnJvbV9hY2NvdW50LCBmcm9tX2Vycm9yfSA9IHN0YXRlO1xuICAgICAgICBsZXQgYXNzZXRfdHlwZXMgPSBbXSxcbiAgICAgICAgICAgIGZlZV9hc3NldF90eXBlcyA9IFtdO1xuICAgICAgICBpZiAoIShmcm9tX2FjY291bnQgJiYgZnJvbV9hY2NvdW50LmdldChcImJhbGFuY2VzXCIpICYmICFmcm9tX2Vycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuIHthc3NldF90eXBlcywgZmVlX2Fzc2V0X3R5cGVzfTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWNjb3VudF9iYWxhbmNlcyA9IHN0YXRlLmZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XG4gICAgICAgIGFzc2V0X3R5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudF9iYWxhbmNlcykuc29ydCh1dGlscy5zb3J0SUQpO1xuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50X2JhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY2NvdW50X2JhbGFuY2VzKSB7XG4gICAgICAgICAgICBsZXQgYmFsYW5jZU9iamVjdCA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRfYmFsYW5jZXNba2V5XSk7XG4gICAgICAgICAgICBpZiAoYmFsYW5jZU9iamVjdCAmJiBiYWxhbmNlT2JqZWN0LmdldChcImJhbGFuY2VcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhc3NldF90eXBlcy5zcGxpY2UoYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZmVlX2Fzc2V0X3R5cGVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLnNwbGljZShmZWVfYXNzZXRfdHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZWVfYXNzZXRfdHlwZXMgPSBmZWVfYXNzZXRfdHlwZXMuZmlsdGVyKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGhhc0ZlZVBvb2xCYWxhbmNlKGEpICYmIGhhc0JhbGFuY2UoYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7YXNzZXRfdHlwZXMsIGZlZV9hc3NldF90eXBlc307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZnJvbV9lcnJvciA9IG51bGw7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBwcm9wb3NlLFxuICAgICAgICAgICAgZnJvbV9hY2NvdW50LFxuICAgICAgICAgICAgdG9fYWNjb3VudCxcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgYXNzZXRfaWQsXG4gICAgICAgICAgICBwcm9wb3NlX2FjY291bnQsXG4gICAgICAgICAgICBmZWVBbW91bnQsXG4gICAgICAgICAgICBhbW91bnQsXG4gICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgIHRvX25hbWUsXG4gICAgICAgICAgICBmcm9tX25hbWUsXG4gICAgICAgICAgICBtZW1vLFxuICAgICAgICAgICAgZmVlQXNzZXQsXG4gICAgICAgICAgICBmZWVfYXNzZXRfaWQsXG4gICAgICAgICAgICBiYWxhbmNlRXJyb3JcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCBmcm9tX215X2FjY291bnQgPVxuICAgICAgICAgICAgQWNjb3VudFN0b3JlLmlzTXlBY2NvdW50KGZyb21fYWNjb3VudCkgfHxcbiAgICAgICAgICAgIGZyb21fbmFtZSA9PT0gdGhpcy5wcm9wcy5wYXNzd29yZEFjY291bnQ7XG5cbiAgICAgICAgaWYgKGZyb21fYWNjb3VudCAmJiAhZnJvbV9teV9hY2NvdW50ICYmICFwcm9wb3NlKSB7XG4gICAgICAgICAgICBmcm9tX2Vycm9yID0gKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiYWNjb3VudC5lcnJvcnMubm90X3lvdXJzXCIpfVxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsoXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMub25Qcm9wb3NlLmJpbmQodGhpcywgdHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInByb3Bvc2VcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQge2Fzc2V0X3R5cGVzLCBmZWVfYXNzZXRfdHlwZXN9ID0gdGhpcy5fZ2V0QXZhaWxhYmxlQXNzZXRzKCk7XG4gICAgICAgIGxldCBiYWxhbmNlID0gbnVsbDtcblxuICAgICAgICAvLyBFc3RpbWF0ZSBmZWVcbiAgICAgICAgbGV0IGZlZSA9IHRoaXMuc3RhdGUuZmVlQW1vdW50LmdldEFtb3VudCh7cmVhbDogdHJ1ZX0pO1xuICAgICAgICBpZiAoZnJvbV9hY2NvdW50ICYmIGZyb21fYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSAmJiAhZnJvbV9lcnJvcikge1xuICAgICAgICAgICAgbGV0IGFjY291bnRfYmFsYW5jZXMgPSBmcm9tX2FjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYXNzZXRfdHlwZXNbMF0pO1xuICAgICAgICAgICAgaWYgKGFzc2V0X3R5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9hc3NldF9pZCA9IGFzc2V0ID8gYXNzZXQuZ2V0KFwiaWRcIikgOiBhc3NldF90eXBlc1swXTtcbiAgICAgICAgICAgICAgICBsZXQgZmVlSUQgPSBmZWVBc3NldCA/IGZlZUFzc2V0LmdldChcImlkXCIpIDogXCIxLjMuMFwiO1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIjQTA5RjlGIDFweCBkb3R0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fc2V0VG90YWwuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfYXNzZXRfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudF9iYWxhbmNlc1tjdXJyZW50X2Fzc2V0X2lkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlSURcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidHJhbnNmZXIuYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2VDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXthY2NvdW50X2JhbGFuY2VzW2N1cnJlbnRfYXNzZXRfaWRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBcIk5vIGZ1bmRzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvcG9zZV9pbmNvbXBsZXRlID0gcHJvcG9zZSAmJiAhcHJvcG9zZV9hY2NvdW50O1xuICAgICAgICBjb25zdCBhbW91bnRWYWx1ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UuY2FsbChhbW91bnQsIC8sL2csIFwiXCIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGlzQW1vdW50VmFsaWQgPSBhbW91bnRWYWx1ZSAmJiAhaXNOYU4oYW1vdW50VmFsdWUpO1xuICAgICAgICBjb25zdCBpc1RvQWNjb3VudFZhbGlkID1cbiAgICAgICAgICAgIHRvX2FjY291bnQgJiYgdG9fYWNjb3VudC5nZXQoXCJuYW1lXCIpID09PSB0b19uYW1lO1xuICAgICAgICBjb25zdCBpc1NlbmROb3RWYWxpZCA9XG4gICAgICAgICAgICAhZnJvbV9hY2NvdW50IHx8XG4gICAgICAgICAgICAhaXNUb0FjY291bnRWYWxpZCB8fFxuICAgICAgICAgICAgIWlzQW1vdW50VmFsaWQgfHxcbiAgICAgICAgICAgICFhc3NldCB8fFxuICAgICAgICAgICAgZnJvbV9lcnJvciB8fFxuICAgICAgICAgICAgcHJvcG9zZV9pbmNvbXBsZXRlIHx8XG4gICAgICAgICAgICBiYWxhbmNlRXJyb3I7XG4gICAgICAgIGxldCBhY2NvdW50c0xpc3QgPSBJbW11dGFibGUuU2V0KCk7XG4gICAgICAgIGFjY291bnRzTGlzdCA9IGFjY291bnRzTGlzdC5hZGQoZnJvbV9hY2NvdW50KTtcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogXCIycmVtXCJ9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgc21hbGwtMTIgbWVkaXVtLTEyIGxhcmdlLTEwIGxhcmdlLW9mZnNldC0xIGZ1bGwtd2lkdGgtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbmRNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tb2RhbF9oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkNhbGxiYWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuc2VuZF9tb2RhbCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tX25hbWU9e3RoaXMucHJvcHMuY3VycmVudEFjY291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVdpdGhMaW5rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZz1cInRyYW5zZmVyLnBoYXNlX291dF93YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJtb2RhbF9saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbmRfbW9kYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kX21vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImhlYWRlci5wYXltZW50c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBzaHJpbmsgdmVydGljYWwgbWVkaXVtLWhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMXJlbVwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwLCBvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLTEyIG1lZGl1bS02IGxhcmdlLTUgbGFyZ2Utb2Zmc2V0LTEgZnVsbC13aWR0aC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cInRyYW5zZmVyLmhlYWRlclwiIGNvbXBvbmVudD1cImgyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgRiBSIE8gTSAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImZyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZT17ZnJvbV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mcm9tQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uRnJvbUFjY291bnRDaGFuZ2VkLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e2Zyb21fYWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17NjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtmcm9tX2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgVCBPICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci50b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWU9e3RvX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjY291bnRDaGFuZ2VkPXt0aGlzLm9uVG9BY2NvdW50Q2hhbmdlZC5iaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0b19hY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXs2MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogIEEgTSBPIFUgTiBUICAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cmFuc2Zlci5hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbW91bnRDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0X3R5cGVzLmxlbmd0aCA+IDAgJiYgYXNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0LmdldChcImlkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFzc2V0X2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNzZXRfdHlwZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHM9e2Fzc2V0X3R5cGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5X2JhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYmFsYW5jZUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLWVycm9yIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwidHJhbnNmZXIuZXJyb3JzLmluc3VmZmljaWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICBNIEUgTSBPICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9jayB0cmFuc2Zlci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW1vICYmIG1lbW8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmlnaHQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW1vLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWwgdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLm1lbW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlPVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC5tZW1vX3RpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZW1vfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NZW1vQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHdhcm5pbmcgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucHJvcG9zZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXJyb3ItYXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLndhcm5fbmFtZV91bmFibGVfcmVhZF9tZW1vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLmZyb21fbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgRiBFIEUgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnQtYmxvY2sgdHJhbnNmZXItaW5wdXQgZmVlLXJvd1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUucHJvcG9zZSA/IFwiIHByb3Bvc2FsXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmQ2FsbGJhY2s9e3RoaXMuc2V0TmVzdGVkUmVmLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidHJhbnNmZXIuZmVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17ZmVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZlZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlX2Fzc2V0X3R5cGVzLmxlbmd0aCAmJiBmZWVBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZlZUFtb3VudC5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmVlX2Fzc2V0X3R5cGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZlZV9hc3NldF90eXBlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZlZV9hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmZWVfYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmVlX2Fzc2V0X3R5cGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzPXtmZWVfYXNzZXRfdHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhhc1Bvb2xCYWxhbmNlID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0cmFuc2Zlci5lcnJvcnMuaW5zdWZmaWNpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3Bvc2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBmbG9hdC1yaWdodCBuby1tYXJnaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlzYWJsZWQ6IGlzU2VuZE5vdFZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYkluZGV4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwicHJvcG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gZmxvYXQtcmlnaHQgbm8tbWFyZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc2FibGVkOiBpc1NlbmROb3RWYWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInRyYW5zZmVyLnNlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUCBSIE8gUCBPIFMgRSAgIEYgUiBPIE1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIYXZpbmcgc29tZSBwcm9wb3NlZCB0cmFuc2FjdGlvbiBsb2dpYyBoZXJlIChwcmlvciB0byB0aGUgdHJhbnNhY3Rpb24gY29uZmlybWF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93cyBhZGp1c3Rpbmcgb2YgdGhlIG1lbW8gdG8gLyBmcm9tIHBhcmFtZXRlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wb3NlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbC13aWR0aC1jb250ZW50IGZvcm0tZ3JvdXAgdHJhbnNmZXItaW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQucHJvcG9zZV9mcm9tXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfbmFtZXM9e0FjY291bnRTdG9yZS5nZXRNeUFjY291bnRzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblByb3Bvc2VBY2NvdW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGFiSW5kZXgrK31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogIFMgRSBOIEQgIEIgVSBUIFQgTyBOICAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgaGFzLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcG9zZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblByb3Bvc2UuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJJbmRleCsrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUT0RPOiBzaG93IHJlbWFpbmluZyBiYWxhbmNlICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLTEyIG1lZGl1bS02IGxhcmdlLTQgbGFyZ2Utb2Zmc2V0LTEgcmlnaHQtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBuby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlY2VudFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50c0xpc3Q9e2FjY291bnRzTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYWN0Vmlldz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPVwidHJhbnNmZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsSGVpZ2h0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnQgbWVkaXVtLTYgbGFyZ2UtNFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgVHJhbnNmZXIsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbQWNjb3VudFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZEFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLnBhc3N3b3JkQWNjb3VudCxcbiAgICAgICAgICAgICAgICBjb250YWN0c0xpc3Q6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRDb250YWN0c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBzdHJpY3RVcmlFbmNvZGUgPSByZXF1aXJlKCdzdHJpY3QtdXJpLWVuY29kZScpO1xuY29uc3QgZGVjb2RlQ29tcG9uZW50ID0gcmVxdWlyZSgnZGVjb2RlLXVyaS1jb21wb25lbnQnKTtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpIHtcblx0c3dpdGNoIChvcHRpb25zLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0aW9ucyksXG5cdFx0XHRcdFx0J1snLFxuXHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdCddJ1xuXHRcdFx0XHRdLmpvaW4oJycpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdGlvbnMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRlbmNvZGUoaW5kZXgsIG9wdGlvbnMpLFxuXHRcdFx0XHRcdCddPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRpb25zKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbXSddLmpvaW4oJycpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdGlvbnMpLFxuXHRcdFx0XHRcdCdbXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0aW9ucylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBlbmNvZGUoa2V5LCBvcHRpb25zKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRpb25zKSxcblx0XHRcdFx0XHQnPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRpb25zKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdGxldCByZXN1bHQ7XG5cblx0c3dpdGNoIChvcHRpb25zLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRyZXN1bHQgPSAvXFxbKFxcZCopXFxdJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXGQqXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHt9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XVtyZXN1bHRbMV1dID0gdmFsdWU7XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRyZXN1bHQgPSAvKFxcW1xcXSkkLy5leGVjKGtleSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW3ZhbHVlXTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmVuY29kZSkge1xuXHRcdHJldHVybiBvcHRpb25zLnN0cmljdCA/IHN0cmljdFVyaUVuY29kZSh2YWx1ZSkgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuZGVjb2RlKSB7XG5cdFx0cmV0dXJuIGRlY29kZUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGtleXNTb3J0ZXIoaW5wdXQpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0LnNvcnQoKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGtleXNTb3J0ZXIoT2JqZWN0LmtleXMoaW5wdXQpKVxuXHRcdFx0LnNvcnQoKGEsIGIpID0+IE51bWJlcihhKSAtIE51bWJlcihiKSlcblx0XHRcdC5tYXAoa2V5ID0+IGlucHV0W2tleV0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBleHRyYWN0KGlucHV0KSB7XG5cdGNvbnN0IHF1ZXJ5U3RhcnQgPSBpbnB1dC5pbmRleE9mKCc/Jyk7XG5cdGlmIChxdWVyeVN0YXJ0ID09PSAtMSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gaW5wdXQuc2xpY2UocXVlcnlTdGFydCArIDEpO1xufVxuXG5mdW5jdGlvbiBwYXJzZShpbnB1dCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7ZGVjb2RlOiB0cnVlLCBhcnJheUZvcm1hdDogJ25vbmUnfSwgb3B0aW9ucyk7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucyk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHRjb25zdCByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdGlucHV0ID0gaW5wdXQudHJpbSgpLnJlcGxhY2UoL15bPyMmXS8sICcnKTtcblxuXHRpZiAoIWlucHV0KSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdGZvciAoY29uc3QgcGFyYW0gb2YgaW5wdXQuc3BsaXQoJyYnKSkge1xuXHRcdGxldCBba2V5LCB2YWx1ZV0gPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuXG5cdFx0Ly8gTWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcblx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0dmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGRlY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cblx0XHRmb3JtYXR0ZXIoZGVjb2RlKGtleSwgb3B0aW9ucyksIHZhbHVlLCByZXQpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdC5rZXlzKHJldCkuc29ydCgpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IHJldFtrZXldO1xuXHRcdGlmIChCb29sZWFuKHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Ly8gU29ydCBvYmplY3Qga2V5cywgbm90IHZhbHVlc1xuXHRcdFx0cmVzdWx0W2tleV0gPSBrZXlzU29ydGVyKHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0W2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZXh0cmFjdDtcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSAob2JqLCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdGVuY29kZTogdHJ1ZSxcblx0XHRzdHJpY3Q6IHRydWUsXG5cdFx0YXJyYXlGb3JtYXQ6ICdub25lJ1xuXHR9O1xuXG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHRpZiAob3B0aW9ucy5zb3J0ID09PSBmYWxzZSkge1xuXHRcdG9wdGlvbnMuc29ydCA9ICgpID0+IHt9O1xuXHR9XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQob3B0aW9ucy5zb3J0KS5tYXAoa2V5ID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuXG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXG5cdFx0XHRmb3IgKGNvbnN0IHZhbHVlMiBvZiB2YWx1ZS5zbGljZSgpKSB7XG5cdFx0XHRcdGlmICh2YWx1ZTIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzdWx0LnB1c2goZm9ybWF0dGVyKGtleSwgdmFsdWUyLCByZXN1bHQubGVuZ3RoKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQuam9pbignJicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKSArICc9JyArIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdH0pLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMCkuam9pbignJicpIDogJyc7XG59O1xuXG5leHBvcnRzLnBhcnNlVXJsID0gKGlucHV0LCBvcHRpb25zKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dXJsOiBpbnB1dC5zcGxpdCgnPycpWzBdIHx8ICcnLFxuXHRcdHF1ZXJ5OiBwYXJzZShleHRyYWN0KGlucHV0KSwgb3B0aW9ucylcblx0fTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIHggPT4gYCUke3guY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX1gKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b2tlbiA9ICclW2EtZjAtOV17Mn0nO1xudmFyIHNpbmdsZU1hdGNoZXIgPSBuZXcgUmVnRXhwKHRva2VuLCAnZ2knKTtcbnZhciBtdWx0aU1hdGNoZXIgPSBuZXcgUmVnRXhwKCcoJyArIHRva2VuICsgJykrJywgJ2dpJyk7XG5cbmZ1bmN0aW9uIGRlY29kZUNvbXBvbmVudHMoY29tcG9uZW50cywgc3BsaXQpIHtcblx0dHJ5IHtcblx0XHQvLyBUcnkgdG8gZGVjb2RlIHRoZSBlbnRpcmUgc3RyaW5nIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb21wb25lbnRzLmpvaW4oJycpKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRG8gbm90aGluZ1xuXHR9XG5cblx0aWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudHM7XG5cdH1cblxuXHRzcGxpdCA9IHNwbGl0IHx8IDE7XG5cblx0Ly8gU3BsaXQgdGhlIGFycmF5IGluIDIgcGFydHNcblx0dmFyIGxlZnQgPSBjb21wb25lbnRzLnNsaWNlKDAsIHNwbGl0KTtcblx0dmFyIHJpZ2h0ID0gY29tcG9uZW50cy5zbGljZShzcGxpdCk7XG5cblx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChbXSwgZGVjb2RlQ29tcG9uZW50cyhsZWZ0KSwgZGVjb2RlQ29tcG9uZW50cyhyaWdodCkpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0dmFyIHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlucHV0ID0gZGVjb2RlQ29tcG9uZW50cyh0b2tlbnMsIGkpLmpvaW4oJycpO1xuXG5cdFx0XHR0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KSB7XG5cdC8vIEtlZXAgdHJhY2sgb2YgYWxsIHRoZSByZXBsYWNlbWVudHMgYW5kIHByZWZpbGwgdGhlIG1hcCB3aXRoIHRoZSBgQk9NYFxuXHR2YXIgcmVwbGFjZU1hcCA9IHtcblx0XHQnJUZFJUZGJzogJ1xcdUZGRkRcXHVGRkZEJyxcblx0XHQnJUZGJUZFJzogJ1xcdUZGRkRcXHVGRkZEJ1xuXHR9O1xuXG5cdHZhciBtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0d2hpbGUgKG1hdGNoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIERlY29kZSBhcyBiaWcgY2h1bmtzIGFzIHBvc3NpYmxlXG5cdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFswXSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gZGVjb2RlKG1hdGNoWzBdKTtcblxuXHRcdFx0aWYgKHJlc3VsdCAhPT0gbWF0Y2hbMF0pIHtcblx0XHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdH1cblxuXHQvLyBBZGQgYCVDMmAgYXQgdGhlIGVuZCBvZiB0aGUgbWFwIHRvIG1ha2Ugc3VyZSBpdCBkb2VzIG5vdCByZXBsYWNlIHRoZSBjb21iaW5hdG9yIGJlZm9yZSBldmVyeXRoaW5nIGVsc2Vcblx0cmVwbGFjZU1hcFsnJUMyJ10gPSAnXFx1RkZGRCc7XG5cblx0dmFyIGVudHJpZXMgPSBPYmplY3Qua2V5cyhyZXBsYWNlTWFwKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBSZXBsYWNlIGFsbCBkZWNvZGVkIGNvbXBvbmVudHNcblx0XHR2YXIga2V5ID0gZW50cmllc1tpXTtcblx0XHRpbnB1dCA9IGlucHV0LnJlcGxhY2UobmV3IFJlZ0V4cChrZXksICdnJyksIHJlcGxhY2VNYXBba2V5XSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVuY29kZWRVUkkpIHtcblx0aWYgKHR5cGVvZiBlbmNvZGVkVVJJICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGBlbmNvZGVkVVJJYCB0byBiZSBvZiB0eXBlIGBzdHJpbmdgLCBnb3QgYCcgKyB0eXBlb2YgZW5jb2RlZFVSSSArICdgJyk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGVuY29kZWRVUkkgPSBlbmNvZGVkVVJJLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuXG5cdFx0Ly8gVHJ5IHRoZSBidWlsdCBpbiBkZWNvZGVyIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRmFsbGJhY2sgdG8gYSBtb3JlIGFkdmFuY2VkIGRlY29kZXJcblx0XHRyZXR1cm4gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUE0QkE7QUFDQTs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBTkE7QUFGQTtBQWlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUNBO0FBWUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFrQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFIQTtBQUFBO0FBU0E7QUFDQTtBQW5DQTtBQUFBO0FBQUE7QUFDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQWFBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFpQkE7QUFDQTtBQUNBO0FBREE7QUFsQkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFKQTtBQU1BO0FBTkE7QUFIQTtBQUhBO0FBUkE7QUFKQTtBQWdDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFEQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBREE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQWpCQTtBQTBCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUF4QkE7QUFxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBakJBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBZUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBN0NBO0FBa0VBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBREE7QUFGQTtBQTdMQTtBQW1OQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBREE7QUFZQTtBQW5PQTtBQWpDQTtBQXdRQTs7O0FBbnNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7Ozs7QUFqREE7QUFDQTtBQW91QkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBOzs7Ozs7Ozs7QUNsd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN05BO0FBQ0E7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9