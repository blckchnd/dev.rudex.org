(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[13],{

/***/ 2673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasLoaded", function() { return hasLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindToCurrentAccount", function() { return bindToCurrentAccount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1934);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2070);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1935);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1818);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(558);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1918);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var hasLoaded = function hasLoaded(currentAccount) {
    return !!currentAccount && !!currentAccount.get("id");
};

var bindToCurrentAccount = function bindToCurrentAccount(WrappedComponent) {
    var _class, _temp;

    // ...and returns another component...
    var BindToCurrentAccount = (_temp = _class = function (_React$Component) {
        _inherits(BindToCurrentAccount, _React$Component);

        function BindToCurrentAccount(props) {
            _classCallCheck(this, BindToCurrentAccount);

            return _possibleConstructorReturn(this, (BindToCurrentAccount.__proto__ || Object.getPrototypeOf(BindToCurrentAccount)).call(this, props));
        }

        _createClass(BindToCurrentAccount, [{
            key: "render",
            value: function render() {
                if (hasLoaded(this.props.currentAccount)) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);
                } else {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__["default"], null);
                }
            }
        }]);

        return BindToCurrentAccount;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), _class.propTypes = {
        currentAccount: _ChainTypes__WEBPACK_IMPORTED_MODULE_1__["default"].ChainAccount
    }, _class.defaultProps = {
        // set subscription
        autosubscribe: true
    }, _temp);

    BindToCurrentAccount = Object(_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(BindToCurrentAccount);

    BindToCurrentAccount = react_debounce_render__WEBPACK_IMPORTED_MODULE_2___default()(BindToCurrentAccount, 100, {
        leading: false
    });

    return Object(alt_react__WEBPACK_IMPORTED_MODULE_4__["connect"])(BindToCurrentAccount, {
        listenTo: function listenTo() {
            return [_stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
        },
        getProps: function getProps() {
            var currentAccount = _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().currentAccount || _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().passwordAccount || "please-login";
            return {
                currentAccount: new Map([["name", currentAccount]])
            };
        }
    });
};

/***/ }),

/***/ 2689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(637);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2690);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2049);




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
  wait = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(wait) || 0;
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.maxWait) || 0, wait) : maxWait;
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
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
    return timerId === undefined ? result : trailingEdge(Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  function debounced() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
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

/* harmony default export */ __webpack_exports__["default"] = (debounce);


/***/ }),

/***/ 2690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(633);


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

/* harmony default export */ __webpack_exports__["default"] = (now);


/***/ }),

/***/ 2763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupAssets", function() { return lookupAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assetFilter", function() { return assetFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIssuerName", function() { return fetchIssuerName; });
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2067);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




function lookupAssets(value) {
    var gatewayAssets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var getAssetList = arguments[2];
    var setState = arguments[3];

    if (!value && value !== "") return;

    var quote = value.toUpperCase();

    if (quote.startsWith("BIT") && quote.length >= 6) {
        quote = value.substr(3, quote.length - 1);
    }

    getAssetList(quote, 10, gatewayAssets);

    setState({ lookupQuote: quote });
}

function assetFilter(_ref, _ref2, setState, checkAndUpdateMarketList) {
    var searchAssets = _ref.searchAssets,
        marketPickerAsset = _ref.marketPickerAsset,
        baseAsset = _ref.baseAsset,
        quoteAsset = _ref.quoteAsset;
    var inputValue = _ref2.inputValue,
        lookupQuote = _ref2.lookupQuote;

    setState({ activeSearch: true });

    var assetCount = 0;
    var allMarkets = [];

    var baseSymbol = baseAsset.get("symbol");
    var quoteSymbol = quoteAsset.get("symbol");

    if (searchAssets.size && !!inputValue && inputValue.length > 2) {
        searchAssets.filter(function (a) {
            try {
                if (a.options.description) {
                    var description = JSON.parse(a.options.description);
                    if ("visible" in description) {
                        if (!description.visible) return false;
                    }
                }
            } catch (e) {}

            return a.symbol.indexOf(lookupQuote) !== -1;
        }).forEach(function (asset) {
            if (assetCount > 100) return;
            assetCount++;

            var issuerName = fetchIssuerName(asset.issuer);

            var base = baseAsset.get("symbol");
            var marketID = asset.symbol + "_" + base;

            var isQuoteAsset = quoteSymbol == marketPickerAsset;
            var includeAsset = isQuoteAsset && asset.symbol != baseSymbol || !isQuoteAsset && asset.symbol != quoteSymbol;

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

    var marketsList = sortMarketsList(allMarkets, inputValue);
    checkAndUpdateMarketList(marketsList);
}

function getMarketSortComponents(market) {
    var weight = {};
    var quote = market.quote;
    if (quote.indexOf(".") !== -1) {
        var _quote$split = quote.split("."),
            _quote$split2 = _slicedToArray(_quote$split, 2),
            gateway = _quote$split2[0],
            asset = _quote$split2[1];

        weight.gateway = gateway;
        weight.asset = asset;
    } else {
        weight.asset = quote;
    }
    if (market.issuerId === "1.2.0") weight.isCommittee = true;
    return weight;
}

function sortMarketsList(allMarkets, inputValue) {
    if (inputValue.startsWith("BIT") && inputValue.length >= 6) {
        inputValue = inputValue.substr(3, inputValue.length - 1);
    }
    return allMarkets.sort(function (_ref3, _ref4) {
        var _ref6 = _slicedToArray(_ref3, 2),
            marketA = _ref6[1];

        var _ref5 = _slicedToArray(_ref4, 2),
            marketB = _ref5[1];

        var weightA = getMarketSortComponents(marketA);
        var weightB = getMarketSortComponents(marketB);

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

        var aIsKnownGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__["hasGatewayPrefix"])(marketA.quote);
        var bIsKnownGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__["hasGatewayPrefix"])(marketB.quote);
        if (aIsKnownGateway && !bIsKnownGateway) return -1;
        if (bIsKnownGateway && !aIsKnownGateway) return 1;

        if (weightA.gateway > weightB.gateway) return 1;
        if (weightA.gateway < weightB.gateway) return -1;
        return 0;
    });
}

function fetchIssuerName(issuerId) {
    var issuer = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["ChainStore"].getObject(issuerId, false, false);
    if (!issuer) {
        return;
    } else {
        return issuer.get("name");
    }
}



/***/ }),

/***/ 3222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2574);
/* harmony import */ var _QuickTrade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3223);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1934);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1935);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var QuickTradeSubscriber = function (_Component) {
    _inherits(QuickTradeSubscriber, _Component);

    function QuickTradeSubscriber() {
        _classCallCheck(this, QuickTradeSubscriber);

        return _possibleConstructorReturn(this, (QuickTradeSubscriber.__proto__ || Object.getPrototypeOf(QuickTradeSubscriber)).apply(this, arguments));
    }

    _createClass(QuickTradeSubscriber, [{
        key: "render",
        value: function render() {
            if (!!this.props.assetToReceive.get && !!this.props.assetToSell.get) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuickTrade__WEBPACK_IMPORTED_MODULE_2__["default"], this.props);
            } else {
                return null;
            }
        }
    }]);

    return QuickTradeSubscriber;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

QuickTradeSubscriber.propTypes = {
    assetToSell: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset,
    assetToReceive: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__["default"].ChainAsset
};
QuickTradeSubscriber.defaultProps = {
    assetToSell: "CNY",
    assetToReceive: "BTS"
};


var QuickTradeAssetResolver = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__["default"])(QuickTradeSubscriber, {
    show_loader: true
});

var QuickTradeRouter = function (_Component2) {
    _inherits(QuickTradeRouter, _Component2);

    function QuickTradeRouter() {
        _classCallCheck(this, QuickTradeRouter);

        return _possibleConstructorReturn(this, (QuickTradeRouter.__proto__ || Object.getPrototypeOf(QuickTradeRouter)).apply(this, arguments));
    }

    _createClass(QuickTradeRouter, [{
        key: "render",
        value: function render() {
            var symbols = !!this.props.match.params.marketID ? this.props.match.params.marketID.toUpperCase().split("_") : ["", ""];
            if (symbols.length == 2 && !!symbols[0] && symbols[0] === symbols[1]) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_1__["default"], { subtitle: "market_not_found_subtitle" });
            }
            if (false) {}
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuickTradeAssetResolver, _extends({}, this.props, {
                assetToSell: symbols[0] || "",
                assetToReceive: symbols.length == 2 ? symbols[1] : ""
            }));
        }
    }]);

    return QuickTradeRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (QuickTradeRouter);

/***/ }),

/***/ 3223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2673);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1818);
/* harmony import */ var _stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2318);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2307);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(742);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_QuickTrade_SellReceive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3224);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2308);
/* harmony import */ var _QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3227);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(418);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2319);
/* harmony import */ var _Exchange_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2763);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(592);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2376);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(603);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2378);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2061);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_18__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }























