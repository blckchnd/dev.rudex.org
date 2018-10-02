(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 2802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var api = __webpack_require__(2803);
var config = __webpack_require__(2804);
var utils = __webpack_require__(2821);

module.exports = {
  api: api,
  config: config,
  utils: utils
};

/***/ }),

/***/ 2803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(439);

var _events2 = _interopRequireDefault(_events);

var _config = __webpack_require__(2804);

var _config2 = _interopRequireDefault(_config);

var _methods = __webpack_require__(2813);

var _methods2 = _interopRequireDefault(_methods);

var _transports = __webpack_require__(2814);

var _transports2 = _interopRequireDefault(_transports);

var _utils = __webpack_require__(2821);

var _http = __webpack_require__(2815);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Promise from 'bluebird';

// import {
//     hash
// } from '../auth/ecc';
// import {
//     ops
// } from '../auth/serializer';


var Steem = function (_EventEmitter) {
    _inherits(Steem, _EventEmitter);

    function Steem() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Steem);

        var _this = _possibleConstructorReturn(this, (Steem.__proto__ || Object.getPrototypeOf(Steem)).call(this, options));

        _this._setTransport(options);
        _this._setLogger(options);
        _this.options = options;
        _this.seqNo = 0; // used for rpc calls
        _methods2.default.forEach(function (method) {
            var methodName = method.method_name || (0, _utils.camelCase)(method.method);
            var methodParams = method.params || [];

            _this[methodName + 'With'] = function (options, callback) {
                return new Promise(function (resolve, reject) {
                    _this.send(method.api, {
                        method: method.method,
                        params: methodParams.map(function (param) {
                            return options[param];
                        })
                    }, function (err, res) {
                        if (err) reject(err);else {
                            resolve(res);
                        }
                    });
                });
            };

            _this[methodName] = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var options = methodParams.reduce(function (memo, param, i) {
                    memo[param] = args[i]; // eslint-disable-line no-param-reassign
                    return memo;
                }, {});
                var callback = args[methodParams.length];
                return _this[methodName + 'With'](options, callback);
            };

            //   this[`${methodName}WithAsync`] = Promise.promisify(this[`${methodName}With`]);
            // this[`${methodName}Async`] = Promise.promisify(this[methodName]);
        });
        // this.callAsync = Promise.promisify(this.call);
        return _this;
    }

    _createClass(Steem, [{
        key: '_setTransport',
        value: function _setTransport(options) {
            if (options.url && options.url.match('^((http|https)?:\/\/)')) {
                options.uri = options.url;
                options.transport = 'http';
                this._transportType = options.transport;
                this.options = options;
                this.transport = new _transports2.default.http(options);
            } else if (options.url && options.url.match('^((ws|wss)?:\/\/)')) {
                options.websocket = options.url;
                options.transport = 'ws';
                this._transportType = options.transport;
                this.options = options;
                this.transport = new _transports2.default.ws(options);
            } else if (options.transport) {
                if (this.transport && this._transportType !== options.transport) {
                    this.transport.stop();
                }

                this._transportType = options.transport;

                if (typeof options.transport === 'string') {
                    if (!_transports2.default[options.transport]) {
                        throw new TypeError('Invalid `transport`, valid values are `http`, `ws` or a class');
                    }
                    this.transport = new _transports2.default[options.transport](options);
                } else {
                    this.transport = new options.transport(options);
                }
            } else {
                this.transport = new _transports2.default.ws(options);
            }
        }
    }, {
        key: '_setLogger',
        value: function _setLogger(options) {
            if (options.hasOwnProperty('logger')) {
                switch (_typeof(options.logger)) {
                    case 'function':
                        this.__logger = {
                            log: options.logger
                        };
                        break;
                    case 'object':
                        if (typeof options.logger.log !== 'function') {
                            throw new Error('setOptions({logger:{}}) must have a property .log of type function');
                        }
                        this.__logger = options.logger;
                        break;
                    case 'undefined':
                        if (this.__logger) break;
                    default:
                        this.__logger = false;
                }
            }
        }
    }, {
        key: 'log',
        value: function log(logLevel) {
            if (this.__logger) {
                if (arguments.length > 1 && typeof this.__logger[logLevel] === 'function') {
                    var args = Array.prototype.slice.call(arguments, 1);
                    this.__logger[logLevel].apply(this.__logger, args);
                } else {
                    this.__logger.log.apply(this.__logger, arguments);
                }
            }
        }
    }, {
        key: 'start',
        value: function start() {
            return this.transport.start();
        }
    }, {
        key: 'stop',
        value: function stop() {
            return this.transport.stop();
        }
    }, {
        key: 'send',
        value: function send(api, data, callback) {
            var cb = callback;
            if (this.__logger) {
                var id = Math.random();
                var self = this;
                this.log('xmit:' + id + ':', data);
                cb = function cb(e, d) {
                    if (e) {
                        self.log('error', 'rsp:' + id + ':\n\n', e, d);
                    } else {
                        self.log('rsp:' + id + ':', d);
                    }
                    if (callback) {
                        callback.apply(self, arguments);
                    }
                };
            }
            return this.transport.send(api, data, cb);
        }
    }, {
        key: 'call',
        value: function call(method, params, callback) {
            if (this._transportType !== 'http') {
                callback(new Error('RPC methods can only be called when using http transport'));
                return;
            }
            var id = ++this.seqNo;
            (0, _http.jsonRpc)(this.options.uri, { method: method, params: params, id: id }).then(function (res) {
                callback(null, res);
            }, function (err) {
                callback(err);
            });
        }
    }, {
        key: 'setOptions',
        value: function setOptions(options) {
            Object.assign(this.options, options);
            this._setLogger(options);
            this._setTransport(options);
            this.transport.setOptions(options);
        }
    }, {
        key: 'setWebSocket',
        value: function setWebSocket(url) {
            this.setOptions({
                websocket: url
            });
        }
    }, {
        key: 'setUri',
        value: function setUri(url) {
            this.setOptions({
                uri: url
            });
        }

        // broadcastTransactionSynchronousWith(options, callback) {
        // const trx = options.trx;
        // return this.send(
        //     'network_broadcast_api', {
        //         method: 'broadcast_transaction_synchronous',
        //         params: [trx],
        //     },
        //     (err, result) => {
        //         if (err) {
        //             const {
        //                 signed_transaction
        //             } = ops;
        //             // console.log('-- broadcastTransactionSynchronous -->', JSON.stringify(signed_transaction.toObject(trx), null, 2));
        //             // toObject converts objects into serializable types
        //             const trObject = signed_transaction.toObject(trx);
        //             const buf = signed_transaction.toBuffer(trx);
        //             err.digest = hash.sha256(buf).toString('hex');
        //             err.transaction_id = buf.toString('hex');
        //             err.transaction = JSON.stringify(trObject);
        //             callback(err, '');
        //         } else {
        //             callback('', result);
        //         }
        //     },
        // );
        //
        // }

    }]);

    return Steem;
}(_events2.default);

// Export singleton instance


var steem = new Steem(_config2.default);
exports = module.exports = steem;
exports.Steem = Steem;

/***/ }),

/***/ 2804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _each = __webpack_require__(2805);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = __webpack_require__(2812);

var Config = function () {
  function Config(c) {
    var _this = this;

    _classCallCheck(this, Config);

    (0, _each2.default)(c, function (value, key) {
      _this[key] = value;
    });
  }

  _createClass(Config, [{
    key: 'get',
    value: function get(k) {
      return this[k];
    }
  }, {
    key: 'set',
    value: function set(k, v) {
      this[k] = v;
    }
  }]);

  return Config;
}();

module.exports = new Config(defaultConfig);
if (typeof module.exports.Config !== 'undefined') {
  throw new Error("default config.json file may not contain a property 'Config'");
}
module.exports.Config = Config;

/***/ }),

/***/ 2805:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2806);


/***/ }),

/***/ 2806:
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(2807),
    baseEach = __webpack_require__(2808),
    castFunction = __webpack_require__(2811),
    isArray = __webpack_require__(1825);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ 2807:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 2808:
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(2809),
    createBaseEach = __webpack_require__(2810);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 2809:
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(2012),
    keys = __webpack_require__(2318);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 2810:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(2026);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 2811:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(2044);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ 2812:
/***/ (function(module) {

module.exports = {"transport":"http","websocket":"wss://gtg.steem.house:8090","uri":"https://api.steemit.com","url":"","dev_uri":"https://api.steemitdev.com","stage_uri":"https://api.steemitstage.com","address_prefix":"STM","chain_id":"0000000000000000000000000000000000000000000000000000000000000000"};

/***/ }),

