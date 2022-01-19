(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[33],{

/***/ 2818:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {groupEntries, parseData} = __webpack_require__(2819);

const {resolveBlockTimes, resolveAssets} = __webpack_require__(2821);

const {
    getAccountHistoryES,
    getAccountHistory
} = __webpack_require__(2823)(true);

module.exports = {
    groupEntries,
    parseData,
    getAccountHistoryES,
    getAccountHistory,
    resolveBlockTimes,
    resolveAssets
};


/***/ }),

/***/ 2823:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const bts = __webpack_require__(510);

let fetchClient;

module.exports = function(isBrowser) {
    if (isBrowser) fetchClient = fetch;
    else {
        fetchClient = __webpack_require__(2824);
    }

    function getAccountHistoryES(
        account_id,
        limit,
        start,
        esNode = "https://es-wrapper.gph.ai"
    ) {
        console.log(
            "query",
            `${esNode}/es/account_history?account_id=${account_id}&from_=${start}&size=${limit}&sort_by=block_data.block_time&type=data&agg_field=operation_type`
        );
        return new Promise((resolve, reject) => {
            fetchClient(
                `${esNode}/es/account_history?account_id=${account_id}&from_=${start}&size=${limit}&sort_by=block_data.block_time&type=data&agg_field=operation_type`
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

/***/ 2821:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const config = __webpack_require__(2822);

const bts = __webpack_require__(510);

const {ChainTypes, ChainStore, FetchChain} = __webpack_require__(426);

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

/***/ 2822:
/***/ ((module) => {

module.exports = {
    apiNode: "wss://node.gph.ai",
    useES: true,
    // use elastic search
    esNode: "https://es-wrapper.gph.ai",
    botPaymentAccounts: []
};


/***/ }),

/***/ 2819:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const moment = __webpack_require__(912);

const utils = __webpack_require__(2820);

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
        "GPH-DEX",
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

/***/ 2820:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {ChainStore} = __webpack_require__(426);

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

/***/ 2824:
/***/ (() => {



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuNjU1Y2IwMzZjYjA2Mzk3ZDFkODAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25ZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL2luZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL3NyYy9hcGkvZ2V0QWNjb3VudEhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvZXMvc3JjL2FwaS9ub2RlQXBpLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvZXMvc3JjL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvYml0c2hhcmVzLXJlcG9ydC9lcy9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvbGliL2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Z3JvdXBFbnRyaWVzLCBwYXJzZURhdGF9ID0gcmVxdWlyZShcIi4vc3JjL3BhcnNlclwiKTtcclxuXHJcbmNvbnN0IHtyZXNvbHZlQmxvY2tUaW1lcywgcmVzb2x2ZUFzc2V0c30gPSByZXF1aXJlKFwiLi9zcmMvYXBpL25vZGVBcGlcIik7XHJcblxyXG5jb25zdCB7XHJcbiAgICBnZXRBY2NvdW50SGlzdG9yeUVTLFxyXG4gICAgZ2V0QWNjb3VudEhpc3RvcnlcclxufSA9IHJlcXVpcmUoXCIuL3NyYy9hcGkvZ2V0QWNjb3VudEhpc3RvcnlcIikodHJ1ZSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGdyb3VwRW50cmllcyxcclxuICAgIHBhcnNlRGF0YSxcclxuICAgIGdldEFjY291bnRIaXN0b3J5RVMsXHJcbiAgICBnZXRBY2NvdW50SGlzdG9yeSxcclxuICAgIHJlc29sdmVCbG9ja1RpbWVzLFxyXG4gICAgcmVzb2x2ZUFzc2V0c1xyXG59O1xyXG4iLCJjb25zdCBidHMgPSByZXF1aXJlKFwiYml0c2hhcmVzanMtd3NcIik7XHJcblxyXG5sZXQgZmV0Y2hDbGllbnQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzQnJvd3Nlcikge1xyXG4gICAgaWYgKGlzQnJvd3NlcikgZmV0Y2hDbGllbnQgPSBmZXRjaDtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZldGNoQ2xpZW50ID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWNjb3VudEhpc3RvcnlFUyhcclxuICAgICAgICBhY2NvdW50X2lkLFxyXG4gICAgICAgIGxpbWl0LFxyXG4gICAgICAgIHN0YXJ0LFxyXG4gICAgICAgIGVzTm9kZSA9IFwiaHR0cHM6Ly9lcy13cmFwcGVyLmdwaC5haVwiXHJcbiAgICApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgXCJxdWVyeVwiLFxyXG4gICAgICAgICAgICBgJHtlc05vZGV9L2VzL2FjY291bnRfaGlzdG9yeT9hY2NvdW50X2lkPSR7YWNjb3VudF9pZH0mZnJvbV89JHtzdGFydH0mc2l6ZT0ke2xpbWl0fSZzb3J0X2J5PWJsb2NrX2RhdGEuYmxvY2tfdGltZSZ0eXBlPWRhdGEmYWdnX2ZpZWxkPW9wZXJhdGlvbl90eXBlYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2hDbGllbnQoXHJcbiAgICAgICAgICAgICAgICBgJHtlc05vZGV9L2VzL2FjY291bnRfaGlzdG9yeT9hY2NvdW50X2lkPSR7YWNjb3VudF9pZH0mZnJvbV89JHtzdGFydH0mc2l6ZT0ke2xpbWl0fSZzb3J0X2J5PWJsb2NrX2RhdGEuYmxvY2tfdGltZSZ0eXBlPWRhdGEmYWdnX2ZpZWxkPW9wZXJhdGlvbl90eXBlYFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wcyA9IHJlc3VsdC5tYXAociA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImFtb3VudF9cIiBpbiByLm9wZXJhdGlvbl9oaXN0b3J5Lm9wX29iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5vcGVyYXRpb25faGlzdG9yeS5vcF9vYmplY3QuYW1vdW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLm9wZXJhdGlvbl9oaXN0b3J5Lm9wX29iamVjdC5hbW91bnRfO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHIuYWNjb3VudF9oaXN0b3J5Lm9wZXJhdGlvbl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wOiByLm9wZXJhdGlvbl9oaXN0b3J5Lm9wX29iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbl90eXBlOiByLm9wZXJhdGlvbl90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIub3BlcmF0aW9uX2hpc3Rvcnkub3BlcmF0aW9uX3Jlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX251bTogci5ibG9ja19kYXRhLmJsb2NrX251bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrX3RpbWU6IHIuYmxvY2tfZGF0YS5ibG9ja190aW1lICsgXCJaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9wcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRBY2NvdW50SGlzdG9yeSBlcnJyb3I6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBY2NvdW50SGlzdG9yeShhY2NvdW50X2lkLCBzdG9wLCBsaW1pdCwgc3RhcnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBidHMuQXBpcy5pbnN0YW5jZSgpXHJcbiAgICAgICAgICAgICAgICAuaGlzdG9yeV9hcGkoKVxyXG4gICAgICAgICAgICAgICAgLmV4ZWMoXCJnZXRfYWNjb3VudF9oaXN0b3J5XCIsIFthY2NvdW50X2lkLCBzdG9wLCBsaW1pdCwgc3RhcnRdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ob3BlcmF0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcGVyYXRpb25zKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEFjY291bnRIaXN0b3J5LFxyXG4gICAgICAgIGdldEFjY291bnRIaXN0b3J5RVNcclxuICAgIH07XHJcbn07XHJcbiIsImNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuLi9jb25maWdcIik7XHJcblxyXG5jb25zdCBidHMgPSByZXF1aXJlKFwiYml0c2hhcmVzanMtd3NcIik7XHJcblxyXG5jb25zdCB7Q2hhaW5UeXBlcywgQ2hhaW5TdG9yZSwgRmV0Y2hDaGFpbn0gPSByZXF1aXJlKFwiYml0c2hhcmVzanNcIik7XHJcblxyXG5jb25zdCB7b3BlcmF0aW9uc30gPSBDaGFpblR5cGVzO1xyXG5jb25zdCBvcHMgPSBPYmplY3Qua2V5cyhvcGVyYXRpb25zKTtcclxubGV0IGJsb2NrRGF0YSA9IHt9O1xyXG5sZXQgYXNzZXREYXRhID0ge307XHJcblxyXG5mdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIGJ0cy5BcGlzLmluc3RhbmNlKGNvbmZpZy5hcGlOb2RlLCB0cnVlKVxyXG4gICAgICAgICAgICAuaW5pdF9wcm9taXNlLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIENoYWluU3RvcmUuaW5pdChmYWxzZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3Rpb24gdG8gbm9kZTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcclxuICAgIGJ0cy5BcGlzLmluc3RhbmNlKCkuY2xvc2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXNlcihuYW1lKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEZldGNoQ2hhaW4oXCJnZXRBY2NvdW50XCIsIG5hbWUsIHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICBbbmFtZV06IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NvdW50ID0gcmVzdWx0LnRvSlMoKTtcclxuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudC5iYWxhbmNlcykgYWNjb3VudC5iYWxhbmNlcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50LmNhbGxfb3JkZXJzKSBhY2NvdW50LmNhbGxfb3JkZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgYXNzZXRzID0gT2JqZWN0LmtleXMoYWNjb3VudC5iYWxhbmNlcyk7IC8vIGFjY291bnQuY2FsbF9vcmRlcnMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgYmFsYW5jZUluZGV4ID0gYWNjb3VudC5iYWxhbmNlcy5maW5kSW5kZXgoYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBiLmFzc2V0X3R5cGUgPT09IGMuY2FsbF9wcmljZS5iYXNlLmFzc2V0X2lkO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKGJhbGFuY2VJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IG5ld0JhbGFuY2UgPSBwYXJzZUludChhY2NvdW50LmJhbGFuY2VzW2JhbGFuY2VJbmRleF0uYmFsYW5jZSwgMTApICtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGFyc2VJbnQoYy5jb2xsYXRlcmFsLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFjY291bnQuYmFsYW5jZXNbYmFsYW5jZUluZGV4XS5iYWxhbmNlID0gbmV3QmFsYW5jZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBhc3NldHMucHVzaChjLmNhbGxfcHJpY2UuYmFzZS5hc3NldF9pZCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFjY291bnQuYmFsYW5jZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBiYWxhbmNlOiBjLmNvbGxhdGVyYWwsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhc3NldF90eXBlOiBjLmNhbGxfcHJpY2UuYmFzZS5hc3NldF9pZFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGFjY291bnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2VzOiBhY2NvdW50LmJhbGFuY2VzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QmxvY2tUaW1lKGJsb2NrKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChibG9ja0RhdGFbYmxvY2tdKSByZXR1cm4gcmVzb2x2ZShibG9ja0RhdGFbYmxvY2tdKTtcclxuICAgICAgICBidHMuQXBpcy5pbnN0YW5jZSgpXHJcbiAgICAgICAgICAgIC5kYl9hcGkoKVxyXG4gICAgICAgICAgICAuZXhlYyhcImdldF9ibG9ja1wiLCBbYmxvY2tdKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tEYXRhW2Jsb2NrXSA9IG5ldyBEYXRlKHJlc3VsdC50aW1lc3RhbXAgKyBcIlpcIik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGJsb2NrRGF0YVtibG9ja10pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBc3NldERhdGEoYXNzZXQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgaWYgKGFzc2V0RGF0YVthc3NldF0pIHJldHVybiByZXNvbHZlKGFzc2V0RGF0YVthc3NldF0pO1xyXG4gICAgICAgIEZldGNoQ2hhaW4oXCJnZXRPYmplY3RcIiwgYXNzZXQsIHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgICBbYXNzZXRdOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYSA9IHJlc3VsdC50b0pTKCk7XHJcbiAgICAgICAgICAgICAgICBhc3NldERhdGFbYXNzZXRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbDogYS5zeW1ib2wucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgL09QRU5cXC58QlJJREdFXFwufFJVREVYXFwufEdERVhcXC58QkxPQ0tcXC4vLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246IGEucHJlY2lzaW9uXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldERhdGFbYXNzZXRdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzb2x2ZUJsb2NrVGltZXMob3BlcmF0aW9ucykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBvcGVyYXRpb25zLm1hcChvcCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcC5ibG9ja190aW1lKVxyXG4gICAgICAgICAgICAgICAgYmxvY2tEYXRhW29wLmJsb2NrX251bV0gPSBuZXcgRGF0ZShvcC5ibG9ja190aW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGdldEJsb2NrVGltZShvcC5ibG9ja19udW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKVxyXG4gICAgICAgICAgICAudGhlbihyZXNvbHZlKVxyXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlQXNzZXRzKG9wZXJhdGlvbnMsIGxpc3QpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgbGV0IGFzc2V0cyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAob3BlcmF0aW9ucykge1xyXG4gICAgICAgICAgICBvcGVyYXRpb25zLmZvckVhY2gocmVjb3JkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBvcHNbcmVjb3JkLm9wWzBdXTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidHJhbnNmZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRyYW5zZmVyIHJlY29yZC5vcDpcIiwgcmVjb3JkLm9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3JlY29yZC5vcFsxXS5hbW91bnQuYXNzZXRfaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3JlY29yZC5vcFsxXS5mZWUuYXNzZXRfaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmlsbF9vcmRlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0ucGF5cy5hc3NldF9pZF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHNbcmVjb3JkLm9wWzFdLnJlY2VpdmVzLmFzc2V0X2lkXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0uZmVlLmFzc2V0X2lkXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFzc2V0X2lzc3VlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3JlY29yZC5vcFsxXS5hc3NldF90b19pc3N1ZS5hc3NldF9pZF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHNbcmVjb3JkLm9wWzFdLmZlZS5hc3NldF9pZF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldHNbZW50cnldID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhhc3NldHMpLmZvckVhY2goYXNzZXRfaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWFzc2V0RGF0YVthc3NldF9pZF0gJiYgISFhc3NldF9pZCkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChnZXRBc3NldERhdGEoYXNzZXRfaWQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKVxyXG4gICAgICAgICAgICAudGhlbihyZXNvbHZlKVxyXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBc3NldChpZCkge1xyXG4gICAgcmV0dXJuIGFzc2V0RGF0YVtpZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJsb2NrKGJsb2NrX251bSkge1xyXG4gICAgcmV0dXJuIGJsb2NrRGF0YVtibG9ja19udW1dO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGNvbm5lY3QsXHJcbiAgICBkaXNjb25uZWN0LFxyXG4gICAgZ2V0VXNlcixcclxuICAgIGdldEJsb2NrVGltZSxcclxuICAgIGdldEFzc2V0RGF0YSxcclxuICAgIHJlc29sdmVBc3NldHMsXHJcbiAgICByZXNvbHZlQmxvY2tUaW1lcyxcclxuICAgIGdldEFzc2V0LFxyXG4gICAgZ2V0QmxvY2tcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBhcGlOb2RlOiBcIndzczovL25vZGUuZ3BoLmFpXCIsXHJcbiAgICB1c2VFUzogdHJ1ZSxcclxuICAgIC8vIHVzZSBlbGFzdGljIHNlYXJjaFxyXG4gICAgZXNOb2RlOiBcImh0dHBzOi8vZXMtd3JhcHBlci5ncGguYWlcIixcclxuICAgIGJvdFBheW1lbnRBY2NvdW50czogW11cclxufTtcclxuIiwiY29uc3QgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcclxuXHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcblxyXG5sZXQgYXNzZXRNb3ZlbWVudHMgPSB7fTtcclxubGV0IHJ1bm5pbmdCYWxhbmNlID0ge307XHJcbmxldCBtb3ZlbWVudFR5cGVzID0ge307XHJcbmxldCBhY2NvdW50QmFsYW5jZXMgPSB7fTtcclxubGV0IHRyYW5zZmVycyA9IHt9O1xyXG5sZXQgZmlsbHMgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGdldEZpbmFsQmFsYW5jZShhc3NldCkge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICBpZiAoIWFzc2V0TW92ZW1lbnRzW2Fzc2V0XSkgcmV0dXJuIDA7XHJcbiAgICBhc3NldE1vdmVtZW50c1thc3NldF0uZm9yRWFjaChtb3ZlbWVudCA9PiB7XHJcbiAgICAgICAgc3VtICs9IG1vdmVtZW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3VtO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFja01vdmVtZW50cyhhc3NldCwgYW1vdW50LCB0eXBlLCB0aW1lc3RhbXApIHtcclxuICAgIGlmICghYXNzZXRNb3ZlbWVudHNbYXNzZXRdKSBhc3NldE1vdmVtZW50c1thc3NldF0gPSBbXTtcclxuICAgIGlmICghcnVubmluZ0JhbGFuY2VbYXNzZXRdKSBydW5uaW5nQmFsYW5jZVthc3NldF0gPSBbXTtcclxuICAgIGFzc2V0TW92ZW1lbnRzW2Fzc2V0XS5wdXNoKGFtb3VudCk7XHJcbiAgICBydW5uaW5nQmFsYW5jZVthc3NldF0ucHVzaChbdHlwZSwgYW1vdW50LCBuZXcgRGF0ZSh0aW1lc3RhbXApXSk7XHJcbiAgICBpZiAoIW1vdmVtZW50VHlwZXNbYXNzZXRdKSBtb3ZlbWVudFR5cGVzW2Fzc2V0XSA9IHt9O1xyXG4gICAgaWYgKCFtb3ZlbWVudFR5cGVzW2Fzc2V0XVt0eXBlXSlcclxuICAgICAgICBtb3ZlbWVudFR5cGVzW2Fzc2V0XVt0eXBlXSA9IHtcclxuICAgICAgICAgICAgZGVwb3NpdDogW10sXHJcbiAgICAgICAgICAgIHdpdGhkcmF3YWw6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIG1vdmVtZW50VHlwZXNbYXNzZXRdW3R5cGVdW2Ftb3VudCA+IDAgPyBcImRlcG9zaXRcIiA6IFwid2l0aGRyYXdhbFwiXS5wdXNoKFxyXG4gICAgICAgIGFtb3VudFxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkT3V0cHV0RW50cnkoXHJcbiAgICBvdXRwdXQsXHJcbiAgICB0eXBlLFxyXG4gICAgYnV5LFxyXG4gICAgc2VsbCxcclxuICAgIGZlZSxcclxuICAgIGRhdGUsXHJcbiAgICBvcFR5cGUsXHJcbiAgICBjb21tZW50LFxyXG4gICAgdHJhZGVHcm91cFxyXG4pIHtcclxuICAgIGlmICghYnV5KVxyXG4gICAgICAgIGJ1eSA9IHtcclxuICAgICAgICAgICAgYW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICBpZiAoIXNlbGwpXHJcbiAgICAgICAgc2VsbCA9IHtcclxuICAgICAgICAgICAgYW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICBpZiAoIWZlZSlcclxuICAgICAgICBmZWUgPSB7XHJcbiAgICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgY3VycmVuY3k6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgaWYgKGJ1eS5hbW91bnQpIHRyYWNrTW92ZW1lbnRzKGJ1eS5jdXJyZW5jeSwgYnV5LmFtb3VudCwgb3BUeXBlLCBkYXRlKTtcclxuICAgIGlmIChzZWxsLmFtb3VudCkgdHJhY2tNb3ZlbWVudHMoc2VsbC5jdXJyZW5jeSwgLXNlbGwuYW1vdW50LCBvcFR5cGUsIGRhdGUpO1xyXG4gICAgaWYgKGZlZS5hbW91bnQpIHRyYWNrTW92ZW1lbnRzKGZlZS5jdXJyZW5jeSwgLWZlZS5hbW91bnQsIG9wVHlwZSwgZGF0ZSk7XHJcbiAgICBvdXRwdXQucHVzaChbXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB1dGlscy5wcmludEFtb3VudChidXkpLFxyXG4gICAgICAgIGJ1eS5jdXJyZW5jeSxcclxuICAgICAgICB1dGlscy5wcmludEFtb3VudChzZWxsKSxcclxuICAgICAgICBzZWxsLmN1cnJlbmN5LFxyXG4gICAgICAgIHV0aWxzLnByaW50QW1vdW50KGZlZSksXHJcbiAgICAgICAgZmVlLmN1cnJlbmN5LFxyXG4gICAgICAgIFwiR1BILURFWFwiLFxyXG4gICAgICAgIHRyYWRlR3JvdXAgfHwgXCJcIixcclxuICAgICAgICBjb21tZW50IHx8IFwiXCIsXHJcbiAgICAgICAgZGF0ZVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJFbnRyaWVzKGVudHJpZXMsIEZJTFRFUl9UWVBFLCBGSUxURVJfREFURSkge1xyXG4gICAgaWYgKCFGSUxURVJfVFlQRSAmJiAhRklMVEVSX0RBVEUpIHJldHVybiBlbnRyaWVzO1xyXG4gICAgbGV0IGVudHJpZXNLZXlzID0gT2JqZWN0LmtleXMoZW50cmllcyk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IGVudHJpZXNLZXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgbGV0IHRyeF9pZCA9IGVudHJpZXNLZXlzW2ldO1xyXG4gICAgICAgIGxldCB7dGltZXN0YW1wLCB0eXBlLCBkYXRhfSA9IGVudHJpZXNbdHJ4X2lkXTtcclxuXHJcbiAgICAgICAgaWYgKCEhRklMVEVSX1RZUEUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgIT09IEZJTFRFUl9UWVBFKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgZW50cmllc1t0cnhfaWRdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIUZJTFRFUl9EQVRFKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcgRGF0ZSh0aW1lc3RhbXApLmdldFRpbWUoKSA8IEZJTFRFUl9EQVRFKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgZW50cmllc1t0cnhfaWRdO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYFJlbW92ZWQgJHtlbnRyaWVzS2V5cy5sZW5ndGggLVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbnRyaWVzKS5sZW5ndGh9IGVudHJpZXMgYnkgZmlsdGVyaW5nYFxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbnRyaWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBncm91cEVudHJpZXMoZW50cmllcykge1xyXG4gICAgbGV0IHByZXZpb3VzX2ZpbGwgPSB7fTtcclxuICAgIGxldCByZWNvcmRLZXlzID0gT2JqZWN0LmtleXMoZW50cmllcyk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IHJlY29yZEtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBsZXQgdHJ4X2lkID0gcmVjb3JkS2V5c1tpXTtcclxuICAgICAgICBsZXQge3RpbWVzdGFtcCwgdHlwZSwgZGF0YX0gPSBlbnRyaWVzW3RyeF9pZF07XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZmlsbF9vcmRlclwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IHQxID0gbW9tZW50KHRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFya2V0SWQgPVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmVjZWl2ZXMuYXNzZXRfaWQgKyBcIl9cIiArIGRhdGEucGF5cy5hc3NldF9pZDtcclxuICAgICAgICAgICAgICAgIGxldCBwcmV2aW91cyA9IHByZXZpb3VzX2ZpbGxbbWFya2V0SWRdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHQwID0gISFwcmV2aW91cyA/IG1vbWVudChwcmV2aW91cy50aW1lc3RhbXApIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgISFwcmV2aW91cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHQxLmlzU2FtZSh0MCwgXCJkYXlcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5kYXRhLnBheXMuYXNzZXRfaWQgPT09IGRhdGEucGF5cy5hc3NldF9pZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzLmRhdGEucmVjZWl2ZXMuYXNzZXRfaWQgPT09IGRhdGEucmVjZWl2ZXMuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucGF5cy5hbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLnBheXMuYW1vdW50LCAxMCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChwcmV2aW91cy5kYXRhLnBheXMuYW1vdW50LCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yZWNlaXZlcy5hbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLnJlY2VpdmVzLmFtb3VudCwgMTApICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocHJldmlvdXMuZGF0YS5yZWNlaXZlcy5hbW91bnQsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmZlZS5hbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLmZlZS5hbW91bnQsIDEwKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHByZXZpb3VzLmRhdGEuZmVlLmFtb3VudCwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXNbdHJ4X2lkXS5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZW50cmllc1twcmV2aW91cy50cnhfaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzX2ZpbGxbbWFya2V0SWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyeF9pZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgUmVtb3ZlZCAke3JlY29yZEtleXMubGVuZ3RoIC1cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW50cmllcykubGVuZ3RofSBmaWxsX29yZGVyIGVudHJpZXMgYnkgZ3JvdXBpbmdgXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGVudHJpZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlRGF0YShyZWNvcmREYXRhLCBhY2NvdW50SWQsIGFjY291bnROYW1lKSB7XHJcbiAgICBsZXQgb3V0ID0gW107XHJcbiAgICBvdXQucHVzaChbXHJcbiAgICAgICAgXCJUeXBlXCIsXHJcbiAgICAgICAgXCJCdXkgQW1vdW50XCIsXHJcbiAgICAgICAgXCJCdXkgQ3VycmVuY3lcIixcclxuICAgICAgICBcIlNlbGwgQW1vdW50XCIsXHJcbiAgICAgICAgXCJTZWxsIEN1cnJlbmN5XCIsXHJcbiAgICAgICAgXCJGZWUgQW1vdW50XCIsXHJcbiAgICAgICAgXCJGZWUgQ3VycmVuY3lcIixcclxuICAgICAgICBcIkV4Y2hhbmdlXCIsXHJcbiAgICAgICAgXCJUcmFkZSBHcm91cFwiLFxyXG4gICAgICAgIFwiQ29tbWVudFwiLFxyXG4gICAgICAgIFwiRGF0ZVwiXHJcbiAgICBdKTtcclxuICAgIGxldCB0eXBlQ291bnRzID0ge307XHJcblxyXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50VHlwZSh0eXBlKSB7XHJcbiAgICAgICAgaWYgKCF0eXBlQ291bnRzW3R5cGVdKSB0eXBlQ291bnRzW3R5cGVdID0gMDtcclxuICAgICAgICB0eXBlQ291bnRzW3R5cGVdKys7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgdHJ4X2lkIG9mIE9iamVjdC5rZXlzKHJlY29yZERhdGEpKSB7XHJcbiAgICAgICAgY29uc3Qge3RpbWVzdGFtcCwgdHlwZSwgZGF0YX0gPSByZWNvcmREYXRhW3RyeF9pZF07XHJcbiAgICAgICAgbGV0IGZlZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwidmVzdGluZ19iYWxhbmNlX3dpdGhkcmF3XCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgdmVzdGluZ0Z1bmRzID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBmZWUgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEuZmVlKTtcclxuICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm93bmVyID09PSBcIjEuMi4zMDY2NVwiICYmIHZlc3RpbmdGdW5kcy5hbW91bnQgPiAxMDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiSW5jb21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkRlcG9zaXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2ZXN0aW5nRnVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBmZWUsIC8vIGRldi5iaXRzaGFyZXNibG9ja3NcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBgJHthY2NvdW50TmFtZX0gOiBWZXN0aW5nIGJhbGFuY2Ugd2l0aGRyYXdgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImJhbGFuY2VfY2xhaW1cIjpcclxuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlQ2xhaW1GdW5kcyA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS50b3RhbF9jbGFpbWVkKTtcclxuICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICBcIkRlcG9zaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlQ2xhaW1GdW5kcyxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7YWNjb3VudE5hbWV9IDogQmFsYW5jZSBjbGFpbWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRUeXBlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidHJhbnNmZXJcIjpcclxuICAgICAgICAgICAgICAgIGxldCBmdW5kcyA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudG8gPT0gYWNjb3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRnVuZHMgY29taW5nIGluIHRvIHRoZSBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gYWRkT3V0cHV0RW50cnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50byA9PT0gXCIxLjIuMzkxOTM4XCIgJiYgZGF0YS5mcm9tID09PSBcIjEuMi4zODEwODZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkluY29tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiRGVwb3NpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgLy8gcGF5LnN2ayBhbmQgYml0c2hhcmVzLXVpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7YWNjb3VudE5hbWV9IDogRnJvbSAke2RhdGEuZnJvbX1gXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gYWRkT3V0cHV0RW50cnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXaXRoZHJhd2FsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7YWNjb3VudE5hbWV9OiBUbyAke2RhdGEudG99YFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZpbGxfb3JkZXJcIjpcclxuICAgICAgICAgICAgICAgIGxldCBzb2xkRnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEucGF5cyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm91Z2h0RnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEucmVjZWl2ZXMpO1xyXG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZlZS5jdXJyZW5jeSAhPT0gXCJCVFNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3VnaHRGdW5kcy5jdXJyZW5jeSA9PT0gZmVlLmN1cnJlbmN5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdWdodEZ1bmRzLmFtb3VudCAtPSBmZWUuYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWUuYW1vdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNvbGRGdW5kcy5jdXJyZW5jeSA9PT0gZmVlLmN1cnJlbmN5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRGdW5kcy5hbW91bnQgLT0gZmVlLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLmFtb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICBcIlRyYWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm91Z2h0RnVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgc29sZEZ1bmRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9pc3N1ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNzdWVkRnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEuYXNzZXRfdG9faXNzdWUpO1xyXG4gICAgICAgICAgICAgICAgZmVlID1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmlzc3VlciA9PT0gYWNjb3VudElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlzc3VlX3RvX2FjY291bnQgPT09IGFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRGVwb3NpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZWRGdW5kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2FjY291bnROYW1lfSA6IElzc3VlZCB0byBhY2NvdW50YFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF91cGRhdGVcIjpcclxuICAgICAgICAgICAgY2FzZSBcInByb3Bvc2FsX2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicHJvcG9zYWxfdXBkYXRlXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50X3doaXRlbGlzdFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwid29ya2VyX2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwibGltaXRfb3JkZXJfY3JlYXRlXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW1pdF9vcmRlcl9jYW5jZWxcIjpcclxuICAgICAgICAgICAgY2FzZSBcImNhbGxfb3JkZXJfdXBkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBmZWUgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEuZmVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmVlLmFtb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldpdGhkcmF3YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3R5cGV9IGZlZWBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF9jcmVhdGVcIjpcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlZ2lzdHJhciA9PT0gYWNjb3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gYWRkT3V0cHV0RW50cnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXaXRoZHJhd2FsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0eXBlfSBmZWVgXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnRUeXBlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X2Z1bmRfZmVlX3Bvb2xcIjoge1xyXG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnVuZEZ1bmRzID0gdXRpbHMucGFyc2VDdXJyZW5jeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICBcIldpdGhkcmF3YWxcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmRGdW5kcyxcclxuICAgICAgICAgICAgICAgICAgICBmZWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7dHlwZX1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuaGFuZGxlZCB0eXBlOlwiLCB0eXBlLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHBhcnNlRGF0YSxcclxuICAgIGZpbHRlckVudHJpZXMsXHJcbiAgICBncm91cEVudHJpZXNcclxufTtcclxuIiwiY29uc3Qge0NoYWluU3RvcmV9ID0gcmVxdWlyZShcImJpdHNoYXJlc2pzXCIpO1xyXG5cclxuZnVuY3Rpb24gcHJlY2lzaW9uVG9SYXRpbyhwKSB7XHJcbiAgICBpZiAodHlwZW9mIHAgIT09IFwibnVtYmVyXCIpIHRocm93IG5ldyBFcnJvcihcIklucHV0IG11c3QgYmUgYSBudW1iZXJcIik7XHJcbiAgICByZXR1cm4gTWF0aC5wb3coMTAsIHApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUN1cnJlbmN5KGFtb3VudCkge1xyXG4gICAgbGV0IGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChhbW91bnQuYXNzZXRfaWQpO1xyXG4gICAgaWYgKGFzc2V0KSBhc3NldCA9IGFzc2V0LnRvSlMoKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFzc2V0ID0ge1xyXG4gICAgICAgICAgICBwcmVjaXNpb246IDVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgbGV0IHByZWNpc2lvblJhdGlvID0gcHJlY2lzaW9uVG9SYXRpbyhhc3NldC5wcmVjaXNpb24pO1xyXG4gICAgbGV0IGZ1bGxBbW91bnQgPSBhbW91bnQuYW1vdW50IC8gcHJlY2lzaW9uUmF0aW87XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFtb3VudDogZnVsbEFtb3VudCxcclxuICAgICAgICBjdXJyZW5jeTogYXNzZXQuc3ltYm9sLFxyXG4gICAgICAgIGFzc2V0X2lkOiBhbW91bnQuYXNzZXRfaWRcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50QW1vdW50KGFtb3VudCkge1xyXG4gICAgaWYgKCFhbW91bnQuYW1vdW50IHx8ICFhbW91bnQuY3VycmVuY3kpIHJldHVybiBcIlwiO1xyXG4gICAgbGV0IGFzc2V0ID0gQ2hhaW5TdG9yZS5nZXRBc3NldChhbW91bnQuYXNzZXRfaWQpO1xyXG4gICAgaWYgKGFzc2V0KSBhc3NldCA9IGFzc2V0LnRvSlMoKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFzc2V0ID0ge1xyXG4gICAgICAgICAgICBwcmVjaXNpb246IDVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFtb3VudC5hbW91bnQudG9GaXhlZChhc3NldC5wcmVjaXNpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbmRleChzdHIpIHtcclxuICAgIGxldCBwaWVjZXMgPSBzdHIuc3BsaXQoXCIuXCIpO1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHBpZWNlc1syXSwgMTApO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHBhcnNlQ3VycmVuY3ksXHJcbiAgICBwcmludEFtb3VudCxcclxuICAgIGdldEluZGV4XHJcbn07XHJcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==