(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[7],{

/***/ 2753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasLoaded", function() { return hasLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindToCurrentAccount", function() { return bindToCurrentAccount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChainTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2012);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2148);
/* harmony import */ var react_debounce_render__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_debounce_render__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2013);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1895);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(562);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1996);
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

/***/ 2770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(641);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2771);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2127);




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

/***/ 2771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(637);


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

/***/ 2843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupAssets", function() { return lookupAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assetFilter", function() { return assetFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIssuerName", function() { return fetchIssuerName; });
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2145);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
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

/***/ 3305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2654);
/* harmony import */ var _QuickTrade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3306);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2012);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2013);
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

/***/ 3306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2770);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2753);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1895);
/* harmony import */ var _stores_AssetStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2400);
/* harmony import */ var _stores_MarketsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2377);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_QuickTrade_SellReceive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3307);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2378);
/* harmony import */ var _QuickTradeHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3310);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(429);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2401);
/* harmony import */ var _Exchange_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2843);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Utility_LinkToAccountById__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2454);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(607);
/* harmony import */ var _Utility_FormattedPrice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2456);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2139);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1901);
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

/***/ 3307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_AmountSelector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3308);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1903);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
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

/***/ 3308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AmountSelectorStyleGuide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2135);
/* harmony import */ var _ChainSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3309);
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

/***/ 3309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(536);
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

