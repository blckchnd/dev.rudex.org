(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[32],{

/***/ 2854:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {groupEntries, parseData} = __webpack_require__(2855);

const {resolveBlockTimes, resolveAssets} = __webpack_require__(2857);

const {getAccountHistoryES, getAccountHistory} =
    __webpack_require__(2859)(true);

module.exports = {
    groupEntries,
    parseData,
    getAccountHistoryES,
    getAccountHistory,
    resolveBlockTimes,
    resolveAssets,
};


/***/ }),

/***/ 2859:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const bts = __webpack_require__(521);

let fetchClient;

module.exports = function (isBrowser) {
    if (isBrowser) fetchClient = fetch;
    else {
        fetchClient = __webpack_require__(2860);
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
                .then((res) => res.json())
                .then((result) => {
                    let ops = result.map((r) => {
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
                            block_time: r.block_data.block_time + "Z",
                        };
                    });
                    resolve(ops);
                })
                .catch((err) => {
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
                .then((operations) => {
                    resolve(operations);
                })
                .catch(reject);
        });
    }

    return {
        getAccountHistory,
        getAccountHistoryES,
    };
};


/***/ }),

/***/ 2857:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const config = __webpack_require__(2858);

const bts = __webpack_require__(521);

const {ChainTypes, ChainStore, FetchChain} = __webpack_require__(437);

const {operations} = ChainTypes;
const ops = Object.keys(operations);
let blockData = {};
let assetData = {};