var QuickTrade = function (_Component) {
    _inherits(QuickTrade, _Component);

    function QuickTrade(props) {
        _classCallCheck(this, QuickTrade);

        var _this = _possibleConstructorReturn(this, (QuickTrade.__proto__ || Object.getPrototypeOf(QuickTrade)).call(this, props));

        var accountAssets = Object(_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__["getAssetsToSell"])(props.currentAccount);
        _this.state = {
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
        _this.onSellAssetInputChange = _this.onSellAssetInputChange.bind(_this);
        _this.onReceiveAssetInputChange = _this.onReceiveAssetInputChange.bind(_this);
        _this.onSellAmountChange = _this.onSellAmountChange.bind(_this);
        _this.onReceiveAmountChange = _this.onReceiveAmountChange.bind(_this);
        _this.onSellImageError = _this.onSellImageError.bind(_this);
        _this.onReceiveImageError = _this.onReceiveImageError.bind(_this);
        _this.onReceiveAssetSearch = _this.onReceiveAssetSearch.bind(_this);
        _this.onSwap = _this.onSwap.bind(_this);
        _this.handleSubscriptionToggleChange = _this.handleSubscriptionToggleChange.bind(_this);
        _this.hendleOrderView = _this.hendleOrderView.bind(_this);
        _this.handleSell = _this.handleSell.bind(_this);
        _this._subToMarket = _this._subToMarket.bind(_this);
        _this._checkAndUpdateMarketList = _this._checkAndUpdateMarketList.bind(_this);
        _this.getAssetList = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_11__["default"].getAssetList.defer, 150);
        return _this;
    }

    _createClass(QuickTrade, [{
        key: "_routeTo",
        value: function _routeTo(assetToSell, assetToReceive) {
            var sellRoute = assetToSell;
            var receiveRoute = assetToReceive;
            if (!assetToSell) {
                sellRoute = "";
            }
            if (!assetToReceive) {
                receiveRoute = "";
            }
            var pathName = "/instant-trade/" + sellRoute + "_" + receiveRoute;
            if (false) {}
            if (this.props.location.pathname !== pathName) {
                this.props.history.push(pathName);
            }
        }
    }, {
        key: "_areEqualAssets",
        value: function _areEqualAssets(asset1, asset2) {
            return this._isLoadedAsset(asset1) && this._isLoadedAsset(asset2) && asset1.get("id") === asset2.get("id");
        }
    }, {
        key: "_isLoadedAsset",
        value: function _isLoadedAsset(asset) {
            return !!asset && !!asset.toJS;
        }
    }, {
        key: "_areAssetsGiven",
        value: function _areAssetsGiven() {
            return this._isLoadedAsset(this.props.assetToSell) && this._isLoadedAsset(this.props.assetToReceive);
        }
    }, {
        key: "_haveAssetsChanged",
        value: function _haveAssetsChanged(prevProps) {
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
    }, {
        key: "_hasMarketChanged",
        value: function _hasMarketChanged(prevProps) {
            return JSON.stringify(prevProps.marketData) !== JSON.stringify(this.props.marketData);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            var _this2 = this;

            if (this._haveAssetsChanged(prevProps)) {
                this._assetsHaveChanged();
            } else {
                if (this._hasMarketChanged(prevProps)) {
                    this._getOrders();
                }
            }
            if (this.props.searchAssets !== prevProps.searchAssets) {
                this.setState({ activeSearch: true });
                var filteredAssets = this.props.searchAssets.toArray().filter(function (a) {
                    return a.symbol.indexOf(_this2.state.lookupQuote) !== -1;
                });
                this._checkAndUpdateMarketList(filteredAssets);
            }
            if (this.props.currentAccount !== prevProps.currentAccount) {
                var assets = Object(_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__["getAssetsToSell"])(this.props.currentAccount);
                this.setState({
                    sellAssets: assets,
                    receiveAssets: assets
                });
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState({
                mounted: true
            });
            if (this._areAssetsGiven()) {
                this._assetsHaveChanged();
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            var sub = this.state.sub;

            var _getAssetsDetails = this.getAssetsDetails(),
                sellAssetId = _getAssetsDetails.sellAssetId,
                receiveAssetId = _getAssetsDetails.receiveAssetId;

            if (sub) {
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_8__["default"].unSubscribeMarket(sellAssetId, receiveAssetId);
            }
        }
    }, {
        key: "_subToMarket",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this3 = this;

                var _state, baseAsset, quoteAsset, sub, _getAssetsDetails2, baseAssetId, quoteAssetId, _props, bucketSize, currentGroupOrderLimit, _sub$split, _sub$split2, qa, ba;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _state = this.state, baseAsset = _state.receiveAsset, quoteAsset = _state.sellAsset, sub = _state.sub;

                                if (!(baseAsset && quoteAsset)) {
                                    _context.next = 13;
                                    break;
                                }

                                _getAssetsDetails2 = this.getAssetsDetails(), baseAssetId = _getAssetsDetails2.receiveAssetId, quoteAssetId = _getAssetsDetails2.sellAssetId;
                                _props = this.props, bucketSize = _props.bucketSize, currentGroupOrderLimit = _props.currentGroupOrderLimit;

                                if (!sub) {
                                    _context.next = 10;
                                    break;
                                }

                                _sub$split = sub.split("_"), _sub$split2 = _slicedToArray(_sub$split, 2), qa = _sub$split2[0], ba = _sub$split2[1];

                                if (!(qa === quoteAssetId && ba === baseAssetId)) {
                                    _context.next = 8;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 8:
                                _context.next = 10;
                                return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_8__["default"].unSubscribeMarket(qa, ba);

                            case 10:
                                _context.next = 12;
                                return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_8__["default"].subscribeMarket(baseAsset, quoteAsset, 3600, 0);

                            case 12:
                                this.setState({
                                    sub: quoteAssetId + "_" + baseAssetId
                                }, function () {
                                    _this3.getAllPrices();
                                    _this3.getAllFees();
                                });

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _subToMarket() {
                return _ref.apply(this, arguments);
            }

            return _subToMarket;
        }()
    }, {
        key: "getAllFees",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var currentAccount, _state2, sellAsset, receiveAsset, fees;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                currentAccount = this.props.currentAccount;
                                _state2 = this.state, sellAsset = _state2.sellAsset, receiveAsset = _state2.receiveAsset;

                                if (!(sellAsset && receiveAsset)) {
                                    _context2.next = 7;
                                    break;
                                }

                                _context2.next = 5;
                                return Object(_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__["getFees"])(receiveAsset, sellAsset, currentAccount);

                            case 5:
                                fees = _context2.sent;

                                this.setState({
                                    fees: fees
                                });

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getAllFees() {
                return _ref2.apply(this, arguments);
            }

            return getAllFees;
        }()
    }, {
        key: "getAssetsDetails",
        value: function getAssetsDetails() {
            var _state3 = this.state,
                sellAsset = _state3.sellAsset,
                receiveAsset = _state3.receiveAsset;

            return {
                sellAssetId: sellAsset ? sellAsset.get("id") : null,
                receiveAssetId: receiveAsset ? receiveAsset.get("id") : null,
                sellAssetPrecision: sellAsset ? sellAsset.get("precision") : null,
                receiveAssetPrecision: receiveAsset ? receiveAsset.get("precision") : null,
                sellAssetSymbol: sellAsset ? sellAsset.get("symbol") : null,
                receiveAssetSymbol: receiveAsset ? receiveAsset.get("symbol") : null
            };
        }
    }, {
        key: "getAllPrices",
        value: function getAllPrices() {
            var _props2 = this.props,
                activeMarketHistory = _props2.activeMarketHistory,
                feedPrice = _props2.feedPrice;

            var prices = Object(_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__["getPrices"])(activeMarketHistory, feedPrice);
            this.setState({
                prices: prices
            });
        }
    }, {
        key: "_getOrders",
        value: function _getOrders() {
            var _this4 = this;

            if (!this.state.isSubscribedToMarket) {
                console.log(this.props.marketData);
                // if the user wants to inspect current orders, pause updating
                return;
            }
            var combinedBids = this.props.marketData.combinedBids;
            var _state4 = this.state,
                sellAsset = _state4.sellAsset,
                receiveAsset = _state4.receiveAsset,
                sellAmount = _state4.sellAmount,
                receiveAmount = _state4.receiveAmount,
                activeInput = _state4.activeInput;

            var _getAssetsDetails3 = this.getAssetsDetails(),
                sellAssetPrecision = _getAssetsDetails3.sellAssetPrecision,
                receiveAssetPrecision = _getAssetsDetails3.receiveAssetPrecision;

            if (false) {}
            if (combinedBids && combinedBids.length) {
                if (sellAsset && receiveAsset) {
                    switch (activeInput) {
                        case "receiveAsset":
                            if (sellAmount) {
                                var orders = Object(_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__["getOrders"])(sellAmount * Math.pow(10, sellAssetPrecision), combinedBids, "sell");
                                this.setState({
                                    orders: orders,
                                    ordersUpdated: new Date()
                                }, function () {
                                    return _this4.updateReceiveAmount();
                                });
                            }
                            break;
                        case "sellAsset":
                            if (receiveAmount) {
                                var _orders = Object(_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__["getOrders"])(receiveAmount * Math.pow(10, receiveAssetPrecision), combinedBids, "receive");
                                this.setState({
                                    orders: _orders,
                                    ordersUpdated: new Date()
                                }, function () {
                                    return _this4.updateSellAmount();
                                });
                            }
                            break;
                        case "sell":
                            if (sellAmount) {
                                var _orders2 = Object(_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__["getOrders"])(sellAmount * Math.pow(10, sellAssetPrecision), combinedBids, "sell");
                                this.setState({
                                    orders: _orders2,
                                    ordersUpdated: new Date()
                                }, function () {
                                    return _this4.updateReceiveAmount();
                                });
                            } else {
                                this.setState({
                                    orders: [],
                                    receiveAmount: ""
                                });
                            }
                            break;
                        case "receive":
                            if (receiveAmount) {
                                var _orders3 = Object(_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__["getOrders"])(receiveAmount * Math.pow(10, receiveAssetPrecision), combinedBids, "receive");
                                this.setState({
                                    orders: _orders3,
                                    ordersUpdated: new Date()
                                }, function () {
                                    return _this4.updateSellAmount();
                                });
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
    }, {
        key: "_assetsHaveChanged",
        value: function _assetsHaveChanged() {
            this._subToMarket();
        }
    }, {
        key: "_setSellAsset",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assetObjectIdOrSymbol) {
                var _this5 = this;

                var activeInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "sellAsset";
                var fireChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                var asset;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                asset = null;

                                if (!(typeof assetObjectIdOrSymbol === "string")) {
                                    _context3.next = 7;
                                    break;
                                }

                                _context3.next = 4;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["FetchChain"])("getAsset", assetObjectIdOrSymbol);

                            case 4:
                                asset = _context3.sent;
                                _context3.next = 8;
                                break;

                            case 7:
                                asset = assetObjectIdOrSymbol;

                            case 8:
                                if (false) {}

                                this.setState({
                                    activeInput: activeInput
                                }, function () {
                                    _this5._routeTo(asset.get("symbol"), !!_this5.props.assetToReceive ? _this5.props.assetToReceive.get("symbol") : "");
                                });

                            case 10:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function _setSellAsset(_x) {
                return _ref3.apply(this, arguments);
            }

            return _setSellAsset;
        }()
    }, {
        key: "_setReceiveAsset",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assetObjectIdOrSymbol) {
                var _this6 = this;

                var activeInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "receiveAsset";
                var fireChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                var asset;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                asset = null;

                                if (!(typeof assetObjectIdOrSymbol === "string")) {
                                    _context4.next = 7;
                                    break;
                                }

                                _context4.next = 4;
                                return Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["FetchChain"])("getAsset", assetObjectIdOrSymbol);

                            case 4:
                                asset = _context4.sent;
                                _context4.next = 8;
                                break;

                            case 7:
                                asset = assetObjectIdOrSymbol;

                            case 8:
                                if (false) {}
                                this.setState({
                                    activeInput: activeInput
                                }, function () {
                                    _this6._routeTo(!!_this6.props.assetToSell ? _this6.props.assetToSell.get("symbol") : "", asset.get("symbol"));
                                });

                            case 10:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function _setReceiveAsset(_x4) {
                return _ref4.apply(this, arguments);
            }

            return _setReceiveAsset;
        }()
    }, {
        key: "_swapAssets",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(activeInput) {
                var _this7 = this;

                var fireChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                this.setState({
                                    sellAmount: activeInput === "sellAsset" ? "" : this.state.receiveAmount,
                                    receiveAmount: activeInput === "receiveAsset" ? "" : this.state.sellAmount,
                                    activeInput: activeInput
                                }, function () {
                                    _this7._routeTo(_this7.state.receiveAsset.get("symbol"), _this7.state.sellAsset.get("symbol"));
                                });

                            case 1:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function _swapAssets(_x7) {
                return _ref5.apply(this, arguments);
            }

            return _swapAssets;
        }()
    }, {
        key: "onSellAssetInputChange",
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assetIdOrSymbol) {
                var _getAssetsDetails4, receiveAssetId;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _getAssetsDetails4 = this.getAssetsDetails(), receiveAssetId = _getAssetsDetails4.receiveAssetId;


                                if (assetIdOrSymbol === receiveAssetId) {
                                    this._swapAssets("sellAsset");
                                } else {
                                    this._setSellAsset(assetIdOrSymbol);
                                }

                            case 2:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function onSellAssetInputChange(_x9) {
                return _ref6.apply(this, arguments);
            }

            return onSellAssetInputChange;
        }()
    }, {
        key: "onReceiveAssetInputChange",
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assetIdOrSymbol) {
                var _getAssetsDetails5, sellAssetId;

                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _getAssetsDetails5 = this.getAssetsDetails(), sellAssetId = _getAssetsDetails5.sellAssetId;


                                if (assetIdOrSymbol === sellAssetId) {
                                    this._swapAssets("receiveAsset");
                                } else {
                                    this._setReceiveAsset(assetIdOrSymbol);
                                }

                            case 2:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function onReceiveAssetInputChange(_x10) {
                return _ref7.apply(this, arguments);
            }

            return onReceiveAssetInputChange;
        }()
    }, {
        key: "onReceiveAssetSearch",
        value: function onReceiveAssetSearch(e) {
            var _this8 = this;

            if (!this.state.mounted) return;
            var isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainValidation"].is_valid_symbol_error(e, true);
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

            this.timer = setTimeout(function () {
                Object(_Exchange_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_12__["lookupAssets"])(e, true, _this8.getAssetList, _this8.setState);
            }, 100);
        }
    }, {
        key: "_checkAndUpdateMarketList",
        value: function _checkAndUpdateMarketList(marketsList) {
            var _this9 = this;

            var receiveAssets = marketsList.map(function (asset) {
                return asset.id;
            });
            clearInterval(this.intervalId);
            var receiveAssetInput = this.state.receiveAssetInput;

            var asset = "";
            if (bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getAsset(receiveAssetInput)) {
                var assetId = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getAsset(receiveAssetInput).get("id");
                if (receiveAssets.includes(assetId)) {
                    asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getAsset(receiveAssetInput).get("id");
                }
            }
            if (receiveAssets.length === 1) {
                asset = receiveAssets[0];
                var currentAccount = this.props.currentAccount;

                receiveAssets = Object(_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__["getAssetsToSell"])(currentAccount);
                receiveAssets.push(asset);
            }
            if (receiveAssets.length === 0) {
                var _currentAccount = this.props.currentAccount;

                receiveAssets = Object(_QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__["getAssetsToSell"])(_currentAccount);
            }

            this.intervalId = setInterval(function () {
                clearInterval(_this9.intervalId);
                _this9.setState({
                    receiveAssets: receiveAssets,
                    activeSearch: false
                }, function () {
                    _this9._subToMarket();
                });
            }, 100);
        }
    }, {
        key: "onSellAmountChange",
        value: function onSellAmountChange(e) {
            var _this10 = this;

            if (!this.state.mounted) return;
            if (e.asset !== this.state.sellAssetInput) {
                this.onSellAssetInputChange(e.asset);
            }
            this.setState({
                sellAmount: e.amount,
                activeInput: "sell",
                activeAmountInput: "sell"
            }, function () {
                _this10._getOrders();
            });
        }
    }, {
        key: "onReceiveAmountChange",
        value: function onReceiveAmountChange(e) {
            var _this11 = this;

            if (!this.state.mounted) return;
            if (e.asset !== this.state.receiveAssetInput) {
                this.onReceiveAssetInputChange(e.asset);
            }
            this.setState({
                receiveAmount: e.amount,
                activeInput: "receive",
                activeAmountInput: "receive"
            }, function () {
                _this11._getOrders();
            });
        }
    }, {
        key: "onSellImageError",
        value: function onSellImageError() {
            this.setState({
                sellImgName: "unknown"
            });
        }
    }, {
        key: "onReceiveImageError",
        value: function onReceiveImageError() {
            this.setState({
                receiveImgName: "unknown"
            });
        }
    }, {
        key: "onSwap",
        value: function onSwap() {
            if (this.isSwappable()) {
                this._swapAssets("neither");
            }
        }
    }, {
        key: "handleSubscriptionToggleChange",
        value: function handleSubscriptionToggleChange() {
            this.setState(function (state) {
                return {
                    isSubscribedToMarket: !state.isSubscribedToMarket
                };
            });
        }
    }, {
        key: "hendleOrderView",
        value: function hendleOrderView() {
            this.setState(function (state) {
                var orderView = state.orderView === "amount" ? "total" : "amount";
                return {
                    orderView: orderView
                };
            });
        }
    }, {
        key: "handleSell",
        value: function handleSell() {
            var currentAccount = this.props.currentAccount;
            var _state5 = this.state,
                sellAmount = _state5.sellAmount,
                receiveAmount = _state5.receiveAmount;

            var _getAssetsDetails6 = this.getAssetsDetails(),
                sellAssetId = _getAssetsDetails6.sellAssetId,
                receiveAssetId = _getAssetsDetails6.receiveAssetId,
                sellAssetPrecision = _getAssetsDetails6.sellAssetPrecision,
                receiveAssetPrecision = _getAssetsDetails6.receiveAssetPrecision;

            var forSale = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                asset_id: sellAssetId,
                precision: sellAssetPrecision,
                amount: sellAmount * Math.pow(10, sellAssetPrecision)
            });
            var toReceive = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                asset_id: receiveAssetId,
                precision: receiveAssetPrecision,
                amount: receiveAmount * Math.pow(10, receiveAssetPrecision)
            });
            var expirationTime = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

            var order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["LimitOrderCreate"]({
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

            return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_8__["default"].createLimitOrder2(order).then(function (result) {
                if (result.error) {
                    if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Notification"].error({
                        message: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("notifications.exchange_unknown_error_place_order", {
                            amount: receiveAmount,
                            symbol: receiveAssetId
                        })
                    });
                }
            }).catch(function (e) {
                console.error("order failed:", e);
            });
        }
    }, {
        key: "updateSellAmount",
        value: function updateSellAmount() {
            var _state6 = this.state,
                orders = _state6.orders,
                receiveAmount = _state6.receiveAmount;

            var _getAssetsDetails7 = this.getAssetsDetails(),
                sellAssetPrecision = _getAssetsDetails7.sellAssetPrecision,
                receiveAssetPrecision = _getAssetsDetails7.receiveAssetPrecision;

            if (orders.length === 1) {
                var sellAmount = (receiveAmount / orders[0].order.getPrice()).toFixed(sellAssetPrecision);
                this.setState({
                    sellAmount: sellAmount
                });
                return;
            }
            if (orders.length > 1) {
                var lastOrder = orders.slice(-1)[0];
                var penultimateOrder = orders.slice(orders.length - 2, orders.length - 1)[0];
                var lastOrderToReceive = receiveAmount * Math.pow(10, receiveAssetPrecision) - penultimateOrder.order.total_for_sale.getAmount();
                var lastOrderForSale = lastOrderToReceive / lastOrder.order.getPrice() * Math.pow(10, sellAssetPrecision) / Math.pow(10, receiveAssetPrecision);
                var _sellAmount = ((penultimateOrder.order.total_to_receive.getAmount() + lastOrderForSale) / Math.pow(10, sellAssetPrecision)).toFixed(sellAssetPrecision);
                this.setState({
                    sellAmount: _sellAmount
                });
                return;
            }
        }
    }, {
        key: "updateReceiveAmount",
        value: function updateReceiveAmount() {
            var _state7 = this.state,
                orders = _state7.orders,
                sellAmount = _state7.sellAmount;

            var _getAssetsDetails8 = this.getAssetsDetails(),
                sellAssetPrecision = _getAssetsDetails8.sellAssetPrecision,
                receiveAssetPrecision = _getAssetsDetails8.receiveAssetPrecision;

            if (orders.length === 1) {
                var receiveAmount = (orders[0].order.getPrice() * sellAmount).toFixed(receiveAssetPrecision);
                this.setState({
                    receiveAmount: receiveAmount
                });
                return;
            }

            if (orders.length > 1) {
                var lastOrder = orders.slice(-1)[0];
                var penultimateOrder = orders.slice(orders.length - 2, orders.length - 1)[0];
                var lastOrderForSale = sellAmount * Math.pow(10, sellAssetPrecision) - penultimateOrder.order.total_to_receive.getAmount();
                var lastOrderToReceive = lastOrderForSale * lastOrder.order.getPrice() * Math.pow(10, receiveAssetPrecision) / Math.pow(10, sellAssetPrecision);
                var _receiveAmount = ((penultimateOrder.order.total_for_sale.getAmount() + lastOrderToReceive) / Math.pow(10, receiveAssetPrecision)).toFixed(receiveAssetPrecision);
                this.setState({
                    receiveAmount: _receiveAmount
                });
                return;
            }
        }
    }, {
        key: "isSwappable",
        value: function isSwappable() {
            return this._areAssetsGiven();
        }
    }, {
        key: "_getTransactionFee",
        value: function _getTransactionFee(denominationAssetId) {
            var _state8 = this.state,
                fees = _state8.fees,
                prices = _state8.prices;

            var _getAssetsDetails9 = this.getAssetsDetails(),
                sellAssetId = _getAssetsDetails9.sellAssetId;

            if (fees) {
                if (fees.transactionFee[sellAssetId]) {
                    if (!denominationAssetId || denominationAssetId === sellAssetId) {
                        return fees.transactionFee[sellAssetId].fee.amount / Math.pow(10, fees.transactionFee[sellAssetId].fee.precision);
                    } else {
                        return fees.transactionFee[sellAssetId].fee.amount / Math.pow(10, fees.transactionFee[sellAssetId].fee.precision) * prices.latestPrice;
                    }
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        }
    }, {
        key: "_getMarketFee",
        value: function _getMarketFee(denomindatedAssetId) {
            var _state9 = this.state,
                fees = _state9.fees,
                prices = _state9.prices,
                receiveAmount = _state9.receiveAmount;

            var _getAssetsDetails10 = this.getAssetsDetails(),
                receiveAssetId = _getAssetsDetails10.receiveAssetId;

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
    }, {
        key: "_getFeePercent",
        value: function _getFeePercent(feeAmount, totalAmount) {
            return +totalAmount ? (+totalAmount + +feeAmount) / totalAmount - 1 : 0;
        }
    }, {
        key: "getDetails",
        value: function getDetails() {
            var sub = this.state.sub;

            if (!sub) {
                return;
            }
            var _state10 = this.state,
                sellAmount = _state10.sellAmount,
                receiveAmount = _state10.receiveAmount;

            var _getAssetsDetails11 = this.getAssetsDetails(),
                sellAssetId = _getAssetsDetails11.sellAssetId,
                receiveAssetId = _getAssetsDetails11.receiveAssetId,
                sellAssetPrecision = _getAssetsDetails11.sellAssetPrecision,
                receiveAssetPrecision = _getAssetsDetails11.receiveAssetPrecision,
                receiveAssetSymbol = _getAssetsDetails11.receiveAssetSymbol;

            var priceSection = this.getPriceSection();
            var priceExtra = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
                null,
                counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.effective"),
                " ",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    base_asset: sellAssetId,
                    quote_asset: receiveAssetId,
                    base_amount: sellAmount * Math.pow(10, sellAssetPrecision),
                    quote_amount: receiveAmount * Math.pow(10, receiveAssetPrecision),
                    noPopOver: true,
                    force_direction: receiveAssetSymbol,
                    noInvertTip: true
                })
            );
            var feeSection = this.getFeeSection();
            var ordersSection = this.getOrdersSection();
            var totalPercentFee = counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.effective") + " " + (this.getTotalPercentFee() * 100).toFixed(2);
            var amountOfOrders = this.state.orders.length;
            var ordersCaption = amountOfOrders < 2 ? counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.order") : counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.orders");
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Collapse"],
                {
                    className: "asset-collapse",
                    style: {
                        marginTop: "1rem"
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Collapse"].Panel,
                    {
                        header: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.price"),
                        extra: priceExtra
                    },
                    priceSection
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Collapse"].Panel,
                    {
                        header: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.fee"),
                        extra: totalPercentFee + "%"
                    },
                    feeSection
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Collapse"].Panel,
                    {
                        header: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.orders"),
                        extra: amountOfOrders ? amountOfOrders + " " + ordersCaption : "no orders"
                    },
                    ordersSection
                )
            );
        }
    }, {
        key: "showDetails",
        value: function showDetails() {
            var _state11 = this.state,
                sellAsset = _state11.sellAsset,
                receiveAsset = _state11.receiveAsset,
                sellAmount = _state11.sellAmount,
                receiveAmount = _state11.receiveAmount;

            return sellAsset && receiveAsset && +sellAmount && +receiveAmount;
        }
    }, {
        key: "showFeedPrice",
        value: function showFeedPrice() {
            var _state12 = this.state,
                sellAsset = _state12.sellAsset,
                receiveAsset = _state12.receiveAsset;

            var _getAssetsDetails12 = this.getAssetsDetails(),
                sellAssetId = _getAssetsDetails12.sellAssetId,
                receiveAssetId = _getAssetsDetails12.receiveAssetId;

            var receiveCollateralAsset = receiveAsset.getIn(["bitasset", "options", "short_backing_asset"]);
            var sellCollateralAsset = sellAsset.getIn(["bitasset", "options", "short_backing_asset"]);
            return receiveCollateralAsset === sellAssetId || sellCollateralAsset === receiveAssetId;
        }
    }, {
        key: "getPriceSection",
        value: function getPriceSection() {
            var _state13 = this.state,
                prices = _state13.prices,
                sellAmount = _state13.sellAmount,
                receiveAmount = _state13.receiveAmount;

            var _getAssetsDetails13 = this.getAssetsDetails(),
                sellAssetId = _getAssetsDetails13.sellAssetId,
                receiveAssetId = _getAssetsDetails13.receiveAssetId,
                sellAssetPrecision = _getAssetsDetails13.sellAssetPrecision,
                receiveAssetPrecision = _getAssetsDetails13.receiveAssetPrecision,
                receiveAssetSymbol = _getAssetsDetails13.receiveAssetSymbol;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Row"],
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Col"],
                    { span: 12 },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.your_price")
                    ),
                    this.showFeedPrice() && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.feed_price")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.last_price")
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Col"],
                    { span: 12, style: { textAlign: "right" } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_16__["default"], {
                            base_asset: sellAssetId,
                            quote_asset: receiveAssetId,
                            base_amount: sellAmount * Math.pow(10, sellAssetPrecision),
                            quote_amount: receiveAmount * Math.pow(10, receiveAssetPrecision),
                            noPopOver: true,
                            force_direction: receiveAssetSymbol,
                            noInvertTip: true
                        })
                    ),
                    this.showFeedPrice() && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_16__["default"], {
                            base_asset: sellAssetId,
                            quote_asset: receiveAssetId,
                            base_amount: 1 * Math.pow(10, sellAssetPrecision),
                            quote_amount: prices.feedPrice * Math.pow(10, receiveAssetPrecision),
                            noPopOver: true,
                            force_direction: receiveAssetSymbol,
                            noInvertTip: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_16__["default"], {
                            base_asset: sellAssetId,
                            quote_asset: receiveAssetId,
                            base_amount: 1 * Math.pow(10, sellAssetPrecision),
                            quote_amount: prices.latestPrice * Math.pow(10, receiveAssetPrecision),
                            noPopOver: true,
                            force_direction: receiveAssetSymbol,
                            noInvertTip: true
                        })
                    )
                )
            );
        }
    }, {
        key: "getFeeSection",
        value: function getFeeSection() {
            var _state14 = this.state,
                sellAmount = _state14.sellAmount,
                receiveAmount = _state14.receiveAmount;

            var _getAssetsDetails14 = this.getAssetsDetails(),
                sellAssetPrecision = _getAssetsDetails14.sellAssetPrecision,
                receiveAssetPrecision = _getAssetsDetails14.receiveAssetPrecision,
                sellAssetSymbol = _getAssetsDetails14.sellAssetSymbol,
                receiveAssetSymbol = _getAssetsDetails14.receiveAssetSymbol;

            var transactionFee = this._getTransactionFee().toFixed(sellAssetPrecision);
            var transactionFeePercent = (this._getFeePercent(this._getTransactionFee(), sellAmount) * 100).toFixed(2);
            var marketFee = this._getMarketFee().toFixed(receiveAssetPrecision);
            var marketFeePercent = (this._getFeePercent(this._getMarketFee(), receiveAmount) * 100).toFixed(2);

            var _getLiquidityPenalty = this.getLiquidityPenalty(),
                _getLiquidityPenalty2 = _slicedToArray(_getLiquidityPenalty, 2),
                liqidityPenaltyMarket = _getLiquidityPenalty2[0],
                liqidityPenaltyFeed = _getLiquidityPenalty2[1];

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
            var liqidityPenalty = this.showFeedPrice() ? liqidityPenaltyMarket + " / " + liqidityPenaltyFeed : liqidityPenaltyMarket;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Row"],
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Col"],
                    { span: 12 },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.liquidity_penalty")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.market_fee"),
                        " " + marketFeePercent + "%"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.transaction_fee"),
                        " " + transactionFeePercent + "%"
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Col"],
                    { span: 12, style: { textAlign: "right" } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        liqidityPenalty
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        marketFee,
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__["default"], { name: receiveAssetSymbol, noTip: true })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        null,
                        transactionFee,
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__["default"], { name: sellAssetSymbol, noTip: true })
                    )
                )
            );
        }
    }, {
        key: "getOrdersSection",
        value: function getOrdersSection() {
            var _this12 = this;

            var _state15 = this.state,
                orders = _state15.orders,
                orderView = _state15.orderView;

            var _getAssetsDetails15 = this.getAssetsDetails(),
                sellAssetId = _getAssetsDetails15.sellAssetId,
                receiveAssetId = _getAssetsDetails15.receiveAssetId,
                sellAssetPrecision = _getAssetsDetails15.sellAssetPrecision,
                sellAssetSymbol = _getAssetsDetails15.sellAssetSymbol,
                receiveAssetSymbol = _getAssetsDetails15.receiveAssetSymbol;

            var dataSource = orders.map(function (item) {
                return {
                    key: item.order.id,
                    id: item.order.id,
                    seller: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_14__["default"], { account: item.order.seller }),
                    amount: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { onClick: _this12.hendleOrderView },
                        orderView === "amount" ? item.amount / Math.pow(10, sellAssetPrecision) : item.total_amount / Math.pow(10, sellAssetPrecision)
                    ),
                    price: item.price
                };
            });

            var amount = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                orderView === "amount" ? counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.amount") : counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.total"),
                "\xA0(",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__["default"], { name: sellAssetSymbol, noTip: true }),
                ")"
            );

            var price = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "span",
                null,
                counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.price"),
                "\xA0(",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    base_asset: sellAssetId,
                    quote_asset: receiveAssetId,
                    noPopOver: true,
                    force_direction: receiveAssetSymbol,
                    noInvertTip: true,
                    hide_value: true
                }),
                ")"
            );

            var columns = [{
                title: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.id"),
                dataIndex: "id",
                key: "id",
                width: "20%"
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.quick_trade_details.seller"),
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
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
                    style: { marginLeft: "0px" },
                    onChange: this.handleSubscriptionToggleChange,
                    checked: this.state.isSubscribedToMarket
                }),
                this.state.ordersUpdated && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { style: { float: "right" } },
                    counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.localize(this.state.ordersUpdated)
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_18___default.a, {
                    onClick: this.handleSubscriptionToggleChange,
                    content: "exchange.quick_trade_details.subscribe_to_market",
                    style: {
                        marginLeft: "10px",
                        cursor: "pointer"
                    }
                }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Table"], {
                    columns: columns,
                    dataSource: dataSource,
                    style: { width: "100%", marginTop: "10px" },
                    pagination: dataSource.length > 5 ? {
                        pageSize: 5
                    } : false
                })
            );
        }
    }, {
        key: "getLiquidityPenalty",
        value: function getLiquidityPenalty() {
            var _state16 = this.state,
                prices = _state16.prices,
                sellAmount = _state16.sellAmount,
                receiveAmount = _state16.receiveAmount;

            var price = receiveAmount / sellAmount;
            var marketPrice = prices.latestPrice;
            var feedPrice = prices.feedPrice;
            var liquidityFee1 = void 0,
                liquidityFee2 = void 0;
            if (price && marketPrice) {
                liquidityFee1 = Math.max(1 - price / marketPrice, 1 - marketPrice / price);
            }
            if (price && feedPrice) {
                liquidityFee2 = Math.max(1 - price / feedPrice, 1 - feedPrice / price);
            }
            return [liquidityFee1, liquidityFee2];
        }
    }, {
        key: "getTotalPercentFee",
        value: function getTotalPercentFee() {
            var _state17 = this.state,
                sellAmount = _state17.sellAmount,
                receiveAmount = _state17.receiveAmount;

            var transactionFeePercent = this._getFeePercent(this._getTransactionFee(), sellAmount);
            var marketFeePercent = this._getFeePercent(this._getMarketFee(), receiveAmount);
            var liquidityFee = this.getLiquidityPenalty()[0];
            return transactionFeePercent + marketFeePercent + liquidityFee;
        }
    }, {
        key: "hasBalance",
        value: function hasBalance() {
            var sellAmount = this.state.sellAmount;
            var currentAccount = this.props.currentAccount;

            var accountBalances = currentAccount.get("balances").toJS();

            var _getAssetsDetails16 = this.getAssetsDetails(),
                sellAssetId = _getAssetsDetails16.sellAssetId,
                sellAssetPrecision = _getAssetsDetails16.sellAssetPrecision;

            if (!accountBalances[sellAssetId]) {
                return false;
            }
            var balance = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getObject(accountBalances[sellAssetId]).get("balance");
            var transactionFee = this._getTransactionFee();
            return sellAmount * Math.pow(10, sellAssetPrecision) + transactionFee * Math.pow(10, sellAssetPrecision) < +balance;
        }
    }, {
        key: "render",
        value: function render() {
            var _state18 = this.state,
                sellAssetInput = _state18.sellAssetInput,
                sellAssets = _state18.sellAssets,
                sellAmount = _state18.sellAmount,
                sellImgName = _state18.sellImgName,
                receiveAssetInput = _state18.receiveAssetInput,
                receiveAssets = _state18.receiveAssets,
                receiveAmount = _state18.receiveAmount,
                receiveImgName = _state18.receiveImgName,
                sub = _state18.sub;

            var _getAssetsDetails17 = this.getAssetsDetails(),
                sellAssetId = _getAssetsDetails17.sellAssetId,
                receiveAssetId = _getAssetsDetails17.receiveAssetId;

            var Details = this.showDetails() ? this.getDetails() : null;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Card"],
                {
                    className: "quick-trade",
                    style: {
                        align: "center",
                        display: "flex",
                        justifyContent: "center",
                        minWidth: "300px",
                        marginTop: "1rem"
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_QuickTrade_SellReceive__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
                }),
                Details,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        style: {
                            marginTop: "1rem",
                            textAlign: "center"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                        {
                            title: !this.hasBalance() ? counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.no_balance") : null
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Button"],
                            {
                                key: "sell",
                                type: "primary",
                                disabled: !this.showDetails() || !sub || !this.hasBalance(),
                                onClick: this.handleSell
                            },
                            counterpart__WEBPACK_IMPORTED_MODULE_13___default.a.translate("exchange.sell")
                        )
                    )
                )
            );
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
            var newState = {};
            if (props.assetToSell) {
                newState = {
                    sellAssetInput: props.assetToSell.get("id"),
                    sellAsset: props.assetToSell,
                    sellImgName: props.assetToSell.get("symbol")
                };
            }
            if (props.assetToReceive) {
                newState = _extends({}, newState, {
                    receiveAssetInput: props.assetToReceive.get("id"),
                    receiveAsset: props.assetToReceive,
                    receiveImgName: props.assetToReceive.get("symbol")
                });
            }
            return newState;
        }
    }]);

    return QuickTrade;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