/***/ 2813:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  "api": "database_api",
  "method": "set_subscribe_callback",
  "params": ["callback", "clearFilter"]
}, {
  "api": "database_api",
  "method": "set_pending_transaction_callback",
  "params": ["cb"]
}, {
  "api": "database_api",
  "method": "set_block_applied_callback",
  "params": ["cb"]
}, {
  "api": "database_api",
  "method": "cancel_all_subscriptions"
}, {
  "api": "database_api",
  "method": "get_trending_tags",
  "params": ["afterTag", "limit"]
}, {
  "api": "database_api",
  "method": "get_tags_used_by_author",
  "params": ["author"]
}, {
  "api": "database_api",
  "method": "get_post_discussions_by_payout",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_comment_discussions_by_payout",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_trending",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_trending30",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_created",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_active",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_cashout",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_payout",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_votes",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_children",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_hot",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_feed",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_blog",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_comments",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_promoted",
  "params": ["query"]
}, {
  "api": "database_api",
  "method": "get_block_header",
  "params": ["blockNum"]
}, {
  "api": "database_api",
  "method": "get_block",
  "params": ["blockNum"]
}, {
  "api": "database_api",
  "method": "get_ops_in_block",
  "params": ["blockNum", "onlyVirtual"]
}, {
  "api": "database_api",
  "method": "get_state",
  "params": ["path"]
}, {
  "api": "database_api",
  "method": "get_trending_categories",
  "params": ["after", "limit"]
}, {
  "api": "database_api",
  "method": "get_best_categories",
  "params": ["after", "limit"]
}, {
  "api": "database_api",
  "method": "get_active_categories",
  "params": ["after", "limit"]
}, {
  "api": "database_api",
  "method": "get_recent_categories",
  "params": ["after", "limit"]
}, {
  "api": "database_api",
  "method": "get_config"
}, {
  "api": "database_api",
  "method": "get_dynamic_global_properties"
}, {
  "api": "database_api",
  "method": "get_chain_properties"
}, {
  "api": "database_api",
  "method": "get_feed_history"
}, {
  "api": "database_api",
  "method": "get_current_median_history_price"
}, {
  "api": "database_api",
  "method": "get_witness_schedule"
}, {
  "api": "database_api",
  "method": "get_hardfork_version"
}, {
  "api": "database_api",
  "method": "get_next_scheduled_hardfork"
}, {
  "api": "account_by_key_api",
  "method": "get_key_references",
  "params": ["key"]
}, {
  "api": "database_api",
  "method": "get_accounts",
  "params": ["names"]
}, {
  "api": "database_api",
  "method": "get_account_references",
  "params": ["accountId"]
}, {
  "api": "database_api",
  "method": "lookup_account_names",
  "params": ["accountNames"]
}, {
  "api": "database_api",
  "method": "lookup_accounts",
  "params": ["lowerBoundName", "limit"]
}, {
  "api": "database_api",
  "method": "get_account_count"
}, {
  "api": "database_api",
  "method": "get_conversion_requests",
  "params": ["accountName"]
}, {
  "api": "database_api",
  "method": "get_account_history",
  "params": ["account", "from", "limit"]
}, {
  "api": "database_api",
  "method": "get_owner_history",
  "params": ["account"]
}, {
  "api": "database_api",
  "method": "get_recovery_request",
  "params": ["account"]
}, {
  "api": "database_api",
  "method": "get_escrow",
  "params": ["from", "escrowId"]
}, {
  "api": "database_api",
  "method": "get_withdraw_routes",
  "params": ["account", "withdrawRouteType"]
}, {
  "api": "database_api",
  "method": "get_account_bandwidth",
  "params": ["account", "bandwidthType"]
}, {
  "api": "database_api",
  "method": "get_savings_withdraw_from",
  "params": ["account"]
}, {
  "api": "database_api",
  "method": "get_savings_withdraw_to",
  "params": ["account"]
}, {
  "api": "database_api",
  "method": "get_order_book",
  "params": ["limit"]
}, {
  "api": "database_api",
  "method": "get_open_orders",
  "params": ["owner"]
}, {
  "api": "database_api",
  "method": "get_liquidity_queue",
  "params": ["startAccount", "limit"]
}, {
  "api": "database_api",
  "method": "get_transaction_hex",
  "params": ["trx"]
}, {
  "api": "database_api",
  "method": "get_transaction",
  "params": ["trxId"]
}, {
  "api": "database_api",
  "method": "get_required_signatures",
  "params": ["trx", "availableKeys"]
}, {
  "api": "database_api",
  "method": "get_potential_signatures",
  "params": ["trx"]
}, {
  "api": "database_api",
  "method": "verify_authority",
  "params": ["trx"]
}, {
  "api": "database_api",
  "method": "verify_account_authority",
  "params": ["nameOrId", "signers"]
}, {
  "api": "database_api",
  "method": "get_active_votes",
  "params": ["author", "permlink"]
}, {
  "api": "database_api",
  "method": "get_account_votes",
  "params": ["voter"]
}, {
  "api": "database_api",
  "method": "get_content",
  "params": ["author", "permlink"]
}, {
  "api": "database_api",
  "method": "get_content_replies",
  "params": ["author", "permlink"]
}, {
  "api": "database_api",
  "method": "get_discussions_by_author_before_date",
  "params": ["author", "startPermlink", "beforeDate", "limit"]
}, {
  "api": "database_api",
  "method": "get_replies_by_last_update",
  "params": ["startAuthor", "startPermlink", "limit"]
}, {
  "api": "database_api",
  "method": "get_witnesses",
  "params": ["witnessIds"]
}, {
  "api": "database_api",
  "method": "get_witness_by_account",
  "params": ["accountName"]
}, {
  "api": "database_api",
  "method": "get_witnesses_by_vote",
  "params": ["from", "limit"]
}, {
  "api": "database_api",
  "method": "lookup_witness_accounts",
  "params": ["lowerBoundName", "limit"]
}, {
  "api": "database_api",
  "method": "get_witness_count"
}, {
  "api": "database_api",
  "method": "get_active_witnesses"
}, {
  "api": "database_api",
  "method": "get_miner_queue"
}, {
  "api": "database_api",
  "method": "get_reward_fund",
  "params": ["name"]
}, {
  "api": "database_api",
  "method": "get_vesting_delegations",
  "params": ["account", "from", "limit"]
}, {
  "api": "login_api",
  "method": "login",
  "params": ["username", "password"]
}, {
  "api": "login_api",
  "method": "get_api_by_name",
  "params": ["database_api"]
}, {
  "api": "login_api",
  "method": "get_version"
}, {
  "api": "follow_api",
  "method": "get_followers",
  "params": ["following", "startFollower", "followType", "limit"]
}, {
  "api": "follow_api",
  "method": "get_following",
  "params": ["follower", "startFollowing", "followType", "limit"]
}, {
  "api": "follow_api",
  "method": "get_follow_count",
  "params": ["account"]
}, {
  "api": "follow_api",
  "method": "get_feed_entries",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow_api",
  "method": "get_feed",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow_api",
  "method": "get_blog_entries",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow_api",
  "method": "get_blog",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow_api",
  "method": "get_account_reputations",
  "params": ["lowerBoundName", "limit"]
}, {
  "api": "follow_api",
  "method": "get_reblogged_by",
  "params": ["author", "permlink"]
}, {
  "api": "follow_api",
  "method": "get_blog_authors",
  "params": ["blogAccount"]
}, {
  "api": "network_broadcast_api",
  "method": "broadcast_transaction",
  "params": ["trx"]
}, {
  "api": "network_broadcast_api",
  "method": "broadcast_transaction_with_callback",
  "params": ["confirmationCallback", "trx"]
}, {
  "api": "network_broadcast_api",
  "method": "broadcast_transaction_synchronous",
  "params": ["trx"]
}, {
  "api": "network_broadcast_api",
  "method": "broadcast_block",
  "params": ["b"]
}, {
  "api": "network_broadcast_api",
  "method": "set_max_block_age",
  "params": ["maxBlockAge"]
}, {
  "api": "market_history_api",
  "method": "get_ticker",
  "params": []
}, {
  "api": "market_history_api",
  "method": "get_volume",
  "params": []
}, {
  "api": "market_history_api",
  "method": "get_order_book",
  "method_name": "getMarketOrderBook",
  "params": ["limit"]
}, {
  "api": "market_history_api",
  "method": "get_trade_history",
  "params": ["start", "end", "limit"]
}, {
  "api": "market_history_api",
  "method": "get_recent_trades",
  "params": ["limit"]
}, {
  "api": "market_history_api",
  "method": "get_market_history",
  "params": ["bucket_seconds", "start", "end"]
}, {
  "api": "market_history_api",
  "method": "get_market_history_buckets",
  "params": []
}];

/***/ }),

/***/ 2814:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = __webpack_require__(2815);

var _http2 = _interopRequireDefault(_http);

var _ws = __webpack_require__(2818);

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  http: _http2.default,
  ws: _ws2.default
};

/***/ }),

/***/ 2815:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.jsonRpc = jsonRpc;

var _crossFetch = __webpack_require__(2816);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _debug = __webpack_require__(1031);

var _debug2 = _interopRequireDefault(_debug);

var _base = __webpack_require__(2817);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _debug2.default)('steem:http');

var RPCError = function (_Error) {
  _inherits(RPCError, _Error);

  function RPCError(rpcError) {
    _classCallCheck(this, RPCError);

    var _this = _possibleConstructorReturn(this, (RPCError.__proto__ || Object.getPrototypeOf(RPCError)).call(this, rpcError.message));

    _this.name = 'RPCError';
    _this.code = rpcError.code;
    _this.data = rpcError.data;
    return _this;
  }

  return RPCError;
}(Error);

