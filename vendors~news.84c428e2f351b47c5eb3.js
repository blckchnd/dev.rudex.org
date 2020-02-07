(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[35],{

/***/ 3165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var api = __webpack_require__(3166);
var config = __webpack_require__(3167);
var utils = __webpack_require__(3184);

module.exports = {
  api: api,
  config: config,
  utils: utils
};

/***/ }),

/***/ 3166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(462);

var _events2 = _interopRequireDefault(_events);

var _config = __webpack_require__(3167);

var _config2 = _interopRequireDefault(_config);

var _methods = __webpack_require__(3176);

var _methods2 = _interopRequireDefault(_methods);

var _transports = __webpack_require__(3177);

var _transports2 = _interopRequireDefault(_transports);

var _utils = __webpack_require__(3184);

var _http = __webpack_require__(3178);

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

/***/ 3167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _each = __webpack_require__(3168);

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = __webpack_require__(3175);

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

/***/ 3168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3169);


/***/ }),

/***/ 3169:
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(3170),
    baseEach = __webpack_require__(3171),
    castFunction = __webpack_require__(3174),
    isArray = __webpack_require__(1206);

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

/***/ 3170:
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

/***/ 3171:
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(3172),
    createBaseEach = __webpack_require__(3173);

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

/***/ 3172:
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(1449),
    keys = __webpack_require__(1775);

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

/***/ 3173:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(1463);

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

/***/ 3174:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(1481);

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

/***/ 3175:
/***/ (function(module) {

module.exports = {"transport":"http","websocket":"wss://gtg.steem.house:8090","uri":"https://api.steemit.com","url":"","dev_uri":"https://api.steemitdev.com","stage_uri":"https://api.steemitstage.com","address_prefix":"STM","chain_id":"0000000000000000000000000000000000000000000000000000000000000000"};

/***/ }),

/***/ 3176:
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

/***/ 3177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = __webpack_require__(3178);

var _http2 = _interopRequireDefault(_http);

var _ws = __webpack_require__(3181);

var _ws2 = _interopRequireDefault(_ws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  http: _http2.default,
  ws: _ws2.default
};

/***/ }),

/***/ 3178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.jsonRpc = jsonRpc;

var _crossFetch = __webpack_require__(3179);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _debug = __webpack_require__(2458);

var _debug2 = _interopRequireDefault(_debug);

var _base = __webpack_require__(3180);

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

/***/ 3179:
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

/***/ 3180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(462);

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

/***/ 3181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _detectNode = __webpack_require__(3182);

var _detectNode2 = _interopRequireDefault(_detectNode);

var _debug = __webpack_require__(2458);

var _debug2 = _interopRequireDefault(_debug);

var _base = __webpack_require__(3180);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebSocket = void 0;
if (_detectNode2.default) {
  WebSocket = __webpack_require__(3183); // eslint-disable-line global-require
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

/***/ 3182:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),

/***/ 3184:
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

/***/ }),

/***/ 3185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var api = __webpack_require__(3186);
var auth = __webpack_require__(3211);
var broadcast = __webpack_require__(3233);
var formatter = __webpack_require__(3235)(api);
var memo = __webpack_require__(3237);
var config = __webpack_require__(3206);
var utils = __webpack_require__(3209);
var ecc = __webpack_require__(3214);

module.exports = {
  api: api,
  auth: auth,
  broadcast: broadcast,
  formatter: formatter,
  memo: memo,
  config: config,
  utils: utils,
  ecc: ecc
};

/***/ }),

/***/ 3186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(462);

var _events2 = _interopRequireDefault(_events);

var _bluebird = __webpack_require__(3187);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _cloneDeep = __webpack_require__(3188);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _defaults = __webpack_require__(3205);

var _defaults2 = _interopRequireDefault(_defaults);

var _detectNode = __webpack_require__(3182);

var _detectNode2 = _interopRequireDefault(_detectNode);

var _debug = __webpack_require__(2458);

var _debug2 = _interopRequireDefault(_debug);

var _config = __webpack_require__(3206);

var _config2 = _interopRequireDefault(_config);

var _methods = __webpack_require__(3208);

var _methods2 = _interopRequireDefault(_methods);

var _utils = __webpack_require__(3209);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debugEmitters = (0, _debug2.default)('golos:emitters');
var debugProtocol = (0, _debug2.default)('golos:protocol');
var debugSetup = (0, _debug2.default)('golos:setup');
var debugWs = (0, _debug2.default)('golos:ws');

var WebSocket = void 0;
if (_detectNode2.default) {
  WebSocket = __webpack_require__(3210); // eslint-disable-line global-require
} else if (typeof window !== 'undefined') {
  WebSocket = window.WebSocket;
} else {
  throw new Error('Couldn\'t decide on a `WebSocket` class');
}

var DEFAULTS = {
  id: 0
};

var cbMethods = ['set_block_applied_callback', 'set_pending_transaction_callback', 'set_callback'];

var expectedResponseMs = process.env.EXPECTED_RESPONSE_MS || 2000;

var Golos = function (_EventEmitter) {
  _inherits(Golos, _EventEmitter);

  function Golos() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Golos);

    var _this = _possibleConstructorReturn(this, (Golos.__proto__ || Object.getPrototypeOf(Golos)).call(this, options));

    (0, _defaults2.default)(options, DEFAULTS);
    _this.options = (0, _cloneDeep2.default)(options);
    _this.id = 0;
    _this.inFlight = 0;
    _this.currentP = _bluebird2.default.fulfilled();
    _this.isOpen = false;
    _this.releases = [];
    _this.requests = {};
    _this.callbacks = {};
    return _this;
  }

  _createClass(Golos, [{
    key: 'setWebSocket',
    value: function setWebSocket(url) {
      console.warn("golos.api.setWebSocket(url) is now deprecated instead use golos.config.set('websocket',url)");
      debugSetup('Setting WS', url);
      _config2.default.set('websocket', url);
      this.stop();
    }
  }, {
    key: 'start',
    value: function start() {
      var _this2 = this;

      if (this.startP) {
        return this.startP;
      }

      var startP = new _bluebird2.default(function (resolve, reject) {
        if (startP !== _this2.startP) return;
        var url = _config2.default.get('websocket');
        _this2.ws = new WebSocket(url);

        var releaseOpen = _this2.listenTo(_this2.ws, 'open', function () {
          debugWs('Opened WS connection with', url);
          _this2.isOpen = true;
          releaseOpen();
          resolve();
        });

        var releaseClose = _this2.listenTo(_this2.ws, 'close', function () {
          debugWs('Closed WS connection with', url);
          _this2.isOpen = false;
          delete _this2.ws;
          _this2.stop();

          if (startP.isPending()) {
            reject(new Error('The WS connection was closed before this operation was made'));
          }
        });

        var releaseMessage = _this2.listenTo(_this2.ws, 'message', function (message) {
          debugWs('Received message', message.data);
          var data = JSON.parse(message.data);
          var id = data.id;
          var request = _this2.requests[id] || _this2.callbacks[id];
          if (!request) {
            debugWs('Golos.onMessage error: unknown request ', id);
            return;
          }
          delete _this2.requests[id];
          _this2.onMessage(data, request);
        });

        _this2.releases = _this2.releases.concat([releaseOpen, releaseClose, releaseMessage]);
      });

      this.startP = startP;

      return startP;
    }
  }, {
    key: 'stop',
    value: function stop() {
      debugSetup('Stopping...');
      if (this.ws) this.ws.close();
      delete this.startP;
      delete this.ws;
      this.releases.forEach(function (release) {
        return release();
      });
      this.releases = [];
    }
  }, {
    key: 'listenTo',
    value: function listenTo(target, eventName, callback) {
      debugEmitters('Adding listener for', eventName, 'from', target.constructor.name);
      if (target.addEventListener) target.addEventListener(eventName, callback);else target.on(eventName, callback);

      return function () {
        debugEmitters('Removing listener for', eventName, 'from', target.constructor.name);
        if (target.removeEventListener) target.removeEventListener(eventName, callback);else target.removeListener(eventName, callback);
      };
    }
  }, {
    key: 'onMessage',
    value: function onMessage(message, request) {
      var api = request.api,
          data = request.data,
          resolve = request.resolve,
          reject = request.reject,
          start_time = request.start_time;

      debugWs('-- Golos.onMessage -->', message.id);
      var errorCause = message.error;
      if (errorCause) {
        var err = new Error(
        // eslint-disable-next-line prefer-template
        (errorCause.message || 'Failed to complete operation') + ' (see err.payload for the full error payload)');
        err.payload = message;
        reject(err);
        return;
      }

      debugProtocol('Resolved', api, data, '->', message);
      if (cbMethods.includes(data.method)) {
        this.callbacks[message.id].cb(null, message.result);
      } else {
        delete this.requests[message.id];
        resolve(message.result);
      }
    }
  }, {
    key: 'send',
    value: function send(api, data, callback) {
      var _this3 = this;

      debugSetup('Golos::send', api, data);
      var id = data.id || this.id++;
      var startP = this.start();

      this.currentP = startP.then(function () {
        return new _bluebird2.default(function (resolve, reject) {
          if (!_this3.ws) {
            reject(new Error('The WS connection was closed while this request was pending'));
            return;
          }

          var payload = JSON.stringify({
            id: id,
            method: 'call',
            jsonrpc: '2.0',
            params: [api, data.method, data.params]
          });

          debugWs('Sending message', payload);
          if (cbMethods.includes(data.method)) {
            _this3.callbacks[id] = {
              api: api,
              data: data,
              cb: callback
            };
          } else {
            _this3.requests[id] = {
              api: api,
              data: data,
              resolve: resolve,
              reject: reject,
              start_time: Date.now()
            };
          }

          _this3.ws.send(payload);
        });
      }).nodeify(callback);

      return this.currentP;
    }
  }, {
    key: 'streamBlockNumber',
    value: function streamBlockNumber() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'head';

      var _this4 = this;

      var callback = arguments[1];
      var ts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

      if (typeof mode === 'function') {
        callback = mode;
        mode = 'head';
      }
      var current = '';
      var running = true;

      var update = function update() {
        if (!running) return;

        _this4.getDynamicGlobalPropertiesAsync().then(function (result) {
          var blockId = mode === 'irreversible' ? result.last_irreversible_block_num : result.head_block_number;

          if (blockId !== current) {
            if (current) {
              for (var i = current; i < blockId; i++) {
                if (i !== current) {
                  callback(null, i);
                }
                current = i;
              }
            } else {
              current = blockId;
              callback(null, blockId);
            }
          }

          _bluebird2.default.delay(ts).then(function () {
            update();
          });
        }, function (err) {
          callback(err);
        });
      };

      update();

      return function () {
        running = false;
      };
    }
  }, {
    key: 'streamBlock',
    value: function streamBlock() {
      var _this5 = this;

      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'head';
      var callback = arguments[1];

      if (typeof mode === 'function') {
        callback = mode;
        mode = 'head';
      }

      var current = '';
      var last = '';

      var release = this.streamBlockNumber(mode, function (err, id) {
        if (err) {
          release();
          callback(err);
          return;
        }

        current = id;
        if (current !== last) {
          last = current;
          _this5.getBlock(current, callback);
        }
      });

      return release;
    }
  }, {
    key: 'streamTransactions',
    value: function streamTransactions() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'head';
      var callback = arguments[1];

      if (typeof mode === 'function') {
        callback = mode;
        mode = 'head';
      }

      var release = this.streamBlock(mode, function (err, result) {
        if (err) {
          release();
          callback(err);
          return;
        }

        if (result && result.transactions) {
          result.transactions.forEach(function (transaction) {
            callback(null, transaction);
          });
        }
      });

      return release;
    }
  }, {
    key: 'streamOperations',
    value: function streamOperations() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'head';
      var callback = arguments[1];

      if (typeof mode === 'function') {
        callback = mode;
        mode = 'head';
      }

      var release = this.streamTransactions(mode, function (err, transaction) {
        if (err) {
          release();
          callback(err);
          return;
        }

        transaction.operations.forEach(function (operation) {
          callback(null, operation);
        });
      });

      return release;
    }
  }]);

  return Golos;
}(_events2.default);

// Generate Methods from methods.js


_methods2.default.forEach(function (method) {
  var methodName = method.method_name || (0, _utils.camelCase)(method.method);
  var methodParams = method.params || [];
  var defaultParms = {};
  var hasDefaultValues = method.has_default_values;

  if (hasDefaultValues) {
    methodParams.forEach(function (param) {
      var _param$split = param.split('='),
          _param$split2 = _slicedToArray(_param$split, 2),
          p = _param$split2[0],
          value = _param$split2[1];

      defaultParms[p] = value ? JSON.parse(value) : '';
    });
  }

  Golos.prototype[methodName + 'With'] = function Golos$$specializedSendWith(options, callback) {
    var params = methodParams.map(function (param) {
      return options[hasDefaultValues ? param.split('=')[0] : param];
    });
    return this.send(method.api, {
      method: method.method,
      params: params
    }, callback);
  };

  Golos.prototype[methodName] = function Golos$specializedSend() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var options = {};
    if (hasDefaultValues) {
      var argsWithoutCb = args.slice(0, args.length - 1);
      methodParams.forEach(function (param, i) {
        var _param$split3 = param.split('='),
            _param$split4 = _slicedToArray(_param$split3, 2),
            p = _param$split4[0],
            value = _param$split4[1];

        if (argsWithoutCb[i]) {
          options[p] = argsWithoutCb[i];
        }
      });
      options = Object.assign({}, defaultParms, options);
    } else {
      var opt = methodParams.reduce(function (memo, param, i) {
        memo[param] = args[i];
        return memo;
      }, {});
      options = Object.assign({}, opt);
    }
    var callback = args[hasDefaultValues ? args.length - 1 : methodParams.length];

    return this[methodName + 'With'](options, callback);
  };
});

_bluebird2.default.promisifyAll(Golos.prototype);

Golos.prototype['setBlockAppliedCallback'] = function Golos$setCallback(type, callback) {
  return this.send('database_api', {
    method: 'set_block_applied_callback',
    params: [type]
  }, callback);
};

Golos.prototype['setPendingTransactionCallback'] = function Golos$setCallback(callback) {
  return this.send('database_api', {
    method: 'set_pending_transaction_callback',
    params: []
  }, callback);
};

Golos.prototype['setPrivateMessageCallback'] = function Golos$setCallback(query, callback) {
  return this.send('private_message', {
    method: 'set_callback',
    params: [query]
  }, callback);
};

// Export singleton instance
var golos = new Golos();
exports = module.exports = golos;
exports.Golos = Golos;
exports.Golos.DEFAULTS = DEFAULTS;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(431)))

/***/ }),

/***/ 3187:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2017 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.5.1
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(e){if(true)module.exports=e();else { var f; }}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule");
var Queue = _dereq_("./queue");
var util = _dereq_("./util");

function Async() {
    this._customScheduler = false;
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._haveDrainedQueues = false;
    this._trampolineEnabled = true;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule = schedule;
}

Async.prototype.setScheduler = function(fn) {
    var prev = this._schedule;
    this._schedule = fn;
    this._customScheduler = true;
    return prev;
};

Async.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
};

Async.prototype.enableTrampoline = function() {
    this._trampolineEnabled = true;
};

Async.prototype.disableTrampolineIfNecessary = function() {
    if (util.hasDevTools) {
        this._trampolineEnabled = false;
    }
};

Async.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
};


Async.prototype.fatalError = function(e, isNode) {
    if (isNode) {
        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
            "\n");
        process.exit(2);
    } else {
        this.throwLater(e);
    }
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

if (!util.hasDevTools) {
    Async.prototype.invokeLater = AsyncInvokeLater;
    Async.prototype.invoke = AsyncInvoke;
    Async.prototype.settlePromises = AsyncSettlePromises;
} else {
    Async.prototype.invokeLater = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvokeLater.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                setTimeout(function() {
                    fn.call(receiver, arg);
                }, 100);
            });
        }
    };

    Async.prototype.invoke = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvoke.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                fn.call(receiver, arg);
            });
        }
    };

    Async.prototype.settlePromises = function(promise) {
        if (this._trampolineEnabled) {
            AsyncSettlePromises.call(this, promise);
        } else {
            this._schedule(function() {
                promise._settlePromises();
            });
        }
    };
}

Async.prototype._drainQueue = function(queue) {
    while (queue.length() > 0) {
        var fn = queue.shift();
        if (typeof fn !== "function") {
            fn._settlePromises();
            continue;
        }
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
};

Async.prototype._drainQueues = function () {
    this._drainQueue(this._normalQueue);
    this._reset();
    this._haveDrainedQueues = true;
    this._drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = Async;
module.exports.firstLineError = firstLineError;

},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
var calledBind = false;
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    if (((this._bitField & 50397184) === 0)) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    if (!calledBind) {
        calledBind = true;
        Promise.prototype._propagateFrom = debug.propagateFromFunction();
        Promise.prototype._boundValue = debug.boundValueFunction();
    }
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    ret._setBoundTo(maybePromise);
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, undefined, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, undefined, ret, context);
        ret._setOnCancel(maybePromise);
    } else {
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 2097152;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~2097152);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 2097152) === 2097152;
};

Promise.bind = function (thisArg, value) {
    return Promise.resolve(value).bind(thisArg);
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise":22}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
if (false) { var getCompiled, makeGetter, makeMethodCaller; }

function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var args = [].slice.call(arguments, 1);;
    if (false) { var maybeCaller; }
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util":36}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

Promise.prototype["break"] = Promise.prototype.cancel = function() {
    if (!debug.cancellation()) return this._warn("cancellation is disabled");

    var promise = this;
    var child = promise;
    while (promise._isCancellable()) {
        if (!promise._cancelBy(child)) {
            if (child._isFollowing()) {
                child._followee().cancel();
            } else {
                child._cancelBranched();
            }
            break;
        }

        var parent = promise._cancellationParent;
        if (parent == null || !parent._isCancellable()) {
            if (promise._isFollowing()) {
                promise._followee().cancel();
            } else {
                promise._cancelBranched();
            }
            break;
        } else {
            if (promise._isFollowing()) promise._followee().cancel();
            promise._setWillBeCancelled();
            child = promise;
            promise = parent;
        }
    }
};

Promise.prototype._branchHasCancelled = function() {
    this._branchesRemainingToCancel--;
};

Promise.prototype._enoughBranchesHaveCancelled = function() {
    return this._branchesRemainingToCancel === undefined ||
           this._branchesRemainingToCancel <= 0;
};

Promise.prototype._cancelBy = function(canceller) {
    if (canceller === this) {
        this._branchesRemainingToCancel = 0;
        this._invokeOnCancel();
        return true;
    } else {
        this._branchHasCancelled();
        if (this._enoughBranchesHaveCancelled()) {
            this._invokeOnCancel();
            return true;
        }
    }
    return false;
};

Promise.prototype._cancelBranched = function() {
    if (this._enoughBranchesHaveCancelled()) {
        this._cancel();
    }
};

Promise.prototype._cancel = function() {
    if (!this._isCancellable()) return;
    this._setCancelled();
    async.invoke(this._cancelPromises, this, undefined);
};

Promise.prototype._cancelPromises = function() {
    if (this._length() > 0) this._settlePromises();
};

Promise.prototype._unsetOnCancel = function() {
    this._onCancelField = undefined;
};

Promise.prototype._isCancellable = function() {
    return this.isPending() && !this._isCancelled();
};

Promise.prototype.isCancellable = function() {
    return this.isPending() && !this.isCancelled();
};

Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
    if (util.isArray(onCancelCallback)) {
        for (var i = 0; i < onCancelCallback.length; ++i) {
            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
        }
    } else if (onCancelCallback !== undefined) {
        if (typeof onCancelCallback === "function") {
            if (!internalOnly) {
                var e = tryCatch(onCancelCallback).call(this._boundValue());
                if (e === errorObj) {
                    this._attachExtraTrace(e.e);
                    async.throwLater(e.e);
                }
            }
        } else {
            onCancelCallback._resultCancelled(this);
        }
    }
};

Promise.prototype._invokeOnCancel = function() {
    var onCancelCallback = this._onCancel();
    this._unsetOnCancel();
    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
};

Promise.prototype._invokeInternalOnCancel = function() {
    if (this._isCancellable()) {
        this._doInvokeOnCancel(this._onCancel(), true);
        this._unsetOnCancel();
    }
};

Promise.prototype._resultCancelled = function() {
    this.cancel();
};

};

},{"./util":36}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util");
var getKeys = _dereq_("./es5").keys;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function catchFilter(instances, cb, promise) {
    return function(e) {
        var boundTo = promise._boundValue();
        predicateLoop: for (var i = 0; i < instances.length; ++i) {
            var item = instances[i];

            if (item === Error ||
                (item != null && item.prototype instanceof Error)) {
                if (e instanceof item) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (typeof item === "function") {
                var matchesPredicate = tryCatch(item).call(boundTo, e);
                if (matchesPredicate === errorObj) {
                    return matchesPredicate;
                } else if (matchesPredicate) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (util.isObject(e)) {
                var keys = getKeys(item);
                for (var j = 0; j < keys.length; ++j) {
                    var key = keys[j];
                    if (item[key] != e[key]) {
                        continue predicateLoop;
                    }
                }
                return tryCatch(cb).call(boundTo, e);
            }
        }
        return NEXT_FILTER;
    };
}

return catchFilter;
};

},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var longStackTraces = false;
var contextStack = [];

Promise.prototype._promiseCreated = function() {};
Promise.prototype._pushContext = function() {};
Promise.prototype._popContext = function() {return null;};
Promise._peekContext = Promise.prototype._peekContext = function() {};

function Context() {
    this._trace = new Context.CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (this._trace !== undefined) {
        this._trace._promiseCreated = null;
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (this._trace !== undefined) {
        var trace = contextStack.pop();
        var ret = trace._promiseCreated;
        trace._promiseCreated = null;
        return ret;
    }
    return null;
};

function createContext() {
    if (longStackTraces) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}
Context.CapturedTrace = null;
Context.create = createContext;
Context.deactivateLongStackTraces = function() {};
Context.activateLongStackTraces = function() {
    var Promise_pushContext = Promise.prototype._pushContext;
    var Promise_popContext = Promise.prototype._popContext;
    var Promise_PeekContext = Promise._peekContext;
    var Promise_peekContext = Promise.prototype._peekContext;
    var Promise_promiseCreated = Promise.prototype._promiseCreated;
    Context.deactivateLongStackTraces = function() {
        Promise.prototype._pushContext = Promise_pushContext;
        Promise.prototype._popContext = Promise_popContext;
        Promise._peekContext = Promise_PeekContext;
        Promise.prototype._peekContext = Promise_peekContext;
        Promise.prototype._promiseCreated = Promise_promiseCreated;
        longStackTraces = false;
    };
    longStackTraces = true;
    Promise.prototype._pushContext = Context.prototype._pushContext;
    Promise.prototype._popContext = Context.prototype._popContext;
    Promise._peekContext = Promise.prototype._peekContext = peekContext;
    Promise.prototype._promiseCreated = function() {
        var ctx = this._peekContext();
        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
    };
};
return Context;
};

},{}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, Context) {
var getDomain = Promise._getDomain;
var async = Promise._async;
var Warning = _dereq_("./errors").Warning;
var util = _dereq_("./util");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var printWarning;
var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                        (true ||
                         util.env("BLUEBIRD_DEBUG") ||
                         util.env("NODE_ENV") === "development"));

var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
    (debugging || util.env("BLUEBIRD_WARNINGS")));

var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

Promise.prototype.suppressUnhandledRejections = function() {
    var target = this._target();
    target._bitField = ((target._bitField & (~1048576)) |
                      524288);
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 524288) !== 0) return;
    this._setRejectionIsUnhandled();
    var self = this;
    setTimeout(function() {
        self._notifyUnhandledRejection();
    }, 1);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._setReturnedNonUndefined = function() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._returnedNonUndefined = function() {
    return (this._bitField & 268435456) !== 0;
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue();
        this._setUnhandledRejectionIsNotified();
        fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 262144;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~262144);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 262144) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 1048576;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~1048576);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
    return warn(message, shouldUseOwnTrace, promise || this);
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var domain = getDomain();
    possiblyUnhandledRejection =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var domain = getDomain();
    unhandledRejectionHandled =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

var disableLongStackTraces = function() {};
Promise.longStackTraces = function () {
    if (async.haveItemsQueued() && !config.longStackTraces) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (!config.longStackTraces && longStackTracesIsSupported()) {
        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
        config.longStackTraces = true;
        disableLongStackTraces = function() {
            if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
            }
            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
            Context.deactivateLongStackTraces();
            async.enableTrampoline();
            config.longStackTraces = false;
        };
        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
        Context.activateLongStackTraces();
        async.disableTrampolineIfNecessary();
    }
};

Promise.hasLongStackTraces = function () {
    return config.longStackTraces && longStackTracesIsSupported();
};

var fireDomEvent = (function() {
    try {
        if (typeof CustomEvent === "function") {
            var event = new CustomEvent("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new CustomEvent(name.toLowerCase(), {
                    detail: event,
                    cancelable: true
                });
                return !util.global.dispatchEvent(domEvent);
            };
        } else if (typeof Event === "function") {
            var event = new Event("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new Event(name.toLowerCase(), {
                    cancelable: true
                });
                domEvent.detail = event;
                return !util.global.dispatchEvent(domEvent);
            };
        } else {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("testingtheevent", false, true, {});
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = document.createEvent("CustomEvent");
                domEvent.initCustomEvent(name.toLowerCase(), false, true,
                    event);
                return !util.global.dispatchEvent(domEvent);
            };
        }
    } catch (e) {}
    return function() {
        return false;
    };
})();

var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function() {
            return process.emit.apply(process, arguments);
        };
    } else {
        if (!util.global) {
            return function() {
                return false;
            };
        }
        return function(name) {
            var methodName = "on" + name.toLowerCase();
            var method = util.global[methodName];
            if (!method) return false;
            method.apply(util.global, [].slice.call(arguments, 1));
            return true;
        };
    }
})();

function generatePromiseLifecycleEventObject(name, promise) {
    return {promise: promise};
}

var eventToObjectGenerator = {
    promiseCreated: generatePromiseLifecycleEventObject,
    promiseFulfilled: generatePromiseLifecycleEventObject,
    promiseRejected: generatePromiseLifecycleEventObject,
    promiseResolved: generatePromiseLifecycleEventObject,
    promiseCancelled: generatePromiseLifecycleEventObject,
    promiseChained: function(name, promise, child) {
        return {promise: promise, child: child};
    },
    warning: function(name, warning) {
        return {warning: warning};
    },
    unhandledRejection: function (name, reason, promise) {
        return {reason: reason, promise: promise};
    },
    rejectionHandled: generatePromiseLifecycleEventObject
};

var activeFireEvent = function (name) {
    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent.apply(null, arguments);
    } catch (e) {
        async.throwLater(e);
        globalEventFired = true;
    }

    var domEventFired = false;
    try {
        domEventFired = fireDomEvent(name,
                    eventToObjectGenerator[name].apply(null, arguments));
    } catch (e) {
        async.throwLater(e);
        domEventFired = true;
    }

    return domEventFired || globalEventFired;
};

Promise.config = function(opts) {
    opts = Object(opts);
    if ("longStackTraces" in opts) {
        if (opts.longStackTraces) {
            Promise.longStackTraces();
        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
            disableLongStackTraces();
        }
    }
    if ("warnings" in opts) {
        var warningsOption = opts.warnings;
        config.warnings = !!warningsOption;
        wForgottenReturn = config.warnings;

        if (util.isObject(warningsOption)) {
            if ("wForgottenReturn" in warningsOption) {
                wForgottenReturn = !!warningsOption.wForgottenReturn;
            }
        }
    }
    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
        if (async.haveItemsQueued()) {
            throw new Error(
                "cannot enable cancellation after promises are in use");
        }
        Promise.prototype._clearCancellationData =
            cancellationClearCancellationData;
        Promise.prototype._propagateFrom = cancellationPropagateFrom;
        Promise.prototype._onCancel = cancellationOnCancel;
        Promise.prototype._setOnCancel = cancellationSetOnCancel;
        Promise.prototype._attachCancellationCallback =
            cancellationAttachCancellationCallback;
        Promise.prototype._execute = cancellationExecute;
        propagateFromFunction = cancellationPropagateFrom;
        config.cancellation = true;
    }
    if ("monitoring" in opts) {
        if (opts.monitoring && !config.monitoring) {
            config.monitoring = true;
            Promise.prototype._fireEvent = activeFireEvent;
        } else if (!opts.monitoring && config.monitoring) {
            config.monitoring = false;
            Promise.prototype._fireEvent = defaultFireEvent;
        }
    }
    return Promise;
};

function defaultFireEvent() { return false; }

Promise.prototype._fireEvent = defaultFireEvent;
Promise.prototype._execute = function(executor, resolve, reject) {
    try {
        executor(resolve, reject);
    } catch (e) {
        return e;
    }
};
Promise.prototype._onCancel = function () {};
Promise.prototype._setOnCancel = function (handler) { ; };
Promise.prototype._attachCancellationCallback = function(onCancel) {
    ;
};
Promise.prototype._captureStackTrace = function () {};
Promise.prototype._attachExtraTrace = function () {};
Promise.prototype._clearCancellationData = function() {};
Promise.prototype._propagateFrom = function (parent, flags) {
    ;
    ;
};