QuickTrade = Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(QuickTrade, {
    listenTo: function listenTo() {
        return [_stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__["default"], _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        return {
            searchAssets: _stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().assets,
            assetsLoading: _stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().assetsLoading,
            marketData: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().marketData,
            activeMarketHistory: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().activeMarketHistory,
            bucketSize: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().bucketSize,
            currentGroupOrderLimit: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().currentGroupOrderLimit,
            feedPrice: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().feedPrice,
            marketLimitOrders: _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().marketLimitOrders
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (QuickTrade = Object(_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_2__["bindToCurrentAccount"])(QuickTrade));

/***/ }),

/***/ 3224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3225);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(798);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1826);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(742);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(592);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var SellReceive = function (_Component) {
    _inherits(SellReceive, _Component);

    function SellReceive() {
        _classCallCheck(this, SellReceive);

        return _possibleConstructorReturn(this, (SellReceive.__proto__ || Object.getPrototypeOf(SellReceive)).apply(this, arguments));
    }

    _createClass(SellReceive, [{
        key: "render",
        value: function render() {
            var smallScreen = window.innerWidth < 850 ? true : false;
            var _props = this.props,
                sellAssetInput = _props.sellAssetInput,
                sellAsset = _props.sellAsset,
                sellAssets = _props.sellAssets,
                sellAmount = _props.sellAmount,
                sellImgName = _props.sellImgName,
                receiveAssetInput = _props.receiveAssetInput,
                receiveAsset = _props.receiveAsset,
                receiveAssets = _props.receiveAssets,
                receiveAmount = _props.receiveAmount,
                receiveImgName = _props.receiveImgName,
                onSellAssetInputChange = _props.onSellAssetInputChange,
                onSellAmountChange = _props.onSellAmountChange,
                onReceiveAssetInputChange = _props.onReceiveAssetInputChange,
                onReceiveAmountChange = _props.onReceiveAmountChange,
                onReceiveAssetSearch = _props.onReceiveAssetSearch,
                onSwap = _props.onSwap,
                isSwappable = _props.isSwappable;


            var sellSelector = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

            var receiveSelector = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

            var btnStyle = {
                align: "center",
                display: "flex",
                justifyContent: "center"
            };

            if (!isSwappable) {
                btnStyle.opacity = 0.1;
            }

            var swapButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: btnStyle },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    name: "swap",
                    size: "2x",
                    style: !smallScreen ? {
                        marginTop: "3rem"
                    } : null,
                    onClick: onSwap
                })
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                smallScreen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Row"],
                        null,
                        sellSelector
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Row"],
                        null,
                        swapButton
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Row"],
                        null,
                        receiveSelector
                    )
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Row"],
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Col"],
                        { span: 10 },
                        sellSelector
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Col"],
                        { span: 4 },
                        swapButton
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__["Col"],
                        { span: 10 },
                        receiveSelector
                    )
                )
            );
        }
    }]);

    return SellReceive;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

SellReceive.propTypes = {
    sellAssetInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    sellAsset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    sellAssets: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    sellAmount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    sellImgName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    receiveAssetInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    receiveAsset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    receiveAssets: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    receiveAmount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    receiveImgName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    onSellAssetInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    onSellAmountChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    onReceiveAssetInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    onReceiveAmountChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    onSwap: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    isSwappable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};


/* harmony default export */ __webpack_exports__["default"] = (SellReceive);

/***/ }),

/***/ 3225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(798);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(742);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2057);
/* harmony import */ var _ChainSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3226);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var AmountSelector3 = function (_React$Component) {
    _inherits(AmountSelector3, _React$Component);

    function AmountSelector3(props) {
        _classCallCheck(this, AmountSelector3);

        var _this = _possibleConstructorReturn(this, (AmountSelector3.__proto__ || Object.getPrototypeOf(AmountSelector3)).call(this, props));

        _this.state = {
            imageError: false
        };
        return _this;
    }

    _createClass(AmountSelector3, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (!!this.props.imgName && this.props.imgName !== prevProps.imgName && this.props.imgName !== "unknown") {
                this.setState({
                    imageError: false
                });
            }
        }
    }, {
        key: "onImageError",
        value: function onImageError() {
            this.setState({
                imageError: true
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                label = _props.label,
                assetInput = _props.assetInput,
                asset = _props.asset,
                assets = _props.assets,
                amount = _props.amount,
                onAssetInputChange = _props.onAssetInputChange,
                onSearch = _props.onSearch,
                onAmountChange = _props.onAmountChange,
                imgName = _props.imgName,
                placeholder = _props.placeholder,
                placeholderAmount = _props.placeholderAmount,
                tooltipText = _props.tooltipText;


            if (this.state.imageError) {
                imgName = "unknown";
            }

            var labelText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                className: "left-label",
                component: "label",
                content: label,
                style: {
                    fontSize: "1.2rem",
                    margin: "0",
                    padding: "0"
                }
            });

            var chainSelector = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChainSelect__WEBPACK_IMPORTED_MODULE_5__["default"], null);

            var image = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                style: {
                    width: "3.5rem",
                    height: "3.5rem",
                    marginTop: "0.5rem"
                },
                onError: this.onImageError.bind(this),
                src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
            });

            var amountSelector = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__["default"], {
                onChange: onAmountChange,
                amount: amount,
                asset: asset,
                assets: assets,
                placeholder: placeholderAmount,
                onSearch: onSearch
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "amount-selector-2",
                    style: {
                        minWidth: "3.5rem",
                        width: "100%"
                    }
                },
                labelText,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Row"],
                    {
                        style: {
                            minWidth: "18rem"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                        {
                            style: {
                                minWidth: "3.5rem"
                            },
                            span: 5
                        },
                        image
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Col"],
                        { span: 19 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                            { placement: "top", title: tooltipText },
                            chainSelector
                        ),
                        amountSelector
                    )
                )
            );
        }
    }]);

    return AmountSelector3;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AmountSelector3.propTypes = {
    label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    assetInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    asset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    assets: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    amount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    onAssetInputChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    onAmountChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    onImageError: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    onSearch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    imgName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    placeholderAmount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
AmountSelector3.defaultProps = {
    disabled: false,
    imgName: "unknown",
    placeholderAmount: "0.0",
    placeholder: ""
};


/* harmony default export */ __webpack_exports__["default"] = (AmountSelector3);

/***/ }),