function jsonRpc(uri, _ref) {
  var method = _ref.method,
      id = _ref.id,
      params = _ref.params;

  var payload = { id: id, jsonrpc: '2.0', method: method, params: params };
  return (0, _crossFetch2.default)(uri, {
    body: JSON.stringify(payload),
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    if (!res.ok) {
      throw new Error('HTTP ' + res.status + ': ' + res.statusText);
    }
    return res.json();
  }).then(function (rpcRes) {
    if (rpcRes.id !== id) {
      throw new Error('Invalid response id: ' + rpcRes.id);
    }
    if (rpcRes.error) {
      throw new RPCError(rpcRes.error);
    }
    return rpcRes.result;
  });
}

var HttpTransport = function (_Transport) {
  _inherits(HttpTransport, _Transport);

  function HttpTransport() {
    _classCallCheck(this, HttpTransport);

    return _possibleConstructorReturn(this, (HttpTransport.__proto__ || Object.getPrototypeOf(HttpTransport)).apply(this, arguments));
  }

  _createClass(HttpTransport, [{
    key: 'send',
    value: function send(api, data, callback) {
      if (this.options.useAppbaseApi) {
        api = 'condenser_api';
      }
      debug('Steem::send', api, data);
      var id = data.id || this.id++;
      var params = [api, data.method, data.params];
      jsonRpc(this.options.uri, { method: 'call', id: id, params: params }).then(function (res) {
        callback(null, res);
      }, function (err) {
        callback(err);
      });
    }
  }]);

  return HttpTransport;
}(_base2.default);

exports.default = HttpTransport;

/***/ }),

/***/ 2816:
/***/ (function(module, exports) {

var self = {};
(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);

/*
 * Rollup wraps up the whatwg-fetch code on ponyfill mode in
 * order to prevent it from adding fetch to the global object.
 */

      var fetch = self.fetch;

      fetch.fetch = fetch;
      fetch.Response = self.Response;
      fetch.Headers = self.Headers;
      fetch.Request = self.Request;

      // fetch now can be imported as the default object
      module.exports = fetch;
    


/***/ }),

/***/ 2817:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(439);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transport = function (_EventEmitter) {
  _inherits(Transport, _EventEmitter);

  function Transport() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Transport);

    var _this = _possibleConstructorReturn(this, (Transport.__proto__ || Object.getPrototypeOf(Transport)).call(this, options));

    _this.options = options;
    _this.id = 0;
    return _this;
  }

  _createClass(Transport, [{
    key: 'setOptions',
    value: function setOptions(options) {
      Object.assign(this.options, options);
      this.stop();
    }
  }, {
    key: 'listenTo',
    value: function listenTo(target, eventName, callback) {
      if (target.addEventListener) target.addEventListener(eventName, callback);else target.on(eventName, callback);

      return function () {
        if (target.removeEventListener) target.removeEventListener(eventName, callback);else target.removeListener(eventName, callback);
      };
    }
  }, {
    key: 'send',
    value: function send() {}
  }, {
    key: 'start',
    value: function start() {}
  }, {
    key: 'stop',
    value: function stop() {}
  }]);

  return Transport;
}(_events2.default);

exports.default = Transport;

/***/ }),

/***/ 2818:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _detectNode = __webpack_require__(2819);

var _detectNode2 = _interopRequireDefault(_detectNode);

var _debug = __webpack_require__(1031);

var _debug2 = _interopRequireDefault(_debug);

var _base = __webpack_require__(2817);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebSocket = void 0;
if (_detectNode2.default) {
  WebSocket = __webpack_require__(2820); // eslint-disable-line global-require
} else if (typeof window !== 'undefined') {
  WebSocket = window.WebSocket;
} else {
  throw new Error("Couldn't decide on a `WebSocket` class");
}

var debug = (0, _debug2.default)('steem:ws');

var WsTransport = function (_Transport) {
  _inherits(WsTransport, _Transport);

  function WsTransport() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsTransport);

    var _this = _possibleConstructorReturn(this, (WsTransport.__proto__ || Object.getPrototypeOf(WsTransport)).call(this, Object.assign({ id: 0 }, options)));

    _this._requests = new Map();
    _this.inFlight = 0;
    _this.isOpen = false;
    return _this;
  }

  _createClass(WsTransport, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      if (this.startPromise) {
        return this.startPromise;
      }

      this.startPromise = new Promise(function (resolve, reject) {
        _this2.ws = new WebSocket(_this2.options.websocket);
        _this2.ws.onerror = function (err) {
          _this2.startPromise = null;
          reject(err);
        };
        _this2.ws.onopen = function () {
          _this2.isOpen = true;
          _this2.ws.onerror = _this2.onError.bind(_this2);
          _this2.ws.onmessage = _this2.onMessage.bind(_this2);
          _this2.ws.onclose = _this2.onClose.bind(_this2);
          resolve();
        };
      });
      return this.startPromise;
    }
  }, {
    key: 'stop',
    value: function stop() {
      debug('Stopping...');

      this.startPromise = null;
      this.isOpen = false;
      this._requests.clear();

      if (this.ws) {
        this.ws.onerror = this.ws.onmessage = this.ws.onclose = null;
        this.ws.close();
        this.ws = null;
      }
    }
  }, {
    key: 'send',
    value: function send(api, data, callback) {
      var _this3 = this;

      debug('Steem::send', api, data);
      return this.start().then(function () {
        var deferral = {};
        new Promise(function (resolve, reject) {
          deferral.resolve = function (val) {
            resolve(val);
            callback(null, val);
          };
          deferral.reject = function (val) {
            reject(val);
            callback(val);
          };
        });

        if (_this3.options.useAppbaseApi) {
          api = 'condenser_api';
        }

        var _request = {
          deferral: deferral,
          startedAt: Date.now(),
          message: {
            id: data.id || _this3.id++,
            method: 'call',
            jsonrpc: '2.0',
            params: [api, data.method, data.params]
          }
        };
        _this3.inFlight++;
        _this3._requests.set(_request.message.id, _request);
        _this3.ws.send(JSON.stringify(_request.message));
        return deferral;
      });
    }
  }, {
    key: 'onError',
    value: function onError(error) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._requests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _request = _step.value;

          _request.deferral.reject(error);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.stop();
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      var error = new Error('Connection was closed');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._requests[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _request = _step2.value;

          _request.deferral.reject(error);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this._requests.clear();
    }
  }, {
    key: 'onMessage',
    value: function onMessage(websocketMessage) {
      var message = JSON.parse(websocketMessage.data);
      debug('-- Steem.onMessage -->', message.id);
      if (!this._requests.has(message.id)) {
        throw new Error('Panic: no request in queue for message id ' + message.id);
      }
      var _request = this._requests.get(message.id);
      this._requests.delete(message.id);

      var errorCause = message.error;
      if (errorCause) {
        var err = new Error(
        // eslint-disable-next-line prefer-template
        (errorCause.message || 'Failed to complete operation') + ' (see err.payload for the full error payload)');
        err.payload = message;
        _request.deferral.reject(err);
      } else {
        this.emit('track-performance', _request.message.method, Date.now() - _request.startedAt);
        _request.deferral.resolve(message.result);
      }
    }
  }]);

  return WsTransport;
}(_base2.default);

exports.default = WsTransport;

/***/ }),

/***/ 2819:
/***/ (function(module, exports) {

module.exports = false;



/***/ }),

