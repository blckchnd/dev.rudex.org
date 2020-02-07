(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[5],{

/***/ 2746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InvoiceRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2747);
/* harmony import */ var _InvoicePay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2749);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2752);
/* harmony import */ var jsonschema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2754);
/* harmony import */ var jsonschema__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonschema__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_stylesheets_components_merchant_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2765);
/* harmony import */ var _assets_stylesheets_components_merchant_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_merchant_scss__WEBPACK_IMPORTED_MODULE_7__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Invoice = function (_React$Component) {
    _inherits(Invoice, _React$Component);

    function Invoice(props) {
        _classCallCheck(this, Invoice);

        var _this = _possibleConstructorReturn(this, (Invoice.__proto__ || Object.getPrototypeOf(Invoice)).call(this, props));

        _this.state = {
            tabs: [{
                name: "Request",
                link: "/invoice/request",
                translate: "invoice.request.title",
                content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InvoiceRequest__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
                    validateFormat: _this._validateFormat.bind(_this)
                }))
            }, {
                name: "Pay",
                link: "/invoice/pay",
                translate: "invoice.pay.title",
                content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InvoicePay__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
                    validateFormat: _this._validateFormat.bind(_this)
                }))
            }]
        };
        return _this;
    }

    _createClass(Invoice, [{
        key: "_validateFormat",
        value: function _validateFormat(invoice) {
            var schema = {
                type: "object",
                properties: {
                    to: { type: "string" },
                    to_label: { type: "string" },
                    currency: { type: "string" },
                    memo: { type: "string" },
                    line_items: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                label: { type: "string" },
                                quantity: { type: "float", minimum: 1 },
                                price: { type: "float" }
                            }
                        }
                    },
                    note: { type: "string" },
                    required: ["to", "currency", "line_items"]
                }
            };
            var errors = Object(jsonschema__WEBPACK_IMPORTED_MODULE_6__["validate"])(invoice, schema).errors;
            return !errors.length;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var isTab = this.state.tabs.some(function (tab) {
                return tab.link === _this2.props.match.url;
            });
            if (!isTab) this.props.history.push("/invoice/pay");
        }
    }, {
        key: "onTabChange",
        value: function onTabChange(value) {
            this.props.history.push(value);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "merchant-protocol center" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Card"],
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Tabs"],
                        {
                            activeKey: this.props.location.pathname,
                            animated: false,
                            onChange: this.onTabChange.bind(this)
                        },
                        this.state.tabs.map(function (tab) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Tabs"].TabPane,
                                {
                                    key: tab.link,
                                    tab: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate(tab.translate)
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    { className: "padding" },
                                    tab.content
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Invoice;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Invoice = Object(_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_5__["bindToCurrentAccount"])(Invoice);
/* harmony default export */ __webpack_exports__["default"] = (Invoice);

/***/ }),

/***/ 2747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2149);
/* harmony import */ var _Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2138);
/* harmony import */ var lzma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2566);
/* harmony import */ var lzma__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lzma__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_base58__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2748);
/* harmony import */ var common_base58__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(common_base58__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2351);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var id = 1;

var InvoiceRequest = function (_React$Component) {
    _inherits(InvoiceRequest, _React$Component);

    function InvoiceRequest(props) {
        _classCallCheck(this, InvoiceRequest);

        var _this = _possibleConstructorReturn(this, (InvoiceRequest.__proto__ || Object.getPrototypeOf(InvoiceRequest)).call(this, props));

        _this.hasErrors = function () {
            var formError = false;
            var values = _this.props.form.getFieldsValue(["line_items", "memo", "keys"]);

            formError = Object.keys(values).some(function (field) {
                if (field !== "line_items") {
                    return !values[field];
                } else {
                    if (values.keys) return values.keys.some(function (item) {
                        return !values[field][item].label || !values[field][item].price || !values[field][item].quantity;
                    });
                }
            });

            return formError || !_this.state.recipient_name;
        };

        _this.remove = function (k) {
            var form = _this.props.form;

            var keys = form.getFieldValue("keys");
            if (keys.length === 1) {
                return;
            }
            var nextKeys = keys.filter(function (key) {
                return key !== k;
            });
            form.setFieldsValue({
                keys: nextKeys
            });
        };

        _this.add = function () {
            var form = _this.props.form;

            var keys = form.getFieldValue("keys");
            var nextKeys = keys.concat(id++);
            form.setFieldsValue({
                keys: nextKeys
            });
        };

        _this.state = {
            invoice: null,
            invoiceData: null,
            recipient_name: null,
            recipient_name_account: null,
            currency: "BTS",
            defaultAssets: ["BTS", "CNY", "USD"]
        };
        return _this;
    }

    _createClass(InvoiceRequest, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState({
                recipient_name: this.props.currentAccount.get("name")
            });
        }
    }, {
        key: "_printInvoice",
        value: function _printInvoice(invoice) {
            var _this2 = this;

            if (this.props.validateFormat(invoice)) {
                Object(lzma__WEBPACK_IMPORTED_MODULE_4__["compress"])(JSON.stringify(invoice), 9, function (result, error) {
                    var invoiceData = common_base58__WEBPACK_IMPORTED_MODULE_5___default.a.encode(Buffer.from(result));
                    _this2.setState({
                        invoiceData: invoiceData
                    });
                    console.log("Invoice data", invoice, invoiceData);
                });
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps, nextContext) {
            if (this.state.recipient_name == null && this.props.currentAccount) {
                this.setState({
                    recipient_name: this.props.currentAccount.get("name")
                });
            }
        }
    }, {
        key: "fromChanged",
        value: function fromChanged(recipient_name) {
            this.setState({ recipient_name: recipient_name, recipient_name_account: null });
        }
    }, {
        key: "onFromAccountChanged",
        value: function onFromAccountChanged(recipient_name_account) {
            this.setState({ recipient_name_account: recipient_name_account });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            var _this3 = this;

            var currency = this.state.currency;

            e.preventDefault();
            this.props.form.validateFields(function (err, values) {
                if (!err) {
                    var line_items = values.line_items,
                        memo = values.memo,
                        note = values.note,
                        to_label = values.to_label;
                    // remove empty lines

                    line_items = line_items.filter(function (item) {
                        return !!item;
                    });
                    _this3._printInvoice({
                        currency: currency,
                        line_items: line_items,
                        memo: memo,
                        note: note,
                        to: _this3.state.recipient_name,
                        to_label: to_label
                    });
                }
            });
        }
    }, {
        key: "onChangeCurrency",
        value: function onChangeCurrency(e) {
            var asset = bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["ChainStore"].getAsset(e);
            this.setState({ currency: asset.get("symbol") });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props$form = this.props.form,
                getFieldValue = _props$form.getFieldValue,
                getFieldDecorator = _props$form.getFieldDecorator;
            var _state = this.state,
                currency = _state.currency,
                defaultAssets = _state.defaultAssets;

            getFieldDecorator("keys", { initialValue: [0] });
            var keys = getFieldValue("keys");
            var formItems = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Row"],
                    { style: { marginTop: "0.5rem", marginBottom: "0.5rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Col"],
                        { span: 12 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            component: "span",
                            content: "invoice.request.items"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Col"],
                        { span: 5 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            component: "span",
                            content: "invoice.request.quantity"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Col"],
                        { span: 5 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            component: "span",
                            content: "invoice.request.price"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Col"],
                        { span: 2 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            component: "span",
                            content: "invoice.request.action"
                        })
                    )
                ),
                keys.map(function (k, index) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Form"].Item,
                        { key: k, style: { marginBottom: "0px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Input"].Group,
                            { compact: true },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Row"],
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Col"],
                                    { span: 12 },
                                    getFieldDecorator("line_items[" + k + "]label")(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Input"], null))
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Col"],
                                    { span: 5 },
                                    getFieldDecorator("line_items[" + k + "]quantity")(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Input"], { type: "number" }))
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Col"],
                                    { span: 5 },
                                    getFieldDecorator("line_items[" + k + "]price")(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Input"], { type: "number" }))
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Col"],
                                    { span: 2 },
                                    k == keys[keys.length - 1] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                                        type: "primary",
                                        icon: "plus-circle-o",
                                        onClick: function onClick() {
                                            return _this4.add(k);
                                        }
                                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                                        type: "primary",
                                        icon: "minus-circle-o",
                                        onClick: function onClick() {
                                            return _this4.remove(k);
                                        }
                                    })
                                )
                            )
                        )
                    );
                })
            );

            var error = this.hasErrors();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "merchant-protocol--request" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    className: "invoice-request-input",
                    label: "invoice.request.recipient_account",
                    accountName: this.state.recipient_name,
                    onChange: this.fromChanged.bind(this),
                    onAccountChanged: this.onFromAccountChanged.bind(this),
                    account: this.state.recipient_name,
                    typeahead: true,
                    size: 32
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Form"],
                    { onSubmit: this.handleSubmit.bind(this), required: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Form"].Item,
                        {
                            className: "invoice-request-input",
                            label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("invoice.request.identifier"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Tooltip"],
                                    {
                                        placement: "topLeft",
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("invoice.request.identifier_tooltip")
                                    },
                                    "\xA0",
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        },
                        getFieldDecorator("memo")(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Input"], null))
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Form"].Item,
                        {
                            className: "invoice-request-input",
                            label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("invoice.request.payment_asset"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Tooltip"],
                                    {
                                        placement: "topLeft",
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("invoice.request.payment_asset_tooltip")
                                    },
                                    "\xA0",
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            value: currency,
                            assets: defaultAssets,
                            onChange: this.onChangeCurrency.bind(this)
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Form"].Item,
                        {
                            className: "invoice-request-input",
                            label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("invoice.request.recipient_name"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Tooltip"],
                                    {
                                        placement: "topLeft",
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("invoice.request.recipient_name_tooltip")
                                    },
                                    "\xA0",
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        },
                        getFieldDecorator("to_label")(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Input"], null))
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Form"].Item,
                        {
                            className: "invoice-request-input",
                            label: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "span",
                                null,
                                counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("invoice.request.note"),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Tooltip"],
                                    {
                                        placement: "topLeft",
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("invoice.request.note_tooltip")
                                    },
                                    "\xA0",
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        },
                        getFieldDecorator("note")(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Input"].TextArea, { rows: 3 }))
                    ),
                    formItems,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Form"].Item,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Button"],
                            {
                                type: "primary",
                                htmlType: "submit",
                                disabled: error
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "invoice.request.create_invoice_string" })
                        )
                    )
                ),
                this.state.invoiceData && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { marginTop: "2rem" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Input"].TextArea, {
                            disabled: true,
                            rows: 4,
                            value: this.state.invoiceData
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { style: { float: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                            useDiv: false,
                            text: this.state.invoiceData
                        })
                    )
                )
            );
        }
    }]);

    return InvoiceRequest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

InvoiceRequest = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Form"].create({ name: "invoice_request" })(InvoiceRequest);

/* harmony default export */ __webpack_exports__["default"] = (InvoiceRequest);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 2748:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(455);


/***/ }),

/***/ 2749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2156);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(578);
/* harmony import */ var _Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2149);
/* harmony import */ var _Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2155);
/* harmony import */ var bitsharesjs_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(429);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1854);
/* harmony import */ var stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2154);
/* harmony import */ var lzma__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2566);
/* harmony import */ var lzma__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lzma__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var common_base58__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2748);
/* harmony import */ var common_base58__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(common_base58__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(580);
/* harmony import */ var _PrintReceiptButton_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2750);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(581);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sanitize__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2752);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2560);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2364);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ScanOrEnterText__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2753);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















// invoice example:
//{
//    "to" : "merchant_account_name",
//    "to_label" : "Merchant Name",
//    "currency": "TEST",
//    "memo" : "Invoice #1234",
//    "line_items" : [
//        { "label" : "Something to Buy", "quantity": 1, "price" : "1000.00" },
//        { "label" : "10 things to Buy", "quantity": 10, "price" : "1000.00" }
//    ],
//    "note" : "Something the merchant wants to say to the user",
//    "callback" : "https://merchant.org/complete"
//}
// http://localhost:8080/#/invoice/8Cv8ZjMa8XCazX37XgNhj4jNc4Z5WgZFM5jueMEs2eEvL3pEmELjAVCWZEJhj9tEG5RuinPCjY1Fi34ozb8Cg3H5YBemy9JoTRt89X1QaE76xnxWPZzLcUjvUd4QZPjCyqZNxvrpCN2mm1xVRY8FNSVsoxsrZwREMyygahYz8S23ErWPRVsfZXTwJNCCbqjWDTReL5yytTKzxyKhg4YrnntYG3jdyrBimDGBRLU7yRS9pQQLcAH4T7j8LXkTocS7w1Zj4amckBmpg5EJCMATTRhtH8RSycfiXWZConzqqzxitWCxZK846YHNh

var InvoicePay = function (_React$Component) {
    _inherits(InvoicePay, _React$Component);

    function InvoicePay(props) {
        var _this2 = this;

        _classCallCheck(this, InvoicePay);

        var _this = _possibleConstructorReturn(this, (InvoicePay.__proto__ || Object.getPrototypeOf(InvoicePay)).call(this, props));

        _this.decompressRawData = function (data) {
            return new Promise(function (resolve, reject) {
                Object(lzma__WEBPACK_IMPORTED_MODULE_8__["decompress"])(data, function (result, error) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
        };

        _this.handleRawInvoiceDataChange = function (e) {
            var value = e.target.value.replace(/\s/g, "");
            _this.setState({ rawDataInputValue: value }, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var compressedData, decompressedData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                compressedData = common_base58__WEBPACK_IMPORTED_MODULE_9___default.a.decode(value);
                                _context.next = 4;
                                return _this.decompressRawData(compressedData);

                            case 4:
                                decompressedData = _context.sent;

                                _this.parseInvoiceData(decompressedData);
                                _context.next = 12;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context["catch"](0);

                                console.log(_context.t0);
                                _this.setState({ error: _context.t0.message });

                            case 12:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[0, 8]]);
            })));
        };

        _this.handleQrScanSuccess = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
                var address = _ref3.address;
                var compressedData, decompressedData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                compressedData = common_base58__WEBPACK_IMPORTED_MODULE_9___default.a.decode(address);
                                _context2.next = 4;
                                return _this.decompressRawData(compressedData);

                            case 4:
                                decompressedData = _context2.sent;

                                _this.parseInvoiceData(decompressedData);
                                _context2.next = 12;
                                break;

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2["catch"](0);

                                console.log(_context2.t0);
                                _this.setState({ error: _context2.t0.message });

                            case 12:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[0, 8]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }();

        _this.state = {
            invoice: null,
            pay_from_name: null,
            pay_from_account: null,
            pay_to_account: null,
            error: null,
            blockNum: null,
            invoiceQr: false,
            rawDataInputValue: "",
            isRawDataInputVisible: false
        };
        _this.onBroadcastAndConfirm = _this.onBroadcastAndConfirm.bind(_this);
        _this.getTotal = _this.getTotal.bind(_this);
        // this._printExampleInvoice();
        return _this;
    }

    _createClass(InvoicePay, [{
        key: "_printExampleInvoice",
        value: function _printExampleInvoice() {
            var invoice = {
                to: "sschiessl",
                to_label: "Stefan S.",
                currency: "BTS",
                memo: "Invoice #1234",
                line_items: [{ label: "Something to Buy", quantity: 1, price: "0.1" }, { label: "10 things to Buy", quantity: 10, price: "0.02" }],
                note: "Something the merchant wants to say to the user"
            };
            Object(lzma__WEBPACK_IMPORTED_MODULE_8__["compress"])(JSON.stringify(invoice), 9, function (result, error) {
                var a = common_base58__WEBPACK_IMPORTED_MODULE_9___default.a;
                console.log(common_base58__WEBPACK_IMPORTED_MODULE_9___default.a.encode(Buffer.from(result)));
            });
        }
    }, {
        key: "componentDidMount",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var compressed_data, data;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                compressed_data = common_base58__WEBPACK_IMPORTED_MODULE_9___default.a.decode(this.props.match.params.data);

                                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].unlisten(this.onBroadcastAndConfirm);
                                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].listen(this.onBroadcastAndConfirm);
                                _context3.prev = 3;
                                _context3.next = 6;
                                return this.decompressRawData(compressed_data);

                            case 6:
                                data = _context3.sent;
                                _context3.next = 9;
                                return this.parseInvoiceData(data);

                            case 9:
                                _context3.next = 14;
                                break;

                            case 11:
                                _context3.prev = 11;
                                _context3.t0 = _context3["catch"](3);

                                this.setState({ isRawDataInputVisible: true });

                            case 14:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[3, 11]]);
            }));

            function componentDidMount() {
                return _ref4.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps, nextContext) {
            if (this.state.pay_from_name == null && this.props.currentAccount) {
                // check if current account has already paid
                var paymentOperation = this._findPayment();

                this.setState({
                    pay_from_name: this.props.currentAccount.get("name"),
                    paymentOperation: paymentOperation
                });
            }
        }
    }, {
        key: "parseInvoiceData",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
                var invoice, assetsArray, pay_to_account;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;

                                data = sanitize__WEBPACK_IMPORTED_MODULE_14___default()(data, {
                                    whiteList: [], // empty, means filter out all tags
                                    stripIgnoreTag: true // filter out all HTML not in the whilelist
                                });

                                invoice = JSON.parse(data);

                                if (!this.props.validateFormat(invoice)) {
                                    _context4.next = 13;
                                    break;
                                }

                                _context4.next = 6;
                                return Object(bitsharesjs_es__WEBPACK_IMPORTED_MODULE_5__["FetchChainObjects"])(bitsharesjs_es__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getAsset, [invoice.currency]);

                            case 6:
                                assetsArray = _context4.sent;
                                _context4.next = 9;
                                return Object(bitsharesjs_es__WEBPACK_IMPORTED_MODULE_5__["FetchChain"])("getAccount", invoice.to, undefined, _defineProperty({}, invoice.to, false));

                            case 9:
                                pay_to_account = _context4.sent;

                                this.setState({
                                    invoice: invoice,
                                    asset: assetsArray[0],
                                    pay_to_account: pay_to_account,
                                    pay_from_name: this.props.currentAccount.get("name"),
                                    error: null,
                                    isRawDataInputVisible: false
                                }, this.getTotal);
                                _context4.next = 14;
                                break;

                            case 13:
                                this.setState({
                                    error: counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("invoice.invalid_format")
                                });

                            case 14:
                                _context4.next = 19;
                                break;

                            case 16:
                                _context4.prev = 16;
                                _context4.t0 = _context4["catch"](0);

                                this.setState({ error: _context4.t0.message });

                            case 19:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 16]]);
            }));

            function parseInvoiceData(_x2) {
                return _ref5.apply(this, arguments);
            }

            return parseInvoiceData;
        }()
    }, {
        key: "parsePrice",
        value: function parsePrice(price) {
            var m = price.match(/([\d\,\.\s]+)/);
            if (!m || m.length < 2) 0.0;
            return parseFloat(m[1].replace(/[\,\s]/g, ""));
        }
    }, {
        key: "_findPayment",
        value: function _findPayment() {
            var _this3 = this;

            if (Object(_Utility_BindToCurrentAccount__WEBPACK_IMPORTED_MODULE_16__["hasLoaded"])(this.props.currentAccount) && this.state.total_amount && this.state.pay_to_account) {
                var find_to = this.state.pay_to_account.get("id");
                var find_asset_id = this.state.asset.get("id");
                var find_amount = this.state.total_amount * Math.pow(10, this.state.asset.get("precision"));

                var transaction = null;
                this.props.currentAccount.get("history").toJS().forEach(function (_op) {
                    var op = _op.op;
                    if (op[0] == 0) {
                        var from = op[1].from;
                        var to = op[1].to;
                        var amount = op[1].amount.amount;
                        var asset_id = op[1].amount.asset_id;

                        var invoice = _this3.state.invoice;

                        console.log(find_to, to, find_asset_id, asset_id, find_amount, amount);

                        if (find_to == to && find_asset_id == asset_id && find_amount == amount) {
                            transaction = _op;
                        }
                    }
                });
                return transaction;
            }
        }
    }, {
        key: "getTotal",
        value: function getTotal() {
            var _this4 = this;

            var items = this.state.invoice.line_items;
            if (!items || items.length === 0) return 0.0;
            var total_amount = items.reduce(function (total, item) {
                var price = _this4.parsePrice(item.price);
                if (!price) return total;
                return total + item.quantity * price;
            }, 0.0);

            // check if current account has already paid
            var paymentOperation = this._findPayment();

            this.setState({
                total_amount: parseFloat(total_amount.toFixed(this.state.asset.get("precision"))),
                paymentOperation: paymentOperation
            });
        }
    }, {
        key: "onBroadcastAndConfirm",
        value: function onBroadcastAndConfirm(confirm_store_state) {
            if (confirm_store_state.included && confirm_store_state.broadcasted_transaction) {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].unlisten(this.onBroadcastAndConfirm);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].reset();
                this.setState({ blockNum: confirm_store_state.trx_block_num });

                /*  if (this.state.invoice.callback) {
                    let trx = confirm_store_state.broadcasted_transaction;
                    let url = `${this.state.invoice.callback}?block=${
                        trx.ref_block_num
                    }&trx=${trx.id()}`;
                    window.location.href = url;
                }  */
            }
        }
    }, {
        key: "onPayClick",
        value: function onPayClick(e) {
            var _this5 = this;

            e.preventDefault();
            var _state = this.state,
                asset = _state.asset,
                total_amount = _state.total_amount;

            var precision = common_utils__WEBPACK_IMPORTED_MODULE_10__["default"].get_asset_precision(asset.get("precision"));
            var to_account = bitsharesjs_es__WEBPACK_IMPORTED_MODULE_5__["ChainStore"].getAccount(this.state.invoice.to);
            if (!to_account) {
                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_6__["default"].error("Account " + this.state.invoice.to + " not found");
                return;
            }
            actions_AccountActions__WEBPACK_IMPORTED_MODULE_2__["default"].transfer(this.state.pay_from_account.get("id"), to_account.get("id"), parseInt(total_amount * precision, 10), asset.get("id"), this.state.invoice.memo).then(function () {
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].unlisten(_this5.onBroadcastAndConfirm);
                stores_TransactionConfirmStore__WEBPACK_IMPORTED_MODULE_7__["default"].listen(_this5.onBroadcastAndConfirm);
            }).catch(function (e) {
                console.log("error: ", e);
            });
        }
    }, {
        key: "fromChanged",
        value: function fromChanged(pay_from_name) {
            this.setState({ pay_from_name: pay_from_name, pay_from_account: null });
        }
    }, {
        key: "onFromAccountChanged",
        value: function onFromAccountChanged(pay_from_account) {
            this.setState({ pay_from_account: pay_from_account });
        }
    }, {
        key: "onToAccountChanged",
        value: function onToAccountChanged(pay_to_account) {
            this.setState({ pay_to_account: pay_to_account });
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            var data = this.props.match.params.data;

            if (this.state.isRawDataInputVisible) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScanOrEnterText__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        labelContent: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, {
                            component: "span",
                            content: "invoice.raw_invoice_data"
                        }),
                        submitBtnText: counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("invoice.use_invoice_data"),
                        dataFoundText: counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("invoice.invoice_data_found") + ":",
                        onInputChange: this.handleRawInvoiceDataChange,
                        inputValue: this.state.rawDataInputValue,
                        handleQrScanSuccess: this.handleQrScanSuccess
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h4",
                        { className: "has-error text-center" },
                        this.state.error
                    )
                );
            }
            if (this.state.error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "h4",
                    { className: "has-error text-center" },
                    this.state.error
                )
            );
            if (!this.state.invoice) return null;
            if (!this.state.asset) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    className: "has-error text-center",
                    component: "h4",
                    content: "transfer.errors.asset_unsupported",
                    currency: this.state.invoice.currency
                })
            );

            var _state2 = this.state,
                invoice = _state2.invoice,
                total_amount = _state2.total_amount;

            var asset = invoice.currency;
            var balance = null;

            if (invoice.to_label) {
                invoice.to_name = invoice.to_label;
            }

            var receiptData = _extends({}, invoice, {
                total_amount: total_amount ? total_amount.toString() : 0,
                asset: asset,
                from: this.state.pay_from_account,
                blockNum: this.state.blockNum
            });

            if (this.state.pay_from_account) {
                var balances = this.state.pay_from_account.get("balances");
                var balanceValue = balances.get(this.state.asset.get("id"));
                balance = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { component: "span", content: "transfer.available" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        {
                            style: {
                                borderBottom: "#A09F9F 1px dotted",
                                cursor: "pointer"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BalanceComponent__WEBPACK_IMPORTED_MODULE_4__["default"], { balance: balanceValue })
                    )
                );
            }
            var items = invoice.line_items.map(function (i, index) {
                var price = _this6.parsePrice(i.price);
                var amount = i.quantity * price;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Row"],
                    { key: "invoice_item_" + index },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 10 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "item-name" },
                            i.label
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "item-description" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 3 },
                        i.quantity,
                        " x"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 5 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            amount: i.price,
                            asset: asset,
                            exact_amount: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 5 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            amount: amount,
                            asset: asset,
                            exact_amount: true
                        })
                    )
                );
            });
            var invoiceData = data !== "pay" ? data : this.state.rawDataInputValue;

            var qrcode = null;
            if (this.state.invoiceQr) {
                qrcode = invoiceData;
            } else {
                if (this.state.pay_from_name && invoice.to !== this.state.pay_from_name) {
                    qrcode = "bitshares:operation/transfer?to=" + invoice.to + "&from=" + this.state.pay_from_name + "&asset=" + asset + "&amount=" + total_amount + (invoice.memo ? "&memo=" + invoice.memo : "");
                }
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "merchant-protocol--pay" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { float: "right" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrintReceiptButton_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        data: receiptData,
                        parsePrice: this.parsePrice
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { component: "h3", content: "invoice.payment_request" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Row"],
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        {
                            span: 10,
                            style: {
                                width: "30rem"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "h4",
                            null,
                            invoice.memo
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            label: "invoice.paid_by",
                            accountName: this.state.pay_from_name,
                            onChange: this.fromChanged.bind(this),
                            onAccountChanged: this.onFromAccountChanged.bind(this),
                            account: this.state.pay_from_name,
                            typeahead: true,
                            size: 32
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Account_AccountSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            label: "invoice.pay_to",
                            accountName: invoice.to,
                            disabled: true,
                            onAccountChanged: this.onToAccountChanged.bind(this),
                            account: this.state.pay_to_account,
                            size: 32
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 6, offset: 4 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "inline-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, {
                                component: "h4",
                                content: "invoice.pay.barcode"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Button"],
                                {
                                    type: "secondary",
                                    style: {
                                        width: "180px",
                                        marginBottom: "20px"
                                    },
                                    onClick: function onClick() {
                                        _this6.setState({
                                            invoiceQr: !_this6.state.invoiceQr
                                        });
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, {
                                    component: "span",
                                    content: this.state.invoiceQr ? "invoice.pay.invoice_qr_code" : "invoice.pay.payment_qr_code"
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_18___default.a, {
                            size: 180,
                            value: qrcode ? qrcode : "",
                            bgColor: qrcode ? undefined : "#000000"
                        })
                    )
                ),
                invoice.to_name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "invoice.request.recipient_name" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        null,
                        invoice.to_name
                    )
                ),
                invoice.note && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { content: "invoice.note" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        null,
                        invoice.note
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Row"],
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 10 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { component: "span", content: "invoice.items" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 3 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { component: "span", content: "invoice.amount" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 5 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { component: "span", content: "invoice.unit" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 5 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { component: "span", content: "invoice.total" })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "divider" }),
                items,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "divider" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Row"],
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 18 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, { component: "span", content: "invoice.total" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Col"],
                        { span: 5 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            amount: total_amount,
                            asset: asset,
                            exact_amount: true
                        })
                    )
                ),
                this.state.paymentOperation ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "h3",
                        null,
                        counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("invoice.payment_proof"),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_15___default.a.translate("invoice.tooltip_payment_proof"),
                                mouseEnterDelay: 0.5
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Icon"], { type: "question-circle" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "table",
                        { className: "table" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "tbody",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                includeOperationId: true,
                                key: this.state.paymentOperation.id,
                                operationId: this.state.paymentOperation.id,
                                op: this.state.paymentOperation.op,
                                result: this.state.paymentOperation.result,
                                block: this.state.paymentOperation.block_num,
                                current: this.props.currentAccount.get("id")
                            })
                        )
                    )
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Button"],
                    {
                        type: "primary",
                        style: { marginTop: "30px" },
                        disabled: !this.state.pay_from_account,
                        onClick: this.onPayClick.bind(this)
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_12___default.a, {
                        content: "invoice.pay_button",
                        asset: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_FormattedAsset__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            amount: total_amount,
                            asset: asset,
                            exact_amount: true
                        }),
                        name: invoice.to
                    })
                )
            );
        }
    }]);

    return InvoicePay;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (InvoicePay);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 2750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2687);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2751);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1899);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1900);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }









var printReceipt = function printReceipt(_ref) {
    var data = _ref.data,
        parsePrice = _ref.parsePrice;
    var line_items = data.line_items,
        to = data.to,
        asset = data.asset,
        from = data.from,
        total_amount = data.total_amount,
        memo = data.memo,
        currency = data.currency,
        blockNum = data.blockNum,
        to_name = data.to_name,
        note = data.note;

    var marginUp = 25,
        lineMargin = 5,
        marginLeft = 15,
        transactionDataright = 150,
        width = 210,
        rowHeight = 10,
        fontSize = 16,
        totalFontSize = 20;

    var height = 0;
    var body = [];
    var transactionId = "";
    var fromName = "";

    if (from) {
        from.get("history").forEach(function (op) {
            if (op.get("block_num") === blockNum) {
                transactionId = op.get("id");
                return;
            }
        });
        fromName = from.get("name");
    }

    var date = stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().blockHeaders.get(blockNum);

    var timestamp = date ? date.timestamp.toLocaleDateString("en-US").replace(/\//g, ".") : new Date().toLocaleDateString("en-US").replace(/\//g, ".");

    var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3___default.a({
        orientation: "portrait",
        compressPdf: true
    });

    pdf.setFontStyle("bold");
    pdf.setFontSize(fontSize);
    pdf.text(counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("invoice.pay_to", { locale: "en" }).toUpperCase(), marginLeft, height += marginUp);
    pdf.setFontStyle("normal");
    pdf.text(to_name, marginLeft, height += rowHeight);
    pdf.text(to, marginLeft, height += rowHeight);

    pdf.autoTable({
        body: [["", counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("invoice.memo", { locale: "en" }), memo], [{
            content: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("invoice.paid_by", { locale: "en" }).toUpperCase(),
            styles: { fontStyle: "bold" }
        }, counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("invoice.date", { locale: "en" }), timestamp], [fromName, counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("invoice.transaction", { locale: "en" }), transactionId], [{
            content: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("invoice.note", { locale: "en" }).toUpperCase(),
            styles: { fontStyle: "bold" }
        }, "", ""], [note, "", ""]],
        bodyStyles: { valign: "top" },
        styles: { cellWidth: "wrap", rowPageBreak: "auto", halign: "justify" },
        columnStyles: {
            0: { halign: "left", cellWidth: 90 },
            1: { fontStyle: "bold" },
            2: { cellWidth: 40 }
        },
        startY: height += rowHeight,
        theme: "plain"
    });

    pdf.line(lineMargin, height = pdf.autoTable.previous.finalY + rowHeight, width - lineMargin, height);

    pdf.setFontSize(totalFontSize);
    pdf.text(counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("invoice.receipt_total", { locale: "en" }).toUpperCase(), marginLeft, height += rowHeight);
    pdf.text(total_amount + " " + currency, transactionDataright, height);
    pdf.line(lineMargin, height += 5, width - lineMargin, height);

    pdf.setFontStyle("normal");
    pdf.setFontSize(fontSize);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = line_items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            var price = parsePrice(item.price);
            var unit = price + " " + asset;
            var total = item.quantity * price + " " + asset;
            body = [].concat(_toConsumableArray(body), [{ descrption: item.label, unit: unit, amount: item.quantity, total: total }]);
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

    pdf.autoTable({
        columns: [{
            header: { content: "DESCRIPTION", styles: { halign: "left" } },
            dataKey: "descrption"
        }, { header: "AMOUNT", dataKey: "amount" }, { header: "UNIT", dataKey: "unit" }, { header: "TOTAL", dataKey: "total" }],
        body: body,
        startY: height + rowHeight,
        bodyStyles: { valign: "top" },
        styles: { cellWidth: "auto", rowPageBreak: "auto", halign: "right" },
        columnStyles: {
            descrption: { halign: "left" }
        },
        theme: "plain"
    });
    pdf.save("bitshares-receipt-" + to + ".pdf");
};
var PrintReceiptButton = function PrintReceiptButton(_ref2) {
    var data = _ref2.data,
        parsePrice = _ref2.parsePrice;

    var tip = "tooltip.print_receipt",
        dataPlace = "left",
        buttonText = counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate("invoice.print_receipt");
    if (data.blockNum) actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_6__["default"].getHeader.defer(data.blockNum);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Tooltip"],
        { placement: dataPlace, title: counterpart__WEBPACK_IMPORTED_MODULE_2___default.a.translate(tip) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
            {
                type: "primary",
                icon: "download",
                onClick: function onClick() {
                    return printReceipt({ data: data, parsePrice: parsePrice });
                }
            },
            buttonText
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (PrintReceiptButton);

/***/ }),

/***/ 2752:
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

/***/ 2753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScanOrEnterText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QRAddressScanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2403);





function ScanOrEnterText(_ref) {
    var labelContent = _ref.labelContent,
        handleQrScanSuccess = _ref.handleQrScanSuccess,
        onInputChange = _ref.onInputChange,
        inputValue = _ref.inputValue,
        submitBtnText = _ref.submitBtnText,
        dataFoundText = _ref.dataFoundText;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "div",
        { style: { marginBottom: "1em" } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "label",
            { className: "left-label" },
            labelContent
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "inline-label" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
                    style: { marginBottom: 0 },
                    rows: 3,
                    onChange: onInputChange,
                    value: inputValue
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QRAddressScanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        label: "Scan",
                        onSuccess: handleQrScanSuccess,
                        submitBtnText: submitBtnText,
                        dataFoundText: dataFoundText
                    })
                )
            )
        )
    );
}

ScanOrEnterText.propTypes = {
    labelContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
    handleQrScanSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    inputValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    submitBtnText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
    dataFoundText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element])
};

/***/ }),

/***/ 2765:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2377);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(562);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(734);
/* harmony import */ var stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2140);
/* harmony import */ var stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2723);
/* harmony import */ var stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2374);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1999);
/* harmony import */ var _Exchange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2768);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2012);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(429);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2013);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2378);
/* harmony import */ var components_Exchange_tradingViewClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2848);
/* harmony import */ var _Page404_Page404__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2653);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var ExchangeContainer = function (_React$Component) {
    _inherits(ExchangeContainer, _React$Component);

    function ExchangeContainer() {
        _classCallCheck(this, ExchangeContainer);

        return _possibleConstructorReturn(this, (ExchangeContainer.__proto__ || Object.getPrototypeOf(ExchangeContainer)).apply(this, arguments));
    }

    _createClass(ExchangeContainer, [{
        key: "render",
        value: function render() {
            var symbols = this.props.match.params.marketID.toUpperCase().split("_");
            if (symbols[0] === symbols[1]) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_14__["default"], { subtitle: "market_not_found_subtitle" });
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_7__["default"],
                {
                    stores: [stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"], stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"], stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"], stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"], stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__["default"]],
                    inject: {
                        hasAnyPriceAlert: function hasAnyPriceAlert() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].hasAnyPriceAlert(symbols[0], symbols[1]);
                        },
                        priceAlert: function priceAlert() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().priceAlert;
                        },
                        locale: function locale() {
                            return stores_IntlStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().currentLocale;
                        },
                        lockedWalletState: function lockedWalletState() {
                            return stores_WalletUnlockStore__WEBPACK_IMPORTED_MODULE_6__["default"].getState().locked;
                        },
                        marketLimitOrders: function marketLimitOrders() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketLimitOrders;
                        },
                        marketCallOrders: function marketCallOrders() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketCallOrders;
                        },
                        invertedCalls: function invertedCalls() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().invertedCalls;
                        },
                        marketSettleOrders: function marketSettleOrders() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketSettleOrders;
                        },
                        marketData: function marketData() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketData;
                        },
                        totals: function totals() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().totals;
                        },
                        activeMarketHistory: function activeMarketHistory() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().activeMarketHistory;
                        },
                        bucketSize: function bucketSize() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().bucketSize;
                        },
                        buckets: function buckets() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().buckets;
                        },
                        lowestCallPrice: function lowestCallPrice() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().lowestCallPrice;
                        },
                        feedPrice: function feedPrice() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().feedPrice;
                        },
                        currentAccount: function currentAccount() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().currentAccount;
                        },
                        myActiveAccounts: function myActiveAccounts() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().myActiveAccounts;
                        },
                        viewSettings: function viewSettings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings;
                        },
                        settings: function settings() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().settings;
                        },
                        exchange: function exchange() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().exchange;
                        },
                        starredMarkets: function starredMarkets() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().starredMarkets;
                        },
                        marketDirections: function marketDirections() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().marketDirections;
                        },
                        marketStats: function marketStats() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketStats;
                        },
                        marketReady: function marketReady() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().marketReady;
                        },
                        backedCoins: function backedCoins() {
                            return stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().backedCoins.get("OPEN", []);
                        },
                        bridgeCoins: function bridgeCoins() {
                            return stores_GatewayStore__WEBPACK_IMPORTED_MODULE_4__["default"].getState().bridgeCoins;
                        },
                        miniDepthChart: function miniDepthChart() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings.get("miniDepthChart", true);
                        },
                        viewChat: function viewChat() {
                            return stores_SettingsStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().viewSettings.get("viewChat", true);
                        },

                        dataFeed: function dataFeed() {
                            return new components_Exchange_tradingViewClasses__WEBPACK_IMPORTED_MODULE_13__["DataFeed"]();
                        },

                        trackedGroupsConfig: function trackedGroupsConfig() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().trackedGroupsConfig;
                        },
                        currentGroupOrderLimit: function currentGroupOrderLimit() {
                            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().currentGroupLimit;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExchangeSubscriber, {
                    history: this.props.history,
                    location: this.props.location,
                    quoteAsset: symbols[0],
                    baseAsset: symbols[1]
                })
            );
        }
    }]);

    return ExchangeContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var emitter = Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["EmitterInstance"])();
var callListener = void 0,
    limitListener = void 0,
    newCallListener = void 0,
    feedUpdateListener = void 0,
    settleOrderListener = void 0;

var ExchangeSubscriber = function (_React$Component2) {
    _inherits(ExchangeSubscriber, _React$Component2);

    function ExchangeSubscriber(props) {
        _classCallCheck(this, ExchangeSubscriber);

        var _this2 = _possibleConstructorReturn(this, (ExchangeSubscriber.__proto__ || Object.getPrototypeOf(ExchangeSubscriber)).call(this));

        _this2.state = { sub: null };

        _this2._subToMarket = _this2._subToMarket.bind(_this2);
        return _this2;
    }

    _createClass(ExchangeSubscriber, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this3 = this;

            if (this.props.quoteAsset === null || this.props.baseAsset === null) {
                return;
            }
            if (this.props.quoteAsset.toJS && this.props.baseAsset.toJS) {
                this._subToMarket(this.props);
                // this._addMarket(this.props.quoteAsset.get("symbol"), this.props.baseAsset.get("symbol"));
            }

            emitter.on("cancel-order", limitListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].cancelLimitOrderSuccess);
            emitter.on("close-call", callListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].closeCallOrderSuccess);

            emitter.on("call-order-update", newCallListener = function newCallListener(call_order) {
                var coBase = call_order.call_price.base.asset_id;
                var coQuote = call_order.call_price.quote.asset_id;

                var baseId = _this3.props.baseAsset.get("id"),
                    quoteId = _this3.props.quoteAsset.get("id");
                if ((coBase === baseId || coBase === quoteId) && (coQuote === baseId || coQuote === quoteId)) {
                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].callOrderUpdate(call_order);
                }
            });
            emitter.on("bitasset-update", feedUpdateListener = actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].feedUpdate);
            emitter.on("settle-order-update", settleOrderListener = function settleOrderListener(object) {
                var _market_utils$isMarke = market_utils.isMarketAsset(_this3.props.quoteAsset, _this3.props.baseAsset),
                    isMarketAsset = _market_utils$isMarke.isMarketAsset,
                    marketAsset = _market_utils$isMarke.marketAsset;

                if (isMarketAsset && marketAsset.id === object.balance.asset_id) {
                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].settleOrderUpdate(marketAsset.id);
                }
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _this4 = this;

            if (nextProps.quoteAsset === null || nextProps.baseAsset === null) {
                return;
            }
            /* Prediction markets should only be shown in one direction, if the link goes to the wrong one we flip it */
            if (nextProps.baseAsset && nextProps.baseAsset.getIn(["bitasset", "is_prediction_market"])) {
                this.props.history.push("/market/" + nextProps.baseAsset.get("symbol") + "_" + nextProps.quoteAsset.get("symbol"));
            }

            if (nextProps.quoteAsset && nextProps.baseAsset) {
                if (!this.state.sub) {
                    return this._subToMarket(nextProps);
                }
            }

            if (nextProps.quoteAsset.get("symbol") !== this.props.quoteAsset.get("symbol") || nextProps.baseAsset.get("symbol") !== this.props.baseAsset.get("symbol")) {
                var currentSub = this.state.sub.split("_");
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].unSubscribeMarket(currentSub[0], currentSub[1]).then(function () {
                    _this4._subToMarket(nextProps);
                });
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            var _props = this.props,
                quoteAsset = _props.quoteAsset,
                baseAsset = _props.baseAsset;

            if (quoteAsset === null || baseAsset === null) {
                return;
            }

            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].unSubscribeMarket(quoteAsset.get("id"), baseAsset.get("id"));
            if (emitter) {
                emitter.off("cancel-order", limitListener);
                emitter.off("close-call", callListener);
                emitter.off("call-order-update", newCallListener);
                emitter.off("bitasset-update", feedUpdateListener);
                emitter.off("settle-order-update", settleOrderListener);
            }
        }
    }, {
        key: "_subToMarket",
        value: function _subToMarket(props, newBucketSize, newGroupLimit) {
            var quoteAsset = props.quoteAsset,
                baseAsset = props.baseAsset,
                bucketSize = props.bucketSize,
                currentGroupOrderLimit = props.currentGroupOrderLimit;

            if (newBucketSize) {
                bucketSize = newBucketSize;
            }
            if (newGroupLimit) {
                currentGroupOrderLimit = newGroupLimit;
            }
            if (quoteAsset.get("id") && baseAsset.get("id")) {
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].subscribeMarket.defer(baseAsset, quoteAsset, bucketSize, currentGroupOrderLimit);
                this.setState({
                    sub: quoteAsset.get("id") + "_" + baseAsset.get("id")
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.quoteAsset === null || this.props.baseAsset === null) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page404_Page404__WEBPACK_IMPORTED_MODULE_14__["default"], { subtitle: "market_not_found_subtitle" });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Exchange__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, this.props, {
                sub: this.state.sub,
                subToMarket: this._subToMarket
            }));
        }
    }]);

    return ExchangeSubscriber;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ExchangeSubscriber.propTypes = {
    currentAccount: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAccount.isRequired,
    quoteAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired,
    baseAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired,
    coreAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_9__["default"].ChainAsset.isRequired
};
ExchangeSubscriber.defaultProps = {
    currentAccount: "1.2.3",
    coreAsset: "1.3.0"
};


ExchangeSubscriber = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_11__["default"])(ExchangeSubscriber, {
    show_loader: true
});

/* harmony default export */ __webpack_exports__["default"] = (ExchangeContainer);

/***/ }),

/***/ 2768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2769);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(498);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(429);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(749);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2582);
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(intro_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(805);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2771);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(735);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2378);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(591);
/* harmony import */ var common_market_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2376);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(607);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(606);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(580);
/* harmony import */ var _BuySell__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2792);
/* harmony import */ var _ScaledOrderTab__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2797);
/* harmony import */ var _ExchangeHeader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2801);
/* harmony import */ var _MyOpenOrders__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2806);
/* harmony import */ var _OrderBook__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2824);
/* harmony import */ var _MarketHistory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2831);
/* harmony import */ var _MyMarkets__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2834);
/* harmony import */ var _MarketPicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(2841);
/* harmony import */ var _ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2843);
/* harmony import */ var _Personalize__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2844);
/* harmony import */ var _TradingViewPriceChart__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2845);
/* harmony import */ var _DepthHighChart__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(2852);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(1996);
/* harmony import */ var _Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2855);
/* harmony import */ var _Notifier_NotifierContainer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(2857);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(2479);
/* harmony import */ var _Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(2867);
/* harmony import */ var _Dashboard_SimpleDepositBlocktradesBridge__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(2868);
/* harmony import */ var _PriceAlert__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(2869);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _Chat_ChatBro__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(2870);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











































var Exchange = function (_React$Component) {
    _inherits(Exchange, _React$Component);

    function Exchange(props) {
        _classCallCheck(this, Exchange);

        var _this = _possibleConstructorReturn(this, (Exchange.__proto__ || Object.getPrototypeOf(Exchange)).call(this));

        _this.EXPIRATIONS = {
            HOUR: {
                title: "1 hour",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_7___default()().add(1, "hour").valueOf();
                }
            },
            "12HOURS": {
                title: "12 hours",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_7___default()().add(12, "hour").valueOf();
                }
            },
            "24HOURS": {
                title: "24 hours",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_7___default()().add(1, "day").valueOf();
                }
            },
            "7DAYS": {
                title: "7 days",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_7___default()().add(7, "day").valueOf();
                }
            },
            MONTH: {
                title: "30 days",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_7___default()().add(30, "day").valueOf();
                }
            },
            YEAR: {
                title: "1 year",
                get: function get() {
                    return moment__WEBPACK_IMPORTED_MODULE_7___default()().add(1, "year").valueOf();
                }
            },
            SPECIFIC: {
                title: "Specific",
                get: function get(type) {
                    return _this.state.expirationCustomTime[type].valueOf();
                }
            }
        };

        _this._chartZoom = function () {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                chartZoom: !_this.state.chartZoom
            });

            var chartType = _this.state.chartType;
            _this.setState({
                chartZoom: !_this.state.chartZoom,
                chartType: "hidden_chart"
            });
            // force reload
            setTimeout(function () {
                _this.setState({
                    chartType: chartType
                });
            }, 100);
        };

        _this._chartTools = function () {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                chartTools: !_this.state.chartTools
            });

            var chartType = _this.state.chartType;
            _this.setState({
                chartTools: !_this.state.chartTools,
                chartType: "hidden_chart"
            });
            // force reload
            setTimeout(function () {
                _this.setState({
                    chartType: chartType
                });
            }, 100);
        };

        _this._flipOrderBook = function () {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                flipOrderBook: !_this.state.flipOrderBook
            });

            _this.setState({
                flipOrderBook: !_this.state.flipOrderBook
            });
        };

        _this._orderBookReversed = function () {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                orderBookReversed: !_this.state.orderBookReversed
            });

            _this.setState({
                orderBookReversed: !_this.state.orderBookReversed
            });
        };

        _this._hideFunctionButtons = function () {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                hideFunctionButtons: !_this.state.hideFunctionButtons
            });

            _this.setState({
                hideFunctionButtons: !_this.state.hideFunctionButtons
            });
        };

        _this.state = _extends({}, _this._initialState(props), {
            expirationType: {
                bid: props.exchange.getIn(["lastExpiration", "bid"]) || "YEAR",
                ask: props.exchange.getIn(["lastExpiration", "ask"]) || "YEAR"
            },
            expirationCustomTime: {
                bid: "Specific",
                ask: "Specific"
            },
            feeStatus: {}
        });

        _this._getWindowSize = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(_this._getWindowSize.bind(_this), 150);
        _this._checkFeeStatus = _this._checkFeeStatus.bind(_this);

        _this._handleExpirationChange = _this._handleExpirationChange.bind(_this);
        _this._handleCustomExpirationChange = _this._handleCustomExpirationChange.bind(_this);

        _this.showPersonalizeModal = _this.showPersonalizeModal.bind(_this);
        _this.hidePersonalizeModal = _this.hidePersonalizeModal.bind(_this);

        _this.showConfirmSellOrderModal = _this.showConfirmSellOrderModal.bind(_this);
        _this.hideConfirmSellOrderModal = _this.hideConfirmSellOrderModal.bind(_this);

        _this.showConfirmBuyOrderModal = _this.showConfirmBuyOrderModal.bind(_this);
        _this.hideConfirmBuyOrderModal = _this.hideConfirmBuyOrderModal.bind(_this);

        _this.showMarketPickerModal = _this.showMarketPickerModal.bind(_this);
        _this.hideMarketPickerModal = _this.hideMarketPickerModal.bind(_this);

        _this.showDepositBridgeModal = _this.showDepositBridgeModal.bind(_this);
        _this.hideDepositBridgeModal = _this.hideDepositBridgeModal.bind(_this);

        _this.showDepositModal = _this.showDepositModal.bind(_this);
        _this.hideDepositModal = _this.hideDepositModal.bind(_this);

        _this.showBorrowQuoteModal = _this.showBorrowQuoteModal.bind(_this);
        _this.hideBorrowQuoteModal = _this.hideBorrowQuoteModal.bind(_this);

        _this.showBorrowBaseModal = _this.showBorrowBaseModal.bind(_this);
        _this.hideBorrowBaseModal = _this.hideBorrowBaseModal.bind(_this);

        _this.showPriceAlertModal = _this.showPriceAlertModal.bind(_this);
        _this.hidePriceAlertModal = _this.hidePriceAlertModal.bind(_this);

        _this.showScaledOrderModal = _this.showScaledOrderModal.bind(_this);
        _this.hideScaledOrderModal = _this.hideScaledOrderModal.bind(_this);

        _this.handlePriceAlertSave = _this.handlePriceAlertSave.bind(_this);
        _this._createScaledOrder = _this._createScaledOrder.bind(_this);

        _this.psInit = true;
        return _this;
    }

    _createClass(Exchange, [{
        key: "handleOrderTypeTabChange",
        value: function handleOrderTypeTabChange(type, value) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting(_defineProperty({}, "order-form-" + type, value));
        }
    }, {
        key: "handlePriceAlertSave",
        value: function handlePriceAlertSave() {
            var _this2 = this;

            var savedRules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            // add info about market asset pair
            savedRules = savedRules.map(function (rule) {
                return {
                    type: rule.type,
                    price: rule.price,
                    baseAssetSymbol: _this2.props.baseAsset.get("symbol"),
                    quoteAssetSymbol: _this2.props.quoteAsset.get("symbol")
                };
            });

            // drop old rules for current market pair
            var rules = this.props.priceAlert.filter(function (rule) {
                return rule && _this2.props.baseAsset && _this2.props.quoteAsset && (rule.get("baseAssetSymbol") !== _this2.props.baseAsset.get("symbol") || rule.get("quoteAssetSymbol") !== _this2.props.quoteAsset.get("symbol"));
            });

            // pushing new rules
            rules = [].concat(_toConsumableArray(rules), _toConsumableArray(savedRules));

            // saving rules
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].setPriceAlert(rules);

            this.hidePriceAlertModal();
        }
    }, {
        key: "getPriceAlertRules",
        value: function getPriceAlertRules() {
            var _this3 = this;

            //getting rules based on market pairs

            var rules = this.props.priceAlert.filter(function (rule) {
                return rule && _this3.props.baseAsset && _this3.props.quoteAsset && rule.get("baseAssetSymbol") === _this3.props.baseAsset.get("symbol") && rule.get("quoteAssetSymbol") === _this3.props.quoteAsset.get("symbol");
            });

            return rules.toJS();
        }
    }, {
        key: "_handleExpirationChange",
        value: function _handleExpirationChange(type, e) {
            var expirationType = _extends({}, this.state.expirationType, _defineProperty({}, type, e.target.value));

            if (e.target.value !== "SPECIFIC") {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].setExchangeLastExpiration(_extends({}, this.props.exchange.has("lastExpiration") && this.props.exchange.get("lastExpiration").toJS() || {}, _defineProperty({}, type, e.target.value)));
            }

            this.setState({
                expirationType: expirationType
            });
        }
    }, {
        key: "_handleCustomExpirationChange",
        value: function _handleCustomExpirationChange(type, time) {
            var expirationCustomTime = _extends({}, this.state.expirationCustomTime, _defineProperty({}, type, time));

            this.setState({
                expirationCustomTime: expirationCustomTime
            });
        }
    }, {
        key: "_initialOrderState",
        value: function _initialOrderState(props) {
            var bid = {
                forSaleText: "",
                toReceiveText: "",
                priceText: "",
                for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                    asset_id: props.baseAsset.get("id"),
                    precision: props.baseAsset.get("precision")
                }),
                to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                    asset_id: props.quoteAsset.get("id"),
                    precision: props.quoteAsset.get("precision")
                })
            };
            bid.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Price"]({ base: bid.for_sale, quote: bid.to_receive });
            var ask = {
                forSaleText: "",
                toReceiveText: "",
                priceText: "",
                for_sale: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                    asset_id: props.quoteAsset.get("id"),
                    precision: props.quoteAsset.get("precision")
                }),
                to_receive: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                    asset_id: props.baseAsset.get("id"),
                    precision: props.baseAsset.get("precision")
                })
            };
            ask.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Price"]({ base: ask.for_sale, quote: ask.to_receive });

            return { ask: ask, bid: bid };
        }
    }, {
        key: "_initialState",
        value: function _initialState(props) {
            var ws = props.viewSettings;

            var _initialOrderState2 = this._initialOrderState(props),
                ask = _initialOrderState2.ask,
                bid = _initialOrderState2.bid;

            var chart_height = ws.get("chartHeight", 620);
            if (chart_height == 620 && window.innerWidth < 640) {
                // assume user is on default setting, use smaller for mobile
                chart_height = 425;
            }

            return {
                isDepositBridgeModelLoaded: false,
                isDepositModalLoaded: false,
                isPersonalizeModalLoaded: false,
                isMarketPickerModalLoaded: false,
                isBorrowQuoteModalLoaded: false,
                isBorrowBaseModalLoaded: false,
                isDepositBridgeModalVisible: false,
                isDepositModalVisible: false,
                isPersonalizeModalVisible: false,
                isMarketPickerModalVisible: false,
                isBorrowQuoteModalVisible: false,
                isBorrowBaseModalVisible: false,
                history: [],
                isConfirmBuyOrderModalVisible: false,
                isConfirmBuyOrderModalLoaded: false,
                isConfirmSellOrderModalVisible: false,
                isPriceAlertModalVisible: false,
                isScaledOrderModalVisible: false,
                isConfirmSellOrderModalLoaded: false,
                tabVerticalPanel: ws.get("tabVerticalPanel", "my-market"),
                tabBuySell: ws.get("tabBuySell", "buy"),
                buySellOpen: ws.get("buySellOpen", true),
                bid: bid,
                ask: ask,
                height: window.innerHeight,
                width: window.innerWidth,
                favorite: false,
                buyDiff: false,
                sellDiff: false,
                autoScroll: ws.get("global_AutoScroll", true),
                buySellTop: ws.get("buySellTop", true),
                buyFeeAssetIdx: ws.get("buyFeeAssetIdx", 0),
                sellFeeAssetIdx: ws.get("sellFeeAssetIdx", 0),
                verticalOrderBook: ws.get("verticalOrderBook", false),
                verticalOrderForm: ws.get("verticalOrderForm", false),
                hidePanel: ws.get("hidePanel", false),
                hideScrollbars: ws.get("hideScrollbars", false),
                singleColumnOrderForm: ws.get("singleColumnOrderForm", true),
                flipOrderBook: ws.get("flipOrderBook", false),
                flipBuySell: ws.get("flipBuySell", false),
                orderBookReversed: ws.get("orderBookReversed", false),
                chartType: ws.get("chartType", "price_chart"),
                chartHeight: chart_height,
                chartZoom: ws.get("chartZoom", true),
                chartTools: ws.get("chartTools", true),
                hideFunctionButtons: ws.get("hideFunctionButtons", true),
                currentPeriod: ws.get("currentPeriod", 3600 * 24 * 30 * 3), // 3 months
                showMarketPicker: false,
                activePanels: ws.get("activePanels", ["left", "right"]),
                mobileKey: [""],
                forceReRender: 0,
                panelWidth: 0,
                mirrorPanels: ws.get("mirrorPanels", false),
                panelTabs: ws.get("panelTabs", {
                    my_history: 1,
                    history: 1,
                    my_orders: 2,
                    open_settlement: 2
                }),
                panelTabsActive: ws.get("panelTabsActive", {
                    1: "my_history",
                    2: "my_orders"
                })
            };
        }
    }, {
        key: "showMarketPickerModal",
        value: function showMarketPickerModal() {
            this.setState({
                isMarketPickerModalVisible: true,
                isMarketPickerModalLoaded: true
            });
        }
    }, {
        key: "hideMarketPickerModal",
        value: function hideMarketPickerModal() {
            this.setState({
                isMarketPickerModalVisible: false
            });
        }
    }, {
        key: "showPersonalizeModal",
        value: function showPersonalizeModal() {
            this.setState({
                isPersonalizeModalVisible: true,
                isPersonalizeModalLoaded: true
            });
        }
    }, {
        key: "hidePersonalizeModal",
        value: function hidePersonalizeModal() {
            this.setState({
                isPersonalizeModalVisible: false
            });
        }
    }, {
        key: "showPriceAlertModal",
        value: function showPriceAlertModal() {
            this.setState({
                isPriceAlertModalVisible: true
            });
        }
    }, {
        key: "hidePriceAlertModal",
        value: function hidePriceAlertModal() {
            this.setState({
                isPriceAlertModalVisible: false
            });
        }
    }, {
        key: "showScaledOrderModal",
        value: function showScaledOrderModal() {
            this.setState({
                isScaledOrderModalVisible: true
            });
        }
    }, {
        key: "hideScaledOrderModal",
        value: function hideScaledOrderModal() {
            this.setState({
                isScaledOrderModalVisible: false
            });
        }
    }, {
        key: "showBorrowQuoteModal",
        value: function showBorrowQuoteModal() {
            this.setState({
                isBorrowQuoteModalVisible: true,
                isBorrowQuoteModalLoaded: true
            });
        }
    }, {
        key: "hideBorrowQuoteModal",
        value: function hideBorrowQuoteModal() {
            this.setState({
                isBorrowQuoteModalVisible: false
            });
        }
    }, {
        key: "showBorrowBaseModal",
        value: function showBorrowBaseModal() {
            this.setState({
                isBorrowBaseModalVisible: true,
                isBorrowBaseModalLoaded: true
            });
        }
    }, {
        key: "hideBorrowBaseModal",
        value: function hideBorrowBaseModal() {
            this.setState({
                isBorrowBaseModalVisible: false
            });
        }
    }, {
        key: "showDepositBridgeModal",
        value: function showDepositBridgeModal() {
            this.setState({
                isDepositBridgeModalVisible: true,
                isDepositBridgeModalLoaded: true
            });
        }
    }, {
        key: "hideDepositBridgeModal",
        value: function hideDepositBridgeModal() {
            this.setState({
                isDepositBridgeModalVisible: false
            });
        }
    }, {
        key: "showDepositModal",
        value: function showDepositModal() {
            this.setState({
                isDepositModalVisible: true,
                isDepositModalLoaded: true
            });
        }
    }, {
        key: "hideDepositModal",
        value: function hideDepositModal() {
            this.setState({
                isDepositModalVisible: false
            });
        }
    }, {
        key: "_getLastMarketKey",
        value: function _getLastMarketKey() {
            var chainID = bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_1__["Apis"].instance().chain_id;
            return "lastMarket" + (chainID ? "_" + chainID.substr(0, 8) : "");
        }
    }, {
        key: "showConfirmBuyOrderModal",
        value: function showConfirmBuyOrderModal() {
            this.setState({
                isConfirmBuyOrderModalVisible: true,
                isConfirmBuyOrderModalLoaded: true
            });
        }
    }, {
        key: "hideConfirmBuyOrderModal",
        value: function hideConfirmBuyOrderModal() {
            this.setState({
                isConfirmBuyOrderModalVisible: false
            });
        }
    }, {
        key: "showConfirmSellOrderModal",
        value: function showConfirmSellOrderModal() {
            this.setState({
                isConfirmSellOrderModalVisible: true,
                isConfirmSellOrderModalLoaded: true
            });
        }
    }, {
        key: "hideConfirmSellOrderModal",
        value: function hideConfirmSellOrderModal() {
            this.setState({
                isConfirmSellOrderModalVisible: false
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            window.addEventListener("resize", this._setDimensions, {
                capture: false,
                passive: true
            });
            // updateGatewayBackers();
            this._checkFeeStatus();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].getTrackedGroupsConfig();

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting.defer(_defineProperty({}, this._getLastMarketKey(), this.props.quoteAsset.get("symbol") + "_" + this.props.baseAsset.get("symbol")));

            window.addEventListener("resize", this._getWindowSize, {
                capture: false,
                passive: true
            });
        }

        /*
         * Force re-rendering component when state changes.
         * This is required for an updated value of component width
         *
         * It will trigger a re-render twice
         * - Once when state is changed
         * - Once when forceReRender is set to false
         */

    }, {
        key: "_forceRender",
        value: function _forceRender(np, ns) {
            if (this.state.forceReRender) {
                this.setState({
                    forceReRender: false
                });
            }

            if (!common_utils__WEBPACK_IMPORTED_MODULE_17__["default"].are_equal_shallow(this.state.activePanels, ns.activePanels) || !common_utils__WEBPACK_IMPORTED_MODULE_17__["default"].are_equal_shallow(this.state.verticalOrderBook, ns.verticalOrderBook) || np.quoteAsset !== this.props.quoteAsset || np.baseAsset !== this.props.baseAsset) {
                this.setState({
                    forceReRender: true
                });
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            var expirationType = this.state.expirationType;


            this._forceRender(np, ns);

            if (!np.marketReady && !this.props.marketReady) {
                return false;
            }
            var propsChanged = false;
            var stateChanged = false;

            if (np.quoteAsset !== this.props.quoteAsset || np.baseAsset !== this.props.baseAsset) {
                this.setState({
                    expirationType: {
                        bid: expirationType["bid"] == "SPECIFIC" ? expirationType["bid"] : "YEAR",
                        ask: expirationType["ask"] == "SPECIFIC" ? expirationType["ask"] : "YEAR"
                    }
                });
            }

            for (var key in np) {
                if (np.hasOwnProperty(key)) {
                    propsChanged = propsChanged || !common_utils__WEBPACK_IMPORTED_MODULE_17__["default"].are_equal_shallow(np[key], this.props[key]);
                    if (propsChanged) break;
                }
            }
            for (var _key in ns.panelTabsActive) {
                stateChanged = !common_utils__WEBPACK_IMPORTED_MODULE_17__["default"].are_equal_shallow(ns.panelTabsActive[_key], this.state.panelTabsActive[_key]);
            }
            return propsChanged || stateChanged || !common_utils__WEBPACK_IMPORTED_MODULE_17__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "_checkFeeStatus",
        value: function _checkFeeStatus() {
            var _this4 = this;

            var assets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [this.props.coreAsset, this.props.baseAsset, this.props.quoteAsset];
            var account = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.currentAccount;

            var feeStatus = {};
            var p = [];
            assets.forEach(function (a) {
                p.push(Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_16__["checkFeeStatusAsync"])({
                    accountID: account.get("id"),
                    feeID: a.get("id"),
                    type: "limit_order_create"
                }));
            });
            Promise.all(p).then(function (status) {
                assets.forEach(function (a, idx) {
                    feeStatus[a.get("id")] = status[idx];
                });
                if (!common_utils__WEBPACK_IMPORTED_MODULE_17__["default"].are_equal_shallow(_this4.state.feeStatus, feeStatus)) {
                    _this4.setState({
                        feeStatus: feeStatus
                    });
                }
            }).catch(function (err) {
                console.error("checkFeeStatusAsync error", err);
                _this4.setState({ feeStatus: {} });
            });
        }
    }, {
        key: "_getWindowSize",
        value: function _getWindowSize() {
            var _window = window,
                innerHeight = _window.innerHeight,
                innerWidth = _window.innerWidth;

            if (innerHeight !== this.state.height || innerWidth !== this.state.width) {
                this.setState({
                    height: innerHeight,
                    width: innerWidth
                });
                var centerContainer = this.refs.center;
                if (centerContainer) {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default.a.update(centerContainer);
                }
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            this._initPsContainer();
            if (!this.props.exchange.get("tutorialShown") && prevProps.coreAsset && prevState.feeStatus) {
                if (!this.tutorialShown) {
                    this.tutorialShown = true;
                    var theme = this.props.settings.get("themes");

                    intro_js__WEBPACK_IMPORTED_MODULE_6___default.a.introJs().setOptions({
                        tooltipClass: theme,
                        highlightClass: theme,
                        showBullets: false,
                        hideNext: true,
                        hidePrev: true,
                        nextLabel: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("walkthrough.next_label"),
                        prevLabel: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("walkthrough.prev_label"),
                        skipLabel: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("walkthrough.skip_label"),
                        doneLabel: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("walkthrough.done_label")
                    }).start();

                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].setExchangeTutorialShown.defer(true);
                }
            }
        }
    }, {
        key: "_initPsContainer",
        value: function _initPsContainer() {
            if (this.refs.center && this.psInit) {
                var centerContainer = this.refs.center;
                if (centerContainer) {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8___default.a.initialize(centerContainer);
                    this.psInit = false;
                }
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this._initPsContainer();
            if (nextProps.quoteAsset !== this.props.quoteAsset || nextProps.baseAsset !== this.props.baseAsset || nextProps.currentAccount !== this.props.currentAccount) {
                this._checkFeeStatus([nextProps.coreAsset, nextProps.baseAsset, nextProps.quoteAsset], nextProps.currentAccount);
            }
            if (nextProps.quoteAsset.get("symbol") !== this.props.quoteAsset.get("symbol") || nextProps.baseAsset.get("symbol") !== this.props.baseAsset.get("symbol")) {
                this.setState(this._initialState(nextProps));

                return actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting(_defineProperty({}, this._getLastMarketKey(), nextProps.quoteAsset.get("symbol") + "_" + nextProps.baseAsset.get("symbol")));
            }

            // if (this.props.sub && nextProps.bucketSize !== this.props.bucketSize) {
            //     return this._changeBucketSize(nextProps.bucketSize);
            // }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._getWindowSize);
        }
    }, {
        key: "_getFeeAssets",
        value: function _getFeeAssets(quote, base, coreAsset) {
            var _this5 = this;

            var currentAccount = this.props.currentAccount;
            var feeStatus = this.state.feeStatus;


            function addMissingAsset(target, asset) {
                if (target.indexOf(asset) === -1) {
                    target.push(asset);
                }
            }

            function hasFeePoolBalance(id) {
                return feeStatus[id] && feeStatus[id].hasPoolBalance;
            }

            function hasBalance(id) {
                return feeStatus[id] && feeStatus[id].hasBalance;
            }

            var sellAssets = [coreAsset, quote === coreAsset ? base : quote];
            addMissingAsset(sellAssets, quote);
            addMissingAsset(sellAssets, base);
            // let sellFeeAsset;

            var buyAssets = [coreAsset, base === coreAsset ? quote : base];
            addMissingAsset(buyAssets, quote);
            addMissingAsset(buyAssets, base);
            // let buyFeeAsset;

            var balances = {};

            currentAccount.get("balances", []).filter(function (balance, id) {
                return ["1.3.0", quote.get("id"), base.get("id")].indexOf(id) >= 0;
            }).forEach(function (balance, id) {
                var balanceObject = bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(balance);
                balances[id] = {
                    balance: balanceObject ? parseInt(balanceObject.get("balance"), 10) : 0,
                    fee: _this5._getFee(bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getAsset(id))
                };
            });

            function filterAndDefault(assets, balances, idx) {
                var asset = void 0;
                /* Only keep assets for which the user has a balance larger than the fee, and for which the fee pool is valid */
                assets = assets.filter(function (a) {
                    if (!balances[a.get("id")]) {
                        return false;
                    }
                    return hasFeePoolBalance(a.get("id")) && hasBalance(a.get("id"));
                });

                /* If the user has no valid balances, default to core fee */
                if (!assets.length) {
                    asset = coreAsset;
                    assets.push(coreAsset);
                    /* If the user has balances, use the stored idx value unless that asset is no longer available*/
                } else {
                    asset = assets[Math.min(assets.length - 1, idx)];
                }

                return { assets: assets, asset: asset };
            }

            var _filterAndDefault = filterAndDefault(sellAssets, balances, this.state.sellFeeAssetIdx),
                sellFeeAssets = _filterAndDefault.assets,
                sellFeeAsset = _filterAndDefault.asset;

            var _filterAndDefault2 = filterAndDefault(buyAssets, balances, this.state.buyFeeAssetIdx),
                buyFeeAssets = _filterAndDefault2.assets,
                buyFeeAsset = _filterAndDefault2.asset;

            var sellFee = this._getFee(sellFeeAsset);
            var buyFee = this._getFee(buyFeeAsset);

            return {
                sellFeeAsset: sellFeeAsset,
                sellFeeAssets: sellFeeAssets,
                sellFee: sellFee,
                buyFeeAsset: buyFeeAsset,
                buyFeeAssets: buyFeeAssets,
                buyFee: buyFee
            };
        }
    }, {
        key: "_getFee",
        value: function _getFee() {
            var asset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.coreAsset;

            return this.state.feeStatus[asset.get("id")] && this.state.feeStatus[asset.get("id")].fee;
        }
    }, {
        key: "_verifyFee",
        value: function _verifyFee(fee, sell, sellBalance, coreBalance) {
            var coreFee = this._getFee();

            if (fee.asset_id === "1.3.0") {
                if (coreFee.getAmount() <= coreBalance) {
                    return "1.3.0";
                } else {
                    return null;
                }
            } else {
                var sellSum = sell.asset_id === fee.asset_id ? fee.getAmount() + sell.getAmount() : sell.getAmount();
                if (sellSum <= sellBalance) {
                    // Sufficient balance in asset to pay fee
                    return fee.asset_id;
                } else if (coreFee.getAmount() <= coreBalance && fee.asset_id !== "1.3.0") {
                    // Sufficient balance in core asset to pay fee
                    return "1.3.0";
                } else {
                    return null; // Unable to pay fee
                }
            }
        }
    }, {
        key: "_createLimitOrderConfirm",
        value: function _createLimitOrderConfirm(buyAsset, sellAsset, sellBalance, coreBalance, feeAsset, type) {
            var short = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
            var e = arguments[7];

            e.preventDefault();
            var _props$marketData = this.props.marketData,
                highestBid = _props$marketData.highestBid,
                lowestAsk = _props$marketData.lowestAsk;

            var current = this.state[type === "sell" ? "ask" : "bid"];

            sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(sellBalance).toJS().balance, 10) : 0);
            coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(coreBalance).toJS().balance, 10) : 0
            });

            var fee = this._getFee(feeAsset);
            var feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());
            if (!feeID) {
                return bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.exchange_insufficient_funds_for_fees")
                });
            }

            if (type === "buy" && lowestAsk) {
                var diff = this.state.bid.price.toReal() / lowestAsk.getPrice();
                if (diff > 1.2) {
                    this.showConfirmBuyOrderModal();
                    return this.setState({
                        buyDiff: diff
                    });
                }
            } else if (type === "sell" && highestBid) {
                var _diff = 1 / (this.state.ask.price.toReal() / highestBid.getPrice());
                if (_diff > 1.2) {
                    this.showConfirmSellOrderModal();
                    return this.setState({
                        sellDiff: _diff
                    });
                }
            }

            var isPredictionMarket = sellAsset.getIn(["bitasset", "is_prediction_market"]);

            if (current.for_sale.gt(sellBalance) && !isPredictionMarket) {
                return bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Notification"].error({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.exchange_insufficient_funds_to_place_order", {
                        amount: current.for_sale.getAmount({ real: true }),
                        symbol: sellAsset.get("symbol")
                    })
                });
            }
            //
            if (!(current.for_sale.getAmount() > 0 && current.to_receive.getAmount() > 0)) {
                return bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Notification"].warning({
                    message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.exchange_enter_valid_values")
                });
            }
            //
            if (type === "sell" && isPredictionMarket && short) {
                return this._createPredictionShort(feeID);
            }

            this._createLimitOrder(type, feeID);
        }
    }, {
        key: "_createScaledOrder",
        value: function _createScaledOrder(orders, feeID) {
            var _this6 = this;

            var limitOrders = orders.map(function (order) {
                return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["LimitOrderCreate"]({
                    for_sale: order.for_sale,
                    expiration: new Date(order.expirationTime || false),
                    to_receive: order.to_receive,
                    seller: _this6.props.currentAccount.get("id"),
                    fee: {
                        asset_id: feeID,
                        amount: 0
                    }
                });
            });

            return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].createLimitOrder2(limitOrders).then(function (result) {
                if (result.error) {
                    if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Notification"].error({
                        message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.exchange_unknown_error_place_scaled_order")
                    });
                }
                console.log("order success");
            }).catch(function (e) {
                console.log("order failed:", e);
            });
        }
    }, {
        key: "_createLimitOrder",
        value: function _createLimitOrder(type, feeID) {
            var actionType = type === "sell" ? "ask" : "bid";

            var current = this.state[actionType];

            var expirationTime = null;
            if (this.state.expirationType[actionType] === "SPECIFIC") {
                expirationTime = this.EXPIRATIONS[this.state.expirationType[actionType]].get(actionType);
            } else {
                expirationTime = this.EXPIRATIONS[this.state.expirationType[actionType]].get();
            }

            var order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["LimitOrderCreate"]({
                for_sale: current.for_sale,
                expiration: new Date(expirationTime || false),
                to_receive: current.to_receive,
                seller: this.props.currentAccount.get("id"),
                fee: {
                    asset_id: feeID,
                    amount: 0
                }
            });

            var _market_utils$getMark = common_market_utils__WEBPACK_IMPORTED_MODULE_14__["default"].getMarketName(this.props.baseAsset, this.props.quoteAsset),
                marketName = _market_utils$getMark.marketName,
                first = _market_utils$getMark.first;

            var inverted = this.props.marketDirections.get(marketName);
            var shouldFlip = inverted && first.get("id") !== this.props.baseAsset.get("id") || !inverted && first.get("id") !== this.props.baseAsset.get("id");
            if (shouldFlip) {
                var setting = {};
                setting[marketName] = !inverted;
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeMarketDirection(setting);
            }
            if (false) {}

            return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].createLimitOrder2(order).then(function (result) {
                if (result.error) {
                    if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Notification"].error({
                        message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.exchange_unknown_error_place_order", {
                            amount: current.to_receive.getAmount({
                                real: true
                            }),
                            symbol: current.to_receive.asset_id
                        })
                    });
                }
            }).catch(function (e) {
                console.error("order failed:", e);
            });
        }

        /***
         * Clear forms
         * @string: type
         */

    }, {
        key: "_clearForms",
        value: function _clearForms(type) {
            var _initialOrderState3 = this._initialOrderState(this.props),
                ask = _initialOrderState3.ask,
                bid = _initialOrderState3.bid;

            if (!type) {
                this.setState({
                    bid: bid,
                    ask: ask
                });
            } else if (type == "ask") {
                this.setState({ ask: ask });
            } else if (type == "bid") {
                this.setState({ bid: bid });
            }
        }
    }, {
        key: "_createPredictionShort",
        value: function _createPredictionShort(feeID) {
            var current = this.state.ask;
            var order = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["LimitOrderCreate"]({
                for_sale: current.for_sale,
                to_receive: current.to_receive,
                seller: this.props.currentAccount.get("id"),
                fee: {
                    asset_id: feeID,
                    amount: 0
                }
            });

            Promise.all([Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["FetchChain"])("getAsset", this.props.quoteAsset.getIn(["bitasset", "options", "short_backing_asset"]))]).then(function (assets) {
                var _assets = _slicedToArray(assets, 1),
                    backingAsset = _assets[0];

                var collateral = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                    amount: order.amount_for_sale.getAmount(),
                    asset_id: backingAsset.get("id"),
                    precision: backingAsset.get("precision")
                });

                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].createPredictionShort(order, collateral).then(function (result) {
                    if (result.error) {
                        if (result.error.message !== "wallet locked") bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Notification"].error({
                            message: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("notifications.exchange_unknown_error_place_order", {
                                amount: buyAssetAmount,
                                symbol: buyAsset.symbol
                            })
                        });
                    }
                });
            });
        }
    }, {
        key: "_forceBuy",
        value: function _forceBuy(type, feeAsset, sellBalance, coreBalance) {
            var current = this.state[type === "sell" ? "ask" : "bid"];
            // Convert fee to relevant asset fee and check if user has sufficient balance
            sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(sellBalance).get("balance"), 10) : 0);
            coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(coreBalance).toJS().balance, 10) : 0
            });
            var fee = this._getFee(feeAsset);
            var feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());

            if (feeID) {
                this._createLimitOrder(type, feeID);
            } else {
                console.error("Unable to pay fees, aborting limit order creation");
            }
        }
    }, {
        key: "_forceSell",
        value: function _forceSell(type, feeAsset, sellBalance, coreBalance) {
            var current = this.state[type === "sell" ? "ask" : "bid"];
            // Convert fee to relevant asset fee and check if user has sufficient balance
            sellBalance = current.for_sale.clone(sellBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(sellBalance).get("balance"), 10) : 0);
            coreBalance = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Asset"]({
                amount: coreBalance ? parseInt(bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].getObject(coreBalance).toJS().balance, 10) : 0
            });
            var fee = this._getFee(feeAsset);
            var feeID = this._verifyFee(fee, current.for_sale, sellBalance.getAmount(), coreBalance.getAmount());

            if (feeID) {
                this._createLimitOrder(type, feeID);
            } else {
                console.error("Unable to pay fees, aborting limit order creation");
            }
        }
    }, {
        key: "_cancelLimitOrder",
        value: function _cancelLimitOrder(orderID, e) {
            e.preventDefault();
            var currentAccount = this.props.currentAccount;

            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].cancelLimitOrder(currentAccount.get("id"), orderID // order id to cancel
            );
        }
    }, {
        key: "_changeZoomPeriod",
        value: function _changeZoomPeriod(size, e) {
            e.preventDefault();
            if (size !== this.state.currentPeriod) {
                this.setState({
                    currentPeriod: size
                });
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                    currentPeriod: size
                });
            }
        }
    }, {
        key: "_onGroupOrderLimitChange",
        value: function _onGroupOrderLimitChange(e) {
            var _this7 = this;

            var groupLimit = void 0;

            if ((typeof e === "undefined" ? "undefined" : _typeof(e)) == "object") {
                e.preventDefault();
                groupLimit = parseInt(e.target.value);
            }

            if (typeof e == "number") groupLimit = parseInt(e);

            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeCurrentGroupLimit(groupLimit);

            if (groupLimit !== this.props.currentGroupOrderLimit) {
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].changeCurrentGroupLimit(groupLimit);
                var currentSub = this.props.sub.split("_");
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_12__["default"].unSubscribeMarket(currentSub[0], currentSub[1]).then(function () {
                    _this7.props.subToMarket(_this7.props, _this7.props.bucketSize, groupLimit);
                });
            }
        }
    }, {
        key: "_depthChartClick",
        value: function _depthChartClick(base, quote, e) {
            e.preventDefault();
            var _state = this.state,
                bid = _state.bid,
                ask = _state.ask;


            bid.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Price"]({
                base: this.state.bid.for_sale,
                quote: this.state.bid.to_receive,
                real: e.xAxis[0].value
            });
            bid.priceText = bid.price.toReal();

            ask.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Price"]({
                base: this.state.ask.to_receive,
                quote: this.state.ask.for_sale,
                real: e.xAxis[0].value
            });
            ask.priceText = ask.price.toReal();
            var newState = {
                bid: bid,
                ask: ask,
                depthLine: bid.price.toReal()
            };

            this._setForSale(bid, true) || this._setReceive(bid, true);
            this._setReceive(ask) || this._setForSale(ask);

            this._setPriceText(bid, true);
            this._setPriceText(ask, false);
            // if (bid.for_sale.)
            this.setState(newState);
        }
    }, {
        key: "_setAutoscroll",
        value: function _setAutoscroll(value) {
            this.setState({
                autoScroll: value
            });
        }

        /**
         *
         * @param {string} panel - Panel to toggle
         */

    }, {
        key: "_togglePanel",
        value: function _togglePanel(panel) {
            if (!panel) return;

            var newState = [];

            this.state.activePanels.forEach(function (a) {
                if (a !== panel) {
                    newState.push(a);
                }
            });

            if (!this.state.activePanels.includes(panel)) {
                newState.push(panel);
            }

            this.setState({
                activePanels: newState
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                activePanels: newState
            });
        }
    }, {
        key: "_toggleChart",
        value: function _toggleChart(value) {
            this.setState({
                chartType: value
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                chartType: value
            });
        }
    }, {
        key: "_flipBuySell",
        value: function _flipBuySell() {
            this.setState({
                flipBuySell: !this.state.flipBuySell
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                flipBuySell: !this.state.flipBuySell
            });
        }

        /***
         * Toggle Buy/Sell order UX
         * Horizontal order book only
         */


        /***
         * Toggle order book to switch place of buy and sell orders
         * Vertical order book only
         */

    }, {
        key: "_toggleOpenBuySell",
        value: function _toggleOpenBuySell() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                buySellOpen: !this.state.buySellOpen
            });

            this.setState({ buySellOpen: !this.state.buySellOpen });
        }
    }, {
        key: "_toggleMarketPicker",
        value: function _toggleMarketPicker(asset) {
            var showMarketPicker = !!asset ? true : false;

            if (showMarketPicker) {
                this.showMarketPickerModal();
            }

            this.setState({
                showMarketPicker: showMarketPicker,
                marketPickerAsset: asset
            });
        }
    }, {
        key: "_moveOrderBook",
        value: function _moveOrderBook() {
            // Unpin OrderForm
            if (this.state.verticalOrderForm) {
                this._moveOrderForm();
            }

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                verticalOrderBook: !this.state.verticalOrderBook
            });

            this.setState({ verticalOrderBook: !this.state.verticalOrderBook });
        }
    }, {
        key: "_moveOrderForm",
        value: function _moveOrderForm() {
            // Unpin OrderBook
            if (this.state.verticalOrderBook) {
                this._moveOrderBook();
            }

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                verticalOrderForm: !this.state.verticalOrderForm
            });

            this.setState({ verticalOrderForm: !this.state.verticalOrderForm });
        }
    }, {
        key: "_togglePersonalize",
        value: function _togglePersonalize() {
            if (!this.state.isPersonalizeModalVisible) {
                this.setState({
                    isPersonalizeModalVisible: !this.state.isPersonalizeModalVisible,
                    isPersonalizeModalLoaded: true
                });
            } else {
                this.setState({
                    isPersonalizeModalVisible: !this.state.isPersonalizeModalVisible
                });
            }
        }
    }, {
        key: "_toggleScrollbars",
        value: function _toggleScrollbars() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                hideScrollbars: !this.state.hideScrollbars
            });

            this.setState({
                hideScrollbars: !this.state.hideScrollbars
            });
        }
    }, {
        key: "_toggleSingleColumnOrderForm",
        value: function _toggleSingleColumnOrderForm() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                singleColumnOrderForm: !this.state.singleColumnOrderForm
            });

            this.setState({
                singleColumnOrderForm: !this.state.singleColumnOrderForm
            });
        }
    }, {
        key: "_mirrorPanels",
        value: function _mirrorPanels() {
            this.setState({
                mirrorPanels: !this.state.mirrorPanels
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                mirrorPanels: !this.state.mirrorPanels
            });
        }
    }, {
        key: "_currentPriceClick",
        value: function _currentPriceClick(type, price) {
            var isBid = type === "bid";
            var current = this.state[type];
            current.price = price[isBid ? "invert" : "clone"]();
            current.priceText = current.price.toReal();
            if (isBid) {
                this._setForSale(current, isBid) || this._setReceive(current, isBid);
            } else {
                this._setReceive(current, isBid) || this._setForSale(current, isBid);
            }
            this.forceUpdate();
        }
    }, {
        key: "_orderbookClick",
        value: function _orderbookClick(order) {
            var isBid = order.isBid();
            /*
             * Because we are using a bid order to construct an ask and vice versa,
             * totalToReceive becomes forSale, and totalForSale becomes toReceive
             */
            var forSale = order.totalToReceive({ noCache: true });
            // let toReceive = order.totalForSale({noCache: true});
            var toReceive = forSale.times(order.sellPrice());

            var newPrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Price"]({
                base: isBid ? toReceive : forSale,
                quote: isBid ? forSale : toReceive
            });

            var current = this.state[isBid ? "bid" : "ask"];
            current.price = newPrice;
            current.priceText = newPrice.toReal();

            var newState = _defineProperty({}, isBid ? "ask" : "bid", {
                for_sale: forSale,
                forSaleText: forSale.getAmount({ real: true }),
                to_receive: toReceive,
                toReceiveText: toReceive.getAmount({ real: true }),
                price: newPrice,
                priceText: newPrice.toReal()
            });

            if (isBid) {
                this._setForSale(current, isBid) || this._setReceive(current, isBid);
            } else {
                this._setReceive(current, isBid) || this._setForSale(current, isBid);
            }
            this.setState(newState);
        }
    }, {
        key: "_borrowQuote",
        value: function _borrowQuote() {
            this.showBorrowQuoteModal();
        }
    }, {
        key: "_borrowBase",
        value: function _borrowBase() {
            this.showBorrowBaseModal();
        }
    }, {
        key: "_onDeposit",
        value: function _onDeposit(type) {
            this.setState({
                depositModalType: type
            });

            this.showDepositModal();
        }
    }, {
        key: "_onBuy",
        value: function _onBuy(type) {
            this.setState({
                buyModalType: type
            });

            this.showDepositBridgeModal();
        }
    }, {
        key: "_getSettlementInfo",
        value: function _getSettlementInfo() {
            var _props = this.props,
                lowestCallPrice = _props.lowestCallPrice,
                feedPrice = _props.feedPrice,
                quoteAsset = _props.quoteAsset;


            var showCallLimit = false;
            if (feedPrice) {
                if (feedPrice.inverted) {
                    showCallLimit = lowestCallPrice <= feedPrice.toReal();
                } else {
                    showCallLimit = lowestCallPrice >= feedPrice.toReal();
                }
            }
            return !!(showCallLimit && lowestCallPrice && !quoteAsset.getIn(["bitasset", "is_prediction_market"]));
        }
    }, {
        key: "_setTabVerticalPanel",
        value: function _setTabVerticalPanel(tab) {
            this.setState({
                tabVerticalPanel: tab
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                tabVerticalPanel: tab
            });
        }
    }, {
        key: "_setTabBuySell",
        value: function _setTabBuySell(tab) {
            this.setState({
                tabBuySell: tab
            });
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                tabBuySell: tab
            });
        }
    }, {
        key: "_setPanelTabInGroup",
        value: function _setPanelTabInGroup(group, activetab) {
            var panelTabsActive = this.state.panelTabsActive;


            Object.keys(panelTabsActive).map(function (a) {
                if (a == group) {
                    panelTabsActive[a] = activetab;
                }
            });

            this.setState({
                panelTabsActive: panelTabsActive,
                forceReRender: true // Requires to forcefully re-render for tab to stick
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                panelTabsActive: panelTabsActive
            });
        }
    }, {
        key: "_setPanelTabs",
        value: function _setPanelTabs(panelName, newTabsId) {
            var _state2 = this.state,
                panelTabs = _state2.panelTabs,
                panelTabsActive = _state2.panelTabsActive;


            var newState = {
                panelTabs: panelTabs,
                panelTabsActive: panelTabsActive
            };

            // Set new Tabs ID for Panel
            Object.keys(panelTabs).map(function (thisPanelName) {
                newState.panelTabs[thisPanelName] = thisPanelName == panelName ? newTabsId : panelTabs[thisPanelName];
            });

            // Reset all Active Panel Tabs
            Object.keys(panelTabsActive).map(function (thisTabId) {
                newState.panelTabsActive[thisTabId] = "";
            });

            this.setState({
                newState: newState
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting(_extends({}, newState));
        }
    }, {
        key: "onChangeFeeAsset",
        value: function onChangeFeeAsset(type, value) {
            if (type === "buy") {
                this.setState({
                    buyFeeAssetIdx: value
                });

                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                    buyFeeAssetIdx: value
                });
            } else {
                this.setState({
                    sellFeeAssetIdx: value
                });

                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                    sellFeeAssetIdx: value
                });
            }
        }
    }, {
        key: "onChangeChartHeight",
        value: function onChangeChartHeight(_ref) {
            var value = _ref.value,
                increase = _ref.increase;

            var newHeight = value ? value : this.state.chartHeight + (increase ? 20 : -20);
            if (newHeight < 425) {
                newHeight = 425;
            }
            if (newHeight > 1000) {
                newHeight = 1000;
            }

            this.setState({
                chartHeight: newHeight
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                chartHeight: newHeight
            });
        }
    }, {
        key: "_toggleBuySellPosition",
        value: function _toggleBuySellPosition() {
            this.setState({
                buySellTop: !this.state.buySellTop
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                buySellTop: !this.state.buySellTop
            });
        }
    }, {
        key: "_setReceive",
        value: function _setReceive(state, isBid) {
            if (state.price.isValid() && state.for_sale.hasAmount()) {
                state.to_receive = state.for_sale.times(state.price);
                state.toReceiveText = state.to_receive.getAmount({ real: true }).toString();
                return true;
            }
            return false;
        }
    }, {
        key: "_setForSale",
        value: function _setForSale(state, isBid) {
            if (state.price.isValid() && state.to_receive.hasAmount()) {
                state.for_sale = state.to_receive.times(state.price, true);
                state.forSaleText = state.for_sale.getAmount({ real: true }).toString();
                return true;
            }
            return false;
        }
    }, {
        key: "_setPrice",
        value: function _setPrice(state) {
            if (state.for_sale.hasAmount() && state.to_receive.hasAmount()) {
                state.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Price"]({
                    base: state.for_sale,
                    quote: state.to_receive
                });
                state.priceText = state.price.toReal().toString();
                return true;
            }
            return false;
        }
    }, {
        key: "_setPriceText",
        value: function _setPriceText(state, isBid) {
            var currentBase = state[isBid ? "for_sale" : "to_receive"];
            var currentQuote = state[isBid ? "to_receive" : "for_sale"];
            if (currentBase.hasAmount() && currentQuote.hasAmount()) {
                state.priceText = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Price"]({
                    base: currentBase,
                    quote: currentQuote
                }).toReal().toString();
            }
        }
    }, {
        key: "_onInputPrice",
        value: function _onInputPrice(type, e) {
            var current = this.state[type];
            var isBid = type === "bid";
            current.price = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_15__["Price"]({
                base: current[isBid ? "for_sale" : "to_receive"],
                quote: current[isBid ? "to_receive" : "for_sale"],
                real: parseFloat(e.target.value) || 0
            });

            if (isBid) {
                this._setForSale(current, isBid) || this._setReceive(current, isBid);
            } else {
                this._setReceive(current, isBid) || this._setForSale(current, isBid);
            }

            current.priceText = e.target.value;
            this.forceUpdate();
        }
    }, {
        key: "_onInputSell",
        value: function _onInputSell(type, isBid, e) {
            var current = this.state[type];
            // const isBid = type === "bid";
            current.for_sale.setAmount({ real: parseFloat(e.target.value) || 0 });
            if (current.price.isValid()) {
                this._setReceive(current, isBid);
            } else {
                this._setPrice(current);
            }

            current.forSaleText = e.target.value;
            this._setPriceText(current, type === "bid");

            this.forceUpdate();
        }
    }, {
        key: "_onInputReceive",
        value: function _onInputReceive(type, isBid, e) {
            var current = this.state[type];
            // const isBid = type === "bid";
            current.to_receive.setAmount({ real: parseFloat(e.target.value) || 0 });

            if (current.price.isValid()) {
                this._setForSale(current, isBid);
            } else {
                this._setPrice(current);
            }

            current.toReceiveText = e.target.value;
            this._setPriceText(current, type === "bid");
            this.forceUpdate();
        }
    }, {
        key: "isMarketFrozen",
        value: function isMarketFrozen() {
            var _props2 = this.props,
                baseAsset = _props2.baseAsset,
                quoteAsset = _props2.quoteAsset;


            var baseWhiteList = baseAsset.getIn(["options", "whitelist_markets"]).toJS();
            var quoteWhiteList = quoteAsset.getIn(["options", "whitelist_markets"]).toJS();
            var baseBlackList = baseAsset.getIn(["options", "blacklist_markets"]).toJS();
            var quoteBlackList = quoteAsset.getIn(["options", "blacklist_markets"]).toJS();

            if (quoteWhiteList.length && quoteWhiteList.indexOf(baseAsset.get("id")) === -1) {
                return { isFrozen: true, frozenAsset: quoteAsset.get("symbol") };
            }
            if (baseWhiteList.length && baseWhiteList.indexOf(quoteAsset.get("id")) === -1) {
                return { isFrozen: true, frozenAsset: baseAsset.get("symbol") };
            }

            if (quoteBlackList.length && quoteBlackList.indexOf(baseAsset.get("id")) !== -1) {
                return { isFrozen: true, frozenAsset: quoteAsset.get("symbol") };
            }
            if (baseBlackList.length && baseBlackList.indexOf(quoteAsset.get("id")) !== -1) {
                return { isFrozen: true, frozenAsset: baseAsset.get("symbol") };
            }

            return { isFrozen: false };
        }
    }, {
        key: "_toggleChat",
        value: function _toggleChat() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                viewChat: !this.props.viewChat
            });
        }
    }, {
        key: "_toggleMiniChart",
        value: function _toggleMiniChart() {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_11__["default"].changeViewSetting({
                miniDepthChart: !this.props.miniDepthChart
            });
        }
    }, {
        key: "_onChangeMobilePanel",
        value: function _onChangeMobilePanel(val) {
            this.setState({
                mobileKey: val
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this8 = this;

            var _props3 = this.props,
                currentAccount = _props3.currentAccount,
                marketLimitOrders = _props3.marketLimitOrders,
                marketCallOrders = _props3.marketCallOrders,
                marketData = _props3.marketData,
                activeMarketHistory = _props3.activeMarketHistory,
                invertedCalls = _props3.invertedCalls,
                starredMarkets = _props3.starredMarkets,
                quoteAsset = _props3.quoteAsset,
                baseAsset = _props3.baseAsset,
                lowestCallPrice = _props3.lowestCallPrice,
                marketStats = _props3.marketStats,
                marketReady = _props3.marketReady,
                marketSettleOrders = _props3.marketSettleOrders,
                bucketSize = _props3.bucketSize,
                totals = _props3.totals,
                feedPrice = _props3.feedPrice,
                buckets = _props3.buckets,
                coreAsset = _props3.coreAsset,
                trackedGroupsConfig = _props3.trackedGroupsConfig,
                currentGroupOrderLimit = _props3.currentGroupOrderLimit;
            var combinedBids = marketData.combinedBids,
                combinedAsks = marketData.combinedAsks,
                lowestAsk = marketData.lowestAsk,
                highestBid = marketData.highestBid,
                flatBids = marketData.flatBids,
                flatAsks = marketData.flatAsks,
                flatCalls = marketData.flatCalls,
                flatSettles = marketData.flatSettles,
                groupedBids = marketData.groupedBids,
                groupedAsks = marketData.groupedAsks;
            var _state3 = this.state,
                bid = _state3.bid,
                ask = _state3.ask,
                verticalOrderBook = _state3.verticalOrderBook,
                verticalOrderForm = _state3.verticalOrderForm,
                chartHeight = _state3.chartHeight,
                chartType = _state3.chartType,
                flipBuySell = _state3.flipBuySell,
                buyDiff = _state3.buyDiff,
                sellDiff = _state3.sellDiff,
                width = _state3.width,
                buySellTop = _state3.buySellTop,
                tabBuySell = _state3.tabBuySell,
                tabVerticalPanel = _state3.tabVerticalPanel,
                hidePanel = _state3.hidePanel,
                hideScrollbars = _state3.hideScrollbars,
                buyModalType = _state3.buyModalType,
                depositModalType = _state3.depositModalType,
                autoScroll = _state3.autoScroll,
                activePanels = _state3.activePanels,
                panelWidth = _state3.panelWidth,
                mirrorPanels = _state3.mirrorPanels,
                panelTabsActive = _state3.panelTabsActive,
                panelTabs = _state3.panelTabs,
                singleColumnOrderForm = _state3.singleColumnOrderForm,
                flipOrderBook = _state3.flipOrderBook,
                orderBookReversed = _state3.orderBookReversed,
                chartZoom = _state3.chartZoom,
                chartTools = _state3.chartTools,
                hideFunctionButtons = _state3.hideFunctionButtons;

            var _isMarketFrozen = this.isMarketFrozen(),
                isFrozen = _isMarketFrozen.isFrozen,
                frozenAsset = _isMarketFrozen.frozenAsset;

            var centerContainerWidth = width;
            if (this.refs.center) {
                centerContainerWidth = this.refs.center.clientWidth;
            }

            var base = null,
                quote = null,
                accountBalance = null,
                quoteBalance = null,
                baseBalance = null,
                coreBalance = null,
                quoteSymbol = void 0,
                baseSymbol = void 0,
                showCallLimit = false,
                latest = void 0,
                changeClass = void 0;

            var showVolumeChart = this.props.viewSettings.get("showVolumeChart", true);

            hideScrollbars = tinyScreen ? true : hideScrollbars;

            if (quoteAsset.size && baseAsset.size && currentAccount.size) {
                base = baseAsset;
                quote = quoteAsset;
                baseSymbol = base.get("symbol");
                quoteSymbol = quote.get("symbol");

                accountBalance = currentAccount.get("balances").toJS();

                if (accountBalance) {
                    for (var id in accountBalance) {
                        if (id === quote.get("id")) {
                            quoteBalance = accountBalance[id];
                        }
                        if (id === base.get("id")) {
                            baseBalance = accountBalance[id];
                        }
                        if (id === "1.3.0") {
                            coreBalance = accountBalance[id];
                        }
                    }
                }

                showCallLimit = this._getSettlementInfo();
            }

            var quoteIsBitAsset = quoteAsset.get("bitasset_data_id") ? true : false;
            var baseIsBitAsset = baseAsset.get("bitasset_data_id") ? true : false;

            var spread = lowestAsk && highestBid ? lowestAsk.getPrice() - highestBid.getPrice() : 0;

            // Latest price
            if (activeMarketHistory.size) {
                var latest_two = activeMarketHistory.take(2);
                latest = latest_two.first();
                var second_latest = latest_two.last();

                changeClass = latest.getPrice() === second_latest.getPrice() ? "" : latest.getPrice() - second_latest.getPrice() > 0 ? "change-up" : "change-down";
            }

            // Fees
            if (!coreAsset || !Object.keys(this.state.feeStatus).length) {
                return null;
            }

            var _getFeeAssets2 = this._getFeeAssets(quote, base, coreAsset),
                sellFeeAsset = _getFeeAssets2.sellFeeAsset,
                sellFeeAssets = _getFeeAssets2.sellFeeAssets,
                sellFee = _getFeeAssets2.sellFee,
                buyFeeAsset = _getFeeAssets2.buyFeeAsset,
                buyFeeAssets = _getFeeAssets2.buyFeeAssets,
                buyFee = _getFeeAssets2.buyFee;

            // Decimals


            var hasPrediction = base.getIn(["bitasset", "is_prediction_market"]) || quote.getIn(["bitasset", "is_prediction_market"]);

            var description = null;

            if (hasPrediction) {
                description = quoteAsset.getIn(["options", "description"]);
                description = common_asset_utils__WEBPACK_IMPORTED_MODULE_13__["default"].parseDescription(description).main;
            }

            var smallScreen = width < 850 ? true : false;
            var tinyScreen = width < 640 ? true : false;

            var minChartHeight = 300;
            var thisChartHeight = Math.max(this.state.height > 1100 ? chartHeight : chartHeight - 125, minChartHeight);

            var expirationType = this.state.expirationType;
            var expirationCustomTime = this.state.expirationCustomTime;

            var isPanelActive = activePanels.length >= 1 ? true : false;
            var isPredictionMarket = base.getIn(["bitasset", "is_prediction_market"]);

            /***
             * Generate layout cards
             */
            var actionCardIndex = 0;

            var buySellTitle = function buySellTitle(isBid) {
                return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    "div",
                    { className: "exchange-content-header" },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_33__["default"], {
                        string: "exchange.buysell_formatter",
                        noLink: true,
                        noTip: true,
                        keys: [{
                            type: "asset",
                            value: _this8.props.quoteAsset.get("symbol"),
                            arg: "asset"
                        }, {
                            type: "translate",
                            value: isBid ? "exchange.buy" : "exchange.sell",
                            arg: "direction"
                        }]
                    })
                );
            };

            var buyForm = isFrozen ? null : tinyScreen && !this.state.mobileKey.includes("buySellTab") ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
                {
                    animated: false,
                    activeKey: this.props.viewSettings.get("order-form-bid") || "limit",
                    onChange: this.handleOrderTypeTabChange.bind(this, "bid"),
                    tabBarExtraContent: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        "div",
                        null,
                        buySellTitle(true)
                    ),
                    defaultActiveKey: "limit",
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("exchange--buy-sell-form", verticalOrderForm && !smallScreen ? "" : centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "", "small-12 exchange-padded middle-content", flipBuySell ? "order-" + (buySellTop ? 2 : 3) + " large-order-" + (buySellTop ? 2 : 5) + " sell-form" : "order-" + (buySellTop ? 1 : 2) + " large-order-" + (buySellTop ? 1 : 4) + " buy-form")
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane,
                    {
                        tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.limit"),
                        key: "limit"
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_BuySell__WEBPACK_IMPORTED_MODULE_18__["default"], {
                        showScaledOrderModal: this.showScaledOrderModal,
                        key: "actionCard_" + actionCardIndex++,
                        onBorrow: baseIsBitAsset ? this._borrowBase.bind(this) : null,
                        onBuy: this._onBuy.bind(this, "bid"),
                        onDeposit: this._onDeposit.bind(this, "bid"),
                        currentAccount: currentAccount,
                        backedCoin: this.props.backedCoins.find(function (a) {
                            return a.symbol === base.get("symbol");
                        }),
                        currentBridges: this.props.bridgeCoins.get(base.get("symbol")) || null,
                        isOpen: this.state.buySellOpen,
                        onToggleOpen: this._toggleOpenBuySell.bind(this),
                        parentWidth: centerContainerWidth,
                        styles: {
                            padding: 5,
                            paddingRight: mirrorPanels ? 15 : 5
                        },
                        type: "bid",
                        hideHeader: true,
                        expirationType: expirationType["bid"],
                        expirations: this.EXPIRATIONS,
                        expirationCustomTime: expirationCustomTime["bid"],
                        onExpirationTypeChange: this._handleExpirationChange.bind(this, "bid"),
                        onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "bid"),
                        amount: bid.toReceiveText,
                        price: bid.priceText,
                        total: bid.forSaleText,
                        quote: quote,
                        base: base,
                        amountChange: this._onInputReceive.bind(this, "bid", true),
                        priceChange: this._onInputPrice.bind(this, "bid"),
                        setPrice: this._currentPriceClick.bind(this),
                        totalChange: this._onInputSell.bind(this, "bid", false),
                        clearForm: this._clearForms.bind(this, "bid"),
                        balance: baseBalance,
                        balanceId: base.get("id"),
                        onSubmit: this._createLimitOrderConfirm.bind(this, quote, base, baseBalance, coreBalance, buyFeeAsset, "buy"),
                        balancePrecision: base.get("precision"),
                        quotePrecision: quote.get("precision"),
                        totalPrecision: base.get("precision"),
                        currentPrice: lowestAsk.getPrice(),
                        currentPriceObject: lowestAsk,
                        account: currentAccount.get("name"),
                        fee: buyFee,
                        hasFeeBalance: this.state.feeStatus[buyFee.asset_id].hasBalance,
                        feeAssets: buyFeeAssets,
                        feeAsset: buyFeeAsset,
                        onChangeFeeAsset: this.onChangeFeeAsset.bind(this, "buy"),
                        isPredictionMarket: base.getIn(["bitasset", "is_prediction_market"]),
                        onFlip: !flipBuySell ? this._flipBuySell.bind(this) : null,
                        onTogglePosition: this.state.buySellTop && !verticalOrderBook ? this._toggleBuySellPosition.bind(this) : null,
                        moveOrderForm: !smallScreen && (!flipBuySell || verticalOrderForm) ? this._moveOrderForm.bind(this) : null,
                        verticalOrderForm: !smallScreen ? verticalOrderForm : false,
                        isPanelActive: isPanelActive,
                        activePanels: activePanels,
                        singleColumnOrderForm: singleColumnOrderForm,
                        hideFunctionButtons: hideFunctionButtons
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane,
                    {
                        tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.scaled"),
                        key: "scaled"
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ScaledOrderTab__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        expirationType: expirationType["bid"],
                        expirations: this.EXPIRATIONS,
                        expirationCustomTime: expirationCustomTime["bid"],
                        onExpirationTypeChange: this._handleExpirationChange.bind(this, "bid"),
                        onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "bid"),
                        currentPrice: lowestAsk.getPrice(),
                        lastClickedPrice: this.state.ask && this.state.ask.priceText,
                        currentAccount: currentAccount,
                        createScaledOrder: this._createScaledOrder,
                        type: "bid",
                        quoteAsset: quote,
                        baseAsset: base
                    })
                )
            );

            var sellForm = isFrozen ? null : tinyScreen && !this.state.mobileKey.includes("buySellTab") ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
                {
                    activeKey: this.props.viewSettings.get("order-form-ask") || "limit",
                    onChange: this.handleOrderTypeTabChange.bind(this, "ask"),
                    animated: false,
                    tabBarExtraContent: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        "div",
                        null,
                        buySellTitle(false)
                    ),
                    defaultActiveKey: "limit",
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("exchange--buy-sell-form", verticalOrderForm && !smallScreen ? "" : centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "", "small-12 exchange-padded middle-content", flipBuySell ? "order-" + (buySellTop ? 1 : 2) + " large-order-" + (buySellTop ? 1 : 4) + " buy-form" : "order-" + (buySellTop ? 2 : 3) + " large-order-" + (buySellTop ? 2 : 5) + " sell-form")
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane,
                    {
                        tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.limit"),
                        key: "limit"
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_BuySell__WEBPACK_IMPORTED_MODULE_18__["default"], {
                        showScaledOrderModal: this.showScaledOrderModal,
                        key: "actionCard_" + actionCardIndex++,
                        onBorrow: quoteIsBitAsset ? this._borrowQuote.bind(this) : null,
                        onBuy: this._onBuy.bind(this, "ask"),
                        onDeposit: this._onDeposit.bind(this, "ask"),
                        currentAccount: currentAccount,
                        backedCoin: this.props.backedCoins.find(function (a) {
                            return a.symbol === quote.get("symbol");
                        }),
                        currentBridges: this.props.bridgeCoins.get(quote.get("symbol")) || null,
                        isOpen: this.state.buySellOpen,
                        onToggleOpen: this._toggleOpenBuySell.bind(this),
                        parentWidth: centerContainerWidth,
                        styles: {
                            padding: 5,
                            paddingRight: mirrorPanels ? 15 : 5
                        },
                        type: "ask",
                        hideHeader: true,
                        amount: ask.forSaleText,
                        price: ask.priceText,
                        total: ask.toReceiveText,
                        quote: quote,
                        base: base,
                        expirationType: expirationType["ask"],
                        expirations: this.EXPIRATIONS,
                        expirationCustomTime: expirationCustomTime["ask"],
                        onExpirationTypeChange: this._handleExpirationChange.bind(this, "ask"),
                        onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "ask"),
                        amountChange: this._onInputSell.bind(this, "ask", false),
                        priceChange: this._onInputPrice.bind(this, "ask"),
                        setPrice: this._currentPriceClick.bind(this),
                        totalChange: this._onInputReceive.bind(this, "ask", true),
                        clearForm: this._clearForms.bind(this, "ask"),
                        balance: quoteBalance,
                        balanceId: quote.get("id"),
                        onSubmit: this._createLimitOrderConfirm.bind(this, base, quote, quoteBalance, coreBalance, sellFeeAsset, "sell"),
                        balancePrecision: quote.get("precision"),
                        quotePrecision: quote.get("precision"),
                        totalPrecision: base.get("precision"),
                        currentPrice: highestBid.getPrice(),
                        currentPriceObject: highestBid,
                        account: currentAccount.get("name"),
                        fee: sellFee,
                        hasFeeBalance: this.state.feeStatus[sellFee.asset_id].hasBalance,
                        feeAssets: sellFeeAssets,
                        feeAsset: sellFeeAsset,
                        onChangeFeeAsset: this.onChangeFeeAsset.bind(this, "sell"),
                        isPredictionMarket: quote.getIn(["bitasset", "is_prediction_market"]),
                        onFlip: flipBuySell ? this._flipBuySell.bind(this) : null,
                        onTogglePosition: this.state.buySellTop && !verticalOrderBook ? this._toggleBuySellPosition.bind(this) : null,
                        moveOrderForm: !smallScreen && (flipBuySell || verticalOrderForm) ? this._moveOrderForm.bind(this) : null,
                        verticalOrderForm: !smallScreen ? verticalOrderForm : false,
                        isPanelActive: isPanelActive,
                        activePanels: activePanels,
                        singleColumnOrderForm: singleColumnOrderForm,
                        hideFunctionButtons: hideFunctionButtons
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane,
                    {
                        tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.scaled"),
                        key: "scaled"
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ScaledOrderTab__WEBPACK_IMPORTED_MODULE_19__["default"], {
                        expirationType: expirationType["ask"],
                        expirations: this.EXPIRATIONS,
                        expirationCustomTime: expirationCustomTime["ask"],
                        onExpirationTypeChange: this._handleExpirationChange.bind(this, "ask"),
                        onExpirationCustomChange: this._handleCustomExpirationChange.bind(this, "ask"),
                        currentPrice: highestBid.getPrice(),
                        lastClickedPrice: this.state.ask && this.state.ask.priceText,
                        currentAccount: currentAccount,
                        createScaledOrder: this._createScaledOrder,
                        type: "ask",
                        baseAsset: base,
                        quoteAsset: quote
                    })
                )
            );

            var myMarkets = tinyScreen && !this.state.mobileKey.includes("myMarkets") ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_MyMarkets__WEBPACK_IMPORTED_MODULE_24__["default"], {
                key: "actionCard_" + actionCardIndex++,
                className: "grid-block left-order-book no-padding no-margin vertical",
                style: {
                    minWidth: 350,
                    height: smallScreen ? 680 : "calc(100vh - 215px)",
                    padding: smallScreen ? 10 : 0
                },
                headerStyle: {
                    width: "100%",
                    display: !smallScreen ? "display: none" : ""
                },
                noHeader: true,
                listHeight: this.state.height - 450,
                columns: [{ name: "star", index: 1 }, { name: "market", index: 2 }, { name: "vol", index: 3 }, { name: "price", index: 4 }, { name: "change", index: 5 }],
                findColumns: [{ name: "market", index: 1 }, { name: "issuer", index: 2 }, { name: "vol", index: 3 }, { name: "add", index: 4 }],
                current: quoteSymbol + "_" + baseSymbol,
                location: this.props.location,
                history: this.props.history,
                activeTab: tabVerticalPanel ? tabVerticalPanel : "my-market"
            });

            var Trollbox = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                "div",
                {
                    style: {
                        padding: !this.props.viewChat ? 0 : "0 0 0 0"
                    },
                    className: "grid-block no-margin vertical shrink"
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    "div",
                    {
                        onClick: this._toggleChat.bind(this),
                        className: "exchange-content-header clickable",
                        style: {
                            textAlign: "left",
                            paddingRight: 10,
                            paddingLeft: 10,
                            paddingTop: 6,
                            paddingBottom: 6
                        }
                    },
                    this.props.viewChat ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        "span",
                        null,
                        "\u25BC"
                    ) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        "span",
                        null,
                        "\u25B2"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_37___default.a, { content: "exchange.trollbox" })
                ),
                this.props.viewChat ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Chat_ChatBro__WEBPACK_IMPORTED_MODULE_38__["default"], { height: "400px" }) : null
            );

            var orderBook = tinyScreen && !this.state.mobileKey.includes("orderBook") ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_OrderBook__WEBPACK_IMPORTED_MODULE_22__["OrderBook"], {
                ref: "order_book",
                key: "actionCard_" + actionCardIndex++,
                latest: latest && latest.getPrice(),
                changeClass: changeClass,
                orders: marketLimitOrders,
                calls: marketCallOrders,
                invertedCalls: invertedCalls,
                combinedBids: combinedBids,
                combinedAsks: combinedAsks,
                highestBid: highestBid,
                lowestAsk: lowestAsk,
                totalBids: totals.bid,
                totalAsks: totals.ask,
                base: base,
                quote: quote,
                baseSymbol: baseSymbol,
                quoteSymbol: quoteSymbol,
                onClick: this._orderbookClick.bind(this),
                horizontal: !verticalOrderBook || smallScreen ? true : false,
                flipOrderBook: flipOrderBook,
                orderBookReversed: orderBookReversed,
                marketReady: marketReady,
                wrapperClass: classnames__WEBPACK_IMPORTED_MODULE_4___default()(centerContainerWidth > 1200 ? "xlarge-8" : centerContainerWidth > 800 ? "" : "", "medium-12 large-12", "small-12 grid-block orderbook no-padding align-spaced no-overflow wrap shrink", "order-" + (buySellTop ? 3 : 1) + " xlarge-order-" + (buySellTop ? 4 : 1)),
                innerClass: classnames__WEBPACK_IMPORTED_MODULE_4___default()(centerContainerWidth > 1200 ? "medium-6" : centerContainerWidth > 800 ? "medium-6 large-6" : "", "small-12 middle-content", !tinyScreen ? "exchange-padded" : ""),
                currentAccount: this.props.currentAccount.get("id"),
                handleGroupOrderLimitChange: this._onGroupOrderLimitChange.bind(this),
                trackedGroupsConfig: trackedGroupsConfig,
                currentGroupOrderLimit: currentGroupOrderLimit,
                groupedBids: groupedBids,
                groupedAsks: groupedAsks,
                isPanelActive: activePanels.length >= 1,
                onTogglePosition: !this.state.buySellTop ? this._toggleBuySellPosition.bind(this) : null,
                moveOrderBook: !smallScreen ? this._moveOrderBook.bind(this) : null,
                smallScreen: smallScreen,
                hideScrollbars: hideScrollbars,
                autoScroll: autoScroll,
                onFlipOrderBook: this._flipOrderBook.bind(this),
                hideFunctionButtons: hideFunctionButtons
            });

            panelWidth = 350;

            if (this.refs.order_book && this.refs.order_book.verticalStickyTable && this.refs.order_book.verticalStickyTable.current && this.refs.order_book.verticalStickyTable.current.scrollData) {
                panelWidth = this.refs.order_book.verticalStickyTable.current.scrollData.scrollWidth;
            }

            var marketHistory = tinyScreen && !this.state.mobileKey.includes("marketHistory") ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_MarketHistory__WEBPACK_IMPORTED_MODULE_23__["default"], {
                key: "actionCard_" + actionCardIndex++,
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(panelTabs["history"] == 0 ? centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "" : "medium-12", "no-padding no-overflow middle-content small-12 order-6"),
                innerClass: !tinyScreen ? "exchange-padded" : "",
                innerStyle: { paddingBottom: !tinyScreen ? "1.2rem" : "0" },
                noHeader: panelTabs["history"] == 0 ? false : true,
                history: activeMarketHistory,
                currentAccount: currentAccount,
                myHistory: currentAccount.get("history"),
                base: base,
                quote: quote,
                baseSymbol: baseSymbol,
                quoteSymbol: quoteSymbol,
                activeTab: "history",
                tinyScreen: tinyScreen,
                isPanelActive: isPanelActive,
                hideScrollbars: hideScrollbars
            });

            var myMarketHistory = tinyScreen && !this.state.mobileKey.includes("myMarketHistory") ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_MarketHistory__WEBPACK_IMPORTED_MODULE_23__["default"], {
                key: "actionCard_" + actionCardIndex++,
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(panelTabs["my_history"] == 0 ? centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "" : "medium-12", "no-padding no-overflow middle-content small-12", verticalOrderBook || verticalOrderForm ? "order-4" : "order-3"),
                innerClass: !tinyScreen ? "exchange-padded" : "",
                innerStyle: { paddingBottom: !tinyScreen ? "1.2rem" : "0" },
                noHeader: panelTabs["my_history"] == 0 ? false : true,
                history: activeMarketHistory,
                currentAccount: currentAccount,
                myHistory: currentAccount.get("history"),
                base: base,
                quote: quote,
                baseSymbol: baseSymbol,
                quoteSymbol: quoteSymbol,
                activeTab: "my_history",
                tinyScreen: tinyScreen,
                isPanelActive: isPanelActive,
                hideScrollbars: hideScrollbars
            });

            var myOpenOrders = tinyScreen && !this.state.mobileKey.includes("myOpenOrders") ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_MyOpenOrders__WEBPACK_IMPORTED_MODULE_21__["MarketOrders"], {
                key: "actionCard_" + actionCardIndex++,
                style: { marginBottom: !tinyScreen ? 15 : 0 },
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(panelTabs["my_orders"] == 0 ? centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "" : "medium-12", "no-padding no-overflow middle-content small-12 order-7"),
                innerClass: !tinyScreen ? "exchange-padded" : "",
                innerStyle: { paddingBottom: !tinyScreen ? "1.2rem" : "0" },
                noHeader: panelTabs["my_orders"] == 0 ? false : true,
                orders: marketLimitOrders,
                settleOrders: marketSettleOrders,
                currentAccount: currentAccount,
                base: base,
                quote: quote,
                baseSymbol: baseSymbol,
                quoteSymbol: quoteSymbol,
                activeTab: "my_orders",
                onCancel: this._cancelLimitOrder.bind(this),
                flipMyOrders: this.props.viewSettings.get("flipMyOrders"),
                feedPrice: this.props.feedPrice,
                smallScreen: smallScreen,
                tinyScreen: tinyScreen,
                hidePanel: hidePanel,
                isPanelActive: isPanelActive,
                hideScrollbars: hideScrollbars
            });

            var settlementOrders = marketSettleOrders.size === 0 || tinyScreen && !this.state.mobileKey.includes("settlementOrders") ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_MyOpenOrders__WEBPACK_IMPORTED_MODULE_21__["MarketOrders"], {
                key: "actionCard_" + actionCardIndex++,
                style: { marginBottom: !tinyScreen ? 15 : 0 },
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(panelTabs["open_settlement"] == 0 ? centerContainerWidth > 1200 ? "medium-6 large-6 xlarge-4" : centerContainerWidth > 800 ? "medium-6" : "" : "medium-12", "no-padding no-overflow middle-content small-12 order-8"),
                innerClass: !tinyScreen ? "exchange-padded" : "",
                innerStyle: { paddingBottom: !tinyScreen ? "1.2rem" : "0" },
                noHeader: panelTabs["open_settlement"] == 0 ? false : true,
                orders: marketLimitOrders,
                settleOrders: marketSettleOrders,
                currentAccount: currentAccount,
                base: base,
                quote: quote,
                baseSymbol: baseSymbol,
                quoteSymbol: quoteSymbol,
                activeTab: "open_settlement",
                onCancel: this._cancelLimitOrder.bind(this),
                flipMyOrders: this.props.viewSettings.get("flipMyOrders"),
                feedPrice: this.props.feedPrice,
                smallScreen: smallScreen,
                tinyScreen: tinyScreen,
                hidePanel: hidePanel,
                isPanelActive: isPanelActive,
                hideScrollbars: hideScrollbars
            });

            var tradingViewChart = !tinyScreen && !(chartType == "price_chart") || tinyScreen && !this.state.mobileKey.includes("tradingViewChart") ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_TradingViewPriceChart__WEBPACK_IMPORTED_MODULE_28__["default"], {
                locale: this.props.locale,
                dataFeed: this.props.dataFeed,
                baseSymbol: baseSymbol,
                quoteSymbol: quoteSymbol,
                marketReady: marketReady,
                theme: this.props.settings.get("themes"),
                buckets: buckets,
                bucketSize: bucketSize,
                currentPeriod: this.state.currentPeriod,
                chartHeight: thisChartHeight,
                chartZoom: tinyScreen ? false : chartZoom,
                chartTools: tinyScreen ? false : chartTools,
                mobile: tinyScreen
            });

            var deptHighChart = !tinyScreen && !(chartType == "market_depth") || tinyScreen && !this.state.mobileKey.includes("deptHighChart") ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_DepthHighChart__WEBPACK_IMPORTED_MODULE_29__["default"], {
                marketReady: marketReady,
                orders: marketLimitOrders,
                showCallLimit: showCallLimit,
                call_orders: marketCallOrders,
                flat_asks: flatAsks,
                flat_bids: flatBids,
                flat_calls: showCallLimit ? flatCalls : [],
                flat_settles: this.props.settings.get("showSettles") && flatSettles,
                settles: marketSettleOrders,
                invertedCalls: invertedCalls,
                totalBids: totals.bid,
                totalAsks: totals.ask,
                base: base,
                quote: quote,
                height: thisChartHeight,
                isPanelActive: isPanelActive,
                onClick: this._depthChartClick.bind(this, base, quote),
                feedPrice: !hasPrediction && feedPrice && feedPrice.toReal(),
                spread: spread,
                LCP: showCallLimit ? lowestCallPrice : null,
                hasPrediction: hasPrediction,
                noFrame: false,
                theme: this.props.settings.get("themes"),
                centerRef: this.refs.center,
                activePanels: activePanels
            });

            var tradingChartHeader = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                "div",
                {
                    className: "exchange--chart-control",
                    style: {
                        height: 33,
                        right: chartType == "price_chart" ? "5rem" : "15rem",
                        top: "1px",
                        position: "absolute",
                        zIndex: 1,
                        padding: "0.2rem"
                    }
                },
                chartType == "price_chart" && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.settings.tooltip.chart_tools")
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                        style: {
                            cursor: "pointer",
                            fontSize: "1.4rem",
                            marginRight: "0.6rem"
                        },
                        onClick: this._chartTools.bind(this),
                        type: "tool"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.settings.tooltip.increase_chart_height")
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                        style: {
                            cursor: "pointer",
                            fontSize: "1.4rem",
                            marginRight: "0.6rem"
                        },
                        onClick: function onClick() {
                            _this8.onChangeChartHeight({ increase: true });
                        },
                        type: "up"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.settings.tooltip.decrease_chart_height")
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                        style: {
                            cursor: "pointer",
                            fontSize: "1.4rem",
                            marginRight: "0.6rem"
                        },
                        onClick: function onClick() {
                            _this8.onChangeChartHeight({ increase: false });
                        },
                        type: "down"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tooltip"],
                    {
                        title: chartType == "market_depth" ? counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.settings.tooltip.show_price_chart") : counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.settings.tooltip.show_market_depth")
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                        style: {
                            cursor: "pointer",
                            fontSize: "1.4rem"
                        },
                        onClick: function onClick() {
                            if (chartType == "market_depth") {
                                _this8._toggleChart("price_chart");
                            } else {
                                _this8._toggleChart("market_depth");
                            }
                        },
                        type: chartType == "market_depth" ? "bar-chart" : "area-chart"
                    })
                )
            );

            /***
             * Generate tabs based on Layout
             *
             */

            var buySellTab = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                "div",
                {
                    key: "actionCard_" + actionCardIndex++,
                    className: "left-order-book small-12",
                    style: {
                        paddingLeft: 5,
                        width: !smallScreen ? 300 : "auto"
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
                    {
                        defaultActiveKey: "buy",
                        activeKey: tabBuySell,
                        onChange: this._setTabBuySell.bind(this),
                        style: {
                            padding: "0px !important",
                            margin: "0px !important"
                        }
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane,
                        {
                            tab: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_33__["default"], {
                                string: "exchange.buysell_formatter",
                                noLink: true,
                                noTip: false,
                                keys: [{
                                    type: "asset",
                                    value: quote.get("symbol"),
                                    arg: "asset"
                                }, {
                                    type: "translate",
                                    value: isPredictionMarket ? "exchange.short" : "exchange.buy",
                                    arg: "direction"
                                }]
                            }),
                            key: "buy"
                        },
                        buyForm
                    ),
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane,
                        {
                            tab: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_33__["default"], {
                                string: "exchange.buysell_formatter",
                                noLink: true,
                                noTip: false,
                                keys: [{
                                    type: "asset",
                                    value: quote.get("symbol"),
                                    arg: "asset"
                                }, {
                                    type: "translate",
                                    value: isPredictionMarket ? "exchange.short" : "exchange.sell",
                                    arg: "direction"
                                }]
                            }),
                            key: "sell"
                        },
                        sellForm
                    )
                )
            );

            // Generate Tabbed Groups
            var groupTabs = { 1: [], 2: [] };
            var groupStandalone = [];

            Object.keys(panelTabs).sort().map(function (a) {
                if (panelTabs[a] == 0) {
                    // Handle Standalone Settings
                    if (a == "my_history") {
                        groupStandalone.push(myMarketHistory);
                    }

                    if (a == "history") {
                        groupStandalone.push(marketHistory);
                    }

                    if (a == "my_orders") {
                        groupStandalone.push(myOpenOrders);
                    }

                    if (a == "open_settlement" && settlementOrders !== null) {
                        groupStandalone.push(settlementOrders);
                    }
                } else {
                    if (a == "my_history") {
                        groupTabs[panelTabs[a]].push(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane,
                            {
                                tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.my_history"),
                                key: "my_history"
                            },
                            myMarketHistory
                        ));
                    }

                    if (a == "history") {
                        groupTabs[panelTabs[a]].push(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane,
                            {
                                tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.history"),
                                key: "history"
                            },
                            marketHistory
                        ));
                    }

                    if (a == "my_orders") {
                        groupTabs[panelTabs[a]].push(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane,
                            {
                                tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.my_orders"),
                                key: "my_orders"
                            },
                            myOpenOrders
                        ));
                    }

                    if (a == "open_settlement" && settlementOrders !== null) {
                        groupTabs[panelTabs[a]].push(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane,
                            {
                                tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.settle_orders"),
                                key: "open_settlement"
                            },
                            settlementOrders
                        ));
                    }
                }
            });

            Object.keys(panelTabsActive).map(function (thisTabsId) {
                Object.keys(panelTabs).map(function (thisPanelName) {
                    var stop = false;
                    if (!stop && thisTabsId == panelTabs[thisPanelName]) {
                        panelTabsActive[thisTabsId] = !panelTabsActive[thisTabsId] ? thisPanelName : panelTabsActive[thisTabsId];
                        stop = true;
                    }
                });
            });

            var groupTabsCount = groupStandalone.length;

            Object.keys(groupTabs).map(function (tab) {
                if (groupTabs[tab].length) {
                    groupTabsCount++;
                }
            });

            var groupTabbed1 = groupTabs[1].length > 0 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                "div",
                {
                    key: "actionCard_" + actionCardIndex++,
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(centerContainerWidth > 1200 ? groupTabsCount == 1 ? "medium-12 xlarge-4" : "medium-6 xlarge-4 " : centerContainerWidth > 800 ? groupTabsCount == 1 ? "medium-12" : "medium-6" : "", "small-12 order-5", verticalOrderBook ? "xlarge-order-5" : "", !verticalOrderBook && !verticalOrderForm ? centerContainerWidth < 1200 ? "xlarge-order-5" : "xlarge-order-2" : ""),
                    style: { paddingRight: 5 }
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
                    {
                        activeKey: panelTabsActive[1],
                        onChange: this._setPanelTabInGroup.bind(this, 1)
                    },
                    groupTabs[1]
                )
            ) : null;

            var groupTabbed2 = groupTabs[2].length > 0 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                "div",
                {
                    key: "actionCard_" + actionCardIndex++,
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(centerContainerWidth > 1200 ? groupTabsCount == 1 ? "medium-12 xlarge-4" : "medium-6 xlarge-4 " : centerContainerWidth > 800 ? groupTabsCount == 1 ? "medium-12" : "medium-6" : "", "small-12 order-6"),
                    style: { paddingRight: 5 }
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
                    {
                        activeKey: panelTabsActive[2],
                        onChange: this._setPanelTabInGroup.bind(this, 2)
                    },
                    groupTabs[2]
                )
            ) : null;

            var emptyDiv = groupTabsCount > 2 ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                "div",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(centerContainerWidth > 1200 && (verticalOrderBook || verticalOrderBook) ? "xlarge-order-6 xlarge-8 order-9" : "", "small-12 grid-block orderbook no-padding align-spaced no-overflow wrap"),
                    key: "actionCard_" + actionCardIndex++
                },
                "\xA0"
            );

            /**
             * Generate layout grid based on Screen Size
             */
            var actionCards = [];
            if (!smallScreen) {
                if (!verticalOrderForm) {
                    actionCards.push(buyForm);
                    actionCards.push(sellForm);
                }

                if (!verticalOrderBook) {
                    actionCards.push(orderBook);
                }

                if (verticalOrderBook || verticalOrderForm) {
                    actionCards.push(emptyDiv);
                }

                actionCards.push(groupStandalone);
                actionCards.push(groupTabbed1);
                actionCards.push(groupTabbed2);
            } else if (!tinyScreen) {
                actionCards.push(buyForm);
                actionCards.push(sellForm);
                actionCards.push(orderBook);
                actionCards.push(groupStandalone);
                actionCards.push(groupTabbed1);
                actionCards.push(groupTabbed2);
                actionCards.push(react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    "div",
                    {
                        className: "order-10 small-12",
                        key: "actionCard_" + actionCardIndex++
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
                        {
                            defaultActiveKey: "my-market",
                            activeKey: tabVerticalPanel,
                            onChange: this._setTabVerticalPanel.bind(this)
                        },
                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane, {
                            tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.market_name"),
                            key: "my-market"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane, {
                            tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.more"),
                            key: "find-market"
                        })
                    ),
                    myMarkets
                ));
            } else {
                actionCards = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Collapse"],
                    {
                        activeKey: this.state.mobileKey,
                        onChange: this._onChangeMobilePanel.bind(this),
                        style: { paddingRight: 8 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Collapse"].Panel,
                        {
                            header: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.price_history"),
                            key: "tradingViewChart"
                        },
                        tradingViewChart
                    ),
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Collapse"].Panel,
                        {
                            header: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.order_depth"),
                            key: "deptHighChart"
                        },
                        deptHighChart
                    ),
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Collapse"].Panel,
                        {
                            header: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.buy_sell"),
                            key: "buySellTab"
                        },
                        buySellTab
                    ),
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Collapse"].Panel,
                        {
                            header: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.order_book"),
                            key: "orderBook"
                        },
                        orderBook
                    ),
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Collapse"].Panel,
                        {
                            header: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.history"),
                            key: "marketHistory"
                        },
                        marketHistory
                    ),
                    settlementOrders !== null ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Collapse"].Panel,
                        {
                            header: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.settle_orders"),
                            key: "settlementOrders"
                        },
                        settlementOrders
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Collapse"].Panel,
                        {
                            header: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.my_history"),
                            key: "myMarketHistory"
                        },
                        myMarketHistory
                    ),
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Collapse"].Panel,
                        {
                            header: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.my_orders"),
                            key: "myOpenOrders"
                        },
                        myOpenOrders
                    ),
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Collapse"].Panel,
                        {
                            header: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.market_name"),
                            key: "myMarkets"
                        },
                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
                            {
                                defaultActiveKey: "my-market",
                                activeKey: tabVerticalPanel,
                                onChange: this._setTabVerticalPanel.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane, {
                                tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.market_name"),
                                key: "my-market"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane, {
                                tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.more"),
                                key: "find-market"
                            })
                        ),
                        myMarkets
                    )
                );
            }

            /***
             * Generate Panels
             */
            var leftPanel = null;
            var rightPanel = null;
            var leftPanelContainer = null;
            var rightPanelContainer = null;
            var enableToggleLeft = false;
            var enableToggleRight = false;

            if (!smallScreen) {
                if (verticalOrderBook) {
                    leftPanel = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        "div",
                        {
                            className: "left-order-book no-padding no-overflow",
                            style: {
                                display: "block",
                                height: "calc(100vh - 170px)",
                                width: panelWidth
                            }
                        },
                        orderBook
                    );
                }

                if (verticalOrderForm) {
                    leftPanel = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        "div",
                        {
                            className: "left-order-book no-padding no-overflow",
                            style: {
                                display: "block",
                                height: "calc(100vh - 170px)",
                                width: 300
                            }
                        },
                        buySellTab
                    );
                }

                rightPanel = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    "div",
                    {
                        className: "grid-block shrink right-column no-overflow",
                        style: { maxWidth: 450 }
                    },
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        "div",
                        { className: "grid-block no-padding no-margin vertical" },
                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                            "div",
                            {
                                className: "left-order-book no-padding no-overflow shrink",
                                style: { display: "block" },
                                key: "actionCard_" + actionCardIndex++
                            },
                            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                                "div",
                                {
                                    className: "v-align no-padding align-center grid-block footer vertical shrink",
                                    "data-intro": counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("walkthrough.my_markets")
                                },
                                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"],
                                    {
                                        defaultActiveKey: "my-market",
                                        activeKey: tabVerticalPanel,
                                        onChange: this._setTabVerticalPanel.bind(this)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane, {
                                        tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.market_name"),
                                        key: "my-market"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Tabs"].TabPane, {
                                        tab: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.more"),
                                        key: "find-market"
                                    })
                                )
                            ),
                            myMarkets
                        ),
                        Trollbox
                    )
                );

                if (!mirrorPanels && leftPanel || mirrorPanels && rightPanel) {
                    enableToggleLeft = true;
                }
                if (!mirrorPanels && rightPanel || mirrorPanels && leftPanel) {
                    enableToggleRight = true;
                }

                leftPanelContainer = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    "div",
                    { className: "grid-block left-column shrink no-overflow" },
                    activePanels.includes("left") ? mirrorPanels ? rightPanel : leftPanel : null,
                    enableToggleLeft ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        "div",
                        {
                            style: {
                                width: "auto",
                                paddingTop: "calc(50vh - 80px)"
                            },
                            onClick: this._togglePanel.bind(this, "left")
                        },
                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                            "data-intro": counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("walkthrough.panel_hide"),
                            type: activePanels.includes("left") ? "caret-left" : "caret-right"
                        })
                    ) : null
                );

                rightPanelContainer = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    "div",
                    { className: "grid-block left-column shrink no-overflow" },
                    enableToggleRight ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        "div",
                        {
                            style: {
                                width: "auto",
                                paddingTop: "calc(50vh - 80px)"
                            },
                            onClick: this._togglePanel.bind(this, "right")
                        },
                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                            "data-intro": counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("walkthrough.panel_hide"),
                            type: activePanels.includes("right") ? "caret-right" : "caret-left"
                        })
                    ) : null,
                    activePanels.includes("right") ? !mirrorPanels ? rightPanel : leftPanel : null
                );
            }

            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                !this.props.marketReady ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_30__["default"], null) : null,
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ExchangeHeader__WEBPACK_IMPORTED_MODULE_20__["default"], {
                    hasAnyPriceAlert: this.props.hasAnyPriceAlert,
                    showPriceAlertModal: this.showPriceAlertModal,
                    account: this.props.currentAccount,
                    quoteAsset: quoteAsset,
                    baseAsset: baseAsset,
                    hasPrediction: hasPrediction,
                    starredMarkets: starredMarkets,
                    lowestAsk: lowestAsk,
                    highestBid: highestBid,
                    lowestCallPrice: lowestCallPrice,
                    showCallLimit: showCallLimit,
                    feedPrice: feedPrice,
                    marketReady: marketReady,
                    latestPrice: latest && latest.getPrice(),
                    marketStats: marketStats,
                    selectedMarketPickerAsset: this.state.marketPickerAsset,
                    onToggleMarketPicker: this._toggleMarketPicker.bind(this),
                    onTogglePersonalize: this._togglePersonalize.bind(this),
                    showVolumeChart: showVolumeChart
                }),
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    "div",
                    { className: "grid-block page-layout market-layout" },
                    this.state.isMarketPickerModalVisible || this.state.isMarketPickerModalLoaded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_MarketPicker__WEBPACK_IMPORTED_MODULE_25__["default"], _extends({
                        visible: this.state.isMarketPickerModalVisible,
                        showModal: this.showMarketPickerModal,
                        hideModal: this.hideMarketPickerModal,
                        marketPickerAsset: this.state.marketPickerAsset,
                        onToggleMarketPicker: this._toggleMarketPicker.bind(this)
                    }, this.props)) : null,
                    this.state.isPersonalizeModalVisible || this.state.isPersonalizeModalLoaded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Personalize__WEBPACK_IMPORTED_MODULE_27__["default"], {
                        visible: this.state.isPersonalizeModalVisible,
                        showModal: this.showPersonalizeModal,
                        hideModal: this.hidePersonalizeModal,
                        viewSettings: this.props.viewSettings,
                        chartType: chartType,
                        chartHeight: chartHeight,
                        onTogglePersonalize: this._togglePersonalize.bind(this),
                        onChangeChartHeight: this.onChangeChartHeight.bind(this),
                        handleGroupOrderLimitChange: this._onGroupOrderLimitChange.bind(this),
                        trackedGroupsConfig: trackedGroupsConfig,
                        currentGroupOrderLimit: currentGroupOrderLimit,
                        verticalOrderBook: verticalOrderBook,
                        hideScrollbars: hideScrollbars,
                        mirrorPanels: mirrorPanels,
                        panelTabs: panelTabs,
                        singleColumnOrderForm: singleColumnOrderForm,
                        buySellTop: buySellTop,
                        flipBuySell: flipBuySell,
                        flipOrderBook: flipOrderBook,
                        tinyScreen: tinyScreen,
                        smallScreen: smallScreen,
                        orderBookReversed: orderBookReversed,
                        chartZoom: chartZoom,
                        chartTools: chartTools,
                        hideFunctionButtons: hideFunctionButtons,
                        onMoveOrderBook: this._moveOrderBook.bind(this),
                        onMirrorPanels: this._mirrorPanels.bind(this),
                        onToggleScrollbars: this._toggleScrollbars.bind(this),
                        onSetAutoscroll: this._setAutoscroll.bind(this),
                        onToggleChart: this._toggleChart.bind(this),
                        onSetPanelTabs: this._setPanelTabs.bind(this),
                        onToggleSingleColumnOrderForm: this._toggleSingleColumnOrderForm.bind(this),
                        onToggleBuySellPosition: this._toggleBuySellPosition.bind(this),
                        onFlipBuySell: this._flipBuySell.bind(this),
                        onFlipOrderBook: this._flipOrderBook.bind(this),
                        onOrderBookReversed: this._orderBookReversed.bind(this),
                        onChartZoom: this._chartZoom.bind(this),
                        onChartTools: this._chartTools.bind(this),
                        onHideFunctionButtons: this._hideFunctionButtons.bind(this)
                    }) : null,
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Notifier_NotifierContainer__WEBPACK_IMPORTED_MODULE_32__["default"], null),
                    leftPanelContainer,
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        "div",
                        {
                            style: { paddingTop: 0 },
                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("grid-block main-content vertical no-overflow")
                        },
                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                            "div",
                            {
                                className: "grid-block vertical no-padding ps-container",
                                id: "CenterContent",
                                ref: "center",
                                "data-intro": tinyScreen ? counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("walkthrough.collapsed_items") : null
                            },
                            !tinyScreen ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                                "div",
                                null,
                                tradingChartHeader,
                                chartType && chartType == "price_chart" ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                                    "div",
                                    {
                                        className: "grid-block shrink no-overflow",
                                        id: "market-charts"
                                    },
                                    tradingViewChart
                                ) : null,
                                chartType && chartType == "market_depth" ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                                    "div",
                                    { className: "grid-block vertical no-padding shrink" },
                                    deptHighChart
                                ) : null
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                                "div",
                                { className: "grid-block no-overflow wrap shrink" },
                                actionCards
                            )
                        )
                    ),
                    rightPanelContainer
                ),
                quoteIsBitAsset && (this.state.isBorrowQuoteModalVisible || this.state.isBorrowQuoteModalLoaded) ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_31__["default"], {
                    visible: this.state.isBorrowQuoteModalVisible,
                    hideModal: this.hideBorrowQuoteModal,
                    quoteAssetObj: quoteAsset.get("id"),
                    backingAssetObj: quoteAsset.getIn(["bitasset", "options", "short_backing_asset"]),
                    accountObj: currentAccount
                }) : null,
                baseIsBitAsset && (this.state.isBorrowBaseModalVisible || this.state.isBorrowBaseModalLoaded) ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Modal_BorrowModal__WEBPACK_IMPORTED_MODULE_31__["default"], {
                    visible: this.state.isBorrowBaseModalVisible,
                    hideModal: this.hideBorrowBaseModal,
                    quoteAssetObj: baseAsset.get("id"),
                    backingAssetObj: baseAsset.getIn(["bitasset", "options", "short_backing_asset"]),
                    accountObj: currentAccount
                }) : null,
                this.state.isDepositModalVisible || this.state.isDepositModalLoaded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Dashboard_SimpleDepositWithdraw__WEBPACK_IMPORTED_MODULE_34__["default"], _extends({
                    visible: this.state.isDepositModalVisible,
                    hideModal: this.hideDepositModal,
                    ref: "deposit_modal",
                    action: "deposit",
                    fiatModal: false,
                    account: currentAccount,
                    sender: currentAccount,
                    asset: depositModalType === "bid" ? base : quote,
                    modalId: "simple_deposit_modal" + (depositModalType === "bid" ? "" : "_ask"),
                    balance: depositModalType === "bid" ? baseBalance : quoteBalance
                }, this.props.backedCoins.find(function (a) {
                    return a.symbol === (depositModalType === "bid" ? base.get("symbol") : quote.get("symbol"));
                }))) : null,
                this.state.isDepositBridgeModalVisible || this.state.isDepositBridgeModalLoaded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Dashboard_SimpleDepositBlocktradesBridge__WEBPACK_IMPORTED_MODULE_35__["default"], {
                    visible: this.state.isDepositBridgeModalVisible,
                    hideModal: this.hideDepositBridgeModal,
                    ref: "bridge_modal",
                    action: "deposit",
                    account: currentAccount.get("name"),
                    sender: currentAccount.get("id"),
                    asset: buyModalType === "bid" ? base.get("id") : quote.get("id"),
                    modalId: "simple_bridge_modal" + (buyModalType === "bid" ? "" : "_ask"),
                    balances: [buyModalType === "bid" ? baseBalance : quoteBalance],
                    bridges: this.props.bridgeCoins.get(buyModalType === "bid" ? base.get("symbol") : quote.get("symbol")) || null
                }) : null,
                this.state.isConfirmBuyOrderModalVisible || this.state.isConfirmBuyOrderModalLoaded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_26__["default"], {
                    visible: this.state.isConfirmBuyOrderModalVisible,
                    hideModal: this.hideConfirmBuyOrderModal,
                    type: "buy",
                    onForce: this._forceBuy.bind(this, "buy", buyFeeAsset, baseBalance, coreBalance),
                    diff: buyDiff,
                    hasOrders: combinedAsks.length > 0
                }) : null,
                this.state.isConfirmSellOrderModalVisible || this.state.isConfirmSellOrderModalLoaded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ConfirmOrderModal__WEBPACK_IMPORTED_MODULE_26__["default"], {
                    visible: this.state.isConfirmSellOrderModalVisible,
                    hideModal: this.hideConfirmSellOrderModal,
                    type: "sell",
                    onForce: this._forceSell.bind(this, "sell", sellFeeAsset, quoteBalance, coreBalance),
                    diff: sellDiff,
                    hasOrders: combinedBids.length > 0
                }) : null,
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_PriceAlert__WEBPACK_IMPORTED_MODULE_36__["default"], {
                    onSave: this.handlePriceAlertSave,
                    rules: this.getPriceAlertRules(),
                    latestPrice: latest && latest.getPrice(),
                    quoteAsset: this.props.quoteAsset.get("id"),
                    baseAsset: this.props.baseAsset.get("id"),
                    visible: this.state.isPriceAlertModalVisible,
                    showModal: this.showPriceAlertModal,
                    hideModal: this.hidePriceAlertModal
                })
            );
        }
    }]);

    return Exchange;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

Exchange.propTypes = {
    marketCallOrders: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
    activeMarketHistory: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
    viewSettings: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired
};
Exchange.defaultProps = {
    marketCallOrders: [],
    activeMarketHistory: {},
    viewSettings: {}
};


/* harmony default export */ __webpack_exports__["default"] = (Exchange);

/***/ }),

/***/ 2792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(749);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2479);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2012);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2013);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2793);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2139);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(607);
/* harmony import */ var _ExchangeInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2399);
/* harmony import */ var common_asset_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(591);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(746);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(805);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1903);
/* harmony import */ var _Modal_SettleModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2794);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2380);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(562);
/* harmony import */ var _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2140);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

























var BuySell = function (_React$Component) {
    _inherits(BuySell, _React$Component);

    function BuySell() {
        _classCallCheck(this, BuySell);

        var _this = _possibleConstructorReturn(this, (BuySell.__proto__ || Object.getPrototypeOf(BuySell)).call(this));

        _this.getDatePickerRef = function (node) {
            _this.datePricker = node;
        };

        _this.handleQuickDepositVisibleChange = function (visible) {
            _this.setState({ isQuickDepositVisible: visible });
            if (visible) {
                setTimeout(function () {
                    react_tooltip__WEBPACK_IMPORTED_MODULE_19___default.a.rebuild();
                }, 20);
            }
        };

        _this.onExpirationSelectChange = function (e) {
            if (e.target.value === "SPECIFIC") {
                _this.datePricker.picker.handleOpenChange(true);
            } else {
                _this.datePricker.picker.handleOpenChange(false);
            }

            _this.props.onExpirationTypeChange(e);
        };

        _this.onExpirationSelectClick = function (e) {
            if (e.target.value === "SPECIFIC") {
                if (_this.firstClick) {
                    _this.secondClick = true;
                }
                _this.firstClick = true;
                if (_this.secondClick) {
                    _this.datePricker.picker.handleOpenChange(true);
                    _this.firstClick = false;
                    _this.secondClick = false;
                }
            }
        };

        _this.onExpirationSelectBlur = function () {
            _this.firstClick = false;
            _this.secondClick = false;
        };

        _this.state = {
            forceReRender: false,
            isSettleModalVisible: false
        };

        _this.showSettleModal = _this.showSettleModal.bind(_this);
        _this.hideSettleModal = _this.hideSettleModal.bind(_this);
        return _this;
    }

    /*
     * Force re-rendering component when state changes.
     * This is required for an updated value of component width
     *
     * It will trigger a re-render twice
     * - Once when state is changed
     * - Once when forceReRender is set to false
     */


    _createClass(BuySell, [{
        key: "_forceRender",
        value: function _forceRender(np) {
            if (this.state.forceReRender) {
                this.setState({
                    forceReRender: false
                });
            }

            if (this.props.parentWidth !== np.parentWidth) {
                this.setState({
                    forceReRender: true
                });
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            this._forceRender(nextProps, nextState);

            return nextState.isSettleModalVisible !== this.state.isSettleModalVisible || nextProps.amount !== this.props.amount || nextProps.onBorrow !== this.props.onBorrow || nextProps.total !== this.props.total || nextProps.currentPrice !== this.props.currentPrice || nextProps.price !== this.props.price || nextProps.balance !== this.props.balance || nextProps.account !== this.props.account || nextProps.className !== this.props.className || (nextProps.fee && this.props.fee ? nextProps.fee.ne(this.props.fee) : false) || nextProps.isPredictionMarket !== this.props.isPredictionMarket || nextProps.feeAsset !== this.props.feeAsset || nextProps.isOpen !== this.props.isOpen || nextProps.hasFeeBalance !== this.props.hasFeeBalance || nextProps.expirationType !== this.props.expirationType || nextProps.expirationCustomTime !== this.props.expirationCustomTime || nextProps.parentWidth !== this.props.parentWidth || nextState.forceReRender !== this.state.forceReRender || nextProps.singleColumnOrderForm !== this.props.singleColumnOrderForm || nextProps.hideFunctionButtons !== this.props.hideFunctionButtons || nextState.isQuickDepositVisible !== this.state.isQuickDepositVisible;
        }
    }, {
        key: "showSettleModal",
        value: function showSettleModal() {
            this.setState({
                isSettleModalVisible: true
            });
        }
    }, {
        key: "hideSettleModal",
        value: function hideSettleModal() {
            this.setState({
                isSettleModalVisible: false
            });
        }
    }, {
        key: "_addBalance",
        value: function _addBalance(balance) {
            if (this.props.type === "bid") {
                this.props.totalChange({
                    target: { value: balance.getAmount({ real: true }).toString() }
                });
            } else {
                this.props.amountChange({
                    target: { value: balance.getAmount({ real: true }).toString() }
                });
            }
        }
    }, {
        key: "_setPrice",
        value: function _setPrice(price) {
            this.props.priceChange({ target: { value: price.toString() } });
        }
    }, {
        key: "onDeposit",
        value: function onDeposit() {
            this.setState({
                isQuickDepositVisible: false
            });
            this.props.onDeposit();
        }
    }, {
        key: "onBuy",
        value: function onBuy() {
            this.setState({
                isQuickDepositVisible: false
            });
            this.props.onBuy();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                type = _props.type,
                quote = _props.quote,
                base = _props.base,
                amountChange = _props.amountChange,
                fee = _props.fee,
                isPredictionMarket = _props.isPredictionMarket,
                priceChange = _props.priceChange,
                onSubmit = _props.onSubmit,
                balance = _props.balance,
                totalChange = _props.totalChange,
                balancePrecision = _props.balancePrecision,
                currentPrice = _props.currentPrice,
                currentPriceObject = _props.currentPriceObject,
                feeAsset = _props.feeAsset,
                feeAssets = _props.feeAssets,
                hasFeeBalance = _props.hasFeeBalance,
                hideHeader = _props.hideHeader,
                verticalOrderForm = _props.verticalOrderForm;
            var expirationCustomTime = this.props.expirationCustomTime;


            var clientWidth = this.refs.order_form ? this.refs.order_form.clientWidth : 0;
            var singleColumnForm = clientWidth < 450 || this.props.singleColumnOrderForm ? true : false;

            var amount = void 0,
                price = void 0,
                total = void 0;

            if (this.props.amount) amount = this.props.amount;
            if (this.props.price) price = this.props.price;
            if (this.props.total) total = this.props.total;

            var balanceAmount = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_11__["Asset"]({
                amount: balance ? balance.get("balance") : 0,
                precision: balancePrecision,
                asset_id: this.props.balanceId
            });

            var maxBaseMarketFee = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_11__["Asset"]({
                amount: base.getIn(["options", "max_market_fee"]),
                asset_id: base.get("asset_id"),
                precision: base.get("precision")
            });
            var maxQuoteMarketFee = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_11__["Asset"]({
                amount: quote.getIn(["options", "max_market_fee"]),
                asset_id: quote.get("asset_id"),
                precision: quote.get("precision")
            });
            var baseMarketFeePercent = base.getIn(["options", "market_fee_percent"]) / 100 + "%";
            var quoteMarketFeePercent = quote.getIn(["options", "market_fee_percent"]) / 100 + "%";
            var quoteFee = !amount ? 0 : Math.min(maxQuoteMarketFee.getAmount({ real: true }), amount * quote.getIn(["options", "market_fee_percent"]) / 10000).toFixed(maxQuoteMarketFee.precision);
            var baseFee = !amount ? 0 : Math.min(maxBaseMarketFee.getAmount({ real: true }), total * base.getIn(["options", "market_fee_percent"]) / 10000).toFixed(maxBaseMarketFee.precision);
            var baseFlagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_13__["default"].getFlagBooleans(base.getIn(["options", "flags"]), base.has("bitasset_data_id"));
            var quoteFlagBooleans = common_asset_utils__WEBPACK_IMPORTED_MODULE_13__["default"].getFlagBooleans(quote.getIn(["options", "flags"]), quote.has("bitasset_data_id"));

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(this.props.base),
                baseName = _utils$replaceName.name,
                basePrefix = _utils$replaceName.prefix;

            var baseMarketFee = baseFlagBooleans["charge_market_fee"] ? verticalOrderForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.market_fee", {
                        percent: baseMarketFeePercent,
                        asset: (basePrefix || "") + baseName
                    })
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block no-overflow wrap shrink" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "small-12 buy-sell-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                        ", ",
                        baseMarketFeePercent
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inputAddon small-12" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            placeholder: "0.0",
                            id: "baseMarketFee",
                            defaultValue: baseFee,
                            value: baseFee,
                            addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    noTip: true,
                                    name: base.get("symbol")
                                })
                            )
                        })
                    )
                )
            ) : singleColumnForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.market_fee", {
                        percent: baseMarketFeePercent,
                        asset: (basePrefix || "") + baseName
                    })
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block no-overflow wrap shrink" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "small-3 buy-sell-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                        ", ",
                        baseMarketFeePercent
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inputAddon small-9" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            placeholder: "0.0",
                            id: "baseMarketFee",
                            defaultValue: baseFee,
                            value: baseFee,
                            addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    noTip: true,
                                    name: base.get("symbol")
                                })
                            )
                        })
                    )
                )
            ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.market_fee", {
                        percent: baseMarketFeePercent,
                        asset: (basePrefix || "") + baseName
                    })
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block no-overflow wrap shrink" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "small-12 buy-sell-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                        ", ",
                        baseMarketFeePercent
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inputAddon small-12" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            placeholder: "0.0",
                            id: "baseMarketFee",
                            defaultValue: baseFee,
                            value: baseFee,
                            addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    noTip: true,
                                    name: base.get("symbol")
                                })
                            )
                        })
                    )
                )
            ) : null;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(this.props.quote),
                quoteName = _utils$replaceName2.name,
                quotePrefix = _utils$replaceName2.prefix;

            var quoteMarketFee = quoteFlagBooleans["charge_market_fee"] ? verticalOrderForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.market_fee", {
                        percent: quoteMarketFeePercent,
                        asset: (quotePrefix || "") + quoteName
                    })
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block no-overflow wrap shrink" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "small-12 buy-sell-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                        ", ",
                        quoteMarketFeePercent
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inputAddon small-12" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            placeholder: "0.0",
                            id: "quoteMarketFee",
                            defaultValue: quoteFee,
                            value: quoteFee,
                            addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    style: { width: 100 },
                                    noTip: true,
                                    name: quote.get("symbol")
                                })
                            )
                        })
                    )
                )
            ) : singleColumnForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.market_fee", {
                        percent: quoteMarketFeePercent,
                        asset: (quotePrefix || "") + quoteName
                    })
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block no-overflow wrap shrink" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "small-3 buy-sell-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                        ", ",
                        quoteMarketFeePercent
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inputAddon small-9" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            placeholder: "0.0",
                            id: "quoteMarketFee",
                            defaultValue: quoteFee,
                            value: quoteFee,
                            addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    style: { width: 100 },
                                    noTip: true,
                                    name: quote.get("symbol")
                                })
                            )
                        })
                    )
                )
            ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.market_fee", {
                        percent: quoteMarketFeePercent,
                        asset: (quotePrefix || "") + quoteName
                    })
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block no-overflow wrap shrink" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "small-12 buy-sell-label" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" }),
                        ", ",
                        quoteMarketFeePercent
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "inputAddon small-12" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                            placeholder: "0.0",
                            id: "quoteMarketFee",
                            defaultValue: quoteFee,
                            value: quoteFee,
                            addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    style: { width: 100 },
                                    noTip: true,
                                    name: quote.get("symbol")
                                })
                            )
                        })
                    )
                )
            ) : null;

            var emptyCell = !verticalOrderForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                {
                    style: { visibility: "hidden" },
                    className: "grid-block no-overflow wrap shrink"
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "small-3 buy-sell-label" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "explorer.asset.summary.market_fee" })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "inputAddon small-9" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                        placeholder: "0.0",
                        id: "emptyPlaceholder",
                        defaultValue: "0",
                        addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                style: { width: 100 },
                                noTip: true,
                                name: quote.get("symbol")
                            })
                        )
                    })
                )
            ) : null;

            var isBid = type === "bid";
            var marketFee = isBid && quoteMarketFee ? quoteMarketFee : !isBid && baseMarketFee ? baseMarketFee : quoteMarketFee || baseMarketFee ? emptyCell : null;

            var hasBalance = isBid ? balanceAmount.getAmount({ real: true }) >= parseFloat(total) : balanceAmount.getAmount({ real: true }) >= parseFloat(amount);

            var forceSellText = isBid ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.buy") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.sell");

            var noBalance = isPredictionMarket ? false : !(balanceAmount.getAmount() > 0 && hasBalance);
            var invalidPrice = !(price > 0);
            var invalidAmount = !(amount > 0);

            var disabled = noBalance || invalidPrice || invalidAmount;

            var buttonClass = classnames__WEBPACK_IMPORTED_MODULE_0___default()("button buySellButton", type, {
                disabled: disabled
            });
            var balanceSymbol = isBid ? base.get("symbol") : quote.get("symbol");

            var disabledText = invalidPrice ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.invalid_price") : invalidAmount ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.invalid_amount") : noBalance ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.no_balance") : null;

            // Fee asset selection
            if (feeAssets[1] && feeAssets[1].getIn(["options", "core_exchange_rate", "quote", "asset_id"]) === "1.3.0" && feeAssets[1].getIn(["options", "core_exchange_rate", "base", "asset_id"]) === "1.3.0") {
                feeAsset = feeAssets[0];
                feeAssets.splice(1, 1);
            }
            var index = 0;
            var options = feeAssets.map(function (asset) {
                var _utils$replaceName3 = common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceName(asset),
                    name = _utils$replaceName3.name,
                    prefix = _utils$replaceName3.prefix;

                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Select"].Option,
                    { key: asset.get("id"), value: index++ },
                    prefix,
                    name
                );
            });

            // Subtract fee from amount to sell
            var balanceToAdd = void 0;

            if (feeAsset.get("symbol") === balanceSymbol) {
                balanceToAdd = balanceAmount.clone(balanceAmount.getAmount() - fee.getAmount());
            } else {
                balanceToAdd = balanceAmount;
            }

            var dataIntro = isBid ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("walkthrough.buy_form") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("walkthrough.sell_form");

            var expirationTip = void 0;

            if (this.props.expirationType !== "SPECIFIC") {
                expirationTip = this.props.expirations[this.props.expirationType].get();
            }

            var expirationsOptionsList = Object.keys(this.props.expirations).map(function (key) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "option",
                    { value: key, key: key },
                    key === "SPECIFIC" && expirationCustomTime !== "Specific" ? moment__WEBPACK_IMPORTED_MODULE_15___default()(expirationCustomTime).format("Do MMM YYYY hh:mm A") : _this2.props.expirations[key].title
                );
            });

            var containerClass = "small-12";
            var formContent = void 0;

            // OrderForm is in panel
            if (verticalOrderForm) {
                formContent = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: containerClass },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            className: "small-12 buy-sell-label",
                            content: "exchange.price"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inputAddon small-12" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                id: type + "Price",
                                value: price,
                                onChange: priceChange,
                                autoComplete: "off",
                                placeholder: "0.0",
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        dataPlace: "right",
                                        name: base.get("symbol")
                                    }),
                                    "\xA0/\xA0",
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        dataPlace: "right",
                                        name: quote.get("symbol")
                                    })
                                )
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            className: "small-12 buy-sell-label",
                            content: "transfer.amount"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inputAddon small-12" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                id: type + "Amount",
                                value: amount,
                                onChange: amountChange,
                                autoComplete: "off",
                                placeholder: "0.0",
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        dataPlace: "right",
                                        name: quote.get("symbol")
                                    })
                                )
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            className: "small-12 buy-sell-label",
                            content: "exchange.total"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inputAddon small-12" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                id: type + "Total",
                                value: total,
                                onChange: totalChange,
                                autoComplete: "off",
                                placeholder: "0.0",
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        dataPlace: "right",
                                        name: base.get("symbol")
                                    })
                                )
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            className: "small-12 buy-sell-label",
                            content: "transfer.fee"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inputAddon small-12" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                id: type + "Fee",
                                placeholder: "0.0",
                                defaultValue: !hasFeeBalance ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("transfer.errors.insufficient") : fee.getAmount({ real: true }),
                                disabled: true,
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Select"],
                                    {
                                        style: { width: 100 },
                                        disabled: feeAssets.length === 1,
                                        defaultValue: feeAssets.indexOf(this.props.feeAsset),
                                        onChange: this.props.onChangeFeeAsset
                                    },
                                    options
                                )
                            })
                        )
                    ),
                    marketFee
                );
            } else {
                formContent = singleColumnForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: containerClass },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            className: "small-3 buy-sell-label",
                            content: "exchange.price"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inputAddon small-9" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                id: type + "Price",
                                value: price,
                                onChange: priceChange,
                                autoComplete: "off",
                                placeholder: "0.0",
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        dataPlace: "right",
                                        name: base.get("symbol")
                                    }),
                                    "\xA0/\xA0",
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        dataPlace: "right",
                                        name: quote.get("symbol")
                                    })
                                )
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            className: "small-3 buy-sell-label",
                            content: "transfer.amount"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inputAddon small-9" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                id: type + "Amount",
                                value: amount,
                                onChange: amountChange,
                                autoComplete: "off",
                                placeholder: "0.0",
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        dataPlace: "right",
                                        name: quote.get("symbol")
                                    })
                                )
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            className: "small-3 buy-sell-label",
                            content: "exchange.total"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inputAddon small-9" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                id: type + "Total",
                                value: total,
                                onChange: totalChange,
                                autoComplete: "off",
                                placeholder: "0.0",
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "span",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                        dataPlace: "right",
                                        name: base.get("symbol")
                                    })
                                )
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            className: "small-3 buy-sell-label",
                            content: "transfer.fee"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "inputAddon small-9" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                id: type + "Fee",
                                placeholder: "0.0",
                                value: !hasFeeBalance ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("transfer.errors.insufficient") : fee.getAmount({ real: true }),
                                disabled: true,
                                addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Select"],
                                    {
                                        style: { width: 100 },
                                        disabled: feeAssets.length === 1,
                                        defaultValue: feeAssets.indexOf(this.props.feeAsset),
                                        onChange: this.props.onChangeFeeAsset
                                    },
                                    options
                                )
                            })
                        )
                    ),
                    marketFee
                ) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: containerClass },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "small-11 grid-block no-overflow wrap shrink" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                    className: "small-3 buy-sell-label",
                                    content: "exchange.price"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        className: "small-9 buy-sell-label",
                                        style: { textAlign: "right" }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        {
                                            style: {
                                                borderBottom: "#A09F9F 1px dotted",
                                                cursor: "pointer"
                                            },
                                            onClick: this.props.setPrice.bind(this, type, currentPriceObject.sellPrice())
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                            price: currentPrice,
                                            quote: quote,
                                            base: base
                                        }),
                                        " "
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "inputAddon small-11" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    id: type + "Price",
                                    value: price,
                                    onChange: priceChange,
                                    autoComplete: "off",
                                    placeholder: "0.0",
                                    addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                            dataPlace: "right",
                                            name: base.get("symbol")
                                        }),
                                        "\xA0/\xA0",
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                            dataPlace: "right",
                                            name: quote.get("symbol")
                                        })
                                    )
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "small-12 grid-block no-overflow wrap shrink" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                    className: "small-3 buy-sell-label",
                                    content: "exchange.total"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    {
                                        className: "small-9 buy-sell-label",
                                        style: { textAlign: "right" }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        className: "small-3 buy-sell-label",
                                        content: "exchange.balance"
                                    }),
                                    "\xA0",
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        {
                                            style: {
                                                borderBottom: "#A09F9F 1px dotted",
                                                cursor: "pointer"
                                            },
                                            onClick: this._addBalance.bind(this, balanceToAdd)
                                        },
                                        common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(balanceAmount.getAmount({
                                            real: true
                                        }), balancePrecision),
                                        " "
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "inputAddon small-12" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    id: type + "Total",
                                    value: total,
                                    onChange: totalChange,
                                    autoComplete: "off",
                                    placeholder: "0.0",
                                    addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                            dataPlace: "right",
                                            name: base.get("symbol")
                                        })
                                    )
                                })
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: "small-3 buy-sell-label",
                                content: "transfer.amount"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "inputAddon small-11" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    id: type + "Amount",
                                    value: amount,
                                    onChange: amountChange,
                                    autoComplete: "off",
                                    placeholder: "0.0",
                                    addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                            dataPlace: "right",
                                            name: quote.get("symbol")
                                        })
                                    )
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: "small-3 buy-sell-label",
                                content: "transfer.fee"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "inputAddon small-12" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ExchangeInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    id: type + "Fee",
                                    placeholder: "0.0",
                                    defaultValue: !hasFeeBalance ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("transfer.errors.insufficient") : fee.getAmount({ real: true }),
                                    disabled: true,
                                    addonAfter: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Select"],
                                        {
                                            style: { width: 100 },
                                            disabled: feeAssets.length === 1,
                                            defaultValue: feeAssets.indexOf(this.props.feeAsset),
                                            onChange: this.props.onChangeFeeAsset
                                        },
                                        options
                                    )
                                })
                            )
                        )
                    )
                );
            }

            var otherAsset = isBid ? base : quote;
            var isBitAsset = !!otherAsset.get("bitasset");
            // check if globally settled
            var isGloballySettled = isBitAsset && otherAsset.get("bitasset").get("settlement_fund") > 0;

            var currentAccount = _stores_AccountStore__WEBPACK_IMPORTED_MODULE_20__["default"].getState().currentAccount;

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(this.props.className),
                    style: this.props.styles
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    {
                        className: "buy-sell-container",
                        style: { paddingRight: 5 }
                        //data-intro={dataIntro}
                    },
                    !hideHeader ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        {
                            className: "exchange-content-header exchange-content-header--buy-sell-form " + type
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                string: "exchange.buysell_formatter",
                                noLink: true,
                                noTip: true,
                                keys: [{
                                    type: "asset",
                                    value: quote.get("symbol"),
                                    arg: "asset"
                                }, {
                                    type: "translate",
                                    value: isPredictionMarket ? "exchange.short" : isBid ? "exchange.buy" : "exchange.sell",
                                    arg: "direction"
                                }]
                            })
                        ),
                        this.props.onFlip && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                onClick: this.props.onFlip,
                                style: {
                                    cursor: "pointer",
                                    fontSize: "1rem"
                                },
                                className: "flip-arrow"
                            },
                            " ",
                            "\u21C6"
                        ) : null,
                        this.props.onTogglePosition && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            {
                                onClick: this.props.onTogglePosition,
                                style: {
                                    cursor: "pointer",
                                    fontSize: "1rem"
                                },
                                className: "flip-arrow"
                            },
                            " ",
                            "\u21C5"
                        ) : null,
                        this.props.moveOrderForm && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
                            onClick: this.props.moveOrderForm,
                            name: "thumb-tack",
                            className: "icon-14px icon-fill order-book-button-v",
                            style: { marginLeft: 5 }
                        }) : null
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "form",
                        {
                            ref: "order_form",
                            className: (!this.props.isOpen ? "hide-container " : "") + "order-form",
                            style: { fontSize: "14px" },
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-block no-overflow wrap shrink" },
                            this.props.moveOrderForm && verticalOrderForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    style: { width: "100%", textAlign: "right" },
                                    onClick: this.props.moveOrderForm
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                    name: "thumb-tack",
                                    className: "icon-18px icon-fill order-book-button-v"
                                })
                            ) : null,
                            formContent
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "grid-block no-overflow wrap shrink" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                {
                                    className: singleColumnForm ? "small-12 grid-block" : "small-6"
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                    className: "small-4 buy-sell-label",
                                    content: "transaction.expiration"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "small-8 expiration-datetime-picker" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__["DatePicker"], {
                                        ref: this.getDatePickerRef,
                                        className: "expiration-datetime-picker--hidden",
                                        showTime: true,
                                        showToday: false,
                                        disabledDate: function disabledDate(current) {
                                            return current < moment__WEBPACK_IMPORTED_MODULE_15___default()().add(59, "minutes");
                                        },
                                        value: expirationCustomTime !== "Specific" ? expirationCustomTime : moment__WEBPACK_IMPORTED_MODULE_15___default()().add(1, "hour"),
                                        onChange: this.props.onExpirationCustomChange
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "select",
                                        {
                                            className: "cursor-pointer",
                                            onChange: this.onExpirationSelectChange,
                                            onClick: this.onExpirationSelectClick,
                                            onBlur: this.onExpirationSelectBlur,
                                            "data-tip": expirationTip && moment__WEBPACK_IMPORTED_MODULE_15___default()(expirationTip).format("Do MMM YYYY hh:mm A"),
                                            value: this.props.expirationType
                                        },
                                        expirationsOptionsList
                                    )
                                )
                            ),
                            !singleColumnForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "small-6" },
                                marketFee
                            ) : null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "small-12 medium-12 xlarge-12" },
                                singleColumnForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "grid-block no-overflow wrap shrink" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        className: "small-4 buy-sell-label",
                                        content: isBid ? "exchange.lowest_ask" : "exchange.highest_bid"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        { className: "small-8 buy-sell-label" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "span",
                                            {
                                                style: {
                                                    borderBottom: "#A09F9F 1px dotted",
                                                    cursor: "pointer"
                                                },
                                                onClick: this.props.setPrice.bind(this, type, currentPriceObject.sellPrice())
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                price: currentPrice,
                                                quote: quote,
                                                base: base
                                            }),
                                            " ",
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                name: base.get("symbol"),
                                                noTip: true
                                            }),
                                            "/",
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                name: quote.get("symbol"),
                                                noTip: true
                                            })
                                        )
                                    )
                                ) : null,
                                singleColumnForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { className: "grid-block no-overflow wrap shrink" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        className: "small-4 buy-sell-label",
                                        content: "exchange.balance"
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        { className: "small-8 buy-sell-label" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            "span",
                                            {
                                                style: {
                                                    borderBottom: "#A09F9F 1px dotted",
                                                    cursor: "pointer"
                                                },
                                                onClick: this._addBalance.bind(this, balanceToAdd)
                                            },
                                            common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_number(balanceAmount.getAmount({
                                                real: true
                                            }), balancePrecision),
                                            " ",
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                name: balanceSymbol,
                                                noTip: true
                                            })
                                        )
                                    )
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    "div",
                                    { style: { marginTop: 10 } },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                                            {
                                                placement: "top",
                                                title: disabledText ? disabledText : ""
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                "div",
                                                {
                                                    className: "float-right",
                                                    "data-tip": disabledText,
                                                    "data-place": "right"
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Button"],
                                                    {
                                                        className: disabled ? null : buttonClass,
                                                        disabled: disabled,
                                                        onClick: onSubmit.bind(this, true),
                                                        type: "primary",
                                                        style: {
                                                            margin: "5px",
                                                            padding: "10px",
                                                            borderRadius: "5px",
                                                            opacity: 0.5
                                                        }
                                                    },
                                                    isBid ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.buy") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.sell")
                                                )
                                            )
                                        ),
                                        this.props.currentBridges && !this.props.backedCoin ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                                            {
                                                title: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_21__["default"].isDown("TRADE") ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("external_service_provider.is_down") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.quick_deposit_bridge", {
                                                    target: isBid ? baseName : quoteName
                                                })
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Button"],
                                                {
                                                    style: { margin: 5 },
                                                    onClick: this.props.onBuy.bind(this),
                                                    disabled: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_21__["default"].isDown("TRADE") || !this.props.currentAccount || this.props.currentAccount.get("id") === "1.2.3"
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                                    content: "exchange.quick_deposit",
                                                    asset: isBid ? baseName : quoteName
                                                })
                                            )
                                        ) : null,
                                        this.props.backedCoin && !this.props.currentBridges ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                                            {
                                                title: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_21__["default"].isDown("OPEN") ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("external_service_provider.is_down") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("tooltip.gateway")
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Button"],
                                                {
                                                    style: { margin: 5 },
                                                    onClick: this.props.onDeposit.bind(this),
                                                    disabled: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_21__["default"].isDown("OPEN") || !this.props.currentAccount || this.props.currentAccount.get("id") === "1.2.3"
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                                    content: "exchange.quick_deposit",
                                                    asset: isBid ? baseName : quoteName
                                                })
                                            )
                                        ) : null,
                                        this.props.currentBridges && this.props.backedCoin ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Popover"],
                                            {
                                                title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                                    content: "exchange.quick_deposit",
                                                    asset: isBid ? baseName : quoteName
                                                }),
                                                trigger: "click",
                                                visible: this.state.isQuickDepositVisible,
                                                onVisibleChange: this.handleQuickDepositVisibleChange,
                                                content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                    "div",
                                                    null,
                                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                                                        {
                                                            title: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_21__["default"].isDown("OPEN") ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("external_service_provider.is_down") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.quick_deposit_gateway", {
                                                                asset: isBid ? baseName : quoteName
                                                            })
                                                        },
                                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Button"],
                                                            {
                                                                style: {
                                                                    marginRight: 5
                                                                },
                                                                onClick: this.onDeposit.bind(this),
                                                                disabled: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_21__["default"].isDown("OPEN")
                                                            },
                                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                                                content: "exchange.quick_deposit_gateway_button" })
                                                        )
                                                    ),
                                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                                                        {
                                                            title: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_21__["default"].isDown("TRADE") ? counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("external_service_provider.is_down") : counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.quick_deposit_bridge", {
                                                                target: isBid ? baseName : quoteName
                                                            })
                                                        },
                                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Button"],
                                                            {
                                                                onClick: this.onBuy.bind(this),
                                                                disabled: _stores_GatewayStore__WEBPACK_IMPORTED_MODULE_21__["default"].isDown("TRADE")
                                                            },
                                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                                                content: "exchange.quick_deposit_bridge_button" })
                                                        )
                                                    )
                                                )
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                                                {
                                                    title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.quick_deposit_tooltip", {
                                                        asset: isBid ? baseName : quoteName
                                                    })
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Button"],
                                                    {
                                                        style: { margin: 5 },
                                                        disabled: !this.props.currentAccount || this.props.currentAccount.get("id") === "1.2.3"
                                                    },
                                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                                        content: "exchange.quick_deposit",
                                                        asset: isBid ? baseName : quoteName
                                                    })
                                                )
                                            )
                                        ) : null,
                                        this.props.onBorrow && !isGloballySettled ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Button"],
                                            {
                                                style: { margin: 5 },
                                                disabled: !this.props.currentAccount || this.props.currentAccount.get("id") === "1.2.3",
                                                onClick: this.props.onBorrow
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.borrow" })
                                        ) : null,
                                        isGloballySettled ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Button"],
                                            {
                                                style: { margin: 5 },
                                                disabled: !this.props.currentAccount || this.props.currentAccount.get("id") === "1.2.3",
                                                onClick: this.showSettleModal,
                                                "data-tip": counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.settle_globally_settled_tooltip")
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.settle_globally_settled" })
                                        ) : null
                                    )
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "div",
                                { className: "grid-content clear-fix no-padding" },
                                disabledText && isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                                    {
                                        title: disabledText,
                                        placement: "right"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        {
                                            style: { paddingRight: 10 },
                                            className: "float-right",
                                            "data-place": "right"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                            style: { margin: 0 },
                                            className: buttonClass,
                                            type: "submit",
                                            onClick: onSubmit.bind(this, false),
                                            value: forceSellText
                                        })
                                    )
                                ) : isPredictionMarket ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_18__["Tooltip"],
                                    { title: "", placement: "right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                        "div",
                                        {
                                            style: { paddingRight: 10 },
                                            className: "float-right",
                                            "data-place": "right"
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                                            style: { margin: 0 },
                                            className: buttonClass,
                                            type: "submit",
                                            onClick: onSubmit.bind(this, false),
                                            value: forceSellText
                                        })
                                    )
                                ) : null
                            )
                        )
                    )
                ),
                isGloballySettled && !!this.props.currentAccount && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal_SettleModal__WEBPACK_IMPORTED_MODULE_17__["default"], {
                    visible: this.state.isSettleModalVisible,
                    hideModal: this.hideSettleModal,
                    showModal: this.showSettleModal,
                    asset: otherAsset.get("id"),
                    account: this.props.currentAccount
                })
            );
        }
    }]);

    return BuySell;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

BuySell.propTypes = {
    balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_7__["default"].ChainObject,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    amountChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    priceChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    onExpirationTypeChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    onExpirationCustomChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
BuySell.defaultProps = {
    type: "bid"
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_8__["default"])(BuySell));

/***/ }),

/***/ 2793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PriceText = function (_React$Component) {
    _inherits(PriceText, _React$Component);

    function PriceText() {
        _classCallCheck(this, PriceText);

        return _possibleConstructorReturn(this, (PriceText.__proto__ || Object.getPrototypeOf(PriceText)).apply(this, arguments));
    }

    _createClass(PriceText, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                price = _props.price,
                preFormattedPrice = _props.preFormattedPrice,
                quote = _props.quote,
                base = _props.base;

            if (!price && !preFormattedPrice) return null;
            var formattedPrice = !!preFormattedPrice ? preFormattedPrice : common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].price_to_text(price, quote, base);

            if (formattedPrice.full >= 1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.int,
                        "."
                    ),
                    formattedPrice.dec ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.dec
                    ) : null,
                    formattedPrice.trailing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.trailing
                    ) : null
                );
            } else if (formattedPrice.full >= 0.1) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.int,
                        "."
                    ),
                    formattedPrice.dec ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.dec
                    ) : null,
                    formattedPrice.trailing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.trailing
                    ) : null
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.int,
                        "."
                    ),
                    formattedPrice.dec ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-decimal" },
                        formattedPrice.dec
                    ) : null,
                    formattedPrice.trailing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "price-integer" },
                        formattedPrice.trailing
                    ) : null
                );
            }
        }
    }]);

    return PriceText;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PriceText);

/***/ }),

/***/ 2797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(805);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_TranslateWithLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2479);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2139);
/* harmony import */ var _services_Exchange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2720);
/* harmony import */ var _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(607);
/* harmony import */ var bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(535);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2798);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(591);
/* harmony import */ var _lib_common_trxHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(606);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2793);
/* harmony import */ var _services_Math__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2800);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(746);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var ScaledOrderForm = function (_Component) {
    _inherits(ScaledOrderForm, _Component);

    function ScaledOrderForm(props) {
        _classCallCheck(this, ScaledOrderForm);

        var _this = _possibleConstructorReturn(this, (ScaledOrderForm.__proto__ || Object.getPrototypeOf(ScaledOrderForm)).call(this, props));

        _this.getDatePickerRef = function (node) {
            _this.datePricker = node;
        };

        _this.onExpirationSelectChange = function (e) {
            if (e.target.value === "SPECIFIC") {
                _this.datePricker.picker.handleOpenChange(true);
            } else {
                _this.datePricker.picker.handleOpenChange(false);
            }

            _this.props.onExpirationTypeChange(e);
        };

        _this.onExpirationSelectClick = function (e) {
            if (e.target.value === "SPECIFIC") {
                if (_this.firstClick) {
                    _this.secondClick = true;
                }
                _this.firstClick = true;
                if (_this.secondClick) {
                    _this.datePricker.picker.handleOpenChange(true);
                    _this.firstClick = false;
                    _this.secondClick = false;
                }
            }
        };

        _this.onExpirationSelectBlur = function () {
            _this.firstClick = false;
            _this.secondClick = false;
        };

        _this.state = {
            orderCount: 1,
            feeAssets: []
        };

        _this.handleClickBalance = _this.handleClickBalance.bind(_this);
        _this.handleCurrentPriceClick = _this.handleCurrentPriceClick.bind(_this);
        return _this;
    }

    _createClass(ScaledOrderForm, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this._checkFeeAssets();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var _this2 = this;

            var orderCount = Number(this._getFormValues().orderCount || 1);
            var stateOrderCount = Number(this.state.orderCount);

            if (!isNaN(stateOrderCount) && !isNaN(orderCount) && Number(this.state.orderCount) !== orderCount) {
                this.setState({
                    orderCount: orderCount
                }, function () {
                    _this2._checkFeeAssets();
                });
            }
        }
    }, {
        key: "isFormValid",
        value: function isFormValid() {
            var formValues = this._getFormValues();

            if (!formValues) return false;

            if (!formValues.priceLower || isNaN(Number(formValues.priceLower)) || Number(formValues.priceLower) <= 0) return false;

            if (!formValues.amount || isNaN(Number(formValues.amount)) || Number(formValues.amount) <= 0) return false;

            if (!formValues.priceUpper || isNaN(Number(formValues.priceUpper)) || Number(formValues.priceUpper) <= 0 || Number(formValues.priceUpper) <= Number(formValues.priceLower)) return false;

            if (!formValues.orderCount || isNaN(Number(formValues.orderCount)) || Number(formValues.orderCount) <= 1) return false;

            return true;
        }
    }, {
        key: "_getBaseAssetFlags",
        value: function _getBaseAssetFlags() {
            return _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__["default"].getFlagBooleans(this.props.baseAsset.getIn(["options", "flags"]), this.props.baseAsset.has("bitasset_data_id"));
        }
    }, {
        key: "_getQuoteAssetFlags",
        value: function _getQuoteAssetFlags() {
            return _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_10__["default"].getFlagBooleans(this.props.quoteAsset.getIn(["options", "flags"]), this.props.quoteAsset.has("bitasset_data_id"));
        }
    }, {
        key: "_isMarketFeeVisible",
        value: function _isMarketFeeVisible() {
            var baseAssetFlagBooleans = this._getBaseAssetFlags();

            var quoteAssetFlagBooleans = this._getQuoteAssetFlags();

            if (this._getFormValues().action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].SELL && baseAssetFlagBooleans.charge_market_fee) {
                return true;
            }

            if (this._getFormValues().action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].BUY && quoteAssetFlagBooleans.charge_market_fee) {
                return true;
            }

            return false;
        }
    }, {
        key: "_getFormValues",
        value: function _getFormValues() {
            return this.props.form.getFieldsValue();
        }
    }, {
        key: "_filterFeeStatuses",
        value: function _filterFeeStatuses(feeStatuses) {
            return feeStatuses.filter(function (feeStatus) {
                return feeStatus && feeStatus.hasPoolBalance && feeStatus.hasBalance;
            }).map(function (feeStatus) {
                return {
                    fee: feeStatus,
                    amount: feeStatus.fee.getAmount() / Math.pow(10, feeStatus.fee.precision),
                    asset: bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAsset(feeStatus.fee.asset_id)
                };
            });
        }
    }, {
        key: "_checkFeeAssets",
        value: function _checkFeeAssets() {
            var _this3 = this;

            // get account balances, check is each balance available to pay fee
            // for limit_order, filter only available assets and put it to local state

            this._getAccountAssetsFeeStatus().then(function (feeStatuses) {
                var assets = _this3._filterFeeStatuses(feeStatuses);

                _this3.setState({
                    feeAssets: assets
                });
            });
        }
    }, {
        key: "_getAccountAssetsFeeStatus",
        value: function _getAccountAssetsFeeStatus() {
            var currentAccount = this.props.currentAccount;

            var _getFormValues2 = this._getFormValues(),
                orderCount = _getFormValues2.orderCount;

            if (!currentAccount || !currentAccount.get || !currentAccount.get("balances")) {
                return false;
            }

            return new Promise(function (resolve) {
                var promises = [];

                currentAccount.get("balances").forEach(function (balance) {
                    var balanceObj = bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getObject(balance);

                    var promise = Object(_lib_common_trxHelper__WEBPACK_IMPORTED_MODULE_11__["checkFeeStatusAsync"])({
                        accountID: currentAccount.get("id"),
                        feeID: balanceObj.get("asset_type"),
                        type: "limit_order_create",
                        operationsCount: orderCount
                    });

                    promises.push(promise);
                });

                Promise.all(promises).then(function (feesStatuses) {
                    resolve(feesStatuses);
                });
            });
        }
    }, {
        key: "_getFee",
        value: function _getFee() {
            var formValues = this._getFormValues();

            var amount = 0;

            if (formValues && formValues.feeCurrency) {
                this.state.feeAssets.forEach(function (feeAsset) {
                    if (feeAsset && feeAsset.asset && feeAsset.asset.get("symbol") === formValues.feeCurrency) {
                        amount = feeAsset.amount;
                    }
                });
            }

            return amount;
        }
    }, {
        key: "_getMarketFee",
        value: function _getMarketFee() {
            var formValues = this._getFormValues();

            var base = this.props.baseAsset;
            var quote = this.props.quoteAsset;

            var quantity = Number(this._getTotal());
            var action = formValues.action;

            if (isNaN(quantity)) return null;

            var asset = null;

            if (action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].SELL) asset = base;

            if (action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].BUY) asset = quote;

            if (!asset || !asset.get || !asset.getIn) return null;

            var maxMarketFee = new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                amount: asset.getIn(["options", "max_market_fee"]),
                asset_id: asset.get("asset_id"),
                precision: asset.get("precision")
            });

            var marketFeePercent = this._getMarketFeePercentage();

            return !quantity ? 0 : Math.min(maxMarketFee.getAmount({ real: true }), quantity / 100 * marketFeePercent).toFixed(maxMarketFee.precision);
        }
    }, {
        key: "_getMarketFeePercentage",
        value: function _getMarketFeePercentage() {
            var _getFormValues3 = this._getFormValues(),
                action = _getFormValues3.action;

            var base = this.props.baseAsset;
            var quote = this.props.quoteAsset;

            var asset = null;

            if (action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].SELL) asset = base;

            if (action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].BUY) asset = quote;

            return Number(asset.getIn(["options", "market_fee_percent"]) / 100);
        }
    }, {
        key: "_getTotal",
        value: function _getTotal() {
            var formValues = this._getFormValues();

            var amount = Number(formValues.amount);
            var priceLower = Number(formValues.priceLower);
            var priceUpper = Number(formValues.priceUpper);
            var orderCount = Number(formValues.orderCount);

            var isCorrect = function isCorrect(value) {
                return !isNaN(value);
            };

            if (!isCorrect(priceLower) || !isCorrect(priceUpper) || !isCorrect(amount) || !isCorrect(orderCount) || orderCount <= 1 || orderCount <= 0 || priceLower >= priceUpper) return 0;

            var step = Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseDivide"])(Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseMinus"])(priceUpper, priceLower), Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseMinus"])(orderCount, 1));

            var amountPerOrder = Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseDivide"])(amount, orderCount);

            var total = 0;

            for (var i = 0; i < orderCount; i += 1) {
                // total += amountPerOrder * (priceLower + step * i);
                total = Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseAdd"])(total, Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseMultiply"])(amountPerOrder, Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseAdd"])(priceLower, Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseMultiply"])(step, i))));
            }

            return total;
        }
    }, {
        key: "_getQuantityFromTotal",
        value: function _getQuantityFromTotal(total) {
            var formValues = this._getFormValues();

            var priceLower = Number(formValues.priceLower);
            var priceUpper = Number(formValues.priceUpper);
            var orderCount = Number(formValues.orderCount);

            var isCorrect = function isCorrect(value) {
                return !isNaN(value);
            };

            if (!isCorrect(priceLower) || !isCorrect(priceUpper) || !isCorrect(total) || !isCorrect(orderCount) || orderCount <= 0 || priceLower >= priceUpper) return 0;

            var step = Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseDivide"])(Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseMinus"])(priceUpper, priceLower), Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseMinus"])(orderCount, 1));

            var sum = 0;

            for (var i = 0; i < orderCount; i += 1) {
                // sum + ((priceLower + step * i) / orderCount)

                sum = Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseAdd"])(sum, Number(Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseDivide"])(Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseAdd"])(priceLower, Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseMultiply"])(step, i)), orderCount)));
            }

            return Object(_services_Math__WEBPACK_IMPORTED_MODULE_13__["preciseDivide"])(total, sum);
        }
    }, {
        key: "_getPreviewDataSource",
        value: function _getPreviewDataSource() {
            var formValues = this._getFormValues();

            var dataSource = [];

            var action = formValues.action;
            var amount = Number(formValues.amount);
            var priceLower = Number(formValues.priceLower);
            var priceUpper = Number(formValues.priceUpper);
            var orderCount = Number(formValues.orderCount);

            var isCorrect = function isCorrect(value) {
                return !isNaN(value);
            };

            if (!isCorrect(priceLower) || !isCorrect(priceUpper) || !isCorrect(amount) || !isCorrect(orderCount) || orderCount <= 0 || priceLower >= priceUpper) return [];

            var step = ((priceUpper - priceLower) / (orderCount - 1)).toFixed(6);

            var amountPerOrder = amount / orderCount;

            for (var i = 0; i < orderCount; i += 1) {
                dataSource.push({
                    quote: amountPerOrder.toFixed(6),
                    base: (amountPerOrder * (priceLower + step * i)).toFixed(6),
                    price: (priceLower + step * i).toFixed(6)
                });
            }

            return action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].BUY ? dataSource.reverse() : dataSource;
        }
    }, {
        key: "handleClickBalance",
        value: function handleClickBalance() {
            if (this.props.type === "bid") {
                this.props.form.setFieldsValue({
                    amount: this._getQuantityFromTotal(this.props.baseAssetBalance)
                });
            } else {
                this.props.form.setFieldsValue({
                    amount: this.props.quoteAssetBalance
                });
            }
        }
    }, {
        key: "handleCurrentPriceClick",
        value: function handleCurrentPriceClick() {
            this.props.form.setFieldsValue({
                priceLower: this.props.currentPrice
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                type = _props.type,
                quoteAsset = _props.quoteAsset,
                baseAsset = _props.baseAsset,
                expirationCustomTime = _props.expirationCustomTime;


            var isBid = type === "bid";

            var quote = quoteAsset;
            var base = baseAsset;

            var getFieldDecorator = this.props.form.getFieldDecorator;


            var marketFeeSymbol = isBid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: this.props.quoteAsset.get("symbol") }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: this.props.baseAsset.get("symbol") });

            var quantitySymbol = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: this.props.quoteAsset.get("symbol") });

            var totalSymbol = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: this.props.baseAsset.get("symbol") });

            var priceSymbol = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { dataPlace: "right", name: baseAsset.get("symbol") }),
                "\xA0/\xA0",
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { dataPlace: "right", name: quoteAsset.get("symbol") })
            );

            var formItemProps = {
                labelCol: { span: 6 },
                wrapperCol: { span: 16, offset: 2 }
            };

            var actionRadio = getFieldDecorator("action", {
                initialValue: isBid ? _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].BUY : _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].SELL
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Radio"],
                    { value: _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].BUY },
                    counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("scaled_orders.action.buy")
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Radio"],
                    { value: _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].SELL },
                    counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("scaled_orders.action.sell")
                )
            ));

            var priceLowerInput = getFieldDecorator("priceLower", {
                validateFirst: true,
                validateTrigger: "onBlur",
                rules: [_services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.required(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.number(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.min({ min: 0, name: "Price", higherThan: true })]
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                placeholder: "0.0",
                style: { width: "100%" },
                autoComplete: "off",
                addonAfter: priceSymbol
            }));

            var formValues = this._getFormValues();

            var priceLower = Number(formValues && formValues.priceLower || 0);

            var priceUpperInput = getFieldDecorator("priceUpper", {
                validateFirst: true,
                validateTrigger: "onBlur",
                rules: [_services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.required(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.number(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.min({
                    min: priceLower,
                    name: "Price",
                    higherThan: true
                })]
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                placeholder: "0.0",
                style: { width: "100%" },
                autoComplete: "off",
                addonAfter: priceSymbol
            }));

            var feeCurrencySelect = getFieldDecorator("feeCurrency", {
                initialValue: bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAsset("1.3.0") && bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAsset("1.3.0").get && bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAsset("1.3.0").get("symbol")
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Select"],
                {
                    showSearch: true,
                    dropdownMatchSelectWidth: false,
                    style: { minWidth: "80px", maxWidth: "120px" }
                },
                this.state.feeAssets && this.state.feeAssets.map && this.state.feeAssets.map(function (feeAsset) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Select"].Option,
                        {
                            key: feeAsset.asset.get("symbol"),
                            value: "" + feeAsset.asset.get("symbol")
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            name: feeAsset.asset.get("symbol"),
                            noTip: true
                        })
                    );
                })
            ));

            var feeInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                disabled: true,
                placeholder: "0.0",
                style: { width: "100%" },
                autoComplete: "off",
                addonAfter: feeCurrencySelect,
                value: this._getFee()
            });

            var marketFeeInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                disabled: true,
                style: { width: "100%" },
                autoComplete: "off",
                addonAfter: marketFeeSymbol,
                value: this._getMarketFee()
            });

            var totalInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                disabled: true,
                style: { width: "100%" },
                autoComplete: "off",
                addonAfter: totalSymbol,
                value: this._getTotal()
            });

            var totalInputValidation = _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.balance({
                balance: this.props.baseAssetBalance,
                symbol: this.props.baseAsset.get("symbol")
            });

            var totalInputValidator = totalInputValidation.validator(null, this._getTotal(), function (a) {
                return a === undefined;
            });
            var totalInputHelp = isBid && !totalInputValidator ? totalInputValidation.message : null;
            var totalInputStatus = isBid && !totalInputValidator ? "error" : "";

            var quantityRules = [_services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.required(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.number(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.min({ min: 0, higherThan: true, name: "Quantity" })];

            if (!isBid) {
                quantityRules.push(_services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.balance({
                    balance: this.props.quoteAssetBalance,
                    symbol: this.props.quoteAsset.get("symbol")
                }));
            }

            var quantityInput = getFieldDecorator("amount", {
                validateFirst: true,
                validateTrigger: "onBlur",
                rules: quantityRules
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                placeholder: "0.0",
                style: { width: "100%" },
                autoComplete: "off",
                addonAfter: quantitySymbol
            }));

            var orderCountInput = getFieldDecorator("orderCount", {
                validateFirst: true,
                rules: [_services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.required(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.number(), _services_Validation_Validation__WEBPACK_IMPORTED_MODULE_9__["Validation"].Rules.min({
                    min: 1,
                    name: "Orders Count",
                    higherThan: true
                })]
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                style: { width: "100%" },
                placeholder: "0",
                autoComplete: "off",
                addonAfter: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("scaled_orders.order_s")
            }));

            var lastPriceLabel = counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate(isBid ? "exchange.lowest_ask" : "exchange.highest_bid");

            var expirationTip = void 0;

            if (this.props.expirationType !== "SPECIFIC") {
                expirationTip = this.props.expirations[this.props.expirationType].get();
            }

            var expirationsOptionsList = Object.keys(this.props.expirations).map(function (key) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: key, key: key },
                    key === "SPECIFIC" && expirationCustomTime !== "Specific" ? moment__WEBPACK_IMPORTED_MODULE_1___default()(expirationCustomTime).format("Do MMM YYYY hh:mm A") : _this4.props.expirations[key].title
                );
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "buy-sell-container", style: { padding: "5px" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"],
                    {
                        className: "order-form",
                        layout: "horizontal",
                        hideRequiredMark: true,
                        style: { padding: "8px 15px" }
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].Item,
                        _extends({}, formItemProps, {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("scaled_orders.price_lower")
                        }),
                        priceLowerInput
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].Item,
                        _extends({}, formItemProps, {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("scaled_orders.price_upper")
                        }),
                        priceUpperInput
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].Item,
                        _extends({}, formItemProps, {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("scaled_orders.quantity")
                        }),
                        quantityInput
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].Item,
                        _extends({}, formItemProps, {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("scaled_orders.order_count")
                        }),
                        orderCountInput
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].Item,
                        _extends({}, formItemProps, {
                            help: totalInputHelp,
                            validateStatus: totalInputStatus,
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("scaled_orders.total")
                        }),
                        totalInput
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].Item,
                        _extends({}, formItemProps, {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("scaled_orders.fee")
                        }),
                        feeInput
                    ),
                    this._isMarketFeeVisible() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].Item,
                        _extends({}, formItemProps, {
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("scaled_orders.market_fee") + " " + this._getMarketFeePercentage() + "%"
                        }),
                        marketFeeInput
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].Item,
                        _extends({
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("transaction.expiration")
                        }, formItemProps),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "expiration-datetime-picker scaled-orders",
                                style: { marginTop: "5px" }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__["DatePicker"], {
                                ref: this.getDatePickerRef,
                                className: "expiration-datetime-picker--hidden",
                                showTime: true,
                                showToday: false,
                                disabledDate: function disabledDate(current) {
                                    return current < moment__WEBPACK_IMPORTED_MODULE_1___default()().add(59, "minutes");
                                },
                                value: expirationCustomTime !== "Specific" ? expirationCustomTime : moment__WEBPACK_IMPORTED_MODULE_1___default()().add(1, "hour"),
                                onChange: this.props.onExpirationCustomChange
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    className: "cursor-pointer",
                                    style: { marginTop: "5px" },
                                    onChange: this.onExpirationSelectChange,
                                    onClick: this.onExpirationSelectClick,
                                    onBlur: this.onExpirationSelectBlur,
                                    "data-tip": expirationTip && moment__WEBPACK_IMPORTED_MODULE_1___default()(expirationTip).format("Do MMM YYYY hh:mm A"),
                                    value: this.props.expirationType
                                },
                                expirationsOptionsList
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].Item,
                        _extends({ label: lastPriceLabel }, formItemProps),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                style: {
                                    borderBottom: "#A09F9F 1px dotted",
                                    cursor: "pointer"
                                },
                                onClick: this.handleCurrentPriceClick
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                price: this.props.currentPrice,
                                quote: quote,
                                base: base
                            }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: base.get("symbol"), noTip: true }),
                            "/",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                name: quote.get("symbol"),
                                noTip: true
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].Item,
                        _extends({
                            label: counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate("exchange.balance")
                        }, formItemProps),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                style: {
                                    borderBottom: "#A09F9F 1px dotted",
                                    cursor: "pointer"
                                },
                                onClick: this.handleClickBalance
                            },
                            !isBid ? this.props.quoteAssetBalance : this.props.baseAssetBalance,
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                name: !isBid ? quote.get("symbol") : base.get("symbol"),
                                noTip: true
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                        {
                            onClick: this.props.handleSubmit,
                            type: "primary",
                            disabled: !this.isFormValid()
                        },
                        counterpart__WEBPACK_IMPORTED_MODULE_8___default.a.translate(isBid ? "scaled_orders.action.buy" : "scaled_orders.action.sell")
                    )
                )
            );
        }
    }]);

    return ScaledOrderForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ScaledOrderForm = bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Form"].create({})(ScaledOrderForm);

var ScaledOrderTab = function (_Component2) {
    _inherits(ScaledOrderTab, _Component2);

    function ScaledOrderTab(props) {
        _classCallCheck(this, ScaledOrderTab);

        var _this5 = _possibleConstructorReturn(this, (ScaledOrderTab.__proto__ || Object.getPrototypeOf(ScaledOrderTab)).call(this, props));

        _this5.saveFormRef = _this5.saveFormRef.bind(_this5);
        _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
        _this5.handleCancel = _this5.handleCancel.bind(_this5);
        return _this5;
    }

    _createClass(ScaledOrderTab, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (this.props.baseAsset && prevProps.baseAsset && this.props.baseAsset.get && prevProps.baseAsset.get && this.props.baseAsset.get("id") !== prevProps.baseAsset.get("id") && this.formRef && this.formRef.props && this.formRef.props.form) {
                this.formRef.props.form.resetFields();
            }

            if (this.props.lastClickedPrice && this.props.lastClickedPrice !== prevProps.lastClickedPrice) {
                if (this.formRef && this.formRef.props && this.formRef.props.form && this.formRef.props.form.setFieldsValue) {
                    this.formRef.props.form.setFieldsValue({
                        priceLower: Number(this.props.lastClickedPrice)
                    });
                }
            }
        }
    }, {
        key: "prepareOrders",
        value: function prepareOrders(values) {
            var orders = [];

            var amount = Number(values.amount);
            var priceLower = Number(values.priceLower);
            var priceUpper = Number(values.priceUpper);
            var orderCount = Number(values.orderCount);

            var expirationTime = null;
            if (this.props.expirationType === "SPECIFIC") {
                expirationTime = this.props.expirations[this.props.expirationType].get(this.props.type);
            } else {
                expirationTime = this.props.expirations[this.props.expirationType].get(this.props.type);
            }

            var isCorrect = function isCorrect(value) {
                return !isNaN(value);
            };

            if (!isCorrect(priceLower) || !isCorrect(priceUpper) || !isCorrect(amount) || !isCorrect(orderCount) || orderCount <= 0 || priceLower >= priceUpper) return [];

            var step = ((priceUpper - priceLower) / (orderCount - 1)).toPrecision(5);

            var amountPerOrder = amount / orderCount;

            var sellAsset = values.action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].SELL ? this.props.quoteAsset : this.props.baseAsset;
            var buyAsset = values.action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].BUY ? this.props.quoteAsset : this.props.baseAsset;

            var sellAmount = function sellAmount(i) {
                var scaledAmount = amountPerOrder * (priceLower + step * i);
                return values.action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].BUY ? Number(scaledAmount.toPrecision(5)) * Math.pow(10, sellAsset.get("precision")) : Number(amountPerOrder.toPrecision(5)) * Math.pow(10, sellAsset.get("precision"));
            };

            var buyAmount = function buyAmount(i) {
                var scaledAmount = amountPerOrder * (priceLower + step * i);
                return values.action === _services_Exchange__WEBPACK_IMPORTED_MODULE_5__["SCALED_ORDER_ACTION_TYPES"].SELL ? Number(scaledAmount.toPrecision(5)) * Math.pow(10, buyAsset.get("precision")) : Number(amountPerOrder.toPrecision(5)) * Math.pow(10, buyAsset.get("precision"));
            };

            for (var i = 0; i < orderCount; i += 1) {
                orders.push({
                    for_sale: new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                        asset_id: sellAsset.get("id"),
                        precision: sellAsset.get("precision"),
                        amount: sellAmount(i)
                    }),
                    to_receive: new _lib_common_MarketClasses__WEBPACK_IMPORTED_MODULE_6__["Asset"]({
                        asset_id: buyAsset.get("id"),
                        precision: buyAsset.get("precision"),
                        amount: buyAmount(i)
                    }),
                    expirationTime: expirationTime
                });
            }

            this.props.createScaledOrder(orders, bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getAsset(values.feeCurrency).get("id"));
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit() {
            var _this6 = this;

            var form = this.formRef.props.form;

            form.validateFields(function (err, values) {
                if (err) return;

                _this6.prepareOrders(values);
            });
        }
    }, {
        key: "handleCancel",
        value: function handleCancel() {
            this.props.hideModal();
        }
    }, {
        key: "saveFormRef",
        value: function saveFormRef(ref) {
            this.formRef = ref;
        }
    }, {
        key: "_getBalanceByAssetId",
        value: function _getBalanceByAssetId(assetId, precision) {
            var balance = 0;

            var balances = this.props.currentAccount.get("balances");

            if (balances.get(assetId) !== undefined) {
                var balanceObj = bitsharesjs_es_chain_src_ChainStore__WEBPACK_IMPORTED_MODULE_7__["default"].getObject(balances.get(assetId));

                balance = balanceObj.get("balance") / Math.pow(10, precision);
            }

            return balance;
        }
    }, {
        key: "render",
        value: function render() {
            var baseAssetBalance = this._getBalanceByAssetId(this.props.baseAsset.get("id"), this.props.baseAsset.get("precision"));
            var quoteAssetBalance = this._getBalanceByAssetId(this.props.quoteAsset.get("id"), this.props.quoteAsset.get("precision"));

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScaledOrderForm, _extends({}, this.props, {
                wrappedComponentRef: this.saveFormRef,
                baseAssetBalance: baseAssetBalance,
                quoteAssetBalance: quoteAssetBalance,
                handleSubmit: this.handleSubmit
            }));
        }
    }]);

    return ScaledOrderTab;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ScaledOrderTab);

/***/ }),

/***/ 2798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rules", function() { return Rules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validation", function() { return Validation; });
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2799);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




/** * * * *
 *
 * MESSAGES
 *
 * * * * * */

var Messages = {
    Required: function Required() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.requiredNamed", {
            name: name
        });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.required");
    },

    Type: function Type() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.types." + type + "Named", { name: name, type: type });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.types." + type, {
            type: type
        });
    },

    Range: function Range(min, max, name) {
        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.rangeNamed", {
            name: name,
            min: min,
            max: max
        });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.range", {
            min: min,
            max: max
        });
    },

    Min: function Min(min, name) {
        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.minNamed", {
            name: name,
            min: min
        });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.min", { min: min });
    },

    Max: function Max(max, name) {
        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.maxNamed", {
            name: name,
            max: max
        });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.max", { max: max });
    },

    Number: function Number(name) {
        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.numberNamed", {
            name: name
        });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.number");
    },

    Integer: function Integer(name) {
        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.integerNamed", {
            name: name
        });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.integer");
    },

    Float: function Float(name) {
        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.floatNamed", {
            name: name
        });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.float");
    },

    Email: function Email(name) {
        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.emailNamed", {
            name: name
        });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.email");
    },

    Url: function Url(name) {
        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.urlNamed", {
            name: name
        });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.url");
    },

    OneOf: function OneOf(name, list) {
        if (name) return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.oneOfNamed", {
            name: name,
            list: list
        });
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.oneOf", { list: list });
    },

    Balance: function Balance(balance, symbol) {
        return counterpart__WEBPACK_IMPORTED_MODULE_0___default.a.translate("validation.messages.balance", {
            balance: balance,
            symbol: symbol
        });
    }
};

/** * * * *
 *
 * RULES
 *
 * * * * * */

var Rules = {
    /**
     * Validation to check required Field
     * @param {string} props - name of field to use in translation
     * @param {Object} props
     * @param props.name - name of field to use in translation
     * @returns {{required: boolean, message: *}}
     */

    required: function required() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var name = "";

        if (typeof props === "string") {
            name = props;
        } else {
            name = props && props.name;
        }

        return {
            required: true,
            message: Messages.Required(name)
        };
    },

    /**
     * Validation to check field to match specific type
     * @param {string} props - type of field
     * @param {Object} props
     * @param {string} props.type - type of field
     * @param {string} [props.name] - name of field to use in translation
     * @returns {{validator: validator, message: *}}
     */

    type: function type(props) {
        var type = "";
        var name = "";

        if (typeof props === "string") type = props;

        if (props && props.type) type = props.type;

        if (props && props.name) name = props.name;

        if (type === "") throw new Error("[Validation] Rules.Type the property type is missed");

        if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"][type]) throw new Error("[Validation] Rules.Type the property type '" + (props && props.type) + "' is not listed in supported types");

        return {
            validator: function validator(rule, value, callback) {
                if (_types__WEBPACK_IMPORTED_MODULE_1__["default"][type](value)) return callback();

                return callback(false);
            },
            message: Messages.Type(type, name)
        };
    },

    /**
     * Validation to check
     * @param {Object} props
     * @param {number} props.min - min value
     * @param {number} props.max - max value
     * @param {string} [props.name] - name of field to use in translation
     * @returns {{validator: validator, message: *}}
     */

    range: function range() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var max = Number(props.max);
        var min = Number(props.min);

        if (max === undefined || isNaN(max)) throw new Error("[Validation] Rules.Range the property max '" + (props && props.max) + "' is incorrect. Should be a number");

        if (min === undefined || isNaN(min)) throw new Error("[Validation] Rules.Range the property min '" + (props && props.min) + "' is incorrect. Should be a number");

        if (max < min) throw new Error("[Validation] Rules.Range the property min '" + (props && props.min) + "' cannot be higher than max '" + (props && props.max) + "'");

        return {
            validator: function validator(rule, value, callback) {
                value = Number(value);

                if (isNaN(value) || value < min || value > max) return callback(false);

                return callback();
            },
            message: Messages.Range(min, max, props.name || "")
        };
    },

    /**
     * Validation for min value
     * @param {number} props - min value
     * @param {Object} props
     * @param {number} props.min
     * @param {string} [props.name]
     * @param {boolean} props.higherThan - if (true) then check will be "value > min" instead of "value >= min"
     * @returns {{validator: validator, message: *}}
     */

    min: function min(props) {
        var min = void 0;

        if ((typeof props === "undefined" ? "undefined" : _typeof(props)) === "object") {
            min = Number(props && props.min);
        } else {
            min = Number(props);
        }

        if (min === undefined || isNaN(min)) throw new Error("[Validation] Rules.Min the property min '" + (props && props.min) + "' is incorrect. Should be a number");

        return {
            validator: function validator(rule, value, callback) {
                value = Number(value);

                if (props && props.higherThan) {
                    if (isNaN(value) || value <= min) return callback(false);
                } else {
                    if (isNaN(value) || value < min) return callback(false);
                }

                return callback();
            },
            message: Messages.Min(min, props.name || "")
        };
    },

    /**
     * Validation for max value
     * @param {number} props - max value
     * @param {Object} props
     * @param {number} props.max
     * @param {string} [props.name]
     * @returns {{validator: validator, message: *}}
     */

    max: function max(props) {
        var max = void 0;

        if ((typeof props === "undefined" ? "undefined" : _typeof(props)) === "object") {
            max = Number(props && props.max);
        } else {
            max = Number(props);
        }

        if (max === undefined || isNaN(max)) throw new Error("[Validation] Rules.Min the property max '" + (props && props.max) + "' is incorrect. Should be a number");

        return {
            validator: function validator(rule, value, callback) {
                value = Number(value);

                if (isNaN(value) || value > max) return callback(false);

                return callback();
            },
            message: Messages.Max(max, props.name || "")
        };
    },

    /**
     * Validate field to be number
     * @param {string} [name]
     * @returns {{validator: validator, message: *}}
     */

    number: function number(name) {
        return {
            validator: function validator(rule, value, callback) {
                if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"].number(value)) return callback(false);

                return callback();
            },
            message: Messages.Number(name || "")
        };
    },

    /**
     * Validate field to be integer
     * @param {string} [name]
     * @returns {{validator: validator, message: *}}
     */

    integer: function integer(name) {
        return {
            validator: function validator(rule, value, callback) {
                if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"].integer(value)) return callback(false);

                return callback();
            },
            message: Messages.Integer(name || "")
        };
    },

    /**
     * Validate field to be float
     * @param {string} [name]
     * @returns {{validator: validator, message: *}}
     */

    float: function float(name) {
        return {
            validator: function validator(rule, value, callback) {
                if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"].float(value)) return callback(false);

                return callback();
            },
            message: Messages.Float(name || "")
        };
    },

    /**
     * Validate field to be email
     * @param {string} [name]
     * @returns {{validator: validator, message: *}}
     */

    email: function email(name) {
        return {
            validator: function validator(rule, value, callback) {
                if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"].email(value)) return callback(false);

                return callback();
            },
            message: Messages.Email(name || "")
        };
    },

    /**
     * Validate field to be url
     * @param {string} [name]
     * @returns {{validator: validator, message: *}}
     */

    url: function url(name) {
        return {
            validator: function validator(rule, value, callback) {
                if (!_types__WEBPACK_IMPORTED_MODULE_1__["default"].url(value)) return callback(false);

                return callback();
            },
            message: Messages.Url(name || "")
        };
    },

    /**
     * Validate field to be oneOf
     * @param {Object} props
     * @param {Array} props.list
     * @param {string} [props.name]
     * @returns {{validator: validator, message: *}}
     */

    oneOf: function oneOf() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var list = void 0;

        if (!Array.isArray(props && props.list)) {
            throw new Error("[Validation] Rules.oneOf the property list is missed or incorrect");
        }

        list = props.list;

        return {
            validator: function validator(rule, value, callback) {
                if (list.indexOf(value) === -1) return callback(false);

                return callback();
            },
            message: Messages.OneOf(props && props.name || "", list.toString().replace(/,([a-z])/g, ", $1"))
        };
    },

    /**
     * Validate field to be in range from 0 to UserBalance
     * @param props
     */

    balance: function balance() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var validation = Rules.range({
            min: 0,
            max: props.balance
        });

        return {
            validator: validation.validator,
            message: Messages.Balance(props.balance, props.symbol)
        };
    }
};

/** * * * *
 *
 * VALIDATION
 *
 * * * * * */

var Validation = {
    Rules: Rules
};

/***/ }),

/***/ 2799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var pattern = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};

var types = {
    integer: function integer(value) {
        return types.number(value) && parseInt(value, 10) === Number(value);
    },
    float: function float(value) {
        return types.number(value) && !types.integer(value);
    },
    array: function array(value) {
        return Array.isArray(value);
    },
    regexp: function regexp(value) {
        if (value instanceof RegExp) {
            return true;
        }
        try {
            return !!new RegExp(value);
        } catch (e) {
            return false;
        }
    },
    date: function date(value) {
        return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function";
    },
    number: function number(value) {
        if (isNaN(value) || isNaN(Number(value))) {
            return false;
        }
        return typeof Number(value) === "number";
    },
    object: function object(value) {
        return (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && !types.array(value);
    },
    method: function method(value) {
        return typeof value === "function";
    },
    email: function email(value) {
        return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url: function url(value) {
        return typeof value === "string" && !!value.match(pattern.url);
    },
    hex: function hex(value) {
        return typeof value === "string" && !!value.match(pattern.hex);
    },
    string: function string(value) {
        return typeof value === "string";
    },
    boolean: function boolean(value) {
        return typeof value === "boolean";
    },
    enum: function _enum(value, list) {
        return Array.isArray(list) && list.indexOf(value) >= -1;
    }
};

/* harmony default export */ __webpack_exports__["default"] = (types);

/***/ }),

/***/ 2800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preciseAdd", function() { return preciseAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preciseMinus", function() { return preciseMinus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preciseMultiply", function() { return preciseMultiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preciseDivide", function() { return preciseDivide; });
var preciseOperation = function preciseOperation(f) {
    return function (a, b) {
        var decimalDigits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;
        return +f(a, b).toFixed(decimalDigits);
    };
};

var add = function add(a, b) {
    return a + b;
};
var minus = function minus(a, b) {
    return a - b;
};
var multiply = function multiply(a, b) {
    return a * b;
};
var divide = function divide(a, b) {
    return a / b;
};
var preciseAdd = function preciseAdd(a, b, decimalDigits) {
    return preciseOperation(add)(a, b, decimalDigits);
};
var preciseMinus = function preciseMinus(a, b, decimalDigits) {
    return preciseOperation(minus)(a, b, decimalDigits);
};
var preciseMultiply = function preciseMultiply(a, b, decimalDigits) {
    return preciseOperation(multiply)(a, b, decimalDigits);
};
var preciseDivide = function preciseDivide(a, b, decimalDigits) {
    return preciseOperation(divide)(a, b, decimalDigits);
};

/***/ }),

/***/ 2801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1855);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1903);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2139);
/* harmony import */ var _Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2802);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2378);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(735);
/* harmony import */ var _PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2804);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(429);
/* harmony import */ var _ExchangeHeaderCollateral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2805);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(607);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var ExchangeHeader = function (_React$Component) {
    _inherits(ExchangeHeader, _React$Component);

    function ExchangeHeader(props) {
        _classCallCheck(this, ExchangeHeader);

        var _this = _possibleConstructorReturn(this, (ExchangeHeader.__proto__ || Object.getPrototypeOf(ExchangeHeader)).call(this));

        _this.state = {
            isModalVisible: false,
            volumeShowQuote: true,
            selectedMarketPickerAsset: props.selectedMarketPickerAsset
        };
        return _this;
    }

    _createClass(ExchangeHeader, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                selectedMarketPickerAsset: nextProps.selectedMarketPickerAsset
            });
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (!nextProps.marketReady) return false;
            return true;
        }
    }, {
        key: "_addMarket",
        value: function _addMarket(quote, base) {
            var marketID = quote + "_" + base;
            if (!this.props.starredMarkets.has(marketID)) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].addStarMarket(quote, base);
            } else {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].removeStarMarket(quote, base);
            }
        }
    }, {
        key: "changeVolumeBase",
        value: function changeVolumeBase() {
            this.setState({
                volumeShowQuote: !this.state.volumeShowQuote
            });
        }
    }, {
        key: "marketPicker",
        value: function marketPicker(asset) {
            var selectedMarketPickerAsset = this.state.selectedMarketPickerAsset;


            selectedMarketPickerAsset = !!selectedMarketPickerAsset && selectedMarketPickerAsset == asset ? null : asset;

            this.setState({
                selectedMarketPickerAsset: selectedMarketPickerAsset
            });
            this.props.onToggleMarketPicker(selectedMarketPickerAsset);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                quoteAsset = _props.quoteAsset,
                baseAsset = _props.baseAsset,
                starredMarkets = _props.starredMarkets,
                hasPrediction = _props.hasPrediction,
                feedPrice = _props.feedPrice,
                showCallLimit = _props.showCallLimit,
                lowestCallPrice = _props.lowestCallPrice,
                marketReady = _props.marketReady,
                latestPrice = _props.latestPrice,
                marketStats = _props.marketStats,
                account = _props.account;


            var baseSymbol = baseAsset.get("symbol");
            var quoteSymbol = quoteAsset.get("symbol");

            // Favorite star
            var marketID = quoteSymbol + "_" + baseSymbol;
            var starClass = starredMarkets.has(marketID) ? "gold-star" : "grey-star";

            // Market stats
            var dayChange = marketStats.get("change");

            var dayChangeClass = parseFloat(dayChange) === 0 || isNaN(dayChange) ? "" : parseFloat(dayChange) < 0 ? "negative" : "positive";
            var volumeBase = marketStats.get("volumeBase");
            var volumeQuote = marketStats.get("volumeQuote");
            var dayChangeWithSign = isNaN(dayChange) ? undefined : dayChange > 0 ? "+" + dayChange : dayChange;

            var volume24h = this.state.volumeShowQuote ? volumeQuote : volumeBase;
            var volume24hAsset = this.state.volumeShowQuote ? quoteAsset : baseAsset;

            var showCollateralRatio = false;

            var quoteId = quoteAsset.get("id");
            var baseId = baseAsset.get("id");

            var lookForBitAsset = quoteId === "1.3.0" ? baseId : baseId === "1.3.0" ? quoteId : null;
            var possibleBitAsset = lookForBitAsset ? bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getAsset(lookForBitAsset) : null;
            var isBitAsset = possibleBitAsset ? !!possibleBitAsset.get("bitasset") : false;
            var collOrderObject = "";
            var settlePrice = null;
            var settlePriceTitle = "exchange.settle";
            var settlePriceTooltip = "tooltip.settle_price";

            if (isBitAsset) {
                if (account.toJS && account.has("call_orders")) {
                    var call_orders = account.get("call_orders").toJS();

                    for (var i = 0; i < call_orders.length; i++) {
                        var callID = call_orders[i];

                        var position = bitsharesjs__WEBPACK_IMPORTED_MODULE_10__["ChainStore"].getObject(callID);
                        var debtAsset = position.getIn(["call_price", "quote", "asset_id"]);

                        if (debtAsset === lookForBitAsset) {
                            collOrderObject = callID;
                            showCollateralRatio = true;
                            break;
                        }
                    }
                }

                /* Settlment Offset */
                var settleAsset = baseId == "1.3.0" ? quoteAsset : quoteId == "1.3.0" ? baseAsset : quoteAsset;

                // globally settled
                if (possibleBitAsset.get("bitasset").get("settlement_fund") > 0) {
                    settlePriceTitle = "exchange.global_settle";
                    settlePriceTooltip = "tooltip.global_settle_price";
                    // if globally settled feed_price == settlement_price
                    settlePrice = possibleBitAsset.get("bitasset").get("settlement_price").toJS();
                    // add precision
                    if (settlePrice.base.asset_id == baseAsset.get("id")) {
                        settlePrice.base.precision = baseAsset.get("precision");
                        settlePrice.quote.precision = quoteAsset.get("precision");
                    } else {
                        settlePrice.quote.precision = baseAsset.get("precision");
                        settlePrice.base.precision = quoteAsset.get("precision");
                    }
                    settlePrice = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__["Price"]({
                        quote: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__["Asset"]({
                            asset_id: settlePrice.quote.asset_id,
                            precision: settlePrice.quote.precision,
                            amount: settlePrice.quote.amount
                        }),
                        base: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_13__["Asset"]({
                            asset_id: settlePrice.base.asset_id,
                            precision: settlePrice.base.precision,
                            amount: settlePrice.base.amount
                        })
                    }).toReal();
                    settlePrice = baseId == "1.3.0" ? 1 / settlePrice : settlePrice;
                } else if (settleAsset && feedPrice) {
                    var offset_percent = settleAsset.getIn(["bitasset", "options"]).toJS().force_settlement_offset_percent;
                    settlePrice = baseId == "1.3.0" ? feedPrice.toReal() / (1 + offset_percent / 10000) : feedPrice.toReal() * (1 + offset_percent / 10000);
                }
            }

            var translator = __webpack_require__(596);

            var isQuoteSelected = !!this.state.selectedMarketPickerAsset && this.state.selectedMarketPickerAsset == quoteSymbol;
            var isBaseSelected = !!this.state.selectedMarketPickerAsset && this.state.selectedMarketPickerAsset == baseSymbol;

            var PriceAlertBellClassName = this.props.hasAnyPriceAlert ? "exchange--price-alert--show-modal--active" : "";

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block shrink no-padding overflow-visible top-bar" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block overflow-visible" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { padding: "10px" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                replaceNoneToBts: false,
                                maxWidth: 50,
                                name: quoteAsset.get("symbol")
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { padding: "10px" } },
                            !hasPrediction ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                    style: {
                                        padding: "0 5px",
                                        fontSize: this.props.tinyScreen ? "13px" : "18px",
                                        marginTop: "1px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
                                    onClick: this.props.showPriceAlertModal,
                                    type: "bell",
                                    className: "exchange--price-alert--show-modal " + PriceAlertBellClassName,
                                    style: { paddingRight: "10px" },
                                    "data-intro": translator.translate("walkthrough.price_alerts")
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        onClick: this.marketPicker.bind(this, quoteSymbol),
                                        className: "underline",
                                        style: {
                                            cursor: "pointer",
                                            color: isQuoteSelected ? "#2196f3" : ""
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        name: quoteSymbol,
                                        replace: true,
                                        noTip: true
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { style: { padding: "0 5px" } },
                                    "/"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    {
                                        onClick: this.marketPicker.bind(this, baseSymbol),
                                        className: "underline",
                                        style: {
                                            cursor: "pointer",
                                            color: isBaseSelected ? "#2196f3" : ""
                                        }
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        name: baseSymbol,
                                        replace: true,
                                        noTip: true
                                    })
                                )
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { className: "market-symbol" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    null,
                                    quoteSymbol + " : " + baseSymbol
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "label-actions" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
                                    component: "span",
                                    style: { padding: "5px 0 0 5px" },
                                    className: "stat-text",
                                    content: "exchange.trading_pair"
                                }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
                                    {
                                        onClick: function onClick() {
                                            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_5__["default"].switchMarket();
                                        },
                                        to: "/market/" + baseSymbol + "_" + quoteSymbol,
                                        "data-intro": translator.translate("walkthrough.switch_button")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        className: "shuffle",
                                        name: "shuffle",
                                        title: "icons.shuffle"
                                    })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        onClick: function onClick() {
                                            _this2._addMarket(_this2.props.quoteAsset.get("symbol"), _this2.props.baseAsset.get("symbol"));
                                        },
                                        "data-intro": translator.translate("walkthrough.favourite_button")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        className: starClass,
                                        name: "fi-star",
                                        title: "icons.fi_star.market"
                                    })
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "grid-block vertical",
                            style: { overflow: "visible" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "grid-block wrap market-stats-container" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                { className: "market-stats stats top-stats" },
                                latestPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    ready: marketReady,
                                    price: latestPrice,
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.latest"
                                }) : null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: "hide-order-1 stressed-stat daily_change " + dayChangeClass
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "span",
                                        null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "b",
                                            { className: "value" },
                                            dayChangeWithSign ? marketReady ? dayChangeWithSign : 0 : "-"
                                        ),
                                        dayChangeWithSign && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            null,
                                            " %"
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
                                        component: "div",
                                        className: "stat-text",
                                        content: "account.hour_24"
                                    })
                                ),
                                volumeBase >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    onClick: this.changeVolumeBase.bind(this),
                                    ready: marketReady,
                                    decimals: 0,
                                    volume: true,
                                    price: volume24h,
                                    className: "hide-order-2 clickable",
                                    base: volume24hAsset,
                                    market: marketID,
                                    content: "exchange.volume_24"
                                }) : null,
                                !hasPrediction && feedPrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.feed_price"),
                                    ready: marketReady,
                                    className: "hide-order-3",
                                    price: feedPrice.toReal(),
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.feed_price"
                                }) : null,
                                !hasPrediction && settlePrice ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    ignoreColorChange: true,
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate(settlePriceTooltip),
                                    ready: marketReady,
                                    className: "hide-order-4",
                                    price: settlePrice,
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: settlePriceTitle
                                }) : null,
                                showCollateralRatio ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeHeaderCollateral__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    object: collOrderObject,
                                    account: account,
                                    className: "hide-order-1"
                                }) : null,
                                lowestCallPrice && showCallLimit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.call_limit"),
                                    ready: marketReady,
                                    className: "hide-order-5 is-call",
                                    price: lowestCallPrice,
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "explorer.block.call_limit"
                                }) : null,
                                feedPrice && showCallLimit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceStatWithLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                    toolTip: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.margin_price"),
                                    ready: marketReady,
                                    className: "hide-order-6 is-call",
                                    price: feedPrice.getSqueezePrice({
                                        real: true
                                    }),
                                    quote: quoteAsset,
                                    base: baseAsset,
                                    market: marketID,
                                    content: "exchange.squeeze"
                                }) : null
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "ul",
                                {
                                    className: "market-stats stats top-stats",
                                    "data-position": "left",
                                    "data-step": "1",
                                    "data-intro": translator.translate("walkthrough.personalize")
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "li",
                                    {
                                        className: "stressed-stat input clickable",
                                        style: { padding: "16px 16px 16px 0px" },
                                        onClick: this.props.onTogglePersonalize.bind(this)
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
                                        type: "setting",
                                        style: { paddingRight: 5 }
                                    }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
                                        className: "hide-order-2",
                                        content: "exchange.settings.header.title"
                                    })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ExchangeHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExchangeHeader);

/***/ }),

/***/ 2804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2139);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(749);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2380);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var PriceStatWithLabel = function (_React$Component) {
    _inherits(PriceStatWithLabel, _React$Component);

    function PriceStatWithLabel() {
        _classCallCheck(this, PriceStatWithLabel);

        var _this = _possibleConstructorReturn(this, (PriceStatWithLabel.__proto__ || Object.getPrototypeOf(PriceStatWithLabel)).call(this));

        _this.state = {
            change: null,
            curMarket: null,
            marketChange: false
        };
        return _this;
    }

    _createClass(PriceStatWithLabel, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.volume2 && nextProps.volume2 !== this.props.volume2) {
                return true;
            }
            return nextProps.price !== this.props.price || nextProps.ready !== this.props.ready;
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var state = {
                change: 0
            };

            var market = nextProps.market;


            var checkMarketChange = this.state.curMarket !== market;
            var marketChange = this.state.curMarket == null ? false : checkMarketChange;

            state["marketChange"] = marketChange;
            state["curMarket"] = market;
            state["prevAsset"] = this.state.marketAsset;

            if (nextProps.ready && this.props.ready) {
                state["change"] = parseFloat(nextProps.price) - parseFloat(this.props.price);
            }

            this.setState(state);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a.rebuild();
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                base = _props.base,
                quote = _props.quote,
                price = _props.price,
                content = _props.content,
                ready = _props.ready,
                volume = _props.volume,
                toolTip = _props.toolTip,
                ignoreColorChange = _props.ignoreColorChange;
            var _state = this.state,
                change = _state.change,
                marketChange = _state.marketChange;

            var changeClasses = null;
            if (!marketChange && change && change !== null && ignoreColorChange !== true) {
                changeClasses = change > 0 ? "pulsate green" : "pulsate red";
            }

            var value = !volume ? common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].price_text(price, quote, base) : common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].format_volume(price);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "li",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("stressed-stat", this.props.className, changeClasses),
                    onClick: this.props.onClick
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                    { placement: "bottom", title: toolTip },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "value stat-primary" },
                            !ready ? 0 : value,
                            "\xA0"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "symbol-text" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_2__["default"], { name: base.get("symbol") })
                        )
                    ),
                    content ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "stat-text" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_1___default.a, { content: content })
                    ) : null
                )
            );
        }
    }]);

    return PriceStatWithLabel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PriceStatWithLabel);

/***/ }),

/***/ 2805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2012);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2013);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(749);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(591);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var MarginPosition = function (_React$Component) {
    _inherits(MarginPosition, _React$Component);

    function MarginPosition() {
        _classCallCheck(this, MarginPosition);

        return _possibleConstructorReturn(this, (MarginPosition.__proto__ || Object.getPrototypeOf(MarginPosition)).apply(this, arguments));
    }

    _createClass(MarginPosition, [{
        key: "_getFeedPrice",
        value: function _getFeedPrice() {
            if (!this.props) {
                return 1;
            }

            return 1 / common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_price(_lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].extractRawFeedPrice(this.props.debtAsset).getIn(["quote", "amount"]), this.props.collateralAsset, _lib_common_asset_utils__WEBPACK_IMPORTED_MODULE_8__["default"].extractRawFeedPrice(this.props.debtAsset).getIn(["base", "amount"]), this.props.debtAsset);
        }
    }, {
        key: "_getCollateralRatio",
        value: function _getCollateralRatio() {
            var co = this.props.object.toJS();
            var c = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.collateral, this.props.collateralAsset);
            var d = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.debt, this.props.debtAsset);
            return c / (d / this._getFeedPrice());
        }
    }, {
        key: "_getMR",
        value: function _getMR() {
            return this.props.debtAsset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;
        }
    }, {
        key: "_getStatusClass",
        value: function _getStatusClass() {
            var cr = this._getCollateralRatio();
            var mr = this._getMR();

            if (isNaN(cr)) return null;
            if (cr < mr) {
                return "danger";
            } else if (cr < mr + 0.5) {
                return "warning";
            } else {
                return "";
            }
        }
    }, {
        key: "_getCRTip",
        value: function _getCRTip() {
            var statusClass = this._getStatusClass();
            var mr = this._getMR();
            if (!statusClass || statusClass === "") return null;

            if (statusClass === "danger") {
                return counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("tooltip.cr_danger", { mr: mr });
            } else if (statusClass === "warning") {
                return counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("tooltip.cr_warning", { mr: mr });
            } else {
                return null;
            }
        }
    }, {
        key: "render",
        value: function render() {
            var object = this.props.object;

            var co = object.toJS();
            var cr = this._getCollateralRatio();
            var d = common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].get_asset_amount(co.debt, this.props.debtAsset);

            var statusClass = this._getStatusClass();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Tooltip"],
                { placement: "bottom", title: this._getCRTip() },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "li",
                    {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("stressed-stat", this.props.className),
                        onClick: this.props.onClick
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("value stat-primary", statusClass)
                            },
                            common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].format_number(cr, 2)
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "stat-text" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "header.collateral_ratio" })
                    )
                )
            );
        }
    }]);

    return MarginPosition;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarginPosition.propTypes = {
    debtAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired,
    collateralAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired
};

MarginPosition = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(MarginPosition);

var ExchangeHeaderCollateral = function (_React$Component2) {
    _inherits(ExchangeHeaderCollateral, _React$Component2);

    function ExchangeHeaderCollateral() {
        _classCallCheck(this, ExchangeHeaderCollateral);

        return _possibleConstructorReturn(this, (ExchangeHeaderCollateral.__proto__ || Object.getPrototypeOf(ExchangeHeaderCollateral)).apply(this, arguments));
    }

    _createClass(ExchangeHeaderCollateral, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                object = _props.object,
                account = _props.account;


            var debtAsset = object.getIn(["call_price", "quote", "asset_id"]);
            var collateralAsset = object.getIn(["call_price", "base", "asset_id"]);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarginPosition, _extends({
                debtAsset: debtAsset,
                collateralAsset: collateralAsset,
                account: account
            }, this.props));
        }
    }]);

    return ExchangeHeaderCollateral;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ExchangeHeaderCollateral.propTypes = {
    object: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObject.isRequired
};

ExchangeHeaderCollateral = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(ExchangeHeaderCollateral);

/* harmony default export */ __webpack_exports__["default"] = (ExchangeHeaderCollateral);

/***/ }),

/***/ 2806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketOrders", function() { return MarketOrders; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2771);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OpenSettleOrders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2807);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2378);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2809);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(735);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(429);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(607);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2380);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _View_MarketOrdersView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2823);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var MarketOrdersRow = function (_React$Component) {
    _inherits(MarketOrdersRow, _React$Component);

    function MarketOrdersRow() {
        _classCallCheck(this, MarketOrdersRow);

        return _possibleConstructorReturn(this, (MarketOrdersRow.__proto__ || Object.getPrototypeOf(MarketOrdersRow)).apply(this, arguments));
    }

    _createClass(MarketOrdersRow, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.order.for_sale !== this.props.order.for_sale || nextProps.order.id !== this.props.order.id || nextProps.quote !== this.props.quote || nextProps.base !== this.props.base || nextProps.order.market_base !== this.props.order.market_base || nextProps.selected !== this.props.selected;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                base = _props.base,
                quote = _props.quote,
                order = _props.order,
                selected = _props.selected;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_View_MarketOrdersView__WEBPACK_IMPORTED_MODULE_12__["MarketOrdersRowView"], {
                key: order.id,
                order: order,
                selected: selected,
                base: base,
                quote: quote,
                onCheckCancel: this.props.onCheckCancel.bind(this)
            });
        }
    }]);

    return MarketOrdersRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var MarketOrders = function (_React$Component2) {
    _inherits(MarketOrders, _React$Component2);

    function MarketOrders(props) {
        _classCallCheck(this, MarketOrders);

        var _this2 = _possibleConstructorReturn(this, (MarketOrders.__proto__ || Object.getPrototypeOf(MarketOrders)).call(this));

        _this2.state = {
            activeTab: props.activeTab,
            rowCount: 20,
            showAll: false,
            selectedOrders: []
        };
        _this2._getOrders = _this2._getOrders.bind(_this2);
        return _this2;
    }

    _createClass(MarketOrders, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol || nextProps.className !== this.props.className || nextProps.activeTab !== this.props.activeTab || nextState.activeTab !== this.state.activeTab || nextState.showAll !== this.state.showAll || nextProps.currentAccount !== this.props.currentAccount || nextState.selectedOrders !== this.state.selectedOrders || nextProps.settleOrders !== this.props.settleOrders;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!this.props.hideScrollbars) {
                this.updateContainer(1);
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevState) {
            var hideScrollbars = this.props.hideScrollbars;
            var showAll = this.state.showAll;


            if (prevState.showAll != showAll) {
                if (showAll && !hideScrollbars) {
                    this.updateContainer(2);
                } else if (!showAll && !hideScrollbars) {
                    this.updateContainer(3);
                } else if (showAll && hideScrollbars) {
                    this.updateContainer(1);
                } else {
                    this.updateContainer(0);
                }
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.activeTab !== this.state.activeTab) {
                this.changeTab(nextProps.activeTab);
            }

            // Reset on Market Switch
            if (nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol) {
                this.setState({ showAll: false });
                this.updateContainer(0);

                if (!this.props.hideScrollbars) {
                    this.updateContainer(1);
                }
            }

            // Reset on hideScrollbars switch
            if (nextProps.hideScrollbars !== this.props.hideScrollbars) {
                this.updateContainer(0);

                if (!nextProps.hideScrollbars) {
                    this.updateContainer(1);
                }
            }
        }

        /***
         * Update PS Container
         * type:int [0:destroy, 1:init, 2:update, 3:update w/ scrollTop] (default: 2)
         */

    }, {
        key: "updateContainer",
        value: function updateContainer() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

            var containerNode = this.refs.view.refs.container;
            var containerTransition = this.refs.contentTransition;

            if (!containerNode) return;

            if (type == 0) {
                containerNode.scrollTop = 0;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.destroy(containerNode);
            } else if (type == 1) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.initialize(containerNode);
                this.updateContainer(3);
            } else if (type == 2) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.update(containerNode);
            } else if (type == 3) {
                containerNode.scrollTop = 0;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a.update(containerNode);
            }

            if (containerTransition) {
                containerTransition.resetAnimation();
            }
        }
    }, {
        key: "_onSetShowAll",
        value: function _onSetShowAll() {
            this.setState({
                showAll: !this.state.showAll
            });
        }
    }, {
        key: "changeTab",
        value: function changeTab(tab) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeViewSetting({
                ordersTab: tab
            });
            this.setState({
                activeTab: tab
            });

            // Ensure that focus goes back to top of scrollable container when tab is changed
            this.updateContainer(3);

            setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a.rebuild, 1000);
        }
    }, {
        key: "onCheckCancel",
        value: function onCheckCancel(orderId, evt) {
            var selectedOrders = this.state.selectedOrders;

            var checked = evt.target.checked;

            if (checked) {
                this.setState({ selectedOrders: selectedOrders.concat([orderId]) });
            } else {
                var index = selectedOrders.indexOf(orderId);

                if (index > -1) {
                    this.setState({
                        selectedOrders: selectedOrders.slice(0, index).concat(selectedOrders.slice(index + 1))
                    });
                }
            }
        }
    }, {
        key: "cancelSelected",
        value: function cancelSelected() {
            this._cancelLimitOrders.call(this);
        }
    }, {
        key: "resetSelected",
        value: function resetSelected() {
            this.setState({ selectedOrders: [] });
        }
    }, {
        key: "onCancelToggle",
        value: function onCancelToggle(evt) {
            var orders = this._getOrders();
            var selectedOrders = [];

            orders.forEach(function (order) {
                selectedOrders.push(order.id);
            });

            if (evt.target.checked) {
                this.setState({ selectedOrders: selectedOrders });
            } else {
                this.resetSelected();
            }
        }
    }, {
        key: "_cancelLimitOrders",
        value: function _cancelLimitOrders() {
            var _this3 = this;

            actions_MarketsActions__WEBPACK_IMPORTED_MODULE_4__["default"].cancelLimitOrders(this.props.currentAccount.get("id"), this.state.selectedOrders).then(function () {
                _this3.resetSelected();
            }).catch(function (err) {
                console.log("cancel orders error:", err);
            });
        }
    }, {
        key: "_getOrders",
        value: function _getOrders() {
            var _assets;

            var _props2 = this.props,
                currentAccount = _props2.currentAccount,
                base = _props2.base,
                quote = _props2.quote,
                feedPrice = _props2.feedPrice;

            var orders = currentAccount.get("orders"),
                call_orders = currentAccount.get("call_orders");
            var baseID = base.get("id"),
                quoteID = quote.get("id");
            var assets = (_assets = {}, _defineProperty(_assets, base.get("id"), { precision: base.get("precision") }), _defineProperty(_assets, quote.get("id"), { precision: quote.get("precision") }), _assets);
            var limitOrders = orders.toArray().map(function (order) {
                var o = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(order);
                if (!o) return null;
                var sellBase = o.getIn(["sell_price", "base", "asset_id"]),
                    sellQuote = o.getIn(["sell_price", "quote", "asset_id"]);
                if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
                    return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["LimitOrder"](o.toJS(), assets, quote.get("id"));
                }
            }).filter(function (a) {
                return !!a;
            });

            var callOrders = call_orders.toArray().map(function (order) {
                try {
                    var o = bitsharesjs__WEBPACK_IMPORTED_MODULE_8__["ChainStore"].getObject(order);
                    if (!o) return null;
                    var sellBase = o.getIn(["call_price", "base", "asset_id"]),
                        sellQuote = o.getIn(["call_price", "quote", "asset_id"]);
                    if (sellBase === baseID && sellQuote === quoteID || sellBase === quoteID && sellQuote === baseID) {
                        return feedPrice ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["CallOrder"](o.toJS(), assets, quote.get("id"), feedPrice) : null;
                    }
                } catch (e) {
                    return null;
                }
            }).filter(function (a) {
                return !!a;
            }).filter(function (a) {
                try {
                    return a.isMarginCalled();
                } catch (err) {
                    return false;
                }
            });
            return limitOrders.concat(callOrders);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props3 = this.props,
                base = _props3.base,
                quote = _props3.quote,
                quoteSymbol = _props3.quoteSymbol,
                baseSymbol = _props3.baseSymbol,
                settleOrders = _props3.settleOrders;
            var _state = this.state,
                activeTab = _state.activeTab,
                showAll = _state.showAll,
                rowCount = _state.rowCount,
                selectedOrders = _state.selectedOrders;


            if (!base || !quote) return null;

            var contentContainer = void 0;
            var footerContainer = void 0;

            /* Users Open Orders Tab (default) */
            var totalRows = 0;

            // User Orders
            if (!activeTab || activeTab == "my_orders") {
                var orders = this._getOrders();

                var bids = orders.filter(function (a) {
                    return a.isBid();
                }).sort(function (a, b) {
                    return b.getPrice() - a.getPrice();
                }).map(function (order) {
                    var price = order.getPrice();
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarketOrdersRow, {
                        price: price,
                        key: order.id,
                        order: order,
                        base: base,
                        quote: quote,
                        selected: _this4.state.selectedOrders.length > 0 && _this4.state.selectedOrders.includes(order.id),
                        onCancel: _this4.props.onCancel.bind(_this4, order.id),
                        onCheckCancel: _this4.onCheckCancel.bind(_this4, order.id)
                    });
                });

                var asks = orders.filter(function (a) {
                    return !a.isBid();
                }).sort(function (a, b) {
                    return a.getPrice() - b.getPrice();
                }).map(function (order) {
                    var price = order.getPrice();
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarketOrdersRow, {
                        price: price,
                        key: order.id,
                        order: order,
                        base: base,
                        quote: quote,
                        selected: _this4.state.selectedOrders.length > 0 && _this4.state.selectedOrders.includes(order.id),
                        onCancel: _this4.props.onCancel.bind(_this4, order.id),
                        onCheckCancel: _this4.onCheckCancel.bind(_this4, order.id)
                    });
                });

                var rows = [];

                if (asks.length) {
                    rows = rows.concat(asks);
                }

                if (bids.length) {
                    rows = rows.concat(bids);
                }

                rows.sort(function (a, b) {
                    return a.props.price - b.props.price;
                });

                totalRows = rows.length;

                if (totalRows > 0 && !showAll) {
                    rows.splice(rowCount, rows.length);
                }

                var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: {
                                textAlign: "center",
                                lineHeight: 4,
                                fontStyle: "italic"
                            },
                            colSpan: "5"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "account.no_orders" })
                    )
                );

                var cancelOrderButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { style: { display: "grid" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Button"],
                        { onClick: this.cancelSelected.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, { content: "exchange.cancel_selected_orders" })
                    )
                );

                contentContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_6__["default"],
                    {
                        ref: "contentTransition",
                        component: "tbody",
                        transitionName: "newrow"
                    },
                    rows.length ? rows : emptyRow
                );

                footerContainer = totalRows > 11 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "orderbook-showall" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { onClick: this._onSetShowAll.bind(this) },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                                content: showAll ? "exchange.hide" : "exchange.show_all_orders",
                                rowcount: totalRows
                            })
                        )
                    ),
                    selectedOrders.length > 0 ? cancelOrderButton : null
                ) : selectedOrders.length > 0 ? cancelOrderButton : null;
            }

            // Open Settle Orders
            if (activeTab && activeTab == "open_settlement") {
                totalRows = settleOrders.length;

                if (totalRows > 0 && !showAll) {
                    settleOrders.splice(rowCount, settleOrders.length);
                }

                contentContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenSettleOrders__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    key: "settle_orders",
                    orders: settleOrders,
                    base: base,
                    quote: quote,
                    baseSymbol: baseSymbol,
                    quoteSymbol: quoteSymbol
                });

                footerContainer = totalRows > 11 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "orderbook-showall" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        { onClick: this._onSetShowAll.bind(this) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
                            content: showAll ? "exchange.hide" : "exchange.show_all_orders",
                            rowcount: totalRows
                        })
                    )
                );
            }

            var isSelected = this.state.selectedOrders.length > 0 && this.state.selectedOrders.length == totalRows;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_View_MarketOrdersView__WEBPACK_IMPORTED_MODULE_12__["MarketsOrderView"], {
                ref: "view"
                // Styles and Classes
                , style: this.props.style,
                className: this.props.className,
                innerClass: this.props.innerClass,
                innerStyle: this.props.innerStyle,
                headerStyle: this.props.headerStyle
                // Bools
                , noHeader: this.props.noHeader,
                isSelected: isSelected,
                tinyScreen: this.props.tinyScreen
                // Strings
                , activeTab: activeTab,
                baseSymbol: baseSymbol,
                quoteSymbol: quoteSymbol
                // Containers
                , contentContainer: contentContainer,
                footerContainer: footerContainer
                // Functions
                , onCancelToggle: this.onCancelToggle.bind(this)
            });
        }
    }]);

    return MarketOrders;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketOrders.defaultProps = {
    base: {},
    quote: {},
    orders: {},
    quoteSymbol: "",
    baseSymbol: ""
};

MarketOrders.propTypes = {
    base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quoteSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    baseSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};



/***/ }),

/***/ 2807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2139);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2808);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2809);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var TableHeader = function (_React$Component) {
    _inherits(TableHeader, _React$Component);

    function TableHeader() {
        _classCallCheck(this, TableHeader);

        return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
    }

    _createClass(TableHeader, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                baseSymbol = _props.baseSymbol,
                quoteSymbol = _props.quoteSymbol;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "thead",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.price" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            "(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: baseSymbol }),
                            "/",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: quoteSymbol }),
                            ")"
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transfer.amount" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        quoteSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "header-sub-title" },
                            "(",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_4__["default"], { name: quoteSymbol }),
                            ")"
                        ) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "th",
                        { style: { textAlign: "right" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "transaction.settlement_date" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                style: { visibility: "hidden" },
                                className: "header-sub-title"
                            },
                            "d"
                        )
                    )
                )
            );
        }
    }]);

    return TableHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TableHeader.defaultProps = {
    quoteSymbol: null,
    baseSymbol: null
};

var SettleOrderRow = function (_React$Component2) {
    _inherits(SettleOrderRow, _React$Component2);

    function SettleOrderRow() {
        _classCallCheck(this, SettleOrderRow);

        return _possibleConstructorReturn(this, (SettleOrderRow.__proto__ || Object.getPrototypeOf(SettleOrderRow)).apply(this, arguments));
    }

    _createClass(SettleOrderRow, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                base = _props2.base,
                quote = _props2.quote,
                order = _props2.order,
                showSymbols = _props2.showSymbols;


            var price = base.get("id") == "1.3.0" ? order.getPrice() / (1 + order.offset_percent / 10000) : order.getPrice() * (1 + order.offset_percent / 10000);
            var amountSymbol = showSymbols ? " " + quote.get("symbol") : null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    { className: "text-center", style: { width: "6%" } },
                    " "
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(price, quote.get("precision")),
                    " ",
                    amountSymbol
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!order.isBid() ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!order.isBid() ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Tooltip"],
                        { title: new Date(order.settlement_date).toString() },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { style: { textAlign: "right", whiteSpace: "nowrap" } },
                            counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.localize(new Date(order.settlement_date), {
                                type: "date",
                                format: browser_locale__WEBPACK_IMPORTED_MODULE_6___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history"
                            })
                        )
                    )
                )
            );
        }
    }]);

    return SettleOrderRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SettleOrderRow.defaultProps = {
    showSymbols: false,
    invert: false
};

var OpenSettleOrders = function (_React$Component3) {
    _inherits(OpenSettleOrders, _React$Component3);

    function OpenSettleOrders() {
        _classCallCheck(this, OpenSettleOrders);

        return _possibleConstructorReturn(this, (OpenSettleOrders.__proto__ || Object.getPrototypeOf(OpenSettleOrders)).apply(this, arguments));
    }

    _createClass(OpenSettleOrders, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.currentAccount !== this.props.currentAccount || nextProps.orders !== this.props.orders;
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                orders = _props3.orders,
                base = _props3.base,
                quote = _props3.quote;


            var activeOrders = null;

            var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tbody",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        {
                            style: {
                                textAlign: "center",
                                lineHeight: 4,
                                fontStyle: "italic"
                            },
                            colSpan: "5"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "account.no_orders" })
                    )
                )
            );

            if (orders.size > 0 && base && quote) {
                activeOrders = orders.sort(function (a, b) {
                    return a.isBefore(b) ? -1 : 1;
                }).map(function (order) {
                    return Date.now() < order.settlement_date ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettleOrderRow, {
                        key: order.id,
                        order: order,
                        base: base,
                        quote: quote
                    }) : null;
                }).toArray();
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_7__["default"],
                {
                    ref: "contentTransition",
                    component: "tbody",
                    transitionName: "newrow"
                },
                activeOrders ? activeOrders : emptyRow
            );
        }
    }]);

    return OpenSettleOrders;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

OpenSettleOrders.defaultProps = {
    base: {},
    quote: {},
    orders: {},
    quoteSymbol: "",
    baseSymbol: ""
};

OpenSettleOrders.propTypes = {
    base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    quoteSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    baseSymbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (OpenSettleOrders);

/***/ }),

/***/ 2823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsOrderView", function() { return MarketsOrderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketOrdersRowView", function() { return MarketOrdersRowView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2793);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2139);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var rightAlign = { textAlign: "right" };


function MarketOrdersViewTableHeader(_ref) {
    var baseSymbol = _ref.baseSymbol,
        quoteSymbol = _ref.quoteSymbol,
        selected = _ref.selected,
        onCancelToggle = _ref.onCancelToggle;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "thead",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "tr",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "th",
                { style: { width: "6%", textAlign: "center" } },
                onCancelToggle ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.cancel_order_select_all"),
                        placement: "left"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
                        className: "order-cancel-toggle",
                        checked: selected,
                        onChange: onCancelToggle
                    })
                ) : null
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "th",
                { style: rightAlign },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    className: "header-sub-title",
                    content: "exchange.price"
                })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "th",
                { style: rightAlign },
                baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "header-sub-title" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__["default"], { dataPlace: "top", name: quoteSymbol })
                ) : null
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "th",
                { style: rightAlign },
                baseSymbol ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "header-sub-title" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__["default"], { dataPlace: "top", name: baseSymbol })
                ) : null
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "th",
                { style: rightAlign },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    className: "header-sub-title",
                    content: "transaction.expiration"
                })
            )
        )
    );
}

MarketOrdersViewTableHeader.defaultProps = {
    quoteSymbol: null,
    baseSymbol: null
};

function MarketOrdersRowView(_ref2) {
    var order = _ref2.order,
        selected = _ref2.selected,
        base = _ref2.base,
        quote = _ref2.quote,
        onCheckCancel = _ref2.onCheckCancel;

    var isBid = order.isBid();
    var isCall = order.isCall();
    var tdClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "tr",
        { key: order.id },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "td",
            { className: "text-center", style: { width: "6%" } },
            isCall ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
                className: "orderCancel",
                checked: selected,
                onChange: onCheckCancel
            })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "td",
            { className: tdClass, style: { paddingLeft: 10 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_4__["default"], { price: order.getPrice(), base: base, quote: quote })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "td",
            null,
            common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), quote.get("precision")),
            " "
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "td",
            null,
            common_utils__WEBPACK_IMPORTED_MODULE_2__["default"].format_number(order[!isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), base.get("precision")),
            " "
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "td",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_6__["Tooltip"],
                { title: order.expiration.toLocaleString() },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        style: {
                            textAlign: "right",
                            whiteSpace: "nowrap"
                        }
                    },
                    isCall ? null : counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(new Date(order.expiration), {
                        type: "date",
                        format: "short_custom"
                    })
                )
            )
        )
    );
}

var MarketsOrderView = function (_React$Component) {
    _inherits(MarketsOrderView, _React$Component);

    function MarketsOrderView() {
        _classCallCheck(this, MarketsOrderView);

        return _possibleConstructorReturn(this, (MarketsOrderView.__proto__ || Object.getPrototypeOf(MarketsOrderView)).apply(this, arguments));
    }

    _createClass(MarketsOrderView, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                style = _props.style,
                className = _props.className,
                innerClass = _props.innerClass,
                innerStyle = _props.innerStyle,
                headerStyle = _props.headerStyle,
                noHeader = _props.noHeader,
                isSelected = _props.isSelected,
                tinyScreen = _props.tinyScreen,
                activeTab = _props.activeTab,
                baseSymbol = _props.baseSymbol,
                quoteSymbol = _props.quoteSymbol,
                contentContainer = _props.contentContainer,
                footerContainer = _props.footerContainer,
                onCancelToggle = _props.onCancelToggle;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { style: style, key: "open_orders", className: className },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: innerClass, style: innerStyle },
                    noHeader ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: headerStyle,
                            className: "exchange-content-header"
                        },
                        activeTab == "my_orders" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.my_orders" }) : null,
                        activeTab == "open_settlement" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settle_orders" }) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink left-orderbook-header market-right-padding-only" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table text-right fixed-table market-right-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MarketOrdersViewTableHeader, {
                                baseSymbol: baseSymbol,
                                quoteSymbol: quoteSymbol,
                                selected: isSelected,
                                onCancelToggle: activeTab == "my_orders" ? onCancelToggle : null
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "table-container grid-block market-right-padding-only no-overflow",
                            ref: "container",
                            style: {
                                overflow: "hidden",
                                minHeight: tinyScreen ? 260 : 0,
                                maxHeight: 260,
                                lineHeight: "13px"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table table-highlight-hover table-hover no-stripes text-right fixed-table market-right-padding" },
                            contentContainer
                        )
                    ),
                    footerContainer
                )
            );
        }
    }]);

    return MarketsOrderView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 2824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBook", function() { return OrderBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupOrderLimitSelector", function() { return GroupOrderLimitSelector; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(749);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2825);
/* harmony import */ var react_sticky_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sticky_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2771);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(580);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(735);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2793);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2809);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2139);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1903);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















/**
 * @array: orderRows
 * @bool: noOrders
 * @bool: isBid
 */

var OrderRows = function (_React$Component) {
    _inherits(OrderRows, _React$Component);

    function OrderRows() {
        _classCallCheck(this, OrderRows);

        return _possibleConstructorReturn(this, (OrderRows.__proto__ || Object.getPrototypeOf(OrderRows)).apply(this, arguments));
    }

    _createClass(OrderRows, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                orderRows = _props.orderRows,
                noOrders = _props.noOrders,
                isBid = _props.isBid,
                id = _props.id;

            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_10__["default"],
                {
                    id: id,
                    ref: isBid ? "bidTransition" : "askTransaction",
                    className: "transition-container clickable",
                    component: "div",
                    transitionName: "newrow"
                },
                orderRows.length > 0 ? orderRows : noOrders || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "sticky-table-row" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "td",
                        { className: "cell no-orders", colSpan: "3" },
                        isBid ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.no_bids" }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.no_asks" })
                    )
                )
            );
        }
    }]);

    return OrderRows;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

OrderRows.propTypes = {
    orderRows: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
    noOrders: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
    isBid: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired
};

var OrderBookRowVertical = function (_React$Component2) {
    _inherits(OrderBookRowVertical, _React$Component2);

    function OrderBookRowVertical() {
        _classCallCheck(this, OrderBookRowVertical);

        return _possibleConstructorReturn(this, (OrderBookRowVertical.__proto__ || Object.getPrototypeOf(OrderBookRowVertical)).apply(this, arguments));
    }

    _createClass(OrderBookRowVertical, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.order.market_base !== this.props.order.market_base) return false;
            return np.order.ne(this.props.order) || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount || np.isPanelActive !== this.props.isPanelActive || np.horizontal !== this.props.horizontal;
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                order = _props2.order,
                quote = _props2.quote,
                base = _props2.base,
                final = _props2.final;

            var isBid = order.isBid();
            var isCall = order.isCall();
            var integerClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_9__["default"], { price: order.getPrice(), quote: quote, base: base });
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                "div",
                {
                    onClick: this.props.onClick,
                    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("sticky-table-row order-row", { "final-row": final }, { "my-order": order.isMine(this.props.currentAccount) })
                },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "cell left" },
                    common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), base.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "cell" },
                    common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), quote.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "cell " + integerClass + " right" },
                    price
                )
            );
        }
    }]);

    return OrderBookRowVertical;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var elemHeight = function elemHeight(elem) {
    return elem ? elem.getBoundingClientRect().height : 0;
};

var OrderBookRowHorizontal = function (_React$Component3) {
    _inherits(OrderBookRowHorizontal, _React$Component3);

    function OrderBookRowHorizontal() {
        _classCallCheck(this, OrderBookRowHorizontal);

        return _possibleConstructorReturn(this, (OrderBookRowHorizontal.__proto__ || Object.getPrototypeOf(OrderBookRowHorizontal)).apply(this, arguments));
    }

    _createClass(OrderBookRowHorizontal, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return np.order.ne(this.props.order) || np.position !== this.props.position || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount || np.quoteTotal !== this.props.quoteTotal;
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                order = _props3.order,
                quote = _props3.quote,
                base = _props3.base,
                position = _props3.position,
                quoteTotal = _props3.quoteTotal;

            var isBid = order.isBid();
            var isCall = order.isCall();

            var integerClass = isCall ? "orderHistoryCall" : isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_9__["default"], { price: order.getPrice(), quote: quote, base: base });
            var amount = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order.amountToReceive().getAmount({ real: true }), quote.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order.amountForSale().getAmount({ real: true }), quote.get("precision"));
            var value = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order.amountForSale().getAmount({ real: true }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order.amountToReceive().getAmount({ real: true }), base.get("precision"));
            var totalValueBids = quoteTotal ? order.totalToReceive() : order.totalForSale();
            var totalValueAsks = quoteTotal ? order.totalForSale() : order.totalToReceive();
            var totalAsset = quoteTotal ? quote : base;
            var total = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(totalValueBids.getAmount({ real: true }), totalAsset.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(totalValueAsks.getAmount({ real: true }), totalAsset.get("precision"));

            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                "tr",
                {
                    onClick: this.props.onClick,
                    className: order.isMine(this.props.currentAccount) ? "my-order" : ""
                },
                position === "left" ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    { className: "column-hide-xs" },
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? value : amount
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? amount : value
                ),
                position === "right" ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    { className: "column-hide-xs" },
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                )
            );
        }
    }]);

    return OrderBookRowHorizontal;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var GroupedOrderBookRowVertical = function (_React$Component4) {
    _inherits(GroupedOrderBookRowVertical, _React$Component4);

    function GroupedOrderBookRowVertical() {
        _classCallCheck(this, GroupedOrderBookRowVertical);

        return _possibleConstructorReturn(this, (GroupedOrderBookRowVertical.__proto__ || Object.getPrototypeOf(GroupedOrderBookRowVertical)).apply(this, arguments));
    }

    _createClass(GroupedOrderBookRowVertical, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.order.market_base !== this.props.order.market_base) return false;
            return np.order.ne(this.props.order) || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount;
        }
    }, {
        key: "render",
        value: function render() {
            var _props4 = this.props,
                order = _props4.order,
                quote = _props4.quote,
                base = _props4.base,
                final = _props4.final;

            var isBid = order.isBid();
            var integerClass = isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_9__["default"], { price: order.getPrice(), quote: quote, base: base });
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                "div",
                {
                    onClick: this.props.onClick,
                    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("sticky-table-row order-row", {
                        "final-row": final
                    })
                },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "cell left" },
                    common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order[isBid ? "amountForSale" : "amountToReceive"]().getAmount({ real: true }), base.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "cell" },
                    common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order[isBid ? "amountToReceive" : "amountForSale"]().getAmount({ real: true }), quote.get("precision"))
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "cell " + integerClass + " right" },
                    price
                )
            );
        }
    }]);

    return GroupedOrderBookRowVertical;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var GroupedOrderBookRowHorizontal = function (_React$Component5) {
    _inherits(GroupedOrderBookRowHorizontal, _React$Component5);

    function GroupedOrderBookRowHorizontal() {
        _classCallCheck(this, GroupedOrderBookRowHorizontal);

        return _possibleConstructorReturn(this, (GroupedOrderBookRowHorizontal.__proto__ || Object.getPrototypeOf(GroupedOrderBookRowHorizontal)).apply(this, arguments));
    }

    _createClass(GroupedOrderBookRowHorizontal, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            return np.order.ne(this.props.order) || np.position !== this.props.position || np.index !== this.props.index || np.currentAccount !== this.props.currentAccount || np.quoteTotal !== this.props.quoteTotal;
        }
    }, {
        key: "render",
        value: function render() {
            var _props5 = this.props,
                order = _props5.order,
                quote = _props5.quote,
                base = _props5.base,
                position = _props5.position,
                quoteTotal = _props5.quoteTotal;

            var isBid = order.isBid();

            var integerClass = isBid ? "orderHistoryBid" : "orderHistoryAsk";

            var price = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_9__["default"], { price: order.getPrice(), quote: quote, base: base });
            var amount = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order.amountToReceive().getAmount({ real: true }), quote.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order.amountForSale().getAmount({ real: true }), quote.get("precision"));
            var value = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order.amountForSale().getAmount({ real: true }), base.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(order.amountToReceive().getAmount({ real: true }), base.get("precision"));
            var totalValueBids = quoteTotal ? order.totalToReceive() : order.totalForSale();
            var totalValueAsks = quoteTotal ? order.totalForSale() : order.totalToReceive();
            var totalAsset = quoteTotal ? quote : base;
            var total = isBid ? common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(totalValueBids.getAmount({ real: true }), totalAsset.get("precision")) : common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(totalValueAsks.getAmount({ real: true }), totalAsset.get("precision"));

            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                "tr",
                { onClick: this.props.onClick },
                position === "left" ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    { className: "column-hide-xs" },
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? value : amount
                ),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    null,
                    position === "left" ? amount : value
                ),
                position === "right" ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    { className: "column-hide-xs" },
                    total
                ) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "td",
                    { style: { width: "25%" }, className: integerClass },
                    price
                )
            );
        }
    }]);

    return GroupedOrderBookRowHorizontal;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var GroupOrderLimitSelector = function (_React$Component6) {
    _inherits(GroupOrderLimitSelector, _React$Component6);

    function GroupOrderLimitSelector() {
        _classCallCheck(this, GroupOrderLimitSelector);

        var _this6 = _possibleConstructorReturn(this, (GroupOrderLimitSelector.__proto__ || Object.getPrototypeOf(GroupOrderLimitSelector)).call(this));

        _this6.state = {
            groupLimit: ""
        };
        return _this6;
    }

    _createClass(GroupOrderLimitSelector, [{
        key: "render",
        value: function render() {
            var _this7 = this;

            var noGroupsAvailable = this.props.trackedGroupsConfig.length === 0;
            var trackedGroupsOptionsList = this.props.trackedGroupsConfig.map(function (key) {
                return _this7.props.globalSettingsSelector ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Select"].Option,
                    { value: key, key: key },
                    key / 100 + "%"
                ) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "option",
                    { value: key, key: key },
                    key / 100 + "%"
                );
            });

            if (this.props.globalSettingsSelector) {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Select"],
                    {
                        placeholder: "Select option",
                        style: { width: "100%" },
                        value: this.props.currentGroupOrderLimit,
                        disabled: noGroupsAvailable,
                        onChange: this.props.handleGroupOrderLimitChange.bind(this)
                    },
                    noGroupsAvailable ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Select"].Option,
                        { value: 0 },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "tooltip.no_groups_available" })
                    ) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Select"].Option,
                        { value: 0 },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "settings.disabled" })
                    ),
                    trackedGroupsOptionsList
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_13__["Tooltip"],
                    {
                        placement: "bottom",
                        title: noGroupsAvailable ? counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("tooltip.no_groups_available") : null
                    },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "select",
                        {
                            value: this.state.groupLimit,
                            onChange: this.props.handleGroupOrderLimitChange,
                            className: "settings-select",
                            style: noGroupsAvailable ? { cursor: "not-allowed" } : null
                        },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                            content: "exchange.group_order_limit",
                            component: "option",
                            value: "0"
                        }),
                        trackedGroupsOptionsList
                    )
                );
            }
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props) {
            return { groupLimit: props.currentGroupOrderLimit };
        }
    }]);

    return GroupOrderLimitSelector;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var OrderBook = function (_React$Component7) {
    _inherits(OrderBook, _React$Component7);

    function OrderBook(props) {
        _classCallCheck(this, OrderBook);

        var _this8 = _possibleConstructorReturn(this, (OrderBook.__proto__ || Object.getPrototypeOf(OrderBook)).call(this));

        _this8.queryStickyTable = function (query) {
            return _this8.verticalStickyTable.current.table.querySelector(query);
        };

        _this8.verticalScrollBar = function () {
            return _this8.queryStickyTable("#y-scrollbar");
        };

        _this8.toggleSpreadValue = function () {
            _this8.setState({
                displaySpreadAsPercentage: !_this8.state.displaySpreadAsPercentage
            });
        };

        _this8.toggleAutoScroll = function () {
            _this8.setState({ autoScroll: !_this8.state.autoScroll });
        };

        _this8.state = {
            flip: props.flipOrderBook,
            showAllBids: false,
            showAllAsks: false,
            rowCount: 20,
            autoScroll: props.autoScroll,
            quoteTotalBids: false,
            quoteTotalAsks: false
        };
        _this8.verticalStickyTable = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
        _this8.centerText = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
        return _this8;
    }

    _createClass(OrderBook, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.horizontal && this.props.hideScrollbars && nextState.showAllAsks != this.state.showAllAsks) {
                var asksContainer = this.refs.hor_asks;
                if (!nextState.showAllAsks) {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.destroy(asksContainer);
                } else {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.initialize(asksContainer);
                    this.psUpdate();
                }
                this.refs.askTransition.resetAnimation();
                if (this.refs.hor_asks) this.refs.hor_asks.scrollTop = 0;
            }

            if (this.props.horizontal && this.props.hideScrollbars && nextState.showAllBids != this.state.showAllBids) {
                var bidsContainer = this.refs.hor_bids;
                if (!nextState.showAllBids) {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.destroy(bidsContainer);
                } else {
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.initialize(bidsContainer);
                    this.psUpdate();
                }
                this.refs.bidTransition.resetAnimation();
                if (this.refs.hor_bids) this.refs.hor_bids.scrollTop = 0;
            }

            // if (!nextProps.marketReady) return false;
            return true;
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState, snapshot) {
            var nextProps = this.props;
            // Change of market or direction
            if (nextProps.base.get("id") !== prevProps.base.get("id") || nextProps.quote.get("id") !== prevProps.quote.get("id")) {
                if (this.refs.askTransition) {
                    this.refs.askTransition.resetAnimation();
                    if (this.refs.hor_asks) this.refs.hor_asks.scrollTop = 0;
                    if (this.refs.hor_bids) this.refs.hor_bids.scrollTop = 0;
                }

                if (this.refs.bidTransition) {
                    this.refs.bidTransition.resetAnimation();
                }

                if (this.refs.vert_bids) this.refs.vert_bids.scrollTop = 0;

                if (!this.props.horizontal) {
                    this.setState({ autoScroll: this.state.autoScroll });
                }
            }

            var bidsContainer = this.refs.hor_bids;
            var asksContainer = this.refs.hor_asks;

            if (this.props.horizontal && nextProps.hideScrollbars !== this.props.hideScrollbars && nextProps.hideScrollbars) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.destroy(bidsContainer);
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.destroy(asksContainer);
            }

            if (this.props.horizontal && nextProps.hideScrollbars !== this.props.hideScrollbars && !nextProps.hideScrollbars) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.initialize(bidsContainer);
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.initialize(asksContainer);
                this.refs.askTransition.resetAnimation();
                this.refs.bidTransition.resetAnimation();
                if (asksContainer) asksContainer.scrollTop = 0;
                if (bidsContainer) bidsContainer.scrollTop = 0;
                this.psUpdate();
            }

            this.centerVerticalScrollBar();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!this.props.horizontal) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.initialize(this.verticalScrollBar());
            } else {
                if (!this.props.hideScrollbars) {
                    var bidsContainer = this.refs.hor_bids;
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.initialize(bidsContainer);
                    var asksContainer = this.refs.hor_asks;
                    perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.initialize(asksContainer);
                }
            }
        }
    }, {
        key: "centerVerticalScrollBar",
        value: function centerVerticalScrollBar() {
            if (!this.props.horizontal && this.state.autoScroll) {
                // Center vertical scroll bar
                var scrollableContainer = this.queryStickyTable("#sticky-table-y-wrapper");
                var header = this.queryStickyTable("#sticky-table-header");
                var centerTextContainer = this.centerText.current;
                var singleRowHeight = elemHeight(this.queryStickyTable(".order-row"));

                var rows = this.props.currentGroupOrderLimit !== 0 ? !this.props.orderBookReversed ? this.props.groupedAsks : this.props.groupedBids : !this.props.orderBookReversed ? this.props.combinedAsks : this.props.combinedBids;

                var rowsHeight = rows.length * singleRowHeight;

                var scrollableContainerHeight = elemHeight(scrollableContainer) - elemHeight(header);

                var scrollTo = rowsHeight + elemHeight(centerTextContainer) / 2 - scrollableContainerHeight / 2;

                scrollableContainer.scrollTop = scrollTo;
            }
        }
    }, {
        key: "psUpdate",
        value: function psUpdate() {
            if (!this.props.horizontal) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.update(this.verticalScrollBar());
            } else {
                var bidsContainer = this.refs.hor_bids;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.update(bidsContainer);
                var asksContainer = this.refs.hor_asks;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a.update(asksContainer);
            }
        }

        /***
         * Sets status to show full order book by asks or bids
         * @string: type
         */

    }, {
        key: "_onSetShowAll",
        value: function _onSetShowAll(type) {
            if (type === "asks") {
                this.setState({
                    showAllAsks: !this.state.showAllAsks
                });

                if (this.state.showAllAsks) {
                    this.refs.hor_asks.scrollTop = 0;
                }
            } else {
                this.setState({
                    showAllBids: !this.state.showAllBids
                });

                if (this.state.showAllBids) {
                    this.refs.hor_bids.scrollTop = 0;
                }
            }
        }

        /***
         * Toggle spread value to view real value or percentage in spread
         * Vertical order book only
         */


        /***
         * Toggle auto scroll to lock/unlock auto centering
         * Vertical order book only
         */

    }, {
        key: "toggleTotalAsset",
        value: function toggleTotalAsset(isBid) {
            var quoteTotal = isBid ? "quoteTotalBids" : "quoteTotalAsks";
            this.setState(_defineProperty({}, quoteTotal, !this.state[quoteTotal]));
        }
    }, {
        key: "render",
        value: function render() {
            var _this9 = this;

            var _props6 = this.props,
                combinedBids = _props6.combinedBids,
                combinedAsks = _props6.combinedAsks,
                highestBid = _props6.highestBid,
                lowestAsk = _props6.lowestAsk,
                quote = _props6.quote,
                base = _props6.base,
                totalAsks = _props6.totalAsks,
                totalBids = _props6.totalBids,
                quoteSymbol = _props6.quoteSymbol,
                baseSymbol = _props6.baseSymbol,
                horizontal = _props6.horizontal,
                trackedGroupsConfig = _props6.trackedGroupsConfig,
                currentGroupOrderLimit = _props6.currentGroupOrderLimit,
                handleGroupOrderLimitChange = _props6.handleGroupOrderLimitChange,
                orderBookReversed = _props6.orderBookReversed,
                groupedBids = _props6.groupedBids,
                groupedAsks = _props6.groupedAsks,
                flipOrderBook = _props6.flipOrderBook;
            var _state = this.state,
                showAllAsks = _state.showAllAsks,
                showAllBids = _state.showAllBids,
                rowCount = _state.rowCount,
                displaySpreadAsPercentage = _state.displaySpreadAsPercentage;


            var noOrders = !lowestAsk.sell_price && !highestBid.sell_price;
            var hasAskAndBids = !!(lowestAsk.sell_price && highestBid.sell_price);
            var spread = hasAskAndBids && (displaySpreadAsPercentage ? (100 * (lowestAsk._real_price / highestBid._real_price - 1)).toFixed(2) + "%" : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_9__["default"], {
                price: lowestAsk._real_price - highestBid._real_price,
                base: base,
                quote: quote
            }));
            var bidRows = null,
                askRows = null;

            /* Sort */
            var tempAsks = this.props.currentGroupOrderLimit !== 0 ? groupedAsks : combinedAsks; // RED
            var tempBids = this.props.currentGroupOrderLimit !== 0 ? groupedBids : combinedBids; // GREEN

            if (!horizontal && !orderBookReversed) {
                tempBids.sort(function (a, b) {
                    return b.getPrice() - a.getPrice();
                });
                tempAsks.sort(function (a, b) {
                    return b.getPrice() - a.getPrice();
                });
            } else if (!horizontal && orderBookReversed) {
                tempBids.sort(function (a, b) {
                    return a.getPrice() - b.getPrice();
                });
                tempAsks.sort(function (a, b) {
                    return a.getPrice() - b.getPrice();
                });
            }

            if (base && quote) {
                // limit orders or grouped orders
                if (this.props.currentGroupOrderLimit !== 0) {
                    bidRows = tempBids.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(GroupedOrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this9.props.onClick.bind(_this9, order),
                            base: base,
                            quote: quote,
                            position: !flipOrderBook ? "left" : "right",
                            currentAccount: _this9.props.currentAccount,
                            quoteTotal: _this9.state.quoteTotalBids
                        }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(GroupedOrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this9.props.onClick.bind(_this9, order),
                            base: base,
                            quote: quote,
                            final: index === 0,
                            currentAccount: _this9.props.currentAccount
                        });
                    });

                    askRows = tempAsks.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(GroupedOrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this9.props.onClick.bind(_this9, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            position: !flipOrderBook ? "right" : "left",
                            currentAccount: _this9.props.currentAccount,
                            quoteTotal: _this9.state.quoteTotalAsks
                        }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(GroupedOrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isBid() ? "_bid" : ""),
                            order: order,
                            onClick: _this9.props.onClick.bind(_this9, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            final: 0 === index,
                            currentAccount: _this9.props.currentAccount
                        });
                    });
                } else {
                    bidRows = tempBids.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this9.props.onClick.bind(_this9, order),
                            base: base,
                            quote: quote,
                            position: !flipOrderBook ? "left" : "right",
                            currentAccount: _this9.props.currentAccount,
                            quoteTotal: _this9.state.quoteTotalBids
                        }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this9.props.onClick.bind(_this9, order),
                            base: base,
                            quote: quote,
                            final: index === 0,
                            currentAccount: _this9.props.currentAccount
                        });
                    });

                    askRows = tempAsks.map(function (order, index) {
                        return horizontal ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OrderBookRowHorizontal, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this9.props.onClick.bind(_this9, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            position: !flipOrderBook ? "right" : "left",
                            currentAccount: _this9.props.currentAccount,
                            quoteTotal: _this9.state.quoteTotalAsks
                        }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OrderBookRowVertical, {
                            index: index,
                            key: order.getPrice() + (order.isCall() ? "_call" : ""),
                            order: order,
                            onClick: _this9.props.onClick.bind(_this9, order),
                            base: base,
                            quote: quote,
                            type: order.type,
                            final: 0 === index,
                            currentAccount: _this9.props.currentAccount
                        });
                    });
                }
            }

            if (this.props.horizontal) {
                var totalBidsLength = bidRows.length;
                var totalAsksLength = askRows.length;

                if (!showAllBids) {
                    bidRows.splice(rowCount, bidRows.length);
                }

                if (!showAllAsks) {
                    askRows.splice(rowCount, askRows.length);
                }

                var leftHeader = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "thead",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "tr",
                        { key: "top-header", className: "top-header" },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "th",
                            { className: "column-hide-xs" },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: "header-sub-title",
                                content: "exchange.total"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "a",
                                {
                                    onClick: function onClick() {
                                        return _this9.toggleTotalAsset(true);
                                    },
                                    className: "header-sub-title underline-title"
                                },
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    dataPlace: "top",
                                    name: !this.state.quoteTotalBids ? baseSymbol : quoteSymbol,
                                    noTip: true
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { dataPlace: "top", name: baseSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { dataPlace: "top", name: quoteSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: (flipOrderBook ? "ask-total" : "bid-total") + " header-sub-title",
                                content: "exchange.price"
                            })
                        )
                    )
                );

                var rightHeader = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "thead",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "tr",
                        { key: "top-header", className: "top-header" },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: (!flipOrderBook ? "ask-total" : "bid-total") + " header-sub-title",
                                content: "exchange.price"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { dataPlace: "top", name: quoteSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "th",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "span",
                                { className: "header-sub-title" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { dataPlace: "top", name: baseSymbol })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "th",
                            { className: "column-hide-xs" },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                className: "header-sub-title",
                                content: "exchange.total"
                            }),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "a",
                                {
                                    onClick: function onClick() {
                                        return _this9.toggleTotalAsset();
                                    },
                                    className: "header-sub-title underline-title"
                                },
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                    dataPlace: "top",
                                    name: !this.state.quoteTotalAsks ? baseSymbol : quoteSymbol,
                                    noTip: true
                                })
                            )
                        )
                    )
                );

                var wrapperClass = this.props.wrapperClass;
                var innerClass = this.props.innerClass;

                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    {
                        ref: "order_book",
                        style: { marginRight: this.props.smallScreen ? 10 : 0 },
                        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(wrapperClass)
                    },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "div",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(innerClass, flipOrderBook ? "order-1" : "order-2")
                        },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                {
                                    className: "exchange-content-header ask"
                                    //data-intro={translator.translate(
                                    //    "walkthrough.sell_orders"
                                    //)}
                                },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.asks" }),
                                flipOrderBook && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "div",
                                    { style: { display: "inline-block" } },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        "span",
                                        {
                                            onClick: this.props.onFlipOrderBook.bind(this),
                                            style: {
                                                cursor: "pointer",
                                                fontSize: "1rem",
                                                marginLeft: "4px",
                                                position: "relative",
                                                top: "-2px"
                                            },
                                            className: "flip-arrow"
                                        },
                                        " ",
                                        "\u21C6"
                                    )
                                ) : null,
                                flipOrderBook && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "div",
                                    { className: "float-right header-sub-title grouped_order" },
                                    trackedGroupsConfig ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(GroupOrderLimitSelector, {
                                        trackedGroupsConfig: trackedGroupsConfig,
                                        handleGroupOrderLimitChange: handleGroupOrderLimitChange,
                                        currentGroupOrderLimit: currentGroupOrderLimit
                                    }) : null
                                ) : null,
                                this.props.onTogglePosition && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "span",
                                    {
                                        onClick: this.props.onTogglePosition,
                                        style: {
                                            cursor: "pointer",
                                            fontSize: "1rem"
                                        },
                                        className: "flip-arrow"
                                    },
                                    " ",
                                    "\u21C5"
                                ) : null,
                                flipOrderBook && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "span",
                                    {
                                        className: "order-book-button-v",
                                        onClick: this.props.moveOrderBook
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                        name: "thumb-tack",
                                        className: "icon-14px icon-fill"
                                    })
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "div",
                                    {
                                        style: { lineHeight: "16px" },
                                        className: "header-sub-title float-right"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.market_depth" }),
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        "span",
                                        null,
                                        ": "
                                    ),
                                    common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(totalAsks, quote.get("precision")),
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        "span",
                                        null,
                                        " ",
                                        "(",
                                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: quoteSymbol }),
                                        ")"
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                { className: "market-right-padding-only" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "table",
                                    { className: "table order-table table-hover fixed-table text-right" },
                                    !flipOrderBook ? rightHeader : leftHeader
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    ref: "hor_asks",
                                    style: {
                                        paddingRight: "0.6rem",
                                        overflow: "hidden",
                                        maxHeight: 260,
                                        lineHeight: "13px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "table",
                                    {
                                        style: { paddingBottom: 5 },
                                        className: "table order-table no-stripes table-hover fixed-table text-right no-overflow"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_10__["default"],
                                        {
                                            ref: "askTransition",
                                            className: "orderbook clickable",
                                            component: "tbody",
                                            transitionName: "newrow",
                                            id: "top-order-rows"
                                        },
                                        askRows
                                    )
                                )
                            ),
                            totalAsksLength > 11 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                { className: "orderbook-showall" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "a",
                                    {
                                        onClick: this._onSetShowAll.bind(this, "asks")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        content: showAllAsks ? "exchange.hide" : "exchange.show_asks",
                                        ordercount: totalAsksLength
                                    })
                                )
                            ) : null
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        "div",
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(innerClass, flipOrderBook ? "order-2" : "order-1")
                        },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                {
                                    className: "exchange-content-header bid"
                                    //data-intro={translator.translate(
                                    //    "walkthrough.buy_orders"
                                    //)}
                                },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.bids" }),
                                !flipOrderBook && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "div",
                                    { style: { display: "inline-block" } },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        "span",
                                        {
                                            onClick: this.props.onFlipOrderBook.bind(this),
                                            style: {
                                                cursor: "pointer",
                                                fontSize: "1rem",
                                                marginLeft: "4px",
                                                position: "relative",
                                                top: "-2px"
                                            },
                                            className: "flip-arrow"
                                        },
                                        " ",
                                        "\u21C6"
                                    )
                                ) : null,
                                !flipOrderBook && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "div",
                                    { className: "float-right header-sub-title grouped_order" },
                                    trackedGroupsConfig ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(GroupOrderLimitSelector, {
                                        trackedGroupsConfig: trackedGroupsConfig,
                                        handleGroupOrderLimitChange: handleGroupOrderLimitChange,
                                        currentGroupOrderLimit: currentGroupOrderLimit
                                    }) : null
                                ) : null,
                                currentGroupOrderLimit !== 0 && this.props.hideFunctionButtons && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                    name: "grouping",
                                    className: "float-right icon-14px",
                                    title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("icons.order_grouping"),
                                    style: {
                                        marginLeft: "0.5rem"
                                    }
                                }),
                                this.props.onTogglePosition && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "span",
                                    {
                                        onClick: this.props.onTogglePosition,
                                        style: {
                                            cursor: "pointer",
                                            fontSize: "1rem"
                                        },
                                        className: "flip-arrow"
                                    },
                                    " ",
                                    "\u21C5"
                                ) : null,
                                !flipOrderBook && !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "span",
                                    {
                                        className: "order-book-button-v",
                                        onClick: this.props.moveOrderBook
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                        name: "thumb-tack",
                                        className: "icon-14px"
                                    })
                                ) : null,
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "div",
                                    {
                                        style: { lineHeight: "16px" },
                                        className: "float-right header-sub-title"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.market_depth" }),
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        "span",
                                        null,
                                        ": "
                                    ),
                                    common_utils__WEBPACK_IMPORTED_MODULE_7__["default"].format_number(totalBids, base.get("precision")),
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        "span",
                                        null,
                                        " ",
                                        "(",
                                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: baseSymbol }),
                                        ")"
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                { className: "market-right-padding-only" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "table",
                                    { className: "table order-table table-hover fixed-table text-right" },
                                    flipOrderBook ? rightHeader : leftHeader
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                {
                                    className: "grid-block",
                                    ref: "hor_bids",
                                    style: {
                                        paddingRight: "0.6rem",
                                        overflow: "hidden",
                                        maxHeight: 260,
                                        lineHeight: "13px"
                                    }
                                },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "table",
                                    {
                                        style: { paddingBottom: 5 },
                                        className: "table order-table no-stripes table-hover fixed-table text-right no-overflow"
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_10__["default"],
                                        {
                                            ref: "bidTransition",
                                            className: "orderbook clickable",
                                            component: "tbody",
                                            transitionName: "newrow"
                                        },
                                        bidRows
                                    )
                                )
                            ),
                            totalBidsLength > rowCount ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                { className: "orderbook-showall" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "a",
                                    {
                                        onClick: this._onSetShowAll.bind(this, "bids")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        content: showAllBids ? "exchange.hide" : "exchange.show_bids",
                                        ordercount: totalBidsLength
                                    })
                                )
                            ) : null
                        )
                    )
                );
            } else {
                // Vertical orderbook
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    "div",
                    { className: "order-table-container" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                        react_sticky_table__WEBPACK_IMPORTED_MODULE_2__["StickyTable"],
                        {
                            stickyColumnCount: 0,
                            className: "order-table table",
                            ref: this.verticalStickyTable
                        },
                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "div",
                            { className: "sticky-table-row top-header" },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                { className: "cell header-cell left" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "span",
                                    { className: "header-sub-title" },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: baseSymbol })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                { className: "cell header-cell" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "span",
                                    { className: "header-sub-title" },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_11__["default"], { name: quoteSymbol })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                { className: "cell header-cell right" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                    className: "header-sub-title",
                                    content: "exchange.price"
                                })
                            )
                        ),
                        orderBookReversed ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OrderRows, {
                            id: "top-order-rows",
                            noOrders: noOrders,
                            orderRows: bidRows,
                            isBid: true
                        }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OrderRows, {
                            id: "top-order-rows",
                            noOrders: noOrders,
                            orderRows: askRows,
                            isBid: false
                        }),
                        noOrders ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "div",
                            {
                                className: "sticky-table-row",
                                ref: this.centerText
                            },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "cell" }),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                { className: "cell no-orders padtop" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "exchange.no_orders" })
                            )
                        ) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                            "div",
                            {
                                className: "sticky-table-row orderbook-latest-price",
                                ref: this.centerText,
                                style: { padding: 0 }
                                //data-intro={translator.translate(
                                //    "walkthrough.vertical_order"
                                //)}
                            },
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                { className: "cell right" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "span",
                                    {
                                        className: "clickable left",
                                        onClick: this.toggleSpreadValue
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                                        className: "orderbook-center-title",
                                        content: "exchange.spread"
                                    }),
                                    " ",
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        "span",
                                        { className: "spread-value" },
                                        !!spread ? spread : "0"
                                    )
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                { className: "cell cell-center" },
                                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "span",
                                    { style: { width: 75 } },
                                    !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"]
                                    //data-intro={translator.translate(
                                    //    "walkthrough.vertical_lock"
                                    //)}
                                    , { className: "lock-unlock clickable icon-fill",
                                        onClick: this.toggleAutoScroll,
                                        name: this.state.autoScroll ? "locked" : "unlocked",
                                        title: this.state.autoScroll ? "icons.unlocked.disable_auto_scroll" : "icons.locked.enable_auto_scroll"
                                    }) : null,
                                    "\xA0",
                                    !this.props.hideFunctionButtons ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                        onClick: this.props.moveOrderBook,
                                        name: "thumb-tack",
                                        className: "icon-14px icon-fill order-book-button-v clickable",
                                        title: this.props.horizontal ? "icons.thumb_tack" : "icons.thumb_untack",
                                        style: {
                                            marginLeft: 0
                                        }
                                    }) : null,
                                    "\xA0",
                                    currentGroupOrderLimit == 0 ? null : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                        name: "grouping",
                                        className: "icon-14px",
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("icons.order_grouping"),
                                        style: {
                                            marginLeft: 0
                                        }
                                    })
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                "div",
                                {
                                    className: "cell",
                                    style: { textAlign: "center" }
                                },
                                !!this.props.latest && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                    "span",
                                    { className: "right" },
                                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                                        "span",
                                        {
                                            className: !this.props.changeClass ? "spread-value" : this.props.changeClass
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                            price: this.props.latest,
                                            base: this.props.base,
                                            quote: this.props.quote
                                        })
                                    )
                                )
                            )
                        ),
                        orderBookReversed ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OrderRows, {
                            noOrders: noOrders,
                            orderRows: askRows,
                            isBid: false
                        }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(OrderRows, {
                            noOrders: noOrders,
                            orderRows: bidRows,
                            isBid: true
                        })
                    )
                );
            }
        }
    }]);

    return OrderBook;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

OrderBook.defaultProps = {
    bids: [],
    asks: [],
    orders: {}
};

OrderBook.propTypes = {
    bids: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
    asks: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};



/***/ }),

/***/ 2831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2771);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(735);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(734);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1895);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(429);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2380);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(607);
/* harmony import */ var _View_MarketHistoryView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2832);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainTypes"].operations;





var MarketHistory = function (_React$Component) {
    _inherits(MarketHistory, _React$Component);

    function MarketHistory(props) {
        _classCallCheck(this, MarketHistory);

        var _this = _possibleConstructorReturn(this, (MarketHistory.__proto__ || Object.getPrototypeOf(MarketHistory)).call(this));

        _this.state = {
            activeTab: props.viewSettings.get("historyTab", "history"),
            rowCount: 20,
            showAll: false
        };
        return _this;
    }

    _createClass(MarketHistory, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !immutable__WEBPACK_IMPORTED_MODULE_2___default.a.is(nextProps.history, this.props.history) || nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol || nextProps.className !== this.props.className || nextProps.activeTab !== this.props.activeTab || nextState.activeTab !== this.state.activeTab || nextState.showAll !== this.state.showAll || nextProps.currentAccount !== this.props.currentAccount || nextProps.isPanelActive !== this.props.isPanelActive || nextProps.hideScrollbars !== this.props.hideScrollbars;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            if (!this.props.hideScrollbars) {
                this.updateContainer(1);
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevState) {
            var hideScrollbars = this.props.hideScrollbars;
            var showAll = this.state.showAll;


            if (prevState.showAll != showAll) {
                if (showAll && !hideScrollbars) {
                    this.updateContainer(2);
                } else if (!showAll && !hideScrollbars) {
                    this.updateContainer(3);
                } else if (showAll && hideScrollbars) {
                    this.updateContainer(1);
                } else {
                    this.updateContainer(0);
                }
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.activeTab !== this.props.activeTab) {
                this.changeTab(nextProps.activeTab);
            }

            // Reset on Market Switch
            if (nextProps.baseSymbol !== this.props.baseSymbol || nextProps.quoteSymbol !== this.props.quoteSymbol) {
                this.setState({ showAll: false });
                this.updateContainer(0);

                if (!this.props.hideScrollbars) {
                    this.updateContainer(1);
                }
            }

            // Reset on hideScrollbars switch
            if (nextProps.hideScrollbars !== this.props.hideScrollbars) {
                this.updateContainer(0);

                if (!nextProps.hideScrollbars) {
                    this.updateContainer(1);
                }
            }
        }

        /***
         * Update PS Container
         * type:int [0:destroy, 1:init, 2:update, 3:update w/ scrollTop] (default: 2)
         */

    }, {
        key: "updateContainer",
        value: function updateContainer() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

            var containerNode = this.refs.view.refs.history;
            var containerTransition = this.refs.view.refs.historyTransition;

            if (!containerNode) return;

            if (type == 0) {
                containerNode.scrollTop = 0;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.destroy(containerNode);
            } else if (type == 1) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.initialize(containerNode);
                this.updateContainer(3);
            } else if (type == 2) {
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(containerNode);
            } else if (type == 3) {
                containerNode.scrollTop = 0;
                perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a.update(containerNode);
            }

            if (containerTransition) {
                containerTransition.resetAnimation();
            }
        }
    }, {
        key: "onSetShowAll",
        value: function onSetShowAll() {
            this.setState({
                showAll: !this.state.showAll
            });
        }
    }, {
        key: "changeTab",
        value: function changeTab(tab) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeViewSetting({
                historyTab: tab
            });
            this.setState({
                activeTab: tab
            });

            // Ensure that focus goes back to top of scrollable container when tab is changed
            this.updateContainer(3);

            setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_8___default.a.rebuild, 1000);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                history = _props.history,
                myHistory = _props.myHistory,
                base = _props.base,
                quote = _props.quote,
                baseSymbol = _props.baseSymbol,
                quoteSymbol = _props.quoteSymbol,
                isNullAccount = _props.isNullAccount,
                activeTab = _props.activeTab;
            var _state = this.state,
                rowCount = _state.rowCount,
                showAll = _state.showAll;

            var historyRows = null;

            if (isNullAccount) {
                activeTab = "history";
            }

            if (activeTab === "my_history" && myHistory && myHistory.size) {
                var _assets;

                // User History

                var assets = (_assets = {}, _defineProperty(_assets, quote.get("id"), {
                    precision: quote.get("precision")
                }), _defineProperty(_assets, base.get("id"), {
                    precision: base.get("precision")
                }), _assets);

                historyRows = myHistory.filter(function (a) {
                    var opType = a.getIn(["op", 0]);
                    return opType === operations.fill_order;
                }).filter(function (a) {
                    var quoteID = quote.get("id");
                    var baseID = base.get("id");
                    var pays = a.getIn(["op", 1, "pays", "asset_id"]);
                    var receives = a.getIn(["op", 1, "receives", "asset_id"]);
                    var hasQuote = quoteID === pays || quoteID === receives;
                    var hasBase = baseID === pays || baseID === receives;
                    return hasQuote && hasBase;
                }).sort(function (a, b) {
                    return b.get("block_num") - a.get("block_num");
                }).map(function (trx) {
                    var fill = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["FillOrder"](trx.toJS(), assets, quote.get("id"));

                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_View_MarketHistoryView__WEBPACK_IMPORTED_MODULE_10__["MarketHistoryViewRow"], {
                        key: fill.id,
                        fill: fill,
                        base: base,
                        quote: quote
                    });
                }).toArray();
            } else if (history && history.size) {
                // Market History
                historyRows = this.props.history.take(100).map(function (fill) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_View_MarketHistoryView__WEBPACK_IMPORTED_MODULE_10__["MarketHistoryViewRow"], {
                        key: fill.id,
                        fill: fill,
                        base: base,
                        quote: quote
                    });
                }).toArray();
            }

            var totalRows = historyRows ? historyRows.length : null;
            if (!showAll && historyRows) {
                historyRows.splice(rowCount, historyRows.length);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_View_MarketHistoryView__WEBPACK_IMPORTED_MODULE_10__["MarketHistoryView"], {
                ref: "view",
                className: this.props.className,
                innerClass: this.props.innerClass,
                innerStyle: this.props.innerStyle,
                noHeader: this.props.noHeader,
                headerStyle: this.props.headerStyle,
                activeTab: activeTab,
                quoteSymbol: quoteSymbol,
                baseSymbol: baseSymbol,
                tinyScreen: this.props.tinyScreen,
                historyRows: historyRows,
                totalRows: totalRows,
                showAll: showAll,
                onSetShowAll: this.onSetShowAll.bind(this)
            });
        }
    }]);

    return MarketHistory;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MarketHistory.defaultProps = {
    history: []
};

MarketHistory.propTypes = {
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_6__["connect"])(MarketHistory, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        return {
            viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().viewSettings
        };
    }
}));

/***/ }),

/***/ 2832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketHistoryView", function() { return MarketHistoryView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketHistoryViewRow", function() { return MarketHistoryViewRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(749);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2809);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2139);
/* harmony import */ var _Utility_BlockDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2833);
/* harmony import */ var _Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2793);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2808);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_9__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












function MarketHistoryViewRow(_ref) {
    var fill = _ref.fill,
        base = _ref.base,
        quote = _ref.quote;

    var isMarket = fill.id.indexOf("5.0") !== -1 ? true : false;
    var timestamp = isMarket ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "td",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_8__["Tooltip"],
            { title: fill.time.toString(), placement: "left" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "tooltip", style: { whiteSpace: "nowrap" } },
                counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(fill.time, {
                    type: "date",
                    format: browser_locale__WEBPACK_IMPORTED_MODULE_9___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history"
                })
            )
        )
    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_BlockDate__WEBPACK_IMPORTED_MODULE_6__["default"], { component: "td", block_number: fill.block, tooltip: true });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "tr",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "td",
            { className: fill.className },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_PriceText__WEBPACK_IMPORTED_MODULE_7__["default"], { price: fill.getPrice(), base: base, quote: quote })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "td",
            null,
            fill.amountToReceive()
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "td",
            null,
            fill.amountToPay()
        ),
        timestamp
    );
}

var MarketHistoryView = function (_React$Component) {
    _inherits(MarketHistoryView, _React$Component);

    function MarketHistoryView() {
        _classCallCheck(this, MarketHistoryView);

        return _possibleConstructorReturn(this, (MarketHistoryView.__proto__ || Object.getPrototypeOf(MarketHistoryView)).apply(this, arguments));
    }

    _createClass(MarketHistoryView, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                className = _props.className,
                innerClass = _props.innerClass,
                innerStyle = _props.innerStyle,
                noHeader = _props.noHeader,
                headerStyle = _props.headerStyle,
                activeTab = _props.activeTab,
                quoteSymbol = _props.quoteSymbol,
                baseSymbol = _props.baseSymbol,
                tinyScreen = _props.tinyScreen,
                totalRows = _props.totalRows,
                historyRows = _props.historyRows,
                showAll = _props.showAll;


            var emptyRow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "td",
                    {
                        style: {
                            textAlign: "center",
                            lineHeight: 4,
                            fontStyle: "italic"
                        },
                        colSpan: "5"
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "account.no_orders" })
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: innerClass, style: innerStyle },
                    noHeader ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            style: headerStyle,
                            className: "exchange-content-header"
                        },
                        activeTab === "my_history" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.my_history" }) : null,
                        activeTab === "history" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "exchange.history" }) : null
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "grid-block shrink left-orderbook-header market-right-padding-only" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table table-no-padding order-table text-left fixed-table market-right-padding" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "thead",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "tr",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        { style: { textAlign: "right" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                            className: "header-sub-title",
                                            content: "exchange.price"
                                        })
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        { style: { textAlign: "right" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            { className: "header-sub-title" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                dataPlace: "top",
                                                name: quoteSymbol
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        { style: { textAlign: "right" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "span",
                                            { className: "header-sub-title" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                dataPlace: "top",
                                                name: baseSymbol
                                            })
                                        )
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "th",
                                        { style: { textAlign: "right" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                            className: "header-sub-title",
                                            content: "explorer.block.date"
                                        })
                                    )
                                )
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "table-container grid-block market-right-padding-only no-overflow",
                            ref: "history",
                            style: {
                                minHeight: !tinyScreen ? 260 : 0,
                                maxHeight: 260,
                                overflow: "hidden",
                                lineHeight: "13px"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "table",
                            { className: "table order-table no-stripes table-hover fixed-table text-right no-overflow" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _Utility_TransitionWrapper__WEBPACK_IMPORTED_MODULE_4__["default"],
                                {
                                    ref: "historyTransition",
                                    component: "tbody",
                                    transitionName: "newrow",
                                    className: "orderbook"
                                },
                                !!historyRows && historyRows.length > 0 ? historyRows : emptyRow
                            )
                        )
                    ),
                    historyRows && totalRows > 11 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "orderbook-showall" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { onClick: function onClick(e) {
                                    return _this2.props.onSetShowAll(e);
                                } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                content: showAll ? "exchange.hide" : "exchange.show_all_trades",
                                rowcount: totalRows
                            })
                        )
                    ) : null
                )
            );
        }
    }]);

    return MarketHistoryView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 2833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1895);
/* harmony import */ var stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1899);
/* harmony import */ var actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1900);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2380);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2808);
/* harmony import */ var browser_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(browser_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










/**
 * @brief displays block's date and time based on block number
 *
 * properties: block - number
 * Note, it doesn't fetch block, just calculates time based on number alone.
 **/

var BlockDate = function (_React$Component) {
    _inherits(BlockDate, _React$Component);

    function BlockDate() {
        _classCallCheck(this, BlockDate);

        return _possibleConstructorReturn(this, (BlockDate.__proto__ || Object.getPrototypeOf(BlockDate)).apply(this, arguments));
    }

    _createClass(BlockDate, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            if (!this.props.blockHeader) actions_BlockchainActions__WEBPACK_IMPORTED_MODULE_4__["default"].getHeader.defer(this.props.block_number);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np) {
            if (np.blockHeader && !this.props.blockHeader) setTimeout(react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a.rebuild, 1000);
            return np.blockHeader !== this.props.blockHeader;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                blockHeader = _props.blockHeader,
                tooltip = _props.tooltip,
                component = _props.component,
                format = _props.format;


            if (!blockHeader) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component, {
                className: tooltip ? "tooltip" : ""
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_7__["Tooltip"],
                {
                    title: tooltip ? blockHeader.timestamp.toString() : "",
                    placement: "left"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    null,
                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(blockHeader.timestamp, {
                        type: "date",
                        format: format
                    })
                )
            ));
        }
    }]);

    return BlockDate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BlockDate.defaultProps = {
    format: browser_locale__WEBPACK_IMPORTED_MODULE_6___default()().toLowerCase().indexOf("en-us") !== -1 ? "market_history_us" : "market_history",
    tooltip: false,
    component: "span"
};


BlockDate = Object(alt_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(BlockDate, {
    listenTo: function listenTo() {
        return [stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps(props) {
        return {
            blockHeader: stores_BlockchainStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().blockHeaders.get(props.block_number)
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (BlockDate);

/***/ }),

/***/ 2841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2769);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1895);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(429);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1855);
/* harmony import */ var actions_AssetActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2401);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(580);
/* harmony import */ var stores_AssetStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2400);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2139);
/* harmony import */ var _MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2842);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var MarketListItem = function (_Component) {
    _inherits(MarketListItem, _Component);

    function MarketListItem() {
        _classCallCheck(this, MarketListItem);

        return _possibleConstructorReturn(this, (MarketListItem.__proto__ || Object.getPrototypeOf(MarketListItem)).apply(this, arguments));
    }

    _createClass(MarketListItem, [{
        key: "onKeyPress",
        value: function onKeyPress(linkTo, e) {
            if (e.key == "Enter") {
                this.props.history.push(linkTo);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                quoteSymbol = _props.quoteSymbol,
                baseSymbol = _props.baseSymbol,
                market = _props.market,
                marketPickerAsset = _props.marketPickerAsset;
            var onClose = this.props.onClose;

            var marketSymbol = market[1]["quote"];
            var linkTo = quoteSymbol == marketPickerAsset ? "/market/" + marketSymbol + "_" + baseSymbol : "/market/" + quoteSymbol + "_" + marketSymbol;

            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                "li",
                {
                    key: market[0],
                    style: { height: 40 },
                    onKeyPress: this.onKeyPress.bind(this, linkTo),
                    tabIndex: this.props.tabIndex
                },
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                    { style: { display: "flex" }, onClick: onClose, to: linkTo },
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        "div",
                        { style: { flex: 2 } },
                        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { name: market[1]["quote"] })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        "div",
                        { style: { flex: 3 } },
                        market[1].issuer
                    )
                )
            );
        }
    }]);

    return MarketListItem;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

MarketListItem.propTypes = {
    onClose: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
    quoteSymbol: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    baseSymbol: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    market: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
    marketPickerAsset: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};

var MarketPickerWrapper = function (_Component2) {
    _inherits(MarketPickerWrapper, _Component2);

    function MarketPickerWrapper() {
        _classCallCheck(this, MarketPickerWrapper);

        var _this2 = _possibleConstructorReturn(this, (MarketPickerWrapper.__proto__ || Object.getPrototypeOf(MarketPickerWrapper)).call(this));

        _this2.state = _this2.initialState();

        _this2.getAssetList = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(actions_AssetActions__WEBPACK_IMPORTED_MODULE_8__["default"].getAssetList.defer, 150);
        _this2.setState = _this2.setState.bind(_this2);
        _this2._checkAndUpdateMarketList = _this2._checkAndUpdateMarketList.bind(_this2);
        return _this2;
    }

    _createClass(MarketPickerWrapper, [{
        key: "initialState",
        value: function initialState() {
            return {
                marketsList: [],
                lookupQuote: null,
                inputValue: ""
            };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.refs.marketPicker_input.focus();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.refs.marketPicker_input.focus();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.marketPickerAsset !== this.props.marketPickerAsset) this.setState(this.initialState());

            if (nextProps.searchAssets !== this.props.searchAssets) Object(_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_13__["assetFilter"])({
                searchAssets: this.props.searchAssets,
                marketPickerAsset: this.props.marketPickerAsset,
                baseAsset: this.props.baseAsset,
                quoteAsset: this.props.quoteAsset
            }, {
                inputValue: this.state.inputValue,
                lookupQuote: this.state.lookupQuote
            }, this.setState, this._checkAndUpdateMarketList);
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return np.visible !== this.props.visible || np.marketPickerAsset !== this.props.marketPickerAsset || np.searchAssets !== this.props.searchAssets || ns.marketsList !== this.state.marketsList || !common_utils__WEBPACK_IMPORTED_MODULE_9__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
        }
    }, {
        key: "_onInputName",
        value: function _onInputName(getBackedAssets, e) {
            var _this3 = this;

            var toFind = e.target.value.trim().toUpperCase();
            var isValidName = !bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainValidation"].is_valid_symbol_error(toFind, true);

            if (!isValidName) {
                /* Don't lookup invalid asset names */
                this.setState({
                    inputValue: toFind,
                    activeSearch: false,
                    marketsList: []
                });
                return;
            } else {
                this.setState({
                    inputValue: toFind,
                    activeSearch: true,
                    marketsList: []
                });
            }

            if (this.state.inputValue !== toFind) {
                this.timer && clearTimeout(this.timer);
            }

            this.timer = setTimeout(function () {
                Object(_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_13__["lookupAssets"])(toFind, getBackedAssets, _this3.getAssetList, _this3.setState);
            }, 1500);
        }
    }, {
        key: "_checkAndUpdateMarketList",
        value: function _checkAndUpdateMarketList(marketsList) {
            var _this4 = this;

            clearInterval(this.intervalId);
            this.intervalId = setInterval(function () {
                var needFetchIssuer = 0;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = marketsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _ref = _step.value;

                        var _ref2 = _slicedToArray(_ref, 2);

                        var market = _ref2[1];

                        if (!market.issuer) {
                            market.issuer = Object(_MarketPickerHelpers__WEBPACK_IMPORTED_MODULE_13__["fetchIssuerName"])(market.issuerId);
                            if (!market.issuer) needFetchIssuer++;
                        }
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

                if (needFetchIssuer) return;
                clearInterval(_this4.intervalId);
                _this4.setState({
                    marketsList: marketsList,
                    activeSearch: false
                });
            }, 300);
        }
    }, {
        key: "renderSearchBar",
        value: function renderSearchBar() {
            var inputValue = this.state.inputValue;


            var labelKey = "exchange.market_picker.find_by_asset";
            var label = counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate(labelKey).toUpperCase();
            var placeHolderKey = "exchange.market_picker.search";
            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                "div",
                { id: "filter" },
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Form"].Item,
                    { label: label },
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Input"], {
                        type: "text",
                        ref: "marketPicker_input",
                        value: inputValue,
                        onChange: this._onInputName.bind(this, true),
                        placeholder: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate(placeHolderKey),
                        maxLength: "16",
                        tabIndex: 2
                    })
                )
            );
        }
    }, {
        key: "renderResults",
        value: function renderResults() {
            var _this5 = this;

            var marketsList = this.state.marketsList;
            var _state = this.state,
                activeSearch = _state.activeSearch,
                inputValue = _state.inputValue;

            var loading = activeSearch && inputValue.length != 0;

            var marketPickerAsset = this.props.marketPickerAsset;

            var baseSymbol = this.props.baseAsset.get("symbol");
            var quoteSymbol = this.props.quoteAsset.get("symbol");

            if (!loading) return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                "div",
                { className: "results" },
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    "ul",
                    { style: { marginLeft: 0, minHeight: "20px" } },
                    marketsList.map(function (market, index) {
                        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MarketListItem, {
                            key: index,
                            tabIndex: index + 100,
                            baseSymbol: baseSymbol,
                            quoteSymbol: quoteSymbol,
                            market: market,
                            marketPickerAsset: marketPickerAsset,
                            history: _this5.props.history,
                            onClose: _this5.props.onClose.bind(_this5)
                        });
                    })
                )
            );
            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
                style: { marginLeft: "8px" },
                type: "loading",
                theme: "outlined"
            });
        }
    }, {
        key: "render",
        value: function render() {
            var marketPickerAsset = this.props.marketPickerAsset;

            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                "div",
                { className: "marketPicker" },
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    "div",
                    { className: "marketPicker__subHeader" },
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "exchange.market_picker.sub_title" }),
                    "\xA0",
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                        {
                            to: "/asset/" + marketPickerAsset,
                            style: {
                                cursor: "pointer",
                                color: "lightblue !important"
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_12__["default"], { name: marketPickerAsset })
                    )
                ),
                this.renderSearchBar(),
                this.renderResults()
            );
        }
    }]);

    return MarketPickerWrapper;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var MarketPicker = function (_Component3) {
    _inherits(MarketPicker, _Component3);

    function MarketPicker() {
        _classCallCheck(this, MarketPicker);

        var _this6 = _possibleConstructorReturn(this, (MarketPicker.__proto__ || Object.getPrototypeOf(MarketPicker)).call(this));

        _this6.state = {
            open: false,
            smallScreen: false
        };
        return _this6;
    }

    _createClass(MarketPicker, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                smallScreen: window.innerWidth <= 800
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.quoteAsset.get("id") !== nextProps.quoteAsset.get("id") || this.props.baseAsset.get("id") !== nextProps.baseAsset.get("id")) {
                this.onClose();
            }
        }
    }, {
        key: "show",
        value: function show() {
            this.props.showModal();
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.props.onToggleMarketPicker(null);
            this.props.hideModal();
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_11__["Modal"],
                _extends({
                    title: counterpart__WEBPACK_IMPORTED_MODULE_3___default.a.translate("exchange.market_picker.title"),
                    closable: false,
                    visible: this.props.visible,
                    id: this.props.modalId,
                    overlay: true,
                    onCancel: this.onClose.bind(this),
                    noHeaderContainer: true,
                    footer: null,
                    ref: this.props.modalId
                }, this.props),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(MarketPickerWrapper, _extends({
                    onClose: this.onClose.bind(this)
                }, this.props))
            );
        }
    }]);

    return MarketPicker;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

MarketPicker = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(MarketPicker, {
    listenTo: function listenTo() {
        return [stores_AssetStore__WEBPACK_IMPORTED_MODULE_10__["default"]];
    },
    getProps: function getProps() {
        return {
            searchAssets: stores_AssetStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().assets,
            assetsLoading: stores_AssetStore__WEBPACK_IMPORTED_MODULE_10__["default"].getState().assetsLoading
        };
    }
});

/* harmony default export */ __webpack_exports__["default"] = (MarketPicker);

/***/ }),

/***/ 2842:
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

/***/ 2843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ConfirmModal = function (_React$Component) {
    _inherits(ConfirmModal, _React$Component);

    function ConfirmModal(props) {
        _classCallCheck(this, ConfirmModal);

        var _this = _possibleConstructorReturn(this, (ConfirmModal.__proto__ || Object.getPrototypeOf(ConfirmModal)).call(this, props));

        _this.submit = _this.submit.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        return _this;
    }

    _createClass(ConfirmModal, [{
        key: "_onForce",
        value: function _onForce(value, e) {
            e.preventDefault();

            this.props.hideModal();

            if (value) this.props.onForce();
        }
    }, {
        key: "submit",
        value: function submit(e) {
            this._onForce(true, e);
        }
    }, {
        key: "cancel",
        value: function cancel(e) {
            this._onForce(false, e);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                type = _props.type,
                diff = _props.diff,
                hasOrders = _props.hasOrders;


            var footer = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                { key: "submit", onClick: this.submit },
                counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("settings.yes")
            ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                { key: "cancel", type: "primary", onClick: this.cancel },
                counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("settings.no")
            )];

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Modal"],
                {
                    footer: footer,
                    visible: this.props.visible,
                    onCancel: this.cancel,
                    title: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("transaction.confirm")
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    !hasOrders ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        content: "exchange.confirm_no_orders_" + type
                    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        content: "exchange.confirm_" + type,
                        diff: common_utils__WEBPACK_IMPORTED_MODULE_1__["default"].format_number(diff, 2)
                    })
                )
            );
        }
    }]);

    return ConfirmModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ConfirmModal);

/***/ }),

/***/ 2844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _OrderBook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2824);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(735);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Personalize = function (_React$Component) {
    _inherits(Personalize, _React$Component);

    function Personalize(props) {
        _classCallCheck(this, Personalize);

        var _this = _possibleConstructorReturn(this, (Personalize.__proto__ || Object.getPrototypeOf(Personalize)).call(this));

        _this.state = {
            open: false,
            smallScreen: false,
            autoScroll: props.viewSettings.get("global_AutoScroll", true)
        };

        _this.setChartHeight = _this.setChartHeight.bind(_this);
        return _this;
    }

    _createClass(Personalize, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({
                smallScreen: window.innerWidth <= 800
            });
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.props.hideModal();
        }
    }, {
        key: "setChartHeight",
        value: function setChartHeight(value) {
            this.props.onChangeChartHeight({
                value: value
            });
        }
    }, {
        key: "setAutoscroll",
        value: function setAutoscroll(target) {
            var newState = target == 1 ? true : false;

            this.setState({
                autoScroll: newState
            });

            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_5__["default"].changeViewSetting({
                global_AutoScroll: newState
            });

            this.props.onSetAutoscroll(newState);
        }
    }, {
        key: "_getGroupingOptions",
        value: function _getGroupingOptions(selectKey) {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"],
                {
                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.placeholder_select"),
                    style: { width: "100%" },
                    onChange: this.props.onSetPanelTabs.bind(this, selectKey),
                    value: this.props.panelTabs[selectKey]
                },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                    { value: 0 },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.grouping_standalone" })
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                    { value: 1 },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.grouping_1" })
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                    { value: 2 },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.grouping_2" })
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                chartType = _props.chartType,
                chartHeight = _props.chartHeight;


            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Modal"],
                {
                    title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.header.title"),
                    visible: this.props.visible,
                    id: this.props.modalId,
                    overlay: true,
                    footer: [react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Button"],
                        { key: "close", onClick: this.onClose.bind(this) },
                        counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("modal.close")
                    )],
                    onCancel: this.onClose.bind(this),
                    noHeaderContainer: true,
                    ref: this.props.modalId
                },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Form"].Item,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.header.chart_options" })
                    ),
                    !this.props.tinyScreen ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.chart_type" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.chart_type")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                ),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.chart_reload")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "info-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"],
                                {
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.placeholder_select"),
                                    style: { width: "100%" },
                                    value: chartType,
                                    onChange: this.props.onToggleChart.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "market_depth" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.order_depth")
                                ),
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "price_chart" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.price_history")
                                ),
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "hidden_chart" },
                                    counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.options.hidden_chart")
                                )
                            )
                        )
                    ) : null,
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.chart_height" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.chart_height")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], {
                                value: typeof chartHeight === "number" && chartHeight,
                                onChange: this.setChartHeight.bind(this)
                            })
                        )
                    ),
                    !this.props.tinyScreen && chartType == "price_chart" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.chart_tools" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.chart_tools")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                ),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.chart_reload")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "info-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
                                style: { margin: 6 },
                                checked: this.props.chartTools,
                                onChange: this.props.onChartTools.bind(this)
                            })
                        )
                    ),
                    !this.props.tinyScreen && chartType == "price_chart" && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.chart_zoom" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.chart_zoom")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                ),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.chart_reload")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "info-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
                                style: { margin: 6 },
                                checked: this.props.chartZoom,
                                onChange: this.props.onChartZoom.bind(this)
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.header.order_options" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.order_book_grouping" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.order_book_grouping")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            this.props.trackedGroupsConfig ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_OrderBook__WEBPACK_IMPORTED_MODULE_4__["GroupOrderLimitSelector"], {
                                globalSettingsSelector: true,
                                trackedGroupsConfig: this.props.trackedGroupsConfig,
                                handleGroupOrderLimitChange: this.props.handleGroupOrderLimitChange.bind(this),
                                currentGroupOrderLimit: this.props.currentGroupOrderLimit
                            }) : null
                        )
                    ),
                    !this.props.tinyScreen && !this.props.smallScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.order_style" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.order_style")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"],
                                {
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.placeholder_select"),
                                    style: { width: "100%" },
                                    value: this.props.verticalOrderBook.toString(),
                                    onSelect: this.props.onMoveOrderBook.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "true" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.vertical" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "false" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.horizontal" })
                                )
                            )
                        )
                    ),
                    !this.props.tinyScreen && !this.props.verticalOrderBook || this.props.smallScreen ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        {
                            className: "grid-block no-overflow wrap shrink",
                            style: { paddingTop: "0.5em" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.position_order_form" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.position_order_form")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"],
                                {
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.placeholder_select"),
                                    style: { width: "100%" },
                                    value: this.props.flipBuySell.toString(),
                                    onSelect: this.props.onFlipBuySell.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "false" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.position_order_form_opt1" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "true" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.position_order_form_opt2" })
                                )
                            )
                        )
                    ) : null,
                    !this.props.tinyScreen && !this.props.verticalOrderBook || this.props.smallScreen ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        {
                            className: "grid-block no-overflow wrap shrink",
                            style: { paddingTop: "0.5em" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.position_order_orders" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.position_order_orders")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"],
                                {
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.placeholder_select"),
                                    style: { width: "100%" },
                                    value: this.props.flipOrderBook.toString(),
                                    onSelect: this.props.onFlipOrderBook.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "false" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.position_order_orders_opt1" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "true" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.position_order_orders_opt2" })
                                )
                            )
                        )
                    ) : null,
                    !this.props.tinyScreen && !this.props.verticalOrderBook || this.props.smallScreen ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        {
                            className: "grid-block no-overflow wrap shrink",
                            style: { paddingTop: "0.5em" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.position_order_asset" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.position_order_asset")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"],
                                {
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.placeholder_select"),
                                    style: { width: "100%" },
                                    value: this.props.buySellTop.toString(),
                                    onSelect: this.props.onToggleBuySellPosition.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "false" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.position_order_asset_opt1" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "true" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.options.position_order_asset_opt2" })
                                )
                            )
                        )
                    ) : null,
                    !this.props.tinyScreen && this.props.verticalOrderBook ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        {
                            className: "grid-block no-overflow wrap shrink",
                            style: { paddingTop: "0.5em" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.orderbook_auto_scroll" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.orderbook_auto_scroll")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
                                style: { margin: 6 },
                                checked: this.state.autoScroll,
                                onChange: this.setAutoscroll.bind(this)
                            })
                        )
                    ) : null,
                    !this.props.tinyScreen && this.props.verticalOrderBook ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.reverse_order_book" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.reverse_order_book")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
                                style: { margin: 6 },
                                checked: this.props.orderBookReversed,
                                onChange: this.props.onOrderBookReversed.bind(this)
                            })
                        )
                    ) : null,
                    !this.props.tinyScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6", style: { paddingRight: 5 } },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.single_colum_order_form" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.single_colum_order_form")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
                                style: { margin: 6 },
                                checked: this.props.singleColumnOrderForm,
                                onChange: this.props.onToggleSingleColumnOrderForm.bind(this)
                            })
                        )
                    ),
                    !this.props.tinyScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.header.panel_grouping" }),
                        "\xA0",
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                            {
                                title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.panel_grouping")
                            },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], { type: "question-circle", theme: "filled" })
                        )
                    ),
                    !this.props.tinyScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        {
                            className: "grid-block no-overflow wrap shrink",
                            style: { paddingBottom: "0.5em" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.my_trades" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            this._getGroupingOptions("my_history")
                        )
                    ),
                    !this.props.tinyScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        {
                            className: "grid-block no-overflow wrap shrink",
                            style: { paddingBottom: "0.5em" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.market_trades" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            this._getGroupingOptions("history")
                        )
                    ),
                    !this.props.tinyScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        {
                            className: "grid-block no-overflow wrap shrink",
                            style: { paddingBottom: "0.5em" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.open_orders" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            this._getGroupingOptions("my_orders")
                        )
                    ),
                    !this.props.tinyScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        {
                            className: "grid-block no-overflow wrap shrink",
                            style: { paddingBottom: "0.5em" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.settlements" })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            this._getGroupingOptions("open_settlement")
                        )
                    ),
                    !this.props.tinyScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "header",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.header.general" })
                    ),
                    !this.props.tinyScreen && !this.props.smallScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        {
                            className: "grid-block no-overflow wrap shrink",
                            style: { paddingBottom: "0.5em" }
                        },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            {
                                className: "small-6",
                                style: { paddingRight: 5 }
                            },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.market_location" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.market_location")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"],
                                {
                                    placeholder: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("settings.placeholder_select"),
                                    style: { width: "100%" },
                                    value: this.props.mirrorPanels.toString(),
                                    onSelect: this.props.onMirrorPanels.bind(this)
                                },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "false" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "settings.left" })
                                ),
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Select"].Option,
                                    { value: "true" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "settings.right" })
                                )
                            )
                        )
                    ),
                    !this.props.tinyScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6", style: { paddingRight: 5 } },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.reduce_scrollbars" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.reduce_scrollbars")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                ),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.reload")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "info-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
                                style: { margin: 6 },
                                checked: this.props.hideScrollbars,
                                onChange: this.props.onToggleScrollbars.bind(this)
                            })
                        )
                    ),
                    !this.props.tinyScreen && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        "div",
                        { className: "grid-block no-overflow wrap shrink" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6", style: { paddingRight: 5 } },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                "h6",
                                { style: { margin: 9 } },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "exchange.settings.title.hide_function_buttons" }),
                                "\xA0",
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Tooltip"],
                                    {
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.translate("exchange.settings.tooltip.hide_function_buttons")
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                                        type: "question-circle",
                                        theme: "filled"
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            "div",
                            { className: "small-6" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
                                style: { margin: 6 },
                                checked: this.props.hideFunctionButtons,
                                onChange: this.props.onHideFunctionButtons.bind(this)
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Personalize;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Personalize);

/***/ }),

/***/ 2845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2847);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2848);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(734);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(735);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1895);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_8__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var TradingView = __webpack_require__(2846);









// import MarketsStore from "stores/MarketsStore";

var TradingViewPriceChart = function (_React$Component) {
    _inherits(TradingViewPriceChart, _React$Component);

    function TradingViewPriceChart(props) {
        _classCallCheck(this, TradingViewPriceChart);

        var _this = _possibleConstructorReturn(this, (TradingViewPriceChart.__proto__ || Object.getPrototypeOf(TradingViewPriceChart)).call(this));

        _this.state = {
            showSaveModal: false,
            showLoadModal: false,
            error: false
        };
        _this.layoutName = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        _this.hideModal = _this.hideModal.bind(_this);
        _this.resetError = _this.resetError.bind(_this);
        _this.loadLastChart = _this.loadLastChart.bind(_this);
        return _this;
    }

    _createClass(TradingViewPriceChart, [{
        key: "loadTradingView",
        value: function loadTradingView(props) {
            var _this2 = this;

            var dataFeed = props.dataFeed;

            var themeColors = assets_colors__WEBPACK_IMPORTED_MODULE_1___default.a[props.theme];
            var that = this;

            if (!dataFeed) return;
            if (!!this.tvWidget) return;

            if (false) {}

            dataFeed.update({
                resolutions: props.buckets,
                ticker: props.quoteSymbol + "_" + props.baseSymbol,
                interval: Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getResolutionsFromBuckets"])([props.bucketSize])[0]
            });

            var disabled_features = ["symbol_info", "symbol_search_hot_key", "border_around_the_chart", "header_symbol_search", "header_compare", "header_saveload"];

            var enabled_features = [];

            if (this.props.mobile || !this.props.chartZoom) {
                disabled_features.push("chart_scroll");
                disabled_features.push("chart_zoom");
            }

            if (this.props.mobile || !this.props.chartTools) {
                disabled_features.push("left_toolbar");
                disabled_features.push("chart_crosshair_menu");
                disabled_features.push("chart_events");
                disabled_features.push("footer_share_buttons");
                disabled_features.push("footer_screenshot");
                disabled_features.push("footer_publish_idea_button");
                disabled_features.push("caption_buttons_text_if_possible");
                disabled_features.push("line_tool_templates");
                disabled_features.push("widgetbar_tabs");
                disabled_features.push("support_manage_drawings");
                disabled_features.push("support_multicharts");
                disabled_features.push("right_bar_stays_on_scroll");
                disabled_features.push("charts_auto_save");
                disabled_features.push("edit_buttons_in_legend");
                disabled_features.push("context_menus");
                disabled_features.push("control_bar");
                disabled_features.push("header_fullscreen_button");
                disabled_features.push("header_widget");
                disabled_features.push("symbollist_context_menu");
                disabled_features.push("show_pro_features");
            } else {
                enabled_features.push("study_templates");
                enabled_features.push("keep_left_toolbar_visible_on_small_screens");
            }

            if (false) {}
            if (false) {}

            this.tvWidget = new TradingView.widget({
                fullscreen: false,
                symbol: props.quoteSymbol + "_" + props.baseSymbol,
                interval: Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getResolutionsFromBuckets"])([props.bucketSize])[0],
                library_path: ( false ? undefined : "") + "/charting_library/",
                datafeed: dataFeed,
                container_id: "tv_chart",
                charts_storage_url: "https://saveload.tradingview.com",
                charts_storage_api_version: "1.1",
                client_id: "tradingview.com",
                user_id: "public_user_id",
                autosize: true,
                locale: props.locale,
                timezone: Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getTVTimezone"])(),
                toolbar_bg: themeColors.bgColor,
                overrides: {
                    "paneProperties.background": themeColors.bgColor,
                    "paneProperties.horzGridProperties.color": themeColors.axisLineColor,
                    "paneProperties.vertGridProperties.color": themeColors.axisLineColor,
                    "scalesProperties.lineColor": themeColors.axisLineColor,
                    "scalesProperties.textColor": themeColors.textColor
                },
                custom_css_url: props.theme + ".css",
                enabled_features: enabled_features,
                disabled_features: disabled_features,
                debug: false,
                preset: this.props.mobile ? "mobile" : ""
            });

            this.tvWidget.onChartReady(function () {
                if (false) {}
                if (false) {}
                _this2.tvWidget.createButton().attr("title", counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("exchange.load_custom_charts")).addClass("apply-common-tooltip").on("click", function () {
                    that.setState({ showLoadModal: true });
                }).append("<span>" + counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("exchange.chart_load") + "</span>");
                _this2.tvWidget.createButton().attr("title", counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("exchange.save_custom_charts")).addClass("apply-common-tooltip").on("click", function () {
                    that.setState({ showSaveModal: true });
                }).append("<span>" + counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("exchange.chart_save") + "</span>");

                dataFeed.update({
                    onMarketChange: _this2._setSymbol.bind(_this2)
                });
                _this2.loadLastChart();
            });

            this._onWheel = this._onWheel.bind(this);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (!np.marketReady) return;
            if (!this.props.dataFeed && np.dataFeed) {
                this.loadTradingView(np);
            }
        }
    }, {
        key: "_setSymbol",
        value: function _setSymbol(ticker) {
            if (this.tvWidget) {
                this.tvWidget.chart().removeAllShapes();
                this.loadLastChart();
                this.tvWidget.setSymbol(ticker, Object(_tradingViewClasses__WEBPACK_IMPORTED_MODULE_2__["getResolutionsFromBuckets"])([this.props.bucketSize])[0]);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadTradingView(this.props);

            // continue investigating how to disable mouse wheel, here are the containted docs
            // document.getElementById("tv_chart").children[0].contentWindow
            // document.getElementById("tv_chart").children[0].contentDocument
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.props.dataFeed.clearSubs();
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, state) {
            return state.showLoadModal !== this.state.showLoadModal || state.showSaveModal !== this.state.showSaveModal || np.chartHeight !== this.props.chartHeight || this.props.charts.size !== np.charts.size || !this.tvWidget || np.marketReady;
        }
    }, {
        key: "_onWheel",
        value: function _onWheel(e) {
            console.log("Test wheel interception");
        }
    }, {
        key: "onSubmitConfirmation",
        value: function onSubmitConfirmation(e) {
            var _this3 = this;

            var layoutName = this.layoutName;

            var error = this.props.charts.some(function (chart) {
                return chart.key === layoutName.current.state.value && chart.symbol === _this3.props.quoteSymbol + "_" + _this3.props.baseSymbol;
            });
            var that = this;
            if (!error) {
                this.resetError();
                this.tvWidget.save(function (object) {
                    var chart = {};
                    chart.key = layoutName.current.state.value || "";
                    chart.object = object;
                    chart.name = layoutName.current.state.value || "";
                    chart.symbol = that.props.quoteSymbol + "_" + that.props.baseSymbol;
                    chart.modified = new Date().toLocaleDateString("en-US");
                    actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].addChartLayout(chart);
                    that.setState({ showSaveModal: false }, function () {
                        if (that.layoutName.current.state) {
                            that.layoutName.current.state.value = null;
                        }
                    });
                });
            } else {
                this.setState({ error: error });
            }
        }
    }, {
        key: "hideModal",
        value: function hideModal() {
            this.resetError();
            this.setState({ showSaveModal: false, showLoadModal: false });
        }
    }, {
        key: "handleDelete",
        value: function handleDelete(name) {
            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].deleteChartLayout(name);
        }
    }, {
        key: "resetError",
        value: function resetError() {
            this.setState({ error: false });
        }
    }, {
        key: "loadLastChart",
        value: function loadLastChart() {
            var _props = this.props,
                charts = _props.charts,
                quoteSymbol = _props.quoteSymbol,
                baseSymbol = _props.baseSymbol;


            var chart = charts.toArray().filter(function (chart) {
                return chart.symbol === quoteSymbol + "_" + baseSymbol && chart.enabled;
            });
            chart[0] && this.tvWidget.load(chart[0].object);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _props2 = this.props,
                charts = _props2.charts,
                quoteSymbol = _props2.quoteSymbol,
                baseSymbol = _props2.baseSymbol;
            var error = this.state.error;

            var _error = error ? "has-error" : "";
            var dataSource = charts.toArray().filter(function (chart) {
                return chart.symbol === quoteSymbol + "_" + baseSymbol;
            });
            var columns = [{
                title: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("exchange.layout_name"),
                dataIndex: "name",
                key: "name"
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("exchange.modified"),
                dataIndex: "modified",
                key: "modified"
            }, {
                title: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("exchange.actions"),
                dataIndex: "actions",
                key: "actions",
                render: function render(text, record) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                        style: { width: "32px" },
                        onClick: _this4.handleDelete.bind(_this4, record.name),
                        type: "delete"
                    });
                }
            }];

            var onRow = function onRow(record) {
                return {
                    onClick: function onClick(event) {
                        if (event.target.localName === "td") {
                            _this4.hideModal();
                            actions_SettingsActions__WEBPACK_IMPORTED_MODULE_6__["default"].addChartLayout(record);
                            _this4.tvWidget.load(record.object);
                        } else if (event.currentTarget.parentElement.childElementCount === 1) _this4.hideModal();
                    }
                };
            };

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "small-12" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "exchange-bordered",
                    style: { height: this.props.chartHeight + "px" },
                    id: "tv_chart"
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Modal"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("exchange.load_chart_layout"),
                        closable: false,
                        visible: this.state.showLoadModal,
                        footer: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                            { key: "cancel", onClick: this.hideModal },
                            counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("modal.close")
                        )]
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Table"], {
                        dataSource: dataSource || [],
                        columns: columns,
                        onRow: onRow
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Modal"],
                    {
                        title: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("exchange.save_new_chart_layout"),
                        closable: false,
                        visible: this.state.showSaveModal,
                        footer: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                            {
                                key: "submit",
                                type: "primary",
                                onClick: this.onSubmitConfirmation.bind(this)
                            },
                            counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("modal.save")
                        ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Button"],
                            { key: "cancel", onClick: this.hideModal },
                            counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("modal.close")
                        )]
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: _error },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_8___default.a, { content: "exchange.chart_error" })
                        ) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            {
                                className: _error,
                                style: {
                                    borderBottom: "#A09F9F 1px dotted"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_3__["Input"], {
                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_4___default.a.translate("exchange.enter_chart_layout_name"),
                                ref: this.layoutName,
                                onChange: this.resetError,
                                onPressEnter: this.onSubmitConfirmation.bind(this)
                            })
                        )
                    )
                )
            );
        }
    }]);

    return TradingViewPriceChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_7__["connect"])(TradingViewPriceChart, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        return {
            charts: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().chartLayouts
        };
    }
}));

/***/ }),

/***/ 2846:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";function e(t,o){var i=n({},t);for(var s in o)"object"!=typeof t[s]||null===t[s]||Array.isArray(t[s])?void 0!==o[s]&&(i[s]=o[s]):i[s]=e(t[s],o[s]);return i}function o(){return"1.12 (internal id 630b704a @ 2018-06-06 02:16:11.305509)"}function i(t){window.addEventListener("DOMContentLoaded",t,!1)}var n=Object.assign||function(t){for(var e,o=arguments,i=1,n=arguments.length;i<n;i++){e=o[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},s={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},r={width:800,height:500,symbol:"AA",interval:"D",timezone:"UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"W"},{text:"1y",resolution:"W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}},a=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=e(r,t),t.preset){var o=s[t.preset];o?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(o.disabled_features):this._options.disabled_features=o.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(o.enabled_features):this._options.enabled_features=o.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.setLanguage=function(t){this.remove(),this._options.locale=t,this._create()},t.prototype.setSymbol=function(t,e,o){this._innerAPI().changeSymbol(t,e+"",o)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id];var t=this._getIFrameElement();t.contentWindow.destroyChart(),t.parentNode&&t.parentNode.removeChild(t)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,o,i){this._innerAPI().saveChartToServer(t,e,o,i)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=e(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype._getIFrameElement=function(){var t=document.getElementById(this._id);if(null===t)throw new Error("There is no such iframe");return t},t.prototype._innerAPI=function(){return this._getIFrameElement().contentWindow.tradingViewApi},t.prototype._innerWindow=function(){return this._getIFrameElement().contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._getIFrameElement().style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render(),o=document.getElementById(this._options.container_id);if(null===o)throw new Error("There is no such element - #"+this._options.container_id);o.innerHTML=e;var i=this._getIFrameElement();(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize();var n=function(){i.removeEventListener("load",n,!1),i.contentWindow.widgetReady(function(){t._ready=!0;for(var e=0,o=t._readyHandlers;e<o.length;e++){o[e].call(t)}i.contentWindow.initializationFinished()})};i.addEventListener("load",n,!1)},t.prototype._render=function(){var t=window;t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.customFormatters,brokerFactory:this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter},this._options.saved_data&&(t[this._id].chartContent={json:this._options.saved_data});var e=(this._options.library_path||"")+"static/tv-chart.630b704a2b9d0eaf1593.html#localserver=1&symbol="+encodeURIComponent(this._options.symbol)+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+this._options.toolbar_bg.replace("#",""):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.indicators_file_name?"&indicatorsFile="+encodeURIComponent(this._options.indicators_file_name):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+this._options.debug+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}(),d=a;window.TradingView=window.TradingView||{},window.TradingView.version=o,t.version=o,t.onready=i,t.widget=d,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),

/***/ 2847:
/***/ (function(module, exports) {

module.exports = {
    midnightTheme: {
        bidColor: "#50D2C2",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#E3745B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#6BA583",
        negativeColor: "#DB0000",
        strokeColor: "#FFFF00",
        primaryText: "#e0e0e0",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
        tooltipColor: "#fff",
        tooltipFillColor: "#fff",
        //axis
        axisLabelsColor: "#fff",
        axisLineColor: "rgba(200, 200, 200, 0.3)",
        indicatorLineColor: "#FFFFFF",
        bgColor: "#191a1f",
        textColor: "#e0e0e0"
    },
    darkTheme: {
        bidColor: "#6BA583",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#E3745B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#258A14",
        negativeColor: "#DB0000",
        strokeColor: "#FFFF00",
        primaryText: "#e0e0e0",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(0, 0, 0, 0.4)",
        tooltipColor: "#fff",
        tooltipFillColor: "#fff",
        //axis
        axisLabelsColor: "#fff",
        axisLineColor: "rgba(200, 200, 200, 0.3)",
        indicatorLineColor: "#FFFFFF",
        bgColor: "#2a2a2a",
        textColor: "#ffffff"
    },
    lightTheme: {
        bidColor: "#258A14",
        bidFillColor: "rgba(80, 210, 194, 0.5)",
        askColor: "#EA340B",
        askFillColor: "rgba(227, 116, 91, 0.5)",
        callColor: "#BBBF2B",
        settleColor: "rgba(125, 134, 214, 1)",
        settleFillColor: "rgba(125, 134, 214, 0.5)",
        positiveColor: "#528c0a",
        negativeColor: "rgba(225, 66, 74, 1)",
        strokeColor: "#000000",
        primaryText: "#242424",
        volumeColor: "#848484",

        //tooltip
        tooltipBackgroundColor: "rgba(255,255,255, 0.9)",
        tooltipColor: "#000",
        tooltipFillColor: "#000",
        //axis
        axisLabelsColor: "#000",
        axisLineColor: "rgba(200, 200, 200, 0.3)",
        indicatorLineColor: "#848484",
        bgColor: "#fff",
        textColor: "#3d3d3d"
    }
};

/***/ }),

/***/ 2848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFeed", function() { return DataFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInfo", function() { return SymbolInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResolutionsFromBuckets", function() { return getResolutionsFromBuckets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTVTimezone", function() { return getTVTimezone; });
/* harmony import */ var stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2377);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2849);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2378);
/* harmony import */ var common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2145);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var SymbolInfo = function SymbolInfo(options) {
    _classCallCheck(this, SymbolInfo);

    this.name = options.ticker;
    this.ticker = options.ticker;

    var quoteGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__["getGatewayName"])(options.quoteAsset);
    var baseGateway = Object(common_gatewayUtils__WEBPACK_IMPORTED_MODULE_4__["getGatewayName"])(options.baseAsset);
    var currentExchange = quoteGateway === baseGateway ? quoteGateway : quoteGateway && !baseGateway ? quoteGateway : !quoteGateway && baseGateway ? baseGateway : quoteGateway + " / " + baseGateway;

    var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(options.baseAsset),
        baseSymbol = _utils$replaceName.name,
        basePrefix = _utils$replaceName.prefix;

    var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceName(options.quoteAsset),
        quoteSymbol = _utils$replaceName2.name,
        quotePrefix = _utils$replaceName2.prefix;

    this.description = "" + (quotePrefix || "") + quoteSymbol + " / " + (basePrefix || "") + baseSymbol + " " + (!!currentExchange ? "(" + currentExchange + ")" : "");
    this.type = "bitcoin";
    this.session = "24x7";
    this.timezone = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz.guess();
    this.data_status = "streaming";
    this.supported_resolutions = options.resolutions;
    this.has_empty_bars = true;
    this.pricescale = Math.pow(10, options.baseAsset.get("precision"));
    this.quoteAsset = options.quoteAsset;
    this.baseAsset = options.baseAsset;
    this.minmov = 1;

    this.has_intraday = this.supported_resolutions.reduce(function (supported, r) {
        return supported || !isNaN(parseInt(r, 10));
    }, false);
    this.intraday_multipliers = this.supported_resolutions.filter(function (r) {
        return !isNaN(parseInt(r, 10));
    });

    this.has_seconds = this.supported_resolutions.reduce(function (supported, r) {
        return supported || r.indexOf("S") !== -1;
    }, false);
    this.seconds_multipliers = this.supported_resolutions.filter(function (r) {
        return r.indexOf("S") !== -1;
    });

    this.has_daily = this.supported_resolutions.reduce(function (supported, r) {
        return supported || r.indexOf("D") !== -1;
    }, false);

    this.has_daily = this.supported_resolutions.reduce(function (supported, r) {
        return supported || r.indexOf("D") !== -1;
    }, false);
};

function getResolutionsFromBuckets(buckets) {
    var resolutions = buckets.map(function (r) {
        var minute = r / 60;
        var day = minute / 60 / 24;
        var week = day / 7;

        if (minute < 1) {
            // below 1 minute we return Seconds
            return r + "S";
        } else if (day < 1 && parseInt(minute, 10) === minute) {
            // below 1 day we return Minutes
            return minute.toString();
        } else if (week < 1) {
            // below 1 week we return Days
            if (day >= 1) {
                if (parseInt(day, 10) === day) {
                    if (day === 1) return "D";
                    return day + "D";
                }
            }
        } else {
            // we return weeks
            if (week >= 1) {
                if (parseInt(week, 10) === week) {
                    return week + "D";
                }
            }
        }

        return null;
    }).filter(function (a) {
        return !!a;
    });

    return resolutions;
}

function getBucketFromResolution(r) {
    if (r === "D") return 24 * 60 * 60;

    if (r.indexOf("W") !== -1) {
        return parseInt(r.replace("D", ""), 10) * 7 * 24 * 60 * 60;
    } else if (r.indexOf("D") !== -1) {
        return parseInt(r.replace("D", ""), 10) * 24 * 60 * 60;
    } else if (r.indexOf("S") !== -1) {
        return parseInt(r.replace("S", ""), 10);
    } else {
        return parseInt(r, 10) * 60;
    }
}

var DataFeed = function () {
    function DataFeed() {
        _classCallCheck(this, DataFeed);
    }

    _createClass(DataFeed, [{
        key: "update",
        value: function update(options) {
            for (var key in options) {
                switch (key) {
                    case "resolutions":
                        this.supported_resolutions = getResolutionsFromBuckets(options.resolutions);
                        break;

                    case "onMarketChange":
                        stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe("market_change");
                        stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("market_change", options[key]);
                        break;

                    default:
                        this[key] = options[key];
                }
            }
        }
    }, {
        key: "clearSubs",
        value: function clearSubs() {
            stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].clearSubs();
        }
    }, {
        key: "onReady",
        value: function onReady(callback) {
            var _this = this;

            setTimeout(function () {
                callback({
                    exchanges: [{
                        value: "OPEN.",
                        name: "Openledger",
                        desc: "Openledger Gateway"
                    }],
                    symbols_types: [],
                    supported_resolutions: _this.supported_resolutions,
                    supports_marks: false,
                    supports_search: false,
                    supports_time: true
                });
            }, 10);
        }
    }, {
        key: "searchSymbols",
        value: function searchSymbols(userInput, exchange, symbolType, onResultReadyCallback) {
            console.log("searchSymbols", userInput, exchange, symbolType);

            onResultReadyCallback([]);

            /*
            [
                {
                    "symbol": "<short symbol name>",
                    "full_name": "<full symbol name>", // e.g. BTCE:BTCUSD
                    "description": "<symbol description>",
                    "exchange": "<symbol exchange name>",
                    "ticker": "<symbol ticker name, optional>",
                    "type": "stock" // or "futures" or "bitcoin" or "forex" or "index"
                },
                {
                    //    .....
                }
            ]
            */
        }
    }, {
        key: "resolveSymbol",
        value: function resolveSymbol(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
            var _this2 = this;

            var _symbolName$split = symbolName.split("_"),
                _symbolName$split2 = _slicedToArray(_symbolName$split, 2),
                quote = _symbolName$split2[0],
                base = _symbolName$split2[1];

            Promise.all([Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["FetchChain"])("getAsset", quote), Object(bitsharesjs__WEBPACK_IMPORTED_MODULE_1__["FetchChain"])("getAsset", base)]).then(function (assets) {
                var _assets = _slicedToArray(assets, 2),
                    quoteAsset = _assets[0],
                    baseAsset = _assets[1];

                onSymbolResolvedCallback(new SymbolInfo({
                    ticker: symbolName,
                    quoteAsset: quoteAsset,
                    baseAsset: baseAsset,
                    resolutions: _this2.supported_resolutions
                }));
            }).catch(onResolveErrorCallback);
        }
    }, {
        key: "getBars",
        value: function getBars(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
            var _this3 = this;

            from *= 1000;
            to *= 1000;
            var bars = this._getHistory();
            this.latestBar = bars[bars.length - 1];
            bars = bars.filter(function (a) {
                return a.time >= from && a.time <= to;
            });

            if (this.interval !== resolution) {
                if (!firstDataRequest) return;

                var newBucketSize = getBucketFromResolution(resolution);
                actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].changeBucketSize(newBucketSize);

                return actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].unSubscribeMarket(symbolInfo.quoteAsset.get("id"), symbolInfo.baseAsset.get("id")).then(function () {
                    actions_MarketsActions__WEBPACK_IMPORTED_MODULE_3__["default"].subscribeMarket(symbolInfo.baseAsset, symbolInfo.quoteAsset, newBucketSize).then(function () {
                        var bars = _this3._getHistory();
                        _this3.latestBar = bars[bars.length - 1];
                        bars = bars.filter(function (a) {
                            return a.time >= from && a.time <= to;
                        });
                        _this3.interval = resolution;
                        if (!bars.length) return onHistoryCallback(bars, { noData: true });
                        onHistoryCallback(bars);
                    });
                });
            }

            // console.log(
            //     "getBars",
            //     symbolInfo.ticker,
            //     resolution,
            //     "firstDataRequest",
            //     firstDataRequest,
            //     "bars",
            //     bars
            // );
            this.interval = resolution;
            if (!bars.length) return onHistoryCallback(bars, { noData: true });

            onHistoryCallback(bars);
        }
    }, {
        key: "_getHistory",
        value: function _getHistory() {
            return stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].getState().priceData;
        }
    }, {
        key: "subscribeBars",
        value: function subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
            var _this4 = this;

            stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].unsubscribe("subscribeBars");
            onResetCacheNeededCallback();
            stores_MarketsStore__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("subscribeBars", function () {
                var bars = _this4._getHistory();
                var newBars = bars.filter(function (a) {
                    if (!_this4.latestBar) return true;
                    return a.time > _this4.latestBar.time;
                });
                // console.log("subscribeBars", MarketsStore.getState().activeMarket, "found new bars:", newBars);
                if (newBars.length) {
                    newBars.forEach(function (bar) {
                        onRealtimeCallback(bar);
                    });
                    _this4.latestBar = newBars[newBars.length - 1];
                } else {
                    // Check if latest bar is different
                    var didChange = false;
                    for (var key in _this4.latestBar) {
                        if (_this4.latestBar[key] !== bars[bars.length - 1][key]) {
                            didChange = true;
                        }
                    }
                    if (didChange) {
                        onRealtimeCallback(bars[bars.length - 1]);
                    }
                }
            });
        }
    }, {
        key: "unsubscribeBars",
        value: function unsubscribeBars() {
            /*
            * This is ALWAYS called after subscribeBars for some reason, but
            * sometimes it executes BEFORE the subscribe call in subscribeBars and
            * sometimes AFTER. This causes the callback to be cleared and we stop
            * receiving updates from the MarketStore. Unless we find it causes bugs,
            * it's best to just not use this.
            */
            // MarketsStore.unsubscribe("subscribeBars");
            // this.latestBar = null;
        }
    }, {
        key: "calculateHistoryDepth",
        value: function calculateHistoryDepth(resolution, resolutionBack, intervalBack) {
            return undefined;
        }
    }, {
        key: "getServerTime",
        value: function getServerTime(callback) {
            callback(new Date().getTime() / 1000);
        }
    }]);

    return DataFeed;
}();

var supportedTimeZones = ["America/Argentina/Buenos_Aires", "America/Bogota", "America/Caracas", "America/Chicago", "America/El_Salvador", "America/Los_Angeles", "America/Mexico_City", "America/New_York", "America/Phoenix", "America/Sao_Paulo", "America/Toronto", "America/Vancouver", "Asia/Almaty", "Asia/Ashkhabad", "Asia/Bangkok", "Asia/Dubai", "Asia/Hong_Kong", "Asia/Kathmandu", "Asia/Kolkata", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Taipei", "Asia/Tehran", "Asia/Tokyo", "Australia/ACT", "Australia/Adelaide", "Australia/Brisbane", "Australia/Sydney", "Europe/Athens", "Europe/Berlin", "Europe/Istanbul", "Europe/London", "Europe/Madrid", "Europe/Moscow", "Europe/Paris", "Europe/Warsaw", "Europe/Zurich", "Pacific/Auckland", "Pacific/Chatham", "Pacific/Fakaofo", "Pacific/Honolulu", "US/Mountain"];

function getTVTimezone() {
    var current = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz.guess();
    var defaultZone = "Europe/London";

    var isSupported = supportedTimeZones.indexOf(current) !== -1;
    if (isSupported) return current;else {
        /* Try to find a matching timezone from the limited list supported by TradingView */
        var time = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default()().toISOString();
        var actual = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz(time, current).format();
        for (var i = 0; i < supportedTimeZones.length; i++) {
            var zoneTime = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz(time, supportedTimeZones[i]);
            if (zoneTime.format() === actual) {
                if (false) {}
                // Found a match, return that zone
                return supportedTimeZones[i];
            }
        }
    }
    console.log("No matching timezone found for " + current + ", setting to default value of Europe/London");
    return defaultZone;
}



/***/ }),

/***/ 2852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2853);
/* harmony import */ var react_highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(580);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2847);
/* harmony import */ var assets_colors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_colors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2139);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(607);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var DepthHighChart = function (_React$Component) {
    _inherits(DepthHighChart, _React$Component);

    function DepthHighChart() {
        _classCallCheck(this, DepthHighChart);

        return _possibleConstructorReturn(this, (DepthHighChart.__proto__ || Object.getPrototypeOf(DepthHighChart)).apply(this, arguments));
    }

    _createClass(DepthHighChart, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            var settleCheck = isNaN(nextProps.feedPrice) ? false : nextProps.feedPrice !== this.props.feedPrice;
            return Object(common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["didOrdersChange"])(nextProps.orders, this.props.orders) || Object(common_MarketClasses__WEBPACK_IMPORTED_MODULE_9__["didOrdersChange"])(nextProps.call_orders, this.props.call_orders) || settleCheck || nextProps.feedPrice !== this.props.feedPrice || nextProps.height !== this.props.height || nextProps.isPanelActive !== this.props.isPanelActive || nextProps.activePanels !== this.props.activePanels || nextProps.LCP !== this.props.LCP || nextProps.showCallLimit !== this.props.showCallLimit || nextProps.hasPrediction !== this.props.hasPrediction || nextProps.feedPrice !== this.props.feedPrice || nextProps.marketReady !== this.props.marketReady;
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.reflowChart(500);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.refs.depthChart && nextProps.activePanels !== this.props.activePanels) {
                this.reflowChart(100);
            }
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            if (this.props.centerRef) {
                this.tempScroll = this.props.centerRef.scrollTop;
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            if (this.props.centerRef) {
                this.props.centerRef.scrollTop = this.tempScroll;
            }
        }
    }, {
        key: "reflowChart",
        value: function reflowChart(timeout) {
            var _this2 = this;

            setTimeout(function () {
                if (_this2.refs.depthChart) {
                    _this2.refs.depthChart.chart.reflow();
                }
            }, timeout);
        }
    }, {
        key: "_getThemeColors",
        value: function _getThemeColors() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            return assets_colors__WEBPACK_IMPORTED_MODULE_7___default.a[props.theme];
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                flat_bids = _props.flat_bids,
                flat_asks = _props.flat_asks,
                flat_calls = _props.flat_calls,
                flat_settles = _props.flat_settles,
                totalBids = _props.totalBids,
                totalAsks = _props.totalAsks,
                base = _props.base,
                quote = _props.quote,
                feedPrice = _props.feedPrice;

            var _getThemeColors2 = this._getThemeColors(),
                primaryText = _getThemeColors2.primaryText,
                callColor = _getThemeColors2.callColor,
                settleColor = _getThemeColors2.settleColor,
                settleFillColor = _getThemeColors2.settleFillColor,
                bidColor = _getThemeColors2.bidColor,
                bidFillColor = _getThemeColors2.bidFillColor,
                askColor = _getThemeColors2.askColor,
                askFillColor = _getThemeColors2.askFillColor,
                axisLineColor = _getThemeColors2.axisLineColor;

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(base),
                baseSymbol = _utils$replaceName.name,
                basePrefix = _utils$replaceName.prefix;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(quote),
                quoteSymbol = _utils$replaceName2.name,
                quotePrefix = _utils$replaceName2.prefix;

            baseSymbol = (basePrefix || "") + baseSymbol;
            quoteSymbol = (quotePrefix || "") + quoteSymbol;

            var flatBids = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_bids),
                flatAsks = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_asks),
                flatCalls = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_calls),
                flatSettles = Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_0__["default"])(flat_settles);

            var config = {
                chart: {
                    type: "area",
                    backgroundColor: "rgba(255, 0, 0, 0)",
                    spacing: [10, 0, 5, 0]
                },
                title: {
                    text: null
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                dataGrouping: {
                    enabled: false
                },
                tooltip: {
                    shared: false,
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    useHTML: true,
                    formatter: function formatter() {
                        return "\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>" + counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.price") + ":</td>\n\t\t\t\t\t\t\t<td style=\"text-align: right\">" + common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.x, base.get("precision")) + " " + baseSymbol + "/" + quoteSymbol + "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>" + counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("exchange.quantity") + ":</td>\n\t\t\t\t\t\t\t<td style=\"text-align: right\">" + common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.y, quote.get("precision")) + " " + quoteSymbol + "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t";
                    },
                    style: {
                        color: "#FFFFFF"
                    }
                },
                series: [],
                yAxis: {
                    labels: {
                        enabled: true,
                        style: {
                            color: primaryText
                        },
                        formatter: function formatter() {
                            return common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.value, quote.get("precision"));
                        }
                    },
                    opposite: false,
                    title: {
                        text: null,
                        style: {
                            color: "#FFFFFF"
                        }
                    },
                    gridLineWidth: 1,
                    gridLineColor: "rgba(196, 196, 196, 0.30)",
                    gridZIndex: 1,
                    crosshair: {
                        snap: false
                    },
                    currentPriceIndicator: {
                        enabled: false
                    }
                },
                xAxis: {
                    labels: {
                        style: {
                            color: primaryText
                            // formatter: function() {
                            //     return this.value / power;
                            // }
                        } },
                    ordinal: false,
                    lineColor: "#000000",
                    title: {
                        text: null
                    },
                    plotLines: []
                },
                plotOptions: {
                    area: {
                        animation: false,
                        marker: {
                            enabled: false
                        },
                        series: {
                            enableMouseTracking: false
                        }
                    }
                }
            };

            // Center the charts between bids and asks
            if (flatBids.length > 0 && flatAsks.length > 0) {
                var middleValue = (flatAsks[0][0] + flatBids[flatBids.length - 1][0]) / 2;

                config.xAxis.min = middleValue * 0.4;
                config.xAxis.max = middleValue * 1.6;
                if (config.xAxis.max < flatAsks[0][0]) {
                    config.xAxis.max = flatAsks[0][0] * 1.5;
                }
                if (config.xAxis.min > flatBids[flatBids.length - 1][0]) {
                    config.xAxis.min = flatBids[flatBids.length - 1][0] * 0.5;
                }
                var yMax = 0;
                flatBids.forEach(function (b) {
                    if (b[0] >= config.xAxis.min) {
                        yMax = Math.max(b[1], yMax);
                    }
                });
                flatAsks.forEach(function (a) {
                    if (a[0] <= config.xAxis.max) {
                        yMax = Math.max(a[1], yMax);
                    }
                });
                config.yAxis.max = yMax * 1.15;

                // Adjust y axis label decimals
                var yLabelDecimals = yMax > 10 ? 0 : yMax > 1 ? 2 : 5;
                config.yAxis.labels.formatter = function () {
                    return common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(this.value, yLabelDecimals);
                };
            } else if (flatBids.length && !flatAsks.length) {
                config.xAxis.min = flatBids[flatBids.length - 1][0] * 0.4;
                config.xAxis.max = flatBids[flatBids.length - 1][0] * 1.6;
            } else if (flatAsks.length && !flatBids.length) {
                config.xAxis.min = 0;
                config.xAxis.max = flatAsks[0][0] * 2;
            }

            if (this.props.hasPrediction) {
                config.xAxis.min = -0.05;
                config.xAxis.max = 1.05;
            }

            // Add plotlines if defined
            // if (falsethis.props.plotLine) {
            //	 config.xAxis.plotLines.push({
            //		 color: "red",
            //		 id: "plot_line",
            //		 dashStyle: "longdashdot",
            //		 value: this.props.plotLine * power,
            //		 width: 1,
            //		 zIndex: 5
            //	 });
            // }

            // Market asset
            if (this.props.LCP) {
                var bitAsset = base.get("bitasset_data_id") ? base : quote;

                var mcr = bitAsset.getIn(["bitasset", "current_feed", "maintenance_collateral_ratio"]) / 1000;

                var sqr = bitAsset.getIn(["bitasset", "current_feed", "maximum_short_squeeze_ratio"]) / 1000;

                var settlement_support_price = this.props.invertedCalls ? this.props.LCP / mcr * sqr : this.props.LCP * mcr / sqr;

                config.xAxis.plotLines.push({
                    color: axisLineColor,
                    id: "plot_line",
                    dashStyle: "longdash",
                    value: this.props.LCP,
                    label: {
                        text: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.block.call_limit", {
                            price: this.props.LCP.toFixed(4)
                        }),
                        style: {
                            color: primaryText,
                            fontWeight: "bold"
                        },
                        x: !this.props.invertedCalls ? -10 : 5
                    },
                    width: 2,
                    zIndex: 5
                });

                config.xAxis.plotLines.push({
                    color: axisLineColor,
                    id: "plot_line",
                    dashStyle: "longdash",
                    value: settlement_support_price,
                    label: {
                        text: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.block.gs_support", {
                            price: settlement_support_price.toFixed(4)
                        }),
                        style: {
                            color: primaryText,
                            fontWeight: "bold"
                        },
                        x: this.props.invertedCalls ? -10 : 5
                    },
                    width: 2,
                    zIndex: 5
                });
            }

            // if (this.props.SQP) {
            // 	 config.xAxis.plotLines.push({
            // 		 color: "#B6B6B6",
            // 		 id: "plot_line",
            // 		 dashStyle: "longdash",
            // 		 value: this.props.SQP * power,
            // 		 label: {
            // 			 text: counterpart.translate("exchange.squeeze"),
            // 			 style: {
            // 				 color: "#DADADA",
            // 				 fontWeight: "bold"
            // 			 }
            // 		 },
            // 		 width: 2,
            // 		 zIndex: 5
            // 	 });
            // }

            if (feedPrice) {
                var settlementColor = base.has("bitasset") ? askColor : bidColor;
                config.xAxis.plotLines.push({
                    color: settlementColor,
                    id: "plot_line",
                    dashStyle: "solid",
                    value: feedPrice,
                    label: {
                        text: counterpart__WEBPACK_IMPORTED_MODULE_5___default.a.translate("explorer.block.feed_price", {
                            price: feedPrice.toFixed(4)
                        }),
                        style: {
                            color: primaryText,
                            fontWeight: "bold"
                        },
                        x: !this.props.invertedCalls ? -10 : 5
                    },
                    width: 2,
                    zIndex: 5
                });

                // Add calls if present
                if (flatCalls && flatCalls.length) {
                    config.series.push({
                        name: "Call " + quoteSymbol,
                        data: flatCalls,
                        color: callColor
                    });
                }
            }

            // Add settle orders
            if (feedPrice && flatSettles && flatSettles.length) {
                config.series.push({
                    name: "Settle " + quoteSymbol,
                    data: flatSettles,
                    color: settleColor,
                    fillColor: settleFillColor
                });
            }

            // Push asks and bids
            if (flatBids.length) {
                config.series.push({
                    step: "right",
                    name: "Bid " + quoteSymbol,
                    data: flatBids,
                    color: bidColor,
                    fillColor: bidFillColor
                });
            }

            if (flatAsks.length) {
                config.series.push({
                    step: "left",
                    name: "Ask " + quoteSymbol,
                    data: flatAsks,
                    color: askColor,
                    fillColor: askFillColor
                });
            }

            // Fix the height if defined, else use 400px;
            if (this.props.height) {
                config.chart.height = this.props.height;
            } else {
                config.chart.height = "400px";
            }

            // Add onClick event listener if defined
            if (this.props.onClick) {
                config.chart.events = {
                    click: this.props.onClick.bind(this)
                };
            }

            if (this.props.noFrame) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-content no-overflow no-padding" },
                    !flatBids.length && !flatAsks.length && !flatCalls.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "span",
                        { className: "no-data" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "exchange.no_data" })
                    ) : null,
                    this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        { className: "bid-total" },
                        common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalBids, base.get("precision")),
                        " ",
                        baseSymbol
                    ),
                    this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "p",
                        { className: "ask-total" },
                        common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalAsks, quote.get("precision")),
                        " ",
                        quoteSymbol
                    ),
                    flatBids || flatAsks || flatCalls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_3___default.a, { config: config }) : null
                );
            } else {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-content no-overflow no-padding middle-content" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "exchange-bordered", id: "depth_chart" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "div",
                            { className: "exchange-content-header" },
                            this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "bid-total" },
                                common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalBids, base.get("precision")),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__["default"], { name: base.get("symbol") })
                            ),
                            this.props.noText ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                "span",
                                { className: "ask-total float-right" },
                                common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].format_number(totalAsks, quote.get("precision")),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_8__["default"], { name: quote.get("symbol") })
                            )
                        ),
                        !flatBids.length && !flatAsks.length && !flatCalls.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "span",
                            { className: "no-data" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "exchange.no_data" })
                        ) : null,
                        flatBids || flatAsks || flatCalls ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_highcharts__WEBPACK_IMPORTED_MODULE_3___default.a, { ref: "depthChart", config: config }) : null
                    )
                );
            }
        }
    }]);

    return DepthHighChart;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

DepthHighChart.defaultProps = {
    flat_bids: [],
    flat_asks: [],
    orders: {},
    noText: false,
    noFrame: true
};

DepthHighChart.propTypes = {
    flat_bids: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
    flat_asks: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
    orders: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (DepthHighChart);

/***/ }),

/***/ 2857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(562);
/* harmony import */ var alt_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1999);
/* harmony import */ var _Notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2858);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var NotifierContainer = function (_React$Component) {
    _inherits(NotifierContainer, _React$Component);

    function NotifierContainer() {
        _classCallCheck(this, NotifierContainer);

        return _possibleConstructorReturn(this, (NotifierContainer.__proto__ || Object.getPrototypeOf(NotifierContainer)).apply(this, arguments));
    }

    _createClass(NotifierContainer, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                alt_container__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                    stores: [stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"]],
                    inject: {
                        account: function account() {
                            return stores_AccountStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().currentAccount;
                        }
                    }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Notifier__WEBPACK_IMPORTED_MODULE_3__["default"], null)
            );
        }
    }]);

    return NotifierContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NotifierContainer);

/***/ }),

/***/ 2858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2859);
/* harmony import */ var react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(742);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2560);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(536);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2012);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2013);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(429);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var operations = bitsharesjs__WEBPACK_IMPORTED_MODULE_7__["ChainTypes"].operations;


var ops = Object.keys(operations);

var Notifier = function (_React$Component) {
    _inherits(Notifier, _React$Component);

    function Notifier() {
        _classCallCheck(this, Notifier);

        return _possibleConstructorReturn(this, (Notifier.__proto__ || Object.getPrototypeOf(Notifier)).apply(this, arguments));
    }

    _createClass(Notifier, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.account && nextProps.account.size && this.props.account && this.props.account.get("history")) {
                var ch = this.props.account.get("history") && this.props.account.get("history").first() ? this.props.account.get("history").first().toJS() : null;
                var nh = nextProps.account.get("history") && nextProps.account.get("history").first() ? nextProps.account.get("history").first().toJS() : null;
                if (nh && ch) {
                    // Only trigger notifications for order fills
                    if (ops[nh.op[0]] === "fill_order" && (!ch && nh.id || nh.id !== ch.id)) {
                        react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish("account-notify", "open");
                        setTimeout(function () {
                            react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_2___default.a.publish("account-notify", "close");
                        }, 5000);
                    }
                }
            }
        }
    }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            if (!nextProps.account || !this.props.account) return false;
            return !immutable__WEBPACK_IMPORTED_MODULE_4___default.a.is(nextProps.account.get("history"), this.props.account.get("history")) || !immutable__WEBPACK_IMPORTED_MODULE_4___default.a.is(nextProps.account, this.props.account);
        }
    }, {
        key: "render",
        value: function render() {
            var account = this.props.account;


            if (!account) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
            }

            var trx = void 0,
                info = void 0;

            if (this.props.account.get("history") && this.props.account.get("history").size) {
                trx = this.props.account.get("history").first().toJS();
                if (trx) {
                    info = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Blockchain_Operation__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        key: trx.id,
                        op: trx.op,
                        result: trx.result,
                        block: trx.block_num,
                        current: account.get("id"),
                        hideDate: true,
                        hideFee: true
                    });
                }
            }

            if (!trx) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_foundation_apps_src_notification__WEBPACK_IMPORTED_MODULE_1___default.a.Static,
                {
                    id: "account-notify",
                    title: null,
                    image: "",
                    wrapperElement: "div"
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "table",
                    { className: "table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "tbody",
                        null,
                        info
                    )
                )
            );
        }
    }]);

    return Notifier;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Notifier.propTypes = {
    account: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_5__["default"].ChainAccount.isRequired
};

Notifier = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_6__["default"])(Notifier);

/* harmony default export */ __webpack_exports__["default"] = (Notifier);

/***/ }),

/***/ 2867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(742);
/* harmony import */ var react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1901);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(607);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(580);
/* harmony import */ var _Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2013);
/* harmony import */ var _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2012);
/* harmony import */ var actions_AccountActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(578);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2380);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2142);
/* harmony import */ var _Utility_CopyButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2351);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1903);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1996);
/* harmony import */ var common_trxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(606);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1895);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(734);
/* harmony import */ var _Utility_DecimalChecker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2137);
/* harmony import */ var api_apiConfig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(740);
/* harmony import */ var branding__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(594);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(429);
/* harmony import */ var components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2146);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

























var DepositWithdrawContent = function (_DecimalChecker) {
    _inherits(DepositWithdrawContent, _DecimalChecker);

    function DepositWithdrawContent(props) {
        _classCallCheck(this, DepositWithdrawContent);

        var _this = _possibleConstructorReturn(this, (DepositWithdrawContent.__proto__ || Object.getPrototypeOf(DepositWithdrawContent)).call(this));

        _this.state = {
            toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].getLast(props.walletType),
            withdrawValue: "",
            amountError: null,
            symbol: props.asset.get("symbol"),
            to_withdraw: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                asset_id: props.asset.get("id"),
                precision: props.asset.get("precision")
            }),
            feeAsset: {
                asset_id: bitsharesjs__WEBPACK_IMPORTED_MODULE_21__["ChainStore"].assets_by_symbol.get(props.fee_asset_symbol) || "1.3.0",
                amount: 0
            },
            loading: false,
            emptyAddressDeposit: false
        };

        _this._validateAddress(_this.state.toAddress, props);

        _this.addDepositAddress = _this.addDepositAddress.bind(_this);
        _this._checkBalance = _this._checkBalance.bind(_this);
        _this._getCurrentBalance = _this._getCurrentBalance.bind(_this);
        return _this;
    }

    _createClass(DepositWithdrawContent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this._getDepositAddress();
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (np.asset && this.props.asset && np.asset.get("id") !== this.props.asset.get("id")) {
                this.setState({
                    to_withdraw: new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                        asset_id: np.asset.get("id"),
                        precision: np.asset.get("precision")
                    }),
                    gateFee: np.asset.get("gateFee"),
                    intermediateAccount: np.asset.get("intermediateAccount"),
                    symbol: np.asset.get("symbol"),
                    memo: "",
                    withdrawValue: "",
                    receive_address: null,
                    toAddress: common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["WithdrawAddresses"].getLast(np.walletType)
                }, this._getDepositAddress);
            }
        }
    }, {
        key: "_getDepositAddress",
        value: function _getDepositAddress() {
            if (!this.props.backingCoinType) return;

            var receive_address = Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["getDepositAddress"])({
                coin: "open." + this.props.backingCoinType.toLowerCase(),
                account: this.props.account,
                stateCallback: this.addDepositAddress
            });

            if (!receive_address) {
                Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["requestDepositAddress"])(this._getDepositObject());
            } else {
                this.setState({
                    receive_address: receive_address
                });
            }
        }
    }, {
        key: "_getDepositObject",
        value: function _getDepositObject() {
            return {
                inputCoinType: this.props.backingCoinType.toLowerCase(),
                outputCoinType: this.props.symbol.toLowerCase(),
                outputAddress: this.props.sender.get("name"),
                stateCallback: this.addDepositAddress
            };
        }
    }, {
        key: "requestDepositAddressLoad",
        value: function requestDepositAddressLoad() {
            this.setState({
                loading: true,
                emptyAddressDeposit: false
            });
            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["requestDepositAddress"])(this._getDepositObject());
        }
    }, {
        key: "addDepositAddress",
        value: function addDepositAddress(receive_address) {
            if (receive_address.error) {
                receive_address.error.message === "no_address" ? this.setState({ emptyAddressDeposit: true }) : this.setState({ emptyAddressDeposit: false });
            }

            this.setState({
                receive_address: receive_address,
                loading: false
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            react_tooltip__WEBPACK_IMPORTED_MODULE_8___default.a.rebuild();
        }
    }, {
        key: "getMemo",
        value: function getMemo() {
            return this.props.backingCoinType.toLowerCase() + ":" + this.state.toAddress + (this.state.memo ? ":" + new Buffer(this.state.memo, "utf-8") : "");
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(e) {
            e.preventDefault();
            if (this.state.to_withdraw.getAmount() === 0) {
                return this.setState({
                    amountError: "transfer.errors.pos"
                });
            }

            if (!this.props.intermediateAccount) return;

            var fee = this.state.feeAsset;
            var gateFee = this._getGateFee();

            var sendAmount = this.state.to_withdraw.clone();

            var balanceAmount = sendAmount.clone(this._getCurrentBalance().get("balance"));

            sendAmount.plus(gateFee);

            /* Insufficient balance */
            if (balanceAmount.lt(sendAmount)) {
                // Send the originally entered amount
                sendAmount = this.state.to_withdraw.clone();
            }

            actions_AccountActions__WEBPACK_IMPORTED_MODULE_7__["default"].transfer(this.props.sender.get("id"), this.props.intermediateAccount, this.state.to_withdraw.getAmount(), this.state.to_withdraw.asset_id, this.getMemo(), null, fee.asset_id);
        }
    }, {
        key: "_updateAmount",
        value: function _updateAmount() {
            var feeAsset = this.state.feeAsset;

            var currentBalance = this._getCurrentBalance();

            var total = new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                amount: currentBalance ? currentBalance.get("balance") : 0,
                asset_id: this.props.asset.get("id"),
                precision: this.props.asset.get("precision")
            });

            // Subtract the fee if it is using the same asset
            if (total.asset_id === feeAsset.asset_id) {
                total.minus(feeAsset);
            }

            this.state.to_withdraw.setAmount({ sats: total.getAmount() });
            this.setState({
                withdrawValue: total.getAmount({ real: true }),
                amountError: null
            }, this._checkBalance);
        }
    }, {
        key: "_getCurrentBalance",
        value: function _getCurrentBalance() {
            var _this2 = this;

            var balances = this.props.balance ? [bitsharesjs__WEBPACK_IMPORTED_MODULE_21__["ChainStore"].getObject(this.props.balance)] : this.props.balances;

            return !!balances ? balances.find(function (b) {
                return b && b.get("asset_type") === _this2.props.asset.get("id");
            }) : null;
        }
    }, {
        key: "_checkBalance",
        value: function _checkBalance() {
            var _state = this.state,
                feeAsset = _state.feeAsset,
                to_withdraw = _state.to_withdraw;
            var asset = this.props.asset;

            var balance = this._getCurrentBalance();
            if (!balance || !feeAsset) return;
            var hasBalance = Object(common_trxHelper__WEBPACK_IMPORTED_MODULE_14__["checkBalance"])(to_withdraw.getAmount({ real: true }), asset, feeAsset, balance, this._getGateFee());
            if (hasBalance === null) return;
            if (this.state.balanceError !== !hasBalance) this.setState({ balanceError: !hasBalance });

            return hasBalance;
        }
    }, {
        key: "_onInputAmount",
        value: function _onInputAmount(e) {
            try {
                this.state.to_withdraw.setAmount({
                    real: parseFloat(e.target.value || 0)
                });
                this.setState({
                    withdrawValue: e.target.value,
                    amountError: null
                }, this._checkBalance);
            } catch (err) {
                console.error("err:", err);
            }
        }
    }, {
        key: "_onInputTo",
        value: function _onInputTo(e) {
            var toAddress = e.target.value.trim();

            this.setState({
                withdraw_address_check_in_progress: true,
                withdraw_address_selected: toAddress,
                validAddress: null,
                toAddress: toAddress
            });

            this._validateAddress(toAddress);
        }
    }, {
        key: "_onMemoChanged",
        value: function _onMemoChanged(e) {
            this.setState({ memo: e.target.value });
        }
    }, {
        key: "_validateAddress",
        value: function _validateAddress(address) {
            var _this3 = this;

            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

            Object(common_gatewayMethods__WEBPACK_IMPORTED_MODULE_10__["validateAddress"])({
                url: api_apiConfig__WEBPACK_IMPORTED_MODULE_18__["openledgerAPIs"].BASE,
                walletType: props.walletType,
                newAddress: address
            }).then(function (isValid) {
                if (_this3.state.toAddress === address) {
                    _this3.setState({
                        withdraw_address_check_in_progress: false,
                        validAddress: !!isValid
                    });
                }
            }).catch(function (err) {
                console.error("Error when validating address:", err);
            });
        }
    }, {
        key: "_openRegistrarSite",
        value: function _openRegistrarSite(e) {
            e.preventDefault();
            var newWnd = window.open(stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].site_registr, "_blank");
            newWnd.opener = null;
        }
    }, {
        key: "_getGateFee",
        value: function _getGateFee() {
            var _props = this.props,
                gateFee = _props.gateFee,
                asset = _props.asset;

            return new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                real: parseFloat(gateFee ? gateFee.replace(",", "") : 0),
                asset_id: asset.get("id"),
                precision: asset.get("precision")
            });
        }
    }, {
        key: "onFeeChanged",
        value: function onFeeChanged(asset) {
            this.setState({
                feeAsset: asset
            });
        }
    }, {
        key: "_renderWithdraw",
        value: function _renderWithdraw() {
            var _state2 = this.state,
                amountError = _state2.amountError,
                toAddress = _state2.toAddress,
                memo = _state2.memo,
                feeAsset = _state2.feeAsset,
                balanceError = _state2.balanceError,
                withdrawValue = _state2.withdrawValue,
                validAddress = _state2.validAddress;
            var _props2 = this.props,
                supportsMemos = _props2.supportsMemos,
                asset = _props2.asset,
                account = _props2.account;

            var _utils$replaceName = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(asset),
                assetName = _utils$replaceName.name;

            var tabIndex = 1;

            // if(this.props.fiatModal){
            //     if(~this.props.fiatModal.indexOf('canFiatWith')){
            //         return (<WithdrawFiatOpenLedger
            //             account={this.props.account}
            //             issuer_account="openledger-fiat"
            //             deposit_asset={this.props.asset.get("symbol").split('OPEN.').join('')}
            //             receive_asset={this.props.asset.get("symbol")}
            //             rpc_url={SettingsStore.rpc_url}
            //         />);
            //     }else{
            //         return (<p>Click <a href='#' onClick={this._openRegistrarSite} >here</a> to register for deposits </p>);
            //     }
            // }

            var currentFee = feeAsset;

            var trxInfoContent = this.getMemo();

            var disableSubmit = !currentFee || balanceError || !toAddress || !withdrawValue;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        content: "gateway.withdraw_funds",
                        asset: assetName,
                        wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_19__["getWalletName"])()
                    })
                ),
                this._renderCurrentBalance(),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("modal.withdraw.amount")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            tabIndex: tabIndex++,
                            type: "number",
                            min: "0",
                            onKeyPress: this.onKeyPress.bind(this),
                            value: withdrawValue,
                            onChange: this._onInputAmount.bind(this)
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "form-label select floating-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "dropdown-wrapper inactive" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    assetName
                                )
                            )
                        )
                    ),
                    amountError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: amountError })
                    ) : null,
                    this.state.balanceError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        {
                            className: "has-error no-margin",
                            style: { paddingTop: 10 }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "transfer.errors.insufficient" })
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row withdraw-fee-selector" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Utility_FeeAssetSelector__WEBPACK_IMPORTED_MODULE_22__["default"], {
                        label: "showcases.barter.fee_when_proposal_executes",
                        account: account,
                        transaction: {
                            type: "transfer",
                            options: ["price_per_kbyte"],
                            data: {
                                type: "memo",
                                content: trxInfoContent
                            }
                        },
                        onChange: this.onFeeChanged.bind(this)
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("modal.withdraw.address")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            placeholder: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("gateway.withdraw_placeholder", { asset: assetName }),
                            tabIndex: tabIndex++,
                            type: "text",
                            value: toAddress,
                            onChange: this._onInputTo.bind(this)
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "form-label select floating-dropdown" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "dropdown-wrapper inactive" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__["Tooltip"],
                                    {
                                        placement: "right",
                                        title: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.withdraw_address", { asset: assetName })
                                    },
                                    "?"
                                )
                            )
                        )
                    ),
                    !validAddress && toAddress ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            content: "gateway.valid_address",
                            coin_type: assetName
                        })
                    ) : null
                ),
                supportsMemos ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("transfer.memo")
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "inline-label input-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
                            rows: "3",
                            value: memo,
                            tabIndex: tabIndex++,
                            onChange: this._onMemoChanged.bind(this)
                        })
                    ),
                    !validAddress && toAddress ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            content: "gateway.valid_address",
                            coin_type: assetName
                        })
                    ) : null
                ) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "button-group SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            tabIndex: tabIndex++,
                            className: "button" + (disableSubmit ? " disabled" : ""),
                            onClick: this.onSubmit.bind(this),
                            type: "submit"
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.withdraw_now" })
                    )
                )
            );
        }
    }, {
        key: "_renderDeposit",
        value: function _renderDeposit() {
            var _state3 = this.state,
                receive_address = _state3.receive_address,
                loading = _state3.loading,
                emptyAddressDeposit = _state3.emptyAddressDeposit;

            var _utils$replaceName2 = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName2.name;

            var hasMemo = receive_address && "memo" in receive_address && receive_address.memo;
            var addressValue = receive_address && receive_address.address || "";
            var tabIndex = 1;

            // if(this.props.fiatModal){
            //     if(~this.props.fiatModal.indexOf('canFiatDep')){
            //         return (<DepositFiatOpenLedger
            //             account={this.props.account}
            //             issuer_account="openledger-fiat"
            //             deposit_asset={this.props.asset.get("symbol").split('OPEN.').join('')}
            //             receive_asset={this.props.asset.get("symbol")}
            //             rpc_url={SettingsStore.rpc_url}
            //         />);
            //     }else{
            //         return (<p>Click <a href='#' onClick={this._openRegistrarSite} >here</a> to register for deposits </p>);
            //     }
            // }
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: !addressValue ? "no-overflow" : "" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        unsafe: true,
                        content: "gateway.add_funds",
                        account: this.props.sender.get("name"),
                        wallet_name: Object(branding__WEBPACK_IMPORTED_MODULE_19__["getWalletName"])()
                    })
                ),
                this._renderCurrentBalance(),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__["Tooltip"],
                        {
                            placement: "right",
                            title: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.deposit_tip", {
                                asset: assetName
                            })
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "p",
                            { style: { marginBottom: 10 } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                                className: "help-tooltip",
                                content: "gateway.deposit_to",
                                asset: assetName
                            }),
                            ":",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "fz_12 left-label" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.deposit_notice_delay" })
                            )
                        )
                    ),
                    !addressValue ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], { type: "three-bounce" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        null,
                        emptyAddressDeposit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.please_generate_address" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "inline-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                readOnly: true,
                                type: "text",
                                value: addressValue
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_11__["default"], { text: addressValue }),
                            " "
                        )
                    ),
                    hasMemo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "inline-label" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                readOnly: true,
                                type: "text",
                                value: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("transfer.memo") + ": " + receive_address.memo
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_CopyButton__WEBPACK_IMPORTED_MODULE_11__["default"], { text: receive_address.memo })
                        )
                    ) : null,
                    receive_address && receive_address.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "has-error", style: { paddingTop: 10 } },
                        receive_address.error.message
                    ) : null
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "button-group SimpleTrade__withdraw-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            tabIndex: tabIndex++,
                            className: "button spinner-button-circle",
                            onClick: this.requestDepositAddressLoad.bind(this),
                            type: "submit"
                        },
                        loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], { type: "circle" }) : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, { content: "gateway.generate_new" })
                    )
                )
            );
        }
    }, {
        key: "_renderCurrentBalance",
        value: function _renderCurrentBalance() {
            var _utils$replaceName3 = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(this.props.asset),
                assetName = _utils$replaceName3.name;

            var isDeposit = this.props.action === "deposit";

            var currentBalance = this._getCurrentBalance();

            var asset = currentBalance ? new common_MarketClasses__WEBPACK_IMPORTED_MODULE_3__["Asset"]({
                asset_id: currentBalance.get("asset_type"),
                precision: this.props.asset.get("precision"),
                amount: currentBalance.get("balance")
            }) : null;

            // TEMP //
            // asset = new Asset({
            //     asset_id: this.props.asset.get("id"),
            //     precision: this.props.asset.get("precision"),
            //     amount: 65654645
            // });

            var applyBalanceButton = isDeposit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                    style: { border: "2px solid black", borderLeft: "none" },
                    className: "form-label"
                },
                assetName
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__["Tooltip"],
                {
                    placement: "right",
                    title: counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("tooltip.withdraw_full")
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button",
                        style: { border: "2px solid black", borderLeft: "none" },
                        onClick: this._updateAmount.bind(this, !currentBalance ? 0 : parseInt(currentBalance.get("balance"), 10))
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], { name: "clippy", title: "icons.clippy.withdraw_full" })
                )
            );

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: "SimpleTrade__withdraw-row",
                    style: { fontSize: "1rem" }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "label",
                    { style: { fontSize: "1rem" } },
                    counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("gateway.balance_asset", {
                        asset: assetName
                    }),
                    ":",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "inline-label" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            disabled: true,
                            style: {
                                color: "black",
                                border: "2px solid black",
                                padding: 10,
                                width: "100%"
                            },
                            value: !asset ? 0 : asset.getAmount({ real: true })
                        }),
                        applyBalanceButton
                    )
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _props3 = this.props,
                asset = _props3.asset,
                action = _props3.action;

            var isDeposit = action === "deposit";

            if (!asset) {
                return null;
            }

            var _utils$replaceName4 = common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceName(asset),
                assetName = _utils$replaceName4.name;

            var content = this.props.isDown ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    className: "txtlabel cancel",
                    content: "gateway.unavailable_OPEN",
                    component: "p"
                })
            ) : !this.props.isAvailable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    className: "txtlabel cancel",
                    content: "gateway.unavailable",
                    component: "p"
                })
            ) : isDeposit ? this._renderDeposit() : this._renderWithdraw();

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "SimpleTrade__modal" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block vertical no-overflow",
                        style: {
                            zIndex: 1002,
                            paddingLeft: "2rem",
                            paddingRight: "2rem",
                            paddingTop: "1rem"
                        }
                    },
                    content
                )
            );
        }
    }]);

    return DepositWithdrawContent;
}(_Utility_DecimalChecker__WEBPACK_IMPORTED_MODULE_17__["DecimalChecker"]);

DepositWithdrawContent.propTypes = {
    balance: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainObject,
    sender: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAccount.isRequired,
    asset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAsset.isRequired,
    coreAsset: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAsset.isRequired,
    globalObject: _Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_6__["default"].ChainAsset.isRequired
};
DepositWithdrawContent.defaultProps = {
    coreAsset: "1.3.0",
    globalObject: "2.0.0"
};


DepositWithdrawContent = Object(alt_react__WEBPACK_IMPORTED_MODULE_15__["connect"])(DepositWithdrawContent, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"]];
    },
    getProps: function getProps(props) {
        return {
            fee_asset_symbol: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_16__["default"].getState().settings.get("fee_asset")
        };
    }
});

DepositWithdrawContent = Object(_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_5__["default"])(DepositWithdrawContent);

var SimpleDepositWithdrawModal = function (_React$Component) {
    _inherits(SimpleDepositWithdrawModal, _React$Component);

    function SimpleDepositWithdrawModal() {
        _classCallCheck(this, SimpleDepositWithdrawModal);

        var _this4 = _possibleConstructorReturn(this, (SimpleDepositWithdrawModal.__proto__ || Object.getPrototypeOf(SimpleDepositWithdrawModal)).call(this));

        _this4.state = { open: false };
        return _this4;
    }

    _createClass(SimpleDepositWithdrawModal, [{
        key: "show",
        value: function show() {
            var _this5 = this;

            this.setState({ open: true }, function () {
                react_foundation_apps_src_utils_foundation_api__WEBPACK_IMPORTED_MODULE_1___default.a.publish(_this5.props.modalId, "open");
            });
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.setState({ open: false });
        }
    }, {
        key: "render",
        value: function render() {
            var isDeposit = this.props.action === "deposit";

            var title = isDeposit ? counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("gateway.deposit") : counterpart__WEBPACK_IMPORTED_MODULE_9___default.a.translate("modal.withdraw.submit");

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_20__["Modal"],
                {
                    title: title,
                    footer: [],
                    visible: this.props.visible,
                    onCancel: this.props.hideModal,
                    className: "test",
                    onClose: this.onClose.bind(this),
                    overlay: true,
                    id: this.props.modalId
                },
                this.props.visible ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DepositWithdrawContent, _extends({}, this.props, {
                    open: this.props.visible
                })) : null
            );
        }
    }]);

    return SimpleDepositWithdrawModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SimpleDepositWithdrawModal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(436).Buffer))

/***/ }),

/***/ 2869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(745);
/* harmony import */ var bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1855);
/* harmony import */ var _Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2139);
/* harmony import */ var _services_Exchange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2720);
/* harmony import */ var _Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2136);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(596);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var PriceAlert = function (_React$Component) {
    _inherits(PriceAlert, _React$Component);

    function PriceAlert(props) {
        _classCallCheck(this, PriceAlert);

        var _this = _possibleConstructorReturn(this, (PriceAlert.__proto__ || Object.getPrototypeOf(PriceAlert)).call(this, props));

        var testRules = [];

        _this.state = {
            rules: [].concat(testRules)
        };

        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleAddRule = _this.handleAddRule.bind(_this);
        _this.handleTypeChange = _this.handleTypeChange.bind(_this);
        _this.handleDeleteRule = _this.handleDeleteRule.bind(_this);
        _this.handlePriceChange = _this.handlePriceChange.bind(_this);
        _this.handlePriceFieldBlur = _this.handlePriceFieldBlur.bind(_this);
        return _this;
    }

    _createClass(PriceAlert, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (!prevProps.visible && this.props.visible) {
                var example = {
                    type: _services_Exchange__WEBPACK_IMPORTED_MODULE_4__["PRICE_ALERT_TYPES"].HIGHER_THAN,
                    price: this.props.latestPrice ? Number(this.props.latestPrice) : null
                };

                var rules = [];

                if (!this.props.rules.length) {
                    rules = !this.state.openedPreviously ? [example] : [];
                } else {
                    rules = this.props.rules;
                }

                this.setState({
                    rules: rules,
                    openedPreviously: true
                });
            }
        }
    }, {
        key: "handleTypeChange",
        value: function handleTypeChange(key) {
            var _this2 = this;

            return function (value) {
                var rules = _this2.state.rules.map(function (rule, ruleKey) {
                    if (Number(key) !== Number(ruleKey)) return rule;

                    var validate = _this2.validatePrice(value, Number(rule.price), Number(_this2.props.latestPrice));

                    return _extends({}, rule, validate, {
                        type: String(value)
                    });
                });

                _this2.setState({
                    rules: rules
                });
            };
        }
    }, {
        key: "validatePrice",
        value: function validatePrice(type, price, latest) {
            if (type === _services_Exchange__WEBPACK_IMPORTED_MODULE_4__["PRICE_ALERT_TYPES"].HIGHER_THAN && price < latest) {
                return {
                    validateStatus: "error",
                    help: "Price of Alert should be higher than current price"
                };
            }

            if (type === _services_Exchange__WEBPACK_IMPORTED_MODULE_4__["PRICE_ALERT_TYPES"].LOWER_THAN && price > latest) {
                return {
                    validateStatus: "error",
                    help: "Price of Alert  should be lower than current price"
                };
            }

            return {
                validateStatus: "success",
                help: ""
            };
        }
    }, {
        key: "validatePriceFieldByKey",
        value: function validatePriceFieldByKey(key) {
            var _this3 = this;

            var rules = this.state.rules.map(function (rule, ruleKey) {
                if (Number(key) !== Number(ruleKey)) return rule;

                var validate = _this3.validatePrice(rule.type, Number(rule.price), Number(_this3.props.latestPrice));

                return _extends({}, rule, {
                    validateStatus: validate.validateStatus,
                    help: validate.help
                });
            });

            this.setState({
                rules: rules
            });
        }
    }, {
        key: "handlePriceFieldBlur",
        value: function handlePriceFieldBlur(key) {
            var _this4 = this;

            return function () {
                _this4.validatePriceFieldByKey(key);
            };
        }
    }, {
        key: "handlePriceChange",
        value: function handlePriceChange(key) {
            var _this5 = this;

            return function (event) {
                var rules = _this5.state.rules.map(function (rule, ruleKey) {
                    if (Number(key) !== Number(ruleKey)) return rule;

                    var validate = {};

                    // validate on a fly if field was touched previously
                    if (rule.validateStatus) {
                        validate = _this5.validatePrice(rule.type, Number(event.target.value), Number(_this5.props.latestPrice));
                    }

                    return _extends({}, rule, validate, {
                        price: event.target.value
                    });
                });

                _this5.setState({
                    rules: rules
                });
            };
        }
    }, {
        key: "handleAddRule",
        value: function handleAddRule() {
            var rules = [].concat(_toConsumableArray(this.state.rules));

            rules.push({
                type: _services_Exchange__WEBPACK_IMPORTED_MODULE_4__["PRICE_ALERT_TYPES"].HIGHER_THAN,
                price: this.props.latestPrice ? Number(this.props.latestPrice) : null
            });

            this.setState({
                rules: rules
            });
        }
    }, {
        key: "handleDeleteRule",
        value: function handleDeleteRule(key) {
            var _this6 = this;

            return function () {
                var rules = _this6.state.rules.filter(function (item, ruleKey) {
                    return Number(ruleKey) !== Number(key);
                });

                _this6.setState({
                    rules: rules
                });
            };
        }
    }, {
        key: "handleSave",
        value: function handleSave() {
            this.props.onSave(this.state.rules);
        }
    }, {
        key: "render",
        value: function render() {
            var _this7 = this;

            if (!this.props.quoteAsset || !this.props.quoteAsset.get || !this.props.baseAsset || !this.props.baseAsset.get) return null;

            var footer = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                { key: "submit", type: "primary", onClick: this.handleSave },
                counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("modal.save")
            ), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"],
                { key: "cancel", onClick: this.props.hideModal },
                counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("modal.cancel")
            )];

            var baseAssetSymbol = this.props.baseAsset.get("symbol");
            var quoteAssetSymbol = this.props.quoteAsset.get("symbol");

            var linkToExchange = quoteAssetSymbol + "_" + baseAssetSymbol;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Modal"],
                {
                    visible: this.props.visible,
                    onCancel: this.props.hideModal,
                    title: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.price_alert.title"),
                    footer: footer
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "exchange--price-alert" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "exchange--price-alert--description" },
                        this.state.rules.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.price_alert.alert_when"),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                                { to: linkToExchange },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { name: quoteAssetSymbol }),
                                "/",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { name: baseAssetSymbol })
                            ),
                            " ",
                            "price:"
                        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.price_alert.use_button"),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
                                { to: linkToExchange },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { name: quoteAssetSymbol }),
                                "/",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], { name: baseAssetSymbol })
                            ),
                            ":"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"],
                            { layout: "vertical" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "exchange--price-alert--items" },
                                this.state.rules.map(function (rule, key) {
                                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Form"].Item,
                                        {
                                            key: key,
                                            validateStatus: rule.validateStatus || null,
                                            help: rule.help || null
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"].Group,
                                            {
                                                className: "exchange--price-alert--item",
                                                compact: true
                                            },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Select"],
                                                {
                                                    value: rule.type,
                                                    style: { width: "200px" },
                                                    onChange: _this7.handleTypeChange(key)
                                                },
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Select"].Option,
                                                    {
                                                        value: _services_Exchange__WEBPACK_IMPORTED_MODULE_4__["PRICE_ALERT_TYPES"].HIGHER_THAN,
                                                        key: "1"
                                                    },
                                                    counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.price_alert.higher_than")
                                                ),
                                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                    bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Select"].Option,
                                                    {
                                                        value: _services_Exchange__WEBPACK_IMPORTED_MODULE_4__["PRICE_ALERT_TYPES"].LOWER_THAN,
                                                        key: "2"
                                                    },
                                                    counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.price_alert.lower_than")
                                                )
                                            ),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                                                onBlur: _this7.handlePriceFieldBlur(key),
                                                style: {
                                                    width: "calc(100% - 200px - 32px)",
                                                    marginTop: "1px"
                                                },
                                                onChange: _this7.handlePriceChange(key),
                                                value: rule.price,
                                                className: "exchange--price-alert--item--price",
                                                placeholder: counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.price_alert.price"),
                                                addonAfter: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Utility_AssetName__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                    name: baseAssetSymbol
                                                })
                                            }),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                                                style: { width: "32px" },
                                                onClick: _this7.handleDeleteRule(key),
                                                className: "exchange--price-alert--item--control",
                                                type: "icon",
                                                icon: "delete"
                                            })
                                        )
                                    );
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "exchange--price-alert--items--add" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "a",
                                    {
                                        href: "javascript:void(0)",
                                        onClick: this.handleAddRule
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bitshares_ui_style_guide__WEBPACK_IMPORTED_MODULE_1__["Icon"], { type: "plus" }),
                                    " ",
                                    counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate("exchange.price_alert.add_rule")
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PriceAlert;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PriceAlert = Object(_Utility_AssetWrapper__WEBPACK_IMPORTED_MODULE_5__["default"])(PriceAlert, {
    propNames: ["quoteAsset", "baseAsset"]
});

/* harmony default export */ __webpack_exports__["default"] = (PriceAlert);

/***/ }),

/***/ 2870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(399);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(734);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(839);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 *  Wrapper component for chatbro iframe
 *
 */

var ChatBro = function (_React$Component) {
    _inherits(ChatBro, _React$Component);

    function ChatBro() {
        _classCallCheck(this, ChatBro);

        return _possibleConstructorReturn(this, (ChatBro.__proto__ || Object.getPrototypeOf(ChatBro)).apply(this, arguments));
    }

    _createClass(ChatBro, [{
        key: "render",
        value: function render() {
            var frameHeight = this.props.height || "30%";

            var currentLocale = stores_SettingsStore__WEBPACK_IMPORTED_MODULE_1__["default"].getState().settings.get("locale");

            var chatUrl = null;
            switch (currentLocale) {
                default:
                    chatUrl = "https://chat.rudex.org/" + currentLocale + "/";
                    break;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
                style: { height: frameHeight, width: "100%" },
                src: chatUrl,
                sandbox: "allow-same-origin allow-forms allow-scripts allow-popups"
            });

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
                style: { height: frameHeight, width: "100%" },
                src: chatUrl,
                sandbox: "allow-same-origin allow-forms allow-scripts allow-popups"
            });
        }
    }]);

    return ChatBro;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ChatBro.propTypes = {
    height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (ChatBro);

/***/ })

}]);