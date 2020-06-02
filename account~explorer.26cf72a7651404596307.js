(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[20],{

/***/ 2893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquivalentValueComponent", function() { return EquivalentValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceValueComponent", function() { return BalanceValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balanceToAsset", function() { return balanceToAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEquivalentValue", function() { return getEquivalentValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(404);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2161);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2017);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2018);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2141);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(585);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1900);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2391);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1906);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(601);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MarketStatsCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2393);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2390);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(750);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(844);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(434);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var getEquivalentValue = function getEquivalentValue(amount, toAsset, fromAsset) {
    var fullPrecision = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var coreAsset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var allMarketStats = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

    try {
        return common_market_utils__WEBPACK_IMPORTED_MODULE_11__["default"].convertValue(amount, toAsset, fromAsset, allMarketStats ? allMarketStats : stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().allMarketStats, coreAsset ? coreAsset : bitsharesjs__WEBPACK_IMPORTED_MODULE_14__["ChainStore"].getAsset("1.3.0"), fullPrecision ? fullPrecision : true);
    } catch (err) {
        console.log(err);
    }
};

/**
 *  Given an asset amount, displays the equivalent value in baseAsset if possible
 *
 *  Expects three properties
 *  -'toAsset' which should be a asset id
 *  -'fromAsset' which is the asset id of the original asset amount
 *  -'amount' which is the amount to convert
 *  -'fullPrecision' boolean to tell if the amount uses the full precision of the asset
 */

var ValueComponent = function (_MarketStatsCheck) {
    _inherits(ValueComponent, _MarketStatsCheck);

    function ValueComponent(props) {
        _classCallCheck(this, ValueComponent);

        return _possibleConstructorReturn(this, (ValueComponent.__proto__ || Object.getPrototypeOf(ValueComponent)).call(this, props));
    }

    _createClass(ValueComponent, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return _get(ValueComponent.prototype.__proto__ || Object.getPrototypeOf(ValueComponent.prototype), "shouldComponentUpdate", this).call(this, np) || !common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].are_equal_shallow(np.pulsate, this.props.pulsate) || np.toAsset !== this.props.toAsset || np.fromAsset !== this.props.fromAsset || np.amount !== this.props.amount;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                amount = _props.amount,
                toAsset = _props.toAsset,
                fromAsset = _props.fromAsset,
                fullPrecision = _props.fullPrecision,
                coreAsset = _props.coreAsset,
                others = _objectWithoutProperties(_props, ["amount", "toAsset", "fromAsset", "fullPrecision", "coreAsset"]);

            var toID = toAsset.get("id");
            var toSymbol = toAsset.get("symbol");

            var eqValue = getEquivalentValue(amount, toAsset, fromAsset, fullPrecision, coreAsset);

            if (fromAsset.get("symbol") == "RUDEX.PZM") {

                console.log("amount: " + JSON.stringify(amount));
                console.log("toAsset: " + JSON.stringify(toAsset));
                console.log("fromAsset: " + JSON.stringify(fromAsset));
                console.log("fullPrecision: " + JSON.stringify(fullPrecision));
                console.log("coreAsset: " + JSON.stringify(coreAsset));
            }

            if (!eqValue && eqValue !== 0) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__["Tooltip"],
                    {
                        placement: "bottom",
                        title: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.no_price")
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "tooltip inline-block",
                            style: { fontSize: "0.9rem" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "account.no_price" })
                    )
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
                noPrefix: true,
                amount: eqValue,
                asset: toID,
                decimalOffset: toSymbol.indexOf("BTC") !== -1 ? 4 : this.props.fullDecimals ? 0 : this.props.noDecimals ? toAsset.get("precision") : toAsset.get("precision") - 2
            }, others));
        }
    }]);

    return ValueComponent;
}(_MarketStatsCheck__WEBPACK_IMPORTED_MODULE_10__["default"]);

ValueComponent.defaultProps = {
    fullPrecision: true,
    noDecimals: false,
    fullDecimals: false,
    hide_asset: false
};

ValueComponent = Object(_AssetWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(ValueComponent, {
    propNames: ["toAsset", "fromAsset", "coreAsset"],
    defaultProps: {
        toAsset: "1.3.0",
        coreAsset: "1.3.0"
    }
});

var EquivalentValueComponent = function (_React$Component) {
    _inherits(EquivalentValueComponent, _React$Component);

    function EquivalentValueComponent() {
        _classCallCheck(this, EquivalentValueComponent);

        return _possibleConstructorReturn(this, (EquivalentValueComponent.__proto__ || Object.getPrototypeOf(EquivalentValueComponent)).apply(this, arguments));
    }

    _createClass(EquivalentValueComponent, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                refCallback = _props2.refCallback,
                others = _objectWithoutProperties(_props2, ["refCallback"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueComponent, _extends({}, others, { ref: refCallback }));
        }
    }]);

    return EquivalentValueComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

