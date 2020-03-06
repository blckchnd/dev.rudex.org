(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[29],{

/***/ 2974:
/***/ (function(module, exports, __webpack_require__) {

const {groupEntries, parseData} = __webpack_require__(2975);

const {resolveBlockTimes, resolveAssets} = __webpack_require__(2977);

const {
    getAccountHistoryES,
    getAccountHistory
} = __webpack_require__(2979)(true);

module.exports = {
    groupEntries,
    parseData,
    getAccountHistoryES,
    getAccountHistory,
    resolveBlockTimes,
    resolveAssets
};


/***/ }),

/***/ 2975:
/***/ (function(module, exports, __webpack_require__) {

const moment = __webpack_require__(808);

const utils = __webpack_require__(2976);

let assetMovements = {};
let runningBalance = {};
let movementTypes = {};
let accountBalances = {};
let transfers = {};
let fills = {};

function getFinalBalance(asset) {
    let sum = 0;
    if (!assetMovements[asset]) return 0;
    assetMovements[asset].forEach(movement => {
        sum += movement;
    });
    return sum;
}

function trackMovements(asset, amount, type, timestamp) {
    if (!assetMovements[asset]) assetMovements[asset] = [];
    if (!runningBalance[asset]) runningBalance[asset] = [];
    assetMovements[asset].push(amount);
    runningBalance[asset].push([type, amount, new Date(timestamp)]);
    if (!movementTypes[asset]) movementTypes[asset] = {};
    if (!movementTypes[asset][type])
        movementTypes[asset][type] = {
            deposit: [],
            withdrawal: []
        };
    movementTypes[asset][type][amount > 0 ? "deposit" : "withdrawal"].push(
        amount
    );
}

function addOutputEntry(
    output,
    type,
    buy,
    sell,
    fee,
    date,
    opType,
    comment,
    tradeGroup
) {
    if (!buy)
        buy = {
            amount: "",
            currency: ""
        };
    if (!sell)
        sell = {
            amount: "",
            currency: ""
        };
    if (!fee)
        fee = {
            amount: "",
            currency: ""
        };
    if (buy.amount) trackMovements(buy.currency, buy.amount, opType, date);
    if (sell.amount) trackMovements(sell.currency, -sell.amount, opType, date);
    if (fee.amount) trackMovements(fee.currency, -fee.amount, opType, date);
    output.push([
        type,
        utils.printAmount(buy),
        buy.currency,
        utils.printAmount(sell),
        sell.currency,
        utils.printAmount(fee),
        fee.currency,
        "BTS-DEX",
        tradeGroup || "",
        comment || "",
        date
    ]);
    return output;
}

function filterEntries(entries, FILTER_TYPE, FILTER_DATE) {
    if (!FILTER_TYPE && !FILTER_DATE) return entries;
    let entriesKeys = Object.keys(entries);

    for (var i = entriesKeys.length - 1; i >= 0; i--) {
        let trx_id = entriesKeys[i];
        let {timestamp, type, data} = entries[trx_id];

        if (!!FILTER_TYPE) {
            if (type !== FILTER_TYPE) {
                delete entries[trx_id];
                continue;
            }
        }

        if (!!FILTER_DATE) {
            if (new Date(timestamp).getTime() < FILTER_DATE) {
                delete entries[trx_id];
                continue;
            }
        }
    }

    console.log(
        `Removed ${entriesKeys.length -
            Object.keys(entries).length} entries by filtering`
    );
    return entries;
}

function groupEntries(entries) {
    let previous_fill = {};
    let recordKeys = Object.keys(entries);

    for (var i = recordKeys.length - 1; i >= 0; i--) {
        let trx_id = recordKeys[i];
        let {timestamp, type, data} = entries[trx_id];

        switch (type) {
            case "fill_order":
                let t1 = moment(timestamp);
                let marketId =
                    data.receives.asset_id + "_" + data.pays.asset_id;
                let previous = previous_fill[marketId];
                let t0 = !!previous ? moment(previous.timestamp) : null;

                if (
                    !!previous &&
                    t1.isSame(t0, "day") &&
                    previous.data.pays.asset_id === data.pays.asset_id &&
                    previous.data.receives.asset_id === data.receives.asset_id
                ) {
                    data.pays.amount =
                        parseInt(data.pays.amount, 10) +
                        parseInt(previous.data.pays.amount, 10);
                    data.receives.amount =
                        parseInt(data.receives.amount, 10) +
                        parseInt(previous.data.receives.amount, 10);
                    data.fee.amount =
                        parseInt(data.fee.amount, 10) +
                        parseInt(previous.data.fee.amount, 10);
                    entries[trx_id].data = data;
                    delete entries[previous.trx_id];
                }

                previous_fill[marketId] = {
                    data,
                    timestamp,
                    trx_id
                };
                break;

            default:
                break;
        }
    }

    console.log(
        `Removed ${recordKeys.length -
            Object.keys(entries).length} fill_order entries by grouping`
    );
    return entries;
}

function parseData(recordData, accountId, accountName) {
    let out = [];
    out.push([
        "Type",
        "Buy Amount",
        "Buy Currency",
        "Sell Amount",
        "Sell Currency",
        "Fee Amount",
        "Fee Currency",
        "Exchange",
        "Trade Group",
        "Comment",
        "Date"
    ]);
    let typeCounts = {};

    function incrementType(type) {
        if (!typeCounts[type]) typeCounts[type] = 0;
        typeCounts[type]++;
    }

    for (let trx_id of Object.keys(recordData)) {
        const {timestamp, type, data} = recordData[trx_id];
        let fee = null;

        switch (type) {
            case "vesting_balance_withdraw":
                let vestingFunds = utils.parseCurrency(data.amount);
                fee = utils.parseCurrency(data.fee);
                out = addOutputEntry(
                    out,
                    data.owner === "1.2.30665" && vestingFunds.amount > 10000
                        ? "Income"
                        : "Deposit",
                    vestingFunds,
                    null,
                    fee, // dev.bitsharesblocks
                    timestamp,
                    type,
                    `${accountName} : Vesting balance withdraw`
                );
                incrementType(type);
                break;

            case "balance_claim":
                let balanceClaimFunds = utils.parseCurrency(data.total_claimed);
                out = addOutputEntry(
                    out,
                    "Deposit",
                    balanceClaimFunds,
                    null,
                    null,
                    timestamp,
                    type,
                    `${accountName} : Balance claim`
                );
                incrementType(type);
                break;

            case "transfer":
                let funds = utils.parseCurrency(data.amount);
                fee = utils.parseCurrency(data.fee);

                if (data.to == accountId) {
                    // Funds coming in to the account
                    out = addOutputEntry(
                        out,
                        data.to === "1.2.391938" && data.from === "1.2.381086"
                            ? "Income"
                            : "Deposit",
                        funds,
                        null,
                        null, // pay.svk and bitshares-ui
                        timestamp,
                        type,
                        `${accountName} : From ${data.from}`
                    );
                } else {
                    out = addOutputEntry(
                        out,
                        "Withdrawal",
                        null,
                        funds,
                        fee,
                        timestamp,
                        type,
                        `${accountName}: To ${data.to}`
                    );
                }

                incrementType(type);
                break;

            case "fill_order":
                let soldFunds = utils.parseCurrency(data.pays);
                let boughtFunds = utils.parseCurrency(data.receives);
                fee = utils.parseCurrency(data.fee);

                if (fee.currency !== "BTS") {
                    if (boughtFunds.currency === fee.currency) {
                        boughtFunds.amount -= fee.amount;
                        fee.amount = 0;
                    } else if (soldFunds.currency === fee.currency) {
                        soldFunds.amount -= fee.amount;
                        fee.amount = 0;
                    }
                }

                out = addOutputEntry(
                    out,
                    "Trade",
                    boughtFunds,
                    soldFunds,
                    fee,
                    timestamp,
                    type
                );
                incrementType(type);
                break;

            case "asset_issue": {
                let issuedFunds = utils.parseCurrency(data.asset_to_issue);
                fee =
                    data.issuer === accountId
                        ? utils.parseCurrency(data.fee)
                        : null;

                if (data.issue_to_account === accountId) {
                    out = addOutputEntry(
                        out,
                        "Deposit",
                        issuedFunds,
                        null,
                        fee,
                        timestamp,
                        type,
                        `${accountName} : Issued to account`
                    );
                }

                incrementType(type);
                break;
            }

            case "account_update":
            case "proposal_create":
            case "proposal_update":
            case "account_whitelist":
            case "worker_create":
            case "limit_order_create":
            case "limit_order_cancel":
            case "call_order_update":
                fee = utils.parseCurrency(data.fee);

                if (fee.amount > 0) {
                    out = addOutputEntry(
                        out,
                        "Withdrawal",
                        null,
                        fee,
                        null,
                        timestamp,
                        type,
                        `${type} fee`
                    );
                    incrementType(type);
                }

                break;

            case "account_create":
                if (data.registrar === accountId) {
                    fee = utils.parseCurrency(data.fee);
                    out = addOutputEntry(
                        out,
                        "Withdrawal",
                        null,
                        fee,
                        null,
                        timestamp,
                        type,
                        `${type} fee`
                    );
                    incrementType(type);
                }

                break;

            case "asset_fund_fee_pool": {
                fee = utils.parseCurrency(data.fee);
                let fundFunds = utils.parseCurrency({
                    amount: data.amount,
                    asset_id: "1.3.0"
                });
                out = addOutputEntry(
                    out,
                    "Withdrawal",
                    null,
                    fundFunds,
                    fee,
                    timestamp,
                    type,
                    `${type}`
                );
                incrementType(type);
                break;
            }

            default: {
                console.log("Unhandled type:", type, data);
            }
        }
    }

    return out;
}

module.exports = {
    parseData,
    filterEntries,
    groupEntries
};


/***/ }),

/***/ 2976:
/***/ (function(module, exports, __webpack_require__) {

const {ChainStore} = __webpack_require__(432);

function precisionToRatio(p) {
    if (typeof p !== "number") throw new Error("Input must be a number");
    return Math.pow(10, p);
}

function parseCurrency(amount) {
    let asset = ChainStore.getAsset(amount.asset_id);
    if (asset) asset = asset.toJS();
    else {
        asset = {
            precision: 5
        };
    }
    let precisionRatio = precisionToRatio(asset.precision);
    let fullAmount = amount.amount / precisionRatio;
    return {
        amount: fullAmount,
        currency: asset.symbol,
        asset_id: amount.asset_id
    };
}

function printAmount(amount) {
    if (!amount.amount || !amount.currency) return "";
    let asset = ChainStore.getAsset(amount.asset_id);
    if (asset) asset = asset.toJS();
    else {
        asset = {
            precision: 5
        };
    }
    return amount.amount.toFixed(asset.precision);
}

function getIndex(str) {
    let pieces = str.split(".");
    return parseInt(pieces[2], 10);
}

module.exports = {
    parseCurrency,
    printAmount,
    getIndex
};


/***/ }),

/***/ 2977:
/***/ (function(module, exports, __webpack_require__) {

const config = __webpack_require__(2978);

const bts = __webpack_require__(501);

const {ChainTypes, ChainStore, FetchChain} = __webpack_require__(432);

const {operations} = ChainTypes;
const ops = Object.keys(operations);
let blockData = {};
let assetData = {};

function connect() {
    return new Promise(resolve => {
        bts.Apis.instance(config.apiNode, true)
            .init_promise.then(res => {
                ChainStore.init(false).then(() => {
                    resolve(res);
                });
            })
            .catch(err => {
                console.error("Error connection to node:", err);
            });
    });
}

function disconnect() {
    bts.Apis.instance().close();
}

function getUser(name) {
    return new Promise((resolve, reject) => {
        FetchChain("getAccount", name, undefined, {
            [name]: false
        })
            .then(result => {
                let account = result.toJS();
                if (!account.balances) account.balances = {};
                if (!account.call_orders) account.call_orders = [];
                let assets = Object.keys(account.balances); // account.call_orders.forEach(c => {
                //     let balanceIndex = account.balances.findIndex(b => {
                //         return b.asset_type === c.call_price.base.asset_id;
                //     });
                //     if(balanceIndex !== -1) {
                //         let newBalance = parseInt(account.balances[balanceIndex].balance, 10) +
                //         parseInt(c.collateral, 10);
                //         account.balances[balanceIndex].balance = newBalance;
                //     } else {
                //         assets.push(c.call_price.base.asset_id);
                //         account.balances.push({
                //             balance: c.collateral,
                //             asset_type: c.call_price.base.asset_id
                //         });
                //     }
                // });

                resolve({
                    accountId: account.id,
                    assets,
                    balances: account.balances
                });
            })
            .catch(reject);
    });
}

function getBlockTime(block) {
    return new Promise((resolve, reject) => {
        if (blockData[block]) return resolve(blockData[block]);
        bts.Apis.instance()
            .db_api()
            .exec("get_block", [block])
            .then(result => {
                blockData[block] = new Date(result.timestamp + "Z");
                resolve(blockData[block]);
            })
            .catch(reject);
    });
}

function getAssetData(asset) {
    return new Promise((resolve, reject) => {
        if (assetData[asset]) return resolve(assetData[asset]);
        FetchChain("getObject", asset, undefined, {
            [asset]: false
        })
            .then(result => {
                let a = result.toJS();
                assetData[asset] = {
                    symbol: a.symbol.replace(
                        /OPEN\.|BRIDGE\.|RUDEX\.|GDEX\.|BLOCK\./,
                        ""
                    ),
                    precision: a.precision
                };
                resolve(assetData[asset]);
            })
            .catch(err => {
                reject();
            });
    });
}

function resolveBlockTimes(operations) {
    return new Promise((resolve, reject) => {
        let promises = operations.map(op => {
            if (op.block_time)
                blockData[op.block_num] = new Date(op.block_time);
            return getBlockTime(op.block_num);
        });
        Promise.all(promises)
            .then(resolve)
            .catch(reject);
    });
}

function resolveAssets(operations, list) {
    return new Promise((resolve, reject) => {
        let promises = [];
        let assets = {};

        if (operations) {
            operations.forEach(record => {
                const type = ops[record.op[0]];

                switch (type) {
                    case "transfer": {
                        // console.log("transfer record.op:", record.op);
                        assets[record.op[1].amount.asset_id] = true;
                        assets[record.op[1].fee.asset_id] = true;
                        break;
                    }

                    case "fill_order": {
                        assets[record.op[1].pays.asset_id] = true;
                        assets[record.op[1].receives.asset_id] = true;
                        assets[record.op[1].fee.asset_id] = true;
                        break;
                    }

                    case "asset_issue": {
                        assets[record.op[1].asset_to_issue.asset_id] = true;
                        assets[record.op[1].fee.asset_id] = true;
                        break;
                    }

                    default: {
                        break;
                    }
                }
            });
        }

        if (list) {
            list.forEach(entry => {
                assets[entry] = true;
            });
        }

        Object.keys(assets).forEach(asset_id => {
            if (!assetData[asset_id] && !!asset_id) {
                promises.push(getAssetData(asset_id));
            }
        });
        Promise.all(promises)
            .then(resolve)
            .catch(reject);
    });
}

function getAsset(id) {
    return assetData[id];
}

function getBlock(block_num) {
    return blockData[block_num];
}

module.exports = {
    connect,
    disconnect,
    getUser,
    getBlockTime,
    getAssetData,
    resolveAssets,
    resolveBlockTimes,
    getAsset,
    getBlock
};


/***/ }),

/***/ 2978:
/***/ (function(module, exports) {

module.exports = {
    apiNode: "wss://eu.nodes.bitshares.ws",
    // wss://eu.nodes.bitshares.ws is an alternative
    useES: true,
    // use elastic search
    esNode: "https://wrapper.elasticsearch.bitshares.ws",
    botPaymentAccounts: []
};


/***/ }),

/***/ 2979:
/***/ (function(module, exports, __webpack_require__) {

const bts = __webpack_require__(501);

let fetchClient;

module.exports = function(isBrowser) {
    if (isBrowser) fetchClient = fetch;
    else {
        fetchClient = __webpack_require__(2980);
    }

    function getAccountHistoryES(
        account_id,
        limit,
        start,
        esNode = "https://eswrapper.bitshares.eu"
    ) {
        console.log(
            "query",
            `${esNode}/get_account_history?account_id=${account_id}&from_=${start}&size=${limit}&sort_by=block_data.block_time&type=data&agg_field=operation_type`
        );
        return new Promise((resolve, reject) => {
            fetchClient(
                `${esNode}/get_account_history?account_id=${account_id}&from_=${start}&size=${limit}&sort_by=block_data.block_time&type=data&agg_field=operation_type`
            )
                .then(res => res.json())
                .then(result => {
                    let ops = result.map(r => {
                        if ("amount_" in r.operation_history.op_object) {
                            r.operation_history.op_object.amount =
                                r.operation_history.op_object.amount_;
                        }

                        return {
                            id: r.account_history.operation_id,
                            op: r.operation_history.op_object,
                            operation_type: r.operation_type,
                            result: JSON.parse(
                                r.operation_history.operation_result
                            ),
                            block_num: r.block_data.block_num,
                            block_time: r.block_data.block_time + "Z"
                        };
                    });
                    resolve(ops);
                })
                .catch(err => {
                    console.log("getAccountHistory errror:", err);
                    resolve([]);
                });
        });
    }

    function getAccountHistory(account_id, stop, limit, start) {
        return new Promise((resolve, reject) => {
            bts.Apis.instance()
                .history_api()
                .exec("get_account_history", [account_id, stop, limit, start])
                .then(operations => {
                    resolve(operations);
                })
                .catch(reject);
        });
    }

    return {
        getAccountHistory,
        getAccountHistoryES
    };
};


/***/ }),

/***/ 2980:
/***/ (function(module, exports) {

// empty (null-loader)

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35hY2NvdW50fmRhc2hib2FyZC1hY2NvdW50c35kZXBvc2l0LXdpdGhkcmF3LjhkYzkzNWM5OGVhZjZlOWQxNjU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvZXMvc3JjL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYml0c2hhcmVzLXJlcG9ydC9lcy9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvZXMvc3JjL2FwaS9ub2RlQXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvZXMvc3JjL2FwaS9nZXRBY2NvdW50SGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYml0c2hhcmVzLXJlcG9ydC9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9saWIvaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtncm91cEVudHJpZXMsIHBhcnNlRGF0YX0gPSByZXF1aXJlKFwiLi9zcmMvcGFyc2VyXCIpO1xyXG5cclxuY29uc3Qge3Jlc29sdmVCbG9ja1RpbWVzLCByZXNvbHZlQXNzZXRzfSA9IHJlcXVpcmUoXCIuL3NyYy9hcGkvbm9kZUFwaVwiKTtcclxuXHJcbmNvbnN0IHtcclxuICAgIGdldEFjY291bnRIaXN0b3J5RVMsXHJcbiAgICBnZXRBY2NvdW50SGlzdG9yeVxyXG59ID0gcmVxdWlyZShcIi4vc3JjL2FwaS9nZXRBY2NvdW50SGlzdG9yeVwiKSh0cnVlKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZ3JvdXBFbnRyaWVzLFxyXG4gICAgcGFyc2VEYXRhLFxyXG4gICAgZ2V0QWNjb3VudEhpc3RvcnlFUyxcclxuICAgIGdldEFjY291bnRIaXN0b3J5LFxyXG4gICAgcmVzb2x2ZUJsb2NrVGltZXMsXHJcbiAgICByZXNvbHZlQXNzZXRzXHJcbn07XHJcbiIsImNvbnN0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XHJcblxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5cclxubGV0IGFzc2V0TW92ZW1lbnRzID0ge307XHJcbmxldCBydW5uaW5nQmFsYW5jZSA9IHt9O1xyXG5sZXQgbW92ZW1lbnRUeXBlcyA9IHt9O1xyXG5sZXQgYWNjb3VudEJhbGFuY2VzID0ge307XHJcbmxldCB0cmFuc2ZlcnMgPSB7fTtcclxubGV0IGZpbGxzID0ge307XHJcblxyXG5mdW5jdGlvbiBnZXRGaW5hbEJhbGFuY2UoYXNzZXQpIHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgaWYgKCFhc3NldE1vdmVtZW50c1thc3NldF0pIHJldHVybiAwO1xyXG4gICAgYXNzZXRNb3ZlbWVudHNbYXNzZXRdLmZvckVhY2gobW92ZW1lbnQgPT4ge1xyXG4gICAgICAgIHN1bSArPSBtb3ZlbWVudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN1bTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJhY2tNb3ZlbWVudHMoYXNzZXQsIGFtb3VudCwgdHlwZSwgdGltZXN0YW1wKSB7XHJcbiAgICBpZiAoIWFzc2V0TW92ZW1lbnRzW2Fzc2V0XSkgYXNzZXRNb3ZlbWVudHNbYXNzZXRdID0gW107XHJcbiAgICBpZiAoIXJ1bm5pbmdCYWxhbmNlW2Fzc2V0XSkgcnVubmluZ0JhbGFuY2VbYXNzZXRdID0gW107XHJcbiAgICBhc3NldE1vdmVtZW50c1thc3NldF0ucHVzaChhbW91bnQpO1xyXG4gICAgcnVubmluZ0JhbGFuY2VbYXNzZXRdLnB1c2goW3R5cGUsIGFtb3VudCwgbmV3IERhdGUodGltZXN0YW1wKV0pO1xyXG4gICAgaWYgKCFtb3ZlbWVudFR5cGVzW2Fzc2V0XSkgbW92ZW1lbnRUeXBlc1thc3NldF0gPSB7fTtcclxuICAgIGlmICghbW92ZW1lbnRUeXBlc1thc3NldF1bdHlwZV0pXHJcbiAgICAgICAgbW92ZW1lbnRUeXBlc1thc3NldF1bdHlwZV0gPSB7XHJcbiAgICAgICAgICAgIGRlcG9zaXQ6IFtdLFxyXG4gICAgICAgICAgICB3aXRoZHJhd2FsOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICBtb3ZlbWVudFR5cGVzW2Fzc2V0XVt0eXBlXVthbW91bnQgPiAwID8gXCJkZXBvc2l0XCIgOiBcIndpdGhkcmF3YWxcIl0ucHVzaChcclxuICAgICAgICBhbW91bnRcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE91dHB1dEVudHJ5KFxyXG4gICAgb3V0cHV0LFxyXG4gICAgdHlwZSxcclxuICAgIGJ1eSxcclxuICAgIHNlbGwsXHJcbiAgICBmZWUsXHJcbiAgICBkYXRlLFxyXG4gICAgb3BUeXBlLFxyXG4gICAgY29tbWVudCxcclxuICAgIHRyYWRlR3JvdXBcclxuKSB7XHJcbiAgICBpZiAoIWJ1eSlcclxuICAgICAgICBidXkgPSB7XHJcbiAgICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgY3VycmVuY3k6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgaWYgKCFzZWxsKVxyXG4gICAgICAgIHNlbGwgPSB7XHJcbiAgICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgY3VycmVuY3k6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgaWYgKCFmZWUpXHJcbiAgICAgICAgZmVlID0ge1xyXG4gICAgICAgICAgICBhbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgIGlmIChidXkuYW1vdW50KSB0cmFja01vdmVtZW50cyhidXkuY3VycmVuY3ksIGJ1eS5hbW91bnQsIG9wVHlwZSwgZGF0ZSk7XHJcbiAgICBpZiAoc2VsbC5hbW91bnQpIHRyYWNrTW92ZW1lbnRzKHNlbGwuY3VycmVuY3ksIC1zZWxsLmFtb3VudCwgb3BUeXBlLCBkYXRlKTtcclxuICAgIGlmIChmZWUuYW1vdW50KSB0cmFja01vdmVtZW50cyhmZWUuY3VycmVuY3ksIC1mZWUuYW1vdW50LCBvcFR5cGUsIGRhdGUpO1xyXG4gICAgb3V0cHV0LnB1c2goW1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgdXRpbHMucHJpbnRBbW91bnQoYnV5KSxcclxuICAgICAgICBidXkuY3VycmVuY3ksXHJcbiAgICAgICAgdXRpbHMucHJpbnRBbW91bnQoc2VsbCksXHJcbiAgICAgICAgc2VsbC5jdXJyZW5jeSxcclxuICAgICAgICB1dGlscy5wcmludEFtb3VudChmZWUpLFxyXG4gICAgICAgIGZlZS5jdXJyZW5jeSxcclxuICAgICAgICBcIkJUUy1ERVhcIixcclxuICAgICAgICB0cmFkZUdyb3VwIHx8IFwiXCIsXHJcbiAgICAgICAgY29tbWVudCB8fCBcIlwiLFxyXG4gICAgICAgIGRhdGVcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyRW50cmllcyhlbnRyaWVzLCBGSUxURVJfVFlQRSwgRklMVEVSX0RBVEUpIHtcclxuICAgIGlmICghRklMVEVSX1RZUEUgJiYgIUZJTFRFUl9EQVRFKSByZXR1cm4gZW50cmllcztcclxuICAgIGxldCBlbnRyaWVzS2V5cyA9IE9iamVjdC5rZXlzKGVudHJpZXMpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSBlbnRyaWVzS2V5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGxldCB0cnhfaWQgPSBlbnRyaWVzS2V5c1tpXTtcclxuICAgICAgICBsZXQge3RpbWVzdGFtcCwgdHlwZSwgZGF0YX0gPSBlbnRyaWVzW3RyeF9pZF07XHJcblxyXG4gICAgICAgIGlmICghIUZJTFRFUl9UWVBFKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBGSUxURVJfVFlQRSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGVudHJpZXNbdHJ4X2lkXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFGSUxURVJfREFURSkge1xyXG4gICAgICAgICAgICBpZiAobmV3IERhdGUodGltZXN0YW1wKS5nZXRUaW1lKCkgPCBGSUxURVJfREFURSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGVudHJpZXNbdHJ4X2lkXTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGBSZW1vdmVkICR7ZW50cmllc0tleXMubGVuZ3RoIC1cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW50cmllcykubGVuZ3RofSBlbnRyaWVzIGJ5IGZpbHRlcmluZ2BcclxuICAgICk7XHJcbiAgICByZXR1cm4gZW50cmllcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ3JvdXBFbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGxldCBwcmV2aW91c19maWxsID0ge307XHJcbiAgICBsZXQgcmVjb3JkS2V5cyA9IE9iamVjdC5rZXlzKGVudHJpZXMpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSByZWNvcmRLZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgbGV0IHRyeF9pZCA9IHJlY29yZEtleXNbaV07XHJcbiAgICAgICAgbGV0IHt0aW1lc3RhbXAsIHR5cGUsIGRhdGF9ID0gZW50cmllc1t0cnhfaWRdO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImZpbGxfb3JkZXJcIjpcclxuICAgICAgICAgICAgICAgIGxldCB0MSA9IG1vbWVudCh0aW1lc3RhbXApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcmtldElkID1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnJlY2VpdmVzLmFzc2V0X2lkICsgXCJfXCIgKyBkYXRhLnBheXMuYXNzZXRfaWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXMgPSBwcmV2aW91c19maWxsW21hcmtldElkXTtcclxuICAgICAgICAgICAgICAgIGxldCB0MCA9ICEhcHJldmlvdXMgPyBtb21lbnQocHJldmlvdXMudGltZXN0YW1wKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICEhcHJldmlvdXMgJiZcclxuICAgICAgICAgICAgICAgICAgICB0MS5pc1NhbWUodDAsIFwiZGF5XCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMuZGF0YS5wYXlzLmFzc2V0X2lkID09PSBkYXRhLnBheXMuYXNzZXRfaWQgJiZcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5kYXRhLnJlY2VpdmVzLmFzc2V0X2lkID09PSBkYXRhLnJlY2VpdmVzLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnBheXMuYW1vdW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5wYXlzLmFtb3VudCwgMTApICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocHJldmlvdXMuZGF0YS5wYXlzLmFtb3VudCwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmVjZWl2ZXMuYW1vdW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5yZWNlaXZlcy5hbW91bnQsIDEwKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHByZXZpb3VzLmRhdGEucmVjZWl2ZXMuYW1vdW50LCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5mZWUuYW1vdW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoZGF0YS5mZWUuYW1vdW50LCAxMCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChwcmV2aW91cy5kYXRhLmZlZS5hbW91bnQsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzW3RyeF9pZF0uZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVudHJpZXNbcHJldmlvdXMudHJ4X2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c19maWxsW21hcmtldElkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0cnhfaWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYFJlbW92ZWQgJHtyZWNvcmRLZXlzLmxlbmd0aCAtXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVudHJpZXMpLmxlbmd0aH0gZmlsbF9vcmRlciBlbnRyaWVzIGJ5IGdyb3VwaW5nYFxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbnRyaWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZURhdGEocmVjb3JkRGF0YSwgYWNjb3VudElkLCBhY2NvdW50TmFtZSkge1xyXG4gICAgbGV0IG91dCA9IFtdO1xyXG4gICAgb3V0LnB1c2goW1xyXG4gICAgICAgIFwiVHlwZVwiLFxyXG4gICAgICAgIFwiQnV5IEFtb3VudFwiLFxyXG4gICAgICAgIFwiQnV5IEN1cnJlbmN5XCIsXHJcbiAgICAgICAgXCJTZWxsIEFtb3VudFwiLFxyXG4gICAgICAgIFwiU2VsbCBDdXJyZW5jeVwiLFxyXG4gICAgICAgIFwiRmVlIEFtb3VudFwiLFxyXG4gICAgICAgIFwiRmVlIEN1cnJlbmN5XCIsXHJcbiAgICAgICAgXCJFeGNoYW5nZVwiLFxyXG4gICAgICAgIFwiVHJhZGUgR3JvdXBcIixcclxuICAgICAgICBcIkNvbW1lbnRcIixcclxuICAgICAgICBcIkRhdGVcIlxyXG4gICAgXSk7XHJcbiAgICBsZXQgdHlwZUNvdW50cyA9IHt9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGluY3JlbWVudFR5cGUodHlwZSkge1xyXG4gICAgICAgIGlmICghdHlwZUNvdW50c1t0eXBlXSkgdHlwZUNvdW50c1t0eXBlXSA9IDA7XHJcbiAgICAgICAgdHlwZUNvdW50c1t0eXBlXSsrO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IHRyeF9pZCBvZiBPYmplY3Qua2V5cyhyZWNvcmREYXRhKSkge1xyXG4gICAgICAgIGNvbnN0IHt0aW1lc3RhbXAsIHR5cGUsIGRhdGF9ID0gcmVjb3JkRGF0YVt0cnhfaWRdO1xyXG4gICAgICAgIGxldCBmZWUgPSBudWxsO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInZlc3RpbmdfYmFsYW5jZV93aXRoZHJhd1wiOlxyXG4gICAgICAgICAgICAgICAgbGV0IHZlc3RpbmdGdW5kcyA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XHJcbiAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcclxuICAgICAgICAgICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5vd25lciA9PT0gXCIxLjIuMzA2NjVcIiAmJiB2ZXN0aW5nRnVuZHMuYW1vdW50ID4gMTAwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkluY29tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJEZXBvc2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmVzdGluZ0Z1bmRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVlLCAvLyBkZXYuYml0c2hhcmVzYmxvY2tzXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7YWNjb3VudE5hbWV9IDogVmVzdGluZyBiYWxhbmNlIHdpdGhkcmF3YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJiYWxhbmNlX2NsYWltXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZUNsYWltRnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEudG90YWxfY2xhaW1lZCk7XHJcbiAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcclxuICAgICAgICAgICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJEZXBvc2l0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZUNsYWltRnVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGAke2FjY291bnROYW1lfSA6IEJhbGFuY2UgY2xhaW1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInRyYW5zZmVyXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgZnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIGZlZSA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5mZWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnRvID09IGFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZ1bmRzIGNvbWluZyBpbiB0byB0aGUgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudG8gPT09IFwiMS4yLjM5MTkzOFwiICYmIGRhdGEuZnJvbSA9PT0gXCIxLjIuMzgxMDg2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJJbmNvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkRlcG9zaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsIC8vIHBheS5zdmsgYW5kIGJpdHNoYXJlcy11aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2FjY291bnROYW1lfSA6IEZyb20gJHtkYXRhLmZyb219YFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2l0aGRyYXdhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2FjY291bnROYW1lfTogVG8gJHtkYXRhLnRvfWBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJmaWxsX29yZGVyXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgc29sZEZ1bmRzID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLnBheXMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvdWdodEZ1bmRzID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLnJlY2VpdmVzKTtcclxuICAgICAgICAgICAgICAgIGZlZSA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5mZWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmZWUuY3VycmVuY3kgIT09IFwiQlRTXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYm91Z2h0RnVuZHMuY3VycmVuY3kgPT09IGZlZS5jdXJyZW5jeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3VnaHRGdW5kcy5hbW91bnQgLT0gZmVlLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLmFtb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzb2xkRnVuZHMuY3VycmVuY3kgPT09IGZlZS5jdXJyZW5jeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb2xkRnVuZHMuYW1vdW50IC09IGZlZS5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZS5hbW91bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcclxuICAgICAgICAgICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUcmFkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdWdodEZ1bmRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvbGRGdW5kcyxcclxuICAgICAgICAgICAgICAgICAgICBmZWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRUeXBlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYXNzZXRfaXNzdWVcIjoge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzc3VlZEZ1bmRzID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmFzc2V0X3RvX2lzc3VlKTtcclxuICAgICAgICAgICAgICAgIGZlZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pc3N1ZXIgPT09IGFjY291bnRJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5mZWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pc3N1ZV90b19hY2NvdW50ID09PSBhY2NvdW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkRlcG9zaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVkRnVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHthY2NvdW50TmFtZX0gOiBJc3N1ZWQgdG8gYWNjb3VudGBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFjY291bnRfdXBkYXRlXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcm9wb3NhbF9jcmVhdGVcIjpcclxuICAgICAgICAgICAgY2FzZSBcInByb3Bvc2FsX3VwZGF0ZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF93aGl0ZWxpc3RcIjpcclxuICAgICAgICAgICAgY2FzZSBcIndvcmtlcl9jcmVhdGVcIjpcclxuICAgICAgICAgICAgY2FzZSBcImxpbWl0X29yZGVyX2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwibGltaXRfb3JkZXJfY2FuY2VsXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYWxsX29yZGVyX3VwZGF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZlZS5hbW91bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gYWRkT3V0cHV0RW50cnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXaXRoZHJhd2FsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0eXBlfSBmZWVgXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnRUeXBlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFjY291bnRfY3JlYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZWdpc3RyYXIgPT09IGFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZlZSA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5mZWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2l0aGRyYXdhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dHlwZX0gZmVlYFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9mdW5kX2ZlZV9wb29sXCI6IHtcclxuICAgICAgICAgICAgICAgIGZlZSA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5mZWUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZ1bmRGdW5kcyA9IHV0aWxzLnBhcnNlQ3VycmVuY3koe1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRfaWQ6IFwiMS4zLjBcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcclxuICAgICAgICAgICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXaXRoZHJhd2FsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBmdW5kRnVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGAke3R5cGV9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmhhbmRsZWQgdHlwZTpcIiwgdHlwZSwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwYXJzZURhdGEsXHJcbiAgICBmaWx0ZXJFbnRyaWVzLFxyXG4gICAgZ3JvdXBFbnRyaWVzXHJcbn07XHJcbiIsImNvbnN0IHtDaGFpblN0b3JlfSA9IHJlcXVpcmUoXCJiaXRzaGFyZXNqc1wiKTtcclxuXHJcbmZ1bmN0aW9uIHByZWNpc2lvblRvUmF0aW8ocCkge1xyXG4gICAgaWYgKHR5cGVvZiBwICE9PSBcIm51bWJlclwiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBtdXN0IGJlIGEgbnVtYmVyXCIpO1xyXG4gICAgcmV0dXJuIE1hdGgucG93KDEwLCBwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VDdXJyZW5jeShhbW91bnQpIHtcclxuICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYW1vdW50LmFzc2V0X2lkKTtcclxuICAgIGlmIChhc3NldCkgYXNzZXQgPSBhc3NldC50b0pTKCk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhc3NldCA9IHtcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiA1XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGxldCBwcmVjaXNpb25SYXRpbyA9IHByZWNpc2lvblRvUmF0aW8oYXNzZXQucHJlY2lzaW9uKTtcclxuICAgIGxldCBmdWxsQW1vdW50ID0gYW1vdW50LmFtb3VudCAvIHByZWNpc2lvblJhdGlvO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhbW91bnQ6IGZ1bGxBbW91bnQsXHJcbiAgICAgICAgY3VycmVuY3k6IGFzc2V0LnN5bWJvbCxcclxuICAgICAgICBhc3NldF9pZDogYW1vdW50LmFzc2V0X2lkXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludEFtb3VudChhbW91bnQpIHtcclxuICAgIGlmICghYW1vdW50LmFtb3VudCB8fCAhYW1vdW50LmN1cnJlbmN5KSByZXR1cm4gXCJcIjtcclxuICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYW1vdW50LmFzc2V0X2lkKTtcclxuICAgIGlmIChhc3NldCkgYXNzZXQgPSBhc3NldC50b0pTKCk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhc3NldCA9IHtcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiA1XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBhbW91bnQuYW1vdW50LnRvRml4ZWQoYXNzZXQucHJlY2lzaW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW5kZXgoc3RyKSB7XHJcbiAgICBsZXQgcGllY2VzID0gc3RyLnNwbGl0KFwiLlwiKTtcclxuICAgIHJldHVybiBwYXJzZUludChwaWVjZXNbMl0sIDEwKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwYXJzZUN1cnJlbmN5LFxyXG4gICAgcHJpbnRBbW91bnQsXHJcbiAgICBnZXRJbmRleFxyXG59O1xyXG4iLCJjb25zdCBjb25maWcgPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpO1xyXG5cclxuY29uc3QgYnRzID0gcmVxdWlyZShcImJpdHNoYXJlc2pzLXdzXCIpO1xyXG5cclxuY29uc3Qge0NoYWluVHlwZXMsIENoYWluU3RvcmUsIEZldGNoQ2hhaW59ID0gcmVxdWlyZShcImJpdHNoYXJlc2pzXCIpO1xyXG5cclxuY29uc3Qge29wZXJhdGlvbnN9ID0gQ2hhaW5UeXBlcztcclxuY29uc3Qgb3BzID0gT2JqZWN0LmtleXMob3BlcmF0aW9ucyk7XHJcbmxldCBibG9ja0RhdGEgPSB7fTtcclxubGV0IGFzc2V0RGF0YSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBidHMuQXBpcy5pbnN0YW5jZShjb25maWcuYXBpTm9kZSwgdHJ1ZSlcclxuICAgICAgICAgICAgLmluaXRfcHJvbWlzZS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBDaGFpblN0b3JlLmluaXQoZmFsc2UpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW9uIHRvIG5vZGU6XCIsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XHJcbiAgICBidHMuQXBpcy5pbnN0YW5jZSgpLmNsb3NlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXIobmFtZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBGZXRjaENoYWluKFwiZ2V0QWNjb3VudFwiLCBuYW1lLCB1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgW25hbWVdOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudCA9IHJlc3VsdC50b0pTKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQuYmFsYW5jZXMpIGFjY291bnQuYmFsYW5jZXMgPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudC5jYWxsX29yZGVycykgYWNjb3VudC5jYWxsX29yZGVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0cyA9IE9iamVjdC5rZXlzKGFjY291bnQuYmFsYW5jZXMpOyAvLyBhY2NvdW50LmNhbGxfb3JkZXJzLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGJhbGFuY2VJbmRleCA9IGFjY291bnQuYmFsYW5jZXMuZmluZEluZGV4KGIgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gYi5hc3NldF90eXBlID09PSBjLmNhbGxfcHJpY2UuYmFzZS5hc3NldF9pZDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZihiYWxhbmNlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBuZXdCYWxhbmNlID0gcGFyc2VJbnQoYWNjb3VudC5iYWxhbmNlc1tiYWxhbmNlSW5kZXhdLmJhbGFuY2UsIDEwKSArXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBhcnNlSW50KGMuY29sbGF0ZXJhbCwgMTApO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBhY2NvdW50LmJhbGFuY2VzW2JhbGFuY2VJbmRleF0uYmFsYW5jZSA9IG5ld0JhbGFuY2U7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYXNzZXRzLnB1c2goYy5jYWxsX3ByaWNlLmJhc2UuYXNzZXRfaWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBhY2NvdW50LmJhbGFuY2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYmFsYW5jZTogYy5jb2xsYXRlcmFsLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYXNzZXRfdHlwZTogYy5jYWxsX3ByaWNlLmJhc2UuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBhY2NvdW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cyxcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlczogYWNjb3VudC5iYWxhbmNlc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJsb2NrVGltZShibG9jaykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBpZiAoYmxvY2tEYXRhW2Jsb2NrXSkgcmV0dXJuIHJlc29sdmUoYmxvY2tEYXRhW2Jsb2NrXSk7XHJcbiAgICAgICAgYnRzLkFwaXMuaW5zdGFuY2UoKVxyXG4gICAgICAgICAgICAuZGJfYXBpKClcclxuICAgICAgICAgICAgLmV4ZWMoXCJnZXRfYmxvY2tcIiwgW2Jsb2NrXSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGJsb2NrRGF0YVtibG9ja10gPSBuZXcgRGF0ZShyZXN1bHQudGltZXN0YW1wICsgXCJaXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShibG9ja0RhdGFbYmxvY2tdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXNzZXREYXRhKGFzc2V0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChhc3NldERhdGFbYXNzZXRdKSByZXR1cm4gcmVzb2x2ZShhc3NldERhdGFbYXNzZXRdKTtcclxuICAgICAgICBGZXRjaENoYWluKFwiZ2V0T2JqZWN0XCIsIGFzc2V0LCB1bmRlZmluZWQsIHtcclxuICAgICAgICAgICAgW2Fzc2V0XTogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGEgPSByZXN1bHQudG9KUygpO1xyXG4gICAgICAgICAgICAgICAgYXNzZXREYXRhW2Fzc2V0XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IGEuc3ltYm9sLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC9PUEVOXFwufEJSSURHRVxcLnxSVURFWFxcLnxHREVYXFwufEJMT0NLXFwuLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uOiBhLnByZWNpc2lvblxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoYXNzZXREYXRhW2Fzc2V0XSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVCbG9ja1RpbWVzKG9wZXJhdGlvbnMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gb3BlcmF0aW9ucy5tYXAob3AgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3AuYmxvY2tfdGltZSlcclxuICAgICAgICAgICAgICAgIGJsb2NrRGF0YVtvcC5ibG9ja19udW1dID0gbmV3IERhdGUob3AuYmxvY2tfdGltZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRCbG9ja1RpbWUob3AuYmxvY2tfbnVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcylcclxuICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzb2x2ZUFzc2V0cyhvcGVyYXRpb25zLCBsaXN0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGxldCBhc3NldHMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKG9wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgb3BlcmF0aW9ucy5mb3JFYWNoKHJlY29yZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gb3BzW3JlY29yZC5vcFswXV07XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyYW5zZmVyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0cmFuc2ZlciByZWNvcmQub3A6XCIsIHJlY29yZC5vcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0uYW1vdW50LmFzc2V0X2lkXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0uZmVlLmFzc2V0X2lkXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZpbGxfb3JkZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHNbcmVjb3JkLm9wWzFdLnBheXMuYXNzZXRfaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3JlY29yZC5vcFsxXS5yZWNlaXZlcy5hc3NldF9pZF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHNbcmVjb3JkLm9wWzFdLmZlZS5hc3NldF9pZF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhc3NldF9pc3N1ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0uYXNzZXRfdG9faXNzdWUuYXNzZXRfaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3JlY29yZC5vcFsxXS5mZWUuYXNzZXRfaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGlzdCkge1xyXG4gICAgICAgICAgICBsaXN0LmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRzW2VudHJ5XSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMoYXNzZXRzKS5mb3JFYWNoKGFzc2V0X2lkID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhc3NldERhdGFbYXNzZXRfaWRdICYmICEhYXNzZXRfaWQpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goZ2V0QXNzZXREYXRhKGFzc2V0X2lkKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcylcclxuICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXNzZXQoaWQpIHtcclxuICAgIHJldHVybiBhc3NldERhdGFbaWRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCbG9jayhibG9ja19udW0pIHtcclxuICAgIHJldHVybiBibG9ja0RhdGFbYmxvY2tfbnVtXTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBjb25uZWN0LFxyXG4gICAgZGlzY29ubmVjdCxcclxuICAgIGdldFVzZXIsXHJcbiAgICBnZXRCbG9ja1RpbWUsXHJcbiAgICBnZXRBc3NldERhdGEsXHJcbiAgICByZXNvbHZlQXNzZXRzLFxyXG4gICAgcmVzb2x2ZUJsb2NrVGltZXMsXHJcbiAgICBnZXRBc3NldCxcclxuICAgIGdldEJsb2NrXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgYXBpTm9kZTogXCJ3c3M6Ly9ldS5ub2Rlcy5iaXRzaGFyZXMud3NcIixcclxuICAgIC8vIHdzczovL2V1Lm5vZGVzLmJpdHNoYXJlcy53cyBpcyBhbiBhbHRlcm5hdGl2ZVxyXG4gICAgdXNlRVM6IHRydWUsXHJcbiAgICAvLyB1c2UgZWxhc3RpYyBzZWFyY2hcclxuICAgIGVzTm9kZTogXCJodHRwczovL3dyYXBwZXIuZWxhc3RpY3NlYXJjaC5iaXRzaGFyZXMud3NcIixcclxuICAgIGJvdFBheW1lbnRBY2NvdW50czogW11cclxufTtcclxuIiwiY29uc3QgYnRzID0gcmVxdWlyZShcImJpdHNoYXJlc2pzLXdzXCIpO1xyXG5cclxubGV0IGZldGNoQ2xpZW50O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc0Jyb3dzZXIpIHtcclxuICAgIGlmIChpc0Jyb3dzZXIpIGZldGNoQ2xpZW50ID0gZmV0Y2g7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmZXRjaENsaWVudCA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFjY291bnRIaXN0b3J5RVMoXHJcbiAgICAgICAgYWNjb3VudF9pZCxcclxuICAgICAgICBsaW1pdCxcclxuICAgICAgICBzdGFydCxcclxuICAgICAgICBlc05vZGUgPSBcImh0dHBzOi8vZXN3cmFwcGVyLmJpdHNoYXJlcy5ldVwiXHJcbiAgICApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgXCJxdWVyeVwiLFxyXG4gICAgICAgICAgICBgJHtlc05vZGV9L2dldF9hY2NvdW50X2hpc3Rvcnk/YWNjb3VudF9pZD0ke2FjY291bnRfaWR9JmZyb21fPSR7c3RhcnR9JnNpemU9JHtsaW1pdH0mc29ydF9ieT1ibG9ja19kYXRhLmJsb2NrX3RpbWUmdHlwZT1kYXRhJmFnZ19maWVsZD1vcGVyYXRpb25fdHlwZWBcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoQ2xpZW50KFxyXG4gICAgICAgICAgICAgICAgYCR7ZXNOb2RlfS9nZXRfYWNjb3VudF9oaXN0b3J5P2FjY291bnRfaWQ9JHthY2NvdW50X2lkfSZmcm9tXz0ke3N0YXJ0fSZzaXplPSR7bGltaXR9JnNvcnRfYnk9YmxvY2tfZGF0YS5ibG9ja190aW1lJnR5cGU9ZGF0YSZhZ2dfZmllbGQ9b3BlcmF0aW9uX3R5cGVgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3BzID0gcmVzdWx0Lm1hcChyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiYW1vdW50X1wiIGluIHIub3BlcmF0aW9uX2hpc3Rvcnkub3Bfb2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLm9wZXJhdGlvbl9oaXN0b3J5Lm9wX29iamVjdC5hbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIub3BlcmF0aW9uX2hpc3Rvcnkub3Bfb2JqZWN0LmFtb3VudF87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogci5hY2NvdW50X2hpc3Rvcnkub3BlcmF0aW9uX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A6IHIub3BlcmF0aW9uX2hpc3Rvcnkub3Bfb2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uX3R5cGU6IHIub3BlcmF0aW9uX3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IEpTT04ucGFyc2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5vcGVyYXRpb25faGlzdG9yeS5vcGVyYXRpb25fcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfbnVtOiByLmJsb2NrX2RhdGEuYmxvY2tfbnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZTogci5ibG9ja19kYXRhLmJsb2NrX3RpbWUgKyBcIlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3BzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEFjY291bnRIaXN0b3J5IGVycnJvcjpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFjY291bnRIaXN0b3J5KGFjY291bnRfaWQsIHN0b3AsIGxpbWl0LCBzdGFydCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGJ0cy5BcGlzLmluc3RhbmNlKClcclxuICAgICAgICAgICAgICAgIC5oaXN0b3J5X2FwaSgpXHJcbiAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9hY2NvdW50X2hpc3RvcnlcIiwgW2FjY291bnRfaWQsIHN0b3AsIGxpbWl0LCBzdGFydF0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihvcGVyYXRpb25zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9wZXJhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0QWNjb3VudEhpc3RvcnksXHJcbiAgICAgICAgZ2V0QWNjb3VudEhpc3RvcnlFU1xyXG4gICAgfTtcclxufTtcclxuIiwiLy8gZW1wdHkgKG51bGwtbG9hZGVyKSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9