function cancellationExecute(executor, resolve, reject) {
    var promise = this;
    try {
        executor(resolve, reject, function(onCancel) {
            if (typeof onCancel !== "function") {
                throw new TypeError("onCancel must be a function, got: " +
                                    util.toString(onCancel));
            }
            promise._attachCancellationCallback(onCancel);
        });
    } catch (e) {
        return e;
    }
}

function cancellationAttachCancellationCallback(onCancel) {
    if (!this._isCancellable()) return this;

    var previousOnCancel = this._onCancel();
    if (previousOnCancel !== undefined) {
        if (util.isArray(previousOnCancel)) {
            previousOnCancel.push(onCancel);
        } else {
            this._setOnCancel([previousOnCancel, onCancel]);
        }
    } else {
        this._setOnCancel(onCancel);
    }
}

function cancellationOnCancel() {
    return this._onCancelField;
}

function cancellationSetOnCancel(onCancel) {
    this._onCancelField = onCancel;
}

function cancellationClearCancellationData() {
    this._cancellationParent = undefined;
    this._onCancelField = undefined;
}

function cancellationPropagateFrom(parent, flags) {
    if ((flags & 1) !== 0) {
        this._cancellationParent = parent;
        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
        if (branchesRemainingToCancel === undefined) {
            branchesRemainingToCancel = 0;
        }
        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
    }
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}

function bindingPropagateFrom(parent, flags) {
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}
var propagateFromFunction = bindingPropagateFrom;

function boundValueFunction() {
    var ret = this._boundTo;
    if (ret !== undefined) {
        if (ret instanceof Promise) {
            if (ret.isFulfilled()) {
                return ret.value();
            } else {
                return undefined;
            }
        }
    }
    return ret;
}

function longStackTracesCaptureStackTrace() {
    this._trace = new CapturedTrace(this._peekContext());
}

function longStackTracesAttachExtraTrace(error, ignoreSelf) {
    if (canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
}

function checkForgottenReturns(returnValue, promiseCreated, name, promise,
                               parent) {
    if (returnValue === undefined && promiseCreated !== null &&
        wForgottenReturn) {
        if (parent !== undefined && parent._returnedNonUndefined()) return;
        if ((promise._bitField & 65535) === 0) return;

        if (name) name = name + " ";
        var handlerLine = "";
        var creatorLine = "";
        if (promiseCreated._trace) {
            var traceLines = promiseCreated._trace.stack.split("\n");
            var stack = cleanStack(traceLines);
            for (var i = stack.length - 1; i >= 0; --i) {
                var line = stack[i];
                if (!nodeFramePattern.test(line)) {
                    var lineMatches = line.match(parseLinePattern);
                    if (lineMatches) {
                        handlerLine  = "at " + lineMatches[1] +
                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                    }
                    break;
                }
            }

            if (stack.length > 0) {
                var firstUserLine = stack[0];
                for (var i = 0; i < traceLines.length; ++i) {

                    if (traceLines[i] === firstUserLine) {
                        if (i > 0) {
                            creatorLine = "\n" + traceLines[i - 1];
                        }
                        break;
                    }
                }

            }
        }
        var msg = "a promise was created in a " + name +
            "handler " + handlerLine + "but was not returned from it, " +
            "see http://goo.gl/rRqMUw" +
            creatorLine;
        promise._warn(msg, true, promiseCreated);
    }
}

function deprecated(name, replacement) {
    var message = name +
        " is deprecated and will be removed in a future version.";
    if (replacement) message += " Use " + replacement + " instead.";
    return warn(message);
}

function warn(message, shouldUseOwnTrace, promise) {
    if (!config.warnings) return;
    var warning = new Warning(message);
    var ctx;
    if (shouldUseOwnTrace) {
        promise._attachExtraTrace(warning);
    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }

    if (!activeFireEvent("warning", warning)) {
        formatAndLogError(warning, "", true);
    }
}

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = "    (No stack trace)" === line ||
            stackFramePattern.test(line);
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0 && error.name != "SyntaxError") {
        stack = stack.slice(i);
    }
    return stack;
}

function parseStackAndMessage(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
    };
}

function formatAndLogError(error, title, isSoft) {
    if (typeof console !== "undefined") {
        var message;
        if (util.isObject(error)) {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof printWarning === "function") {
            printWarning(message, isSoft);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
}

function fireRejectionEvent(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    if (name === "unhandledRejection") {
        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
            formatAndLogError(reason, "Unhandled rejection ");
        }
    } else {
        activeFireEvent(name, promise);
    }
}

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj && typeof obj.toString === "function"
            ? obj.toString() : util.toString(obj);
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function longStackTracesIsSupported() {
    return typeof captureStackTrace === "function";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}

function setBounds(firstLineError, lastLineError) {
    if (!longStackTracesIsSupported()) return;
    var firstStackLines = firstLineError.stack.split("\n");
    var lastStackLines = lastLineError.stack.split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
}

function CapturedTrace(parent) {
    this._parent = parent;
    this._promisesCreated = 0;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);
Context.CapturedTrace = CapturedTrace;

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit += 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit += 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit -= 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit += 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit -= 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    printWarning = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        printWarning = function(message, isSoft) {
            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
            console.warn(color + message + "\u001b[0m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        printWarning = function(message, isSoft) {
            console.warn("%c" + message,
                        isSoft ? "color: darkorange" : "color: red");
        };
    }
}

var config = {
    warnings: warnings,
    longStackTraces: false,
    cancellation: false,
    monitoring: false
};

if (longStackTraces) Promise.longStackTraces();

return {
    longStackTraces: function() {
        return config.longStackTraces;
    },
    warnings: function() {
        return config.warnings;
    },
    cancellation: function() {
        return config.cancellation;
    },
    monitoring: function() {
        return config.monitoring;
    },
    propagateFromFunction: function() {
        return propagateFromFunction;
    },
    boundValueFunction: function() {
        return boundValueFunction;
    },
    checkForgottenReturns: checkForgottenReturns,
    setBounds: setBounds,
    warn: warn,
    deprecated: deprecated,
    CapturedTrace: CapturedTrace,
    fireDomEvent: fireDomEvent,
    fireGlobalEvent: fireGlobalEvent
};
};

},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function returner() {
    return this.value;
}
function thrower() {
    throw this.reason;
}

Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value instanceof Promise) value.suppressUnhandledRejections();
    return this._then(
        returner, undefined, undefined, {value: value}, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    return this._then(
        thrower, undefined, undefined, {reason: reason}, undefined);
};

Promise.prototype.catchThrow = function (reason) {
    if (arguments.length <= 1) {
        return this._then(
            undefined, thrower, undefined, {reason: reason}, undefined);
    } else {
        var _reason = arguments[1];
        var handler = function() {throw _reason;};
        return this.caught(reason, handler);
    }
};

Promise.prototype.catchReturn = function (value) {
    if (arguments.length <= 1) {
        if (value instanceof Promise) value.suppressUnhandledRejections();
        return this._then(
            undefined, returner, undefined, {value: value}, undefined);
    } else {
        var _value = arguments[1];
        if (_value instanceof Promise) _value.suppressUnhandledRejections();
        var handler = function() {return _value;};
        return this.caught(value, handler);
    }
};
};

},{}],11:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;
var PromiseAll = Promise.all;

function promiseAllThis() {
    return PromiseAll(this);
}

function PromiseMapSeries(promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
}

Promise.prototype.each = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, this, undefined);
};

Promise.prototype.mapSeries = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, promises, undefined);
};

Promise.mapSeries = PromiseMapSeries;
};


},{}],12:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: errorTypes,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],14:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, tryConvertToPromise, NEXT_FILTER) {
var util = _dereq_("./util");
var CancellationError = Promise.CancellationError;
var errorObj = util.errorObj;
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);

function PassThroughHandlerContext(promise, type, handler) {
    this.promise = promise;
    this.type = type;
    this.handler = handler;
    this.called = false;
    this.cancelPromise = null;
}

PassThroughHandlerContext.prototype.isFinallyHandler = function() {
    return this.type === 0;
};

function FinallyHandlerCancelReaction(finallyHandler) {
    this.finallyHandler = finallyHandler;
}

FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
    checkCancel(this.finallyHandler);
};

function checkCancel(ctx, reason) {
    if (ctx.cancelPromise != null) {
        if (arguments.length > 1) {
            ctx.cancelPromise._reject(reason);
        } else {
            ctx.cancelPromise._cancel();
        }
        ctx.cancelPromise = null;
        return true;
    }
    return false;
}

function succeed() {
    return finallyHandler.call(this, this.promise._target()._settledValue());
}
function fail(reason) {
    if (checkCancel(this, reason)) return;
    errorObj.e = reason;
    return errorObj;
}
function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    if (!this.called) {
        this.called = true;
        var ret = this.isFinallyHandler()
            ? handler.call(promise._boundValue())
            : handler.call(promise._boundValue(), reasonOrValue);
        if (ret === NEXT_FILTER) {
            return ret;
        } else if (ret !== undefined) {
            promise._setReturnedNonUndefined();
            var maybePromise = tryConvertToPromise(ret, promise);
            if (maybePromise instanceof Promise) {
                if (this.cancelPromise != null) {
                    if (maybePromise._isCancelled()) {
                        var reason =
                            new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                    } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(
                            new FinallyHandlerCancelReaction(this));
                    }
                }
                return maybePromise._then(
                    succeed, fail, undefined, this, undefined);
            }
        }
    }

    if (promise.isRejected()) {
        checkCancel(this);
        errorObj.e = reasonOrValue;
        return errorObj;
    } else {
        checkCancel(this);
        return reasonOrValue;
    }
}

Promise.prototype._passThrough = function(handler, type, success, fail) {
    if (typeof handler !== "function") return this.then();
    return this._then(success,
                      fail,
                      undefined,
                      new PassThroughHandlerContext(this, type, handler),
                      undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThrough(handler,
                             0,
                             finallyHandler,
                             finallyHandler);
};


Promise.prototype.tap = function (handler) {
    return this._passThrough(handler, 1, finallyHandler);
};

Promise.prototype.tapCatch = function (handlerOrPredicate) {
    var len = arguments.length;
    if(len === 1) {
        return this._passThrough(handlerOrPredicate,
                                 1,
                                 undefined,
                                 finallyHandler);
    } else {
         var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return Promise.reject(new TypeError(
                    "tapCatch statement predicate: "
                    + "expecting an object but got " + util.classString(item)
                ));
            }
        }
        catchInstances.length = j;
        var handler = arguments[i];
        return this._passThrough(catchFilter(catchInstances, handler, this),
                                 1,
                                 undefined,
                                 finallyHandler);
    }

};

return PassThroughHandlerContext;
};

},{"./catch_filter":7,"./util":36}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise,
                          Proxyable,
                          debug) {
var errors = _dereq_("./errors");
var TypeError = errors.TypeError;
var util = _dereq_("./util");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    if (debug.cancellation()) {
        var internal = new Promise(INTERNAL);
        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
        this._promise = internal.lastly(function() {
            return _finallyPromise;
        });
        internal._captureStackTrace();
        internal._setOnCancel(this);
    } else {
        var promise = this._promise = new Promise(INTERNAL);
        promise._captureStackTrace();
    }
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
    this._yieldedPromise = null;
    this._cancellationPhase = false;
}
util.inherits(PromiseSpawn, Proxyable);

PromiseSpawn.prototype._isResolved = function() {
    return this._promise === null;
};

PromiseSpawn.prototype._cleanup = function() {
    this._promise = this._generator = null;
    if (debug.cancellation() && this._finallyPromise !== null) {
        this._finallyPromise._fulfill();
        this._finallyPromise = null;
    }
};

PromiseSpawn.prototype._promiseCancelled = function() {
    if (this._isResolved()) return;
    var implementsReturn = typeof this._generator["return"] !== "undefined";

    var result;
    if (!implementsReturn) {
        var reason = new Promise.CancellationError(
            "generator .return() sentinel");
        Promise.coroutine.returnSentinel = reason;
        this._promise._attachExtraTrace(reason);
        this._promise._pushContext();
        result = tryCatch(this._generator["throw"]).call(this._generator,
                                                         reason);
        this._promise._popContext();
    } else {
        this._promise._pushContext();
        result = tryCatch(this._generator["return"]).call(this._generator,
                                                          undefined);
        this._promise._popContext();
    }
    this._cancellationPhase = true;
    this._yieldedPromise = null;
    this._continue(result);
};

PromiseSpawn.prototype._promiseFulfilled = function(value) {
    this._yieldedPromise = null;
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._promiseRejected = function(reason) {
    this._yieldedPromise = null;
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._resultCancelled = function() {
    if (this._yieldedPromise instanceof Promise) {
        var promise = this._yieldedPromise;
        this._yieldedPromise = null;
        promise.cancel();
    }
};

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._promiseFulfilled(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    var promise = this._promise;
    if (result === errorObj) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._rejectCallback(result.e, false);
        }
    }

    var value = result.value;
    if (result.done === true) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._resolveCallback(value);
        }
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._promiseRejected(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise = maybePromise._target();
        var bitField = maybePromise._bitField;
        ;
        if (((bitField & 50397184) === 0)) {
            this._yieldedPromise = maybePromise;
            maybePromise._proxy(this, null);
        } else if (((bitField & 33554432) !== 0)) {
            Promise._async.invoke(
                this._promiseFulfilled, this, maybePromise._value()
            );
        } else if (((bitField & 16777216) !== 0)) {
            Promise._async.invoke(
                this._promiseRejected, this, maybePromise._reason()
            );
        } else {
            this._promiseCancelled();
        }
    }
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        var ret = spawn.promise();
        spawn._generator = generator;
        spawn._promiseFulfilled(undefined);
        return ret;
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async,
         getDomain) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

if (false) { var i, promiseSetters, thenCallbacks, holderClasses, generateHolderClass, promiseSetter, thenCallback; }

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (false) { var domain, bitField, maybePromise, i, callbacks, holder, HolderClass, ret; }
    }
    var args = [].slice.call(arguments);;
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util":36}],18:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    var domain = getDomain();
    this._callback = domain === null ? fn : util.domainBind(domain, fn);
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = [];
    async.invoke(this._asyncInit, this, undefined);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._asyncInit = function() {
    this._init$(undefined, -2);
};

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;

    if (index < 0) {
        index = (index * -1) - 1;
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return true;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return false;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var promise = this._promise;
        var callback = this._callback;
        var receiver = promise._boundValue();
        promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        var promiseCreated = promise._popContext();
        debug.checkForgottenReturns(
            ret,
            promiseCreated,
            preservedValues !== null ? "Promise.filter" : "Promise.map",
            promise
        );
        if (ret === errorObj) {
            this._reject(ret.e);
            return true;
        }

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            var bitField = maybePromise._bitField;
            ;
            if (((bitField & 50397184) === 0)) {
                if (limit >= 1) this._inFlight++;
                values[index] = maybePromise;
                maybePromise._proxy(this, (index + 1) * -1);
                return false;
            } else if (((bitField & 33554432) !== 0)) {
                ret = maybePromise._value();
            } else if (((bitField & 16777216) !== 0)) {
                this._reject(maybePromise._reason());
                return true;
            } else {
                this._cancel();
                return true;
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }
        return true;
    }
    return false;
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }

    var limit = 0;
    if (options !== undefined) {
        if (typeof options === "object" && options !== null) {
            if (typeof options.concurrency !== "number") {
                return Promise.reject(
                    new TypeError("'concurrency' must be a number but it is " +
                                    util.classString(options.concurrency)));
            }
            limit = options.concurrency;
        } else {
            return Promise.reject(new TypeError(
                            "options argument must be an object but it is " +
                             util.classString(options)));
        }
    }
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
}

Promise.prototype.map = function (fn, options) {
    return map(this, fn, options, null);
};

Promise.map = function (promises, fn, options, _filter) {
    return map(promises, fn, options, _filter);
};


};

},{"./util":36}],19:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        var promiseCreated = ret._popContext();
        debug.checkForgottenReturns(
            value, promiseCreated, "Promise.method", ret);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value;
    if (arguments.length > 1) {
        debug.deprecated("calling Promise.try with more than 1 argument");
        var arg = arguments[1];
        var ctx = arguments[2];
        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                  : tryCatch(fn).call(ctx, arg);
    } else {
        value = tryCatch(fn)();
    }
    var promiseCreated = ret._popContext();
    debug.checkForgottenReturns(
        value, promiseCreated, "Promise.try", ret);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util":36}],20:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors");
var OperationalError = errors.OperationalError;
var es5 = _dereq_("./es5");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise, multiArgs) {
    return function(err, value) {
        if (promise === null) return;
        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (!multiArgs) {
            promise._fulfill(value);
        } else {
            var args = [].slice.call(arguments, 1);;
            promise._fulfill(args);
        }
        promise = null;
    };
}

module.exports = nodebackForPromise;

},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util");
var async = Promise._async;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret =
        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundValue();
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var newReason = new Error(reason + "");
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
                                                                     options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./util":36}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var reflectHandler = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};
function Proxyable() {}
var UNDEFINED_BINDING = {};
var util = _dereq_("./util");

var getDomain;
if (util.isNode) {
    getDomain = function() {
        var ret = process.domain;
        if (ret === undefined) ret = null;
        return ret;
    };
} else {
    getDomain = function() {
        return null;
    };
}
util.notEnumerableProp(Promise, "_getDomain", getDomain);

var es5 = _dereq_("./es5");
var Async = _dereq_("./async");
var async = new Async();
es5.defineProperty(Promise, "_async", {value: async});
var errors = _dereq_("./errors");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
var CancellationError = Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {};
var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array")(Promise, INTERNAL,
                               tryConvertToPromise, apiRejection, Proxyable);
var Context = _dereq_("./context")(Promise);
 /*jshint unused:false*/
var createContext = Context.create;
var debug = _dereq_("./debuggability")(Promise, Context);
var CapturedTrace = debug.CapturedTrace;
var PassThroughHandlerContext =
    _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
var nodebackForPromise = _dereq_("./nodeback");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function check(self, executor) {
    if (self == null || self.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (typeof executor !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(executor));
    }

}

function Promise(executor) {
    if (executor !== INTERNAL) {
        check(this, executor);
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._resolveFromExecutor(executor);
    this._promiseCreated();
    this._fireEvent("promiseCreated", this);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return apiRejection("Catch statement predicate: " +
                    "expecting an object but got " + util.classString(item));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];
        return this.then(undefined, catchFilter(catchInstances, fn, this));
    }
    return this.then(undefined, fn);
};

Promise.prototype.reflect = function () {
    return this._then(reflectHandler,
        reflectHandler, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject) {
    if (debug.warnings() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, undefined, undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject) {
    var promise =
        this._then(didFulfill, didReject, undefined, undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    if (arguments.length > 0) {
        this._warn(".all() was passed arguments but it does not take any");
    }
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.getNewLibraryCopy = module.exports;

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = Promise.fromCallback = function(fn) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                         : false;
    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true);
    }
    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._setFulfilled();
        ret._rejectionHandler0 = obj;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    return async.setScheduler(fn);
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    _,    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
    var target = this._target();
    var bitField = target._bitField;

    if (!haveInternalData) {
        promise._propagateFrom(this, 3);
        promise._captureStackTrace();
        if (receiver === undefined &&
            ((this._bitField & 2097152) !== 0)) {
            if (!((bitField & 50397184) === 0)) {
                receiver = this._boundValue();
            } else {
                receiver = target === this ? undefined : this._boundTo;
            }
        }
        this._fireEvent("promiseChained", this, promise);
    }

    var domain = getDomain();
    if (!((bitField & 50397184) === 0)) {
        var handler, value, settler = target._settlePromiseCtx;
        if (((bitField & 33554432) !== 0)) {
            value = target._rejectionHandler0;
            handler = didFulfill;
        } else if (((bitField & 16777216) !== 0)) {
            value = target._fulfillmentHandler0;
            handler = didReject;
            target._unsetRejectionIsUnhandled();
        } else {
            settler = target._settlePromiseLateCancellationObserver;
            value = new CancellationError("late cancellation observer");
            target._attachExtraTrace(value);
            handler = didReject;
        }

        async.invoke(settler, target, {
            handler: domain === null ? handler
                : (typeof handler === "function" &&
                    util.domainBind(domain, handler)),
            promise: promise,
            receiver: receiver,
            value: value
        });
    } else {
        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
    }

    return promise;
};

Promise.prototype._length = function () {
    return this._bitField & 65535;
};

Promise.prototype._isFateSealed = function () {
    return (this._bitField & 117506048) !== 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 67108864) === 67108864;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -65536) |
        (len & 65535);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 33554432;
    this._fireEvent("promiseFulfilled", this);
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 16777216;
    this._fireEvent("promiseRejected", this);
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 67108864;
    this._fireEvent("promiseResolved", this);
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._unsetCancelled = function() {
    this._bitField = this._bitField & (~65536);
};

Promise.prototype._setCancelled = function() {
    this._bitField = this._bitField | 65536;
    this._fireEvent("promiseCancelled", this);
};

Promise.prototype._setWillBeCancelled = function() {
    this._bitField = this._bitField | 8388608;
};

Promise.prototype._setAsyncGuaranteed = function() {
    if (async.hasCustomScheduler()) return;
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0 ? this._receiver0 : this[
            index * 4 - 4 + 3];
    if (ret === UNDEFINED_BINDING) {
        return undefined;
    } else if (ret === undefined && this._isBound()) {
        return this._boundValue();
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return this[
            index * 4 - 4 + 2];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 1];
};

Promise.prototype._boundValue = function() {};

Promise.prototype._migrateCallback0 = function (follower) {
    var bitField = follower._bitField;
    var fulfill = follower._fulfillmentHandler0;
    var reject = follower._rejectionHandler0;
    var promise = follower._promise0;
    var receiver = follower._receiverAt(0);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._migrateCallbackAt = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    promise,
    receiver,
    domain
) {
    var index = this._length();

    if (index >= 65535 - 4) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        this._receiver0 = receiver;
        if (typeof fulfill === "function") {
            this._fulfillmentHandler0 =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    } else {
        var base = index * 4 - 4;
        this[base + 2] = promise;
        this[base + 3] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._proxy = function (proxyable, arg) {
    this._addCallbacks(undefined, undefined, arg, proxyable, null);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (((this._bitField & 117506048) !== 0)) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    if (shouldBind) this._propagateFrom(maybePromise, 2);

    var promise = maybePromise._target();

    if (promise === this) {
        this._reject(makeSelfResolutionError());
        return;
    }

    var bitField = promise._bitField;
    if (((bitField & 50397184) === 0)) {
        var len = this._length();
        if (len > 0) promise._migrateCallback0(this);
        for (var i = 1; i < len; ++i) {
            promise._migrateCallbackAt(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(promise);
    } else if (((bitField & 33554432) !== 0)) {
        this._fulfill(promise._value());
    } else if (((bitField & 16777216) !== 0)) {
        this._reject(promise._reason());
    } else {
        var reason = new CancellationError("late cancellation observer");
        promise._attachExtraTrace(reason);
        this._reject(reason);
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, ignoreNonErrorWarnings) {
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
        var message = "a promise was rejected with a non-error: " +
            util.classString(reason);
        this._warn(message, true);
    }
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason);
};

Promise.prototype._resolveFromExecutor = function (executor) {
    if (executor === INTERNAL) return;
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = this._execute(executor, function(value) {
        promise._resolveCallback(value);
    }, function (reason) {
        promise._rejectCallback(reason, synchronous);
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined) {
        promise._rejectCallback(r, true);
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    var bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY) {
        if (!value || typeof value.length !== "number") {
            x = errorObj;
            x.e = new TypeError("cannot .spread() a non-array: " +
                                    util.classString(value));
        } else {
            x = tryCatch(handler).apply(this._boundValue(), value);
        }
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    var promiseCreated = promise._popContext();
    bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;

    if (x === NEXT_FILTER) {
        promise._reject(value);
    } else if (x === errorObj) {
        promise._rejectCallback(x.e, false);
    } else {
        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
    var isPromise = promise instanceof Promise;
    var bitField = this._bitField;
    var asyncGuaranteed = ((bitField & 134217728) !== 0);
    if (((bitField & 65536) !== 0)) {
        if (isPromise) promise._invokeInternalOnCancel();

        if (receiver instanceof PassThroughHandlerContext &&
            receiver.isFinallyHandler()) {
            receiver.cancelPromise = promise;
            if (tryCatch(handler).call(receiver, value) === errorObj) {
                promise._reject(errorObj.e);
            }
        } else if (handler === reflectHandler) {
            promise._fulfill(reflectHandler.call(receiver));
        } else if (receiver instanceof Proxyable) {
            receiver._promiseCancelled(promise);
        } else if (isPromise || promise instanceof PromiseArray) {
            promise._cancel();
        } else {
            receiver.cancel();
        }
    } else if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            if (asyncGuaranteed) promise._setAsyncGuaranteed();
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof Proxyable) {
        if (!receiver._isResolved()) {
            if (((bitField & 33554432) !== 0)) {
                receiver._promiseFulfilled(value, promise);
            } else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (asyncGuaranteed) promise._setAsyncGuaranteed();
        if (((bitField & 33554432) !== 0)) {
            promise._fulfill(value);
        } else {
            promise._reject(value);
        }
    }
};

Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
    var handler = ctx.handler;
    var promise = ctx.promise;
    var receiver = ctx.receiver;
    var value = ctx.value;
    if (typeof handler === "function") {
        if (!(promise instanceof Promise)) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (promise instanceof Promise) {
        promise._reject(value);
    }
};

Promise.prototype._settlePromiseCtx = function(ctx) {
    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
};

Promise.prototype._settlePromise0 = function(handler, value, bitField) {
    var promise = this._promise0;
    var receiver = this._receiverAt(0);
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settlePromise(promise, handler, receiver, value);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    var base = index * 4 - 4;
    this[base + 2] =
    this[base + 3] =
    this[base + 0] =
    this[base + 1] = undefined;
};

Promise.prototype._fulfill = function (value) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._reject(err);
    }
    this._setFulfilled();
    this._rejectionHandler0 = value;

    if ((bitField & 65535) > 0) {
        if (((bitField & 134217728) !== 0)) {
            this._settlePromises();
        } else {
            async.settlePromises(this);
        }
    }
};

Promise.prototype._reject = function (reason) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    this._setRejected();
    this._fulfillmentHandler0 = reason;

    if (this._isFinal()) {
        return async.fatalError(reason, util.isNode);
    }

    if ((bitField & 65535) > 0) {
        async.settlePromises(this);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._fulfillPromises = function (len, value) {
    for (var i = 1; i < len; i++) {
        var handler = this._fulfillmentHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, value);
    }
};

Promise.prototype._rejectPromises = function (len, reason) {
    for (var i = 1; i < len; i++) {
        var handler = this._rejectionHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, reason);
    }
};

Promise.prototype._settlePromises = function () {
    var bitField = this._bitField;
    var len = (bitField & 65535);

    if (len > 0) {
        if (((bitField & 16842752) !== 0)) {
            var reason = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, reason, bitField);
            this._rejectPromises(len, reason);
        } else {
            var value = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
            this._fulfillPromises(len, value);
        }
        this._setLength(0);
    }
    this._clearCancellationData();
};

Promise.prototype._settledValue = function() {
    var bitField = this._bitField;
    if (((bitField & 33554432) !== 0)) {
        return this._rejectionHandler0;
    } else if (((bitField & 16777216) !== 0)) {
        return this._fulfillmentHandler0;
    }
};

function deferResolve(v) {this.promise._resolveCallback(v);}
function deferReject(v) {this.promise._rejectCallback(v, false);}

Promise.defer = Promise.pending = function() {
    debug.deprecated("Promise.defer", "new Promise");
    var promise = new Promise(INTERNAL);
    return {
        promise: promise,
        resolve: deferResolve,
        reject: deferReject
    };
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
    debug);
_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
_dereq_("./direct_resolve")(Promise);
_dereq_("./synchronous_inspection")(Promise);
_dereq_("./join")(
    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
Promise.Promise = Promise;
Promise.version = "3.5.1";
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./call_get.js')(Promise);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
_dereq_('./timers.js')(Promise, INTERNAL, debug);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
_dereq_('./nodeify.js')(Promise);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./settle.js')(Promise, PromiseArray, debug);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./filter.js')(Promise, INTERNAL);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./any.js')(Promise);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    debug.setBounds(Async.firstLineError, util.lastLineError);               
    return Promise;                                                          

};

},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection, Proxyable) {
var util = _dereq_("./util");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    case -6: return new Map();
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    if (values instanceof Promise) {
        promise._propagateFrom(values, 3);
    }
    promise._setOnCancel(this);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
util.inherits(PromiseArray, Proxyable);

PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        var bitField = values._bitField;
        ;
        this._values = values;

        if (((bitField & 50397184) === 0)) {
            this._promise._setAsyncGuaranteed();
            return values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
        } else if (((bitField & 33554432) !== 0)) {
            values = values._value();
        } else if (((bitField & 16777216) !== 0)) {
            return this._reject(values._reason());
        } else {
            return this._cancel();
        }
    }
    values = util.asArray(values);
    if (values === null) {
        var err = apiRejection(
            "expecting an array or an iterable object but got " + util.classString(values)).reason();
        this._promise._rejectCallback(err, false);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    this._iterate(values);
};