function connect() {
    return new Promise((resolve) => {
        bts.Apis.instance(config.apiNode, true)
            .init_promise.then((res) => {
                ChainStore.init(false).then(() => {
                    resolve(res);
                });
            })
            .catch((err) => {
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
            [name]: false,
        })
            .then((result) => {
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
                    balances: account.balances,
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
            .then((result) => {
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
            [asset]: false,
        })
            .then((result) => {
                let a = result.toJS();
                assetData[asset] = {
                    symbol: a.symbol.replace(
                        /OPEN\.|BRIDGE\.|RUDEX\.|GDEX\.|BLOCK\./,
                        ""
                    ),
                    precision: a.precision,
                };
                resolve(assetData[asset]);
            })
            .catch((err) => {
                reject();
            });
    });
}

function resolveBlockTimes(operations) {
    return new Promise((resolve, reject) => {
        let promises = operations.map((op) => {
            if (op.block_time)
                blockData[op.block_num] = new Date(op.block_time);
            return getBlockTime(op.block_num);
        });
        Promise.all(promises).then(resolve).catch(reject);
    });
}

function resolveAssets(operations, list) {
    return new Promise((resolve, reject) => {
        let promises = [];
        let assets = {};

        if (operations) {
            operations.forEach((record) => {
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
            list.forEach((entry) => {
                assets[entry] = true;
            });
        }

        Object.keys(assets).forEach((asset_id) => {
            if (!assetData[asset_id] && !!asset_id) {
                promises.push(getAssetData(asset_id));
            }
        });
        Promise.all(promises).then(resolve).catch(reject);
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
    getBlock,
};


/***/ }),

/***/ 2858:
/***/ ((module) => {

module.exports = {
    apiNode: "wss://node.gph.ai",
    useES: true,
    // use elastic search
    esNode: "https://es-wrapper.gph.ai",
    botPaymentAccounts: []
};


/***/ }),

/***/ 2855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const moment = __webpack_require__(924);

const utils = __webpack_require__(2856);

let assetMovements = {};
let runningBalance = {};
let movementTypes = {};
let accountBalances = {};
let transfers = {};
let fills = {};

function getFinalBalance(asset) {
    let sum = 0;
    if (!assetMovements[asset]) return 0;
    assetMovements[asset].forEach((movement) => {
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
            withdrawal: [],
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
            currency: "",
        };
    if (!sell)
        sell = {
            amount: "",
            currency: "",
        };
    if (!fee)
        fee = {
            amount: "",
            currency: "",
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
        date,
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
        `Removed ${
            entriesKeys.length - Object.keys(entries).length
        } entries by filtering`
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
                    trx_id,
                };
                break;

            default:
                break;
        }
    }

    console.log(
        `Removed ${
            recordKeys.length - Object.keys(entries).length
        } fill_order entries by grouping`
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
        "Date",
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
                    asset_id: "1.3.0",
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
    groupEntries,
};


/***/ }),

/***/ 2856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {ChainStore} = __webpack_require__(437);

function precisionToRatio(p) {
    if (typeof p !== "number") throw new Error("Input must be a number");
    return Math.pow(10, p);
}

function parseCurrency(amount) {
    let asset = ChainStore.getAsset(amount.asset_id);
    if (asset) asset = asset.toJS();
    else {
        asset = {
            precision: 5,
        };
    }
    let precisionRatio = precisionToRatio(asset.precision);
    let fullAmount = amount.amount / precisionRatio;
    return {
        amount: fullAmount,
        currency: asset.symbol,
        asset_id: amount.asset_id,
    };
}

function printAmount(amount) {
    if (!amount.amount || !amount.currency) return "";
    let asset = ChainStore.getAsset(amount.asset_id);
    if (asset) asset = asset.toJS();
    else {
        asset = {
            precision: 5,
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
    getIndex,
};


/***/ }),

/***/ 2860:
/***/ (() => {



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIuMDZkMTFhYWFlYWQ0NDY5ZmU0NjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL2luZGV4LmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL3NyYy9hcGkvZ2V0QWNjb3VudEhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvZXMvc3JjL2FwaS9ub2RlQXBpLmpzIiwid2VicGFjazovL1J1REVYMy1saWdodC8uL25vZGVfbW9kdWxlcy9iaXRzaGFyZXMtcmVwb3J0L2VzL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvZXMvc3JjL3BhcnNlci5qcyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvLi9ub2RlX21vZHVsZXMvYml0c2hhcmVzLXJlcG9ydC9lcy9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vbm9kZV9tb2R1bGVzL2JpdHNoYXJlcy1yZXBvcnQvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvbGliL2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Z3JvdXBFbnRyaWVzLCBwYXJzZURhdGF9ID0gcmVxdWlyZShcIi4vc3JjL3BhcnNlclwiKTtcclxuXHJcbmNvbnN0IHtyZXNvbHZlQmxvY2tUaW1lcywgcmVzb2x2ZUFzc2V0c30gPSByZXF1aXJlKFwiLi9zcmMvYXBpL25vZGVBcGlcIik7XHJcblxyXG5jb25zdCB7Z2V0QWNjb3VudEhpc3RvcnlFUywgZ2V0QWNjb3VudEhpc3Rvcnl9ID1cclxuICAgIHJlcXVpcmUoXCIuL3NyYy9hcGkvZ2V0QWNjb3VudEhpc3RvcnlcIikodHJ1ZSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGdyb3VwRW50cmllcyxcclxuICAgIHBhcnNlRGF0YSxcclxuICAgIGdldEFjY291bnRIaXN0b3J5RVMsXHJcbiAgICBnZXRBY2NvdW50SGlzdG9yeSxcclxuICAgIHJlc29sdmVCbG9ja1RpbWVzLFxyXG4gICAgcmVzb2x2ZUFzc2V0cyxcclxufTtcclxuIiwiY29uc3QgYnRzID0gcmVxdWlyZShcImJpdHNoYXJlc2pzLXdzXCIpO1xyXG5cclxubGV0IGZldGNoQ2xpZW50O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNCcm93c2VyKSB7XHJcbiAgICBpZiAoaXNCcm93c2VyKSBmZXRjaENsaWVudCA9IGZldGNoO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZmV0Y2hDbGllbnQgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBY2NvdW50SGlzdG9yeUVTKFxyXG4gICAgICAgIGFjY291bnRfaWQsXHJcbiAgICAgICAgbGltaXQsXHJcbiAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgZXNOb2RlID0gXCJodHRwczovL2VzLXdyYXBwZXIuZ3BoLmFpXCJcclxuICAgICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBcInF1ZXJ5XCIsXHJcbiAgICAgICAgICAgIGAke2VzTm9kZX0vZXMvYWNjb3VudF9oaXN0b3J5P2FjY291bnRfaWQ9JHthY2NvdW50X2lkfSZmcm9tXz0ke3N0YXJ0fSZzaXplPSR7bGltaXR9JnNvcnRfYnk9YmxvY2tfZGF0YS5ibG9ja190aW1lJnR5cGU9ZGF0YSZhZ2dfZmllbGQ9b3BlcmF0aW9uX3R5cGVgXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaENsaWVudChcclxuICAgICAgICAgICAgICAgIGAke2VzTm9kZX0vZXMvYWNjb3VudF9oaXN0b3J5P2FjY291bnRfaWQ9JHthY2NvdW50X2lkfSZmcm9tXz0ke3N0YXJ0fSZzaXplPSR7bGltaXR9JnNvcnRfYnk9YmxvY2tfZGF0YS5ibG9ja190aW1lJnR5cGU9ZGF0YSZhZ2dfZmllbGQ9b3BlcmF0aW9uX3R5cGVgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wcyA9IHJlc3VsdC5tYXAoKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiYW1vdW50X1wiIGluIHIub3BlcmF0aW9uX2hpc3Rvcnkub3Bfb2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLm9wZXJhdGlvbl9oaXN0b3J5Lm9wX29iamVjdC5hbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIub3BlcmF0aW9uX2hpc3Rvcnkub3Bfb2JqZWN0LmFtb3VudF87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogci5hY2NvdW50X2hpc3Rvcnkub3BlcmF0aW9uX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3A6IHIub3BlcmF0aW9uX2hpc3Rvcnkub3Bfb2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uX3R5cGU6IHIub3BlcmF0aW9uX3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IEpTT04ucGFyc2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5vcGVyYXRpb25faGlzdG9yeS5vcGVyYXRpb25fcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfbnVtOiByLmJsb2NrX2RhdGEuYmxvY2tfbnVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tfdGltZTogci5ibG9ja19kYXRhLmJsb2NrX3RpbWUgKyBcIlpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9wcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEFjY291bnRIaXN0b3J5IGVycnJvcjpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFjY291bnRIaXN0b3J5KGFjY291bnRfaWQsIHN0b3AsIGxpbWl0LCBzdGFydCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGJ0cy5BcGlzLmluc3RhbmNlKClcclxuICAgICAgICAgICAgICAgIC5oaXN0b3J5X2FwaSgpXHJcbiAgICAgICAgICAgICAgICAuZXhlYyhcImdldF9hY2NvdW50X2hpc3RvcnlcIiwgW2FjY291bnRfaWQsIHN0b3AsIGxpbWl0LCBzdGFydF0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigob3BlcmF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3BlcmF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRBY2NvdW50SGlzdG9yeSxcclxuICAgICAgICBnZXRBY2NvdW50SGlzdG9yeUVTLFxyXG4gICAgfTtcclxufTtcclxuIiwiY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKTtcclxuXHJcbmNvbnN0IGJ0cyA9IHJlcXVpcmUoXCJiaXRzaGFyZXNqcy13c1wiKTtcclxuXHJcbmNvbnN0IHtDaGFpblR5cGVzLCBDaGFpblN0b3JlLCBGZXRjaENoYWlufSA9IHJlcXVpcmUoXCJiaXRzaGFyZXNqc1wiKTtcclxuXHJcbmNvbnN0IHtvcGVyYXRpb25zfSA9IENoYWluVHlwZXM7XHJcbmNvbnN0IG9wcyA9IE9iamVjdC5rZXlzKG9wZXJhdGlvbnMpO1xyXG5sZXQgYmxvY2tEYXRhID0ge307XHJcbmxldCBhc3NldERhdGEgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGNvbm5lY3QoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICBidHMuQXBpcy5pbnN0YW5jZShjb25maWcuYXBpTm9kZSwgdHJ1ZSlcclxuICAgICAgICAgICAgLmluaXRfcHJvbWlzZS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIENoYWluU3RvcmUuaW5pdChmYWxzZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGlvbiB0byBub2RlOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNjb25uZWN0KCkge1xyXG4gICAgYnRzLkFwaXMuaW5zdGFuY2UoKS5jbG9zZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVc2VyKG5hbWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgRmV0Y2hDaGFpbihcImdldEFjY291bnRcIiwgbmFtZSwgdW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgIFtuYW1lXTogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY291bnQgPSByZXN1bHQudG9KUygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50LmJhbGFuY2VzKSBhY2NvdW50LmJhbGFuY2VzID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQuY2FsbF9vcmRlcnMpIGFjY291bnQuY2FsbF9vcmRlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBhc3NldHMgPSBPYmplY3Qua2V5cyhhY2NvdW50LmJhbGFuY2VzKTsgLy8gYWNjb3VudC5jYWxsX29yZGVycy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBiYWxhbmNlSW5kZXggPSBhY2NvdW50LmJhbGFuY2VzLmZpbmRJbmRleChiID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGIuYXNzZXRfdHlwZSA9PT0gYy5jYWxsX3ByaWNlLmJhc2UuYXNzZXRfaWQ7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYoYmFsYW5jZUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbmV3QmFsYW5jZSA9IHBhcnNlSW50KGFjY291bnQuYmFsYW5jZXNbYmFsYW5jZUluZGV4XS5iYWxhbmNlLCAxMCkgK1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBwYXJzZUludChjLmNvbGxhdGVyYWwsIDEwKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYWNjb3VudC5iYWxhbmNlc1tiYWxhbmNlSW5kZXhdLmJhbGFuY2UgPSBuZXdCYWxhbmNlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFzc2V0cy5wdXNoKGMuY2FsbF9wcmljZS5iYXNlLmFzc2V0X2lkKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYWNjb3VudC5iYWxhbmNlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJhbGFuY2U6IGMuY29sbGF0ZXJhbCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFzc2V0X3R5cGU6IGMuY2FsbF9wcmljZS5iYXNlLmFzc2V0X2lkXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogYWNjb3VudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldHMsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZXM6IGFjY291bnQuYmFsYW5jZXMsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QmxvY2tUaW1lKGJsb2NrKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChibG9ja0RhdGFbYmxvY2tdKSByZXR1cm4gcmVzb2x2ZShibG9ja0RhdGFbYmxvY2tdKTtcclxuICAgICAgICBidHMuQXBpcy5pbnN0YW5jZSgpXHJcbiAgICAgICAgICAgIC5kYl9hcGkoKVxyXG4gICAgICAgICAgICAuZXhlYyhcImdldF9ibG9ja1wiLCBbYmxvY2tdKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBibG9ja0RhdGFbYmxvY2tdID0gbmV3IERhdGUocmVzdWx0LnRpbWVzdGFtcCArIFwiWlwiKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoYmxvY2tEYXRhW2Jsb2NrXSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFzc2V0RGF0YShhc3NldCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBpZiAoYXNzZXREYXRhW2Fzc2V0XSkgcmV0dXJuIHJlc29sdmUoYXNzZXREYXRhW2Fzc2V0XSk7XHJcbiAgICAgICAgRmV0Y2hDaGFpbihcImdldE9iamVjdFwiLCBhc3NldCwgdW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICAgIFthc3NldF06IGZhbHNlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhID0gcmVzdWx0LnRvSlMoKTtcclxuICAgICAgICAgICAgICAgIGFzc2V0RGF0YVthc3NldF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBhLnN5bWJvbC5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvT1BFTlxcLnxCUklER0VcXC58UlVERVhcXC58R0RFWFxcLnxCTE9DS1xcLi8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogYS5wcmVjaXNpb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldERhdGFbYXNzZXRdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNvbHZlQmxvY2tUaW1lcyhvcGVyYXRpb25zKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IG9wZXJhdGlvbnMubWFwKChvcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3AuYmxvY2tfdGltZSlcclxuICAgICAgICAgICAgICAgIGJsb2NrRGF0YVtvcC5ibG9ja19udW1dID0gbmV3IERhdGUob3AuYmxvY2tfdGltZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRCbG9ja1RpbWUob3AuYmxvY2tfbnVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVBc3NldHMob3BlcmF0aW9ucywgbGlzdCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBsZXQgYXNzZXRzID0ge307XHJcblxyXG4gICAgICAgIGlmIChvcGVyYXRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbnMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gb3BzW3JlY29yZC5vcFswXV07XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRyYW5zZmVyXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0cmFuc2ZlciByZWNvcmQub3A6XCIsIHJlY29yZC5vcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0uYW1vdW50LmFzc2V0X2lkXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0uZmVlLmFzc2V0X2lkXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZpbGxfb3JkZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHNbcmVjb3JkLm9wWzFdLnBheXMuYXNzZXRfaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3JlY29yZC5vcFsxXS5yZWNlaXZlcy5hc3NldF9pZF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHNbcmVjb3JkLm9wWzFdLmZlZS5hc3NldF9pZF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhc3NldF9pc3N1ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1tyZWNvcmQub3BbMV0uYXNzZXRfdG9faXNzdWUuYXNzZXRfaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzW3JlY29yZC5vcFsxXS5mZWUuYXNzZXRfaWRdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGlzdCkge1xyXG4gICAgICAgICAgICBsaXN0LmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldHNbZW50cnldID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyhhc3NldHMpLmZvckVhY2goKGFzc2V0X2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYXNzZXREYXRhW2Fzc2V0X2lkXSAmJiAhIWFzc2V0X2lkKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGdldEFzc2V0RGF0YShhc3NldF9pZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBc3NldChpZCkge1xyXG4gICAgcmV0dXJuIGFzc2V0RGF0YVtpZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJsb2NrKGJsb2NrX251bSkge1xyXG4gICAgcmV0dXJuIGJsb2NrRGF0YVtibG9ja19udW1dO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGNvbm5lY3QsXHJcbiAgICBkaXNjb25uZWN0LFxyXG4gICAgZ2V0VXNlcixcclxuICAgIGdldEJsb2NrVGltZSxcclxuICAgIGdldEFzc2V0RGF0YSxcclxuICAgIHJlc29sdmVBc3NldHMsXHJcbiAgICByZXNvbHZlQmxvY2tUaW1lcyxcclxuICAgIGdldEFzc2V0LFxyXG4gICAgZ2V0QmxvY2ssXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgYXBpTm9kZTogXCJ3c3M6Ly9ub2RlLmdwaC5haVwiLFxyXG4gICAgdXNlRVM6IHRydWUsXHJcbiAgICAvLyB1c2UgZWxhc3RpYyBzZWFyY2hcclxuICAgIGVzTm9kZTogXCJodHRwczovL2VzLXdyYXBwZXIuZ3BoLmFpXCIsXHJcbiAgICBib3RQYXltZW50QWNjb3VudHM6IFtdXHJcbn07XHJcbiIsImNvbnN0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XHJcblxyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5cclxubGV0IGFzc2V0TW92ZW1lbnRzID0ge307XHJcbmxldCBydW5uaW5nQmFsYW5jZSA9IHt9O1xyXG5sZXQgbW92ZW1lbnRUeXBlcyA9IHt9O1xyXG5sZXQgYWNjb3VudEJhbGFuY2VzID0ge307XHJcbmxldCB0cmFuc2ZlcnMgPSB7fTtcclxubGV0IGZpbGxzID0ge307XHJcblxyXG5mdW5jdGlvbiBnZXRGaW5hbEJhbGFuY2UoYXNzZXQpIHtcclxuICAgIGxldCBzdW0gPSAwO1xyXG4gICAgaWYgKCFhc3NldE1vdmVtZW50c1thc3NldF0pIHJldHVybiAwO1xyXG4gICAgYXNzZXRNb3ZlbWVudHNbYXNzZXRdLmZvckVhY2goKG1vdmVtZW50KSA9PiB7XHJcbiAgICAgICAgc3VtICs9IG1vdmVtZW50O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3VtO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFja01vdmVtZW50cyhhc3NldCwgYW1vdW50LCB0eXBlLCB0aW1lc3RhbXApIHtcclxuICAgIGlmICghYXNzZXRNb3ZlbWVudHNbYXNzZXRdKSBhc3NldE1vdmVtZW50c1thc3NldF0gPSBbXTtcclxuICAgIGlmICghcnVubmluZ0JhbGFuY2VbYXNzZXRdKSBydW5uaW5nQmFsYW5jZVthc3NldF0gPSBbXTtcclxuICAgIGFzc2V0TW92ZW1lbnRzW2Fzc2V0XS5wdXNoKGFtb3VudCk7XHJcbiAgICBydW5uaW5nQmFsYW5jZVthc3NldF0ucHVzaChbdHlwZSwgYW1vdW50LCBuZXcgRGF0ZSh0aW1lc3RhbXApXSk7XHJcbiAgICBpZiAoIW1vdmVtZW50VHlwZXNbYXNzZXRdKSBtb3ZlbWVudFR5cGVzW2Fzc2V0XSA9IHt9O1xyXG4gICAgaWYgKCFtb3ZlbWVudFR5cGVzW2Fzc2V0XVt0eXBlXSlcclxuICAgICAgICBtb3ZlbWVudFR5cGVzW2Fzc2V0XVt0eXBlXSA9IHtcclxuICAgICAgICAgICAgZGVwb3NpdDogW10sXHJcbiAgICAgICAgICAgIHdpdGhkcmF3YWw6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICBtb3ZlbWVudFR5cGVzW2Fzc2V0XVt0eXBlXVthbW91bnQgPiAwID8gXCJkZXBvc2l0XCIgOiBcIndpdGhkcmF3YWxcIl0ucHVzaChcclxuICAgICAgICBhbW91bnRcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE91dHB1dEVudHJ5KFxyXG4gICAgb3V0cHV0LFxyXG4gICAgdHlwZSxcclxuICAgIGJ1eSxcclxuICAgIHNlbGwsXHJcbiAgICBmZWUsXHJcbiAgICBkYXRlLFxyXG4gICAgb3BUeXBlLFxyXG4gICAgY29tbWVudCxcclxuICAgIHRyYWRlR3JvdXBcclxuKSB7XHJcbiAgICBpZiAoIWJ1eSlcclxuICAgICAgICBidXkgPSB7XHJcbiAgICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgY3VycmVuY3k6IFwiXCIsXHJcbiAgICAgICAgfTtcclxuICAgIGlmICghc2VsbClcclxuICAgICAgICBzZWxsID0ge1xyXG4gICAgICAgICAgICBhbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICBpZiAoIWZlZSlcclxuICAgICAgICBmZWUgPSB7XHJcbiAgICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgY3VycmVuY3k6IFwiXCIsXHJcbiAgICAgICAgfTtcclxuICAgIGlmIChidXkuYW1vdW50KSB0cmFja01vdmVtZW50cyhidXkuY3VycmVuY3ksIGJ1eS5hbW91bnQsIG9wVHlwZSwgZGF0ZSk7XHJcbiAgICBpZiAoc2VsbC5hbW91bnQpIHRyYWNrTW92ZW1lbnRzKHNlbGwuY3VycmVuY3ksIC1zZWxsLmFtb3VudCwgb3BUeXBlLCBkYXRlKTtcclxuICAgIGlmIChmZWUuYW1vdW50KSB0cmFja01vdmVtZW50cyhmZWUuY3VycmVuY3ksIC1mZWUuYW1vdW50LCBvcFR5cGUsIGRhdGUpO1xyXG4gICAgb3V0cHV0LnB1c2goW1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgdXRpbHMucHJpbnRBbW91bnQoYnV5KSxcclxuICAgICAgICBidXkuY3VycmVuY3ksXHJcbiAgICAgICAgdXRpbHMucHJpbnRBbW91bnQoc2VsbCksXHJcbiAgICAgICAgc2VsbC5jdXJyZW5jeSxcclxuICAgICAgICB1dGlscy5wcmludEFtb3VudChmZWUpLFxyXG4gICAgICAgIGZlZS5jdXJyZW5jeSxcclxuICAgICAgICBcIkdQSC1ERVhcIixcclxuICAgICAgICB0cmFkZUdyb3VwIHx8IFwiXCIsXHJcbiAgICAgICAgY29tbWVudCB8fCBcIlwiLFxyXG4gICAgICAgIGRhdGUsXHJcbiAgICBdKTtcclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckVudHJpZXMoZW50cmllcywgRklMVEVSX1RZUEUsIEZJTFRFUl9EQVRFKSB7XHJcbiAgICBpZiAoIUZJTFRFUl9UWVBFICYmICFGSUxURVJfREFURSkgcmV0dXJuIGVudHJpZXM7XHJcbiAgICBsZXQgZW50cmllc0tleXMgPSBPYmplY3Qua2V5cyhlbnRyaWVzKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gZW50cmllc0tleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBsZXQgdHJ4X2lkID0gZW50cmllc0tleXNbaV07XHJcbiAgICAgICAgbGV0IHt0aW1lc3RhbXAsIHR5cGUsIGRhdGF9ID0gZW50cmllc1t0cnhfaWRdO1xyXG5cclxuICAgICAgICBpZiAoISFGSUxURVJfVFlQRSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gRklMVEVSX1RZUEUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbnRyaWVzW3RyeF9pZF07XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEhRklMVEVSX0RBVEUpIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBEYXRlKHRpbWVzdGFtcCkuZ2V0VGltZSgpIDwgRklMVEVSX0RBVEUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbnRyaWVzW3RyeF9pZF07XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgUmVtb3ZlZCAke1xyXG4gICAgICAgICAgICBlbnRyaWVzS2V5cy5sZW5ndGggLSBPYmplY3Qua2V5cyhlbnRyaWVzKS5sZW5ndGhcclxuICAgICAgICB9IGVudHJpZXMgYnkgZmlsdGVyaW5nYFxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbnRyaWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBncm91cEVudHJpZXMoZW50cmllcykge1xyXG4gICAgbGV0IHByZXZpb3VzX2ZpbGwgPSB7fTtcclxuICAgIGxldCByZWNvcmRLZXlzID0gT2JqZWN0LmtleXMoZW50cmllcyk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IHJlY29yZEtleXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBsZXQgdHJ4X2lkID0gcmVjb3JkS2V5c1tpXTtcclxuICAgICAgICBsZXQge3RpbWVzdGFtcCwgdHlwZSwgZGF0YX0gPSBlbnRyaWVzW3RyeF9pZF07XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZmlsbF9vcmRlclwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IHQxID0gbW9tZW50KHRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFya2V0SWQgPVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmVjZWl2ZXMuYXNzZXRfaWQgKyBcIl9cIiArIGRhdGEucGF5cy5hc3NldF9pZDtcclxuICAgICAgICAgICAgICAgIGxldCBwcmV2aW91cyA9IHByZXZpb3VzX2ZpbGxbbWFya2V0SWRdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHQwID0gISFwcmV2aW91cyA/IG1vbWVudChwcmV2aW91cy50aW1lc3RhbXApIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgISFwcmV2aW91cyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHQxLmlzU2FtZSh0MCwgXCJkYXlcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5kYXRhLnBheXMuYXNzZXRfaWQgPT09IGRhdGEucGF5cy5hc3NldF9pZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzLmRhdGEucmVjZWl2ZXMuYXNzZXRfaWQgPT09IGRhdGEucmVjZWl2ZXMuYXNzZXRfaWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucGF5cy5hbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLnBheXMuYW1vdW50LCAxMCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChwcmV2aW91cy5kYXRhLnBheXMuYW1vdW50LCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yZWNlaXZlcy5hbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLnJlY2VpdmVzLmFtb3VudCwgMTApICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocHJldmlvdXMuZGF0YS5yZWNlaXZlcy5hbW91bnQsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmZlZS5hbW91bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChkYXRhLmZlZS5hbW91bnQsIDEwKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHByZXZpb3VzLmRhdGEuZmVlLmFtb3VudCwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXNbdHJ4X2lkXS5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZW50cmllc1twcmV2aW91cy50cnhfaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHByZXZpb3VzX2ZpbGxbbWFya2V0SWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyeF9pZCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYFJlbW92ZWQgJHtcclxuICAgICAgICAgICAgcmVjb3JkS2V5cy5sZW5ndGggLSBPYmplY3Qua2V5cyhlbnRyaWVzKS5sZW5ndGhcclxuICAgICAgICB9IGZpbGxfb3JkZXIgZW50cmllcyBieSBncm91cGluZ2BcclxuICAgICk7XHJcbiAgICByZXR1cm4gZW50cmllcztcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VEYXRhKHJlY29yZERhdGEsIGFjY291bnRJZCwgYWNjb3VudE5hbWUpIHtcclxuICAgIGxldCBvdXQgPSBbXTtcclxuICAgIG91dC5wdXNoKFtcclxuICAgICAgICBcIlR5cGVcIixcclxuICAgICAgICBcIkJ1eSBBbW91bnRcIixcclxuICAgICAgICBcIkJ1eSBDdXJyZW5jeVwiLFxyXG4gICAgICAgIFwiU2VsbCBBbW91bnRcIixcclxuICAgICAgICBcIlNlbGwgQ3VycmVuY3lcIixcclxuICAgICAgICBcIkZlZSBBbW91bnRcIixcclxuICAgICAgICBcIkZlZSBDdXJyZW5jeVwiLFxyXG4gICAgICAgIFwiRXhjaGFuZ2VcIixcclxuICAgICAgICBcIlRyYWRlIEdyb3VwXCIsXHJcbiAgICAgICAgXCJDb21tZW50XCIsXHJcbiAgICAgICAgXCJEYXRlXCIsXHJcbiAgICBdKTtcclxuICAgIGxldCB0eXBlQ291bnRzID0ge307XHJcblxyXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50VHlwZSh0eXBlKSB7XHJcbiAgICAgICAgaWYgKCF0eXBlQ291bnRzW3R5cGVdKSB0eXBlQ291bnRzW3R5cGVdID0gMDtcclxuICAgICAgICB0eXBlQ291bnRzW3R5cGVdKys7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgdHJ4X2lkIG9mIE9iamVjdC5rZXlzKHJlY29yZERhdGEpKSB7XHJcbiAgICAgICAgY29uc3Qge3RpbWVzdGFtcCwgdHlwZSwgZGF0YX0gPSByZWNvcmREYXRhW3RyeF9pZF07XHJcbiAgICAgICAgbGV0IGZlZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwidmVzdGluZ19iYWxhbmNlX3dpdGhkcmF3XCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgdmVzdGluZ0Z1bmRzID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBmZWUgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEuZmVlKTtcclxuICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm93bmVyID09PSBcIjEuMi4zMDY2NVwiICYmIHZlc3RpbmdGdW5kcy5hbW91bnQgPiAxMDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiSW5jb21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkRlcG9zaXRcIixcclxuICAgICAgICAgICAgICAgICAgICB2ZXN0aW5nRnVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBmZWUsIC8vIGRldi5iaXRzaGFyZXNibG9ja3NcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBgJHthY2NvdW50TmFtZX0gOiBWZXN0aW5nIGJhbGFuY2Ugd2l0aGRyYXdgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImJhbGFuY2VfY2xhaW1cIjpcclxuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlQ2xhaW1GdW5kcyA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS50b3RhbF9jbGFpbWVkKTtcclxuICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICBcIkRlcG9zaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlQ2xhaW1GdW5kcyxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7YWNjb3VudE5hbWV9IDogQmFsYW5jZSBjbGFpbWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRUeXBlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidHJhbnNmZXJcIjpcclxuICAgICAgICAgICAgICAgIGxldCBmdW5kcyA9IHV0aWxzLnBhcnNlQ3VycmVuY3koZGF0YS5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudG8gPT0gYWNjb3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRnVuZHMgY29taW5nIGluIHRvIHRoZSBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gYWRkT3V0cHV0RW50cnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50byA9PT0gXCIxLjIuMzkxOTM4XCIgJiYgZGF0YS5mcm9tID09PSBcIjEuMi4zODEwODZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkluY29tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiRGVwb3NpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgLy8gcGF5LnN2ayBhbmQgYml0c2hhcmVzLXVpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7YWNjb3VudE5hbWV9IDogRnJvbSAke2RhdGEuZnJvbX1gXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gYWRkT3V0cHV0RW50cnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXaXRoZHJhd2FsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7YWNjb3VudE5hbWV9OiBUbyAke2RhdGEudG99YFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImZpbGxfb3JkZXJcIjpcclxuICAgICAgICAgICAgICAgIGxldCBzb2xkRnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEucGF5cyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm91Z2h0RnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEucmVjZWl2ZXMpO1xyXG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZlZS5jdXJyZW5jeSAhPT0gXCJCVFNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3VnaHRGdW5kcy5jdXJyZW5jeSA9PT0gZmVlLmN1cnJlbmN5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdWdodEZ1bmRzLmFtb3VudCAtPSBmZWUuYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWUuYW1vdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNvbGRGdW5kcy5jdXJyZW5jeSA9PT0gZmVlLmN1cnJlbmN5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRGdW5kcy5hbW91bnQgLT0gZmVlLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLmFtb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICBcIlRyYWRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm91Z2h0RnVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgc29sZEZ1bmRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhc3NldF9pc3N1ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNzdWVkRnVuZHMgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEuYXNzZXRfdG9faXNzdWUpO1xyXG4gICAgICAgICAgICAgICAgZmVlID1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmlzc3VlciA9PT0gYWNjb3VudElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlzc3VlX3RvX2FjY291bnQgPT09IGFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dCA9IGFkZE91dHB1dEVudHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRGVwb3NpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZWRGdW5kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2FjY291bnROYW1lfSA6IElzc3VlZCB0byBhY2NvdW50YFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50VHlwZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF91cGRhdGVcIjpcclxuICAgICAgICAgICAgY2FzZSBcInByb3Bvc2FsX2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicHJvcG9zYWxfdXBkYXRlXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJhY2NvdW50X3doaXRlbGlzdFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwid29ya2VyX2NyZWF0ZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwibGltaXRfb3JkZXJfY3JlYXRlXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW1pdF9vcmRlcl9jYW5jZWxcIjpcclxuICAgICAgICAgICAgY2FzZSBcImNhbGxfb3JkZXJfdXBkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICBmZWUgPSB1dGlscy5wYXJzZUN1cnJlbmN5KGRhdGEuZmVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmVlLmFtb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIldpdGhkcmF3YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3R5cGV9IGZlZWBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWNjb3VudF9jcmVhdGVcIjpcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlZ2lzdHJhciA9PT0gYWNjb3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ID0gYWRkT3V0cHV0RW50cnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXaXRoZHJhd2FsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0eXBlfSBmZWVgXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnRUeXBlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFzc2V0X2Z1bmRfZmVlX3Bvb2xcIjoge1xyXG4gICAgICAgICAgICAgICAgZmVlID0gdXRpbHMucGFyc2VDdXJyZW5jeShkYXRhLmZlZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnVuZEZ1bmRzID0gdXRpbHMucGFyc2VDdXJyZW5jeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldF9pZDogXCIxLjMuMFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBvdXQgPSBhZGRPdXRwdXRFbnRyeShcclxuICAgICAgICAgICAgICAgICAgICBvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXaXRoZHJhd2FsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBmdW5kRnVuZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGAke3R5cGV9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFR5cGUodHlwZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmhhbmRsZWQgdHlwZTpcIiwgdHlwZSwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwYXJzZURhdGEsXHJcbiAgICBmaWx0ZXJFbnRyaWVzLFxyXG4gICAgZ3JvdXBFbnRyaWVzLFxyXG59O1xyXG4iLCJjb25zdCB7Q2hhaW5TdG9yZX0gPSByZXF1aXJlKFwiYml0c2hhcmVzanNcIik7XHJcblxyXG5mdW5jdGlvbiBwcmVjaXNpb25Ub1JhdGlvKHApIHtcclxuICAgIGlmICh0eXBlb2YgcCAhPT0gXCJudW1iZXJcIikgdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgbXVzdCBiZSBhIG51bWJlclwiKTtcclxuICAgIHJldHVybiBNYXRoLnBvdygxMCwgcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQ3VycmVuY3koYW1vdW50KSB7XHJcbiAgICBsZXQgYXNzZXQgPSBDaGFpblN0b3JlLmdldEFzc2V0KGFtb3VudC5hc3NldF9pZCk7XHJcbiAgICBpZiAoYXNzZXQpIGFzc2V0ID0gYXNzZXQudG9KUygpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYXNzZXQgPSB7XHJcbiAgICAgICAgICAgIHByZWNpc2lvbjogNSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgbGV0IHByZWNpc2lvblJhdGlvID0gcHJlY2lzaW9uVG9SYXRpbyhhc3NldC5wcmVjaXNpb24pO1xyXG4gICAgbGV0IGZ1bGxBbW91bnQgPSBhbW91bnQuYW1vdW50IC8gcHJlY2lzaW9uUmF0aW87XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFtb3VudDogZnVsbEFtb3VudCxcclxuICAgICAgICBjdXJyZW5jeTogYXNzZXQuc3ltYm9sLFxyXG4gICAgICAgIGFzc2V0X2lkOiBhbW91bnQuYXNzZXRfaWQsXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludEFtb3VudChhbW91bnQpIHtcclxuICAgIGlmICghYW1vdW50LmFtb3VudCB8fCAhYW1vdW50LmN1cnJlbmN5KSByZXR1cm4gXCJcIjtcclxuICAgIGxldCBhc3NldCA9IENoYWluU3RvcmUuZ2V0QXNzZXQoYW1vdW50LmFzc2V0X2lkKTtcclxuICAgIGlmIChhc3NldCkgYXNzZXQgPSBhc3NldC50b0pTKCk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhc3NldCA9IHtcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiA1LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYW1vdW50LmFtb3VudC50b0ZpeGVkKGFzc2V0LnByZWNpc2lvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEluZGV4KHN0cikge1xyXG4gICAgbGV0IHBpZWNlcyA9IHN0ci5zcGxpdChcIi5cIik7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQocGllY2VzWzJdLCAxMCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcGFyc2VDdXJyZW5jeSxcclxuICAgIHByaW50QW1vdW50LFxyXG4gICAgZ2V0SW5kZXgsXHJcbn07XHJcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==