/***/ 3226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(798);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(742);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(592);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(528);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var ChainSelectView = function (_React$Component) {
    _inherits(ChainSelectView, _React$Component);

    function ChainSelectView() {
        _classCallCheck(this, ChainSelectView);

        return _possibleConstructorReturn(this, (ChainSelectView.__proto__ || Object.getPrototypeOf(ChainSelectView)).apply(this, arguments));
    }

    _createClass(ChainSelectView, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                chains = _props.chains,
                selectStyle = _props.selectStyle,
                style = _props.style,
                placeholder = _props.placeholder,
                value = _props.value,
                onDropdownVisibleChange = _props.onDropdownVisibleChange,
                remProps = _objectWithoutProperties(_props, ["chains", "selectStyle", "style", "placeholder", "value", "onDropdownVisibleChange"]);

            var disableSelect = chains.filter(immutable__WEBPACK_IMPORTED_MODULE_5__["Map"].isMap).length <= 1 && !onDropdownVisibleChange;

            if (!value) {
                value = chains[0];
            }

            // if onDropdownVisibleChange given we assume that lazy loading takes place
            var select = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Select"],
                _extends({
                    onDropdownVisibleChange: onDropdownVisibleChange,
                    showArrow: disableSelect ? false : undefined,
                    style: selectStyle,
                    placeholder: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        content: placeholder || "utility.asset_select_placeholder"
                    }),
                    value: value
                }, remProps, {
                    optionFilterProp: "children",
                    filterOption: function filterOption(input, option) {
                        return option.key.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                    },
                    disabled: disableSelect,
                    notFoundContent: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("global.not_found")
                }),
                chains.filter(immutable__WEBPACK_IMPORTED_MODULE_5__["Map"].isMap).map(function (chain) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Select"].Option,
                        { key: chain, value: chain },
                        chain
                    );
                })
            );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "chain-select", style: style },
                select
            );
        }
    }]);

    return ChainSelectView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ChainSelectView.propTypes = {
    chains: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    selectStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object

    // all other props are passed to the Select component
};
ChainSelectView.defaultProps = {
    chains: ["BitShares Blockchain"],
    placeholder: null,
    style: {},
    selectStyle: {}
};


/* harmony default export */ __webpack_exports__["default"] = (ChainSelectView);

/***/ }),

/***/ 3227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrders", function() { return getOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrices", function() { return getPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFees", function() { return getFees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetsToSell", function() { return getAssetsToSell; });
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(576);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(602);


// Returns a dict with keys liquidityPenalty, marketFee and transactionFee, input is selected assets and amounts
var getFees = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(baseAsset, quoteAsset, currentAccount) {
        var baseMarketFeePercent, quoteMarketFeePercent, baseMarketFee, quoteMarketFee, trxFee;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        baseMarketFeePercent = baseAsset.getIn(["options", "market_fee_percent"]) / 100 + "%";
                        quoteMarketFeePercent = quoteAsset.getIn(["options", "market_fee_percent"]) / 100 + "%";
                        baseMarketFee = baseAsset.getIn(["options", "market_fee_percent"]);
                        quoteMarketFee = quoteAsset.getIn(["options", "market_fee_percent"]);
                        _context.next = 6;
                        return checkFeeStatus([baseAsset, quoteAsset], currentAccount);

                    case 6:
                        trxFee = _context.sent;
                        return _context.abrupt("return", {
                            marketFee: {
                                baseMarketFeePercent: baseMarketFeePercent,
                                quoteMarketFeePercent: quoteMarketFeePercent,
                                baseMarketFee: baseMarketFee,
                                quoteMarketFee: quoteMarketFee
                            },
                            transactionFee: trxFee
                        });

                    case 8:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getFees(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
    };
}();