PromiseArray.prototype._iterate = function(values) {
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var result = this._promise;
    var isResolved = false;
    var bitField = null;
    for (var i = 0; i < len; ++i) {
        var maybePromise = tryConvertToPromise(values[i], result);

        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            bitField = maybePromise._bitField;
        } else {
            bitField = null;
        }

        if (isResolved) {
            if (bitField !== null) {
                maybePromise.suppressUnhandledRejections();
            }
        } else if (bitField !== null) {
            if (((bitField & 50397184) === 0)) {
                maybePromise._proxy(this, i);
                this._values[i] = maybePromise;
            } else if (((bitField & 33554432) !== 0)) {
                isResolved = this._promiseFulfilled(maybePromise._value(), i);
            } else if (((bitField & 16777216) !== 0)) {
                isResolved = this._promiseRejected(maybePromise._reason(), i);
            } else {
                isResolved = this._promiseCancelled(i);
            }
        } else {
            isResolved = this._promiseFulfilled(maybePromise, i);
        }
    }
    if (!isResolved) result._setAsyncGuaranteed();
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype._cancel = function() {
    if (this._isResolved() || !this._promise._isCancellable()) return;
    this._values = null;
    this._promise._cancel();
};

PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false);
};

PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

PromiseArray.prototype._promiseCancelled = function() {
    this._cancel();
    return true;
};

PromiseArray.prototype._promiseRejected = function (reason) {
    this._totalResolved++;
    this._reject(reason);
    return true;
};

PromiseArray.prototype._resultCancelled = function() {
    if (this._isResolved()) return;
    var values = this._values;
    this._cancel();
    if (values instanceof Promise) {
        values.cancel();
    } else {
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof Promise) {
                values[i].cancel();
            }
        }
    }
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util":36}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util");
var nodebackForPromise = _dereq_("./nodeback");
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
if (false) { var parameterCount, parameterDeclaration, argumentSequence, switchCaseArgumentOrder; }

function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise, multiArgs);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        if (promisifier === makeNodePromisified) {
            obj[promisifiedKey] =
                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
        } else {
            var promisified = promisifier(fn, function() {
                return makeNodePromisified(key, THIS, key,
                                           fn, suffix, multiArgs);
            });
            util.notEnumerableProp(promisified, "__isPromisified__", true);
            obj[promisifiedKey] = promisified;
        }
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver, multiArgs) {
    return makeNodePromisified(callback, receiver, undefined,
                                callback, null, multiArgs);
}

Promise.promisify = function (fn, options) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    if (isPromisified(fn)) {
        return fn;
    }
    options = Object(options);
    var receiver = options.context === undefined ? THIS : options.context;
    var multiArgs = !!options.multiArgs;
    var ret = promisify(fn, receiver, multiArgs);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    options = Object(options);
    var multiArgs = !!options.multiArgs;
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier,
                multiArgs);
            promisifyAll(value, suffix, filter, promisifier, multiArgs);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
};
};


},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");
var isObject = util.isObject;
var es5 = _dereq_("./es5");
var Es6Map;
if (typeof Map === "function") Es6Map = Map;

var mapToEntries = (function() {
    var index = 0;
    var size = 0;

    function extractEntry(value, key) {
        this[index] = value;
        this[index + size] = key;
        index++;
    }

    return function mapToEntries(map) {
        size = map.size;
        index = 0;
        var ret = new Array(map.size * 2);
        map.forEach(extractEntry, ret);
        return ret;
    };
})();

var entriesToMap = function(entries) {
    var ret = new Es6Map();
    var length = entries.length / 2 | 0;
    for (var i = 0; i < length; ++i) {
        var key = entries[length + i];
        var value = entries[i];
        ret.set(key, value);
    }
    return ret;
};

function PropertiesPromiseArray(obj) {
    var isMap = false;
    var entries;
    if (Es6Map !== undefined && obj instanceof Es6Map) {
        entries = mapToEntries(obj);
        isMap = true;
    } else {
        var keys = es5.keys(obj);
        var len = keys.length;
        entries = new Array(len * 2);
        for (var i = 0; i < len; ++i) {
            var key = keys[i];
            entries[i] = obj[key];
            entries[i + len] = key;
        }
    }
    this.constructor$(entries);
    this._isMap = isMap;
    this._init$(undefined, isMap ? -6 : -3);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val;
        if (this._isMap) {
            val = entriesToMap(this._values);
        } else {
            val = {};
            var keyOffset = this.length();
            for (var i = 0, len = this.length(); i < len; ++i) {
                val[this._values[i + keyOffset]] = this._values[i];
            }
        }
        this._resolve(val);
        return true;
    }
    return false;
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 2);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else {
        promises = util.asArray(promises);
        if (promises === null)
            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 3);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util":36}],28:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

function ReductionPromiseArray(promises, fn, initialValue, _each) {
    this.constructor$(promises);
    var domain = getDomain();
    this._fn = domain === null ? fn : util.domainBind(domain, fn);
    if (initialValue !== undefined) {
        initialValue = Promise.resolve(initialValue);
        initialValue._attachCancellationCallback(this);
    }
    this._initialValue = initialValue;
    this._currentCancellable = null;
    if(_each === INTERNAL) {
        this._eachValues = Array(this._length);
    } else if (_each === 0) {
        this._eachValues = null;
    } else {
        this._eachValues = undefined;
    }
    this._promise._captureStackTrace();
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._gotAccum = function(accum) {
    if (this._eachValues !== undefined && 
        this._eachValues !== null && 
        accum !== INTERNAL) {
        this._eachValues.push(accum);
    }
};

ReductionPromiseArray.prototype._eachComplete = function(value) {
    if (this._eachValues !== null) {
        this._eachValues.push(value);
    }
    return this._eachValues;
};

ReductionPromiseArray.prototype._init = function() {};

ReductionPromiseArray.prototype._resolveEmptyArray = function() {
    this._resolve(this._eachValues !== undefined ? this._eachValues
                                                 : this._initialValue);
};

ReductionPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

ReductionPromiseArray.prototype._resolve = function(value) {
    this._promise._resolveCallback(value);
    this._values = null;
};

ReductionPromiseArray.prototype._resultCancelled = function(sender) {
    if (sender === this._initialValue) return this._cancel();
    if (this._isResolved()) return;
    this._resultCancelled$();
    if (this._currentCancellable instanceof Promise) {
        this._currentCancellable.cancel();
    }
    if (this._initialValue instanceof Promise) {
        this._initialValue.cancel();
    }
};

ReductionPromiseArray.prototype._iterate = function (values) {
    this._values = values;
    var value;
    var i;
    var length = values.length;
    if (this._initialValue !== undefined) {
        value = this._initialValue;
        i = 0;
    } else {
        value = Promise.resolve(values[0]);
        i = 1;
    }

    this._currentCancellable = value;

    if (!value.isRejected()) {
        for (; i < length; ++i) {
            var ctx = {
                accum: null,
                value: values[i],
                index: i,
                length: length,
                array: this
            };
            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
        }
    }

    if (this._eachValues !== undefined) {
        value = value
            ._then(this._eachComplete, undefined, undefined, this, undefined);
    }
    value._then(completed, completed, undefined, value, this);
};

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};

function completed(valueOrReason, array) {
    if (this.isFulfilled()) {
        array._resolve(valueOrReason);
    } else {
        array._reject(valueOrReason);
    }
}

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

function gotAccum(accum) {
    this.accum = accum;
    this.array._gotAccum(accum);
    var value = tryConvertToPromise(this.value, this.array._promise);
    if (value instanceof Promise) {
        this.array._currentCancellable = value;
        return value._then(gotValue, undefined, undefined, this, undefined);
    } else {
        return gotValue.call(this, value);
    }
}

function gotValue(value) {
    var array = this.array;
    var promise = array._promise;
    var fn = tryCatch(array._fn);
    promise._pushContext();
    var ret;
    if (array._eachValues !== undefined) {
        ret = fn.call(promise._boundValue(), value, this.index, this.length);
    } else {
        ret = fn.call(promise._boundValue(),
                              this.accum, value, this.index, this.length);
    }
    if (ret instanceof Promise) {
        array._currentCancellable = ret;
    }
    var promiseCreated = promise._popContext();
    debug.checkForgottenReturns(
        ret,
        promiseCreated,
        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
        promise
    );
    return ret;
}
};

},{"./util":36}],29:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var schedule;
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var NativePromise = util.getNativePromise();
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = global.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(global, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if (typeof NativePromise === "function" &&
           typeof NativePromise.resolve === "function") {
    var nativePromise = NativePromise.resolve();
    schedule = function(fn) {
        nativePromise.then(fn);
    };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            (window.navigator.standalone || window.cordova))) {
    schedule = (function() {
        var div = document.createElement("div");
        var opts = {attributes: true};
        var toggleScheduled = false;
        var div2 = document.createElement("div");
        var o2 = new MutationObserver(function() {
            div.classList.toggle("foo");
            toggleScheduled = false;
        });
        o2.observe(div2, opts);

        var scheduleToggle = function() {
            if (toggleScheduled) return;
            toggleScheduled = true;
            div2.classList.toggle("foo");
        };

        return function schedule(fn) {
            var o = new MutationObserver(function() {
                o.disconnect();
                fn();
            });
            o.observe(div, opts);
            scheduleToggle();
        };
    })();
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":36}],30:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray, debug) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 33554432;
    ret._settledValueField = value;
    return this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 16777216;
    ret._settledValueField = reason;
    return this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    debug.deprecated(".settle()", ".reflect()");
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return Promise.settle(this);
};
};

},{"./util":36}],31:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util");
var RangeError = _dereq_("./errors").RangeError;
var AggregateError = _dereq_("./errors").AggregateError;
var isArray = util.isArray;
var CANCELLATION = {};


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
        return true;
    }
    return false;

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    return this._checkOutcome();
};

SomePromiseArray.prototype._promiseCancelled = function () {
    if (this._values instanceof Promise || this._values == null) {
        return this._cancel();
    }
    this._addRejected(CANCELLATION);
    return this._checkOutcome();
};

SomePromiseArray.prototype._checkOutcome = function() {
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            if (this._values[i] !== CANCELLATION) {
                e.push(this._values[i]);
            }
        }
        if (e.length > 0) {
            this._reject(e);
        } else {
            this._cancel();
        }
        return true;
    }
    return false;
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValueField = promise._isFateSealed()
            ? promise._settledValue() : undefined;
    }
    else {
        this._bitField = 0;
        this._settledValueField = undefined;
    }
}

PromiseInspection.prototype._settledValue = function() {
    return this._settledValueField;
};

var value = PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var reason = PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
    return (this._bitField & 33554432) !== 0;
};

var isRejected = PromiseInspection.prototype.isRejected = function () {
    return (this._bitField & 16777216) !== 0;
};

var isPending = PromiseInspection.prototype.isPending = function () {
    return (this._bitField & 50397184) === 0;
};

var isResolved = PromiseInspection.prototype.isResolved = function () {
    return (this._bitField & 50331648) !== 0;
};

PromiseInspection.prototype.isCancelled = function() {
    return (this._bitField & 8454144) !== 0;
};

Promise.prototype.__isCancelled = function() {
    return (this._bitField & 65536) === 65536;
};

Promise.prototype._isCancelled = function() {
    return this._target().__isCancelled();
};

Promise.prototype.isCancelled = function() {
    return (this._target()._bitField & 8454144) !== 0;
};

Promise.prototype.isPending = function() {
    return isPending.call(this._target());
};

Promise.prototype.isRejected = function() {
    return isRejected.call(this._target());
};

Promise.prototype.isFulfilled = function() {
    return isFulfilled.call(this._target());
};

Promise.prototype.isResolved = function() {
    return isResolved.call(this._target());
};

Promise.prototype.value = function() {
    return value.call(this._target());
};

Promise.prototype.reason = function() {
    var target = this._target();
    target._unsetRejectionIsUnhandled();
    return reason.call(target);
};

Promise.prototype._value = function() {
    return this._settledValue();
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue();
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],33:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) return obj;
        var then = getThen(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            if (isAnyBluebirdPromise(obj)) {
                var ret = new Promise(INTERNAL);
                obj._then(
                    ret._fulfill,
                    ret._reject,
                    undefined,
                    ret,
                    null
                );
                return ret;
            }
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function doGetThen(obj) {
    return obj.then;
}

function getThen(obj) {
    try {
        return doGetThen(obj);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    try {
        return hasProp.call(obj, "_promise0");
    } catch (e) {
        return false;
    }
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x, resolve, reject);
    synchronous = false;

    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolve(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function reject(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util":36}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, debug) {
var util = _dereq_("./util");
var TimeoutError = Promise.TimeoutError;

function HandleWrapper(handle)  {
    this.handle = handle;
}

HandleWrapper.prototype._resultCancelled = function() {
    clearTimeout(this.handle);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (ms, value) {
    var ret;
    var handle;
    if (value !== undefined) {
        ret = Promise.resolve(value)
                ._then(afterValue, null, null, ms, undefined);
        if (debug.cancellation() && value instanceof Promise) {
            ret._setOnCancel(value);
        }
    } else {
        ret = new Promise(INTERNAL);
        handle = setTimeout(function() { ret._fulfill(); }, +ms);
        if (debug.cancellation()) {
            ret._setOnCancel(new HandleWrapper(handle));
        }
        ret._captureStackTrace();
    }
    ret._setAsyncGuaranteed();
    return ret;
};

Promise.prototype.delay = function (ms) {
    return delay(ms, this);
};

var afterTimeout = function (promise, message, parent) {
    var err;
    if (typeof message !== "string") {
        if (message instanceof Error) {
            err = message;
        } else {
            err = new TimeoutError("operation timed out");
        }
    } else {
        err = new TimeoutError(message);
    }
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._reject(err);

    if (parent != null) {
        parent.cancel();
    }
};

function successClear(value) {
    clearTimeout(this.handle);
    return value;
}

function failureClear(reason) {
    clearTimeout(this.handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret, parent;

    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
        if (ret.isPending()) {
            afterTimeout(ret, message, parent);
        }
    }, ms));

    if (debug.cancellation()) {
        parent = this.then();
        ret = parent._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
        ret._setOnCancel(handleWrapper);
    } else {
        ret = this._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
    }

    return ret;
};

};

},{"./util":36}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext, INTERNAL, debug) {
    var util = _dereq_("./util");
    var TypeError = _dereq_("./errors").TypeError;
    var inherits = _dereq_("./util").inherits;
    var errorObj = util.errorObj;
    var tryCatch = util.tryCatch;
    var NULL = {};

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = new Promise(INTERNAL);
        function iterator() {
            if (i >= len) return ret._fulfill();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret;
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return NULL;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== NULL
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    function ResourceList(length) {
        this.length = length;
        this.promise = null;
        this[length-1] = null;
    }

    ResourceList.prototype._resultCancelled = function() {
        var len = this.length;
        for (var i = 0; i < len; ++i) {
            var item = this[i];
            if (item instanceof Promise) {
                item.cancel();
            }
        }
    };

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") {
            return apiRejection("expecting a function but got " + util.classString(fn));
        }
        var input;
        var spreadArgs = true;
        if (len === 2 && Array.isArray(arguments[0])) {
            input = arguments[0];
            len = input.length;
            spreadArgs = false;
        } else {
            input = arguments;
            len--;
        }
        var resources = new ResourceList(len);
        for (var i = 0; i < len; ++i) {
            var resource = input[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var reflectedResources = new Array(resources.length);
        for (var i = 0; i < reflectedResources.length; ++i) {
            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
        }

        var resultPromise = Promise.all(reflectedResources)
            .then(function(inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                    var inspection = inspections[i];
                    if (inspection.isRejected()) {
                        errorObj.e = inspection.error();
                        return errorObj;
                    } else if (!inspection.isFulfilled()) {
                        resultPromise.cancel();
                        return;
                    }
                    inspections[i] = inspection.value();
                }
                promise._pushContext();

                fn = tryCatch(fn);
                var ret = spreadArgs
                    ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(
                    ret, promiseCreated, "Promise.using", promise);
                return ret;
            });

        var promise = resultPromise.lastly(function() {
            var inspection = new Promise.PromiseInspection(resultPromise);
            return dispose(resources, inspection);
        });
        resources.promise = promise;
        promise._setOnCancel(resources);
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 131072;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~131072);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var canEvaluate = typeof navigator == "undefined";

var errorObj = {e: {}};
var tryCatchTarget;
var globalObject = typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof global !== "undefined" ? global :
    this !== undefined ? this : null;

function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return typeof value === "function" ||
           typeof value === "object" && value !== null;
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var l = 8;
    while (l--) new FakeConstructor();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function isError(obj) {
    return obj instanceof Error ||
        (obj !== null &&
           typeof obj === "object" &&
           typeof obj.message === "string" &&
           typeof obj.name === "string");
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return isError(obj) && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var asArray = function(v) {
    if (es5.isArray(v)) {
        return v;
    }
    return null;
};

if (typeof Symbol !== "undefined" && Symbol.iterator) {
    var ArrayFrom = typeof Array.from === "function" ? function(v) {
        return Array.from(v);
    } : function(v) {
        var ret = [];
        var it = v[Symbol.iterator]();
        var itResult;
        while (!((itResult = it.next()).done)) {
            ret.push(itResult.value);
        }
        return ret;
    };

    asArray = function(v) {
        if (es5.isArray(v)) {
            return v;
        } else if (v != null && typeof v[Symbol.iterator] === "function") {
            return ArrayFrom(v);
        }
        return null;
    };
}

var isNode = typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]";

var hasEnvVariables = typeof process !== "undefined" &&
    typeof process.env !== "undefined";

function env(key) {
    return hasEnvVariables ? process.env[key] : undefined;
}

function getNativePromise() {
    if (typeof Promise === "function") {
        try {
            var promise = new Promise(function(){});
            if ({}.toString.call(promise) === "[object Promise]") {
                return Promise;
            }
        } catch (e) {}
    }
}

function domainBind(self, cb) {
    return self.bind(cb);
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    asArray: asArray,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    isError: isError,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    hasDevTools: typeof chrome !== "undefined" && chrome &&
                 typeof chrome.loadTimes === "function",
    isNode: isNode,
    hasEnvVariables: hasEnvVariables,
    env: env,
    global: globalObject,
    getNativePromise: getNativePromise,
    domainBind: domainBind
};
ret.isRecentNode = ret.isNode && (function() {
    var version = process.versions.node.split(".").map(Number);
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5":13}]},{},[4])(4)
});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(431), __webpack_require__(9), __webpack_require__(475).setImmediate))

/***/ }),

/***/ 3188:
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(3189);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ 3189:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(1442),
    arrayEach = __webpack_require__(3170),
    assignValue = __webpack_require__(1298),
    baseAssign = __webpack_require__(3190),
    baseAssignIn = __webpack_require__(3191),
    cloneBuffer = __webpack_require__(1452),
    copyArray = __webpack_require__(1456),
    copySymbols = __webpack_require__(3192),
    copySymbolsIn = __webpack_require__(3193),
    getAllKeys = __webpack_require__(1817),
    getAllKeysIn = __webpack_require__(3195),
    getTag = __webpack_require__(1764),
    initCloneArray = __webpack_require__(3196),
    initCloneByTag = __webpack_require__(3197),
    initCloneObject = __webpack_require__(1457),
    isArray = __webpack_require__(1206),
    isBuffer = __webpack_require__(1464),
    isMap = __webpack_require__(3201),
    isObject = __webpack_require__(1089),
    isSet = __webpack_require__(3203),
    keys = __webpack_require__(1775);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 3190:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1473),
    keys = __webpack_require__(1775);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 3191:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1473),
    keysIn = __webpack_require__(1474);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 3192:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1473),
    getSymbols = __webpack_require__(1820);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 3193:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(1473),
    getSymbolsIn = __webpack_require__(3194);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 3194:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1819),
    getPrototype = __webpack_require__(1459),
    getSymbols = __webpack_require__(1820),
    stubArray = __webpack_require__(1822);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 3195:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(1818),
    getSymbolsIn = __webpack_require__(3194),
    keysIn = __webpack_require__(1474);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 3196:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 3197:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(1454),
    cloneDataView = __webpack_require__(3198),
    cloneRegExp = __webpack_require__(3199),
    cloneSymbol = __webpack_require__(3200),
    cloneTypedArray = __webpack_require__(1453);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 3198:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(1454);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 3199:
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 3200:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(1096);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 3201:
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(3202),
    baseUnary = __webpack_require__(1469),
    nodeUtil = __webpack_require__(1470);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ 3202:
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(1764),
    isObjectLike = __webpack_require__(1099);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ 3203:
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(3204),
    baseUnary = __webpack_require__(1469),
    nodeUtil = __webpack_require__(1470);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ 3204:
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(1764),
    isObjectLike = __webpack_require__(1099);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ 3205:
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(1480),
    eq = __webpack_require__(1231),
    isIterateeCall = __webpack_require__(1488),
    keysIn = __webpack_require__(1474);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ 3206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultConfig = __webpack_require__(3207);

module.exports = function () {
  var config = defaultConfig;
  var get = function get(key) {
    return config[key];
  };
  var set = function set(key, value) {
    config[key] = value;
  };
  return { get: get, set: set };
}();

/***/ }),

/***/ 3207:
/***/ (function(module) {

module.exports = {"websocket":"wss://ws.golos.io","address_prefix":"GLS","chain_id":"782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12","broadcast_transaction_with_callback":false};

/***/ }),

/***/ 3208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MOST_RECENT = -1;
var ACCOUNT_HISTORY_DEFAULT_LIMIT = 100;
var DEFAULT_VOTES_LIMIT = 10000;
var DEFAULT_VOTES_OFFSET = 0;

module.exports = [{
  "api": "witness_api",
  "method": "get_current_median_history_price"
}, {
  "api": "witness_api",
  "method": "get_feed_history"
}, {
  "api": "witness_api",
  "method": "get_miner_queue"
}, {
  "api": "witness_api",
  "method": "get_witness_schedule"
}, {
  "api": "witness_api",
  "method": "get_witnesses",
  "params": ["witnessIds"]
}, {
  "api": "witness_api",
  "method": "get_witness_by_account",
  "params": ["accountName"]
}, {
  "api": "witness_api",
  "method": "get_witnesses_by_vote",
  "params": ["from", "limit"]
}, {
  "api": "witness_api",
  "method": "get_witness_count"
}, {
  "api": "witness_api",
  "method": "lookup_witness_accounts",
  "params": ["lowerBoundName", "limit"]
}, {
  "api": "witness_api",
  "method": "get_active_witnesses"
}, {
  "api": "account_history",
  "method": "get_account_history",
  "has_default_values": true,
  "params": ["account", "from=" + MOST_RECENT, "limit=" + ACCOUNT_HISTORY_DEFAULT_LIMIT, "query={}"]
}, {
  "api": "operation_history",
  "method": "get_ops_in_block",
  "params": ["blockNum", "onlyVirtual"]
}, {
  "api": "operation_history",
  "method": "get_transaction",
  "params": ["trxId"]
}, {
  "api": "tags",
  "method": "get_trending_tags",
  "params": ["afterTag", "limit"]
}, {
  "api": "tags",
  "method": "get_tags_used_by_author",
  "params": ["author"]
}, {
  "api": "tags",
  "method": "get_discussions_by_payout",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_trending",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_created",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_active",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_cashout",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_votes",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_children",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_hot",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_feed",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_blog",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_comments",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_promoted",
  "params": ["query"]
}, {
  "api": "tags",
  "method": "get_discussions_by_author_before_date",
  "params": ["author", "startPermlink", "beforeDate", "limit"]
}, {
  "api": "tags",
  "method": "get_languages"
}, {
  "api": "social_network",
  "method": "get_replies_by_last_update",
  "has_default_values": true,
  "params": ["startAuthor", "startPermlink", "limit", "voteLimit=" + DEFAULT_VOTES_LIMIT, "voteOffset=" + DEFAULT_VOTES_OFFSET]
}, {
  "api": "social_network",
  "method": "get_content",
  "has_default_values": true,
  "params": ["author", "permlink", "voteLimit=" + DEFAULT_VOTES_LIMIT, "voteOffset=" + DEFAULT_VOTES_OFFSET]
}, {
  "api": "social_network",
  "method": "get_content_replies",
  "has_default_values": true,
  "params": ["parent", "parentPermlink", "voteLimit=" + DEFAULT_VOTES_LIMIT, "voteOffset=" + DEFAULT_VOTES_OFFSET]
}, {
  "api": "social_network",
  "method": "get_all_content_replies",
  "has_default_values": true,
  "params": ["parent", "parentPermlink", "voteLimit=" + DEFAULT_VOTES_LIMIT, "voteOffset=" + DEFAULT_VOTES_OFFSET]
}, {
  "api": "social_network",
  "method": "get_active_votes",
  "has_default_values": true,
  "params": ["author", "permlink", "voteLimit=" + DEFAULT_VOTES_LIMIT, "voteOffset=" + DEFAULT_VOTES_OFFSET]
}, {
  "api": "social_network",
  "method": "get_account_votes",
  "params": ["voter", "from", "voteLimit"]
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
  "method": "get_config"
}, {
  "api": "database_api",
  "method": "get_dynamic_global_properties"
}, {
  "api": "database_api",
  "method": "get_chain_properties"
}, {
  "api": "database_api",
  "method": "get_hardfork_version"
}, {
  "api": "database_api",
  "method": "get_next_scheduled_hardfork"
}, {
  "api": "database_api",
  "method": "get_account_count"
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
  "method": "get_conversion_requests",
  "params": ["accountName"]
}, {
  "api": "database_api",
  "method": "get_transaction_hex",
  "params": ["trx"]
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
  "params": ["name", "signers"]
}, {
  "api": "database_api",
  "method": "get_accounts",
  "params": ["accountNames"]
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
  "method": "get_proposed_transactions",
  "params": ["account", "from", "limit"]
}, {
  "api": "database_api",
  "method": "get_database_info"
}, {
  "api": "database_api",
  "method": "get_vesting_delegations",
  "params": ["account", "from", "limit", "type"]
}, {
  "api": "database_api",
  "method": "get_expiring_vesting_delegations",
  "params": ["account", "from", "limit"]
}, {
  "api": "follow",
  "method": "get_followers",
  "params": ["following", "startFollower", "followType", "limit"]
}, {
  "api": "follow",
  "method": "get_following",
  "params": ["follower", "startFollowing", "followType", "limit"]
}, {
  "api": "follow",
  "method": "get_follow_count",
  "params": ["account"]
}, {
  "api": "follow",
  "method": "get_feed_entries",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow",
  "method": "get_feed",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow",
  "method": "get_blog_entries",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow",
  "method": "get_blog",
  "params": ["account", "entryId", "limit"]
}, {
  "api": "follow",
  "method": "get_account_reputations",
  "params": ["names"]
}, {
  "api": "follow",
  "method": "get_reblogged_by",
  "params": ["author", "permlink"]
}, {
  "api": "follow",
  "method": "get_blog_authors",
  "params": ["blogAccount"]
}, {
  "api": "account_by_key",
  "method": "get_key_references",
  "params": ["account_name_type"]
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
  "params": ["block"]
}, {
  "api": "market_history",
  "method": "get_ticker",
  "params": []
}, {
  "api": "market_history",
  "method": "get_volume",
  "params": []
}, {
  "api": "market_history",
  "method": "get_order_book",
  "params": ["limit"]
}, {
  "api": "market_history",
  "method": "get_order_book_extended",
  "params": ["limit"]
}, {
  "api": "market_history",
  "method": "get_trade_history",
  "params": ["start", "end", "limit"]
}, {
  "api": "market_history",
  "method": "get_recent_trades",
  "params": ["limit"]
}, {
  "api": "market_history",
  "method": "get_market_history",
  "params": ["bucket_seconds", "start", "end"]
}, {
  "api": "market_history",
  "method": "get_market_history_buckets",
  "params": []
}, {
  "api": "market_history",
  "method": "get_open_orders",
  "params": ["owner"]
}, {
  "api": "private_message",
  "method": "get_inbox",
  "params": ["to", "query"]
}, {
  "api": "private_message",
  "method": "get_outbox",
  "params": ["from", "query"]
}, {
  "api": "private_message",
  "method": "get_thread",
  "params": ["from", "to", "query"]
}, {
  "api": "private_message",
  "method": "get_settings",
  "params": ["owner"]
}, {
  "api": "private_message",
  "method": "get_contacts_size",
  "params": ["owner"]
}, {
  "api": "private_message",
  "method": "get_contact_info",
  "params": ["owner", "contact"]
}, {
  "api": "private_message",
  "method": "get_contacts",
  "params": ["owner", "type", "limit", "offset"]
}, {
  "api": "worker_api",
  "method": "get_worker_requests",
  "params": ["query", "sort", "fill_posts"]
}, {
  "api": "worker_api",
  "method": "get_worker_request_votes",
  "params": ["author", "permlink", "start_voter", "limit"]
}];

/***/ }),