/***/ 3310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrders", function() { return getOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrices", function() { return getPrices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFees", function() { return getFees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetsToSell", function() { return getAssetsToSell; });
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(606);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tUcmFkZS41N2FiOTAzN2EwMDJhZDZhNzA0Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0N1cnJlbnRBY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvbm93LmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FeGNoYW5nZS9NYXJrZXRQaWNrZXJIZWxwZXJzLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1F1aWNrVHJhZGVSb3V0ZXIuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1F1aWNrVHJhZGUuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9RdWlja1RyYWRlL1NlbGxSZWNlaXZlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9BbW91bnRTZWxlY3RvcjMuanN4Iiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L0NoYWluU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvUXVpY2tUcmFkZS9RdWlja1RyYWRlSGVscGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuL0NoYWluVHlwZXNcIjtcclxuaW1wb3J0IGRlYm91bmNlUmVuZGVyIGZyb20gXCJyZWFjdC1kZWJvdW5jZS1yZW5kZXJcIjtcclxuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcIi4vQmluZFRvQ2hhaW5TdGF0ZVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0FjY291bnRTdG9yZVwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vTG9hZGluZ0luZGljYXRvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0xvYWRlZCA9IGZ1bmN0aW9uIGhhc0xvYWRlZChjdXJyZW50QWNjb3VudCkge1xyXG4gICAgcmV0dXJuICEhY3VycmVudEFjY291bnQgJiYgISFjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBiaW5kVG9DdXJyZW50QWNjb3VudCA9IGZ1bmN0aW9uIGJpbmRUb0N1cnJlbnRBY2NvdW50KFxyXG4gICAgV3JhcHBlZENvbXBvbmVudFxyXG4pIHtcclxuICAgIC8vIC4uLmFuZCByZXR1cm5zIGFub3RoZXIgY29tcG9uZW50Li4uXHJcbiAgICBsZXQgQmluZFRvQ3VycmVudEFjY291bnQgPSBjbGFzcyBCaW5kVG9DdXJyZW50QWNjb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgY3VycmVudEFjY291bnQ6IENoYWluVHlwZXMuQ2hhaW5BY2NvdW50XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICAgICAgLy8gc2V0IHN1YnNjcmlwdGlvblxyXG4gICAgICAgICAgICBhdXRvc3Vic2NyaWJlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICBpZiAoaGFzTG9hZGVkKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nSW5kaWNhdG9yIC8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBCaW5kVG9DdXJyZW50QWNjb3VudCA9IEJpbmRUb0NoYWluU3RhdGUoQmluZFRvQ3VycmVudEFjY291bnQpO1xyXG5cclxuICAgIEJpbmRUb0N1cnJlbnRBY2NvdW50ID0gZGVib3VuY2VSZW5kZXIoQmluZFRvQ3VycmVudEFjY291bnQsIDEwMCwge1xyXG4gICAgICAgIGxlYWRpbmc6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29ubmVjdChcclxuICAgICAgICBCaW5kVG9DdXJyZW50QWNjb3VudCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QWNjb3VudCA9XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5wYXNzd29yZEFjY291bnQgfHxcclxuICAgICAgICAgICAgICAgICAgICBcInBsZWFzZS1sb2dpblwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDogbmV3IE1hcChbW1wibmFtZVwiLCBjdXJyZW50QWNjb3VudF1dKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBub3cgZnJvbSAnLi9ub3cuanMnO1xuaW1wb3J0IHRvTnVtYmVyIGZyb20gJy4vdG9OdW1iZXIuanMnO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdztcbiIsImltcG9ydCB7aGFzR2F0ZXdheVByZWZpeH0gZnJvbSBcImNvbW1vbi9nYXRld2F5VXRpbHNcIjtcclxuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcclxuXHJcbmZ1bmN0aW9uIGxvb2t1cEFzc2V0cyh2YWx1ZSwgZ2F0ZXdheUFzc2V0cyA9IGZhbHNlLCBnZXRBc3NldExpc3QsIHNldFN0YXRlKSB7XHJcbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSBcIlwiKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHF1b3RlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICBpZiAocXVvdGUuc3RhcnRzV2l0aChcIkJJVFwiKSAmJiBxdW90ZS5sZW5ndGggPj0gNikge1xyXG4gICAgICAgIHF1b3RlID0gdmFsdWUuc3Vic3RyKDMsIHF1b3RlLmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFzc2V0TGlzdChxdW90ZSwgMTAsIGdhdGV3YXlBc3NldHMpO1xyXG5cclxuICAgIHNldFN0YXRlKHtsb29rdXBRdW90ZTogcXVvdGV9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXNzZXRGaWx0ZXIoXHJcbiAgICB7c2VhcmNoQXNzZXRzLCBtYXJrZXRQaWNrZXJBc3NldCwgYmFzZUFzc2V0LCBxdW90ZUFzc2V0fSxcclxuICAgIHtpbnB1dFZhbHVlLCBsb29rdXBRdW90ZX0sXHJcbiAgICBzZXRTdGF0ZSxcclxuICAgIGNoZWNrQW5kVXBkYXRlTWFya2V0TGlzdFxyXG4pIHtcclxuICAgIHNldFN0YXRlKHthY3RpdmVTZWFyY2g6IHRydWV9KTtcclxuXHJcbiAgICBsZXQgYXNzZXRDb3VudCA9IDA7XHJcbiAgICBsZXQgYWxsTWFya2V0cyA9IFtdO1xyXG5cclxuICAgIGxldCBiYXNlU3ltYm9sID0gYmFzZUFzc2V0LmdldChcInN5bWJvbFwiKTtcclxuICAgIGxldCBxdW90ZVN5bWJvbCA9IHF1b3RlQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG5cclxuICAgIGlmIChzZWFyY2hBc3NldHMuc2l6ZSAmJiAhIWlucHV0VmFsdWUgJiYgaW5wdXRWYWx1ZS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgc2VhcmNoQXNzZXRzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhLm9wdGlvbnMuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShhLm9wdGlvbnMuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ2aXNpYmxlXCIgaW4gZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVzY3JpcHRpb24udmlzaWJsZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5zeW1ib2wuaW5kZXhPZihsb29rdXBRdW90ZSkgIT09IC0xO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZm9yRWFjaChhc3NldCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXRDb3VudCA+IDEwMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgYXNzZXRDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpc3N1ZXJOYW1lID0gZmV0Y2hJc3N1ZXJOYW1lKGFzc2V0Lmlzc3Vlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJhc2UgPSBiYXNlQXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcmtldElEID0gYXNzZXQuc3ltYm9sICsgXCJfXCIgKyBiYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpc1F1b3RlQXNzZXQgPSBxdW90ZVN5bWJvbCA9PSBtYXJrZXRQaWNrZXJBc3NldDtcclxuICAgICAgICAgICAgICAgIGxldCBpbmNsdWRlQXNzZXQgPVxyXG4gICAgICAgICAgICAgICAgICAgIChpc1F1b3RlQXNzZXQgJiYgYXNzZXQuc3ltYm9sICE9IGJhc2VTeW1ib2wpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCFpc1F1b3RlQXNzZXQgJiYgYXNzZXQuc3ltYm9sICE9IHF1b3RlU3ltYm9sKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZUFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsTWFya2V0cy5wdXNoKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiBhc3NldC5zeW1ib2wsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBiYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVySWQ6IGFzc2V0Lmlzc3VlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlcjogaXNzdWVyTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1hcmtldHNMaXN0ID0gc29ydE1hcmtldHNMaXN0KGFsbE1hcmtldHMsIGlucHV0VmFsdWUpO1xyXG4gICAgY2hlY2tBbmRVcGRhdGVNYXJrZXRMaXN0KG1hcmtldHNMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWFya2V0U29ydENvbXBvbmVudHMobWFya2V0KSB7XHJcbiAgICBjb25zdCB3ZWlnaHQgPSB7fTtcclxuICAgIGNvbnN0IHF1b3RlID0gbWFya2V0LnF1b3RlO1xyXG4gICAgaWYgKHF1b3RlLmluZGV4T2YoXCIuXCIpICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IFtnYXRld2F5LCBhc3NldF0gPSBxdW90ZS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgd2VpZ2h0LmdhdGV3YXkgPSBnYXRld2F5O1xyXG4gICAgICAgIHdlaWdodC5hc3NldCA9IGFzc2V0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3ZWlnaHQuYXNzZXQgPSBxdW90ZTtcclxuICAgIH1cclxuICAgIGlmIChtYXJrZXQuaXNzdWVySWQgPT09IFwiMS4yLjBcIikgd2VpZ2h0LmlzQ29tbWl0dGVlID0gdHJ1ZTtcclxuICAgIHJldHVybiB3ZWlnaHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRNYXJrZXRzTGlzdChhbGxNYXJrZXRzLCBpbnB1dFZhbHVlKSB7XHJcbiAgICBpZiAoaW5wdXRWYWx1ZS5zdGFydHNXaXRoKFwiQklUXCIpICYmIGlucHV0VmFsdWUubGVuZ3RoID49IDYpIHtcclxuICAgICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5zdWJzdHIoMywgaW5wdXRWYWx1ZS5sZW5ndGggLSAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhbGxNYXJrZXRzLnNvcnQoKFssIG1hcmtldEFdLCBbLCBtYXJrZXRCXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdlaWdodEEgPSBnZXRNYXJrZXRTb3J0Q29tcG9uZW50cyhtYXJrZXRBKTtcclxuICAgICAgICBjb25zdCB3ZWlnaHRCID0gZ2V0TWFya2V0U29ydENvbXBvbmVudHMobWFya2V0Qik7XHJcblxyXG4gICAgICAgIGlmICh3ZWlnaHRBLmFzc2V0ICE9PSB3ZWlnaHRCLmFzc2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh3ZWlnaHRBLmFzc2V0ID09PSBpbnB1dFZhbHVlKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGlmICh3ZWlnaHRCLmFzc2V0ID09PSBpbnB1dFZhbHVlKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgaWYgKHdlaWdodEEuYXNzZXQgPiB3ZWlnaHRCLmFzc2V0KSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGlmICh3ZWlnaHRBLmFzc2V0IDwgd2VpZ2h0Qi5hc3NldCkgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2VpZ2h0QS5pc0NvbW1pdHRlZSBeIHdlaWdodEIuaXNDb21taXR0ZWUpIHtcclxuICAgICAgICAgICAgaWYgKHdlaWdodEEuaXNDb21taXR0ZWUpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgaWYgKHdlaWdodEIuaXNDb21taXR0ZWUpIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYUlzS25vd25HYXRld2F5ID0gaGFzR2F0ZXdheVByZWZpeChtYXJrZXRBLnF1b3RlKTtcclxuICAgICAgICBjb25zdCBiSXNLbm93bkdhdGV3YXkgPSBoYXNHYXRld2F5UHJlZml4KG1hcmtldEIucXVvdGUpO1xyXG4gICAgICAgIGlmIChhSXNLbm93bkdhdGV3YXkgJiYgIWJJc0tub3duR2F0ZXdheSkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmIChiSXNLbm93bkdhdGV3YXkgJiYgIWFJc0tub3duR2F0ZXdheSkgcmV0dXJuIDE7XHJcblxyXG4gICAgICAgIGlmICh3ZWlnaHRBLmdhdGV3YXkgPiB3ZWlnaHRCLmdhdGV3YXkpIHJldHVybiAxO1xyXG4gICAgICAgIGlmICh3ZWlnaHRBLmdhdGV3YXkgPCB3ZWlnaHRCLmdhdGV3YXkpIHJldHVybiAtMTtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaElzc3Vlck5hbWUoaXNzdWVySWQpIHtcclxuICAgIGxldCBpc3N1ZXIgPSBDaGFpblN0b3JlLmdldE9iamVjdChpc3N1ZXJJZCwgZmFsc2UsIGZhbHNlKTtcclxuICAgIGlmICghaXNzdWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXNzdWVyLmdldChcIm5hbWVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7bG9va3VwQXNzZXRzLCBhc3NldEZpbHRlciwgZmV0Y2hJc3N1ZXJOYW1lfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYWdlNDA0IGZyb20gXCIuLi9QYWdlNDA0L1BhZ2U0MDRcIjtcbmltcG9ydCBRdWlja1RyYWRlIGZyb20gXCIuL1F1aWNrVHJhZGVcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCIuLi9VdGlsaXR5L0NoYWluVHlwZXNcIjtcbmltcG9ydCBCaW5kVG9DaGFpblN0YXRlIGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcblxuY2xhc3MgUXVpY2tUcmFkZVN1YnNjcmliZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGFzc2V0VG9TZWxsOiBDaGFpblR5cGVzLkNoYWluQXNzZXQsXG4gICAgICAgIGFzc2V0VG9SZWNlaXZlOiBDaGFpblR5cGVzLkNoYWluQXNzZXRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYXNzZXRUb1NlbGw6IFwiQ05ZXCIsXG4gICAgICAgIGFzc2V0VG9SZWNlaXZlOiBcIkJUU1wiXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZS5nZXQgJiYgISF0aGlzLnByb3BzLmFzc2V0VG9TZWxsLmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIDxRdWlja1RyYWRlIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBRdWlja1RyYWRlQXNzZXRSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoUXVpY2tUcmFkZVN1YnNjcmliZXIsIHtcbiAgICBzaG93X2xvYWRlcjogdHJ1ZVxufSk7XG5cbmNsYXNzIFF1aWNrVHJhZGVSb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHN5bWJvbHMgPSAhIXRoaXMucHJvcHMubWF0Y2gucGFyYW1zLm1hcmtldElEXG4gICAgICAgICAgICA/IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLm1hcmtldElELnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJfXCIpXG4gICAgICAgICAgICA6IFtcIlwiLCBcIlwiXTtcbiAgICAgICAgaWYgKHN5bWJvbHMubGVuZ3RoID09IDIgJiYgISFzeW1ib2xzWzBdICYmIHN5bWJvbHNbMF0gPT09IHN5bWJvbHNbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiA8UGFnZTQwNCBzdWJ0aXRsZT1cIm1hcmtldF9ub3RfZm91bmRfc3VidGl0bGVcIiAvPjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWlja1RyYWRlUm91dGVyXCIsIHN5bWJvbHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UXVpY2tUcmFkZUFzc2V0UmVzb2x2ZXJcbiAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICBhc3NldFRvU2VsbD17c3ltYm9sc1swXSB8fCBcIlwifVxuICAgICAgICAgICAgICAgIGFzc2V0VG9SZWNlaXZlPXtzeW1ib2xzLmxlbmd0aCA9PSAyID8gc3ltYm9sc1sxXSA6IFwiXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVpY2tUcmFkZVJvdXRlcjtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7YmluZFRvQ3VycmVudEFjY291bnR9IGZyb20gXCIuLi9VdGlsaXR5L0JpbmRUb0N1cnJlbnRBY2NvdW50XCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xyXG5pbXBvcnQgQXNzZXRTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL0Fzc2V0U3RvcmVcIjtcclxuaW1wb3J0IE1hcmtldHNTdG9yZSBmcm9tIFwiLi4vLi4vc3RvcmVzL01hcmtldHNTdG9yZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENvbGxhcHNlLFxyXG4gICAgUm93LFxyXG4gICAgQ29sLFxyXG4gICAgVGFibGUsXHJcbiAgICBCdXR0b24sXHJcbiAgICBTd2l0Y2gsXHJcbiAgICBUb29sdGlwXHJcbn0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgU2VsbFJlY2VpdmUgZnJvbSBcImNvbXBvbmVudHMvUXVpY2tUcmFkZS9TZWxsUmVjZWl2ZVwiO1xyXG5pbXBvcnQgTWFya2V0c0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvTWFya2V0c0FjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldEFzc2V0c1RvU2VsbCxcclxuICAgIGdldFByaWNlcyxcclxuICAgIGdldE9yZGVycyxcclxuICAgIGdldEZlZXNcclxufSBmcm9tIFwiLi9RdWlja1RyYWRlSGVscGVyXCI7XHJcbmltcG9ydCB7Q2hhaW5TdG9yZSwgRmV0Y2hDaGFpbn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XHJcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IEFzc2V0QWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9Bc3NldEFjdGlvbnNcIjtcclxuaW1wb3J0IHtDaGFpblZhbGlkYXRpb259IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge2xvb2t1cEFzc2V0c30gZnJvbSBcIi4uL0V4Y2hhbmdlL01hcmtldFBpY2tlckhlbHBlcnNcIjtcclxuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xyXG5pbXBvcnQgTGlua1RvQWNjb3VudEJ5SWQgZnJvbSBcIi4uL1V0aWxpdHkvTGlua1RvQWNjb3VudEJ5SWRcIjtcclxuaW1wb3J0IHtBc3NldCwgTGltaXRPcmRlckNyZWF0ZX0gZnJvbSBcImNvbW1vbi9NYXJrZXRDbGFzc2VzXCI7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9ufSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBGb3JtYXR0ZWRQcmljZSBmcm9tIFwiLi4vVXRpbGl0eS9Gb3JtYXR0ZWRQcmljZVwiO1xyXG5pbXBvcnQgQXNzZXROYW1lIGZyb20gXCIuLi9VdGlsaXR5L0Fzc2V0TmFtZVwiO1xyXG5pbXBvcnQgVHJhbnNsYXRlIGZyb20gXCJyZWFjdC10cmFuc2xhdGUtY29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBRdWlja1RyYWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRBc3NldHMgPSBnZXRBc3NldHNUb1NlbGwocHJvcHMuY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1vdW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWI6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldElucHV0OiBcIlwiLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldHM6IGFjY291bnRBc3NldHMsXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGxJbWdOYW1lOiBcInVua25vd25cIixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldDogbnVsbCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0czogYWNjb3VudEFzc2V0cyxcclxuICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWU6IFwidW5rbm93blwiLFxyXG4gICAgICAgICAgICBhY3RpdmVJbnB1dDogXCJcIixcclxuICAgICAgICAgICAgYWN0aXZlQW1vdW50SW5wdXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvb2t1cFF1b3RlOiBcIlwiLFxyXG4gICAgICAgICAgICBvcmRlcnM6IFtdLFxyXG4gICAgICAgICAgICBvcmRlclZpZXc6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgIGZlZXM6IG51bGwsXHJcbiAgICAgICAgICAgIHByaWNlczogbnVsbCxcclxuICAgICAgICAgICAgaXNTdWJzY3JpYmVkVG9NYXJrZXQ6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25TZWxsQXNzZXRJbnB1dENoYW5nZSA9IHRoaXMub25TZWxsQXNzZXRJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZSA9IHRoaXMub25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZS5iaW5kKFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLm9uU2VsbEFtb3VudENoYW5nZSA9IHRoaXMub25TZWxsQW1vdW50Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlY2VpdmVBbW91bnRDaGFuZ2UgPSB0aGlzLm9uUmVjZWl2ZUFtb3VudENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25TZWxsSW1hZ2VFcnJvciA9IHRoaXMub25TZWxsSW1hZ2VFcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZWNlaXZlSW1hZ2VFcnJvciA9IHRoaXMub25SZWNlaXZlSW1hZ2VFcnJvci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZWNlaXZlQXNzZXRTZWFyY2ggPSB0aGlzLm9uUmVjZWl2ZUFzc2V0U2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblN3YXAgPSB0aGlzLm9uU3dhcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3Vic2NyaXB0aW9uVG9nZ2xlQ2hhbmdlID0gdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25Ub2dnbGVDaGFuZ2UuYmluZChcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5oZW5kbGVPcmRlclZpZXcgPSB0aGlzLmhlbmRsZU9yZGVyVmlldy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VsbCA9IHRoaXMuaGFuZGxlU2VsbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3N1YlRvTWFya2V0ID0gdGhpcy5fc3ViVG9NYXJrZXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9jaGVja0FuZFVwZGF0ZU1hcmtldExpc3QgPSB0aGlzLl9jaGVja0FuZFVwZGF0ZU1hcmtldExpc3QuYmluZChcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nZXRBc3NldExpc3QgPSBkZWJvdW5jZShBc3NldEFjdGlvbnMuZ2V0QXNzZXRMaXN0LmRlZmVyLCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0ge307XHJcbiAgICAgICAgaWYgKHByb3BzLmFzc2V0VG9TZWxsKSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0SW5wdXQ6IHByb3BzLmFzc2V0VG9TZWxsLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0OiBwcm9wcy5hc3NldFRvU2VsbCxcclxuICAgICAgICAgICAgICAgIHNlbGxJbWdOYW1lOiBwcm9wcy5hc3NldFRvU2VsbC5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLmFzc2V0VG9SZWNlaXZlKSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ubmV3U3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQ6IHByb3BzLmFzc2V0VG9SZWNlaXZlLmdldChcImlkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldDogcHJvcHMuYXNzZXRUb1JlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUltZ05hbWU6IHByb3BzLmFzc2V0VG9SZWNlaXZlLmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgX3JvdXRlVG8oYXNzZXRUb1NlbGwsIGFzc2V0VG9SZWNlaXZlKSB7XHJcbiAgICAgICAgbGV0IHNlbGxSb3V0ZSA9IGFzc2V0VG9TZWxsO1xyXG4gICAgICAgIGxldCByZWNlaXZlUm91dGUgPSBhc3NldFRvUmVjZWl2ZTtcclxuICAgICAgICBpZiAoIWFzc2V0VG9TZWxsKSB7XHJcbiAgICAgICAgICAgIHNlbGxSb3V0ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXNzZXRUb1JlY2VpdmUpIHtcclxuICAgICAgICAgICAgcmVjZWl2ZVJvdXRlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhdGhOYW1lID0gXCIvaW5zdGFudC10cmFkZS9cIiArIHNlbGxSb3V0ZSArIFwiX1wiICsgcmVjZWl2ZVJvdXRlO1xyXG4gICAgICAgIGlmIChfX0RFVl9fKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgXCJfcm91dGVUbzogXCIsXHJcbiAgICAgICAgICAgICAgICBwYXRoTmFtZSxcclxuICAgICAgICAgICAgICAgIFwiIG9sZDogXCIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICE9PSBwYXRoTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChwYXRoTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9hcmVFcXVhbEFzc2V0cyhhc3NldDEsIGFzc2V0Mikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQoYXNzZXQxKSAmJlxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KGFzc2V0MikgJiZcclxuICAgICAgICAgICAgYXNzZXQxLmdldChcImlkXCIpID09PSBhc3NldDIuZ2V0KFwiaWRcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9pc0xvYWRlZEFzc2V0KGFzc2V0KSB7XHJcbiAgICAgICAgcmV0dXJuICEhYXNzZXQgJiYgISFhc3NldC50b0pTO1xyXG4gICAgfVxyXG5cclxuICAgIF9hcmVBc3NldHNHaXZlbigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KHRoaXMucHJvcHMuYXNzZXRUb1NlbGwpICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQodGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYXZlQXNzZXRzQ2hhbmdlZChwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQodGhpcy5wcm9wcy5hc3NldFRvU2VsbCkgIT09XHJcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGVkQXNzZXQocHJldlByb3BzLmFzc2V0VG9TZWxsKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KHRoaXMucHJvcHMuYXNzZXRUb1JlY2VpdmUpICE9PVxyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZEFzc2V0KHByZXZQcm9wcy5hc3NldFRvUmVjZWl2ZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRoaXMuX2FyZUVxdWFsQXNzZXRzKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hc3NldFRvU2VsbCxcclxuICAgICAgICAgICAgICAgIHByZXZQcm9wcy5hc3NldFRvU2VsbFxyXG4gICAgICAgICAgICApIHx8XHJcbiAgICAgICAgICAgICF0aGlzLl9hcmVFcXVhbEFzc2V0cyhcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXRUb1JlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBwcmV2UHJvcHMuYXNzZXRUb1JlY2VpdmVcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYXNNYXJrZXRDaGFuZ2VkKHByZXZQcm9wcykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5tYXJrZXREYXRhKSAhPT1cclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5tYXJrZXREYXRhKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmICh0aGlzLl9oYXZlQXNzZXRzQ2hhbmdlZChwcmV2UHJvcHMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0c0hhdmVDaGFuZ2VkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hhc01hcmtldENoYW5nZWQocHJldlByb3BzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0T3JkZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoQXNzZXRzICE9PSBwcmV2UHJvcHMuc2VhcmNoQXNzZXRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVNlYXJjaDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRBc3NldHMgPSB0aGlzLnByb3BzLnNlYXJjaEFzc2V0c1xyXG4gICAgICAgICAgICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihhID0+IGEuc3ltYm9sLmluZGV4T2YodGhpcy5zdGF0ZS5sb29rdXBRdW90ZSkgIT09IC0xKTtcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tBbmRVcGRhdGVNYXJrZXRMaXN0KGZpbHRlcmVkQXNzZXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQgIT09IHByZXZQcm9wcy5jdXJyZW50QWNjb3VudCkge1xyXG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSBnZXRBc3NldHNUb1NlbGwodGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0czogYXNzZXRzLFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0czogYXNzZXRzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbW91bnRlZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9hcmVBc3NldHNHaXZlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0c0hhdmVDaGFuZ2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtzdWJ9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWQsIHJlY2VpdmVBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQoc2VsbEFzc2V0SWQsIHJlY2VpdmVBc3NldElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgX3N1YlRvTWFya2V0KCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0OiBiYXNlQXNzZXQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldDogcXVvdGVBc3NldCxcclxuICAgICAgICAgICAgc3ViXHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKGJhc2VBc3NldCAmJiBxdW90ZUFzc2V0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldElkOiBiYXNlQXNzZXRJZCxcclxuICAgICAgICAgICAgICAgIHNlbGxBc3NldElkOiBxdW90ZUFzc2V0SWRcclxuICAgICAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgICAgICBjb25zdCB7YnVja2V0U2l6ZSwgY3VycmVudEdyb3VwT3JkZXJMaW1pdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW3FhLCBiYV0gPSBzdWIuc3BsaXQoXCJfXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHFhID09PSBxdW90ZUFzc2V0SWQgJiYgYmEgPT09IGJhc2VBc3NldElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgTWFya2V0c0FjdGlvbnMudW5TdWJzY3JpYmVNYXJrZXQocWEsIGJhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCBNYXJrZXRzQWN0aW9ucy5zdWJzY3JpYmVNYXJrZXQoXHJcbiAgICAgICAgICAgICAgICBiYXNlQXNzZXQsXHJcbiAgICAgICAgICAgICAgICBxdW90ZUFzc2V0LFxyXG4gICAgICAgICAgICAgICAgMzYwMCxcclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWI6IGAke3F1b3RlQXNzZXRJZH1fJHtiYXNlQXNzZXRJZH1gXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsUHJpY2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxGZWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFsbEZlZXMoKSB7XHJcbiAgICAgICAgY29uc3Qge2N1cnJlbnRBY2NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldCwgcmVjZWl2ZUFzc2V0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKHNlbGxBc3NldCAmJiByZWNlaXZlQXNzZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmVlcyA9IGF3YWl0IGdldEZlZXMocmVjZWl2ZUFzc2V0LCBzZWxsQXNzZXQsIGN1cnJlbnRBY2NvdW50KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmZWVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3NldHNEZXRhaWxzKCkge1xyXG4gICAgICAgIGNvbnN0IHtzZWxsQXNzZXQsIHJlY2VpdmVBc3NldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElkOiBzZWxsQXNzZXQgPyBzZWxsQXNzZXQuZ2V0KFwiaWRcIikgOiBudWxsLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJZDogcmVjZWl2ZUFzc2V0ID8gcmVjZWl2ZUFzc2V0LmdldChcImlkXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uOiBzZWxsQXNzZXQgPyBzZWxsQXNzZXQuZ2V0KFwicHJlY2lzaW9uXCIpIDogbnVsbCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uOiByZWNlaXZlQXNzZXRcclxuICAgICAgICAgICAgICAgID8gcmVjZWl2ZUFzc2V0LmdldChcInByZWNpc2lvblwiKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRTeW1ib2w6IHNlbGxBc3NldCA/IHNlbGxBc3NldC5nZXQoXCJzeW1ib2xcIikgOiBudWxsLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRTeW1ib2w6IHJlY2VpdmVBc3NldCA/IHJlY2VpdmVBc3NldC5nZXQoXCJzeW1ib2xcIikgOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxQcmljZXMoKSB7XHJcbiAgICAgICAgY29uc3Qge2FjdGl2ZU1hcmtldEhpc3RvcnksIGZlZWRQcmljZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHByaWNlcyA9IGdldFByaWNlcyhhY3RpdmVNYXJrZXRIaXN0b3J5LCBmZWVkUHJpY2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwcmljZXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0T3JkZXJzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1N1YnNjcmliZWRUb01hcmtldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLm1hcmtldERhdGEpO1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgdXNlciB3YW50cyB0byBpbnNwZWN0IGN1cnJlbnQgb3JkZXJzLCBwYXVzZSB1cGRhdGluZ1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHtjb21iaW5lZEJpZHN9ID0gdGhpcy5wcm9wcy5tYXJrZXREYXRhO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0LFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXQsXHJcbiAgICAgICAgICAgIHNlbGxBbW91bnQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBbW91bnQsXHJcbiAgICAgICAgICAgIGFjdGl2ZUlucHV0XHJcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIl9nZXRPcmRlcnNcIiwgdGhpcy5wcm9wcy5tYXJrZXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbWJpbmVkQmlkcyAmJiBjb21iaW5lZEJpZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxsQXNzZXQgJiYgcmVjZWl2ZUFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGl2ZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlY2VpdmVBc3NldFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsbEFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gZ2V0T3JkZXJzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxBbW91bnQgKiAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRCaWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzVXBkYXRlZDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVSZWNlaXZlQW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbGxBc3NldFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjZWl2ZUFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gZ2V0T3JkZXJzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRCaWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzVXBkYXRlZDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVTZWxsQW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbGxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGxBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVycyA9IGdldE9yZGVycyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQmlkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyc1VwZGF0ZWQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlUmVjZWl2ZUFtb3VudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50OiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVjZWl2ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjZWl2ZUFtb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJzID0gZ2V0T3JkZXJzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tYmluZWRCaWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJzVXBkYXRlZDogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVTZWxsQW1vdW50KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxBbW91bnQ6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9hc3NldHNIYXZlQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLl9zdWJUb01hcmtldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIF9zZXRTZWxsQXNzZXQoXHJcbiAgICAgICAgYXNzZXRPYmplY3RJZE9yU3ltYm9sLFxyXG4gICAgICAgIGFjdGl2ZUlucHV0ID0gXCJzZWxsQXNzZXRcIixcclxuICAgICAgICBmaXJlQ2hhbmdlZCA9IHRydWVcclxuICAgICkge1xyXG4gICAgICAgIGxldCBhc3NldCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhc3NldE9iamVjdElkT3JTeW1ib2wgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgYXNzZXQgPSBhd2FpdCBGZXRjaENoYWluKFwiZ2V0QXNzZXRcIiwgYXNzZXRPYmplY3RJZE9yU3ltYm9sKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhc3NldCA9IGFzc2V0T2JqZWN0SWRPclN5bWJvbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9fREVWX18pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJfc2V0U2VsbEFzc2V0XCIsIGFzc2V0T2JqZWN0SWRPclN5bWJvbCwgYXNzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQ6IGFjdGl2ZUlucHV0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQuZ2V0KFwic3ltYm9sXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5hc3NldFRvUmVjZWl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuYXNzZXRUb1JlY2VpdmUuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgX3NldFJlY2VpdmVBc3NldChcclxuICAgICAgICBhc3NldE9iamVjdElkT3JTeW1ib2wsXHJcbiAgICAgICAgYWN0aXZlSW5wdXQgPSBcInJlY2VpdmVBc3NldFwiLFxyXG4gICAgICAgIGZpcmVDaGFuZ2VkID0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGFzc2V0ID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mIGFzc2V0T2JqZWN0SWRPclN5bWJvbCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBhc3NldCA9IGF3YWl0IEZldGNoQ2hhaW4oXCJnZXRBc3NldFwiLCBhc3NldE9iamVjdElkT3JTeW1ib2wpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gYXNzZXRPYmplY3RJZE9yU3ltYm9sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX19ERVZfXykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIl9zZXRSZWNlaXZlQXNzZXRcIiwgYXNzZXRPYmplY3RJZE9yU3ltYm9sLCBhc3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0OiBhY3RpdmVJbnB1dFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZVRvKFxyXG4gICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5hc3NldFRvU2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuYXNzZXRUb1NlbGwuZ2V0KFwic3ltYm9sXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBhc3NldC5nZXQoXCJzeW1ib2xcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIF9zd2FwQXNzZXRzKGFjdGl2ZUlucHV0LCBmaXJlQ2hhbmdlZCA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxsQW1vdW50OlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0ID09PSBcInNlbGxBc3NldFwiID8gXCJcIiA6IHRoaXMuc3RhdGUucmVjZWl2ZUFtb3VudCxcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQgPT09IFwicmVjZWl2ZUFzc2V0XCIgPyBcIlwiIDogdGhpcy5zdGF0ZS5zZWxsQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5wdXQ6IGFjdGl2ZUlucHV0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZWNlaXZlQXNzZXQuZ2V0KFwic3ltYm9sXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsbEFzc2V0LmdldChcInN5bWJvbFwiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25TZWxsQXNzZXRJbnB1dENoYW5nZShhc3NldElkT3JTeW1ib2wpIHtcclxuICAgICAgICBjb25zdCB7cmVjZWl2ZUFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcblxyXG4gICAgICAgIGlmIChhc3NldElkT3JTeW1ib2wgPT09IHJlY2VpdmVBc3NldElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N3YXBBc3NldHMoXCJzZWxsQXNzZXRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0U2VsbEFzc2V0KGFzc2V0SWRPclN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2UoYXNzZXRJZE9yU3ltYm9sKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG5cclxuICAgICAgICBpZiAoYXNzZXRJZE9yU3ltYm9sID09PSBzZWxsQXNzZXRJZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zd2FwQXNzZXRzKFwicmVjZWl2ZUFzc2V0XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldFJlY2VpdmVBc3NldChhc3NldElkT3JTeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlY2VpdmVBc3NldFNlYXJjaChlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLm1vdW50ZWQpIHJldHVybjtcclxuICAgICAgICBsZXQgaXNWYWxpZE5hbWUgPSAhQ2hhaW5WYWxpZGF0aW9uLmlzX3ZhbGlkX3N5bWJvbF9lcnJvcihlLCB0cnVlKTtcclxuICAgICAgICBpZiAoIWlzVmFsaWROYW1lKSB7XHJcbiAgICAgICAgICAgIC8qIERvbid0IGxvb2t1cCBpbnZhbGlkIGFzc2V0IG5hbWVzICovXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQ6IGUsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTZWFyY2g6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWNlaXZlQXNzZXRJbnB1dCAhPT0gZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbG9va3VwQXNzZXRzKGUsIHRydWUsIHRoaXMuZ2V0QXNzZXRMaXN0LCB0aGlzLnNldFN0YXRlKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0FuZFVwZGF0ZU1hcmtldExpc3QobWFya2V0c0xpc3QpIHtcclxuICAgICAgICBsZXQgcmVjZWl2ZUFzc2V0cyA9IG1hcmtldHNMaXN0Lm1hcChhc3NldCA9PiBhc3NldC5pZCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgICAgIGNvbnN0IHtyZWNlaXZlQXNzZXRJbnB1dH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBhc3NldCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKENoYWluU3RvcmUuZ2V0QXNzZXQocmVjZWl2ZUFzc2V0SW5wdXQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0SWQgPSBDaGFpblN0b3JlLmdldEFzc2V0KHJlY2VpdmVBc3NldElucHV0KS5nZXQoXCJpZFwiKTtcclxuICAgICAgICAgICAgaWYgKHJlY2VpdmVBc3NldHMuaW5jbHVkZXMoYXNzZXRJZCkpIHtcclxuICAgICAgICAgICAgICAgIGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChyZWNlaXZlQXNzZXRJbnB1dCkuZ2V0KFwiaWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlY2VpdmVBc3NldHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGFzc2V0ID0gcmVjZWl2ZUFzc2V0c1swXTtcclxuICAgICAgICAgICAgY29uc3Qge2N1cnJlbnRBY2NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHMgPSBnZXRBc3NldHNUb1NlbGwoY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRzLnB1c2goYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVjZWl2ZUFzc2V0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3Qge2N1cnJlbnRBY2NvdW50fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHMgPSBnZXRBc3NldHNUb1NlbGwoY3VycmVudEFjY291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cyxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTZWFyY2g6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1YlRvTWFya2V0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGxBbW91bnRDaGFuZ2UoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5tb3VudGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGUuYXNzZXQgIT09IHRoaXMuc3RhdGUuc2VsbEFzc2V0SW5wdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNlbGxBc3NldElucHV0Q2hhbmdlKGUuYXNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxsQW1vdW50OiBlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUlucHV0OiBcInNlbGxcIixcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUFtb3VudElucHV0OiBcInNlbGxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRPcmRlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWNlaXZlQW1vdW50Q2hhbmdlKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUubW91bnRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChlLmFzc2V0ICE9PSB0aGlzLnN0YXRlLnJlY2VpdmVBc3NldElucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZShlLmFzc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudDogZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnB1dDogXCJyZWNlaXZlXCIsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVBbW91bnRJbnB1dDogXCJyZWNlaXZlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0T3JkZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsbEltYWdlRXJyb3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGxJbWdOYW1lOiBcInVua25vd25cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVjZWl2ZUltYWdlRXJyb3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHJlY2VpdmVJbWdOYW1lOiBcInVua25vd25cIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3dhcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N3YXBwYWJsZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N3YXBBc3NldHMoXCJuZWl0aGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJzY3JpcHRpb25Ub2dnbGVDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWRUb01hcmtldDogIXN0YXRlLmlzU3Vic2NyaWJlZFRvTWFya2V0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVuZGxlT3JkZXJWaWV3KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlclZpZXcgPSBzdGF0ZS5vcmRlclZpZXcgPT09IFwiYW1vdW50XCIgPyBcInRvdGFsXCIgOiBcImFtb3VudFwiO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb3JkZXJWaWV3XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VsbCgpIHtcclxuICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7c2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SWQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElkLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBjb25zdCBmb3JTYWxlID0gbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHNlbGxBc3NldElkLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgYW1vdW50OiBzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdG9SZWNlaXZlID0gbmV3IEFzc2V0KHtcclxuICAgICAgICAgICAgYXNzZXRfaWQ6IHJlY2VpdmVBc3NldElkLFxyXG4gICAgICAgICAgICBwcmVjaXNpb246IHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgYW1vdW50OiByZWNlaXZlQW1vdW50ICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gbmV3IExpbWl0T3JkZXJDcmVhdGUoe1xyXG4gICAgICAgICAgICBmb3Jfc2FsZTogZm9yU2FsZSxcclxuICAgICAgICAgICAgZXhwaXJhdGlvbjogZXhwaXJhdGlvblRpbWUsXHJcbiAgICAgICAgICAgIHRvX3JlY2VpdmU6IHRvUmVjZWl2ZSxcclxuICAgICAgICAgICAgc2VsbGVyOiBjdXJyZW50QWNjb3VudC5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgZmVlOiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbGxfb3Jfa2lsbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gTWFya2V0c0FjdGlvbnMuY3JlYXRlTGltaXRPcmRlcjIob3JkZXIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvci5tZXNzYWdlICE9PSBcIndhbGxldCBsb2NrZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGlmaWNhdGlvbnMuZXhjaGFuZ2VfdW5rbm93bl9lcnJvcl9wbGFjZV9vcmRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiByZWNlaXZlQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHJlY2VpdmVBc3NldElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm9yZGVyIGZhaWxlZDpcIiwgZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNlbGxBbW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge29yZGVycywgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKG9yZGVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsbEFtb3VudCA9IChcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVBbW91bnQgLyBvcmRlcnNbMF0ub3JkZXIuZ2V0UHJpY2UoKVxyXG4gICAgICAgICAgICApLnRvRml4ZWQoc2VsbEFzc2V0UHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxsQW1vdW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcmRlcnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXIgPSBvcmRlcnMuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBwZW51bHRpbWF0ZU9yZGVyID0gb3JkZXJzLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzLmxlbmd0aCAtIDIsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICApWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXJUb1JlY2VpdmUgPVxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbiAtXHJcbiAgICAgICAgICAgICAgICBwZW51bHRpbWF0ZU9yZGVyLm9yZGVyLnRvdGFsX2Zvcl9zYWxlLmdldEFtb3VudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0T3JkZXJGb3JTYWxlID1cclxuICAgICAgICAgICAgICAgICgobGFzdE9yZGVyVG9SZWNlaXZlIC8gbGFzdE9yZGVyLm9yZGVyLmdldFByaWNlKCkpICpcclxuICAgICAgICAgICAgICAgICAgICAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb24pIC9cclxuICAgICAgICAgICAgICAgIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvbjtcclxuICAgICAgICAgICAgY29uc3Qgc2VsbEFtb3VudCA9IChcclxuICAgICAgICAgICAgICAgIChwZW51bHRpbWF0ZU9yZGVyLm9yZGVyLnRvdGFsX3RvX3JlY2VpdmUuZ2V0QW1vdW50KCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RPcmRlckZvclNhbGUpIC9cclxuICAgICAgICAgICAgICAgIDEwICoqIHNlbGxBc3NldFByZWNpc2lvblxyXG4gICAgICAgICAgICApLnRvRml4ZWQoc2VsbEFzc2V0UHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxsQW1vdW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJlY2VpdmVBbW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge29yZGVycywgc2VsbEFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKG9yZGVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZUFtb3VudCA9IChcclxuICAgICAgICAgICAgICAgIG9yZGVyc1swXS5vcmRlci5nZXRQcmljZSgpICogc2VsbEFtb3VudFxyXG4gICAgICAgICAgICApLnRvRml4ZWQocmVjZWl2ZUFzc2V0UHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3JkZXJzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVyID0gb3JkZXJzLnNsaWNlKC0xKVswXTtcclxuICAgICAgICAgICAgY29uc3QgcGVudWx0aW1hdGVPcmRlciA9IG9yZGVycy5zbGljZShcclxuICAgICAgICAgICAgICAgIG9yZGVycy5sZW5ndGggLSAyLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgKVswXTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVyRm9yU2FsZSA9XHJcbiAgICAgICAgICAgICAgICBzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uIC1cclxuICAgICAgICAgICAgICAgIHBlbnVsdGltYXRlT3JkZXIub3JkZXIudG90YWxfdG9fcmVjZWl2ZS5nZXRBbW91bnQoKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVyVG9SZWNlaXZlID1cclxuICAgICAgICAgICAgICAgIChsYXN0T3JkZXJGb3JTYWxlICpcclxuICAgICAgICAgICAgICAgICAgICBsYXN0T3JkZXIub3JkZXIuZ2V0UHJpY2UoKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uKSAvXHJcbiAgICAgICAgICAgICAgICAxMCAqKiBzZWxsQXNzZXRQcmVjaXNpb247XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmVBbW91bnQgPSAoXHJcbiAgICAgICAgICAgICAgICAocGVudWx0aW1hdGVPcmRlci5vcmRlci50b3RhbF9mb3Jfc2FsZS5nZXRBbW91bnQoKSArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE9yZGVyVG9SZWNlaXZlKSAvXHJcbiAgICAgICAgICAgICAgICAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb25cclxuICAgICAgICAgICAgKS50b0ZpeGVkKHJlY2VpdmVBc3NldFByZWNpc2lvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1N3YXBwYWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJlQXNzZXRzR2l2ZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VHJhbnNhY3Rpb25GZWUoZGVub21pbmF0aW9uQXNzZXRJZCkge1xyXG4gICAgICAgIGNvbnN0IHtmZWVzLCBwcmljZXN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWR9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKGZlZXMpIHtcclxuICAgICAgICAgICAgaWYgKGZlZXMudHJhbnNhY3Rpb25GZWVbc2VsbEFzc2V0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIWRlbm9taW5hdGlvbkFzc2V0SWQgfHxcclxuICAgICAgICAgICAgICAgICAgICBkZW5vbWluYXRpb25Bc3NldElkID09PSBzZWxsQXNzZXRJZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlcy50cmFuc2FjdGlvbkZlZVtzZWxsQXNzZXRJZF0uZmVlLmFtb3VudCAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwICoqIGZlZXMudHJhbnNhY3Rpb25GZWVbc2VsbEFzc2V0SWRdLmZlZS5wcmVjaXNpb25cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmVlcy50cmFuc2FjdGlvbkZlZVtzZWxsQXNzZXRJZF0uZmVlLmFtb3VudCAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMCAqKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZXMudHJhbnNhY3Rpb25GZWVbc2VsbEFzc2V0SWRdLmZlZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlY2lzaW9uKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcy5sYXRlc3RQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ2V0TWFya2V0RmVlKGRlbm9taW5kYXRlZEFzc2V0SWQpIHtcclxuICAgICAgICBjb25zdCB7ZmVlcywgcHJpY2VzLCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge3JlY2VpdmVBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGlmIChmZWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICFkZW5vbWluZGF0ZWRBc3NldElkIHx8XHJcbiAgICAgICAgICAgICAgICBkZW5vbWluZGF0ZWRBc3NldElkID09PSByZWNlaXZlQXNzZXRJZFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoZmVlcy5tYXJrZXRGZWUuYmFzZU1hcmtldEZlZSAqIHJlY2VpdmVBbW91bnQpIC8gMTAwMDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIChmZWVzLm1hcmtldEZlZS5iYXNlTWFya2V0RmVlICogcmVjZWl2ZUFtb3VudCkgL1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlcy5sYXRlc3RQcmljZSAvXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwMDBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEZlZVBlcmNlbnQoZmVlQW1vdW50LCB0b3RhbEFtb3VudCkge1xyXG4gICAgICAgIHJldHVybiArdG90YWxBbW91bnQgPyAoK3RvdGFsQW1vdW50ICsgK2ZlZUFtb3VudCkgLyB0b3RhbEFtb3VudCAtIDEgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc3Qge3N1Yn0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmICghc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qge3NlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElkLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRJZCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFN5bWJvbFxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuICAgICAgICBjb25zdCBwcmljZVNlY3Rpb24gPSB0aGlzLmdldFByaWNlU2VjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlRXh0cmEgPSAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmVmZmVjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3NlbGxBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17c2VsbEFtb3VudCAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e3JlY2VpdmVBbW91bnQgKiAxMCAqKiByZWNlaXZlQXNzZXRQcmVjaXNpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VfZGlyZWN0aW9uPXtyZWNlaXZlQXNzZXRTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9JbnZlcnRUaXBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBmZWVTZWN0aW9uID0gdGhpcy5nZXRGZWVTZWN0aW9uKCk7XHJcbiAgICAgICAgY29uc3Qgb3JkZXJzU2VjdGlvbiA9IHRoaXMuZ2V0T3JkZXJzU2VjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsUGVyY2VudEZlZSA9XHJcbiAgICAgICAgICAgIGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuZWZmZWN0aXZlXCIpICtcclxuICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAodGhpcy5nZXRUb3RhbFBlcmNlbnRGZWUoKSAqIDEwMCkudG9GaXhlZCgyKTtcclxuICAgICAgICBjb25zdCBhbW91bnRPZk9yZGVycyA9IHRoaXMuc3RhdGUub3JkZXJzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBvcmRlcnNDYXB0aW9uID1cclxuICAgICAgICAgICAgYW1vdW50T2ZPcmRlcnMgPCAyXHJcbiAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMub3JkZXJcIilcclxuICAgICAgICAgICAgICAgIDogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5vcmRlcnNcIik7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbGxhcHNlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhc3NldC1jb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZS5QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucHJpY2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e3ByaWNlRXh0cmF9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ByaWNlU2VjdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2UuUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UuUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLmZlZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17YCR7dG90YWxQZXJjZW50RmVlfSVgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmZWVTZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZS5QYW5lbD5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZS5QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2Uub3JkZXJzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50T2ZPcmRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7YW1vdW50T2ZPcmRlcnN9ICR7b3JkZXJzQ2FwdGlvbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm8gb3JkZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29yZGVyc1NlY3Rpb259XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlLlBhbmVsPlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RldGFpbHMoKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldCwgcmVjZWl2ZUFzc2V0LCBzZWxsQW1vdW50LCByZWNlaXZlQW1vdW50fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIHNlbGxBc3NldCAmJiByZWNlaXZlQXNzZXQgJiYgK3NlbGxBbW91bnQgJiYgK3JlY2VpdmVBbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0ZlZWRQcmljZSgpIHtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0LCByZWNlaXZlQXNzZXR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWQsIHJlY2VpdmVBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIGNvbnN0IHJlY2VpdmVDb2xsYXRlcmFsQXNzZXQgPSByZWNlaXZlQXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgIFwib3B0aW9uc1wiLFxyXG4gICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGNvbnN0IHNlbGxDb2xsYXRlcmFsQXNzZXQgPSBzZWxsQXNzZXQuZ2V0SW4oW1xyXG4gICAgICAgICAgICBcImJpdGFzc2V0XCIsXHJcbiAgICAgICAgICAgIFwib3B0aW9uc1wiLFxyXG4gICAgICAgICAgICBcInNob3J0X2JhY2tpbmdfYXNzZXRcIlxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHJlY2VpdmVDb2xsYXRlcmFsQXNzZXQgPT09IHNlbGxBc3NldElkIHx8XHJcbiAgICAgICAgICAgIHNlbGxDb2xsYXRlcmFsQXNzZXQgPT09IHJlY2VpdmVBc3NldElkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmljZVNlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qge3ByaWNlcywgc2VsbEFtb3VudCwgcmVjZWl2ZUFtb3VudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SWQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElkLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRQcmVjaXNpb24sXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0U3ltYm9sXHJcbiAgICAgICAgfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnlvdXJfcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnNob3dGZWVkUHJpY2UoKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5mZWVkX3ByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5sYXN0X3ByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gc3R5bGU9e3t0ZXh0QWxpZ246IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cmVjZWl2ZUFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17c2VsbEFtb3VudCAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFtb3VudCAqIDEwICoqIHJlY2VpdmVBc3NldFByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Qb3BPdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e3JlY2VpdmVBc3NldFN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vSW52ZXJ0VGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc2hvd0ZlZWRQcmljZSgpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3NlbGxBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17MSAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hbW91bnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXMuZmVlZFByaWNlICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vUG9wT3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlX2RpcmVjdGlvbj17cmVjZWl2ZUFzc2V0U3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vSW52ZXJ0VGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZV9hc3NldD17c2VsbEFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZV9hc3NldD17cmVjZWl2ZUFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlX2Ftb3VudD17MSAqIDEwICoqIHNlbGxBc3NldFByZWNpc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlX2Ftb3VudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzLmxhdGVzdFByaWNlICogMTAgKiogcmVjZWl2ZUFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlX2RpcmVjdGlvbj17cmVjZWl2ZUFzc2V0U3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9JbnZlcnRUaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZlZVNlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0UHJlY2lzaW9uLFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRTeW1ib2wsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldFN5bWJvbFxyXG4gICAgICAgIH0gPSB0aGlzLmdldEFzc2V0c0RldGFpbHMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25GZWUgPSB0aGlzLl9nZXRUcmFuc2FjdGlvbkZlZSgpLnRvRml4ZWQoXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvblxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25GZWVQZXJjZW50ID0gKFxyXG4gICAgICAgICAgICB0aGlzLl9nZXRGZWVQZXJjZW50KHRoaXMuX2dldFRyYW5zYWN0aW9uRmVlKCksIHNlbGxBbW91bnQpICogMTAwXHJcbiAgICAgICAgKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGNvbnN0IG1hcmtldEZlZSA9IHRoaXMuX2dldE1hcmtldEZlZSgpLnRvRml4ZWQocmVjZWl2ZUFzc2V0UHJlY2lzaW9uKTtcclxuICAgICAgICBjb25zdCBtYXJrZXRGZWVQZXJjZW50ID0gKFxyXG4gICAgICAgICAgICB0aGlzLl9nZXRGZWVQZXJjZW50KHRoaXMuX2dldE1hcmtldEZlZSgpLCByZWNlaXZlQW1vdW50KSAqIDEwMFxyXG4gICAgICAgICkudG9GaXhlZCgyKTtcclxuXHJcbiAgICAgICAgbGV0IFtcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5TWFya2V0LFxyXG4gICAgICAgICAgICBsaXFpZGl0eVBlbmFsdHlGZWVkXHJcbiAgICAgICAgXSA9IHRoaXMuZ2V0TGlxdWlkaXR5UGVuYWx0eSgpO1xyXG4gICAgICAgIGlmIChsaXFpZGl0eVBlbmFsdHlNYXJrZXQgfHwgbGlxaWRpdHlQZW5hbHR5TWFya2V0ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxpcWlkaXR5UGVuYWx0eU1hcmtldCA9XHJcbiAgICAgICAgICAgICAgICAobGlxaWRpdHlQZW5hbHR5TWFya2V0ICogMTAwKS50b0ZpeGVkKDIpICsgXCIlXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5TWFya2V0ID0gXCItXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsaXFpZGl0eVBlbmFsdHlGZWVkIHx8IGxpcWlkaXR5UGVuYWx0eUZlZWQgPT09IDApIHtcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5RmVlZCA9IChsaXFpZGl0eVBlbmFsdHlGZWVkICogMTAwKS50b0ZpeGVkKDIpICsgXCIlXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlxaWRpdHlQZW5hbHR5RmVlZCA9IFwiLVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsaXFpZGl0eVBlbmFsdHkgPSB0aGlzLnNob3dGZWVkUHJpY2UoKVxyXG4gICAgICAgICAgICA/IGAke2xpcWlkaXR5UGVuYWx0eU1hcmtldH0gLyAke2xpcWlkaXR5UGVuYWx0eUZlZWR9YFxyXG4gICAgICAgICAgICA6IGxpcWlkaXR5UGVuYWx0eU1hcmtldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMubGlxdWlkaXR5X3BlbmFsdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMubWFya2V0X2ZlZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7bWFya2V0RmVlUGVyY2VudH0lYH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnRyYW5zYWN0aW9uX2ZlZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgICR7dHJhbnNhY3Rpb25GZWVQZXJjZW50fSVgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57bGlxaWRpdHlQZW5hbHR5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXJrZXRGZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3JlY2VpdmVBc3NldFN5bWJvbH0gbm9UaXAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25GZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3NlbGxBc3NldFN5bWJvbH0gbm9UaXAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9yZGVyc1NlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qge29yZGVycywgb3JkZXJWaWV3fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBzZWxsQXNzZXRJZCxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SWQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldFByZWNpc2lvbixcclxuICAgICAgICAgICAgc2VsbEFzc2V0U3ltYm9sLFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXRTeW1ib2xcclxuICAgICAgICB9ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IG9yZGVycy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGl0ZW0ub3JkZXIuaWQsXHJcbiAgICAgICAgICAgICAgICBpZDogaXRlbS5vcmRlci5pZCxcclxuICAgICAgICAgICAgICAgIHNlbGxlcjogPExpbmtUb0FjY291bnRCeUlkIGFjY291bnQ9e2l0ZW0ub3JkZXIuc2VsbGVyfSAvPixcclxuICAgICAgICAgICAgICAgIGFtb3VudDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oZW5kbGVPcmRlclZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b3JkZXJWaWV3ID09PSBcImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uYW1vdW50IC8gMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0udG90YWxfYW1vdW50IC8gMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFtb3VudCA9IChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7b3JkZXJWaWV3ID09PSBcImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLmFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjb3VudGVycGFydC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnRvdGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAmbmJzcDsoXHJcbiAgICAgICAgICAgICAgICA8QXNzZXROYW1lIG5hbWU9e3NlbGxBc3NldFN5bWJvbH0gbm9UaXAgLz4pXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBwcmljZSA9IChcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5wcmljZVwiKX1cclxuICAgICAgICAgICAgICAgICZuYnNwOyhcclxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VfYXNzZXQ9e3NlbGxBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlX2Fzc2V0PXtyZWNlaXZlQXNzZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICBub1BvcE92ZXJcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZV9kaXJlY3Rpb249e3JlY2VpdmVBc3NldFN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICBub0ludmVydFRpcFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVfdmFsdWVcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5pZFwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAga2V5OiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMCVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY291bnRlcnBhcnQudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZXhjaGFuZ2UucXVpY2tfdHJhZGVfZGV0YWlscy5zZWxsZXJcIlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJzZWxsZXJcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJzZWxsZXJcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwJVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIzMCVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBkYXRhSW5kZXg6IFwicHJpY2VcIixcclxuICAgICAgICAgICAgICAgIGtleTogXCJwcmljZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdWJzY3JpcHRpb25Ub2dnbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5pc1N1YnNjcmliZWRUb01hcmtldH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5vcmRlcnNVcGRhdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxvYXQ6IFwicmlnaHRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRlcnBhcnQubG9jYWxpemUodGhpcy5zdGF0ZS5vcmRlcnNVcGRhdGVkKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJzY3JpcHRpb25Ub2dnbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMuc3Vic2NyaWJlX3RvX21hcmtldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UubGVuZ3RoID4gNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXF1aWRpdHlQZW5hbHR5KCkge1xyXG4gICAgICAgIGNvbnN0IHtwcmljZXMsIHNlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBwcmljZSA9IHJlY2VpdmVBbW91bnQgLyBzZWxsQW1vdW50O1xyXG4gICAgICAgIGNvbnN0IG1hcmtldFByaWNlID0gcHJpY2VzLmxhdGVzdFByaWNlO1xyXG4gICAgICAgIGNvbnN0IGZlZWRQcmljZSA9IHByaWNlcy5mZWVkUHJpY2U7XHJcbiAgICAgICAgbGV0IGxpcXVpZGl0eUZlZTEsIGxpcXVpZGl0eUZlZTI7XHJcbiAgICAgICAgaWYgKHByaWNlICYmIG1hcmtldFByaWNlKSB7XHJcbiAgICAgICAgICAgIGxpcXVpZGl0eUZlZTEgPSBNYXRoLm1heChcclxuICAgICAgICAgICAgICAgIDEgLSBwcmljZSAvIG1hcmtldFByaWNlLFxyXG4gICAgICAgICAgICAgICAgMSAtIG1hcmtldFByaWNlIC8gcHJpY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByaWNlICYmIGZlZWRQcmljZSkge1xyXG4gICAgICAgICAgICBsaXF1aWRpdHlGZWUyID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICAxIC0gcHJpY2UgLyBmZWVkUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAxIC0gZmVlZFByaWNlIC8gcHJpY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtsaXF1aWRpdHlGZWUxLCBsaXF1aWRpdHlGZWUyXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb3RhbFBlcmNlbnRGZWUoKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBbW91bnQsIHJlY2VpdmVBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkZlZVBlcmNlbnQgPSB0aGlzLl9nZXRGZWVQZXJjZW50KFxyXG4gICAgICAgICAgICB0aGlzLl9nZXRUcmFuc2FjdGlvbkZlZSgpLFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBtYXJrZXRGZWVQZXJjZW50ID0gdGhpcy5fZ2V0RmVlUGVyY2VudChcclxuICAgICAgICAgICAgdGhpcy5fZ2V0TWFya2V0RmVlKCksXHJcbiAgICAgICAgICAgIHJlY2VpdmVBbW91bnRcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGxpcXVpZGl0eUZlZSA9IHRoaXMuZ2V0TGlxdWlkaXR5UGVuYWx0eSgpWzBdO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkZlZVBlcmNlbnQgKyBtYXJrZXRGZWVQZXJjZW50ICsgbGlxdWlkaXR5RmVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0JhbGFuY2UoKSB7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBbW91bnR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7Y3VycmVudEFjY291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBhY2NvdW50QmFsYW5jZXMgPSBjdXJyZW50QWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKS50b0pTKCk7XHJcbiAgICAgICAgY29uc3Qge3NlbGxBc3NldElkLCBzZWxsQXNzZXRQcmVjaXNpb259ID0gdGhpcy5nZXRBc3NldHNEZXRhaWxzKCk7XHJcbiAgICAgICAgaWYgKCFhY2NvdW50QmFsYW5jZXNbc2VsbEFzc2V0SWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFsYW5jZSA9IENoYWluU3RvcmUuZ2V0T2JqZWN0KGFjY291bnRCYWxhbmNlc1tzZWxsQXNzZXRJZF0pLmdldChcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uRmVlID0gdGhpcy5fZ2V0VHJhbnNhY3Rpb25GZWUoKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50ICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uICtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uRmVlICogMTAgKiogc2VsbEFzc2V0UHJlY2lzaW9uIDxcclxuICAgICAgICAgICAgK2JhbGFuY2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHNlbGxBc3NldElucHV0LFxyXG4gICAgICAgICAgICBzZWxsQXNzZXRzLFxyXG4gICAgICAgICAgICBzZWxsQW1vdW50LFxyXG4gICAgICAgICAgICBzZWxsSW1nTmFtZSxcclxuICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHMsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBbW91bnQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVJbWdOYW1lLFxyXG4gICAgICAgICAgICBzdWJcclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7c2VsbEFzc2V0SWQsIHJlY2VpdmVBc3NldElkfSA9IHRoaXMuZ2V0QXNzZXRzRGV0YWlscygpO1xyXG5cclxuICAgICAgICBjb25zdCBEZXRhaWxzID0gdGhpcy5zaG93RGV0YWlscygpID8gdGhpcy5nZXREZXRhaWxzKCkgOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVpY2stdHJhZGVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxcmVtXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTZWxsUmVjZWl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxBc3NldElucHV0PXtzZWxsQXNzZXRJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxsQXNzZXQ9e3NlbGxBc3NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGxBc3NldHM9e3NlbGxBc3NldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbEFtb3VudD17c2VsbEFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxsSW1nTmFtZT17c2VsbEltZ05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxsQXNzZXRJbnB1dENoYW5nZT17dGhpcy5vblNlbGxBc3NldElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsbEFtb3VudENoYW5nZT17dGhpcy5vblNlbGxBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0SW5wdXQ9e3JlY2VpdmVBc3NldElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVBc3NldD17cmVjZWl2ZUFzc2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUFzc2V0cz17cmVjZWl2ZUFzc2V0c31cclxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlQW1vdW50PXtyZWNlaXZlQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVJbWdOYW1lPXtyZWNlaXZlSW1nTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvblJlY2VpdmVBc3NldElucHV0Q2hhbmdlPXt0aGlzLm9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWNlaXZlQW1vdW50Q2hhbmdlPXt0aGlzLm9uUmVjZWl2ZUFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvblJlY2VpdmVBc3NldFNlYXJjaD17dGhpcy5vblJlY2VpdmVBc3NldFNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICBvblN3YXA9e3RoaXMub25Td2FwfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzU3dhcHBhYmxlPXt0aGlzLmlzU3dhcHBhYmxlKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge0RldGFpbHN9XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5oYXNCYWxhbmNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLm5vX2JhbGFuY2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwic2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc2hvd0RldGFpbHMoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzdWIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5oYXNCYWxhbmNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImV4Y2hhbmdlLnNlbGxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuUXVpY2tUcmFkZSA9IGNvbm5lY3QoXHJcbiAgICBRdWlja1RyYWRlLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0Fzc2V0U3RvcmUsIE1hcmtldHNTdG9yZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaEFzc2V0czogQXNzZXRTdG9yZS5nZXRTdGF0ZSgpLmFzc2V0cyxcclxuICAgICAgICAgICAgICAgIGFzc2V0c0xvYWRpbmc6IEFzc2V0U3RvcmUuZ2V0U3RhdGUoKS5hc3NldHNMb2FkaW5nLFxyXG4gICAgICAgICAgICAgICAgbWFya2V0RGF0YTogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkubWFya2V0RGF0YSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZU1hcmtldEhpc3Rvcnk6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZU1hcmtldEhpc3RvcnksXHJcbiAgICAgICAgICAgICAgICBidWNrZXRTaXplOiBNYXJrZXRzU3RvcmUuZ2V0U3RhdGUoKS5idWNrZXRTaXplLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3JkZXJMaW1pdDogTWFya2V0c1N0b3JlLmdldFN0YXRlKClcclxuICAgICAgICAgICAgICAgICAgICAuY3VycmVudEdyb3VwT3JkZXJMaW1pdCxcclxuICAgICAgICAgICAgICAgIGZlZWRQcmljZTogTWFya2V0c1N0b3JlLmdldFN0YXRlKCkuZmVlZFByaWNlLFxyXG4gICAgICAgICAgICAgICAgbWFya2V0TGltaXRPcmRlcnM6IE1hcmtldHNTdG9yZS5nZXRTdGF0ZSgpLm1hcmtldExpbWl0T3JkZXJzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFF1aWNrVHJhZGUgPSBiaW5kVG9DdXJyZW50QWNjb3VudChRdWlja1RyYWRlKSk7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBbW91bnRTZWxlY3RvcjMgZnJvbSBcIi4uL1V0aWxpdHkvQW1vdW50U2VsZWN0b3IzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL0ljb24vSWNvblwiO1xyXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tIFwiYml0c2hhcmVzLXVpLXN0eWxlLWd1aWRlXCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuXHJcbmNsYXNzIFNlbGxSZWNlaXZlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgc2VsbEFzc2V0SW5wdXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc2VsbEFzc2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNlbGxBc3NldHM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBzZWxsQW1vdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHNlbGxJbWdOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHJlY2VpdmVBc3NldElucHV0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIHJlY2VpdmVBc3NldDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICByZWNlaXZlQXNzZXRzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgICAgcmVjZWl2ZUFtb3VudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICByZWNlaXZlSW1nTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBvblNlbGxBc3NldElucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uU2VsbEFtb3VudENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBvblJlY2VpdmVBc3NldElucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG9uUmVjZWl2ZUFtb3VudENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBvblN3YXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaXNTd2FwcGFibGU6IFByb3BUeXBlcy5ib29sXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBzbWFsbFNjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoIDwgODUwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgc2VsbEFzc2V0SW5wdXQsXHJcbiAgICAgICAgICAgIHNlbGxBc3NldCxcclxuICAgICAgICAgICAgc2VsbEFzc2V0cyxcclxuICAgICAgICAgICAgc2VsbEFtb3VudCxcclxuICAgICAgICAgICAgc2VsbEltZ05hbWUsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldElucHV0LFxyXG4gICAgICAgICAgICByZWNlaXZlQXNzZXQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBc3NldHMsXHJcbiAgICAgICAgICAgIHJlY2VpdmVBbW91bnQsXHJcbiAgICAgICAgICAgIHJlY2VpdmVJbWdOYW1lLFxyXG4gICAgICAgICAgICBvblNlbGxBc3NldElucHV0Q2hhbmdlLFxyXG4gICAgICAgICAgICBvblNlbGxBbW91bnRDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uUmVjZWl2ZUFzc2V0SW5wdXRDaGFuZ2UsXHJcbiAgICAgICAgICAgIG9uUmVjZWl2ZUFtb3VudENoYW5nZSxcclxuICAgICAgICAgICAgb25SZWNlaXZlQXNzZXRTZWFyY2gsXHJcbiAgICAgICAgICAgIG9uU3dhcCxcclxuICAgICAgICAgICAgaXNTd2FwcGFibGVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsbFNlbGVjdG9yID0gKFxyXG4gICAgICAgICAgICA8QW1vdW50U2VsZWN0b3IzXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17XCJleGNoYW5nZS5zZWxsXCJ9XHJcbiAgICAgICAgICAgICAgICBhc3NldElucHV0PXtzZWxsQXNzZXRJbnB1dH1cclxuICAgICAgICAgICAgICAgIGFzc2V0PXtzZWxsQXNzZXR9XHJcbiAgICAgICAgICAgICAgICBhc3NldHM9e3NlbGxBc3NldHN9XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e3NlbGxBbW91bnR9XHJcbiAgICAgICAgICAgICAgICBvbkFzc2V0SW5wdXRDaGFuZ2U9e29uU2VsbEFzc2V0SW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkFtb3VudENoYW5nZT17b25TZWxsQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgaW1nTmFtZT17c2VsbEltZ05hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJleGNoYW5nZS5xdWlja190cmFkZV9kZXRhaWxzLnBsYWNlaG9sZGVyX3NlbGxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByZWNlaXZlU2VsZWN0b3IgPSAoXHJcbiAgICAgICAgICAgIDxBbW91bnRTZWxlY3RvcjNcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtcImV4Y2hhbmdlLnJlY2VpdmVcIn1cclxuICAgICAgICAgICAgICAgIGFzc2V0SW5wdXQ9e3JlY2VpdmVBc3NldElucHV0fVxyXG4gICAgICAgICAgICAgICAgYXNzZXQ9e3JlY2VpdmVBc3NldH1cclxuICAgICAgICAgICAgICAgIGFzc2V0cz17cmVjZWl2ZUFzc2V0c31cclxuICAgICAgICAgICAgICAgIGFtb3VudD17cmVjZWl2ZUFtb3VudH1cclxuICAgICAgICAgICAgICAgIG9uQXNzZXRJbnB1dENoYW5nZT17b25SZWNlaXZlQXNzZXRJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtvblJlY2VpdmVBc3NldFNlYXJjaH1cclxuICAgICAgICAgICAgICAgIG9uQW1vdW50Q2hhbmdlPXtvblJlY2VpdmVBbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpbWdOYW1lPXtyZWNlaXZlSW1nTmFtZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcImV4Y2hhbmdlLnF1aWNrX3RyYWRlX2RldGFpbHMucGxhY2Vob2xkZXJfcmVjZWl2ZVwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0blN0eWxlID0ge1xyXG4gICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1N3YXBwYWJsZSkge1xyXG4gICAgICAgICAgICBidG5TdHlsZS5vcGFjaXR5ID0gMC4xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3dhcEJ1dHRvbiA9IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17YnRuU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJ4XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFzbWFsbFNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiM3JlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN3YXB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3NtYWxsU2NyZWVuID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+e3NlbGxTZWxlY3Rvcn08L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz57c3dhcEJ1dHRvbn08L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz57cmVjZWl2ZVNlbGVjdG9yfTwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEwfT57c2VsbFNlbGVjdG9yfTwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezR9Pntzd2FwQnV0dG9ufTwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEwfT57cmVjZWl2ZVNlbGVjdG9yfTwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsbFJlY2VpdmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7Um93LCBDb2wsIFRvb2x0aXB9IGZyb20gXCJiaXRzaGFyZXMtdWktc3R5bGUtZ3VpZGVcIjtcclxuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuLi9VdGlsaXR5L0Ftb3VudFNlbGVjdG9yU3R5bGVHdWlkZVwiO1xyXG5cclxuaW1wb3J0IENoYWluU2VsZWN0IGZyb20gXCIuL0NoYWluU2VsZWN0XCI7XHJcblxyXG5jbGFzcyBBbW91bnRTZWxlY3RvcjMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBhc3NldElucHV0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGFzc2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGFzc2V0czogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIGFtb3VudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgb25Bc3NldElucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBvbkFtb3VudENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgb25JbWFnZUVycm9yOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgaW1nTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBwbGFjZWhvbGRlckFtb3VudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICBpbWdOYW1lOiBcInVua25vd25cIixcclxuICAgICAgICBwbGFjZWhvbGRlckFtb3VudDogXCIwLjBcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbWFnZUVycm9yOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhIXRoaXMucHJvcHMuaW1nTmFtZSAmJlxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmltZ05hbWUgIT09IHByZXZQcm9wcy5pbWdOYW1lICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW1nTmFtZSAhPT0gXCJ1bmtub3duXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25JbWFnZUVycm9yKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbWFnZUVycm9yOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBhc3NldElucHV0LFxyXG4gICAgICAgICAgICBhc3NldCxcclxuICAgICAgICAgICAgYXNzZXRzLFxyXG4gICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgIG9uQXNzZXRJbnB1dENoYW5nZSxcclxuICAgICAgICAgICAgb25TZWFyY2gsXHJcbiAgICAgICAgICAgIG9uQW1vdW50Q2hhbmdlLFxyXG4gICAgICAgICAgICBpbWdOYW1lLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJBbW91bnQsXHJcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmltYWdlRXJyb3IpIHtcclxuICAgICAgICAgICAgaW1nTmFtZSA9IFwidW5rbm93blwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWxUZXh0ID0gKFxyXG4gICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoYWluU2VsZWN0b3IgPSA8Q2hhaW5TZWxlY3QgLz47XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMC41cmVtXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLm9uSW1hZ2VFcnJvci5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBhbW91bnRTZWxlY3RvciA9IChcclxuICAgICAgICAgICAgPEFtb3VudFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25BbW91bnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgIGFzc2V0PXthc3NldH1cclxuICAgICAgICAgICAgICAgIGFzc2V0cz17YXNzZXRzfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyQW1vdW50fVxyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFtb3VudC1zZWxlY3Rvci0yXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMy41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWxUZXh0fVxyXG4gICAgICAgICAgICAgICAgPFJvd1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjE4cmVtXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjMuNXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW49ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxOX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPXt0b29sdGlwVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW5TZWxlY3Rvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YW1vdW50U2VsZWN0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW1vdW50U2VsZWN0b3IzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQge1NlbGVjdH0gZnJvbSBcImJpdHNoYXJlcy11aS1zdHlsZS1ndWlkZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7TWFwfSBmcm9tIFwiaW1tdXRhYmxlXCI7XHJcblxyXG5jbGFzcyBDaGFpblNlbGVjdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBjaGFpbnM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBzZWxlY3RTdHlsZTogUHJvcFR5cGVzLm9iamVjdFxyXG5cclxuICAgICAgICAvLyBhbGwgb3RoZXIgcHJvcHMgYXJlIHBhc3NlZCB0byB0aGUgU2VsZWN0IGNvbXBvbmVudFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGNoYWluczogW1wiQml0U2hhcmVzIEJsb2NrY2hhaW5cIl0sXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICAgICAgc3R5bGU6IHt9LFxyXG4gICAgICAgIHNlbGVjdFN0eWxlOiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgY2hhaW5zLFxyXG4gICAgICAgICAgICBzZWxlY3RTdHlsZSxcclxuICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIC4uLnJlbVByb3BzXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc2FibGVTZWxlY3QgPVxyXG4gICAgICAgICAgICBjaGFpbnMuZmlsdGVyKE1hcC5pc01hcCkubGVuZ3RoIDw9IDEgJiYgIW9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlO1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gY2hhaW5zWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgb25Ecm9wZG93blZpc2libGVDaGFuZ2UgZ2l2ZW4gd2UgYXNzdW1lIHRoYXQgbGF6eSBsb2FkaW5nIHRha2VzIHBsYWNlXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gKFxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17b25Ecm9wZG93blZpc2libGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2Rpc2FibGVTZWxlY3QgPyBmYWxzZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzZWxlY3RTdHlsZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgfHwgXCJ1dGlsaXR5LmFzc2V0X3NlbGVjdF9wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgey4uLnJlbVByb3BzfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD1cImNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KGlucHV0LCBvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmtleS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPj0gMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9e2NvdW50ZXJwYXJ0LnRyYW5zbGF0ZShcImdsb2JhbC5ub3RfZm91bmRcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGFpbnMuZmlsdGVyKE1hcC5pc01hcCkubWFwKGNoYWluID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e2NoYWlufSB2YWx1ZT17Y2hhaW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNoYWluLXNlbGVjdFwifSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhaW5TZWxlY3RWaWV3O1xyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xyXG5pbXBvcnQge2NoZWNrRmVlU3RhdHVzQXN5bmN9IGZyb20gXCJjb21tb24vdHJ4SGVscGVyXCI7XHJcblxyXG4vLyBSZXR1cm5zIGEgbGlzdCBvZiBkaWN0cyB3aXRoIGtleXMgaWQsIHNlbGxlciBhbW91bnQgYW5kIHByaWNlIGFuZCByZXNwZWN0aXZlIHZhbHVlc1xyXG5mdW5jdGlvbiBnZXRPcmRlcnMoYW1vdW50LCBvcmRlcnMsIHdoYXRBbW91bnQpIHtcclxuICAgIGNvbnN0IG1hdGNoZWRPcmRlcnMgPSBbXTtcclxuICAgIGxldCB0b3RhbEFtb3VudDtcclxuICAgIG9yZGVycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGIuZ2V0UHJpY2UoKSAtIGEuZ2V0UHJpY2UoKTsgLy8gZ2V0UHJpY2UgPT09IF9yZWFsX3ByaWNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChtYXRjaGVkT3JkZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtYXRjaGVkT3JkZXJzLmZvckVhY2goKHtvcmRlcn0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50ID1cclxuICAgICAgICAgICAgICAgICAgICB3aGF0QW1vdW50ID09PSBcInJlY2VpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG9yZGVyLnRvdGFsX2Zvcl9zYWxlLmdldEFtb3VudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogb3JkZXIudG90YWxfdG9fcmVjZWl2ZS5nZXRBbW91bnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG90YWxBbW91bnQgPj0gYW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZWRPcmRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG9yZGVyc1tpXSxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG9yZGVyc1tpXS5hbW91bnRUb1JlY2VpdmUoKS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxfYW1vdW50OiBvcmRlcnNbaV0udG90YWxfdG9fcmVjZWl2ZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IG9yZGVyc1tpXS5nZXRQcmljZSgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoZWRPcmRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogb3JkZXJzW2ldLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBvcmRlcnNbaV0uYW1vdW50VG9SZWNlaXZlKCkuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdG90YWxfYW1vdW50OiBvcmRlcnNbaV0udG90YWxfdG9fcmVjZWl2ZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogb3JkZXJzW2ldLmdldFByaWNlKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtYXRjaGVkT3JkZXJzO1xyXG59XHJcblxyXG4vLyBSZXR1cm5zIGEgZGljdCB3aXRoIGtleXMgZmVlZFByaWNlIGFuZCBsYXN0UHJpY2VcclxuZnVuY3Rpb24gZ2V0UHJpY2VzKGFjdGl2ZU1hcmtldEhpc3RvcnksIGZlZWRQcmljZSkge1xyXG4gICAgbGV0IGxhdGVzdFByaWNlO1xyXG4gICAgaWYgKGFjdGl2ZU1hcmtldEhpc3Rvcnkuc2l6ZSkge1xyXG4gICAgICAgIGNvbnN0IGxhdGVzdF90d28gPSBhY3RpdmVNYXJrZXRIaXN0b3J5LnRha2UoMik7XHJcbiAgICAgICAgY29uc3QgbGF0ZXN0ID0gbGF0ZXN0X3R3by5maXJzdCgpO1xyXG4gICAgICAgIGxhdGVzdFByaWNlID0gbGF0ZXN0LmdldFByaWNlKCk7XHJcbiAgICB9XHJcbiAgICAvLyBmZWVkIHByaWNlID09PSBudWxsIGlmIG5vdCBhIGJpdGFzc2V0IG1hcmtldFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsYXRlc3RQcmljZTogbGF0ZXN0UHJpY2UgPyBsYXRlc3RQcmljZSA6IG51bGwsXHJcbiAgICAgICAgZmVlZFByaWNlOiBmZWVkUHJpY2UgPyBmZWVkUHJpY2UudG9SZWFsKCkgOiBmZWVkUHJpY2VcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYSBsaXN0IG9mIGFzc2V0IGlkcyB0aGF0IHRoZSB1c2VyIGNhbiBzZWxsXHJcbmZ1bmN0aW9uIGdldEFzc2V0c1RvU2VsbChhY2NvdW50KSB7XHJcbiAgICBsZXQgYXNzZXRUeXBlcyA9IFtdO1xyXG5cclxuICAgIGlmICghKGFjY291bnQgJiYgYWNjb3VudC5nZXQoXCJiYWxhbmNlc1wiKSkpIHtcclxuICAgICAgICByZXR1cm4gYXNzZXRUeXBlcztcclxuICAgIH1cclxuICAgIGxldCBhY2NvdW50QmFsYW5jZXMgPSBhY2NvdW50LmdldChcImJhbGFuY2VzXCIpLnRvSlMoKTtcclxuXHJcbiAgICBhc3NldFR5cGVzID0gT2JqZWN0LmtleXMoYWNjb3VudEJhbGFuY2VzKS5zb3J0KHV0aWxzLnNvcnRJRCk7XHJcblxyXG4gICAgZm9yIChsZXQga2V5IGluIGFjY291bnRCYWxhbmNlcykge1xyXG4gICAgICAgIGxldCBiYWxhbmNlT2JqZWN0ID0gQ2hhaW5TdG9yZS5nZXRPYmplY3QoYWNjb3VudEJhbGFuY2VzW2tleV0pO1xyXG4gICAgICAgIGlmIChiYWxhbmNlT2JqZWN0ICYmIGJhbGFuY2VPYmplY3QuZ2V0KFwiYmFsYW5jZVwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBhc3NldFR5cGVzLnNwbGljZShhc3NldFR5cGVzLmluZGV4T2Yoa2V5KSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhc3NldFR5cGVzO1xyXG59XHJcblxyXG4vLyBSZXR1cm5zIGEgZGljdCB3aXRoIGtleXMgbGlxdWlkaXR5UGVuYWx0eSwgbWFya2V0RmVlIGFuZCB0cmFuc2FjdGlvbkZlZSwgaW5wdXQgaXMgc2VsZWN0ZWQgYXNzZXRzIGFuZCBhbW91bnRzXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEZlZXMoYmFzZUFzc2V0LCBxdW90ZUFzc2V0LCBjdXJyZW50QWNjb3VudCkge1xyXG4gICAgY29uc3QgYmFzZU1hcmtldEZlZVBlcmNlbnQgPVxyXG4gICAgICAgIGJhc2VBc3NldC5nZXRJbihbXCJvcHRpb25zXCIsIFwibWFya2V0X2ZlZV9wZXJjZW50XCJdKSAvIDEwMCArIFwiJVwiO1xyXG4gICAgY29uc3QgcXVvdGVNYXJrZXRGZWVQZXJjZW50ID1cclxuICAgICAgICBxdW90ZUFzc2V0LmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pIC8gMTAwICsgXCIlXCI7XHJcbiAgICBjb25zdCBiYXNlTWFya2V0RmVlID0gYmFzZUFzc2V0LmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pO1xyXG4gICAgY29uc3QgcXVvdGVNYXJrZXRGZWUgPSBxdW90ZUFzc2V0LmdldEluKFtcIm9wdGlvbnNcIiwgXCJtYXJrZXRfZmVlX3BlcmNlbnRcIl0pO1xyXG5cclxuICAgIGNvbnN0IHRyeEZlZSA9IGF3YWl0IGNoZWNrRmVlU3RhdHVzKFxyXG4gICAgICAgIFtiYXNlQXNzZXQsIHF1b3RlQXNzZXRdLFxyXG4gICAgICAgIGN1cnJlbnRBY2NvdW50XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFya2V0RmVlOiB7XHJcbiAgICAgICAgICAgIGJhc2VNYXJrZXRGZWVQZXJjZW50LFxyXG4gICAgICAgICAgICBxdW90ZU1hcmtldEZlZVBlcmNlbnQsXHJcbiAgICAgICAgICAgIGJhc2VNYXJrZXRGZWUsXHJcbiAgICAgICAgICAgIHF1b3RlTWFya2V0RmVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cmFuc2FjdGlvbkZlZTogdHJ4RmVlXHJcbiAgICB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0ZlZVN0YXR1cyhhc3NldHMgPSBbXSwgYWNjb3VudCkge1xyXG4gICAgbGV0IGZlZVN0YXR1cyA9IHt9O1xyXG4gICAgbGV0IHAgPSBbXTtcclxuICAgIGFzc2V0cy5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgIHAucHVzaChcclxuICAgICAgICAgICAgY2hlY2tGZWVTdGF0dXNBc3luYyh7XHJcbiAgICAgICAgICAgICAgICBhY2NvdW50SUQ6IGFjY291bnQuZ2V0KFwiaWRcIiksXHJcbiAgICAgICAgICAgICAgICBmZWVJRDogYS5nZXQoXCJpZFwiKSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwibGltaXRfb3JkZXJfY3JlYXRlXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocClcclxuICAgICAgICAudGhlbihzdGF0dXMgPT4ge1xyXG4gICAgICAgICAgICBhc3NldHMuZm9yRWFjaCgoYSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZWVTdGF0dXNbYS5nZXQoXCJpZFwiKV0gPSBzdGF0dXNbaWR4XTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmZWVTdGF0dXM7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNoZWNrRmVlU3RhdHVzQXN5bmMgZXJyb3JcIiwgZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZlZVN0YXR1cztcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtnZXRPcmRlcnMsIGdldFByaWNlcywgZ2V0RmVlcywgZ2V0QXNzZXRzVG9TZWxsfTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFaQTtBQWVBOzs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM3TEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBakJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLHlCQUVBO0FBQ0E7QUFHQTtBQUNBO0FBSEE7QUFNQTs7OztBQWxCQTtBQUNBO0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUE1Q0E7QUE2Q0E7QUFDQTs7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7OztBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7O0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTs7QUFLQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVVBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQWlCQSx5QkFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTFFQTtBQTRFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUdBOzs7QUFDQTtBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQUE7Ozs7OztBQUNBO0FBQ0E7O0FBREE7Ozs7O0FBRUE7QUFDQTs7QUFDQSw2Q0FFQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7O0FBQ0E7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUFBOzs7Ozs7QUFDQTtBQUNBOztBQURBOzs7OztBQUVBO0FBQ0E7O0FBQ0EsNkNBRUE7QUFDQTtBQUVBO0FBREE7QUFJQTtBQU1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7QUFBQTs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUxBO0FBUUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVEE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFJQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFLQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUpBO0FBZUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQVFBO0FBUkE7QUFsQkE7QUE4QkE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUtBO0FBSUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBYkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVRBO0FBREE7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBVkE7QUFEQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFUQTtBQURBO0FBOUJBO0FBcEJBO0FBa0VBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBdUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFaQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQVBBO0FBcEJBO0FBbUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFTQTtBQVRBO0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBSEE7QUFBQTtBQUNBO0FBY0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQURBO0FBTkE7QUFuQkE7QUFpQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQVJBO0FBVUE7QUFWQTtBQVBBO0FBTkE7QUE5QkE7QUEyREE7OztBQXB0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBOzs7O0FBcEVBO0FBQ0E7QUFzd0NBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFWQTtBQVlBO0FBakJBO0FBQ0E7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2wwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFvQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUtBO0FBVkE7QUFEQTtBQUNBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFSQTtBQWdCQTs7OztBQW5IQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQUNBO0FBQ0E7QUFtSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXdCQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVBBO0FBQ0E7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQU1BO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFKQTtBQWJBO0FBUkE7QUE4QkE7Ozs7QUExSUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQURBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUNBO0FBMEhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU1BO0FBWEE7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUExQkE7QUE2QkE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7O0FBdkVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTtBQThEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFOQTtBQUFBO0FBQ0E7QUFEQTtBQVFBO0FBUkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVBBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7Ozs7OztBQXdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFYQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7Ozs7Ozs7QUF6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=