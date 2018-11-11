(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 2865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var api_ApplicationApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(588);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(550);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(568);
/* harmony import */ var actions_NotificationActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(590);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_6__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var CreateWorker = function (_React$Component) {
    _inherits(CreateWorker, _React$Component);

    function CreateWorker() {
        _classCallCheck(this, CreateWorker);

        var _this = _possibleConstructorReturn(this, (CreateWorker.__proto__ || Object.getPrototypeOf(CreateWorker)).call(this));

        _this.state = {
            title: null,
            start: new Date(),
            end: null,
            pay: null,
            url: "http://",
            vesting: 7
        };
        return _this;
    }

    _createClass(CreateWorker, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return np.currentAccount !== this.props.currentAccount, !common_utils__WEBPACK_IMPORTED_MODULE_4__["default"].are_equal_shallow(ns, this.state);
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            api_ApplicationApi__WEBPACK_IMPORTED_MODULE_2__["default"].createWorker(this.state, this.props.currentAccount).catch(function (error) {
                console.log("error", error);
                var error_msg = error.message && error.message.length && error.message.length > 0 ? error.message.split("stack")[0] : "unknown error";

                actions_NotificationActions__WEBPACK_IMPORTED_MODULE_5__["default"].addNotification({
                    message: "Failed to create worker: " + error_msg,
                    level: "error",
                    autoDismiss: 10
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log("state:", this.state);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block", style: { paddingTop: 20 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-content large-9 large-offset-3 small-12" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        content: "explorer.workers.create",
                        component: "h3"
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        { style: { maxWidth: 800 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.create_text_1",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.create_text_2",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.workers.title" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                onChange: function onChange(e) {
                                    _this2.setState({ title: e.target.value });
                                },
                                type: "text"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.name_text",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: {
                                    width: "50%",
                                    paddingRight: "2.5%",
                                    display: "inline-block"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "account.votes.start" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    onChange: function onChange(e) {
                                        _this2.setState({
                                            start: new Date(e.target.value)
                                        });
                                    },
                                    type: "date"
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                style: {
                                    width: "50%",
                                    paddingLeft: "2.5%",
                                    display: "inline-block"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "account.votes.end" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                    onChange: function onChange(e) {
                                        _this2.setState({
                                            end: new Date(e.target.value)
                                        });
                                    },
                                    type: "date"
                                })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.date_text",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.workers.daily_pay" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                onChange: function onChange(e) {
                                    _this2.setState({ pay: e.target.value });
                                },
                                type: "number"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.pay_text",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.workers.website" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                onChange: function onChange(e) {
                                    _this2.setState({ url: e.target.value });
                                },
                                type: "text"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.url_text",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, { content: "explorer.workers.vesting_pay" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                defaultValue: this.state.vesting,
                                onChange: function onChange(e) {
                                    _this2.setState({
                                        vesting: parseInt(e.target.value)
                                    });
                                },
                                type: "number"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_6___default.a, {
                            content: "explorer.workers.vesting_text",
                            component: "p"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                                className: "button-group",
                                onClick: this.onSubmit.bind(this)
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "button", type: "submit" },
                                "Publish"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return CreateWorker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CreateWorker = Object(alt_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(CreateWorker, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_3__["default"].getState().currentAccount
        };
    }
}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXdvcmtlci4xNmI5ZjlmZjQ1YmY1MWYwMWRjNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9BY2NvdW50L0NyZWF0ZVdvcmtlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgQXBwbGljYXRpb25BcGkgZnJvbSBcImFwaS9BcHBsaWNhdGlvbkFwaVwiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBub3RpZnkgZnJvbSBcImFjdGlvbnMvTm90aWZpY2F0aW9uQWN0aW9uc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuXG5jbGFzcyBDcmVhdGVXb3JrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgZW5kOiBudWxsLFxuICAgICAgICAgICAgcGF5OiBudWxsLFxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9cIixcbiAgICAgICAgICAgIHZlc3Rpbmc6IDdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobnAsIG5zKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBucC5jdXJyZW50QWNjb3VudCAhPT0gdGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCxcbiAgICAgICAgICAgICF1dGlscy5hcmVfZXF1YWxfc2hhbGxvdyhucywgdGhpcy5zdGF0ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgQXBwbGljYXRpb25BcGkuY3JlYXRlV29ya2VyKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudEFjY291bnRcbiAgICAgICAgKS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgICAgIGxldCBlcnJvcl9tc2cgPVxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IGVycm9yLm1lc3NhZ2Uuc3BsaXQoXCJzdGFja1wiKVswXVxuICAgICAgICAgICAgICAgICAgICA6IFwidW5rbm93biBlcnJvclwiO1xuXG4gICAgICAgICAgICBub3RpZnkuYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRmFpbGVkIHRvIGNyZWF0ZSB3b3JrZXI6ICR7ZXJyb3JfbXNnfWAsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICBhdXRvRGlzbWlzczogMTBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGU6XCIsIHRoaXMuc3RhdGUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrXCIgc3R5bGU9e3twYWRkaW5nVG9wOiAyMH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IGxhcmdlLTkgbGFyZ2Utb2Zmc2V0LTMgc21hbGwtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLndvcmtlcnMuY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gc3R5bGU9e3ttYXhXaWR0aDogODAwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLndvcmtlcnMuY3JlYXRlX3RleHRfMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci53b3JrZXJzLmNyZWF0ZV90ZXh0XzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndvcmtlcnMudGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0aXRsZTogZS50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci53b3JrZXJzLm5hbWVfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMi41JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImFjY291bnQudm90ZXMuc3RhcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjIuNSVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJhY2NvdW50LnZvdGVzLmVuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLndvcmtlcnMuZGF0ZV90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci53b3JrZXJzLmRhaWx5X3BheVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3BheTogZS50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLndvcmtlcnMucGF5X3RleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cImV4cGxvcmVyLndvcmtlcnMud2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VybDogZS50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci53b3JrZXJzLnVybF90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGNvbnRlbnQ9XCJleHBsb3Jlci53b3JrZXJzLnZlc3RpbmdfcGF5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZlc3Rpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlc3Rpbmc6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJleHBsb3Jlci53b3JrZXJzLnZlc3RpbmdfdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1Ymxpc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChDcmVhdGVXb3JrZXIgPSBjb25uZWN0KENyZWF0ZVdvcmtlciwge1xuICAgIGxpc3RlblRvKCkge1xuICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgfSxcbiAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY2NvdW50OiBBY2NvdW50U3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50QWNjb3VudFxuICAgICAgICB9O1xuICAgIH1cbn0pKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFIQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFOQTtBQUZBO0FBUEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQU5BO0FBRkE7QUFQQTtBQW1CQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQVBBO0FBRkE7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQS9HQTtBQUxBO0FBREE7QUFpSUE7Ozs7QUE5S0E7QUFDQTtBQWdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFSQTs7OztBIiwic291cmNlUm9vdCI6IiJ9