/***/ 3209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelCase = camelCase;
exports.validateAccountName = validateAccountName;
var snakeCaseRe = /_([a-z])/g;
function camelCase(str) {
  return str.replace(snakeCaseRe, function (_m, l) {
    return l.toUpperCase();
  });
}

function validateAccountName(value) {
  var i = void 0,
      label = void 0,
      len = void 0,
      suffix = void 0;

  suffix = "Account name should ";
  if (!value) {
    return suffix + "not be empty.";
  }
  var length = value.length;
  if (length < 3) {
    return suffix + "be longer.";
  }
  if (length > 16) {
    return suffix + "be shorter.";
  }
  if (/\./.test(value)) {
    suffix = "Each account segment should ";
  }
  var ref = value.split(".");
  for (i = 0, len = ref.length; i < len; i++) {
    label = ref[i];
    if (!/^[a-z]/.test(label)) {
      return suffix + "start with a letter.";
    }
    if (!/^[a-z0-9-]*$/.test(label)) {
      return suffix + "have only letters, digits, or dashes.";
    }
    if (/--/.test(label)) {
      return suffix + "have only one dash in a row.";
    }
    if (!/[a-z0-9]$/.test(label)) {
      return suffix + "end with a letter or digit.";
    }
    if (!(label.length >= 3)) {
      return suffix + "be longer";
    }
  }
  return null;
}

/***/ }),

/***/ 3211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var bigi = __webpack_require__(442),
    bs58 = __webpack_require__(455),
    ecurve = __webpack_require__(450),
    Point = ecurve.Point,
    secp256k1 = ecurve.getCurveByName('secp256k1'),
    config = __webpack_require__(3206),
    operations = __webpack_require__(3212),
    Signature = __webpack_require__(3220),
    KeyPrivate = __webpack_require__(3219),
    PublicKey = __webpack_require__(3218),
    hash = __webpack_require__(3216);

var Auth = {};
var transaction = operations.transaction;
var signed_transaction = operations.signed_transaction;

Auth.verify = function (name, password, auths) {
	var hasKey = false;
	var roles = [];
	for (var role in auths) {
		roles.push(role);
	}
	var pubKeys = this.generateKeys(name, password, roles);
	roles.forEach(function (role) {
		if (auths[role][0][0] === pubKeys[role]) {
			hasKey = true;
		}
	});
	return hasKey;
};

Auth.generateKeys = function (name, password, roles) {
	var pubKeys = {};
	roles.forEach(function (role) {
		var seed = name + role + password;
		var brainKey = seed.trim().split(/[\t\n\v\f\r ]+/).join(' ');
		var hashSha256 = hash.sha256(brainKey);
		var bigInt = bigi.fromBuffer(hashSha256);
		var toPubKey = secp256k1.G.multiply(bigInt);
		var point = new Point(toPubKey.curve, toPubKey.x, toPubKey.y, toPubKey.z);
		var pubBuf = point.getEncoded(toPubKey.compressed);
		var checksum = hash.ripemd160(pubBuf);
		var addy = Buffer.concat([pubBuf, checksum.slice(0, 4)]);
		pubKeys[role] = config.get('address_prefix') + bs58.encode(addy);
	});
	return pubKeys;
};

/**
	@arg {string} name - blockchain account name
	@arg {string} password - very strong password typically no shorter than a private key
	@arg {array} roles - defaults to standard Golos blockchain-level roles
*/
Auth.getPrivateKeys = function (name, password) {
	var roles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['owner', 'active', 'posting', 'memo'];

	var privKeys = {};
	roles.forEach(function (role) {
		privKeys[role] = this.toWif(name, password, role);
		privKeys[role + 'Pubkey'] = this.wifToPublic(privKeys[role]);
	}.bind(this));
	return privKeys;
};

Auth.isWif = function (privWif) {
	var isWif = false;
	try {
		var bufWif = new Buffer(bs58.decode(privWif));
		var privKey = bufWif.slice(0, -4);
		var checksum = bufWif.slice(-4);
		var newChecksum = hash.sha256(privKey);
		newChecksum = hash.sha256(newChecksum);
		newChecksum = newChecksum.slice(0, 4);
		if (checksum.toString() == newChecksum.toString()) {
			isWif = true;
		}
	} catch (e) {}
	return isWif;
};

Auth.toWif = function (name, password, role) {
	var seed = name + role + password;
	var brainKey = seed.trim().split(/[\t\n\v\f\r ]+/).join(' ');
	var hashSha256 = hash.sha256(brainKey);
	var privKey = Buffer.concat([new Buffer([0x80]), hashSha256]);
	var checksum = hash.sha256(privKey);
	checksum = hash.sha256(checksum);
	checksum = checksum.slice(0, 4);
	var privWif = Buffer.concat([privKey, checksum]);
	return bs58.encode(privWif);
};

Auth.wifIsValid = function (privWif, pubWif) {
	return this.wifToPublic(privWif) == pubWif;
};

Auth.wifToPublic = function (privWif) {
	var pubWif = KeyPrivate.fromWif(privWif);
	pubWif = pubWif.toPublic().toString();
	return pubWif;
};

Auth.isPubkey = function (pubkey, address_prefix) {
	return PublicKey.fromString(pubkey, address_prefix) != null;
};

Auth.signTransaction = function (trx, keys) {
	var signatures = [];
	if (trx.signatures) {
		signatures = [].concat(trx.signatures);
	}

	var cid = new Buffer(config.get('chain_id'), 'hex');
	var buf = transaction.toBuffer(trx);

	for (var key in keys) {
		var sig = Signature.signBuffer(Buffer.concat([cid, buf]), keys[key]);
		signatures.push(sig.toBuffer());
	}

	return signed_transaction.toObject(Object.assign(trx, { signatures: signatures }));
};

module.exports = Auth;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _types = __webpack_require__(3213);

var _types2 = _interopRequireDefault(_types);

var _serializer = __webpack_require__(3231);

var _serializer2 = _interopRequireDefault(_serializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file is merge updated from steemd's js_operation_serializer program.
/*

./js_operation_serializer |
sed 's/void/future_extensions/g'|
sed 's/steemit_protocol:://g'|
sed 's/14static_variantIJNS_12fixed_stringINSt3__14pairIyyEEEEEEE/string/g'|
sed 's/steemit_future_extensions/future_extensions/g'|
sed 's/steemit_protocol_//g' > tmp.coffee

*/
// coffee tmp.coffee # fix errors until you see: `ChainTypes is not defined`

/*

   remove these 7 lines from tmp.coffee:

static_variant [
    pow2
    equihash_pow
] = static_variant [
    pow2
    equihash_pow
]

*/

// npm i -g decaffeinate
// decaffeinate tmp.coffee

// Merge tmp.js - See "Generated code follows" below

var int16 = _types2.default.int16,
    uint8 = _types2.default.uint8,
    uint16 = _types2.default.uint16,
    uint32 = _types2.default.uint32,
    uint64 = _types2.default.uint64,
    string = _types2.default.string,
    string_binary = _types2.default.string_binary,
    bytes = _types2.default.bytes,
    bool = _types2.default.bool,
    array = _types2.default.array,
    static_variant = _types2.default.static_variant,
    map = _types2.default.map,
    set = _types2.default.set,
    public_key = _types2.default.public_key,
    time_point_sec = _types2.default.time_point_sec,
    optional = _types2.default.optional,
    asset = _types2.default.asset,
    asset_16 = _types2.default.asset_16;


var future_extensions = _types2.default.void;
var hardfork_version_vote = _types2.default.void;
var version = _types2.default.void;

// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
var operation = static_variant();
module.exports.operation = operation;

// For module.exports
var Serializer = function Serializer(operation_name, serilization_types_object) {
    var s = new _serializer2.default(operation_name, serilization_types_object);
    return module.exports[operation_name] = s;
};

var beneficiaries = new Serializer("beneficiaries", {
    account: string,
    weight: uint16
});

var comment_payout_beneficiaries = new Serializer(0, {
    beneficiaries: set(beneficiaries)
});

var comment_auction_window_reward_destination = new Serializer(1, {
    destination: uint64
});

var comment_curation_rewards_percent = new Serializer(2, {
    percent: uint16
});

var account_referral = new Serializer(0, {
    referrer: string,
    interest_rate: uint16,
    end_date: time_point_sec,
    break_fee: asset
});

var transaction = new Serializer("transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions)
});

var encrypted_memo = new Serializer("encrypted_memo", {
    from: public_key,
    to: public_key,
    nonce: uint64,
    check: uint32,
    encrypted: string_binary
});
// Custom-types after Generated code

// ##  Generated code follows
// -------------------------------
/*
When updating generated code (fix closing notation)
Replace:  var operation = static_variant([
with:     operation.st_operations = [

Delete (these are custom types instead):
let public_key = new Serializer( 
    "public_key",
    {key_data: bytes(33)}
);

let asset = new Serializer( 
    "asset",
    {amount: int64,
    symbol: uint64}
);

Replace: authority.prototype.account_authority_map
With: map((string), (uint16))
*/
var signed_transaction = new Serializer("signed_transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65))
});

var signed_block = new Serializer("signed_block", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([future_extensions, version, hardfork_version_vote])),
    witness_signature: bytes(65),
    transactions: array(signed_transaction)
});

var block_header = new Serializer("block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([future_extensions, version, hardfork_version_vote]))
});

var signed_block_header = new Serializer("signed_block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([future_extensions, version, hardfork_version_vote])),
    witness_signature: bytes(65)
});

var vote = new Serializer("vote", {
    voter: string,
    author: string,
    permlink: string,
    weight: int16
});

var comment = new Serializer("comment", {
    parent_author: string,
    parent_permlink: string,
    author: string,
    permlink: string,
    title: string,
    body: string,
    json_metadata: string
});

var transfer = new Serializer("transfer", {
    from: string,
    to: string,
    amount: asset,
    memo: string
});

var transfer_to_vesting = new Serializer("transfer_to_vesting", {
    from: string,
    to: string,
    amount: asset
});

var withdraw_vesting = new Serializer("withdraw_vesting", {
    account: string,
    vesting_shares: asset
});

var limit_order_create = new Serializer("limit_order_create", {
    owner: string,
    orderid: uint32,
    amount_to_sell: asset,
    min_to_receive: asset,
    fill_or_kill: bool,
    expiration: time_point_sec
});

var limit_order_cancel = new Serializer("limit_order_cancel", {
    owner: string,
    orderid: uint32
});

var price = new Serializer("price", {
    base: asset,
    quote: asset
});

var feed_publish = new Serializer("feed_publish", {
    publisher: string,
    exchange_rate: price
});

var convert = new Serializer("convert", {
    owner: string,
    requestid: uint32,
    amount: asset
});

var authority = new Serializer("authority", {
    weight_threshold: uint32,
    account_auths: map(string, uint16),
    key_auths: map(public_key, uint16)
});

var account_create = new Serializer("account_create", {
    fee: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string
});

var account_update = new Serializer("account_update", {
    account: string,
    owner: optional(authority),
    active: optional(authority),
    posting: optional(authority),
    memo_key: public_key,
    json_metadata: string
});

var chain_properties = new Serializer("chain_properties", {
    account_creation_fee: asset,
    maximum_block_size: uint32,
    sbd_interest_rate: uint16
});

var witness_update = new Serializer("witness_update", {
    owner: string,
    url: string,
    block_signing_key: public_key,
    props: chain_properties,
    fee: asset
});

var account_witness_vote = new Serializer("account_witness_vote", {
    account: string,
    witness: string,
    approve: bool
});

var account_witness_proxy = new Serializer("account_witness_proxy", {
    account: string,
    proxy: string
});

var pow = new Serializer("pow", {
    worker: public_key,
    input: bytes(32),
    signature: bytes(65),
    work: bytes(32)
});

var custom = new Serializer("custom", {
    required_auths: set(string),
    id: uint16,
    data: bytes()
});

var report_over_production = new Serializer("report_over_production", {
    reporter: string,
    first_block: signed_block_header,
    second_block: signed_block_header
});

var delete_comment = new Serializer("delete_comment", {
    author: string,
    permlink: string
});

var custom_json = new Serializer("custom_json", {
    required_auths: set(string),
    required_posting_auths: set(string),
    id: string,
    json: string
});

var comment_options = new Serializer("comment_options", {
    author: string,
    permlink: string,
    max_accepted_payout: asset,
    percent_steem_dollars: uint16,
    allow_votes: bool,
    allow_curation_rewards: bool,
    extensions: set(static_variant([comment_payout_beneficiaries, comment_auction_window_reward_destination, comment_curation_rewards_percent]))
});

var set_withdraw_vesting_route = new Serializer("set_withdraw_vesting_route", {
    from_account: string,
    to_account: string,
    percent: uint16,
    auto_vest: bool
});

var limit_order_create2 = new Serializer("limit_order_create2", {
    owner: string,
    orderid: uint32,
    amount_to_sell: asset,
    exchange_rate: price,
    fill_or_kill: bool,
    expiration: time_point_sec
});

var challenge_authority = new Serializer("challenge_authority", {
    challenger: string,
    challenged: string,
    require_owner: bool
});

var prove_authority = new Serializer("prove_authority", {
    challenged: string,
    require_owner: bool
});

var request_account_recovery = new Serializer("request_account_recovery", {
    recovery_account: string,
    account_to_recover: string,
    new_owner_authority: authority,
    extensions: set(future_extensions)
});

var recover_account = new Serializer("recover_account", {
    account_to_recover: string,
    new_owner_authority: authority,
    recent_owner_authority: authority,
    extensions: set(future_extensions)
});

var change_recovery_account = new Serializer("change_recovery_account", {
    account_to_recover: string,
    new_recovery_account: string,
    extensions: set(future_extensions)
});

var escrow_transfer = new Serializer("escrow_transfer", {
    from: string,
    to: string,
    sbd_amount: asset,
    steem_amount: asset,
    escrow_id: uint32,
    agent: string,
    fee: asset,
    json_meta: string,
    ratification_deadline: time_point_sec,
    escrow_expiration: time_point_sec
});

var escrow_dispute = new Serializer("escrow_dispute", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32
});

var escrow_release = new Serializer("escrow_release", {
    from: string,
    to: string,
    agent: string,
    who: string,
    receiver: string,
    escrow_id: uint32,
    sbd_amount: asset,
    steem_amount: asset
});

var pow2_input = new Serializer("pow2_input", {
    worker_account: string,
    prev_block: bytes(20),
    nonce: uint64
});

var pow2 = new Serializer("pow2", {
    input: pow2_input,
    pow_summary: uint32
});

var equihash_proof = new Serializer("equihash_proof", {
    n: uint32,
    k: uint32,
    seed: bytes(32),
    inputs: array(uint32)
});

var equihash_pow = new Serializer("equihash_pow", {
    input: pow2_input,
    proof: equihash_proof,
    prev_block: bytes(20),
    pow_summary: uint32
});

var escrow_approve = new Serializer("escrow_approve", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32,
    approve: bool
});

var transfer_to_savings = new Serializer("transfer_to_savings", {
    from: string,
    to: string,
    amount: asset,
    memo: string
});

var transfer_from_savings = new Serializer("transfer_from_savings", {
    from: string,
    request_id: uint32,
    to: string,
    amount: asset,
    memo: string
});

var cancel_transfer_from_savings = new Serializer("cancel_transfer_from_savings", {
    from: string,
    request_id: uint32
});

var custom_binary = new Serializer("custom_binary", {
    required_owner_auths: set(string),
    required_active_auths: set(string),
    required_posting_auths: set(string),
    required_auths: array(authority),
    id: string,
    data: bytes()
});

var decline_voting_rights = new Serializer("decline_voting_rights", {
    account: string,
    decline: bool
});

var reset_account = new Serializer("reset_account", {
    reset_account: string,
    account_to_reset: string,
    new_owner_authority: authority
});

var set_reset_account = new Serializer("set_reset_account", {
    account: string,
    current_reset_account: string,
    reset_account: string
});

var delegate_vesting_shares = new Serializer("delegate_vesting_shares", {
    delegator: string,
    delegatee: string,
    vesting_shares: asset
});

var account_create_with_delegation = new Serializer("account_create_with_delegation", {
    fee: asset,
    delegation: asset,
    creator: string,
    new_account_name: string,
    owner: authority,
    active: authority,
    posting: authority,
    memo_key: public_key,
    json_metadata: string,
    extensions: set(static_variant([account_referral]))
});

var account_metadata = new Serializer("account_metadata", {
    account: string,
    json_metadata: string
});

var operation_wrapper = new Serializer("operation_wrapper", {
    op: operation
});

var proposal_create = new Serializer("proposal_create", {
    author: string,
    title: string,
    memo: string,
    expiration_time: time_point_sec,
    proposed_operations: array(operation_wrapper),
    review_period_time: optional(time_point_sec),
    extensions: set(future_extensions)
});

var proposal_update = new Serializer("proposal_update", {
    author: string,
    title: string,
    active_approvals_to_add: set(string),
    active_approvals_to_remove: set(string),
    owner_approvals_to_add: set(string),
    owner_approvals_to_remove: set(string),
    posting_approvals_to_add: set(string),
    posting_approvals_to_remove: set(string),
    key_approvals_to_add: set(public_key),
    key_approvals_to_remove: set(public_key),
    extensions: set(future_extensions)
});

var proposal_delete = new Serializer("proposal_delete", {
    author: string,
    title: string,
    requester: string,
    extensions: set(future_extensions)
});

var chain_properties_18 = new Serializer(1, {
    account_creation_fee: asset,
    maximum_block_size: uint32,
    sbd_interest_rate: uint16,
    create_account_min_golos_fee: asset,
    create_account_min_delegation: asset,
    create_account_delegation_time: uint32,
    min_delegation: asset
});

var chain_properties_19 = new Serializer(2, {
    account_creation_fee: asset,
    maximum_block_size: uint32,
    sbd_interest_rate: uint16,
    create_account_min_golos_fee: asset,
    create_account_min_delegation: asset,
    create_account_delegation_time: uint32,
    min_delegation: asset,
    max_referral_interest_rate: uint16,
    max_referral_term_sec: uint32,
    min_referral_break_fee: asset,
    max_referral_break_fee: asset,
    posts_window: uint16,
    posts_per_window: uint16,
    comments_window: uint16,
    comments_per_window: uint16,
    votes_window: uint16,
    votes_per_window: uint16,
    auction_window_size: uint16,
    max_delegated_vesting_interest_rate: uint16,
    custom_ops_bandwidth_multiplier: uint16,
    min_curation_percent: uint16,
    max_curation_percent: uint16,
    curation_reward_curve: uint64,
    allow_distribute_auction_reward: bool,
    allow_return_auction_reward_to_fund: bool
});

var chain_properties_22 = new Serializer(3, {
    account_creation_fee: asset,
    maximum_block_size: uint32,
    sbd_interest_rate: uint16,
    create_account_min_golos_fee: asset,
    create_account_min_delegation: asset,
    create_account_delegation_time: uint32,
    min_delegation: asset,
    max_referral_interest_rate: uint16,
    max_referral_term_sec: uint32,
    min_referral_break_fee: asset,
    max_referral_break_fee: asset,
    posts_window: uint16,
    posts_per_window: uint16,
    comments_window: uint16,
    comments_per_window: uint16,
    votes_window: uint16,
    votes_per_window: uint16,
    auction_window_size: uint16,
    max_delegated_vesting_interest_rate: uint16,
    custom_ops_bandwidth_multiplier: uint16,
    min_curation_percent: uint16,
    max_curation_percent: uint16,
    curation_reward_curve: uint64,
    allow_distribute_auction_reward: bool,
    allow_return_auction_reward_to_fund: bool,
    worker_reward_percent: uint16,
    witness_reward_percent: uint16,
    vesting_reward_percent: uint16,
    worker_request_creation_fee: asset,
    worker_request_approve_min_percent: uint16,
    sbd_debt_convert_rate: uint16,
    vote_regeneration_per_day: uint32,
    witness_skipping_reset_time: uint32,
    witness_idleness_time: uint32,
    account_idleness_time: uint32
});

var chain_properties_update = new Serializer("chain_properties_update", {
    owner: string,
    props: static_variant([chain_properties, chain_properties_18, chain_properties_19, chain_properties_22])
});

var break_free_referral = new Serializer("break_free_referral", {
    referral: string,
    extensions: set(future_extensions)
});

var delegate_vesting_shares_with_interest = new Serializer("delegate_vesting_shares_with_interest", {
    delegator: string,
    delegatee: string,
    vesting_shares: asset,
    interest_rate: uint16,
    extensions: set(future_extensions)
});

var reject_vesting_shares_delegation = new Serializer("reject_vesting_shares_delegation", {
    delegator: string,
    delegatee: string,
    extensions: set(future_extensions)
});

var transit_to_cyberway = new Serializer("transit_to_cyberway", {
    owner: string,
    vote_to_transit: bool
});

var worker_request = new Serializer("worker_request", {
    author: string,
    permlink: string,
    worker: string,
    required_amount_min: asset,
    required_amount_max: asset,
    vest_reward: bool,
    duration: uint32,
    extensions: set(future_extensions)
});

var worker_request_delete = new Serializer("worker_request_delete", {
    author: string,
    permlink: string,
    extensions: set(future_extensions)
});

var worker_request_vote = new Serializer("worker_request_vote", {
    voter: string,
    author: string,
    permlink: string,
    vote_percent: int16,
    extensions: set(future_extensions)
});

var fill_convert_request = new Serializer("fill_convert_request", {
    owner: string,
    requestid: uint32,
    amount_in: asset,
    amount_out: asset
});

var author_reward = new Serializer("author_reward", {
    author: string,
    permlink: string,
    sbd_payout: asset,
    steem_payout: asset,
    vesting_payout: asset
});

var curation_reward = new Serializer("curation_reward", {
    curator: string,
    reward: asset,
    comment_author: string,
    comment_permlink: string
});

var comment_reward = new Serializer("comment_reward", {
    author: string,
    permlink: string,
    payout: asset
});

var liquidity_reward = new Serializer("liquidity_reward", {
    owner: string,
    payout: asset
});

var interest = new Serializer("interest", {
    owner: string,
    interest: asset
});

var fill_vesting_withdraw = new Serializer("fill_vesting_withdraw", {
    from_account: string,
    to_account: string,
    withdrawn: asset,
    deposited: asset
});

var fill_order = new Serializer("fill_order", {
    current_owner: string,
    current_orderid: uint32,
    current_pays: asset,
    open_owner: string,
    open_orderid: uint32,
    open_pays: asset
});

var shutdown_witness = new Serializer("shutdown_witness", {
    owner: string
});

var fill_transfer_from_savings = new Serializer("fill_transfer_from_savings", {
    from: string,
    to: string,
    amount: asset,
    request_id: uint32,
    memo: string
});

var hardfork = new Serializer("hardfork", {
    hardfork_id: uint32
});

var comment_payout_update = new Serializer("comment_payout_update", {
    author: string,
    permlink: string
});

var comment_benefactor_reward = new Serializer("comment_benefactor_reward", {
    benefactor: string,
    author: string,
    permlink: string,
    reward: asset
});

var return_vesting_delegation = new Serializer("return_vesting_delegation", {
    account: string,
    vesting_shares: asset
});

operation.st_operations = [vote, comment, transfer, transfer_to_vesting, withdraw_vesting, limit_order_create, limit_order_cancel, feed_publish, convert, account_create, account_update, witness_update, account_witness_vote, account_witness_proxy, pow, custom, report_over_production, delete_comment, custom_json, comment_options, set_withdraw_vesting_route, limit_order_create2, challenge_authority, prove_authority, request_account_recovery, recover_account, change_recovery_account, escrow_transfer, escrow_dispute, escrow_release, pow2, escrow_approve, transfer_to_savings, transfer_from_savings, cancel_transfer_from_savings, custom_binary, decline_voting_rights, reset_account, set_reset_account, delegate_vesting_shares, account_create_with_delegation, account_metadata, proposal_create, proposal_update, proposal_delete, chain_properties_update, break_free_referral, delegate_vesting_shares_with_interest, reject_vesting_shares_delegation, transit_to_cyberway, worker_request, worker_request_delete, worker_request_vote, fill_convert_request, author_reward, curation_reward, comment_reward, liquidity_reward, interest, fill_vesting_withdraw, fill_order, shutdown_witness, fill_transfer_from_savings, hardfork, comment_payout_update, comment_benefactor_reward, return_vesting_delegation];

//# -------------------------------
//#  Generated code end  S T O P
//# -------------------------------

// Make sure all tests pass
// npm test

/***/ }),

/***/ 3213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ecc = __webpack_require__(3214);

var _number_utils = __webpack_require__(3226);

// Low-level types that make up operations

var v = __webpack_require__(3227);
var ObjectId = __webpack_require__(3229);
var fp = __webpack_require__(3230);
var chain_types = __webpack_require__(3228);

var Types = {};
module.exports = Types;

var HEX_DUMP = process.env.npm_config__graphene_serializer_hex_dump;
var TEST = "none" === "test";

/**
* Asset symbols contain the following information
*
*  4 bit PRECISION
*  4 bit RESERVED
*  CHAR[6] up to 6 upper case alpha numeric ascii characters,
*  char = \0  null terminated
*
*  It is treated as a uint64_t for all internal operations, but
*  is easily converted to something that can be displayed.
*/
Types.asset = {
    fromByteBuffer: function fromByteBuffer(b) {
        var amount = b.readInt64();
        var precision = b.readUint8();
        var b_copy = b.copy(b.offset, b.offset + 7);
        var symbol = new Buffer(b_copy.toBinary(), "binary").toString().replace(/\x00/g, "");
        b.skip(7);
        // "1.000 GOLOS" always written with full precision
        var amount_string = (0, _number_utils.fromImpliedDecimal)(amount, precision);
        return amount_string + " " + symbol;
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        object = object.trim();
        if (!/^[0-9]+\.?[0-9]* [A-Za-z0-9]+$/.test(object)) throw new Error("Expecting amount like '99.000 SYMBOL', instead got '" + object + "'");

        var _object$split = object.split(" "),
            _object$split2 = _slicedToArray(_object$split, 2),
            amount = _object$split2[0],
            symbol = _object$split2[1];

        if (symbol.length > 6) throw new Error("Symbols are not longer than 6 characters " + symbol + "-" + symbol.length);

        b.writeInt64(v.to_long(amount.replace(".", "")));
        var dot = amount.indexOf("."); // 0.000
        var precision = dot === -1 ? 0 : amount.length - dot - 1;
        b.writeUint8(precision);
        b.append(symbol.toUpperCase(), 'binary');
        for (var i = 0; i < 7 - symbol.length; i++) {
            b.writeUint8(0);
        }return;
    },
    fromObject: function fromObject(object) {
        return object;
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return "0.000 GOLOS";
        }
        return object;
    }
};

Types.uint8 = {
    fromByteBuffer: function fromByteBuffer(b) {
        return b.readUint8();
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        v.require_range(0, 0xFF, object, 'uint8 ' + object);
        b.writeUint8(object);
        return;
    },
    fromObject: function fromObject(object) {
        v.require_range(0, 0xFF, object, 'uint8 ' + object);
        return object;
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return 0;
        }
        v.require_range(0, 0xFF, object, 'uint8 ' + object);
        return parseInt(object);
    }
};

Types.uint16 = {
    fromByteBuffer: function fromByteBuffer(b) {
        return b.readUint16();
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        v.require_range(0, 0xFFFF, object, 'uint16 ' + object);
        b.writeUint16(object);
        return;
    },
    fromObject: function fromObject(object) {
        v.require_range(0, 0xFFFF, object, 'uint16 ' + object);
        return object;
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return 0;
        }
        v.require_range(0, 0xFFFF, object, 'uint16 ' + object);
        return parseInt(object);
    }
};

Types.uint32 = {
    fromByteBuffer: function fromByteBuffer(b) {
        return b.readUint32();
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        v.require_range(0, 0xFFFFFFFF, object, 'uint32 ' + object);
        b.writeUint32(object);
        return;
    },
    fromObject: function fromObject(object) {
        v.require_range(0, 0xFFFFFFFF, object, 'uint32 ' + object);
        return object;
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return 0;
        }
        v.require_range(0, 0xFFFFFFFF, object, 'uint32 ' + object);
        return parseInt(object);
    }
};

var MIN_SIGNED_32 = -1 * Math.pow(2, 31);
var MAX_SIGNED_32 = Math.pow(2, 31) - 1;

Types.varint32 = {
    fromByteBuffer: function fromByteBuffer(b) {
        return b.readVarint32();
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        v.require_range(MIN_SIGNED_32, MAX_SIGNED_32, object, 'uint32 ' + object);
        b.writeVarint32(object);
        return;
    },
    fromObject: function fromObject(object) {
        v.require_range(MIN_SIGNED_32, MAX_SIGNED_32, object, 'uint32 ' + object);
        return object;
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return 0;
        }
        v.require_range(MIN_SIGNED_32, MAX_SIGNED_32, object, 'uint32 ' + object);
        return parseInt(object);
    }
};

Types.int16 = {
    fromByteBuffer: function fromByteBuffer(b) {
        return b.readInt16();
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        b.writeInt16(object);
        return;
    },
    fromObject: function fromObject(object) {
        return object;
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return 0;
        }
        return parseInt(object);
    }
};