var checkFeeStatus = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var assets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var account = arguments[1];
        var feeStatus, p;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        feeStatus = {};
                        p = [];

                        assets.forEach(function (a) {
                            p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_2__["checkFeeStatusAsync"])({
                                accountID: account.get("id"),
                                feeID: a.get("id"),
                                type: "limit_order_create"
                            }));
                        });
                        return _context2.abrupt("return", Promise.all(p).then(function (status) {
                            assets.forEach(function (a, idx) {
                                feeStatus[a.get("id")] = status[idx];
                            });
                            return feeStatus;
                        }).catch(function (err) {
                            console.error("checkFeeStatusAsync error", err);
                            return feeStatus;
                        }));

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function checkFeeStatus() {
        return _ref3.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





// Returns a list of dicts with keys id, seller amount and price and respective values
function getOrders(amount, orders, whatAmount) {
    var matchedOrders = [];
    var totalAmount = void 0;
    orders.sort(function (a, b) {
        return b.getPrice() - a.getPrice(); // getPrice === _real_price
    });

    for (var i = 0; i < orders.length; i++) {
        if (matchedOrders.length) {
            matchedOrders.forEach(function (_ref) {
                var order = _ref.order;

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
}

// Returns a dict with keys feedPrice and lastPrice
function getPrices(activeMarketHistory, feedPrice) {
    var latestPrice = void 0;
    if (activeMarketHistory.size) {
        var latest_two = activeMarketHistory.take(2);
        var latest = latest_two.first();
        latestPrice = latest.getPrice();
    }
    // feed price === null if not a bitasset market
    return {
        latestPrice: latestPrice ? latestPrice : null,
        feedPrice: feedPrice ? feedPrice.toReal() : feedPrice
    };
}

// Returns a list of asset ids that the user can sell
function getAssetsToSell(account) {
    var assetTypes = [];

    if (!(account && account.get("balances"))) {
        return assetTypes;
    }
    var accountBalances = account.get("balances").toJS();

    assetTypes = Object.keys(accountBalances).sort(common_utils__WEBPACK_IMPORTED_MODULE_0__["default"].sortID);

    for (var key in accountBalances) {
        var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["ChainStore"].getObject(accountBalances[key]);
        if (balanceObject && balanceObject.get("balance") === 0) {
            assetTypes.splice(assetTypes.indexOf(key), 1);
        }
    }

    return assetTypes;
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tUcmFkZS4yNWYwZWE4YWJiOWI2NWUzNjI1NS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0N1cnJlbnRBY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvbm93LmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NYXJrZXRQaWNrZXJIZWxwZXJzLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1F1aWNrVHJhZGVSb3V0ZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1F1aWNrVHJhZGUuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1NlbGxSZWNlaXZlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9BbW91bnRTZWxlY3RvcjMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0NoYWluU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvUXVpY2tUcmFkZS9RdWlja1RyYWRlSGVscGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuL0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4vQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0xvYWRlZCA9IGZ1bmN0aW9uIGhhc0xvYWRlZChjdXJyZW50QWNjb3VudCkge1xyXG4gICAgcmV0dXJuICEhY3VycmVudEFjY291bnQgJiYgISFjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBiaW5kVG9DdXJyZW50QWNjb3VudCA9IGZ1bmN0aW9uIGJpbmRUb0N1cnJlbnRBY2NvdW50KFxyXG4gICAgV3JhcHBlZENvbXBvbmVudFxyXG4pIHtcclxuICAgIC8vIC4uLmFuZCByZXR1cm5zIGFub3RoZXIgY29tcG9uZW50Li4uXHJcbiAgICBsZXQgQmluZFRvQ3VycmVudEFjY291bnQgPSBjbGFzcyBCaW5kVG9DdXJyZW50QWNjb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY3VycmVudEFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICAgICAgLy8gc2V0IHN1YnNjcmlwdGlvblxyXG4gICAgICAgICAgICBhdXRvc3Vic2NyaWJlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFzTG9hZGVkKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nSW5kaWNhdG9yIC8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBCaW5kVG9DdXJyZW50QWNjb3VudCA9IEJpbmRUb0NoYWluU3RhdGUoQmluZFRvQ3VycmVudEFjY291bnQpO1xyXG5cclxuICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50ID0gZGVib3VuY2VSZW5kZXIoQmluZFRvQ3VycmVudEFjY291bnQsIDEwMCwge1xyXG4gICAgICAgIGxlYWRpbmc6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29ubmVjdChcclxuICAgICAgICBCaW5kVG9DdXJyZW50QWNjb3VudCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBcInBsZWFzZS1sb2dpblwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDogbmV3IE1hcChbW1wibmFtZVwiLCBjdXJyZW50QWNjb3VudF1dKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBub3cgZnJvbSAnLi9ub3cuanMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJy4vdG9OdW1iZXIuanMnO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVib3VuY2U7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm93O1xuIiwiaW1wb3J0IHtoYXNHYXRld2F5UHJlZml4fSBmcm9tIFwiY29tbW9uL2dhdGV3YXlVdGlsc1wiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5cclxuZnVuY3Rpb24gbG9va3VwQXNzZXRzKHZhbHVlLCBnYXRld2F5QXNzZXRzID0gZmFsc2UsIGdldEFzc2V0TGlzdCwgc2V0U3RhdGUpIHtcclxuICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IFwiXCIpIHJldHVybjtcclxuXHJcbiAgICBsZXQgcXVvdGUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgIGlmIChxdW90ZS5zdGFydHNXaXRoKFwiQklUXCIpICYmIHF1b3RlLmxlbmd0aCA+PSA2KSB7XHJcbiAgICAgICAgcXVvdGUgPSB2YWx1ZS5zdWJzdHIoMywgcXVvdGUubGVuZ3RoIC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXNzZXRMaXN0KHF1b3RlLCAxMCwgZ2F0ZXdheUFzc2V0cyk7XHJcblxyXG4gICAgc2V0U3RhdGUoe2xvb2t1cFF1b3RlOiBxdW90ZX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhc3NldEZpbHRlcihcclxuICAgIHtzZWFyY2hBc3NldHMsIG1hcmtldFBpY2tlckFzc2V0LCBiYXNlQXNzZXQsIHF1b3RlQXNzZXR9LFxyXG4gICAge2lucHV0VmFsdWUsIGxvb2t1cFF1b3RlfSxcclxuICAgIHNldFN0YXRlLFxyXG4gICAgY2hlY2tBbmRVcGRhdGVNYXJrZXRMaXN0XHJcbikge1xyXG4gICAgc2V0U3RhdGUoe2FjdGl2ZVNlYXJjaDogdHJ1ZX0pO1xyXG5cclxuICAgIGxldCBhc3NldENvdW50ID0gMDtcclxuICAgIGxldCBhbGxNYXJrZXRzID0gW107XHJcblxyXG4gICAgbGV0IGJhc2VTeW1ib2wgPSBiYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG4gICAgbGV0IHF1b3RlU3ltYm9sID0gcXVvdGVBc3NldC5nZXQoXCJzeW1ib2xcIik7XHJcblxyXG4gICAgaWYgKHNlYXJjaEFzc2V0cy5zaXplICYmICEhaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBzZWFyY2hBc3NldHNcclxuICAgICAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEub3B0aW9ucy5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGEub3B0aW9ucy5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInZpc2libGVcIiBpbiBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXNjcmlwdGlvbi52aXNpYmxlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBhLnN5bWJvbC5pbmRleE9mKGxvb2t1cFF1b3RlKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGFzc2V0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhc3NldENvdW50ID4gMTAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBhc3NldENvdW50Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGlzc3Vlck5hbWUgPSBmZXRjaElzc3Vlck5hbWUoYXNzZXQuaXNzdWVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYmFzZSA9IGJhc2VBc3NldC5nZXQoXCJzeW1ib2xcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFya2V0SUQgPSBhc3NldC5zeW1ib2wgKyBcIl9cIiArIGJhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGlzUXVvdGVBc3NldCA9IHF1b3RlU3ltYm9sID09IG1hcmtldFBpY2tlckFzc2V0O1xyXG4gICAgICAgICAgICAgICAgbGV0IGluY2x1ZGVBc3NldCA9XHJcbiAgICAgICAgICAgICAgICAgICAgKGlzUXVvdGVBc3NldCAmJiBhc3NldC5zeW1ib2wgIT0gYmFzZVN5bWJvbCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoIWlzUXVvdGVBc3NldCAmJiBhc3NldC5zeW1ib2wgIT0gcXVvdGVTeW1ib2wpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlQXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxNYXJrZXRzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGU6IGFzc2V0LnN5bWJvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IGJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXJJZDogYXNzZXQuaXNzdWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVyOiBpc3N1ZXJOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2V0c0xpc3QgPSBzb3J0TWFya2V0c0xpc3QoYWxsTWFya2V0cywgaW5wdXRWYWx1ZSk7XHJcbiAgICBjaGVja0FuZFVwZGF0ZU1hcmtldExpc3QobWFya2V0c0xpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNYXJrZXRTb3J0Q29tcG9uZW50cyhtYXJrZXQpIHtcclxuICAgIGNvbnN0IHdlaWdodCA9IHt9O1xyXG4gICAgY29uc3QgcXVvdGUgPSBtYXJrZXQucXVvdGU7XHJcbiAgICBpZiAocXVvdGUuaW5kZXhPZihcIi5cIikgIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgW2dhdGV3YXksIGFzc2V0XSA9IHF1b3RlLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICB3ZWlnaHQuZ2F0ZXdheSA9IGdhdGV3YXk7XHJcbiAgICAgICAgd2VpZ2h0LmFzc2V0ID0gYXNzZXQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlaWdodC5hc3NldCA9IHF1b3RlO1xyXG4gICAgfVxyXG4gICAgaWYgKG1hcmtldC5pc3N1ZXJJZCA9PT0gXCIxLjIuMFwiKSB3ZWlnaHQuaXNDb21taXR0ZWUgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHdlaWdodDtcclxufVxyXG5cclxuZnVuY3Rpb24gc29ydE1hcmtldHNMaXN0KGFsbE1hcmtldHMsIGlucHV0VmFsdWUpIHtcclxuICAgIGlmIChpbnB1dFZhbHVlLnN0YXJ0c1dpdGgoXCJCSVRcIikgJiYgaW5wdXRWYWx1ZS5sZW5ndGggPj0gNikge1xyXG4gICAgICAgIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnN1YnN0cigzLCBpbnB1dFZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFsbE1hcmtldHMuc29ydCgoWywgbWFya2V0QV0sIFssIG1hcmtldEJdKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2VpZ2h0QSA9IGdldE1hcmtldFNvcnRDb21wb25lbnRzKG1hcmtldEEpO1xyXG4gICAgICAgIGNvbnN0IHdlaWdodEIgPSBnZXRNYXJrZXRTb3J0Q29tcG9uZW50cyhtYXJrZXRCKTtcclxuXHJcbiAgICAgICAgaWYgKHdlaWdodEEuYXNzZXQgIT09IHdlaWdodEIuYXNzZXQpIHtcclxuICAgICAgICAgICAgaWYgKHdlaWdodEEuYXNzZXQgPT09IGlucHV0VmFsdWUpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgaWYgKHdlaWdodEIuYXNzZXQgPT09IGlucHV0VmFsdWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBpZiAod2VpZ2h0QS5hc3NldCA+IHdlaWdodEIuYXNzZXQpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgaWYgKHdlaWdodEEuYXNzZXQgPCB3ZWlnaHRCLmFzc2V0KSByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3ZWlnaHRBLmlzQ29tbWl0dGVlIF4gd2VpZ2h0Qi5pc0NvbW1pdHRlZSkge1xyXG4gICAgICAgICAgICBpZiAod2VpZ2h0QS5pc0NvbW1pdHRlZSkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBpZiAod2VpZ2h0Qi5pc0NvbW1pdHRlZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhSXNLbm93bkdhdGV3YXkgPSBoYXNHYXRld2F5UHJlZml4KG1hcmtldEEucXVvdGUpO1xyXG4gICAgICAgIGNvbnN0IGJJc0tub3duR2F0ZXdheSA9IGhhc0dhdGV3YXlQcmVmaXgobWFya2V0Qi5xdW90ZSk7XHJcbiAgICAgICAgaWYgKGFJc0tub3duR2F0ZXdheSAmJiAhYklzS25vd25HYXRld2F5KSByZXR1cm4gLTE7XHJcbiAgICAgICAgaWYgKGJJc0tub3duR2F0ZXdheSAmJiAhYUlzS25vd25HYXRld2F5KSByZXR1cm4gMTtcclxuXHJcbiAgICAgICAgaWYgKHdlaWdodEEuZ2F0ZXdheSA+IHdlaWdodEIuZ2F0ZXdheSkgcmV0dXJuIDE7XHJcbiAgICAgICAgaWYgKHdlaWdodEEuZ2F0ZXdheSA8IHdlaWdodEIuZ2F0ZXdheSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZldGNoSXNzdWVyTmFtZShpc3N1ZXJJZCkge1xyXG4gICAgbGV0IGlzc3VlciA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGlzc3VlcklkLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgaWYgKCFpc3N1ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBpc3N1ZXIuZ2V0KFwibmFtZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtsb29rdXBBc3NldHMsIGFzc2V0RmlsdGVyLCBmZXRjaElzc3Vlck5hbWV9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhZ2U0MDQgZnJvbSBcIi4uL1BhZ2U0MDQvUGFnZTQwNFwiO1xuaW1wb3J0IFF1aWNrVHJhZGUgZnJvbSBcIi4vUXVpY2tUcmFkZVwiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcIi4uL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ2hhaW5TdGF0ZVwiO1xuXG5jbGFzcyBRdWlja1RyYWRlU3Vic2NyaWJlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgYXNzZXRUb1NlbGw6IENoYWluVHlwZXMuQ2hhaW5Bc3NldCxcbiAgICAgICAgYXNzZXRUb1JlY2VpdmU6IENoYWluVHlwZXMuQ2hhaW5Bc3NldFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBhc3NldFRvU2VsbDogXCJDTllcIixcbiAgICAgICAgYXNzZXRUb1JlY2VpdmU6IFwiQlRTXCJcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoISF0aGlzLnByb3BzLmFzc2V0VG9SZWNlaXZlLmdldCAmJiAhIXRoaXMucHJvcHMuYXNzZXRUb1NlbGwuZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gPFF1aWNrVHJhZGUgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IFF1aWNrVHJhZGVBc3NldFJlc29sdmVyID0gQmluZFRvQ2hhaW5TdGF0ZShRdWlja1RyYWRlU3Vic2NyaWJlciwge1xuICAgIHNob3dfbG9hZGVyOiB0cnVlXG59KTtcblxuY2xhc3MgUXVpY2tUcmFkZVJvdXRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc3ltYm9scyA9ICEhdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubWFya2V0SURcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMubWFya2V0SUQudG9VcHBlckNhc2UoKS5zcGxpdChcIl9cIilcbiAgICAgICAgICAgIDogW1wiXCIsIFwiXCJdO1xuICAgICAgICBpZiAoc3ltYm9scy5sZW5ndGggPT0gMiAmJiAhIXN5bWJvbHNbMF0gJiYgc3ltYm9sc1swXSA9PT0gc3ltYm9sc1sxXSkge1xuICAgICAgICAgICAgcmV0dXJuIDxQYWdlNDA0IHN1YnRpdGxlPVwibWFya2V0X25vdF9mb3VuZF9zdWJ0aXRsZVwiIC8+O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1aWNrVHJhZGVSb3V0ZXJcIiwgc3ltYm9scyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxRdWlja1RyYWRlQXNzZXRSZXNvbHZlclxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGFzc2V0VG9TZWxsPXtzeW1ib2xzWzBdIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgYXNzZXRUb1JlY2VpdmU9e3N5bWJvbHMubGVuZ3RoID09IDIgPyBzeW1ib2xzWzFdIDogXCJcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWlja1RyYWRlUm91dGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtiaW5kVG9DdXJyZW50QWNjb3VudH0gZnJvbSBcIi4uL1V0aWxpdHkvQmluZFRvQ3VycmVudEFjY291bnRcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBBc3NldFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvQXNzZXRTdG9yZVwiO1xyXG5pbXBvcnQgTWFya2V0c1N0b3JlIGZyb20gXCIuLi8uLi9zdG9yZXMvTWFya2V0c1N0b3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDYXJkLFxyXG4gICAgQ29sbGFwc2UsXHJcbiAgICBSb3csXHJcbiAgICBDb2wsXHJcbiAgICBUYWJsZSxcclxuICAgIEJ1dHRvbixcclxuICAgIFN3aXRjaCxcclxuICAgIFRvb2x0aXBcclxufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBTZWxsUmVjZWl2ZSBmcm9tIFwiY29tcG9uZW50cy9RdWlja1RyYWRlL1NlbGxSZWNlaXZlXCI7XHJcbmltcG9ydCBNYXJrZXRzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9NYXJrZXRzQWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0QXNzZXRzVG9TZWxsLFxyXG4gICAgZ2V0UHJpY2VzLFxyXG4gICAgZ2V0T3JkZXJzLFxyXG4gICAgZ2V0RmVlc1xyXG59IGZyb20gXCIuL1F1aWNrVHJhZGVIZWxwZXJcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlLCBGZXRjaENoYWlufSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgQXNzZXRBY3Rpb25zIGZyb20gXCJhY3Rpb25zL0Fzc2V0QWN0aW9uc1wiO1xyXG5pbXBvcnQge0NoYWluVmFsaWRhdGlvbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7bG9va3VwQXNzZXRzfSBmcm9tIFwiLi4vRXhjaGFuZ2UvTWFya2V0UGlja2VySGVscGVyc1wiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCBMaW5rVG9BY2NvdW50QnlJZCBmcm9tIFwiLi4vVXRpbGl0eS9MaW5rVG9BY2NvdW50QnlJZFwiO1xyXG5pbXBvcnQge0Fzc2V0LCBMaW1pdE9yZGVyQ3JlYXRlfSBmcm9tIFwiY29tbW9uL01hcmtldENsYXNzZXNcIjtcclxuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IEZvcm1hdHRlZFByaWNlIGZyb20gXCIuLi9VdGlsaXR5L0Zvcm1hdHRlZFByaWNlXCI7XHJcbmltcG9ydCBBc3NldE5hbWUgZnJvbSBcIi4uL1V0aWxpdHkvQXNzZXROYW1lXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuXHJcbmNsYXNzIFF1aWNrVHJhZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudEFzc2V0cyA9IGdldEFzc2V0c1RvU2VsbChwcm9wcy5jdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbW91bnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1YjogXCJcIixcclxuICAgICAgICAgICAgc2VsbEFzc2V0SW5wdXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldDogbnVsbCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0czogYWNjb3VudEFzc2V0cyxcclxuICAgICAgICAgICAgc2VsbEFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgc2VsbEltZ05hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dDogXCJcIixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0OiBudWxsLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRzOiBhY2NvdW50QXNzZXRzLFxyXG4gICAgICAgICAgICByZWNlaXZlQW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICByZWNlaXZlSW1nTmFtZTogXCJ1bmtub3duXCIsXHJcbiAgICAgICAgICAgIGFjdGl2ZUlucHV0OiBcIlwiLFxyXG4gICAgICAgICAgICBhY3RpdmVBbW91bnRJbnB1dDogXCJcIixcclxuICAgICAgICAgICAgbG9va3VwUXVvdGU6IFwiXCIsXHJcbiAgICAgICAgICAgIG9yZGVyczogW10sXHJcbiAgICAgICAgICAgIG9yZGVyVmlldzogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgZmVlczogbnVsbCxcclxuICAgICAgICAgICAgcHJpY2VzOiBudWxsLFxyXG4gICAgICAgICAgICBpc1N1YnNjcmliZWRUb01hcmtldDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vblNlbGxBc3NldElucHV0Q2hhbmdlID0gdGhpcy5vblNlbGxBc3NldElucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlY2VpdmVBc3NldElucHV0Q2hhbmdlID0gdGhpcy5vblJlY2VpdmVBc3NldElucHV0Q2hhbmdlLmJpbmQoXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMub25TZWxsQW1vdW50Q2hhbmdlID0gdGhpcy5vblNlbGxBbW91bnRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVjZWl2ZUFtb3VudENoYW5nZSA9IHRoaXMub25SZWNlaXZlQW1vdW50Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNlbGxJbWFnZUVycm9yID0gdGhpcy5vblNlbGxJbWFnZUVycm9yLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlY2VpdmVJbWFnZUVycm9yID0gdGhpcy5vblJlY2VpdmVJbWFnZUVycm9yLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlY2VpdmVBc3NldFNlYXJjaCA9IHRoaXMub25SZWNlaXZlQXNzZXRTZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU3dhcCA9IHRoaXMub25Td2FwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25Ub2dnbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVN1YnNjcmlwdGlvblRvZ2dsZUNoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmhlbmRsZU9yZGVyVmlldyA9IHRoaXMuaGVuZGxlT3JkZXJWaWV3LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxsID0gdGhpcy5oYW5kbGVTZWxsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQgPSB0aGlzLl9zdWJUb01hcmtldC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrQW5kVXBkYXRlTWFya2V0TGlzdCA9IHRoaXMuX2NoZWNrQW5kVXBkYXRlTWFya2V0TGlzdC5iaW5kKFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdldEFzc2V0TGlzdCA9IGRlYm91bmNlKEFzc2V0QWN0aW9ucy5nZXRBc3NldExpc3QuZGVmZXIsIDE1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7fTtcclxuICAgICAgICBpZiAocHJvcHMuYXNzZXRUb1NlbGwpIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBzZWxsQXNzZXRJbnB1dDogcHJvcHMuYXNzZXRUb1NlbGwuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBzZWxsQXNzZXQ6IHByb3BzLmFzc2V0VG9TZWxsLFxyXG4gICAgICAgICAgICAgICAgc2VsbEltZ05hbWU6IHByb3BzLmFzc2V0VG9TZWxsLmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMuYXNzZXRUb1JlY2VpdmUpIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5uZXdTdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dDogcHJvcHMuYXNzZXRUb1JlY2VpdmUuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0OiBwcm9wcy5hc3NldFRvUmVjZWl2ZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlSW1nTmFtZTogcHJvcHMuYXNzZXRUb1JlY2VpdmUuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBfcm91dGVUbyhhc3NldFRvU2VsbCwgYXNzZXRUb1JlY2VpdmUpIHtcclxuICAgICAgICBsZXQgc2VsbFJvdXRlID0gYXNzZXRUb1NlbGw7XHJcbiAgICAgICAgbGV0IHJlY2VpdmVSb3V0ZSA9IGFzc2V0VG9SZWNlaXZlO1xyXG4gICAgICAgIGlmICghYXNzZXRUb1NlbGwpIHtcclxuICAgICAgICAgICAgc2VsbFJvdXRlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhc3NldFRvUmVjZWl2ZSkge1xyXG4gICAgICAgICAgICByZWNlaXZlUm91dGUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGF0aE5hbWUgPSBcIi9pbnN0YW50LXRyYWRlL1wiICsgc2VsbFJvdXRlICsgXCJfXCIgKyByZWNlaXZlUm91dGU7XHJcbiAgICAgICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBcIl9yb3V0ZVRvOiBcIixcclxuICAgICAgICAgICAgICAgIHBhdGhOYW1lLFxyXG4gICAgICAgICAgICAgICAgXCIgb2xkOiBcIixcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUgIT09IHBhdGhOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKHBhdGhOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2FyZUVxdWFsQXNzZXRzKGFzc2V0MSwgYXNzZXQyKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldChhc3NldDEpICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQoYXNzZXQyKSAmJlxyXG4gICAgICAgICAgICBhc3NldDEuZ2V0KFwiaWRcIikgPT09IGFzc2V0Mi5nZXQoXCJpZFwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2lzTG9hZGVkQXNzZXQoYXNzZXQpIHtcclxuICAgICAgICByZXR1cm4gISFhc3NldCAmJiAhIWFzc2V0LnRvSlM7XHJcbiAgICB9XHJcblxyXG4gICAgX2FyZUFzc2V0c0dpdmVuKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQodGhpcy5wcm9wcy5hc3NldFRvU2VsbCkgJiZcclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldCh0aGlzLnByb3BzLmFzc2V0VG9SZWNlaXZlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhdmVBc3NldHNDaGFuZ2VkKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldCh0aGlzLnByb3BzLmFzc2V0VG9TZWxsKSAhPT1cclxuICAgICAgICAgICAgdGhpcy5faXNMb2FkZWRBc3NldChwcmV2UHJvcHMuYXNzZXRUb1NlbGwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQodGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZSkgIT09XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQocHJldlByb3BzLmFzc2V0VG9SZWNlaXZlKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhdGhpcy5fYXJlRXF1YWxBc3NldHMoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0VG9TZWxsLFxyXG4gICAgICAgICAgICAgICAgcHJldlByb3BzLmFzc2V0VG9TZWxsXHJcbiAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgIXRoaXMuX2FyZUVxdWFsQXNzZXRzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZSxcclxuICAgICAgICAgICAgICAgIHByZXZQcm9wcy5hc3NldFRvUmVjZWl2ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgX2hhc01hcmtldENoYW5nZWQocHJldlByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLm1hcmtldERhdGEpICE9PVxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLm1hcmtldERhdGEpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hhdmVBc3NldHNDaGFuZ2VkKHByZXZQcm9wcykpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXNzZXRzSGF2ZUNoYW5nZWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faGFzTWFya2V0Q2hhbmdlZChwcmV2UHJvcHMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRPcmRlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hBc3NldHMgIT09IHByZXZQcm9wcy5zZWFyY2hBc3NldHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlU2VhcmNoOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZEFzc2V0cyA9IHRoaXMucHJvcHMuc2VhcmNoQXNzZXRzXHJcbiAgICAgICAgICAgICAgICAudG9BcnJheSgpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gYS5zeW1ib2wuaW5kZXhPZih0aGlzLnN0YXRlLmxvb2t1cFF1b3RlKSAhPT0gLTEpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0FuZFVwZGF0ZU1hcmtldExpc3QoZmlsdGVyZWRBc3NldHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCAhPT0gcHJldlByb3BzLmN1cnJlbnRBY2NvdW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0cyA9IGdldEFzc2V0c1RvU2VsbCh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxsQXNzZXRzOiBhc3NldHMsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRzOiBhc3NldHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtb3VudGVkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FyZUFzc2V0c0dpdmVuKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXNzZXRzSGF2ZUNoYW5nZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge3N1Yn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXRJZCwgcmVjZWl2ZUFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICBNYXJrZXRzQWN0aW9ucy51blN1YnNjcmliZU1hcmtldChzZWxsQXNzZXRJZCwgcmVjZWl2ZUFzc2V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfc3ViVG9NYXJrZXQoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXQ6IGJhc2VBc3NldCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0OiBxdW90ZUFzc2V0LFxyXG4gICAgICAgICAgICBzdWJcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoYmFzZUFzc2V0ICYmIHF1b3RlQXNzZXQpIHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SWQ6IGJhc2VBc3NldElkLFxyXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0SWQ6IHF1b3RlQXNzZXRJZFxyXG4gICAgICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHtidWNrZXRTaXplLCBjdXJyZW50R3JvdXBPcmRlckxpbWl0fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBbcWEsIGJhXSA9IHN1Yi5zcGxpdChcIl9cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocWEgPT09IHF1b3RlQXNzZXRJZCAmJiBiYSA9PT0gYmFzZUFzc2V0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBNYXJrZXRzQWN0aW9ucy51blN1YnNjcmliZU1hcmtldChxYSwgYmEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IE1hcmtldHNBY3Rpb25zLnN1YnNjcmliZU1hcmtldChcclxuICAgICAgICAgICAgICAgIGJhc2VBc3NldCxcclxuICAgICAgICAgICAgICAgIHF1b3RlQXNzZXQsXHJcbiAgICAgICAgICAgICAgICAzNjAwLFxyXG4gICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YjogYCR7cXVvdGVBc3NldElkfV8ke2Jhc2VBc3NldElkfWBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxQcmljZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEFsbEZlZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QWxsRmVlcygpIHtcclxuICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0LCByZWNlaXZlQXNzZXR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoc2VsbEFzc2V0ICYmIHJlY2VpdmVBc3NldCkge1xyXG4gICAgICAgICAgICBjb25zdCBmZWVzID0gYXdhaXQgZ2V0RmVlcyhyZWNlaXZlQXNzZXQsIHNlbGxBc3NldCwgY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZlZXNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFzc2V0c0RldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldCwgcmVjZWl2ZUFzc2V0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SWQ6IHNlbGxBc3NldCA/IHNlbGxBc3NldC5nZXQoXCJpZFwiKSA6IG51bGwsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElkOiByZWNlaXZlQXNzZXQgPyByZWNlaXZlQXNzZXQuZ2V0KFwiaWRcIikgOiBudWxsLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb246IHNlbGxBc3NldCA/IHNlbGxBc3NldC5nZXQoXCJwcmVjaXNpb25cIikgOiBudWxsLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb246IHJlY2VpdmVBc3NldFxyXG4gICAgICAgICAgICAgICAgPyByZWNlaXZlQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpXHJcbiAgICAgICAgICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFN5bWJvbDogc2VsbEFzc2V0ID8gc2VsbEFzc2V0LmdldChcInN5bWJvbFwiKSA6IG51bGwsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFN5bWJvbDogcmVjZWl2ZUFzc2V0ID8gcmVjZWl2ZUFzc2V0LmdldChcInN5bWJvbFwiKSA6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFByaWNlcygpIHtcclxuICAgICAgICBjb25zdCB7YWN0aXZlTWFya2V0SGlzdG9yeSwgZmVlZFByaWNlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgcHJpY2VzID0gZ2V0UHJpY2VzKGFjdGl2ZU1hcmtldEhpc3RvcnksIGZlZWRQcmljZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHByaWNlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRPcmRlcnMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzU3Vic2NyaWJlZFRvTWFya2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMubWFya2V0RGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSB1c2VyIHdhbnRzIHRvIGluc3BlY3QgY3VycmVudCBvcmRlcnMsIHBhdXNlIHVwZGF0aW5nXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qge2NvbWJpbmVkQmlkc30gPSB0aGlzLnByb3BzLm1hcmtldERhdGE7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldCxcclxuICAgICAgICAgICAgc2VsbEFtb3VudCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCxcclxuICAgICAgICAgICAgYWN0aXZlSW5wdXRcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiX2dldE9yZGVyc1wiLCB0aGlzLnByb3BzLm1hcmtldERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29tYmluZWRCaWRzICYmIGNvbWJpbmVkQmlkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGxBc3NldCAmJiByZWNlaXZlQXNzZXQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aXZlSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVjZWl2ZUFzc2V0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxsQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlcnMgPSBnZXRPcmRlcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsbEFtb3VudCAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEJpZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnNVcGRhdGVkOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZVJlY2VpdmVBbW91bnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VsbEFzc2V0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNlaXZlQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlcnMgPSBnZXRPcmRlcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEJpZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnNVcGRhdGVkOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZVNlbGxBbW91bnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VsbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsbEFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gZ2V0T3JkZXJzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRCaWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzVXBkYXRlZDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVSZWNlaXZlQW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQ6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZWNlaXZlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNlaXZlQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlcnMgPSBnZXRPcmRlcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21iaW5lZEJpZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNlaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnNVcGRhdGVkOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnVwZGF0ZVNlbGxBbW91bnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsbEFtb3VudDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2Fzc2V0c0hhdmVDaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMuX3N1YlRvTWFya2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgX3NldFNlbGxBc3NldChcclxuICAgICAgICBhc3NldE9iamVjdElkT3JTeW1ib2wsXHJcbiAgICAgICAgYWN0aXZlSW5wdXQgPSBcInNlbGxBc3NldFwiLFxyXG4gICAgICAgIGZpcmVDaGFuZ2VkID0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGFzc2V0ID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mIGFzc2V0T2JqZWN0SWRPclN5bWJvbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBhc3NldCA9IGF3YWl0IEZldGNoQ2hhaW4oXCJnZXRBc3NldFwiLCBhc3NldE9iamVjdElkT3JTeW1ib2wpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gYXNzZXRPYmplY3RJZE9yU3ltYm9sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIl9zZXRTZWxsQXNzZXRcIiwgYXNzZXRPYmplY3RJZE9yU3ltYm9sLCBhc3NldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dDogYWN0aXZlSW5wdXRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVUbyhcclxuICAgICAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJzeW1ib2xcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmFzc2V0VG9SZWNlaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZS5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBfc2V0UmVjZWl2ZUFzc2V0KFxyXG4gICAgICAgIGFzc2V0T2JqZWN0SWRPclN5bWJvbCxcclxuICAgICAgICBhY3RpdmVJbnB1dCA9IFwicmVjZWl2ZUFzc2V0XCIsXHJcbiAgICAgICAgZmlyZUNoYW5nZWQgPSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgYXNzZXQgPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXNzZXRPYmplY3RJZE9yU3ltYm9sID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gYXdhaXQgRmV0Y2hDaGFpbihcImdldEFzc2V0XCIsIGFzc2V0T2JqZWN0SWRPclN5bWJvbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXNzZXQgPSBhc3NldE9iamVjdElkT3JTeW1ib2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiX3NldFJlY2VpdmVBc3NldFwiLCBhc3NldE9iamVjdElkT3JTeW1ib2wsIGFzc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQ6IGFjdGl2ZUlucHV0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmFzc2V0VG9TZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5hc3NldFRvU2VsbC5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgX3N3YXBBc3NldHMoYWN0aXZlSW5wdXQsIGZpcmVDaGFuZ2VkID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGxBbW91bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQgPT09IFwic2VsbEFzc2V0XCIgPyBcIlwiIDogdGhpcy5zdGF0ZS5yZWNlaXZlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDpcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dCA9PT0gXCJyZWNlaXZlQXNzZXRcIiA/IFwiXCIgOiB0aGlzLnN0YXRlLnNlbGxBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dDogYWN0aXZlSW5wdXRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVUbyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlY2VpdmVBc3NldC5nZXQoXCJzeW1ib2xcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxsQXNzZXQuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvblNlbGxBc3NldElucHV0Q2hhbmdlKGFzc2V0SWRPclN5bWJvbCkge1xyXG4gICAgICAgIGNvbnN0IHtyZWNlaXZlQXNzZXRJZH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuXHJcbiAgICAgICAgaWYgKGFzc2V0SWRPclN5bWJvbCA9PT0gcmVjZWl2ZUFzc2V0SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3dhcEFzc2V0cyhcInNlbGxBc3NldFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRTZWxsQXNzZXQoYXNzZXRJZE9yU3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZShhc3NldElkT3JTeW1ib2wpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcblxyXG4gICAgICAgIGlmIChhc3NldElkT3JTeW1ib2wgPT09IHNlbGxBc3NldElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N3YXBBc3NldHMoXCJyZWNlaXZlQXNzZXRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0UmVjZWl2ZUFzc2V0KGFzc2V0SWRPclN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVjZWl2ZUFzc2V0U2VhcmNoKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBpc1ZhbGlkTmFtZSA9ICFDaGFpblZhbGlkYXRpb24uaXNfdmFsaWRfc3ltYm9sX2Vycm9yKGUsIHRydWUpO1xyXG4gICAgICAgIGlmICghaXNWYWxpZE5hbWUpIHtcclxuICAgICAgICAgICAgLyogRG9uJ3QgbG9va3VwIGludmFsaWQgYXNzZXQgbmFtZXMgKi9cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dDogZSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNlYXJjaDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlY2VpdmVBc3NldElucHV0ICE9PSBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsb29rdXBBc3NldHMoZSwgdHJ1ZSwgdGhpcy5nZXRBc3NldExpc3QsIHRoaXMuc2V0U3RhdGUpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrQW5kVXBkYXRlTWFya2V0TGlzdChtYXJrZXRzTGlzdCkge1xyXG4gICAgICAgIGxldCByZWNlaXZlQXNzZXRzID0gbWFya2V0c0xpc3QubWFwKGFzc2V0ID0+IGFzc2V0LmlkKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgY29uc3Qge3JlY2VpdmVBc3NldElucHV0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGFzc2V0ID0gXCJcIjtcclxuICAgICAgICBpZiAoQ2hhaW5TdG9yZS5nZXRBc3NldChyZWNlaXZlQXNzZXRJbnB1dCkpIHtcclxuICAgICAgICAgICAgY29uc3QgYXNzZXRJZCA9IENoYWluU3RvcmUuZ2V0QXNzZXQocmVjZWl2ZUFzc2V0SW5wdXQpLmdldChcImlkXCIpO1xyXG4gICAgICAgICAgICBpZiAocmVjZWl2ZUFzc2V0cy5pbmNsdWRlcyhhc3NldElkKSkge1xyXG4gICAgICAgICAgICAgICAgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KHJlY2VpdmVBc3NldElucHV0KS5nZXQoXCJpZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVjZWl2ZUFzc2V0cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgYXNzZXQgPSByZWNlaXZlQXNzZXRzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cyA9IGdldEFzc2V0c1RvU2VsbChjdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHMucHVzaChhc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWNlaXZlQXNzZXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cyA9IGdldEFzc2V0c1RvU2VsbChjdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlYXJjaDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3ViVG9NYXJrZXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsbEFtb3VudENoYW5nZShlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm1vdW50ZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoZS5hc3NldCAhPT0gdGhpcy5zdGF0ZS5zZWxsQXNzZXRJbnB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2VsbEFzc2V0SW5wdXRDaGFuZ2UoZS5hc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGxBbW91bnQ6IGUuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQ6IFwic2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQW1vdW50SW5wdXQ6IFwic2VsbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dldE9yZGVycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlY2VpdmVBbW91bnRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5tb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGUuYXNzZXQgIT09IHRoaXMuc3RhdGUucmVjZWl2ZUFzc2V0SW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblJlY2VpdmVBc3NldElucHV0Q2hhbmdlKGUuYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50OiBlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0OiBcInJlY2VpdmVcIixcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUFtb3VudElucHV0OiBcInJlY2VpdmVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRPcmRlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxsSW1hZ2VFcnJvcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsbEltZ05hbWU6IFwidW5rbm93blwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWNlaXZlSW1hZ2VFcnJvcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWU6IFwidW5rbm93blwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Td2FwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU3dhcHBhYmxlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3dhcEFzc2V0cyhcIm5laXRoZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1YnNjcmlwdGlvblRvZ2dsZUNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZFRvTWFya2V0OiAhc3RhdGUuaXNTdWJzY3JpYmVkVG9NYXJrZXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoZW5kbGVPcmRlclZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyVmlldyA9IHN0YXRlLm9yZGVyVmlldyA9PT0gXCJhbW91bnRcIiA/IFwidG90YWxcIiA6IFwiYW1vdW50XCI7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBvcmRlclZpZXdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWxsKCkge1xyXG4gICAgICAgIGNvbnN0IHtjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQW1vdW50LCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJZCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SWQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGNvbnN0IGZvclNhbGUgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhc3NldF9pZDogc2VsbEFzc2V0SWQsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHNlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB0b1JlY2VpdmUgPSBuZXcgQXNzZXQoe1xyXG4gICAgICAgICAgICBhc3NldF9pZDogcmVjZWl2ZUFzc2V0SWQsXHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICBhbW91bnQ6IHJlY2VpdmVBbW91bnQgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBleHBpcmF0aW9uVGltZSA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBuZXcgTGltaXRPcmRlckNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGZvcl9zYWxlOiBmb3JTYWxlLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHBpcmF0aW9uVGltZSxcclxuICAgICAgICAgICAgdG9fcmVjZWl2ZTogdG9SZWNlaXZlLFxyXG4gICAgICAgICAgICBzZWxsZXI6IGN1cnJlbnRBY2NvdW50LmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICBmZWU6IHtcclxuICAgICAgICAgICAgICAgIGFzc2V0X2lkOiBcIjEuMy4wXCIsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsbF9vcl9raWxsOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXJrZXRzQWN0aW9ucy5jcmVhdGVMaW1pdE9yZGVyMihvcmRlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yLm1lc3NhZ2UgIT09IFwid2FsbGV0IGxvY2tlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb24uZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm90aWZpY2F0aW9ucy5leGNoYW5nZV91bmtub3duX2Vycm9yX3BsYWNlX29yZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHJlY2VpdmVBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogcmVjZWl2ZUFzc2V0SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwib3JkZXIgZmFpbGVkOlwiLCBlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2VsbEFtb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7b3JkZXJzLCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAob3JkZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxsQW1vdW50ID0gKFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCAvIG9yZGVyc1swXS5vcmRlci5nZXRQcmljZSgpXHJcbiAgICAgICAgICAgICkudG9GaXhlZChzZWxsQXNzZXRQcmVjaXNpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGxBbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9yZGVycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlciA9IG9yZGVycy5zbGljZSgtMSlbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHBlbnVsdGltYXRlT3JkZXIgPSBvcmRlcnMuc2xpY2UoXHJcbiAgICAgICAgICAgICAgICBvcmRlcnMubGVuZ3RoIC0gMixcclxuICAgICAgICAgICAgICAgIG9yZGVycy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIClbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlclRvUmVjZWl2ZSA9XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50ICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uIC1cclxuICAgICAgICAgICAgICAgIHBlbnVsdGltYXRlT3JkZXIub3JkZXIudG90YWxfZm9yX3NhbGUuZ2V0QW1vdW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RPcmRlckZvclNhbGUgPVxyXG4gICAgICAgICAgICAgICAgKChsYXN0T3JkZXJUb1JlY2VpdmUgLyBsYXN0T3JkZXIub3JkZXIuZ2V0UHJpY2UoKSkgKlxyXG4gICAgICAgICAgICAgICAgICAgIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbikgL1xyXG4gICAgICAgICAgICAgICAgMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxsQW1vdW50ID0gKFxyXG4gICAgICAgICAgICAgICAgKHBlbnVsdGltYXRlT3JkZXIub3JkZXIudG90YWxfdG9fcmVjZWl2ZS5nZXRBbW91bnQoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE9yZGVyRm9yU2FsZSkgL1xyXG4gICAgICAgICAgICAgICAgMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICkudG9GaXhlZChzZWxsQXNzZXRQcmVjaXNpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlbGxBbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUmVjZWl2ZUFtb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7b3JkZXJzLCBzZWxsQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAob3JkZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByZWNlaXZlQW1vdW50ID0gKFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzWzBdLm9yZGVyLmdldFByaWNlKCkgKiBzZWxsQW1vdW50XHJcbiAgICAgICAgICAgICkudG9GaXhlZChyZWNlaXZlQXNzZXRQcmVjaXNpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcmRlcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXIgPSBvcmRlcnMuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBwZW51bHRpbWF0ZU9yZGVyID0gb3JkZXJzLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzLmxlbmd0aCAtIDIsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICApWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXJGb3JTYWxlID1cclxuICAgICAgICAgICAgICAgIHNlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24gLVxyXG4gICAgICAgICAgICAgICAgcGVudWx0aW1hdGVPcmRlci5vcmRlci50b3RhbF90b19yZWNlaXZlLmdldEFtb3VudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXJUb1JlY2VpdmUgPVxyXG4gICAgICAgICAgICAgICAgKGxhc3RPcmRlckZvclNhbGUgKlxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RPcmRlci5vcmRlci5nZXRQcmljZSgpICpcclxuICAgICAgICAgICAgICAgICAgICAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb24pIC9cclxuICAgICAgICAgICAgICAgIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbjtcclxuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZUFtb3VudCA9IChcclxuICAgICAgICAgICAgICAgIChwZW51bHRpbWF0ZU9yZGVyLm9yZGVyLnRvdGFsX2Zvcl9zYWxlLmdldEFtb3VudCgpICtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0T3JkZXJUb1JlY2VpdmUpIC9cclxuICAgICAgICAgICAgICAgIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgICAgICApLnRvRml4ZWQocmVjZWl2ZUFzc2V0UHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzU3dhcHBhYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcmVBc3NldHNHaXZlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUcmFuc2FjdGlvbkZlZShkZW5vbWluYXRpb25Bc3NldElkKSB7XHJcbiAgICAgICAgY29uc3Qge2ZlZXMsIHByaWNlc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXRJZH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAoZmVlcykge1xyXG4gICAgICAgICAgICBpZiAoZmVlcy50cmFuc2FjdGlvbkZlZVtzZWxsQXNzZXRJZF0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhZGVub21pbmF0aW9uQXNzZXRJZCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbm9taW5hdGlvbkFzc2V0SWQgPT09IHNlbGxBc3NldElkXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVzLnRyYW5zYWN0aW9uRmVlW3NlbGxBc3NldElkXS5mZWUuYW1vdW50IC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAgKiogZmVlcy50cmFuc2FjdGlvbkZlZVtzZWxsQXNzZXRJZF0uZmVlLnByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmZWVzLnRyYW5zYWN0aW9uRmVlW3NlbGxBc3NldElkXS5mZWUuYW1vdW50IC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwICoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVlcy50cmFuc2FjdGlvbkZlZVtzZWxsQXNzZXRJZF0uZmVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVjaXNpb24pICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzLmxhdGVzdFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRNYXJrZXRGZWUoZGVub21pbmRhdGVkQXNzZXRJZCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVzLCBwcmljZXMsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7cmVjZWl2ZUFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKGZlZXMpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIWRlbm9taW5kYXRlZEFzc2V0SWQgfHxcclxuICAgICAgICAgICAgICAgIGRlbm9taW5kYXRlZEFzc2V0SWQgPT09IHJlY2VpdmVBc3NldElkXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChmZWVzLm1hcmtldEZlZS5iYXNlTWFya2V0RmVlICogcmVjZWl2ZUFtb3VudCkgLyAxMDAwMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGZlZXMubWFya2V0RmVlLmJhc2VNYXJrZXRGZWUgKiByZWNlaXZlQW1vdW50KSAvXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzLmxhdGVzdFByaWNlIC9cclxuICAgICAgICAgICAgICAgICAgICAxMDAwMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ2V0RmVlUGVyY2VudChmZWVBbW91bnQsIHRvdGFsQW1vdW50KSB7XHJcbiAgICAgICAgcmV0dXJuICt0b3RhbEFtb3VudCA/ICgrdG90YWxBbW91bnQgKyArZmVlQW1vdW50KSAvIHRvdGFsQW1vdW50IC0gMSA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGV0YWlscygpIHtcclxuICAgICAgICBjb25zdCB7c3VifSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKCFzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7c2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SWQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElkLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0U3ltYm9sXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlU2VjdGlvbiA9IHRoaXMuZ2V0UHJpY2VTZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VFeHRyYSA9IChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuZWZmZWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3JlY2VpdmVBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17cmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e3JlY2VpdmVBc3NldFN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICBub0ludmVydFRpcFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGZlZVNlY3Rpb24gPSB0aGlzLmdldEZlZVNlY3Rpb24oKTtcclxuICAgICAgICBjb25zdCBvcmRlcnNTZWN0aW9uID0gdGhpcy5nZXRPcmRlcnNTZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgdG90YWxQZXJjZW50RmVlID1cclxuICAgICAgICAgICAgY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5lZmZlY3RpdmVcIikgK1xyXG4gICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICh0aGlzLmdldFRvdGFsUGVyY2VudEZlZSgpICogMTAwKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGNvbnN0IGFtb3VudE9mT3JkZXJzID0gdGhpcy5zdGF0ZS5vcmRlcnMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG9yZGVyc0NhcHRpb24gPVxyXG4gICAgICAgICAgICBhbW91bnRPZk9yZGVycyA8IDJcclxuICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5vcmRlclwiKVxyXG4gICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLm9yZGVyc1wiKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29sbGFwc2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzc2V0LWNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlLlBhbmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5wcmljZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17cHJpY2VFeHRyYX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7cHJpY2VTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZS5QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UuZmVlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtgJHt0b3RhbFBlcmNlbnRGZWV9JWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZlZVNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlLlBhbmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5vcmRlcnNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRPZk9yZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHthbW91bnRPZk9yZGVyc30gJHtvcmRlcnNDYXB0aW9ufWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJubyBvcmRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJzU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGV0YWlscygpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0LCByZWNlaXZlQXNzZXQsIHNlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gc2VsbEFzc2V0ICYmIHJlY2VpdmVBc3NldCAmJiArc2VsbEFtb3VudCAmJiArcmVjZWl2ZUFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmVlZFByaWNlKCkge1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXQsIHJlY2VpdmVBc3NldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXRJZCwgcmVjZWl2ZUFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgY29uc3QgcmVjZWl2ZUNvbGxhdGVyYWxBc3NldCA9IHJlY2VpdmVBc3NldC5nZXRJbihbXHJcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgXCJvcHRpb25zXCIsXHJcbiAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgY29uc3Qgc2VsbENvbGxhdGVyYWxBc3NldCA9IHNlbGxBc3NldC5nZXRJbihbXHJcbiAgICAgICAgICAgIFwiYml0YXNzZXRcIixcclxuICAgICAgICAgICAgXCJvcHRpb25zXCIsXHJcbiAgICAgICAgICAgIFwic2hvcnRfYmFja2luZ19hc3NldFwiXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgcmVjZWl2ZUNvbGxhdGVyYWxBc3NldCA9PT0gc2VsbEFzc2V0SWQgfHxcclxuICAgICAgICAgICAgc2VsbENvbGxhdGVyYWxBc3NldCA9PT0gcmVjZWl2ZUFzc2V0SWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByaWNlU2VjdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7cHJpY2VzLCBzZWxsQW1vdW50LCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJZCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SWQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRTeW1ib2xcclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMueW91cl9wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc2hvd0ZlZWRQcmljZSgpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmZlZWRfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmxhc3RfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtzZWxsQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXtzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50ICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlX2RpcmVjdGlvbj17cmVjZWl2ZUFzc2V0U3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9JbnZlcnRUaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zaG93RmVlZFByaWNlKCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3JlY2VpdmVBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXsxICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcy5mZWVkUHJpY2UgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtyZWNlaXZlQXNzZXRTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9JbnZlcnRUaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Fzc2V0PXtzZWxsQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYW1vdW50PXsxICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVfYW1vdW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXMubGF0ZXN0UHJpY2UgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtyZWNlaXZlQXNzZXRTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0ludmVydFRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmVlU2VjdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFN5bWJvbCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0U3ltYm9sXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkZlZSA9IHRoaXMuX2dldFRyYW5zYWN0aW9uRmVlKCkudG9GaXhlZChcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkZlZVBlcmNlbnQgPSAoXHJcbiAgICAgICAgICAgIHRoaXMuX2dldEZlZVBlcmNlbnQodGhpcy5fZ2V0VHJhbnNhY3Rpb25GZWUoKSwgc2VsbEFtb3VudCkgKiAxMDBcclxuICAgICAgICApLnRvRml4ZWQoMik7XHJcbiAgICAgICAgY29uc3QgbWFya2V0RmVlID0gdGhpcy5fZ2V0TWFya2V0RmVlKCkudG9GaXhlZChyZWNlaXZlQXNzZXRQcmVjaXNpb24pO1xyXG4gICAgICAgIGNvbnN0IG1hcmtldEZlZVBlcmNlbnQgPSAoXHJcbiAgICAgICAgICAgIHRoaXMuX2dldEZlZVBlcmNlbnQodGhpcy5fZ2V0TWFya2V0RmVlKCksIHJlY2VpdmVBbW91bnQpICogMTAwXHJcbiAgICAgICAgKS50b0ZpeGVkKDIpO1xyXG5cclxuICAgICAgICBsZXQgW1xyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlNYXJrZXQsXHJcbiAgICAgICAgICAgIGxpcWlkaXR5UGVuYWx0eUZlZWRcclxuICAgICAgICBdID0gdGhpcy5nZXRMaXF1aWRpdHlQZW5hbHR5KCk7XHJcbiAgICAgICAgaWYgKGxpcWlkaXR5UGVuYWx0eU1hcmtldCB8fCBsaXFpZGl0eVBlbmFsdHlNYXJrZXQgPT09IDApIHtcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5TWFya2V0ID1cclxuICAgICAgICAgICAgICAgIChsaXFpZGl0eVBlbmFsdHlNYXJrZXQgKiAxMDApLnRvRml4ZWQoMikgKyBcIiVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlNYXJrZXQgPSBcIi1cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxpcWlkaXR5UGVuYWx0eUZlZWQgfHwgbGlxaWRpdHlQZW5hbHR5RmVlZCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlGZWVkID0gKGxpcWlkaXR5UGVuYWx0eUZlZWQgKiAxMDApLnRvRml4ZWQoMikgKyBcIiVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlGZWVkID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxpcWlkaXR5UGVuYWx0eSA9IHRoaXMuc2hvd0ZlZWRQcmljZSgpXHJcbiAgICAgICAgICAgID8gYCR7bGlxaWRpdHlQZW5hbHR5TWFya2V0fSAvICR7bGlxaWRpdHlQZW5hbHR5RmVlZH1gXHJcbiAgICAgICAgICAgIDogbGlxaWRpdHlQZW5hbHR5TWFya2V0O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5saXF1aWRpdHlfcGVuYWx0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5tYXJrZXRfZmVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AgJHttYXJrZXRGZWVQZXJjZW50fSVgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMudHJhbnNhY3Rpb25fZmVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AgJHt0cmFuc2FjdGlvbkZlZVBlcmNlbnR9JWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IHN0eWxlPXt7dGV4dEFsaWduOiBcInJpZ2h0XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PntsaXFpZGl0eVBlbmFsdHl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21hcmtldEZlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17cmVjZWl2ZUFzc2V0U3ltYm9sfSBub1RpcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbkZlZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17c2VsbEFzc2V0U3ltYm9sfSBub1RpcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JkZXJzU2VjdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7b3JkZXJzLCBvcmRlclZpZXd9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElkLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJZCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRTeW1ib2wsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFN5bWJvbFxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gb3JkZXJzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtleTogaXRlbS5vcmRlci5pZCxcclxuICAgICAgICAgICAgICAgIGlkOiBpdGVtLm9yZGVyLmlkLFxyXG4gICAgICAgICAgICAgICAgc2VsbGVyOiA8TGlua1RvQWNjb3VudEJ5SWQgYWNjb3VudD17aXRlbS5vcmRlci5zZWxsZXJ9IC8+LFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhlbmRsZU9yZGVyVmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlclZpZXcgPT09IFwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5hbW91bnQgLyAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS50b3RhbF9hbW91bnQgLyAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYW1vdW50ID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtvcmRlclZpZXcgPT09IFwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuYW1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMudG90YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICZuYnNwOyhcclxuICAgICAgICAgICAgICAgIDxBc3NldE5hbWUgbmFtZT17c2VsbEFzc2V0U3ltYm9sfSBub1RpcCAvPilcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaWNlID0gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnByaWNlXCIpfVxyXG4gICAgICAgICAgICAgICAgJm5ic3A7KFxyXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGVfYXNzZXQ9e3JlY2VpdmVBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlX2RpcmVjdGlvbj17cmVjZWl2ZUFzc2V0U3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vSW52ZXJ0VGlwXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZV92YWx1ZVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmlkXCIpLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwJVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnNlbGxlclwiXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcInNlbGxlclwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcInNlbGxlclwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJhbW91bnRcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwJVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBwcmljZSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJwcmljZVwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcInByaWNlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMHB4XCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1YnNjcmlwdGlvblRvZ2dsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmlzU3Vic2NyaWJlZFRvTWFya2V0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm9yZGVyc1VwZGF0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC5sb2NhbGl6ZSh0aGlzLnN0YXRlLm9yZGVyc1VwZGF0ZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1YnNjcmlwdGlvblRvZ2dsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5zdWJzY3JpYmVfdG9fbWFya2V0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5sZW5ndGggPiA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpcXVpZGl0eVBlbmFsdHkoKSB7XHJcbiAgICAgICAgY29uc3Qge3ByaWNlcywgc2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gcmVjZWl2ZUFtb3VudCAvIHNlbGxBbW91bnQ7XHJcbiAgICAgICAgY29uc3QgbWFya2V0UHJpY2UgPSBwcmljZXMubGF0ZXN0UHJpY2U7XHJcbiAgICAgICAgY29uc3QgZmVlZFByaWNlID0gcHJpY2VzLmZlZWRQcmljZTtcclxuICAgICAgICBsZXQgbGlxdWlkaXR5RmVlMSwgbGlxdWlkaXR5RmVlMjtcclxuICAgICAgICBpZiAocHJpY2UgJiYgbWFya2V0UHJpY2UpIHtcclxuICAgICAgICAgICAgbGlxdWlkaXR5RmVlMSA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICAgICAgMSAtIHByaWNlIC8gbWFya2V0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAxIC0gbWFya2V0UHJpY2UgLyBwcmljZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJpY2UgJiYgZmVlZFByaWNlKSB7XHJcbiAgICAgICAgICAgIGxpcXVpZGl0eUZlZTIgPSBNYXRoLm1heChcclxuICAgICAgICAgICAgICAgIDEgLSBwcmljZSAvIGZlZWRQcmljZSxcclxuICAgICAgICAgICAgICAgIDEgLSBmZWVkUHJpY2UgLyBwcmljZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW2xpcXVpZGl0eUZlZTEsIGxpcXVpZGl0eUZlZTJdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvdGFsUGVyY2VudEZlZSgpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uRmVlUGVyY2VudCA9IHRoaXMuX2dldEZlZVBlcmNlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuX2dldFRyYW5zYWN0aW9uRmVlKCksXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnRcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG1hcmtldEZlZVBlcmNlbnQgPSB0aGlzLl9nZXRGZWVQZXJjZW50KFxyXG4gICAgICAgICAgICB0aGlzLl9nZXRNYXJrZXRGZWUoKSxcclxuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbGlxdWlkaXR5RmVlID0gdGhpcy5nZXRMaXF1aWRpdHlQZW5hbHR5KClbMF07XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRmVlUGVyY2VudCArIG1hcmtldEZlZVBlcmNlbnQgKyBsaXF1aWRpdHlGZWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQmFsYW5jZSgpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtjdXJyZW50QWNjb3VudH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRCYWxhbmNlcyA9IGN1cnJlbnRBY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWQsIHNlbGxBc3NldFByZWNpc2lvbn0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAoIWFjY291bnRCYWxhbmNlc1tzZWxsQXNzZXRJZF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiYWxhbmNlID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYWNjb3VudEJhbGFuY2VzW3NlbGxBc3NldElkXSkuZ2V0KFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25GZWUgPSB0aGlzLl9nZXRUcmFuc2FjdGlvbkZlZSgpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24gK1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25GZWUgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24gPFxyXG4gICAgICAgICAgICArYmFsYW5jZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SW5wdXQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldHMsXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnQsXHJcbiAgICAgICAgICAgIHNlbGxJbWdOYW1lLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cyxcclxuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCxcclxuICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWUsXHJcbiAgICAgICAgICAgIHN1YlxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXRJZCwgcmVjZWl2ZUFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IERldGFpbHMgPSB0aGlzLnNob3dEZXRhaWxzKCkgPyB0aGlzLmdldERldGFpbHMoKSA6IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJxdWljay10cmFkZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjMwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNlbGxSZWNlaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbEFzc2V0SW5wdXQ9e3NlbGxBc3NldElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxBc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbEFzc2V0cz17c2VsbEFzc2V0c31cclxuICAgICAgICAgICAgICAgICAgICBzZWxsQW1vdW50PXtzZWxsQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxJbWdOYW1lPXtzZWxsSW1nTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGxBc3NldElucHV0Q2hhbmdlPXt0aGlzLm9uU2VsbEFzc2V0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxsQW1vdW50Q2hhbmdlPXt0aGlzLm9uU2VsbEFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRJbnB1dD17cmVjZWl2ZUFzc2V0SW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQXNzZXRzPXtyZWNlaXZlQXNzZXRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQ9e3JlY2VpdmVBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWU9e3JlY2VpdmVJbWdOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2U9e3RoaXMub25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvblJlY2VpdmVBbW91bnRDaGFuZ2U9e3RoaXMub25SZWNlaXZlQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVjZWl2ZUFzc2V0U2VhcmNoPXt0aGlzLm9uUmVjZWl2ZUFzc2V0U2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3dhcD17dGhpcy5vblN3YXB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTd2FwcGFibGU9e3RoaXMuaXNTd2FwcGFibGUoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7RGV0YWlsc31cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmhhc0JhbGFuY2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uubm9fYmFsYW5jZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJzZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zaG93RGV0YWlscygpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXN1YiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmhhc0JhbGFuY2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uuc2VsbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5RdWlja1RyYWRlID0gY29ubmVjdChcclxuICAgIFF1aWNrVHJhZGUsXHJcbiAgICB7XHJcbiAgICAgICAgbGlzdGVuVG8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbQXNzZXRTdG9yZSwgTWFya2V0c1N0b3JlXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3BzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoQXNzZXRzOiBBc3NldFN0b3JlLmdldFN0YXRlKCkuYXNzZXRzLFxyXG4gICAgICAgICAgICAgICAgYXNzZXRzTG9hZGluZzogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0c0xvYWRpbmcsXHJcbiAgICAgICAgICAgICAgICBtYXJrZXREYXRhOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5tYXJrZXREYXRhLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlTWFya2V0SGlzdG9yeTogTWFya2V0c1N0b3JlLmdldFN0YXRlKClcclxuICAgICAgICAgICAgICAgICAgICAuYWN0aXZlTWFya2V0SGlzdG9yeSxcclxuICAgICAgICAgICAgICAgIGJ1Y2tldFNpemU6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLmJ1Y2tldFNpemUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBPcmRlckxpbWl0OiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jdXJyZW50R3JvdXBPcmRlckxpbWl0LFxyXG4gICAgICAgICAgICAgICAgZmVlZFByaWNlOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5mZWVkUHJpY2UsXHJcbiAgICAgICAgICAgICAgICBtYXJrZXRMaW1pdE9yZGVyczogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0TGltaXRPcmRlcnNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoUXVpY2tUcmFkZSA9IGJpbmRUb0N1cnJlbnRBY2NvdW50KFF1aWNrVHJhZGUpKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yMyBmcm9tIFwiLi4vVXRpbGl0eS9BbW91bnRTZWxlY3RvcjNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCB7Um93LCBDb2x9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5cclxuY2xhc3MgU2VsbFJlY2VpdmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBzZWxsQXNzZXRJbnB1dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBzZWxsQXNzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc2VsbEFzc2V0czogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIHNlbGxBbW91bnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc2VsbEltZ05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgcmVjZWl2ZUFzc2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHJlY2VpdmVBc3NldHM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICByZWNlaXZlQW1vdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHJlY2VpdmVJbWdOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIG9uU2VsbEFzc2V0SW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb25TZWxsQW1vdW50Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgb25SZWNlaXZlQW1vdW50Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uU3dhcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBpc1N3YXBwYWJsZTogUHJvcFR5cGVzLmJvb2xcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNtYWxsU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGggPCA4NTAgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJbnB1dCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0LFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRzLFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50LFxyXG4gICAgICAgICAgICBzZWxsSW1nTmFtZSxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cyxcclxuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCxcclxuICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWUsXHJcbiAgICAgICAgICAgIG9uU2VsbEFzc2V0SW5wdXRDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uU2VsbEFtb3VudENoYW5nZSxcclxuICAgICAgICAgICAgb25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZSxcclxuICAgICAgICAgICAgb25SZWNlaXZlQW1vdW50Q2hhbmdlLFxyXG4gICAgICAgICAgICBvblJlY2VpdmVBc3NldFNlYXJjaCxcclxuICAgICAgICAgICAgb25Td2FwLFxyXG4gICAgICAgICAgICBpc1N3YXBwYWJsZVxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxsU2VsZWN0b3IgPSAoXHJcbiAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvcjNcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtcImV4Y2hhbmdlLnNlbGxcIn1cclxuICAgICAgICAgICAgICAgIGFzc2V0SW5wdXQ9e3NlbGxBc3NldElucHV0fVxyXG4gICAgICAgICAgICAgICAgYXNzZXQ9e3NlbGxBc3NldH1cclxuICAgICAgICAgICAgICAgIGFzc2V0cz17c2VsbEFzc2V0c31cclxuICAgICAgICAgICAgICAgIGFtb3VudD17c2VsbEFtb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQXNzZXRJbnB1dENoYW5nZT17b25TZWxsQXNzZXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQW1vdW50Q2hhbmdlPXtvblNlbGxBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpbWdOYW1lPXtzZWxsSW1nTmFtZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMucGxhY2Vob2xkZXJfc2VsbFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlY2VpdmVTZWxlY3RvciA9IChcclxuICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yM1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9e1wiZXhjaGFuZ2UucmVjZWl2ZVwifVxyXG4gICAgICAgICAgICAgICAgYXNzZXRJbnB1dD17cmVjZWl2ZUFzc2V0SW5wdXR9XHJcbiAgICAgICAgICAgICAgICBhc3NldD17cmVjZWl2ZUFzc2V0fVxyXG4gICAgICAgICAgICAgICAgYXNzZXRzPXtyZWNlaXZlQXNzZXRzfVxyXG4gICAgICAgICAgICAgICAgYW1vdW50PXtyZWNlaXZlQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgb25Bc3NldElucHV0Q2hhbmdlPXtvblJlY2VpdmVBc3NldElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9e29uUmVjZWl2ZUFzc2V0U2VhcmNofVxyXG4gICAgICAgICAgICAgICAgb25BbW91bnRDaGFuZ2U9e29uUmVjZWl2ZUFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgIGltZ05hbWU9e3JlY2VpdmVJbWdOYW1lfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5wbGFjZWhvbGRlcl9yZWNlaXZlXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIWlzU3dhcHBhYmxlKSB7XHJcbiAgICAgICAgICAgIGJ0blN0eWxlLm9wYWNpdHkgPSAwLjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzd2FwQnV0dG9uID0gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtidG5TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMnhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXNtYWxsU2NyZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIzcmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3dhcH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7c21hbGxTY3JlZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz57c2VsbFNlbGVjdG9yfTwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93Pntzd2FwQnV0dG9ufTwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PntyZWNlaXZlU2VsZWN0b3J9PC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTB9PntzZWxsU2VsZWN0b3J9PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0+e3N3YXBCdXR0b259PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTB9PntyZWNlaXZlU2VsZWN0b3J9PC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxsUmVjZWl2ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHtSb3csIENvbCwgVG9vbHRpcH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3JTdHlsZUd1aWRlXCI7XHJcblxyXG5pbXBvcnQgQ2hhaW5TZWxlY3QgZnJvbSBcIi4vQ2hhaW5TZWxlY3RcIjtcclxuXHJcbmNsYXNzIEFtb3VudFNlbGVjdG9yMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGFzc2V0SW5wdXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYXNzZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgYXNzZXRzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgICAgYW1vdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBvbkFzc2V0SW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIG9uQW1vdW50Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBvbkltYWdlRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBpbWdOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyQW1vdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIGltZ05hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyQW1vdW50OiBcIjAuMFwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGltYWdlRXJyb3I6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEhdGhpcy5wcm9wcy5pbWdOYW1lICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW1nTmFtZSAhPT0gcHJldlByb3BzLmltZ05hbWUgJiZcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pbWdOYW1lICE9PSBcInVua25vd25cIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGltYWdlRXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkltYWdlRXJyb3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGltYWdlRXJyb3I6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIGFzc2V0SW5wdXQsXHJcbiAgICAgICAgICAgIGFzc2V0LFxyXG4gICAgICAgICAgICBhc3NldHMsXHJcbiAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgb25Bc3NldElucHV0Q2hhbmdlLFxyXG4gICAgICAgICAgICBvblNlYXJjaCxcclxuICAgICAgICAgICAgb25BbW91bnRDaGFuZ2UsXHJcbiAgICAgICAgICAgIGltZ05hbWUsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlckFtb3VudCxcclxuICAgICAgICAgICAgdG9vbHRpcFRleHRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW1hZ2VFcnJvcikge1xyXG4gICAgICAgICAgICBpbWdOYW1lID0gXCJ1bmtub3duXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsYWJlbFRleHQgPSAoXHJcbiAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhaW5TZWxlY3RvciA9IDxDaGFpblNlbGVjdCAvPjtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSAoXHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMy41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMub25JbWFnZUVycm9yLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFtb3VudFNlbGVjdG9yID0gKFxyXG4gICAgICAgICAgICA8QW1vdW50U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgIGFtb3VudD17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgYXNzZXQ9e2Fzc2V0fVxyXG4gICAgICAgICAgICAgICAgYXNzZXRzPXthc3NldHN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJBbW91bnR9XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW1vdW50LXNlbGVjdG9yLTJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIzLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbFRleHR9XHJcbiAgICAgICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMThyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMy41cmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbj17NX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezE5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9e3Rvb2x0aXBUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpblNlbGVjdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthbW91bnRTZWxlY3Rvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbW91bnRTZWxlY3RvcjM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7U2VsZWN0fSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0IHtNYXB9IGZyb20gXCJpbW11dGFibGVcIjtcclxuXHJcbmNsYXNzIENoYWluU2VsZWN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGNoYWluczogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIHNlbGVjdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XHJcblxyXG4gICAgICAgIC8vIGFsbCBvdGhlciBwcm9wcyBhcmUgcGFzc2VkIHRvIHRoZSBTZWxlY3QgY29tcG9uZW50XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgY2hhaW5zOiBbXCJCaXRTaGFyZXMgQmxvY2tjaGFpblwiXSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogbnVsbCxcclxuICAgICAgICBzdHlsZToge30sXHJcbiAgICAgICAgc2VsZWN0U3R5bGU6IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBjaGFpbnMsXHJcbiAgICAgICAgICAgIHNlbGVjdFN0eWxlLFxyXG4gICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSxcclxuICAgICAgICAgICAgLi4ucmVtUHJvcHNcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgZGlzYWJsZVNlbGVjdCA9XHJcbiAgICAgICAgICAgIGNoYWlucy5maWx0ZXIoTWFwLmlzTWFwKS5sZW5ndGggPD0gMSAmJiAhb25Ecm9wZG93blZpc2libGVDaGFuZ2U7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBjaGFpbnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSBnaXZlbiB3ZSBhc3N1bWUgdGhhdCBsYXp5IGxvYWRpbmcgdGFrZXMgcGxhY2VcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPXtvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHNob3dBcnJvdz17ZGlzYWJsZVNlbGVjdCA/IGZhbHNlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3NlbGVjdFN0eWxlfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciB8fCBcInV0aWxpdHkuYXNzZXRfc2VsZWN0X3BsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICB7Li4ucmVtUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXQsIG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ua2V5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+PSAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZ2xvYmFsLm5vdF9mb3VuZFwiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoYWlucy5maWx0ZXIoTWFwLmlzTWFwKS5tYXAoY2hhaW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17Y2hhaW59IHZhbHVlPXtjaGFpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2hhaW4tc2VsZWN0XCJ9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFpblNlbGVjdFZpZXc7XHJcbiIsImltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7Y2hlY2tGZWVTdGF0dXNBc3luY30gZnJvbSBcImNvbW1vbi90cnhIZWxwZXJcIjtcclxuXHJcbi8vIFJldHVybnMgYSBsaXN0IG9mIGRpY3RzIHdpdGgga2V5cyBpZCwgc2VsbGVyIGFtb3VudCBhbmQgcHJpY2UgYW5kIHJlc3BlY3RpdmUgdmFsdWVzXHJcbmZ1bmN0aW9uIGdldE9yZGVycyhhbW91bnQsIG9yZGVycywgd2hhdEFtb3VudCkge1xyXG4gICAgY29uc3QgbWF0Y2hlZE9yZGVycyA9IFtdO1xyXG4gICAgbGV0IHRvdGFsQW1vdW50O1xyXG4gICAgb3JkZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gYi5nZXRQcmljZSgpIC0gYS5nZXRQcmljZSgpOyAvLyBnZXRQcmljZSA9PT0gX3JlYWxfcHJpY2VcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1hdGNoZWRPcmRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZWRPcmRlcnMuZm9yRWFjaCgoe29yZGVyfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG90YWxBbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgIHdoYXRBbW91bnQgPT09IFwicmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gb3JkZXIudG90YWxfZm9yX3NhbGUuZ2V0QW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBvcmRlci50b3RhbF90b19yZWNlaXZlLmdldEFtb3VudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b3RhbEFtb3VudCA+PSBhbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZE9yZGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogb3JkZXJzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogb3JkZXJzW2ldLmFtb3VudFRvUmVjZWl2ZSgpLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnQ6IG9yZGVyc1tpXS50b3RhbF90b19yZWNlaXZlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogb3JkZXJzW2ldLmdldFByaWNlKClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hlZE9yZGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBvcmRlcnNbaV0sXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IG9yZGVyc1tpXS5hbW91bnRUb1JlY2VpdmUoKS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnQ6IG9yZGVyc1tpXS50b3RhbF90b19yZWNlaXZlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBvcmRlcnNbaV0uZ2V0UHJpY2UoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoZWRPcmRlcnM7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBkaWN0IHdpdGgga2V5cyBmZWVkUHJpY2UgYW5kIGxhc3RQcmljZVxyXG5mdW5jdGlvbiBnZXRQcmljZXMoYWN0aXZlTWFya2V0SGlzdG9yeSwgZmVlZFByaWNlKSB7XHJcbiAgICBsZXQgbGF0ZXN0UHJpY2U7XHJcbiAgICBpZiAoYWN0aXZlTWFya2V0SGlzdG9yeS5zaXplKSB7XHJcbiAgICAgICAgY29uc3QgbGF0ZXN0X3R3byA9IGFjdGl2ZU1hcmtldEhpc3RvcnkudGFrZSgyKTtcclxuICAgICAgICBjb25zdCBsYXRlc3QgPSBsYXRlc3RfdHdvLmZpcnN0KCk7XHJcbiAgICAgICAgbGF0ZXN0UHJpY2UgPSBsYXRlc3QuZ2V0UHJpY2UoKTtcclxuICAgIH1cclxuICAgIC8vIGZlZWQgcHJpY2UgPT09IG51bGwgaWYgbm90IGEgYml0YXNzZXQgbWFya2V0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhdGVzdFByaWNlOiBsYXRlc3RQcmljZSA/IGxhdGVzdFByaWNlIDogbnVsbCxcclxuICAgICAgICBmZWVkUHJpY2U6IGZlZWRQcmljZSA/IGZlZWRQcmljZS50b1JlYWwoKSA6IGZlZWRQcmljZVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGxpc3Qgb2YgYXNzZXQgaWRzIHRoYXQgdGhlIHVzZXIgY2FuIHNlbGxcclxuZnVuY3Rpb24gZ2V0QXNzZXRzVG9TZWxsKGFjY291bnQpIHtcclxuICAgIGxldCBhc3NldFR5cGVzID0gW107XHJcblxyXG4gICAgaWYgKCEoYWNjb3VudCAmJiBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpKSkge1xyXG4gICAgICAgIHJldHVybiBhc3NldFR5cGVzO1xyXG4gICAgfVxyXG4gICAgbGV0IGFjY291bnRCYWxhbmNlcyA9IGFjY291bnQuZ2V0KFwiYmFsYW5jZXNcIikudG9KUygpO1xyXG5cclxuICAgIGFzc2V0VHlwZXMgPSBPYmplY3Qua2V5cyhhY2NvdW50QmFsYW5jZXMpLnNvcnQodXRpbHMuc29ydElEKTtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gYWNjb3VudEJhbGFuY2VzKSB7XHJcbiAgICAgICAgbGV0IGJhbGFuY2VPYmplY3QgPSBDaGFpblN0b3JlLmdldE9iamVjdChhY2NvdW50QmFsYW5jZXNba2V5XSk7XHJcbiAgICAgICAgaWYgKGJhbGFuY2VPYmplY3QgJiYgYmFsYW5jZU9iamVjdC5nZXQoXCJiYWxhbmNlXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGFzc2V0VHlwZXMuc3BsaWNlKGFzc2V0VHlwZXMuaW5kZXhPZihrZXkpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFzc2V0VHlwZXM7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBkaWN0IHdpdGgga2V5cyBsaXF1aWRpdHlQZW5hbHR5LCBtYXJrZXRGZWUgYW5kIHRyYW5zYWN0aW9uRmVlLCBpbnB1dCBpcyBzZWxlY3RlZCBhc3NldHMgYW5kIGFtb3VudHNcclxuYXN5bmMgZnVuY3Rpb24gZ2V0RmVlcyhiYXNlQXNzZXQsIHF1b3RlQXNzZXQsIGN1cnJlbnRBY2NvdW50KSB7XHJcbiAgICBjb25zdCBiYXNlTWFya2V0RmVlUGVyY2VudCA9XHJcbiAgICAgICAgYmFzZUFzc2V0LmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pIC8gMTAwICsgXCIlXCI7XHJcbiAgICBjb25zdCBxdW90ZU1hcmtldEZlZVBlcmNlbnQgPVxyXG4gICAgICAgIHF1b3RlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSkgLyAxMDAgKyBcIiVcIjtcclxuICAgIGNvbnN0IGJhc2VNYXJrZXRGZWUgPSBiYXNlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSk7XHJcbiAgICBjb25zdCBxdW90ZU1hcmtldEZlZSA9IHF1b3RlQXNzZXQuZ2V0SW4oW1wib3B0aW9uc1wiLCBcIm1hcmtldF9mZWVfcGVyY2VudFwiXSk7XHJcblxyXG4gICAgY29uc3QgdHJ4RmVlID0gYXdhaXQgY2hlY2tGZWVTdGF0dXMoXHJcbiAgICAgICAgW2Jhc2VBc3NldCwgcXVvdGVBc3NldF0sXHJcbiAgICAgICAgY3VycmVudEFjY291bnRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYXJrZXRGZWU6IHtcclxuICAgICAgICAgICAgYmFzZU1hcmtldEZlZVBlcmNlbnQsXHJcbiAgICAgICAgICAgIHF1b3RlTWFya2V0RmVlUGVyY2VudCxcclxuICAgICAgICAgICAgYmFzZU1hcmtldEZlZSxcclxuICAgICAgICAgICAgcXVvdGVNYXJrZXRGZWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRyYW5zYWN0aW9uRmVlOiB0cnhGZWVcclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRmVlU3RhdHVzKGFzc2V0cyA9IFtdLCBhY2NvdW50KSB7XHJcbiAgICBsZXQgZmVlU3RhdHVzID0ge307XHJcbiAgICBsZXQgcCA9IFtdO1xyXG4gICAgYXNzZXRzLmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgcC5wdXNoKFxyXG4gICAgICAgICAgICBjaGVja0ZlZVN0YXR1c0FzeW5jKHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIGZlZUlEOiBhLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJsaW1pdF9vcmRlcl9jcmVhdGVcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwKVxyXG4gICAgICAgIC50aGVuKHN0YXR1cyA9PiB7XHJcbiAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZlZVN0YXR1c1thLmdldChcImlkXCIpXSA9IHN0YXR1c1tpZHhdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZlZVN0YXR1cztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiY2hlY2tGZWVTdGF0dXNBc3luYyBlcnJvclwiLCBlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmVlU3RhdHVzO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge2dldE9yZGVycywgZ2V0UHJpY2VzLCBnZXRGZWVzLCBnZXRBc3NldHNUb1NlbGx9O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTtBQVpBO0FBZUE7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDOUxBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWpCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQSx5QkFFQTtBQUNBO0FBR0E7QUFDQTtBQUhBO0FBTUE7Ozs7QUFsQkE7QUFDQTtBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXNCQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBNUNBO0FBNkNBO0FBQ0E7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFBQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBS0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7O0FBQ0E7QUFDQTs7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFVQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFpQkEseUJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUExRUE7QUE0RUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTs7O0FBQ0E7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUFBOzs7Ozs7QUFDQTtBQUNBOztBQURBOzs7OztBQUVBO0FBQ0E7O0FBQ0EsNkNBRUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7OztBQUNBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFBQTs7Ozs7O0FBQ0E7QUFDQTs7QUFEQTs7Ozs7QUFFQTtBQUNBOztBQUNBLDZDQUVBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7O0FBQUE7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFMQTtBQVFBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVRBO0FBQ0E7QUFXQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBSUE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBS0E7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFKQTtBQWVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFRQTtBQVJBO0FBbEJBO0FBOEJBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFLQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWJBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQURBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQVZBO0FBREE7QUFlQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBVEE7QUFEQTtBQTlCQTtBQXBCQTtBQWtFQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXVCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFQQTtBQXBCQTtBQW1DQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBU0E7QUFUQTtBQUFBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUhBO0FBQUE7QUFDQTtBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQU5BO0FBbkJBO0FBaUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFSQTtBQVVBO0FBVkE7QUFQQTtBQU5BO0FBOUJBO0FBMkRBOzs7QUFwdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTs7OztBQXBFQTtBQUNBO0FBc3dDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBVkE7QUFZQTtBQWpCQTtBQUNBO0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBb0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBREE7QUFLQTtBQVZBO0FBREE7QUFDQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBUkE7QUFnQkE7Ozs7QUFuSEE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQUNBO0FBbUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF3QkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFQQTtBQUNBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFiQTtBQVJBO0FBOEJBOzs7O0FBMUlBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTtBQTBIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFNQTtBQVhBO0FBYUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBMUJBO0FBNkJBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQXZFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUE4REE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBTkE7QUFBQTtBQUNBO0FBREE7QUFRQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFQQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOzs7Ozs7QUF3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBWEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOzs7Ozs7O0FBekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9