EquivalentValueComponent = Object(alt_react__WEBPACK_IMPORTED_MODULE_6__["connect"])(EquivalentValueComponent, {
    listenTo: function listenTo() {
        return [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__["default"]];
    },
    getProps: function getProps() {
        return {
            allMarketStats: stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__["default"].getState().allMarketStats
        };
    }
});

var balanceToAsset = function balanceToAsset(balance) {
    var isBalanceObject = balance.getIn(["balance", "amount"]);
    if (isBalanceObject || isBalanceObject === 0) {
        return {
            asset_id: balance.getIn(["balance", "asset_id"]),
            amount: Number(balance.getIn(["balance", "amount"]))
        };
    } else {
        return {
            asset_id: balance.get("asset_type"),
            amount: Number(balance.get("balance"))
        };
    }
};

var BalanceValueComponent = function (_React$Component2) {
    _inherits(BalanceValueComponent, _React$Component2);

    function BalanceValueComponent() {
        _classCallCheck(this, BalanceValueComponent);

        return _possibleConstructorReturn(this, (BalanceValueComponent.__proto__ || Object.getPrototypeOf(BalanceValueComponent)).apply(this, arguments));
    }

    _createClass(BalanceValueComponent, [{
        key: "render",
        value: function render() {
            var _props3 = this.props,
                balance = _props3.balance,
                others = _objectWithoutProperties(_props3, ["balance"]);

            var balanceAsset = balanceToAsset(balance);
            var amount = balanceAsset.amount;
            // override amount if desired
            if (!!this.props.satoshis) {
                amount = this.props.satoshis;
            }
            var fromAsset = balanceAsset.asset_id;
            if (isNaN(amount)) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                "--"
            );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EquivalentValueComponent, _extends({
                amount: amount,
                fromAsset: fromAsset,
                noDecimals: true,
                fullPrecision: !!this.props.satoshis ? false : this.props.fullPrecision
            }, others));
        }
    }]);

    return BalanceValueComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BalanceValueComponent.propTypes = {
    balance: _ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject.isRequired,
    satoshis: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number
};
BalanceValueComponent.defaultProps = {
    satoshis: null
};