Types.int64 = {
    fromByteBuffer: function fromByteBuffer(b) {
        return b.readInt64();
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        v.required(object);
        b.writeInt64(v.to_long(object));
        return;
    },
    fromObject: function fromObject(object) {
        v.required(object);
        return v.to_long(object);
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return "0";
        }
        v.required(object);
        return v.to_long(object).toString();
    }
};

Types.uint64 = {
    fromByteBuffer: function fromByteBuffer(b) {
        return b.readUint64();
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        b.writeUint64(v.to_long(v.unsigned(object)));
        return;
    },
    fromObject: function fromObject(object) {
        return v.to_long(v.unsigned(object));
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return "0";
        }
        return v.to_long(object).toString();
    }
};

Types.string = {
    fromByteBuffer: function fromByteBuffer(b) {
        return new Buffer(b.readVString(), 'utf8');
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        v.required(object);
        b.writeVString(object.toString());
        return;
    },
    fromObject: function fromObject(object) {
        v.required(object);
        return new Buffer(object, 'utf8');
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return "";
        }
        return object.toString('utf8');
    }
};

Types.string_binary = {
    fromByteBuffer: function fromByteBuffer(b) {
        var b_copy;
        var len = b.readVarint32();
        b_copy = b.copy(b.offset, b.offset + len), b.skip(len);
        return new Buffer(b_copy.toBinary(), 'binary');
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        b.writeVarint32(object.length);
        b.append(object.toString('binary'), 'binary');
        return;
    },
    fromObject: function fromObject(object) {
        v.required(object);
        return new Buffer(object);
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return "";
        }
        return object.toString();
    }
};

Types.bytes = function (size) {
    return {
        fromByteBuffer: function fromByteBuffer(b) {
            if (size === undefined) {
                var b_copy;
                var len = b.readVarint32();
                b_copy = b.copy(b.offset, b.offset + len), b.skip(len);
                return new Buffer(b_copy.toBinary(), 'binary');
            } else {
                b_copy = b.copy(b.offset, b.offset + size), b.skip(size);
                return new Buffer(b_copy.toBinary(), 'binary');
            }
        },
        appendByteBuffer: function appendByteBuffer(b, object) {
            v.required(object);
            if (typeof object === "string") object = new Buffer(object, "hex");

            if (size === undefined) {
                b.writeVarint32(object.length);
            }
            b.append(object.toString('binary'), 'binary');
            return;
        },
        fromObject: function fromObject(object) {
            v.required(object);
            if (Buffer.isBuffer(object)) return object;

            return new Buffer(object, 'hex');
        },
        toObject: function toObject(object) {
            var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (debug.use_default && object === undefined) {
                var zeros = function zeros(num) {
                    return new Array(num).join("00");
                };
                return zeros(size);
            }
            v.required(object);
            return object.toString('hex');
        }
    };
};

Types.bool = {
    fromByteBuffer: function fromByteBuffer(b) {
        return b.readUint8() === 1;
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        // supports boolean or integer
        b.writeUint8(JSON.parse(object) ? 1 : 0);
        return;
    },
    fromObject: function fromObject(object) {
        return JSON.parse(object) ? true : false;
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return false;
        }
        return JSON.parse(object) ? true : false;
    }
};

Types.void = {
    fromByteBuffer: function fromByteBuffer(b) {
        throw new Error("(void) undefined type");
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        throw new Error("(void) undefined type");
    },
    fromObject: function fromObject(object) {
        throw new Error("(void) undefined type");
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return undefined;
        }
        throw new Error("(void) undefined type");
    }
};

Types.array = function (st_operation) {
    return {
        fromByteBuffer: function fromByteBuffer(b) {
            var size = b.readVarint32();
            if (HEX_DUMP) {
                console.log("varint32 size = " + size.toString(16));
            }
            var result = [];
            for (var i = 0; 0 < size ? i < size : i > size; 0 < size ? i++ : i++) {
                result.push(st_operation.fromByteBuffer(b));
            }
            return sortOperation(result, st_operation);
        },
        appendByteBuffer: function appendByteBuffer(b, object) {
            v.required(object);
            object = sortOperation(object, st_operation);
            b.writeVarint32(object.length);
            for (var i = 0, o; i < object.length; i++) {
                o = object[i];
                st_operation.appendByteBuffer(b, o);
            }
        },
        fromObject: function fromObject(object) {
            v.required(object);
            object = sortOperation(object, st_operation);
            var result = [];
            for (var i = 0, o; i < object.length; i++) {
                o = object[i];
                result.push(st_operation.fromObject(o));
            }
            return result;
        },
        toObject: function toObject(object) {
            var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (debug.use_default && object === undefined) {
                return [st_operation.toObject(object, debug)];
            }
            v.required(object);
            object = sortOperation(object, st_operation);

            var result = [];
            for (var i = 0, o; i < object.length; i++) {
                o = object[i];
                result.push(st_operation.toObject(o, debug));
            }
            return result;
        }
    };
};

Types.time_point_sec = {
    fromByteBuffer: function fromByteBuffer(b) {
        return b.readUint32();
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        if (typeof object !== "number") object = Types.time_point_sec.fromObject(object);

        b.writeUint32(object);
        return;
    },
    fromObject: function fromObject(object) {
        v.required(object);

        if (typeof object === "number") return object;

        if (object.getTime) return Math.floor(object.getTime() / 1000);

        if (typeof object !== "string") throw new Error("Unknown date type: " + object);

        if (typeof object === "string" && !/Z$/.test(object)) object = object + "Z";

        return Math.floor(new Date(object).getTime() / 1000);
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) return new Date(0).toISOString().split('.')[0];

        v.required(object);

        if (typeof object === "string") return object;

        if (object.getTime) return object.toISOString().split('.')[0];

        var int = parseInt(object);
        v.require_range(0, 0xFFFFFFFF, int, 'uint32 ' + object);
        return new Date(int * 1000).toISOString().split('.')[0];
    }
};

Types.set = function (st_operation) {
    return {
        validate: function validate(array) {
            var dup_map = {};
            for (var i = 0, o; i < array.length; i++) {
                o = array[i];
                var ref;
                if (ref = typeof o === 'undefined' ? 'undefined' : _typeof(o), ['string', 'number'].indexOf(ref) >= 0) {
                    if (dup_map[o] !== undefined) {
                        throw new Error("duplicate (set)");
                    }
                    dup_map[o] = true;
                }
            }
            return sortOperation(array, st_operation);
        },
        fromByteBuffer: function fromByteBuffer(b) {
            var size = b.readVarint32();
            if (HEX_DUMP) {
                console.log("varint32 size = " + size.toString(16));
            }
            return this.validate(function () {
                var result = [];
                for (var i = 0; 0 < size ? i < size : i > size; 0 < size ? i++ : i++) {
                    result.push(st_operation.fromByteBuffer(b));
                }
                return result;
            }());
        },
        appendByteBuffer: function appendByteBuffer(b, object) {
            if (!object) {
                object = [];
            }
            b.writeVarint32(object.length);
            var iterable = this.validate(object);
            for (var i = 0, o; i < iterable.length; i++) {
                o = iterable[i];
                st_operation.appendByteBuffer(b, o);
            }
            return;
        },
        fromObject: function fromObject(object) {
            if (!object) {
                object = [];
            }
            return this.validate(function () {
                var result = [];
                for (var i = 0, o; i < object.length; i++) {
                    o = object[i];
                    result.push(st_operation.fromObject(o));
                }
                return result;
            }());
        },
        toObject: function toObject(object) {
            var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (debug.use_default && object === undefined) {
                return [st_operation.toObject(object, debug)];
            }
            if (!object) {
                object = [];
            }
            return this.validate(function () {
                var result = [];
                for (var i = 0, o; i < object.length; i++) {
                    o = object[i];
                    result.push(st_operation.toObject(o, debug));
                }
                return result;
            }());
        }
    };
};

// global_parameters_update_operation current_fees
Types.fixed_array = function (count, st_operation) {
    return {
        fromByteBuffer: function fromByteBuffer(b) {
            var i, j, ref, results;
            results = [];
            for (i = j = 0, ref = count; j < ref; i = j += 1) {
                results.push(st_operation.fromByteBuffer(b));
            }
            return sortOperation(results, st_operation);
        },
        appendByteBuffer: function appendByteBuffer(b, object) {
            var i, j, ref;
            if (count !== 0) {
                v.required(object);
                object = sortOperation(object, st_operation);
            }
            for (i = j = 0, ref = count; j < ref; i = j += 1) {
                st_operation.appendByteBuffer(b, object[i]);
            }
        },
        fromObject: function fromObject(object) {
            var i, j, ref, results;
            if (count !== 0) {
                v.required(object);
            }
            results = [];
            for (i = j = 0, ref = count; j < ref; i = j += 1) {
                results.push(st_operation.fromObject(object[i]));
            }
            return results;
        },
        toObject: function toObject(object, debug) {
            var i, j, k, ref, ref1, results, results1;
            if (debug == null) {
                debug = {};
            }
            if (debug.use_default && object === void 0) {
                results = [];
                for (i = j = 0, ref = count; j < ref; i = j += 1) {
                    results.push(st_operation.toObject(void 0, debug));
                }
                return results;
            }
            if (count !== 0) {
                v.required(object);
            }
            results1 = [];
            for (i = k = 0, ref1 = count; k < ref1; i = k += 1) {
                results1.push(st_operation.toObject(object[i], debug));
            }
            return results1;
        }
    };
};

/* Supports instance numbers (11) or object types (1.2.11).  Object type
validation is enforced when an object type is used. */
var id_type = function id_type(reserved_spaces, object_type) {
    v.required(reserved_spaces, "reserved_spaces");
    v.required(object_type, "object_type");
    return {
        fromByteBuffer: function fromByteBuffer(b) {
            return b.readVarint32();
        },
        appendByteBuffer: function appendByteBuffer(b, object) {
            v.required(object);
            if (object.resolve !== undefined) {
                object = object.resolve;
            }
            // convert 1.2.n into just n
            if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(object)) {
                object = v.get_instance(reserved_spaces, object_type, object);
            }
            b.writeVarint32(v.to_number(object));
            return;
        },
        fromObject: function fromObject(object) {
            v.required(object);
            if (object.resolve !== undefined) {
                object = object.resolve;
            }
            if (v.is_digits(object)) {
                return v.to_number(object);
            }
            return v.get_instance(reserved_spaces, object_type, object);
        },
        toObject: function toObject(object) {
            var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var object_type_id = chain_types.object_type[object_type];
            if (debug.use_default && object === undefined) {
                return reserved_spaces + '.' + object_type_id + '.0';
            }
            v.required(object);
            if (object.resolve !== undefined) {
                object = object.resolve;
            }
            if (/^[0-9]+\.[0-9]+\.[0-9]+$/.test(object)) {
                object = v.get_instance(reserved_spaces, object_type, object);
            }

            return reserved_spaces + '.' + object_type_id + '.' + object;
        }
    };
};

Types.protocol_id_type = function (name) {
    v.required(name, "name");
    return id_type(chain_types.reserved_spaces.protocol_ids, name);
};

Types.object_id_type = {
    fromByteBuffer: function fromByteBuffer(b) {
        return ObjectId.fromByteBuffer(b);
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        v.required(object);
        if (object.resolve !== undefined) {
            object = object.resolve;
        }
        object = ObjectId.fromString(object);
        object.appendByteBuffer(b);
        return;
    },
    fromObject: function fromObject(object) {
        v.required(object);
        if (object.resolve !== undefined) {
            object = object.resolve;
        }
        return ObjectId.fromString(object);
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return "0.0.0";
        }
        v.required(object);
        if (object.resolve !== undefined) {
            object = object.resolve;
        }
        object = ObjectId.fromString(object);
        return object.toString();
    }
};

Types.vote_id = { TYPE: 0x000000FF,
    ID: 0xFFFFFF00,
    fromByteBuffer: function fromByteBuffer(b) {
        var value = b.readUint32();
        return {
            type: value & this.TYPE,
            id: value & this.ID
        };
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        v.required(object);
        if (object === "string") object = Types.vote_id.fromObject(object);

        var value = object.id << 8 | object.type;
        b.writeUint32(value);
        return;
    },
    fromObject: function fromObject(object) {
        v.required(object, "(type vote_id)");
        if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === "object") {
            v.required(object.type, "type");
            v.required(object.id, "id");
            return object;
        }
        v.require_test(/^[0-9]+:[0-9]+$/, object, 'vote_id format ' + object);

        var _object$split3 = object.split(':'),
            _object$split4 = _slicedToArray(_object$split3, 2),
            type = _object$split4[0],
            id = _object$split4[1];

        v.require_range(0, 0xff, type, 'vote type ' + object);
        v.require_range(0, 0xffffff, id, 'vote id ' + object);
        return { type: type, id: id };
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return "0:0";
        }
        v.required(object);
        if (typeof object === "string") object = Types.vote_id.fromObject(object);

        return object.type + ":" + object.id;
    },
    compare: function compare(a, b) {
        if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== "object") a = Types.vote_id.fromObject(a);
        if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== "object") b = Types.vote_id.fromObject(b);
        return parseInt(a.id) - parseInt(b.id);
    }
};

Types.optional = function (st_operation) {
    v.required(st_operation, "st_operation");
    return {
        fromByteBuffer: function fromByteBuffer(b) {
            if (!(b.readUint8() === 1)) {
                return undefined;
            }
            return st_operation.fromByteBuffer(b);
        },
        appendByteBuffer: function appendByteBuffer(b, object) {
            if (object !== null && object !== undefined) {
                b.writeUint8(1);
                st_operation.appendByteBuffer(b, object);
            } else {
                b.writeUint8(0);
            }
            return;
        },
        fromObject: function fromObject(object) {
            if (object === undefined) {
                return undefined;
            }
            return st_operation.fromObject(object);
        },
        toObject: function toObject(object) {
            var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            // toObject is only null save if use_default is true
            var result_object = function () {
                if (!debug.use_default && object === undefined) {
                    return undefined;
                } else {
                    return st_operation.toObject(object, debug);
                }
            }();

            if (debug.annotate) {
                if ((typeof result_object === 'undefined' ? 'undefined' : _typeof(result_object)) === "object") {
                    result_object.__optional = "parent is optional";
                } else {
                    result_object = { __optional: result_object };
                }
            }
            return result_object;
        }
    };
};

Types.static_variant = function (_st_operations) {
    return {
        nosort: true,
        st_operations: _st_operations,
        opTypeId: function opTypeId(value) {
            var pos = 0,
                type_id = void 0;
            if (typeof value === "number") type_id = value;else {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.st_operations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var op = _step.value;

                        if (op.operation_name === value) {
                            type_id = pos;
                            break;
                        }
                        pos++;
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
            }
            return type_id;
        },
        fromByteBuffer: function fromByteBuffer(b) {
            var type_id = b.readVarint32();
            var st_operation = this.st_operations[type_id];
            if (HEX_DUMP) {
                console.error('static_variant id 0x' + type_id.toString(16) + ' (' + type_id + ')');
            }
            v.required(st_operation, 'operation ' + type_id);
            return [type_id, st_operation.fromByteBuffer(b)];
        },
        appendByteBuffer: function appendByteBuffer(b, object) {
            v.required(object);
            var type_id = this.opTypeId(object[0]);
            var st_operation = this.st_operations[type_id];
            v.required(st_operation, 'operation ' + type_id);
            b.writeVarint32(type_id);
            st_operation.appendByteBuffer(b, object[1]);
            return;
        },
        fromObject: function fromObject(object) {
            v.required(object);
            var type_id = this.opTypeId(object[0]);
            var st_operation = this.st_operations[type_id];
            v.required(st_operation, 'operation ' + type_id);
            return [type_id, st_operation.fromObject(object[1])];
        },
        toObject: function toObject(object) {
            var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (debug.use_default && object === undefined) {
                return [this.st_operations[0].operation_name, this.st_operations[0].toObject(undefined, debug)];
            }
            v.required(object);
            var type_id = this.opTypeId(object[0]);
            var st_operation = this.st_operations[type_id];
            v.required(st_operation, 'operation ' + type_id);
            return [st_operation.operation_name, st_operation.toObject(object[1], debug)];
        },
        compare: function compare(a, b) {
            return strCmp(this.opTypeId(a[0]), this.opTypeId(b[0]));
        }
    };
};

Types.map = function (key_st_operation, value_st_operation) {
    return {
        validate: function validate(array) {
            if (!Array.isArray(array)) {
                throw new Error("expecting array");
            }
            var dup_map = {};
            for (var i = 0, o; i < array.length; i++) {
                o = array[i];
                var ref;
                if (!(o.length === 2)) {
                    throw new Error("expecting two elements");
                }
                if (ref = _typeof(o[0]), ['number', 'string'].indexOf(ref) >= 0) {
                    if (dup_map[o[0]] !== undefined) {
                        throw new Error("duplicate (map)");
                    }
                    dup_map[o[0]] = true;
                }
            }
            return sortOperation(array, key_st_operation);
        },
        fromByteBuffer: function fromByteBuffer(b) {
            var result = [];
            var end = b.readVarint32();
            for (var i = 0; 0 < end ? i < end : i > end; 0 < end ? i++ : i++) {
                result.push([key_st_operation.fromByteBuffer(b), value_st_operation.fromByteBuffer(b)]);
            }
            return this.validate(result);
        },
        appendByteBuffer: function appendByteBuffer(b, object) {
            this.validate(object);
            b.writeVarint32(object.length);
            for (var i = 0, o; i < object.length; i++) {
                o = object[i];
                key_st_operation.appendByteBuffer(b, o[0]);
                value_st_operation.appendByteBuffer(b, o[1]);
            }
            return;
        },
        fromObject: function fromObject(object) {
            v.required(object);
            var result = [];
            for (var i = 0, o; i < object.length; i++) {
                o = object[i];
                result.push([key_st_operation.fromObject(o[0]), value_st_operation.fromObject(o[1])]);
            }
            return this.validate(result);
        },
        toObject: function toObject(object) {
            var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (debug.use_default && object === undefined) {
                return [[key_st_operation.toObject(undefined, debug), value_st_operation.toObject(undefined, debug)]];
            }
            v.required(object);
            object = this.validate(object);
            var result = [];
            for (var i = 0, o; i < object.length; i++) {
                o = object[i];
                result.push([key_st_operation.toObject(o[0], debug), value_st_operation.toObject(o[1], debug)]);
            }
            return result;
        }
    };
};

Types.public_key = {
    toPublic: function toPublic(object) {
        if (object.resolve !== undefined) {
            object = object.resolve;
        }
        return object == null ? object : object.Q ? object : _ecc.PublicKey.fromStringOrThrow(object);
    },
    fromByteBuffer: function fromByteBuffer(b) {
        return fp.public_key(b);
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        v.required(object);
        fp.public_key(b, Types.public_key.toPublic(object));
        return;
    },
    fromObject: function fromObject(object) {
        v.required(object);
        if (object.Q) {
            return object;
        }
        return Types.public_key.toPublic(object);
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return _ecc.ecc_config.get('address_prefix') + "859gxfnXyUriMgUeThh1fWv3oqcpLFyHa3TfFYC4PK2HqhToVM";
        }
        v.required(object);
        return object.toString();
    },
    compare: function compare(a, b) {
        // sort decending
        return -1 * strCmp(a.toString(), b.toString());
    }
};

Types.address = {
    _to_address: function _to_address(object) {
        v.required(object);
        if (object.addy) {
            return object;
        }
        return _ecc.Address.fromString(object);
    },
    fromByteBuffer: function fromByteBuffer(b) {
        return new _ecc.Address(fp.ripemd160(b));
    },
    appendByteBuffer: function appendByteBuffer(b, object) {
        fp.ripemd160(b, Types.address._to_address(object).toBuffer());
        return;
    },
    fromObject: function fromObject(object) {
        return Types.address._to_address(object);
    },
    toObject: function toObject(object) {
        var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (debug.use_default && object === undefined) {
            return _ecc.ecc_config.get('address_prefix') + "664KmHxSuQyDsfwo4WEJvWpzg1QKdg67S";
        }
        return Types.address._to_address(object).toString();
    },
    compare: function compare(a, b) {
        // sort decending
        return -1 * strCmp(a.toString(), b.toString());
    }
};

var strCmp = function strCmp(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
};
var firstEl = function firstEl(el) {
    return Array.isArray(el) ? el[0] : el;
};
var sortOperation = function sortOperation(array, st_operation) {
    // console.log('operation.nosort', st_operation.nosort)
    return st_operation.nosort ? array : st_operation.compare ? array.sort(function (a, b) {
        return st_operation.compare(firstEl(a), firstEl(b));
    }) : // custom compare operation
    array.sort(function (a, b) {
        return typeof firstEl(a) === "number" && typeof firstEl(b) === "number" ? firstEl(a) - firstEl(b) :
        // A binary string compare does not work. Performanance is very good so HEX is used..  localeCompare is another option.
        Buffer.isBuffer(firstEl(a)) && Buffer.isBuffer(firstEl(b)) ? strCmp(firstEl(a).toString("hex"), firstEl(b).toString("hex")) : strCmp(firstEl(a).toString(), firstEl(b).toString());
    });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(431), __webpack_require__(436).Buffer))

/***/ }),

/***/ 3214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    Address: __webpack_require__(3215),
    Aes: __webpack_require__(3217),
    PrivateKey: __webpack_require__(3219),
    PublicKey: __webpack_require__(3218),
    Signature: __webpack_require__(3220),
    brainKey: __webpack_require__(3224),
    key_utils: __webpack_require__(3225),
    hash: __webpack_require__(3216),
    ecc_config: __webpack_require__(3206)
};

/***/ }),

/***/ 3215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = __webpack_require__(446);
var config = __webpack_require__(3206);
var hash = __webpack_require__(3216);
var base58 = __webpack_require__(455);

/** Addresses are shortened non-reversable hashes of a public key.  The full PublicKey is preferred.
    @deprecated
*/

var Address = function () {
    function Address(addy) {
        _classCallCheck(this, Address);

        this.addy = addy;
    }

    _createClass(Address, [{
        key: 'toBuffer',
        value: function toBuffer() {
            return this.addy;
        }
    }, {
        key: 'toString',
        value: function toString() {
            var address_prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : config.get('address_prefix');

            var checksum = hash.ripemd160(this.addy);
            var addy = Buffer.concat([this.addy, checksum.slice(0, 4)]);
            return address_prefix + base58.encode(addy);
        }
    }], [{
        key: 'fromBuffer',
        value: function fromBuffer(buffer) {
            var _hash = hash.sha512(buffer);
            var addy = hash.ripemd160(_hash);
            return new Address(addy);
        }
    }, {
        key: 'fromString',
        value: function fromString(string) {
            var address_prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.get('address_prefix');

            var prefix = string.slice(0, address_prefix.length);
            assert.equal(address_prefix, prefix, 'Expecting key to begin with ' + address_prefix + ', instead got ' + prefix);
            var addy = string.slice(address_prefix.length);
            addy = new Buffer(base58.decode(addy), 'binary');
            var checksum = addy.slice(-4);
            addy = addy.slice(0, -4);
            var new_checksum = hash.ripemd160(addy);
            new_checksum = new_checksum.slice(0, 4);
            assert.deepEqual(checksum, new_checksum, 'Checksum did not match');
            return new Address(addy);
        }

        /** @return Address - Compressed PTS format (by default) */

    }, {
        key: 'fromPublic',
        value: function fromPublic(public_key) {
            var compressed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 56;

            var sha2 = hash.sha256(public_key.toBuffer(compressed));
            var rep = hash.ripemd160(sha2);
            var versionBuffer = new Buffer(1);
            versionBuffer.writeUInt8(0xFF & version, 0);
            var addr = Buffer.concat([versionBuffer, rep]);
            var check = hash.sha256(addr);
            check = hash.sha256(check);
            var buffer = Buffer.concat([addr, check.slice(0, 4)]);
            return new Address(hash.ripemd160(buffer));
        }
    }]);

    return Address;
}();

module.exports = Address;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createHash = __webpack_require__(458);

var _createHash2 = _interopRequireDefault(_createHash);

var _createHmac = __webpack_require__(495);

var _createHmac2 = _interopRequireDefault(_createHmac);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha1(data, encoding) {
    return (0, _createHash2.default)('sha1').update(data).digest(encoding);
}

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha256(data, encoding) {
    return (0, _createHash2.default)('sha256').update(data).digest(encoding);
}

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha512(data, encoding) {
    return (0, _createHash2.default)('sha512').update(data).digest(encoding);
}

function HmacSHA256(buffer, secret) {
    return (0, _createHmac2.default)('sha256', secret).update(buffer).digest();
}

function ripemd160(data) {
    return (0, _createHash2.default)('rmd160').update(data).digest();
}

// function hash160(buffer) {
//   return ripemd160(sha256(buffer))
// }
// 
// function hash256(buffer) {
//   return sha256(sha256(buffer))
// }

// 
// function HmacSHA512(buffer, secret) {
//   return crypto.createHmac('sha512', secret).update(buffer).digest()
// }

module.exports = {
    sha1: sha1,
    sha256: sha256,
    sha512: sha512,
    HmacSHA256: HmacSHA256,
    ripemd160: ripemd160
    // hash160: hash160,
    // hash256: hash256,
    // HmacSHA512: HmacSHA512
};

/***/ }),

/***/ 3217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encrypt = encrypt;
exports.decrypt = decrypt;

var _secureRandom = __webpack_require__(531);

var _secureRandom2 = _interopRequireDefault(_secureRandom);

var _bytebuffer = __webpack_require__(432);

var _bytebuffer2 = _interopRequireDefault(_bytebuffer);

var _browserifyAes = __webpack_require__(3053);

var _browserifyAes2 = _interopRequireDefault(_browserifyAes);

var _assert = __webpack_require__(446);

var _assert2 = _interopRequireDefault(_assert);

var _key_public = __webpack_require__(3218);

var _key_public2 = _interopRequireDefault(_key_public);

var _key_private = __webpack_require__(3219);

var _key_private2 = _interopRequireDefault(_key_private);

var _hash = __webpack_require__(3216);

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Long = _bytebuffer2.default.Long;

/**
    Spec: http://localhost:3002/steem/@dantheman/how-to-encrypt-a-memo-when-transferring-steem
    @throws {Error|TypeError} - "Invalid Key, ..."
    @arg {PrivateKey} private_key - required and used for decryption
    @arg {PublicKey} public_key - required and used to calcualte the shared secret
    @arg {string} [nonce = uniqueNonce()] - assigned a random unique uint64

    @return {object}
    @property {string} nonce - random or unique uint64, provides entropy when re-using the same private/public keys.
    @property {Buffer} message - Plain text message
    @property {number} checksum - shared secret checksum
*/
function encrypt(private_key, public_key, message) {
    var nonce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : uniqueNonce();

    return crypt(private_key, public_key, nonce, message);
}

/**
    Spec: http://localhost:3002/steem/@dantheman/how-to-encrypt-a-memo-when-transferring-steem
    @arg {PrivateKey} private_key - required and used for decryption
    @arg {PublicKey} public_key - required and used to calcualte the shared secret
    @arg {string} nonce - random or unique uint64, provides entropy when re-using the same private/public keys.
    @arg {Buffer} message - Encrypted or plain text message
    @arg {number} checksum - shared secret checksum
    @throws {Error|TypeError} - "Invalid Key, ..."
    @return {Buffer} - message
*/
function decrypt(private_key, public_key, nonce, message, checksum) {
    return crypt(private_key, public_key, nonce, message, checksum).message;
}

/**
    @arg {Buffer} message - Encrypted or plain text message (see checksum)
    @arg {number} checksum - shared secret checksum (null to encrypt, non-null to decrypt)
*/
function crypt(private_key, public_key, nonce, message, checksum) {
    private_key = toPrivateObj(private_key);
    if (!private_key) throw new TypeError('private_key is required');

    public_key = toPublicObj(public_key);
    if (!public_key) throw new TypeError('public_key is required');

    nonce = toLongObj(nonce);
    if (!nonce) throw new TypeError('nonce is required');

    if (!Buffer.isBuffer(message)) {
        if (typeof message !== 'string') throw new TypeError('message should be buffer or string');
        message = new Buffer(message, 'binary');
    }
    if (checksum && typeof checksum !== 'number') throw new TypeError('checksum should be a number');

    var S = private_key.get_shared_secret(public_key);
    var ebuf = new _bytebuffer2.default(_bytebuffer2.default.DEFAULT_CAPACITY, _bytebuffer2.default.LITTLE_ENDIAN);
    ebuf.writeUint64(nonce);
    ebuf.append(S.toString('binary'), 'binary');
    ebuf = new Buffer(ebuf.copy(0, ebuf.offset).toBinary(), 'binary');
    var encryption_key = _hash2.default.sha512(ebuf);

    // D E B U G
    // console.log('crypt', {
    //     priv_to_pub: private_key.toPublicKey().toString(),
    //     pub: public_key.toString(),
    //     nonce: nonce.toString(),
    //     message: message.length,
    //     checksum,
    //     S: S.toString('hex'),
    //     encryption_key: encryption_key.toString('hex'),
    // })

    var iv = encryption_key.slice(32, 48);
    var key = encryption_key.slice(0, 32);

    // check is first 64 bit of sha256 hash treated as uint64_t truncated to 32 bits.
    var check = _hash2.default.sha256(encryption_key);
    check = check.slice(0, 4);
    var cbuf = _bytebuffer2.default.fromBinary(check.toString('binary'), _bytebuffer2.default.DEFAULT_CAPACITY, _bytebuffer2.default.LITTLE_ENDIAN);
    check = cbuf.readUint32();

    if (checksum) {
        if (check !== checksum) throw new Error('Invalid key');
        message = cryptoJsDecrypt(message, key, iv);
    } else {
        message = cryptoJsEncrypt(message, key, iv);
    }
    return { nonce: nonce, message: message, checksum: check };
}

