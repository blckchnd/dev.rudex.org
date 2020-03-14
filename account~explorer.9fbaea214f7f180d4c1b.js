(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[21],{

/***/ 2891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquivalentValueComponent", function() { return EquivalentValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceValueComponent", function() { return BalanceValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balanceToAsset", function() { return balanceToAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEquivalentValue", function() { return getEquivalentValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2159);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2015);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2016);
/* harmony import */ var _AssetWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2139);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(583);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1898);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2389);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1904);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MarketStatsCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2391);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2388);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(748);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(432);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5leHBsb3Jlci45ZmJhZWEyMTRmN2YxODBkNGMxYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0VxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9ybWF0dGVkQXNzZXQgZnJvbSBcIi4vRm9ybWF0dGVkQXNzZXRcIjtcclxuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4vQ2hhaW5UeXBlc1wiO1xyXG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiLi9CaW5kVG9DaGFpblN0YXRlXCI7XHJcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4vQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCJzdG9yZXMvTWFya2V0c1N0b3JlXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgTWFya2V0U3RhdHNDaGVjayBmcm9tIFwiLi9NYXJrZXRTdGF0c0NoZWNrXCI7XHJcbmltcG9ydCBNYXJrZXRVdGlscyBmcm9tIFwiY29tbW9uL21hcmtldF91dGlsc1wiO1xyXG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5cclxuY29uc3QgZ2V0RXF1aXZhbGVudFZhbHVlID0gZnVuY3Rpb24oXHJcbiAgICBhbW91bnQsXHJcbiAgICB0b0Fzc2V0LFxyXG4gICAgZnJvbUFzc2V0LFxyXG4gICAgZnVsbFByZWNpc2lvbiA9IG51bGwsXHJcbiAgICBjb3JlQXNzZXQgPSBudWxsLFxyXG4gICAgYWxsTWFya2V0U3RhdHMgPSBudWxsXHJcbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gTWFya2V0VXRpbHMuY29udmVydFZhbHVlKFxyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIHRvQXNzZXQsXHJcbiAgICAgICAgICAgIGZyb21Bc3NldCxcclxuICAgICAgICAgICAgYWxsTWFya2V0U3RhdHNcclxuICAgICAgICAgICAgICAgID8gYWxsTWFya2V0U3RhdHNcclxuICAgICAgICAgICAgICAgIDogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuYWxsTWFya2V0U3RhdHMsXHJcbiAgICAgICAgICAgIGNvcmVBc3NldCA/IGNvcmVBc3NldCA6IENoYWluU3RvcmUuZ2V0QXNzZXQoXCIxLjMuMFwiKSxcclxuICAgICAgICAgICAgZnVsbFByZWNpc2lvbiA/IGZ1bGxQcmVjaXNpb24gOiB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogIEdpdmVuIGFuIGFzc2V0IGFtb3VudCwgZGlzcGxheXMgdGhlIGVxdWl2YWxlbnQgdmFsdWUgaW4gYmFzZUFzc2V0IGlmIHBvc3NpYmxlXHJcbiAqXHJcbiAqICBFeHBlY3RzIHRocmVlIHByb3BlcnRpZXNcclxuICogIC0ndG9Bc3NldCcgd2hpY2ggc2hvdWxkIGJlIGEgYXNzZXQgaWRcclxuICogIC0nZnJvbUFzc2V0JyB3aGljaCBpcyB0aGUgYXNzZXQgaWQgb2YgdGhlIG9yaWdpbmFsIGFzc2V0IGFtb3VudFxyXG4gKiAgLSdhbW91bnQnIHdoaWNoIGlzIHRoZSBhbW91bnQgdG8gY29udmVydFxyXG4gKiAgLSdmdWxsUHJlY2lzaW9uJyBib29sZWFuIHRvIHRlbGwgaWYgdGhlIGFtb3VudCB1c2VzIHRoZSBmdWxsIHByZWNpc2lvbiBvZiB0aGUgYXNzZXRcclxuICovXHJcbmNsYXNzIFZhbHVlQ29tcG9uZW50IGV4dGVuZHMgTWFya2V0U3RhdHNDaGVjayB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGZ1bGxQcmVjaXNpb246IHRydWUsXHJcbiAgICAgICAgbm9EZWNpbWFsczogZmFsc2UsXHJcbiAgICAgICAgZnVsbERlY2ltYWxzOiBmYWxzZSxcclxuICAgICAgICBoaWRlX2Fzc2V0OiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBzdXBlci5zaG91bGRDb21wb25lbnRVcGRhdGUobnApIHx8XHJcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucC5wdWxzYXRlLCB0aGlzLnByb3BzLnB1bHNhdGUpIHx8XHJcbiAgICAgICAgICAgIG5wLnRvQXNzZXQgIT09IHRoaXMucHJvcHMudG9Bc3NldCB8fFxyXG4gICAgICAgICAgICBucC5mcm9tQXNzZXQgIT09IHRoaXMucHJvcHMuZnJvbUFzc2V0IHx8XHJcbiAgICAgICAgICAgIG5wLmFtb3VudCAhPT0gdGhpcy5wcm9wcy5hbW91bnRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIHRvQXNzZXQsXHJcbiAgICAgICAgICAgIGZyb21Bc3NldCxcclxuICAgICAgICAgICAgZnVsbFByZWNpc2lvbixcclxuICAgICAgICAgICAgY29yZUFzc2V0LFxyXG4gICAgICAgICAgICAuLi5vdGhlcnNcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgbGV0IHRvSUQgPSB0b0Fzc2V0LmdldChcImlkXCIpO1xyXG4gICAgICAgIGxldCB0b1N5bWJvbCA9IHRvQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG5cclxuICAgICAgICBsZXQgZXFWYWx1ZSA9IGdldEVxdWl2YWxlbnRWYWx1ZShcclxuICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICB0b0Fzc2V0LFxyXG4gICAgICAgICAgICBmcm9tQXNzZXQsXHJcbiAgICAgICAgICAgIGZ1bGxQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIGNvcmVBc3NldFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghZXFWYWx1ZSAmJiBlcVZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcInRvb2x0aXAubm9fcHJpY2VcIil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwIGlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMC45cmVtXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwiYWNjb3VudC5ub19wcmljZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybWF0dGVkQXNzZXRcclxuICAgICAgICAgICAgICAgIG5vUHJlZml4XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e2VxVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBhc3NldD17dG9JRH1cclxuICAgICAgICAgICAgICAgIGRlY2ltYWxPZmZzZXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRvU3ltYm9sLmluZGV4T2YoXCJCVENcIikgIT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuZnVsbERlY2ltYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5ub0RlY2ltYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0b0Fzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdG9Bc3NldC5nZXQoXCJwcmVjaXNpb25cIikgLSAyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuVmFsdWVDb21wb25lbnQgPSBBc3NldFdyYXBwZXIoVmFsdWVDb21wb25lbnQsIHtcclxuICAgIHByb3BOYW1lczogW1widG9Bc3NldFwiLCBcImZyb21Bc3NldFwiLCBcImNvcmVBc3NldFwiXSxcclxuICAgIGRlZmF1bHRQcm9wczoge1xyXG4gICAgICAgIHRvQXNzZXQ6IFwiMS4zLjBcIixcclxuICAgICAgICBjb3JlQXNzZXQ6IFwiMS4zLjBcIlxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNsYXNzIEVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtyZWZDYWxsYmFjaywgLi4ub3RoZXJzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiA8VmFsdWVDb21wb25lbnQgey4uLm90aGVyc30gcmVmPXtyZWZDYWxsYmFja30gLz47XHJcbiAgICB9XHJcbn1cclxuXHJcbkVxdWl2YWxlbnRWYWx1ZUNvbXBvbmVudCA9IGNvbm5lY3QoXHJcbiAgICBFcXVpdmFsZW50VmFsdWVDb21wb25lbnQsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbTWFya2V0c1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWxsTWFya2V0U3RhdHM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmFsbE1hcmtldFN0YXRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuY29uc3QgYmFsYW5jZVRvQXNzZXQgPSBmdW5jdGlvbihiYWxhbmNlKSB7XHJcbiAgICBjb25zdCBpc0JhbGFuY2VPYmplY3QgPSBiYWxhbmNlLmdldEluKFtcImJhbGFuY2VcIiwgXCJhbW91bnRcIl0pO1xyXG4gICAgaWYgKGlzQmFsYW5jZU9iamVjdCB8fCBpc0JhbGFuY2VPYmplY3QgPT09IDApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhc3NldF9pZDogYmFsYW5jZS5nZXRJbihbXCJiYWxhbmNlXCIsIFwiYXNzZXRfaWRcIl0pLFxyXG4gICAgICAgICAgICBhbW91bnQ6IE51bWJlcihiYWxhbmNlLmdldEluKFtcImJhbGFuY2VcIiwgXCJhbW91bnRcIl0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFzc2V0X2lkOiBiYWxhbmNlLmdldChcImFzc2V0X3R5cGVcIiksXHJcbiAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKGJhbGFuY2UuZ2V0KFwiYmFsYW5jZVwiKSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59O1xyXG5cclxuY2xhc3MgQmFsYW5jZVZhbHVlQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYmFsYW5jZTogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICAgIHNhdG9zaGlzOiBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgc2F0b3NoaXM6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtiYWxhbmNlLCAuLi5vdGhlcnN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBiYWxhbmNlQXNzZXQgPSBiYWxhbmNlVG9Bc3NldChiYWxhbmNlKTtcclxuICAgICAgICBsZXQgYW1vdW50ID0gYmFsYW5jZUFzc2V0LmFtb3VudDtcclxuICAgICAgICAvLyBvdmVycmlkZSBhbW91bnQgaWYgZGVzaXJlZFxyXG4gICAgICAgIGlmICghIXRoaXMucHJvcHMuc2F0b3NoaXMpIHtcclxuICAgICAgICAgICAgYW1vdW50ID0gdGhpcy5wcm9wcy5zYXRvc2hpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZyb21Bc3NldCA9IGJhbGFuY2VBc3NldC5hc3NldF9pZDtcclxuICAgICAgICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIDxzcGFuPi0tPC9zcGFuPjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RXF1aXZhbGVudFZhbHVlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgIGZyb21Bc3NldD17ZnJvbUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgbm9EZWNpbWFscz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGZ1bGxQcmVjaXNpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5zYXRvc2hpcyA/IGZhbHNlIDogdGhpcy5wcm9wcy5mdWxsUHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuQmFsYW5jZVZhbHVlQ29tcG9uZW50ID0gQmluZFRvQ2hhaW5TdGF0ZShCYWxhbmNlVmFsdWVDb21wb25lbnQsIHtcclxuICAgIGtlZXBfdXBkYXRpbmc6IHRydWVcclxufSk7XHJcblxyXG5leHBvcnQge1xyXG4gICAgRXF1aXZhbGVudFZhbHVlQ29tcG9uZW50LFxyXG4gICAgQmFsYW5jZVZhbHVlQ29tcG9uZW50LFxyXG4gICAgYmFsYW5jZVRvQXNzZXQsXHJcbiAgICBnZXRFcXVpdmFsZW50VmFsdWVcclxufTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBU0E7OztBQVFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQU9BOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBSkE7QUFZQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBZ0JBOzs7O0FBNUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQTRFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFMQTtBQUNBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFVQTs7OztBQS9CQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBREE7QUFDQTtBQTBCQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==