BalanceValueComponent = Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(BalanceValueComponent, {
    keep_updating: true
});



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leHBsb3Jlci4yNmNmNzJhNzY1MTQwNDU5NjMwNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm1hdHRlZEFzc2V0IGZyb20gXCIuL0Zvcm1hdHRlZEFzc2V0XCI7XG5pbXBvcnQgQ2hhaW5UeXBlcyBmcm9tIFwiLi9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuL0Fzc2V0V3JhcHBlclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwic3RvcmVzL01hcmtldHNTdG9yZVwiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IE1hcmtldFN0YXRzQ2hlY2sgZnJvbSBcIi4vTWFya2V0U3RhdHNDaGVja1wiO1xuaW1wb3J0IE1hcmtldFV0aWxzIGZyb20gXCJjb21tb24vbWFya2V0X3V0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmNvbnN0IGdldEVxdWl2YWxlbnRWYWx1ZSA9IGZ1bmN0aW9uKFxuICAgIGFtb3VudCxcbiAgICB0b0Fzc2V0LFxuICAgIGZyb21Bc3NldCxcbiAgICBmdWxsUHJlY2lzaW9uID0gbnVsbCxcbiAgICBjb3JlQXNzZXQgPSBudWxsLFxuICAgIGFsbE1hcmtldFN0YXRzID0gbnVsbFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIE1hcmtldFV0aWxzLmNvbnZlcnRWYWx1ZShcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIHRvQXNzZXQsXG4gICAgICAgICAgICBmcm9tQXNzZXQsXG4gICAgICAgICAgICBhbGxNYXJrZXRTdGF0c1xuICAgICAgICAgICAgICAgID8gYWxsTWFya2V0U3RhdHNcbiAgICAgICAgICAgICAgICA6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzLFxuICAgICAgICAgICAgY29yZUFzc2V0ID8gY29yZUFzc2V0IDogQ2hhaW5TdG9yZS5nZXRBc3NldChcIjEuMy4wXCIpLFxuICAgICAgICAgICAgZnVsbFByZWNpc2lvbiA/IGZ1bGxQcmVjaXNpb24gOiB0cnVlXG4gICAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufTtcblxuLyoqXG4gKiAgR2l2ZW4gYW4gYXNzZXQgYW1vdW50LCBkaXNwbGF5cyB0aGUgZXF1aXZhbGVudCB2YWx1ZSBpbiBiYXNlQXNzZXQgaWYgcG9zc2libGVcbiAqXG4gKiAgRXhwZWN0cyB0aHJlZSBwcm9wZXJ0aWVzXG4gKiAgLSd0b0Fzc2V0JyB3aGljaCBzaG91bGQgYmUgYSBhc3NldCBpZFxuICogIC0nZnJvbUFzc2V0JyB3aGljaCBpcyB0aGUgYXNzZXQgaWQgb2YgdGhlIG9yaWdpbmFsIGFzc2V0IGFtb3VudFxuICogIC0nYW1vdW50JyB3aGljaCBpcyB0aGUgYW1vdW50IHRvIGNvbnZlcnRcbiAqICAtJ2Z1bGxQcmVjaXNpb24nIGJvb2xlYW4gdG8gdGVsbCBpZiB0aGUgYW1vdW50IHVzZXMgdGhlIGZ1bGwgcHJlY2lzaW9uIG9mIHRoZSBhc3NldFxuICovXG5jbGFzcyBWYWx1ZUNvbXBvbmVudCBleHRlbmRzIE1hcmtldFN0YXRzQ2hlY2sge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGZ1bGxQcmVjaXNpb246IHRydWUsXG4gICAgICAgIG5vRGVjaW1hbHM6IGZhbHNlLFxuICAgICAgICBmdWxsRGVjaW1hbHM6IGZhbHNlLFxuICAgICAgICBoaWRlX2Fzc2V0OiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5wKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobnApIHx8XG4gICAgICAgICAgICAhdXRpbHMuYXJlX2VxdWFsX3NoYWxsb3cobnAucHVsc2F0ZSwgdGhpcy5wcm9wcy5wdWxzYXRlKSB8fFxuICAgICAgICAgICAgbnAudG9Bc3NldCAhPT0gdGhpcy5wcm9wcy50b0Fzc2V0IHx8XG4gICAgICAgICAgICBucC5mcm9tQXNzZXQgIT09IHRoaXMucHJvcHMuZnJvbUFzc2V0IHx8XG4gICAgICAgICAgICBucC5hbW91bnQgIT09IHRoaXMucHJvcHMuYW1vdW50XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgdG9Bc3NldCxcbiAgICAgICAgICAgIGZyb21Bc3NldCxcbiAgICAgICAgICAgIGZ1bGxQcmVjaXNpb24sXG4gICAgICAgICAgICBjb3JlQXNzZXQsXG4gICAgICAgICAgICAuLi5vdGhlcnNcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHRvSUQgPSB0b0Fzc2V0LmdldChcImlkXCIpO1xuICAgICAgICBsZXQgdG9TeW1ib2wgPSB0b0Fzc2V0LmdldChcInN5bWJvbFwiKTtcblxuICAgICAgICBsZXQgZXFWYWx1ZSA9IGdldEVxdWl2YWxlbnRWYWx1ZShcbiAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgIHRvQXNzZXQsXG4gICAgICAgICAgICBmcm9tQXNzZXQsXG4gICAgICAgICAgICBmdWxsUHJlY2lzaW9uLFxuICAgICAgICAgICAgY29yZUFzc2V0XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYoZnJvbUFzc2V0LmdldChcInN5bWJvbFwiKSA9PSBcIlJVREVYLlBaTVwiKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYW1vdW50OiBcIiArIEpTT04uc3RyaW5naWZ5KGFtb3VudCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b0Fzc2V0OiBcIiArIEpTT04uc3RyaW5naWZ5KHRvQXNzZXQpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnJvbUFzc2V0OiBcIiArIEpTT04uc3RyaW5naWZ5KGZyb21Bc3NldCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmdWxsUHJlY2lzaW9uOiBcIiArIEpTT04uc3RyaW5naWZ5KGZ1bGxQcmVjaXNpb24pKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29yZUFzc2V0OiBcIiArIEpTT04uc3RyaW5naWZ5KGNvcmVBc3NldCkpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVxVmFsdWUgJiYgZXFWYWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwidG9vbHRpcC5ub19wcmljZVwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvb2x0aXAgaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMC45cmVtXCJ9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50Lm5vX3ByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcbiAgICAgICAgICAgICAgICBub1ByZWZpeFxuICAgICAgICAgICAgICAgIGFtb3VudD17ZXFWYWx1ZX1cbiAgICAgICAgICAgICAgICBhc3NldD17dG9JRH1cbiAgICAgICAgICAgICAgICBkZWNpbWFsT2Zmc2V0PXtcbiAgICAgICAgICAgICAgICAgICAgdG9TeW1ib2wuaW5kZXhPZihcIkJUQ1wiKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gNFxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmZ1bGxEZWNpbWFsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5ub0RlY2ltYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdG9Bc3NldC5nZXQoXCJwcmVjaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b0Fzc2V0LmdldChcInByZWNpc2lvblwiKSAtIDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuVmFsdWVDb21wb25lbnQgPSBBc3NldFdyYXBwZXIoVmFsdWVDb21wb25lbnQsIHtcbiAgICBwcm9wTmFtZXM6IFtcInRvQXNzZXRcIiwgXCJmcm9tQXNzZXRcIiwgXCJjb3JlQXNzZXRcIl0sXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHRvQXNzZXQ6IFwiMS4zLjBcIixcbiAgICAgICAgY29yZUFzc2V0OiBcIjEuMy4wXCJcbiAgICB9XG59KTtcblxuY2xhc3MgRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7cmVmQ2FsbGJhY2ssIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiA8VmFsdWVDb21wb25lbnQgey4uLm90aGVyc30gcmVmPXtyZWZDYWxsYmFja30gLz47XG4gICAgfVxufVxuXG5FcXVpdmFsZW50VmFsdWVDb21wb25lbnQgPSBjb25uZWN0KFxuICAgIEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudCxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtNYXJrZXRzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWxsTWFya2V0U3RhdHM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuY29uc3QgYmFsYW5jZVRvQXNzZXQgPSBmdW5jdGlvbihiYWxhbmNlKSB7XG4gICAgY29uc3QgaXNCYWxhbmNlT2JqZWN0ID0gYmFsYW5jZS5nZXRJbihbXCJiYWxhbmNlXCIsIFwiYW1vdW50XCJdKTtcbiAgICBpZiAoaXNCYWxhbmNlT2JqZWN0IHx8IGlzQmFsYW5jZU9iamVjdCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXNzZXRfaWQ6IGJhbGFuY2UuZ2V0SW4oW1wiYmFsYW5jZVwiLCBcImFzc2V0X2lkXCJdKSxcbiAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKGJhbGFuY2UuZ2V0SW4oW1wiYmFsYW5jZVwiLCBcImFtb3VudFwiXSkpXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFzc2V0X2lkOiBiYWxhbmNlLmdldChcImFzc2V0X3R5cGVcIiksXG4gICAgICAgICAgICBhbW91bnQ6IE51bWJlcihiYWxhbmNlLmdldChcImJhbGFuY2VcIikpXG4gICAgICAgIH07XG4gICAgfVxufTtcblxuY2xhc3MgQmFsYW5jZVZhbHVlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBiYWxhbmNlOiBDaGFpblR5cGVzLkNoYWluT2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIHNhdG9zaGlzOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHNhdG9zaGlzOiBudWxsXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2JhbGFuY2UsIC4uLm90aGVyc30gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBiYWxhbmNlQXNzZXQgPSBiYWxhbmNlVG9Bc3NldChiYWxhbmNlKTtcbiAgICAgICAgbGV0IGFtb3VudCA9IGJhbGFuY2VBc3NldC5hbW91bnQ7XG4gICAgICAgIC8vIG92ZXJyaWRlIGFtb3VudCBpZiBkZXNpcmVkXG4gICAgICAgIGlmICghIXRoaXMucHJvcHMuc2F0b3NoaXMpIHtcbiAgICAgICAgICAgIGFtb3VudCA9IHRoaXMucHJvcHMuc2F0b3NoaXM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZyb21Bc3NldCA9IGJhbGFuY2VBc3NldC5hc3NldF9pZDtcbiAgICAgICAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiA8c3Bhbj4tLTwvc3Bhbj47XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICAgICAgZnJvbUFzc2V0PXtmcm9tQXNzZXR9XG4gICAgICAgICAgICAgICAgbm9EZWNpbWFscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBmdWxsUHJlY2lzaW9uPXtcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLnNhdG9zaGlzID8gZmFsc2UgOiB0aGlzLnByb3BzLmZ1bGxQcmVjaXNpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuQmFsYW5jZVZhbHVlQ29tcG9uZW50ID0gQmluZFRvQ2hhaW5TdGF0ZShCYWxhbmNlVmFsdWVDb21wb25lbnQsIHtcbiAgICBrZWVwX3VwZGF0aW5nOiB0cnVlXG59KTtcblxuZXhwb3J0IHtcbiAgICBFcXVpdmFsZW50VmFsdWVDb21wb25lbnQsXG4gICAgQmFsYW5jZVZhbHVlQ29tcG9uZW50LFxuICAgIGJhbGFuY2VUb0Fzc2V0LFxuICAgIGdldEVxdWl2YWxlbnRWYWx1ZVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVNBOzs7QUFRQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFPQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQUpBO0FBWUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWdCQTs7OztBQXRGQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFDQTtBQU9BOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBTEE7QUFDQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7Ozs7QUEvQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQURBO0FBQ0E7QUEwQkE7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=