/** This method does not use a checksum, the returned data must be validated some other way.
    @arg {string|Buffer} ciphertext - binary format
    @return {Buffer}
*/
function cryptoJsDecrypt(message, key, iv) {
    (0, _assert2.default)(message, "Missing cipher text");
    message = toBinaryBuffer(message);
    var decipher = _browserifyAes2.default.createDecipheriv('aes-256-cbc', key, iv);
    // decipher.setAutoPadding(true)
    message = Buffer.concat([decipher.update(message), decipher.final()]);
    return message;
}

/** This method does not use a checksum, the returned data must be validated some other way.
    @arg {string|Buffer} plaintext - binary format
    @return {Buffer} binary
*/
function cryptoJsEncrypt(message, key, iv) {
    (0, _assert2.default)(message, "Missing plain text");
    message = toBinaryBuffer(message);
    var cipher = _browserifyAes2.default.createCipheriv('aes-256-cbc', key, iv);
    // cipher.setAutoPadding(true)
    message = Buffer.concat([cipher.update(message), cipher.final()]);
    return message;
}

/** @return {string} unique 64 bit unsigned number string.  Being time based, this is careful to never choose the same nonce twice.  This value could be recorded in the blockchain for a long time.
*/
function uniqueNonce() {
    if (unique_nonce_entropy === null) {
        var b = _secureRandom2.default.randomUint8Array(2);
        unique_nonce_entropy = parseInt(b[0] << 8 | b[1], 10);
    }
    var long = Long.fromNumber(Date.now());
    var entropy = ++unique_nonce_entropy % 0xFFFF;
    // console.log('uniqueNonce date\t', ByteBuffer.allocate(8).writeUint64(long).toHex(0))
    // console.log('uniqueNonce entropy\t', ByteBuffer.allocate(8).writeUint64(Long.fromNumber(entropy)).toHex(0))
    long = long.shiftLeft(16).or(Long.fromNumber(entropy));
    // console.log('uniqueNonce final\t', ByteBuffer.allocate(8).writeUint64(long).toHex(0))
    return long.toString();
}
var unique_nonce_entropy = null;
// for(let i=1; i < 10; i++) key.uniqueNonce()

var toPrivateObj = function toPrivateObj(o) {
    return o ? o.d ? o : _key_private2.default.fromWif(o) : o /*null or undefined*/;
};
var toPublicObj = function toPublicObj(o) {
    return o ? o.Q ? o : _key_public2.default.fromString(o) : o /*null or undefined*/;
};
var toLongObj = function toLongObj(o) {
    return o ? Long.isLong(o) ? o : Long.fromString(o) : o;
};
var toBinaryBuffer = function toBinaryBuffer(o) {
    return o ? Buffer.isBuffer(o) ? o : new Buffer(o, 'binary') : o;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BigInteger = __webpack_require__(442);
var ecurve = __webpack_require__(450);
var secp256k1 = ecurve.getCurveByName('secp256k1');
BigInteger = __webpack_require__(442);
var base58 = __webpack_require__(455);
var hash = __webpack_require__(3216);
var config = __webpack_require__(3206);
var assert = __webpack_require__(446);

var G = secp256k1.G;
var n = secp256k1.n;

var PublicKey = function () {

    /** @param {ecurve.Point} public key */
    function PublicKey(Q) {
        _classCallCheck(this, PublicKey);

        this.Q = Q;
    }

    _createClass(PublicKey, [{
        key: 'toBuffer',
        value: function toBuffer() {
            var compressed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.Q ? this.Q.compressed : null;

            if (this.Q === null) return Buffer.from("000000000000000000000000000000000000000000000000000000000000000000", "hex");
            return this.Q.getEncoded(compressed);
        }
    }, {
        key: 'toUncompressed',
        value: function toUncompressed() {
            var buf = this.Q.getEncoded(false);
            var point = ecurve.Point.decodeFrom(secp256k1, buf);
            return PublicKey.fromPoint(point);
        }

        /** bts::blockchain::address (unique but not a full public key) */

    }, {
        key: 'toBlockchainAddress',
        value: function toBlockchainAddress() {
            var pub_buf = this.toBuffer();
            var pub_sha = hash.sha512(pub_buf);
            return hash.ripemd160(pub_sha);
        }
    }, {
        key: 'toString',
        value: function toString() {
            var address_prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : config.get('address_prefix');

            return this.toPublicKeyString(address_prefix);
        }

        /**
            Full public key
            {return} string
        */

    }, {
        key: 'toPublicKeyString',
        value: function toPublicKeyString() {
            var address_prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : config.get('address_prefix');

            if (this.pubdata) return address_prefix + this.pubdata;
            var pub_buf = this.toBuffer();
            var checksum = hash.ripemd160(pub_buf);
            var addy = Buffer.concat([pub_buf, checksum.slice(0, 4)]);
            this.pubdata = base58.encode(addy);
            return address_prefix + this.pubdata;
        }

        /**
            @arg {string} public_key - like GLSXyz...
            @arg {string} address_prefix - like GLS
            @return PublicKey or `null` (if the public_key string is invalid)
            @deprecated fromPublicKeyString (use fromString instead)
        */

    }, {
        key: 'toAddressString',
        value: function toAddressString() {
            var address_prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : config.get('address_prefix');

            var pub_buf = this.toBuffer();
            var pub_sha = hash.sha512(pub_buf);
            var addy = hash.ripemd160(pub_sha);
            var checksum = hash.ripemd160(addy);
            addy = Buffer.concat([addy, checksum.slice(0, 4)]);
            return address_prefix + base58.encode(addy);
        }
    }, {
        key: 'toPtsAddy',
        value: function toPtsAddy() {
            var pub_buf = this.toBuffer();
            var pub_sha = hash.sha256(pub_buf);
            var addy = hash.ripemd160(pub_sha);
            addy = Buffer.concat([new Buffer([0x38]), addy]); //version 56(decimal)

            var checksum = hash.sha256(addy);
            checksum = hash.sha256(checksum);

            addy = Buffer.concat([addy, checksum.slice(0, 4)]);
            return base58.encode(addy);
        }
    }, {
        key: 'child',
        value: function child(offset) {

            assert(Buffer.isBuffer(offset), "Buffer required: offset");
            assert.equal(offset.length, 32, "offset length");

            offset = Buffer.concat([this.toBuffer(), offset]);
            offset = hash.sha256(offset);

            var c = BigInteger.fromBuffer(offset);

            if (c.compareTo(n) >= 0) throw new Error("Child offset went out of bounds, try again");

            var cG = G.multiply(c);
            var Qprime = this.Q.add(cG);

            if (secp256k1.isInfinity(Qprime)) throw new Error("Child offset derived to an invalid key, try again");

            return PublicKey.fromPoint(Qprime);
        }

        // toByteBuffer() {
        //     var b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
        //     this.appendByteBuffer(b);
        //     return b.copy(0, b.offset);
        // }

    }, {
        key: 'toHex',
        value: function toHex() {
            return this.toBuffer().toString('hex');
        }
    }], [{
        key: 'fromBinary',
        value: function fromBinary(bin) {
            return PublicKey.fromBuffer(new Buffer(bin, 'binary'));
        }
    }, {
        key: 'fromBuffer',
        value: function fromBuffer(buffer) {
            if (buffer.toString("hex") === "000000000000000000000000000000000000000000000000000000000000000000") return new PublicKey(null);
            return new PublicKey(ecurve.Point.decodeFrom(secp256k1, buffer));
        }
    }, {
        key: 'fromPoint',
        value: function fromPoint(point) {
            return new PublicKey(point);
        }
    }, {
        key: 'fromString',
        value: function fromString(public_key) {
            var address_prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.get('address_prefix');

            try {
                return PublicKey.fromStringOrThrow(public_key, address_prefix);
            } catch (e) {
                return null;
            }
        }

        /**
            @arg {string} public_key - like GLSXyz...
            @arg {string} address_prefix - like GLS
            @throws {Error} if public key is invalid
            @return PublicKey
        */

    }, {
        key: 'fromStringOrThrow',
        value: function fromStringOrThrow(public_key) {
            var address_prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : config.get('address_prefix');

            var prefix = public_key.slice(0, address_prefix.length);
            assert.equal(address_prefix, prefix, 'Expecting key to begin with ' + address_prefix + ', instead got ' + prefix);
            public_key = public_key.slice(address_prefix.length);

            public_key = new Buffer(base58.decode(public_key), 'binary');
            var checksum = public_key.slice(-4);
            public_key = public_key.slice(0, -4);
            var new_checksum = hash.ripemd160(public_key);
            new_checksum = new_checksum.slice(0, 4);
            assert.deepEqual(checksum, new_checksum, 'Checksum did not match');
            return PublicKey.fromBuffer(public_key);
        }
    }, {
        key: 'fromHex',
        value: function fromHex(hex) {
            return PublicKey.fromBuffer(new Buffer(hex, 'hex'));
        }
    }, {
        key: 'fromStringHex',
        value: function fromStringHex(hex) {
            return PublicKey.fromString(new Buffer(hex, 'hex'));
        }

        /* </HEX> */

    }]);

    return PublicKey;
}();

module.exports = PublicKey;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ecurve = __webpack_require__(450);
var Point = ecurve.Point;
var secp256k1 = ecurve.getCurveByName('secp256k1');
var BigInteger = __webpack_require__(442);
var base58 = __webpack_require__(455);
var assert = __webpack_require__(446);
var hash = __webpack_require__(3216);
var PublicKey = __webpack_require__(3218);

var G = secp256k1.G;
var n = secp256k1.n;

var PrivateKey = function () {

    /**
        @private see static functions
        @param {BigInteger}
    */
    function PrivateKey(d) {
        _classCallCheck(this, PrivateKey);

        this.d = d;
    }

    _createClass(PrivateKey, [{
        key: 'toWif',
        value: function toWif() {
            var private_key = this.toBuffer();
            // checksum includes the version
            private_key = Buffer.concat([new Buffer([0x80]), private_key]);
            var checksum = hash.sha256(private_key);
            checksum = hash.sha256(checksum);
            checksum = checksum.slice(0, 4);
            var private_wif = Buffer.concat([private_key, checksum]);
            return base58.encode(private_wif);
        }

        /** Alias for {@link toWif} */

    }, {
        key: 'toString',
        value: function toString() {
            return this.toWif();
        }

        /**
            @return {Point}
        */

    }, {
        key: 'toPublicKeyPoint',
        value: function toPublicKeyPoint() {
            var Q;
            return Q = secp256k1.G.multiply(this.d);
        }
    }, {
        key: 'toPublic',
        value: function toPublic() {
            if (this.public_key) {
                return this.public_key;
            }
            return this.public_key = PublicKey.fromPoint(this.toPublicKeyPoint());
        }
    }, {
        key: 'toBuffer',
        value: function toBuffer() {
            return this.d.toBuffer(32);
        }

        /** ECIES */

    }, {
        key: 'get_shared_secret',
        value: function get_shared_secret(public_key) {
            public_key = toPublic(public_key);
            var KB = public_key.toUncompressed().toBuffer();
            var KBP = Point.fromAffine(secp256k1, BigInteger.fromBuffer(KB.slice(1, 33)), // x
            BigInteger.fromBuffer(KB.slice(33, 65)) // y
            );
            var r = this.toBuffer();
            var P = KBP.multiply(BigInteger.fromBuffer(r));
            var S = P.affineX.toBuffer({ size: 32 });
            // SHA512 used in ECIES
            return hash.sha512(S);
        }

        // /** ECIES (does not always match the Point.fromAffine version above) */
        // get_shared_secret(public_key){
        //     public_key = toPublic(public_key)
        //     var P = public_key.Q.multiply( this.d );
        //     var S = P.affineX.toBuffer({size: 32});
        //     // ECIES, adds an extra sha512
        //     return hash.sha512(S);
        // }

        /** @throws {Error} - overflow of the key could not be derived */

    }, {
        key: 'child',
        value: function child(offset) {
            offset = Buffer.concat([this.toPublicKey().toBuffer(), offset]);
            offset = hash.sha256(offset);
            var c = BigInteger.fromBuffer(offset);

            if (c.compareTo(n) >= 0) throw new Error("Child offset went out of bounds, try again");

            var derived = this.d.add(c); //.mod(n)

            if (derived.signum() === 0) throw new Error("Child offset derived to an invalid key, try again");

            return new PrivateKey(derived);
        }

        // toByteBuffer() {
        //     var b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
        //     this.appendByteBuffer(b);
        //     return b.copy(0, b.offset);
        // }

    }, {
        key: 'toHex',
        value: function toHex() {
            return this.toBuffer().toString('hex');
        }
    }, {
        key: 'toPublicKey',
        value: function toPublicKey() {
            return this.toPublic();
        }

        /* </helper_functions> */

    }], [{
        key: 'fromBuffer',
        value: function fromBuffer(buf) {
            if (!Buffer.isBuffer(buf)) {
                throw new Error("Expecting paramter to be a Buffer type");
            }
            if (32 !== buf.length) {
                console.log('WARN: Expecting 32 bytes, instead got ' + buf.length + ', stack trace:', new Error().stack);
            }
            if (buf.length === 0) {
                throw new Error("Empty buffer");
            }
            return new PrivateKey(BigInteger.fromBuffer(buf));
        }

        /** @arg {string} seed - any length string.  This is private, the same seed produces the same private key every time.  */

    }, {
        key: 'fromSeed',
        value: function fromSeed(seed) {
            // generate_private_key
            if (!(typeof seed === 'string')) {
                throw new Error('seed must be of type string');
            }
            return PrivateKey.fromBuffer(hash.sha256(seed));
        }
    }, {
        key: 'isWif',
        value: function isWif(text) {
            try {
                this.fromWif(text);
                return true;
            } catch (e) {
                return false;
            }
        }

        /**
            @throws {AssertError|Error} parsing key
            @return {string} Wallet Import Format (still a secret, Not encrypted)
        */

    }, {
        key: 'fromWif',
        value: function fromWif(_private_wif) {
            var private_wif = new Buffer(base58.decode(_private_wif));
            var version = private_wif.readUInt8(0);
            assert.equal(0x80, version, 'Expected version ' + 0x80 + ', instead got ' + version);
            // checksum includes the version
            var private_key = private_wif.slice(0, -4);
            var checksum = private_wif.slice(-4);
            var new_checksum = hash.sha256(private_key);
            new_checksum = hash.sha256(new_checksum);
            new_checksum = new_checksum.slice(0, 4);
            if (checksum.toString() !== new_checksum.toString()) throw new Error('Invalid WIF key (checksum miss-match)');

            private_key = private_key.slice(1);
            return PrivateKey.fromBuffer(private_key);
        }
    }, {
        key: 'fromHex',
        value: function fromHex(hex) {
            return PrivateKey.fromBuffer(new Buffer(hex, 'hex'));
        }
    }]);

    return PrivateKey;
}();

module.exports = PrivateKey;

var toPublic = function toPublic(data) {
    return data == null ? data : data.Q ? data : PublicKey.fromStringOrThrow(data);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ecdsa = __webpack_require__(3221);
var hash = __webpack_require__(3216);
var curve = __webpack_require__(450).getCurveByName('secp256k1');
var assert = __webpack_require__(446);
var BigInteger = __webpack_require__(442);
var PublicKey = __webpack_require__(3218);
var PrivateKey = __webpack_require__(3219);

var Signature = function () {
    function Signature(r1, s1, i1) {
        _classCallCheck(this, Signature);

        this.r = r1;
        this.s = s1;
        this.i = i1;
        assert.equal(this.r != null, true, 'Missing parameter');
        assert.equal(this.s != null, true, 'Missing parameter');
        assert.equal(this.i != null, true, 'Missing parameter');
    }

    _createClass(Signature, [{
        key: 'toBuffer',
        value: function toBuffer() {
            var buf;
            buf = new Buffer(65);
            buf.writeUInt8(this.i, 0);
            this.r.toBuffer(32).copy(buf, 1);
            this.s.toBuffer(32).copy(buf, 33);
            return buf;
        }
    }, {
        key: 'recoverPublicKeyFromBuffer',
        value: function recoverPublicKeyFromBuffer(buffer) {
            return this.recoverPublicKey(hash.sha256(buffer));
        }
    }, {
        key: 'recoverPublicKey',


        /**
            @return {PublicKey}
        */
        value: function recoverPublicKey(sha256_buffer) {
            var Q = void 0,
                e = void 0,
                i = void 0;
            e = BigInteger.fromBuffer(sha256_buffer);
            i = this.i;
            i -= 27;
            i = i & 3;
            Q = ecdsa.recoverPubKey(curve, e, this, i);
            return PublicKey.fromPoint(Q);
        }
    }, {
        key: 'verifyBuffer',


        /**
            @param {Buffer} un-hashed
            @param {./PublicKey}
            @return {boolean}
        */
        value: function verifyBuffer(buf, public_key) {
            var _hash = hash.sha256(buf);
            return this.verifyHash(_hash, public_key);
        }
    }, {
        key: 'verifyHash',
        value: function verifyHash(hash, public_key) {
            assert.equal(hash.length, 32, "A SHA 256 should be 32 bytes long, instead got " + hash.length);
            return ecdsa.verify(curve, hash, {
                r: this.r,
                s: this.s
            }, public_key.Q);
        }
    }, {
        key: 'toHex',
        value: function toHex() {
            return this.toBuffer().toString("hex");
        }
    }, {
        key: 'verifyHex',
        value: function verifyHex(hex, public_key) {
            var buf;
            buf = new Buffer(hex, 'hex');
            return this.verifyBuffer(buf, public_key);
        }
    }], [{
        key: 'fromBuffer',
        value: function fromBuffer(buf) {
            var i, r, s;
            assert.equal(buf.length, 65, 'Invalid signature length');
            i = buf.readUInt8(0);
            assert.equal(i - 27, i - 27 & 7, 'Invalid signature parameter');
            r = BigInteger.fromBuffer(buf.slice(1, 33));
            s = BigInteger.fromBuffer(buf.slice(33));
            return new Signature(r, s, i);
        }
    }, {
        key: 'signBuffer',


        /**
            @param {Buffer} buf
            @param {PrivateKey} private_key
            @return {Signature}
        */
        value: function signBuffer(buf, private_key) {
            var _hash = hash.sha256(buf);
            return Signature.signBufferSha256(_hash, private_key);
        }

        /** Sign a buffer of exactally 32 bytes in size (sha256(text))
            @param {Buffer} buf - 32 bytes binary
            @param {PrivateKey} private_key
            @return {Signature}
        */

    }, {
        key: 'signBufferSha256',
        value: function signBufferSha256(buf_sha256, private_key) {
            if (buf_sha256.length !== 32 || !Buffer.isBuffer(buf_sha256)) throw new Error("buf_sha256: 32 byte buffer requred");
            private_key = toPrivateObj(private_key);
            assert(private_key, 'private_key required');

            var der, e, ecsignature, i, lenR, lenS, nonce;
            i = null;
            nonce = 0;
            e = BigInteger.fromBuffer(buf_sha256);
            while (true) {
                ecsignature = ecdsa.sign(curve, buf_sha256, private_key.d, nonce++);
                der = ecsignature.toDER();
                lenR = der[3];
                lenS = der[5 + lenR];
                if (lenR === 32 && lenS === 32) {
                    i = ecdsa.calcPubKeyRecoveryParam(curve, e, ecsignature, private_key.toPublicKey().Q);
                    i += 4; // compressed
                    i += 27; // compact  //  24 or 27 :( forcing odd-y 2nd key candidate)
                    break;
                }
                if (nonce % 10 === 0) {
                    console.log("WARN: " + nonce + " attempts to find canonical signature");
                }
            }
            return new Signature(ecsignature.r, ecsignature.s, i);
        }
    }, {
        key: 'sign',
        value: function sign(string, private_key) {
            return Signature.signBuffer(new Buffer(string), private_key);
        }
    }, {
        key: 'fromHex',


        // toByteBuffer() {
        //     var b;
        //     b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
        //     this.appendByteBuffer(b);
        //     return b.copy(0, b.offset);
        // };

        value: function fromHex(hex) {
            return Signature.fromBuffer(new Buffer(hex, "hex"));
        }
    }, {
        key: 'signHex',
        value: function signHex(hex, private_key) {
            var buf;
            buf = new Buffer(hex, 'hex');
            return Signature.signBuffer(buf, private_key);
        }
    }]);

    return Signature;
}();

var toPrivateObj = function toPrivateObj(o) {
    return o ? o.d ? o : PrivateKey.fromWif(o) : o /*null or undefined*/;
};
module.exports = Signature;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var assert = __webpack_require__(446); // from github.com/bitcoinjs/bitcoinjs-lib from github.com/cryptocoinjs/ecdsa
var crypto = __webpack_require__(3216);
var enforceType = __webpack_require__(3222);

var BigInteger = __webpack_require__(442);
var ECSignature = __webpack_require__(3223);

// https://tools.ietf.org/html/rfc6979#section-3.2
function deterministicGenerateK(curve, hash, d, checkSig, nonce) {

  enforceType('Buffer', hash);
  enforceType(BigInteger, d);

  if (nonce) {
    hash = crypto.sha256(Buffer.concat([hash, new Buffer(nonce)]));
  }

  // sanity check
  assert.equal(hash.length, 32, 'Hash must be 256 bit');

  var x = d.toBuffer(32);
  var k = new Buffer(32);
  var v = new Buffer(32);

  // Step B
  v.fill(1);

  // Step C
  k.fill(0);

  // Step D
  k = crypto.HmacSHA256(Buffer.concat([v, new Buffer([0]), x, hash]), k);

  // Step E
  v = crypto.HmacSHA256(v, k);

  // Step F
  k = crypto.HmacSHA256(Buffer.concat([v, new Buffer([1]), x, hash]), k);

  // Step G
  v = crypto.HmacSHA256(v, k);

  // Step H1/H2a, ignored as tlen === qlen (256 bit)
  // Step H2b
  v = crypto.HmacSHA256(v, k);

  var T = BigInteger.fromBuffer(v);

  // Step H3, repeat until T is within the interval [1, n - 1]
  while (T.signum() <= 0 || T.compareTo(curve.n) >= 0 || !checkSig(T)) {
    k = crypto.HmacSHA256(Buffer.concat([v, new Buffer([0])]), k);
    v = crypto.HmacSHA256(v, k);

    // Step H1/H2a, again, ignored as tlen === qlen (256 bit)
    // Step H2b again
    v = crypto.HmacSHA256(v, k);

    T = BigInteger.fromBuffer(v);
  }

  return T;
}

function sign(curve, hash, d, nonce) {

  var e = BigInteger.fromBuffer(hash);
  var n = curve.n;
  var G = curve.G;

  var r, s;
  var k = deterministicGenerateK(curve, hash, d, function (k) {
    // find canonically valid signature
    var Q = G.multiply(k);

    if (curve.isInfinity(Q)) return false;

    r = Q.affineX.mod(n);
    if (r.signum() === 0) return false;

    s = k.modInverse(n).multiply(e.add(d.multiply(r))).mod(n);
    if (s.signum() === 0) return false;

    return true;
  }, nonce);

  var N_OVER_TWO = n.shiftRight(1);

  // enforce low S values, see bip62: 'low s values in signatures'
  if (s.compareTo(N_OVER_TWO) > 0) {
    s = n.subtract(s);
  }

  return new ECSignature(r, s);
}

function verifyRaw(curve, e, signature, Q) {
  var n = curve.n;
  var G = curve.G;

  var r = signature.r;
  var s = signature.s;

  // 1.4.1 Enforce r and s are both integers in the interval [1, n − 1]
  if (r.signum() <= 0 || r.compareTo(n) >= 0) return false;
  if (s.signum() <= 0 || s.compareTo(n) >= 0) return false;

  // c = s^-1 mod n
  var c = s.modInverse(n);

  // 1.4.4 Compute u1 = es^−1 mod n
  //               u2 = rs^−1 mod n
  var u1 = e.multiply(c).mod(n);
  var u2 = r.multiply(c).mod(n);

  // 1.4.5 Compute R = (xR, yR) = u1G + u2Q
  var R = G.multiplyTwo(u1, Q, u2);

  // 1.4.5 (cont.) Enforce R is not at infinity
  if (curve.isInfinity(R)) return false;

  // 1.4.6 Convert the field element R.x to an integer
  var xR = R.affineX;

  // 1.4.7 Set v = xR mod n
  var v = xR.mod(n);

  // 1.4.8 If v = r, output "valid", and if v != r, output "invalid"
  return v.equals(r);
}

function verify(curve, hash, signature, Q) {
  // 1.4.2 H = Hash(M), already done by the user
  // 1.4.3 e = H
  var e = BigInteger.fromBuffer(hash);
  return verifyRaw(curve, e, signature, Q);
}

/**
  * Recover a public key from a signature.
  *
  * See SEC 1: Elliptic Curve Cryptography, section 4.1.6, "Public
  * Key Recovery Operation".
  *
  * http://www.secg.org/download/aid-780/sec1-v2.pdf
  */
function recoverPubKey(curve, e, signature, i) {
  assert.strictEqual(i & 3, i, 'Recovery param is more than two bits');

  var n = curve.n;
  var G = curve.G;

  var r = signature.r;
  var s = signature.s;

  assert(r.signum() > 0 && r.compareTo(n) < 0, 'Invalid r value');
  assert(s.signum() > 0 && s.compareTo(n) < 0, 'Invalid s value');

  // A set LSB signifies that the y-coordinate is odd
  var isYOdd = i & 1;

  // The more significant bit specifies whether we should use the
  // first or second candidate key.
  var isSecondKey = i >> 1;

  // 1.1 Let x = r + jn
  var x = isSecondKey ? r.add(n) : r;
  var R = curve.pointFromX(isYOdd, x);

  // 1.4 Check that nR is at infinity
  var nR = R.multiply(n);
  assert(curve.isInfinity(nR), 'nR is not a valid curve point');

  // Compute -e from e
  var eNeg = e.negate().mod(n);

  // 1.6.1 Compute Q = r^-1 (sR -  eG)
  //               Q = r^-1 (sR + -eG)
  var rInv = r.modInverse(n);

  var Q = R.multiplyTwo(s, G, eNeg).multiply(rInv);
  curve.validate(Q);

  return Q;
}

/**
  * Calculate pubkey extraction parameter.
  *
  * When extracting a pubkey from a signature, we have to
  * distinguish four different cases. Rather than putting this
  * burden on the verifier, Bitcoin includes a 2-bit value with the
  * signature.
  *
  * This function simply tries all four cases and returns the value
  * that resulted in a successful pubkey recovery.
  */
function calcPubKeyRecoveryParam(curve, e, signature, Q) {
  for (var i = 0; i < 4; i++) {
    var Qprime = recoverPubKey(curve, e, signature, i);

    // 1.6.2 Verify Q
    if (Qprime.equals(Q)) {
      return i;
    }
  }

  throw new Error('Unable to find valid recovery factor');
}

module.exports = {
  calcPubKeyRecoveryParam: calcPubKeyRecoveryParam,
  deterministicGenerateK: deterministicGenerateK,
  recoverPubKey: recoverPubKey,
  sign: sign,
  verify: verify,
  verifyRaw: verifyRaw
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

module.exports = function enforce(type, value) {
  // Copied from https://github.com/bitcoinjs/bitcoinjs-lib
  switch (type) {
    case 'Array':
      {
        if (Array.isArray(value)) return;
        break;
      }

    case 'Boolean':
      {
        if (typeof value === 'boolean') return;
        break;
      }

    case 'Buffer':
      {
        if (Buffer.isBuffer(value)) return;
        break;
      }

    case 'Number':
      {
        if (typeof value === 'number') return;
        break;
      }

    case 'String':
      {
        if (typeof value === 'string') return;
        break;
      }

    default:
      {
        if (getName(value.constructor) === getName(type)) return;
      }
  }

  throw new TypeError('Expected ' + (getName(type) || type) + ', got ' + value);
};

function getName(fn) {
  // Why not fn.name: https://kangax.github.io/compat-table/es6/#function_name_property
  var match = fn.toString().match(/function (.*?)\(/);
  return match ? match[1] : null;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var assert = __webpack_require__(446); // from https://github.com/bitcoinjs/bitcoinjs-lib
var enforceType = __webpack_require__(3222);

var BigInteger = __webpack_require__(442);

function ECSignature(r, s) {
  enforceType(BigInteger, r);
  enforceType(BigInteger, s);

  this.r = r;
  this.s = s;
}

// Import operations
ECSignature.parseCompact = function (buffer) {
  assert.equal(buffer.length, 65, 'Invalid signature length');
  var i = buffer.readUInt8(0) - 27;

  // At most 3 bits
  assert.equal(i, i & 7, 'Invalid signature parameter');
  var compressed = !!(i & 4);

  // Recovery param only
  i = i & 3;

  var r = BigInteger.fromBuffer(buffer.slice(1, 33));
  var s = BigInteger.fromBuffer(buffer.slice(33));

  return {
    compressed: compressed,
    i: i,
    signature: new ECSignature(r, s)
  };
};

ECSignature.fromDER = function (buffer) {
  assert.equal(buffer.readUInt8(0), 0x30, 'Not a DER sequence');
  assert.equal(buffer.readUInt8(1), buffer.length - 2, 'Invalid sequence length');
  assert.equal(buffer.readUInt8(2), 0x02, 'Expected a DER integer');

  var rLen = buffer.readUInt8(3);
  assert(rLen > 0, 'R length is zero');

  var offset = 4 + rLen;
  assert.equal(buffer.readUInt8(offset), 0x02, 'Expected a DER integer (2)');

  var sLen = buffer.readUInt8(offset + 1);
  assert(sLen > 0, 'S length is zero');

  var rB = buffer.slice(4, offset);
  var sB = buffer.slice(offset + 2);
  offset += 2 + sLen;

  if (rLen > 1 && rB.readUInt8(0) === 0x00) {
    assert(rB.readUInt8(1) & 0x80, 'R value excessively padded');
  }

  if (sLen > 1 && sB.readUInt8(0) === 0x00) {
    assert(sB.readUInt8(1) & 0x80, 'S value excessively padded');
  }

  assert.equal(offset, buffer.length, 'Invalid DER encoding');
  var r = BigInteger.fromDERInteger(rB);
  var s = BigInteger.fromDERInteger(sB);

  assert(r.signum() >= 0, 'R value is negative');
  assert(s.signum() >= 0, 'S value is negative');

  return new ECSignature(r, s);
};

// FIXME: 0x00, 0x04, 0x80 are SIGHASH_* boundary constants, importing Transaction causes a circular dependency
ECSignature.parseScriptSignature = function (buffer) {
  var hashType = buffer.readUInt8(buffer.length - 1);
  var hashTypeMod = hashType & ~0x80;

  assert(hashTypeMod > 0x00 && hashTypeMod < 0x04, 'Invalid hashType');

  return {
    signature: ECSignature.fromDER(buffer.slice(0, -1)),
    hashType: hashType
  };
};

// Export operations
ECSignature.prototype.toCompact = function (i, compressed) {
  if (compressed) i += 4;
  i += 27;

  var buffer = new Buffer(65);
  buffer.writeUInt8(i, 0);

  this.r.toBuffer(32).copy(buffer, 1);
  this.s.toBuffer(32).copy(buffer, 33);

  return buffer;
};

ECSignature.prototype.toDER = function () {
  var rBa = this.r.toDERInteger();
  var sBa = this.s.toDERInteger();

  var sequence = [];

  // INTEGER
  sequence.push(0x02, rBa.length);
  sequence = sequence.concat(rBa);

  // INTEGER
  sequence.push(0x02, sBa.length);
  sequence = sequence.concat(sBa);

  // SEQUENCE
  sequence.unshift(0x30, sequence.length);

  return new Buffer(sequence);
};

ECSignature.prototype.toScriptSignature = function (hashType) {
  var hashTypeBuffer = new Buffer(1);
  hashTypeBuffer.writeUInt8(hashType, 0);

  return Buffer.concat([this.toDER(), hashTypeBuffer]);
};

module.exports = ECSignature;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalize = normalize;
function normalize(brain_key) {
    if (typeof brain_key !== 'string') {
        throw new Error("string required for brain_key");
    }
    brain_key = brain_key.trim();
    return brain_key.split(/[\t\n\v\f\r ]+/).join(' ');
}

/***/ }),

/***/ 3225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var PrivateKey = __webpack_require__(3219);
var hash = __webpack_require__(3216);
var secureRandom = __webpack_require__(531);

// hash for .25 second
var HASH_POWER_MILLS = 250;

var entropyPos = 0,
    entropyCount = 0;
var entropyArray = secureRandom.randomBuffer(101);

module.exports = {
    addEntropy: function addEntropy() {
        entropyCount++;

        for (var _len = arguments.length, ints = Array(_len), _key = 0; _key < _len; _key++) {
            ints[_key] = arguments[_key];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = ints[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                var pos = entropyPos++ % 101;
                var i2 = entropyArray[pos] += i;
                if (i2 > 9007199254740991) entropyArray[pos] = 0;
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
    },


    /**
        A week random number generator can run out of entropy.  This should ensure even the worst random number implementation will be reasonably safe.
         @param1 string entropy of at least 32 bytes
    */
    random32ByteBuffer: function random32ByteBuffer() {
        var entropy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.browserEntropy();


        if (!(typeof entropy === 'string')) {
            throw new Error("string required for entropy");
        }

        if (entropy.length < 32) {
            throw new Error("expecting at least 32 bytes of entropy");
        }

        var start_t = Date.now();

        while (Date.now() - start_t < HASH_POWER_MILLS) {
            entropy = hash.sha256(entropy);
        }var hash_array = [];
        hash_array.push(entropy);

        // Hashing for 1 second may helps the computer is not low on entropy (this method may be called back-to-back).
        hash_array.push(secureRandom.randomBuffer(32));

        return hash.sha256(Buffer.concat(hash_array));
    },
    get_random_key: function get_random_key(entropy) {
        return PrivateKey.fromBuffer(this.random32ByteBuffer(entropy));
    },


    // Turn invisible space like characters into a single space
    // normalize_brain_key(brain_key){
    //     if (!(typeof brain_key === 'string')) {
    //         throw new Error("string required for brain_key");
    //     }
    //     brain_key = brain_key.trim();
    //     return brain_key.split(/[\t\n\v\f\r ]+/).join(' ');
    // },

    browserEntropy: function browserEntropy() {
        var entropyStr = Array(entropyArray).join();
        try {
            entropyStr += new Date().toString() + " " + window.screen.height + " " + window.screen.width + " " + window.screen.colorDepth + " " + " " + window.screen.availHeight + " " + window.screen.availWidth + " " + window.screen.pixelDepth + navigator.language + " " + window.location + " " + window.history.length;

            for (var i = 0, mimeType; i < navigator.mimeTypes.length; i++) {
                mimeType = navigator.mimeTypes[i];
                entropyStr += mimeType.description + " " + mimeType.type + " " + mimeType.suffixes + " ";
            }
            console.log("INFO\tbrowserEntropy gathered", entropyCount, 'events');
        } catch (error) {
            //nodejs:ReferenceError: window is not defined
            entropyStr += hash.sha256(new Date().toString());
        }

        var b = new Buffer(entropyStr);
        entropyStr += b.toString('binary') + " " + new Date().toString();
        return entropyStr;
    }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toImpliedDecimal = toImpliedDecimal;
exports.fromImpliedDecimal = fromImpliedDecimal;

var _assert = __webpack_require__(446);

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
    Convert 12.34 with a precision of 3 into 12340

    @arg {number|string} number - Use strings for large numbers.  This may contain one decimal but no sign
    @arg {number} precision - number of implied decimal places (usually causes right zero padding)
    @return {string} -
*/
function toImpliedDecimal(number, precision) {

    if (typeof number === "number") {
        (0, _assert2.default)(number <= 9007199254740991, "overflow");
        number = "" + number;
    } else if (number.toString) number = number.toString();

    (0, _assert2.default)(typeof number === "string", "number should be an actual number or string: " + (typeof number === "undefined" ? "undefined" : _typeof(number)));
    number = number.trim();
    (0, _assert2.default)(/^[0-9]*\.?[0-9]*$/.test(number), "Invalid decimal number " + number);

    var _number$split = number.split("."),
        _number$split2 = _slicedToArray(_number$split, 2),
        _number$split2$ = _number$split2[0],
        whole = _number$split2$ === undefined ? "" : _number$split2$,
        _number$split2$2 = _number$split2[1],
        decimal = _number$split2$2 === undefined ? "" : _number$split2$2;

    var padding = precision - decimal.length;
    (0, _assert2.default)(padding >= 0, "Too many decimal digits in " + number + " to create an implied decimal of " + precision);

    for (var i = 0; i < padding; i++) {
        decimal += "0";
    }while (whole.charAt(0) === "0") {
        whole = whole.substring(1);
    }return whole + decimal;
}

function fromImpliedDecimal(number, precision) {
    if (typeof number === "number") {
        (0, _assert2.default)(number <= 9007199254740991, "overflow");
        number = "" + number;
    } else if (number.toString) number = number.toString();

    while (number.length < precision + 1) {
        // 0.123
        number = "0" + number;
    } // 44000 => 44.000
    var dec_string = number.substring(number.length - precision);
    return number.substring(0, number.length - precision) + (dec_string ? "." + dec_string : "");
}

/***/ }),

/***/ 3227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _my;
var is_empty;
var is_digits;
var to_number;
var require_match;
var require_object_id;
var require_object_type;
var get_instance;
var require_relative_type;
var get_relative_instance;
var require_protocol_type;
var get_protocol_instance;
var get_protocol_type;
var require_implementation_type;
var get_implementation_instance;
var Long = __webpack_require__(432).Long;
// var BigInteger = require('bigi');

var chain_types = __webpack_require__(3228);

var MAX_SAFE_INT = 9007199254740991;
var MIN_SAFE_INT = -9007199254740991;

/**
    Most validations are skipped and the value returned unchanged when an empty string, null, or undefined is encountered (except "required"). 

    Validations support a string format for dealing with large numbers.
*/
module.exports = _my = {

    is_empty: is_empty = function is_empty(value) {
        return value === null || value === undefined;
    },

    required: function required(value) {
        var field_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (is_empty(value)) {
            throw new Error('value required ' + field_name + ' ' + value);
        }
        return value;
    },
    require_long: function require_long(value) {
        var field_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (!Long.isLong(value)) {
            throw new Error('Long value required ' + field_name + ' ' + value);
        }
        return value;
    },
    string: function string(value) {
        if (is_empty(value)) {
            return value;
        }
        if (typeof value !== "string") {
            throw new Error('string required: ' + value);
        }
        return value;
    },
    number: function number(value) {
        if (is_empty(value)) {
            return value;
        }
        if (typeof value !== "number") {
            throw new Error('number required: ' + value);
        }
        return value;
    },
    whole_number: function whole_number(value) {
        var field_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (is_empty(value)) {
            return value;
        }
        if (/\./.test(value)) {
            throw new Error('whole number required ' + field_name + ' ' + value);
        }
        return value;
    },
    unsigned: function unsigned(value) {
        var field_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (is_empty(value)) {
            return value;
        }
        if (/-/.test(value)) {
            throw new Error('unsigned required ' + field_name + ' ' + value);
        }
        return value;
    },


    is_digits: is_digits = function is_digits(value) {
        if (typeof value === "numeric") {
            return true;
        }
        return (/^[0-9]+$/.test(value)
        );
    },

    to_number: to_number = function to_number(value) {
        var field_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (is_empty(value)) {
            return value;
        }
        _my.no_overflow53(value, field_name);
        var int_value = function () {
            if (typeof value === "number") {
                return value;
            } else {
                return parseInt(value);
            }
        }();
        return int_value;
    },

    to_long: function to_long(value) {
        var field_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (is_empty(value)) {
            return value;
        }
        if (Long.isLong(value)) {
            return value;
        }

        _my.no_overflow64(value, field_name);
        if (typeof value === "number") {
            value = "" + value;
        }
        return Long.fromString(value);
    },
    to_string: function to_string(value) {
        var field_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (is_empty(value)) {
            return value;
        }
        if (typeof value === "string") {
            return value;
        }
        if (typeof value === "number") {
            _my.no_overflow53(value, field_name);
            return "" + value;
        }
        if (Long.isLong(value)) {
            return value.toString();
        }
        throw 'unsupported type ' + field_name + ': (' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + ') ' + value;
    },
    require_test: function require_test(regex, value) {
        var field_name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

        if (is_empty(value)) {
            return value;
        }
        if (!regex.test(value)) {
            throw new Error('unmatched ' + regex + ' ' + field_name + ' ' + value);
        }
        return value;
    },


    require_match: require_match = function require_match(regex, value) {
        var field_name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

        if (is_empty(value)) {
            return value;
        }
        var match = value.match(regex);
        if (match === null) {
            throw new Error('unmatched ' + regex + ' ' + field_name + ' ' + value);
        }
        return match;
    },

    // require_object_id: require_object_id=function(value, field_name){
    //     return require_match(
    //         /^([0-9]+)\.([0-9]+)\.([0-9]+)$/,
    //         value,
    //         field_name
    //     );
    // },

    // Does not support over 53 bits
    require_range: function require_range(min, max, value) {
        var field_name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

        if (is_empty(value)) {
            return value;
        }
        var number = to_number(value);
        if (value < min || value > max) {
            throw new Error('out of range ' + value + ' ' + field_name + ' ' + value);
        }
        return value;
    },


    require_object_type: require_object_type = function require_object_type() {
        var reserved_spaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var type = arguments[1];
        var value = arguments[2];
        var field_name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

        if (is_empty(value)) {
            return value;
        }
        var object_type = chain_types.object_type[type];
        if (!object_type) {
            throw new Error('Unknown object type: ' + type + ', ' + field_name + ', ' + value);
        }
        var re = new RegExp(reserved_spaces + '.' + object_type + '.[0-9]+$');
        if (!re.test(value)) {
            throw new Error('Expecting ' + type + ' in format ' + (reserved_spaces + '.' + object_type + '.[0-9]+ ') + ('instead of ' + value + ' ' + field_name + ' ' + value));
        }
        return value;
    },

    get_instance: get_instance = function get_instance(reserve_spaces, type, value, field_name) {
        if (is_empty(value)) {
            return value;
        }
        require_object_type(reserve_spaces, type, value, field_name);
        return to_number(value.split('.')[2]);
    },

    require_relative_type: require_relative_type = function require_relative_type(type, value, field_name) {
        require_object_type(0, type, value, field_name);
        return value;
    },

    get_relative_instance: get_relative_instance = function get_relative_instance(type, value, field_name) {
        if (is_empty(value)) {
            return value;
        }
        require_object_type(0, type, value, field_name);
        return to_number(value.split('.')[2]);
    },

    require_protocol_type: require_protocol_type = function require_protocol_type(type, value, field_name) {
        require_object_type(1, type, value, field_name);
        return value;
    },

    get_protocol_instance: get_protocol_instance = function get_protocol_instance(type, value, field_name) {
        if (is_empty(value)) {
            return value;
        }
        require_object_type(1, type, value, field_name);
        return to_number(value.split('.')[2]);
    },

    get_protocol_type: get_protocol_type = function get_protocol_type(value, field_name) {
        if (is_empty(value)) {
            return value;
        }
        require_object_id(value, field_name);
        var values = value.split('.');
        return to_number(values[1]);
    },

    get_protocol_type_name: function get_protocol_type_name(value, field_name) {
        if (is_empty(value)) {
            return value;
        }
        var type_id = get_protocol_type(value, field_name);
        return Object.keys(chain_types.object_type)[type_id];
    },


    require_implementation_type: require_implementation_type = function require_implementation_type(type, value, field_name) {
        require_object_type(2, type, value, field_name);
        return value;
    },

    get_implementation_instance: get_implementation_instance = function get_implementation_instance(type, value, field_name) {
        if (is_empty(value)) {
            return value;
        }
        require_object_type(2, type, value, field_name);
        return to_number(value.split('.')[2]);
    },

    // signed / unsigned decimal
    no_overflow53: function no_overflow53(value) {
        var field_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (typeof value === "number") {
            if (value > MAX_SAFE_INT || value < MIN_SAFE_INT) {
                throw new Error('overflow ' + field_name + ' ' + value);
            }
            return;
        }
        if (typeof value === "string") {
            var int = parseInt(value);
            if (value > MAX_SAFE_INT || value < MIN_SAFE_INT) {
                throw new Error('overflow ' + field_name + ' ' + value);
            }
            return;
        }
        if (Long.isLong(value)) {
            // typeof value.toInt() is 'number'
            _my.no_overflow53(value.toInt(), field_name);
            return;
        }
        throw 'unsupported type ' + field_name + ': (' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + ') ' + value;
    },


    // signed / unsigned whole numbers only
    no_overflow64: function no_overflow64(value) {
        var field_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        // https://github.com/dcodeIO/Long.js/issues/20
        if (Long.isLong(value)) {
            return;
        }

        // BigInteger#isBigInteger https://github.com/cryptocoinjs/bigi/issues/20
        if (value.t !== undefined && value.s !== undefined) {
            _my.no_overflow64(value.toString(), field_name);
            return;
        }

        if (typeof value === "string") {
            // remove leading zeros, will cause a false positive
            value = value.replace(/^0+/, '');
            // remove trailing zeros
            while (/0$/.test(value)) {
                value = value.substring(0, value.length - 1);
            }
            if (/\.$/.test(value)) {
                // remove trailing dot
                value = value.substring(0, value.length - 1);
            }
            if (value === "") {
                value = "0";
            }
            var long_string = Long.fromString(value).toString();
            if (long_string !== value.trim()) {
                throw new Error('overflow ' + field_name + ' ' + value);
            }
            return;
        }
        if (typeof value === "number") {
            if (value > MAX_SAFE_INT || value < MIN_SAFE_INT) {
                throw new Error('overflow ' + field_name + ' ' + value);
            }
            return;
        }

        throw 'unsupported type ' + field_name + ': (' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + ') ' + value;
    }
};

/***/ }),

/***/ 3228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ChainTypes;

module.exports = ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.operations = {
  vote: 0,
  comment: 1,
  transfer: 2,
  transfer_to_vesting: 3,
  withdraw_vesting: 4,
  limit_order_create: 5,
  limit_order_cancel: 6,
  feed_publish: 7,
  convert: 8,
  account_create: 9,
  account_update: 10,
  witness_update: 11,
  account_witness_vote: 12,
  account_witness_proxy: 13,
  pow: 14,
  custom: 15,
  report_over_production: 16,
  delete_comment: 17,
  custom_json: 18,
  comment_options: 19,
  set_withdraw_vesting_route: 20,
  limit_order_create2: 21,
  challenge_authority: 22,
  prove_authority: 23,
  request_account_recovery: 24,
  recover_account: 25,
  change_recovery_account: 26,
  escrow_transfer: 27,
  escrow_dispute: 28,
  escrow_release: 29,
  pow2: 30,
  escrow_approve: 31,
  transfer_to_savings: 32,
  transfer_from_savings: 33,
  cancel_transfer_from_savings: 34,
  custom_binary: 35,
  decline_voting_rights: 36,
  reset_account: 37,
  set_reset_account: 38,
  delegate_vesting_shares: 39,
  account_create_with_delegation: 40,
  account_metadata: 41,
  proposal_create: 42,
  proposal_update: 43,
  proposal_delete: 44,
  chain_properties_update: 45,
  break_free_referral: 46,
  delegate_vesting_shares_with_interest: 47,
  reject_vesting_shares_delegation: 48,
  transit_to_cyberway: 49,
  worker_request: 50,
  worker_request_delete: 51,
  worker_request_vote: 52,
  fill_convert_request: 53,
  author_reward: 54,
  curation_reward: 55,
  comment_reward: 56,
  liquidity_reward: 57,
  interest: 58,
  fill_vesting_withdraw: 59,
  fill_order: 60,
  shutdown_witness: 61,
  fill_transfer_from_savings: 62,
  hardfork: 63,
  comment_payout_update: 64,
  comment_benefactor_reward: 65,
  return_vesting_delegation: 66,
  producer_reward: 67,
  delegation_reward: 68,
  auction_window_reward: 69
};

//types.hpp
ChainTypes.object_type = {
  "null": 0,
  base: 1
};

/***/ }),