/***/ 2821:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelCase = camelCase;
var snakeCaseRe = /_([a-z])/g;
function camelCase(str) {
  return str.replace(snakeCaseRe, function (_m, l) {
    return l.toUpperCase();
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35uZXdzLmM3YzNiM2VmZjY2YWQwODc1YjlkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0ZWVtLWpzLWFwaS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0ZWVtLWpzLWFwaS9saWIvYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdGVlbS1qcy1hcGkvbGliL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9mb3JFYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yT3duLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJhc2VFYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RlZW0tanMtYXBpL2xpYi9hcGkvbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RlZW0tanMtYXBpL2xpYi9hcGkvdHJhbnNwb3J0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RlZW0tanMtYXBpL2xpYi9hcGkvdHJhbnNwb3J0cy9odHRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0ZWVtLWpzLWFwaS9saWIvYXBpL3RyYW5zcG9ydHMvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RlZW0tanMtYXBpL2xpYi9hcGkvdHJhbnNwb3J0cy93cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGV0ZWN0LW5vZGUvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3RlZW0tanMtYXBpL2xpYi91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBhcGkgPSByZXF1aXJlKCcuL2FwaScpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcGk6IGFwaSxcbiAgY29uZmlnOiBjb25maWcsXG4gIHV0aWxzOiB1dGlsc1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9ldmVudHMgPSByZXF1aXJlKCdldmVudHMnKTtcblxudmFyIF9ldmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRzKTtcblxudmFyIF9jb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxudmFyIF9jb25maWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZmlnKTtcblxudmFyIF9tZXRob2RzID0gcmVxdWlyZSgnLi9tZXRob2RzJyk7XG5cbnZhciBfbWV0aG9kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXRob2RzKTtcblxudmFyIF90cmFuc3BvcnRzID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzJyk7XG5cbnZhciBfdHJhbnNwb3J0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc3BvcnRzKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBfaHR0cCA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cy9odHRwJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cbi8vIGltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcblxuLy8gaW1wb3J0IHtcbi8vICAgICBoYXNoXG4vLyB9IGZyb20gJy4uL2F1dGgvZWNjJztcbi8vIGltcG9ydCB7XG4vLyAgICAgb3BzXG4vLyB9IGZyb20gJy4uL2F1dGgvc2VyaWFsaXplcic7XG5cblxudmFyIFN0ZWVtID0gZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgICBfaW5oZXJpdHMoU3RlZW0sIF9FdmVudEVtaXR0ZXIpO1xuXG4gICAgZnVuY3Rpb24gU3RlZW0oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RlZW0pO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdGVlbS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0ZWVtKSkuY2FsbCh0aGlzLCBvcHRpb25zKSk7XG5cbiAgICAgICAgX3RoaXMuX3NldFRyYW5zcG9ydChvcHRpb25zKTtcbiAgICAgICAgX3RoaXMuX3NldExvZ2dlcihvcHRpb25zKTtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIF90aGlzLnNlcU5vID0gMDsgLy8gdXNlZCBmb3IgcnBjIGNhbGxzXG4gICAgICAgIF9tZXRob2RzMi5kZWZhdWx0LmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSBtZXRob2QubWV0aG9kX25hbWUgfHwgKDAsIF91dGlscy5jYW1lbENhc2UpKG1ldGhvZC5tZXRob2QpO1xuICAgICAgICAgICAgdmFyIG1ldGhvZFBhcmFtcyA9IG1ldGhvZC5wYXJhbXMgfHwgW107XG5cbiAgICAgICAgICAgIF90aGlzW21ldGhvZE5hbWUgKyAnV2l0aCddID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2VuZChtZXRob2QuYXBpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZC5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IG1ldGhvZFBhcmFtcy5tYXAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNbcGFyYW1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgX3RoaXNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IG1ldGhvZFBhcmFtcy5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIHBhcmFtLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9bcGFyYW1dID0gYXJnc1tpXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJnc1ttZXRob2RQYXJhbXMubGVuZ3RoXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXNbbWV0aG9kTmFtZSArICdXaXRoJ10ob3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gICB0aGlzW2Ake21ldGhvZE5hbWV9V2l0aEFzeW5jYF0gPSBQcm9taXNlLnByb21pc2lmeSh0aGlzW2Ake21ldGhvZE5hbWV9V2l0aGBdKTtcbiAgICAgICAgICAgIC8vIHRoaXNbYCR7bWV0aG9kTmFtZX1Bc3luY2BdID0gUHJvbWlzZS5wcm9taXNpZnkodGhpc1ttZXRob2ROYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLmNhbGxBc3luYyA9IFByb21pc2UucHJvbWlzaWZ5KHRoaXMuY2FsbCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RlZW0sIFt7XG4gICAgICAgIGtleTogJ19zZXRUcmFuc3BvcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFRyYW5zcG9ydChvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51cmwgJiYgb3B0aW9ucy51cmwubWF0Y2goJ14oKGh0dHB8aHR0cHMpPzpcXC9cXC8pJykpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnVyaSA9IG9wdGlvbnMudXJsO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudHJhbnNwb3J0ID0gJ2h0dHAnO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zcG9ydFR5cGUgPSBvcHRpb25zLnRyYW5zcG9ydDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3IF90cmFuc3BvcnRzMi5kZWZhdWx0Lmh0dHAob3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudXJsICYmIG9wdGlvbnMudXJsLm1hdGNoKCdeKCh3c3x3c3MpPzpcXC9cXC8pJykpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLndlYnNvY2tldCA9IG9wdGlvbnMudXJsO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudHJhbnNwb3J0ID0gJ3dzJztcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc3BvcnRUeXBlID0gb3B0aW9ucy50cmFuc3BvcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IG5ldyBfdHJhbnNwb3J0czIuZGVmYXVsdC53cyhvcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFuc3BvcnQgJiYgdGhpcy5fdHJhbnNwb3J0VHlwZSAhPT0gb3B0aW9ucy50cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zcG9ydFR5cGUgPSBvcHRpb25zLnRyYW5zcG9ydDtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50cmFuc3BvcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RyYW5zcG9ydHMyLmRlZmF1bHRbb3B0aW9ucy50cmFuc3BvcnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGB0cmFuc3BvcnRgLCB2YWxpZCB2YWx1ZXMgYXJlIGBodHRwYCwgYHdzYCBvciBhIGNsYXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSBuZXcgX3RyYW5zcG9ydHMyLmRlZmF1bHRbb3B0aW9ucy50cmFuc3BvcnRdKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0ID0gbmV3IG9wdGlvbnMudHJhbnNwb3J0KG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgPSBuZXcgX3RyYW5zcG9ydHMyLmRlZmF1bHQud3Mob3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19zZXRMb2dnZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldExvZ2dlcihvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbG9nZ2VyJykpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF90eXBlb2Yob3B0aW9ucy5sb2dnZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19sb2dnZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nOiBvcHRpb25zLmxvZ2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvZ2dlci5sb2cgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldE9wdGlvbnMoe2xvZ2dlcjp7fX0pIG11c3QgaGF2ZSBhIHByb3BlcnR5IC5sb2cgb2YgdHlwZSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2xvZ2dlciA9IG9wdGlvbnMubG9nZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX2xvZ2dlcikgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fbG9nZ2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKGxvZ0xldmVsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fX2xvZ2dlcikge1xuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgdGhpcy5fX2xvZ2dlcltsb2dMZXZlbF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fbG9nZ2VyW2xvZ0xldmVsXS5hcHBseSh0aGlzLl9fbG9nZ2VyLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fbG9nZ2VyLmxvZy5hcHBseSh0aGlzLl9fbG9nZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RhcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2VuZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKGFwaSwgZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBjYiA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgaWYgKHRoaXMuX19sb2dnZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmxvZygneG1pdDonICsgaWQgKyAnOicsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNiID0gZnVuY3Rpb24gY2IoZSwgZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2coJ2Vycm9yJywgJ3JzcDonICsgaWQgKyAnOlxcblxcbicsIGUsIGQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2coJ3JzcDonICsgaWQgKyAnOicsIGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChhcGksIGRhdGEsIGNiKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2FsbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxsKG1ldGhvZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3RyYW5zcG9ydFR5cGUgIT09ICdodHRwJykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignUlBDIG1ldGhvZHMgY2FuIG9ubHkgYmUgY2FsbGVkIHdoZW4gdXNpbmcgaHR0cCB0cmFuc3BvcnQnKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlkID0gKyt0aGlzLnNlcU5vO1xuICAgICAgICAgICAgKDAsIF9odHRwLmpzb25ScGMpKHRoaXMub3B0aW9ucy51cmksIHsgbWV0aG9kOiBtZXRob2QsIHBhcmFtczogcGFyYW1zLCBpZDogaWQgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldE9wdGlvbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLl9zZXRMb2dnZXIob3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLl9zZXRUcmFuc3BvcnQob3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRXZWJTb2NrZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0V2ViU29ja2V0KHVybCkge1xuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICB3ZWJzb2NrZXQ6IHVybFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFVyaScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRVcmkodXJsKSB7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgIHVyaTogdXJsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJyb2FkY2FzdFRyYW5zYWN0aW9uU3luY2hyb25vdXNXaXRoKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIGNvbnN0IHRyeCA9IG9wdGlvbnMudHJ4O1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5zZW5kKFxuICAgICAgICAvLyAgICAgJ25ldHdvcmtfYnJvYWRjYXN0X2FwaScsIHtcbiAgICAgICAgLy8gICAgICAgICBtZXRob2Q6ICdicm9hZGNhc3RfdHJhbnNhY3Rpb25fc3luY2hyb25vdXMnLFxuICAgICAgICAvLyAgICAgICAgIHBhcmFtczogW3RyeF0sXG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzaWduZWRfdHJhbnNhY3Rpb25cbiAgICAgICAgLy8gICAgICAgICAgICAgfSA9IG9wcztcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJy0tIGJyb2FkY2FzdFRyYW5zYWN0aW9uU3luY2hyb25vdXMgLS0+JywgSlNPTi5zdHJpbmdpZnkoc2lnbmVkX3RyYW5zYWN0aW9uLnRvT2JqZWN0KHRyeCksIG51bGwsIDIpKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdG9PYmplY3QgY29udmVydHMgb2JqZWN0cyBpbnRvIHNlcmlhbGl6YWJsZSB0eXBlc1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCB0ck9iamVjdCA9IHNpZ25lZF90cmFuc2FjdGlvbi50b09iamVjdCh0cngpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBidWYgPSBzaWduZWRfdHJhbnNhY3Rpb24udG9CdWZmZXIodHJ4KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgZXJyLmRpZ2VzdCA9IGhhc2guc2hhMjU2KGJ1ZikudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgICAvLyAgICAgICAgICAgICBlcnIudHJhbnNhY3Rpb25faWQgPSBidWYudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgICAvLyAgICAgICAgICAgICBlcnIudHJhbnNhY3Rpb24gPSBKU09OLnN0cmluZ2lmeSh0ck9iamVjdCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgJycpO1xuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNhbGxiYWNrKCcnLCByZXN1bHQpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIH1cblxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdGVlbTtcbn0oX2V2ZW50czIuZGVmYXVsdCk7XG5cbi8vIEV4cG9ydCBzaW5nbGV0b24gaW5zdGFuY2VcblxuXG52YXIgc3RlZW0gPSBuZXcgU3RlZW0oX2NvbmZpZzIuZGVmYXVsdCk7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdGVlbTtcbmV4cG9ydHMuU3RlZW0gPSBTdGVlbTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZWFjaCA9IHJlcXVpcmUoJ2xvZGFzaC9lYWNoJyk7XG5cbnZhciBfZWFjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lYWNoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIGRlZmF1bHRDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcuanNvbicpO1xuXG52YXIgQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb25maWcoYykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uZmlnKTtcblxuICAgICgwLCBfZWFjaDIuZGVmYXVsdCkoYywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIF90aGlzW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb25maWcsIFt7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGspIHtcbiAgICAgIHJldHVybiB0aGlzW2tdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChrLCB2KSB7XG4gICAgICB0aGlzW2tdID0gdjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29uZmlnO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBDb25maWcoZGVmYXVsdENvbmZpZyk7XG5pZiAodHlwZW9mIG1vZHVsZS5leHBvcnRzLkNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiZGVmYXVsdCBjb25maWcuanNvbiBmaWxlIG1heSBub3QgY29udGFpbiBhIHByb3BlcnR5ICdDb25maWcnXCIpO1xufVxubW9kdWxlLmV4cG9ydHMuQ29uZmlnID0gQ29uZmlnOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mb3JFYWNoJyk7XG4iLCJ2YXIgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYmFzZUVhY2ggPSByZXF1aXJlKCcuL19iYXNlRWFjaCcpLFxuICAgIGNhc3RGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2Nhc3RGdW5jdGlvbicpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIGVsZW1lbnRzIG9mIGBjb2xsZWN0aW9uYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIGVsZW1lbnQuXG4gKiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqICoqTm90ZToqKiBBcyB3aXRoIG90aGVyIFwiQ29sbGVjdGlvbnNcIiBtZXRob2RzLCBvYmplY3RzIHdpdGggYSBcImxlbmd0aFwiXG4gKiBwcm9wZXJ0eSBhcmUgaXRlcmF0ZWQgbGlrZSBhcnJheXMuIFRvIGF2b2lkIHRoaXMgYmVoYXZpb3IgdXNlIGBfLmZvckluYFxuICogb3IgYF8uZm9yT3duYCBmb3Igb2JqZWN0IGl0ZXJhdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAYWxpYXMgZWFjaFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdH0gUmV0dXJucyBgY29sbGVjdGlvbmAuXG4gKiBAc2VlIF8uZm9yRWFjaFJpZ2h0XG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZm9yRWFjaChbMSwgMl0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gKiAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAqIH0pO1xuICogLy8gPT4gTG9ncyBgMWAgdGhlbiBgMmAuXG4gKlxuICogXy5mb3JFYWNoKHsgJ2EnOiAxLCAnYic6IDIgfSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICogICBjb25zb2xlLmxvZyhrZXkpO1xuICogfSk7XG4gKiAvLyA9PiBMb2dzICdhJyB0aGVuICdiJyAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKS5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheUVhY2ggOiBiYXNlRWFjaDtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgY2FzdEZ1bmN0aW9uKGl0ZXJhdGVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCJ2YXIgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd24nKSxcbiAgICBjcmVhdGVCYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2NyZWF0ZUJhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yRWFjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdH0gUmV0dXJucyBgY29sbGVjdGlvbmAuXG4gKi9cbnZhciBiYXNlRWFjaCA9IGNyZWF0ZUJhc2VFYWNoKGJhc2VGb3JPd24pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VFYWNoO1xuIiwidmFyIGJhc2VGb3IgPSByZXF1aXJlKCcuL19iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcbiIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYGJhc2VFYWNoYCBvciBgYmFzZUVhY2hSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRWFjaChlYWNoRnVuYywgZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZWFjaEZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtpbmRleF0sIGluZGV4LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRWFjaDtcbiIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGBpZGVudGl0eWAgaWYgaXQncyBub3QgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBjYXN0IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYXN0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nID8gdmFsdWUgOiBpZGVudGl0eTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0RnVuY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFt7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwic2V0X3N1YnNjcmliZV9jYWxsYmFja1wiLFxuICBcInBhcmFtc1wiOiBbXCJjYWxsYmFja1wiLCBcImNsZWFyRmlsdGVyXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwic2V0X3BlbmRpbmdfdHJhbnNhY3Rpb25fY2FsbGJhY2tcIixcbiAgXCJwYXJhbXNcIjogW1wiY2JcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJzZXRfYmxvY2tfYXBwbGllZF9jYWxsYmFja1wiLFxuICBcInBhcmFtc1wiOiBbXCJjYlwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImNhbmNlbF9hbGxfc3Vic2NyaXB0aW9uc1wiXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3RyZW5kaW5nX3RhZ3NcIixcbiAgXCJwYXJhbXNcIjogW1wiYWZ0ZXJUYWdcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF90YWdzX3VzZWRfYnlfYXV0aG9yXCIsXG4gIFwicGFyYW1zXCI6IFtcImF1dGhvclwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9wb3N0X2Rpc2N1c3Npb25zX2J5X3BheW91dFwiLFxuICBcInBhcmFtc1wiOiBbXCJxdWVyeVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9jb21tZW50X2Rpc2N1c3Npb25zX2J5X3BheW91dFwiLFxuICBcInBhcmFtc1wiOiBbXCJxdWVyeVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9kaXNjdXNzaW9uc19ieV90cmVuZGluZ1wiLFxuICBcInBhcmFtc1wiOiBbXCJxdWVyeVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9kaXNjdXNzaW9uc19ieV90cmVuZGluZzMwXCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X2NyZWF0ZWRcIixcbiAgXCJwYXJhbXNcIjogW1wicXVlcnlcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZGlzY3Vzc2lvbnNfYnlfYWN0aXZlXCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X2Nhc2hvdXRcIixcbiAgXCJwYXJhbXNcIjogW1wicXVlcnlcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZGlzY3Vzc2lvbnNfYnlfcGF5b3V0XCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X3ZvdGVzXCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X2NoaWxkcmVuXCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X2hvdFwiLFxuICBcInBhcmFtc1wiOiBbXCJxdWVyeVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9kaXNjdXNzaW9uc19ieV9mZWVkXCIsXG4gIFwicGFyYW1zXCI6IFtcInF1ZXJ5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X2Jsb2dcIixcbiAgXCJwYXJhbXNcIjogW1wicXVlcnlcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZGlzY3Vzc2lvbnNfYnlfY29tbWVudHNcIixcbiAgXCJwYXJhbXNcIjogW1wicXVlcnlcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZGlzY3Vzc2lvbnNfYnlfcHJvbW90ZWRcIixcbiAgXCJwYXJhbXNcIjogW1wicXVlcnlcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfYmxvY2tfaGVhZGVyXCIsXG4gIFwicGFyYW1zXCI6IFtcImJsb2NrTnVtXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Jsb2NrXCIsXG4gIFwicGFyYW1zXCI6IFtcImJsb2NrTnVtXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X29wc19pbl9ibG9ja1wiLFxuICBcInBhcmFtc1wiOiBbXCJibG9ja051bVwiLCBcIm9ubHlWaXJ0dWFsXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3N0YXRlXCIsXG4gIFwicGFyYW1zXCI6IFtcInBhdGhcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfdHJlbmRpbmdfY2F0ZWdvcmllc1wiLFxuICBcInBhcmFtc1wiOiBbXCJhZnRlclwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Jlc3RfY2F0ZWdvcmllc1wiLFxuICBcInBhcmFtc1wiOiBbXCJhZnRlclwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2FjdGl2ZV9jYXRlZ29yaWVzXCIsXG4gIFwicGFyYW1zXCI6IFtcImFmdGVyXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfcmVjZW50X2NhdGVnb3JpZXNcIixcbiAgXCJwYXJhbXNcIjogW1wiYWZ0ZXJcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9jb25maWdcIlxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9keW5hbWljX2dsb2JhbF9wcm9wZXJ0aWVzXCJcbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfY2hhaW5fcHJvcGVydGllc1wiXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2ZlZWRfaGlzdG9yeVwiXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2N1cnJlbnRfbWVkaWFuX2hpc3RvcnlfcHJpY2VcIlxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF93aXRuZXNzX3NjaGVkdWxlXCJcbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfaGFyZGZvcmtfdmVyc2lvblwiXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X25leHRfc2NoZWR1bGVkX2hhcmRmb3JrXCJcbn0sIHtcbiAgXCJhcGlcIjogXCJhY2NvdW50X2J5X2tleV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfa2V5X3JlZmVyZW5jZXNcIixcbiAgXCJwYXJhbXNcIjogW1wia2V5XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2FjY291bnRzXCIsXG4gIFwicGFyYW1zXCI6IFtcIm5hbWVzXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2FjY291bnRfcmVmZXJlbmNlc1wiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50SWRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJsb29rdXBfYWNjb3VudF9uYW1lc1wiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50TmFtZXNcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJsb29rdXBfYWNjb3VudHNcIixcbiAgXCJwYXJhbXNcIjogW1wibG93ZXJCb3VuZE5hbWVcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hY2NvdW50X2NvdW50XCJcbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfY29udmVyc2lvbl9yZXF1ZXN0c1wiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50TmFtZVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hY2NvdW50X2hpc3RvcnlcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudFwiLCBcImZyb21cIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9vd25lcl9oaXN0b3J5XCIsXG4gIFwicGFyYW1zXCI6IFtcImFjY291bnRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfcmVjb3ZlcnlfcmVxdWVzdFwiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2VzY3Jvd1wiLFxuICBcInBhcmFtc1wiOiBbXCJmcm9tXCIsIFwiZXNjcm93SWRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfd2l0aGRyYXdfcm91dGVzXCIsXG4gIFwicGFyYW1zXCI6IFtcImFjY291bnRcIiwgXCJ3aXRoZHJhd1JvdXRlVHlwZVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hY2NvdW50X2JhbmR3aWR0aFwiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50XCIsIFwiYmFuZHdpZHRoVHlwZVwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9zYXZpbmdzX3dpdGhkcmF3X2Zyb21cIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9zYXZpbmdzX3dpdGhkcmF3X3RvXCIsXG4gIFwicGFyYW1zXCI6IFtcImFjY291bnRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfb3JkZXJfYm9va1wiLFxuICBcInBhcmFtc1wiOiBbXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9vcGVuX29yZGVyc1wiLFxuICBcInBhcmFtc1wiOiBbXCJvd25lclwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9saXF1aWRpdHlfcXVldWVcIixcbiAgXCJwYXJhbXNcIjogW1wic3RhcnRBY2NvdW50XCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfdHJhbnNhY3Rpb25faGV4XCIsXG4gIFwicGFyYW1zXCI6IFtcInRyeFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF90cmFuc2FjdGlvblwiLFxuICBcInBhcmFtc1wiOiBbXCJ0cnhJZFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9yZXF1aXJlZF9zaWduYXR1cmVzXCIsXG4gIFwicGFyYW1zXCI6IFtcInRyeFwiLCBcImF2YWlsYWJsZUtleXNcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfcG90ZW50aWFsX3NpZ25hdHVyZXNcIixcbiAgXCJwYXJhbXNcIjogW1widHJ4XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwidmVyaWZ5X2F1dGhvcml0eVwiLFxuICBcInBhcmFtc1wiOiBbXCJ0cnhcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJ2ZXJpZnlfYWNjb3VudF9hdXRob3JpdHlcIixcbiAgXCJwYXJhbXNcIjogW1wibmFtZU9ySWRcIiwgXCJzaWduZXJzXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2FjdGl2ZV92b3Rlc1wiLFxuICBcInBhcmFtc1wiOiBbXCJhdXRob3JcIiwgXCJwZXJtbGlua1wiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hY2NvdW50X3ZvdGVzXCIsXG4gIFwicGFyYW1zXCI6IFtcInZvdGVyXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2NvbnRlbnRcIixcbiAgXCJwYXJhbXNcIjogW1wiYXV0aG9yXCIsIFwicGVybWxpbmtcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfY29udGVudF9yZXBsaWVzXCIsXG4gIFwicGFyYW1zXCI6IFtcImF1dGhvclwiLCBcInBlcm1saW5rXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2Rpc2N1c3Npb25zX2J5X2F1dGhvcl9iZWZvcmVfZGF0ZVwiLFxuICBcInBhcmFtc1wiOiBbXCJhdXRob3JcIiwgXCJzdGFydFBlcm1saW5rXCIsIFwiYmVmb3JlRGF0ZVwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3JlcGxpZXNfYnlfbGFzdF91cGRhdGVcIixcbiAgXCJwYXJhbXNcIjogW1wic3RhcnRBdXRob3JcIiwgXCJzdGFydFBlcm1saW5rXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfd2l0bmVzc2VzXCIsXG4gIFwicGFyYW1zXCI6IFtcIndpdG5lc3NJZHNcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfd2l0bmVzc19ieV9hY2NvdW50XCIsXG4gIFwicGFyYW1zXCI6IFtcImFjY291bnROYW1lXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3dpdG5lc3Nlc19ieV92b3RlXCIsXG4gIFwicGFyYW1zXCI6IFtcImZyb21cIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImxvb2t1cF93aXRuZXNzX2FjY291bnRzXCIsXG4gIFwicGFyYW1zXCI6IFtcImxvd2VyQm91bmROYW1lXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfd2l0bmVzc19jb3VudFwiXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2FjdGl2ZV93aXRuZXNzZXNcIlxufSwge1xuICBcImFwaVwiOiBcImRhdGFiYXNlX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9taW5lcl9xdWV1ZVwiXG59LCB7XG4gIFwiYXBpXCI6IFwiZGF0YWJhc2VfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3Jld2FyZF9mdW5kXCIsXG4gIFwicGFyYW1zXCI6IFtcIm5hbWVcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJkYXRhYmFzZV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfdmVzdGluZ19kZWxlZ2F0aW9uc1wiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50XCIsIFwiZnJvbVwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwibG9naW5fYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwibG9naW5cIixcbiAgXCJwYXJhbXNcIjogW1widXNlcm5hbWVcIiwgXCJwYXNzd29yZFwiXVxufSwge1xuICBcImFwaVwiOiBcImxvZ2luX2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hcGlfYnlfbmFtZVwiLFxuICBcInBhcmFtc1wiOiBbXCJkYXRhYmFzZV9hcGlcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJsb2dpbl9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfdmVyc2lvblwiXG59LCB7XG4gIFwiYXBpXCI6IFwiZm9sbG93X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9mb2xsb3dlcnNcIixcbiAgXCJwYXJhbXNcIjogW1wiZm9sbG93aW5nXCIsIFwic3RhcnRGb2xsb3dlclwiLCBcImZvbGxvd1R5cGVcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImZvbGxvd19hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZm9sbG93aW5nXCIsXG4gIFwicGFyYW1zXCI6IFtcImZvbGxvd2VyXCIsIFwic3RhcnRGb2xsb3dpbmdcIiwgXCJmb2xsb3dUeXBlXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJmb2xsb3dfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X2ZvbGxvd19jb3VudFwiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZm9sbG93X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9mZWVkX2VudHJpZXNcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudFwiLCBcImVudHJ5SWRcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImZvbGxvd19hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfZmVlZFwiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50XCIsIFwiZW50cnlJZFwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZm9sbG93X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9ibG9nX2VudHJpZXNcIixcbiAgXCJwYXJhbXNcIjogW1wiYWNjb3VudFwiLCBcImVudHJ5SWRcIiwgXCJsaW1pdFwiXVxufSwge1xuICBcImFwaVwiOiBcImZvbGxvd19hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfYmxvZ1wiLFxuICBcInBhcmFtc1wiOiBbXCJhY2NvdW50XCIsIFwiZW50cnlJZFwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwiZm9sbG93X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9hY2NvdW50X3JlcHV0YXRpb25zXCIsXG4gIFwicGFyYW1zXCI6IFtcImxvd2VyQm91bmROYW1lXCIsIFwibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJmb2xsb3dfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3JlYmxvZ2dlZF9ieVwiLFxuICBcInBhcmFtc1wiOiBbXCJhdXRob3JcIiwgXCJwZXJtbGlua1wiXVxufSwge1xuICBcImFwaVwiOiBcImZvbGxvd19hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfYmxvZ19hdXRob3JzXCIsXG4gIFwicGFyYW1zXCI6IFtcImJsb2dBY2NvdW50XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwibmV0d29ya19icm9hZGNhc3RfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiYnJvYWRjYXN0X3RyYW5zYWN0aW9uXCIsXG4gIFwicGFyYW1zXCI6IFtcInRyeFwiXVxufSwge1xuICBcImFwaVwiOiBcIm5ldHdvcmtfYnJvYWRjYXN0X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImJyb2FkY2FzdF90cmFuc2FjdGlvbl93aXRoX2NhbGxiYWNrXCIsXG4gIFwicGFyYW1zXCI6IFtcImNvbmZpcm1hdGlvbkNhbGxiYWNrXCIsIFwidHJ4XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwibmV0d29ya19icm9hZGNhc3RfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiYnJvYWRjYXN0X3RyYW5zYWN0aW9uX3N5bmNocm9ub3VzXCIsXG4gIFwicGFyYW1zXCI6IFtcInRyeFwiXVxufSwge1xuICBcImFwaVwiOiBcIm5ldHdvcmtfYnJvYWRjYXN0X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImJyb2FkY2FzdF9ibG9ja1wiLFxuICBcInBhcmFtc1wiOiBbXCJiXCJdXG59LCB7XG4gIFwiYXBpXCI6IFwibmV0d29ya19icm9hZGNhc3RfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwic2V0X21heF9ibG9ja19hZ2VcIixcbiAgXCJwYXJhbXNcIjogW1wibWF4QmxvY2tBZ2VcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJtYXJrZXRfaGlzdG9yeV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfdGlja2VyXCIsXG4gIFwicGFyYW1zXCI6IFtdXG59LCB7XG4gIFwiYXBpXCI6IFwibWFya2V0X2hpc3RvcnlfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3ZvbHVtZVwiLFxuICBcInBhcmFtc1wiOiBbXVxufSwge1xuICBcImFwaVwiOiBcIm1hcmtldF9oaXN0b3J5X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9vcmRlcl9ib29rXCIsXG4gIFwibWV0aG9kX25hbWVcIjogXCJnZXRNYXJrZXRPcmRlckJvb2tcIixcbiAgXCJwYXJhbXNcIjogW1wibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJtYXJrZXRfaGlzdG9yeV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfdHJhZGVfaGlzdG9yeVwiLFxuICBcInBhcmFtc1wiOiBbXCJzdGFydFwiLCBcImVuZFwiLCBcImxpbWl0XCJdXG59LCB7XG4gIFwiYXBpXCI6IFwibWFya2V0X2hpc3RvcnlfYXBpXCIsXG4gIFwibWV0aG9kXCI6IFwiZ2V0X3JlY2VudF90cmFkZXNcIixcbiAgXCJwYXJhbXNcIjogW1wibGltaXRcIl1cbn0sIHtcbiAgXCJhcGlcIjogXCJtYXJrZXRfaGlzdG9yeV9hcGlcIixcbiAgXCJtZXRob2RcIjogXCJnZXRfbWFya2V0X2hpc3RvcnlcIixcbiAgXCJwYXJhbXNcIjogW1wiYnVja2V0X3NlY29uZHNcIiwgXCJzdGFydFwiLCBcImVuZFwiXVxufSwge1xuICBcImFwaVwiOiBcIm1hcmtldF9oaXN0b3J5X2FwaVwiLFxuICBcIm1ldGhvZFwiOiBcImdldF9tYXJrZXRfaGlzdG9yeV9idWNrZXRzXCIsXG4gIFwicGFyYW1zXCI6IFtdXG59XTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaHR0cCA9IHJlcXVpcmUoJy4vaHR0cCcpO1xuXG52YXIgX2h0dHAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHR0cCk7XG5cbnZhciBfd3MgPSByZXF1aXJlKCcuL3dzJyk7XG5cbnZhciBfd3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGh0dHA6IF9odHRwMi5kZWZhdWx0LFxuICB3czogX3dzMi5kZWZhdWx0XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5qc29uUnBjID0ganNvblJwYztcblxudmFyIF9jcm9zc0ZldGNoID0gcmVxdWlyZSgnY3Jvc3MtZmV0Y2gnKTtcblxudmFyIF9jcm9zc0ZldGNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nyb3NzRmV0Y2gpO1xuXG52YXIgX2RlYnVnID0gcmVxdWlyZSgnZGVidWcnKTtcblxudmFyIF9kZWJ1ZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWJ1Zyk7XG5cbnZhciBfYmFzZSA9IHJlcXVpcmUoJy4vYmFzZScpO1xuXG52YXIgX2Jhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGRlYnVnID0gKDAsIF9kZWJ1ZzIuZGVmYXVsdCkoJ3N0ZWVtOmh0dHAnKTtcblxudmFyIFJQQ0Vycm9yID0gZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoUlBDRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gUlBDRXJyb3IocnBjRXJyb3IpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUlBDRXJyb3IpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJQQ0Vycm9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUlBDRXJyb3IpKS5jYWxsKHRoaXMsIHJwY0Vycm9yLm1lc3NhZ2UpKTtcblxuICAgIF90aGlzLm5hbWUgPSAnUlBDRXJyb3InO1xuICAgIF90aGlzLmNvZGUgPSBycGNFcnJvci5jb2RlO1xuICAgIF90aGlzLmRhdGEgPSBycGNFcnJvci5kYXRhO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBSUENFcnJvcjtcbn0oRXJyb3IpO1xuXG5mdW5jdGlvbiBqc29uUnBjKHVyaSwgX3JlZikge1xuICB2YXIgbWV0aG9kID0gX3JlZi5tZXRob2QsXG4gICAgICBpZCA9IF9yZWYuaWQsXG4gICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcblxuICB2YXIgcGF5bG9hZCA9IHsgaWQ6IGlkLCBqc29ucnBjOiAnMi4wJywgbWV0aG9kOiBtZXRob2QsIHBhcmFtczogcGFyYW1zIH07XG4gIHJldHVybiAoMCwgX2Nyb3NzRmV0Y2gyLmRlZmF1bHQpKHVyaSwge1xuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH1cbiAgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSFRUUCAnICsgcmVzLnN0YXR1cyArICc6ICcgKyByZXMuc3RhdHVzVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpO1xuICB9KS50aGVuKGZ1bmN0aW9uIChycGNSZXMpIHtcbiAgICBpZiAocnBjUmVzLmlkICE9PSBpZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGlkOiAnICsgcnBjUmVzLmlkKTtcbiAgICB9XG4gICAgaWYgKHJwY1Jlcy5lcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFJQQ0Vycm9yKHJwY1Jlcy5lcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBycGNSZXMucmVzdWx0O1xuICB9KTtcbn1cblxudmFyIEh0dHBUcmFuc3BvcnQgPSBmdW5jdGlvbiAoX1RyYW5zcG9ydCkge1xuICBfaW5oZXJpdHMoSHR0cFRyYW5zcG9ydCwgX1RyYW5zcG9ydCk7XG5cbiAgZnVuY3Rpb24gSHR0cFRyYW5zcG9ydCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSHR0cFRyYW5zcG9ydCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEh0dHBUcmFuc3BvcnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihIdHRwVHJhbnNwb3J0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSHR0cFRyYW5zcG9ydCwgW3tcbiAgICBrZXk6ICdzZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChhcGksIGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVzZUFwcGJhc2VBcGkpIHtcbiAgICAgICAgYXBpID0gJ2NvbmRlbnNlcl9hcGknO1xuICAgICAgfVxuICAgICAgZGVidWcoJ1N0ZWVtOjpzZW5kJywgYXBpLCBkYXRhKTtcbiAgICAgIHZhciBpZCA9IGRhdGEuaWQgfHwgdGhpcy5pZCsrO1xuICAgICAgdmFyIHBhcmFtcyA9IFthcGksIGRhdGEubWV0aG9kLCBkYXRhLnBhcmFtc107XG4gICAgICBqc29uUnBjKHRoaXMub3B0aW9ucy51cmksIHsgbWV0aG9kOiAnY2FsbCcsIGlkOiBpZCwgcGFyYW1zOiBwYXJhbXMgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSHR0cFRyYW5zcG9ydDtcbn0oX2Jhc2UyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBIdHRwVHJhbnNwb3J0OyIsInZhciBzZWxmID0ge307XG4oZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH07XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdO1xuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH07XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fTtcblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSk7XG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV07XG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV07XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpOyB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpOyB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pOyB9KTtcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH07XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XG4gICAgICB9O1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKTtcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpO1xuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keTtcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKTtcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5O1xuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybDtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFscztcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2Q7XG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlO1xuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXQ7XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnO1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpO1xuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbDtcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbDtcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSk7XG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9Jyk7XG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICByYXdIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKCk7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwO1xuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDA7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snO1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJztcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdCk7XG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKTtcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9O1xuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSk7XG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcic7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH07XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdO1xuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH07XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVycztcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlO1xuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpO1xuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpO1xuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKTtcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpO1xuICAgIH0pXG4gIH07XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG4vKlxuICogUm9sbHVwIHdyYXBzIHVwIHRoZSB3aGF0d2ctZmV0Y2ggY29kZSBvbiBwb255ZmlsbCBtb2RlIGluXG4gKiBvcmRlciB0byBwcmV2ZW50IGl0IGZyb20gYWRkaW5nIGZldGNoIHRvIHRoZSBnbG9iYWwgb2JqZWN0LlxuICovXG5cbiAgICAgIHZhciBmZXRjaCA9IHNlbGYuZmV0Y2g7XG5cbiAgICAgIGZldGNoLmZldGNoID0gZmV0Y2g7XG4gICAgICBmZXRjaC5SZXNwb25zZSA9IHNlbGYuUmVzcG9uc2U7XG4gICAgICBmZXRjaC5IZWFkZXJzID0gc2VsZi5IZWFkZXJzO1xuICAgICAgZmV0Y2guUmVxdWVzdCA9IHNlbGYuUmVxdWVzdDtcblxuICAgICAgLy8gZmV0Y2ggbm93IGNhbiBiZSBpbXBvcnRlZCBhcyB0aGUgZGVmYXVsdCBvYmplY3RcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZmV0Y2g7XG4gICAgXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5cbnZhciBfZXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFRyYW5zcG9ydCA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhUcmFuc3BvcnQsIF9FdmVudEVtaXR0ZXIpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zcG9ydCgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNwb3J0KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUcmFuc3BvcnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUcmFuc3BvcnQpKS5jYWxsKHRoaXMsIG9wdGlvbnMpKTtcblxuICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIF90aGlzLmlkID0gMDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVHJhbnNwb3J0LCBbe1xuICAgIGtleTogJ3NldE9wdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xpc3RlblRvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuVG8odGFyZ2V0LCBldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO2Vsc2UgdGFyZ2V0Lm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO2Vsc2UgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6ICdzdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge31cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBUcmFuc3BvcnQ7XG59KF9ldmVudHMyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc3BvcnQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2RldGVjdE5vZGUgPSByZXF1aXJlKCdkZXRlY3Qtbm9kZScpO1xuXG52YXIgX2RldGVjdE5vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGV0ZWN0Tm9kZSk7XG5cbnZhciBfZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpO1xuXG52YXIgX2RlYnVnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlYnVnKTtcblxudmFyIF9iYXNlID0gcmVxdWlyZSgnLi9iYXNlJyk7XG5cbnZhciBfYmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgV2ViU29ja2V0ID0gdm9pZCAwO1xuaWYgKF9kZXRlY3ROb2RlMi5kZWZhdWx0KSB7XG4gIFdlYlNvY2tldCA9IHJlcXVpcmUoJ3dzJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZ2xvYmFsLXJlcXVpcmVcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgV2ViU29ja2V0ID0gd2luZG93LldlYlNvY2tldDtcbn0gZWxzZSB7XG4gIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGRlY2lkZSBvbiBhIGBXZWJTb2NrZXRgIGNsYXNzXCIpO1xufVxuXG52YXIgZGVidWcgPSAoMCwgX2RlYnVnMi5kZWZhdWx0KSgnc3RlZW06d3MnKTtcblxudmFyIFdzVHJhbnNwb3J0ID0gZnVuY3Rpb24gKF9UcmFuc3BvcnQpIHtcbiAgX2luaGVyaXRzKFdzVHJhbnNwb3J0LCBfVHJhbnNwb3J0KTtcblxuICBmdW5jdGlvbiBXc1RyYW5zcG9ydCgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV3NUcmFuc3BvcnQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFdzVHJhbnNwb3J0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoV3NUcmFuc3BvcnQpKS5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oeyBpZDogMCB9LCBvcHRpb25zKSkpO1xuXG4gICAgX3RoaXMuX3JlcXVlc3RzID0gbmV3IE1hcCgpO1xuICAgIF90aGlzLmluRmxpZ2h0ID0gMDtcbiAgICBfdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV3NUcmFuc3BvcnQsIFt7XG4gICAga2V5OiAnc3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5zdGFydFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRQcm9taXNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXJ0UHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMyLndzID0gbmV3IFdlYlNvY2tldChfdGhpczIub3B0aW9ucy53ZWJzb2NrZXQpO1xuICAgICAgICBfdGhpczIud3Mub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBfdGhpczIuc3RhcnRQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMyLndzLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICBfdGhpczIud3Mub25lcnJvciA9IF90aGlzMi5vbkVycm9yLmJpbmQoX3RoaXMyKTtcbiAgICAgICAgICBfdGhpczIud3Mub25tZXNzYWdlID0gX3RoaXMyLm9uTWVzc2FnZS5iaW5kKF90aGlzMik7XG4gICAgICAgICAgX3RoaXMyLndzLm9uY2xvc2UgPSBfdGhpczIub25DbG9zZS5iaW5kKF90aGlzMik7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5zdGFydFByb21pc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBkZWJ1ZygnU3RvcHBpbmcuLi4nKTtcblxuICAgICAgdGhpcy5zdGFydFByb21pc2UgPSBudWxsO1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlcXVlc3RzLmNsZWFyKCk7XG5cbiAgICAgIGlmICh0aGlzLndzKSB7XG4gICAgICAgIHRoaXMud3Mub25lcnJvciA9IHRoaXMud3Mub25tZXNzYWdlID0gdGhpcy53cy5vbmNsb3NlID0gbnVsbDtcbiAgICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgICAgICB0aGlzLndzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChhcGksIGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgZGVidWcoJ1N0ZWVtOjpzZW5kJywgYXBpLCBkYXRhKTtcbiAgICAgIHJldHVybiB0aGlzLnN0YXJ0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWZlcnJhbCA9IHt9O1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgZGVmZXJyYWwucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHJlc29sdmUodmFsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHZhbCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBkZWZlcnJhbC5yZWplY3QgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICByZWplY3QodmFsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKHZhbCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF90aGlzMy5vcHRpb25zLnVzZUFwcGJhc2VBcGkpIHtcbiAgICAgICAgICBhcGkgPSAnY29uZGVuc2VyX2FwaSc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3JlcXVlc3QgPSB7XG4gICAgICAgICAgZGVmZXJyYWw6IGRlZmVycmFsLFxuICAgICAgICAgIHN0YXJ0ZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICBpZDogZGF0YS5pZCB8fCBfdGhpczMuaWQrKyxcbiAgICAgICAgICAgIG1ldGhvZDogJ2NhbGwnLFxuICAgICAgICAgICAganNvbnJwYzogJzIuMCcsXG4gICAgICAgICAgICBwYXJhbXM6IFthcGksIGRhdGEubWV0aG9kLCBkYXRhLnBhcmFtc11cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzMy5pbkZsaWdodCsrO1xuICAgICAgICBfdGhpczMuX3JlcXVlc3RzLnNldChfcmVxdWVzdC5tZXNzYWdlLmlkLCBfcmVxdWVzdCk7XG4gICAgICAgIF90aGlzMy53cy5zZW5kKEpTT04uc3RyaW5naWZ5KF9yZXF1ZXN0Lm1lc3NhZ2UpKTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmFsO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25FcnJvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLl9yZXF1ZXN0c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICB2YXIgX3JlcXVlc3QgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIF9yZXF1ZXN0LmRlZmVycmFsLnJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbG9zZSgpIHtcbiAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignQ29ubmVjdGlvbiB3YXMgY2xvc2VkJyk7XG4gICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IHRoaXMuX3JlcXVlc3RzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIF9yZXF1ZXN0ID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgICAgX3JlcXVlc3QuZGVmZXJyYWwucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuICAgICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXF1ZXN0cy5jbGVhcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTWVzc2FnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVzc2FnZSh3ZWJzb2NrZXRNZXNzYWdlKSB7XG4gICAgICB2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2Uod2Vic29ja2V0TWVzc2FnZS5kYXRhKTtcbiAgICAgIGRlYnVnKCctLSBTdGVlbS5vbk1lc3NhZ2UgLS0+JywgbWVzc2FnZS5pZCk7XG4gICAgICBpZiAoIXRoaXMuX3JlcXVlc3RzLmhhcyhtZXNzYWdlLmlkKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhbmljOiBubyByZXF1ZXN0IGluIHF1ZXVlIGZvciBtZXNzYWdlIGlkICcgKyBtZXNzYWdlLmlkKTtcbiAgICAgIH1cbiAgICAgIHZhciBfcmVxdWVzdCA9IHRoaXMuX3JlcXVlc3RzLmdldChtZXNzYWdlLmlkKTtcbiAgICAgIHRoaXMuX3JlcXVlc3RzLmRlbGV0ZShtZXNzYWdlLmlkKTtcblxuICAgICAgdmFyIGVycm9yQ2F1c2UgPSBtZXNzYWdlLmVycm9yO1xuICAgICAgaWYgKGVycm9yQ2F1c2UpIHtcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci10ZW1wbGF0ZVxuICAgICAgICAoZXJyb3JDYXVzZS5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gY29tcGxldGUgb3BlcmF0aW9uJykgKyAnIChzZWUgZXJyLnBheWxvYWQgZm9yIHRoZSBmdWxsIGVycm9yIHBheWxvYWQpJyk7XG4gICAgICAgIGVyci5wYXlsb2FkID0gbWVzc2FnZTtcbiAgICAgICAgX3JlcXVlc3QuZGVmZXJyYWwucmVqZWN0KGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXQoJ3RyYWNrLXBlcmZvcm1hbmNlJywgX3JlcXVlc3QubWVzc2FnZS5tZXRob2QsIERhdGUubm93KCkgLSBfcmVxdWVzdC5zdGFydGVkQXQpO1xuICAgICAgICBfcmVxdWVzdC5kZWZlcnJhbC5yZXNvbHZlKG1lc3NhZ2UucmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV3NUcmFuc3BvcnQ7XG59KF9iYXNlMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gV3NUcmFuc3BvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNhbWVsQ2FzZSA9IGNhbWVsQ2FzZTtcbnZhciBzbmFrZUNhc2VSZSA9IC9fKFthLXpdKS9nO1xuZnVuY3Rpb24gY2FtZWxDYXNlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2Uoc25ha2VDYXNlUmUsIGZ1bmN0aW9uIChfbSwgbCkge1xuICAgIHJldHVybiBsLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9RQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1Q0E7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvTkE7QUFDQTs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=