/***/ 3229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Long = __webpack_require__(432).Long;

var v = __webpack_require__(3227);
var DB_MAX_INSTANCE_ID = Long.fromNumber(Math.pow(2, 48) - 1);

var ObjectId = function () {
    function ObjectId(space, type, instance) {
        _classCallCheck(this, ObjectId);

        this.space = space;
        this.type = type;
        this.instance = instance;
        var instance_string = this.instance.toString();
        var object_id = this.space + '.' + this.type + '.' + instance_string;
        if (!v.is_digits(instance_string)) {
            throw new ('Invalid object id ' + object_id)();
        }
    }

    _createClass(ObjectId, [{
        key: 'toLong',
        value: function toLong() {
            return Long.fromNumber(this.space).shiftLeft(56).or(Long.fromNumber(this.type).shiftLeft(48).or(this.instance));
        }
    }, {
        key: 'appendByteBuffer',
        value: function appendByteBuffer(b) {
            return b.writeUint64(this.toLong());
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.space + '.' + this.type + '.' + this.instance.toString();
        }
    }], [{
        key: 'fromString',
        value: function fromString(value) {
            if (value.space !== undefined && value.type !== undefined && value.instance !== undefined) {
                return value;
            }
            var params = v.require_match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/, v.required(value, "object_id"), "object_id");
            return new ObjectId(parseInt(params[1]), parseInt(params[2]), Long.fromString(params[3]));
        }
    }, {
        key: 'fromLong',
        value: function fromLong(long) {
            var space = long.shiftRight(56).toInt();
            var type = long.shiftRight(48).toInt() & 0x00ff;
            var instance = long.and(DB_MAX_INSTANCE_ID);
            return new ObjectId(space, type, instance);
        }
    }, {
        key: 'fromByteBuffer',
        value: function fromByteBuffer(b) {
            return ObjectId.fromLong(b.readUint64());
        }
    }]);

    return ObjectId;
}();

module.exports = ObjectId;

/***/ }),

/***/ 3230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ecc = __webpack_require__(3214);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FastParser = function () {
    function FastParser() {
        _classCallCheck(this, FastParser);
    }

    _createClass(FastParser, null, [{
        key: 'fixed_data',
        value: function fixed_data(b, len, buffer) {
            if (!b) {
                return;
            }
            if (buffer) {
                var data = buffer.slice(0, len).toString('binary');
                b.append(data, 'binary');
                while (len-- > data.length) {
                    b.writeUint8(0);
                }
            } else {
                var b_copy = b.copy(b.offset, b.offset + len);
                b.skip(len);
                return new Buffer(b_copy.toBinary(), 'binary');
            }
        }
    }, {
        key: 'public_key',
        value: function public_key(b, _public_key) {
            if (!b) {
                return;
            }
            if (_public_key) {
                var buffer = _public_key.toBuffer();
                b.append(buffer.toString('binary'), 'binary');
                return;
            } else {
                buffer = FastParser.fixed_data(b, 33);
                return _ecc.PublicKey.fromBuffer(buffer);
            }
        }
    }, {
        key: 'ripemd160',
        value: function ripemd160(b, _ripemd) {
            if (!b) {
                return;
            }
            if (_ripemd) {
                FastParser.fixed_data(b, 20, _ripemd);
                return;
            } else {
                return FastParser.fixed_data(b, 20);
            }
        }
    }, {
        key: 'time_point_sec',
        value: function time_point_sec(b, epoch) {
            if (epoch) {
                epoch = Math.ceil(epoch / 1000);
                b.writeInt32(epoch);
                return;
            } else {
                epoch = b.readInt32(); // fc::time_point_sec
                return new Date(epoch * 1000);
            }
        }
    }]);

    return FastParser;
}();

module.exports = FastParser;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, Buffer) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ByteBuffer = __webpack_require__(432);
var EC = __webpack_require__(3232);

var HEX_DUMP = process.env.npm_config__graphene_serializer_hex_dump;

var Serializer = function () {
    function Serializer(operation_name, types) {
        _classCallCheck(this, Serializer);

        this.operation_name = operation_name;
        this.types = types;
        if (this.types) this.keys = Object.keys(this.types);

        Serializer.printDebug = true;
    }

    _createClass(Serializer, [{
        key: 'fromByteBuffer',
        value: function fromByteBuffer(b) {
            var object = {};
            var field = null;
            try {
                var iterable = this.keys;
                for (var i = 0, field; i < iterable.length; i++) {
                    field = iterable[i];
                    var type = this.types[field];
                    try {
                        if (HEX_DUMP) {
                            if (type.operation_name) {
                                console.error(type.operation_name);
                            } else {
                                var o1 = b.offset;
                                type.fromByteBuffer(b);
                                var o2 = b.offset;
                                b.offset = o1;
                                //b.reset()
                                var _b = b.copy(o1, o2);
                                console.error(this.operation_name + '.' + field + '\t', _b.toHex());
                            }
                        }
                        object[field] = type.fromByteBuffer(b);
                    } catch (e) {
                        if (Serializer.printDebug) {
                            console.error('Error reading ' + this.operation_name + '.' + field + ' in data:');
                            b.printDebug();
                        }
                        throw e;
                    }
                }
            } catch (error) {
                EC.throw(this.operation_name + '.' + field, error);
            }

            return object;
        }
    }, {
        key: 'appendByteBuffer',
        value: function appendByteBuffer(b, object) {
            var field = null;
            try {
                var iterable = this.keys;
                for (var i = 0, field; i < iterable.length; i++) {
                    field = iterable[i];
                    var type = this.types[field];
                    type.appendByteBuffer(b, object[field]);
                }
            } catch (error) {
                try {
                    EC.throw(this.operation_name + '.' + field + " = " + JSON.stringify(object[field]), error);
                } catch (e) {
                    // circular ref
                    EC.throw(this.operation_name + '.' + field + " = " + object[field], error);
                }
            }
            return;
        }
    }, {
        key: 'fromObject',
        value: function fromObject(serialized_object) {
            var result = {};
            var field = null;
            try {
                var iterable = this.keys;
                for (var i = 0, field; i < iterable.length; i++) {
                    field = iterable[i];
                    var type = this.types[field];
                    var value = serialized_object[field];
                    //DEBUG value = value.resolve if value.resolve
                    //DEBUG console.log('... value',field,value)
                    var object = type.fromObject(value);
                    result[field] = object;
                }
            } catch (error) {
                EC.throw(this.operation_name + '.' + field, error);
            }

            return result;
        }

        /**
            @arg {boolean} [debug.use_default = false] - more template friendly
            @arg {boolean} [debug.annotate = false] - add user-friendly information
        */

    }, {
        key: 'toObject',
        value: function toObject() {
            var serialized_object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { use_default: false, annotate: false };

            var result = {};
            var field = null;
            try {
                if (!this.types) return result;

                var iterable = this.keys;
                for (var i = 0, field; i < iterable.length; i++) {
                    field = iterable[i];
                    var type = this.types[field];
                    var object = type.toObject(typeof serialized_object !== "undefined" && serialized_object !== null ? serialized_object[field] : undefined, debug);
                    result[field] = object;
                    if (HEX_DUMP) {
                        var b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
                        var has_value = typeof serialized_object !== "undefined" && serialized_object !== null;
                        if (has_value) {
                            var value = serialized_object[field];
                            if (value) type.appendByteBuffer(b, value);
                        }
                        b = b.copy(0, b.offset);
                        console.error(this.operation_name + '.' + field, b.toHex());
                    }
                }
            } catch (error) {
                EC.throw(this.operation_name + '.' + field, error);
            }

            return result;
        }

        /** Sort by the first element in a operation */

    }, {
        key: 'compare',
        value: function compare(a, b) {

            var first_key = this.keys[0];
            var first_type = this.types[first_key];

            var valA = a[first_key];
            var valB = b[first_key];

            if (first_type.compare) return first_type.compare(valA, valB);

            if (typeof valA === "number" && typeof valB === "number") return valA - valB;

            var encoding = void 0;
            if (Buffer.isBuffer(valA) && Buffer.isBuffer(valB)) {
                // A binary string compare does not work.  If localeCompare is well supported that could replace HEX.  Performanance is very good so comparing HEX works.
                encoding = "hex";
            }

            var strA = valA.toString(encoding);
            var strB = valB.toString(encoding);
            return strA > strB ? 1 : strA < strB ? -1 : 0;
        }

        // <helper_functions>

    }, {
        key: 'fromHex',
        value: function fromHex(hex) {
            var b = ByteBuffer.fromHex(hex, ByteBuffer.LITTLE_ENDIAN);
            return this.fromByteBuffer(b);
        }
    }, {
        key: 'fromBuffer',
        value: function fromBuffer(buffer) {
            var b = ByteBuffer.fromBinary(buffer.toString("binary"), ByteBuffer.LITTLE_ENDIAN);
            return this.fromByteBuffer(b);
        }
    }, {
        key: 'toHex',
        value: function toHex(object) {
            // return this.toBuffer(object).toString("hex")
            var b = this.toByteBuffer(object);
            return b.toHex();
        }
    }, {
        key: 'toByteBuffer',
        value: function toByteBuffer(object) {
            var b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
            this.appendByteBuffer(b, object);
            return b.copy(0, b.offset);
        }
    }, {
        key: 'toBuffer',
        value: function toBuffer(object) {
            return new Buffer(this.toByteBuffer(object).toBinary(), 'binary');
        }
    }]);

    return Serializer;
}();

module.exports = Serializer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(431), __webpack_require__(436).Buffer))

/***/ }),

/***/ 3232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Exception nesting.  */
var ErrorWithCause = function () {
    function ErrorWithCause(message, cause) {
        _classCallCheck(this, ErrorWithCause);

        this.message = message;
        if (typeof cause !== "undefined" && cause !== null ? cause.message : undefined) {
            this.message = "cause\t" + cause.message + "\t" + this.message;
        }

        var stack = ""; //(new Error).stack
        if (typeof cause !== "undefined" && cause !== null ? cause.stack : undefined) {
            stack = "caused by\n\t" + cause.stack + "\t" + stack;
        }

        this.stack = this.message + "\n" + stack;
    }

    _createClass(ErrorWithCause, null, [{
        key: "throw",
        value: function _throw(message, cause) {
            var msg = message;
            if (typeof cause !== "undefined" && cause !== null ? cause.message : undefined) {
                msg += "\t cause: " + cause.message + " ";
            }
            if (typeof cause !== "undefined" && cause !== null ? cause.stack : undefined) {
                msg += "\n stack: " + cause.stack + " ";
            }
            throw new Error(msg);
        }
    }]);

    return ErrorWithCause;
}();

module.exports = ErrorWithCause;

/***/ }),

/***/ 3233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _bluebird = __webpack_require__(3187);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _debug = __webpack_require__(2458);

var _debug2 = _interopRequireDefault(_debug);

var _noop = __webpack_require__(1839);

var _noop2 = _interopRequireDefault(_noop);

var _helpers = __webpack_require__(3234);

var _helpers2 = _interopRequireDefault(_helpers);

var _formatter = __webpack_require__(3235);

var _formatter2 = _interopRequireDefault(_formatter);

var _operations = __webpack_require__(3236);

var _operations2 = _interopRequireDefault(_operations);

var _api = __webpack_require__(3186);

var _api2 = _interopRequireDefault(_api);

var _auth = __webpack_require__(3211);

var _auth2 = _interopRequireDefault(_auth);

var _utils = __webpack_require__(3209);

var _config = __webpack_require__(3206);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('golos:broadcast');
var formatter = (0, _formatter2.default)(_api2.default);

var steemBroadcast = {};

// Base transaction logic -----------------------------------------------------

/**
 * Sign and broadcast transactions on the steem network
 */

steemBroadcast.send = function steemBroadcast$send(tx, privKeys, callback) {
  var resultP = steemBroadcast._prepareTransaction(tx).then(function (transaction) {
    debug('Signing transaction (transaction, transaction.operations)', transaction, transaction.operations);
    return _bluebird2.default.join(transaction, _auth2.default.signTransaction(transaction, privKeys));
  }).spread(function (transaction, signedTransaction) {
    debug('Broadcasting transaction (transaction, transaction.operations)', transaction, transaction.operations);
    return _config2.default.get('broadcast_transaction_with_callback') ? _api2.default.broadcastTransactionWithCallbackAsync(function () {}, signedTransaction).then(function () {
      return signedTransaction;
    }) : _api2.default.broadcastTransactionAsync(signedTransaction).then(function () {
      return signedTransaction;
    });
  });

  resultP.nodeify(callback || _noop2.default);
};

steemBroadcast._prepareTransaction = function steemBroadcast$_prepareTransaction(tx) {
  var propertiesP = _api2.default.getDynamicGlobalPropertiesAsync();
  return propertiesP.then(function (properties) {
    // Set defaults on the transaction
    var chainDate = new Date(properties.time + 'Z');
    var refBlockNum = properties.head_block_number - 3 & 0xFFFF;
    return _api2.default.getBlockAsync(properties.head_block_number - 2).then(function (block) {
      var headBlockId = block.previous;
      return Object.assign({
        ref_block_num: refBlockNum,
        ref_block_prefix: new Buffer(headBlockId, 'hex').readUInt32LE(4),
        expiration: new Date(chainDate.getTime() + 60 * 1000)
      }, tx);
    });
  });
};

// Generated wrapper ----------------------------------------------------------

// Generate operations from operations.js
_operations2.default.forEach(function (operation) {
  var operationName = (0, _utils.camelCase)(operation.operation);
  var operationParams = operation.params || [];

  var useCommentPermlink = operationParams.indexOf('parent_permlink') !== -1 && operationParams.indexOf('parent_permlink') !== -1;

  steemBroadcast[operationName + 'With'] = function steemBroadcast$specializedSendWith(wif, options, callback) {
    debug('Sending operation "' + operationName + '" with', { options: options, callback: callback });
    var keys = {};
    if (operation.roles && operation.roles.length) {
      keys[operation.roles[0]] = wif; // TODO - Automatically pick a role? Send all?
    }
    return steemBroadcast.send({
      extensions: [],
      operations: [[operation.operation, Object.assign({}, options, options.json_metadata != null ? {
        json_metadata: toString(options.json_metadata)
      } : {}, useCommentPermlink && options.permlink == null ? {
        permlink: formatter.commentPermlink(options.parent_author, options.parent_permlink)
      } : {})]]
    }, keys, callback);
  };

  steemBroadcast[operationName] = function steemBroadcast$specializedSend(wif) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    debug('Parsing operation "' + operationName + '" with', { args: args });
    var options = operationParams.reduce(function (memo, param, i) {
      memo[param] = args[i]; // eslint-disable-line no-param-reassign
      return memo;
    }, {});
    var callback = args[operationParams.length];
    return steemBroadcast[operationName + 'With'](wif, options, callback);
  };
});

var toString = function toString(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' ? JSON.stringify(obj) : obj;
};
(0, _helpers2.default)(steemBroadcast);

_bluebird2.default.promisifyAll(steemBroadcast);

exports = module.exports = steemBroadcast;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _api = __webpack_require__(3186);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultWeight = 1;

exports = module.exports = function (steemBroadcast) {
  steemBroadcast.addAccountAuth = function (activeWif, username, authorizedUsername) {
    var role = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "posting";
    var cb = arguments[4];

    _api2.default.getAccountsAsync([username]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          userAccount = _ref2[0];

      var updatedAuthority = userAccount[role];
      var authorizedAccounts = updatedAuthority.account_auths.map(function (auth) {
        return auth[0];
      });
      var hasAuthority = authorizedAccounts.indexOf(authorizedUsername) !== -1;

      if (hasAuthority) {
        // user does already exist in authorized list
        return cb(null, null);
      }
      updatedAuthority.account_auths.push([authorizedUsername, defaultWeight]);
      var owner = role === "owner" ? updatedAuthority : undefined;
      var active = role === "active" ? updatedAuthority : undefined;
      var posting = role === "posting" ? updatedAuthority : undefined;
      /** Add authority on user account */
      steemBroadcast.accountUpdate(activeWif, userAccount.name, owner, active, posting, userAccount.memo_key, userAccount.json_metadata, cb);
    });
  };

  steemBroadcast.removeAccountAuth = function (activeWif, username, authorizedUsername) {
    var role = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "posting";
    var cb = arguments[4];

    _api2.default.getAccountsAsync([username]).then(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
          userAccount = _ref4[0];

      var updatedAuthority = userAccount[role];
      var totalAuthorizedUser = updatedAuthority.account_auths.length;
      for (var i = 0; i < totalAuthorizedUser; i++) {
        var user = updatedAuthority.account_auths[i];
        if (user[0] === authorizedUsername) {
          updatedAuthority.account_auths.splice(i, 1);
          break;
        }
      }
      // user does not exist in authorized list
      if (totalAuthorizedUser === updatedAuthority.account_auths.length) {
        return cb(null, null);
      }

      var owner = role === "owner" ? updatedAuthority : undefined;
      var active = role === "active" ? updatedAuthority : undefined;
      var posting = role === "posting" ? updatedAuthority : undefined;

      steemBroadcast.accountUpdate(activeWif, userAccount.name, owner, active, posting, userAccount.memo_key, userAccount.json_metadata, cb);
    });
  };
};

/***/ }),

/***/ 3235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = __webpack_require__(1294);

var _get2 = _interopRequireDefault(_get);

var _ecc = __webpack_require__(3214);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (steemAPI) {
  function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function vestingGolos(account, gprops) {
    var vests = parseFloat(account.vesting_shares.split(" ")[0]);
    var total_vests = parseFloat(gprops.total_vesting_shares.split(" ")[0]);
    var total_vest_steem = parseFloat(gprops.total_vesting_fund_steem.split(" ")[0]);
    var vesting_steemf = total_vest_steem * (vests / total_vests);
    return vesting_steemf;
  }

  function processOrders(open_orders, assetPrecision) {
    var sbdOrders = !open_orders ? 0 : open_orders.reduce(function (o, order) {
      if (order.sell_price.base.indexOf("GBG") !== -1) {
        o += order.for_sale;
      }
      return o;
    }, 0) / assetPrecision;

    var steemOrders = !open_orders ? 0 : open_orders.reduce(function (o, order) {
      if (order.sell_price.base.indexOf("GOLOS") !== -1) {
        o += order.for_sale;
      }
      return o;
    }, 0) / assetPrecision;

    return { steemOrders: steemOrders, sbdOrders: sbdOrders };
  }

  function calculateSaving(savings_withdraws) {
    var savings_pending = 0;
    var savings_sbd_pending = 0;
    savings_withdraws.forEach(function (withdraw) {
      var _withdraw$amount$spli = withdraw.amount.split(" "),
          _withdraw$amount$spli2 = _slicedToArray(_withdraw$amount$spli, 2),
          amount = _withdraw$amount$spli2[0],
          asset = _withdraw$amount$spli2[1];

      if (asset === "GOLOS") savings_pending += parseFloat(amount);else {
        if (asset === "GBG") savings_sbd_pending += parseFloat(amount);
      }
    });
    return { savings_pending: savings_pending, savings_sbd_pending: savings_sbd_pending };
  }

  function estimateAccountValue(account) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        gprops = _ref.gprops,
        feed_price = _ref.feed_price,
        open_orders = _ref.open_orders,
        savings_withdraws = _ref.savings_withdraws,
        vesting_steem = _ref.vesting_steem;

    var promises = [];
    var username = account.name;
    var assetPrecision = 1000;
    var orders = void 0,
        savings = void 0;

    if (!vesting_steem || !feed_price) {
      if (!gprops || !feed_price) {
        promises.push(steemAPI.getStateAsync("/@{username}").then(function (data) {
          gprops = data.props;
          feed_price = data.feed_price;
          vesting_steem = vestingGolos(account, gprops);
        }));
      } else {
        vesting_steem = vestingGolos(account, gprops);
      }
    }

    if (!open_orders) {
      promises.push(steemAPI.getOpenOrdersAsync(username).then(function (open_orders) {
        orders = processOrders(open_orders, assetPrecision);
      }));
    } else {
      orders = processOrders(open_orders, assetPrecision);
    }

    if (!savings_withdraws) {
      promises.push(steemAPI.getSavingsWithdrawFromAsync(username).then(function (savings_withdraws) {
        savings = calculateSaving(savings_withdraws);
      }));
    } else {
      savings = calculateSaving(savings_withdraws);
    }

    return Promise.all(promises).then(function () {
      var price_per_steem = undefined;
      var _feed_price = feed_price,
          base = _feed_price.base,
          quote = _feed_price.quote;

      if (/ GBG$/.test(base) && / GOLOS$/.test(quote)) price_per_steem = parseFloat(base.split(" ")[0]);
      var savings_balance = account.savings_balance;
      var savings_sbd_balance = account.savings_sbd_balance;
      var balance_steem = parseFloat(account.balance.split(" ")[0]);
      var saving_balance_steem = parseFloat(savings_balance.split(" ")[0]);
      var sbd_balance = parseFloat(account.sbd_balance);
      var sbd_balance_savings = parseFloat(savings_sbd_balance.split(" ")[0]);

      var conversionValue = 0;
      var currentTime = new Date().getTime();
      (account.other_history || []).reduce(function (out, item) {
        if ((0, _get2.default)(item, [1, "op", 0], "") !== "convert") return out;

        var timestamp = new Date((0, _get2.default)(item, [1, "timestamp"])).getTime();
        var finishTime = timestamp + 86400000 * 3.5; // add 3.5day conversion delay
        if (finishTime < currentTime) return out;

        var amount = parseFloat((0, _get2.default)(item, [1, "op", 1, "amount"]).replace(" GBG", ""));
        conversionValue += amount;
      }, []);

      var total_sbd = sbd_balance + sbd_balance_savings + savings.savings_sbd_pending + orders.sbdOrders + conversionValue;

      var total_steem = vesting_steem + balance_steem + saving_balance_steem + savings.savings_pending + orders.steemOrders;

      return (total_steem * price_per_steem + total_sbd).toFixed(2);
    });
  }

  function createSuggestedPassword() {
    var PASSWORD_LENGTH = 32;
    var privateKey = _ecc.key_utils.get_random_key();
    return privateKey.toWif().substring(3, 3 + PASSWORD_LENGTH);
  }

  return {
    reputation: function reputation(_reputation) {
      if (_reputation == null) return _reputation;
      _reputation = parseInt(_reputation);
      var rep = String(_reputation);
      var neg = rep.charAt(0) === "-";
      rep = neg ? rep.substring(1) : rep;
      var str = rep;
      var leadingDigits = parseInt(str.substring(0, 4));
      var log = Math.log(leadingDigits) / Math.log(10);
      var n = str.length - 1;
      var out = n + (log - parseInt(log));
      if (isNaN(out)) out = 0;
      out = Math.max(out - 9, 0);
      out = (neg ? -1 : 1) * out;
      out = out * 9 + 25;
      out = parseInt(out);
      return out;
    },

    vestToGolos: function vestToGolos(vestingShares, totalVestingShares, totalVestingFundGolos) {
      return parseFloat(totalVestingFundGolos) * (parseFloat(vestingShares) / parseFloat(totalVestingShares));
    },

    commentPermlink: function commentPermlink(parentAuthor, parentPermlink) {
      var timeStr = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
      parentPermlink = parentPermlink.replace(/(-\d{8}t\d{9}z)/g, "");
      return "re-" + parentAuthor + "-" + parentPermlink + "-" + timeStr;
    },

    amount: function amount(_amount, asset) {
      return _amount.toFixed(3) + " " + asset;
    },
    numberWithCommas: numberWithCommas,
    vestingGolos: vestingGolos,
    estimateAccountValue: estimateAccountValue,
    createSuggestedPassword: createSuggestedPassword
  };
};

/***/ }),

/***/ 3236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  "roles": ["posting"],
  "operation": "vote",
  "params": ["voter", "author", "permlink", "weight"]
}, {
  "roles": ["posting"],
  "operation": "comment",
  "params": ["parent_author", "parent_permlink", "author", "permlink", "title", "body", "json_metadata"]
}, {
  "roles": ["active", "owner"],
  "operation": "transfer",
  "params": ["from", "to", "amount", "memo"]
}, {
  "roles": ["active"],
  "operation": "transfer_to_vesting",
  "params": ["from", "to", "amount"]
}, {
  "roles": ["active"],
  "operation": "withdraw_vesting",
  "params": ["account", "vesting_shares"]
}, {
  "roles": ["active"],
  "operation": "limit_order_create",
  "params": ["owner", "orderid", "amount_to_sell", "min_to_receive", "fill_or_kill", "expiration"]
}, {
  "roles": ["active"],
  "operation": "limit_order_cancel",
  "params": ["owner", "orderid"]
}, {
  "roles": ["active"],
  "operation": "price",
  "params": ["base", "quote"]
}, {
  "roles": ["active"],
  "operation": "feed_publish",
  "params": ["publisher", "exchange_rate"]
}, {
  "roles": ["active"],
  "operation": "convert",
  "params": ["owner", "requestid", "amount"]
}, {
  "roles": ["active"],
  "operation": "account_create",
  "params": ["fee", "creator", "new_account_name", "owner", "active", "posting", "memo_key", "json_metadata"]
}, {
  "roles": ["owner", "active"],
  "operation": "account_update",
  "params": ["account", "owner", "active", "posting", "memo_key", "json_metadata"]
}, {
  "roles": ["active"],
  "operation": "witness_update",
  "params": ["owner", "url", "block_signing_key", "props", "fee"]
}, {
  "roles": ["posting"],
  "operation": "account_witness_vote",
  "params": ["account", "witness", "approve"]
}, {
  "roles": ["posting"],
  "operation": "account_witness_proxy",
  "params": ["account", "proxy"]
}, {
  "roles": ["active"],
  "operation": "pow",
  "params": ["worker", "input", "signature", "work"]
}, {
  "roles": ["active"],
  "operation": "custom",
  "params": ["required_auths", "id", "data"]
}, {
  "roles": ["posting"],
  "operation": "delete_comment",
  "params": ["author", "permlink"]
}, {
  "roles": ["posting", "active"],
  "operation": "custom_json",
  "params": ["required_auths", "required_posting_auths", "id", "json"]
}, {
  "roles": ["posting"],
  "operation": "comment_options",
  "params": ["author", "permlink", "max_accepted_payout", "percent_steem_dollars", "allow_votes", "allow_curation_rewards", "extensions"]
}, {
  "roles": ["active"],
  "operation": "set_withdraw_vesting_route",
  "params": ["from_account", "to_account", "percent", "auto_vest"]
}, {
  "roles": ["active"],
  "operation": "limit_order_create2",
  "params": ["owner", "orderid", "amount_to_sell", "exchange_rate", "fill_or_kill", "expiration"]
}, {
  "roles": ["posting"],
  "operation": "challenge_authority",
  "params": ["challenger", "challenged", "require_owner"]
}, {
  "roles": ["active", "owner"],
  "operation": "prove_authority",
  "params": ["challenged", "require_owner"]
}, {
  "roles": ["active"],
  "operation": "request_account_recovery",
  "params": ["recovery_account", "account_to_recover", "new_owner_authority", "extensions"]
}, {
  "roles": ["owner"],
  "operation": "recover_account",
  "params": ["account_to_recover", "new_owner_authority", "recent_owner_authority", "extensions"]
}, {
  "roles": ["owner"],
  "operation": "change_recovery_account",
  "params": ["account_to_recover", "new_recovery_account", "extensions"]
}, {
  "roles": ["active"],
  "operation": "escrow_transfer",
  "params": ["from", "to", "agent", "escrow_id", "sbd_amount", "steem_amount", "fee", "ratification_deadline", "escrow_expiration", "json_meta"]
}, {
  "roles": ["active"],
  "operation": "escrow_dispute",
  "params": ["from", "to", "agent", "who", "escrow_id"]
}, {
  "roles": ["active"],
  "operation": "escrow_release",
  "params": ["from", "to", "agent", "who", "receiver", "escrow_id", "sbd_amount", "steem_amount"]
}, {
  "roles": ["active"],
  "operation": "pow2",
  "params": ["input", "pow_summary"]
}, {
  "roles": ["active"],
  "operation": "escrow_approve",
  "params": ["from", "to", "agent", "who", "escrow_id", "approve"]
}, {
  "roles": ["active"],
  "operation": "transfer_to_savings",
  "params": ["from", "to", "amount", "memo"]
}, {
  "roles": ["active"],
  "operation": "transfer_from_savings",
  "params": ["from", "request_id", "to", "amount", "memo"]
}, {
  "roles": ["active"],
  "operation": "cancel_transfer_from_savings",
  "params": ["from", "request_id"]
}, {
  "roles": ["posting", "active", "owner"],
  "operation": "custom_binary",
  "params": ["id", "data"]
}, {
  "roles": ["owner"],
  "operation": "decline_voting_rights",
  "params": ["account", "decline"]
}, {
  "roles": ["active"],
  "operation": "reset_account",
  "params": ["reset_account", "account_to_reset", "new_owner_authority"]
}, {
  "roles": ["owner", "posting"],
  "operation": "set_reset_account",
  "params": ["account", "current_reset_account", "reset_account"]
}, {
  "roles": ["posting"],
  "operation": "claim_reward_balance",
  "params": ["account", "reward_steem", "reward_sbd", "reward_vests"]
}, {
  "roles": ["active"],
  "operation": "fill_convert_request",
  "params": ["owner", "requestid", "amount_in", "amount_out"]
}, {
  "roles": ["posting"],
  "operation": "comment_reward",
  "params": ["author", "permlink", "payout"]
}, {
  "roles": ["active"],
  "operation": "liquidity_reward",
  "params": ["owner", "payout"]
}, {
  "roles": ["active"],
  "operation": "interest",
  "params": ["owner", "interest"]
}, {
  "roles": ["active"],
  "operation": "fill_vesting_withdraw",
  "params": ["from_account", "to_account", "withdrawn", "deposited"]
}, {
  "roles": ["posting"],
  "operation": "fill_order",
  "params": ["current_owner", "current_orderid", "current_pays", "open_owner", "open_orderid", "open_pays"]
}, {
  "roles": ["posting"],
  "operation": "fill_transfer_from_savings",
  "params": ["from", "to", "amount", "request_id", "memo"]
}, {
  "roles": ["active", "owner"],
  "operation": "delegate_vesting_shares",
  "params": ["delegator", "delegatee", "vesting_shares"]
}, {
  "roles": ["active", "owner"],
  "operation": "account_create_with_delegation",
  "params": ["fee", "delegation", "creator", "new_account_name", "owner", "active", "posting", "memo_key", "json_metadata", "extensions"]
}, {
  "roles": ["posting"],
  "operation": "account_metadata",
  "params": ["account", "json_metadata"]
}, {
  "roles": ["active", "owner"],
  "operation": "proposal_create",
  "params": ["author", "title", "memo", "expiration_time", "proposed_operations", "review_period_time", "extensions"]
}, {
  "roles": ["posting", "active", "owner"],
  "operation": "proposal_update",
  "params": ["author", "title", "active_approvals_to_add", "active_approvals_to_remove", "owner_approvals_to_add", "owner_approvals_to_remove", "posting_approvals_to_add", "posting_approvals_to_remove", "key_approvals_to_add", "key_approvals_to_remove", "extensions"]
}, {
  "roles": ["active", "owner"],
  "operation": "proposal_delete",
  "params": ["author", "title", "requester", "extensions"]
}, {
  "roles": ["active", "owner"],
  "operation": "chain_properties_update",
  "params": ["owner", "props"]
}, {
  "roles": ["active"],
  "operation": "break_free_referral",
  "params": ["referral", "extensions"]
}, {
  "roles": ["active"],
  "operation": "delegate_vesting_shares_with_interest",
  "params": ["delegator", "delegatee", "vesting_shares", "interest_rate", "extensions"]
}, {
  "roles": ["active"],
  "operation": "reject_vesting_shares_delegation",
  "params": ["delegator", "delegatee", "extensions"]
}, {
  "roles": ["posting"],
  "operation": "worker_request",
  "params": ["author", "permlink", "worker", "required_amount_min", "required_amount_max", "vest_reward", "duration", "extensions"]
}, {
  "roles": ["posting"],
  "operation": "worker_request_delete",
  "params": ["author", "permlink", "extensions"]
}, {
  "roles": ["posting"],
  "operation": "worker_request_vote",
  "params": ["voter", "author", "permlink", "vote_percent", "extensions"]
}];

/***/ }),

/***/ 3237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.decode = decode;
exports.encode = encode;

var _bytebuffer = __webpack_require__(432);

var _bytebuffer2 = _interopRequireDefault(_bytebuffer);

var _assert = __webpack_require__(446);

var _assert2 = _interopRequireDefault(_assert);

var _bs = __webpack_require__(455);

var _bs2 = _interopRequireDefault(_bs);

var _ecc = __webpack_require__(3214);

var _serializer = __webpack_require__(3238);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encMemo = _serializer.ops.encrypted_memo;

/**
    Some fields are only required if the memo is marked for decryption (starts with a hash).
    @arg {string|PrivateKey} private_key - WIF or PrivateKey object
    @arg {string} memo - plain text is returned, hash prefix base58 is decrypted
    @return {string} - utf8 decoded string (hash prefix)
*/
function decode(private_key, memo) {
    (0, _assert2.default)(memo, 'memo is required');
    _assert2.default.equal(typeof memo === 'undefined' ? 'undefined' : _typeof(memo), 'string', 'memo');
    if (!/^#/.test(memo)) return memo;
    memo = memo.substring(1);

    (0, _assert2.default)(private_key, 'private_key is required');
    checkEncryption();

    private_key = toPrivateObj(private_key);

    memo = _bs2.default.decode(memo);
    memo = encMemo.fromBuffer(new Buffer(memo, 'binary'));

    var _memo = memo,
        from = _memo.from,
        to = _memo.to,
        nonce = _memo.nonce,
        check = _memo.check,
        encrypted = _memo.encrypted;

    var pubkey = private_key.toPublicKey().toString();
    var otherpub = pubkey === from.toString() ? to.toString() : from.toString();
    memo = _ecc.Aes.decrypt(private_key, otherpub, nonce, encrypted, check);

    // remove varint length prefix
    var mbuf = _bytebuffer2.default.fromBinary(memo.toString('binary'), _bytebuffer2.default.DEFAULT_CAPACITY, _bytebuffer2.default.LITTLE_ENDIAN);
    try {
        mbuf.mark();
        return '#' + mbuf.readVString();
    } catch (e) {
        mbuf.reset();
        // Sender did not length-prefix the memo
        memo = new Buffer(mbuf.toString('binary'), 'binary').toString('utf-8');
        return '#' + memo;
    }
}

/**
    Some fields are only required if the memo is marked for encryption (starts with a hash).
    @arg {string|PrivateKey} private_key - WIF or PrivateKey object
    @arg {string|PublicKey} public_key - Recipient
    @arg {string} memo - plain text is returned, hash prefix text is encrypted
    @arg {string} [testNonce = undefined] - just for testing
    @return {string} - base64 decoded string (or plain text)
*/
function encode(private_key, public_key, memo, testNonce) {
    (0, _assert2.default)(memo, 'memo is required');
    _assert2.default.equal(typeof memo === 'undefined' ? 'undefined' : _typeof(memo), 'string', 'memo');
    if (!/^#/.test(memo)) return memo;
    memo = memo.substring(1);

    (0, _assert2.default)(private_key, 'private_key is required');
    (0, _assert2.default)(public_key, 'public_key is required');
    checkEncryption();

    private_key = toPrivateObj(private_key);
    public_key = toPublicObj(public_key);

    var mbuf = new _bytebuffer2.default(_bytebuffer2.default.DEFAULT_CAPACITY, _bytebuffer2.default.LITTLE_ENDIAN);
    mbuf.writeVString(memo);
    memo = new Buffer(mbuf.copy(0, mbuf.offset).toBinary(), 'binary');

    var _Aes$encrypt = _ecc.Aes.encrypt(private_key, public_key, memo, testNonce),
        nonce = _Aes$encrypt.nonce,
        message = _Aes$encrypt.message,
        checksum = _Aes$encrypt.checksum;

    memo = encMemo.fromObject({
        from: private_key.toPublicKey(),
        to: public_key,
        nonce: nonce,
        check: checksum,
        encrypted: message
    });
    // serialize
    memo = encMemo.toBuffer(memo);
    return '#' + _bs2.default.encode(new Buffer(memo, 'binary'));
}

var encodeTest = undefined;

/**
  Memo encryption has failed in the browser before.  An Error will be thrown
  if a memo can't be encrypted and decrypted.
*/
function checkEncryption() {
    if (encodeTest === undefined) {
        var plaintext = void 0;
        encodeTest = true; // prevent infinate looping
        try {
            var wif = '5JdeC9P7Pbd1uGdFVEsJ41EkEnADbbHGq6p1BwFxm6txNBsQnsw';
            var pubkey = 'GLS8m5UgaFAAYQRuaNejYdS8FVLVp9Ss3K1qAVk5de6F8s3HnVbvA';
            var cyphertext = encode(wif, pubkey, '#memo爱');
            plaintext = decode(wif, cyphertext);
        } catch (e) {
            console.error(e);
        } finally {
            encodeTest = plaintext === '#memo爱';
        }
    }
    if (encodeTest === false) throw new Error('This environment does not support encryption.');
}

var toPrivateObj = function toPrivateObj(o) {
    return o ? o.d ? o : _ecc.PrivateKey.fromWif(o) : o /*null or undefined*/;
};
var toPublicObj = function toPublicObj(o) {
    return o ? o.Q ? o : _ecc.PublicKey.fromString(o) : o /*null or undefined*/;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 3238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    // Primary class for creating operations
    Serializer: __webpack_require__(3231),

    // helper functions for creating operations
    fp: __webpack_require__(3230),

    // Low level types
    types: __webpack_require__(3213),

    // Higher level operations (made out of generic types)
    ops: __webpack_require__(3212),

    // Utility that generates JSON examples
    template: __webpack_require__(3239),

    number_utils: __webpack_require__(3226)
};

/***/ }),

/***/ 3239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Console print any transaction object with zero default values. */
module.exports = function template(op) {

    var object = op.toObject(void 0, { use_default: true, annotate: true });

    // visual (with descriptions)
    console.error(JSON.stringify(object, null, 4));

    // usable in a copy-paste

    object = op.toObject(void 0, { use_default: true, annotate: false });

    // copy-paste one-lineer
    console.error(JSON.stringify(object));
};

/***/ })

}]);